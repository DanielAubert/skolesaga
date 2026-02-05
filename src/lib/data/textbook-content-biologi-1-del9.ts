/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Kapittel 9: Bioteknologi (delkapitler)
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 * Utvidet fra hovedkapittel 9 til 5 delkapitler med fordypning
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Bioteknologiens grunnlag
// ============================================================================

export const CHAPTER_BIOLOGI_1_9_1: TextbookChapter = {
  id: 'biologi-1-9-1',
  courseId: 'biologi-1',
  chapterNumber: '9.1',
  title: 'Bioteknologiens grunnlag',
  description: 'Tradisjonell vs moderne bioteknologi, verktøy som restriksjonsenzymer og ligaser, samt vektorer som plasmider.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for hva bioteknologi er og hvordan det har utviklet seg',
    'forklare hvordan restriksjonsenzymer og ligaser brukes',
    'beskrive plasmider som vektorer i genteknologi',
    'skille mellom tradisjonell og moderne bioteknologi',
  ],
  content: [
    {
      id: 'bio1-9-1-intro',
      type: 'text',
      content: `# Bioteknologiens grunnlag

Bioteknologi er bruk av levende organismer eller biologiske prosesser til å lage produkter eller løse problemer. Mennesker har brukt bioteknologi i tusenvis av år, men moderne genteknologi har revolusjonert feltet.

## Fra tradisjonell til moderne bioteknologi

### Tradisjonell bioteknologi
Mennesker har i årtusener utnyttet mikroorganismer uten å forstå de underliggende mekanismene:

- **Gjæring**: Øl, vin og brød har blitt laget i over 6000 år
- **Fermentering**: Ost, yoghurt, sauerkraut og kimchi
- **Selektiv avl**: Foredling av husdyr og kulturplanter
- **Kompostering**: Utnyttelse av nedbrytere

### Moderne bioteknologi
Fra 1970-tallet ble det mulig å manipulere DNA direkte:

- **1973**: Første rekombinante DNA-molekyl
- **1982**: Første rekombinante legemiddel (insulin) godkjent
- **1990**: Første genterapi-forsøk på mennesker
- **2012**: CRISPR-Cas9 som genredigeringsverktøy`,
    },
    {
      id: 'bio1-9-1-def-bioteknologi',
      type: 'definition',
      title: 'Bioteknologi',
      content: 'Bioteknologi er teknologi som utnytter levende celler, mikroorganismer eller biologiske molekyler til å lage produkter eller tjenester. Moderne bioteknologi inkluderer genteknologi, der man direkte manipulerer DNA for å endre organismer eller produsere ønskede proteiner.',
    },
    {
      id: 'bio1-9-1-restriksjonsenzymer',
      type: 'text',
      content: `## Restriksjonsenzymer - molekylære sakser

Restriksjonsenzymer er naturlige proteiner som finnes i bakterier og fungerer som forsvar mot virus. De gjenkjenner spesifikke DNA-sekvenser og klipper DNA-tråden på disse stedene.

### Egenskaper
- Gjenkjenner sekvenser på 4-8 basepar
- Sekvensene er ofte palindromer (leser likt begge veier)
- Klipper begge DNA-trådene
- Over 3000 forskjellige restriksjonsenzymer er identifisert

### Kuttmønstre
**Klebrige ender (sticky ends):**
- Asymmetrisk kutt gir enkelttrådede overheng
- Eksempel: EcoRI klipper sekvensen GAATTC
- Lettere å sette sammen med komplementære fragmenter

**Butte ender (blunt ends):**
- Symmetrisk kutt gir flate ender
- Ingen overheng
- Vanskeligere å lime sammen

### Navngiving
Enzymene navngis etter bakterien de ble isolert fra:
- **Eco**RI = *Escherichia coli*, stamme R, enzym I
- **Hin**dIII = *Haemophilus influenzae*, stamme d, enzym III
- **Bam**HI = *Bacillus amyloliquefaciens*, stamme H, enzym I`,
    },
    {
      id: 'bio1-9-1-def-restriksjon',
      type: 'definition',
      title: 'Restriksjonsenzymer',
      content: 'Restriksjonsenzymer er enzymer som gjenkjenner spesifikke DNA-sekvenser og klipper DNA-molekylet på disse stedene. De fungerer som "molekylære sakser" i genteknologi og brukes til å kutte ut gener eller åpne vektorer for innsetting av fremmed DNA.',
    },
    {
      id: 'bio1-9-1-ligase',
      type: 'text',
      content: `## DNA-ligase - molekylær lim

Etter at DNA er kuttet med restriksjonsenzymer, trengs et enzym for å lime bitene sammen igjen.

### DNA-ligase
- Katalyserer dannelsen av fosfodiesterbindinger
- Forbinder 3'-OH med 5'-fosfat mellom nukleotider
- T4 DNA-ligase (fra bakteriofag T4) er mest brukt
- Krever ATP som energikilde

### Hvordan det fungerer
1. Ligasen gjenkjenner "nikk" i DNA-ryggraden
2. Enzymet kobles til via AMP (adenylering)
3. AMP overføres til 5'-fosfat
4. 3'-OH angriper og danner fosfodiesterbinding
5. AMP frigjøres

### Bruk i rekombinant DNA
- Setter inn gener i vektorer
- Skjøter DNA-fragmenter
- Reparerer brudd i DNA`,
    },
    {
      id: 'bio1-9-1-vektorer',
      type: 'text',
      content: `## Vektorer - DNA-transportører

En vektor er et DNA-molekyl som kan bære fremmed DNA inn i en vertscelle og sikre at det kopieres og eventuelt uttrykkes.

### Plasmider
Den vanligste typen vektor er plasmider - små, sirkulære DNA-molekyler i bakterier.

**Egenskaper hos gode kloneringsvektorer:**
- **Replikasjonsorigin (ori)**: Sørger for kopiering uavhengig av kromosomet
- **Seleksjonsmarkør**: Vanligvis antibiotikaresistensgener
- **Multiple kloning site (MCS)**: Område med mange ulike restriksjonsseter
- **Liten størrelse**: Letter opptak og kopiering

### Andre vektorer
- **Bakteriofager**: Virus som infiserer bakterier
- **Kosmider**: Hybrid mellom plasmid og fag
- **BAC** (Bacterial Artificial Chromosome): For store DNA-fragmenter
- **Virale vektorer**: For genoverføring til eukaryote celler

### Transformasjon
Prosessen der bakterier tar opp plasmid-DNA:
1. Celler gjøres kompetente (kjemisk eller elektrisk)
2. DNA blandes med cellene
3. Varmesjokkk (42°C) eller elektroporering
4. Celler dyrkes på selektivt medium`,
    },
    {
      id: 'bio1-9-1-def-vektor',
      type: 'definition',
      title: 'Vektor (kloning)',
      content: 'En vektor er et DNA-molekyl som kan overføre fremmed DNA til en vertscelle og sikre at det kopieres (replikeres). Plasmider er den vanligste typen vektor og er små, sirkulære DNA-molekyler som finnes naturlig i bakterier. Vektorer inneholder replikasjonsorigin, seleksjonsmarkører og kloningsseter.',
    },
    {
      id: 'bio1-9-1-example-1',
      type: 'example',
      title: 'Eksempel: Klippe og lime DNA',
      problem: 'Et gen skal settes inn i en vektor. Både genet og vektoren kuttes med EcoRI som gir klebrige ender. Forklar hvorfor klebrige ender er en fordel.',
      solution: `**Løsning:**

**Klebrige ender fra EcoRI-kutt:**
- EcoRI gjenkjenner sekvensen 5'-GAATTC-3'
- Klipper mellom G og A på begge tråder
- Gir enkelttrådet overheng: 5'-AATTC-3' og 3'-CTTAA-5'

**Fordeler med klebrige ender:**

1. **Komplementær baseparing**: Overhenget på genet vil hydrogenbinde til overhenget på vektoren (A-T og G-C basepar)

2. **Spesifisitet**: Fragmenter kuttet med samme enzym passer sammen - som puslespillbiter

3. **Midlertidig binding**: Hydrogenbindingene holder fragmentene sammen mens ligase arbeider

4. **Økt effektivitet**: DNA-ligase kan enklere katalysere den kovalente bindingen når endene allerede er justert

5. **Retningsbestemt innsetting**: Man kan kontrollere orientering ved å bruke to ulike enzymer

Sammenligning med butte ender: Butte ender mangler overheng og må tilfeldig kollidere riktig for at ligasen skal fungere, noe som gir mye lavere ligeringseffektivitet.`,
    },
    {
      id: 'bio1-9-1-example-2',
      type: 'example',
      title: 'Eksempel: Seleksjon av transformanter',
      problem: 'En vektor inneholder gen for ampicillinresistens. Etter transformasjon dyrkes bakteriene på LB-agar med ampicillin. Forklar hvordan dette fungerer som seleksjon.',
      solution: `**Løsning:**

**Transformasjonsprosessen:**
1. Bakterier (E. coli) blandes med plasmid-DNA
2. Kun ca. 1 av 10 000 celler tar opp plasmidet
3. Cellene dyrkes på selektivt medium

**Seleksjonsprinsippet:**

**Celler UTEN plasmid:**
- Har ikke gen for ampicillinresistens
- Ampicillin hemmer celleveggsyntese
- Cellene dør og danner ingen kolonier

**Celler MED plasmid:**
- Har ampicillinresistensgen (bla-gen)
- Produserer beta-laktamase-enzym
- Enzymet bryter ned ampicillin
- Cellene overlever og deler seg
- Danner synlige kolonier etter 12-16 timer

**Resultat:**
Alle kolonier som vokser på platen inneholder plasmidet. Dette gir typisk tusenvis av transformanter fra ett transformasjonsforsøk.

**Merk:** Dette forteller bare at cellene har plasmid - ikke nødvendigvis at genet vi ønsket ble satt inn. Ytterligere screening (f.eks. blå/hvit-seleksjon eller PCR) trengs ofte.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-9-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er funksjonen til restriksjonsenzymer i genteknologi?',
      options: [
        { id: 'a', text: 'Klippe DNA ved spesifikke sekvenser', isCorrect: true },
        { id: 'b', text: 'Kopiere DNA', isCorrect: false },
        { id: 'c', text: 'Lime DNA-fragmenter sammen', isCorrect: false },
        { id: 'd', text: 'Transportere DNA inn i celler', isCorrect: false },
      ],
      solution: 'Restriksjonsenzymer gjenkjenner spesifikke DNA-sekvenser og klipper DNA-molekylet på disse stedene. De fungerer som "molekylære sakser" og er essensielle for å kutte ut gener og åpne vektorer.',
    },
    {
      id: 'bio1-9-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom tradisjonell og moderne bioteknologi, og gi to eksempler på hver.',
      solution: 'Tradisjonell bioteknologi: Utnytter biologiske prosesser uten direkte DNA-manipulasjon. Eksempler: 1) Gjæring for ølbrygging og brødbaking - gjær omdanner sukker til alkohol/CO2. 2) Fermentering av melk til yoghurt og ost ved hjelp av bakterier. Moderne bioteknologi: Direkte manipulasjon av DNA på molekylært nivå. Eksempler: 1) Produksjon av insulin i bakterier ved å sette inn det menneskelige insulingenet. 2) Genmodifiserte planter med innsatte gener for insektresistens (Bt-planter).',
    },
    {
      id: 'bio1-9-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med "klebrige ender" (sticky ends)?',
      options: [
        { id: 'a', text: 'Enkelttrådet DNA-overheng etter kutt med restriksjonsenzym', isCorrect: true },
        { id: 'b', text: 'DNA-fragmenter som er dekket med ligase', isCorrect: false },
        { id: 'c', text: 'Sirkulært DNA som er åpnet', isCorrect: false },
        { id: 'd', text: 'DNA som har blitt denaturert', isCorrect: false },
      ],
      solution: 'Klebrige ender oppstår når restriksjonsenzymer klipper DNA asymmetrisk, slik at det blir et enkelttrådet overheng. Disse overhengene kan basepare med komplementære sekvenser, noe som letter ligering av DNA-fragmenter.',
    },
    {
      id: 'bio1-9-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre egenskaper som en god kloneringsvektor (plasmid) bør ha, og forklar hvorfor hver egenskap er viktig.',
      solution: '1) Replikasjonsorigin (ori): Nødvendig for at plasmidet skal kopieres uavhengig av bakteriekromosomet. Uten ori ville plasmidet fortynnes når cellene deler seg. 2) Seleksjonsmarkør (f.eks. antibiotikaresistensgen): Gjør det mulig å identifisere celler som har tatt opp plasmidet. Celler uten plasmid dør på selektivt medium. 3) Multiple Cloning Site (MCS): Et område med mange ulike restriksjonsseter som gir fleksibilitet i hvilke enzymer man kan bruke for innsetting av gener.',
    },
    {
      id: 'bio1-9-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'DNA-ligase kalles "molekylær lim". Forklar hvordan enzymet fungerer og hvilken kjemisk binding det katalyserer.',
      solution: 'DNA-ligase katalyserer dannelsen av fosfodiesterbindinger i DNA-ryggraden. Prosessen: 1) Enzymet gjenkjenner et "nikk" der DNA-ryggraden mangler en binding. 2) Ligasen aktiveres ved å binde AMP fra ATP. 3) AMP overføres til 5\'-fosfatgruppen på DNA. 4) 3\'-hydroksylgruppen på nabonukleotidet angriper den aktiverte fosfatgruppen. 5) En fosfodiesterbinding dannes og AMP frigjøres. Bindingen som dannes er en kovalent fosfodiesterbinding mellom 3\'-karbonet på én nukleotid og 5\'-karbonet på neste, via en fosfatgruppe.',
    },
    {
      id: 'bio1-9-1-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et plasmid?',
      options: [
        { id: 'a', text: 'Et lite, sirkulært DNA-molekyl i bakterier', isCorrect: true },
        { id: 'b', text: 'Et enzym som klipper DNA', isCorrect: false },
        { id: 'c', text: 'En type bakteriell cellevegg', isCorrect: false },
        { id: 'd', text: 'Et protein som transporterer gener', isCorrect: false },
      ],
      solution: 'Plasmider er små, sirkulære DNA-molekyler som finnes naturlig i bakterier, uavhengig av bakteriekromosomet. De replikerer selvstendig og brukes som vektorer i genteknologi for å overføre fremmed DNA til celler.',
    },
  ],
};

// ============================================================================
// Kapittel 9.2: PCR og gelelektroforese
// ============================================================================

export const CHAPTER_BIOLOGI_1_9_2: TextbookChapter = {
  id: 'biologi-1-9-2',
  courseId: 'biologi-1',
  chapterNumber: '9.2',
  title: 'PCR og gelelektroforese',
  description: 'Polymerasekjedereaksjonen for DNA-kopiering og gelelektroforese for separasjon og analyse av DNA-fragmenter.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare prinsippet bak polymerasekjedereaksjonen (PCR)',
    'beskrive de tre trinnene i hver PCR-syklus',
    'gjøre rede for hvordan gelelektroforese separerer DNA',
    'tolke resultater fra gelelektroforese',
  ],
  content: [
    {
      id: 'bio1-9-2-intro',
      type: 'text',
      content: `# PCR og gelelektroforese

PCR (Polymerase Chain Reaction) og gelelektroforese er to av de viktigste teknikkene i moderne molekylærbiologi. PCR kopierer DNA eksponentielt, mens gelelektroforese separerer og visualiserer DNA-fragmenter.

## Hvorfor trenger vi PCR?

Mange biologiske analyser krever store mengder DNA:
- DNA-sekvensering
- Genetisk testing
- Kriminalteknikk (DNA-profilering)
- Påvisning av patogener
- Forskning

En enkelt DNA-prøve inneholder ofte for lite materiale, men PCR kan kopiere et bestemt DNA-område millioner ganger på noen timer.`,
    },
    {
      id: 'bio1-9-2-def-pcr',
      type: 'definition',
      title: 'PCR (Polymerase Chain Reaction)',
      content: 'PCR er en laboratoriemetode for å kopiere (amplifisere) spesifikke DNA-sekvenser eksponentielt. Ved å gjenta sykluser av oppvarming og avkjøling kan man lage milliarder av kopier fra noen få DNA-molekyler på 2-3 timer. Metoden ble utviklet av Kary Mullis i 1983 og ga ham Nobelprisen i kjemi i 1993.',
    },
    {
      id: 'bio1-9-2-pcr-komponenter',
      type: 'text',
      content: `## PCR-komponenter

For å utføre PCR trengs følgende:

### 1. Templat-DNA
- DNA-prøven som inneholder sekvensen som skal kopieres
- Kan være genomisk DNA, plasmid, eller cDNA
- Selv minimale mengder er tilstrekkelig

### 2. Primere
- Korte, enkelttrådet DNA-sekvenser (18-25 nukleotider)
- To primere trengs: forward og reverse
- Binder til hver sin DNA-tråd og definerer området som kopieres
- Må designes spesifikt for målsekvensen

### 3. DNA-polymerase
- **Taq-polymerase**: Fra *Thermus aquaticus*, en bakterie fra varme kilder
- Tåler høye temperaturer (termostabil)
- Optimal aktivitet ved 72°C
- Overlever denatureringstrinnet

### 4. dNTPer
- Deoksynukleotidtrifosfater (dATP, dTTP, dGTP, dCTP)
- Byggesteinene for nytt DNA

### 5. Buffer og magnesium
- Gir optimale forhold for enzymet
- Mg²⁺ er kofaktor for polymerasen`,
    },
    {
      id: 'bio1-9-2-pcr-syklus',
      type: 'text',
      content: `## De tre trinnene i PCR

Hver PCR-syklus består av tre temperaturtrinn:

### 1. Denaturering (94-98°C, 15-30 sekunder)
- Høy temperatur bryter hydrogenbindingene mellom baseparene
- DNA-dobbelthelixen separeres til to enkelttråder
- Templatet blir tilgjengelig for primerbinding

### 2. Annealing (50-65°C, 15-60 sekunder)
- Temperaturen senkes for å tillate primerbinding
- Primerne hybridiserer til komplementære sekvenser på templatet
- Temperaturen avhenger av primerens lengde og GC-innhold
- For lav temperatur gir uspesifikk binding
- For høy temperatur hindrer primerbinding

### 3. Elongering/Ekstensjon (72°C, 30-90 sekunder)
- Optimal temperatur for Taq-polymerase
- Polymerasen syntetiserer nye DNA-tråder fra 5' til 3'
- Starter fra primerens 3'-ende
- Tiden avhenger av fragmentets lengde (~1 kb/minutt)

### Eksponentiell amplifisering
- Etter n sykluser: 2ⁿ kopier
- 30 sykluser gir teoretisk over 1 milliard kopier
- I praksis nås et platå etter 25-35 sykluser`,
    },
    {
      id: 'bio1-9-2-def-annealing',
      type: 'definition',
      title: 'Annealing (hybridisering)',
      content: 'Annealing er prosessen der enkelttrådet DNA (som primere) binder seg til komplementære sekvenser via hydrogenbindinger mellom baseparene. I PCR skjer annealing ved en spesifikk temperatur som tillater primerne å binde til templatet, men hindrer uspesifikk binding til andre sekvenser.',
    },
    {
      id: 'bio1-9-2-gelelektroforese',
      type: 'text',
      content: `## Gelelektroforese

Gelelektroforese er en metode for å separere DNA-fragmenter etter størrelse.

### Prinsipp
- DNA er negativt ladet (pga. fosfatgruppene)
- I et elektrisk felt vandrer DNA mot positiv pol (anode)
- Gelen fungerer som en sil
- Små fragmenter beveger seg raskere enn store

### Gel-typer
**Agarosegel:**
- Laget av tang-polysakkarid
- Brukes for fragmenter 100 bp - 25 kb
- Standard konsentrasjon: 0,8-2%
- Høyere konsentrasjon = bedre separasjon av små fragmenter

**Polyakrylamidgel (PAGE):**
- Syntetisk polymer
- Bedre oppløsning
- Brukes for små fragmenter (<1000 bp) og proteiner

### Visualisering
- DNA farges med etidiumbromid eller SYBR-farger
- Fluorescerer under UV-lys
- Bånd indikerer DNA-fragmenter
- Intensiteten reflekterer mengde DNA`,
    },
    {
      id: 'bio1-9-2-def-gelelektroforese',
      type: 'definition',
      title: 'Gelelektroforese',
      content: 'Gelelektroforese er en laboratoriemetode som separerer DNA-fragmenter (eller proteiner) basert på størrelse ved å la dem vandre gjennom en gel i et elektrisk felt. DNA er negativt ladet og vandrer mot positiv pol. Små fragmenter beveger seg raskere gjennom gelens porer enn store fragmenter.',
    },
    {
      id: 'bio1-9-2-analyse',
      type: 'text',
      content: `## Analyse av gelelektroforeseresultater

### DNA-størrelsesstandarder (markører)
- Inneholder fragmenter med kjent størrelse
- Kjøres parallelt med prøvene
- Brukes til å estimere størrelsen på ukjente fragmenter
- Vanlige markører: 100 bp ladder, 1 kb ladder

### Tolkning av resultater
1. **Enkeltstående bånd**: Ett fragment av en bestemt størrelse
2. **Flere bånd**: Flere fragmenter, eller uspesifikke PCR-produkter
3. **Smeering**: DNA-degradering eller for mye DNA
4. **Ingen bånd**: PCR feilet, eller fragment utenfor synlig område

### Anvendelser
- **PCR-verifisering**: Sjekke at riktig produkt er amplifisert
- **Restriksjonsanalyse**: Se kuttmønster etter enzymbehandling
- **DNA-profilering**: Sammenligne STR-mønstre
- **Kvalitetskontroll**: Sjekke DNA-integritet`,
    },
    {
      id: 'bio1-9-2-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av PCR-amplifisering',
      problem: 'Du starter med 10 kopier av templat-DNA og kjører 30 PCR-sykluser. Hvor mange kopier har du teoretisk etter PCR?',
      solution: `**Løsning:**

**Formel for eksponentiell amplifisering:**
Antall kopier = Startantall × 2ⁿ

Der n = antall sykluser

**Beregning:**
- Startantall: 10 kopier
- Antall sykluser (n): 30

Antall kopier = 10 × 2³⁰
Antall kopier = 10 × 1 073 741 824
Antall kopier = **10 737 418 240** (ca. 10,7 milliarder)

**I praksis:**
- Effektiviteten er sjelden 100%
- Reaksjonen når et platå når reagenser brukes opp
- Realistisk utbytte er ofte 10⁹ - 10¹² kopier

Dette viser den enorme amplifiseringskraften til PCR - fra noen få molekyler til milliarder av kopier!`,
    },
    {
      id: 'bio1-9-2-example-2',
      type: 'example',
      title: 'Eksempel: Tolking av gelelektroforese',
      problem: 'Du kjører PCR-produkter på en agarosegel. Prøve A viser ett skarpt bånd ved 500 bp. Prøve B viser to bånd ved 500 bp og 800 bp. Prøve C viser ingen bånd. Hva kan du konkludere?',
      solution: `**Løsning:**

**Prøve A - Ett bånd ved 500 bp:**
- PCR har fungert
- Kun målsekvensen er amplifisert (spesifikk)
- Fragmentet er ~500 basepar langt
- Dette er det ønskede resultatet

**Prøve B - To bånd ved 500 bp og 800 bp:**
Mulige årsaker:
1. Primerne binder uspesifikt et annet sted i genomet
2. Templatet inneholder to sekvenser som matchar primerne
3. Primerdimerer (hvis et bånd er veldig lite)
4. Kontaminering med annet DNA

**Tiltak:** Øke annealing-temperatur eller redesigne primere

**Prøve C - Ingen bånd:**
Mulige årsaker:
1. PCR har feilet (sjekk reagenser)
2. Ingen templat-DNA til stede
3. Primerne binder ikke (feil sekvens eller for høy annealing-temp)
4. DNA-polymerase inaktiv
5. Inhibitorer i prøven

**Tiltak:** Kjør positiv kontroll, sjekk komponenter, optimaliser betingelser`,
    },
  ],
  exercises: [
    {
      id: 'bio1-9-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er rekkefølgen på de tre trinnene i én PCR-syklus?',
      options: [
        { id: 'a', text: 'Denaturering → Annealing → Elongering', isCorrect: true },
        { id: 'b', text: 'Annealing → Denaturering → Elongering', isCorrect: false },
        { id: 'c', text: 'Elongering → Denaturering → Annealing', isCorrect: false },
        { id: 'd', text: 'Annealing → Elongering → Denaturering', isCorrect: false },
      ],
      solution: 'PCR starter med denaturering (94-98°C) for å separere DNA-trådene, deretter annealing (50-65°C) for primerbinding, og til slutt elongering (72°C) der DNA-polymerasen syntetiserer nye tråder.',
    },
    {
      id: 'bio1-9-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor man bruker Taq-polymerase i PCR og ikke vanlig DNA-polymerase fra E. coli.',
      solution: 'Taq-polymerase er isolert fra Thermus aquaticus, en bakterie som lever i varme kilder. Enzymet er termostabilt og overlever denatureringstrinnet ved 94-98°C. Vanlig E. coli DNA-polymerase ville blitt denaturert (ødelagt) ved disse høye temperaturene og måtte tilsettes på nytt etter hver syklus. Med Taq-polymerase kan PCR automatiseres i en termocykler som veksler mellom temperaturer, uten å måtte åpne røret.',
    },
    {
      id: 'bio1-9-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor vandrer DNA mot den positive polen i gelelektroforese?',
      options: [
        { id: 'a', text: 'Fordi DNA er negativt ladet pga. fosfatgruppene', isCorrect: true },
        { id: 'b', text: 'Fordi DNA er positivt ladet pga. basene', isCorrect: false },
        { id: 'c', text: 'Fordi gelen skyver DNA i den retningen', isCorrect: false },
        { id: 'd', text: 'Fordi DNA-polymerasen drar det mot anoden', isCorrect: false },
      ],
      solution: 'DNA har fosfatgrupper i ryggraden som er negativt ladet ved fysiologisk pH. Negative ladninger tiltrekkes av positive ladninger, så DNA vandrer mot den positive polen (anoden) i et elektrisk felt.',
    },
    {
      id: 'bio1-9-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Du har to DNA-fragmenter: ett på 200 bp og ett på 1000 bp. Hvilket fragment vil vandre lengst på en agarosegel, og hvorfor?',
      solution: 'Det lille fragmentet på 200 bp vil vandre lengst. I gelelektroforese fungerer gelen som en sil med porer. Små fragmenter kan lettere passere gjennom porene og møter mindre motstand, så de beveger seg raskere gjennom gelen. Store fragmenter har vanskeligere for å passere og beveger seg derfor saktere. Etter en viss tid vil det lille 200 bp-fragmentet ha vandret mye lenger fra brønnen enn det store 1000 bp-fragmentet.',
    },
    {
      id: 'bio1-9-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva som kan skje hvis annealing-temperaturen i PCR settes for lavt, og hva som kan skje hvis den settes for høyt.',
      solution: 'For lav annealing-temperatur: Primerne vil binde uspesifikt til sekvenser som ikke matcher perfekt. Dette gir uønskede PCR-produkter som vises som ekstra bånd på gelen. Man kan også få primerdimerer der primerne binder til hverandre. For høy annealing-temperatur: Primerne vil ikke binde stabilt til templatet, selv om sekvensen er riktig. Hydrogenbindingene mellom primer og templat er for svake ved høy temperatur. Dette resulterer i ingen eller lite PCR-produkt. Optimal temperatur er vanligvis 3-5°C under primerens smeltepunkt (Tm).',
    },
    {
      id: 'bio1-9-2-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva brukes DNA-størrelsesmarkører (ladder) til i gelelektroforese?',
      options: [
        { id: 'a', text: 'Estimere størrelsen på ukjente DNA-fragmenter', isCorrect: true },
        { id: 'b', text: 'Farge DNA slik at det blir synlig', isCorrect: false },
        { id: 'c', text: 'Øke hastigheten på elektroforesen', isCorrect: false },
        { id: 'd', text: 'Beskytte DNA mot nedbrytning', isCorrect: false },
      ],
      solution: 'DNA-størrelsesmarkører inneholder fragmenter med kjent størrelse. Ved å sammenligne hvor langt de ukjente prøvene har vandret med markøren, kan man estimere størrelsen på DNA-fragmentene i prøvene.',
    },
  ],
};

// ============================================================================
// Kapittel 9.3: Rekombinant DNA og kloning
// ============================================================================

export const CHAPTER_BIOLOGI_1_9_3: TextbookChapter = {
  id: 'biologi-1-9-3',
  courseId: 'biologi-1',
  chapterNumber: '9.3',
  title: 'Rekombinant DNA og kloning',
  description: 'Kloning av gener, genmodifiserte organismer (GMO), og produksjon av rekombinante proteiner som insulin.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare hva rekombinant DNA er og hvordan det lages',
    'beskrive prosessen for kloning av gener i bakterier',
    'gjøre rede for hvordan GMO-organismer lages',
    'gi eksempler på bruk av rekombinant DNA-teknologi',
  ],
  content: [
    {
      id: 'bio1-9-3-intro',
      type: 'text',
      content: `# Rekombinant DNA og kloning

Rekombinant DNA-teknologi gjør det mulig å kombinere gener fra ulike organismer og uttrykke dem i nye verter. Dette har revolusjonert medisin, landbruk og forskning.

## Hva er rekombinant DNA?

Rekombinant DNA er DNA-molekyler som inneholder genetisk materiale fra to eller flere kilder som ikke normalt finnes sammen i naturen.

### Eksempler på rekombinant DNA:
- Menneske-insulingen i bakterieplasmid
- Bt-toksinegen i plantekromosomer
- Fluorescerende protein fra manet i museceller

Prosessen med å lage og arbeide med rekombinant DNA kalles ofte **genkloning** eller **molekylær kloning**.`,
    },
    {
      id: 'bio1-9-3-def-rekombinant',
      type: 'definition',
      title: 'Rekombinant DNA',
      content: 'Rekombinant DNA er kunstig fremstilt DNA som inneholder genetiske sekvenser fra to eller flere forskjellige kilder. Det lages ved å bruke restriksjonsenzymer til å klippe DNA fra ulike kilder og DNA-ligase til å sette fragmentene sammen i nye kombinasjoner.',
    },
    {
      id: 'bio1-9-3-genkloning',
      type: 'text',
      content: `## Genkloning - trinn for trinn

### 1. Isolering av genet
- Identifiser genet som skal klones
- Metoder: PCR-amplifisering, restriksjonskutting, eller cDNA-syntese fra mRNA

### 2. Klargjøring av vektor
- Velg egnet plasmid med ønskede egenskaper
- Kutt plasmidet med samme restriksjonsenzym som genet
- Dephosphorylering kan hindre selv-ligering

### 3. Ligering
- Bland gen og vektor i riktig forhold
- Tilsett DNA-ligase
- Inkuber ved 16°C eller romtemperatur

### 4. Transformasjon
- Overfør rekombinant plasmid til kompetente bakterier
- Varmesjokkk eller elektroporering
- Kun en liten andel celler tar opp DNA

### 5. Seleksjon
- Dyrk celler på selektivt medium (f.eks. antibiotika)
- Kun transformanter overlever
- Ytterligere screening for riktig insert (blå/hvit, PCR)

### 6. Verifisering
- Isoler plasmid fra kolonier
- Sjekk med restriksjonsanalyse eller sekvensering
- Bekreft at genet er intakt og i riktig orientering`,
    },
    {
      id: 'bio1-9-3-proteinuttrykk',
      type: 'text',
      content: `## Produksjon av rekombinante proteiner

Når genet er klonet, kan vertscellen uttrykke proteinet.

### Ekspresjonsvektorer
For proteinproduksjon trengs spesielle vektorer med:
- **Sterk promoter**: Styrer høy transkripsjon
- **Ribosom-bindingssete**: For effektiv translasjon
- **Terminatorsekvens**: Avslutter transkripsjonen
- **Eventuelt fusjonsprotein-tag**: For rensing (f.eks. His-tag)

### Ekspresjonssystemer

**Bakterier (E. coli):**
- Rask vekst, billig
- Enkle å manipulere
- Kan ikke glykosylere proteiner
- Noen proteiner folder seg feil

**Gjær:**
- Eukaryot, kan glykosylere
- Rask vekst
- Sekresjon til medium mulig

**Insektceller:**
- Mer kompleks posttranslasjonell modifisering
- Dyrere

**Pattedyrceller:**
- Mest autentisk prosessering
- Dyrt og langsomt
- Nødvendig for mange terapeutiske proteiner`,
    },
    {
      id: 'bio1-9-3-insulin',
      type: 'text',
      content: `## Eksempel: Rekombinant insulin

Produksjon av human insulin i bakterier var den første store kommersielle suksessen for rekombinant DNA-teknologi.

### Historisk bakgrunn
- Før 1982: Insulin ble isolert fra grise- og storfe-bukspyttkjertel
- Problem: Forskjellig aminosyresekvens ga allergiske reaksjoner hos noen
- Løsning: Produsere ekte human insulin i bakterier

### Produksjonsprosess
1. **Syntetisere genet**: Insulingenet ble syntetisert kjemisk
2. **Kloning**: Satt inn i ekspresjonsvektor
3. **Transformasjon**: Innført i E. coli
4. **Fermentering**: Bakterier dyrkes i store tanker
5. **Høsting**: Celler lyseres, protein isoleres
6. **Rensing**: Kromatografi og andre metoder
7. **Kvalitetskontroll**: Renhet, aktivitet, sikkerhet

### Betydning
- Ubegrenset tilgang til rent human insulin
- Ingen allergiske reaksjoner fra dyreinsulin
- Lavere kostnader over tid
- Grunnlag for moderne bioteknologiindustri`,
    },
    {
      id: 'bio1-9-3-def-gmo',
      type: 'definition',
      title: 'GMO (Genmodifisert organisme)',
      content: 'En GMO er en organisme der det genetiske materialet er endret ved hjelp av genteknologi på måter som ikke forekommer naturlig. Dette kan innebære innsetting av gener fra andre arter (transgene organismer), fjerning av gener, eller endring av eksisterende gener.',
    },
    {
      id: 'bio1-9-3-gmo',
      type: 'text',
      content: `## Genmodifiserte organismer (GMO)

### GMO-planter
De vanligste modifikasjonene i landbruksplanter:

**Herbicidtoleranse:**
- Planter som tåler ugressmiddel (f.eks. Roundup Ready)
- Bonden kan sprøyte uten å skade avlingen
- Forenkler ugrasbekjempelse

**Insektresistens (Bt-planter):**
- Gener fra Bacillus thuringiensis
- Planten produserer Bt-toksin
- Dreper skadelige larver som spiser planten
- Reduserer behov for insektmidler

**Ernæringsmessige forbedringer:**
- Gyllen ris: Inneholder beta-karoten (vitamin A-forløper)
- Utviklet for å bekjempe vitamin A-mangel

### GMO-dyr
- Laks som vokser raskere (AquAdvantage)
- Gris resistent mot sykdommer
- Mus for medisinsk forskning (knockout-mus)

### Mikroorganismer
- Insulinproduserende bakterier
- Enzymer for industri (vaskemidler)
- Biodrivstoffproduksjon`,
    },
    {
      id: 'bio1-9-3-example-1',
      type: 'example',
      title: 'Eksempel: Kloning av et gen',
      problem: 'Beskriv hvordan du ville klonet et humant gen inn i en bakteriell ekspresjonsvektor for å produsere proteinet i E. coli.',
      solution: `**Løsning - Trinnvis prosedyre:**

**1. Isolering av genet:**
- Bruk PCR for å amplifisere genet fra humant cDNA
- Design primere med restriksjonsseter (f.eks. BamHI og EcoRI) i endene
- Primereksempel: 5'-GGATCC[genstart]-3' (BamHI-sete)

**2. Kutting og rensing:**
- Kutt PCR-produktet med BamHI og EcoRI
- Kutt ekspresjonsvektoren med samme enzymer
- Rens fragmentene på gel

**3. Ligering:**
- Bland vektor og insert i 1:3 molarforhold
- Tilsett T4 DNA-ligase og buffer
- Inkuber ved 16°C over natt

**4. Transformasjon:**
- Bland ligeringsmiks med kompetente E. coli
- Varmesjokkk ved 42°C i 45 sekunder
- Inkuber på is, tilsett medium, dyrk 1 time ved 37°C
- Plat ut på LB-agar med antibiotika

**5. Screening:**
- Plukk kolonier neste dag
- Isoler plasmid (miniprep)
- Verifiser med restriksjonsanalyse og sekvensering

**6. Ekspresjon:**
- Dyrk positiv klon i flytende medium
- Induser ekspresjon (f.eks. med IPTG)
- Høst og analyser proteinet`,
    },
    {
      id: 'bio1-9-3-example-2',
      type: 'example',
      title: 'Eksempel: Bt-mais',
      problem: 'Forklar hvordan Bt-mais beskytter seg selv mot skadedyr, og diskuter fordeler og potensielle bekymringer.',
      solution: `**Løsning:**

**Hvordan Bt-mais virker:**
1. Bt-mais inneholder et gen fra bakterien *Bacillus thuringiensis*
2. Genet koder for Cry-proteiner (Bt-toksiner)
3. Planten produserer toksinet i sine celler
4. Når insektlarver (f.eks. maissmalmott) spiser planten:
   - Toksinet aktiveres i insektets alkaliske tarm
   - Proteinet binder til reseptorer i tarmveggen
   - Det dannes porer som ødelegger tarmcellene
   - Insektet dør

**Fordeler:**
- Reduserer behov for kjemiske insektmidler
- Mer målrettet - påvirker hovedsakelig skadedyr
- Beskytter avlingen gjennom hele sesongen
- Kan øke avling og kvalitet

**Potensielle bekymringer:**
- Utvikling av resistens hos skadedyr
- Effekt på ikke-målarter (sommerfugler?)
- Genspredning til ville slektninger
- Behov for refugieområder (ikke-Bt-planter)
- Avhengighet av frøselskaper

**Tiltak:** "Refuge"-strategi der en andel av arealet dyrkes med vanlig mais for å forsinke resistensutvikling.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-9-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er rekombinant DNA?',
      options: [
        { id: 'a', text: 'DNA som inneholder genetisk materiale fra to eller flere kilder', isCorrect: true },
        { id: 'b', text: 'DNA som har blitt kopiert med PCR', isCorrect: false },
        { id: 'c', text: 'DNA som har blitt separert med gelelektroforese', isCorrect: false },
        { id: 'd', text: 'DNA som finnes naturlig i bakterier', isCorrect: false },
      ],
      solution: 'Rekombinant DNA er kunstig fremstilt DNA som kombinerer genetiske sekvenser fra ulike kilder som normalt ikke finnes sammen i naturen, for eksempel et humant gen satt inn i et bakterieplasmid.',
    },
    {
      id: 'bio1-9-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de seks hovedtrinnene i genkloning.',
      solution: '1) Isolering av genet: Genet som skal klones isoleres, f.eks. ved PCR eller fra cDNA. 2) Klargjøring av vektor: Plasmidet kuttes med restriksjonsenzym. 3) Ligering: Genet og vektoren settes sammen med DNA-ligase. 4) Transformasjon: Det rekombinante plasmidet overføres til bakterieceller. 5) Seleksjon: Transformerte celler identifiseres ved dyrking på selektivt medium. 6) Verifisering: Man bekrefter at riktig gen er satt inn, f.eks. ved restriksjonsanalyse eller sekvensering.',
    },
    {
      id: 'bio1-9-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor brukes E. coli ofte til produksjon av rekombinante proteiner?',
      options: [
        { id: 'a', text: 'Den vokser raskt, er enkel å manipulere og billig å dyrke', isCorrect: true },
        { id: 'b', text: 'Den kan glykosylere proteiner korrekt', isCorrect: false },
        { id: 'c', text: 'Den produserer naturlig human insulin', isCorrect: false },
        { id: 'd', text: 'Den er den eneste organismen som kan transformeres', isCorrect: false },
      ],
      solution: 'E. coli er populær fordi den har kort generasjonstid (20 min), er godt karakterisert genetisk, lett å transformere, billig å dyrke i store mengder, og det finnes mange tilgjengelige verktøy for genetisk manipulasjon.',
    },
    {
      id: 'bio1-9-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan Bt-planter virker og hvorfor de kan redusere behovet for insektmidler.',
      solution: 'Bt-planter inneholder et gen fra bakterien Bacillus thuringiensis som koder for Cry-proteiner (Bt-toksiner). Når skadelige insektlarver spiser plantevev, aktiveres toksinet i insektets tarm. Toksinet binder til reseptorer i tarmveggen og danner porer som ødelegger tarmcellene, noe som dreper insektet. Fordi planten selv produserer insektmiddelet, trenger bonden ikke sprøyte med kjemiske insektmidler. Bt-toksinet er spesifikt for visse insekter og påvirker ikke mennesker eller andre pattedyr.',
    },
    {
      id: 'bio1-9-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor produksjon av human insulin i bakterier var en revolusjon for diabetesbehandling.',
      solution: 'Før rekombinant DNA-teknologi ble insulin isolert fra bukspyttkjertel fra gris og storfe. Dette hadde flere problemer: 1) Begrenset tilgang - avhengig av slakteriindustrien. 2) Allergiske reaksjoner - dyreinsulin har litt annen aminosyresekvens enn human insulin. 3) Variabel kvalitet og renhet. Med rekombinant teknologi kunne man: 1) Produsere ekte human insulin - identisk med kroppens eget. 2) Produsere ubegrensede mengder uavhengig av dyr. 3) Standardisere produksjonen for jevn kvalitet. 4) Redusere risiko for allergiske reaksjoner. 5) På sikt senke kostnadene. Dette var den første store kommersielle anvendelsen av genteknologi og åpnet døren for bioteknologiindustrien.',
    },
    {
      id: 'bio1-9-3-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner en GMO (genmodifisert organisme)?',
      options: [
        { id: 'a', text: 'DNA er endret ved genteknologi på måter som ikke skjer naturlig', isCorrect: true },
        { id: 'b', text: 'Organismen er fremavlet ved tradisjonell seleksjon', isCorrect: false },
        { id: 'c', text: 'Organismen har naturlig utviklet nye egenskaper', isCorrect: false },
        { id: 'd', text: 'Organismen er klonet fra en annen organisme', isCorrect: false },
      ],
      solution: 'En GMO er en organisme der det genetiske materialet er endret ved hjelp av genteknologi på måter som ikke forekommer ved naturlig rekombinasjon eller naturlig mutasjon. Dette skiller seg fra tradisjonell avl og seleksjon.',
    },
  ],
};

