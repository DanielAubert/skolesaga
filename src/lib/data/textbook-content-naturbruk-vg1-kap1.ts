/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Naturbruk VG1 - Kapittel 1
 *
 * Dekker LK20-kompetansemål for naturbruk VG1
 * Kapittel 1: Økosystemer og naturmangfold
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er et økosystem?
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_1_1: TextbookChapter = {
  id: 'naturbruk-vg1-1-1',
  courseId: 'naturbruk-vg1',
  chapterNumber: '1.1',
  title: 'Hva er et økosystem?',
  description: 'Introduksjon til økosystemer, deres komponenter og hvordan de fungerer som funksjonelle enheter i naturen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for begrepet økosystem',
    'beskrive samspillet mellom biotiske og abiotiske faktorer',
    'forklare hvordan energi og næringsstoffer flyter gjennom et økosystem',
  ],
  content: [
    {
      id: 'nat-vg1-1-1-intro',
      type: 'text',
      content: `# Hva er et økosystem?

Et økosystem er et avgrenset område i naturen der levende organismer og deres ikke-levende omgivelser fungerer sammen som en enhet. Begrepet ble introdusert av den britiske økologen Arthur Tansley i 1935.

## Økosystemets to hovedkomponenter

Et økosystem består av to hovedtyper komponenter:

1. **Biotiske faktorer** - alle levende organismer
2. **Abiotiske faktorer** - alle ikke-levende elementer

Samspillet mellom disse komponentene bestemmer økosystemets karakter og funksjon.`,
    },
    {
      id: 'nat-vg1-1-1-def-okosystem',
      type: 'definition',
      title: 'Økosystem',
      content: 'Et økosystem er et avgrenset naturområde der levende organismer (biotiske faktorer) og deres fysiske miljø (abiotiske faktorer) påvirker hverandre gjennom utveksling av energi og næringsstoffer. Eksempler på økosystemer er en innsjø, en skog, en myr eller et korallrev.',
    },
    {
      id: 'nat-vg1-1-1-def-biotisk',
      type: 'definition',
      title: 'Biotiske faktorer',
      content: 'Biotiske faktorer er alle levende organismer i et økosystem, inkludert planter, dyr, sopp, bakterier og andre mikroorganismer. Disse organismene påvirker hverandre gjennom konkurranse, predasjon, symbiose og andre økologiske interaksjoner.',
    },
    {
      id: 'nat-vg1-1-1-def-abiotisk',
      type: 'definition',
      title: 'Abiotiske faktorer',
      content: 'Abiotiske faktorer er ikke-levende komponenter i et økosystem som påvirker de levende organismene. Dette inkluderer lys, temperatur, nedbør, vind, jordsmonn, pH, næringsstoffer og andre fysiske og kjemiske forhold.',
    },
    {
      id: 'nat-vg1-1-1-biotiske',
      type: 'text',
      content: `## Biotiske faktorer i detalj

De levende organismene i et økosystem kan deles inn i tre hovedgrupper basert på hvordan de skaffer seg energi:

### Produsenter
- Organismer som lager sin egen næring gjennom fotosyntese eller kjemosyntese
- Eksempler: Planter, alger, noen bakterier
- Danner grunnlaget for næringsnettet

### Konsumenter
- Organismer som må spise andre organismer for å få energi
- **Primærkonsumenter**: Planteetere (herbivorer)
- **Sekundærkonsumenter**: Rovdyr som spiser planteetere
- **Tertiærkonsumenter**: Toppredatorer

### Nedbrytere
- Organismer som bryter ned dødt organisk materiale
- Eksempler: Sopp, bakterier, meitemark
- Resirkulerer næringsstoffer tilbake til økosystemet`,
    },
    {
      id: 'nat-vg1-1-1-abiotiske',
      type: 'text',
      content: `## Abiotiske faktorer i detalj

De ikke-levende faktorene setter rammene for hvilke organismer som kan leve i et økosystem:

### Klimatiske faktorer
- **Temperatur**: Påvirker stoffskiftet til alle organismer
- **Nedbør**: Bestemmer vanntilgangen
- **Lys**: Nødvendig for fotosyntese
- **Vind**: Påvirker temperatur, fordamping og frøspredning

### Jordforhold (edafiske faktorer)
- **Jordtype**: Sand, leire, humus
- **pH**: Sur eller basisk jord
- **Næringsinnhold**: Nitrogen, fosfor, kalium

### Topografiske faktorer
- Høyde over havet
- Helning og eksposisjon
- Nærhet til vann`,
    },
    {
      id: 'nat-vg1-1-1-def-habitat',
      type: 'definition',
      title: 'Habitat',
      content: 'Et habitat er det spesifikke området eller miljøet der en organisme lever. Habitatet gir organismen tilgang til mat, vann, ly og partnere for reproduksjon. Hver art har spesifikke krav til sitt habitat.',
    },
    {
      id: 'nat-vg1-1-1-example-1',
      type: 'example',
      title: 'Eksempel: En innsjø som økosystem',
      problem: 'Beskriv de viktigste biotiske og abiotiske faktorene i en norsk innsjø.',
      solution: `**Biotiske faktorer i en innsjø:**
- **Produsenter**: Alger, vannplanter (vannliljer, tjønnaks)
- **Primærkonsumenter**: Vannlopper, snegler, planteetende fisk
- **Sekundærkonsumenter**: Ørret, abbor, gjedde
- **Tertiærkonsumenter**: Oter, hegre, fiskeørn
- **Nedbrytere**: Bakterier og sopp på bunnen

**Abiotiske faktorer i en innsjø:**
- **Lysforhold**: Varierer med dybde og vannets klarhet
- **Temperatur**: Sjiktning med varmere vann øverst om sommeren
- **Oksygeninnhold**: Høyest i overflaten, lavest på dypet
- **pH**: Påvirkes av berggrunn og sur nedbør
- **Næringsstoffer**: Nitrogen og fosfor begrenser ofte algvekst

Samspillet mellom disse faktorene bestemmer hvilke arter som kan leve i innsjøen og hvor mange individer økosystemet kan støtte.`,
    },
    {
      id: 'nat-vg1-1-1-tip',
      type: 'tip',
      title: 'Huskeregel',
      content: 'For å huske forskjellen mellom biotisk og abiotisk: **Bio** betyr liv (som i biologi). Biotiske faktorer er dermed alt som lever. Abiotiske faktorer er alt som **ikke** lever (a = uten).',
    },
    {
      id: 'nat-vg1-1-1-example-2',
      type: 'example',
      title: 'Eksempel: Samspill mellom faktorer',
      problem: 'Forklar hvordan endring i en abiotisk faktor kan påvirke de biotiske faktorene i et økosystem.',
      solution: `**Scenario: Økt temperatur i en innsjø**

Når temperaturen i en innsjø øker, skjer det en kjedereaksjon:

1. **Direkte effekt**: Vannet holder mindre oksygen oppløst
2. **Produsenter**: Økt algvekst (algeoppblomstring)
3. **Nedbrytere**: Økt aktivitet, bruker mer oksygen
4. **Fisk**: Noen arter tåler ikke lavere oksygeninnhold
5. **Vannkvalitet**: Kan bli dårligere med økt organisk materiale

Dette eksempelet viser hvordan en enkelt abiotisk faktor (temperatur) kan utløse en dominoeffekt gjennom hele økosystemet.`,
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-1-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av følgende er en biotisk faktor?',
      options: [
        { id: 'a', text: 'Sopp', isCorrect: true },
        { id: 'b', text: 'Temperatur', isCorrect: false },
        { id: 'c', text: 'Nedbør', isCorrect: false },
        { id: 'd', text: 'pH i jorda', isCorrect: false },
      ],
      solution: 'Sopp er en levende organisme og dermed en biotisk faktor. De andre alternativene (temperatur, nedbør og pH) er ikke-levende og derfor abiotiske faktorer.',
    },
    {
      id: 'nat-vg1-1-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom et habitat og et økosystem.',
      solution: 'Et habitat er det spesifikke leveområdet til en enkelt art - stedet der arten finner alt den trenger for å overleve og formere seg. Et økosystem er et større system som omfatter alle organismene (mange arter) i et område og deres samspill med de abiotiske faktorene. Et økosystem inneholder mange ulike habitater.',
    },
    {
      id: 'nat-vg1-1-1-ex3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kalles organismer som lager sin egen næring gjennom fotosyntese?',
      options: [
        { id: 'a', text: 'Produsenter', isCorrect: true },
        { id: 'b', text: 'Konsumenter', isCorrect: false },
        { id: 'c', text: 'Nedbrytere', isCorrect: false },
        { id: 'd', text: 'Predatorer', isCorrect: false },
      ],
      solution: 'Produsenter (også kalt autotrofe organismer) er organismer som kan lage sin egen næring ved hjelp av fotosyntese. De danner grunnlaget for alle næringskjeder.',
    },
    {
      id: 'nat-vg1-1-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi tre eksempler på abiotiske faktorer og forklar hvordan hver av dem kan påvirke plantevekst.',
      solution: '1) **Temperatur**: Påvirker hastigheten på fotosyntese og andre kjemiske prosesser. For lave temperaturer stopper veksten, for høye kan skade cellene. 2) **Lys**: Nødvendig for fotosyntesen. Lite lys gir redusert vekst, mens for sterkt lys kan skade bladene. 3) **Vann/nedbør**: Nødvendig for fotosyntese, transport av næring og cellens turgiditet. For lite vann gir visning, for mye kan føre til oksygenmangel i røttene.',
    },
    {
      id: 'nat-vg1-1-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv hvordan en skogbrann kan påvirke et skogøkosystem både på kort og lang sikt.',
      solution: 'På kort sikt: Mange organismer dør, vegetasjon brenner, jorda blir utarmet for organisk materiale, dyrearter flykter eller omkommer. På lang sikt: Asken tilfører næringsstoffer til jorda, frø fra branntilpassede arter spirer, nye pionerarter etablerer seg, gradvis kommer flere arter tilbake (suksesjon). Etter mange år kan skogen være gjenvokst med økt biologisk mangfold. Noen økosystemer er faktisk avhengige av regelmessige branner for å opprettholde sin naturlige dynamikk.',
    },
    {
      id: 'nat-vg1-1-1-ex6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken funksjon har nedbrytere i et økosystem?',
      options: [
        { id: 'a', text: 'De resirkulerer næringsstoffer fra dødt materiale', isCorrect: true },
        { id: 'b', text: 'De produserer oksygen gjennom fotosyntese', isCorrect: false },
        { id: 'c', text: 'De jakter på andre dyr', isCorrect: false },
        { id: 'd', text: 'De bestøver blomster', isCorrect: false },
      ],
      solution: 'Nedbrytere (sopp, bakterier) bryter ned dødt organisk materiale og frigjør næringsstoffer tilbake til jorda og vannet. Uten nedbrytere ville næringsstoffer bli bundet i dødt materiale, og økosystemet ville stoppe opp.',
    },
  ],
};

