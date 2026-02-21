/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Del 1: Cellebiologi
 *
 * Utvider Kapittel 1 (Cellebiologi og cellens oppbygging) til 5 delkapitler.
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Celleteori og celler som livets grunnenhet
// ============================================================================

export const CHAPTER_BIOLOGI_1_1_1: TextbookChapter = {
  id: 'biologi-1-1-1',
  courseId: 'biologi-1',
  chapterNumber: '1.1',
  title: 'Celleteori og celler som livets grunnenhet',
  description: 'Celleteoriens historiske utvikling, cellen som minste funksjonelle enhet, og størrelsesorden og observasjon av celler.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive cellens oppbygging og organellenes funksjoner',
    'forklare forskjellen mellom prokaryote og eukaryote celler',
    'bruke mikroskop til å studere celler',
  ],
  content: [
    {
      id: 'bio1-1-1-intro',
      type: 'text',
      content: `# Celleteori og celler som livets grunnenhet

I dette kapittelet skal du lære om:

- Hvordan celleteori utviklet seg historisk
- Hva som gjor cellen til livets minste funksjonelle enhet
- Hvordan vi observerer celler og deres størrelsesorden

Cellen er grunnlaget for alt liv. Fra de minste bakteriene til de største blåhvalene - alle levende organismer er bygd opp av celler. Dette enkle, men revolusjonerende prinsippet danner grunnlaget for moderne biologi.`,
    },
    {
      id: 'bio1-1-1-historie',
      type: 'text',
      content: `## Celleteoriens historiske utvikling

### De første observasjonene

Cellens historie begynner med oppfinnelsen av mikroskopet på 1600-tallet.

**Robert Hooke (1665)** var den første som brukte ordet "celle" (latin: *cellula* = lite rom). Han observerte dødt korkvev og så de tomme cellehulrommene som minnet ham om klosterceller.

**Anton van Leeuwenhoek (1670-tallet)** bygde bedre mikroskoper og var den første som observerte levende celler - bakterier og encellede organismer som han kalte "dyreanimalcules".

### Celleteoriens etablering

På 1800-tallet ble celleteori formelt etablert:

**Matthias Schleiden (1838)** - botaniker som fastslo at alle planter er bygd opp av celler.

**Theodor Schwann (1839)** - zoolog som utvidet dette til dyr og formulerte celleteori.

**Rudolf Virchow (1855)** - lege som la til det tredje prinsippet: "Omnis cellula e cellula" - alle celler kommer fra eksisterende celler.`,
    },
    {
      id: 'bio1-1-1-def-celleteori',
      type: 'definition',
      title: 'Celleteori',
      content: 'Celleteori er et av biologiens grunnleggende prinsipper og fastslår at: 1) Alle levende organismer består av en eller flere celler. 2) Cellen er livets minste funksjonelle enhet. 3) Alle celler oppstår fra eksisterende celler gjennom celledeling. Denne teorien ble utviklet på 1800-tallet og er fortsatt gyldig i dag.',
    },
    {
      id: 'bio1-1-1-funksjonell',
      type: 'text',
      content: `## Cellen som minste funksjonelle enhet

Hva betyr det egentlig at cellen er livets minste funksjonelle enhet? Det betyr at cellen er den minste strukturen som kan utføre alle livsprosesser:

### Kjennetegn på liv

En celle kan:
- **Ta opp næring** - transportere stoffer over membranen
- **Omsette energi** - bryte ned næring for å få energi (ATP)
- **Vokse** - øke i størrelse ved å bygge nye molekyler
- **Reprodusere** - dele seg for å lage nye celler
- **Reagere på omgivelsene** - respondere på stimuli
- **Holde homeostase** - opprettholde stabilt indre miljø
- **Evolusjon** - endre seg over generasjoner

### Kan noe mindre enn en celle leve?

Molekyler og organeller kan ikke utføre alle disse funksjonene alene. For eksempel:
- Mitokondrier kan produsere ATP, men kan ikke reprodusere seg uten resten av cellen
- DNA inneholder genetisk informasjon, men trenger cellens maskineri for å fungere
- Virus har genetisk materiale, men kan bare formere seg inne i vertsceller

Derfor regnes cellen som grensen for liv.`,
    },
    {
      id: 'bio1-1-1-def-homeostase',
      type: 'definition',
      title: 'Homeostase',
      content: 'Homeostase er cellens (og organismens) evne til å opprettholde et stabilt indre miljø til tross for endringer i omgivelsene. Dette inkluderer regulering av temperatur, pH, ionkonsentrasjoner og vannbalanse. Homeostase er avgjørende for at cellens enzymer og prosesser skal fungere optimalt.',
    },
    {
      id: 'bio1-1-1-storrelse',
      type: 'text',
      content: `## Størrelsesorden og observasjon

### Cellestørrelser

Celler varierer enormt i størrelse:

| Type | Størrelse | Eksempel |
|------|-----------|----------|
| Bakterier | 0,2-10 $\\mu m$ | *E. coli* (ca. 2 $\\mu m$) |
| Dyreceller | 10-30 $\\mu m$ | Hvite blodceller (ca. 15 $\\mu m$) |
| Planteceller | 10-100 $\\mu m$ | Løkceller (ca. 50 $\\mu m$) |
| Eggceller | 100-1000 $\\mu m$ | Menneskets eggcelle (120 $\\mu m$) |
| Nerveceller | Opptil 1 m lang | Motoriske nevroner |

### Enheter

For å beskrive cellestørrelser bruker vi:
- **Mikrometer ($\\mu m$)**: $1 \\mu m = 10^{-6}$ m = 0,000001 m
- **Nanometer (nm)**: $1 nm = 10^{-9}$ m = 0,000000001 m

### Observasjonsmetoder

**Lysmikroskop**
- Forstørrelse: ca. 1000x
- Oppløsning: ca. 200 nm
- Kan se celler og større organeller (kjerne, kloroplaster)
- Bruker synlig lys

**Elektronmikroskop**
- Forstørrelse: opptil 1 000 000x
- Oppløsning: ca. 0,2 nm
- Kan se alle organeller, membraner, ribosomer
- Bruker elektronstråle`,
    },
    {
      id: 'bio1-1-1-def-oppløsning',
      type: 'definition',
      title: 'Oppløsning (resolusjon)',
      content: 'Oppløsning er mikroskopets evne til å skille to punkter som ligger nært hverandre. Et mikroskop med høy oppløsning kan se finere detaljer. Lysmikroskop har en teoretisk oppløsningsgrense på ca. 200 nm (begrenset av lysets bølgelengde), mens elektronmikroskop kan oppnå oppløsning på under 1 nm.',
    },
    {
      id: 'bio1-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av forstørrelse',
      problem: 'Et mikroskop har et okular med 10x forstørrelse og et objektiv med 40x forstørrelse. Hva er den totale forstørrelsen? Hvis en celle måler 50 $\\mu m$ i virkeligheten, hvor stor vil den se ut i mikroskopet?',
      solution: `**Løsning:**

**Total forstørrelse:**
$$\\text{Total forstørrelse} = \\text{okular} \\times \\text{objektiv} = 10 \\times 40 = 400\\text{x}$$

**Tilsynelatende størrelse:**
$$\\text{Tilsynelatende størrelse} = \\text{virkelig størrelse} \\times \\text{forstørrelse}$$
$$= 50 \\mu m \\times 400 = 20\\,000 \\mu m = 20 mm = 2 cm$$

Cellen vil altså se ut som den er 2 cm stor når du ser gjennom mikroskopet.`,
    },
    {
      id: 'bio1-1-1-example-2',
      type: 'example',
      title: 'Eksempel: Størrelsessammenligning',
      problem: 'En bakterie er 2 $\\mu m$ lang og en menneskecelle er 20 $\\mu m$ i diameter. Hvor mange bakterier kan teoretisk få plass på tvers av menneskecellen?',
      solution: `**Løsning:**

$$\\text{Antall bakterier} = \\frac{\\text{diameter menneskecelle}}{\\text{lengde bakterie}} = \\frac{20 \\mu m}{2 \\mu m} = 10$$

Omtrent 10 bakterier kan teoretisk ligge på rekke over diameteren til en menneskecelle. Dette illustrerer den enorme størrelsesforskjellen mellom prokaryote og eukaryote celler.`,
    },
    {
      id: 'bio1-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Celleteoriens historie**: Fra Hooke og Leeuwenhoeks første observasjoner til Schleiden, Schwann og Virchows formulering av de tre prinsippene
- **Celleteoriens tre prinsipper**: Alle organismer består av celler, cellen er livets minste funksjonelle enhet, og alle celler kommer fra eksisterende celler
- **Livets kjennetegn**: Næringsopptak, energiomsetning, vekst, reproduksjon, respons, homeostase og evolusjon
- **Cellestørrelser**: Fra bakterier (mikrometerskala) til spesialiserte celler (nerveceller kan bli over en meter)
- **Mikroskopi**: Lysmikroskop for celler og store organeller, elektronmikroskop for finere strukturer`,
    },
  ],
  exercises: [
    {
      id: 'bio1-1-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem brukte først ordet "celle" om biologiske strukturer?',
      options: [
        { id: 'a', text: 'Robert Hooke', isCorrect: true },
        { id: 'b', text: 'Anton van Leeuwenhoek', isCorrect: false },
        { id: 'c', text: 'Matthias Schleiden', isCorrect: false },
        { id: 'd', text: 'Rudolf Virchow', isCorrect: false },
      ],
      solution: 'Robert Hooke brukte først ordet "celle" i 1665 da han observerte dødt korkvev. De tomme hulrommene minnet ham om munkenes celler (rom) i et kloster.',
    },
    {
      id: 'bio1-1-1-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket av følgende er IKKE et av celleteoriens tre hovedprinsipper?',
      options: [
        { id: 'a', text: 'Alle celler inneholder DNA', isCorrect: true },
        { id: 'b', text: 'Alle levende organismer består av celler', isCorrect: false },
        { id: 'c', text: 'Cellen er livets minste funksjonelle enhet', isCorrect: false },
        { id: 'd', text: 'Alle celler kommer fra eksisterende celler', isCorrect: false },
      ],
      solution: 'De tre hovedprinsippene er: 1) Alle organismer består av celler, 2) Cellen er livets minste funksjonelle enhet, 3) Alle celler kommer fra eksisterende celler. At alle celler inneholder DNA er sant, men er ikke et av de opprinnelige prinsippene.',
    },
    {
      id: 'bio1-1-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor virus ikke regnes som levende organismer i henhold til celleteori.',
      solution: 'Virus regnes ikke som levende fordi de: 1) Ikke er celler - de mangler cellulære strukturer som membran og organeller. 2) Kan ikke reprodusere seg selv - de må bruke vertscellens maskineri. 3) Har ikke egen metabolisme - de kan ikke omsette energi eller ta opp næring på egen hånd. 4) Viser ingen livstegn utenfor en vertscelle. Selv om virus har genetisk materiale (DNA eller RNA), oppfyller de ikke kriteriene for liv definert av celleteori.',
    },
    {
      id: 'bio1-1-1-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er oppløsningsgrensen for et lysmikroskop?',
      options: [
        { id: 'a', text: 'Ca. 200 nm', isCorrect: true },
        { id: 'b', text: 'Ca. 2 nm', isCorrect: false },
        { id: 'c', text: 'Ca. 2 mm', isCorrect: false },
        { id: 'd', text: 'Ca. 0,2 nm', isCorrect: false },
      ],
      solution: 'Lysmikroskopets teoretiske oppløsningsgrense er ca. 200 nm, som er omtrent halvparten av bølgelengden til synlig lys. Dette er grunnen til at vi ikke kan se ribosomer eller membranens dobbeltlag i et lysmikroskop - de er for små.',
    },
    {
      id: 'bio1-1-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En celle måles til å være 30 mm i diameter når du ser gjennom et mikroskop med total forstørrelse 400x. Beregn cellens virkelige diameter.',
      solution: 'Vi bruker formelen: Virkelig størrelse = Tilsynelatende størrelse / Forstørrelse\n\nVirkelig diameter = 30 mm / 400 = 0,075 mm = 75 $\\mu m$\n\nCellen er altså 75 mikrometer i diameter, noe som er typisk for en større plantecelle eller eggcelle.',
    },
    {
      id: 'bio1-1-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva det betyr at cellen er "livets minste funksjonelle enhet". Gi minst tre eksempler på livsprosesser som cellen kan utføre.',
      solution: 'At cellen er livets minste funksjonelle enhet betyr at det er den minste strukturen som kan utføre alle prosesser som kjennetegner liv. Eksempler på livsprosesser:\n\n1) **Næringsopptak**: Cellen kan ta opp stoffer fra omgivelsene gjennom passiv eller aktiv transport over cellemembranen.\n\n2) **Energiomsetning**: Cellen bryter ned næring gjennom celleånding for å produsere ATP som gir energi til alle prosesser.\n\n3) **Reproduksjon**: Cellen kan dele seg for å produsere nye celler gjennom mitose eller meiose.\n\n4) **Respons på stimuli**: Cellen kan oppdage og reagere på endringer i omgivelsene, for eksempel kjemiske signaler.\n\n5) **Homeostase**: Cellen opprettholder stabilt indre miljø ved å regulere ionkonsentrasjoner, pH og vannbalanse.',
    },
  ],
};

// ============================================================================
// Kapittel 1.2: Prokaryote og eukaryote celler
// ============================================================================

export const CHAPTER_BIOLOGI_1_1_2: TextbookChapter = {
  id: 'biologi-1-1-2',
  courseId: 'biologi-1',
  chapterNumber: '1.2',
  title: 'Prokaryote og eukaryote celler',
  description: 'Strukturelle forskjeller mellom prokaryoter og eukaryoter, bakterier og arkeer, samt evolusjonær opprinnelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare forskjellen mellom prokaryote og eukaryote celler',
    'beskrive cellens oppbygging og organellenes funksjoner',
    'gjøre rede for endosymbioseteorien',
  ],
  content: [
    {
      id: 'bio1-1-2-intro',
      type: 'text',
      content: `# Prokaryote og eukaryote celler

I dette kapittelet skal du lære om:

- De strukturelle forskjellene mellom prokaryote og eukaryote celler
- Bakterier og arkeer som de to domenene av prokaryoter
- Hvordan eukaryote celler oppsto gjennom evolusjon

Alle celler på jorda kan deles inn i to hovedkategorier basert på deres indre struktur: prokaryoter (celler uten ekte kjerne) og eukaryoter (celler med ekte kjerne).`,
    },
    {
      id: 'bio1-1-2-def-prokaryot',
      type: 'definition',
      title: 'Prokaryot celle',
      content: 'En prokaryot celle (gresk: *pro* = før, *karyon* = kjerne) er en celle uten membranomsluttet kjerne. DNA-et ligger fritt i cytoplasma i et område kalt nukleoid. Prokaryoter mangler også andre membranbundne organeller som mitokondrier og endoplasmatisk retikulum. Prokaryoter inkluderer bakterier og arkeer.',
    },
    {
      id: 'bio1-1-2-def-eukaryot',
      type: 'definition',
      title: 'Eukaryot celle',
      content: 'En eukaryot celle (gresk: *eu* = ekte, *karyon* = kjerne) er en celle med en ekte kjerne omgitt av dobbel kjernememran. Eukaryoter har i tillegg mange membranbundne organeller som mitokondrier, endoplasmatisk retikulum og golgiapparat. Eukaryoter inkluderer dyr, planter, sopp og protister.',
    },
    {
      id: 'bio1-1-2-forskjeller',
      type: 'text',
      content: `## Strukturelle forskjeller

### Sammenligning av prokaryoter og eukaryoter

| Egenskap | Prokaryoter | Eukaryoter |
|----------|-------------|------------|
| **Størrelse** | 0,2-10 $\\mu m$ | 10-100 $\\mu m$ |
| **Kjerne** | Ingen kjernemembran | Ekte kjerne med dobbel membran |
| **DNA-organisering** | Sirkulært kromosom i nukleoid | Lineære kromosomer i kjernen |
| **Membranbundne organeller** | Ingen | Mitokondrier, ER, Golgi, m.fl. |
| **Ribosomer** | 70S | 80S (cytoplasma), 70S (organeller) |
| **Cellevegg** | Peptidoglykan (bakterier) | Cellulose (planter), kitin (sopp) |
| **Celledeling** | Binær fisjon | Mitose/meiose |
| **Flageller** | Enkel struktur (flagellin) | Kompleks struktur (9+2 mikrotubuli) |

### Hva betyr 70S og 80S?

S står for Svedberg-enheter, som måler sedimenteringshastighet ved sentrifugering. Jo høyere tall, jo større partikkel. Prokaryote ribosomer (70S) er mindre enn eukaryote ribosomer (80S), men begge har samme funksjon - proteinsyntese.`,
    },
    {
      id: 'bio1-1-2-bakterier-arkeer',
      type: 'text',
      content: `## Bakterier og arkeer

Prokaryotene deles inn i to domener: **Bacteria** (bakterier) og **Archaea** (arkeer).

### Bakterier (Bacteria)

Bakterier er den mest tallrike gruppen av organismer på jorda.

**Cellevegg:**
- De fleste bakterier har cellevegg av peptidoglykan
- Grampositiv: tykk peptidoglykanvegg (farges lilla)
- Gramnegativ: tynn peptidoglykanvegg + ytre membran (farges rosa)

**Formvariasjon:**
- Kokker (kuleformede)
- Staver (stavformede)
- Spiriller (spiralformede)
- Vibrio (kommaformede)

**Metabolisk mangfold:**
- Heterotrofe (tar opp organiske molekyler)
- Autotrofe (lager organiske molekyler selv)
- Anaerobe (lever uten oksygen)
- Aerobe (krever oksygen)

### Arkeer (Archaea)

Arkeer ligner på bakterier i størrelse og form, men har unike trekk:

**Viktige forskjeller fra bakterier:**
- Cellemembraner med eterbindinger (ikke esterbindinger)
- Ingen peptidoglykan i cellevegg
- Gener og proteinsyntese mer lik eukaryoter
- Mange lever i ekstreme miljøer

**Ekstremofiler:**
- **Termofiler**: Lever i varme kilder (opptil 122°C)
- **Halofiler**: Lever i salt miljø (som Døde havet)
- **Acidofiler**: Lever i svært surt miljø (pH < 2)
- **Metanogener**: Produserer metan, lever anaerobt`,
    },
    {
      id: 'bio1-1-2-def-nukleoid',
      type: 'definition',
      title: 'Nukleoid',
      content: 'Nukleoid er området i en prokaryot celle der det sirkulære kromosomet befinner seg. Til forskjell fra eukaryotenes kjerne er nukleoiden ikke omgitt av en membran - DNA-et ligger direkte i cytoplasma. I tillegg til hovedkromosomet kan prokaryoter ha plasmider - små sirkulære DNA-molekyler.',
    },
    {
      id: 'bio1-1-2-evolusjon',
      type: 'text',
      content: `## Evolusjonær opprinnelse

### Livets opprinnelse

De første cellene på jorda var trolig enkle prokaryoter som oppsto for omtrent 3,8 milliarder år siden. Eukaryote celler dukket opp mye senere, for ca. 2 milliarder år siden.

### Endosymbioseteorien

Lynn Margulis foreslo på 1960-tallet at mitokondrier og kloroplaster opprinnelig var frittlevende prokaryoter som ble "spist" av større celler, men i stedet for å bli fordøyd, innledet de et symbiotisk forhold.

**Bevis for endosymbiose:**

1. **Eget DNA**: Mitokondrier og kloroplaster har eget sirkulært DNA, lik bakterier
2. **70S-ribosomer**: Organellene har prokaryotiske ribosomer
3. **Dobbel membran**: Indre membran fra den opprinnelige bakterien, ytre fra vertscellen
4. **Binær fisjon**: De formerer seg uavhengig av cellen ved deling
5. **Lignende størrelse**: Omtrent samme størrelse som bakterier

### Tidslinje

1. Første prokaryoter (3,8 mrd år)
2. Fotosynteserende cyanobakterier (3,5 mrd år) - begynte å produsere oksygen
3. "Great Oxidation Event" (2,4 mrd år) - oksygen i atmosfæren
4. Første eukaryoter (2 mrd år) - endosymbiose
5. Flercellete organismer (1 mrd år)`,
    },
    {
      id: 'bio1-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Gramfarging',
      problem: 'Du gramfarger en bakterieprove og observerer at cellene farges lilla. Hva forteller dette deg om bakterienes celleveggstruktur?',
      solution: `**Løsning:**

Bakteriene er **grampositiv**.

**Forklaring:**
- Grampositive bakterier har tykk cellevegg med mye peptidoglykan
- Ved gramfarging trenger krystallviolett (lilla farge) inn i celleveggen
- Jodbehandling fikser fargen
- Ved alkoholskylling: den tykke peptidoglykanveggen holder på fargen
- Safranin (rød kontrastfarge) har ingen effekt - cellene forblir lilla

**Gramnegative bakterier** derimot har tynn peptidoglykanvegg og ytre membran. Alkoholen løser opp den ytre membranen, og den tynne peptidoglykanveggen holder ikke på krystallviolett. De farges derfor rosa av safranin.

Eksempler pa grampositive bakterier: *Staphylococcus*, *Streptococcus*
Eksempler pa gramnegative bakterier: *E. coli*, *Salmonella*`,
    },
    {
      id: 'bio1-1-2-example-2',
      type: 'example',
      title: 'Eksempel: Endosymbiosebevis',
      problem: 'Forklar hvorfor det faktum at mitokondrier har egne ribosomer av 70S-typen stotter endosymbioseteorien.',
      solution: `**Løsning:**

**Observasjon:** Mitokondrier har 70S-ribosomer, ikke 80S som resten av den eukaryote cellen.

**Betydning for endosymbioseteorien:**

1. **70S-ribosomer er prokaryotiske**: Alle frittlevende bakterier har 70S-ribosomer
2. **80S-ribosomer er eukaryotiske**: Cytoplasmaet i eukaryote celler har 80S-ribosomer
3. **Logisk slutning**: Hvis mitokondrier opprinnelig var frittlevende bakterier, forklarer dette hvorfor de har beholdt bakterietype ribosomer

**Ytterligere støtte:**
- Antibiotika som hemmer 70S-ribosomer (som streptomycin) hemmer også mitokondrienes proteinsyntese
- Dette viser at mitokondriene har samme type translasjonsmaskineri som bakterier

Samme argument gjelder for kloroplaster, som ogsa har 70S-ribosomer.`,
    },
    {
      id: 'bio1-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **To celletyper**: Prokaryoter (uten kjernemembran) og eukaryoter (med ekte kjerne)
- **Hovedforskjeller**: Størrelse, DNA-organisering, organeller, ribosomtype og cellevegg
- **To prokaryotdomener**: Bakterier og arkeer med ulike celleveggstrukturer og metabolisme
- **Bakteriemangfold**: Former (kokker, staver, spiriller) og metabolisme (hetero/autotrofe, anaerobe/aerobe)
- **Arkeer**: Ofte ekstremofiler med unike membranstrukturer
- **Endosymbioseteorien**: Mitokondrier og kloroplaster oppsto fra frittlevende prokaryoter
- **Bevis for endosymbiose**: Eget DNA, 70S-ribosomer, dobbel membran, binær fisjon`,
    },
  ],
  exercises: [
    {
      id: 'bio1-1-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type ribosomer finnes i cytoplasmaet til eukaryote celler?',
      options: [
        { id: 'a', text: '80S', isCorrect: true },
        { id: 'b', text: '70S', isCorrect: false },
        { id: 'c', text: '60S', isCorrect: false },
        { id: 'd', text: '50S', isCorrect: false },
      ],
      solution: 'Eukaryote celler har 80S-ribosomer i cytoplasma. 70S-ribosomer finnes i prokaryoter og i eukaryotenes mitokondrier og kloroplaster (som stotter endosymbioseteorien).',
    },
    {
      id: 'bio1-1-2-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedkomponenten i bakteriers cellevegg?',
      options: [
        { id: 'a', text: 'Peptidoglykan', isCorrect: true },
        { id: 'b', text: 'Cellulose', isCorrect: false },
        { id: 'c', text: 'Kitin', isCorrect: false },
        { id: 'd', text: 'Kolesterol', isCorrect: false },
      ],
      solution: 'Peptidoglykan er hovedkomponenten i bakteriers cellevegg. Cellulose finnes i planter, kitin i sopp og leddyr. Kolesterol er ikke en celleveggkomponent, men finnes i eukaryote cellemembraner.',
    },
    {
      id: 'bio1-1-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi minst fire bevis som stotter endosymbioseteorien for mitokondriene.',
      solution: 'Bevis for endosymbioseteorien:\n\n1) **Eget DNA**: Mitokondrier har eget sirkulært DNA, lik bakteriers kromosom.\n\n2) **70S-ribosomer**: Mitokondriene har samme type ribosomer som prokaryoter, ikke 80S som resten av cellen.\n\n3) **Dobbel membran**: Den indre membranen stammer fra den opprinnelige bakterien, den ytre fra vertscellens fagosom.\n\n4) **Binær fisjon**: Mitokondrier formerer seg ved deling, uavhengig av cellens cellesyklus.\n\n5) **Lignende størrelse**: Mitokondrier er omtrent samme størrelse som bakterier (1-10 $\\mu m$).\n\n6) **Antibiotikasensitivitet**: Antibiotika som hemmer bakteriell proteinsyntese hemmer også mitokondriene.',
    },
    {
      id: 'bio1-1-2-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type mikroorganisme vil du forvente å finne i en varm kilde med temperatur over 80°C?',
      options: [
        { id: 'a', text: 'Termofil arkee', isCorrect: true },
        { id: 'b', text: 'E. coli', isCorrect: false },
        { id: 'c', text: 'Plantecelle', isCorrect: false },
        { id: 'd', text: 'Dyrecelle', isCorrect: false },
      ],
      solution: 'Termofiler arkeer er tilpasset liv ved svært høye temperaturer og kan finnes i varme kilder. Noen kan overleve ved temperaturer over 100°C. Vanlige bakterier som E. coli dør ved slike temperaturer, og plante- og dyreceller tåler ikke temperaturer over ca. 45°C.',
    },
    {
      id: 'bio1-1-2-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom grampositive og gramnegative bakterier nar det gjelder celleveggstruktur.',
      solution: '**Grampositive bakterier:**\n- Tykk cellevegg med mye peptidoglykan (20-80 nm)\n- Ingen ytre membran\n- Holder pa krystallviolett ved gramfarging - farges lilla\n- Eksempler: Staphylococcus, Streptococcus\n\n**Gramnegative bakterier:**\n- Tynn cellevegg med lite peptidoglykan (2-7 nm)\n- Har ytre membran utenpat peptidoglykan\n- Ytre membran inneholder lipopolysakkarider (LPS)\n- Mister krystallviolett ved gramfarging, farges rosa av safranin\n- Eksempler: E. coli, Salmonella\n\nDenne forskjellen er medisinsk viktig fordi gramnegative bakterier ofte er vanskeligere a behandle med antibiotika fordi den ytre membranen fungerer som en ekstra barriere.',
    },
    {
      id: 'bio1-1-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hvorfor tror man at eukaryote celler oppsto etter prokaryote celler i evolusjonshistorien? Gi både tidsmessige og strukturelle argumenter.',
      solution: '**Tidsmessige argumenter:**\n- Fossiler av prokaryoter (stromatolitter) er datert til 3,5 milliarder år\n- De eldste eukaryote fossilene er ca. 2 milliarder år gamle\n- Det er altså et gap på 1,5 milliarder år der bare prokaryoter eksisterte\n\n**Strukturelle argumenter:**\n1) **Økende kompleksitet**: Eukaryoter er mer komplekse med mange organeller - det er enklere å evolusjonere fra enkelt til komplekst\n\n2) **Endosymbiose**: Mitokondrier og kloroplaster stammer fra prokaryoter, så disse prokaryotene måtte eksistere før\n\n3) **Oksygen-avhengighet**: Mitokondrier krever oksygen for celleånding. Oksygen ble produsert av fotosynteserende prokaryoter (cyanobakterier) som oppsto for 3,5 milliarder år siden. "Great Oxidation Event" skjedde for 2,4 milliarder år siden.\n\n4) **Genetisk bevis**: Genanalyser viser at eukaryoter har gener fra både bakterier og arkeer, noe som tyder på en fusjonshendelse mellom prokaryotgrupper.',
    },
  ],
};

