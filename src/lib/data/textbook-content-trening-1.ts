/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Treningslære 1 (VG2 valgfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Grunnleggende treningslære
// ============================================================================

export const CHAPTER_TRENING_1_1: TextbookChapter = {
  id: 'trening-1-1',
  courseId: 'trening-1',
  chapterNumber: '1',
  title: 'Grunnleggende treningslære',
  description: 'Lær de grunnleggende prinsippene for effektiv trening og fysisk utvikling.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå grunnleggende treningsprinsipper',
    'kunne forklare sammenhengen mellom belastning og tilpasning',
    'kjenne til faktorer som påvirker treningseffekt',
  ],
  content: [
    {
      id: 'trening-1-1-intro',
      type: 'text',
      content: `Treningslære er vitenskapen om hvordan fysisk trening påvirker kroppen og hvordan vi kan optimalisere trening for ulike mål. I dette kapittelet lærer du de grunnleggende prinsippene som ligger til grunn for all effektiv trening.`,
    },
    {
      id: 'trening-1-1-def-1',
      type: 'definition',
      title: 'Trening',
      content: `Trening er planlagt, strukturert og gjentatt fysisk aktivitet med mål om å forbedre eller vedlikeholde en eller flere komponenter av fysisk form.`,
    },
    {
      id: 'trening-1-1-text-1',
      type: 'text',
      title: 'De grunnleggende treningsprinsippene',
      content: `**1. Overbelastningsprinsippet**

For at kroppen skal tilpasse seg og bli sterkere, må den utsettes for en belastning som er større enn det den er vant til. Dette kalles overbelastning. Uten tilstrekkelig belastning vil kroppen ikke ha noen grunn til å tilpasse seg.

**2. Progresjonsprinsippet**

Belastningen må økes gradvis over tid for å fortsette fremgangen. Etter hvert som kroppen tilpasser seg, må treningsmengden eller intensiteten økes for å oppnå videre utvikling.

**3. Spesifisitetsprinsippet**

Kroppen tilpasser seg spesifikt til den typen belastning den utsettes for. Vil du bli bedre til å løpe, må du løpe. Vil du bli sterkere, må du trene styrke. Treningen må være målrettet.

**4. Reversibilitetsprinsippet**

Treningseffekten er reversibel - tar du pause fra trening, mister du gradvis det du har opparbeidet. "Use it or lose it" er et velkjent uttrykk som beskriver dette prinsippet.

**5. Individualitetsprinsippet**

Alle mennesker er forskjellige og responderer ulikt på trening. Det som fungerer for én person, fungerer ikke nødvendigvis for en annen. Treningsprogrammer må tilpasses den enkelte.`,
    },
    {
      id: 'trening-1-1-def-2',
      type: 'definition',
      title: 'Superkompensasjon',
      content: `Superkompensasjon er kroppens tilpasningsprosess der den bygger seg opp til et høyere nivå enn utgangspunktet etter en treningsbelastning og påfølgende restitusjon.`,
    },
    {
      id: 'trening-1-1-text-2',
      type: 'text',
      title: 'Superkompensasjonsmodellen',
      content: `**Fasene i superkompensasjon:**

1. **Treningsbelastning**: Kroppen brytes ned under trening
2. **Restitusjon**: Kroppen reparerer skader og gjenoppretter energilagre
3. **Superkompensasjon**: Kroppen bygger seg opp til et høyere nivå
4. **Tilbakegang**: Uten ny belastning faller nivået tilbake

**Optimal timing av neste treningsøkt:**
- For tidlig = overtrenning, ikke fullført restitusjon
- Optimal timing = trener på toppen av superkompensasjonen
- For sent = mister gevinsten fra forrige økt

Restitusjonstiden varierer avhengig av:
- Treningens intensitet og varighet
- Muskelgrupper involvert
- Alder og treningsbakgrunn
- Søvn og ernæring`,
    },
    {
      id: 'trening-1-1-note-1',
      type: 'note',
      title: 'Viktig om restitusjon',
      content: `Restitusjon er ikke passiv hvile - det er en aktiv prosess der kroppen reparerer og forsterker seg. God søvn, riktig ernæring og tilstrekkelig hvile er avgjørende for optimal tilpasning.`,
    },
    {
      id: 'trening-1-1-text-3',
      type: 'text',
      title: 'Treningsvariabler',
      content: `**De viktigste treningsvariablene:**

**Intensitet** - Hvor hardt du trener
- Kan måles i prosent av maksimal kapasitet
- Høyere intensitet = kortere varighet

**Volum** - Hvor mye du trener
- Antall sett × repetisjoner × vekt (styrke)
- Distanse eller tid (utholdenhet)

**Frekvens** - Hvor ofte du trener
- Antall treningsøkter per uke
- Balanse mellom trening og restitusjon

**Varighet** - Hvor lenge du trener
- Lengden på hver treningsøkt
- Påvirker energisystemene ulikt

**Type** - Hva slags trening du gjør
- Styrke, utholdenhet, bevegelighet, koordinasjon
- Spesifisitet i forhold til mål`,
    },
    {
      id: 'trening-1-1-def-3',
      type: 'definition',
      title: 'Dose-respons-forholdet',
      content: `Dose-respons-forholdet beskriver sammenhengen mellom mengden trening (dose) og effekten av treningen (respons). Det finnes en optimal dose - for lite gir liten effekt, for mye kan føre til overtrenning.`,
    },
    {
      id: 'trening-1-1-warning-1',
      type: 'warning',
      title: 'Overtrenning',
      content: `Overtrenning oppstår når belastningen over tid er større enn kroppens evne til å restituere. Symptomer inkluderer: vedvarende tretthet, nedsatt prestasjon, søvnproblemer, humørsvingninger, økt skaderisiko og nedsatt immunforsvar.`,
    },
    {
      id: 'trening-1-1-text-4',
      type: 'text',
      title: 'Faktorer som påvirker treningseffekt',
      content: `**Indre faktorer:**
- Genetikk og fibertypesammensetning
- Alder og biologisk modning
- Kjønn og hormonprofil
- Tidligere treningserfaring
- Motivasjon og mental innstilling

**Ytre faktorer:**
- Treningsprogram og veiledning
- Utstyr og fasiliteter
- Ernæring og hydrering
- Søvn og restitusjon
- Sosial støtte og miljø
- Stress og andre belastninger i livet`,
    },
    {
      id: 'trening-1-1-tip-1',
      type: 'tip',
      title: 'Start riktig',
      content: `Som nybegynner er det viktig å starte forsiktig og bygge opp gradvis. Det tar tid å utvikle teknikk, styrke og utholdenhet. Tålmodighet og konsistens er nøkkelen til langsiktig fremgang.`,
    },
    {
      id: 'trening-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er overbelastningsprinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av overbelastningsprinsippet.',
            solution: 'Kroppen må utsettes for større belastning enn den er vant til for å tilpasse seg',
            multipleChoiceOptions: [
              'Kroppen må utsettes for større belastning enn den er vant til for å tilpasse seg',
              'Man bør alltid trene til utmattelse',
              'Kroppen tilpasser seg best med lite belastning',
              'Overbelastning betyr å trene for mye',
            ],
          },
        ],
        solution: 'Overbelastningsprinsippet sier at kroppen må utsettes for en belastning utover det normale for å stimulere til tilpasning og utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er superkompensasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av superkompensasjon.',
            solution: 'Kroppens tilpasning til et høyere nivå etter trening og restitusjon',
            multipleChoiceOptions: [
              'Kroppens tilpasning til et høyere nivå etter trening og restitusjon',
              'Når man trener ekstra hardt',
              'En type proteintilskudd',
              'Oppvarming før trening',
            ],
          },
        ],
        solution: 'Superkompensasjon er prosessen der kroppen ikke bare reparerer seg etter trening, men bygger seg opp til et høyere funksjonsnivå enn før.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr spesifisitetsprinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar spesifisitetsprinsippet.',
            solution: 'Kroppen tilpasser seg spesifikt til den typen belastning den utsettes for',
            multipleChoiceOptions: [
              'Kroppen tilpasser seg spesifikt til den typen belastning den utsettes for',
              'All trening gir samme effekt',
              'Man må trene alt samtidig',
              'Spesialisering er dårlig',
            ],
          },
        ],
        solution: 'Spesifisitetsprinsippet betyr at treningen må være målrettet - løping gjør deg bedre til å løpe, styrketrening gjør deg sterkere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke treningsvariabler kan manipuleres for å styre treningsbelastningen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de viktigste treningsvariablene.',
            solution: 'Intensitet, volum, frekvens, varighet og type',
            multipleChoiceOptions: [
              'Intensitet, volum, frekvens, varighet og type',
              'Bare vekt og repetisjoner',
              'Kun tid og distanse',
              'Bare antall økter',
            ],
          },
        ],
        solution: 'De fem hovedvariablene - intensitet, volum, frekvens, varighet og type - kan justeres for å tilpasse treningen til ulike mål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er tegn på overtrenning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg symptomer som kan tyde på overtrenning.',
            solution: 'Vedvarende tretthet, nedsatt prestasjon, søvnproblemer og humørsvingninger',
            multipleChoiceOptions: [
              'Vedvarende tretthet, nedsatt prestasjon, søvnproblemer og humørsvingninger',
              'Økt styrke og energi',
              'Bedre søvn',
              'Raskere restitusjon',
            ],
          },
        ],
        solution: 'Overtrenning viser seg gjennom fysiske og mentale symptomer som vedvarende tretthet, dårligere prestasjoner, søvnvansker, irritabilitet og økt skaderisiko.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'trening-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvordan du ville brukt superkompensasjonsmodellen til å planlegge optimal treningstiming.',
        solution: 'For optimal fremgang bør neste treningsøkt legges til toppen av superkompensasjonskurven, når kroppen har restituert og bygget seg opp til et høyere nivå. Dette krever at man kjenner sin egen kropp og tilpasser restitusjonstiden til belastningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Kroppens anatomi og fysiologi