// ============================================================================
// Kapittel 1.2: Næringskjeder og næringsnett
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_1_2: TextbookChapter = {
  id: 'naturbruk-vg1-1-2',
  courseId: 'naturbruk-vg1',
  chapterNumber: '1.2',
  title: 'Næringskjeder og næringsnett',
  description: 'Energistrømmen gjennom økosystemer, trofiske nivåer og hvordan organismer er koblet sammen gjennom mat.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive oppbyggingen av næringskjeder og næringsnett',
    'forklare energistrømmen gjennom trofiske nivåer',
    'beregne energitap mellom trofiske nivåer',
    'vurdere konsekvenser av endringer i næringskjeder',
  ],
  content: [
    {
      id: 'nat-vg1-1-2-intro',
      type: 'text',
      content: `# Næringskjeder og næringsnett

Alle organismer trenger energi for å leve. Energien flyter gjennom økosystemet fra produsenter til konsumenter i det vi kaller næringskjeder og næringsnett.

## Energiens opprinnelse

Nesten all energi i økosystemer kommer opprinnelig fra solen. Produsentene (planter og alger) fanger solenergi gjennom fotosyntese og omdanner den til kjemisk energi i organiske molekyler (sukker).

Denne energien overføres videre når organismer spiser hverandre.`,
    },
    {
      id: 'nat-vg1-1-2-def-naeringskjede',
      type: 'definition',
      title: 'Næringskjede',
      content: 'En næringskjede er en lineær fremstilling av hvem som spiser hvem i et økosystem. Den starter alltid med en produsent og viser hvordan energi overføres fra ett trofisk nivå til det neste. Eksempel: Gress → Hare → Rev → Ørn.',
    },
    {
      id: 'nat-vg1-1-2-def-naeringsnett',
      type: 'definition',
      title: 'Næringsnett',
      content: 'Et næringsnett er en sammensatt fremstilling av alle næringskjedene i et økosystem. Det viser at de fleste organismer har flere matkilder og at energi kan strømme gjennom økosystemet via mange forskjellige veier.',
    },
    {
      id: 'nat-vg1-1-2-def-trofisk',
      type: 'definition',
      title: 'Trofisk nivå',
      content: 'Et trofisk nivå angir en organismes posisjon i næringskjeden basert på antall ledd fra produsentene. Produsenter er på nivå 1, primærkonsumenter (planteetere) på nivå 2, sekundærkonsumenter på nivå 3 osv. Toppredatorer er på det høyeste trofiske nivået i økosystemet.',
    },
    {
      id: 'nat-vg1-1-2-trofiske-nivaaer',
      type: 'text',
      content: `## De trofiske nivåene

### Nivå 1: Produsenter (autotrofe)
- Lager organisk materiale fra uorganisk ved fotosyntese
- Eksempler: Planter, alger, fotosyntetiserende bakterier
- Basis for all energi i økosystemet

### Nivå 2: Primærkonsumenter (herbivorer)
- Spiser produsenter
- Eksempler: Harer, rådyr, insekter, planteetende fisk
- Overfører energi fra planter til høyere nivåer

### Nivå 3: Sekundærkonsumenter (karnivorer)
- Spiser primærkonsumenter
- Eksempler: Rev, gjedde, frosk, edderkopper
- Kan også være omnivorer (altetere)

### Nivå 4+: Tertiærkonsumenter og toppredatorer
- Spiser sekundærkonsumenter
- Eksempler: Ørn, gaupe, spekkhogger
- Har ingen naturlige fiender (bortsett fra mennesker)`,
    },
    {
      id: 'nat-vg1-1-2-energistrøm',
      type: 'text',
      content: `## Energistrøm og energitap

Når energi overføres fra ett trofisk nivå til det neste, går mesteparten av energien tapt:

### 10 %-regelen
- Bare ca. 10 % av energien overføres til neste nivå
- 90 % går tapt til:
  - Celleånding (varme)
  - Ufordøyd materiale (avføring)
  - Dødt materiale som ikke spises

### Konsekvenser
- Næringskjeder har sjelden mer enn 4-5 ledd
- Toppredatorer er alltid færre enn byttedyr
- Biomassen minker oppover i næringskjeden

### Energipyramide
Hvis produsenter har 10 000 kJ energi:
- Primærkonsumenter: ca. 1 000 kJ
- Sekundærkonsumenter: ca. 100 kJ
- Tertiærkonsumenter: ca. 10 kJ`,
    },
    {
      id: 'nat-vg1-1-2-def-biomasse',
      type: 'definition',
      title: 'Biomasse',
      content: 'Biomasse er den totale massen av levende organismer i et område, målt i tørrvekt per arealenhet (f.eks. kg/m² eller tonn/hektar). Biomassen avtar typisk oppover i næringskjeden fordi energi går tapt mellom hvert trofisk nivå.',
    },
    {
      id: 'nat-vg1-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Næringskjede i norsk skog',
      problem: 'Sett opp en typisk næringskjede for en norsk granskog og angi de trofiske nivåene.',
      solution: `**Næringskjede i granskog:**

**Trofisk nivå 1 (Produsent):** Gran
↓
**Trofisk nivå 2 (Primærkonsument):** Granbarkbille
↓
**Trofisk nivå 3 (Sekundærkonsument):** Tretåspett
↓
**Trofisk nivå 4 (Tertiærkonsument):** Hønsehauk

**Alternativ kjede:**
Gran → Elg → Ulv

**Forklaring:**
- Granen produserer organisk materiale gjennom fotosyntese
- Barkbillen spiser bark og trevirke
- Tretåspetten spiser insekter som barkbiller
- Hønsehauken jakter på mellomstore fugler som spetter`,
    },
    {
      id: 'nat-vg1-1-2-naeringsnett-tekst',
      type: 'text',
      content: `## Fra næringskjede til næringsnett

I virkeligheten spiser de fleste dyr mer enn én type mat:
- En rev spiser både hare, mus og bær
- En ørn kan ta rev, hare og fisk
- Mange dyr bytter diett med årstidene

### Fordeler med komplekse næringsnett
- **Stabilitet**: Hvis én art forsvinner, finnes alternativer
- **Fleksibilitet**: Organismer kan tilpasse seg endringer
- **Resiliens**: Økosystemet tåler forstyrrelser bedre

### Nøkkelarter
Noen arter er særlig viktige for næringsnettets struktur:
- **Toppredatorer**: Regulerer byttedyrpopulasjoner
- **Økosystemingeniører**: Endrer fysisk miljø (f.eks. bever)
- **Pollinatorer**: Nødvendige for planteformering`,
    },
    {
      id: 'nat-vg1-1-2-example-2',
      type: 'example',
      title: 'Eksempel: Energiberegning',
      problem: 'En eng produserer 20 000 kJ energi gjennom fotosyntese. Hvor mye energi er tilgjengelig for en tertiærkonsument (nivå 4)?',
      solution: `**Beregning med 10 %-regelen:**

**Nivå 1 (Produsenter):** 20 000 kJ
↓ 10 % overføres
**Nivå 2 (Primærkonsumenter):** 20 000 × 0,10 = 2 000 kJ
↓ 10 % overføres
**Nivå 3 (Sekundærkonsumenter):** 2 000 × 0,10 = 200 kJ
↓ 10 % overføres
**Nivå 4 (Tertiærkonsumenter):** 200 × 0,10 = **20 kJ**

**Konklusjon:** Bare 0,1 % av den opprinnelige energien (20/20 000 = 0,001) når toppredatoren. Dette forklarer hvorfor toppredatorer er sjeldne og trenger store leveområder.`,
    },
    {
      id: 'nat-vg1-1-2-tip',
      type: 'tip',
      title: 'Praktisk anvendelse',
      content: 'Energitapet mellom trofiske nivåer har praktiske konsekvenser: Det kreves ca. 10 ganger mer jordbruksareal for å produsere samme mengde mat som kjøtt sammenlignet med vegetabilsk mat. Dette er relevant for diskusjoner om bærekraftig matproduksjon.',
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-1-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mye av energien overføres typisk fra ett trofisk nivå til det neste?',
      options: [
        { id: 'a', text: 'Ca. 10 %', isCorrect: true },
        { id: 'b', text: 'Ca. 50 %', isCorrect: false },
        { id: 'c', text: 'Ca. 90 %', isCorrect: false },
        { id: 'd', text: 'Ca. 1 %', isCorrect: false },
      ],
      solution: 'Bare ca. 10 % av energien overføres til neste trofiske nivå. Resten (90 %) går tapt til celleånding (varme), ufordøyd materiale og dødt materiale som ikke blir spist.',
    },
    {
      id: 'nat-vg1-1-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor næringskjeder sjelden har mer enn 4-5 ledd.',
      solution: 'Fordi ca. 90 % av energien går tapt mellom hvert trofisk nivå, er det svært lite energi igjen etter 4-5 ledd. For eksempel: hvis produsenter har 10 000 enheter energi, har tertiærkonsumenter bare 10 enheter. Dette er for lite til å opprettholde enda et trofisk nivå med levedyktige populasjoner.',
    },
    {
      id: 'nat-vg1-1-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom en næringskjede og et næringsnett?',
      solution: 'En næringskjede er en forenklet, lineær fremstilling som viser én sti for energioverføring (f.eks. gress → hare → rev). Et næringsnett er en mer realistisk fremstilling som viser alle spiseforbindelsene i et økosystem - altså mange sammenkoblede næringskjeder. Næringsnettet viser at de fleste organismer har flere matkilder og at de kan bli spist av flere predatorer.',
    },
    {
      id: 'nat-vg1-1-2-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken organisme er på det laveste trofiske nivået?',
      options: [
        { id: 'a', text: 'Planter', isCorrect: true },
        { id: 'b', text: 'Planteetere', isCorrect: false },
        { id: 'c', text: 'Nedbrytere', isCorrect: false },
        { id: 'd', text: 'Rovdyr', isCorrect: false },
      ],
      solution: 'Planter (produsenter) er på det laveste trofiske nivået (nivå 1) fordi de danner grunnlaget for næringskjeden ved å produsere organisk materiale gjennom fotosyntese. Planteetere er på nivå 2, rovdyr på nivå 3 eller høyere.',
    },
    {
      id: 'nat-vg1-1-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et økosystem har produsenter med total biomasse på 1000 kg. Beregn forventet biomasse på hvert trofisk nivå opp til tertiærkonsumenter, og forklar hvorfor biomassen avtar.',
      solution: 'Med 10 %-regelen: Produsenter (nivå 1): 1000 kg. Primærkonsumenter (nivå 2): 1000 × 0,10 = 100 kg. Sekundærkonsumenter (nivå 3): 100 × 0,10 = 10 kg. Tertiærkonsumenter (nivå 4): 10 × 0,10 = 1 kg. Biomassen avtar fordi mesteparten av energien som tas opp på hvert nivå brukes til cellenes stoffskifte (celleånding) og avgis som varme. Bare en liten del bygges inn i ny biomasse som kan overføres til neste nivå.',
    },
    {
      id: 'nat-vg1-1-2-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en toppredator?',
      options: [
        { id: 'a', text: 'Et rovdyr som ikke har naturlige fiender', isCorrect: true },
        { id: 'b', text: 'Det største dyret i et økosystem', isCorrect: false },
        { id: 'c', text: 'Et dyr som spiser planter', isCorrect: false },
        { id: 'd', text: 'En fugl som lever i tretoppene', isCorrect: false },
      ],
      solution: 'En toppredator er et rovdyr på det høyeste trofiske nivået som ikke har noen naturlige fiender (bortsett fra mennesker). Eksempler er ulv, gaupe, spekkhogger og kongeørn. De regulerer populasjonene av byttedyr nedover i næringskjeden.',
    },
  ],
};