// ============================================================================
// Kapittel 1.3: Cellens organeller
// ============================================================================

export const CHAPTER_BIOLOGI_1_1_3: TextbookChapter = {
  id: 'biologi-1-1-3',
  courseId: 'biologi-1',
  chapterNumber: '1.3',
  title: 'Cellens organeller',
  description: 'Kjernen og ribosomer, endoplasmatisk retikulum og golgiapparat, mitokondrier og kloroplaster, lysosomer, peroksisomer og vakuoler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive cellens oppbygging og organellenes funksjoner',
    'forklare sammenhengen mellom organellenes struktur og funksjon',
    'gjøre rede for endosymbioseteorien',
  ],
  content: [
    {
      id: 'bio1-1-3-intro',
      type: 'text',
      content: `# Cellens organeller

I dette kapittelet skal du lære om:

- Kjernen som cellens kontrollsenter og ribosomer som proteinfabrikker
- Endoplasmatisk retikulum og golgiapparatet som protein- og lipidbearbeidingssystemer
- Mitokondrier og kloroplaster som energiomformere
- Lysosomer, peroksisomer og vakuoler med spesialiserte funksjoner

Eukaryote celler er organisert i ulike avdelinger - organeller - som hver utforer spesifikke funksjoner. Denne arbeidsdelingen gjor det mulig a ha mange ulike prosesser pa gang samtidig uten at de forstyrrer hverandre.`,
    },
    {
      id: 'bio1-1-3-kjernen',
      type: 'text',
      content: `## Kjernen (nucleus)

Kjernen er cellens kontrollsenter og inneholder nesten all cellens genetiske informasjon.

### Struktur

**Kjernememran (kjernekonvolutt):**
- Dobbel membran med to fosfolipidlag
- Sammenhengende med endoplasmatisk retikulum
- Perforert av kjerneporer (ca. 3000 per kjerne)

**Kjerneporer:**
- Komplekse proteinstrukturer
- Regulerer transport inn og ut av kjernen
- Sma molekyler kan passere fritt
- Store molekyler (proteiner, RNA) krever signalsekvenser

**Nukleolus (kjerneløsning):**
- Ikke membranomsluttet omrade inne i kjernen
- Produksjon av ribosomalt RNA (rRNA)
- Samling av ribosomsubenheter

**Kromatin:**
- DNA pakket rundt histonproteiner
- Under celledeling kondenserer det til synlige kromosomer`,
    },
    {
      id: 'bio1-1-3-def-kjerne',
      type: 'definition',
      title: 'Cellekjernen',
      content: 'Cellekjernen er en membranomsluttet organelle som inneholder cellens DNA organisert i kromosomer. Kjernen styrer cellens aktiviteter ved a regulere hvilke gener som uttrykkes (transkriberes). Kjernemembran har porer som kontrollerer transport mellom kjernen og cytoplasma.',
    },
    {
      id: 'bio1-1-3-ribosomer',
      type: 'text',
      content: `## Ribosomer

Ribosomer er cellens proteinfabrikker.

### Struktur
- Bestar av RNA (rRNA) og proteiner
- To subenheter: stor og liten
- Eukaryote: 60S + 40S = 80S
- Prokaryote: 50S + 30S = 70S

### Lokalisering
- **Frie ribosomer** i cytoplasma: lager proteiner til bruk inne i cellen
- **Bundne ribosomer** pa ru ER: lager proteiner for eksport eller membranproteiner

### Funksjon
1. mRNA binder til liten subenhet
2. tRNA bringer aminosyrer
3. Stor subenhet katalyserer peptidbindinger
4. Polypeptidkjede dannes`,
    },
    {
      id: 'bio1-1-3-er-golgi',
      type: 'text',
      content: `## Endoplasmatisk retikulum (ER)

ER er et nettverk av membraner som strekker seg gjennom cellen.

### Ru ER (med ribosomer)

**Struktur:**
- Flate sekkinger (cisterner)
- Ribosomer festet til overflaten
- Sammenhengende med kjernemembranen

**Funksjoner:**
- Proteinsyntese av eksportproteiner
- Proteinfolding og kvalitetskontroll
- Glykosylering (tillegger sukkerkjeder)

### Glatt ER (uten ribosomer)

**Funksjoner:**
- Lipidsyntese (fosfolipider, steroider)
- Kalsiumlager (viktig for signalering)
- Avgiftning (lever: nedbrytning av legemidler og alkohol)

## Golgiapparatet

**Struktur:**
- Stakk av flate membransekkinger (cisterner)
- *Cis*-side (mottaksside) - vendt mot ER
- *Trans*-side (sendeside) - vendt mot plasmamembranen

**Funksjoner:**
- Modifiserer proteiner og lipider fra ER
- Sorterer molekyler til riktige destinasjoner
- Pakker produkter i vesikler
- Produserer lysosomer`,
    },
    {
      id: 'bio1-1-3-def-er',
      type: 'definition',
      title: 'Endoplasmatisk retikulum',
      content: 'Endoplasmatisk retikulum (ER) er et omfattende nettverk av membraner inne i eukaryote celler. Ru ER har ribosomer og er involvert i proteinsyntese og -prosessering. Glatt ER mangler ribosomer og er involvert i lipidsyntese, kalsiumlagring og avgiftning. ER-membranen er sammenhengende med kjernemembranen.',
    },
    {
      id: 'bio1-1-3-mito-kloro',
      type: 'text',
      content: `## Mitokondrier

Mitokondrier er cellens kraftverk som produserer ATP.

### Struktur
- **Ytre membran**: Smidig, permeabel for sma molekyler
- **Indre membran**: Sterkt foldet (cristae), inneholder elektrontransportkjeden
- **Intermembranrom**: Mellom de to membranene
- **Matrise**: Innerst, inneholder DNA, ribosomer og enzymer

### Funksjoner
- Celleanding: produserer ca. 30-32 ATP per glukose
- Sitronsyresyklus i matrise
- Oksidativ fosforylering i indre membran
- Varmeproduksjon
- Apoptose (programmert celledod)

### Antall
- Varierer med cellens energibehov
- Muskelceller: tusenvis
- Hudceller: hundrevis

## Kloroplaster (kun planteceller)

### Struktur
- **Ytre og indre membran**
- **Stroma**: Vannholdig løsning med enzymer
- **Tylakoider**: Flate membraner stablet i grana
- **Thylakoidmembran**: Inneholder klorofyll og fotosystemer

### Funksjoner
- Fotosyntese: $6CO_2 + 6H_2O + \\text{lysenergi} \\rightarrow C_6H_{12}O_6 + 6O_2$
- Lysreaksjoner i thylakoidmembran
- Calvin-syklus i stroma`,
    },
    {
      id: 'bio1-1-3-def-mitokondrie',
      type: 'definition',
      title: 'Mitokondrier',
      content: 'Mitokondrier er dobbelmembranerte organeller som produserer mesteparten av cellens ATP gjennom celleånding. De har eget sirkulært DNA og 70S-ribosomer, noe som støtter endosymbioseteorien. Antall mitokondrier varierer med cellens energibehov - muskelceller har tusenvis, mens rolige celler har færre.',
    },
    {
      id: 'bio1-1-3-andre',
      type: 'text',
      content: `## Lysosomer, peroksisomer og vakuoler

### Lysosomer

**Struktur:**
- Enkelt membranomsluttet vesikkel
- Inneholder fordoyende enzymer (hydrolaser)
- Sur pH inne (ca. 5) opprettholdt av protonpumper

**Funksjoner:**
- Intracellular fordoyelse av makromolekyler
- Autofagi: nedbrytning av utslitte organeller
- Fagocytose: nedbrytning av opptatte partikler
- Apoptose: frigjøring av enzymer forer til celledod

### Peroksisomer

**Struktur:**
- Enkelt membranomsluttet vesikkel
- Inneholder oksidative enzymer (katalase, peroksidase)

**Funksjoner:**
- Oksidasjon av fettsyrer
- Avgiftning: bryter ned giftige forbindelser
- Nedbrytning av hydrogenperoksid ($H_2O_2$)
- $2H_2O_2 \\xrightarrow{\\text{katalase}} 2H_2O + O_2$

### Vakuoler

**Plantecellers sentralvakuol:**
- Enormt stor (opptil 80% av cellevolumet)
- Fylt med cellesaft
- Funksjoner:
  - Lagring (sukker, proteiner, pigmenter)
  - Opprettholder turgortrykk
  - Fordoyelse
  - Avfallsdeponering

**Kontraktile vakuoler (protister):**
- Pumper ut overflodig vann
- Viktig for osmoregulering i ferskvann`,
    },
    {
      id: 'bio1-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Proteinets vei gjennom cellen',
      problem: 'Beskriv veien et protein tar fra det syntetiseres til det skilles ut av cellen (eksocytose).',
      solution: `**Løsning:**

**1. Transkripsjon (i kjernen)**
- Genet for proteinet transkriberes til mRNA
- mRNA prosesseres og transporteres ut gjennom kjerneporer

**2. Translasjon (pa ru ER)**
- mRNA binder til ribosom pa ru ER
- Proteinet syntetiseres og skyves inn i ER-lumen
- Signalsekvensen klippes av

**3. Prosessering (i ER)**
- Proteinet foldes korrekt
- Sukkerkjeder legges til (glykosylering)
- Kvalitetskontroll - feilfoldede proteiner brytes ned

**4. Transport til Golgi**
- Proteinet pakkes i transportvesikler
- Vesikkelen fusjonerer med Golgis cis-side

**5. Modifisering (i Golgi)**
- Ytterligere modifisering av sukkerkjeder
- Proteinet beveger seg fra cis til trans

**6. Pakking og sortering (trans-Golgi)**
- Proteinet pakkes i sekretorisk vesikkel
- Vesikkelen merkes for eksport

**7. Eksocytose**
- Vesikkelen beveger seg til cellemembranen
- Fusjonerer med membranen
- Proteinet frigjøres utenfor cellen`,
    },
    {
      id: 'bio1-1-3-example-2',
      type: 'example',
      title: 'Eksempel: Lysosom og autofagi',
      problem: 'Forklar hvordan en celle bruker lysosomer til a resirkulere et utslitt mitokondrium.',
      solution: `**Løsning:**

**Autofagiprosessen:**

**1. Gjenkjenning**
- Cellen oppdager at mitokondriet er skadet eller ineffektivt
- Markorer pa mitokondrieoverflaten signalerer "spis meg"

**2. Innkapsling**
- En dobbelmembran (fagofor) dannes rundt mitokondriet
- Denne lukker seg og danner et autofagosom

**3. Fusjon med lysosom**
- Autofagosomet fusjonerer med et lysosom
- Resultatet er et autolysosom

**4. Nedbrytning**
- Lysosomets enzymer (hydrolaser) bryter ned mitokondriet
- Sur pH (5) aktiverer enzymene
- Proteiner, lipider, DNA brytes ned til monomerer

**5. Resirkulering**
- Aminosyrer, fettsyrer, nukleotider frigjøres til cytoplasma
- Kan brukes til a bygge nye molekyler
- Cellen sparer energi og ressurser

**Betydning:**
Autofagi er viktig for cellefornyelse og hindrer akkumulering av skadede organeller. Problemer med autofagi er knyttet til aldring og sykdommer som Parkinson.`,
    },
    {
      id: 'bio1-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om organellenes struktur og funksjon:

| Organelle | Hovedfunksjon |
|-----------|---------------|
| **Kjerne** | Lagrer DNA, styrer genekspresjon |
| **Ribosomer** | Proteinsyntese |
| **Ru ER** | Proteinsyntese og prosessering |
| **Glatt ER** | Lipidsyntese, avgiftning, Ca-lager |
| **Golgiapparat** | Modifisering, sortering, pakking |
| **Mitokondrier** | ATP-produksjon (celleanding) |
| **Kloroplaster** | Fotosyntese |
| **Lysosomer** | Intracellular fordoyelse |
| **Peroksisomer** | Fettsyreoksidasjon, avgiftning |
| **Vakuoler** | Lagring, turgortrykk |

Organellene samarbeider i komplekse prosesser som proteinsekresjon og cellefornyelse.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-1-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken organelle produserer mesteparten av cellens ATP?',
      options: [
        { id: 'a', text: 'Mitokondrier', isCorrect: true },
        { id: 'b', text: 'Ribosomer', isCorrect: false },
        { id: 'c', text: 'Golgiapparatet', isCorrect: false },
        { id: 'd', text: 'Lysosomer', isCorrect: false },
      ],
      solution: 'Mitokondriene produserer mesteparten av cellens ATP gjennom celleanding. Elektrontransportkjeden i den indre membranen genererer ca. 30-32 ATP per glukosemolekyl.',
    },
    {
      id: 'bio1-1-3-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor foregår proteinsyntese av eksportproteiner?',
      options: [
        { id: 'a', text: 'Pa ru endoplasmatisk retikulum', isCorrect: true },
        { id: 'b', text: 'Pa glatt endoplasmatisk retikulum', isCorrect: false },
        { id: 'c', text: 'I lysosomer', isCorrect: false },
        { id: 'd', text: 'I peroksisomer', isCorrect: false },
      ],
      solution: 'Eksportproteiner syntetiseres pa ribosomer festet til ru ER. Signalsekvensen i begynnelsen av proteinet dirigerer ribosomet til ER, og proteinet skyves direkte inn i ER-lumen for videre prosessering.',
    },
    {
      id: 'bio1-1-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar strukturen til et mitokondrium og relater hver del til funksjon.',
      solution: '**Mitokondriestruktur og funksjon:**\n\n1) **Ytre membran**: Relativt permeabel, lar små molekyler passere. Skiller mitokondriet fra cytoplasma.\n\n2) **Intermembranrom**: Rommet mellom membranene. Her akkumuleres H+-ioner som pumpes fra matrise, og skaper protongradient for ATP-syntese.\n\n3) **Indre membran**: Sterkt foldet i cristae for stor overflate. Inneholder elektrontransportkjeden og ATP-syntase. Her foregår oksidativ fosforylering.\n\n4) **Cristae**: Folder i indre membran som øker overflaten for mer elektrontransport og ATP-produksjon.\n\n5) **Matrise**: Den indre løsningen. Inneholder sirkulært DNA, 70S-ribosomer, og enzymer for sitronsyresyklus. Her brytes acetyl-CoA ned og elektronbærere (NADH, FADH2) dannes.',
    },
    {
      id: 'bio1-1-3-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedfunksjonen til lysosomer?',
      options: [
        { id: 'a', text: 'Intracellular fordoyelse', isCorrect: true },
        { id: 'b', text: 'Proteinsyntese', isCorrect: false },
        { id: 'c', text: 'ATP-produksjon', isCorrect: false },
        { id: 'd', text: 'Lipidsyntese', isCorrect: false },
      ],
      solution: 'Lysosomer er cellens "fordoyelsessystem" og inneholder fordoyende enzymer (hydrolaser) som bryter ned makromolekyler, utslitte organeller (autofagi) og opptatte partikler (fagocytose). Sur pH (ca. 5) aktiverer enzymene.',
    },
    {
      id: 'bio1-1-3-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hovedforskjellene mellom ru og glatt endoplasmatisk retikulum.',
      solution: '**Ru ER:**\n- Har ribosomer festet til overflaten (derav navnet "ru")\n- Bestar av flate cisterner\n- Hovedfunksjoner: proteinsyntese av eksportproteiner og membranproteiner, proteinfolding og kvalitetskontroll, glykosylering\n- Dominerer i celler som produserer mye protein (f.eks. plasmaceller)\n\n**Glatt ER:**\n- Mangler ribosomer\n- Mer rorforrnet struktur\n- Hovedfunksjoner: lipidsyntese (fosfolipider, steroider), kalsiumlagring for signalering, avgiftning av legemidler og giftstoffer\n- Dominerer i leverceller (avgiftning) og celler som produserer steroidhormoner (binyrer, gonader)\n\nBegge er sammenhengende med kjernemembranen og kommuniserer med Golgiapparatet via vesikkeltransport.',
    },
    {
      id: 'bio1-1-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et protein som skal skilles ut av cellen syntetiseres i cytoplasma. Beskriv trinnvis veien proteinet tar gjennom cellen fra syntese til sekresjon, og nevn hvilke organeller som er involvert.',
      solution: '**Proteinets sekretoriske vei:**\n\n**1. Kjernen:**\n- Genet transkriberes til mRNA\n- mRNA prosesseres og eksporteres gjennom kjerneporer\n\n**2. Ribosom pa ru ER:**\n- mRNA binder til fritt ribosom\n- Signalsekvens i proteinet gjenkjennes av SRP (signalgjenkjenningspartikkel)\n- Ribosom dirigeres til ru ER\n- Proteinet translateres og skyves inn i ER-lumen\n\n**3. ER-lumen:**\n- Signalsekvensen klippes av\n- Proteinet folder seg korrekt\n- Sukkerkjeder legges til (N-glykosylering)\n- Kvalitetskontroll - feilfoldede proteiner degraderes\n\n**4. Transportvesikkel:**\n- Protein pakkes i COPII-vesikkel\n- Transporteres til Golgiapparatet\n\n**5. Golgiapparat:**\n- Ankommer cis-Golgi\n- Beveger seg gjennom cisternene mot trans-Golgi\n- Ytterligere modifisering av sukkerkjeder\n- Sortering og pakking i sekretorisk vesikkel\n\n**6. Sekretorisk vesikkel:**\n- Transporteres langs cytoskjelettet til cellemembranen\n\n**7. Eksocytose:**\n- Vesikkelen fusjonerer med plasmamembranen\n- Innholdet frigjøres utenfor cellen',
    },
  ],
};

