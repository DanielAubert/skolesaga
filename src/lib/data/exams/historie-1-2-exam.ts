/**
 * Prøve: Historisk metode og kildekritikk
 *
 * 5 åpne spørsmål - 60 minutter
 * Dekker kapittel 1 i Historie VG2/VG3
 */

import type { ChapterExam } from '@/lib/types/textbook';

export const EXAM_HISTORIE_1_2: ChapterExam = {
  id: 'historie-1-2-exam',
  chapterId: 'historie-1-2',
  courseId: 'historie',
  title: 'Prøve: Historisk metode og kildekritikk',
  description: 'Denne prøven tester din forståelse av historisk metode, kildekritikk og hvordan historisk kunnskap blir til.',
  instructions: `
## Instruksjoner

- Du har **60 minutter** til å besvare alle 5 spørsmål
- Skriv utfyllende svar med egne ord
- Bruk fagbegreper der det er naturlig
- Hvert spørsmål teller like mye (20% av totalkarakteren)
- Du kan ikke bruke hjelpemidler

**Tips:** Les gjennom alle spørsmålene før du begynner. Fordel tiden jevnt.
  `.trim(),
  duration: 60,
  competenceGoals: [
    'gjøre rede for hvordan historisk kunnskap blir til',
    'bruke kildekritikk til å vurdere historiske kilder',
    'reflektere over hvordan historie kan brukes og misbrukes',
  ],
  questions: [
    {
      id: 'historie-1-2-exam-q1',
      number: 1,
      question: `## Spørsmål 1: Primær- og sekundærkilder

Forklar forskjellen mellom primærkilder og sekundærkilder i historisk forskning. Gi minst to eksempler på hver type, og forklar hvorfor det er viktig for en historiker å skille mellom disse kildetypene.`,
      maxPoints: 20,
      competenceGoals: ['gjøre rede for hvordan historisk kunnskap blir til'],
      gradingGuide: {
        expectedContent: [
          'Definisjon av primærkilde (fra tiden som studeres)',
          'Definisjon av sekundærkilde (bearbeidet fremstilling)',
          'Minst 2 eksempler på primærkilder',
          'Minst 2 eksempler på sekundærkilder',
          'Forklaring på hvorfor skillet er viktig',
        ],
        excellentAnswer: `Primærkilder er kilder som stammer direkte fra den tiden historikeren studerer. Dette kan være dagbøker, brev, lover, avisartikler, fotografier eller gjenstander fra perioden. For eksempel er et brev skrevet av en soldat under 1. verdenskrig en primærkilde, det samme er Grunnloven fra 1814.

Sekundærkilder er bearbeidede fremstillinger som er laget i ettertid, basert på primærkilder. Dette inkluderer historiebøker, vitenskapelige artikler, dokumentarfilmer og lærebøker. For eksempel er en moderne bok om vikingtiden en sekundærkilde.

Det er viktig å skille mellom disse fordi primærkilder gir direkte tilgang til fortiden, men kan være partiske eller ufullstendige. Sekundærkilder tilbyr analyse og sammenheng, men er allerede tolkninger. En god historiker bruker begge, men vurderer dem ulikt - primærkilder for førstehånds informasjon, sekundærkilder for å forstå forskningsstatus og andres tolkninger.`,
        goodAnswer: `Primærkilder er kilder fra den tiden man studerer, som dagbøker og brev. Sekundærkilder er bearbeidede fremstillinger som historiebøker. Eksempler på primærkilder er fotografier fra 2. verdenskrig og gamle lover. Eksempler på sekundærkilder er dokumentarer og artikler. Det er viktig å skille mellom dem fordi primærkilder gir direkte informasjon mens sekundærkilder er tolkninger.`,
        passingAnswer: `Primærkilder er fra den tiden man studerer. Sekundærkilder er skrevet etterpå. Eksempler: dagbok (primær), historiebok (sekundær). Det er viktig å vite forskjellen.`,
        commonMistakes: [
          'Forveksler primær og sekundær',
          'Gir for få eller ingen eksempler',
          'Forklarer ikke hvorfor skillet er viktig',
          'Bruker ikke fagbegreper',
        ],
        keyTerms: ['primærkilde', 'sekundærkilde', 'førstehåndsberetning', 'bearbeidet', 'tolkning'],
      },
    },
    {
      id: 'historie-1-2-exam-q2',
      number: 2,
      question: `## Spørsmål 2: Kildekritiske spørsmål

Du finner et brev fra 1905 skrevet av en norsk politiker som argumenterer for unionsoppløsning med Sverige. Hvilke kildekritiske spørsmål bør du stille for å vurdere denne kilden? Forklar hvorfor hvert spørsmål er viktig.`,
      maxPoints: 20,
      competenceGoals: ['bruke kildekritikk til å vurdere historiske kilder'],
      gradingGuide: {
        expectedContent: [
          'Opphavsspørsmål (hvem, når, hvor, hvorfor)',
          'Innholdsspørsmål (hva forteller kilden, troverdighet)',
          'Tendensspørsmål (hensikt, partiskhet)',
          'Representativitetsspørsmål (typisk, kan generalisere)',
          'Forklaring på hvorfor hvert spørsmål er viktig',
        ],
        excellentAnswer: `For å vurdere dette brevet kritisk, ville jeg stilt følgende spørsmål:

**Opphavsspørsmål:**
- Hvem var politikeren? Tilhørte han et bestemt parti? Dette påvirker perspektivet.
- Når nøyaktig ble brevet skrevet? Før eller etter folkeavstemningen?
- Hvem var brevet adressert til? En kollega, en avis, familien?
- Hva var formålet med brevet? Overbevise, informere, eller dokumentere?

**Innholdsspørsmål:**
- Hvilke argumenter bruker han? Er de basert på fakta eller følelser?
- Stemmer informasjonen med andre kilder fra samme tid?
- Hva utelater han som kan være relevant?

**Tendensspørsmål:**
- Har han personlige interesser i unionsoppløsningen?
- Bruker han verdiladede ord eller propaganda-teknikker?
- Er fremstillingen balansert eller ensidig?

**Representativitetsspørsmål:**
- Representerer han typiske synspunkter, eller er han ekstrem?
- Finnes det motstridende kilder fra unionstilhengere?

Disse spørsmålene er viktige fordi de hjelper oss å forstå kildens pålitelighet, partiskhet og begrensninger. En politiker som aktivt jobbet for unionsoppløsning vil naturlig fremstille saken positivt.`,
        goodAnswer: `Jeg ville stilt følgende spørsmål:
- Hvem er politikeren og hvilket parti tilhører han?
- Når ble brevet skrevet?
- Hvem skrev han til?
- Har han personlige interesser i saken?
- Er innholdet troverdig sammenlignet med andre kilder?
- Er han typisk for tiden eller ekstrem?

Disse spørsmålene er viktige for å vurdere om kilden er pålitelig og balansert.`,
        passingAnswer: `Viktige spørsmål: Hvem skrev brevet? Når? Hvorfor? Er det sant? Har han grunn til å lyve? Dette er viktig for å vite om vi kan stole på kilden.`,
        commonMistakes: [
          'Stiller bare noen få spørsmål',
          'Forklarer ikke hvorfor spørsmålene er viktige',
          'Glemmer tendens/partiskhet',
          'Bruker ikke de fire hovedkategoriene',
        ],
        keyTerms: ['opphav', 'innhold', 'tendens', 'representativitet', 'troverdighet', 'partisk'],
      },
    },
    {
      id: 'historie-1-2-exam-q3',
      number: 3,
      question: `## Spørsmål 3: Levninger og beretninger

Forklar forskjellen mellom levninger og beretninger som historiske kilder. Gi eksempler og diskuter fordeler og ulemper med hver kildetype.`,
      maxPoints: 20,
      competenceGoals: ['gjøre rede for hvordan historisk kunnskap blir til'],
      gradingGuide: {
        expectedContent: [
          'Definisjon av levninger (spor etter fortiden)',
          'Definisjon av beretninger (fortellinger om fortiden)',
          'Eksempler på begge',
          'Fordeler og ulemper med levninger',
          'Fordeler og ulemper med beretninger',
        ],
        excellentAnswer: `**Levninger** er fysiske spor etter fortiden - ting som eksisterer fordi de ble brukt eller skapt i fortiden, ikke for å fortelle om den. Eksempler inkluderer bygninger, redskaper, våpen, klær, møbler og arkeologiske funn. En vikinghjelm eller en middelalderkirke er levninger.

**Beretninger** er fortellinger om fortiden - kilder som er skapt for å formidle informasjon om hendelser eller tilstander. Eksempler inkluderer krøniker, memoarer, dagbøker, muntlige overleveringer og historiebøker. Snorres kongesagaer er beretninger.

**Fordeler med levninger:**
- Kan ikke "lyve" - de er fysiske bevis
- Gir konkret informasjon om dagligliv, teknologi, materialer
- Mindre påvirket av forfatterens perspektiv

**Ulemper med levninger:**
- Kan være vanskelige å tolke
- Gir ikke alltid kontekst eller forklaring
- Overlevelsesbias - ikke alt bevares likt

**Fordeler med beretninger:**
- Gir kontekst, forklaring og perspektiver
- Forteller om hendelser, tanker og motiver
- Ofte lettere å forstå

**Ulemper med beretninger:**
- Kan være partiske eller feilaktige
- Avhenger av forfatterens hukommelse og hensikt
- Kan være propaganda eller underholdning

En god historiker bruker begge kildetyper sammen for å få et mest mulig fullstendig bilde.`,
        goodAnswer: `Levninger er fysiske spor fra fortiden, som bygninger og gjenstander. De er ikke laget for å fortelle oss noe, men finnes fordi de ble brukt. Beretninger er fortellinger om fortiden, som krøniker og dagbøker.

Fordeler med levninger: De kan ikke lyve, gir konkret informasjon.
Ulemper: Vanskelige å tolke, gir ikke forklaring.

Fordeler med beretninger: Gir kontekst og forklaring.
Ulemper: Kan være partiske eller feil.`,
        passingAnswer: `Levninger er ting fra fortiden, som hus og ting. Beretninger er historier om fortiden. Levninger viser hva folk brukte. Beretninger forteller hva som skjedde.`,
        commonMistakes: [
          'Forveksler levninger og beretninger',
          'Gir ikke eksempler',
          'Diskuterer ikke fordeler/ulemper',
          'Ensidig fremstilling',
        ],
        keyTerms: ['levning', 'beretning', 'fysisk spor', 'fortelling', 'tolkning', 'overlevelsesbias'],
      },
    },
    {
      id: 'historie-1-2-exam-q4',
      number: 4,
      question: `## Spørsmål 4: Historiebruk og misbruk

Drøft påstanden: "Historien skrives av seierherrene." Forklar hvordan historie kan brukes og misbrukes, og gi konkrete eksempler.`,
      maxPoints: 20,
      competenceGoals: ['reflektere over hvordan historie kan brukes og misbrukes'],
      gradingGuide: {
        expectedContent: [
          'Forklaring av påstanden',
          'Diskusjon av hvordan makt påvirker historieskrivning',
          'Eksempler på historiebruk (legitimering, nasjonsbygging)',
          'Eksempler på historiemisbruk (propaganda, forfalskning)',
          'Nyansering - moderne historikere prøver å inkludere flere stemmer',
        ],
        excellentAnswer: `Påstanden "Historien skrives av seierherrene" handler om at de med makt ofte kontrollerer hvordan fortiden blir fremstilt. Dette er delvis sant, men bildet er mer nyansert.

**Hvorfor påstanden har noe for seg:**
Historisk har makthavere hatt ressurser til å skrive og bevare sin versjon av historien. Erobrere har ofte fremstilt seg selv som sivilisatorer, mens taperne har blitt marginalisert. Kolonimaktene skrev koloniens historie fra sitt perspektiv. Mange urfolks og undertrykte gruppers historier ble ikke nedskrevet.

**Historiebruk - legitime formål:**
- Nasjonsbygging: Bruke felles historie til å skape identitet
- Læring: Forstå fortiden for å ta bedre beslutninger
- Minne: Hedre ofre og viktige hendelser
- Rettferdighet: Dokumentere overgrep for forsoning

**Historiemisbruk - problematiske formål:**
- Propaganda: Nazi-Tysklands bruk av "ariermyten"
- Legitimering: Diktatorer som omskriver historie for å rettferdiggjøre makt
- Nasjonalisme: Overdreven fokus på egen storhet, nedvurdering av andre
- Fornektelse: Holocaust-fornektelse, fornektelse av folkemord

**Nyansering:**
Moderne historieforskning prøver aktivt å inkludere flere perspektiver - kvinnehistorie, arbeiderhistorie, urfolks historie. Kildekritikk hjelper oss å avsløre partiskhet i eldre kilder. Selv om seierherrene tradisjonelt har dominert, jobber historikere i dag med å gi stemme til de som tidligere ble oversett.`,
        goodAnswer: `Påstanden betyr at de med makt kontrollerer historieskrivningen. Dette stemmer delvis fordi makthavere har hatt ressurser til å skrive sin versjon.

Historiebruk: Nasjonsbygging, læring, minne.
Historiemisbruk: Propaganda (Nazi-Tyskland), legitimering av makt, fornektelse av overgrep.

I dag prøver historikere å inkludere flere perspektiver og gi stemme til grupper som tidligere ble oversett.`,
        passingAnswer: `Seierherrene har ofte skrevet historien. De med makt bestemmer hva som blir fortalt. Historie kan misbrukes til propaganda. I dag prøver man å høre flere sider.`,
        commonMistakes: [
          'Ensidig - enten helt enig eller uenig uten nyansering',
          'Mangler konkrete eksempler',
          'Skiller ikke mellom bruk og misbruk',
          'Reflekterer ikke over moderne historieforskning',
        ],
        keyTerms: ['makt', 'perspektiv', 'propaganda', 'nasjonsbygging', 'marginalisert', 'fornektelse'],
      },
    },
    {
      id: 'historie-1-2-exam-q5',
      number: 5,
      question: `## Spørsmål 5: Praktisk kildekritikk

Tenk deg at du skal skrive en oppgave om hverdagslivet i Norge under 2. verdenskrig. Hvilke typer kilder ville du brukt, og hvordan ville du gått frem for å sikre at fremstillingen din blir så pålitelig som mulig?`,
      maxPoints: 20,
      competenceGoals: [
        'gjøre rede for hvordan historisk kunnskap blir til',
        'bruke kildekritikk til å vurdere historiske kilder',
      ],
      gradingGuide: {
        expectedContent: [
          'Ulike kildetyper (skriftlige, muntlige, materielle)',
          'Konkrete eksempler på kilder',
          'Kildekritisk metode',
          'Kryssjekking av kilder',
          'Bevissthet om begrensninger',
        ],
        excellentAnswer: `For å skrive om hverdagslivet under 2. verdenskrig ville jeg brukt flere kildetyper og en systematisk kildekritisk tilnærming.

**Skriftlige kilder:**
- Dagbøker fra perioden (primærkilder, personlige perspektiver)
- Aviser (sensurert, men viser hva som ble formidlet)
- Rasjoneringskvitteringer og offisielle dokumenter
- Brev mellom familiemedlemmer
- Motstandsavisenes illegale skrifter

**Muntlige kilder:**
- Intervjuer med tidsvitner (mens de fortsatt lever)
- Tidligere innsamlede vitnemål (arkiver)
- Dokumenterte oral history-prosjekter

**Materielle kilder:**
- Rasjoneringskort og gjenstander fra perioden
- Fotografier
- Krigsmuseer og lokalhistoriske samlinger

**Kildekritisk fremgangsmåte:**
1. For hver kilde: Stille de fire kildekritiske spørsmålene (opphav, innhold, tendens, representativitet)
2. Kryssjekke informasjon fra flere uavhengige kilder
3. Være bevisst på at dagbøker kan være skrevet for ettertiden, intervjuer påvirkes av hukommelse
4. Inkludere flere perspektiver (by/bygd, mann/kvinne, motstand/passivitet)
5. Sammenligne personlige beretninger med offisielle kilder
6. Være åpen om usikkerhet og hva kildene ikke forteller oss

**Begrensninger å være bevisst på:**
- Tidsvitner har begrenset hukommelse og perspektiv
- Mange kilder er tapt eller ødelagt
- Ikke alle grupper er like godt dokumentert
- Min egen forforståelse kan påvirke tolkningene`,
        goodAnswer: `Jeg ville brukt:
- Dagbøker fra perioden
- Intervjuer med tidsvitner
- Aviser og dokumenter
- Fotografier og gjenstander

For å sikre pålitelighet ville jeg kryssjekket kilder mot hverandre, stilt kildekritiske spørsmål til hver kilde, og inkludert flere perspektiver.`,
        passingAnswer: `Jeg ville brukt dagbøker, aviser og intervjuer. Jeg ville sjekket om kildene stemmer med hverandre og spurt hvem som har skrevet dem.`,
        commonMistakes: [
          'For få kildetyper',
          'Mangler konkret kildekritisk metode',
          'Glemmer å nevne kryssjekking',
          'Reflekterer ikke over begrensninger',
        ],
        keyTerms: ['kildekritikk', 'kryssjekke', 'tidsvitne', 'primærkilde', 'perspektiv', 'representativitet'],
      },
    },
  ],
  gradingCriteria: {
    gradeDescriptions: [
      {
        grade: 6,
        description: 'Fremragende kompetanse',
        requirements: [
          'Viser grundig forståelse av historisk metode og kildekritikk',
          'Bruker fagbegreper presist og naturlig',
          'Gir relevante og utdypende eksempler',
          'Reflekterer kritisk og nyansert',
          'Strukturerer svarene logisk og oversiktlig',
        ],
      },
      {
        grade: 5,
        description: 'Meget god kompetanse',
        requirements: [
          'Viser god forståelse av historisk metode',
          'Bruker de fleste fagbegreper korrekt',
          'Gir relevante eksempler',
          'Viser evne til refleksjon',
          'God struktur på svarene',
        ],
      },
      {
        grade: 4,
        description: 'God kompetanse',
        requirements: [
          'Viser forståelse av hovedpoengene',
          'Bruker noen fagbegreper',
          'Gir noen eksempler',
          'Noe refleksjon',
          'Akseptabel struktur',
        ],
      },
      {
        grade: 3,
        description: 'Nokså god kompetanse',
        requirements: [
          'Viser grunnleggende forståelse',
          'Begrenset bruk av fagbegreper',
          'Få eller enkle eksempler',
          'Lite refleksjon',
          'Varierende struktur',
        ],
      },
      {
        grade: 2,
        description: 'Lav kompetanse',
        requirements: [
          'Viser noe forståelse, men med vesentlige mangler',
          'Mangler fagbegreper',
          'Mangler eller feilaktige eksempler',
          'Ingen refleksjon',
          'Ustrukturert',
        ],
      },
      {
        grade: 1,
        description: 'Svært lav kompetanse',
        requirements: [
          'Viser svært begrenset forståelse',
          'Svarer ikke på spørsmålet',
          'Vesentlige feil eller misforståelser',
          'Ufullstendig besvarelse',
        ],
      },
    ],
    totalPoints: 100,
    pointsToGrade: [
      { grade: 6, minPoints: 90, maxPoints: 100 },
      { grade: 5, minPoints: 77, maxPoints: 89 },
      { grade: 4, minPoints: 60, maxPoints: 76 },
      { grade: 3, minPoints: 42, maxPoints: 59 },
      { grade: 2, minPoints: 25, maxPoints: 41 },
      { grade: 1, minPoints: 0, maxPoints: 24 },
    ],
  },
};

export default EXAM_HISTORIE_1_2;