// ============================================================================
// Kapittel 1.3: Biologisk mangfold
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_1_3: TextbookChapter = {
  id: 'naturbruk-vg1-1-3',
  courseId: 'naturbruk-vg1',
  chapterNumber: '1.3',
  title: 'Biologisk mangfold',
  description: 'Hva biologisk mangfold er, hvorfor det er viktig, og hvilke trusler det står overfor.',
  estimatedMinutes: 55,
  competenceGoals: [
    'definere biologisk mangfold på ulike nivåer',
    'forklare verdien av biologisk mangfold',
    'beskrive trusler mot biologisk mangfold',
    'vurdere tiltak for å bevare naturmangfoldet',
  ],
  content: [
    {
      id: 'nat-vg1-1-3-intro',
      type: 'text',
      content: `# Biologisk mangfold

Biologisk mangfold, eller biodiversitet, er variasjonen av liv på jorda. Det omfatter alle levende organismer, fra mikroskopiske bakterier til de største hvalene, og samspillet mellom dem.

## Tre nivåer av biologisk mangfold

1. **Genetisk mangfold** - variasjon innen arter
2. **Artsmangfold** - antall og variasjon av arter
3. **Økosystemmangfold** - variasjon av naturtyper

Alle tre nivåene er viktige og henger sammen.`,
    },
    {
      id: 'nat-vg1-1-3-def-biodiversitet',
      type: 'definition',
      title: 'Biologisk mangfold (biodiversitet)',
      content: 'Biologisk mangfold er summen av all variasjon i naturen - variasjon av gener, arter og økosystemer. Begrepet omfatter både antallet forskjellige arter (artsrikdom) og hvor jevnt fordelt individene er mellom artene (artsjevnhet).',
    },
    {
      id: 'nat-vg1-1-3-def-genetisk',
      type: 'definition',
      title: 'Genetisk mangfold',
      content: 'Genetisk mangfold er variasjonen i arvematerialet (DNA) innen en art eller populasjon. Høyt genetisk mangfold gjør en art mer robust fordi ulike individer kan ha egenskaper som er fordelaktige under ulike forhold. Arter med lavt genetisk mangfold er mer sårbare for sykdom og miljøendringer.',
    },
    {
      id: 'nat-vg1-1-3-def-endemisk',
      type: 'definition',
      title: 'Endemisk art',
      content: 'En endemisk art er en art som kun finnes i et avgrenset geografisk område og ingen andre steder i verden. Endemiske arter er ofte ekstra sårbare fordi hele artens eksistens avhenger av at det ene leveområdet bevares. Eksempler: Lemur (Madagaskar), koala (Australia).',
    },
    {
      id: 'nat-vg1-1-3-nivaaer',
      type: 'text',
      content: `## De tre nivåene i detalj

### Genetisk mangfold
- Variasjon i arvestoffet mellom individer av samme art
- Gir artene tilpasningsevne til endringer
- Truet av innavl i små populasjoner
- Eksempel: Ulike hunderaser har ulikt genetisk mangfold

### Artsmangfold
- Antall arter i et område (artsrikdom)
- Hvordan individene er fordelt mellom artene (artsjevnhet)
- Varierer stort mellom økosystemer
- Tropisk regnskog har høyest artsmangfold

### Økosystemmangfold
- Variasjonen av naturtyper og habitater
- Inkluderer skog, myr, fjell, innsjøer, korallrev osv.
- Hvert økosystem har sine karakteristiske arter
- Norge har stor variasjon fra kyst til høyfjell`,
    },
    {
      id: 'nat-vg1-1-3-verdier',
      type: 'text',
      content: `## Hvorfor er biologisk mangfold viktig?

### Økosystemtjenester
Naturen gir oss utallige tjenester:
- **Forsynende**: Mat, vann, fiber, medisin
- **Regulerende**: Klimaregulering, pollinering, vannrensing
- **Kulturelle**: Rekreasjon, estetikk, spiritualitet
- **Støttende**: Jorddannelse, næringssirkulering, fotosyntese

### Økologisk stabilitet
- Høyt mangfold gir mer stabile økosystemer
- Flere arter betyr flere funksjoner og sikkerhetsnett
- Redundans: Flere arter kan fylle lignende roller

### Egenverdi
- Alle arter har verdi uavhengig av nytte for mennesker
- Etisk ansvar for å bevare naturen for fremtidige generasjoner`,
    },
    {
      id: 'nat-vg1-1-3-trusler',
      type: 'text',
      content: `## Trusler mot biologisk mangfold

### De fem hovedtruslene (HIPPO)
1. **Habitatødeleggelse** (Habitat loss)
   - Hogst, urbanisering, jordbruksutvidelse
   - Den største trusselen globalt

2. **Fremmede arter** (Invasive species)
   - Arter introdusert til nye områder
   - Kan utkonkurrere stedegne arter
   - Eksempel: Brunskogsnegl i Norge

3. **Forurensning** (Pollution)
   - Kjemikalier, plast, næringsstoffer
   - Påvirker både land og vann

4. **Befolkningsvekst/overutnyttelse** (Population/overexploitation)
   - Overfiske, jakt, høsting
   - Ressursene tar slutt

5. **Klimaendringer** (Climate change)
   - Endrer leveområder raskere enn arter tilpasser seg
   - Forskyver klimasoner mot polene og oppover i høyden`,
    },
    {
      id: 'nat-vg1-1-3-def-rodliste',
      type: 'definition',
      title: 'Rødliste',
      content: 'Rødlisten er en oversikt over arter som er truet av utryddelse. Artene kategoriseres etter grad av trussel: kritisk truet (CR), sterkt truet (EN), sårbar (VU), nær truet (NT) og livskraftig (LC). I Norge oppdateres rødlisten av Artsdatabanken.',
    },
    {
      id: 'nat-vg1-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Hotspots for biologisk mangfold',
      problem: 'Hva er en biodiversitets-hotspot og hvorfor er disse områdene viktige?',
      solution: `**Biodiversitets-hotspots:**

En hotspot er et område som oppfyller to kriterier:
1. Minst 1500 endemiske plantearter (arter som kun finnes der)
2. Har mistet minst 70 % av sin opprinnelige vegetasjon

**De 36 hotspotene dekker:**
- Kun 2,5 % av jordas landareal
- Over 50 % av alle plantearter
- 43 % av alle virveldyr

**Eksempler på hotspots:**
- Middelhavsområdet
- Himalaya
- Atlanterhavsregnskogen (Brasil)
- Madagaskar

**Betydning:**
Å bevare disse områdene gir størst effekt per krone investert i naturvern fordi de inneholder så mange unike arter på begrenset areal.`,
    },
    {
      id: 'nat-vg1-1-3-example-2',
      type: 'example',
      title: 'Eksempel: Truede arter i Norge',
      problem: 'Gi eksempler på truede arter i Norge og forklar hvorfor de er truet.',
      solution: `**Truede arter i Norge:**

**Fjellrev (sterkt truet - EN)**
- Truet av klimaendringer og konkurranse med rødrev
- Få individer gir lav genetisk variasjon
- Bevaringstiltak: Støttefôring, avlsprogram

**Hubro (sterkt truet - EN)**
- Truet av kraftlinjer, vindturbiner, habitattap
- Forstyrrelser ved reirplasser
- Få egnede hekkeplasser

**Ål (kritisk truet - CR)**
- Overfiske, habitatødeleggelse, parasitter
- Komplisert livssyklus gjør bevaring vanskelig
- Kraftverk hindrer vandring

**Villrein (nær truet - NT)**
- Fragmenterte leveområder
- Forstyrrelser fra friluftsaktivitet og hyttebygging
- Norge har ansvar for 90 % av europeisk villrein`,
    },
    {
      id: 'nat-vg1-1-3-tip',
      type: 'tip',
      title: 'Huskehjelp: HIPPO',
      content: 'Bruk HIPPO for å huske de fem hovedtruslene mot biologisk mangfold: **H**abitat loss (habitatødeleggelse), **I**nvasive species (fremmede arter), **P**ollution (forurensning), **P**opulation (befolkningsvekst/overutnyttelse), **O** = climate change (O for "oh no" - klimaendringer).',
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-1-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke tre nivåer av biologisk mangfold finnes?',
      options: [
        { id: 'a', text: 'Genetisk, arts- og økosystemmangfold', isCorrect: true },
        { id: 'b', text: 'Plante-, dyre- og soppmangfold', isCorrect: false },
        { id: 'c', text: 'Hav-, land- og luftmangfold', isCorrect: false },
        { id: 'd', text: 'Lokalt, nasjonalt og globalt mangfold', isCorrect: false },
      ],
      solution: 'De tre nivåene av biologisk mangfold er: 1) Genetisk mangfold (variasjon innen arter), 2) Artsmangfold (variasjon mellom arter), og 3) Økosystemmangfold (variasjon av naturtyper).',
    },
    {
      id: 'nat-vg1-1-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor genetisk mangfold er viktig for en arts overlevelse.',
      solution: 'Genetisk mangfold gir en art varierte egenskaper som gjør den mer tilpasningsdyktig til endringer i miljøet. Hvis alle individer er genetisk like, kan én sykdom eller miljøendring ramme alle. Med høyt genetisk mangfold vil noen individer sannsynligvis ha egenskaper som gjør dem motstandsdyktige. Eksempel: En populasjon med variert genetikk vil lettere kunne tilpasse seg klimaendringer fordi noen individer kan tåle varmere eller tørrere forhold.',
    },
    {
      id: 'nat-vg1-1-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den største trusselen mot biologisk mangfold globalt?',
      options: [
        { id: 'a', text: 'Habitatødeleggelse', isCorrect: true },
        { id: 'b', text: 'Klimaendringer', isCorrect: false },
        { id: 'c', text: 'Forurensning', isCorrect: false },
        { id: 'd', text: 'Overjakt', isCorrect: false },
      ],
      solution: 'Habitatødeleggelse (tap og fragmentering av leveområder) er den største trusselen mot biologisk mangfold globalt. Når skoger hogges, våtmarker dreneres og områder bygges ut, mister arter sine leveområder. Klimaendringer er en voksende trussel, men habitatødeleggelse står fortsatt for flest artsutryddelser.',
    },
    {
      id: 'nat-vg1-1-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er en endemisk art, og hvorfor er slike arter ofte ekstra sårbare?',
      solution: 'En endemisk art er en art som kun finnes i ett avgrenset geografisk område. Eksempler er lemurer på Madagaskar og kiwi i New Zealand. Disse artene er ekstra sårbare fordi: 1) Hele artens populasjon finnes på ett sted - en lokal katastrofe kan utrydde arten. 2) De har ofte spesialiserte krav til habitat. 3) De har ofte evolvert uten predatorer og mangler forsvar mot nye trusler. 4) Små populasjoner har lavt genetisk mangfold.',
    },
    {
      id: 'nat-vg1-1-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv tre økosystemtjenester og forklar hvordan tap av biologisk mangfold kan påvirke disse.',
      solution: '1) **Pollinering**: Bier og andre pollinatorer er nødvendige for frukt- og grøntproduksjon. Nedgang i pollinator-populasjoner truer matproduksjon. 2) **Vannrensing**: Våtmarker og vegetasjon filtrerer vann naturlig. Ødeleggelse av våtmarker fører til dårligere vannkvalitet og behov for dyr renseteknologi. 3) **Karbonlagring**: Skog og myr lagrer enorme mengder karbon. Når disse økosystemene ødelegges, frigjøres karbon som forsterker klimaendringene. Generelt: Redusert biologisk mangfold svekker økosystemenes evne til å levere disse tjenestene.',
    },
    {
      id: 'nat-vg1-1-3-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er formålet med en rødliste?',
      options: [
        { id: 'a', text: 'Å gi oversikt over arter som er truet av utryddelse', isCorrect: true },
        { id: 'b', text: 'Å liste opp arter som er skadelige for mennesker', isCorrect: false },
        { id: 'c', text: 'Å registrere alle arter i et land', isCorrect: false },
        { id: 'd', text: 'Å rangere arter etter størrelse', isCorrect: false },
      ],
      solution: 'Rødlisten er en oversikt over arter som er truet av utryddelse. Den kategoriserer arter etter grad av trussel (kritisk truet, sterkt truet, sårbar osv.) og er et viktig verktøy for naturforvaltning og prioritering av bevaringstiltak.',
    },
  ],
};