// ============================================================================
// Kapittel 1.4: Cellemembranen
// ============================================================================

export const CHAPTER_BIOLOGI_1_1_4: TextbookChapter = {
  id: 'biologi-1-1-4',
  courseId: 'biologi-1',
  chapterNumber: '1.4',
  title: 'Cellemembranen',
  description: 'Fluid mosaikk-modellen, fosfolipider og membranproteiner, kolesterolets rolle i membranen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for cellemembranes struktur og transport',
    'forklare fluid mosaikk-modellen',
    'beskrive membranproteiners ulike funksjoner',
  ],
  content: [
    {
      id: 'bio1-1-4-intro',
      type: 'text',
      content: `# Cellemembranen

I dette kapittelet skal du lære om:

- Fluid mosaikk-modellen som beskriver membranens struktur
- Fosfolipidenes oppbygging og organisering i dobbeltlaget
- De ulike typene membranproteiner og deres funksjoner
- Kolesterolets rolle i a regulere membranens egenskaper

Cellemembranen er grensen mellom cellen og omverdenen. Den er ikke bare en passiv barriere, men en dynamisk struktur som kontrollerer transport, kommunikasjon og cellens interaksjon med omgivelsene.`,
    },
    {
      id: 'bio1-1-4-fluid-mosaikk',
      type: 'text',
      content: `## Fluid mosaikk-modellen

I 1972 foreslo Singer og Nicolson fluid mosaikk-modellen for cellemembranen. Denne modellen beskriver membranen som et flytende "hav" av fosfolipider med innebygde proteiner.

### "Fluid" - flytende egenskaper

Cellemembranen er ikke stiv, men flytende:
- Fosfolipider beveger seg raskt sideveis (lateral diffusjon)
- Et fosfolipid kan skifte plass med naboen millioner ganger per sekund
- Flip-flop (bytte side) er sjeldent uten hjelp av flippaser
- Temperatur pavirker flytenhet

### "Mosaikk" - mangfoldig sammensetning

Membranen inneholder mange ulike komponenter:
- Fosfolipider (grunnstrukturen)
- Kolesterol (regulerer flytenhet)
- Integrale proteiner (gar gjennom membranen)
- Perifere proteiner (ligger pa overflaten)
- Glykoproteiner og glykolipider (sukkerkjeder utenpa)

### Asymmetrisk oppbygging

De to halvdelene av membranen er ulike:
- Utsiden har glykoproteiner og glykolipider
- Fosfolipidsammensetningen er forskjellig pa hver side
- Denne asymmetrien er viktig for cellens funksjon`,
    },
    {
      id: 'bio1-1-4-def-fluidmosaikk',
      type: 'definition',
      title: 'Fluid mosaikk-modellen',
      content: 'Fluid mosaikk-modellen beskriver cellemembranen som et dobbelt fosfolipidlag med innebygde proteiner. "Fluid" refererer til at lipidene og mange proteiner kan bevege seg fritt sideveis i membranen. "Mosaikk" refererer til det varierte monsteret av proteiner i lipidlaget. Modellen ble foreslatt av Singer og Nicolson i 1972.',
    },
    {
      id: 'bio1-1-4-fosfolipider',
      type: 'text',
      content: `## Fosfolipider

Fosfolipider er hovedkomponenten i cellemembranen.

### Struktur

Et fosfolipid bestar av:

**Hydrofile hode (vannloskelig):**
- Glyserol
- Fosfatgruppe
- Ofte tilleggsgruppe (kolin, serin, etanolamin)

**Hydrofobe haler (fettloskelige):**
- To fettsyrekjeder
- Mettet fettsyre: rett, pakker tett
- Umettet fettsyre: knekk (cis-dobbeltbinding), pakker losere

### Selvorganisering i vann

Fosfolipider organiserer seg spontant i dobbeltlag:
- Hydrofobe haler peker innover (vekk fra vann)
- Hydrofile hoder peker utover (mot vannet)
- Danner lukket boble (liposom) eller membran

### Membranflytenhet

Flytenhet pavirkes av:
1. **Fettsyresammensetning**: Flere umettede = mer flytende
2. **Kjedeelengde**: Kortere kjeder = mer flytende
3. **Temperatur**: Hoyere temperatur = mer flytende
4. **Kolesterolinnhold**: Se neste seksjon`,
    },
    {
      id: 'bio1-1-4-def-fosfolipid',
      type: 'definition',
      title: 'Fosfolipid',
      content: 'Fosfolipider er amfipatiske molekyler med et hydrofilt hode (fosfatgruppe bundet til glyserol) og to hydrofobe haler (fettsyrekjeder). Denne strukturen gjor at de spontant danner dobbeltlag i vann, der halene peker innover og hodene ut mot vannet. Fosfolipider utgjor hovedstrukturen i alle biologiske membraner.',
    },
    {
      id: 'bio1-1-4-proteiner',
      type: 'text',
      content: `## Membranproteiner

Proteiner utgjor ca. 50% av membranens masse og utforer de fleste av membranens spesialiserte funksjoner.

### Integrale (transmembrane) proteiner

Gar helt gjennom membranen:
- Hydrofobe regioner i lipidlaget
- Hydrofile regioner i vandig løsning pa begge sider
- Forankret i membranen

**Typer:**
- **Enkeltpass**: Krysser membranen en gang
- **Multipass**: Krysser membranen flere ganger (f.eks. 7-TM-reseptorer)
- **Beta-tonner**: Danner porer (f.eks. poriner i bakterier)

### Perifere proteiner

Ligger pa membranoverflaten:
- Bundet til integrale proteiner eller lipider
- Loselig festet - kan flytte seg
- Ofte involvert i signalering og cytoskjelett

### Funksjoner

| Funksjon | Eksempel |
|----------|----------|
| **Transport** | Ionekanaler, pumper, transportorer |
| **Enzym** | ATPase, adenylylsyklase |
| **Reseptor** | Hormonreseptorer, nevrotransmitterreseptorer |
| **Forankring** | Integriner (kobler til cytoskjelett) |
| **Cellegjenkjenning** | MHC-molekyler (immunforsvaret) |`,
    },
    {
      id: 'bio1-1-4-def-integralprotein',
      type: 'definition',
      title: 'Integralt membranprotein',
      content: 'Integrale (eller transmembrane) proteiner strekker seg gjennom hele fosfolipiddobbeltlaget. De har hydrofobe regioner som interagerer med lipidhalene og hydrofile regioner som stikker ut i vandig miljo pa begge sider. Typiske eksempler er ionekanaler, transportproteiner og reseptorer.',
    },
    {
      id: 'bio1-1-4-kolesterol',
      type: 'text',
      content: `## Kolesterolets rolle

Kolesterol er en viktig komponent i dyrecellers membraner (men ikke i plante- eller bakterieceller).

### Struktur
- Steroide (fire sammenknyttede ringer)
- Liten hydrofile gruppe (OH)
- Stor hydrofob kropp
- Plassert mellom fosfolipidene med OH-gruppen mot hodet

### Funksjoner

**1. Regulerer membranflytenhet ("fluiditetsbuffer")**

Ved hoy temperatur:
- Kolesterol begrenser fosfolipidbevegelse
- Gjor membranen mer rigid
- Hindrer at den blir for flytende

Ved lav temperatur:
- Kolesterol hindrer tett pakking av fosfolipider
- Forhindrer membranen fra a "fryse"
- Opprettholder flytenhet

**2. Oker membranstyrke**
- Stabiliserer membranen
- Hindrer lekkasje av sma molekyler

**3. Lipidraft**
- Kolesterolrike omrader i membranen
- Inneholder spesifikke proteiner
- Viktige for signalering

### Mengde
- Ca. 20-25% av lipidene i dyrecellemembraner
- Varierer mellom celletyper`,
    },
    {
      id: 'bio1-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Membranflytenhet og temperatur',
      problem: 'En bakterie lever i et miljo der temperaturen varierer mellom 10°C og 40°C. Hvordan kan bakterien tilpasse membranens sammensetning for a opprettholde riktig flytenhet?',
      solution: `**Løsning:**

Bakterien kan justere membransammensetningen for a opprettholde optimal flytenhet - dette kalles **homeoviskosk adaptasjon**.

**Ved lave temperaturer (10°C):**
For a oke flytenhet kan bakterien:
- Oke andelen umettede fettsyrer (med dobbeltbindinger)
- Bruke kortere fettsyrekjeder
- Inkorporere forgrenede fettsyrer
- Redusere hopanoider (kolesterol-lignende molekyler)

**Ved hoye temperaturer (40°C):**
For a redusere flytenhet kan bakterien:
- Øke andelen mettede fettsyrer
- Bruke lengre fettsyrekjeder
- Øke hopanoidinnhold (i noen bakterier)

**Mekanisme:**
- Enzymer som desaturaser kan legge til dobbeltbindinger
- Syntetisere nye fosfolipider med annen fettsyresammensetning
- Omdirigere eksisterende biosynteseveier

Dette sikrer at membranen forblir funksjonell ved å opprettholde riktig balanse mellom flytenhet og stabilitet.`,
    },
    {
      id: 'bio1-1-4-example-2',
      type: 'example',
      title: 'Eksempel: Membranproteiner og funksjon',
      problem: 'Nevn tre ulike funksjoner membranproteiner kan ha, og gi et eksempel pa hver.',
      solution: `**Løsning:**

**1. Transport**
- **Eksempel**: Na+/K+-ATPase (natrium-kalium-pumpen)
- **Funksjon**: Pumper 3 Na+ ut og 2 K+ inn av cellen
- **Betydning**: Opprettholder ionegradient, viktig for nervesignaler

**2. Reseptorfunksjon**
- **Eksempel**: Insulinreseptor
- **Funksjon**: Binder insulin pa cellens utside
- **Betydning**: Aktiverer signalveier som far cellen til a ta opp glukose

**3. Enzymaktivitet**
- **Eksempel**: Adenylylsyklase
- **Funksjon**: Produserer cAMP fra ATP
- **Betydning**: cAMP er et viktig signalmolekyl (sekundær budbringer)

**Andre funksjoner inkluderer:**
- Forankring til cytoskjelettet (integriner)
- Celle-celle-gjenkjenning (MHC-molekyler)
- Celle-celle-adhesjon (kadheriner)`,
    },
    {
      id: 'bio1-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Fluid mosaikk-modellen**: Membranen er et flytende fosfolipiddobbeltlag med innebygde proteiner som kan bevege seg
- **Fosfolipider**: Amfipatiske molekyler med hydrofilt hode og hydrofobe haler, organisert i dobbeltlag
- **Membranflytenhet**: Påvirkes av fettsyresammensetning, temperatur og kolesterol
- **Integrale proteiner**: Går gjennom membranen, utfører transport, reseptor- og enzymfunksjoner
- **Perifere proteiner**: Ligger på overflaten, involvert i signalering
- **Kolesterol**: Regulerer flytenhet ("fluiditetsbuffer"), stabiliserer membranen, danner lipidraft
- **Asymmetri**: De to halvdelene av membranen har ulik sammensetning`,
    },
  ],
  exercises: [
    {
      id: 'bio1-1-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "fluid" i fluid mosaikk-modellen?',
      options: [
        { id: 'a', text: 'At lipider og proteiner kan bevege seg sideveis i membranen', isCorrect: true },
        { id: 'b', text: 'At membranen inneholder vann', isCorrect: false },
        { id: 'c', text: 'At membranen er permeabel for alle stoffer', isCorrect: false },
        { id: 'd', text: 'At membranen er fast', isCorrect: false },
      ],
      solution: '"Fluid" refererer til membranens flytende natur - fosfolipider og mange proteiner kan bevege seg raskt sideveis i membranen. Et fosfolipid kan bytte plass med naboen millioner ganger per sekund.',
    },
    {
      id: 'bio1-1-4-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken del av fosfolipidet er hydrofob?',
      options: [
        { id: 'a', text: 'Fettsyrehalene', isCorrect: true },
        { id: 'b', text: 'Fosfatgruppen', isCorrect: false },
        { id: 'c', text: 'Glyserol', isCorrect: false },
        { id: 'd', text: 'Kolingruppen', isCorrect: false },
      ],
      solution: 'Fettsyrehalene er hydrofobe (fettloskelige) og peker innover i membranen, vekk fra vannet. Hodet med fosfatgruppe er hydrofilt og peker ut mot den vandige løsningen.',
    },
    {
      id: 'bio1-1-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan kolesterol påvirker membranens flytenhet ved ulike temperaturer.',
      solution: 'Kolesterol fungerer som en "fluiditetsbuffer" i membranen:\n\n**Ved høye temperaturer:**\n- Kolesterol begrenser fosfolipidenes bevegelse\n- Hindrer at membranen blir for flytende\n- Gjør membranen mer rigid og stabil\n- Forhindrer lekkasje av små molekyler\n\n**Ved lave temperaturer:**\n- Kolesterol plasserer seg mellom fosfolipidene\n- Hindrer at fosfolipidenes haler pakkes for tett\n- Forhindrer at membranen "fryser"\n- Opprettholder nødvendig flytenhet for membranproteiners funksjon\n\nDermed holder kolesterol membranens flytenhet relativt konstant over et temperaturområde, noe som er viktig for celler som utsettes for temperaturvariasjoner.',
    },
    {
      id: 'bio1-1-4-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type protein går helt gjennom cellemembranen?',
      options: [
        { id: 'a', text: 'Integralt (transmembrant) protein', isCorrect: true },
        { id: 'b', text: 'Perifert protein', isCorrect: false },
        { id: 'c', text: 'Glykoprotein', isCorrect: false },
        { id: 'd', text: 'Lipoprotein', isCorrect: false },
      ],
      solution: 'Integrale (transmembrane) proteiner strekker seg gjennom hele fosfolipiddobbeltlaget. De har hydrofobe regioner som er i kontakt med lipidhalene og hydrofile regioner som stikker ut pa begge sider av membranen.',
    },
    {
      id: 'bio1-1-4-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med at cellemembranen er asymmetrisk.',
      solution: 'Membranasymmetri betyr at de to halvdelene (bladene) av fosfolipiddobbeltlaget har ulik sammensetning:\n\n**Ulik lipidsammensetning:**\n- Fosfatidylkolin og sfingomyelin dominerer på utsiden\n- Fosfatidylserin og fosfatidyletanolamin dominerer på innsiden\n\n**Glykosylering:**\n- Sukkerkjeder (glykaner) finnes bare på membranens utside\n- Glykoproteiner og glykolipider danner glykocalyx\n- Viktig for cellegjenkjenning\n\n**Proteinorientering:**\n- Transmembrane proteiner har spesifikk orientering\n- Reseptorers bindingssete er på utsiden\n- Enzymatiske domener kan være på innsiden\n\n**Betydning:**\n- Nødvendig for cellefunksjon (f.eks. signalering)\n- Opprettholdes av flippaser og floppaser\n- Fosfatidylserin på utsiden er et apoptose-signal',
    },
    {
      id: 'bio1-1-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hvordan ville en økning i andelen umettede fettsyrer i fosfolipidene påvirke membranens egenskaper? Forklar på molekylnivå.',
      solution: '**Effekt av økt andel umettede fettsyrer:**\n\n**Strukturell forklaring:**\n- Mettede fettsyrer er rette og kan pakke tett\n- Umettede fettsyrer har cis-dobbeltbindinger som lager en "knekk"\n- Knekken hindrer tett pakking av fettsyrehalene\n\n**Konsekvenser for membranen:**\n\n1) **Økt flytenhet:**\n- Mer plass mellom fosfolipidene\n- Lettere for lipider å bevege seg sideveis\n- Proteiner kan bevege seg friere\n\n2) **Lavere smeltepunkt:**\n- Membranen forblir flytende ved lavere temperaturer\n- Viktig for organismer i kalde miljøer\n\n3) **Økt permeabilitet:**\n- Løsere pakking gjør membranen noe mer permeabel\n- Små molekyler kan passere lettere\n\n4) **Endret tykkelse:**\n- Membranen kan bli noe tynnere\n- Kan påvirke hvordan transmembrane proteiner passer\n\n**Biologisk relevans:**\n- Fisk i kaldt vann har mer umettede fettsyrer\n- Planter justerer metningsgrad med årstidene\n- Viktig for homeoviskos adaptasjon',
    },
  ],
};

// ============================================================================
// Kapittel 1.5: Transport over cellemembranen
// ============================================================================

export const CHAPTER_BIOLOGI_1_1_5: TextbookChapter = {
  id: 'biologi-1-1-5',
  courseId: 'biologi-1',
  chapterNumber: '1.5',
  title: 'Transport over cellemembranen',
  description: 'Passiv transport (diffusjon, osmose, fasilitert diffusjon), aktiv transport (pumper, endocytose, eksocytose) og praktiske eksempler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for cellemembranes struktur og transport',
    'forklare forskjellen mellom passiv og aktiv transport',
    'beskrive osmose og dens betydning for celler',
  ],
  content: [
    {
      id: 'bio1-1-5-intro',
      type: 'text',
      content: `# Transport over cellemembranen

I dette kapittelet skal du lære om:

- Passiv transport: diffusjon, osmose og fasilitert diffusjon
- Aktiv transport: primær og sekundær, pumper og transportører
- Vesikkeltrafikk: endocytose og eksocytose
- Praktiske eksempler på transport i kroppen

Cellemembranen er selektivt permeabel - den slipper noen stoffer gjennom, men ikke andre. Ulike transportmekanismer lar cellen kontrollere hva som går inn og ut.`,
    },
    {
      id: 'bio1-1-5-oversikt',
      type: 'text',
      content: `## Oversikt over transporttyper

### Passiv transport (krever ikke energi)
- Stoffer beveger seg MED konsentrasjonsgradienten
- Fra hoy til lav konsentrasjon
- Drivkraft: termisk bevegelse og konsentrasjonsforskjell

**Typer:**
- Enkel diffusjon
- Osmose
- Fasilitert diffusjon

### Aktiv transport (krever energi - ATP)
- Stoffer beveger seg MOT konsentrasjonsgradienten
- Fra lav til hoy konsentrasjon
- Cellen bruker energi til a "pumpe" stoffer

**Typer:**
- Primær aktiv transport (bruker ATP direkte)
- Sekundær aktiv transport (utnytter iongradienter)
- Endocytose og eksocytose`,
    },
    {
      id: 'bio1-1-5-diffusjon',
      type: 'text',
      content: `## Enkel diffusjon

Diffusjon er spontan bevegelse av molekyler fra hoy til lav konsentrasjon.

### Prinsipp
- Molekyler beveger seg tilfeldig (brownsk bevegelse)
- Netto bevegelse mot lav konsentrasjon
- Fortsetter til likevekt (lik konsentrasjon overalt)
- Krever ingen energi fra cellen

### Hva kan diffundere gjennom membranen?

**Passerer lett:**
- Sma, upolare molekyler: $O_2$, $CO_2$, $N_2$
- Sma, polare molekyler uten ladning: $H_2O$ (delvis), etanol

**Passerer ikke eller langsomt:**
- Store molekyler: glukose, aminosyrer
- Ladde partikler (ioner): $Na^+$, $K^+$, $Cl^-$

### Faktorer som pavirker diffusjonshastighet

$$\\text{Diffusjonshastighet} \\propto \\frac{A \\cdot \\Delta C}{d}$$

- $A$ = overflatearealet
- $\\Delta C$ = konsentrasjonsforskjell
- $d$ = membrantykkelse`,
    },
    {
      id: 'bio1-1-5-def-diffusjon',
      type: 'definition',
      title: 'Diffusjon',
      content: 'Diffusjon er den spontane bevegelsen av molekyler fra et omrade med hoy konsentrasjon til et omrade med lav konsentrasjon. Prosessen drives av molekylenes termiske bevegelse og fortsetter til det er oppnadd likevekt (lik konsentrasjon overalt). Diffusjon krever ingen energi fra cellen.',
    },
    {
      id: 'bio1-1-5-osmose',
      type: 'text',
      content: `## Osmose

Osmose er diffusjon av vann gjennom en semipermeabel membran.

### Prinsipp
- Vann beveger seg fra hoy til lav vannkonsentrasjon
- Ekvivalent: fra lav til hoy lostoffkonsentrasjon
- Membranen slipper gjennom vann, men ikke loste stoffer (semipermeable)

### Osmotisk trykk
- Trykket som ma til for a stoppe osmosen
- Løsninger med hoyt lostoffinnhold har hoyt osmotisk trykk
- Malt i osmol eller Pascal

### Tonitisitet - løsningens virkning pa celler

**Isoton løsning:**
- Samme osmolaritet som cellen
- Ingen netto vannflyt
- Cellen holder formen

**Hypoton løsning:**
- Lavere osmolaritet enn cellen
- Vann stromme INN i cellen
- Cellen sveller (kan lysere/sprekke)

**Hyperton løsning:**
- Hoyere osmolaritet enn cellen
- Vann stromme UT av cellen
- Cellen krymper (krenasjon/plasmolysis)`,
    },
    {
      id: 'bio1-1-5-def-osmose',
      type: 'definition',
      title: 'Osmose',
      content: 'Osmose er diffusjon av vann (eller annet losemiddel) gjennom en semipermeabel membran, fra et omrade med hoy vannkonsentrasjon til et omrade med lav vannkonsentrasjon. Osmose er avgjørende for cellens vannbalanse og pavirkes av konsentrasjonen av loste stoffer pa hver side av membranen.',
    },
    {
      id: 'bio1-1-5-fasilitert',
      type: 'text',
      content: `## Fasilitert diffusjon

Fasilitert diffusjon er passiv transport gjennom membranproteiner.

### Hvorfor trengs det?
- Mange viktige molekyler er for store eller polare til a diffundere gjennom lipidlaget
- Ioner er ladde og frastotes av det hydrofobe indre
- Membranproteiner fungerer som "hjelpere"

### To typer transportproteiner

**Kanalproteiner:**
- Danner vannfylt pore gjennom membranen
- Høy transporthastighet (opptil $10^8$ ioner/sek)
- Ofte selektive (f.eks. $K^+$-kanaler, $Na^+$-kanaler)
- Kan være regulerte (åpnes/lukkes ved stimuli)
- Eksempel: Akvaporiner (vannkanaler)

**Transportorproteiner (carriers):**
- Binder stoffet og endrer form
- Lavere hastighet enn kanaler
- Enda mer spesifikke
- Eksempel: GLUT1 (glukosetransportor)

### Egenskaper
- Krever ingen ATP (passiv)
- Folger konsentrasjonsgradienten
- Kan mettes (begrenset antall transportorer)
- Spesifikt (hver transporter for ett eller fa stoffer)`,
    },
    {
      id: 'bio1-1-5-aktiv',
      type: 'text',
      content: `## Aktiv transport

Aktiv transport bruker energi til a flytte stoffer mot konsentrasjonsgradienten.

### Primær aktiv transport

Bruker ATP direkte:

**Na+/K+-ATPase (natrium-kalium-pumpen):**
- Pumper 3 $Na^+$ ut og 2 $K^+$ inn per ATP
- Opprettholder iongradienter
- Bruker ca. 25% av cellens ATP
- Viktig for nervesignaler, muskelkontraksjon, osmoregulering

**Andre pumper:**
- $Ca^{2+}$-ATPase: pumper kalsium ut eller inn i ER
- $H^+$-ATPase: pumper protoner (f.eks. i magesekken)

### Sekundær aktiv transport

Utnytter iongradienter skapt av primær aktiv transport:

**Symport (kotransport):**
- To stoffer transporteres i SAMME retning
- Eksempel: $Na^+$/glukose-symport i tarmen
- $Na^+$ strommer inn (med gradienten), drar glukose med

**Antiport (bytte):**
- To stoffer transporteres i MOTSATT retning
- Eksempel: $Na^+$/$H^+$-antiport (regulerer pH)
- $Na^+$ inn, $H^+$ ut`,
    },
    {
      id: 'bio1-1-5-def-aktivtransport',
      type: 'definition',
      title: 'Aktiv transport',
      content: 'Aktiv transport er bevegelse av stoffer over cellemembranen mot konsentrasjonsgradienten (fra lav til høy konsentrasjon). Dette krever energi, vanligvis i form av ATP. Primær aktiv transport bruker ATP direkte (f.eks. Na+/K+-pumpen), mens sekundær aktiv transport utnytter iongradienter skapt av primær transport.',
    },
    {
      id: 'bio1-1-5-vesikler',
      type: 'text',
      content: `## Vesikkeltransport

For store partikler og mengder som ikke kan passere gjennom membranproteiner.

### Endocytose (inn i cellen)

**Fagocytose ("cellespising"):**
- Opptak av store partikler (bakterier, cellerester)
- Membranen omslutter partikkelen
- Danner fagosom som fusjonerer med lysosom
- Viktig for immunforsvaret (makrofager)

**Pinocytose ("celledrikking"):**
- Opptak av vaske med loste stoffer
- Kontinuerlig prosess i de fleste celler
- Uspesifikt opptak

**Reseptormediert endocytose:**
- Spesifikt opptak via reseptorer
- Reseptorer samles i klatrinbelagte groper
- Eksempel: Opptak av LDL-kolesterol

### Eksocytose (ut av cellen)

- Vesikler fusjonerer med plasmamembranen
- Innholdet frigjøres utenfor cellen

**Funksjoner:**
- Sekresjon av proteiner (f.eks. hormoner, enzymer)
- Frigjoring av nevrotransmittere
- Tilbakeforing av membran fra endocytose`,
    },
    {
      id: 'bio1-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Osmose i rode blodceller',
      problem: 'Hva skjer med rode blodceller (erytrocytter) nar de plasseres i a) destillert vann, b) 0,9% NaCl-løsning (fysiologisk saltvann), og c) 10% NaCl-løsning?',
      solution: `**Løsning:**

**a) Destillert vann (hypotont):**
- Vannkonsentrasjonen er hoyere utenfor cellen
- Vann strommer INN i cellen via osmose
- Cellen sveller og kan til slutt sprekke (hemolysis)
- Hemoglobin frigjøres til løsningen

**b) 0,9% NaCl (isotont):**
- Samme osmolaritet som cellens cytoplasma
- Ingen netto vannbevegelse
- Cellen beholder sin normale form (bikonkav skive)
- Dette er "fysiologisk saltvann" brukt i medisin

