/**
 * Tekstbok kapitler for Norsk 8. klasse
 * Basert på LK20-læreplanen
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Ulike teksttyper
// ============================================================================

export const CHAPTER_NORSK_8_1_1: TextbookChapter = {
  id: 'norsk-8-1-1',
  courseId: 'norsk-8',
  chapterNumber: '1.1',
  title: 'Ulike teksttyper',
  description: 'Lær å skille mellom skjønnlitterære og sakpregede tekster, og forstå kjennetegnene ved ulike sjangre.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese skjønnlitteratur og sakprosa på bokmål og nynorsk og i oversettelse fra samiske og andre språk, og reflektere over tekstenes formål, innhold, sjangertrekk og virkemidler',
  ],
  content: [
    // ===== DEL 1: Introduksjon til teksttyper =====
    {
      id: 'norsk-8-1-1-intro',
      type: 'text',
      content: `## Hva er en tekst?

En **tekst** er mer enn bare ord på papir. En tekst er en sammenhengende ytring som formidler mening til en leser eller lytter. Tekster kan være skriftlige, muntlige, eller sammensatte (med bilder, lyd og video).

I norskfaget deler vi tekster inn i to hovedkategorier:
- **Skjønnlitterære tekster** (fiksjon)
- **Sakpregede tekster** (fakta)`,
    },
    {
      id: 'norsk-8-1-1-def-1',
      type: 'definition',
      title: 'Skjønnlitteratur',
      content: `**Skjønnlitteratur** er tekster som er diktet opp av forfatteren. Handlingen og personene er fiktive (oppdiktet), selv om de kan være inspirert av virkeligheten.

Eksempler på skjønnlitterære sjangre:
- Romaner
- Noveller
- Dikt
- Skuespill
- Eventyr og sagn`,
    },
    {
      id: 'norsk-8-1-1-def-2',
      type: 'definition',
      title: 'Sakprosa',
      content: `**Sakprosa** er tekster som handler om virkeligheten og formidler faktisk informasjon. Forfatteren presenterer noe som sant eller virkelig.

Eksempler på sakpregede sjangre:
- Nyhetsartikler
- Fagartikler
- Leserinnlegg
- Biografier
- Bruksanvisninger`,
    },
    {
      id: 'norsk-8-1-1-example-intro',
      type: 'example',
      title: 'Eksempel: Skille mellom skjønnlitteratur og sakprosa',
      problem: `Les tekstene nedenfor og avgjør om de er skjønnlitteratur eller sakprosa:

**Tekst 1:** "Den lille jenta løp gjennom skogen mens regnet pisket mot ansiktet hennes. Hun måtte finne trollets hule før mørket falt på."

**Tekst 2:** "Ifølge Statistisk sentralbyrå økte antall arbeidsledige med 2,3 prosent i tredje kvartal 2024."`,
      solution: `**Tekst 1** er **skjønnlitteratur**:
- Oppdiktet handling (troll finnes ikke i virkeligheten)
- Forteller en historie med spenning
- Bruk av fantasielementer

**Tekst 2** er **sakprosa**:
- Handler om virkeligheten
- Bruker fakta og tall
- Refererer til en kilde (SSB)`,
    },

    // Oppgave 1: Sjekk forståelse av grunnleggende begreper
    {
      id: 'norsk-8-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sjekk at du forstår forskjellen mellom skjønnlitteratur og sakprosa.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen mellom skjønnlitteratur og sakprosa?',
            solution: 'Skjønnlitteratur er fiksjon (oppdiktet), mens sakprosa handler om virkeligheten og formidler faktisk informasjon.',
            multipleChoiceOptions: [
              'Skjønnlitteratur er oppdiktet, sakprosa handler om virkeligheten',
              'Skjønnlitteratur er alltid lengre enn sakprosa',
              'Sakprosa har alltid bilder, skjønnlitteratur har ikke det',
              'Skjønnlitteratur er alltid på rim',
            ],
          },
          {
            label: 'b',
            task: 'Hvilken av disse er et eksempel på skjønnlitteratur?',
            solution: 'En roman som "Harry Potter" er skjønnlitteratur fordi den er oppdiktet.',
            multipleChoiceOptions: [
              'Harry Potter og De vises stein',
              'En nyhetsartikkel i VG',
              'En lærebok i matematikk',
              'En bruksanvisning til mobiltelefon',
            ],
          },
        ],
        solution: 'Skjønnlitteratur er fiksjon (oppdiktet), mens sakprosa handler om virkeligheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 2: Skjønnlitterære sjangre =====
    {
      id: 'norsk-8-1-1-text-2',
      type: 'text',
      content: `## Skjønnlitterære sjangre

### Novellen
En **novelle** er en kort fortelling med få personer og én hovedhandling. Novellen har ofte et vendepunkt og en åpen eller overraskende slutt.

**Kjennetegn på novellen:**
- Kort tekst (ca. 2-30 sider)
- Få personer
- Kort tidsrom
- Ofte ett vendepunkt
- Åpen eller overraskende slutt

### Romanen
En **roman** er en lengre fortelling med flere personer og handlingstråder. Romanen kan strekke seg over lang tid og ha flere miljøskildringer.

### Diktet
Et **dikt** er en tekst som ofte har rytme, rim og billedspråk. Dikt kan uttrykke følelser og tanker på en komprimert måte.`,
    },
    {
      id: 'norsk-8-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Novelle vs. roman',
      problem: `Les de to tekstutdragene og avgjør hvilken sjanger de tilhører:

**Tekst A:** "Klokken var halv tre om natten da han endelig tok mot til seg. Han åpnet døren forsiktig og gikk inn i stuen. Der, på bordet, lå brevet han hadde ventet på i tre måneder."

**Tekst B:** "Maria vokste opp i en liten bygd på Vestlandet. Faren var fisker, moren arbeidet på den lokale butikken. De første ti årene av livet hennes var preget av trygghet og rutiner, men så skjedde det noe som skulle forandre alt..."`,
      solution: `**Tekst A** er sannsynligvis fra en **novelle**:
- Starter midt i handlingen (in medias res)
- Fokuserer på ett øyeblikk
- Bygger opp spenning mot ett punkt

**Tekst B** er sannsynligvis fra en **roman**:
- Starter med bakgrunnsinformasjon
- Introduserer flere personer og miljø
- Antyder en lang tidsperiode`,
    },

    // Oppgave 2: Skjønnlitterære sjangre
    {
      id: 'norsk-8-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Test din kunnskap om skjønnlitterære sjangre.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner en novelle?',
            solution: 'En novelle kjennetegnes av få personer, kort tidsrom, én hovedhandling og ofte et vendepunkt.',
            multipleChoiceOptions: [
              'Få personer, kort handling, ofte ett vendepunkt',
              'Mange personer, lang handling, flere parallelle historier',
              'Alltid på rim, korte linjer, sterke følelser',
              'Objektiv fremstilling, fakta, kildehenvisninger',
            ],
          },
          {
            label: 'b',
            task: 'Hva er et vendepunkt i en fortelling?',
            solution: 'Et vendepunkt er et avgjørende øyeblikk der handlingen tar en ny retning.',
            multipleChoiceOptions: [
              'Stedet der handlingen endrer retning',
              'Starten på fortellingen',
              'Slutten på fortellingen',
              'En persons tanker',
            ],
          },
          {
            label: 'c',
            task: 'Hva er forskjellen mellom en novelle og en roman?',
            solution: 'En novelle er kort med få personer, mens en roman er lang med mange personer og handlingstråder.',
            multipleChoiceOptions: [
              'En novelle er kort, en roman er lang med flere handlingstråder',
              'En novelle er på rim, en roman er ikke på rim',
              'En novelle er fakta, en roman er fiksjon',
              'Det er ingen forskjell',
            ],
          },
        ],
        solution: 'Novellen er kort med få personer, mens romanen er lang med flere handlingstråder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 3: Sakpregede sjangre =====
    {
      id: 'norsk-8-1-1-text-3',
      type: 'text',
      content: `## Sakpregede sjangre

### Nyhetsartikkel
En **nyhetsartikkel** informerer om aktuelle hendelser. Den skal være objektiv og svare på spørsmålene: hvem, hva, hvor, når, hvorfor og hvordan.

### Leserinnlegg / Debattinnlegg
Et **leserinnlegg** er en tekst der forfatteren uttrykker sin mening om en sak. Målet er å påvirke leseren.

### Fagartikkel
En **fagartikkel** formidler kunnskap om et emne på en saklig og grundig måte. Den bruker ofte fagbegreper og kildehenvisninger.`,
    },
    {
      id: 'norsk-8-1-1-example-sakprosa',
      type: 'example',
      title: 'Eksempel: Ulike sakprosasjangre',
      problem: `Hvilken sakprosasjanger tilhører disse tekstene?

**Tekst A:** "Regjeringen la i dag fram sitt forslag til statsbudsjett. Finansministeren forklarte at det vil bli kutt i forsvarsbudsjettet."

**Tekst B:** "Jeg mener skolen bør satse mer på fysisk aktivitet. Forskning viser at elever som er i bevegelse, lærer bedre."`,
      solution: `**Tekst A** er en **nyhetsartikkel**:
- Informerer om en aktuell hendelse
- Objektiv fremstilling
- Svarer på hvem, hva, når

**Tekst B** er et **leserinnlegg**:
- Uttrykker en mening ("Jeg mener...")
- Argumenterer for et syn
- Ønsker å påvirke leseren`,
    },

    // Oppgave 3: Sakpregede sjangre
    {
      id: 'norsk-8-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Test din kunnskap om sakpregede sjangre.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken tekst er et eksempel på sakprosa?',
            solution: 'En artikkel om klimaendringer er sakprosa fordi den formidler faktisk informasjon.',
            multipleChoiceOptions: [
              'En artikkel om klimaendringer i Aftenposten',
              'Harry Potter og De vises stein',
              'Et dikt av Inger Hagerup',
              'Askeladden som kappåt med trollet',
            ],
          },
          {
            label: 'b',
            task: 'Hva kjennetegner en nyhetsartikkel?',
            solution: 'En nyhetsartikkel informerer objektivt om aktuelle hendelser.',
            multipleChoiceOptions: [
              'Objektiv fremstilling av aktuelle hendelser',
              'Forfatterens personlige meninger',
              'Oppdiktede hendelser og personer',
              'Rim og rytme',
            ],
          },
          {
            label: 'c',
            task: 'Hva er hovedformålet med et leserinnlegg?',
            solution: 'Et leserinnlegg uttrykker og argumenterer for en mening.',
            multipleChoiceOptions: [
              'Å uttrykke og argumentere for en mening',
              'Å fortelle en oppdiktet historie',
              'Å gi objektiv informasjon',
              'Å underholde med rim og rytme',
            ],
          },
        ],
        solution: 'Sakprosa formidler faktisk informasjon om virkeligheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 4: Sammensatte tekster og avanserte begreper =====
    {
      id: 'norsk-8-1-1-tip-1',
      type: 'tip',
      content: `**Hvordan skille mellom skjønnlitteratur og sakprosa?**

Spør deg selv:
1. Er dette diktet opp, eller handler det om virkeligheten?
2. Vil forfatteren underholde meg, eller informere meg?
3. Finnes personene i teksten i virkeligheten?

Husk at noen tekster kan blande sjangre - for eksempel en historisk roman som blander fiksjon med fakta.`,
    },
    {
      id: 'norsk-8-1-1-note-1',
      type: 'note',
      content: `**Sammensatte tekster**

I dag møter vi ofte **sammensatte tekster** som kombinerer flere uttrykksformer: tekst, bilder, lyd og video. Eksempler er nettsider, reklame, filmer og sosiale medier. Disse tekstene krever at vi kan tolke flere elementer samtidig.`,
    },

    // Oppgave 4: Avanserte begreper
    {
      id: 'norsk-8-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Test din forståelse av sammensatte tekster og sjangerblandinger.',
        subTasks: [
          {
            label: 'a',
            task: 'En forfatter skriver en bok om andre verdenskrig der hovedpersonen er oppdiktet, men historiske hendelser er ekte. Hva slags tekst er dette?',
            solution: 'Dette er en historisk roman - skjønnlitteratur med faktagrunnlag.',
            multipleChoiceOptions: [
              'En historisk roman - skjønnlitteratur med faktagrunnlag',
              'Ren sakprosa, fordi den handler om historie',
              'Ren skjønnlitteratur uten fakta',
              'En fagartikkel om historie',
            ],
          },
          {
            label: 'b',
            task: 'Hva er en sammensatt tekst?',
            solution: 'En sammensatt tekst kombinerer flere uttrykksformer som tekst, bilder, lyd og video.',
            multipleChoiceOptions: [
              'En tekst som kombinerer flere uttrykksformer',
              'En veldig lang tekst',
              'En tekst med mange forfattere',
              'En tekst på flere språk',
            ],
          },
          {
            label: 'c',
            task: 'Hva kjennetegner en åpen slutt i en novelle?',
            solution: 'En åpen slutt lar leseren selv tolke hva som skjer videre.',
            multipleChoiceOptions: [
              'Leseren må selv tolke hva som skjer videre',
              'Alt blir forklart og løst',
              'Hovedpersonen dør',
              'Fortellingen fortsetter i en ny bok',
            ],
          },
        ],
        solution: 'En historisk roman blander fiksjon med historiske fakta.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 5: Praktisk oppgave =====
    {
      id: 'norsk-8-1-1-text-praktisk',
      type: 'text',
      content: `## Praktisk oppgave: Analyser en tekst

Nå skal du bruke det du har lært til å analysere en valgfri tekst. Velg enten en novelle, en roman, en nyhetsartikkel eller et leserinnlegg.`,
    },
    {
      id: 'norsk-8-1-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Les en selvvalgt novelle og identifiser følgende elementer. Skriv svaret ditt for hånd eller last opp et bilde av svaret.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem er hovedpersonen, og hvordan beskrives hen?',
            solution: 'Beskriv hovedpersonens egenskaper, utseende og personlighet basert på teksten.',
            multipleChoiceOptions: [
              'Beskriv egenskaper, utseende og personlighet basert på teksten',
              'Skriv bare navnet på hovedpersonen',
              'Fortell om alle personene i novellen',
              'Beskriv bare utseendet til hovedpersonen',
            ],
          },
          {
            label: 'b',
            task: 'Hva er konflikten eller problemet i novellen?',
            solution: 'Identifiser hva hovedpersonen ønsker å oppnå eller hvilken utfordring hen står overfor.',
            multipleChoiceOptions: [
              'Identifiser utfordringen hovedpersonen står overfor',
              'Beskriv alt som skjer i novellen',
              'Fortell om slutten på novellen',
              'List opp alle personene i novellen',
            ],
          },
          {
            label: 'c',
            task: 'Hvor er vendepunktet i handlingen?',
            solution: 'Finn det stedet der handlingen tar en ny retning eller noe uventet skjer.',
            multipleChoiceOptions: [
              'Der handlingen tar en ny retning eller noe uventet skjer',
              'I begynnelsen av novellen',
              'På slutten av novellen',
              'Det finnes ikke vendepunkt i noveller',
            ],
          },
          {
            label: 'd',
            task: 'Hvordan er slutten - åpen eller lukket?',
            solution: 'En åpen slutt lar leseren selv tolke hva som skjer videre. En lukket slutt gir et klart svar.',
            multipleChoiceOptions: [
              'Åpen slutt: leseren tolker selv. Lukket slutt: klart svar',
              'Alle noveller har åpen slutt',
              'Alle noveller har lukket slutt',
              'Slutten er alltid lykkelig',
            ],
          },
        ],
        hints: ['Et vendepunkt er der handlingen endrer retning.', 'En åpen slutt betyr at ikke alt forklares.'],
        solution: 'Svarene vil variere avhengig av hvilken novelle du har lest. Det viktige er at du kan identifisere og begrunne elementene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 1.2: Lesestrategier
// ============================================================================

export const CHAPTER_NORSK_8_1_2: TextbookChapter = {
  id: 'norsk-8-1-2',
  courseId: 'norsk-8',
  chapterNumber: '1.2',
  title: 'Lesestrategier',
  description: 'Lær ulike strategier for å lese og forstå tekster bedre.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke ulike lesestrategier tilpasset formålet med lesingen',
  ],
  content: [
    // ===== DEL 1: Introduksjon =====
    {
      id: 'norsk-8-1-2-intro',
      type: 'text',
      content: `## Hvorfor trenger vi lesestrategier?

Å lese er mer enn å avkode ord. For å virkelig **forstå** en tekst, må vi være aktive lesere. Det betyr at vi bruker ulike strategier før, under og etter lesing.

Lesestrategier hjelper deg å:
- Forstå vanskelige tekster bedre
- Huske det du har lest
- Lese mer effektivt
- Bli en mer kritisk leser`,
    },
    {
      id: 'norsk-8-1-2-def-1',
      type: 'definition',
      title: 'Lesestrategi',
      content: `En **lesestrategi** er en bevisst fremgangsmåte du bruker for å forstå og huske det du leser. Ulike tekster og lesemål krever ulike strategier.`,
    },

    // ===== DEL 2: Før lesing =====
    {
      id: 'norsk-8-1-2-text-2',
      type: 'text',
      content: `## Før lesing

### 1. Forkunnskaper
Før du begynner å lese, tenk over hva du allerede vet om emnet. Dette kalles å **aktivere forkunnskaper**.

**Spørsmål å stille seg selv:**
- Hva vet jeg om dette temaet fra før?
- Har jeg lest noe lignende tidligere?
- Hva forventer jeg at teksten handler om?

### 2. Overblikk
Skap deg et **overblikk** over teksten før du leser grundig:
- Les overskrifter og mellomtitler
- Se på bilder, tabeller og illustrasjoner
- Les innledningen og avslutningen
- Se på uthevet tekst og faktabokser`,
    },
    {
      id: 'norsk-8-1-2-tip-1',
      type: 'tip',
      content: `**BISON-overblikk**

**BISON** er en huskeregel for å skaffe overblikk:

**B** - Bilder og bildetekster
**I** - Innledning
**S** - Siste avsnitt
**O** - Overskrifter
**N** - NB! (uthevet tekst, faktabokser)`,
    },

    // Oppgave 1: Før lesing
    {
      id: 'norsk-8-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din forståelse av strategier som brukes FØR lesing.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr det å aktivere forkunnskaper?',
            solution: 'Å aktivere forkunnskaper betyr å tenke over hva du allerede vet om emnet før du leser.',
            multipleChoiceOptions: [
              'Å tenke over hva du allerede vet om emnet',
              'Å lese teksten fort',
              'Å hoppe over vanskelige ord',
              'Å lese teksten høyt',
            ],
          },
          {
            label: 'b',
            task: 'Når bør du aktivere forkunnskaper?',
            solution: 'Du bør aktivere forkunnskaper FØR du begynner å lese.',
            multipleChoiceOptions: [
              'Før du begynner å lese',
              'Etter at du har lest teksten',
              'Midt i teksten',
              'Bare når teksten er vanskelig',
            ],
          },
          {
            label: 'c',
            task: 'Hva står BISON for?',
            solution: 'BISON står for Bilder, Innledning, Siste avsnitt, Overskrifter, NB-tekst.',
            multipleChoiceOptions: [
              'Bilder, Innledning, Siste avsnitt, Overskrifter, NB-tekst',
              'Bøker, Innhold, Slutt, Ord, Notater',
              'Begynn, Innhold, Stopp, Oppgaver, Noter',
              'Basis, Info, Start, Oppsummering, Nytt',
            ],
          },
        ],
        solution: 'Før lesing bør du aktivere forkunnskaper og bruke BISON for å få overblikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 3: Under lesing =====
    {
      id: 'norsk-8-1-2-text-3',
      type: 'text',
      content: `## Under lesing

### 3. Stille spørsmål
Still spørsmål til teksten mens du leser:
- Hva betyr dette ordet?
- Hvorfor skjer dette?
- Hva tror jeg skjer videre?

### 4. Visualisere
Lag mentale bilder av det du leser. Se for deg personene, stedene og hendelsene.

### 5. Understreke og notere
- Strek under viktige setninger
- Skriv stikkord i margen
- Lag spørsmål til teksten

### 6. Oppsummere underveis
Stopp opp etter hvert avsnitt og oppsummer med egne ord:
- Hva handlet dette avsnittet om?
- Hva var hovedpoenget?`,
    },
    {
      id: 'norsk-8-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Aktiv lesing',
      problem: `Her er et avsnitt fra en faktatekst. Hvordan kan du lese det aktivt?

"Fotosyntesen er en prosess der planter omdanner karbondioksid og vann til glukose og oksygen ved hjelp av sollys. Denne prosessen er grunnlaget for nesten alt liv på jorden, fordi den produserer oksygenet vi puster og maten vi spiser."`,
      solution: `**Aktiv lesing av avsnittet:**

1. **Stille spørsmål:**
   - Hva er fotosyntese?
   - Hvorfor er den viktig?

2. **Understreke nøkkelord:**
   - fotosyntese, karbondioksid, vann, glukose, oksygen, sollys

3. **Visualisere:**
   - Se for deg en plante som "spiser" sollys og lager mat og oksygen

4. **Oppsummere:**
   - Fotosyntese = planter lager mat av sollys, CO2 og vann. Gir oss oksygen og mat.`,
    },

    // Oppgave 2: Under lesing
    {
      id: 'norsk-8-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Test din forståelse av strategier som brukes UNDER lesing.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr det å "visualisere" under lesing?',
            solution: 'Å visualisere betyr å lage mentale bilder av det du leser.',
            multipleChoiceOptions: [
              'Å lage mentale bilder av det du leser',
              'Å tegne teksten på papir',
              'Å se på bildene i teksten',
              'Å lese teksten høyt',
            ],
          },
          {
            label: 'b',
            task: 'Hva bør du gjøre når du møter et ukjent ord?',
            solution: 'Du bør prøve å finne betydningen fra sammenhengen.',
            multipleChoiceOptions: [
              'Prøve å finne betydningen fra sammenhengen',
              'Hoppe over ordet',
              'Slutte å lese',
              'Spørre noen med en gang',
            ],
          },
          {
            label: 'c',
            task: 'Hva er fordelen med å ta notater mens man leser?',
            solution: 'Notatskriving hjelper deg å huske og forstå stoffet bedre.',
            multipleChoiceOptions: [
              'Det hjelper deg å huske og forstå stoffet bedre',
              'Det går raskere å lese',
              'Det ser pent ut',
              'Det er obligatorisk',
            ],
          },
        ],
        solution: 'Under lesing bør du visualisere, stille spørsmål og ta notater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 4: Etter lesing =====
    {
      id: 'norsk-8-1-2-text-4',
      type: 'text',
      content: `## Etter lesing

### 7. Oppsummere hele teksten
Når du er ferdig, oppsummer hovedinnholdet:
- Hva handlet teksten om?
- Hva var de viktigste poengene?
- Hva lærte jeg?

### 8. Reflektere
Tenk kritisk over det du har lest:
- Er jeg enig med forfatteren?
- Hva synes jeg om teksten?
- Har dette endret min oppfatning av noe?

### 9. Koble til egne erfaringer
Finn forbindelser mellom teksten og ditt eget liv:
- Har jeg opplevd noe lignende?
- Hvordan kan jeg bruke denne kunnskapen?`,
    },
    {
      id: 'norsk-8-1-2-note-1',
      type: 'note',
      content: `**Ulike tekster - ulike strategier**

Du trenger ikke bruke alle strategiene hver gang du leser. Velg strategier ut fra:

- **Formålet:** Leser du for å lære, for underholdning, eller for å finne spesifikk informasjon?
- **Teksttypen:** En novelle leses annerledes enn en lærebokartikkel.
- **Vanskelighetsgrad:** Vanskelige tekster krever flere strategier.`,
    },

    // Oppgave 3: Etter lesing og strategi-valg
    {
      id: 'norsk-8-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Test din forståelse av strategier som brukes ETTER lesing.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedformålet med lesestrategier?',
            solution: 'Å forstå og huske det du leser bedre.',
            multipleChoiceOptions: [
              'Å forstå og huske det du leser bedre',
              'Å lese raskere',
              'Å unngå vanskelige tekster',
              'Å slippe å lese hele teksten',
            ],
          },
          {
            label: 'b',
            task: 'Hva er den beste strategien hvis du skal lese en vanskelig fagtekst?',
            solution: 'Bruke flere strategier: overblikk, stille spørsmål, understreke, oppsummere.',
            multipleChoiceOptions: [
              'Bruke flere strategier: overblikk, stille spørsmål, understreke, oppsummere',
              'Lese fort gjennom hele teksten én gang',
              'Bare lese overskriftene',
              'Hoppe over de vanskelige delene',
            ],
          },
          {
            label: 'c',
            task: 'Hva er et sammendrag?',
            solution: 'En kort gjengivelse av hovedinnholdet.',
            multipleChoiceOptions: [
              'En kort gjengivelse av hovedinnholdet',
              'En kopi av hele teksten',
              'En liste over alle ordene',
              'En tegning av teksten',
            ],
          },
        ],
        solution: 'Etter lesing bør du oppsummere, reflektere og koble til egne erfaringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 5: Praktiske oppgaver =====
    {
      id: 'norsk-8-1-2-text-praktisk',
      type: 'text',
      content: `## Praktiske oppgaver

Nå skal du bruke lesestrategiene i praksis. Velg en tekst og prøv ut strategiene.`,
    },
    {
      id: 'norsk-8-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Bruk BISON-metoden på en selvvalgt tekst fra læreboka eller en nettavis. Beskriv hva du fant i hver kategori.',
        subTasks: [
          {
            label: 'a',
            task: '**B** - Hvilke bilder og bildetekster fant du?',
            solution: 'Beskriv bildene og hva bildetekstene forteller.',
            multipleChoiceOptions: [
              'Beskriv bildene og hva bildetekstene forteller',
              'Bare tell antall bilder',
              'Ignorer bildene',
              'Les bare overskriftene',
            ],
          },
          {
            label: 'b',
            task: '**I** - Hva forteller innledningen deg om teksten?',
            solution: 'Oppsummer hva innledningen handler om.',
            multipleChoiceOptions: [
              'Oppsummer hva innledningen handler om',
              'Les bare første ord',
              'Hopp over innledningen',
              'Les hele teksten først',
            ],
          },
          {
            label: 'c',
            task: '**S** - Hva sier siste avsnitt?',
            solution: 'Beskriv hovedpoenget i avslutningen.',
            multipleChoiceOptions: [
              'Beskriv hovedpoenget i avslutningen',
              'Bare les siste setning',
              'Ignorer siste avsnitt',
              'Les midten av teksten',
            ],
          },
          {
            label: 'd',
            task: '**O** - Hvilke overskrifter har teksten?',
            solution: 'List opp overskriftene og hva de forteller om innholdet.',
            multipleChoiceOptions: [
              'List opp overskriftene og hva de forteller om innholdet',
              'Bare tell antall overskrifter',
              'Ignorer overskriftene',
              'Les bare hovedoverskriften',
            ],
          },
          {
            label: 'e',
            task: '**N** - Hva er uthevet eller står i faktabokser?',
            solution: 'Noter viktige ord eller informasjon som er fremhevet.',
            multipleChoiceOptions: [
              'Noter viktige ord eller informasjon som er fremhevet',
              'Ignorer uthevet tekst',
              'Les bare vanlig tekst',
              'Hopp over faktabokser',
            ],
          },
        ],
        hints: ['Velg en tekst med tydelige overskrifter og bilder.'],
        solution: 'Svarene vil variere avhengig av hvilken tekst du har valgt. Det viktige er at du systematisk går gjennom alle BISON-punktene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-8-1-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en kort faktatekst (1-2 sider) og les den aktivt med minst tre ulike strategier. Dokumenter hvordan du brukte strategiene.',
        hints: [
          'Velg strategier fra "før", "under" og "etter" lesing.',
          'Skriv ned spørsmålene du stilte til teksten.',
          'Vis understrekinger eller notater du gjorde.',
        ],
        solution: 'Du bør vise at du har brukt minst tre strategier aktivt, for eksempel: 1) Aktiverte forkunnskaper før lesing, 2) Stilte spørsmål og understreket under lesing, 3) Oppsummerte etter lesing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 1.3: Analyse av skjønnlitteratur
// ============================================================================

export const CHAPTER_NORSK_8_1_3: TextbookChapter = {
  id: 'norsk-8-1-3',
  courseId: 'norsk-8',
  chapterNumber: '1.3',
  title: 'Analyse av skjønnlitteratur',
  description: 'Lær å analysere noveller og andre skjønnlitterære tekster ved å bruke litterære begreper.',
  estimatedMinutes: 55,
  competenceGoals: [
    'presentere og reflektere over egne tolkninger av skjønnlitterære tekster',
  ],
  content: [
    // ===== DEL 1: Introduksjon til analyse =====
    {
      id: 'norsk-8-1-3-intro',
      type: 'text',
      content: `## Hva betyr det å analysere en tekst?

Å **analysere** en tekst betyr å undersøke den grundig og finne ut hvordan den er bygd opp og hva den betyr. Vi deler teksten opp i mindre deler og ser på hvordan delene virker sammen.

Når vi analyserer skjønnlitteratur, ser vi på:
- Handlingen (hva skjer?)
- Personene (hvem handler?)
- Miljøet (hvor og når?)
- Fortellerteknikk (hvordan fortelles historien?)
- Tema og budskap (hva handler teksten egentlig om?)
- Virkemidler (hvilke grep bruker forfatteren?)`,
    },
    {
      id: 'norsk-8-1-3-def-1',
      type: 'definition',
      title: 'Litterær analyse',
      content: `En **litterær analyse** er en systematisk undersøkelse av en skjønnlitterær tekst. Vi bruker fagbegreper for å beskrive og tolke hvordan teksten er bygd opp og hva den formidler.`,
    },

    // ===== DEL 2: Handlingen =====
    {
      id: 'norsk-8-1-3-text-2',
      type: 'text',
      content: `## Handlingen

**Handlingen** er det som skjer i teksten - hendelsene i rekkefølge.

### Komposisjon
Komposisjonen er måten handlingen er bygd opp på:

1. **Innledning (eksposisjon):** Vi blir kjent med personer, tid og sted
2. **Konflikt/problem:** En utfordring eller spenning oppstår
3. **Stigende handling:** Spenningen øker
4. **Klimaks:** Det mest spennende punktet
5. **Synkende handling:** Konflikten løses (eller ikke)
6. **Avslutning:** Historien avsluttes

### Vendepunkt
Et **vendepunkt** er der handlingen tar en ny retning - noe uventet skjer som endrer situasjonen.`,
    },
    {
      id: 'norsk-8-1-3-def-2',
      type: 'definition',
      title: 'In medias res',
      content: `**In medias res** (latin: "midt i tingene") betyr at fortellingen starter midt i handlingen, uten lang innledning. Dette er vanlig i noveller for å skape umiddelbar spenning.`,
    },

    // Oppgave 1: Handlingen
    {
      id: 'norsk-8-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din forståelse av handlingen i en fortelling.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "in medias res"?',
            solution: 'In medias res er latin for "midt i tingene" og betyr at fortellingen starter midt i handlingen.',
            multipleChoiceOptions: [
              'At historien starter midt i handlingen',
              'At historien har en lykkelig slutt',
              'At historien fortelles baklengs',
              'At historien har flere fortellere',
            ],
          },
          {
            label: 'b',
            task: 'Hva er et vendepunkt i en fortelling?',
            solution: 'Et vendepunkt er det stedet i handlingen der noe uventet skjer som endrer situasjonen.',
            multipleChoiceOptions: [
              'Der handlingen tar en ny retning',
              'Der historien begynner',
              'Der historien slutter',
              'Der hovedpersonen introduseres',
            ],
          },
          {
            label: 'c',
            task: 'Hva er klimaks i en fortelling?',
            solution: 'Klimaks er det mest spennende eller avgjørende punktet i handlingen.',
            multipleChoiceOptions: [
              'Det mest spennende punktet i handlingen',
              'Begynnelsen av historien',
              'Slutten av historien',
              'Innledningen',
            ],
          },
        ],
        solution: 'Handlingen i en fortelling har en tydelig struktur med innledning, konflikt, klimaks og avslutning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 3: Personskildring =====
    {
      id: 'norsk-8-1-3-text-3',
      type: 'text',
      content: `## Personskildring

Hvordan blir vi kjent med personene i teksten?

### Direkte karakteristikk
Fortelleren eller andre personer **forteller direkte** hvordan en person er:
*"Maria var en snill og omtenksom jente."*

### Indirekte karakteristikk
Vi **tolker selv** hvordan personen er ut fra:
- Hva personen gjør (handlinger)
- Hva personen sier (replikker)
- Hva personen tenker
- Hvordan andre reagerer på personen
- Ytre beskrivelser (utseende, klær)

*Maria satte seg ned ved den gamle mannen og spurte forsiktig hvordan han hadde det.*
→ Her viser handlingen at Maria er omtenksom.`,
    },
    {
      id: 'norsk-8-1-3-example-karakteristikk',
      type: 'example',
      title: 'Eksempel: Direkte vs. indirekte karakteristikk',
      problem: `Hvilken type karakteristikk brukes i disse eksemplene?

**Eksempel A:** "Jonas var lat og likte ikke å jobbe."

**Eksempel B:** "Jonas sukket tungt, la seg på sofaen og zapset gjennom TV-kanalene mens oppvasken hopet seg opp på kjøkkenet."`,
      solution: `**Eksempel A** bruker **direkte karakteristikk**:
- Fortelleren sier eksplisitt at Jonas er lat

**Eksempel B** bruker **indirekte karakteristikk**:
- Vi ser Jonas' handlinger (ligger på sofaen, ser TV)
- Vi ser konsekvensen (oppvasken hoper seg opp)
- Vi må selv tolke at Jonas er lat basert på dette`,
    },

    // Oppgave 2: Personskildring
    {
      id: 'norsk-8-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Test din forståelse av personskildring.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom direkte og indirekte karakteristikk?',
            solution: 'Direkte karakteristikk forteller eksplisitt hvordan en person er, mens indirekte viser det gjennom handlinger og replikker.',
            multipleChoiceOptions: [
              'Direkte sier hvordan personen er, indirekte viser det gjennom handlinger',
              'Direkte er i jeg-form, indirekte er i tredjeperson',
              'Direkte er i dialoger, indirekte er i beskrivelser',
              'Det er ingen forskjell',
            ],
          },
          {
            label: 'b',
            task: 'Hvilken type karakteristikk er dette: "Hun smilte til den nervøse nye eleven og tilbød henne en plass ved siden av seg."',
            solution: 'Dette er indirekte karakteristikk - handlingen viser at hun er vennlig og omtenksom.',
            multipleChoiceOptions: [
              'Indirekte karakteristikk',
              'Direkte karakteristikk',
              'Begge deler',
              'Ingen av delene',
            ],
          },
        ],
        solution: 'Indirekte karakteristikk krever at leseren tolker personens egenskaper basert på handlinger og ord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 4: Fortellerteknikk =====
    {
      id: 'norsk-8-1-3-text-4',
      type: 'text',
      content: `## Fortellerteknikk

### Synsvinkel
**Synsvinkelen** forteller oss hvem som "ser" hendelsene:

**Jeg-forteller (førsteperson):**
- Fortelleren er selv en person i handlingen
- Bruker "jeg"
- Begrenset: Vi vet bare det fortelleren vet
*"Jeg gikk bort til vinduet og så ut."*

**Tredjepersonsforteller:**
- Fortelleren står utenfor handlingen
- Bruker "han/hun/de"
- Kan være allvitende (vet alt) eller begrenset
*"Han gikk bort til vinduet og så ut."*

### Tid
- **Kronologisk:** Hendelsene fortelles i den rekkefølgen de skjer
- **Tilbakeblikk (retrospeksjon):** Fortelleren hopper tilbake i tid
- **Frampek:** Hint om hva som kommer til å skje`,
    },

    // Oppgave 3: Fortellerteknikk
    {
      id: 'norsk-8-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Test din forståelse av fortellerteknikk og synsvinkel.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken synsvinkel brukes her: "Jeg hørte skrittene bak meg og begynte å løpe."',
            solution: 'Setningen bruker "jeg", som viser at dette er en jeg-forteller.',
            multipleChoiceOptions: [
              'Jeg-forteller',
              'Allvitende tredjepersonsforteller',
              'Begrenset tredjepersonsforteller',
              'Du-forteller',
            ],
          },
          {
            label: 'b',
            task: 'Hvilken synsvinkel brukes her: "Maria visste ikke at noen fulgte etter henne."',
            solution: 'Her vet fortelleren noe Maria ikke vet - dette er en allvitende tredjepersonsforteller.',
            multipleChoiceOptions: [
              'Allvitende tredjepersonsforteller',
              'Jeg-forteller',
              'Begrenset tredjepersonsforteller',
              'Maria er fortelleren',
            ],
          },
          {
            label: 'c',
            task: 'Hva er et tilbakeblikk (retrospeksjon)?',
            solution: 'Et tilbakeblikk er når fortelleren hopper tilbake i tid for å fortelle om noe som skjedde tidligere.',
            multipleChoiceOptions: [
              'Når fortelleren hopper tilbake i tid',
              'Når historien fortelles baklengs',
              'Når fortelleren ser i et speil',
              'Når leseren blar tilbake',
            ],
          },
        ],
        solution: 'Synsvinkel og tidsbruk er viktige verktøy for å forstå hvordan en historie fortelles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 5: Tema og språklige virkemidler =====
    {
      id: 'norsk-8-1-3-def-3',
      type: 'definition',
      title: 'Tema og motiv',
      content: `**Tema** er det overordnede emnet teksten handler om - den underliggende meningen. Eksempler: kjærlighet, sjalusi, død, vennskap, utenforskap.

**Motiv** er de konkrete elementene i handlingen som uttrykker temaet. Eksempler: et brudd mellom to venner, en begravelse, et gjensyn.`,
    },
    {
      id: 'norsk-8-1-3-text-5',
      type: 'text',
      content: `## Språklige virkemidler

Forfattere bruker språklige virkemidler for å skape stemning og forsterke budskapet:

### Billedspråk
- **Sammenlikning:** "Hun var rask som en hare"
- **Metafor:** "Livet er en reise"
- **Besjeling:** "Vinden hvisket hemmeligheter"

### Kontraster
Motsetninger som forsterker hverandre:
- Lys/mørke
- Ung/gammel
- Rik/fattig

### Symboler
Noe konkret som representerer noe abstrakt:
- En due = fred
- En storm = indre uro
- En lukket dør = avvisning

### Gjentakelse
Ord eller fraser som gjentas for å understreke noe.`,
    },
    {
      id: 'norsk-8-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Finne tema',
      problem: `Les tekstutdraget og finn temaet:

"Marius sto ved vinduet og så ned på de andre barna som lekte i skolegården. Han hørte latteren deres, men følte seg ikke som en del av gjengen. Igjen. Da telefonen ringte og Jonas spurte om han ville være med hjem etter skolen, kjente Marius at noe løsnet i brystet."`,
      solution: `**Tema:** Utenforskap og vennskap

**Begrunnelse:**
- Marius står adskilt fra de andre (utenforskap)
- Han observerer, men deltar ikke
- Telefonsamtalen med Jonas representerer inkludering
- "Noe løsnet i brystet" viser lettelse over å bli inkludert

Teksten handler om følelsen av å stå utenfor og lengsel etter tilhørighet.`,
    },

    // Oppgave 4: Tema og virkemidler
    {
      id: 'norsk-8-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Test din forståelse av tema og språklige virkemidler.',
        subTasks: [
          {
            label: 'a',
            task: '"Stormen ulte utenfor vinduet mens hun satt og ventet på beskjeden." Hva er stormen sannsynligvis et symbol på?',
            solution: 'Storm brukes ofte som symbol på indre uro, kaos eller vanskelige følelser.',
            multipleChoiceOptions: [
              'Indre uro eller spenning',
              'Godt vær',
              'At hun er glad',
              'At hun skal på tur',
            ],
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom tema og motiv?',
            solution: 'Tema er det overordnede emnet (f.eks. vennskap), mens motiv er konkrete elementer som uttrykker temaet.',
            multipleChoiceOptions: [
              'Tema er overordnet, motiv er konkrete elementer',
              'De betyr det samme',
              'Motiv kommer før tema',
              'Tema er alltid kjærlighet',
            ],
          },
          {
            label: 'c',
            task: 'Hva slags virkemiddel er "Livet er en reise"?',
            solution: 'Dette er en metafor - livet sammenlignes med en reise uten å bruke "som".',
            multipleChoiceOptions: [
              'Metafor',
              'Sammenlikning',
              'Besjeling',
              'Symbol',
            ],
          },
        ],
        solution: 'Språklige virkemidler forsterker budskapet og skaper stemning i teksten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 6: Praktisk analyse =====
    {
      id: 'norsk-8-1-3-text-praktisk',
      type: 'text',
      content: `## Praktisk oppgave: Analyser en novelle

Nå skal du bruke alt du har lært til å analysere en hel novelle. Velg en novelle du har lest, eller bruk en novelle læreren gir deg.`,
    },
    {
      id: 'norsk-8-1-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyser en selvvalgt novelle ved å svare på følgende:',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv handlingen kort (5-7 setninger)',
            solution: 'Gi et sammendrag av hovedhendelsene i novellen.',
            multipleChoiceOptions: [
              'Gi et sammendrag av hovedhendelsene i novellen',
              'Gjenfortell hele novellen ord for ord',
              'Beskriv bare slutten',
              'Skriv bare om personene',
            ],
          },
          {
            label: 'b',
            task: 'Hvordan er hovedpersonen karakterisert - direkte eller indirekte? Gi eksempler.',
            solution: 'Vis med sitater hvordan vi blir kjent med hovedpersonen.',
            multipleChoiceOptions: [
              'Vis med sitater hvordan vi blir kjent med hovedpersonen',
              'Beskriv bare utseendet',
              'Fortell bare navnet',
              'Ignorer karakteriseringen',
            ],
          },
          {
            label: 'c',
            task: 'Hvilken synsvinkel brukes?',
            solution: 'Jeg-forteller eller tredjepersonsforteller, og hvordan påvirker dette teksten.',
            multipleChoiceOptions: [
              'Jeg-forteller eller tredjepersonsforteller, og hvordan det påvirker teksten',
              'Bare si hvem som er hovedperson',
              'Beskriv alle personene',
              'Ignorer synsvinkelen',
            ],
          },
          {
            label: 'd',
            task: 'Finn minst ett språklig virkemiddel og forklar effekten.',
            solution: 'Identifiser for eksempel en metafor, kontrast eller symbol, og forklar hvordan det forsterker budskapet.',
            multipleChoiceOptions: [
              'Identifiser metafor, kontrast eller symbol og forklar effekten',
              'Bare list opp alle ordene',
              'Ignorer virkemidlene',
              'Beskriv bare handlingen',
            ],
          },
          {
            label: 'e',
            task: 'Hva er temaet i novellen? Begrunn svaret.',
            solution: 'Identifiser det overordnede emnet og vis hvordan teksten uttrykker dette.',
            multipleChoiceOptions: [
              'Identifiser det overordnede emnet og vis hvordan teksten uttrykker det',
              'Bare skriv hva som skjer',
              'Ignorer temaet',
              'Skriv om forfatteren',
            ],
          },
        ],
        hints: [
          'Start med å lese novellen flere ganger.',
          'Understrek viktige passasjer.',
          'Bruk fagbegrepene du har lært.',
        ],
        solution: 'En god analyse bruker fagbegreper og begrunner tolkningene med eksempler fra teksten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 2.1: Fortellende tekster
// ============================================================================

export const CHAPTER_NORSK_8_2_1: TextbookChapter = {
  id: 'norsk-8-2-1',
  courseId: 'norsk-8',
  chapterNumber: '2.1',
  title: 'Fortellende tekster',
  description: 'Lær å skrive engasjerende fortellinger med god oppbygning og språklige virkemidler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive kreative, informative og argumenterende tekster med begrunnede synspunkter og tilpasset formål, mottaker og medium',
  ],
  content: [
    {
      id: 'norsk-8-2-1-intro',
      type: 'text',
      content: `## Hva er en fortellende tekst?

En **fortellende tekst** er en tekst som gjengir hendelser i en bestemt rekkefølge. Det kan være en oppdiktet historie (novelle, eventyr) eller en sann historie (selvbiografi, reiseskildring).

Når du skriver fortellende tekster, må du tenke på:
- **Hvem** er personene?
- **Hva** skjer?
- **Hvor** og **når** foregår det?
- **Hvorfor** skjer det som skjer?
- **Hvordan** vil du fortelle historien?`,
    },
    {
      id: 'norsk-8-2-1-text-2',
      type: 'text',
      content: `## Oppbygning av en fortelling

En god fortelling har en tydelig struktur:

### 1. Innledningen
- Fang leserens oppmerksomhet
- Presenter hovedpersonen
- Etabler tid og sted
- Antyd hva fortellingen skal handle om

### 2. Hoveddelen
- Utvikle konflikten eller problemet
- Bygg opp spenningen gradvis
- La handlingen bygge mot et klimaks
- Bruk dialoger og beskrivelser

### 3. Avslutningen
- Løs konflikten (eller la den stå åpen)
- Gi leseren en tilfredsstillende slutt
- Eventuelt: la leseren sitte igjen med noe å tenke på`,
    },
    {
      id: 'norsk-8-2-1-tip-1',
      type: 'tip',
      title: 'Gode innledninger',
      content: `Start gjerne med én av disse teknikkene:

**In medias res:** Start midt i handlingen
*"Skrittene nærmet seg. Jeg holdt pusten."*

**En interessant setning:** Vekk nysgjerrigheten
*"Den dagen jeg fant brevet, endret alt seg."*

**Dialog:** La en person si noe
*"Du må aldri fortelle dette til noen," hvisket hun.*

**Miljøbeskrivelse:** Skap stemning
*"Tåken lå tett over vannet den morgenen."*`,
    },
    {
      id: 'norsk-8-2-1-def-1',
      type: 'definition',
      title: 'Spenningskurve',
      content: `**Spenningskurven** viser hvordan spenningen i en fortelling stiger og synker:

1. **Eksposisjon** - Vi lærer om personer og situasjon
2. **Stigende handling** - Problemet utvikler seg, spenningen øker
3. **Klimaks** - Det mest spennende punktet
4. **Fallende handling** - Spenningen avtar
5. **Løsning** - Konflikten løses`,
    },
    {
      id: 'norsk-8-2-1-text-3',
      type: 'text',
      content: `## Skriveteknikker

### Vis, ikke fortell
I stedet for å **fortelle** hvordan noen føler seg, **vis** det gjennom handlinger og detaljer.

**Fortelle:** *"Hun var redd."*
**Vise:** *"Hendene hennes skalv. Hun kikket seg over skulderen for tredje gang."*

### Bruk sansene
Beskriv hva personene ser, hører, lukter, smaker og føler:
- **Syn:** Fargene, lyset, bevegelser
- **Hørsel:** Lyder, stillhet, stemmer
- **Lukt:** Dufter som vekker minner
- **Smak:** Mat, luft, tårer
- **Følelse:** Temperatur, tekstur, smerte

### Varier setningene
Korte setninger skaper spenning. Lengre setninger gir ro og beskrivelser.

*"Han løp. Fortere. Enda fortere. Bak seg hørte han ropene komme nærmere, og han visste at han ikke hadde mye tid."*`,
    },
    {
      id: 'norsk-8-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Vis, ikke fortell',
      problem: `Gjør om disse "forteller"-setningene til "viser"-setninger:

1. "Gutten var sulten."
2. "Det var kaldt ute."
3. "Hun ble overrasket."`,
      solution: `**1. Gutten var sulten.**
→ *"Magen rumlet høyt. Han kunne ikke huske sist han hadde spist, og munnen hans var tørr."*

**2. Det var kaldt ute.**
→ *"Pusten hans la seg som hvite skyer foran ansiktet. Han stampet i snøen for å holde føttene varme."*

**3. Hun ble overrasket.**
→ *"Hun sperret øynene opp. Koppen gled ut av hendene hennes og knuste mot gulvet."*`,
    },
    {
      id: 'norsk-8-2-1-text-4',
      type: 'text',
      content: `## Dialoger

Dialoger gjør fortellingen levende og viser personlighet.

### Regler for dialoger:
- Ny linje for hver person som snakker
- Bruk anførselstegn: "..."
- Varier mellom "sa", "spurte", "svarte", "hvisket", "ropte"
- La dialogen føre handlingen fremover

### Eksempel:
*"Hvor har du vært?" spurte mor. Stemmen hennes var iskald.*

*"Bare ute," mumlet jeg og så ned i gulvet.*

*"I fire timer? Uten å si fra?"*

*Jeg sa ingenting. Hva skulle jeg si?*`,
    },
    {
      id: 'norsk-8-2-1-warning-1',
      type: 'warning',
      title: 'Vanlige feil i fortellinger',
      content: `Unngå disse fellene:

❌ **For lang innledning** - Kom til poenget
❌ **For mange personer** - Hold det enkelt
❌ **Forteller alt** - La leseren tolke litt selv
❌ **Svak slutt** - Planlegg avslutningen
❌ **Upersonlige beskrivelser** - Bruk sansene
❌ **Bare "sa"** - Varier anførselsordene`,
    },

    // Oppgave 1: Vis, ikke fortell
    {
      id: 'norsk-8-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din forståelse av skriveteknikken "vis, ikke fortell".',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "vis, ikke fortell" i skriving?',
            solution: '"Vis, ikke fortell" betyr at du bør vise følelser og stemning gjennom handlinger, dialoger og sansedetaljer, i stedet for å bare si det direkte ("hun var redd").',
            multipleChoiceOptions: [
              'Vis følelser gjennom handlinger og detaljer i stedet for å si det direkte',
              'Bruk bilder i stedet for tekst',
              'Skriv korte setninger',
              'Bruk mange adjektiver',
            ],
          },
          {
            label: 'b',
            task: 'Hva er klimaks i en fortelling?',
            solution: 'Klimaks er det mest spennende punktet i fortellingen - høydepunktet der konflikten når sitt toppunkt.',
            multipleChoiceOptions: [
              'Det mest spennende punktet i fortellingen',
              'Begynnelsen av fortellingen',
              'Slutten av fortellingen',
              'Presentasjonen av hovedpersonen',
            ],
          },
          {
            label: 'c',
            task: 'Hvilken innledningsteknikk er dette: "Brevet lå der på bordet. Jeg visste hva det inneholdt før jeg åpnet det."',
            solution: 'Dette er en interessant åpning som vekker nysgjerrighet - leseren lurer på hva brevet inneholder og hvorfor fortelleren vet det på forhånd.',
            multipleChoiceOptions: [
              'Interessant setning som vekker nysgjerrighet',
              'In medias res',
              'Dialog',
              'Miljøbeskrivelse',
            ],
          },
        ],
        solution: 'God fortellende skriving bruker teknikken "vis, ikke fortell" og har en tydelig spenningskurve med klimaks.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: Gjør om setninger
    {
      id: 'norsk-8-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gjør om disse "forteller"-setningene til "viser"-setninger ved å bruke sansedetaljer og handlinger:',
        subTasks: [
          {
            label: 'a',
            task: '"Han var nervøs."',
            solution: 'For eksempel: "Han tørket svetten av håndflatene og kikket på klokken for femte gang."',
            multipleChoiceOptions: [
              'Han tørket svetten av håndflatene og kikket på klokken for femte gang',
              'Han var veldig nervøs',
              'Han følte seg nervøs',
              'Han sa at han var nervøs',
            ],
          },
          {
            label: 'b',
            task: '"Det var en fin sommerdag."',
            solution: 'For eksempel: "Solen varmet skuldrene hans, og gresset bølget mykt i den lette brisen."',
            multipleChoiceOptions: [
              'Solen varmet skuldrene hans, og gresset bølget mykt i den lette brisen',
              'Det var en veldig fin sommerdag',
              'Sommerdagen var fin',
              'Det var fint vær ute',
            ],
          },
          {
            label: 'c',
            task: '"Maten smakte godt."',
            solution: 'For eksempel: "Den varme sausen fylte munnen med smaker av hvitløk og urter. Hun lukket øynene og nøt hvert eneste tygg."',
            multipleChoiceOptions: [
              'Den varme sausen fylte munnen med smaker av hvitløk og urter',
              'Maten var veldig god',
              'Hun likte maten',
              'Det smakte bra',
            ],
          },
        ],
        solution: 'Gode svar bruker konkrete sansedetaljer og handlinger i stedet for å si følelsen direkte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Skriv en kort fortelling
    {
      id: 'norsk-8-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kort fortelling (200-300 ord) med følgende krav:',
        subTasks: [
          {
            label: 'a',
            task: 'Start in medias res (midt i handlingen)',
            solution: 'Start med en dramatisk hendelse eller handling, ikke en lang innledning.',
            multipleChoiceOptions: [
              'Starte midt i en dramatisk hendelse uten lang innledning',
              'Starte med å beskrive hovedpersonen',
              'Starte med å beskrive været',
              'Starte med "Det var en gang"',
            ],
          },
          {
            label: 'b',
            task: 'Bruk minst tre sanser i beskrivelsene',
            solution: 'Inkluder syn, hørsel, lukt, smak eller følelse.',
            multipleChoiceOptions: [
              'Syn, hørsel, lukt, smak eller følesans',
              'Bare synssansen',
              'Bare beskrivelser av personer',
              'Bare dialog',
            ],
          },
          {
            label: 'c',
            task: 'Ha minst én dialog',
            solution: 'Dialoger skal føre handlingen fremover og vise personlighet.',
            multipleChoiceOptions: [
              'Dialog som fører handlingen fremover og viser personlighet',
              'Dialog som bare fyller plass',
              'Ingen dialog er nødvendig',
              'Bare tanker, ikke dialog',
            ],
          },
          {
            label: 'd',
            task: 'Inkluder et tydelig vendepunkt',
            solution: 'Et sted der handlingen tar en ny retning.',
            multipleChoiceOptions: [
              'Et sted der handlingen tar en ny retning',
              'Slutten av fortellingen',
              'Begynnelsen av fortellingen',
              'En lang beskrivelse',
            ],
          },
        ],
        hints: [
          'Planlegg slutten før du begynner å skrive.',
          'Velg en enkel handling med få personer.',
          'Les teksten høyt for å sjekke flyten.',
        ],
        solution: 'En god fortelling har tydelig struktur, levende beskrivelser og et engasjerende plot.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 2.2: Argumenterende tekster
// ============================================================================

export const CHAPTER_NORSK_8_2_2: TextbookChapter = {
  id: 'norsk-8-2-2',
  courseId: 'norsk-8',
  chapterNumber: '2.2',
  title: 'Argumenterende tekster',
  description: 'Lær å skrive tekster der du argumenterer for et synspunkt med gode begrunnelser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive kreative, informative og argumenterende tekster med begrunnede synspunkter og tilpasset formål, mottaker og medium',
  ],
  content: [
    {
      id: 'norsk-8-2-2-intro',
      type: 'text',
      content: `## Hva er en argumenterende tekst?

En **argumenterende tekst** er en tekst der du prøver å overbevise leseren om at din mening er riktig. Du bruker **argumenter** (begrunnelser) for å støtte ditt **synspunkt** (standpunkt).

Eksempler på argumenterende tekster:
- Leserinnlegg
- Debattinnlegg
- Essay
- Taler
- Reklame`,
    },
    {
      id: 'norsk-8-2-2-def-1',
      type: 'definition',
      title: 'Argument og synspunkt',
      content: `**Synspunkt (påstand):** Din mening om en sak.
*"Skolemat bør være gratis for alle elever."*

**Argument (begrunnelse):** Hvorfor du mener dette.
*"Forskning viser at elever som spiser lunsj, lærer bedre."*`,
    },
    {
      id: 'norsk-8-2-2-text-2',
      type: 'text',
      content: `## Struktur i argumenterende tekst

### 1. Innledning
- Fang leserens interesse
- Presenter saken/emnet
- Formuler ditt synspunkt (tese)

### 2. Hoveddel - Argumenter
- Presenter argumentene dine
- Ett argument per avsnitt
- Begrunn med eksempler, fakta eller erfaring
- Eventuelt: motargumenter og tilsvar

### 3. Avslutning
- Oppsummer hovedargumentene
- Gjenta synspunktet ditt
- Avslutt med en sterk appell`,
    },
    {
      id: 'norsk-8-2-2-def-2',
      type: 'definition',
      title: 'Etos, patos og logos',
      content: `De tre overbevisningsstrategiene fra retorikken:

**Etos** - Troverdighet
Vis at du kan noe om emnet. Bruk kilder og ekspertuttalelser.

**Patos** - Følelser
Engasjer leserens følelser. Bruk eksempler og historier som berører.

**Logos** - Logikk
Bruk fakta, statistikk og logiske resonnementer.`,
    },
    {
      id: 'norsk-8-2-2-text-3',
      type: 'text',
      content: `## Typer argumenter

### Faktaargument
Bygger på fakta og statistikk:
*"Ifølge SSB har 8 av 10 elever smarttelefon."*

### Erfaringsargument
Bygger på egne eller andres erfaringer:
*"Jeg har selv opplevd at..."*

### Autoritetsargument
Viser til eksperter eller kjente personer:
*"Forskere ved NTNU har vist at..."*

### Verdargument
Appellerer til verdier som rettferdighet, frihet, trygghet:
*"Alle barn fortjener like muligheter."*`,
    },
    {
      id: 'norsk-8-2-2-tip-1',
      type: 'tip',
      title: 'OREO-modellen',
      content: `En enkel modell for å bygge argumenter:

**O** - Opinion (mening): Si hva du mener
**R** - Reason (grunn): Forklar hvorfor
**E** - Example (eksempel): Gi et eksempel
**O** - Opinion (mening): Gjenta meningen din

*"Vi bør ha mer fysisk aktivitet på skolen (O). Det gir bedre konsentrasjon og læring (R). I Finland har de korte pauser med bevegelse hver time, og elevene presterer bedre (E). Derfor mener jeg at mer aktivitet er viktig (O)."*`,
    },
    {
      id: 'norsk-8-2-2-text-4',
      type: 'text',
      content: `## Motargumenter

En god argumenterende tekst tar opp **motargumenter** - argumenter mot ditt synspunkt - og svarer på dem.

### Hvorfor ta opp motargumenter?
- Viser at du har tenkt grundig
- Gjør argumentasjonen din sterkere
- Øker troverdigheten din

### Hvordan svare på motargumenter?
*"Noen vil kanskje si at... Dette stemmer til en viss grad, men..."*
*"Det er riktig at..., men likevel mener jeg at..."*
*"Selv om det kan være sant at..., veier fordelene tyngre fordi..."*`,
    },
    {
      id: 'norsk-8-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Argumenterende avsnitt',
      problem: `Skriv et argumenterende avsnitt for dette synspunktet:
"Elever bør få bruke mobil i friminuttene."`,
      solution: `**Eksempel på argumenterende avsnitt:**

Elever bør få lov til å bruke mobiltelefonen i friminuttene. For det første er mobilen et viktig verktøy for kommunikasjon med foreldre, spesielt for elever som må gi beskjeder om henting eller aktiviteter. For det andre trenger mange ungdommer en mental pause i en hektisk skolehverdag, og det å sjekke sosiale medier eller høre på musikk kan gi nettopp det. Noen vil kanskje innvende at mobilen fører til mobbing eller at elevene blir passive, men dette kan løses med tydelige regler om hva som er akseptabel bruk. Når elevene får tillit og ansvar, lærer de også å regulere sin egen skjermtid.`,
    },
    {
      id: 'norsk-8-2-2-warning-1',
      type: 'warning',
      title: 'Unngå disse feilene',
      content: `❌ **Personangrep:** Angrip argumentet, ikke personen
❌ **Bare følelser:** Ha også fakta og logikk
❌ **Overdrivelser:** "Alle mener at..." - Er det sant?
❌ **Stråmann:** Ikke forvreng motstanderens argument
❌ **Mangler begrunnelse:** "Fordi det bare er sånn" er ikke et argument`,
    },

    // Oppgave 1: Grunnleggende begreper
    {
      id: 'norsk-8-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din forståelse av grunnleggende begreper i argumenterende tekster.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er et synspunkt i en argumenterende tekst?',
            solution: 'Et synspunkt (påstand) er din mening om en sak - det du prøver å overbevise leseren om.',
            multipleChoiceOptions: [
              'Din mening eller standpunkt om en sak',
              'Et fakta som alle er enige om',
              'Et spørsmål du stiller til leseren',
              'En oppsummering av teksten',
            ],
          },
          {
            label: 'b',
            task: 'Hva er "logos" i retorikken?',
            solution: 'Logos handler om å bruke logikk, fakta, statistikk og rasjonelle resonnementer for å overbevise.',
            multipleChoiceOptions: [
              'Å bruke logikk, fakta og fornuft',
              'Å appellere til leserens følelser',
              'Å vise at du er troverdig',
              'Å bruke fine ord',
            ],
          },
          {
            label: 'c',
            task: 'Hvilket argument er et autoritetsargument?',
            solution: 'Et autoritetsargument viser til eksperter eller kjente personer med kompetanse. Her vises det til en minister.',
            multipleChoiceOptions: [
              'Ifølge helseminister Støre er dette viktig for folkehelsen',
              'Jeg synes dette er urettferdig',
              '70% av norske ungdommer bruker sosiale medier daglig',
              'Vi har alltid gjort det på denne måten',
            ],
          },
          {
            label: 'd',
            task: 'Hvorfor bør du ta opp motargumenter i en argumenterende tekst?',
            solution: 'Å ta opp og svare på motargumenter viser at du har tenkt grundig og gjør argumentasjonen din sterkere.',
            multipleChoiceOptions: [
              'For å vise at du har tenkt grundig og øke troverdigheten',
              'For å vise at du er usikker på egen mening',
              'For å gjøre teksten lengre',
              'For å forvirre leseren',
            ],
          },
        ],
        solution: 'Argumenterende tekster krever forståelse av synspunkt, argumenttyper og retoriske virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: OREO-modellen
    {
      id: 'norsk-8-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Bruk OREO-modellen til å skrive et kort argument for dette synspunktet: "Det bør være leksefri skole."',
        subTasks: [
          {
            label: 'a',
            task: 'O - Opinion (mening): Si hva du mener',
            solution: 'Eksempel: "Skolen bør være leksefri."',
            multipleChoiceOptions: [
              'Si tydelig hva du mener om saken',
              'Stille et spørsmål til leseren',
              'Beskrive et eksempel',
              'Gi en begrunnelse',
            ],
          },
          {
            label: 'b',
            task: 'R - Reason (grunn): Gi en begrunnelse',
            solution: 'Eksempel: "Da får elevene mer fritid til hobbyer og hvile, noe som er viktig for mental helse."',
            multipleChoiceOptions: [
              'Forklar hvorfor du mener dette',
              'Gjenta meningen din',
              'Gi et historisk eksempel',
              'Avslutt argumentet',
            ],
          },
          {
            label: 'c',
            task: 'E - Example (eksempel): Gi et konkret eksempel',
            solution: 'Eksempel: "I land som Finland har de mindre lekser, og elevene presterer like bra."',
            multipleChoiceOptions: [
              'Gi et konkret eksempel som støtter argumentet',
              'Gjenta meningen din',
              'Stille et retorisk spørsmål',
              'Avslutte med en appell',
            ],
          },
          {
            label: 'd',
            task: 'O - Opinion (mening): Gjenta meningen din',
            solution: 'Eksempel: "Derfor bør norske skoler også bli leksefrie."',
            multipleChoiceOptions: [
              'Gjenta og forsterke hovedpoenget ditt',
              'Introdusere et nytt argument',
              'Stille et spørsmål',
              'Beskrive motargumenter',
            ],
          },
        ],
        hints: [
          'O = Si din mening',
          'R = Gi en begrunnelse',
          'E = Gi et eksempel',
          'O = Gjenta meningen',
        ],
        solution: 'Eksempel: "Skolen bør være leksefri (O). Da får elevene mer fritid til hobbyer og hvile, noe som er viktig for mental helse (R). I land som Finland har de mindre lekser, og elevene presterer like bra (E). Derfor bør norske skoler også bli leksefrie (O)."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Skriv et leserinnlegg
    {
      id: 'norsk-8-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv et leserinnlegg (250-350 ord) om et selvvalgt tema. Innlegget skal ha:',
        subTasks: [
          {
            label: 'a',
            task: 'En fengende innledning som presenterer saken og ditt synspunkt',
            solution: 'Innledningen skal fange interesse og si hva du mener.',
            multipleChoiceOptions: [
              'Fange leserens interesse og presentere ditt standpunkt',
              'Gi en lang bakgrunnshistorie',
              'Liste opp alle argumentene dine',
              'Starte med å angripe motstanderne',
            ],
          },
          {
            label: 'b',
            task: 'Minst tre argumenter med begrunnelser',
            solution: 'Bruk ulike typer argumenter: fakta, erfaring, autoritet eller verdi.',
            multipleChoiceOptions: [
              'Bruke ulike argumenttyper med gode begrunnelser',
              'Bare bruke følelsesargumenter',
              'Gjenta det samme argumentet tre ganger',
              'Bare vise til egen mening',
            ],
          },
          {
            label: 'c',
            task: 'Et motargument som du svarer på',
            solution: 'Vis at du har tenkt på den andre siden.',
            multipleChoiceOptions: [
              'Ta opp et motargument og gi et godt tilsvar',
              'Ignorere alle motargumenter',
              'Angripe personer som er uenige',
              'Si at motstanderne tar feil uten begrunnelse',
            ],
          },
          {
            label: 'd',
            task: 'En avslutning med en klar appell',
            solution: 'Oppsummer og oppfordre leseren til handling eller ny tanke.',
            multipleChoiceOptions: [
              'Oppsummere og oppfordre leseren til handling',
              'Bare stoppe brått',
              'Introdusere et helt nytt tema',
              'Gjenta hele innledningen',
            ],
          },
        ],
        hints: [
          'Velg et tema du bryr deg om.',
          'Les innlegget høyt for å sjekke flyten.',
          'Bruk bindeord: for det første, dessuten, på den andre siden...',
        ],
        solution: 'Et godt leserinnlegg har tydelig struktur, sterke argumenter og engasjerer leseren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 2.3: Rettskriving og tegnsetting
// ============================================================================

export const CHAPTER_NORSK_8_2_3: TextbookChapter = {
  id: 'norsk-8-2-3',
  courseId: 'norsk-8',
  chapterNumber: '2.3',
  title: 'Rettskriving og tegnsetting',
  description: 'Lær de viktigste reglene for rettskriving og tegnsetting på bokmål.',
  estimatedMinutes: 40,
  competenceGoals: [
    'mestre rettskriving og tegnsetting på bokmål og nynorsk',
  ],
  content: [
    {
      id: 'norsk-8-2-3-intro',
      type: 'text',
      content: `## Hvorfor er rettskriving viktig?

God rettskriving og tegnsetting gjør teksten din lettere å lese og forstå. Det viser også at du tar kommunikasjonen på alvor.

Feil kan endre meningen i en setning:
- *"La oss spise, bestemor!"* (du inviterer bestemor)
- *"La oss spise bestemor!"* (du vil spise bestemor)`,
    },
    {
      id: 'norsk-8-2-3-text-2',
      type: 'text',
      content: `## Vanlige skrivefeil

### Og/å
**Og** er et bindeord som binder sammen ord eller setninger:
*"Jeg kjøpte brød og melk."*

**Å** er en infinitivsmerke som står foran verb:
*"Jeg liker å lese."*

**Tips:** Prøv å bytte ut med "og" med "samt" - fungerer det, er det riktig. Prøv å bytte ut "å" med "at" - fungerer det ikke, er det riktig med "å".

### Da/når
**Da** brukes om fortid (noe som skjedde én gang):
*"Da jeg var liten, bodde vi i Bergen."*

**Når** brukes om gjentakelse eller fremtid:
*"Når det regner, tar jeg paraply."*
*"Når kommer du?"*`,
    },
    {
      id: 'norsk-8-2-3-def-1',
      type: 'definition',
      title: 'Særskriving og samskriving',
      content: `**Særskriving** = Ord som skrives hver for seg: *"norsk ordbok"* (en ordbok som er norsk)

**Samskriving** = Ord som skrives i ett: *"norskordbok"* (en ordbok for norsk)

På norsk skriver vi sammensatte ord i ETT ord:
- ✓ *iskrem* (ikke *is krem*)
- ✓ *skoleelev* (ikke *skole elev*)
- ✓ *appelsinjuice* (ikke *appelsin juice*)`,
    },
    {
      id: 'norsk-8-2-3-warning-1',
      type: 'warning',
      title: 'Vanlige særskrivingsfeil',
      content: `Disse skal skrives i ETT ord:

❌ sommer ferie → ✓ sommerferie
❌ klasse rom → ✓ klasserom
❌ pizza restaurant → ✓ pizzarestaurant
❌ sjokolade kake → ✓ sjokoladekake
❌ tog stasjon → ✓ togstasjon`,
    },
    {
      id: 'norsk-8-2-3-text-3',
      type: 'text',
      content: `## Tegnsetting

### Punktum (.)
Avslutter en fortellende setning:
*"Jeg gikk hjem."*

### Komma (,)
Brukes til å:
- Skille ledd i oppramsinger: *"Hun kjøpte epler, bananer og pærer."*
- Sette av leddsetninger: *"Hvis det regner, blir vi hjemme."*
- Markere innskudd: *"Boka, som jeg lånte i går, var spennende."*
- Foran men, for, så: *"Jeg vil, men jeg kan ikke."*

### Kolon (:)
Innleder forklaringer, lister eller sitater:
*"Hun sa følgende: «Kom hit nå!»"*
*"Du trenger: mel, egg og melk."*`,
    },
    {
      id: 'norsk-8-2-3-text-4',
      type: 'text',
      content: `## Stor og liten forbokstav

### Stor forbokstav brukes ved:
- Setningsstart: *"Huset var rødt."*
- Egennavn: *"Per", "Oslo", "Hardangerfjorden"*
- Titler: *"Kong Harald"*

### Liten forbokstav brukes ved:
- Måneder og ukedager: *"mandag", "januar"*
- Språk og nasjonalitet: *"norsk", "fransk", "engelsk"*
- Etter kolon (med mindre det følger en hel setning): *"Vi trenger: mel, sukker og egg."*`,
    },
    {
      id: 'norsk-8-2-3-tip-1',
      type: 'tip',
      title: 'Slik unngår du feil',
      content: `1. **Les korrektur** - les teksten sakte og høyt
2. **Bruk stavekontroll** - men stol ikke blindt på den
3. **Sjekk usikre ord** i ordboka
4. **Ta pauser** - se på teksten med friske øyne
5. **Be noen andre lese** - de ser feil du ikke ser`,
    },
    {
      id: 'norsk-8-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Finne feil',
      problem: `Finn og rett feilene i denne setningen:

"Idag skal jeg og familien min til sommer hytta for og grille pølser og bade i sjøen."`,
      solution: `**Rettelser:**

1. "Idag" → "I dag" (to ord)
2. "sommer hytta" → "sommerhytta" (ett ord)
3. "for og grille" → "for å grille" (infinitivsmerke)

**Riktig setning:**
*"I dag skal jeg og familien min til sommerhytta for å grille pølser og bade i sjøen."*`,
    },

    // Oppgave 1: Og/å og samskriving
    {
      id: 'norsk-8-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din forståelse av og/å og samskriving.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken setning er korrekt?',
            solution: '"Å" er infinitivsmerke og står foran verb. "Og" er bindeord som binder sammen ord eller setninger.',
            multipleChoiceOptions: [
              'Jeg liker å lese bøker',
              'Jeg liker og lese bøker',
              'Jeg liker aa lese bøker',
              'Jeg liker att lese bøker',
            ],
          },
          {
            label: 'b',
            task: 'Hvordan skrives dette ordet riktig?',
            solution: 'Sammensatte ord på norsk skrives i ett ord: fotball, klassetur, sommerferie.',
            multipleChoiceOptions: [
              'fotball',
              'fot ball',
              'fot-ball',
              'Fot Ball',
            ],
          },
        ],
        solution: 'Og/å: "å" foran verb, "og" binder sammen. Sammensatte ord skrives i ett ord på norsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: Da/når og tegnsetting
    {
      id: 'norsk-8-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Test din forståelse av da/når og tegnsetting.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken setning bruker "da" og "når" riktig?',
            solution: '"Da" brukes om fortid (noe som skjedde én gang). "Når" brukes om gjentakelse, fremtid eller i spørsmål.',
            multipleChoiceOptions: [
              'Da han kom hjem, var huset tomt',
              'Da det regner, tar jeg paraply',
              'Når jeg var liten, bodde vi i Oslo',
              'Da kommer bussen?',
            ],
          },
          {
            label: 'b',
            task: 'Hvor skal det være komma i denne setningen: "Hvis du kommer tidlig kan vi gå på kino"',
            solution: 'Komma settes mellom leddsetningen ("Hvis du kommer tidlig") og hovedsetningen ("kan vi gå på kino").',
            multipleChoiceOptions: [
              'Hvis du kommer tidlig, kan vi gå på kino',
              'Hvis, du kommer tidlig kan vi gå på kino',
              'Hvis du kommer tidlig kan vi, gå på kino',
              'Det trengs ikke komma',
            ],
          },
        ],
        solution: '"Da" brukes om fortid, "når" om gjentakelse/fremtid. Komma settes mellom leddsetning og hovedsetning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Finn og rett feil
    {
      id: 'norsk-8-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Finn og rett alle feilene i disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Hun ville og se filmen, men hun hadde ikke tid."',
            solution: '"Hun ville å se filmen" - "å" er infinitivsmerke.',
            multipleChoiceOptions: [
              'Hun ville å se filmen, men hun hadde ikke tid',
              'Hun ville og se filmen, men hun hadde ikke tid',
              'Hun ville og sett filmen, men hun hadde ikke tid',
              'Setningen er korrekt',
            ],
          },
          {
            label: 'b',
            task: '"Når vi var på ferie i fjor besøkte vi mange museer."',
            solution: '"Da vi var på ferie" - "da" om fortid. Komma etter "fjor".',
            multipleChoiceOptions: [
              'Da vi var på ferie i fjor, besøkte vi mange museer',
              'Når vi var på ferie i fjor besøkte vi mange museer',
              'Da vi var på ferie i fjor besøkte vi mange museer',
              'Setningen er korrekt',
            ],
          },
          {
            label: 'c',
            task: '"Imorgen skal vi på ski tur i marka."',
            solution: '"I morgen" (to ord), "skitur" (ett ord).',
            multipleChoiceOptions: [
              'I morgen skal vi på skitur i marka',
              'Imorgen skal vi på skitur i marka',
              'I morgen skal vi på ski tur i marka',
              'Setningen er korrekt',
            ],
          },
          {
            label: 'd',
            task: '"Den norske hovedstaden heter oslo."',
            solution: '"Oslo" med stor O - det er et egennavn.',
            multipleChoiceOptions: [
              'Den norske hovedstaden heter Oslo',
              'Den norske hovedstaden heter oslo',
              'Den Norske hovedstaden heter Oslo',
              'Setningen er korrekt',
            ],
          },
        ],
        solution: 'a) å se, b) Da vi var...fjor, c) I morgen, skitur, d) Oslo',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4: Skriv om tekst
    {
      id: 'norsk-8-2-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv om denne teksten slik at alle feil er rettet.',
        subTasks: [
          {
            label: 'a',
            task: 'Se etter og/å-feil i teksten',
            solution: 'Bytt ut "og" med "å" foran verb.',
            multipleChoiceOptions: [
              'Å foran verb, og mellom ord/setninger',
              'Og foran verb, å mellom ord',
              'Det er ingen forskjell',
              'Bruk alltid og',
            ],
          },
          {
            label: 'b',
            task: 'Se etter særskrivingsfeil i teksten',
            solution: 'Sammensatte ord skal skrives i ett ord.',
            multipleChoiceOptions: [
              'Sammensatte ord skrives i ett ord',
              'Sammensatte ord skrives hver for seg',
              'Sammensatte ord skrives med bindestrek',
              'Det spiller ingen rolle',
            ],
          },
          {
            label: 'c',
            task: 'Se etter tegnsettingsfeil i teksten',
            solution: 'Komma mellom leddsetning og hovedsetning.',
            multipleChoiceOptions: [
              'Komma mellom leddsetning og hovedsetning',
              'Komma før hvert ord',
              'Ingen komma er nødvendig',
              'Komma bare på slutten',
            ],
          },
        ],
        hints: [
          'Se etter og/å-feil',
          'Se etter særskrivingsfeil',
          'Se etter tegnsettingsfeil',
        ],
        solution: 'Riktig versjon: "I sommer skal jeg og familien min til Spania. Vi gleder oss til å bade i havet og spise god mat. Når vi kommer hjem, skal jeg skrive en fortelling om reisen."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 3.1: Ordklasser
// ============================================================================

export const CHAPTER_NORSK_8_3_1: TextbookChapter = {
  id: 'norsk-8-3-1',
  courseId: 'norsk-8',
  chapterNumber: '3.1',
  title: 'Ordklasser',
  description: 'Lær å gjenkjenne og bruke de ulike ordklassene i norsk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive grammatiske strukturer i norsk',
  ],
  content: [
    {
      id: 'norsk-8-3-1-intro',
      type: 'text',
      content: `## Hva er ordklasser?

**Ordklasser** er kategorier vi deler ord inn i etter hvordan de fungerer i språket. På norsk har vi **ti ordklasser**.

Å kjenne ordklassene hjelper deg å:
- Forstå hvordan setninger er bygd opp
- Skrive mer variert og presist
- Analysere tekster
- Lære fremmedspråk lettere`,
    },
    {
      id: 'norsk-8-3-1-text-2',
      type: 'text',
      content: `## De ti ordklassene

Vi deler ordklassene i to grupper:

**Åpne ordklasser** (kan få nye ord):
1. Substantiv
2. Verb
3. Adjektiv
4. Adverb

**Lukkede ordklasser** (faste ord):
5. Pronomen
6. Determinativer
7. Preposisjoner
8. Konjunksjoner
9. Subjunksjoner
10. Interjeksjoner`,
    },
    {
      id: 'norsk-8-3-1-def-1',
      type: 'definition',
      title: 'Substantiv',
      content: `**Substantiv** er ord for ting, personer, steder, dyr eller abstrakte begreper.

**Kjennetegn:**
- Kan stå sammen med *en, ei, et*
- Kan bøyes i tall (entall/flertall)
- Kan bøyes i bestemthet (ubestemt/bestemt)

**Eksempler:**
- en **gutt** → gutten → gutter → guttene
- ei **jente** → jenta → jenter → jentene
- et **hus** → huset → hus → husene
- **kjærlighet**, **frihet**, **Norge**`,
    },
    {
      id: 'norsk-8-3-1-def-2',
      type: 'definition',
      title: 'Verb',
      content: `**Verb** er ord som uttrykker handlinger, tilstander eller hendelser.

**Kjennetegn:**
- Kan bøyes i tid (presens, preteritum)
- Kan stå med *å* foran (infinitiv)

**Bøyning:**
- Infinitiv: å **løpe**
- Presens: jeg **løper**
- Preteritum: jeg **løp**
- Perfektum: jeg har **løpt**

**Eksempler:** *spise, sove, tenke, være, ha, bli*`,
    },
    {
      id: 'norsk-8-3-1-def-3',
      type: 'definition',
      title: 'Adjektiv',
      content: `**Adjektiv** er ord som beskriver egenskaper ved substantiv.

**Kjennetegn:**
- Kan gradbøyes: *fin - finere - finest*
- Kan stå mellom determinativ og substantiv: *den **fine** bilen*
- Samsvarsbøyes med substantivet

**Samsvarsbøyning:**
- en **stor** gutt
- et **stort** hus
- de **store** husene

**Eksempler:** *rød, gammel, hyggelig, norsk, interessant*`,
    },
    {
      id: 'norsk-8-3-1-def-4',
      type: 'definition',
      title: 'Adverb',
      content: `**Adverb** beskriver verb, adjektiv eller andre adverb. De forteller om hvordan, når, hvor eller i hvilken grad.

**Typer:**
- **Måtesadverb:** *fort, sakte, høyt, pent*
- **Tidsadverb:** *nå, snart, alltid, ofte*
- **Stedsadverb:** *her, der, hjemme, ute*
- **Gradsadverb:** *veldig, ganske, svært, litt*

**Eksempel:**
*"Hun løper **fort**."* (beskriver verbet)
*"Han er **veldig** stor."* (beskriver adjektivet)`,
    },
    {
      id: 'norsk-8-3-1-text-3',
      type: 'text',
      content: `## Pronomen

**Pronomen** erstatter eller viser til substantiv.

### Personlige pronomen
| Person | Subjekt | Objekt |
|--------|---------|--------|
| 1. ent. | jeg | meg |
| 2. ent. | du | deg |
| 3. ent. | han/hun/det | ham/henne/det |
| 1. flt. | vi | oss |
| 2. flt. | dere | dere |
| 3. flt. | de | dem |

### Andre pronomen
- **Eiendomspronomen:** *min, din, hans, hennes, vår*
- **Refleksive pronomen:** *seg*
- **Spørrepronomen:** *hvem, hva, hvilken*
- **Ubestemte pronomen:** *noen, alle, ingen, man*`,
    },
    {
      id: 'norsk-8-3-1-text-4',
      type: 'text',
      content: `## Preposisjoner og konjunksjoner

### Preposisjoner
**Preposisjoner** viser forholdet mellom ord i en setning. De står foran substantiv eller pronomen.

**Vanlige preposisjoner:**
*i, på, til, fra, med, uten, under, over, bak, foran, mellom, ved*

*"Boka ligger **på** bordet."*
*"Hun gikk **til** skolen."*

### Konjunksjoner
**Konjunksjoner** binder sammen ord, fraser eller setninger av samme type.

**Sideordnende konjunksjoner:**
*og, eller, men, for, så*

*"Jeg vil ha kaffe **og** kake."*
*"Hun er trøtt, **men** hun jobber videre."*

### Subjunksjoner
**Subjunksjoner** innleder leddsetninger.

*at, om, hvis, når, da, fordi, selv om, mens, før, etter at*

*"Jeg vet **at** du kommer."*
*"**Hvis** det regner, blir vi hjemme."*`,
    },
    {
      id: 'norsk-8-3-1-tip-1',
      type: 'tip',
      title: 'Slik finner du ordklassen',
      content: `**Substantiv:** Kan du sette *en/ei/et* foran? → substantiv
**Verb:** Kan du sette *å* foran? → verb (infinitiv)
**Adjektiv:** Kan du si *veldig + ordet*? → adjektiv (*veldig fin*)
**Adverb:** Beskriver det hvordan/når/hvor? → adverb

Husk: Samme ord kan tilhøre ulike ordklasser avhengig av sammenhengen!
- *"Hun tar en **rask** avgjørelse."* (adjektiv)
- *"Hun løper **raskt**."* (adverb)`,
    },
    {
      id: 'norsk-8-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Finn ordklassene',
      problem: `Bestem ordklassen til hvert ord i denne setningen:

"Den store hunden løp raskt over veien."`,
      solution: `**Ordklasseanalyse:**

- **Den** = determinativ (bestemmerord)
- **store** = adjektiv (beskriver hunden)
- **hunden** = substantiv (ting/dyr)
- **løp** = verb (handling)
- **raskt** = adverb (beskriver hvordan)
- **over** = preposisjon (forhold)
- **veien** = substantiv (sted)`,
    },

    // Oppgave 1: Grunnleggende ordklasser
    {
      id: 'norsk-8-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din forståelse av de grunnleggende ordklassene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken ordklasse tilhører ordet "løpe"?',
            solution: '"Løpe" er et verb fordi det uttrykker en handling. Du kan sette "å" foran: "å løpe".',
            multipleChoiceOptions: [
              'Verb',
              'Substantiv',
              'Adjektiv',
              'Adverb',
            ],
          },
          {
            label: 'b',
            task: 'Hvilken ordklasse tilhører ordet "vakker"?',
            solution: '"Vakker" er et adjektiv fordi det beskriver en egenskap. Du kan si "veldig vakker".',
            multipleChoiceOptions: [
              'Adjektiv',
              'Substantiv',
              'Verb',
              'Adverb',
            ],
          },
          {
            label: 'c',
            task: 'I setningen "Hun gikk sakte hjem" - hvilken ordklasse er "sakte"?',
            solution: '"Sakte" er et adverb fordi det beskriver verbet "gikk" - det forteller hvordan hun gikk.',
            multipleChoiceOptions: [
              'Adverb',
              'Adjektiv',
              'Preposisjon',
              'Konjunksjon',
            ],
          },
          {
            label: 'd',
            task: 'Hva er forskjellen mellom "og" og "fordi"?',
            solution: '"Og" er en konjunksjon (binder sammen likeverdige ledd). "Fordi" er en subjunksjon (innleder leddsetninger).',
            multipleChoiceOptions: [
              '"Og" er konjunksjon, "fordi" er subjunksjon',
              'Ingen forskjell',
              '"Og" er subjunksjon, "fordi" er konjunksjon',
              'Begge er preposisjoner',
            ],
          },
        ],
        solution: 'De fire viktigste ordklassene er substantiv, verb, adjektiv og adverb.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: Finn ordklasser i setning
    {
      id: 'norsk-8-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn alle substantivene og verbene i denne setningen: "Gutten kastet ballen over gjerdet og løp hjem."',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke ord er substantiv i setningen?',
            solution: 'Substantiv: gutten, ballen, gjerdet.',
            multipleChoiceOptions: [
              'gutten, ballen, gjerdet',
              'kastet, løp',
              'over, og',
              'hjem',
            ],
          },
          {
            label: 'b',
            task: 'Hvilke ord er verb i setningen?',
            solution: 'Verb: kastet, løp.',
            multipleChoiceOptions: [
              'kastet, løp',
              'gutten, ballen',
              'over, og',
              'gjerdet, hjem',
            ],
          },
        ],
        hints: ['Substantiv kan ha en/ei/et foran', 'Verb uttrykker handlinger'],
        solution: 'Substantiv: gutten, ballen, gjerdet. Verb: kastet, løp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Avansert ordklasseanalyse
    {
      id: 'norsk-8-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Bestem ordklassen til hvert ord i setningen:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg spiser alltid frokost hjemme."',
            solution: 'Jeg (pronomen), spiser (verb), alltid (adverb), frokost (substantiv), hjemme (adverb).',
            multipleChoiceOptions: [
              'Jeg=pronomen, spiser=verb, alltid=adverb, frokost=substantiv, hjemme=adverb',
              'Jeg=substantiv, spiser=verb, alltid=adjektiv, frokost=substantiv, hjemme=verb',
              'Alle ordene er substantiv',
              'Alle ordene er verb',
            ],
          },
          {
            label: 'b',
            task: '"Den gamle katten sov på sofaen."',
            solution: 'Den (determinativ), gamle (adjektiv), katten (substantiv), sov (verb), på (preposisjon), sofaen (substantiv).',
            multipleChoiceOptions: [
              'Den=determinativ, gamle=adjektiv, katten=substantiv, sov=verb, på=preposisjon, sofaen=substantiv',
              'Alle ordene er substantiv',
              'Den=pronomen, gamle=verb, katten=adjektiv',
              'Ingen av svaralternativene',
            ],
          },
          {
            label: 'c',
            task: '"Fordi det regnet, tok vi bussen."',
            solution: 'Fordi (subjunksjon), det (pronomen), regnet (verb), tok (verb), vi (pronomen), bussen (substantiv).',
            multipleChoiceOptions: [
              'Fordi=subjunksjon, det=pronomen, regnet=verb, tok=verb, vi=pronomen, bussen=substantiv',
              'Fordi=konjunksjon, det=substantiv, regnet=substantiv',
              'Alle ordene er verb',
              'Fordi=preposisjon, det=adjektiv',
            ],
          },
        ],
        solution: 'Se løsningene for hver deloppgave.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 3.2: Setningsanalyse
// ============================================================================

export const CHAPTER_NORSK_8_3_2: TextbookChapter = {
  id: 'norsk-8-3-2',
  courseId: 'norsk-8',
  chapterNumber: '3.2',
  title: 'Setningsanalyse',
  description: 'Lær å analysere setninger ved å identifisere setningsledd.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive grammatiske strukturer i norsk',
  ],
  content: [
    {
      id: 'norsk-8-3-2-intro',
      type: 'text',
      content: `## Hva er setningsanalyse?

**Setningsanalyse** handler om å dele opp setninger i **setningsledd** - de ulike delene som bygger opp en setning.

Å kunne analysere setninger hjelper deg å:
- Skrive klarere og mer varierte setninger
- Unngå ufullstendige setninger
- Forstå grammatikk i andre språk`,
    },
    {
      id: 'norsk-8-3-2-def-1',
      type: 'definition',
      title: 'Subjekt og verbal',
      content: `De to viktigste setningsleddene er **subjekt** og **verbal**.

**Subjekt (S):** Den eller det som handler eller som setningen sier noe om.
- Spør: *Hvem eller hva + verbalet?*

**Verbal (V):** Uttrykker handlingen eller tilstanden.
- Verbet i setningen (kan være ett eller flere ord)

**Eksempel:**
*"**Gutten** spiser."*
- Hvem spiser? → **Gutten** (subjekt)
- Hva gjør gutten? → **spiser** (verbal)`,
    },
    {
      id: 'norsk-8-3-2-def-2',
      type: 'definition',
      title: 'Objekt',
      content: `**Objekt** er den eller det som handlingen rettes mot.

**Direkte objekt (DO):** Den/det som handlingen rammer direkte.
- Spør: *Hvem eller hva + verbal + subjekt?*

**Indirekte objekt (IO):** Den som mottar noe.
- Spør: *Til hvem?* eller *For hvem?*

**Eksempler:**
*"Gutten spiser **eplet**."* → eplet = direkte objekt
*"Hun ga **meg** en bok."* → meg = indirekte objekt, bok = direkte objekt`,
    },
    {
      id: 'norsk-8-3-2-text-2',
      type: 'text',
      content: `## Andre setningsledd

### Predikativ (P)
Forteller noe om subjektet eller objektet. Står etter verb som *være, bli, synes, hete*.

*"Hun **er** **lege**."* (lege = predikativ)
*"Maten smaker **godt**."* (godt = predikativ)

### Adverbial (A)
Forteller om tid, sted, måte eller årsak.

*"Hun løper **fort**."* (måte)
*"Vi reiser **i morgen**."* (tid)
*"De bor **i Oslo**."* (sted)
*"Han gråt **fordi han var lei seg**."* (årsak)`,
    },
    {
      id: 'norsk-8-3-2-tip-1',
      type: 'tip',
      title: 'Spørreord for å finne setningsledd',
      content: `**Subjekt:** Hvem/hva + verbal?
*"Katten sover."* → Hva sover? → Katten

**Verbal:** Hva gjør/er/har subjektet?
*"Katten sover."* → Hva gjør katten? → sover

**Direkte objekt:** Hvem/hva + verbal + subjekt?
*"Jenta leser boka."* → Hva leser jenta? → boka

**Adverbial:** Når? Hvor? Hvordan? Hvorfor?
*"Han løp fort."* → Hvordan løp han? → fort`,
    },
    {
      id: 'norsk-8-3-2-text-3',
      type: 'text',
      content: `## Leddsetninger

En **leddsetning** er en setning som fungerer som et ledd i en annen setning. Den kan ikke stå alene.

**Kjennetegn:**
- Innledes ofte av subjunksjon: *at, som, da, når, hvis, fordi, selv om*
- Har egen subjekt-verbal-struktur

**Eksempler:**
*"Jeg vet **at hun kommer**."* (at-setning)
*"Mannen **som bor der** er lege."* (som-setning)
*"**Hvis det regner**, blir vi hjemme."* (hvis-setning)

### Hovedsetning vs. leddsetning
- **Hovedsetning:** Kan stå alene. *"Hun kommer."*
- **Leddsetning:** Kan ikke stå alene. *"...at hun kommer"*`,
    },
    {
      id: 'norsk-8-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Full setningsanalyse',
      problem: `Analyser denne setningen:
"Den lille gutten ga bestemor en tegning i går."`,
      solution: `**Setningsanalyse:**

| Ledd | Ord | Spørsmål |
|------|-----|----------|
| Subjekt (S) | Den lille gutten | Hvem ga? |
| Verbal (V) | ga | Hva gjorde gutten? |
| Indirekte objekt (IO) | bestemor | Til hvem ga han? |
| Direkte objekt (DO) | en tegning | Hva ga han? |
| Adverbial (A) | i går | Når ga han? |

**Setningsskjema:**
S + V + IO + DO + A`,
    },

    // Oppgave 1: Subjekt og verbal
    {
      id: 'norsk-8-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din forståelse av subjekt og verbal.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er subjektet i setningen "Hunden bjeffer høyt"?',
            solution: 'Spør: Hvem/hva bjeffer? - Hunden. Subjektet er "Hunden".',
            multipleChoiceOptions: [
              'Hunden',
              'bjeffer',
              'høyt',
              'Det er ikke noe subjekt',
            ],
          },
          {
            label: 'b',
            task: 'Hva er verbalet i setningen "Maria spiste lunsj på skolen"?',
            solution: 'Verbalet er verbet i setningen - her "spiste" (handlingen Maria utfører).',
            multipleChoiceOptions: [
              'spiste',
              'Maria',
              'lunsj',
              'på skolen',
            ],
          },
        ],
        solution: 'Subjekt er den som handler. Verbal er handlingen eller tilstanden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: Objekt og leddsetninger
    {
      id: 'norsk-8-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Test din forståelse av objekt og leddsetninger.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er det direkte objektet i "Læreren ga elevene lekser"?',
            solution: 'Hva ga læreren? - lekser. "Elevene" er indirekte objekt (til hvem ga læreren leksene?).',
            multipleChoiceOptions: [
              'lekser',
              'Læreren',
              'elevene',
              'ga',
            ],
          },
          {
            label: 'b',
            task: 'Hvilken av disse er en leddsetning?',
            solution: '"Da vi kom hjem" er en leddsetning fordi den ikke kan stå alene og innledes av subjunksjonen "da".',
            multipleChoiceOptions: [
              'Da vi kom hjem',
              'Solen skinner',
              'Vi gikk på tur',
              'Fint vær i dag!',
            ],
          },
        ],
        solution: 'Direkte objekt svarer på hva/hvem. Leddsetninger kan ikke stå alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Finn setningsledd
    {
      id: 'norsk-8-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Finn subjekt (S), verbal (V) og eventuelt objekt (O) i disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Katten fanget en mus."',
            solution: 'S: Katten, V: fanget, DO: en mus',
            multipleChoiceOptions: [
              'S: Katten, V: fanget, DO: en mus',
              'S: en mus, V: fanget, DO: Katten',
              'S: fanget, V: Katten',
              'Ingen av alternativene',
            ],
          },
          {
            label: 'b',
            task: '"Alle elevene jobbet flittig."',
            solution: 'S: Alle elevene, V: jobbet, A: flittig',
            multipleChoiceOptions: [
              'S: Alle elevene, V: jobbet, A: flittig',
              'S: flittig, V: jobbet',
              'S: jobbet, V: elevene',
              'Ingen av alternativene',
            ],
          },
          {
            label: 'c',
            task: '"Mor leste barna en historie."',
            solution: 'S: Mor, V: leste, IO: barna, DO: en historie',
            multipleChoiceOptions: [
              'S: Mor, V: leste, IO: barna, DO: en historie',
              'S: barna, V: leste, DO: Mor',
              'S: en historie, V: leste',
              'Ingen av alternativene',
            ],
          },
        ],
        solution: 'Se løsningen for hver deloppgave.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4: Full setningsanalyse
    {
      id: 'norsk-8-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjør en full setningsanalyse av denne setningen: "I går kveld viste bestefar meg de gamle bildene sine på loftet."',
        subTasks: [
          {
            label: 'a',
            task: 'Finn verbalet i setningen',
            solution: 'Verbalet er "viste".',
            multipleChoiceOptions: [
              'viste',
              'bestefar',
              'meg',
              'i går kveld',
            ],
          },
          {
            label: 'b',
            task: 'Finn subjektet i setningen',
            solution: 'Subjektet er "bestefar" (hvem viste?).',
            multipleChoiceOptions: [
              'bestefar',
              'meg',
              'de gamle bildene',
              'på loftet',
            ],
          },
          {
            label: 'c',
            task: 'Finn direkte og indirekte objekt',
            solution: 'IO: meg, DO: de gamle bildene sine.',
            multipleChoiceOptions: [
              'IO: meg, DO: de gamle bildene sine',
              'IO: de gamle bildene, DO: meg',
              'Bare DO: meg',
              'Bare IO: bildene',
            ],
          },
          {
            label: 'd',
            task: 'Finn adverbialene i setningen',
            solution: 'Adverbialer: "I går kveld" (tid) og "på loftet" (sted).',
            multipleChoiceOptions: [
              'I går kveld og på loftet',
              'Bare i går kveld',
              'Bare på loftet',
              'Det er ingen adverbialer',
            ],
          },
        ],
        hints: [
          'Start med å finne verbalet',
          'Finn deretter subjektet (hvem viste?)',
          'Finn direkte og indirekte objekt',
          'Resten er adverbialer',
        ],
        solution: 'A: I går kveld, V: viste, S: bestefar, IO: meg, DO: de gamle bildene sine, A: på loftet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 3.3: Nynorsk grunnleggende
// ============================================================================

export const CHAPTER_NORSK_8_3_3: TextbookChapter = {
  id: 'norsk-8-3-3',
  courseId: 'norsk-8',
  chapterNumber: '3.3',
  title: 'Nynorsk grunnleggende',
  description: 'Lær de viktigste forskjellene mellom bokmål og nynorsk, og grunnleggende nynorsk rettskriving.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive tekster med rett ortografi og tegnsetting på hovedmål og sidemål',
  ],
  content: [
    {
      id: 'norsk-8-3-3-intro',
      type: 'text',
      content: `## Nynorsk og bokmål

Norge har to offisielle skriftspråk: **bokmål** og **nynorsk**. Begge er likestilte og brukes i offentlig sammenheng, skole og media.

**Historisk bakgrunn:**
- Bokmål utviklet seg fra dansk skriftspråk
- Nynorsk ble skapt av Ivar Aasen på 1800-tallet, basert på norske dialekter

Alle elever skal lære begge målformer, og du har **hovedmål** og **sidemål**.`,
    },
    {
      id: 'norsk-8-3-3-text-2',
      type: 'text',
      content: `## Hovedforskjeller bokmål → nynorsk

### 1. Infinitiv
Bokmål: å **lese**, å **skrive**, å **være**
Nynorsk: å **lese/lesa**, å **skrive/skriva**, å **vere/vera**

De fleste verb på nynorsk ender på **-e** eller **-a** i infinitiv.

### 2. Preteritum av svake verb
Bokmål: jeg **kastet**, jeg **likte**
Nynorsk: eg **kasta**, eg **likte**

Mange verb får **-a** i stedet for **-et** på nynorsk.

### 3. Personlige pronomen
| Bokmål | Nynorsk |
|--------|---------|
| jeg | eg |
| vi | vi |
| de | dei |
| hun | ho |
| henne | henne |`,
    },
    {
      id: 'norsk-8-3-3-def-1',
      type: 'definition',
      title: 'Viktige ordforskjeller',
      content: `Her er noen vanlige ord som er forskjellige:

| Bokmål | Nynorsk |
|--------|---------|
| jeg | eg |
| ikke | ikkje |
| hva | kva |
| hvem | kven |
| hvorfor | kvifor |
| hvordan | korleis |
| også | òg / også |
| nå | no |
| da | då |
| bare | berre |
| noen | nokon |
| mye | mykje |
| mange | mange |`,
    },
    {
      id: 'norsk-8-3-3-text-3',
      type: 'text',
      content: `## Substantiv på nynorsk

### Hankjønn og hunkjønn
Nynorsk skiller tydeligere mellom hankjønn og hunkjønn enn bokmål.

**Hankjønn:** en **gut** – guten – gutar – gutane
**Hunkjønn:** ei **jente** – jenta – jenter – jentene
**Intetkjønn:** eit **hus** – huset – hus – husa

Merk: Flertallsendelsen **-ane** (ikke -ene) i hankjønn!

### Vanlige substantiv
| Bokmål | Nynorsk |
|--------|---------|
| en gutt | ein gut |
| en bok | ei bok |
| et barn | eit barn |
| bøkene | bøkene |
| guttene | gutane |`,
    },
    {
      id: 'norsk-8-3-3-text-4',
      type: 'text',
      content: `## Verb på nynorsk

### A-infinitiv og e-infinitiv
På nynorsk kan de fleste verb ende på enten **-a** eller **-e** i infinitiv:
- å **lesa** / å **lese**
- å **skriva** / å **skrive**

Men noen verb har bare **-e**: å *vere*, å *seie*, å *gjere*

### Presens
Mange verb får **-ar** i presens på nynorsk:
- Bokmål: jeg **kaster**
- Nynorsk: eg **kastar**

### Bøyningsmønster
| Form | Bokmål | Nynorsk |
|------|--------|---------|
| Infinitiv | å kaste | å kaste/kasta |
| Presens | kaster | kastar |
| Preteritum | kastet | kasta |
| Perfektum | har kastet | har kasta |`,
    },
    {
      id: 'norsk-8-3-3-tip-1',
      type: 'tip',
      title: 'Slik lærer du nynorsk lettere',
      content: `1. **Les nynorsk tekst** - aviser, bøker, NRK Nynorsk
2. **Øv på de vanligste ordene** først: eg, ikkje, kva, nokon, mykje
3. **Lær substantivbøyningen** - spesielt hankjønnsflertall (-ane)
4. **Bruk ordliste/ordbok** når du er usikker
5. **Skriv litt nynorsk hver dag** - bare noen setninger
6. **Lytt til dialekter** - nynorsk ligger nærmere mange dialekter`,
    },
    {
      id: 'norsk-8-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Oversett til nynorsk',
      problem: `Oversett denne teksten til nynorsk:

"Jeg vet ikke hva jeg skal gjøre. Nå må jeg bare vente på at de kommer."`,
      solution: `**Nynorsk versjon:**

"Eg veit ikkje kva eg skal gjere. No må eg berre vente på at dei kjem."

**Endringer:**
- jeg → eg
- vet → veit
- ikke → ikkje
- hva → kva
- gjøre → gjere
- Nå → No
- bare → berre
- de → dei
- kommer → kjem`,
    },

    // Oppgave 1: Grunnleggende nynorske ord
    {
      id: 'norsk-8-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din kunnskap om grunnleggende nynorske ord.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skriver du "jeg" på nynorsk?',
            solution: 'På nynorsk skriver vi "eg" i stedet for "jeg".',
            multipleChoiceOptions: [
              'eg',
              'jag',
              'jeg',
              'ig',
            ],
          },
          {
            label: 'b',
            task: 'Hvilket ord er riktig nynorsk for "ikke"?',
            solution: 'På nynorsk skriver vi "ikkje" i stedet for "ikke".',
            multipleChoiceOptions: [
              'ikkje',
              'ikke',
              'inte',
              'ikje',
            ],
          },
          {
            label: 'c',
            task: 'Hvordan bøyes "en gutt" i bestemt flertall på nynorsk?',
            solution: 'På nynorsk får hankjønnsord endelsen -ane i bestemt flertall: gutane.',
            multipleChoiceOptions: [
              'gutane',
              'guttene',
              'guterne',
              'guttarna',
            ],
          },
          {
            label: 'd',
            task: 'Hvilken setning er korrekt nynorsk?',
            solution: 'Riktig nynorsk: "Eg veit ikkje kva han heiter." Alle ordene må være på nynorsk.',
            multipleChoiceOptions: [
              'Eg veit ikkje kva han heiter',
              'Jeg vet ikke hva han heter',
              'Eg vet ikke kva han heter',
              'Jeg veit ikkje hva han heiter',
            ],
          },
        ],
        solution: 'Nynorsk har egne ord for vanlige bokmålsord som jeg, ikke, hva osv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: Oversett til nynorsk
    {
      id: 'norsk-8-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Oversett disse setningene til nynorsk:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg liker å lese bøker."',
            solution: '"Eg likar å lese bøker." eller "Eg likar å lesa bøker."',
            multipleChoiceOptions: [
              'Eg likar å lese bøker',
              'Jeg liker å lese bøker',
              'Eg liker å lese bøker',
              'Jeg likar å lesa bøker',
            ],
          },
          {
            label: 'b',
            task: '"Hva heter du?"',
            solution: '"Kva heiter du?"',
            multipleChoiceOptions: [
              'Kva heiter du?',
              'Hva heter du?',
              'Kva heter du?',
              'Hva heiter du?',
            ],
          },
          {
            label: 'c',
            task: '"De kommer ikke i dag."',
            solution: '"Dei kjem ikkje i dag."',
            multipleChoiceOptions: [
              'Dei kjem ikkje i dag',
              'De kommer ikke i dag',
              'Dei kommer ikkje i dag',
              'De kjem ikke i dag',
            ],
          },
        ],
        hints: ['Husk å endre pronomen (jeg → eg)', 'Husk spørreord (hva → kva)'],
        solution: 'Se løsningene for hver deloppgave.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Skriv tekst på nynorsk
    {
      id: 'norsk-8-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kort tekst (50-80 ord) på nynorsk om hva du gjorde i helgen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke pronomen må du endre fra bokmål til nynorsk?',
            solution: 'jeg → eg, de → dei, hun → ho',
            multipleChoiceOptions: [
              'jeg → eg, de → dei, hun → ho',
              'jeg → jag, de → di',
              'Pronomenene er like på bokmål og nynorsk',
              'Bare "jeg" endres til "eg"',
            ],
          },
          {
            label: 'b',
            task: 'Hvordan bøyes verb i preteritum på nynorsk?',
            solution: 'Mange verb får -a i preteritum: gjekk, såg, åt.',
            multipleChoiceOptions: [
              'Mange verb får -a i preteritum',
              'Verb bøyes likt som på bokmål',
              'Verb får alltid -te i preteritum',
              'Verb bøyes ikke i preteritum',
            ],
          },
          {
            label: 'c',
            task: 'Hva er viktig å huske når du skriver nynorsk?',
            solution: 'Alle ord må være på nynorsk - ikke bland bokmål og nynorsk.',
            multipleChoiceOptions: [
              'Alle ord må være på nynorsk',
              'Du kan blande bokmål og nynorsk',
              'Bare verb må være på nynorsk',
              'Bare substantiv må være på nynorsk',
            ],
          },
        ],
        hints: [
          'Bruk "eg" for "jeg"',
          'Bruk "ikkje" for "ikke"',
          'Verb i preteritum får ofte -a: gjekk, såg, åt',
          'Sjekk ordliste hvis du er usikker',
        ],
        solution: 'Eksempel: "I helga var eg heime. På laurdag såg eg ein film saman med familien min. Filmen var veldig spennande. På sundag gjekk eg ein tur i skogen. Vêret var fint, og eg likte å vere ute. Etterpå åt vi middag saman."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 4.1: Presentasjonsteknikk
// ============================================================================

export const CHAPTER_NORSK_8_4_1: TextbookChapter = {
  id: 'norsk-8-4-1',
  courseId: 'norsk-8',
  chapterNumber: '4.1',
  title: 'Presentasjonsteknikk',
  description: 'Lær å holde gode muntlige presentasjoner med struktur, kroppsspråk og engasjement.',
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere fagstoff muntlig med og uten digitale ressurser',
  ],
  content: [
    {
      id: 'norsk-8-4-1-intro',
      type: 'text',
      content: `## Muntlig presentasjon

En **muntlig presentasjon** er en planlagt fremføring der du formidler et budskap til et publikum. Gode presentasjoner krever forberedelse, struktur og øvelse.

Muntlige ferdigheter er viktige fordi du:
- Må presentere i skole og arbeidsliv
- Lærer å formidle kunnskap til andre
- Utvikler selvtillit og kommunikasjonsevner`,
    },
    {
      id: 'norsk-8-4-1-text-2',
      type: 'text',
      content: `## Struktur i en presentasjon

### 1. Innledning (ca. 10%)
- **Fang oppmerksomheten** med et spørsmål, en historie eller et overraskende faktum
- **Presenter emnet** - hva skal du snakke om?
- **Fortell strukturen** - gi publikum et veikart

### 2. Hoveddel (ca. 80%)
- Del inn i **2-4 hovedpunkter**
- Bruk **eksempler og illustrasjoner**
- Ha **overganger** mellom punktene
- Hold deg til saken

### 3. Avslutning (ca. 10%)
- **Oppsummer** hovedpoengene
- **Konkluder** med en tydelig slutt
- Eventuelt: **Åpne for spørsmål**`,
    },
    {
      id: 'norsk-8-4-1-tip-1',
      type: 'tip',
      title: 'Gode åpninger',
      content: `Start gjerne med én av disse teknikkene:

**Spørsmål:** "Visste dere at...?" eller "Har dere noen gang lurt på...?"
**Overraskende faktum:** "Hvert år forsvinner et område på størrelse med Norge..."
**Personlig historie:** "Da jeg var 10 år, opplevde jeg noe som..."
**Sitat:** "Som Nelson Mandela sa: 'Utdanning er det mektigste våpenet...'"

Unngå: "Jeg skal snakke om..." eller "Ehm, ja, hei..."`,
    },
    {
      id: 'norsk-8-4-1-def-1',
      type: 'definition',
      title: 'Retoriske virkemidler i tale',
      content: `**Etos** - Vis at du er troverdig og kan stoffet
- Forbered deg godt
- Vis at du bryr deg om emnet
- Vær ærlig om usikkerhet

**Patos** - Engasjer følelsene til publikum
- Bruk historier og eksempler
- Vis engasjement
- Bruk variert stemmebruk

**Logos** - Bruk logikk og fakta
- Ha gode argumenter
- Bruk tall og statistikk
- Forklar sammenhenger`,
    },
    {
      id: 'norsk-8-4-1-text-3',
      type: 'text',
      content: `## Kroppsspråk og stemmebruk

### Kroppsspråk
- **Øyekontakt:** Se på publikum, ikke på notatene eller veggen
- **Holdning:** Stå rett, men avslappet
- **Hender:** Bruk naturlige gester, unngå å stå med hendene i lommen
- **Bevegelse:** Bruk rommet, men ikke rastløst

### Stemmebruk
- **Volum:** Snakk høyt nok til at alle hører
- **Tempo:** Ikke for fort - ta pauser
- **Variasjon:** Varier toneleie for å skape interesse
- **Tydelighet:** Snakk tydelig og ikke muml`,
    },
    {
      id: 'norsk-8-4-1-warning-1',
      type: 'warning',
      title: 'Vanlige feil å unngå',
      content: `❌ **Lese fra manus** - Bruk stikkord, ikke hele setninger
❌ **For mye tekst på slides** - Maks 6 punkter per slide
❌ **Snakke for fort** - Pust og ta pauser
❌ **Unngå øyekontakt** - Se på publikum, ikke gulvet
❌ **Si "ehm" og "liksom"** - Øv på å ta pauser i stedet
❌ **Ingen avslutning** - Avslutt tydelig, ikke bare stopp`,
    },
    {
      id: 'norsk-8-4-1-text-4',
      type: 'text',
      content: `## Bruk av digitale hjelpemidler

### PowerPoint/Google Slides
- **Enkelt design** - Ikke for mange farger eller fonter
- **Store bokstaver** - Minimum 24 pkt
- **Bilder over tekst** - Visualiser heller enn å skrive
- **Maks 6 punkter per slide**

### Tips for slides
- Slides skal **støtte** det du sier, ikke erstatte det
- Ikke les fra slidene - de er for publikum
- Bruk **bilder, grafer og illustrasjoner**
- Ha en **tittelslide** og en **avslutningsslide**`,
    },
    {
      id: 'norsk-8-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Disposisjon for presentasjon',
      problem: `Du skal holde en 5-minutters presentasjon om "Hvordan redusere plast i hverdagen". Lag en disposisjon.`,
      solution: `**Disposisjon:**

**1. Innledning (30 sek)**
- Åpning: "Visste dere at vi spiser et kredittkort med plast hver uke?"
- Tema: Hvordan kan vi redusere plast i hverdagen?
- Struktur: Tre enkle tips

**2. Hoveddel (4 min)**
- *Punkt 1:* Bruk gjenbrukbare poser og flasker
  - Eksempel: En familie kan spare 500 plastposer i året
- *Punkt 2:* Velg produkter med mindre emballasje
  - Eksempel: Kjøp frukt og grønt uten plastinnpakning
- *Punkt 3:* Resirkuler riktig
  - Eksempel: Vis bilde av sorteringssystemet

**3. Avslutning (30 sek)**
- Oppsummering: Tre enkle grep som gjør stor forskjell
- Appell: "Det handler om små valg hver dag"
- Spørsmål til publikum`,
    },

    // Oppgave 1: Grunnleggende presentasjonsstruktur
    {
      id: 'norsk-8-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din forståelse av presentasjonsstruktur og teknikker.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor stor del av presentasjonen bør innledningen være?',
            solution: 'Innledningen bør være ca. 10% av presentasjonen. Hoveddelen tar ca. 80%, og avslutningen ca. 10%.',
            multipleChoiceOptions: [
              'Ca. 10%',
              'Ca. 50%',
              'Ca. 30%',
              'Ca. 5%',
            ],
          },
          {
            label: 'b',
            task: 'Hva er en god måte å åpne en presentasjon på?',
            solution: 'En god åpning fanger publikums oppmerksomhet med et spørsmål, overraskende faktum, historie eller sitat.',
            multipleChoiceOptions: [
              'Et overraskende faktum eller spørsmål',
              'Ehm, ja, jeg skal snakke om...',
              'Å lese opp hele innholdsfortegnelsen',
              'Å unnskylde seg for at man er nervøs',
            ],
          },
          {
            label: 'c',
            task: 'Hva menes med "patos" i en presentasjon?',
            solution: 'Patos handler om å appellere til publikums følelser - gjennom historier, eksempler og engasjement.',
            multipleChoiceOptions: [
              'Å engasjere publikums følelser',
              'Å vise at du kan stoffet',
              'Å bruke fakta og statistikk',
              'Å snakke tydelig',
            ],
          },
          {
            label: 'd',
            task: 'Hvor mange hovedpunkter bør du ha i hoveddelen av en presentasjon?',
            solution: '2-4 hovedpunkter er ideelt. For mange punkter gjør det vanskelig for publikum å huske.',
            multipleChoiceOptions: [
              '2-4 hovedpunkter',
              '1 hovedpunkt',
              '7-10 hovedpunkter',
              'Så mange som mulig',
            ],
          },
        ],
        solution: 'God presentasjonsstruktur: 10% innledning, 80% hoveddel, 10% avslutning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: Lag åpninger
    {
      id: 'norsk-8-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag tre forskjellige åpninger til en presentasjon om "Min favoritthobbby":',
        subTasks: [
          {
            label: 'a',
            task: 'En åpning med et spørsmål',
            solution: 'Eksempel: "Har dere noen gang følt at tiden bare flyr? Det gjør jeg hver gang jeg..."',
            multipleChoiceOptions: [
              'Stille et engasjerende spørsmål til publikum',
              'Lese fra manus',
              'Si at du er nervøs',
              'Gå rett på saken uten innledning',
            ],
          },
          {
            label: 'b',
            task: 'En åpning med et overraskende faktum',
            solution: 'Eksempel: "Visste dere at [hobby] kan forbedre hukommelsen med 30%?"',
            multipleChoiceOptions: [
              'Dele et overraskende faktum som fanger oppmerksomheten',
              'Si noe alle allerede vet',
              'Unnskylde deg for manglende forberedelse',
              'Begynne med å lese opp disposisjonen',
            ],
          },
          {
            label: 'c',
            task: 'En åpning med en personlig historie',
            solution: 'Eksempel: "Da jeg var 8 år, oppdaget jeg noe som skulle forandre fritiden min for alltid..."',
            multipleChoiceOptions: [
              'Fortelle en kort, relevant personlig historie',
              'Fortelle en lang, usammenhengende historie',
              'Snakke om noe helt annet først',
              'Begynne med konklusjonen',
            ],
          },
        ],
        solution: 'Gode åpninger er engasjerende og relevante for emnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Lag komplett disposisjon
    {
      id: 'norsk-8-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg et emne du kan mye om, og lag en komplett disposisjon for en 5-minutters presentasjon. Inkluder:',
        subTasks: [
          {
            label: 'a',
            task: 'Innledning med en god åpning',
            solution: 'En fengende åpning som fanger oppmerksomheten.',
            multipleChoiceOptions: [
              'En fengende åpning som fanger oppmerksomheten',
              'En lang introduksjon av deg selv',
              'Å lese opp hele disposisjonen',
              'Å unnskylde deg for nervøsitet',
            ],
          },
          {
            label: 'b',
            task: 'Tre hovedpunkter med eksempler',
            solution: 'Tydelige punkter med konkrete eksempler eller illustrasjoner.',
            multipleChoiceOptions: [
              'Tydelige punkter med konkrete eksempler',
              'Ti vage punkter uten eksempler',
              'Bare ett langt hovedpunkt',
              'Ingen struktur, bare snakke fritt',
            ],
          },
          {
            label: 'c',
            task: 'Avslutning med oppsummering',
            solution: 'Kort oppsummering og en tydelig avslutning.',
            multipleChoiceOptions: [
              'Kort oppsummering og tydelig avslutning',
              'Bare stoppe brått',
              'Introdusere nye temaer',
              'Unnskylde seg for presentasjonen',
            ],
          },
        ],
        hints: ['Velg et emne du brenner for', 'Tenk på hva publikum vet fra før', 'Bruk konkrete eksempler'],
        solution: 'En god disposisjon har tydelig struktur og viser hva du skal si i hver del.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 4.2: Diskusjon og debatt
// ============================================================================

export const CHAPTER_NORSK_8_4_2: TextbookChapter = {
  id: 'norsk-8-4-2',
  courseId: 'norsk-8',
  chapterNumber: '4.2',
  title: 'Diskusjon og debatt',
  description: 'Lær å delta i diskusjoner og debatter med gode argumenter og respekt for andres meninger.',
  estimatedMinutes: 40,
  competenceGoals: [
    'delta i diskusjoner med begrunnede meninger og saklig argumentasjon',
  ],
  content: [
    {
      id: 'norsk-8-4-2-intro',
      type: 'text',
      content: `## Hva er diskusjon og debatt?

En **diskusjon** er en samtale der flere personer utveksler synspunkter og ideer om et emne. Målet er ofte å forstå saken bedre sammen.

En **debatt** er mer formell og konkurransepreget. To eller flere sider argumenterer for ulike standpunkter, ofte foran et publikum.

Felles for begge er at du må kunne:
- Lytte til andre
- Argumentere saklig
- Respektere uenighet`,
    },
    {
      id: 'norsk-8-4-2-def-1',
      type: 'definition',
      title: 'Diskusjon vs. debatt',
      content: `**Diskusjon:**
- Mål: Utforske et emne sammen
- Tone: Samarbeidende
- Resultat: Felles forståelse eller nye perspektiver

**Debatt:**
- Mål: Overbevise publikum
- Tone: Konkurransepreget
- Resultat: En "vinner" eller avstemning`,
    },
    {
      id: 'norsk-8-4-2-text-2',
      type: 'text',
      content: `## Regler for god diskusjon

### 1. Lytt aktivt
- Hør hva andre sier før du svarer
- Ikke avbryt
- Vis at du lytter (nikk, øyekontakt)

### 2. Vær saklig
- Hold deg til temaet
- Angrip argumentet, ikke personen
- Bruk fakta og eksempler

### 3. Respekter uenighet
- Det er lov å være uenig
- Prøv å forstå den andres perspektiv
- Si "Jeg forstår hva du mener, men..."

### 4. Bidra konstruktivt
- Kom med egne synspunkter
- Still oppklarende spørsmål
- Bygg videre på andres ideer`,
    },
    {
      id: 'norsk-8-4-2-text-3',
      type: 'text',
      content: `## Argumentasjonsteknikker

### Påstand → Begrunnelse → Eksempel
1. **Påstand:** Si hva du mener
2. **Begrunnelse:** Forklar hvorfor
3. **Eksempel:** Gi et konkret eksempel

*"Skolemat bør være gratis (påstand), fordi det gir alle elever like muligheter til å lære (begrunnelse). I Finland, der de har gratis skolemat, presterer elevene bedre på skolen (eksempel)."*

### Imøtegå motargumenter
Vis at du har forstått den andre siden:

*"Det stemmer at gratis skolemat koster penger. Men forskning viser at investeringen lønner seg gjennom bedre læring og helse."*`,
    },
    {
      id: 'norsk-8-4-2-tip-1',
      type: 'tip',
      title: 'Nyttige fraser i diskusjoner',
      content: `**For å uttrykke egen mening:**
- "Jeg mener at..."
- "Etter min oppfatning..."
- "Slik jeg ser det..."

**For å være uenig høflig:**
- "Jeg forstår hva du mener, men..."
- "Det er et godt poeng, samtidig tror jeg..."
- "Jeg ser det litt annerledes..."

**For å bygge videre:**
- "I tillegg til det du sa, vil jeg legge til..."
- "Det får meg til å tenke på..."
- "Kan du si mer om...?"`,
    },
    {
      id: 'norsk-8-4-2-warning-1',
      type: 'warning',
      title: 'Feil som ødelegger diskusjoner',
      content: `❌ **Personangrep:** "Du er dum som mener det"
❌ **Avbryte:** Ikke avbryt andre midt i setningen
❌ **Stråmann:** Ikke forvreng hva den andre sa
❌ **Heve stemmen:** Bruk innestemme
❌ **Ignorere fakta:** Ikke avvis dokumentasjon
❌ **Gå av tema:** Hold deg til saken`,
    },
    {
      id: 'norsk-8-4-2-text-4',
      type: 'text',
      content: `## Debattens struktur

### Før debatten
1. Kjenn standpunktet ditt godt
2. Forbered 2-3 sterke argumenter
3. Tenk på mulige motargumenter
4. Ha fakta og eksempler klare

### Under debatten
1. **Åpningsinnlegg:** Presenter standpunktet og hovedargumentene
2. **Replikkrunder:** Svar på motdebattantens argumenter
3. **Sluttinnlegg:** Oppsummer hvorfor ditt standpunkt er best

### Tips
- Snakk tydelig og med selvtillit
- Lytt nøye til motparten
- Noter deg punkter du vil svare på
- Hold deg til tiden`,
    },
    {
      id: 'norsk-8-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Saklig uenighet',
      problem: `Person A sier: "Mobiltelefoner bør forbys i skolen fordi de forstyrrer læringen."

Hvordan kan Person B være uenig på en saklig måte?`,
      solution: `**Saklig respons fra Person B:**

"Jeg forstår bekymringen for forstyrrelser, men jeg mener at et totalforbud ikke er løsningen. For det første kan mobilen brukes som et læringsverktøy - for eksempel til å søke informasjon eller bruke læringsapper. For det andre lærer ikke elevene å regulere egen mobilbruk hvis den alltid er forbudt. I stedet foreslår jeg tydelige regler for når mobilen kan brukes."

**Hvorfor dette fungerer:**
- Anerkjenner den andres poeng
- Gir konkrete motargumenter
- Kommer med et alternativt forslag
- Holder en respektfull tone`,
    },

    // Oppgave 1: Grunnleggende diskusjonsteknikk
    {
      id: 'norsk-8-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din forståelse av diskusjon og debatt.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen mellom en diskusjon og en debatt?',
            solution: 'I en diskusjon utforsker man et emne sammen, mens i en debatt konkurrerer man om å overbevise publikum.',
            multipleChoiceOptions: [
              'Diskusjon er samarbeidende, debatt er konkurransepreget',
              'Det er ingen forskjell',
              'Diskusjon er muntlig, debatt er skriftlig',
              'Diskusjon er formell, debatt er uformell',
            ],
          },
          {
            label: 'b',
            task: 'Hva bør du gjøre når noen sier noe du er uenig i?',
            solution: 'Du bør lytte ferdig og deretter svare saklig med dine egne argumenter.',
            multipleChoiceOptions: [
              'Lytte ferdig og svare saklig',
              'Avbryte og si at de tar feil',
              'Ignorere det de sier',
              'Heve stemmen for å markere uenighet',
            ],
          },
          {
            label: 'c',
            task: 'Hva er en "stråmann" i en debatt?',
            solution: 'En stråmann er når du fremstiller motpartens argument feil for å lettere kunne angripe det. Dette er usaklig.',
            multipleChoiceOptions: [
              'Å forvrenge motpartens argument for å lettere angripe det',
              'En person som er enig med deg',
              'En som ikke deltar i debatten',
              'Et sterkt argument',
            ],
          },
          {
            label: 'd',
            task: 'Hvilken setning er best for å være uenig på en høflig måte?',
            solution: 'Å anerkjenne den andres perspektiv før du uttrykker uenighet er en høflig og konstruktiv måte å diskutere på.',
            multipleChoiceOptions: [
              'Jeg forstår hva du mener, men jeg ser det litt annerledes',
              'Det er helt feil!',
              'Du skjønner ikke poenget',
              'Nei, nei, nei',
            ],
          },
        ],
        solution: 'God diskusjonsteknikk handler om å lytte, være saklig og respektere uenighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: Lag et argument
    {
      id: 'norsk-8-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag et argument med påstand, begrunnelse og eksempel for eller mot dette utsagnet: "Det bør være lekser i skolen."',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en side (for eller mot) og formuler en tydelig påstand',
            solution: 'Eksempel: "Lekser bør finnes" eller "Skolen bør være leksefri".',
            multipleChoiceOptions: [
              'Formulere en klar påstand om hva du mener',
              'Være vag og uklar om hva du mener',
              'Unngå å ta et standpunkt',
              'Bare gjenta spørsmålet',
            ],
          },
          {
            label: 'b',
            task: 'Forklar hvorfor du mener dette (begrunnelse)',
            solution: 'FOR: De hjelper elevene å øve. MOT: Elevene trenger fritid.',
            multipleChoiceOptions: [
              'Gi en logisk forklaring på hvorfor du mener dette',
              'Si at det bare er slik',
              'Unngå å forklare',
              'Angripe motstanderne',
            ],
          },
          {
            label: 'c',
            task: 'Gi et konkret eksempel som støtter argumentet ditt',
            solution: 'FOR: Studier viser bedre resultater. MOT: Finland har lite lekser og gode resultater.',
            multipleChoiceOptions: [
              'Gi et konkret eksempel fra virkeligheten',
              'Gjenta påstanden',
              'Unngå å gi eksempler',
              'Finne på noe uten kilder',
            ],
          },
        ],
        hints: [
          'Velg en side (for eller mot)',
          'Start med påstanden',
          'Forklar hvorfor',
          'Gi et konkret eksempel',
        ],
        solution: 'Eksempel FOR: "Lekser bør finnes (påstand) fordi de hjelper elevene å øve og repetere det de har lært på skolen (begrunnelse). Studier viser at elever som gjør lekser, presterer bedre på prøver (eksempel)."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Forbered klassedebatt
    {
      id: 'norsk-8-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forbered deg til en klassedebatt om temaet "Bør karakterer avskaffes i ungdomsskolen?"',
        subTasks: [
          {
            label: 'a',
            task: 'Lag tre argumenter FOR å fjerne karakterer',
            solution: 'Eksempel: 1) Mindre stress og prestasjonspress, 2) Fokus på læring i stedet for poeng, 3) Mer likeverdige muligheter',
            multipleChoiceOptions: [
              'Mindre stress, fokus på læring, mer likeverdige muligheter',
              'Karakterer er bra, vi trenger dem, de motiverer',
              'Jeg vet ikke hva jeg mener',
              'Karakterer er urettferdige, og det er alt',
            ],
          },
          {
            label: 'b',
            task: 'Lag tre argumenter MOT å fjerne karakterer',
            solution: 'Eksempel: 1) Karakterer gir tydelig tilbakemelding, 2) Forbereder elevene til videre utdanning, 3) Motiverer til innsats',
            multipleChoiceOptions: [
              'Tydelig tilbakemelding, forberedelse til utdanning, motivasjon',
              'Karakterer er dårlige, vi bør fjerne dem',
              'Jeg har ingen argumenter mot',
              'Bare fordi det alltid har vært slik',
            ],
          },
          {
            label: 'c',
            task: 'Skriv et svar på det sterkeste motargumentet til din side',
            solution: 'Vis at du har tenkt gjennom motpartens beste poeng og kan imøtegå det saklig.',
            multipleChoiceOptions: [
              'Anerkjenne motargumentet og svare saklig med et motargument',
              'Ignorere motargumentet helt',
              'Angripe personen som fremmet argumentet',
              'Si at motargumentet er dumt',
            ],
          },
        ],
        hints: ['Tenk på elevenes perspektiv, lærernes perspektiv og samfunnets perspektiv', 'Bruk gjerne eksempler fra andre land'],
        solution: 'En god debattforberedelse inneholder argumenter for begge sider, slik at du kan svare på motargumenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 5.1: Norrøn litteratur
// ============================================================================

export const CHAPTER_NORSK_8_5_1: TextbookChapter = {
  id: 'norsk-8-5-1',
  courseId: 'norsk-8',
  chapterNumber: '5.1',
  title: 'Norrøn litteratur',
  description: 'Lær om den norrøne litteraturen fra vikingtiden og middelalderen - sagaer, edda og skaldekvad.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra ulike tider og kulturer uttrykker fellesskap og identitet',
  ],
  content: [
    {
      id: 'norsk-8-5-1-intro',
      type: 'text',
      content: `## Hva er norrøn litteratur?

**Norrøn litteratur** er litteraturen som ble skrevet på norrønt språk i Skandinavia og på Island fra ca. 800 til 1400. Norrønt er forgjengeren til moderne norsk, svensk, dansk og islandsk.

Denne litteraturen ble først overlevert muntlig, før den ble skrevet ned på 1200-tallet, hovedsakelig på Island.

**Viktige sjangre:**
- Eddadikt
- Skaldekvad
- Sagaer`,
    },
    {
      id: 'norsk-8-5-1-def-1',
      type: 'definition',
      title: 'Norrønt språk',
      content: `**Norrønt** var språket som ble snakket i Norge, på Island og i de andre nordiske landene fra ca. 700 til 1350.

- Skrevet med det latinske alfabetet (etter kristningen)
- Før det brukte man runer
- Moderne norsk, svensk, dansk og islandsk stammer fra norrønt

**Eksempel på norrønt:**
*"Hávamál"* (De høyes tale) begynner:
*"Gáttir allar áðr gangi fram, um skoðask skyli"*
= "Alle innganger, før man går inn, bør man undersøke"`,
    },
    {
      id: 'norsk-8-5-1-text-2',
      type: 'text',
      content: `## Eddadiktning

**Eddadiktene** er samlingen av norrøne myte- og heltedikt. De er anonyme og ble muntlig overlevert i flere hundre år.

### Den eldre Edda (Poetisk Edda)
- Samling av dikt om guder og helter
- Skrevet ned på 1200-tallet
- Inneholder myter om Odin, Tor, Frøya og andre guder

### Den yngre Edda (Snorres Edda)
- Skrevet av Snorre Sturlason ca. 1220
- Lærebok i skaldekunst
- Gjenforteller norrøne myter

### Kjente eddadikt:
- **Voluspå** - Volvens spådom om verdens skapelse og undergang
- **Hávamál** - Odins visdomsord
- **Trymskvida** - Humoristisk dikt om Tor som mister hammeren`,
    },
    {
      id: 'norsk-8-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Fra Hávamál',
      problem: `Les dette utdraget fra Hávamál (vers 1) og forklar hva det betyr:

*"Gáttir allar,
áðr gangi fram,
um skoðask skyli,
um skygnask skyli;
því at óvíst er at vita,
hvar óvinir
sitja á fleti fyrir."*`,
      solution: `**Oversettelse:**
"Alle innganger,
før man går inn,
bør man undersøke,
bør man speide;
for det er uvisst å vite
hvor fiender
sitter i rommet foran."

**Tolkning:**
Dette verset handler om forsiktighet og klokskap. Selv i trygge omgivelser bør man være observant og forberedt. Det er et praktisk råd fra vikingtiden, men kan også tolkes symbolsk: Vær forberedt på utfordringer i livet.`,
    },
    {
      id: 'norsk-8-5-1-text-3',
      type: 'text',
      content: `## Sagaene

**Sagaer** er prosafortellinger om historiske eller legendariske hendelser. De ble skrevet ned på Island på 1200- og 1300-tallet.

### Typer sagaer:
- **Islendingesagaer** - Om islandske storbønder (f.eks. Njåls saga)
- **Kongesagaer** - Om norske konger (f.eks. Heimskringla)
- **Fornaldersagaer** - Legendariske sagaer om helter

### Kjennetegn ved sagastilen:
- **Nøktern og realistisk** - Lite følelsesutbrudd
- **Objektiv forteller** - Viser, forteller ikke
- **Mye dialog** - Personene karakteriseres gjennom tale
- **Indirekte personskildring** - Vi tolker selv

### Snorre Sturlason (1179-1241)
Snorre var Islands mest kjente forfatter:
- Skrev Heimskringla (kongesagaer)
- Skrev Den yngre Edda
- Også politiker og godskar`,
    },
    {
      id: 'norsk-8-5-1-note-1',
      type: 'note',
      title: 'Norrøn mytologi',
      content: `Norrøn religion hadde mange guder:

**Odin** - Visdomsens og krigens gud, allfader
**Tor** - Tordenguden med hammeren Mjølner
**Frøya** - Kjærlighetens og fruktbarhetens gudinne
**Loke** - Lurendreieren, skaper problemer
**Balder** - Den vakre og gode guden

**Verdensbildet:**
- **Åsgard** - Gudenes hjem
- **Midgard** - Menneskenes verden
- **Utgard** - Jotnenes (kjempenes) rike
- **Yggdrasil** - Verdenstreet som binder alt sammen
- **Ragnarok** - Verdens undergang`,
    },

    // Oppgave 1: Grunnleggende om norrøn litteratur
    {
      id: 'norsk-8-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din kunnskap om norrøn litteratur.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er norrønt?',
            solution: 'Norrønt var språket som ble snakket i Norge, på Island og andre nordiske land i vikingtiden og tidlig middelalder.',
            multipleChoiceOptions: [
              'Språket som ble snakket i Norden fra ca. 700-1350',
              'Et moderne skandinavisk språk',
              'Et skriftspråk som bare ble brukt av prester',
              'Et annet navn for runeskrift',
            ],
          },
          {
            label: 'b',
            task: 'Hvem skrev "Den yngre Edda"?',
            solution: 'Snorre Sturlason (1179-1241) var en islandsk forfatter som skrev Den yngre Edda og Heimskringla.',
            multipleChoiceOptions: [
              'Snorre Sturlason',
              'Harald Hårfagre',
              'Leiv Eiriksson',
              'Olav den hellige',
            ],
          },
          {
            label: 'c',
            task: 'Hva kjennetegner sagastilen?',
            solution: 'Sagastilen er nøktern og realistisk, med mye dialog. Personene karakteriseres gjennom handlinger og replikker, ikke direkte beskrivelser.',
            multipleChoiceOptions: [
              'Nøktern stil med mye dialog og indirekte personskildring',
              'Mange følelsesutbrudd og beskrivelser av indre liv',
              'Rim og rytme i alle setninger',
              'Lange beskrivelser av naturen',
            ],
          },
          {
            label: 'd',
            task: 'Hva handler "Voluspå" om?',
            solution: 'Voluspå er et eddadikt der en volve (spåkvinne) forteller Odin om verdens skapelse og dens undergang i Ragnarok.',
            multipleChoiceOptions: [
              'Verdens skapelse og undergang (Ragnarok)',
              'En islandsk bondes liv',
              'Kong Haralds erobringer',
              'Hvordan man skriver dikt',
            ],
          },
        ],
        solution: 'Norrøn litteratur omfatter eddadikt, sagaer og skaldekvad skrevet på norrønt språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: Norrøn mytologi
    {
      id: 'norsk-8-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Koble riktig gud med riktig beskrivelse:',
        subTasks: [
          {
            label: 'a',
            task: 'Odin',
            solution: 'Visdomsens og krigens gud, allfader',
            multipleChoiceOptions: [
              'Visdomsens og krigens gud, allfader',
              'Tordenguden med hammeren Mjølner',
              'Lurendreieren som skaper problemer',
              'Kjærlighetens og fruktbarhetens gudinne',
            ],
          },
          {
            label: 'b',
            task: 'Tor',
            solution: 'Tordenguden med hammeren Mjølner',
            multipleChoiceOptions: [
              'Tordenguden med hammeren Mjølner',
              'Visdomsens og krigens gud, allfader',
              'Lurendreieren som skaper problemer',
              'Kjærlighetens og fruktbarhetens gudinne',
            ],
          },
          {
            label: 'c',
            task: 'Loke',
            solution: 'Lurendreieren som skaper problemer',
            multipleChoiceOptions: [
              'Lurendreieren som skaper problemer',
              'Visdomsens og krigens gud, allfader',
              'Tordenguden med hammeren Mjølner',
              'Kjærlighetens og fruktbarhetens gudinne',
            ],
          },
          {
            label: 'd',
            task: 'Frøya',
            solution: 'Kjærlighetens og fruktbarhetens gudinne',
            multipleChoiceOptions: [
              'Kjærlighetens og fruktbarhetens gudinne',
              'Visdomsens og krigens gud, allfader',
              'Tordenguden med hammeren Mjølner',
              'Lurendreieren som skaper problemer',
            ],
          },
        ],
        solution: 'Odin = visdomsgud, Tor = tordengud, Loke = lurendreieren, Frøya = kjærlighetsgudinne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Hávamál-analyse
    {
      id: 'norsk-8-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les et utdrag fra Hávamál (visdomsordene) og svar på spørsmålene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva slags tekst er Hávamál, og hvem "snakker" i diktet?',
            solution: 'Hávamál er et eddadikt med visdomsord. Det er Odin som taler.',
            multipleChoiceOptions: [
              'Et eddadikt med visdomsord der Odin taler',
              'En saga om islandske bønder',
              'Et skaldekvad om vikingtokt',
              'En kongesaga om Harald Hårfagre',
            ],
          },
          {
            label: 'b',
            task: 'Finn et visdomsord fra Hávamál og forklar hva det betyr.',
            solution: 'Varierer - eleven velger et vers og tolker det.',
            multipleChoiceOptions: [
              'Velge et vers og forklare betydningen',
              'Skrive om hele diktet',
              'Bare gjengi verset uten forklaring',
              'Finne på et eget visdomsord',
            ],
          },
          {
            label: 'c',
            task: 'Er visdomsordene fortsatt relevante i dag? Begrunn svaret.',
            solution: 'Eleven reflekterer over tidløse temaer som vennskap, forsiktighet, gjestfrihet etc.',
            multipleChoiceOptions: [
              'Reflektere over tidløse temaer som vennskap og forsiktighet',
              'Si at alt fra fortiden er utdatert',
              'Unngå å begrunne svaret',
              'Bare svare ja eller nei',
            ],
          },
        ],
        hints: ['Søk opp Hávamál på nett for å finne vers', 'Tenk på hva verset sier om livet'],
        solution: 'Hávamål inneholder tidløs visdom om vennskap, gjestfrihet, forsiktighet og livets gang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 5.2: Folkediktning
// ============================================================================

export const CHAPTER_NORSK_8_5_2: TextbookChapter = {
  id: 'norsk-8-5-2',
  courseId: 'norsk-8',
  chapterNumber: '5.2',
  title: 'Folkediktning',
  description: 'Lær om eventyr, sagn, folkeviser og annen muntlig overlevert litteratur.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra ulike tider og kulturer uttrykker fellesskap og identitet',
  ],
  content: [
    {
      id: 'norsk-8-5-2-intro',
      type: 'text',
      content: `## Hva er folkediktning?

**Folkediktning** er litteratur som har blitt overlevert muntlig fra generasjon til generasjon. Den har ingen kjent forfatter - den tilhører "folket".

Folkediktningen ble samlet inn og skrevet ned på 1800-tallet, blant annet av Asbjørnsen og Moe.

**Typer folkediktning:**
- Eventyr
- Sagn
- Folkeviser
- Ordspråk og gåter`,
    },
    {
      id: 'norsk-8-5-2-def-1',
      type: 'definition',
      title: 'Eventyr',
      content: `Et **eventyr** er en oppdiktet fortelling med overnaturlige elementer og magiske hendelser.

**Kjennetegn:**
- Begynner ofte med "Det var en gang..."
- Overnaturlige vesener: troll, hulder, nisser
- Magiske gjenstander: tryllesverd, usynlighetskappe
- Helten vinner til slutt
- Lykkelig slutt

**Typer eventyr:**
- **Undereventyr:** Helten opplever magiske prøvelser
- **Skjemteeventyr:** Humoristiske fortellinger
- **Dyreeventyr:** Dyr oppfører seg som mennesker`,
    },
    {
      id: 'norsk-8-5-2-text-2',
      type: 'text',
      content: `## Asbjørnsen og Moe

**Peter Christen Asbjørnsen** (1812-1885) og **Jørgen Moe** (1813-1882) var venner som sammen samlet inn og skrev ned norske folkeeventyr.

De reiste rundt i Norge og skrev ned eventyrene slik folk fortalte dem. I 1841 ga de ut den første samlingen: *"Norske Folkeeventyr"*.

**Kjente eventyr:**
- *Askeladden som kappåt med trollet*
- *De tre bukkene Bruse*
- *Pannekaka*
- *Kvitebjørn kong Valemon*
- *Smørbukk*

Eventyrene deres ble viktige for norsk identitet og språkutvikling.`,
    },
    {
      id: 'norsk-8-5-2-text-3',
      type: 'text',
      content: `## Eventyrenes oppbygning

De fleste eventyr følger et fast mønster:

### 1. Utgangssituasjon
- Vi møter helten (ofte fattig eller undertrykt)
- Et problem oppstår eller helten drar hjemmefra

### 2. Prøvelser
- Helten møter utfordringer
- Ofte tre prøvelser
- Får hjelp av magiske hjelpere

### 3. Klimaks
- Den avgjørende kampen eller prøvelsen
- Helten bruker det hen har lært

### 4. Lykkelig slutt
- Helten vinner prinsessen/prinsen og halve kongeriket
- Ondskapens makter overvinnes

### Tallmagi
- Tallet **3** går igjen: tre brødre, tre prøvelser, tre ønsker
- Ofte er det den **yngste** (Askeladden) som lykkes`,
    },
    {
      id: 'norsk-8-5-2-def-2',
      type: 'definition',
      title: 'Sagn',
      content: `Et **sagn** er en fortelling som blir presentert som sann, ofte knyttet til et bestemt sted eller en historisk hendelse.

**Kjennetegn:**
- Presenteres som noe som virkelig har skjedd
- Knyttet til konkrete steder: fjell, vann, gårder
- Handler ofte om møter med overnaturlige vesener
- Forklarer noe i naturen eller varsler om fare

**Eksempler:**
- Historier om huldra som lokket menn inn i fjellet
- Nøkken som dro folk ned i vannet
- Draugen som varslet om drukning
- Utburd (barn som ble satt ut i skogen)`,
    },
    {
      id: 'norsk-8-5-2-text-4',
      type: 'text',
      content: `## Folkeviser

**Folkeviser** er sangbare dikt som ble overlevert muntlig. De ble sunget ved ulike anledninger.

### Kjennetegn:
- Vers med refreng
- Enkelt språk
- Dramatiske hendelser
- Ofte tragisk utgang

### Typer folkeviser:
- **Ridderviser:** Om riddere og adelsliv
- **Trollviser:** Om møter med overnaturlige vesener
- **Kjempeviser:** Om helter fra norrøn tid
- **Historiske viser:** Om kjente hendelser

### Eksempel: "Draumkvedet"
Norges mest kjente folkevise. Olav Åsteson sover fra julaften til trettende dag og drømmer om en reise til dødsriket.`,
    },
    {
      id: 'norsk-8-5-2-note-1',
      type: 'note',
      title: 'Overnaturlige vesener i folkediktningen',
      content: `**Troll:** Store, dumme skapninger som bor i fjellet. Sprekker i sollys.

**Huldra:** Vakker kvinne med kuhale. Lokker menn inn i fjellet.

**Nøkken:** Bor i vann og tjern. Kan lokke folk ut på dypt vann.

**Nissen:** Liten skapning som bor på gårder. Hjelper hvis han får grøt.

**Draugen:** Gjenferd av druknet sjømann. Varsler om ulykker.

Disse vesenene representerer ofte farene i naturen - fjellet, vannet, mørket.`,
    },
    {
      id: 'norsk-8-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Askeladden',
      problem: `Hva er typisk for Askeladden-figuren i eventyrene?`,
      solution: `**Askeladden** er den typiske eventyrhelten:

**Egenskaper:**
- Yngste sønn av tre brødre
- Blir sett ned på av de andre ("sitter i asken")
- Ikke sterk eller smart på vanlig måte
- Nysgjerrig og vennlig
- Lytter til gode råd

**Hvorfor lykkes han?**
- Han er vennlig mot alle han møter (også dyr og fattigfolk)
- Han samler på "verdiløse" ting som viser seg nyttige
- Han gir ikke opp
- Han bruker list fremfor makt

**Budskap:**
Eventyrene viser at de som blir undervurdert, kan overraske. Godhet og klokskap er viktigere enn styrke og rikdom.`,
    },
    // Oppgaver
    {
      id: 'norsk-8-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Svar på spørsmålene om folkediktning:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom eventyr og sagn?',
            solution: 'Eventyr er oppdiktet, sagn presenteres som sant',
            multipleChoiceOptions: [
              'Eventyr er oppdiktet, sagn presenteres som sant',
              'Det er ingen forskjell',
              'Sagn er lengre enn eventyr',
              'Eventyr har alltid troll, sagn har aldri det',
            ],
          },
          {
            label: 'b',
            task: 'Hvem samlet inn norske folkeeventyr på 1800-tallet?',
            solution: 'Asbjørnsen og Moe',
            multipleChoiceOptions: [
              'Asbjørnsen og Moe',
              'Henrik Ibsen og Bjørnstjerne Bjørnson',
              'Snorre Sturlason',
              'Ivar Aasen',
            ],
          },
          {
            label: 'c',
            task: 'Hvilket tall går ofte igjen i eventyr?',
            solution: '3',
            multipleChoiceOptions: [
              '3',
              '2',
              '5',
              '10',
            ],
          },
          {
            label: 'd',
            task: 'Hva kjennetegner Askeladden som eventyrhelt?',
            solution: 'Han er yngst, undervurdert, men vennlig og klok',
            multipleChoiceOptions: [
              'Han er yngst, undervurdert, men vennlig og klok',
              'Han er eldst og sterkest av brødrene',
              'Han bruker alltid makt for å vinne',
              'Han er rik fra starten',
            ],
          },
        ],
        solution: 'Eventyr er tydelig oppdiktede historier med lykkelig slutt. Sagn presenteres som noe som virkelig har skjedd, ofte på et konkret sted. Asbjørnsen og Moe samlet inn norske folkeeventyr fra 1841. Tallet 3 er magisk i eventyr. Askeladden lykkes fordi han er vennlig mot alle og bruker list fremfor makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-8-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg et eventyr du kjenner og analyser det etter eventyrenes oppbygning:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er utgangssituasjonen? Hvem er helten?',
            solution: 'Beskriv hvordan eventyret begynner og hvem hovedpersonen er.',
            multipleChoiceOptions: [
              'Beskriv hvordan eventyret begynner og hvem hovedpersonen er.',
              'Forklar hvordan eventyret slutter.',
              'List opp alle karakterene i eventyret.',
              'Beskriv settingen i eventyret.',
            ],
          },
          {
            label: 'b',
            task: 'Hvilke prøvelser møter helten?',
            solution: 'Beskriv utfordringene helten må overvinne.',
            multipleChoiceOptions: [
              'Beskriv utfordringene helten må overvinne.',
              'Forklar hvem antagonisten er.',
              'List opp alle magiske gjenstander.',
              'Beskriv heltens utseende.',
            ],
          },
          {
            label: 'c',
            task: 'Hva er klimaks og hvordan ender eventyret?',
            solution: 'Beskriv den avgjørende hendelsen og slutten.',
            multipleChoiceOptions: [
              'Beskriv den avgjørende hendelsen og slutten.',
              'Forklar hva som skjer i midten av eventyret.',
              'List opp alle stedene i eventyret.',
              'Beskriv heltens familie.',
            ],
          },
        ],
        hints: ['Velg et eventyr du husker godt', 'Bruk mønsteret: utgangssituasjon → prøvelser → klimaks → lykkelig slutt'],
        solution: 'Analysen bør vise at du forstår eventyrenes typiske oppbygning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-8-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign eventyr og sagn ved å svare på følgende:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellene mellom eventyr og sagn?',
            solution: 'Eventyr: oppdiktet, lykkelig slutt, ikke stedfestet. Sagn: presentert som sant, ofte tragisk, knyttet til konkrete steder.',
            multipleChoiceOptions: [
              'Eventyr: oppdiktet, lykkelig slutt, ikke stedfestet. Sagn: presentert som sant, ofte tragisk, knyttet til konkrete steder.',
              'Eventyr er kortere enn sagn.',
              'Sagn har flere karakterer enn eventyr.',
              'Det er ingen forskjell mellom eventyr og sagn.',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor tror du folk fortalte sagn om farlige steder?',
            solution: 'For å advare mot reelle farer (dypt vann, bratte fjell) ved å knytte dem til overnaturlige vesener.',
            multipleChoiceOptions: [
              'For å advare mot reelle farer (dypt vann, bratte fjell) ved å knytte dem til overnaturlige vesener.',
              'For å underholde barn.',
              'Fordi de trodde på overnaturlige vesener.',
              'For å gjøre stedene mer interessante.',
            ],
          },
          {
            label: 'c',
            task: 'Finn et eksempel på et norsk sagn og forklar hva det handler om.',
            solution: 'Eleven finner et sagn og forklarer handlingen og hva det skulle lære folk.',
            multipleChoiceOptions: [
              'Eleven finner et sagn og forklarer handlingen og hva det skulle lære folk.',
              'Eleven finner et eventyr og forklarer handlingen.',
              'Eleven beskriver en norrøn myte.',
              'Eleven skriver en egen fortelling.',
            ],
          },
        ],
        hints: ['Tenk på funksjonen til fortellingene - hva skulle de lære folk?', 'Overnaturlige vesener representerer ofte reelle farer'],
        solution: 'Både eventyr og sagn hadde en funksjon i samfunnet - underholdning, oppdragelse og advarsler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er nå integrert i content-arrayet
};

// ============================================================================
// KAPITTEL 1.4: Kildekritikk og mediekritikk
// ============================================================================

export const CHAPTER_NORSK_8_1_4: TextbookChapter = {
  id: 'norsk-8-1-4',
  courseId: 'norsk-8',
  chapterNumber: '1.4',
  title: 'Kildekritikk og mediekritikk',
  description: 'Lær å vurdere kilder kritisk og gjenkjenne ulike typer påvirkning i medier.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utøve kildekritikk og vise til kilder i eget arbeid',
    'reflektere kritisk over hvordan tekster framstiller ulike perspektiver',
  ],
  content: [
    // ===== DEL 1: Introduksjon til kildekritikk =====
    {
      id: 'norsk-8-1-4-intro',
      type: 'text',
      content: `## Hvorfor er kildekritikk viktig?

I dag blir vi bombardert med informasjon fra alle kanter: nyheter, sosiale medier, YouTube, podcaster og nettsider. Men **ikke alt vi leser eller ser er sant**. Derfor må vi lære oss å vurdere kilder kritisk.

**Kildekritikk** handler om å stille spørsmål ved informasjonen vi møter:
- Hvem står bak denne informasjonen?
- Hvorfor er den publisert?
- Er informasjonen pålitelig?
- Kan jeg stole på dette?`,
    },
    {
      id: 'norsk-8-1-4-def-1',
      type: 'definition',
      title: 'Kilde',
      content: `En **kilde** er opphavet til informasjon. Det kan være en person, en bok, en nettside, en avis, et dokument eller noe annet som gir oss kunnskap om noe.

**Primærkilder** er førstehånds informasjon (øyenvitner, originaldokumenter).
**Sekundærkilder** er andrehånds informasjon (lærebøker, artikler som refererer til andre).`,
    },
    {
      id: 'norsk-8-1-4-def-2',
      type: 'definition',
      title: 'Kildekritikk',
      content: `**Kildekritikk** er å vurdere om en kilde er pålitelig og relevant. Vi undersøker hvem som står bak, hva formålet er, og om informasjonen kan bekreftes av andre kilder.`,
    },

    // ===== DEL 2: TONE-metoden =====
    {
      id: 'norsk-8-1-4-text-2',
      type: 'text',
      content: `## TONE-metoden for kildekritikk

En enkel måte å vurdere kilder på er å bruke **TONE-metoden**:

### T - Troverdighet
- Hvem står bak kilden?
- Er det en kjent og pålitelig avsender?
- Har forfatteren kompetanse på området?

### O - Objektivitet
- Er informasjonen balansert eller ensidig?
- Prøver kilden å påvirke deg i en bestemt retning?
- Skiller kilden mellom fakta og meninger?

### N - Nøyaktighet
- Stemmer informasjonen med andre kilder?
- Er det kildehenvisninger?
- Er fakta og tall korrekte?

### E - Egnethet
- Er kilden relevant for det du skal finne ut?
- Er informasjonen oppdatert?
- Passer kilden til formålet ditt?`,
    },
    {
      id: 'norsk-8-1-4-tip-1',
      type: 'tip',
      content: `**Sjekkliste for nettsider:**
- Se på domenet (.no, .gov, .edu er ofte mer pålitelige enn ukjente domener)
- Let etter "Om oss"-side
- Sjekk om det er kontaktinformasjon
- Se etter dato for publisering
- Vurder om designet virker profesjonelt`,
    },
    {
      id: 'norsk-8-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Vurdere en nettside',
      problem: `Du finner en nettside som hevder at "sjokolade kurerer forkjølelse". Hvordan vurderer du denne kilden med TONE-metoden?`,
      solution: `**T - Troverdighet:**
- Hvem står bak nettsiden? Er det en lege, et sykehus, eller en ukjent person?
- Hvis det er en blogg uten forfatterinfo, er troverdigheten lav.

**O - Objektivitet:**
- Selger nettsiden sjokolade? Da kan de ha økonomiske motiver.
- Presenteres motargumenter?

**N - Nøyaktighet:**
- Finnes det vitenskapelige studier som støtter påstanden?
- Er det kildehenvisninger?
- Stemmer dette med det leger sier?

**E - Egnethet:**
- Når ble artikkelen skrevet?
- Er medisinsk forskning oppdatert?

**Konklusjon:** Uten vitenskapelige kilder og med mulig kommersielt motiv, bør vi være skeptiske til påstanden.`,
    },

    // Oppgave 1
    {
      id: 'norsk-8-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din forståelse av TONE-metoden.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva står T-en i TONE for?',
            solution: 'T står for Troverdighet - hvem står bak kilden og er de pålitelige?',
            multipleChoiceOptions: [
              'Troverdighet - hvem står bak kilden',
              'Tekst - hva slags tekst er det',
              'Tid - når ble kilden laget',
              'Tema - hva handler kilden om',
            ],
          },
          {
            label: 'b',
            task: 'Hva betyr det at en kilde er objektiv?',
            solution: 'At kilden er balansert og ikke prøver å påvirke leseren i én bestemt retning.',
            multipleChoiceOptions: [
              'At kilden er balansert og ikke prøver å påvirke leseren',
              'At kilden er skrevet av en ekspert',
              'At kilden er ny og oppdatert',
              'At kilden har mange bilder',
            ],
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig å sjekke om informasjon stemmer med andre kilder?',
            solution: 'For å bekrefte at informasjonen er korrekt - hvis flere uavhengige kilder sier det samme, er det mer sannsynlig at det stemmer.',
            multipleChoiceOptions: [
              'For å bekrefte at informasjonen er korrekt',
              'For å finne den nyeste informasjonen',
              'For å finne den korteste teksten',
              'For å finne bilder til oppgaven',
            ],
          },
        ],
        solution: 'TONE står for Troverdighet, Objektivitet, Nøyaktighet og Egnethet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 3: Falske nyheter og feilinformasjon =====
    {
      id: 'norsk-8-1-4-text-3',
      type: 'text',
      content: `## Falske nyheter og feilinformasjon

**Falske nyheter** (fake news) er usann informasjon som presenteres som ekte nyheter. Dette har blitt et stort problem i sosiale medier.

### Typer feilinformasjon

**Feilinformasjon (misinformation):**
Usann informasjon som spres uten at avsenderen vet at det er feil. Personen tror selv det er sant.

**Desinformasjon (disinformation):**
Usann informasjon som spres bevisst for å lure folk. Avsenderen vet at det er feil.

**Clickbait:**
Overskrifter som er laget for å få deg til å klikke, ofte med overdrivelser eller villedende påstander.`,
    },
    {
      id: 'norsk-8-1-4-warning-1',
      type: 'warning',
      title: 'Advarselstegn på falske nyheter',
      content: `Vær på vakt hvis du ser:
- **Sjokkerende overskrifter** med STORE BOKSTAVER og mange utropstegn!!!
- **Ingen forfatter** eller kilde oppgitt
- **Rare domenenavn** som etterligner kjente medier
- **Bilder som ikke passer** med teksten
- **Ingen andre medier** har samme nyhet
- **Datoløst innhold** eller gamle nyheter presentert som nye
- **Appell til følelser** fremfor fakta`,
    },
    {
      id: 'norsk-8-1-4-example-2',
      type: 'example',
      title: 'Eksempel: Gjenkjenne clickbait',
      problem: `Hvilken av disse overskriftene er mest sannsynlig clickbait?

A) "Regjeringen legger frem nytt statsbudsjett"
B) "Du vil IKKE TRO hva denne kjendisen gjorde - nummer 7 sjokkerer!"
C) "Forskning viser sammenheng mellom søvn og helse"`,
      solution: `**B er clickbait** fordi:
- Bruker store bokstaver for å skape oppmerksomhet
- Lover noe sjokkerende uten å si hva
- "Du vil ikke tro" er en typisk clickbait-frase
- Nummer-format er vanlig i clickbait

A og C er saklige overskrifter som forteller hva artikkelen handler om.`,
    },

    // Oppgave 2
    {
      id: 'norsk-8-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Test din kunnskap om falske nyheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom feilinformasjon og desinformasjon?',
            solution: 'Feilinformasjon spres uten at avsenderen vet at det er feil, mens desinformasjon spres bevisst for å lure folk.',
            multipleChoiceOptions: [
              'Feilinformasjon er utilsiktet, desinformasjon er bevisst',
              'Feilinformasjon er på nettet, desinformasjon er i aviser',
              'Det er ingen forskjell',
              'Desinformasjon er alltid om politikk',
            ],
          },
          {
            label: 'b',
            task: 'Hva er clickbait?',
            solution: 'Overskrifter som er laget for å få deg til å klikke, ofte med overdrivelser eller villedende påstander.',
            multipleChoiceOptions: [
              'Overskrifter laget for å få deg til å klikke med overdrivelser',
              'Nyheter som bare finnes på nett',
              'Artikler med mange bilder',
              'Nyheter fra utlandet',
            ],
          },
          {
            label: 'c',
            task: 'Hvilket av disse er et advarselstegn på falske nyheter?',
            solution: 'Sjokkerende overskrifter med store bokstaver og mange utropstegn.',
            multipleChoiceOptions: [
              'Sjokkerende overskrifter med STORE BOKSTAVER og !!!',
              'Kjedelige overskrifter',
              'Artikler med kildehenvisninger',
              'Nyheter fra kjente medier',
            ],
          },
        ],
        solution: 'Falske nyheter kan gjenkjennes gjennom overdrevne overskrifter, manglende kilder og appell til følelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 4: Reklame og påvirkning =====
    {
      id: 'norsk-8-1-4-text-4',
      type: 'text',
      content: `## Reklame og skjult påvirkning

I medier møter vi ikke bare nyheter, men også reklame og annen påvirkning. Det er viktig å kunne skille mellom redaksjonelt innhold og kommersielt innhold.

### Typer påvirkning

**Direkte reklame:**
Tydelig merket som annonse eller reklame.

**Sponset innhold:**
Artikler eller videoer som er betalt av en bedrift, men ser ut som vanlig innhold. Skal merkes med "sponset" eller "annonse".

**Influencer-markedsføring:**
Når personer på sosiale medier får betalt for å anbefale produkter. Skal merkes med #reklame eller #annonse.

**Produktplassering:**
Når produkter vises i filmer, serier eller YouTube-videoer.`,
    },
    {
      id: 'norsk-8-1-4-note-1',
      type: 'note',
      content: `**Markedsføringsloven**

I Norge krever loven at all reklame skal være tydelig merket. Influencere må skrive #reklame eller #annonse når de får betalt for å vise produkter. Brudd på dette kan straffes med bøter.`,
    },

    // Oppgave 3
    {
      id: 'norsk-8-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Test din forståelse av reklame og påvirkning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er sponset innhold?',
            solution: 'Artikler eller videoer som er betalt av en bedrift, men ser ut som vanlig innhold.',
            multipleChoiceOptions: [
              'Innhold betalt av en bedrift som ser ut som vanlig innhold',
              'Gratis innhold på nettet',
              'Nyheter fra NRK',
              'Innhold laget av frivillige',
            ],
          },
          {
            label: 'b',
            task: 'Hva må influencere gjøre når de får betalt for å vise produkter?',
            solution: 'De må merke innlegget med #reklame eller #annonse.',
            multipleChoiceOptions: [
              'Merke innlegget med #reklame eller #annonse',
              'Ingenting, det er opp til dem selv',
              'Bare si det muntlig i videoen',
              'Skjule at de får betalt',
            ],
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig å kunne gjenkjenne reklame?',
            solution: 'For å forstå at noen prøver å selge deg noe og ikke bare gi objektiv informasjon.',
            multipleChoiceOptions: [
              'For å forstå at noen prøver å selge deg noe',
              'For å finne de beste tilbudene',
              'For å lære om nye produkter',
              'Det er ikke viktig',
            ],
          },
        ],
        solution: 'Det er viktig å gjenkjenne reklame for å være en kritisk forbruker av medieinnhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 5: Kildehenvisninger =====
    {
      id: 'norsk-8-1-4-text-5',
      type: 'text',
      content: `## Kildehenvisninger i eget arbeid

Når du skriver tekster og bruker informasjon fra andre, må du **oppgi kildene dine**. Dette er viktig fordi:

1. Det viser hvor informasjonen kommer fra
2. Leseren kan sjekke om det stemmer
3. Du gir æren til de som har gjort arbeidet
4. Det er ulovlig å presentere andres arbeid som ditt eget (plagiat)

### Hvordan henvise til kilder

**I teksten:**
"Ifølge Store norske leksikon..."
"Forskere ved NTNU har funnet at..."
"(Kilde: VG, 15. januar 2024)"

**I kildelisten:**
- **Bok:** Forfatter (år). *Tittel*. Forlag.
- **Nettside:** Forfatter/nettsted (år). Tittel. Hentet fra: URL
- **Artikkel:** Forfatter (år). Tittel. *Avis/tidsskrift*.`,
    },
    {
      id: 'norsk-8-1-4-tip-2',
      type: 'tip',
      content: `**Gode kilder for skolearbeid:**
- Store norske leksikon (snl.no)
- Forskning.no
- NRK og andre etablerte nyhetsmedier
- Offentlige nettsider (.no, .gov)
- Fagbøker og lærebøker
- Wikipedia kan brukes som utgangspunkt, men sjekk kildene Wikipedia bruker!`,
    },

    // Oppgave 4
    {
      id: 'norsk-8-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Test din kunnskap om kildehenvisninger.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor må vi oppgi kilder i tekster vi skriver?',
            solution: 'For å vise hvor informasjonen kommer fra, la leseren sjekke fakta, gi æren til originalkildene, og unngå plagiat.',
            multipleChoiceOptions: [
              'For å vise hvor informasjonen kommer fra og unngå plagiat',
              'For å gjøre teksten lengre',
              'Fordi læreren krever det',
              'For å imponere leseren',
            ],
          },
          {
            label: 'b',
            task: 'Hva er plagiat?',
            solution: 'Å presentere andres arbeid som sitt eget uten å oppgi kilde.',
            multipleChoiceOptions: [
              'Å presentere andres arbeid som sitt eget uten å oppgi kilde',
              'Å skrive korte tekster',
              'Å bruke internett til research',
              'Å sitere fra bøker',
            ],
          },
          {
            label: 'c',
            task: 'Hvilken av disse er en god kilde for skolearbeid?',
            solution: 'Store norske leksikon (snl.no) er en faglig kvalitetssikret kilde.',
            multipleChoiceOptions: [
              'Store norske leksikon (snl.no)',
              'Et tilfeldig blogginnlegg',
              'En kommentar på YouTube',
              'En anonym nettside',
            ],
          },
        ],
        solution: 'Gode kilder er troverdige, faglige og kan verifiseres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 6: Praktisk oppgave =====
    {
      id: 'norsk-8-1-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk kildekritikk: Finn en nyhetssak på nettet og vurder den med TONE-metoden.',
        subTasks: [
          {
            label: 'a',
            task: 'Troverdighet: Hvem står bak kilden? Er det en kjent avsender?',
            solution: 'Beskriv hvem som har publisert nyheten og vurder om de er pålitelige.',
            multipleChoiceOptions: [
              'Beskriv hvem som har publisert nyheten og vurder pålitelighet',
              'Skriv bare navnet på nettsiden',
              'Kopier hele artikkelen',
              'Ignorer hvem som står bak',
            ],
          },
          {
            label: 'b',
            task: 'Objektivitet: Er artikkelen balansert? Presenteres flere sider av saken?',
            solution: 'Vurder om artikkelen er nøytral eller om den prøver å påvirke leseren.',
            multipleChoiceOptions: [
              'Vurder om artikkelen er nøytral eller prøver å påvirke',
              'Tell antall avsnitt',
              'Se om det er bilder',
              'Sjekk om det er reklame på siden',
            ],
          },
          {
            label: 'c',
            task: 'Nøyaktighet: Kan du finne samme informasjon i andre kilder?',
            solution: 'Søk opp saken og se om andre troverdige kilder rapporterer det samme.',
            multipleChoiceOptions: [
              'Søk opp saken og se om andre troverdige kilder sier det samme',
              'Stol på at det stemmer',
              'Les kommentarfeltet',
              'Se på antall likes',
            ],
          },
          {
            label: 'd',
            task: 'Gi en samlet vurdering: Er dette en pålitelig kilde?',
            solution: 'Gi en begrunnet vurdering basert på T, O, N og E.',
            multipleChoiceOptions: [
              'Gi en begrunnet vurdering basert på T, O, N og E',
              'Svar bare ja eller nei',
              'Kopier overskriften',
              'Skriv hva du tror',
            ],
          },
        ],
        hints: ['Velg en nyhetssak fra en nettavis', 'Bruk søkemotorer for å finne andre kilder', 'Se etter "Om oss"-informasjon på nettsiden'],
        solution: 'Vurderingen bør dekke alle fire punkter i TONE-metoden med konkrete eksempler fra kilden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4: Kreativ skriving - dikt
// ============================================================================

export const CHAPTER_NORSK_8_2_4: TextbookChapter = {
  id: 'norsk-8-2-4',
  courseId: 'norsk-8',
  chapterNumber: '2.4',
  title: 'Kreativ skriving - dikt',
  description: 'Lær å skrive egne dikt med ulike virkemidler som rim, rytme og billedspråk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive kreative tekster på hovedmål og sidemål med språklige virkemidler',
  ],
  content: [
    // ===== DEL 1: Introduksjon til dikt =====
    {
      id: 'norsk-8-2-4-intro',
      type: 'text',
      content: `## Hva er et dikt?

Et **dikt** er en tekst der språket brukes på en kunstnerisk måte. I dikt er ofte hvert ord nøye valgt, og formen er like viktig som innholdet.

Dikt skiller seg fra prosa (vanlig tekst) ved at:
- De er ofte kortere og mer komprimerte
- De bruker gjerne linjeskift og vers
- De spiller på rytme, klang og rim
- De bruker ofte billedspråk og symboler

**Du trenger ikke være et geni for å skrive dikt!** Alle kan lære seg teknikker for å skrive interessante og personlige dikt.`,
    },
    {
      id: 'norsk-8-2-4-def-1',
      type: 'definition',
      title: 'Vers og strofe',
      content: `Et **vers** er én linje i et dikt.

En **strofe** er en gruppe med vers som hører sammen, omtrent som et avsnitt i vanlig tekst. Strofer skilles med en blank linje.

**Eksempel:**
*Solen skinner* ← vers 1
*på min kind* ← vers 2
*Fugler synger* ← vers 3 (strofe 1)

*Dagen gryr* ← vers 4
*alt er nytt* ← vers 5 (strofe 2)`,
    },

    // ===== DEL 2: Rim =====
    {
      id: 'norsk-8-2-4-text-2',
      type: 'text',
      content: `## Rim i dikt

**Rim** er når ord har lik lyd på slutten. Rim gir diktet musikalitet og gjør det lettere å huske.

### Typer rim

**Parrim (aabb):**
To linjer etter hverandre rimer.
*Jeg går en tur i skog og mark* (a)
*og hører fuglens sang så klart* (a)
*Jeg setter meg ved bekken ned* (b)
*og finner der min indre fred* (b)

**Kryssrim (abab):**
Annenhver linje rimer.
*Snøen faller stille ned* (a)
*og dekker hele jord* (b)
*Jeg finner her min indre fred* (a)
*i vinterstille nord* (b)

**Klammerrim (abba):**
Første og siste linje rimer, og de to i midten rimer.
*Nå kommer våren til vårt land* (a)
*med fugler, blomster, sol* (b)
*Naturen våkner fra sin dvol* (b)
*og grønt gror frem på strand* (a)`,
    },
    {
      id: 'norsk-8-2-4-tip-1',
      type: 'tip',
      content: `**Du trenger ikke rime!**

Mange moderne dikt bruker ikke rim i det hele tatt. Det kalles **frie vers** eller **modernistisk dikt**. Da er det andre virkemidler som skaper rytme og stemning.`,
    },
    {
      id: 'norsk-8-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Identifisere rimtype',
      problem: `Hvilken rimtype har dette verset?

*Månen lyser klar i natt*
*Stjernene står stille*
*Snart er mørket blitt så matt*
*Drømmene blir milde*`,
      solution: `Dette er **kryssrim (abab)**:
- "natt" (a) rimer med "matt" (a)
- "stille" (b) rimer med "milde" (b)

Annenhver linje rimer med hverandre.`,
    },

    // Oppgave 1
    {
      id: 'norsk-8-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din kunnskap om rim.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er parrim?',
            solution: 'Parrim er når to linjer etter hverandre rimer (aabb).',
            multipleChoiceOptions: [
              'To linjer etter hverandre rimer (aabb)',
              'Annenhver linje rimer (abab)',
              'Første og siste linje rimer',
              'Ingen linjer rimer',
            ],
          },
          {
            label: 'b',
            task: 'Hvilken rimtype er dette: sol-fjell-kveld-stol?',
            solution: 'Dette er klammerrim (abba) fordi sol-stol rimer og fjell-kveld rimer.',
            multipleChoiceOptions: [
              'Klammerrim (abba)',
              'Parrim (aabb)',
              'Kryssrim (abab)',
              'Frie vers',
            ],
          },
          {
            label: 'c',
            task: 'Må dikt alltid rime?',
            solution: 'Nei, mange moderne dikt bruker frie vers uten rim.',
            multipleChoiceOptions: [
              'Nei, mange moderne dikt bruker frie vers',
              'Ja, alle dikt må rime',
              'Bare dikt for barn må rime',
              'Bare gamle dikt rimer',
            ],
          },
        ],
        solution: 'Rim er et virkemiddel, men ikke et krav i moderne dikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 3: Billedspråk =====
    {
      id: 'norsk-8-2-4-text-3',
      type: 'text',
      content: `## Billedspråk i dikt

**Billedspråk** er når vi bruker ord og uttrykk som skaper bilder i hodet på leseren. Det gjør at vi forstår noe abstrakt gjennom noe konkret.

### Metafor
En **metafor** er når vi sier at noe *er* noe annet:
- "Livet er en reise"
- "Kjærligheten er en rose"
- "Ordene hans var kniver"

### Sammenligning
En **sammenligning** bruker "som" eller "lik":
- "Hun løp som vinden"
- "Øynene var som stjerner"
- "Han var sterk lik en okse"

### Besjeling
**Besjeling** er når vi gir ting menneskelige egenskaper:
- "Trærne hvisket hemmeligheter"
- "Solen smilte"
- "Vinden sukket tungt"

### Symbol
Et **symbol** er noe konkret som står for noe abstrakt:
- Rosen = kjærlighet
- Duen = fred
- Høsten = alderdom eller død`,
    },
    {
      id: 'norsk-8-2-4-example-2',
      type: 'example',
      title: 'Eksempel: Bruke billedspråk',
      problem: `Hvordan kan vi beskrive "ensomhet" med billedspråk?`,
      solution: `**Metafor:**
"Ensomhet er et tomt rom"

**Sammenligning:**
"Han følte seg som en øy i havet"

**Besjeling:**
"Stillheten omfavnet ham"

**Symbol:**
En tom stol ved et bord kan symbolisere ensomhet.`,
    },

    // Oppgave 2
    {
      id: 'norsk-8-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Test din kunnskap om billedspråk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en metafor?',
            solution: 'En metafor er når vi sier at noe ER noe annet (uten å bruke "som").',
            multipleChoiceOptions: [
              'Når vi sier at noe ER noe annet',
              'Når vi bruker ordet "som"',
              'Når ting får menneskelige egenskaper',
              'Når vi bruker rim',
            ],
          },
          {
            label: 'b',
            task: '"Trærne danset i vinden" - hvilket virkemiddel er dette?',
            solution: 'Dette er besjeling fordi trærne får menneskelige egenskaper (å danse).',
            multipleChoiceOptions: [
              'Besjeling',
              'Metafor',
              'Sammenligning',
              'Symbol',
            ],
          },
          {
            label: 'c',
            task: '"Hun var rask som en gepard" - hvilket virkemiddel er dette?',
            solution: 'Dette er en sammenligning fordi det bruker ordet "som".',
            multipleChoiceOptions: [
              'Sammenligning',
              'Metafor',
              'Besjeling',
              'Symbol',
            ],
          },
        ],
        solution: 'Billedspråk gjør abstrakte ting konkrete og skaper bilder i hodet på leseren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 4: Rytme og gjentakelse =====
    {
      id: 'norsk-8-2-4-text-4',
      type: 'text',
      content: `## Rytme og gjentakelse

### Rytme
**Rytme** i dikt handler om vekslingen mellom trykksterke og trykksvake stavelser. Det gir diktet en musikalsk kvalitet.

Les dette høyt og legg merke til rytmen:
*DUM-di-DUM-di-DUM-di-DUM*
"Solen skinner, fugler synger"

### Gjentakelse
**Gjentakelse** er når ord, linjer eller strukturer gjentas. Det kan:
- Forsterke et budskap
- Skape rytme
- Binde diktet sammen

**Anafor** er gjentakelse av ord i starten av linjer:
*Jeg drømmer om sommer*
*Jeg drømmer om sol*
*Jeg drømmer om frihet*

**Refreng** er en hel strofe som gjentas.`,
    },
    {
      id: 'norsk-8-2-4-example-3',
      type: 'example',
      title: 'Eksempel: Dikt med anafor',
      problem: `Skriv et kort dikt med anafor (gjentakelse i starten av linjene).`,
      solution: `**Eksempel med "Hver dag":**

*Hver dag står solen opp*
*Hver dag begynner på nytt*
*Hver dag har muligheter*
*Hver dag er en gave*

Gjentakelsen av "Hver dag" skaper rytme og forsterker budskapet om at hver dag er verdifull.`,
    },

    // Oppgave 3
    {
      id: 'norsk-8-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Test din kunnskap om rytme og gjentakelse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er anafor?',
            solution: 'Anafor er gjentakelse av ord i starten av flere linjer.',
            multipleChoiceOptions: [
              'Gjentakelse av ord i starten av flere linjer',
              'Gjentakelse av rim',
              'En type metafor',
              'Når diktet ikke rimer',
            ],
          },
          {
            label: 'b',
            task: 'Hva er effekten av gjentakelse i dikt?',
            solution: 'Gjentakelse forsterker budskapet og skaper rytme.',
            multipleChoiceOptions: [
              'Forsterker budskapet og skaper rytme',
              'Gjør diktet kortere',
              'Fjerner rim',
              'Gjør diktet vanskeligere å forstå',
            ],
          },
          {
            label: 'c',
            task: 'Hva er et refreng?',
            solution: 'En hel strofe som gjentas flere ganger i diktet.',
            multipleChoiceOptions: [
              'En hel strofe som gjentas flere ganger',
              'Den første linjen i diktet',
              'Det siste ordet i hver linje',
              'Et dikt uten rim',
            ],
          },
        ],
        solution: 'Gjentakelse er et kraftfullt virkemiddel som skaper rytme og forsterker budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 5: Skriv ditt eget dikt =====
    {
      id: 'norsk-8-2-4-text-5',
      type: 'text',
      content: `## Tips for å skrive dikt

1. **Start med en følelse eller et bilde**
   Tenk på noe du føler sterkt for eller et bilde som fascinerer deg.

2. **Skriv fritt først**
   Ikke tenk på rim eller form med én gang. Bare skriv ned tankene dine.

3. **Velg form**
   Bestem om du vil bruke rim, frie vers, gjentakelse osv.

4. **Bruk sansene**
   Beskriv hva du ser, hører, lukter, smaker og føler.

5. **Rediger**
   Les diktet høyt. Fungerer rytmen? Kan noen ord byttes ut med sterkere ord?

6. **Vis, ikke fortell**
   I stedet for å skrive "jeg var trist", beskriv hvordan tristhet føles: "Regnet trommende mot ruten / matchet rytmen i mitt bryst"`,
    },
    {
      id: 'norsk-8-2-4-tip-2',
      type: 'tip',
      content: `**Enkle diktformer å starte med:**

**Haiku** (japansk form):
- 3 linjer
- 5-7-5 stavelser
- Ofte om natur

*Kirsebærtreet* (5)
*blomstrer i vårens lys* (7)
*kronblad faller ned* (5)

**Femlinjedikt (Limerick):**
- 5 linjer
- Rim: aabba
- Ofte humoristisk`,
    },

    // Oppgave 4 - Praktisk skriving
    {
      id: 'norsk-8-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et haiku-dikt (3 linjer med 5-7-5 stavelser) om en årstid.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en årstid og skriv ned tre ting du forbinder med den.',
            solution: 'For eksempel vinter: snø, kulde, stillhet.',
            multipleChoiceOptions: [
              'Skriv ned tre ting du forbinder med årstiden',
              'Skriv et helt dikt med én gang',
              'Kopier et dikt fra nettet',
              'Skriv bare navnet på årstiden',
            ],
          },
          {
            label: 'b',
            task: 'Skriv et haiku med 5-7-5 stavelser. Tell stavelsene nøye!',
            solution: 'Eksempel: "Hvite snøkrystall / danser mot den kalde jord / vinteren er her" (5-7-5)',
            multipleChoiceOptions: [
              'Skriv et haiku og tell stavelsene (5-7-5)',
              'Skriv et langt dikt',
              'Skriv et dikt som rimer',
              'Skriv bare én linje',
            ],
          },
          {
            label: 'c',
            task: 'Bruker diktet ditt noen form for billedspråk? Hvis ikke, prøv å legge til en metafor eller besjeling.',
            solution: 'For eksempel: "Solen smilte ned" (besjeling) eller "Sommeren er gull" (metafor).',
            multipleChoiceOptions: [
              'Identifiser eller legg til billedspråk',
              'Tell antall ord',
              'Fjern alle adjektiver',
              'Gjør diktet lengre',
            ],
          },
        ],
        hints: ['Tell stavelser ved å klappe rytmen', 'Bruk naturen som inspirasjon', 'Haiku handler ofte om et øyeblikk'],
        solution: 'Et godt haiku fanger et øyeblikk i naturen med presist språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5 - Større skriveoppgave
    {
      id: 'norsk-8-2-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-2-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv et dikt på minst 8 linjer om et av disse temaene: vennskap, ensomhet, drømmer eller natur. Bruk minst to av virkemidlene du har lært.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg tema og skriv diktet ditt.',
            solution: 'Diktet skal ha minst 8 linjer og handle om valgt tema.',
            multipleChoiceOptions: [
              'Skriv et dikt på minst 8 linjer om valgt tema',
              'Skriv bare overskriften',
              'Kopier et dikt',
              'Skriv en novelle',
            ],
          },
          {
            label: 'b',
            task: 'Hvilke virkemidler har du brukt? List dem opp og gi eksempler fra diktet.',
            solution: 'For eksempel: "Jeg brukte besjeling: \'Trærne hvisket\'" eller "Jeg brukte kryssrim".',
            multipleChoiceOptions: [
              'List opp virkemidlene og gi eksempler',
              'Skriv bare "rim"',
              'Ikke nevn virkemidler',
              'Skriv en analyse av andres dikt',
            ],
          },
          {
            label: 'c',
            task: 'Les diktet høyt for deg selv. Fungerer rytmen? Er det noen ord du vil bytte ut?',
            solution: 'Reflekter over lydkvaliteten og ordvalgene i diktet.',
            multipleChoiceOptions: [
              'Les høyt og reflekter over rytme og ordvalg',
              'Les stille og gjør ingen endringer',
              'La noen andre lese det',
              'Slett diktet og start på nytt',
            ],
          },
        ],
        hints: ['Start med å skrive fritt, rediger etterpå', 'Bruk sansene - hva ser, hører, føler du?', 'Les diktet høyt for å høre rytmen'],
        solution: 'Et godt dikt bruker språklige virkemidler bevisst for å skape stemning og formidle et budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: Dialekter og sosiolekter
// ============================================================================

export const CHAPTER_NORSK_8_3_4: TextbookChapter = {
  id: 'norsk-8-3-4',
  courseId: 'norsk-8',
  chapterNumber: '3.4',
  title: 'Dialekter og sosiolekter',
  description: 'Lær om språklig variasjon i Norge - hvordan vi snakker ulikt avhengig av hvor vi er fra og hvem vi er.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og reflektere over sammenhengen mellom språk og identitet',
    'sammenligne talespråk i nærmiljøet med andre talespråksvarianter i Norge',
  ],
  content: [
    // ===== DEL 1: Introduksjon =====
    {
      id: 'norsk-8-3-4-intro',
      type: 'text',
      content: `## Språklig mangfold i Norge

Norge er et lite land, men vi har et **enormt språklig mangfold**. Folk fra Bergen snakker annerledes enn folk fra Oslo, som snakker annerledes enn folk fra Trondheim eller Tromsø.

Dette språklige mangfoldet er en del av vår kulturarv og identitet. I dette kapittelet lærer du om:
- Hva dialekter er og hvorfor vi har dem
- Hva sosiolekter og etnolekter er
- Hvordan språk henger sammen med identitet
- Hvorfor det er viktig å ta vare på språklig mangfold`,
    },
    {
      id: 'norsk-8-3-4-def-1',
      type: 'definition',
      title: 'Dialekt',
      content: `En **dialekt** er en geografisk språkvariant - måten folk snakker på i et bestemt område. Dialekter varierer i:

- **Uttale:** Hvordan lyder uttales (f.eks. "jeg" vs. "eg" vs. "æ")
- **Ordforråd:** Ulike ord for samme ting (f.eks. "gutt" vs. "gut" vs. "gansen")
- **Grammatikk:** Ulike bøyningsformer (f.eks. "kastene" vs. "kastan" vs. "kastein")
- **Tonelag:** Musikalsk melodiføring i språket`,
    },

    // ===== DEL 2: Dialektområder =====
    {
      id: 'norsk-8-3-4-text-2',
      type: 'text',
      content: `## Dialektområder i Norge

Norge deles tradisjonelt inn i fire hovedområder for dialekter:

### 1. Østnorsk
- Oslo, Østlandet, deler av Trøndelag
- Kjennetegn: Tjukk L, retrofleks (sammensmelting av r+l, r+n osv.)
- "Jansen" uttales "Jansjansen"

### 2. Vestnorsk
- Vestlandet fra Rogaland til Møre og Romsdal
- Kjennetegn: Skarre-R, bevaring av gamle former
- Bergen: "Ikkje" i stedet for "ikke"

### 3. Trøndersk
- Trøndelag
- Kjennetegn: Apokope (bortfall av endelser), palatalisering
- "Være" blir "vårrå", "bakken" blir "bakken'" (med j-lyd)

### 4. Nordnorsk
- Nord-Norge fra Nordland til Finnmark
- Kjennetegn: E-mål, palatalisering, egen melodi
- "Eg" i stedet for "jeg"`,
    },
    {
      id: 'norsk-8-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Samme setning på ulike dialekter',
      problem: `Hvordan sier man "Jeg har ikke sett gutten i dag" på ulike dialekter?`,
      solution: `**Oslo (østnorsk):**
"Jeg har ikke sett gutten i dag"

**Bergen (vestnorsk):**
"Eg har ikkje sett guten i dag"

**Trondheim (trøndersk):**
"Æ har itj sett gutansen i dag"

**Tromsø (nordnorsk):**
"Eg har ikkje sett gansen i dag"

Legg merke til forskjellene i:
- Pronomen: jeg/eg/æ
- Nektingsord: ikke/ikkje/itj
- Substantiv: gutten/guten/gutansen/gansen`,
    },

    // Oppgave 1
    {
      id: 'norsk-8-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din kunnskap om norske dialekter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en dialekt?',
            solution: 'En dialekt er en geografisk språkvariant - måten folk snakker på i et bestemt område.',
            multipleChoiceOptions: [
              'En geografisk språkvariant knyttet til et område',
              'Et fremmedspråk',
              'En skriftlig variant av norsk',
              'Slang som ungdom bruker',
            ],
          },
          {
            label: 'b',
            task: 'Hvilket dialektområde er Bergen en del av?',
            solution: 'Bergen er en del av det vestnorske dialektområdet.',
            multipleChoiceOptions: [
              'Vestnorsk',
              'Østnorsk',
              'Trøndersk',
              'Nordnorsk',
            ],
          },
          {
            label: 'c',
            task: 'Hva betyr "apokope" i trønderdialekt?',
            solution: 'Apokope betyr bortfall av endelser, f.eks. "være" blir "vårrå".',
            multipleChoiceOptions: [
              'Bortfall av endelser',
              'En spesiell uttale av R',
              'Bruk av "eg" i stedet for "jeg"',
              'En type rim',
            ],
          },
        ],
        solution: 'Norge har fire hovedområder for dialekter: østnorsk, vestnorsk, trøndersk og nordnorsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 3: Sosiolekter =====
    {
      id: 'norsk-8-3-4-text-3',
      type: 'text',
      content: `## Sosiolekter - språk og sosial bakgrunn

Mens dialekter handler om *hvor* du er fra, handler **sosiolekter** om *hvem* du er og hvilke grupper du tilhører.

### Hva påvirker sosiolekter?
- **Alder:** Ungdom snakker annerledes enn eldre
- **Utdanning og yrke:** Fagspråk og sjargong
- **Sosial klasse:** Historisk skilte man mellom "fint" og "bredt" språk
- **Interesser:** Gaming-språk, musikksjangre, sport

### Eksempler på sosiolekter
**Ungdomsspråk:**
- "Cringe" (flaut)
- "Slay" (gjøre noe bra)
- "No cap" (sant)
- "Skipp" (hoppe over)

**Fagspråk:**
- Leger: "Pasienten presenterer med akutt abdomen"
- IT: "Vi må debugge koden og pushe til main"`,
    },
    {
      id: 'norsk-8-3-4-def-2',
      type: 'definition',
      title: 'Sosiolekt',
      content: `En **sosiolekt** er en språkvariant knyttet til sosiale grupper som alder, klasse, yrke eller interesser. Sosiolekter handler om hvordan vi tilpasser språket vårt til gruppen vi tilhører.`,
    },
    {
      id: 'norsk-8-3-4-note-1',
      type: 'note',
      content: `**Etnolekt**

En **etnolekt** er en språkvariant påvirket av flerkulturell bakgrunn. I Oslo kalles dette noen ganger "kebabnorsk" eller "multietnolett". Eksempler:
- "Wolla" (jeg sverger)
- "Ansen" (gutten)
- Spesiell intonasjon

Dette er en naturlig språkutvikling når mennesker med ulik bakgrunn møtes.`,
    },

    // Oppgave 2
    {
      id: 'norsk-8-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Test din kunnskap om sosiolekter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom dialekt og sosiolekt?',
            solution: 'Dialekt er knyttet til geografisk område, sosiolekt er knyttet til sosiale grupper.',
            multipleChoiceOptions: [
              'Dialekt er geografisk, sosiolekt er sosialt betinget',
              'Det er ingen forskjell',
              'Sosiolekt er skriftlig, dialekt er muntlig',
              'Dialekt brukes av unge, sosiolekt av eldre',
            ],
          },
          {
            label: 'b',
            task: 'Hva er et eksempel på ungdomsspråk?',
            solution: 'Ord som "cringe", "slay" eller "no cap" er eksempler på ungdomsspråk.',
            multipleChoiceOptions: [
              'Ord som "cringe", "slay" eller "no cap"',
              'Ord som "ikkje" og "eg"',
              'Ord som "pasienten presenterer"',
              'Ord som "god dag" og "på gjensyn"',
            ],
          },
          {
            label: 'c',
            task: 'Hva er en etnolekt?',
            solution: 'En språkvariant påvirket av flerkulturell bakgrunn.',
            multipleChoiceOptions: [
              'En språkvariant påvirket av flerkulturell bakgrunn',
              'En dialekt fra Øst-Norge',
              'Et fremmedspråk',
              'Skriftlig nynorsk',
            ],
          },
        ],
        solution: 'Sosiolekter viser hvordan språk varierer med sosial tilhørighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 4: Språk og identitet =====
    {
      id: 'norsk-8-3-4-text-4',
      type: 'text',
      content: `## Språk og identitet

Språket vårt er tett knyttet til **hvem vi er**. Dialekten din forteller hvor du kommer fra, og måten du snakker på kan signalisere hvilke grupper du tilhører.

### Kodeveksling
**Kodeveksling** er når vi tilpasser språket til situasjonen:
- Med venner: Uformelt, slang, dialekt
- På jobbintervju: Formelt, kanskje mer standard
- Med besteforeldre: Kanskje mindre slang

Dette er helt naturlig! Vi har ulike "språklige drakter" til ulike anledninger.

### Språkholdninger
Noen har negative holdninger til visse dialekter eller måter å snakke på. Dette kalles **språkfordommer**. For eksempel:
- Noen tror at østlandsk høres "finere" ut
- Andre mener at dialekter er "slurv"
- Ungdomsspråk blir ofte sett ned på

**Men alle språkvarianter er likeverdige!** Ingen dialekt eller sosiolekt er bedre enn andre - de er bare forskjellige.`,
    },
    {
      id: 'norsk-8-3-4-tip-1',
      type: 'tip',
      content: `**Ta vare på dialekten din!**

I Norge har vi en sterk tradisjon for å bruke dialekt i alle sammenhenger - også i media, på Stortinget og i akademia. Dette er unikt i verden!

Dialekten din er en del av identiteten din og kulturarven fra hjemstedet ditt. Du trenger ikke legge bort dialekten for å bli tatt seriøst.`,
    },

    // Oppgave 3
    {
      id: 'norsk-8-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Reflekter over språk og identitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er kodeveksling?',
            solution: 'Kodeveksling er å tilpasse språket til situasjonen - formelt på jobb, uformelt med venner.',
            multipleChoiceOptions: [
              'Å tilpasse språket til situasjonen',
              'Å snakke flere språk samtidig',
              'Å bruke hemmelige koder',
              'Å bytte dialekt permanent',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor kodeveksler vi?',
            solution: 'Fordi ulike situasjoner krever ulike språklige "drakter" - vi tilpasser oss mottakeren og konteksten.',
            multipleChoiceOptions: [
              'Fordi ulike situasjoner krever ulike språkstiler',
              'Fordi vi ikke husker dialekten vår',
              'Fordi det er påbudt ved lov',
              'Fordi vi vil imponere andre',
            ],
          },
          {
            label: 'c',
            task: 'Er noen dialekter "bedre" enn andre?',
            solution: 'Nei, alle språkvarianter er likeverdige. Språkfordommer er holdninger uten vitenskapelig grunnlag.',
            multipleChoiceOptions: [
              'Nei, alle språkvarianter er likeverdige',
              'Ja, østlandsk er best',
              'Ja, nynorskdialekter er best',
              'Ja, bydialekter er bedre enn bygdedialekter',
            ],
          },
        ],
        solution: 'Alle dialekter og sosiolekter er likeverdige uttrykk for norsk språk og kultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 5: Praktiske oppgaver =====
    {
      id: 'norsk-8-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Utforsk din egen dialekt og språkbruk.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv dialekten der du bor. Hvilke særtrekk har den? (uttale, ordforråd, grammatikk)',
            solution: 'Beskriv konkrete trekk ved din lokale dialekt med eksempler.',
            multipleChoiceOptions: [
              'Beskriv konkrete trekk med eksempler',
              'Skriv bare "vi snakker normalt"',
              'Kopier fra Wikipedia',
              'Skriv om en annen dialekt',
            ],
          },
          {
            label: 'b',
            task: 'Finnes det dialektord på hjemstedet ditt som folk fra andre steder ikke forstår? Gi eksempler.',
            solution: 'Gi eksempler på lokale ord og forklar hva de betyr.',
            multipleChoiceOptions: [
              'Gi eksempler på lokale ord og forklar betydningen',
              'Skriv at alle forstår alt',
              'Bruk engelske ord',
              'Skriv om slang',
            ],
          },
          {
            label: 'c',
            task: 'Kodeveksler du? Snakker du annerledes med venner enn med lærere eller foreldre? Forklar.',
            solution: 'Reflekter over hvordan du tilpasser språket i ulike situasjoner.',
            multipleChoiceOptions: [
              'Reflekter over egen språkbruk i ulike situasjoner',
              'Svar bare ja eller nei',
              'Skriv om andre',
              'Ignorer spørsmålet',
            ],
          },
        ],
        hints: ['Tenk på ord familien din bruker', 'Sammenlign med språket i Oslo-baserte TV-programmer', 'Legg merke til hvordan du snakker i ulike situasjoner'],
        solution: 'Gjennom å reflektere over egen språkbruk blir vi mer bevisste på språklig mangfold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'norsk-8-3-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-3-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign dialekter fra ulike deler av Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn et klipp på YouTube eller NRK der noen snakker en dialekt som er annerledes enn din. Hvilken dialekt er det?',
            solution: 'Identifiser dialekten og dialektområdet.',
            multipleChoiceOptions: [
              'Identifiser dialekten og dialektområdet',
              'Finn et klipp på engelsk',
              'Ikke se på noe klipp',
              'Bare skriv "bergensk"',
            ],
          },
          {
            label: 'b',
            task: 'Hvilke forskjeller hører du mellom denne dialekten og din egen? Nevn minst tre.',
            solution: 'Beskriv konkrete forskjeller i uttale, ord eller grammatikk.',
            multipleChoiceOptions: [
              'Beskriv minst tre konkrete forskjeller',
              'Skriv at de snakker rart',
              'Kopier fra læreboken',
              'Skriv at det ikke er noen forskjeller',
            ],
          },
          {
            label: 'c',
            task: 'Var det noe du ikke forsto? Hvordan løste du det?',
            solution: 'Reflekter over forståelse og eventuelle strategier for å forstå ukjente dialektord.',
            multipleChoiceOptions: [
              'Reflekter over forståelse og strategier',
              'Skriv at du forsto alt',
              'Skriv at dialekten var dum',
              'Ikke svar på spørsmålet',
            ],
          },
        ],
        hints: ['NRK har program fra hele landet', 'Prøv å søke på "bergensk", "trønderdialekt" eller "nordlandsk"', 'Gjett ut fra konteksten hvis noe er uklart'],
        solution: 'Ved å lytte til ulike dialekter utvikler vi forståelse for språklig mangfold i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3: Samisk språk og kultur
// ============================================================================

export const CHAPTER_NORSK_8_5_3: TextbookChapter = {
  id: 'norsk-8-5-3',
  courseId: 'norsk-8',
  chapterNumber: '5.3',
  title: 'Samisk språk og kultur',
  description: 'Lær om samiske språk, kultur og historie som en viktig del av Norges kulturarv.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og presentere samisk og norsk språkhistorie',
    'lese tekster fra samiske forfatterskap og reflektere over innhold og form',
  ],
  content: [
    // ===== DEL 1: Introduksjon =====
    {
      id: 'norsk-8-5-3-intro',
      type: 'text',
      content: `## Samene - Norges urfolk

**Samene** er urfolket i Norge, Sverige, Finland og Russland. De har bodd i disse områdene i tusenvis av år - lenge før landegrensene ble trukket.

I dag bor det rundt 40 000-50 000 samer i Norge, og samisk språk og kultur er en viktig del av norsk kulturarv. Siden 1989 har Grunnloven slått fast at staten skal legge til rette for at samene kan sikre og utvikle sitt språk, sin kultur og sitt samfunnsliv.

**Sápmi** er det samiske navnet på det samiske bosetningsområdet, som strekker seg over fire land.`,
    },
    {
      id: 'norsk-8-5-3-note-1',
      type: 'note',
      content: `**Samefolkets dag**

6. februar er **samefolkets dag** og feires i hele Sápmi. Datoen markerer det første samiske landsmøtet som ble holdt i Trondheim i 1917. På denne dagen heises det samiske flagget over hele Norge, og skoler markerer dagen med aktiviteter om samisk kultur.`,
    },

    // ===== DEL 2: Samiske språk =====
    {
      id: 'norsk-8-5-3-text-2',
      type: 'text',
      content: `## Samiske språk

Det finnes **ti forskjellige samiske språk**, hvorav tre snakkes i Norge:

### 1. Nordsamisk
- Det største samiske språket
- Ca. 25 000 brukere totalt
- Snakkes i Finnmark, Troms og Nord-Sverige

### 2. Lulesamisk
- Ca. 2 000 brukere
- Snakkes rundt Tysfjord og svensk Lappland

### 3. Sørsamisk
- Ca. 500-1000 brukere
- Snakkes i Trøndelag og Nord-Sverige

De samiske språkene tilhører den **finsk-ugriske språkfamilien**, sammen med finsk, estisk og ungarsk. De er altså **ikke** i slekt med norsk, som tilhører den germanske språkfamilien.`,
    },
    {
      id: 'norsk-8-5-3-def-1',
      type: 'definition',
      title: 'Samiske ord på norsk',
      content: `Flere norske ord kommer fra samisk:

- **Tundra** - treløst landskap
- **Vidda** - fra samisk "duottar" (fjellvidde)
- **Pulk** - en type slede
- **Lavvo** - samisk telt

Mange stedsnavn i Nord-Norge har samisk opprinnelse, for eksempel:
- Tromsø (fra "Romsa")
- Kautokeino (fra "Guovdageaidnu")
- Karasjok (fra "Kárášjohka")`,
    },
    {
      id: 'norsk-8-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Nordsamisk',
      problem: `Hvordan ser nordsamisk ut sammenlignet med norsk?`,
      solution: `**Norsk:** "Hei, hvordan har du det?"
**Nordsamisk:** "Bures, mo manná?"

**Norsk:** "Jeg heter Sara"
**Nordsamisk:** "Mu namma lea Sara"

**Noen grunnleggende ord:**
- Bures = Hei
- Giitu = Takk
- Mun = Jeg
- Don = Du

Legg merke til at samisk bruker bokstaver som ikke finnes på norsk: á, č, đ, ŋ, š, ŧ, ž`,
    },

    // Oppgave 1
    {
      id: 'norsk-8-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din kunnskap om samiske språk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange samiske språk finnes det totalt?',
            solution: 'Det finnes ti forskjellige samiske språk.',
            multipleChoiceOptions: [
              'Ti',
              'Ett',
              'Tre',
              'Fem',
            ],
          },
          {
            label: 'b',
            task: 'Hvilken språkfamilie tilhører samisk?',
            solution: 'Samisk tilhører den finsk-ugriske språkfamilien.',
            multipleChoiceOptions: [
              'Den finsk-ugriske språkfamilien',
              'Den germanske språkfamilien',
              'Den romanske språkfamilien',
              'Den slaviske språkfamilien',
            ],
          },
          {
            label: 'c',
            task: 'Hvilket samisk språk har flest brukere?',
            solution: 'Nordsamisk er det største samiske språket med ca. 25 000 brukere.',
            multipleChoiceOptions: [
              'Nordsamisk',
              'Sørsamisk',
              'Lulesamisk',
              'Enaresamisk',
            ],
          },
        ],
        solution: 'De samiske språkene er en viktig del av norsk språklig mangfold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 3: Samisk kultur =====
    {
      id: 'norsk-8-5-3-text-3',
      type: 'text',
      content: `## Samisk kultur og tradisjoner

### Reindrift
Reindrift er en viktig del av samisk kultur og næringsliv. Rundt 3 000 samer er involvert i reindrift i Norge. Reindriften er en bærekraftig utnyttelse av naturressursene i nord og er en viktig kulturbærer.

### Duodji - samisk kunsthåndverk
**Duodji** er samisk kunsthåndverk med lange tradisjoner:
- Knivsmaking (med reinhorn og bjørkenever)
- Sying av kofter (tradisjonelle drakter)
- Veving og perling
- Trearbeid

### Joik
**Joik** er den tradisjonelle samiske sangformen. Joiken er unik fordi:
- Man joiker ikke *om* noe, man joiker noe (en person, et dyr, et sted)
- Joiken skal fremkalle den man joiker
- Tradisjonelt ble joik sett på som noe hellig

I dag blander mange samiske artister joik med moderne musikk. Kjente artister som **Mari Boine**, **Sofia Jannok** og **Jon Henrik Fjällgren** har gjort joik kjent internasjonalt.

### Kofta
**Kofta** (gákti på samisk) er den tradisjonelle samiske drakten. Utformingen varierer fra område til område og viser hvor bæreren kommer fra. Kofta brukes ved spesielle anledninger som konfirmasjon, bryllup og samiske festdager.`,
    },
    {
      id: 'norsk-8-5-3-tip-1',
      type: 'tip',
      content: `**Moderne samisk kultur**

Samisk kultur er levende og utvikler seg stadig! I dag finner du:
- **Samiske artister** som blander tradisjon med pop, rock og elektronisk musikk
- **Samiske forfattere** som skriver romaner, dikt og barnebøker
- **Samiske filmer** og TV-serier (som NRK-serien "Reinflokken")
- **Samisk design** som bruker tradisjonelle mønstre på moderne måter`,
    },

    // Oppgave 2
    {
      id: 'norsk-8-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Test din kunnskap om samisk kultur.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er duodji?',
            solution: 'Duodji er samisk kunsthåndverk med lange tradisjoner.',
            multipleChoiceOptions: [
              'Samisk kunsthåndverk',
              'En type mat',
              'Et musikkinstrument',
              'Et samisk språk',
            ],
          },
          {
            label: 'b',
            task: 'Hva er spesielt med joik?',
            solution: 'Man joiker ikke om noe, man joiker noe - joiken skal fremkalle det man joiker.',
            multipleChoiceOptions: [
              'Man joiker ikke om noe, man joiker noe',
              'Det er alltid på engelsk',
              'Det synges bare av kvinner',
              'Det bruker alltid instrumenter',
            ],
          },
          {
            label: 'c',
            task: 'Hva er en kofte (gákti)?',
            solution: 'Det er den tradisjonelle samiske drakten, og utformingen viser hvor bæreren kommer fra.',
            multipleChoiceOptions: [
              'Den tradisjonelle samiske drakten',
              'En type mat',
              'Et reinskinn',
              'En sangtype',
            ],
          },
        ],
        solution: 'Samisk kultur er rik og variert, med sterke tradisjoner som fortsatt lever i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 4: Fornorsking og forsoning =====
    {
      id: 'norsk-8-5-3-text-4',
      type: 'text',
      content: `## Fornorsking - en mørk periode

Fra slutten av 1800-tallet til 1960-årene førte den norske staten en **fornorskingspolitikk** mot samene. Målet var å få samene til å slutte å snakke samisk og bli "norske".

### Hva skjedde?
- Samiske barn ble sendt på **internatskoler** langt fra hjemmet
- De fikk **forbud mot å snakke samisk** på skolen
- Barna ble straffet hvis de snakket morsmålet sitt
- Samiske stedsnavn ble byttet ut med norske
- For å kjøpe jord måtte man kunne snakke norsk

### Konsekvenser
- Mange samer mistet språket sitt
- Mange følte skam over å være samisk
- Kultur og tradisjoner gikk tapt
- Traumer som har gått i arv

### Forsoning
I 2018 opprettet Stortinget **Sannhets- og forsoningskommisjonen** for å granske fornorskingspolitikken. I 2023 la kommisjonen fram sin rapport. Den viste omfanget av uretten som ble begått, og kom med anbefalinger for veien videre.

Kong Harald har bedt om unnskyldning på vegne av staten for fornorskingspolitikken.`,
    },
    {
      id: 'norsk-8-5-3-warning-1',
      type: 'warning',
      title: 'Viktig å huske',
      content: `Fornorskingspolitikken var **statlig undertrykkelse** av en minoritet. Det var ikke samenes feil at de mistet språket - de ble tvunget til det.

I dag jobber mange med å **revitalisere** (gjenopplive) de samiske språkene. Flere og flere lærer samisk, og det finnes samiske barnehager, skoler og medier.`,
    },

    // Oppgave 3
    {
      id: 'norsk-8-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Reflekter over fornorskingspolitikken.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var fornorskingspolitikken?',
            solution: 'En politikk der staten prøvde å få samene til å slutte å snakke samisk og bli "norske".',
            multipleChoiceOptions: [
              'Statlig politikk for å fjerne samisk språk og kultur',
              'En politikk for å støtte samisk språk',
              'En utveksling mellom norske og samiske skoler',
              'En feiring av samisk kultur',
            ],
          },
          {
            label: 'b',
            task: 'Hva skjedde med samiske barn på internatskolen?',
            solution: 'De ble sendt langt fra hjemmet og fikk ikke lov til å snakke samisk.',
            multipleChoiceOptions: [
              'De ble sendt bort og fikk forbud mot å snakke samisk',
              'De lærte både norsk og samisk',
              'De fikk bare samisk undervisning',
              'De bodde hjemme hos foreldrene',
            ],
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig at vi lærer om dette?',
            solution: 'For å forstå historien, unngå å gjenta feil, og støtte arbeidet med å revitalisere samisk språk og kultur.',
            multipleChoiceOptions: [
              'For å forstå historien og støtte revitalisering av samisk',
              'Det er ikke viktig',
              'Bare for de som er samiske',
              'For å kritisere tidligere generasjoner',
            ],
          },
        ],
        solution: 'Ved å lære om fornorskingspolitikken kan vi bidra til forsoning og støtte samisk språk og kultur i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 5: Samisk litteratur =====
    {
      id: 'norsk-8-5-3-text-5',
      type: 'text',
      content: `## Samisk litteratur

Samene har en rik muntlig fortellertradisjon med myter, sagn og eventyr. Den skriftlige litteraturen er nyere, men har vokst kraftig de siste tiårene.

### Noen viktige samiske forfattere

**Nils-Aslak Valkeapää (1943-2001)**
- Kalles ofte "samenes nasjonalskald"
- Skrev dikt, joiket og lagde kunst
- Kombinerte tradisjon og modernisme

**Marry Ailonieida Somby (1953-)**
- Forfatter og joiker
- Skriver for barn og voksne

**Sigbjørn Skåden (1976-)**
- Skriver romaner og dikt
- Oversatt til mange språk

**Inga Ravna Eira**
- Moderne samisk forfatter
- Skriver om samisk hverdag og identitet`,
    },
    {
      id: 'norsk-8-5-3-example-2',
      type: 'example',
      title: 'Eksempel: Dikt av Nils-Aslak Valkeapää',
      problem: `Les dette utdraget fra "Beaivi, Áhčážan" (Solen, min far) av Nils-Aslak Valkeapää og tenk over hva det handler om.`,
      solution: `**Utdrag (oversatt til norsk):**
*"i mine ører*
*suset av mine forfedres blod*
*som finner vei tilbake*
*gjennom tidene"*

**Tolkning:**
- Diktet handler om **tilhørighet** og **røtter**
- Forfedrenes blod representerer arv og tradisjon
- Å "finne vei tilbake" handler om å koble seg til sin historie
- Diktet uttrykker samisk identitet og stolthet

Valkeapää kombinerer ofte naturbilder med refleksjoner om identitet, historie og tilhørighet til Sápmi.`,
    },

    // Oppgave 4
    {
      id: 'norsk-8-5-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Utforsk samisk kultur på egenhånd.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn og lytt til en joik (søk på "Mari Boine", "Jon Henrik Fjällgren" eller "joik" på YouTube/Spotify). Beskriv hvordan musikken høres ut.',
            solution: 'Beskriv lydbildet - melodi, rytme, stemmebruk, følelser som formidles.',
            multipleChoiceOptions: [
              'Beskriv melodi, rytme, stemmebruk og følelser',
              'Bare skriv artistens navn',
              'Skriv at du ikke likte det',
              'Kopier teksten fra nettet',
            ],
          },
          {
            label: 'b',
            task: 'Finn et samisk stedsnavn i nærheten av der du bor (eller et sted du kjenner). Hva betyr navnet?',
            solution: 'Mange steder i Nord-Norge har samiske navn - undersøk betydningen.',
            multipleChoiceOptions: [
              'Finn et samisk stedsnavn og undersøk betydningen',
              'Skriv et norsk stedsnavn',
              'Finn på et eget navn',
              'Skriv at det ikke finnes samiske navn',
            ],
          },
          {
            label: 'c',
            task: 'Hva kan du og andre gjøre for å støtte samisk språk og kultur?',
            solution: 'Eksempler: Lære om kulturen, feire samefolkets dag, respektere samiske rettigheter, lytte til samisk musikk.',
            multipleChoiceOptions: [
              'Foreslå konkrete måter å støtte samisk kultur på',
              'Skriv at det ikke er nødvendig',
              'Skriv at det er myndighetenes ansvar',
              'Ignorer spørsmålet',
            ],
          },
        ],
        hints: ['NRK Sápmi har mye innhold på samisk', 'Samefolkets dag 6. februar er en god anledning til å lære mer', 'Mange biblioteker har bøker av samiske forfattere'],
        solution: 'Ved å utforske samisk kultur aktivt bidrar vi til å holde den levende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.1: Sammensatte tekster
// ============================================================================

export const CHAPTER_NORSK_8_6_1: TextbookChapter = {
  id: 'norsk-8-6-1',
  courseId: 'norsk-8',
  chapterNumber: '6.1',
  title: 'Sammensatte tekster',
  description: 'Lær å analysere og lage tekster som kombinerer ord, bilder, lyd og video.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lage sammensatte tekster og vurdere hvordan ulike uttrykksformer virker sammen',
    'bruke fagspråk til å beskrive sammensatte tekster',
  ],
  content: [
    // ===== DEL 1: Introduksjon =====
    {
      id: 'norsk-8-6-1-intro',
      type: 'text',
      content: `## Hva er sammensatte tekster?

I dag møter vi sjelden tekster som bare består av ord. De fleste tekstene vi leser og ser, kombinerer flere **modaliteter** (uttrykksformer):

- **Verbalspråk:** Skrift eller tale
- **Bilder:** Fotografier, illustrasjoner, diagrammer
- **Lyd:** Musikk, lydeffekter, stemmer
- **Video:** Levende bilder
- **Design:** Farger, typografi, layout

Tekster som kombinerer flere av disse kalles **sammensatte tekster** eller **multimodale tekster**.

**Eksempler på sammensatte tekster:**
- Nettsider
- Reklame
- Nyhetsartikler på nett
- YouTube-videoer
- Sosiale medier-innlegg
- Filmer og TV-serier
- Lærebøker`,
    },
    {
      id: 'norsk-8-6-1-def-1',
      type: 'definition',
      title: 'Modalitet',
      content: `En **modalitet** er en uttrykksform eller en måte å kommunisere på. De vanligste modalitetene er:

- **Verbal modalitet:** Skriftlig eller muntlig språk
- **Visuell modalitet:** Bilder, farger, design
- **Auditiv modalitet:** Lyd, musikk
- **Spatial modalitet:** Rom og plassering
- **Gestural modalitet:** Kroppsspråk, bevegelse`,
    },

    // ===== DEL 2: Samspill mellom modaliteter =====
    {
      id: 'norsk-8-6-1-text-2',
      type: 'text',
      content: `## Samspill mellom modaliteter

I sammensatte tekster jobber de ulike modalitetene sammen. Det er viktig å forstå hvordan de påvirker hverandre.

### Forsterkning
Modalitetene sier det samme og **forsterker** budskapet.
- Eksempel: Et bilde av en solnedgang + teksten "Vakker kveld"

### Utfylling
Modalitetene **utfyller** hverandre med ulik informasjon.
- Eksempel: Et bilde viser hvem, teksten forteller hva som skjedde

### Motsigelse
Modalitetene **motsier** hverandre for å skape ironi eller humor.
- Eksempel: Bilde av kaos + teksten "Alt under kontroll"

### Forankring
Teksten **forankrer** bildet - forteller oss hvordan vi skal tolke det.
- Eksempel: Et bilde av en person kan tolkes ulikt avhengig av bildeteksten`,
    },
    {
      id: 'norsk-8-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av en reklame',
      problem: `Analyser denne tenkte reklamen for en sjokolade:

**Bilde:** En ung kvinne tar en bit sjokolade, med øynene lukket og et lykkelig uttrykk.
**Tekst:** "Øyeblikk av ren lykke"
**Farger:** Gylne, varme toner
**Musikk (hvis video):** Myk, romantisk piano`,
      solution: `**Analyse:**

**Visuell modalitet (bilde):**
- Kvinnens ansiktsuttrykk signaliserer nytelse
- Lukkede øyne antyder at hun "forsvinner" inn i øyeblikket
- Fokus på ansiktet skaper intimitet

**Verbal modalitet (tekst):**
- "Øyeblikk" - fremhever at dette er noe spesielt
- "Ren lykke" - knytter produktet til positive følelser
- Teksten forankrer bildet: Dette handler om lykke

**Farger:**
- Gylne toner signaliserer varme, luksus, velvære
- Skaper en drømmende stemning

**Samspill:**
- Alle modalitetene **forsterker** samme budskap: Sjokoladen gir deg lykkelige øyeblikk
- Teksten **forankrer** bildet: Vi skal tolke det som lykke
- Reklamen appellerer til **følelser (patos)**, ikke fornuft`,
    },

    // Oppgave 1
    {
      id: 'norsk-8-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din kunnskap om sammensatte tekster.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en sammensatt (multimodal) tekst?',
            solution: 'En tekst som kombinerer flere uttrykksformer, som ord, bilder, lyd eller video.',
            multipleChoiceOptions: [
              'En tekst som kombinerer flere uttrykksformer',
              'En veldig lang tekst',
              'En tekst skrevet av flere forfattere',
              'En tekst på flere språk',
            ],
          },
          {
            label: 'b',
            task: 'Hva betyr det at modaliteter "forsterker" hverandre?',
            solution: 'At de sier det samme og gjør budskapet sterkere.',
            multipleChoiceOptions: [
              'At de sier det samme og gjør budskapet sterkere',
              'At de motsier hverandre',
              'At de er på forskjellige språk',
              'At de er laget av ulike personer',
            ],
          },
          {
            label: 'c',
            task: 'Hva betyr "forankring" i sammensatte tekster?',
            solution: 'At teksten forteller oss hvordan vi skal tolke bildet.',
            multipleChoiceOptions: [
              'At teksten forteller oss hvordan vi skal tolke bildet',
              'At teksten er festet til bunnen av siden',
              'At bildene er store',
              'At teksten kommer før bildet',
            ],
          },
        ],
        solution: 'I sammensatte tekster jobber ulike uttrykksformer sammen for å skape mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 3: Bilder i tekster =====
    {
      id: 'norsk-8-6-1-text-3',
      type: 'text',
      content: `## Bilder i tekster

### Typer bilder
- **Fotografier:** Dokumenterer virkeligheten (eller ser ut som det)
- **Illustrasjoner:** Tegninger, malerier, grafikk
- **Diagrammer:** Visualiserer data eller prosesser
- **Ikoner:** Forenklede symboler (som emojis)

### Bildets retorikk
Bilder kan påvirke oss på ulike måter:

**Kameravinkler:**
- **Fugleperspektiv** (ovenfra): Gjør motivet lite, sårbart
- **Froskeperspektiv** (nedenfra): Gjør motivet stort, mektig
- **Normalperspektiv:** Nøytralt, på øyehøyde

**Utsnitt:**
- **Nært:** Viser følelser, detaljer, intimitet
- **Halvtotalt:** Viser person og omgivelser
- **Totalt:** Viser hele scenen, miljøet

**Farger:**
- Varme farger (rød, oransje, gul): Energi, varme, fare
- Kalde farger (blå, grønn): Ro, natur, tristhet
- Svart-hvitt: Seriøsitet, nostalgi, drama`,
    },
    {
      id: 'norsk-8-6-1-tip-1',
      type: 'tip',
      content: `**Spørsmål å stille når du analyserer bilder:**

1. Hva ser jeg? (Denotasjon - det bokstavelige)
2. Hva betyr det? (Konnotasjon - assosiasjoner)
3. Hvordan påvirker vinkel og utsnitt opplevelsen?
4. Hvilke farger dominerer, og hva signaliserer de?
5. Hvordan samspiller bildet med teksten?`,
    },

    // Oppgave 2
    {
      id: 'norsk-8-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Test din kunnskap om bilder.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva signaliserer et froskeperspektiv (vinkel nedenfra og opp)?',
            solution: 'At motivet virker stort, mektig eller truende.',
            multipleChoiceOptions: [
              'At motivet virker stort og mektig',
              'At motivet virker lite og sårbart',
              'At motivet er nøytralt',
              'At bildet er gammelt',
            ],
          },
          {
            label: 'b',
            task: 'Hva er effekten av et nært utsnitt (close-up)?',
            solution: 'Det viser følelser og detaljer, og skaper intimitet.',
            multipleChoiceOptions: [
              'Viser følelser og skaper intimitet',
              'Viser hele miljøet',
              'Gjør bildet uskarpt',
              'Viser mange personer',
            ],
          },
          {
            label: 'c',
            task: 'Hva assosierer vi ofte med blå farger?',
            solution: 'Ro, kulde, tristhet, hav og himmel.',
            multipleChoiceOptions: [
              'Ro, kulde, tristhet, hav og himmel',
              'Energi, varme og fare',
              'Natur og vekst',
              'Luksus og rikdom',
            ],
          },
        ],
        solution: 'Bilder kommuniserer mye gjennom vinkel, utsnitt og farger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 4: Digitale tekster =====
    {
      id: 'norsk-8-6-1-text-4',
      type: 'text',
      content: `## Digitale tekster

Digitale tekster har spesielle egenskaper som skiller dem fra trykte tekster:

### Hypertekst
**Hypertekst** er tekst med **lenker** som fører til annet innhold. Dette betyr at:
- Leseren kan velge sin egen lesevei
- Teksten er ikke-lineær (du trenger ikke lese fra A til Å)
- Innholdet kan være uendelig stort

### Interaktivitet
Digitale tekster kan være **interaktive**:
- Du kan klikke, scrolle, dra og slippe
- Du kan kommentere og dele
- Innholdet kan tilpasses deg (algoritmer)

### Sosiale medier
På sosiale medier er tekstene ekstra sammensatte:
- Tekst + bilde + emojis + hashtags + lenker
- Kommentarer og reaksjoner blir en del av teksten
- Konteksten (hvem som deler) påvirker tolkningen`,
    },
    {
      id: 'norsk-8-6-1-warning-1',
      type: 'warning',
      title: 'Vær kritisk til digitale tekster',
      content: `På nett kan hvem som helst publisere hva som helst. Vær oppmerksom på:
- **Hvem** står bak innholdet?
- **Hvorfor** er det publisert?
- Er det **reklame** forkledd som innhold?
- Kan jeg **verifisere** informasjonen andre steder?

Husk det du lærte om kildekritikk!`,
    },

    // Oppgave 3
    {
      id: 'norsk-8-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Test din kunnskap om digitale tekster.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hypertekst?',
            solution: 'Tekst med lenker som fører til annet innhold.',
            multipleChoiceOptions: [
              'Tekst med lenker til annet innhold',
              'Veldig lang tekst',
              'Tekst med store bokstaver',
              'Tekst som beveger seg',
            ],
          },
          {
            label: 'b',
            task: 'Hva gjør digitale tekster interaktive?',
            solution: 'At du kan klikke, scrolle, kommentere og påvirke innholdet.',
            multipleChoiceOptions: [
              'At du kan klikke, scrolle og kommentere',
              'At de har bilder',
              'At de er på internett',
              'At de er lange',
            ],
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig å være kritisk til innhold på sosiale medier?',
            solution: 'Fordi hvem som helst kan publisere, og innhold kan være reklame eller feilinformasjon.',
            multipleChoiceOptions: [
              'Fordi hvem som helst kan publisere og det kan være reklame',
              'Fordi det tar lang tid å lese',
              'Fordi det alltid er sant',
              'Fordi det er kjedelig',
            ],
          },
        ],
        solution: 'Digitale tekster krever nye lesestrategier og kritisk tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ===== DEL 5: Lag din egen sammensatte tekst =====
    {
      id: 'norsk-8-6-1-text-5',
      type: 'text',
      content: `## Lag din egen sammensatte tekst

Når du lager en sammensatt tekst, tenk gjennom:

1. **Hva er budskapet?** Hva vil du formidle?
2. **Hvem er mottakeren?** Hvem skal lese/se dette?
3. **Hvilke modaliteter passer?** Tekst, bilde, video, lyd?
4. **Hvordan skal modalitetene samspille?** Forsterke, utfylle?
5. **Hvilket medium?** Plakat, nettside, video, presentasjon?

### Tips for god design
- **Hold det enkelt:** Ikke bruk for mange elementer
- **Hierarki:** Det viktigste bør være mest synlig
- **Kontrast:** Viktige elementer skal skille seg ut
- **Konsistens:** Bruk samme stil gjennom hele teksten
- **Hvitrom:** Gi elementene plass til å "puste"`,
    },

    // Oppgave 4
    {
      id: 'norsk-8-6-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser en selvvalgt sammensatt tekst (reklame, nettside, Instagram-innlegg eller lignende).',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv teksten: Hva er det for en tekst, og hvilke modaliteter brukes?',
            solution: 'Identifiser tekst, bilde, farger, layout og eventuelle andre elementer.',
            multipleChoiceOptions: [
              'Identifiser alle modalitetene som brukes',
              'Bare beskriv bildene',
              'Bare les teksten',
              'Tell antall ord',
            ],
          },
          {
            label: 'b',
            task: 'Hvordan samspiller modalitetene? Forsterker de hverandre, eller utfyller de?',
            solution: 'Forklar hvordan de ulike elementene jobber sammen for å skape mening.',
            multipleChoiceOptions: [
              'Forklar hvordan elementene jobber sammen',
              'Si bare at de er fine',
              'List opp fargene',
              'Beskriv bare teksten',
            ],
          },
          {
            label: 'c',
            task: 'Hva er budskapet, og hvem er målgruppen? Hvordan vet du det?',
            solution: 'Analyser hvem teksten henvender seg til og hva den prøver å formidle.',
            multipleChoiceOptions: [
              'Analyser budskap og målgruppe med begrunnelse',
              'Gjett hvem som laget den',
              'Si at du ikke vet',
              'Bare skriv hva bildet viser',
            ],
          },
          {
            label: 'd',
            task: 'Er teksten effektiv? Fungerer den godt for formålet sitt?',
            solution: 'Vurder om teksten kommuniserer godt med målgruppen.',
            multipleChoiceOptions: [
              'Vurder om teksten kommuniserer godt med målgruppen',
              'Si bare ja eller nei',
              'Tell antall elementer',
              'Beskriv dine følelser',
            ],
          },
        ],
        hints: ['Velg en reklame eller et innlegg du har sett nylig', 'Bruk begreper som forsterkning, utfylling, forankring', 'Tenk på hvem teksten er laget for'],
        solution: 'En god analyse av sammensatte tekster viser hvordan ulike elementer samspiller for å skape mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'norsk-8-6-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-8-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en egen sammensatt tekst: En plakat, et innlegg for sosiale medier, eller en presentasjonsside.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg tema og format: Hva vil du lage, og hva skal budskapet være?',
            solution: 'Velg et tema du bryr deg om og et format som passer.',
            multipleChoiceOptions: [
              'Velg tema og format med tydelig budskap',
              'Bare tegn noe tilfeldig',
              'Kopier noe fra nettet',
              'Skriv bare tekst',
            ],
          },
          {
            label: 'b',
            task: 'Lag teksten med minst to modaliteter (f.eks. tekst og bilde).',
            solution: 'Kombiner ulike uttrykksformer som jobber sammen.',
            multipleChoiceOptions: [
              'Kombiner minst to modaliteter som jobber sammen',
              'Bruk bare tekst',
              'Bruk bare bilder',
              'Kopier en ferdig tekst',
            ],
          },
          {
            label: 'c',
            task: 'Forklar valgene dine: Hvorfor valgte du disse elementene, og hvordan samspiller de?',
            solution: 'Reflekter over designvalgene og hvordan de støtter budskapet.',
            multipleChoiceOptions: [
              'Forklar designvalg og samspill mellom elementene',
              'Ikke forklar noe',
              'Si bare at det er pent',
              'Beskriv bare fargene',
            ],
          },
        ],
        hints: ['Tenk på målgruppen din', 'Mindre er ofte mer - ikke bruk for mange elementer', 'Sørg for at tekst og bilde jobber sammen'],
        solution: 'En god sammensatt tekst har et klart budskap der alle elementene støtter hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const NORSK_8_CHAPTERS = [
  CHAPTER_NORSK_8_1_1,
  CHAPTER_NORSK_8_1_2,
  CHAPTER_NORSK_8_1_3,
  CHAPTER_NORSK_8_1_4,
  CHAPTER_NORSK_8_2_1,
  CHAPTER_NORSK_8_2_2,
  CHAPTER_NORSK_8_2_3,
  CHAPTER_NORSK_8_2_4,
  CHAPTER_NORSK_8_3_1,
  CHAPTER_NORSK_8_3_2,
  CHAPTER_NORSK_8_3_3,
  CHAPTER_NORSK_8_3_4,
  CHAPTER_NORSK_8_4_1,
  CHAPTER_NORSK_8_4_2,
  CHAPTER_NORSK_8_5_1,
  CHAPTER_NORSK_8_5_2,
  CHAPTER_NORSK_8_5_3,
  CHAPTER_NORSK_8_6_1,
];
