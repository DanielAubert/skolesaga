/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - DEL 4
 * Kapittel 4: Celledeling (utvidet til 4 delkapitler)
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Cellesyklus
// ============================================================================

export const CHAPTER_BIOLOGI_1_4_1: TextbookChapter = {
  id: 'biologi-1-4-1',
  courseId: 'biologi-1',
  chapterNumber: '4.1',
  title: 'Cellesyklus',
  description: 'G1-, S-, G2- og M-fase, kontrollpunkter og regulering av cellesyklus.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive cellesyklus og dens faser',
    'forklare betydningen av kontrollpunkter',
    'gjøre rede for regulering av celledeling',
  ],
  content: [
    {
      id: 'bio1-4-1-intro',
      type: 'text',
      content: `# Cellesyklus

Cellesyklus er den ordnede sekvensen av hendelser som fører til at en celle vokser og deler seg i to datterceller. Denne prosessen er fundamental for all vekst, utvikling og vedlikehold av levende organismer.

## Hvorfor er celledeling viktig?

- **Vekst**: Organismer vokser ved at cellene deler seg
- **Vedlikehold**: Erstatte døde eller skadede celler
- **Reproduksjon**: Enkeltcellede organismer formerer seg ved celledeling
- **Utvikling**: Fra befruktet egg til fullvoksen organisme

En typisk menneskecelle kan dele seg omtrent 50-60 ganger før den når sin "Hayflick-grense" og går inn i aldring (senescence).`,
    },
    {
      id: 'bio1-4-1-def-cellesyklus',
      type: 'definition',
      title: 'Cellesyklus',
      content: 'Cellesyklus er den ordnede sekvensen av hendelser fra en celledeling til den neste. Den består av interfase (G1, S, G2) der cellen vokser og kopierer sitt DNA, og M-fase der cellen deler seg. En typisk cellesyklus tar 12-24 timer i humane celler, men kan variere fra minutter (bakterier) til måneder (noen voksne celler).',
    },
    {
      id: 'bio1-4-1-faser',
      type: 'text',
      content: `## Cellesyklusens faser

### Interfase (ca. 90% av syklus)

**G1-fasen (Gap 1)**
- Cellen vokser og utfører normale funksjoner
- Produksjon av proteiner og organeller
- Cellen "bestemmer" om den skal dele seg
- Varighet: 8-12 timer

**S-fasen (Syntese)**
- DNA-replikasjon - hele genomet kopieres
- Hvert kromosom blir til to søsterkromatider
- Sentriolene dupliseres
- Varighet: 6-8 timer

**G2-fasen (Gap 2)**
- Fortsatt vekst og proteinsyntese
- Syntese av proteiner for celledeling
- Kontroll av at DNA er korrekt kopiert
- Varighet: 3-4 timer

### M-fase (Mitotisk fase)

**Mitose**: Kjernen deler seg
**Cytokinese**: Cytoplasmaet deler seg

Varighet: ca. 1 time`,
    },
    {
      id: 'bio1-4-1-def-g0',
      type: 'definition',
      title: 'G0-fasen (hvilefase)',
      content: 'G0-fasen er en tilstand der celler har forlatt den aktive cellesyklus og ikke deler seg. Noen celler (som nerveceller og muskelceller) forblir permanent i G0. Andre celler kan gå tilbake til G1 og dele seg igjen når de stimuleres av vekstsignaler. Celler i G0 er metabolsk aktive, men deltar ikke i DNA-replikasjon eller celledeling.',
    },
    {
      id: 'bio1-4-1-kontrollpunkter',
      type: 'text',
      content: `## Kontrollpunkter i cellesyklus

Kontrollpunkter er "sjekkpunkter" der cellen evaluerer om forholdene er gunstige for å fortsette til neste fase.

### G1-kontrollpunkt (restriksjonsunkt)
- **Sjekker**: Er cellen stor nok? Er det nok næringsstoffer? Er det vekstsignaler tilstede? Er DNA uskadet?
- **Beslutning**: Gå videre til S-fase eller inn i G0
- Dette er det viktigste beslutningspunktet

### G2-kontrollpunkt
- **Sjekker**: Er DNA-replikasjonen fullført? Er det DNA-skader?
- **Beslutning**: Gå videre til mitose eller stoppe for reparasjon

### Spindel-kontrollpunkt (M-fase)
- **Sjekker**: Er alle kromosomer festet til spindelfibre?
- **Beslutning**: Fortsette med anafase eller vente
- Sikrer at dattercellene får riktig antall kromosomer`,
    },
    {
      id: 'bio1-4-1-regulering',
      type: 'text',
      content: `## Regulering av cellesyklus

### Nøkkelmolekyler

**Sykliner**
- Proteiner som varierer i mengde gjennom cellesyklus
- Aktiverer CDK-enzymer
- Ulike sykliner for ulike faser

**CDK (syklinavhengige kinaser)**
- Enzymer som er aktive når de binder sykliner
- Fosforylerer (aktiverer/deaktiverer) målproteiner
- Driver cellen gjennom kontrollpunkter

### Syklin-CDK-komplekser

| Kompleks | Fase | Funksjon |
|----------|------|----------|
| Syklin D-CDK4/6 | G1 | Passere G1-kontrollpunkt |
| Syklin E-CDK2 | G1/S | Initiere DNA-replikasjon |
| Syklin A-CDK2 | S | Fullføre replikasjon |
| Syklin B-CDK1 | G2/M | Starte mitose |

### Vekstfaktorer og signalering
Ytre signaler som vekstfaktorer binder til reseptorer og aktiverer signalveier som fremmer celledeling. Eksempel: EGF (epidermal growth factor) stimulerer hudceller til å dele seg for sårheling.`,
    },
    {
      id: 'bio1-4-1-def-cdk',
      type: 'definition',
      title: 'CDK (syklinavhengige kinaser)',
      content: 'CDK-er er enzymer som regulerer cellesyklus ved å fosforylere målproteiner. De er bare aktive når de er bundet til et syklin-protein. Ulike syklin-CDK-komplekser driver cellen gjennom ulike faser av cellesyklus. Feil i CDK-regulering kan føre til ukontrollert celledeling og kreft.',
    },
    {
      id: 'bio1-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Hva skjer ved DNA-skade i G1?',
      problem: 'En celle i G1-fasen utsettes for UV-stråling som skader DNA. Beskriv hva som skjer med cellesyklus.',
      solution: `**Løsning:**

**Deteksjon av skade:**
- DNA-skaden aktiverer sensorproteiner (ATM/ATR)
- Disse aktiverer p53 (tumorsuppressorprotein)

**Respons via p53:**
1. p53 aktiverer transkripsjon av p21
2. p21 hemmer syklin-CDK-komplekser
3. Cellesyklus stopper i G1

**Utfall:**
- **Reparasjon**: Hvis skaden kan repareres, fortsetter cellen
- **Permanent stopp**: Cellen går inn i senescence (aldring)
- **Apoptose**: Ved alvorlig skade dør cellen programmert

**Betydning:**
Dette forhindrer at celler med skadet DNA deler seg og potensielt utvikler seg til kreft.`,
    },
    {
      id: 'bio1-4-1-example-2',
      type: 'example',
      title: 'Eksempel: Cellesyklustid',
      problem: 'En hudcelle har følgende fasevariget: G1 = 10 timer, S = 7 timer, G2 = 4 timer, M = 1 time. a) Hvor lang er hele cellesyklus? b) Hvor stor andel av tiden brukes på interfase?',
      solution: `**Løsning:**

**a) Total cellesyklustid:**
G1 + S + G2 + M = 10 + 7 + 4 + 1 = **22 timer**

**b) Andel interfase:**
Interfase = G1 + S + G2 = 10 + 7 + 4 = 21 timer

Andel = 21/22 = **95,5%** av cellesyklus

**Kommentar:**
Dette viser at mitosen (selve celledelingen) utgjør en liten del av cellesyklus. Mesteparten av tiden brukes på vekst og DNA-replikasjon.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-4-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'I hvilken fase av cellesyklus skjer DNA-replikasjon?',
      options: [
        { id: 'a', text: 'S-fasen', isCorrect: true },
        { id: 'b', text: 'G1-fasen', isCorrect: false },
        { id: 'c', text: 'G2-fasen', isCorrect: false },
        { id: 'd', text: 'M-fasen', isCorrect: false },
      ],
      solution: 'DNA-replikasjon skjer i S-fasen (syntesefasen). Etter S-fasen har hver kromosom to identiske søsterkromatider.',
    },
    {
      id: 'bio1-4-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva G1-kontrollpunktet (restriksjonspunktet) sjekker, og hvorfor dette kontrollpunktet er viktig.',
      solution: 'G1-kontrollpunktet sjekker: 1) Er cellen stor nok? 2) Er det tilstrekkelig med næringsstoffer? 3) Er det vekstsignaler tilstede? 4) Er DNA uskadet? Dette kontrollpunktet er viktig fordi det er her cellen "bestemmer" om den skal dele seg eller gå inn i G0 (hvilefase). Feil i dette kontrollpunktet kan føre til ukontrollert celledeling og kreft.',
    },
    {
      id: 'bio1-4-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er funksjonen til sykliner i cellesyklusregulering?',
      options: [
        { id: 'a', text: 'Aktivere CDK-enzymer', isCorrect: true },
        { id: 'b', text: 'Kopiere DNA', isCorrect: false },
        { id: 'c', text: 'Bryte ned kromosomer', isCorrect: false },
        { id: 'd', text: 'Danne spindelfibre', isCorrect: false },
      ],
      solution: 'Sykliner er proteiner som binder til og aktiverer CDK-enzymer (syklinavhengige kinaser). Syklin-CDK-kompleksene driver deretter cellen gjennom de ulike fasene av cellesyklus.',
    },
    {
      id: 'bio1-4-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom celler i G0-fasen og celler i G1-fasen?',
      solution: 'Celler i G1-fasen er del av den aktive cellesyklus og forbereder seg på DNA-replikasjon og deling. Celler i G0-fasen har forlatt den aktive cellesyklus og deler seg ikke. G0-celler er fortsatt metabolsk aktive (utfører sine funksjoner), men kopierer ikke DNA. Noen celler (nerveceller) forblir permanent i G0, mens andre kan gå tilbake til G1 ved stimulering.',
    },
    {
      id: 'bio1-4-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan p53-proteinet fungerer som "genomets vokter" og hvorfor det er viktig for å forhindre kreft.',
      solution: 'p53 aktiveres ved DNA-skade og fungerer som en transkripsjonsfaktor. Det kan: 1) Stoppe cellesyklus ved å aktivere p21 som hemmer CDK-er, 2) Aktivere DNA-reparasjonsenzymer, 3) Trigge apoptose (programmert celledød) ved alvorlig skade. Dette forhindrer at celler med skadet/mutert DNA deler seg. Mutasjoner i p53-genet finnes i over 50% av alle krefttilfeller, noe som viser dets kritiske rolle.',
    },
    {
      id: 'bio1-4-1-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor stor del av cellesyklus utgjør vanligvis interfase?',
      options: [
        { id: 'a', text: 'Ca. 90%', isCorrect: true },
        { id: 'b', text: 'Ca. 50%', isCorrect: false },
        { id: 'c', text: 'Ca. 10%', isCorrect: false },
        { id: 'd', text: 'Ca. 25%', isCorrect: false },
      ],
      solution: 'Interfase (G1 + S + G2) utgjør vanligvis ca. 90% av cellesyklus, mens M-fasen (mitose + cytokinese) utgjør ca. 10%. Mesteparten av tiden brukes altså på vekst og DNA-kopiering.',
    },
  ],
};

// ============================================================================
// Kapittel 4.2: Mitose
// ============================================================================

export const CHAPTER_BIOLOGI_1_4_2: TextbookChapter = {
  id: 'biologi-1-4-2',
  courseId: 'biologi-1',
  chapterNumber: '4.2',
  title: 'Mitose',
  description: 'Profase, metafase, anafase, telofase, cytokinese og mitosens biologiske betydning.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive de ulike fasene i mitose',
    'forklare cytokinese i dyre- og planteceller',
    'gjøre rede for mitosens betydning',
  ],
  content: [
    {
      id: 'bio1-4-2-intro',
      type: 'text',
      content: `# Mitose

Mitose er prosessen der en celle deler kjernen sin slik at de to dattercellene får identiske kopier av arvestoffet. Dette sikrer at alle kroppscellene (somatiske celler) har samme genetiske informasjon.

## Mitosens formål

- **Vekst**: Fra én befruktet eggcelle til trillioner av celler
- **Reparasjon**: Erstatte skadede celler (f.eks. ved sår)
- **Vedlikehold**: Kontinuerlig utskifting av celler (hud, blod, tarm)
- **Aseksuell reproduksjon**: Hos enkeltcellede organismer og noen planter

## Kromosomer før mitose

Etter S-fasen består hvert kromosom av to identiske **søsterkromatider** som er festet sammen i **sentromeren**. Under mitose separeres disse slik at hver dattercelle får én kopi av hvert kromosom.`,
    },
    {
      id: 'bio1-4-2-def-mitose',
      type: 'definition',
      title: 'Mitose',
      content: 'Mitose er en type kjerneledeling der en eukaryot celle deler kjernen slik at to genetisk identiske datterceller dannes. Prosessen består av fire faser: profase, metafase, anafase og telofase. Mitose følges vanligvis av cytokinese (deling av cytoplasmaet). Resultatet er to diploide celler med identisk kromosomtall som modercellen.',
    },
    {
      id: 'bio1-4-2-profase',
      type: 'text',
      content: `## Profase

Profase er den første og lengste fasen av mitose.

### Hendelser i profase

**I kjernen:**
- Kromatinet kondenserer til synlige kromosomer
- Hvert kromosom sees som to søsterkromatider
- Kjerneløsningen (nukleolus) forsvinner
- Kjernemembranen begynner å brytes ned

**I cytoplasmaet:**
- Sentriolene beveger seg til motsatte poler
- Spindelapparatet begynner å dannes
- Mikrotubuli stråler ut fra sentriolene (dyreceller)

### Sent i profase (prometafase)
- Kjernemembranen oppløses fullstendig
- Spindelfibre fester seg til kromosomenes kinetokorer
- Kromosomene begynner å bevege seg`,
    },
    {
      id: 'bio1-4-2-def-kinetokor',
      type: 'definition',
      title: 'Kinetokor',
      content: 'Kinetokor er en proteinstruktur som dannes på sentromeren til hvert søsterkromatid. Spindelfibrene (mikrotubuli) fester seg til kinetokoren. Hvert kromosom har to kinetokorer (én på hvert søsterkromatid), og disse fester seg til spindelfibre fra motsatte poler. Dette sikrer at søsterkromatidene trekkes til hver sin pol under anafase.',
    },
    {
      id: 'bio1-4-2-metafase',
      type: 'text',
      content: `## Metafase

Metafase er den korte fasen der kromosomene stiller seg opp.

### Kjennetegn

- Kromosomene er maksimalt kondensert
- Alle kromosomer ligger på **metafaseplaten** (ekvatorplanet)
- Spindelfibre fra hver pol er festet til kinetokorer
- **Spindel-kontrollpunktet** sjekker at alle kromosomer er riktig festet

### Spindel-kontrollpunktet

Før cellen kan gå videre til anafase, må:
- Alle kromosomer være festet til spindelfibre
- Hvert kromosom må ha spindelfibre til begge poler
- Det må være riktig tensjon i spindelen

Hvis ikke, venter cellen. Dette forhindrer feil i kromosomfordelingen.`,
    },
    {
      id: 'bio1-4-2-anafase',
      type: 'text',
      content: `## Anafase

Anafase er den fasen der søsterkromatidene separeres.

### Anafase A
- Proteiner som holder søsterkromatidene sammen (kohesiner) brytes ned
- Søsterkromatidene separeres ved sentromeren
- Hver søsterkromatid er nå et selvstendig kromosom
- Kinetokormikrotubuli forkortes

### Anafase B
- Polmikrotubuli (fra pol til pol) forlenges
- Cellens poler beveger seg fra hverandre
- Cellen strekkes

### Resultat
Ved slutten av anafase er identiske sett med kromosomer samlet ved hver pol av cellen. Mennesket har 46 kromosomer ved hver pol.`,
    },
    {
      id: 'bio1-4-2-telofase',
      type: 'text',
      content: `## Telofase

Telofase er den siste fasen av mitose - essensielt det motsatte av profase.

### Hendelser

**Ved polene:**
- Kromosomene dekondenserer tilbake til kromatin
- Kjernemembranen dannes på nytt rundt hvert kromosomsett
- Kjerneløsningen (nukleolus) dukker opp igjen

**I cytoplasmaet:**
- Spindelapparatet brytes ned
- Cellen forbereder seg på cytokinese

### Resultat
Ved slutten av telofase har cellen to separate kjerner, hver med fullstendig sett kromosomer.`,
    },
    {
      id: 'bio1-4-2-cytokinese',
      type: 'text',
      content: `## Cytokinese

Cytokinese er delingen av cytoplasmaet som følger mitose.

### I dyreceller

**Kløyvingsfure (cleavage furrow)**
- En ring av aktinfilamenter og myosin danner seg
- Ringen trekker seg sammen som et snørende belte
- Cellen snøres inn fra utsiden
- Til slutt skilles de to dattercellene

### I planteceller

**Celleplatemodning**
- Vesikler fra Golgi samles i cellens midtplan
- Vesiklene fusjonerer og danner en celleplate
- Celleplaten vokser utover til den fusjonerer med cellemembranen
- Ny cellevegg dannes

### Resultat
To separate datterceller, hver med sin kjerne og sitt cytoplasma.`,
    },
    {
      id: 'bio1-4-2-def-cytokinese',
      type: 'definition',
      title: 'Cytokinese',
      content: 'Cytokinese er delingen av cytoplasmaet som følger kjerneledeling (mitose eller meiose). I dyreceller skjer dette ved dannelse av en kløyvingsfure som snører cellen i to. I planteceller dannes en celleplate fra midten som vokser utover. Cytokinese sikrer at hver dattercelle får omtrent lik mengde cytoplasma og organeller.',
    },
    {
      id: 'bio1-4-2-betydning',
      type: 'text',
      content: `## Mitosens betydning

### For flercellete organismer

**Vekst**
- Fra én celle til milliarder
- Mennesket har ca. 37 billioner celler

**Vedlikehold og reparasjon**
- Hudceller: fornyes ca. hver 2-3 uke
- Tarmceller: fornyes ca. hver 3-5 dag
- Røde blodceller: lever ca. 120 dager

**Regenerering**
- Salamandere kan regenerere hele lemmer
- Mennesker kan regenerere lever delvis

### For enkeltcellede organismer
- Aseksuell reproduksjon
- Rask populasjonsvekst
- Alle avkom er genetisk identiske (kloner)

### Medisinsk betydning
- Sårhealing
- Kreft: ukontrollert mitose
- Stamcelleterapi`,
    },
    {
      id: 'bio1-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Identifisering av mitosefaser',
      problem: 'Du ser på en cellepreparasjon i mikroskopet og observerer følgende celler: A) Kromosomene er synlige og ligger på rekke midt i cellen. B) Kromosomene trekkes mot hver sin pol. C) To kjerner er synlige og cellen snøres inn i midten. Hvilke faser ser du?',
      solution: `**Løsning:**

**Celle A: Metafase**
- Kromosomene ligger på metafaseplaten (ekvatorplanet)
- Dette er karakteristisk for metafase
- Spindelfibre er festet fra begge poler

**Celle B: Anafase**
- Søsterkromatidene beveger seg mot polene
- Sentromerne har separert
- Cellen kan se litt strukket ut

**Celle C: Telofase/Cytokinese**
- To kjerner indikerer slutten av telofase
- Innsnøringen viser cytokinese i gang
- I dyreceller kalles dette kløyvingsfuren`,
    },
    {
      id: 'bio1-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Kromosomtall gjennom mitose',
      problem: 'En menneskecelle (2n = 46) gjennomgår mitose. Hvor mange kromosomer og kromatider er det i cellen i følgende stadier: a) G1, b) Etter S-fase, c) Metafase, d) Etter anafase?',
      solution: `**Løsning:**

**a) G1-fasen:**
- 46 kromosomer
- 46 kromatider (1 kromatid per kromosom)
- DNA-mengde: 2n

**b) Etter S-fasen (G2):**
- 46 kromosomer
- 92 kromatider (2 søsterkromatider per kromosom)
- DNA-mengde: 4n