// ============================================================================
// Kapittel 1.4: Naturtyper i Norge
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_1_4: TextbookChapter = {
  id: 'naturbruk-vg1-1-4',
  courseId: 'naturbruk-vg1',
  chapterNumber: '1.4',
  title: 'Naturtyper i Norge',
  description: 'En oversikt over Norges viktigste naturtyper, fra kyst til høyfjell, og deres karakteristiske arter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive hovedtyper av norske økosystemer',
    'forklare sammenhengen mellom klimasoner og vegetasjonsbelter',
    'identifisere karakteristiske arter for ulike naturtyper',
    'vurdere verdien av ulike naturtyper',
  ],
  content: [
    {
      id: 'nat-vg1-1-4-intro',
      type: 'text',
      content: `# Naturtyper i Norge

Norge har et stort mangfold av naturtyper, fra dype fjorder og kystlandskap i vest til vidstrakte skoger i øst og dramatiske høyfjellsområder i nord. Denne variasjonen skyldes:

- Lang kystlinje (over 100 000 km med øyer)
- Stor høydeforskjell (0-2469 moh.)
- Varierende klima fra sør til nord
- Ulik berggrunn og jordsmonn

Naturtypen på et sted bestemmes av klima, topografi, berggrunn og menneskelig påvirkning.`,
    },
    {
      id: 'nat-vg1-1-4-def-vegetasjonsbelte',
      type: 'definition',
      title: 'Vegetasjonsbelte',
      content: 'Vegetasjonsbelter er horisontale soner med karakteristisk vegetasjon som følger klimagradienter. I Norge går vegetasjonsbeltene fra lavalpin sone (fjellbjørkeskog) via mellomalpin sone (lav vegetasjon) til høyalpin sone (snø og is). Tilsvarende belter finnes fra kyst til innland og fra sør til nord.',
    },
    {
      id: 'nat-vg1-1-4-skog',
      type: 'text',
      content: `## Skogtyper i Norge

Skog dekker ca. 37 % av Norges landareal og er vårt vanligste økosystem.

### Barskog (boreal skog)
- **Dominerende treslag**: Gran og furu
- **Utbredelse**: Østlandet, Trøndelag, indre strøk
- **Karakteristiske arter**: Elg, storfugl, tretåspett, lav
- **Jordbunn**: Ofte sur, næringsfattig (podsol)

### Lauvskog
- **Dominerende treslag**: Bjørk, or, osp, eik
- **Utbredelse**: Vestlandet, Nord-Norge, fjellnære områder
- **Særlig verdifull**: Edellauvskog med eik, bøk, lind, ask
- **Karakteristiske arter**: Hvitryggspett, hasselmus, mange sopp

### Fjellbjørkeskog
- **Overgang mellom barskog og snaufjell**
- **Dominerende treslag**: Fjellbjørk
- **Utbredelse**: 800-1200 moh. i sør, ned mot havnivå i nord
- **Karakteristiske arter**: Rype, fjellvåk, krekling`,
    },
    {
      id: 'nat-vg1-1-4-def-boreale',
      type: 'definition',
      title: 'Boreal sone',
      content: 'Den boreale sonen er det nordlige barskogbeltet som strekker seg rundt hele den nordlige halvkule gjennom Skandinavia, Russland, Canada og Alaska. Det er verdens største skogøkosystem og karakteriseres av lange, kalde vintre og korte, varme somre.',
    },
    {
      id: 'nat-vg1-1-4-vaatmark',
      type: 'text',
      content: `## Våtmarker

Våtmarker er områder der vannet står høyt i grunnen store deler av året.

### Myr
- **Typer**: Torvmyr (nedbørsmyr), jordvannsmyr (rikmyr)
- **Utbredelse**: Ca. 10 % av Norges areal
- **Karakteristiske arter**: Soldogg, molte, trane, enkeltbekkasin
- **Betydning**: Viktig karbonlager, flomdemping, vannrensing

### Ferskvann
- **Innsjøer**: Ca. 450 000 innsjøer i Norge
- **Elver og bekker**: Svært variert fiskefauna
- **Karakteristiske arter**: Ørret, laks, bever, oter, fossekall
- **Truet av**: Sur nedbør, eutrofiering, regulering

### Strandenger og brakkvannsdeltaer
- Overgang mellom land og saltvann
- Viktige rasteplasser for trekkfugler
- Truet av utbygging og gjenvekst`,
    },
    {
      id: 'nat-vg1-1-4-fjell',
      type: 'text',
      content: `## Fjell og alpine områder

Norge har store fjellområder med ca. 40 % av arealet over tregrensen.

### Lavalpine sone
- Like over tregrensen
- Vier, dvergbjørk, lyng
- Rype, lemen, rein

### Mellomalpine sone
- Spredt vegetasjon
- Gress, starr, mose
- Snøugle, fjellrev

### Høyalpine sone
- Over 1500-1800 moh.
- Bare stein, lav og is
- Svært få arter

### Karakteristiske fjellarter
- **Villrein**: Norge har 90 % av Europas villrein
- **Fjellrev**: Kritisk truet, under 200 individer
- **Jerv**: Truet, viktig åtseleter`,
    },
    {
      id: 'nat-vg1-1-4-def-tregrense',
      type: 'definition',
      title: 'Tregrensen',
      content: 'Tregrensen er høyden der sammenhengende skog opphører. I Sør-Norge ligger tregrensen på ca. 1000-1200 moh., mens den i Nord-Norge kan gå helt ned til havnivå. Over tregrensen finner vi snaufjell med lav, gress og dvergbusker.',
    },
    {
      id: 'nat-vg1-1-4-kyst',
      type: 'text',
      content: `## Kyst og marine områder

Norge har en av verdens lengste kystlinjer med stort mangfold.

### Kysten
- **Strandberg og klipper**: Rugende sjøfugl
- **Sandstrender og sanddyner**: Sjeldne planter
- **Kystlynghei**: Kulturlandskap truet av gjengroing
- **Tareskoger**: Ekstremt artsrike "regnskoger i havet"

### Marine økosystemer
- **Fjorder**: Dype, beskyttede bassenger
- **Korallrev**: Lophelia-rev langs kysten
- **Åpent hav**: Plankton, fisk, sjøpattedyr

### Karakteristiske kystarter
- Lundefugl, skarv, havørn
- Steinkobbe, nise, spekkhoggere
- Torsk, sei, makrell`,
    },
    {
      id: 'nat-vg1-1-4-def-kultlandskap',
      type: 'definition',
      title: 'Kulturlandskap',
      content: 'Kulturlandskap er naturområder som er formet av menneskers bruk over lang tid. Eksempler er slåtteenger, kystlynghei og seterlandskap. Disse naturtypene har ofte høyt biologisk mangfold, men mange er truet fordi tradisjonell bruk opphører.',
    },
    {
      id: 'nat-vg1-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Vegetasjonsbelter i norske fjell',
      problem: 'Beskriv de ulike vegetasjonsbeltene du vil møte hvis du vandrer fra lavlandet til toppen av et fjell i Sør-Norge.',
      solution: `**Vegetasjonsbelter fra dal til topp:**

**0-800 moh.: Barskogbeltet**
- Tett skog med gran og furu
- Rikt dyre- og fugleliv
- Blåbær, tyttebær, mose

**800-1000 moh.: Fjellbjørkeskogen (subalpin sone)**
- Bjørk blir dominerende
- Trærne blir gradvis lavere og mer krokete
- Krekling, blåbær, einer

**1000-1200 moh.: Lavalpin sone**
- Over skoggrensen
- Vier, dvergbjørk, lyng
- Fjellrype, lemen

**1200-1500 moh.: Mellomalpin sone**
- Spredt vegetasjon
- Gress, starr, lav, mose
- Hardføre arter

**Over 1500 moh.: Høyalpin sone**
- Nesten bare stein og is
- Snøleier smelter sent
- Svært få arter klarer seg her

**Merk:** Høyden på grensene varierer med breddegrad og lokal topografi.`,
    },
    {
      id: 'nat-vg1-1-4-tip',
      type: 'tip',
      title: 'Norges ansvar',
      content: 'Norge har et spesielt ansvar for noen naturtyper som er sjeldne globalt men vanlige hos oss. Dette inkluderer fjordlandskap, kaldtvannskorallrev, fjellområder og boreal regnskog. Disse naturtypene bør vi ta ekstra godt vare på fordi få andre land har dem.',
    },
    {
      id: 'nat-vg1-1-4-example-2',
      type: 'example',
      title: 'Eksempel: Truede naturtyper i Norge',
      problem: 'Nevn tre truede naturtyper i Norge og forklar hvorfor de er truet.',
      solution: `**Truede naturtyper i Norge:**

**1. Kystlynghei**
- Åpen lynghei langs kysten
- Truet av: Gjengroing når beiting og brenning opphører
- Kulturlandskap som krever aktiv skjøtsel
- Viktig for mange rødlistede insekter

**2. Rik edellauvskog**
- Skog med eik, ask, lind, bøk
- Truet av: Hogst, utbygging, mangel på skjøtsel
- Mange arter av lav, mose, sopp avhenger av gamle trær
- Spesielt verdifullt for biologisk mangfold

**3. Intakte høgmyrer**
- Store torvmyrer med uforstyrret hydrologi
- Truet av: Grøfting, torvuttak, utbygging
- Viktige karbonlagre (lagrer dobbelt så mye karbon som skog)
- Bruker tusenvis av år på å dannes

**Tiltak:** Vern, restaurering og aktiv skjøtsel.`,
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-1-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den vanligste naturtypen i Norge målt i areal?',
      options: [
        { id: 'a', text: 'Skog', isCorrect: true },
        { id: 'b', text: 'Fjell', isCorrect: false },
        { id: 'c', text: 'Myr', isCorrect: false },
        { id: 'd', text: 'Innsjøer', isCorrect: false },
      ],
      solution: 'Skog dekker ca. 37 % av Norges landareal og er dermed den vanligste naturtypen. Fjellområder over tregrensen dekker ca. 40 %, men dette inkluderer mye snaufjell med begrenset biologisk produktivitet.',
    },
    {
      id: 'nat-vg1-1-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hovedforskjellene mellom barskog og lauvskog som naturtyper.',
      solution: 'Barskog (gran/furu) har eviggrønne nåletrær, sur jord med tykt strølag, relativt lite lys ned til bakken, og arter tilpasset skyggefulle forhold. Lauvskog har trær som feller bladene, mer næringsrik jord (bladene brytes raskere ned), mer lys om våren før løvsprett, og ofte høyere artsmangfold. Barskog dominerer i innlandet og Østlandet, mens lauvskog er vanligere på Vestlandet og i Nord-Norge.',
    },
    {
      id: 'nat-vg1-1-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er et kulturlandskap?',
      options: [
        { id: 'a', text: 'Natur formet av menneskers bruk over lang tid', isCorrect: true },
        { id: 'b', text: 'Parker og hager i byer', isCorrect: false },
        { id: 'c', text: 'Områder med historiske bygninger', isCorrect: false },
        { id: 'd', text: 'Naturreservater uten mennesker', isCorrect: false },
      ],
      solution: 'Kulturlandskap er naturområder som er formet gjennom generasjoners bruk, som beiting, slått, brenning osv. Eksempler er slåtteenger, kystlynghei og seterlandskap. Disse områdene har ofte høyt artsmangfold og er truet når tradisjonell bruk opphører.',
    },
    {
      id: 'nat-vg1-1-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva tregrensen er og nevn faktorer som påvirker hvor høyt den ligger.',
      solution: 'Tregrensen er høyden der sammenhengende skog opphører og går over til snaufjell. Faktorer som påvirker tregrensen: 1) Breddegrad - lavere mot nord. 2) Lokal topografi - høyere på solvendte skråninger. 3) Vindeksponering - lavere i vindutsatte områder. 4) Snødekke - påvirker lengden på vekstsesongen. 5) Jordsmonn og berggrunn. I Sør-Norge ligger tregrensen på ca. 1000-1200 moh., mens den i Nord-Norge kan gå ned mot havnivå.',
    },
    {
      id: 'nat-vg1-1-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor myr er en viktig naturtype for klimaet, og hva som skjer hvis myr dreneres.',
      solution: 'Myr er dannet over tusenvis av år ved at dødt plantemateriale ikke brytes helt ned i det våte, oksygenfattige miljøet. Dette gjør at karbon lagres i torven. Norske myrer lagrer omtrent like mye karbon som all norsk skog. Når myr dreneres: 1) Oksygen slipper til og nedbrytningen øker kraftig. 2) Lagret karbon frigjøres som CO2. 3) Myra går fra å være et karbonlager til en karbonkilde. 4) Tap av habitat for myrarter. Derfor er bevaring av myr et viktig klimatiltak.',
    },
    {
      id: 'nat-vg1-1-4-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken naturtype kalles "regnskog i havet"?',
      options: [
        { id: 'a', text: 'Tareskog', isCorrect: true },
        { id: 'b', text: 'Korallrev', isCorrect: false },
        { id: 'c', text: 'Fjordbunn', isCorrect: false },
        { id: 'd', text: 'Strandeng', isCorrect: false },
      ],
      solution: 'Tareskog kalles ofte "regnskog i havet" på grunn av det enorme artsmangfoldet. Taren fungerer som trærne i en skog og gir habitat for hundrevis av arter av fisk, krepsdyr, snegler, børstemark og alger. Norge har noen av verdens største og mest produktive tareskoger.',
    },
  ],
};