// ============================================================================
// Kapittel 9.4: CRISPR og genredigering
// ============================================================================

export const CHAPTER_BIOLOGI_1_9_4: TextbookChapter = {
  id: 'biologi-1-9-4',
  courseId: 'biologi-1',
  chapterNumber: '9.4',
  title: 'CRISPR og genredigering',
  description: 'CRISPR-Cas9-systemet for presis genredigering, anvendelser i forskning og medisin, og genterapi.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hvordan CRISPR-Cas9-systemet fungerer',
    'beskrive anvendelser av CRISPR i forskning og medisin',
    'gjøre rede for prinsippene bak genterapi',
    'drøfte muligheter og utfordringer med genredigering',
  ],
  content: [
    {
      id: 'bio1-9-4-intro',
      type: 'text',
      content: `# CRISPR og genredigering

CRISPR-Cas9 har revolusjonert genteknologien ved å gjøre presis genredigering enkelt, raskt og billig. Dette verktøyet gjør det mulig å "redigere" DNA nesten like enkelt som å redigere tekst.

## Genredigering før CRISPR

Tidligere metoder for genredigering:
- **ZFN** (Zinc Finger Nucleases): Kompliserte, dyre, tidkrevende
- **TALEN** (Transcription Activator-Like Effector Nucleases): Bedre, men fortsatt krevende

CRISPR endret alt - en enkel, billig og presis metode som har demokratisert genredigering og gjort det tilgjengelig for laboratorier over hele verden.`,
    },
    {
      id: 'bio1-9-4-def-crispr',
      type: 'definition',
      title: 'CRISPR-Cas9',
      content: 'CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) er et naturlig immunsystem i bakterier som er tilpasset som genredigeringsverktøy. Cas9 er et enzym som kutter DNA. Ved å kombinere Cas9 med en syntetisk guide-RNA kan man målrette kuttet til nesten hvilken som helst DNA-sekvens.',
    },
    {
      id: 'bio1-9-4-naturlig',
      type: 'text',
      content: `## CRISPR i naturen

CRISPR er opprinnelig et immunsystem i bakterier og arkeer.

### Hvordan bakterier bruker CRISPR
1. **Infeksjon**: Et virus angriper bakterien
2. **Lagring**: Bakterien kopierer en bit av virusets DNA
3. **Integrasjon**: DNA-biten settes inn i CRISPR-arrayet
4. **Hukommelse**: Ved ny infeksjon gjenkjennes viruset
5. **Destruksjon**: Cas-proteiner kutter virusets DNA

### CRISPR-arrayet
- Repeterende DNA-sekvenser
- Mellom repetisjonene: "spacers" fra tidligere virus
- Fungerer som et arkiv over tidligere infeksjoner

### Oppdagelsen
- 1987: CRISPR-sekvenser først observert i E. coli
- 2007: Funksjonen som immunsystem bekreftet
- 2012: Doudna & Charpentier viste at det kunne programmeres
- 2020: Nobelprisen i kjemi til Doudna & Charpentier`,
    },
    {
      id: 'bio1-9-4-mekanisme',
      type: 'text',
      content: `## Hvordan CRISPR-Cas9 fungerer som verktøy

### Komponentene
1. **Cas9-protein**: Molekylær saks som kutter begge DNA-tråder
2. **Guide-RNA (gRNA)**: Leder Cas9 til riktig sted
   - ~20 nukleotider som matcher målsekvensen
   - Kan designes for nesten hvilken som helst sekvens

### PAM-sekvens
- Protospacer Adjacent Motif
- Kort sekvens (NGG for SpCas9) ved siden av målområdet
- Nødvendig for at Cas9 skal binde og kutte
- Begrenser litt hvor man kan kutte

### Mekanismen
1. gRNA-Cas9-komplekset scanner DNA
2. Finner sekvens som matcher gRNA + PAM
3. Cas9 kutter begge DNA-tråder (dobbelttrådbrudd)

### DNA-reparasjon
Cellen reparerer bruddet på to måter:

**NHEJ (Non-Homologous End Joining):**
- Raskt, men upresist
- Kan sette inn eller slette nukleotider
- Brukes for å "knocke ut" gener

**HDR (Homology-Directed Repair):**
- Bruker templat for presis reparasjon
- Kan sette inn nye sekvenser
- Krever donor-DNA
- Lavere effektivitet`,
    },
    {
      id: 'bio1-9-4-def-genterapi',
      type: 'definition',
      title: 'Genterapi',
      content: 'Genterapi er behandling av sykdom ved å endre genene i pasientens celler. Dette kan gjøres ved å erstatte defekte gener med fungerende kopier, inaktivere gener som forårsaker sykdom, eller sette inn nye gener. CRISPR har gjort genterapi mer presis og effektiv.',
    },
    {
      id: 'bio1-9-4-anvendelser',
      type: 'text',
      content: `## Anvendelser av CRISPR

### Forskning
- **Knockout-studier**: Slå av gener for å studere funksjon
- **Knockin**: Sette inn gener eller merkelapper
- **Sykdomsmodeller**: Lage mus med menneskelige mutasjoner
- **Screening**: Teste tusenvis av gener parallelt

### Medisin

**Genterapi:**
- Sigdcelleanemi og beta-thalassemi (CASGEVY - første godkjente)
- Arvelig blindhet (Leber congenital amaurosis)
- Muskeldystrofi (under utprøving)

**Kreftbehandling:**
- Redigere immunceller til å angripe kreft (CAR-T)
- Slå ut gener som hemmer immunresponsen

**Smittsomme sykdommer:**
- Fjerne HIV fra infiserte celler
- Diagnostikk (SHERLOCK, DETECTR)

### Landbruk
- Sykdomsresistente planter
- Bedre næringsinnhold
- Hornløst storfe
- Tørketolerante avlinger`,
    },
    {
      id: 'bio1-9-4-genterapi',
      type: 'text',
      content: `## Genterapi i praksis

### Ex vivo genterapi
1. Hent celler fra pasienten
2. Rediger cellene i laboratoriet
3. Verifiser at redigeringen er riktig
4. Sett cellene tilbake i pasienten

**Fordeler:**
- Bedre kontroll
- Kan sjekke for feil før behandling
- Fungerer godt for blodceller

### In vivo genterapi
1. Lever CRISPR-komponenter direkte til kroppen
2. Redigeringen skjer i pasienten

**Utfordringer:**
- Levering til riktige celler
- Immunrespons mot Cas9
- Off-target-effekter

### Leveringsmetoder
- **Virale vektorer**: AAV (Adeno-Associated Virus)
- **Lipid-nanopartikler**: For mRNA-levering
- **Elektroporering**: For ex vivo

### Suksesshistorie: CASGEVY
- Godkjent i 2023 for sigdcelleanemi og beta-thalassemi
- BCL11A-genet inaktiveres i stamceller
- Fører til produksjon av føtalt hemoglobin
- Erstatter defekt voksent hemoglobin`,
    },
    {
      id: 'bio1-9-4-example-1',
      type: 'example',
      title: 'Eksempel: Knockout av et gen med CRISPR',
      problem: 'Du ønsker å studere funksjonen til et gen ved å "slå det av" (knockout). Forklar hvordan du ville brukt CRISPR-Cas9 til dette.',
      solution: `**Løsning - Knockout med CRISPR:**

**1. Design guide-RNA:**
- Velg en 20 bp sekvens i starten av genet
- Sekvensen må være unik i genomet
- Må ha PAM-sekvens (NGG) rett nedstrøms
- Bruk bioinformatikkverktøy for å minimere off-target

**2. Kloning og levering:**
- Klon gRNA-sekvensen inn i ekspresjonsvektor
- Lever gRNA og Cas9 til cellene (plasmid, virus, eller RNP)

**3. Cutting:**
- Cas9-gRNA-komplekset finner målsekvensen
- Cas9 kutter begge DNA-tråder

**4. NHEJ-reparasjon:**
- Cellen reparerer bruddet med NHEJ
- NHEJ er upresist og introduserer indels (insersjoner/delesjoner)
- Indels i kodende sekvens gir frameshiftmutasjon

**5. Resultat:**
- Frameshiften ødelegger proteinkodingen
- Cellen produserer ikke fungerende protein
- Genet er effektivt "knockout"

**6. Verifisering:**
- PCR og sekvensering av målområdet
- Western blot for å sjekke at proteinet mangler
- Fenotypisk analyse av knockout-cellene`,
    },
    {
      id: 'bio1-9-4-example-2',
      type: 'example',
      title: 'Eksempel: Behandling av sigdcelleanemi med CRISPR',
      problem: 'Forklar hvordan CRISPR-basert genterapi (CASGEVY) behandler sigdcelleanemi.',
      solution: `**Løsning - CASGEVY-behandling:**

**Bakgrunn - Sigdcelleanemi:**
- Mutasjon i beta-globin-genet
- Hemoglobin klumper seg og deformerer røde blodceller
- "Sigdformede" celler blokkerer blodkar
- Fører til smerte, organskade og forkortet levetid

**Behandlingsstrategi:**
Istedenfor å reparere mutasjonen, reaktiverer man føtalt hemoglobin (HbF).

**Prosessen:**

1. **Stamcellehøsting:**
   - Pasientens blodstamceller samles fra benmarg/blod

2. **CRISPR-redigering (ex vivo):**
   - BCL11A-genet inaktiveres i stamcellene
   - BCL11A normalt undertrykker HbF-produksjon
   - Uten BCL11A produserer cellene HbF

3. **Kvalitetskontroll:**
   - Verifiser vellykket redigering
   - Sjekk for off-target-effekter

4. **Forberedelse:**
   - Pasienten får kjemoterapi for å fjerne gamle stamceller

5. **Infusjon:**
   - Redigerte stamceller settes tilbake

**Resultat:**
- Nye røde blodceller produserer HbF
- HbF hindrer sigdcelle-dannelse
- Dramatisk reduksjon i symptomer
- Potensielt kurerende behandling`,
    },
  ],
  exercises: [
    {
      id: 'bio1-9-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er funksjonen til Cas9-proteinet i CRISPR-Cas9-systemet?',
      options: [
        { id: 'a', text: 'Kutte DNA ved målsekvensen', isCorrect: true },
        { id: 'b', text: 'Lede systemet til riktig sted i genomet', isCorrect: false },
        { id: 'c', text: 'Reparere kuttet DNA', isCorrect: false },
        { id: 'd', text: 'Kopiere DNA', isCorrect: false },
      ],
      solution: 'Cas9 er et nuklease-enzym som fungerer som "molekylære sakser". Det kutter begge DNA-trådene (dobbelttrådbrudd) ved målsekvensen som bestemmes av guide-RNA.',
    },
    {
      id: 'bio1-9-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom NHEJ og HDR som DNA-reparasjonsmekanismer etter et CRISPR-kutt.',
      solution: 'NHEJ (Non-Homologous End Joining): Raskt og effektivt, men upresist. Endene av DNA settes direkte sammen, ofte med små insersjoner eller delesjoner (indels). Brukes når man vil knocke ut et gen. HDR (Homology-Directed Repair): Presist, men mindre effektivt. Bruker et templat-DNA for å reparere bruddet nøyaktig. Gjør det mulig å sette inn nye sekvenser eller rette mutasjoner presist. Krever at donor-DNA tilføres og at cellen er i riktig cellesyklusfase.',
    },
    {
      id: 'bio1-9-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er PAM-sekvensen i CRISPR-Cas9?',
      options: [
        { id: 'a', text: 'En kort sekvens ved siden av målområdet som Cas9 trenger for å kutte', isCorrect: true },
        { id: 'b', text: 'Sekvensen som koder for Cas9-proteinet', isCorrect: false },
        { id: 'c', text: 'En sekvens som beskytter cellens eget DNA mot kutting', isCorrect: false },
        { id: 'd', text: 'Et signal som stopper Cas9 etter kutting', isCorrect: false },
      ],
      solution: 'PAM (Protospacer Adjacent Motif) er en kort sekvens (NGG for SpCas9) som må være til stede rett ved siden av målsekvensen for at Cas9 skal kunne binde og kutte. PAM-kravet begrenser hvor i genomet man kan kutte.',
    },
    {
      id: 'bio1-9-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv forskjellen mellom ex vivo og in vivo genterapi.',
      solution: 'Ex vivo genterapi: Cellene hentes ut av pasienten, redigeres i laboratoriet, og settes deretter tilbake. Fordeler: Bedre kontroll, kan verifisere redigering før tilbakeføring, kan selektere korrekt redigerte celler. Brukes ofte for blodceller/stamceller. In vivo genterapi: CRISPR-komponentene leveres direkte inn i kroppen der de redigerer celler på stedet. Utfordringer: Vanskeligere å kontrollere, må nå riktige celler, immunrespons mot komponenter. Nødvendig for vev som ikke kan tas ut (øye, lever, hjerne).',
    },
    {
      id: 'bio1-9-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan CRISPR-Cas9 opprinnelig fungerer som et immunsystem i bakterier.',
      solution: 'CRISPR er et adaptivt immunsystem i bakterier: 1) Infeksjon: Et virus (bakteriofag) infiserer bakterien. 2) Tilegnelse: Bakterien kutter ut en bit av virusets DNA og setter den inn i sitt CRISPR-array mellom repeterende sekvenser. Denne biten kalles en "spacer". 3) Hukommelse: CRISPR-arrayet fungerer som et arkiv over tidligere infeksjoner. 4) Gjenkjenning: Ved ny infeksjon transkriberes CRISPR til crRNA som matcher virusets DNA. 5) Destruksjon: Cas-proteiner bruker crRNA for å finne og kutte virusets DNA, og dermed nøytralisere infeksjonen. Dette er analog til det adaptive immunsystemet hos pattedyr, men på genetisk nivå.',
    },
    {
      id: 'bio1-9-4-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva var CASGEVY, som ble godkjent i 2023, den første godkjente behandlingen for?',
      options: [
        { id: 'a', text: 'Sigdcelleanemi og beta-thalassemi', isCorrect: true },
        { id: 'b', text: 'HIV-infeksjon', isCorrect: false },
        { id: 'c', text: 'Brystkreft', isCorrect: false },
        { id: 'd', text: 'Parkinsons sykdom', isCorrect: false },
      ],
      solution: 'CASGEVY var den første CRISPR-baserte genterapien som ble godkjent. Den behandler sigdcelleanemi og beta-thalassemi ved å inaktivere BCL11A-genet i pasientens stamceller, noe som reaktiverer produksjonen av føtalt hemoglobin.',
    },
  ],
};

