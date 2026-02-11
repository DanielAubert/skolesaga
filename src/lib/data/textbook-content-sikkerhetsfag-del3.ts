/* eslint-disable */
// @ts-nocheck

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Seksjon 3: Forebyggende sikkerhetsarbeid
// ============================================================================

// ----------------------------------------------------------------------------
// Kapittel 3.1: CPTED - Kriminalitetsforebygging gjennom design
// ----------------------------------------------------------------------------
export const CHAPTER_SIKKERHETSFAG_3_1: TextbookChapter = {
  id: 'sikkerhetsfag-3-1',
  courseId: 'sikkerhetsfag',
  chapterNumber: '3.1',
  title: 'CPTED - Kriminalitetsforebygging gjennom design',
  description: 'I dette kapittelet laerer du om hvordan utforming av fysiske omgivelser kan forebygge kriminalitet. Du blir kjent med prinsippene bak CPTED, naturlig overvaaking, territorialitet og tilgangskontroll gjennom design.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-3-1-intro',
      type: 'text',
      content: `## Hva er CPTED?

CPTED star for **Crime Prevention Through Environmental Design**, som pa norsk betyr kriminalitetsforebygging gjennom utforming av omgivelsene. Ideen bak CPTED er at man ved a designe bygninger, uteomrader og byrom pa bestemte mater kan redusere muligheten for kriminelle handlinger og oke trygghetsfolgelsen blant de som oppholder seg der.

CPTED ble utviklet pa 1970-tallet av kriminologen C. Ray Jeffery og arkitekten Oscar Newman. Tilnaermingen bygger pa tanken om at det fysiske miljoet sender signaler til bade potensielle lovbrytere og lovlydige borgere. Et omrade som ser velholdt, oversiktlig og bebodd ut, vil vaere mindre attraktivt for kriminelle enn et omrade preget av forfall, mork belysning og uoversiktlige kroker.

I dette kapittelet skal du laere om:
- De fire grunnprinsippene i CPTED
- Naturlig overvaaking og hvordan det fungerer i praksis
- Territorialitet og eierskapsfolgelse
- Hvordan vedlikehold og image pavirker kriminalitet`,
    },
    {
      id: 'sik-3-1-def-cpted',
      type: 'definition',
      title: 'CPTED',
      content: `**CPTED (Crime Prevention Through Environmental Design)** er en tilnaerming til kriminalitetsforebygging som fokuserer pa utforming av det fysiske miljoet for a redusere muligheter for kriminalitet, oke oppdagelsesrisikoen og styrke trygghetsfolgelsen. Malet er a gjore det vanskeligere a begaa lovbrudd og lettere a oppdage uonsket atferd.`,
    },
    {
      id: 'sik-3-1-text-prinsipper',
      type: 'text',
      content: `### De fire grunnprinsippene i CPTED

CPTED bygger pa fire hovedprinsipper som hver for seg og sammen bidrar til a forebygge kriminalitet:

**1. Naturlig overvaaking (Natural Surveillance)**
Naturlig overvaaking handler om a utforme omrader slik at mennesker naturlig kan se hva som foregar rundt dem. Nar potensielle lovbrytere foler seg observert, reduseres sannsynligheten for at de begaar kriminelle handlinger.

Tiltak for naturlig overvaaking:
- God belysning i uteomrader, parkeringsplasser og inngangspartier
- Store vinduer som gir innsyn fra gaten
- Lav beplantning som ikke blokkerer sikten
- Unnga mork kroker og blinde flater uten vinduer
- Plassere aktivitetsomrader slik at de er synlige fra boliger og kontorer

**2. Naturlig tilgangskontroll (Natural Access Control)**
Naturlig tilgangskontroll handler om a lede besoekende inn gjennom definerte innganger og begrense tilgangen til omrader som ikke er ment for alle. Dette gir klare signaler om hvor man har lov a vaere og hvor man ikke har det.

Tiltak for naturlig tilgangskontroll:
- Tydelige inngangspartier og gangveier
- Beplantning og gjerder som markerer grenser
- Skilting som viser tillatte ferdselsomrader
- Utforming som naturlig leder folk mot hovedinnganger

**3. Territorialitet (Territorial Reinforcement)**
Territorialitet handler om a skape en folgelse av eierskap og tilhorighet til et omrade. Nar beboere eller brukere foler at omradet tilhorer dem, vil de i storre grad passe pa det og reagere pa fremmed aktivitet.

Tiltak for territorialitet:
- Personlig preg pa uteomrader (blomster, utemobler)
- Klare skiller mellom privat, halvprivat og offentlig sone
- Vedlikehold og stell av omradet
- Naboskapsaktiviteter og fellesomrader

**4. Vedlikehold og image (Maintenance and Image)**
Et godt vedlikeholdt omrade signaliserer at noen bryr seg og folger med. Forfall og vandalisme tiltrekker seg mer kriminalitet, noe som ofte kalles knust-vindu-teorien.

Tiltak for vedlikehold og image:
- Rask fjerning av graffiti og reparasjon av haerverk
- Godt vedlikeholdt beplantning og gronnomrader
- Ren og ryddig fasade
- Fungerende belysning og infrastruktur`,
    },
    {
      id: 'sik-3-1-def-naturlig',
      type: 'definition',
      title: 'Naturlig overvaaking',
      content: `**Naturlig overvaaking** er utforming av det fysiske miljoet som gjor at mennesker som oppholder seg i omradet naturlig kan se og bli sett. God belysning, oversiktlige omrader og vindusflatene i bygninger er typiske virkemidler. Malet er a oke oppdagelsesrisikoen for potensielle lovbrytere.`,
    },
    {
      id: 'sik-3-1-text-knust',
      type: 'text',
      content: `### Knust-vindu-teorien

Knust-vindu-teorien ble lansert av James Q. Wilson og George L. Kelling i 1982. Teorien sier at synlige tegn pa uorden og forfall i et omrade - som knuste vinduer, graffiti og forsoppling - sender signaler om at ingen bryr seg og at omradet er uten sosial kontroll. Dette tiltrekker mer kriminalitet og uonsket atferd.

Sammenhengen kan beskrives slik:
1. Et vindu blir knust og repareres ikke
2. Flere vinduer blir knust fordi signalet er at ingen folger med
3. Forsoppling og graffiti oker
4. Folk som kan velge, unngaer omradet
5. Den naturlige overvakingen svekkes
6. Mer alvorlig kriminalitet far fotfeste

CPTED-tilnaermingen tar hensyn til dette ved a legge stor vekt pa vedlikehold og rask utbedring av skader. Et omrade som ser velstelt og ivaretatt ut, har mye lavere risiko for kriminalitet enn et tilsvarende omrade med synlig forfall.`,
    },
    {
      id: 'sik-3-1-example-1',
      type: 'example',
      title: 'Eksempel: CPTED i et boligomrade',
      problem: 'Et boligomrade opplever okt innbrudd og haerverk. Hvordan kan CPTED-prinsipper brukes for a forbedre situasjonen?',
      solution: `**Naturlig overvaaking:**
- Installere bedre utebelysning langs gangveier og parkeringsplasser
- Beskjaere hoye busker som blokkerer sikten fra vinduene
- Plassere lekeplass slik at den er synlig fra boligene

**Naturlig tilgangskontroll:**
- Sette opp lave gjerder som markerer grensen mellom fellesomrade og privat hage
- Lage tydelige gangveier som leder besoekende til hovedinnganger
- Fjerne snarveier gjennom omradet som brukes av uvedkommende

**Territorialitet:**
- Oppfordre beboere til a stelle hager og uteomrader
- Opprette felles oppholdsomrader der naboer kan motes
- Sette opp postkassestativ med husnumre og navn

**Vedlikehold:**
- Fjerne graffiti innen 24 timer
- Reparere oedelagte gatelys umiddelbart
- Etablere en dugnadsordning for fellesomrader

Kombinasjonen av disse tiltakene skaper et tryggere omrade der beboerne foler eierskap og potensielle lovbrytere opplever hoy oppdagelsesrisiko.`,
    },
    {
      id: 'sik-3-1-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

CPTED er en forebyggende tilnaerming som bruker utforming av det fysiske miljoet for a redusere kriminalitet. De fire prinsippene - naturlig overvaaking, naturlig tilgangskontroll, territorialitet og vedlikehold - virker sammen for a skape tryggere omrader. Knust-vindu-teorien understreker viktigheten av a holde omrader velstelte for a unnga en negativ spiral med okt kriminalitet.

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| CPTED | Kriminalitetsforebygging gjennom design av omgivelser |
| Naturlig overvaaking | Utforming som gjor at folk naturlig kan se hva som skjer |
| Territorialitet | Skape folgelse av eierskap til et omrade |
| Knust-vindu-teorien | Forfall tiltrekker mer kriminalitet |`,
    },
    {
      id: 'sik-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        task: 'Hva star CPTED for?',
        options: [
          { id: 'a', text: 'Central Police Training and Education Department', isCorrect: false },
          { id: 'b', text: 'Crime Prevention Through Environmental Design', isCorrect: true },
          { id: 'c', text: 'Community Protection Through Electronic Detection', isCorrect: false },
          { id: 'd', text: 'Criminal Profiling and Threat Evaluation Division', isCorrect: false },
        ],
        solution: 'CPTED star for Crime Prevention Through Environmental Design, som betyr kriminalitetsforebygging gjennom utforming av det fysiske miljoet.',
      },
    },
    {
      id: 'sik-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        task: 'Hvilket CPTED-prinsipp handler om a sette opp god belysning og bruke store vinduer for at folk skal kunne se hva som skjer?',
        options: [
          { id: 'a', text: 'Naturlig tilgangskontroll', isCorrect: false },
          { id: 'b', text: 'Territorialitet', isCorrect: false },
          { id: 'c', text: 'Naturlig overvaaking', isCorrect: true },
          { id: 'd', text: 'Vedlikehold og image', isCorrect: false },
        ],
        solution: 'Naturlig overvaaking handler om a utforme omgivelser slik at mennesker naturlig kan se hva som foregar. God belysning og store vinduer er viktige virkemidler for dette prinsippet.',
      },
    },
    {
      id: 'sik-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        task: 'Forklar knust-vindu-teorien og beskriv hvordan den henger sammen med CPTED-prinsippet om vedlikehold og image.',
        hints: ['Tenk pa hva som skjer nar et omrade ikke vedlikeholdes'],
        solution: 'Knust-vindu-teorien sier at synlige tegn pa forfall og uorden i et omrade, som knuste vinduer og graffiti, sender signaler om at ingen bryr seg. Dette tiltrekker mer kriminalitet og uonsket atferd, fordi den sosiale kontrollen virker svak. CPTED-prinsippet om vedlikehold og image bygger direkte pa denne teorien ved a legge vekt pa rask utbedring av skader, renhold og godt vedlikeholdte omrader for a signalisere at noen folger med og bryr seg.',
      },
    },
    {
      id: 'sik-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        task: 'Et kjopesenter opplever problemer med lommetyverier og haerverk pa kveldstid. Foresla tre konkrete CPTED-tiltak og begrunn hvert tiltak med henvisning til riktig CPTED-prinsipp.',
        solution: '1) Forbedre belysningen pa parkeringsplassen og langs gangveier (naturlig overvaaking) - god belysning gjor at folk foler seg tryggere og at potensielle lovbrytere foler seg mer utsatt for a bli sett. 2) Fjerne hoye busker og hekker rundt inngangene og erstatte dem med lav beplantning (naturlig overvaaking og tilgangskontroll) - dette gir bedre sikt og fjerner gjemmesteder. 3) Fjerne graffiti og reparere oedelagte inventar umiddelbart (vedlikehold og image) - dette signaliserer at omradet er under oppsyn og forebygger videre haerverk.',
      },
    },
    {
      id: 'sik-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom naturlig overvaaking og naturlig tilgangskontroll som CPTED-prinsipper. Gi et eksempel pa hvert.',
        solution: 'Naturlig overvaaking handler om a gjore omgivelsene oversiktlige slik at folk kan se hva som foregar. Et eksempel er a plassere vinduer i en butikk slik at ansatte kan se parkeringsplassen. Naturlig tilgangskontroll handler om a lede folk til bestemte innganger og begrense adgang til omrader der uvedkommende ikke har noe a gjore. Et eksempel er a bruke beplantning og gangveier til a lede besoekende mot hovedinngangen til en bygning i stedet for a la dem ga rundt hele bygget.',
      },
    },
    {
      id: 'sik-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        task: 'Beskriv hva som menes med territorialitet i CPTED-sammenheng. Hvorfor er det viktig at beboere og brukere foler eierskap til et omrade?',
        solution: 'Territorialitet i CPTED handler om a skape en folgelse av eierskap og tilhorighet til et omrade. Dette oppnas gjennom personlig preg som blomster og utemobler, klare skiller mellom privat og offentlig sone, og fellesaktiviteter i naermiljoet. Nar folk foler eierskap til et omrade, vil de i storre grad passe pa det, reagere pa fremmed og mistenkelig aktivitet, og ta ansvar for vedlikeholdet. Dette oker den uformelle sosiale kontrollen og gjor omradet mindre attraktivt for kriminelle, fordi de opplever at noen folger med og bryr seg om hva som foregar.',
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// Kapittel 3.2: Fysisk sikring
// ----------------------------------------------------------------------------
export const CHAPTER_SIKKERHETSFAG_3_2: TextbookChapter = {
  id: 'sikkerhetsfag-3-2',
  courseId: 'sikkerhetsfag',
  chapterNumber: '3.2',
  title: 'Fysisk sikring',
  description: 'I dette kapittelet laerer du om fysiske sikringstiltak som gjerder, porter, laser, barrierer og soneinndeling. Du far innsikt i hvordan fysiske sperrer og tilgangskontroll brukes for a beskytte verdier, mennesker og informasjon.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-3-2-intro',
      type: 'text',
      content: `## Fysisk sikring som grunnlag

Fysisk sikring er det mest grunnleggende laget i ethvert sikkerhetsopplegg. Mens CPTED handler om a designe omgivelser for a forebygge kriminalitet, handler fysisk sikring om a sette opp konkrete barrierer og sperrer som hindrer uautorisert tilgang til omrader, bygninger og verdier.

Et godt fysisk sikringsopplegg er bygget opp etter prinsippet om forsvar i dybden - det vil si at man bruker flere lag med sikringstiltak som en potensiell inntrenger ma forsere for a na malet. Tanken er at selv om ett tiltak svikter, vil de neste lagene fortsatt gi beskyttelse.

I dette kapittelet skal du laere om:
- Prinsippet om forsvar i dybden
- Perimetersikring med gjerder og porter
- Laser og lasesystemer
- Barrierer og kjoretoysperrer
- Soneinndeling og tilgangskontroll`,
    },
    {
      id: 'sik-3-2-def-fysisk',
      type: 'definition',
      title: 'Fysisk sikring',
      content: `**Fysisk sikring** omfatter alle materielle tiltak som er ment a hindre, forsinke eller oppdage uautorisert tilgang til et omrade eller en bygning. Dette inkluderer gjerder, murer, porter, laser, dorer, vinduer, barrierer og andre konstruksjoner som utgjor fysiske hindre for inntrengere.`,
    },
    {
      id: 'sik-3-2-text-dybde',
      type: 'text',
      content: `### Forsvar i dybden

Prinsippet om forsvar i dybden (defense in depth) er sentralt i fysisk sikring. Det innebarer at sikkerheten bygges opp i flere lag, fra yttergrensen og inn mot det som skal beskyttes:

**Lag 1: Perimetersikring (yttergrense)**
- Gjerder, murer og porter rundt eiendommen
- Belysning langs perimeteren
- Overvaakingskameraer og sensorer
- Skilting om at omradet er sikret

**Lag 2: Bygningsskall**
- Solide dorer med gode laser
- Sikrede vinduer (herdet glass, gitter)
- Tak og vegger uten svake punkter
- Brannluker og ventilasjonsanlegg sikret

**Lag 3: Indre sikring**
- Tilgangskontrollsystemer pa interne dorer
- Sikrede rom for spesielt verdifulle gjenstander
- Safe og verdiskap
- Innbruddsdeteksjon i spesifikke soner

**Lag 4: Gjenstandssikring**
- Forankring av verdifulle gjenstander
- Varesluser og produktsikring
- Dokumentskap med las
- Digitale sikringstiltak for IT-utstyr

Hvert lag skal bade avskrekke, forsinke og oppdage en eventuell inntrenger. Jo flere lag en inntrenger ma forsere, desto storre er sannsynligheten for at vedkommende blir oppdaget eller gir opp.`,
    },
    {
      id: 'sik-3-2-def-perimeter',
      type: 'definition',
      title: 'Perimetersikring',
      content: `**Perimetersikring** er sikringstiltak langs yttergrensen av et omrade eller en eiendom. Malet er a kontrollere hvem som far tilgang til omradet, og a oppdage forsok pa uautorisert adgang. Typiske tiltak er gjerder, murer, porter, bommer og overvaakingskameraer.`,
    },
    {
      id: 'sik-3-2-text-gjerder',
      type: 'text',
      content: `### Gjerder og porter

Gjerder er det vanligste perimetersikringstiltaket. Valg av gjerdetype avhenger av sikkerhetsniva og hva som skal beskyttes:

**Flettverksgjerde (Cyclone)**
- Vanligste gjerdetypen for generell sikring
- Typisk 1,8-2,4 meter hoyt
- Kan forsterkes med piggtrad eller spiralbarrierer pa toppen
- Relativt lett a klippe gjennom uten forsterkning

**Panelgjerde med stolper**
- Sterkere enn flettverksgjerde
- Vanskeligere a klatre over
- Godt egnet for industri- og lagerbygninger
- Kan kombineres med sensorer

**Palissadegjerde**
- Stalgjerder med spisser pa toppen
- Hoyt sikkerhetsniva
- Brukes rundt kritisk infrastruktur
- Vanskelig a klatre over og klippe gjennom

**Porter og bommer**
Porter ma ha samme sikkerhetsniva som gjerdet de er en del av. Viktige typer:
- **Manuelle porter** - apnes og lukkes for hand
- **Motoriserte skyveporter** - styres med fjernkontroll eller kort
- **Bommer** - kontrollerer kjoretoytilgang
- **Sluseporter** - to porter med identifikasjon mellom dem
- **Hastighetssperrer** - rising bollards mot uautoriserte kjoretoy`,
    },
    {
      id: 'sik-3-2-text-laser',
      type: 'text',
      content: `### Laser og lasesystemer

Lasen er et av de eldste og fortsatt viktigste sikringstiltakene. Moderne lasesystemer spenner fra enkle mekaniske laser til avanserte elektroniske losninger:

**Mekaniske laser:**
- **Sylinderlaser** - vanligste typen med nokkel
- **Doblatslas** - gir hoyere sikkerhet
- **Hengelaser** - fleksibel bruk pa porter, skap med mer
- **Patentlaser** - nokkelen kan ikke kopieres uten autorisasjon

**Elektroniske laser:**
- **Kortleser** - tilgangskort med magnetstripe eller RFID
- **Kodelas** - pinkode pa tastatur
- **Biometriske laser** - fingeravtrykk, iris, ansiktsgjenkjenning
- **Mobiltilgang** - apning via mobilapp eller Bluetooth

**Lasklassifisering:**
Laser klassifiseres etter hvor lang tid de motstaar innbruddsforsk:
- **Klasse 1** - Grunnleggende sikring (under 3 minutter)
- **Klasse 2** - Normal sikring (3-5 minutter)
- **Klasse 3** - Forsterket sikring (5-10 minutter)
- **Klasse 4** - Hoy sikring (10-20 minutter)
- **Klasse 5** - Ekstra hoy sikring (over 20 minutter)

Valg av lasklasse avhenger av risikovurderingen og hva som skal beskyttes.`,
    },
    {
      id: 'sik-3-2-text-soner',
      type: 'text',
      content: `### Soneinndeling

En viktig del av fysisk sikring er a dele et anlegg inn i soner med ulike sikkerhetskrav. Dette gir en systematisk tilnaerming til hvem som har tilgang til hva:

**Offentlig sone (Sone 0)**
- Omrader tilgjengelige for alle
- Resepsjon, venteomrade, parkeringsplass
- Lav sikring, men overvaaking

**Intern sone (Sone 1)**
- Omrader for ansatte og autoriserte besoekende
- Kontorlandskap, moterom, kantine
- Adgangskort eller kode for tilgang

**Begrenset sone (Sone 2)**
- Omrader med begrenset tilgang
- Serverrom, lager, tekniske rom
- Spesifikk autorisasjon kreves

**Sikkerhetssone (Sone 3)**
- Omrader med hoye sikkerhetskrav
- Pengeskap, verdilager, arkiv
- Flerfaktor-autentisering og logging

**Hoysikkerhetssone (Sone 4)**
- Strengeste sikkerhetsniva
- Kritisk infrastruktur, sikre rom
- Biometrisk tilgang, kameraovervaaking, kontinuerlig overvaaking`,
    },
    {
      id: 'sik-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Fysisk sikring av et lagerbygg',
      problem: 'Et logistikkselskap skal sikre et nytt lagerbygg som inneholder verdifulle varer. Beskriv et forsvar-i-dybden-opplegg.',
      solution: `**Lag 1 - Perimeter:**
- Panelgjerde med piggtrad pa toppen (2,4 m hoyt)
- Motorisert skyveport med kortleser for kjoretoy
- Bommer med nummerplateleser
- Utvendig belysning med bevegelsessensorer

**Lag 2 - Bygningsskall:**
- Staaldorer med klasse 3 lasesystem
- Herdet glass i vinduene
- Rullgitter foran varemottak etter stengetid
- Solide vegger uten svake punkter

**Lag 3 - Indre sikring:**
- Soneinndeling med ulike tilgangsniva
- Kortleser pa dorer mellom soner
- Verdilager i egen sone med forsterket las
- Innbruddsalarmer i alle soner

**Lag 4 - Gjenstandssikring:**
- Pallereol med varesluse for spesielt verdifulle varer
- Forseglet lageromrade med logg over alle bevegelser
- GPS-sporing pa hoyverdipaller

Opplegget gir tid til respons: selv om noen tar seg gjennom gjerdet, ma de fortsatt forsere bygningsskallet, interne soner og gjenstandssikring.`,
    },
    {
      id: 'sik-3-2-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

Fysisk sikring er det mest handgripelige laget i et sikkerhetsopplegg. Gjennom forsvar i dybden bygger man opp flere lag med sikringstiltak fra yttergrense til gjenstandsniva. Gjerder, porter, laser og barrierer utgjor grunnmuren, mens soneinndeling sikrer at bare autoriserte personer far tilgang til sensitive omrader.

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Forsvar i dybden | Flere lag med sikringstiltak |
| Perimetersikring | Sikring av yttergrensen |
| Lasklassifisering | Gradering av laser etter motstandstid |
| Soneinndeling | Omrader med ulike sikkerhetskrav |`,
    },
    {
      id: 'sik-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        task: 'Hva innebarer prinsippet om forsvar i dybden?',
        options: [
          { id: 'a', text: 'A bruke ett veldig sterkt sikringstiltak', isCorrect: false },
          { id: 'b', text: 'A bygge opp sikkerheten i flere lag fra yttergrense til gjenstand', isCorrect: true },
          { id: 'c', text: 'A plassere alle sikringstiltak ved hovedinngangen', isCorrect: false },
          { id: 'd', text: 'A kun fokusere pa elektronisk sikring', isCorrect: false },
        ],
        solution: 'Forsvar i dybden betyr at man bruker flere lag med sikringstiltak - fra perimetersikring via bygningsskall og indre sikring til gjenstandssikring. Selv om ett lag svikter, gir de neste lagene fortsatt beskyttelse.',
      },
    },
    {
      id: 'sik-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        task: 'En las i klasse 3 motstar innbruddsforsk i hvor lang tid?',
        options: [
          { id: 'a', text: 'Under 3 minutter', isCorrect: false },
          { id: 'b', text: '3-5 minutter', isCorrect: false },
          { id: 'c', text: '5-10 minutter', isCorrect: true },
          { id: 'd', text: '10-20 minutter', isCorrect: false },
        ],
        solution: 'En las i klasse 3 (forsterket sikring) motstar innbruddsforsk i 5-10 minutter. Lasklassene gar fra klasse 1 (under 3 minutter) til klasse 5 (over 20 minutter).',
      },
    },
    {
      id: 'sik-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom mekaniske og elektroniske laser. Nevn to fordeler med elektroniske laser sammenlignet med mekaniske.',
        hints: ['Tenk pa kontroll over nokler kontra tilgangsrettigheter'],
        solution: 'Mekaniske laser bruker fysiske nokler for a apne og lukke, mens elektroniske laser bruker kort, kode, biometri eller mobilapp. To fordeler med elektroniske laser: 1) Man kan enkelt fjerne tilgang til bestemte personer uten a bytte las, mens en mistet nokkel krever lasbytte. 2) Elektroniske laser kan logge hvem som har passert og nar, noe som gir verdifull informasjon ved sikkerhetshendelser.',
      },
    },
    {
      id: 'sik-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        task: 'Beskriv soneinndeling fra sone 0 til sone 4 og gi et eksempel pa hva hver sone kan inneholde i et kontorbygg.',
        solution: 'Sone 0 (offentlig) er tilgjengelig for alle, for eksempel resepsjonen og venteomradet i forsteetasjen. Sone 1 (intern) er for ansatte og autoriserte besoekende, for eksempel kontorlandskapet. Sone 2 (begrenset) krever spesifikk autorisasjon, for eksempel serverrommet eller tekniske rom. Sone 3 (sikkerhetssone) har hoye sikkerhetskrav, for eksempel arkivet med konfidensiell dokumentasjon. Sone 4 (hoysikkerhet) er det strengeste nivaet, for eksempel et sikkert rom for krisestyring med biometrisk tilgang.',
      },
    },
    {
      id: 'sik-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-3-2-ex-5',
        number: '3.2.5',
        type: 'classic',
        task: 'En skole onsker a forbedre den fysiske sikringen. Foresla tiltak for hvert av de fire lagene i forsvar i dybden tilpasset en skole.',
        solution: 'Lag 1 (perimeter): Gjerde rundt skolegarden med en eller to kontrollerte innganger, god utendors belysning og kameraovervaaking. Lag 2 (bygningsskall): Solide inngangsdorer som laases automatisk etter skolestart, sikrede vinduer i forsteetasjen, og alle inngangspartier synlige fra resepsjonen. Lag 3 (indre sikring): Kortleser pa dorer til administrative avdelinger, laaste skap for verdifullt utstyr i spesialrom, og alarmert medisinskap pa helsesosterkontoret. Lag 4 (gjenstandssikring): Laptop-laaser i datarommet, lastbart skap for eksamensdokumenter, og pengeskrin for kontanter i administrasjonen.',
      },
    },
    {
      id: 'sik-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        task: 'Hvorfor er det viktig at porten i et gjerde har minst like hoyt sikkerhetsniva som selve gjerdet? Hva kan konsekvensene vaere dersom porten er svakere?',
        solution: 'En kjede er aldri sterkere enn det svakeste leddet. Dersom porten har lavere sikkerhetsniva enn gjerdet, vil en inntrenger automatisk velge porten som innbrytningspunkt fordi den er lettest a forsere. Et hoyt og solid gjerde med en svak port gir en falsk trygghetsfolgelse, fordi det ser sikkert ut men i praksis er lett a ta seg forbi. Konsekvensene kan vaere uautorisert tilgang, tyveri, sabotasje eller fare for ansatte. Porten er ofte det forste stedet en potensiell inntrenger vurderer, og den ma derfor testes og klassifiseres pa linje med resten av perimetersikringen.',
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// Kapittel 3.3: Elektronisk sikring
// ----------------------------------------------------------------------------
export const CHAPTER_SIKKERHETSFAG_3_3: TextbookChapter = {
  id: 'sikkerhetsfag-3-3',
  courseId: 'sikkerhetsfag',
  chapterNumber: '3.3',
  title: 'Elektronisk sikring',
  description: 'I dette kapittelet laerer du om alarmsystemer, ulike typer detektorer, sentraler og hvordan elektroniske sikringssystemer er bygget opp. Du far forstaelse for hvordan teknologien brukes for a oppdage og varsle om sikkerhetshendelser.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-3-3-intro',
      type: 'text',
      content: `## Elektronisk sikring

Fysiske barrierer alene er sjelden tilstrekkelig for a sikre et objekt. Elektronisk sikring supplerer den fysiske sikringen ved a oppdage, varsle og dokumentere sikkerhetshendelser. Mens et gjerde forsinker en inntrenger, er det alarmsystemet som sorger for at hendelsen oppdages og at det iverksettes tiltak.

Et komplett elektronisk sikringssystem bestar typisk av tre hoveddeler:
1. **Detektorer** - sensorer som registrerer uonsket aktivitet
2. **Alarmsentral** - hjernen i systemet som mottar og behandler signaler
3. **Varslingsenheter** - sirener, lys og kommunikasjon til alarmstasjon

I dette kapittelet skal du laere om:
- Ulike typer alarmsystemer og deres bruksomrader
- Detektortyper og hvordan de fungerer
- Alarmsentralens rolle og funksjon
- Varsling og respons ved alarm`,
    },
    {
      id: 'sik-3-3-def-alarm',
      type: 'definition',
      title: 'Alarmsystem',
      content: `**Alarmsystem** er et elektronisk system som oppdager og varsler om uautorisert adgang, brann, tekniske feil eller andre sikkerhetshendelser. Systemet bestar av detektorer som registrerer hendelser, en sentral som behandler signalene, og varslingsenheter som gir alarm til riktige mottakere.`,
    },
    {
      id: 'sik-3-3-text-detektorer',
      type: 'text',
      content: `### Detektorer og sensorer

Detektorer er oyene og orene i et alarmsystem. De registrerer endringer i miljoet og sender signaler til alarmsentralen. Valg av detektor avhenger av hva man onsker a beskytte og hvilke trusler man star overfor.

**Innbruddsdetektorer:**

**PIR-detektor (Passiv infraroed)**
- Registrerer varmestaling fra kropper i bevegelse
- Mest brukte innbruddsdetektor
- Dekker et bestemt omrade (deteksjonsfelt)
- Kan gi falske alarmer fra dyr, varme og luftstommer

**Magnetkontakt**
- Plasseres pa dorer og vinduer
- Registrerer nar dor eller vindu apnes
- Enkel og palitelig teknologi
- Gir alarm kun ved apning, ikke ved knusing

**Glassbrudddetektor**
- Registrerer lyden av knust glass
- Plasseres naer vinduene som skal beskyttes
- Kan vaere akustisk (lyd) eller vibrasjon
- Viktig supplement til magnetkontakter

**Vibrasjonsdetektor**
- Registrerer rystelser i vegger, gulv eller tak
- Brukes for a oppdage gjennombrytning
- Egnet for sikkerhetsrom og hvelv
- Kan justeres for a unnga falske alarmer

**Utendorsdetektorer:**

**IR-barrierer**
- Infrarode straaler mellom sender og mottaker
- Danner en usynlig barriere
- Gir alarm nar straalen brytes
- Brukes langs gjerder og perimetere

**Mikrobolgjedetektorer**
- Sender ut mikrobolgjesignaler
- Registrerer bevegelse innenfor et omrade
- Dekker storre omrader enn PIR
- Fungerer i alle vaerforhold

**Seismiske sensorer**
- Registrerer vibrasjoner i bakken
- Kan oppdage personer som gar eller graver
- Brukes rundt perimetere og gjerder
- Hoy grad av noyaktighet`,
    },
    {
      id: 'sik-3-3-def-falsk-alarm',
      type: 'definition',
      title: 'Falsk alarm',
      content: `**Falsk alarm** er en alarm som utloses uten at det foreligger en reell trussel. Arsaker kan vaere dyr, vaerforhold, tekniske feil eller feilbetjening. Falske alarmer er et betydelig problem fordi de undergraver tilliten til alarmsystemet og kan fore til at reelle alarmer ikke tas pa alvor.`,
    },
    {
      id: 'sik-3-3-text-sentral',
      type: 'text',
      content: `### Alarmsentralen

Alarmsentralen er hjernen i sikringssystemet. Den mottar signaler fra alle detektorer, behandler dem og iverksetter riktig respons.

**Alarmsentralens hovedfunksjoner:**
- Motta og behandle signaler fra detektorer
- Skille mellom reelle alarmer og tekniske feil
- Aktivere varsling (sirener, lys, meldinger)
- Overfoere alarm til alarmstasjon
- Logge alle hendelser med tidspunkt
- Styre til- og frakobling av soner

**Typer alarmsentraler:**

**Konvensjonelle sentraler**
- Detektorer koblet med kabel i soner
- Sentralen identifiserer hvilken sone som utloses
- Enklere og rimeligere
- Egnet for mindre anlegg

**Adresserbare sentraler**
- Hver detektor har en unik adresse
- Sentralen vet noyaktig hvilken detektor som utloses
- Mer presis lokalisering av hendelsen
- Egnet for storre og mer komplekse anlegg

**Tradelose sentraler**
- Detektorer kommuniserer via radio
- Enklere installasjon uten kabling
- Egnet for verneverdige bygninger og ettermontering
- Batteridrift krever regelemessig vedlikehold

### Alarmoverfoering

Nar alarmsentralen registrerer en hendelse, overforeres alarmen til en **alarmstasjon** (AMS - Alarm Mottaker Sentral) via:
- Telefonlinje (PSTN)
- Mobilnett (GSM/4G/5G)
- Internett (IP)
- Dedikerte sikkerhetslinjer

De fleste profesjonelle systemer bruker to uavhengige overforingsveier for a sikre at alarmen nar fram selv om den ene veien svikter.`,
    },
    {
      id: 'sik-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Alarmsystem for en butikk',
      problem: 'En kleskjede skal installere alarmsystem i en ny butikk. Hvilke detektorer og losninger bor de velge?',
      solution: `**Detektorer:**
- Magnetkontakter pa inngangsdorer og bakdor
- Glassbruddetektorer ved vindusflatene i front
- PIR-detektorer som dekker butikklokalet og lagerrommet
- Vibrasjonsdetektor pa vegg mot nabolokale

**Alarmsentral:**
- Adresserbar sentral med sonestyring
- Butikkomrade og lager som separate soner
- Mulighet for delvis tilkobling (lager sikret mens butikken er apen)

**Varsling:**
- Innvendig sirene for a skremme inntrenger
- Blinkende utvendig lampe for a identifisere bygningen
- Alarmoverfoering til AMS via bade IP og mobilnett
- SMS-varsling til butikksjef og regionsjef

**Drift:**
- Tilkobling med kode eller adgangskort ved stengetid
- Frakobling ved apningstid med personlig kode
- Automatisk logging av alle til- og frakoblinger
- Varsel ved forsok pa a frakoble uten riktig kode

Systemet gir bade innbruddsdeteksjon og dokumentasjon av hvem som apner og stenger butikken.`,
    },
    {
      id: 'sik-3-3-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

Elektronisk sikring utgjor det teknologiske laget i et sikkerhetsopplegg. Detektorer som PIR, magnetkontakter og glassbruddetektorer oppdager uonsket aktivitet, alarmsentralen behandler signalene, og varslingsenheter sorger for at riktige personer far beskjed. Profesjonelle systemer bruker redundante overforingsveier for a sikre at alarmer nar fram.

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| PIR-detektor | Registrerer varmestaling fra kropper i bevegelse |
| Magnetkontakt | Registrerer apning av dorer og vinduer |
| Alarmsentral | Hjernen i systemet som behandler detektorsignaler |
| AMS | Alarmstasjon som mottar og handterer alarmer |`,
    },
    {
      id: 'sik-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        task: 'Hva registrerer en PIR-detektor?',
        options: [
          { id: 'a', text: 'Lyden av knust glass', isCorrect: false },
          { id: 'b', text: 'Varmestaling fra kropper i bevegelse', isCorrect: true },
          { id: 'c', text: 'Vibrasjoner i vegger', isCorrect: false },
          { id: 'd', text: 'Magnetiske endringer i dorer', isCorrect: false },
        ],
        solution: 'En PIR-detektor (Passiv infraroed) registrerer varmestaling fra kropper i bevegelse. Den er den mest brukte innbruddsdetektoren og dekker et bestemt omrade kalt deteksjonsfeltet.',
      },
    },
    {
      id: 'sik-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom en konvensjonell og en adresserbar alarmsentral?',
        options: [
          { id: 'a', text: 'Konvensjonell sentral er tradelos, adresserbar er kablet', isCorrect: false },
          { id: 'b', text: 'Konvensjonell sentral identifiserer sone, adresserbar identifiserer eksakt detektor', isCorrect: true },
          { id: 'c', text: 'Konvensjonell sentral er dyrere og mer avansert', isCorrect: false },
          { id: 'd', text: 'Det er ingen vesentlig forskjell mellom dem', isCorrect: false },
        ],
        solution: 'Hovedforskjellen er presisjonen i lokalisering. En konvensjonell sentral identifiserer hvilken sone alarmen kommer fra, mens en adresserbar sentral vet noyaktig hvilken detektor som har utlost. Dette gjor feilsoking og respons mye mer effektiv.',
      },
    },
    {
      id: 'sik-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        task: 'Forklar hva en falsk alarm er og beskriv minst tre mulige arsaker til falske alarmer.',
        hints: ['Tenk pa bade tekniske og menneskelige faktorer'],
        solution: 'En falsk alarm er en alarm som utloses uten at det foreligger en reell trussel. Mulige arsaker inkluderer: 1) Dyr som utloser PIR-detektorer (katter, mus, insekter i detektoren). 2) Vaerforhold som sterk vind, trekk eller temperaturendringer. 3) Feilbetjening der ansatte glemmer a frakoble alarmen for de gar inn i lokalet. 4) Tekniske feil som lav batterispenning, kabelfeil eller defekte detektorer. Falske alarmer er et stort problem fordi de undergraver tilliten til systemet og kan fore til at reelle alarmer ikke prioriteres.',
      },
    },
    {
      id: 'sik-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        task: 'En bedrift har et alarmsystem med kun en overforingsvei til alarmstasjonen (telefonlinje). Hvorfor er dette en sikkerhetsrisiko, og hva bor bedriften gjore?',
        solution: 'Med bare en overforingsvei er bedriften sarbar dersom denne veien svikter - for eksempel ved at telefonlinjen kuttes (bevisst sabotasje eller vaerforhold) eller ved teknisk feil hos teleoperatoren. Bedriften bor installere minst to uavhengige overforingsveier, for eksempel telefonlinje og mobilnett (GSM/4G), eller IP og mobilnett. Da vil alarmen na fram selv om den ene veien svikter. Profesjonelle sikkerhetsinstallasjoner krever normalt redundante overforingsveier for a oppfylle forsikringskrav og bransjestandarder.',
      },
    },
    {
      id: 'sik-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        task: 'Du skal designe et enkelt alarmsystem for et lite kontorlokale med en inngangsdor, to vinduer og et lagerrom. Beskriv hvilke detektorer du ville valgt og hvorfor.',
        solution: 'For inngangsdoren: magnetkontakt for a registrere nar den apnes, samt kodelas for tilkobling og frakobling av alarmen. For de to vinduene: magnetkontakter for a registrere apning, og glassbruddetektorer for a fange opp forsok pa a knuse glasset. For kontoromradet: en PIR-detektor plassert slik at den dekker bade inngangsdoren og vindusomradet. For lagerrommet: en PIR-detektor og magnetkontakt pa doren. I tillegg en alarmsentral med minst to overforingsveier til alarmstasjon, innvendig sirene og utvendig varsellys. Lagerrommet bor vaere en egen sone slik at det kan vaere tilkoblet mens kontoret er i bruk.',
      },
    },
    {
      id: 'sik-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        task: 'Forklar forskjellen mellom PIR-detektorer, magnetkontakter og glassbruddetektorer. I hvilke situasjoner vil du bruke hver av dem?',
        solution: 'PIR-detektorer registrerer varmestaling fra kropper i bevegelse og brukes for a overvaake rom og omrader. De gir alarm nar noen befinner seg innenfor deteksjonsfeltet. Magnetkontakter plasseres pa dorer og vinduer og registrerer nar de apnes. De er enkle og palitelige, men fanger ikke opp knusing av glass. Glassbruddetektorer registrerer lyden eller vibrasjonen av knust glass og plasseres naer vinduer. De fanger opp forsok pa innbrudd gjennom vinduet uten at det apnes. I praksis kombineres alle tre: magnetkontakter og glassbruddetektorer pa vinduer og dorer som forsteskanse, og PIR-detektorer inne i lokalet som andreskanse.',
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// Kapittel 3.4: Kameraovervaaking (CCTV)
// ----------------------------------------------------------------------------
export const CHAPTER_SIKKERHETSFAG_3_4: TextbookChapter = {
  id: 'sikkerhetsfag-3-4',
  courseId: 'sikkerhetsfag',
  chapterNumber: '3.4',
  title: 'Kameraovervaaking (CCTV)',
  description: 'I dette kapittelet laerer du om kameraovervaaking, ulike kameratyper, plassering og bruksomrader. Du far ogsa innsikt i personvernregler og GDPR-krav knyttet til kameraovervaaking.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-3-4-intro',
      type: 'text',
      content: `## Kameraovervaaking

Kameraovervaaking, ofte kalt CCTV (Closed Circuit Television), er et av de mest utbredte sikringstiltakene i dag. Kameraer finnes overalt - i butikker, pa arbeidsplasser, i trafikken og i offentlige rom. Kameraovervaaking kan tjene flere formal: forebygging, oppdagelse, dokumentasjon og etterforskning.

Men kameraovervaaking griper ogsa inn i enkeltpersoners personvern. Derfor er det strenge regler for nar og hvordan kameraovervaaking kan brukes. I Norge reguleres dette av personopplysningsloven og personvernforordningen (GDPR).

I dette kapittelet skal du laere om:
- Formal med kameraovervaaking
- Ulike kameratyper og deres egenskaper
- Plassering og dekning
- Personvernregler og GDPR-krav
- Lagring og tilgang til opptak`,
    },
    {
      id: 'sik-3-4-def-cctv',
      type: 'definition',
      title: 'CCTV',
      content: `**CCTV (Closed Circuit Television)** er et lukket kamerasystem der videosignalet overfoeres til et begrenset antall skjermer og opptaksenheter. I motsetning til kringkasting (apen sending) er CCTV kun tilgjengelig for autoriserte brukere. Moderne systemer bruker IP-basert teknologi og kalles ofte videoovervaaking eller IP-CCTV.`,
    },
    {
      id: 'sik-3-4-text-formal',
      type: 'text',
      content: `### Formal med kameraovervaaking

Kameraovervaaking kan ha flere formal, og det er viktig a ha et klart definert formal for man installerer kameraer:

**Forebygging (preventiv effekt)**
- Synlige kameraer avskrekker potensielle lovbrytere
- Bevissthet om overvaaking reduserer uonsket atferd
- Kombinert med skilting forsterkes den forebyggende effekten

**Oppdagelse (deteksjon)**
- Sanntidsovervaaking av omrader og hendelser
- Operatorer kan reagere umiddelbart pa mistenkelig aktivitet
- Videoanalyse kan automatisk varsle om uvanlige situasjoner

**Dokumentasjon (bevis)**
- Opptak gir bevis ved kriminelle handlinger
- Kan brukes i etterforskning og rettssaker
- Dokumenterer hendelsesforlop og tidspunkter

**Driftsstotte**
- Trafikkstyring og koadministrasjon
- Overvaaking av produksjonsprosesser
- Fjernkontroll av anlegg og omrader`,
    },
    {
      id: 'sik-3-4-text-kameratyper',
      type: 'text',
      content: `### Kameratyper

Det finnes mange ulike kameratyper, og valget avhenger av formal, omgivelser og budsjett:

**Faste kameraer (box-kameraer)**
- Fast montert med bestemt synsfelt
- Godt egnet for overvaaking av definerte omrader
- Synlige og har preventiv effekt
- Rimelige og enkle a installere

**Domekameraer**
- Montert i en kuppel (dome)
- Vanskelig for uvedkommende a se hvilken retning kameraet peker
- Vandalresistente modeller for utsatte steder
- Populaere i butikker og offentlige bygninger

**PTZ-kameraer (Pan-Tilt-Zoom)**
- Kan dreies horisontalt (pan), vertikalt (tilt) og zoome
- Operatorstyrt eller automatisk bevegelse
- Dekker store omrader med ett kamera
- Avansert, men kan bare fokusere pa ett sted om gangen

**Termiske kameraer**
- Registrerer varmestaling i stedet for synlig lys
- Fungerer i morke og darlige vaerforhold
- Oppdager personer og kjoretoy pa lang avstand
- Brukes i perimetersikring og kritisk infrastruktur

**Multisensorkameraer**
- Flere kameraer i ett hus
- Gir 180 eller 360 graders dekning
- Reduserer antall kameraer som trengs
- Egnet for store apne omrader

**IP-kameraer vs. analoge kameraer**
Moderne systemer er IP-baserte der hvert kamera har en nettverksadresse. Fordeler med IP-kameraer:
- Hoyere opplosning
- Fleksibel plassering (kun nettverkskabel)
- Enklere a integrere med andre systemer
- Videoanalyse kan kjores i selve kameraet`,
    },
    {
      id: 'sik-3-4-def-gdpr',
      type: 'definition',
      title: 'GDPR og kameraovervaaking',
      content: `**GDPR (General Data Protection Regulation)** er EUs personvernforordning som ogsa gjelder i Norge gjennom personopplysningsloven. For kameraovervaaking krever GDPR blant annet at det foreligger et behandlingsgrunnlag (for eksempel berettiget interesse), at det er gjennomfort en interesseavveining, at det er satt opp tydelig skilting, og at opptak ikke lagres lenger enn nodvendig.`,
    },
    {
      id: 'sik-3-4-text-personvern',
      type: 'text',
      content: `### Personvern og regelverk

Kameraovervaaking innebarer behandling av personopplysninger og er derfor regulert av strenge regler:

**Krav til kameraovervaaking:**

**1. Behandlingsgrunnlag**
- Det ma finnes en lovlig grunn til overvakingen
- Berettiget interesse er det vanligste grunnlaget
- Formalet ma vaere saklig og nodvendig

**2. Interesseavveining**
- Sikkerhetsbehovet ma veies mot personvernet
- Overvaaking av ansatte krever saklig grunn
- Overvaaking av offentlig omrade krever spesiell begrunnelse

**3. Informasjonsplikt**
- Tydelig skilting om at overvaaking foregar
- Informasjon om hvem som er ansvarlig
- Kontaktinformasjon for henvendelser
- Formal med overvakingen

**4. Lagringstid**
- Opptak skal ikke lagres lenger enn nodvendig
- Normal lagringstid er opptil 7 dager
- Lenger lagring krever saerskilt begrunnelse
- Opptak knyttet til hendelser kan lagres lenger

**5. Tilgangskontroll**
- Begrenset antall personer med tilgang til opptak
- Logging av hvem som ser pa opptak
- Sikker lagring av opptakene
- Rutiner for utlevering av opptak til politi

**Forbud og begrensninger:**
- Forbudt a overvaake toaletter og garderober
- Forbudt a overvaake ansatte uten saklig grunn
- Lydopptak krever samtykke fra de som overvakes
- Skjult overvaaking er kun tillatt i saerlige tilfeller med politiets godkjenning`,
    },
    {
      id: 'sik-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Kameraplan for en dagligvarebutikk',
      problem: 'En dagligvarebutikk onsker a installere kameraovervaaking for a forebygge butikktyveri. Hva ma de tenke pa?',
      solution: `**Formalsbestemmelse:**
- Forebygge og dokumentere butikktyveri
- Beskytte ansatte mot trusler og ran

**Kameraplassering:**
- Faste kameraer over kassene (dokumentasjon av transaksjoner)
- Domekameraer i butikklokalet (overvaaking av varehyllene)
- Kamera ved inngangen (identifisering av besoekende)
- Kamera ved varemottak (dokumentasjon av leveranser)

**Personvernkrav:**
- Skilting ved inngangen med informasjon om overvaaking
- Lagringstid satt til 7 dager
- Kun butikksjef og sikkerhetsleder har tilgang til opptak
- Kameraene ma ikke dekke personalrom eller toaletter

**Teknisk losning:**
- IP-basert system med sentral opptaksenhet (NVR)
- Opplosning god nok til a identifisere personer
- Nattmodus eller IR-belysning for overvaaking etter stengetid

Butikken oppfyller lovkravene ved a ha et klart formal, tydelig skilting, begrenset lagringstid og tilgangskontroll til opptakene.`,
    },
    {
      id: 'sik-3-4-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

Kameraovervaaking er et kraftig sikringsverktoy som kan forebygge, oppdage og dokumentere sikkerhetshendelser. Med moderne IP-teknologi og videoanalyse blir systemene stadig mer avanserte. Men kameraovervaaking griper inn i personvernet, og det er avgjorende a folge GDPR og norske personvernregler for plassering, skilting, lagringstid og tilgang.

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| CCTV | Lukket kamerasystem for sikkerhetsformal |
| PTZ-kamera | Kamera som kan dreies, tiltes og zoome |
| GDPR | Personvernforordningen som regulerer overvaaking |
| NVR | Network Video Recorder for lagring av IP-opptak |`,
    },
    {
      id: 'sik-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        task: 'Hva star CCTV for?',
        options: [
          { id: 'a', text: 'Central Camera and Tracking Video', isCorrect: false },
          { id: 'b', text: 'Closed Circuit Television', isCorrect: true },
          { id: 'c', text: 'Certified Camera Television Vision', isCorrect: false },
          { id: 'd', text: 'Controlled Camera Technical Verification', isCorrect: false },
        ],
        solution: 'CCTV star for Closed Circuit Television, som betyr et lukket TV-krets der videosignalet kun er tilgjengelig for autoriserte brukere, i motsetning til apen kringkasting.',
      },
    },
    {
      id: 'sik-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        task: 'Hva er normal maksimal lagringstid for kameraopptak i henhold til norsk regelverk?',
        options: [
          { id: 'a', text: '24 timer', isCorrect: false },
          { id: 'b', text: '7 dager', isCorrect: true },
          { id: 'c', text: '30 dager', isCorrect: false },
          { id: 'd', text: 'Ubegrenset sa lenge formalet er sikkerhetsovervaaking', isCorrect: false },
        ],
        solution: 'Normal maksimal lagringstid for kameraopptak er 7 dager. Lenger lagring krever saerskilt begrunnelse, for eksempel at det har inntruffet en hendelse som skal etterforskes.',
      },
    },
    {
      id: 'sik-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom faste kameraer, domekameraer og PTZ-kameraer. Nar vil du bruke hver type?',
        hints: ['Tenk pa fordeler og begrensninger ved hver type'],
        solution: 'Faste kameraer har et bestemt synsfelt og er godt egnet for overvaaking av definerte omrader som innganger og kasser. De er rimelige og enkle a installere. Domekameraer er montert i en kuppel slik at det er vanskelig a se hvilken retning de peker, noe som gir usikkerhet hos potensielle lovbrytere. De er vandalresistente og populaere i butikker. PTZ-kameraer kan dreies, vippes og zoome, og dekker store omrader. De brukes nar en operator aktivt overvaaker omradet, for eksempel i kontrollrom pa store anlegg. Ulempen med PTZ er at de kun kan fokusere pa ett sted om gangen.',
      },
    },
    {
      id: 'sik-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        task: 'En arbeidsgiver onsker a installere kameraovervaaking pa kontoret for a folge med pa om de ansatte jobber effektivt. Er dette lovlig? Begrunn svaret ditt med henvisning til GDPR-krav.',
        solution: 'Nei, dette er i utgangspunktet ikke lovlig. GDPR og norsk personvernlovgivning krever at overvaaking ma ha et saklig formal og at det foretas en interesseavveining der den ansattes personvern veies mot arbeidsgiverens behov. A overvaake ansattes arbeidseffektivitet er generelt ansett som et uforholdsmessig inngrep i personvernet. Datatilsynet har gjentatte ganger slatt fast at arbeidsgiverens onske om a kontrollere arbeidsinnsats normalt ikke er tilstrekkelig grunn for kameraovervaaking. Kameraovervaaking av ansatte kan kun vaere lovlig nar det foreligger en klar sikkerhetsrisiko, som for eksempel i en bank eller ved arbeid med farlige stoffer.',
      },
    },
    {
      id: 'sik-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        task: 'Beskriv de viktigste personvernkravene som ma oppfylles for at kameraovervaaking skal vaere lovlig pa en arbeidsplass.',
        solution: 'For at kameraovervaaking skal vaere lovlig pa en arbeidsplass ma folgende vaere pa plass: 1) Behandlingsgrunnlag - det ma finnes en lovlig grunn, som oftest berettiget interesse knyttet til sikkerhet. 2) Interesseavveining - sikkerhetsbehovet ma veies mot de ansattes personvern. 3) Informasjonsplikt - tydelig skilting om overvaaking, og de ansatte ma vaere informert om formalet. 4) Begrenset lagringstid - normalt maks 7 dager. 5) Tilgangskontroll - begrenset antall personer skal ha tilgang til opptakene, og det skal logges hvem som ser pa dem. 6) Omrader som toaletter og garderober skal ikke overvakes. 7) De ansattes tillitsvalgte bor vaere involvert i beslutningen.',
      },
    },
    {
      id: 'sik-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        task: 'Hva er fordelene med IP-baserte kamerasystemer sammenlignet med eldre analoge systemer? Nevn minst fire fordeler.',
        solution: 'Fordeler med IP-baserte kamerasystemer: 1) Hoyere opplosning som gir bedre billedkvalitet og mulighet for a identifisere personer og detaljer. 2) Fleksibel plassering fordi kameraene kun trenger en nettverkskabel (som ogsa kan gi strom via PoE). 3) Enklere integrasjon med andre systemer som adgangskontroll og alarmsystemer. 4) Mulighet for videoanalyse i selve kameraet, som automatisk gjenkjenning av bevegelse, ansikter eller objekter. 5) Skalerbarhet - enkelt a legge til flere kameraer uten a bytte infrastruktur. 6) Fjerntilgang - opptak og sanntidsbilde kan sees fra hvor som helst via nettverket.',
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// Kapittel 3.5: Sikkerhetskultur
// ----------------------------------------------------------------------------
export const CHAPTER_SIKKERHETSFAG_3_5: TextbookChapter = {
  id: 'sikkerhetsfag-3-5',
  courseId: 'sikkerhetsfag',
  chapterNumber: '3.5',
  title: 'Sikkerhetskultur',
  description: 'I dette kapittelet laerer du om sikkerhetskultur pa arbeidsplassen, inkludert holdninger, opplaering, rapportering og bevisstsgjoring. Du far forstaelse for hvorfor menneskene i en organisasjon er den viktigste faktoren i sikkerhetsarbeidet.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-3-5-intro',
      type: 'text',
      content: `## Mennesket som sikkerhetsfaktor

De beste tekniske sikringssystemene i verden har liten verdi dersom menneskene som bruker dem ikke har riktige holdninger og kunnskap om sikkerhet. Sikkerhetskultur handler om hvordan en organisasjon tenker, snakker og handler nar det gjelder sikkerhet i det daglige.

En sterk sikkerhetskultur kjennetegnes av at sikkerhet er noe alle tar ansvar for, ikke bare sikkerhetspersonalet. Det handler om a skape et miljo der ansatte forstaar hvorfor sikkerhetsrutiner finnes, folger dem frivillig og bidrar aktivt til a forbedre dem.

I dette kapittelet skal du laere om:
- Hva sikkerhetskultur er og hvorfor den er viktig
- Holdninger og atferd knyttet til sikkerhet
- Sikkerhetsopplaering og kompetansebygging
- Rapportering av sikkerhetshendelser
- Bevisstsgjoring og motivasjon`,
    },
    {
      id: 'sik-3-5-def-sikkerhetskultur',
      type: 'definition',
      title: 'Sikkerhetskultur',
      content: `**Sikkerhetskultur** er de felles verdiene, holdningene, normene og atferdene i en organisasjon som pavirker hvordan sikkerhetssporsmal behandles og prioriteres. En god sikkerhetskultur innebarer at alle medarbeidere forstaar, aksepterer og aktivt bidrar til sikkerhetsarbeidet som en naturlig del av hverdagen.`,
    },
    {
      id: 'sik-3-5-text-holdninger',
      type: 'text',
      content: `### Holdninger og atferd

Holdningene til sikkerhet i en organisasjon er avgjorende for hvor effektivt sikkerhetsarbeidet fungerer i praksis. Det er stor forskjell pa organisasjoner der sikkerhet oppfattes som en byrde og de der det er en selvfolge.

**Kjennetegn pa daarlsig sikkerhetskultur:**
- Sikkerhetsrutiner sees som unodvendig byraakrati
- Ansatte tar snarveier fordi det er enklere
- Dorer holdes apne for a slippe a bruke adgangskort
- Passord deles med kolleger eller skrives pa gule lapper
- Hendelser rapporteres ikke av frykt for konsekvenser
- Ledelsen prioriterer effektivitet over sikkerhet

**Kjennetegn pa god sikkerhetskultur:**
- Sikkerhet er en naturlig del av hverdagen
- Ansatte forstaar hvorfor rutinene finnes
- Avvik rapporteres apent og uten frykt for straff
- Ledelsen gar foran som gode eksempler
- Sikkerhetsforbedringsforslag onskommer velkommen
- Det er akseptert a si ifra nar noe er galt

### Holdningspyramiden

Holdninger til sikkerhet kan beskrives i en pyramid med fire niva:

**Niva 1: Reaktiv** - Vi reagerer forst nar noe har skjedd
**Niva 2: Avhengig** - Vi folger regler fordi vi ma
**Niva 3: Uavhengig** - Vi tar personlig ansvar for sikkerhet
**Niva 4: Gjensidig avhengig** - Vi passer pa hverandre og jobber sammen

Malet er a bevege organisasjonen oppover i pyramiden fra reaktiv til gjensidig avhengig sikkerhetskultur.`,
    },
    {
      id: 'sik-3-5-def-rapportering',
      type: 'definition',
      title: 'Avviksrapportering',
      content: `**Avviksrapportering** er en systematisk prosess for a registrere og folge opp hendelser, nestenulykker og brudd pa sikkerhetsrutiner. Hensikten er a laere av det som skjer for a forebygge fremtidige hendelser. En god rapporteringskultur forutsetter at det er trygt a rapportere uten frykt for negative konsekvenser.`,
    },
    {
      id: 'sik-3-5-text-opplaering',
      type: 'text',
      content: `### Sikkerhetsopplaering

Opplaering er en av de viktigste investeringene en organisasjon kan gjore i sikkerhetsarbeidet. Ansatte som forstaar truslene og vet hva de skal gjore, er langt bedre rustet til a forebygge og handtere hendelser.

**Grunnleggende sikkerhetsopplaering bor dekke:**

**For alle ansatte:**
- Organisasjonens sikkerhetspolitikk og verdier
- Adgangskontroll og bruk av adgangskort
- Besoksrutiner og handtering av ukjente personer
- Rapportering av mistenkelig aktivitet
- Brann- og evakueringsrutiner
- Informasjonssikkerhet og passordhygiene
- Sosial manipulasjon (social engineering)

**For sikkerhetspersonell:**
- Risikovurdering og sarbarhetsanalyse
- Drift av tekniske sikringssystemer
- Hendelseshandtering og rapportskriving
- Konflikthendtering og kommunikasjon
- Forstehjelp og akuttberedskap
- Lovverk og regelverk

**Opplaeringsformer:**
- Klasseromsundervisning og kurs
- E-laering og nettkurs
- Praktiske ovelser og simuleringer
- Tabletop-ovelser (skrivebordsovelser)
- Mentoring og folge-vakter
- Besok og erfaringsutveksling med andre virksomheter

### Ovelser

Regelmessige ovelser er avgjorende for at de ansatte skal vaere forberedt nar en hendelse oppstar:

**Brann- og evakueringsovelser** - Obligatoriske og bor gjennomfores minst arlig
**Beredskapsovelser** - Tester respons pa ulike scenarioer
**Tabletop-ovelser** - Diskuterer handtering av tenkte situasjoner
**Fullskalaovelser** - Realistisk simulering med alle involverte`,
    },
    {
      id: 'sik-3-5-text-rapportering',
      type: 'text',
      content: `### Rapportering og laering

En av grunnpilarene i god sikkerhetskultur er systematisk rapportering og laering av hendelser. Uten rapportering gar verdifull informasjon tapt, og de samme feilene gjentar seg.

**Hva bor rapporteres:**
- Sikkerhetshendelser (innbrudd, tyveri, haerverk)
- Nestenulykker (situasjoner som kunne fatt alvorlige konsekvenser)
- Brudd pa sikkerhetsrutiner
- Tekniske feil og mangler
- Mistenkelige observasjoner
- Forbedringsforslag

**Rapporteringsprosessen:**

1. **Oppdagelse** - Den ansatte oppdager noe avvikende
2. **Rapportering** - Hendelsen registreres i rapporteringssystemet
3. **Vurdering** - Sikkerhetsleder vurderer alvorlighetsgrad
4. **Tiltak** - Nodvendige tiltak iverksettes
5. **Oppfolging** - Kontroll av at tiltak er gjennomfort
6. **Laering** - Erfaringene deles med organisasjonen

**Barrierer mot rapportering:**
- Frykt for a bli sett pa som en sladrehank
- Usikkerhet om hva som er verdt a rapportere
- Kompliserte rapporteringsskjemaer
- Manglende tilbakemelding pa tidligere rapporter
- Frykt for konsekvenser ved egne feil

For a overvinne disse barrierene er det viktig at ledelsen tydelig kommuniserer at rapportering er onskket, at det er trygt a rapportere, og at alle rapporter folges opp og gis tilbakemelding.`,
    },
    {
      id: 'sik-3-5-text-bevisstgjoring',
      type: 'text',
      content: `### Bevisstsgjoring og motivasjon

Sikkerhetsbevissthet ma holdes vedlike gjennom kontinuerlig arbeid. Det er ikke nok med en arlig sikkerhetsdag - sikkerhet ma vaere pa dagsordenen hele tiden.

**Virkemidler for bevisstsgjoring:**

**Kommunikasjon:**
- Sikkerhetsinformasjon pa intranett og interne kanaler
- Regelemessige sikkerhetsbrev eller nyhetsbrev
- Oppslag og plakater med sikkerhetsbudskap
- Temamoter og fagfora om sikkerhet

**Ledelsens rolle:**
- Ledelsen ma ga foran som gode eksempler
- Sikkerhet ma vaere tema i ledermotene
- Ressurser og budsjett til sikkerhetsarbeid
- Anerkjennelse av ansatte som bidrar til sikkerhet

**Kampanjer og tiltak:**
- Tematiske sikkerhetskampanjer (for eksempel passorduke)
- Phishing-tester for a teste bevisstheten
- Sikkerhetskonkurranser og quiz
- Erfaringsdeling etter hendelser

**Maling og oppfolging:**
- Sikkerhetsrevisjoner og inspeksjoner
- Maling av sikkerhetskultur gjennom sporreundersokelser
- Statistikk over hendelser og nestenulykker
- Benchmarking mot andre virksomheter`,
    },
    {
      id: 'sik-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Forbedring av sikkerhetskultur',
      problem: 'En bedrift oppdager at ansatte holder dorer apne for fremmede, deler passord og sjelden rapporterer avvik. Hvordan kan de forbedre sikkerhetskulturen?',
      solution: `**Analyse:**
Problemet tyder pa en sikkerhetskultur pa niva 1-2 (reaktiv/avhengig) der ansatte ikke forstaar hvorfor rutinene er viktige.

**Tiltak for forbedring:**

**1. Ledelsesforankring:**
- Daglig leder kommuniserer tydelig at sikkerhet er en prioritet
- Lederne gar selv foran som gode eksempler
- Det settes av tid og ressurser til sikkerhetsarbeid

**2. Opplaering og bevisstgjoring:**
- Gjennomfore opplaering for alle ansatte om sosial manipulasjon
- Vise konkrete eksempler pa konsekvenser av dorholding og passorddeling
- Forklare HVORFOR rutinene finnes, ikke bare HVA de er

**3. Forbedre rapportering:**
- Gjore rapporteringsskjemaet enkelt (gjerne en app)
- Gi tilbakemelding pa alle rapporter innen 48 timer
- Framheve og anerkjenne gode rapporter

**4. Kampanjer:**
- Gjennomfore en test der en ukjent person forsker a komme inn
- Dele resultater med de ansatte
- Folge opp med praktiske ovelser pa riktig atferd

**5. Maling:**
- Gjennomfore sikkerhetskulturundersokelse for og etter tiltak
- Male antall rapporterte avvik som indikator pa forbedring
- Sette konkrete mal for forbedring`,
    },
    {
      id: 'sik-3-5-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

Sikkerhetskultur handler om hvordan en organisasjon tenker og handler nar det gjelder sikkerhet. God sikkerhetskultur bygges gjennom riktige holdninger, grundig opplaering, apen rapportering og kontinuerlig bevisstsgjoring. Ledelsens rolle er avgjorende - det er ledelsen som setter tonen for hele organisasjonen. Malet er a bevege seg fra en reaktiv til en gjensidig avhengig sikkerhetskultur der alle tar ansvar.

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Sikkerhetskultur | Felles verdier og holdninger til sikkerhet |
| Avviksrapportering | Systematisk registrering av hendelser og avvik |
| Holdningspyramiden | Fire niva fra reaktiv til gjensidig avhengig |
| Bevisstsgjoring | Kontinuerlig arbeid for a holde sikkerhet pa dagsordenen |`,
    },
    {
      id: 'sik-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        task: 'Hvilket niva i holdningspyramiden beskriver en organisasjon der ansatte aktivt passer pa hverandre og jobber sammen om sikkerhet?',
        options: [
          { id: 'a', text: 'Reaktiv', isCorrect: false },
          { id: 'b', text: 'Avhengig', isCorrect: false },
          { id: 'c', text: 'Uavhengig', isCorrect: false },
          { id: 'd', text: 'Gjensidig avhengig', isCorrect: true },
        ],
        solution: 'Gjensidig avhengig er det oyverste nivaet i holdningspyramiden. Her passer ansatte pa hverandre, jobber sammen om sikkerhet og ser det som et felles ansvar. Dette er malet for enhver organisasjons sikkerhetskultur.',
      },
    },
    {
      id: 'sik-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        task: 'Hva er en vanlig barriere mot at ansatte rapporterer sikkerhetsavvik?',
        options: [
          { id: 'a', text: 'Det er for mange rapporteringssystemer a velge mellom', isCorrect: false },
          { id: 'b', text: 'Frykt for negative konsekvenser ved a rapportere', isCorrect: true },
          { id: 'c', text: 'De ansatte har ikke tilgang til internett', isCorrect: false },
          { id: 'd', text: 'Rapportering er kun for sikkerhetspersonell', isCorrect: false },
        ],
        solution: 'Frykt for negative konsekvenser er en av de vanligste barrierene mot rapportering. Ansatte frykter a bli sett pa som sladrehanker, a fa skyld for feilen selv, eller a skape problemer for kolleger. En god rapporteringskultur forutsetter at det er trygt a rapportere uten frykt for straff.',
      },
    },
    {
      id: 'sik-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        task: 'Beskriv forskjellen mellom en reaktiv og en gjensidig avhengig sikkerhetskultur. Gi eksempler pa typisk atferd pa hvert niva.',
        hints: ['Tenk pa hvordan organisasjonen reagerer pa sikkerhetssporsmal'],
        solution: 'I en reaktiv sikkerhetskultur reagerer organisasjonen forst etter at en hendelse har skjedd. Typisk atferd er at det lages nye regler etter en alvorlig hendelse, men interessen dabber raskt av. Ansatte tenker ikke pa sikkerhet til daglig, og ledelsen fokuserer pa a legge skylden et sted. I en gjensidig avhengig sikkerhetskultur er sikkerhet et felles ansvar der alle passer pa hverandre. Typisk atferd er at ansatte minner hverandre pa a bruke adgangskort, rapporterer avvik frivillig og foreslaar forbedringer. Sikkerhet er en naturlig del av samtaler og beslutninger, og ledelsen anerkjenner og feirer god sikkerhetsatferd.',
      },
    },
    {
      id: 'sik-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        task: 'Du er ansvarlig for sikkerhetsopplaering pa en arbeidsplass med 50 ansatte. Lag en plan for arlig sikkerhetsopplaering som dekker de viktigste temaene.',
        solution: 'Arlig opplaeringsplan: 1) Januar - Obligatorisk sikkerhetsgjennomgang for alle ansatte (2 timer) med organisasjonens sikkerhetspolitikk, adgangskontroll, besoksrutiner og rapportering. 2) Mars - Brannvernopplaering og evakueringsovelse (1,5 timer). 3) Mai - Kurs i informasjonssikkerhet med fokus pa passord, phishing og sosial manipulasjon (1 time), fulgt av en phishing-test. 4) August - Nyansattopplaering for de som har startet i lopet av aret. 5) Oktober - Praktisk ovelse: beredskapsscenario med tabletop-ovelse for ledere og sikkerhetspersonell. 6) November - Oppsummering av arets hendelser og avvik, laering og forbedringspunkter. I tillegg: kvartalsvis sikkerhetsbrev per e-post og anlige oppslag pa intranett.',
      },
    },
    {
      id: 'sik-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        task: 'Hvorfor er ledelsens rolle sa viktig for sikkerhetskulturen i en organisasjon? Gi tre konkrete eksempler pa hvordan ledelsen kan pavirke sikkerhetskulturen positivt.',
        solution: 'Ledelsen setter tonen for hele organisasjonen. Dersom ledelsen ikke prioriterer sikkerhet, vil heller ikke de ansatte gjore det. Tre konkrete eksempler: 1) Ledelsen bruker alltid adgangskort og folger sikkerhetsrutinene selv - nar ansatte ser at sjefen tar snarveier, oppfatter de at rutinene ikke er viktige. 2) Ledelsen setter sikkerhet som fast punkt pa ledermotene og tildeler tilstrekkelig budsjett til sikkerhetsarbeid - dette viser at sikkerhet er en reell prioritet. 3) Ledelsen anerkjenner og roser ansatte som rapporterer avvik eller foreslaar forbedringer - dette skaper en kultur der det er positivt og onskket a engasjere seg i sikkerhet.',
      },
    },
    {
      id: 'sik-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        task: 'Forklar de seks stegene i rapporteringsprosessen (fra oppdagelse til laering) og beskriv hvorfor hvert steg er viktig.',
        solution: '1) Oppdagelse - Den ansatte observerer noe avvikende. Viktig fordi uten oppdagelse blir ingen hendelser fanget opp. 2) Rapportering - Hendelsen registreres i systemet. Viktig fordi det sikrer at informasjonen dokumenteres og ikke gar tapt. 3) Vurdering - Sikkerhetsleder vurderer alvorlighetsgraden. Viktig for a prioritere riktig og iverksette passende tiltak. 4) Tiltak - Nodvendige tiltak gjennomfores for a handtere hendelsen og forhindre gjentakelse. Viktig for a begrense skade og forbedre sikkerheten. 5) Oppfolging - Kontrollere at tiltakene er gjennomfort og fungerer. Viktig for a sikre at beslutninger faktisk blir til handling. 6) Laering - Erfaringene deles med organisasjonen. Viktig for a forebygge at samme type hendelse skjer igjen og for a styrke sikkerhetskulturen gjennom apen kunnskapsdeling.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SIKKERHETSFAG_DEL3_CHAPTERS = [
  CHAPTER_SIKKERHETSFAG_3_1,
  CHAPTER_SIKKERHETSFAG_3_2,
  CHAPTER_SIKKERHETSFAG_3_3,
  CHAPTER_SIKKERHETSFAG_3_4,
  CHAPTER_SIKKERHETSFAG_3_5,
];
