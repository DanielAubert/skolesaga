/**
 * Norsk 10. klasse - Narrative versjoner Del 8 (Kapittel 10.1-10.6)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-10-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 10.1 NARRATIV: Skriftlig eksamen — Langsvarsoppgaven
// ============================================================================

export const CHAPTER_NORSK_10_10_1_NARRATIV: TextbookChapter = {
  id: 'norsk-10-10-1-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '10.1',
  title: 'Skriftlig eksamen — Langsvarsoppgaven',
  subtitle: 'Narrativ versjon',
  description: 'Alt du trenger å vite for å mestre langsvarsoppgaven på norskeksamen, fra oppgavetolkning til ferdig tekst.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive tekster med klart uttrykt tema og god tekstbinding',
    'tilpasse språk og form til ulike formål, mottakere og medier',
  ],
  linkedChapterId: 'norsk-10-10-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-10-1-n-intro',
      type: 'text',
      content: `## Fem timer, en tekst, alt på spill

Du sitter i eksamenslokalet. Klokken er 09:00. Foran deg ligger oppgavearket. Du har fem timer. Langsvarsoppgaven er den som teller mest, og du har lest setningen som bestemmer alt: oppgaveteksten. Hva gjør du nå?

De fleste som gjør det bra på eksamen, bruker de første 30-45 minuttene uten å skrive en eneste setning av selve besvarelsen. De leser, tenker, planlegger og strukturerer. De som gjør det dårlig, begynner ofte å skrive med en gang, og ender opp med en tekst som mangler retning og struktur.

Langsvarsoppgaven er ikke en kunnskapsprøve i tradisjonell forstand. Den tester ikke om du kan ramse opp fakta. Den tester om du kan tenke, analysere, reflektere og kommunisere. Sensorene leser hundrevis av besvarelser. De som skiller seg ut, er ikke nødvendigvis de lengste eller de med flest vanskelige ord. Det er de som er klare, velorganiserte og viser at eleven har tenkt selvstendig.

I dette kapittelet skal du lære nøyaktig hva du skal gjøre i de fem timene for å skrive en langsvarsbesvarelse som imponerer.`,
    },

    // ========== SEKSJON 1: Oppgavetyper og tolkning ==========
    {
      id: 'norsk-10-10-1-n-section1',
      type: 'text',
      content: `## Forstå oppgaven — Den viktigste halvtimen

Det finnes i hovedsak tre typer langsvarsoppgaver på norskeksamen. Den første er artikkel, der du skal drøfte et tema saklig og bruke argumentasjon. Den andre er essay, der du utforsker et tema mer personlig og reflekterende. Den tredje er en drøftingsoppgave, der du skal belyse et tema fra flere sider og ta stilling.

Nøkkelen til å lykkes er å tolke oppgaven riktig. Les oppgaveteksten minst tre ganger. Understrek nøkkelordene. Hva ber oppgaven deg om å gjøre? Ord som «drøft» betyr at du skal se saken fra flere sider. «Gjør rede for» betyr at du skal forklare og beskrive. «Vurder» betyr at du skal ta stilling. «Sammenlign» betyr at du skal finne likheter og forskjeller. Hvis oppgaven ber deg «drøfte» og du bare beskriver, har du ikke svart på oppgaven.

Sjekk også om oppgaven gir deg et vedlegg, altså en tekst du skal bruke i besvarelsen. Hvis du får en novelle, et dikt eller en artikkel som vedlegg, forventer sensorene at du bruker den aktivt. Ikke bare nevn den i forbifarten. Analyser den, henvis til den, bruk den som utgangspunkt for refleksjonen din.

Når du har forstått oppgaven, lager du en disposisjon. Skriv ned hovedpoengene dine. Bestem deg for rekkefølgen. Tenk på innledningen: Hva er hooken din? Tenk på avslutningen: Hva vil du at leseren skal sitte igjen med? En god disposisjon er halve arbeidet. Den gir deg trygghet mens du skriver, fordi du alltid vet hva som kommer neste.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-10-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på langsvarsoppgaven:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-1-n-quiz1-q0',
            task: 'Hva betyr instruksjonen «drøft» i en eksamensoppgave?',
            options: [
              { id: 'a', text: 'Gi en detaljert beskrivelse av temaet', isCorrect: false },
              { id: 'b', text: 'Se saken fra flere sider og argumentere for ulike synspunkter', isCorrect: true },
              { id: 'c', text: 'Skriv om dine personlige erfaringer med temaet', isCorrect: false },
              { id: 'd', text: 'Gjenfortell en tekst du har lest om temaet', isCorrect: false },
            ],
            solution: '«Drøft» betyr å belyse et tema fra flere sider, veie argumenter for og mot, og gjerne ta stilling til slutt. Det er mer enn bare å beskrive.',
          },
          {
            id: 'norsk-10-10-1-n-quiz1-q1',
            task: 'Hvorfor bør du bruke de første 30-45 minuttene uten å skrive selve besvarelsen?',
            options: [
              { id: 'a', text: 'Fordi det er forbudt å skrive i starten av eksamen', isCorrect: false },
              { id: 'b', text: 'Fordi planlegging og disposisjon gir en bedre strukturert tekst', isCorrect: true },
              { id: 'c', text: 'Fordi du bør lese oppgaven bare en gang', isCorrect: false },
              { id: 'd', text: 'Fordi fem timer er for mye tid uansett', isCorrect: false },
            ],
            solution: 'Planlegging er nøkkelen til en velstrukturert tekst. En disposisjon gir deg oversikt og trygghet, og hindrer at teksten blir rotete.',
          },
          {
            id: 'norsk-10-10-1-n-quiz1-q2',
            task: 'Hva er forskjellen mellom en artikkel og et essay på eksamen?',
            options: [
              { id: 'a', text: 'En artikkel er lengre enn et essay', isCorrect: false },
              { id: 'b', text: 'En artikkel er saklig og argumenterende, et essay er mer personlig og reflekterende', isCorrect: true },
              { id: 'c', text: 'Et essay er en objektiv tekst, en artikkel er subjektiv', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell mellom dem', isCorrect: false },
            ],
            solution: 'En artikkel drøfter et tema saklig med klar argumentasjon. Et essay utforsker et tema på en mer personlig, assosiativ og reflekterende måte.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Struktur og kvalitet ==========
    {
      id: 'norsk-10-10-1-n-section2',
      type: 'text',
      content: `## Bygg teksten din som et hus

En god langsvarsbesvarelse har en klar tredelt struktur: innledning, hoveddel og avslutning. Men innenfor denne rammen er det mye du kan gjøre for å heve kvaliteten.

Innledningen bør fange leserens oppmerksomhet og presentere temaet. Unngå å begynne med «I denne oppgaven skal jeg skrive om...». Det er kjedelig og viser ingen kreativitet. Start heller med et spørsmål, et sitat, et eksempel eller en provoserende påstand. Deretter gjør du det klart hva teksten skal handle om og hva din vinkling er.

Hoveddelen er der du utdyper, argumenterer og reflekterer. Hvert avsnitt bør handle om ett hovedpoeng. Begynn avsnittet med en temasetning som introduserer poenget, utdyp med eksempler, fakta eller sitater, og avslutt med en kommentar som knytter poenget tilbake til hovedtemaet. Denne strukturen kalles TEEK: Tema, Eksempel, Elaborering, Kommentar.

Tekstbinding er det som gjør teksten din sammenhengende. Bruk forbindelsesord som «dessuten», «imidlertid», «på den andre siden», «som en konsekvens av dette» og «til tross for». Uten tekstbinding blir besvarelsen en liste av løsrevne poenger i stedet for en sammenhengende refleksjon.

Avslutningen bør oppsummere hovedpoengene og gjerne løfte blikket. Ikke bare gjenta det du har sagt. Pek fremover, still et nytt spørsmål, eller knytt tilbake til innledningen på en måte som viser at teksten har utviklet seg.

Og til slutt: Les gjennom. Bruk den siste halvtimen på å lese besvarelsen din fra start til slutt. Rett skrivefeil, forbedre formuleringer, sjekk at overgangene mellom avsnittene er gode. Denne halvtimen kan utgjøre forskjellen mellom en 4 og en 5.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-10-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på tekststruktur:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-1-n-quiz2-q0',
            task: 'Hva står TEEK for i avsnittstruktur?',
            options: [
              { id: 'a', text: 'Tekst, Evaluering, Eksperiment, Konklusjon', isCorrect: false },
              { id: 'b', text: 'Tema, Eksempel, Elaborering, Kommentar', isCorrect: true },
              { id: 'c', text: 'Tittel, Emne, Eksamen, Karakter', isCorrect: false },
              { id: 'd', text: 'Tanke, Erfaring, Empiri, Kilde', isCorrect: false },
            ],
            solution: 'TEEK er en modell for avsnittstruktur: Temasetning (introduser poenget), Eksempel (begrunn det), Elaborering (utdyp), Kommentar (knytt tilbake til hovedtemaet).',
          },
          {
            id: 'norsk-10-10-1-n-quiz2-q1',
            task: 'Hva er tekstbinding?',
            options: [
              { id: 'a', text: 'Å binde tekstens sider sammen med stifter', isCorrect: false },
              { id: 'b', text: 'Å bruke forbindelsesord og referanser som skaper sammenheng i teksten', isCorrect: true },
              { id: 'c', text: 'Å skrive så langt som mulig', isCorrect: false },
              { id: 'd', text: 'Å kopiere fra vedlegget', isCorrect: false },
            ],
            solution: 'Tekstbinding er det som gjør teksten sammenhengende: forbindelsesord (dessuten, imidlertid), referanser og tematisk progresjon fra kjent til nytt.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Nøkkelen til langsvar

**Oppgavetolkning** er det viktigste steget. Les oppgaven flere ganger, understrek nøkkelord, og forstå hva du faktisk blir bedt om å gjøre.

**Disposisjon** gir deg trygghet og struktur. Bruk de første 30-45 minuttene på planlegging.

**Tredelt struktur:** Innledning (hook og presentasjon), hoveddel (argumenter med TEEK-modellen), avslutning (oppsummering og perspektivering).

**Tekstbinding** med forbindelsesord og tematisk progresjon skaper sammenheng og flyt.

**Korrekturlesing** i siste halvtime kan utgjøre forskjellen mellom en 4 og en 5.

**Nøkkelbegreper:** Langsvar, artikkel, essay, drøfting, disposisjon, TEEK, tekstbinding, oppgavetolkning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.2 NARRATIV: Skriftlig eksamen — Kortsvarsoppgaven
// ============================================================================

export const CHAPTER_NORSK_10_10_2_NARRATIV: TextbookChapter = {
  id: 'norsk-10-10-2-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '10.2',
  title: 'Skriftlig eksamen — Kortsvarsoppgaven',
  subtitle: 'Narrativ versjon',
  description: 'Mestre kunsten å skrive et presist, faglig sterkt kortsvar som viser at du behersker tekstanalyse.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og analysere tekster og bruke fagbegreper i tolkningen',
    'vurdere og kritisere ulike typer tekster og bruke dem i egne arbeider',
  ],
  linkedChapterId: 'norsk-10-10-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-10-2-n-intro',
      type: 'text',
      content: `## Kort, men ikke enkelt

Mange elever tenker at kortsvarsoppgaven er lettere enn langsvaret fordi den er kortere. Det er en farlig misforståelse. Kortsvaret krever noe helt annet enn langsvaret: presisjon. Du har typisk 250-400 ord til rådighet. Hvert ord teller. Du har ikke plass til omveier, gjentakelser eller tomme formuleringer. Du må gå rett til kjernen.

Kortsvarsoppgaven ber deg vanligvis om å analysere en tekst som du får som vedlegg. Det kan være en novelle, et dikt, et utdrag fra en roman, en reklame eller en sammensatt tekst. Oppgaven kan be deg om å tolke teksten, analysere virkemidler, sammenligne to tekster, eller gjøre rede for et bestemt aspekt ved teksten.

Det som skiller en god kortsvarsbesvarelse fra en middelmådig, er evnen til å bruke fagbegreper presist og å belegge påstandene dine med eksempler fra teksten. Det holder ikke å si at «novellen er trist». Du må si hva som gjør den trist, hvilke virkemidler forfatteren bruker for å skape den tristheten, og du må sitere fra teksten for å bevise det.`,
    },

    // ========== SEKSJON 1: Tekstanalyse og sitering ==========
    {
      id: 'norsk-10-10-2-n-section1',
      type: 'text',
      content: `## Tekstanalyse steg for steg

Når du får en tekst på eksamen, bør du lese den minst to ganger. Første gang leser du for å forstå handlingen og temaet. Andre gang leser du med blyant i hånden og markerer virkemidler, nøkkelord og passasjer du vil bruke i besvarelsen.

En god tekstanalyse handler om sammenhengen mellom form og innhold. Det betyr at du ikke bare beskriver hva som skjer i teksten, men hvorfor forfatteren har gjort de valgene han eller hun har gjort. Hvorfor bruker forfatteren korte setninger akkurat her? Fordi det skaper intensitet og tempo. Hvorfor er det en gjentakelse av dette ordet? Fordi det understreker temaet. Hvorfor ender novellen uten en tydelig avslutning? Fordi det tvinger leseren til å reflektere.

Sitering er avgjørende i en kortsvarsbesvarelse. Du beviser påstandene dine ved å vise til teksten. Et sitat settes i anførselstegn og integreres i setningen din. For eksempel: Fortelleren beskriver karakteren som «en mann uten skygge» (s. 3), noe som symboliserer at han har mistet sin identitet. Legg merke til hvordan sitatet er vevd inn i analysen og umiddelbart blir tolket.

Bruk fagbegreper aktivt. I stedet for å si «forfatteren bruker et bilde», si «forfatteren bruker en metafor». I stedet for «setningene er korte», si «forfatteren bruker parataktisk setningsstruktur». Fagbegrepene viser at du har kompetanse, men bruk dem bare hvis du bruker dem riktig. Et feil brukt fagbegrep er verre enn ikke å bruke det i det hele tatt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-10-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kortsvarsoppgaven:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-2-n-quiz1-q0',
            task: 'Hva betyr det å analysere sammenhengen mellom form og innhold?',
            options: [
              { id: 'a', text: 'Å beskrive både handlingen og utseendet til boken', isCorrect: false },
              { id: 'b', text: 'Å forklare hvorfor forfatteren har gjort sine språklige og stilistiske valg i lys av temaet', isCorrect: true },
              { id: 'c', text: 'Å skille mellom sjanger og tema', isCorrect: false },
              { id: 'd', text: 'Å vurdere om teksten er godt skrevet', isCorrect: false },
            ],
            solution: 'Form og innhold-analyse betyr at du forklarer sammenhengen mellom hva teksten sier (innhold) og hvordan den sier det (form/virkemidler). De to henger uløselig sammen.',
          },
          {
            id: 'norsk-10-10-2-n-quiz1-q1',
            task: 'Hvorfor er sitering viktig i en kortsvarsbesvarelse?',
            options: [
              { id: 'a', text: 'Fordi det gjør besvarelsen lengre', isCorrect: false },
              { id: 'b', text: 'Fordi det beviser at du har lest teksten og belegger påstandene dine', isCorrect: true },
              { id: 'c', text: 'Fordi sensorene krever minst fem sitater', isCorrect: false },
              { id: 'd', text: 'Fordi det er lettere å sitere enn å formulere egne setninger', isCorrect: false },
            ],
            solution: 'Sitering beviser påstandene dine og viser at du kan forankre tolkningene dine i selve teksten. Et sitat uten tolkning er verdiløst, men en tolkning uten sitat er ubevist.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Oppbygning og typiske feil ==========
    {
      id: 'norsk-10-10-2-n-section2',
      type: 'text',
      content: `## Strukturen som gir full uttelling

Et godt kortsvar følger en stram struktur. Her er en modell du kan bruke:

Innledningen (2-3 setninger) presenterer teksten: tittel, forfatter, sjanger, publiseringsår og en kort oppsummering av hva teksten handler om. Deretter presenterer du din tolkning av temaet i en tydelig tesesetning.

Hoveddelen (5-8 setninger) analyserer 2-3 virkemidler som støtter din tolkning. For hvert virkemiddel: navngi det, gi et eksempel (med sitat), og forklar hva effekten er og hvordan det bidrar til temaet.

Avslutningen (2-3 setninger) oppsummerer tolkningen og kan åpne for refleksjon om tekstens relevans eller betydning.

De vanligste feilene elever gjør, kan du unngå med bevissthet. Feil nummer en er gjenfortelling. Mange bruker mesteparten av plassen på å gjenfortelle handlingen i stedet for å analysere. Sensoren har lest teksten. Du trenger bare en kort oppsummering. Feil nummer to er å liste opp virkemidler uten å forklare effekten. «Forfatteren bruker besjeling» er ikke analyse. «Forfatteren bruker besjeling når stolen beskrives som "trist og forlatt", noe som forsterker ensomhetstematikken» er analyse.

Feil nummer tre er mangel på presisjon. I et kortsvar har du ikke plass til vage formuleringer som «teksten er bra skrevet» eller «forfatteren bruker mange virkemidler». Vær konkret, vær presis, og vis at du vet hva du snakker om.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-10-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kortsvarstruktur:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-2-n-quiz2-q0',
            task: 'Hva er den vanligste feilen i kortsvarsbesvarelser?',
            options: [
              { id: 'a', text: 'Å bruke for mange fagbegreper', isCorrect: false },
              { id: 'b', text: 'Å bruke for mye plass på gjenfortelling i stedet for analyse', isCorrect: true },
              { id: 'c', text: 'Å skrive for kort', isCorrect: false },
              { id: 'd', text: 'Å sitere for mye fra teksten', isCorrect: false },
            ],
            solution: 'Mange elever bruker mesteparten av plassen på å gjenfortelle handlingen. Sensoren har allerede lest teksten. Bruk plassen på analyse, tolkning og bruk av fagbegreper.',
          },
          {
            id: 'norsk-10-10-2-n-quiz2-q1',
            task: 'Hva bør innledningen i et kortsvar inneholde?',
            options: [
              { id: 'a', text: 'En personlig anekdote som passer til temaet', isCorrect: false },
              { id: 'b', text: 'Tittel, forfatter, sjanger og en tydelig tesesetning om temaet', isCorrect: true },
              { id: 'c', text: 'En komplett gjenfortelling av teksten', isCorrect: false },
              { id: 'd', text: 'En liste over virkemidler du skal analysere', isCorrect: false },
            ],
            solution: 'Innledningen presenterer teksten kort (tittel, forfatter, sjanger) og formulerer din tolkning av temaet i en tydelig tesesetning.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Presisjon er alt

**Kortsvaret** krever presisjon, fagbegreper og tekstbevisst analyse. Hvert ord teller.

**Form og innhold** henger sammen. Analyser sammenhengen mellom hva teksten sier og hvordan den sier det.

**Sitering** belegger påstandene dine. Integrer sitater i setningene dine og tolk dem umiddelbart.

**Strukturen:** Innledning (presentasjon + tesesetning), hoveddel (2-3 virkemidler med eksempler), avslutning (oppsummering).

**Unngå:** Gjenfortelling, virkemiddellisting uten effektbeskrivelse, og vage formuleringer.

**Nøkkelbegreper:** Kortsvar, tekstanalyse, sitering, form og innhold, fagbegreper, tesesetning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.3 NARRATIV: Nynorsk skrivetrening
// ============================================================================

export const CHAPTER_NORSK_10_10_3_NARRATIV: TextbookChapter = {
  id: 'norsk-10-10-3-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '10.3',
  title: 'Nynorsk skrivetrening',
  subtitle: 'Narrativ versjon',
  description: 'Gjør nynorsk til en styrke, ikke en bøyg. Praktiske tips og regler som gjør skriving på sidemålet tryggere.',
  estimatedMinutes: 40,
  competenceGoals: [
    'skrive tekster på hovedmål og sidemål med god språkføring',
    'mestre grunnleggende grammatikk og rettskriving i nynorsk',
  ],
  linkedChapterId: 'norsk-10-10-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-10-3-n-intro',
      type: 'text',
      content: `## Nynorsk er ikke så vanskelig som du tror

La oss være ærlige: Mange bokmålselever gruer seg til nynorsk. Det føles fremmed, reglene virker forvirrende, og det er lett å bli frustrert. Men her er sannheten: Nynorsk er ikke et fremmedspråk. Det er norsk. Du forstår det allerede. Du kan lese det uten problemer. Det du trenger å lære, er å skrive det, og det krever bare at du lærer noen regler og øver litt.

Faktisk er nynorsk på mange måter mer logisk enn bokmål. Bøyingsmønstrene er mer regelmessige. Ordforrådet er tettere knyttet til talespråket i store deler av Norge. Og mange av ordene er vakre og presise på en måte som bokmål ikke alltid er.

Det viktigste tipset er dette: Ikke prøv å skrive bokmål og oversette til nynorsk. Det fungerer dårlig fordi setningsstrukturen og ordvalget ofte er annerledes. I stedet bør du tenke nynorsk fra starten. Les mye nynorsk. Lytt til nynorsk. La språket synke inn. Og så skriver du nynorsk direkte, uten omveien via bokmål.`,
    },

    // ========== SEKSJON 1: Grunnregler ==========
    {
      id: 'norsk-10-10-3-n-section1',
      type: 'text',
      content: `## De viktigste reglene du må kunne

Her er de grammatiske kjernereglene som utgjør den største forskjellen mellom bokmål og nynorsk.

Infinitiv er den mest synlige forskjellen. På bokmål skriver du «å lese», «å skrive», «å tenke». På nynorsk skriver du «å lese», «å skrive», «å tenkje» (eller «å tenke», begge er lov). Hovedregelen er at nynorsk bruker a-infinitiv for sterke verb som har endring i stamma: «å skrive» blir «å skrive» (samme), men «å kaste» på bokmål kan bli «å kaste» eller «å kasta» på nynorsk.

Substantivbøyningen er annerledes. Hunkjønnsord bøyes med -a i bestemt form entall: «ei jente — jenta», «ei bok — boka», «ei klokke — klokka». Hankjønnsord bøyes med -en: «ein gut — guten», «ein stol — stolen». Intetkjønnsord bøyes med -et: «eit hus — huset». I flertall bruker nynorsk ofte -ar (hankjønn), -er (hunkjønn) og ingenting eller -a (intetkjønn): «gutar», «jenter», «hus/husa».

Verbformer er ofte annerledes. I presens har svake verb gjerne -ar i stedet for -er: «kastar» i stedet for «kaster», «arbeider» i stedet for «arbeider». I preteritum bruker nynorsk ofte -a i stedet for -et: «kasta» i stedet for «kastet».

Noen viktige ordforskjeller må du bare lære utenat. «Ikke» på bokmål er «ikkje» på nynorsk. «Også» er «òg» eller «også». «Hvordan» er «korleis» eller «korleis». «Noe» er «noko». «Noen» er «nokon» eller «nokre». «Hva» er «kva». «Hvilken» er «kva for ein/ei/eit». Disse småordene dukker opp i annenhver setning, så å lære dem er en rask investering med stor avkastning.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-10-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på nynorsk grammatikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-3-n-quiz1-q0',
            task: 'Hva er nynorsk for «ikke»?',
            options: [
              { id: 'a', text: 'inte', isCorrect: false },
              { id: 'b', text: 'ikkje', isCorrect: true },
              { id: 'c', text: 'ikki', isCorrect: false },
              { id: 'd', text: 'inka', isCorrect: false },
            ],
            solution: '«Ikke» på bokmål er «ikkje» på nynorsk. Dette er et av de vanligste ordene i språket, så det er viktig å huske.',
          },
          {
            id: 'norsk-10-10-3-n-quiz1-q1',
            task: 'Hvordan bøyes hunkjønnsord i bestemt form entall på nynorsk?',
            options: [
              { id: 'a', text: 'Med -en: jenten', isCorrect: false },
              { id: 'b', text: 'Med -a: jenta', isCorrect: true },
              { id: 'c', text: 'Med -et: jentet', isCorrect: false },
              { id: 'd', text: 'Med -i: jenti', isCorrect: false },
            ],
            solution: 'Hunkjønnsord bøyes med -a i bestemt form entall på nynorsk: ei jente — jenta, ei bok — boka, ei klokke — klokka.',
          },
          {
            id: 'norsk-10-10-3-n-quiz1-q2',
            task: 'Hva er nynorsk for «noe»?',
            options: [
              { id: 'a', text: 'noko', isCorrect: true },
              { id: 'b', text: 'noe', isCorrect: false },
              { id: 'c', text: 'noget', isCorrect: false },
              { id: 'd', text: 'nokke', isCorrect: false },
            ],
            solution: '«Noe» på bokmål er «noko» på nynorsk. Tilsvarende er «noen» «nokon» eller «nokre» (flertall).',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Skrivetips ==========
    {
      id: 'norsk-10-10-3-n-section2',
      type: 'text',
      content: `## Praktiske tips for bedre nynorsk

Den beste måten å bli god i nynorsk på er å lese og skrive det regelmessig. Her er noen konkrete strategier.

Les nynorsk hver dag, selv om det bare er fem minutter. NRK Nynorsk, Dag og Tid, Framtida.no og mange bøker er tilgjengelige på nynorsk. Jo mer du leser, jo mer naturlig vil ordvalg og setningsstruktur føles. Hjernen din lærer mønstre ubevisst.

Skriv korte tekster på nynorsk ofte. En dagbok, korte meldinger til deg selv, oppsummeringer av det du har lært i andre fag. Det trenger ikke være perfekt. Poenget er å bygge automatikk, slik at du ikke må tenke over hvert ord på eksamen.

Bruk ordlister og retteprogrammer. Nynorskordboka på nett er gratis og uvurderlig. Og retteprogrammer som Languagetool eller innebygd stavekontroll kan fange opp mange feil. Men ikke stol blindt på dem.

Vær oppmerksom på bokmålsfeller. De vanligste feilene handler om ord og former som er identiske på bokmål men feil på nynorsk. «Jobb» heter «arbeid» på nynorsk. «Bruke» kan hete «bruke» eller «nytte». «Forskjellig» er «ulik» eller «forskjellig». «Egentlig» er «eigentleg». Lag deg en liste over ord du ofte bruker på bokmål og finn de nynorske alternativene.

Og husk: Det handler ikke om å skrive perfekt nynorsk. Det handler om å vise at du behersker sidemålet godt nok til å kommunisere klart og korrekt. En tekst med noen småfeil, men med god flyt og riktig ordvalg, scorer bedre enn en tekst som er teknisk feilfri men stiv og unatural.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-10-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på nynorsk skrivetrening:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-3-n-quiz2-q0',
            task: 'Hva er det beste tipset for å bli bedre i nynorsk?',
            options: [
              { id: 'a', text: 'Å pugge grammatikkregler utenat', isCorrect: false },
              { id: 'b', text: 'Å lese og skrive nynorsk regelmessig slik at mønstrene blir naturlige', isCorrect: true },
              { id: 'c', text: 'Å skrive på bokmål og oversette til nynorsk etterpå', isCorrect: false },
              { id: 'd', text: 'Å unngå nynorsk til rett før eksamen', isCorrect: false },
            ],
            solution: 'Regelmessig eksponering gjennom lesing og skriving er den mest effektive strategien. Hjernen lærer språkmønstre best gjennom gjentatt kontakt.',
          },
          {
            id: 'norsk-10-10-3-n-quiz2-q1',
            task: 'Hvorfor bør du ikke skrive på bokmål og oversette til nynorsk?',
            options: [
              { id: 'a', text: 'Fordi det tar for lang tid', isCorrect: false },
              { id: 'b', text: 'Fordi setningsstruktur og ordvalg ofte er annerledes på nynorsk', isCorrect: true },
              { id: 'c', text: 'Fordi det er forbudt på eksamen', isCorrect: false },
              { id: 'd', text: 'Fordi bokmål og nynorsk har helt ulikt alfabet', isCorrect: false },
            ],
            solution: 'Nynorsk har ofte annen setningsstruktur og andre ordvalg enn bokmål. Oversettelse gir ofte stive, unaturlige tekster. Tenk nynorsk fra starten.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Nynorsk med selvtillit

**Nynorsk er norsk.** Du forstår det allerede. Det du trenger, er å lære skrivereglene og øve.

**Grunnregler:** Hunkjønnsord med -a (jenta), småord som «ikkje», «noko», «kva», «korleis», og verbformer som «kastar» og «kasta».

**Skrivestrategi:** Les nynorsk daglig, skriv korte tekster ofte, bruk ordlister og retteprogrammer, og tenk nynorsk fra starten i stedet for å oversette.

**Bokmålsfeller:** Vær oppmerksom på ord som er like men ulike, som «jobb» (nynorsk: «arbeid»), «egentlig» (nynorsk: «eigentleg»).

**Nøkkelbegreper:** Sidemål, infinitiv, substantivbøyning, verbformer, bokmålsfeller, nynorsk rettskriving.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.4 NARRATIV: Muntlig eksamen
// ============================================================================

export const CHAPTER_NORSK_10_10_4_NARRATIV: TextbookChapter = {
  id: 'norsk-10-10-4-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '10.4',
  title: 'Muntlig eksamen',
  subtitle: 'Narrativ versjon',
  description: 'Alt du trenger å vite for å stå trygt foran sensor og mestre både presentasjonen og fagsamtalen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'presentere fagstoff muntlig med god struktur og tilpassing til mottaker',
    'delta i fagsamtaler og vise evne til refleksjon og selvstendig tenkning',
  ],
  linkedChapterId: 'norsk-10-10-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-10-4-n-intro',
      type: 'text',
      content: `## Det mest skremmende du kan gjøre (men du klarer det)

For mange elever er muntlig eksamen det aller mest skremmende. Du skal stå foran sensor og læreren din, alene, og vise hva du kan. Ingen steder å gjemme seg. Ingen mulighet til å slette og skrive om. Det du sier, henger i luften.

Men her er den gode nyheten: Muntlig eksamen er faktisk det formatet der du har mest kontroll. På skriftlig eksamen kan du ikke forklare hva du mente med en uklar setning. På muntlig eksamen kan du det. Du kan utdype, presisere, gi eksempler og vise engasjement. Og sensor er ikke en fiende. Sensor vil at du skal gjøre det bra. Fagsamtalen er ikke et forhør, det er en samtale der sensor gir deg muligheter til å vise hva du kan.

Muntlig eksamen i norsk består vanligvis av to deler. Først holder du en presentasjon på 10-15 minutter om et oppgitt eller selvvalgt tema. Deretter følger en fagsamtale på 10-15 minutter der sensor stiller spørsmål om presentasjonen din og eventuelt andre deler av pensum.

Forberedelsen er alt. De som gjør det bra, er ikke nødvendigvis de smarteste. Det er de som har forberedt seg grundigst.`,
    },

    // ========== SEKSJON 1: Presentasjonen ==========
    {
      id: 'norsk-10-10-4-n-section1',
      type: 'text',
      content: `## Presentasjonen — Din sjanse til å skinne

Presentasjonen er den delen du har mest kontroll over. Du bestemmer innholdet, strukturen og fremføringen. Her er nøklene til en god presentasjon.

Strukturen bør være klar. Begynn med en innledning som fanger oppmerksomheten og presenterer temaet. Bruk en hook: et spørsmål, et sitat, en personlig erfaring eller en overraskende påstand. Deretter kommer hoveddelen med to til fire hovedpoenger, klart organisert. Og til slutt en avslutning som oppsummerer og gjerne peker fremover.

Manus eller stikkord? Aldri les fra et ferdigskrevet manus. Det dreper all kontakt med tilhørerne og gjør presentasjonen kjedelig. Bruk stikkordskort med nøkkelord som hjelper deg å huske poengene dine. Da kan du snakke fritt, ha øyekontakt og tilpasse deg publikum.

Visuell støtte som PowerPoint eller Keynote kan hjelpe, men ikke la slidene ta over. En slide med kulepunkter som du leser opp, er det verste du kan gjøre. Bruk bilder, korte sitater eller stikkord som støtter det du sier, men la stemmen din være hovedattraksjonen.

Fremføringen er minst like viktig som innholdet. Snakk tydelig og rolig. Varier stemmeleiet. Hold pauser etter viktige poenger. Ha øyekontakt med sensor og læreren. Stå stødig, ikke vipp fra fot til fot. Og husk: litt nervøsitet er normalt og kan faktisk gjøre deg skarpere. Det er når nervøsiteten tar overhånd at det blir et problem, og den beste kuren mot det er god forberedelse.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-10-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på presentasjonsteknikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-4-n-quiz1-q0',
            task: 'Hvorfor bør du ikke lese fra et ferdigskrevet manus på muntlig eksamen?',
            options: [
              { id: 'a', text: 'Fordi det er forbudt å ha med manus', isCorrect: false },
              { id: 'b', text: 'Fordi det dreper kontakten med tilhørerne og gjør presentasjonen kjedelig', isCorrect: true },
              { id: 'c', text: 'Fordi du kan miste arket', isCorrect: false },
              { id: 'd', text: 'Fordi sensor trekker poeng for manus', isCorrect: false },
            ],
            solution: 'Å lese fra manus fjerner øyekontakt, naturlig stemmevariasjon og tilpasning til publikum. Bruk stikkord i stedet, og snakk fritt.',
          },
          {
            id: 'norsk-10-10-4-n-quiz1-q1',
            task: 'Hva er en god måte å starte presentasjonen på?',
            options: [
              { id: 'a', text: '«I denne presentasjonen skal jeg snakke om...»', isCorrect: false },
              { id: 'b', text: 'En hook: et spørsmål, et sitat eller en overraskende påstand', isCorrect: true },
              { id: 'c', text: 'Å be om unnskyldning for nervøsiteten din', isCorrect: false },
              { id: 'd', text: 'Å lese opp en definisjon fra Wikipedia', isCorrect: false },
            ],
            solution: 'En hook fanger oppmerksomheten umiddelbart. Det kan være et retorisk spørsmål, et treffende sitat, en personlig erfaring eller en overraskende påstand.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Fagsamtalen ==========
    {
      id: 'norsk-10-10-4-n-section2',
      type: 'text',
      content: `## Fagsamtalen — Vis at du kan tenke

Fagsamtalen er den delen mange gruer seg mest til, fordi du ikke vet nøyaktig hva sensor vil spørre om. Men det er også den delen som gir deg størst mulighet til å vise bredde og dybde i kunnskapene dine.

Sensor starter gjerne med spørsmål knyttet til presentasjonen din. «Du nevnte at forfatteren bruker naturskildringer som symbol. Kan du utdype det?» eller «Hva mener du med at teksten har en åpen slutt?» Disse spørsmålene er gaver. De gir deg muligheten til å vise at du kan mer enn det du fikk plass til i presentasjonen.

Deretter kan sensor bevege seg til andre deler av pensum. Du kan få spørsmål om språkhistorie, sjangerkunnskap, retorikk, medier eller andre temaer. Nøkkelen er å svare så grundig og reflektert som mulig. Ikke gi enstavelses svar. Utdyp med eksempler. Knytt til det du vet fra andre deler av faget. Vis at du ser sammenhenger.

Hvis du ikke vet svaret, er det bedre å være ærlig enn å gjette. Si «Jeg er ikke helt sikker, men jeg tror...» eller «Det har jeg ikke lest så mye om, men ut fra det jeg vet om lignende temaer, vil jeg anta at...». Sensor verdsetter ærlighet og evne til å resonnere høyere enn gale svar levert med skråsikkerhet.

Vurderingen av muntlig eksamen ser på flere ting: fagkunnskap, evne til refleksjon og selvstendig tenkning, formidlingsevne, bruk av fagbegreper, og evne til å delta i en faglig samtale. Det er ikke nok å kunne fakta. Du må vise at du kan tenke med dem.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-10-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fagsamtalen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-4-n-quiz2-q0',
            task: 'Hva bør du gjøre hvis sensor stiller et spørsmål du ikke vet svaret på?',
            options: [
              { id: 'a', text: 'Finne på noe som høres overbevisende ut', isCorrect: false },
              { id: 'b', text: 'Si at du ikke vet og la det bli stille', isCorrect: false },
              { id: 'c', text: 'Være ærlig, men prøve å resonnere deg frem basert på det du vet', isCorrect: true },
              { id: 'd', text: 'Skifte tema til noe du kan', isCorrect: false },
            ],
            solution: 'Sensor verdsetter ærlighet og evne til å resonnere. Si at du er usikker, men vis at du kan tenke deg frem basert på det du vet. Det gir bedre inntrykk enn å gjette feil.',
          },
          {
            id: 'norsk-10-10-4-n-quiz2-q1',
            task: 'Hva vurderer sensor i fagsamtalen?',
            options: [
              { id: 'a', text: 'Bare om du kan fakta utenat', isCorrect: false },
              { id: 'b', text: 'Fagkunnskap, refleksjon, formidlingsevne, fagbegreper og evne til samtale', isCorrect: true },
              { id: 'c', text: 'Bare uttale og stemmebruk', isCorrect: false },
              { id: 'd', text: 'Om du er enig med sensor', isCorrect: false },
            ],
            solution: 'Vurderingen er helhetlig: fagkunnskap, refleksjon, selvstendig tenkning, formidlingsevne, bruk av fagbegreper og evne til å delta i en faglig samtale.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Stå trygt foran sensor

**Presentasjonen** (10-15 min) krever klar struktur, stikkord (ikke manus), visuell støtte og god fremføring med øyekontakt og stemmevariasjon.

**Fagsamtalen** (10-15 min) er en mulighet til å vise bredde og dybde. Utdyp, gi eksempler, knytt sammen, og vær ærlig hvis du er usikker.

**Forberedelse** er nøkkelen. Øv presentasjonen flere ganger. Repeter bredt over hele pensum til fagsamtalen.

**Vurdering** er helhetlig: fagkunnskap, refleksjon, formidling, fagbegreper og samtalekompetanse.

**Nervøsitet** er normalt. God forberedelse er den beste kuren.

**Nøkkelbegreper:** Presentasjon, fagsamtale, stikkord, hook, formidlingsevne, refleksjon, øyekontakt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.5 NARRATIV: Eksamensstrategier og tidsstyring
// ============================================================================

export const CHAPTER_NORSK_10_10_5_NARRATIV: TextbookChapter = {
  id: 'norsk-10-10-5-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '10.5',
  title: 'Eksamensstrategier og tidsstyring',
  subtitle: 'Narrativ versjon',
  description: 'Praktiske strategier for å håndtere eksamensstress, disponere tiden riktig og prestere på ditt beste.',
  estimatedMinutes: 35,
  competenceGoals: [
    'planlegge og gjennomføre eksamensarbeid med god tidsstyring',
    'reflektere over egen læringsprosess og utvikle gode arbeidsstrategier',
  ],
  linkedChapterId: 'norsk-10-10-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-10-5-n-intro',
      type: 'text',
      content: `## Eksamen er et maratonløp, ikke en sprint

Hjertet banker. Hendene er svette. Du har sovet dårlig. Du åpner oppgavearket og hjernen føles helt tom. Kjenner du det igjen? Eksamensnervøsitet er noe nesten alle opplever, og det er fullstendig normalt. Problemet er ikke nervøsiteten i seg selv. Problemet er når den tar kontrollen.

Den gode nyheten er at det finnes velprøvde strategier for å håndtere eksamensstress og disponere tiden effektivt. Eksamen er ikke en test av hvor smart du er. Det er en test av forberedelse, strategi og gjennomføring. Elever som mestrer disse tre tingene, gjør det konsekvent bedre enn elever som bare «kan mye» men mangler en plan.

Tenk på eksamen som et maratonløp. Du ville aldri startet et maraton med full sprint. Du ville disponert kreftene, holdt et jevnt tempo og spart litt ekstra til slutten. Det samme gjelder eksamen. Du har fem timer. Bruk dem klokt.`,
    },

    // ========== SEKSJON 1: Tidsstyring ==========
    {
      id: 'norsk-10-10-5-n-section1',
      type: 'text',
      content: `## Fem timer — Slik bruker du dem

Her er en konkret tidsplan for en femtimers norskeksamen der du skal skrive både kortsvar og langsvar.

De første 30 minuttene bruker du på å lese oppgavene og vedleggene nøye. Les alt minst to ganger. Marker nøkkelord i oppgavetekstene. Begynn å tenke på hvilke oppgaver du vil velge.

De neste 30 minuttene bruker du på disposisjon for begge besvarelsene. Skriv ned hovedpoengene, velg rekkefølge og bestem deg for innledning og avslutning. Denne investeringen sparer deg for mye tid senere.

Time 2 og 3 bruker du på langsvaret. Med disposisjonen klar kan du skrive effektivt. Ikke perfeksjoner underveis. Skriv hoveddelen ferdig, og gå videre. Du kan alltid forbedre formuleringer i korrekturlesingen.

Time 4 bruker du på kortsvaret. Med mindre tid tilgjengelig må du være effektiv. Bruk disposisjonen og skriv presist.

Den siste halvtimen bruker du på korrekturlesing. Les gjennom begge besvarelsene fra start til slutt. Rett skrivefeil, forbedre formuleringer, sjekk overganger mellom avsnitt, og sørg for at du har svart på det oppgaven faktisk spør om. Mange elever hopper over denne fasen fordi de føler seg ferdige. Ikke gjør den feilen. Korrekturlesing kan løfte karakteren et helt trinn.

Husk: Denne planen er et utgangspunkt. Du kan tilpasse den etter egne styrker. Hvis du er rask til å skrive, kan du bruke mer tid på planlegging. Hvis du skriver sakte, kan du bruke mindre tid på disposisjon og mer på selve skrivingen. Det viktige er at du har en plan.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-10-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på tidsstyring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-5-n-quiz1-q0',
            task: 'Hvor lang tid bør du bruke på korrekturlesing?',
            options: [
              { id: 'a', text: 'Ingen tid — det er viktigere å skrive mer', isCorrect: false },
              { id: 'b', text: 'Fem minutter er nok', isCorrect: false },
              { id: 'c', text: 'Den siste halvtimen av eksamen', isCorrect: true },
              { id: 'd', text: 'Hele siste time', isCorrect: false },
            ],
            solution: 'Den siste halvtimen bør brukes på korrekturlesing. Det gir deg tid til å rette feil, forbedre formuleringer og sikre at du har svart på oppgaven.',
          },
          {
            id: 'norsk-10-10-5-n-quiz1-q1',
            task: 'Hvorfor er det viktig å ha en tidsplan på eksamen?',
            options: [
              { id: 'a', text: 'Fordi sensor sjekker at du har brukt tiden riktig', isCorrect: false },
              { id: 'b', text: 'Fordi det sikrer at du bruker tiden effektivt og ikke blir overrasket mot slutten', isCorrect: true },
              { id: 'c', text: 'Fordi det er obligatorisk å levere en tidsplan', isCorrect: false },
              { id: 'd', text: 'Fordi det reduserer nervøsiteten helt', isCorrect: false },
            ],
            solution: 'En tidsplan sikrer at du disponerer tiden klokt. Uten plan risikerer du å bruke for mye tid på en del og ikke rekke de andre.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Stressmestring ==========
    {
      id: 'norsk-10-10-5-n-section2',
      type: 'text',
      content: `## Stressmestring — Når nervene tar over

Litt stress er faktisk bra. Det skjerper sansene, øker konsentrasjonen og gjør deg mer fokusert. Men for mye stress gjør det motsatte: hjernen «fryser», du klarer ikke å tenke klart, og kunnskapen du har, føles utilgjengelig.

Den viktigste stressmestringsstrategien er forberedelse. Hvis du vet at du har forberedt deg godt, gir det en trygghet som demper nervøsiteten. Forberedelse betyr ikke bare å lese pensum. Det betyr å øve på eksamenssituasjonen: skriv øvingsbesvarelser på tid, hold øvingspresentasjoner foran venner eller familie, og bli kjent med oppgaveformater.

Pusteøvelser er overraskende effektive. Når du kjenner stresset bygge seg opp, stopp og pust dypt inn gjennom nesen i fire sekunder, hold pusten i fire sekunder, og pust sakte ut gjennom munnen i seks sekunder. Gjør dette fire-fem ganger. Det aktiverer kroppens avslappingsrespons og roer nervene.

Fysisk aktivitet dagene før eksamen er viktig. En tur, en joggetur eller en treningsøkt reduserer stresshormoner og forbedrer søvnkvaliteten. Og god søvn er kanskje den mest undervurderte eksamensstrategien. Hjernen konsoliderer kunnskap mens du sover. Å sitte oppe hele natten og lese er kontraproduktivt fordi du møter opp til eksamen med en hjerne som fungerer dårligere enn normalt.

Under selve eksamen: Hvis du kjenner at stresset tar over, legg ned pennen. Lukk øynene. Pust. Minn deg selv på at du har forberedt deg. Og begynn igjen. Noen ganger er det de femten sekundenes pause som gjør forskjellen.

Og husk at karakteren ikke definerer deg. Eksamen er en øvelse i å vise hva du kan under bestemte betingelser. En dårlig dag betyr ikke at du er dum. Det betyr bare at du hadde en dårlig dag.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-10-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på stressmestring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-5-n-quiz2-q0',
            task: 'Hvorfor er det dårlig strategi å sitte oppe hele natten før eksamen?',
            options: [
              { id: 'a', text: 'Fordi det er forbudt', isCorrect: false },
              { id: 'b', text: 'Fordi hjernen konsoliderer kunnskap under søvn, og søvnmangel gir dårligere prestasjon', isCorrect: true },
              { id: 'c', text: 'Fordi du ikke rekker å lese alt uansett', isCorrect: false },
              { id: 'd', text: 'Fordi det er sunnere å lese om morgenen', isCorrect: false },
            ],
            solution: 'Hjernen bearbeider og lagrer kunnskap mens du sover. Søvnmangel reduserer konsentrasjon, hukommelse og evne til problemløsning. God søvn er en viktig eksamensstrategi.',
          },
          {
            id: 'norsk-10-10-5-n-quiz2-q1',
            task: 'Hva bør du gjøre hvis stresset tar over under eksamen?',
            options: [
              { id: 'a', text: 'Fortsette å skrive selv om du ikke tenker klart', isCorrect: false },
              { id: 'b', text: 'Legge ned pennen, puste dypt, og ta en kort pause', isCorrect: true },
              { id: 'c', text: 'Be om å få forlate lokalet', isCorrect: false },
              { id: 'd', text: 'Bytte til en annen oppgave umiddelbart', isCorrect: false },
            ],
            solution: 'En kort pause med dype pusteøvelser aktiverer avslappingsresponsen og gjør det mulig å tenke klart igjen. Femten sekunders pause kan gjøre en stor forskjell.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Eksamen med strategi

**Tidsplan:** Bruk 30 min på lesing, 30 min på disposisjon, 2 timer på langsvar, 1 time på kortsvar, og 30 min på korrekturlesing.

**Korrekturlesing** kan løfte karakteren et helt trinn. Hopp aldri over den.

**Stressmestring:** Forberedelse gir trygghet. Pusteøvelser roer nervene. Fysisk aktivitet og god søvn er undervurderte strategier.

**Under eksamen:** Ta korte pauser hvis stresset tar over. Pust, og begynn igjen.

**Perspektiv:** Eksamen er en øvelse i å vise hva du kan. En dårlig dag definerer ikke hvem du er.

**Nøkkelbegreper:** Tidsstyring, disposisjon, korrekturlesing, stressmestring, pusteøvelser, forberedelse, søvn.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.6 NARRATIV: Kreativ skriving for eksamen
// ============================================================================

export const CHAPTER_NORSK_10_10_6_NARRATIV: TextbookChapter = {
  id: 'norsk-10-10-6-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '10.6',
  title: 'Kreativ skriving for eksamen',
  subtitle: 'Narrativ versjon',
  description: 'Finn din egen stemme og bruk kreativ skriving som verktøy for å skrive tekster som skiller seg ut på eksamen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'skrive kreative tekster med bevisst bruk av virkemidler',
    'utvikle en personlig stemme i skriving og bruke den i ulike sjangre',
  ],
  linkedChapterId: 'norsk-10-10-6',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-10-6-n-intro',
      type: 'text',
      content: `## Din stemme er ditt sterkeste våpen

Sensor leser hundrevis av besvarelser. De fleste er korrekte, velstrukturerte og helt glemmbare. Men noen få ganger stopper sensoren opp. Noe i teksten fanger oppmerksomheten. Det er noe ekte der, noe personlig, noe som viser at et tenkende menneske har skrevet dette. Det er tekster med stemme.

Kreativ skriving handler ikke om å skrive fiksjon eller dikt, selv om det også er kreativ skriving. I eksamenssammenheng handler kreativ skriving om å bruke språket bevisst og personlig, uansett sjanger. Du kan skrive en drøftende artikkel med kreativ stemme. Du kan skrive et essay som er personlig uten å være privat. Du kan til og med skrive en tekstanalyse som viser at du er engasjert i det du analyserer.

Den kreative stemmen er ikke noe du slår på og av. Det er noe du utvikler over tid, gjennom bevisst skriving og lesing. I dette kapittelet skal du lære konkrete teknikker for å gjøre tekstene dine mer levende, engasjerende og personlige, uten å ofre det faglige innholdet.`,
    },

    // ========== SEKSJON 1: Personlig stemme og essaysjangeren ==========
    {
      id: 'norsk-10-10-6-n-section1',
      type: 'text',
      content: `## Essayet — Der det personlige møter det faglige

Essayet er sjangeren der kreativ skriving virkelig kommer til sin rett på eksamen. Ordet «essay» kommer fra det franske «essai», som betyr «forsøk». Et essay er altså et forsøk på å utforske et tema, ikke en endelig konklusjon. Det gir deg frihet til å tenke høyt, assosiere, tvile og reflektere.

Et godt essay har noen kjennetegn. Det har en personlig stemme. Det betyr at du som skribent er til stede i teksten. Du deler dine tanker, erfaringer og refleksjoner. Men personlig betyr ikke privat. Du trenger ikke dele dine dypeste hemmeligheter. Det handler om å vise at du har et genuint engasjement for temaet.

Assosiativ skriving er en teknikk som passer godt i essayet. I stedet for å argumentere lineært fra A til B til C, lar du tankene bevege seg mer fritt. Du kan starte med en personlig erfaring, koble den til et faglig poeng, hoppe til et eksempel fra populærkulturen, og så vende tilbake til det personlige. Denne bevegelsen mellom det nære og det fjerne, mellom det personlige og det allmenne, er essayets styrke.

Men pass på: Frihet er ikke det samme som kaos. Et godt essay har en rød tråd selv om det beveger seg assosiativt. Leseren skal aldri føle seg fortapt. Hvert avsnitt skal bygge videre på helheten, selv om forbindelsen noen ganger er indirekte.

Virkemidler er også viktige. Bruk metaforer for å gjøre abstrakte ideer konkrete. Bruk kontraster for å belyse et tema fra flere sider. Bruk retoriske spørsmål for å invitere leseren til å tenke med deg. Og bruk konkrete eksempler for å forankre refleksjonene dine i virkeligheten.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-10-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kreativ skriving for eksamen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-6-n-quiz1-q0',
            task: 'Hva betyr det at et essay har en «personlig stemme»?',
            options: [
              { id: 'a', text: 'At du deler dine mest private tanker', isCorrect: false },
              { id: 'b', text: 'At du som skribent er til stede i teksten med genuint engasjement', isCorrect: true },
              { id: 'c', text: 'At du skriver i jeg-form hele veien', isCorrect: false },
              { id: 'd', text: 'At du bruker uformelt språk', isCorrect: false },
            ],
            solution: 'Personlig stemme betyr at du er til stede i teksten med dine refleksjoner og ditt engasjement. Det handler ikke om å dele private detaljer, men om å vise autentisk tenkning.',
          },
          {
            id: 'norsk-10-10-6-n-quiz1-q1',
            task: 'Hva betyr «essay» opprinnelig?',
            options: [
              { id: 'a', text: 'Skriftlig eksamen', isCorrect: false },
              { id: 'b', text: 'Forsøk', isCorrect: true },
              { id: 'c', text: 'Artikkel', isCorrect: false },
              { id: 'd', text: 'Tekst', isCorrect: false },
            ],
            solution: '«Essay» kommer fra det franske «essai» som betyr «forsøk». Sjangeren inviterer til utforsking og refleksjon, ikke endelige konklusjoner.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Konkrete skriveteknikker ==========
    {
      id: 'norsk-10-10-6-n-section2',
      type: 'text',
      content: `## Virkemidler som gjør teksten levende

Her er konkrete teknikker du kan bruke for å løfte kvaliteten på eksamensskrivingen din, uansett sjanger.

Start sterkt. Den første setningen er den viktigste. Sensor bestemmer seg raskt for om teksten din er interessant. En konkret, overraskende eller tankevekkende åpning setter standarden for hele besvarelsen. Unngå klisjeer som «Helt siden tidenes morgen har mennesker...». Start heller med et spesifikt øyeblikk, en konkret observasjon eller et treffende sitat.

Vis, ikke fortell. I stedet for å skrive «Det var trist», skriv «Han satt ved vinduet og så regnet tegne striper nedover glasset. Kaffen hadde blitt kald for lenge siden.» Den andre versjonen lar leseren føle tristheten i stedet for bare å bli fortalt om den. Denne teknikken fungerer ikke bare i skjønnlitteratur, men også i essays og artikler.

Varier setningslengden. Korte setninger skaper intensitet. Lange setninger med flere ledd skaper flyt og dybde, gir leseren tid til å synke inn i resonnementet og følge tanken din gjennom flere nyanser. Variasjonen mellom kort og langt skaper en rytme i teksten som gjør den behagelig å lese.

Bruk kontraster. «Vi lever i et samfunn som hyller individualisme, men straffer de som skiller seg ut.» Kontrasten mellom de to delene skaper en spenning som tvinger leseren til å tenke. Kontraster er et av de mest effektive virkemidlene i alle typer skriving.

Og til slutt: Tør å mene noe. De mest minneverdige besvarelsene er de der eleven tar stilling, viser engasjement og tør å ha en original vinkling. Sensorer leser hundrevis av tekster som sier det trygge og forventede. Den teksten som overrasker, som utfordrer, som viser selvstendig tenkning, den huskes.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-10-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på skriveteknikker:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-10-6-n-quiz2-q0',
            task: 'Hva betyr skriveteknikken «vis, ikke fortell»?',
            options: [
              { id: 'a', text: 'Å bruke bilder i stedet for tekst', isCorrect: false },
              { id: 'b', text: 'Å la konkrete beskrivelser skape følelsen i stedet for å navngi den direkte', isCorrect: true },
              { id: 'c', text: 'Å holde presentasjon i stedet for å skrive', isCorrect: false },
              { id: 'd', text: 'Å vise besvarelsen til noen før du leverer', isCorrect: false },
            ],
            solution: '«Vis, ikke fortell» betyr å bruke konkrete beskrivelser og scener som lar leseren oppleve følelsen, i stedet for å bare si «det var trist» eller «det var spennende».',
          },
          {
            id: 'norsk-10-10-6-n-quiz2-q1',
            task: 'Hvorfor bør du variere setningslengden?',
            options: [
              { id: 'a', text: 'Fordi sensor teller setningene og krever variasjon', isCorrect: false },
              { id: 'b', text: 'Fordi det skaper rytme i teksten og gjør den mer engasjerende å lese', isCorrect: true },
              { id: 'c', text: 'Fordi korte setninger gir bedre karakter', isCorrect: false },
              { id: 'd', text: 'Fordi det gjør teksten lengre', isCorrect: false },
            ],
            solution: 'Variasjon i setningslengde skaper en naturlig rytme. Korte setninger gir intensitet, lange gir flyt og dybde. Monoton setningslengde gjør teksten kjedelig.',
          },
          {
            id: 'norsk-10-10-6-n-quiz2-q2',
            task: 'Hva er en effektiv måte å starte en eksamenstekst på?',
            options: [
              { id: 'a', text: '«Helt siden tidenes morgen har mennesker...»', isCorrect: false },
              { id: 'b', text: '«I denne oppgaven skal jeg skrive om...»', isCorrect: false },
              { id: 'c', text: 'Et konkret øyeblikk, en overraskende observasjon eller et treffende sitat', isCorrect: true },
              { id: 'd', text: 'En definisjon fra ordboken', isCorrect: false },
            ],
            solution: 'En konkret, overraskende eller tankevekkende åpning fanger oppmerksomheten umiddelbart. Unngå klisjeer og generelle formuleringer.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-6-n-summary',
      type: 'text',
      content: `## Oppsummering: Skriv med stemme

**Kreativ skriving for eksamen** handler om å bruke språket bevisst og personlig, uansett sjanger.

**Essayet** er sjangeren for utforskning, refleksjon og personlig stemme. Ordet betyr «forsøk».

**Vis, ikke fortell:** La konkrete beskrivelser skape følelser i stedet for å navngi dem direkte.

**Varier setningslengden** for å skape rytme. Korte setninger gir intensitet. Lange gir flyt.

**Kontraster** skaper spenning og tvinger leseren til å tenke.

**Tør å mene noe.** Sensor husker tekster som viser selvstendig tenkning og engasjement.

**Nøkkelbegreper:** Essay, personlig stemme, «vis ikke fortell», kontraster, setningsvariasjon, kreative virkemidler, assosiativ skriving.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_10_NARRATIV_DEL8_CHAPTERS = [
  CHAPTER_NORSK_10_10_1_NARRATIV,
  CHAPTER_NORSK_10_10_2_NARRATIV,
  CHAPTER_NORSK_10_10_3_NARRATIV,
  CHAPTER_NORSK_10_10_4_NARRATIV,
  CHAPTER_NORSK_10_10_5_NARRATIV,
  CHAPTER_NORSK_10_10_6_NARRATIV,
];
