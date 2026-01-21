/**
 * Mat og helse 8. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for mat og helse på 8. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Ernæring
// ============================================================================

export const CHAPTER_MAT_8_1_1: TextbookChapter = {
  id: 'mat-8-1-1',
  courseId: 'mat-8',
  chapterNumber: '1.1',
  title: 'Næringsstoffer',
  description: 'Lær om de ulike næringsstoffene og deres funksjon i kroppen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare sammenhenger mellom kosthold og helse',
  ],
  content: [
    {
      id: 'mat-8-1-1-intro',
      type: 'text',
      content: `Kroppen trenger næringsstoffer for å fungere. Maten vi spiser inneholder ulike næringsstoffer som gir energi, bygger kroppen og holder oss friske.`,
    },
    {
      id: 'mat-8-1-1-def-1',
      type: 'definition',
      title: 'Næringsstoffer',
      content: `Næringsstoffer er stoffer i maten som kroppen trenger. De deles inn i makronæringsstoffer (karbohydrater, proteiner, fett) og mikronæringsstoffer (vitaminer, mineraler).`,
    },
    {
      id: 'mat-8-1-1-text-1',
      type: 'text',
      content: `**Makronæringsstoffer**

**Karbohydrater** - kroppens viktigste energikilde
- Finnes i brød, pasta, ris, poteter, frukt
- Gir 17 kJ (4 kcal) per gram
- Bør utgjøre 45-60% av energiinntaket

**Proteiner** - bygger og reparerer kroppen
- Finnes i kjøtt, fisk, egg, melk, belgfrukter
- Gir 17 kJ (4 kcal) per gram
- Viktig for muskler, hud, hår og immunforsvar

**Fett** - energilagring og cellebygging
- Finnes i olje, smør, nøtter, fisk
- Gir 37 kJ (9 kcal) per gram
- Bør utgjøre 25-40% av energiinntaket`,
    },
    {
      id: 'mat-8-1-1-text-2',
      type: 'text',
      content: `**Mikronæringsstoffer**

**Vitaminer** - regulerer prosesser i kroppen
- Vannløselige (B, C) - må tilføres daglig
- Fettløselige (A, D, E, K) - lagres i kroppen

**Mineraler** - bygger bein og regulerer kroppsfunksjoner
- Kalsium: bein og tenner
- Jern: oksygentransport i blodet
- Jod: stoffskifte`,
    },
    {
      id: 'mat-8-1-1-tip-1',
      type: 'tip',
      title: 'Variert kosthold',
      content: `Et variert kosthold med mye frukt, grønnsaker, fullkorn og fisk gir deg alle næringsstoffene du trenger uten kosttilskudd.`,
    },
    {
      id: 'mat-8-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-8-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilket næringsstoff er kroppens viktigste energikilde?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket næringsstoff er kroppens viktigste energikilde?',
            solution: 'Karbohydrater',
            multipleChoiceOptions: ['Karbohydrater', 'Proteiner', 'Vitaminer', 'Mineraler'],
          },
        ],
        solution: 'Karbohydrater er kroppens viktigste og mest effektive energikilde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-8-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket næringsstoff gir mest energi per gram?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket næringsstoff gir mest energi per gram?',
            solution: 'Fett',
            multipleChoiceOptions: ['Fett', 'Karbohydrater', 'Proteiner', 'Fiber'],
          },
        ],
        solution: 'Fett gir 37 kJ per gram, mer enn dobbelt så mye som karbohydrater og proteiner (17 kJ/g).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-8-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er hovedfunksjonen til proteiner i kroppen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedfunksjonen til proteiner i kroppen?',
            solution: 'Å bygge og reparere kroppen',
            multipleChoiceOptions: ['Å bygge og reparere kroppen', 'Å gi rask energi', 'Å lagre energi', 'Å regulere temperaturen'],
          },
        ],
        solution: 'Proteiner bygger og reparerer vev, inkludert muskler, hud, hår og organer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-8-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke vitaminer er fettløselige?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke vitaminer er fettløselige?',
            solution: 'A, D, E og K',
            multipleChoiceOptions: ['A, D, E og K', 'B og C', 'Bare D', 'Alle vitaminer'],
          },
        ],
        solution: 'Vitamin A, D, E og K er fettløselige og lagres i kroppen. B-vitaminer og C er vannløselige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_8_1_2: TextbookChapter = {
  id: 'mat-8-1-2',
  courseId: 'mat-8',
  chapterNumber: '1.2',
  title: 'Kostholdsråd og matmerking',
  description: 'Lær om nasjonale kostholdsråd og hvordan du leser matmerking.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke informasjon på matvarer til å sammenligne næringsinnhold',
  ],
  content: [
    {
      id: 'mat-8-1-2-intro',
      type: 'text',
      content: `Helsemyndighetene gir kostholdsråd for å hjelpe oss å spise sunt. Matvaremerking gjør det lettere å velge sunne produkter.`,
    },
    {
      id: 'mat-8-1-2-text-1',
      type: 'text',
      content: `**De norske kostholdsrådene**

1. Spis minst 5 porsjoner grønnsaker og frukt hver dag
2. Velg grove kornprodukter
3. Spis fisk 2-3 ganger i uken
4. Velg magre meieriprodukter
5. Begrens inntak av rødt kjøtt og bearbeidet kjøtt
6. Velg matoljer og myk margarin
7. Begrens sukker og salt
8. Drikk vann`,
    },
    {
      id: 'mat-8-1-2-def-1',
      type: 'definition',
      title: 'Nøkkelhullet',
      content: `Nøkkelhullet er en merkeordning som hjelper deg å velge sunnere produkter. Matvarer med Nøkkelhullet har mindre fett, sukker og salt, og mer fiber enn lignende produkter.`,
    },
    {
      id: 'mat-8-1-2-text-2',
      type: 'text',
      content: `**Næringsdeklarasjon**

På pakken finner du næringsdeklarasjonen som viser per 100 g:
- Energi (kJ/kcal)
- Fett (hvorav mettet fett)
- Karbohydrater (hvorav sukkerarter)
- Fiber
- Protein
- Salt

**Ingrediensliste**: Ingrediensene listes etter mengde - det som står først, er det mest av.`,
    },
    {
      id: 'mat-8-1-2-tip-1',
      type: 'tip',
      title: 'Sammenlign per 100 g',
      content: `Når du sammenligner produkter, se på næringsverdier per 100 g, ikke per porsjon. Porsjons­størrelsen varierer mellom produsenter.`,
    },
    {
      id: 'mat-8-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-8-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange porsjoner frukt og grønt bør du spise daglig?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange porsjoner frukt og grønt bør du spise daglig?',
            solution: '5 porsjoner',
            multipleChoiceOptions: ['5 porsjoner', '2 porsjoner', '10 porsjoner', '1 porsjon'],
          },
        ],
        solution: 'Kostholdsrådene anbefaler minst 5 porsjoner frukt og grønnsaker daglig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-8-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr Nøkkelhullet på en matvare?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr Nøkkelhullet på en matvare?',
            solution: 'At varen er sunnere enn lignende produkter',
            multipleChoiceOptions: ['At varen er sunnere enn lignende produkter', 'At varen er økologisk', 'At varen er norsk', 'At varen er billig'],
          },
        ],
        solution: 'Nøkkelhullet viser at produktet har mindre fett, sukker og salt, og mer fiber enn tilsvarende produkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-8-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva står først i ingredienslisten?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva står først i ingredienslisten?',
            solution: 'Det det er mest av i produktet',
            multipleChoiceOptions: ['Det det er mest av i produktet', 'Det viktigste næringsstoffet', 'Det billigste ingrediensen', 'Allergener'],
          },
        ],
        solution: 'Ingrediensene listes etter mengde, med den ingrediensen det er mest av først.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-8-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør du sammenligne næringsverdier per 100 g?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor bør du sammenligne næringsverdier per 100 g?',
            solution: 'Fordi porsjonsstørrelser varierer mellom produkter',
            multipleChoiceOptions: ['Fordi porsjonsstørrelser varierer mellom produkter', 'Fordi alle spiser 100 g', 'Fordi det er lettere å regne', 'Fordi loven krever det'],
          },
        ],
        solution: 'Porsjonsstørrelser varierer mellom produsenter. Per 100 g gir en rettferdig sammenligning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Mathygiene og mattrygghet
// ============================================================================

export const CHAPTER_MAT_8_2_1: TextbookChapter = {
  id: 'mat-8-2-1',
  courseId: 'mat-8',
  chapterNumber: '2.1',
  title: 'Hygiene på kjøkkenet',
  description: 'Lær om god hygiene for å forebygge matbårne sykdommer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'praktisere god hygiene ved tilberedning av mat',
  ],
  content: [
    {
      id: 'mat-8-2-1-intro',
      type: 'text',
      content: `God hygiene på kjøkkenet er avgjørende for å unngå matforgiftning. Bakterier kan spre seg raskt i mat som ikke håndteres riktig.`,
    },
    {
      id: 'mat-8-2-1-def-1',
      type: 'definition',
      title: 'Matforgiftning',
      content: `Matforgiftning er sykdom forårsaket av å spise mat som inneholder skadelige bakterier, virus eller toksiner. Symptomer inkluderer kvalme, oppkast, diaré og magesmerter.`,
    },
    {
      id: 'mat-8-2-1-text-1',
      type: 'text',
      content: `**De fire hovedreglene for mathygiene**

1. **Rengjør** - Vask hender og overflater ofte
2. **Skill** - Hold rå og ferdig mat adskilt
3. **Kok** - Sørg for at maten er gjennomstekt/-kokt
4. **Kjøl** - Oppbevar mat ved riktig temperatur`,
    },
    {
      id: 'mat-8-2-1-text-2',
      type: 'text',
      content: `**Håndvask**

Vask hendene grundig med såpe og vann:
- Før du begynner å lage mat
- Etter å ha tatt på rått kjøtt eller fisk
- Etter toalettbesøk
- Etter å ha tatt på søppel
- Etter å ha host eller nyst

Vask i minst 20 sekunder - syng "Gratulerer med dagen" to ganger!`,
    },
    {
      id: 'mat-8-2-1-warning-1',
      type: 'warning',
      title: 'Kryssforurensning',
      content: `Bruk aldri samme skjærebrett til rått kjøtt og grønnsaker uten å vaske det grundig mellom. Bakterier fra rått kjøtt kan smitte over til mat som skal spises rå.`,
    },
    {
      id: 'mat-8-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-8-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Når må du vaske hendene på kjøkkenet?',
        subTasks: [
          {
            label: 'a',
            task: 'Når må du vaske hendene på kjøkkenet?',
            solution: 'Før matlaging og etter å ha tatt på rått kjøtt',
            multipleChoiceOptions: ['Før matlaging og etter å ha tatt på rått kjøtt', 'Bare før du begynner å lage mat', 'Bare etter matlaging', 'Det er ikke nødvendig'],
          },
        ],
        solution: 'Du må vaske hendene både før matlaging, etter å ha tatt på rått kjøtt/fisk, og flere andre ganger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-8-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er kryssforurensning?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er kryssforurensning?',
            solution: 'Når bakterier spres fra rå til ferdig mat',
            multipleChoiceOptions: ['Når bakterier spres fra rå til ferdig mat', 'Når mat blir for varm', 'Når man blander ingredienser', 'Når maten smaker vondt'],
          },
        ],
        solution: 'Kryssforurensning er når bakterier fra rå mat (som kjøtt) spres til mat som skal spises uten varmebehandling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-8-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke er de fire hovedreglene for mathygiene?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke er de fire hovedreglene for mathygiene?',
            solution: 'Rengjør, skill, kok, kjøl',
            multipleChoiceOptions: ['Rengjør, skill, kok, kjøl', 'Smak, lukt, se, hør', 'Vask, tørk, pakk, frys', 'Kjøp, lagre, spis, kast'],
          },
        ],
        solution: 'De fire hovedreglene er: Rengjør, Skill, Kok og Kjøl.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-8-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor lenge bør du vaske hendene?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor lenge bør du vaske hendene?',
            solution: '20 sekunder',
            multipleChoiceOptions: ['20 sekunder', '5 sekunder', '2 minutter', 'Det spiller ingen rolle'],
          },
        ],
        solution: 'Du bør vaske hendene i minst 20 sekunder med såpe og vann for å fjerne bakterier effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_8_2_2: TextbookChapter = {
  id: 'mat-8-2-2',
  courseId: 'mat-8',
  chapterNumber: '2.2',
  title: 'Oppbevaring av mat',
  description: 'Lær om riktig oppbevaring av mat for å unngå matsvinn og sykdom.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lagre mat på en trygg og bærekraftig måte',
  ],
  content: [
    {
      id: 'mat-8-2-2-intro',
      type: 'text',
      content: `Riktig oppbevaring av mat holder maten trygg å spise og reduserer matsvinn. Temperatur og emballasje er nøkkelfaktorer.`,
    },
    {
      id: 'mat-8-2-2-text-1',
      type: 'text',
      content: `**Temperaturkontroll**

- **Fryseren**: -18°C eller kaldere
- **Kjøleskapet**: 0-4°C
- **Romtemperatur**: Maks 2 timer for lett bedervelig mat
- **Faresonen**: 4-60°C - her vokser bakterier raskt

Lett bedervelige matvarer (kjøtt, fisk, melk) må oppbevares kaldt.`,
    },
    {
      id: 'mat-8-2-2-def-1',
      type: 'definition',
      title: 'Best før vs. Siste forbruksdag',
      content: `"Best før" betyr at kvaliteten er best før denne datoen, men maten kan ofte spises etterpå. "Siste forbruksdag" betyr at maten ikke bør spises etter denne datoen av helsemessige årsaker.`,
    },
    {
      id: 'mat-8-2-2-text-2',
      type: 'text',
      content: `**Oppbevaring i kjøleskapet**

- **Øverst**: Rester og ferdig mat
- **Midten**: Meieriprodukter, egg
- **Nederst**: Rått kjøtt og fisk (i lukket beholder)
- **Grønnsaksskuffen**: Frukt og grønnsaker
- **Døren**: Drikke, sauser (varmeste sonen)

Hold kjøleskapet ryddig og sjekk datoer regelmessig.`,
    },
    {
      id: 'mat-8-2-2-tip-1',
      type: 'tip',
      title: 'Reduser matsvinn',
      content: `Bruk sanser: Se, lukt og smak på mat som har passert "best før"-dato. Ofte er den helt fin å spise. Men vær forsiktig med "siste forbruksdag" på kjøtt og fisk.`,
    },
    {
      id: 'mat-8-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-8-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er riktig temperatur i kjøleskapet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er riktig temperatur i kjøleskapet?',
            solution: '0-4°C',
            multipleChoiceOptions: ['0-4°C', '10°C', '-18°C', '20°C'],
          },
        ],
        solution: 'Kjøleskapet bør holde 0-4°C for å holde maten trygg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-8-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på "best før" og "siste forbruksdag"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på "best før" og "siste forbruksdag"?',
            solution: '"Best før" er kvalitet, "siste forbruksdag" er sikkerhet',
            multipleChoiceOptions: ['"Best før" er kvalitet, "siste forbruksdag" er sikkerhet', 'Det er ingen forskjell', '"Best før" er strengere', 'Begge betyr at maten er farlig etter datoen'],
          },
        ],
        solution: '"Best før" handler om kvalitet - maten kan spises etter. "Siste forbruksdag" handler om sikkerhet - vær forsiktig!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-8-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor i kjøleskapet bør rått kjøtt oppbevares?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor i kjøleskapet bør rått kjøtt oppbevares?',
            solution: 'Nederst i lukket beholder',
            multipleChoiceOptions: ['Nederst i lukket beholder', 'Øverst', 'I døren', 'Det spiller ingen rolle'],
          },
        ],
        solution: 'Rått kjøtt bør oppbevares nederst i lukket beholder for å unngå at væske drypper på andre matvarer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-8-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er "faresonen" for matoppbevaring?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er "faresonen" for matoppbevaring?',
            solution: '4-60°C',
            multipleChoiceOptions: ['4-60°C', 'Under 0°C', 'Over 100°C', '0-4°C'],
          },
        ],
        solution: 'Faresonen er 4-60°C, der bakterier vokser raskt. Mat bør ikke stå i denne sonen mer enn 2 timer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Matlaging
// ============================================================================

export const CHAPTER_MAT_8_3_1: TextbookChapter = {
  id: 'mat-8-3-1',
  courseId: 'mat-8',
  chapterNumber: '3.1',
  title: 'Grunnleggende tilberedningsteknikker',
  description: 'Lær de viktigste teknikkene for å tilberede mat.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike tilberedningsteknikker',
  ],
  content: [
    {
      id: 'mat-8-3-1-intro',
      type: 'text',
      content: `Å kunne ulike tilberedningsteknikker gir deg frihet til å lage et bredt utvalg av retter. Teknikkene påvirker smak, tekstur og næringsinnhold.`,
    },
    {
      id: 'mat-8-3-1-text-1',
      type: 'text',
      content: `**Våte tilberedningsteknikker** (med væske)

- **Koke**: Mat dekkes av kokende vann (100°C)
- **Dampkoke**: Mat tilberedes over dampende vann
- **Posjere**: Forsiktig koking i væske under kokepunktet
- **Braisere**: Langtidssteking i væske med lokk`,
    },
    {
      id: 'mat-8-3-1-text-2',
      type: 'text',
      content: `**Tørre tilberedningsteknikker** (uten væske)

- **Steke i panne**: Rask steking på høy varme
- **Steke i ovn**: Langsom tilberedning med varm luft
- **Grille**: Direkte varme fra flamme eller element
- **Bake**: Ovnssteking, ofte med deig
- **Woke**: Rask steking på svært høy varme`,
    },
    {
      id: 'mat-8-3-1-def-1',
      type: 'definition',
      title: 'Karamellisering',
      content: `Karamellisering er når sukker varmes opp og blir brunt, noe som gir søt, nøtteaktig smak. Skjer også naturlig i grønnsaker ved steking.`,
    },
    {
      id: 'mat-8-3-1-tip-1',
      type: 'tip',
      title: 'Varm pannen først',
      content: `Når du steker, varm opp pannen før du tilsetter olje og mat. En varm panne hindrer at maten kleber og gir fin bruning.`,
    },
    {
      id: 'mat-8-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-8-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på koke og dampkoke?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på koke og dampkoke?',
            solution: 'Ved koking ligger maten i vannet, ved dampkoking over',
            multipleChoiceOptions: ['Ved koking ligger maten i vannet, ved dampkoking over', 'Det er ingen forskjell', 'Dampkoking er kaldere', 'Koking er sunnere'],
          },
        ],
        solution: 'Ved koking ligger maten nede i vannet, mens ved dampkoking tilberedes maten over dampende vann.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-8-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er karamellisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er karamellisering?',
            solution: 'Når sukker varmes og blir brunt',
            multipleChoiceOptions: ['Når sukker varmes og blir brunt', 'Når mat blir kald', 'Når mat koker over', 'Når mat tørker'],
          },
        ],
        solution: 'Karamellisering skjer når sukker varmes opp og blir brunt, noe som gir søt, nøtteaktig smak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-8-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken teknikk bruker svært høy varme og er vanlig i asiatisk matlaging?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken teknikk bruker svært høy varme og er vanlig i asiatisk matlaging?',
            solution: 'Woke',
            multipleChoiceOptions: ['Woke', 'Posjere', 'Braisere', 'Dampkoke'],
          },
        ],
        solution: 'Wok bruker svært høy varme for rask tilberedning og er typisk for asiatisk mat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-8-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør pannen være varm før du tilsetter olje og mat?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor bør pannen være varm før du tilsetter olje og mat?',
            solution: 'For å hindre at maten kleber og for å gi god bruning',
            multipleChoiceOptions: ['For å hindre at maten kleber og for å gi god bruning', 'For å spare tid', 'For at oljen skal lukte godt', 'Det er ikke viktig'],
          },
        ],
        solution: 'En varm panne hindrer at maten kleber seg fast og gir fin bruning (Maillard-reaksjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_8_3_2: TextbookChapter = {
  id: 'mat-8-3-2',
  courseId: 'mat-8',
  chapterNumber: '3.2',
  title: 'Følge oppskrifter',
  description: 'Lær å lese og følge oppskrifter, og forstå matlagingstermer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og lage trygge og sunne måltider',
  ],
  content: [
    {
      id: 'mat-8-3-2-intro',
      type: 'text',
      content: `En oppskrift er en veiledning for å lage en rett. Ved å forstå oppskrifter og matlagingstermer kan du lage nye retter og tilpasse dem etter smak.`,
    },
    {
      id: 'mat-8-3-2-text-1',
      type: 'text',
      content: `**Oppskriftens oppbygning**

En oppskrift inneholder vanligvis:
1. **Tittel** - Hva du skal lage
2. **Porsjoner** - Hvor mange den rekker til
3. **Tid** - Hvor lang tid det tar
4. **Ingrediensliste** - Hva du trenger
5. **Fremgangsmåte** - Steg for steg`,
    },
    {
      id: 'mat-8-3-2-text-2',
      type: 'text',
      content: `**Vanlige matlagingstermer**

- **Hakke**: Kutte i små biter
- **Snittes**: Kutte i tynne strimler
- **Jevne**: Tilsette mel/maisenna for å tykne
- **Smøre**: Legge smør på form
- **Vende**: Snu maten forsiktig
- **La hvile**: La maten stå før servering
- **Redusere**: Koke inn væske for sterkere smak`,
    },
    {
      id: 'mat-8-3-2-def-1',
      type: 'definition',
      title: 'Mise en place',
      content: `Mise en place (fransk: "alt på plass") betyr å måle opp og gjøre klar alle ingredienser før du begynner å lage maten. Dette gjør matlagingen enklere og raskere.`,
    },
    {
      id: 'mat-8-3-2-tip-1',
      type: 'tip',
      title: 'Les hele oppskriften først',
      content: `Les alltid gjennom hele oppskriften før du begynner. Da unngår du overraskelser og kan planlegge tiden bedre.`,
    },
    {
      id: 'mat-8-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-8-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva bør du gjøre før du begynner å lage mat etter en oppskrift?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bør du gjøre før du begynner å lage mat etter en oppskrift?',
            solution: 'Lese hele oppskriften først',
            multipleChoiceOptions: ['Lese hele oppskriften først', 'Bare lese første steg', 'Begynne med en gang', 'Bare se på ingredienslisten'],
          },
        ],
        solution: 'Les hele oppskriften før du begynner, så vet du hva som kreves og kan planlegge tiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-8-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr "mise en place"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "mise en place"?',
            solution: 'Å måle opp og gjøre klar alle ingredienser før start',
            multipleChoiceOptions: ['Å måle opp og gjøre klar alle ingredienser før start', 'Å rydde etter matlaging', 'Å servere maten pent', 'En type rett'],
          },
        ],
        solution: 'Mise en place betyr å ha alt klart før du begynner - alle ingredienser målt opp og redskaper fremme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-8-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr "redusere" i matlaging?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "redusere" i matlaging?',
            solution: 'Å koke inn væske for sterkere smak',
            multipleChoiceOptions: ['Å koke inn væske for sterkere smak', 'Å bruke mindre ingredienser', 'Å kutte i mindre biter', 'Å senke temperaturen'],
          },
        ],
        solution: 'Å redusere betyr å koke inn væske slik at smaken konsentreres og sausen blir tykkere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-8-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva betyr det å "jevne" en saus?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr det å "jevne" en saus?',
            solution: 'Å tilsette mel eller maisenna for å tykne',
            multipleChoiceOptions: ['Å tilsette mel eller maisenna for å tykne', 'Å gjøre den penere', 'Å smake til', 'Å fordele jevnt'],
          },
        ],
        solution: 'Å jevne betyr å tilsette et bindemiddel (som mel eller maisenna) for å gjøre sausen tykkere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Måltidsplanlegging
// ============================================================================

export const CHAPTER_MAT_8_4_1: TextbookChapter = {
  id: 'mat-8-4-1',
  courseId: 'mat-8',
  chapterNumber: '4.1',
  title: 'Planlegge måltider',
  description: 'Lær å planlegge ukemeny og handle smart.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og lage trygge og sunne måltider',
  ],
  content: [
    {
      id: 'mat-8-4-1-intro',
      type: 'text',
      content: `God måltidsplanlegging sparer tid og penger, reduserer matsvinn og gjør det lettere å spise sunt. En ukemeny gir oversikt og struktur.`,
    },
    {
      id: 'mat-8-4-1-text-1',
      type: 'text',
      content: `**Fordeler med ukemeny**

- Sparer tid på å bestemme hva du skal spise
- Handler effektivt - færre turer til butikken
- Reduserer matsvinn - kjøper bare det du trenger
- Lettere å spise variert og sunt
- Sparer penger - unngår impulskjøp`,
    },
    {
      id: 'mat-8-4-1-text-2',
      type: 'text',
      content: `**Tips for måltidsplanlegging**

1. **Sjekk hva du har** - Bruk opp det som snart går ut
2. **Tenk variasjon** - Ulike proteiner, grønnsaker og tilbehør
3. **Planlegg for rester** - Lag ekstra til neste dag
4. **Lag handleliste** - Følg listen i butikken
5. **Vær realistisk** - Planlegg for travle dager`,
    },
    {
      id: 'mat-8-4-1-def-1',
      type: 'definition',
      title: 'Tallerkenmodellen',
      content: `Tallerkenmodellen viser hvordan et sunt måltid bør settes sammen: 1/2 grønnsaker, 1/4 karbohydrater (kornprodukter, poteter), 1/4 protein (kjøtt, fisk, belgfrukter).`,
    },
    {
      id: 'mat-8-4-1-tip-1',
      type: 'tip',
      title: 'Handle mett',
      content: `Ikke gå i butikken sulten! Da er det lettere å motstå fristelser og holde seg til handlelisten.`,
    },
    {
      id: 'mat-8-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-8-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en fordel med ukemeny?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en fordel med ukemeny?',
            solution: 'Du sparer tid og penger',
            multipleChoiceOptions: ['Du sparer tid og penger', 'Du må handle oftere', 'Du spiser mer', 'Du kan kjøpe mer godteri'],
          },
        ],
        solution: 'Ukemeny sparer tid ved at du slipper å bestemme daglig, og penger ved at du handler effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-8-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Ifølge tallerkenmodellen, hvor mye av tallerkenen bør være grønnsaker?',
        subTasks: [
          {
            label: 'a',
            task: 'Ifølge tallerkenmodellen, hvor mye av tallerkenen bør være grønnsaker?',
            solution: '1/2',
            multipleChoiceOptions: ['1/2', '1/4', 'Hele tallerkenen', 'Ingenting'],
          },
        ],
        solution: 'Halvparten av tallerkenen bør være grønnsaker, 1/4 karbohydrater og 1/4 protein.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-8-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor bør du sjekke hva du har hjemme før du planlegger?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor bør du sjekke hva du har hjemme før du planlegger?',
            solution: 'For å bruke opp mat som snart går ut',
            multipleChoiceOptions: ['For å bruke opp mat som snart går ut', 'For å vite hvor mye plass du har', 'For å telle tallerkener', 'For å rydde'],
          },
        ],
        solution: 'Ved å sjekke hva du har, kan du planlegge måltider som bruker opp mat før den går ut på dato.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-8-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør du ikke handle mat når du er sulten?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor bør du ikke handle mat når du er sulten?',
            solution: 'Fordi du lettere kjøper usunne impulskjøp',
            multipleChoiceOptions: ['Fordi du lettere kjøper usunne impulskjøp', 'Fordi butikken er stengt', 'Fordi maten smaker bedre', 'Det spiller ingen rolle'],
          },
        ],
        solution: 'Når du er sulten, er det vanskeligere å motstå fristelser og du kjøper ofte mer usunt og mer enn planlagt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_8_4_2: TextbookChapter = {
  id: 'mat-8-4-2',
  courseId: 'mat-8',
  chapterNumber: '4.2',
  title: 'Økonomi og mat',
  description: 'Lær om matbudsjett og hvordan du handler økonomisk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere valg av matvarer ut fra etikk, bærekraft og økonomi',
  ],
  content: [
    {
      id: 'mat-8-4-2-intro',
      type: 'text',
      content: `Mat er en stor utgiftspost. Ved å handle smart og lage mat hjemme kan du spare mye penger uten å gå på kompromiss med kvalitet eller smak.`,
    },
    {
      id: 'mat-8-4-2-text-1',
      type: 'text',
      content: `**Spare penger på mat**

- **Lag mat fra bunnen** - Ferdigmat er dyrere
- **Kjøp sesongvarer** - Billigere og ferskere
- **Sammenlign kilopris** - Ikke bare pakkepris
- **Bruk tilbud klokt** - Bare kjøp det du trenger
- **Kjøp større pakker** - Ofte billigere per enhet
- **Reduser matsvinn** - Ikke kast mat du kan spise`,
    },
    {
      id: 'mat-8-4-2-def-1',
      type: 'definition',
      title: 'Kilopris',
      content: `Kilopris viser hvor mye varen koster per kilo (eller liter). Dette gjør det lettere å sammenligne priser på pakker i ulike størrelser.`,
    },
    {
      id: 'mat-8-4-2-text-2',
      type: 'text',
      content: `**Hjemmelaget vs. ferdigmat**

Eksempel: Pizza
- Ferdigpizza: ca. 60-100 kr
- Hjemmelaget pizza: ca. 30-50 kr (for samme størrelse)

Du sparer ofte 50% eller mer ved å lage mat selv. I tillegg kan du bestemme ingrediensene og gjøre maten sunnere.`,
    },
    {
      id: 'mat-8-4-2-tip-1',
      type: 'tip',
      title: 'Bruk frysen',
      content: `Kjøp stort når det er tilbud og frys ned. Brød, kjøtt og mange grønnsaker kan fryses og brukes senere.`,
    },
    {
      id: 'mat-8-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-8-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er kilopris?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er kilopris?',
            solution: 'Prisen per kilo av varen',
            multipleChoiceOptions: ['Prisen per kilo av varen', 'Prisen på pakken', 'Vekten på varen', 'Antall kalorier'],
          },
        ],
        solution: 'Kilopris viser prisen per kilo, slik at du enkelt kan sammenligne prisen på pakker i ulike størrelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-8-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er hjemmelaget mat ofte billigere enn ferdigmat?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er hjemmelaget mat ofte billigere enn ferdigmat?',
            solution: 'Fordi du ikke betaler for produksjon og emballasje',
            multipleChoiceOptions: ['Fordi du ikke betaler for produksjon og emballasje', 'Fordi ingrediensene er dårligere', 'Fordi det tar kortere tid', 'Det er ikke billigere'],
          },
        ],
        solution: 'Ved ferdigmat betaler du for produksjon, markedsføring og emballasje. Hjemmelaget slipper du dette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-8-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor bør du sammenligne kilopris når du handler?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor bør du sammenligne kilopris når du handler?',
            solution: 'For å finne ut hvilken pakke som gir mest for pengene',
            multipleChoiceOptions: ['For å finne ut hvilken pakke som gir mest for pengene', 'Fordi den største pakken alltid er best', 'Fordi pakkepris ikke vises', 'For å telle kalorier'],
          },
        ],
        solution: 'Kilopris viser den reelle prisen uavhengig av pakkestørrelse, så du kan finne beste kjøp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-8-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Når er det lurt å kjøpe større pakker?',
        subTasks: [
          {
            label: 'a',
            task: 'Når er det lurt å kjøpe større pakker?',
            solution: 'Når du vet at du rekker å bruke opp maten',
            multipleChoiceOptions: ['Når du vet at du rekker å bruke opp maten', 'Alltid', 'Aldri', 'Bare på ferdigmat'],
          },
        ],
        solution: 'Større pakker er bare en god deal hvis du faktisk bruker opp maten. Ellers blir det matsvinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Bærekraftig mat
// ============================================================================

export const CHAPTER_MAT_8_5_1: TextbookChapter = {
  id: 'mat-8-5-1',
  courseId: 'mat-8',
  chapterNumber: '5.1',
  title: 'Matsvinn',
  description: 'Lær om matsvinn og hvordan du kan redusere det.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere valg av matvarer ut fra etikk, bærekraft og økonomi',
  ],
  content: [
    {
      id: 'mat-8-5-1-intro',
      type: 'text',
      content: `Matsvinn er mat som kunne vært spist, men som kastes. I Norge kastes det over 400 000 tonn spiselig mat hvert år. Dette er dårlig for både miljøet og lommeboken.`,
    },
    {
      id: 'mat-8-5-1-def-1',
      type: 'definition',
      title: 'Matsvinn',
      content: `Matsvinn er nyttbar mat som kastes. Det inkluderer mat som har gått ut på dato, rester som ikke spises, og mat som kastes fordi vi kjøpte for mye.`,
    },
    {
      id: 'mat-8-5-1-text-1',
      type: 'text',
      content: `**Hvorfor er matsvinn et problem?**

- **Miljø**: Produksjon av mat krever ressurser (vann, energi, areal)
- **Klima**: Matproduksjon gir klimagassutslipp
- **Økonomi**: En norsk familie kaster mat for ca. 6000 kr i året
- **Etikk**: Mange mennesker i verden mangler mat`,
    },
    {
      id: 'mat-8-5-1-text-2',
      type: 'text',
      content: `**Reduser matsvinn**

1. **Planlegg** - Lag ukemeny og handleliste
2. **Oppbevar riktig** - Riktig temperatur og emballasje
3. **Bruk sansene** - Se, lukt, smak før du kaster
4. **Spis restene** - Lag nye retter av rester
5. **Frys ned** - Mat du ikke rekker å spise
6. **FIFO** - First In, First Out - bruk eldst mat først`,
    },
    {
      id: 'mat-8-5-1-tip-1',
      type: 'tip',
      title: 'Rester er ressurs',
      content: `Gårsdagens middag kan bli dagens lunsj! Stekt ris, wok, omelett og suppe er perfekte resteoppskrifter.`,
    },
    {
      id: 'mat-8-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-8-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er matsvinn?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er matsvinn?',
            solution: 'Spiselig mat som kastes',
            multipleChoiceOptions: ['Spiselig mat som kastes', 'Mat som er usunn', 'Mat som er billig', 'Mat som smaker vondt'],
          },
        ],
        solution: 'Matsvinn er nyttbar mat som kastes i stedet for å bli spist.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-8-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er matsvinn et miljøproblem?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er matsvinn et miljøproblem?',
            solution: 'Fordi matproduksjon krever ressurser og gir utslipp',
            multipleChoiceOptions: ['Fordi matproduksjon krever ressurser og gir utslipp', 'Fordi søppeldunkene blir fulle', 'Fordi maten lukter vondt', 'Det er ikke et miljøproblem'],
          },
        ],
        solution: 'Når vi kaster mat, sløser vi ressursene (vann, energi, areal) som ble brukt til å produsere den.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-8-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr FIFO?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr FIFO?',
            solution: 'First In, First Out - bruk eldst mat først',
            multipleChoiceOptions: ['First In, First Out - bruk eldst mat først', 'En type mat', 'En oppbevaringsmetode', 'En type kjøleskap'],
          },
        ],
        solution: 'FIFO betyr at maten som kom først inn, skal brukes først. Sett nye varer bakerst i skapet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-8-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Omtrent hvor mye mat kaster en norsk familie for hvert år?',
        subTasks: [
          {
            label: 'a',
            task: 'Omtrent hvor mye mat kaster en norsk familie for hvert år?',
            solution: 'Ca. 6000 kr',
            multipleChoiceOptions: ['Ca. 6000 kr', 'Ca. 500 kr', 'Ca. 100 kr', 'Ingenting'],
          },
        ],
        solution: 'En gjennomsnittlig norsk familie kaster mat for ca. 6000 kr i året - penger som kunne vært spart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_8_5_2: TextbookChapter = {
  id: 'mat-8-5-2',
  courseId: 'mat-8',
  chapterNumber: '5.2',
  title: 'Bærekraftige matvalg',
  description: 'Lær om miljøvennlige matvalg og matens klimaavtrykk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere valg av matvarer ut fra etikk, bærekraft og økonomi',
  ],
  content: [
    {
      id: 'mat-8-5-2-intro',
      type: 'text',
      content: `Matproduksjon står for en stor del av verdens klimagassutslipp. Ved å velge mat med lavt klimaavtrykk kan du bidra til en mer bærekraftig fremtid.`,
    },
    {
      id: 'mat-8-5-2-def-1',
      type: 'definition',
      title: 'Klimaavtrykk',
      content: `Klimaavtrykk måler hvor mye klimagasser (som CO₂) som slippes ut ved produksjon, transport og forbruk av en vare. Måles ofte i kg CO₂-ekvivalenter.`,
    },
    {
      id: 'mat-8-5-2-text-1',
      type: 'text',
      content: `**Matvarers klimaavtrykk**

Lavt klimaavtrykk:
- Grønnsaker, frukt og belgfrukter
- Korn og brød
- Egg og melkeprodukter

Høyt klimaavtrykk:
- Storfekjøtt (høyest av alle matvarer)
- Lammekjøtt
- Flyimporterte varer`,
    },
    {
      id: 'mat-8-5-2-text-2',
      type: 'text',
      content: `**Tips for bærekraftige matvalg**

1. **Spis mer plantebasert** - Grønnsaker, belgfrukter, nøtter
2. **Velg sesongvarer** - Mindre transport og drivhus
3. **Kjøp lokalt** - Kortere transportvei
4. **Varier proteinene** - Ikke bare rødt kjøtt
5. **Velg sertifisert** - Økologisk, MSC (fisk), Fairtrade
6. **Reduser matsvinn** - Den mest bærekraftige maten er den du spiser`,
    },
    {
      id: 'mat-8-5-2-note-1',
      type: 'note',
      title: 'Balansert kosthold',
      content: `Du trenger ikke slutte å spise kjøtt for å spise bærekraftig. Ved å redusere mengden og velge kylling eller fisk fremfor storfekjøtt, gjør du mye.`,
    },
    {
      id: 'mat-8-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-8-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken matgruppe har generelt lavest klimaavtrykk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken matgruppe har generelt lavest klimaavtrykk?',
            solution: 'Grønnsaker og belgfrukter',
            multipleChoiceOptions: ['Grønnsaker og belgfrukter', 'Storfekjøtt', 'Flyimportert frukt', 'Lammekjøtt'],
          },
        ],
        solution: 'Grønnsaker og belgfrukter har generelt lavest klimaavtrykk av alle matvarer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-8-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er klimaavtrykk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er klimaavtrykk?',
            solution: 'Mengden klimagasser som slippes ut ved produksjon',
            multipleChoiceOptions: ['Mengden klimagasser som slippes ut ved produksjon', 'Hvor mye maten veier', 'Hvor langt maten fraktes', 'Hvor sunn maten er'],
          },
        ],
        solution: 'Klimaavtrykk måler hvor mye klimagasser som slippes ut ved produksjon, transport og forbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-8-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor har storfekjøtt høyt klimaavtrykk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor har storfekjøtt høyt klimaavtrykk?',
            solution: 'Fordi kyr slipper ut metan og krever mye ressurser',
            multipleChoiceOptions: ['Fordi kyr slipper ut metan og krever mye ressurser', 'Fordi det er dyrt', 'Fordi det smaker godt', 'Fordi det er rødt'],
          },
        ],
        solution: 'Kyr slipper ut metan (en kraftig klimagass), og storfeproduksjon krever mye fôr, vann og areal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-8-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-8-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er sesongvarer ofte mer bærekraftige?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er sesongvarer ofte mer bærekraftige?',
            solution: 'Fordi de krever mindre transport og drivhus',
            multipleChoiceOptions: ['Fordi de krever mindre transport og drivhus', 'Fordi de smaker bedre', 'Fordi de er billigere', 'Fordi de er penere'],
          },
        ],
        solution: 'Sesongvarer dyrkes lokalt uten oppvarmet drivhus og trenger ikke fraktes langt, noe som gir lavere utslipp.',
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

export const MAT_8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MAT_8_1_1,
  CHAPTER_MAT_8_1_2,
  CHAPTER_MAT_8_2_1,
  CHAPTER_MAT_8_2_2,
  CHAPTER_MAT_8_3_1,
  CHAPTER_MAT_8_3_2,
  CHAPTER_MAT_8_4_1,
  CHAPTER_MAT_8_4_2,
  CHAPTER_MAT_8_5_1,
  CHAPTER_MAT_8_5_2,
];
