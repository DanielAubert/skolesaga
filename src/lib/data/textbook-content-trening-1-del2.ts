/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Treningslære 1 (VG2) – Seksjon 2: Kroppens anatomi
 * Kapittel 2.1–2.5
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Skjelettsystemet
// ============================================================================

export const CHAPTER_TRENING_1_2_1: TextbookChapter = {
  id: 'trening-1-2-1',
  courseId: 'trening-1',
  chapterNumber: '2.1',
  title: 'Skjelettsystemet',
  description: 'Lær om beintyper, leddtyper, og forskjellen mellom aksialt og appendikulært skjelett.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kjenne til skjelettets oppbygning og funksjon',
    'kunne skille mellom ulike beintyper og leddtyper',
    'forstå forskjellen mellom aksialt og appendikulært skjelett',
  ],
  content: [
    {
      id: 'tr-2-1-intro',
      type: 'text',
      content: `# Skjelettsystemet

Skjelettet er kroppens indre rammeverk. Det gir oss form, beskytter vitale organer og fungerer som festepunkt for musklene slik at vi kan bevege oss. Uten skjelettet ville kroppen vært en formløs masse uten evne til å stå oppreist eller utføre bevegelse.

Det menneskelige skjelettet består av omtrent 206 knokler hos en voksen person. Hos barn og ungdom er antallet høyere fordi mange bein ennå ikke er vokst sammen. Skjelettet er et levende vev som kontinuerlig brytes ned og bygges opp gjennom hele livet.

I treningslære er det viktig å forstå skjelettsystemet fordi det legger grunnlaget for all bevegelse. Kjennskap til beintyper, leddtyper og skjelettets inndeling hjelper oss med å forstå hvorfor bestemte øvelser virker på bestemte måter, og hvordan vi kan trene trygt.`,
    },
    {
      id: 'tr-2-1-def1',
      type: 'definition',
      title: 'Skjelettet',
      content: 'Skjelettet er kroppens indre støttestruktur bestående av ca. 206 knokler hos voksne. Det har fem hovedfunksjoner: støtte, beskyttelse av organer, bevegelse (som festepunkt for muskler), produksjon av blodceller i benmargen, og lagring av mineraler som kalsium og fosfor.',
    },
    {
      id: 'tr-2-1-text1',
      type: 'text',
      title: 'Beintyper',
      content: `Knoklene i kroppen kan deles inn i fire hovedtyper basert på form og funksjon:

**1. Rørknoller (lange knokler)**
- Lengre enn de er brede
- Har et rørformet skaft (diafyse) og to ender (epifyser)
- Fungerer som heftstenger og spaker for musklene
- Eksempler: Lårbeinet (femur), overarmsbeinet (humerus), leggbeinet (tibia)

**2. Korte knokler**
- Omtrent like lange som de er brede
- Gir stabilitet med noe bevegelse
- Eksempler: Håndrotsknokler, fotrotsknokler

**3. Flate knokler**
- Tynne og brede
- Beskytter indre organer og gir festepunkt for muskler
- Eksempler: Skallens knokler, brystbeinet, skulderbladene, bekkenbeinet

**4. Uregelmessige knokler**
- Har komplekse former som ikke passer i de andre kategoriene
- Eksempler: Ryggvirvler, ansiktsknokler, hoftebeinet`,
    },
    {
      id: 'tr-2-1-def2',
      type: 'definition',
      title: 'Diafyse og epifyse',
      content: 'Diafysen er det rørformede skaftet på en lang knokkel, og består av kompakt beinvev som gir styrke. Epifysene er de to endene av knoklen, dekket av brusk, og inneholder svampaktig beinvev som absorberer støt. Hos unge mennesker finnes epifyseskiven (vekstskiven) mellom diafyse og epifyse, der lengdeveksten foregår.',
    },
    {
      id: 'tr-2-1-text2',
      type: 'text',
      title: 'Aksialt og appendikulært skjelett',
      content: `Skjelettet deles inn i to hoveddeler:

**Aksialt skjelett (akseskjelettet)**
Utgjør kroppens sentrale akse og består av:
- **Hodeskallen** (22 knokler) – beskytter hjernen og sanseorganene
- **Ryggsøylen** (33 ryggvirvler fordelt på 7 nakkevirvler, 12 brystvirvler, 5 lendevirvler, 5 sammenvokste korsbeinsvirvler og 4 halebeinsvirvler) – bærer kroppen og beskytter ryggmargen
- **Brystkassen** (12 par ribbein og brystbeinet) – beskytter hjerte og lunger

**Appendikulært skjelett (vedhengskjelettet)**
Omfatter lemmene og bindeleddene til akseskjelettet:
- **Skulderbuen** (kragebeinet og skulderbladet) – kobler armene til overkroppen
- **Overekstremitetene** – overarmsbeinet, underarmsbeina, håndrot, mellomhånd, fingre
- **Bekkenet** – kobler beina til overkroppen, beskytter organer i underlivet
- **Underekstremitetene** – lårbeinet, kneskålen, leggbeina, fotrot, mellomfot, tær

Det aksiale skjelettet gir stabilitet og beskyttelse, mens det appendikulære skjelettet gir mobilitet og bevegelsesfrihet.`,
    },
    {
      id: 'tr-2-1-note1',
      type: 'note',
      title: 'Beinvev er levende',
      content: 'Beinvev er et dynamisk, levende vev som stadig remodelleres. Osteoblaster bygger nytt beinvev, mens osteoklaster bryter ned gammelt beinvev. Fysisk belastning stimulerer beinoppbygging, og det er en viktig grunn til at styrketrening og vektbærende aktiviteter anbefales for å forebygge beinskjørhet (osteoporose).',
    },
    {
      id: 'tr-2-1-example1',
      type: 'example',
      title: 'Klassifisering av knokler',
      problem: 'Klassifiser følgende knokler etter type: lårbeinet, en ryggvirvel, skulderbladet og en håndrotsknokkel.',
      solution: `- **Lårbeinet (femur)**: Rørknokkel – lang, rørformet, fungerer som spak for bevegelse
- **Ryggvirvel**: Uregelmessig knokkel – har en kompleks form tilpasset beskyttelse av ryggmargen og festepunkt for muskler
- **Skulderbladet (scapula)**: Flat knokkel – bred og flat, gir festepunkt for skuldermuskulatur
- **Håndrotsknokkel**: Kort knokkel – omtrent kubisk form, gir stabilitet med noe bevegelighet`,
    },
    {
      id: 'tr-2-1-text3',
      type: 'text',
      title: 'Ryggsøylens kurvaturer',
      content: `Ryggsøylen har fire naturlige kurver sett fra siden, som gir den en S-form. Disse kurvene er viktige for å fordele belastning og absorbere støt:

- **Cervikallordose** (nakken) – buer fremover
- **Thorakalkyfose** (brystdelen) – buer bakover
- **Lumbarlordose** (korsryggen) – buer fremover
- **Sakralkyfose** (korsbeinet) – buer bakover

Mellom hver ryggvirvel ligger det en mellomvirvelskive (diskus) som fungerer som støtdemper og tillater bevegelse. God holdning og kjernetrening bidrar til å bevare ryggsøylens naturlige kurver og forebygge ryggplager.`,
    },
    {
      id: 'tr-2-1-tip1',
      type: 'tip',
      title: 'Husk aksialt vs. appendikulært',
      content: 'En enkel huskeregel: Det aksiale skjelettet er «aksen» kroppen roterer rundt (hode, ryggsøyle, brystkasse). Det appendikulære skjelettet er alt som «henger ved» aksen (armer, bein, skulderbue, bekken).',
    },
    {
      id: 'tr-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr-2-1-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvor mange knokler har et voksent menneskeskjelett?',
        options: [
          { id: 'a', text: 'Ca. 150', isCorrect: false },
          { id: 'b', text: 'Ca. 206', isCorrect: true },
          { id: 'c', text: 'Ca. 300', isCorrect: false },
          { id: 'd', text: 'Ca. 100', isCorrect: false },
        ],
        hints: ['Barn har flere knokler fordi mange ennå ikke er vokst sammen.'],
        solution: 'Et voksent menneskeskjelett har omtrent 206 knokler. Barn har flere fordi mange knokler ennå ikke er fusjonert.',
      },
    },
    {
      id: 'tr-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr-2-1-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken beintype er lårbeinet (femur)?',
        options: [
          { id: 'a', text: 'Flat knokkel', isCorrect: false },
          { id: 'b', text: 'Kort knokkel', isCorrect: false },
          { id: 'c', text: 'Rørknokkel (lang knokkel)', isCorrect: true },
          { id: 'd', text: 'Uregelmessig knokkel', isCorrect: false },
        ],
        solution: 'Lårbeinet er en rørknokkel (lang knokkel). Det er den lengste og sterkeste knoklen i kroppen, og fungerer som spak for bevegelse i hofteleddet og kneleddet.',
      },
    },
    {
      id: 'tr-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom aksialt og appendikulært skjelett.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke deler av kroppen tilhører det aksiale skjelettet?',
            solution: 'Hodeskallen, ryggsøylen og brystkassen (ribbein og brystbein)',
            multipleChoiceOptions: [
              'Hodeskallen, ryggsøylen og brystkassen',
              'Armene og beina',
              'Skulderbuen og bekkenet',
              'Hender og føtter',
            ],
          },
          {
            label: 'b',
            task: 'Hva er hovedfunksjonen til det appendikulære skjelettet?',
            solution: 'Det appendikulære skjelettet gir mobilitet og bevegelsesfrihet, og omfatter armer, bein, skulderbue og bekken.',
          },
        ],
        solution: 'Det aksiale skjelettet utgjør kroppens sentrale akse og gir stabilitet og beskyttelse. Det appendikulære skjelettet er lemmene og deres forbindelse til aksen, og gir mobilitet.',
      },
    },
    {
      id: 'tr-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr-2-1-ex4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvor mange ryggvirvler har ryggsøylen totalt?',
        options: [
          { id: 'a', text: '24', isCorrect: false },
          { id: 'b', text: '26', isCorrect: false },
          { id: 'c', text: '33', isCorrect: true },
          { id: 'd', text: '40', isCorrect: false },
        ],
        solution: 'Ryggsøylen har totalt 33 ryggvirvler: 7 nakkevirvler, 12 brystvirvler, 5 lendevirvler, 5 sammenvokste korsbeinsvirvler og 4 halebeinsvirvler.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-2-1-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr-2-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Lag en oversikt der du plasserer følgende knokler i riktig kategori: lårbeinet, hodeskallen, en håndrotsknokkel, en ryggvirvel, overarmsbeinet, brystbeinet. Bruk kategoriene rørknokkel, flat knokkel, kort knokkel og uregelmessig knokkel.',
        solution: 'Rørknokler: lårbeinet, overarmsbeinet. Flate knokler: hodeskallen (de flate delene), brystbeinet. Korte knokler: håndrotsknokkel. Uregelmessige knokler: ryggvirvel. Denne inndelingen baseres på beinets form og funksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-2-1-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr-2-1-ex6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor vektbærende trening er viktig for beinhelsa. Bruk begrepene osteoblaster, osteoklaster og remodellering i svaret ditt.',
        solution: 'Beinvev er levende og gjennomgår stadig remodellering der osteoklaster bryter ned gammelt beinvev og osteoblaster bygger nytt. Vektbærende trening stimulerer osteoblastene til å bygge mer beinvev enn det som brytes ned, noe som gir sterkere og tettere bein. Uten tilstrekkelig belastning dominerer nedbrytningen, og beina kan bli svakere og mer utsatt for brudd. Derfor anbefales styrketrening og aktiviteter som løping og hopping for å forebygge osteoporose.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.2: Muskelsystemet
// ============================================================================

export const CHAPTER_TRENING_1_2_2: TextbookChapter = {
  id: 'trening-1-2-2',
  courseId: 'trening-1',
  chapterNumber: '2.2',
  title: 'Muskelsystemet',
  description: 'Lær om muskeltyper, muskelfibertyper (type I og type II) og mekanismene bak muskelkontraksjon.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kjenne til de tre muskeltypene og deres funksjoner',
    'forstå forskjellen mellom type I og type II muskelfibre',
    'kunne forklare hovedprinsippene for muskelkontraksjon',
  ],
  content: [
    {
      id: 'tr-2-2-intro',
      type: 'text',
      content: `# Muskelsystemet

Musklene er kroppens motor. De gjør det mulig for oss å bevege oss, opprettholde kroppsholdning, puste, pumpe blod og fordøye mat. Kroppen har over 600 skjelettmuskler, og de utgjør 40-50 % av kroppsvekten.

For å forstå trening og treningseffekter er det avgjørende å kjenne til hvordan musklene er bygget opp, hvordan de fungerer, og hvilke typer muskelfibre som finnes. Ulike treningsformer påvirker ulike fibertyper, og dette har stor betydning for valg av treningsmetoder og forventet resultat.`,
    },
    {
      id: 'tr-2-2-def1',
      type: 'definition',
      title: 'De tre muskeltypene',
      content: 'Kroppen har tre typer muskelvev: (1) Skjelettmuskulatur – viljestyrt muskulatur festet til skjelettet via sener, som utfører bevegelse. (2) Glatt muskulatur – uviljestyrt muskulatur i blodårer, tarmer og andre indre organer. (3) Hjertemuskulatur – spesialisert uviljestyrt muskulatur som finnes kun i hjertet og pumper blod gjennom kroppen.',
    },
    {
      id: 'tr-2-2-text1',
      type: 'text',
      title: 'Skjelettmuskulaturen i detalj',
      content: `Skjelettmuskulaturen er den vi primært fokuserer på i treningslære. Den er viljestyrt, noe som betyr at vi bevisst kan velge å aktivere den.

**Muskelens oppbygning – fra stort til smått:**

1. **Muskelen** – hele muskelen, omgitt av en bindevevshinne (epimysium)
2. **Muskelbunter (fasikler)** – grupper av muskelfibre, omgitt av perimysium
3. **Muskelfibre** – enkeltceller som er lange, flerkjernede og striede
4. **Myofibriller** – kontraktile tråder inne i muskelfibrene
5. **Sarkomerer** – den minste funksjonelle enheten, bygget opp av aktin og myosin

**Festepunkter:**
Muskler er festet til bein via **sener**. Hvert festepunkt har et navn:
- **Origo** – det mer stabile festepunktet (nærmest kroppens sentrum)
- **Insertio** – det mer bevegelige festepunktet (lengre fra sentrum)

Når muskelen kontraherer, trekkes insertio mot origo, og det oppstår bevegelse i leddet mellom dem.`,
    },
    {
      id: 'tr-2-2-def2',
      type: 'definition',
      title: 'Sarkomer',
      content: 'Sarkomeren er den minste funksjonelle enheten i en muskelfiber. Den er bygget opp av to typer proteinfilamenter: aktin (tynne filamenter) og myosin (tykke filamenter). Når disse glir over hverandre under kontraksjon, forkortes sarkomeren og dermed hele muskelen.',
    },
    {
      id: 'tr-2-2-text2',
      type: 'text',
      title: 'Muskelkontraksjon – glidetrådsmodellen',
      content: `Muskelkontraksjon skjer gjennom det som kalles **glidetrådsmodellen** (sliding filament theory):

**Steg for steg:**

1. **Nervesignal** – Hjernen sender et signal via motoriske nerver til muskelen
2. **Kalsiumfrigjøring** – Signalet utløser frigjøring av kalsium fra sarkoplasmatisk retikulum
3. **Binding** – Kalsium gjør at myosinhodene kan binde seg til aktinfilamentene
4. **Kraftslag** – Myosinhodene vinkler og drar aktinfilamentene mot midten av sarkomeren
5. **Løsning** – ATP (energi) gjør at myosinhodet slipper og klargjøres for et nytt kraftslag
6. **Repetisjon** – Prosessen gjentas så lenge nervesignalet og ATP er tilgjengelig

Denne prosessen krever energi i form av **ATP** (adenosintrifosfat). Uten ATP kan ikke muskelen verken kontraheres eller slappes av – dette er grunnen til at muskelstivhet oppstår etter døden (rigor mortis).`,
    },
    {
      id: 'tr-2-2-text3',
      type: 'text',
      title: 'Kontraksjonstyper',
      content: `Muskelkontraksjoner deles inn i tre hovedtyper:

**1. Konsentrisk kontraksjon**
- Muskelen forkortes mens den produserer kraft
- Eksempel: Bøying av albuen i en bicepscurl (vei opp)

**2. Eksentrisk kontraksjon**
- Muskelen forlenges mens den bremser en bevegelse
- Eksempel: Kontrollert senking av vekten i en bicepscurl (vei ned)
- Gir størst mekanisk belastning på muskelen

**3. Isometrisk kontraksjon**
- Muskelen produserer kraft uten å endre lengde
- Eksempel: Å holde en planke, eller holde en vekt stille

Eksentrisk trening er spesielt effektivt for å bygge styrke og muskelmasse, men gir også mest muskelstølhet (DOMS – Delayed Onset Muscle Soreness).`,
    },
    {
      id: 'tr-2-2-note1',
      type: 'note',
      title: 'Motorisk enhet',
      content: 'En motorisk enhet består av én motorisk nervecelle og alle muskelfibrene den styrer. Små muskler som øyemuskulaturen har motoriske enheter med få fibre (fin kontroll), mens store muskler som quadriceps har motoriske enheter med mange fibre (grov kraft). Trening forbedrer hjernens evne til å rekruttere motoriske enheter effektivt.',
    },
    {
      id: 'tr-2-2-text4',
      type: 'text',
      title: 'Muskelfibertyper',
      content: `Muskelfibrene deles inn i to hovedgrupper med en mellomtype:

**Type I – Langsomme, oksidative fibre (røde fibre)**
- Kontraherer langsomt, men er svært utholdende
- Rikt innhold av mitokondrier og myoglobin (gir rød farge)
- God kapillærtilførsel
- Bruker primært fett og oksygen for energiproduksjon (aerob)
- Dominerer i: langdistanseløping, sykling, svømming

**Type IIa – Raske, oksidative fibre (mellomfibre)**
- Kombinerer egenskaper fra type I og type IIx
- Relativt utholdende og relativt kraftige
- Kan tilpasse seg i begge retninger avhengig av trening
- Bruker både fett og karbohydrater

**Type IIx – Raske, glykolytiske fibre (hvite fibre)**
- Kontraherer raskt og med stor kraft
- Få mitokondrier, lite myoglobin
- Trettes raskt
- Bruker primært karbohydrater (anaerob glykolyse)
- Dominerer i: sprint, hopp, kast, tunge løft

**Genetikk vs. trening:**
Fordelingen av fibertyper er delvis genetisk bestemt, men trening kan endre fibrenes egenskaper. Utholdenhetstrening kan gjøre type IIa-fibre mer oksidative, mens styrketrening kan gjøre dem mer glykolytiske. Type IIx-fibre kan konverteres til type IIa, men konvertering mellom type I og type II er svært begrenset.`,
    },
    {
      id: 'tr-2-2-example1',
      type: 'example',
      title: 'Fibertyper i praksis',
      problem: 'En sprinter og en maratonløper har svært ulike prestasjoner. Forklar dette ut fra muskelfibertyper.',
      solution: `**Sprinteren** har sannsynligvis en høy andel type IIx-fibre (raske, glykolytiske). Disse fibrene kontraherer raskt og kraftig, noe som gir eksplosiv fart over korte distanser. Ulempene er at de trettes raskt fordi de primært bruker anaerob energiomsetning.

**Maratonløperen** har sannsynligvis en høy andel type I-fibre (langsomme, oksidative). Disse fibrene er svært utholdende fordi de bruker aerob energiomsetning med fett som hovedenergikilde. De kontraherer langsommere, men kan opprettholde arbeid over lang tid.

Denne forskjellen er delvis genetisk (medfødt fibertypefordeling) og delvis et resultat av mange års spesialisert trening som har forsterket egenskapene til de dominerende fibertypene.`,
    },
    {
      id: 'tr-2-2-warning1',
      type: 'warning',
      title: 'DOMS – muskelstølhet',
      content: 'Forsinket muskelstølhet (DOMS) oppstår vanligvis 24-72 timer etter uvant eller intens trening, spesielt etter eksentrisk belastning. Det skyldes mikroskopiske skader i muskelfibrene og påfølgende betennelsesreaksjon. DOMS er normalt og går over av seg selv, men man bør ikke forveksle det med skade. Let aktivitet kan lindre ubehaget.',
    },
    {
      id: 'tr-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr-2-2-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken muskeltype er viljestyrt og festet til skjelettet?',
        options: [
          { id: 'a', text: 'Glatt muskulatur', isCorrect: false },
          { id: 'b', text: 'Hjertemuskulatur', isCorrect: false },
          { id: 'c', text: 'Skjelettmuskulatur', isCorrect: true },
          { id: 'd', text: 'Bindevev', isCorrect: false },
        ],
        solution: 'Skjelettmuskulatur er den eneste muskeltypene som er viljestyrt. Den er festet til skjelettet via sener og styres bevisst gjennom nervesystemet.',
      },
    },
    {
      id: 'tr-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr-2-2-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner type IIx muskelfibre?',
        options: [
          { id: 'a', text: 'Langsomme, utholdende og rike på mitokondrier', isCorrect: false },
          { id: 'b', text: 'Raske, kraftige, men trettes fort', isCorrect: true },
          { id: 'c', text: 'En mellomting som kan tilpasse seg i begge retninger', isCorrect: false },
          { id: 'd', text: 'Finnes kun i hjertet', isCorrect: false },
        ],
        hints: ['Tenk på hva en sprinter trenger fra musklene sine.'],
        solution: 'Type IIx-fibre er raske og glykolytiske. De kontraherer kraftig og raskt, men trettes fort fordi de primært bruker anaerob energiomsetning.',
      },
    },
    {
      id: 'tr-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar glidetrådsmodellen for muskelkontraksjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke to proteinfilamenter er involvert i glidetrådsmodellen?',
            solution: 'Aktin (tynne filamenter) og myosin (tykke filamenter)',
            multipleChoiceOptions: [
              'Aktin og myosin',
              'Kollagen og elastin',
              'Hemoglobin og myoglobin',
              'Keratin og fibrin',
            ],
          },
          {
            label: 'b',
            task: 'Hvilken rolle spiller kalsium i muskelkontraksjonen?',
            solution: 'Kalsium frigjøres fra sarkoplasmatisk retikulum når nervesignalet når muskelen. Det gjør at myosinhodene kan binde seg til aktinfilamentene og sette i gang kontraksjonen.',
          },
        ],
        solution: 'I glidetrådsmodellen glir aktin- og myosinfilamentene over hverandre, drevet av energi fra ATP. Prosessen starter med et nervesignal, kalsiumfrigjøring, binding mellom myosin og aktin, kraftslag, og repetisjon.',
      },
    },
    {
      id: 'tr-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr-2-2-ex4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva kalles det når muskelen forlenges mens den bremser en bevegelse?',
        options: [
          { id: 'a', text: 'Konsentrisk kontraksjon', isCorrect: false },
          { id: 'b', text: 'Eksentrisk kontraksjon', isCorrect: true },
          { id: 'c', text: 'Isometrisk kontraksjon', isCorrect: false },
          { id: 'd', text: 'Dynamisk kontraksjon', isCorrect: false },
        ],
        solution: 'Eksentrisk kontraksjon er når muskelen produserer kraft mens den forlenges. Et typisk eksempel er den kontrollerte nedbremsingen av vekten i en bicepscurl.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-2-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr-2-2-ex5',
        number: '5',
        type: 'classic',
        task: 'En fotballspiller trenger både utholdenhet og eksplosivitet. Forklar hvilke muskelfibertyper som er viktige for en fotballspiller, og hvordan trening kan påvirke disse.',
        solution: 'En fotballspiller trenger en god blanding av fibertyper. Type I-fibre er viktige for å holde ut en hel kamp (90 min). Type IIa-fibre trengs for gjentatte sprinter og retningsforandringer. Type IIx-fibre er viktige for eksplosive sprinter og hopp. Gjennom variert trening – kombinasjon av utholdenhetstrening og styrke-/sprinttrening – kan fotballspilleren utvikle type IIa-fibrene til å bli mer allsidige, og forbedre rekrutteringen av alle fibertyper.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-2-2-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr-2-2-ex6',
        number: '6',
        type: 'classic',
        task: 'Gi et eksempel på en øvelse der alle tre kontraksjonstypene (konsentrisk, eksentrisk og isometrisk) forekommer. Beskriv hvilken fase som er hvilken.',
        solution: 'Eksempel: Knebøy. Konsentrisk fase: Når du reiser deg opp fra bunnposisjon – quadriceps forkortes. Eksentrisk fase: Når du senker deg ned – quadriceps forlenges kontrollert. Isometrisk fase: Hvis du holder posisjonen i et kort øyeblikk i bunnposisjon uten å bevege deg. Et annet eksempel er pull-ups: konsentrisk opp, isometrisk hold øverst, eksentrisk kontrollert ned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-2-2-ex7',
      type: 'exercise',
      exercise: {
        id: 'tr-2-2-ex7',
        number: '7',
        type: 'classic',
        task: 'Beskriv muskelens oppbygning fra helhet til minste funksjonelle enhet. Bruk begrepene muskel, fasikkel, muskelfiber, myofibrill og sarkomer.',
        solution: 'En muskel (f.eks. biceps) er omgitt av en bindevevshinne (epimysium). Inne i muskelen finnes muskelbunter kalt fasikler, omgitt av perimysium. Hver fasikkel inneholder mange muskelfibre – enkeltceller som er lange og flerkjernede. Inne i hver muskelfiber finnes myofibriller, som er kontraktile tråder. Myofibrillene er bygget opp av sarkomerer, den minste funksjonelle enheten, som inneholder proteinfilamentene aktin og myosin. Når sarkomerene forkortes gjennom glidetrådsmekanismen, kontraherer hele muskelen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.3: Kroppens store muskelgrupper
// ============================================================================

export const CHAPTER_TRENING_1_2_3: TextbookChapter = {
  id: 'trening-1-2-3',
  courseId: 'trening-1',
  chapterNumber: '2.3',
  title: 'Kroppens store muskelgrupper',
  description: 'Få oversikt over de viktigste muskelgruppene i overkropp, bål og underkropp, deres funksjoner og relevante treningsøvelser.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kunne navngi og lokalisere kroppens store muskelgrupper',
    'forstå funksjonen til de viktigste muskelgruppene',
    'kunne koble muskelgrupper til relevante treningsøvelser',
  ],
  content: [
    {
      id: 'tr-2-3-intro',
      type: 'text',
      content: `# Kroppens store muskelgrupper

For å kunne planlegge effektiv trening, må du vite hvilke muskler som finnes, hva de gjør, og hvilke øvelser som aktiverer dem. I dette kapittelet tar vi en systematisk gjennomgang av kroppens store muskelgrupper, delt inn i overkropp, bål (kjerne) og underkropp.

Kjennskap til muskelgruppene gjør deg i stand til å forstå treningsprogrammer, velge riktige øvelser for dine mål, og sikre at du trener hele kroppen balansert. Ubalanse mellom muskelgrupper er en vanlig årsak til skader og dårlig holdning.`,
    },
    {
      id: 'tr-2-3-text1',
      type: 'text',
      title: 'Overkroppens muskler',
      content: `**Brystmuskulaturen (pectoralis)**
- **Pectoralis major** (store brystmuskelen) – adduksjon og innadrotasjon av overarmen
- **Pectoralis minor** (lille brystmuskelen) – trekker skuldrene fremover og nedover
- Øvelser: Benkpress, push-ups, flyes, brystpress i maskin

**Ryggmuskulaturen**
- **Latissimus dorsi** (brede ryggmuskelen) – trekker armen ned og bakover, kroppens bredeste muskel
- **Trapezius** (kappemuskelen) – løfter, trekker sammen og senker skuldrene
- **Rhomboidene** – trekker skulderblad mot hverandre
- Øvelser: Roing, pull-ups, lat pulldown, ansiktstrekk

**Skuldermuskulaturen (deltoideus)**
- Delt i tre deler: fremre, midtre og bakre del
- Abdukterer (løfter) armen ut fra kroppen
- Viktig for stabilitet og bevegelse i skulderleddet
- Øvelser: Skulderpress, sidehev, fronthev, facepulls

**Armmuskulaturen**
- **Biceps brachii** – bøyer albuen og supinerer (vrir) underarmen
- **Triceps brachii** – strekker albuen (utgjør 2/3 av overarmen)
- **Underarmsmuskulatur** – gripestyrke, håndleddsbevegelser
- Øvelser: Bicepscurl, tricepspress, hammer curl, håndleddsøvelser`,
    },
    {
      id: 'tr-2-3-def1',
      type: 'definition',
      title: 'Agonist og antagonist',
      content: 'Agonisten er den muskelen som utfører en bevegelse (primærbeveger). Antagonisten er muskelen som gjør den motsatte bevegelsen og bremser agonisten. For eksempel: Når biceps bøyer albuen (agonist), er triceps antagonisten. Når triceps strekker albuen (agonist), er biceps antagonisten. Balansert trening av agonist-antagonist-par er viktig for å forebygge skader.',
    },
    {
      id: 'tr-2-3-text2',
      type: 'text',
      title: 'Bålmuskulaturen (kjernemuskulaturen)',
      content: `Bålmuskulaturen, ofte kalt «kjernemuskulaturen» eller «core», er sentral for stabilitet, holdning og kraftoverføring mellom over- og underkropp.

**Magemuskulaturen**
- **Rectus abdominis** (rette bukmuskel) – bøyer overkroppen fremover (fleksjon)
- **Obliquus externus og internus** (ytre og indre skrå bukmuskel) – rotasjon og sidebøyning
- **Transversus abdominis** (tverrgående bukmuskel) – stabiliserer ryggsøylen som et «naturlig korsett»
- Øvelser: Planke, crunches, russian twists, palloff press, dead bugs

**Ryggstrekkerene (erector spinae)**
- Løper langs hele ryggsøylen
- Holder ryggen rett og strekker overkroppen
- Øvelser: Ryggstrekk, good mornings, markløft

**Hoftebøyerne (iliopsoas)**
- Bøyer hofta – løfter kneet mot brystet
- Viktige for gange, løping og sparkbevegelser
- Kan bli forkortede ved mye sitting

En sterk kjerne er fundamentet for all annen trening og daglige bevegelser. Svak kjernemuskulatur er en vanlig årsak til ryggplager.`,
    },
    {
      id: 'tr-2-3-example1',
      type: 'example',
      title: 'Agonist–antagonist i praksis',
      problem: 'Identifiser agonist og antagonist i en bicepscurl og en knebøy.',
      solution: `**Bicepscurl (bøye albuen):**
- Agonist: Biceps brachii (utfører bøyingen)
- Antagonist: Triceps brachii (motstander som bremser strekk)

**Knebøy (strekke kneet fra bøyd posisjon):**
- Agonist: Quadriceps (strekker kneet)
- Antagonist: Hamstrings (bøyer kneet, bremser strekkbevegelsen)

I begge tilfeller samarbeider agonist og antagonist for å gi kontrollert bevegelse. Synergisters (hjelpemuskler) bidrar også, for eksempel brachialis og brachioradialis under bicepscurl.`,
    },
    {
      id: 'tr-2-3-text3',
      type: 'text',
      title: 'Underkroppens muskler',
      content: `**Setemusklaturen (gluteus)**
- **Gluteus maximus** – kroppens største muskel, strekker hofta
- **Gluteus medius og minimus** – stabiliserer bekkenet og abdukterer hofta
- Øvelser: Knebøy, utfall, hip thrusts, romansk markløft

**Lårets forside (quadriceps)**
- Fire muskelhoder som strekker kneet
- Viktig for å gå, løpe, hoppe og sparke
- Øvelser: Knebøy, beinpress, utfall, leg extension

**Lårets bakside (hamstrings)**
- Tre muskler som bøyer kneet og strekker hofta
- Viktig for sprint, hopp og bremsing
- Øvelser: Romansk markløft, leg curl, nordic hamstring

**Innerlår (adduktorer)**
- Trekker beinet inn mot midtlinjen (adduksjon)
- Viktig for stabilitet og retningsforandringer
- Øvelser: Adduktormaskinen, sumo-knebøy, sideutfall

**Leggmuskulaturen**
- **Gastrocnemius** (ytre leggmuskel) – plantarfleksjon (hælen opp)
- **Soleus** (indre leggmuskel) – plantarfleksjon, viktig for utholdende stående aktivitet
- Øvelser: Tåhev stående, tåhev sittende, hopp`,
    },
    {
      id: 'tr-2-3-note1',
      type: 'note',
      title: 'Balanser treningen',
      content: 'Det er viktig å trene kroppen balansert. Mange fokuserer for mye på «speilmusklene» (bryst, biceps, mage) og glemmer ryggen, hamstrings og setemuskulatur. Ubalanse mellom muskelgrupper fører til dårlig holdning, økt skaderisiko og nedsatt prestasjon. En tommelfingerregel er å trene like mye trekk som trykk, og like mye forside som bakside.',
    },
    {
      id: 'tr-2-3-tip1',
      type: 'tip',
      title: 'Sammensatte vs. isolasjonsøvelser',
      content: 'Sammensatte øvelser (knebøy, markløft, benkpress, roing) aktiverer mange muskelgrupper samtidig og er svært tidseffektive. Isolasjonsøvelser (bicepscurl, leg extension, sidehev) retter seg mot én muskelgruppe og brukes for å rette opp ubalanser eller bygge en spesifikk muskel. Et godt treningsprogram inneholder begge deler, med sammensatte øvelser som grunnstammen.',
    },
    {
      id: 'tr-2-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr-2-3-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken muskel er kroppens største?',
        options: [
          { id: 'a', text: 'Quadriceps', isCorrect: false },
          { id: 'b', text: 'Latissimus dorsi', isCorrect: false },
          { id: 'c', text: 'Gluteus maximus', isCorrect: true },
          { id: 'd', text: 'Pectoralis major', isCorrect: false },
        ],
        solution: 'Gluteus maximus (den store setemuskelen) er kroppens største muskel. Den er hovedansvarlig for å strekke hofta og er viktig for gange, løping, hopping og reising fra sittende stilling.',
      },
    },
    {
      id: 'tr-2-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr-2-3-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er funksjonen til transversus abdominis?',
        options: [
          { id: 'a', text: 'Bøye overkroppen fremover', isCorrect: false },
          { id: 'b', text: 'Rotere overkroppen', isCorrect: false },
          { id: 'c', text: 'Stabilisere ryggsøylen som et naturlig korsett', isCorrect: true },
          { id: 'd', text: 'Strekke ryggen bakover', isCorrect: false },
        ],
        solution: 'Transversus abdominis er den dypeste bukmuskelen og fungerer som et naturlig korsett. Den stabiliserer ryggsøylen og er avgjørende for å beskytte korsryggen under belastning.',
      },
    },
    {
      id: 'tr-2-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr-2-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar begrepene agonist og antagonist.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en agonist?',
            solution: 'Agonisten er muskelen som utfører en bestemt bevegelse (primærbeveger).',
            multipleChoiceOptions: [
              'Muskelen som utfører bevegelsen',
              'Muskelen som bremser bevegelsen',
              'En muskel som ikke er aktiv',
              'En sene',
            ],
          },
          {
            label: 'b',
            task: 'Gi et eksempel på et agonist-antagonist-par i underkroppen.',
            solution: 'Quadriceps (agonist for knestrekk) og hamstrings (antagonist som bremser strekket). Når vi strekker kneet, er quadriceps agonisten som produserer kraft, mens hamstrings er antagonisten som bremser bevegelsen og gir kontroll.',
          },
        ],
        solution: 'Agonist og antagonist er muskelpar som utfører motsatte bevegelser. De samarbeider for å gi kontrollerte bevegelser i leddene.',
      },
    },
    {
      id: 'tr-2-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr-2-3-ex4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken øvelse er best for å trene hamstrings?',
        options: [
          { id: 'a', text: 'Leg extension', isCorrect: false },
          { id: 'b', text: 'Romansk markløft', isCorrect: true },
          { id: 'c', text: 'Benkpress', isCorrect: false },
          { id: 'd', text: 'Bicepscurl', isCorrect: false },
        ],
        solution: 'Romansk markløft er en utmerket øvelse for hamstrings fordi den belaster musklene eksentrisk i en forlenget posisjon. Andre gode hamstringsøvelser er leg curl og nordic hamstring curl.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-2-3-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr-2-3-ex5',
        number: '5',
        type: 'classic',
        task: 'Lag et helkropps treningsprogram med 6 øvelser som dekker alle de store muskelgruppene (overkropp, bål og underkropp). For hver øvelse, oppgi hvilke muskelgrupper som aktiveres.',
        solution: '1. Knebøy – quadriceps, gluteus, hamstrings, kjernemuskulatur. 2. Benkpress – pectoralis, triceps, fremre deltoideus. 3. Roing med stang – latissimus dorsi, trapezius, rhomboider, biceps. 4. Skulderpress – deltoideus, triceps. 5. Romansk markløft – hamstrings, gluteus, erector spinae. 6. Planke – transversus abdominis, rectus abdominis, obliquus, erector spinae. Dette programmet dekker alle store muskelgrupper med en blanding av sammensatte øvelser og en stabiliseringsøvelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-2-3-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr-2-3-ex6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor det er viktig å trene kroppen balansert. Hva kan skje hvis du bare trener brystmuskulaturen uten å trene ryggmuskulaturen?',
        solution: 'Hvis man bare trener brystmuskulaturen uten å trene ryggen, vil pectoralis major bli kort og stram mens ryggmuskulaturen forblir svak. Dette kan føre til fremoverhevede skuldre, rund rygg (kyfose) og dårlig holdning. Ubalansen øker risikoen for skulderskader fordi skulderleddet trekkes fremover og roteres innover. I tillegg kan det føre til nakkesmerter, hodepine og redusert bevegelsesomfang i skuldrene. For å forebygge dette bør man trene like mye trekk (roing, pull-ups) som trykk (benkpress, push-ups), og aktivt jobbe med å styrke bakre skulder og rygg.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.4: Ledd og bevegelighet
// ============================================================================

export const CHAPTER_TRENING_1_2_4: TextbookChapter = {
  id: 'trening-1-2-4',
  courseId: 'trening-1',
  chapterNumber: '2.4',
  title: 'Ledd og bevegelighet',
  description: 'Lær om ulike leddtyper, bevegelsesplan, leddets oppbygning og ligamentenes rolle.',
  estimatedMinutes: 22,
  competenceGoals: [
    'kjenne til de viktigste leddtypene og deres bevegelighet',
    'forstå leddets oppbygning med brusk, leddkapsel og ligamenter',
    'kunne forklare kroppens tre bevegelsesplan',
  ],
  content: [
    {
      id: 'tr-2-4-intro',
      type: 'text',
      content: `# Ledd og bevegelighet

Leddene er forbindelsespunktene mellom knoklene og gjør bevegelse mulig. Uten ledd ville skjelettet vært en stiv konstruksjon uten evne til bevegelse. Ulike ledd tillater ulike typer og grader av bevegelse, fra de svært bevegelige kuleleddene i skulderen til de nesten ubevegelige sømmene mellom knoklene i hodeskallen.

For utøvere og trenere er kjennskap til leddene viktig av flere grunner: Det hjelper oss å forstå hvilke bevegelser som er mulige i ulike ledd, hvordan vi kan trene bevegelighet effektivt, og hva som gjør leddene sårbare for skader. God leddbevegelighet er en forutsetning for korrekt teknikk og optimal prestasjon i de fleste idretter.`,
    },
    {
      id: 'tr-2-4-def1',
      type: 'definition',
      title: 'Ledd (articulatio)',
      content: 'Et ledd er forbindelsen mellom to eller flere knokler. Ekte ledd (synovialledd) har et leddhule fylt med leddvæske (synovia) og tillater fri bevegelse. Uekte ledd har ingen leddhule og tillater liten eller ingen bevegelse, som sømmene i hodeskallen eller mellomvirvelskivene i ryggsøylen.',
    },
    {
      id: 'tr-2-4-text1',
      type: 'text',
      title: 'Leddets oppbygning',
      content: `Et synovialledd (ekte ledd) har følgende bestanddeler:

**Leddbrusk (hyalinbrusk)**
- Dekker beinendene i leddet
- Glatt og elastisk overflate som reduserer friksjon
- Har ingen blodforsyning – får næring fra leddvæsken
- Slites over tid og regenererer svært dårlig

**Leddkapsel**
- Bindevevshinne som omslutter leddet
- Ytre fibrøst lag gir stabilitet
- Indre synovialt lag produserer leddvæske

**Leddvæske (synovia)**
- Tyktflytende, klar væske inne i leddhulen
- Smører leddflatene og reduserer friksjon
- Tilfører næring til leddbrusken
- Oppvarming øker produksjonen og forbedrer smøringen

**Ligamenter (leddbånd)**
- Stramme bindevevsbånd som forbinder knokler med knokler
- Gir stabilitet og begrenser uønsket bevegelse
- Eksempler: Korsbåndene i kneet, ankelbåndene

**Menisker og labrum**
- Bruskvev som fordeler belastning og forbedrer tilpasning mellom leddflater
- Menisker finnes i kneet, labrum i skulder og hofte`,
    },
    {
      id: 'tr-2-4-text2',
      type: 'text',
      title: 'Leddtyper og bevegelsesmuligheter',
      content: `De viktigste leddtypene klassifiseres etter form og bevegelsesmuligheter:

**1. Kuleledd**
- Kulformet leddhode i en skålformet leddskål
- Størst bevegelighet – bevegelse i alle retninger
- Eksempler: Skulderleddet, hofteleddet
- Skulderen har størst bevegelsesomfang av alle ledd, men er derfor også mer sårbar for skader

**2. Hengselledd**
- Bevegelse i hovedsakelig én retning (fleksjon og ekstensjon)
- Eksempler: Kneleddet, albueleddet, fingerens ledd
- Stabile, men begrenset bevegelighet

**3. Vridledd (pivorledd)**
- Tillater rotasjon rundt én akse
- Eksempler: Leddet mellom atlas og axis (øverste nakkevirvlene) – lar deg snu hodet. Leddet mellom radius og ulna – lar deg vri underarmen (pronasjon og supinasjon)

**4. Glideledd**
- Flate leddflater som glir over hverandre
- Begrenset bevegelse, men viktig for fleksibilitet
- Eksempler: Håndrotsledd, fotrotsledd, ledd mellom ryggvirvlenes leddutspring

**5. Sadelledd**
- To sadelformede leddflater som griper inn i hverandre
- Bevegelse i to plan
- Eksempel: Tommelens grunnledd (karpometakarpalleddet)

**6. Eggformet ledd (kondyloidledd)**
- Eggformet leddhode i en oval leddskål
- Bevegelse i to plan, men ingen rotasjon
- Eksempel: Håndleddet`,
    },
    {
      id: 'tr-2-4-def2',
      type: 'definition',
      title: 'Bevegelsesplan',
      content: 'Kroppens bevegelser beskrives i tre plan: (1) Sagittalplanet – deler kroppen i høyre og venstre halvdel, bevegelser fremover og bakover (fleksjon/ekstensjon). (2) Frontalplanet – deler kroppen i for- og bakside, bevegelser sideveis (abduksjon/adduksjon). (3) Transversalplanet – deler kroppen i øvre og nedre halvdel, rotasjonsbevegelser (innadrotasjon/utadrotasjon).',
    },
    {
      id: 'tr-2-4-text3',
      type: 'text',
      title: 'Bevegelsesbegreper',
      content: `For å beskrive bevegelser i leddene brukes standardiserte anatomiske begreper:

**I sagittalplanet:**
- **Fleksjon** – bøying, vinkelen mellom beinene minsker
- **Ekstensjon** – strekking, vinkelen øker
- **Hyperekstensjon** – strekking forbi nøytral posisjon

**I frontalplanet:**
- **Abduksjon** – bevegelse bort fra kroppens midtlinje
- **Adduksjon** – bevegelse mot kroppens midtlinje

**I transversalplanet:**
- **Innadrotasjon** (medial rotasjon) – rotasjon mot midtlinjen
- **Utadrotasjon** (lateral rotasjon) – rotasjon bort fra midtlinjen
- **Pronasjon** – underarmen dreies slik at håndflaten vender ned
- **Supinasjon** – underarmen dreies slik at håndflaten vender opp

**Spesielle bevegelser:**
- **Plantarfleksjon** – tåspiss ned (som å gå på tå)
- **Dorsalfleksjon** – foten bøyes oppover mot skinnbeinet
- **Circumduksjon** – sirkulær bevegelse (som å tegne en sirkel med armen)`,
    },
    {
      id: 'tr-2-4-example1',
      type: 'example',
      title: 'Bevegelsesanalyse av en knebøy',
      problem: 'Analyser knebøyen med hensyn til ledd involvert, bevegelsesplan og bevegelsesbegreper.',
      solution: `**Ledd involvert:**
- Hofteleddet (kuleledd) – fleksjon ved nedgangen, ekstensjon ved oppgangen
- Kneleddet (hengselledd) – fleksjon ved nedgangen, ekstensjon ved oppgangen
- Ankelleddet – dorsalfleksjon ved nedgangen, plantarfleksjon ved oppgangen

**Bevegelsesplan:**
Knebøyen skjer primært i sagittalplanet (bevegelse fremover/bakover). Hofta og kneet bøyes (fleksjon) under nedgangen og strekkes (ekstensjon) under oppgangen.

**Muskler aktivert:**
- Quadriceps – strekker kneet (agonist i oppgangen)
- Gluteus maximus – strekker hofta (agonist i oppgangen)
- Hamstrings – bøyer kneet og strekker hofta (synergist)
- Kjernemuskulatur – stabiliserer ryggsøylen`,
    },
    {
      id: 'tr-2-4-note1',
      type: 'note',
      title: 'Bevegelighet kan trenes',
      content: 'Bevegelighet (ROM – Range of Motion) kan forbedres gjennom regelmessig tøying og mobilitetstrening. Statisk tøying (holde en strekk i 20-60 sekunder) passer etter trening. Dynamisk tøying (kontrollerte bevegelser gjennom fullt bevegelsesomfang) passer som oppvarming. Tilstrekkelig bevegelighet er nødvendig for korrekt teknikk i styrkeøvelser.',
    },
    {
      id: 'tr-2-4-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr-2-4-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken leddtype har størst bevegelsesomfang?',
        options: [
          { id: 'a', text: 'Hengselledd', isCorrect: false },
          { id: 'b', text: 'Glideledd', isCorrect: false },
          { id: 'c', text: 'Kuleledd', isCorrect: true },
          { id: 'd', text: 'Vridledd', isCorrect: false },
        ],
        solution: 'Kuleledd har størst bevegelsesomfang fordi den kuleformede leddflaten kan bevege seg i alle retninger i leddskålen. Skulderleddet er det mest bevegelige kuleledd.',
      },
    },
    {
      id: 'tr-2-4-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr-2-4-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'I hvilket bevegelsesplan skjer abduksjon og adduksjon?',
        options: [
          { id: 'a', text: 'Sagittalplanet', isCorrect: false },
          { id: 'b', text: 'Frontalplanet', isCorrect: true },
          { id: 'c', text: 'Transversalplanet', isCorrect: false },
          { id: 'd', text: 'Diagonalplanet', isCorrect: false },
        ],
        hints: ['Frontalplanet deler kroppen i for- og bakside. Tenk på bevegelser sideveis.'],
        solution: 'Abduksjon (bevegelse bort fra midtlinjen) og adduksjon (bevegelse mot midtlinjen) skjer i frontalplanet. Eksempler er sidehev og å spre beina.',
      },
    },
    {
      id: 'tr-2-4-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr-2-4-ex3',
        number: '3',
        type: 'classic',
        task: 'Beskriv leddets oppbygning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er funksjonen til leddbrusk?',
            solution: 'Leddbrusk dekker beinendene og gir en glatt, lav-friksjonsoverflate som gjør bevegelse smidig. Den fungerer også som støtdemper.',
            multipleChoiceOptions: [
              'Gir glatt overflate og reduserer friksjon',
              'Produserer blodceller',
              'Forbinder muskler til bein',
              'Lagrer fett',
            ],
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom ligamenter og sener?',
            solution: 'Ligamenter (leddbånd) forbinder bein med bein og gir stabilitet i leddene. Sener forbinder muskler med bein og overfører muskelkraft til bevegelse. Begge er laget av bindevev, men har ulik funksjon.',
          },
        ],
        solution: 'Et synovialledd består av leddbrusk, leddkapsel, leddvæske og ligamenter. Alle deler samarbeider for å gi smidige, stabile bevegelser.',
      },
    },
    {
      id: 'tr-2-4-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr-2-4-ex4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er kneleddet for en type ledd?',
        options: [
          { id: 'a', text: 'Kuleledd', isCorrect: false },
          { id: 'b', text: 'Hengselledd', isCorrect: true },
          { id: 'c', text: 'Sadelledd', isCorrect: false },
          { id: 'd', text: 'Glideledd', isCorrect: false },
        ],
        solution: 'Kneleddet er et hengselledd som primært tillater fleksjon (bøying) og ekstensjon (strekking). Det har også en liten grad av rotasjon når kneet er bøyd.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-2-4-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr-2-4-ex5',
        number: '5',
        type: 'classic',
        task: 'Velg en idrettsøvelse du kjenner godt (f.eks. et kast, et hopp, et spark). Gjennomfør en bevegelsesanalyse der du beskriver hvilke ledd som er involvert, hvilke bevegelsesplan bevegelsen foregår i, og hvilke bevegelsesbegreper som brukes.',
        solution: 'Eksempel – fotballspark: Hofteleddet (kuleledd) utfører fleksjon og ekstensjon i sagittalplanet. Kneleddet (hengselledd) utfører fleksjon og kraftig ekstensjon i sagittalplanet. Ankelleddet utfører plantarfleksjon for å strekke foten. Overkroppen roterer i transversalplanet for å gi kraft. Standfoten stabiliseres gjennom kjernemuskulaturen og hofteabduktorene i frontalplanet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-2-4-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr-2-4-ex6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor skulderleddet er mer utsatt for skader enn hofteleddet, selv om begge er kuleledd. Bruk kunnskap om leddets oppbygning i svaret.',
        solution: 'Både skulder og hofte er kuleledd, men de har svært ulik stabilitet. Skulderleddet har en grunn leddskål (glenoid), noe som gir stor bevegelighet men lite beinmessig stabilitet. Stabiliteten avhenger primært av muskler (rotatorcuffen), ligamenter og labrum. Hofteleddet har en dyp leddskål (acetabulum) som omslutter lårhodet nesten helt, noe som gir svært god beinmessig stabilitet. I tillegg har hoften sterkere ligamenter. Resultatet er at skulderen kan beveges i mange retninger, men er sårbar for luksasjon (ut av ledd) og rotatorcuffskader, mens hoften er svært stabil men med noe mindre bevegelsesomfang.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.5: Skader og forebygging
// ============================================================================

export const CHAPTER_TRENING_1_2_5: TextbookChapter = {
  id: 'trening-1-2-5',
  courseId: 'trening-1',
  chapterNumber: '2.5',
  title: 'Skader og forebygging',
  description: 'Lær om vanlige idrettsskader, PRICE-prinsippet for akutt behandling, og hvordan du forebygger skader gjennom oppvarming og riktig trening.',
  estimatedMinutes: 23,
  competenceGoals: [
    'kjenne til vanlige idrettsskader og deres årsaker',
    'kunne anvende PRICE-prinsippet ved akutte skader',
    'forstå betydningen av oppvarming og skadeforebygging',
  ],
  content: [
    {
      id: 'tr-2-5-intro',
      type: 'text',
      content: `# Skader og forebygging

Idrettsskader er en uunngåelig del av fysisk aktivitet, men de fleste skader kan forebygges med riktig kunnskap og tilnærming. I dette kapittelet lærer du om de vanligste skadetypene, hvordan du skal håndtere akutte skader, og – viktigst av alt – hvordan du kan forebygge skader gjennom smartere trening.

Å forstå skademekanismer og forebygging er en sentral del av treningslære. En skade kan sette en utøver tilbake i uker, måneder eller i verste fall permanent. Forebygging er alltid bedre enn behandling.`,
    },
    {
      id: 'tr-2-5-def1',
      type: 'definition',
      title: 'Idrettsskade',
      content: 'En idrettsskade er en skade som oppstår i forbindelse med trening eller konkurranse. Skader deles inn i akutte skader (oppstår plutselig, som forstuing eller brudd) og belastningsskader (oppstår gradvis over tid, som senebetennelse eller stressfraktur). Begge typene har ulike årsaker, behandling og forebygging.',
    },
    {
      id: 'tr-2-5-text1',
      type: 'text',
      title: 'Vanlige idrettsskader',
      content: `**Akutte skader – oppstår plutselig:**

**Forstuing (distorsjon)**
- Overstrekking eller riving av ligamenter
- Vanligst i ankel, kne og håndledd
- Graderes 1-3 etter alvorlighetsgrad
- Symptomer: smerte, hevelse, blåmerke, nedsatt funksjon

**Muskelstrekk (distensjon)**
- Overstrekking eller riving av muskelfibre
- Vanligst i hamstrings, quadriceps og leggmuskler
- Graderes 1-3 etter alvorlighetsgrad
- Symptomer: plutselig smerte, stivhet, hevelse

**Luksasjon (ut av ledd)**
- Leddflaten tvinges ut av normal posisjon
- Vanligst i skulder, fingre og kneskål
- Alvorlig skade som krever medisinsk behandling

**Brudd (fraktur)**
- Brudd i beinvev
- Kan være åpent (bryter gjennom hud) eller lukket
- Krever alltid medisinsk behandling

---

**Belastningsskader – oppstår gradvis:**

**Senebetennelse (tendinitt/tendinopati)**
- Irritasjon eller degenerasjon av sene
- Vanligst: akillessenebetennelse, tennisalbue, jumper's knee
- Årsak: gjentatt overbelastning uten tilstrekkelig restitusjon

**Stressfraktur**
- Liten sprekk i beinvev på grunn av gjentatt belastning
- Vanligst i foten, skinnbeinet og bekkenet
- Årsak: for rask økning av treningsmengde

**Bursitt (slimposebetennelse)**
- Betennelse i slimposer som demper mellom bein, sener og muskler
- Vanligst i skulder, hofte og kne`,
    },
    {
      id: 'tr-2-5-def2',
      type: 'definition',
      title: 'PRICE-prinsippet',
      content: 'PRICE er en forkortelse for den akutte førstehjelpsbehandlingen av bløtdelsskader: P = Protection (beskytt skadestedet), R = Rest (hvile – unngå å belaste), I = Ice (is – kjøl ned i 15-20 min, gjenta med pauser), C = Compression (kompresjon – elastisk bandasje for å begrense hevelse), E = Elevation (elevasjon – hold skadet kroppsdel hevet over hjertenivå).',
    },
    {
      id: 'tr-2-5-text2',
      type: 'text',
      title: 'PRICE i praksis',
      content: `Når en akutt skade oppstår, bør du handle raskt med PRICE-prinsippet:

**P – Protection (Beskyttelse)**
- Beskytt skadestedet mot ytterligere belastning
- Stopp aktiviteten umiddelbart
- Bruk eventuelt krykker, skinne eller fatle

**R – Rest (Hvile)**
- Unngå å belaste det skadede området
- Hvile i de første 24-72 timene er avgjørende
- Merk: Relativ hvile – hold resten av kroppen aktiv

**I – Ice (Is/Kulde)**
- Legg is eller kuldepakke på skadestedet
- 15-20 minutter om gangen, med minst 1 time mellom
- Bruk alltid et lag stoff mellom is og hud for å unngå frostskade
- Reduserer smerte, hevelse og betennelse

**C – Compression (Kompresjon)**
- Påfør elastisk bandasje rundt skadestedet
- Fast, men ikke så stramt at blodsirkulasjonen hindres
- Begrenser hevelse og gir støtte

**E – Elevation (Elevasjon)**
- Hold den skadede kroppsdelen hevet over hjertenivå
- Bruker tyngdekraften til å redusere hevelse
- Spesielt viktig ved ankel- og knevridninger

**Når oppsøke lege:**
- Ved mistanke om brudd eller luksasjon
- Dersom du ikke kan belaste kroppsdelen i det hele tatt
- Ved alvorlig hevelse eller deformitet
- Hvis smerte og hevelse ikke bedrer seg etter 72 timer`,
    },
    {
      id: 'tr-2-5-text3',
      type: 'text',
      title: 'Oppvarming – den viktigste forebyggingen',
      content: `En god oppvarming er den enkleste og mest effektive måten å forebygge skader på. Oppvarming forbereder kroppen på belastningen som kommer:

**Fysiologiske effekter av oppvarming:**
- Økt kroppstemperatur – muskler og sener blir mer elastiske
- Økt blodtilførsel til musklene – bedre oksygentilførsel
- Økt produksjon av leddvæske – bedre smøring av leddene
- Aktivering av nervesystemet – raskere og mer presise bevegelser
- Mental forberedelse – fokus og konsentrasjon

**Oppvarmingsmodell (10-20 minutter):**

1. **Generell oppvarming (5-10 min)**
   - Lett aerob aktivitet: jogging, sykling, roing
   - Mål: heve pulsen og kroppstemperaturen

2. **Dynamisk tøying (3-5 min)**
   - Kontrollerte bevegelser gjennom fullt bevegelsesomfang
   - Eksempler: beinsvinger, armkretser, lunges med rotasjon
   - Erstatter statisk tøying som oppvarming

3. **Spesifikk oppvarming (3-5 min)**
   - Bevegelser som ligner på aktiviteten du skal gjøre
   - Gradvis økning av intensitet
   - Eksempel: Lette sett med lav vekt før styrketrening`,
    },
    {
      id: 'tr-2-5-warning1',
      type: 'warning',
      title: 'Statisk tøying før trening',
      content: 'Forskning viser at statisk tøying rett før trening kan redusere kraft og eksplosivitet midlertidig. Bruk derfor dynamisk tøying som oppvarming. Statisk tøying passer bedre som nedtrapping etter trening eller som egen bevegelighetsøkt.',
    },
    {
      id: 'tr-2-5-text4',
      type: 'text',
      title: 'Andre forebyggende tiltak',
      content: `Utover oppvarming finnes det flere viktige strategier for å forebygge skader:

**1. Progresjon – øk gradvis**
- Følg 10 %-regelen: øk volum/intensitet med maks 10 % per uke
- Gi kroppen tid til å tilpasse seg
- Spesielt viktig for belastningsskader

**2. Teknikk – tren riktig**
- Lær korrekt løfteteknikk fra starten
- Dårlig teknikk under tretthet er en vanlig skadeårsak
- Bruk speil, video eller en trener for tilbakemelding

**3. Restitusjon – hvil nok**
- Tilstrekkelig søvn (8-10 timer for ungdom)
- Hviledager mellom harde treningsøkter
- Aktiv restitusjon (lett aktivitet på hviledager)

**4. Ernæring og hydrering**
- Tilstrekkelig med proteiner for muskelreparasjon
- Kalsium og vitamin D for sterke bein
- Drikk nok vann før, under og etter trening

**5. Utstyr og underlag**
- Bruk riktige sko for aktiviteten
- Sjekk utstyr regelmessig
- Vær oppmerksom på underlaget du trener på

**6. Balansert trening**
- Tren agonist-antagonist-par likt
- Inkluder stabilitets- og balanseøvelser
- Ikke hopp over oppvarming og nedtrapping`,
    },
    {
      id: 'tr-2-5-example1',
      type: 'example',
      title: 'PRICE ved ankelforstuing',
      problem: 'Du vrir ankelen under en fotballkamp og kjenner umiddelbar smerte og hevelse. Hva gjør du?',
      solution: `**P – Protection**: Stopp spillet umiddelbart. Ikke prøv å gå det av. Sett deg ned eller bli hjulpet av banen.

**R – Rest**: Ikke belast ankelen. Bruk krykker hvis tilgjengelig.

**I – Ice**: Legg en ispose eller kuldepakke på ankelen med et håndkle mellom. Hold i 15-20 minutter. Ta en pause på minst 1 time før du gjentar.

**C – Compression**: Påfør en elastisk bandasje rundt ankelen. Start fra tærne og jobb oppover. Bandasjen skal være fast, men ikke kutte av blodsirkulasjonen.

**E – Elevation**: Legg deg ned og plasser foten på en pute eller stol slik at ankelen er hevet over hjertenivå.

Fortsett med PRICE de første 48-72 timene. Oppsøk lege hvis du ikke kan belaste ankelen, hvis hevelsen er alvorlig, eller hvis det ikke bedrer seg etter noen dager.`,
    },
    {
      id: 'tr-2-5-tip1',
      type: 'tip',
      title: 'Lytt til kroppen',
      content: 'Den viktigste enkeltfaktoren for å unngå skader er å lytte til kroppens signaler. Skille mellom normal treningsstølhet (DOMS) og skadesmerte: DOMS er symmetrisk, øm og blir bedre med bevegelse. Skadesmerte er ofte ensidig, skarp og blir verre med belastning. Når du er i tvil – ta en pause og søk råd.',
    },
    {
      id: 'tr-2-5-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr-2-5-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva står forkortelsen PRICE for?',
        options: [
          { id: 'a', text: 'Power, Resistance, Intensity, Control, Endurance', isCorrect: false },
          { id: 'b', text: 'Protection, Rest, Ice, Compression, Elevation', isCorrect: true },
          { id: 'c', text: 'Pain, Recovery, Ice, Care, Exercise', isCorrect: false },
          { id: 'd', text: 'Prevent, Rehabilitate, Improve, Correct, Evaluate', isCorrect: false },
        ],
        solution: 'PRICE står for Protection (beskyttelse), Rest (hvile), Ice (is/kulde), Compression (kompresjon) og Elevation (elevasjon). Det er førstehjelpsprinsippet for akutte bløtdelsskader.',
      },
    },
    {
      id: 'tr-2-5-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr-2-5-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er en belastningsskade?',
        options: [
          { id: 'a', text: 'En skade som oppstår plutselig ved et uhell', isCorrect: false },
          { id: 'b', text: 'En skade som utvikler seg gradvis over tid ved gjentatt overbelastning', isCorrect: true },
          { id: 'c', text: 'En type brudd', isCorrect: false },
          { id: 'd', text: 'En medfødt tilstand', isCorrect: false },
        ],
        hints: ['Tenk på forskjellen mellom en forstuing og en senebetennelse.'],
        solution: 'En belastningsskade oppstår gradvis over tid når vevet utsettes for gjentatt belastning uten tilstrekkelig restitusjon. Eksempler er senebetennelse, stressfraktur og bursitt.',
      },
    },
    {
      id: 'tr-2-5-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr-2-5-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor oppvarming forebygger skader.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer med musklene og senene under oppvarming?',
            solution: 'Muskler og sener blir varmere og dermed mer elastiske og tøyelige. Økt blodtilførsel gir bedre oksygentilgang og næring til vevet.',
            multipleChoiceOptions: [
              'De blir varmere, mer elastiske og får bedre blodtilførsel',
              'De blir kaldere og stivere',
              'Det skjer ingen endring',
              'De vokser i størrelse',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor bør du bruke dynamisk tøying i stedet for statisk tøying som oppvarming?',
            solution: 'Dynamisk tøying forbereder musklene på bevegelse gjennom fullt bevegelsesomfang, øker blodtilførsel og aktiverer nervesystemet. Statisk tøying før trening kan midlertidig redusere kraft og eksplosivitet.',
          },
        ],
        solution: 'Oppvarming hever kroppstemperaturen, øker blodtilførselen til musklene, forbedrer leddsmøringen og aktiverer nervesystemet. Alt dette gjør at musklene, senene og leddene er bedre forberedt på belastning.',
      },
    },
    {
      id: 'tr-2-5-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr-2-5-ex4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er 10 %-regelen i treningssammenheng?',
        options: [
          { id: 'a', text: 'Du bør trene 10 % av dagen', isCorrect: false },
          { id: 'b', text: 'Du bør ikke øke treningsmengden med mer enn 10 % per uke', isCorrect: true },
          { id: 'c', text: 'Du bør hvile 10 % mellom settene', isCorrect: false },
          { id: 'd', text: 'Bare 10 % av treningen bør være intens', isCorrect: false },
        ],
        solution: '10 %-regelen er en retningslinje for gradvis progresjon. Den sier at du ikke bør øke volum (km, timer) eller intensitet med mer enn 10 % fra uke til uke for å gi kroppen tid til å tilpasse seg og forebygge belastningsskader.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-2-5-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr-2-5-ex5',
        number: '5',
        type: 'classic',
        task: 'En venn som nettopp har begynt å løpe, forteller at hun har fått vondt i skinnbeinet etter å ha økt løpemengden raskt. Forklar hva dette kan være, og gi henne råd om hva hun bør gjøre og hvordan hun kan forebygge problemet.',
        solution: 'Dette høres ut som beinhinnebetennelse (medial tibial stress syndrome) eller tidlig stressfraktur – typiske belastningsskader ved for rask økning av løpemengde. Hun bør ta en pause fra løping, bruke PRICE-prinsippet (særlig is og hvile), og oppsøke lege dersom smerten vedvarer. For å forebygge bør hun følge 10 %-regelen for å øke gradvis, bruke gode løpesko, variere underlaget, styrke legg- og fotmuskulatur, og alltid varme opp før løpeturer. God restitusjon med søvn og riktig ernæring (kalsium, vitamin D) er også viktig.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-2-5-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr-2-5-ex6',
        number: '6',
        type: 'classic',
        task: 'Lag et fullstendig oppvarmingsprogram (ca. 15 minutter) for en styrketreningsøkt som fokuserer på underkroppen. Forklar hensikten med hver del av oppvarmingen.',
        solution: 'Oppvarmingsprogram for styrketrening underkropp (15 min):\n\n1. Generell oppvarming (5 min): Lett jogging eller sykling – hensikt: heve kroppstemperatur og puls, øke blodtilførsel til musklene.\n\n2. Dynamisk tøying (5 min): Beinsvinger fremover/bakover (10 per bein), beinsvinger sideveis (10 per bein), walking lunges med rotasjon (10 per side), inchworms (5 stk), high knees (30 sek), butt kicks (30 sek) – hensikt: øke bevegelsesomfanget, aktivere muskelgrupper, forbedre nervesystemets beredskap.\n\n3. Spesifikk oppvarming (5 min): Kroppsvektknebøy (15 reps), glute bridges (15 reps), bodyweight lunges (10 per side), deretter 2 sett knebøy med lav vekt med gradvis økning – hensikt: forberede de spesifikke leddene og musklene for belastningen, øve bevegelsesmønsteret, finne riktig dybde og teknikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-2-5-ex7',
      type: 'exercise',
      exercise: {
        id: 'tr-2-5-ex7',
        number: '7',
        type: 'classic',
        task: 'Sammenlign akutte skader og belastningsskader. Forklar årsaker, symptomer, eksempler og behandling for begge typer. Diskuter også hvilken type som er enklest å forebygge, og hvorfor.',
        solution: 'Akutte skader oppstår plutselig ved et uhell eller en spesifikk hendelse (fall, vridning, kollisjon). Symptomene er umiddelbare: plutselig smerte, hevelse, eventuelt blåmerke eller deformitet. Eksempler: forstuing, muskelstrekk, brudd, luksasjon. Behandling: PRICE-prinsippet akutt, deretter gradvis rehabilitering.\n\nBelastningsskader utvikler seg gradvis over tid på grunn av gjentatt overbelastning uten tilstrekkelig restitusjon. Symptomene bygger seg opp: først mild smerte/stivhet etter aktivitet, deretter smerte under aktivitet, og til slutt konstant smerte. Eksempler: senebetennelse, stressfraktur, bursitt. Behandling: hvile, redusert belastning, gradvis opptrapping.\n\nBelastningsskader er generelt enklere å forebygge fordi de er direkte knyttet til treningsfeil som for rask progresjon, for lite restitusjon og dårlig teknikk. Ved å følge 10 %-regelen, trene med god teknikk, varme opp og hvile tilstrekkelig, kan man unngå de fleste belastningsskader. Akutte skader har et større element av uforutsigbarhet, men kan også forebygges med oppvarming, balansert trening og riktig utstyr.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport av alle kapitler i seksjon 2
// ============================================================================

export const TRENING_1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_1_2_1,
  CHAPTER_TRENING_1_2_2,
  CHAPTER_TRENING_1_2_3,
  CHAPTER_TRENING_1_2_4,
  CHAPTER_TRENING_1_2_5,
];
