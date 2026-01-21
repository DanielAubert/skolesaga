/**
 * Tekstbok innhold for Naturfag 8. klasse
 *
 * Følger LK20 læreplan for naturfag ungdomstrinn.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Naturvitenskapelig metode
// ============================================================================

export const CHAPTER_NATURFAG_8_1_1: TextbookChapter = {
  id: 'naturfag-8-1-1',
  courseId: 'naturfag-8',
  chapterNumber: '1.1',
  title: 'Naturvitenskapelig metode',
  description: 'Lær hvordan forskere arbeider med hypoteser, eksperimenter og konklusjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'stille spørsmål og lage hypoteser om naturfaglige fenomener',
    'planlegge og gjennomføre undersøkelser'
  ],
  content: [
    {
      id: 'nat-8-1-1-intro',
      type: 'text',
      content: `
# Naturvitenskapelig metode

Naturvitenskap handler om å forstå verden rundt oss gjennom systematisk
observasjon og eksperimentering. Forskere bruker en bestemt metode for å
sikre at resultatene deres er pålitelige.
      `
    },
    {
      id: 'nat-8-1-1-def-metode',
      type: 'definition',
      title: 'Den naturvitenskapelige metoden',
      content: `Den **naturvitenskapelige metoden** er en systematisk fremgangsmåte for å undersøke fenomener:

1. **Observasjon** - Legg merke til noe interessant
2. **Spørsmål** - Still et spørsmål om det du observerte
3. **Hypotese** - Lag en testbar forklaring
4. **Eksperiment** - Test hypotesen
5. **Analyse** - Studer resultatene
6. **Konklusjon** - Var hypotesen riktig?`
    },
    {
      id: 'nat-8-1-1-hypotese',
      type: 'definition',
      title: 'Hypotese',
      content: `En **hypotese** er en testbar påstand som kan bekreftes eller avkreftes gjennom eksperimenter.

God hypotese: *"Planter vokser raskere med mer lys."*
Dårlig hypotese: *"Planter liker lys."* (Kan ikke måles)`
    },
    {
      id: 'nat-8-1-1-variabler',
      type: 'text',
      title: 'Variabler i eksperimenter',
      content: `
## Variabler

I et eksperiment har vi tre typer variabler:

**Uavhengig variabel**: Det du endrer (f.eks. mengde lys)

**Avhengig variabel**: Det du måler (f.eks. plantens høyde)

**Kontrollerte variabler**: Det du holder konstant (f.eks. vannmengde, temperatur)
      `
    },
    {
      id: 'nat-8-1-1-example',
      type: 'example',
      title: 'Eksempel: Planteeksperiment',
      problem: 'Du vil undersøke om planter vokser bedre med gjødsel. Hvordan setter du opp eksperimentet?',
      solution: `**Hypotese**: Planter som får gjødsel vokser høyere enn planter uten gjødsel.

**Uavhengig variabel**: Gjødsel (med/uten)

**Avhengig variabel**: Plantens høyde etter 2 uker

**Kontrollerte variabler**: Samme type plante, samme mengde vann, samme mengde lys, samme temperatur

**Oppsett**: To grupper med like planter - én får gjødsel, én får ikke. Mål høyden etter 2 uker.`
    },
    {
      id: 'nat-8-1-1-tip',
      type: 'tip',
      title: 'Kontrollgruppe',
      content: `En **kontrollgruppe** er en gruppe som ikke får behandlingen du tester.
Den gjør at du kan sammenligne og se om behandlingen faktisk har effekt.`
    },
    {
      id: 'nat-8-1-1-warning',
      type: 'warning',
      title: 'Vanlige feil',
      content: `Pass på disse fallgruvene:
- Endre flere variabler samtidig
- Ikke ha kontrollgruppe
- For få gjentakelser
- Trekke konklusjoner som ikke støttes av dataene`
    },
    {
      id: 'nat-8-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-8-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er en hypotese?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av en hypotese.',
            solution: 'En testbar påstand som kan bekreftes eller avkreftes',
            multipleChoiceOptions: [
              'En testbar påstand som kan bekreftes eller avkreftes',
              'Et bevist faktum som ikke kan endres',
              'En konklusjon fra et eksperiment',
              'Et spørsmål om naturen'
            ],
          },
        ],
        solution: 'En hypotese er en testbar påstand som kan bekreftes eller avkreftes gjennom eksperimenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-8-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'I et eksperiment om temperaturens effekt på gjæring, hva er den avhengige variabelen?',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser den avhengige variabelen i gjæringseksperimentet.',
            solution: 'Mengden CO₂ som produseres',
            multipleChoiceOptions: [
              'Mengden CO₂ som produseres',
              'Temperaturen',
              'Type gjær som brukes',
              'Mengden sukker i løsningen'
            ],
          },
        ],
        solution: 'Den avhengige variabelen er det du måler - i dette tilfellet hvor mye CO₂ som produseres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-8-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor trenger vi en kontrollgruppe i eksperimenter?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar formålet med en kontrollgruppe.',
            solution: 'For å ha noe å sammenligne med',
            multipleChoiceOptions: [
              'For å ha noe å sammenligne med',
              'For å spare tid under eksperimentet',
              'Fordi det er et krav fra læreren',
              'For å bruke opp alle materialene'
            ],
          },
        ],
        solution: 'Kontrollgruppen gir oss et sammenligningsgrunnlag for å se om behandlingen faktisk har effekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-8-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Planlegg et eksperiment for å teste om musikktype påvirker plantevekst.',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler en hypotese.',
            solution: 'Eksempel: "Planter som eksponeres for klassisk musikk vokser høyere enn planter uten musikk."',
            multipleChoiceOptions: [
              'Planter som eksponeres for klassisk musikk vokser høyere enn planter uten musikk',
              'Musikk er bra for planter',
              'Planter liker musikk',
              'Klassisk musikk er bedre enn popmusikk'
            ],
          },
          {
            label: 'b',
            task: 'Identifiser uavhengig, avhengig og kontrollerte variabler.',
            solution: 'Uavhengig: musikktype. Avhengig: plantehøyde. Kontrollerte: planteart, vann, lys, jord, temperatur.',
            multipleChoiceOptions: [
              'Uavhengig: musikktype, Avhengig: plantehøyde, Kontrollerte: planteart, vann, lys',
              'Uavhengig: plantehøyde, Avhengig: musikktype, Kontrollerte: temperatur',
              'Uavhengig: vann, Avhengig: musikk, Kontrollerte: planter',
              'Uavhengig: lys, Avhengig: vann, Kontrollerte: musikk'
            ],
          },
          {
            label: 'c',
            task: 'Beskriv hvordan du ville satt opp eksperimentet.',
            solution: 'Tre grupper: klassisk musikk, popmusikk, ingen musikk. Like planter, samme forhold ellers. Mål høyde ukentlig i 4 uker.',
            multipleChoiceOptions: [
              'Tre grupper med ulik musikk, like forhold ellers, mål høyde ukentlig',
              'En gruppe med alle musikktyper samtidig',
              'To planter med samme musikk',
              'Spill musikk i en uke og observer'
            ],
          }
        ],
        solution: 'Et godt eksperiment har klare variabler og kontrollgruppe.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Måling og usikkerhet
// ============================================================================

export const CHAPTER_NATURFAG_8_1_2: TextbookChapter = {
  id: 'naturfag-8-1-2',
  courseId: 'naturfag-8',
  chapterNumber: '1.2',
  title: 'Måling og usikkerhet',
  description: 'Lær om måleenheter, måleusikkerhet og hvordan presentere data.',
  estimatedMinutes: 40,
  competenceGoals: [
    'samle og bearbeide data og vurdere kvaliteten på egne resultater'
  ],
  content: [
    {
      id: 'nat-8-1-2-intro',
      type: 'text',
      content: `
# Måling og usikkerhet

Alle målinger har en viss usikkerhet. Å forstå denne usikkerheten er viktig
for å kunne tolke vitenskapelige resultater riktig.
      `
    },
    {
      id: 'nat-8-1-2-si',
      type: 'definition',
      title: 'SI-systemet',
      content: `**SI-systemet** er det internasjonale enhetssystemet som brukes i vitenskap:

| Størrelse | Enhet | Symbol |
|-----------|-------|--------|
| Lengde | meter | m |
| Masse | kilogram | kg |
| Tid | sekund | s |
| Temperatur | kelvin | K |
| Strøm | ampere | A |`
    },
    {
      id: 'nat-8-1-2-prefikser',
      type: 'text',
      title: 'Prefikser',
      content: `
## Prefikser for enheter

| Prefiks | Symbol | Faktor |
|---------|--------|--------|
| kilo- | k | 1000 (10³) |
| hekto- | h | 100 |
| desi- | d | 0,1 |
| centi- | c | 0,01 (10⁻²) |
| milli- | m | 0,001 (10⁻³) |
| mikro- | μ | 0,000001 (10⁻⁶) |

Eksempel: 1 km = 1000 m, 1 cm = 0,01 m
      `
    },
    {
      id: 'nat-8-1-2-usikkerhet',
      type: 'definition',
      title: 'Måleusikkerhet',
      content: `**Måleusikkerhet** angir hvor nøyaktig en måling er.

Hvis du måler en lengde til 15,3 cm ± 0,1 cm, betyr det at den sanne verdien sannsynligvis ligger mellom 15,2 og 15,4 cm.

Usikkerheten kommer fra:
- Instrumentets nøyaktighet
- Avlesningsfeil
- Tilfeldig variasjon`
    },
    {
      id: 'nat-8-1-2-gjennomsnitt',
      type: 'text',
      title: 'Gjennomsnitt',
      content: `
## Beregne gjennomsnitt

For å redusere tilfeldig feil, gjør vi flere målinger og beregner **gjennomsnittet**:

$$\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n}$$

Eksempel: Målinger av reaksjonstid: 0,23s, 0,25s, 0,22s, 0,26s, 0,24s

Gjennomsnitt = (0,23 + 0,25 + 0,22 + 0,26 + 0,24) / 5 = **0,24 s**
      `
    },
    {
      id: 'nat-8-1-2-tip',
      type: 'tip',
      title: 'Gjentatte målinger',
      content: `Gjør alltid minst 3 målinger (helst 5 eller flere) og beregn gjennomsnittet.
Dette reduserer tilfeldige feil og gir mer pålitelige resultater.`
    },
    {
      id: 'nat-8-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-8-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er SI-enheten for masse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig SI-grunnenhet for masse.',
            solution: 'Kilogram (kg)',
            multipleChoiceOptions: [
              'Kilogram (kg)',
              'Gram (g)',
              'Newton (N)',
              'Meter (m)'
            ],
          },
        ],
        solution: 'Kilogram (kg) er SI-grunnenheten for masse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-8-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange millimeter er 2,5 cm?',
        subTasks: [
          {
            label: 'a',
            task: 'Regn om fra centimeter til millimeter.',
            solution: '25 mm',
            multipleChoiceOptions: [
              '25 mm',
              '0,25 mm',
              '2,5 mm',
              '250 mm'
            ],
          },
        ],
        solution: '2,5 cm × 10 = 25 mm',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-8-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Du måler en temperatur fem ganger: 21°C, 22°C, 21°C, 23°C, 23°C. Hva er gjennomsnittet?',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn gjennomsnittlig temperatur.',
            solution: '22°C',
            multipleChoiceOptions: [
              '22°C',
              '21°C',
              '23°C',
              '110°C'
            ],
          },
        ],
        solution: '(21+22+21+23+23)/5 = 110/5 = 22°C',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-8-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Du måler lengden av et bord 5 ganger og får: 1,52m, 1,54m, 1,53m, 1,51m, 1,55m.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn gjennomsnittlig lengde.',
            solution: '(1,52+1,54+1,53+1,51+1,55)/5 = 7,65/5 = 1,53 m',
            multipleChoiceOptions: [
              '1,53 m',
              '1,52 m',
              '1,55 m',
              '7,65 m'
            ],
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom høyeste og laveste måling?',
            solution: '1,55 - 1,51 = 0,04 m = 4 cm',
            multipleChoiceOptions: [
              '0,04 m (4 cm)',
              '0,02 m (2 cm)',
              '0,10 m (10 cm)',
              '0,01 m (1 cm)'
            ],
          }
        ],
        solution: 'Gjennomsnitt = 1,53 m. Spredning = 0,04 m.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Atomer og periodesystemet
// ============================================================================

export const CHAPTER_NATURFAG_8_2_1: TextbookChapter = {
  id: 'naturfag-8-2-1',
  courseId: 'naturfag-8',
  chapterNumber: '2.1',
  title: 'Atomer og periodesystemet',
  description: 'Forstå atomets oppbygging og hvordan periodesystemet er organisert.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive atomets oppbygging og bruke periodesystemet til å finne informasjon om grunnstoffer'
  ],
  content: [
    {
      id: 'nat-8-2-1-intro',
      type: 'text',
      content: `
# Atomer og periodesystemet

Alt rundt oss er bygget opp av **atomer**. Et atom er den minste enheten av et
grunnstoff som fortsatt har grunnstoffets egenskaper.
      `
    },
    {
      id: 'nat-8-2-1-def-atom',
      type: 'definition',
      title: 'Atomets oppbygging',
      content: `Et atom består av:

**Kjernen** (i sentrum):
- **Protoner** - positivt ladet (+)
- **Nøytroner** - ingen ladning (0)

**Elektronskallet** (utenfor kjernen):
- **Elektroner** - negativt ladet (-)

Et nøytralt atom har like mange protoner som elektroner.`
    },
    {
      id: 'nat-8-2-1-atomnummer',
      type: 'text',
      title: 'Atomnummer og massetall',
      content: `
## Atomnummer og massetall

**Atomnummer (Z)** = antall protoner i kjernen
- Bestemmer hvilket grunnstoff det er
- Karbon har alltid 6 protoner

**Massetall (A)** = protoner + nøytroner
- Kan variere for samme grunnstoff (isotoper)

Eksempel: Karbon-12 har 6 protoner og 6 nøytroner (massetall = 12)
      `
    },
    {
      id: 'nat-8-2-1-periodesystem',
      type: 'definition',
      title: 'Periodesystemet',
      content: `**Periodesystemet** organiserer alle grunnstoffene etter atomnummer.

**Perioder** (vannrette rader): Viser antall elektronskall
- Periode 1: 1 skall
- Periode 2: 2 skall
- osv.

**Grupper** (loddrette kolonner): Viser antall elektroner i ytterste skall
- Gruppe 1: 1 elektron i ytterste skall
- Gruppe 18: 8 elektroner (edelgasser)`
    },
    {
      id: 'nat-8-2-1-example',
      type: 'example',
      title: 'Les periodesystemet',
      problem: 'Hva kan vi lese om natrium (Na) fra periodesystemet?',
      solution: `Fra periodesystemet ser vi:
- **Symbol**: Na
- **Atomnummer**: 11 (altså 11 protoner)
- **Atommasse**: ca. 23 (11 protoner + 12 nøytroner)
- **Periode**: 3 (har 3 elektronskall)
- **Gruppe**: 1 (alkalimetall, 1 elektron i ytterste skall)

Natrium er et reaktivt metall som lett avgir sitt ene ytterelektron.`
    },
    {
      id: 'nat-8-2-1-grupper',
      type: 'text',
      title: 'Viktige grupper',
      content: `
## Viktige grupper i periodesystemet

**Gruppe 1 - Alkalimetaller**: Li, Na, K...
- Svært reaktive metaller
- Reagerer kraftig med vann

**Gruppe 17 - Halogener**: F, Cl, Br, I
- Reaktive ikke-metaller
- Danner salter med metaller

**Gruppe 18 - Edelgasser**: He, Ne, Ar...
- Svært stabile, reagerer nesten ikke
- Fullt ytterste skall
      `
    },
    {
      id: 'nat-8-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-8-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvilken partikkel i atomet har positiv ladning?',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser partikkelen med positiv ladning.',
            solution: 'Proton',
            multipleChoiceOptions: [
              'Proton',
              'Elektron',
              'Nøytron',
              'Atomkjernen'
            ],
          },
        ],
        solution: 'Protoner har positiv ladning (+).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-8-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Et atom har 8 protoner. Hvilket grunnstoff er det?',
        subTasks: [
          {
            label: 'a',
            task: 'Finn grunnstoffet med atomnummer 8.',
            solution: 'Oksygen',
            multipleChoiceOptions: [
              'Oksygen',
              'Karbon',
              'Nitrogen',
              'Neon'
            ],
          },
        ],
        solution: 'Atomnummer 8 = oksygen (O).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-8-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva forteller gruppen (kolonnen) i periodesystemet oss?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva gruppen i periodesystemet viser.',
            solution: 'Antall elektroner i ytterste skall',
            multipleChoiceOptions: [
              'Antall elektroner i ytterste skall',
              'Antall protoner',
              'Antall elektronskall',
              'Antall nøytroner'
            ],
          },
        ],
        solution: 'Gruppen viser antall valenselektroner (elektroner i ytterste skall).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-8-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Bruk periodesystemet til å svare på spørsmålene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange protoner har klor (Cl)?',
            solution: 'Klor har atomnummer 17, altså 17 protoner.',
            multipleChoiceOptions: [
              '17 protoner',
              '35 protoner',
              '18 protoner',
              '7 protoner'
            ],
          },
          {
            label: 'b',
            task: 'Hvilken gruppe tilhører klor?',
            solution: 'Klor er i gruppe 17 (halogenene).',
            multipleChoiceOptions: [
              'Gruppe 17 (halogenene)',
              'Gruppe 1 (alkalimetallene)',
              'Gruppe 18 (edelgassene)',
              'Gruppe 2 (jordalkalimetallene)'
            ],
          },
          {
            label: 'c',
            task: 'Hvor mange elektronskall har klor?',
            solution: 'Klor er i periode 3, så det har 3 elektronskall.',
            multipleChoiceOptions: [
              '3 elektronskall',
              '2 elektronskall',
              '4 elektronskall',
              '17 elektronskall'
            ],
          }
        ],
        solution: 'Klor: 17 protoner, gruppe 17, 3 elektronskall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Kjemiske reaksjoner
// ============================================================================

export const CHAPTER_NATURFAG_8_2_2: TextbookChapter = {
  id: 'naturfag-8-2-2',
  courseId: 'naturfag-8',
  chapterNumber: '2.2',
  title: 'Kjemiske reaksjoner',
  description: 'Lær om hva som skjer i kjemiske reaksjoner og hvordan vi balanserer reaksjonslikninger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive kjemiske reaksjoner og balansere enkle reaksjonslikninger'
  ],
  content: [
    {
      id: 'nat-8-2-2-intro',
      type: 'text',
      content: `
# Kjemiske reaksjoner

I en **kjemisk reaksjon** omdannes stoffer til nye stoffer med andre egenskaper.
Atomene omorganiseres, men ingen atomer skapes eller forsvinner.
      `
    },
    {
      id: 'nat-8-2-2-def-reaksjon',
      type: 'definition',
      title: 'Reaktanter og produkter',
      content: `I en kjemisk reaksjon:

**Reaktanter**: Stoffene som reagerer (på venstre side av pilen)

**Produkter**: Stoffene som dannes (på høyre side av pilen)

$$\\text{Reaktanter} \\rightarrow \\text{Produkter}$$

Eksempel: $\\text{Hydrogen + Oksygen} \\rightarrow \\text{Vann}$`
    },
    {
      id: 'nat-8-2-2-tegn',
      type: 'text',
      title: 'Tegn på kjemisk reaksjon',
      content: `
## Tegn på at en kjemisk reaksjon har skjedd:

- Fargeendring
- Gassutvikling (bobler)
- Temperaturendring (varme/kulde)
- Bunnfall (fast stoff dannes i væske)
- Lysutvikling
- Luktendring
      `
    },
    {
      id: 'nat-8-2-2-balansering',
      type: 'text',
      title: 'Balansering av reaksjonslikninger',
      content: `
## Massebevaring

I en kjemisk reaksjon bevares massen - det er like mange atomer av hver type på begge sider.

**Ubalansert**: $H_2 + O_2 \\rightarrow H_2O$

Venstre side: 2 H, 2 O
Høyre side: 2 H, 1 O ❌

**Balansert**: $2H_2 + O_2 \\rightarrow 2H_2O$

Venstre side: 4 H, 2 O
Høyre side: 4 H, 2 O ✓
      `
    },
    {
      id: 'nat-8-2-2-example',
      type: 'example',
      title: 'Balanser en reaksjonslikning',
      problem: 'Balanser: $Fe + O_2 \\rightarrow Fe_2O_3$',
      solution: `**Steg 1**: Tell atomene
- Venstre: 1 Fe, 2 O
- Høyre: 2 Fe, 3 O

**Steg 2**: Balanser jern - trenger 2 Fe på venstre side
$2Fe + O_2 \\rightarrow Fe_2O_3$

**Steg 3**: Balanser oksygen - trenger 3 O på venstre
$2Fe + \\frac{3}{2}O_2 \\rightarrow Fe_2O_3$

**Steg 4**: Fjern brøker ved å gange med 2
$4Fe + 3O_2 \\rightarrow 2Fe_2O_3$ ✓

Sjekk: 4 Fe på hver side, 6 O på hver side.`
    },
    {
      id: 'nat-8-2-2-warning',
      type: 'warning',
      title: 'Viktig regel',
      content: `Når du balanserer, kan du bare endre **koeffisientene** (tallene foran formlene).
Du kan ALDRI endre **indeksene** (de små tallene i formlene).

✓ $2H_2O$ - riktig
✗ $H_4O_2$ - feil! Dette er et annet stoff.`
    },
    {
      id: 'nat-8-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-8-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva kalles stoffene som dannes i en kjemisk reaksjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig begrep for stoffene som dannes.',
            solution: 'Produkter',
            multipleChoiceOptions: [
              'Produkter',
              'Reaktanter',
              'Katalysatorer',
              'Elementer'
            ],
          },
        ],
        solution: 'Produkter er stoffene som dannes i en kjemisk reaksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-8-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilket av disse er IKKE et tegn på kjemisk reaksjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser hva som IKKE er et tegn på kjemisk reaksjon.',
            solution: 'Formendring (f.eks. knuse noe)',
            multipleChoiceOptions: [
              'Formendring (f.eks. knuse noe)',
              'Fargeendring',
              'Gassutvikling',
              'Temperaturendring'
            ],
          },
        ],
        solution: 'Å knuse noe er en fysisk endring, ikke en kjemisk reaksjon. Stoffet er fortsatt det samme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-8-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken reaksjonslikning er balansert?',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den balanserte reaksjonslikningen.',
            solution: '2H₂ + O₂ → 2H₂O',
            multipleChoiceOptions: [
              '2H₂ + O₂ → 2H₂O',
              'H₂ + O₂ → H₂O',
              'H₂ + O₂ → 2H₂O',
              '2H₂ + 2O₂ → 2H₂O'
            ],
          },
        ],
        solution: '2H₂ + O₂ → 2H₂O er riktig. 4 H og 2 O på hver side.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-8-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Balanser disse reaksjonslikningene.',
        subTasks: [
          {
            label: 'a',
            task: 'Balanser: N₂ + H₂ → NH₃',
            solution: 'N₂ + 3H₂ → 2NH₃ (2 N og 6 H på hver side)',
            multipleChoiceOptions: [
              'N₂ + 3H₂ → 2NH₃',
              'N₂ + H₂ → NH₃',
              '2N₂ + 3H₂ → 2NH₃',
              'N₂ + 2H₂ → 2NH₃'
            ],
          },
          {
            label: 'b',
            task: 'Balanser: C + O₂ → CO₂',
            solution: 'C + O₂ → CO₂ (allerede balansert: 1 C og 2 O på hver side)',
            multipleChoiceOptions: [
              'C + O₂ → CO₂ (allerede balansert)',
              '2C + O₂ → 2CO₂',
              'C + 2O₂ → CO₂',
              '2C + 2O₂ → 2CO₂'
            ],
          },
          {
            label: 'c',
            task: 'Balanser: Na + Cl₂ → NaCl',
            solution: '2Na + Cl₂ → 2NaCl (2 Na og 2 Cl på hver side)',
            multipleChoiceOptions: [
              '2Na + Cl₂ → 2NaCl',
              'Na + Cl₂ → NaCl',
              'Na + Cl₂ → 2NaCl',
              '2Na + 2Cl₂ → 2NaCl'
            ],
          }
        ],
        solution: 'Husk: like mange atomer av hver type på begge sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Energi og energiformer
// ============================================================================

export const CHAPTER_NATURFAG_8_3_1: TextbookChapter = {
  id: 'naturfag-8-3-1',
  courseId: 'naturfag-8',
  chapterNumber: '3.1',
  title: 'Energi og energiformer',
  description: 'Forstå hva energi er og de ulike formene energi kan ha.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive energikjeder og energibevaring'
  ],
  content: [
    {
      id: 'nat-8-3-1-intro',
      type: 'text',
      content: `
# Energi og energiformer

**Energi** er evnen til å utføre arbeid eller skape endringer. Energi kan ikke
skapes eller ødelegges, bare omdannes fra én form til en annen.
      `
    },
    {
      id: 'nat-8-3-1-def-energi',
      type: 'definition',
      title: 'Energiformer',
      content: `De viktigste energiformene er:

- **Kinetisk energi**: Bevegelsesenergi
- **Potensiell energi**: Lagret energi (høyde, strekk)
- **Kjemisk energi**: Lagret i bindinger (mat, bensin)
- **Varmeenergi**: Knyttet til temperatur
- **Elektrisk energi**: Bevegelse av ladninger
- **Lysenergi**: Elektromagnetisk stråling
- **Lydenergi**: Bølger i materie`
    },
    {
      id: 'nat-8-3-1-bevaring',
      type: 'theorem',
      title: 'Energibevaring',
      content: `**Energibevaringsloven**: Energi kan ikke skapes eller ødelegges, bare omdannes fra én form til en annen.

Total energi før = Total energi etter

I praksis omdannes ofte noe energi til varme, som spres og er vanskelig å utnytte.`
    },
    {
      id: 'nat-8-3-1-kjede',
      type: 'text',
      title: 'Energikjeder',
      content: `
## Energikjeder

En **energikjede** viser hvordan energi omdannes fra én form til en annen.

**Eksempel - Vannkraftverk:**
Potensiell energi (vann i høyden) → Kinetisk energi (fallende vann) → Kinetisk energi (turbin) → Elektrisk energi

**Eksempel - Bil:**
Kjemisk energi (bensin) → Varmeenergi (forbrenning) → Kinetisk energi (bevegelse)
      `
    },
    {
      id: 'nat-8-3-1-example',
      type: 'example',
      title: 'Energikjede for en lyspære',
      problem: 'Beskriv energikjeden fra kraftverk til lys i en pære.',
      solution: `**Energikjede:**

1. **Kjemisk energi** (kull/gass) eller **potensiell energi** (vann)
2. → **Varmeenergi** (forbrenning) eller **kinetisk energi** (turbin)
3. → **Elektrisk energi** (generator)
4. → **Lysenergi + varmeenergi** (lyspære)

Merk: Noe energi går alltid "tapt" som varme i hvert ledd.`
    },
    {
      id: 'nat-8-3-1-enhet',
      type: 'note',
      title: 'Energienhet',
      content: `Energi måles i **joule (J)**.

1 kilojoule (kJ) = 1000 J
1 kalori ≈ 4,2 J
1 kilowattime (kWh) = 3 600 000 J`
    },
    {
      id: 'nat-8-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-8-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva slags energi har en ball som ligger på et tak?',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser energitypen til ballen på taket.',
            solution: 'Potensiell energi',
            multipleChoiceOptions: [
              'Potensiell energi',
              'Kinetisk energi',
              'Kjemisk energi',
              'Varmeenergi'
            ],
          },
        ],
        solution: 'Ballen har potensiell (tyngde)energi på grunn av høyden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-8-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva sier energibevaringsloven?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig formulering av energibevaringsloven.',
            solution: 'Energi kan ikke skapes eller ødelegges, bare omdannes',
            multipleChoiceOptions: [
              'Energi kan ikke skapes eller ødelegges, bare omdannes',
              'Energi kan skapes av ingenting',
              'Energi forsvinner over tid',
              'Energi kan bare brukes én gang'
            ],
          },
        ],
        solution: 'Energibevaringsloven sier at total energi er konstant i et lukket system.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-8-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken energiomdanning skjer når du kaster en ball oppover?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv energiomdanningen når ballen stiger.',
            solution: 'Kinetisk → potensiell',
            multipleChoiceOptions: [
              'Kinetisk energi omdannes til potensiell energi',
              'Potensiell energi omdannes til kinetisk energi',
              'Kjemisk energi omdannes til kinetisk energi',
              'Elektrisk energi omdannes til kinetisk energi'
            ],
          },
        ],
        solution: 'Ballens bevegelsesenergi (kinetisk) omdannes til høydeenergi (potensiell) når den stiger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-8-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Beskriv energikjedene.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv energikjeden for en sykkel som ruller nedover en bakke.',
            solution: 'Potensiell energi → kinetisk energi (+ noe varmeenergi fra friksjon)',
            multipleChoiceOptions: [
              'Potensiell energi → kinetisk energi (+ varme fra friksjon)',
              'Kinetisk energi → potensiell energi',
              'Kjemisk energi → kinetisk energi',
              'Elektrisk energi → kinetisk energi'
            ],
          },
          {
            label: 'b',
            task: 'Beskriv energikjeden for en mobiltelefon som lades og deretter brukes til å spille musikk.',
            solution: 'Elektrisk energi → kjemisk energi (i batteriet) → elektrisk energi → lydenergi (+ varmeenergi)',
            multipleChoiceOptions: [
              'Elektrisk → kjemisk → elektrisk → lydenergi (+ varme)',
              'Kjemisk → elektrisk → lyd',
              'Elektrisk → lyd',
              'Kjemisk → kinetisk → lyd'
            ],
          }
        ],
        solution: 'Energikjeder viser hvordan energi omdannes gjennom flere steg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Cellen - livets byggestein
// ============================================================================

export const CHAPTER_NATURFAG_8_4_1: TextbookChapter = {
  id: 'naturfag-8-4-1',
  courseId: 'naturfag-8',
  chapterNumber: '4.1',
  title: 'Cellen - livets byggestein',
  description: 'Lær om cellens oppbygging og de viktigste organellene.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive cellens oppbygging og forklare hovedfunksjonene til celleorganellene'
  ],
  content: [
    {
      id: 'nat-8-4-1-intro',
      type: 'text',
      content: `
# Cellen - livets byggestein

Alle levende organismer er bygget opp av **celler**. Cellen er den minste enheten
som kan utføre alle livsprosessene.
      `
    },
    {
      id: 'nat-8-4-1-def-celle',
      type: 'definition',
      title: 'Celletyper',
      content: `Det finnes to hovedtyper celler:

**Prokaryote celler** (bakterier):
- Ingen cellekjerne
- Enklere oppbygning
- Mindre (1-10 μm)

**Eukaryote celler** (dyr, planter, sopp):
- Har cellekjerne
- Mer kompleks oppbygning
- Større (10-100 μm)`
    },
    {
      id: 'nat-8-4-1-organeller',
      type: 'text',
      title: 'Celleorganeller',
      content: `
## Viktige organeller i eukaryote celler

**Cellekjernen**: Inneholder DNA, styrer cellen

**Mitokondrier**: "Kraftverkene" - produserer ATP (energi)

**Ribosomer**: Produserer proteiner

**Endoplasmatisk retikulum (ER)**: Transportnett, proteinproduksjon

**Golgiapparatet**: Pakker og sender proteiner

**Cellemembran**: Beskytter cellen, kontrollerer hva som går inn/ut
      `
    },
    {
      id: 'nat-8-4-1-plantecelle',
      type: 'text',
      title: 'Planteceller vs. dyreceller',
      content: `
## Forskjeller mellom plante- og dyreceller

Planteceller har i tillegg:
- **Cellevegg**: Stiv vegg utenfor membranen (cellulose)
- **Kloroplaster**: Utfører fotosyntese (grønne)
- **Vakuole**: Stor væskefylt "pose" (lagring, turgor)

Dyreceller har IKKE cellevegg, kloroplaster eller stor vakuole.
      `
    },
    {
      id: 'nat-8-4-1-example',
      type: 'example',
      title: 'Cellens deler og funksjoner',
      problem: 'Hvorfor er mitokondrier viktige?',
      solution: `Mitokondrier kalles "cellens kraftverk" fordi de:

1. Bryter ned næringsstoffer (glukose)
2. Bruker oksygen i prosessen (celleånding)
3. Produserer **ATP** - cellens energivaluta

Uten mitokondrier kunne ikke cellen produsere nok energi til å fungere.

Celler som trenger mye energi (muskelceller, nerveceller) har ekstra mange mitokondrier.`
    },
    {
      id: 'nat-8-4-1-tip',
      type: 'tip',
      title: 'Huskeregel',
      content: `**Mitokondrier** = **M**otor (energi)
**Kloroplaster** = **K**jøkken (lager mat)
**Cellekjerne** = **K**ontroll (DNA/instruksjoner)
**Ribosom** = **R**esept (lager proteiner)`
    },
    {
      id: 'nat-8-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-8-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvilken organelle inneholder cellens DNA?',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser organellen som inneholder mesteparten av DNA.',
            solution: 'Cellekjernen',
            multipleChoiceOptions: [
              'Cellekjernen',
              'Mitokondrier',
              'Ribosomer',
              'Cellemembran'
            ],
          },
        ],
        solution: 'Cellekjernen inneholder mesteparten av cellens DNA.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-8-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilken struktur finnes i planteceller, men IKKE i dyreceller?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg strukturen som er unik for planteceller.',
            solution: 'Kloroplaster',
            multipleChoiceOptions: [
              'Kloroplaster',
              'Mitokondrier',
              'Cellemembran',
              'Cellekjerne'
            ],
          },
        ],
        solution: 'Kloroplaster finnes bare i planteceller og utfører fotosyntese.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-8-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er hovedfunksjonen til mitokondrier?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedfunksjonen til mitokondrier.',
            solution: 'Å produsere energi (ATP)',
            multipleChoiceOptions: [
              'Å produsere energi (ATP)',
              'Å utføre fotosyntese',
              'Å lagre DNA',
              'Å lage proteiner'
            ],
          },
        ],
        solution: 'Mitokondrier produserer ATP gjennom celleånding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-8-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign plante- og dyreceller.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre strukturer som finnes i begge celletyper.',
            solution: 'Cellekjerne, cellemembran, mitokondrier, ribosomer, ER, golgiapparat.',
            multipleChoiceOptions: [
              'Cellekjerne, cellemembran og mitokondrier',
              'Cellevegg, kloroplaster og vakuole',
              'Kloroplaster, mitokondrier og cellevegg',
              'Vakuole, cellekjerne og kloroplaster'
            ],
          },
          {
            label: 'b',
            task: 'Nevn tre strukturer som bare finnes i planteceller.',
            solution: 'Cellevegg, kloroplaster, stor vakuole.',
            multipleChoiceOptions: [
              'Cellevegg, kloroplaster og stor vakuole',
              'Mitokondrier, ribosomer og cellekjerne',
              'Cellemembran, ER og golgiapparat',
              'Ribosomer, cellevegg og mitokondrier'
            ],
          },
          {
            label: 'c',
            task: 'Forklar hvorfor planteceller trenger kloroplaster.',
            solution: 'Kloroplaster utfører fotosyntese - de omdanner sollys, CO₂ og vann til glukose og oksygen. Dette gir planten næring.',
            multipleChoiceOptions: [
              'Kloroplaster utfører fotosyntese som omdanner sollys til glukose',
              'Kloroplaster produserer ATP gjennom celleånding',
              'Kloroplaster lagrer vann i cellen',
              'Kloroplaster beskytter cellen mot bakterier'
            ],
          }
        ],
        solution: 'Plante- og dyreceller har mange felles strukturer, men planteceller har i tillegg cellevegg, kloroplaster og vakuole.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Fotosyntese og celleånding
// ============================================================================

export const CHAPTER_NATURFAG_8_4_2: TextbookChapter = {
  id: 'naturfag-8-4-2',
  courseId: 'naturfag-8',
  chapterNumber: '4.2',
  title: 'Fotosyntese og celleånding',
  description: 'Forstå hvordan planter lager mat og hvordan celler frigjør energi.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare fotosyntese og celleånding og sammenhengen mellom dem'
  ],
  content: [
    {
      id: 'nat-8-4-2-intro',
      type: 'text',
      content: `
# Fotosyntese og celleånding

**Fotosyntese** og **celleånding** er to sentrale prosesser i naturen.
De er motsatte reaksjoner som sammen holder energien i kretsløp.
      `
    },
    {
      id: 'nat-8-4-2-def-foto',
      type: 'definition',
      title: 'Fotosyntese',
      content: `**Fotosyntese** er prosessen der planter lager sukker fra sollys, vann og karbondioksid.

$$6CO_2 + 6H_2O + \\text{lysenergi} \\rightarrow C_6H_{12}O_6 + 6O_2$$

**Reaktanter**: Karbondioksid + vann + lysenergi
**Produkter**: Glukose + oksygen

Skjer i **kloroplastene** i planteceller.`
    },
    {
      id: 'nat-8-4-2-def-aanding',
      type: 'definition',
      title: 'Celleånding',
      content: `**Celleånding** er prosessen der celler frigjør energi fra glukose.

$$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{energi (ATP)}$$

**Reaktanter**: Glukose + oksygen
**Produkter**: Karbondioksid + vann + energi

Skjer i **mitokondriene** i alle celler.`
    },
    {
      id: 'nat-8-4-2-sammenheng',
      type: 'text',
      title: 'Sammenhengen',
      content: `
## Fotosyntese og celleånding henger sammen

- Produktene fra fotosyntese (glukose, O₂) er reaktantene i celleånding
- Produktene fra celleånding (CO₂, H₂O) er reaktantene i fotosyntese

Dette danner et **kretsløp**:

Planter: Fotosyntese (dag) + celleånding (hele tiden)
Dyr: Bare celleånding

Oksygenet vi puster inn kommer fra planters fotosyntese!
      `
    },
    {
      id: 'nat-8-4-2-note',
      type: 'note',
      title: 'Viktig forskjell',
      content: `**Fotosyntese**: Bygger opp (anabolsk) - lagrer energi i glukose
- Krever lysenergi
- Bare i planter (og noen bakterier)

**Celleånding**: Bryter ned (katabolsk) - frigjør energi
- Skjer hele tiden
- I ALLE levende celler`
    },
    {
      id: 'nat-8-4-2-example',
      type: 'example',
      title: 'Energiflyt i naturen',
      problem: 'Forklar hvordan energi fra sola ender opp i musklene dine.',
      solution: `**Energikjede:**

1. **Sol** → Lysenergi treffer planten

2. **Fotosyntese** (i planten):
   - Lysenergi + CO₂ + H₂O → Glukose + O₂
   - Energi lagres i glukosen

3. **Du spiser planten** (eller et dyr som spiste planten)

4. **Celleånding** (i dine celler):
   - Glukose + O₂ → CO₂ + H₂O + ATP

5. **ATP** brukes til muskelbevegelse

All energi i levende organismer kan spores tilbake til sola!`
    },
    {
      id: 'nat-8-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-8-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva produserer planter under fotosyntese?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg produktene fra fotosyntese.',
            solution: 'Glukose og oksygen',
            multipleChoiceOptions: [
              'Glukose og oksygen',
              'Karbondioksid og vann',
              'Bare oksygen',
              'Nitrogen og hydrogen'
            ],
          },
        ],
        solution: 'Fotosyntesen produserer glukose (C₆H₁₂O₆) og oksygen (O₂).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-8-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvor i cellen skjer celleånding?',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser organellen der celleånding skjer.',
            solution: 'I mitokondriene',
            multipleChoiceOptions: [
              'I mitokondriene',
              'I cellekjernen',
              'I kloroplastene',
              'I ribosomene'
            ],
          },
        ],
        solution: 'Mitokondriene er "cellens kraftverk" der celleåndingen skjer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-8-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken påstand om fotosyntese og celleånding er RIKTIG?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige påstanden.',
            solution: 'Produktene fra fotosyntese er reaktantene i celleånding',
            multipleChoiceOptions: [
              'Produktene fra fotosyntese er reaktantene i celleånding',
              'Bare planter utfører celleånding',
              'Fotosyntese skjer bare om natten',
              'Celleånding frigjør oksygen'
            ],
          },
        ],
        solution: 'Glukose og O₂ fra fotosyntese brukes i celleånding, og CO₂ og H₂O fra celleånding brukes i fotosyntese.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-8-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign fotosyntese og celleånding.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv ordlikningen for fotosyntese.',
            solution: 'Karbondioksid + vann + lysenergi → glukose + oksygen',
            multipleChoiceOptions: [
              'Karbondioksid + vann + lysenergi → glukose + oksygen',
              'Glukose + oksygen → karbondioksid + vann + energi',
              'Nitrogen + hydrogen → ammoniakk',
              'Oksygen + hydrogen → vann'
            ],
          },
          {
            label: 'b',
            task: 'Skriv ordlikningen for celleånding.',
            solution: 'Glukose + oksygen → karbondioksid + vann + energi (ATP)',
            multipleChoiceOptions: [
              'Glukose + oksygen → karbondioksid + vann + energi (ATP)',
              'Karbondioksid + vann + lysenergi → glukose + oksygen',
              'Vann → hydrogen + oksygen',
              'Nitrogen + oksygen → nitrogenoksid'
            ],
          },
          {
            label: 'c',
            task: 'Forklar hvorfor planter trenger både fotosyntese OG celleånding.',
            solution: 'Fotosyntese lager glukose, men planten trenger celleånding for å frigjøre energien i glukosen til bruk i cellene.',
            multipleChoiceOptions: [
              'Fotosyntese lager glukose, celleånding frigjør energien fra glukosen',
              'Fotosyntese gir oksygen, celleånding gir karbondioksid',
              'Planter trenger bare fotosyntese, ikke celleånding',
              'Fotosyntese og celleånding er det samme'
            ],
          }
        ],
        solution: 'Fotosyntese og celleånding er motsatte reaksjoner som utfyller hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.1: Kropp og helse - Fordøyelsessystemet
// ============================================================================

export const CHAPTER_NATURFAG_8_5_1: TextbookChapter = {
  id: 'naturfag-8-5-1',
  courseId: 'naturfag-8',
  chapterNumber: '5.1',
  title: 'Fordøyelsessystemet',
  description: 'Lær om hvordan kroppen bryter ned og tar opp næring fra maten.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive kroppens organsystemer og forklare hvordan de virker sammen'
  ],
  content: [
    {
      id: 'nat-8-5-1-intro',
      type: 'text',
      content: `
# Fordøyelsessystemet

**Fordøyelsen** bryter ned maten vi spiser til små molekyler som kroppen kan
ta opp og bruke til energi og bygging av celler.
      `
    },
    {
      id: 'nat-8-5-1-oversikt',
      type: 'definition',
      title: 'Fordøyelseskanalens deler',
      content: `Maten passerer gjennom:

1. **Munnen** - tygging og spytt
2. **Spiserøret** - transport til magen
3. **Magesekken** - sure fordøyelsessafter
4. **Tynntarmen** - det meste av fordøyelse og opptak
5. **Tykktarmen** - vannopptak
6. **Endetarmen** - lagring av avfall`
    },
    {
      id: 'nat-8-5-1-enzymer',
      type: 'text',
      title: 'Enzymer',
      content: `
## Fordøyelsesenzymer

**Enzymer** er proteiner som bryter ned næringsstoffer:

- **Amylase** (spytt): Bryter ned stivelse til sukker
- **Pepsin** (mage): Bryter ned proteiner
- **Lipase** (bukspytt): Bryter ned fett
- **Trypsin** (bukspytt): Bryter ned proteiner videre

Hvert enzym virker best ved bestemte forhold (pH, temperatur).
      `
    },
    {
      id: 'nat-8-5-1-naering',
      type: 'text',
      title: 'Næringsstoffer',
      content: `
## Tre hovednæringsstoffer

**Karbohydrater** → glukose (sukker)
- Hovedenergikilde

**Proteiner** → aminosyrer
- Byggesteiner for celler

**Fett** → fettsyrer og glyserol
- Energilager, cellemembran
      `
    },
    {
      id: 'nat-8-5-1-opptak',
      type: 'text',
      title: 'Opptak i tynntarmen',
      content: `
## Opptak av næringsstoffer

Tynntarmen har **tarmtotter** - små fingerlignende utvekster som øker overflaten enormt.

Næringsstoffene tas opp gjennom tarmveggen til blodet og fraktes til cellene.

Total overflate i tynntarmen: ca. **250 m²** (som en tennisbane!)
      `
    },
    {
      id: 'nat-8-5-1-example',
      type: 'example',
      title: 'Følg et brødstykke',
      problem: 'Hva skjer med et stykke brød fra du spiser det til næringen når cellene?',
      solution: `1. **Munnen**: Brødet tygges og blandes med spytt. Amylase begynner å bryte ned stivelse.

2. **Magesekken**: Brødet blandes med magesyre. Proteiner begynner å brytes ned.

3. **Tynntarmen**: Bukspyttkjertelen sender enzymer. Stivelse → glukose. Glukose tas opp gjennom tarmtottene til blodet.

4. **Blodet**: Glukose fraktes til alle kroppens celler.

5. **Cellene**: Glukose + oksygen → energi (ATP) i mitokondriene (celleånding).`
    },
    {
      id: 'nat-8-5-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-8-5-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvor starter fordøyelsen av stivelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser hvor stivelsesfordøyelsen begynner.',
            solution: 'I munnen',
            multipleChoiceOptions: [
              'I munnen',
              'I magen',
              'I tynntarmen',
              'I tykktarmen'
            ],
          },
        ],
        solution: 'Enzymet amylase i spyttet begynner å bryte ned stivelse allerede i munnen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-5-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-8-5-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er hovedfunksjonen til tarmtotter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedfunksjonen til tarmtotter.',
            solution: 'Å øke overflaten for næringsopptak',
            multipleChoiceOptions: [
              'Å øke overflaten for næringsopptak',
              'Å produsere enzymer',
              'Å lagre næringsstoffer',
              'Å drepe bakterier'
            ],
          },
        ],
        solution: 'Tarmtottene øker overflaten i tynntarmen enormt, noe som gjør opptaket mer effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-5-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-8-5-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Proteiner brytes ned til:',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva proteiner brytes ned til.',
            solution: 'Aminosyrer',
            multipleChoiceOptions: [
              'Aminosyrer',
              'Glukose',
              'Fettsyrer',
              'Stivelse'
            ],
          },
        ],
        solution: 'Proteiner brytes ned til aminosyrer, som kroppen bruker til å bygge egne proteiner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-8-5-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-8-5-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Beskriv fordøyelsessystemet.',
        subTasks: [
          {
            label: 'a',
            task: 'List de seks hoveddelene av fordøyelseskanalen i riktig rekkefølge.',
            solution: 'Munn → spiserør → magesekk → tynntarm → tykktarm → endetarm',
            multipleChoiceOptions: [
              'Munn → spiserør → magesekk → tynntarm → tykktarm → endetarm',
              'Munn → magesekk → spiserør → tynntarm → tykktarm → endetarm',
              'Munn → spiserør → tynntarm → magesekk → tykktarm → endetarm',
              'Munn → spiserør → magesekk → tykktarm → tynntarm → endetarm'
            ],
          },
          {
            label: 'b',
            task: 'Forklar hvorfor magen er sur (lav pH).',
            solution: 'Magesyren (HCl) dreper bakterier i maten og aktiverer enzymet pepsin som bryter ned proteiner. Pepsin virker best i surt miljø.',
            multipleChoiceOptions: [
              'Magesyren dreper bakterier og aktiverer pepsin som bryter ned proteiner',
              'Magesyren bryter ned karbohydrater',
              'Magesyren absorberer næringsstoffer',
              'Magesyren produserer vitaminer'
            ],
          }
        ],
        solution: 'Fordøyelseskanalen er et sammenhengende system fra munn til endetarm.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// Eksporter alle kapitler
export const NATURFAG_8_CHAPTERS = [
  CHAPTER_NATURFAG_8_1_1,
  CHAPTER_NATURFAG_8_1_2,
  CHAPTER_NATURFAG_8_2_1,
  CHAPTER_NATURFAG_8_2_2,
  CHAPTER_NATURFAG_8_3_1,
  CHAPTER_NATURFAG_8_4_1,
  CHAPTER_NATURFAG_8_4_2,
  CHAPTER_NATURFAG_8_5_1,
];