// ============================================================================

export const CHAPTER_TRENING_1_2: TextbookChapter = {
  id: 'trening-1-2',
  courseId: 'trening-1',
  chapterNumber: '2',
  title: 'Kroppens anatomi og fysiologi',
  description: 'Forstå hvordan kroppens muskler, skjelett og organer fungerer under trening.',
  estimatedMinutes: 65,
  competenceGoals: [
    'kjenne til muskelskjelettsystemets oppbygning',
    'forstå hvordan muskler kontraherer og produserer kraft',
    'kunne forklare hjerte-kar-systemets rolle under trening',
  ],
  content: [
    {
      id: 'trening-1-2-intro',
      type: 'text',
      content: `For å forstå hvordan trening påvirker kroppen, må vi først kjenne til kroppens grunnleggende oppbygning og funksjon. I dette kapittelet ser vi på muskelskjelettsystemet, hjerte-kar-systemet og nervesystemet.`,
    },
    {
      id: 'trening-1-2-text-1',
      type: 'text',
      title: 'Muskelskjelettsystemet',
      content: `**Skjelettet**

Skjelettet består av 206 knokler og har flere viktige funksjoner:
- Støtte og struktur for kroppen
- Beskyttelse av indre organer
- Festepunkt for muskler
- Produksjon av blodceller
- Lager for kalsium og mineraler

**Leddtyper:**
- Kuleledd (skulder, hofte) - størst bevegelighet
- Hengselledd (kne, albue) - bevegelse i én retning
- Vridledd (underarm) - rotasjon
- Glideledd (håndrot) - begrenset glidebevegelse`,
    },
    {
      id: 'trening-1-2-def-1',
      type: 'definition',
      title: 'Skjelettmuskulatur',
      content: `Skjelettmuskulatur er den viljestyrte muskulaturen som er festet til skjelettet via sener. Den består av lange, flerkjernede muskelceller (muskelfibre) og kontrolleres bevisst gjennom nervesystemet.`,
    },
    {
      id: 'trening-1-2-text-2',
      type: 'text',
      title: 'Musklenes oppbygning',
      content: `**Fra muskel til muskelfiber:**

1. **Muskel** - Hele muskelen (f.eks. biceps)
2. **Muskelbunt (fasikkel)** - Gruppe av muskelfibre
3. **Muskelfiber** - Enkelt muskelcelle
4. **Myofibrill** - Kontraktile tråder inne i fiberen
5. **Sarkomerer** - Minste funksjonelle enhet

**Muskelfibrenes bestanddeler:**
- Aktin (tynne filamenter)
- Myosin (tykke filamenter)
- Sarkoplasmatisk retikulum (kalsiumlager)
- Mitokondrier (energiproduksjon)`,
    },
    {
      id: 'trening-1-2-def-2',
      type: 'definition',
      title: 'Muskelkontraksjon',
      content: `Muskelkontraksjon skjer når aktin- og myosinfilamentene glir over hverandre og forkorter sarkomerene. Dette krever ATP (energi) og kalsium, og styres av nervesignaler.`,
    },
    {
      id: 'trening-1-2-text-3',
      type: 'text',
      title: 'Muskelfibretyper',
      content: `**Type I - Langsomme, oksidative fibre (røde)**
- Kontraherer sakte, men utholdende
- Høyt innhold av mitokondrier
- God blodtilførsel
- Bruker primært fett som energikilde
- Dominerer i utholdenhetsidretter

**Type IIa - Raske, oksidative fibre**
- Mellomting mellom type I og IIx
- Kan tilpasse seg begge retninger
- Bruker både fett og karbohydrater
- God utholdenhet og kraft

**Type IIx - Raske, glykolytiske fibre (hvite)**
- Kontraherer raskt og kraftig
- Få mitokondrier
- Trettes fort
- Bruker primært karbohydrater
- Dominerer i eksplosive idretter

**Fibertypesammensetning:**
Fordelingen er delvis genetisk bestemt, men trening kan påvirke egenskapene til fibrene.`,
    },
    {
      id: 'trening-1-2-text-4',
      type: 'text',
      title: 'Hjerte-kar-systemet',
      content: `**Hjertet**
- Muskulær pumpe som driver blodsirkulasjonen
- Fire kamre: to forkamre og to hovedkamre
- Pumper ca. 5 liter blod per minutt i hvile
- Kan øke til 20-30 liter under maksimal belastning

**Blodets funksjoner:**
- Transport av oksygen til musklene
- Fjerning av karbondioksid og avfallsstoffer
- Transport av næringsstoffer og hormoner
- Regulering av kroppstemperatur

**Blodkarene:**
- Arterier - fører blod fra hjertet
- Kapillærer - utveksling av stoffer i vevene
- Vener - fører blod tilbake til hjertet`,
    },
    {
      id: 'trening-1-2-def-3',
      type: 'definition',
      title: 'VO2maks',
      content: `VO2maks (maksimalt oksygenopptak) er den maksimale mengden oksygen kroppen kan ta opp og bruke per minutt under maksimal belastning. Det er et viktig mål på aerob kapasitet og utholdenhet.`,
    },
    {
      id: 'trening-1-2-text-5',
      type: 'text',
      title: 'Tilpasninger til trening',
      content: `**Muskulære tilpasninger ved styrketrening:**
- Hypertrofi (økt muskelmasse)
- Økt styrke og kraft
- Bedre nevromuskulær aktivering
- Sterkere sener og ligamenter

**Kardiovaskulære tilpasninger ved utholdenhetstrening:**
- Større og sterkere hjerte
- Lavere hvilepuls
- Økt blodvolum
- Flere kapillærer i musklene
- Flere og større mitokondrier
- Høyere VO2maks`,
    },
    {
      id: 'trening-1-2-note-1',
      type: 'note',
      title: 'Treningens langsiktige effekter',
      content: `De fleste treningseffekter krever uker og måneder med konsistent trening. Styrke kan øke merkbart etter 4-6 uker, mens VO2maks typisk forbedres over 6-12 uker med regelmessig utholdenhetstrening.`,
    },
    {
      id: 'trening-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er skjelettmuskulatur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av skjelettmuskulatur.',
            solution: 'Viljestyrt muskulatur festet til skjelettet via sener',
            multipleChoiceOptions: [
              'Viljestyrt muskulatur festet til skjelettet via sener',
              'Hjertemuskelen',
              'Glatt muskulatur i tarmene',
              'Muskulatur som ikke kan kontrolleres',
            ],
          },
        ],
        solution: 'Skjelettmuskulatur er den viljestyrte muskulaturen vi bruker til bevegelse, og den er festet til skjelettet via sener.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner type I muskelfibre?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige egenskaper for type I fibre.',
            solution: 'Langsomme, utholdende, mange mitokondrier, bruker fett',
            multipleChoiceOptions: [
              'Langsomme, utholdende, mange mitokondrier, bruker fett',
              'Raske, kraftige, få mitokondrier',
              'Bare for kortvarig aktivitet',
              'Finnes ikke i mennesker',
            ],
          },
        ],
        solution: 'Type I fibre er røde, langsomme og utholdende. De har mange mitokondrier og god blodtilførsel, og bruker primært fett som energikilde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er VO2maks?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av VO2maks.',
            solution: 'Maksimal mengde oksygen kroppen kan ta opp og bruke per minutt',
            multipleChoiceOptions: [
              'Maksimal mengde oksygen kroppen kan ta opp og bruke per minutt',
              'Maksimal puls',
              'Maksimal styrke',
              'Minste oksygenforbruk',
            ],
          },
        ],
        solution: 'VO2maks måler kroppens maksimale evne til å ta opp og bruke oksygen, og er et viktig mål på aerob kapasitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kontraherer en muskel?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv mekanismen for muskelkontraksjon.',
            solution: 'Aktin og myosin glir over hverandre og forkorter sarkomerene',
            multipleChoiceOptions: [
              'Aktin og myosin glir over hverandre og forkorter sarkomerene',
              'Muskelen pumpes opp med luft',
              'Bare nervesignaler er nødvendig',
              'Muskelen strekkes ut',
            ],
          },
        ],
        solution: 'Muskelkontraksjon skjer ved glidefiberteorien, der aktin- og myosinfilamentene glir over hverandre og forkorter sarkomerene. Dette krever ATP og kalsium.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke tilpasninger skjer i hjerte-kar-systemet ved utholdenhetstrening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige tilpasninger.',
            solution: 'Større hjerte, lavere hvilepuls, flere kapillærer, høyere VO2maks',
            multipleChoiceOptions: [
              'Større hjerte, lavere hvilepuls, flere kapillærer, høyere VO2maks',
              'Mindre hjerte, høyere hvilepuls',
              'Ingen endringer i hjertet',
              'Bare musklene påvirkes',
            ],
          },
        ],
        solution: 'Utholdenhetstrening gir et større og sterkere hjerte, lavere hvilepuls, økt blodvolum, flere kapillærer og høyere VO2maks.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'trening-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv forskjellene mellom type I, type IIa og type IIx muskelfibre, og forklar hvilke idrettsgrener som domineres av hver type.',
        solution: 'Type I (langsomme, utholdende) dominerer i maraton og sykling. Type IIa (mellomting) er viktige i idretter som fotball og svømming. Type IIx (raske, kraftige) dominerer i sprint og vektløfting. De fleste idretter krever en kombinasjon av fibertypene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Energisystemer