**c) Metafase:**
- 46 kromosomer (på metafaseplaten)
- 92 kromatider
- DNA-mengde: 4n

**d) Etter anafase (i hver halvdel):**
- 46 kromosomer
- 46 kromatider
- DNA-mengde: 2n

**Nøkkel:** Antall kromosomer endres ikke før anafase, men DNA-mengden dobles i S-fasen.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-4-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'I hvilken fase av mitose stiller kromosomene seg opp på rekke midt i cellen?',
      options: [
        { id: 'a', text: 'Metafase', isCorrect: true },
        { id: 'b', text: 'Profase', isCorrect: false },
        { id: 'c', text: 'Anafase', isCorrect: false },
        { id: 'd', text: 'Telofase', isCorrect: false },
      ],
      solution: 'I metafase ligger kromosomene på metafaseplaten (ekvatorplanet) midt i cellen. Dette er den fasen der kromosomene er maksimalt kondensert og lettest å se i mikroskop.',
    },
    {
      id: 'bio1-4-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva som skjer med kjernemembranen gjennom de fire fasene av mitose.',
      solution: 'Profase: Kjernemembranen begynner å brytes ned og oppløses fullstendig i slutten av profase (prometafase). Metafase: Ingen kjernememran - kromosomene er frie i cytoplasmaet. Anafase: Fortsatt ingen kjernememran. Telofase: Kjernemembranen dannes på nytt rundt hvert sett med kromosomer ved polene, slik at cellen får to separate kjerner.',
    },
    {
      id: 'bio1-4-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skjer i anafase?',
      options: [
        { id: 'a', text: 'Søsterkromatidene separeres og trekkes mot hver sin pol', isCorrect: true },
        { id: 'b', text: 'Kromosomene kondenserer', isCorrect: false },
        { id: 'c', text: 'Kjernemembranen brytes ned', isCorrect: false },
        { id: 'd', text: 'Kromosomene stiller seg på metafaseplaten', isCorrect: false },
      ],
      solution: 'I anafase brytes kohesinproteinene ned, søsterkromatidene separeres ved sentromeren, og de trekkes mot hver sin pol av spindelfibrene. Hver søsterkromatid blir nå et selvstendig kromosom.',
    },
    {
      id: 'bio1-4-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom cytokinese i dyreceller og planteceller.',
      solution: 'I dyreceller dannes en kløyvingsfure ved at en ring av aktin og myosin trekker seg sammen fra utsiden og snører cellen i to. I planteceller kan ikke dette skje pga. celleveggen, så i stedet dannes en celleplate fra midten: vesikler fra Golgi fusjonerer og danner ny cellemembran og cellevegg som vokser utover til cellene er fullstendig separert.',
    },
    {
      id: 'bio1-4-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor spindel-kontrollpunktet er viktig og hva som kan skje hvis det svikter.',
      solution: 'Spindel-kontrollpunktet sikrer at alle kromosomer er riktig festet til spindelfibre fra begge poler før anafase. Hvis kontrollpunktet svikter, kan kromosomer fordeles feil (nondisjunction). Dette kan føre til: 1) Aneuploidi - feil antall kromosomer i dattercellene, 2) Celler med ekstra eller manglende kromosomer, 3) Økt risiko for kreft eller celledød. Eksempel: Ekstra kromosom 21 gir Downs syndrom.',
    },
    {
      id: 'bio1-4-2-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er resultatet av mitose og cytokinese?',
      options: [
        { id: 'a', text: 'To genetisk identiske datterceller', isCorrect: true },
        { id: 'b', text: 'Fire genetisk ulike datterceller', isCorrect: false },
        { id: 'c', text: 'To genetisk ulike datterceller', isCorrect: false },
        { id: 'd', text: 'Fire genetisk identiske datterceller', isCorrect: false },
      ],
      solution: 'Mitose produserer to genetisk identiske datterceller med samme kromosomtall som modercellen. Meiose derimot produserer fire genetisk ulike celler med halvparten så mange kromosomer.',
    },
  ],
};

