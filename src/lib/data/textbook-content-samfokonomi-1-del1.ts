/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Samfunnsøkonomi 1 VG2 - Del 1: Grunnleggende økonomi
 *
 * Kapittel 1.1–1.5: Introduksjon til samfunnsøkonomi, knapphet og valg,
 * produksjonsfaktorer, økonomiske modeller og økonomiske systemer.
 *
 * LK20-kompetansemål:
 * - velge og bruke kilder, økonomiske teorier og modeller i arbeid med faglige spørsmål
 * - drøfte årsaker til økonomisk vekst og reflektere over bruttonasjonalproduktet som mål for verdiskaping
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er samfunnsøkonomi?
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_1_1: TextbookChapter = {
  id: 'samfokonomi-1-1-1',
  courseId: 'samfokonomi-1',
  chapterNumber: '1.1',
  title: 'Hva er samfunnsøkonomi?',
  description: 'Definisjon av samfunnsøkonomi, mikro- og makroøkonomi, den økonomiske metoden, og skillet mellom positiv og normativ økonomi.',
  estimatedMinutes: 20,
  competenceGoals: [
    'velge og bruke kilder, økonomiske teorier og modeller i arbeid med faglige spørsmål',
    'drøfte årsaker til økonomisk vekst og reflektere over bruttonasjonalproduktet som mål for verdiskaping',
  ],
  content: [
    {
      id: 'soe-1-1-intro',
      type: 'text',
      content: `# Hva er samfunnsøkonomi?

I dette kapittelet skal du lære:

- Hva samfunnsøkonomi handler om som fagfelt
- Forskjellen mellom mikroøkonomi og makroøkonomi
- Hvordan økonomer arbeider med den økonomiske metoden
- Skillet mellom positive og normative påstander

Samfunnsøkonomi er et fag som berører alle deler av livet. Enten vi snakker om prisen på en kaffekopp, arbeidsledighet eller klimapolitikk, handler det om økonomi. Men hva betyr det egentlig å studere økonomi?`,
    },
    {
      id: 'soe-1-1-def-samfokonomi',
      type: 'definition',
      title: 'Samfunnsøkonomi',
      content: `**Samfunnsøkonomi** er studiet av hvordan samfunnet fordeler knappe ressurser mellom konkurrerende behov og ønsker.

Faget forsøker å svare på tre grunnleggende spørsmål:
1. **Hva** skal produseres? (Hvilke varer og tjenester?)
2. **Hvordan** skal det produseres? (Med hvilke metoder og ressurser?)
3. **For hvem** skal det produseres? (Hvem får godene?)

Disse spørsmålene oppstår fordi ressursene er begrenset, mens behovene i praksis er ubegrensede.`,
    },
    {
      id: 'soe-1-1-example-tre-sporsmaal',
      type: 'example',
      title: 'De tre grunnleggende spørsmålene i praksis',
      problem: 'Tenk deg at kommunen har fått 10 millioner kroner ekstra i budsjettet. Hvordan illustrerer dette de tre økonomiske grunnspørsmålene?',
      solution: `**Hva skal produseres?**
Kommunen må velge: Skal pengene gå til en ny skole, bedre eldreomsorg, eller kanskje en ny idrettshall?

**Hvordan skal det produseres?**
Hvis de velger skole: Skal de bygge i tre eller betong? Ansette egne håndverkere eller bruke et entreprenørfirma?

**For hvem skal det produseres?**
Skal skolen ligge i sentrum (nær de fleste) eller i utkanten (der det er billigere tomt)? Hvem får størst nytte?

Alle tre spørsmålene handler om å bruke begrensede midler best mulig.`,
    },
    {
      id: 'soe-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den beste definisjonen av samfunnsøkonomi?',
        options: [
          { id: 'a', text: 'Studiet av hvordan bedrifter tjener mest mulig penger', isCorrect: false },
          { id: 'b', text: 'Studiet av hvordan samfunnet fordeler knappe ressurser mellom konkurrerende behov', isCorrect: true },
          { id: 'c', text: 'Studiet av statens budsjett og skatteinntekter', isCorrect: false },
          { id: 'd', text: 'Studiet av hvordan enkeltpersoner sparer penger', isCorrect: false },
        ],
        solution: 'Samfunnsøkonomi handler om fordeling av knappe ressurser i hele samfunnet, ikke bare i bedrifter, stat eller husholdninger alene. Det dekker alle aktører og hvordan de samhandler.',
      },
    },
    {
      id: 'soe-1-1-mikro-makro',
      type: 'text',
      content: `## Mikroøkonomi og makroøkonomi

Samfunnsøkonomien deles tradisjonelt i to hovedgrener:

**Mikroøkonomi** studerer enkeltaktørers adferd og samspillet mellom dem. Den ser på hvordan priser dannes i enkeltmarkeder, hvordan forbrukere tar valg, og hvordan bedrifter bestemmer produksjon og prising.

*Eksempler på mikroøkonomiske spørsmål:*
- Hvorfor koster strøm mer om vinteren?
- Hvordan påvirker en ny konkurrent prisene i dagligvaremarkedet?
- Hvorfor velger noen å studere medisin fremfor økonomi?

**Makroøkonomi** ser på økonomien som helhet. Den studerer størrelser som samlet produksjon (BNP), arbeidsledighet, inflasjon, renter og økonomisk vekst.

*Eksempler på makroøkonomiske spørsmål:*
- Hvorfor oppstår finanskriser?
- Hva bestemmer arbeidsledigheten i et land?
- Hvordan påvirker Norges Banks rentebeslutninger økonomien?`,
    },
    {
      id: 'soe-1-1-def-mikro',
      type: 'definition',
      title: 'Mikroøkonomi',
      content: `**Mikroøkonomi** er den grenen av samfunnsøkonomien som studerer enkeltaktørers adferd og samspillet mellom dem i enkeltmarkeder.

Sentrale temaer: forbrukernes valg, bedriftenes produksjon og prissetting, markedslikevekt, og konkurranse.`,
    },
    {
      id: 'soe-1-1-def-makro',
      type: 'definition',
      title: 'Makroøkonomi',
      content: `**Makroøkonomi** er den grenen av samfunnsøkonomien som studerer økonomien som helhet.

Sentrale temaer: BNP, arbeidsledighet, inflasjon, pengepolitikk, finanspolitikk og økonomisk vekst.`,
    },
    {
      id: 'soe-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er et makroøkonomisk spørsmål?',
        options: [
          { id: 'a', text: 'Hvorfor har prisen på avokado steget det siste året?', isCorrect: false },
          { id: 'b', text: 'Hva bestemmer den totale arbeidsledigheten i Norge?', isCorrect: true },
          { id: 'c', text: 'Hvordan setter Rema 1000 prisen på brød?', isCorrect: false },
          { id: 'd', text: 'Hvorfor velger Ola å kjøpe elbil fremfor bensinbil?', isCorrect: false },
        ],
        solution: 'Den totale arbeidsledigheten i Norge er en makroøkonomisk størrelse som gjelder hele økonomien. De andre spørsmålene handler om enkeltmarkeder eller enkeltpersoner, og tilhører mikroøkonomien.',
      },
    },
    {
      id: 'soe-1-1-metode',
      type: 'text',
      content: `## Den økonomiske metoden

Økonomer bruker en vitenskapelig tilnærming for å forstå økonomiske fenomener. Den økonomiske metoden innebærer:

1. **Observasjon:** Se på data og mønstre i den virkelige økonomien
2. **Teori og modellbygging:** Lage forenklede modeller som forklarer mønstrene
3. **Testing:** Undersøke om modellene stemmer med virkeligheten
4. **Revisjon:** Justere teoriene basert på nye data

Denne metoden ligner på naturvitenskapelig metode, men økonomer kan sjelden gjennomføre kontrollerte eksperimenter. I stedet bruker de statistikk og historiske data.`,
    },
    {
      id: 'soe-1-1-positiv-normativ',
      type: 'text',
      content: `## Positiv og normativ økonomi

Et viktig skille i samfunnsøkonomien er mellom **positive** og **normative** påstander.

**Positive påstander** beskriver verden slik den er. De kan i prinsippet testes mot data og verifiseres eller motbevises.

*Eksempler:*
- «Arbeidsledigheten i Norge er 3,5 prosent.»
- «En økning i minstelønn fører til at noen mister jobben.»
- «BNP per innbygger i Norge er høyere enn i Sverige.»

**Normative påstander** handler om hvordan verden bør være. De inneholder verdivurderinger og kan ikke testes vitenskapelig.

*Eksempler:*
- «Arbeidsledigheten bør reduseres.»
- «Vi bør ha høyere minstlønn.»
- «Det er urettferdig at noen tjener mye mer enn andre.»

Forskjellen er viktig fordi økonomer kan bidra med kunnskap om positive spørsmål, mens normative spørsmål til syvende og sist handler om verdier og politikk.`,
    },
    {
      id: 'soe-1-1-def-positiv',
      type: 'definition',
      title: 'Positiv økonomi',
      content: `**Positiv økonomi** handler om å beskrive og forklare økonomiske sammenhenger slik de faktisk er. Positive påstander kan i prinsippet testes og verifiseres med data.

Eksempel: «Hvis prisen på bensin øker, vil folk kjøre mindre bil.» Dette er en påstand som kan undersøkes empirisk.`,
    },
    {
      id: 'soe-1-1-def-normativ',
      type: 'definition',
      title: 'Normativ økonomi',
      content: `**Normativ økonomi** handler om hvordan ting bør være. Normative påstander inneholder verdivurderinger og kan ikke avgjøres av vitenskap alene.

Eksempel: «Staten bør senke bensinavgiften.» Dette er en verdivurdering som avhenger av hva man mener er rettferdig og fornuftig.`,
    },
    {
      id: 'soe-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-1-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er en positiv økonomisk påstand?',
        options: [
          { id: 'a', text: 'Norge bør bruke mer penger på helsevesenet', isCorrect: false },
          { id: 'b', text: 'Det er urettferdig at fattige land har lavere BNP', isCorrect: false },
          { id: 'c', text: 'Når renten øker, sparer folk mer og låner mindre', isCorrect: true },
          { id: 'd', text: 'Vi bør redusere skatten for lavtlønte', isCorrect: false },
        ],
        solution: 'Alternativ c er en positiv påstand fordi den beskriver en sammenheng som kan testes med data. De andre alternativene inneholder verdivurderinger (bør, urettferdig) og er normative.',
      },
    },
    {
      id: 'soe-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom mikroøkonomi og makroøkonomi. Gi to eksempler på spørsmål innenfor hver gren.',
        solution: 'Mikroøkonomi studerer enkeltaktørers adferd og enkeltmarkeder. Eksempler: (1) Hvordan dannes prisen på strøm? (2) Hvorfor velger noen å jobbe deltid? Makroøkonomi studerer hele økonomien samlet. Eksempler: (1) Hva bestemmer den totale økonomiske veksten? (2) Hvorfor oppstår inflasjon? Mikroøkonomi zoomer inn på delene, makroøkonomi ser på helheten.',
      },
    },
    {
      id: 'soe-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Avgjør om hver av disse påstandene er positive eller normative, og begrunn svaret:\n\na) «Arbeidsledigheten blant unge er høyere enn blant eldre.»\nb) «Regjeringen bør gjøre mer for å redusere ungdomsledigheten.»\nc) «Høyere utdanning gir i gjennomsnitt høyere livsinntekt.»\nd) «Det er viktigere å redusere klimagassutslipp enn å øke BNP.»',
        solution: 'a) Positiv – dette er et faktautsagn som kan sjekkes i statistikken. b) Normativ – «bør» er en verdivurdering. c) Positiv – dette er en sammenheng som kan testes med data. d) Normativ – «viktigere» er en verdivurdering som ikke kan avgjøres av data alene.',
      },
    },
    {
      id: 'soe-1-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Samfunnsøkonomi** handler om hvordan knappe ressurser fordeles i samfunnet
- Faget deles i **mikroøkonomi** (enkeltaktører og markeder) og **makroøkonomi** (hele økonomien)
- Økonomer bruker **den økonomiske metoden**: observasjon, teoribygging, testing og revisjon
- **Positive** påstander beskriver verden slik den er og kan testes
- **Normative** påstander handler om hvordan verden bør være og inneholder verdivurderinger`,
    },
    {
      id: 'soe-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-1-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva er riktig rekkefølge i den økonomiske metoden?',
        options: [
          { id: 'a', text: 'Teori → Testing → Observasjon → Revisjon', isCorrect: false },
          { id: 'b', text: 'Observasjon → Teori og modellbygging → Testing → Revisjon', isCorrect: true },
          { id: 'c', text: 'Testing → Observasjon → Revisjon → Teori', isCorrect: false },
          { id: 'd', text: 'Revisjon → Teori → Observasjon → Testing', isCorrect: false },
        ],
        solution: 'Den økonomiske metoden starter med observasjon av data og mønstre, deretter bygger man teorier og modeller, tester dem mot virkeligheten, og reviderer ved behov.',
      },
    },
    {
      id: 'soe-1-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-1-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Gi et eksempel på et økonomisk tema der det er viktig å skille mellom positive og normative påstander. Formuler en positiv og en normativ påstand om det samme temaet.',
        solution: 'Eksempel med klimapolitikk: Positiv påstand: «En CO₂-avgift på 1000 kr per tonn vil redusere utslippene med 10 prosent.» Normativ påstand: «Norge bør innføre en høyere CO₂-avgift for å bekjempe klimaendringene.» Den positive påstanden kan testes med data, mens den normative avhenger av verdivalg om hvor viktig klimaet er sammenlignet med andre hensyn.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Knapphet og valg
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_1_2: TextbookChapter = {
  id: 'samfokonomi-1-1-2',
  courseId: 'samfokonomi-1',
  chapterNumber: '1.2',
  title: 'Knapphet og valg',
  description: 'Knapphet som det grunnleggende økonomiske problemet, alternativkostnad, produksjonsmulighetskurven og økonomiske aktører.',
  estimatedMinutes: 20,
  competenceGoals: [
    'velge og bruke kilder, økonomiske teorier og modeller i arbeid med faglige spørsmål',
    'drøfte årsaker til økonomisk vekst og reflektere over bruttonasjonalproduktet som mål for verdiskaping',
  ],
  content: [
    {
      id: 'soe-1-2-intro',
      type: 'text',
      content: `# Knapphet og valg

I dette kapittelet skal du lære:

- Hva knapphet betyr i økonomisk forstand
- Begrepet alternativkostnad og hvorfor det er sentralt
- Hva produksjonsmulighetskurven viser
- Hvem de viktigste økonomiske aktørene er

Det grunnleggende problemet i all økonomi er at vi har ubegrensede ønsker, men begrensede ressurser. Dette tvinger oss til å gjøre valg, og hvert valg har en kostnad.`,
    },
    {
      id: 'soe-1-2-def-knapphet',
      type: 'definition',
      title: 'Knapphet',
      content: `**Knapphet** er det grunnleggende økonomiske problemet: Menneskers behov og ønsker er i praksis ubegrensede, mens ressursene som er tilgjengelige for å tilfredsstille dem er begrenset.

Knapphet betyr ikke at noe er sjeldent, men at det ikke finnes nok av det til å dekke alles behov. Selv rike land opplever knapphet: Det finnes ikke nok leger, lærere, byggematerialer eller tid til alt vi ønsker.

Fordi ressursene er knappe, må vi gjøre **valg** – og hvert valg har en **kostnad**.`,
    },
    {
      id: 'soe-1-2-example-knapphet',
      type: 'example',
      title: 'Knapphet i hverdagen',
      problem: 'Hvordan opplever du knapphet i din egen hverdag?',
      solution: `**Tid:** Du har bare 24 timer i døgnet. Hvis du bruker tre timer på trening, kan du ikke bruke de samme timene på lekser eller venner.

**Penger:** Hvis du har 500 kr i uken, må du velge mellom mat, klær, underholdning og sparing.

**Energi:** Etter en lang skoledag har du kanskje ikke energi til både lekser og trening.

Selv om du er rik, har du begrenset tid. Selv om du har god tid, har du begrensede penger. Knapphet finnes overalt og tvinger oss til å prioritere.`,
    },
    {
      id: 'soe-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva menes med «knapphet» i økonomisk forstand?',
        options: [
          { id: 'a', text: 'At det finnes svært få eksemplarer av noe', isCorrect: false },
          { id: 'b', text: 'At behovene overstiger de tilgjengelige ressursene', isCorrect: true },
          { id: 'c', text: 'At prisene er svært høye', isCorrect: false },
          { id: 'd', text: 'At bare rike mennesker har tilgang til ressurser', isCorrect: false },
        ],
        solution: 'I økonomisk forstand betyr knapphet at menneskenes behov og ønsker er større enn de tilgjengelige ressursene. Det handler ikke om sjeldenhet eller pris, men om at det alltid finnes behov som ikke blir dekket.',
      },
    },
    {
      id: 'soe-1-2-alternativkostnad',
      type: 'text',
      content: `## Alternativkostnad

Fordi ressursene er knappe, innebærer hvert valg at vi gir opp noe annet. Verdien av det vi gir opp kalles **alternativkostnad** (også kjent som opportunitetskostnad).

Alternativkostnad er ikke nødvendigvis målt i penger. Det kan være tid, glede, helse eller andre verdier. Det viktige er at vi ser på verdien av det **beste alternativet** vi gir opp.`,
    },
    {
      id: 'soe-1-2-def-alternativkostnad',
      type: 'definition',
      title: 'Alternativkostnad',
      content: `**Alternativkostnad** (opportunitetskostnad) er verdien av det beste alternativet du gir opp når du tar et valg.

Alternativkostnaden er den virkelige kostnaden ved et valg, fordi den fanger opp hva du faktisk ofrer. Den kan være høyere eller lavere enn den økonomiske kostnaden vi betaler i kroner.`,
    },
    {
      id: 'soe-1-2-example-alternativkostnad',
      type: 'example',
      title: 'Alternativkostnad ved å studere',
      problem: 'Erik velger å ta et masterstudium i økonomi (2 år) i stedet for å begynne å jobbe rett etter bachelorgraden. Hva er alternativkostnaden?',
      solution: `**Alternativkostnaden er verdien av det beste alternativet Erik gir opp.**

Hvis det beste alternativet til masterstudiet er å jobbe med en startlønn på 500 000 kr per år, er alternativkostnaden:

- Tapt arbeidsinntekt: 2 × 500 000 kr = 1 000 000 kr
- Tapt arbeidserfaring (2 år)
- Tapt faglig utvikling i arbeidslivet

**Merk:** Studielånet og studieavgiften er ikke alternativkostnad – det er direkte kostnader. Alternativkostnaden er det Erik går glipp av ved å ikke jobbe.

**Men:** Mastergraden kan gi høyere lønn senere, så Erik veier alternativkostnaden mot den forventede gevinsten.`,
    },
    {
      id: 'soe-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Lisa har tre timer ledig og kan enten jobbe (tjene 600 kr), trene (verdi for henne: 400 kr) eller se film (verdi for henne: 200 kr). Hun velger å jobbe. Hva er alternativkostnaden?',
        options: [
          { id: 'a', text: '200 kr (verdien av filmen)', isCorrect: false },
          { id: 'b', text: '400 kr (verdien av treningen)', isCorrect: true },
          { id: 'c', text: '600 kr (verdien av de to alternativene til sammen)', isCorrect: false },
          { id: 'd', text: '0 kr (hun valgte det beste alternativet)', isCorrect: false },
        ],
        solution: 'Alternativkostnaden er verdien av det BESTE alternativet man gir opp. Lisas beste alternativ til å jobbe er å trene (verdi 400 kr). Filmen (200 kr) er ikke det beste alternativet, så den teller ikke. Selv om Lisa valgte det mest lønnsomme, har valget en alternativkostnad på 400 kr.',
      },
    },
    {
      id: 'soe-1-2-pmk',
      type: 'text',
      content: `## Produksjonsmulighetskurven

**Produksjonsmulighetskurven** (PMK) er en enkel modell som viser sammenhengen mellom knapphet, valg og alternativkostnad.

Tenk deg et land som bare kan produsere to varer: mat og maskiner. Alle ressursene (arbeidskraft, kapital, naturressurser) kan brukes til å produsere enten mat, maskiner, eller en kombinasjon.

**Produksjonsmulighetskurven viser:**
- Alle kombinasjoner av mat og maskiner som kan produseres når ressursene brukes fullt ut
- At mer av det ene betyr mindre av det andre (alternativkostnad)
- Punkt på kurven: effektiv ressursbruk
- Punkt innenfor kurven: ineffektiv ressursbruk (uutnyttede ressurser)
- Punkt utenfor kurven: umulig med nåværende ressurser

**Kurven bøyer utover** fordi alternativkostnaden øker: Ressurser som er godt egnet til matproduksjon er dårlig egnet til maskinproduksjon, og omvendt.`,
    },
    {
      id: 'soe-1-2-def-pmk',
      type: 'definition',
      title: 'Produksjonsmulighetskurven (PMK)',
      content: `**Produksjonsmulighetskurven** er en grafisk fremstilling som viser alle effektive kombinasjoner av to goder som et samfunn kan produsere med sine tilgjengelige ressurser og teknologi.

Kurven illustrerer knapphet (vi kan ikke produsere uendelig), valg (vi må velge kombinasjon) og alternativkostnad (mer av det ene betyr mindre av det andre).`,
    },
    {
      id: 'soe-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-1-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Et punkt som ligger innenfor produksjonsmulighetskurven betyr at:',
        options: [
          { id: 'a', text: 'Samfunnet produserer mer enn det har ressurser til', isCorrect: false },
          { id: 'b', text: 'Samfunnet bruker alle ressursene effektivt', isCorrect: false },
          { id: 'c', text: 'Samfunnet har ledig kapasitet og kan produsere mer', isCorrect: true },
          { id: 'd', text: 'Samfunnet har oppnådd økonomisk vekst', isCorrect: false },
        ],
        solution: 'Et punkt innenfor kurven betyr at ikke alle ressurser er i bruk, eller at de brukes ineffektivt. Samfunnet kan produsere mer av begge varer uten å ofre noe. Punkt på kurven er effektivt, og punkt utenfor er umulig med nåværende ressurser.',
      },
    },
    {
      id: 'soe-1-2-aktorer',
      type: 'text',
      content: `## Økonomiske aktører

I en økonomi er det fire hovedgrupper av aktører som tar beslutninger:

**1. Husholdninger**
- Tilbyr arbeidskraft til bedrifter
- Etterspør varer og tjenester
- Tar beslutninger om forbruk og sparing

**2. Bedrifter**
- Produserer varer og tjenester
- Etterspør arbeidskraft og andre innsatsfaktorer
- Søker profitt

**3. Det offentlige (stat og kommune)**
- Tilbyr fellesgoder (skoler, sykehus, forsvar)
- Krever inn skatter og avgifter
- Omfordeler inntekt gjennom overføringer

**4. Utlandet**
- Handel med varer og tjenester (import og eksport)
- Kapitalstrømmer (investeringer)
- Arbeidsmigrasjon

Alle disse aktørene står overfor knapphet og må gjøre valg med alternativkostnader.`,
    },
    {
      id: 'soe-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-1-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken økonomisk aktør har som hovedoppgave å tilby fellesgoder og omfordele inntekt?',
        options: [
          { id: 'a', text: 'Husholdningene', isCorrect: false },
          { id: 'b', text: 'Bedriftene', isCorrect: false },
          { id: 'c', text: 'Det offentlige', isCorrect: true },
          { id: 'd', text: 'Utlandet', isCorrect: false },
        ],
        solution: 'Det offentlige (stat og kommune) har som oppgave å tilby fellesgoder som skoler, forsvar og infrastruktur, og å omfordele inntekt gjennom skatter og overføringer. Bedrifter produserer for profitt, husholdninger tilbyr arbeidskraft og forbruker, og utlandet driver handel.',
      },
    },
    {
      id: 'soe-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Et land kan produsere enten 100 tonn mat eller 50 maskiner, eller en kombinasjon. Landet produserer nå 80 tonn mat og 10 maskiner.\n\na) Ligger dette punktet på, innenfor eller utenfor produksjonsmulighetskurven?\nb) Hva betyr det for ressursbruken i landet?\nc) Hva kan være årsaker til at landet befinner seg i dette punktet?',
        solution: 'a) Punktet ligger sannsynligvis innenfor PMK, fordi 80 tonn mat og 10 maskiner er mindre enn full kapasitet (100 mat eller 50 maskiner). b) Det betyr at landet har ledig kapasitet og ikke bruker alle ressursene effektivt. Det kunne produsert mer av begge varer. c) Mulige årsaker: arbeidsledighet, ubrukt kapital, ineffektive bedrifter, mangelfull infrastruktur, eller dårlig organisering av produksjonen.',
      },
    },
    {
      id: 'soe-1-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Knapphet** er det grunnleggende økonomiske problemet: ubegrensede behov, begrensede ressurser
- **Alternativkostnad** er verdien av det beste alternativet du gir opp ved et valg
- **Produksjonsmulighetskurven** viser alle effektive kombinasjoner av to goder og illustrerer knapphet, valg og alternativkostnad
- De fire økonomiske aktørene er **husholdninger**, **bedrifter**, **det offentlige** og **utlandet**
- Alle aktører står overfor knapphet og må gjøre valg`,
    },
    {
      id: 'soe-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar med egne ord hva alternativkostnad er. Gi et personlig eksempel fra din egen hverdag der du har opplevd alternativkostnad.',
        solution: 'Alternativkostnad er verdien av det beste alternativet man gir opp. For eksempel: Hvis du velger å bruke lørdag kveld på å jobbe i butikk (tjene 1000 kr), er alternativkostnaden det du går glipp av – kanskje en konsertbillett til 500 kr og en god opplevelse med venner. Alternativkostnaden er ikke bare økonomisk, men inkluderer også sosiale og følelsesmessige verdier.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: Produksjonsfaktorer
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_1_3: TextbookChapter = {
  id: 'samfokonomi-1-1-3',
  courseId: 'samfokonomi-1',
  chapterNumber: '1.3',
  title: 'Produksjonsfaktorer',
  description: 'De fire produksjonsfaktorene: arbeidskraft, kapital, naturressurser og entreprenørskap, samt humankapitalens betydning.',
  estimatedMinutes: 20,
  competenceGoals: [
    'velge og bruke kilder, økonomiske teorier og modeller i arbeid med faglige spørsmål',
    'drøfte årsaker til økonomisk vekst og reflektere over bruttonasjonalproduktet som mål for verdiskaping',
  ],
  content: [
    {
      id: 'soe-1-3-intro',
      type: 'text',
      content: `# Produksjonsfaktorer

I dette kapittelet skal du lære:

- Hva produksjonsfaktorer er og hvorfor de er viktige
- De fire hovedtypene: arbeidskraft, realkapital, naturressurser og entreprenørskap
- Hva humankapital er og hvorfor det er avgjørende i moderne økonomi
- Hvordan produksjonsfaktorene kombineres for å skape verdier

For å produsere varer og tjenester trenger vi innsatsfaktorer. Økonomer deler disse inn i fire hovedgrupper som til sammen kalles produksjonsfaktorer.`,
    },
    {
      id: 'soe-1-3-def-produksjonsfaktorer',
      type: 'definition',
      title: 'Produksjonsfaktorer',
      content: `**Produksjonsfaktorer** er de ressursene som brukes for å produsere varer og tjenester. De deles tradisjonelt inn i fire kategorier:

1. **Arbeidskraft** – menneskelig innsats
2. **Realkapital** – produserte produksjonsmidler
3. **Naturressurser** – gaver fra naturen
4. **Entreprenørskap** – evnen til å kombinere de andre faktorene på nye måter`,
    },
    {
      id: 'soe-1-3-arbeidskraft',
      type: 'text',
      content: `## Arbeidskraft

**Arbeidskraft** er den menneskelige innsatsen som legges ned i produksjonen. Det omfatter all fysisk og mental arbeidsinnsats – fra sykepleieren som behandler pasienter, til ingeniøren som designer broer, til bonden som høster avlinger.

**Kvantitet og kvalitet:**
Arbeidskraftens verdi avhenger av både mengde (antall arbeidstimer) og kvalitet (utdanning, erfaring, ferdigheter).

**I Norge:**
- Arbeidsstyrken er ca. 2,9 millioner mennesker
- Yrkesdeltakelsen er blant de høyeste i verden
- Høy grad av likestilling i arbeidslivet
- Arbeidskraft er Norges viktigste ressurs – menneskene er mer verdt enn oljen`,
    },
    {
      id: 'soe-1-3-def-humankapital',
      type: 'definition',
      title: 'Humankapital',
      content: `**Humankapital** er den kunnskapen, ferdighetene og erfaringen som arbeidsstyrken besitter. Humankapital øker gjennom utdanning, opplæring og erfaring.

Investering i humankapital (for eksempel gjennom gratis utdanning) er avgjørende for økonomisk vekst. Jo høyere humankapital, desto mer produktiv er arbeidsstyrken.

I moderne kunnskapsøkonomier er humankapital den viktigste produksjonsfaktoren.`,
    },
    {
      id: 'soe-1-3-example-humankapital',
      type: 'example',
      title: 'Humankapital i praksis',
      problem: 'Hvorfor investerer Norge så mye i gratis utdanning?',
      solution: `**Utdanning som investering i humankapital:**

Norge bruker ca. 7 prosent av BNP på utdanning. Gratis grunnskole, videregående og høyere utdanning er en bevisst investering i humankapital.

**Gevinster:**
- Høyere produktivitet: Arbeidere med utdanning produserer mer per time
- Innovasjon: Utdannede mennesker utvikler nye løsninger og teknologier
- Lavere arbeidsledighet: Utdanning gir bedre muligheter i arbeidsmarkedet
- Høyere skatteinntekter: Høyere lønn gir høyere skatteinntekter til staten

**Eksempel:** En sykepleier med videreutdanning i intensivsykepleie kan behandle alvorlig syke pasienter, noe som krever spesialkompetanse. Investering i denne utdanningen gir bedre helsetjenester for hele samfunnet.`,
    },
    {
      id: 'soe-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er humankapital?',
        options: [
          { id: 'a', text: 'Maskiner som erstatter menneskelig arbeidskraft', isCorrect: false },
          { id: 'b', text: 'Kunnskap, ferdigheter og erfaring som arbeidsstyrken besitter', isCorrect: true },
          { id: 'c', text: 'Lønnen en arbeidstaker mottar', isCorrect: false },
          { id: 'd', text: 'Antall mennesker som bor i et land', isCorrect: false },
        ],
        solution: 'Humankapital er den immaterielle verdien av kunnskap, ferdigheter og erfaring i arbeidsstyrken. Det er ikke det samme som antall arbeidere eller lønn, men kvaliteten på arbeidskraften.',
      },
    },
    {
      id: 'soe-1-3-realkapital',
      type: 'text',
      content: `## Realkapital

**Realkapital** er produserte produksjonsmidler – altså ting som mennesker har laget for å produsere andre varer og tjenester.

**Eksempler:**
- Maskiner og utstyr i fabrikker
- Bygninger (kontorer, lagre, butikker)
- Infrastruktur (veier, broer, havner)
- Verktøy og teknologi
- Datamaskiner og programvare

**Viktig å skille:**
- **Realkapital** er fysiske produksjonsmidler (maskiner, bygninger)
- **Finanskapital** er penger og verdipapirer – dette er IKKE en produksjonsfaktor, men et middel for å skaffe seg produksjonsfaktorer

En fabrikk er realkapital. Pengene du bruker for å kjøpe fabrikken er finanskapital.`,
    },
    {
      id: 'soe-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er et eksempel på realkapital?',
        options: [
          { id: 'a', text: 'Olje som ligger under havbunnen', isCorrect: false },
          { id: 'b', text: 'En maskin i en bilfabrikk', isCorrect: true },
          { id: 'c', text: 'Aksjer i Equinor', isCorrect: false },
          { id: 'd', text: 'En lege som opererer en pasient', isCorrect: false },
        ],
        solution: 'En maskin i en bilfabrikk er realkapital – et produsert produksjonsmiddel. Olje er en naturressurs, aksjer er finanskapital, og en lege er arbeidskraft.',
      },
    },
    {
      id: 'soe-1-3-naturressurser',
      type: 'text',
      content: `## Naturressurser

**Naturressurser** er alt vi får fra naturen som kan brukes i produksjonen. Det er ressurser vi ikke har laget selv.

**Fornybare naturressurser:**
- Skog og fisk (hvis de forvaltes bærekraftig)
- Vannkraft
- Vindenergi og solenergi
- Jordbruksareal

**Ikke-fornybare naturressurser:**
- Olje og gass
- Kull
- Mineraler og metaller

**Norge er rikt på naturressurser:**
- Olje og gass fra Nordsjøen
- Vannkraft (ca. 90 % av strømproduksjonen)
- Fisk og sjømat
- Skog
- Mineraler

Naturressurser har gitt Norge store inntekter, men det er humankapitalen som er den viktigste verdien. Oljeformuen utgjør bare en brøkdel av nasjonalformuen – størstedelen er verdien av arbeidskraften.`,
    },
    {
      id: 'soe-1-3-entreprenorskap',
      type: 'text',
      content: `## Entreprenørskap

**Entreprenørskap** er evnen til å kombinere de andre produksjonsfaktorene på nye og bedre måter. Entreprenøren er den som:

- Ser muligheter der andre ser problemer
- Tar risiko for å skape noe nytt
- Organiserer arbeidskraft, kapital og naturressurser
- Innoverer og utvikler nye produkter, tjenester og prosesser

**Entreprenørskap som produksjonsfaktor:**
Uten noen som tør å kombinere ressurser på nye måter, ville ikke de andre faktorene bli utnyttet. Entreprenørskap er drivkraften bak økonomisk utvikling.

**Norske eksempler:**
- Kjell Inge Røkke (Aker): Fra fiskebåt til industriimperium
- Anita Krohn Traaseth: Innovasjon Norge-leder som fremmer gründerskap
- Kolbjørn Selmer: Gründer bak Kahoot!`,
    },
    {
      id: 'soe-1-3-def-entreprenorskap',
      type: 'definition',
      title: 'Entreprenørskap',
      content: `**Entreprenørskap** som produksjonsfaktor er evnen og viljen til å organisere, kombinere og koordinere de øvrige produksjonsfaktorene for å skape verdi. Entreprenøren tar risiko og søker lønnsomme måter å produsere på.

Uten entreprenørskap ville arbeidskraft, kapital og naturressurser forbli uutnyttede. Entreprenørskap er motoren i en dynamisk økonomi.`,
    },
    {
      id: 'soe-1-3-example-bakeri',
      type: 'example',
      title: 'Produksjonsfaktorene i et bakeri',
      problem: 'Identifiser de fire produksjonsfaktorene i et lokalt bakeri.',
      solution: `**Arbeidskraft:** Bakeren, ekspeditørene, regnskapsføreren – alle som legger ned arbeidsinnsats.

**Realkapital:** Ovner, deigmaskiner, kjøleskap, butikklokalet, kassesystemet – produksjonsmidler som er laget for å brukes i produksjonen.

**Naturressurser:** Mel (fra korn), vann, sukker (fra sukkerrør), smør (fra melk) – råvarer fra naturen.

**Entreprenørskap:** Bakeriets gründer som så muligheten for et bakeri i nabolaget, tok opp lån, ansatte folk, fant lokaler og bestemte hvilke produkter som skulle selges.

Alle fire faktorene er nødvendige. Uten arbeidskraft blir det ikke bakt. Uten ovner og utstyr kan de ikke produsere. Uten mel og vann er det ingenting å bake med. Og uten noen som organiserer det hele, skjer ingenting.`,
    },
    {
      id: 'soe-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-1-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken produksjonsfaktor handler om evnen til å kombinere de andre faktorene på nye måter og ta risiko?',
        options: [
          { id: 'a', text: 'Arbeidskraft', isCorrect: false },
          { id: 'b', text: 'Realkapital', isCorrect: false },
          { id: 'c', text: 'Naturressurser', isCorrect: false },
          { id: 'd', text: 'Entreprenørskap', isCorrect: true },
        ],
        solution: 'Entreprenørskap er produksjonsfaktoren som handler om å ta initiativ, se muligheter, ta risiko og kombinere de andre faktorene. Uten entreprenørskap ville de andre ressursene forbli uutnyttede.',
      },
    },
    {
      id: 'soe-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-1-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvorfor regnes ikke penger (finanskapital) som en produksjonsfaktor?',
        options: [
          { id: 'a', text: 'Fordi penger ikke har verdi', isCorrect: false },
          { id: 'b', text: 'Fordi penger brukes til å anskaffe produksjonsfaktorer, men deltar ikke direkte i produksjonen', isCorrect: true },
          { id: 'c', text: 'Fordi penger tilhører staten', isCorrect: false },
          { id: 'd', text: 'Fordi penger er en naturressurs', isCorrect: false },
        ],
        solution: 'Penger (finanskapital) er et byttemiddel som brukes til å kjøpe de egentlige produksjonsfaktorene. En tusenlapp kan ikke i seg selv produsere noe, men den kan brukes til å kjøpe råvarer, betale lønn eller investere i maskiner.',
      },
    },
    {
      id: 'soe-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en bedrift du kjenner til (for eksempel IKEA, Equinor eller en lokal virksomhet). Identifiser og beskriv alle fire produksjonsfaktorene som bedriften bruker.',
        solution: 'Eksempel med IKEA: Arbeidskraft: Designere, lagerarbeidere, kassemedarbeidere, ledere. Realkapital: Varehus, lagerbygninger, datasystemer, transportbiler. Naturressurser: Tre til møbler, bomull til tekstiler, metall til skruer og beslag. Entreprenørskap: Ingvar Kamprad grunnla IKEA med ideen om rimelige, flatpakkede møbler – en ny måte å selge møbler på som revolusjonerte bransjen.',
      },
    },
    {
      id: 'soe-1-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Produksjonsfaktorer** er ressursene som trengs for å produsere varer og tjenester
- **Arbeidskraft** er menneskelig innsats, både fysisk og mental
- **Realkapital** er produserte produksjonsmidler (maskiner, bygninger, utstyr)
- **Naturressurser** er gaver fra naturen (olje, skog, vann, mineraler)
- **Entreprenørskap** er evnen til å kombinere de andre faktorene på nye måter
- **Humankapital** (kunnskap og ferdigheter) er den viktigste ressursen i moderne økonomier
- **Finanskapital** (penger) er IKKE en produksjonsfaktor, men et middel for å skaffe dem`,
    },
    {
      id: 'soe-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor humankapital ofte regnes som den viktigste produksjonsfaktoren i moderne økonomier. Bruk Norge som eksempel.',
        solution: 'I moderne kunnskapsøkonomier skapes mesteparten av verdien gjennom kompetanse, kreativitet og innovasjon – ikke gjennom fysisk arbeid alene. I Norge utgjør humankapitalen rundt 75 prosent av nasjonalformuen, mens petroleumsformuen bare utgjør en liten brøkdel. Utdanning, forskning og kompetanseutvikling gjør arbeidskraften mer produktiv, driver innovasjon og gjør det mulig å skape stadig mer avanserte varer og tjenester.',
      },
    },
    {
      id: 'soe-1-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-1-3-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er en fornybar naturressurs?',
        options: [
          { id: 'a', text: 'Olje', isCorrect: false },
          { id: 'b', text: 'Kull', isCorrect: false },
          { id: 'c', text: 'Skog som forvaltes bærekraftig', isCorrect: true },
          { id: 'd', text: 'Jernmalm', isCorrect: false },
        ],
        solution: 'Skog som forvaltes bærekraftig er fornybar – trær kan plantes på nytt og vokse opp igjen. Olje, kull og jernmalm er alle ikke-fornybare ressurser som brukes opp når de utvinnes.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: Økonomiske modeller
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_1_4: TextbookChapter = {
  id: 'samfokonomi-1-1-4',
  courseId: 'samfokonomi-1',
  chapterNumber: '1.4',
  title: 'Økonomiske modeller',
  description: 'Hva økonomiske modeller er, ceteris paribus, kretsløpsmodellen og grunnleggende tilbud og etterspørsel.',
  estimatedMinutes: 20,
  competenceGoals: [
    'velge og bruke kilder, økonomiske teorier og modeller i arbeid med faglige spørsmål',
    'drøfte årsaker til økonomisk vekst og reflektere over bruttonasjonalproduktet som mål for verdiskaping',
  ],
  content: [
    {
      id: 'soe-1-4-intro',
      type: 'text',
      content: `# Økonomiske modeller

I dette kapittelet skal du lære:

- Hva en økonomisk modell er og hvorfor vi bruker dem
- Forutsetningen «ceteris paribus» og dens betydning
- Kretsløpsmodellen for økonomien
- Grunnleggende om tilbud og etterspørsel

Virkeligheten er enormt kompleks. For å forstå økonomien trenger vi forenklede fremstillinger som fanger det viktigste uten å drukne i detaljer. Disse forenklingene kaller vi modeller.`,
    },
    {
      id: 'soe-1-4-def-modell',
      type: 'definition',
      title: 'Økonomisk modell',
      content: `En **økonomisk modell** er en forenklet fremstilling av virkeligheten som brukes til å forstå, forklare og forutsi økonomiske sammenhenger.

**Kjennetegn ved modeller:**
- De forenkler virkeligheten ved å fokusere på det viktigste
- De utelater detaljer som er mindre relevante
- De kan uttrykkes som diagrammer, ligninger eller verbale beskrivelser
- De er ikke perfekte kopier av virkeligheten, men nyttige verktøy

Et kart er en god analogi: Et kart er ikke landskapet, men det hjelper oss å finne veien.`,
    },
    {
      id: 'soe-1-4-example-modell',
      type: 'example',
      title: 'Modeller i hverdagen',
      problem: 'Hva er eksempler på modeller vi bruker utenfor økonomien?',
      solution: `**Kart:** Et kart forenkler terrenget. Det viser veier og steder, men utelater trær, hus og mennesker. Likevel er det nyttig for navigasjon.

**Værmelding:** Meteorologer bruker matematiske modeller av atmosfæren. Modellene er ikke perfekte, men gir oss nyttige varsler.

**Arkitekttegning:** En plantegning viser romfordeling og mål, men ikke fargen på veggene eller møblene.

**Felles for alle modeller:** De forenkler for å gjøre det lettere å forstå det vesentlige. En modell som inkluderte alt, ville være like kompleks som virkeligheten selv – og dermed ubrukelig.`,
    },
    {
      id: 'soe-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvorfor bruker økonomer modeller?',
        options: [
          { id: 'a', text: 'Fordi virkeligheten er for enkel til å studere direkte', isCorrect: false },
          { id: 'b', text: 'Fordi modeller gir en perfekt kopi av virkeligheten', isCorrect: false },
          { id: 'c', text: 'Fordi virkeligheten er for kompleks, og modeller forenkler den slik at vi kan forstå sammenhenger', isCorrect: true },
          { id: 'd', text: 'Fordi det er billigere å bruke modeller enn å samle data', isCorrect: false },
        ],
        solution: 'Økonomer bruker modeller fordi den virkelige økonomien er enormt kompleks med millioner av aktører og beslutninger. Modeller forenkler ved å fokusere på de viktigste sammenhengene, slik at vi kan forstå, forklare og forutsi.',
      },
    },
    {
      id: 'soe-1-4-ceteris-paribus',
      type: 'text',
      content: `## Ceteris paribus

Et viktig prinsipp i økonomisk analyse er **ceteris paribus**, et latinsk uttrykk som betyr «alt annet likt» eller «alt annet holdt konstant».

Når økonomer sier «ceteris paribus», mener de: Vi endrer én variabel om gangen og ser på effekten, mens vi antar at alt annet forblir uendret.

**Eksempel:** «Hvis prisen på is øker, ceteris paribus, vil etterspørselen etter is falle.»

Her antar vi at inntekt, priser på andre varer, vær og preferanser forblir uendret. Vi isolerer effekten av prisøkningen.

**Hvorfor er dette viktig?**
I virkeligheten endrer mange ting seg samtidig. Ceteris paribus lar oss studere én ting om gangen. Uten dette prinsippet ville det vært umulig å si noe om årsak og virkning.`,
    },
    {
      id: 'soe-1-4-def-ceteris',
      type: 'definition',
      title: 'Ceteris paribus',
      content: `**Ceteris paribus** (latin: «alt annet likt») er en forutsetning som brukes i økonomisk analyse der man endrer én variabel om gangen og holder alle andre variabler konstant.

Dette gjør det mulig å isolere effekten av én enkelt endring. Forutsetningen er sentral i nesten all økonomisk modellering.`,
    },
    {
      id: 'soe-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva betyr «ceteris paribus»?',
        options: [
          { id: 'a', text: 'At alle variabler endrer seg samtidig', isCorrect: false },
          { id: 'b', text: 'At vi ser bort fra alle data', isCorrect: false },
          { id: 'c', text: 'At alt annet holdes konstant mens vi endrer én variabel', isCorrect: true },
          { id: 'd', text: 'At modellen er perfekt', isCorrect: false },
        ],
        solution: 'Ceteris paribus betyr at vi holder alt annet konstant og kun endrer én ting for å se effekten av den endringen isolert. Det er en forenkling, men nødvendig for å forstå årsak og virkning.',
      },
    },
    {
      id: 'soe-1-4-kretslop',
      type: 'text',
      content: `## Kretsløpsmodellen

**Kretsløpsmodellen** (også kalt sirkulasjonsmodellen) er en grunnleggende modell som viser hvordan penger og varer/tjenester strømmer mellom de økonomiske aktørene.

**Den enkleste versjonen med to aktører:**

I en forenklet økonomi med bare husholdninger og bedrifter har vi to strømmer:

**Realstrøm (varer og tjenester):**
- Husholdninger tilbyr arbeidskraft til bedrifter
- Bedrifter tilbyr varer og tjenester til husholdninger

**Pengestrøm:**
- Bedrifter betaler lønn til husholdninger
- Husholdninger betaler for varer og tjenester til bedrifter

Disse strømmene går i sirkel – derav navnet «kretsløp». Pengene som bedriften betaler i lønn, får de tilbake når husholdningen kjøper varer.

**Utvidet versjon:**
I en mer realistisk modell inkluderer vi også det offentlige (skatter, overføringer, offentlige tjenester) og utlandet (import, eksport). Da blir bildet mer komplekst, men prinsippet er det samme: Verdier og penger sirkulerer mellom aktørene.`,
    },
    {
      id: 'soe-1-4-def-kretslop',
      type: 'definition',
      title: 'Kretsløpsmodellen',
      content: `**Kretsløpsmodellen** er en økonomisk modell som viser hvordan penger, varer, tjenester og produksjonsfaktorer strømmer mellom de ulike aktørene i økonomien (husholdninger, bedrifter, det offentlige og utlandet).

Modellen illustrerer at økonomien er et sammenhengende system der én aktørs utgift er en annen aktørs inntekt.`,
    },
    {
      id: 'soe-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-1-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'I den enkle kretsløpsmodellen, hva tilbyr husholdningene til bedriftene?',
        options: [
          { id: 'a', text: 'Varer og tjenester', isCorrect: false },
          { id: 'b', text: 'Skatter og avgifter', isCorrect: false },
          { id: 'c', text: 'Arbeidskraft', isCorrect: true },
          { id: 'd', text: 'Offentlige tjenester', isCorrect: false },
        ],
        solution: 'I den enkle kretsløpsmodellen tilbyr husholdningene arbeidskraft til bedriftene, og får lønn tilbake. Bedriftene produserer varer og tjenester som de selger til husholdningene.',
      },
    },
    {
      id: 'soe-1-4-tilbud-ettersporsel',
      type: 'text',
      content: `## Tilbud og etterspørsel – en første introduksjon

Den kanskje viktigste modellen i hele samfunnsøkonomien er modellen for **tilbud og etterspørsel**. Her gir vi bare en kort introduksjon – vi går mye dypere inn i dette senere.

**Etterspørsel:** Hvor mye av en vare forbrukerne ønsker å kjøpe ved ulike priser.
- Når prisen er lav, vil folk kjøpe mye
- Når prisen er høy, vil folk kjøpe lite
- Etterspørselskurven skrår nedover (fra venstre mot høyre)

**Tilbud:** Hvor mye av en vare produsentene ønsker å selge ved ulike priser.
- Når prisen er lav, vil produsentene tilby lite
- Når prisen er høy, vil produsentene tilby mye
- Tilbudskurven skrår oppover

**Likevekt:** Der tilbud og etterspørsel møtes, finner vi markedslikevekten – den prisen der mengden som tilbys er lik mengden som etterspørres.

Denne modellen er et perfekt eksempel på hvordan økonomer forenkler virkeligheten for å forstå den.`,
    },
    {
      id: 'soe-1-4-note-tilbud',
      type: 'note',
      title: 'Tilbud og etterspørsel i detalj',
      content: 'Vi går mye grundigere gjennom tilbud og etterspørsel i seksjon 2 av denne læreboken. Her er det nok å forstå det grunnleggende prinsippet: Prisen på en vare bestemmes av samspillet mellom de som vil kjøpe (etterspørsel) og de som vil selge (tilbud).',
    },
    {
      id: 'soe-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-1-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva skjer med etterspørselen etter en vare, ceteris paribus, dersom prisen øker?',
        options: [
          { id: 'a', text: 'Etterspørselen øker', isCorrect: false },
          { id: 'b', text: 'Etterspørselen forblir uendret', isCorrect: false },
          { id: 'c', text: 'Etterspørselen synker', isCorrect: true },
          { id: 'd', text: 'Tilbudet øker', isCorrect: false },
        ],
        solution: 'Ifølge etterspørselsloven vil etterspørselen etter en vare synke når prisen øker, ceteris paribus. Folk kjøper mindre av noe som blir dyrere. Etterspørselskurven skrår nedover.',
      },
    },
    {
      id: 'soe-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva kretsløpsmodellen viser. Tegn opp en enkel versjon med to aktører (husholdninger og bedrifter) og vis både realstrøm og pengestrøm.',
        solution: 'Kretsløpsmodellen viser hvordan verdier sirkulerer i økonomien. I den enkle versjonen med to aktører: Husholdninger tilbyr arbeidskraft til bedrifter (realstrøm), og bedrifter betaler lønn til husholdninger (pengestrøm). Bedrifter produserer varer og tjenester som de selger til husholdninger (realstrøm), og husholdninger betaler for disse (pengestrøm). Pilene går i sirkel – pengene bedriften betaler ut i lønn, kommer tilbake når husholdningen handler.',
      },
    },
    {
      id: 'soe-1-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- En **økonomisk modell** er en forenklet fremstilling av virkeligheten som hjelper oss å forstå sammenhenger
- **Ceteris paribus** betyr «alt annet likt» – vi endrer én variabel om gangen for å isolere effekten
- **Kretsløpsmodellen** viser hvordan penger og varer sirkulerer mellom aktørene i økonomien
- **Tilbud og etterspørsel** er en sentral modell: høyere pris gir lavere etterspørsel og høyere tilbud
- **Likevektsprisen** er den prisen der tilbudt mengde er lik etterspurt mengde`,
    },
    {
      id: 'soe-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Bruk begrepet «ceteris paribus» til å formulere en økonomisk påstand om sammenhengen mellom inntekt og forbruk. Forklar hva du holder konstant og hva som endres.',
        solution: 'Påstand: «Hvis husholdningens inntekt øker, ceteris paribus, vil forbruket øke.» Her endrer vi inntektsvariabelen og holder alt annet konstant: priser, preferanser, formue, rente og forventninger. Vi isolerer effekten av økt inntekt, som normalt fører til at folk bruker mer penger. Uten ceteris paribus kunne vi ikke vite om økt forbruk skyldtes økt inntekt eller lavere priser.',
      },
    },
    {
      id: 'soe-1-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-1-4-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hva er likevektsprisen i et marked?',
        options: [
          { id: 'a', text: 'Den laveste prisen produsenten aksepterer', isCorrect: false },
          { id: 'b', text: 'Den høyeste prisen forbrukeren vil betale', isCorrect: false },
          { id: 'c', text: 'Prisen der tilbudt mengde er lik etterspurt mengde', isCorrect: true },
          { id: 'd', text: 'Prisen som staten fastsetter', isCorrect: false },
        ],
        solution: 'Likevektsprisen er prisen der tilbudet (hva produsentene ønsker å selge) er nøyaktig lik etterspørselen (hva forbrukerne ønsker å kjøpe). Ved denne prisen er det hverken overskudd eller mangel i markedet.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5: Økonomisk historie og systemer
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_1_5: TextbookChapter = {
  id: 'samfokonomi-1-1-5',
  courseId: 'samfokonomi-1',
  chapterNumber: '1.5',
  title: 'Økonomisk historie og systemer',
  description: 'Markedsøkonomi, planøkonomi og blandingsøkonomi, med fokus på den norske modellen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'velge og bruke kilder, økonomiske teorier og modeller i arbeid med faglige spørsmål',
    'drøfte årsaker til økonomisk vekst og reflektere over bruttonasjonalproduktet som mål for verdiskaping',
  ],
  content: [
    {
      id: 'soe-1-5-intro',
      type: 'text',
      content: `# Økonomisk historie og systemer

I dette kapittelet skal du lære:

- Hva en markedsøkonomi er og hvordan den fungerer
- Hva en planøkonomi er og hvilke utfordringer den har
- Hva en blandingsøkonomi er
- Hvordan den norske modellen kombinerer marked og stat

Gjennom historien har samfunn organisert sin økonomi på ulike måter. Hvordan et land svarer på de tre grunnleggende spørsmålene (hva, hvordan, for hvem) avhenger av hvilket økonomisk system det bruker.`,
    },
    {
      id: 'soe-1-5-markedsokonomi',
      type: 'text',
      content: `## Markedsøkonomi

I en ren **markedsøkonomi** er det markedet – samspillet mellom kjøpere og selgere – som bestemmer hva som produseres, hvordan og for hvem.

**Kjennetegn:**
- Privat eiendomsrett: Enkeltpersoner og bedrifter eier produksjonsmidlene
- Frivillig bytte: Handel skjer frivillig mellom kjøper og selger
- Prissignaler: Prisene styrer ressursallokeringen
- Konkurranse: Bedrifter konkurrerer om kunder, noe som driver innovasjon og effektivitet
- Begrenset statlig innblanding

**Adam Smith** (1723–1790), den skotske økonomen, er kjent for ideen om «den usynlige hånd»: Når hver enkelt aktør forfølger sin egeninteresse, kan dette føre til et resultat som er bra for samfunnet som helhet.

**Fordeler:**
- Effektiv ressursallokering gjennom prissystemet
- Innovasjon og entreprenørskap belønnes
- Stor valgfrihet for forbrukere
- Dynamisk og tilpasningsdyktig

**Ulemper:**
- Kan gi store ulikheter i inntekt og formue
- Markedssvikt: Monopoler, forurensning, fellesgoder underproduseres
- Ustabilitet: Konjunktursvingninger og finanskriser
- Mangler omsorg for dem som faller utenfor`,
    },
    {
      id: 'soe-1-5-def-markedsokonomi',
      type: 'definition',
      title: 'Markedsøkonomi',
      content: `**Markedsøkonomi** er et økonomisk system der markedet – samspillet mellom tilbud og etterspørsel – bestemmer hva som produseres, hvordan og for hvem. Privat eiendomsrett, frivillig bytte og konkurranse er sentrale kjennetegn.

Ingen land har en helt ren markedsøkonomi. Selv USA, som regnes som svært markedsorientert, har statlige reguleringer, offentlige skoler og offentlig helseforsikring.`,
    },
    {
      id: 'soe-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er «den usynlige hånd» ifølge Adam Smith?',
        options: [
          { id: 'a', text: 'Statens styring av økonomien gjennom lovgivning', isCorrect: false },
          { id: 'b', text: 'At markedskreftene kan føre til gode samfunnsresultater når aktørene følger sin egeninteresse', isCorrect: true },
          { id: 'c', text: 'At monopoler styrer markedet i hemmelighet', isCorrect: false },
          { id: 'd', text: 'At forbrukerne alltid tar rasjonelle valg', isCorrect: false },
        ],
        solution: 'Adam Smiths «usynlige hånd» betyr at når individer og bedrifter handler ut fra egeninteresse i et fritt marked, kan det samlede resultatet bli til fordel for hele samfunnet. Prismekanismen koordinerer handlingene uten sentral styring.',
      },
    },
    {
      id: 'soe-1-5-planokonomi',
      type: 'text',
      content: `## Planøkonomi

I en **planøkonomi** er det staten som bestemmer hva som produseres, hvordan og for hvem. Sentrale planmyndigheter tar de økonomiske beslutningene.

**Kjennetegn:**
- Statlig eierskap av produksjonsmidlene
- Sentral planlegging: Byråkrater bestemmer produksjonsmål
- Priser fastsettes av staten, ikke av markedet
- Liten eller ingen privat eiendomsrett til bedrifter
- Politiske mål styrer produksjonen

**Historiske eksempler:**
- Sovjetunionen (1922–1991): Femårsplaner med detaljerte produksjonsmål
- DDR (Øst-Tyskland, 1949–1990)
- Mao Zedongs Kina (1949–1978)

**Fordeler:**
- Kan sikre likhet i fordeling
- Kan prioritere bestemte mål (f.eks. industrialisering)
- Kan unngå arbeidsledighet (alle får jobb)

**Ulemper:**
- Ineffektiv ressursbruk: Vanskelig å planlegge produksjonen av millioner av varer
- Mangel på innovasjon: Uten konkurranse er det lite incentiv til å forbedre seg
- Mangeløkonomi: Ofte mangel på forbruksvarer
- Maktkonsentrasjon: Politisk elite tar alle beslutninger
- Informasjonsproblem: Planleggerne har ikke nok informasjon til å ta gode beslutninger`,
    },
    {
      id: 'soe-1-5-def-planokonomi',
      type: 'definition',
      title: 'Planøkonomi',
      content: `**Planøkonomi** (også kalt kommandoøkonomi) er et økonomisk system der staten eier produksjonsmidlene og sentrale planmyndigheter bestemmer hva som skal produseres, i hvilke mengder, til hvilke priser og for hvem.

Sovjetunionen var det mest kjente eksempelet. Systemet kollapset i 1991, delvis på grunn av ineffektivitet og manglende evne til å tilpasse seg endringer.`,
    },
    {
      id: 'soe-1-5-example-planokonomi',
      type: 'example',
      title: 'Planøkonomiens utfordringer i Sovjetunionen',
      problem: 'Hva var det grunnleggende problemet med planøkonomien i Sovjetunionen?',
      solution: `**Informasjonsproblemet:**
I en moderne økonomi finnes det millioner av ulike varer og tjenester. I Sovjetunionen skulle statlige planleggere bestemme priser og produksjonsmengder for alle disse. Det var en umulig oppgave.

**Eksempel: Spikerproduksjon**
Når planleggerne satte produksjonsmålet i antall spiker, produserte fabrikkene veldig mange små, ubrukelige spiker. Når målet ble satt i vekt, produserte de noen få gigantiske spiker.

**Konsekvensen:**
- Butikkhyllene var ofte tomme for forbruksvarer
- Køer for mat og andre nødvendigheter
- Dårlig kvalitet på varer
- Et stort svart marked vokste frem

**Lærdommen:** Prissystemet i en markedsøkonomi overfører enorme mengder informasjon. Uten dette informasjonssystemet er det nesten umulig å styre en moderne økonomi effektivt.`,
    },
    {
      id: 'soe-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er en viktig ulempe ved planøkonomi?',
        options: [
          { id: 'a', text: 'For stor konkurranse mellom bedrifter', isCorrect: false },
          { id: 'b', text: 'Planleggerne mangler informasjon til å ta gode beslutninger for hele økonomien', isCorrect: true },
          { id: 'c', text: 'For mye privat eiendomsrett', isCorrect: false },
          { id: 'd', text: 'Prisene er for lave', isCorrect: false },
        ],
        solution: 'Det grunnleggende problemet med planøkonomi er informasjonsproblemet. En sentral planmyndighet kan umulig ha nok kunnskap om millioner av forbrukeres preferanser, bedrifters kostnader og teknologiske muligheter til å ta gode beslutninger for hele økonomien.',
      },
    },
    {
      id: 'soe-1-5-blandingsokonomi',
      type: 'text',
      content: `## Blandingsøkonomi

I praksis har de fleste moderne land en **blandingsøkonomi** som kombinerer elementer fra markedsøkonomi og planøkonomi.

**Kjennetegn ved blandingsøkonomi:**
- Markedet styrer mesteparten av produksjonen
- Staten griper inn der markedet ikke fungerer godt nok
- Privat eiendomsrett, men med reguleringer
- Offentlig sektor tilbyr viktige tjenester (helse, utdanning, forsvar)
- Omfordeling gjennom skatter og overføringer

**Statens roller i en blandingsøkonomi:**
1. **Tilby fellesgoder:** Forsvar, rettsvesen, infrastruktur
2. **Korrigere markedssvikt:** Regulere monopoler, forurensning, forbrukervern
3. **Omfordele inntekt:** Skatter, trygder, sosiale stønader
4. **Stabilisere økonomien:** Motvirke konjunktursvingninger gjennom penge- og finanspolitikk`,
    },
    {
      id: 'soe-1-5-def-blandingsokonomi',
      type: 'definition',
      title: 'Blandingsøkonomi',
      content: `**Blandingsøkonomi** er et økonomisk system som kombinerer elementer fra markedsøkonomi og statlig styring. Markedet styrer mesteparten av produksjonen, men staten griper inn for å korrigere markedssvikt, tilby fellesgoder og omfordele inntekt.

De fleste moderne land, inkludert Norge, har en form for blandingsøkonomi.`,
    },
    {
      id: 'soe-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-1-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en blandingsøkonomi?',
        options: [
          { id: 'a', text: 'Bare markedet styrer all produksjon og fordeling', isCorrect: false },
          { id: 'b', text: 'Bare staten styrer all produksjon og fordeling', isCorrect: false },
          { id: 'c', text: 'En kombinasjon av markedsstyring og statlig inngripen', isCorrect: true },
          { id: 'd', text: 'At det ikke finnes noen form for økonomisk styring', isCorrect: false },
        ],
        solution: 'En blandingsøkonomi kombinerer det beste fra begge systemer: Markedet styrer mesteparten av produksjonen (effektivitet), men staten griper inn der markedet svikter (rettferdighet, fellesgoder, stabilitet).',
      },
    },
    {
      id: 'soe-1-5-norske-modellen',
      type: 'text',
      content: `## Den norske modellen

Norge har utviklet en særegen form for blandingsøkonomi som ofte kalles **den norske modellen** (eller den nordiske modellen).

**Kjennetegn:**
- **Stor offentlig sektor:** Staten tilbyr helse, utdanning og omsorg
- **Omfattende velferdsstat:** Trygder, sykepenger, pensjon, arbeidsledighetstrygd
- **Trepartssamarbeid:** Samarbeid mellom stat, arbeidsgivere og arbeidstakere
- **Koordinert lønnsdannelse:** Frontfagsmodellen sikrer at lønningene ikke vokser raskere enn verdiskapingen
- **Høy grad av likhet:** Relativt små forskjeller mellom rik og fattig
- **Høy sysselsetting:** De fleste deltar i arbeidslivet
- **Oljefondet:** Petroleumsinntektene forvaltes langsiktig gjennom Statens pensjonsfond utland

**Hvorfor fungerer den norske modellen?**
- Tillit: Nordmenn har høy tillit til hverandre og til institusjoner
- Samarbeid: Sterke arbeidsgivere og fagforeninger som samarbeider
- God utdanning: Gratis utdanning gir like muligheter
- Stabilt demokrati: Lang tradisjon for demokratisk styring
- Petroleumsformue: Oljeinntekter gir økonomisk handlefrihet`,
    },
    {
      id: 'soe-1-5-example-norge',
      type: 'example',
      title: 'Markedsøkonomi og statlig inngripen i Norge',
      problem: 'Gi eksempler på hvordan Norge kombinerer marked og stat.',
      solution: `**Markedsstyrt:**
- Dagligvarehandel: Private aktører (Rema, Kiwi, Coop) konkurrerer om kunder
- Boligmarked: Priser bestemmes av tilbud og etterspørsel
- Klær, elektronikk, biler: Privat produksjon og salg

**Statlig styrt:**
- Helsevesenet: Offentlige sykehus, gratis behandling
- Utdanning: Offentlige skoler og universiteter
- Forsvar og politi: Statlig ansvar

**Kombinasjon:**
- Barnehager: Private og offentlige, men med statlig regulering av pris og kvalitet
- Legemidler: Privat produksjon, men statlig regulering av priser og tilgang
- Elektrisitet: Privat kraftproduksjon, men statlig regulering av nettet

Norges modell viser at markedsøkonomi og statlig inngripen kan utfylle hverandre.`,
    },
    {
      id: 'soe-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-1-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er trepartssamarbeidet i den norske modellen?',
        options: [
          { id: 'a', text: 'Samarbeid mellom tre nordiske land', isCorrect: false },
          { id: 'b', text: 'Samarbeid mellom stat, arbeidsgivere og arbeidstakere', isCorrect: true },
          { id: 'c', text: 'Samarbeid mellom tre politiske partier', isCorrect: false },
          { id: 'd', text: 'Samarbeid mellom husholdninger, bedrifter og banker', isCorrect: false },
        ],
        solution: 'Trepartssamarbeidet er samarbeidet mellom staten, arbeidsgiverorganisasjoner (som NHO) og arbeidstakerorganisasjoner (som LO). De forhandler om lønn, arbeidsvilkår og økonomisk politikk, noe som bidrar til stabilitet og lave konfliktnivåer.',
      },
    },
    {
      id: 'soe-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign markedsøkonomi og planøkonomi. Forklar fordeler og ulemper ved hvert system, og begrunn hvorfor de fleste land i dag har en form for blandingsøkonomi.',
        solution: 'Markedsøkonomi: Fordeler – effektiv ressursbruk, innovasjon, valgfrihet. Ulemper – ulikhet, markedssvikt, ustabilitet. Planøkonomi: Fordeler – likhet, kan prioritere mål, lav arbeidsledighet. Ulemper – ineffektivt, mangel på innovasjon, informasjonsproblem. De fleste land har blandingsøkonomi fordi markedet alene ikke løser alle problemer (markedssvikt, ulikhet), mens ren planøkonomi er for ineffektiv. Blandingsøkonomien tar det beste fra begge: markedets effektivitet kombinert med statlig inngripen for rettferdighet og stabilitet.',
      },
    },
    {
      id: 'soe-1-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Markedsøkonomi** lar tilbud og etterspørsel styre produksjonen – effektivt, men kan gi ulikhet og markedssvikt
- **Planøkonomi** lar staten styre alt – kan sikre likhet, men er ineffektiv og lider av informasjonsproblemer
- **Blandingsøkonomi** kombinerer marked og stat – de fleste moderne land bruker dette systemet
- **Den norske modellen** kjennetegnes av stor offentlig sektor, velferdsstat, trepartssamarbeid og høy likhet
- Valget av økonomisk system handler om avveiningen mellom effektivitet og rettferdighet`,
    },
    {
      id: 'soe-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hva den norske modellen er. Diskuter minst tre kjennetegn ved modellen og vurder hvorfor den har vært vellykket.',
        solution: 'Den norske modellen er Norges variant av blandingsøkonomi. Tre viktige kjennetegn: (1) Trepartssamarbeid – samarbeid mellom stat, arbeidstakere og arbeidsgivere gir koordinert lønnsdannelse og lavt konfliktnivå. (2) Omfattende velferdsstat – gratis utdanning og helsevesen gir like muligheter og trygghet for alle. (3) Oljefondet – petroleumsinntektene forvaltes langsiktig, noe som gir økonomisk stabilitet. Modellen har vært vellykket fordi den kombinerer markedsøkonomiens effektivitet med statlig omfordeling, høy tillit mellom folk og institusjoner, og en kultur for samarbeid fremfor konfrontasjon.',
      },
    },
    {
      id: 'soe-1-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-1-5-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er IKKE et kjennetegn ved den norske modellen?',
        options: [
          { id: 'a', text: 'Trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere', isCorrect: false },
          { id: 'b', text: 'Omfattende velferdsstat med universelle ordninger', isCorrect: false },
          { id: 'c', text: 'Svært lav skatt og minimal offentlig sektor', isCorrect: true },
          { id: 'd', text: 'Høy grad av likhet sammenlignet med andre land', isCorrect: false },
        ],
        solution: 'Den norske modellen kjennetegnes tvert imot av relativt høye skatter og en stor offentlig sektor. Det er disse skattene som finansierer velferdsstaten, gratis utdanning og helsevesenet. Lav skatt og minimal offentlig sektor er mer typisk for liberale markedsøkonomier.',
      },
    },
    {
      id: 'soe-1-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'soe-1-5-ex-8',
        number: '8',
        type: 'classic',
        task: 'Gi et eksempel på noe i Norge som styres av markedet, noe som styres av staten, og noe som er en kombinasjon. Forklar hvorfor hvert område er organisert på denne måten.',
        solution: 'Markedsstyrt: Dagligvarehandel – private butikker konkurrerer om kunder. Markedet fungerer godt her fordi det er mange aktører, og konkurranse gir lave priser og bredt utvalg. Statlig styrt: Forsvar – staten har monopol på militæret. Det er et fellesgode som markedet ikke kan tilby, fordi ingen enkeltperson ville betale for det frivillig. Kombinasjon: Helsevesenet – offentlige sykehus med noe private tilbud. Staten sikrer at alle får behandling uavhengig av betalingsevne, men private aktører supplerer med valgfrihet.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const SAMFOKONOMI_1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_1_1_1, CHAPTER_SAMFOKONOMI_1_1_2, CHAPTER_SAMFOKONOMI_1_1_3,
  CHAPTER_SAMFOKONOMI_1_1_4, CHAPTER_SAMFOKONOMI_1_1_5,
];
