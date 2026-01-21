/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Rettslære 1 VG2
 *
 * Dekker LK20-kompetansemål for Rettslære 1 (REL01-01)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Rettssystemets oppbygging
// ============================================================================

export const CHAPTER_RETTSLAERE_1_1: TextbookChapter = {
  id: 'rettslaere-1-1',
  courseId: 'rettslaere-1',
  chapterNumber: '1',
  title: 'Rettssystemets oppbygging',
  description: 'Norges rettssystem, domstolene og rettsprosessen.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for rettssystemets oppbygging i Norge',
    'forklare domstolenes rolle og funksjon',
    'beskrive forskjellen mellom sivile saker og straffesaker',
  ],
  content: [
    {
      id: 'rett1-1-intro',
      type: 'text',
      content: `# Rettssystemets oppbygging

Norge er en rettsstat der lover vedtas av Stortinget og håndheves av uavhengige domstoler.

## Maktfordelingsprinsippet

- **Stortinget**: Lovgivende makt
- **Regjeringen**: Utøvende makt
- **Domstolene**: Dømmende makt`,
    },
    {
      id: 'rett1-1-def-rettsstat',
      type: 'definition',
      title: 'Rettsstat',
      content: 'En rettsstat er et samfunn der offentlig myndighet er bundet av lover vedtatt på demokratisk vis. Ingen står over loven, og borgerne har beskyttelse mot vilkårlig maktbruk.',
    },
    {
      id: 'rett1-1-domstoler',
      type: 'text',
      content: `## Domstolshierarkiet

### Første instans
- **Tingretten**: Behandler de fleste saker først
- 60 tingretter i Norge

### Andre instans
- **Lagmannsretten**: Ankedomstol
- 6 lagdømmer

### Øverste instans
- **Høyesterett**: Landets øverste domstol
- Avgjør prinsipielle spørsmål
- 20 dommere`,
    },
    {
      id: 'rett1-1-sakstyper',
      type: 'text',
      content: `## Sakstyper

### Straffesaker
- Staten mot enkeltperson
- Påtalemyndigheten (politiet/statsadvokaten) fører saken
- Domstolen avgjør skyld og straff

### Sivile saker
- Tvist mellom parter (privatpersoner, bedrifter, stat)
- Partene fører saken selv (ofte med advokat)
- Domstolen avgjør hvem som har rett`,
    },
    {
      id: 'rett1-1-def-anke',
      type: 'definition',
      title: 'Anke',
      content: 'Anke er å bringe en dom til høyere rettsinstans for ny behandling. Man kan anke over feil i lovanvendelsen, saksbehandlingen eller bevisvurderingen.',
    },
    {
      id: 'rett1-1-example',
      type: 'example',
      title: 'En straffesak gjennom rettssystemet',
      problem: 'Beskriv gangen i en straffesak fra anmeldelse til rettskraftig dom.',
      solution: `**Sakens gang:**

1. **Anmeldelse**: Politiet mottar anmeldelse
2. **Etterforskning**: Politiet samler bevis
3. **Påtaleavgjørelse**: Statsadvokaten tar ut tiltale
4. **Hovedforhandling i tingretten**: Bevis fremlegges, dom avsies
5. **Eventuell anke**: Lagmannsretten behandler saken på nytt
6. **Eventuell anke til Høyesterett**: Bare prinsipielle spørsmål
7. **Rettskraftig dom**: Når ankefristen er utløpt eller anke avvist`,
    },
  ],
  exercises: [
    {
      id: 'rett1-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken domstol er Norges øverste?',
      options: [
        { id: 'a', text: 'Høyesterett', isCorrect: true },
        { id: 'b', text: 'Lagmannsretten', isCorrect: false },
        { id: 'c', text: 'Tingretten', isCorrect: false },
        { id: 'd', text: 'Stortinget', isCorrect: false },
      ],
      solution: 'Høyesterett er landets øverste domstol og avgjør de mest prinsipielle sakene.',
    },
    {
      id: 'rett1-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom straffesaker og sivile saker.',
      solution: 'Straffesaker: Staten (ved påtalemyndigheten) mot enkeltperson som har brutt loven. Resultatet er straff. Sivile saker: Tvist mellom to parter (privatpersoner, bedrifter) om hvem som har rett. Resultatet er typisk erstatning eller pålegg.',
    },
    {
      id: 'rett1-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er maktfordelingsprinsippet?',
      options: [
        { id: 'a', text: 'At makten er delt mellom lovgivende, utøvende og dømmende myndighet', isCorrect: true },
        { id: 'b', text: 'At regjeringen har all makt', isCorrect: false },
        { id: 'c', text: 'At folket stemmer i alle saker', isCorrect: false },
        { id: 'd', text: 'At domstolene lager lover', isCorrect: false },
      ],
      solution: 'Maktfordelingsprinsippet sikrer at ingen har all makt. Stortinget lager lover, regjeringen utfører dem, og domstolene dømmer.',
    },
    {
      id: 'rett1-1-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hva menes med at domstolene er uavhengige?',
      solution: 'Domstolenes uavhengighet betyr at dommere ikke kan instrueres av politikere eller andre om hvordan de skal dømme. De skal kun følge loven og sin egen vurdering av bevisene. Dette sikrer rettferdig behandling og beskytter mot politisk maktmisbruk.',
    },
    {
      id: 'rett1-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr det å anke en dom?',
      options: [
        { id: 'a', text: 'Å bringe saken til høyere rettsinstans', isCorrect: true },
        { id: 'b', text: 'Å akseptere dommen', isCorrect: false },
        { id: 'c', text: 'Å anmelde en ny sak', isCorrect: false },
        { id: 'd', text: 'Å trekke tilbake saken', isCorrect: false },
      ],
      solution: 'Anke betyr å be en høyere domstol behandle saken på nytt, fordi man mener den første dommen er feil.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Rettskilder og lovtolkning
// ============================================================================

export const CHAPTER_RETTSLAERE_1_2: TextbookChapter = {
  id: 'rettslaere-1-2',
  courseId: 'rettslaere-1',
  chapterNumber: '2',
  title: 'Rettskilder og lovtolkning',
  description: 'Rettskildene og metoder for lovtolkning.',
  estimatedMinutes: 80,
  competenceGoals: [
    'identifisere og rangere ulike rettskilder',
    'anvende grunnleggende lovtolkning',
    'forstå forholdet mellom lov og forskrift',
  ],
  content: [
    {
      id: 'rett1-2-intro',
      type: 'text',
      content: `# Rettskilder og lovtolkning

For å finne ut hva som er gjeldende rett, må jurister bruke ulike kilder. Disse kalles rettskilder.

## Rettskildene i prioritert rekkefølge

1. **Grunnloven** (høyest rang)
2. **Lover**
3. **Forskrifter**
4. **Rettspraksis** (dommer)
5. **Forarbeider**
6. **Juridisk teori**
7. **Reelle hensyn**`,
    },
    {
      id: 'rett1-2-def-rettskilde',
      type: 'definition',
      title: 'Rettskilde',
      content: 'En rettskilde er en kilde som gir informasjon om gjeldende rett. De viktigste rettskildene er Grunnloven, lover, forskrifter, rettspraksis og forarbeider.',
    },
    {
      id: 'rett1-2-kilder',
      type: 'text',
      content: `## De viktigste rettskildene

### Grunnloven
- Norges høyeste lov
- Kan bare endres med 2/3 flertall
- Inneholder grunnleggende rettigheter

### Lover
- Vedtas av Stortinget
- Må være i samsvar med Grunnloven

### Forskrifter
- Utfyller lovene med detaljer
- Gis av regjering eller departement
- Hjemmel i lov

### Rettspraksis
- Særlig Høyesteretts dommer
- Viser hvordan loven skal forstås`,
    },
    {
      id: 'rett1-2-tolkning',
      type: 'text',
      content: `## Lovtolkning

### Ordlyden
- Start alltid med lovens tekst
- Naturlig språklig forståelse

### Formålet (teleologisk tolkning)
- Hva ville lovgiver oppnå?
- Se på forarbeidene

### Sammenhengen (systematisk tolkning)
- Hvordan passer bestemmelsen med resten av loven?

### Innskrenkende/utvidende tolkning
- Noen ganger må ordlyden tolkes snevrere eller videre`,
    },
    {
      id: 'rett1-2-def-forarbeid',
      type: 'definition',
      title: 'Forarbeider',
      content: 'Forarbeider er dokumenter som er laget i forbindelse med utarbeidelsen av en lov. De inkluderer utredninger (NOU), proposisjoner og komitéinnstillinger, og forklarer lovens formål og hvordan den skal forstås.',
    },
    {
      id: 'rett1-2-example',
      type: 'example',
      title: 'Tolkning av "kjøretøy"',
      problem: 'En lov forbyr "kjøretøy" i parken. Er et barn på trehjulssykkel omfattet?',
      solution: `**Tolkning:**

1. **Ordlyd**: "Kjøretøy" kan teknisk sett omfatte en trehjulssykkel

2. **Formål**: Hva vil loven oppnå? Sannsynligvis beskyttelse mot støy og fare fra motoriserte kjøretøy

3. **Sammenheng**: Hvordan brukes ordet ellers i lovverket? Vegtrafikkloven definerer kjøretøy med motor

4. **Reelle hensyn**: Vil det være rimelig å forby barn på trehjulssykkel?

**Konklusjon**: En innskrenkende tolkning tilsier at trehjulssykler for barn ikke er omfattet.`,
    },
  ],
  exercises: [
    {
      id: 'rett1-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken rettskilde har høyest rang i Norge?',
      options: [
        { id: 'a', text: 'Grunnloven', isCorrect: true },
        { id: 'b', text: 'Vanlige lover', isCorrect: false },
        { id: 'c', text: 'Forskrifter', isCorrect: false },
        { id: 'd', text: 'Rettspraksis', isCorrect: false },
      ],
      solution: 'Grunnloven er Norges høyeste lov. Alle andre lover må være i samsvar med Grunnloven.',
    },
    {
      id: 'rett1-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom lover og forskrifter?',
      solution: 'Lover vedtas av Stortinget og gir hovedreglene. Forskrifter gis av regjeringen eller departementene og utfyller lovene med detaljerte regler. Forskrifter må ha hjemmel (tillatelse) i lov.',
    },
    {
      id: 'rett1-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forarbeider?',
      options: [
        { id: 'a', text: 'Dokumenter laget under utarbeidelsen av en lov', isCorrect: true },
        { id: 'b', text: 'Arbeidskontrakter', isCorrect: false },
        { id: 'c', text: 'Eldre dommer', isCorrect: false },
        { id: 'd', text: 'Juridiske lærebøker', isCorrect: false },
      ],
      solution: 'Forarbeider inkluderer NOU-er, proposisjoner og innstillinger som forklarer hva lovgiver mente med loven.',
    },
    {
      id: 'rett1-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hva betyr teleologisk lovtolkning?',
      solution: 'Teleologisk (formålsrettet) tolkning betyr å tolke loven i lys av dens formål. Hva ville lovgiver oppnå? Forarbeidene er ofte nyttige for å finne formålet.',
    },
    {
      id: 'rett1-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor starter man vanligvis ved lovtolkning?',
      options: [
        { id: 'a', text: 'Med ordlyden i loven', isCorrect: true },
        { id: 'b', text: 'Med dommer fra Høyesterett', isCorrect: false },
        { id: 'c', text: 'Med juridisk teori', isCorrect: false },
        { id: 'd', text: 'Med forskriftene', isCorrect: false },
      ],
      solution: 'Lovtolkning starter alltid med ordlyden - den naturlige språklige forståelsen av lovens tekst.',
    },
  ],
};

// ============================================================================
// Kapittel 3: Menneskerettigheter
// ============================================================================

export const CHAPTER_RETTSLAERE_1_3: TextbookChapter = {
  id: 'rettslaere-1-3',
  courseId: 'rettslaere-1',
  chapterNumber: '3',
  title: 'Menneskerettigheter',
  description: 'Grunnleggende rettigheter og Norges forpliktelser.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare sentrale menneskerettigheter',
    'gjøre rede for forholdet mellom nasjonal rett og internasjonale konvensjoner',
    'vurdere menneskerettslige problemstillinger',
  ],
  content: [
    {
      id: 'rett1-3-intro',
      type: 'text',
      content: `# Menneskerettigheter

Menneskerettigheter er grunnleggende rettigheter som alle mennesker har, uavhengig av nasjonalitet, kjønn, religion eller andre kjennetegn.

## Historisk bakgrunn

- FNs verdenserklæring 1948
- Den europeiske menneskerettskonvensjon (EMK) 1950
- Menneskerettsloven 1999 (Norge)`,
    },
    {
      id: 'rett1-3-def-mr',
      type: 'definition',
      title: 'Menneskerettigheter',
      content: 'Menneskerettigheter er universelle rettigheter som tilkommer alle mennesker. De beskytter grunnleggende verdier som liv, frihet, verdighet og likhet, og setter grenser for statens makt over individet.',
    },
    {
      id: 'rett1-3-sentrale',
      type: 'text',
      content: `## Sentrale menneskerettigheter

### Sivile og politiske rettigheter
- Retten til liv
- Forbud mot tortur
- Retten til frihet (ikke vilkårlig fengsling)
- Ytringsfrihet
- Religionsfrihet
- Forsamlings- og foreningsfrihet
- Rett til rettferdig rettergang

### Økonomiske, sosiale og kulturelle rettigheter
- Rett til utdanning
- Rett til helse
- Rett til arbeid
- Vern av familieliv`,
    },
    {
      id: 'rett1-3-norge',
      type: 'text',
      content: `## Menneskerettigheter i norsk rett

### Grunnloven kapittel E
- Inneholder de viktigste rettighetene
- §92: Statens plikt til å sikre menneskerettighetene

### Menneskerettsloven
- Gjør flere konvensjoner til norsk lov
- EMK, FN-konvensjonene
- Ved motstrid går konvensjonene foran vanlig lov

### Den europeiske menneskerettsdomstol (EMD)
- Kan behandle klager mot Norge
- Bindende avgjørelser`,
    },
    {
      id: 'rett1-3-def-emk',
      type: 'definition',
      title: 'EMK',
      content: 'Den europeiske menneskerettskonvensjon (EMK) er en internasjonal avtale fra 1950 som beskytter sivile og politiske rettigheter. Norge er bundet av EMK, og borgere kan klage til Den europeiske menneskerettsdomstol.',
    },
    {
      id: 'rett1-3-example',
      type: 'example',
      title: 'Ytringsfrihet vs. ærekrenkelse',
      problem: 'Kan det begrenses hvor kritisk man kan være i en avisartikkel om en politiker?',
      solution: `**Vurdering:**

1. **Ytringsfriheten** (Grl. §100, EMK art. 10) beskytter retten til å ytre seg

2. **Begrensninger** må være:
   - Fastsatt i lov
   - Nødvendige i et demokratisk samfunn
   - For å beskytte andres rettigheter

3. **Politikere** må tåle mer kritikk enn vanlige folk

4. **Grenser**: Usanne fakta som skader omdømmet kan være ærekrenkelse

**Konklusjon**: Skarp, men sannferdig kritikk av politikere er som regel beskyttet av ytringsfriheten.`,
    },
  ],
  exercises: [
    {
      id: 'rett1-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er EMK?',
      options: [
        { id: 'a', text: 'Den europeiske menneskerettskonvensjon', isCorrect: true },
        { id: 'b', text: 'En norsk lov', isCorrect: false },
        { id: 'c', text: 'En FN-organisasjon', isCorrect: false },
        { id: 'd', text: 'En EU-traktat', isCorrect: false },
      ],
      solution: 'EMK er Den europeiske menneskerettskonvensjon fra 1950, som beskytter grunnleggende rettigheter i Europa.',
    },
    {
      id: 'rett1-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn fire sentrale menneskerettigheter.',
      solution: 'Fire sentrale menneskerettigheter: 1) Retten til liv. 2) Forbud mot tortur. 3) Ytringsfrihet. 4) Rett til rettferdig rettergang. Andre eksempler: religionsfrihet, forsamlingsfrihet, rett til privatliv.',
    },
    {
      id: 'rett1-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skjer ved motstrid mellom EMK og norsk lov?',
      options: [
        { id: 'a', text: 'EMK går foran', isCorrect: true },
        { id: 'b', text: 'Norsk lov går foran', isCorrect: false },
        { id: 'c', text: 'De gjelder likt', isCorrect: false },
        { id: 'd', text: 'Stortinget avgjør', isCorrect: false },
      ],
      solution: 'Menneskerettsloven sier at EMK skal gå foran ved motstrid med annen norsk lov.',
    },
    {
      id: 'rett1-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Kan menneskerettigheter begrenses? Forklar vilkårene.',
      solution: 'Mange rettigheter kan begrenses, men vilkårene er strenge: 1) Begrensningen må være fastsatt i lov. 2) Den må forfølge et legitimt formål (f.eks. andres sikkerhet). 3) Den må være nødvendig i et demokratisk samfunn (proporsjonalitet). Noen rettigheter er absolutte (forbud mot tortur).',
    },
    {
      id: 'rett1-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor kan norske borgere klage hvis de mener staten har brutt menneskerettighetene?',
      options: [
        { id: 'a', text: 'Den europeiske menneskerettsdomstolen (EMD)', isCorrect: true },
        { id: 'b', text: 'Stortinget', isCorrect: false },
        { id: 'c', text: 'FN', isCorrect: false },
        { id: 'd', text: 'Regjeringen', isCorrect: false },
      ],
      solution: 'EMD i Strasbourg kan behandle klager mot Norge etter at nasjonale rettsmidler er uttømt.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Avtalerett
// ============================================================================

export const CHAPTER_RETTSLAERE_1_4: TextbookChapter = {
  id: 'rettslaere-1-4',
  courseId: 'rettslaere-1',
  chapterNumber: '4',
  title: 'Avtalerett',
  description: 'Inngåelse av avtaler og avtaleloven.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forklare hvordan bindende avtaler inngås',
    'vurdere avtalers gyldighet',
    'anvende sentrale bestemmelser i avtaleloven',
  ],
  content: [
    {
      id: 'rett1-4-intro',
      type: 'text',
      content: `# Avtalerett

Avtaler er grunnlaget for økonomisk samhandling. Avtaleloven regulerer hvordan avtaler inngås og hva som kan gjøre dem ugyldige.

## Avtalefrihet

Hovedregelen er avtalefrihet:
- Frihet til å velge om man vil avtale
- Frihet til å velge med hvem
- Frihet til å bestemme innholdet

Men: Avtalefriheten har begrensninger (lov, rimelighet)`,
    },
    {
      id: 'rett1-4-def-avtale',
      type: 'definition',
      title: 'Avtale',
      content: 'En avtale er en enighet mellom to eller flere parter som skaper rettigheter og plikter. Avtale oppstår normalt ved at et tilbud aksepteres.',
    },
    {
      id: 'rett1-4-innging',
      type: 'text',
      content: `## Avtaleinngåelse

### Tilbud
- Et konkret forslag om å inngå avtale
- Må være tilstrekkelig bestemt
- Bindende for tilbyderen i rimelig tid

### Aksept
- Ubetinget ja til tilbudet
- "Ja, jeg vil kjøpe bilen for 50 000 kr"
- Avtale er inngått

### Modifisert aksept
- Aksept med endringer = nytt tilbud
- "Ja, men bare for 45 000 kr"`,
    },
    {
      id: 'rett1-4-ugyldighet',
      type: 'text',
      content: `## Ugyldige avtaler

### Manglende myndighet
- Under 18 år (vergemål)
- Sinnslidelse

### Tvang og svik
- §28: Tvang (trusler)
- §30: Svik (villedelse)
- §33: Urimelige omstendigheter

### §36: Generalklausulen
- Urimelig avtale kan settes til side
- Vurderes konkret`,
    },
    {
      id: 'rett1-4-def-fullmakt',
      type: 'definition',
      title: 'Fullmakt',
      content: 'Fullmakt er retten til å handle på vegne av en annen. Den som gir fullmakt (fullmaktsgiver) blir bundet av det fullmektigen gjør innenfor fullmaktens grenser.',
    },
    {
      id: 'rett1-4-example',
      type: 'example',
      title: 'Er avtalen gyldig?',
      problem: 'Peder (17 år) kjøper en mobiltelefon til 8000 kr uten foreldrenes samtykke. Er avtalen bindende?',
      solution: `**Vurdering:**

1. **Hovedregel**: Mindreårige kan ikke binde seg uten verges samtykke

2. **Unntak**: "Midler som den mindreårige selv råder over" (lommepenger, arbeidsinntekt)

3. **Vurdering**:
   - 8000 kr er et betydelig beløp
   - Sannsynligvis utenfor det Peder råder over selv

4. **Konklusjon**: Avtalen er sannsynligvis ikke bindende. Selger må ta telefonen tilbake og gi pengene tilbake.`,
    },
  ],
  exercises: [
    {
      id: 'rett1-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kreves for at en avtale skal være inngått?',
      options: [
        { id: 'a', text: 'Tilbud og aksept', isCorrect: true },
        { id: 'b', text: 'Skriftlig kontrakt', isCorrect: false },
        { id: 'c', text: 'Notarius publicus', isCorrect: false },
        { id: 'd', text: 'Minst tre parter', isCorrect: false },
      ],
      solution: 'Avtale inngås normalt ved at et tilbud aksepteres. Muntlige avtaler er like bindende som skriftlige.',
    },
    {
      id: 'rett1-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva skjer hvis en aksept inneholder endringer?',
      solution: 'En aksept med endringer kalles modifisert aksept og regnes som et nytt tilbud. Den opprinnelige tilbyderen kan da velge om han vil akseptere det nye tilbudet.',
    },
    {
      id: 'rett1-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva sier avtaleloven §36?',
      options: [
        { id: 'a', text: 'Urimelige avtaler kan settes til side', isCorrect: true },
        { id: 'b', text: 'Alle avtaler må være skriftlige', isCorrect: false },
        { id: 'c', text: 'Mindreårige kan inngå alle avtaler', isCorrect: false },
        { id: 'd', text: 'Avtaler gjelder kun i ett år', isCorrect: false },
      ],
      solution: 'Avtaleloven §36 er en generalklausul som sier at en avtale kan settes til side hvis den vil virke urimelig.',
    },
    {
      id: 'rett1-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er avtalefrihet og hvilke begrensninger finnes?',
      solution: 'Avtalefrihet betyr frihet til å velge om, med hvem og om hva man avtaler. Begrensninger: 1) Lov (f.eks. kan ikke avtale lovbrudd). 2) Rimelighet (§36). 3) Preseptoriske regler (f.eks. forbrukervern). 4) Myndighetsregler (f.eks. under 18).',
    },
    {
      id: 'rett1-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Fra hvilken alder kan man inngå bindende avtaler uten samtykke?',
      options: [
        { id: 'a', text: '18 år', isCorrect: true },
        { id: 'b', text: '15 år', isCorrect: false },
        { id: 'c', text: '16 år', isCorrect: false },
        { id: 'd', text: '21 år', isCorrect: false },
      ],
      solution: 'Myndighetsalderen i Norge er 18 år. Da blir man juridisk myndig og kan inngå alle typer avtaler.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Kjøpsrett og forbrukerrett
// ============================================================================

export const CHAPTER_RETTSLAERE_1_5: TextbookChapter = {
  id: 'rettslaere-1-5',
  courseId: 'rettslaere-1',
  chapterNumber: '5',
  title: 'Kjøpsrett og forbrukerrett',
  description: 'Forbrukerrettigheter ved kjøp av varer.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forklare forbrukers rettigheter ved kjøp',
    'vurdere når en vare har mangel',
    'anvende reglene om reklamasjon og misligholdsbeføyelser',
  ],
  content: [
    {
      id: 'rett1-5-intro',
      type: 'text',
      content: `# Kjøpsrett og forbrukerrett

Når du kjøper varer, har du rettigheter. Forbrukerkjøpsloven gir forbrukere særlig beskyttelse.

## Anvendelsesområde

- **Kjøpsloven**: Mellom næringsdrivende eller mellom private
- **Forbrukerkjøpsloven**: Forbruker kjøper av næringsdrivende`,
    },
    {
      id: 'rett1-5-def-mangel',
      type: 'definition',
      title: 'Mangel',
      content: 'En vare har mangel hvis den ikke er i samsvar med det som er avtalt, eller ikke svarer til det forbrukeren med rimelighet kan forvente.',
    },
    {
      id: 'rett1-5-mangler',
      type: 'text',
      content: `## Hva er en mangel?

### Avvik fra avtalen
- Ikke som beskrevet
- Mangler egenskaper som var lovet

### Ikke som forventet
- Holder ikke alminnelig standard
- Egner seg ikke til normal bruk

### Opplysningssvikt
- Manglende informasjon
- Feil informasjon`,
    },
    {
      id: 'rett1-5-befoeyelser',
      type: 'text',
      content: `## Misligholdsbeføyelser (kjøpers rettigheter ved mangel)

### 1. Retting
- Selger reparerer varen
- Må skje uten vesentlig ulempe

### 2. Omlevering
- Ny vare av samme type
- Hvis retting ikke mulig/mislykkes

### 3. Prisavslag
- Redusert pris tilsvarende mangelen

### 4. Heving
- Oppheve kjøpet (pengene tilbake)
- Krever vesentlig mangel

### 5. Erstatning
- Dekke økonomisk tap`,
    },
    {
      id: 'rett1-5-reklamasjon',
      type: 'text',
      content: `## Reklamasjon

### Absolutt frist
- **2 år** fra levering (generell regel)
- **5 år** for ting med vesentlig lengre levetid

### Relativ frist
- Innen "rimelig tid" etter at mangelen oppdages
- Normalt 2 måneder

### Hvordan reklamere?
- Gi selger beskjed om mangelen
- Muntlig eller skriftlig (skriftlig anbefales)`,
    },
    {
      id: 'rett1-5-def-angrerett',
      type: 'definition',
      title: 'Angrerett',
      content: 'Angrerett gir forbrukeren rett til å gå fra en avtale uten grunn. Ved fjernsalg (netthandel, telefonsalg) er angrefristen 14 dager. Angrerett gjelder ikke ved vanlig butikkhandel.',
    },
    {
      id: 'rett1-5-example',
      type: 'example',
      title: 'Reklamasjon på TV',
      problem: 'Du kjøpte en TV for 15 000 kr for 3 år siden. Nå slutter den å virke. Hva er dine rettigheter?',
      solution: `**Vurdering:**

1. **Reklamasjonsfrist**: TV har vesentlig lengre levetid enn 2 år → 5 års frist gjelder

2. **Er det mangel?**: En TV som slutter å virke etter 3 år har ikke normal holdbarhet → sannsynligvis mangel

3. **Dine rettigheter**:
   - Krev retting (reparasjon) eller omlevering
   - Ved mislykket retting: prisavslag eller heving

4. **Viktig**: Reklamér så snart som mulig (innen 2 mnd)

**Tips**: Dokumenter alt skriftlig (e-post)`,
    },
  ],
  exercises: [
    {
      id: 'rett1-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor lang er den absolutte reklamasjonsfristen for vanlige varer?',
      options: [
        { id: 'a', text: '2 år', isCorrect: true },
        { id: 'b', text: '1 år', isCorrect: false },
        { id: 'c', text: '5 år', isCorrect: false },
        { id: 'd', text: '10 år', isCorrect: false },
      ],
      solution: 'Hovedregelen er 2 års absolutt reklamasjonsfrist. For ting med vesentlig lengre levetid (f.eks. hvitevarer) er fristen 5 år.',
    },
    {
      id: 'rett1-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom retting og omlevering?',
      solution: 'Retting betyr at selger reparerer den defekte varen. Omlevering betyr at forbrukeren får en ny, tilsvarende vare. Forbrukeren kan velge mellom disse, med mindre det valgte alternativet er umulig eller urimelig kostbart for selger.',
    },
    {
      id: 'rett1-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Når kan et kjøp heves?',
      options: [
        { id: 'a', text: 'Ved vesentlig mangel', isCorrect: true },
        { id: 'b', text: 'Ved enhver mangel', isCorrect: false },
        { id: 'c', text: 'Kun ved farlige produkter', isCorrect: false },
        { id: 'd', text: 'Aldri', isCorrect: false },
      ],
      solution: 'Heving (tilbakelevere varen og få pengene tilbake) krever at mangelen er vesentlig. Ved mindre mangler har du rett til retting, omlevering eller prisavslag.',
    },
    {
      id: 'rett1-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er angrerett og når gjelder den?',
      solution: 'Angrerett er retten til å gå fra et kjøp uten begrunnelse. Den gjelder ved fjernsalg (netthandel, telefonsalg, dørsalg) i 14 dager. Angrerett gjelder IKKE ved vanlig butikkhandel - da er det butikkens bytte/returpolicy som avgjør.',
    },
    {
      id: 'rett1-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med "relativ reklamasjonsfrist"?',
      options: [
        { id: 'a', text: 'Man må reklamere innen rimelig tid etter at mangelen oppdages', isCorrect: true },
        { id: 'b', text: 'Fristen er relatert til prisen', isCorrect: false },
        { id: 'c', text: 'Fristen avhenger av hvor man bor', isCorrect: false },
        { id: 'd', text: 'Fristen er 5 år', isCorrect: false },
      ],
      solution: 'Relativ frist betyr at du må si fra (reklamere) innen rimelig tid etter at du oppdaget eller burde oppdaget mangelen, normalt innen 2 måneder.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Erstatningsrett
// ============================================================================

export const CHAPTER_RETTSLAERE_1_6: TextbookChapter = {
  id: 'rettslaere-1-6',
  courseId: 'rettslaere-1',
  chapterNumber: '6',
  title: 'Erstatningsrett',
  description: 'Vilkår for erstatningsansvar og erstatningsutmåling.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare vilkårene for erstatning',
    'skille mellom ulike ansvarsgrunnlag',
    'vurdere erstatningsrettslige problemstillinger',
  ],
  content: [
    {
      id: 'rett1-6-intro',
      type: 'text',
      content: `# Erstatningsrett

Erstatningsretten handler om økonomisk kompensasjon når noen påfører andre skade.

## De tre grunnvilkårene

For å få erstatning må alle tre vilkår være oppfylt:
1. **Ansvarsgrunnlag** (hvorfor skal noen betale?)
2. **Økonomisk tap** (hva er tapet?)
3. **Årsakssammenheng** (skyldes tapet handlingen?)`,
    },
    {
      id: 'rett1-6-def-culpa',
      type: 'definition',
      title: 'Culpaansvaret',
      content: 'Culpaansvaret (skyldansvaret) er hovedregelen i erstatningsretten. Man er ansvarlig for skade man forårsaker ved uaktsomhet (culpa) - altså handlinger som avviker fra forsvarlig opptreden.',
    },
    {
      id: 'rett1-6-ansvarsgrunnlag',
      type: 'text',
      content: `## Ansvarsgrunnlag

### Culpaansvaret (skyldansvar)
- Krav om uaktsomhet (culpa)
- Objektiv vurdering: Hva ville en fornuftig person gjort?
- Hovedregelen i norsk rett

### Objektivt ansvar
- Ansvar uten skyld
- Gjelder for særlig farlig virksomhet
- Eksempel: Produktansvar, arbeidsgiveres ansvar

### Arbeidsgiveransvaret
- Arbeidsgiver ansvarlig for ansattes feil
- I arbeidsgivers tjeneste`,
    },
    {
      id: 'rett1-6-tap',
      type: 'text',
      content: `## Økonomisk tap

### Hva kan erstattes?

**Tingsskade**
- Reparasjonskostnader
- Verdiforringelse
- Gjenanskaffelsesverdi

**Personskade**
- Behandlingsutgifter
- Inntektstap
- Ménerstatning (varig skade)
- Oppreisning (ikke-økonomisk)`,
    },
    {
      id: 'rett1-6-def-aarsak',
      type: 'definition',
      title: 'Årsakssammenheng',
      content: 'Det må være årsakssammenheng mellom handlingen og skaden. Tapet ville ikke oppstått "om handlingen tenkes borte". I tillegg må skaden være en påregnelig (forutsigbar) følge.',
    },
    {
      id: 'rett1-6-example',
      type: 'example',
      title: 'Syklist skader fotgjenger',
      problem: 'En syklist sykler på fortauet, kolliderer med en fotgjenger og påfører henne brudd. Er syklisten erstatningsansvarlig?',
      solution: `**Vurdering av vilkårene:**

1. **Ansvarsgrunnlag (culpa)**:
   - Sykling på fortau er normalt tillatt men krever hensyn
   - Hvis syklisten holdt for høy fart eller ikke varslet → uaktsom
   - Culpa er sannsynligvis oppfylt

2. **Økonomisk tap**:
   - Behandlingsutgifter, evt. inntektstap
   - Tap er dokumenterbart

3. **Årsakssammenheng**:
   - Kollisjonen førte direkte til skaden
   - Skaden var påregnelig

**Konklusjon**: Syklisten er sannsynligvis erstatningsansvarlig.`,
    },
  ],
  exercises: [
    {
      id: 'rett1-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er culpa?',
      options: [
        { id: 'a', text: 'Uaktsomhet/skyld', isCorrect: true },
        { id: 'b', text: 'Årsakssammenheng', isCorrect: false },
        { id: 'c', text: 'Økonomisk tap', isCorrect: false },
        { id: 'd', text: 'Forsett', isCorrect: false },
      ],
      solution: 'Culpa betyr uaktsomhet eller skyld. Culpaansvaret er hovedregelen for erstatning - man må ha opptrådt klanderverdig.',
    },
    {
      id: 'rett1-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er de tre vilkårene for erstatning?',
      solution: '1) Ansvarsgrunnlag - enten culpa (skyld) eller objektivt ansvar. 2) Økonomisk tap - skadelidte må ha lidt et målbart tap. 3) Årsakssammenheng - tapet må skyldes den ansvarlige handlingen.',
    },
    {
      id: 'rett1-6-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er objektivt ansvar?',
      options: [
        { id: 'a', text: 'Ansvar uten krav om skyld', isCorrect: true },
        { id: 'b', text: 'Ansvar med krav om forsett', isCorrect: false },
        { id: 'c', text: 'Ansvar for kontraktsbrudd', isCorrect: false },
        { id: 'd', text: 'Ansvar for andres handlinger', isCorrect: false },
      ],
      solution: 'Objektivt ansvar betyr at man er ansvarlig uavhengig av skyld. Det gjelder for særlig farlig virksomhet, produkter m.m.',
    },
    {
      id: 'rett1-6-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar arbeidsgiveransvaret.',
      solution: 'Arbeidsgiver er ansvarlig for skade som ansatte volder i tjenesten (skl. §2-1). Skaden må skje under utføring av arbeidet. Arbeidsgiver kan bli ansvarlig selv om det ikke kan påvises hvem av de ansatte som er skyld i skaden.',
    },
    {
      id: 'rett1-6-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med påregnelighet i erstatningsretten?',
      options: [
        { id: 'a', text: 'At skaden var en forutsigbar følge av handlingen', isCorrect: true },
        { id: 'b', text: 'At skadelidte kunne forsikre seg', isCorrect: false },
        { id: 'c', text: 'At skadevolder kunne betale', isCorrect: false },
        { id: 'd', text: 'At skaden skjedde umiddelbart', isCorrect: false },
      ],
      solution: 'Påregnelighet betyr at skaden var en forutsigbar følge. Man erstatter ikke helt upåregnelige følger selv om det er årsakssammenheng.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Strafferett grunnleggende
// ============================================================================

export const CHAPTER_RETTSLAERE_1_7: TextbookChapter = {
  id: 'rettslaere-1-7',
  courseId: 'rettslaere-1',
  chapterNumber: '7',
  title: 'Strafferett grunnleggende',
  description: 'Straffbarhetsvilkår, skyldformer og straffereaksjoner.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forklare de fire straffbarhetsvilkårene',
    'skille mellom ulike skyldformer',
    'beskrive straffereaksjonene i norsk rett',
  ],
  content: [
    {
      id: 'rett1-7-intro',
      type: 'text',
      content: `# Strafferett grunnleggende

Strafferetten handler om når staten kan straffe borgerne for lovbrudd.

## Legalitetsprinsippet

"Ingen straff uten lov" (Grl. §96):
- Handlingen må være straffbar etter loven
- Straff kan ikke ilegges tilbakevirkende`,
    },
    {
      id: 'rett1-7-def-straffbarhet',
      type: 'definition',
      title: 'Straffbarhetsvilkårene',
      content: 'For at noen skal kunne straffes, må fire vilkår være oppfylt: 1) Lovfestet straffebud, 2) Ingen straffrihetsgrunn, 3) Tilregnelighet, 4) Skyld (forsett eller uaktsomhet).',
    },
    {
      id: 'rett1-7-vilkar',
      type: 'text',
      content: `## De fire straffbarhetsvilkårene

### 1. Lovfestet straffebud
- Handlingen må være forbudt i lov
- Med strafferamme (fengsel/bot)

### 2. Ingen straffrihetsgrunn
- Nødverge
- Nødrett
- Samtykke (i noen tilfeller)

### 3. Tilregnelighet
- Over 15 år
- Ikke utilregnelig (psykose, bevisstløshet)

### 4. Skyld
- Forsett: Visste eller holdt det for overveiende sannsynlig
- Uaktsomhet: Burde ha visst`,
    },
    {
      id: 'rett1-7-skyld',
      type: 'text',
      content: `## Skyldformer

### Forsett (dolus)
- **Hensikt**: Tilsiktet resultat
- **Sannsynlighetsforsett**: Holdt det for mest sannsynlig
- **Eventualitetsforsett**: Ville handlet selv om han visste

### Uaktsomhet (culpa)
- **Grov uaktsomhet**: Sterkt klanderverdig
- **Simpel uaktsomhet**: Avvik fra normal aktsomhet

Hovedregel: Forsett kreves for straff. Uaktsomhet kun når loven sier det.`,
    },
    {
      id: 'rett1-7-def-reaksjon',
      type: 'definition',
      title: 'Straffereaksjoner',
      content: 'Hovedstraffer i Norge er fengsel, forvaring, samfunnsstraff, ungdomsstraff og bot. I tillegg finnes særreaksjoner og andre tiltak som inndragning og rettighetstap.',
    },
    {
      id: 'rett1-7-example',
      type: 'example',
      title: 'Nødverge',
      problem: 'Anne blir angrepet på gaten. Hun slår angriperen med vesken og bryter nesen hans. Kan Anne straffes for vold?',
      solution: `**Vurdering av nødverge:**

1. **Angrep**: Anne ble utsatt for et ulovlig angrep

2. **Nødverge (strl. §18)**: Man kan avverge et ulovlig angrep med nødvendig forsvar

3. **Vurdering**:
   - Var forsvaret nødvendig? Ja, for å stoppe angrepet
   - Var det forholdsmessig? Å slå med veske mot en angriper er normalt forholdsmessig
   - Gikk forsvaret for langt? Brutt nese er alvorlig, men ikke uforholdsmessig mot et angrep

**Konklusjon**: Anne handlet sannsynligvis innenfor nødvergeretten og kan ikke straffes.`,
    },
  ],
  exercises: [
    {
      id: 'rett1-7-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er kriminell lavalder i Norge?',
      options: [
        { id: 'a', text: '15 år', isCorrect: true },
        { id: 'b', text: '18 år', isCorrect: false },
        { id: 'c', text: '16 år', isCorrect: false },
        { id: 'd', text: '14 år', isCorrect: false },
      ],
      solution: 'Kriminell lavalder er 15 år. Under dette kan man ikke straffes, men barnevernet kan gripe inn.',
    },
    {
      id: 'rett1-7-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom forsett og uaktsomhet.',
      solution: 'Forsett: Gjerningspersonen visste hva han gjorde eller holdt det for overveiende sannsynlig (villet handling). Uaktsomhet: Gjerningspersonen burde ha forstått, men forstod ikke (uforsiktig handling). Forsett gir vanligvis strengere straff.',
    },
    {
      id: 'rett1-7-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedregelen for skyldkrav i strafferetten?',
      options: [
        { id: 'a', text: 'Forsett kreves for straff', isCorrect: true },
        { id: 'b', text: 'Uaktsomhet er alltid nok', isCorrect: false },
        { id: 'c', text: 'Skyld er ikke nødvendig', isCorrect: false },
        { id: 'd', text: 'Hensikt kreves alltid', isCorrect: false },
      ],
      solution: 'Hovedregelen er at forsett kreves for straff. Uaktsomhet er bare nok når det fremgår uttrykkelig av straffebudet.',
    },
    {
      id: 'rett1-7-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hva er legalitetsprinsippet og hvorfor er det viktig?',
      solution: 'Legalitetsprinsippet ("ingen straff uten lov") betyr at staten bare kan straffe handlinger som var forbudt i lov da de ble begått. Det beskytter mot vilkårlig maktbruk, gir forutsigbarhet og sikrer at folk kan vite hva som er ulovlig på forhånd.',
    },
    {
      id: 'rett1-7-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er nødverge?',
      options: [
        { id: 'a', text: 'Retten til å forsvare seg mot ulovlige angrep', isCorrect: true },
        { id: 'b', text: 'Plikt til å hjelpe andre', isCorrect: false },
        { id: 'c', text: 'Rett til å bryte loven ved fare', isCorrect: false },
        { id: 'd', text: 'Militær verneplikt', isCorrect: false },
      ],
      solution: 'Nødverge gir rett til å avverge et ulovlig angrep på seg selv eller andre. Forsvaret må være nødvendig og forholdsmessig.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Arbeidsrett
// ============================================================================

export const CHAPTER_RETTSLAERE_1_8: TextbookChapter = {
  id: 'rettslaere-1-8',
  courseId: 'rettslaere-1',
  chapterNumber: '8',
  title: 'Arbeidsrett',
  description: 'Arbeidsforhold og arbeidstakers rettigheter.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare sentrale rettigheter og plikter i arbeidsforhold',
    'vurdere lovligheten av oppsigelser',
    'anvende sentrale bestemmelser i arbeidsmiljøloven',
  ],
  content: [
    {
      id: 'rett1-8-intro',
      type: 'text',
      content: `# Arbeidsrett

Arbeidsretten regulerer forholdet mellom arbeidsgiver og arbeidstaker. Arbeidsmiljøloven gir arbeidstakere viktig beskyttelse.

## Kilder i arbeidsretten

- Arbeidsmiljøloven (aml.)
- Tariffavtaler
- Arbeidsavtalen`,
    },
    {
      id: 'rett1-8-def-arbeidsavtale',
      type: 'definition',
      title: 'Arbeidsavtale',
      content: 'Arbeidsavtale er en skriftlig kontrakt som regulerer arbeidsforholdet. Den må inneholde opplysninger om lønn, arbeidstid, arbeidsoppgaver, oppsigelsestid m.m. (aml. §14-6)',
    },
    {
      id: 'rett1-8-rettigheter',
      type: 'text',
      content: `## Arbeidstakers rettigheter

### Skriftlig arbeidsavtale
- Krav senest én måned etter start
- Minimumsinnhold fastsatt i loven

### Arbeidstid
- Maks 9 timer pr. dag, 40 timer pr. uke
- Overtid: Maks 10 timer pr. uke
- Krav på pause, fritid mellom vakter

### Ferie
- 25 virkedager (5 uker)
- Feriepenger: 10.2% av feriepengegrunnlag`,
    },
    {
      id: 'rett1-8-oppsigelse',
      type: 'text',
      content: `## Oppsigelse

### Arbeidstakers oppsigelse
- Ingen krav til begrunnelse
- Oppsigelsestid (normalt 1-3 måneder)

### Arbeidsgivers oppsigelse
- Må være saklig begrunnet (aml. §15-7)
- Virksomhetens forhold (nedbemanning)
- Arbeidstakers forhold (pliktbrudd)
- Drøftingsplikt med arbeidstaker

### Avskjed
- Fristilling uten oppsigelsestid
- Krever grovt pliktbrudd`,
    },
    {
      id: 'rett1-8-def-saklig',
      type: 'definition',
      title: 'Saklig grunn',
      content: 'Oppsigelse fra arbeidsgiver må ha saklig grunn i virksomhetens, arbeidsgivers eller arbeidstakers forhold. Oppsigelsen må ikke bygge på utenforliggende hensyn, som f.eks. graviditet eller fagforeningsaktivitet.',
    },
    {
      id: 'rett1-8-example',
      type: 'example',
      title: 'Er oppsigelsen lovlig?',
      problem: 'En ansatt sier opp stillingen i en telefon. Arbeidsgiver godtar ikke muntlig oppsigelse. Hvem har rett?',
      solution: `**Vurdering:**

1. **Formkrav**: Arbeidsmiljøloven stiller krav om skriftlig oppsigelse fra arbeidsgiver, men ikke fra arbeidstaker

2. **Arbeidsavtalen**: Sjekk om avtalen krever skriftlig oppsigelse

3. **Bevisspørsmål**: Muntlig oppsigelse kan være vanskelig å bevise

4. **Praksis**: Mange arbeidsavtaler krever skriftlig oppsigelse

**Konklusjon**: Arbeidstakers oppsigelse er i utgangspunktet gyldig selv om den er muntlig, men det anbefales skriftlig for å unngå tvist. Sjekk arbeidsavtalen.`,
    },
  ],
  exercises: [
    {
      id: 'rett1-8-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange feriedager har man krav på i Norge?',
      options: [
        { id: 'a', text: '25 virkedager', isCorrect: true },
        { id: 'b', text: '21 virkedager', isCorrect: false },
        { id: 'c', text: '30 virkedager', isCorrect: false },
        { id: 'd', text: '20 virkedager', isCorrect: false },
      ],
      solution: 'Ferieloven gir rett til 25 virkedager (ca. 5 uker) ferie. De over 60 år har én uke ekstra.',
    },
    {
      id: 'rett1-8-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva kreves for at arbeidsgiver skal kunne si opp en ansatt?',
      solution: 'Oppsigelse må ha saklig grunn i virksomhetens forhold (f.eks. nedbemanning) eller arbeidstakers forhold (f.eks. dårlig arbeidsutførelse, ordrenekt). Det må gjennomføres drøftingsmøte før oppsigelse. Oppsigelsen må være skriftlig.',
    },
    {
      id: 'rett1-8-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom oppsigelse og avskjed?',
      options: [
        { id: 'a', text: 'Ved avskjed opphører arbeidsforholdet umiddelbart', isCorrect: true },
        { id: 'b', text: 'Avskjed gir rett til feriepenger', isCorrect: false },
        { id: 'c', text: 'Oppsigelse er ugyldig', isCorrect: false },
        { id: 'd', text: 'De er helt like', isCorrect: false },
      ],
      solution: 'Ved oppsigelse jobber man ut oppsigelsestiden. Ved avskjed må man gå på dagen. Avskjed krever grovt pliktbrudd.',
    },
    {
      id: 'rett1-8-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva må en arbeidsavtale inneholde?',
      solution: 'Ifølge aml. §14-6 skal avtalen inneholde: Partenes identitet, arbeidssted, stillingsbeskrivelse, startdato, prøvetid, lønn, arbeidstid, ferie, oppsigelsesfrister, og evt. tariffavtale som gjelder.',
    },
    {
      id: 'rett1-8-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er maksimal daglig arbeidstid etter loven?',
      options: [
        { id: 'a', text: '9 timer', isCorrect: true },
        { id: 'b', text: '8 timer', isCorrect: false },
        { id: 'c', text: '10 timer', isCorrect: false },
        { id: 'd', text: '7,5 timer', isCorrect: false },
      ],
      solution: 'Alminnelig arbeidstid er maks 9 timer pr. dag og 40 timer pr. uke etter arbeidsmiljøloven.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Familie- og arverett
// ============================================================================

export const CHAPTER_RETTSLAERE_1_9: TextbookChapter = {
  id: 'rettslaere-1-9',
  courseId: 'rettslaere-1',
  chapterNumber: '9',
  title: 'Familie- og arverett',
  description: 'Ekteskap, samboerskap og arv.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forklare rettslige konsekvenser av ekteskap og samboerskap',
    'gjøre rede for arverettens hovedregler',
    'vurdere formuesforhold ved samlivsbrudd',
  ],
  content: [
    {
      id: 'rett1-9-intro',
      type: 'text',
      content: `# Familie- og arverett

Familieretten regulerer ekteskap, samboerskap og forholdet mellom foreldre og barn. Arveretten bestemmer hva som skjer med formuen når noen dør.

## Lovverk

- Ekteskapsloven
- Arveloven
- Barneloven`,
    },
    {
      id: 'rett1-9-def-felleseie',
      type: 'definition',
      title: 'Felleseie og særeie',
      content: 'Felleseie betyr at ektefellenes formue deles likt ved skilsmisse (likedeling). Særeie betyr at verdier holdes utenfor deling. Særeie må avtales i ektepakt.',
    },
    {
      id: 'rett1-9-ekteskap',
      type: 'text',
      content: `## Ekteskap

### Inngåelse
- Begge må være over 18 år
- Frivillig samtykke
- Vigsel (borgerlig eller kirkelig)

### Formuesordning
- **Felleseie** er hovedregelen
- **Særeie** kan avtales i ektepakt

### Skilsmisse
- Separasjon i ett år, eller
- Samlivsbrudd i to år
- Likedeling av felleseie (skjevdeling mulig)`,
    },
    {
      id: 'rett1-9-arv',
      type: 'text',
      content: `## Arv

### Arveloven
- **Livsarvinger** (barn) arver først
- **Ektefelle**: 1/4 minimum + minstearv
- Hvis ingen barn: Ektefelle arver 1/2, resten til foreldre/søsken

### Pliktdelsarv
- 2/3 av arven til livsarvinger
- Maks 15 G per barn (ca. 1.8 mill.)
- Kan ikke testamenteres bort

### Testament
- Må være skriftlig
- To vitner
- Kan ikke krenke pliktdelsarven`,
    },
    {
      id: 'rett1-9-def-samboer',
      type: 'definition',
      title: 'Samboerskap',
      content: 'Samboere har ikke samme rettigheter som ektefeller. De har ikke automatisk rett til arv eller deling av formue. Arvrett kan sikres gjennom testament, men samboer betaler mer i arveavgift.',
    },
    {
      id: 'rett1-9-example',
      type: 'example',
      title: 'Fordeling av arv',
      problem: 'Per dør og etterlater seg ektefelle og to barn. Boet er verdt 3 millioner. Hvordan fordeles arven?',
      solution: `**Arvefordeling:**

1. **Ektefellens del**: 1/4 = 750 000 kr

2. **Barnas del**: 3/4 = 2 250 000 kr
   - Deles likt: 1 125 000 kr hver

3. **Oppsummert**:
   - Ektefelle: 750 000 kr
   - Barn 1: 1 125 000 kr
   - Barn 2: 1 125 000 kr

**Merk**: Ektefellen kan velge å sitte i uskifte (beholde boet) overfor felles barn.`,
    },
  ],
  exercises: [
    {
      id: 'rett1-9-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedregelen for formuesordning i ekteskap?',
      options: [
        { id: 'a', text: 'Felleseie', isCorrect: true },
        { id: 'b', text: 'Særeie', isCorrect: false },
        { id: 'c', text: 'Sameie', isCorrect: false },
        { id: 'd', text: 'Delt økonomi', isCorrect: false },
      ],
      solution: 'Felleseie er hovedregelen. Det betyr at formuen deles likt ved skilsmisse. Særeie må avtales i ektepakt.',
    },
    {
      id: 'rett1-9-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er pliktdelsarv?',
      solution: 'Pliktdelsarv er den delen av arven som må gå til livsarvinger (barn). Det er 2/3 av arven, begrenset oppad til 15 G (ca. 1.8 mill.) per barn. Arvelater kan ikke testamentere bort pliktdelen.',
    },
    {
      id: 'rett1-9-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mye arver ektefellen minimum når det er barn?',
      options: [
        { id: 'a', text: '1/4 av arven', isCorrect: true },
        { id: 'b', text: 'Halvparten', isCorrect: false },
        { id: 'c', text: 'Ingenting', isCorrect: false },
        { id: 'd', text: 'Alt', isCorrect: false },
      ],
      solution: 'Ektefellen har krav på minimum 1/4 av arven når det er livsarvinger (barn). Minstearven er 4 G.',
    },
    {
      id: 'rett1-9-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hva er forskjellen på ektefellers og samboeres rettigheter?',
      solution: 'Ektefeller har automatisk arverett, rett til å sitte i uskifte, og felleseie som hovedregel. Samboere har IKKE automatisk arverett (må ha testament), deler ikke formue automatisk ved brudd, og har ikke rett til uskifte uten felles barn. Samboere med felles barn har noe utvidet vern.',
    },
    {
      id: 'rett1-9-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kreves for å opprette et gyldig testament?',
      options: [
        { id: 'a', text: 'Skriftlig med to vitner', isCorrect: true },
        { id: 'b', text: 'Bare muntlig erklæring', isCorrect: false },
        { id: 'c', text: 'Notarius publicus', isCorrect: false },
        { id: 'd', text: 'Ingen formkrav', isCorrect: false },
      ],
      solution: 'Testament må være skriftlig og undertegnet med to vitner til stede. Vitnene kan ikke være arvinger.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Rettsprosess og konfliktløsning
// ============================================================================

export const CHAPTER_RETTSLAERE_1_10: TextbookChapter = {
  id: 'rettslaere-1-10',
  courseId: 'rettslaere-1',
  chapterNumber: '10',
  title: 'Rettsprosess og konfliktløsning',
  description: 'Tvisteløsning i og utenfor domstolene.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forklare gangen i en rettssak',
    'beskrive alternative konfliktløsningsmetoder',
    'vurdere når ulike tvisteløsninger er hensiktsmessige',
  ],
  content: [
    {
      id: 'rett1-10-intro',
      type: 'text',
      content: `# Rettsprosess og konfliktløsning

Konflikter kan løses på mange måter. Domstolene er én mulighet, men det finnes også andre veier.

## Konfliktløsningsmetoder

- **Forhandling**: Partene snakker sammen
- **Mekling**: Tredjeperson hjelper
- **Voldgift**: Privat domstolavgjørelse
- **Domstol**: Offentlig rettsavgjørelse`,
    },
    {
      id: 'rett1-10-def-mekling',
      type: 'definition',
      title: 'Mekling',
      content: 'Mekling er en konfliktløsningsmetode der en nøytral tredjeperson (mekler) hjelper partene å finne en løsning selv. Mekleren avgjør ikke tvisten, men legger til rette for dialog.',
    },
    {
      id: 'rett1-10-sivil',
      type: 'text',
      content: `## Sivile saker

### Forliksrådet
- Laveste rettsinstans
- Obligatorisk for mange tvister
- Forsøker mekling, kan avsi dom

### Tingretten
- Stevning (søksmål)
- Tilsvar fra motparten
- Hovedforhandling
- Dom

### Småkravsprosess
- For krav under 250 000 kr
- Enklere og billigere
- Vanligvis skriftlig behandling`,
    },
    {
      id: 'rett1-10-straff',
      type: 'text',
      content: `## Straffesaker

### Påtalemyndigheten
- Politiet etterforsker
- Statsadvokaten tar ut tiltale

### Hovedforhandling
- Tiltalen leses opp
- Bevisførsel (vitner, dokumenter)
- Prosedyre fra partene
- Domsavsigelse

### Bevis
- **Bevisbyrden**: Påtalemyndigheten må bevise skyld
- **Beviskrav**: Utover enhver rimelig tvil`,
    },
    {
      id: 'rett1-10-def-fritt',
      type: 'definition',
      title: 'Fri rettshjelp',
      content: 'Fri rettshjelp er gratis juridisk bistand fra staten for personer med lav inntekt. Det dekker advokatkostnader i bestemte sakstyper, som familiesaker og trygdesaker.',
    },
    {
      id: 'rett1-10-example',
      type: 'example',
      title: 'Velge konfliktløsning',
      problem: 'Du er uenig med naboen om en hekk. Hvordan bør du gå frem?',
      solution: `**Trinnvis tilnærming:**

1. **Snakk med naboen**: Forsøk å løse det dere imellom

2. **Advokat/mekling**: Hvis samtale ikke fungerer, vurder frivillig mekling

3. **Forliksrådet**: Pålagt før tingretten for slike saker
   - Gratis
   - Meklingsforhandling
   - Kan avsi dom hvis enige

4. **Tingretten**: Hvis forlik ikke oppnås
   - Kostbart (advokat, rettsgebyr)
   - Tidkrevende

**Anbefaling**: Forsøk å løse det utenfor domstolene. Nabokonflikter bør helst løses gjennom dialog.`,
    },
  ],
  exercises: [
    {
      id: 'rett1-10-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forliksrådet?',
      options: [
        { id: 'a', text: 'Laveste rettsinstans for sivile tvister', isCorrect: true },
        { id: 'b', text: 'En del av politiet', isCorrect: false },
        { id: 'c', text: 'Høyesterett', isCorrect: false },
        { id: 'd', text: 'En privat meklingstjeneste', isCorrect: false },
      ],
      solution: 'Forliksrådet er den laveste rettsinstansen for sivile tvister og behandler mange saker før de kan gå til tingretten.',
    },
    {
      id: 'rett1-10-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom mekling og voldgift?',
      solution: 'Ved mekling hjelper en nøytral tredjeperson partene å finne løsning selv - mekleren avgjør ikke. Ved voldgift avgjør en privat voldgiftsrett tvisten, og avgjørelsen er bindende. Voldgift ligner mer på domstolsbehandling.',
    },
    {
      id: 'rett1-10-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er beviskravet i straffesaker?',
      options: [
        { id: 'a', text: 'Utover enhver rimelig tvil', isCorrect: true },
        { id: 'b', text: 'Sannsynlighetsovervekt', isCorrect: false },
        { id: 'c', text: '75% sannsynlighet', isCorrect: false },
        { id: 'd', text: 'Ingen beviskrav', isCorrect: false },
      ],
      solution: 'I straffesaker må påtalemyndigheten bevise skyld utover enhver rimelig tvil. I sivile saker er det nok med sannsynlighetsovervekt.',
    },
    {
      id: 'rett1-10-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er fri rettshjelp?',
      solution: 'Fri rettshjelp er gratis juridisk bistand (advokat) for personer med lav inntekt. Det gis i visse sakstyper, som familiesaker, trygdesaker og noen arbeidsrettssaker. Man må søke og oppfylle inntektskrav.',
    },
    {
      id: 'rett1-10-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem har bevisbyrden i straffesaker?',
      options: [
        { id: 'a', text: 'Påtalemyndigheten', isCorrect: true },
        { id: 'b', text: 'Tiltalte', isCorrect: false },
        { id: 'c', text: 'Dommeren', isCorrect: false },
        { id: 'd', text: 'Vitner', isCorrect: false },
      ],
      solution: 'Påtalemyndigheten må bevise at tiltalte er skyldig. Tiltalte behøver ikke bevise sin uskyld (uskyldspresumsjonen).',
    },
  ],
};

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const RETTSLAERE_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_1_1,
  CHAPTER_RETTSLAERE_1_2,
  CHAPTER_RETTSLAERE_1_3,
  CHAPTER_RETTSLAERE_1_4,
  CHAPTER_RETTSLAERE_1_5,
  CHAPTER_RETTSLAERE_1_6,
  CHAPTER_RETTSLAERE_1_7,
  CHAPTER_RETTSLAERE_1_8,
  CHAPTER_RETTSLAERE_1_9,
  CHAPTER_RETTSLAERE_1_10,
];

export function getRettslaere1Chapter(chapterId: string): TextbookChapter | undefined {
  return RETTSLAERE_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