// ============================================================================
// Kapittel 1.5: Kretsløp i naturen
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_1_5: TextbookChapter = {
  id: 'naturbruk-vg1-1-5',
  courseId: 'naturbruk-vg1',
  chapterNumber: '1.5',
  title: 'Kretsløp i naturen',
  description: 'De viktigste biogeokjemiske kretsløpene: karbon, nitrogen, vann og fosfor.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive karbonkretsløpet og dets betydning for klimaet',
    'forklare nitrogenkretsløpet og næringsstoffenes rolle',
    'gjøre rede for vannets kretsløp',
    'vurdere hvordan menneskelig aktivitet påvirker kretsløpene',
  ],
  content: [
    {
      id: 'nat-vg1-1-5-intro',
      type: 'text',
      content: `# Kretsløp i naturen

I motsetning til energi, som flyter gjennom økosystemer i én retning (fra solen, gjennom næringskjeder, og ut som varme), sirkulerer næringsstoffer i kretsløp. De samme atomene brukes om og om igjen.

## Biogeokjemiske kretsløp

Kretsløpene kalles biogeokjemiske fordi de involverer:
- **Bio**: Levende organismer
- **Geo**: Geologiske prosesser (jordsmonn, bergarter, hav)
- **Kjemiske**: Kjemiske reaksjoner

De viktigste kretsløpene er karbon-, nitrogen-, vann- og fosforkretsløpet.`,
    },
    {
      id: 'nat-vg1-1-5-def-kretsløp',
      type: 'definition',
      title: 'Biogeokjemisk kretsløp',
      content: 'Et biogeokjemisk kretsløp beskriver hvordan et grunnstoff eller en kjemisk forbindelse beveger seg mellom levende organismer (biosfæren), atmosfæren, hydrosfæren (vann) og geosfæren (jordskorpen). I kretsløpet resirkuleres stoffene kontinuerlig.',
    },
    {
      id: 'nat-vg1-1-5-karbon',
      type: 'text',
      content: `## Karbonkretsløpet

Karbon er byggesteinen i alle organiske molekyler og sirkulerer mellom atmosfæren, biosfæren, havet og jordskorpen.

### Karbon i atmosfæren
- Hovedsakelig som CO2 (karbondioksid)
- Utgjør ca. 0,04 % av atmosfæren
- Drivhuseffekt holder jorda varm

### Karbon tas opp gjennom:
- **Fotosyntese**: Planter og alger tar opp CO2 og bygger inn karbon i organiske molekyler
- **Oppløsning i hav**: CO2 løser seg i havvann

### Karbon frigjøres gjennom:
- **Celleånding**: Alle organismer puster ut CO2
- **Forbrenning**: Brenning av organisk materiale
- **Nedbryting**: Dødt materiale brytes ned

### Langsiktige karbonlagre
- Fossilt brensel (olje, kull, gass)
- Havbunnsedimenter
- Torv og permafrost`,
    },
    {
      id: 'nat-vg1-1-5-def-karbonsyklus',
      type: 'definition',
      title: 'Fotosyntese og celleånding',
      content: 'Fotosyntese og celleånding er motsatte prosesser som driver karbonkretsløpet. Ved fotosyntese: 6CO2 + 6H2O + lys -> C6H12O6 + 6O2. Ved celleånding: C6H12O6 + 6O2 -> 6CO2 + 6H2O + energi. Fotosyntese tar opp karbon, celleånding frigjør det.',
    },
    {
      id: 'nat-vg1-1-5-nitrogen',
      type: 'text',
      content: `## Nitrogenkretsløpet

Nitrogen er viktig for proteiner og DNA, men selv om 78 % av atmosfæren er nitrogen (N2), kan de fleste organismer ikke bruke denne formen direkte.

### Nitrogenbinding
- **Biologisk**: Nitrogenfikserende bakterier (i jord og røtter av belgvekster) omdanner N2 til ammonium (NH4+)
- **Industriell**: Gjødsel (Haber-Bosch-prosessen)
- **Atmosfærisk**: Lyn omdanner noe N2

### Nitrogen i jorda
1. **Ammonifikasjon**: Nedbrytere omdanner organisk nitrogen til ammonium
2. **Nitrifikasjon**: Bakterier omdanner ammonium til nitrat (NO3-)
3. **Opptak**: Planter tar opp ammonium og nitrat

### Denitrifikasjon
- Bakterier omdanner nitrat tilbake til N2
- Skjer i oksygenfattige miljøer (våtmarker)
- Fullfører kretsløpet`,
    },
    {
      id: 'nat-vg1-1-5-def-nitrogen',
      type: 'definition',
      title: 'Nitrogenfiksering',
      content: 'Nitrogenfiksering er prosessen der atmosfærisk nitrogen (N2) omdannes til former som planter kan ta opp, som ammonium (NH4+). Dette utføres av spesialiserte bakterier, inkludert rhizobium som lever i symbiose med belgvekster (erter, bønner, kløver).',
    },
    {
      id: 'nat-vg1-1-5-vann',
      type: 'text',
      content: `## Vannkretsløpet

Vann sirkulerer kontinuerlig mellom hav, atmosfære, land og levende organismer.

### Hovedprosessene
1. **Fordamping (evaporasjon)**: Vann fordamper fra hav, innsjøer og jord
2. **Transpirasjon**: Vann fordamper gjennom bladene på planter
3. **Kondensasjon**: Vanndamp kondenserer til skyer
4. **Nedbør**: Vann faller som regn, snø eller hagl
5. **Avrenning**: Vann renner tilbake til havet via elver og grunnvann

### Vannets fordeling på jorda
- 97 % saltvann i havene
- 2 % is og snø
- 1 % ferskvann (grunnvann, innsjøer, elver, atmosfære)

### Vannets betydning
- Livsnødvendig for alle organismer
- Transporterer næringsstoffer
- Regulerer temperatur
- Former landskapet`,
    },
    {
      id: 'nat-vg1-1-5-def-eutrofiering',
      type: 'definition',
      title: 'Eutrofiering',
      content: 'Eutrofiering er overgjødsling av vannforekomster med næringsstoffer, særlig nitrogen og fosfor. Dette fører til økt algevekst, som når den dør bruker opp oksygenet ved nedbrytning. Resultatet kan bli oksygenmangel (hypoksi) og død for fisk og bunndyr.',
    },
    {
      id: 'nat-vg1-1-5-paavirkninger',
      type: 'text',
      content: `## Menneskets påvirkning på kretsløpene

### Karbonkretsløpet
- **Fossilt brensel**: Frigjør karbon som har vært lagret i millioner av år
- **Avskoging**: Reduserer karbonopptak
- **Resultat**: Økt CO2 i atmosfæren, klimaendringer

### Nitrogenkretsløpet
- **Kunstgjødsel**: Mer enn dobler naturlig nitrogenfiksering
- **Avrenning**: Overgjødsling av vassdrag og hav
- **Resultat**: Eutrofiering, døde soner i havet

### Vannkretsløpet
- **Urbanisering**: Mer avrenning, mindre infiltrasjon
- **Regulering**: Demninger endrer naturlig vannføring
- **Resultat**: Endret hydrologisk regime, habitattap`,
    },
    {
      id: 'nat-vg1-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Karbonets vei gjennom naturen',
      problem: 'Beskriv veien et karbonatom kan ta fra atmosfæren, gjennom et økosystem, og tilbake til atmosfæren.',
      solution: `**Karbonatomets reise:**

1. **Atmosfæren**: Karbonatomet er del av et CO2-molekyl i luften

2. **Fotosyntese**: En bjørk tar opp CO2 og bygger karbonet inn i et glukosemolekyl
   - 6CO2 + 6H2O + lys -> C6H12O6 + 6O2

3. **I planten**: Glukosen brukes til å bygge cellulose i et blad

4. **Konsument**: En larve spiser bladet - karbonet blir del av larvens kropp

5. **Predator**: En meise spiser larven - karbonet bygges inn i meisens fjær

6. **Død**: Meisen dør og faller til bakken

7. **Nedbrytning**: Sopp og bakterier bryter ned meisen
   - C6H12O6 + 6O2 -> 6CO2 + 6H2O + energi

8. **Tilbake til atmosfæren**: CO2 frigjøres ved celleånding

**Total tid**: Fra dager til tusenvis av år, avhengig av om karbonet lagres i jord, torv eller fossiler.`,
    },
    {
      id: 'nat-vg1-1-5-example-2',
      type: 'example',
      title: 'Eksempel: Belgvekster og nitrogen',
      problem: 'Forklar hvorfor bønder tradisjonelt har dyrket belgvekster (erter, bønner) i vekselbruk med andre avlinger.',
      solution: `**Belgvekster og nitrogenfiksering:**

Belgvekster (erter, bønner, kløver) har en unik evne:

**Symbiose med bakterier:**
- Rhizobium-bakterier lever i knoller på røttene
- Bakteriene fikserer nitrogen fra luften
- De omdanner N2 til ammonium som planten kan bruke
- Til gjengjeld får bakteriene sukker fra planten

**Fordeler i jordbruket:**
1. Belgvekster trenger ikke nitrogengjødsel
2. Etter høsting frigjøres nitrogen når røttene brytes ned
3. Neste avling (f.eks. korn) får nytte av dette

**Tradisjonelt vekselbruk:**
- År 1: Korn (bruker nitrogen)
- År 2: Belgvekster (tilfører nitrogen)
- År 3: Rotfrukter
- Syklus gjentas

Dette systemet vedlikeholder jordens fruktbarhet uten kunstgjødsel og er et eksempel på bærekraftig jordbruk.`,
    },
    {
      id: 'nat-vg1-1-5-tip',
      type: 'tip',
      title: 'Kretsløp vs. energistrøm',
      content: 'Husk forskjellen: Næringsstoffer (karbon, nitrogen) sirkulerer i KRETSLØP - de samme atomene brukes om igjen. Energi derimot STRØMMER gjennom økosystemet i én retning - fra solen, via fotosyntese og næringskjeder, og ut som varme. Energi kan ikke resirkuleres.',
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-1-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken prosess fjerner CO2 fra atmosfæren?',
      options: [
        { id: 'a', text: 'Fotosyntese', isCorrect: true },
        { id: 'b', text: 'Celleånding', isCorrect: false },
        { id: 'c', text: 'Forbrenning', isCorrect: false },
        { id: 'd', text: 'Nedbryting', isCorrect: false },
      ],
      solution: 'Fotosyntese tar opp CO2 fra atmosfæren og bygger karbonet inn i organiske molekyler. De andre prosessene (celleånding, forbrenning, nedbryting) frigjør CO2 til atmosfæren.',
    },
    {
      id: 'nat-vg1-1-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor de fleste planter ikke kan utnytte nitrogen direkte fra luften, selv om luften består av 78 % nitrogen.',
      solution: 'Nitrogengas (N2) i atmosfæren har en svært sterk trippelbinding mellom nitrogenatomene. Planter mangler enzymer som kan bryte denne bindingen. Derfor må nitrogen først omdannes (fikseres) til andre former som ammonium (NH4+) eller nitrat (NO3-) før planter kan ta det opp. Denne fikseringen utføres av spesialiserte bakterier eller skjer industrielt ved gjødselproduksjon.',
    },
    {
      id: 'nat-vg1-1-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kalles det når overgjødsling fører til oksygenmangel i vann?',
      options: [
        { id: 'a', text: 'Eutrofiering', isCorrect: true },
        { id: 'b', text: 'Nitrogenfiksering', isCorrect: false },
        { id: 'c', text: 'Denitrifikasjon', isCorrect: false },
        { id: 'd', text: 'Fotosyntese', isCorrect: false },
      ],
      solution: 'Eutrofiering er prosessen der overgjødsling (for mye nitrogen og fosfor) fører til økt algevekst. Når algene dør og brytes ned, brukes oksygenet i vannet opp, noe som kan føre til fiskedød og døde bunnområder.',
    },
    {
      id: 'nat-vg1-1-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre hovedprosessene i vannkretsløpet: fordamping, kondensasjon og nedbør.',
      solution: 'Fordamping (evaporasjon): Vann går over fra flytende til gassform og stiger opp i atmosfæren. Skjer fra havoverflaten, innsjøer, elver og jord. Transpirasjon fra planter bidrar også. Kondensasjon: Vanndamp avkjøles i høyden og går tilbake til flytende form. Danner vanndråper som utgjør skyer. Nedbør: Når vanndråpene blir store nok, faller de ned som regn, snø eller hagl. Vannet renner tilbake til havet via elver eller infiltrerer grunnen.',
    },
    {
      id: 'nat-vg1-1-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan forbrenning av fossilt brensel påvirker karbonkretsløpet og hvorfor dette fører til klimaendringer.',
      solution: 'Fossilt brensel (kull, olje, gass) er lagret solenergi fra organismer som levde for millioner av år siden. Karbonet ble tatt ut av atmosfæren gjennom fotosyntese og lagret i jordskorpen. Når vi forbrenner fossilt brensel, frigjøres dette karbonet som CO2 på noen tiår - mye raskere enn det ble lagret. Dette tilfører "nytt" karbon til den aktive delen av karbonkretsløpet, noe som øker CO2-konsentrasjonen i atmosfæren. CO2 er en drivhusgass som fanger varmestråling, så økt CO2 forsterker drivhuseffekten og fører til global oppvarming.',
    },
    {
      id: 'nat-vg1-1-5-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke organismer utfører nitrogenfiksering?',
      options: [
        { id: 'a', text: 'Visse bakterier', isCorrect: true },
        { id: 'b', text: 'Alle planter', isCorrect: false },
        { id: 'c', text: 'Dyr', isCorrect: false },
        { id: 'd', text: 'Sopp', isCorrect: false },
      ],
      solution: 'Bare visse bakterier kan utføre nitrogenfiksering (omdanne N2 til former planter kan bruke). De viktigste er rhizobium-bakterier som lever i symbiose med belgvekster, og cyanobakterier (blågrønnalger). Verken planter, dyr eller sopp kan fiksere nitrogen selv.',
    },
  ],
};