**c) 10% NaCl (hypertont):**
- Vannkonsentrasjonen er lavere utenfor cellen
- Vann strommer UT av cellen
- Cellen krymper og far pigget overflate (krenasjon)
- Cellens funksjoner hemmes

**Klinisk relevans:**
- Intravenøse væsker må være isotone (0,9% NaCl eller 5% glukose)
- Hypertone løsninger brukes for å trekke ut væske (f.eks. ved hjerneødem)
- Hypotone løsninger kan være farlige ved rask infusjon`,
    },
    {
      id: 'bio1-1-5-example-2',
      type: 'example',
      title: 'Eksempel: Na+/K+-pumpen og nerveceller',
      problem: 'Forklar hvorfor Na+/K+-pumpen er sa viktig for nervecellers funksjon.',
      solution: `**Løsning:**

**Na+/K+-pumpens aktivitet:**
- Pumper 3 $Na^+$ ut av cellen
- Pumper 2 $K^+$ inn i cellen
- Bruker 1 ATP per syklus

**Konsentrasjonsgradienter som opprettes:**

| Ion | Inne i cellen | Utenfor cellen |
|-----|---------------|----------------|
| $Na^+$ | 10-15 mM | 140 mM |
| $K^+$ | 140 mM | 4 mM |

**Betydning for nervesignaler:**

