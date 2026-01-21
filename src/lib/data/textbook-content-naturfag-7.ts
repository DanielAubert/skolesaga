/**
 * Tekstbok innhold for Naturfag 7. klasse
 *
 * Følger LK20 læreplan for naturfag ungdomsskole.
 * Innhold tilpasset 12-13 åringer.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Nervesystemet
// ============================================================================

export const CHAPTER_NATURFAG_7_1_1: TextbookChapter = {
  id: 'naturfag-7-1-1',
  courseId: 'naturfag-7',
  chapterNumber: '1.1',
  title: 'Nervesystemet',
  description: 'Hjerne, ryggmarg og nerver.',
  estimatedMinutes: 45,
  competenceGoals: ['forklare nervesystemet'],
  content: [
    {
      id: 'nat-7-1-1-intro',
      type: 'text',
      content: `
# Nervesystemet

Nervesystemet er kroppens kommunikasjonssystem. Det sender beskjeder mellom hjernen og resten av kroppen raskere enn noen datamaskin. Hver gang du tenker, føler, beveger deg eller sanser noe, er nervesystemet i aksjon.
      `
    },
    {
      id: 'nat-7-1-1-def-nervesystem',
      type: 'definition',
      title: 'Nervesystemet',
      content: `**Nervesystemet** er kroppens kontrollsenter som styrer alt vi gjør - både bevisste handlinger (som å løfte armen) og ubevisste prosesser (som å puste).

Nervesystemet deles inn i:
- **Sentralnervesystemet (SNS)**: Hjernen og ryggmargen
- **Det perifere nervesystemet (PNS)**: Alle nervene i resten av kroppen`
    },
    {
      id: 'nat-7-1-1-hjernen',
      type: 'text',
      title: 'Hjernen',
      content: `
## Hjernen - kroppens hovedkvarter

Hjernen veier bare ca. 1,4 kg, men bruker 20% av all energien din! Den består av ca. **86 milliarder nerveceller**.

**Hjernens deler:**

**Storhjernen** (den største delen)
- Delt i to halvdeler (hemisfærer)
- Styrer tenkning, hukommelse, språk og bevisste bevegelser
- Har ulike områder for ulike funksjoner

**Lillehjernen** (bak i hodet)
- Styrer balanse og koordinasjon
- Gjør bevegelser presise og smidige

**Hjernestammen** (nederst)
- Styrer livsviktige funksjoner: pust, hjerteslag, søvn
- Kobler hjernen til ryggmargen
      `
    },
    {
      id: 'nat-7-1-1-def-nervecelle',
      type: 'definition',
      title: 'Nerveceller (nevroner)',
      content: `**Nerveceller** eller **nevroner** er spesialiserte celler som sender elektriske signaler.

**En nervecelle består av:**
- **Cellekropp**: Inneholder cellekjernen
- **Dendritter**: Korte utløpere som mottar signaler
- **Akson**: Lang utløper som sender signaler videre
- **Synapse**: Koblingspunkt mellom nerveceller

Signaler kan bevege seg med opptil **400 km/t** i noen nerveceller!`
    },
    {
      id: 'nat-7-1-1-def-refleks',
      type: 'definition',
      title: 'Reflekser',
      content: `**Reflekser** er raske, automatiske reaksjoner som skjer uten at hjernen er involvert.

**Eksempler på reflekser:**
- Trekke hånden vekk fra noe varmt
- Blunke når noe kommer mot øyet
- Knerefleksen når legen banker på kneet

**Refleksbuen:** Sanseorgan → Sensorisk nerve → Ryggmarg → Motorisk nerve → Muskel`
    },
    {
      id: 'nat-7-1-1-sanser',
      type: 'text',
      title: 'Sansene',
      content: `
## Sansene - vinduene til verden

Vi har fem hovedsanser som samler informasjon fra omgivelsene:

**Syn** - Øynene fanger opp lys
**Hørsel** - Ørene fanger opp lydbølger
**Lukt** - Nesen fanger opp luktmolekyler
**Smak** - Tungen kjenner søtt, surt, salt, bittert og umami
**Følesans** - Huden kjenner trykk, temperatur og smerte
      `
    },
    {
      id: 'nat-7-1-1-example',
      type: 'example',
      title: 'Hva skjer når du tar på noe varmt?',
      problem: 'Du tar på en varm kopp. Hva skjer i nervesystemet?',
      solution: `**Steg for steg:**

1. **Sansereseptorer** i huden registrerer varmen
2. **Sensoriske nerver** sender signal til ryggmargen
3. **Ryggmargen** sender reflekssignal tilbake (du trekker hånden vekk)
4. **Samtidig** sendes signal til hjernen
5. **Hjernen** tolker signalet som "varmt" og du føler smerten

Refleksen skjer før du rekker å tenke!`
    },
    {
      id: 'nat-7-1-1-tip',
      type: 'tip',
      title: 'Ta vare på hjernen',
      content: `Hjernen trenger:
- **Søvn** - 8-10 timer for ungdom
- **Fysisk aktivitet** - øker blodtilførselen
- **God mat** - spesielt omega-3 fettsyrer
- **Utfordringer** - lær nye ting for å styrke hjernen
- **Beskyttelse** - bruk hjelm ved sykling!`
    },
    {
      id: 'nat-7-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-7-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er sentralnervesystemet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva sentralnervesystemet består av.',
            solution: 'Hjernen og ryggmargen',
            multipleChoiceOptions: [
              'Hjernen og ryggmargen',
              'Alle nervene i kroppen',
              'Bare hjernen',
              'Musklene og skjelettet'
            ],
          },
        ],
        solution: 'Sentralnervesystemet (SNS) består av hjernen og ryggmargen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-7-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva styrer lillehjernen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg lillehjernens hovedoppgave.',
            solution: 'Balanse og koordinasjon',
            multipleChoiceOptions: [
              'Balanse og koordinasjon',
              'Tenkning og hukommelse',
              'Pust og hjerteslag',
              'Syn og hørsel'
            ],
          },
        ],
        solution: 'Lillehjernen styrer balanse og koordinasjon av bevegelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-7-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er en refleks?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av en refleks.',
            solution: 'En rask, automatisk reaksjon uten hjernens medvirkning',
            multipleChoiceOptions: [
              'En rask, automatisk reaksjon uten hjernens medvirkning',
              'En langsom, gjennomtenkt handling',
              'En følelse du får når du er redd',
              'En type muskel i kroppen'
            ],
          },
        ],
        solution: 'En refleks er en rask, automatisk reaksjon som styres av ryggmargen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-7-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Om nerveceller og hjernen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva heter den lange utløperen på en nervecelle som sender signaler?',
            solution: 'Akson',
            multipleChoiceOptions: ['Akson', 'Dendritt', 'Synapse', 'Cellekropp'],
          },
          {
            label: 'b',
            task: 'Hvilken del av hjernen styrer pust og hjerteslag?',
            solution: 'Hjernestammen',
            multipleChoiceOptions: ['Hjernestammen', 'Storhjernen', 'Lillehjernen', 'Ryggmargen'],
          },
          {
            label: 'c',
            task: 'Omtrent hvor mange nerveceller har hjernen?',
            solution: '86 milliarder',
            multipleChoiceOptions: ['86 milliarder', '86 millioner', '86 tusen', '860 milliarder'],
          }
        ],
        solution: 'Aksonet sender signaler, hjernestammen styrer livsviktige funksjoner, og hjernen har ca. 86 milliarder nerveceller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Hormoner og pubertet
// ============================================================================

export const CHAPTER_NATURFAG_7_1_2: TextbookChapter = {
  id: 'naturfag-7-1-2',
  courseId: 'naturfag-7',
  chapterNumber: '1.2',
  title: 'Hormoner og pubertet',
  description: 'Hormonelle endringer.',
  estimatedMinutes: 50,
  competenceGoals: ['forstå hormonelle endringer'],
  content: [
    {
      id: 'nat-7-1-2-intro',
      type: 'text',
      content: `
# Hormoner og pubertet

Kroppen din gjennomgår store forandringer i ungdomsårene. Disse endringene styres av **hormoner** - kjemiske budbringere som sendes rundt i blodet.
      `
    },
    {
      id: 'nat-7-1-2-def-hormon',
      type: 'definition',
      title: 'Hormoner',
      content: `**Hormoner** er kjemiske stoffer som produseres i kjertler og fraktes med blodet til målorganer i kroppen.

**Viktige egenskaper:**
- Virker langsommere enn nervesignaler
- Har langvarig effekt
- Trengs bare i små mengder
- Styrer vekst, stoffskifte, humør og utvikling`
    },
    {
      id: 'nat-7-1-2-kjertler',
      type: 'text',
      title: 'Hormonkjertler',
      content: `
## Viktige hormonkjertler

**Hypofysen** (i hjernen) - "Sjefsklertelen" som styrer andre kjertler
**Skjoldbruskkjertelen** (i halsen) - Styrer stoffskiftet
**Bukspyttkjertelen** - Produserer insulin som regulerer blodsukker
**Binyrene** - Produserer adrenalin (stresshormon)
**Kjønnskjertlene** - Testikler hos gutter, eggstokker hos jenter
      `
    },
    {
      id: 'nat-7-1-2-def-pubertet',
      type: 'definition',
      title: 'Puberteten',
      content: `**Puberteten** er perioden der kroppen utvikler seg fra barn til voksen. Den starter vanligvis mellom 8-13 år hos jenter og 9-14 år hos gutter.

**Hva setter i gang puberteten?**
Hypofysen sender signaler til kjønnskjertlene om å produsere kjønnshormoner. Disse hormonene setter i gang alle forandringene.`
    },
    {
      id: 'nat-7-1-2-endringer',
      type: 'text',
      title: 'Endringer i puberteten',
      content: `
## Fysiske endringer

**Hos alle:**
- Vekstspurt (rask vekst i høyde)
- Hårvekst under armene og på kjønnsorganene
- Huden blir mer fet, kan få kviser
- Svetter mer, ny kroppslukt
- Stemmen blir dypere

Puberteten påvirker også følelsene - humørsvingninger er normalt!
      `
    },
    {
      id: 'nat-7-1-2-example',
      type: 'example',
      title: 'Adrenalin - kjemp eller flykt',
      problem: 'Hva skjer i kroppen når du blir redd eller stresset?',
      solution: `**Adrenalinkick:**

Når du opplever fare eller stress, produserer binyrene **adrenalin**:

1. **Hjertet** slår raskere - mer blod til musklene
2. **Pusten** øker - mer oksygen
3. **Pupillene** utvides - bedre syn
4. **Muskler** strammer seg - klar til handling

Dette kalles "kjemp eller flykt"-responsen.`
    },
    {
      id: 'nat-7-1-2-tip',
      type: 'tip',
      title: 'Takle puberteten',
      content: `Tips for å håndtere endringene:
- **Snakk med noen** - foreldre, venner eller helsesykepleier
- **Vær tålmodig** - alle utvikler seg i ulikt tempo
- **Ta vare på deg selv** - søvn, mat og mosjon hjelper
- **Normal variasjon** - det finnes ingen "riktig" måte å utvikle seg på`
    },
    {
      id: 'nat-7-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-7-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er hormoner?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av hormoner.',
            solution: 'Kjemiske stoffer som fraktes med blodet og styrer kroppsfunksjoner',
            multipleChoiceOptions: [
              'Kjemiske stoffer som fraktes med blodet og styrer kroppsfunksjoner',
              'Elektriske signaler som sendes gjennom nervene',
              'Næringsstoffer vi får fra maten',
              'Bakterier som lever i kroppen'
            ],
          },
        ],
        solution: 'Hormoner er kjemiske stoffer som produseres i kjertler og fraktes med blodet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-7-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilken kjertel kalles "sjefsklertelen"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg kjertelen som styrer de andre hormonkjertlene.',
            solution: 'Hypofysen',
            multipleChoiceOptions: ['Hypofysen', 'Skjoldbruskkjertelen', 'Bukspyttkjertelen', 'Binyrene'],
          },
        ],
        solution: 'Hypofysen kalles sjefsklertelen fordi den styrer de andre hormonkjertlene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-7-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva setter i gang puberteten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva som starter puberteten.',
            solution: 'Hypofysen sender signaler til kjønnskjertlene',
            multipleChoiceOptions: [
              'Hypofysen sender signaler til kjønnskjertlene',
              'Vi bestemmer selv når puberteten skal starte',
              'Maten vi spiser avgjør når puberteten starter',
              'Nervesystemet sender elektriske signaler'
            ],
          },
        ],
        solution: 'Puberteten starter når hypofysen signaliserer kjønnskjertlene om å produsere kjønnshormoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-7-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Om hormoner og kjertler.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket hormon produseres når du blir redd?',
            solution: 'Adrenalin',
            multipleChoiceOptions: ['Adrenalin', 'Insulin', 'Testosteron', 'Østrogen'],
          },
          {
            label: 'b',
            task: 'Hvilket hormon regulerer blodsukkeret?',
            solution: 'Insulin',
            multipleChoiceOptions: ['Insulin', 'Adrenalin', 'Veksthormon', 'Progesteron'],
          },
          {
            label: 'c',
            task: 'Hva er en vanlig psykisk endring i puberteten?',
            solution: 'Humørsvingninger',
            multipleChoiceOptions: ['Humørsvingninger', 'Tap av hukommelse', 'Redusert intelligens', 'Konstant glede'],
          }
        ],
        solution: 'Adrenalin frigjøres ved stress, insulin regulerer blodsukker, og humørsvingninger er vanlig i puberteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Økosystemer
// ============================================================================

export const CHAPTER_NATURFAG_7_2_1: TextbookChapter = {
  id: 'naturfag-7-2-1',
  courseId: 'naturfag-7',
  chapterNumber: '2.1',
  title: 'Økosystemer',
  description: 'Samspill i naturen.',
  estimatedMinutes: 50,
  competenceGoals: ['beskrive økosystemer'],
  content: [
    {
      id: 'nat-7-2-1-intro',
      type: 'text',
      content: `
# Økosystemer

I naturen lever planter, dyr, sopp og mikroorganismer sammen i et komplisert nettverk. De er avhengige av hverandre og av miljøet rundt seg. Dette samspillet kaller vi et **økosystem**.
      `
    },
    {
      id: 'nat-7-2-1-def-okosystem',
      type: 'definition',
      title: 'Økosystem',
      content: `Et **økosystem** er et avgrenset område i naturen der levende organismer samspiller med hverandre og med det ikke-levende miljøet.

**Biotiske faktorer** (levende): Planter, dyr, sopp, bakterier
**Abiotiske faktorer** (ikke-levende): Temperatur, lys, vann, jord, næringsstoffer

Eksempler: Innsjø, skog, fjell, korallrev, ørken`
    },
    {
      id: 'nat-7-2-1-naeringskjede',
      type: 'text',
      title: 'Næringskjeder',
      content: `
## Næringskjeder

En **næringskjede** viser hvem som spiser hvem i et økosystem.

**Leddene i næringskjeden:**
1. **Produsenter** - Planter som lager mat (fotosyntese)
2. **Primærkonsumenter** - Planteetere
3. **Sekundærkonsumenter** - Kjøttetere som spiser planteetere
4. **Tertiærkonsumenter** - Rovdyr som spiser andre kjøttetere
5. **Nedbrytere** - Sopp og bakterier som bryter ned dødt materiale

**Eksempel:** Blader → Larve → Meise → Spurvehauk
      `
    },
    {
      id: 'nat-7-2-1-def-naeringsnett',
      type: 'definition',
      title: 'Næringsnett',
      content: `Et **næringsnett** er mange næringskjeder som er koblet sammen.

I virkeligheten spiser de fleste dyr flere typer mat, og blir spist av flere rovdyr. Derfor blir det et nett av sammenhenger, ikke bare enkle kjeder.`
    },
    {
      id: 'nat-7-2-1-energi',
      type: 'text',
      title: 'Energistrøm',
      content: `
## Energi i økosystemet

**Energipyramiden:**
- All energi kommer fra sola
- Planter fanger solenergi (bare ca. 1%)
- For hvert ledd i næringskjeden tapes ca. 90% av energien (som varme)
- Derfor er det færre rovdyr enn planteetere
      `
    },
    {
      id: 'nat-7-2-1-example',
      type: 'example',
      title: 'Ulven i økosystemet',
      problem: 'Hva skjer hvis ulven forsvinner fra et økosystem?',
      solution: `**Kaskadeeffekt:**

Når ulven ble utryddet i Yellowstone:
1. **Hjortene** økte i antall
2. **Trærne** ble nedbeitet
3. **Elvene** endret løp (ingen røtter)
4. **Beverne** forsvant (ingen trær)

Når ulven kom tilbake, kom hele økosystemet i balanse igjen!`
    },
    {
      id: 'nat-7-2-1-tip',
      type: 'tip',
      title: 'Utforsk et økosystem',
      content: `Velg et lite område og undersøk:
- Hvilke planter finnes der?
- Hvilke dyr kan du se?
- Hvordan er jorda?
- Hvor mye lys kommer til?

Du har funnet et mini-økosystem!`
    },
    {
      id: 'nat-7-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er et økosystem?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av et økosystem.',
            solution: 'Et område der levende organismer samspiller med hverandre og miljøet',
            multipleChoiceOptions: [
              'Et område der levende organismer samspiller med hverandre og miljøet',
              'Bare plantene i et område',
              'Bare dyrene i et område',
              'Et dyrehage-lignende område'
            ],
          },
        ],
        solution: 'Et økosystem er et avgrenset område der levende og ikke-levende faktorer samspiller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er produsenter i en næringskjede?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva produsenter er.',
            solution: 'Planter og alger som lager sin egen mat',
            multipleChoiceOptions: [
              'Planter og alger som lager sin egen mat',
              'Dyr som spiser planter',
              'Rovdyr som jakter andre dyr',
              'Sopp som bryter ned dødt materiale'
            ],
          },
        ],
        solution: 'Produsenter er planter og alger som lager næring gjennom fotosyntese.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det færre rovdyr enn planteetere?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg forklaringen.',
            solution: 'Fordi ca. 90% av energien tapes for hvert ledd',
            multipleChoiceOptions: [
              'Fordi ca. 90% av energien tapes for hvert ledd',
              'Fordi rovdyr ikke liker å leve tett sammen',
              'Fordi planteetere formerer seg raskere',
              'Fordi mennesker dreper rovdyr'
            ],
          },
        ],
        solution: 'For hvert ledd i næringskjeden tapes ca. 90% av energien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Om økosystemer.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er biotiske faktorer?',
            solution: 'Levende organismer som planter og dyr',
            multipleChoiceOptions: ['Levende organismer som planter og dyr', 'Temperatur og lys', 'Vann og jord', 'Steiner og sand'],
          },
          {
            label: 'b',
            task: 'Hva gjør nedbrytere?',
            solution: 'Bryter ned dødt materiale',
            multipleChoiceOptions: ['Bryter ned dødt materiale', 'Jakter på andre dyr', 'Lager mat fra sollys', 'Spiser planter'],
          },
          {
            label: 'c',
            task: 'Hva er et næringsnett?',
            solution: 'Mange sammenkoblede næringskjeder',
            multipleChoiceOptions: ['Mange sammenkoblede næringskjeder', 'En enkelt næringskjede', 'Et fangstnett', 'Et spindelvev'],
          }
        ],
        solution: 'Biotiske faktorer er levende, nedbrytere resirkulerer næring, og næringsnett viser komplekse sammenhenger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Biologisk mangfold
// ============================================================================

export const CHAPTER_NATURFAG_7_2_2: TextbookChapter = {
  id: 'naturfag-7-2-2',
  courseId: 'naturfag-7',
  chapterNumber: '2.2',
  title: 'Biologisk mangfold',
  description: 'Arter og naturvern.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå biologisk mangfold'],
  content: [
    {
      id: 'nat-7-2-2-intro',
      type: 'text',
      content: `
# Biologisk mangfold

Jorden er hjemmet til millioner av ulike arter. Dette mangfoldet av liv er avgjørende for vår egen overlevelse, men det er truet som aldri før.
      `
    },
    {
      id: 'nat-7-2-2-def-biodiv',
      type: 'definition',
      title: 'Biologisk mangfold',
      content: `**Biologisk mangfold** (biodiversitet) er variasjonen av liv på jorda.

Det inkluderer:
- **Artsmangfold**: Antall ulike arter
- **Genetisk mangfold**: Variasjon innen hver art
- **Økosystemmangfold**: Ulike naturtyper

Vi kjenner til ca. **2 millioner arter**, men det kan finnes mange flere!`
    },
    {
      id: 'nat-7-2-2-viktig',
      type: 'text',
      title: 'Hvorfor er mangfoldet viktig?',
      content: `
## Verdien av biologisk mangfold

**For naturen:** Gjør økosystemer stabile og robuste
**For mennesker:**
- **Mat**: Alle matvarer kommer fra naturen
- **Medisin**: Mange medisiner fra planter og dyr
- **Økosystemtjenester**: Pollinering, vannrensing, ren luft
      `
    },
    {
      id: 'nat-7-2-2-trusler',
      type: 'text',
      title: 'Trusler mot mangfoldet',
      content: `
## Hva truer det biologiske mangfoldet?

1. **Ødeleggelse av leveområder** - Den største trusselen
2. **Klimaendringer** - Arter klarer ikke tilpasse seg
3. **Forurensning** - Plast, kjemikalier, luftforurensning
4. **Overhøsting** - Overfiske, ulovlig jakt
5. **Fremmede arter** - Utkonkurrerer lokale arter
      `
    },
    {
      id: 'nat-7-2-2-def-truet',
      type: 'definition',
      title: 'Truede arter',
      content: `**Truede arter** er arter som står i fare for å dø ut.

**Rødlista** kategoriserer arter etter truethet:
- **Kritisk truet (CR)**: Ekstremt høy risiko
- **Sterkt truet (EN)**: Svært høy risiko
- **Sårbar (VU)**: Høy risiko`
    },
    {
      id: 'nat-7-2-2-example',
      type: 'example',
      title: 'Biene - små men viktige',
      problem: 'Hvorfor er bier så viktige for oss?',
      solution: `**Biene som pollinatorer:**

Bier pollinerer ca. **75%** av matplantene våre.

Uten bier: mindre mat og dyrere priser!

**Du kan hjelpe:**
- Plant blomster som bier liker
- Unngå gift i hagen
- La "ugress" blomstre`
    },
    {
      id: 'nat-7-2-2-tip',
      type: 'tip',
      title: 'Bli en naturverner',
      content: `Enkle ting du kan gjøre:
- Plant blomster for insekter
- Velg miljømerkede produkter
- Ikke kast søppel i naturen
- Lær om artene der du bor`
    },
    {
      id: 'nat-7-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er biologisk mangfold?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Variasjonen av alt liv på jorda',
            multipleChoiceOptions: [
              'Variasjonen av alt liv på jorda',
              'Antall dyr i en dyrehage',
              'Bare plantene i en skog',
              'Menneskers ulike kulturer'
            ],
          },
        ],
        solution: 'Biologisk mangfold er variasjonen av liv på jorda.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er den største trusselen mot biologisk mangfold?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den største trusselen.',
            solution: 'Ødeleggelse av leveområder',
            multipleChoiceOptions: ['Ødeleggelse av leveområder', 'Jakt', 'Sykdommer', 'Naturkatastrofer'],
          },
        ],
        solution: 'Ødeleggelse av leveområder er den største trusselen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er rødlista?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva rødlista er.',
            solution: 'En liste over truede arter',
            multipleChoiceOptions: ['En liste over truede arter', 'En liste over farlige dyr', 'En liste over spiselige planter', 'En liste over vernede områder'],
          },
        ],
        solution: 'Rødlista er en oversikt over arter som står i fare for å dø ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Om biologisk mangfold.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er bier viktige?',
            solution: 'De pollinerer mange matplanter',
            multipleChoiceOptions: ['De pollinerer mange matplanter', 'De lager honning', 'De spiser skadedyr', 'De er fine å se på'],
          },
          {
            label: 'b',
            task: 'Hva er en nasjonalpark?',
            solution: 'Et vernet naturområde',
            multipleChoiceOptions: ['Et vernet naturområde', 'En stor dyrehage', 'En park i en by', 'Et område for hogst'],
          },
          {
            label: 'c',
            task: 'Hva betyr bærekraftig bruk?',
            solution: 'Å bruke naturen uten å ødelegge for fremtiden',
            multipleChoiceOptions: ['Å bruke naturen uten å ødelegge for fremtiden', 'Å ikke bruke naturen', 'Å bruke så mye som mulig', 'Å kun bruke om sommeren'],
          }
        ],
        solution: 'Bier pollinerer mat, nasjonalparker verner natur, og bærekraft betyr å ikke ødelegge for fremtiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.3: Klimaendringer
// ============================================================================

export const CHAPTER_NATURFAG_7_2_3: TextbookChapter = {
  id: 'naturfag-7-2-3',
  courseId: 'naturfag-7',
  chapterNumber: '2.3',
  title: 'Klimaendringer',
  description: 'Årsaker og konsekvenser.',
  estimatedMinutes: 50,
  competenceGoals: ['drøfte klimaendringer'],
  content: [
    {
      id: 'nat-7-2-3-intro',
      type: 'text',
      content: `
# Klimaendringer

Jorden blir varmere. De siste 150 årene har gjennomsnittstemperaturen økt med over 1°C. Det høres kanskje lite ut, men det har store konsekvenser.
      `
    },
    {
      id: 'nat-7-2-3-def-klima',
      type: 'definition',
      title: 'Klima vs. vær',
      content: `**Vær** er tilstanden i atmosfæren akkurat nå (sol, regn, vind).

**Klima** er det gjennomsnittlige været over lang tid (minst 30 år).

**Klimaendringer** er varige endringer i klimaet.`
    },
    {
      id: 'nat-7-2-3-drivhus',
      type: 'text',
      title: 'Drivhuseffekten',
      content: `
## Drivhuseffekten

**Naturlig drivhuseffekt:**
1. Sola varmer opp jorda
2. Varmen stråler tilbake mot verdensrommet
3. Drivhusgasser holder tilbake noe av varmen
4. Dette gjør at jorda er varm nok for liv

**Problemet:** Vi slipper ut MER drivhusgasser, som holder tilbake MER varme.
      `
    },
    {
      id: 'nat-7-2-3-def-drivhusgass',
      type: 'definition',
      title: 'Drivhusgasser',
      content: `**Drivhusgasser** holder tilbake varme i atmosfæren.

De viktigste:
- **Karbondioksid (CO₂)**: Fra forbrenning av olje, kull og gass
- **Metan (CH₄)**: Fra husdyr og søppelfyllinger
- **Lystgass (N₂O)**: Fra gjødsel og industri`
    },
    {
      id: 'nat-7-2-3-konsekvenser',
      type: 'text',
      title: 'Konsekvenser',
      content: `
## Hva skjer når klimaet endres?

**Issmelting:** Isbreer og polis smelter, havnivået stiger
**Ekstremvær:** Flere stormer, mer tørke noen steder, mer flom andre
**Naturen:** Arter må flytte seg eller dø ut
**Mennesker:** Vannmangel, matmangel, klimaflyktninger
      `
    },
    {
      id: 'nat-7-2-3-example',
      type: 'example',
      title: 'Arktis varmes opp',
      problem: 'Hvorfor er Arktis spesielt sårbart?',
      solution: `**Arktis varmes opp dobbelt så fort!**

1. Hvit is reflekterer sollys tilbake
2. Når isen smelter, blir det mørkt hav
3. Mørkt hav absorberer mer varme
4. Mer varme → mer issmelting

En selvforsterkende spiral!`
    },
    {
      id: 'nat-7-2-3-tiltak',
      type: 'text',
      title: 'Hva kan vi gjøre?',
      content: `
## Tiltak mot klimaendringer

**Samfunnet:** Fornybar energi, elektrifisere transport, bevare skog

**Du kan:**
- Gå, sykle eller ta kollektiv transport
- Spise mindre kjøtt
- Ikke kaste mat
- Spare strøm
- Gjenbruke og resirkulere
      `
    },
    {
      id: 'nat-7-2-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på vær og klima?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Vær er tilstanden nå, klima er gjennomsnittet over lang tid',
            multipleChoiceOptions: [
              'Vær er tilstanden nå, klima er gjennomsnittet over lang tid',
              'Vær og klima er det samme',
              'Klima er tilstanden nå, vær er gjennomsnittet',
              'Vær finnes bare i Norge'
            ],
          },
        ],
        solution: 'Vær er akkurat nå, klima er gjennomsnittet over minst 30 år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-2-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-3-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er den viktigste drivhusgassen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste drivhusgassen fra menneskelig aktivitet.',
            solution: 'Karbondioksid (CO₂)',
            multipleChoiceOptions: ['Karbondioksid (CO₂)', 'Oksygen (O₂)', 'Nitrogen (N₂)', 'Hydrogen (H₂)'],
          },
        ],
        solution: 'Karbondioksid (CO₂) er den viktigste drivhusgassen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-2-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvordan fungerer drivhuseffekten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Gasser i atmosfæren holder tilbake varme fra jorda',
            multipleChoiceOptions: [
              'Gasser i atmosfæren holder tilbake varme fra jorda',
              'Sola sender mer varme til jorda',
              'Jorda produserer egen varme',
              'Havet varmer opp lufta'
            ],
          },
        ],
        solution: 'Drivhusgasser holder tilbake varme som stråler ut fra jorda.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-2-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-7-2-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Om klimaendringer.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer når isen smelter?',
            solution: 'Havnivået stiger',
            multipleChoiceOptions: ['Havnivået stiger', 'Det blir kaldere', 'Det kommer mer snø', 'Havet blir mindre salt'],
          },
          {
            label: 'b',
            task: 'Hvor kommer mesteparten av CO₂-utslippene fra?',
            solution: 'Forbrenning av kull, olje og gass',
            multipleChoiceOptions: ['Forbrenning av kull, olje og gass', 'Vulkanutbrudd', 'Skogbranner', 'Menneskers pust'],
          },
          {
            label: 'c',
            task: 'Hva er Parisavtalen?',
            solution: 'En internasjonal avtale om å begrense klimaendringer',
            multipleChoiceOptions: ['En internasjonal avtale om å begrense klimaendringer', 'En avtale om å bygge flere biler', 'En avtale mellom Norge og Frankrike', 'En avtale om turisme'],
          }
        ],
        solution: 'Issmelting fører til havnivåstigning, fossilt brensel er hovedkilden til CO₂, og Parisavtalen er en klimaavtale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Krefter og bevegelse
// ============================================================================

export const CHAPTER_NATURFAG_7_3_1: TextbookChapter = {
  id: 'naturfag-7-3-1',
  courseId: 'naturfag-7',
  chapterNumber: '3.1',
  title: 'Krefter og bevegelse',
  description: 'Newtons lover.',
  estimatedMinutes: 50,
  competenceGoals: ['forklare krefter'],
  content: [
    {
      id: 'nat-7-3-1-intro',
      type: 'text',
      content: `
# Krefter og bevegelse

Hvorfor faller ting ned? Hvorfor ruller en ball til den stopper? Isaac Newton fant svarene for over 300 år siden!
      `
    },
    {
      id: 'nat-7-3-1-def-kraft',
      type: 'definition',
      title: 'Hva er en kraft?',
      content: `En **kraft** er en påvirkning som kan:
- Sette noe i bevegelse
- Stoppe eller bremse bevegelse
- Endre retning på bevegelse
- Endre form på gjenstander

**Kraft måles i newton (N)** - oppkalt etter Isaac Newton.`
    },
    {
      id: 'nat-7-3-1-typer',
      type: 'text',
      title: 'Typer krefter',
      content: `
## Viktige krefter

**Tyngdekraft** - Trekker alt mot jorden
**Friksjon** - Motstand mellom flater
**Normalkraft** - Motstand fra underlaget
**Luftmotstand** - Friksjon mot luft
      `
    },
    {
      id: 'nat-7-3-1-newton1',
      type: 'definition',
      title: 'Newtons 1. lov (Treghetsloven)',
      content: `**Et legeme i ro forblir i ro, og et legeme i bevegelse fortsetter i rett linje med konstant fart, med mindre det påvirkes av en kraft.**

**Eksempel:** Du kastes fremover i bilen ved brå bremsing - kroppen vil fortsette fremover!`
    },
    {
      id: 'nat-7-3-1-newton2',
      type: 'definition',
      title: 'Newtons 2. lov (Kraftloven)',
      content: `**Kraft = masse × akselerasjon (F = m · a)**

- Større kraft = raskere akselerasjon
- Større masse = tregere akselerasjon

**Eksempel:** Lettere å akselerere en fotball enn en bowlingkule!`
    },
    {
      id: 'nat-7-3-1-newton3',
      type: 'definition',
      title: 'Newtons 3. lov',
      content: `**Når et legeme påvirker et annet med en kraft, vil det andre legemet påvirke det første med en like stor kraft i motsatt retning.**

**Eksempel:** Du dytter veggen → veggen dytter deg tilbake!`
    },
    {
      id: 'nat-7-3-1-example',
      type: 'example',
      title: 'Fallskjermhopper',
      problem: 'Hvilke krefter virker på en fallskjermhopper?',
      solution: `**Før fallskjermen åpnes:**
- Tyngdekraften drar hopperen ned
- Luftmotstanden bremser
- Når de er like: konstant fart (ca. 200 km/t)

**Etter at fallskjermen åpnes:**
- Luftmotstanden øker dramatisk
- Hopperen bremser til ca. 20 km/t`
    },
    {
      id: 'nat-7-3-1-tip',
      type: 'tip',
      title: 'Bruk sikkerhetsbelte!',
      content: `Newtons 1. lov forklarer hvorfor sikkerhetsbelte er viktig:

Ved kollisjon stopper bilen brått, men kroppen vil fortsette fremover (treghet). Sikkerhetsbeltet stopper deg trygt!`
    },
    {
      id: 'nat-7-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-7-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva sier Newtons 1. lov?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Et legeme fortsetter i samme bevegelse med mindre en kraft virker',
            multipleChoiceOptions: [
              'Et legeme fortsetter i samme bevegelse med mindre en kraft virker',
              'Kraft er lik masse ganger akselerasjon',
              'Alle krefter har en motsatt kraft',
              'Tyngdekraften er den sterkeste kraften'
            ],
          },
        ],
        solution: 'Newtons 1. lov sier at ting fortsetter å bevege seg med samme fart og retning med mindre en kraft påvirker dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-7-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er enheten for kraft?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig enhet.',
            solution: 'Newton (N)',
            multipleChoiceOptions: ['Newton (N)', 'Kilogram (kg)', 'Meter (m)', 'Joule (J)'],
          },
        ],
        solution: 'Kraft måles i newton (N).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-7-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er friksjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Motstand mellom flater som glir mot hverandre',
            multipleChoiceOptions: [
              'Motstand mellom flater som glir mot hverandre',
              'Kraften som drar ting mot jorda',
              'Kraften fra underlaget oppover',
              'Luftens trykk'
            ],
          },
        ],
        solution: 'Friksjon er motstandskraften mellom to flater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-7-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Om Newtons lover.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva sier formelen F = m · a?',
            solution: 'Kraft er lik masse ganger akselerasjon',
            multipleChoiceOptions: ['Kraft er lik masse ganger akselerasjon', 'Fart er lik masse ganger tid', 'Kraft er lik masse delt på tid', 'Friksjon er lik masse ganger areal'],
          },
          {
            label: 'b',
            task: 'Hva skjer når du dytter på en vegg (Newtons 3. lov)?',
            solution: 'Veggen dytter deg tilbake med like stor kraft',
            multipleChoiceOptions: ['Veggen dytter deg tilbake med like stor kraft', 'Ingenting skjer', 'Veggen faller', 'Du akselererer mot veggen'],
          },
          {
            label: 'c',
            task: 'Hvorfor stopper en ball som ruller?',
            solution: 'På grunn av friksjon',
            multipleChoiceOptions: ['På grunn av friksjon', 'På grunn av tyngdekraften', 'Fordi den går tom for energi', 'Fordi lufta stopper den helt'],
          }
        ],
        solution: 'F = m·a er kraftloven, veggen dytter tilbake (3. lov), og ballen stopper pga. friksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Energi
// ============================================================================

export const CHAPTER_NATURFAG_7_3_2: TextbookChapter = {
  id: 'naturfag-7-3-2',
  courseId: 'naturfag-7',
  chapterNumber: '3.2',
  title: 'Energi',
  description: 'Energiformer og energibevaring.',
  estimatedMinutes: 45,
  competenceGoals: ['forklare energibevaring'],
  content: [
    {
      id: 'nat-7-3-2-intro',
      type: 'text',
      content: `
# Energi

Energi får ting til å skje! Uten energi ville ingenting bevege seg, varmes opp eller lyse. Energi er overalt - i maten du spiser, i sola som skinner, og i bevegelsene du gjør.
      `
    },
    {
      id: 'nat-7-3-2-def-energi',
      type: 'definition',
      title: 'Hva er energi?',
      content: `**Energi** er evnen til å utføre arbeid eller skape endring.

**Energi måles i joule (J)**

Energi kan ikke lages eller ødelegges - bare omdannes!`
    },
    {
      id: 'nat-7-3-2-former',
      type: 'text',
      title: 'Energiformer',
      content: `
## Ulike former for energi

**Kinetisk energi** - Bevegelsesenergi
**Potensiell energi** - Lagret energi (høyde, spent fjær)
**Varmeenergi** - Energi i varme ting
**Kjemisk energi** - Lagret i mat, bensin, batterier
**Elektrisk energi** - I strøm
**Strålingsenergi** - I lys
      `
    },
    {
      id: 'nat-7-3-2-def-bevaring',
      type: 'definition',
      title: 'Energibevaring',
      content: `**Loven om energibevaring:**
Energi kan ikke skapes eller ødelegges, bare omdannes fra én form til en annen.

Den totale energien er alltid konstant.`
    },
    {
      id: 'nat-7-3-2-omdanning',
      type: 'text',
      title: 'Energiomdanning',
      content: `
## Eksempler på energiomdanning

**Fallende ball:** Potensiell → Kinetisk → Varme
**Lyspære:** Elektrisk → Lys + Varme
**Bil:** Kjemisk (bensin) → Kinetisk + Varme
**Kroppen:** Kjemisk (mat) → Kinetisk + Varme
      `
    },
    {
      id: 'nat-7-3-2-example',
      type: 'example',
      title: 'Berg-og-dal-bane',
      problem: 'Hvordan omdannes energi i en berg-og-dal-bane?',
      solution: `**Energiomdanning:**

1. **På toppen:** Mye potensiell energi, lite kinetisk
2. **I bunnen:** Lite potensiell, mye kinetisk (høy fart)
3. **Opp igjen:** Kinetisk → Potensiell

Noe energi blir til varme (friksjon), derfor blir hver bakke litt lavere.`
    },
    {
      id: 'nat-7-3-2-fornybar',
      type: 'text',
      title: 'Energikilder',
      content: `
## Fornybare vs. ikke-fornybare

**Fornybare:** Sol, vind, vann, bioenergi
**Ikke-fornybare:** Kull, olje, gass (tar millioner av år å dannes)

Fornybar energi er viktig for å bekjempe klimaendringer!
      `
    },
    {
      id: 'nat-7-3-2-tip',
      type: 'tip',
      title: 'Spar energi!',
      content: `Selv om energi ikke forsvinner, bør vi spare:
- Slå av lyset når du går
- Gå eller sykle i stedet for å kjøre
- Bruk klær i stedet for å skru opp varmen`
    },
    {
      id: 'nat-7-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-7-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er enheten for energi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig enhet.',
            solution: 'Joule (J)',
            multipleChoiceOptions: ['Joule (J)', 'Newton (N)', 'Watt (W)', 'Volt (V)'],
          },
        ],
        solution: 'Energi måles i joule (J).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-7-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er kinetisk energi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Energi i ting som beveger seg',
            multipleChoiceOptions: ['Energi i ting som beveger seg', 'Lagret energi i høyde', 'Varme fra sola', 'Energi i mat'],
          },
        ],
        solution: 'Kinetisk energi er bevegelsesenergi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-7-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva sier loven om energibevaring?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Energi kan ikke skapes eller ødelegges, bare omdannes',
            multipleChoiceOptions: [
              'Energi kan ikke skapes eller ødelegges, bare omdannes',
              'Energi forsvinner når den brukes',
              'Energi kan lages fra ingenting',
              'Energi øker når den brukes'
            ],
          },
        ],
        solution: 'Energi kan ikke skapes eller ødelegges, bare omdannes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-7-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Om energi.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken energiform har en ball høyt oppe?',
            solution: 'Potensiell energi',
            multipleChoiceOptions: ['Potensiell energi', 'Kinetisk energi', 'Kjemisk energi', 'Elektrisk energi'],
          },
          {
            label: 'b',
            task: 'Hva er et eksempel på fornybar energi?',
            solution: 'Vannkraft',
            multipleChoiceOptions: ['Vannkraft', 'Kull', 'Olje', 'Gass'],
          },
          {
            label: 'c',
            task: 'Hva skjer med energien når en ball faller?',
            solution: 'Potensiell energi omdannes til kinetisk',
            multipleChoiceOptions: ['Potensiell energi omdannes til kinetisk', 'Energien forsvinner', 'Kinetisk omdannes til potensiell', 'Energien blir til lys'],
          }
        ],
        solution: 'Ball høyt oppe har potensiell energi, vannkraft er fornybar, og fallende ball omdanner potensiell til kinetisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Atomer og molekyler
// ============================================================================

export const CHAPTER_NATURFAG_7_4_1: TextbookChapter = {
  id: 'naturfag-7-4-1',
  courseId: 'naturfag-7',
  chapterNumber: '4.1',
  title: 'Atomer og molekyler',
  description: 'Stoffers oppbygning.',
  estimatedMinutes: 50,
  competenceGoals: ['forklare atomenes oppbygning'],
  content: [
    {
      id: 'nat-7-4-1-intro',
      type: 'text',
      content: `
# Atomer og molekyler

Alt rundt deg er bygget opp av utrolig små byggesteiner kalt **atomer**. Atomer er så små at det går millioner av milliarder av dem i et sandkorn!
      `
    },
    {
      id: 'nat-7-4-1-def-atom',
      type: 'definition',
      title: 'Atomet',
      content: `Et **atom** er den minste enheten av et grunnstoff.

**Atomets oppbygning:**
- **Kjernen**: Inneholder protoner (+) og nøytroner (0)
- **Elektronskallet**: Elektroner (-) som kretser rundt kjernen

Atomet er for det meste tomt rom!`
    },
    {
      id: 'nat-7-4-1-partikler',
      type: 'text',
      title: 'Atomets partikler',
      content: `
## De tre subatomære partiklene

| Partikkel | Ladning | Plassering |
|-----------|---------|------------|
| Proton | Positiv (+) | I kjernen |
| Nøytron | Nøytral (0) | I kjernen |
| Elektron | Negativ (-) | Rundt kjernen |

Antall protoner = atomnummer = hvilket grunnstoff det er
      `
    },
    {
      id: 'nat-7-4-1-def-grunnstoff',
      type: 'definition',
      title: 'Grunnstoffer',
      content: `Et **grunnstoff** er et stoff som bare inneholder én type atomer.

Det finnes **118 kjente grunnstoffer**.

Eksempler: Hydrogen (H), Karbon (C), Oksygen (O), Gull (Au), Jern (Fe)`
    },
    {
      id: 'nat-7-4-1-periodesystem',
      type: 'text',
      title: 'Periodesystemet',
      content: `
## Periodesystemet

Periodesystemet organiserer alle grunnstoffene.

**Perioder** (rader): Viser antall elektronskall
**Grupper** (kolonner): Grunnstoffer med like egenskaper
      `
    },
    {
      id: 'nat-7-4-1-def-molekyl',
      type: 'definition',
      title: 'Molekyler',
      content: `Et **molekyl** er to eller flere atomer bundet sammen.

Eksempler:
- **H₂O** (vann): 2 hydrogen + 1 oksygen
- **O₂** (oksygen): 2 oksygenatomer
- **CO₂** (karbondioksid): 1 karbon + 2 oksygen`
    },
    {
      id: 'nat-7-4-1-example',
      type: 'example',
      title: 'Vannmolekylet',
      problem: 'Hvordan ser et vannmolekyl ut?',
      solution: `**Vannmolekylet (H₂O):**

- 1 oksygenatom (O)
- 2 hydrogenatomer (H)

Hydrogenatomene er festet til oksygenatomet i en vinkel.

I et glass vann er det ca. 10²⁵ vannmolekyler!`
    },
    {
      id: 'nat-7-4-1-tip',
      type: 'tip',
      title: 'Du er laget av stjernestøv!',
      content: `De vanligste grunnstoffene i kroppen:
- Oksygen (65%)
- Karbon (18%)
- Hydrogen (10%)

Disse grunnstoffene ble dannet i stjerner!`
    },
    {
      id: 'nat-7-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-7-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er et atom?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Den minste enheten av et grunnstoff',
            multipleChoiceOptions: ['Den minste enheten av et grunnstoff', 'Et stort molekyl', 'En type kjemisk reaksjon', 'En energiform'],
          },
        ],
        solution: 'Et atom er den minste enheten av et grunnstoff.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-7-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilke partikler finnes i atomkjernen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg partiklene som finnes i kjernen.',
            solution: 'Protoner og nøytroner',
            multipleChoiceOptions: ['Protoner og nøytroner', 'Bare elektroner', 'Bare protoner', 'Elektroner og nøytroner'],
          },
        ],
        solution: 'Atomkjernen inneholder protoner og nøytroner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-7-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er et molekyl?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'To eller flere atomer bundet sammen',
            multipleChoiceOptions: ['To eller flere atomer bundet sammen', 'Et enkelt atom', 'Partikler i atomkjernen', 'Elektroner som kretser'],
          },
        ],
        solution: 'Et molekyl er to eller flere atomer bundet sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-7-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Om atomer og molekyler.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bestemmer hvilket grunnstoff et atom er?',
            solution: 'Antall protoner',
            multipleChoiceOptions: ['Antall protoner', 'Antall elektroner', 'Antall nøytroner', 'Størrelsen'],
          },
          {
            label: 'b',
            task: 'Hva er den kjemiske formelen for vann?',
            solution: 'H₂O',
            multipleChoiceOptions: ['H₂O', 'CO₂', 'O₂', 'NaCl'],
          },
          {
            label: 'c',
            task: 'Hvilken ladning har et elektron?',
            solution: 'Negativ',
            multipleChoiceOptions: ['Negativ', 'Positiv', 'Nøytral', 'Varierer'],
          }
        ],
        solution: 'Antall protoner bestemmer grunnstoffet, vann er H₂O, og elektroner har negativ ladning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Kjemiske reaksjoner
// ============================================================================

export const CHAPTER_NATURFAG_7_4_2: TextbookChapter = {
  id: 'naturfag-7-4-2',
  courseId: 'naturfag-7',
  chapterNumber: '4.2',
  title: 'Kjemiske reaksjoner',
  description: 'Når stoffer reagerer.',
  estimatedMinutes: 50,
  competenceGoals: ['forklare kjemiske reaksjoner'],
  content: [
    {
      id: 'nat-7-4-2-intro',
      type: 'text',
      content: `
# Kjemiske reaksjoner

Når du tenner et stearinlys, steker et egg eller puster, skjer det kjemiske reaksjoner. Atomer bytter partnere og danner nye stoffer!
      `
    },
    {
      id: 'nat-7-4-2-def-reaksjon',
      type: 'definition',
      title: 'Kjemisk reaksjon',
      content: `En **kjemisk reaksjon** er en prosess der stoffer omdannes til nye stoffer med andre egenskaper.

**Reaktanter** → **Produkter**

Under reaksjonen brytes bindinger og nye dannes. Atomene forsvinner ikke!`
    },
    {
      id: 'nat-7-4-2-tegn',
      type: 'text',
      title: 'Tegn på kjemisk reaksjon',
      content: `
## Hvordan kjenne igjen en kjemisk reaksjon?

- **Fargeendring**
- **Gassutvikling** (bobler)
- **Temperaturendring**
- **Bunnfall** (fast stoff dannes)
- **Lysutvikling**

Ikke alle endringer er kjemiske - is som smelter er fysisk endring!
      `
    },
    {
      id: 'nat-7-4-2-def-bevaring',
      type: 'definition',
      title: 'Massebevaring',
      content: `**Loven om massebevaring:**
I en kjemisk reaksjon er den totale massen av reaktantene lik den totale massen av produktene.

Atomer forsvinner ikke - de bare omarrangeres!`
    },
    {
      id: 'nat-7-4-2-typer',
      type: 'text',
      title: 'Typer reaksjoner',
      content: `
## Viktige typer kjemiske reaksjoner

**Forbrenning:** Stoff + oksygen → oksid + energi
**Oksidasjon:** F.eks. rusting av jern
**Fotosyntese:** CO₂ + H₂O + lys → sukker + O₂
**Celleånding:** Sukker + O₂ → CO₂ + H₂O + energi
      `
    },
    {
      id: 'nat-7-4-2-example',
      type: 'example',
      title: 'Rusting av jern',
      problem: 'Hva skjer når jern ruster?',
      solution: `**Rusting er en kjemisk reaksjon:**

Jern + Oksygen + Vann → Jernoksid (rust)

**Observasjoner:**
- Fargeendring (grått → brunt)
- Langsom prosess
- Saltvann gjør det raskere

**Forebygging:** Maling, olje, rustfritt stål`
    },
    {
      id: 'nat-7-4-2-energi',
      type: 'text',
      title: 'Energi i reaksjoner',
      content: `
## Eksoterme og endoterme reaksjoner

**Eksoterme:** Avgir energi (varme) - f.eks. forbrenning
**Endoterme:** Tar opp energi - f.eks. fotosyntese
      `
    },
    {
      id: 'nat-7-4-2-tip',
      type: 'tip',
      title: 'Sikkerhet i kjemi',
      content: `Ved kjemiske forsøk:
- Bruk vernebriller
- Ikke smak eller lukt direkte
- Vask hendene etterpå
- Følg alltid instruksjonene`
    },
    {
      id: 'nat-7-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-7-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er en kjemisk reaksjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'En prosess der stoffer omdannes til nye stoffer',
            multipleChoiceOptions: [
              'En prosess der stoffer omdannes til nye stoffer',
              'Når is smelter til vann',
              'Når vann koker',
              'Når sukker løses i vann'
            ],
          },
        ],
        solution: 'En kjemisk reaksjon er når stoffer omdannes til nye stoffer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-7-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er tegn på kjemisk reaksjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tegn på kjemisk reaksjon.',
            solution: 'Fargeendring, gassutvikling eller temperaturendring',
            multipleChoiceOptions: [
              'Fargeendring, gassutvikling eller temperaturendring',
              'Stoffet blir mindre',
              'Stoffet forsvinner',
              'Stoffet blir lettere'
            ],
          },
        ],
        solution: 'Vanlige tegn er fargeendring, gassutvikling eller temperaturendring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-7-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva sier loven om massebevaring?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Massen av reaktantene er lik massen av produktene',
            multipleChoiceOptions: [
              'Massen av reaktantene er lik massen av produktene',
              'Masse kan forsvinne under reaksjoner',
              'Masse kan skapes under reaksjoner',
              'Bare noen atomer bevares'
            ],
          },
        ],
        solution: 'Den totale massen er den samme før og etter reaksjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-7-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-7-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Om kjemiske reaksjoner.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kalles stoffene som reagerer?',
            solution: 'Reaktanter',
            multipleChoiceOptions: ['Reaktanter', 'Produkter', 'Katalysatorer', 'Elementer'],
          },
          {
            label: 'b',
            task: 'Hva er en eksoterm reaksjon?',
            solution: 'En reaksjon som avgir varme',
            multipleChoiceOptions: ['En reaksjon som avgir varme', 'En reaksjon som tar opp varme', 'En reaksjon uten energiendring', 'En reaksjon som stopper'],
          },
          {
            label: 'c',
            task: 'Hva er rusting et eksempel på?',
            solution: 'Oksidasjon',
            multipleChoiceOptions: ['Oksidasjon', 'Fotosyntese', 'Fordamping', 'Smelting'],
          }
        ],
        solution: 'Reaktanter er stoffene som reagerer, eksoterme avgir varme, og rusting er oksidasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const NATURFAG_7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NATURFAG_7_1_1,
  CHAPTER_NATURFAG_7_1_2,
  CHAPTER_NATURFAG_7_2_1,
  CHAPTER_NATURFAG_7_2_2,
  CHAPTER_NATURFAG_7_2_3,
  CHAPTER_NATURFAG_7_3_1,
  CHAPTER_NATURFAG_7_3_2,
  CHAPTER_NATURFAG_7_4_1,
  CHAPTER_NATURFAG_7_4_2,
];