// ============================================================================
// Kapittel 1.6: Klimaendringer og naturbruk
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_1_6: TextbookChapter = {
  id: 'naturbruk-vg1-1-6',
  courseId: 'naturbruk-vg1',
  chapterNumber: '1.6',
  title: 'Klimaendringer og naturbruk',
  description: 'Hvordan klimaendringer påvirker norsk natur og hvordan naturbruk kan bidra til både problemet og løsningen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare årsaker til og konsekvenser av klimaendringer',
    'beskrive hvordan klimaendringer påvirker norske økosystemer',
    'vurdere naturbruks rolle i klimasammenheng',
    'drøfte klimatilpasning i naturbruk',
  ],
  content: [
    {
      id: 'nat-vg1-1-6-intro',
      type: 'text',
      content: `# Klimaendringer og naturbruk

Jordens klima er i endring. Gjennomsnittstemperaturen stiger, nedbørsmønstrene endres, og ekstremvær blir vanligere. Dette påvirker alle økosystemer og har stor betydning for naturbruk.

## Drivhuseffekten

Drivhuseffekten er en naturlig prosess som holder jorden varm nok for liv. Uten den ville gjennomsnittstemperaturen vært -18°C i stedet for +15°C.

Problemet er at menneskelig aktivitet forsterker drivhuseffekten ved å slippe ut ekstra drivhusgasser.`,
    },
    {
      id: 'nat-vg1-1-6-def-drivhuseffekt',
      type: 'definition',
      title: 'Drivhuseffekten',
      content: 'Drivhuseffekten er prosessen der atmosfæren slipper gjennom solstråling, men holder tilbake varmestråling fra jordoverflaten. Drivhusgasser (CO2, metan, lystgass, vanndamp) absorberer og re-emitterer varmestråling, noe som varmer opp atmosfæren.',
    },
    {
      id: 'nat-vg1-1-6-def-karbonfotavtrykk',
      type: 'definition',
      title: 'Karbonfotavtrykk',
      content: 'Karbonfotavtrykk er en måling av hvor mye drivhusgasser (målt i CO2-ekvivalenter) en aktivitet, et produkt eller en person forårsaker. Det brukes for å vurdere klimapåvirkning. Gjennomsnittlig karbonfotavtrykk per nordmann er ca. 8-10 tonn CO2-ekvivalenter per år.',
    },
    {
      id: 'nat-vg1-1-6-aarsaker',
      type: 'text',
      content: `## Menneskeskapte klimaendringer

### Hovedårsakene
1. **Forbrenning av fossilt brensel**
   - Kull, olje og gass frigjør lagret karbon
   - Står for ca. 75 % av menneskeskapte utslipp

2. **Arealendringer**
   - Avskoging frigjør karbon og reduserer opptak
   - Drenering av myr frigjør store karbonmengder

3. **Landbruk**
   - Husdyrhold (metan fra drøvtyggere)
   - Gjødsel (lystgass)
   - Rismark (metan)

4. **Industri**
   - Sementproduksjon
   - Metallproduksjon
   - Kjemisk industri`,
    },
    {
      id: 'nat-vg1-1-6-konsekvenser',
      type: 'text',
      content: `## Konsekvenser for norsk natur

### Allerede observert
- Varmere temperaturer (ca. 1°C økning siden 1900)
- Tidligere vår, senere høst
- Tilbakegang i breer
- Endret snøgrense
- Nye arter etablerer seg (f.eks. villsvin)

### Forventede endringer
- **Skog**: Tregrensen kryper oppover, barskogen kan øke
- **Fjell**: Fjellarter mister leveområder
- **Hav**: Varmere vann, nye fiskearter, havforsuring
- **Våtmark**: Endret vannstand, permafrost smelter

### Sårbare arter
- Fjellrev: Mister konkurransefortrinn i kulde
- Villrein: Vanskelige beiteforhold med ising
- Arktiske arter: Leveområder krymper`,
    },
    {
      id: 'nat-vg1-1-6-def-klimatilpasning',
      type: 'definition',
      title: 'Klimatilpasning',
      content: 'Klimatilpasning er tiltak for å tilpasse seg klimaendringer som allerede skjer eller kommer til å skje. For naturen handler det om å hjelpe arter og økosystemer å overleve i et endret klima, for eksempel ved å sikre korridorer for artsforflytning eller bevare genetisk variasjon.',
    },
    {
      id: 'nat-vg1-1-6-naturbruk',
      type: 'text',
      content: `## Naturbruk og klima

Naturbruk kan både forverre og motvirke klimaendringer.

### Naturbruk som klimaproblem
- **Skogbruk**: Flatehogst frigjør karbon midlertidig
- **Jordbruk**: Utslipp fra husdyr, gjødsel og maskiner
- **Torvuttak**: Frigjør tusenvis av år med lagret karbon

### Naturbruk som klimaløsning
- **Skogplanting**: Nyplantet skog tar opp CO2
- **Bærekraftig skogbruk**: Bevarer karbonlagre
- **Myrrestaurering**: Stopper karbonfrigjøring
- **Beiting**: Kan holde kulturlandskap åpne (karbonlagring i grasmark)

### Bioenergi
- Trevirke og biogass kan erstatte fossilt brensel
- Må høstes bærekraftig for å være klimanøytralt
- Debatt om effekten på kort vs. lang sikt`,
    },
    {
      id: 'nat-vg1-1-6-def-karbonbinding',
      type: 'definition',
      title: 'Karbonbinding',
      content: 'Karbonbinding er prosessen der CO2 fjernes fra atmosfæren og lagres i biologiske eller geologiske systemer. Naturlig karbonbinding skjer gjennom fotosyntese (skog, hav) og torvdannelse (myr). Økt karbonbinding er en viktig strategi for å motvirke klimaendringer.',
    },
    {
      id: 'nat-vg1-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Skog som karbonlager',
      problem: 'Forklar hvordan skog fungerer som karbonlager, og diskuter hva som skjer med karbonregnskapet ved hogst.',
      solution: `**Skog som karbonlager:**

**Hvor lagres karbonet?**
- Trærne selv (stamme, grener, røtter): ca. 50 %
- Skogsjord og humus: ca. 50 %
- Totalt: Norsk skog lagrer ca. 1 milliard tonn karbon

**Opptak og frigjøring:**
- Ung, voksende skog tar opp mest CO2
- Gammel skog er i omtrentlig balanse
- Årlig netto opptak i norsk skog: ca. 25 millioner tonn CO2

**Ved hogst:**
1. Umiddelbart: Hogstavfall brytes ned og frigjør CO2
2. Trevirke: Beholder karbon så lenge det brukes
3. Nyplanting: Ny skog tar tid på å ta opp like mye

**Karbonregnskap:**
- Trevirke til bygg: Lagrer karbon i tiår-århundrer
- Biodrivstoff/bioenergi: Frigjøres med en gang, men erstatter fossilt
- Papir: Kort levetid, raskt tilbake til atmosfæren

**Konklusjon:** Hvordan tømmeret brukes avgjør klimaeffekten.`,
    },
    {
      id: 'nat-vg1-1-6-example-2',
      type: 'example',
      title: 'Eksempel: Klimaeffekt av myrrestaurering',
      problem: 'En grøftet myr skal restaureres. Forklar de forventede klimaeffektene.',
      solution: `**Myrrestaurering og klimaeffekt:**

**Før restaurering (grøftet myr):**
- Vannet renner bort gjennom grøftene
- Oksygen trenger ned i torven
- Nedbrytning frigjør CO2
- Myra er en karbonkilde (netto utslipp)

**Etter restaurering:**
1. Grøfter tettes igjen
2. Vannstanden stiger
3. Oksygenfri tilstand gjenopprettes
4. Nedbrytningen stopper

**Forventede effekter:**
- **År 0-5**: Mulig økt metanutslipp ved oversvømmelse
- **År 5+**: CO2-utslipp reduseres kraftig
- **Langsiktig**: Myra begynner å ta opp karbon igjen

**Tilleggseffekter:**
- Habitater for myrarter gjenopprettes
- Bedre vannhusholdning i landskapet
- Flomdemping nedstrøms

**Klimagevinst:** En restaurert myr kan spare utslipp tilsvarende mange bilkjørte kilometer per hektar per år.`,
    },
    {
      id: 'nat-vg1-1-6-tip',
      type: 'tip',
      title: 'To strategier',
      content: 'Klimaarbeid har to hovedstrategier: 1) UTSLIPPSKUTT (mitigasjon) - redusere mengden drivhusgasser vi slipper ut, og 2) TILPASNING (adaptasjon) - forberede oss på endringene som uansett kommer. Begge er nødvendige. Naturbruk kan bidra til begge gjennom bærekraftig forvaltning.',
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-1-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den viktigste menneskeskapte kilden til klimagassutslipp?',
      options: [
        { id: 'a', text: 'Forbrenning av fossilt brensel', isCorrect: true },
        { id: 'b', text: 'Vulkanutbrudd', isCorrect: false },
        { id: 'c', text: 'Skogbranner', isCorrect: false },
        { id: 'd', text: 'Plantenes celleånding', isCorrect: false },
      ],
      solution: 'Forbrenning av fossilt brensel (kull, olje, gass) står for ca. 75 % av menneskeskapte klimagassutslipp. Dette frigjør karbon som har vært lagret i jordskorpen i millioner av år.',
    },
    {
      id: 'nat-vg1-1-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom drivhuseffekten som naturlig fenomen og den forsterkede drivhuseffekten.',
      solution: 'Den naturlige drivhuseffekten er livsnødvendig - den holder jordens gjennomsnittstemperatur på ca. +15°C i stedet for -18°C ved å fange varmestråling i atmosfæren. Den forsterkede drivhuseffekten er menneskeskapt og skyldes at vi slipper ut ekstra drivhusgasser (CO2, metan) gjennom forbrenning av fossilt brensel, avskoging og jordbruk. Dette forsterker den naturlige effekten og fører til global oppvarming.',
    },
    {
      id: 'nat-vg1-1-6-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan påvirker klimaendringer fjellreven i Norge?',
      options: [
        { id: 'a', text: 'Rødreven sprer seg oppover og utkonkurrerer fjellreven', isCorrect: true },
        { id: 'b', text: 'Fjellreven får mer mat', isCorrect: false },
        { id: 'c', text: 'Varmere vær gjør fjellreven sterkere', isCorrect: false },
        { id: 'd', text: 'Fjellreven påvirkes ikke av klimaendringer', isCorrect: false },
      ],
      solution: 'Når klimaet blir varmere, sprer rødreven seg til høyere områder der den utkonkurrerer den mindre fjellreven. Fjellreven er tilpasset arktiske forhold og klarer seg dårligere når vintrene blir mildere og snøforholdene endres. Dette er en av grunnene til at fjellreven er kritisk truet i Norge.',
    },
    {
      id: 'nat-vg1-1-6-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv to måter naturbruk kan bidra til å redusere klimagassutslipp.',
      solution: '1) Bærekraftig skogbruk: Holde skogen i god vekst slik at den tar opp CO2, og bruke trevirke til langvarige produkter som byggematerialer i stedet for energi. Trevirke i bygg lagrer karbon i tiår-århundrer. 2) Myrrestaurering: Tette grøfter i drenert myr slik at karbonfrigjøringen stopper. Intakte myrer lagrer enormt med karbon, og restaurering hindrer at dette frigjøres. Andre alternativer: Biogassproduksjon fra husdyrgjødsel, redusert metanutslipp fra drøvtyggere.',
    },
    {
      id: 'nat-vg1-1-6-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter fordeler og ulemper med å bruke skog som biodrivstoff for å erstatte fossilt brensel.',
      solution: 'Fordeler: Trevirke er fornybart (nye trær tar opp CO2), gir lokal energiproduksjon, kan redusere avhengighet av fossil import, utnytter hogstavfall. Ulemper: Frigjør CO2 umiddelbart ved forbrenning, tar tid (tiår) før nye trær har tatt opp like mye, kan føre til økt hogst og reduserte karbonlagre, risiko for at etterspørsel presser opp hogsten til uholdbare nivåer, kan konkurrere med andre bruksområder (bygg, papir). Konklusjon: Bare klimanøytralt på lang sikt og hvis skogen forvaltes bærekraftig. Kortsiktig kan det faktisk øke atmosfærens CO2-innhold.',
    },
    {
      id: 'nat-vg1-1-6-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med klimatilpasning?',
      options: [
        { id: 'a', text: 'Tiltak for å tilpasse seg klimaendringer som skjer', isCorrect: true },
        { id: 'b', text: 'Å redusere utslipp av klimagasser', isCorrect: false },
        { id: 'c', text: 'Å plante mer skog', isCorrect: false },
        { id: 'd', text: 'Å forske på klimaet', isCorrect: false },
      ],
      solution: 'Klimatilpasning (adaptasjon) handler om å tilpasse seg de klimaendringene som allerede skjer eller kommer til å skje. For naturen kan det bety å sikre at arter kan forflytte seg til nye områder, bevare genetisk mangfold, og beskytte sårbare habitater. Utslippskutt (mitigasjon) er det som handler om å redusere utslipp.',
    },
  ],
};