// ============================================================================

export const CHAPTER_TRENING_1_3: TextbookChapter = {
  id: 'trening-1-3',
  courseId: 'trening-1',
  chapterNumber: '3',
  title: 'Energisystemer',
  description: 'Lær hvordan kroppen produserer energi til muskelarbeid gjennom ulike energisystemer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå de tre energisystemene og deres funksjoner',
    'kunne forklare sammenhengen mellom intensitet og energisystem',
    'kjenne til ATP og dets rolle i energiomsetningen',
  ],
  content: [
    {
      id: 'trening-1-3-intro',
      type: 'text',
      content: `Muskelarbeid krever energi. Kroppen har tre energisystemer som produserer ATP (adenosintrifosfat) - energimolekylet som driver muskelkontraksjon. Hvilket system som dominerer avhenger av aktivitetens intensitet og varighet.`,
    },
    {
      id: 'trening-1-3-def-1',
      type: 'definition',
      title: 'ATP (Adenosintrifosfat)',
      content: `ATP er kroppens energivaluta - molekylet som leverer energi direkte til cellenes arbeid. Når ATP brytes ned til ADP (adenosindifosfat), frigjøres energi som brukes til muskelkontraksjon og andre prosesser.`,
    },
    {
      id: 'trening-1-3-text-1',
      type: 'text',
      title: 'De tre energisystemene',
      content: `**1. Det fosfagene systemet (ATP-CP)**
- Umiddelbar energi (0-10 sekunder)
- Bruker lagret ATP og kreatinfosfat
- Høyeste kraftutvikling
- Ingen oksygen nødvendig (anaerobt)
- Eksempler: sprint, hopp, tunge løft

**2. Det glykolytiske systemet (melkesyre)**
- Korttidsenergi (10 sek - 2 min)
- Bryter ned glukose uten oksygen
- Produserer melkesyre
- Moderat til høy intensitet
- Eksempler: 400m løp, rask svømming

**3. Det aerobe systemet (oksidativt)**
- Langtidsenergi (over 2 minutter)
- Bruker oksygen til å forbrenne
- Kan bruke karbohydrater, fett og protein
- Lavere intensitet, lang varighet
- Eksempler: maraton, sykling, rolig jogging`,
    },
    {
      id: 'trening-1-3-def-2',
      type: 'definition',
      title: 'Anaerob terskel',
      content: `Anaerob terskel er intensitetsnivået der melkesyreproduksjonen begynner å overstige kroppens evne til å fjerne den. Over denne terskelen akkumuleres melkesyre, og utmattelse inntrer raskere.`,
    },
    {
      id: 'trening-1-3-text-2',
      type: 'text',
      title: 'Energikilder',
      content: `**Karbohydrater (glukose/glykogen)**
- Rask energikilde
- Lagres i muskler og lever
- Dominerer ved høy intensitet
- Begrenset lager (ca. 400-500 g)

**Fett (fettsyrer)**
- Langsommere energiproduksjon
- Stort lager i kroppen
- Dominerer ved lav-moderat intensitet
- Krever oksygen for forbrenning

**Protein (aminosyrer)**
- Normalt minimal energikilde (under 5%)
- Brukes mer ved langvarig aktivitet
- Øker ved karbohydratmangel
- Kan brytes ned fra muskelvev`,
    },
    {
      id: 'trening-1-3-text-3',
      type: 'text',
      title: 'Energisystemenes samspill',
      content: `**Viktig å forstå:**
Alle tre energisystemene arbeider alltid sammen - det er aldri bare ett system som er aktivt. Intensiteten og varigheten bestemmer hvilket system som dominerer.

**Overganger:**
- Ved start av aktivitet: Fosfagent system starter umiddelbart
- Etter 10 sekunder: Glykolysen tar gradvis over
- Etter 2-3 minutter: Aerob forbrenning dominerer

**Intensitet og energisystem:**
- 100% intensitet: Primært fosfagent
- 80-95% intensitet: Primært glykolytisk
- 60-80% intensitet: Blanding aerob/anaerob
- Under 60% intensitet: Primært aerobt`,
    },
    {
      id: 'trening-1-3-note-1',
      type: 'note',
      title: 'Melkesyre er ikke farlig',
      content: `Melkesyre (laktat) er ikke en giftig avfallsstoff, men faktisk en viktig energikilde. Den kan brukes som drivstoff av hjertet og andre muskler, og bidrar til å opprettholde blodsukkeret under langvarig aktivitet.`,
    },
    {
      id: 'trening-1-3-text-4',
      type: 'text',
      title: 'Trening av energisystemene',
      content: `**Trening av det fosfagene systemet:**
- Maksimal intensitet i 5-10 sekunder
- Lange pauser (2-5 minutter)
- Eksempel: sprintintervaller

**Trening av det glykolytiske systemet:**
- Høy intensitet i 30-90 sekunder
- Korte til moderate pauser
- Eksempel: 400m intervaller

**Trening av det aerobe systemet:**
- Moderat intensitet over lang tid
- Langkjøring, intervaller, terskeltrening
- Eksempel: rolig jogging 30-60 min`,
    },
    {
      id: 'trening-1-3-warning-1',
      type: 'warning',
      title: 'Glykogentømming',
      content: `Ved intensiv eller langvarig trening kan glykogenlagrene tømmes. Dette fører til "å gå i veggen" - en drastisk nedgang i prestasjonsevne. God ernæring før og under aktivitet er viktig for å unngå dette.`,
    },
    {
      id: 'trening-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er ATP?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av ATP.',
            solution: 'Kroppens energivaluta som leverer energi til cellenes arbeid',
            multipleChoiceOptions: [
              'Kroppens energivaluta som leverer energi til cellenes arbeid',
              'Et vitamin',
              'En muskeltype',
              'Et hormon',
            ],
          },
        ],
        solution: 'ATP (adenosintrifosfat) er molekylet som direkte driver alle energikrevende prosesser i cellene, inkludert muskelkontraksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket energisystem dominerer under en 100m sprint?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig energisystem.',
            solution: 'Det fosfagene systemet (ATP-CP)',
            multipleChoiceOptions: [
              'Det fosfagene systemet (ATP-CP)',
              'Det glykolytiske systemet',
              'Det aerobe systemet',
              'Alle like mye',
            ],
          },
        ],
        solution: 'En 100m sprint varer under 10-15 sekunder og drives primært av lagret ATP og kreatinfosfat (det fosfagene systemet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er anaerob terskel?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar begrepet anaerob terskel.',
            solution: 'Intensiteten der melkesyreproduksjonen overstiger fjerningsevnen',
            multipleChoiceOptions: [
              'Intensiteten der melkesyreproduksjonen overstiger fjerningsevnen',
              'Maksimal puls',
              'Den laveste intensiteten',
              'Hvilepuls',
            ],
          },
        ],
        solution: 'Ved anaerob terskel produseres melkesyre like fort som den fjernes. Over denne terskelen akkumuleres laktat og utmattelse inntrer raskere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken energikilde dominerer ved lav intensitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den primære energikilden ved rolig aktivitet.',
            solution: 'Fett',
            multipleChoiceOptions: [
              'Fett',
              'Karbohydrater',
              'Protein',
              'Bare ATP',
            ],
          },
        ],
        solution: 'Ved lav intensitet bruker kroppen primært fett som energikilde fordi det aerobe systemet har tid til å forbrenne fettsyrer effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor akkumuleres melkesyre ved høy intensitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor melkesyre hoper seg opp.',
            solution: 'Fordi det glykolytiske systemet produserer melkesyre raskere enn kroppen kan fjerne den',
            multipleChoiceOptions: [
              'Fordi det glykolytiske systemet produserer melkesyre raskere enn kroppen kan fjerne den',
              'Fordi man drikker for lite vann',
              'Fordi musklene slutter å jobbe',
              'Det skjer ikke ved høy intensitet',
            ],
          },
        ],
        solution: 'Ved høy intensitet må kroppen bruke anaerob glykolyse for å produsere ATP raskt nok. Dette produserer melkesyre som biprodekt, og ved høy nok intensitet overstiger produksjonen fjerningsevnen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'trening-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Design et intervallprogram som trener det glykolytiske systemet. Beskriv intensitet, varighet og pauser.',
        solution: 'Eksempel: 6-8 x 400m løp på 80-90% intensitet med 2-3 minutters aktiv hvile mellom. Alternativt: 10 x 1 minutt på ergometersykkel med høy intensitet, 1 minutt lett pedalering mellom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Styrketrening
