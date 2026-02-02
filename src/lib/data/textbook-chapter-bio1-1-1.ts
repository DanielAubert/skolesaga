/**
 * Biologi 1 - Kapittel 1.1: Cellens struktur og organeller
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_1_1: TextbookChapter = {
  id: 'bio1-1-1',
  courseId: 'biologi-1',
  chapterNumber: '1.1',
  title: 'Cellens struktur og organeller',
  description: 'Lær om celleteoriens historie, cellens oppbygging, de ulike organellene og deres funksjoner, forskjellen mellom prokaryote og eukaryote celler, samt mikroskopimetoder.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for celleteoriens tre hovedprinsipper og den historiske utviklingen',
    'beskrive oppbyggingen og funksjonen til de viktigste organellene i eukaryote celler',
    'sammenligne prokaryote og eukaryote celler',
    'sammenligne planteceller og dyreceller',
    'forklare endosymbioseteorien og dens bevisgrunnlag',
    'forklare sammenhengen mellom overflate/volum-forholdet og cellestørrelse',
    'beskrive ulike mikroskopimetoder og deres bruksområder',
  ],
  content: [
    // =========================================================================
    // INNLEDNING
    // =========================================================================
    {
      id: 'bio1-1-1-intro',
      type: 'text',
      content: `# Cellens struktur og organeller

Alle levende organismer er bygd opp av **celler**. Cellen er livets grunnenhet, og for å forstå biologi må vi forstå cellen. I dette kapittelet skal vi se på hvordan celleteori ble utviklet, hvilke strukturer cellen inneholder, og hvordan ulike organeller samarbeider for å opprettholde livet.

## Hvorfor studere celler?

Cellekunnskap er grunnlaget for all moderne biologi og medisin:

- **Medisin:** Sykdommer som kreft, diabetes og infeksjoner kan bare forstås når vi kjenner cellens funksjoner.
- **Bioteknologi:** Genteknologi, stamcelleforskning og vaksineproduksjon forutsetter dyp forståelse av cellebiologi.
- **Evolusjon:** Likheter og forskjeller mellom celler gir viktige ledetråder om hvordan livet har utviklet seg.
- **Økologi:** Fotosyntese og celleånding er grunnlaget for energiflyten i alle økosystemer.

Celler varierer enormt i form og størrelse. En bakterie kan være bare 1 mikrometer ($1 \\, \\mu m = 10^{-6}$ m) lang, mens en nervecelle i kroppen din kan strekke seg over en meter. Likevel har alle celler visse fellestrekk: de har en cellemembran, de inneholder DNA, og de utfører stoffskifte.`,
    },

    // =========================================================================
    // CELLETEORIENS HISTORIE
    // =========================================================================
    {
      id: 'bio1-1-1-historie',
      type: 'text',
      content: `## Celleteoriens historie

Oppdagelsen av celler henger tett sammen med utviklingen av mikroskopet. Før mikroskopet fantes hadde mennesker ingen anelse om at levende organismer var bygd opp av bittesmå enheter.

### Robert Hooke (1665)

Den engelske naturforskeren **Robert Hooke** var blant de første som observerte celler. Han studerte et tynt snitt av kork under et primitivt mikroskop og oppdaget at korken var delt inn i små, regelmessige rom. Han kalte dem **cellae** (latin for «små rom»), fordi de minnet ham om munkeceller i et kloster. Det Hooke faktisk så, var de tomme celleveggene i dødt plantevev, ikke levende celler.

### Antonie van Leeuwenhoek (1670-tallet)

Den nederlandske linsetvirkeren **Antonie van Leeuwenhoek** bygde sine egne mikroskoper med ekstremt godt slipte linser. Han oppnådde forstørrelser på opptil 270 ganger, noe som var langt bedre enn datidens sammensatte mikroskoper. Leeuwenhoek var den første som observerte:

- **Bakterier** (som han kalte «animalcules», dvs. «smådyr»)
- **Protister** i dammer og innsjøer
- **Spermatozoer** (sædceller)
- **Røde blodceller**

Leeuwenhoek betraktes som mikrobiologiens far, og hans observasjoner åpnet en helt ny verden for vitenskapen.

### Matthias Schleiden og Theodor Schwann (1838-1839)

Botanikeren **Matthias Schleiden** konkluderte i 1838 med at alle planter er bygd opp av celler. Året etter foreslo zoologen **Theodor Schwann** det samme for dyr. Sammen formulerte de de to første prinsippene i celleteorien:

1. Alle levende organismer er bygd opp av én eller flere celler.
2. Cellen er den grunnleggende enheten for liv.

### Rudolf Virchow (1855)

Den tyske legen **Rudolf Virchow** la til det tredje prinsippet med sin berømte formulering **«Omnis cellula e cellula»** – alle celler oppstår fra eksisterende celler. Dette avviste den gamle ideen om spontangenerasjon (at liv kunne oppstå fra dødt materiale). Virchow var også en pioner innen patologi og viste at sykdom skyldes forandringer i kroppens celler.`,
    },
    {
      id: 'bio1-1-1-def-celle',
      type: 'definition',
      title: 'Celle',
      content: 'En celle er den minste strukturelle og funksjonelle enheten i en levende organisme. Alle celler er omgitt av en cellemembran, inneholder arvemateriale (DNA) og utfører livsprosesser som stoffskifte, vekst og reproduksjon. Celler varierer i størrelse fra cirka 0,2 mikrometer (mykoplasma-bakterier) til flere centimeter (fugleegg, der hele eggeplommen er én celle).',
    },

    // =========================================================================
    // CELLETEORIEN
    // =========================================================================
    {
      id: 'bio1-1-1-celleteori',
      type: 'text',
      content: `## Celleteoriens tre hovedprinsipper

Celleteorien er et av de mest grunnleggende konseptene i biologi. Den består av tre prinsipper:

### 1. Alle levende organismer er bygd opp av én eller flere celler

Noen organismer, som bakterier og amøber, er **encellede** – de består av bare én celle som utfører alle livsfunksjoner. Andre organismer, som mennesker, er **flercellede** og kan bestå av billioner av spesialiserte celler som samarbeider.

### 2. Cellen er den grunnleggende strukturelle og funksjonelle enheten for liv

Selv om virus kan formere seg, regnes de ikke som levende fordi de mangler egen cellestruktur og ikke kan utføre stoffskifte på egen hånd. Cellen er det minste nivået der alle kjennetegn på liv finnes: opptak av næringsstoffer, energiomsetning, vekst, reproduksjon, respons på omgivelsene og opprettholdelse av indre likevekt (homeostase).

### 3. Alle celler oppstår fra eksisterende celler

Nye celler dannes ved celledeling. Dette prinsippet avviser spontangenerasjon og betyr at det finnes en ubrutt cellelinje fra de første cellene som oppstod for rundt 3,8 milliarder år siden og fram til alle celler som lever i dag. Hvert eneste menneske startet som én enkelt befruktet eggcelle (zygote).

Moderne cellebiologi har utvidet celleteorien med tillegg som:
- Cellens kjemiske sammensetning er grunnleggende lik i alle levende organismer
- Energistrøm (stoffskifte og biokjemi) skjer inne i celler
- Celler inneholder arvemateriale (DNA) som overføres til datterceller ved celledeling
- Alle celler har i prinsippet lik kjemisk sammensetning`,
    },

    // =========================================================================
    // PROKARYOTE VS EUKARYOTE CELLER
    // =========================================================================
    {
      id: 'bio1-1-1-prok-euk',
      type: 'text',
      content: `## Prokaryote og eukaryote celler

Alle celler deles i to hovedkategorier basert på hvordan de er organisert: **prokaryote** og **eukaryote** celler.

### Prokaryote celler

Ordet «prokaryot» kommer fra gresk og betyr «før kjernen». Prokaryoter mangler en membranomsluttet cellekjerne. Deres DNA ligger fritt i et område av cytoplasmaet som kalles **nukleoiden**.

Kjennetegn:
- **Ingen membranomsluttede organeller** (ingen kjerne, ingen mitokondrier, intet ER)
- **Små:** Typisk 0,2–10 $\\mu$m i diameter
- **Sirkulært DNA** i nukleoiden, ofte med ekstra små DNA-ringer kalt **plasmider**
- **70S ribosomer** (mindre enn eukaryote ribosomer)
- Mange har en **cellevegg** utenfor cellemembranen
- Noen har **flageller** for bevegelse og **pili** for feste
- Eksempler: bakterier og arkeer

### Eukaryote celler

Ordet «eukaryot» betyr «ekte kjerne». Eukaryoter har en tydelig cellekjerne omgitt av en dobbel membran, samt en rekke andre membranbundne organeller.

Kjennetegn:
- **Membranomsluttet kjerne** med DNA organisert i lineære kromosomer
- **Mange membranbundne organeller** (mitokondrier, ER, golgiapparat osv.)
- **Større:** Typisk 10–100 $\\mu$m i diameter
- **80S ribosomer** (større enn prokaryote ribosomer)
- Kompleks **cytoskjelett** for struktur og bevegelse
- Eksempler: dyr, planter, sopp og protister

| Egenskap | Prokaryot | Eukaryot |
|----------|-----------|----------|
| Kjerne | Nei (nukleoid) | Ja (membranomsluttet) |
| DNA-form | Sirkulært | Lineært (kromosomer) |
| Ribosomer | 70S | 80S |
| Membranorganeller | Nei | Ja |
| Typisk størrelse | 0,2–10 $\\mu$m | 10–100 $\\mu$m |
| Cellevegg | Ofte (peptidoglykan) | Planter (cellulose), sopp (kitin) |
| Eksempler | Bakterier, arkeer | Dyr, planter, sopp, protister |

I dette kapittelet fokuserer vi videre på de **eukaryote cellenes** organeller. Prokaryote celler behandles mer inngående i kapittel 1.4.`,
    },
    {
      id: 'bio1-1-1-def-organelle',
      type: 'definition',
      title: 'Organelle',
      content: 'En organelle er en avgrenset struktur inne i cellen som utfører bestemte funksjoner, på samme måte som organer utfører bestemte funksjoner i en kropp. Mange organeller er omgitt av membraner (membranbundne organeller), som kjernen, mitokondrier og golgiapparatet. Andre, som ribosomer og cytoskjelettet, mangler membran, men regnes likevel som organeller.',
    },

    // =========================================================================
    // KJERNEN
    // =========================================================================
    {
      id: 'bio1-1-1-kjernen',
      type: 'text',
      content: `## Kjernen (nucleus)

Kjernen er cellens **kontrollsenter** og den største organellen i de fleste eukaryote celler (typisk 5–10 $\\mu$m i diameter). Den inneholder nesten alt DNA-et i cellen og styrer cellens aktiviteter gjennom genekspresjon.

### Kjernemembranen (nuclear envelope)

Kjernen er omgitt av en **dobbel membran** kalt kjernemembranen. Mellom de to membranene er det et rom kalt **perinukleært rom**, som er sammenhengende med det endoplasmatiske retikulum. Den ytre kjernemembranen har ribosomer festet til seg, akkurat som ru ER.

### Kjerneporer

Kjernemembranen er gjennomboret av tusenvis av **kjerneporer** – store proteinkomplekser som regulerer transport mellom kjernen og cytoplasmaet. Gjennom kjerneporene transporteres:
- **mRNA** ut av kjernen (til ribosomene for proteinsyntese)
- **Ribosomale underenheter** ut av kjernen
- **Proteiner** (som transkripsjons­faktorer og histoner) inn i kjernen
- **tRNA** ut av kjernen

Små molekyler og ioner kan passere fritt, mens store molekyler krever aktiv transport med energi (GTP).

### Kromatin og kromosomer

DNA-et i kjernen er organisert sammen med proteiner kalt **histoner** i en struktur som kalles **kromatin**. Når cellen ikke deler seg, er kromatinet «løst pakket» slik at genene er tilgjengelige for avlesning. Før celledeling pakkes kromatinet tett sammen til synlige **kromosomer**. Mennesker har 46 kromosomer (23 par).

### Nukleolus

Inne i kjernen finnes én eller flere tette strukturer kalt **nukleolus** (flertall: nukleoli). Nukleolus er stedet der **ribosomalt RNA (rRNA)** produseres og der ribosomale underenheter settes sammen. En celle som produserer mye protein, har gjerne en stor og tydelig nukleolus.`,
    },
    {
      id: 'bio1-1-1-def-nukleolus',
      type: 'definition',
      title: 'Nukleolus',
      content: 'Nukleolus er en tett, membranløs struktur inne i cellekjernen der ribosomalt RNA (rRNA) syntetiseres og ribosomale underenheter settes sammen. Nukleolus er godt synlig i lysmikroskop som en mørk flekk inne i kjernen. Celler med høy proteinproduksjon har ofte store og tydelige nukleoler.',
    },

    // =========================================================================
    // RIBOSOMER
    // =========================================================================
    {
      id: 'bio1-1-1-ribosomer',
      type: 'text',
      content: `## Ribosomer

Ribosomer er cellens «proteinfabrikker». De oversetter den genetiske koden i mRNA til proteiner, en prosess som kalles **translasjon**. Ribosomer er ikke membranbundne organeller, men komplekse strukturer sammensatt av **ribosomalt RNA (rRNA)** og proteiner.

### Struktur

Hvert ribosom består av to underenheter:
- En **stor underenhet** og en **liten underenhet**
- Underenhetene kobles sammen rundt et mRNA-molekyl under proteinsyntese

### 70S vs. 80S

Ribosomstørrelse måles i **Svedberg-enheter (S)**, som angir sedimentasjonshastighet ved sentrifugering:

- **70S ribosomer** finnes i prokaryoter, mitokondrier og kloroplaster
  - Liten underenhet: 30S
  - Stor underenhet: 50S
- **80S ribosomer** finnes i cytoplasmaet til eukaryote celler
  - Liten underenhet: 40S
  - Stor underenhet: 60S

At mitokondrier og kloroplaster har 70S-ribosomer (som bakterier) er et viktig bevis for endosymbioseteorien.

### Frie og bundne ribosomer

I eukaryote celler finnes ribosomer i to posisjoner:

- **Frie ribosomer** i cytoplasmaet: Produserer proteiner som skal brukes inne i cellen (f.eks. enzymer for stoffskiftet)
- **Bundne ribosomer** festet til ru ER: Produserer proteiner som skal eksporteres ut av cellen, bygges inn i membraner eller sendes til lysosomer

En celle kan ha millioner av ribosomer. Celler med høy proteinproduksjon, som leverceller og plasmaceller (antistoffproduserende celler i immunforsvaret), har spesielt mange ribosomer.`,
    },

    // =========================================================================
    // ENDOPLASMATISK RETIKULUM
    // =========================================================================
    {
      id: 'bio1-1-1-er',
      type: 'text',
      content: `## Endoplasmatisk retikulum (ER)

Det endoplasmatiske retikulum (ER) er et utbredt nettverk av membraner som danner flate sekker (cisterner) og rør i cellens cytoplasma. ER-membranen er sammenhengende med den ytre kjernemembranen, slik at det perinukleære rommet og ER-lumen utgjør et kontinuerlig rom.

ER deles i to typer basert på utseende og funksjon:

### Ru (grovt) ER

Ru ER har **ribosomer festet til overflaten** av membranen, noe som gir det et «grovt» utseende i elektronmikroskop. Funksjoner:

- **Proteinsyntese:** Ribosomene på ru ER produserer proteiner som trenger inn i ER-lumen for videre prosessering
- **Proteinfolding:** Proteiner foldes til korrekt tredimensjonal struktur inne i ER med hjelp av chaperoner
- **Glykosylering:** Karbohydratkjeder festes til proteiner (proteinet blir et glykoprotein)
- **Kvalitetskontroll:** Feilfoldede proteiner merkes for nedbrytning
- **Transport:** Proteiner pakkes i transportvesikler som sendes til golgiapparatet

Ru ER er spesielt godt utviklet i celler som produserer store mengder proteiner for eksport, som bukspyttkjertelceller (som produserer fordøyelsesenzymer) og plasmaceller (som produserer antistoffer).

### Glatt ER

Glatt ER mangler ribosomer på overflaten. Funksjoner:

- **Lipidsyntese:** Produksjon av fosfolipider, steroider og andre lipider
- **Steroidhormonproduksjon:** I binyrebarken og kjønnskjertlene
- **Avgiftning (detoksifisering):** Nedbrytning av legemidler, alkohol og giftstoffer, særlig i leverceller
- **Kalsiumlager:** Lagrer kalsiumioner ($\\text{Ca}^{2+}$), viktig for muskelsammentrekking (i muskelceller kalles glatt ER for sarkoplasmatisk retikulum)
- **Karbohydratmetabolisme:** Glukoneogenese i lever

Glatt ER er spesielt godt utviklet i leverceller (avgiftning), celler i binyrebarken (steroidproduksjon) og muskelceller (kalsiumlagring).`,
    },

    // =========================================================================
    // GOLGIAPPARATET
    // =========================================================================
    {
      id: 'bio1-1-1-golgi',
      type: 'text',
      content: `## Golgiapparatet

Golgiapparatet (også kalt golgikomplekset) ble oppdaget av den italienske legen **Camillo Golgi** i 1898. Det fungerer som cellens «post- og sorteringskontor» – det mottar, modifiserer, sorterer og sender videre proteiner og lipider.

### Struktur

Golgiapparatet består av en stabel med flate, membranomsluttede sekker kalt **cisterner** (typisk 4–8 i stabelen). Stabelen har to sider:

- **Cis-siden** (mottakssiden): Vender mot ER. Her ankommer transportvesikler fra ER.
- **Trans-siden** (sendingssiden): Vender mot cellemembranen. Herfra sendes ferdige produkter ut.

Proteiner og lipider beveger seg fra cis-siden til trans-siden gjennom stabelen, og gjennomgår ulike modifikasjoner underveis.

### Funksjoner

1. **Modifisering av proteiner:**
   - Videre glykosylering (tillegg og endring av sukkergrupper)
   - Fosforylering (tillegg av fosfatgrupper)
   - Proteolyse (klipping av proteiner til aktiv form)

2. **Sortering og pakking:**
   - Proteiner merkes med «adresselapper» (f.eks. mannose-6-fosfat for lysosomproteiner)
   - Pakkes i vesikler for transport til riktig destinasjon

3. **Transport:**
   - **Sekretoriske vesikler:** Innhold som skal skilles ut av cellen (eksocytose)
   - **Lysosomale vesikler:** Enzymer til lysosomer
   - **Membranbundne vesikler:** Proteiner og lipider som skal bygges inn i cellemembranen

4. **Lipidproduksjon:**
   - Produksjon av glykolipider og sfingomyelin

Celler med stor sekretorisk aktivitet, som slimproducerende celler i tarmen og bukspyttkjertelceller, har et spesielt velutviklet golgiapparat.`,
    },

    // =========================================================================
    // MITOKONDRIER
    // =========================================================================
    {
      id: 'bio1-1-1-mitokondrier',
      type: 'text',
      content: `## Mitokondrier – cellens kraftverk

Mitokondrier er organeller som produserer mesteparten av cellens **ATP** (adenosintrifosfat), som er cellens energivaluta. Prosessen kalles **celleånding** og er i grove trekk det omvendte av fotosyntese:

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi (ATP)}$$

### Struktur

Mitokondrier er ovale eller pølseformede organeller, typisk 1–10 $\\mu$m lange. De har en karakteristisk **dobbel membran**:

- **Ytre membran:** Relativt glatt, inneholder poriner som slipper gjennom små molekyler
- **Indre membran:** Sterkt foldet inn i **cristae** (folder) som øker overflatearealet enormt. Den indre membranen inneholder proteinkompleksene i elektrontransportkjeden og ATP-syntase
- **Intermembranrom:** Rommet mellom ytre og indre membran, viktig for oppbygging av protongradienten
- **Matriks:** Rommet innenfor den indre membranen, inneholder enzymer for sitronsyresyklusen, mitokondrielt DNA og ribosomer

### Eget DNA

Mitokondrier har sitt **eget sirkulære DNA** (mtDNA) og egne **70S-ribosomer**, noe som er svært uvanlig for en organelle i en eukaryot celle. Mitokondrielt DNA koder for noen av mitokondriens egne proteiner, men de fleste mitokondrielle proteiner kodes av DNA i cellekjernen.

### Formering

Mitokondrier formerer seg ved **todeling** (binær fisjon), akkurat som bakterier. Nye mitokondrier dannes altså ikke «fra bunnen av», men ved at eksisterende mitokondrier deler seg. Ved celledeling fordeles mitokondriene tilfeldig mellom dattercellene.

### Arv

Mitokondrielt DNA arves nesten utelukkende fra **mor** (maternell arv), fordi eggets cytoplasma (med mitokondrier) utgjør det aller meste av zygotenscytoplasma. Sædcellen bidrar i praksis bare med kjernens DNA. Mitokondrielt DNA brukes derfor i genetikk for å spore morslinje gjennom generasjoner.

En typisk menneskecelle inneholder **1 000–2 000 mitokondrier**, men antallet varierer med energibehovet. Muskelceller og leverceller har spesielt mange mitokondrier.`,
    },
    {
      id: 'bio1-1-1-def-endosymbiose',
      type: 'definition',
      title: 'Endosymbiose',
      content: 'Endosymbiose betyr «å leve sammen inni». Endosymbioseteorien forklarer opprinnelsen til mitokondrier og kloroplaster ved at en stor prokaryot celle tok opp (fagocyterte) en mindre prokaryot celle for rundt 1,5–2 milliarder år siden. I stedet for å bli fordøyd, overlevde den lille cellen inne i den store og utviklet et gjensidig fordelaktig forhold. Over tid ble den oppslukte cellen til en organelle. Bevisene inkluderer dobbel membran, eget sirkulært DNA, 70S-ribosomer og binær fisjon.',
    },

    // =========================================================================
    // KLOROPLASTER
    // =========================================================================
    {
      id: 'bio1-1-1-kloroplaster',
      type: 'text',
      content: `## Kloroplaster – fotosyntesens sete

Kloroplaster finnes i **planteceller og alger** og er stedet der **fotosyntese** foregår. I fotosyntesen omdannes lysenergi til kjemisk energi:

$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{lysenergi} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

### Struktur

Kloroplaster er linseformede organeller, typisk 5–10 $\\mu$m lange. I likhet med mitokondrier har de en **dobbel membran**:

- **Ytre membran:** Glatt, gjennomtrengelig for små molekyler
- **Indre membran:** Mer selektiv transport
- **Stroma:** Væsken inne i kloroplasten (tilsvarer mitokondriens matriks). Inneholder enzymer for Calvin-syklusen (karbonfikseringen), kloroplast-DNA og ribosomer
- **Tylakoider:** Et system av flate, membranomsluttede sekker inne i stroma. Tylakoidmembranen inneholder klorofyll og andre pigmenter, samt proteinkompleksene for lyfreaksjonene
- **Grana** (flertall av granum): Stabler av tylakoider, som ser ut som myntstablere. Grana er forbundet med stroma-tylakoider (lameller)

### Pigmenter

Tylakoidmembranen inneholder flere typer pigmenter som fanger opp lysenergi:
- **Klorofyll a** (absorberer rødt og blått lys, reflekterer grønt – gir planter grønn farge)
- **Klorofyll b** (hjelpepigment)
- **Karotenoider** (absorberer blått/grønt lys, reflekterer gult/oransje – synlige i høstløv)

### Eget DNA og endosymbiose

I likhet med mitokondrier har kloroplaster **eget sirkulært DNA**, **70S-ribosomer** og formerer seg ved **todeling**. Dette er sterke bevis for at kloroplaster stammer fra fotosyntetiserende cyanobakterier som ble tatt opp av en eukaryot celle for rundt 1,5 milliarder år siden (endosymbiose). Den doble membranen forklares ved at den indre membranen er den opprinnelige cyanobakteriens membran, mens den ytre membranen er vertscellens fagocytosevesikkel.`,
    },

    // =========================================================================
    // LYSOSOMER OG PEROKSISOMER
    // =========================================================================
    {
      id: 'bio1-1-1-lysosomer',
      type: 'text',
      content: `## Lysosomer – cellens fordøyelsessystem

Lysosomer er membranbundne vesikler fylt med **hydrolytiske enzymer** (sur hydrolaser) som bryter ned biologiske makromolekyler. De fungerer som cellens «gjenvinningsanlegg» og «forsvarssystem».

### Funksjoner

1. **Intracellulær fordøyelse:** Bryter ned materiale som cellen har tatt opp ved fagocytose (f.eks. bakterier spist av hvite blodceller)
2. **Autofagi:** Bryter ned utslitte eller skadde organeller. Organellen omsluttes av en membran og smelter sammen med et lysosom
3. **Apoptose:** Kontrollert celledød – lysosomene kan frigjøre sine enzymer inn i cytoplasmaet og dermed bidra til å bryte ned cellen fra innsiden
4. **Resirkulering:** Byggeklossene (aminosyrer, sukker, nukleotider) fra nedbrytningen transporteres tilbake til cytoplasmaet for gjenbruk

### Surt miljø

Lysosomenes enzymer er aktive ved lav pH (ca. 4,5–5,0). Lysosommembranen har **protonpumper** (H⁺-ATPaser) som pumper hydrogenioner inn i lysosomet for å opprettholde det sure miljøet. Dersom et lysosom lekker, vil enzymene bli inaktive i cytoplasmets nøytrale pH (ca. 7,2), noe som beskytter cellen.

### Lysosomale lagringssykdommer

Genetiske defekter i lysosomale enzymer fører til **lysosomale lagringssykdommer**, der ufordøyd materiale hoper seg opp i lysosomene. Eksempler er Tay-Sachs sykdom og Gauchers sykdom. Disse sykdommene illustrerer hvor viktig lysosomal funksjon er for cellens helse.

## Peroksisomer – avgiftning og oksidasjon

Peroksisomer er små, membranbundne vesikler (0,2–1,0 $\\mu$m) som inneholder oksidative enzymer.

### Funksjoner

1. **Nedbrytning av fettsyrer:** Spesielt veldig lange fettsyrer (beta-oksidasjon)
2. **Avgiftning:** Nedbrytning av alkohol og andre giftstoffer (viktig i lever- og nyreceller)
3. **Hydrogenperoksidmetabolisme:** Mange oksidative reaksjoner i peroksisomene produserer hydrogenperoksid ($\\text{H}_2\\text{O}_2$), som er giftig. Enzymet **katalase** bryter ned hydrogenperoksid til vann og oksygen:

$$2\\text{H}_2\\text{O}_2 \\xrightarrow{\\text{katalase}} 2\\text{H}_2\\text{O} + \\text{O}_2$$

Peroksisomer dannes ulikt lysosomer – de vokser ved å ta opp proteiner fra cytoplasmaet og deler seg ved todeling, i stedet for å spire av fra golgiapparatet.`,
    },
    {
      id: 'bio1-1-1-def-autofagi',
      type: 'definition',
      title: 'Autofagi',
      content: 'Autofagi (fra gresk: «å spise seg selv») er prosessen der cellen bryter ned og resirkulerer sine egne utslitte eller skadde komponenter. En dobbeltmembran omslutter organellen eller det cellulære materialet og danner et autofagosom, som deretter smelter sammen med et lysosom der innholdet fordøyes. Autofagi er viktig for cellerenovering, for å overleve perioder med næringsmangel, og for å fjerne defekte mitokondrier og proteinaggregater. Den japanske forskeren Yoshinori Ohsumi fikk Nobelprisen i fysiologi eller medisin i 2016 for oppdagelsen av autofagiens mekanismer.',
    },

    // =========================================================================
    // CYTOSKJELETTET
    // =========================================================================
    {
      id: 'bio1-1-1-cytoskjelett',
      type: 'text',
      content: `## Cytoskjelettet

Cytoskjelettet er et nettverk av proteinfilamenter som gir cellen **form**, **mekanisk styrke** og evne til **bevegelse**. Det er ikke en statisk struktur, men bygges kontinuerlig opp og ned etter cellens behov. Cytoskjelettet består av tre typer filamenter:

### 1. Mikrofilamenter (aktinfilamenter)

- **Diameter:** ca. 7 nm (de tynneste)
- **Byggemateriale:** Proteinet **aktin**
- **Funksjoner:**
  - Cellens form og mekanisk styrke, særlig rett under cellemembranen (cortex)
  - **Muskelkontraksjon:** I muskelceller samarbeider aktin med myosin for å skape sammentrekking
  - **Cellebevegelse:** Amøboid bevegelse (pseudopoder)
  - **Celledeling:** Danner kløyvingsfuren under cytokinese
  - **Mikrovilli:** Fingerformede utbuktninger på cellens overflate som øker overflatearealet (f.eks. i tarmepitelet)

### 2. Intermediære filamenter

- **Diameter:** ca. 8–12 nm
- **Byggemateriale:** Varierer mellom celletyper (f.eks. **keratin** i hudceller, **vimentin** i bindevevsceller, **neurofilamenter** i nerveceller)
- **Funksjoner:**
  - Mekanisk styrke og motstand mot strekk
  - Stabiliserer cellens form
  - Forankrer cellekjernen og andre organeller
  - Danner desmosomer (celle-celle-forbindelser)
- De mest stabile av de tre filamenttypene

### 3. Mikrotubuli

- **Diameter:** ca. 25 nm (de tykkeste)
- **Byggemateriale:** Proteinet **tubulin** (dimerer av $\\alpha$-tubulin og $\\beta$-tubulin)
- **Funksjoner:**
  - **Intracellulær transport:** Fungerer som «skinner» der motorproteiner (dynein og kinesin) frakter vesikler og organeller
  - **Celledelingsspindelen:** Under mitose og meiose danner mikrotubuli den mitotiske spindelen som trekker kromosomene fra hverandre
  - **Celler, flageller:** Grunnstrukturen i cilier og flageller (9+2-arrangement)
  - **Cellens form:** Gir strukturell støtte

Mikrotubuli stråler ut fra **sentrosomet** (cellens mikrotubuli-organiseringssentrum, MTOC), som inneholder sentriolene.`,
    },
    {
      id: 'bio1-1-1-def-cytoskjelett',
      type: 'definition',
      title: 'Cytoskjelett',
      content: 'Cytoskjelettet er et dynamisk nettverk av proteinfilamenter i cellens cytoplasma som gir cellen form, mekanisk styrke og evne til bevegelse. Det består av tre hovedtyper filamenter: mikrofilamenter (aktin, 7 nm), intermediære filamenter (8–12 nm) og mikrotubuli (tubulin, 25 nm). Cytoskjelettet er også involvert i intracellulær transport, celledeling og signaloverføring.',
    },

    // =========================================================================
    // SENTRIOLER, CILIER OG FLAGELLER
    // =========================================================================
    {
      id: 'bio1-1-1-sentrioler',
      type: 'text',
      content: `## Sentrioler, cilier og flageller

### Sentrioler

Sentrioler er sylinderformede strukturer bygd opp av mikrotubuli i et karakteristisk **9×3-arrangement** (ni tripletter av mikrotubuli arrangert i en ring). De finnes i **dyreceller**, men mangler i de fleste planteceller.

Funksjoner:
- Danner grunnlaget for **sentrosomet** (cellens mikrotubuli-organiseringssentrum)
- Under celledeling vandrer sentriolparene til hver sin pol og organiserer den mitotiske spindelen
- Danner **basallegemer** ved cellens overflate, hvorfra cilier og flageller vokser ut

### Cilier

Cilier er korte, hårlignende utbuktninger fra cellens overflate (typisk 5–10 $\\mu$m lange). De inneholder mikrotubuli i et **9+2-arrangement** (ni dobbelt-mikrotubuli i en ring rundt to sentrale mikrotubuli).

- **Motile cilier:** Beveger seg i koordinerte bølgebevegelser og flytter væske eller slim over celleoverflaten. Eksempler: luftveiene (fjerner slim og partikler), egglederne (transporterer eggcellen)
- **Primære cilier:** Ikke-motile, fungerer som sensoriske antenner som oppdager kjemiske og mekaniske signaler i omgivelsene

### Flageller

Flageller har samme indre struktur som cilier (9+2), men er mye lengre (opptil 200 $\\mu$m) og færre per celle. De driver cellen fremover med en piskende bevegelse. Menneskets eneste flagellerte celle er **sædcellen**, der flagellen (halen) gir sædcellen bevegelighet.`,
    },

    // =========================================================================
    // CELLEVEGG OG VAKUOLER
    // =========================================================================
    {
      id: 'bio1-1-1-cellevegg-vakuoler',
      type: 'text',
      content: `## Cellevegg

Planteceller, soppeceller og de fleste prokaryoter har en **cellevegg** utenfor cellemembranen. Celleveggen gir cellen **mekanisk styrke** og **beskyttelse**, og er ansvarlig for at planter kan stå oppreist.

### Plantecellers cellevegg

- **Primærvegg:** Tynn og fleksibel, dannes mens cellen vokser. Består hovedsakelig av **cellulose**fibriller innleiret i en matriks av hemicellulose, pektin og glykoproteiner.
- **Sekundærvegg:** Dannes på innsiden av primærveggen etter at cellen er ferdig utvokst. Tykkere og stivere, ofte forsterket med **lignin** (trevirke). Finnes i celler som trenger ekstra styrke (karstrenger, styrkevev).
- **Plasmodesmata:** Små kanaler gjennom celleveggen som forbinder cytoplasmaet i naboceller, slik at molekyler og signaler kan passere direkte mellom celler.

## Vakuoler

Vakuoler er store, membranbundne rom fylt med væske.

### Sentralvakuolen i planteceller

Planteceller har en svært stor **sentralvakuole** som kan fylle opptil 90 % av cellevolumet. Membranen rundt vakuolen kalles **tonoplast**.

Funksjoner:
- **Turgortrykk:** Vakuolen fylles med vann ved osmose, noe som skaper et trykk mot celleveggen (turgortrykk). Dette gir planten stivhet og er grunnen til at planter visner ved vannmangel
- **Lagring:** Lagrer næringsstoffer, ioner, pigmenter (f.eks. antocyaniner som gir røde/blå farger til blomster), og avfallsstoffer
- **Forsvar:** Kan inneholde giftstoffer og ubehagelig smakende stoffer som beskytter planten mot beitende dyr
- **Nedbrytning:** Fungerer delvis som plantecellens «lysosom»

### Vakuoler i dyreceller

Dyreceller har små vakuoler som brukes til:
- **Matvakuoler** (fagosomer): Inneholder fagocytert materiale
- **Kontraktile vakuoler:** Finnes hos noen protister for å regulere osmotisk balanse (pumper ut overskuddsvann)`,
    },

    // =========================================================================
    // PLANTE- VS DYRECELLER
    // =========================================================================
    {
      id: 'bio1-1-1-plante-vs-dyre',
      type: 'text',
      content: `## Sammenligning av planteceller og dyreceller

Planteceller og dyreceller er begge eukaryote og deler mange organeller, men de har også viktige forskjeller:

| Egenskap | Plantecelle | Dyrecelle |
|----------|-------------|-----------|
| Cellevegg | Ja (cellulose) | Nei |
| Kloroplaster | Ja | Nei |
| Sentralvakuole | Ja (stor) | Nei (bare små vakuoler) |
| Sentrioler | Nei (de fleste) | Ja |
| Lysosomer | Sjeldne (vakuolen fyller rollen) | Ja |
| Lagringsform for karbohydrater | Stivelse | Glykogen |
| Form | Regelmessig (rektangulær) pga. cellevegg | Uregelmessig/variabel |
| Plasmodesmata | Ja | Nei (men har gap junctions) |

### Hva de har felles

Både plante- og dyreceller har:
- Cellekjerne med kjernememran
- Endoplasmatisk retikulum (ru og glatt)
- Golgiapparat
- Mitokondrier
- Ribosomer (80S)
- Cytoskjelett
- Cellememran (plasmamembran)
- Peroksisomer`,
    },

    // =========================================================================
    // CELLESTØRRELSE OG OVERFLATE/VOLUM
    // =========================================================================
    {
      id: 'bio1-1-1-overflate-volum',
      type: 'text',
      content: `## Cellestørrelse og overflate-til-volum-forholdet

De fleste celler er svært små. Hvorfor vokser ikke celler seg større? Svaret ligger i forholdet mellom **overflatearealet** (cellemembranen) og **volumet** (cytoplasmaet).

### Prinsippet

Cellens overflate (cellemembranen) er porten for all transport inn og ut av cellen: næringsstoffer, oksygen, avfallsstoffer og signalmolekyler. Volumet representerer alt innholdet som trenger forsyning.

Når en celle vokser, øker volumet raskere enn overflatearealet:

- For en kube med side $s$:
  - Overflate: $A = 6s^2$
  - Volum: $V = s^3$
  - Overflate/volum-forhold: $\\frac{A}{V} = \\frac{6}{s}$

Når $s$ øker, synker $\\frac{A}{V}$. Det betyr at en stor celle har relativt sett mindre membranoverflate per volumenhet enn en liten celle.

### Konsekvenser

- **Transport blir utilstrekkelig:** Hvis cellen blir for stor, klarer ikke membranen å transportere nok næring inn og nok avfall ut for å forsyne hele volumet
- **Diffusjonsavstander:** Diffusjon er effektivt over korte avstander (mikrometer), men alt for tregt over lengre avstander. Inne i en stor celle ville det ta for lang tid for molekyler å nå cellens sentrum
- **Cellene deler seg i stedet for å vokse:** Når cellen blir for stor, løser den problemet ved å dele seg i to mindre celler med bedre overflate/volum-forhold

### Tilpasninger for å øke overflatearealet

Noen celler trenger stort overflateareal for effektiv transport. Tilpasninger inkluderer:
- **Mikrovilli:** Fingerformede utbuktninger (f.eks. i tynntarmen for næringsopptak)
- **Basale innfoldninger:** Innfoldninger av cellemembranen i nyretubuli
- **Cristae:** Innfoldninger av mitokondriens indre membran
- **Lang, tynn form:** Nerveceller er ekstremt lange men tynne`,
    },
    {
      id: 'bio1-1-1-warning-stoerrelse',
      type: 'warning',
      title: 'Hvorfor kan celler ikke vokse seg uendelig store?',
      content: `Mange elever tror at celler kan vokse seg vilkårlig store så lenge de får nok næring. Dette stemmer ikke. Selv med ubegrenset tilgang på næring, vil overflate/volum-forholdet sette en øvre grense for cellestørrelsen. Når volumet øker raskere enn overflatearealet, klarer cellemembranen til slutt ikke å forsyne hele cellen med oksygen og næring, og heller ikke å fjerne avfall raskt nok. Cellen vil da enten dele seg, dø, eller utvikle spesielle tilpasninger (som mikrovilli) for å øke overflatearealet.`,
    },

    // =========================================================================
    // EKSEMPEL: OVERFLATE/VOLUM-BEREGNING
    // =========================================================================
    {
      id: 'bio1-1-1-ex-overflatevolum',
      type: 'example',
      title: 'Beregning av overflate/volum-forholdet',
      problem: 'Sammenlign overflate/volum-forholdet for to kubeformede celler: én med side 10 $\\mu$m og én med side 30 $\\mu$m. Hva forteller resultatet oss om cellestørrelse?',
      solution: `**Celle A:** side $s_A = 10 \\, \\mu$m

Overflate: $A_A = 6 \\times 10^2 = 600 \\, \\mu\\text{m}^2$

Volum: $V_A = 10^3 = 1\\,000 \\, \\mu\\text{m}^3$

Overflate/volum: $\\frac{A_A}{V_A} = \\frac{600}{1\\,000} = 0{,}6 \\, \\mu\\text{m}^{-1}$

**Celle B:** side $s_B = 30 \\, \\mu$m

Overflate: $A_B = 6 \\times 30^2 = 5\\,400 \\, \\mu\\text{m}^2$

Volum: $V_B = 30^3 = 27\\,000 \\, \\mu\\text{m}^3$

Overflate/volum: $\\frac{A_B}{V_B} = \\frac{5\\,400}{27\\,000} = 0{,}2 \\, \\mu\\text{m}^{-1}$

**Sammenligning:**

Celle B er 3 ganger så stor som celle A i hver dimensjon, men:
- Overflatearealet er $9 \\times$ større ($5\\,400 / 600 = 9$)
- Volumet er $27 \\times$ større ($27\\,000 / 1\\,000 = 27$)
- Overflate/volum-forholdet er **3 ganger lavere** ($0{,}2 / 0{,}6 = 1/3$)

**Konklusjon:** Den store cellen har relativt sett bare 1/3 av membranoverfaten per volumenhet sammenlignet med den lille cellen. Det betyr at den store cellen vil ha dårligere tilgang på næringsstoffer og dårligere evne til å fjerne avfall per volumenhet, noe som begrenser cellestørrelsen.`,
    },

    // =========================================================================
    // EKSEMPEL: IDENTIFISERING AV ORGANELLER
    // =========================================================================
    {
      id: 'bio1-1-1-ex-identifisering',
      type: 'example',
      title: 'Identifisere organeller fra beskrivelser',
      problem: 'Hvilke organeller passer til følgende beskrivelser? (a) Har dobbel membran og eget sirkulært DNA. Produserer ATP. (b) Består av flate sekker i en stabel med en cis- og en trans-side. (c) Et nettverk av membraner med ribosomer festet til overflaten. (d) Membranomsluttede vesikler med hydrolytiske enzymer og surt innvendig miljø.',
      solution: `**(a) Har dobbel membran og eget sirkulært DNA. Produserer ATP.**

Svar: **Mitokondrier**

Begrunnelse: Mitokondrier er de eneste organellene (sammen med kloroplaster) som har dobbel membran og eget DNA. Deres hovedfunksjon er å produsere ATP gjennom celleånding. Kloroplaster har også dobbel membran og eget DNA, men de produserer glukose (ikke primært ATP) gjennom fotosyntese.

**(b) Består av flate sekker i en stabel med en cis- og en trans-side.**

Svar: **Golgiapparatet**

Begrunnelse: Golgiapparatet er den eneste organellen som beskrives som en stabel av flate cisterner med tydelig cis-side (mottakssiden, mot ER) og trans-side (sendingssiden, mot cellemembranen). Det modifiserer, sorterer og pakker proteiner og lipider.

**(c) Et nettverk av membraner med ribosomer festet til overflaten.**

Svar: **Ru (grovt) endoplasmatisk retikulum (RER)**

Begrunnelse: Ribosomene festet til overflaten gir ru ER dets karakteristiske «grove» utseende og skiller det fra glatt ER. Ru ER er involvert i syntese av proteiner som skal eksporteres eller bygges inn i membraner.

**(d) Membranomsluttede vesikler med hydrolytiske enzymer og surt innvendig miljø.**

Svar: **Lysosomer**

Begrunnelse: Lysosomer inneholder mange ulike hydrolytiske enzymer som bryter ned proteiner, nukleinsyrer, karbohydrater og lipider. De opprettholder et surt miljø (pH ca. 4,5–5,0) ved hjelp av protonpumper, noe som er optimalt for enzymenes aktivitet.`,
    },

    // =========================================================================
    // EKSEMPEL: AKTIVE ORGANELLER
    // =========================================================================
    {
      id: 'bio1-1-1-ex-aktive-organeller',
      type: 'example',
      title: 'Predikere organellaktivitet i ulike celletyper',
      problem: 'Forklar hvilke organeller du forventer er spesielt godt utviklet (mange/store) i følgende celletyper, og begrunn hvorfor: (a) En muskelcelle i hjertet, (b) En celle i bukspyttkjertelen som produserer fordøyelsesenzymer, (c) En levercelle.',
      solution: `**(a) Muskelcelle i hjertet**

Hjertemuskelceller trekker seg sammen uavbrutt gjennom hele livet og har ekstremt høyt energibehov.

Spesielt godt utviklede organeller:
- **Mitokondrier:** Svært mange (opptil 40 % av cellevolumet). Hjertet produserer og forbruker enorme mengder ATP for kontinuerlig muskelkontraksjon.
- **Glatt ER (sarkoplasmatisk retikulum):** Godt utviklet for kalsiumlagring og -frigivelse, som styrer muskelkontraksjonen.
- **Cytoskjelett (aktin og myosin):** Store mengder kontraktile filamenter organisert i sarkomerer for kontraksjon.

**(b) Bukspyttkjertelcelle (eksokrin del)**

Disse cellene produserer store mengder fordøyelsesenzymer (lipaser, proteaser, amylaser) som skilles ut til tynntarmen.

Spesielt godt utviklede organeller:
- **Ru ER:** Svært mye, fordi cellene syntetiserer store mengder proteiner (enzymer) for eksport.
- **Golgiapparat:** Stort og velutviklet for å modifisere, sortere og pakke enzymene i sekretoriske vesikler.
- **Sekretoriske vesikler:** Mange vesikler fylt med fordøyelsesenzymer, klare for eksocytose.
- **Mitokondrier:** Mange, fordi proteinsyntese og sekresjon krever mye ATP.

**(c) Levercelle (hepatocytt)**

Leverceller er blant kroppens mest allsidige celler. De utfører hundrevis av ulike biokjemiske reaksjoner.

Spesielt godt utviklede organeller:
- **Glatt ER:** Svært godt utviklet for avgiftning (nedbryting av alkohol, legemidler og giftstoffer) og lipidsyntese (kolesterol, gallesalter).
- **Peroksisomer:** Mange, for å bryte ned giftstoffer, fettsyrer og hydrogenperoksid.
- **Mitokondrier:** Svært mange (opptil 2 000 per celle) fordi leveren har høyt stoffskifte.
- **Golgiapparat:** Godt utviklet for modifisering og sekresjon av plasmaproteiner (albumin, koagulasjonsfaktorer).
- **Lysosomer:** Mange, for nedbryting og resirkulering av cellulære komponenter og opptatte stoffer.
- **Ru ER:** Godt utviklet for syntese av plasmaproteiner som sendes ut i blodet.`,
    },

    // =========================================================================
    // EKSEMPEL: ENDOSYMBIOSE-BEVIS
    // =========================================================================
    {
      id: 'bio1-1-1-ex-endosymbiose',
      type: 'example',
      title: 'Bevis for endosymbioseteorien',
      problem: 'List opp minst fire bevis som støtter endosymbioseteorien for mitokondriens og kloroplastens opprinnelse, og forklar hvorfor hvert bevis er relevant.',
      solution: `Endosymbioseteorien, først foreslått av **Lynn Margulis** i 1967, sier at mitokondrier stammer fra aerobe (oksygenbrukende) proteobakterier og at kloroplaster stammer fra fotosyntetiserende cyanobakterier som ble tatt opp av en urtidseukaryot celle. Bevisene er sterke og mangesidige:

**1. Dobbel membran**
Mitokondrier og kloroplaster er omgitt av en dobbel membran. Den indre membranen tilsvarer trolig den opprinnelige bakteriens cellemembran, mens den ytre membranen tilsvarer vertscellens fagocytosevesikkel.

**2. Eget sirkulært DNA**
Begge organellene har sitt eget DNA, som er sirkulært – akkurat som bakterie-DNA. Dette DNA-et ligner mer på bakterie-DNA enn på cellekjernens DNA.

**3. 70S-ribosomer**
Mitokondrier og kloroplaster har 70S-ribosomer, den samme typen som finnes i bakterier. Eukaryoters cytoplasma har 80S-ribosomer.

**4. Todeling (binær fisjon)**
Begge organellene formerer seg ved todeling, på samme måte som bakterier. De oppstår aldri «de novo» (fra bunnen av).

**5. Antibiotikafølsomhet**
Antibiotika som hemmer bakterielle 70S-ribosomer (f.eks. kloramfenikol) hemmer også proteinsyntesen i mitokondrier og kloroplaster, men ikke i cytoplasmaets 80S-ribosomer.

**6. Størrelse**
Mitokondrier og kloroplaster har omtrent samme størrelse som mange bakterier (1–10 $\\mu$m).

**7. DNA-sekvenslikhet**
Genetiske analyser viser at mitokondrielt DNA er nærmest beslektet med alfa-proteobakterier, mens kloroplast-DNA er nærmest beslektet med cyanobakterier.

**8. Egen proteinsyntese**
Begge organellene transkriberer og translaterer sine egne gener, delvis uavhengig av cellekjernen.

**Konklusjon:** Samlet utgjør disse bevisene et overveldende argument for at mitokondrier og kloroplaster en gang var frittlevende bakterier som utviklet et symbiotisk forhold med en vertscelle.`,
    },

    // =========================================================================
    // MIKROSKOPI
    // =========================================================================
    {
      id: 'bio1-1-1-mikroskopi',
      type: 'text',
      content: `## Mikroskopimetoder

For å studere celler og deres organeller bruker biologer ulike typer mikroskoper, hver med sine fordeler og begrensninger.

### Lysmikroskop

Lysmikroskop bruker **synlig lys** og glasslinser for å forstørre prøven.

- **Forstørrelse:** Opptil ca. 1 000×
- **Oppløsning:** Ca. 200 nm (0,2 $\\mu$m) – begrenset av lysets bølgelengde
- **Fordeler:** Relativt billig, lett å bruke, kan studere levende celler i sanntid, farging med ulike fargestoffer gir kontrast
- **Begrensninger:** Kan ikke se detaljer mindre enn ca. 200 nm (de fleste organeller er uklare eller usynlige)
- **Kan observere:** Celler, kjerne, vakuoler, kloroplaster, kromosomer under deling, noen store organeller

### Transmisjonselektronmikroskop (TEM)

TEM bruker en **elektronstråle** som sendes gjennom et tynt snitt av prøven.

- **Forstørrelse:** Opptil ca. 500 000×
- **Oppløsning:** Ca. 0,5 nm – tusen ganger bedre enn lysmikroskop
- **Fordeler:** Ekstremt høy oppløsning, kan se de fleste organeller i detalj, indre strukturer synlige
- **Begrensninger:** Prøven må fikseres, dehydreres og snittes svært tynt – kun døde celler. Dyrt og tidkrevende
- **Kan observere:** Alle organeller, membraner, ribosomer, cytoskjelett, virus

### Sveipeelektronmikroskop (SEM)

SEM scanner en **elektronstråle** over prøvens overflate og gir et tredimensjonalt bilde.

- **Forstørrelse:** Opptil ca. 100 000×
- **Oppløsning:** Ca. 10 nm
- **Fordeler:** Gir flotte 3D-bilder av overflatestrukturer, stor dybdeskarphet
- **Begrensninger:** Viser bare overflaten (ikke indre strukturer), prøven må coates med metall, kun døde celler
- **Kan observere:** Celleoverflater, mikrovilli, cilier, pollenkorn, insektøyne

### Fluorescensmikroskop og konfokalmikroskop

- **Fluorescensmikroskop:** Bruker fluorescerende fargestoffer eller proteiner (f.eks. GFP – grønt fluorescerende protein) som binder seg til spesifikke molekyler i cellen. Cellen belyses med kortbølget lys, og de merkede strukturene lyser opp
- **Konfokalmikroskop:** En videreutvikling som bruker laser og en liten blende (pinhole) for å lage skarpe bilder av tynne «skiver» av prøven. Mange slike skiver kan settes sammen til et 3D-bilde
- **Fordeler:** Kan studere spesifikke proteiner og strukturer i levende celler, 3D-rekonstruksjon mulig
- **Oppløsning:** Ca. 200 nm (lysmikroskopnivå)

| Metode | Oppløsning | Levende celler? | Dimensjon |
|--------|-----------|-----------------|-----------|
| Lysmikroskop | 200 nm | Ja | 2D |
| TEM | 0,5 nm | Nei | 2D (snitt) |
| SEM | 10 nm | Nei | 3D (overflate) |
| Konfokalmikroskop | 200 nm | Ja | 3D |`,
    },

    // =========================================================================
    // NOTE: VANLIGE MISFORSTÅELSER
    // =========================================================================
    {
      id: 'bio1-1-1-note-misforstaelser',
      type: 'note',
      title: 'Vanlige misforståelser om celler',
      content: `**1. «Celler ser ut som de enkle diagrammene i læreboka.»**
Diagrammer er sterkt forenklede. I virkeligheten er cytoplasmaet tett pakket med organeller, proteiner og andre molekyler. Det er ikke mye «tomt rom» inne i en celle.

**2. «Alle celler er like.»**
Celler er ekstremt spesialiserte. En nervecelle, en muskelcelle og en hvit blodcelle i kroppen din inneholder alle det samme DNA-et, men uttrykker helt forskjellige gener og har svært ulik form og funksjon.

**3. «Mitokondrier er cellens eneste energikilde.»**
Mitokondrier produserer mest ATP via celleånding, men cellen kan også produsere ATP gjennom glykolysen (i cytoplasmaet), som ikke krever oksygen.

**4. «Prokaryoter er enklere og derfor primitive.»**
Prokaryoter har overlevd og trivdes i nesten 4 milliarder år. De er utrolig godt tilpasset sine nisjer og er biokjemisk svært allsidige. «Enklere» betyr ikke «dårligere».

**5. «Organeller jobber uavhengig av hverandre.»**
Organellene er i konstant samspill. Proteiner produsert i ru ER sendes via vesikler til golgiapparatet, som sender dem videre til lysosomer, cellemembranen eller ut av cellen. Mitokondrier og ER er fysisk forbundet gjennom kontaktpunkter. Cellen fungerer som et integrert system.`,
    },

    // =========================================================================
    // NOTE: CYTOPLASMA
    // =========================================================================
    {
      id: 'bio1-1-1-def-cytoplasma',
      type: 'definition',
      title: 'Cytoplasma',
      content: 'Cytoplasma er alt innholdet i cellen mellom cellemembranen og kjernen (i eukaryoter). Det består av cytosol (den geléaktige væsken) og alle organellene som er suspendert i cytosolet. Cytosol utgjør ca. 70 % vann og inneholder oppløste ioner, aminosyrer, nukleotider, sukker og tusenvis av ulike proteiner. Mange viktige kjemiske reaksjoner foregår i cytoplasmaet, blant annet glykolysen (det første trinnet i nedbrytningen av glukose).',
    },

    // =========================================================================
    // WARNING: MIKROSKOPI OG ARTEFAKTER
    // =========================================================================
    {
      id: 'bio1-1-1-warning-artefakter',
      type: 'warning',
      title: 'Artefakter i mikroskopi',
      content: `Når vi studerer celler i mikroskop, er det viktig å være klar over at prepareringsteknikker kan introdusere **artefakter** – strukturer som ikke finnes i levende celler, men som oppstår under preparering. Fiksering, dehydrering, snitting og farging ved elektronmikroskopi kan forårsake krymping, oppsvulming eller endring av cellens struktur. Derfor er det alltid verdifullt å sammenline resultater fra ulike teknikker og å bruke levende celler der det er mulig (lysmikroskop, fluorescensmikroskop). En observasjon i mikroskop er ikke nødvendigvis et nøyaktig bilde av virkeligheten.`,
    },

    // =========================================================================
    // OPPSUMMERING
    // =========================================================================
    {
      id: 'bio1-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Celleteorien** sier at alle levende organismer er bygd opp av celler, at cellen er den grunnleggende enheten for liv, og at alle celler oppstår fra eksisterende celler.
- Celler deles i **prokaryote** (uten membranomsluttet kjerne) og **eukaryote** (med membranomsluttet kjerne og organeller).
- Viktige organeller i eukaryote celler:
  - **Kjernen:** Inneholder DNA, styrer cellens aktiviteter
  - **Ribosomer:** Proteinsyntese
  - **Endoplasmatisk retikulum:** Proteinsyntese og lipidsyntese
  - **Golgiapparatet:** Modifisering, sortering og transport av proteiner
  - **Mitokondrier:** Celleånding (ATP-produksjon)
  - **Kloroplaster:** Fotosyntese (bare i planteceller)
  - **Lysosomer:** Intracellulær fordøyelse og resirkulering
  - **Peroksisomer:** Oksidasjon og avgiftning
  - **Cytoskjelettet:** Form, styrke og bevegelse
- **Endosymbioseteorien** forklarer at mitokondrier og kloroplaster stammer fra oppslukte bakterier.
- **Overflate/volum-forholdet** begrenser cellestørrelsen.
- **Lysmikroskop**, **elektronmikroskop** og **fluorescensmikroskop** er viktige verktøy for å studere celler.`,
    },
  ],

  // ===========================================================================
  // OPPGAVER
  // ===========================================================================
  exercises: [
    {
      id: 'bio1-1-1-ex-1',
      number: '1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem formulerte prinsippet «Omnis cellula e cellula» – alle celler oppstår fra eksisterende celler?',
      options: [
        { id: 'a', text: 'Robert Hooke', isCorrect: false },
        { id: 'b', text: 'Antonie van Leeuwenhoek', isCorrect: false },
        { id: 'c', text: 'Rudolf Virchow', isCorrect: true },
        { id: 'd', text: 'Matthias Schleiden', isCorrect: false },
      ],
      solution: '**Rudolf Virchow** formulerte i 1855 det tredje prinsippet i celleteorien: «Omnis cellula e cellula» (alle celler oppstår fra eksisterende celler). Robert Hooke observerte cellevegger i kork (1665), Leeuwenhoek observerte levende mikroorganismer (1670-tallet), og Schleiden viste at planter er bygd opp av celler (1838).',
    },
    {
      id: 'bio1-1-1-ex-2',
      number: '2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken organelle kalles cellens «kraftverk» fordi den produserer mesteparten av cellens ATP?',
      options: [
        { id: 'a', text: 'Kloroplast', isCorrect: false },
        { id: 'b', text: 'Golgiapparatet', isCorrect: false },
        { id: 'c', text: 'Lysosom', isCorrect: false },
        { id: 'd', text: 'Mitokondrie', isCorrect: true },
      ],
      solution: '**Mitokondriet** er cellens kraftverk. Her foregår celleånding, der glukose brytes ned med oksygen for å produsere ATP (adenosintrifosfat). Kloroplaster driver fotosyntese, golgiapparatet modifiserer og sorterer proteiner, og lysosomer bryter ned avfall.',
    },
    {
      id: 'bio1-1-1-ex-3',
      number: '3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke av følgende organeller har dobbel membran og eget DNA?',
      options: [
        { id: 'a', text: 'Lysosomer og peroksisomer', isCorrect: false },
        { id: 'b', text: 'Mitokondrier og kloroplaster', isCorrect: true },
        { id: 'c', text: 'Golgiapparatet og ER', isCorrect: false },
        { id: 'd', text: 'Ribosomer og sentrioler', isCorrect: false },
      ],
      solution: '**Mitokondrier og kloroplaster** er de to organellene som har dobbel membran og eget sirkulært DNA. Dette er viktige bevis for endosymbioseteorien, som sier at de stammer fra oppslukte bakterier. Lysosomer og peroksisomer har enkel membran, golgiapparatet og ER har enkel membran, og ribosomer og sentrioler er ikke membranbundne.',
    },
    {
      id: 'bio1-1-1-ex-4',
      number: '4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken organelle finnes i planteceller men IKKE i dyreceller?',
      options: [
        { id: 'a', text: 'Mitokondrier', isCorrect: false },
        { id: 'b', text: 'Golgiapparatet', isCorrect: false },
        { id: 'c', text: 'Kloroplaster', isCorrect: true },
        { id: 'd', text: 'Ribosomer', isCorrect: false },
      ],
      solution: '**Kloroplaster** finnes bare i planteceller (og alger), der de utfører fotosyntese. Dyreceller mangler også cellevegg og stor sentralvakuole, men de har mitokondrier, golgiapparat og ribosomer i likhet med planteceller.',
    },
    {
      id: 'bio1-1-1-ex-5',
      number: '5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En celle har svært mye ru endoplasmatisk retikulum og et stort golgiapparat, men relativt få mitokondrier. Hva er den mest sannsynlige funksjonen til denne cellen?',
      options: [
        { id: 'a', text: 'Muskelkontraksjon', isCorrect: false },
        { id: 'b', text: 'Produksjon og sekresjon av proteiner', isCorrect: true },
        { id: 'c', text: 'Fotosyntese', isCorrect: false },
        { id: 'd', text: 'Aktiv fagocytose av bakterier', isCorrect: false },
      ],
      solution: 'Mye **ru ER** og **stort golgiapparat** tyder på at cellen produserer store mengder proteiner for eksport (sekresjon). Ru ER syntetiserer proteiner, og golgiapparatet modifiserer, sorterer og pakker dem i sekretoriske vesikler. Eksempler: bukspyttkjertelceller (fordøyelsesenzymer) og plasmaceller (antistoffer). Muskelceller ville hatt mange mitokondrier, fotosynteseceller ville hatt kloroplaster, og fagocytterende celler ville hatt mange lysosomer.',
      hints: ['Tenk på hva ru ER og golgiapparatet gjør med proteiner.'],
    },
    {
      id: 'bio1-1-1-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar celleteoriens tre hovedprinsipper med egne ord, og gi et eksempel som illustrerer hvert prinsipp.',
      solution: `**Prinsipp 1: Alle levende organismer er bygd opp av én eller flere celler.**
Alt liv består av celler. En bakterie er en enkelt celle (encellede organismer), mens et menneske består av ca. 37 billioner celler (flercellet organisme). Selv de enkleste levende vesener har minst én celle.

**Prinsipp 2: Cellen er den grunnleggende enheten for liv.**
Cellen er det minste nivået der alle kjennetegn på liv finnes. En enkelt celle kan ta opp næring, produsere energi, vokse, reprodusere seg og reagere på omgivelsene. Eksempel: En amøbe er en enkelt celle som kan bevege seg, fange mat, fordøye den og dele seg for å formere seg.

**Prinsipp 3: Alle celler oppstår fra eksisterende celler.**
Nye celler dannes kun ved deling av eksisterende celler, aldri spontant fra ikke-levende materiale. Eksempel: Når du skjærer deg, repareres såret ved at hudcellene rundt sårkanten deler seg og danner nye hudceller. Hver celle i kroppen din kan spores tilbake til den ene befruktede eggcellen (zygoten) du startet som.`,
      hints: ['Tenk på hva hvert prinsipp faktisk betyr i praksis.'],
    },
    {
      id: 'bio1-1-1-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lag en tabell der du sammenligner prokaryote og eukaryote celler med hensyn til: kjerne, DNA-form, ribosomtype, cellestørrelse, membranbundne organeller og eksempler.',
      solution: `| Egenskap | Prokaryot celle | Eukaryot celle |
|----------|-----------------|----------------|
| **Kjerne** | Ingen membranomsluttet kjerne; DNA i nukleoid | Membranomsluttet kjerne med kjerneporer |
| **DNA-form** | Sirkulært, fritt i cytoplasma; ofte plasmider | Lineært, organisert i kromosomer med histoner |
| **Ribosomtype** | 70S (30S + 50S) | 80S (40S + 60S) i cytoplasma; 70S i mitokondrier/kloroplaster |
| **Cellestørrelse** | 0,2–10 $\\mu$m | 10–100 $\\mu$m |
| **Membranbundne organeller** | Ingen | Mange (kjerne, ER, golgiapparat, mitokondrier, lysosomer osv.) |
| **Cellevegg** | Ofte ja (peptidoglykan hos bakterier) | Planteceller: ja (cellulose). Dyreceller: nei |
| **Cytoskjelett** | Enkelt (FtsZ-filamenter) | Komplekst (aktin, tubulin, intermediære filamenter) |
| **Reproduksjon** | Binær fisjon | Mitose og meiose |
| **Eksempler** | Bakterier (E. coli), arkeer | Dyr, planter, sopp, protister |

Selv om prokaryoter mangler membranbundne organeller, er de biokjemisk svært allsidige og kan leve i ekstreme miljøer (varme kilder, salt, syre) som eukaryoter ikke tåler.`,
      hints: ['Sammenlign punkt for punkt. Husk å inkludere alle de oppgitte egenskapene.'],
    },
    {
      id: 'bio1-1-1-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv veien et protein tar fra det produseres til det skilles ut av cellen (eksocytose). Nevn alle organellene som er involvert og hva som skjer i hver.',
      solution: `Et protein som skal eksporteres ut av cellen (f.eks. et fordøyelsesenzym) følger denne veien:

**1. Kjernen (transkripsjon)**
Genet som koder for proteinet avleses (transkriberes) i kjernen. mRNA (budbringer-RNA) produseres og fraktes ut gjennom kjerneporene til cytoplasmaet.

**2. Ribosomer på ru ER (translasjon)**
mRNA fester seg til et ribosom på overflaten av ru ER. Ribosomet leser mRNA-koden og bygger proteinet aminosyre for aminosyre. Den voksende polypeptidkjeden trer inn i ER-lumen gjennom en proteinkanal.

**3. Ru ER (folding og modifisering)**
Inne i ER-lumen foldes proteinet til sin korrekte tredimensjonale form med hjelp av chaperonproteiner. Proteinet glykosyleres (karbohydratkjeder festes). Kvalitetskontroll sørger for at feilfoldede proteiner merkes for nedbrytning.

**4. Transport fra ER til golgiapparatet**
Det ferdig foldede proteinet pakkes i en **transportvesikkel** som knoppes av fra ER-membranen og fraktes til cis-siden av golgiapparatet.

**5. Golgiapparatet (videre modifisering og sortering)**
Proteinet beveger seg gjennom golgi-stablens cisterner fra cis-siden til trans-siden. Underveis modifiseres karbohydratkjedene ytterligere, og proteinet kan fosforyleres eller klippes. På trans-siden sorteres proteinet og merkes med «adresselapp» for eksport.

**6. Sekretorisk vesikkel**
Proteinet pakkes i en **sekretorisk vesikkel** som knoppes av fra trans-golgi.

**7. Eksocytose**
Den sekretoriske vesikkelen fraktes langs mikrotubuli (ved hjelp av motorproteiner) til cellemembranen. Vesikkelmembranen smelter sammen med cellemembranen, og proteinets innhold frigjøres til utsiden av cellen.

**Oppsummert:** Kjerne → Ribosom/ru ER → Transportvesikkel → Golgiapparat → Sekretorisk vesikkel → Cellememran → Utsiden av cellen`,
      hints: ['Start med der den genetiske informasjonen finnes.', 'Følg proteinet trinn for trinn gjennom sekretorisk vei.'],
    },
    {
      id: 'bio1-1-1-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'medium',
      task: 'En kubeformet celle har side 20 $\\mu$m. (a) Beregn overflatearealet, volumet og overflate/volum-forholdet. (b) Hvis cellen deler seg i åtte like store kuber, hva blir det nye overflate/volum-forholdet? (c) Forklar den biologiske betydningen.',
      solution: `**(a) Én celle med side $s = 20 \\, \\mu$m:**

Overflate: $A = 6s^2 = 6 \\times 20^2 = 6 \\times 400 = 2\\,400 \\, \\mu\\text{m}^2$

Volum: $V = s^3 = 20^3 = 8\\,000 \\, \\mu\\text{m}^3$

Overflate/volum: $\\frac{A}{V} = \\frac{2\\,400}{8\\,000} = 0{,}3 \\, \\mu\\text{m}^{-1}$

**(b) Deling i åtte like kuber:**

Totalvolumet er det samme: $V_{total} = 8\\,000 \\, \\mu\\text{m}^3$

Volum per liten kube: $V_{liten} = \\frac{8\\,000}{8} = 1\\,000 \\, \\mu\\text{m}^3$

Side på liten kube: $s_{liten} = \\sqrt[3]{1\\,000} = 10 \\, \\mu\\text{m}$

Overflate per liten kube: $A_{liten} = 6 \\times 10^2 = 600 \\, \\mu\\text{m}^2$

Total overflate (8 kuber): $A_{total} = 8 \\times 600 = 4\\,800 \\, \\mu\\text{m}^2$

Overflate/volum per liten kube: $\\frac{A_{liten}}{V_{liten}} = \\frac{600}{1\\,000} = 0{,}6 \\, \\mu\\text{m}^{-1}$

**(c) Biologisk betydning:**

Ved å dele seg i åtte mindre celler har organismen:
- **Doblet overflate/volum-forholdet** (fra 0,3 til 0,6 $\\mu\\text{m}^{-1}$)
- **Doblet det totale overflatearealet** (fra 2 400 til 4 800 $\\mu\\text{m}^2$) med samme totale volum
- Hver liten celle har nå relativt mer membranoverflate tilgjengelig for transport av næring og avfall
- Dette gjør stoffutvekslingen mer effektiv og forklarer hvorfor organismer er bygd opp av mange små celler i stedet for få store`,
      hints: ['Husk: Overflate = 6s², Volum = s³', 'Når volumet deles i 8, halveres siden.'],
    },
    {
      id: 'bio1-1-1-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom ru ER og glatt ER med hensyn til: (a) struktur, (b) funksjon, og (c) hvilke celletyper som har mye av hver.',
      solution: `**(a) Struktur:**

**Ru ER:**
- Har **ribosomer festet** til den cytoplasmatiske overflaten av membranen
- Ser «grovt» (ru) ut i elektronmikroskop på grunn av ribosomene
- Består hovedsakelig av flate membransekker (cisterner)
- Er sammenhengende med den ytre kjernemembranen

**Glatt ER:**
- Mangler ribosomer på overflaten
- Ser «glatt» ut i elektronmikroskop
- Består hovedsakelig av rørformede membraner
- Kan være sammenhengende med ru ER

**(b) Funksjon:**

**Ru ER:**
- Syntese av proteiner som skal eksporteres, bygges inn i membraner eller sendes til lysosomer
- Proteinfolding og kvalitetskontroll
- Glykosylering (tillegg av karbohydratkjeder til proteiner)
- Transport av proteiner i vesikler til golgiapparatet

**Glatt ER:**
- Syntese av lipider (fosfolipider, steroider)
- Avgiftning/detoksifisering av legemidler og giftstoffer
- Kalsiumlagring og -frigivelse (viktig i muskelceller)
- Karbohydratmetabolisme (glukoneogenese i lever)
- Steroidhormonproduksjon

**(c) Celletyper med mye av hver:**

**Mye ru ER:**
- Bukspyttkjertelceller (eksokrin del) – produserer fordøyelsesenzymer
- Plasmaceller (B-celler i immunsystemet) – produserer antistoffer
- Fibroblaster – produserer kollagen og andre ekstracellulære proteiner

**Mye glatt ER:**
- Leverceller (hepatocytter) – avgiftning av alkohol, legemidler og giftstoffer
- Celler i binyrebarken – produksjon av steroidhormoner (kortisol, aldosteron)
- Leydig-celler i testiklene – produksjon av testosteron
- Muskelceller – kalsiumlagring i sarkoplasmatisk retikulum`,
      hints: ['Tenk på hva ribosomene gjør.', 'Hvilke prosesser krever ikke ribosomer?'],
    },
    {
      id: 'bio1-1-1-ex-11',
      number: '11',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket av følgende er IKKE et bevis for endosymbioseteorien?',
      options: [
        { id: 'a', text: 'Mitokondrier har eget sirkulært DNA', isCorrect: false },
        { id: 'b', text: 'Kloroplaster har 70S-ribosomer', isCorrect: false },
        { id: 'c', text: 'Mitokondrier har dobbel membran', isCorrect: false },
        { id: 'd', text: 'Mitokondrier inneholder histoner som pakker DNA-et', isCorrect: true },
      ],
      solution: 'Mitokondrielt DNA er **ikke** pakket med histoner slik kjerne-DNA er. I stedet er det organisert uten histoner, noe som ligner på bakterie-DNA. De tre andre alternativene (sirkulært DNA, 70S-ribosomer, dobbel membran) er alle klassiske bevis for endosymbioseteorien. At mitokondrie-DNA mangler histoner er faktisk et ytterligere bevis for at mitokondrier stammer fra bakterier, siden bakterier heller ikke har histoner (med unntak av noen arkeer).',
      hints: ['Tenk på hvordan bakterie-DNA er organisert sammenlignet med eukaryot kjerne-DNA.'],
    },
    {
      id: 'bio1-1-1-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et forskerteam oppdager en ny encellede organisme i dyphavet. Den har cellekjerne, mitokondrier og en cellevegg av kitin, men mangler kloroplaster. Organismen kan bryte ned organisk materiale i omgivelsene. (a) Er organismen en prokaryot eller eukaryot? Begrunn. (b) Hvilket rike tilhører den mest sannsynlig? (c) Forklar hvorfor den mangler kloroplaster. (d) Hvilke organeller forventer du er spesielt godt utviklet?',
      solution: `**(a) Eukaryot eller prokaryot?**

Organismen er en **eukaryot** fordi den har:
- **Cellekjerne** (membranomsluttet kjerne = eukaryot per definisjon)
- **Mitokondrier** (membranbundne organeller)

Prokaryoter mangler begge disse strukturene.

**(b) Hvilket rike?**

Organismen tilhører mest sannsynlig **soppriket (Fungi)**. Begrunnelse:
- **Cellevegg av kitin** er karakteristisk for sopp (planteceller har cellulose, bakterier har peptidoglykan)
- **Mangler kloroplaster** – sopp kan ikke drive fotosyntese
- **Bryter ned organisk materiale** – sopp er heterotrofe og mange er saprotrofer (nedbrytere) som lever av å bryte ned dødt organisk materiale

**(c) Hvorfor mangler den kloroplaster?**

Kloroplaster finnes kun i organismer som driver fotosyntese (planter og alger). Ifølge endosymbioseteorien oppstod kloroplaster da en eukaryot celle tok opp en fotosyntetiserende cyanobakterie. Soppenes evolusjonære forfedre tok aldri opp en slik cyanobakterie, og sopp utviklet i stedet en heterotrofstrategi der de får energi ved å bryte ned organisk materiale med enzymer.

**(d) Spesielt godt utviklede organeller:**

- **Lysosomer og/eller vakuoler med fordøyelsesenzymer:** For intracellulær nedbrytning av organisk materiale
- **Golgiapparat:** For produksjon og sekresjon av ekstracellulære enzymer (som bryter ned organisk materiale utenfor cellen før opptak)
- **Ru ER:** For syntese av de mange enzymene som trengs for nedbrytning
- **Mitokondrier:** For å produsere ATP fra nedbrytningen av det organiske materialet (aerob respirasjon)
- **Peroksisomer:** For oksidasjon av ulike forbindelser`,
      hints: [
        'Cellekjerne er det definerende kjennetegnet på eukaryoter.',
        'Hvilke organismer har cellevegg av kitin?',
        'Tenk på hva organismen trenger for å bryte ned materiale.',
      ],
    },
    {
      id: 'bio1-1-1-ex-13',
      number: '13',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn tre forskjeller mellom planteceller og dyreceller, og forklar den biologiske betydningen av hver forskjell.',
      solution: `**1. Cellevegg (planteceller har, dyreceller mangler)**

Planteceller har en stiv cellevegg av cellulose utenfor cellemembranen. Den biologiske betydningen er at celleveggen gir mekanisk styrke og beskyttelse, og gjør at planter kan stå oppreist uten indre skjelett. Celleveggen hindrer også cellen i å sprekke ved osmotisk opptak av vann. Dyreceller mangler cellevegg og har i stedet en fleksibel form som tillater bevegelse (f.eks. hvite blodceller som kryper mellom vev, muskelceller som trekker seg sammen).

**2. Kloroplaster (planteceller har, dyreceller mangler)**

Kloroplaster inneholder klorofyll og driver fotosyntese – de omdanner lysenergi, karbondioksid og vann til glukose og oksygen. Den biologiske betydningen er at planter er **autotrofe** (de lager sin egen mat fra uorganiske stoffer). Dyreceller mangler kloroplaster og er **heterotrofe** – de må ta opp organisk næring fra omgivelsene. Dette er grunnlaget for næringskjedene i naturen.

**3. Stor sentralvakuole (planteceller har, dyreceller har bare små vakuoler)**

Plantecellers sentralvakuole fyller opptil 90 % av cellevolumet og er fylt med cellesaft. Den biologiske betydningen er at vakuolen opprettholder **turgortrykk** ved å ta opp vann gjennom osmose, noe som gir planten stivhet (planter visner når de mister turgortrykk). Vakuolen fungerer også som lager for næring, pigmenter og giftstoffer. Dyreceller har bare små vakuoler fordi de bruker andre mekanismer for strukturell støtte (cytoskjelett) og bruker lysosomer for nedbrytning.`,
    },
    {
      id: 'bio1-1-1-ex-14',
      number: '14',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken mikroskopimetode ville du velge for å studere den detaljerte indre strukturen til et mitokondrie?',
      options: [
        { id: 'a', text: 'Lysmikroskop', isCorrect: false },
        { id: 'b', text: 'Sveipeelektronmikroskop (SEM)', isCorrect: false },
        { id: 'c', text: 'Transmisjonselektronmikroskop (TEM)', isCorrect: true },
        { id: 'd', text: 'Konfokalmikroskop', isCorrect: false },
      ],
      solution: '**Transmisjonselektronmikroskop (TEM)** er det beste valget for å studere den indre strukturen til et mitokondrie. TEM sender en elektronstråle gjennom et tynt snitt av prøven og gir oppløsning ned til ca. 0,5 nm, noe som er tilstrekkelig for å se cristae, den doble membranen og matriksen. Lysmikroskop og konfokalmikroskop har for lav oppløsning (200 nm) til å se disse detaljene. SEM viser bare overflatestrukturer, ikke indre strukturer.',
      hints: ['Tenk på oppløsning og hva du kan se med de ulike metodene.'],
    },
    {
      id: 'bio1-1-1-ex-15',
      number: '15',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvordan en celles organell-sammensetning gjenspeiler cellens funksjon. Bruk minst tre ulike celletyper som eksempler og forklar sammenhengen mellom organellene og funksjonen.',
      solution: `Cellens organell-sammensetning er nøye tilpasset cellens spesifikke oppgave i kroppen. Selv om alle celler (med noen få unntak) har det samme DNA-et, uttrykker de forskjellige gener, noe som gir ulik mengde og utvikling av organellene.

**1. Hvite blodceller (nøytrofile granulocytter) – immunforsvar**

Nøytrofile granulocytter spiser og dreper bakterier gjennom fagocytose.

Organellprofil:
- **Svært mange lysosomer:** Inneholder enzymer og antimikrobielle stoffer som dreper oppslukte bakterier
- **Godt utviklet cytoskjelett:** Gir cellen evne til amøboid bevegelse slik at den kan forflytte seg til infeksjonsstedet
- **Relativt få mitokondrier:** Nøytrofile er kortlivede og bruker hovedsakelig anaerob glykolyse for energi
- **Lite ER og golgiapparat:** Produserer ikke mye protein for eksport

**2. Røde blodceller (erytrocytter) – oksygentransport**

Modne røde blodceller hos mennesker er unike fordi de har mistet nesten alle sine organeller.

Organellprofil:
- **Ingen kjerne:** Gir mer plass til hemoglobin (oksygenbærende protein)
- **Ingen mitokondrier:** Bruker bare anaerob glykolyse, slik at de ikke forbruker oksygenet de frakter
- **Ingen ER, golgi, lysosomer:** Hele cellen er optimalisert som en «pose» fylt med hemoglobin
- Denne ekstreme spesialiseringen gjør dem svært effektive til oksygentransport, men de kan ikke reparere seg selv og lever bare ca. 120 dager

**3. Celler i skjoldbruskkjertelen – hormonproduksjon**

Skjoldbruskkjertelceller (follikelceller) produserer tyroksin og trijodtyronin.

Organellprofil:
- **Godt utviklet ru ER:** For syntese av thyroglobulin (proteinforløper for hormonene)
- **Stort golgiapparat:** For modifisering og sekresjon av thyroglobulin til follikkellumen
- **Mange mitokondrier:** Hormonproduksjon er energikrevende
- **Mange lysosomer:** For å ta tilbake thyroglobulin fra follikkel og spalte det til aktive hormoner

**Generelt prinsipp:** Celler som produserer mye protein har mye ru ER og golgiapparat. Celler med høyt energibehov har mange mitokondrier. Celler som bryter ned materiale har mange lysosomer. Celler som driver avgiftning har mye glatt ER. Denne sammenhengen mellom struktur og funksjon er et grunnleggende prinsipp i biologien.`,
      hints: [
        'Velg celletyper med svært ulike funksjoner.',
        'Tenk på hvilke prosesser som er viktigst for hver celletype og hvilke organeller som utfører dem.',
      ],
    },
  ],
};