// ============================================================================
// Kapittel 9.5: Etikk i bioteknologi
// ============================================================================

export const CHAPTER_BIOLOGI_1_9_5: TextbookChapter = {
  id: 'biologi-1-9-5',
  courseId: 'biologi-1',
  chapterNumber: '9.5',
  title: 'Etikk i bioteknologi',
  description: 'Etiske spørsmål knyttet til GMO, genmodifisering av mennesker, patentering av gener, og føre-var-prinsippet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'drøfte etiske problemstillinger knyttet til GMO',
    'vurdere argumenter for og mot genmodifisering av mennesker',
    'gjøre rede for debatten om patentering av gener',
    'anvende føre-var-prinsippet på bioteknologiske spørsmål',
  ],
  content: [
    {
      id: 'bio1-9-5-intro',
      type: 'text',
      content: `# Etikk i bioteknologi

Bioteknologi reiser fundamentale etiske spørsmål om hva vi bør gjøre med teknologi som kan endre livets grunnlag. Bare fordi vi *kan* gjøre noe, betyr ikke det at vi *bør* gjøre det.

## Hvorfor trenger vi etisk refleksjon?

Bioteknologi påvirker:
- Naturen og økosystemer
- Matsikkerhet og landbruk
- Medisinsk behandling
- Menneskeverdet
- Fremtidige generasjoner
- Økonomisk makt og rettferdighet

Etiske vurderinger må balansere potensielle fordeler mot risiko, individuelle rettigheter mot samfunnshensyn, og kortsiktige gevinster mot langsiktige konsekvenser.`,
    },
    {
      id: 'bio1-9-5-def-fvp',
      type: 'definition',
      title: 'Føre-var-prinsippet',
      content: 'Føre-var-prinsippet sier at når det er trussel om alvorlig eller irreversibel skade, skal mangel på vitenskapelig sikkerhet ikke brukes som grunn til å utsette tiltak for å hindre skaden. Med andre ord: Ved tvil, vær forsiktig. Prinsippet brukes ofte i miljø- og helsepolitikk.',
    },
    {
      id: 'bio1-9-5-gmo-debatt',
      type: 'text',
      content: `## GMO-debatten

GMO er kanskje det mest omdiskuterte bioteknologiske spørsmålet.

### Argumenter FOR GMO
**Matsikkerhet:**
- Økt avling kan fø flere mennesker
- Mer robuste planter tåler klimaendringer
- Kan redusere matsvinn

**Miljø:**
- Mindre bruk av plantevernmidler (Bt-planter)
- Redusert behov for areal (høyere avling)
- Potensial for bærekraftig landbruk

**Ernæring:**
- Forbedret næringsinnhold (gyllen ris)
- Kan bekjempe feilernæring
- Allergenreduserte varianter

### Argumenter MOT GMO
**Økologisk risiko:**
- Genspredning til ville slektninger
- Effekter på ikke-målarter
- Redusert biologisk mangfold
- Resistensutvikling hos skadedyr

**Sosioøkonomisk:**
- Storselskaper kontrollerer frø
- Bønder blir avhengige
- Patent på liv?
- Urettferdig maktfordeling

**Usikkerhet:**
- Langtidseffekter ukjente
- Komplekse økosysteminteraksjoner
- Føre-var-prinsippet`,
    },
    {
      id: 'bio1-9-5-def-bioetikk',
      type: 'definition',
      title: 'Bioetikk',
      content: 'Bioetikk er studiet av etiske spørsmål som oppstår fra fremskritt innen biologi og medisin. Feltet omfatter spørsmål om livets begynnelse og slutt, medisinsk forskning, genteknologi, og forholdet mellom mennesker, dyr og miljø. Bioetiske vurderinger involverer ofte avveininger mellom nytte, skade, autonomi og rettferdighet.',
    },
    {
      id: 'bio1-9-5-mennesker',
      type: 'text',
      content: `## Genmodifisering av mennesker

Muligheten til å redigere menneskers DNA reiser dype etiske spørsmål.

### Somatisk vs. kimcelle-redigering

**Somatisk genredigering:**
- Endrer gener i kroppsceller (ikke kjønnsceller)
- Endringene arves IKKE til neste generasjon
- Eksempel: Genterapi for sigdcelleanemi
- Generelt akseptert for alvorlige sykdommer

**Kimcelle-redigering (germline):**
- Endrer gener i kjønnsceller eller embryoer
- Endringene arves til fremtidige generasjoner
- Forbudt eller sterkt regulert i de fleste land
- Irreversibel endring av menneskehetens genpool

### He Jiankui-saken (2018)
- Kinesisk forsker redigerte embryoer med CRISPR
- Målet var HIV-resistens
- Tvillinger ble født med endrede gener
- Internasjonal fordømmelse
- Forskeren ble fengslet

### Designerbabyer?
- Kan teknologien brukes til forbedring, ikke bare behandling?
- Velge egenskaper: intelligens, utseende, evner?
- Hvem får tilgang? - sosial ulikhet
- Hva definerer et "normalt" menneske?`,
    },
    {
      id: 'bio1-9-5-behandling-forbedring',
      type: 'text',
      content: `## Behandling vs. forbedring

Et sentralt etisk skille i bioteknologi.

### Behandling (therapy)
- Rette opp sykdom eller funksjonshemning
- Gjenopprette "normal" funksjon
- Eksempel: Genterapi for cystisk fibrose
- Generelt ansett som etisk forsvarlig

### Forbedring (enhancement)
- Gi egenskaper utover det normale
- Forbedre friske mennesker
- Eksempel: Øke intelligens eller muskelstyrke
- Mer etisk problematisk

### Gråsoner
- Hvor går grensen mellom sykdom og variasjon?
- Er kortvoksthet en "sykdom"?
- Hva med aldring?
- Kulturelle og sosiale definisjoner av "normal"

### Argumenter mot forbedring
- Urettferdig fordel (de rike forbedrer seg)
- Undergraver menneskelig likeverd
- Presser mot tvungen forbedring
- Uforutsigbare konsekvenser

### Argumenter for forbedring
- Mennesker har alltid søkt å forbedre seg
- Utdanning, trening, ernæring er også "forbedring"
- Kan øke livskvalitet
- Individuell autonomi`,
    },
    {
      id: 'bio1-9-5-patent',
      type: 'text',
      content: `## Patentering av gener

Kan man eie et gen? Dette er et omstridt juridisk og etisk spørsmål.

### Hva er et genpatent?
- Patent gir enerett til kommersiell utnyttelse
- Opprinnelig ble naturlige gener patentert
- 2013: USAs høyesterett avgjorde at naturlige gener ikke kan patenteres
- Syntetiske DNA-sekvenser kan fortsatt patenteres

### Argumenter FOR genpatenter
- Stimulerer forskning og utvikling
- Bedrifter trenger avkastning på investeringer
- Uten patenter, mindre innovasjon?
- Patenter er tidsbegrensede

### Argumenter MOT genpatenter
- Gener er oppdagelser, ikke oppfinnelser
- Hindrer forskning (tilgang til verktøy)
- Øker prisen på medisiner og tester
- Uetisk å "eie" deler av naturen
- Rammer utviklingsland hardest

### BRCA-saken
- Myriad Genetics hadde patent på BRCA1/BRCA2
- Gener knyttet til bryst- og eggstokkreft
- Monopol på testing
- Høye priser begrenset tilgang
- 2013: Patentet ble delvis ugyldiggjort`,
    },
    {
      id: 'bio1-9-5-fvp',
      type: 'text',
      content: `## Føre-var-prinsippet i praksis

### Når bør prinsippet brukes?
- Ved risiko for alvorlig skade
- Når skaden kan være irreversibel
- Når det er vitenskapelig usikkerhet
- Når alternativene finnes

### Kritikk av føre-var-prinsippet
- Kan hemme innovasjon og fremskritt
- All teknologi har en viss risiko
- Vanskelig å definere "tilstrekkelig sikker"
- Kan brukes til å blokkere nyttig teknologi

### Forsvar av prinsippet
- Noen feil kan ikke rettes opp
- Bevisbyrden bør ligge hos de som introduserer risiko
- Demokratisk kontroll med teknologi
- Beskytter fremtidige generasjoner

### Praktisk anvendelse på bioteknologi
1. **Risikovurdering**: Identifiser potensielle farer
2. **Usikkerhetsanalyse**: Hva vet vi ikke?
3. **Interesseavveining**: Hvem vinner/taper?
4. **Reversibilitet**: Kan vi angre?
5. **Alternativer**: Finnes tryggere metoder?
6. **Monitorering**: Følge utviklingen over tid`,
    },
    {
      id: 'bio1-9-5-example-1',
      type: 'example',
      title: 'Eksempel: GMO og føre-var-prinsippet',
      problem: 'Bruk føre-var-prinsippet til å vurdere om en ny GMO-plante bør godkjennes for dyrking.',
      solution: `**Løsning - Systematisk vurdering:**

**Scenario:** En ny mais-sort er genmodifisert til å tåle tørke.

**1. Identifiser potensielle farer:**
- Genspredning til ville mais-slektninger
- Effekter på jordbunnsorganismer
- Allergiske reaksjoner hos mennesker
- Uforutsette økologiske konsekvenser

**2. Vurder usikkerheten:**
- Korttidsstudier viser ingen problemer
- Langtidseffekter på økosystem ukjente
- Klimaendringer kan endre risikobildet

**3. Vurder alvorlighetsgrad:**
- Genspredning: Potensielt irreversibelt
- Allergi: Kan være alvorlig, men reversibelt ved tilbaketrekking
- Økologiske effekter: Varierer fra ubetydelige til alvorlige

**4. Finnes alternativer?**
- Tradisjonell avl (tar lenger tid)
- Vannbesparende landbruk
- Andre sorter tilpasset tørke

**5. Konklusjon etter føre-var:**
- Godkjenn for begrenset område først
- Krev grundig overvåking
- Etabler tilbaketrekningsplan
- Reevaluer etter 5 år med data

Føre-var-prinsippet krever ikke nullrisiko, men ansvarlig håndtering av usikkerhet.`,
    },
    {
      id: 'bio1-9-5-example-2',
      type: 'example',
      title: 'Eksempel: Behandling vs. forbedring',
      problem: 'En familie med et barn som har arvelig døvhet vurderer genterapi. Diskuter de etiske aspektene ved dette.',
      solution: `**Løsning - Etisk analyse:**

**Situasjonen:**
- Barnet er født døvt pga. genetisk mutasjon
- Genterapi kan potensielt gjenopprette hørsel
- Døvesamfunnet har sin egen kultur og språk

**Perspektiv 1: Medisinsk modell**
- Døvhet er en funksjonshemning som begrenser muligheter
- Behandling gjenoppretter "normal" funksjon
- Barnet får flere muligheter i livet
- Foreldrene ønsker det beste for barnet

**Perspektiv 2: Kulturell døvhet**
- Døvhet er en identitet, ikke en sykdom
- Døve har rikt språk (tegnspråk) og fellesskap
- "Behandling" impliserer at døve er "feil"
- Mange døve lever gode liv

**Etiske spørsmål:**
- Hvem bestemmer hva som er "normalt"?
- Kan barnet samtykke?
- Hva ville barnet valgt som voksen?
- Er det en "behandling" eller "forbedring"?

**Avveininger:**
- Autonomi: Barnets fremtidige valg
- Nytte: Potensielle fordeler ved hørsel
- Ikke-skade: Risiko ved inngrep
- Respekt: For døvekultur og mangfold

**Konklusjon:**
Det finnes ikke ett riktig svar. Etisk refleksjon krever å lytte til alle perspektiver, inkludert døvesamfunnet, og respektere at dette er en kompleks beslutning.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-9-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva sier føre-var-prinsippet?',
      options: [
        { id: 'a', text: 'Ved trussel om alvorlig skade skal usikkerhet ikke hindre forebyggende tiltak', isCorrect: true },
        { id: 'b', text: 'All ny teknologi må forbys til den er 100% sikker', isCorrect: false },
        { id: 'c', text: 'Kun teknologi som gir økonomisk gevinst bør tillates', isCorrect: false },
        { id: 'd', text: 'Vitenskapelig konsensus må alltid følges', isCorrect: false },
      ],
      solution: 'Føre-var-prinsippet sier at når det er trussel om alvorlig eller irreversibel skade, skal mangel på full vitenskapelig sikkerhet ikke brukes som unnskyldning for å utsette tiltak. Ved tvil, vær forsiktig.',
    },
    {
      id: 'bio1-9-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi to argumenter FOR og to argumenter MOT dyrking av GMO-planter.',
      solution: 'FOR: 1) Økt matproduksjon - GMO kan gi høyere avlinger og mer robuste planter, viktig for å fø en voksende befolkning. 2) Miljøfordeler - Bt-planter reduserer behovet for kjemiske sprøytemidler. MOT: 1) Økologisk risiko - Gener kan spre seg til ville slektninger og forstyrre økosystemer, skadedyr kan utvikle resistens. 2) Sosioøkonomiske bekymringer - Store selskaper kontrollerer frømarkedet, bønder blir avhengige, urettferdig maktfordeling.',
    },
    {
      id: 'bio1-9-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedforskjellen mellom somatisk genredigering og kimcelle-redigering?',
      options: [
        { id: 'a', text: 'Somatiske endringer arves ikke, mens kimcelle-endringer arves til neste generasjon', isCorrect: true },
        { id: 'b', text: 'Somatisk er mer presis enn kimcelle-redigering', isCorrect: false },
        { id: 'c', text: 'Somatisk bruker CRISPR, kimcelle bruker andre metoder', isCorrect: false },
        { id: 'd', text: 'Somatisk er kun for planter, kimcelle er for mennesker', isCorrect: false },
      ],
      solution: 'Somatisk genredigering endrer gener i vanlige kroppsceller og påvirker kun individet som behandles. Kimcelle-redigering endrer gener i kjønnsceller eller embryoer, og disse endringene arves til alle fremtidige generasjoner. Dette gjør kimcelle-redigering mer kontroversielt.',
    },
    {
      id: 'bio1-9-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor patentering av gener er kontroversielt, og beskriv ett argument fra hver side av debatten.',
      solution: 'Kontroversielt fordi det reiser spørsmål om man kan "eie" noe som finnes i naturen. FOR patentering: Patenter er nødvendige for å stimulere forskning - bedrifter investerer milliarder i å identifisere og karakterisere gener, og uten mulighet for avkastning (enerett i en periode) vil de ikke gjøre denne investeringen. MOT patentering: Gener er oppdagelser, ikke oppfinnelser - de finnes allerede i naturen. Patenter hindrer forskning ved å begrense tilgang, øker priser på medisinsk testing og behandling, og gjør grunnleggende biologisk informasjon til privat eiendom.',
    },
    {
      id: 'bio1-9-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter etikken rundt "designerbabyer" - bruk av genteknologi for å velge eller forbedre egenskaper hos fremtidige barn.',
      solution: 'Argumenter MOT: 1) Urettferdighet - kun de rike får tilgang, skaper genetisk overklasse. 2) Undergraver menneskeverd - mennesker blir "produkter" som kan designes. 3) Press - foreldre tvinges til å "forbedre" barn for å være konkurransedyktige. 4) Redusert mangfold - alle velger samme "optimale" egenskaper. 5) Ukjente konsekvenser - komplekse gener med flere funksjoner. Argumenter FOR: 1) Forebygge alvorlig sykdom er etisk riktig. 2) Autonomi - foreldre bør kunne velge for sine barn. 3) Vi bruker allerede teknologi for å forbedre barns liv. Viktige spørsmål: Hvor går grensen mellom behandling og forbedring? Hvem definerer "normal"? Kan barnet samtykke? Hva med fremtidige generasjoners rettigheter? De fleste land forbyr kimcelle-redigering for annet enn å forebygge alvorlig sykdom.',
    },
    {
      id: 'bio1-9-5-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skjedde i He Jiankui-saken i 2018?',
      options: [
        { id: 'a', text: 'En forsker redigerte embryoer med CRISPR, og tvillinger ble født med endrede gener', isCorrect: true },
        { id: 'b', text: 'En ny GMO-plante ble godkjent for dyrking', isCorrect: false },
        { id: 'c', text: 'Et patent på et gen ble ugyldiggjort', isCorrect: false },
        { id: 'd', text: 'CRISPR ble først oppdaget', isCorrect: false },
      ],
      solution: 'He Jiankui, en kinesisk forsker, brukte CRISPR til å redigere gener i menneskelige embryoer for å gjøre dem resistente mot HIV. Tvillinger ble født med de redigerte genene. Dette førte til internasjonal fordømmelse da kimcelle-redigering anses som etisk uakseptabelt. Forskeren ble fengslet.',
    },
  ],
};

// ============================================================================
// Eksport av alle delkapitler
// ============================================================================

export const BIOLOGI_1_DEL9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_9_1,
  CHAPTER_BIOLOGI_1_9_2,
  CHAPTER_BIOLOGI_1_9_3,
  CHAPTER_BIOLOGI_1_9_4,
  CHAPTER_BIOLOGI_1_9_5,
];

export function getBiologi1Del9Chapter(chapterId: string): TextbookChapter | undefined {
  return BIOLOGI_1_DEL9_CHAPTERS.find(chapter => chapter.id === chapterId);
}