// ============================================================================
// Kapittel 4.3: Meiose
// ============================================================================

export const CHAPTER_BIOLOGI_1_4_3: TextbookChapter = {
  id: 'biologi-1-4-3',
  courseId: 'biologi-1',
  chapterNumber: '4.3',
  title: 'Meiose',
  description: 'Meiose I og II, overkrysning, genetisk variasjon og sammenligning med mitose.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive meiose I og meiose II',
    'forklare overkrysning og uavhengig assortment',
    'gjøre rede for hvordan meiose skaper genetisk variasjon',
    'sammenligne mitose og meiose',
  ],
  content: [
    {
      id: 'bio1-4-3-intro',
      type: 'text',
      content: `# Meiose

Meiose er en spesiell type celledeling som produserer kjønnsceller (gameter) - sædceller og eggceller. I motsetning til mitose, halverer meiose kromosomtallet og skaper genetisk variasjon.

## Hvorfor trenger vi meiose?

- **Halvere kromosomtall**: Når to kjønnsceller fusjonerer ved befruktning, må summen bli riktig
- **Menneske**: 23 (eggcelle) + 23 (sædcelle) = 46 kromosomer
- **Genetisk variasjon**: Avkommet er ikke identisk med foreldrene

## Diploid vs. haploid

- **Diploid (2n)**: To sett kromosomer (ett fra hver forelder) - menneske: 2n = 46
- **Haploid (n)**: Ett sett kromosomer - menneske: n = 23
- **Homologe kromosomer**: Par av kromosomer som bærer gener for samme egenskaper`,
    },
    {
      id: 'bio1-4-3-def-meiose',
      type: 'definition',
      title: 'Meiose',
      content: 'Meiose er en type celledeling som produserer haploide kjønnsceller (gameter) fra diploide celler. Prosessen består av to delinger (meiose I og meiose II) som resulterer i fire genetisk ulike celler, hver med halvparten av kromosomtallet til modercellen. Meiose inkluderer overkrysning og uavhengig assortment som skaper genetisk variasjon.',
    },
    {
      id: 'bio1-4-3-meiose1',
      type: 'text',
      content: `## Meiose I - Reduksjonsdeling

Meiose I er delingen der kromosomtallet halveres.

### Profase I (den lengste fasen)

**Tidlig:**
- Kromatin kondenserer til kromosomer
- Kjernemembranen begynner å brytes ned

**Synapsis:**
- Homologe kromosomer parres (danner bivalenter/tetrader)
- Hvert bivalent = 4 kromatider (2 kromosomer × 2 søsterkromatider)

**Overkrysning (crossing-over):**
- Kromatider fra homologe kromosomer bytter segmenter
- Skjer ved strukturer kalt chiasmata (flertall: chiasmata)
- Skaper nye kombinasjoner av alleler
- Kritisk for genetisk variasjon!

### Metafase I
- Bivalenter stiller seg opp på metafaseplaten
- Homologe kromosomer kan orientere seg tilfeldig (uavhengig assortment)

### Anafase I
- Homologe kromosomer separeres (ikke søsterkromatider!)
- Hvert kromosom (med 2 kromatider) trekkes til en pol
- Kromosomtallet halveres

### Telofase I og cytokinese I
- Kjernemembraner kan dannes
- Cytoplasmaet deler seg
- Resultat: To celler med n kromosomer (hver med 2 kromatider)`,
    },
    {
      id: 'bio1-4-3-def-overkrysning',
      type: 'definition',
      title: 'Overkrysning (crossing-over)',
      content: 'Overkrysning er utveksling av DNA-segmenter mellom homologe kromosomer under profase I i meiose. Prosessen skjer ved chiasmata der kromatider krysser hverandre. Overkrysning bryter koblingen mellom alleler på samme kromosom og skaper nye kombinasjoner. Dette er en viktig kilde til genetisk variasjon fordi avkommet får kromosomer som er forskjellige fra begge foreldrenes.',
    },
    {
      id: 'bio1-4-3-meiose2',
      type: 'text',
      content: `## Meiose II - Likedelning

Meiose II ligner mitose, men starter med haploide celler.

### Profase II
- Kort fase
- Ny spindel dannes
- Ingen ny DNA-replikasjon!

### Metafase II
- Kromosomene (med 2 kromatider) stiller seg på metafaseplaten
- Spindelfibre fester seg til kinetokorer

### Anafase II
- Søsterkromatidene separeres
- Hver kromatid er nå et selvstendig kromosom
- Trekkes til hver sin pol

### Telofase II og cytokinese II
- Kjernemembraner dannes
- Cytoplasmaet deler seg
- Resultat: Fire haploide celler

### Totalt resultat av meiose
- 1 diploid celle → 4 haploide celler
- Menneske: 46 kromosomer → 23 kromosomer per celle
- Alle fire cellene er genetisk ulike`,
    },
    {
      id: 'bio1-4-3-variasjon',
      type: 'text',
      content: `## Genetisk variasjon i meiose

### Tre mekanismer

**1. Uavhengig assortment (uavhengig segregering)**
- Homologe kromosomer orienterer seg tilfeldig i metafase I
- For menneske med 23 kromosompar: 2²³ = 8 388 608 mulige kombinasjoner
- Gjelder for hvert kromosompar uavhengig av de andre

**2. Overkrysning**
- Skaper nye allel-kombinasjoner på kromosomene
- Typisk 2-3 overkrysninger per kromosompar
- Øker variasjonen dramatisk utover 2²³

**3. Tilfeldig befruktning**
- Hvilken sædcelle som befrukter egget er tilfeldig
- 8 388 608 × 8 388 608 = over 70 billioner kombinasjoner
- Pluss effekten av overkrysning!

### Betydning for evolusjon
Genetisk variasjon er råmaterialet for naturlig utvalg. Uten variasjon kan ikke arter tilpasse seg endrede miljøforhold.`,
    },
    {
      id: 'bio1-4-3-def-uavhengig',
      type: 'definition',
      title: 'Uavhengig assortment',
      content: 'Uavhengig assortment (uavhengig segregering) er prinsippet om at homologe kromosompar orienterer seg tilfeldig under metafase I i meiose. Hvilket kromosom som går til hvilken pol er uavhengig for hvert kromosompar. Dette skaper et stort antall mulige kombinasjoner: for n kromosompar er det 2^n mulige kombinasjoner.',
    },
    {
      id: 'bio1-4-3-sammenligning',
      type: 'text',
      content: `## Sammenligning: Mitose vs. Meiose

| Egenskap | Mitose | Meiose |
|----------|--------|--------|
| **Antall delinger** | 1 | 2 |
| **Antall datterceller** | 2 | 4 |
| **Kromosomtall i datterceller** | Diploid (2n) | Haploid (n) |
| **Genetisk variasjon** | Nei (identiske) | Ja (ulike) |
| **Overkrysning** | Nei | Ja (profase I) |
| **Synapsis** | Nei | Ja (profase I) |
| **Funksjon** | Vekst, reparasjon | Produksjon av kjønnsceller |
| **Celletyper** | Somatiske celler | Gameter |

### Likheter
- Begge starter med DNA-replikasjon i S-fasen
- Begge har profase, metafase, anafase, telofase
- Begge bruker spindelapparat
- Begge ender med cytokinese`,
    },
    {
      id: 'bio1-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Kromosomtall gjennom meiose',
      problem: 'En menneskecelle (2n = 46) gjennomgår meiose. Angi antall kromosomer og kromatider i følgende stadier.',
      solution: `**Løsning:**

**Før meiose (etter S-fase):**
- 46 kromosomer, 92 kromatider

**Etter meiose I:**
- 23 kromosomer, 46 kromatider
- Hvert kromosom har fortsatt 2 søsterkromatider

**Etter meiose II (i hver celle):**
- 23 kromosomer, 23 kromatider
- Hver celle er haploid

**Oppsummering:**
| Stadium | Kromosomer | Kromatider | Celler |
|---------|------------|------------|--------|
| Start (G2) | 46 | 92 | 1 |
| Etter meiose I | 23 | 46 | 2 |
| Etter meiose II | 23 | 23 | 4 |`,
    },
    {
      id: 'bio1-4-3-example-2',
      type: 'example',
      title: 'Eksempel: Genetisk variasjon',
      problem: 'Beregn antall mulige kombinasjoner fra uavhengig assortment alene for et menneske (2n = 46).',
      solution: `**Løsning:**

**Mennesket har 23 homologe kromosompar.**

For hvert par er det 2 mulige orienteringer i metafase I:
- Enten går det maternelle kromosomet til pol A
- Eller det paternelle kromosomet går til pol A

**Beregning:**
Antall kombinasjoner = 2^23 = 2²³

2²³ = 2 × 2 × 2 × ... (23 ganger) = **8 388 608**

**Konklusjon:**
Kun fra uavhengig assortment kan én person teoretisk produsere over 8 millioner genetisk ulike kjønnsceller.

Med overkrysning i tillegg blir variasjonen enda mye større!`,
    },
  ],
  exercises: [
    {
      id: 'bio1-4-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange celler produseres ved slutten av meiose?',
      options: [
        { id: 'a', text: '4 haploide celler', isCorrect: true },
        { id: 'b', text: '2 diploide celler', isCorrect: false },
        { id: 'c', text: '2 haploide celler', isCorrect: false },
        { id: 'd', text: '4 diploide celler', isCorrect: false },
      ],
      solution: 'Meiose består av to delinger (meiose I og II) som produserer 4 haploide celler fra én diploid celle. Disse cellene er genetisk ulike på grunn av overkrysning og uavhengig assortment.',
    },
    {
      id: 'bio1-4-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva overkrysning er og når det skjer i meiose.',
      solution: 'Overkrysning er utveksling av DNA-segmenter mellom homologe kromosomer. Det skjer i profase I av meiose når homologe kromosomer er parret (synapsis). Ved strukturer kalt chiasmata krysser kromatider fra de to homologe kromosomene hverandre og bytter segmenter. Dette skaper nye kombinasjoner av alleler på kromosomene og er en viktig kilde til genetisk variasjon.',
    },
    {
      id: 'bio1-4-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedforskjellen mellom anafase I og anafase II?',
      options: [
        { id: 'a', text: 'I anafase I separeres homologe kromosomer, i anafase II separeres søsterkromatider', isCorrect: true },
        { id: 'b', text: 'I anafase I separeres søsterkromatider, i anafase II separeres homologe kromosomer', isCorrect: false },
        { id: 'c', text: 'Det er ingen forskjell', isCorrect: false },
        { id: 'd', text: 'Anafase I skjer bare i meiose, anafase II skjer i mitose', isCorrect: false },
      ],
      solution: 'I anafase I separeres homologe kromosomer (hvert kromosom har fortsatt 2 søsterkromatider). I anafase II separeres søsterkromatidene (som i mitosens anafase). Dette er grunnen til at kromosomtallet halveres i meiose I, men ikke i meiose II.',
    },
    {
      id: 'bio1-4-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn tre måter meiose skaper genetisk variasjon på.',
      solution: '1) Uavhengig assortment: Homologe kromosompar orienterer seg tilfeldig i metafase I, slik at ulike kombinasjoner av maternelle og paternelle kromosomer havner i samme celle. 2) Overkrysning: Utveksling av DNA mellom homologe kromosomer skaper nye allel-kombinasjoner. 3) Tilfeldig befruktning: Hvilken sædcelle som befrukter egget er tilfeldig, noe som multipliserer variasjonen.',
    },
    {
      id: 'bio1-4-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign mitose og meiose med hensyn til antall delinger, antall datterceller, kromosomtall i dattercellene, og genetisk variasjon.',
      solution: 'Mitose: 1 deling, 2 datterceller, diploid (2n), genetisk identiske med modercellen. Meiose: 2 delinger, 4 datterceller, haploid (n), genetisk ulike pga. overkrysning og uavhengig assortment. Mitose brukes til vekst og reparasjon, meiose brukes til å produsere kjønnsceller. Begge starter med DNA-replikasjon, men meiose har synapsis og overkrysning som mitose ikke har.',
    },
    {
      id: 'bio1-4-3-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Når skjer synapsis (parring av homologe kromosomer)?',
      options: [
        { id: 'a', text: 'I profase I av meiose', isCorrect: true },
        { id: 'b', text: 'I metafase I av meiose', isCorrect: false },
        { id: 'c', text: 'I profase av mitose', isCorrect: false },
        { id: 'd', text: 'I anafase I av meiose', isCorrect: false },
      ],
      solution: 'Synapsis skjer i profase I av meiose. Homologe kromosomer parres og danner bivalenter (tetrader). Det er under synapsis at overkrysning kan skje. Synapsis forekommer ikke i mitose.',
    },
  ],
};