// ============================================================================

export const CHAPTER_TRENING_1_4: TextbookChapter = {
  id: 'trening-1-4',
  courseId: 'trening-1',
  chapterNumber: '4',
  title: 'Styrketrening',
  description: 'Lær prinsipper og metoder for effektiv styrketrening.',
  estimatedMinutes: 65,
  competenceGoals: [
    'forstå de ulike formene for styrke',
    'kunne planlegge styrketreningsprogrammer for ulike mål',
    'kjenne til riktig teknikk og sikkerhet i styrketrening',
  ],
  content: [
    {
      id: 'trening-1-4-intro',
      type: 'text',
      content: `Styrketrening er en av de viktigste treningsformene for helse, prestasjon og skadeforebygging. I dette kapittelet lærer du om ulike former for styrke, treningsmetoder og hvordan du planlegger effektiv styrketrening.`,
    },
    {
      id: 'trening-1-4-def-1',
      type: 'definition',
      title: 'Styrke',
      content: `Styrke er muskulaturens evne til å utvikle kraft. Det finnes ulike former for styrke: maksimal styrke, eksplosiv styrke, styrke-utholdenhet og reaktiv styrke.`,
    },
    {
      id: 'trening-1-4-text-1',
      type: 'text',
      title: 'Former for styrke',
      content: `**Maksimal styrke**
- Den største kraften muskelen kan utvikle
- Måles ofte som 1RM (one repetition maximum)
- Viktig for tunge løft og som grunnlag for annen styrke

**Eksplosiv styrke (Power)**
- Evnen til å utvikle kraft raskt
- Kraft × hastighet
- Viktig for hopp, kast, sprint

**Styrke-utholdenhet**
- Evnen til å utføre mange repetisjoner mot motstand
- Viktig i mange idretter og dagliglivet
- Motstand mot lokal muskulær utmattelse

**Reaktiv styrke**
- Utnyttelse av strekk-forkortningssyklusen
- Plyometrisk kraft
- Viktig for hopp og retningsforandringer`,
    },
    {
      id: 'trening-1-4-def-2',
      type: 'definition',
      title: '1RM (One Repetition Maximum)',
      content: `1RM er den maksimale vekten du kan løfte én gang med korrekt teknikk i en gitt øvelse. Det brukes som referansepunkt for å bestemme treningsintensitet.`,
    },
    {
      id: 'trening-1-4-text-2',
      type: 'text',
      title: 'Treningsmetoder for ulike mål',
      content: `**Maksimal styrke:**
- 1-5 repetisjoner
- 85-100% av 1RM
- 3-5 sett
- Lange pauser (3-5 min)
- Rekrutterer flest motoriske enheter

**Hypertrofi (muskelvekst):**
- 6-12 repetisjoner
- 65-85% av 1RM
- 3-5 sett
- Moderate pauser (60-90 sek)
- Metabolsk stress og mekanisk spenning

**Styrke-utholdenhet:**
- 15-25+ repetisjoner
- Under 65% av 1RM
- 2-4 sett
- Korte pauser (30-60 sek)
- Lokal utholdenhetskapasitet

**Eksplosiv styrke:**
- 1-6 repetisjoner
- 30-70% av 1RM (med maksimal hastighet)
- 3-6 sett
- Lange pauser (3-5 min)
- Fokus på hastighet og kraft`,
    },
    {
      id: 'trening-1-4-text-3',
      type: 'text',
      title: 'Grunnleggende øvelser',
      content: `**Flerleddsøvelser (compound):**
- Knebøy - bein, hofte, korsrygg
- Markløft - hele baksiden, grep
- Benkpress - bryst, skuldre, triceps
- Skulderpress - skuldre, triceps
- Roing - rygg, biceps
- Chin-ups/Pull-ups - rygg, biceps

**Isolasjonsøvelser:**
- Biceps curl
- Triceps extensions
- Leg curl/extension
- Lateral raises
- Calf raises

**Anbefaling:**
Prioriter flerleddsøvelser som gir mest effekt. Bruk isolasjonsøvelser som supplement for spesifikke behov.`,
    },
    {
      id: 'trening-1-4-warning-1',
      type: 'warning',
      title: 'Sikkerhet først',
      content: `Korrekt teknikk er avgjørende for å unngå skader. Lær grunnteknikkene ordentlig før du øker vekten. Bruk spotter ved tunge løft, og ikke tren gjennom smerte.`,
    },
    {
      id: 'trening-1-4-text-4',
      type: 'text',
      title: 'Programdesign',
      content: `**Treningsvolum:**
- Nybegynnere: 10-15 sett per muskelgruppe/uke
- Viderekomne: 15-20+ sett per muskelgruppe/uke
- Fordeles over 2-3 økter per muskelgruppe

**Frekvens:**
- Hver muskelgruppe 2-3 ganger per uke
- Helkroppsprogram (2-3 dager)
- Split-programmer (4-6 dager)

**Progresjon:**
- Øk vekt når du mestrer repetisjoner
- Lineær progresjon for nybegynnere
- Periodisering for viderekomne

**Rekkefølge:**
1. Flerleddsøvelser først (tunge)
2. Isolasjonsøvelser sist (lettere)
3. Store muskelgrupper før små`,
    },
    {
      id: 'trening-1-4-tip-1',
      type: 'tip',
      title: 'Progressiv overbelastning',
      content: `For kontinuerlig fremgang må du gradvis øke belastningen over tid. Dette kan gjøres ved å øke vekt, repetisjoner, sett, eller redusere pausetid. Hold treningsdagbok for å spore fremgang.`,
    },
    {
      id: 'trening-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom maksimal styrke og eksplosiv styrke?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Maksimal styrke er størst mulig kraft, eksplosiv styrke er kraft utviklet raskt',
            multipleChoiceOptions: [
              'Maksimal styrke er størst mulig kraft, eksplosiv styrke er kraft utviklet raskt',
              'De er det samme',
              'Eksplosiv styrke er alltid større',
              'Maksimal styrke er bare for vektløftere',
            ],
          },
        ],
        solution: 'Maksimal styrke handler om hvor mye kraft du kan utvikle uavhengig av tid, mens eksplosiv styrke (power) handler om å utvikle kraft raskt - kraft × hastighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken treningsprotokoll er best for hypertrofi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg optimal treningsprotokoll for muskelvekst.',
            solution: '6-12 repetisjoner med 65-85% av 1RM, moderate pauser',
            multipleChoiceOptions: [
              '6-12 repetisjoner med 65-85% av 1RM, moderate pauser',
              '1-3 repetisjoner med maksimal vekt',
              '50+ repetisjoner med lett vekt',
              'Ingen styrketrening',
            ],
          },
        ],
        solution: 'Hypertrofi oppnås best med moderat antall repetisjoner (6-12) og moderat intensitet (65-85% 1RM) som gir både mekanisk spenning og metabolsk stress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en flerleddsøvelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse og eksempel.',
            solution: 'Øvelse som involverer flere ledd og muskelgrupper, f.eks. knebøy',
            multipleChoiceOptions: [
              'Øvelse som involverer flere ledd og muskelgrupper, f.eks. knebøy',
              'Øvelse som bare bruker ett ledd, f.eks. biceps curl',
              'Øvelse uten vekt',
              'Bare øvelser med maskiner',
            ],
          },
        ],
        solution: 'Flerleddsøvelser (compound) involverer flere ledd og muskelgrupper samtidig, som knebøy (hofte, kne, ankel) og benkpress (skulder, albue).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er pauser viktige i styrketrening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Pausene lar ATP og kreatinfosfat gjenopprettes for maksimal kraftutvikling',
            multipleChoiceOptions: [
              'Pausene lar ATP og kreatinfosfat gjenopprettes for maksimal kraftutvikling',
              'Pausene har ingen betydning',
              'Jo kortere pauser, jo bedre alltid',
              'Pauser er bare for å hvile',
            ],
          },
        ],
        solution: 'Pauselengden påvirker energisystemene. Lange pauser gir full gjenoppretting av ATP-CP for maksimal styrke, mens kortere pauser gir metabolsk stress for hypertrofi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvor mange sett per muskelgruppe per uke anbefales for nybegynnere?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg anbefalt volum for nybegynnere.',
            solution: '10-15 sett per muskelgruppe per uke',
            multipleChoiceOptions: [
              '10-15 sett per muskelgruppe per uke',
              '1-2 sett totalt',
              '50+ sett per dag',
              'Volum spiller ingen rolle',
            ],
          },
        ],
        solution: 'For nybegynnere anbefales 10-15 sett per muskelgruppe per uke, fordelt på 2-3 økter. Dette gir tilstrekkelig stimulus for tilpasning uten overtrenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'trening-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag et helkroppsprogram med 6 øvelser for en nybegynner. Inkluder øvelse, sett og repetisjoner.',
        solution: 'Eksempel: 1) Knebøy 3x10, 2) Benkpress 3x10, 3) Roing 3x10, 4) Skulderpress 3x10, 5) Markløft 3x8, 6) Planke 3x30 sek. Utføres 3 ganger per uke med minst én hviledag mellom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Utholdenhetstrening
// ============================================================================

