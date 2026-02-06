/**
 * Håndverk, design og produktutvikling VG1 - Del 1: Design og visuelt uttrykk
 *
 * Kapitler 1.1-1.7 dekker grunnleggende designprinsipper, form og funksjon,
 * fargelære, komposisjon, skisseteknikk, teknisk tegning og stilhistorie.
 *
 * Følger LK20 læreplan for Håndverk, design og produktutvikling på VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Grunnleggende designprinsipper
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_1_1: TextbookChapter = {
  id: 'handverk-design-vg1-1-1',
  courseId: 'handverk-design-vg1',
  chapterNumber: '1.1',
  title: 'Grunnleggende designprinsipper',
  description: 'Introduksjon til sentrale designprinsipper som balanse, kontrast, rytme og enhet. Elevene lærer hvordan disse prinsippene brukes i utforming av håndverksprodukter. Praktiske øvelser i å analysere design i hverdagsgjenstander.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke komposisjonsprinsipper i to- og tredimensjonal form',
  ],
  content: [
    {
      id: 'handverk-design-vg1-1-1-intro',
      type: 'text',
      content: `Designprinsipper er verktøy som hjelper oss å skape produkter som både fungerer godt og ser bra ut. Enten du lager møbler, klær, keramikk eller smykker, gjelder de samme grunnleggende prinsippene. I dette kapittelet lærer du om balanse, kontrast, rytme og enhet - fire prinsipper som er fundamentale i all god design.`,
    },
    {
      id: 'handverk-design-vg1-1-1-def-1',
      type: 'definition',
      title: 'Designprinsipper',
      content: `Designprinsipper er grunnleggende regler og retningslinjer som brukes for å organisere visuelle elementer på en måte som skaper et vellykket og estetisk tiltalende resultat. De hjelper designeren med å ta bevisste valg om form, farge, størrelse og plassering.`,
    },
    {
      id: 'handverk-design-vg1-1-1-text-1',
      type: 'text',
      content: `**Balanse**

Balanse handler om hvordan visuelle elementer fordeles i et design. Et balansert design føles stabilt og behagelig, mens ubalanse kan skape uro eller spenning.

**Symmetrisk balanse**:
- Elementer speiles på hver side av en midtakse
- Skaper formell, rolig og tradisjonell følelse
- Vanlig i klassisk arkitektur og tradisjonelt håndverk
- Eksempel: en vase med like håndtak på begge sider

**Asymmetrisk balanse**:
- Ulike elementer balanserer hverandre uten å være like
- Et stort element kan balanseres av flere små
- Skaper dynamikk og moderne uttrykk
- Eksempel: en skål med håndtak bare på den ene siden, balansert av et mønster på motsatt side

**Radial balanse**:
- Elementer stråler ut fra et sentralt punkt
- Vanlig i dekorative mønstre og rosetter
- Eksempel: en tallerken med dekor som går ut fra midten`,
    },
    {
      id: 'handverk-design-vg1-1-1-def-2',
      type: 'definition',
      title: 'Visuell vekt',
      content: `Visuell vekt er hvor mye oppmerksomhet et element tiltrekker seg i et design. Store elementer, mørke farger, komplekse former og sterke kontraster har høy visuell vekt, mens små elementer, lyse farger og enkle former har lavere visuell vekt.`,
    },
    {
      id: 'handverk-design-vg1-1-1-text-2',
      type: 'text',
      content: `**Kontrast**

Kontrast skaper interesse, spenning og fokus i et design. Uten kontrast blir designet flatt og kjedelig. Med for mye kontrast kan det bli kaotisk.

**Typer kontrast**:
- **Størrelseskontrast**: Store og små elementer sammen
- **Fargekontrast**: Lyse mot mørke, varme mot kalde farger
- **Teksturkontrast**: Glatte og grove overflater
- **Formkontrast**: Organiske og geometriske former
- **Materialkontrast**: Matte og blanke, harde og myke materialer

**Bruk av kontrast**:
- Skape hierarki - det viktigste skal synes best
- Lede blikket til fokuspunkter
- Fremheve detaljer og kvaliteter
- Skape visuell interesse og variasjon`,
    },
    {
      id: 'handverk-design-vg1-1-1-text-3',
      type: 'text',
      content: `**Rytme**

Rytme i design handler om bevegelse og flyt. Det skapes gjennom gjentakelse av elementer og kan lede blikket gjennom et design.

**Typer rytme**:
- **Repetisjon**: Samme element gjentas med jevne mellomrom
- **Alternering**: Veksling mellom to eller flere elementer
- **Progresjon**: Gradvis endring av størrelse, farge eller form
- **Tilfeldig rytme**: Uregelmessig gjentakelse som i naturen

**Enhet**

Enhet betyr at alle elementene i et design hører sammen og danner en helhet. Et design med god enhet føles komplett og gjennomtenkt.

**Hvordan skape enhet**:
- **Repetisjon**: Gjenta former, farger eller teksturer
- **Nærhet**: Plasser relaterte elementer nær hverandre
- **Kontinuitet**: La linjer og former flyte inn i hverandre
- **Konsistens**: Hold deg til en stil gjennom hele produktet`,
    },
    {
      id: 'handverk-design-vg1-1-1-tip-1',
      type: 'tip',
      title: 'Analysere design rundt deg',
      content: `Øv deg på å se designprinsipper i hverdagen. Se på gjenstander i hjemmet, på skolen eller i butikken og still spørsmål: Er det symmetrisk eller asymmetrisk balanse? Hvilke kontraster brukes? Kan du se rytme i mønsteret? Hva skaper enhet i designet?`,
    },
    {
      id: 'handverk-design-vg1-1-1-example-1',
      type: 'example',
      title: 'Designprinsipper i en kaffekopp',
      content: `La oss analysere en enkel kaffekopp:

**Balanse**: Koppen har symmetrisk balanse rundt midtaksen. Håndtaket skaper asymmetri, men balanseres av sin egen visuelle vekt.

**Kontrast**: Hvit keramikk mot mørk kaffe gir fargekontrast. Glatt innside mot matt utside gir teksturkontrast.

**Rytme**: Hvis koppen har et mønster, kan det være striper (repetisjon) eller bølger (progresjon).

**Enhet**: Samme materiale og overflatebehandling gjennom hele koppen skaper enhet. Fargetoner som går igjen binder elementene sammen.`,
    },
    {
      id: 'handverk-design-vg1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner symmetrisk balanse?',
        options: [
          'Elementer er plassert tilfeldig',
          'Elementer speiles på hver side av en midtakse',
          'Elementer stråler ut fra et sentralt punkt',
          'Ulike elementer balanserer hverandre uten å være like',
        ],
        correctAnswer: 1,
        solution: 'Symmetrisk balanse kjennetegnes ved at elementer speiles på hver side av en midtakse, slik at designet er likt på begge sider.',
      },
    },
    {
      id: 'handverk-design-vg1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom de fire hovedtypene kontrast.',
        solution: 'Størrelseskontrast bruker store og små elementer sammen. Fargekontrast bruker lyse mot mørke eller varme mot kalde farger. Teksturkontrast kombinerer glatte og grove overflater. Formkontrast blander organiske (naturlige, avrundede) og geometriske (kantete, matematiske) former.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken type rytme oppstår når du gradvis endrer størrelsen på elementer?',
        options: [
          'Repetisjon',
          'Alternering',
          'Progresjon',
          'Tilfeldig rytme',
        ],
        correctAnswer: 2,
        solution: 'Progresjon er rytme som skapes gjennom gradvis endring av størrelse, farge eller form, for eksempel en rekke sirkler som blir stadig større.',
      },
    },
    {
      id: 'handverk-design-vg1-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg en gjenstand du har i nærheten og analyser den ved hjelp av designprinsippene.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv hvilken type balanse gjenstanden har.',
            solution: 'Analyser om gjenstanden er symmetrisk, asymmetrisk eller har radial balanse. Begrunn svaret.',
          },
          {
            label: 'b',
            task: 'Identifiser minst to typer kontrast i gjenstanden.',
            solution: 'Se etter størrelseskontrast, fargekontrast, teksturkontrast eller formkontrast og beskriv hvor du finner dem.',
          },
          {
            label: 'c',
            task: 'Hvordan skapes enhet i gjenstanden?',
            solution: 'Beskriv hvordan elementer bindes sammen gjennom repetisjon, materialvalg, farger eller andre elementer.',
          },
        ],
        solution: 'Analysen bør vise forståelse for de fire designprinsippene og evne til å identifisere dem i virkelige gjenstander.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Tegn tre enkle skisser av en boks som viser ulike typer balanse: symmetrisk, asymmetrisk og radial.',
        solution: 'Symmetrisk: Boks med like dekorasjoner på begge sider. Asymmetrisk: Boks med mønster på en side og et større element på den andre. Radial: Boks sett ovenfra med dekor som stråler ut fra midten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Designprinsipper', definition: 'Grunnleggende regler for å organisere visuelle elementer på en estetisk måte' },
    { term: 'Balanse', definition: 'Hvordan visuelle elementer fordeles for å skape stabilitet' },
    { term: 'Symmetrisk balanse', definition: 'Elementer speiles på hver side av en midtakse' },
    { term: 'Asymmetrisk balanse', definition: 'Ulike elementer balanserer hverandre uten å være like' },
    { term: 'Kontrast', definition: 'Motsetninger som skaper spenning og interesse i et design' },
    { term: 'Rytme', definition: 'Bevegelse og flyt skapt gjennom gjentakelse av elementer' },
    { term: 'Enhet', definition: 'Når alle elementer i et design hører sammen og danner en helhet' },
    { term: 'Visuell vekt', definition: 'Hvor mye oppmerksomhet et element tiltrekker seg' },
  ],
};

// ============================================================================
// Kapittel 1.2: Form, funksjon og estetikk
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_1_2: TextbookChapter = {
  id: 'handverk-design-vg1-1-2',
  courseId: 'handverk-design-vg1',
  chapterNumber: '1.2',
  title: 'Form, funksjon og estetikk',
  description: 'Utforsking av sammenhengen mellom form, funksjon og estetisk uttrykk i håndverksprodukter. Elevene reflekterer over hvordan produkters utseende påvirker brukervennlighet. Praktisk arbeid med å vurdere kvalitet basert på holdbarhet, funksjon og estetikk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere håndverksfaglig kvalitet på eget og andres arbeid ut fra holdbarhet, funksjon og estetisk uttrykk',
  ],
  content: [
    {
      id: 'handverk-design-vg1-1-2-intro',
      type: 'text',
      content: `Hva gjør et produkt godt? Er det nok at det ser fint ut, eller må det også fungere godt? I dette kapittelet utforsker vi sammenhengen mellom form, funksjon og estetikk. Du lærer hvordan disse tre elementene påvirker hverandre, og hvordan du kan skape produkter som scorer høyt på alle tre.`,
    },
    {
      id: 'handverk-design-vg1-1-2-def-1',
      type: 'definition',
      title: 'Form follows function',
      content: `"Form follows function" (formen følger funksjonen) er et designprinsipp som sier at et produkts utseende bør bestemmes av hva det skal brukes til. Funksjonen kommer først, og formen tilpasses deretter. Prinsippet ble formulert av arkitekten Louis Sullivan på 1890-tallet.`,
    },
    {
      id: 'handverk-design-vg1-1-2-text-1',
      type: 'text',
      content: `**Hva er form?**

Form handler om hvordan et produkt ser ut - dets fysiske egenskaper som:
- **Omriss og silhuett**: Den ytre formen sett fra ulike vinkler
- **Volum og proporsjoner**: Størrelse og forholdet mellom delene
- **Overflater og teksturer**: Hvordan materialet føles og ser ut
- **Farger og mønstre**: Visuelle elementer som påvirker uttrykket
- **Detaljer og finish**: Små elementer som skaper helhetsinntrykket

**Hva er funksjon?**

Funksjon handler om hva produktet skal gjøre og hvordan det brukes:
- **Hovedfunksjon**: Det primære formålet (en stol skal du sitte på)
- **Brukervennlighet**: Hvor enkelt er det å bruke?
- **Ergonomi**: Tilpasning til menneskekroppens behov
- **Holdbarhet**: Hvor lenge varer produktet ved normal bruk?
- **Sikkerhet**: Produktet skal være trygt å bruke`,
    },
    {
      id: 'handverk-design-vg1-1-2-def-2',
      type: 'definition',
      title: 'Estetikk',
      content: `Estetikk er læren om skjønnhet og sanselig opplevelse. I design handler estetikk om hvordan et produkt oppleves visuelt og følelsesmessig. Estetisk kvalitet er subjektiv, men påvirkes av kulturelle normer og designprinsipper.`,
    },
    {
      id: 'handverk-design-vg1-1-2-text-2',
      type: 'text',
      content: `**Balansen mellom form, funksjon og estetikk**

De beste produktene finner en god balanse mellom alle tre elementene:

**Når funksjon dominerer**:
- Industrielle produkter, verktøy, medisinsk utstyr
- Effektivt, men kan mangle personlighet
- Eksempel: En sykehusseng er funksjonell, men ikke nødvendigvis vakker

**Når estetikk dominerer**:
- Kunst, pyntegstander, mote
- Vakkert, men ikke alltid praktisk
- Eksempel: Et designsmykke kan være upraktisk å bruke daglig

**Når form og funksjon balanseres**:
- Klassisk skandinavisk design
- Produkter som er både vakre og brukervennlige
- Eksempel: En Arne Jacobsen-stol eller en Georg Jensen-skje

**Spørsmål du bør stille**:
1. Oppfyller produktet sin hovedfunksjon?
2. Er det behagelig og trygt å bruke?
3. Holder det ved normal bruk?
4. Er det estetisk tiltalende?
5. Passer form og funksjon sammen?`,
    },
    {
      id: 'handverk-design-vg1-1-2-text-3',
      type: 'text',
      content: `**Ergonomi - når form møter funksjon**

Ergonomi handler om å tilpasse produkter til menneskers fysiske og psykiske behov. God ergonomi er der form og funksjon møtes.

**Ergonomiske hensyn**:
- **Kroppsmål**: Produkter må passe ulike kroppsstørrelser
- **Bevegelse**: Hvordan beveger vi oss når vi bruker produktet?
- **Grep og tak**: Håndtak og grepflater må være komfortable
- **Synlighet**: Viktige elementer må være synlige
- **Betjening**: Knapper og kontroller må være intuitive

**Ergonomiske målinger**:
- Sittehøyde: Gjennomsnittlig 45-52 cm
- Benkehøyde for arbeid: 85-95 cm
- Håndens grepbredde: 7-10 cm
- Behagelig løfting: Under 15 kg

**Eksempel på god ergonomi**:
En godt designet kniv har et grep som passer hånden naturlig, en vekt som gjør det lett å kontrollere, og en form som gjør at hånden ikke sklir mot bladet.`,
    },
    {
      id: 'handverk-design-vg1-1-2-example-1',
      type: 'example',
      title: 'Vurdering av en vannkanne',
      content: `La oss vurdere en vannkanne ut fra form, funksjon og estetikk:

**Funksjonell vurdering**:
- Holder den vann uten å lekke? (hovedfunksjon)
- Er håndtaket behagelig å holde? (ergonomi)
- Er den lett nok til å løfte når den er full? (brukervennlighet)
- Renner vannet jevnt fra tuten? (brukervennlighet)
- Tåler den å falle i gulvet? (holdbarhet)

**Estetisk vurdering**:
- Er proporsjonene harmoniske?
- Passer farge og overflate til omgivelsene?
- Er det en rød tråd i designet?
- Uttrykker den kvalitet?

**Form-funksjon-sammenheng**:
- Støtter formen tuten god helling?
- Er håndtakets plassering logisk for balansen?
- Bidrar formen til at den er enkel å rengjøre?`,
    },
    {
      id: 'handverk-design-vg1-1-2-tip-1',
      type: 'tip',
      title: 'Brukertest',
      content: `Når du har laget et produkt, test det i bruk! La andre prøve det uten instruksjoner og observer: Forstår de hvordan det skal brukes? Bruker de det slik du hadde tenkt? Hvor oppstår problemer? Denne typen testing avslører ofte svakheter i design som du selv ikke ser.`,
    },
    {
      id: 'handverk-design-vg1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva betyr prinsippet "form follows function"?',
        options: [
          'At form og funksjon er uavhengige av hverandre',
          'At utseende bør bestemmes av hva produktet skal brukes til',
          'At estetikk alltid er viktigere enn funksjon',
          'At funksjon ikke påvirker design',
        ],
        correctAnswer: 1,
        solution: '"Form follows function" betyr at et produkts utseende (form) bør bestemmes av hva det skal brukes til (funksjon). Funksjonen kommer først, og formen tilpasses deretter.',
      },
    },
    {
      id: 'handverk-design-vg1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er ergonomi, og hvorfor er det viktig i produktdesign?',
        solution: 'Ergonomi handler om å tilpasse produkter til menneskers fysiske og psykiske behov. Det er viktig fordi produkter som er ergonomisk utformet er mer komfortable, sikrere og enklere å bruke. God ergonomi forebygger slitasje og skader ved langvarig bruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg et hverdagsprodukt og vurder det ut fra holdbarhet, funksjon og estetisk uttrykk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan vurderer du produktets holdbarhet?',
            solution: 'Vurder materialvalg, konstruksjon, slitestyrke og forventet levetid.',
          },
          {
            label: 'b',
            task: 'Hvordan fungerer produktet i bruk?',
            solution: 'Vurder brukervennlighet, ergonomi, sikkerhet og om det oppfyller hovedfunksjonen.',
          },
          {
            label: 'c',
            task: 'Hva er produktets estetiske kvaliteter?',
            solution: 'Vurder proporsjoner, farger, materialer, overflater og helhetlig uttrykk.',
          },
        ],
        solution: 'Vurderingen bør dekke alle tre aspektene og vise forståelse for hvordan de henger sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilket alternativ beskriver best forholdet mellom form, funksjon og estetikk i skandinavisk design?',
        options: [
          'Funksjon ignoreres til fordel for estetikk',
          'Form og funksjon balanseres for å skape vakre og brukervennlige produkter',
          'Estetikk er uviktig så lenge produktet fungerer',
          'Form bestemmes uavhengig av funksjon',
        ],
        correctAnswer: 1,
        solution: 'Skandinavisk design er kjent for å balansere form og funksjon for å skape produkter som er både vakre og brukervennlige. Dette er kjernen i den skandinaviske designtradisjonen.',
      },
    },
    {
      id: 'handverk-design-vg1-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Design et enkelt produkt (f.eks. et pennal eller en kopp) der form og funksjon støtter hverandre. Lag en skisse og forklar valgene dine.',
        solution: 'Skissen bør vise et produkt der formen er tilpasset funksjonen. Forklaringen bør beskrive hvordan designvalgene gjør produktet både funksjonelt og estetisk tiltalende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Form follows function', definition: 'Designprinsipp som sier at utseende bør bestemmes av funksjon' },
    { term: 'Form', definition: 'Et produkts fysiske egenskaper som omriss, volum, overflate og farge' },
    { term: 'Funksjon', definition: 'Hva produktet skal gjøre og hvordan det brukes' },
    { term: 'Estetikk', definition: 'Læren om skjønnhet og sanselig opplevelse' },
    { term: 'Ergonomi', definition: 'Tilpasning av produkter til menneskers fysiske og psykiske behov' },
    { term: 'Brukervennlighet', definition: 'Hvor enkelt det er å bruke et produkt' },
    { term: 'Holdbarhet', definition: 'Hvor lenge et produkt varer ved normal bruk' },
  ],
};

// ============================================================================
// Kapittel 1.3: Fargelære og symbolikk
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_1_3: TextbookChapter = {
  id: 'handverk-design-vg1-1-3',
  courseId: 'handverk-design-vg1',
  chapterNumber: '1.3',
  title: 'Fargelære og symbolikk',
  description: 'Grunnleggende fargelære med fokus på fargesirkelen, komplementærfarger og fargeharmoni. Elevene utforsker hvordan farger og symboler brukes i ulike kulturer og håndverkstradisjoner. Praktisk arbeid med fargekomposisjoner i materialer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og bruke farger og symboler i produktutvikling i harde, myke og plastiske materialer',
  ],
  content: [
    {
      id: 'handverk-design-vg1-1-3-intro',
      type: 'text',
      content: `Farger påvirker oss dypt - de vekker følelser, skaper stemninger og formidler budskap. I håndverk og design er fargevalg en av de viktigste beslutningene du tar. I dette kapittelet lærer du grunnleggende fargelære, hvordan farger virker sammen, og hvordan farger og symboler brukes i ulike kulturer.`,
    },
    {
      id: 'handverk-design-vg1-1-3-def-1',
      type: 'definition',
      title: 'Fargesirkelen',
      content: `Fargesirkelen er et verktøy som viser forholdet mellom farger. Den er bygget opp av primærfarger (rød, gul, blå), sekundærfarger (oransje, grønn, fiolett) og tertiærfarger (blandinger av primær- og sekundærfarger). Fargesirkelen brukes for å forstå fargeharmonier.`,
    },
    {
      id: 'handverk-design-vg1-1-3-text-1',
      type: 'text',
      content: `**Primærfarger, sekundærfarger og tertiærfarger**

**Primærfarger** (kan ikke blandes av andre farger):
- Rød
- Gul
- Blå

**Sekundærfarger** (blanding av to primærfarger):
- Oransje = rød + gul
- Grønn = gul + blå
- Fiolett = blå + rød

**Tertiærfarger** (blanding av primær- og sekundærfarge):
- Rødoransje, guloransje
- Gulgrønn, blågrønn
- Blåfiolett, rødfiolett

**Nyanser og toner**:
- **Nyanse**: Farge blandet med hvit (lysere)
- **Skygge**: Farge blandet med svart (mørkere)
- **Tone**: Farge blandet med grå (dempet)`,
    },
    {
      id: 'handverk-design-vg1-1-3-def-2',
      type: 'definition',
      title: 'Komplementærfarger',
      content: `Komplementærfarger er farger som ligger rett overfor hverandre i fargesirkelen. Eksempler er rød-grønn, blå-oransje og gul-fiolett. Når komplementærfarger plasseres ved siden av hverandre, forsterker de hverandre og skaper sterk kontrast.`,
    },
    {
      id: 'handverk-design-vg1-1-3-text-2',
      type: 'text',
      content: `**Fargeharmonier**

Fargeharmoni handler om hvilke fargekombinasjoner som oppleves som tiltalende og balanserte.

**Monokromatisk harmoni**:
- Én farge i ulike nyanser og toner
- Elegant og rolig
- Enkelt å mestre

**Komplementær harmoni**:
- To farger som ligger overfor hverandre i fargesirkelen
- Sterk kontrast og energi
- Eksempel: blå og oransje

**Analog harmoni**:
- 2-4 farger som ligger ved siden av hverandre i fargesirkelen
- Harmonisk og naturlig
- Eksempel: gul, guloransje, oransje

**Triadisk harmoni**:
- Tre farger med lik avstand i fargesirkelen
- Levende og balansert
- Eksempel: rød, gul, blå

**Split-komplementær harmoni**:
- En farge pluss de to fargene ved siden av dens komplementærfarge
- Kontrast med mer nyanser
- Eksempel: blå med guloransje og rødoransje`,
    },
    {
      id: 'handverk-design-vg1-1-3-text-3',
      type: 'text',
      content: `**Fargenes betydning og symbolikk**

Farger har ulik betydning i forskjellige kulturer. Her er noen generelle assosiasjoner i vestlig kultur:

**Rød**: Kjærlighet, lidenskap, fare, energi, varme
**Oransje**: Kreativitet, entusiasme, varme, vitalitet
**Gul**: Glede, optimisme, varsel, oppmerksomhet
**Grønn**: Natur, vekst, harmoni, helse, miljø
**Blå**: Ro, tillit, profesjonalitet, kulde, melankoli
**Fiolett**: Luksus, kreativitet, spiritualitet, mystikk
**Hvit**: Renhet, uskyld, enkelhet (sorg i noen asiatiske kulturer)
**Svart**: Eleganse, kraft, sorg (i vestlig kultur), luksus
**Gull**: Rikdom, suksess, prestisje, varme

**Kulturelle forskjeller**:
- I Kina symboliserer rød lykke og feiring
- Hvit er sorgfarge i mange asiatiske kulturer
- Grønn er hellig farge i islam
- Saffrangul er religiøs farge i hinduismen`,
    },
    {
      id: 'handverk-design-vg1-1-3-text-4',
      type: 'text',
      content: `**Symboler i håndverkstradisjoner**

Symboler har vært brukt i håndverk gjennom historien for å formidle mening og identitet.

**Norske tradisjonelle symboler**:
- **Rosemaling**: Akantusranker, blomster, C- og S-former
- **Treskjæring**: Dyreornamenter, runelignende mønstre
- **Bunader**: Regionale mønstre som viser tilhørighet

**Samiske symboler (duodji)**:
- Geometriske mønstre med dype betydninger
- Farger: rød, blå, gul, grønn (naturens farger)
- Solhjul, reinsdyr, landskap

**Symboler fra andre kulturer**:
- **Japansk**: Kirsebærblomst (skjønnhet), bølger (liv)
- **Keltisk**: Knutemønstre (evighet), triskelen
- **Afrikansk**: Adinkra-symboler med filosofisk betydning

**Viktig ved bruk av kulturelle symboler**:
- Forstå symbolenes opprinnelige betydning
- Vis respekt for kulturen symbolene kommer fra
- Vær bevisst på kulturell appropriasjon`,
    },
    {
      id: 'handverk-design-vg1-1-3-example-1',
      type: 'example',
      title: 'Fargeharmoni i rosemaling',
      content: `Tradisjonell rosemaling bruker ofte komplementære fargeharmonier:

**Rogalandsrosemaling**:
- Rød bakgrunn med grønne blader (komplementærfarger)
- Hvite og gule høylys
- Skaper sterk kontrast og livlig uttrykk

**Telemarkrosemaling**:
- Ofte mørk bakgrunn (svart eller dyp blå)
- Røde, blå og grønne blomster
- Gull og hvitt for høylys og detaljer

Rosemalingen viser hvordan tradisjonelle håndverkere intuitivt mestret fargelære lenge før det ble systematisert.`,
    },
    {
      id: 'handverk-design-vg1-1-3-tip-1',
      type: 'tip',
      title: 'Lag en fargepalett',
      content: `Før du starter et prosjekt, lag en fargepalett med 3-5 farger som harmonerer. Test fargene på prøvebiter av materialet du skal bruke - farger kan se annerledes ut på papir enn på tre, tekstil eller keramikk. Husk at omgivelsene og lyset også påvirker hvordan farger oppfattes.`,
    },
    {
      id: 'handverk-design-vg1-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilke er de tre primærfargene?',
        options: [
          'Oransje, grønn og fiolett',
          'Rød, gul og blå',
          'Rosa, turkis og lilla',
          'Hvit, svart og grå',
        ],
        correctAnswer: 1,
        solution: 'De tre primærfargene er rød, gul og blå. Disse kan ikke blandes av andre farger, og alle andre farger kan lages ved å blande primærfargene.',
      },
    },
    {
      id: 'handverk-design-vg1-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva komplementærfarger er, og gi tre eksempler.',
        solution: 'Komplementærfarger er farger som ligger rett overfor hverandre i fargesirkelen. Eksempler: rød-grønn, blå-oransje, gul-fiolett. Når de plasseres ved siden av hverandre, forsterker de hverandre og skaper sterk kontrast.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er analog fargeharmoni?',
        options: [
          'To farger som ligger overfor hverandre i fargesirkelen',
          '2-4 farger som ligger ved siden av hverandre i fargesirkelen',
          'Tre farger med lik avstand i fargesirkelen',
          'Én farge i ulike nyanser og toner',
        ],
        correctAnswer: 1,
        solution: 'Analog fargeharmoni bruker 2-4 farger som ligger ved siden av hverandre i fargesirkelen, for eksempel gul, guloransje og oransje. Dette skaper en harmonisk og naturlig fargepalett.',
      },
    },
    {
      id: 'handverk-design-vg1-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg en farge og beskriv symbolikken den har i minst to ulike kulturer.',
        solution: 'Svaret bør vise at samme farge kan ha ulik betydning i forskjellige kulturer. For eksempel: Hvit symboliserer renhet og bryllup i vestlig kultur, men er sorgfarge i mange asiatiske kulturer. Rød symboliserer fare i vestlig kultur, men lykke og feiring i Kina.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en fargepalett med fire farger som harmonerer for et tenkt håndverksprodukt.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type fargeharmoni har du valgt?',
            solution: 'Beskriv om du har valgt monokromatisk, komplementær, analog, triadisk eller split-komplementær harmoni.',
          },
          {
            label: 'b',
            task: 'Hvilke farger har du valgt, og hvorfor passer de til prosjektet?',
            solution: 'Beskriv fargene og begrunn valget ut fra prosjektets formål og ønsket stemning.',
          },
        ],
        solution: 'Paletten bør vise forståelse for fargeharmoni og bevisste valg som passer til det tenkte prosjektet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Undersøk et tradisjonelt håndverksprodukt fra din region eller kultur. Beskriv hvilke farger og symboler som brukes, og hva de betyr.',
        solution: 'Svaret bør identifisere farger og symboler i det valgte håndverket, og forklare deres kulturelle og historiske betydning. Det bør også reflektere over hvordan disse elementene bidrar til produktets identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fargesirkelen', definition: 'Verktøy som viser forholdet mellom farger, fra primærfarger til tertiærfarger' },
    { term: 'Primærfarger', definition: 'Rød, gul og blå - farger som ikke kan blandes av andre farger' },
    { term: 'Sekundærfarger', definition: 'Oransje, grønn og fiolett - blanding av to primærfarger' },
    { term: 'Komplementærfarger', definition: 'Farger som ligger rett overfor hverandre i fargesirkelen' },
    { term: 'Fargeharmoni', definition: 'Fargekombinasjoner som oppleves som tiltalende og balanserte' },
    { term: 'Monokromatisk', definition: 'Én farge i ulike nyanser og toner' },
    { term: 'Analog harmoni', definition: 'Farger som ligger ved siden av hverandre i fargesirkelen' },
    { term: 'Symbolikk', definition: 'Betydningen og assosiasjonene farger og former har i ulike kulturer' },
  ],
};

// ============================================================================
// Kapittel 1.4: Komposisjon i to og tre dimensjoner
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_1_4: TextbookChapter = {
  id: 'handverk-design-vg1-1-4',
  courseId: 'handverk-design-vg1',
  chapterNumber: '1.4',
  title: 'Komposisjon i to og tre dimensjoner',
  description: 'Arbeid med komposisjonsprinsipper i både flat og romlig form. Elevene øver på å skape visuelle uttrykk gjennom plassering, størrelse og proporsjoner. Praktiske prosjekter i tredimensjonal komposisjon med ulike materialer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke komposisjonsprinsipper i to- og tredimensjonal form',
  ],
  content: [
    {
      id: 'handverk-design-vg1-1-4-intro',
      type: 'text',
      content: `Komposisjon handler om hvordan du organiserer elementer i et design - enten det er på en flat overflate eller i et tredimensjonalt rom. God komposisjon leder blikket, skaper harmoni og formidler et tydelig budskap. I dette kapittelet lærer du prinsipper for komposisjon som du kan bruke i alt fra tekstildesign til møbelsnekring.`,
    },
    {
      id: 'handverk-design-vg1-1-4-def-1',
      type: 'definition',
      title: 'Komposisjon',
      content: `Komposisjon er måten visuelle elementer er organisert og arrangert i et kunstverk eller design. Det handler om plassering, størrelse, retning, avstand og forholdet mellom elementene. God komposisjon skaper visuell orden og styrer betrakterens oppmerksomhet.`,
    },
    {
      id: 'handverk-design-vg1-1-4-text-1',
      type: 'text',
      content: `**Todimensjonal komposisjon**

Todimensjonal (2D) komposisjon handler om å organisere elementer på en flat overflate - som på papir, tekstil eller keramikk.

**Grunnprinsipper for 2D-komposisjon**:

**Fokuspunkt**:
- Hva skal være hovedattraksjonen?
- Hvor vil du at blikket skal trekkes først?
- Bruk kontrast, størrelse eller plassering for å skape fokus

**Det gylne snitt og tredjedelsregelen**:
- Del flaten i tredjeler både horisontalt og vertikalt
- Plasser viktige elementer langs disse linjene eller i skjæringspunktene
- Skaper dynamisk balanse fremfor statisk sentrering

**Negativ plass (whitespace)**:
- Tom plass rundt elementer er like viktig som elementene selv
- Gir designet rom til å "puste"
- Fremhever hovedelementer

**Visuell flyt**:
- Led blikket gjennom designet
- Bruk linjer, former og kontraster til å guide betrakteren
- Skap en naturlig leserekkefølge`,
    },
    {
      id: 'handverk-design-vg1-1-4-def-2',
      type: 'definition',
      title: 'Det gylne snitt',
      content: `Det gylne snitt er et matematisk forhold på cirka 1:1,618 som finnes i naturen og oppleves som harmonisk. I komposisjon brukes det til å dele flater og plassere elementer på en måte som føles naturlig og balansert.`,
    },
    {
      id: 'handverk-design-vg1-1-4-text-2',
      type: 'text',
      content: `**Tredimensjonal komposisjon**

Tredimensjonal (3D) komposisjon legger til en ekstra dimensjon - dybde. Nå må du tenke på hvordan objektet oppleves fra alle vinkler.

**Spesielle hensyn for 3D**:

**Silhuett og profil**:
- Hvordan ser objektet ut fra ulike vinkler?
- Er formen interessant fra alle sider?
- Noen vinkler er viktigere enn andre (frontvisning vs. bakside)

**Volum og masse**:
- Forholdet mellom fylte og tomme områder
- Tyngde og balanse - fysisk og visuell
- Materialmengde og proporsjoner

**Lys og skygge**:
- Hvordan faller lyset på objektet?
- Hvilke detaljer fremheves eller skjules?
- Overflatebehandling påvirker lysrefleksjon

**Berøring og tekstur**:
- 3D-objekter oppleves også taktilt
- Teksturvariasjoner skaper interesse
- Ergonomi - hvordan føles det å holde/bruke?

**Rom og kontekst**:
- Hvordan passer objektet inn i omgivelsene?
- Skala i forhold til rommet og brukeren
- Samspill med andre objekter`,
    },
    {
      id: 'handverk-design-vg1-1-4-text-3',
      type: 'text',
      content: `**Proporsjoner i design**

Proporsjoner handler om størrelsesforholdet mellom ulike deler av et design.

**Det gylne snitt i praksis**:
- Forholdet 1:1,618 skaper harmoniske proporsjoner
- Finnes i naturen: sneglehus, solsikkefrø, menneskekroppen
- Brukes i alt fra logoer til arkitektur

**Menneskelige proporsjoner**:
- Kroppen som målestokk for produkter
- Håndens grep, armenes rekkevidde
- Sittehøyde, øyehøyde

**Proporsjoner i ulike materialer**:
- Tre: Tradisjonelle møbler følger ofte faste proporsjoner
- Keramikk: Forholdet mellom fot, kropp og rand
- Tekstil: Mønsterrapporter og stoffbredder

**Skala og kontekst**:
- Et objekts størrelse i forhold til omgivelsene
- Samme form kan oppleves ulikt i ulik skala
- Miniatyrer vs. storskala - forskjellige utfordringer`,
    },
    {
      id: 'handverk-design-vg1-1-4-example-1',
      type: 'example',
      title: 'Komposisjon i en keramikkskål',
      content: `La oss analysere komposisjonen i en enkel keramikkskål:

**2D-perspektiv (sett ovenfra)**:
- Sirkulær form med radiær symmetri
- Dekor kan følge tredjedelsregelen for plassering
- Negativ plass i midten balanserer dekoren langs kanten

**3D-perspektiv**:
- Silhuetten endres dramatisk fra ulike vinkler
- Forholdet mellom fot, kropp og rand skaper proporsjonene
- Kurven på innsiden vs. utsiden av skålen

**Proporsjoner**:
- Fotens diameter i forhold til åpningen
- Dybden i forhold til bredden
- Veggtykkelsen i forhold til størrelsen

**Lys og skygge**:
- Glasuren reflekterer lys ulikt på ulike punkter
- Kurven skaper gradvis skyggelegging
- Tekstur kan skape mikroskygger`,
    },
    {
      id: 'handverk-design-vg1-1-4-tip-1',
      type: 'tip',
      title: 'Test komposisjonen',
      content: `Når du arbeider med et 3D-objekt, snurr det rundt og se på det fra alle vinkler. Ta bilder fra ulike vinkler og vurder silhuetten. For 2D-komposisjon, prøv å se på designet på avstand eller speilvend det - dette hjelper deg å oppdage ubalanser du kanskje overser når du sitter tett på.`,
    },
    {
      id: 'handverk-design-vg1-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er tredjedelsregelen i komposisjon?',
        options: [
          'At designet skal ha tre like store deler',
          'At viktige elementer plasseres langs linjer som deler flaten i tredjeler',
          'At man bruker tre farger i designet',
          'At objektet skal ses fra tre ulike vinkler',
        ],
        correctAnswer: 1,
        solution: 'Tredjedelsregelen sier at du deler flaten i tredjeler både horisontalt og vertikalt, og plasserer viktige elementer langs disse linjene eller i skjæringspunktene. Dette skaper dynamisk balanse.',
      },
    },
    {
      id: 'handverk-design-vg1-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom todimensjonal og tredimensjonal komposisjon.',
        solution: 'Todimensjonal komposisjon handler om å organisere elementer på en flat overflate (som papir eller tekstil), mens tredimensjonal komposisjon inkluderer dybde og må ta hensyn til hvordan objektet ser ut fra alle vinkler, hvordan lys og skygge faller, og hvordan det oppleves taktilt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er negativ plass (whitespace), og hvorfor er det viktig i komposisjon?',
        solution: 'Negativ plass er den tomme plassen rundt og mellom elementer i et design. Det er viktig fordi det gir designet rom til å "puste", fremhever hovedelementer, og forhindrer at designet føles rotete eller overfylt. God bruk av negativ plass er like viktig som elementene selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag to enkle skisser: en 2D-komposisjon (f.eks. et mønster for tekstil) og en 3D-skisse (f.eks. en kopp). Merk av hvor du har brukt komposisjonsprinsipper.',
        solution: 'Skissene bør vise bevisst bruk av fokuspunkt, balanse, proporsjoner og negativ plass. 3D-skissen bør vise objektet fra minst to vinkler for å demonstrere forståelse for romlig form.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er det gylne snitt?',
        options: [
          'En måte å kutte materialer på',
          'Et matematisk forhold på cirka 1:1,618 som oppleves harmonisk',
          'En teknikk for å blande farger',
          'En type vinkel brukt i perspektivtegning',
        ],
        correctAnswer: 1,
        solution: 'Det gylne snitt er et matematisk forhold på cirka 1:1,618 som finnes i naturen og oppleves som harmonisk. Det brukes i design for å skape behagelige proporsjoner.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Komposisjon', definition: 'Måten visuelle elementer er organisert og arrangert i et design' },
    { term: 'Fokuspunkt', definition: 'Det elementet som trekker blikket først i en komposisjon' },
    { term: 'Tredjedelsregelen', definition: 'Prinsipp om å plassere viktige elementer langs linjer som deler flaten i tredjeler' },
    { term: 'Negativ plass', definition: 'Tom plass rundt og mellom elementer i et design' },
    { term: 'Det gylne snitt', definition: 'Matematisk forhold på cirka 1:1,618 som oppleves harmonisk' },
    { term: 'Silhuett', definition: 'Omrisset av et objekt sett mot en lysere bakgrunn' },
    { term: 'Proporsjoner', definition: 'Størrelsesforholdet mellom ulike deler av et design' },
  ],
};

// ============================================================================
// Kapittel 1.5: Skisseteknikk og idéutvikling
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_1_5: TextbookChapter = {
  id: 'handverk-design-vg1-1-5',
  courseId: 'handverk-design-vg1',
  chapterNumber: '1.5',
  title: 'Skisseteknikk og idéutvikling',
  description: 'Utvikling av ferdigheter i skissering som verktøy for idéutvikling og kommunikasjon. Elevene lærer ulike skisseteknikker for å visualisere ideer raskt og effektivt. Praktisk arbeid med skissebøker og kreative prosesser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utarbeide og videreutvikle skisser og arbeidstegninger manuelt og ved hjelp av digitale ressurser',
  ],
  content: [
    {
      id: 'handverk-design-vg1-1-5-intro',
      type: 'text',
      content: `Skissering er designerens viktigste verktøy for å tenke, utforske og kommunisere ideer. En god skisse trenger ikke være perfekt - den skal fange essensen av en idé raskt og tydelig. I dette kapittelet lærer du ulike skisseteknikker og hvordan du bruker skissering i kreative prosesser.`,
    },
    {
      id: 'handverk-design-vg1-1-5-def-1',
      type: 'definition',
      title: 'Idéskisse',
      content: `En idéskisse er en rask, enkel tegning som brukes til å fange og utforske en idé. Idéskisser trenger ikke være nøyaktige eller vakre - de er tenkerverktøy som hjelper deg å visualisere og utvikle konsepter før du går videre til mer detaljerte tegninger.`,
    },
    {
      id: 'handverk-design-vg1-1-5-text-1',
      type: 'text',
      content: `**Hvorfor skissere?**

Skissering har mange funksjoner i designprosessen:

**Utforske ideer**:
- Raskere enn å bygge prototyper
- Lave kostnader ved å feile
- Åpner for eksperimentering

**Kommunisere konsepter**:
- Vise andre hva du tenker
- Diskusjonsgrunnlag i grupper
- Kunden forstår bedre enn med ord

**Dokumentere tanker**:
- Ideer forsvinner raskt fra minnet
- Skissebok som tankens dagbok
- Referanse til senere bruk

**Problemløsning**:
- Tegning tvinger deg til å tenke gjennom detaljer
- Avdekker problemer tidlig
- Hjelper å finne løsninger`,
    },
    {
      id: 'handverk-design-vg1-1-5-def-2',
      type: 'definition',
      title: 'Thumbnail-skisse',
      content: `En thumbnail-skisse er en veldig liten og rask skisse, ofte på størrelse med et frimerke. De brukes for å utforske mange ideer raskt uten å investere mye tid i hver enkelt. Thumbnail-skisser hjelper deg å sammenligne ulike konsepter før du velger hvilke som skal utvikles videre.`,
    },
    {
      id: 'handverk-design-vg1-1-5-text-2',
      type: 'text',
      content: `**Grunnleggende skisseteknikker**

**Linjetyper**:
- **Konstruksjonslinjer**: Lette, hjelpende linjer for oppbygging
- **Konturlinjer**: Tydelige linjer som definerer formen
- **Skravering**: Tette linjer for skygge og volum
- **Gestuslinjer**: Raske, flytende linjer for bevegelse

**Tips for bedre skisser**:
1. **Start lett**: Bruk lette linjer du kan justere
2. **Tegn fra skulderen**: Gir bedre kontroll enn håndleddet alene
3. **Se, så tegn**: Observer objektet, deretter tegn uten å se ned
4. **Øv på grunnformer**: Kuler, sylindre, kuber, kjegler
5. **Mengdetrening**: Jo flere skisser, jo bedre blir du

**Utstyr du trenger**:
- Skissebok (gjerne uten linjer)
- Blyanter i ulike hardhetsgrader (HB, 2B, 4B)
- Viskelær
- Tusjer for konturering
- Eventuelt markører for farge`,
    },
    {
      id: 'handverk-design-vg1-1-5-text-3',
      type: 'text',
      content: `**Idéutviklingsprosessen**

**Fase 1: Brainstorming**
- Skriv ned alle ideer uten sensur
- Mengde er viktigere enn kvalitet i starten
- Bygg på andres ideer

**Fase 2: Thumbnail-skisser**
- Tegn mange små, raske skisser
- Utforsk variasjoner av samme idé
- Ikke invester for mye tid i hver enkelt

**Fase 3: Utvikling av favoritter**
- Velg de beste ideene
- Tegn større, mer detaljerte skisser
- Utforsk ulike vinkler og detaljer

**Fase 4: Raffinering**
- Arbeid videre med den beste ideen
- Legg til mål og detaljer
- Forbered for arbeidstegning

**Kreative teknikker**:
- **Tvungen kombinasjon**: Kombiner ulike objekter eller konsepter
- **Hva om?**: Still spørsmål som utfordrer antakelser
- **Omvendt tenkning**: Start med sluttresultatet
- **Analogier**: Hent inspirasjon fra andre felt`,
    },
    {
      id: 'handverk-design-vg1-1-5-example-1',
      type: 'example',
      title: 'Fra idé til skisse: En lysestake',
      content: `La oss følge prosessen med å designe en lysestake:

**Brainstorming** (5 minutter):
- Klassisk form, moderne form, organisk form
- Materialer: tre, metall, keramikk, glass
- Funksjoner: ett lys, flere lys, flyttbar, fastmontert

**Thumbnail-skisser** (10 minutter):
- 12-15 raske skisser på et ark
- Utforsker ulike former og materialer
- Varierer høyde, bredde, antall lys

**Utvelgelse**:
- Velger tre favoritter
- En organisk i keramikk, en minimalistisk i metall, en skulpturell i tre

**Detaljerte skisser** (15 minutter per skisse):
- Tegner fra flere vinkler
- Legger til mål og proporsjoner
- Noterer materialvalg og teknikker

**Endelig valg**:
- Velger den organiske keramikkversjonen
- Lager arbeidstegning med nøyaktige mål`,
    },
    {
      id: 'handverk-design-vg1-1-5-tip-1',
      type: 'tip',
      title: 'Hold en skissebok',
      content: `Ha alltid med deg en liten skissebok. Tegn ting du ser rundt deg - møbler, gjenstander, natur. Skriv ned ideer når de kommer. Ikke vær redd for å fylle boken med uferdige tanker. Over tid blir skisseboken din en uvurderlig ressurs med inspirasjon og ideer.`,
    },
    {
      id: 'handverk-design-vg1-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med en thumbnail-skisse?',
        options: [
          'Å lage en perfekt og detaljert tegning',
          'Å utforske mange ideer raskt uten å investere mye tid i hver',
          'Å imponere kunden med tegnekunst',
          'Å erstatte arbeidstegningen',
        ],
        correctAnswer: 1,
        solution: 'Thumbnail-skisser er veldig små, raske skisser som brukes for å utforske mange ideer raskt. De hjelper deg å sammenligne ulike konsepter før du velger hvilke som skal utvikles videre.',
      },
    },
    {
      id: 'handverk-design-vg1-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv de fire fasene i idéutviklingsprosessen.',
        solution: 'Fase 1: Brainstorming - generere mange ideer uten sensur. Fase 2: Thumbnail-skisser - raske små skisser for å utforske ideene visuelt. Fase 3: Utvikling av favoritter - mer detaljerte skisser av de beste ideene. Fase 4: Raffinering - bearbeide den valgte ideen til en ferdig løsning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg et enkelt produkt (f.eks. en kopp, en boks eller en lampe) og lag minst 8 thumbnail-skisser med ulike varianter av produktet.',
        solution: 'Skissene bør vise variasjon i form, proporsjon, detaljer og stil. Husk at thumbnail-skisser skal være raske og ikke perfekte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken skisseteknikk gir best kontroll over lange, rette linjer?',
        options: [
          'Tegne fra håndleddet',
          'Tegne fra fingertuppene',
          'Tegne fra skulderen',
          'Tegne med øynene lukket',
        ],
        correctAnswer: 2,
        solution: 'Å tegne fra skulderen gir bedre kontroll over lange linjer enn å bare bruke håndleddet. Hele armen beveger seg, noe som gir jevnere og mer kontrollerte linjer.',
      },
    },
    {
      id: 'handverk-design-vg1-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Øv på de tre grunnformene: en kube, en sylinder og en kule. Tegn hver form tre ganger med skravering for å vise volum.',
        solution: 'Skissene bør vise forståelse for hvordan lys og skygge skaper illusjon av tredimensjonal form. Skraveringen bør følge formens kurve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Bruk den kreative teknikken "tvungen kombinasjon". Velg to tilfeldige objekter (f.eks. en sko og en plante) og skisser et nytt produkt som kombinerer elementer fra begge.',
        solution: 'Skissen bør vise kreativ problemløsning og evne til å kombinere elementer fra ulike objekter på en meningsfull måte. Forklar kort ideen bak kombinasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Idéskisse', definition: 'Rask, enkel tegning for å fange og utforske en idé' },
    { term: 'Thumbnail-skisse', definition: 'Svært liten og rask skisse for å utforske mange ideer' },
    { term: 'Konstruksjonslinjer', definition: 'Lette, hjelpende linjer brukt for å bygge opp en tegning' },
    { term: 'Konturlinjer', definition: 'Tydelige linjer som definerer et objekts ytre form' },
    { term: 'Skravering', definition: 'Tette linjer brukt for å skape skygge og volum' },
    { term: 'Brainstorming', definition: 'Kreativ teknikk for å generere mange ideer uten sensur' },
    { term: 'Raffinering', definition: 'Prosessen med å bearbeide og forbedre en idé' },
  ],
};

// ============================================================================
// Kapittel 1.6: Arbeidstegninger og teknisk tegning
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_1_6: TextbookChapter = {
  id: 'handverk-design-vg1-1-6',
  courseId: 'handverk-design-vg1',
  chapterNumber: '1.6',
  title: 'Arbeidstegninger og teknisk tegning',
  description: 'Innføring i arbeidstegninger, maler og mønstre som grunnlag for håndverksarbeid. Elevene lærer å lese og lage tekniske tegninger med korrekte mål og målestokk. Praktisk arbeid med å overføre tegninger til materialer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke arbeidstegninger, mønstre og maler i eget arbeid',
  ],
  content: [
    {
      id: 'handverk-design-vg1-1-6-intro',
      type: 'text',
      content: `Når idéskissen er ferdig, må du lage presise tegninger som kan brukes til faktisk produksjon. Arbeidstegninger og tekniske tegninger er verktøy som sikrer at produktet blir slik du har tenkt. I dette kapittelet lærer du grunnleggende teknisk tegning, bruk av målestokk, og hvordan du lager mønstre og maler.`,
    },
    {
      id: 'handverk-design-vg1-1-6-def-1',
      type: 'definition',
      title: 'Arbeidstegning',
      content: `En arbeidstegning er en detaljert, målsatt tegning som viser nøyaktig hvordan et produkt skal lages. Den inneholder alle mål, materialer, og nødvendige detaljer for produksjon. Arbeidstegningen er håndverkerens oppskrift.`,
    },
    {
      id: 'handverk-design-vg1-1-6-text-1',
      type: 'text',
      content: `**Fra skisse til arbeidstegning**

En arbeidstegning skiller seg fra en idéskisse på flere måter:

**Idéskisse**:
- Rask og løs
- Viser ideen og konseptet
- Ingen presise mål
- Kan være ukomplett

**Arbeidstegning**:
- Nøyaktig og presis
- Alle mål er oppgitt
- Følger tegningsstandarder
- Komplett informasjon for produksjon

**Hva en arbeidstegning inneholder**:
- Visninger fra flere vinkler (front, side, topp)
- Alle nødvendige mål i millimeter
- Materialspesifikasjoner
- Snittegninger ved behov
- Detaljforstørrelser
- Tittelblokk med informasjon`,
    },
    {
      id: 'handverk-design-vg1-1-6-def-2',
      type: 'definition',
      title: 'Målestokk',
      content: `Målestokk angir forholdet mellom størrelsen på tegningen og virkelig størrelse. For eksempel betyr målestokk 1:2 at tegningen er halvparten så stor som objektet, mens 2:1 betyr at tegningen er dobbelt så stor. 1:1 er full størrelse.`,
    },
    {
      id: 'handverk-design-vg1-1-6-text-2',
      type: 'text',
      content: `**Målestokk og mål**

**Vanlige målestokker**:
- **1:1** - Full størrelse (smykker, små detaljer)
- **1:2** - Halvparten (mindre produkter)
- **1:5** - En femtedel (møbler)
- **1:10** - En tiendedel (store møbler, rom)
- **1:20** - En tjuendedel (arkitektur)
- **2:1** - Dobbel størrelse (små detaljer)

**Hvordan måle og overføre mål**:
1. Alle mål angis i millimeter (mm)
2. Bruk målsatt linjal eller tommestokk
3. Mål alltid fra en fast referanse (kant eller hjørne)
4. Dobbelsjekk viktige mål

**Målsetting på tegning**:
- Plasser mål utenfor objektet
- Bruk målpiler på begge ender
- Unngå kryssende mållinjer
- Mål hele lengder og viktige delstørrelser`,
    },
    {
      id: 'handverk-design-vg1-1-6-text-3',
      type: 'text',
      content: `**Ortografisk projeksjon**

Ortografisk projeksjon viser et objekt fra flere vinkler på en systematisk måte.

**Standard visninger**:
- **Frontvisning**: Sett rett forfra
- **Sidevisning**: Sett fra siden (høyre eller venstre)
- **Toppvisning**: Sett rett ovenfra

**Plassering av visninger**:
- Frontvisning i midten
- Toppvisning over frontvisning
- Sidevisning ved siden av frontvisning

**Snittegninger**:
- Viser innvendig konstruksjon
- Markeres med snittlinje på hovedtegningen
- Skravert område viser snittet materiale

**Isometrisk tegning**:
- Viser objektet i 3D
- Alle akser i 120 graders vinkel
- Parallelle linjer forblir parallelle
- God for å vise hvordan delene henger sammen`,
    },
    {
      id: 'handverk-design-vg1-1-6-text-4',
      type: 'text',
      content: `**Mønstre og maler**

Mønstre og maler brukes for å overføre tegningen til materialet.

**Typer mønstre**:
- **Papirmønster**: For tekstil og lær
- **Sjablonger**: For repeterende mønstre
- **Maler**: For å tegne av konturer på materialet

**Lage et mønster**:
1. Tegn mønsteret i full størrelse (1:1)
2. Marker alle viktige punkter og linjer
3. Legg til sømmonn for tekstil (1-2 cm)
4. Merk trådretning for tekstil
5. Nummerer delene og marker mengde

**Overføre til materiale**:
- Fest mønsteret til materialet
- Tegn rundt med blyant eller kritt
- For tre: bruk stikkel eller karbonpapir
- For tekstil: stift eller kritt
- Marker alle hjelpepunkter

**Tilpasse mønstre**:
- Gradering (gjøre større/mindre)
- Justere for ulike størrelser
- Tilpasse til materialets egenskaper`,
    },
    {
      id: 'handverk-design-vg1-1-6-example-1',
      type: 'example',
      title: 'Arbeidstegning for en enkel trekasse',
      content: `**Tittelblokk**:
- Prosjekt: Oppbevaringskasse
- Materiale: Furu, 15 mm tykkelse
- Målestokk: 1:5
- Tegnet av: [Navn]
- Dato: [Dato]

**Mål (i mm)**:
- Utvendig: 300 x 200 x 150 (lengde x bredde x høyde)
- Innvendig: 270 x 170 x 135
- Bunn: 300 x 200 x 15

**Visninger på tegningen**:
- Frontvisning med alle mål
- Toppvisning som viser innvendig rom
- Sidevisning med høydemål
- Isometrisk visning for helhet

**Stykkliste**:
- 2 stk langside: 300 x 150 x 15
- 2 stk kortside: 170 x 150 x 15
- 1 stk bunn: 270 x 170 x 15`,
    },
    {
      id: 'handverk-design-vg1-1-6-tip-1',
      type: 'tip',
      title: 'Sjekkliste for arbeidstegning',
      content: `Før du starter produksjon, sjekk at tegningen har: Alle nødvendige mål, korrekt målestokk, materialangivelser, visninger fra alle viktige vinkler, tittelblokk med prosjektinfo, og at alle mål stemmer når du regner dem ut. En feil på tegningen blir en feil på produktet!`,
    },
    {
      id: 'handverk-design-vg1-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva betyr målestokk 1:5?',
        options: [
          'Tegningen er 5 ganger større enn virkeligheten',
          'Tegningen er 5 ganger mindre enn virkeligheten',
          'Tegningen er i full størrelse',
          'Tegningen er halvparten så stor som virkeligheten',
        ],
        correctAnswer: 1,
        solution: 'Målestokk 1:5 betyr at tegningen er en femtedel av virkelig størrelse, altså 5 ganger mindre. Et objekt som er 50 cm i virkeligheten vil være 10 cm på tegningen.',
      },
    },
    {
      id: 'handverk-design-vg1-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom en idéskisse og en arbeidstegning?',
        solution: 'En idéskisse er rask og løs, viser konseptet uten presise mål, og kan være ukomplett. En arbeidstegning er nøyaktig og presis, inneholder alle mål, følger tegningsstandarder, og har komplett informasjon for produksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Lag en enkel arbeidstegning av en rektangulær boks (f.eks. et pennal) med mål. Inkluder frontvisning, toppvisning og sidevisning.',
        solution: 'Tegningen bør vise tre ortografiske visninger med korrekt plassering, alle nødvendige mål i mm, og en tittelblokk med målestokk og materialangivelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken måleenhet brukes vanligvis på arbeidstegninger for håndverk?',
        options: [
          'Centimeter',
          'Meter',
          'Millimeter',
          'Tommer',
        ],
        correctAnswer: 2,
        solution: 'Millimeter (mm) er standard måleenhet på arbeidstegninger fordi det gir presis nok måling uten desimaler. 15 mm er lettere å jobbe med enn 1,5 cm.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Arbeidstegning', definition: 'Detaljert, målsatt tegning som viser nøyaktig hvordan et produkt skal lages' },
    { term: 'Målestokk', definition: 'Forholdet mellom størrelsen på tegningen og virkelig størrelse' },
    { term: 'Ortografisk projeksjon', definition: 'Teknikk som viser et objekt fra flere vinkler systematisk' },
    { term: 'Snittegning', definition: 'Tegning som viser innvendig konstruksjon ved å "skjære gjennom" objektet' },
    { term: 'Isometrisk tegning', definition: '3D-tegning der alle akser er i 120 graders vinkel' },
    { term: 'Mønster', definition: 'Mal i full størrelse som brukes til å overføre former til materialet' },
    { term: 'Sømmonn', definition: 'Ekstra materiale som legges til mønsteret for søm i tekstilarbeid' },
  ],
};

// ============================================================================
// Kapittel 1.7: Stilhistorie og designtradisjoner
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_1_7: TextbookChapter = {
  id: 'handverk-design-vg1-1-7',
  courseId: 'handverk-design-vg1',
  chapterNumber: '1.7',
  title: 'Stilhistorie og designtradisjoner',
  description: 'Oversikt over viktige stilperioder og designtradisjoner fra antikken til moderne tid. Elevene utforsker hvordan historiske stilretninger påvirker dagens formgiving og håndverk. Analyse av designgjenstander fra ulike epoker og kulturer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'undersøke og bruke design, kulturuttrykk, stilhistorie og lokale tradisjoner innenfor tradisjonshåndverk som inspirasjon til egen produktutvikling',
  ],
  content: [
    {
      id: 'handverk-design-vg1-1-7-intro',
      type: 'text',
      content: `Design har alltid vært i endring. Fra antikkens symmetriske idealer til dagens minimalistiske trender har hver epoke satt sitt preg på hvordan vi former verden rundt oss. I dette kapittelet får du en oversikt over viktige stilperioder og designtradisjoner, og lærer hvordan historien kan inspirere ditt eget arbeid.`,
    },
    {
      id: 'handverk-design-vg1-1-7-def-1',
      type: 'definition',
      title: 'Stilhistorie',
      content: `Stilhistorie er studiet av hvordan visuelt uttrykk, formspråk og estetiske idealer har endret seg gjennom tidene. Hver stilperiode reflekterer samfunnets verdier, teknologiske muligheter og kulturelle strømninger.`,
    },
    {
      id: 'handverk-design-vg1-1-7-text-1',
      type: 'text',
      content: `**Antikken (ca. 800 f.Kr. - 500 e.Kr.)**

**Gresk stil**:
- Symmetri og proporsjoner basert på matematiske forhold
- Søyleordener: dorisk, jonisk, korintisk
- Geometriske mønstre og naturalistiske relieffer
- Keramikk med figurative motiver

**Romersk stil**:
- Bygger videre på gresk tradisjon
- Bueganger og hvelvkonstruksjoner
- Praktiske innovasjoner (betong, vannledninger)
- Mosaikkkunst og veggmalerier

**Kjennetegn**:
- Idealiserte proporsjoner
- Det gylne snitt
- Naturinspirerte ornamenter
- Harmoni og balanse`,
    },
    {
      id: 'handverk-design-vg1-1-7-text-2',
      type: 'text',
      content: `**Middelalderen (ca. 500 - 1400)**

**Romansk stil (ca. 1000-1200)**:
- Tunge, massive konstruksjoner
- Rundbuer
- Enkle geometriske ornamenter
- Religiøse motiver

**Gotikk (ca. 1150-1500)**:
- Spisse buer og ribhvelv
- Høye, luftige rom
- Fargerike glassmalrier
- Detaljrike ornamenter

**Renessanse (ca. 1400-1600)**:
- Gjenoppdagelse av antikkens idealer
- Perspektiv og proporsjoner
- Humanistiske verdier
- Symmetri og orden

**Barokk (ca. 1600-1750)**:
- Overdådig dekor
- Bevegelse og dramatikk
- Gull og rike materialer
- Asymmetri og kontraster`,
    },
    {
      id: 'handverk-design-vg1-1-7-def-2',
      type: 'definition',
      title: 'Art Nouveau',
      content: `Art Nouveau (ca. 1890-1910) var en internasjonal stilretning som hentet inspirasjon fra naturen. Kjennetegnes av organiske, bølgende linjer, blomster- og plantemotiver, og et ønske om å bryte ned skillet mellom kunst og håndverk.`,
    },
    {
      id: 'handverk-design-vg1-1-7-text-3',
      type: 'text',
      content: `**1800-tallet til tidlig 1900-tall**

**Historisme (ca. 1850-1900)**:
- Gjenbruk av tidligere stilarter
- Nygotikk, nyrenessanse, nybarokk
- Industriell produksjon av ornamenter
- Rikdom og status gjennom dekor

**Art Nouveau (ca. 1890-1910)**:
- Organiske, bølgende linjer
- Naturen som inspirasjon
- Kunst og håndverk forenes
- Helhetsdesign - alt fra bygninger til skjeer

**Arts and Crafts (ca. 1880-1920)**:
- Reaksjon mot industrialisering
- Håndverkets verdi fremheves
- Naturlige materialer og ærlig konstruksjon
- William Morris som frontfigur

**Art Deco (ca. 1920-1940)**:
- Geometriske former
- Luksus og modernitet
- Eksotiske inspirasjoner
- Symmetri og stilisering`,
    },
    {
      id: 'handverk-design-vg1-1-7-text-4',
      type: 'text',
      content: `**Modernisme og samtid**

**Funksjonalisme/Modernisme (ca. 1920-1970)**:
- "Form follows function"
- Enkle, rene linjer
- Ingen unødvendig dekor
- Nye materialer: stål, glass, betong
- Bauhaus-skolen som sentrum

**Skandinavisk design (ca. 1950-)**:
- Kombinasjon av funksjon og estetikk
- Naturlige materialer, spesielt tre
- Demokratisk design - godt design for alle
- Arne Jacobsen, Hans Wegner, Alvar Aalto

**Postmodernisme (ca. 1970-1990)**:
- Reaksjon mot modernismens renhet
- Historiske referanser og ironi
- Farger og ornamenter
- Memphis-gruppen

**Samtidsdesign**:
- Bærekraft og miljøbevissthet
- Teknologi og tradisjon
- Globale inspirasjoner
- Personlig uttrykk og mangfold`,
    },
    {
      id: 'handverk-design-vg1-1-7-text-5',
      type: 'text',
      content: `**Norske håndverkstradisjoner**

**Rosemaling**:
- Dekorativ malingsteknikk fra 1700-tallet
- Regionale stiler: Telemark, Hallingdal, Rogaland
- Akantusranker, blomster, C- og S-kurver
- Brukt på møbler, vegger og gjenstander

**Treskjæring**:
- Lang tradisjon i Norge
- Dyreornamenter fra vikingtid
- Karveskurd og relieffskjæring
- Brukt på stavkirker, møbler, bruksgjenstander

**Tekstiltradisjoner**:
- Bunader med regionale særtrekk
- Åkler og tepper
- Billedvev og gobelin
- Strikking med tradisjonelle mønstre

**Sølvsmie**:
- Sølje og bunadsølv
- Dråpeformer og filigran
- Regionale tradisjoner
- Samisk sølvsmie (risku)`,
    },
    {
      id: 'handverk-design-vg1-1-7-example-1',
      type: 'example',
      title: 'Historisk inspirasjon i moderne design',
      content: `Mange moderne designere henter inspirasjon fra historien:

**Skandinavisk design og Arts and Crafts**:
Hans Wegners stoler kombinerer Arts and Crafts-bevegelsens respekt for håndverket med modernismens enkle linjer.

**Art Nouveau i samtidig smykkedesign**:
Mange smykkedesignere bruker Art Nouveaus organiske linjer og naturmotiver i moderne tolkninger.

**Norsk tradisjon i produktdesign**:
Designere som Peter Opsvik henter inspirasjon fra norske tradisjoner i ergonomiske møbler.

**Hvordan bruke historien**:
1. Studer kjennetegnene ved en stilperiode
2. Identifiser elementer som kan fungere i dag
3. Tilpass til moderne materialer og behov
4. Skap noe nytt som refererer til tradisjonen`,
    },
    {
      id: 'handverk-design-vg1-1-7-tip-1',
      type: 'tip',
      title: 'Besøk museum og utstillinger',
      content: `Den beste måten å lære stilhistorie på er å se originale gjenstander. Besøk lokale museer, kunstutstillinger og antikvitetsbutikker. Legg merke til materialer, teknikker og detaljer som du ikke kan se på bilder. Ta skisser og notater til inspirasjon.`,
    },
    {
      id: 'handverk-design-vg1-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken stilperiode kjennetegnes av organiske, bølgende linjer inspirert av naturen?',
        options: [
          'Barokk',
          'Art Nouveau',
          'Funksjonalisme',
          'Art Deco',
        ],
        correctAnswer: 1,
        solution: 'Art Nouveau (ca. 1890-1910) kjennetegnes av organiske, bølgende linjer hentet fra naturen. Blomster, planter og insekter var vanlige motiver, og stilen søkte å forene kunst og håndverk.',
      },
    },
    {
      id: 'handverk-design-vg1-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hovedkjennetegnene ved skandinavisk design.',
        solution: 'Skandinavisk design kjennetegnes av kombinasjonen av funksjon og estetikk, bruk av naturlige materialer (særlig tre), enkle og rene linjer, og ideen om demokratisk design - at godt design skal være tilgjengelig for alle. Kjente representanter er Arne Jacobsen, Hans Wegner og Alvar Aalto.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva var Arts and Crafts-bevegelsens hovedbudskap?',
        options: [
          'At industriproduksjon er bedre enn håndverk',
          'At håndverkets verdi må fremheves som motreaksjon til industrialisering',
          'At ornamenter er uviktige i design',
          'At bare antikkens stil er verdifull',
        ],
        correctAnswer: 1,
        solution: 'Arts and Crafts-bevegelsen var en reaksjon mot industrialiseringen og fremhevet håndverkets verdi. De mente at masseproduksjon førte til dårlig kvalitet og fremmedgjøring, og at håndlagde produkter med naturlige materialer var bedre.',
      },
    },
    {
      id: 'handverk-design-vg1-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg en norsk håndverkstradisjon (rosemaling, treskjæring, tekstil eller sølvsmie) og beskriv dens kjennetegn og historiske betydning.',
        solution: 'Svaret bør beskrive den valgte tradisjonens typiske kjennetegn (teknikker, motiver, materialer), regionale variasjoner, historisk opprinnelse, og kulturell betydning. Det bør også nevne hvordan tradisjonen lever videre i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Stilhistorie', definition: 'Studiet av hvordan estetiske idealer har endret seg gjennom tidene' },
    { term: 'Antikken', definition: 'Den greske og romerske kulturen, ca. 800 f.Kr. - 500 e.Kr.' },
    { term: 'Art Nouveau', definition: 'Stilretning ca. 1890-1910 med organiske linjer inspirert av naturen' },
    { term: 'Arts and Crafts', definition: 'Bevegelse som fremhevet håndverkets verdi som reaksjon mot industrialisering' },
    { term: 'Funksjonalisme', definition: 'Modernistisk retning der funksjonen bestemmer formen' },
    { term: 'Skandinavisk design', definition: 'Nordisk designtradisjon som kombinerer funksjon, estetikk og naturlige materialer' },
    { term: 'Rosemaling', definition: 'Norsk dekorativ malingstradisjon med akantusranker og blomster' },
  ],
};

// ============================================================================
// Eksport-array for alle kapitler i Del 1
// ============================================================================

export const HANDVERK_DESIGN_VG1_DEL1_CHAPTERS = [
  CHAPTER_HANDVERK_DESIGN_VG1_1_1,
  CHAPTER_HANDVERK_DESIGN_VG1_1_2,
  CHAPTER_HANDVERK_DESIGN_VG1_1_3,
  CHAPTER_HANDVERK_DESIGN_VG1_1_4,
  CHAPTER_HANDVERK_DESIGN_VG1_1_5,
  CHAPTER_HANDVERK_DESIGN_VG1_1_6,
  CHAPTER_HANDVERK_DESIGN_VG1_1_7,
];
