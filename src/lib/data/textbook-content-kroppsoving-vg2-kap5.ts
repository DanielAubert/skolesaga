/**
 * Kroppsøving VG2 - Kapittel 5: Skader og forebygging
 *
 * Dekker LK20-kompetansemål for kroppsøving VG2
 * Kapittel 5: Skader og forebygging (5.1–5.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Vanlige idrettsskader
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_5_1: TextbookChapter = {
  id: 'kroppsoving-vg2-5-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '5.1',
  title: 'Vanlige idrettsskader',
  description: 'Lær om de vanligste skadene som oppstår i idrett og fysisk aktivitet, og forstå forskjellen mellom akutte skader og belastningsskader.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for vanlige idrettsskader og årsaker til at de oppstår',
    'skille mellom akutte skader og belastningsskader',
    'forstå risikofaktorer for skade i ulike idretter',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-5-1-intro',
      type: 'text',
      content: `Idrettsskader er en naturlig del av fysisk aktivitet, men med kunnskap kan mange av dem forebygges. I dette kapittelet lærer du om de vanligste skadetypene, hvorfor de oppstår, og hvilke faktorer som øker risikoen.`,
    },
    {
      id: 'kroppsoving-vg2-5-1-def-1',
      type: 'definition',
      title: 'Akutt skade',
      content: `En akutt skade oppstår plutselig som følge av en enkelt hendelse, for eksempel et fall, en vridning eller en kollisjon. Eksempler er ankelforstuing, korsbåndsskade og brudd.`,
    },
    {
      id: 'kroppsoving-vg2-5-1-def-2',
      type: 'definition',
      title: 'Belastningsskade (overuse)',
      content: `En belastningsskade utvikler seg gradvis over tid på grunn av gjentatt belastning uten tilstrekkelig restitusjon. Eksempler er beinhinnebetennelse, senebetennelse og stressfraktur.`,
    },
    {
      id: 'kroppsoving-vg2-5-1-text-1',
      type: 'text',
      content: `**Vanlige akutte skader i idrett**

- **Forstuinger**: Strekk eller ruptur av leddbånd (vanligst i ankel og kne)
- **Forstrekninger**: Strekk eller delvis ruptur av muskler eller sener
- **Brudd**: Knokkelbrudd etter fall eller kraftig slag
- **Hjernerystelse**: Mild traumatisk hodeskade, vanlig i kontaktidretter
- **Luksasjon**: Ledd som går ut av stilling, for eksempel skulder`,
    },
    {
      id: 'kroppsoving-vg2-5-1-text-2',
      type: 'text',
      content: `**Vanlige belastningsskader**

- **Beinhinnebetennelse**: Smerte langs skinnbenet, vanlig hos løpere
- **Tennisalbue/golfalbue**: Senebetennelse i albueområdet
- **Jumpers knee**: Senebetennelse i kneskålen, vanlig i hoppeidretter
- **Akillestendinopati**: Overbelastning av akillessenen
- **Stressfraktur**: Mikroskopiske brudd i knokkel ved gjentatt belastning`,
    },
    {
      id: 'kroppsoving-vg2-5-1-example-1',
      type: 'example',
      title: 'Akutt vs. belastningsskade',
      problem: 'En fotballspiller vrir ankelen under en takling. En annen spiller får gradvis økende knesmerter etter flere uker med intensiv trening. Klassifiser begge skadene.',
      solution: 'Ankelvridningen er en **akutt skade** – den oppsto plutselig ved en enkelt hendelse. Knesmerter som utvikler seg over tid er en **belastningsskade** – den skyldes gjentatt belastning uten tilstrekkelig restitusjon.',
    },
    {
      id: 'kroppsoving-vg2-5-1-text-3',
      type: 'text',
      content: `**Risikofaktorer for idrettsskader**

**Indre faktorer**: Tidligere skader, svak muskulatur, dårlig bevegelighet, alder, kjønn og anatomiske forhold.

**Ytre faktorer**: Underlag, utstyr, vær, treningsbelastning, teknikk og regelbrudd. God oppvarming, riktig utstyr og gradvis opptrapping av belastning reduserer risikoen betydelig.`,
    },
    {
      id: 'kroppsoving-vg2-5-1-tip-1',
      type: 'tip',
      title: 'Tidligere skade er største risikofaktor',
      content: `Den viktigste risikofaktoren for en ny skade er en tidligere skade i samme område. Fullstendig rehabilitering etter skade er derfor avgjørende for å unngå tilbakefall.`,
    },
    // Oppgaver 1-3: flervalg
    {
      id: 'kroppsoving-vg2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner en akutt skade?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av en akutt skade.',
            solution: 'En skade som oppstår plutselig ved en enkelt hendelse',
            multipleChoiceOptions: [
              'En skade som oppstår plutselig ved en enkelt hendelse',
              'En skade som utvikler seg gradvis over flere uker',
              'En skade som bare skjer under styrketrening',
              'En skade som alltid krever operasjon',
            ],
          },
        ],
        solution: 'Akutte skader oppstår plutselig, for eksempel ved fall, vridning eller kollisjon. De skiller seg fra belastningsskader som utvikler seg over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken av disse er en typisk belastningsskade?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig eksempel på en belastningsskade.',
            solution: 'Beinhinnebetennelse hos en løper',
            multipleChoiceOptions: [
              'Beinhinnebetennelse hos en løper',
              'Brukket arm etter fall',
              'Hjernerystelse i fotball',
              'Ankelstukning på glatt underlag',
            ],
          },
        ],
        solution: 'Beinhinnebetennelse er en klassisk belastningsskade som utvikler seg gradvis ved gjentatt løpebelastning uten nok restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er den viktigste risikofaktoren for idrettsskader?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste risikofaktoren.',
            solution: 'Tidligere skade i samme område',
            multipleChoiceOptions: [
              'Tidligere skade i samme område',
              'Alder over 30 år',
              'Å trene utendørs',
              'Å spise for lite karbohydrater',
            ],
          },
        ],
        solution: 'Forskning viser at den største risikofaktoren for en ny skade er en tidligere skade i samme område, spesielt hvis rehabiliteringen var ufullstendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Oppgaver 4-6: åpne
    {
      id: 'kroppsoving-vg2-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom akutte skader og belastningsskader, og gi to eksempler på hver type.',
        solution: 'Akutte skader oppstår plutselig (f.eks. ankelforstuing, korsbåndsskade). Belastningsskader utvikler seg gradvis over tid (f.eks. beinhinnebetennelse, akillestendinopati). Akutte skyldes enkelt hendelse, belastningsskader skyldes gjentatt overbelastning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en idrett du driver med eller kjenner godt. Beskriv minst tre vanlige skader i denne idretten og forklar hvorfor nettopp disse skadene er typiske.',
        solution: 'Svar varierer. Eksempel for fotball: Ankelforstuing (raske vendinger), korsbåndsskade (vridning i kne), lyskestrekk (raske spark). Skadene er typiske pga. idrettens bevegelsesmønster og kontakt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvordan indre og ytre risikofaktorer samvirker for å øke skaderisikoen. Bruk et konkret eksempel.',
        solution: 'Eksempel: En utøver med svak kjernemuskulatur (indre faktor) som trener på hardt underlag (ytre faktor) og øker treningsmengden for raskt (ytre faktor), har økt risiko for belastningsskade som beinhinnebetennelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Førstehjelp og akutt skadebehandling
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_5_2: TextbookChapter = {
  id: 'kroppsoving-vg2-5-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '5.2',
  title: 'Førstehjelp og akutt skadebehandling',
  description: 'Lær hvordan du gir førstehjelp ved idrettsskader og behersker PRICE-prinsippet for akutt skadebehandling.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utføre førstehjelp ved vanlige idrettsskader',
    'anvende PRICE-prinsippet ved akutt skadebehandling',
    'vurdere alvorlighetsgrad av skader og når man skal søke medisinsk hjelp',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-5-2-intro',
      type: 'text',
      content: `Å kunne gi riktig førstehjelp ved idrettsskader er avgjørende for å begrense skadeomfanget og fremme god heling. PRICE-prinsippet er den mest anerkjente metoden for akutt behandling av bløtdelsskader.`,
    },
    {
      id: 'kroppsoving-vg2-5-2-def-1',
      type: 'definition',
      title: 'PRICE-prinsippet',
      content: `PRICE står for Protection (beskyttelse), Rest (hvile), Ice (is), Compression (kompresjon) og Elevation (elevasjon). Dette er retningslinjen for akutt behandling av bløtdelsskader de første 48–72 timene.`,
    },
    {
      id: 'kroppsoving-vg2-5-2-text-1',
      type: 'text',
      content: `**PRICE-prinsippet i praksis**

- **P – Protection**: Beskytt det skadde området mot ytterligere skade. Stopp aktiviteten umiddelbart.
- **R – Rest**: Avlast det skadde området. Unngå belastning de første dagene.
- **I – Ice**: Legg is på skaden i 15–20 minutter med jevne mellomrom. Bruk aldri is direkte på huden.
- **C – Compression**: Legg på en kompresjonsbandasje for å redusere hevelse.
- **E – Elevation**: Hold det skadde området hevet over hjertenivå for å redusere hevelse og blødning.`,
    },
    {
      id: 'kroppsoving-vg2-5-2-def-2',
      type: 'definition',
      title: 'POLICE-prinsippet',
      content: `POLICE er en nyere tilnærming som erstatter hvile med Optimal Loading. Det står for Protection, Optimal Loading, Ice, Compression og Elevation. Forskning viser at kontrollert belastning tidlig i rehabiliteringen kan fremme helingsprosessen.`,
    },
    {
      id: 'kroppsoving-vg2-5-2-text-2',
      type: 'text',
      content: `**Hjerte-lungeredning (HLR)**

Ved hjertestans eller bevisstløshet er rask HLR livsavgjørende. Fremgangsmåten er:

1. Sjekk bevissthet og pust
2. Ring 113
3. Start brystkompresjoner: 30 trykk, dyp 5–6 cm, takt ca. 100–120/min
4. Gi 2 innblåsinger
5. Fortsett 30:2 til ambulansen kommer eller en hjertestarter er tilgjengelig

Bruk hjertestarter (AED) dersom tilgjengelig – den gir instruksjoner.`,
    },
    {
      id: 'kroppsoving-vg2-5-2-example-1',
      type: 'example',
      title: 'Akutt ankelskade på fotballbanen',
      problem: 'En medspiller vrir ankelen og faller. Ankelen hovner raskt opp. Beskriv hva du gjør steg for steg.',
      solution: '1) **Protection**: Hjelp spilleren av banen og hindre videre belastning. 2) **Rest**: La spilleren sitte/ligge rolig. 3) **Ice**: Legg is i et håndkle på ankelen i 15–20 min. 4) **Compression**: Legg på en elastisk bandasje. 5) **Elevation**: Legg foten opp på en bag eller benk. Vurder legebesøk ved sterk hevelse eller manglende evne til å belaste.',
    },
    {
      id: 'kroppsoving-vg2-5-2-text-3',
      type: 'text',
      content: `**Når bør du søke medisinsk hjelp?**

Oppsøk lege eller legevakt ved: kraftig hevelse som utvikler seg raskt, manglende evne til å belaste, feilstilling i ledd, nummenhet eller kribling, hørbar knepp ved skadetidspunktet, eller vedvarende smerter etter 48 timer.`,
    },
    {
      id: 'kroppsoving-vg2-5-2-tip-1',
      type: 'tip',
      title: 'Is riktig',
      content: `Legg alltid et tynt lag stoff mellom is og hud for å unngå frostskade. Bruk is i 15–20 minutter, deretter 40–60 minutters pause. Gjenta flere ganger det første døgnet.`,
    },
    // Oppgaver 1-3: flervalg
    {
      id: 'kroppsoving-vg2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står bokstavene i PRICE for?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av PRICE.',
            solution: 'Protection, Rest, Ice, Compression, Elevation',
            multipleChoiceOptions: [
              'Protection, Rest, Ice, Compression, Elevation',
              'Pain, Recovery, Immobilisation, Cold, Exercise',
              'Prevention, Rehabilitation, Injury, Care, Evaluation',
              'Pressure, Rest, Intervention, Cooling, Examination',
            ],
          },
        ],
        solution: 'PRICE-prinsippet er en minnehjelp for akutt skadebehandling: Beskyttelse, Hvile, Is, Kompresjon og Elevasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom PRICE og POLICE?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av POLICE-prinsippet.',
            solution: 'Rest er erstattet med Optimal Loading for å fremme heling',
            multipleChoiceOptions: [
              'Rest er erstattet med Optimal Loading for å fremme heling',
              'POLICE inkluderer operasjon som første steg',
              'POLICE brukes bare ved bruddskader',
              'POLICE betyr at man skal kontakte politiet ved skade',
            ],
          },
        ],
        solution: 'POLICE-prinsippet erstatter total hvile med optimal belastning. Forskning viser at kontrollert belastning tidlig i rehabiliteringen kan stimulere heling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor mange brystkompresjoner gir du per syklus i HLR?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall brystkompresjoner per syklus.',
            solution: '30 kompresjoner, deretter 2 innblåsinger',
            multipleChoiceOptions: [
              '30 kompresjoner, deretter 2 innblåsinger',
              '15 kompresjoner, deretter 5 innblåsinger',
              '10 kompresjoner, deretter 3 innblåsinger',
              '50 kompresjoner uten innblåsinger',
            ],
          },
        ],
        solution: 'HLR utføres med 30 brystkompresjoner etterfulgt av 2 innblåsinger. Kompresjonsdybde 5–6 cm og frekvens 100–120 per minutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Oppgaver 4-6: åpne
    {
      id: 'kroppsoving-vg2-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv trinn for trinn hvordan du behandler en akutt muskelstrekk i låret ved hjelp av PRICE-prinsippet.',
        solution: 'P: Stopp aktiviteten og beskytt låret mot videre belastning. R: La utøveren hvile. I: Legg is i håndkle på låret i 15–20 min. C: Legg på kompresjonsbandasje. E: Legg benet høyt. Gjenta is-behandling hver time det første døgnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor POLICE-prinsippet i mange tilfeller er bedre enn PRICE. Hvilke fordeler gir optimal belastning sammenlignet med total hvile?',
        solution: 'Optimal belastning stimulerer heling av vev (muskler, sener, leddbånd) ved å fremme blodsirkulasjon og vevstilpasning. Total hvile kan føre til muskelatrofi og stivhet. Kontrollert belastning hjelper kroppen å bygge sterkere vev tilpasset fremtidig bruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du er vitne til at en person kollapser på treningssenteret og slutter å puste. Beskriv nøyaktig hva du gjør, steg for steg.',
        solution: '1) Sjekk bevissthet – rist forsiktig og rop. 2) Sjekk pust – se, lytt, føl i 10 sek. 3) Ring 113 (eller be noen ringe). 4) Start HLR med 30 brystkompresjoner. 5) Gi 2 innblåsinger. 6) Fortsett 30:2. 7) Bruk hjertestarter (AED) om tilgjengelig – følg instruksjonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Forebyggende trening
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_5_3: TextbookChapter = {
  id: 'kroppsoving-vg2-5-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '5.3',
  title: 'Forebyggende trening',
  description: 'Lær om treningsmetoder og programmer som forebygger idrettsskader, inkludert FIFA 11+ og funksjonell trening.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og gjennomføre forebyggende treningsprogrammer',
    'forstå betydningen av oppvarming og kjernetrening for skadeforebygging',
    'kjenne til forskningsbaserte forebyggingsprogrammer som FIFA 11+',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-5-3-intro',
      type: 'text',
      content: `Forebyggende trening handler om å redusere risikoen for skader gjennom målrettet trening. Forskning viser at spesifikke oppvarmingsprogrammer og styrkeøvelser kan redusere skaderisikoen med opptil 50 %.`,
    },
    {
      id: 'kroppsoving-vg2-5-3-def-1',
      type: 'definition',
      title: 'FIFA 11+',
      content: `FIFA 11+ er et forskningsbasert oppvarmingsprogram utviklet av FIFA Medical Assessment and Research Centre (F-MARC). Programmet inneholder 15 øvelser som gjøres i tre deler: løpeøvelser, styrke/balanse/plyometri, og løpeøvelser med retningsendringer. Det er vist å redusere skader med 30–50 %.`,
    },
    {
      id: 'kroppsoving-vg2-5-3-def-2',
      type: 'definition',
      title: 'Nevromuskulær trening',
      content: `Nevromuskulær trening fokuserer på samspillet mellom nerver og muskler. Det inkluderer balanseøvelser, koordinasjon, reaksjonsøvelser og stabilitetstrening som forbedrer kroppskontroll og reduserer skaderisiko.`,
    },
    {
      id: 'kroppsoving-vg2-5-3-text-1',
      type: 'text',
      content: `**De tre delene i FIFA 11+**

**Del 1 – Løpeøvelser (8 min)**: Rolig jogging med kontrollerte bevegelser, sideløping, løp med partnerøvelser.

**Del 2 – Styrke, balanse og plyometri (10 min)**: Planke, sideliggende planke, hamstringsøvelser (Nordic hamstring), ettbeins balanse, knebøy og hopp.

**Del 3 – Løp med retningsendring (2 min)**: Sprint, retningsendringer, brå stopp og akselerasjon.`,
    },
    {
      id: 'kroppsoving-vg2-5-3-example-1',
      type: 'example',
      title: 'Nordic hamstring-øvelse',
      problem: 'Hvordan gjennomfører du en Nordic hamstring-øvelse, og hvorfor er den viktig for skadeforebygging?',
      solution: 'Knestående posisjon med partner som holder anklene. Senk overkroppen langsomt mot gulvet ved å bremse med bakside lår. Øvelsen styrker hamstringsmuskulaturen eksentrisk, noe som er vist å redusere risikoen for hamstringsskader med opptil 50 %. Eksentrisk styrke er viktig fordi muskelen ofte skades under bremsebevegelser.',
    },
    {
      id: 'kroppsoving-vg2-5-3-text-2',
      type: 'text',
      content: `**Kjernetrening og stabilitet**

Kjernemuskulaturen (mage, rygg, hofte, bekkenbunn) stabiliserer kroppen under all bevegelse. Svak kjernemuskulatur fører til dårlig kroppskontroll og økt skaderisiko. Viktige øvelser inkluderer planke, sideliggende planke, dead bug, pallof press og hofteløft.`,
    },
    {
      id: 'kroppsoving-vg2-5-3-text-3',
      type: 'text',
      content: `**Oppvarmingens rolle**

En god oppvarming øker kroppstemperaturen, forbedrer blodgjennomstrømningen til musklene og forbereder nervesystemet. Oppvarmingen bør vare minst 10–15 minutter og gradvis øke i intensitet. Idretts-spesifikke bevegelser bør inkluderes for å forberede kroppen på den kommende belastningen.`,
    },
    {
      id: 'kroppsoving-vg2-5-3-tip-1',
      type: 'tip',
      title: 'Regelmessighet er nøkkelen',
      content: `Forebyggende trening virker bare hvis den gjøres jevnlig. FIFA 11+ bør gjennomføres minst to ganger i uken for å gi skadeforebyggende effekt. Sett av tid til det som en fast del av oppvarmingen.`,
    },
    // Oppgaver 1-3: flervalg
    {
      id: 'kroppsoving-vg2-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er FIFA 11+?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av FIFA 11+.',
            solution: 'Et forskningsbasert oppvarmingsprogram som reduserer skaderisiko med 30–50 %',
            multipleChoiceOptions: [
              'Et forskningsbasert oppvarmingsprogram som reduserer skaderisiko med 30–50 %',
              'En fotballturneringsformat med 11 lag',
              'En styrketreningsmetode for fotballspillere',
              'Et kostholdsopplegg for idrettsutøvere',
            ],
          },
        ],
        solution: 'FIFA 11+ er utviklet av FIFA og inneholder 15 øvelser fordelt på tre deler: løp, styrke/balanse/plyometri og løp med retningsendring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er nevromuskulær trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Trening som fokuserer på samspillet mellom nerver og muskler for bedre kroppskontroll',
            multipleChoiceOptions: [
              'Trening som fokuserer på samspillet mellom nerver og muskler for bedre kroppskontroll',
              'Trening som bare styrker nervene',
              'En type utholdenhetstrening',
              'Trening som kun gjøres etter skade',
            ],
          },
        ],
        solution: 'Nevromuskulær trening omfatter balanse, koordinasjon og stabilitetstrening som forbedrer bevegelseskvalitet og reduserer skaderisiko.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er Nordic hamstring-øvelsen effektiv for skadeforebygging?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Den styrker hamstrings eksentrisk, noe som beskytter mot strekk under bremsebevegelser',
            multipleChoiceOptions: [
              'Den styrker hamstrings eksentrisk, noe som beskytter mot strekk under bremsebevegelser',
              'Den øker leddbevegeligheten i kneet',
              'Den forbedrer oksygenopptaket',
              'Den trener bare den konsentriske fasen av muskelen',
            ],
          },
        ],
        solution: 'Hamstringsskader skjer oftest under eksentrisk belastning (bremsing). Nordic hamstring trener nettopp denne fasen og har vist å halvere risikoen for hamstringsskader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Oppgaver 4-6: åpne
    {
      id: 'kroppsoving-vg2-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag et forebyggende treningsprogram med 5 øvelser som egner seg som oppvarming. Beskriv hver øvelse og forklar hva den forebygger.',
        solution: 'Eksempel: 1) Planke – kjernemuskulatur/ryggskader, 2) Ettbeins knebøy – knestabilitet, 3) Nordic hamstring – hamstringsskader, 4) Sideliggende planke – hoftestabilitet, 5) Ettbeins balanse på ustabilt underlag – ankelvridninger. Programmet bør ta 10–15 min.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor kjernemuskulatur er viktig for å forebygge skader, og gi tre eksempler på øvelser som styrker den.',
        solution: 'Kjernemuskulaturen stabiliserer ryggrad og bekken under all bevegelse. Svak kjerne gir dårlig kroppskontroll og kan føre til kompenserende bevegelser som overbelaster andre strukturer. Øvelser: planke, dead bug og pallof press.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvorfor mange idrettslag ikke gjennomfører forebyggende trening selv om forskningen viser at det virker. Hva kan gjøres for å endre dette?',
        solution: 'Mulige årsaker: Manglende kunnskap hos trenere, prioritering av teknisk/taktisk trening, tidspress, og at forebygging ikke gir synlig effekt med en gang. Tiltak: Utdanne trenere, integrere forebygging i oppvarmingen (som FIFA 11+), og synliggjøre forskning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Rehabilitering og tilbake til aktivitet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_5_4: TextbookChapter = {
  id: 'kroppsoving-vg2-5-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '5.4',
  title: 'Rehabilitering og tilbake til aktivitet',
  description: 'Lær om prinsipper for rehabilitering etter skade og hvordan man trygt kan vende tilbake til idrett.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå fasene i rehabilitering etter idrettsskade',
    'anvende prinsipper for gradvis tilbakegang til aktivitet',
    'vurdere kriterier for return to play',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-5-4-intro',
      type: 'text',
      content: `Rehabilitering etter skade er en systematisk prosess som skal gjenopprette funksjon og forberede utøveren på å vende tilbake til idrett. En grundig rehabilitering reduserer risikoen for tilbakefall og ny skade.`,
    },
    {
      id: 'kroppsoving-vg2-5-4-def-1',
      type: 'definition',
      title: 'Rehabilitering',
      content: `Rehabilitering er en målrettet prosess for å gjenopprette funksjon, styrke og bevegelighet etter skade eller sykdom. Målet er å bringe utøveren tilbake til fullt aktivitetsnivå på en trygg og effektiv måte.`,
    },
    {
      id: 'kroppsoving-vg2-5-4-text-1',
      type: 'text',
      content: `**Fasene i rehabilitering**

**Fase 1 – Akuttfasen (0–72 timer)**: Fokus på å begrense skadeomfang med PRICE/POLICE. Redusere hevelse og smerte.

**Fase 2 – Subakutt fase (3 dager – 3 uker)**: Gjenopprette bevegelighet og starte forsiktig belastning. Lett styrketrening og balanseøvelser.

**Fase 3 – Oppbyggingsfasen (3 uker – måneder)**: Progressiv styrketrening, funksjonsøvelser og idretts-spesifikk trening.

**Fase 4 – Return to play**: Gradvis tilbakeføring til full idrettsaktivitet med testing av funksjon og selvtillit.`,
    },
    {
      id: 'kroppsoving-vg2-5-4-def-2',
      type: 'definition',
      title: 'Return to play (RTP)',
      content: `Return to play er prosessen der en utøver vurderes som klar for å delta fullt i idrett etter skade. Det innebærer tre steg: return to participation (deltagelse i trening), return to sport (full trening) og return to performance (konkurransenivå).`,
    },
    {
      id: 'kroppsoving-vg2-5-4-example-1',
      type: 'example',
      title: 'Rehabilitering etter ankelforstuing',
      problem: 'En håndballspiller får en grad 2 ankelforstuing. Beskriv hovedtrekkene i rehabiliteringen fra skade til return to play.',
      solution: '**Fase 1 (dag 1–3)**: PRICE, krykkeavlastning. **Fase 2 (uke 1–3)**: Bevegelighetsøvelser, balanse på ett ben, lett styrke. **Fase 3 (uke 3–8)**: Progressiv styrketrening, løp, sidelengs bevegelser, hopp. **Fase 4**: Fullt treningsdeltagelse, kamplike situasjoner, testing av funksjon og smerte. Totalt ca. 6–8 uker.',
    },
    {
      id: 'kroppsoving-vg2-5-4-text-2',
      type: 'text',
      content: `**Kriterier for return to play**

Utøveren bør oppfylle disse kriteriene før full retur:
- Smertefri ved all aktivitet
- Lik styrke og bevegelighet som frisk side (minst 90 %)
- Gjennomført idretts-spesifikk trening uten problemer
- Psykologisk klar og trygg på å belaste
- Godkjent av medisinsk personell der det er relevant`,
    },
    {
      id: 'kroppsoving-vg2-5-4-text-3',
      type: 'text',
      content: `**Psykologiske aspekter ved rehabilitering**

Skade kan gi angst, frustrasjon og frykt for ny skade. Mange utøvere opplever redsel for å gjenta skadesituasjonen. Psykologisk trygghet er like viktig som fysisk funksjon for en vellykket retur til idrett. Målsetting, visualisering og gradvis eksponering kan hjelpe.`,
    },
    {
      id: 'kroppsoving-vg2-5-4-tip-1',
      type: 'tip',
      title: 'Ikke forhast deg',
      content: `Det er fristende å vende tilbake for raskt, men for tidlig retur er den vanligste årsaken til tilbakefall. Følg rehabiliteringsprogrammet fullt ut og bruk objektive tester for å vurdere om du er klar.`,
    },
    // Oppgaver 1-3: flervalg
    {
      id: 'kroppsoving-vg2-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken fase i rehabiliteringen handler om å begrense skadeomfanget?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig fase.',
            solution: 'Akuttfasen (0–72 timer)',
            multipleChoiceOptions: [
              'Akuttfasen (0–72 timer)',
              'Oppbyggingsfasen',
              'Return to play',
              'Den subakutte fasen',
            ],
          },
        ],
        solution: 'Akuttfasen handler om å begrense hevelse, blødning og smerte med PRICE/POLICE-prinsippet de første 48–72 timene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva innebærer return to play (RTP)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av RTP.',
            solution: 'En gradvis prosess fra trening til konkurranse, med testing av funksjon og trygghet',
            multipleChoiceOptions: [
              'En gradvis prosess fra trening til konkurranse, med testing av funksjon og trygghet',
              'At man kan spille kamp rett etter skaden er smertefri',
              'At legen bestemmer når man kan spille igjen',
              'At man trener dobbelt så mye som vanlig',
            ],
          },
        ],
        solution: 'RTP er en trinnvis prosess: return to participation, return to sport og return to performance. Objektive tester og subjektiv trygghet er begge viktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er et viktig psykologisk aspekt ved rehabilitering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Frykt for ny skade kan hindre full retur selv om kroppen er klar',
            multipleChoiceOptions: [
              'Frykt for ny skade kan hindre full retur selv om kroppen er klar',
              'Psykologiske faktorer har ingen betydning for rehabilitering',
              'Man bør unngå å tenke på skaden',
              'Bare fysisk styrke avgjør om man er klar',
            ],
          },
        ],
        solution: 'Psykologisk trygghet er like viktig som fysisk funksjon. Mange utøvere klarer ikke å prestere på toppnivå fordi de frykter ny skade, selv om kroppen er klar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Oppgaver 4-6: åpne
    {
      id: 'kroppsoving-vg2-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv de fire fasene i rehabilitering etter en idrettsskade med egne ord. Hva er hovedmålet i hver fase?',
        solution: 'Fase 1: Begrense skadeomfang (PRICE/POLICE). Fase 2: Gjenopprette bevegelighet og starte forsiktig belastning. Fase 3: Bygge opp styrke og funksjon med progressiv trening. Fase 4: Gradvis tilbakeføring til full idrett med testing og psykologisk trygghet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en liste med 5 kriterier du mener er viktige for å vurdere om en utøver er klar for return to play. Begrunn valgene dine.',
        solution: 'Eksempel: 1) Smertefri i all aktivitet – smerte indikerer ufullstendig heling. 2) Lik styrke som frisk side – asymmetri øker risikoen. 3) Fullført idretts-spesifikk trening – simulerer krav. 4) Psykologisk trygghet – frykt hemmer prestasjon. 5) Bestått funksjonelle tester – hopp, retningsendring, akselerasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter: Hvorfor er det viktig at rehabilitering ikke bare fokuserer på det fysiske, men også det psykologiske? Bruk eksempler fra idretten.',
        solution: 'Mange utøvere opplever frykt, frustrasjon og tap av identitet etter skade. Eksempel: En skiløper med korsbåndsskade kan ha full styrke, men unngår situasjoner som ligner skadesituasjonen. Uten psykologisk rehabilitering vil prestasjonsnivået ikke nås, og risikoen for ny skade kan øke pga. forsiktige/kompenserende bevegelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.5: Ergonomi og kroppsholdning
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_5_5: TextbookChapter = {
  id: 'kroppsoving-vg2-5-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '5.5',
  title: 'Ergonomi og kroppsholdning',
  description: 'Lær om ergonomi, god kroppsholdning i hverdagen, og hvordan du kan forebygge belastningslidelser gjennom riktig arbeidsstilling og bevegelse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå ergonomiske prinsipper for god kroppsholdning',
    'vurdere egen arbeidsstilling og gjøre tilpasninger',
    'planlegge øvelser som fremmer god holdning og forebygger belastningslidelser',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-5-5-intro',
      type: 'text',
      content: `Mange unge bruker mye tid foran skjerm, noe som kan føre til dårlig holdning og belastningslidelser. Ergonomi handler om å tilpasse omgivelsene til kroppen for å forebygge plager og fremme god helse.`,
    },
    {
      id: 'kroppsoving-vg2-5-5-def-1',
      type: 'definition',
      title: 'Ergonomi',
      content: `Ergonomi er læren om tilpasning mellom mennesket og arbeidsmiljøet. Målet er å redusere belastning, forebygge skader og plager, og fremme trivsel og effektivitet gjennom riktig utforming av arbeidsplassen og arbeidsmåter.`,
    },
    {
      id: 'kroppsoving-vg2-5-5-def-2',
      type: 'definition',
      title: 'Statisk belastning',
      content: `Statisk belastning oppstår når muskler holdes i en fast posisjon over lang tid uten bevegelse. Dette reduserer blodtilførselen og kan føre til muskelspenninger, smerter og belastningslidelser i nakke, skuldre og rygg.`,
    },
    {
      id: 'kroppsoving-vg2-5-5-text-1',
      type: 'text',
      content: `**God arbeidsstilling ved skjermarbeid**

- **Stol**: Setet justert slik at føttene hviler flatt på gulvet og knærne er i ca. 90 grader.
- **Ryggstøtte**: Korsryggen skal ha støtte. Len deg tilbake med avslappede skuldre.
- **Skjerm**: Toppen av skjermen i øyehøyde, ca. en armlengdes avstand.
- **Tastatur og mus**: Underarmene skal hvile avslappet, albuene i ca. 90 grader.
- **Pauser**: Ta mikropause hvert 20.–30. minutt og lengre pause minst hver time.`,
    },
    {
      id: 'kroppsoving-vg2-5-5-example-1',
      type: 'example',
      title: 'Ergonomisk vurdering av en skolepult',
      problem: 'Vurder en typisk skolepult ut fra ergonomiske prinsipper. Hva er bra og hva kan forbedres?',
      solution: 'Typiske problemer: Stolen kan ikke justeres i høyde, bordet er ofte for lavt eller for høyt, det mangler ryggstøtte for korsryggen, og skjermen (om bærbar PC) er for lav. **Forbedringer**: Bruke en ekstern skjerm eller laptopstativ, sitte på en pute for riktig høyde, ta regelmessige pauser for å bevege seg.',
    },
    {
      id: 'kroppsoving-vg2-5-5-text-2',
      type: 'text',
      content: `**Vanlige holdningsrelaterte plager**

**Nakkesmerter**: Ofte forårsaket av fremskutt hode (text neck) fra mobilbruk og lavt plassert skjerm.

**Skuldersmerter**: Opphøyde skuldre og fremoverbøyd holdning gir spenninger i trapezius og skuldermuskulatur.

**Korsryggssmerter**: Langvarig sitting uten støtte og svak kjernemuskulatur overbelaster korsryggen. Regelmessig bevegelse og styrketrening er den beste forebyggingen.`,
    },
    {
      id: 'kroppsoving-vg2-5-5-text-3',
      type: 'text',
      content: `**Øvelser for bedre holdning**

Følgende øvelser kan gjøres daglig for å motvirke sittende arbeid:
- **Bryststretch i dørkarm**: Strekk brystmuskulaturen som strammes av fremoverbøyd holdning.
- **Chin tucks**: Trekk haken tilbake for å styrke dype nakkefleksorer og rette opp fremskutt hode.
- **Skulderbladspress**: Klem skulderbladene sammen for å aktivere øvre rygg.
- **Katteøvelse**: Vekselvis bøy og strekk ryggraden på alle fire for å mobilisere ryggen.`,
    },
    {
      id: 'kroppsoving-vg2-5-5-tip-1',
      type: 'tip',
      title: '20-20-20-regelen',
      content: `For å forebygge øyeplager og nakkebelastning ved skjermarbeid: Hvert 20. minutt, se på noe som er minst 20 fot (6 meter) unna, i minst 20 sekunder. Reis deg gjerne opp og strekk deg samtidig.`,
    },
    // Oppgaver 1-3: flervalg
    {
      id: 'kroppsoving-vg2-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er ergonomi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av ergonomi.',
            solution: 'Læren om tilpasning mellom mennesket og arbeidsmiljøet',
            multipleChoiceOptions: [
              'Læren om tilpasning mellom mennesket og arbeidsmiljøet',
              'En type styrketrening',
              'Studiet av kroppens skjelettstruktur',
              'En diett for kontorarbeidere',
            ],
          },
        ],
        solution: 'Ergonomi handler om å tilpasse omgivelser og arbeidsoppgaver til menneskets fysiske og psykiske forutsetninger for å forebygge plager.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er statisk belastning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Muskler holdes i fast posisjon over lang tid uten bevegelse',
            multipleChoiceOptions: [
              'Muskler holdes i fast posisjon over lang tid uten bevegelse',
              'Tung fysisk belastning med mye bevegelse',
              'Belastning som bare skjer under trening',
              'Belastning som kun påvirker bein',
            ],
          },
        ],
        solution: 'Statisk belastning reduserer blodtilførselen til musklene og kan føre til spenninger og smerter, spesielt i nakke, skuldre og rygg ved langvarig sitting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er 20-20-20-regelen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Hvert 20. minutt, se på noe 20 fot unna i 20 sekunder',
            multipleChoiceOptions: [
              'Hvert 20. minutt, se på noe 20 fot unna i 20 sekunder',
              'Trene 20 minutter, 20 ganger i uken, med 20 øvelser',
              'Sitte i 20 minutter, stå i 20 minutter, gå i 20 minutter',
              'Drikke 20 glass vann hver 20. time',
            ],
          },
        ],
        solution: '20-20-20-regelen forebygger øyebelastning og oppfordrer til regelmessige pauser fra skjermarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Oppgaver 4-6: åpne
    {
      id: 'kroppsoving-vg2-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjør en ergonomisk vurdering av din egen arbeidsplass (hjemme eller på skolen). Beskriv hva som er bra og hva du ville forbedret.',
        solution: 'Svar vil variere. Bør inkludere vurdering av stolhøyde, bordflate, skjermposisjon, lysforhold og pauserutiner. Forbedringer kan omfatte justering av stolhøyde, bruk av ekstern skjerm, bedre belysning og faste pauserutiner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag et 5-minutters pauseprogram med øvelser som motvirker dårlig holdning ved skjermarbeid. Beskriv hver øvelse og forklar hva den gjør.',
        solution: 'Eksempel: 1) Chin tucks (10 rep) – retter opp fremskutt hode. 2) Skulderbladspress (10 rep) – aktiverer øvre rygg. 3) Bryststretch i dørkarm (30 sek per side) – åpner opp brystkassen. 4) Stående hoftefleksorbøyning (30 sek per side) – motvirker stram hoftefleksor. 5) Katteøvelse (10 rep) – mobiliserer ryggraden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvordan økt skjermbruk blant unge påvirker kroppsholdning og helse. Hva kan skolen gjøre for å motvirke negative konsekvenser?',
        solution: 'Økt skjermbruk fører til mer stillesitting, fremskutt hode (text neck), spenninger i nakke/skuldre og redusert fysisk aktivitet. Skolen kan: innføre bevegelsespauser, undervise om ergonomi, tilpasse arbeidsplasser bedre, variere undervisningen med aktive læringsformer og oppmuntre til utendørsaktivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const KROPPSOVING_VG2_KAP5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_5_1,
  CHAPTER_KROPPSOVING_VG2_5_2,
  CHAPTER_KROPPSOVING_VG2_5_3,
  CHAPTER_KROPPSOVING_VG2_5_4,
  CHAPTER_KROPPSOVING_VG2_5_5,
];