export const CHAPTER_TRENING_1_5: TextbookChapter = {
  id: 'trening-1-5',
  courseId: 'trening-1',
  chapterNumber: '5',
  title: 'Utholdenhetstrening',
  description: 'Lær om ulike former for utholdenhet og metoder for å forbedre kondisjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå forskjellen mellom aerob og anaerob utholdenhet',
    'kunne planlegge utholdenhetstrening for ulike mål',
    'kjenne til metoder for å måle og utvikle utholdenhet',
  ],
  content: [
    {
      id: 'trening-1-5-intro',
      type: 'text',
      content: `Utholdenhet er evnen til å opprettholde fysisk arbeid over tid. God utholdenhet er viktig for helse, daglig funksjon og idrettsprestasjon. I dette kapittelet lærer du om ulike former for utholdenhet og hvordan du trener dem effektivt.`,
    },
    {
      id: 'trening-1-5-def-1',
      type: 'definition',
      title: 'Utholdenhet',
      content: `Utholdenhet er organismens evne til å arbeide med relativ høy intensitet over lengre tid, eller evnen til å motstå utmattelse.`,
    },
    {
      id: 'trening-1-5-text-1',
      type: 'text',
      title: 'Former for utholdenhet',
      content: `**Aerob utholdenhet**
- Langvarig arbeid med oksygen
- Intensitet under anaerob terskel
- Primært fettforbrenning
- Eksempel: maraton, langdistanseløp

**Anaerob utholdenhet**
- Høyintensitetsarbeid over anaerob terskel
- Begrenset varighet (opptil 2-3 minutter)
- Primært karbohydratforbrenning
- Eksempel: 800m løp, svømming 200m

**Lokal muskulær utholdenhet**
- Spesifikke musklers evne til gjentatt arbeid
- Kan være aerob eller anaerob
- Eksempel: mange repetisjoner med vekter`,
    },
    {
      id: 'trening-1-5-text-2',
      type: 'text',
      title: 'Måling av utholdenhet',
      content: `**VO2maks (maksimalt oksygenopptak)**
- Gullstandard for aerob kapasitet
- Måles i ml/kg/min
- Verdier: utrente 30-40, godt trente 50-60, elite 70-85+

**Puls som intensitetsmål:**
- Maksimal puls ≈ 220 - alder (tommelfingerregel)
- Hvilepuls: Lavere = bedre kondisjon
- Intensitetssoner basert på % av makspuls

**Borgs skala (RPE):**
- 6-20 skala for opplevd anstrengelse
- 12-14 = moderat intensitet
- 15-17 = høy intensitet
- 18-20 = maksimal anstrengelse`,
    },
    {
      id: 'trening-1-5-def-2',
      type: 'definition',
      title: 'Intensitetssoner',
      content: `Intensitetssoner er områder av treningsintensitet definert ut fra prosent av maksimal puls eller VO2maks. De brukes for å styre treningen mot spesifikke mål.`,
    },
    {
      id: 'trening-1-5-text-3',
      type: 'text',
      title: 'Intensitetssoner',
      content: `**Sone 1: Lett (50-60% HRmax)**
- Aktiv restitusjon
- Forbrenner mest fett
- Lang varighet mulig

**Sone 2: Moderat (60-70% HRmax)**
- Grunntrening
- Aerob base
- Typisk langkjøring

**Sone 3: Terskel (70-80% HRmax)**
- Ved eller rundt anaerob terskel
- Effektivt for å heve terskel
- Tempokjøring

**Sone 4: Høy intensitet (80-90% HRmax)**
- Over anaerob terskel
- Intervalltrening
- Begrenset varighet

**Sone 5: Maksimal (90-100% HRmax)**
- Maksimal anstrengelse
- VO2maks-trening
- Kort varighet`,
    },
    {
      id: 'trening-1-5-text-4',
      type: 'text',
      title: 'Treningsmetoder',
      content: `**Kontinuerlig trening:**
- Langkjøring: Lav-moderat intensitet, 30-90+ min
- Tempokjøring: Rundt terskel, 20-40 min
- Fartlek: Varierende intensitet i terreng

**Intervalltrening:**
- Korte intervaller: 15-60 sek høy intensitet
- Mellomintervaller: 2-5 min moderat-høy intensitet
- Lange intervaller: 5-15 min ved terskel

**Terskeltrening:**
- Ved eller rett under anaerob terskel
- Cruiseintervaller eller tempoøkter
- Hever laktatterskelen

**HIIT (High-Intensity Interval Training):**
- Maksimal intensitet i korte perioder
- Effektivt for tid og VO2maks
- Eksempel: 4x4 minutter på 90-95%`,
    },
    {
      id: 'trening-1-5-tip-1',
      type: 'tip',
      title: '80/20-regelen',
      content: `Forskning viser at utholdenhetstrening bør fordeles omtrent 80% ved lav intensitet (sone 1-2) og 20% ved høy intensitet (sone 4-5). Dette kalles polarisert trening og gir best utvikling over tid.`,
    },
    {
      id: 'trening-1-5-note-1',
      type: 'note',
      title: 'Treningsfrekvens',
      content: `For å utvikle utholdenhet bør man trene minimum 3 ganger per uke. Eliteutøvere kan trene 10-15+ økter per uke, men dette krever mange år med gradvis oppbygging.`,
    },
    {
      id: 'trening-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom aerob og anaerob utholdenhet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Aerob bruker oksygen over lang tid, anaerob er høy intensitet uten tilstrekkelig oksygen',
            multipleChoiceOptions: [
              'Aerob bruker oksygen over lang tid, anaerob er høy intensitet uten tilstrekkelig oksygen',
              'De er det samme',
              'Anaerob varer lengst',
              'Aerob er alltid mest intensiv',
            ],
          },
        ],
        solution: 'Aerob utholdenhet involverer langvarig arbeid med oksygen (under anaerob terskel), mens anaerob utholdenhet er høyintensitetsarbeid der oksygentilførselen ikke rekker å dekke behovet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er VO2maks?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Maksimalt oksygenopptak - den største mengden oksygen kroppen kan bruke per minutt',
            multipleChoiceOptions: [
              'Maksimalt oksygenopptak - den største mengden oksygen kroppen kan bruke per minutt',
              'Maksimal puls',
              'Maksimal fart',
              'Maksimal melkesyre',
            ],
          },
        ],
        solution: 'VO2maks måler kroppens evne til å ta opp og bruke oksygen under maksimal belastning, og er et viktig mål på aerob kapasitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er 80/20-regelen i utholdenhetstrening?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar prinsippet.',
            solution: '80% av treningen ved lav intensitet, 20% ved høy intensitet',
            multipleChoiceOptions: [
              '80% av treningen ved lav intensitet, 20% ved høy intensitet',
              '80% styrke, 20% utholdenhet',
              '80% intervaller, 20% langkjøring',
              'Trene 80 minutter, hvile 20',
            ],
          },
        ],
        solution: 'Polarisert trening (80/20) anbefaler at mesteparten av treningen gjøres rolig (sone 1-2), med en mindre andel høyintensiv trening (sone 4-5). Dette gir best langsiktig utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken intensitetssone trener man typisk langkjøring i?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig intensitetssone.',
            solution: 'Sone 2 (60-70% av makspuls)',
            multipleChoiceOptions: [
              'Sone 2 (60-70% av makspuls)',
              'Sone 5 (90-100%)',
              'Sone 4 (80-90%)',
              'Det spiller ingen rolle',
            ],
          },
        ],
        solution: 'Langkjøring utføres typisk i sone 2 (moderat intensitet) for å bygge aerob grunnlag og forbrenne fett effektivt over lang tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er HIIT?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv HIIT-trening.',
            solution: 'High-Intensity Interval Training - korte perioder med maksimal innsats og hvileperioder',
            multipleChoiceOptions: [
              'High-Intensity Interval Training - korte perioder med maksimal innsats og hvileperioder',
              'Rolig langkjøring',
              'Bare styrketrening',
              'Yoga og tøying',
            ],
          },
        ],
        solution: 'HIIT (High-Intensity Interval Training) er korte, intense intervaller nær maksimal kapasitet, etterfulgt av hvile- eller lavintensitetsperioder. Det er tidseffektivt og forbedrer både aerob og anaerob kapasitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'trening-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg en treningsuke for utholdenhet med 4 økter. Beskriv type trening, varighet og intensitet for hver økt.',
        solution: 'Eksempel: Mandag: Langkjøring 45 min sone 2. Onsdag: Intervaller 6x3 min i sone 4 med 2 min pause. Fredag: Rolig jogg 30 min sone 1-2. Søndag: Tempokjøring 25 min i sone 3. Total fordeling: ca. 75% lav intensitet, 25% høy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Bevegelighet og koordinasjon
// ============================================================================

