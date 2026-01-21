/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 2 VG3
 *
 * Dekker LK20-kompetansemål for biologi 2 (BIO02-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Molekylærbiologi og genregulering
// ============================================================================

export const CHAPTER_BIOLOGI_2_1: TextbookChapter = {
  id: 'biologi-2-1',
  courseId: 'biologi-2',
  chapterNumber: '1',
  title: 'Molekylærbiologi og genregulering',
  description: 'DNA-struktur, replikasjon, transkripsjon, translasjon og regulering av genekspresjon.',
  estimatedMinutes: 90,
  competenceGoals: [
    'gjøre rede for DNA-struktur og replikasjon',
    'forklare transkripsjon og translasjon',
    'beskrive genregulering hos prokaryoter og eukaryoter',
    'drøfte epigenetikk og miljøpåvirkning på genekspresjon',
  ],
  content: [
    {
      id: 'bio2-1-intro',
      type: 'text',
      content: `# Molekylærbiologi og genregulering

Molekylærbiologi handler om de molekylære prosessene som ligger til grunn for liv. I dette kapittelet skal vi se nærmere på hvordan genetisk informasjon lagres, kopieres og brukes til å lage proteiner.

## Det sentrale dogmet

Det sentrale dogmet i molekylærbiologien beskriver informasjonsflyten i cellen:

**DNA → RNA → Protein**

- **Replikasjon**: DNA kopieres til nytt DNA
- **Transkripsjon**: DNA oversettes til mRNA
- **Translasjon**: mRNA oversettes til protein`,
    },
    {
      id: 'bio2-1-def-dna',
      type: 'definition',
      title: 'DNA-struktur',
      content: 'DNA (deoksyribonukleinsyre) er et dobbeltheliks-molekyl bygd opp av nukleotider. Hver nukleotid består av deoksyribose (sukker), fosfatgruppe og en nitrogenbase (A, T, G eller C). Basene parrer seg spesifikt: A-T og G-C.',
    },
    {
      id: 'bio2-1-replikasjon',
      type: 'text',
      content: `## DNA-replikasjon

DNA-replikasjon er prosessen der DNA kopieres før celledeling.

### Hovedtrinn:
1. **Helikase** åpner dobbelthelixen ved å bryte hydrogenbindingene
2. **Primase** lager RNA-primere som startpunkt
3. **DNA-polymerase III** syntetiserer ny DNA-tråd (5' → 3')
4. **DNA-polymerase I** erstatter RNA-primere med DNA
5. **Ligase** kobler sammen Okazaki-fragmenter

### Semikonservativ replikasjon
Hver ny DNA-dobbeltheliks inneholder én original og én nysyntetisert tråd.`,
    },
    {
      id: 'bio2-1-example-1',
      type: 'example',
      title: 'Eksempel: Baseparing',
      problem: 'Gitt DNA-sekvensen 5\'-ATGCTAGC-3\', hva er sekvensen til den komplementære tråden?',
      solution: `**Løsning:**

Baseparingsreglene: A-T og G-C

Original: 5'-ATGCTAGC-3'
Komplementær: 3'-TACGATCG-5'

Skrevet i standard retning (5'→3'):
**5'-GCTAGCAT-3'**`,
    },
    {
      id: 'bio2-1-transkripsjon',
      type: 'text',
      content: `## Transkripsjon

Transkripsjon er prosessen der DNA oversettes til mRNA.

### Hovedtrinn:
1. **Initiering**: RNA-polymerase binder til promotor
2. **Elongering**: mRNA syntetiseres i 5' → 3' retning
3. **Terminering**: Transkripsjon stopper ved terminatorsekvens

### mRNA-prosessering (eukaryoter)
- **5'-cap**: Beskytter mRNA og hjelper ribosombinding
- **Poly-A-hale**: Stabiliserer mRNA
- **Spleising**: Introner fjernes, eksoner settes sammen`,
    },
    {
      id: 'bio2-1-def-kodon',
      type: 'definition',
      title: 'Kodon',
      content: 'Et kodon er en sekvens på tre nukleotider i mRNA som koder for én aminosyre. Det finnes 64 kodoner: 61 koder for aminosyrer, 3 er stoppkodoner (UAA, UAG, UGA). AUG er startkodonet og koder for metionin.',
    },
    {
      id: 'bio2-1-genregulering',
      type: 'text',
      content: `## Genregulering

Ikke alle gener uttrykkes hele tiden. Genregulering kontrollerer når og hvor mye av et protein som produseres.

### Prokaryot regulering: Operon-modellen
**Lac-operonet** i E. coli:
- **Operator**: DNA-sekvens der repressor binder
- **Repressor**: Blokkerer transkripsjon når laktose er fraværende
- **Inducer** (laktose): Inaktiverer repressor, tillater transkripsjon

### Eukaryot regulering
- **Transkripsjonsfaktorer**: Proteiner som binder til enhancere/silencere
- **Epigenetikk**: Metylering og histonmodifikasjoner
- **miRNA**: Små RNA-molekyler som regulerer mRNA-stabilitet`,
    },
    {
      id: 'bio2-1-example-2',
      type: 'example',
      title: 'Eksempel: Lac-operonet',
      problem: 'Forklar hvorfor lac-operonet er "av" når det bare er glukose tilgjengelig.',
      solution: `**Løsning:**

Når kun glukose er tilgjengelig:
1. Det er ingen laktose i cellen
2. Laktose-inducer er fraværende
3. Repressor-proteinet forblir aktivt
4. Repressor binder til operator-sekvensen
5. RNA-polymerase blokkeres fra å transkribere lac-genene

**Resultat:** Genene for laktose-nedbrytning uttrykkes ikke fordi cellen prioriterer glukose som energikilde.`,
    },
  ],
  exercises: [
    {
      id: 'bio2-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken base i DNA parrer seg med adenin (A)?',
      options: [
        { id: 'a', text: 'Tymin (T)', isCorrect: true },
        { id: 'b', text: 'Guanin (G)', isCorrect: false },
        { id: 'c', text: 'Cytosin (C)', isCorrect: false },
        { id: 'd', text: 'Uracil (U)', isCorrect: false },
      ],
      solution: 'I DNA parrer adenin (A) seg alltid med tymin (T) via to hydrogenbindinger.',
    },
    {
      id: 'bio2-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom replikasjon, transkripsjon og translasjon.',
      solution: '**Replikasjon**: DNA → DNA (kopiering før celledeling)\n**Transkripsjon**: DNA → mRNA (i kjernen)\n**Translasjon**: mRNA → Protein (på ribosomer)',
    },
    {
      id: 'bio2-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'DNA-sekvensen er 3\'-TAC GCA AAT-5\'. Hva blir mRNA-sekvensen og aminosyresekvensen?',
      solution: 'mRNA: 5\'-AUG CGU UUA-3\'\nAminosyrer: Met-Arg-Leu (Metionin-Arginin-Leucin)',
      hints: ['Husk at mRNA er komplementær til template-tråden', 'Bruk kodon-tabellen for å finne aminosyrene'],
    },
    {
      id: 'bio2-1-ex4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket enzym er ansvarlig for å syntetisere nye DNA-tråder under replikasjon?',
      options: [
        { id: 'a', text: 'DNA-polymerase', isCorrect: true },
        { id: 'b', text: 'RNA-polymerase', isCorrect: false },
        { id: 'c', text: 'Helikase', isCorrect: false },
        { id: 'd', text: 'Ligase', isCorrect: false },
      ],
      solution: 'DNA-polymerase syntetiserer nye DNA-tråder ved å legge til komplementære nukleotider.',
    },
    {
      id: 'bio2-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan epigenetiske endringer kan påvirke genekspresjon uten å endre DNA-sekvensen.',
      solution: 'Epigenetiske endringer inkluderer DNA-metylering og histonmodifikasjoner. Metylering av cytosin i promotorregioner "slår av" gener ved å hindre transkripsjonsfaktorbinding. Histonacetylering løser opp kromatinstrukturen og øker genuttrykk, mens deacetylering pakker DNA tettere og reduserer uttrykk.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Celledeling og kreft
// ============================================================================

export const CHAPTER_BIOLOGI_2_2: TextbookChapter = {
  id: 'biologi-2-2',
  courseId: 'biologi-2',
  chapterNumber: '2',
  title: 'Celledeling og kreft',
  description: 'Cellesyklus, mitose, meiose, kontrollmekanismer og kreftutvikling.',
  estimatedMinutes: 90,
  competenceGoals: [
    'beskrive cellesyklus og dens kontrollpunkter',
    'forklare mitose og meiose',
    'gjøre rede for genetiske årsaker til kreft',
    'drøfte behandlingsmetoder for kreft',
  ],
  content: [
    {
      id: 'bio2-2-intro',
      type: 'text',
      content: `# Celledeling og kreft

Celledeling er grunnlaget for vekst, vedlikehold og reproduksjon. Når kontrollen over celledelingen svikter, kan kreft utvikles.

## Cellesyklus

Cellesyklus består av:
- **G1-fase**: Cellevekst og forberedelse
- **S-fase**: DNA-replikasjon
- **G2-fase**: Forberedelse til deling
- **M-fase**: Mitose og cytokinese

### Kontrollpunkter
- **G1-kontrollpunkt**: Er cellen stor nok? Er DNA uskadet?
- **G2-kontrollpunkt**: Er DNA fullstendig kopiert?
- **M-kontrollpunkt**: Er kromosomene festet til spindelfibrene?`,
    },
    {
      id: 'bio2-2-def-mitose',
      type: 'definition',
      title: 'Mitose',
      content: 'Mitose er celledeling som produserer to genetisk identiske datterceller. Fasene er: profase (kromosomer kondenserer), metafase (kromosomer på midten), anafase (søsterkromatider skilles) og telofase (kjernemembraner dannes).',
    },
    {
      id: 'bio2-2-meiose',
      type: 'text',
      content: `## Meiose

Meiose produserer kjønnsceller (gameter) med halvt kromosomtall.

### Meiose I - Reduksjonsdeling
- **Profase I**: Homologe kromosomer parres, overkrysning skjer
- **Metafase I**: Homologe par på midten
- **Anafase I**: Homologe kromosomer skilles
- **Telofase I**: To celler med n kromosomer

### Meiose II - Likner mitose
Søsterkromatider skilles. Resultat: 4 haploide celler.

### Genetisk variasjon
- **Overkrysning**: Utveksling av DNA mellom homologe kromosomer
- **Uavhengig assortment**: Tilfeldig fordeling av homologe par`,
    },
    {
      id: 'bio2-2-kreft',
      type: 'text',
      content: `## Kreft

Kreft oppstår når celler deler seg ukontrollert på grunn av mutasjoner i gener som styrer cellesyklus.

### Nøkkelgener
- **Proto-onkogener**: Stimulerer celledeling. Mutasjon → onkogen (overaktiv)
- **Tumorsuppressorgener**: Bremser celledeling (f.eks. p53, RB). Mutasjon → tap av kontroll
- **DNA-reparasjonsgener**: Reparerer DNA-skader. Mutasjon → akkumulering av flere mutasjoner

### Kjennetegn ved kreftceller
1. Ukontrollert celledeling
2. Unngår apoptose (programmert celledød)
3. Invasjon av vev
4. Metastasering (spredning)
5. Angiogenese (nydannelse av blodkar)`,
    },
    {
      id: 'bio2-2-example-1',
      type: 'example',
      title: 'Eksempel: p53 - genomets vokter',
      problem: 'Forklar hvorfor p53 kalles "genomets vokter" og hvordan mutasjoner i p53 kan føre til kreft.',
      solution: `**Løsning:**

p53 er et tumorsuppressorprotein med flere viktige funksjoner:

1. **DNA-skade oppdages** → p53 aktiveres
2. **p53 stopper cellesyklus** ved G1-kontrollpunktet
3. **Reparasjon initieres** - cellen får tid til å reparere DNA
4. **Hvis skaden er for stor** → p53 aktiverer apoptose

**Ved p53-mutasjon:**
- Celler med skadet DNA deler seg videre
- Mutasjoner akkumuleres
- Kreftutvikling fremmes

p53 er mutert i over 50% av alle krefttyper.`,
    },
  ],
  exercises: [
    {
      id: 'bio2-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'I hvilken fase av cellesyklus skjer DNA-replikasjon?',
      options: [
        { id: 'a', text: 'S-fasen', isCorrect: true },
        { id: 'b', text: 'G1-fasen', isCorrect: false },
        { id: 'c', text: 'G2-fasen', isCorrect: false },
        { id: 'd', text: 'M-fasen', isCorrect: false },
      ],
      solution: 'DNA-replikasjon skjer i S-fasen (syntesefasen) av cellesyklus.',
    },
    {
      id: 'bio2-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Sammenlign mitose og meiose. Nevn minst tre forskjeller.',
      solution: '1) Mitose gir 2 diploide celler, meiose gir 4 haploide celler\n2) Mitose har én deling, meiose har to delinger\n3) Overkrysning skjer i meiose (profase I), ikke i mitose\n4) Mitose brukes til vekst/vedlikehold, meiose til kjønnscelledannelse',
    },
    {
      id: 'bio2-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom et proto-onkogen og et onkogen?',
      options: [
        { id: 'a', text: 'Proto-onkogen er normalt gen, onkogen er mutert versjon som fremmer kreft', isCorrect: true },
        { id: 'b', text: 'Proto-onkogen hemmer celledeling, onkogen fremmer celledeling', isCorrect: false },
        { id: 'c', text: 'Det er ingen forskjell, begge er kreftgener', isCorrect: false },
        { id: 'd', text: 'Onkogen er normalt gen, proto-onkogen er mutert', isCorrect: false },
      ],
      solution: 'Proto-onkogener er normale gener som regulerer cellevekst. Når de muterer og blir overaktive, kalles de onkogener og kan bidra til kreftutvikling.',
    },
    {
      id: 'bio2-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar "two-hit hypothesis" for tumorsuppressorgener.',
      solution: 'Two-hit hypothesis (Knudsons hypotese) sier at begge kopiene av et tumorsuppressorgen må inaktiveres for at kreft skal utvikles. Første "hit" kan være arvet (familiær kreft) eller ervervet. Andre "hit" er alltid somatisk mutasjon. Dette forklarer hvorfor familiær kreft oppstår tidligere og oftere enn sporadisk kreft.',
    },
    {
      id: 'bio2-2-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvordan bidrar overkrysning i meiose til genetisk variasjon?',
      solution: 'Under profase I i meiose parres homologe kromosomer. Ved overkrysning brytes og byttes DNA-segmenter mellom ikke-søster kromatider. Dette skaper nye kombinasjoner av alleler på samme kromosom (rekombinasjon), som øker den genetiske variasjonen i avkommet.',
    },
  ],
};

// ============================================================================
// Kapittel 3: Immunologi og sykdom
// ============================================================================

export const CHAPTER_BIOLOGI_2_3: TextbookChapter = {
  id: 'biologi-2-3',
  courseId: 'biologi-2',
  chapterNumber: '3',
  title: 'Immunologi og sykdom',
  description: 'Immunsystemets oppbygning, medfødt og ervervet immunitet, vaksiner og immunsvikt.',
  estimatedMinutes: 90,
  competenceGoals: [
    'beskrive immunsystemets oppbygning og funksjon',
    'forklare forskjellen mellom medfødt og ervervet immunitet',
    'gjøre rede for hvordan vaksiner fungerer',
    'drøfte autoimmune sykdommer og immunsvikt',
  ],
  content: [
    {
      id: 'bio2-3-intro',
      type: 'text',
      content: `# Immunologi og sykdom

Immunsystemet beskytter kroppen mot patogener (sykdomsfremkallende organismer) som bakterier, virus, sopp og parasitter.

## To linjer av forsvar

1. **Medfødt immunitet**: Rask, uspesifikk respons
2. **Ervervet immunitet**: Langsom, spesifikk respons med hukommelse`,
    },
    {
      id: 'bio2-3-medfodt',
      type: 'text',
      content: `## Medfødt immunitet

Medfødt immunitet er kroppens første forsvarslinje.

### Fysiske barrierer
- Hud (epidermis)
- Slimhinner
- Flimmerhår i luftveiene

### Kjemiske barrierer
- Magesyre (lav pH)
- Enzymer (lysozym i tårer)
- Antimikrobielle peptider

### Cellulære komponenter
- **Makrofager**: Fagocytose av patogener
- **Nøytrofile granulocytter**: Fagocytose, inflammasjon
- **NK-celler** (Natural Killer): Dreper virusinfiserte celler
- **Dendrittiske celler**: Antigenpresentasjon`,
    },
    {
      id: 'bio2-3-def-antigen',
      type: 'definition',
      title: 'Antigen og antistoff',
      content: '**Antigen**: Et molekyl (ofte protein) som kan gjenkjennes av immunsystemet og utløse immunrespons. **Antistoff** (immunoglobulin): Y-formet protein produsert av B-celler som binder spesifikt til antigener og nøytraliserer eller merker patogener for ødeleggelse.',
    },
    {
      id: 'bio2-3-ervervet',
      type: 'text',
      content: `## Ervervet immunitet

Ervervet (adaptiv) immunitet er spesifikk og utvikler immunologisk hukommelse.

### T-celler (cellulær immunitet)
- **Hjelper-T-celler (CD4+)**: Aktiverer andre immunceller
- **Cytotoksiske T-celler (CD8+)**: Dreper infiserte celler
- **Regulatoriske T-celler**: Demper immunrespons

### B-celler (humoral immunitet)
- Produserer antistoffer
- Utvikles til plasmaceller (antistoffprodusenter)
- Hukommelsesceller gir langvarig beskyttelse

### Klonal seleksjon
Når et antigen møter B- eller T-celler med matchende reseptor, deler disse cellene seg raskt og danner en klon av effektorceller og hukommelsesceller.`,
    },
    {
      id: 'bio2-3-vaksiner',
      type: 'text',
      content: `## Vaksiner

Vaksiner utnytter immunologisk hukommelse til å gi beskyttelse uten å forårsake sykdom.

### Vaksinetyper
1. **Levende, svekkede vaksiner**: Svekket patogen (MMR)
2. **Inaktiverte vaksiner**: Drept patogen (influensa)
3. **Subenhetsvaksiner**: Bare antigener (hepatitt B)
4. **mRNA-vaksiner**: Genetisk instruksjon for antigenproduksjon (COVID-19)

### Hvordan vaksiner fungerer
1. Vaksineantigener presenteres for immunsystemet
2. B- og T-celler aktiveres
3. Hukommelsesceller dannes
4. Ved senere eksponering: Rask og sterk sekundærrespons`,
    },
    {
      id: 'bio2-3-example-1',
      type: 'example',
      title: 'Eksempel: Primær vs. sekundær immunrespons',
      problem: 'Forklar hvorfor man blir mindre syk andre gang man utsettes for samme patogen.',
      solution: `**Løsning:**

**Primær respons (første eksponering):**
- Få naive B- og T-celler gjenkjenner antigenet
- Tar 1-2 uker å produsere nok antistoffer
- Person kan bli syk

**Sekundær respons (andre eksponering):**
- Hukommelsesceller er allerede tilstede
- Rask aktivering (timer til dager)
- Kraftigere antistoffproduksjon
- Patogen elimineres før symptomer utvikles

Dette er grunnlaget for vaksinebeskyttelse.`,
    },
  ],
  exercises: [
    {
      id: 'bio2-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke celler produserer antistoffer?',
      options: [
        { id: 'a', text: 'B-celler/plasmaceller', isCorrect: true },
        { id: 'b', text: 'T-celler', isCorrect: false },
        { id: 'c', text: 'Makrofager', isCorrect: false },
        { id: 'd', text: 'NK-celler', isCorrect: false },
      ],
      solution: 'B-celler differensierer til plasmaceller som produserer antistoffer.',
    },
    {
      id: 'bio2-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom medfødt og ervervet immunitet.',
      solution: 'Medfødt immunitet er uspesifikk, rask (minutter-timer), og har ingen hukommelse. Ervervet immunitet er spesifikk for hvert antigen, tar lengre tid (dager-uker), og utvikler immunologisk hukommelse som gir raskere respons ved reinfeksjon.',
    },
    {
      id: 'bio2-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er funksjonen til hjelper-T-celler (CD4+)?',
      options: [
        { id: 'a', text: 'Aktivere og koordinere andre immunceller', isCorrect: true },
        { id: 'b', text: 'Drepe virusinfiserte celler direkte', isCorrect: false },
        { id: 'c', text: 'Produsere antistoffer', isCorrect: false },
        { id: 'd', text: 'Fagocytere bakterier', isCorrect: false },
      ],
      solution: 'Hjelper-T-celler aktiverer B-celler, cytotoksiske T-celler og makrofager gjennom cytokinsekresjon.',
    },
    {
      id: 'bio2-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan mRNA-vaksiner fungerer og hvorfor de ikke kan endre vårt DNA.',
      solution: 'mRNA-vaksiner inneholder genetisk instruksjon for å lage et antigenprotein (f.eks. spike-protein). mRNA tas opp av celler og oversettes til protein i cytoplasma. Immunsystemet reagerer på proteinet. mRNA brytes raskt ned og går aldri inn i cellekjernen, så det kan ikke integreres i DNA.',
    },
    {
      id: 'bio2-3-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er en autoimmun sykdom? Gi et eksempel.',
      solution: 'Autoimmun sykdom oppstår når immunsystemet angriper kroppens egne celler og vev. Eksempler: Type 1 diabetes (T-celler angriper betaceller i bukspyttkjertelen), multippel sklerose (angrep på myelin), leddgikt (angrep på leddvev).',
    },
  ],
};

// ============================================================================
// Kapittel 4: Nervesystemet og signaloverføring
// ============================================================================

export const CHAPTER_BIOLOGI_2_4: TextbookChapter = {
  id: 'biologi-2-4',
  courseId: 'biologi-2',
  chapterNumber: '4',
  title: 'Nervesystemet og signaloverføring',
  description: 'Nevroner, aksjonspotensial, synapser, nevrotransmittere og sentralnervesystemet.',
  estimatedMinutes: 90,
  competenceGoals: [
    'beskrive nervecellens oppbygning og funksjon',
    'forklare aksjonspotensial og signaloverføring',
    'gjøre rede for synapsefunksjon og nevrotransmittere',
    'drøfte sentralnervesystemets organisering',
  ],
  content: [
    {
      id: 'bio2-4-intro',
      type: 'text',
      content: `# Nervesystemet og signaloverføring

Nervesystemet koordinerer kroppens aktiviteter gjennom elektriske og kjemiske signaler.

## Nervesystemets inndeling
- **Sentralnervesystemet (SNS)**: Hjerne og ryggmarg
- **Perifert nervesystem (PNS)**: Nerver utenfor SNS
  - Somatisk: Viljestyrt (skjelettmuskulatur)
  - Autonomt: Ubevisst styrt (indre organer)`,
    },
    {
      id: 'bio2-4-def-nevron',
      type: 'definition',
      title: 'Nevron',
      content: 'Nevron (nervecelle) er den funksjonelle enheten i nervesystemet. Består av cellekropp (soma) med kjerne, dendritter (mottar signaler), akson (sender signaler) og aksonterminaler (synapseforbindelser). Mange aksoner er omgitt av myelinskjede som øker signalhastigheten.',
    },
    {
      id: 'bio2-4-aksjonspotensial',
      type: 'text',
      content: `## Aksjonspotensial

Aksjonspotensial er det elektriske signalet som ledes langs aksonet.

### Hvilemembranpotensial
- Innsiden av nevronet er ca. -70 mV i forhold til utsiden
- Opprettholdes av Na+/K+-pumpen (3 Na+ ut, 2 K+ inn)

### Faser i aksjonspotensial
1. **Depolarisering**: Na+-kanaler åpnes, Na+ strømmer inn (+30 mV)
2. **Repolarisering**: Na+-kanaler lukkes, K+-kanaler åpnes, K+ strømmer ut
3. **Hyperpolarisering**: Undershoot under hvilepotensial
4. **Tilbake til hvile**: Na+/K+-pumpen gjenoppretter ionefordelingen

### Alt-eller-intet-prinsippet
Aksjonspotensial utløses kun hvis stimulus overstiger terskelverdien. Signalstyrke kodes av frekvens, ikke amplitude.`,
    },
    {
      id: 'bio2-4-synapse',
      type: 'text',
      content: `## Synapsen

Synapser er forbindelsespunkter mellom nevroner der signaler overføres.

### Kjemisk synapse
1. Aksjonspotensial når aksonterminalen
2. Ca2+-kanaler åpnes
3. Vesikler med nevrotransmitter fusjonerer med membranen
4. Nevrotransmitter frigjøres til synapsespalten
5. Nevrotransmitter binder til reseptorer på postsynaptisk celle
6. Ionkanaler åpnes/lukkes → EPSP eller IPSP

### Viktige nevrotransmittere
- **Acetylkolin**: Muskelkontraksjon, hukommelse
- **Dopamin**: Belønning, bevegelse
- **Serotonin**: Humør, søvn
- **GABA**: Hemming
- **Glutamat**: Eksitasjon`,
    },
    {
      id: 'bio2-4-example-1',
      type: 'example',
      title: 'Eksempel: Signalledning i myelinisert akson',
      problem: 'Forklar hvorfor myeliniserte aksoner leder signaler raskere enn umyeliniserte.',
      solution: `**Løsning:**

**Umyelinisert akson:**
- Aksjonspotensial må regenereres langs hele aksonet
- Kontinuerlig, langsom ledning

**Myelinisert akson:**
- Myelinskjeden isolerer aksonet
- Signalet "hopper" mellom Ranvierske innsnøringer (saltatorisk ledning)
- Ionkanaler kun ved innsnøringene
- Raskere og mer energieffektivt

Myeliniserte aksoner kan lede signaler med 100 m/s, umyeliniserte kun 1 m/s.`,
    },
  ],
  exercises: [
    {
      id: 'bio2-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hvilemembranpotensialet i et typisk nevron?',
      options: [
        { id: 'a', text: 'Ca. -70 mV', isCorrect: true },
        { id: 'b', text: 'Ca. +30 mV', isCorrect: false },
        { id: 'c', text: 'Ca. 0 mV', isCorrect: false },
        { id: 'd', text: 'Ca. -120 mV', isCorrect: false },
      ],
      solution: 'Hvilemembranpotensialet er ca. -70 mV, med innsiden negativ i forhold til utsiden.',
    },
    {
      id: 'bio2-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de fire fasene i et aksjonspotensial.',
      solution: '1) Depolarisering: Na+-kanaler åpnes, Na+ inn, membranpotensial stiger til +30 mV. 2) Repolarisering: Na+-kanaler inaktiveres, K+-kanaler åpnes, K+ ut. 3) Hyperpolarisering: Membranpotensial går under hvilenivå. 4) Gjenoppretting: Na+/K+-pumpen gjenoppretter ionefordelingen.',
    },
    {
      id: 'bio2-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken nevrotransmitter er hovedsakelig ansvarlig for muskelkontraksjon?',
      options: [
        { id: 'a', text: 'Acetylkolin', isCorrect: true },
        { id: 'b', text: 'Dopamin', isCorrect: false },
        { id: 'c', text: 'Serotonin', isCorrect: false },
        { id: 'd', text: 'GABA', isCorrect: false },
      ],
      solution: 'Acetylkolin frigjøres ved nevromuskulær synapse og utløser muskelkontraksjon.',
    },
    {
      id: 'bio2-4-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan nervegass (som sarin) påvirker synapsefunksjon og hvorfor det er dødelig.',
      solution: 'Sarin hemmer enzymet acetylkolinesterase som normalt bryter ned acetylkolin i synapsespalten. Resultatet er kontinuerlig stimulering av muskler og kjertler. Symptomer inkluderer ukontrollerte muskelsammentrekninger, overdreven sekresjon, og til slutt respirasjonsstans fordi åndedrettsmuskulaturen ikke kan slappe av.',
    },
    {
      id: 'bio2-4-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom EPSP og IPSP?',
      solution: 'EPSP (eksitatorisk postsynaptisk potensial) depolariserer membranen og gjør det lettere å utløse aksjonspotensial. IPSP (inhibitorisk postsynaptisk potensial) hyperpolariserer membranen og gjør det vanskeligere å utløse aksjonspotensial. Et nevron summerer alle EPSP og IPSP for å bestemme om aksjonspotensial skal fyres.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Hormonsystemet
// ============================================================================

export const CHAPTER_BIOLOGI_2_5: TextbookChapter = {
  id: 'biologi-2-5',
  courseId: 'biologi-2',
  chapterNumber: '5',
  title: 'Hormonsystemet',
  description: 'Endokrine kjertler, hormoner, virkningsmekanismer og regulering.',
  estimatedMinutes: 90,
  competenceGoals: [
    'beskrive de viktigste endokrine kjertlene og deres hormoner',
    'forklare hvordan hormoner virker på målceller',
    'gjøre rede for negativ tilbakekobling',
    'drøfte samspillet mellom nerve- og hormonsystemet',
  ],
  content: [
    {
      id: 'bio2-5-intro',
      type: 'text',
      content: `# Hormonsystemet

Hormonsystemet (det endokrine systemet) regulerer kroppsfunksjoner gjennom kjemiske budbringere - hormoner.

## Sammenligning med nervesystemet
| Egenskap | Nervesystem | Hormonsystem |
|----------|-------------|--------------|
| Signaltype | Elektrisk + kjemisk | Kjemisk |
| Hastighet | Rask (ms) | Langsom (sek-timer) |
| Varighet | Kort | Lang |
| Målspesifisitet | Spesifikke celler | Celler med reseptor |`,
    },
    {
      id: 'bio2-5-def-hormon',
      type: 'definition',
      title: 'Hormon',
      content: 'Et hormon er et signalmolekyl som produseres av endokrine kjertler, transporteres i blodet, og påvirker målceller med spesifikke reseptorer. Hormoner regulerer metabolisme, vekst, reproduksjon, humør og homeostase.',
    },
    {
      id: 'bio2-5-kjertler',
      type: 'text',
      content: `## Endokrine kjertler

### Hypothalamus
- Bindeledd mellom nerve- og hormonsystem
- Produserer frigjørings- og hemmingshormoner
- Kontrollerer hypofysen

### Hypofysen
**Forlappen:**
- Veksthormon (GH)
- TSH (stimulerer skjoldbruskkjertelen)
- ACTH (stimulerer binyrebarken)
- FSH og LH (kjønnshormoner)

**Baklappen:**
- ADH (vannbalanse)
- Oksytocin (fødsel, amming)

### Andre kjertler
- **Skjoldbruskkjertel**: Tyroksin (metabolisme)
- **Biskjoldbruskkjertel**: Parathormon (kalsium)
- **Binyrer**: Kortisol, adrenalin
- **Bukspyttkjertel**: Insulin, glukagon
- **Kjønnskjertler**: Østrogen, testosteron`,
    },
    {
      id: 'bio2-5-virkningsmekanismer',
      type: 'text',
      content: `## Hormonenes virkningsmekanismer

### Vannløselige hormoner (peptider, aminer)
1. Binder til reseptor på cellemembranen
2. Aktiverer sekundære budbringere (cAMP)
3. Enzymkaskade aktiveres
4. Rask, men kortvarig effekt

### Fettløselige hormoner (steroider, tyroksin)
1. Diffunderer gjennom cellemembranen
2. Binder til intracellulær reseptor
3. Hormon-reseptor-kompleks påvirker genekspresjon
4. Langsom, men langvarig effekt`,
    },
    {
      id: 'bio2-5-tilbakekobling',
      type: 'text',
      content: `## Negativ tilbakekobling

De fleste hormoner reguleres av negativ tilbakekobling.

### Eksempel: Tyroksinregulering
1. Hypothalamus frigjør TRH
2. TRH stimulerer hypofysen til å frigjøre TSH
3. TSH stimulerer skjoldbruskkjertelen til å produsere T3/T4
4. Høyt T3/T4-nivå hemmer hypothalamus og hypofyse
5. Mindre TRH og TSH frigjøres
6. T3/T4-produksjonen reduseres

Dette holder hormonnivået innenfor et smalt normalområde.`,
    },
    {
      id: 'bio2-5-example-1',
      type: 'example',
      title: 'Eksempel: Blodsukkerregulering',
      problem: 'Forklar hvordan insulin og glukagon samarbeider for å regulere blodsukkeret.',
      solution: `**Løsning:**

**Ved høyt blodsukker (etter måltid):**
- Betaceller i bukspyttkjertelen frigjør insulin
- Insulin stimulerer glukoseopptak i celler
- Stimulerer lagring som glykogen i lever
- Blodsukkeret synker

**Ved lavt blodsukker (faste):**
- Alfaceller frigjør glukagon
- Glukagon stimulerer glykogennedbrytning i lever
- Glukose frigjøres til blodet
- Blodsukkeret stiger

Insulin og glukagon har motsatte effekter og holder blodsukkeret stabilt rundt 5 mmol/L.`,
    },
  ],
  exercises: [
    {
      id: 'bio2-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket hormon senker blodsukkernivået?',
      options: [
        { id: 'a', text: 'Insulin', isCorrect: true },
        { id: 'b', text: 'Glukagon', isCorrect: false },
        { id: 'c', text: 'Adrenalin', isCorrect: false },
        { id: 'd', text: 'Kortisol', isCorrect: false },
      ],
      solution: 'Insulin produseres av betaceller i bukspyttkjertelen og senker blodsukkeret ved å stimulere glukoseopptak i celler.',
    },
    {
      id: 'bio2-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom hvordan vannløselige og fettløselige hormoner virker.',
      solution: 'Vannløselige hormoner (peptider) kan ikke passere cellemembranen og binder til membranreseptorer. De aktiverer sekundære budbringere som cAMP. Fettløselige hormoner (steroider) passerer membranen og binder til intracellulære reseptorer som direkte påvirker genekspresjon.',
    },
    {
      id: 'bio2-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hypofysens rolle i hormonsystemet?',
      options: [
        { id: 'a', text: 'Mesterkjertel som styrer andre endokrine kjertler', isCorrect: true },
        { id: 'b', text: 'Kun produksjon av veksthormon', isCorrect: false },
        { id: 'c', text: 'Regulering av kroppstemperatur', isCorrect: false },
        { id: 'd', text: 'Produksjon av fordøyelsesenzymer', isCorrect: false },
      ],
      solution: 'Hypofysen kalles "mesterkjertelen" fordi den produserer tropiske hormoner som styrer aktiviteten til andre endokrine kjertler (skjoldbruskkjertel, binyrer, gonader).',
    },
    {
      id: 'bio2-5-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan stress påvirker hormonsystemet gjennom HPA-aksen.',
      solution: 'HPA-aksen (Hypothalamus-Hypofyse-Binyre): Ved stress frigjør hypothalamus CRH som stimulerer hypofysen til å frigjøre ACTH. ACTH stimulerer binyrebarken til å produsere kortisol. Kortisol øker blodsukkeret, demper immunsystemet, og mobiliserer energireserver. Kronisk stress gir vedvarende høye kortisolnivåer som kan skade helse.',
    },
    {
      id: 'bio2-5-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva skjer ved type 1 diabetes og hvordan skiller det seg fra type 2?',
      solution: 'Type 1: Autoimmun sykdom der immunsystemet ødelegger betaceller. Ingen insulinproduksjon, krever insulininjeksjoner. Type 2: Cellene blir resistente mot insulin. Bukspyttkjertelen kompenserer først, men kan til slutt svikte. Ofte knyttet til livsstil, kan kontrolleres med kosthold, mosjon og medisiner.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Reproduksjon og utvikling
// ============================================================================

export const CHAPTER_BIOLOGI_2_6: TextbookChapter = {
  id: 'biologi-2-6',
  courseId: 'biologi-2',
  chapterNumber: '6',
  title: 'Reproduksjon og utvikling',
  description: 'Kjønnscelledannelse, befruktning, embryoutvikling og fosterutvikling.',
  estimatedMinutes: 90,
  competenceGoals: [
    'beskrive dannelse av kjønnsceller',
    'forklare befruktning og tidlig embryoutvikling',
    'gjøre rede for fosterutvikling og differensiering',
    'drøfte reproduktiv teknologi og etikk',
  ],
  content: [
    {
      id: 'bio2-6-intro',
      type: 'text',
      content: `# Reproduksjon og utvikling

Seksuell reproduksjon kombinerer genetisk materiale fra to foreldre og skaper genetisk variasjon i avkommet.

## Kjønnscelledannelse

### Spermatogenese (hos menn)
- Skjer i testiklenes sædkanaler
- Starter ved puberteten, fortsetter livet ut
- Én primær spermatocytt → 4 spermatozoer
- Tar ca. 74 dager

### Oogenese (hos kvinner)
- Starter før fødsel, fullføres ved befruktning
- Én primær oocytt → 1 egg + 3 pollegemer
- Eggceller modnes i follikler
- Kun 1-2 egg frigjøres per menstruasjonssyklus`,
    },
    {
      id: 'bio2-6-def-befruktning',
      type: 'definition',
      title: 'Befruktning',
      content: 'Befruktning er sammensmeltingen av egg og sædcelle til en diploid zygote. Akrosomreaksjonen lar sædcellen trenge gjennom eggcelens omgivelser. Kortikal reaksjon hindrer polyspermia (flere sædceller).',
    },
    {
      id: 'bio2-6-utvikling',
      type: 'text',
      content: `## Tidlig embryoutvikling

### Fra zygote til blastocyst
1. **Zygote**: Befruktet egg (dag 0)
2. **Kløving**: Raske celledelinger uten vekst
3. **Morula**: 16-32 celler (dag 3-4)
4. **Blastocyst**: Hul cellekulle (dag 5-6)
   - **Indre cellemasse** → foster
   - **Trofoblast** → morkake

### Implantasjon
Blastocysten fester seg til livmorveggen ca. dag 6-7.

### Gastrulasjon
Dannelse av tre kimlag:
- **Ektoderm**: Hud, nervesystem
- **Mesoderm**: Muskler, skjelett, blod
- **Endoderm**: Fordøyelsessystem, lunger`,
    },
    {
      id: 'bio2-6-differensiering',
      type: 'text',
      content: `## Celledifferensiering

Alle celler har samme DNA, men ulike gener uttrykkes.

### Hva styrer differensiering?
- **Signalmolekyler** fra naboceller
- **Transkripsjonsfaktorer** som aktiverer/deaktiverer gener
- **Epigenetiske modifikasjoner**
- **Posisjon i embryoet** (morfogen-gradienter)

### Stamceller
- **Totipotente**: Kan bli alle celletyper + morkake (zygote-8 celler)
- **Pluripotente**: Kan bli alle celletyper (indre cellemasse)
- **Multipotente**: Flere celletyper i ett vev (blodstamceller)
- **Unipotente**: Kun én celletype`,
    },
    {
      id: 'bio2-6-example-1',
      type: 'example',
      title: 'Eksempel: Hox-gener og kroppsaksen',
      problem: 'Forklar hvordan Hox-gener styrer utviklingen av kroppens akse.',
      solution: `**Løsning:**

Hox-gener er transkripsjonsfaktorer som bestemmer hvilken kroppsregion som utvikles.

**Nøkkelpunkter:**
1. Hox-gener ligger i klynger på kromosomene
2. Genenes rekkefølge på kromosomet tilsvarer rekkefølgen langs kroppsaksen
3. Aktiveres av morfogen-gradienter
4. Bestemmer identiteten til kroppssegmenter

**Eksempel:** En mutasjon kan føre til at et segment utvikler "feil" kroppsdel - som insekter med ben der antenner skulle vært (antennapedia-mutasjon).

Hox-gener er svært konserverte og finnes hos alle dyr.`,
    },
  ],
  exercises: [
    {
      id: 'bio2-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange funksjonelle eggceller produseres fra én primær oocytt?',
      options: [
        { id: 'a', text: '1', isCorrect: true },
        { id: 'b', text: '2', isCorrect: false },
        { id: 'c', text: '4', isCorrect: false },
        { id: 'd', text: '8', isCorrect: false },
      ],
      solution: 'Oogenese produserer kun 1 funksjonell eggcelle og 3 pollegemer (som brytes ned). Dette sikrer at egget får maksimalt med cytoplasma og næringsstoffer.',
    },
    {
      id: 'bio2-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom totipotente og pluripotente stamceller?',
      solution: 'Totipotente stamceller kan utvikle seg til alle celletyper inkludert morkakevev (zygote til 8-cellestadiet). Pluripotente stamceller (indre cellemasse) kan bli alle celletyper i kroppen, men ikke morkakevev.',
    },
    {
      id: 'bio2-6-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket kimlag gir opphav til nervesystemet?',
      options: [
        { id: 'a', text: 'Ektoderm', isCorrect: true },
        { id: 'b', text: 'Mesoderm', isCorrect: false },
        { id: 'c', text: 'Endoderm', isCorrect: false },
        { id: 'd', text: 'Trofoblast', isCorrect: false },
      ],
      solution: 'Ektoderm gir opphav til nervesystemet, hud, hår og negler.',
    },
    {
      id: 'bio2-6-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva induserte pluripotente stamceller (iPS-celler) er og hvorfor de er viktige for medisin.',
      solution: 'iPS-celler er voksne celler som er reprogrammert tilbake til pluripotent tilstand ved å aktivere spesifikke gener (Yamanaka-faktorer). Viktige fordi: 1) Unngår etiske problemer med embryonale stamceller, 2) Kan lages fra pasientens egne celler (ingen avstøtning), 3) Kan brukes til sykdomsmodellering og legemiddeltesting, 4) Potensiell kilde for celletransplantasjon.',
    },
    {
      id: 'bio2-6-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva som skjer under implantasjon av blastocysten.',
      solution: 'Implantasjon (dag 6-7): Blastocysten fester seg til livmorveggen (endometriet). Trofoblastceller trenger inn i endometriet og etablerer kontakt med morens blodforsyning. hCG-hormon skilles ut og opprettholder gullegemet som produserer progesteron. Morkaken begynner å dannes.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Atferdsbiologi
// ============================================================================

export const CHAPTER_BIOLOGI_2_7: TextbookChapter = {
  id: 'biologi-2-7',
  courseId: 'biologi-2',
  chapterNumber: '7',
  title: 'Atferdsbiologi',
  description: 'Medfødt og lært atferd, kommunikasjon, sosial atferd og evolusjon av atferd.',
  estimatedMinutes: 90,
  competenceGoals: [
    'skille mellom medfødt og lært atferd',
    'beskrive ulike former for læring',
    'forklare kommunikasjon og sosial atferd hos dyr',
    'drøfte evolusjonære forklaringer på atferd',
  ],
  content: [
    {
      id: 'bio2-7-intro',
      type: 'text',
      content: `# Atferdsbiologi

Atferdsbiologi (etologi) studerer dyrs atferd fra et biologisk perspektiv - både dens umiddelbare årsaker og evolusjonære opprinnelse.

## Tinbergens fire spørsmål
1. **Mekanisme**: Hvordan fungerer atferden?
2. **Utvikling**: Hvordan utvikles atferden i individet?
3. **Funksjon**: Hva er atferdens adaptiv verdi?
4. **Evolusjon**: Hvordan har atferden utviklet seg?`,
    },
    {
      id: 'bio2-7-def-instinkt',
      type: 'definition',
      title: 'Medfødt atferd',
      content: 'Medfødt (instinktiv) atferd er stereotyp, arvelig atferd som utføres uten forutgående læring. Utløses av spesifikke stimuli (nøkkelstimuli) og består ofte av faste handlingsmønstre (FAP - Fixed Action Pattern).',
    },
    {
      id: 'bio2-7-laering',
      type: 'text',
      content: `## Lært atferd

### Habituering
Redusert respons på gjentatt, ufarlig stimulus.

### Klassisk betinging (Pavlov)
Assosiasjon mellom ubetinget stimulus (mat) og betinget stimulus (klokke).

### Operant betinging (Skinner)
Læring gjennom konsekvenser:
- **Forsterkning**: Øker atferd (positiv/negativ)
- **Straff**: Reduserer atferd

### Preging (Lorenz)
Rask læring i kritisk periode. Klassisk: Andeunger følger første bevegelige objekt de ser.

### Sosial læring
Læring ved å observere andre (kulturtradisjon hos aper).`,
    },
    {
      id: 'bio2-7-kommunikasjon',
      type: 'text',
      content: `## Kommunikasjon

Signaler mellom individer som påvirker atferd.

### Signaltyper
- **Visuelle**: Farger, bevegelser, kroppsspråk
- **Auditive**: Sang, skrik, ultralyd
- **Kjemiske**: Feromoner (seksuell attraksjon, alarm)
- **Taktile**: Berøring, vibrasjoner

### Honningbienes dans
- **Rundans**: Mat nær kuben (<50m)
- **Vaggedans**: Mat lenger unna
  - Retning = vinkel i forhold til solen
  - Varighet = avstand`,
    },
    {
      id: 'bio2-7-sosial',
      type: 'text',
      content: `## Sosial atferd og altruisme

### Altruisme-paradokset
Hvorfor hjelpe andre på bekostning av egen fitness?

### Forklaringer
1. **Slektskapseleksjon** (Hamilton)
   - $rB > C$ (r=slektskap, B=nytte, C=kostnad)
   - Favoriserer hjelp til slektninger

2. **Resiprok altruisme** (Trivers)
   - "Du klør min rygg, jeg klør din"
   - Krever gjenkjenning og gjentatte møter

3. **Gruppeseleksjon**
   - Kontroversielt - grupper med samarbeid utkonkurrerer andre`,
    },
    {
      id: 'bio2-7-example-1',
      type: 'example',
      title: 'Eksempel: Slektskapseleksjon hos bier',
      problem: 'Forklar hvorfor arbeiderbier (som er sterile) hjelper dronningen med reproduksjon.',
      solution: `**Løsning:**

Hos bier er hunner (dronning og arbeidere) diploide, mens hanner (droner) er haploide.

**Slektskapsforhold:**
- Søstre deler 75% av genene (alle gener fra far + 50% fra mor)
- En datter deler bare 50% av genene med mor

**Hamilton's regel:** rB > C
- r (slektskap til søstre) = 0.75
- Nytten av å hjelpe søstre reprodusere > egen reproduksjon

**Konklusjon:** Det er mer lønnsomt for arbeiderbier å hjelpe dronningen produsere søstre enn å produsere egne døtre. Dette forklarer utviklingen av sterile arbeiderklasser i eusosiale insekter.`,
    },
  ],
  exercises: [
    {
      id: 'bio2-7-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er habituering?',
      options: [
        { id: 'a', text: 'Redusert respons på gjentatt, ufarlig stimulus', isCorrect: true },
        { id: 'b', text: 'Læring gjennom belønning', isCorrect: false },
        { id: 'c', text: 'Medfødt atferd utløst av nøkkelstimulus', isCorrect: false },
        { id: 'd', text: 'Læring i kritisk periode', isCorrect: false },
      ],
      solution: 'Habituering er den enkleste formen for læring - dyr slutter å reagere på stimuli som verken er skadelige eller nyttige.',
    },
    {
      id: 'bio2-7-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom klassisk og operant betinging.',
      solution: 'Klassisk betinging: Lærer assosiasjon mellom to stimuli (Pavlovs hund). Dyr er passiv mottaker. Operant betinging: Lærer assosiasjon mellom atferd og konsekvens. Dyr er aktiv deltaker. Atferd som belønnes gjentas, atferd som straffes unngås.',
    },
    {
      id: 'bio2-7-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er et feromon?',
      options: [
        { id: 'a', text: 'Kjemisk signal mellom individer av samme art', isCorrect: true },
        { id: 'b', text: 'Hormon som regulerer atferd', isCorrect: false },
        { id: 'c', text: 'Visuelt signal for parring', isCorrect: false },
        { id: 'd', text: 'Nervesignal som styrer instinkt', isCorrect: false },
      ],
      solution: 'Feromoner er kjemiske signaler som frigjøres av et individ og påvirker atferden eller fysiologien til andre individer av samme art.',
    },
    {
      id: 'bio2-7-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar Hamiltons regel (rB > C) og gi et eksempel.',
      solution: 'Hamiltons regel sier at altruistisk atferd evolveres når r × B > C, der r = slektsgrad, B = nytte for mottaker (i fitness), C = kostnad for giver. Eksempel: Jordekorn varsler om rovdyr. Selv om varsling øker risikoen for varsleren, hjelper det nære slektninger å overleve. Hvis den inkluderende fitnessgevinsten overstiger kostnaden, vil atferden favoriseres av naturlig utvalg.',
    },
    {
      id: 'bio2-7-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv preging og forklar hvorfor den kun kan skje i en kritisk periode.',
      solution: 'Preging er rask læring tidlig i livet som påvirker senere atferd (f.eks. morgjenkjenning, seksuell preferanse). Skjer kun i kritisk periode fordi hjernen da er spesielt mottakelig for visse stimuli og forbindelser dannes raskt. Etter kritisk periode er hjernen mindre plastisk. Evolusjonært fordelaktig fordi det sikrer rask tilknytning til omsorgsgiver.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Populasjonsøkologi
// ============================================================================

export const CHAPTER_BIOLOGI_2_8: TextbookChapter = {
  id: 'biologi-2-8',
  courseId: 'biologi-2',
  chapterNumber: '8',
  title: 'Populasjonsøkologi',
  description: 'Populasjonsdynamikk, vekstmodeller, bæreevne og bestandsregulering.',
  estimatedMinutes: 90,
  competenceGoals: [
    'beskrive faktorer som påvirker populasjonsstørrelse',
    'forklare eksponentiell og logistisk vekst',
    'gjøre rede for bæreevne og populasjonsregulering',
    'analysere populasjonsdata og prognoser',
  ],
  content: [
    {
      id: 'bio2-8-intro',
      type: 'text',
      content: `# Populasjonsøkologi

Populasjonsøkologi studerer hvordan populasjoner (grupper av individer av samme art) endres over tid.

## Populasjonskarakteristikker
- **Størrelse (N)**: Antall individer
- **Tetthet**: Individer per areal
- **Spredning**: Klumpet, tilfeldig, jevn
- **Aldersstruktur**: Fordeling av aldersgrupper`,
    },
    {
      id: 'bio2-8-def-vekstrate',
      type: 'definition',
      title: 'Populasjonsvekstrate',
      content: 'Vekstraten (r) beskriver hvor raskt en populasjon endrer størrelse: $r = b - d$, der b = fødselsrate og d = dødsrate. Positiv r = vekst, negativ r = nedgang, r = 0 = stabil populasjon.',
    },
    {
      id: 'bio2-8-eksponentiell',
      type: 'text',
      content: `## Eksponentiell vekst

Ubegrenset vekst under ideelle forhold.

### Modell
$$\\frac{dN}{dt} = rN$$

### Løsning
$$N(t) = N_0 e^{rt}$$

### Kjennetegn
- J-formet vekstkurve
- Doblingstid: $t_d = \\frac{\\ln 2}{r}$
- Skjer sjelden i naturen over lang tid
- Kan forekomme ved kolonisering av nytt habitat`,
    },
    {
      id: 'bio2-8-logistisk',
      type: 'text',
      content: `## Logistisk vekst

Vekst begrenset av miljøets bæreevne.

### Modell
$$\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)$$

### Bæreevne (K)
Maksimalt antall individer miljøet kan opprettholde.

### Kjennetegn
- S-formet vekstkurve
- Veksten avtar når N nærmer seg K
- Stabiliseres rundt K

### Begrensende faktorer
- **Tetthetsavhengige**: Mat, plass, sykdom
- **Tetthetsuavhengige**: Klima, naturkatastrofer`,
    },
    {
      id: 'bio2-8-strategier',
      type: 'text',
      content: `## Livshistoriestrategier

### r-strateger
- Mange, små avkom
- Lite foreldreomsorg
- Rask utvikling
- Kort levetid
- Eksempel: Insekter, mange fisker

### K-strateger
- Få, store avkom
- Mye foreldreomsorg
- Langsom utvikling
- Lang levetid
- Eksempel: Elefanter, mennesker`,
    },
    {
      id: 'bio2-8-example-1',
      type: 'example',
      title: 'Eksempel: Beregne doblingstid',
      problem: 'En bakteriepopulasjon har vekstrate r = 0.5 per time. Hva er doblingstiden?',
      solution: `**Løsning:**

Doblingstid: $t_d = \\frac{\\ln 2}{r}$

$t_d = \\frac{0.693}{0.5} = 1.39$ timer

**Svar:** Populasjonen dobles omtrent hver 1.4 time (84 minutter).`,
    },
  ],
  exercises: [
    {
      id: 'bio2-8-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva beskriver bæreevnen (K)?',
      options: [
        { id: 'a', text: 'Maksimalt antall individer miljøet kan opprettholde', isCorrect: true },
        { id: 'b', text: 'Populasjonens vekstrate', isCorrect: false },
        { id: 'c', text: 'Antall fødsler per år', isCorrect: false },
        { id: 'd', text: 'Populasjonens geografiske utbredelse', isCorrect: false },
      ],
      solution: 'Bæreevnen (K) er det maksimale antallet individer et habitat kan støtte gitt tilgjengelige ressurser.',
    },
    {
      id: 'bio2-8-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom eksponentiell og logistisk vekst.',
      solution: 'Eksponentiell vekst: Ubegrenset, J-formet kurve, $dN/dt = rN$. Forutsetter ingen ressursbegrensning. Logistisk vekst: Begrenset av bæreevne, S-formet kurve, $dN/dt = rN(1-N/K)$. Vekstraten avtar når populasjonen nærmer seg K.',
    },
    {
      id: 'bio2-8-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En populasjon starter med 100 individer og har r = 0.1 per år. Beregn populasjonsstørrelsen etter 10 år med eksponentiell vekst.',
      solution: '$N(t) = N_0 e^{rt} = 100 \\times e^{0.1 \\times 10} = 100 \\times e^1 = 100 \\times 2.718 \\approx 272$ individer.',
      hints: ['Bruk formelen N(t) = N₀ × e^(rt)', 'e ≈ 2.718'],
    },
    {
      id: 'bio2-8-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken er en tetthetsavhengig begrensende faktor?',
      options: [
        { id: 'a', text: 'Konkurranse om mat', isCorrect: true },
        { id: 'b', text: 'Flom', isCorrect: false },
        { id: 'c', text: 'Skogbrann', isCorrect: false },
        { id: 'd', text: 'Frost', isCorrect: false },
      ],
      solution: 'Konkurranse om mat øker med populasjonstetthet - jo flere individer, jo sterkere konkurranse. Naturkatastrofer er tetthetsuavhengige.',
    },
    {
      id: 'bio2-8-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor logistisk vekst gir maksimal veksthastighet ved N = K/2.',
      solution: 'I logistisk vekst er $dN/dt = rN(1-N/K)$. For å finne maksimum, deriverer vi og setter lik null. Veksten er maksimal når $N = K/2$ fordi: Ved lav N er det få individer til å reprodusere. Ved høy N (nær K) bremser konkurranse veksten. Ved N = K/2 er det optimal balanse mellom reproduktive individer og tilgjengelige ressurser.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Bioteknologi og genteknologi
// ============================================================================

export const CHAPTER_BIOLOGI_2_9: TextbookChapter = {
  id: 'biologi-2-9',
  courseId: 'biologi-2',
  chapterNumber: '9',
  title: 'Bioteknologi og genteknologi',
  description: 'Rekombinant DNA, PCR, CRISPR, GMO og medisinsk bioteknologi.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forklare grunnleggende genteknologiske metoder',
    'beskrive anvendelser av bioteknologi',
    'gjøre rede for CRISPR-teknologi',
    'drøfte fordeler og risikoer ved GMO',
  ],
  content: [
    {
      id: 'bio2-9-intro',
      type: 'text',
      content: `# Bioteknologi og genteknologi

Bioteknologi bruker levende organismer eller biologiske systemer til å lage produkter eller løse problemer. Genteknologi er manipulering av DNA.

## Verktøykassen
- **Restriksjonsenzymer**: Klipper DNA ved spesifikke sekvenser
- **DNA-ligase**: Limer DNA-fragmenter sammen
- **Vektorer**: Plasmider, virus som overfører DNA
- **PCR**: Kopiering av DNA`,
    },
    {
      id: 'bio2-9-def-pcr',
      type: 'definition',
      title: 'PCR (Polymerase Chain Reaction)',
      content: 'PCR er en metode for å amplifisere (kopiere) DNA-sekvenser eksponentielt. Trinnene gjentas 30-40 ganger: 1) Denaturering (95°C) - DNA-trådene separeres. 2) Annealing (50-65°C) - Primere binder til målsekvens. 3) Elongering (72°C) - DNA-polymerase syntetiserer nye tråder.',
    },
    {
      id: 'bio2-9-rekombinant',
      type: 'text',
      content: `## Rekombinant DNA-teknologi

### Fremstilling av rekombinant DNA
1. Isoler gen fra kilde-DNA
2. Klipp med restriksjonsenzym
3. Sett genet inn i vektor (plasmid)
4. Transformér vertscelle (f.eks. bakterie)
5. Selekter celler med rekombinant DNA
6. Dyrk og høst produkt

### Anvendelser
- **Insulin**: Humant insulingen i E. coli
- **Veksthormoner**: For behandling av vekstforstyrrelser
- **Enzymer**: Vaskemidler, næringsmiddelindustri`,
    },
    {
      id: 'bio2-9-crispr',
      type: 'text',
      content: `## CRISPR-Cas9

CRISPR er en revolusjonerende genredigeringsmetode.

### Komponenter
- **Cas9**: Enzym som kutter DNA
- **Guide-RNA**: Leder Cas9 til riktig sted i genomet

### Mekanisme
1. Guide-RNA designes for målsekvensen
2. Cas9-gRNA-kompleks finner målet
3. Cas9 kutter begge DNA-tråder
4. Cellens reparasjonsmaskineri:
   - NHEJ: Tilfeldig reparasjon → gen-knockout
   - HDR: Presis reparasjon med DNA-mal → geninnsetting

### Fordeler over eldre metoder
- Billigere, raskere, mer presis
- Kan redigere flere gener samtidig`,
    },
    {
      id: 'bio2-9-gmo',
      type: 'text',
      content: `## Genmodifiserte organismer (GMO)

### Eksempler på GMO-planter
- **Bt-mais**: Produserer insektgift
- **Roundup Ready**: Resistent mot ugressmiddel
- **Gyllen ris**: Inneholder provitamin A

### Fordeler
- Økt avling og næringsinnhold
- Redusert pesticidbehov
- Tørke- og salttoleranse

### Bekymringer
- Spredning til ville slektninger
- Redusert biodiversitet
- Økonomisk avhengighet av frøselskaper
- Usikkerhet om langtidseffekter`,
    },
    {
      id: 'bio2-9-example-1',
      type: 'example',
      title: 'Eksempel: DNA-fingeravtrykk',
      problem: 'Forklar hvordan DNA-fingeravtrykk brukes i kriminalteknikk.',
      solution: `**Løsning:**

DNA-fingeravtrykk (DNA-profil) baseres på analyse av STR (Short Tandem Repeats) - korte, repeterte sekvenser som varierer mellom individer.

**Metode:**
1. DNA isoleres fra prøve (blod, hår, spytt)
2. STR-regioner amplifiseres med PCR
3. Fragmenter separeres med elektroforese
4. Mønsteret sammenlignes med referanseprøver

**Anvendelser:**
- Identifikasjon av gjerningsmenn
- Farskapstesting
- Identifikasjon av katastrofeofre
- Frikjennelse av uskyldige

Sannsynligheten for at to urelatedede personer har identisk DNA-profil er <1 i 1 milliard.`,
    },
  ],
  exercises: [
    {
      id: 'bio2-9-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er funksjonen til restriksjonsenzymer?',
      options: [
        { id: 'a', text: 'Klippe DNA ved spesifikke sekvenser', isCorrect: true },
        { id: 'b', text: 'Kopiere DNA', isCorrect: false },
        { id: 'c', text: 'Oversette mRNA til protein', isCorrect: false },
        { id: 'd', text: 'Lime DNA-fragmenter sammen', isCorrect: false },
      ],
      solution: 'Restriksjonsenzymer gjenkjenner spesifikke DNA-sekvenser og kutter molekylet der. De brukes som "molekylære sakser" i genteknologi.',
    },
    {
      id: 'bio2-9-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre hovedtrinnene i PCR.',
      solution: '1) Denaturering (95°C): Hydrogenbindinger brytes, DNA-dobbeltheliks separeres til enkelttråder. 2) Annealing (50-65°C): Primere binder til komplementære sekvenser på hver tråd. 3) Elongering (72°C): DNA-polymerase (Taq) syntetiserer nye tråder fra primerene. Syklusen gjentas 30-40 ganger.',
    },
    {
      id: 'bio2-9-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er guide-RNA sin funksjon i CRISPR-Cas9?',
      options: [
        { id: 'a', text: 'Lede Cas9 til riktig sted i genomet', isCorrect: true },
        { id: 'b', text: 'Kutte DNA-tråden', isCorrect: false },
        { id: 'c', text: 'Reparere kuttet DNA', isCorrect: false },
        { id: 'd', text: 'Kopiere målgenet', isCorrect: false },
      ],
      solution: 'Guide-RNA er komplementært til målsekvensen og leder Cas9-enzymet til riktig plass i genomet hvor kutting skal skje.',
    },
    {
      id: 'bio2-9-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter etiske utfordringer ved genredigering av menneskelige embryoer.',
      solution: 'Utfordringer inkluderer: 1) Germline-endringer arves til fremtidige generasjoner uten deres samtykke. 2) Sikkerhet - utilsiktede off-target-mutasjoner. 3) Tilgjengelighet - kan øke sosial ulikhet. 4) "Designer-babyer" - hvor går grensen mellom behandling og forbedring? 5) Mangel på internasjonal regulering. Mange land forbyr germline-redigering, men teknologien utvikler seg raskere enn lovgivningen.',
    },
    {
      id: 'bio2-9-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan insulin produseres ved hjelp av rekombinant DNA-teknologi.',
      solution: 'Prosessen: 1) Humant insulingen isoleres eller syntetiseres. 2) Genet settes inn i plasmidvektor. 3) Rekombinant plasmid overføres til E. coli. 4) Bakterier dyrkes i store bioreaktorer. 5) Bakteriene produserer humant insulin. 6) Insulin renses og prosesseres. Dette ga første gang tilgang til ubegrenset mengde humant insulin (tidligere fra gris/ku).',
    },
  ],
};

// ============================================================================
// Kapittel 10: Bioetikk og bærekraft
// ============================================================================

export const CHAPTER_BIOLOGI_2_10: TextbookChapter = {
  id: 'biologi-2-10',
  courseId: 'biologi-2',
  chapterNumber: '10',
  title: 'Bioetikk og bærekraft',
  description: 'Etiske prinsipper i biologi, klimaendringer, biodiversitet og bærekraftig utvikling.',
  estimatedMinutes: 90,
  competenceGoals: [
    'anvende etiske prinsipper på biologiske problemstillinger',
    'beskrive årsaker og konsekvenser av klimaendringer',
    'gjøre rede for trusler mot biodiversitet',
    'drøfte bærekraftig forvaltning av naturressurser',
  ],
  content: [
    {
      id: 'bio2-10-intro',
      type: 'text',
      content: `# Bioetikk og bærekraft

Bioetikk handler om etiske spørsmål knyttet til biologi og medisin. Bærekraft handler om å møte dagens behov uten å ødelegge for fremtidige generasjoner.

## Etiske prinsipper
- **Autonomi**: Respekt for individets selvbestemmelse
- **Velgjørenhet**: Handle til beste for andre
- **Ikke-skade**: Unngå å påføre skade
- **Rettferdighet**: Lik fordeling av goder og byrder`,
    },
    {
      id: 'bio2-10-klima',
      type: 'text',
      content: `## Klimaendringer

### Drivhuseffekten
Atmosfærens gasser (CO₂, CH₄, N₂O) absorberer varmestråling og holder jorden varm. Naturlig drivhuseffekt er nødvendig, men menneskelig aktivitet forsterker den.

### Menneskelige bidrag
- Forbrenning av fossilt brensel
- Avskoging
- Landbruk (metan fra husdyr)
- Industri

### Konsekvenser
- Global oppvarming
- Havnivåstigning
- Ekstremvær
- Endrede økosystemer
- Artsutryddelse`,
    },
    {
      id: 'bio2-10-def-biodiversitet',
      type: 'definition',
      title: 'Biodiversitet',
      content: 'Biodiversitet (biologisk mangfold) omfatter: 1) Genetisk diversitet innen arter, 2) Artsdiversitet - antall ulike arter, 3) Økosystemdiversitet - variasjon i habitater og økologiske prosesser. Biodiversitet er grunnlaget for økosystemtjenester og menneskers velferd.',
    },
    {
      id: 'bio2-10-trusler',
      type: 'text',
      content: `## Trusler mot biodiversitet

### HIPPO-faktorene
- **H**abitat-ødeleggelse: Avskoging, urbanisering
- **I**nvasive arter: Fremmede arter utkonkurrerer lokale
- **P**ollution: Forurensning av luft, vann, jord
- **P**opulasjonsvekst: Økt ressursbruk
- **O**verbeskatning: Overfiske, jakt

### Sjette masseutryddelse
Vi opplever nå en artsutryddelse 100-1000x raskere enn naturlig bakgrunnsnivå.`,
    },
    {
      id: 'bio2-10-baerekraft',
      type: 'text',
      content: `## Bærekraftig utvikling

### FNs bærekraftsmål (relevante for biologi)
- Mål 13: Stoppe klimaendringene
- Mål 14: Liv under vann
- Mål 15: Liv på land

### Bevaringsstrategier
- **Verneområder**: Nasjonalparker, naturreservater
- **Artsbevaring**: Rødlister, avlsprogrammer
- **Restaurering**: Gjenoppretting av ødelagte habitater
- **Bærekraftig høsting**: Kvoter, sertifisering

### Sirkulær økonomi
- Redusere forbruk
- Gjenbruke materialer
- Resirkulere avfall`,
    },
    {
      id: 'bio2-10-example-1',
      type: 'example',
      title: 'Eksempel: Etisk analyse av xenotransplantasjon',
      problem: 'Bruk etiske prinsipper til å analysere xenotransplantasjon (transplantasjon av organer fra dyr til mennesker).',
      solution: `**Løsning:**

**Velgjørenhet:**
+ Kan redde liv ved organmangel
+ Ubegrenset tilgang på organer

**Ikke-skade:**
- Risiko for zoonoser (sykdommer fra dyr)
- Ukjente langtidseffekter
- Dyrevelferd

**Autonomi:**
+ Pasienten kan samtykke informert
- Dyr kan ikke gi samtykke

**Rettferdighet:**
? Hvem får tilgang?
? Er det rettferdig overfor dyrene?

**Konklusjon:** Xenotransplantasjon reiser komplekse etiske spørsmål som krever avveining mellom menneskeliv, dyrevelferd og samfunnsrisiko.`,
    },
  ],
  exercises: [
    {
      id: 'bio2-10-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken gass er den viktigste menneskeskapte bidragsyteren til drivhuseffekten?',
      options: [
        { id: 'a', text: 'Karbondioksid (CO₂)', isCorrect: true },
        { id: 'b', text: 'Oksygen (O₂)', isCorrect: false },
        { id: 'c', text: 'Nitrogen (N₂)', isCorrect: false },
        { id: 'd', text: 'Hydrogen (H₂)', isCorrect: false },
      ],
      solution: 'CO₂ fra forbrenning av fossilt brensel er det største menneskelige bidraget til forsterket drivhuseffekt.',
    },
    {
      id: 'bio2-10-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva HIPPO-faktorene er og gi eksempler på hver.',
      solution: 'HIPPO: H - Habitat-ødeleggelse (regnskogshogst), I - Invasive arter (brunsneglen i Norge), P - Pollution (plastforurensning), P - Populasjonsvekst (økt ressursbruk), O - Overbeskatning (overfiske av torsk). Disse er de viktigste menneskelige driverne av biodiversitetstap.',
    },
    {
      id: 'bio2-10-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med økosystemtjenester?',
      options: [
        { id: 'a', text: 'Goder naturen gir mennesker (mat, rent vann, pollinering)', isCorrect: true },
        { id: 'b', text: 'Tjenester mennesker gir til økosystemer', isCorrect: false },
        { id: 'c', text: 'Betaling for miljøskader', isCorrect: false },
        { id: 'd', text: 'Økologisk forskning', isCorrect: false },
      ],
      solution: 'Økosystemtjenester er goder mennesker får fra naturen: mat, rent vann, pollinering, karbonlagring, flomdemping, rekreasjon m.m.',
    },
    {
      id: 'bio2-10-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft etiske dilemmaer ved genredigering for å utrydde malariamygg.',
      solution: 'Fordeler: Malaria dreper ~600 000 mennesker årlig, mest barn. Genredigering (gene drive) kan eliminere sykdommen. Etiske bekymringer: 1) Uforutsette økologiske konsekvenser av å fjerne en art. 2) Irreversibelt - kan ikke angres. 3) Grenseoverskridende - påvirker alle land. 4) Hvem bestemmer? 5) Slippery slope - hvilke andre arter kan vi fjerne? Krever global diskusjon og føre-var-tilnærming.',
    },
    {
      id: 'bio2-10-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom in-situ og ex-situ bevaring?',
      solution: 'In-situ bevaring: Vern av arter i deres naturlige habitat (nasjonalparker, naturreservater). Bevarer hele økosystemer og evolusjonære prosesser. Ex-situ bevaring: Vern utenfor naturlig habitat (dyreparker, frøbanker, genbanker). Fungerer som "forsikring" og muliggjør avlsprogrammer. Ideelt brukes begge metodene sammen.',
    },
  ],
};

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const BIOLOGI_2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_2_1,
  CHAPTER_BIOLOGI_2_2,
  CHAPTER_BIOLOGI_2_3,
  CHAPTER_BIOLOGI_2_4,
  CHAPTER_BIOLOGI_2_5,
  CHAPTER_BIOLOGI_2_6,
  CHAPTER_BIOLOGI_2_7,
  CHAPTER_BIOLOGI_2_8,
  CHAPTER_BIOLOGI_2_9,
  CHAPTER_BIOLOGI_2_10,
];

export function getBiologi2Chapter(chapterId: string): TextbookChapter | undefined {
  return BIOLOGI_2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
