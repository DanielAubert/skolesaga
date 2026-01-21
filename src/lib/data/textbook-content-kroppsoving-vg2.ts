/**
 * Kroppsøving VG2 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kroppsøving på VG2
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Avansert treningslære
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_1: TextbookChapter = {
  id: 'kroppsoving-vg2-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '1',
  title: 'Avansert treningslære',
  description: 'Fordyp deg i treningsprinsipper og metoder for å optimalisere trening.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke kunnskap om treningsprinsipper til å planlegge målrettet trening',
    'forstå sammenhengen mellom belastning, restitusjon og tilpasning',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-1-intro',
      type: 'text',
      content: `På VG2 bygger vi videre på grunnleggende treningslære og går dypere inn i avanserte treningsmetoder og prinsipper. Du skal lære å forstå hvordan ulike treningsvariabler påvirker kroppen og hvordan du kan optimalisere treningen for ulike mål.`,
    },
    {
      id: 'kroppsoving-vg2-1-def-1',
      type: 'definition',
      title: 'Treningsadaptasjon',
      content: `Treningsadaptasjon er kroppens tilpasning til gjentatt treningsbelastning. Kroppen endrer seg strukturelt og funksjonelt for å håndtere belastningen mer effektivt.`,
    },
    {
      id: 'kroppsoving-vg2-1-text-1',
      type: 'text',
      content: `**Treningsmetoder for styrke**

**Maksimal styrke**:
- 1-5 repetisjoner per sett
- 85-100% av 1RM
- Lange pauser (3-5 min)
- Rekrutterer flest motoriske enheter

**Hypertrofi (muskelvekst)**:
- 6-12 repetisjoner per sett
- 65-85% av 1RM
- Moderate pauser (60-90 sek)
- Metabolsk stress og mekanisk spenning

**Muskulær utholdenhet**:
- 15+ repetisjoner per sett
- Under 65% av 1RM
- Korte pauser (30-60 sek)
- Lokal utholdenhetskapasitet`,
    },
    {
      id: 'kroppsoving-vg2-1-text-2',
      type: 'text',
      content: `**Treningsmetoder for utholdenhet**

**Kontinuerlig trening**:
- Langkjøring: Lav intensitet, lang varighet
- Tempokjøring: Moderat-høy intensitet

**Intervalltrening**:
- Korte intervaller: 15-60 sek, høy intensitet
- Lange intervaller: 3-8 min, moderat-høy intensitet
- Pauser tilpasset arbeidsperioden

**Terskeltrening**:
- Rundt anaerob terskel
- Forbedrer melkesyretoleranse
- Effektivt for konkurranseutøvere

**Fartlek**:
- Varierende intensitet i terrenget
- Kombinerer ulike energisystemer
- Naturlig og variert`,
    },
    {
      id: 'kroppsoving-vg2-1-def-2',
      type: 'definition',
      title: 'Anaerob terskel',
      content: `Anaerob terskel er intensitetsnivået der melkesyreproduksjonen overstiger kroppens evne til å fjerne den. Over denne terskelen akkumuleres melkesyre raskt.`,
    },
    {
      id: 'kroppsoving-vg2-1-text-3',
      type: 'text',
      content: `**Treningsbelastning og dose-respons**

**Dose-respons-forholdet**:
- For lite = ingen effekt
- Optimal dose = best fremgang
- For mye = overtrenning/skade

**Faktorer som påvirker optimal dose**:
- Treningsbakgrunn og erfaring
- Alder og kjønn
- Genetikk og fibertypesammensetning
- Søvn, ernæring og stress
- Andre belastninger i livet

**Monitorering av belastning**:
- Ytre belastning: Vekt, distanse, tid
- Indre belastning: Puls, opplevd anstrengelse
- Wellness: Søvn, humør, energi`,
    },
    {
      id: 'kroppsoving-vg2-1-tip-1',
      type: 'tip',
      title: 'Treningsrespons varierer',
      content: `Alle reagerer ulikt på trening. Noen er "høyresponderer" som får stor effekt av lite trening, mens andre trenger mer for samme fremgang. Lær din egen kropp å kjenne.`,
    },
    {
      id: 'kroppsoving-vg2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er treningsadaptasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av treningsadaptasjon.',
            solution: 'Kroppens tilpasning til gjentatt treningsbelastning',
            multipleChoiceOptions: [
              'Kroppens tilpasning til gjentatt treningsbelastning',
              'En type treningsutstyr',
              'Hvordan man tilpasser øvelser',
              'Treningsprogram for nybegynnere',
            ],
          },
        ],
        solution: 'Treningsadaptasjon beskriver hvordan kroppen strukturelt og funksjonelt tilpasser seg for å håndtere treningsbelastning bedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken treningsmetode er best for muskelvekst (hypertrofi)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig treningsprotokoll for hypertrofi.',
            solution: '6-12 repetisjoner med 65-85% av 1RM',
            multipleChoiceOptions: [
              '6-12 repetisjoner med 65-85% av 1RM',
              '1-5 repetisjoner med maksimal vekt',
              '20+ repetisjoner med lett vekt',
              'Bare utholdenhetstrening',
            ],
          },
        ],
        solution: 'Hypertrofi oppnås best med moderat repetisjon og vekt, som gir både metabolsk stress og mekanisk spenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er anaerob terskel?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar begrepet anaerob terskel.',
            solution: 'Intensitetsnivået der melkesyreproduksjonen overstiger fjerningsevnen',
            multipleChoiceOptions: [
              'Intensitetsnivået der melkesyreproduksjonen overstiger fjerningsevnen',
              'Den laveste intensiteten du kan trene på',
              'Maksimal puls',
              'Hvilepuls',
            ],
          },
        ],
        solution: 'Ved anaerob terskel produseres melkesyre like fort som den fjernes. Over denne terskelen akkumuleres melkesyre og utmattelse inntreffer raskere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er fartlek?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv treningsmetoden fartlek.',
            solution: 'Varierende intensitet i naturlig terreng',
            multipleChoiceOptions: [
              'Varierende intensitet i naturlig terreng',
              'Bare rolig jogging',
              'Maksimal sprint',
              'Styrketrening i sal',
            ],
          },
        ],
        solution: 'Fartlek betyr "fartlek" (svensk for "fartslek") og innebærer naturlig variasjon i tempo basert på terreng og følelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor varierer treningsrespons mellom personer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg faktorer som påvirker treningsrespons.',
            solution: 'Genetikk, treningsbakgrunn, alder, søvn og ernæring',
            multipleChoiceOptions: [
              'Genetikk, treningsbakgrunn, alder, søvn og ernæring',
              'Bare viljen til å trene',
              'Utstyret man bruker',
              'Været',
            ],
          },
        ],
        solution: 'Treningsrespons påvirkes av mange faktorer, inkludert genetiske forutsetninger, tidligere erfaring, livsstil og restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Design et styrketreningsprogram for hypertrofi med 4 øvelser.',
        solution: 'Eksempel: 1) Knebøy 4x8, 2) Benkpress 4x10, 3) Roing 3x10, 4) Utfall 3x12. Alle med 70-80% av 1RM og 60-90 sek pause.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Periodisering og treningsplanlegging
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_2: TextbookChapter = {
  id: 'kroppsoving-vg2-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '2',
  title: 'Periodisering og treningsplanlegging',
  description: 'Lær å strukturere trening over tid for optimal utvikling og prestasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge trening i ulike tidsperspektiver',
    'forstå prinsipper for periodisering',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-2-intro',
      type: 'text',
      content: `Periodisering handler om å strukturere trening over tid for å oppnå best mulig utvikling. Ved å variere belastning, volum og intensitet systematisk kan du unngå platåer og optimalisere fremgangen.`,
    },
    {
      id: 'kroppsoving-vg2-2-def-1',
      type: 'definition',
      title: 'Periodisering',
      content: `Periodisering er en systematisk planlegging av trening der treningsvariabler som volum, intensitet og type trening varieres over tid for å oppnå optimal tilpasning og prestasjon.`,
    },
    {
      id: 'kroppsoving-vg2-2-text-1',
      type: 'text',
      content: `**Tidsperspektiver i periodisering**

**Makrosyklus (6-12 måneder)**:
- Hele sesong eller år
- Overordnede mål og faser
- Konkurransesesong vs. oppbyggingsfase

**Mesosyklus (3-6 uker)**:
- Treningsblokker med spesifikt fokus
- Grunnfase, konkurransefase, restitusjonsfase
- Evaluering og justering

**Mikrosyklus (1 uke)**:
- Ukentlig treningsplan
- Balanse mellom belastning og hvile
- Praktisk gjennomføring

**Treningsøkt**:
- Den enkelte treningen
- Oppvarming, hoveddel, avslutning`,
    },
    {
      id: 'kroppsoving-vg2-2-text-2',
      type: 'text',
      content: `**Klassisk periodisering**

**Forberedelsesfasen**:
- Generell fysisk utvikling
- Høyt volum, lav intensitet
- Bygge grunnlag

**Grunnfasen**:
- Mer spesifikk trening
- Moderat volum og intensitet
- Øke kapasitet

**Konkurransefasen**:
- Spesifikk trening
- Lavt volum, høy intensitet
- Toppform til konkurranse

**Overgangsfasen**:
- Aktiv hvile
- Mental og fysisk restitusjon
- Forberede ny syklus`,
    },
    {
      id: 'kroppsoving-vg2-2-def-2',
      type: 'definition',
      title: 'Tapering',
      content: `Tapering er en planlagt reduksjon i treningsbelastning før konkurranse for å oppnå optimal prestasjon. Typisk reduseres volum mens intensitet opprettholdes.`,
    },
    {
      id: 'kroppsoving-vg2-2-text-3',
      type: 'text',
      content: `**Moderne periodiseringsmodeller**

**Blokk-periodisering**:
- Konsentrerte treningsblokker
- Fokus på én egenskap om gangen
- Effektivt for erfarne utøvere

**Bølge-periodisering**:
- Daglig eller ukentlig variasjon
- Veksler mellom styrke, kraft, utholdenhet
- God variasjon og restitusjon

**Ikke-lineær periodisering**:
- Variasjon fra økt til økt
- Tilpasses dagsform og livssituasjon
- Fleksibelt og praktisk

**Individuell tilpasning**:
- Ingen modell passer alle
- Kombiner prinsipper etter behov
- Juster basert på respons`,
    },
    {
      id: 'kroppsoving-vg2-2-tip-1',
      type: 'tip',
      title: 'Deload-uke',
      content: `Planlegg en lettere treningsuke (deload) hver 3-6 uke. Reduser volum eller intensitet med 40-60% for å la kroppen restituere og tilpasse seg.`,
    },
    {
      id: 'kroppsoving-vg2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er periodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av periodisering.',
            solution: 'Systematisk planlegging av trening der variabler varieres over tid',
            multipleChoiceOptions: [
              'Systematisk planlegging av trening der variabler varieres over tid',
              'Å trene samme øvelse hver dag',
              'En type intervalltrening',
              'Hvile mellom sett',
            ],
          },
        ],
        solution: 'Periodisering sikrer at treningen tilpasses over tid for optimal fremgang og unngåelse av overtrenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor lang er typisk en mesosyklus?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig lengde på mesosyklus.',
            solution: '3-6 uker',
            multipleChoiceOptions: [
              '3-6 uker',
              '1 dag',
              '1 år',
              '10 år',
            ],
          },
        ],
        solution: 'En mesosyklus er typisk 3-6 uker og representerer en treningsblokk med spesifikt fokus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er tapering?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar begrepet tapering.',
            solution: 'Planlagt reduksjon i treningsbelastning før konkurranse',
            multipleChoiceOptions: [
              'Planlagt reduksjon i treningsbelastning før konkurranse',
              'Å øke treningen før konkurranse',
              'En type styrkeøvelse',
              'Oppvarming før trening',
            ],
          },
        ],
        solution: 'Tapering gir kroppen tid til å restituere og superkompenasere før viktige konkurranser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner konkurransefasen i klassisk periodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av konkurransefasen.',
            solution: 'Lavt volum, høy intensitet, spesifikk trening',
            multipleChoiceOptions: [
              'Lavt volum, høy intensitet, spesifikk trening',
              'Høyt volum, lav intensitet',
              'Ingen trening',
              'Bare generell trening',
            ],
          },
        ],
        solution: 'I konkurransefasen reduseres volum for å spare energi, mens intensitet holdes høy for å vedlikeholde toppform.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er fordelen med bølge-periodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedfordelen med bølge-periodisering.',
            solution: 'Gir variasjon og god restitusjon mellom ulike treningstyper',
            multipleChoiceOptions: [
              'Gir variasjon og god restitusjon mellom ulike treningstyper',
              'Man trener mindre',
              'Det er enklere å planlegge',
              'Man trenger ikke variere',
            ],
          },
        ],
        solution: 'Bølge-periodisering veksler mellom ulike treningsfokus, noe som gir variasjon og tid til restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en 4-ukers mesosyklus med fokus på styrke.',
        solution: 'Eksempel: Uke 1-2: Høyt volum (4x10), Uke 3: Økt intensitet (4x6), Uke 4: Deload (3x8 med 60%). Progresjon i vekt gjennom perioden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Idrettspsykologi og mental trening
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_3: TextbookChapter = {
  id: 'kroppsoving-vg2-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '3',
  title: 'Idrettspsykologi og mental trening',
  description: 'Lær om psykologiske faktorer som påvirker prestasjon og hvordan du kan trene mentalt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå sammenhengen mellom psyke og prestasjon',
    'bruke mentale teknikker for å forbedre prestasjon',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-3-intro',
      type: 'text',
      content: `Idrettspsykologi handler om hvordan tanker, følelser og atferd påvirker prestasjon. Mental trening er like viktig som fysisk trening for å prestere optimalt, enten det gjelder konkurranseidrett eller personlige mål.`,
    },
    {
      id: 'kroppsoving-vg2-3-def-1',
      type: 'definition',
      title: 'Mental trening',
      content: `Mental trening er systematisk bruk av psykologiske teknikker for å forbedre prestasjon, øke motivasjon, håndtere press og utvikle mentale ferdigheter.`,
    },
    {
      id: 'kroppsoving-vg2-3-text-1',
      type: 'text',
      content: `**Motivasjon**

**Indre motivasjon**:
- Drives av glede og interesse
- Mestringsfølelse og utvikling
- Mer varig og stabil

**Ytre motivasjon**:
- Drives av belønning eller straff
- Premier, anerkjennelse, karakterer
- Kan underminere indre motivasjon

**Selvbestemmelsesteorien**:
- Autonomi: Følelse av valgfrihet
- Kompetanse: Følelse av mestring
- Tilhørighet: Følelse av fellesskap
- Disse behovene fremmer indre motivasjon`,
    },
    {
      id: 'kroppsoving-vg2-3-text-2',
      type: 'text',
      content: `**Mentale teknikker**

**Målsetting**:
- SMART-mål: Spesifikke, Målbare, Attraktive, Realistiske, Tidsbegrensede
- Prosessmål vs. resultatmål
- Kortsiktige og langsiktige mål

**Visualisering**:
- Se for deg vellykket utførelse
- Bruk alle sanser
- Tren nervebaner uten fysisk belastning

**Selvsnakk**:
- Indre dialog som påvirker prestasjon
- Bytt negative tanker med positive
- Bruk triggere ord og fraser

**Pusteøvelser**:
- Regulerer aktivering
- Roer ned ved nervøsitet
- Fokuserer oppmerksomheten`,
    },
    {
      id: 'kroppsoving-vg2-3-def-2',
      type: 'definition',
      title: 'Flow',
      content: `Flow er en mental tilstand der man er fullstendig oppslukt av aktiviteten. Kjennetegnes av intense fokus, tap av tidsoppfatning og opplevelse av kontroll.`,
    },
    {
      id: 'kroppsoving-vg2-3-text-3',
      type: 'text',
      content: `**Håndtering av press og nervøsitet**

**Aktiveringsregulering**:
- Optimal sone for prestasjon (IZOF)
- For høy aktivering = nervøsitet
- For lav aktivering = sløvhet

**Teknikker for å roe ned**:
- Dyp pusting
- Progressiv muskelavspenning
- Mindfulness og fokus

**Teknikker for å øke aktivering**:
- Energisk musikk
- Positiv selvsnakk
- Bevegelse og hopping

**Prestasjonsrutiner**:
- Faste forberedelsesrutiner
- Mentale triggere
- Reduserer usikkerhet`,
    },
    {
      id: 'kroppsoving-vg2-3-tip-1',
      type: 'tip',
      title: '4-7-8 pusteteknikk',
      content: `Pust inn i 4 sekunder, hold pusten i 7 sekunder, pust ut i 8 sekunder. Gjenta 3-4 ganger for å aktivere det parasympatiske nervesystemet og roe ned kroppen.`,
    },
    {
      id: 'kroppsoving-vg2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på indre og ytre motivasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Indre motivasjon kommer fra glede, ytre fra belønning',
            multipleChoiceOptions: [
              'Indre motivasjon kommer fra glede, ytre fra belønning',
              'De er det samme',
              'Indre motivasjon kommer fra andre',
              'Ytre motivasjon er alltid best',
            ],
          },
        ],
        solution: 'Indre motivasjon er selvdrevet og mer varig, mens ytre motivasjon avhenger av eksterne faktorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er visualisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar visualisering som mental teknikk.',
            solution: 'Å mentalt se for seg vellykket utførelse',
            multipleChoiceOptions: [
              'Å mentalt se for seg vellykket utførelse',
              'Å se på video av seg selv',
              'Å tegne bilder',
              'Å bruke briller',
            ],
          },
        ],
        solution: 'Visualisering trener nervebaner og forbereder kroppen mentalt på utførelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er flow?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv flow-tilstanden.',
            solution: 'En tilstand der man er fullstendig oppslukt av aktiviteten',
            multipleChoiceOptions: [
              'En tilstand der man er fullstendig oppslukt av aktiviteten',
              'Å være sliten',
              'En type trening',
              'Å trene med musikk',
            ],
          },
        ],
        solution: 'Flow kjennetegnes av intens fokus, tap av tidsoppfatning og følelse av kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva står SMART for i målsetting?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig betydning av SMART.',
            solution: 'Spesifikke, Målbare, Attraktive, Realistiske, Tidsbegrensede',
            multipleChoiceOptions: [
              'Spesifikke, Målbare, Attraktive, Realistiske, Tidsbegrensede',
              'Store, Morsomme, Andre, Raske, Tunge',
              'Små, Mange, Alle, Rike, Trege',
              'Spesielle, Middels, Aktive, Rare, Typiske',
            ],
          },
        ],
        solution: 'SMART-kriteriene hjelper med å sette konkrete og oppnåelige mål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan du håndtere nervøsitet før konkurranse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg effektive teknikker.',
            solution: 'Dyp pusting, positive selvsnakk og faste rutiner',
            multipleChoiceOptions: [
              'Dyp pusting, positive selvsnakk og faste rutiner',
              'Ignorere nervøsiteten',
              'Trene ekstra hardt',
              'Unngå å delta',
            ],
          },
        ],
        solution: 'Teknikker som regulerer aktivering og fokuserer oppmerksomheten hjelper med å håndtere press.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en prestasjonsrutine du kan bruke før en viktig hendelse.',
        solution: 'Eksempel: 1) 5 min dyp pusting, 2) Visualisere vellykket utførelse, 3) Positiv selvsnakk ("Jeg er klar"), 4) Fysisk aktivering med hopp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Prestasjon og mestring
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_4: TextbookChapter = {
  id: 'kroppsoving-vg2-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '4',
  title: 'Prestasjon og mestring',
  description: 'Forstå hva som påvirker prestasjon og hvordan du kan utvikle mestringsfølelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over egne prestasjoner og utvikling',
    'forstå faktorer som fremmer mestring',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-4-intro',
      type: 'text',
      content: `Prestasjon handler ikke bare om å vinne, men om å utvikle seg og mestre utfordringer. Ved å forstå hva som påvirker prestasjon kan du jobbe systematisk med å forbedre deg og oppleve mer mestring.`,
    },
    {
      id: 'kroppsoving-vg2-4-def-1',
      type: 'definition',
      title: 'Mestringsorientering',
      content: `Mestringsorientering er et fokus på personlig utvikling og læring fremfor sammenligning med andre. Målet er å bli bedre enn man var, ikke nødvendigvis bedre enn andre.`,
    },
    {
      id: 'kroppsoving-vg2-4-text-1',
      type: 'text',
      content: `**Faktorer som påvirker prestasjon**

**Fysiske faktorer**:
- Styrke, utholdenhet, hurtighet
- Koordinasjon og teknikk
- Søvn og restitusjon
- Ernæring og hydrering

**Psykiske faktorer**:
- Motivasjon og målsetting
- Selvtillit og mestringstro
- Fokus og konsentrasjon
- Stresshåndtering

**Sosiale faktorer**:
- Støtte fra omgivelsene
- Treningsmiljø og lagkamerater
- Trenerkompetanse
- Familiesituasjon

**Miljøfaktorer**:
- Fasiliteter og utstyr
- Økonomi
- Geografisk tilgang`,
    },
    {
      id: 'kroppsoving-vg2-4-text-2',
      type: 'text',
      content: `**Mestringsklima vs. prestasjonsklima**

**Mestringsklima**:
- Fokus på innsats og utvikling
- Alle får tilpassede utfordringer
- Feil ses som læringsmuligheter
- Samarbeid og støtte
- Fremmer indre motivasjon

**Prestasjonsklima**:
- Fokus på resultater og sammenligning
- De beste får mest oppmerksomhet
- Feil straffer seg
- Konkurranse internt
- Kan skape frykt og stress

**Optimal balanse**:
- Begge klimaer har sin plass
- Mestringsklima i trening
- Prestasjonsklima i konkurranse
- Tilpass etter individets modenhet`,
    },
    {
      id: 'kroppsoving-vg2-4-def-2',
      type: 'definition',
      title: 'Self-efficacy (mestringstro)',
      content: `Self-efficacy er troen på egen evne til å mestre en spesifikk oppgave eller situasjon. Høy mestringstro gir bedre prestasjon, utholdenhet og motivasjon.`,
    },
    {
      id: 'kroppsoving-vg2-4-text-3',
      type: 'text',
      content: `**Bygge mestringstro**

**Mestringserfaringer**:
- Den viktigste kilden
- Suksess bygger tro på egen evne
- Start med oppnåelige mål
- Bygg opp gradvis

**Rollemodeller**:
- Se andre lykkes
- Spesielt effektivt med lignende personer
- "Hvis de kan, kan jeg"

**Verbal overbevisning**:
- Oppmuntring fra andre
- Trenerens tro på utøveren
- Positiv selvsnakk

**Fysiologisk tilstand**:
- Tolkning av kroppssignaler
- Lær at nervøsitet er energi
- God fysisk form gir trygghet`,
    },
    {
      id: 'kroppsoving-vg2-4-tip-1',
      type: 'tip',
      title: 'Prosessfokus',
      content: `Fokuser på det du kan kontrollere: innsats, innstilling og forberedelse. Resultater avhenger av mange faktorer, men prosessen er din.`,
    },
    {
      id: 'kroppsoving-vg2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er mestringsorientering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Fokus på personlig utvikling fremfor sammenligning med andre',
            multipleChoiceOptions: [
              'Fokus på personlig utvikling fremfor sammenligning med andre',
              'Å alltid vinne',
              'Å sammenligne seg med andre',
              'Å unngå utfordringer',
            ],
          },
        ],
        solution: 'Mestringsorientering handler om å bli bedre enn man var, uavhengig av andres prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner et mestringsklima?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg kjennetegn på mestringsklima.',
            solution: 'Fokus på innsats, feil er læringsmuligheter, samarbeid',
            multipleChoiceOptions: [
              'Fokus på innsats, feil er læringsmuligheter, samarbeid',
              'Bare de beste får oppmerksomhet',
              'Streng konkurranse internt',
              'Resultater er alt som teller',
            ],
          },
        ],
        solution: 'Mestringsklima fremmer utvikling for alle og skaper trygghet til å prøve og feile.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er self-efficacy?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar begrepet self-efficacy.',
            solution: 'Troen på egen evne til å mestre en oppgave',
            multipleChoiceOptions: [
              'Troen på egen evne til å mestre en oppgave',
              'Fysisk styrke',
              'Å være selvopptatt',
              'En type trening',
            ],
          },
        ],
        solution: 'Self-efficacy påvirker hva vi tør å prøve, hvor mye innsats vi legger ned, og hvor lenge vi holder ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er den viktigste kilden til mestringstro?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste kilden.',
            solution: 'Mestringserfaringer - å lykkes med oppgaver',
            multipleChoiceOptions: [
              'Mestringserfaringer - å lykkes med oppgaver',
              'Ros fra andre',
              'Å se videoer',
              'Å lese om teknikk',
            ],
          },
        ],
        solution: 'Egne mestringserfaringer er den sterkeste kilden fordi du selv har bevist at du kan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke faktorer kan du selv kontrollere for bedre prestasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg faktorer du kan kontrollere.',
            solution: 'Innsats, innstilling, forberedelse og søvn',
            multipleChoiceOptions: [
              'Innsats, innstilling, forberedelse og søvn',
              'Været og motstanderne',
              'Dommernes avgjørelser',
              'Andres prestasjon',
            ],
          },
        ],
        solution: 'Ved å fokusere på det du kan kontrollere, reduserer du stress og øker prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv en mestringssituasjon fra ditt liv og hva som gjorde at du mestret det.',
        solution: 'Svar vil variere. Fokuser på forberedelse, innsats, støtte og egen utvikling gjennom prosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Skadeforebygging og rehabilitering
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_5: TextbookChapter = {
  id: 'kroppsoving-vg2-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '5',
  title: 'Skadeforebygging og rehabilitering',
  description: 'Lær hvordan du kan forebygge skader og håndtere rehabilitering etter skade.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå årsaker til idrettsskader',
    'bruke kunnskaper om kroppen til å forebygge skader',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-5-intro',
      type: 'text',
      content: `Skader er en del av idrett og fysisk aktivitet, men mange kan forebygges med riktig kunnskap og trening. Når skader først oppstår, er riktig håndtering avgjørende for rask og fullstendig rehabilitering.`,
    },
    {
      id: 'kroppsoving-vg2-5-def-1',
      type: 'definition',
      title: 'Idrettsskade',
      content: `En idrettsskade er en skade som oppstår i forbindelse med fysisk aktivitet eller idrett. Skader deles inn i akutte skader (plutselig) og belastningsskader (gradvis utvikling).`,
    },
    {
      id: 'kroppsoving-vg2-5-text-1',
      type: 'text',
      content: `**Typer idrettsskader**

**Akutte skader**:
- Oppstår plutselig
- Forstuing, brudd, muskelstrekk
- Ofte ved kollisjon eller feiltrinn
- Tydelig skademekanisme

**Belastningsskader**:
- Utvikles gradvis over tid
- Senebetennelse, stressbrudd
- For mye trening, for lite hvile
- Gjentagende overbelastning

**Vanlige skadeområder**:
- Kne: Korsbånd, menisk, patellasene
- Ankel: Overtråkk, akillessene
- Skulder: Rotatormansjett
- Rygg: Prolaps, muskelstrekk
- Lyske: Strekk, betennelse`,
    },
    {
      id: 'kroppsoving-vg2-5-text-2',
      type: 'text',
      content: `**Risikofaktorer for skade**

**Indre faktorer**:
- Tidligere skader
- Muskelsvakhet eller ubalanse
- Dårlig bevegelighet
- Alder og kjønn
- Anatomi (f.eks. beinlengde)

**Ytre faktorer**:
- Treningsbelastning (for mye, for fort)
- Utilstrekkelig oppvarming
- Dårlig utstyr eller underlag
- Været og forholdene
- Kontaktidretter

**Treningsrelaterte faktorer**:
- Manglende variasjon
- For lite restitusjon
- Dårlig teknikk
- Ignorering av varselsignaler`,
    },
    {
      id: 'kroppsoving-vg2-5-def-2',
      type: 'definition',
      title: 'PRICE-prinsippet',
      content: `PRICE står for Protection (beskyttelse), Rest (hvile), Ice (is), Compression (kompresjon) og Elevation (høyt leie). Dette er førstehjelp ved akutte skader.`,
    },
    {
      id: 'kroppsoving-vg2-5-text-3',
      type: 'text',
      content: `**Skadeforebygging**

**Oppvarming**:
- Øker blodsirkulasjon og temperatur
- Forbereder muskler og ledd
- Bør være spesifikk for aktiviteten
- 10-15 minutter før trening

**Styrketrening**:
- Sterkere muskler tåler mer
- Forebygg muskelubalanse
- Fokus på core og stabilitet
- Eksentrisk trening for sener

**Bevegelighet**:
- God leddutslag reduserer skaderisiko
- Dynamisk tøying før aktivitet
- Statisk tøying etter aktivitet
- Mobiliseringsøvelser

**Smart treningsøkning**:
- Følg 10%-regelen
- Lytt til kroppens signaler
- Planlegg restitusjonsperioder
- Unngå for mye, for fort`,
    },
    {
      id: 'kroppsoving-vg2-5-warning-1',
      type: 'warning',
      title: 'Varselsignaler',
      content: `Smerte som vedvarer, hevelse, redusert funksjon eller smerte som øker under aktivitet er varselsignaler. Stopp trening og oppsøk helsepersonell hvis symptomene fortsetter.`,
    },
    {
      id: 'kroppsoving-vg2-5-text-4',
      type: 'text',
      content: `**Rehabilitering etter skade**

**Faser i rehabilitering**:
1. Akuttfase: Hvile, redusere hevelse
2. Mobiliseringsfase: Forsiktig bevegelse
3. Styrkefase: Gjenvinne styrke
4. Funksjonsfase: Idrettsspesifikk trening
5. Return to sport: Gradvis tilbake til full aktivitet

**Prinsipper**:
- Følg medisinsk råd
- Vær tålmodig - skyndt deg sakte
- Bygg opp gradvis
- Test funksjon før full trening
- Forebygg nye skader`,
    },
    {
      id: 'kroppsoving-vg2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på akutte skader og belastningsskader?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Akutte skader oppstår plutselig, belastningsskader utvikles gradvis',
            multipleChoiceOptions: [
              'Akutte skader oppstår plutselig, belastningsskader utvikles gradvis',
              'De er det samme',
              'Belastningsskader er alvorligere',
              'Akutte skader tar lengre tid å heles',
            ],
          },
        ],
        solution: 'Akutte skader har en tydelig skademekanisme, mens belastningsskader skyldes gjentatt overbelastning over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva står PRICE for?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig betydning.',
            solution: 'Protection, Rest, Ice, Compression, Elevation',
            multipleChoiceOptions: [
              'Protection, Rest, Ice, Compression, Elevation',
              'Pain, Running, Injury, Care, Exercise',
              'Press, Rotate, Immobilize, Cool, Extend',
              'Push, Relax, Inspect, Control, Elevate',
            ],
          },
        ],
        solution: 'PRICE er grunnleggende førstehjelp ved akutte skader og reduserer hevelse og videre skade.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er oppvarming viktig for skadeforebygging?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnen.',
            solution: 'Øker blodsirkulasjon og forbereder muskler og ledd',
            multipleChoiceOptions: [
              'Øker blodsirkulasjon og forbereder muskler og ledd',
              'Det er en regel',
              'For å bli sliten',
              'Det er ikke viktig',
            ],
          },
        ],
        solution: 'Oppvarming øker temperaturen i muskler og ledd, gjør vevet mer elastisk og reduserer skaderisiko.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er 10%-regelen?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar 10%-regelen.',
            solution: 'Ikke øk treningsbelastning med mer enn 10% per uke',
            multipleChoiceOptions: [
              'Ikke øk treningsbelastning med mer enn 10% per uke',
              'Tren 10% av tiden',
              'Hvil 10% av treningen',
              'Bruk 10% av maksimal kraft',
            ],
          },
        ],
        solution: '10%-regelen hjelper med gradvis progresjon og forebygger belastningsskader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke varselsignaler bør få deg til å stoppe trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg viktige varselsignaler.',
            solution: 'Vedvarende smerte, hevelse og smerte som øker under aktivitet',
            multipleChoiceOptions: [
              'Vedvarende smerte, hevelse og smerte som øker under aktivitet',
              'Å bli svett',
              'Å puste tungt',
              'Stølhet dagen etter',
            ],
          },
        ],
        solution: 'Disse signalene indikerer at noe er galt og kroppen trenger hvile eller medisinsk vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag et skadeforebyggende program med 5 øvelser.',
        solution: 'Eksempel: 1) Core-stabilitet (planke), 2) Balanse på ett bein, 3) Knebøy for lår/hofte, 4) Nordisk hamstring curl, 5) Skulder rotatormansjett-øvelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Alternative treningsformer
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_6: TextbookChapter = {
  id: 'kroppsoving-vg2-6',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '6',
  title: 'Alternative treningsformer',
  description: 'Utforsk ulike treningsformer utover tradisjonell idrett og styrketrening.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske ulike bevegelsesaktiviteter',
    'vurdere treningsformer ut fra egne interesser og mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-6-intro',
      type: 'text',
      content: `Det finnes mange måter å være fysisk aktiv på utover tradisjonell idrett. Alternative treningsformer kan gi variasjon, nye utfordringer og treffe andre interesser. Målet er å finne aktiviteter du trives med og kan fortsette med hele livet.`,
    },
    {
      id: 'kroppsoving-vg2-6-def-1',
      type: 'definition',
      title: 'Funksjonell trening',
      content: `Funksjonell trening er øvelser som etterligner naturlige bevegelsesmønstre og trener kroppen til å fungere bedre i dagliglivet og idrett. Fokus på sammensatte bevegelser fremfor isolerte muskler.`,
    },
    {
      id: 'kroppsoving-vg2-6-text-1',
      type: 'text',
      content: `**Yoga og mindfulness-basert trening**

**Yoga**:
- Kombinerer fysiske stillinger, pust og meditasjon
- Forbedrer bevegelighet og balanse
- Reduserer stress og øker kroppsbevisshet
- Mange stiler: Hatha, Vinyasa, Yin, Power

**Pilates**:
- Fokus på core-stabilitet
- Kontrollerte, presise bevegelser
- God for holdning og rygg
- Kan gjøres med eller uten utstyr

**Tai Chi**:
- Langsom, flytende bevegelse
- Meditasjon i bevegelse
- Forbedrer balanse og koordinasjon
- Lavt intensitetsnivå`,
    },
    {
      id: 'kroppsoving-vg2-6-text-2',
      type: 'text',
      content: `**Moderne treningsformer**

**CrossFit**:
- Høyintensiv, variert trening
- Kombinerer styrke, utholdenhet og gymnastikk
- Fellesskapsfokus
- Skalerbart til alle nivåer

**HIIT (High-Intensity Interval Training)**:
- Korte, intense arbeidsperioder
- Effektivt på kort tid
- Forbrenner mye kalorier
- Krever god grunnform

**Calisthenics**:
- Kroppsvektstrening
- Øvelser som push-ups, pull-ups, dips
- Utvikler styrke og kontroll
- Kan gjøres hvor som helst

**Parkour/Freerunning**:
- Effektiv forflytning i miljøet
- Hopping, klatring, ruller
- Utvikler styrke og koordinasjon
- Kreativitet og problemløsning`,
    },
    {
      id: 'kroppsoving-vg2-6-text-3',
      type: 'text',
      content: `**Vannbaserte aktiviteter**

**Svømming**:
- Trener hele kroppen
- Skånsomt for ledd
- God for rehabilitering
- Livsviktig ferdighet

**Vannaerobic**:
- Trening i vann med motstand
- Lavt støt, høy effekt
- Passer alle aldre

**SUP (Stand Up Paddle)**:
- Balanse og core-trening
- Naturopplevelse
- Rolig eller intensiv

**Surfing/Kitesurfing**:
- Balanse og styrke
- Krever spesifikke forhold
- Sterk livsstilsaktivitet`,
    },
    {
      id: 'kroppsoving-vg2-6-tip-1',
      type: 'tip',
      title: 'Finn din greie',
      content: `Prøv ulike aktiviteter for å finne det som passer deg. Den beste treningen er den du faktisk gjør - så velg noe du liker og kan fortsette med.`,
    },
    {
      id: 'kroppsoving-vg2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er funksjonell trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Øvelser som etterligner naturlige bevegelsesmønstre',
            multipleChoiceOptions: [
              'Øvelser som etterligner naturlige bevegelsesmønstre',
              'Bare maskintrening',
              'Trening uten bevegelse',
              'Bare utholdenhetstrening',
            ],
          },
        ],
        solution: 'Funksjonell trening fokuserer på sammensatte bevegelser som er relevante for dagligliv og idrett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er hovedfokuset i pilates?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedfokus i pilates.',
            solution: 'Core-stabilitet og kontrollerte bevegelser',
            multipleChoiceOptions: [
              'Core-stabilitet og kontrollerte bevegelser',
              'Maksimal styrke',
              'Høy puls',
              'Sprint',
            ],
          },
        ],
        solution: 'Pilates fokuserer på å styrke kjernemuskulaturen med presise, kontrollerte bevegelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner HIIT-trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv HIIT.',
            solution: 'Korte, intense arbeidsperioder vekslet med hvile',
            multipleChoiceOptions: [
              'Korte, intense arbeidsperioder vekslet med hvile',
              'Lang, rolig jogging',
              'Bare styrketrening',
              'Bare tøying',
            ],
          },
        ],
        solution: 'HIIT gir høy treningseffekt på kort tid gjennom intense intervaller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er svømming en god treningsform?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg fordeler med svømming.',
            solution: 'Trener hele kroppen og er skånsomt for ledd',
            multipleChoiceOptions: [
              'Trener hele kroppen og er skånsomt for ledd',
              'Det er enkelt å lære',
              'Man blir ikke svett',
              'Det krever ikke utstyr',
            ],
          },
        ],
        solution: 'Vannet gir motstand uten støtbelastning, noe som gjør svømming egnet for de fleste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er calisthenics?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv calisthenics.',
            solution: 'Styrketrening med kroppsvekt',
            multipleChoiceOptions: [
              'Styrketrening med kroppsvekt',
              'Trening med vekter',
              'Bare kardio',
              'En type dans',
            ],
          },
        ],
        solution: 'Calisthenics bruker kroppens egen vekt som motstand i øvelser som push-ups og pull-ups.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg en alternativ treningsform og beskriv hvordan du vil prøve den.',
        solution: 'Svar vil variere. Inkluder hva du vil prøve, hvorfor det interesserer deg, og hvordan du praktisk kan komme i gang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Friluftsliv og ekspedisjon
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_7: TextbookChapter = {
  id: 'kroppsoving-vg2-7',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '7',
  title: 'Friluftsliv og ekspedisjon',
  description: 'Utvikle ferdigheter for lengre turer og ekspedisjoner i naturen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og gjennomføre lengre turer i naturen',
    'bruke kunnskap om sikkerhet og bærekraft i friluftsliv',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-7-intro',
      type: 'text',
      content: `Friluftsliv gir unike muligheter for fysisk aktivitet, naturopplevelser og personlig utvikling. På VG2 tar vi steget videre fra dagstur til lengre ekspedisjoner med overnatting og mer krevende forhold.`,
    },
    {
      id: 'kroppsoving-vg2-7-def-1',
      type: 'definition',
      title: 'Ekspedisjon',
      content: `En ekspedisjon er en lengre, planlagt tur til natur eller villmark med spesifikke mål. Krever grundig forberedelse, riktig utstyr og ferdigheter til å håndtere uforutsette situasjoner.`,
    },
    {
      id: 'kroppsoving-vg2-7-text-1',
      type: 'text',
      content: `**Planlegging av lengre turer**

**Ruteplanlegging**:
- Studer kart og terreng
- Vurder avstand, høydemeter og vanskelighetsgrad
- Planlegg realistiske dagsetapper
- Identifiser muligheter for overnatting
- Ha alternative ruter

**Værforhold**:
- Sjekk værvarsel grundig
- Forstå lokale værfenomener
- Ha plan for dårlig vær
- Kjenn til farlige forhold

**Tidsbruk**:
- Beregn gangtid (Naismiths regel)
- Legg inn pauser og marginer
- Planlegg for kortere dager ved tung sekk
- Vurder dagslyslengde`,
    },
    {
      id: 'kroppsoving-vg2-7-text-2',
      type: 'text',
      content: `**Utstyr for ekspedisjon**

**De 10 essensielle**:
1. Navigasjon: Kart, kompass, GPS
2. Sollys/Lys: Hodelykt med ekstra batterier
3. Beskyttelse: Solbriller, solkrem
4. Førstehjelp: Komplett førstehjelpsutstyr
5. Kniv/Verktøy: Multiverktøy
6. Ild: Fyrstikker, lighter i vanntett beholder
7. Ly: Nødbivy eller vindjakke
8. Mat: Ekstra rasjon
9. Vann: Nok drikke + rensemulighet
10. Ekstra klær: For endrede forhold

**Pakking**:
- Sekk tilpasset turlengde (50-70L)
- Tunge ting nær rygg og skulderblad
- Ofte brukte ting lett tilgjengelig
- Vanntett pakking`,
    },
    {
      id: 'kroppsoving-vg2-7-def-2',
      type: 'definition',
      title: 'Leave No Trace',
      content: `Leave No Trace (sett ingen spor) er prinsipper for bærekraftig friluftsliv. Målet er å minimere påvirkningen på naturen slik at den bevares for fremtidige generasjoner.`,
    },
    {
      id: 'kroppsoving-vg2-7-text-3',
      type: 'text',
      content: `**Sikkerhet og beredskap**

**Kommunikasjon**:
- Informer andre om turplanen
- Medbringe kommunikasjonsutstyr
- Kjenn nødnummer (113 akutt)
- Varsle ved endringer

**Navigasjon**:
- Kunne bruke kart og kompass
- GPS som supplement, ikke erstatning
- Kjenn igjen terreng og landemerker
- Øv navigasjon i trygge omgivelser

**Førstehjelp i felt**:
- Grunnleggende livreddende førstehjelp
- Behandle vanlige skader
- Hypotermi og dehydrering
- Vite når man må avbryte

**Gruppedynamikk**:
- Felles tempo etter svakeste
- Kommuniser åpent om form
- Del på oppgaver
- Ta vare på hverandre`,
    },
    {
      id: 'kroppsoving-vg2-7-tip-1',
      type: 'tip',
      title: 'Naismiths regel',
      content: `Beregn gangtid: 4-5 km/t på flat mark + 1 time per 300 høydemeter. Juster for terreng, vær og sekkevekt. Legg til pauser på toppen av dette.`,
    },
    {
      id: 'kroppsoving-vg2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de 10 essensielle for tur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva som inngår i de 10 essensielle.',
            solution: 'Navigasjon, lys, førstehjelp, ly, mat, vann, ekstra klær',
            multipleChoiceOptions: [
              'Navigasjon, lys, førstehjelp, ly, mat, vann, ekstra klær',
              'Bare mat og vann',
              'Telefon og kredittkort',
              'Bare kart',
            ],
          },
        ],
        solution: 'De 10 essensielle dekker grunnleggende behov for sikkerhet og overlevelse på tur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr Leave No Trace?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar prinsippet Leave No Trace.',
            solution: 'Å minimere påvirkningen på naturen',
            multipleChoiceOptions: [
              'Å minimere påvirkningen på naturen',
              'Å gå uten spor i snøen',
              'Å ikke ta bilder',
              'Å gå raskest mulig',
            ],
          },
        ],
        solution: 'Leave No Trace handler om å ta vare på naturen ved å ikke etterlate søppel, respektere dyreliv og velge riktig leirplass.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan beregner du gangtid med Naismiths regel?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beregning.',
            solution: '4-5 km/t + 1 time per 300 høydemeter',
            multipleChoiceOptions: [
              '4-5 km/t + 1 time per 300 høydemeter',
              'Bare kilometer delt på 10',
              'Høydemeter delt på 100',
              'Alltid 2 timer',
            ],
          },
        ],
        solution: 'Naismiths regel gir et utgangspunkt som må justeres for terreng, vær og egen form.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor skal man informere andre om turplanen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnen.',
            solution: 'For at noen kan varsle hvis du ikke kommer tilbake som planlagt',
            multipleChoiceOptions: [
              'For at noen kan varsle hvis du ikke kommer tilbake som planlagt',
              'Fordi det er høflig',
              'For å skryte av turen',
              'Det er ikke nødvendig',
            ],
          },
        ],
        solution: 'Ved ulykker eller forsinkelser kan andre varsle redningstjenesten og oppgi hvor du planla å gå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er viktig ved pakking av sekk for lengre tur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg viktige prinsipper.',
            solution: 'Tunge ting nær rygg, ofte brukte ting tilgjengelig, vanntett pakking',
            multipleChoiceOptions: [
              'Tunge ting nær rygg, ofte brukte ting tilgjengelig, vanntett pakking',
              'Pakk alt på toppen',
              'Bruk plastsekk',
              'Pakk så mye som mulig',
            ],
          },
        ],
        solution: 'God pakking gir bedre balanse, letter tilgang til utstyr og beskytter mot vær.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg en 2-dagers tur med overnatting. Inkluder rute, utstyrsliste og tidsplan.',
        solution: 'Svar vil variere. Bør inkludere: Rutevalg med kart, beregnet gangtid, overnattingssted, komplett utstyrsliste og plan for matforsyning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Idrett, samfunn og etikk
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_8: TextbookChapter = {
  id: 'kroppsoving-vg2-8',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '8',
  title: 'Idrett, samfunn og etikk',
  description: 'Reflekter over idrettens rolle i samfunnet og etiske problemstillinger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over idrettens plass i samfunnet',
    'drøfte etiske problemstillinger i idrett',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-8-intro',
      type: 'text',
      content: `Idrett er mer enn bare fysisk aktivitet - det er en viktig del av samfunnet med økonomisk, sosial og kulturell betydning. Med denne betydningen følger også etiske utfordringer som må diskuteres og håndteres.`,
    },
    {
      id: 'kroppsoving-vg2-8-def-1',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play er respekt for regler, motstandere, dommere og seg selv. Det innebærer å konkurrere ærlig, akseptere nederlag og vinne med verdighet.`,
    },
    {
      id: 'kroppsoving-vg2-8-text-1',
      type: 'text',
      content: `**Idrettens rolle i samfunnet**

**Folkehelse**:
- Fysisk aktivitet forebygger sykdom
- Idrett som arena for aktivitet
- Tilrettelegging for alle
- Offentlig investering i anlegg

**Sosial integrasjon**:
- Møteplass på tvers av bakgrunn
- Inkludering av minoriteter
- Fellesskap og tilhørighet
- Frivillig innsats

**Identitet og kultur**:
- Nasjonalfølelse gjennom idrett
- Lokale tradisjoner
- Forbilder og helter
- Kulturelle arrangementer

**Økonomi**:
- Idrett som næring
- Arbeidsplasser
- Turisme og arrangementer
- Sponsorer og medier`,
    },
    {
      id: 'kroppsoving-vg2-8-text-2',
      type: 'text',
      content: `**Etiske utfordringer i idrett**

**Doping**:
- Brudd på fair play-prinsippet
- Helserisiko for utøvere
- Ødelegger tilliten til idretten
- Antidopingarbeid og testing

**Korrupsjon**:
- Kampfiksing og bestikkelser
- Maktmisbruk i organisasjoner
- Tildeling av mesterskap
- Åpenhet og kontroll

**Kommersialisering**:
- Pengenes innflytelse på idretten
- Ulikhet mellom idretter
- Utøvere som varer
- Balanse mellom idrett og business

**Trakassering og overgrep**:
- Maktforhold i idrett
- Nulltoleranse og varsling
- Treneransvar
- Forebygging og oppfølging`,
    },
    {
      id: 'kroppsoving-vg2-8-def-2',
      type: 'definition',
      title: 'Inkludering i idrett',
      content: `Inkludering handler om at alle skal ha mulighet til å delta i idrett uavhengig av kjønn, funksjonsevne, etnisitet, religion, seksuell orientering eller sosioøkonomisk bakgrunn.`,
    },
    {
      id: 'kroppsoving-vg2-8-text-3',
      type: 'text',
      content: `**Likestilling og mangfold**

**Kjønnslikestilling**:
- Historisk mannsdominans
- Økende deltakelse blant kvinner
- Lønnsforskjeller i proffidretten
- Mediedekning

**Paraidrett**:
- Idrett for personer med funksjonsnedsettelser
- Paralympics og integrasjon
- Tilrettelegging og tilgjengelighet
- Holdningsendring

**LHBT+ i idrett**:
- Utfordringer med åpenhet
- Betydning av forbilder
- Inkluderende miljøer
- Bekjempe diskriminering

**Sosioøkonomiske barrierer**:
- Kostbare idretter
- Utstyrskrav
- Geografiske forskjeller
- Tiltak for utjevning`,
    },
    {
      id: 'kroppsoving-vg2-8-tip-1',
      type: 'tip',
      title: 'Kritisk tenkning',
      content: `Vær kritisk til hvordan idrett fremstilles i media. Hvem tjener på historiene som fortelles? Hvilke stemmer blir hørt, og hvilke blir oversett?`,
    },
    {
      id: 'kroppsoving-vg2-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er fair play?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av fair play.',
            solution: 'Respekt for regler, motstandere og ærlig konkurranse',
            multipleChoiceOptions: [
              'Respekt for regler, motstandere og ærlig konkurranse',
              'Å alltid vinne',
              'Å unngå fysisk kontakt',
              'Å ikke protestere',
            ],
          },
        ],
        solution: 'Fair play handler om verdier og holdninger som gjør konkurranse meningsfull og rettferdig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er doping et etisk problem?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunner til at doping er problematisk.',
            solution: 'Brudd på fair play, helserisiko og ødelegger tilliten til idretten',
            multipleChoiceOptions: [
              'Brudd på fair play, helserisiko og ødelegger tilliten til idretten',
              'Det er bare ulovlig',
              'Det gjør deg raskere',
              'Alle gjør det',
            ],
          },
        ],
        solution: 'Doping underminerer idrettens grunnverdier og setter utøveres helse i fare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med inkludering i idrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv inkludering.',
            solution: 'At alle skal ha mulighet til å delta uavhengig av bakgrunn',
            multipleChoiceOptions: [
              'At alle skal ha mulighet til å delta uavhengig av bakgrunn',
              'At alle må være med',
              'At bare de beste får delta',
              'At alle får samme lønn',
            ],
          },
        ],
        solution: 'Inkludering handler om å fjerne barrierer og skape rom for alle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan bidrar idrett til folkehelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg helsegevinster fra idrett.',
            solution: 'Fysisk aktivitet forebygger sykdom og skaper sosiale møteplasser',
            multipleChoiceOptions: [
              'Fysisk aktivitet forebygger sykdom og skaper sosiale møteplasser',
              'Bare elite blir friske',
              'Det gjør ingen forskjell',
              'Bare for unge mennesker',
            ],
          },
        ],
        solution: 'Organisert idrett gir muligheter for regelmessig aktivitet og sosial tilhørighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er utfordringer med kommersialisering av idrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg utfordringer.',
            solution: 'Pengenes innflytelse, ulikhet mellom idretter, utøvere som varer',
            multipleChoiceOptions: [
              'Pengenes innflytelse, ulikhet mellom idretter, utøvere som varer',
              'Det er bare positivt',
              'Ingen utfordringer',
              'Mer penger til alle',
            ],
          },
        ],
        solution: 'Kommersialisering kan true idrettens grunnverdier og skape store forskjeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter: Bør toppidrett prioriteres over breddeidrett i et samfunn?',
        solution: 'Svar vil variere. Drøft argumenter for begge sider: toppidrett som inspirasjon vs. breddeidrett for folkehelse. Konkluder med egen vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9: Helse, livsstil og motivasjon
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_9: TextbookChapter = {
  id: 'kroppsoving-vg2-9',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '9',
  title: 'Helse, livsstil og motivasjon',
  description: 'Forstå sammenhengen mellom livsstil, helse og varig motivasjon for aktivitet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over sammenhenger mellom livsstil og helse',
    'utvikle varig motivasjon for fysisk aktivitet',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-9-intro',
      type: 'text',
      content: `God helse handler om mer enn fravær av sykdom - det er en tilstand av fysisk, mental og sosial velvære. Livsstilsvalg vi gjør daglig har stor innvirkning på helsen, og motivasjon er nøkkelen til å opprettholde gode vaner.`,
    },
    {
      id: 'kroppsoving-vg2-9-def-1',
      type: 'definition',
      title: 'Helsefremmende livsstil',
      content: `En helsefremmende livsstil innebærer regelmessig fysisk aktivitet, balansert kosthold, tilstrekkelig søvn, mestring av stress og fravær av skadelige vaner som røyking.`,
    },
    {
      id: 'kroppsoving-vg2-9-text-1',
      type: 'text',
      content: `**Livsstilsfaktorer og helse**

**Fysisk aktivitet**:
- Anbefaling: 150-300 min moderat/uke
- Styrketrening 2+ ganger/uke
- Reduserer risiko for livsstilssykdommer
- Forbedrer mental helse

**Kosthold**:
- Variert og balansert
- Nok frukt, grønnsaker, fiber
- Begrense sukker, salt, mettet fett
- Tilstrekkelig væskeinntak

**Søvn**:
- 7-9 timer for voksne
- Viktig for restitusjon og læring
- Påvirker hormoner og immunforsvar
- Regelmessig søvnrytme

**Stressmestring**:
- Kronisk stress skader helsen
- Teknikker for avspenning
- Balanse mellom krav og ressurser
- Sosial støtte`,
    },
    {
      id: 'kroppsoving-vg2-9-text-2',
      type: 'text',
      content: `**Motivasjon for varig aktivitet**

**Selvbestemmelsesteorien**:
- Autonomi: Velge selv
- Kompetanse: Føle mestring
- Tilhørighet: Sosial tilknytning
- Disse fremmer indre motivasjon

**Barrierer for aktivitet**:
- Tidsmangel (ofte prioritering)
- Manglende motivasjon
- Tilgjengelighet og økonomi
- Skader eller sykdom
- Negative opplevelser

**Strategier for å holde motivasjonen**:
- Finn aktiviteter du liker
- Sett realistiske mål
- Tren med andre
- Varier treningen
- Feir fremgang`,
    },
    {
      id: 'kroppsoving-vg2-9-def-2',
      type: 'definition',
      title: 'Atferdsendring',
      content: `Atferdsendring er prosessen med å endre vaner og handlingsmønstre. Det krever bevisstgjøring, planlegging, handling og vedlikehold av nye vaner over tid.`,
    },
    {
      id: 'kroppsoving-vg2-9-text-3',
      type: 'text',
      content: `**Stadier i atferdsendring**

**1. Føroverveielse**:
- Ikke bevisst problemet
- Ingen planer om endring

**2. Overveielse**:
- Vurderer endring
- Veier fordeler og ulemper

**3. Forberedelse**:
- Planlegger konkrete tiltak
- Forbereder seg mentalt

**4. Handling**:
- Gjennomfører endring
- Krever innsats og fokus

**5. Vedlikehold**:
- Ny atferd blir vane
- Forebygge tilbakefall

**Tips for suksess**:
- Start med små endringer
- Bygg på eksisterende vaner
- Planlegg for hindringer
- Bruk støttepersoner
- Vær tålmodig med deg selv`,
    },
    {
      id: 'kroppsoving-vg2-9-tip-1',
      type: 'tip',
      title: 'Vanebygging',
      content: `Knytt nye vaner til eksisterende rutiner. "Etter at jeg... vil jeg..." For eksempel: "Etter at jeg har stått opp, vil jeg gjøre 10 minutter yoga."`,
    },
    {
      id: 'kroppsoving-vg2-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de viktigste livsstilsfaktorene for god helse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de viktigste faktorene.',
            solution: 'Fysisk aktivitet, kosthold, søvn og stressmestring',
            multipleChoiceOptions: [
              'Fysisk aktivitet, kosthold, søvn og stressmestring',
              'Bare trening',
              'Bare kosthold',
              'Genetikk alene',
            ],
          },
        ],
        solution: 'God helse krever balanse mellom flere livsstilsfaktorer som påvirker hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er anbefalingen for fysisk aktivitet per uke?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig anbefaling.',
            solution: '150-300 minutter moderat aktivitet + styrketrening 2 ganger',
            multipleChoiceOptions: [
              '150-300 minutter moderat aktivitet + styrketrening 2 ganger',
              '30 minutter totalt',
              'Så mye som mulig',
              'Bare i helgene',
            ],
          },
        ],
        solution: 'Helsemyndighetene anbefaler regelmessig aktivitet fordelt utover uken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva sier selvbestemmelsesteorien om motivasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de tre grunnleggende behovene.',
            solution: 'Autonomi, kompetanse og tilhørighet',
            multipleChoiceOptions: [
              'Autonomi, kompetanse og tilhørighet',
              'Penger, prestisje og makt',
              'Mat, vann og ly',
              'Søvn, trening og kosthold',
            ],
          },
        ],
        solution: 'Når disse tre behovene er dekket, øker indre motivasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke stadier inngår i atferdsendring?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig rekkefølge.',
            solution: 'Føroverveielse, overveielse, forberedelse, handling, vedlikehold',
            multipleChoiceOptions: [
              'Føroverveielse, overveielse, forberedelse, handling, vedlikehold',
              'Bare handling',
              'Start og slutt',
              'Plan og utførelse',
            ],
          },
        ],
        solution: 'Atferdsendring er en gradvis prosess der man beveger seg gjennom ulike stadier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er vanlige barrierer for fysisk aktivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg typiske barrierer.',
            solution: 'Tidsmangel, lav motivasjon, tilgjengelighet og negative opplevelser',
            multipleChoiceOptions: [
              'Tidsmangel, lav motivasjon, tilgjengelighet og negative opplevelser',
              'For mye energi',
              'For god helse',
              'For mange muligheter',
            ],
          },
        ],
        solution: 'Å kjenne barrierene gjør det lettere å planlegge strategier for å overkomme dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en plan for å innføre en ny helsefremmende vane i livet ditt.',
        solution: 'Svar vil variere. Bør inkludere: Hvilken vane, hvordan knytte til eksisterende rutine, konkret plan, mulige hindringer og strategier for å holde ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10: Egenvurdering og dokumentasjon
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_10: TextbookChapter = {
  id: 'kroppsoving-vg2-10',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '10',
  title: 'Egenvurdering og dokumentasjon',
  description: 'Lær å vurdere egen utvikling og dokumentere treningsprosessen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere egen kompetanse og utvikling',
    'dokumentere treningsprosessen systematisk',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-10-intro',
      type: 'text',
      content: `Egenvurdering er en viktig ferdighet for livslang læring og utvikling. Ved å systematisk dokumentere og reflektere over egen trening kan du optimalisere fremgangen og ta ansvar for egen utvikling.`,
    },
    {
      id: 'kroppsoving-vg2-10-def-1',
      type: 'definition',
      title: 'Egenvurdering',
      content: `Egenvurdering er evnen til å vurdere egen kompetanse, innsats og utvikling opp mot mål og kriterier. Det innebærer ærlig refleksjon over styrker og forbedringsområder.`,
    },
    {
      id: 'kroppsoving-vg2-10-text-1',
      type: 'text',
      content: `**Hvorfor egenvurdering?**

**Bevisstgjøring**:
- Forstå hvor du står
- Identifisere styrker og svakheter
- Se sammenhenger
- Oppdage mønstre

**Ansvar for egen læring**:
- Ta kontroll over utviklingen
- Sette egne mål
- Justere underveis
- Bli selvdreven

**Motivasjon**:
- Se fremgang over tid
- Feire små seire
- Forstå hva som fungerer
- Bygge selvtillit

**Kommunikasjon**:
- Formidle egen kompetanse
- Diskutere med lærer/trener
- Gi grunnlag for vurdering`,
    },
    {
      id: 'kroppsoving-vg2-10-text-2',
      type: 'text',
      content: `**Metoder for dokumentasjon**

**Treningsdagbok**:
- Loggfør hver økt
- Øvelser, sett, repetisjoner, vekt
- Opplevd form og anstrengelse
- Søvn, ernæring, wellness

**Digital logging**:
- Apper for treningsregistrering
- GPS-sporing av aktivitet
- Pulsmåling og analyse
- Automatisk statistikk

**Video og bilder**:
- Dokumenter teknikk
- Sammenlign over tid
- Visuell fremgang
- Del med trener

**Refleksjonsnotat**:
- Ukentlig eller månedlig
- Hva gikk bra/dårlig
- Hva lærte du
- Mål fremover`,
    },
    {
      id: 'kroppsoving-vg2-10-def-2',
      type: 'definition',
      title: 'Formativ vurdering',
      content: `Formativ vurdering er vurdering som skjer underveis i læringsprosessen med mål om å forbedre læring. I motsetning til summativ vurdering (sluttvurdering) fokuserer den på utvikling.`,
    },
    {
      id: 'kroppsoving-vg2-10-text-3',
      type: 'text',
      content: `**Vurderingskriterier i kroppsøving**

**Kompetansemål LK20**:
- Trene og øve på ferdigheter
- Utforske aktiviteter
- Planlegge og gjennomføre egentrening
- Fair play og samarbeid
- Friluftsliv og dans
- Reflektere over sammenhenger

**Vurdering av innsats**:
- Deltakelse og aktivitet
- Vilje til å prøve
- Utvikling over tid
- Ikke bare prestasjon

**Dokumentasjon av kompetanse**:
- Vis hva du kan
- Beskriv hvordan du tenker
- Reflekter over utvikling
- Sett det i sammenheng`,
    },
    {
      id: 'kroppsoving-vg2-10-tip-1',
      type: 'tip',
      title: 'SMART-mål for egenvurdering',
      content: `Bruk SMART-kriteriene når du setter deg mål: Spesifikke (hva?), Målbare (hvor mye?), Attraktive (hvorfor?), Realistiske (kan du?), Tidsbegrensede (når?).`,
    },
    {
      id: 'kroppsoving-vg2-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er egenvurdering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Å vurdere egen kompetanse, innsats og utvikling',
            multipleChoiceOptions: [
              'Å vurdere egen kompetanse, innsats og utvikling',
              'Å få karakter av lærer',
              'Å sammenligne seg med andre',
              'Å unngå vurdering',
            ],
          },
        ],
        solution: 'Egenvurdering handler om ærlig refleksjon over egne styrker og forbedringsområder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva bør en treningsdagbok inneholde?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg viktig innhold.',
            solution: 'Øvelser, belastning, opplevd form og refleksjon',
            multipleChoiceOptions: [
              'Øvelser, belastning, opplevd form og refleksjon',
              'Bare dato',
              'Bare bilder',
              'Ingenting spesielt',
            ],
          },
        ],
        solution: 'En god treningsdagbok gir oversikt over hva du har gjort og hvordan det gikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på formativ og summativ vurdering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forskjell.',
            solution: 'Formativ skjer underveis for å forbedre, summativ er sluttvurdering',
            multipleChoiceOptions: [
              'Formativ skjer underveis for å forbedre, summativ er sluttvurdering',
              'De er det samme',
              'Formativ er strengere',
              'Summativ skjer først',
            ],
          },
        ],
        solution: 'Formativ vurdering fokuserer på læringsprosessen, summativ på sluttproduktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig å dokumentere trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg viktige grunner.',
            solution: 'For å se fremgang, identifisere mønstre og justere treningen',
            multipleChoiceOptions: [
              'For å se fremgang, identifisere mønstre og justere treningen',
              'For å vise andre',
              'Det er ikke viktig',
              'Bare for profesjonelle',
            ],
          },
        ],
        solution: 'Dokumentasjon gir innsikt i hva som fungerer og hva som kan forbedres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva vurderes i kroppsøving ifølge LK20?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg vurderingsområder.',
            solution: 'Ferdigheter, egentrening, fair play, refleksjon og deltakelse',
            multipleChoiceOptions: [
              'Ferdigheter, egentrening, fair play, refleksjon og deltakelse',
              'Bare fysiske tester',
              'Bare teori',
              'Bare oppmøte',
            ],
          },
        ],
        solution: 'Vurdering i kroppsøving er helhetlig og inkluderer både praktisk og teoretisk kompetanse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Skriv en egenvurdering av din utvikling i kroppsøving dette skoleåret.',
        solution: 'Svar vil variere. Bør inkludere: Styrker, forbedringsområder, konkrete eksempler på utvikling, mål for videre arbeid og refleksjon over egen innsats.',
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

export const KROPPSOVING_VG2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_1,
  CHAPTER_KROPPSOVING_VG2_2,
  CHAPTER_KROPPSOVING_VG2_3,
  CHAPTER_KROPPSOVING_VG2_4,
  CHAPTER_KROPPSOVING_VG2_5,
  CHAPTER_KROPPSOVING_VG2_6,
  CHAPTER_KROPPSOVING_VG2_7,
  CHAPTER_KROPPSOVING_VG2_8,
  CHAPTER_KROPPSOVING_VG2_9,
  CHAPTER_KROPPSOVING_VG2_10,
];