export const CHAPTER_TRENING_1_6: TextbookChapter = {
  id: 'trening-1-6',
  courseId: 'trening-1',
  chapterNumber: '6',
  title: 'Bevegelighet og koordinasjon',
  description: 'Lær om betydningen av bevegelighet og koordinasjon for prestasjon og skadeforebygging.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå betydningen av bevegelighet for funksjon og helse',
    'kjenne til ulike metoder for å forbedre bevegelighet',
    'kunne forklare sammenhengen mellom koordinasjon og motorisk læring',
  ],
  content: [
    {
      id: 'trening-1-6-intro',
      type: 'text',
      content: `Bevegelighet og koordinasjon er viktige egenskaper som påvirker både prestasjon og skaderisiko. God bevegelighet gir frie bevegelser, mens koordinasjon handler om å styre bevegelsene effektivt og presist.`,
    },
    {
      id: 'trening-1-6-def-1',
      type: 'definition',
      title: 'Bevegelighet',
      content: `Bevegelighet er evnen til å bevege ledd gjennom sitt fulle bevegelsesutslag. Det bestemmes av leddets anatomi, musklenes lengde og elastisitet, samt nervesystemets toleranse for strekk.`,
    },
    {
      id: 'trening-1-6-text-1',
      type: 'text',
      title: 'Faktorer som påvirker bevegelighet',
      content: `**Anatomiske faktorer:**
- Leddets form og struktur
- Leddbånd og leddkapsel
- Beinstrukturer (kan begrense)

**Muskulære faktorer:**
- Muskellengde og elastisitet
- Spenningsnivå i muskulaturen
- Fascia (bindevev)

**Nevrale faktorer:**
- Reflekser (strekkerefleksen)
- Nervesystemets toleranse for strekk
- Smertesignaler

**Andre faktorer:**
- Alder (avtar med alderen)
- Kjønn (kvinner ofte mer bevegelige)
- Temperatur (varm = mer bevegelig)
- Aktivitetsnivå og trening`,
    },
    {
      id: 'trening-1-6-text-2',
      type: 'text',
      title: 'Metoder for bevegelighetstrening',
      content: `**Statisk tøying:**
- Holder strekk i 15-60 sekunder
- Rolig og kontrollert
- Egner seg best etter trening
- Øker bevegelighet over tid

**Dynamisk tøying:**
- Kontrollerte bevegelser gjennom bevegelsesutslaget
- Øker blodgjennomstrømning
- Egner seg som oppvarming
- Forbereder kroppen på aktivitet

**PNF (Proprioceptiv Nevromuskulær Fasilitering):**
- Kombinerer strekk og muskelkontraksjon
- Effektiv for å øke bevegelighet raskt
- Eksempel: Hold-slapp-strekk

**Dynamisk mobilitet:**
- Aktive bevegelser i leddet
- Leddspesifikk mobilisering
- Forbedrer kontroll og stabilitet`,
    },
    {
      id: 'trening-1-6-warning-1',
      type: 'warning',
      title: 'Statisk tøying før trening',
      content: `Langvarig statisk tøying rett før eksplosive aktiviteter kan midlertidig redusere kraft og power. Bruk dynamisk oppvarming før trening og spar statisk tøying til etterpå.`,
    },
    {
      id: 'trening-1-6-def-2',
      type: 'definition',
      title: 'Koordinasjon',
      content: `Koordinasjon er evnen til å styre og kontrollere kroppens bevegelser effektivt og presist. Det innebærer samspill mellom nervesystem, sanser og muskulatur.`,
    },
    {
      id: 'trening-1-6-text-3',
      type: 'text',
      title: 'Komponenter i koordinasjon',
      content: `**Balanse:**
- Evnen til å holde likevekt
- Statisk (stillestående) og dynamisk (i bevegelse)
- Involverer syn, vestibulærsansen og propriosepsjon

**Reaksjonsevne:**
- Hastighet fra stimulus til respons
- Kan trenes med varierte øvelser
- Viktig i mange idretter

**Rytme:**
- Timing og flyt i bevegelser
- Musikalitet og bevegelsessans
- Viktig i dans, aerobics, lagidretter

**Orientering:**
- Romlig oppfattelse
- Forstå egen posisjon
- Tilpasse bevegelser til omgivelsene

**Differensiering:**
- Presisjon i kraft og bevegelse
- Finjustering av motorikk
- Viktig for tekniske ferdigheter`,
    },
    {
      id: 'trening-1-6-text-4',
      type: 'text',
      title: 'Motorisk læring',
      content: `**Stadier i motorisk læring:**

**1. Kognitivt stadium:**
- Forstå bevegelsen
- Mange feil og justeringer
- Krever mye konsentrasjon

**2. Assosiativt stadium:**
- Forbedring og forfining
- Færre feil
- Kan fokusere på detaljer

**3. Autonomt stadium:**
- Automatisert bevegelse
- Lite bevisst kontroll nødvendig
- Kan fokusere på omgivelsene

**Prinsipper for motorisk læring:**
- Mange repetisjoner (mengdetrening)
- Variasjon i øvelser
- Tilbakemelding og korreksjon
- Gradvis økning i kompleksitet`,
    },
    {
      id: 'trening-1-6-tip-1',
      type: 'tip',
      title: 'Variert trening',
      content: `For å utvikle god koordinasjon bør du prøve mange ulike aktiviteter og bevegelser. Variasjon utfordrer nervesystemet og bygger et bredt bevegelsesrepertoar.`,
    },
    {
      id: 'trening-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er bevegelighet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Evnen til å bevege ledd gjennom sitt fulle bevegelsesutslag',
            multipleChoiceOptions: [
              'Evnen til å bevege ledd gjennom sitt fulle bevegelsesutslag',
              'Hvor fort man kan løpe',
              'Muskelstyrke',
              'Reaksjonsevne',
            ],
          },
        ],
        solution: 'Bevegelighet beskriver hvor stort bevegelsesutslag et ledd har, påvirket av leddanatomi, muskulatur og nervesystemet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken tøyingsmetode egner seg best som oppvarming?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig metode.',
            solution: 'Dynamisk tøying',
            multipleChoiceOptions: [
              'Dynamisk tøying',
              'Langvarig statisk tøying',
              'PNF-tøying',
              'Ingen tøying',
            ],
          },
        ],
        solution: 'Dynamisk tøying med kontrollerte bevegelser er best egnet som oppvarming fordi det øker kroppstemperatur og blodgjennomstrømning uten å redusere kraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er koordinasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Evnen til å styre og kontrollere kroppens bevegelser effektivt og presist',
            multipleChoiceOptions: [
              'Evnen til å styre og kontrollere kroppens bevegelser effektivt og presist',
              'Bare balanse',
              'Muskelstyrke',
              'Utholdenhet',
            ],
          },
        ],
        solution: 'Koordinasjon er samspillet mellom nervesystem, sanser og muskler for å utføre kontrollerte, effektive bevegelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv de tre stadiene i motorisk læring.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig rekkefølge.',
            solution: 'Kognitivt, assosiativt, autonomt',
            multipleChoiceOptions: [
              'Kognitivt, assosiativt, autonomt',
              'Autonomt, kognitivt, assosiativt',
              'Assosiativt, autonomt, kognitivt',
              'Det er bare ett stadium',
            ],
          },
        ],
        solution: 'Motorisk læring går fra kognitivt stadium (forstå og prøve), via assosiativt stadium (forbedre og forfine), til autonomt stadium (automatisert bevegelse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor kan statisk tøying redusere kraft rett før eksplosiv aktivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Langvarig strekk reduserer midlertidig muskelstivhet og nervaktivering',
            multipleChoiceOptions: [
              'Langvarig strekk reduserer midlertidig muskelstivhet og nervaktivering',
              'Det øker kraften',
              'Det har ingen effekt',
              'Statisk tøying styrker musklene',
            ],
          },
        ],
        solution: 'Langvarig statisk tøying (>60 sek) kan midlertidig redusere muskelstivhet og nervaktivering, noe som kan påvirke kraft og power negativt i opptil 30-60 minutter etterpå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'trening-1-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag et bevegelighetsprogram med 5 tøyingsøvelser for hele kroppen. Beskriv øvelse, muskelgruppe og varighet.',
        solution: 'Eksempel: 1) Hamstringtøy i sittende - bakside lår, 30 sek per side. 2) Hoftebøyertøy i utfall - hofteleddsbøyere, 30 sek per side. 3) Brysttøy i dørkarm - brystmuskler, 30 sek per side. 4) Øvre rygg rotasjon - thorax, 30 sek per side. 5) Leggstrekk mot vegg - legger, 30 sek per side.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Ernæring for idrettsutøvere
// ============================================================================

