/**
 * Kroppsøving VG1 - Del 1: Kapittel 1.1–2.6
 * Trening og treningslære, kropp og helse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Grunnleggende treningsprinsipper
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_1_1: TextbookChapter = {
  id: 'kroppsoving-vg1-1-1',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '1.1',
  title: 'Grunnleggende treningsprinsipper',
  description: 'Lær de viktigste prinsippene for effektiv trening og hvordan du tilpasser treningen til dine mål.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-1-1-intro',
      type: 'text',
      content: `## Grunnleggende treningsprinsipper

For å få effekt av trening må vi forstå hvordan kroppen tilpasser seg belastning. Treningsprinsipper er vitenskapelig baserte retningslinjer som hjelper oss å trene smart og oppnå våre mål.

**Hvorfor er treningsprinsipper viktige?**
- Sikrer at treningen gir ønsket effekt
- Reduserer risikoen for skader
- Gir en strukturert tilnærming til trening
- Hjelper deg å nå dine mål raskere

Gjennom historien har idrettsutøvere og forskere utviklet kunnskap om hva som gir best treningseffekt. I dag baserer vi oss på vitenskapelig dokumenterte prinsipper som gjelder for alle, uansett treningsnivå eller mål.`,
    },
    {
      id: 'kroppsoving-vg1-1-1-def-1',
      type: 'definition',
      title: 'Belastningsprinsippet',
      content: `Belastningsprinsippet sier at kroppen må utsettes for en belastning som er høyere enn den er vant til for å utvikle seg. Dette kalles også **overbelastning** eller **progressiv overbelastning**.

**Nøkkelpunkter:**
- Treningen må være krevende nok til å utfordre kroppen
- Belastningen må overskride hvile- eller dagliglivsnivået
- Kroppen tilpasser seg ved å bli sterkere/mer utholdende
- For lav belastning gir ingen treningseffekt

**Eksempel:** Hvis du løper 3 km på 20 minutter uten problemer, må du øke belastningen (løpe lengre, raskere eller i tyngre terreng) for å utvikle utholdenhet.`,
    },
    {
      id: 'kroppsoving-vg1-1-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar belastningsprinsippet med egne ord. Hvorfor er det viktig at treningen er krevende nok?',
        subTasks: [],
        solution: 'Belastningsprinsippet betyr at kroppen må utsettes for en belastning som er høyere enn den er vant til for å utvikle seg. Hvis treningen ikke er krevende nok, vil kroppen ikke ha noen grunn til å tilpasse seg og bli sterkere eller mer utholdende. Vi må altså «utfordre» kroppen over hvile- eller dagliglivsnivået for å oppnå treningseffekt.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-1-def-2',
      type: 'definition',
      title: 'Spesifisitetsprinsippet',
      content: `Spesifisitetsprinsippet betyr at kroppen tilpasser seg spesifikt til den type trening du gjør. Du får det du trener på.

**Nøkkelpunkter:**
- Styrketrening gir styrke, ikke nødvendigvis utholdenhet
- Utholdenhetstrening gir utholdenhet, ikke nødvendigvis styrke
- Treningen må ligne på aktiviteten du vil bli bedre i
- Jo mer spesifikk trening, desto bedre resultat i den aktiviteten

**Eksempel:** En fotballspiller trenger både utholdenhet, styrke, hurtighet og ballkontroll. Bare løpetrening vil ikke gjøre deg til en bedre fotballspiller - du må også trene med ball.`,
    },
    {
      id: 'kroppsoving-vg1-1-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi et konkret eksempel på hvordan spesifisitetsprinsippet gjelder i en idrett du driver med eller er interessert i.',
        subTasks: [],
        solution: 'Eksempel (fotball): Hvis jeg vil bli bedre til fotball, må jeg trene på fotballspesifikke ferdigheter som pasninger, dribbling, skudd og spillforståelse. Bare styrketrening på treningsstudio vil ikke gjøre meg til en bedre fotballspiller, selv om styrke kan være nyttig. Treningen må være spesifikk for fotball.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-1-def-3',
      type: 'definition',
      title: 'Progresjonsprinsippet',
      content: `Progresjonsprinsippet handler om at belastningen må økes gradvis over tid for å fortsette å utvikle seg.

**Nøkkelpunkter:**
- Start på et passende nivå
- Øk belastningen gradvis (5-10% per uke er en god tommelfingerregel)
- For rask progresjon øker skaderisikoen
- For langsom progresjon gir liten utvikling

**Hvordan øke belastning:**
- **Volum:** Lengre økt, flere repetisjoner, flere sett
- **Intensitet:** Tyngre vekter, høyere tempo, brattere bakker
- **Frekvens:** Flere økter per uke
- **Kompleksitet:** Vanskeligere øvelser

**Eksempel:** Uke 1: Løp 5 km. Uke 2: Løp 5,5 km. Uke 3: Løp 6 km.`,
    },
    {
      id: 'kroppsoving-vg1-1-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-1-ex-4',
        number: '3',
        type: 'classic',
        task: 'Per løper 5 km tre ganger i uken. Han vil forbedre seg, men vet ikke hvordan han skal øke belastningen. Gi ham tre konkrete råd basert på progresjonsprinsippet.',
        subTasks: [],
        solution: `Tre råd til Per:
1. Øk distansen gradvis: Legg til 500 meter på én av løpeturene hver uke, for eksempel løp 5,5 km i stedet for 5 km på en av turene.
2. Øk intensiteten: Gjør en av turene om til intervalltrening, for eksempel 4x1000m i raskere tempo med 3 minutters pause mellom.
3. Øk frekvensen forsiktig: Etter 4-6 uker kan han vurdere å legge til en fjerde løpeøkt per uke.

Viktig: Han bør bare øke én parameter om gangen og ikke øke ukentlig treningsvolum med mer enn 10%.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-1-def-4',
      type: 'definition',
      title: 'Individua­liserings­prinsippet',
      content: `Individualiserings­prinsippet betyr at treningen må tilpasses den enkelte persons forutsetninger og mål.

**Faktorer som påvirker individualisering:**
- Treningsbakgrunn og ferdighetsnivå
- Alder og kjønn
- Genetikk og kroppstype
- Livssituasjon (tid, jobb, familie)
- Personlige mål og motivasjon
- Eventuelle skader eller helseutfordringer

**Nøkkelpunkter:**
- Det som fungerer for én person fungerer ikke nødvendigvis for en annen
- Ta hensyn til egne forutsetninger
- Tilpass treningen til din hverdag
- Respekter kroppens signaler

**Eksempel:** En nybegynner kan trene 2-3 ganger per uke, mens en erfaren utøver kanskje trener 6-8 ganger per uke.`,
    },
    {
      id: 'kroppsoving-vg1-1-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-1-ex-5',
        number: '4',
        type: 'classic',
        task: 'Hva er en viktig grunn til at treningen må individualiseres?',
        subTasks: [],
        multipleChoiceOptions: [
          'Alle må trene likt for å få samme resultat',
          'Folk har ulike forutsetninger, mål og livssituasjoner',
          'Det er lettere å lage treningsplaner',
          'Individualisering er ikke viktig',
        ],
        solution: 'Riktig svar er b) Folk har ulike forutsetninger, mål og livssituasjoner. Individualisering er viktig fordi mennesker har forskjellig treningsbakgrunn, alder, kjønn, genetikk, tid til rådighet og personlige mål. Det som fungerer for én person fungerer ikke nødvendigvis for en annen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-1-def-5',
      type: 'definition',
      title: 'Reversibilitetsprinsippet',
      content: `Reversibilitetsprinsippet (også kalt "use it or lose it") betyr at treningseffekten forsvinner hvis du slutter å trene.

**Nøkkelpunkter:**
- Kroppen tilpasser seg både til trening og mangel på trening
- Formen reduseres raskere enn den bygges opp
- 2-4 ukers pause kan redusere formen merkbart
- Eldre treningseffekter forsvinner saktere enn nylig oppnådde

**Hvor raskt mister man formen?**
- **Utholdenhet:** Merkbar nedgang etter 2 uker
- **Styrke:** Merkbar nedgang etter 3-4 uker
- **Teknikk:** Vedlikeholdes lengre, men krever repetisjon

**Eksempel:** Hvis du bygger opp god kondisjon over sommeren, men slutter å trene på høsten, vil formen være betydelig redusert innen jul.`,
    },
    {
      id: 'kroppsoving-vg1-1-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-1-ex-3',
        number: '5',
        type: 'classic',
        task: 'Hvilket treningsprinsipp beskriver at kroppen mister form hvis man slutter å trene?',
        subTasks: [],
        multipleChoiceOptions: [
          'Belastningsprinsippet',
          'Reversibilitetsprinsippet',
          'Progresjonsprinsippet',
          'Spesifisitetsprinsippet',
        ],
        solution: 'Riktig svar er b) Reversibilitetsprinsippet. Dette prinsippet, også kalt "use it or lose it", beskriver at treningseffekten forsvinner hvis man slutter å trene. Kroppen tilpasser seg både til trening og mangel på trening.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Anvendelse av treningsprinsipper',
      problem: `Kari er 16 år og ønsker å bli bedre til å løpe 3000 meter. Hun løper i dag 3000m på 15 minutter. Hvordan kan hun bruke treningsprinsippene for å forbedre seg?`,
      solution: `**Belastningsprinsippet:** Kari må løpe raskere enn 15 minutter på 3000m i treningsøktene, eller løpe lengre distanser. Hun kan ikke forbedre seg ved bare å løpe i samme tempo hver gang.

**Spesifisitetsprinsippet:** Kari må fokusere på løping, helst på distanser rundt 3000m. Hun kan gjøre intervaller (f.eks. 5x600m), terskelløp (f.eks. 2x2000m) eller lange rolige løpeturer (f.eks. 8-10 km).

**Progresjonsprinsippet:** Kari starter med 3 løpeøkter per uke. Etter 4 uker øker hun til 4 økter per uke. Hun øker også gradvis distansen på langturene og intensiteten på intervallene.

**Individualisering:** Kari har fotballtrening 2 ganger i uken, så hun planlegger løpeøktene på dager uten fotball. Hun tilpasser treningene etter hvordan kroppen føles.

**Reversibilitet:** Kari vet at hvis hun tar sommerferie uten å løpe, vil formen bli dårligere. Hun planlegger derfor å løpe minst 1-2 ganger per uke også i ferien.`,
    },
    {
      id: 'kroppsoving-vg1-1-1-tip-1',
      type: 'tip',
      title: 'Praktiske tips for å følge treningsprinsippene',
      content: `1. **Hold treningsdagbok:** Skriv ned hva du gjør på hver økt. Det hjelper deg å se progresjon og justere treningen.

2. **Test deg selv regelmessig:** Ta en test hver 6-8. uke for å se om treningen fungerer (f.eks. løp 3000m på tid).

3. **Vær tålmodig:** God utvikling tar tid. Forvent ikke store forbedringer fra uke til uke.

4. **Lytt til kroppen:** Hvis du er veldig sliten eller vondt flere dager på rad, ta en ekstra hviledag.

5. **Variasjonsrike økter:** Kombiner ulike typer trening (intervaller, lange turer, tempo) for å unngå kjedsomhet og ensformighet.`,
    },
    {
      id: 'kroppsoving-vg1-1-1-warning-1',
      type: 'warning',
      title: 'Vanlige feil ved bruk av treningsprinsipper',
      content: `**For rask progresjon:** Mange øker belastningen for raskt, noe som fører til overbelastningsskader. Følg 10%-regelen: Øk ikke ukentlig treningsvolum med mer enn 10%.

**Mangel på variasjon:** Å gjøre samme økt hver gang bryter med variasjonsprinsippet og kan føre til stagnasjon og overbelastning.

**Ikke nok restitusjon:** Kroppen trenger hvile for å tilpasse seg. Uten hvile får du ikke treningseffekt og risikerer overtrening.

**Sammenligne seg med andre:** Det som fungerer for andre fungerer ikke nødvendigvis for deg. Følg individualiserings­prinsippet.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-1-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv en realistisk treningssituasjon der alle seks treningsprinsippene (belastning, spesifisitet, progresjon, variasjon, reversibilitet, individualisering) er relevante.',
        subTasks: [],
        solution: `Eksempel: Lisa (17 år) vil forbedre seg i svømming på 400m fri.

**Belastning:** Hun må svømme intervaller og distanser som utfordrer henne, ikke bare svømme rolig frem og tilbake.

**Spesifisitet:** Fokus på fristilsteknikk og distanser rundt 400m (f.eks. 4x100m, 8x50m).

**Progresjon:** Starter med 2 svømmeøkter per uke, øker til 3 etter 6 uker. Øker også distansen på intervallene gradvis.

**Variasjon:** Kombinerer lange rolige økter, intervaller på høy intensitet, og teknikktrening.

**Reversibilitet:** Vet at hun må fortsette å svømme jevnlig for å holde formen, også i ferier.

**Individualisering:** Tilpasser treningen til skolehverdagen (svømmer morgen før skole og kvelder uten lekser). Respekterer at hun er i pubertet og kroppen trenger ekstra hvile.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Gjennomfør en treningsøkt (valgfri type) og loggfør den i en treningsdagbok. Oppgi: dato, type trening, varighet, intensitet (puls eller følelse), og hvordan du følte deg under og etter økten.',
        subTasks: [],
        solution: `Eksempel på loggføring:

**Dato:** 15. september 2025
**Type trening:** Jogging
**Varighet:** 40 minutter
**Distanse:** 6 km
**Intensitet:** Gjennomsnittspuls 145 slag/min (ca. 70% av maks)
**Følelser under:** Føltes bra, kunne prate hele tiden. Litt tungt i beina de siste 10 minuttene.
**Følelser etter:** Energisk og fornøyd. Ingen smerter.
**Kommentar:** God oppvarming før start. Løp i rolig tempo i sone 2.

**Tips:** Bruk gjerne en app (Strava, Garmin Connect, Apple Health) eller et enkelt notatark. Jevnlig loggføring hjelper deg å se progresjon over tid.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Utholdenhetstrening
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_1_2: TextbookChapter = {
  id: 'kroppsoving-vg1-1-2',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '1.2',
  title: 'Utholdenhetstrening',
  description: 'Forstå ulike typer utholdenhetstrening, pulssoner og hvordan du bygger opp god kondisjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-1-2-intro',
      type: 'text',
      content: `## Utholdenhetstrening - grunnlaget for god helse

Utholdenhet er evnen til å opprettholde fysisk aktivitet over tid. God utholdenhet er grunnlaget for god helse og prestasjon i de fleste idretter.

**Hvorfor trene utholdenhet?**
- Styrker hjerte og lunger
- Bedre oksygenopptak og sirkulasjon
- Økt energi og bedre søvn
- Redusert risiko for livsstilssykdommer
- Bedre prestasjonsevne i idrett

Utholdenhetstrening kan deles i to hovedtyper: **aerob** (med oksygen) og **anaerob** (uten oksygen). For å utvikle god utholdenhet trenger vi begge typer.`,
    },
    {
      id: 'kroppsoving-vg1-1-2-def-1',
      type: 'definition',
      title: 'Aerob og anaerob trening',
      content: `**Aerob trening** betyr trening med oksygen. Kroppen bruker oksygen til å produsere energi fra fett og karbohydrater.

**Kjennetegn ved aerob trening:**
- Moderat intensitet (60-80% av maks puls)
- Kan snakke mens du trener
- Varighet: 30-60+ minutter
- Eksempler: Jogging, sykling i rolig tempo, svømming

**Anaerob trening** betyr trening uten oksygen. Kroppen produserer energi uten tilstrekkelig oksygentilførsel, noe som gir melkesyre.

**Kjennetegn ved anaerob trening:**
- Høy intensitet (80-95% av maks puls)
- Vanskelig å snakke
- Varighet: Fra sekunder til få minutter
- Eksempler: Intervaller, sprint, høyintensitetstrening

**Viktigheten av begge:**
- Aerob trening bygger grunnkondisjon
- Anaerob trening forbedrer maksimal oksygenopptak (VO₂maks)
- Kombinasjonen gir best treningseffekt`,
    },
    {
      id: 'kroppsoving-vg1-1-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom aerob og anaerob trening. Gi eksempler på aktiviteter for hver type.',
        subTasks: [],
        solution: 'Aerob trening betyr trening med oksygen, hvor kroppen bruker oksygen til å produsere energi. Det er moderat intensitet over lengre tid. Eksempler: jogging, sykling, svømming i rolig tempo. Anaerob trening betyr trening uten tilstrekkelig oksygen, hvor kroppen produserer energi og melkesyre. Det er høy intensitet i kort tid. Eksempler: sprint, intervaller, høyintensitetstrening. Begge typer er viktige for god utholdenhet.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-2-def-2',
      type: 'definition',
      title: 'Maksimal puls og hvilepuls',
      content: `**Maksimal puls (HRmax)** er det høyeste antall hjerteslag per minutt kroppen kan oppnå ved maksimal anstrengelse.

**Beregning av maks puls:**
- Enkel formel: 220 - alder
- Eksempel: En 16-åring har ca. 220 - 16 = 204 slag/min
- Variasjoner: Reell maks puls kan variere ±10-15 slag

**Hvilepuls** er pulsen når du er helt i hvile (f.eks. om morgenen før du står opp).

**Typiske verdier:**
- Utrente: 70-80 slag/min
- Godt trente: 40-60 slag/min
- Eliteutøvere: Under 40 slag/min

**Hvorfor måle puls?**
- Kontrollere treningsintensitet
- Følge med på utviklingen (lavere hvilepuls = bedre form)
- Unngå overtrening
- Sikre at du trener i riktig sone`,
    },
    {
      id: 'kroppsoving-vg1-1-2-def-3',
      type: 'definition',
      title: 'Pulssoner',
      content: `Pulssoner er forskjellige intensitetsnivåer basert på prosentandel av maksimal puls. Ulike soner gir ulik treningseffekt.

**Sone 1 - Rolig (50-60% av maks puls):**
- Lett aktivitet, restitusjon
- Forbrenner fett
- Oppvarming og nedkjøling

**Sone 2 - Grunntrening (60-70% av maks puls):**
- Bygger grunnkondisjon
- Øker fetforbrenning
- Lange, rolige økter

**Sone 3 - Tempo/terskel (70-80% av maks puls):**
- Forbedrer arbeidskapasitet
- Øker anaerob terskel
- Moderat hard intensitet

**Sone 4 - Intervall (80-90% av maks puls):**
- Forbedrer VO₂maks
- Høy intensitet, korte intervaller
- Vanskelig å snakke

**Sone 5 - Maksimal (90-100% av maks puls):**
- Maksimal innsats
- Kort varighet (sekunder til minutter)
- Sprint og konkurranser

**Eksempel (16-åring med maks puls 204):**
- Sone 1: 102-122 slag/min
- Sone 2: 122-143 slag/min
- Sone 3: 143-163 slag/min
- Sone 4: 163-184 slag/min
- Sone 5: 184-204 slag/min`,
    },
    {
      id: 'kroppsoving-vg1-1-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'En 18-åring har en maksimal puls på ca. 202 slag/min. I hvilken pulssone er hen når pulsen er 165 slag/min?',
        subTasks: [],
        multipleChoiceOptions: [
          'Sone 1 (rolig)',
          'Sone 2 (grunntrening)',
          'Sone 3 (tempo/terskel)',
          'Sone 4 (intervall)',
        ],
        solution: 'Riktig svar er d) Sone 4 (intervall). 165 slag/min utgjør ca. 82% av maksimal puls (165/202 = 0,817 = 82%). Dette tilsvarer sone 4 som er 80-90% av maks puls. Dette er høyintensitetsintervaller som forbedrer VO₂maks.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-2-def-4',
      type: 'definition',
      title: 'VO₂maks - maksimalt oksygenopptak',
      content: `VO₂maks er den maksimale mengden oksygen kroppen kan ta opp og bruke per minutt under hard fysisk aktivitet. Det er det beste målet på kondisjonen din.

**Måles i:**
- Milliliter oksygen per kilogram kroppsvekt per minutt (ml/kg/min)

**Typiske verdier:**
- Utrente menn: 35-40 ml/kg/min
- Utrente kvinner: 30-35 ml/kg/min
- Godt trente menn: 50-60 ml/kg/min
- Godt trente kvinner: 45-55 ml/kg/min
- Eliteutøvere: 70-90+ ml/kg/min

**Faktorer som påvirker VO₂maks:**
- Genetikk (30-50% er arvelig)
- Treningsbakgrunn
- Alder (topper rundt 20-25 år)
- Kjønn (menn har ca. 10% høyere enn kvinner)

**Hvordan forbedre VO₂maks:**
- Høyintensitetsintervaller (sone 4-5)
- Terskeltrening (sone 3)
- Kombinasjon av lange rolige økter og intervaller`,
    },
    {
      id: 'kroppsoving-vg1-1-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er VO₂maks, og hvorfor er det et godt mål på kondisjon? Hvordan kan man forbedre VO₂maks?',
        subTasks: [],
        solution: 'VO₂maks er den maksimale mengden oksygen kroppen kan ta opp og bruke per minutt under hard fysisk aktivitet. Det måles i ml/kg/min. Det er et godt mål på kondisjon fordi det viser hvor effektiv kroppen er til å transportere og bruke oksygen - jo høyere VO₂maks, desto bedre kondisjon. Man kan forbedre VO₂maks gjennom høyintensitetsintervaller (sone 4-5), terskeltrening (sone 3), og en kombinasjon av lange rolige økter og intervaller. Eksempel: 4x4 minutters intervaller.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Intervalltrening',
      problem: `Maria vil forbedre sin VO₂maks gjennom intervalltrening. Hun er 17 år og har en maksimal puls på ca. 203 slag/min. Lag en intervalltrening for henne.`,
      solution: `**4x4 minutters intervaller (populær norsk metode):**

**Mål:** Forbedre VO₂maks gjennom høyintensitetsintervaller

**Oppvarming (15 min):**
- 10 minutter rolig jogging (sone 2: 122-142 slag/min)
- 3x30 sekunders oppløp med pause mellom
- 2 minutter rolig jogging

**Hovedøkt:**
- 4 repetisjoner med 4 minutters løping på 85-90% av maks puls (173-183 slag/min)
- 3 minutters aktiv pause (rolig jogging) mellom hver intervall
- Pulsen skal nå opp i sone 4-5 på hver intervall
- Total varighet hovedøkt: 28 minutter

**Nedkjøling (10 min):**
- Rolig jogging (sone 1-2)

**Tips til Maria:**
- Første intervall skal ikke være for hard - det skal være mulig å gjennomføre alle 4
- Hvis pulsen er over 185-190 slag/min, er det for hardt
- Gjør denne økten 1-2 ganger per uke, ikke oftere
- Kombiner med rolige lange turer (sone 2) andre dager`,
    },
    {
      id: 'kroppsoving-vg1-1-2-example-2',
      type: 'example',
      title: 'Eksempel: Treningsuke for utholdenhet',
      problem: `Lag en treningsuke for en person som vil forbedre utholdenhet og har 4 treningsøkter tilgjengelig per uke.`,
      solution: `**Treningsuke med variasjon:**

**Mandag - Lang rolig tur (LRT):**
- 60 minutter i sone 2 (60-70% av maks puls)
- Formål: Bygge grunnkondisjon og fetforbrenning
- Eksempel: Rolig joggetur eller sykkeltur

**Onsdag - Terskeltrening:**
- 15 min oppvarming
- 2x10 minutter i sone 3 (70-80% av maks puls) med 5 min pause
- 10 min nedkjøling
- Formål: Forbedre arbeidskapasitet og anaerob terskel

**Fredag - Intervaller (4x4):**
- 15 min oppvarming
- 4x4 minutter i sone 4 (80-90% av maks puls) med 3 min pause
- 10 min nedkjøling
- Formål: Forbedre VO₂maks

**Søndag - Restitusjon eller lett økt:**
- 30-40 minutter i sone 1-2 (50-70% av maks puls)
- Alternativt: Annen aktivitet (svømming, sykling, tur)
- Formål: Aktiv restitusjon

**Viktige prinsipper:**
- 80/20-regelen: 80% av treningen i lav intensitet, 20% i høy intensitet
- Minst 1 hviledag mellom hard intervaller og terskeltrening
- Variasjon i type trening og intensitet`,
    },
    {
      id: 'kroppsoving-vg1-1-2-tip-1',
      type: 'tip',
      title: 'Praktiske tips for utholdenhetstrening',
      content: `1. **Snakkemetoden:** Hvis du kan snakke i hele setninger, er du i aerob sone. Hvis du bare kan si noen få ord, er du i anaerob sone.

2. **Pulsmåler eller app:** Bruk pulsmåler, smartklokke eller app for å sikre at du trener i riktig sone.

3. **Vær tålmodig:** Kondisjonen forbedres gradvis over måneder, ikke uker. Regn med 2-3 måneder før du ser betydelig forbedring.

4. **Variasjonen er nøkkelen:** Kombiner lange rolige turer, terskeltrening og intervaller for best effekt.

5. **Husk restitusjon:** Kroppen utvikler seg i hvileperiodene, ikke under treningen. Sørg for nok søvn og hvile.

6. **Trivsel er viktig:** Velg aktiviteter du liker - det er lettere å holde motivasjonen.`,
    },
    {
      id: 'kroppsoving-vg1-1-2-warning-1',
      type: 'warning',
      title: 'Vanlige feil ved utholdenhetstrening',
      content: `**For mye høyintensitetstrening:** Mange tror at alt skal være hardt. Men kroppen trenger også rolige økter for å bygge grunnkondisjon. Følg 80/20-regelen.

**For lite intensitet:** Noen trener alltid i "ingen mann's land" (sone 3) - verken rolig nok til å bygge grunnkondisjon eller hardt nok til å forbedre VO₂maks. Vær bevisst på hvilken sone du er i.

**Manglende progresjon:** Å gjøre samme økt i samme tempo uke etter uke gir liten utvikling. Øk gradvis enten distanse, intensitet eller antall intervaller.

**For lite restitusjon:** Hard intervalltrening krever 48 timer restitusjon. Ikke kjør harde økter to dager på rad.

**Ignorere signaler fra kroppen:** Vedvarende tretthet, økt hvilepuls, søvnproblemer eller sykdom er tegn på at du trenger mer hvile.`,
    },
    {
      id: 'kroppsoving-vg1-1-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kalles prinsippet om at 80% av treningen bør være i lav intensitet og 20% i høy intensitet?',
        subTasks: [],
        multipleChoiceOptions: [
          'Belastningsprinsippet',
          '80/20-regelen',
          'Progresjonsprinsippet',
          'Spesifisitetsprinsippet',
        ],
        solution: 'Riktig svar er b) 80/20-regelen. Dette er en veletablert regel i utholdenhetstrening som sier at mesteparten av treningen (80%) bør være i lav til moderat intensitet (sone 1-2), mens kun 20% bør være høyintensitetstrening (sone 4-5). Dette gir best utvikling og reduserer risikoen for overtrening.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-1-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du er 16 år og vil starte med utholdenhetstrening. Lag en enkel treningsplan for de første 4 ukene med 3 økter per uke. Beskriv hva du skal gjøre på hver økt og hvilken pulssone du skal trene i.',
        subTasks: [],
        solution: `Treningsplan for nybegynner (16 år, maks puls ca. 204):

**Uke 1-2:**
- Mandag: 20 min rolig jogging, sone 2 (122-143 slag/min)
- Onsdag: 25 min rolig jogging, sone 2
- Lørdag: 30 min rolig jogging, sone 2

**Uke 3-4:**
- Mandag: 30 min rolig jogging, sone 2
- Onsdag: 25 min med 3x2 min i sone 3 (143-163 slag/min), 3 min pause mellom
- Lørdag: 35-40 min rolig jogging, sone 2

**Progresjon:** Øker gradvis tid og legger inn lett tempotrening i uke 3-4. Fortsatt fokus på å bygge grunnkondisjon.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor restitusjon er viktig for utholdenhetstrening. Hva skjer i kroppen under hvile?',
        subTasks: [],
        solution: 'Restitusjon er viktig fordi kroppen utvikler seg og blir sterkere i hvileperiodene, ikke under selve treningen. Under treningen bryter vi ned muskelvev og tømmer energilagrene. I hvileperioden skjer følgende: Kroppen reparerer mikroskader i musklene, fyller opp energilagrene (glykogen), styrker hjerte og lunger, og tilpasser seg den belastningen den har vært utsatt for. Uten nok restitusjon risikerer man overtrening, økt skaderisiko og manglende fremgang. Typisk trenger kroppen 24-48 timer hvile mellom krevende økter.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'Mål hvilepulsen din 3 dager på rad om morgenen før du står opp (finn pulsen på håndleddet eller halsen, tell i 15 sekunder og gang med 4). Skriv ned resultatene og beregn gjennomsnittet. Sammenlign med typiske verdier.',
        subTasks: [],
        solution: `Eksempel på måling:

**Dag 1 (mandag):** 68 slag/min
**Dag 2 (tirsdag):** 66 slag/min
**Dag 3 (onsdag):** 70 slag/min
**Gjennomsnitt:** (68 + 66 + 70) / 3 = 68 slag/min

**Vurdering:** Min hvilepuls på 68 slag/min ligger i normalområdet for en utrenet til moderat trent person (70-80 for utrente, 60-70 for moderat trente). Hvis jeg trener jevnlig over flere måneder, forventer jeg at hvilepulsen gradvis vil synke.

**Tips:** Mål alltid hvilepuls på samme tidspunkt og på samme måte. Stress, sykdom og dårlig søvn kan øke hvilepulsen midlertidig.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3: Styrketrening og teknikk
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_1_3: TextbookChapter = {
  id: 'kroppsoving-vg1-1-3',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '1.3',
  title: 'Styrketrening og teknikk',
  description: 'Lær grunnleggende styrketrening, viktige øvelser og hvordan du trener trygt og effektivt.',
  estimatedMinutes: 60,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-1-3-intro',
      type: 'text',
      content: `## Styrketrening - grunnlaget for en sterk kropp

Styrketrening handler om å gjøre musklene sterkere gjennom motstandstrening. Det er en av de viktigste treningsformene for helse, funksjon og prestasjonsevne.

**Hvorfor trene styrke?**
- Sterkere muskler og skjelett
- Forebygging av skader
- Bedre kroppsholdning
- Økt stoffskifte og fettforbrenning
- Bedre funksjon i hverdagen
- Forbedret prestasjon i idrett

Styrketrening er for alle - ikke bare for kroppsbyggere eller styrkeløftere. Ungdom, voksne og eldre har alle nytte av regelmessig styrketrening.`,
    },
    {
      id: 'kroppsoving-vg1-1-3-def-1',
      type: 'definition',
      title: 'Typer muskelarbeid',
      content: `Det finnes tre hovedtyper muskelarbeid:

**1. Konsentrisk (løftende fase):**
- Muskelen forkortes mens den jobber
- Eksempel: Å løfte en vekt opp i bicepscurl
- Den aktive løftefasen

**2. Eksentrisk (senk fase):**
- Muskelen forlenges mens den jobber
- Eksempel: Å senke vekten kontrollert ned i bicepscurl
- Ofte sterkere enn konsentrisk, men gir mest ømhet
- Viktig for skadeforebygging

**3. Isometrisk (statisk):**
- Muskelen jobber uten å endre lengde
- Eksempel: Å holde en vekt stille, planke
- Bygger stabilitet og utholdenhet

**Alle tre typer er viktige:**
En god styrkeøvelse inneholder både konsentrisk, eksentrisk og ofte også isometrisk muskelarbeid.`,
    },
    {
      id: 'kroppsoving-vg1-1-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom konsentrisk, eksentrisk og isometrisk muskelarbeid. Gi eksempler fra en knebøy.',
        subTasks: [],
        solution: 'Konsentrisk muskelarbeid er når muskelen forkortes mens den jobber - i knebøy er dette når du presser deg opp fra bunnen. Eksentrisk muskelarbeid er når muskelen forlenges mens den jobber - i knebøy er dette når du senker deg ned (senk fasen). Isometrisk muskelarbeid er når muskelen jobber uten å endre lengde - i knebøy kan dette være hvis du holder deg stille i bunnposisjonen. Alle tre typer er viktige for styrketrening.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-3-def-2',
      type: 'definition',
      title: 'Repetisjoner, sett og pauser',
      content: `**Repetisjoner (reps):**
- Antall ganger du utfører en øvelse uten pause
- Eksempel: 10 knebøy = 10 repetisjoner

**Sett:**
- En serie med repetisjoner etterfulgt av pause
- Eksempel: 3 sett à 10 repetisjoner = 3x10

**Pauser:**
- Hviletiden mellom settene
- Typisk 1-3 minutter avhengig av mål

**Sammenheng mellom mål og repetisjoner:**
- **1-5 reps, tung vekt:** Maksimal styrke
- **6-12 reps, moderat vekt:** Muskelvekst (hypertrofi)
- **12-20+ reps, lett vekt:** Muskulær utholdenhet
- **Hastighet:** Eksplosiv styrke

**Eksempel på styrkeøkt:**
- Knebøy: 3 sett à 8 repetisjoner, 2 min pause
- Markløft: 3x8, 2 min pause
- Benkpress: 3x10, 90 sek pause`,
    },
    {
      id: 'kroppsoving-vg1-1-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange repetisjoner bør du gjøre hvis målet er muskelvekst (hypertrofi)?',
        subTasks: [],
        multipleChoiceOptions: [
          '1-5 repetisjoner',
          '6-12 repetisjoner',
          '20-30 repetisjoner',
          'Så mange som mulig',
        ],
        solution: 'Riktig svar er b) 6-12 repetisjoner. Dette er den optimale sonen for muskelvekst (hypertrofi) med moderat vekt. 1-5 reps med tung vekt gir maksimal styrke, mens 12-20+ reps med lett vekt gir muskulær utholdenhet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-3-def-3',
      type: 'definition',
      title: 'Store muskelgrupper',
      content: `Kroppen har mange muskler, men vi kan dele dem inn i store muskelgrupper:

**Overkropp - fremside:**
- Brystmuskler (pectoralis)
- Fremre skuldermuskler (deltoideus fremre)
- Biceps (armbøyer)
- Mage (rectus abdominis, obliques)

**Overkropp - bakside:**
- Øvre rygg (trapezius, latissimus dorsi)
- Bakre skuldermuskler (deltoideus bakre)
- Triceps (armstrekker)
- Nedre rygg (erector spinae)

**Underkropp - fremside:**
- Quadriceps (lårets fremside - fire muskler)
- Hoflebøyere

**Underkropp - bakside:**
- Hamstrings (lårets bakside)
- Gluteus (setemuskel)
- Legger (gastrocnemius, soleus)

**Kjerne/core:**
- Magemuskler
- Ryggmuskler
- Bekkenbunn
- Hoftemuskler

**Hvorfor er dette viktig?**
En god treningsplan inkluderer øvelser for alle store muskelgrupper for å unngå ubalanse og skader.`,
    },
    {
      id: 'kroppsoving-vg1-1-3-def-4',
      type: 'definition',
      title: 'De store grunnøvelsene',
      content: `Grunnøvelsene er øvelser som trener mange muskelgrupper samtidig. De er grunnlaget i de fleste styrketreningsprogram.

**1. Knebøy (Squat):**
- Trener: Quadriceps, gluteus, hamstrings, core
- Viktig for: Ben- og hoftstyrke, funksjonell styrke

**2. Markløft (Deadlift):**
- Trener: Hamstrings, gluteus, rygg, core, grep
- Viktig for: Baksidemuskulatur, grunnstyrke

**3. Benkpress (Bench Press):**
- Trener: Bryst, fremre skuldre, triceps
- Viktig for: Overkroppsstyrke, dyttemuskulatur

**4. Skulderpress (Overhead Press):**
- Trener: Skuldre, triceps, øvre bryst, core
- Viktig for: Skulderstyrke, stabilitet

**5. Roing (Row):**
- Trener: Øvre rygg, bakre skuldre, biceps
- Viktig for: Ryggstyrke, trekkmuskulatur, holdning

**6. Chins/Pull-ups:**
- Trener: Latissimus (bred rygg), biceps, core
- Viktig for: Trekkstyrke, ryggutvikling

**Hvorfor grunnøvelser?**
- Effektive - trener mange muskler samtidig
- Funksjonelle - etterligner naturlige bevegelser
- Tidsbesparende - få øvelser gir mye treningseffekt`,
    },
    {
      id: 'kroppsoving-vg1-1-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn de fem store grunnøvelsene i styrketrening og forklar hvorfor de kalles grunnøvelser.',
        subTasks: [],
        solution: 'De fem (eller seks) store grunnøvelsene er: 1) Knebøy, 2) Markløft, 3) Benkpress, 4) Skulderpress, 5) Roing, og ofte også 6) Chins/Pull-ups. De kalles grunnøvelser fordi de trener mange store muskelgrupper samtidig, er funksjonelle (etterligner naturlige bevegelser), og er svært effektive. Med kun disse øvelsene kan man trene hele kroppen. De er grunnlaget i de fleste styrketreningsprogram.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken øvelse trener primært quadriceps (lårets fremside)?',
        subTasks: [],
        multipleChoiceOptions: [
          'Markløft',
          'Benkpress',
          'Knebøy',
          'Roing',
        ],
        solution: 'Riktig svar er c) Knebøy. Knebøy trener primært quadriceps (lårets fremside), men også gluteus (setemuskel) og hamstrings (lårets bakside). Markløft trener hovedsakelig baksiden, mens benkpress og roing trener overkroppen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Helkropps styrkeøkt',
      problem: `Lag en helkropps styrkeøkt for en nybegynner som skal trene 2-3 ganger per uke. Økten skal inneholde grunnøvelser og ta ca. 45-60 minutter.`,
      solution: `**Helkropps styrkeøkt for nybegynner:**

**Oppvarming (10 min):**
- 5 min lett kardio (rolig jogging, sykling, roing)
- Dynamisk tøying: armsving, knebøy uten vekt, utfall, hofteåpning
- Oppvarmingssett av første øvelse (lett vekt, 10-15 reps)

**Hovedøvelser (30-40 min):**

1. **Knebøy:** 3 sett à 10 repetisjoner
   - Pause: 2 minutter
   - Fokus: Teknikk, dybde (hofter under kne)

2. **Benkpress (eller armhevinger):** 3x10
   - Pause: 90 sekunder
   - Fokus: Kontrollert bevegelse

3. **Roing (manualer eller maskin):** 3x10
   - Pause: 90 sekunder
   - Fokus: Squeeze skulderblad sammen

4. **Rumensk markløft:** 3x10
   - Pause: 2 minutter
   - Fokus: Strak rygg, henge i hoften

5. **Planke:** 3 sett à 30-45 sekunder
   - Pause: 60 sekunder
   - Fokus: Rett linje fra hode til hæl

**Nedkjøling (5 min):**
- Statisk tøying av trente muskler
- Rolig pust

**Progresjon:**
- Uke 1-2: Fokus på teknikk
- Uke 3-4: Øk vekt med 2,5-5 kg
- Uke 5+: Fortsett å øke vekt gradvis når 10 reps føles lett`,
    },
    {
      id: 'kroppsoving-vg1-1-3-example-2',
      type: 'example',
      title: 'Eksempel: Riktig knebøy-teknikk',
      problem: `Beskriv trinn-for-trinn hvordan man utfører en knebøy med god teknikk.`,
      solution: `**Riktig knebøy-teknikk:**

**Startposisjon:**
1. Føttene i hoftebredde, tær peker litt ut
2. Blikk fremover, ikke ned
3. Rygg rett, bryst frem
4. Vekt i midtfoten/hælene

**Nedsenking (eksentrisk fase):**
1. Pust inn
2. Bøy i hoften OG knærne samtidig
3. Senk deg ned som om du skal sette deg i en stol
4. Knærne følger tærnes retning - ikke inn mot hverandre
5. Hold ryggen rett hele veien
6. Gå så dypt som mulig (ideelt: hofter under kne)
7. Vekt i hælene, ikke løft tær fra bakken

**Oppløft (konsentrisk fase):**
1. Press deg opp med hælene
2. Strekk hoften og knærne samtidig
3. Hold ryggen rett
4. Pust ut på vei opp
5. Strekk ut helt i toppen (men ikke overstrekt kne)

**Vanlige feil å unngå:**
- Knærne går inn mot hverandre (valgus)
- Hæler løftes fra bakken
- Rund rygg
- For liten dybde
- Kne går langt foran tær (er OK hvis hoften også går bakover)

**Sikkerhet:**
- Bruk spotter (hjelper) ved tung vekt
- Start med kroppsvekt eller lett vekt
- Fokus på teknikk før vekt`,
    },
    {
      id: 'kroppsoving-vg1-1-3-tip-1',
      type: 'tip',
      title: 'Praktiske tips for styrketrening',
      content: `1. **Teknikk før vekt:** Perfekt teknikk er viktigere enn tung vekt. Dårlig teknikk gir skader.

2. **Hold treningsdagbok:** Skriv ned øvelser, vekt, sett og reps. Det hjelper deg å se progresjon og planlegge økninger.

3. **Progresjon:** Øk belastningen gradvis. Når du klarer 12 reps lett, øk vekten med 2,5-5 kg.

4. **Ikke tren samme muskelgruppe to dager på rad:** Musklene trenger 48 timer hvile for å restituere.

5. **Varm opp ordentlig:** Start med lett kardio og dynamisk tøying. Gjør oppvarmingssett med lett vekt.

6. **Fokuser på fullstendig bevegelsesutslag:** Ikke jukse med halve bevegelser. Full range of motion gir best effekt.

7. **Kontrollert tempo:** 2 sekunder ned, 1 sekund opp er en god standard. Senk fase (eksentrisk) er viktig.

8. **Pust riktig:** Pust inn på senk fase, pust ut på løft fase. Ikke hold pusten.`,
    },
    {
      id: 'kroppsoving-vg1-1-3-warning-1',
      type: 'warning',
      title: 'Sikkerhetsregler for styrketrening',
      content: `**Aldri tren alene med fri vekt over hodet eller på brystet:** Bruk alltid spotter (hjelper) ved benkpress og knebøy med tung vekt.

**Start lett:** Nybegynnere skal bruke lett vekt de første ukene for å lære teknikk. Skader oppstår ofte ved dårlig teknikk med tung vekt.

**Varm opp:** Aldri start med maksimal vekt. Gjør 1-2 oppvarmingssett med lett vekt først.

**Lytt til kroppen:** Skarp, stikkende smerte er et varselsignal. Stopp øvelsen og vurder teknikken. Litt muskelømhet dagen etter er normalt.

**Unngå overtrening:** Mer er ikke alltid bedre. 2-4 styrkeøkter per uke er nok for de fleste. Kroppen trenger hvile.

**Korrekt utstyr:** Bruk riktig fottøy (flate såler), og vurder belte ved veldig tunge løft (ikke nødvendig for nybegynnere).

**Lær av instruktør:** Få veiledning av kvalifisert trener i starten, spesielt på grunnøvelsene.`,
    },
    {
      id: 'kroppsoving-vg1-1-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv tre viktige sikkerhetstiltak du bør følge når du driver styrketrening.',
        subTasks: [],
        solution: `Tre viktige sikkerhetstiltak:

1. **Bruk spotter ved tunge løft:** Aldri tren alene med fri vekt over hodet eller på brystet (f.eks. benkpress, knebøy). Ha alltid en hjelper som kan gripe inn hvis du ikke klarer å fullføre løftet.

2. **Start med lett vekt og fokus på teknikk:** Nybegynnere må lære riktig teknikk før de øker vekten. Dårlig teknikk med tung vekt er hovedårsaken til skader. Bruk 2-4 uker på å lære bevegelsene.

3. **Varm opp ordentlig:** Start alltid med 5-10 minutter lett kardio og dynamisk tøying, deretter oppvarmingssett med lett vekt. Aldri start med maksimal vekt direkte - det øker skaderisikoen betydelig.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-1-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du har trent styrke i 8 uker og merker at du ikke lenger blir sterkere. Hva kan være årsaken, og hva kan du gjøre?',
        subTasks: [],
        solution: `Mulige årsaker og løsninger:

**Manglende progresjon:** Hvis du gjør samme øvelser med samme vekt hver uke, vil kroppen tilpasse seg og slutte å utvikle seg. Løsning: Øk gradvis vekt, repetisjoner eller antall sett. Følg progresjonsprinsippet.

**For lite restitusjon:** Hvis du trener for ofte eller for hardt, får ikke kroppen nok hvile til å restituere. Løsning: Sørg for 48 timer hvile mellom økter som trener samme muskelgruppe. Vurder å ta en uke med lettere trening (deload).

**Mangel på variasjon:** Kroppen blir vant til samme øvelser. Løsning: Bytt ut noen øvelser eller endre sett/rep-skjema (f.eks. gå fra 3x10 til 4x8 med tyngre vekt).

**Kosthold og søvn:** Uten nok protein, kalorier og søvn utvikler ikke kroppen seg. Løsning: Spis nok mat (spesielt protein), sov 7-9 timer per natt.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4: Bevegelighet og spenst
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_1_4: TextbookChapter = {
  id: 'kroppsoving-vg1-1-4',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '1.4',
  title: 'Bevegelighet og spenst',
  description: 'Lær om ulike former for tøying, bevegelighet og plyometrisk trening.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-1-4-intro',
      type: 'text',
      content: `## Bevegelighet og spenst - viktig for prestasjon og helse

Bevegelighet er evnen til å bevege leddene gjennom sitt fulle bevegelsesutslag. Spenst er evnen til å bruke muskler og sener eksplosivt. Begge er viktige for god funksjon, prestasjon og skadeforebygging.

**Hvorfor trene bevegelighet?**
- Bedre bevegelsesutslag i idretten
- Forebygger skader
- Reduserer muskelspenninger
- Bedre holdning
- Økt blodgjennomstrømning

**Hvorfor trene spenst?**
- Eksplosiv kraft (hopp, sprint)
- Raskere retningsendringer
- Sterkere sener og ledd
- Bedre koordinasjon`,
    },
    {
      id: 'kroppsoving-vg1-1-4-def-1',
      type: 'definition',
      title: 'Dynamisk vs. statisk tøying',
      content: `**Dynamisk tøying** er tøying gjennom bevegelse, uten å holde posisjonen.

**Kjennetegn:**
- Bevegelse gjennom bevegelsesutslaget
- Kontrollerte svingninger
- Aktiv muskelbruk
- Øker temperatur og blodgjennomstrømning

**Eksempler:**
- Svingninger med ben og armer
- Gående utfall
- Knehev
- Hofteåpning i bevegelse

**Når:** Før trening og kamp som oppvarming

**Statisk tøying** er tøying der man holder en posisjon i 20-60 sekunder.

**Kjennetegn:**
- Holder posisjonen stille
- Passiv tøying
- Rolig pust
- Fokus på avslapning

**Eksempler:**
- Hamstringtøying sittende
- Quadricepstøying stående
- Bryståpner
- Sit and reach

**Når:** Etter trening som nedkjøling, eller på egne bevegelighetsøkter

**Viktig:** Statisk tøying før eksplosiv aktivitet kan redusere kraft og spenstevne midlertidig. Bruk dynamisk tøying før trening.`,
    },
    {
      id: 'kroppsoving-vg1-1-4-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom dynamisk og statisk tøying. Når bør du bruke hver type?',
        subTasks: [],
        solution: 'Dynamisk tøying er tøying gjennom bevegelse uten å holde posisjonen, for eksempel svingninger og gående utfall. Det øker temperatur og blodgjennomstrømning. Dette brukes før trening og kamp som oppvarming. Statisk tøying er når man holder en tøyningsposisjon stille i 20-60 sekunder, med fokus på avslapning. Dette brukes etter trening som nedkjøling eller på egne bevegelighetsøkter. Viktig: Statisk tøying før eksplosiv aktivitet kan redusere kraft midlertidig.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-4-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-4-ex-4',
        number: '2',
        type: 'classic',
        task: 'Hvor lenge bør man vanligvis holde en statisk tøying for god effekt?',
        subTasks: [],
        multipleChoiceOptions: [
          '5-10 sekunder',
          '20-60 sekunder',
          '2-3 minutter',
          '10 minutter',
        ],
        solution: 'Riktig svar er b) 20-60 sekunder. For å få god effekt av statisk tøying bør man holde posisjonen i minimum 20-30 sekunder, ofte opp til 60 sekunder. Kortere tid (under 20 sek) gir liten effekt. Mye lengre tid er unødvendig og kan føre til for mye slapphet i muskelen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-4-def-2',
      type: 'definition',
      title: 'PNF-tøying',
      content: `**PNF (Proprioceptive Neuromuscular Facilitation)** er en avansert tøyningsmetode som kombinerer tøying og muskelkontraksjon.

**Hvordan det fungerer:**
1. Tøy muskelen til du føler strekk (15 sek)
2. Spenner muskelen isometrisk mot motstand (5-10 sek)
3. Slapp av
4. Tøy lenger (15-30 sek)

**Eksempel (hamstring):**
1. Ligg på ryggen, løft benet mot deg med rett kne (15 sek)
2. Press benet mot makkers hånd (som holder imot) i 10 sek
3. Slapp av
4. Makker løfter benet ditt lenger mot deg (15-30 sek)

**Fordeler:**
- Gir større bevegelsesutslag enn vanlig statisk tøying
- Øker styrke og stabilitet
- Effektivt for idrettsutøvere

**Ulemper:**
- Krever partner eller utstyr
- Mer komplisert teknikk
- Kan være slitsomt

**Når:** På egne bevegelighetsøkter, ikke før kamp eller hard trening`,
    },
    {
      id: 'kroppsoving-vg1-1-4-def-3',
      type: 'definition',
      title: 'Plyometrisk trening',
      content: `**Plyometrisk trening** (plyometri) er eksplosiv trening der muskelen strekkes raskt (eksentrisk) og umiddelbart etterfølges av en kraftig kontraksjon (konsentrisk).

**Prinsippet - strekk-forkortningssyklusen:**
1. Muskelen og senen strekkes raskt (landing)
2. Energi lagres som i en fjær
3. Energien frigjøres eksplosivt (avhopp)

**Eksempler på plyometriske øvelser:**
- Dyp- og stupphopp (drop jumps)
- Bokse-hopp
- Hopp over hekk
- Klapparmhevinger
- Kastet med medisinball

**Fordeler:**
- Øker eksplosiv kraft
- Forbedrer hoppehøyde og sprintevne
- Styrker sener og leddbånd
- Bedre koordinasjon og balanse

**Viktig:**
- Krever god grunnstyrke først
- Høy belastning på ledd og sener
- Ikke for nybegynnere
- Start lett og bygg opp gradvis
- God teknikk er avgjørende for å unngå skader`,
    },
    {
      id: 'kroppsoving-vg1-1-4-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-4-ex-2',
        number: '3',
        type: 'classic',
        task: 'Hva er plyometrisk trening?',
        subTasks: [],
        multipleChoiceOptions: [
          'Langsom styrketrening med tunge vekter',
          'Eksplosiv trening med hopp og kast',
          'Statisk tøying i 30 sekunder',
          'Utholdenhetstrening i lav intensitet',
        ],
        solution: 'Riktig svar er b) Eksplosiv trening med hopp og kast. Plyometrisk trening bruker strekk-forkortningssyklusen der muskelen strekkes raskt (som ved landing) og umiddelbart etterfølges av en eksplosiv kontraksjon (som ved avhopp). Dette øker spenst og eksplosiv kraft. Eksempler er boksehopp, dyp- og stupphopp, og kastet med medisinball.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-4-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-4-ex-6',
        number: '4',
        type: 'classic',
        task: 'Forklar hva strekk-forkortningssyklusen er og hvordan den brukes i plyometrisk trening.',
        subTasks: [],
        solution: 'Strekk-forkortningssyklusen (stretch-shortening cycle) er et fysiologisk prinsipp der en muskel først strekkes raskt (eksentrisk fase), deretter umiddelbart forkortes eksplosivt (konsentrisk fase). Når muskelen og senen strekkes raskt, lagres det elastisk energi som i en fjær. Denne energien frigjøres når muskelen trekker seg sammen igjen, noe som gir ekstra kraft. I plyometrisk trening brukes dette ved for eksempel dyp- og stupphopp: Man hopper ned fra en boks (strekk), lander (eksentrisk, lagrer energi), og hopper umiddelbart opp igjen (konsentrisk, frigjør energi). Dette gir mer eksplosiv kraft enn om man hadde stått stille og hoppet.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Dynamisk oppvarmingsrutine',
      problem: `Lag en 10-minutters dynamisk oppvarmingsrutine som forbereder kroppen på fotballkamp.`,
      solution: `**Dynamisk oppvarming før fotballkamp (10 min):**

**Fase 1 - Lett løping (3 min):**
- 2 min rolig jogging rundt banen
- 1 min med variasjon: sidesteg, baklengs, skifting i tempo

**Fase 2 - Dynamisk tøying i bevegelse (5 min):**
1. **Knehev:** 20 meter x 2 (løft kne til brystet, dynamisk)
2. **Hælspark:** 20 meter x 2 (spark hæl mot baken)
3. **Gående utfall:** 20 meter x 2 (dyp utfallsstilling, veksle ben)
4. **Fotballspesifikke svingninger:** 20 meter x 2 (svinge beina som i spark)
5. **Sidelengs løp:** 20 meter x 2 (åpne hoften)
6. **Armsving:** Fremover og bakover, store sirkler (30 sek)

**Fase 3 - Eksplosive elementer (2 min):**
1. **Korte spurter:** 3x20 meter (70-80% intensitet)
2. **Hopp:** 10 vertikalhopp på stedet
3. **Retningsendringer:** 5x slalomløp rundt kjegler

**Avslutning:**
- Rolig jogging i 1 minutt
- Klar for kamp

**Hvorfor denne rutinen?**
- Øker muskel- og kroppstemperatur
- Forbereder ledd og sener på eksplosive bevegelser
- Aktiverer nervesystemet
- Reduserer skaderisiko`,
    },
    {
      id: 'kroppsoving-vg1-1-4-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-4-ex-3',
        number: '5',
        type: 'classic',
        task: 'Beskriv tre dynamiske tøyeøvelser som passer i en oppvarming før fotballtrening.',
        subTasks: [],
        solution: `Tre dynamiske tøyeøvelser før fotball:

1. **Knehev i gange:** Gå fremover mens du løfter kneet opp mot brystet for hvert steg. Dette mobiliserer hoften og strekker gluteus og hamstrings dynamisk. Gjør 20 meter.

2. **Gående utfall:** Ta lange steg fremover og senk deg ned i en dyp utfallsstilling, veksle ben for hvert steg. Dette mobiliserer hoften og tøyer hoflebøyere, quadriceps og gluteus. Gjør 20 meter.

3. **Fotballspesifikke beinsvingninger:** Stå på ett ben og sving det andre benet fremover og bakover som i en sparkbevegelse, kontrollert. Dette mobiliserer hoften og forbereder på sparkbevegelser. Gjør 10-15 svingninger per ben.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-4-example-2',
      type: 'example',
      title: 'Eksempel: Nedkjølingsrutine med statisk tøying',
      problem: `Lag en 10-minutters nedkjølingsrutine etter styrketrening.`,
      solution: `**Nedkjøling etter styrketrening (10 min):**

**Fase 1 - Lett aktivitet (3 min):**
- Rolig gange eller lett jogging
- Senker puls og temperatur gradvis
- Rolig pust

**Fase 2 - Statisk tøying (7 min):**

**Underkropp (4 min):**
1. **Hamstring:** Sitt med ett ben strakt, bøy deg frem. Hold 30 sek x 2 (hver side)
2. **Quadriceps:** Stå på ett ben, hold foten bak deg. Hold 30 sek x 2 (hver side)
3. **Hofte/gluteus:** Ligg på ryggen, kryss ene benet over og dra mot brystet. Hold 30 sek x 2
4. **Legg:** Tøy leggen mot vegg. Hold 30 sek x 2 (hver side)

**Overkropp (3 min):**
1. **Bryst:** Stå i dørramme, arm ut til siden, vri kroppen bort. Hold 30 sek x 2
2. **Skuldre:** Dra armen over brystet. Hold 30 sek x 2 (hver side)
3. **Triceps:** Armen over hodet, bøy albuen, dra med andre hånd. Hold 30 sek x 2
4. **Rygg:** Kattøvelse på alle fire. Hold 30 sek

**Tips:**
- Tøy til du føler lett strekk, ikke smerte
- Rolig, dype åndedrag
- Fokus og avslapning
- Drikkevann`,
    },
    {
      id: 'kroppsoving-vg1-1-4-tip-1',
      type: 'tip',
      title: 'Praktiske tips for bevegelighet',
      content: `1. **Vær konsekvent:** Bevegelighet forbedres over tid. Tøy 3-5 ganger per uke for best effekt.

2. **Ikke tøy kald muskulatur:** Varm opp lett før du tøyer statisk. Kalde muskler er stivere og mer skadeutsatt.

3. **Pust rolig:** Dyp, rolig pust hjelper musklene å slappe av og gir bedre tøyningseffekt.

4. **Smerte er et varselsignal:** Tøying skal føles som et strekk, ikke smerte. Hvis det gjør vondt, har du gått for langt.

5. **Individuelle forskjeller:** Noen er naturlig mer smidige enn andre. Sammenlign deg med deg selv, ikke andre.

6. **Yoga og Pilates:** Utmerket for bevegelighet, styrke og kroppskontroll.

7. **Mobilitet vs. fleksibilitet:** Mobilitet er aktiv bevegelse i leddet, fleksibilitet er passivt bevegelsesutslag. Tren begge.`,
    },
    {
      id: 'kroppsoving-vg1-1-4-warning-1',
      type: 'warning',
      title: 'Vanlige feil ved tøying og bevegelighet',
      content: `**Statisk tøying før eksplosiv aktivitet:** Forskning viser at statisk tøying rett før sprint, hopp eller kamper kan redusere kraft og spenstevne. Bruk dynamisk tøying i oppvarmingen.

**For aggressiv tøying:** Å "sprette" eller tvinge kroppen inn i posisjoner kan gi skader. Tøying skal være gradvis og kontrollert.

**Holder pusten:** Mange holder pusten mens de tøyer. Dette gir mer spenning i musklene. Pust rolig og dypt.

**Fokuserer kun på problemområder:** Hvis du bare tøyer stive områder og ignorerer resten, kan du skape ubalanse. Tøy hele kroppen.

**For kort tid:** Å holde en statisk tøying i bare 5-10 sekunder gir liten effekt. Hold minimum 20-30 sekunder.

**Ignorerer styrke:** Bevegelighet uten styrke gir ustabile ledd. Kombiner alltid bevegelighet med styrketrening.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-1-4-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-4-ex-5',
        number: '6',
        type: 'classic',
        task: 'Hvorfor er det viktig å kombinere bevegelighet med styrketrening? Hva kan skje hvis man bare fokuserer på bevegelighet?',
        subTasks: [],
        solution: 'Det er viktig å kombinere bevegelighet med styrketrening fordi bevegelighet uten styrke kan gi ustabile ledd. Hvis man har stort bevegelsesutslag men svake muskler rundt leddet, øker risikoen for skader fordi leddet ikke har nok stabilitet og kontroll. Styrke gir kontroll gjennom hele bevegelsesutslaget. På samme måte kan mye styrketrening uten bevegelighet gjøre en stiv og redusere prestasjonsevnen. Balansen mellom styrke og bevegelighet er optimal for både prestasjon og skadeforebygging.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-4-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Test din bevegelighet med en partner. Velg 3 tøyeøvelser (f.eks. sit-and-reach for hamstrings, skulderbevegelighet, hoftebevegelighet) og utfør dem. Beskriv hva du oppdaget om din bevegelighet og sammenlign med partneren din.',
        subTasks: [],
        solution: `Eksempel på bevegelighetstesting:

**Test 1 - Sit-and-reach (hamstrings og nedre rygg):**
Meg: Når 5 cm forbi tærne. Vurdering: Moderat bevegelighet.
Partner: Når 10 cm forbi tærne. Vurdering: God bevegelighet.

**Test 2 - Skulderfleksibilitet (armer bak ryggen):**
Meg: Fingrene møtes akkurat bak ryggen. Vurdering: God bevegelighet.
Partner: 5 cm gap mellom fingrene. Vurdering: Moderat bevegelighet, bør jobbe med dette.

**Test 3 - Dyp knebøy (hoftebeveg­elighet og ankelmobilitet):**
Meg: Klarer dyp knebøy med hælene i bakken, men må lene frem. Vurdering: Trenger mer ankelmobilitet.
Partner: Klarer dyp knebøy med rett overkropp. Vurdering: Meget god bevegelighet.

**Konklusjon:** Min bevegelighet er generelt god, men jeg bør jobbe spesielt med ankelmobilitet. Partner har god hoftebevegelighet, men bør jobbe med skulderfleksibilitet.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5: Treningsplanlegging og mål
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_1_5: TextbookChapter = {
  id: 'kroppsoving-vg1-1-5',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '1.5',
  title: 'Treningsplanlegging og mål',
  description: 'Lær å sette SMART-mål og planlegge trening med periodisering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-1-5-intro',
      type: 'text',
      content: `## Treningsplanlegging - veien til målet

God treningsplanlegging er avgjørende for å nå dine mål. Uten en plan risikerer du å trene feil, for mye eller for lite. Med en god plan trener du smart og effektivt.

**Hvorfor planlegge treningen?**
- Sikrer progresjon mot målet
- Balanserer belastning og restitusjon
- Gir struktur og motivasjon
- Reduserer skaderisiko
- Optimaliserer treningseffekten

I dette kapittelet lærer du å sette gode mål og planlegge treningen systematisk.`,
    },
    {
      id: 'kroppsoving-vg1-1-5-def-1',
      type: 'definition',
      title: 'SMART-mål',
      content: `SMART er en metode for å sette gode, oppnåelige mål. Alle gode treningsmål bør være SMART:

**S - Spesifikk (Specific):**
- Målet må være konkret og tydelig
- Ikke: "Bli bedre i form"
- Ja: "Løpe 3 km på under 15 minutter"

**M - Målbar (Measurable):**
- Du må kunne måle om du når målet
- Bruk tall, tid eller andre konkrete kriterier
- Eksempel: "Øke knebøy fra 40 kg til 60 kg"

**A - Oppnåelig (Achievable):**
- Målet må være realistisk ut fra dine forutsetninger
- Utfordrende, men ikke umulig
- Eksempel: Å løpe maraton etter 3 måneders trening er ikke realistisk

**R - Relevant (Relevant):**
- Målet må være viktig for deg
- Må passe med dine interesser og verdier
- Eksempel: Hvis du elsker fotball, sett fotballrelaterte mål

**T - Tidsbestemt (Time-bound):**
- Sett en konkret tidsfrist
- Eksempel: "Innen 1. juni" eller "Om 12 uker"

**Eksempel på SMART-mål:**
- "Jeg skal løpe 5 km på under 25 minutter innen 1. mai (12 uker), ved å trene 3 ganger per uke."
- "Jeg skal gjøre 10 pull-ups i strekk innen sommerferien (16 uker), ved å trene styrke 2 ganger per uke."`,
    },
    {
      id: 'kroppsoving-vg1-1-5-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva SMART-mål betyr. Bruk et eget eksempel fra idrett eller trening.',
        subTasks: [],
        solution: `SMART-mål er en metode for å sette gode, oppnåelige mål:

**S - Spesifikk:** Målet må være konkret og tydelig
**M - Målbar:** Du må kunne måle om du når målet
**A - Oppnåelig:** Målet må være realistisk
**R - Relevant:** Målet må være viktig for deg
**T - Tidsbestemt:** Sett en konkret tidsfrist

Eksempel: "Jeg skal forbedre min Cooper-test fra 2100m til 2400m innen 1. juni (3 måneder), ved å løpe 3 ganger per uke og fokusere på intervalltrening."

Dette er spesifikt (Cooper-test), målbart (2100m til 2400m), oppnåelig (300m forbedring på 3 mnd er realistisk), relevant (hvis du vil forbedre utholdenhet), og tidsbestemt (1. juni).`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-5-def-2',
      type: 'definition',
      title: 'Prosess- vs. resultatmål',
      content: `Det finnes to typer mål: prosessmål og resultatmål.

**Resultatmål (outcome goals):**
- Fokuserer på sluttresultatet
- Eksempel: "Vinne kampen", "Løpe 3 km på 14 minutter", "Veie 70 kg"
- Fordeler: Tydelig, motiverende
- Ulemper: Ikke alltid fullt kontrollerbar (vær, konkurrenter, form på dagen)

**Prosessmål (process goals):**
- Fokuserer på handlingene som leder til resultatet
- Eksempel: "Trene 4 ganger per uke", "Spise 5 grønnsaker daglig", "Sove 8 timer hver natt"
- Fordeler: Fullt kontrollerbar, bygger gode vaner
- Ulemper: Mindre umiddelbart motiverende

**Best praksis:**
Kombiner begge typene. Sett et resultatmål (hva du vil oppnå), og flere prosessmål (hva du må gjøre for å komme dit).

**Eksempel:**
- Resultatmål: Løpe 5 km på under 25 minutter om 12 uker
- Prosessmål:
  - Løpe 3 ganger per uke
  - Gjøre 1 intervalltrening per uke
  - Sove minst 8 timer hver natt
  - Spise sunt 6 dager per uke`,
    },
    {
      id: 'kroppsoving-vg1-1-5-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-5-ex-3',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom prosessmål og resultatmål. Hvorfor er det smart å ha begge typer?',
        subTasks: [],
        solution: 'Resultatmål fokuserer på sluttresultatet (f.eks. "løpe 5 km på under 25 minutter", "vinne kampen"). Disse er tydelige og motiverende, men ikke alltid fullt kontrollerbare. Prosessmål fokuserer på handlingene som leder til resultatet (f.eks. "trene 4 ganger per uke", "sove 8 timer hver natt"). Disse er fullt kontrollerbare og bygger gode vaner. Det er smart å ha begge fordi resultatmålet gir retning og motivasjon (hvor du skal), mens prosessmålene gir deg konkrete handlinger du kan gjøre hver dag for å komme dit (hvordan du kommer dit). Kombinasjonen sikrer både motivasjon og progresjon.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-5-def-3',
      type: 'definition',
      title: 'Periodisering - mikro-, meso- og makrosyklus',
      content: `Periodisering er systematisk planlegging av trening over tid, der man varierer belastning og intensitet for å oppnå best mulig utvikling.

**Makrosyklus (langperiode):**
- Hele treningsåret eller sesongen
- Typisk 6-12 måneder
- Eksempel: Hele fotballsesongen fra januar til november

**Mesosyklus (mellomperiode):**
- En treningsblokk med spesifikt fokus
- Typisk 3-6 uker
- Eksempel: 4 ukers grunntrening, deretter 4 ukers styrketrening

**Mikrosyklus (kortperiode):**
- Én treningsuke
- Typisk 5-7 dager
- Eksempel: Mandag styrke, onsdag intervaller, fredag lang rolig

**Hvorfor periodisere?**
- Unngår overtrening og stagnasjon
- Gir variasjon i treningen
- Bygger systematisk opp mot mål
- Optimaliserer restitusjon
- Når topp form til riktig tid (sesongstart, viktig konkurranse)

**Eksempel på periodisering (fotball):**
- **Fase 1 (jan-feb):** Grunntrening (8 uker) - utholdenhet og grunnstyrke
- **Fase 2 (mars-apr):** Styrketrening (8 uker) - maksimal styrke og spenst
- **Fase 3 (mai-okt):** Sesong (24 uker) - vedlikeholde form, teknisk/taktisk
- **Fase 4 (nov-des):** Hvile/aktiv restitusjon (8 uker) - lett aktivitet`,
    },
    {
      id: 'kroppsoving-vg1-1-5-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-5-ex-2',
        number: '3',
        type: 'classic',
        task: 'Hva er en mesosyklus i periodisering?',
        subTasks: [],
        multipleChoiceOptions: [
          'En treningsuke',
          'En treningsblokk på 3-6 uker',
          'Hele treningsåret',
          'En enkelt treningsøkt',
        ],
        solution: 'Riktig svar er b) En treningsblokk på 3-6 uker. Mesosyklus er mellomperioden i periodisering, typisk 3-6 uker med spesifikt fokus (f.eks. grunntrening, styrketrening). Mikrosyklus er én uke, mens makrosyklus er hele treningsåret/sesongen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-5-def-4',
      type: 'definition',
      title: 'Overtrening og restitusjonsuke',
      content: `**Overtrening** oppstår når kroppen får for mye belastning uten nok restitusjon over lang tid.

**Symptomer på overtrening:**
- Vedvarende tretthet
- Svekket prestasjon
- Økt hvilepuls (5-10 slag over normalt)
- Hyppige infeksjoner/sykdom
- Søvnproblemer
- Irritabilitet og dårlig humør
- Appetittløshet
- Økt skaderisiko

**Forebygging:**
- Følg treningsplanen, ikke tren mer enn planlagt
- Sørg for nok søvn (8-9 timer for ungdom)
- Spis nok og variert
- Ha regelmessige restitusjonsuke (deload)

**Restitusjonsuke (deload):**
En uke med redusert treningsvolum og/eller intensitet for å la kroppen restituere.

**Hvordan:**
- Reduser treningsvolum med 40-50% (f.eks. 2 økter i stedet for 4)
- Behold intensiteten, men gjør færre sett og reps
- Eller: Reduser intensiteten, men behold volumet

**Når:**
- Hver 3.-6. uke, avhengig av treningsbelastning
- Før viktige konkurranser (tapering)
- Hvis du merker tegn på overtrening

**Resultat:**
Kommer tilbake sterkere etter restitusjonsuken - kroppen trenger tid til å tilpasse seg.`,
    },
    {
      id: 'kroppsoving-vg1-1-5-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre symptomer på overtrening. Hvordan kan man forebygge overtrening?',
        subTasks: [],
        solution: `Tre symptomer på overtrening:
1. Vedvarende tretthet - føler seg sliten selv etter hvile
2. Økt hvilepuls - 5-10 slag høyere enn normalt
3. Svekket prestasjon - blir dårligere i stedet for bedre

Forebygging av overtrening:
- Følg treningsplanen, ikke tren mer enn planlagt
- Sørg for nok søvn (8-9 timer for ungdom)
- Spis nok og variert mat
- Ha regelmessige restitusjonsuke (deload) hver 3-6. uke
- Lytt til kroppens signaler og ta ekstra hvile hvis nødvendig
- Balansere hard og lett trening
- Unngå å trene hardt hver dag - kroppen trenger hvile for å utvikle seg`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-5-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er hensikten med en restitusjonsuke (deload)?',
        subTasks: [],
        multipleChoiceOptions: [
          'Å trene enda hardere for raskere fremgang',
          'Å la kroppen restituere og komme tilbake sterkere',
          'Å spare tid ved å hoppe over trening',
          'Å straffe seg selv for dårlig prestasjon',
        ],
        solution: 'Riktig svar er b) Å la kroppen restituere og komme tilbake sterkere. En restitusjonsuke (deload) er en uke med redusert treningsvolum (40-50% mindre) for å la kroppen restituere og tilpasse seg den foregående treningsbelastningen. Man kommer typisk tilbake sterkere etter en slik uke. Dette gjøres hver 3-6. uke for å forebygge overtrening og optimalisere utvikling.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-5-example-1',
      type: 'example',
      title: 'Eksempel: 12-ukers treningsplan',
      problem: `Lag en 12-ukers periodisert treningsplan for en person som vil løpe 5 km på under 25 minutter. Nåværende tid er 28 minutter.`,
      solution: `**12-ukers treningsplan: 5 km på under 25 minutter**

**Mål:** Løpe 5 km på under 25 min (5:00 min/km) innen 12 uker

**Nåværende nivå:** 5 km på 28 min (5:36 min/km), løper 2 ganger per uke

**Mesosyklus 1: Grunnbygging (uke 1-4)**
*Fokus: Bygge grunnkondisjon og volum*

- Mandag: 4-5 km rolig løp (sone 2)
- Onsdag: 3 km rolig + 4x2 min i sone 3, 2 min pause
- Lørdag: 6-7 km lang rolig tur (LRT)
- Restitusjonsuke 4: 40% reduksjon i volum

**Mesosyklus 2: Styrke og terskel (uke 5-8)**
*Fokus: Øke intensitet og arbeidskapasitet*

- Mandag: 5 km rolig
- Onsdag: 2x10 min terskelløp (sone 3), 5 min pause
- Fredag: 6x400m i 5K-tempo (ca. 2:00/400m), 90 sek pause
- Søndag: 8-10 km LRT
- Restitusjonsuke 8: 50% reduksjon

**Mesosyklus 3: Spesifikk + konkurranse (uke 9-12)**
*Fokus: 5K-tempo og forberedelse*

- Mandag: 4 km rolig
- Onsdag: 4x1 km i 5K-tempo (5:00 min/km), 3 min pause
- Fredag: 3 km rolig + 3x800m i 5K-tempo, 2 min pause
- Søndag: 7 km LRT
- Uke 12: Test 5 km (onsdag), lett jogr før og etter

**Prosessmål:**
- Gjennomføre alle økter
- Sove 8 timer per natt
- Notere alle økter i treningsdagbok`,
    },
    {
      id: 'kroppsoving-vg1-1-5-example-2',
      type: 'example',
      title: 'Eksempel: Sette SMART-mål',
      problem: `Jonas (17 år) sier: "Jeg vil bli bedre til fotball". Hjelp ham å gjøre dette om til SMART-mål.`,
      solution: `**Fra vagt ønske til SMART-mål:**

**Opprinnelig:** "Jeg vil bli bedre til fotball"
- For vagt, ikke målbart, ingen tidsfrist

**Analyse av hva Jonas vil:**
Etter samtale finner vi ut at Jonas spesifikt vil:
- Øke sprinttid på 30 meter
- Bli sterkere i dueller
- Forbedre utholdenhet

**SMART-mål 1: Sprint**
"Jeg skal forbedre min 30 meter sprinttid fra 4,5 sekunder til 4,2 sekunder innen 1. mai (10 uker), ved å trene sprint og styrke 2 ganger per uke."

- **S:** Spesifikk - 30m sprint
- **M:** Målbar - fra 4,5 til 4,2 sekunder
- **A:** Oppnåelig - 0,3 sek forbedring på 10 uker er realistisk
- **R:** Relevant - viktig for fotball
- **T:** Tidsbestemt - innen 1. mai

**SMART-mål 2: Styrke**
"Jeg skal øke knebøy fra 50 kg til 70 kg (3x8 reps) innen 1. mai, ved å styrketrene 2 ganger per uke."

- Spesifikk, målbar, oppnåelig, relevant, tidsbestemt ✓

**SMART-mål 3: Utholdenhet**
"Jeg skal forbedre Cooper-testen fra 2400m til 2700m innen 1. mai, ved å løpe 2 ganger per uke i tillegg til fotballtreningen."

- Spesifikk, målbar, oppnåelig, relevant, tidsbestemt ✓

**Prosessmål for å nå disse:**
- Trene styrke mandager og torsdager
- Løpe tirsdager og søndager
- Sove minst 8 timer hver natt
- Spise sunt 6 dager per uke`,
    },
    {
      id: 'kroppsoving-vg1-1-5-tip-1',
      type: 'tip',
      title: 'Praktiske tips for treningsplanlegging',
      content: `1. **Skriv ned planen:** En plan i hodet er ingen plan. Skriv ned treningsplanen og heng den opp.

2. **Vær realistisk:** Ikke planlegg 6 treningsøkter per uke hvis du har mye lekser og aktiviteter. 3-4 økter er mer realistisk for de fleste.

3. **Ha buffer:** Livet skjer. Planlegg for at noen økter vil bli droppet (sykdom, eksamener, sosiale aktiviteter).

4. **Evaluer underveis:** Hver 3.-4. uke, evaluer om planen fungerer. Må du justere?

5. **Feire milepæler:** Sett delmål og feir når du når dem. Det holder motivasjonen oppe.

6. **Treningsdagbok:** Før treningsdagbok (app eller papir). Skriv hva du gjorde, hvordan det føltes, puls, vekt, etc.

7. **Fleksibilitet:** Planen er en guide, ikke en lov. Hvis kroppen trenger hvile, ta hvile. Bedre å droppe én økt enn å bli syk.

8. **Inkluder sosialt:** Tren med venner når mulig. Det gjør det morsommere og holder motivasjonen.`,
    },
    {
      id: 'kroppsoving-vg1-1-5-warning-1',
      type: 'warning',
      title: 'Vanlige feil ved treningsplanlegging',
      content: `**For ambisiøs plan:** Mange lager en plan som krever perfekt gjennomføring. Når livet kommer i veien, feiler de og gir opp. Lag en plan du faktisk kan følge.

**Ingen progresjon:** En plan uten progresjon fører til stagnasjon. Kroppen tilpasser seg og slutter å utvikle seg. Øk gradvis belastning over tid.

**For mye variasjon:** Å bytte program hver uke gir ikke kroppen tid til å tilpasse seg. Hold deg til en plan i 8-12 uker før du endrer drastisk.

**Ignorerer restitusjon:** Mange planlegger bare treningsøkter, men glemmer å planlegge hvile. Kroppen utvikler seg i hvile, ikke under trening.

**Urealistiske mål:** Å sette mål som "bli som Haaland på 8 uker" er demotiverende når du ikke når det. Sett utfordrende, men realistiske mål.

**Kopierer andres planer:** Det som fungerer for en eliteutøver fungerer ikke for en nybegynner. Tilpass planen til DITT nivå.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-1-5-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en enkel 4-ukers treningsplan (mikrosykluser) for deg selv med et realistisk mål. Inkluder både resultatmål og prosessmål.',
        subTasks: [],
        solution: `Eksempel på 4-ukers treningsplan:

**Resultatmål:** Gjøre 15 armhevinger i strekk innen 4 uker (kan nå 8 i dag)

**Prosessmål:**
- Trene armhevinger 3 ganger per uke
- Gjøre 4 sett hver økt
- Sove minst 8 timer hver natt
- Spise proteinrik mat etter hver økt

**Treningsplan:**

**Uke 1:**
- Mandag/onsdag/fredag: 4 sett à 6 reps (24 totalt)
- Fokus: Perfekt teknikk

**Uke 2:**
- Mandag/onsdag/fredag: 4 sett à 7 reps (28 totalt)
- Legg til 1 rep per sett

**Uke 3:**
- Mandag/onsdag/fredag: 4 sett à 8-9 reps (32-36 totalt)
- Progresjon fortsetter

**Uke 4:**
- Mandag: 4 sett à 10 reps
- Onsdag: Lett økt, 3 sett à 6 reps
- Fredag: Test - hvor mange kan jeg gjøre i strekk?

(Dette er et eksempel - eleven skal lage sin egen plan basert på egne mål)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.6: Testing og evaluering av fysisk form
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_1_6: TextbookChapter = {
  id: 'kroppsoving-vg1-1-6',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '1.6',
  title: 'Testing og evaluering av fysisk form',
  description: 'Lær om ulike tester for å måle fysisk form og hvordan du kan bruke resultatene.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-1-6-intro',
      type: 'text',
      content: `## Testing og evaluering - mål fremgang

Fysiske tester er viktige verktøy for å måle din nåværende form og følge med på fremgangen. Uten tester er det vanskelig å vite om treningen din fungerer.

**Hvorfor teste fysisk form?**
- Kartlegge nåværende nivå
- Sette realistiske mål
- Evaluere om treningen fungerer
- Motivere gjennom målbare resultater
- Justere treningsplanen basert på resultater

God testing krever standardiserte forhold - samme sted, samme tid på døgnet, samme oppvarming - for å kunne sammenligne resultater over tid.`,
    },
    {
      id: 'kroppsoving-vg1-1-6-def-1',
      type: 'definition',
      title: 'Cooper-test',
      content: `**Cooper-testen** er en utholdenhet test der målet er å løpe så langt som mulig på 12 minutter.

**Hvordan gjennomføre:**
1. Varm opp i 10-15 minutter
2. Løp på flat bane (400m bane er ideelt)
3. Løp så langt du klarer på nøyaktig 12 minutter
4. Mål distansen

**Vurderingsnorm for 16-17 år (ca.):**

**Menn:**
- Under 2000m: Svak kondisjon
- 2000-2400m: Under middels
- 2400-2800m: Middels
- 2800-3200m: God kondisjon
- Over 3200m: Meget god kondisjon

**Kvinner:**
- Under 1800m: Svak kondisjon
- 1800-2200m: Under middels
- 2200-2600m: Middels
- 2600-3000m: God kondisjon
- Over 3000m: Meget god kondisjon

**Tips:**
- Start ikke for fort - det er bedre å øke farten etter 6 minutter
- Finn en jevn rytme
- Hold oversikt over tid og distanse under testen
- Ha god oppvarming først

**Beregning av VO₂maks (ca.):**
VO₂maks (ml/kg/min) ≈ (Distanse i meter - 504) / 45

Eksempel: 2700 meter gir ca. (2700-504)/45 = 48,8 ml/kg/min`,
    },
    {
      id: 'kroppsoving-vg1-1-6-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva Cooper-testen er og hva den måler. Hvordan kan du bruke resultatene?',
        subTasks: [],
        solution: 'Cooper-testen er en utholdenhetstest der målet er å løpe så langt som mulig på 12 minutter. Den måler utholdenhet og gir et estimat på VO₂maks (maksimalt oksygenopptak). Testen gjennomføres på flat bane etter god oppvarming. Resultatene kan brukes til å: 1) Kartlegge nåværende kondisjon, 2) Sette realistiske treningsmål, 3) Evaluere om treningen fungerer ved å teste på nytt etter 8-12 uker, 4) Sammenligne med normtabeller for alderen. For eksempel kan du beregne VO₂maks med formelen (distanse - 504)/45.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-6-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-6-ex-3',
        number: '2',
        type: 'classic',
        task: 'En 17 år gammel jente løper 2500 meter på Cooper-testen. Vurder resultatet og gi råd om videre trening.',
        subTasks: [],
        solution: `Vurdering: 2500 meter for en 17 år gammel jente er middels til god kondisjon (normalt er 2200-2600m middels, 2600-3000m god).

Anslått VO₂maks: (2500-504)/45 = ca. 44 ml/kg/min, som er middels til godt.

Råd for videre trening:
- Hun har et godt grunnlag å bygge videre på
- For å forbedre seg bør hun fokusere på variasjon: lange rolige turer (sone 2) kombinert med intervalltrening (sone 4)
- 3-4 løpeøkter per uke vil gi god fremgang
- Eksempel: 2 rolige lange turer, 1 intervalltrening (4x4 min), 1 terskeltrening
- Retest om 8-12 uker for å se fremgang
- Mål kan være å nå 2700-2800 meter om 12 uker`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-6-def-2',
      type: 'definition',
      title: 'Beep-test (Yo-Yo test)',
      content: `**Beep-testen** (også kalt Yo-Yo test eller shuttlerun) er en progressiv utholdenhet test der du løper frem og tilbake mellom to kjegler mens hastigheten øker.

**Hvordan gjennomføre:**
1. Sett opp to kjegler 20 meter fra hverandre
2. Start på første "beep" (lydsignal)
3. Løp til andre kjeglen før neste beep
4. Snur og løper tilbake før neste beep
5. Hastigheten øker gradvis (beepene kommer tettere)
6. Testen er over når du ikke rekker kj eglen to ganger på rad

**Nivåer:**
- Starter på nivå 1 (lett tempo)
- Hvert nivå varer ca. 1 minutt
- Hastigheten øker for hvert nivå
- Nivå 13-14 er typisk for godt trente ungdommer

**Fordeler:**
- Krever lite utstyr (kjegler, app med beep-lyd)
- Kan gjøres inne
- Lettere å presse seg enn Cooper-test
- Vanlig i lagidretter

**Vurdering 16-17 år:**
- Nivå 5-7: Under middels
- Nivå 8-10: Middels
- Nivå 11-13: God kondisjon
- Over nivå 13: Meget god kondisjon

**Tips:**
- Reguler farten - ikke sprint fra start
- Snur raskt ved kjeglene
- Pust jevnt og rolig
- God oppvarming først`,
    },
    {
      id: 'kroppsoving-vg1-1-6-def-3',
      type: 'definition',
      title: 'Styrketester',
      content: `Styrketester måler muskelstyrke på ulike måter. Her er de vanligste:

**1. 1RM-test (One Repetition Maximum):**
- Maksimal vekt du kan løfte én gang med god teknikk
- Brukes i knebøy, benkpress, markløft
- Krever erfaring og god teknikk
- Ikke for nybegynnere

**Hvordan:**
- Varm opp grundig
- Start med lett vekt, øk gradvis
- Test deg frem til maksimal vekt
- Hvil 3-5 minutter mellom forsøk

**2. Armhevinger (push-ups):**
- Antall armhevinger med god teknikk til utmattelse
- Bryst skal nesten ned til gulvet

**Vurdering 16-17 år (maks antall):**
- Gutter: Under 15 = svakt, 15-25 = middels, over 25 = godt
- Jenter: Under 10 = svakt, 10-20 = middels, over 20 = godt

**3. Sit-ups:**
- Antall sit-ups på 60 sekunder

**Vurdering 16-17 år:**
- Under 25 = svakt
- 25-40 = middels
- Over 40 = godt

**4. Stående lengdehopp:**
- Hopp fremover fra stående stilling
- Måler beneksplosivitet

**Vurdering 16-17 år:**
- Gutter: Under 180cm = svakt, 180-220cm = middels, over 220cm = godt
- Jenter: Under 150cm = svakt, 150-190cm = middels, over 190cm = godt`,
    },
    {
      id: 'kroppsoving-vg1-1-6-def-4',
      type: 'definition',
      title: 'Bevegelighetstest',
      content: `**Sit-and-reach test** er den vanligste bevegelighetstest en. Den måler bevegelighet i hamstrings og nedre rygg.

**Hvordan gjennomføre:**
1. Sitt på gulvet med rette ben
2. Føttene flate mot en boks eller vegg
3. Bøy deg frem med rette armer
4. Strekk deg så langt du kan uten å bøye knærne
5. Hold posisjonen i 2 sekunder
6. Mål distansen forbi tærne (+) eller før tærne (-)

**Vurdering:**
- Meget dårlig: Mer enn 10cm før tærne (-10cm)
- Dårlig: 0 til -10cm
- Middels: 0 til +10cm
- God: +10 til +20cm
- Meget god: Over +20cm

**Andre bevegelighetstest er:**

**Skuldermobilitet:**
- Rekk hendene mot hverandre bak ryggen
- En arm over skulder, en arm under
- Måler om fingrene møtes

**Dype knebøy:**
- Kan du gjøre dyp knebøy med hæler i bakken?
- Måler hofte-, ankel- og brystmobilitet
- Viktig for grunnleggende bevegelse

**Hoftemobilitet:**
- Ligg på ryggen, løft rett ben
- Måler hamstring-bevegelighet
- Bør komme til 80-90 grader`,
    },
    {
      id: 'kroppsoving-vg1-1-6-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-6-ex-2',
        number: '3',
        type: 'classic',
        task: 'Hva måler sit-and-reach testen?',
        subTasks: [],
        multipleChoiceOptions: [
          'Styrke i magemusklene',
          'Bevegelighet i hamstrings og nedre rygg',
          'Balanse',
          'Utholdenhet',
        ],
        solution: 'Riktig svar er b) Bevegelighet i hamstrings og nedre rygg. Sit-and-reach testen gjennomføres ved å sitte med rette ben og bøye seg frem så langt man kan. Den måler fleksibilitet i bakside lår (hamstrings) og nedre del av ryggen. God bevegelighet her er viktig for rygg helse og funksjon.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Testbatteri for helhetlig vurdering',
      problem: `Lag et komplett testbatteri som måler utholdenhet, styrke, spenst og bevegelighet. Testen skal ta ca. 45 minutter å gjennomføre.`,
      solution: `**Komplett testbatteri for fysisk form (45 min):**

**Oppvarming (10 min):**
- 5 min lett jogging
- Dynamisk tøying av hele kroppen
- 2-3 lette oppvarmingssett av testene

**Test 1: Cooper-test (15 min):**
- 12 minutters løp
- Måler: Utholdenhet/VO₂maks
- Noter: Distanse i meter

**Hvile/overgang (5 min)**

**Test 2: Armhevinger (3 min):**
- Maksimalt antall med god teknikk
- Måler: Overkroppsstyrke (dyttemuskulatur)
- Noter: Antall repetisjoner

**Test 3: Sit-ups 60 sek (3 min):**
- Maksimalt antall på 60 sekunder
- Måler: Core-styrke
- Noter: Antall repetisjoner

**Test 4: Stående lengdehopp (3 min):**
- 3 forsøk, beste teller
- Måler: Beneksplosivitet/spenst
- Noter: Lengde i centimeter

**Test 5: Sit-and-reach (3 min):**
- 2 forsøk, beste teller
- Måler: Bevegelighet (hamstrings/rygg)
- Noter: Distanse i cm (+ eller -)

**Nedkjøling (3 min):**
- Lett jogging/gange
- Tøying

**Evaluering:**
Sammenlign resultatene med normtabeller og dine tidligere resultater. Gjenta testen hver 8-12. uke for å følge fremgang.`,
    },
    {
      id: 'kroppsoving-vg1-1-6-tip-1',
      type: 'tip',
      title: 'Praktiske tips for fysiske tester',
      content: `1. **Standardiser testforholdene:** Test alltid under samme forhold (tid på døgnet, sted, oppvarming) for sammenlignbare resultater.

2. **God oppvarming:** Varme, forberedte muskler gir bedre og tryggere testresultater. 10-15 minutter oppvarming er minimum.

3. **Ikke test når du er syk eller skadet:** Vent til du er frisk. Testing når du er syk gir feil bilde og øker skaderisiko.

4. **Hvil før test:** Ta en hviledag dagen før testing. Du skal være uthvilt for å prestere best mulig.

5. **Noter alt:** Skriv ned resultater, dato, forhold (vær, underlagnader, hvordan du følte deg). Dette hjelper deg tolke resultatene.

6. **Test jevnlig, men ikke for ofte:** Hver 8-12. uke er passe. Oftere enn hver 4. uke gir lite mening - kroppen trenger tid til å utvikle seg.

7. **Fokuser på egen fremgang:** Sammenlign deg med dine tidligere resultater, ikke med andre. Alle har ulike forutsetninger.

8. **Bruk resultatene konstruktivt:** Hvis en test viser svakhet, bruk det til å justere treningsplanen. Tester er verktøy for utvikling.`,
    },
    {
      id: 'kroppsoving-vg1-1-6-warning-1',
      type: 'warning',
      title: 'Vanlige feil ved testing',
      content: `**Dårlig oppvarming:** Mange hopper rett inn i testen uten god oppvarming. Dette gir dårligere resultater og øker skaderisiko.

**Starter for hardt:** I utholdenhetstester starter mange alt for hardt og "dør" etter halvveis. Fordel kreftene!

**Dårlig teknikk:** I styrketester teller ikke repetisjoner med dårlig teknikk. Det gir feil bilde av din styrke.

**Tester for ofte:** Å teste hver uke eller annenhver uke gir lite mening og tar fokus fra treningen. Test hver 8-12. uke.

**Sammenligner ulike testforhold:** Å teste ute en gang og inne neste gang, eller å teste om morgenen én gang og om kvelden neste gang, gir ikke sammenlignbare resultater.

**Gir opp for tidlig:** I maks-tester må du være villig til å presse deg. Mange stopper før de når sitt faktiske maksimum.

**Ignorerer kontekst:** Hvis du har dårlig søvn, er stresset, nettopp har vært syk, vil testresultatene bli dårligere. Ta dette med i vurderingen.`,
    },
    {
      id: 'kroppsoving-vg1-1-6-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor ofte bør man gjennomføre fysiske tester for å følge med på fremgangen?',
        subTasks: [],
        multipleChoiceOptions: [
          'Hver uke',
          'Hver 2.-3. uke',
          'Hver 8.-12. uke',
          'Bare én gang i året',
        ],
        solution: 'Riktig svar er c) Hver 8.-12. uke. Kroppen trenger tid til å utvikle seg, og testing oftere enn hver 4. uke gir lite mening. Hver 8-12. uke er et godt intervall for å se reell fremgang. Testing tar også mye energi og kan forstyrre den ordinære treningen, så det bør ikke gjøres for ofte. Hver 8-12. uke gir god balanse mellom å følge fremgang og fokusere på treningen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-1-6-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er det viktig å standardisere testforholdene når du tester fysisk form?',
        subTasks: [],
        solution: 'Det er viktig å standardisere testforholdene fordi mange faktorer påvirker prestasjonen: tid på døgnet (man er ofte sterkere/raskere på ettermiddagen), temperatur, underlag, oppvarming, søvn, stress, osv. Hvis du tester under forskjellige forhold, vet du ikke om endring i resultatet skyldes faktisk forbedring eller bare ulike testforhold. For å få sammenlignbare resultater må du teste på samme sted, samme tid på døgnet, med samme oppvarming, og være like godt uthvilt. Da kan du være trygg på at fremgang i resultatene faktisk reflekterer forbedret form.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-6-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv hvordan du ville testet fysisk form i fotball. Hvilke tester ville du brukt og hvorfor?',
        subTasks: [],
        solution: `Testbatteri for fotball:

**1. Beep-test eller Yo-Yo test:**
- Måler utholdenhet med gjentatte spurter
- Relevant for fotball med mye løping frem og tilbake
- Bedre enn Cooper-test for fotballspesifikk utholdenhet

**2. 20-30 meter sprinttest:**
- Måler akselerasjon og toppfart
- Viktig i fotball for å komme først til ball

**3. Stående lengdehopp eller vertikalhopp:**
- Måler beneksplosivitet
- Viktig for dueller og heading

**4. Illinois agility test (smidighetstest):**
- Måler evne til retningsendring
- Direkte overførbart til fotball

**5. Styrke (f.eks. knebøy eller utfall):**
- Måler benstyrke
- Viktig for spark, dueller, skuddstyrke

**Hvorfor disse testene:**
Fotball krever en kombinasjon av utholdenhet, sprint, spenst, smidighet og styrke. Disse testene dekker alle disse områdene og er fotballspesifikke. Cooper-test alene er ikke nok for fotball.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.7: Tilpasset trening for alle
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_1_7: TextbookChapter = {
  id: 'kroppsoving-vg1-1-7',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '1.7',
  title: 'Tilpasset trening for alle',
  description: 'Hvordan tilpasse trening til individuelle forutsetninger og inkludere alle.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-1-7-intro',
      type: 'text',
      content: `## Tilpasset trening - trening for alle

Alle har rett til å delta i fysisk aktivitet og idrett, uavhengig av forutsetninger. Tilpasset trening handler om å individualisere treningen slik at alle kan delta på sitt nivå.

**Hvorfor er tilpasset trening viktig?**
- Alle har ulike utgangspunkt og mål
- Inkludering gir bedre læringsmiljø
- Forebygger frafall fra idrett
- Sikrer at alle kan utvikle seg
- Fremmer likeverd og mangfold

God tilpassing krever kunnskap om individuelle behov, kreativitet og vilje til å finne løsninger.`,
    },
    {
      id: 'kroppsoving-vg1-1-7-def-1',
      type: 'definition',
      title: 'Individualisering vs. differensiering',
      content: `**Individualisering** betyr at treningen tilpasses den enkelte persons forutsetninger og mål.

**Eksempler på individualisering:**
- Ulik belastning: Noen løfter 20 kg, andre 60 kg
- Ulik intensitet: Noen løper 5 min/km, andre 7 min/km
- Ulike mål: Noen trener for helse, andre for prestasjon
- Ulik progresjon: Noen øker raskt, andre saktere

**Differensiering** betyr at man tilbyr flere alternativer eller nivåer innenfor samme aktivitet.

**Eksempler på differensiering:**
- Tre nivåer på samme øvelse: Lett, medium, hard
- Alternative øvelser: Vanlige armhevinger vs. armhevinger på knærne
- Ulike distanser: Noen løper 3 km, andre 5 km
- Varierte arbeidsformer: Individuelt, par, gruppe

**I praksis:**
God trening kombinerer begge tilnærminger. Differensiering gir valgmuligheter, individualisering sikrer at hver person får riktig belastning.`,
    },
    {
      id: 'kroppsoving-vg1-1-7-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom individualisering og differensiering i trening. Gi eksempler.',
        subTasks: [],
        solution: 'Individualisering betyr at treningen tilpasses den enkelte persons forutsetninger og mål. Eksempel: I styrketrening løfter person A 30 kg, person B 50 kg og person C 70 kg - alle får ulik vekt basert på sitt nivå. Differensiering betyr at man tilbyr flere alternativer eller nivåer innenfor samme aktivitet. Eksempel: I armhevinger tilbyr man tre nivåer - på knærne (lett), vanlig (medium) eller med føttene opp (vanskelig) - og hver person velger selv. Individualisering er mer personlig tilpasset, mens differensiering gir valgmuligheter som passer ulike nivåer.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-7-def-2',
      type: 'definition',
      title: 'Tilpassing ved funksjonsvariasjon',
      content: `Personer med funksjonsnedsettelser har samme behov og rett til fysisk aktivitet som alle andre. Tilpassing handler om å finne løsninger.

**Typer funksjonsvariasjon:**
- Fysiske: Bevegelseshemming, amputasjon, cerebral parese
- Sensoriske: Syn eller hørselshemming
- Kognitive: Utviklingshemming, lærevansker
- Andre: Kroniske sykdommer (diabetes, astma, epilepsi)

**Prinsipper for tilpassing:**

**1. Fokus på muligheter, ikke begrensninger**
- Hva kan personen gjøre?
- Bygg treningen rundt dette

**2. Universell utforming**
- Design aktiviteter som fungerer for flest mulig
- Eksempel: Rullestolbrukere og gående kan spille basketball sammen

**3. Individuelle tilpassinger**
- Modifiser regler: Større mål, mer tid, nærmere avstand
- Modifiser utstyr: Lettere ball, lavere nett, rampe
- Modifiser aktivitet: Sittende aktiviteter, alternative øvelser

**4. Sikkerhet**
- Vurder risiko og ta nødvendige forholdsregler
- Samarbeid med helsepersonell hvis nødvendig

**Eksempler:**
- Sittende volleyball for rullestolbrukere
- Guideball (fotball med bjelle) for synshemmede
- Svømming med flytevest for de med lav kroppskontroll
- Krafttrening med maskiner i stedet for frie vekter`,
    },
    {
      id: 'kroppsoving-vg1-1-7-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er det viktigste prinsippet når man tilpasser trening for personer med funksjonsnedsettelse?',
        subTasks: [],
        multipleChoiceOptions: [
          'Fokusere på begrensninger',
          'Fokusere på muligheter og hva personen kan gjøre',
          'Gi letteste oppgaver alltid',
          'Unngå fysisk aktivitet',
        ],
        solution: 'Riktig svar er b) Fokusere på muligheter og hva personen kan gjøre. Det viktigste prinsippet er å se på hva personen KAN gjøre, ikke hva hen ikke kan. Bygg treningen rundt styrker og muligheter, og finn kreative løsninger for å inkludere alle. Fokus på begrensninger demotiverer, mens fokus på muligheter gir mestring og utvikling.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-7-def-3',
      type: 'definition',
      title: 'Kjønnsforskjeller i trening',
      content: `Det er biologiske forskjeller mellom kjønn som påvirker trening og prestasjon. Forståelse av disse er viktig for tilpassing.

**Fysiologiske forskjeller:**

**Menn (gjennomsnittlig):**
- Høyere VO₂maks (ca. 10% høyere)
- Mer muskelmasse (30-40% mer overkropp)
- Høyere maksimal styrke
- Lavere fettprosent
- Høyere hvilepuls
- Mer testosteron (bygger muskler)

**Kvinner (gjennomsnittlig):**
- Lavere VO₂maks
- Mindre muskelmasse, men mer i underkropp relativt
- Lavere maksimal styrke
- Høyere fettprosent (naturlig, hormonelt)
- Lavere hvilepuls
- Mer østrogen (øker fleksibilitet)

**Implikasjoner for trening:**
- Kvinner kan trene like hardt som menn, men med annen belastning
- Kvinner får god styrkeøkning av trening, men bygger mindre muskelmasse
- Hormonelle sykluser påvirker prestasjon (menstruasjon)
- Kvinner kan være mer utsatt for korsbandskaderr (anatomi, hormoner)

**Viktig:**
- Disse er gjennomsnitt - det er stor variasjon innad i hvert kjønn
- Treningsprinsippene er de samme for alle kjønn
- Individuelle forskjeller er større enn kjønnsforskjeller
- Jenter og gutter bør trene sammen der det er mulig`,
    },
    {
      id: 'kroppsoving-vg1-1-7-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre fysiologiske forskjeller mellom menn og kvinner som påvirker trening. Hvordan kan dette tas hensyn til?',
        subTasks: [],
        solution: `Tre fysiologiske forskjeller:

1. **Muskelmasse:** Menn har gjennomsnittlig 30-40% mer muskelmasse i overkroppen. Dette betyr at menn generelt har høyere maksimal styrke.

2. **VO₂maks:** Menn har ca. 10% høyere maksimalt oksygenopptak. Dette gir bedre utholdenhet i absolutte tall.

3. **Hormoner:** Menn har mer testosteron (bygger muskler), kvinner mer østrogen (øker fleksibilitet). Dette påvirker treningsrespons.

Hvordan ta hensyn:
- Kvinner kan trene like hardt som menn, men med annen belastning (vekt, distanse)
- Individuelle forskjeller er større enn kjønnsforskjeller - tilpass til individet
- Være oppmerksom på at kvinner kan være mer utsatt for enkelte skader (korsband)
- Hormonelle sykluser kan påvirke prestasjon og restitusjon
- Treningsprinsippene er de samme for alle kjønn`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-7-def-4',
      type: 'definition',
      title: 'Alderstilpasset trening',
      content: `Trening må tilpasses alder og modenhetsnivå.

**Barn (6-12 år):**
- Fokus: Lek, allsidig motorisk utvikling, grunnleggende bevegelser
- Ikke: Ensformig trening, maks styrketrening, for tidlig spesialisering
- Eksempel: Varierte leker, ulike idretter, ballspill, akebakke

**Ungdom (13-18 år):**
- Tidlig ungdomstid (13-15 år):
  - I pubertet: Store individuelle forskjeller i modning
  - Kan begynne med styrketrening (teknikk først, lett vekt)
  - Noen er klare for mer strukturert trening, andre ikke

- Sen ungdomstid (16-18 år):
  - Kroppen tåler mer systematisk og hard trening
  - Kan trene som voksne (med tilpasning)
  - Fortsatt viktig med allsidighet

**Voksne (18-65 år):**
- Bred periode med ulike behov
- Fokus avhenger av mål: helse, prestasjon, rekreasjon
- Regelmessig trening viktig for helse
- Progressiv belastning for utvikling

**Eldre (65+ år):**
- Fokus: Bevare funksjon, muskel masse, balanse
- Styrketrening ekstra viktig (mot muskeltap)
- Balanse- og fallforebygging
- Tilpass intensitet og volum

**Viktige prinsipper for ungdom:**
- Respekter individuelle forskjeller i modning
- Bygng gradvis opp belastning
- Allsidighet fremfor tidlig spesialisering
- Fokus på teknikk før intensitet
- Sørg for nok hvile og restitusjon`,
    },
    {
      id: 'kroppsoving-vg1-1-7-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-7-ex-5',
        number: '4',
        type: 'classic',
        task: 'Hva er viktig å huske på når ungdom i puberteten driver styrketrening?',
        subTasks: [],
        multipleChoiceOptions: [
          'De skal ikke drive styrketrening før de er 18 år',
          'Fokus på teknikk først, deretter lett vekt',
          'De kan trene med maksimal vekt med én gang',
          'Styrketrening er farlig for ungdom',
        ],
        solution: 'Riktig svar er b) Fokus på teknikk først, deretter lett vekt. Ungdom i puberteten kan begynne med styrketrening, men det er viktig å starte med å lære riktig teknikk med kroppsvekt eller lett vekt. Etter 2-4 uker kan de gradvis øke vekten. Styrketrening er trygt og nyttig for ungdom når det gjøres riktig. Store individuelle forskjeller i modning må respekteres - noen 13-åringer er klare, andre må vente til 15-16 år.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-7-def-5',
      type: 'definition',
      title: 'Alternativ deltakelse',
      content: `Alternativ deltakelse handler om å finne andre måter å bidra på når direkte fysisk deltakelse ikke er mulig eller ønskelig.

**Former for alternativ deltakelse:**

**1. Trener/Coach:**
- Lede oppvarmingen for gruppen
- Gi instruksjoner og demonstrere øvelser
- Coache lagkamerater under aktivitet
- Gi teknisk tilbakemelding

**2. Dommer/Funksjonær:**
- Dømme kamp eller konkurranse
- Tidsregistrering
- Poengregistrering
- Organisere turneringer

**3. Observatør/Analytiker:**
- Observere og analysere teknikk hos andre
- Gi konstruktiv tilbakemelding
- Filme/dokumentere aktiviteten
- Lage evalueringsrapport

**4. Planlegger/Organisator:**
- Planlegge treningsøkter
- Organisere aktiviteter
- Skaffe utstyr
- Lage treningsprogram

**5. Motivator/Supporter:**
- Heie på lagkamerater
- Gi positiv feedback
- Bygge lagånd
- Støtte andre i å gjøre sitt beste

**Når brukes alternativ deltakelse:**
- Ved skade eller sykdom
- Ved midlertidig funksjonsnedsettelse
- For å lære andre sider av idrett
- For å utvikle lederegenskaper
- Som del av variert læring

**Viktighet:**
Alternativ deltakelse er ikke «mindre verdt» enn fysisk deltakelse. Disse rollene er viktige i idrett og gir verdifull læring om ledelse, organisering og sosiale ferdigheter.`,
    },
    {
      id: 'kroppsoving-vg1-1-7-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-7-ex-6',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor fokus på muligheter (i stedet for begrensninger) er viktig når man jobber med tilpasset trening.',
        subTasks: [],
        solution: 'Fokus på muligheter er viktig av flere grunner: 1) Det bygger selvtillit og mestring - når folk ser hva de KAN gjøre, blir de motiverte. 2) Det skaper et positivt læringsmiljø - folk føler seg inkludert og verdsatt. 3) Det åpner for kreative løsninger - i stedet for å gi opp fordi noe «ikke går an», finner man alternative måter. 4) Det fremmer utvikling - når man bygger på styrker, utvikler folk seg raskere enn om man bare jobber med svakheter. 5) Det er respektfullt - alle har styrker og verdier å bidra med. Fokus på begrensninger kan føre til stigmatisering, demotivasjon og frafall. Fokus på muligheter gir mestring, inkludering og utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Differensiert styrkeøvelse',
      problem: `Hvordan kan du differensiere armhevinger slik at alle i en klasse kan delta, fra de som aldri har gjort armhevinger til de som er veldig sterke?`,
      solution: `**Differensierte armhevinger - 5 nivåer:**

**Nivå 1 - Veggarmhevinger (lettest):**
- Stå oppreist mot vegg
- Hendene på veggen i brysthøyde
- Bøy og strekk armene
- Passer for nybegynnere eller de med lite styrke

**Nivå 2 - Armhevinger mot benk:**
- Hendene på høy benk eller bord
- Kroppen i skrå vinkel
- Bøy og strekk armene
- Lettere enn vanlig armheving

**Nivå 3 - Armhevinger på knærne:**
- Vanlig armhevingsposisjon, men med knær i gulvet
- Reduserer belastningen betydelig
- God teknikk er viktig

**Nivå 4 - Vanlige armhevinger:**
- Full plank-posisjon
- Senk bryst ned til nesten gulvet
- Press opp igjen
- Standard armheving

**Nivå 5 - Avanserte armhevinger:**
- Føttene opp på benk (decline push-up)
- Eller: Klapparmhevinger (eksplosiv)
- Eller: Armhevinger med vekt på ryggen
- For sterke utøvere

**Hvordan bruke dette:**
- Hver elev velger sitt nivå
- Målet er å gjøre 3 sett à 8-12 repetisjoner
- Når nivået blir lett, går man opp ett nivå
- Alle jobber hardt på sitt nivå`,
    },
    {
      id: 'kroppsoving-vg1-1-7-example-2',
      type: 'example',
      title: 'Eksempel: Tilpasset idrett',
      problem: `En elev i klassen bruker rullestol. Hvordan kan du tilpasse en fotballtime slik at alle kan delta?`,
      solution: `**Tilpasset fotball for inkludering:**

**Alternativ 1 - Sittende fotball:**
- Alle sitter på gulvet (eller i rullestol)
- Spiller med vanlig fotball eller stor gymball
- Mindre bane, lavere tempo
- Like regler som vanlig fotball
- Alle får samme utfordring

**Alternativ 2 - Modifisert fotball:**
- Rullestolbrukeren er keeper eller spiller på spesialrolle
- Større mål for rullestolbrukeren
- Kan bruke hendene/rullestolen til å slå ballen
- Laget må spille ballen til rullestolbrukeren X ganger før scoring
- Gir mestring og aktiv deltakelse

**Alternativ 3 - Elektrisk rullestolfotball:**
- Hvis tilgjengelig: Spille med elektrisk rullestol
- Dette er en egen idrett (Paralympic sport)
- Krever spesialutstyr, men veldig engasjerende

**Alternativ 4 - Bytte aktivitet:**
- Velg en aktivitet som fungerer bedre for alle
- Eksempel: Bordtennis, boccia, dart, styrketrening
- Like utfordrende for alle

**Viktige prinsipper:**
- Snakk med eleven om hva hen ønsker
- Fokus på hva eleven KAN gjøre
- Involver hele klassen i tilpassingen
- Vær kreativ med regler og utstyr
- Sikre at alle føler seg inkludert og får mestring

**Holdning:**
Den største barrikaden er ofte holdninger, ikke fysiske begrensninger. Med vilje og kreativitet kan nesten alle aktiviteter tilpasses.`,
    },
    {
      id: 'kroppsoving-vg1-1-7-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-7-ex-4',
        number: '6',
        type: 'classic',
        task: 'Du skal planlegge en intervalløkt for en gruppe på 15 personer med veldig ulikt nivå. Hvordan kan du differensiere økten slik at alle får utbytte?',
        subTasks: [],
        solution: `Differensiert intervalløkt:

**Felles struktur:** 4x4 minutters intervaller med 3 min aktiv pause

**Differensiering:**

**Nivå 1 - Nybegynnere:**
- 4 min rask gange eller lett jogg
- Skal være i sone 3 (kan snakke i korte setninger)
- Fokus på å gjennomføre

**Nivå 2 - Middels:**
- 4 min jogging i moderat tempo
- Skal være i sone 4 (vanskelig å snakke)
- Kan bruke puls som guide (80-85% av maks)

**Nivå 3 - Avansert:**
- 4 min løp i høyt tempo
- Skal være i sone 4-5 (nesten ikke kan snakke)
- Puls 85-90% av maks

**Alle:**
- 3 min aktiv pause (rolig gange/jogg)
- Samme antall intervaller (4)
- Samme tidsramme
- Hver person velger sitt nivå

**Resultat:**
Alle jobber hardt på sitt nivå, får god treningseffekt, og føler mestring. Ingen sammenligner seg med andre - fokus er på egen innsats.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-7-tip-1',
      type: 'tip',
      title: 'Praktiske tips for tilpasset trening',
      content: `1. **Kartlegg individuelle behov:** Ta deg tid til å snakke med hver person om mål, forutsetninger og eventuelle begrensninger.

2. **Tilby valgmuligheter:** Gi alltid minst 2-3 nivåer eller alternativer på aktiviteter.

3. **Fokuser på innsats, ikke absolutt prestasjon:** Ros utøvere for god innsats på sitt nivå, ikke for å være best.

4. **Bruk «jeg-passer-for»-prinsippet:** I stedet for «lett/middels/vanskelig», kall det nivå A/B/C og la folk velge hva som passer for dem.

5. **Teknologi:** Bruk apps og smartklokker for individuell oppfølging (hver person ser sin egen progresjon).

6. **Samarbeid med andre:** Hvis en person har spesielle behov, samarbeid med helsepersonell, spesialpedagoger, fysioterapeuter.

7. **Varierte arbeidsformer:** Bruk individuelt arbeid, par, små grupper, store grupper - det gir ulike muligheter.

8. **Lær av andre:** Se på Paralympics, tilrettelagt idrett, adaptive sports for inspirasjon og ideer.`,
    },
    {
      id: 'kroppsoving-vg1-1-7-warning-1',
      type: 'warning',
      title: 'Vanlige feil ved tilpassing',
      content: `**«One size fits all»-mentalitet:** Å tro at samme trening passer for alle er den vanligste feilen. Folk har ulike forutsetninger og mål.

**For mye fokus på svakheter:** Å bare fokusere på hva noen ikke kan gjøre demotiverer. Fokuser på styrker og muligheter.

**Manglende kommunikasjon:** Å ikke spørre personen selv om hva som fungerer. Den beste eksperten på egne behov er personen selv.

**Stigmatisering:** Å peke ut en person som «annerledes» eller gi oppgaver som virker nedverdigende (f.eks. en sterket person får alltid de letteste oppgavene).

**For lett eller for vanskelig:** Dårlig tilpassing fører til at noen kjeder seg (for lett) eller gir opp (for vanskelig). Riktig balanse er vanskelig, men viktig.

**Sikkerhet:** Å ikke ta hensyn til medisinske forhold eller skadehistorikk. Alltid vurder sikkerhet.

**Mangel på kreativitet:** Å gi opp for tidlig fordi «det går ikke an». Med kreativitet finnes det nesten alltid en løsning.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-1-7-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-7-ex-7',
        number: '7',
        type: 'classic',
        task: 'Velg en aktivitet fra en kroppsøvingstime (f.eks. fotball, volleyball, løping, styrketrening). Beskriv 3 konkrete måter å tilpasse denne aktiviteten for elever med ulike forutsetninger. Inkluder både fysiske tilpasninger og alternative deltakelsesformer.',
        subTasks: [],
        solution: `Eksempel: Tilpassing av volleyball

**Tilpasning 1 - For elever med lav ferdighetsnivå:**
- Bruk større og lettere ball (ballongball eller stor bløt ball)
- Tillat ett ekstra ballberøring per lag (4 i stedet for 3)
- Lov til å ta ballen før den slås over
- Lavere nett eller ingen nett
- Dette gir mer kontroll og mestring

**Tilpasning 2 - For elever med bevegelses­hemming/rullestolbruker:**
- Sittende volleyball: Alle sitter på gulvet eller i rullestol
- Større bane for rullestolbrukere (færre spillere)
- Kan bruke både hender og kropp til å slå ballen
- Ballen må ikke være perfekt slått over nettet - fokus på deltakelse
- Dette gir like vilkår for alle

**Tilpasning 3 - Alternativ deltakelse ved skade:**
- **Dommer-rolle:** Elev med skade dømmer kampen og holder oversikt
- **Coach-rolle:** Gir taktiske råd til laget sitt fra sidelinjen
- **Observatør:** Filmer/observerer og gir tilbakemelding på teknikk etter kampen
- Dette gir verdifull læring uten fysisk belastning

**Generelt prinsipp:** Fokus på at alle skal kunne delta og ha mestring på sitt nivå, ikke at alle skal gjøre det samme.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-1-7-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-7-ex-8',
        number: '8',
        type: 'classic',
        task: 'Reflekter over en gang du selv opplevde å bli inkludert eller ekskludert i fysisk aktivitet. Hva gjorde at du følte deg inkludert/ekskludert? Hva kunne vært gjort annerledes?',
        subTasks: [],
        solution: `Eksempel på refleksjon:

**Situasjon:** Jeg husker en basketballtime der jeg var en av de svakeste. Læreren delte oss inn i lag etter ferdighetsnivå.

**Følelse:** Jeg følte meg ekskludert fordi alle visste at mitt lag var "de dårlige". De andre lo av oss.

**Hva kunne vært gjort annerledes:**
- Blande lagene med ulike ferdighetsnivåer
- Gi meg en spesiell rolle der jeg kunne bidra (f.eks. forsvarer)
- La alle få like mange sjanser til å score
- Fokusere på innsats og samarbeid, ikke bare resultatet
- Ikke lage synlige "nivågrupper"

**Læring for fremtiden:**
- Inkludering handler mye om hvordan aktiviteter organiseres
- Språk og holdninger fra lærer/andre påvirker følelsen av inkludering
- Alle har noe å bidra med - det handler om å finne det
- Differensiering bør gjøres "diskret" uten å peke ut folk`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// DEL 2: KROPP OG HELSE
// ============================================================================

// ============================================================================
// KAPITTEL 2.1: Bevegelsesapparatet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_2_1: TextbookChapter = {
  id: 'kroppsoving-vg1-2-1',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '2.1',
  title: 'Bevegelsesapparatet',
  description: 'Lær om skjelett, muskler, ledd, sener og leddbånd og hvordan de jobber sammen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-2-1-intro',
      type: 'text',
      content: `## Bevegelsesapparatet - kroppens ramme og motor

Bevegelsesapparatet består av skjelett, muskler, ledd, sener og leddbånd. Sammen gjør de det mulig for oss å bevege oss, løfte ting og utføre fysiske aktiviteter.

**Bevegelsesapparatets funksjoner:**
- Gir kroppen struktur og støtte
- Beskytter indre organer
- Gjør bevegelse mulig
- Produserer røde blodceller (beinmarg)
- Lagrer mineraler (kalsium og fosfor)

Forståelse av bevegelsesapparatet hjelper oss å trene smart, forebygge skader og forstå hvordan kroppen fungerer.`,
    },
    {
      id: 'kroppsoving-vg1-2-1-def-1',
      type: 'definition',
      title: 'Skjelettet',
      content: `Skjelettet er kroppens ramme. Det består av 206 bein hos voksne (barn har flere, noen vokser sammen).

**Hovedfunksjoner:**
- **Støtte:** Holder kroppen oppreist
- **Beskyttelse:** Beskytter organer (hodeskalle → hjerne, ribben → hjerte/lunger)
- **Bevegelse:** Festepunkt for muskler
- **Blodproduksjon:** Beinmargen produserer røde og hvite blodceller
- **Minerallager:** Lagrer kalsium og fosfor

**Hoveddeler av skjelettet:**

**Aksialt skjelett (midtaksen):**
- Hodeskalle (cranium)
- Ryggrad (columna vertebralis) - 33 ryggvirvler
- Ribben (costae) - 12 par
- Brystbein (sternum)

**Appendikulært skjelett (ekstremiteter):**
- Overekstremiteter: Skulderblad, kragebein, overarm, underarm, hånd
- Underekstremiteter: Bekken, lårbein, legg, fot

**Beintyper:**
- **Lange bein:** Lårbein, leggbein, armben (mest i ekstremiteter)
- **Korte bein:** Håndrot, fotrot (stor bevegelige)
- **Flate bein:** Ribben, skulderblad (beskyttelse)
- **Uregelmessige bein:** Ryggvirvler (spesialiserte)

**Beinvev:**
- Ytre lag: Kompakt ben (hard, tett)
- Indre lag: Svampete ben (lettere, porøst)
- Beinmarg: Produserer blodceller`,
    },
    {
      id: 'kroppsoving-vg1-2-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn de fire hovedfunksjonene til skjelettet.',
        subTasks: [],
        solution: `De fire hovedfunksjonene til skjelettet er:

1. **Støtte:** Skjelettet gir kroppen struktur og holder oss oppreist. Uten skjelett ville kroppen kollapse.

2. **Beskyttelse:** Skjelettet beskytter indre organer. Eksempel: Hodeskallen beskytter hjernen, ribbene beskytter hjerte og lunger, ryggraden beskytter ryggmargen.

3. **Bevegelse:** Skjelettet er festepunkt for muskler. Når muskler trekker seg sammen, flytter de på beina og skaper bevegelse.

4. **Blodproduksjon:** Beinmargen inne i bein (særlig i ryggvirvler, ribben, lår- og armben) produserer røde og hvite blodceller.

(Bonus: Skjelettet lagrer også mineraler som kalsium og fosfor.)`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-1-def-2',
      type: 'definition',
      title: 'Muskler',
      content: `Muskler er vev som kan trekke seg sammen (kontrahere) og dermed skape bevegelse.

**Tre typer muskelvev:**

**1. Skjelettmuskulatur (tverrstriped, vilkårlig):**
- Festet til skjelettet
- Styres bevisst (vilkårlig)
- Skaper bevegelse
- Eksempel: Biceps, quadriceps

**2. Glatt muskulatur (ikke-tverrstriped, ufrivillig):**
- Finnes i indre organer
- Styres ubevisst (ufrivillig)
- Eksempel: Muskler i tarm, blodårer

**3. Hjertemuskulatur (tverrstriped, ufrivillig):**
- Bare i hjertet
- Styres ubevisst
- Jobber hele livet uten å trøtte

**Slik fungerer skjelettmuskler:**
- Muskler kan bare TREKKE, ikke dytte
- Derfor jobber de ofte i par (agonist/antagonist)
- Eksempel: Biceps bøyer armen, triceps strekker armen

**Muskelstruktur:**
- Muskel → Muskelbunter → Muskelfibre → Myofibriller
- Inneholder proteiner (aktin og myosin) som glir langs hverandre
- Dette skaper kontraksjon

**Muskelkontraksjon krever:**
- Nervesignal fra hjernen
- Energi (ATP)
- Kalsium
- Oksygen (for langvarig aktivitet)`,
    },
    {
      id: 'kroppsoving-vg1-2-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-1-ex-3',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor muskler jobber i par (agonist/antagonist). Bruk biceps og triceps som eksempel.',
        subTasks: [],
        solution: 'Muskler kan bare TREKKE, de kan ikke dytte. Derfor må de jobbe i par for å skape bevegelse i begge retninger. I armen jobber biceps og triceps sammen: Når biceps trekker seg sammen (kontrahere), bøyer den armen (fleksjon). Biceps er da agonist (hovedmuskel). Triceps slapper av og strekkes passivt. For å strekke armen igjen (ekstensjon) må triceps trekke seg sammen. Nå er triceps agonist, og biceps slapper av. På denne måten skaper muskelpar kontrollert bevegelse i begge retninger. Dette prinsippet gjelder for alle ledd: quadriceps/hamstrings i kne, bryst/rygg i skulder, osv.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-1-def-3',
      type: 'definition',
      title: 'Ledd',
      content: `Ledd er forbindelsen mellom to eller flere bein. De gjør bevegelse mulig.

**Leddtyper etter bevegelsesmulighet:**

**1. Synoviale ledd (bevegelige):**
- Mest vanlige ledd
- Har leddhule med leddvæske (synovialvæske)
- Leddbrusk beskytter beinendene
- Eksempel: Kne, albue, skulder

**Undergrupper:**
- **Hengselledd:** Bevegelse i én retning (albue, kne)
- **Kulelledd:** Bevegelse i alle retninger (skulder, hofte)
- **Glidelledd:** Små glidende bevegelser (håndrot, fotrot)
- **Dreieledd:** Rotasjon (mellom underarmsbeina)

**2. Bruskforbindelser (lite bevegelige):**
- Bein forbundet med brusk
- Begrenset bevegelse
- Eksempel: Ryggrad (mellom virvler)

**3. Benforbindelser (ubevegelige):**
- Bein smeltet sammen
- Ingen bevegelse
- Eksempel: Hodeskalle (kranium)

**Leddets deler:**
- **Leddbrusk:** Dekker beinendene, reduserer friksjon
- **Leddhule:** Mellomrom fylt med leddvæske
- **Synovialvæske:** Smører og nærer brusken
- **Leddkapsel:** Holde leddet sammen
- **Leddbånd:** Styrker og stabiliserer leddet

**Leddets bevegelser:**
- Fleksjon (bøying) og ekstensjon (strekning)
- Abduksjon (bort fra midten) og adduksjon (mot midten)
- Rotasjon (dreining)`,
    },
    {
      id: 'kroppsoving-vg1-2-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-1-ex-4',
        number: '3',
        type: 'classic',
        task: 'Hvilken leddtype er kneet?',
        subTasks: [],
        multipleChoiceOptions: [
          'Kulelledd',
          'Hengselledd',
          'Dreieledd',
          'Glidelledd',
        ],
        solution: 'Riktig svar er b) Hengselledd. Kneet er primært et hengselledd som beveger seg i én retning: fleksjon (bøying) og ekstensjon (strekning). Kneet har også en liten rotasjonsmulighet, men hovedbevegelsen er som et hengsel. Eksempler på kulelledd (bevegelse i alle retninger) er skulder og hofte.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-1-ex-5',
        number: '4',
        type: 'classic',
        task: 'Forklar hvordan leddbrusk og leddvæske jobber sammen for å beskytte leddet.',
        subTasks: [],
        solution: 'Leddbrusk dekker endene av beinene i et ledd. Den er glatt og hard, og reduserer friksjon mellom beinene når leddet beveger seg. Leddvæske (synovialvæske) fyller leddhulrommet mellom brusken. Den har to funksjoner: 1) Smøring - reduserer friksjon ytterligere og gjør bevegelsen glatt. 2) Næring - brusken har ikke blodårer, så den får næring fra leddvæsken. Sammen skaper leddbrusk og leddvæske et system med minimal friksjon og god beskyttelse. Dette gjør at vi kan bevege leddene tusenvis av ganger daglig uten slitasje. Ved leddslitasje (artrose) blir brusken ødelagt og leddvæsken endres, noe som gir smerte og nedsatt funksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-1-def-4',
      type: 'definition',
      title: 'Sener og leddbånd',
      content: `**Sener (tendoner):**
Sener er sterkt, fibrøst vev som forbinder muskel til bein.

**Funksjoner:**
- Overfører kraften fra muskel til bein
- Skaper bevegelse
- Kan lagre og frigjøre elastisk energi (plyometri)

**Egenskaper:**
- Meget sterke på strekkbelastning
- Mindre elastiske enn muskler
- Dårlig blodforsyning = heler langsomt ved skade

**Eksempler:**
- Akillessenen (hæl)
- Patellarsenen (kne)
- Bicepssenen (skulder/albue)

**Leddbånd (ligamenter):**
Leddbånd er sterkt, fibrøst vev som forbinder bein til bein.

**Funksjoner:**
- Stabiliserer ledd
- Begrenser bevegelse (forhindrer overstrekning)
- Gir propriosepsjon (stillingsans)

**Egenskaper:**
- Meget sterke
- Mindre elastiske
- Dårlig blodforsyning = heler langsomt

**Eksempler:**
- Korsbånd i kne (fremre og bakre)
- Sidebånd i kne (mediale og laterale)
- Leddbånd i ankel

**Forskjell:**
- **Sener:** Muskel → bein
- **Leddbånd:** Bein → bein

**Skader:**
Både sener og leddbånd er utsatt for skader (strekk, delvis eller total ruptur). De heler langsomt på grunn av dårlig blodforsyning.`,
    },
    {
      id: 'kroppsoving-vg1-2-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-1-ex-2',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen mellom sener og leddbånd?',
        subTasks: [],
        multipleChoiceOptions: [
          'Sener forbinder muskel til bein, leddbånd forbinder bein til bein',
          'Sener forbinder bein til bein, leddbånd forbinder muskel til bein',
          'Det er ingen forskjell, det er samme vev',
          'Sener er i armer, leddbånd er i ben',
        ],
        solution: 'Riktig svar er a) Sener forbinder muskel til bein, leddbånd forbinder bein til bein. Sener overfører kraften fra muskelkontraksjon til bein og skaper bevegelse. Leddbånd stabiliserer ledd og begrenser bevegelse. Begge er sterkt, fibrøst vev med dårlig blodforsyning, men de har ulike funksjoner.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvorfor heler sener og leddbånd langsommere enn muskler når de skades?',
        subTasks: [],
        solution: 'Sener og leddbånd heler langsommere enn muskler fordi de har dårlig blodforsyning. Blod transporterer oksygen, næringsstoffer og celler som er nødvendige for tilheling. Muskler har rik blodforsyning og kan derfor reparere skader relativt raskt (dager til uker). Sener og leddbånd har få blodårer, særlig i midtpartiet. Derfor tar tilheling mye lengre tid (uker til måneder). En muskelrift kan være tilheilt på 2-4 uker, mens en seneskade kan ta 3-6 måneder eller mer. Dette er viktig å vite for rehabilitering - man må være tålmodig og ikke belaste for tidlig, ellers kan skaden bli kronisk.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Knebøy - bevegelsesanalyse',
      problem: `Analyser hva som skjer i bevegelsesapparatet når du utfører en knebøy. Hvilke ledd, muskler og bevegelser er involvert?`,
      solution: `**Knebøy - bevegelsesanalyse:**

**Nedsenking (eksentrisk fase):**

**Ledd og bevegelser:**
- **Hofte:** Fleksjon (bøying)
- **Kne:** Fleksjon (bøying)
- **Ankel:** Dorsal fleksjon (tær opp mot leggen)

**Muskler som jobber (eksentrisk):**
- **Gluteus maximus** (setemuskel): Kontrollerer hoftefleksjon
- **Quadriceps** (lårets fremside): Kontrollerer knefleksjon
- **Hamstrings** (lårets bakside): Hjelper hofte og kne
- **Core** (mage/rygg): Stabiliserer overkroppen

**Oppløft (konsentrisk fase):**

**Ledd og bevegelser:**
- **Hofte:** Ekstensjon (strekning)
- **Kne:** Ekstensjon (strekning)
- **Ankel:** Plantar fleksjon (tær ned)

**Muskler som jobber (konsentrisk):**
- **Gluteus maximus:** Strekker hoften
- **Quadriceps:** Strekker kne
- **Hamstrings:** Hjelper hofte
- **Core:** Stabiliserer

**Sener involvert:**
- Patellarsenen (quadriceps → kneskål)
- Akillessenen (leggmuskler → hæl)

**Leddbånd som stabiliserer:**
- Korsbånd og sidebånd i kne
- Leddbånd i ankel

**Konklusjon:**
Knebøy er en sammensatt bevegelse som involverer flere ledd, store muskelgrupper, sener og leddbånd. Det er derfor en så effektiv styrkeøvelse.`,
    },
    {
      id: 'kroppsoving-vg1-2-1-tip-1',
      type: 'tip',
      title: 'Hvordan ta vare på bevegelsesapparatet',
      content: `1. **Variert belastning:** Tren allsidig for å belaste skjelett, muskler og ledd balansert.

2. **Styrketrening:** Regelmessig styrketrening styrker ikke bare muskler, men også bein, sener og leddbånd.

3. **Kalsiumrik kost:** Bein trenger kalsium for å være sterke. Spis melkeprodukter, grønne grønnsaker, og/eller kosttilskudd.

4. **Vitamin D:** Viktig for kalsiumopptak. Få sollys eller ta tilskudd (særlig om vinteren i Norge).

5. **Unngå overbelastning:** For mye, for fort er hovedårsaken til overbelastningsskader. Følg progresjonsprinsippet.

6. **Varm opp og kjøl ned:** God oppvarming forbereder ledd og muskler, nedkjøling hjelper restitusjon.

7. **Bevegelighet:** God bevegelighet i ledd reduserer skaderisiko og forbedrer funksjon.

8. **Respekter smerte:** Skarp, stikkende smerte er et varselsignal. Stopp aktiviteten og vurder årsaken.`,
    },
    {
      id: 'kroppsoving-vg1-2-1-warning-1',
      type: 'warning',
      title: 'Skader i bevegelsesapparatet',
      content: `**Akutte skader:**
- **Brudd (fraktur):** Bein knekker. Krever legehjelp umiddelbart.
- **Forstuing (distorsjon):** Leddbånd strekkes/rives. Vanlig i ankel og kne.
- **Muskelskade:** Rift i muskel. Smerte og hevelse.

**Overbelastningsskader:**
- **Tendinopati/tendinitt:** Senebetennelse. Vanlig i achilles, patella, skulder.
- **Stressfraktur:** Små sprekker i bein fra gjentatt belastning.
- **Leddslitasje:** Bruskskade over tid.

**Forebygging:**
- God oppvarming
- Gradvis progresjon
- Riktig teknikk
- Nok restitusjon
- Variert trening
- Styrketrening for stabilitet

**Når du skal til lege:**
- Kraftig smerte
- Hevelse som ikke går ned
- Ikke kan belaste (gå/stå)
- Ledd ustabilt eller "gir etter"
- Nummenhet eller prikking
- Deformitet (ser feil ut)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-2-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Velg en sammensatt øvelse (f.eks. utfall, markløft, push-ups) og gjør en bevegelsesanalyse. Beskriv hvilke ledd, muskler og bevegelsestyper som er involvert.',
        subTasks: [],
        solution: `Eksempel: Utfall (lunge)

**Ledd og bevegelser:**
- **Hofte (fremre bein):** Fleksjon ved nedsenking, ekstensjon ved oppstigning
- **Kne (fremre bein):** Fleksjon ved nedsenking, ekstensjon ved oppstigning
- **Ankel (fremre bein):** Dorsalfleksjon ved nedsenking
- **Hofte (bakre bein):** Ekstensjon/hyperekstensjon
- **Kne (bakre bein):** Fleksjon

**Muskler involvert:**
- **Gluteus maximus:** Hoftestrekking (hovedmuskel)
- **Quadriceps:** Knestrekking
- **Hamstrings:** Hjelper hofte, stabiliserer kne
- **Core-muskulatur:** Stabiliserer overkroppen
- **Adduktorer:** Stabiliserer sidebevegelse

**Sener og leddbånd:**
- Patellarsenen (overførerer kraft fra quadriceps til leggbeina)
- Korsbånd og sidebånd i kne (stabiliserer)

**Praktisk anvendelse:**
Utfall er en ensidig øvelse som trener styrke, balanse og koordinasjon. Den etterlikner naturlige bevegelser som å gå i trapper eller løpe.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-1-ex-8',
        number: '8',
        type: 'classic',
        task: 'Lag en plan for hvordan du kan ta vare på bevegelsesapparatet ditt gjennom en typisk treningsuke. Inkluder oppvarming, styrketrening, bevegelighetsarbeid og restitusjon.',
        subTasks: [],
        solution: `Eksempel på ukeplan:

**Mandag - Styrketrening overkropp:**
- 10 min oppvarming (jogg + armsvingninger)
- Styrkeøvelser: push-ups, roing, skulderpress
- 5 min uttøyning av skuldre, bryst, rygg

**Tirsdag - Utholdenhet:**
- 10 min oppvarming
- 30 min jogg i sone 2
- 5 min nedkjøling og uttøyning av bein

**Onsdag - Hvile/restitusjon:**
- Lett gange eller sykling (aktiv restitusjon)
- Foam rolling og uttøyning

**Torsdag - Styrketrening underkropp:**
- 10 min oppvarming (dynamisk tøying, hopp)
- Styrkeøvelser: knebøy, utfall, markløft, leggløft
- 5 min uttøyning av hofter, lår, legger

**Fredag - Ballspill/idrett:**
- 15 min grundig oppvarming
- 45 min fotball/basketball/håndball
- 10 min nedkjøling og uttøyning

**Lørdag - Lang tur:**
- 60-90 min vandring/sykling i rolig tempo

**Søndag - Hvile:**
- Full hviledag eller lett yoga/tøying

**Nøkkelpunkter:**
- Aldri hoppe over oppvarming
- Variere belastning på ulike kroppsdeler
- Minst 1-2 fullstendige hviledager per uke
- Lytt til kroppen - ekstra hvile ved behov`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Hjerte, lunger og blodsirkulasjon
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_2_2: TextbookChapter = {
  id: 'kroppsoving-vg1-2-2',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '2.2',
  title: 'Hjerte, lunger og blodsirkulasjon',
  description: 'Lær om det kardiovaskulære systemet og hvordan det påvirkes av trening.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-2-2-intro',
      type: 'text',
      content: `## Hjerte, lunger og blodsirkulasjon - kroppens transportsystem

Det kardiovaskulære systemet (hjerte og blodårer) og respirasjonssystemet (lunger) transporterer oksygen og næring til kroppens celler og fjerner avfallsstoffer.

**Hvorfor er dette viktig for trening?**
- Oksygen er nødvendig for energiproduksjon
- Bedre oksygentransport = bedre utholdenhet
- Trening styrker hjerte og lunger
- God sirkulasjon fjerner avfallsstoffer (melkesyre, CO₂)

Et sterkt kardiovaskulært system er grunnlaget for god helse og god kondisjon.`,
    },
    {
      id: 'kroppsoving-vg1-2-2-def-1',
      type: 'definition',
      title: 'Hjertet',
      content: `Hjertet er en muskel som pumper blod rundt i kroppen. Det slår ca. 60-80 ganger per minutt i hvile (100 000 ganger per dag!).

**Hjertets struktur:**
- **Fire rom:** To forkamre (atrier) og to hjertekamre (ventrikler)
- **Høyre side:** Pumper oksygenfattig blod til lungene
- **Venstre side:** Pumper oksygenrikt blod til kroppen
- **Klaffer:** Sørger for at blodet går riktig vei

**Hjertesyklusen (ett hjerteslag):**
1. **Diastole (avslapning):** Hjertekamrene fylles med blod
2. **Systole (sammentrekning):** Hjertekamrene pumper blodet ut

**Hjertets pumpefunksjon:**
- **Hjertefrekvens (HR):** Antall slag per minutt
- **Slagvolum (SV):** Blodvolum per slag (ca. 70 ml)
- **Hjerteminuttvolum (HMV):** HR × SV
  - Hvile: 70 slag/min × 70 ml = ca. 5 liter/min
  - Maks trening: 200 slag/min × 150 ml = 30 liter/min (trente)

**Effekt av trening:**
- Hjertet blir sterkere (større slagvolum)
- Lavere hvilepuls (mer effektivt)
- Høyere maksimal hjerteminuttvolum
- Bedre oksygentransport`,
    },
    {
      id: 'kroppsoving-vg1-2-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-2-ex-2',
        number: '1',
        type: 'classic',
        task: 'Hva er hjerteminuttvolum (HMV)?',
        subTasks: [],
        multipleChoiceOptions: [
          'Antall hjerteslag per minutt',
          'Mengden blod hjertet pumper per minutt',
          'Størrelsen på hjertet',
          'Blodtrykket',
        ],
        solution: 'Riktig svar er b) Mengden blod hjertet pumper per minutt. Hjerteminuttvolum (HMV) beregnes som hjertefrekvens (antall slag/min) x slagvolum (blodvolum per slag). I hvile er HMV ca. 5 liter/min, mens det under hard trening kan øke til 20-30 liter/min hos trente personer.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-2-ex-3',
        number: '2',
        type: 'classic',
        task: 'Hvorfor har godt trente personer lavere hvilepuls enn utrente?',
        subTasks: [],
        solution: 'Godt trente personer har lavere hvilepuls fordi hjertet deres er sterkere og mer effektivt. Gjennom trening blir hjertemuskelen sterkere og hjertekamrene blir større. Dette gir høyere slagvolum - hjertet pumper mer blod per slag. For å pumpe samme mengde blod rundt i kroppen (ca. 5 liter/min i hvile) trenger derfor et sterkt hjerte færre slag. Eksempel: Utrent person: 75 slag/min x 67 ml = 5 liter/min. Trent person: 50 slag/min x 100 ml = 5 liter/min. Begge pumper 5 liter, men den trente gjør det med færre slag fordi hvert slag pumper mer. Dette er mer effektivt og belaster hjertet mindre.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-2-def-2',
      type: 'definition',
      title: 'Blodsirkulasjonen',
      content: `Blodsirkulasjonen består av to kretsløp:

**1. Lungekretsløpet (liten kretsløp):**
- Høyre hjertekammer → Lungearterie → Lunger → Lungevene → Venstre forkammer
- Oksygenfattig blod → Lunger → Oksygenrikt blod
- Korteste kretsløp

**2. Systemkretsløpet (store kretsløp):**
- Venstre hjertekammer → Aorta → Arterier → Kapillærer → Vener → Høyre forkammer
- Oksygenrikt blod → Kroppen → Oksygenfattig blod
- Lengste kretsløp, når hele kroppen

**Blodårene:**

**Arterier:**
- Fører blod BORT fra hjertet
- Tykkveggede, elastiske
- Høyt trykk
- Inneholder oksygenrikt blod (unntatt lungearterie)

**Vener:**
- Fører blod TIL hjertet
- Tynnveggede
- Lavt trykk
- Har klaffer (forhindrer tilbakestrømming)
- Inneholder oksygenfattig blod (unntatt lungevener)

**Kapillærer:**
- Minste blodårer (tynnveggede)
- Forbinder arterier og vener
- Her skjer utveksling av oksygen, næring og avfallsstoffer

**Blodtrykk:**
- Systolisk (øverste): Trykk når hjertet pumper (ca. 120 mmHg)
- Diastolisk (nederste): Trykk når hjertet hviler (ca. 80 mmHg)
- Normalt: 120/80 mmHg`,
    },
    {
      id: 'kroppsoving-vg1-2-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-2-ex-6',
        number: '3',
        type: 'classic',
        task: 'Beskriv forskjellen mellom arterier og vener.',
        subTasks: [],
        solution: `Forskjeller mellom arterier og vener:

**Arterier:**
- Fører blod BORT fra hjertet
- Tykkveggede og elastiske (må tåle høyt trykk)
- Høyt blodtrykk (pulserer)
- Inneholder oksygenrikt blod (unntatt lungearterie)
- Ligger dypere i kroppen

**Vener:**
- Fører blod TIL hjertet
- Tynnveggede
- Lavt blodtrykk
- Har klaffer som forhindrer tilbakestrømming
- Inneholder oksygenfattig blod (unntatt lungevener)
- Ligger ofte nærmere hudoverflaten (du kan se dem)

**Fellestrekk:**
Begge er blodårer som transporterer blod. De møtes i kapillærene hvor utveksling av oksygen og næring skjer.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-2-def-3',
      type: 'definition',
      title: 'Lungene og gassutveksling',
      content: `Lungene henter oksygen fra luften og fjerner karbondioksid fra blodet.

**Lungenes struktur:**
- **Luftrør (trachea):** Fører luft ned
- **Bronkier:** Forgrener seg som et tre
- **Bronkioler:** Minste luftveier
- **Alveoler (lungeblærer):** Små sekker hvor gassutveksling skjer (ca. 300 millioner!)

**Gassutveksling i alveolene:**
1. Luft vi puster inn inneholder ca. 21% oksygen
2. Oksygen diffunderer fra alveoler til blod (kapillærer)
3. Karbondioksid diffunderer fra blod til alveoler
4. Luft vi puster ut inneholder ca. 16% oksygen og 4% CO₂

**Respirasjon (pust):**
- **Innpust:** Mellomgulvet trekker seg sammen og beveger seg ned, brystkassen utvides, luft suges inn
- **Utpust:** Mellomgulvet slapper av og beveger seg opp, brystkassen minker, luft presses ut

**Respirasjonsfrekvens:**
- Hvile: 12-20 pust per minutt
- Hard trening: 40-60 pust per minutt

**Effekt av trening:**
- Lungene blir ikke større, men mer effektive
- Bedre gassutveksling
- Sterkere pustemuskler
- Kan ta dypere pust`,
    },
    {
      id: 'kroppsoving-vg1-2-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor skjer gassutvekslingen i lungene?',
        subTasks: [],
        multipleChoiceOptions: [
          'I luftrøret',
          'I bronkiene',
          'I alveolene (lungeblærene)',
          'I mellomgulvet',
        ],
        solution: 'Riktig svar er c) I alveolene (lungeblærene). Alveolene er små, tynne sekker omgitt av kapillærer. Her er veggen mellom luft og blod så tynn at gasser kan diffundere: Oksygen går fra luft til blod, karbondioksid går fra blod til luft. Lungene har ca. 300 millioner alveoler, noe som gir et enormt overflateareal for gassutveksling.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-2-def-4',
      type: 'definition',
      title: 'Oksygenopptak (VO₂)',
      content: `VO₂ (volume oksygen) er mengden oksygen kroppen tar opp per minutt.

**VO₂maks (maksimalt oksygenopptak):**
- Den maksimale mengden oksygen kroppen kan ta opp og bruke under hard fysisk aktivitet
- Måles i ml/kg/min
- Best mål på kondisjonen din

**Hva bestemmer VO₂maks?**
1. **Lungenes kapasitet:** Hvor mye oksygen som tas opp
2. **Hjertets pumpefunksjon:** Hvor mye blod som pumpes (hjerteminuttvolum)
3. **Blodets oksygentransport:** Antall røde blodceller og hemoglobin
4. **Musklenes evne:** Hvor effektivt musklene bruker oksygen

**Ligningen:**
VO₂maks = Hjerteminuttvolum × (O₂ i arterieblod - O₂ i veneblod)

**Hvordan forbedre VO₂maks:**
- Høyintensitetsintervaller (sone 4-5)
- Terskeltrening (sone 3)
- Lange rolige turer bygger grunnlag
- Kombinasjon gir best effekt

**Genetikk vs. trening:**
- 30-50% av VO₂maks er arvelig
- Men du kan forbedre VO₂maks med 15-30% gjennom trening
- Utrente kan få større forbedring enn trente`,
    },
    {
      id: 'kroppsoving-vg1-2-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva VO2maks er og hva som bestemmer hvor høy VO2maks du har.',
        subTasks: [],
        solution: `VO2maks er den maksimale mengden oksygen kroppen kan ta opp og bruke per minutt under hard fysisk aktivitet. Det måles i ml/kg/min og er det beste målet på kondisjonen din.

**Hva bestemmer VO2maks:**

1. **Lungenes kapasitet:** Hvor effektivt lungene tar opp oksygen fra luften
2. **Hjertets pumpefunksjon:** Hvor mye blod hjertet kan pumpe per minutt (hjerteminuttvolum)
3. **Blodets oksygentransport:** Antall røde blodceller og mengden hemoglobin (proteinet som frakter oksygen)
4. **Musklenes effektivitet:** Hvor godt musklene kan bruke oksygenet til energiproduksjon

**Påvirkning:**
- 30-50% er genetisk bestemt
- Trening kan forbedre VO2maks med 15-30%
- Høyintensitetsintervaller er mest effektivt
- Alder, kjønn og treningsbakgrunn påvirker også`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Hva skjer i kroppen under løping?',
      problem: `Beskriv hva som skjer i hjerte, lunger og blodsirkulasjon når du løper en 3000-meter.`,
      solution: `**Start (første 30 sekunder):**
- Hjertefrekvensen øker raskt (nervesystemet og adrenalin)
- Pustefrekvensen øker
- Blodet omfordeles: Mer til muskler, mindre til fordøyelse
- Kroppen bruker lagret energi (ATP, kreatinfosfat)

**Under løpet (1-10 min):**
- Hjertefrekvensen når arbeidsfrekvens (f.eks. 160-180 slag/min)
- Slagvolumet øker (mer blod per slag)
- Hjerteminuttvolum øker kraftig (f.eks. fra 5 til 20 liter/min)
- Pustefrekvensen øker til 30-50 pust/min
- Lungene tar opp mer oksygen
- Blodårer til muskler utvider seg (vasodilatasjon)
- Røde blodceller frakter oksygen til musklene
- Muskler bruker oksygen til energiproduksjon (aerob)
- Karbondioksid og varme produseres
- Blodet transporterer karbondioksid tilbake til lungene
- Du begynner å svette (kjøler ned)

**Mot slutten (siste 2 min, høyere intensitet):**
- Hjertefrekvensen nærmer seg maksimal puls
- Anaerob energiproduksjon øker
- Melkesyre begynner å hope seg opp
- Pusten blir tyngre (mer CO₂ må ut)
- Du jobber nær VO₂maks

**Etter løpet:**
- Hjertefrekvensen og pusten synker gradvis
- Kroppen fortsetter å bruke oksygen for å restituere (EPOC)
- Blodstrømmen normaliseres
- Avfallsstoffer fjernes`,
    },
    {
      id: 'kroppsoving-vg1-2-2-tip-1',
      type: 'tip',
      title: 'Tips for et sunt hjerte og lunger',
      content: `1. **Regelmessig kondisjonstrening:** Minst 150 min moderat aktivitet per uke.

2. **Variert intensitet:** Kombiner rolig trening og intervaller.

3. **Ikke røyk:** Røyking skader lunger og blodårer drastisk.

4. **Sunt kosthold:** Reduser mettet fett, sukker og salt. Spis fisk, frukt, grønnsaker.

5. **Kontroller blodtrykket:** Høyt blodtrykk skader hjerte og kar over tid.

6. **Håndter stress:** Kronisk stress belaster hjertet.

7. **Nok søvn:** 8-9 timer for ungdom. Søvn er viktig for hjertehelse.

8. **Vektreduksjon hvis overvektig:** Overvekt belaster hjertet.

**Hjertevarslere:**
- Brystsmerter ved aktivitet
- Uvanlig tung pust
- Hjertebank i hvile
- Svimmelhet
→ Oppsøk lege hvis du opplever dette!`,
    },
    {
      id: 'kroppsoving-vg1-2-2-warning-1',
      type: 'warning',
      title: 'Hjerte- og lungesykdommer',
      content: `**Hjertesykdommer:**
- **Hjerteinfarkt:** Blodpropp i hjertets kransårer. Livstruende. Ring 113.
- **Høyt blodtrykk (hypertensjon):** Skader kar over tid. Ofte symptomfritt.
- **Hjertesvikt:** Hjertet pumper ikke godt nok.

**Lungesykdommer:**
- **Astma:** Luftveiene trekker seg sammen. Vanlig hos unge idrettsutøvere.
- **KOLS:** Kronisk lungesykdom (ofte fra røyking).

**Forebygging:**
- Regelmessig trening
- Sunt kosthold
- Ikke røyk
- Ikke snus
- Begrens alkohol
- Håndter stress

**Trening med astma:**
- Bruk forebyggende astmamedisin før trening
- Varm opp godt (15 min)
- Unngå ekstremt kaldt vær
- Ha inhalator tilgjengelig
- Astma er IKKE et hinder for toppidrett (mange eliteutøvere har astma)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-2-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-2-ex-1',
        number: '6',
        type: 'classic',
        task: 'Forklar hvordan oksygen kommer fra luften til musklene. Beskriv hele veien.',
        subTasks: [],
        solution: `Oksygenets vei fra luft til muskler:

1. **Innånding:** Luft med 21% oksygen inhaleres via nese/munn
2. **Luftrør:** Luften går ned i luftrøret (trachea)
3. **Bronkier og bronkioler:** Luften forgrener seg i mindre og mindre luftrør
4. **Alveoler:** Luften når lungeblærene (300 millioner små sekker)
5. **Gassutveksling:** Oksygen diffunderer fra alveolene over i kapillærene (tynne blodårer)
6. **Røde blodceller:** Oksygenet bindes til hemoglobin i røde blodceller
7. **Lungekretsløp:** Oksygenrikt blod går til venstre forkammer
8. **Venstre hjertekammer:** Pumper blodet ut i aorta (hovedpulsåren)
9. **Arterier:** Blodet transporteres via arterier til hele kroppen
10. **Kapillærer i muskler:** Oksygen diffunderer fra blodet inn i muskelcellene
11. **Mitokondrier:** Muskelcellene bruker oksygenet til å produsere energi (ATP)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'Lag en plan for hvordan du kan forbedre din VO2maks over de neste 8 ukene. Beskriv hvilke treningstyper du vil bruke og hvor ofte.',
        subTasks: [],
        solution: `Eksempel på 8-ukers plan for VO2maks-forbedring:

**Uke 1-2 (Grunnlag):**
- 3x rolig løping (30-40 min i sone 2)
- Fokus på å bygge grunnlag og venne kroppen til trening

**Uke 3-4 (Introduser intervaller):**
- 2x rolig løping (40 min)
- 1x intervaller: 4x3 min i sone 4, 2 min pause

**Uke 5-6 (Øk intensiteten):**
- 2x rolig løping (40-45 min)
- 1x 4x4 min intervaller i sone 4-5, 3 min pause
- 1x terskeltrening: 2x10 min i sone 3

**Uke 7-8 (Toppfase):**
- 2x rolig løping (30 min)
- 2x intervaller: 5x4 min i sone 4-5
- Test VO2maks eller 3000m på tid

**Viktige prinsipper:**
- 80% av treningen i lav intensitet, 20% høy intensitet
- Minst 1 hviledag per uke
- Gradvis progresjon (ikke øk for raskt)
- Lytt til kroppen (reduser ved tegn på overtrening)`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3: Energisystemer og forbrenning
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_2_3: TextbookChapter = {
  id: 'kroppsoving-vg1-2-3',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '2.3',
  title: 'Energisystemer og forbrenning',
  description: 'Lær hvordan kroppen produserer energi under ulike typer aktivitet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-2-3-intro',
      type: 'text',
      content: `## Energisystemer - kroppens drivstoff

For å bevege oss trenger musklene energi. Kroppen har tre energisystemer som produserer ATP (adenosintrifosfat) - kroppens universelle energimolekyl.

**Hvorfor er dette viktig?**
- Ulike aktiviteter bruker ulike energisystemer
- Forståelse hjelper deg planlegge trening
- Forklarer hvorfor du blir sliten på ulike måter
- Viser sammenheng mellom kosthold og prestasjon

Alle tre energisystemene jobber hele tiden, men i ulik grad avhengig av aktiviteten.`,
    },
    {
      id: 'kroppsoving-vg1-2-3-def-1',
      type: 'definition',
      title: 'ATP - kroppens energivaluta',
      content: `**ATP (Adenosintrifosfat)** er molekylet som lagrer og frigjør energi i kroppen.

**Hvordan ATP fungerer:**
- ATP består av adenosin + 3 fosfatgrupper
- Når en fosfatgruppe spaltes av, frigjøres energi
- ATP → ADP (adenosindifosfat) + fosfat + ENERGI
- Denne energien brukes til muskelkontraksjon

**Problemet:**
- Kroppen lagrer bare litt ATP i musklene
- Nok til 2-3 sekunders maksimal innsats
- Kroppen må hele tiden produsere nytt ATP

**Tre måter å produsere ATP:**
1. Anaerobt alaktisk system (uten oksygen, uten melkesyre)
2. Anaerobt laktisk system (uten oksygen, med melkesyre)
3. Aerobt system (med oksygen)

Hvilket system som dominerer avhenger av aktivitetens intensitet og varighet.`,
    },
    {
      id: 'kroppsoving-vg1-2-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva ATP er og hvorfor kroppen trenger å produsere det kontinuerlig.',
        subTasks: [],
        solution: 'ATP (adenosintrifosfat) er kroppens energivaluta - det molekylet som lagrer og frigjør energi som musklene kan bruke direkte. Når ATP spaltes til ADP (adenosindifosfat) + fosfat, frigjøres energi som brukes til muskelkontraksjon. Problemet er at kroppen bare lagrer litt ATP i musklene - nok til 2-3 sekunders maksimal innsats. Derfor må kroppen kontinuerlig produsere nytt ATP fra karbohydrater, fett og kreatinfosfat gjennom de tre energisystemene (anaerobt alaktisk, anaerobt laktisk, og aerobt). Uten kontinuerlig ATP-produksjon ville musklene slutte å fungere etter få sekunder.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-3-def-2',
      type: 'definition',
      title: 'De tre energisystemene',
      content: `**1. Anaerobt alaktisk system (ATP-CP-systemet):**

**Hvordan:**
- Bruker lagret ATP og kreatinfosfat (CP) i musklene
- Kreatinfosfat donerer fosfat til ADP → ATP
- Skjer UTEN oksygen
- Produserer IKKE melkesyre

**Kapasitet:**
- Maksimal kraft
- Varighet: 5-10 sekunder
- Eksempler: Sprint, hopp, tunge løft

**2. Anaerobt laktisk system (glykolyse uten oksygen):**

**Hvordan:**
- Bryter ned glukose (karbohydrat) UTEN oksygen
- Produserer melkesyre (laktat)
- Relativt rask energiproduksjon

**Kapasitet:**
- Høy intensitet
- Varighet: 10 sekunder til 2 minutter
- Eksempler: 400m løp, 1 minutts høyintensitetsintervall

**3. Aerobt system (oksidativ fosforylering):**

**Hvordan:**
- Bruker oksygen til å bryte ned karbohydrat og fett
- Skjer i mitokondriene (cellenes kraftverk)
- Produserer MYE ATP (men saktere)
- Produserer vann og CO₂ (ikke melkesyre)

**Kapasitet:**
- Moderat intensitet
- Varighet: Fra 2-3 minutter til timer
- Eksempler: Langdistanseløp, sykling, svømming

**Hvilken lov gjelder når?**
- 0-10 sek: 90% anaerobt alaktisk
- 10 sek-2 min: Hovedsakelig anaerobt laktisk
- 2+ min: Hovedsakelig aerobt (men alle tre bidrar)`,
    },
    {
      id: 'kroppsoving-vg1-2-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket energisystem dominerer under en 400 meter sprint (ca. 50-60 sekunder)?',
        subTasks: [],
        multipleChoiceOptions: [
          'Anaerobt alaktisk system',
          'Anaerobt laktisk system',
          'Aerobt system',
          'Alle tre like mye',
        ],
        solution: 'Riktig svar er b) Anaerobt laktisk system. Ved 50-60 sekunders høyintensitetsarbeid er det anaerobe laktiske systemet som dominerer. Dette systemet bryter ned glukose uten oksygen og produserer melkesyre. Det gir høy kraft, men laktatoppbygging gjør at man ikke kan holde intensiteten så lenge. Anaerobt alaktisk (ATP-CP) bidrar de første 5-10 sekundene, og det aerobe systemet begynner å bidra etter 30-45 sekunder, men anaerobt laktisk dominerer.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-3-def-3',
      type: 'definition',
      title: 'Karbohydrat vs. fett som energikilde',
      content: `Kroppen kan bruke både karbohydrat og fett som energikilde i det aerobe systemet.

**Karbohydrat (glukose/glykogen):**

**Fordeler:**
- Rask energi
- Kan brukes både aerobt og anaerobt
- Produserer mer ATP per oksygenmolekyl

**Ulemper:**
- Begrenset lagring (400-500 g glykogen)
- Tømmes etter 60-90 min hard aktivitet

**Lagres:**
- I muskler (muskelglykogen)
- I lever (leverglykogen)
- Som glukose i blod

**Fett (fettsyrer):**

**Fordeler:**
- Enormt lager (selv slanke har 10 000+ kalorier)
- Brukes ved langvarig, moderat aktivitet

**Ulemper:**
- Krever oksygen (kun aerobt)
- Langsommere energiproduksjon
- Produserer mindre ATP per oksygenmolekyl

**Lagres:**
- Som fettvev under huden og rundt organer

**Hvilken brukes når?**
- **Høy intensitet (80-100%):** Nesten bare karbohydrat
- **Moderat intensitet (60-75%):** Blanding (50/50)
- **Lav intensitet (under 60%):** Mest fett

**Implikasjoner:**
- Karbohydrat før/under hard trening
- Fett forbrenning ved lange, rolige turer
- Begge energikilder viktige i kostholdet`,
    },
    {
      id: 'kroppsoving-vg1-2-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom karbohydrat og fett som energikilde. Når bruker kroppen mest av hver?',
        subTasks: [],
        solution: `**Karbohydrat (glukose/glykogen):**
- Gir rask energi
- Kan brukes både aerobt og anaerobt
- Begrenset lagring (400-500g = ca. 2000 kalorier)
- Brukes mest ved høy intensitet (over 80% av maks)
- Tømmes etter 60-90 min hard aktivitet

**Fett (fettsyrer):**
- Gir langsom energi
- Kan kun brukes aerobt (trenger oksygen)
- Enormt lager (selv slanke har 10 000+ kalorier)
- Brukes mest ved lav-moderat intensitet (under 60% av maks)
- Nesten uuttømmelig

**Når brukes hva:**
- Høy intensitet (sprint, intervaller): Nesten bare karbohydrat
- Moderat intensitet (jogging): Blanding, ca. 50/50
- Lav intensitet (rolig gange): Mest fett

Ved langvarig aktivitet (maraton) starter kroppen med karbohydrat, men overgår gradvis til mer fett etter hvert som glykogen tømmes.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-3-def-4',
      type: 'definition',
      title: 'Melkesyre (laktat)',
      content: `Melkesyre (laktat) produseres når muskler bruker anaerobt laktisk system.

**Hva skjer?**
- Ved høy intensitet uten nok oksygen
- Glukose brytes ned til pyruvat
- Pyruvat omdannes til laktat
- Laktat hoper seg opp i muskler og blod

**Effekter:**
- Brennende følelse i musklene
- Tung pust (kroppen prøver å kompensere)
- Redusert muskelkontraksjon
- Må senke intensiteten

**Anaerob terskel:**
- Intensiteten hvor laktatproduksjon overstiger laktatfjernelse
- Typisk 80-90% av maks puls
- Kan trenes oppover med utholdenhets trening

**Vanlige misforståelser:**
- Melkesyre er IKKE årsaken til muskelømhet dagene etter
- Melkesyre fjernes raskt (30-60 min etter trening)
- Muskelømhet (DOMS) skyldes mikroskader i musklene

**Nytten av melkesyre:**
- Kroppen kan resirkulere laktat til energi
- Lever omdanner laktat til glukose
- Laktat er ikke bare "avfall" - det er en energikilde

**Trening:**
- Terskeltrening hever anaerob terskel
- Kroppen blir bedre til å tolerere og fjerne laktat
- Kan jobbe hardere uten å "gå på smell"`,
    },
    {
      id: 'kroppsoving-vg1-2-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er anaerob terskel?',
        subTasks: [],
        multipleChoiceOptions: [
          'Den maksimale pulsen',
          'Intensiteten hvor laktatproduksjon overstiger laktatfjernelse',
          'Den laveste pulsen',
          'Når man ikke kan puste',
        ],
        solution: 'Riktig svar er b) Intensiteten hvor laktatproduksjon overstiger laktatfjernelse. Anaerob terskel er intensiteten (typisk 80-90% av maks puls) hvor kroppen begynner å produsere mer melkesyre (laktat) enn den klarer å fjerne. Over denne terskelen hoper melkesyre seg opp, og man kan ikke holde intensiteten så lenge. Under terskelen kan man holde intensiteten i lang tid. Med utholdenhets trening kan man heve den anaerobe terskelen og dermed jobbe hardere uten laktatoppbygging.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Energisystemer i ulike aktiviteter',
      problem: `Beskriv hvilket energisystem som dominerer i følgende aktiviteter: a) 100m sprint, b) 800m løp, c) Maraton.`,
      solution: `**a) 100m sprint (10-12 sekunder):**
- **Dominerende:** Anaerobt alaktisk system (ATP-CP)
- **Bidrag:** 95% anaerobt alaktisk, 5% anaerobt laktisk
- **Hvorfor:** Maksimal intensitet, kort varighet. Bruker lagret ATP og kreatinfosfat.
- **Ingen melkesyre:** For kort tid til at melkesyre hoper seg opp merkbart.
- **Ingen oksygen:** Trenger ikke oksygentilførsel, skjer instant.

**b) 800m løp (ca. 2 minutter):**
- **Dominerende:** Anaerobt laktisk system
- **Bidrag:** 50% anaerobt laktisk, 40% aerobt, 10% anaerobt alaktisk
- **Hvorfor:** Høy intensitet over 1-2 min. Glukose brytes ned uten nok oksygen.
- **Mye melkesyre:** Kraftig laktatoppbygging, brennende følelse i slutten.
- **Begynnende aerob:** Etter 30-45 sek begynner aerobt system å bidra.

**c) Maraton (3-5 timer):**
- **Dominerende:** Aerobt system
- **Bidrag:** 99% aerobt, 1% anaerob (i spurter)
- **Hvorfor:** Moderat intensitet over lang tid. Masse oksygen tilgjengelig.
- **Ingen melkesyre:** Under anaerob terskel hele veien.
- **Fett og karbohydrat:** Bruker begge, mest fett (men trenger karbohydrat også).`,
    },
    {
      id: 'kroppsoving-vg1-2-3-tip-1',
      type: 'tip',
      title: 'Tips for optimal energitilgang',
      content: `1. **Spis nok karbohydrater:** 5-7 g per kg kroppsvekt for aktive (50-70% av kalorier).

2. **Før hard trening:** Spis karbohydratrik mat 2-3 timer før, eller lett snacks 30-60 min før.

3. **Under langvarig aktivitet (over 60 min):** Ta inn karbohydrater (sportsdrikk, gel, frukt).

4. **Etter trening:** Spis karbohydrater + protein innen 30-60 min for å fylle opp glykogenlagrene.

5. **Nok fett:** 20-35% av kalorier. Viktig for hormonproduksjon og langvarig energi.

6. **Unngå for mye fett før trening:** Fett fordøyes sakte og kan gi mageproblemer.

7. **Hydrering:** Drikk nok vann. Dehydrering reduserer prestasjon.

8. **Kreatin:** Tilskudd kan øke kreatinfosfat-lagrene og forbedre sprintytelser (valgfritt).

*Merk: Kostholdsanbefalinger er et felt i stadig utvikling, og rådene kan endre seg etter hvert som ny forskning kommer til. Tipsene her er basert på gjeldende konsensus for aktive ungdommer, men individuelle behov varierer. Ved spesifikke spørsmål om kosthold, snakk med helsepersonell eller klinisk ernæringsfysiolog.*`,
    },
    {
      id: 'kroppsoving-vg1-2-3-warning-1',
      type: 'warning',
      title: 'Vanlige feil relatert til energi',
      content: `**Spiser for lite karbohydrat:** Mange reduserer karbs unødvendig. Aktive ungdommer trenger mye karbohydrat for energi og restitusjon.

**"Bonking" / "hitting the wall":** Når glykogenlagrene er tomme. Forhindre med karbohydratinntak under langvarig aktivitet.

**Trener på tom mage:** For høyintensitetstrening trenger du karbohydrater. Tom mage gir dårlig ytelse.

**Glemmer protein:** Protein er viktig for muskelreparasjon, men ikke primær energikilde.

**Forvirring om fettforbrenning:** Å trene i "fettforbrennende sone" (lav intensitet) forbrenner mer fett under økten, men total kaloriforbrenning er ofte lavere. For fettap: Total energiforbruk over tid er viktigere.

**Ekstreme dietter:** Low-carb, keto, fasting kan funke for noen, men er ofte dårlig for idrettsprestasjoner hos ungdom.

**Spiseforstyrrelser:** Restriksjoner rundt mat kan utvikle seg til spiseforstyrrelser. Søk hjelp hvis du er bekymret.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-2-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva som skjer når glykogenlagrene tømmes under langvarig aktivitet ("bonking" / "hitting the wall").',
        subTasks: [],
        solution: 'Når glykogenlagrene (lagret karbohydrat i muskler og lever) tømmes under langvarig aktivitet, opplever man "bonking" eller "hitting the wall". Dette skjer typisk etter 60-90 minutter med hard aktivitet, eller 2-3 timer med moderat aktivitet. Symptomer inkluderer: Plutselig tretthet og kraftløshet, svimmelhet, forvirring, ikke klarer å holde tempo. Årsaken er at hjernen og musklene er avhengige av glukose. Når glykogen er tomt, må kroppen gå over til nesten bare fettforbrenning, som gir energi mye saktere. Dette tvinger deg til å senke intensiteten drastisk. Forebygging: Spis karbohydrater før og under langvarig aktivitet (sportsdrikk, gel, frukt). For aktiviteter over 90 minutter bør man ta inn 30-60g karbohydrat per time.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en oversikt som viser de tre energisystemene, deres varighet, intensitet og eksempler på aktiviteter.',
        subTasks: [],
        solution: `**De tre energisystemene:**

**1. Anaerobt alaktisk (ATP-CP):**
- Varighet: 5-10 sekunder
- Intensitet: Maksimal (100%)
- Energikilde: ATP og kreatinfosfat
- Melkesyre: Nei
- Eksempler: 100m sprint, hopp, tunge løft, kast

**2. Anaerobt laktisk (glykolyse):**
- Varighet: 10 sek - 2 minutter
- Intensitet: Høy (80-100%)
- Energikilde: Glukose/glykogen (uten oksygen)
- Melkesyre: Ja, mye
- Eksempler: 200m-800m løp, 1-2 min intervaller

**3. Aerobt (oksidativ fosforylering):**
- Varighet: Fra 2-3 min til timer
- Intensitet: Lav-moderat (under 80%)
- Energikilde: Karbohydrat og fett (med oksygen)
- Melkesyre: Minimal
- Eksempler: Maraton, lange turer, sykling, svømming

**Viktig:** Alle tre systemene jobber samtidig, men i ulik grad avhengig av intensitet og varighet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4: Vanlige idrettsskader
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_2_4: TextbookChapter = {
  id: 'kroppsoving-vg1-2-4',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '2.4',
  title: 'Vanlige idrettsskader',
  description: 'Lær om de vanligste idrettsskadene, hvordan de oppstår og hvordan du kan forebygge dem.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forebygge skader ved bevegelsesaktiviteter og utføre grunnleggende førstehjelp',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-2-4-intro',
      type: 'text',
      content: `## Vanlige idrettsskader

Idrettsskader er dessverre en del av et aktivt liv. Ved å forstå hvordan skader oppstår, kan du ta grep for å forebygge dem og reagere riktig hvis de inntreffer.

**Skadetyper:**
- **Akutte skader:** Oppstår plutselig (fall, kollisjon, vridning)
- **Belastningsskader:** Utvikles gradvis over tid (overtrening, feil teknikk)

God kunnskap om skader gjør deg i stand til å:
- Trene tryggere
- Reagere riktig ved skade
- Komme raskere tilbake etter skade`,
    },
    {
      id: 'kroppsoving-vg1-2-4-def-1',
      type: 'definition',
      title: 'Forstuing (distorsjon)',
      content: `En forstuing er en skade på leddbåndene rundt et ledd. Skaden oppstår når leddet tvinges utenfor sitt normale bevegelsesområde.

**Grader:**
- **Grad 1:** Tøyning av leddbånd, lite hevelse
- **Grad 2:** Delvis ruptur (riss), moderat hevelse og smerte
- **Grad 3:** Fullstendig ruptur, stor hevelse og instabilitet

**Vanlige lokalisasjoner:** Ankel, kne, håndledd, fingre`,
    },
    {
      id: 'kroppsoving-vg1-2-4-def-2',
      type: 'definition',
      title: 'Muskelstrekk og -rupturer',
      content: `Muskelskader oppstår når muskelfibrer overbelastes og skades.

**Typer:**
- **Strekk (strain):** Muskelen tøyes over sin elastisitetsgrense
- **Delvis ruptur:** Noen muskelfibre ryker
- **Total ruptur:** Muskelen ryker helt av

**Symptomer:** Plutselig smerte, hevelse, blåmerke, svekket kraft

**Vanlige muskler:** Hamstrings, leggmuskel, lyske, quadriceps`,
    },
    {
      id: 'kroppsoving-vg1-2-4-def-3',
      type: 'definition',
      title: 'Senebetennelse (tendinopati)',
      content: `Senebetennelse er en belastningsskade som utvikles gradvis når senen overbelastes over tid.

**Symptomer:**
- Smerte ved belastning
- Stivhet om morgenen
- Ømhet ved berøring
- Gradvis forverring uten behandling

**Vanlige lokalisasjoner:**
- Akillessenen (hælen)
- Patellasenen (under kneskålen)
- Tennis-/golfalbue
- Skulder (rotatorcuffen)`,
    },
    {
      id: 'kroppsoving-vg1-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på akutte skader og belastningsskader?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Akutte skader oppstår plutselig, belastningsskader utvikles gradvis over tid',
            multipleChoiceOptions: [
              'Akutte skader oppstår plutselig, belastningsskader utvikles gradvis over tid',
              'Akutte skader er mindre alvorlige',
              'Belastningsskader krever alltid operasjon',
              'Det er ingen forskjell',
            ],
          },
        ],
        solution: 'Akutte skader oppstår ved en enkelt hendelse (fall, kollisjon), mens belastningsskader utvikles gradvis på grunn av gjentatt overbelastning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en forstuing?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'En skade på leddbåndene rundt et ledd',
            multipleChoiceOptions: [
              'En skade på leddbåndene rundt et ledd',
              'En skade på muskelen',
              'Et brukket bein',
              'En betennelse i senen',
            ],
          },
        ],
        solution: 'En forstuing (distorsjon) er en skade på leddbåndene som oppstår når leddet tvinges utenfor sitt normale bevegelsesområde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-4-text-1',
      type: 'text',
      content: `## Akutte skader

**Ankelforstuing:**
- Den vanligste idrettsskaden
- Oppstår oftest ved å "gå over" (inversjon)
- Laterale leddbånd (yttersiden) skades hyppigst
- Forebygging: Balanse- og styrketrening, teip/støtte

**Korsbåndsskade (ACL):**
- Alvorlig kneskade, ofte i kontaktidretter
- Oppstår ved landing, vridning, eller kollisjon
- Symptomer: "Smell", hevelse, ustabilt kne
- Ofte behov for operasjon og lang rehabilitering

**Hjernerystelse:**
- Hjernen skades ved støt mot hodet
- Symptomer: Hodepine, kvalme, forvirring, hukommelsestap
- Viktig: Oppsøk lege! Ikke fortsett aktivitet!
- Må hvile til symptomfri`,
    },
    {
      id: 'kroppsoving-vg1-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er symptomene på hjernerystelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de vanligste symptomene.',
            solution: 'Hodepine, kvalme, forvirring, hukommelsestap',
            multipleChoiceOptions: [
              'Hodepine, kvalme, forvirring, hukommelsestap',
              'Bare hodepine',
              'Smerter i nakken',
              'Blåmerker på hodet',
            ],
          },
        ],
        solution: 'Hjernerystelse kan gi hodepine, kvalme, forvirring, hukommelsestap, lysømfintlighet og balanseproblemer. Ved mistanke om hjernerystelse skal man stoppe aktivitet og oppsøke lege.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-4-text-2',
      type: 'text',
      content: `## Belastningsskader

**Løperkne (iliotibialt bånd-syndrom):**
- Smerte på utsiden av kneet
- Forverres ved løping, spesielt nedoverbakker
- Årsak: Stram IT-bånd, svak hoftemuskulatur
- Behandling: Tøying, styrkeøvelser, redusert belastning

**Beinhinnebetennelse (shin splints):**
- Smerte langs innsiden av leggbeinet
- Vanlig hos løpere og hoppere
- Årsak: For rask økning i belastning, hardt underlag
- Behandling: Hvile, riktig fottøy, gradvis opptrapping

**Stressfrakturer:**
- Små sprekker i beinet fra repetert belastning
- Vanlig i føtter, leggbein, bekken
- Symptomer: Gradvis økende smerte, ømhet ved trykk
- Behandling: Hvile (6-8 uker), gradvis tilbakeføring`,
    },
    {
      id: 'kroppsoving-vg1-2-4-text-3',
      type: 'text',
      content: `## Skadeforebygging

**Oppvarming:**
- Øker blodtilførsel til muskler
- Forbereder ledd og sener
- Aktiverer nervesystemet
- 10-15 minutter progressiv oppvarming

**Styrke og stabilitet:**
- Sterk muskulatur beskytter ledd
- Core-stabilitet forebygger ryggskader
- Balanse- og propriosepsjonstrening

**Riktig teknikk:**
- Feil teknikk øker skaderisiko
- Få veiledning fra kvalifisert trener
- Videoanalyse kan avdekke feil

**Progresjon:**
- Ikke øk for mye for fort (10%-regelen)
- Lytt til kroppens signaler
- Hvile er en del av treningen

**Utstyr:**
- Riktig fottøy til aktiviteten
- Beskyttelsesutstyr der det er påkrevd
- Bytt ut slitt utstyr`,
    },
    {
      id: 'kroppsoving-vg1-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre tiltak for å forebygge idrettsskader.',
        solution: `Eksempler på forebyggende tiltak:
1. **God oppvarming** - Forbereder muskler, ledd og nervesystem
2. **Styrke- og balansetrening** - Sterk muskulatur beskytter ledd
3. **Riktig teknikk** - Reduserer feilbelastning
4. **Gradvis progresjon** - Ikke øk belastningen for raskt
5. **Riktig utstyr** - Fottøy, beskyttelse tilpasset aktiviteten
6. **Tilstrekkelig hvile** - La kroppen restituere`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er 10%-regelen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Ikke øk treningsbelastningen med mer enn 10% per uke',
            multipleChoiceOptions: [
              'Ikke øk treningsbelastningen med mer enn 10% per uke',
              '10% av treningen skal være hvile',
              'Man skal hvile 10% av døgnet',
              '10% av skader er alvorlige',
            ],
          },
        ],
        solution: '10%-regelen er en tommelfingerregel som sier at du ikke bør øke treningsbelastningen (distanse, tid, vekt) med mer enn 10% per uke for å unngå belastningsskader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-4-tip-1',
      type: 'tip',
      title: 'FIFA 11+',
      content: `FIFA 11+ er et oppvarmingsprogram utviklet for å forebygge skader i fotball. Programmet tar 20 minutter og har vist seg å redusere skader med opptil 50%. Det inneholder styrke-, balanse- og bevegelsesøvelser som også kan brukes i andre idretter.`,
    },
    {
      id: 'kroppsoving-vg1-2-4-warning-1',
      type: 'warning',
      title: 'Når skal du oppsøke lege?',
      content: `Oppsøk lege umiddelbart ved:
- Hodeskade med bevisstløshet eller forvirring
- Deformitet (feilstilling) i ledd eller bein
- Kraftig hevelse som utvikler seg raskt
- Nummenhet eller kribling
- Manglende evne til å belaste skadet kroppsdel
- Smerte som ikke avtar med hvile`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du ser en lagkamerat gå i bakken og holde seg til ankelen etter en takling i fotball. Beskriv hvordan du ville håndtert situasjonen de første 10 minuttene.',
        subTasks: [],
        solution: `Håndtering av akutt ankelskade:

**Første 1-2 minutter:**
- Stopp spillet og sikre området
- Gå bort og spør hva som skjedde og hvor det gjør vondt
- Vurder om personen kan bevege ankelen

**De neste 3-5 minuttene:**
- Hjelp personen ut av banen (ikke belaste foten hvis vondt)
- Start PRICE: Beskytt ankelen, la personen hvile
- Legg is på ankelen (med klut mellom)

**5-10 minutter:**
- Legg elastisk bandasje hvis tilgjengelig (kompresjon)
- Løft foten opp på en bag eller benk (elevasjon)
- Vurder om lege/legevakt trengs (stor hevelse, ustabilt ledd, kraftig smerte)

Fortsett PRICE de neste timene. Oppsøk lege ved tvil eller manglende bedring.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Reflekter over en idrettsskade du selv har hatt, eller beskriv en skade du kjenner til. Hva slags skade var det? Hvordan oppsto den? Hva ble gjort for å behandle den? Hva kunne vært gjort for å forebygge den?',
        subTasks: [],
        solution: `Eksempel på refleksjon:

**Skade:** Ankelforstuing (grad 2) i fotball

**Hvordan den oppsto:**
Gikk over på ankelen ved landing etter en heading. Akutt skade ved ytre leddbånd.

**Behandling:**
- PRICE de første 48 timene (is, hvile, kompresjon, elevasjon)
- Gradvis belastning etter 3 dager
- Fysioterapi med balanse- og styrkeøvelser
- Teip på trening de første 6 ukene

**Forebygging (for fremtiden):**
- Balanse- og propriosepsjonstrening
- Styrke ankelen med øvelser
- Bruke støtte/teip ved behov
- Bedre oppvarming før aktivitet

**Læring:** Skader skjer, men mange kan forebygges med riktig trening og forberedelse. Viktig å ta skader på alvor og ikke returnere for tidlig.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5: Førstehjelp ved idrettsskader
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_2_5: TextbookChapter = {
  id: 'kroppsoving-vg1-2-5',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '2.5',
  title: 'Førstehjelp ved idrettsskader',
  description: 'Lær grunnleggende førstehjelp ved idrettsskader, inkludert PRICE-prinsippet og HLR.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forebygge skader ved bevegelsesaktiviteter og utføre grunnleggende førstehjelp',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-2-5-intro',
      type: 'text',
      content: `## Førstehjelp ved idrettsskader

Kunnskap om førstehjelp kan utgjøre forskjellen mellom rask tilheling og langvarig skade. Som idrettsutøver bør du kunne håndtere vanlige skader og kjenne igjen situasjoner som krever profesjonell hjelp.

**Mål med førstehjelp:**
- Forhindre ytterligere skade
- Redusere smerte og hevelse
- Fremme tilheling
- Avgjøre om profesjonell hjelp trengs`,
    },
    {
      id: 'kroppsoving-vg1-2-5-def-1',
      type: 'definition',
      title: 'PRICE-prinsippet',
      content: `PRICE er en forkortelse for den akutte behandlingen av bløtdelsskader:

**P - Protection (Beskyttelse)**
Beskytt skadet område mot ytterligere skade. Stopp aktiviteten.

**R - Rest (Hvile)**
Avlast skadet område. Unngå belastning de første 24-72 timene.

**I - Ice (Is/Kulde)**
Avkjøling reduserer hevelse og smerte. 15-20 min hver time. Bruk klut mellom is og hud.

**C - Compression (Kompresjon)**
Elastisk bandasje gir støtte og begrenser hevelse. Ikke for stramt!

**E - Elevation (Elevasjon)**
Løft skadet område over hjertenivå for å redusere hevelse.`,
    },
    {
      id: 'kroppsoving-vg1-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står PRICE for?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig oversettelse.',
            solution: 'Protection, Rest, Ice, Compression, Elevation',
            multipleChoiceOptions: [
              'Protection, Rest, Ice, Compression, Elevation',
              'Pain, Rest, Ice, Cold, Exercise',
              'Protect, Run, Ice, Cool, Elevate',
              'Prevention, Recovery, Ice, Care, Evaluation',
            ],
          },
        ],
        solution: 'PRICE = Protection (Beskyttelse), Rest (Hvile), Ice (Is), Compression (Kompresjon), Elevation (Elevasjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-5-def-2',
      type: 'definition',
      title: 'HLR (Hjerte-Lunge-Redning)',
      content: `HLR er livreddende førstehjelp når noen har hjertestans.

**Fremgangsmåte for voksne:**
1. **Sikre egen sikkerhet**
2. **Sjekk bevissthet** - Rist forsiktig, spør høyt
3. **Ring 113** - Sett på høyttaler
4. **Sjekk pust** - Se, lytt, føl i maks 10 sek
5. **Start HLR hvis ikke normal pust:**
   - 30 brystkompresjoner (5-6 cm dybde, 100-120/min)
   - 2 innblåsinger (hvis du kan/vil)
   - Fortsett 30:2 til hjelp ankommer
6. **Bruk hjertestarter (AED)** hvis tilgjengelig - følg instruksjoner`,
    },
    {
      id: 'kroppsoving-vg1-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor dypt skal man trykke ved brystkompresjoner på voksne?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig dybde.',
            solution: '5-6 cm',
            multipleChoiceOptions: [
              '5-6 cm',
              '2-3 cm',
              '8-10 cm',
              'Så dypt som mulig',
            ],
          },
        ],
        solution: 'Ved HLR på voksne skal man trykke 5-6 cm dypt, med en frekvens på 100-120 kompresjoner per minutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forholdet mellom brystkompresjoner og innblåsinger ved HLR?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forhold.',
            solution: '30 kompresjoner, 2 innblåsinger',
            multipleChoiceOptions: [
              '30 kompresjoner, 2 innblåsinger',
              '15 kompresjoner, 2 innblåsinger',
              '30 kompresjoner, 5 innblåsinger',
              '10 kompresjoner, 1 innblåsing',
            ],
          },
        ],
        solution: 'Standard HLR: 30 brystkompresjoner etterfulgt av 2 innblåsinger. Fortsett syklusen til hjelp ankommer eller personen våkner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-5-def-3',
      type: 'definition',
      title: 'Stabilt sideleie',
      content: `Stabilt sideleie brukes for bevisstløse som puster normalt:

**Når brukes det:**
- Personen puster normalt
- Personen er bevisstløs
- Ingen mistanke om nakkeskade

**Fremgangsmåte:**
1. Legg nærmeste arm i 90 grader ved hodet
2. Legg borterste hånd mot nærmeste kinn
3. Bøy borterste kne
4. Rull personen mot deg
5. Juster hodet så luftveiene er åpne
6. Overvåk pusten kontinuerlig`,
    },
    {
      id: 'kroppsoving-vg1-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Når brukes stabilt sideleie?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig situasjon.',
            solution: 'Når personen er bevisstløs men puster normalt',
            multipleChoiceOptions: [
              'Når personen er bevisstløs men puster normalt',
              'Når personen har hjertestans',
              'Ved alle skader',
              'Kun ved nakkeskader',
            ],
          },
        ],
        solution: 'Stabilt sideleie brukes når en person er bevisstløs men puster normalt, for å sikre åpne luftveier og hindre at de svelger oppkast.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-5-text-1',
      type: 'text',
      content: `## Behandling av vanlige skader

**Ankelforstuing:**
1. Stopp aktivitet umiddelbart
2. Bruk PRICE de første 48-72 timene
3. Gradvis belastning når smerten tillater
4. Oppsøk lege ved stor hevelse eller manglende bedring

**Muskelstrekk:**
1. Stopp aktivitet
2. PRICE-behandling
3. Forsiktig tøying etter 48 timer hvis smertefritt
4. Gradvis opptrapping av aktivitet

**Blødende sår:**
1. Stopp blødningen med direkte trykk
2. Rens såret med rent vann
3. Dekk med ren bandasje
4. Tetanusvaksine? Oppdater ved behov`,
    },
    {
      id: 'kroppsoving-vg1-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv hvordan du ville behandlet en ankelforstuing de første timene etter skaden.',
        solution: `Behandling av ankelforstuing med PRICE:
1. **Protection:** Stopp aktiviteten umiddelbart, beskytt ankelen
2. **Rest:** Avlast foten, ikke belast den
3. **Ice:** Legg ispose (med klut mellom) på ankelen i 15-20 min hver time
4. **Compression:** Legg elastisk bandasje rundt ankelen, ikke for stramt
5. **Elevation:** Løft foten over hjertenivå (legg puter under)

Fortsett PRICE de første 48-72 timene. Oppsøk lege ved kraftig hevelse, store smerter, eller manglende bedring etter noen dager.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-5-text-2',
      type: 'text',
      content: `## Når skal du tilkalle hjelp?

**Ring 113 ved:**
- Bevisstløshet
- Pusteproblemer
- Brystsmerter
- Store blødninger som ikke stopper
- Mistanke om nakkeskade
- Alvorlige allergiske reaksjoner
- Forgiftning

**Oppsøk lege/legevakt ved:**
- Mistanke om brudd eller alvorlig forstuing
- Hodeskade med symptomer
- Sår som trenger sting
- Infeksjonstegn (rødhet, varme, puss)
- Skade som ikke bedres som forventet

**Viktig:** Det er alltid bedre å tilkalle hjelp én gang for mye enn én gang for lite!`,
    },
    {
      id: 'kroppsoving-vg1-2-5-text-3',
      type: 'text',
      content: `## Varme- og kuldeskader

**Heteslag:**
- Symptomer: Høy kroppstemperatur, rød/tørr hud, forvirring
- Tiltak: Kjøl ned med vann, skygge, ring 113

**Utmattelse pga. varme:**
- Symptomer: Svette, kvalme, svimmelhet, kramper
- Tiltak: Hvile i skyggen, drikke, avkjøling

**Hypotermi (nedkjøling):**
- Symptomer: Skjelving, forvirring, trøtthet
- Tiltak: Varme omgivelser, tørre klær, varme drikker, ring 113 ved alvorlig

**Frostskader:**
- Symptomer: Hvit/grå hud, nummenhet, blemmer
- Tiltak: Gradvis oppvarming i lunkent vann (37-39°C), ikke gni, oppsøk lege`,
    },
    {
      id: 'kroppsoving-vg1-2-5-tip-1',
      type: 'tip',
      title: 'Førstehjelpsutstyr',
      content: `Ha alltid tilgjengelig:
- Ispose (eller pose med frosne erter)
- Elastisk bandasje
- Plaster og sterile kompresser
- Saks og tape
- Telefon med 113 tilgjengelig
- Varm teppe/redningsteppe
- Desinfeksjonsmiddel`,
    },
    {
      id: 'kroppsoving-vg1-2-5-warning-1',
      type: 'warning',
      title: 'Ved mistanke om nakkeskade',
      content: `Hvis du mistenker nakkeskade (fall fra høyde, kraftig slag, dykkerulykke):
- IKKE flytt personen med mindre livstruende fare
- Stabiliser hodet og nakken
- Ring 113 umiddelbart
- Hold personen varm og rolig til hjelp ankommer`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Øv på HLR med medelever (simulering uten faktisk HLR). Gå gjennom alle stegene.',
        solution: `HLR-stegene:
1. Sikre egen sikkerhet
2. Sjekke bevissthet (riste, rope)
3. Ringe 113 (høyttaler)
4. Sjekke pust (10 sekunder)
5. Starte brystkompresjoner (30 stk, 5-6 cm dyp, 100-120/min)
6. Gi 2 innblåsinger (hvis kompetent)
7. Fortsette 30:2 til hjelp ankommer
8. Bruke hjertestarter hvis tilgjengelig`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Øv på stabil sideleie med en partner. Person A ligger på ryggen, person B legger A i stabil sideleie. Bytt roller. Beskriv de 5 stegene i prosessen.',
        subTasks: [],
        solution: `Fremgangsmåte for stabil sideleie:

**Steg 1:** Legg nærmeste arm (den mot deg) i 90 grader oppover ved siden av hodet.

**Steg 2:** Ta tak i borterste hånd og legg den mot nærmeste kinn (håndflaten mot kinnet).

**Steg 3:** Bøy borterste kne opp slik at foten er flat mot underlaget.

**Steg 4:** Rull personen mot deg ved å dra i det bøyde kneet. Hold hånden mot kinnet under rullingen.

**Steg 5:** Juster hodet bakover slik at luftveiene er åpne (haken løftes). Sjekk at personen puster.

**Viktig:** Overvåk pusten kontinuerlig. Hvis pusten stopper, rull tilbake og start HLR.

**Når jeg øvde:** [Beskriv din erfaring med øvelsen, hva som var vanskelig/lett, hva du lærte]`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-2-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-5-ex-8',
        number: '8',
        type: 'classic',
        task: 'Gjennomfør en HLR-øvelse på dukke (hvis tilgjengelig) eller på pute. Øv på: 1) Sjekke bevissthet og pust, 2) Ringe 113, 3) Utføre 5 sykluser med 30 kompresjoner og 2 innblåsinger. Beskriv erfaringen din.',
        subTasks: [],
        solution: `Erfaringer fra HLR-øvelse:

**1. Sjekke bevissthet og pust:**
Ristet forsiktig på skulderen og ropte: "Hører du meg?". Sjekket pust ved å se, lytte og føle i 10 sekunder. Ingen pust = start HLR.

**2. Ringe 113:**
Slo på høyttaler og sa: "Person med hjertestans på [adresse], trenger akutt hjelp." Fulgte instruksjoner.

**3. Brystkompresjoner:**
Plasserte hånden midt på brystet, den andre hånden oppå. Strake armer, 5-6 cm dypt, 100-120 slag/min. Telte høyt: "1, 2, 3... 30".

**4. Innblåsinger:**
Løftet haken, lukket nesen, pustet inn i munnen 2 ganger (ca. 1 sek hver). Så at brystet hevet seg.

**5. Fortsatte sykluser:**
30 kompresjoner + 2 innblåsinger x 5 runder. Var slitsomt! Byttet med partner etter 5 sykluser.

**Læring:** HLR er fysisk krevende. Viktig å trykke dypt nok og hardt nok. Godt å ha flere til å bytte på. Øvelse gjør mester!`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6: Oppvarming og nedvarming
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_2_6: TextbookChapter = {
  id: 'kroppsoving-vg1-2-6',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '2.6',
  title: 'Oppvarming og nedvarming',
  description: 'Lær hvorfor og hvordan du gjennomfører effektiv oppvarming og nedvarming.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
    'forebygge skader ved bevegelsesaktiviteter og utføre grunnleggende førstehjelp',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-2-6-intro',
      type: 'text',
      content: `## Oppvarming og nedvarming

Oppvarming og nedvarming er viktige deler av enhver treningsøkt. De forbereder kroppen på aktivitet og hjelper den å gjenopprette seg etterpå.

**Hvorfor er dette viktig?**
- Forebygger skader
- Forbedrer prestasjon
- Fremmer restitusjon
- Er en del av god treningsvane`,
    },
    {
      id: 'kroppsoving-vg1-2-6-def-1',
      type: 'definition',
      title: 'Oppvarming',
      content: `Oppvarming er aktivitet som gradvis forbereder kroppen på fysisk belastning.

**Fysiologiske effekter:**
- Økt kroppstemperatur (1-2°C)
- Økt blodtilførsel til muskler
- Bedre leddsmøring (økt synovialvæske)
- Økt nervesystemaktivitet
- Bedre muskelkontraksjon og elastisitet
- Mental forberedelse

**Varighet:** Vanligvis 10-20 minutter avhengig av aktivitet`,
    },
    {
      id: 'kroppsoving-vg1-2-6-def-2',
      type: 'definition',
      title: 'Nedvarming (cool-down)',
      content: `Nedvarming er gradvis reduksjon av aktivitetsnivået etter trening.

**Formål:**
- Gradvis senking av puls og kroppstemperatur
- Fremmer fjerning av avfallsstoffer
- Forebygger svimmelhet (blod samles ikke i beina)
- Reduserer muskelspenninger
- Mental nedtrapping

**Varighet:** Vanligvis 5-15 minutter`,
    },
    {
      id: 'kroppsoving-vg1-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fysiologiske effektene av oppvarming?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg alle som gjelder.',
            solution: 'Økt kroppstemperatur, økt blodtilførsel til muskler, bedre leddsmøring',
            multipleChoiceOptions: [
              'Økt kroppstemperatur, økt blodtilførsel til muskler, bedre leddsmøring',
              'Bare økt puls',
              'Bare mental forberedelse',
              'Redusert muskelstyrke',
            ],
          },
        ],
        solution: 'Oppvarming gir økt kroppstemperatur, økt blodtilførsel til muskler, bedre leddsmøring, aktivert nervesystem og bedre muskelkontraksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-6-text-1',
      type: 'text',
      content: `## Oppvarmingens faser

**Fase 1: Generell oppvarming (5-10 min)**
- Lett aerob aktivitet (jogg, sykling, hopp)
- Øker puls og kroppstemperatur gradvis
- Involverer store muskelgrupper
- Intensitet: 50-60% av maks puls

**Fase 2: Dynamisk tøying (3-5 min)**
- Kontrollerte bevegelser gjennom leddenes fulle bevegelsesutslag
- Eksempler: Bensving, armrotasjoner, utfall med rotasjon
- Forbereder ledd og muskler på bevegelsesmønstrene i aktiviteten

**Fase 3: Spesifikk oppvarming (5-10 min)**
- Øvelser som ligner hovedaktiviteten
- Gradvis økning av intensitet
- Mental innstilling på aktiviteten
- Eksempel for fotball: Pasningsøvelser, skudd, retningsforandringer`,
    },
    {
      id: 'kroppsoving-vg1-2-6-text-2',
      type: 'text',
      content: `## Dynamisk vs. statisk tøying

**Dynamisk tøying (før trening):**
- Kontrollerte bevegelser gjennom bevegelsesutslaget
- Aktiverer musklene
- Forbereder nervesystemet
- Eksempler: Bensving, utfall, armkretser

**Statisk tøying (etter trening):**
- Hold posisjonen i 15-30 sekunder
- Slapper av muskulaturen
- Øker bevegeligheten over tid
- Unngå før eksplosive aktiviteter (kan redusere kraft)

**Viktig:** Forskning viser at statisk tøying FØR trening kan redusere kraft og hastighet. Bruk dynamisk tøying i oppvarmingen!`,
    },
    {
      id: 'kroppsoving-vg1-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på dynamisk og statisk tøying?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Dynamisk tøying er bevegelse gjennom bevegelsesutslag, statisk tøying er å holde en posisjon',
            multipleChoiceOptions: [
              'Dynamisk tøying er bevegelse gjennom bevegelsesutslag, statisk tøying er å holde en posisjon',
              'De er det samme',
              'Statisk tøying er bedre før trening',
              'Dynamisk tøying er farlig',
            ],
          },
        ],
        solution: 'Dynamisk tøying innebærer kontrollerte bevegelser gjennom leddets bevegelsesutslag (best før trening). Statisk tøying er å holde en tøyeposisjon i 15-30 sekunder (best etter trening).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor bør man unngå statisk tøying rett før eksplosive aktiviteter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Det kan midlertidig redusere muskelkraft og hastighet',
            multipleChoiceOptions: [
              'Det kan midlertidig redusere muskelkraft og hastighet',
              'Det er farlig',
              'Det gir kramper',
              'Det har ingen effekt',
            ],
          },
        ],
        solution: 'Forskning viser at statisk tøying rett før trening kan redusere muskelkraft og eksplosivitet midlertidig. Bruk heller dynamisk tøying i oppvarmingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-6-text-3',
      type: 'text',
      content: `## Nedvarmingsrutine

**Steg 1: Gradvis intensitetsreduksjon (5-10 min)**
- Senk tempoet gradvis
- Fortsett å bevege deg for å holde blodstrømmen i gang
- Eksempel: Rolig jogg som går over til gange

**Steg 2: Statisk tøying (5-10 min)**
- Tøy hovedmuskelgruppene som ble brukt
- Hold hver tøying i 15-30 sekunder
- Pust rolig og slapp av
- Ikke press til smerte

**Steg 3: Hydrering og næring**
- Drikk vann eller sportsdrikk
- Spis karbohydrat og protein innen 30-60 minutter

**Eksempler på tøyingsøvelser:**
- Quadriceps (lår foran)
- Hamstrings (lår bak)
- Leggmuskler
- Hoftefleksorer
- Rygg og skuldre`,
    },
    {
      id: 'kroppsoving-vg1-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor nedvarming er viktig etter trening.',
        solution: `Nedvarming er viktig fordi:
1. **Gradvis pulssenking:** Hindrer at blod samles i beina (kan gi svimmelhet)
2. **Fjerning av avfallsstoffer:** Lett aktivitet holder blodstrømmen i gang og fjerner melkesyre
3. **Reduserer muskelspenninger:** Forebygger stølhet
4. **Mental nedtrapping:** Avslutter treningsøkten på en god måte
5. **Fremmer restitusjon:** Forbereder kroppen på neste økt`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Oppvarming før fotballkamp',
      problem: 'Lag en oppvarmingsrutine for en fotballkamp.',
      solution: `**Generell oppvarming (8 min):**
- Lett jogg rundt banen (3 min)
- Sidesteg og baklengs løp (2 min)
- Høye kneløft og hælspark (3 min)

**Dynamisk tøying (5 min):**
- Bensving forover og til siden (10 per bein)
- Utfall med rotasjon (10 per side)
- Hofteåpnere (10 per bein)
- Armkretser (10 hver vei)

**Spesifikk oppvarming (10 min):**
- Pasningsøvelser i par (3 min)
- Dribling og vendinger (3 min)
- Skudd på mål (3 min)
- Korte sprinter med retningsforandring (1 min)

**Mental forberedelse:**
- Fokus på kampens mål
- Visualiser gode prestasjoner`,
    },
    {
      id: 'kroppsoving-vg1-2-6-tip-1',
      type: 'tip',
      title: 'Tilpass oppvarmingen',
      content: `Oppvarmingen bør tilpasses:
- **Aktiviteten:** Fotball krever annen oppvarming enn svømming
- **Temperaturen:** Kaldere vær = lengre oppvarming
- **Individuelle behov:** Stive ledd eller tidligere skader kan kreve ekstra oppmerksomhet
- **Tidspunkt:** Om morgenen er kroppen stivere og trenger lengre oppvarming`,
    },
    {
      id: 'kroppsoving-vg1-2-6-warning-1',
      type: 'warning',
      title: 'Ikke hopp over oppvarmingen!',
      content: `Å starte hard trening uten oppvarming øker risikoen for:
- Muskelstrekk og -rupturer
- Forstuinger
- Dårligere prestasjon
- Hjerte- og karsystembelastning

Bruk alltid tid på ordentlig oppvarming, selv når du har dårlig tid!`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en oppvarmingsrutine for en aktivitet du driver med.',
        solution: `En god oppvarmingsrutine inneholder:
1. **Generell oppvarming (5-10 min):** Lett aerob aktivitet som øker pulsen gradvis
2. **Dynamisk tøying (3-5 min):** Kontrollerte bevegelser som forbereder ledd og muskler
3. **Spesifikk oppvarming (5-10 min):** Øvelser som ligner hovedaktiviteten, med gradvis økt intensitet

Tilpass innholdet til din aktivitet og dine individuelle behov.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg og led en oppvarming for klassen din (10-15 minutter). Velg en aktivitet (f.eks. fotball, volleyball, styrketrening, løping) og gjennomfør alle fasene. Evaluer hvordan det gikk.',
        subTasks: [],
        solution: `Eksempel: Oppvarming før volleyballtime

**Min plan:**

**1. Generell oppvarming (5 min):**
- 3 min lett jogging rundt hallen
- 2 min sidelengs bevegelser, bakover, høye knær
- Mål: Øke pulsen til ca. 120-140

**2. Dynamisk tøying (3 min):**
- Armkretser (10 hver vei)
- Bensving forover (10 per bein)
- Utfall med vri (10 per side)
- Hofteopnere (10 per bein)
- Mål: Mobilisere ledd som brukes i volleyball

**3. Spesifikk oppvarming (5 min):**
- Pasning i par over nettet, start rolig (2 min)
- Smash-bevegelser uten ball (10 stk)
- Korte sprinter til nett og tilbake (5 stk)
- Lett smashing og blokkering (2 min)
- Mål: Forberede kroppen på volleyballbevegelser

**Gjennomføring:**
Jeg ledet oppvarmingen for 12 klassekamerater. Startet med å forklare planen, deretter ledet jeg øvelsene mens jeg demonstrerte. Alle fulgte med og gjorde øvelsene.

**Evaluering:**
Positivt: God flyt, alle deltok, brukte riktig tid. Puls var oppe før hovedøkt.
Utfordrende: Vanskelig å forklare og demonstrere samtidig. Noen trengte mer detaljerte instruksjoner på dynamisk tøying.
Læring: Viktig med god planlegging og tydelig kommunikasjon. Neste gang vil jeg demonstrere først, så la alle gjøre sammen.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler fra Del 1
// ============================================================================

export const KROPPSOVING_VG1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG1_1_1,
  CHAPTER_KROPPSOVING_VG1_1_2,
  CHAPTER_KROPPSOVING_VG1_1_3,
  CHAPTER_KROPPSOVING_VG1_1_4,
  CHAPTER_KROPPSOVING_VG1_1_5,
  CHAPTER_KROPPSOVING_VG1_1_6,
  CHAPTER_KROPPSOVING_VG1_1_7,
  CHAPTER_KROPPSOVING_VG1_2_1,
  CHAPTER_KROPPSOVING_VG1_2_2,
  CHAPTER_KROPPSOVING_VG1_2_3,
  CHAPTER_KROPPSOVING_VG1_2_4,
  CHAPTER_KROPPSOVING_VG1_2_5,
  CHAPTER_KROPPSOVING_VG1_2_6,
];
