/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Psykologi 1 - Del 3: Kognisjon og persepsjon
 * Seksjon 3: Kognisjon og persepsjon (3.1-3.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_PSYKOLOGI_1_3_1: TextbookChapter = {
  id: 'psykologi-1-3-1',
  courseId: 'psykologi-1',
  chapterNumber: '3.1',
  title: 'Persepsjon',
  description: 'Hvordan sanser vi og tolker verden rundt oss?',
  estimatedMinutes: 22,
  competenceGoals: [
    'utforske og gjoere rede for hvordan persepsjon virker inn paa menneskets forstaaelse av seg selv og omverdenen',
  ],
  content: [
    {
      id: 'psy1-3-1-intro',
      type: 'text',
      content: `# Persepsjon

Hver dag bombarderes vi med millioner av sanseinntrykk. Lys treffer netthinnen, lydbølger vibrerer i øret, kjemiske molekyler stimulerer lukt- og smakssansene. Men hvordan blir disse fysiske signalene til den rike opplevelsen av verden vi har? Dette er persepsjonens mysterium.

Persepsjon er ikke bare passiv registrering av sanseinntrykk - det er en aktiv konstruksjon hvor hjernen tolker, organiserer og gir mening til sanseinformasjonen. Det vi "ser" er ikke bare det som er der, men ogsaa det hjernen forventer aa se basert paa tidligere erfaringer.`,
    },
    {
      id: 'psy1-3-1-def-1',
      type: 'definition',
      title: 'Sensasjon vs. Persepsjon',
      content: `**Sensasjon** er den fysiologiske prosessen der sanseorganene registrerer stimuli fra omgivelsene og omdanner dem til nervesignaler.

**Persepsjon** er den psykologiske prosessen der hjernen tolker, organiserer og gir mening til sanseinformasjonen.

**Eksempel:** Naar lys i bestemte bølgelengder treffer øyet ditt, er det sensasjon. Naar hjernen tolker disse signalene og du "ser" en rød rose, er det persepsjon.`,
    },
    {
      id: 'psy1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En person lukter paa en sitron. Hvilken prosess beskriver nar kjemiske molekyler fra sitronen binder seg til reseptorer i nesen?',
        options: [
          { id: 'a', text: 'Persepsjon', isCorrect: false },
          { id: 'b', text: 'Sensasjon', isCorrect: true },
          { id: 'c', text: 'Kognisjon', isCorrect: false },
          { id: 'd', text: 'Tolkning', isCorrect: false },
        ],
        solution: 'Sensasjon er den fysiologiske prosessen der sanseorganene registrerer stimuli. Naar kjemiske molekyler binder seg til reseptorer, er det den rene sansemessige registreringen - før hjernen har tolket signalene.',
      },
    },
    {
      id: 'psy1-3-1-def-2',
      type: 'definition',
      title: 'Bottom-up og top-down prosessering',
      content: `**Bottom-up prosessering** (nedenfra-og-opp) starter med sansedataene. Vi bygger forstaelsen fra de minste detaljene opp til en helhetlig oppfatning. Dette skjer naar vi møter noe helt nytt og ukjent.

**Top-down prosessering** (ovenfra-og-ned) starter med kunnskap, forventninger og tidligere erfaringer. Vi bruker det vi allerede vet til aa tolke sanseinformasjonen raskt.

I virkeligheten bruker vi alltid en kombinasjon av begge prosessene.`,
    },
    {
      id: 'psy1-3-1-example-1',
      type: 'example',
      title: 'Les dette:',
      problem: 'SE PÅ TEKSTEN: "TH3 M1ND 1S 4M4Z1NG"\n\nDu kunne sannsynligvis lese denne teksten selv om flere bokstaver er byttet ut med tall. Hvorfor?',
      solution: `Dette er et eksempel paa top-down prosessering. Selv om sanseinformasjonen (bokstavene) er ufullstendig eller feil, bruker hjernen:

1. **Tidligere erfaring** med aa lese engelsk
2. **Kontekst** - vi vet dette er en setning
3. **Forventninger** om hva ord pleier aa bety

Hjernen "fyller ut" det som mangler basert paa hva den forventer aa se. Dette gjør lesing raskere, men kan ogsaa føre til at vi overser skrivefeil.`,
    },
    {
      id: 'psy1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom bottom-up og top-down prosessering med et eksempel fra ditt eget liv.',
        hints: [
          'Tenk paa en gang du møtte noe helt nytt (bottom-up)',
          'Tenk paa en gang du gjenkjente noe kjent raskt (top-down)',
        ],
        solution: `Eksempel: Første gang jeg saa et schackbrett (bottom-up): Jeg maatte studere hver rute, telle dem, forstaa mønsteret fra bunnen av. Etter aa ha spilt schack en stund (top-down): Jeg ser umiddelbart et schackbrett og vet hvor hver brikke skal staa, uten aa telle rutene.

Bottom-up: Bygger forstaaelse fra grunnleggende sansedata
Top-down: Bruker erfaring og forventninger til rask gjenkjenning`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-1-def-3',
      type: 'definition',
      title: 'Gestaltprinsippene',
      content: `Gestaltpsykologene viste at hjernen organiserer sanseinntrykk i meningsfulle mønstre. Vi ser helheter, ikke bare individuelle elementer. Viktige prinsipper:

**1. Nærhet (Proximity):** Elementer som er nær hverandre oppfattes som en gruppe.

**2. Likhet (Similarity):** Lignende elementer grupperes sammen (farge, form, størrelse).

**3. Lukking (Closure):** Vi "fyller inn" manglende deler for aa se komplette figurer.

**4. Kontinuitet (Continuity):** Vi foretrekker aa se glatte, sammenhengende linjer fremfor braa endringer.

**5. Figur-grunn:** Vi organiserer visuell informasjon i figurer (forgrunn) og bakgrunn.`,
    },
    {
      id: 'psy1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Du ser paa en rekke stjerner paa himmelen. Plutselig ser du at noen stjerner danner "Karlsvogna". Hvilket gestaltprinsipp bruker du?',
        options: [
          { id: 'a', text: 'Nærhet - stjernene er nær hverandre', isCorrect: true },
          { id: 'b', text: 'Likhet - stjernene er like', isCorrect: false },
          { id: 'c', text: 'Lukking - du fyller inn manglende deler', isCorrect: false },
          { id: 'd', text: 'Kontinuitet - du følger en linje', isCorrect: false },
        ],
        solution: 'Nærhetsprinsippet gjør at vi grupperer stjerner som er relativt nær hverandre til mønstre og konstellasjoner. Selv om det er mange andre stjerner paa himmelen, ser vi de nærmeste som en gruppe.',
      },
    },
    {
      id: 'psy1-3-1-def-4',
      type: 'definition',
      title: 'Perseptuell konstans',
      content: `**Perseptuell konstans** er evnen til aa oppfatte objekter som uendrede selv om sanseinntrykket endres.

**Størrelseskonstans:** En person som gaar bort fra deg blir ikke mindre, selv om bildet paa netthinnen blir mindre.

**Formkonstans:** En dør er fortsatt rektangulær selv naar den er aapen og danner et trapes paa netthinnen.

**Fargekonstans:** En hvit skjorte er hvit baade i sollys og innendørs, selv om bølgelengdene som reflekteres er forskjellige.

**Lysstyrkekonstans:** Kullfargen paa papir ser svart ut baade i sterkt og svakt lys.

Perseptuell konstans gjør verden forutsigbar og stabil.`,
    },
    {
      id: 'psy1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er perseptuell konstans viktig for aa fungere i hverdagen? Gi minst to konkrete eksempler.',
        hints: [
          'Hva ville skjedd hvis størrelseskonstans ikke fantes?',
          'Tenk paa hvordan du gjenkjenner objekter fra forskjellige vinkler',
        ],
        solution: `Perseptuell konstans er kritisk fordi:

1. **Gjenkjenning:** Uten formkonstans maatte vi lære paa nytt hvordan hver gjenstand ser ut fra hver vinkel. En bil sett fra siden, forfra og ovenfra ville vært tre forskjellige objekter.

2. **Navigasjon:** Størrelseskonstans lar oss vurdere avstander korrekt. Naar vi ser en bil langt borte, forstaar vi at den er normal størrelse men langt unna - ikke en liten lekebil.

3. **Kommunikasjon:** Fargekonstans lar oss beskrive farger paalitelig ("den røde bilen") selv om lysforholdene varierer.

Uten perseptuell konstans ville verden virke kaotisk og uforutsigbar.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-1-def-5',
      type: 'definition',
      title: 'Optiske illusjoner',
      content: `**Optiske illusjoner** oppstaar naar persepsjonssystemet vårt blir "lurt" av sanseinformasjonen.

**Müller-Lyer illusjonen:** To like lange linjer ser forskjellige ut avhengig av pilretningen paa endene.

**Ponzo illusjonen:** To identiske linjer ser forskjellig lange ut paa grunn av dybdehintvink.

**Umulige figurer:** Penrose-trappen og Eschers tegninger viser konstruksjoner som ikke kan eksistere i virkeligheten.

Illusjoner avslører hvordan persepsjonssystemet vårt fungerer - de viser hvilke "snarveier" og antakelser hjernen bruker for aa tolke sanseinformasjon raskt.`,
    },
    {
      id: 'psy1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvorfor blir vi lurt av optiske illusjoner?',
        options: [
          { id: 'a', text: 'Fordi øynene våre ikke fungerer riktig', isCorrect: false },
          { id: 'b', text: 'Fordi hjernen bruker erfaring og kontekst til aa tolke sansedata', isCorrect: true },
          { id: 'c', text: 'Fordi vi ikke konsentrerer oss godt nok', isCorrect: false },
          { id: 'd', text: 'Fordi illusjonene inneholder skjulte budskap', isCorrect: false },
        ],
        solution: 'Illusjoner oppstaar fordi persepsjonssystemet vårt bruker "snarveier" basert paa erfaring og kontekst. For eksempel tolker vi perspektiv og dybde automatisk basert paa hva vi har lært. Naar denne automatiske tolkningen møter kunstige stimuli, kan den feile - men det er nettopp disse "snarveiene" som gjør oss i stand til aa oppfatte verden raskt og effektivt til vanlig.',
      },
    },
    {
      id: 'psy1-3-1-def-6',
      type: 'definition',
      title: 'Kulturelle forskjeller i persepsjon',
      content: `Persepsjon er ikke bare biologisk - kulturen vaar paavirker hvordan vi tolker sanseinntrykk.

**Forskning viser:**

- **Carpentered world hypothesis:** Folk fra kulturer med mange rette vinkler og bygninger (vestlige) er mer utsatt for Müller-Lyer illusjonen enn folk fra kulturer med runde hytter.

- **Holistisk vs. analytisk persepsjon:** Øst-asiatiske kulturer fokuserer mer paa kontekst og relasjoner (helhet), mens vestlige kulturer fokuserer mer paa individuelle objekter (detaljer).

- **Fargekategorier:** Forskjellige spraak deler opp fargespekteret ulikt, noe som paavirker hvordan vi oppfatter og husker farger.

Dette viser at persepsjon er formet av baade biologi og kultur.`,
    },
    {
      id: 'psy1-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'En forsker viser et bilde av en fisk omgitt av andre fisker til deltakere fra Japan og USA. Japanske deltakere husker mer om bakgrunnen, mens amerikanske husker mer om den sentrale fisken. Forklar dette funnet ved hjelp av kulturelle forskjeller i persepsjon.',
        hints: [
          'Tenk paa holistisk vs. analytisk persepsjon',
          'Hvordan kan kultur pavirke hva vi fokuserer paa?',
        ],
        solution: `Dette er et eksempel paa forskjellen mellom holistisk og analytisk persepsjon:

**Holistisk persepsjon (Japan):**
- Fokuserer paa kontekst og relasjoner
- Ser helheten og hvordan elementer haenger sammen
- Oppmerksomhet spredes til bakgrunn og omgivelser
- Kulturell verdi paa sammenheng og harmoni

**Analytisk persepsjon (USA):**
- Fokuserer paa individuelle objekter
- Trekker objekter ut fra konteksten
- Oppmerksomhet sentreres om hovedobjektet
- Kulturell verdi paa individualitet og agens

Kulturell sosialisering lærer oss forskjellige "oppmerksomhetsstiler" som paavirker baade hva vi legger merke til og hva vi husker senere.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psy1-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Persepsjon er langt mer enn passiv registrering av sanseinntrykk. Det er en aktiv konstruksjon hvor hjernen tolker og organiserer informasjon basert paa:

- **Bottom-up prosessering:** Bygger forstaaelse fra sansedataene
- **Top-down prosessering:** Bruker erfaring og forventninger
- **Gestaltprinsipper:** Organiserer sanseinntrykk i meningsfulle mønstre
- **Perseptuell konstans:** Holder verden stabil trass endrede sanseinntrykk
- **Kulturell kontekst:** Former hvordan vi tolker og forstaar

Persepsjonssystemet vårt er optimalisert for rask og effektiv tolkning, men kan derfor ogsaa bli lurt av illusjoner. Aa forstaa persepsjon hjelper oss aa forstaa hvordan vi konstruerer vår opplevelse av virkeligheten.`,
    },
    {
      id: 'psy1-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kunstner lager et maleri som ser helt annerledes ut avhengig av om du staar nær eller langt unna. Bruk minst tre begreper fra kapittelet til aa forklare hvordan persepsjonssystemet vårt kan oppleve samme fysiske objekt paa forskjellige maater.',
        hints: [
          'Tenk paa bottom-up vs. top-down',
          'Hva med gestaltprinsipper?',
          'Hvordan paavirker avstand det vi oppfatter?',
        ],
        solution: `Kunstverket utnytter flere aspekter ved persepsjonssystemet:

**1. Bottom-up vs. top-down:**
Nært: Bottom-up dominerer - vi ser individuelle penselstrøk, farger og detaljer.
Langt: Top-down dominerer - hjernen tolker mønsteret som en helhetlig figur basert paa erfaring.

**2. Gestaltprinsipper:**
- Nærhetsprinsippet: Paa avstand grupperes penselstrøk til større enheter
- Lukkingsprinsippet: Hjernen fyller inn mellomrom for aa skape komplette figurer
- Figur-grunn: Paa avstand organiseres maleriet i forgrunn og bakgrunn

**3. Perseptuell tolkning:**
Samme fysiske stimuli (lys reflektert fra lerretet) gir forskjellig perseptuell opplevelse fordi hjernen aktivt tolker informasjonen ulikt basert paa kontekst (avstand, synsvinkel).

Dette viser at persepsjon ikke er en kopi av virkeligheten, men en konstruksjon.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_PSYKOLOGI_1_3_2: TextbookChapter = {
  id: 'psykologi-1-3-2',
  courseId: 'psykologi-1',
  chapterNumber: '3.2',
  title: 'Oppmerksomhet',
  description: 'Hva bestemmer hva vi legger merke til?',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og gjoere rede for hvordan persepsjon og kognisjon virker inn paa menneskets forstaaelse av seg selv og omverdenen',
  ],
  content: [
    {
      id: 'psy1-3-2-intro',
      type: 'text',
      content: `# Oppmerksomhet

Akkurat naa leser du disse ordene. Men la merke til: Kjenner du stolen du sitter paa? Lyder rundt deg? Din egen pust? I hvert øyeblikk er vi omgitt av tusenvis av sanseinntrykk, men vi er kun bevisste paa en brøkdel av dem.

Oppmerksomhet er den kognitive prosessen som velger ut hva vi skal fokusere paa. Det er som en lyskaster i bevisstheten - det den belyser blir klart og tydelig, mens resten forblir i mørket. Men hvordan fungerer denne lyskasteren, og kan vi kontrollere den?`,
    },
    {
      id: 'psy1-3-2-def-1',
      type: 'definition',
      title: 'Selektiv oppmerksomhet',
      content: `**Selektiv oppmerksomhet** er evnen til aa fokusere paa ett stimulus mens man ignorerer andre.

Vi kan ikke behandle all sanseinformasjon samtidig. Hjernen maa velge hva som er viktig. Selektiv oppmerksomhet fungerer som et filter som slipper igjennom relevant informasjon mens irrelevant informasjon blokkeres.

**Egenskaper:**
- **Begrenset kapasitet:** Vi kan bare fokusere paa en brøkdel av sanseinntrykk
- **Fleksibel:** Vi kan flytte oppmerksomheten vilkaarlig eller automatisk
- **Ubevisst:** Mye av filtreringen skjer uten at vi er klar over det`,
    },
    {
      id: 'psy1-3-2-def-2',
      type: 'definition',
      title: 'Cocktailparty-effekten',
      content: `**Cocktailparty-effekten** viser hvordan selektiv oppmerksomhet fungerer:

Paa en fest med mange samtaler samtidig, kan du fokusere paa én person og "filtrere bort" de andre stemmene. Men hvis noen nevner navnet ditt paa andre siden av rommet, legger du umiddelbart merke til det.

Dette viser:
1. Vi filtrerer aktivt bort irrelevant informasjon
2. Vi overvåker likevel ubevisst for viktig informasjon (navn, fare)
3. Oppmerksomheten kan raskt omdirigeres

**Colin Cherry** (1953) var første til aa studere dette systematisk ved aa la deltakere høre forskjellige budskap i hvert øre samtidig.`,
    },
    {
      id: 'psy1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Du sitter paa et bibliotek og leser. Plutselig hører du noen si navnet ditt, selv om du ikke har vært oppmerksom paa samtaler rundt deg. Dette er et eksempel paa:',
        options: [
          { id: 'a', text: 'Delt oppmerksomhet', isCorrect: false },
          { id: 'b', text: 'Cocktailparty-effekten', isCorrect: true },
          { id: 'c', text: 'Inattentional blindness', isCorrect: false },
          { id: 'd', text: 'Change blindness', isCorrect: false },
        ],
        solution: 'Dette er cocktailparty-effekten. Selv om du aktivt filtrerer bort bakgrunnsstøy for aa fokusere paa lesing, overvåker hjernen ubevisst for personlig relevant informasjon (som ditt navn) og kan raskt omdirigere oppmerksomheten naar slik informasjon oppdages.',
      },
    },
    {
      id: 'psy1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv en situasjon fra ditt eget liv hvor du opplevde cocktailparty-effekten. Forklar hvordan din oppmerksomhet ble omdirigert.',
        hints: [
          'Tenk paa situasjoner hvor du fokuserte paa noe, men plutselig la merke til noe annet',
          'Hva var det som fanget oppmerksomheten din?',
        ],
        solution: `Eksempel: Jeg satt paa bussen med hodetelefoner og hørte paa musikk. Jeg var fullstendig fordypet i musikken og tenkte paa andre ting. Plutselig hørte jeg moren min si navnet mitt - hun hadde gaatt forbi meg uten at jeg hadde sett henne.

**Forklaring:**
- Jeg filtrerte aktivt ut lyder fra bussen (selektiv oppmerksomhet)
- Hjernen overvåket likevel ubevisst for viktig informasjon
- Navnet mitt er høyt prioritert informasjon
- Oppmerksomheten ble automatisk omdirigert til morens stemme

Dette viser at oppmerksomhetssystemet balanserer mellom fokusert konsentrasjon og årvåkenhet for viktig informasjon.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-2-def-3',
      type: 'definition',
      title: 'Inattentional blindness',
      content: `**Inattentional blindness** (uoppmerksomhetsblindhet) er aa ikke legge merke til synlige objekter eller hendelser fordi oppmerksomheten er rettet andre steder.

**Den usynlige gorillaen (Simons & Chabris, 1999):**
Deltakere ble bedt om aa telle hvor mange ganger spillere i hvite trøyer kastet en basketball. Midt i videoen gikk en person i gorillakostyme inn i bildet, banket seg paa brystet og gikk ut. Bare 50% av deltakerne la merke til gorillaen!

**Forklaring:**
Naar oppmerksomheten er fullt opptatt med en oppgave (telle kast), har vi ikke kognitiv kapasitet til aa behandle annen informasjon - selv om den er rett foran øynene våre.`,
    },
    {
      id: 'psy1-3-2-example-1',
      type: 'example',
      title: 'Inattentional blindness i trafikken',
      problem: 'Mange bilulykker skjer fordi sjåfører "ikke saa" syklisten eller fotgjengeren. Hvordan kan inattentional blindness forklare slike ulykker?',
      solution: `**Scenario:** En bilist kjører ut fra en sidegate og ser etter biler i begge retninger. En syklist kommer, men bilisten kjører likevel ut og sier etterpaa: "Jeg saa han ikke!"

**Forklaring med inattentional blindness:**

1. **Fokusert søk:** Sjåføren leter spesifikt etter BILER (stor, farlig trussel)
2. **Begrenset kapasitet:** Oppmerksomheten er fullt opptatt med aa skanne etter biler
3. **Filtrering:** Hjernen filtrerer bort det som ikke matcher søkemålet (syklister, fotgjengere)
4. **Resultat:** Syklisten er fysisk synlig, men registreres ikke bevisst

**Løsning:** Sjåfører må aktivt søke etter ALLE trafikanter, ikke bare biler. "Se etter syklister" må være en eksplisitt del av søkemønsteret.`,
    },
    {
      id: 'psy1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilket utsagn beskriver BEST inattentional blindness?',
        options: [
          { id: 'a', text: 'Vi ser dårligere naar vi er trøtte', isCorrect: false },
          { id: 'b', text: 'Vi glemmer ting vi har sett', isCorrect: false },
          { id: 'c', text: 'Vi kan ikke se ting som er utenfor synsfeltet', isCorrect: false },
          { id: 'd', text: 'Vi kan se forbi synlige ting naar oppmerksomheten er opptatt', isCorrect: true },
        ],
        solution: 'Inattentional blindness handler om at vi kan unnlate aa registrere tydelig synlige stimuli naar oppmerksomheten vår er fokusert paa noe annet. Dette er ikke et sanseorgan-problem (øynene fungerer fint), men et oppmerksomhetsproblem - hjernen behandler ikke informasjonen fordi kapasiteten er opptatt.',
      },
    },
    {
      id: 'psy1-3-2-def-4',
      type: 'definition',
      title: 'Change blindness',
      content: `**Change blindness** er aa ikke legge merke til endringer i det visuelle miljøet, selv store endringer.

**Klassisk eksperiment:**
En person spør deg om veibeskrivelse. Mens dere snakker, kommer to arbeidere med en dør mellom dere. Bak døren bytter person! Rundt 50% legger ikke merke til at de naa snakker med en helt annen person.

**Hvorfor skjer dette?**
- Vi lagrer ikke detaljert visuell informasjon om alt vi ser
- Vi oppfatter mer enn vi faktisk husker
- Naar oppmerksomheten avbrytes (døren), går informasjon tapt
- Vi har en illusjon om aa se mer enn vi faktisk gjør

**Praktiske konsekvenser:**
- Vitner kan overse viktige detaljer
- Vi legger ikke merke til endringer i omgivelsene
- Viser begrensningene i visuell oppmerksomhet og hukommelse`,
    },
    {
      id: 'psy1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom inattentional blindness og change blindness. Gi et eksempel paa hver.',
        hints: [
          'Inattentional blindness: aa ikke se noe som er der',
          'Change blindness: aa ikke se en endring',
        ],
        solution: `**Inattentional blindness:**
- Ikke legge merke til synlige objekter fordi oppmerksomheten er opptatt
- Eksempel: Du teller antall kast i en video og ser ikke gorillaen som gaar forbi

**Change blindness:**
- Ikke legge merke til endringer i det visuelle miljøet
- Eksempel: En person du snakker med byttes ut, og du legger ikke merke til det

**Hovedforskjell:**
- Inattentional: Objektet er der hele tiden, men du ser det ikke
- Change: Du kan ha sett objektet, men legger ikke merke til at det endrer seg

**Fellesnevner:**
Begge viser at oppmerksomhet er begrenset og selektiv. Vi oppfatter mindre av verden enn vi tror.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-2-def-5',
      type: 'definition',
      title: 'Delt oppmerksomhet og multitasking',
      content: `**Delt oppmerksomhet** er aa prøve aa fokusere paa flere ting samtidig.

**Kan vi multitaske?**
Forskning viser at ekte multitasking (gjøre to kognitivt krevende oppgaver samtidig) er i praksis umulig. Det vi kaller "multitasking" er egentlig rask veksling mellom oppgaver - og dette har en kostnad:

**Kostnadene ved multitasking:**
1. **Switching cost:** Det tar tid aa bytte fokus (0,5-2 sekunder)
2. **Redusert kvalitet:** Begge oppgaver utføres dårligere
3. **Økt stress:** Konstant veksling er mentalt krevende
4. **Flere feil:** Detaljer blir oversett

**Unntak:** Automatiserte oppgaver kan kombineres (gaa og snakke), men to krevende oppgaver (kjøre bil og skrive SMS) går ikke.`,
    },
    {
      id: 'psy1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'En elev hevder at hun kan lese lekser og følge med paa en serie samtidig uten at det paavirker laeringen. Hva sier forskning om dette?',
        options: [
          { id: 'a', text: 'Dette er mulig for personer med god konsentrasjonsevne', isCorrect: false },
          { id: 'b', text: 'Begge oppgaver blir utført dårligere enn om de gjøres hver for seg', isCorrect: true },
          { id: 'c', text: 'Dette er mulig hvis serien er paa et spraak du ikke forstaar', isCorrect: false },
          { id: 'd', text: 'Multitasking forbedrer hjernekapasiteten over tid', isCorrect: false },
        ],
        solution: 'Forskning viser klart at aa lese (kognitivt krevende) og følge en serie (ogsaa kognitivt krevende) ikke kan gjøres effektivt samtidig. Det som skjer er rask veksling mellom oppgavene, og begge lider: laeringen blir overflatisk og du mister viktige deler av serien. Folk som tror de er gode multitaskere, presterer faktisk DÅRLIGERE enn andre i kontrollerte studier.',
      },
    },
    {
      id: 'psy1-3-2-def-6',
      type: 'definition',
      title: 'Oppmerksomhet og teknologi',
      content: `**Digital distraksjon** er en av vår tids største utfordringer for oppmerksomhet:

**Smartphones og oppmerksomhet:**
- **Notification-effekten:** Selv bare nærvær av telefon reduserer kognitiv kapasitet
- **Task-switching:** Gjennomsnittet person sjekker telefonen 96 ganger per dag
- **Phantom vibrations:** 90% opplever "vibrasjon" som ikke er der
- **FOMO (Fear Of Missing Out):** Angst for aa gaa glipp av noe online

**Konsekvenser:**
- **Redusert dybdelæring:** Konstant avbrytelser hindrer dyp prosessering
- **Fragmentert oppmerksomhet:** Vi lærer aa "skumme" fremfor aa fokusere
- **Redusert impulskontroll:** Vanskeligere aa motstaa distraksjoner
- **Tretthet:** Mental utmattelse fra konstant veksling

**Løsninger:** Notifications av, telefon i annet rom, fokuserte arbeidsperioder.`,
    },
    {
      id: 'psy1-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Design et eksperiment som tester om tilstedeværelse av smarttelefon paavirker konsentrasjonen ved lesing, selv naar telefonen ikke brukes. Beskriv: deltakere, design, prosedyre, hva du maler, forventede resultater.',
        hints: [
          'Tenk paa en kontrollgruppe og eksperimentgruppe',
          'Hva skal du måle? Lesehastighet? Forståelse?',
          'Hvordan kan du sørge for at alle andre faktorer er like?',
        ],
        solution: `**Eksperiment: Telefonens tilstedeværelse og leseforståelse**

**Deltakere:** 60 studenter, tilfeldig fordelt i 3 grupper (20 i hver)

**Design:** Mellomgruppedesign med tre betingelser:
- Gruppe 1: Telefon paa bordet, synlig
- Gruppe 2: Telefon i lomme/veske
- Gruppe 3: Telefon i et annet rom (kontroll)

**Prosedyre:**
1. Alle leser samme tekst (5 sider) i 15 minutter
2. Umiddelbart etter: Multiple-choice test om innholdet (20 spørsmaal)
3. Ingen faar bruke telefonen under lesing

**Mål:**
- Poeng paa forståelsestest (0-20)
- Selvrapportert distraksjon (skala 1-10)
- Antall ganger blikket flyttet fra teksten (observasjon)

**Forventede resultater:**
Gruppe 3 (telefon borte) scorer høyest paa forståelse, lavest paa distraksjon. Gruppe 1 (telefon synlig) scorer lavest. Dette ville støtte hypotesen om at bare tilstedeværelse av telefon bruker kognitiv kapasitet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psy1-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

Oppmerksomhet er en begrenset ressurs som bestemmer hva vi er bevisste paa:

- **Selektiv oppmerksomhet:** Vi filtrerer bort det meste av sanseinntrykk
- **Cocktailparty-effekten:** Vi overvåker likevel for viktig informasjon
- **Inattentional blindness:** Vi kan se forbi synlige ting naar fokusert paa noe annet
- **Change blindness:** Vi legger ikke merke til endringer vi ikke forventer
- **Multitasking:** Faktisk "task-switching" som reduserer prestasjonen
- **Digital distraksjon:** Teknologi utfordrer oppmerksomheten konstant

Aa forstaa oppmerksomhetens begrensninger hjelper oss aa organisere livet for bedre fokus og læring.`,
    },
    {
      id: 'psy1-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En lærer hevder at elevene kan "trene opp" evnen til multitasking ved aa øve paa aa gjøre flere ting samtidig. Evaluer dette paastanden kritisk basert paa forskning om oppmerksomhet. Er det noe sant i paastanden, eller er den helt feil?',
        hints: [
          'Hva sier forskning om multitasking-evne?',
          'Kan noen oppgaver automatiseres?',
          'Hva er forskjellen paa automatiserte og kognitivt krevende oppgaver?',
        ],
        solution: `**Kritisk evaluering:**

**Paastanden er i hovedsak feil, men med viktige nyanser:**

**Mot paastanden:**
1. **Begrenset kapasitet:** Oppmerksomhet er biologisk begrenset. Vi kan ikke "utvide" kapasiteten gjennom trening.
2. **Ingen "multitasking-superkraft":** Forskning (Ophir et al., 2009) viser at folk som multitasker mye faktisk presterer DÅRLIGERE paa oppmerksomhetsoppgaver enn andre.
3. **Task-switching forblir kostbart:** Switching cost forsvinner ikke med trening.

**Nyanse - delvis sant:**
1. **Automatisering:** Vi kan automatisere enkelte oppgaver (kjøre bil, gaa) slik at de krever mindre oppmerksomhet. Da kan de kombineres med andre oppgaver.
2. **Bedre prioritering:** Vi kan lære aa VELGE hva som fortjener oppmerksomhet, men ikke prosessere mer samtidig.

**Konklusjon:**
Laereren tar feil om man kan "trene opp multitasking" for kognitivt krevende oppgaver. Det eneste som fungerer er aa: 1) Automatisere enkeltoppgaver gjennom massetrening, eller 2) Lære aa fokusere paa EN ting av gangen mer effektivt. Paradoksalt nok er den beste "oppmerksomhetstreningen" aa UNNGAA multitasking.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_PSYKOLOGI_1_3_3: TextbookChapter = {
  id: 'psykologi-1-3-3',
  courseId: 'psykologi-1',
  chapterNumber: '3.3',
  title: 'Hukommelse',
  description: 'Hvordan husker vi, og hvorfor glemmer vi?',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjoere rede for hukommelse og reflektere over hva som kan paavirke hukommelsesprosessen',
  ],
  content: [
    {
      id: 'psy1-3-3-intro',
      type: 'text',
      content: `# Hukommelse

Uten hukommelse ville vi ikke være oss selv. Hver morgen ville vi vaakne uten aa vite hvem vi er, hva vi kan, eller hvem vi elsker. Hukommelse er fundamentet for identitet, læring og erfaring.

Men hukommelse er ikke som en videoopptaker som lagrer alt nøyaktig. Det er en aktiv, konstruktiv prosess hvor vi koder, lagrer og henter frem informasjon - og paa hver stage kan noe gaa galt. La oss utforske dette fascinerende systemet.`,
    },
    {
      id: 'psy1-3-3-def-1',
      type: 'definition',
      title: 'Tre hukommelsessystemer',
      content: `Hukommelse består av tre hovedsystemer som prosesserer informasjon i sekvens:

**1. Sensorisk hukommelse (0,5-3 sekunder)**
- Kort lagring av sanseinntrykk
- Enorm kapasitet, men raask nedbrytning
- Eksempel: Visuell "etterbilde" av lys du nettopp saa

**2. Korttidshukommelse (15-30 sekunder)**
- Begrenset kapasitet: 7±2 enheter (Millers lov)
- Bevisst oppmerksomhet
- Eksempel: Telefonnummer du nettopp hørte

**3. Langtidshukommelse (ubestemt)**
- Praktisk ubegrenset kapasitet
- Relativt permanent lagring
- Eksempel: Navn paa barndomsvenner, sykkelkjøring, hovedstaden i Norge`,
    },
    {
      id: 'psy1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Du ser et telefonnummer paa en plakat i 2 sekunder. Naar du prøver aa slaa det etter 20 sekunder, husker du ikke alle sifrene. Hvilket hukommelsessystem sviktet?',
        options: [
          { id: 'a', text: 'Sensorisk hukommelse', isCorrect: false },
          { id: 'b', text: 'Korttidshukommelse', isCorrect: true },
          { id: 'c', text: 'Langtidshukommelse', isCorrect: false },
          { id: 'd', text: 'Arbeidshukommelse', isCorrect: false },
        ],
        solution: 'Korttidshukommelsen holder informasjon i 15-30 sekunder med begrenset kapasitet. Telefonnummeret kom inn i systemet (du saa det), men ble ikke lagret tilstrekkelig lenge eller overført til langtidshukommelse før det ble glemt. Sensorisk hukommelse varer bare noen sekunder, mens langtidshukommelse er mer permanent.',
      },
    },
    {
      id: 'psy1-3-3-def-2',
      type: 'definition',
      title: 'Arbeidshukommelse (Baddeley)',
      content: `**Arbeidshukommelse** er en utvidelse av korttidshukommelsesbegrepet. Det er ikke bare passiv lagring, men aktiv prosessering av informasjon.

**Baddeleys modell har fire komponenter:**

**1. Den sentrale styringsenheten** - Kontrollerer oppmerksomhet og koordinerer de andre systemene

**2. Fonologisk løkke** - Prosesserer språklig og auditiv informasjon
   - Eksempel: Repetering av telefonnummer for deg selv

**3. Visuospatial notatblokk** - Prosesserer visuelle og romlige bilder
   - Eksempel: Aa forestille seg veien hjem

**4. Episodisk buffer** - Integrerer informasjon fra ulike kilder og kobler til langtidshukommelse

Arbeidshukommelse er kritisk for resonnering, beslutninger og problemløsning.`,
    },
    {
      id: 'psy1-3-3-example-1',
      type: 'example',
      title: 'Arbeidshukommelse i bruk',
      problem: 'Du skal lage middag etter en oppskrift. Hvordan bruker du arbeidshukommelsen?',
      solution: `**Fonologisk løkke:**
- Leser ingrediensene høyt for deg selv: "200 gram mel, 3 egg, 2 dl melk..."
- Repeterer stegene mens du jobber

**Visuospatial notatblokk:**
- Visualiserer hvordan den ferdige retten skal se ut
- Husker hvor ingrediensene staar i kjøleskapet
- Forestiller deg rørebevegelsene

**Sentral styringsenhet:**
- Veksler oppmerksomhet mellom oppskriften og matlaging
- Bestemmer hva du skal gjøre først
- Monitorerer fremdriften

**Episodisk buffer:**
- Kobler med erfaring fra tidligere matlaging
- Integrerer visuell og verbal informasjon til en helhetlig plan

Arbeidshukommelse holder alt dette aktivt mens du arbeider - men blir lett overbelastet hvis for mye skjer samtidig!`,
    },
    {
      id: 'psy1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor det er vanskelig aa føre en komplisert samtale mens du kjører bil i tett trafikk. Bruk begrepet arbeidshukommelse.',
        hints: [
          'Hva krever begge aktiviteter av arbeidshukommelsen?',
          'Hva styrer den sentrale styringsenheten?',
        ],
        solution: `**Arbeidshukommelsens begrensning:**

Baade bilkjøring i tett trafikk og kompliserte samtaler krever arbeidshukommelse:

**Bilkjøring:**
- Visuospatial notatblokk: Spore andre biler, avstand, fartsgrenser
- Sentral styringsenhet: Beslutninger om filskift, bremsing
- Episodisk buffer: Bruke erfaring til aa forutse andres handlinger

**Samtale:**
- Fonologisk løkke: Prosessere andres ord og formulere svar
- Sentral styringsenhet: Følge argumenter, strukturere tanker
- Episodisk buffer: Koble til relevant kunnskap

**Problem:**
Den sentrale styringsenheten har begrenset kapasitet. Naar baade kjøring og samtale krever oppmerksomhet, blir systemet overbelastet. Noe maa prioriteres - og ofte går det ut over trafikksikkerheten fordi samtalen "kidnapper" oppmerksomheten.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-3-def-3',
      type: 'definition',
      title: 'Koding til langtidshukommelse',
      content: `For at informasjon skal gaa fra korttidshukommelse til langtidshukommelse, maa den **kodes** (enkodes). Effektiviteten avhenger av hvordan:

**Repetisjon:**
- **Maintenance rehearsal:** Enkel repetisjon (lære telefonnummer utenat) - overflatisk
- **Elaborative rehearsal:** Koble til mening og eksisterende kunnskap - dyp prosessering

**Organisering:**
- **Chunking:** Gruppere informasjon i meningsfulle enheter
  - Eksempel: 4719363752 → 47-19-36-37-52 (norsk telefonnummer)
- **Hierarkier:** Organisere i kategorier og underkategorier

**Elaborering:**
- Koble ny informasjon til det du allerede vet
- Jo flere forbindelser, jo bedre huskes det
- Eksempel: Aa lære "Oslo grunnlagt 1048" - koble til kunnskap om vikingtid, norsk historie

**Visuell koding:**
- Bilder huskes bedre enn ord (dual-coding theory)
- Lage mentale bilder av abstrakte konsepter`,
    },
    {
      id: 'psy1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken kodingsstrategi vil være mest effektiv for aa huske at mitokondrier produserer energi i celler?',
        options: [
          { id: 'a', text: 'Lese setningen "mitokondrier produserer energi" 20 ganger', isCorrect: false },
          { id: 'b', text: 'Lage et bilde i hodet av mitokondrier som kraftverk inne i en celle', isCorrect: true },
          { id: 'c', text: 'Skrive ordet "mitokondrier" om og om igjen', isCorrect: false },
          { id: 'd', text: 'Prøve aa huske det uten noen spesiell strategi', isCorrect: false },
        ],
        solution: 'Alternativ b kombinerer flere effektive kodingsstrategier: visuell koding (bilde), elaborering (koble til konseptet "kraftverk"), og meningsfull prosessering (forstaa funksjonen). Dette skaper flere hukommelsesfoorbindelser enn enkel repetisjon, og gjør informasjonen lettere aa hente frem senere. Dual-coding theory viser at informasjon kodet baade verbalt og visuelt huskes best.',
      },
    },
    {
      id: 'psy1-3-3-def-4',
      type: 'definition',
      title: 'Eksplisitt vs. implisitt hukommelse',
      content: `Langtidshukommelse deles i to hovedtyper basert paa bevissthet:

**Eksplisitt hukommelse (deklarativ):**
Bevisst hukommelse - du vet at du husker

1. **Episodisk hukommelse:** Personlige opplevelser med tid og sted
   - Eksempel: Din første skoledag, hva du spiste til middag i gaar

2. **Semantisk hukommelse:** Fakta og konsepter uten personlig kontekst
   - Eksempel: Paris er hovedstad i Frankrike, 2+2=4

**Implisitt hukommelse (non-deklarativ):**
Ubevisst hukommelse - pavirker atferd uten at du er klar over det

1. **Prosedural hukommelse:** Ferdigheter og vaner
   - Eksempel: Sykle, binde skolisser, skrive paa tastatur

2. **Priming:** Tidligere eksponering paavirker respons
   - Eksempel: Raskere aa gjenkjenne ord du nylig har sett

3. **Klassisk betinging:** Lærte assosiasjoner
   - Eksempel: Å føle ubehag naar du hører tannlegesirene`,
    },
    {
      id: 'psy1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Klasifiser følgende minner som episodisk, semantisk eller prosedural: a) Hvordan man svømmer, b) Din 18-aarsdag, c) Norges nasjonaldag er 17. mai, d) Aa kjenne angst naar du hører brannalarm.',
        hints: [
          'Episodisk: Personlige opplevelser',
          'Semantisk: Fakta og konsepter',
          'Prosedural: Ferdigheter',
          'Noen kan være klassisk betinging',
        ],
        solution: `**Klassifisering:**

a) **Prosedural hukommelse** - Svømming er en motorisk ferdighet. Du kan ikke forklare lett hvordan du gjør det, du bare gjør det. Kroppen "husker" bevegelsene.

b) **Episodisk hukommelse** - Din 18-aarsdag er en spesifikk personlig opplevelse knyttet til tid og sted. Du husker hva som skjedde, hvem som var der, følelser.

c) **Semantisk hukommelse** - Dette er et faktum uten personlig kontekst. Du trenger ikke aa huske naar du lærte det eller hvor du var.

d) **Klassisk betinging (implisitt)** - Dette er en lært følelsesmessig respons. Brannalarmen (nøytral stimulus) har blitt assosiert med fare, saa du reagerer automatisk uten bevisst tanke.

Merk: Samme hendelse kan skape flere typer minner samtidig!`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-3-def-5',
      type: 'definition',
      title: 'Gjenfinning fra langtidshukommelse',
      content: `Aa hente informasjon fra langtidshukommelse kalles **gjenfinning** (retrieval). Suksess avhenger av:

**1. Encoding specificity:**
Kontekst under læring hjelper gjenfinning. Vi husker bedre naar gjenfinnelseskonteksten matcher kodingskonteksten.

**2. Retrieval cues (gjenfinnelseshintvink):**
- **Free recall:** Hente frem uten hintvink (essays paa eksamen)
- **Cued recall:** Hintvink hjelper (fyll-ut-oppgaver)
- **Recognition:** Gjenkjenne blant alternativer (flervalg)

Recognition er lettest, free recall vanskeligst.

**3. Kontekst-avhengig hukommelse:**
Vi husker bedre i samme fysiske miljø som vi lærte.

**4. Tilstands-avhengig hukommelse:**
Samme følelsesmessige eller fysiologiske tilstand hjelper gjenfinning.`,
    },
    {
      id: 'psy1-3-3-example-2',
      type: 'example',
      title: 'Kontekst-avhengig hukommelse: Dykkerstudien',
      problem: 'Godden & Baddeley (1975) lot dykkere lære ord baade under vann og paa land. Hva fant de?',
      solution: `**Eksperimentet:**
- Gruppe 1: Lærte under vann, testet under vann
- Gruppe 2: Lærte under vann, testet paa land
- Gruppe 3: Lærte paa land, testet paa land
- Gruppe 4: Lærte paa land, testet under vann

**Resultat:**
Grupper som ble testet i samme miljø som de lærte (1 og 3) husket 40% MER enn grupper med miljøskifte (2 og 4).

**Forklaring:**
Konteksten (lyder, lys, følelsen av vann) blir kodet sammen med informasjonen. Naar konteksten matcher, fungerer den som retrieval cues som gjør det lettere aa hente informasjonen.

**Praktisk anvendelse:**
Dette er IKKE et argument for aa studere til eksamen under vann! Men det forklarer hvorfor:
- Det kan være vanskelig aa huske noe du lærte hjemme naar du er paa skolen
- Aa studere i samme rom som eksamen kan hjelpe litt
- Aa lære under mange forskjellige forhold gjør hukommelsen mindre kontekst-avhengig`,
    },
    {
      id: 'psy1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Du har glemt navnet paa en skuespiller. Vennen din sier "Han spilte i den filmen med biler og action", og plutselig husker du. Dette er et eksempel paa:',
        options: [
          { id: 'a', text: 'Free recall', isCorrect: false },
          { id: 'b', text: 'Recognition', isCorrect: false },
          { id: 'c', text: 'Cued recall', isCorrect: true },
          { id: 'd', text: 'Prosedural hukommelse', isCorrect: false },
        ],
        solution: 'Dette er cued recall. Du klarte ikke aa hente navnet uten hjelp (free recall sviktet), men hintvink om konteksten ("filmen med biler og action") ga nok aktivering til aa utløse hukommelsen. Retrieval cues fungerer som snarvei til den lagrede informasjonen ved aa aktivere relaterte assosiasjoner.',
      },
    },
    {
      id: 'psy1-3-3-def-6',
      type: 'definition',
      title: 'Testing-effekten',
      content: `**Testing-effekten** viser at aktiv gjenfinning styrker hukommelse mer enn passiv repetisjon.

**Forskning (Roediger & Karpicke, 2006):**
Studenter som testet seg selv husket 50% MER etter en uke enn studenter som bare leste teksten flere ganger - selv om testing-gruppen brukte mindre tid!

**Hvorfor fungerer det?**
1. **Aktiv prosessering:** Tvinger hjernen til aa rekonstruere informasjon
2. **Feedback:** Avslører hva du ikke vet
3. **Elaborering:** Skaper flere retrieval pathways
4. **Desirable difficulties:** Vanskeligheter som utfordrer systemet gjør læring dypere

**Praktisk tips:**
- Quiz deg selv fremfor aa lese om igjen
- Flashcards med aktiv gjenfinning
- Forklar konsepter for andre
- Skriv ned det du husker uten aa kikke i notater først`,
    },
    {
      id: 'psy1-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Design en studieplan for aa lære kapittel 3 i psykologi basert paa testing-effekten og andre hukommelsesprinsipper fra kapittelet. Forklar hvorfor hver del av planen vil være effektiv.',
        hints: [
          'Tenk paa aktiv gjenfinning vs. passiv lesing',
          'Hva med chunking og elaborering?',
          'Hvordan kan du bruke retrieval cues?',
        ],
        solution: `**Effektiv studieplan basert paa hukommelsesforskning:**

**Dag 1 - Første møte:**
1. Les kapittelet aktivt, lag overskrifter/spørsmaal (elaborative rehearsal)
2. Lag mentale bilder av nøkkelbegreper (visuell koding)
3. Organiser konseptene i mindmap (chunking og organisering)

**Dag 2 - Testing:**
4. UTEN aa se i boka: skriv ned alt du husker (testing-effekten, free recall)
5. Sjekk hva du manglet, fokuser paa det (feedback)
6. Lag flashcards for vanskelige konsepter (cued recall)

**Dag 3-5 - Fordelt praksis:**
7. Quiz deg selv hver dag (testing-effekten + spacing effect)
8. Forklar konseptene høyt for deg selv eller andre (elaborering)
9. Løs oppgaver som krever anvendelse (dyp prosessering)

**Dag 6 - Før eksamen:**
10. Test deg selv i lignende miljø som eksamen (kontekst-avhengig hukommelse)

**Hvorfor dette fungerer:**
- Aktiv gjenfinning > passiv lesing
- Flere kodingsstrategier skaper flere retrieval pathways
- Fordelt repetisjon gir bedre langtidshukommelse enn massiv cramming
- Variasjon i øvingstype gjør kunnskapen mer fleksibel`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psy1-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

Hukommelse er ikke ett system, men flere samarbeidende systemer:

**Tre hukommelsessystemer:**
- Sensorisk (< 3 sek) → Korttidshukommelse (< 30 sek) → Langtidshukommelse (permanent)
- Arbeidshukommelse prosesserer aktivt informasjon

**Koding til langtidshukommelse:**
- Elaborativ rehearsal bedre enn maintenance rehearsal
- Chunking, organisering, elaborering, visuell koding
- Jo dypere prosessering, jo bedre huskes det

**Typer langtidshukommelse:**
- Eksplisitt: Episodisk (opplevelser) og semantisk (fakta)
- Implisitt: Prosedural (ferdigheter), priming, betinging

**Gjenfinning:**
- Avhenger av retrieval cues og kontekst
- Recognition lettere enn recall
- Testing-effekten: Aktiv gjenfinning styrker hukommelse

Forstaaelse av hvordan hukommelse fungerer gir oss verktøy for aa lære mer effektivt.`,
    },
    {
      id: 'psy1-3-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En student leser samme kapittel 10 ganger rett før eksamen (cramming) og føler seg forberedt. En annen student leser det 3 ganger fordelt over to uker og tester seg selv mellom hver lesing. Bruk minst fem begreper fra kapittelet til aa forutsi og forklare hvem som vil prestere best paa eksamen en uke senere.',
        hints: [
          'Tenk paa spacing effect vs. massed practice',
          'Hva med testing-effekten?',
          'Hvilken type koding bruker hver student?',
          'Hva skjer med informasjon i langtidshukommelse over tid?',
        ],
        solution: `**Prediksjon: Student 2 vil prestere betydelig bedre.**

**Forklaring med hukommelsesprinsipper:**

**Student 1 (cramming):**
1. **Maintenance rehearsal:** Enkel repetisjon gir overflatisk koding
2. **Massed practice:** All læring paa kort tid → svak konsolidering til langtidshukommelse
3. **Mangel paa gjenfinning:** Informasjon går inn, men øves ikke aa hentes ut
4. **Ingen spacing:** Hukommelsessporet styrkes ikke over tid
5. **Illusorisk flyt:** Gjenkjenning (recognition) under lesing føles som læring, men recall svikter senere

**Student 2 (fordelt + testing):**
1. **Elaborative rehearsal:** Aktiv testing krever dyp prosessering
2. **Spacing effect:** Fordelt repetisjon gir bedre langtidshukommelse
3. **Testing-effekten:** Hver gjenfinning styrker hukommelsessporet
4. **Konsolidering:** Tid mellom økter tillater hjernen aa konsolidere
5. **Retrieval practice:** Øver paa den prosessen som trengs paa eksamen (recall, ikke recognition)

**Resultat en uke senere:**
Student 1 har glemt mesteparten (ingen konsolidering, svake spor). Student 2 husker godt fordi informasjonen er solid kodet i langtidshukommelse gjennom multiple gjenfinnelser og fordelt praksis.

**Praktisk laerdom:** "Cramming" føles effektivt paa kort sikt, men gir darlig langtidshukommelse. Fordelt repetisjon med testing er overlegent.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_PSYKOLOGI_1_3_4: TextbookChapter = {
  id: 'psykologi-1-3-4',
  courseId: 'psykologi-1',
  chapterNumber: '3.4',
  title: 'Glemsel og hukommelsesfeil',
  description: 'Hvorfor glemmer vi, og kan minner være falske?',
  estimatedMinutes: 23,
  competenceGoals: [
    'gjoere rede for hukommelse og reflektere over hva som kan paavirke hukommelsesprosessen',
  ],
  content: [
    {
      id: 'psy1-3-4-intro',
      type: 'text',
      content: `# Glemsel og hukommelsesfeil

"Jeg var HELT sikker paa at jeg husket det!" Hvor ofte har vi ikke sagt dette - før vi oppdager at minnet vårt var feil? Eller vi har glemt noe vi var sikre paa at vi aldri ville glemme?

Glemsel er ikke bare svikt i systemet. Ofte er det adaptivt - aa huske ALT ville være overveldende. Men hukommelsen kan ogsaa feile paa urovekkende maater: Vi kan huske ting som aldri skjedde, og glemme ting som var viktige. La oss utforske hvorfor.`,
    },
    {
      id: 'psy1-3-4-def-1',
      type: 'definition',
      title: 'Ebbinghaus\' glemselskurve',
      content: `**Hermann Ebbinghaus** (1885) var den første som studerte glemsel systematisk.

**Eksperimentet:**
Han lærte seg meningsløse stavelser (som "XOQ", "JIH") og testet hvor mye han husket over tid.

**Glemselskurven viser:**
- **Første time:** Tap av ~50% av informasjon
- **Første dag:** Tap av ~70%
- **Første uke:** Kurven flater ut, ca. 80% glemt
- **Etter en maaned:** Lite mer glemmes

**Viktig funn:**
Glemsel skjer raskest rett etter læring. Men med hver repetisjon flater kurven ut - informasjonen blir mer stabil.

**Praktisk konsekvens:**
Rask repetisjon etter læring er kritisk. "Spacing effect" - fordelt repetisjon - motvirker glemselskurven effektivt.`,
    },
    {
      id: 'psy1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Basert paa Ebbinghaus\' glemselskurve, naar er det MEST kritisk aa repetere nytt materiale?',
        options: [
          { id: 'a', text: 'Etter en maaned', isCorrect: false },
          { id: 'b', text: 'Etter en uke', isCorrect: false },
          { id: 'c', text: 'Innen første dag', isCorrect: true },
          { id: 'd', text: 'Det spiller ingen rolle', isCorrect: false },
        ],
        solution: 'Glemselskurven er brattest den første dagen, med størst tap i den første timen. Derfor er rask repetisjon (innen timer eller dagen etter læring) mest kritisk for aa konsolidere informasjon til langtidshukommelse. Etter at kurven har flatet ut, er informasjonen mer stabil og krever mindre hyppig repetisjon.',
      },
    },
    {
      id: 'psy1-3-4-def-2',
      type: 'definition',
      title: 'Aarsaker til glemsel: Decay og interferens',
      content: `**1. Decay (nedbrytning):**
Hukommelsesspor svekkes over tid hvis de ikke brukes. Som en sti i skogen som gror igjen.

**Bevis:** Informasjon som ikke repeteres blir vanskeligere aa hente frem over tid.
**Problem:** Vanskelig aa skille fra interferens i forskning.

**2. Interferens:**
Ny eller gammel informasjon forstyrrer gjenfinning.

**Proaktiv interferens:**
GAMMEL informasjon forstyrrer NYTT.
- Eksempel: Gammelt telefonnummer "tar plassen" til nytt nummer

**Retroaktiv interferens:**
NY informasjon forstyrrer GAMMELT.
- Eksempel: Aa lære fransk etter spansk - ny grammatikk forstyrrer gammel

**Interferens er spesielt sterkt naar:**
- Informasjonen er lignende (to telefonnummer, to spraak)
- Læring skjer raskt etter hverandre
- Materialet ikke er godt konsolidert`,
    },
    {
      id: 'psy1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Du lærte spansk i tre aar. Naa begynner du med italiensk og oppdager at du blander sammen ord fra de to spraakene. Er dette proaktiv eller retroaktiv interferens? Forklar begge retninger.',
        hints: [
          'Proaktiv: Gammel → Ny',
          'Retroaktiv: Ny → Gammel',
          'Det kan være begge deler!',
        ],
        solution: `**Dette er faktisk BEGGE typer interferens:**

**Proaktiv interferens (spansk → italiensk):**
Gammel kunnskap (spansk) forstyrrer læring av ny kunnskap (italiensk).
- Eksempel: Du vil si "gracias" (spansk) men skal si "grazie" (italiensk)
- Spansk grammatikk-mønstre "blokkerer" italienske mønstre
- Du antar italienske ord fungerer som spanske ord

**Retroaktiv interferens (italiensk → spansk):**
Ny kunnskap (italiensk) forstyrrer gjenfinning av gammel kunnskap (spansk).
- Eksempel: Naar du prøver aa snakke spansk senere, kommer italienske ord
- Ny læring "overskriver" eller forstyrrer gamle hukommelsesspor
- Jo mer italiensk du lærer, jo vanskeligere blir det aa huske rent spansk

**Hvorfor skjer dette?**
Spansk og italiensk er lignende nok til aa aktivere overlappende nevrale nettverk, men forskjellige nok til aa skape forvirring. Dette er et klassisk eksempel paa at likhet øker interferens.

**Løsning:** Konsolider spansk godt før italiensk, eller sørg for klare forskjeller/kontekster mellom spraakene.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-4-def-3',
      type: 'definition',
      title: 'Retrieval failure og glemselens natur',
      content: `Mye "glemsel" er egentlig ikke at informasjonen er borte, men at vi ikke finner den.

**Retrieval failure:** Informasjon er lagret, men vi mangler riktige retrieval cues.

**"Tip-of-the-tongue" fenomenet:**
Du VET at du vet det (navnet, ordet), men klarer ikke aa hente det frem. Dette beviser at informasjonen er der - problemet er tilgang.

**Bevis for retrieval failure:**
- **Recognition vs. recall:** Du kan gjenkjenne (multiple choice) selv om du ikke kan huske fritt (essay)
- **Kontekst hjelper:** Aa gaa tilbake til stedet hvor du lærte noe kan plutselig utløse minnet
- **Cued recall:** Hintvink kan "laase opp" minner du trodde var glemt

**Implikasjon:**
Mye av det vi tror er glemt, er faktisk fortsatt lagret men utilgjengelig. Riktige cues kan reaktivere "glemte" minner.`,
    },
    {
      id: 'psy1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Du kan ikke huske navnet paa en person du møtte paa en fest. Men naar du ser ansiktet hennes paa et bilde, gjenkjenner du henne umiddelbart. Dette er et eksempel paa:',
        options: [
          { id: 'a', text: 'Decay - informasjonen er forsvunnet', isCorrect: false },
          { id: 'b', text: 'Interferens fra andre navn', isCorrect: false },
          { id: 'c', text: 'Retrieval failure - informasjonen er der men utilgjengelig', isCorrect: true },
          { id: 'd', text: 'Prosedural hukommelse', isCorrect: false },
        ],
        solution: 'Dette er retrieval failure. At du gjenkjenner ansiktet hennes beviser at informasjonen er lagret i langtidshukommelse. Problemet er ikke at minnet er borte (decay) eller blokkert (interferens i tradisjonell forstand), men at du mangler de riktige retrieval cues for aa hente frem navnet uten visuell hintvink. Bildet fungerer som en kraftig retrieval cue.',
      },
    },
    {
      id: 'psy1-3-4-def-4',
      type: 'definition',
      title: 'Falske minner og rekonstruksjon',
      content: `**Hukommelse er ikke en video-opptak - det er en REKONSTRUKSJON.**

**Elizabeth Loftus** revolusjonerte forstaaelsen av hukommelse ved aa vise at minner kan være falske eller endret.

**Klassiske eksperimenter:**

**1. Bilulykkesstudien (1974):**
Deltakere saa video av bilkrasj. Spørsmaal:
- Gruppe 1: "Hvor fort kjørte bilene naar de TRAFF hverandre?"
- Gruppe 2: "Hvor fort kjørte bilene naar de KNUSTE hverandre?"

Gruppe 2 estimerte høyere fart OG rapporterte (feilaktig) at de saa knust glass - selv om det ikke var noe glass!

**2. Tapt paa kjøpesenteret (1995):**
25% av deltakere "husket" en falsk barndomshendelse (aa være tapt paa kjøpesenter) plantet av forskere.

**Implikasjon:**
Minner er formbare og kan endres av:
- Ordvalg i spørsmaal
- Informasjon etter hendelsen
- Repeterte spørsmaal
- Sosiale forventninger`,
    },
    {
      id: 'psy1-3-4-example-1',
      type: 'example',
      title: 'Falske minner i rettssystemet',
      problem: 'En politietterforsker viser et vitne 6 bilder og spør: "Er det noen av disse du gjenkjenner som ran-mannen?" Hvordan kan dette skape falske minner?',
      solution: `**Problemene med identifikasjonsprosedyren:**

**1. Suggestion:**
Spørsmålet antyder at ran-mannen ER blant bildene. Vitnet føler press om aa velge noen.

**2. Falsk bekreftelse:**
Hvis politiet reagerer positivt naar vitnet peker paa en person, styrkes det "minnet" - selv om det var et gjetning.

**3. Memory conformity:**
Vitnet tilpasser minnet til forventningene i situasjonen.

**4. Source confusion:**
Over tid husker vitnet ansiktet fra bildene, ikke fra ranet. Men kilden til minnet glemmes - vitnet tror de husker fra ranet.

**5. Commitment:**
Etter aa ha identifisert noen blir vitnet mer og mer sikker over tid, selv om den opprinnelige identifikasjonen var usikker.

**Bedre prosedyre:**
- "Ran-mannen kan eller kan ikke være blant disse bildene"
- Vis bilder ett om gangen
- Politiet som viser bilder skal ikke vite hvem som er mistenkt
- Registrer vitnets sikkerhet umiddelbart

**Skremmende fakta:** DNA-bevis har frikjent hundrevis av uskyldige dømt paa feilaktig vitneidentifikasjon.`,
    },
    {
      id: 'psy1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor vitners sikkerhet ("Jeg er 100% sikker!") ikke er en god indikator paa nøyaktighet i minner. Bruk Loftus\' forskning.',
        hints: [
          'Kan sikkerhet øke over tid selv om minnet er feil?',
          'Hva skjer med minner naar vi repeterer dem?',
        ],
        solution: `**Hvorfor sikkerhet ≠ nøyaktighet:**

**1. Post-event informasjon:**
Loftus viste at informasjon ETTER hendelsen integreres i minnet. Vitnet "husker" detaljer de faktisk hørte fra andre, media, eller politiets spørsmaal.

**2. Repetisjon styrker tillit:**
Hver gang vi henter frem et minne, rekonstruerer vi det. Jo oftere vi forteller historien, jo mer sikre blir vi - selv om det opprinnelige minnet var usikkert eller feil.

**3. Source confusion:**
Vi glemmer HVOR vi fikk informasjonen fra. "Saa jeg det selv, eller hørte jeg det fra noen?" Sikkerhet øker, men kilden er feil.

**4. Sosial bekreftelse:**
Hvis politiet reagerer positivt eller andre bekrefter vaar versjon, blir vi mer sikre. Dette endrer ikke fakta, bare vaar subjektive opplevelse.

**5. Commitment bias:**
Etter aa ha forpliktet oss til en versjon (identifisert noen), er vi motivert til aa beskytte den beslutningen. Sikkerhet øker for aa redusere kognitiv dissonans.

**Konklusjon:**
Loftus' forskning viser at vitnesikkerhet er et daarlig maal paa nøyaktighet. Minner er rekonstruksjoner som endres over tid - men vaar TILTRO til dem øker. Dette har alvorlige implikasjoner for rettssystemet.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-4-def-5',
      type: 'definition',
      title: 'Undertrykte minner - debatten',
      content: `**Kan traumatiske minner bli "undertrykt" og senere "gjenopplivet"?**

Dette er en av psykologiens mest kontroversielle debatter.

**Repressed memory theory (Freud):**
Traumatiske minner kan bli presset ned i det ubevisste for aa beskytte oss, men paavirker atferd likevel.

**The memory wars (1990s):**
Mange voksne "gjenoppdaget" minner om barndomsovergrep i terapi. Noen var ekte, andre var falske minner plantet av suggestiv terapi.

**Forskningskonsensus:**
1. **Traumatiske minner huskes ofte ALT FOR godt** (PTSD flashbacks)
2. **Barndomsamnesi:** Vi husker generelt lite fra før 3-4 aar (normalt)
3. **Falske minner KAN plantes** gjennom suggestiv terapi
4. **Ekte glemsel kan skje**, men er forskjellig fra "undertrykking"

**Kritisk poeng:**
Eksistens av falske minner betyr IKKE at alle gjenoppdagede minner er falske. Men terapi maa være forsiktig med suggestive teknikker.`,
    },
    {
      id: 'psy1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'En terapeut bruker hypnose og gjentatte spørsmaal for aa hjelpe en klient "huske" undertrykte barndomsminner. Hva sier forskning om denne metoden?',
        options: [
          { id: 'a', text: 'Dette er en effektiv maate aa hente frem ekte undertrykte minner', isCorrect: false },
          { id: 'b', text: 'Dette kan skape falske minner gjennom suggestion', isCorrect: true },
          { id: 'c', text: 'Hypnose garanterer nøyaktige minner', isCorrect: false },
          { id: 'd', text: 'Alle "gjenoppdagede" minner er garantert falske', isCorrect: false },
        ],
        solution: 'Forskning (Loftus og andre) viser at suggestive teknikker som hypnose og repeterte spørsmaal kan plante falske minner. Folk i hypnotisk tilstand er ekstra mottakelige for suggestion. Dette betyr IKKE at alle gjenoppdagede minner er falske, men at suggestiv terapi er risikabelt og kan skape minner om ting som aldri skjedde. Moderne terapi er langt mer forsiktig med aa "lete etter" undertrykte minner.',
      },
    },
    {
      id: 'psy1-3-4-def-6',
      type: 'definition',
      title: 'Source monitoring errors',
      content: `**Source monitoring:** Aa huske HVOR informasjon kommer fra.

**Source monitoring errors:** Vi husker informasjonen, men glemmer kilden.

**Typer:**

**1. Reality monitoring:**
Skille mellom ekte opplevelser og fantasi/drømmer
- Eksempel: "Gjorde jeg faktisk dette, eller drømte jeg det?"

**2. Internal source monitoring:**
Skille mellom egne tanker og handlinger
- Eksempel: "Sa jeg det høyt, eller bare tenkte jeg det?"

**3. External source monitoring:**
Skille mellom ulike eksterne kilder
- Eksempel: "Fortalte Maria meg det, eller var det Jonas?"

**Konsekvenser:**
- **Kryptomnesisk plagiat:** Tro at andres ideer er dine egne
- **Falsk anklage:** Huske noen var tilstede ved en hendelse de ikke var ved
- **Source confusion:** Blande sammen hvor forskjellige fakta kom fra`,
    },
    {
      id: 'psy1-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'En kjent musiker blir anklaget for plagiat - hans nye sang er nesten identisk med en gammel sang fra 1970-tallet. Han sverger han aldri har hørt den gamle sangen. Kan dette være sant? Forklar med source monitoring.',
        hints: [
          'Tenk paa cryptomnesia',
          'Kan du huske informasjon uten aa huske hvor den kom fra?',
        ],
        solution: `**Ja, dette kan faktisk være sant - et eksempel paa cryptomnesia (kryptomnesisk plagiat).**

**Hva skjedde:**

1. **Opprinnelig eksponering:** Musikeren hørte sannsynligvis den gamle sangen en gang, kanskje i barndom eller ungdom, uten aa legge merke til den bevisst.

2. **Implisitt hukommelse:** Melodien ble lagret i langtidshukommelse uten eksplisitt minne om hendelsen (kan skje gjennom priming).

3. **Source monitoring failure:** Aar senere, naar melodien dukker opp i kreativ prosess, føles den "original" fordi han ikke husker kilden.

4. **Misattribusjon:** Hjernen attribuerer melodien til egen kreativitet fremfor ekstern kilde.

**Hvorfor dette kan skje:**
- Vi kan huske informasjon (melodier, ideer) uten aa huske erfaringen hvor vi lærte dem
- Implicit memory (procedural) fungerer uten bevisst tilgang
- Jo mer tid som gaar, jo mer sannsynlig er source confusion
- Kreativ prosess aktiverer minner uten aa signalisere kilden

**Juridisk dilemma:**
Vanskelig aa bevise "uskyld" - men psykologisk er dette dokumentert fenomen. Derfor har vi opphavsrett, selv ved utilsiktet plagiat!`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Glemsel og hukommelsesfeil avslører at hukommelse er en aktiv konstruksjon, ikke passiv lagring:

**Aarsaker til glemsel:**
- **Decay:** Hukommelsesspor svekkes over tid
- **Interferens:** Proaktiv (gammel forstyrrer ny) og retroaktiv (ny forstyrrer gammel)
- **Retrieval failure:** Informasjonen er der, men utilgjengelig uten riktige cues

**Ebbinghaus' glemselskurve:**
Raskest glemsel første dag, deretter flater kurven ut

**Falske minner (Loftus):**
- Minner er rekonstruksjoner, ikke reproduksjoner
- Post-event informasjon kan endre minner
- Sikkerhet korrelerer ikke med nøyaktighet
- Konsekvenser for vitneidentifikasjon og terapi

**Source monitoring errors:**
Vi husker informasjon, men glemmer kilden - kan føre til plagiat, feilaktige anklager

Aa forstaa hukommelsens feil gjør oss mer kritiske til vaar egen og andres "sikre" minner.`,
    },
    {
      id: 'psy1-3-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et vitne til et ran ser politiets photolineup. To uker senere er hun veldig sikker paa at hun identifiserte riktig person. I retten tre maaneder senere er hun "100% sikker" paa identifikasjonen. Bruk minst fem begreper fra dette og forrige kapittel til aa forklare hvorfor hennes økende sikkerhet faktisk kan være bekymringsfullt.',
        hints: [
          'Hva skjer med minner hver gang vi henter dem frem?',
          'Source monitoring?',
          'Post-event informasjon?',
          'Commitment og consistency?',
        ],
        solution: `**Hvorfor økende sikkerhet er bekymringsfullt:**

**1. Rekonstruksjon:**
Hver gang vitnet "husker" hendelsen, rekonstruerer hun minnet. Dette er ikke video-avspilling, men ny konstruksjon som kan integrere ny informasjon.

**2. Post-event informasjon:**
Loftus viste at informasjon ETTER ranet (nyheter, politiets spørsmaal, andre vitners versjoner) kan integreres i det "opprinnelige" minnet uten at vitnet er klar over det.

**3. Source monitoring failure:**
Vitnet kan blande sammen hvor hun saa personen: var det paa ranet, eller i photolineup? Jo mer tid som gaar, jo mer usikker blir kilden - men paradoksalt nok øker sikkerhet.

**4. Commitment og consistency:**
Etter aa ha identifisert personen føler vitnet behov for aa være konsistent. Kognitiv dissonans ville oppstaa ved aa innrømme tvil, saa hjernen "reviderer" minnet for aa passe identifikasjonen.

**5. Retrieval failure vs. reconstruction:**
Hver gjenfinning endrer hukommelsessporet litt. Dette kalles "reconsolidation" - minnet blir mer basert paa repeterte gjenfortellinger enn den opprinnelige opplevelsen.

**6. Sosial bekreftelse:**
Hvis politiet, dommere, eller media behandler identifikasjonen som "korrekt", styrker det vitnets sikkerhet gjennom sosial validering.

**7. Interferens:**
Retroaktiv interferens: Ny informasjon (fra foto, rettssal) forstyrrer det opprinnelige minnet fra ranet.

**Konklusjon:**
Den opprinnelige usikkerheten var sannsynligvis mer nøyaktig enn den senere "100% sikkerhet". Økende sikkerhet kan paradoksalt nok signalisere økende distanse fra ekte minne og flere rekonstruksjoner basert paa suggestion og forventninger. Dette er hvorfor umiddelbar registrering av sikkerhetsnivaa er kritisk i rettssystemet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_PSYKOLOGI_1_3_5: TextbookChapter = {
  id: 'psykologi-1-3-5',
  courseId: 'psykologi-1',
  chapterNumber: '3.5',
  title: 'Tenkning og problemloesning',
  description: 'Hvordan tenker vi, og hvorfor tar vi feil?',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske og gjoere rede for hvordan kognisjon virker inn paa menneskets forstaaelse av seg selv og omverdenen',
  ],
  content: [
    {
      id: 'psy1-3-5-intro',
      type: 'text',
      content: `# Tenkning og problemloesning

Mennesket kalles ofte "det tenkende dyret". Vi kan resonnere abstrakt, løse komplekse problemer, og planlegge fremtiden. Men vaar tenkning er langt fra perfekt - vi tar snarveier, gjør systematiske feil, og lar følelser pavirke logikk.

Hvordan tenker vi egentlig? Hvorfor er noen problemer lette og andre umulige? Og hvorfor tar vi gang paa gang de samme feilene i beslutninger? La oss utforske kognisjonens fascinerende verden.`,
    },
    {
      id: 'psy1-3-5-def-1',
      type: 'definition',
      title: 'Resonnering: Deduktiv og induktiv',
      content: `**Resonnering** er prosessen med aa trekke konklusjoner fra informasjon.

**Deduktiv resonnering (top-down):**
Gaar fra generelle prinsipper til spesifikke konklusjoner. Hvis premissene er sanne og logikken korrekt, MAAL konklusjonen være sann.

**Eksempel:**
- Premiss 1: Alle mennesker er dødelige
- Premiss 2: Sokrates er et menneske
- Konklusjon: Sokrates er dødelig

**Induktiv resonnering (bottom-up):**
Gaar fra spesifikke observasjoner til generelle konklusjoner. Konklusjonen er SANNSYNLIG, ikke garantert.

**Eksempel:**
- Observasjon: Svanen 1 er hvit, svane 2 er hvit, svane 3 er hvit...
- Konklusjon: Alle svaner er hvite (FEIL - det finnes svarte svaner!)

**Vitenskap bruker begge:**
Induktiv: Observasjoner → hypoteser
Deduktiv: Hypoteser → forutsigelser → tester`,
    },
    {
      id: 'psy1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En forsker observerer at 100 rotter i et eksperiment lærte en oppgave raskere med belønning enn uten. Hun konkluderer: "Belønning fremmer læring hos rotter." Dette er et eksempel paa:',
        options: [
          { id: 'a', text: 'Deduktiv resonnering', isCorrect: false },
          { id: 'b', text: 'Induktiv resonnering', isCorrect: true },
          { id: 'c', text: 'Heuristikk', isCorrect: false },
          { id: 'd', text: 'Algoritmisk tenkning', isCorrect: false },
        ],
        solution: 'Dette er induktiv resonnering fordi forskeren gaar fra spesifikke observasjoner (100 rotter) til en generell konklusjon (belønning fremmer læring). Konklusjonen er sannsynlig basert paa data, men ikke logisk garantert - det kan finnes andre forklaringer eller rotter som er unntak. Induktiv resonnering brukes ofte i vitenskap for aa generere hypoteser.',
      },
    },
    {
      id: 'psy1-3-5-def-2',
      type: 'definition',
      title: 'Heuristikker: Mentale snarveier',
      content: `**Heuristikker** er mentale snarveier eller "tommelfingerregler" vi bruker for aa ta raske beslutninger.

**Hvorfor bruker vi heuristikker?**
- Komplette analyser tar for lang tid
- Begrenset kognitiv kapasitet
- Fungerer "godt nok" i de fleste situasjoner

**Viktige heuristikker:**

**1. Representativitetsheuristikken:**
Vurdere sannsynlighet basert paa hvor representativt noe er for en kategori.

**2. Tilgjengelighetsheuristikken:**
Vurdere sannsynlighet basert paa hvor lett eksempler kommer til sinne.

**3. Forankringsheuristikken:**
La første informasjon (ankeret) paavirke senere vurderinger.

Heuristikker sparer tid og energi, men kan føre til systematiske feil (biases).`,
    },
    {
      id: 'psy1-3-5-example-1',
      type: 'example',
      title: 'Representativitetsheuristikken: Linda-problemet',
      problem: 'Linda er 31, singel, utadvendt og svært intelligent. Hun studerte filosofi og var opptatt av diskriminering og sosial rettferdighet. Hva er mest sannsynlig?\n\nA) Linda er bankkasserer\nB) Linda er bankkasserer og aktiv i feministbevegelsen',
      solution: `**Feil svar (de fleste velger): B**

**Riktig svar: A**

**Forklaring:**

Dette bryter med grunnleggende sannsynlighet: B er en DELSUM av A. Det er UMULIG at "bankkasserer OG feminist" er mer sannsynlig enn bare "bankkasserer" (som inkluderer baade feminister og ikke-feminister).

**Hvorfor tar vi feil?**

**Representativitetsheuristikken:** Beskrivelsen av Linda er veldig representativ for en feminist, men IKKE representativ for en bankkasserer. Derfor føles B mer "riktig" - den PASSER bedre med vaar oppfatning av Linda.

**Vi ignorerer:**
- Base rates (statistikk)
- Grunnleggende logikk (konjunksjonsfeil)

**Vi fokuserer paa:**
- Hvor godt beskrivelsen "passer"
- Stereotyper og representativitet

Dette er et klassisk eksempel paa hvordan heuristikker kan overstyre logisk tenkning. Vaar intuisjon føles riktig, men er matematisk feil!`,
    },
    {
      id: 'psy1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar tilgjengelighetsheuristikken med et eksempel. Hvordan kan denne heuristikken føre til feil vurderinger?',
        hints: [
          'Tenk paa ting som lett kommer til sinne',
          'Media-dekning vs. faktisk risiko',
        ],
        solution: `**Tilgjengelighetsheuristikken:**
Vi vurderer sannsynlighet/hyppighet basert paa hvor lett eksempler kommer til sinne.

**Eksempel 1 - Flyskrekk:**
Mange er mer redde for aa fly enn aa kjøre bil, selv om bilkjøring er langt farligere statistisk.

**Hvorfor?**
- Flyulykker faar massiv media-dekning
- Dramatiske bilder gjør dem lette aa huske
- Bilulykker skjer hver dag, blir "vanlige", mindre minnerike
- Tilgjengelighetsheuristikken faar oss til aa overvurdere flyrisiko

**Eksempel 2 - Haiangrepshysteria:**
Sommeren 2001: Media rapporterte mange haiangreppshistorier (selv om antallet var normalt). Folk trodde haiangrepshysteria økte dramatisk.

**Hvorfor feil?**
Tilgjengelighetsheuristikken bruker "hvor lett jeg husker eksempler" som proxy for "hvor ofte det skjer". Men tilgjengelighet paavirkes av:
- Media-dekning (dramatiske hendelser overrapporteres)
- Nylige hendelser (mer tilgjengelige enn gamle)
- Personlig erfaring (egne opplevelser huskes bedre)

Dette kan føre til irrasjonell frykt og daarlige beslutninger om risiko.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-5-def-3',
      type: 'definition',
      title: 'Kognitive biases',
      content: `**Kognitiv bias** er systematiske feil i tenkning som avviker fra rasjonalitet eller god dømmekraft.

**Viktige biases:**

**1. Confirmation bias (bekreftelsestendens):**
Søke, tolke og huske informasjon som bekrefter eksisterende oppfatninger.

**2. Anchoring bias (forankringseffekt):**
Stole for mye paa første informasjon ("ankeret") og justere for lite.

**3. Availability bias (tilgjengelighetseffekt):**
Overvurdere sannsynlighet for hendelser vi lett husker.

**4. Hindsight bias (etterpåklokskap):**
"Jeg visste det hele tiden" - overvurdere hvor forutsigbart noe var.

**5. Dunning-Kruger effekten:**
Inkompetente overvurderer egne evner; eksperter undervurderer.

**6. Sunk cost fallacy:**
Fortsette investering fordi man allerede har investert, selv om det er irrasjonelt.

Biases oppstaar fordi heuristikker overforenkler komplekse situasjoner.`,
    },
    {
      id: 'psy1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Du har sett en daarlig film i 90 minutter. Du kjenner den er daarlig, men tenker "Jeg har sett 90 minutter, jeg maa se ferdig naa." Dette er et eksempel paa:',
        options: [
          { id: 'a', text: 'Confirmation bias', isCorrect: false },
          { id: 'b', text: 'Anchoring bias', isCorrect: false },
          { id: 'c', text: 'Sunk cost fallacy', isCorrect: true },
          { id: 'd', text: 'Hindsight bias', isCorrect: false },
        ],
        solution: 'Dette er sunk cost fallacy (sunk cost = kostnader som allerede er brukt og ikke kan hentes tilbake). Rasjonelt sett burde du vurdere: "Vil jeg heller bruke neste 30 minutter paa denne daarlige filmen eller noe annet?" Tiden du allerede har brukt er irrelevant for fremtidige beslutninger. Men psykologisk føler vi behov for aa "faa noe tilbake" for investeringen, saa vi fortsetter selv naar det er irrasjonelt.',
      },
    },
    {
      id: 'psy1-3-5-def-4',
      type: 'definition',
      title: 'Confirmation bias i dybden',
      content: `**Confirmation bias** (bekreftelsestendens) er kanskje den mest utbredte kogniDette bias.

**Tre former:**

**1. Biased search:**
Vi søker aktivt etter informasjon som støtter vaar oppfatning.
- Eksempel: Tror du klimaendringer er farlig? Du leser artikler som støtter dette, unngaar motargumenter.

**2. Biased interpretation:**
Vi tolker tvetydig informasjon i vaar favør.
- Eksempel: Samme fotballkamp - fans fra begge lag er sikre paa at dommeren var partisk mot DERES lag.

**3. Biased recall:**
Vi husker bedre informasjon som bekrefter vaar oppfatning.
- Eksempel: Du tror lykketal 7 er heldig - husker gangene det "virket", glemmer gangene det ikke gjorde.

**Hvorfor confirmation bias?**

- **Kognitiv økonomi:** Lettere aa bekræfte enn aa tenke kritisk
- **Kognitiv dissonans:** Ubehagelig aa være i tvil eller feil
- **Ego-beskyttelse:** Opprettholder selvbilde som "rasjonell"

**Konsekvenser:**

- Polarisering i samfunnet (ekkokamre)
- Daarlige beslutninger
- Vitenskapelige feil hvis forskere ikke er forsiktige`,
    },
    {
      id: 'psy1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'En person tror at fullmaane gir merkelig atferd. Han husker tydelig tre hendelser hvor noe rart skjedde i fullmaane. Forklar hvordan confirmation bias kan forklare denne oppfatningen, selv om det ikke er vitenskapelig sammenheng.',
        hints: [
          'Biased search, interpretation, recall?',
          'Hva med hendelser som IKKE var i fullmaane?',
        ],
        solution: `**Confirmation bias i aksjon:**

**1. Biased attention/search:**
Personen LEGGER MERKE til fullmaane naar noe rart skjer, men ikke naar ingenting skjer. Dette skaper illusorisk sammenheng.

**2. Biased interpretation:**
Naar noe rart skjer, og det tilfeldigvis er fullmaane, tolkes dette som "bevis". Naar noe rart skjer uten fullmaane, finnes andre forklaringer.

**3. Biased recall:**
Personen husker de tre gangene hvor fullmaane og rare hendelser sammenfalt, men glemmer:
- De 20 fullmaanene hvor ingenting rart skjedde
- De 50 rare hendelsene som ikke var i fullmaane

**4. Post-hoc reasoning:**
"Etter dette, derfor paa grunn av dette" - fordi hendelser skjer i sekvens, antar vi aarsakssammenheng.

**Resultat:**
Personen har subjektivt "bevis" (tre hendelser), men ignorerer all informasjon som motbeviser hypotesen. Confirmation bias gjør at oppfatningen forsterkes over tid, selv uten objektiv støtte.

**Løsning:**
Systematisk registrering av ALLE fullmaaner og ALLE rare hendelser ville vise at det ikke er sammenheng - men dette krever bevisst motstand mot confirmation bias.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-5-def-5',
      type: 'definition',
      title: 'Problemløsningsstrategier',
      content: `**Problem:** Situasjon hvor du har et maal, men ikke umiddelbar løsning.

**Algoritmer:**
Systematisk regel eller prosedyre som garanterer løsning (hvis den finnes).
- Eksempel: Aa prøve ALLE mulige passordkombinasjoner
- Fordel: Garanterer løsning
- Ulempe: Kan ta veldig lang tid

**Heuristikker:**
Tommelfingerregler som vanligvis (men ikke alltid) fungerer.
- Raskere enn algoritmer
- Ingen garanti for løsning

**Means-end analyse:**
Reduser forskjellen mellom nåværende tilstand og maal i trinn.
- Eksempel: "Jeg er i Bergen, vil til Oslo. Trinn 1: Finne transport..."

**Working backwards:**
Start med maalet, arbeid bakover til start.
- Eksempel: Planlegge en fest - start med "fest starter kl 19", arbeid bakover for aa finne naar du maa begynne aa forberede.

**Trial and error:**
Prøv forskjellige løsninger til noe fungerer.
- Fungerer for enkle problemer
- Ineffektivt for komplekse problemer`,
    },
    {
      id: 'psy1-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Du skal planlegge en reise til Japan om 6 maaneder. Du starter med aa tenke "Jeg maa være paa flyplassen 14. august kl 18:00" og arbeider bakover: "Saa maa jeg sjekke inn 3 timer før, saa maa jeg bestille fly naa..." Dette er:',
        options: [
          { id: 'a', text: 'Algoritme', isCorrect: false },
          { id: 'b', text: 'Means-end analyse', isCorrect: false },
          { id: 'c', text: 'Working backwards', isCorrect: true },
          { id: 'd', text: 'Trial and error', isCorrect: false },
        ],
        solution: 'Dette er working backwards (arbeide bakover). Du starter med ønsket sluttresultat ("være paa flyplassen kl 18:00") og arbeider systematisk bakover gjennom nødvendige trinn for aa naaemail maalet. Denne strategien er spesielt effektiv for planlegging og problemer hvor maalet er klart definert.',
      },
    },
    {
      id: 'psy1-3-5-def-6',
      type: 'definition',
      title: 'Kreativitet og innsikt',
      content: `**Kreativitet:** Evnen til aa produsere nye, originale og hensiktsmessige ideer eller løsninger.

**To typer tenkning:**

**Konvergent tenkning:**
Finne EN korrekt løsning paa et problem med kjent svar.
- Eksempel: Matematikkoppgaver, standardiserte tester
- Logisk, lineær, fokusert

**Divergent tenkning:**
Generere MANGE mulige løsninger paa et åpent problem.
- Eksempel: Brainstorming, kunstnerisk skapning
- Kreativ, assosiativ, eksplorerende

**Innsikt (insight):**
Plutselig forstaaelse av løsning - "Aha!"-opplevelsen.

**Faktorer som fremmer kreativitet:**

1. **Incubation:** Aa ta pause fra problemet
2. **Divergent thinking:** Utsette dømmekraft, generere mange ideer
3. **Ekspertise:** Dyp kunnskap i feltet
4. **Intrinsic motivation:** Indre motivasjon fremfor ytre belønning
5. **Miljø:** Støttende, tillater eksperimentering og feil`,
    },
    {
      id: 'psy1-3-5-example-2',
      type: 'example',
      title: 'Funksjonell fiksering',
      problem: 'Du har to lange strenger hengende fra taket, for langt fra hverandre til aa naaemail begge samtidig. Oppgaven er aa binde dem sammen. I rommet er en tang. Hvordan løser du det?',
      solution: `**Løsning:**
Bind tangen til den ene strengen og sett den i bevegelse som en pendel. Hold den andre strengen og vent til pendelen svinger mot deg. Grip den og bind strengene sammen.

**Problem:**
De fleste tenker BARE paa tangen som "verktøy til aa gripe/kutte" (dens primære funksjon). Aa se den som "vekt for pendel" krever aa overvinne **funksjonell fiksering**.

**Funksjonell fiksering:**
Mental blokkering hvor vi bare ser objekters vanlige funksjon, ikke alternative bruksmaater.

**Hvorfor skjer det?**
- Erfaring laerer oss standard funksjoner
- Hjelper til vanlig (effektivt), men hindrer kreativitet
- Mental set (tankesett) "laaser" oss til vanlige mønstre

**Overvinne funksjonell fiksering:**
- Bevisst tenke: "Hva ANNET kan dette brukes til?"
- Ta pause (incubation)
- Se problemet fra ny vinkel
- Divergent thinking - liste mange bruksmaater

Dette viser hvordan tidligere erfaring kan baade hjelpe OG hindre problemløsning.`,
    },
    {
      id: 'psy1-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'En designer har sittet fast paa et problem i tre timer. Hun bestemmer seg for aa ta en lang spasertur og tenke paa noe helt annet. Naar hun kommer tilbake, har hun plutselig løsningen. Forklar dette fenomenet ved hjelp av begreper om kreativitet og problemløsning.',
        hints: [
          'Hva er incubation?',
          'Hva skjer med mental fiksering naar vi tar pause?',
          'Hva er insight?',
        ],
        solution: `**Forklaring av fenomenet:**

**1. Incubation (inkubasjon):**
Dette er perioden hvor hun ikke bevisst arbeider med problemet. Forskning viser at incubation kan fremme kreativitet og innsikt.

**Under incubation:**
- Subbevisste prosesser fortsetter aa arbeide med problemet
- Hjernen lager nye assosiasjoner uten bevisst anstrengelse
- Mental stress reduseres

**2. Overvinne mental set:**
Etter 3 timer var hun sannsynligvis "fast" i bestemte tankemønstre (funksjonell fiksering). Pausen tillot disse mønstrene aa "løse opp" slik at nye perspektiver kunne dukke opp.

**3. Insight:**
Den plutselige løsningen er et eksempel paa insight - "Aha!"-opplevelsen hvor løsningen kommer brått og komplett, fremfor gradvis.

**4. Defocused attention:**
Under spasertur er oppmerksomheten avslappet og diffus. Dette tillater divergent thinking - hjernen kan gjøre uventede forbindelser mellom ideer.

**5. Fysiologisk påvirkning:**
Fysisk aktivitet øker blodstrøm til hjernen, frigjør endorfiner, reduserer stress - alt som kan fremme kreativitet.

**Praktisk laerdom:**
Naar du sitter fast: Ta pause! Incubation er ikke prokrastinering - det er en legitim problemløsningsstrategi støttet av forskning.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'psy1-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

Tenkning og problemløsning viser baade menneskets kognitive styrker og svakheter:

**Resonnering:**
- Deduktiv: Generelt → spesifikt (garantert konklusjon)
- Induktiv: Spesifikt → generelt (sannsynlig konklusjon)

**Heuristikker (mentale snarveier):**
- Representativitet: Vurdere basert paa likhet med kategori
- Tilgjengelighet: Vurdere basert paa hvor lett eksempler huskes
- Forankring: Første informasjon paavirker senere vurderinger

**Kognitive biases:**
- Confirmation bias: Søke informasjon som bekrefter oppfatninger
- Anchoring, availability, hindsight, sunk cost...
- Systematiske feil som oppstaar fra heuristikker

**Problemløsning:**
- Algoritmer (garantert) vs. heuristikker (rask)
- Means-end analyse, working backwards, trial-and-error
- Funksjonell fiksering kan blokkere kreative løsninger

**Kreativitet:**
- Konvergent (en løsning) vs. divergent (mange løsninger) tenkning
- Incubation og insight
- Miljø og motivasjon paavirker kreativitet

Aa forstaa hvordan vi tenker gjør oss mer kritiske til egne og andres beslutninger.`,
    },
    {
      id: 'psy1-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'psy1-3-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En dommer maa bestemme straff for to saker. Sak A presenteres først, og advokaten foreslaar 10 aar. Dommer gir 8 aar. Sak B (identisk alvorlighet) presenteres etter lunsj, advokaten foreslaar 2 aar. Dommer gir 4 aar. Begge mener de vurderte objektivt. Analyser hvordan kognitiv psykologi kan forklare denne ulikheten. Bruk minst tre begreper fra kapittelet.',
        hints: [
          'Tenk paa anchoring bias',
          'Hva med confirmation bias?',
          'Mental set?',
        ],
        solution: `**Kognitiv analyse av dommer-situasjonen:**

**1. Anchoring bias (forankringseffekt):**
Advokatens forslag fungerer som "anker" som paavirker dommerens vurdering.
- Sak A: Anker paa 10 aar → justerer litt ned → 8 aar
- Sak B: Anker paa 2 aar → justerer litt opp → 4 aar

Selv om dommeren tror hen vurderer objektivt, "trekker" ankeret vurderingen i sin retning. Dette er dokumentert i mange studier - selv tilfeldig tall kan pavirke dommere!

**2. Confirmation bias:**
Etter aa ha hørt advokatens forslag, kan dommeren ubevisst:
- Søke etter informasjon i saken som støtter straffen nær ankeret
- Tolke tvetydige detaljer i retning av ankeret
- Dette bekræfter "riktigheten" av straff nær ankeret

**3. Mental set (tankesett):**
I Sak A etableres et "higher sentencing" tankesett (10-aars-ramme). Dette settet "følger med" og paavirker vurderinger.
I Sak B etableres et "lower sentencing" tankesett (2-aars-ramme).

**4. Availability heuristic:**
Dommerens vurdering av "typisk straff for slike saker" paavirkes av det mest tilgjengelige eksempelet - nettopp advokatens forslag de akkurat hørte.

**5. Mangel paa algoritme:**
Straff-vurdering er ikke en objektiv algoritme, men basert paa heuristikker og subjektiv dømmekraft. Dette aapner for kognitive biases.

**Skremmende implikasjon:**
To identiske saker faar ulik straff paa grunn av tilfeldig faktor (advokatens forslag). Dommerne er helt ubevisste om paavirkningen.

**Løsning:**
- Bevissthet om anchoring
- Standardiserte retningslinjer (mer algoritmisk)
- Vurdere saken FØR aa høre straffeanbefalinger
- Multiple dommere/deliberation

Dette viser at selv profesjonelle i høyt-stakes beslutninger er saarbare for kognitive biases - og at bevissthet om dem er første steg mot bedre vurderinger.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const PSYKOLOGI_1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_PSYKOLOGI_1_3_1,
  CHAPTER_PSYKOLOGI_1_3_2,
  CHAPTER_PSYKOLOGI_1_3_3,
  CHAPTER_PSYKOLOGI_1_3_4,
  CHAPTER_PSYKOLOGI_1_3_5,
];