1) **Hvilemembranpotensial:**
   - Pumpen bidrar til at innsiden er negativ (-70 mV)
   - Nodvendig for at nerven kan "fyre"

2) **Aksjonspotensial:**
   - $Na^+$-kanaler apnes → $Na^+$ strommer inn
   - Membranpotensial blir positivt (depolarisering)
   - $K^+$-kanaler apnes → $K^+$ strommer ut
   - Membranpotensial gjenopprettes (repolarisering)

3) **Gjenopprettelse:**
   - Etter mange aksjonspotensialer
   - Pumpen reetablerer iongradientene
   - Klargjor nerven for nye signaler

**Konsekvens av pumpesvikt:**
- Gradientene utjevnes gradvis
- Nervesignalering stopper
- Celle sveller (osmoregulering pavirkes)`,
    },
    {
      id: 'bio1-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

| Transporttype | Energi | Retning | Eksempler |
|---------------|--------|---------|-----------|
| **Enkel diffusjon** | Nei | Med gradient | $O_2$, $CO_2$ |
| **Osmose** | Nei | Med gradient | Vann |
| **Fasilitert diffusjon** | Nei | Med gradient | Glukose (GLUT), ioner (kanaler) |
| **Primaer aktiv** | ATP | Mot gradient | $Na^+/K^+$-pumpe |
| **Sekundaer aktiv** | Iongradient | Mot gradient | $Na^+$/glukose-symport |
| **Endocytose** | ATP | Inn | Fagocytose, pinocytose |
| **Eksocytose** | ATP | Ut | Hormonsekresjon |

**Nokkelpunkter:**
- Passiv transport folger konsentrasjonsgradienten, aktiv gar mot
- Osmose styrer cellens vannbalanse - viktig for cellens overlevelse
- Na+/K+-pumpen er fundamental for nervefunksjon og osmoregulering
- Vesikkeltransport lar cellen ta opp og skille ut store mengder`,
    },
  ],
  exercises: [
    {
      id: 'bio1-1-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken transporttype krever energi (ATP)?',
      options: [
        { id: 'a', text: 'Aktiv transport', isCorrect: true },
        { id: 'b', text: 'Enkel diffusjon', isCorrect: false },
        { id: 'c', text: 'Osmose', isCorrect: false },
        { id: 'd', text: 'Fasilitert diffusjon', isCorrect: false },
      ],
      solution: 'Aktiv transport krever energi (ATP) fordi stoffer flyttes mot konsentrasjonsgradienten. De andre alternativene er passive transportformer som folger gradienten og ikke krever energi fra cellen.',
    },
    {
      id: 'bio1-1-5-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skjer med en dyrecelle i en hyperton løsning?',
      options: [
        { id: 'a', text: 'Cellen krymper', isCorrect: true },
        { id: 'b', text: 'Cellen sveller', isCorrect: false },
        { id: 'c', text: 'Cellen forblir uendret', isCorrect: false },
        { id: 'd', text: 'Cellen deler seg', isCorrect: false },
      ],
      solution: 'I en hyperton løsning (hoyere lostoffkonsentrasjon enn cellen) vil vann stromme UT av cellen via osmose. Dette forer til at cellen krymper (krenasjon i rode blodceller).',
    },
    {
      id: 'bio1-1-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom enkel diffusjon og fasilitert diffusjon.',
      solution: '**Enkel diffusjon:**\n- Stoffer passerer direkte gjennom fosfolipiddobbeltlaget\n- Ingen proteiner involvert\n- Kun for sma, upolare molekyler ($O_2$, $CO_2$) og noen sma polare ($H_2O$, etanol)\n- Transporthastighe oker lineaert med konsentrasjonsforskjell\n- Kan ikke mettes\n\n**Fasilitert diffusjon:**\n- Stoffer passerer via membranproteiner (kanaler eller transportorer)\n- Nodvendig for store, polare molekyler og ioner\n- Eksempler: glukose via GLUT, ioner via ionkanaler\n- Spesifikt - hver transporter for bestemte stoffer\n- Kan mettes (begrenset antall transportproteiner)\n- Transporthastighe flater ut ved hoye konsentrasjoner\n\n**Felles:**\n- Begge er passive (ingen ATP nodvendig)\n- Begge folger konsentrasjonsgradienten\n- Begge fortsetter til likevekt',
    },
    {
      id: 'bio1-1-5-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Na+/K+-pumpen transporterer per ATP-molekyl:',
      options: [
        { id: 'a', text: '3 Na+ ut og 2 K+ inn', isCorrect: true },
        { id: 'b', text: '2 Na+ ut og 3 K+ inn', isCorrect: false },
        { id: 'c', text: '3 Na+ inn og 2 K+ ut', isCorrect: false },
        { id: 'd', text: '2 Na+ inn og 2 K+ ut', isCorrect: false },
      ],
      solution: 'Na+/K+-ATPasen pumper 3 natriumioner UT av cellen og 2 kaliumioner INN i cellen per ATP-molekyl som hydrolyseres. Dette opprettholder iongradienter som er viktige for nervesignaler og osmoregulering.',
    },
    {
      id: 'bio1-1-5-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom fagocytose, pinocytose og reseptormediert endocytose.',
      solution: '**Fagocytose ("cellespising"):**\n- Opptak av store partikler (bakterier, cellerester)\n- Membranen omslutter partikkelen med pseudopodier\n- Danner stort fagosom\n- Utfores av spesialiserte celler (makrofager, notrofiler)\n- Viktig for immunforsvaret\n\n**Pinocytose ("celledrikking"):**\n- Opptak av vaske med loste stoffer\n- Sma vesikler dannes kontinuerlig\n- Uspesifikt - tar opp alt som er i naerheten\n- Skjer i nesten alle celler\n- Viktig for naeringsstoffopptak\n\n**Reseptormediert endocytose:**\n- Spesifikt opptak via reseptorer pa overflaten\n- Reseptorer gjenkjenner bestemte ligander\n- Reseptor-ligand-komplekser samles i klatrinbelagte groper\n- Nodvendig for effektivt opptak av spesifikke stoffer\n- Eksempel: LDL-opptak via LDL-reseptor\n\n**Felles:** Alle danner vesikler som bringer materiale inn i cellen og krever ATP.',
    },
    {
      id: 'bio1-1-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva sekundaer aktiv transport er, og gi et eksempel pa hvordan det fungerer i tarmen for a ta opp glukose.',
      solution: '**Sekundaer aktiv transport:**\nSekundaer aktiv transport bruker energien lagret i en iongradient (vanligvis Na+) til a drive transport av et annet molekyl mot dets konsentrasjonsgradient. Iongradienten opprettes av primaer aktiv transport (Na+/K+-pumpen).\n\n**Eksempel: Glukoseopptak i tarmen**\n\n**Trinn 1 - Na+/K+-pumpen (basol membran):**\n- Pumper Na+ ut av tarmcellen\n- Skaper lav Na+-konsentrasjon inne i cellen\n- Bruker ATP (primaer aktiv transport)\n\n**Trinn 2 - SGLT1 (apikal membran, mot tarmlumen):**\n- Na+/glukose-symporter (kotransportor)\n- Na+ strommer inn i cellen nedover sin gradient\n- Energien fra Na+-strommen brukes til a dra glukose mot sin gradient\n- 2 Na+ og 1 glukose tas opp sammen\n- Glukosen gar fra tarmlumen (hoy konsentrasjon etter maltid) til cellen\n\n**Trinn 3 - GLUT2 (basolateral membran):**\n- Fasilitert diffusjon\n- Glukose forlater cellen til blodet\n- Folger konsentrasjonsgradienten\n\n**Betydning:**\nDette systemet lar tarmen ta opp glukose selv nar konsentrasjonen i tarmen er lavere enn i blodet - viktig for effektiv naeringsutnyttelse.',
    },
  ],
};

