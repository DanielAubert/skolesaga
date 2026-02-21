/**
 * Kroppsøving VG2 - Kapittel 1: Treningslære
 *
 * Dekker LK20 læreplan for kroppsøving på VG2
 * Delkapitler 1.1-1.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Treningsadaptasjon og superkompensasjon
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_1_1: TextbookChapter = {
  id: 'kroppsoving-vg2-1-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '1.1',
  title: 'Treningsadaptasjon og superkompensasjon',
  description: 'Forstå hvordan kroppen tilpasser seg trening og hvorfor hvile er avgjørende for fremgang.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå sammenhengen mellom belastning, restitusjon og tilpasning',
    'bruke kunnskap om treningsprinsipper til å planlegge målrettet trening',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-1-1-intro',
      type: 'text',
      content: `Når du trener, bryter du ned kroppens strukturer. Det er i hvileperioden etterpå at kroppen bygger seg opp igjen -- sterkere enn før. Denne prosessen kalles treningsadaptasjon, og den er grunnlaget for all fysisk fremgang.`,
    },
    {
      id: 'kroppsoving-vg2-1-1-def-1',
      type: 'definition',
      title: 'Treningsadaptasjon',
      content: `Treningsadaptasjon er kroppens evne til å tilpasse seg gjentatt treningsbelastning. Kroppen endrer seg strukturelt og funksjonelt slik at den tåler belastningen bedre neste gang.`,
    },
    {
      id: 'kroppsoving-vg2-1-1-text-1',
      type: 'text',
      content: `**Superkompensasjonsprinsippet**

Etter en treningsøkt går kroppen gjennom fire faser:

1. **Belastning** -- trening bryter ned vev og tømmer energilagre
2. **Restitusjon** -- kroppen reparerer skader og fyller opp lagrene
3. **Superkompensasjon** -- kroppen bygger seg opp over utgangsnivået
4. **Tilbakegang** -- uten ny belastning synker nivået tilbake`,
    },
    {
      id: 'kroppsoving-vg2-1-1-def-2',
      type: 'definition',
      title: 'Superkompensasjon',
      content: `Superkompensasjon er fasen der kroppen har bygget seg opp over det opprinnelige prestasjonsnivået etter trening og restitusjon. Ny trening bør legges i dette tidsvinduet for optimal fremgang.`,
    },
    {
      id: 'kroppsoving-vg2-1-1-example-1',
      type: 'example',
      title: 'Timing av treningsøkter',
      problem: 'En elev trener styrke mandag. Når bør neste styrkeøkt legges for å utnytte superkompensasjon?',
      solution: `Superkompensasjonen for styrketrening inntreffer typisk 48-72 timer etter trening. Eleven bør derfor legge neste styrkeøkt til onsdag eller torsdag. Trener man for tidlig (tirsdag), er kroppen ikke ferdig restituert. Venter man for lenge (lørdag), har superkompensasjonen gått tilbake.`,
    },
    {
      id: 'kroppsoving-vg2-1-1-text-2',
      type: 'text',
      content: `**Treningsprinsipper som styrer adaptasjon**

- **Overbelastning**: Belastningen må være større enn det kroppen er vant til
- **Progressiv økning**: Belastningen må økes gradvis over tid
- **Spesifisitet**: Kroppen tilpasser seg den typen belastning den utsettes for
- **Reversibilitet**: Uten trening mister man tilpasningene gradvis
- **Variasjon**: Kroppen trenger varierte stimuli for å fortsette å utvikle seg`,
    },
    {
      id: 'kroppsoving-vg2-1-1-def-3',
      type: 'definition',
      title: 'Overtrenning',
      content: `Overtrenning oppstår når belastningen over tid er for stor i forhold til restitusjonen. Symptomer kan være vedvarende trøtthet, nedsatt prestasjon, søvnproblemer og økt skaderisiko.`,
    },
    {
      id: 'kroppsoving-vg2-1-1-text-3',
      type: 'text',
      content: `**Tegn på god og dårlig restitusjon**

God restitusjon kjennetegnes av overskudd, fremgang i trening og god søvn. Dårlig restitusjon viser seg som vedvarende stølhet, synkende prestasjon, irritabilitet og hyppige forkjølelser. Faktorer som påvirker restitusjonstiden er søvnkvalitet, ernæring, stressnivå og treningserfaring.`,
    },
    {
      id: 'kroppsoving-vg2-1-1-tip-1',
      type: 'tip',
      title: 'Lytt til kroppen',
      content: `Bruk en enkel skala fra 1-10 for å vurdere dagsform før trening. Scorer du under 5 flere dager på rad, kan det være tegn på at du trenger mer hvile eller lettere trening.`,
    },
    {
      id: 'kroppsoving-vg2-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er treningsadaptasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av treningsadaptasjon.',
            solution: 'Kroppens tilpasning til gjentatt treningsbelastning',
            multipleChoiceOptions: [
              'Kroppens tilpasning til gjentatt treningsbelastning',
              'En bestemt treningsmetode for utholdenhet',
              'Evnen til å løfte tunge vekter',
              'Prosessen der muskler brytes ned under trening',
            ],
          },
        ],
        solution: 'Treningsadaptasjon er kroppens strukturelle og funksjonelle tilpasning til gjentatt belastning, slik at den tåler belastningen bedre over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er superkompensasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på superkompensasjon.',
            solution: 'Fasen der kroppen har bygget seg opp over utgangsnivået etter trening og hvile',
            multipleChoiceOptions: [
              'Fasen der kroppen har bygget seg opp over utgangsnivået etter trening og hvile',
              'Når kroppen er på sitt svakeste rett etter trening',
              'En type kosttilskudd for idrettsutøvere',
              'Den første fasen i et treningsprogram',
            ],
          },
        ],
        solution: 'Superkompensasjon er tidsvinduet der kroppen har restituert seg og bygget kapasitet utover utgangsnivået. Ny trening bør legges her for optimal fremgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke treningsprinsipper er viktigst for å oppnå adaptasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de viktigste treningsprinsippene for adaptasjon.',
            solution: 'Overbelastning, progressiv økning, spesifisitet og variasjon',
            multipleChoiceOptions: [
              'Overbelastning, progressiv økning, spesifisitet og variasjon',
              'Kun tung styrketrening hver dag',
              'Å trene samme øvelse med samme vekt hver gang',
              'Bare lange, rolige løpeturer',
            ],
          },
        ],
        solution: 'For at kroppen skal tilpasse seg trenger den stadig nye stimuli gjennom overbelastning, gradvis økning, spesifikk trening og variasjon i øvelser og metoder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar med egne ord hva som skjer i kroppen fra du avslutter en hard treningsøkt til du er klar for neste.',
        solution: 'Etter trening er kroppen nedbrutt og prestasjonsnivået synker. I restitusjonsfasen repareres vev, energilagre fylles opp og kroppen tilpasser seg belastningen. I superkompensasjonsfasen er kroppen bygget opp over utgangsnivået og er klar for ny belastning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen mellom å trene for tidlig og for sent i forhold til superkompensasjonen? Gi eksempler.',
        solution: 'Trener man for tidlig er kroppen ikke ferdig restituert, noe som kan føre til overtrenning og skader. Venter man for lenge har superkompensasjonen gått tilbake, og man trener på samme nivå som før. Eksempel: Etter hard styrkeøkt mandag bør neste økt legges onsdag-torsdag, ikke tirsdag (for tidlig) eller søndag (for sent).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en ukeplan for trening der du tar hensyn til superkompensasjon. Planen skal inneholde minst tre økter med ulike treningsformer.',
        solution: 'Eksempel: Mandag: Styrke overkropp. Tirsdag: Rolig løpetur (aktiv restitusjon). Onsdag: Styrke underkropp. Torsdag: Hvile. Fredag: Intervalltrening. Lørdag: Friluftsliv/tur. Søndag: Hvile. Planen gir 48-72 timer mellom styrkeøkter for samme muskelgruppe og varierer belastningstype.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Styrketrening – metoder og prinsipper
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_1_2: TextbookChapter = {
  id: 'kroppsoving-vg2-1-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '1.2',
  title: 'Styrketrening – metoder og prinsipper',
  description: 'Lær om ulike styrketreningsmetoder, repetisjonsområder og hvordan du bygger et effektivt styrkeprogram.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke kunnskap om treningsprinsipper til å planlegge målrettet styrketrening',
    'gjennomføre styrketrening med riktig teknikk og tilpasset belastning',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-1-2-intro',
      type: 'text',
      content: `Styrketrening handler om å belaste musklene slik at de tilpasser seg og blir sterkere. Avhengig av mål -- maksimal styrke, muskelvekst eller muskulær utholdenhet -- velger man ulike metoder og repetisjonsområder.`,
    },
    {
      id: 'kroppsoving-vg2-1-2-def-1',
      type: 'definition',
      title: '1RM (en repetisjons maksimum)',
      content: `1RM er den tyngste vekten du klarer å løfte én gang med riktig teknikk i en gitt øvelse. Brukes som referanse for å beregne treningsbelastning i prosent.`,
    },
    {
      id: 'kroppsoving-vg2-1-2-text-1',
      type: 'text',
      content: `**Tre hovedmetoder for styrketrening**

**Maksimal styrke** (1-5 repetisjoner, 85-100 % av 1RM):
- Lange pauser mellom sett (3-5 min)
- Rekrutterer flest motoriske enheter
- Egner seg for erfarne utøvere

**Hypertrofi / muskelvekst** (6-12 repetisjoner, 65-85 % av 1RM):
- Moderate pauser (60-90 sek)
- Kombinerer mekanisk spenning og metabolsk stress
- Mest brukt for å øke muskelmasse

**Muskulær utholdenhet** (15+ repetisjoner, under 65 % av 1RM):
- Korte pauser (30-60 sek)
- Forbedrer lokal utholdenhetskapasitet
- God for nybegynnere og idrettsutøvere`,
    },
    {
      id: 'kroppsoving-vg2-1-2-def-2',
      type: 'definition',
      title: 'Hypertrofi',
      content: `Hypertrofi betyr muskelvekst -- at muskelfibrene øker i tverrsnitt. Det oppnås gjennom styrketrening med moderat belastning og tilstrekkelig volum over tid.`,
    },
    {
      id: 'kroppsoving-vg2-1-2-example-1',
      type: 'example',
      title: 'Beregning av treningsvekt',
      problem: 'En elev har 1RM på 80 kg i knebøy. Hva blir treningsvekten for hypertrofitrening med 75 % av 1RM?',
      solution: `80 kg x 0,75 = 60 kg. Eleven bør trene med 60 kg og sikte på 6-12 repetisjoner per sett. Klarer eleven 12 repetisjoner med god teknikk, kan vekten økes neste gang.`,
    },
    {
      id: 'kroppsoving-vg2-1-2-text-2',
      type: 'text',
      content: `**Viktige begreper i styrketrening**

- **Sett**: En sammenhengende serie med repetisjoner
- **Repetisjon**: Én komplett bevegelse av en øvelse
- **Volum**: Totalt antall sett x repetisjoner x vekt
- **Intensitet**: Hvor tungt du løfter i forhold til 1RM
- **Frekvens**: Hvor ofte du trener samme muskelgruppe per uke`,
    },
    {
      id: 'kroppsoving-vg2-1-2-def-3',
      type: 'definition',
      title: 'Motorisk enhet',
      content: `En motorisk enhet er en nervecelle (motornevron) og alle muskelfibrene den styrer. Ved tung styrketrening rekrutteres flere motoriske enheter, noe som gir større kraftutvikling.`,
    },
    {
      id: 'kroppsoving-vg2-1-2-text-3',
      type: 'text',
      content: `**Teknikk og sikkerhet**

God teknikk er avgjørende for å forebygge skader og få best mulig effekt av treningen. Kontrollert bevegelse gjennom hele bevegelsesbanen er viktigere enn å løfte tungt. Bruk av spotter ved tunge løft og gradvis progresjon i vekt reduserer skaderisikoen.`,
    },
    {
      id: 'kroppsoving-vg2-1-2-example-2',
      type: 'example',
      title: 'Progressiv økning i styrketrening',
      problem: 'En elev trener benkpress med 50 kg, 3 sett x 10 repetisjoner. Hvordan kan eleven øke belastningen progressivt?',
      solution: `Først kan eleven øke til 3 sett x 12 repetisjoner med 50 kg. Når det mestres, økes vekten til 52,5 kg med 3 sett x 8-10 repetisjoner. Over tid jobber eleven seg opp til 12 repetisjoner igjen før ny vektøkning. Denne metoden kalles dobbel progresjon.`,
    },
    {
      id: 'kroppsoving-vg2-1-2-tip-1',
      type: 'tip',
      title: 'Treningslogg',
      content: `Før alltid treningslogg med øvelser, vekt, sett og repetisjoner. Det gjør det enklere å følge opp progressiv økning og se fremgangen over tid.`,
    },
    {
      id: 'kroppsoving-vg2-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er 1RM?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av 1RM.',
            solution: 'Den tyngste vekten du klarer å løfte én gang med riktig teknikk',
            multipleChoiceOptions: [
              'Den tyngste vekten du klarer å løfte én gang med riktig teknikk',
              'Antall repetisjoner du klarer på ett minutt',
              'Den letteste vekten i et styrkeprogram',
              'Maksimalt antall sett i en treningsøkt',
            ],
          },
        ],
        solution: '1RM (en repetisjons maksimum) er den tyngste vekten man klarer én repetisjon med i en gitt øvelse. Det brukes som grunnlag for å beregne treningsprosenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket repetisjonsområde passer best for hypertrofi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig repetisjonsområde for muskelvekst.',
            solution: '6-12 repetisjoner med 65-85 % av 1RM',
            multipleChoiceOptions: [
              '6-12 repetisjoner med 65-85 % av 1RM',
              '1-3 repetisjoner med 95-100 % av 1RM',
              '20-30 repetisjoner med 30 % av 1RM',
              '1 repetisjon med maksimal vekt',
            ],
          },
        ],
        solution: 'Hypertrofi oppnås best med 6-12 repetisjoner og moderat vekt. Dette gir en kombinasjon av mekanisk spenning og metabolsk stress som stimulerer muskelvekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en motorisk enhet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av en motorisk enhet.',
            solution: 'En nervecelle og alle muskelfibrene den styrer',
            multipleChoiceOptions: [
              'En nervecelle og alle muskelfibrene den styrer',
              'En muskelgruppe som jobber sammen',
              'Et treningsstudio med utstyr',
              'En type styrketreningsøvelse',
            ],
          },
        ],
        solution: 'En motorisk enhet består av et motornevron og alle muskelfibrene det innerverer. Ved tung belastning rekrutteres flere motoriske enheter for å produsere mer kraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom trening for maksimal styrke og trening for hypertrofi. Beskriv repetisjoner, belastning og pauser.',
        solution: 'Maksimal styrke: 1-5 repetisjoner, 85-100 % av 1RM, 3-5 min pauser. Fokus på å rekruttere flest motoriske enheter. Hypertrofi: 6-12 repetisjoner, 65-85 % av 1RM, 60-90 sek pauser. Fokus på mekanisk spenning og metabolsk stress for muskelvekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'En elev har 1RM på 60 kg i benkpress. Regn ut treningsvekt for henholdsvis maksimal styrke (90 %), hypertrofi (75 %) og muskulær utholdenhet (50 %).',
        solution: 'Maksimal styrke: 60 x 0,90 = 54 kg. Hypertrofi: 60 x 0,75 = 45 kg. Muskulær utholdenhet: 60 x 0,50 = 30 kg. Vekten tilpasses slik at eleven klarer riktig antall repetisjoner med god teknikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag et styrkeprogram med 5 øvelser for hele kroppen. Angi antall sett, repetisjoner og pausetid. Begrunn valgene dine.',
        solution: 'Eksempel for hypertrofi: 1) Knebøy 4x10, 2) Benkpress 4x10, 3) Roing 3x12, 4) Skulderpress 3x10, 5) Utfall 3x12. Alle med 70-80 % av 1RM, 60-90 sek pause. Programmet dekker alle store muskelgrupper med moderat belastning og volum tilpasset muskelvekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: Utholdenhetstrening – metoder og prinsipper
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_1_3: TextbookChapter = {
  id: 'kroppsoving-vg2-1-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '1.3',
  title: 'Utholdenhetstrening – metoder og prinsipper',
  description: 'Lær om ulike metoder for utholdenhetstrening, energisystemer og hvordan du forbedrer kondisjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke kunnskap om energisystemer til å velge riktig treningsmetode',
    'planlegge og gjennomføre utholdenhetstrening tilpasset eget nivå',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-1-3-intro',
      type: 'text',
      content: `Utholdenhet er evnen til å opprettholde fysisk arbeid over tid. God utholdenhet er viktig for helse, prestasjon og daglig funksjon. Valg av treningsmetode avhenger av mål, nivå og hvilke energisystemer du vil utvikle.`,
    },
    {
      id: 'kroppsoving-vg2-1-3-def-1',
      type: 'definition',
      title: 'Maksimalt oksygenopptak (VO2maks)',
      content: `VO2maks er den største mengden oksygen kroppen kan ta opp og utnytte per minutt under maksimal anstrengelse. Det er det viktigste målet på aerob utholdenhet, og måles i ml/kg/min.`,
    },
    {
      id: 'kroppsoving-vg2-1-3-text-1',
      type: 'text',
      content: `**Kroppens energisystemer**

**Aerobe systemet** (med oksygen):
- Dominerer ved lav til moderat intensitet
- Kan opprettholdes over lang tid
- Bruker fett og karbohydrater som drivstoff

**Anaerobe systemet** (uten oksygen):
- Dominerer ved høy intensitet
- Gir rask energi, men i begrenset tid
- Produserer melkesyre som biprodukt

Begge systemene jobber alltid samtidig, men andelen varierer med intensiteten.`,
    },
    {
      id: 'kroppsoving-vg2-1-3-def-2',
      type: 'definition',
      title: 'Anaerob terskel',
      content: `Anaerob terskel er det høyeste intensitetsnivået der kroppen klarer å fjerne melkesyre like raskt som den produseres. Over denne terskelen hoper melkesyre seg opp, og utmattelse inntreffer raskere.`,
    },
    {
      id: 'kroppsoving-vg2-1-3-example-1',
      type: 'example',
      title: 'Valg av treningsmetode',
      problem: 'En elev ønsker å forbedre VO2maks. Hvilken treningsmetode bør velges?',
      solution: `Intervalltrening med lange intervaller er mest effektivt for å øke VO2maks. Eksempel: 4 x 4 minutter på 90-95 % av makspuls med 3 minutter aktiv pause. Alternativt kan kortere intervaller som 30/30 (30 sek arbeid, 30 sek pause) brukes med enda høyere intensitet.`,
    },
    {
      id: 'kroppsoving-vg2-1-3-text-2',
      type: 'text',
      content: `**Treningsmetoder for utholdenhet**

**Langkjøring**: Lav intensitet, lang varighet (60-75 % av makspuls). Bygger aerob grunnkapasitet og forbedrer fettforbrenning.

**Tempokjøring**: Moderat til høy intensitet rundt anaerob terskel (80-85 % av makspuls). Øker melkesyretoleransen.

**Intervalltrening**: Veksling mellom høy intensitet og hvile. Korte intervaller (15-60 sek) for fart og effekt, lange intervaller (3-8 min) for VO2maks.

**Fartlek**: Naturlig variasjon i tempo og terreng. Kombinerer ulike intensitetssoner i samme økt.`,
    },
    {
      id: 'kroppsoving-vg2-1-3-def-3',
      type: 'definition',
      title: 'Intervalltrening',
      content: `Intervalltrening er en treningsform der perioder med høy intensitet veksler med perioder med lavere intensitet eller hvile. Varigheten og intensiteten på arbeid og pause tilpasses treningsformålet.`,
    },
    {
      id: 'kroppsoving-vg2-1-3-text-3',
      type: 'text',
      content: `**Pulssoner og intensitetsstyring**

Pulssoner brukes for å styre treningsintensiteten:
- **Sone 1 (50-60 %)**: Lett aktivitet, restitusjon
- **Sone 2 (60-70 %)**: Grunntrening, fettforbrenning
- **Sone 3 (70-80 %)**: Aerob terskel, god basistrening
- **Sone 4 (80-90 %)**: Anaerob terskel, konkurransefart
- **Sone 5 (90-100 %)**: Maksimal intensitet, VO2maks

Prosentene refererer til maksimal hjertefrekvens.`,
    },
    {
      id: 'kroppsoving-vg2-1-3-tip-1',
      type: 'tip',
      title: '80/20-regelen',
      content: `De fleste utholdenhetsutøvere bør trene ca. 80 % av tiden i lav intensitet og 20 % i høy intensitet. For mye hard trening gir dårligere adaptasjon og økt risiko for overtrenning.`,
    },
    {
      id: 'kroppsoving-vg2-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er VO2maks?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av VO2maks.',
            solution: 'Største mengde oksygen kroppen kan ta opp og utnytte per minutt under maksimal anstrengelse',
            multipleChoiceOptions: [
              'Største mengde oksygen kroppen kan ta opp og utnytte per minutt under maksimal anstrengelse',
              'Maksimal puls under trening',
              'Antall liter luft du puster inn per minutt',
              'Hvor lenge du kan holde pusten under vann',
            ],
          },
        ],
        solution: 'VO2maks er det viktigste målet på aerob utholdenhet og angir kroppens maksimale evne til å bruke oksygen under arbeid. Måles i ml/kg/min.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva skjer ved anaerob terskel?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av anaerob terskel.',
            solution: 'Melkesyreproduksjonen overstiger kroppens evne til å fjerne den',
            multipleChoiceOptions: [
              'Melkesyreproduksjonen overstiger kroppens evne til å fjerne den',
              'Kroppen slutter å bruke oksygen',
              'Man når maksimal puls',
              'Musklene slutter å jobbe',
            ],
          },
        ],
        solution: 'Ved anaerob terskel produseres melkesyre raskere enn den fjernes. Over terskelen hoper melkesyre seg opp i blodet, og utmattelse inntreffer raskere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken treningsmetode er mest effektiv for å øke VO2maks?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den mest effektive metoden.',
            solution: 'Intervalltrening med lange intervaller på 90-95 % av makspuls',
            multipleChoiceOptions: [
              'Intervalltrening med lange intervaller på 90-95 % av makspuls',
              'Rolige spaserturer',
              'Kun styrketrening med tunge vekter',
              'Tøyning og yoga',
            ],
          },
        ],
        solution: 'Lange intervaller (f.eks. 4 x 4 min) på nær maksimal intensitet er dokumentert som den mest effektive metoden for å øke VO2maks.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom det aerobe og det anaerobe energisystemet. Gi eksempler på aktiviteter der hvert system dominerer.',
        solution: 'Det aerobe systemet bruker oksygen, dominerer ved lav-moderat intensitet og kan opprettholdes lenge (langkjøring, sykling). Det anaerobe systemet jobber uten oksygen, dominerer ved høy intensitet og gir rask, men kortvarig energi (sprint, tung styrketrening). I praksis jobber begge alltid, men forholdet endres med intensiteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv fire ulike treningsmetoder for utholdenhet og forklar når du bør bruke hver av dem.',
        solution: 'Langkjøring: Lav intensitet, lang varighet -- bygger grunnkapasitet. Tempokjøring: Rundt anaerob terskel -- øker melkesyretoleranse. Intervalltrening: Høy intensitet med pauser -- øker VO2maks. Fartlek: Varierende intensitet -- gir allsidig trening. Langkjøring brukes til grunntrening, tempokjøring for terskelutvikling, intervaller for toppform og fartlek for variasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag et 4-ukers treningsprogram for en elev som ønsker å forbedre utholdenheten. Programmet skal inneholde ulike treningsmetoder og ta hensyn til 80/20-regelen.',
        solution: 'Eksempel per uke: 3 økter rolig langkjøring (sone 2, 30-45 min), 1 økt intervalltrening (4x4 min på 90-95 % av makspuls). Uke 1-2: Oppbygging med fokus på langkjøring. Uke 3: Øk volum og legg til tempokjøring. Uke 4: Restitusjonsuke med redusert volum. 80 % av treningstiden er i lav sone, 20 % i høy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: Koordinasjon, bevegelighet og hurtighet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_1_4: TextbookChapter = {
  id: 'kroppsoving-vg2-1-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '1.4',
  title: 'Koordinasjon, bevegelighet og hurtighet',
  description: 'Forstå betydningen av koordinasjon, bevegelighet og hurtighet og lær metoder for å trene disse egenskapene.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå betydningen av koordinasjon, bevegelighet og hurtighet for bevegelseskvalitet',
    'gjennomføre trening som utvikler motoriske ferdigheter',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-1-4-intro',
      type: 'text',
      content: `Styrke og utholdenhet får ofte mest oppmerksomhet, men koordinasjon, bevegelighet og hurtighet er like viktige for god bevegelseskvalitet. Disse egenskapene henger tett sammen og påvirker hverandre gjensidig.`,
    },
    {
      id: 'kroppsoving-vg2-1-4-def-1',
      type: 'definition',
      title: 'Koordinasjon',
      content: `Koordinasjon er evnen til å samordne bevegelser på en hensiktsmessig og effektiv måte. Det handler om samspillet mellom nervesystem og muskler, og forbedres gjennom variert bevegelseserfaring.`,
    },
    {
      id: 'kroppsoving-vg2-1-4-text-1',
      type: 'text',
      content: `**Koordinasjonens delkomponenter**

- **Balanse**: Evnen til å holde kroppen i likevekt, både statisk og dynamisk
- **Rytme**: Evnen til å tilpasse bevegelser til en tidsstruktur
- **Romfølelse**: Evnen til å orientere kroppen i rommet
- **Reaksjonsevne**: Evnen til å reagere raskt og korrekt på signaler
- **Differensiering**: Evnen til å tilpasse kraft og presisjon i bevegelser`,
    },
    {
      id: 'kroppsoving-vg2-1-4-def-2',
      type: 'definition',
      title: 'Bevegelighet',
      content: `Bevegelighet (fleksibilitet) er leddenes evne til å bevege seg gjennom full bevegelsesbane. God bevegelighet forebygger skader, forbedrer teknikk og bidrar til bedre bevegelseskvalitet.`,
    },
    {
      id: 'kroppsoving-vg2-1-4-example-1',
      type: 'example',
      title: 'Dynamisk tøyning for bevegelighet',
      problem: 'En elev skal forberede seg til fotballtrening. Hvordan bør eleven tøye?',
      solution: `Før trening bør eleven bruke dynamisk tøyning: beinsving framover og til siden, armsvinger, lunges med rotasjon og høye kneløft. Dette øker bevegeligheten midlertidig, øker blodgjennomstrømning og forbereder musklene på aktivitet. Statisk tøyning passer bedre etter trening for å opprettholde bevegelighet over tid.`,
    },
    {
      id: 'kroppsoving-vg2-1-4-text-2',
      type: 'text',
      content: `**Tøyningsmetoder**

**Dynamisk tøyning**: Kontrollerte bevegelser gjennom full bevegelsesbane. Anbefales før aktivitet fordi det øker muskeltemperatur og aktiverer nervesystemet.

**Statisk tøyning**: Holde en posisjon i 20-60 sekunder. Egner seg best etter trening for å øke bevegelighet over tid.

**PNF (proprioseptiv nevromuskulær fasilitering)**: Kombinerer strekk og muskelspenn. Effektiv metode, men krever ofte en partner.`,
    },
    {
      id: 'kroppsoving-vg2-1-4-def-3',
      type: 'definition',
      title: 'Hurtighet',
      content: `Hurtighet er evnen til å utføre bevegelser med høy hastighet. Det inkluderer reaksjonshurtighet (reagere raskt), akselerasjon (komme opp i fart) og maksimal hastighet (toppfart).`,
    },
    {
      id: 'kroppsoving-vg2-1-4-text-3',
      type: 'text',
      content: `**Trening av hurtighet**

Hurtighet trenes med korte, eksplosive bevegelser med full innsats og tilstrekkelig pause. Arbeidstiden bør være under 10 sekunder, og pausene 1-3 minutter for å sikre full restitusjon mellom dragene. Eksempler er sprintdrag, agilitetsøvelser, reaksjonsleker og plyometrisk trening.`,
    },
    {
      id: 'kroppsoving-vg2-1-4-tip-1',
      type: 'tip',
      title: 'Tren koordinasjon tidlig i økten',
      content: `Koordinasjons- og hurtighetstrening krever et uthvilt nervesystem. Legg disse øvelsene tidlig i treningsøkten, før du er sliten. Trøtt kropp og trøtt hjerne gir dårligere bevegelseslæring.`,
    },
    {
      id: 'kroppsoving-vg2-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er koordinasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av koordinasjon.',
            solution: 'Evnen til å samordne bevegelser på en hensiktsmessig og effektiv måte',
            multipleChoiceOptions: [
              'Evnen til å samordne bevegelser på en hensiktsmessig og effektiv måte',
              'Evnen til å løfte tunge vekter',
              'Hvor langt du kan tøye deg',
              'Evnen til å løpe fort',
            ],
          },
        ],
        solution: 'Koordinasjon handler om samspillet mellom nervesystem og muskler, som gjør at bevegelser blir effektive og presise.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Når bør du bruke dynamisk tøyning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig tidspunkt for dynamisk tøyning.',
            solution: 'Før trening, som del av oppvarmingen',
            multipleChoiceOptions: [
              'Før trening, som del av oppvarmingen',
              'Bare etter trening for nedkjøling',
              'Midt i en styrkeøkt mellom settene',
              'Bare på hviledager',
            ],
          },
        ],
        solution: 'Dynamisk tøyning er best før trening fordi det øker muskeltemperatur, aktiverer nervesystemet og forbereder kroppen på aktivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner hurtighetstrening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige kjennetegn på hurtighetstrening.',
            solution: 'Korte, eksplosive drag under 10 sekunder med lange pauser',
            multipleChoiceOptions: [
              'Korte, eksplosive drag under 10 sekunder med lange pauser',
              'Lange løpeturer i rolig tempo',
              'Styrketrening med mange repetisjoner',
              'Statisk tøyning i 60 sekunder',
            ],
          },
        ],
        solution: 'Hurtighetstrening krever maksimal innsats i korte perioder (under 10 sek) med full restitusjon mellom dragene (1-3 min pause) for at nervesystemet skal være uthvilt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv de fem delkomponentene i koordinasjon og gi ett praktisk eksempel for hver.',
        solution: 'Balanse: Stå på ett ben med lukkede øyne. Rytme: Hoppetau i jevnt tempo. Romfølelse: Gjøre en salto og lande riktig. Reaksjonsevne: Reagere på startsignal i sprint. Differensiering: Kaste en ball med riktig kraft til en mottaker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom dynamisk og statisk tøyning. Når passer det å bruke hver metode, og hvorfor?',
        solution: 'Dynamisk tøyning: Kontrollerte bevegelser gjennom bevegelsesbanen, brukes før trening for å varme opp og aktivere muskulaturen. Statisk tøyning: Holde posisjonen i 20-60 sek, brukes etter trening for å øke bevegeligheten over tid. Statisk tøyning før aktivitet kan midlertidig redusere kraftutvikling og bør unngås rett før eksplosive øvelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Design en 15-minutters økt som trener koordinasjon, bevegelighet og hurtighet. Begrunn rekkefølgen av øvelsene.',
        solution: 'Eksempel: 1) Hoppetau med variasjon (2 min, koordinasjon/rytme). 2) Agilitystige med ulike mønstre (3 min, koordinasjon/hurtighet). 3) Sprintdrag 3x20 m med retningsendring (3 min, hurtighet/reaksjon). 4) Dynamisk tøyning og beinsving (4 min, bevegelighet). 5) Balanseøvelser på ett ben (3 min, koordinasjon/balanse). Hurtighet og koordinasjon legges først da de krever uthvilt nervesystem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5: Oppvarming, nedkjøling og restitusjon
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_1_5: TextbookChapter = {
  id: 'kroppsoving-vg2-1-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '1.5',
  title: 'Oppvarming, nedkjøling og restitusjon',
  description: 'Lær hvorfor oppvarming og nedkjøling er viktig, og forstå faktorer som påvirker restitusjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjennomføre hensiktsmessig oppvarming og nedkjøling tilpasset aktiviteten',
    'forstå restitusjonsstrategier og deres betydning for treningseffekt',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-1-5-intro',
      type: 'text',
      content: `Oppvarming og nedkjøling er viktige deler av enhver treningsøkt. God oppvarming forbereder kroppen på belastning og reduserer skaderisiko, mens nedkjøling hjelper kroppen å komme tilbake til normaltilstand. Restitusjon mellom øktene er avgjørende for at treningen skal gi effekt.`,
    },
    {
      id: 'kroppsoving-vg2-1-5-def-1',
      type: 'definition',
      title: 'Oppvarming',
      content: `Oppvarming er en gradvis økning av aktivitetsnivået før hovedtreningen. Formålet er å øke kroppstemperatur, blodgjennomstrømning til musklene, leddsmøring og nervesystemets beredskap.`,
    },
    {
      id: 'kroppsoving-vg2-1-5-text-1',
      type: 'text',
      content: `**Oppvarmingens tre faser**

**Generell oppvarming** (5-10 min):
- Lett aerob aktivitet (jogging, sykling, roing)
- Øker kroppstemperatur og blodgjennomstrømning
- Gradvis økning i intensitet

**Dynamisk tøyning** (3-5 min):
- Bevegelse gjennom full bevegelsesbane
- Øker leddbevegelighet og muskelaktivering
- Tilpasses aktiviteten som skal gjøres

**Spesifikk oppvarming** (5 min):
- Bevegelser som ligner hovedaktiviteten
- Gradvis økning mot treningsintensitet
- Forbereder nervesystemet på spesifikke bevegelsesmønstre`,
    },
    {
      id: 'kroppsoving-vg2-1-5-def-2',
      type: 'definition',
      title: 'Nedkjøling',
      content: `Nedkjøling er en gradvis reduksjon av aktivitetsnivået etter trening. Formålet er å senke pulsen kontrollert, fremme avfallstransport fra musklene og starte restitusjonen.`,
    },
    {
      id: 'kroppsoving-vg2-1-5-example-1',
      type: 'example',
      title: 'Oppvarming før fotballkamp',
      problem: 'Hvordan bør en fotballspiller varme opp før kamp?',
      solution: `Generell oppvarming: 5 min lett jogging med gradvis økt tempo. Dynamisk tøyning: Beinsving, lunges, armsvinger (3 min). Spesifikk oppvarming: Pasningsøvelser, skudd på mål, korte sprinter med retningsendring (5-7 min). Totalt 13-15 minutter med gradvis økende intensitet som speiler kampens bevegelsesmønstre.`,
    },
    {
      id: 'kroppsoving-vg2-1-5-text-2',
      type: 'text',
      content: `**Restitusjon -- kroppen bygger seg opp**

Restitusjon er perioden mellom treningsøkter der kroppen reparerer seg og tilpasser seg belastningen. Viktige faktorer for god restitusjon:

- **Søvn**: 7-9 timer per natt er viktigst for restitusjon. Veksthormon frigjøres hovedsakelig under dyp søvn.
- **Ernæring**: Karbohydrater fyller glykogenlagrene, protein reparerer muskelvev. Spis innen 1-2 timer etter trening.
- **Hydrering**: Væsketap under trening må erstattes for at cellene skal fungere optimalt.
- **Aktiv restitusjon**: Lett aktivitet dagen etter hard trening øker blodgjennomstrømning og fremmer reparasjon.`,
    },
    {
      id: 'kroppsoving-vg2-1-5-def-3',
      type: 'definition',
      title: 'Aktiv restitusjon',
      content: `Aktiv restitusjon er lett fysisk aktivitet (f.eks. rolig gange, svømming eller sykling) utført for å fremme blodgjennomstrømning og avfallstransport uten å belaste kroppen ytterligere.`,
    },
    {
      id: 'kroppsoving-vg2-1-5-text-3',
      type: 'text',
      content: `**Restitusjonstid for ulike treningsformer**

- **Lett utholdenhet**: 12-24 timer
- **Hard utholdenhet**: 24-48 timer
- **Styrketrening (moderat)**: 24-48 timer
- **Tung styrketrening**: 48-72 timer
- **Eksplosiv trening**: 48-72 timer

Restitusjonstiden varierer mellom personer og påvirkes av treningserfaring, alder, søvn og ernæring.`,
    },
    {
      id: 'kroppsoving-vg2-1-5-tip-1',
      type: 'tip',
      title: 'Søvn er den beste restitusjonsstrategien',
      content: `Prioriter alltid søvn fremfor andre restitusjonsmetoder. Ingen mengde istid, massasje eller kosttilskudd kan erstatte effekten av god søvn for kroppens restitusjon og tilpasning.`,
    },
    {
      id: 'kroppsoving-vg2-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er formålet med oppvarming?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig formål med oppvarming.',
            solution: 'Øke kroppstemperatur, blodgjennomstrømning og nervesystemets beredskap',
            multipleChoiceOptions: [
              'Øke kroppstemperatur, blodgjennomstrømning og nervesystemets beredskap',
              'Å bli så sliten som mulig før trening',
              'Å trene styrke med lette vekter',
              'Å tøye musklene statisk i 10 minutter',
            ],
          },
        ],
        solution: 'Oppvarming forbereder kroppen på belastning ved å øke muskeltemperatur, leddsmøring og blodtilførsel til musklene, noe som også reduserer skaderisikoen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er aktiv restitusjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av aktiv restitusjon.',
            solution: 'Lett fysisk aktivitet for å fremme blodgjennomstrømning og reparasjon',
            multipleChoiceOptions: [
              'Lett fysisk aktivitet for å fremme blodgjennomstrømning og reparasjon',
              'Hard trening dagen etter konkurranse',
              'Å ligge helt stille i sengen hele dagen',
              'Å ta smertestillende etter trening',
            ],
          },
        ],
        solution: 'Aktiv restitusjon er lett aktivitet som rolig gange eller svømming. Det øker blodgjennomstrømningen og hjelper kroppen med å fjerne avfallsstoffer uten å skape ny belastning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken faktor er viktigst for restitusjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste faktoren for restitusjon.',
            solution: 'Søvn (7-9 timer per natt)',
            multipleChoiceOptions: [
              'Søvn (7-9 timer per natt)',
              'Isbad etter trening',
              'Proteinshake umiddelbart etter trening',
              'Massasje hver dag',
            ],
          },
        ],
        solution: 'Søvn er den viktigste restitusjonsstrategien. Under dyp søvn frigjøres veksthormon som er avgjørende for muskelreparasjon og tilpasning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv de tre fasene i oppvarmingen og forklar hva som skjer i kroppen i hver fase.',
        solution: 'Generell oppvarming (5-10 min): Lett aerob aktivitet som øker kroppstemperatur og blodgjennomstrømning til musklene. Dynamisk tøyning (3-5 min): Bevegelser gjennom full bevegelsesbane som øker leddbevegelighet og aktiverer musklene. Spesifikk oppvarming (5 min): Bevegelser som ligner hovedaktiviteten, forbereder nervesystemet på spesifikke bevegelsesmønstre og øker intensiteten gradvis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvordan søvn, ernæring og hydrering påvirker restitusjonen. Hvorfor er alle tre viktige?',
        solution: 'Søvn: Veksthormon frigjøres under dyp søvn og er nødvendig for muskelreparasjon. 7-9 timer anbefales. Ernæring: Karbohydrater fyller opp energilagrene, protein bygger opp muskelvev. Spis innen 1-2 timer etter trening. Hydrering: Cellene trenger væske for å fungere optimalt, og svetting under trening må erstattes. Alle tre er viktige fordi de bidrar til ulike deler av reparasjonsprosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en komplett treningsøkt med oppvarming, hoveddel og nedkjøling for en valgfri aktivitet. Begrunn valgene dine i hver fase.',
        solution: 'Eksempel for styrketrening: Oppvarming: 5 min rolig jogging, 3 min dynamisk tøyning (armsvinger, beinsving, lunges), 5 min spesifikk oppvarming med lette sett av hovedøvelsene. Hoveddel: 4 styrkeøvelser (knebøy, benkpress, roing, skulderpress) med 3-4 sett x 8-12 repetisjoner. Nedkjøling: 5 min rolig gange, 5 min statisk tøyning av belastede muskelgrupper. Begrunnelse: Oppvarmingen følger de tre fasene, hoveddelen er tilpasset hypertrofimål, nedkjølingen senker pulsen gradvis og starter restitusjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler for Kap. 1
// ============================================================================

export const KROPPSOVING_VG2_KAP1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_1_1,
  CHAPTER_KROPPSOVING_VG2_1_2,
  CHAPTER_KROPPSOVING_VG2_1_3,
  CHAPTER_KROPPSOVING_VG2_1_4,
  CHAPTER_KROPPSOVING_VG2_1_5,
];