// ============================================================================
// Kapittel 1.7: Forvaltning av naturressurser
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_1_7: TextbookChapter = {
  id: 'naturbruk-vg1-1-7',
  courseId: 'naturbruk-vg1',
  chapterNumber: '1.7',
  title: 'Forvaltning av naturressurser',
  description: 'Prinsipper og praksis for bærekraftig forvaltning av naturressurser i Norge.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare prinsipper for bærekraftig ressursforvaltning',
    'beskrive hvordan ulike naturressurser forvaltes i Norge',
    'vurdere interessekonflikter knyttet til naturbruk',
    'drøfte vernestrategier og deres effektivitet',
  ],
  content: [
    {
      id: 'nat-vg1-1-7-intro',
      type: 'text',
      content: `# Forvaltning av naturressurser

Forvaltning handler om å ta beslutninger om hvordan naturressurser skal brukes og bevares. God forvaltning sikrer at ressursene kan brukes både nå og i fremtiden.

## Bærekraftig utvikling

Brundtlandkommisjonen definerte i 1987 bærekraftig utvikling som:

> "Utvikling som tilfredsstiller dagens behov uten å ødelegge fremtidige generasjoners muligheter til å tilfredsstille sine behov."

Dette prinsippet ligger til grunn for moderne naturforvaltning.`,
    },
    {
      id: 'nat-vg1-1-7-def-baerekraftig',
      type: 'definition',
      title: 'Bærekraftig forvaltning',
      content: 'Bærekraftig forvaltning innebærer å bruke naturressurser på en måte som dekker nåværende behov uten å redusere ressursgrunnlaget for kommende generasjoner. Det krever balanse mellom økonomiske, miljømessige og sosiale hensyn (de tre dimensjonene av bærekraft).',
    },
    {
      id: 'nat-vg1-1-7-def-msh',
      type: 'definition',
      title: 'Maksimalt bærekraftig høstingsutbytte (MSY)',
      content: 'MSY (Maximum Sustainable Yield) er den største mengden av en fornybar ressurs som kan høstes jevnlig uten at bestanden reduseres over tid. For fisk betyr det å fiske akkurat så mye at bestanden holder seg stabil. Høster man mer, synker bestanden; høster man mindre, vokser den.',
    },
    {
      id: 'nat-vg1-1-7-prinsipper',
      type: 'text',
      content: `## Prinsipper for naturforvaltning

### Føre-var-prinsippet
- Ved tvil om miljøkonsekvenser, velg forsiktig handling
- Bevisbyrden ligger på den som vil gjennomføre tiltak
- Særlig viktig når skader kan være irreversible

### Forurenseren betaler
- Den som forurenser skal dekke kostnadene
- Skaper insentiver til å redusere forurensning
- Viktig for rettferdig fordeling av kostnader

### Kunnskapsbasert forvaltning
- Beslutninger skal bygge på beste tilgjengelige vitenskap
- Overvåking av arter og økosystemer
- Forskning på økologiske sammenhenger

### Økosystembasert forvaltning
- Se hele økosystemet i sammenheng
- Ikke bare forvalte enkeltarter isolert
- Ta hensyn til samspill mellom arter og miljø`,
    },
    {
      id: 'nat-vg1-1-7-vilt',
      type: 'text',
      content: `## Viltforvaltning

### Jaktbare arter
Norge har over 70 jaktbare viltarter som forvaltes gjennom:
- Jakttider (bestemmer når det er lov å jakte)
- Kvoter (begrenser antall dyr som kan felles)
- Fellingsavgifter (gir inntekter til forvaltning)

### Eksempel: Elgforvaltning
- Kommunene tildeler kvoter basert på bestandsestimater
- Målet er å holde bestanden på et ønsket nivå
- Jegerne rapporterer fellinger
- Beiteskader på skog må balanseres mot jaktverdi

### Rovviltforvaltning
- Ulv, jerv, gaupe, bjørn og kongeørn er fredet
- Bestandsmål satt av Stortinget
- Skadefelling ved tap av husdyr
- Store interessekonflikter mellom vern og beitenæring`,
    },
    {
      id: 'nat-vg1-1-7-def-kvote',
      type: 'definition',
      title: 'Kvote',
      content: 'En kvote er en fastsatt mengde av en ressurs som kan høstes i en gitt periode. Kvoter brukes for å sikre bærekraftig høsting av vilt, fisk og andre ressurser. Kvoten settes basert på bestandsstørrelse, reproduksjonsrate og forvaltningsmål.',
    },
    {
      id: 'nat-vg1-1-7-fisk',
      type: 'text',
      content: `## Fiskeriforvaltning

### Havressursloven
- Regulerer høsting av marine ressurser
- Kvoter basert på vitenskapelige råd fra Havforskningsinstituttet
- Formålet er bærekraftig utnyttelse

### Utfordringer
- **Overfiske**: Historisk problem, noen bestander fortsatt svake
- **Ulovlig fiske**: Vanskelig å kontrollere på åpent hav
- **Bifangst**: Utilsiktet fangst av andre arter
- **Bunnpåvirkning**: Trålere kan skade havbunnen

### Suksesshistorier
- Norsk-arktisk torsk: God forvaltning ga sterk bestand
- Norsk vårgytende sild: Gjenhenting etter kollaps på 1960-tallet`,
    },
    {
      id: 'nat-vg1-1-7-skog',
      type: 'text',
      content: `## Skogforvaltning

### Skogloven
- Regulerer hogst og skogbehandling
- Krav om foryngelse etter hogst
- Miljøhensyn som kantsoner og nøkkelbiotoper

### Sertifiseringsordninger
- **PEFC** og **FSC**: Internasjonale standarder
- Dokumenterer bærekraftig skogbruk
- Krav fra marked og forbrukere

### Utfordringer
- Balansere tømmerproduksjon med biologisk mangfold
- Bevare gammelskog med spesielle arter
- Klimaeffekter av ulike hogstformer`,
    },
    {
      id: 'nat-vg1-1-7-vern',
      type: 'text',
      content: `## Områdevern

### Verneformer i Norge
- **Nasjonalparker**: Strengt vern, store områder
- **Naturreservater**: Streng beskyttelse av spesielle naturverdier
- **Landskapsvernområder**: Tillater tradisjonell bruk
- **Marine verneområder**: Beskytter havet

### Vernestatus i Norge
- Ca. 17 % av Norges landareal er vernet
- 47 nasjonalparker
- Mål om 10 % marint vern (ikke nådd ennå)

### Debatt om vern
- Vern vs. bruk: Konflikt med næringsinteresser
- Lokalbefolkningens rettigheter
- Er vern nok, eller trengs aktiv skjøtsel?`,
    },
    {
      id: 'nat-vg1-1-7-def-nasjonalpark',
      type: 'definition',
      title: 'Nasjonalpark',
      content: 'En nasjonalpark er et større naturområde med uberørt eller i det vesentlige uberørt natur. Nasjonalparker har streng beskyttelse der inngrep som veier, kraftlinjer og bygninger normalt ikke er tillatt. Friluftsliv med liten påvirkning er tillatt.',
    },
    {
      id: 'nat-vg1-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Interessekonflikt - rovdyr og beitenæring',
      problem: 'Beskriv konflikten mellom rovdyrvern og sauenæringen, og mulige tiltak for å redusere konflikten.',
      solution: `**Interessekonflikten:**

**Verneinteresser:**
- Rovdyr har egenverdi og rett til å eksistere
- Norge har internasjonale forpliktelser
- Rovdyr er en del av fungerende økosystemer

**Beitenæringsinteresser:**
- Tap av sau til rovdyr gir økonomiske tap
- Psykisk belastning for bønder
- Tradisjonell beitebruk vanskeliggjøres

**Tiltak for å redusere konflikten:**

1. **Rovdyrsikre gjerder**: Beskytter sau i innmark
2. **Tidlig nedsanking**: Ta sauene ned fra utmark før rovdyrene angriper
3. **Vokterhunder/gjeting**: Tradisjonelle metoder
4. **Rovdyrsoner**: Geografisk skille mellom beiteprioriterte og rovdyrprioriterte områder
5. **Erstatningsordninger**: Kompensasjon for tap
6. **Skadefelling**: Fjerne individer som gjør særlig stor skade

**Konklusjon:** Det finnes ingen perfekt løsning. Forvaltningen må balansere ulike hensyn og interesser.`,
    },
    {
      id: 'nat-vg1-1-7-example-2',
      type: 'example',
      title: 'Eksempel: Bærekraftig fiske',
      problem: 'Forklar hvorfor det er viktig å sette fiskekvoter basert på vitenskapelige råd, og hva som kan skje hvis man fisker for mye.',
      solution: `**Betydningen av vitenskapsbaserte kvoter:**

**Hvordan kvoter settes:**
1. Havforskningsinstituttet estimerer bestandsstørrelsen
2. Beregner hvor mye som kan fiskes bærekraftig (MSY)
3. Gir råd til myndighetene
4. Politikerne fastsetter kvotene

**Konsekvenser av overfiske:**

**Biologiske:**
- Bestanden synker under kritisk nivå
- Reproduksjonen svekkes
- Kan ta tiår å bygge opp igjen

**Eksempel: Kollapsen i sildefisket (1969):**
- Norsk vårgytende sild ble overfisket
- Bestanden kollapset fra millioner tonn til nesten null
- Tok 25 år å gjenoppbygge

**Økonomiske:**
- Kortsiktig gevinst gir langsiktig tap
- Fiskeriene må legges ned
- Hele kystsamfunn rammes

**Suksessoppskrift:**
- Lytt til vitenskapelige råd
- Sett kvoter under MSY for sikkerhetsmargin
- God kontroll med at kvotene overholdes`,
    },
    {
      id: 'nat-vg1-1-7-tip',
      type: 'tip',
      title: 'De tre dimensjonene',
      content: 'Bærekraftig forvaltning må balansere tre dimensjoner: 1) MILJØ (bevare arter og økosystemer), 2) ØKONOMI (sikre inntekt og arbeidsplasser), og 3) SOSIALE FORHOLD (rettferdighet, lokalsamfunn, kultur). God forvaltning finner løsninger som ivaretar alle tre.',
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-1-7-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med føre-var-prinsippet i naturforvaltning?',
      options: [
        { id: 'a', text: 'Ved tvil om konsekvenser, velg forsiktig handling', isCorrect: true },
        { id: 'b', text: 'Alltid forby all utnyttelse av naturen', isCorrect: false },
        { id: 'c', text: 'Vente med tiltak til skaden har skjedd', isCorrect: false },
        { id: 'd', text: 'La markedet bestemme bruken av naturressurser', isCorrect: false },
      ],
      solution: 'Føre-var-prinsippet innebærer at man ved usikkerhet om miljøkonsekvensene av en handling skal velge den forsiktige løsningen. Bevisbyrden ligger på den som vil gjennomføre tiltaket - de må vise at det er trygt, ikke motsatt.',
    },
    {
      id: 'nat-vg1-1-7-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva MSY (maksimalt bærekraftig høstingsutbytte) betyr og hvorfor det er viktig for fiskeforvaltning.',
      solution: 'MSY er den største mengden fisk som kan tas jevnlig uten at bestanden synker over tid. Det er punktet der høstingen balanserer bestandens naturlige vekst. Fisker man under MSY, vokser bestanden. Fisker man over MSY, synker bestanden og kan kollapse. MSY er viktig fordi det gir den største langsiktige fangsten - det lønner seg økonomisk å ikke overfiske. I praksis anbefales det ofte å fiske noe under MSY for sikkerhetsmargin.',
    },
    {
      id: 'nat-vg1-1-7-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor stor andel av Norges landareal er vernet?',
      options: [
        { id: 'a', text: 'Ca. 17 %', isCorrect: true },
        { id: 'b', text: 'Ca. 5 %', isCorrect: false },
        { id: 'c', text: 'Ca. 50 %', isCorrect: false },
        { id: 'd', text: 'Ca. 75 %', isCorrect: false },
      ],
      solution: 'Ca. 17 % av Norges landareal er vernet gjennom nasjonalparker, naturreservater og andre verneformer. Norge har 47 nasjonalparker. For marint vern ligger Norge etter målsettingen om 10 %.',
    },
    {
      id: 'nat-vg1-1-7-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv to ulike verneformer i Norge og forklar forskjellen mellom dem.',
      solution: 'Nasjonalpark: Store, i hovedsak uberørte naturområder med streng beskyttelse. Inngrep som veier, bygninger og kraftlinjer er normalt forbudt. Friluftsliv med liten påvirkning er tillatt. Naturreservat: Mindre områder med spesielle naturverdier som trenger streng beskyttelse. Kan være biotoper, geologiske forekomster eller områder for truede arter. Ofte strengere restriksjoner enn nasjonalparker, f.eks. begrenset ferdsel. Forskjell: Nasjonalparker er store og verner hele landskaper, naturreservater er mindre og beskytter spesifikke verdier.',
    },
    {
      id: 'nat-vg1-1-7-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter fordeler og ulemper med kvotejakt på elg sammenlignet med fritt jaktuttak.',
      solution: 'Fordeler med kvotejakt: 1) Kontrollert uttak sikrer bærekraftig bestand, 2) Kan styre kjønns- og alderssammensetning (f.eks. skåne produksjonsdyr), 3) Gir forutsigbarhet for jegere og grunneiere, 4) Muliggjør langsiktig planlegging av bestandsstørrelse. Ulemper: 1) Krever ressurser til bestandsovervåking, 2) Kan være vanskelig å sette riktige kvoter, 3) Byråkrati og administrasjon. Fritt uttak: Enklere å administrere, men risiko for overbeskatning eller at bestanden vokser ukontrollert med påfølgende skader på skog og trafikk. Konklusjon: Kvotesystemet er mer ressurskrevende men gir bedre kontroll og mer bærekraftig forvaltning.',
    },
    {
      id: 'nat-vg1-1-7-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket prinsipp sier at den som forurenser skal betale for opprydding?',
      options: [
        { id: 'a', text: 'Forurenseren betaler', isCorrect: true },
        { id: 'b', text: 'Føre-var-prinsippet', isCorrect: false },
        { id: 'c', text: 'Bærekraftsprinsippet', isCorrect: false },
        { id: 'd', text: 'Naturmangfoldprinsippet', isCorrect: false },
      ],
      solution: 'Prinsippet "forurenseren betaler" (polluter pays principle) innebærer at den som forårsaker forurensning eller miljøskade skal dekke kostnadene ved å rydde opp eller kompensere. Dette skaper økonomiske insentiver til å unngå forurensning.',
    },
  ],
};

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const NATURBRUK_VG1_KAP1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NATURBRUK_VG1_1_1,
  CHAPTER_NATURBRUK_VG1_1_2,
  CHAPTER_NATURBRUK_VG1_1_3,
  CHAPTER_NATURBRUK_VG1_1_4,
  CHAPTER_NATURBRUK_VG1_1_5,
  CHAPTER_NATURBRUK_VG1_1_6,
  CHAPTER_NATURBRUK_VG1_1_7,
];

export function getNaturbrukVg1Kap1Chapter(chapterId: string): TextbookChapter | undefined {
  return NATURBRUK_VG1_KAP1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