export const CHAPTER_TRENING_1_7: TextbookChapter = {
  id: 'trening-1-7',
  courseId: 'trening-1',
  chapterNumber: '7',
  title: 'Ernæring for idrettsutøvere',
  description: 'Lær om kostholdens betydning for prestasjon, restitusjon og helse.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå energibehovet og makronæringsstoffenes roller',
    'kunne tilpasse ernæring til ulike treningsformer',
    'kjenne til væskebalanse og hydrering under trening',
  ],
  content: [
    {
      id: 'trening-1-7-intro',
      type: 'text',
      content: `Ernæring er en av de viktigste faktorene for treningseffekt og prestasjon. Riktig kosthold gir energi til trening, byggematerialer til restitusjon og styrker helsen. I dette kapittelet lærer du om ernæringens rolle i trening.`,
    },
    {
      id: 'trening-1-7-text-1',
      type: 'text',
      title: 'Energibehov',
      content: `**Komponenter i energiforbruket:**

**Basalstoffskiftet (BMR):**
- Energi til grunnleggende livsfunksjoner
- Utgjør 60-75% av totalt forbruk
- Påvirkes av kroppsvekt, muskelmasse, alder

**Aktivitetsnivå:**
- Energi til fysisk aktivitet
- Varierer mye mellom personer
- Aktive kan ha 50-100%+ økning

**Termisk effekt av mat:**
- Energi til fordøyelse
- Ca. 10% av inntaket
- Protein krever mest energi å fordøye

**Eksempel på energibehov:**
- Stillesittende: 2000-2500 kcal/dag
- Moderat aktiv: 2500-3000 kcal/dag
- Svært aktiv: 3000-4000+ kcal/dag`,
    },
    {
      id: 'trening-1-7-def-1',
      type: 'definition',
      title: 'Makronæringsstoffer',
      content: `Makronæringsstoffer er næringsstoffer kroppen trenger i store mengder: karbohydrater, protein og fett. De gir energi og har viktige funksjoner i kroppen.`,
    },
    {
      id: 'trening-1-7-text-2',
      type: 'text',
      title: 'Karbohydrater',
      content: `**Funksjon:**
- Hovedenergikilde ved moderat-høy intensitet
- Lagres som glykogen i muskler og lever
- Viktig for hjernen og nervesystemet

**Typer:**
- Enkle (sukker): Rask opptak
- Komplekse (stivelse): Langsommere opptak
- Fiber: Fordøyelseshelse

**Behov for idrettsutøvere:**
- Lett aktivitet: 3-5 g/kg kroppsvekt/dag
- Moderat aktivitet: 5-7 g/kg/dag
- Hard trening: 7-10+ g/kg/dag

**Timing:**
- Før trening: 1-4 timer før, lett fordøyelig
- Under trening: Ved aktivitet >60 min
- Etter trening: Innen 30-60 min for optimal restitusjon`,
    },
    {
      id: 'trening-1-7-text-3',
      type: 'text',
      title: 'Protein',
      content: `**Funksjon:**
- Byggestein for muskler og vev
- Enzymer og hormoner
- Immunforsvar
- Energikilde (sekundær)

**Behov:**
- Vanlig person: 0,8-1,0 g/kg/dag
- Utholdenhet: 1,2-1,4 g/kg/dag
- Styrke/hypertrofi: 1,6-2,2 g/kg/dag

**Gode kilder:**
- Animalske: Kjøtt, fisk, egg, meieri
- Vegetabilske: Belgfrukter, tofu, quinoa

**Timing:**
- Fordel jevnt utover dagen (20-40 g per måltid)
- Etter trening: Innen 2 timer
- Før søvn: Kasein eller annet protein`,
    },
    {
      id: 'trening-1-7-text-4',
      type: 'text',
      title: 'Fett',
      content: `**Funksjon:**
- Energikilde ved lav intensitet
- Hormonproduksjon
- Opptak av fettløselige vitaminer
- Cellemembranstruktur

**Typer:**
- Mettet fett: Begrens inntaket
- Enumettet fett: Sunt (olivenolje, avokado)
- Flerumettet fett: Omega-3 og omega-6 (fisk, nøtter)
- Transfett: Unngå

**Anbefalt inntak:**
- 20-35% av totalt energiinntak
- Minimum 0,5 g/kg/dag
- Fokuser på sunne fettkilder`,
    },
    {
      id: 'trening-1-7-def-2',
      type: 'definition',
      title: 'Hydrering',
      content: `Hydrering er kroppens væskebalanse. Riktig væskeinntak er avgjørende for prestasjon, temperaturregulering og kroppsfunksjoner. Dehydrering på bare 2% kan påvirke prestasjonen negativt.`,
    },
    {
      id: 'trening-1-7-text-5',
      type: 'text',
      title: 'Væskebalanse og hydrering',
      content: `**Væskebehov:**
- Daglig behov: Ca. 30-35 ml/kg kroppsvekt
- Ved trening: Ekstra 400-800 ml/time
- Tilpass til svetterate og forhold

**Tegn på dehydrering:**
- Mørk urin
- Tørste (kommer sent!)
- Nedsatt prestasjon
- Hodepine og svimmelhet

**Hydrering rundt trening:**
- Før: Godt hydrert (lys urin)
- Under: 150-250 ml hver 15-20 min
- Etter: Erstatt 150% av tapt vekt

**Elektrolytter:**
- Natrium, kalium, magnesium
- Tappes med svette
- Viktig ved langvarig aktivitet og varme`,
    },
    {
      id: 'trening-1-7-warning-1',
      type: 'warning',
      title: 'Underskudd på energi',
      content: `Kronisk energiunderskudd (RED-S) kan føre til nedsatt prestasjon, hormonforstyrrelser, svekket immunforsvar, dårlig beinhelse og økt skaderisiko. Pass på å dekke energibehovet, spesielt ved hard trening.`,
    },
    {
      id: 'trening-1-7-tip-1',
      type: 'tip',
      title: 'Praktiske råd',
      content: `Planlegg måltider rundt trening. Spis et balansert måltid 2-4 timer før, et lite mellommåltid 30-60 min før om nødvendig, og prioriter protein og karbohydrater etter trening.`,
    },
    {
      id: 'trening-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er makronæringsstoffer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Karbohydrater, protein og fett - næringsstoffer kroppen trenger i store mengder',
            multipleChoiceOptions: [
              'Karbohydrater, protein og fett - næringsstoffer kroppen trenger i store mengder',
              'Vitaminer og mineraler',
              'Bare protein',
              'Kosttilskudd',
            ],
          },
        ],
        solution: 'Makronæringsstoffer er de tre hovedgruppene næringsstoffer som gir energi og byggematerialer: karbohydrater, protein og fett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mye protein anbefales for styrketrening og muskelvekst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig proteinmengde.',
            solution: '1,6-2,2 g per kg kroppsvekt per dag',
            multipleChoiceOptions: [
              '1,6-2,2 g per kg kroppsvekt per dag',
              '0,5 g per kg per dag',
              '5 g per kg per dag',
              'Protein er ikke viktig',
            ],
          },
        ],
        solution: 'For optimal muskelvekst og styrketilpasning anbefales 1,6-2,2 g protein per kg kroppsvekt per dag, fordelt på flere måltider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er karbohydrater viktig for idrettsutøvere?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnen.',
            solution: 'Hovedenergikilde ved moderat til høy intensitet',
            multipleChoiceOptions: [
              'Hovedenergikilde ved moderat til høy intensitet',
              'Bygger muskler',
              'Ikke viktig for trening',
              'Bare for hjernen',
            ],
          },
        ],
        solution: 'Karbohydrater er den foretrukne energikilden ved moderat til høy intensitet fordi de kan brytes ned raskt nok til å møte energibehovet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Når kan dehydrering begynne å påvirke prestasjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ved bare 2% væsketap',
            multipleChoiceOptions: [
              'Ved bare 2% væsketap',
              'Ved 10% væsketap',
              'Dehydrering påvirker ikke prestasjon',
              'Først ved besvimelse',
            ],
          },
        ],
        solution: 'Allerede ved 2% dehydrering (væsketap) kan prestasjon, konsentrasjon og temperaturregulering påvirkes negativt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er RED-S?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar RED-S.',
            solution: 'Relativ energimangel i idrett - kronisk underskudd på energi som påvirker helse og prestasjon',
            multipleChoiceOptions: [
              'Relativ energimangel i idrett - kronisk underskudd på energi som påvirker helse og prestasjon',
              'En type protein',
              'Et treningsprogram',
              'En vitamin',
            ],
          },
        ],
        solution: 'RED-S (Relative Energy Deficiency in Sport) oppstår når energiinntaket ikke dekker behovet over tid, og kan føre til hormonforstyrrelser, svekket immunforsvar og økt skaderisiko.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'trening-1-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg ernæring for en dag med hard utholdenhetstrening (2 timer). Inkluder frokost, lunsj, middag, mellommåltider og væskeinntak.',
        solution: 'Eksempel: Frokost (3t før): Havregrøt med bær og egg (60g karb, 20g protein). 1t før: Banan og vann. Under trening: Sportsdrikke 500ml + vann. Etter: Sjokolademelk 500ml. Lunsj: Pasta med kylling og grønnsaker (80g karb, 30g protein). Mellommåltid: Yoghurt med nøtter. Middag: Laks, poteter, grønnsaker (60g karb, 35g protein). Total væske: 3-4 liter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Treningsplanlegging
// ============================================================================