// ============================================================================
// Kapittel 1.6: Cellekommunikasjon og signaloverføring
// ============================================================================

export const CHAPTER_BIOLOGI_1_1_6: TextbookChapter = {
  id: 'biologi-1-1-6',
  courseId: 'biologi-1',
  chapterNumber: '1.6',
  title: 'Cellekommunikasjon og signaloverføring',
  description: 'Hvordan celler kommuniserer via signalmolekyler og membranreseptorer, signaltransduksjon og sekundaere budbringere.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for hvordan cellulære membraner danner grunnlag for kommunikasjon mellom celler',
    'beskrive ulike typer cellekommunikasjon og signaloverføring',
    'forklare signaltransduksjon med reseptorer, sekundaere budbringere og cellulær respons',
  ],
  content: [
    {
      id: 'bio1-1-6-intro',
      type: 'text',
      content: `# Cellekommunikasjon og signaloverføring

Cellene i kroppen må kommunisere med hverandre for at organismen skal fungere som en helhet. En muskelcelle må vite når den skal trekke seg sammen, en immunforsvarscelle må vite når det er en infeksjon, og en celle må vite når den skal dele seg – eller slutte å dele seg.

## Hvorfor er cellekommunikasjon viktig?

Cellekommunikasjon er grunnlaget for:
- **Utvikling**: Fra befruktet egg til ferdig organisme – cellene må koordinere differensiering og vekst
- **Homeostase**: Regulering av blodsukker, temperatur og pH krever signaler mellom celler
- **Immunforsvar**: Immunceller må kommunisere for å koordinere angrep på patogener
- **Nervesystemet**: Nervesignaler er en spesialisert form for cellekommunikasjon
- **Kreft**: Når cellekommunikasjonen svikter, kan celler dele seg ukontrollert

Cellemembranen spiller en sentral rolle i kommunikasjonen fordi den både mottar signaler utenfra (via reseptorer) og sender signaler videre inn i cellen (via signaltransduksjon).`,
    },
    {
      id: 'bio1-1-6-def-1',
      type: 'definition',
      title: 'Cellekommunikasjon',
      content: '**Cellekommunikasjon** (cellesignalering) er prosessen der celler sender, mottar og tolker kjemiske signaler. Den følger vanligvis tre trinn: (1) **Signalering** – en celle sender ut et signalmolekyl (ligand). (2) **Mottak** – en målcelle gjenkjenner signalet via en spesifikk reseptor. (3) **Respons** – cellen endrer atferd, for eksempel ved å aktivere enzymer, endre genekspresjon eller dele seg.',
    },
    {
      id: 'bio1-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Adrenalin og kamp-eller-flukt-responsen',
      problem: 'Når du plutselig blir skremt, frigjør binyrene adrenalin. Forklar hvordan dette signalet når fram til og påvirker hjertemuskelcellene.',
      solution: `**Løsning:**

1. **Signalering**: Binyremargen (signalcellen) skiller ut adrenalin til blodet
2. **Transport**: Adrenalin transporteres med blodet til hele kroppen (endokrin signalering)
3. **Mottak**: Hjertemuskelcellene har beta-adrenerge reseptorer (G-proteinkoblede reseptorer) på cellemembranen
4. **Gjenkjenning**: Adrenalin binder seg til reseptoren – kun celler med riktig reseptor responderer
5. **Signaltransduksjon**: Reseptoren aktiverer et G-protein → adenylatsyklase → cAMP dannes (sekundær budbringer)
6. **Respons**: cAMP aktiverer proteinkinaser som øker hjertets slagfrekvens og slagkraft

Celler uten beta-adrenerge reseptorer (f.eks. mange benceller) påvirkes ikke av adrenalinet, selv om det når dem via blodet. Det er reseptoren som avgjør om cellen responderer.`,
    },
    {
      id: 'bio1-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-1-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Kva er dei tre hovudtrinna i cellekommunikasjon?',
        options: [
          { id: 'a', text: 'Signalering, mottak (resepsjon) og respons', isCorrect: true },
          { id: 'b', text: 'Diffusjon, osmose og aktiv transport', isCorrect: false },
          { id: 'c', text: 'Transkripsjon, translasjon og modifisering', isCorrect: false },
          { id: 'd', text: 'Mitose, meiose og cytokinese', isCorrect: false },
        ],
        solution: 'Cellekommunikasjon følger tre trinn: (1) Signalering – cellen sender ut et signalmolekyl (ligand). (2) Mottak – målcellen gjenkjenner signalet via en reseptor. (3) Respons – cellen endrer atferd basert på signalet. Alle tre trinna er nødvendige for at kommunikasjonen skal fungere.',
      },
    },
    {
      id: 'bio1-1-6-def-2',
      type: 'definition',
      title: 'Typer cellekommunikasjon',
      content: `Celler kommuniserer på ulike måter avhengig av avstanden mellom sender og mottaker:

- **Endokrin signalering**: Signalmolekyler (hormoner) fraktes med blodet til fjerne målceller. Eksempel: insulin fra bukspyttkjertelen påvirker lever- og muskelceller.
- **Parakrin signalering**: Signalmolekyler påvirker nærliggende celler. Eksempel: vekstfaktorer som stimulerer sårheling.
- **Autokrin signalering**: Cellen sender signaler til seg selv. Eksempel: T-celler som produserer interleukin-2 for å stimulere sin egen deling.
- **Synaptisk signalering**: Nevrotransmittere frigjøres i synapsen og påvirker nærliggende nerveceller. Eksempel: acetylkolin ved nerve-muskel-overgangen.
- **Direkte kontakt (juxtakrin)**: Celler kommuniserer gjennom direkte membran-til-membran-kontakt eller via gap junctions. Eksempel: immunresponsen der T-celler gjenkjenner antigener på andre cellers overflate.`,
    },
    {
      id: 'bio1-1-6-example-2',
      type: 'example',
      title: 'Eksempel: Parakrin vs. endokrin signalering',
      problem: 'Forklar forskjellen mellom parakrin og endokrin signalering med eksempler fra kroppen.',
      solution: `**Løsning:**

**Parakrin signalering:**
- Signalet når kun nærliggende celler
- Signalmolekylene brytes raskt ned og når ikke langt
- Eksempel: Ved en skade frigjør skadde celler histamin, som får nærliggende blodårer til å utvide seg (betennelsesreaksjon). Histaminet påvirker bare det lokale området
- Rask, lokal effekt

**Endokrin signalering:**
- Signalet (hormonet) transporteres med blodet til hele kroppen
- Kun celler med riktig reseptor påvirkes
- Eksempel: Skjoldbruskkjertelen skiller ut tyroksin som transporteres til alle kroppens celler og regulerer stoffskiftet
- Langsommere, men global effekt

**Hovudforskjell**: Parakrin signalering er lokal (nærliggende celler), endokrin er global (hele kroppen via blodet). Begge bruker kjemiske signalmolekyler, men rekkevidden er ulik.`,
    },
    {
      id: 'bio1-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar med eigne ord kvifor det er viktig at signalmolekyler i parakrin signalering brytes raskt ned.',
        hints: ['Tenk på kva som hadde skjedd dersom signalet spreidde seg til heile kroppen'],
        solution: 'Dersom parakrine signalmolekyler ikkje vart brotne ned raskt, ville dei spreie seg med blodet og påverke celler langt frå det opphavlege området. Histamin ved ein liten skade ville då føre til betennelsesreaksjon i heile kroppen, ikkje berre lokalt. Rask nedbrytning sikrar at signalet er presist og lokalt – berre cellene i nærleiken responderer. Dette er ein vesentleg forskjell frå endokrin signalering, der hormona nettopp er laga for å overleve lang transport i blodet.',
      },
    },
    {
      id: 'bio1-1-6-def-3',
      type: 'definition',
      title: 'Signaltransduksjon og membranreseptorer',
      content: `**Signaltransduksjon** er prosessen der eit ytre signal (ligand) blir omsett til ein intracellulær respons. Membranen speler ein nøkkelrolle fordi dei fleste signalmolekyler ikkje kan passere lipiddobbeltlaget – dei treng reseptorer i membranen.

Tre hovudtypar membranreseptorer:

1. **G-proteinkopla reseptorar (GPCR)**: Den største reseptorfamilien. Liganden aktiverer eit G-protein på innsida av membranen, som igjen aktiverer enzym (t.d. adenylatsyklase → cAMP). Eksempel: adrenalinreseptoren.

2. **Reseptor-tyrosinkinasar (RTK)**: Enzymkopla reseptorar som fosforylerer seg sjølv og aktiverer intracellulære signalvegar. Viktig for vekstfaktorar (t.d. insulinreseptoren).

3. **Ligandstyrt ionekanalerr**: Opnar seg når ein ligand bind seg og slepper ionar gjennom. Fører til rask endring i membranpotensialet. Eksempel: acetylkolinreseptoren ved synapse.`,
    },
    {
      id: 'bio1-1-6-example-3',
      type: 'example',
      title: 'Eksempel: cAMP som sekundær budbringer',
      problem: 'Forklar korleis cAMP fungerer som sekundær budbringer i ein signaltransduksjonskaskade.',
      solution: `**Løsning:**

**Steg-for-steg signalkaskade:**

1. **Ligand bind reseptor**: Eit hormon (førstebudbringer) bind seg til ein G-proteinkopla reseptor i cellemembranen
2. **G-protein aktiverast**: Reseptoren endrar form og aktiverer eit G-protein på innsida av membranen
3. **Adenylatsyklase aktiverast**: G-proteinet aktiverer enzymet adenylatsyklase i membranen
4. **cAMP dannast**: Adenylatsyklase omdannar ATP til cAMP (syklisk adenosinmonofosfat) – dette er den sekundære budbringaren
5. **Signalforsterking**: Eitt aktivert enzym lagar mange cAMP-molekyl → forsterking av signalet
6. **Proteinkinase A aktiverast**: cAMP aktiverer proteinkinase A (PKA)
7. **Cellulær respons**: PKA fosforylerer målprotein → endrar cellens oppførsel

**Kvifor «sekundær budbringer»?**
Hormonet (førstebudbringaren) når ikkje inn i cellen. cAMP er den intracellulære budbringaren som overfører signalet vidare inne i cellen. Eitt hormolmolekyl kan via denne kaskaden aktivere tusenvis av enzym – enorm signalforsterking.

**Nedregulering**: Enzymet fosfodiesterase bryt ned cAMP, slik at signalet ikkje varer for lenge.`,
    },
    {
      id: 'bio1-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-1-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Kvifor kan ikkje vassløyselege hormon (som insulin) passere cellemembranen direkte?',
        options: [
          { id: 'a', text: 'Fordi det hydrofobe indre av lipiddobbeltlaget avviser polare molekyl', isCorrect: true },
          { id: 'b', text: 'Fordi dei er for små til å bli gjenkjent', isCorrect: false },
          { id: 'c', text: 'Fordi membranen ikkje har plass til dei', isCorrect: false },
          { id: 'd', text: 'Fordi dei mangler energi til aktiv transport', isCorrect: false },
        ],
        solution: 'Cellemembranen har eit hydrofobt (vasskyande) indre beståande av fettsyrehalane i fosfolipida. Vassløyselege (hydrofile/polare) molekyl som peptidhormon (insulin, adrenalin) kan ikkje passere denne hydrofobe barrieren. Dei treng difor reseptorar på celleoverflata for å sende signalet vidare inn i cellen via signaltransduksjon. Feittløyselege hormon (som steroidhormon) kan derimot passere membranen direkte og bind seg til intracellulære reseptorar.',
      },
    },
    {
      id: 'bio1-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar kvifor signalforsterking er ein viktig eigenskap ved signaltransduksjonskaskader.',
        hints: ['Tenk på kva som skjer i kvart trinn av kaskaden', 'Eit enzym kan omdanne mange substratmolekyl'],
        solution: 'I ein signalkaskade aktiverer kvart trinn mange molekyl i neste trinn: Eitt hormolmolekyl aktiverer ein reseptor → ein reseptor aktiverer fleire G-protein → kvart G-protein aktiverer eit adenylatsyklase → kvart adenylatsyklase lagar mange cAMP → mange cAMP aktiverer mange proteinkinasar → kvar proteinkinase fosforylerer mange målprotein. Slik kan eitt enkelt hormolmolekyl på celleoverflata utløyse ein massiv respons inne i cellen. Dette er viktig fordi hormonkonsentrasjonane i blodet er svært låge (nanomolaar), og utan forsterking ville signalet være for svakt til å ha effekt.',
      },
    },
    {
      id: 'bio1-1-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Cellekommunikasjon** følger tre hovudtrinn: signalering, mottak og respons
- **Fem typar signalering**: endokrin (blodet), parakrin (lokalt), autokrin (seg sjølv), synaptisk (synapse) og juxtakrin (direkte kontakt)
- **Membranreseptorar** er nødvendige fordi dei fleste signalmolekyl ikkje kan passere lipiddobbeltlaget
- **Tre reseptortypar**: G-proteinkopla (GPCR), reseptor-tyrosinkinasar (RTK) og ligandstyrt ionekanalar
- **Signaltransduksjon**: ytre signal → membranreseptor → intracellulær kaskade → cellulær respons
- **Sekundære budbringarar** (cAMP, kalsium) forsterkar signalet enormt inne i cellen
- **Signalforsterking**: Ein ligand kan aktivere tusenvis av effektormolekyl gjennom kaskaden

| Signaltype | Rekkevidde | Hastigheit | Eksempel |
|------------|-----------|------------|----------|
| Endokrin | Global (blod) | Sekund–minutt | Insulin, adrenalin |
| Parakrin | Lokal | Sekund | Histamin, vekstfaktorar |
| Autokrin | Sjolv | Sekund | Interleukin-2 |
| Synaptisk | Synapse | Millisekund | Acetylkolin |
| Juxtakrin | Kontakt | Varierer | T-celle–antigenpresentasjon |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-1-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samanlikn korleis vassløyselege hormon (t.d. adrenalin) og fettløyselege hormon (t.d. østrogen) sender signala sine til cella. Kvifor treng vassløyselege hormon membranreseptorar, medan fettløyselege ikkje gjer det?',
        hints: ['Tenk på oppbygginga av cellemembranen', 'Kva for eigenskap avgjer om eit molekyl kan passere lipiddobbeltlaget?'],
        solution: 'Vassløyselege hormon (peptidhormon som adrenalin og insulin) er polare molekyl som ikkje kan passere det hydrofobe indre av lipiddobbeltlaget. Dei bind seg til reseptorar på celleoverflata (t.d. GPCR) og utløyser signaltransduksjon via sekundære budbringarar (cAMP). Signalet er raskt men kortvarig. Fettløyselege hormon (steroidhormon som østrogen, testosteron, kortisol) er hydrofobe og kan passere direkte gjennom cellemembranen. Dei bind seg til intracellulære reseptorar (ofte i cellekjernen) og påverkar genekspresjon direkte. Signalet er langsommare men meir langvarig. Skilnaden kjem av membranens oppbygging: det hydrofobe indre slepp berre gjennom hydrofobe molekyl.',
      },
    },
    {
      id: 'bio1-1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-1-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Mange kreftceller har mutasjonar i gen som kodar for vekstfaktorreseptorar eller protein i signalkaskaden. Forklar korleis ein mutasjon som gjer ein reseptor konstant aktiv (utan ligand) kan bidra til kreftutvikling.',
        hints: ['Kva signal gir vekstfaktorar normalt?', 'Kva skjer når signalet aldri stoppar?'],
        solution: 'Normalt bind vekstfaktorar seg til reseptorar (t.d. RTK) og sender eit signal om celledeling. Når vekstfaktoren forsvinn, stoppar signalet og cella sluttar å dele seg. Ein mutasjon som gjer reseptoren konstant aktiv betyr at cella heile tida får signal om å dele seg – sjølv utan vekstfaktor. Dette fører til ukontrollert celledeling, eit kjenneteikn ved kreft. Eksempel: HER2-reseptoren er overuttrykt i ca. 20% av brystkreft-tilfelle, noko som gir konstant vekstsignal. Kreftmedisinen trastuzumab (Herceptin) blokkerer denne reseptoren. Dette viser korleis forståing av cellekommunikasjon er direkte relevant for kreftbehandling.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Ligand', definition: 'Signalmolekyl som bind seg til ein spesifikk reseptor og utløyser ein respons' },
    { term: 'Reseptor', definition: 'Protein som gjenkjenner og bind eit spesifikt signalmolekyl' },
    { term: 'Signaltransduksjon', definition: 'Prosessen der eit ytre signal vert omsett til ein intracellulær respons' },
    { term: 'GPCR', definition: 'G-proteinkopla reseptor – den største familien av membranreseptorar' },
    { term: 'Sekundær budbringer', definition: 'Intracellulært signalmolekyl (t.d. cAMP, kalsium) som formidlar og forsterkar signalet' },
    { term: 'Signalforsterking', definition: 'Kaskadeeffekt der eitt signalmolekyl aktiverer mange effektormolekyl' },
    { term: 'Parakrin signalering', definition: 'Kommunikasjon med nærliggjande celler via lokale signalmolekyl' },
  ],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const BIOLOGI_1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_1_1,
  CHAPTER_BIOLOGI_1_1_2,
  CHAPTER_BIOLOGI_1_1_3,
  CHAPTER_BIOLOGI_1_1_4,
  CHAPTER_BIOLOGI_1_1_5,
  CHAPTER_BIOLOGI_1_1_6,
];