// ============================================================================
// Kapittel 4.4: Feil i celledeling og kreft
// ============================================================================

export const CHAPTER_BIOLOGI_1_4_4: TextbookChapter = {
  id: 'biologi-1-4-4',
  courseId: 'biologi-1',
  chapterNumber: '4.4',
  title: 'Feil i celledeling og kreft',
  description: 'Mutasjoner, kromosomavvik, onkogener, tumorsuppressorgener og kreftutvikling.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hvordan feil i celledeling kan oppstå',
    'beskrive onkogener og tumorsuppressorgener',
    'gjøre rede for hvordan kreft utvikler seg',
    'drøfte faktorer som øker kreftrisiko',
  ],
  content: [
    {
      id: 'bio1-4-4-intro',
      type: 'text',
      content: `# Feil i celledeling og kreft

Celledeling er en nøye regulert prosess, men feil kan forekomme. Når kontrollmekanismene svikter, kan resultatet være kromosomavvik eller ukontrollert celledeling - som i kreft.

## Konsekvenser av feil

- **Ved mitose**: Datterceller med feil kromosomtall eller mutasjoner
- **Ved meiose**: Kjønnsceller med feil kromosomtall (kan gi Downs syndrom, etc.)
- **Ukontrollert deling**: Kreftutvikling

## Hvor vanlig er kreft?

- Ca. 1 av 3 nordmenn vil få kreft i løpet av livet
- Kreft er den vanligste dødsårsaken etter hjerte-karsykdommer
- Risikoen øker med alder fordi mutasjoner akkumuleres`,
    },
    {
      id: 'bio1-4-4-kromosomavvik',
      type: 'text',
      content: `## Kromosomavvik

### Nondisjunction

Nondisjunction er feilfordeling av kromosomer under celledeling.

**I meiose I:**
- Homologe kromosomer separerer ikke
- Resultat: To celler med n+1, to med n-1

**I meiose II eller mitose:**
- Søsterkromatider separerer ikke
- Resultat: En celle med +1, en med -1

### Aneuploidi

Aneuploidi er når en celle har feil antall kromosomer.

| Tilstand | Kromosomtall | Eksempel |
|----------|--------------|----------|
| Monosomi | 2n - 1 | Turner syndrom (XO) |
| Trisomi | 2n + 1 | Downs syndrom (trisomi 21) |
| Tetrasomi | 2n + 2 | Sjelden |

### Downs syndrom (trisomi 21)
- 3 kopier av kromosom 21
- Insidens: ca. 1/700 fødsler
- Risiko øker med mors alder
- Forårsaket av nondisjunction, vanligvis i eggcellen`,
    },
    {
      id: 'bio1-4-4-def-mutasjon',
      type: 'definition',
      title: 'Mutasjon',
      content: 'En mutasjon er en permanent endring i DNA-sekvensen. Mutasjoner kan være små (punktmutasjoner som endrer ett nukleotid) eller store (tap eller duplikasjon av hele kromosomer). De fleste mutasjoner er nøytrale eller skadelige, men noen kan gi fordeler. Mutasjoner i kroppsceller kan føre til kreft, mens mutasjoner i kjønnsceller kan arves til neste generasjon.',
    },
    {
      id: 'bio1-4-4-kreftgener',
      type: 'text',
      content: `## Gener som kontrollerer celledeling

### Proto-onkogener og onkogener

**Proto-onkogener:**
- Normale gener som stimulerer celledeling
- Koder for vekstfaktorer, reseptorer, signalmolekyler
- Nødvendige for normal vekst

**Onkogener:**
- Muterte proto-onkogener
- Overaktive - driver celledeling konstant
- "Gasspedal som sitter fast"
- Én mutert kopi er nok (dominant)

**Eksempler:**
- *RAS*: Signalmolekyl (mutert i 30% av krefttilfeller)
- *HER2*: Vekstfaktorreseptor (brystkreft)
- *MYC*: Transkripsjonsfaktor

### Tumorsuppressorgener

**Normale funksjoner:**
- Bremser celledeling
- Reparerer DNA
- Trigger apoptose ved skade

**Ved mutasjon:**
- Taper funksjon - ingen brems
- Begge kopier må være mutert (recessiv)
- "Bremsene virker ikke"

**Eksempler:**
- *p53*: "Genomets vokter" (mutert i >50% av kreft)
- *RB*: Retinoblastom-genet
- *BRCA1/2*: DNA-reparasjon (bryst- og eggstokkreft)`,
    },
    {
      id: 'bio1-4-4-def-onkogen',
      type: 'definition',
      title: 'Onkogener og tumorsuppressorgener',
      content: 'Onkogener er muterte versjoner av proto-onkogener som driver celledeling. De fungerer som en "gasspedal som sitter fast". Tumorsuppressorgener er gener som normalt bremser celledeling eller trigger celledød ved skade. Når de er mutert, mister cellen viktige kontrollmekanismer. Kreft krever vanligvis mutasjoner i både onkogener og tumorsuppressorgener.',
    },
    {
      id: 'bio1-4-4-kreftutvikling',
      type: 'text',
      content: `## Kreftutvikling - en flertrinnsprosess

Kreft utvikles ikke over natten. Det krever flere mutasjoner i samme celle.

### Trinnene i kreftutvikling

**1. Initiering**
- Første mutasjon i et kritisk gen
- Cellen deler seg litt raskere
- Ofte ingen merkbar effekt

**2. Promocjon**
- Flere mutasjoner akkumuleres
- Cellen mister kontrollmekanismer
- Danner en godarttet svulst (benignt)

**3. Progresjon**
- Ytterligere mutasjoner
- Svulsten vokser raskere
- Kan unngå immunforsvaret

**4. Metastase**
- Kreftceller sprer seg til andre organer
- Krever mutasjoner som tillater:
  - Løsning fra original svulst
  - Invasjon gjennom vev
  - Overlevelse i blodstrøm
  - Etablering på nye steder

### Hallmarks of Cancer (kjennetegn)
1. Selvforsynt med vekstsignaler
2. Ignorerer veksthemmende signaler
3. Unngår apoptose
4. Ubegrenset replikasjon (telomerase)
5. Stimulerer blodårevekst (angiogenese)
6. Invasjon og metastase`,
    },
    {
      id: 'bio1-4-4-def-metastase',
      type: 'definition',
      title: 'Metastase',
      content: 'Metastase er prosessen der kreftceller sprer seg fra primærsvulsten til andre deler av kroppen via blod- eller lymfesystemet. Metastaserende kreft er vanskeligere å behandle fordi kreftcellene har etablert seg flere steder. Metastase krever at kreftcellene har utviklet evnen til å løsne fra original svulst, overleve i sirkulasjonen, og etablere nye svulster i fremmede vev.',
    },
    {
      id: 'bio1-4-4-risikofaktorer',
      type: 'text',
      content: `## Risikofaktorer for kreft

### Ytre faktorer (90%)

**Karsinogener (kreftfremkallende stoffer):**
- Tobakk (lungekreft, blærekreft)
- Alkohol (leverkreft, brystkreft)
- UV-stråling (hudkreft)
- Radon (lungekreft)
- Asbest (lungehinnekreft)

**Infeksjoner:**
- HPV (livmorhalskreft)
- Hepatitt B/C (leverkreft)
- H. pylori (magekreft)

**Livsstil:**
- Overvekt
- Usunt kosthold
- Mangel på fysisk aktivitet

### Arvelige faktorer (5-10%)

**Arvelige kreftsyndromer:**
- *BRCA1/2*-mutasjoner: 50-80% livstidsrisiko for brystkreft
- Lynch syndrom: tykktarmskreft
- Familiær adenomatøs polypose (FAP)

### Alder
- Kreftrisiko øker med alder
- Mutasjoner akkumuleres over tid
- 80% av krefttilfeller hos personer >55 år`,
    },
    {
      id: 'bio1-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Flertrinnsprosessen i tykktarmskreft',
      problem: 'Beskriv den trinnvise utviklingen av tykktarmskreft fra normal celle til metastatisk kreft.',
      solution: `**Løsning:**

**Trinn 1: Tap av APC (tumorsuppressor)**
- Normal tarmcelle mister begge kopier av APC-genet
- Resulterer i økt celledeling
- Danner en liten polypp (godarttet)

**Trinn 2: Aktivering av KRAS (onkogen)**
- Mutasjon gjør KRAS konstant aktiv
- Cellen får vekstsignaler hele tiden
- Polyppen vokser

**Trinn 3: Tap av SMAD4 (tumorsuppressor)**
- Cellen mister respons på veksthemmende signaler
- Polyppen blir større og mer unormal

**Trinn 4: Tap av p53**
- "Genomets vokter" er borte
- Cellen kan ikke lenger trigger apoptose
- Resulterer i invasiv kreft

**Trinn 5: Metastase**
- Ytterligere mutasjoner tillater spredning
- Kreftceller når lever, lunger, etc.

**Konklusjon:** Det tar typisk 10-15 år og 5-7 mutasjoner fra første polypp til metastatisk kreft.`,
    },
    {
      id: 'bio1-4-4-example-2',
      type: 'example',
      title: 'Eksempel: BRCA-mutasjoner og kreftrisiko',
      problem: 'Angelina Jolie valgte å fjerne brystene forebyggende etter å ha testet positivt for BRCA1-mutasjon. Forklar hvorfor BRCA-mutasjoner øker kreftrisikoen.',
      solution: `**Løsning:**

**BRCA1 og BRCA2 sin normale funksjon:**
- Reparerer dobbelttrådsbrudd i DNA
- Kritiske for å opprettholde genomstabilitet
- Tumorsuppressorgener

**Ved arvelig BRCA-mutasjon:**
- Én defekt kopi arves fra en forelder
- Den andre kopien kan mutere senere i livet
- Når begge kopier er defekte:
  - DNA-reparasjon svikter
  - Mutasjoner akkumuleres raskere
  - Kreftrisiko øker dramatisk

**Risikonivå for BRCA1-bærere:**
- Brystkreft: 50-80% livstidsrisiko (vs. 12% i normalbefolkningen)
- Eggstokkreft: 20-40% livstidsrisiko
- Risiko for kreft før 50 års alder

**Forebyggende tiltak:**
- Intensivert screening
- Forebyggende kirurgi (som hos Jolie)
- Medikamenter som reduserer risiko`,
    },
  ],
  exercises: [
    {
      id: 'bio1-4-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et onkogen?',
      options: [
        { id: 'a', text: 'Et mutert gen som driver ukontrollert celledeling', isCorrect: true },
        { id: 'b', text: 'Et gen som stopper celledeling', isCorrect: false },
        { id: 'c', text: 'Et gen som reparerer DNA', isCorrect: false },
        { id: 'd', text: 'Et normalt gen for cellevekst', isCorrect: false },
      ],
      solution: 'Et onkogen er en mutert versjon av et proto-onkogen som driver celledeling konstant. Proto-onkogener er normale gener som stimulerer celledeling, men når de muterer til onkogener, blir de overaktive og kan føre til kreft.',
    },
    {
      id: 'bio1-4-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom onkogener og tumorsuppressorgener, og gi ett eksempel på hvert.',
      solution: 'Onkogener: Muterte versjoner av proto-onkogener som driver celledeling. Fungerer som "gasspedal som sitter fast". Én mutert kopi er nok (dominant). Eksempel: RAS. Tumorsuppressorgener: Normale gener som bremser celledeling eller trigger celledød. Fungerer som "bremser". Begge kopier må muteres for at funksjonen tapes (recessiv). Eksempel: p53.',
    },
    {
      id: 'bio1-4-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er nondisjunction?',
      options: [
        { id: 'a', text: 'Feilfordeling av kromosomer under celledeling', isCorrect: true },
        { id: 'b', text: 'En type DNA-mutasjon', isCorrect: false },
        { id: 'c', text: 'Normal separering av kromosomer', isCorrect: false },
        { id: 'd', text: 'Fusjon av to celler', isCorrect: false },
      ],
      solution: 'Nondisjunction er når kromosomer ikke fordeles riktig under celledeling. I meiose kan homologe kromosomer (i meiose I) eller søsterkromatider (i meiose II) feile i å separere. Dette fører til celler med feil antall kromosomer (aneuploidi), som kan gi Downs syndrom (trisomi 21).',
    },
    {
      id: 'bio1-4-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvorfor er kreft en flertrinnsprosess som krever mange mutasjoner?',
      solution: 'Kreft krever mange mutasjoner fordi: 1) Celler har mange kontrollmekanismer som må overvinnes (onkogener må aktiveres, tumorsuppressorer må inaktiveres). 2) Immunsystemet kan oppdage og drepe unormale celler. 3) Celler har begrenset livslengde (telomerer) som må overvinnes. 4) For metastase må celler utvikle evne til å løsne, overleve i blod, og etablere seg nye steder. Typisk kreves 5-7 mutasjoner over 10-20 år.',
    },
    {
      id: 'bio1-4-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor arvelige mutasjoner i BRCA1/2 øker kreftrisikoen betydelig, selv om disse er tumorsuppressorgener som krever at begge kopier muteres.',
      solution: 'Ved arvelige BRCA-mutasjoner er én defekt kopi til stede i alle celler fra fødselen av. Dette betyr at bare én ytterligere mutasjon (tap av den friske kopien) trengs for å miste BRCA-funksjonen helt. Uten funksjonelle BRCA-proteiner kan ikke cellen reparere DNA-skader effektivt, noe som fører til rask akkumulering av mutasjoner og økt kreftrisiko. "Two-hit hypothesis" - med én arvelig "hit" trengs bare én til.',
    },
    {
      id: 'bio1-4-4-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor stor andel av krefttilfeller skyldes arvelige faktorer?',
      options: [
        { id: 'a', text: '5-10%', isCorrect: true },
        { id: 'b', text: '50%', isCorrect: false },
        { id: 'c', text: '90%', isCorrect: false },
        { id: 'd', text: '25%', isCorrect: false },
      ],
      solution: 'Ca. 5-10% av krefttilfeller skyldes arvelige faktorer (nedarvet mutasjon i et kritisk gen). De fleste krefttilfeller (90%) skyldes ervervede mutasjoner fra ytre faktorer som tobakk, UV-stråling, kosthold, og tilfeldige feil under DNA-replikasjon.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const BIOLOGI_1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_4_1,
  CHAPTER_BIOLOGI_1_4_2,
  CHAPTER_BIOLOGI_1_4_3,
  CHAPTER_BIOLOGI_1_4_4,
];