export const CHAPTER_TRENING_1_8: TextbookChapter = {
  id: 'trening-1-8',
  courseId: 'trening-1',
  chapterNumber: '8',
  title: 'Treningsplanlegging',
  description: 'Lær å planlegge og strukturere trening for å nå dine mål.',
  estimatedMinutes: 65,
  competenceGoals: [
    'kunne sette SMART-mål for trening',
    'forstå prinsipper for periodisering og progresjon',
    'kunne lage treningsplaner for ulike mål og nivåer',
  ],
  content: [
    {
      id: 'trening-1-8-intro',
      type: 'text',
      content: `God planlegging er nøkkelen til effektiv trening. Ved å strukturere treningen systematisk kan du optimalisere fremgangen, unngå platåer og redusere risikoen for skader og overtrenning. I dette kapittelet lærer du å lage treningsplaner.`,
    },
    {
      id: 'trening-1-8-text-1',
      type: 'text',
      title: 'SMART-mål',
      content: `**Målsetting er grunnlaget for god planlegging:**

**S - Spesifikt:**
- Konkret og tydelig mål
- Ikke "bli sterkere", men "øke knebøy med 10 kg"

**M - Målbart:**
- Kan kvantifiseres og måles
- Klare kriterier for suksess

**A - Oppnåelig (Achievable):**
- Realistisk ut fra forutsetninger
- Utfordrende, men mulig

**R - Relevant:**
- Passer til dine behov og interesser
- Motiverende og meningsfullt

**T - Tidsbestemt:**
- Klar tidsfrist
- Delmål underveis

**Eksempel:**
"Jeg skal løpe 5 km på under 25 minutter innen 3 måneder ved å trene 3 ganger per uke."`,
    },
    {
      id: 'trening-1-8-def-1',
      type: 'definition',
      title: 'Periodisering',
      content: `Periodisering er systematisk planlegging av trening der variabler som volum, intensitet og type trening varieres over tid for å optimalisere tilpasning og prestasjon.`,
    },
    {
      id: 'trening-1-8-text-2',
      type: 'text',
      title: 'Tidsperspektiver i periodisering',
      content: `**Makrosyklus (6-12 måneder):**
- Hele sesong eller treningsår
- Overordnede mål og faser
- Konkurransesesong vs. forberedelse

**Mesosyklus (3-6 uker):**
- Treningsblokker med spesifikt fokus
- Grunnfase, oppbyggingsfase, toppfase
- Evaluering og justering

**Mikrosyklus (1 uke):**
- Ukentlig treningsplan
- Balanse mellom belastning og hvile
- Praktisk gjennomføring

**Treningsøkt:**
- Den enkelte treningen
- Oppvarming, hoveddel, avslutning
- Spesifikke mål for økten`,
    },
    {
      id: 'trening-1-8-text-3',
      type: 'text',
      title: 'Periodiseringsmodeller',
      content: `**Lineær periodisering:**
- Gradvis økning i intensitet
- Gradvis reduksjon i volum
- Passer for nybegynnere

**Blokkperiodisering:**
- Konsentrerte treningsblokker
- Fokus på én egenskap om gangen
- Effektivt for erfarne

**Bølgeperiodisering:**
- Variasjon innen uke eller dag
- Veksler mellom tung/lett
- God for restitusjon

**Omvendt periodisering:**
- Starter med høy intensitet
- Øker volum over tid
- Brukes i enkelte idretter`,
    },
    {
      id: 'trening-1-8-text-4',
      type: 'text',
      title: 'Progresjon',
      content: `**Progresjonsprinsipper:**

**For nybegynnere:**
- Lineær progresjon fungerer godt
- Øk vekt hver uke/økt
- 2-5% økning er vanlig
- Fokus på teknikk først

**For viderekomne:**
- Langsommere progresjon
- Periodisert belastning
- Deload-uker nødvendig
- Variert stimulus

**Progressjonsvariabler:**
- Øk vekt
- Øk repetisjoner
- Øk antall sett
- Reduser pausetid
- Øk treningsfrekvens
- Øk bevegelsesutslag`,
    },
    {
      id: 'trening-1-8-text-5',
      type: 'text',
      title: 'Praktisk planlegging',
      content: `**Steg for å lage en treningsplan:**

1. **Kartlegg utgangspunkt:**
   - Nåværende form og erfaring
   - Tilgjengelig tid og utstyr
   - Eventuelle begrensninger

2. **Sett mål:**
   - Bruk SMART-prinsippet
   - Langsiktige og kortsiktige mål

3. **Velg treningsformer:**
   - Tilpasset målene
   - Aktiviteter du liker

4. **Bestem struktur:**
   - Antall økter per uke
   - Fordeling av treningsformer
   - Hvile- og restitusjondager

5. **Detaljplanlegg:**
   - Øvelser, sett, repetisjoner
   - Intensitet og progresjon
   - Oppvarming og nedtrapping

6. **Evaluer og juster:**
   - Følg med på fremgang
   - Tilpass ved behov`,
    },
    {
      id: 'trening-1-8-note-1',
      type: 'note',
      title: 'Fleksibilitet i planen',
      content: `En god treningsplan bør være fleksibel. Livet kommer i veien, dagsformen varierer, og kroppen trenger ulik restitusjon. Vær forberedt på å justere planen etter behov uten å gi opp de overordnede målene.`,
    },
    {
      id: 'trening-1-8-tip-1',
      type: 'tip',
      title: 'Treningsdagbok',
      content: `Før treningsdagbok for å spore fremgang, identifisere mønstre og holde motivasjonen oppe. Noter øvelser, vekt, repetisjoner, opplevd anstrengelse, søvn og hvordan du føler deg.`,
    },
    {
      id: 'trening-1-8-text-6',
      type: 'text',
      title: 'Eksempel på ukesplan',
      content: `**Eksempel: Nybegynner kombinasjonsprogram (3 økter)**

**Mandag - Styrke helkropp:**
- Knebøy 3x10
- Benkpress 3x10
- Roing 3x10
- Skulderpress 3x10
- Planke 3x30 sek

**Onsdag - Utholdenhet:**
- Oppvarming 10 min
- Intervaller 5x3 min (sone 3-4)
- Nedjogg 10 min

**Fredag - Styrke + bevegelighet:**
- Markløft 3x8
- Chin-ups (eller nedtrekk) 3x10
- Utfall 3x10
- Push-ups 3x10-15
- Tøying 15 min

**Restitusjon:**
- Tirsdag, torsdag, lørdag: Lett aktivitet eller hvile
- Søndag: Fri eller rolig gåtur`,
    },
    {
      id: 'trening-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står SMART for i målsetting?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Spesifikt, Målbart, Oppnåelig, Relevant, Tidsbestemt',
            multipleChoiceOptions: [
              'Spesifikt, Målbart, Oppnåelig, Relevant, Tidsbestemt',
              'Styrke, Muskler, Aerob, Restitusjon, Trening',
              'Start, Midten, Avslutning, Resultat, Test',
              'Det har ingen spesiell betydning',
            ],
          },
        ],
        solution: 'SMART-mål sikrer at målene er konkrete, kan måles, er realistiske, relevante for deg, og har en tidsfrist.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en mesosyklus?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'En treningsblokk på 3-6 uker med spesifikt fokus',
            multipleChoiceOptions: [
              'En treningsblokk på 3-6 uker med spesifikt fokus',
              'Ett år med trening',
              'En enkelt treningsøkt',
              'En hviledag',
            ],
          },
        ],
        solution: 'En mesosyklus er typisk 3-6 uker og representerer en treningsblokk med et spesifikt fokus, som grunnfase, styrkebygging eller toppform.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er lineær periodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv modellen.',
            solution: 'Gradvis økning i intensitet og reduksjon i volum over tid',
            multipleChoiceOptions: [
              'Gradvis økning i intensitet og reduksjon i volum over tid',
              'Samme trening hele tiden',
              'Bare høy intensitet',
              'Variasjon hver dag',
            ],
          },
        ],
        solution: 'Lineær periodisering innebærer systematisk økning av intensitet mens volum reduseres, typisk brukt av nybegynnere for å bygge styrke gradvis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er deload-uker viktige?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnen.',
            solution: 'Gir kroppen tid til full restitusjon og tilpasning',
            multipleChoiceOptions: [
              'Gir kroppen tid til full restitusjon og tilpasning',
              'De er ikke viktige',
              'For å bli svakere',
              'Bare for profesjonelle',
            ],
          },
        ],
        solution: 'Deload-uker med redusert belastning lar kroppen restituere fullt, tilpasse seg treningsstimuli og reduserer risiko for overtrenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-1-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva bør du gjøre først når du lager en treningsplan?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg første steg.',
            solution: 'Kartlegge utgangspunkt: nåværende form, tid, utstyr og begrensninger',
            multipleChoiceOptions: [
              'Kartlegge utgangspunkt: nåværende form, tid, utstyr og begrensninger',
              'Velge de tyngste øvelsene',
              'Kjøpe nytt utstyr',
              'Sette urealistiske mål',
            ],
          },
        ],
        solution: 'Før du planlegger trening må du vite hvor du starter fra - din nåværende form, tilgjengelig tid, utstyr og eventuelle begrensninger påvirker hva som er mulig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-1-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'trening-1-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en 4-ukers treningsplan for en nybegynner som ønsker å forbedre både styrke og utholdenhet. Inkluder mål, ukentlige økter og progresjon.',
        solution: 'SMART-mål: Fullføre 12 treningsøkter på 4 uker og føle økt energi. Uke 1-2: 3 økter/uke (2 styrke helkropp, 1 rolig jogg 20-30 min). Styrke: 2x10 reps. Uke 3-4: 4 økter/uke (2 styrke, 2 utholdenhet inkl. intervaller). Styrke: 3x10 reps, øk vekt 2,5 kg på hovedøvelser. Jogg økes til 30-40 min. Deload: Ved behov i uke 4.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const TRENING_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_1_1,
  CHAPTER_TRENING_1_2,
  CHAPTER_TRENING_1_3,
  CHAPTER_TRENING_1_4,
  CHAPTER_TRENING_1_5,
  CHAPTER_TRENING_1_6,
  CHAPTER_TRENING_1_7,
  CHAPTER_TRENING_1_8,
];
