/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - Del 8 (Kapittel 35-40)
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 * Tema: Samfunnsfaglig metode og eksamen
 *
 * Kapittel 35: Samfunnsfaglig metode
 * Kapittel 36: Argumentasjon og drøfting
 * Kapittel 37: Demokrati og medborgerskap — Fordypning
 * Kapittel 38: Bærekraftig utvikling — Fordypning
 * Kapittel 39: Muntlig eksamen i samfunnsfag
 * Kapittel 40: Eksamensstrategier og repetisjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 35: Samfunnsfaglig metode
// LK20: Bruke samfunnsfaglege metodar og digitale ressursar i eigne
//        undersøkingar, og presentere funn ved å bruke fagomgrep
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_35: TextbookChapter = {
  id: 'samfunnsfag-10-35',
  courseId: 'samfunnsfag-10',
  chapterNumber: '35',
  title: 'Samfunnsfaglig metode',
  description: 'Lær om kvalitative og kvantitative metoder, kildekritikk, forskningsetikk og hvordan du gjennomfører egne undersøkelser i samfunnsfag.',
  estimatedMinutes: 80,
  prevChapter: 'samfunnsfag-10-34',
  nextChapter: 'samfunnsfag-10-36',
  competenceGoals: [
    'bruke samfunnsfaglege metodar og digitale ressursar i eigne undersøkingar',
    'presentere funn ved å bruke fagomgrep',
    'vurdere kjelder og kjeldekritisk kompetanse i ein digital kvardag',
  ],
  keyTerms: [
    { term: 'Kvalitativ metode', definition: 'Forskningsmetode som undersøker meninger, opplevelser og holdninger gjennom f.eks. intervju og observasjon' },
    { term: 'Kvantitativ metode', definition: 'Forskningsmetode som samler inn målbare data i form av tall, f.eks. gjennom spørreundersøkelser og statistikk' },
    { term: 'Kildekritikk', definition: 'Evnen til å vurdere om en kilde er troverdig, relevant og pålitelig' },
    { term: 'Primærkilde', definition: 'Førstehånds informasjon, f.eks. et originalt dokument, et intervju du selv gjennomfører, eller en øyenvitneskildring' },
    { term: 'Sekundærkilde', definition: 'Andrehånds informasjon som bygger på primærkilder, f.eks. en lærebok eller en nyhetsartikkel' },
    { term: 'Hypotese', definition: 'En foreløpig antakelse eller påstand som kan testes gjennom undersøkelser' },
    { term: 'Forskningsetikk', definition: 'Regler og normer for hvordan forskning skal gjennomføres på en ansvarlig og rettferdig måte' },
    { term: 'Representativt utvalg', definition: 'Et utvalg som gjenspeiler sammensetningen i den gruppen du ønsker å si noe om' },
    { term: 'Statistikk', definition: 'Tallmateriale som brukes til å beskrive og analysere mønstre i samfunnet' },
    { term: 'Korrelasjon', definition: 'En sammenheng mellom to variabler som ikke nødvendigvis betyr at den ene forårsaker den andre' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-35-intro',
      type: 'text',
      content: `## Hvordan vet vi det vi vet om samfunnet?

Når noen sier «forskning viser at...», hva betyr det egentlig? Hvordan finner forskere ut at ungdom bruker mer tid på sosiale medier enn før? Hvordan vet vi at valgdeltakelsen har gått ned? Og hvordan kan du selv undersøke noe du lurer på om samfunnet rundt deg?

Alt vi vet om samfunnet — fra antall innvandrere i Norge til folks holdninger til klimaendringer — bygger på **metode**. Metode betyr rett og slett en planmessig fremgangsmåte for å finne svar på spørsmål. Uten metode har vi bare synsing og magefølelse.

I samfunnsfag bruker vi mange av de samme metodene som profesjonelle forskere. Du har kanskje allerede gjennomført spørreundersøkelser, analysert statistikk eller vurdert kilder uten å tenke over at du drev med «metode». I dette kapittelet skal du bli bevisst på verktøyene du har, slik at du kan bruke dem bedre — både i skolearbeid og på eksamen.

I dette kapittelet skal du lære om:
- Forskjellen mellom kvalitativ og kvantitativ metode
- Hvordan du gjennomfører en enkel undersøkelse
- Kildekritikk i en digital verden
- Grunnleggende forskningsetikk
- Hvordan du tolker og presenterer funn`,
    },

    // ========== DEFINISJON: KVANTITATIV OG KVALITATIV METODE ==========
    {
      id: 'samfunnsfag-10-35-def-1',
      type: 'definition',
      title: 'Kvantitativ og kvalitativ metode',
      content: `I samfunnsfag skiller vi mellom to hovedtyper metode:

**Kvantitativ metode** handler om å samle inn **tall og målbare data**. Målet er å kartlegge omfang, mengde og mønstre i store grupper.

- *Eksempler:* spørreundersøkelser med avkrysningssvar, statistikk fra SSB, valgresultater, måling av mediebruk
- *Styrke:* Gir oversikt over store grupper og kan gi generaliserbare resultater
- *Svakhet:* Fanger ikke opp nyanser, følelser eller dypere forklaringer

**Kvalitativ metode** handler om å forstå **meninger, opplevelser og holdninger**. Målet er å gå i dybden på et tema.

- *Eksempler:* dybdeintervju, gruppesamtaler, observasjon, analyse av tekster og bilder
- *Styrke:* Gir dybdekunnskap og fanger opp nyanser
- *Svakhet:* Vanskelig å generalisere fra få informanter til hele befolkningen

**Metodetriangulering** betyr å kombinere begge metodene. For eksempel kan du først bruke en spørreundersøkelse for å kartlegge et mønster, og deretter gjøre intervjuer for å forstå hvorfor mønsteret oppstår.

**Eksempel:** Du vil undersøke unges holdninger til klimaendringer. Kvantitativt: Spørreundersøkelse i klassen med tallsvar. Kvalitativt: Dybdeintervju med tre elever for å forstå hva som former holdningene deres.`,
    },

    // ========== EKSEMPEL: UNDERSØKELSE ==========
    {
      id: 'samfunnsfag-10-35-example-1',
      type: 'example',
      title: 'Eksempel: Slik planlegger du en enkel undersøkelse',
      problem: 'Du vil finne ut om elever på skolen din synes de har nok innflytelse på skolehverdagen. Hvordan kan du gå frem?',
      solution: `**Steg 1: Formuler problemstillingen**
«I hvilken grad opplever elevene ved [skolenavn] at de har reell innflytelse på skolehverdagen?»

**Steg 2: Velg metode**
Kombinasjon: Spørreundersøkelse (kvantitativ) + intervju (kvalitativ).

**Steg 3: Utform spørreundersøkelse**
- «Hvor enig er du i at elevrådet har reell innflytelse?» (skala 1-5)
- «Har du noen gang foreslått en endring som ble gjennomført?» (ja/nei)
- «Hvor viktig er det for deg å påvirke skolehverdagen?» (skala 1-5)

**Steg 4: Gjennomfør intervju (3-4 elever)**
- «Hva betyr det for deg å ha innflytelse på skolen?»
- «Kan du gi et eksempel på en gang du følte at din stemme ble hørt — eller ikke?»

**Steg 5: Analyser funnene**
- Regn ut gjennomsnitt og prosentfordeling fra spørreundersøkelsen
- Se etter mønstre i intervjuene: Er det noe som går igjen?

**Steg 6: Presenter funnene**
- Bruk tabeller eller diagrammer for talldata
- Bruk sitater fra intervjuene for å illustrere poenger
- Vær ærlig om svakheter i undersøkelsen (f.eks. lite utvalg)`,
    },

    // ========== OPPGAVE 35.1 ==========
    {
      id: 'samfunnsfag-10-35-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-35-ex-1',
        number: '35.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Du vil finne ut hvor mange timer norske 15-åringer bruker på sosiale medier per dag. Hvilken metode er mest egnet?',
        options: [
          {
            id: 'a',
            text: 'Kvalitativ metode — gjennomfør dybdeintervju med fem elever',
            isCorrect: false,
            feedback: 'Intervju gir dybdekunnskap om opplevelser, men er ikke best egnet for å kartlegge tidsbruk i en stor gruppe.',
          },
          {
            id: 'b',
            text: 'Kvantitativ metode — gjennomfør en spørreundersøkelse med mange respondenter',
            isCorrect: true,
            feedback: 'Riktig! Når du vil måle omfang (antall timer) i en stor gruppe, er kvantitativ metode best egnet.',
          },
          {
            id: 'c',
            text: 'Kvalitativ metode — analyser kommentarfelt på Instagram',
            isCorrect: false,
            feedback: 'Analyse av kommentarfelt kan gi innsikt i innhold, men forteller lite om antall timer brukt på sosiale medier.',
          },
          {
            id: 'd',
            text: 'Det spiller ingen rolle hvilken metode du velger',
            isCorrect: false,
            feedback: 'Feil. Metodevalget har stor betydning for hva slags svar du kan få. Ulike spørsmål krever ulike metoder.',
          },
        ],
        solution: 'Når du vil kartlegge omfang og mengde (som antall timer), er kvantitativ metode med spørreundersøkelse best egnet fordi du trenger målbare tall fra mange respondenter.',
      },
    },

    // ========== OPPGAVE 35.2 ==========
    {
      id: 'samfunnsfag-10-35-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-35-ex-2',
        number: '35.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Metodevalg i praksis.',
        subTasks: [
          {
            label: 'a',
            task: 'Du vil forstå hvordan det oppleves å være ny elev på en skole. Hvilken metode ville du valgt, og hvorfor?',
            solution: 'Kvalitativ metode (f.eks. dybdeintervju) er best egnet fordi du ønsker å forstå en opplevelse — følelser, tanker og erfaringer som ikke lar seg fange i tall.',
          },
          {
            label: 'b',
            task: 'Du vil sammenligne valgdeltakelsen blant unge (18-25 år) i nordiske land. Hvilken metode ville du valgt, og hvorfor?',
            solution: 'Kvantitativ metode er best egnet fordi du trenger talldata (valgdeltakelse i prosent) fra store grupper i flere land. Statistikk fra valgmyndighetene er den beste kilden.',
          },
          {
            label: 'c',
            task: 'Forklar med egne ord hva «metodetriangulering» betyr, og gi et eksempel.',
            solution: 'Metodetriangulering betyr å kombinere kvalitativ og kvantitativ metode i samme undersøkelse. Eksempel: Først kartlegge holdninger til innvandring med spørreundersøkelse (kvantitativt), deretter intervjue noen respondenter for å forstå hva som ligger bak holdningene (kvalitativt).',
          },
        ],
        hints: ['Tenk på hva du ønsker å finne ut — det avgjør hvilken metode som passer best.'],
        solution: 'Metodevalget avhenger av problemstillingen: Vil du telle og måle? Bruk kvantitativ metode. Vil du forstå opplevelser og meninger? Bruk kvalitativ metode.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KILDEKRITIKK ==========
    {
      id: 'samfunnsfag-10-35-def-2',
      type: 'definition',
      title: 'Kildekritikk — å vurdere informasjon kritisk',
      content: `**Kildekritikk** er evnen til å vurdere om informasjon er troverdig, relevant og pålitelig. I en tid med enorme mengder informasjon på nettet er kildekritikk viktigere enn noensinne.

**TONE-modellen** er et nyttig verktøy for å vurdere kilder:

- **T — Troverdighet:** Hvem står bak kilden? Er det en anerkjent institusjon, en ekspert, eller en anonym blogger? Har forfatteren faglig kompetanse på feltet?
- **O — Objektivitet:** Er fremstillingen balansert, eller prøver avsenderen å overtale deg? Skiller kilden mellom fakta og meninger? Har avsenderen en egeninteresse?
- **N — Nøyaktighet:** Stemmer informasjonen overens med andre kilder? Finnes det faktafeil? Oppgis det kilder for påstandene?
- **E — Egnethet:** Er kilden relevant for det du undersøker? Er den oppdatert nok? Dekker den temaet du trenger?

**Primærkilder vs. sekundærkilder:**
- **Primærkilde:** Opprinnelig kilde — et originaldokument, en tale, en lov, et intervju du selv gjennomfører
- **Sekundærkilde:** Bygger på primærkilder — en lærebok, en avisartikkel, en Wikipedia-artikkel

**Digitale utfordringer:**
I den digitale verdenen er kildekritikk ekstra krevende. Falske nyheter, manipulerte bilder, deepfakes og tvilsomme nettsider kan se troverdige ut. Sjekk alltid: Hvem publiserte dette? Når? Hva er hensikten? Bekrefter andre troverdige kilder det samme?`,
    },

    // ========== EKSEMPEL: KILDEKRITIKK ==========
    {
      id: 'samfunnsfag-10-35-example-2',
      type: 'example',
      title: 'Eksempel: Kildekritikk i praksis',
      problem: 'Du finner en artikkel på nettet som hevder at «80 % av norske ungdommer er avhengige av sosiale medier». Hvordan vurderer du denne kilden?',
      solution: `**Sjekk med TONE-modellen:**

**T — Troverdighet:** Hvem har skrevet artikkelen? Står det på en kjent nyhetsside (f.eks. NRK, Forskning.no) eller en ukjent blogg? Har forfatteren faglig bakgrunn?

**O — Objektivitet:** Bruker artikkelen sterke følelsesladde ord som «avhengige»? Er det en nøytral fremstilling, eller prøver den å skape frykt? Finnes det motstridende synspunkter i artikkelen?

**N — Nøyaktighet:** Hvor kommer tallet «80 %» fra? Oppgis det en kilde? Hvem ble spurt? Hva var spørsmålet? «Avhengig» er et sterkt ord — er det forskernes ord eller journalistens?

**E — Egnethet:** Når ble artikkelen publisert? Er data fortsatt relevante? Gjelder den norske ungdommer spesifikt?

**Mulig konklusjon:** Tallet virker overdrevet. Uten en tydelig kilde til statistikken bør du være skeptisk. Sjekk om Medietilsynets «Barn og medier»-rapport bekrefter tallene — det er en pålitelig norsk kilde.`,
    },

    // ========== OPPGAVE 35.3 ==========
    {
      id: 'samfunnsfag-10-35-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-35-ex-3',
        number: '35.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse kildene er mest pålitelig for å finne statistikk om innvandring til Norge?',
        options: [
          {
            id: 'a',
            text: 'Et innlegg på Facebook fra en politiker som refererer til «mine egne erfaringer»',
            isCorrect: false,
            feedback: 'Politikeres personlige erfaringer er subjektive og kan være farget av politisk ståsted. Det er ikke pålitelig statistikk.',
          },
          {
            id: 'b',
            text: 'En YouTube-video med tittelen «Sannheten om innvandring som mediene ikke vil vise deg»',
            isCorrect: false,
            feedback: 'Slike titler er typiske for sensasjonspreget innhold. Mangelen på transparens om kilder gjør dette upålitelig.',
          },
          {
            id: 'c',
            text: 'Statistisk sentralbyrå (SSB) sine nettsider med offisielle tall',
            isCorrect: true,
            feedback: 'Riktig! SSB er Norges offisielle statistikkbyrå og har som oppgave å samle inn og publisere pålitelig statistikk uavhengig av politiske interesser.',
          },
          {
            id: 'd',
            text: 'En kommentar under en nyhetsartikkel på nett',
            isCorrect: false,
            feedback: 'Kommentarfelt er ofte preget av personlige meninger og mangler som regel kildehenvisninger. Ikke en pålitelig kilde.',
          },
        ],
        solution: 'SSB (Statistisk sentralbyrå) er Norges offisielle statistikkbyrå og den mest pålitelige kilden for offisielle tall om innvandring, befolkning og andre samfunnsforhold.',
      },
    },

    // ========== DEFINISJON: STATISTIKK OG FEILKILDER ==========
    {
      id: 'samfunnsfag-10-35-def-3',
      type: 'definition',
      title: 'Statistikk, korrelasjon og feilkilder',
      content: `Statistikk er et viktig verktøy i samfunnsfag, men det kan også villede hvis det brukes feil.

**Viktige begreper:**

**Korrelasjon vs. kausalitet:**
- **Korrelasjon** betyr at to ting henger sammen — de endrer seg samtidig
- **Kausalitet** betyr at den ene *forårsaker* den andre
- At to ting korrelerer betyr IKKE at den ene forårsaker den andre!

*Eksempel:* Iskremsalget og antall drukningsulykker korrelerer — begge øker om sommeren. Men is forårsaker ikke drukning. Den underliggende årsaken er varmt vær.

**Vanlige feilkilder i undersøkelser:**
- **Ledende spørsmål:** «Er du enig i at innvandring er et problem?» leder respondenten i en retning
- **Skjevt utvalg:** Hvis du bare spør elever i din egen klasse, kan du ikke si noe om «alle norske elever»
- **Lav svarprosent:** Hvis bare 20 % svarer, kan de som svarte ha andre meninger enn de som ikke svarte
- **Tolkningsfeil:** Å trekke for store konklusjoner fra begrensede data

**Presentasjon av statistikk:**
Husk at tabeller, diagrammer og grafer kan manipuleres. En graf der y-aksen starter på 90 i stedet for 0 kan få en liten endring til å se dramatisk ut. Vær alltid kritisk til hvordan tall presenteres visuelt.`,
    },

    // ========== OPPGAVE 35.4 ==========
    {
      id: 'samfunnsfag-10-35-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-35-ex-4',
        number: '35.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En avisoverskrift lyder: «Forskning viser: Elever som spiser frokost, får bedre karakterer!» Hva er det viktigste å tenke på her?',
        options: [
          {
            id: 'a',
            text: 'At frokost gjør deg smartere, så alle bør spise frokost før prøver',
            isCorrect: false,
            feedback: 'Dette er en for rask konklusjon. Sammenhengen kan skyldes andre faktorer, som at elever fra trygge hjem med gode rutiner både spiser frokost og presterer godt.',
          },
          {
            id: 'b',
            text: 'At korrelasjon ikke er det samme som kausalitet — det kan finnes andre forklaringer på sammenhengen',
            isCorrect: true,
            feedback: 'Riktig! At to ting henger sammen betyr ikke at det ene forårsaker det andre. Kanskje er det familiens ressurser, søvnvaner eller andre faktorer som påvirker begge deler.',
          },
          {
            id: 'c',
            text: 'At forskning alltid har rett, og vi bør stole på konklusjonen',
            isCorrect: false,
            feedback: 'Forskning bør alltid vurderes kritisk. Avisoverskrifter forenkler ofte forskningsfunn, og det er viktig å skille mellom korrelasjon og kausalitet.',
          },
          {
            id: 'd',
            text: 'At dette sikkert er falske nyheter og bør ignoreres',
            isCorrect: false,
            feedback: 'Det er ikke nødvendigvis falskt — sammenhengen kan godt eksistere. Men vi bør være kritiske til slutningen om at frokost *forårsaker* bedre karakterer.',
          },
        ],
        solution: 'Selv om forskning viser en sammenheng (korrelasjon), betyr det ikke automatisk at det ene forårsaker det andre (kausalitet). Andre faktorer kan forklare sammenhengen.',
      },
    },

    // ========== OPPGAVE 35.5 ==========
    {
      id: 'samfunnsfag-10-35-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-35-ex-5',
        number: '35.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kildekritikk i praksis.',
        subTasks: [
          {
            label: 'a',
            task: 'Bruk TONE-modellen (Troverdighet, Objektivitet, Nøyaktighet, Egnethet) til å vurdere én kilde du har brukt nylig — for eksempel en nyhetsartikkel, en YouTube-video eller et innlegg på sosiale medier.',
            solution: 'Eleven vurderer kilden systematisk med alle fire kriteriene i TONE-modellen og begrunner sine vurderinger med konkrete eksempler fra kilden.',
          },
          {
            label: 'b',
            task: 'Finn to ulike kilder som handler om det samme temaet (f.eks. klimaendringer eller ungdoms mediebruk). Sammenlign kildene: Hvem står bak? Er fremstillingen balansert? Hvilken kilde er mest pålitelig, og hvorfor?',
            solution: 'Eleven identifiserer avsender, vurderer objektivitet og nøyaktighet, og begrunner hvilken kilde som er mest pålitelig basert på konkrete kriterier.',
          },
        ],
        hints: ['Bruk TONE-modellen systematisk — gå gjennom alle fire punktene for hver kilde.'],
        solution: 'God kildekritikk handler om å bruke systematiske verktøy (som TONE) for å vurdere informasjon, snarere enn å stole på magefølelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 35.6 ==========
    {
      id: 'samfunnsfag-10-35-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-35-ex-6',
        number: '35.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Planlegg og gjennomfør en enkel undersøkelse om et samfunnsfaglig tema som interesserer deg.',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler en problemstilling. Forklar hvorfor dette er et interessant spørsmål å undersøke.',
            solution: 'Problemstillingen bør være avgrenset, konkret og mulig å undersøke med tilgjengelige metoder. Eleven begrunner relevansen.',
          },
          {
            label: 'b',
            task: 'Velg metode (kvantitativ, kvalitativ eller begge). Begrunn valget ut fra hva du ønsker å finne ut.',
            solution: 'Eleven kobler metodevalget tydelig til problemstillingen og forklarer hvorfor den valgte metoden er best egnet.',
          },
          {
            label: 'c',
            task: 'Presenter funnene dine med passende fremstillingsform (tabell, diagram, sitater fra intervju). Diskuter eventuelle svakheter ved undersøkelsen din.',
            solution: 'Eleven presenterer funn på en ryddig måte og viser metodisk bevissthet ved å reflektere over svakheter som lite utvalg, mulige feilkilder eller ledende spørsmål.',
          },
        ],
        hints: [
          'Velg et tema du synes er interessant — det gjør arbeidet lettere og mer engasjerende.',
          'Hold undersøkelsen enkel: 5-10 spørsmål i en spørreundersøkelse eller 2-3 intervjuer er nok.',
        ],
        solution: 'En god undersøkelse har en klar problemstilling, et begrunnet metodevalg, ryddig presentasjon av funn, og ærlig refleksjon over svakheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-35-oppsummering',
      type: 'text',
      content: `## Oppsummering: Samfunnsfaglig metode

Metode er verktøykassen din i samfunnsfag — det som skiller kunnskap fra synsing.

**De viktigste poengene:**
- **Kvantitativ metode** brukes for å telle og måle — spørreundersøkelser, statistikk, tall
- **Kvalitativ metode** brukes for å forstå — intervjuer, observasjon, tekstanalyse
- **Kildekritikk** er evnen til å vurdere om informasjon er troverdig — bruk TONE-modellen
- **Korrelasjon** betyr sammenheng, **kausalitet** betyr årsaksforhold — ikke forveksle dem
- **Primærkilder** er førstehånds, **sekundærkilder** er andrehånds informasjon
- En god undersøkelse har en klar problemstilling, begrunnet metodevalg og ærlig refleksjon over svakheter

Metodekunnskap gjør deg til en bedre og mer kritisk samfunnsborger — og gir deg et fortrinn på eksamen.`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'samfunnsfag-10-35-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-35-ex-7',
        number: '35.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Helhetlig metodeoppgave: En medelev har gjennomført en spørreundersøkelse. Hun spurte 10 venner i sin egen klasse: «Er du enig i at mobiltelefoner bør forbys på skolen?» 8 av 10 svarte ja. Hun konkluderer: «80 % av norske ungdommer vil forby mobiltelefoner på skolen.» Vurder undersøkelsen hennes.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke feilkilder og svakheter finner du i denne undersøkelsen? List opp minst tre.',
            solution: '1) Skjevt utvalg: Bare 10 venner i egen klasse er ikke representativt for «norske ungdommer». 2) Ledende spørsmål: «Er du enig i at...» leder mot ja-svar. 3) For lite utvalg: 10 personer er altfor få til å generalisere. 4) Venner kan påvirkes av gruppedynamikk og sosial ønskelighet.',
          },
          {
            label: 'b',
            task: 'Hvordan ville du forbedret undersøkelsen slik at den ble mer pålitelig? Gi konkrete forslag.',
            solution: 'Forslag: 1) Større og mer variert utvalg — elever fra flere klasser og skoler. 2) Nøytralt formulert spørsmål, f.eks. «Hva mener du om bruk av mobiltelefoner på skolen?» med svaralternativer. 3) Anonym gjennomføring for å unngå gruppepress. 4) Flere spørsmål som nyanserer temaet.',
          },
        ],
        hints: ['Tenk gjennom utvalg, spørsmålsformulering og generaliserbarhet.'],
        solution: 'Undersøkelsen har flere alvorlige svakheter: skjevt utvalg, ledende spørsmål, for lite utvalg og uberettiget generalisering. Å gjenkjenne slike feil er en sentral del av metodekompetansen i samfunnsfag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 36: Argumentasjon og drøfting
// LK20: Drøfte og argumentere med utgangspunkt i fagstoff og aktuelle hendingar
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_36: TextbookChapter = {
  id: 'samfunnsfag-10-36',
  courseId: 'samfunnsfag-10',
  chapterNumber: '36',
  title: 'Argumentasjon og drøfting',
  description: 'Lær forskjellen på å beskrive, forklare og drøfte. Øv på å bygge gode argumenter, gjenkjenne retoriske virkemidler og skrive helhetlige drøftinger.',
  estimatedMinutes: 75,
  prevChapter: 'samfunnsfag-10-35',
  nextChapter: 'samfunnsfag-10-37',
  competenceGoals: [
    'drøfte og argumentere med utgangspunkt i fagstoff og aktuelle hendingar',
    'presentere samfunnsfaglege tema og problemstillingar ved å bruke ulike kjelder',
    'reflektere over korleis ein sjølv og andre deltek i å utvide, endre og skape samfunnet',
  ],
  keyTerms: [
    { term: 'Argument', definition: 'En begrunnet påstand som brukes for å overbevise eller underbygge et synspunkt' },
    { term: 'Drøfting', definition: 'Å belyse en sak fra flere sider, veie argumenter for og mot, og komme frem til en begrunnet vurdering' },
    { term: 'Påstand', definition: 'En setning som hevder noe som kan diskuteres — utgangspunktet for et argument' },
    { term: 'Begrunnelse', definition: 'Forklaringen på hvorfor en påstand er riktig — det som underbygger argumentet' },
    { term: 'Eksempel', definition: 'En konkret illustrasjon som viser at påstanden stemmer i virkeligheten' },
    { term: 'Motargument', definition: 'Et argument som taler mot din egen påstand — viktig for å vise nyansert forståelse' },
    { term: 'Retoriske virkemidler', definition: 'Teknikker som brukes for å overtale: etos (troverdighet), patos (følelser) og logos (logikk)' },
    { term: 'Nyansering', definition: 'Å vise at en sak er mer kompleks enn et enkelt «for eller mot» — å ta forbehold og se mellomposisjoner' },
    { term: 'Kildebruk', definition: 'Å referere til troverdige kilder for å underbygge argumentene dine' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-36-intro',
      type: 'text',
      content: `## Hvorfor er drøfting den viktigste ferdigheten i samfunnsfag?

Tenk deg at du sitter på eksamen og får spørsmålet: «Bør Norge ta imot flere flyktninger?» Du vet en del om temaet. Men hva svarer du?

Hvis du bare sier «ja, fordi det er viktig å hjelpe», har du gitt en mening — men du har ikke drøftet. Hvis du bare lister opp fakta om flyktningtall, har du beskrevet — men du har fortsatt ikke drøftet. Drøfting handler om noe mer: å se saken fra flere sider, veie argumenter mot hverandre, og komme frem til en **begrunnet** konklusjon.

Dette er den viktigste ferdigheten du kan ha i samfunnsfag — og den ferdigheten som skiller gode besvarelser fra fremragende. Sensorer på muntlig eksamen, lærere som retter oppgaver, og voksne i arbeidslivet — alle verdsetter evnen til å tenke nyansert og argumentere saklig.

Det gode er at drøfting er en ferdighet du kan trene opp. I dette kapittelet lærer du:
- Forskjellen på å beskrive, forklare og drøfte
- Hvordan du bygger et godt argument
- Retoriske virkemidler du bør kjenne til
- Hvordan du strukturerer en helhetlig drøfting
- Vanlige feil du bør unngå`,
    },

    // ========== DEFINISJON: ARGUMENTETS OPPBYGGING ==========
    {
      id: 'samfunnsfag-10-36-def-1',
      type: 'definition',
      title: 'Argumentets oppbygging — PBE-modellen',
      content: `Et godt argument består av tre deler, ofte kalt **PBE-modellen**:

**P — Påstand:** En tydelig setning som hevder noe.
*Eksempel:* «Stemmerettsalderen bør senkes til 16 år.»

**B — Begrunnelse:** Forklaringen på *hvorfor* påstanden er riktig.
*Eksempel:* «Fordi 16-åringer er berørt av politiske beslutninger, betaler skatt gjennom deltidsjobber, og er strafferettslig ansvarlige.»

**E — Eksempel:** En konkret illustrasjon som viser at begrunnelsen holder i virkeligheten.
*Eksempel:* «I Østerrike ble stemmerettsalderen senket til 16 i 2007, og forskning viser at unge førstegangsvelgere der stemmer like bevisst som eldre velgere.»

**Et komplett argument ser slik ut:**
«Stemmerettsalderen bør senkes til 16 år (påstand), fordi ungdom er direkte berørt av politikk og allerede har lovfestede plikter i samfunnet (begrunnelse). I Østerrike, der 16-åringer har hatt stemmerett siden 2007, viser forskning at unge velgere tar informerte valg (eksempel).»

**Tips:** Et argument uten begrunnelse er bare en mening. Et argument uten eksempel mangler forankring i virkeligheten. Bruk alle tre delene for å overbevise.`,
    },

    // ========== EKSEMPEL: BESKRIVE, FORKLARE, DRØFTE ==========
    {
      id: 'samfunnsfag-10-36-example-1',
      type: 'example',
      title: 'Eksempel: Forskjellen på å beskrive, forklare og drøfte',
      problem: 'Tema: Ytringsfrihet. Vis forskjellen mellom å beskrive, forklare og drøfte.',
      solution: `**Beskrive** (laveste nivå):
«I Norge har vi ytringsfrihet. Den er beskyttet i Grunnlovens paragraf 100. Ytringsfrihet betyr at alle kan si sin mening.»
*Du forteller hva noe er — ren faktainformasjon.*

**Forklare** (mellomnivå):
«Norge har ytringsfrihet fordi det er en forutsetning for et fungerende demokrati. Uten ytringsfrihet kan ikke innbyggerne kritisere makthaverne, og mediene kan ikke avdekke maktmisbruk. Ytringsfriheten er også viktig for å beskytte mindretallet.»
*Du forteller hvorfor noe er som det er — årsak og virkning.*

**Drøfte** (høyeste nivå):
«Ytringsfrihet er grunnleggende for demokratiet, fordi den sikrer åpen debatt og kontroll av makthaverne. Samtidig reiser ubegrenset ytringsfrihet vanskelige spørsmål: Bør hatefulle ytringer som rammer sårbare grupper beskyttes av ytringsfriheten? På den ene siden kan begrensninger true den frie debatten. På den andre siden kan hatprat skremme folk fra å delta i samfunnsdebatten. Min vurdering er at ytringsfrihet bør ha grenser der ytringer direkte truer andres sikkerhet, fordi reell ytringsfrihet forutsetter at alle tør å bruke den.»
*Du belyser fra flere sider, veier argumenter og gir en begrunnet vurdering.*`,
    },

    // ========== OPPGAVE 36.1 ==========
    {
      id: 'samfunnsfag-10-36-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-36-ex-1',
        number: '36.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse formuleringene er et eksempel på drøfting?',
        options: [
          {
            id: 'a',
            text: '«FNs menneskerettighetserklæring ble vedtatt i 1948 og inneholder 30 artikler.»',
            isCorrect: false,
            feedback: 'Dette er en beskrivelse — du forteller faktainformasjon uten å vurdere eller analysere.',
          },
          {
            id: 'b',
            text: '«Globalisering er bra fordi vi får billigere varer.»',
            isCorrect: false,
            feedback: 'Dette er en ensidig påstand uten begrunnelse fra flere sider. En drøfting krever at du også presenterer motargumenter.',
          },
          {
            id: 'c',
            text: '«Mens globalisering har gitt billigere varer og teknologisk utvikling, har den også ført til økt ulikhet og miljøproblemer. Spørsmålet er om fordelene veier opp for ulempene.»',
            isCorrect: true,
            feedback: 'Riktig! Her belyses saken fra flere sider, med både fordeler og ulemper, noe som er kjernen i drøfting.',
          },
          {
            id: 'd',
            text: '«Stortinget vedtar lover, regjeringen gjennomfører dem, og domstolene kontrollerer at lovene følges.»',
            isCorrect: false,
            feedback: 'Dette er en beskrivelse av maktfordelingsprinsippet — ingen vurdering eller analyse.',
          },
        ],
        solution: 'Drøfting kjennetegnes av at en sak belyses fra flere sider, at argumenter for og mot presenteres, og at det gjøres en vurdering.',
      },
    },

    // ========== DEFINISJON: RETORISKE VIRKEMIDLER ==========
    {
      id: 'samfunnsfag-10-36-def-2',
      type: 'definition',
      title: 'Retoriske virkemidler — etos, patos og logos',
      content: `**Retorikk** er kunsten å overtale. De gamle grekerne identifiserte tre hovedmåter å overtale på, kjent som de **tre appellformene**:

**Etos — troverdighet:**
Etos handler om avsenderens troverdighet. Vi lar oss lettere overbevise av noen vi oppfatter som kompetente, ærlige og pålitelige.
- *Eksempel:* En lege som uttaler seg om helse har høy etos. En kjendis som reklamerer for et helseprodukt har lavere etos i dette spørsmålet.
- *I din drøfting:* Vis at du har satt deg inn i temaet. Referer til troverdige kilder. Bruk fagbegreper presist.

**Patos — følelser:**
Patos handler om å appellere til tilhørerens følelser — empati, sinne, frykt, håp eller stolthet.
- *Eksempel:* En hjelpeorganisasjon viser bilder av barn i nød for å samle inn penger. Bildet appellerer til empati.
- *I din drøfting:* Personlige historier og konkrete eksempler kan gjøre argumentene levende. Men pass på at følelsene ikke erstatter logikken.

**Logos — logikk:**
Logos handler om å appellere til tilhørerens fornuft gjennom fakta, tall, logiske resonnementer og saklig argumentasjon.
- *Eksempel:* «Statistikk viser at valgdeltakelsen blant unge under 25 har falt med 10 prosentpoeng de siste 20 årene.»
- *I din drøfting:* Bruk tall, forskningsfunn og logiske resonnementer for å underbygge påstandene dine.

**I en god drøfting bruker du alle tre:** Du viser at du er kunnskapsrik (etos), bruker konkrete eksempler som engasjerer (patos), og argumenterer logisk med fakta og begrunnelser (logos).`,
    },

    // ========== OPPGAVE 36.2 ==========
    {
      id: 'samfunnsfag-10-36-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-36-ex-2',
        number: '36.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Retorisk analyse i praksis.',
        subTasks: [
          {
            label: 'a',
            task: 'Les følgende argument: «Vi MÅ redde regnskogen NÅ! Hvert minutt forsvinner 30 fotballbaner med skog. Tenk på alle dyrene som mister hjemmet sitt — jaguarer, papegøyer, apekatter. Vil du forklare barna dine at du ikke brydde deg?» Hvilke retoriske virkemidler brukes her? Identifiser etos, patos og logos.',
            solution: 'Patos dominerer: Følelsesladet språk («MÅ», «NÅ»), bilder av dyr som mister hjemmet, og spørsmålet om å forklare seg for barna appellerer til følelser (skyld, empati). Logos: «30 fotballbaner per minutt» er et tallbasert argument. Etos: Lav — avsenderen er ukjent og bruker sterke følelsesappeller fremfor faglig kompetanse.',
          },
          {
            label: 'b',
            task: 'Skriv om argumentet slik at det bruker mer logos (fakta og logikk) og mindre patos (følelser). Behold det samme budskapet.',
            solution: 'Eksempel: «Avskoging er et alvorlig miljøproblem. Ifølge FN forsvinner cirka 10 millioner hektar tropisk skog årlig. Dette bidrar til klimaendringer (skog lagrer CO2), tap av biologisk mangfold, og truer livsgrunnlaget for urfolk. Forskning viser at å beskytte regnskogen er en av de mest kostnadseffektive klimatiltakene vi kan gjennomføre.»',
          },
        ],
        hints: ['Etos = troverdighet, patos = følelser, logos = logikk og fakta.'],
        solution: 'Å gjenkjenne retoriske virkemidler gjør deg til en mer kritisk leser og en bedre argumentator. De beste argumentene balanserer etos, patos og logos.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: DRØFTINGSSTRUKTUR ==========
    {
      id: 'samfunnsfag-10-36-example-2',
      type: 'example',
      title: 'Eksempel: Slik strukturerer du en drøfting',
      problem: 'Du skal drøfte: «Bør stemmerettsalderen senkes til 16 år?» Hvordan bygger du opp drøftingen?',
      solution: `**Steg 1: Innledning (presenter problemstillingen)**
«I Norge har vi stemmerett fra fylte 18 år, men i flere land diskuteres det om alderen bør senkes til 16. Spørsmålet reiser viktige prinsipielle debatter om demokratisk deltakelse.»

**Steg 2: Argumenter FOR**
- Påstand: Ungdom bør få stemme fordi de er berørt av politikken.
- Begrunnelse: 16-åringer betaler skatt, er strafferettslig ansvarlige, og politiske beslutninger om skole, klima og helse påvirker dem direkte.
- Eksempel: I Østerrike har 16-åringer hatt stemmerett siden 2007, og forskning viser at unge velgere engasjerer seg minst like mye som eldre.

**Steg 3: Argumenter MOT**
- Påstand: 16-åringer er for unge til å ta velbegrunnede valg.
- Begrunnelse: Hjernen er ikke ferdig utviklet (prefrontal cortex modnes til midten av 20-årene), unge har begrenset livserfaring, og de kan påvirkes sterkt av foreldre og lærere.
- Eksempel: Forsøk med stemmerett for 16-åringer i enkelte norske kommuner har vist at valgdeltakelsen blant de yngste er lav.

**Steg 4: Nyansering**
«Det finnes mellomposisjoner: Kanskje kan 16-åringer få stemme i lokalvalg (som er nærmere deres hverdag) men ikke i stortingsvalg?»

**Steg 5: Konklusjon (din begrunnede vurdering)**
«Min vurdering er at stemmerettsalderen bør senkes, fordi argumentene om demokratisk deltakelse og ungdoms engasjement veier tyngre enn argumentene om modenhet. Det viktigste er ikke alder, men at unge får muligheten til å delta.»`,
    },

    // ========== OPPGAVE 36.3 ==========
    {
      id: 'samfunnsfag-10-36-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-36-ex-3',
        number: '36.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bygg argumenter med PBE-modellen (Påstand-Begrunnelse-Eksempel).',
        subTasks: [
          {
            label: 'a',
            task: 'Tema: Klima. Bygg et argument FOR strengere klimatiltak i Norge.',
            solution: 'Eksempel: Påstand: Norge bør innføre strengere klimatiltak. Begrunnelse: Som et rikt land med høye utslipp per innbygger har Norge et særlig ansvar for å kutte utslipp, i tråd med Parisavtalen. Eksempel: Norges oljeproduksjon bidrar til globale CO2-utslipp, og FNs klimapanel krever raske kutt for å begrense oppvarmingen til 1,5 grader.',
          },
          {
            label: 'b',
            task: 'Tema: Klima. Bygg et motargument — et argument MOT strengere klimatiltak i Norge.',
            solution: 'Eksempel: Påstand: For strenge klimatiltak kan skade norsk økonomi og arbeidsplasser. Begrunnelse: Olje- og gassindustrien gir tusenvis av arbeidsplasser og store inntekter til staten. Raske kutt kan føre til arbeidsledighet i oljeavhengige regioner. Eksempel: Når kullgruver stenges i andre land, opplever lokalsamfunnene ofte økonomisk kollaps og fraflytting.',
          },
        ],
        hints: ['Husk alle tre delene: påstand, begrunnelse og eksempel.'],
        solution: 'PBE-modellen hjelper deg å bygge komplette argumenter. Et godt argument har en klar påstand, en logisk begrunnelse og et konkret eksempel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: VANLIGE DRØFTINGSFEIL ==========
    {
      id: 'samfunnsfag-10-36-def-3',
      type: 'definition',
      title: 'Vanlige feil i argumentasjon — logiske feilslutninger',
      content: `Det er viktig å gjenkjenne vanlige feil i argumentasjon — både i andres og i dine egne argumenter:

**Stråmannsargument:**
Du forvrenger motstanderens argument slik at det blir lettere å angripe.
- *Eksempel:* Person A: «Vi bør redusere kjøttforbruket for klimaet.» Person B: «Så du vil tvinge alle til å bli veganere?»
- Person B angriper noe person A aldri sa.

**Personangrep (ad hominem):**
Du angriper personen i stedet for argumentet.
- *Eksempel:* «Du kan ikke uttale deg om fattigdom — du er jo selv rik.»
- En persons bakgrunn gjør ikke argumentet ugyldig.

**Falsk dilemma:**
Du presenterer saken som om det bare finnes to alternativer, når det finnes flere.
- *Eksempel:* «Enten er du for full ytringsfrihet, eller så er du for sensur.»
- I virkeligheten finnes det mange mellomposisjoner.

**Appell til flertallet:**
Du argumenterer med at noe er riktig fordi mange mener det.
- *Eksempel:* «De fleste i klassen synes lekser er unødvendig, altså er lekser unødvendig.»
- At mange mener noe, gjør det ikke automatisk riktig.

**Å unngå disse feilene:** Vær presis i gjengivelsen av andres argumenter. Angrip argumentet, ikke personen. Vurder flere alternativer. Og husk at popularitet ikke er det samme som sannhet.`,
    },

    // ========== OPPGAVE 36.4 ==========
    {
      id: 'samfunnsfag-10-36-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-36-ex-4',
        number: '36.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Person A sier: «Vi bør innføre flere mottiltak mot hatprat på nett.» Person B svarer: «Så du vil avskaffe ytringsfriheten?» Hvilken logisk feilslutning begår Person B?',
        options: [
          {
            id: 'a',
            text: 'Stråmannsargument — Person B forvrenger Person As argument',
            isCorrect: true,
            feedback: 'Riktig! Person A snakket om tiltak mot hatprat, ikke om å avskaffe ytringsfriheten. Person B overdriver og forvrenger argumentet for å gjøre det lettere å angripe.',
          },
          {
            id: 'b',
            text: 'Personangrep — Person B angriper Person A som person',
            isCorrect: false,
            feedback: 'Person B angriper ikke Person A personlig, men forvrenger argumentet. Det er et stråmannsargument.',
          },
          {
            id: 'c',
            text: 'Falsk dilemma — Person B gir bare to alternativer',
            isCorrect: false,
            feedback: 'Det er et element av falsk dilemma (full ytringsfrihet eller sensur), men hovedfeilen er at Person B forvrenger det Person A faktisk sa. Det er et stråmannsargument.',
          },
          {
            id: 'd',
            text: 'Appell til flertallet — Person B sier at alle er enige',
            isCorrect: false,
            feedback: 'Person B refererer ikke til hva flertallet mener. Feilen her er at Person B forvrenger motstanderens argument.',
          },
        ],
        solution: 'Et stråmannsargument innebærer å forvrenge motstanderens posisjon slik at den blir lettere å angripe. Person A ønsker tiltak mot hatprat, ikke å avskaffe ytringsfriheten.',
      },
    },

    // ========== OPPGAVE 36.5 ==========
    {
      id: 'samfunnsfag-10-36-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-36-ex-5',
        number: '36.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort drøfting (150-200 ord) om ETT av temaene under. Bruk strukturen: innledning, argumenter for, argumenter mot, nyansering og konklusjon.',
        subTasks: [
          {
            label: 'a',
            task: '«Bør alle elever i Norge ha tilgang til nettbrett eller PC i undervisningen?»',
            solution: 'En god drøfting presenterer argumenter for (digitale ferdigheter, tilgang til informasjon, tilpasset opplæring) og mot (distraksjon, skjermtid, sosiale forskjeller i digital kompetanse), nyanserer (kanskje regulert bruk er bedre enn enten alt eller ingenting), og gir en begrunnet konklusjon.',
          },
          {
            label: 'b',
            task: '«Bør Norge bruke mer penger på bistand til fattige land?»',
            solution: 'En god drøfting trekker inn argumenter for (humanitært ansvar, FNs bærekraftsmål, Norges rikdom) og mot (prioritere egne innbyggere, bistandens effektivitet, andre lands korrupsjon), nyanserer (kvalitet vs. kvantitet i bistand), og gir en begrunnet vurdering.',
          },
        ],
        hints: [
          'Bruk PBE-modellen for hvert argument.',
          'Vis at du kan se saken fra minst to sider.',
          'Avslutt med DIN vurdering — men begrunn den!',
        ],
        solution: 'En god drøfting er balansert (presenterer flere sider), bruker fagbegreper og eksempler, og lander på en begrunnet konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 36.6 ==========
    {
      id: 'samfunnsfag-10-36-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-36-ex-6',
        number: '36.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser en debatt: Finn en aktuell debatt i norske medier (f.eks. fra NRK Debatten, en aviskommentar, eller et innlegg på sosiale medier).',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort hva debatten handler om og hvem som deltar.',
            solution: 'Eleven identifiserer tema, aktører og kontekst for den aktuelle debatten.',
          },
          {
            label: 'b',
            task: 'Identifiser minst to argumenter fra hver side. Vurder om argumentene er sterke eller svake — og begrunn vurderingen din.',
            solution: 'Eleven identifiserer argumenter, vurderer dem ut fra PBE-modellen (har de påstand, begrunnelse og eksempel?), og peker på eventuelle logiske feilslutninger.',
          },
          {
            label: 'c',
            task: 'Finnes det logiske feilslutninger i debatten? Identifiser eventuelt stråmannsargumenter, personangrep, falske dilemmaer eller appeller til flertallet.',
            solution: 'Eleven viser evne til å gjenkjenne retoriske grep og logiske feilslutninger i autentisk debatt.',
          },
        ],
        hints: ['Bruk begrepene du har lært: PBE-modellen, etos/patos/logos, logiske feilslutninger.'],
        solution: 'Å analysere reelle debatter er den beste øvelsen for å utvikle kritisk tenkning og argumentasjonsevne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-36-oppsummering',
      type: 'text',
      content: `## Oppsummering: Argumentasjon og drøfting

Drøfting er den viktigste ferdigheten du trenger i samfunnsfag — det er det som skiller en middels besvarelse fra en sterk.

**De viktigste poengene:**
- **Beskrive** = fortelle hva noe er. **Forklare** = fortelle hvorfor. **Drøfte** = belyse fra flere sider og gi begrunnet vurdering
- **PBE-modellen:** Påstand + Begrunnelse + Eksempel = et komplett argument
- **Retoriske virkemidler:** Etos (troverdighet), patos (følelser), logos (logikk)
- **Logiske feilslutninger** å unngå: stråmann, personangrep, falsk dilemma, appell til flertallet
- **Drøftingsstrukturen:** Innledning, argumenter for, argumenter mot, nyansering, begrunnet konklusjon

Øv deg på å drøfte jevnlig. Jo mer du trener, desto mer naturlig blir det — og desto bedre blir du forberedt til eksamen.`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'samfunnsfag-10-36-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-36-ex-7',
        number: '36.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Helhetlig drøftingsoppgave: «Er det rettferdig at noen land er mye rikere enn andre?» Skriv en drøfting (200-300 ord) der du bruker alt du har lært i dette kapittelet.',
        hints: [
          'Bruk PBE-modellen for hvert argument.',
          'Trekk inn fagbegreper som globalisering, bærekraftig utvikling og menneskerettigheter.',
          'Presenter minst to sider av saken og nyanser.',
          'Avslutt med en begrunnet konklusjon.',
        ],
        solution: 'En sterk drøfting kan inkludere: historiske årsaker til global ulikhet (kolonialisme, ressursfordeling), argumenter for at rike land har ansvar (FNs bærekraftsmål, solidaritet), argumenter for at land selv har ansvar for egen utvikling (styresett, korrupsjon), nyansering (bistand vs. handel vs. strukturelle endringer), og en begrunnet egen vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 37: Demokrati og medborgerskap — Fordypning
// LK20: Reflektere over hva det innebærer å vere medborgar, og ulike former
//        for demokratisk deltaking
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_37: TextbookChapter = {
  id: 'samfunnsfag-10-37',
  courseId: 'samfunnsfag-10',
  chapterNumber: '37',
  title: 'Demokrati og medborgerskap — Fordypning',
  description: 'Fordyp deg i demokratiets utfordringer i vår tid: populisme, desinformasjon, lav valgdeltakelse og ungdomsengasjement. Tren på eksamensrelevant drøfting.',
  estimatedMinutes: 85,
  prevChapter: 'samfunnsfag-10-36',
  nextChapter: 'samfunnsfag-10-38',
  competenceGoals: [
    'reflektere over kva det inneber å vere medborgar, og ulike former for demokratisk deltaking',
    'drøfte korleis makt og maktmisbruk kjem til uttrykk i ulike samanhengar',
    'utforske og beskrive korleis ulike politiske system er organiserte',
  ],
  keyTerms: [
    { term: 'Populisme', definition: 'Politisk stil som setter «det vanlige folket» opp mot en «elite». Populisme finnes både på høyresiden og venstresiden og kan både forenkle debatter og bringe oversette saker på dagsordenen.' },
    { term: 'Polarisering', definition: 'At meninger i samfunnet trekker mot ytterpunktene og det blir mindre rom for mellomposisjoner og kompromisser' },
    { term: 'Desinformasjon', definition: 'Falsk eller villedende informasjon som spres bevisst for å påvirke folks meninger eller handlinger' },
    { term: 'Valgdeltakelse', definition: 'Andelen stemmeberettigede som faktisk stemmer ved et valg — et mål på demokratisk engasjement' },
    { term: 'Medborgerskap', definition: 'Det å være en aktiv deltaker i samfunnet, med både rettigheter og plikter' },
    { term: 'Sivilsamfunn', definition: 'Frivillige organisasjoner, foreninger og bevegelser som utgjør rommet mellom staten, markedet og familien' },
    { term: 'Demokratisk tilbakegang', definition: 'En gradvis svekkelse av demokratiske institusjoner og rettigheter i et land som tidligere var demokratisk' },
    { term: 'Maktfordeling', definition: 'At makten i en stat er delt mellom lovgivende, utøvende og dømmende makt for å hindre maktmisbruk' },
    { term: 'Legitimitet', definition: 'At makthaverne har folkets aksept og tillit — at makten oppfattes som rettmessig' },
  ],
  content: [
    {
      id: 'samfunnsfag-10-37-intro',
      type: 'text',
      content: `## Er demokratiet i krise?

I 2006 klassifiserte organisasjonen Freedom House 89 land som «frie». I dag er tallet lavere. Over hele verden ser vi tegn på at demokratiet er under press: autoritære ledere som vinner valg, angrep på uavhengige medier, innskrenket ytringsfrihet og synkende tillit til politikere.

Men trenger vi å bekymre oss i Norge? Vi har et stabilt demokrati, frie valg, sterk rettssikkerhet og høy tillit mellom mennesker. Likevel finnes det utfordringer også her: synkende valgdeltakelse blant unge, økt polarisering i nettdebatter, desinformasjon som spres raskt, og en følelse hos noen av at politikerne ikke lytter.

I dette kapittelet skal du gå i dybden på demokratiets styrker og svakheter i vår tid. Du skal utforske aktuelle trusler og diskutere hva som kan gjøres for å styrke demokratiet — inkludert din egen rolle som medborger.

I dette kapittelet skal du lære om:
- Aktuelle trusler mot demokratiet
- Populisme og polarisering
- Desinformasjon og dens virkning på demokratiet
- Valgdeltakelse og ungdomsengasjement
- Hva du selv kan gjøre som medborger`,
    },
    {
      id: 'samfunnsfag-10-37-def-1',
      type: 'definition',
      title: 'Populisme — når folket settes opp mot eliten',
      content: `**Populisme** er ikke en ideologi med et fast politisk innhold, men en **politisk stil** som kjennetegnes av:

1. **Motsetningen folk mot elite:** Populister hevder at det finnes en korrupt «elite» (politikere, medier, eksperter) som ikke bryr seg om «vanlige folk». Populisten selv fremstår som den som virkelig forstår folket.

2. **Forenkling:** Komplekse problemer presenteres som enkle — med enkle løsninger. «Hvis vi bare gjør X, løser vi problemet.»

3. **Skepsis til institusjoner:** Populister er ofte kritiske til etablerte institusjoner som domstoler, medier, universiteter og internasjonale organisasjoner.

**Populisme finnes på hele den politiske skalaen:**
- *Høyrepopulisme:* Fokuserer ofte på innvandring, nasjonal identitet og motstand mot overnasjonale organisasjoner
- *Venstrepopulisme:* Fokuserer ofte på økonomisk ulikhet, store selskapers makt og sosial rettferdighet

**Hvorfor vokser populismen?**
- Økt ulikhet gjør at mange føler seg «glemt»
- Globalisering skaper usikkerhet for noen grupper
- Sosiale medier gjør det lettere å spre forenklede budskap
- Mistillit til politikere og «eksperter»

**Populisme og demokrati:**
Populisme er ikke nødvendigvis udemokratisk — populistiske partier deltar i demokratiske valg og kan representere reelle frustrasjoner. Men populisme kan true demokratiet hvis den undergraver uavhengige institusjoner, angriper mediefriheten eller reduserer komplekse debatter til «oss mot dem».`,
    },
    {
      id: 'samfunnsfag-10-37-example-1',
      type: 'example',
      title: 'Eksempel: Populistisk retorikk vs. nyansert argumentasjon',
      problem: 'Hvordan skiller populistisk retorikk seg fra nyansert, faglig argumentasjon?',
      solution: `**Tema: Innvandringspolitikk**

**Populistisk retorikk:**
«Politikerne lar det strømme inn folk som tar jobbene våre og truer kulturen vår. De bryr seg ikke om vanlige nordmenn. Vi må stenge grensene NÅ!»
- *Kjennetegn:* Folk mot elite, forenkling, følelsesladet språk, enkel løsning, svart-hvitt-tenkning.

**Nyansert argumentasjon:**
«Innvandring til Norge er et sammensatt tema. På den ene siden bidrar innvandrere til økonomien, fyller viktige roller i arbeidslivet, og beriker kulturen. På den andre siden kan rask innvandring skape integreringsutfordringer og press på offentlige tjenester. Forskning fra SSB viser at innvandrere som gruppe bidrar mer i skatteinntekter enn de mottar i offentlige ytelser, men det varierer etter landbakgrunn og botid. En god innvandringspolitikk bør balansere humanitære hensyn med realistisk integreringspolitikk.»
- *Kjennetegn:* Flere sider, fagbegreper, kildebruk, nyansering, balansert konklusjon.

**Poenget:** Populistisk retorikk er ikke nødvendigvis «feil» — den kan peke på reelle problemer. Men den forenkler og skaper «oss mot dem»-tenkning i stedet for å invitere til nyansert drøfting.`,
    },
    {
      id: 'samfunnsfag-10-37-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-37-ex-1',
        number: '37.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det viktigste kjennetegnet ved populistisk retorikk?',
        options: [
          { id: 'a', text: 'At den bruker kompliserte fagbegreper for å virke troverdig', isCorrect: false, feedback: 'Tvert imot — populistisk retorikk kjennetegnes ofte av forenkling, ikke komplisering.' },
          { id: 'b', text: 'At den setter «vanlige folk» opp mot en «elite» og forenkler komplekse saker', isCorrect: true, feedback: 'Riktig! Populisme bygger på motsetningen mellom folket og en elite, og presenterer ofte komplekse problemer med enkle løsninger.' },
          { id: 'c', text: 'At den alltid er usaklig og løgnaktig', isCorrect: false, feedback: 'Populistisk retorikk peker ofte på reelle problemer, men løsningene presenteres forenklet. Det er ikke alltid usaklig eller løgnaktig.' },
          { id: 'd', text: 'At den kun finnes på høyresiden i politikken', isCorrect: false, feedback: 'Feil. Populisme finnes på hele den politiske skalaen — både høyre- og venstresiden kan bruke populistisk retorikk.' },
        ],
        solution: 'Populisme kjennetegnes av folk-mot-elite-motsetningen og forenkling av komplekse saker. Den finnes på hele den politiske skalaen.',
      },
    },
    {
      id: 'samfunnsfag-10-37-def-2',
      type: 'definition',
      title: 'Desinformasjon og demokrati',
      content: `**Desinformasjon** er falsk eller villedende informasjon som spres **bevisst** for å påvirke folks meninger eller handlinger. Det skiller seg fra **feilinformasjon**, som er feil informasjon som spres uten ond hensikt.

**Hvordan truer desinformasjon demokratiet?**

1. **Undergraver tillit:** Når folk ikke vet hva som er sant, mister de tillit til medier, politikere og institusjoner. Uten tillit fungerer ikke demokratiet.

2. **Polariserer samfunnet:** Desinformasjon er ofte designet for å vekke sterke følelser — sinne, frykt, hat. Dette kan forsterke motsetninger i samfunnet.

3. **Påvirker valgresultater:** Falske nyheter, manipulerte bilder og koordinerte kampanjer kan påvirke hva folk stemmer — uten at de vet at de er blitt manipulert.

4. **Svekker den offentlige debatten:** Når folk ikke kan enes om hva som er fakta, blir meningsfull debatt umulig.

**Typer desinformasjon:**
- **Falske nyheter:** Oppdiktede nyhetshistorier som ser ekte ut
- **Manipulerte bilder og videoer:** Deepfakes og redigerte bilder
- **Koordinerte kampanjer:** Nettverk av falske kontoer som sprer budskap
- **Dekontekstualisering:** Ekte informasjon tatt ut av sammenheng

**Hva kan gjøres?**
- Styrke kildekritisk kompetanse i skolen
- Ansvarliggjøre teknologiselskapene
- Støtte uavhengig journalistikk
- Hver enkelt av oss kan sjekke før vi deler`,
    },
    {
      id: 'samfunnsfag-10-37-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-37-ex-2',
        number: '37.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Desinformasjon i praksis.',
        subTasks: [
          { label: 'a', task: 'Forklar forskjellen mellom desinformasjon og feilinformasjon. Gi et eksempel på hver.', solution: 'Desinformasjon er falsk informasjon som spres MED VILJE for å villede (f.eks. en fabrikkert nyhetsartikkel om en politiker). Feilinformasjon er feil informasjon som spres UTEN ond hensikt (f.eks. en person som deler en gammel nyhet i god tro, uten å vite at den er utdatert).' },
          { label: 'b', task: 'Drøft: «Bør teknologiselskaper som Meta og Google ha plikt til å fjerne desinformasjon fra sine plattformer?» Presenter argumenter for og mot, og gi din egen vurdering.', solution: 'For: Desinformasjon truer demokratiet, selskapene tjener penger på engasjement (også på falskt innhold), de har ressurser til å gjøre noe. Mot: Vanskelig å definere hva som er «desinformasjon», risiko for sensur, ytringsfrihet-hensyn, hvem avgjør hva som er sant? Vurdering: Bør være balansert og begrunnet.' },
        ],
        hints: ['Tenk på spenningen mellom ytringsfrihet og behovet for pålitelig informasjon.'],
        solution: 'Debatten om desinformasjon handler om balansen mellom ytringsfrihet og beskyttelse av demokratiet mot manipulasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-37-def-3',
      type: 'definition',
      title: 'Valgdeltakelse og medborgerskap',
      content: `**Valgdeltakelse** er kanskje det tydeligste målet på demokratisk engasjement. I Norge har valgdeltakelsen vært relativt stabil, men det er betydelige forskjeller:

**Valgdeltakelse i Norge (stortingsvalg):**
- 1965: 85,4 %
- 1993: 75,8 %
- 2009: 76,4 %
- 2021: 77,2 %

**Hvem stemmer minst?**
Forskning viser at valgdeltakelsen er lavest blant:
- Unge (18-25 år)
- Mennesker med lav inntekt
- Innvandrere (spesielt ved første valg)

**Medborgerskap er mer enn å stemme:**
Du kan delta i demokratiet på mange måter:
- **Formell deltakelse:** Stemme, melde deg inn i et parti, stille til valg
- **Uformell deltakelse:** Underskriftskampanjer, demonstrasjoner, debattinnlegg, kontakte politikere
- **Hverdagsdeltakelse:** Engasjere deg i nærmiljøet, delta i elevråd, diskutere aktuelle saker, dele kunnskap
- **Digital deltakelse:** Engasjere deg i nettdebatter, dele informasjon, starte kampanjer

**Aktivt medborgerskap** betyr at du tar ansvar for samfunnet du lever i — ikke bare ved å bruke rettighetene dine, men også ved å bidra konstruktivt.`,
    },
    {
      id: 'samfunnsfag-10-37-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-37-ex-3',
        number: '37.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Valgdeltakelsen blant unge (18-25 år) er lavere enn blant eldre aldersgrupper. Hvilken forklaring er mest sannsynlig ifølge forskning?',
        options: [
          { id: 'a', text: 'Unge bryr seg ikke om politikk og samfunn i det hele tatt', isCorrect: false, feedback: 'Forskning viser at unge ofte er engasjerte, men på andre måter enn gjennom tradisjonelle kanaler som å stemme.' },
          { id: 'b', text: 'Unge føler ofte at partiene ikke representerer dem, og at de mangler kunnskap om valgprosessen', isCorrect: true, feedback: 'Riktig! Forskning peker på en kombinasjon av avstand til partiene, manglende valgkunnskap og ustabil livssituasjon.' },
          { id: 'c', text: 'Unge har ikke lov til å stemme før de er 25 år', isCorrect: false, feedback: 'Feil. I Norge er stemmerettsalderen 18 år.' },
          { id: 'd', text: 'Unge stemmer like mye som eldre, men statistikken er feil', isCorrect: false, feedback: 'Statistikken fra SSB er pålitelig. Valgdeltakelsen blant 18-25-åringer er dokumentert lavere.' },
        ],
        solution: 'Lav valgdeltakelse blant unge skyldes ikke manglende engasjement, men ofte avstand til partiene, manglende valgkunnskap og en ustabil livssituasjon.',
      },
    },
    {
      id: 'samfunnsfag-10-37-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-37-ex-4',
        number: '37.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Demokratisk deltakelse i din hverdag.',
        subTasks: [
          { label: 'a', task: 'Gi tre eksempler på hvordan du som 15-16-åring kan delta i demokratiet — selv om du ikke har stemmerett ennå.', solution: 'Eksempler: 1) Delta i elevrådet på skolen. 2) Skrive debattinnlegg i lokalavis eller skoleavis. 3) Delta i eller organisere en demonstrasjon. Andre: Melde seg inn i et politisk ungdomsparti, starte underskriftskampanje, kontakte kommunepolitikere.' },
          { label: 'b', task: 'Drøft: Noen hevder at det burde være stemmeplikt i Norge. Hva er argumentene for og mot?', solution: 'For: Øker valgdeltakelsen, sikrer bredere representasjon. Mot: Bryter med individets frihet, kan gi proteststemmer, kvalitet over kvantitet. Eleven gir en begrunnet vurdering.' },
        ],
        hints: ['Medborgerskap handler om mer enn å stemme — tenk bredt!'],
        solution: 'Du kan delta i demokratiet på mange måter lenge før du får stemmerett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-37-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-37-ex-5',
        number: '37.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Demokratisk tilbakegang.',
        subTasks: [
          { label: 'a', task: 'Hva er «demokratisk tilbakegang»? Beskriv minst tre tegn på at et demokrati er i ferd med å svekkes.', solution: 'Tegn: 1) Angrep på mediefrihet. 2) Svekkelse av rettsvesenet. 3) Begrensning av sivile rettigheter. Andre: Valgmanipulasjon, svekkelse av opposisjon, angrep på akademisk frihet.' },
          { label: 'b', task: 'Drøft: «Kan det norske demokratiet rammes av demokratisk tilbakegang?» Trekk inn faktorer som beskytter og faktorer som potensielt kan true det.', solution: 'Beskyttende: Sterk rettsstat, frie medier, høy tillit, sterkt sivilsamfunn. Truende: Polarisering, desinformasjon, synkende tillit til politikere. Eleven drøfter balansert.' },
        ],
        hints: ['Bruk fagbegreper som maktfordeling, pressefrihet, rettssikkerhet og legitimitet.'],
        solution: 'Demokrati krever aktiv vedlikehold. Å forstå truslene er første steg mot å beskytte seg mot dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-37-oppsummering',
      type: 'text',
      content: `## Oppsummering: Demokrati og medborgerskap — Fordypning

Demokratiet er den styreformen som best beskytter menneskerettighetene — men det er ikke immunt mot trusler.

**De viktigste poengene:**
- **Populisme** setter folket opp mot en elite og forenkler komplekse saker
- **Desinformasjon** truer demokratiet ved å undergrave tillit og polarisere samfunnet
- **Valgdeltakelse** varierer mellom grupper — unge stemmer mindre, men engasjerer seg på andre måter
- **Medborgerskap** handler om å bidra aktivt til samfunnet
- **Demokratisk tilbakegang** er en reell trussel, men sterke institusjoner kan beskytte mot det

Demokratiet er ikke noe som bare «er der» — det må forsvares og vedlikeholdes av aktive medborgere.`,
    },
    {
      id: 'samfunnsfag-10-37-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-37-ex-6',
        number: '37.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tverrfaglig drøftingsoppgave: «Sosiale medier styrker demokratiet — eller truer det?» Skriv en drøfting (200-300 ord) der du bruker kunnskap fra flere kapitler.',
        hints: [
          'Presenter tydelige argumenter for begge sider.',
          'Bruk konkrete eksempler — gjerne fra norsk kontekst.',
          'Avslutt med en nyansert, begrunnet vurdering.',
        ],
        solution: 'Styrker: flere stemmer slipper til, mobilisering. Truer: filterbobler, desinformasjon, polarisering. Nyansering: Virkningen avhenger av bruk og regulering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 38: Bærekraftig utvikling — Fordypning
// LK20: Drøfte korleis personleg økonomi, kommersiell påverknad og forbruk
//        heng saman med bærekraftig utvikling
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_38: TextbookChapter = {
  id: 'samfunnsfag-10-38',
  courseId: 'samfunnsfag-10',
  chapterNumber: '38',
  title: 'Bærekraftig utvikling — Fordypning',
  description: 'Fordyp deg i bærekraftig utvikling: klimarettferdighet, FNs bærekraftsmål i praksis, sirkulær økonomi og Norges dobbeltrolle som oljenasjon og klimaforkjemper.',
  estimatedMinutes: 85,
  prevChapter: 'samfunnsfag-10-37',
  nextChapter: 'samfunnsfag-10-39',
  competenceGoals: [
    'utforske og presentere dagsaktuelle tema eller historiske hendingar med utgangspunkt i ulike kjelder',
    'drøfte korleis personleg økonomi, kommersiell påverknad og forbruk heng saman med bærekraftig utvikling',
    'reflektere over korleis ein sjølv og andre deltek i å utvide, endre og skape samfunnet',
  ],
  keyTerms: [
    { term: 'Bærekraftig utvikling', definition: 'Utvikling som dekker dagens behov uten å ødelegge mulighetene for fremtidige generasjoner' },
    { term: 'Klimarettferdighet', definition: 'Klimarettferdighet er et prinsipp som handler om at ansvar for klimatiltak bør fordeles rettferdig. Mange mener at land som historisk har sluppet ut mest, bør ta størst ansvar, mens andre vektlegger dagens utslipp per innbygger eller landenes økonomiske evne.' },
    { term: 'FNs bærekraftsmål', definition: '17 globale mål vedtatt i 2015 som skal nås innen 2030' },
    { term: 'Parisavtalen', definition: 'Internasjonal klimaavtale fra 2015 der land forplikter seg til å begrense global oppvarming til godt under 2 grader' },
    { term: 'Sirkulær økonomi', definition: 'Økonomisk modell der ressurser gjenbrukes, repareres og resirkuleres i stedet for å kastes' },
    { term: 'Karbonavtrykk', definition: 'Den totale mengden klimagasser som slippes ut som følge av en persons, virksomhets eller lands aktiviteter' },
    { term: 'Grønnvasking', definition: 'Når bedrifter eller land fremstår som mer miljøvennlige enn de faktisk er, gjennom villedende markedsføring' },
    { term: 'Klimaflyktning', definition: 'Person som tvinges til å flytte på grunn av klimaendringer, som havnivåstigning, tørke eller ekstremvær' },
    { term: 'Fornybar energi', definition: 'Energikilder som fornyes naturlig, som sol, vind, vann og jordvarme' },
  ],
  content: [
    {
      id: 'samfunnsfag-10-38-intro',
      type: 'text',
      content: `## Kan vi redde planeten og samtidig leve godt?

Norge er et av verdens rikeste land. Vi har ren elektrisitet fra vannkraft, vi spiser godt, reiser mye og lever i velstand. Samtidig er vi en av verdens største eksportører av olje og gass — fossile brensler som er en hovedårsak til klimaendringene.

Denne dobbeltrollen er et av de mest interessante — og vanskeligste — temaene i norsk politikk. Hvordan kan Norge være klimaforkjemper internasjonalt og samtidig tjene milliarder på å selge olje? Og hva betyr bærekraftig utvikling egentlig i praksis — for Norge, for verden, og for deg?

Bærekraftig utvikling handler ikke bare om klima. Det handler om å skape et samfunn der alle mennesker kan leve gode liv, uten at vi ødelegger naturen eller skaper urettferdige forskjeller. FNs 17 bærekraftsmål viser at dette er en helhetlig utfordring: fattigdom, ulikhet, helse, utdanning, klima, natur og rettferdighet henger sammen.

I dette kapittelet skal du lære om:
- Klimarettferdighet — hvem har ansvaret?
- FNs bærekraftsmål i praksis
- Norges rolle som oljenasjon og klimaforkjemper
- Sirkulær økonomi og bærekraftig forbruk
- Hva du selv kan gjøre`,
    },
    {
      id: 'samfunnsfag-10-38-def-1',
      type: 'definition',
      title: 'Klimarettferdighet — hvem skal betale?',
      content: `**Klimarettferdighet** handler om at konsekvensene av klimaendringer og ansvaret for å løse dem er urettferdig fordelt.

**Tre sentrale dimensjoner:**

**1. Mellom land:** De rike industrilandene har stått for mesteparten av de historiske utslippene, men klimaendringene rammer fattige land hardest. Bangladesh risikerer å miste store landområder til havnivåstigning.

**2. Mellom generasjoner:** Dagens voksne har nytt godt av fossile brensler i tiår. Konsekvensene vil ramme unge og fremtidige generasjoner hardest.

**3. Mellom grupper i samfunnet:** Også innenfor land rammer klimaendringene ujevnt. Fattige mennesker har færre ressurser til å beskytte seg.

**Prinsippet om «felles, men differensiert ansvar»:** FNs klimakonvensjon slår fast at alle land har ansvar, men at rike land som har sluppet ut mest historisk, har et *særlig* ansvar.

**Parisavtalen (2015):** 196 land ble enige om å begrense global oppvarming til godt under 2 grader, helst 1,5 grader. Men forskere advarer om at landenes nåværende løfter ikke er nok.`,
    },
    {
      id: 'samfunnsfag-10-38-example-1',
      type: 'example',
      title: 'Eksempel: Norges dobbeltrolle — oljenasjon og klimaforkjemper',
      problem: 'Norge er ofte omtalt som en «grønn» nasjon, men er samtidig en stor olje- og gasseksportør. Hvordan kan dette drøftes?',
      solution: `**Norges «grønne» side:**
- 98 % av strømproduksjonen er fornybar (vannkraft)
- Verdens høyeste andel elbiler
- Bidrar til bevaring av regnskog gjennom klimafinansering
- Ambisiøse klimamål og aktiv deltakelse i klimaforhandlinger

**Norges «brune» side:**
- Europas nest største gasseksportør
- Olje og gass finansierer Oljefondet
- Totalt karbonavtrykk inkludert eksport er svært høyt
- Nye felt åpnes for leting

**Drøfting:** Tilhengere argumenterer med at norsk gass er «renere» enn kull og at inntektene finansierer det grønne skiftet. Kritikere mener Norge er hyklerisk — man kan ikke kalle seg klimaforkjemper mens man tjener penger på å forverre klimakrisen.`,
    },
    {
      id: 'samfunnsfag-10-38-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-38-ex-1',
        number: '38.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «klimarettferdighet»?',
        options: [
          { id: 'a', text: 'At alle land slipper ut like mye CO2', isCorrect: false, feedback: 'Klimarettferdighet handler ikke om like utslipp, men om rettferdig fordeling av ansvar og byrder.' },
          { id: 'b', text: 'At klimabyrdene bør fordeles rettferdig — de som har forårsaket mest bør ta størst ansvar', isCorrect: true, feedback: 'Riktig! Rike land med store historiske utslipp bør ta et særlig ansvar.' },
          { id: 'c', text: 'At klimaet vil ordne seg av seg selv hvis vi venter lenge nok', isCorrect: false, feedback: 'Feil. Klimaforskning viser at uten aktive tiltak vil problemene forverres.' },
          { id: 'd', text: 'At bare rike land trenger å gjøre noe med klimaet', isCorrect: false, feedback: 'Alle land har ansvar, men rike land har et særlig ansvar.' },
        ],
        solution: 'Klimarettferdighet handler om at de som har bidratt mest til problemet og har mest ressurser, bør ta størst ansvar.',
      },
    },
    {
      id: 'samfunnsfag-10-38-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-38-ex-2',
        number: '38.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norges dobbeltrolle.',
        subTasks: [
          { label: 'a', task: 'Forklar hva som menes med at Norge har en «dobbeltrolle» i klimaspørsmålet.', solution: 'Norge presenterer seg som klimaforkjemper med fornybar energi, men er samtidig stor produsent og eksportør av fossile brensler.' },
          { label: 'b', task: 'Drøft: «Bør Norge slutte å lete etter ny olje og gass?» Presenter argumenter for og mot.', solution: 'For: Eksisterende reserver sprenger Parisavtalen, Norge bør gå foran, omstilling skaper nye jobber. Mot: Gradvis omstilling er realistisk, gass erstatter kull, inntektene finansierer velferd. Eleven gir begrunnet konklusjon.' },
        ],
        hints: ['Bruk fagbegreper som karbonavtrykk, Parisavtalen og klimarettferdighet.'],
        solution: 'Norges dobbeltrolle reiser grunnleggende spørsmål om ansvar, økonomi og moral.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-38-def-2',
      type: 'definition',
      title: 'Sirkulær økonomi og bærekraftig forbruk',
      content: `**Sirkulær økonomi** er et alternativ til «bruk-og-kast»-modellen.

**Lineær økonomi:** Ta ut råvarer -> Lag produkt -> Bruk -> Kast
**Sirkulær økonomi:** Ta ut råvarer -> Lag produkt -> Bruk -> Reparer/Gjenbruk/Resirkuler -> Nytt produkt

**Prinsipper:**
1. **Design for holdbarhet** — produkter som varer
2. **Reparasjon fremfor kasting** — billig å reparere
3. **Deling og gjenbruk** — bildelingsordninger, utlånssentraler
4. **Resirkulering** — materialer brukes om igjen
5. **Avfall som ressurs** — det som kastes blir råvare

**Grønnvasking** er når bedrifter gir inntrykk av å være mer miljøvennlige enn de er. Et oljeselskap kan reklamere med små miljøprosjekter mens hovedvirksomheten er fossil energi.

**Ditt forbruk betyr noe:** En gjennomsnittlig nordmann har et karbonavtrykk på rundt 8 tonn CO2 per år. For å nå klimamålene bør dette ned mot 2-3 tonn.`,
    },
    {
      id: 'samfunnsfag-10-38-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-38-ex-3',
        number: '38.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «grønnvasking»?',
        options: [
          { id: 'a', text: 'Å vaske klær på en miljøvennlig måte', isCorrect: false, feedback: 'Grønnvasking handler om villedende markedsføring, ikke klesvask.' },
          { id: 'b', text: 'Når bedrifter eller land fremstår som mer miljøvennlige enn de faktisk er', isCorrect: true, feedback: 'Riktig! Grønnvasking er villedende kommunikasjon der miljøimage ikke stemmer med faktisk praksis.' },
          { id: 'c', text: 'En metode for å rense forurenset vann', isCorrect: false, feedback: 'Nei, det er et begrep for villedende miljømarkedsføring.' },
          { id: 'd', text: 'Et annet ord for resirkulering', isCorrect: false, feedback: 'Resirkulering er positivt. Grønnvasking er negativt — det handler om å gi falskt inntrykk av miljøvennlighet.' },
        ],
        solution: 'Grønnvasking er når bedrifter eller land bruker villedende markedsføring for å fremstå som mer miljøvennlige enn de faktisk er.',
      },
    },
    {
      id: 'samfunnsfag-10-38-def-3',
      type: 'definition',
      title: 'FNs bærekraftsmål — verdens felles plan',
      content: `I 2015 vedtok FNs medlemsland **17 bærekraftsmål** som skal nås innen 2030.

**De 17 målene spenner bredt:**
- Mål 1-6: Grunnleggende behov (fattigdom, sult, helse, utdanning, likestilling, vann)
- Mål 7-12: Økonomi og infrastruktur (energi, arbeid, innovasjon, ulikhet, byer, forbruk)
- Mål 13-15: Klima og natur (klimaendringer, hav, natur)
- Mål 16-17: Fred og samarbeid (rettferdige institusjoner, partnerskap)

**Viktige prinsipper:**
- **Universelle:** Gjelder alle land
- **Integrerte:** Målene henger sammen
- **«Leave no one behind»:** Ingen skal utelates

**Hvordan ligger verden an?** Halvveis til 2030 viser rapporter at verden er langt unna å nå de fleste målene.

**Norge:** Ligger godt an på helse, utdanning og likestilling, men har utfordringer på ansvarlig forbruk og klimaendringer.`,
    },
    {
      id: 'samfunnsfag-10-38-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-38-ex-4',
        number: '38.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bærekraftsmålene i praksis.',
        subTasks: [
          { label: 'a', task: 'Velg to av FNs bærekraftsmål og forklar hvordan de henger sammen. Gi et konkret eksempel.', solution: 'Eksempel: Mål 4 (utdanning) og mål 1 (fattigdom) henger sammen fordi utdanning gir mulighet til jobb og løfter folk ut av fattigdom.' },
          { label: 'b', task: 'Drøft: «Er det realistisk at verden når bærekraftsmålene innen 2030?»', solution: 'Optimisme: Global oppmerksomhet, teknologi, fremgang. Pessimisme: Langt bak plan, pandemi, akselererende klimaendringer. Eleven gir nyansert vurdering.' },
        ],
        hints: ['Husk at bærekraftsmålene henger sammen — det er et poeng i seg selv.'],
        solution: 'Bærekraftsmålene viser at verdens utfordringer henger sammen og krever helhetlige løsninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-38-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-38-ex-5',
        number: '38.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ditt eget karbonavtrykk og handlingsrom.',
        subTasks: [
          { label: 'a', task: 'Hvilke tre aktiviteter tror du bidrar mest til ditt karbonavtrykk? Begrunn svarene.', solution: 'Typiske svar: Transport, mat (kjøtt), forbruk av klær/elektronikk. Eleven begrunner med fagkunnskap.' },
          { label: 'b', task: 'Drøft: «Er det individets eller politikernes ansvar å løse klimakrisen?»', solution: 'Individ: Forbruksmønster, moralsk ansvar. Politikere: Systemendringer, regulering. Nyansering: Begge nivåer er nødvendige og forsterker hverandre.' },
        ],
        hints: ['Tenk på samspillet mellom individuelle valg og strukturelle endringer.'],
        solution: 'Klimakrisen krever handling på alle nivåer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-38-oppsummering',
      type: 'text',
      content: `## Oppsummering: Bærekraftig utvikling — Fordypning

**De viktigste poengene:**
- **Klimarettferdighet** betyr at de som har forårsaket mest utslipp bør ta størst ansvar
- **FNs bærekraftsmål** er verdens felles plan — 17 mål som henger sammen
- **Norges dobbeltrolle** som klimaforkjemper og oljenasjon er et sentralt drøftingstema
- **Sirkulær økonomi** er et alternativ til bruk-og-kast
- **Grønnvasking** er når noen fremstår som mer miljøvennlige enn de er
- **Parisavtalen** forplikter land til å begrense oppvarmingen til godt under 2 grader

Bærekraftig utvikling handler om å skape et samfunn der mennesker kan leve gode liv uten å ødelegge for fremtidige generasjoner.`,
    },
    {
      id: 'samfunnsfag-10-38-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-38-ex-6',
        number: '38.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tverrfaglig eksamensoppgave: «Bærekraftig utvikling handler ikke bare om miljø — det handler også om rettferdighet.» Drøft denne påstanden (200-300 ord).',
        hints: [
          'Vis at bærekraft har tre dimensjoner: miljø, sosial og økonomisk.',
          'Bruk konkrete eksempler.',
          'Knytt sammen kunnskap fra flere kapitler.',
        ],
        solution: 'En sterk drøfting viser forståelse for bærekraftens tre dimensjoner, klimarettferdighet, sammenhengen mellom fattigdom og miljø, og at global rettferdighet er en forutsetning for bærekraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 39: Muntlig eksamen i samfunnsfag
// LK20: Presentere samfunnsfaglege tema og problemstillingar ved å bruke
//        ulike kjelder og vise kjeldemedvit
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_39: TextbookChapter = {
  id: 'samfunnsfag-10-39',
  courseId: 'samfunnsfag-10',
  chapterNumber: '39',
  title: 'Muntlig eksamen i samfunnsfag',
  description: 'Alt du trenger å vite om muntlig eksamen: forberedelsestid, presentasjon, fagsamtale, vurderingskriterier og praktiske tips for eksamensdagen.',
  estimatedMinutes: 70,
  prevChapter: 'samfunnsfag-10-38',
  nextChapter: 'samfunnsfag-10-40',
  competenceGoals: [
    'presentere samfunnsfaglege tema og problemstillingar ved å bruke ulike kjelder og vise kjeldemedvit',
    'drøfte og argumentere med utgangspunkt i fagstoff og aktuelle hendingar',
    'vise samanheng mellom ulike tema og kompetansemål i faget',
  ],
  keyTerms: [
    { term: 'Muntlig eksamen', definition: 'Eksamensform der eleven presenterer et tema og deretter deltar i en fagsamtale med sensor og faglærer' },
    { term: 'Forberedelsestid', definition: 'Tiden (vanligvis 48 timer) eleven har til å forberede presentasjonen etter å ha trukket tema' },
    { term: 'Fagsamtale', definition: 'Den delen av muntlig eksamen der sensor stiller spørsmål for å teste elevens forståelse og evne til å tenke selvstendig' },
    { term: 'Problemstilling', definition: 'Et presist spørsmål som gir presentasjonen retning og inviterer til drøfting' },
    { term: 'Disposisjon', definition: 'En stikkordmessig plan for innholdet og rekkefølgen i en presentasjon' },
    { term: 'Vurderingskriterier', definition: 'Kravene som legges til grunn for å sette karakter — hva sensor ser etter' },
    { term: 'Kompetansemål', definition: 'Læringsmålene i læreplanen LK20 som definerer hva elevene skal kunne' },
    { term: 'Tverrfaglig', definition: 'Å koble kunnskap og perspektiver fra ulike fag eller temaer i en helhetlig analyse' },
  ],
  content: [
    {
      id: 'samfunnsfag-10-39-intro',
      type: 'text',
      content: `## Din guide til muntlig eksamen

Muntlig eksamen i samfunnsfag kan virke skummelt, men det er faktisk en eksamen du kan forberede deg svært godt til. I motsetning til en skriftlig prøve der du må svare innenfor stramme rammer, gir muntlig eksamen deg muligheten til å **vise hva du kan** på dine egne premisser.

**Slik fungerer muntlig eksamen:**
1. Du trekker et tema **48 timer** (to arbeidsdager) før eksamen
2. I forberedelsestiden lager du en presentasjon (vanligvis 10-15 minutter)
3. På eksamensdagen holder du presentasjonen for sensor og faglærer
4. Etter presentasjonen er det en **fagsamtale** (ca. 15-20 minutter)
5. Sensor setter karakter basert på helheten — både presentasjon og fagsamtale

**Det viktigste å forstå:** Eksamen tester ikke bare hva du husker, men **hvordan du tenker**. Sensor ser etter evnen til å drøfte, se sammenhenger, bruke fagbegreper og reflektere selvstendig.

I dette kapittelet skal du lære om:
- Hvordan forberedelsestiden brukes best
- Hvordan du bygger en god presentasjon
- Hva sensor ser etter i fagsamtalen
- Konkrete vurderingskriterier
- Typiske eksamenstemaer og spørsmål`,
    },
    {
      id: 'samfunnsfag-10-39-def-1',
      type: 'definition',
      title: 'Forberedelsestiden — 48 timer som teller',
      content: `**Forberedelsestiden** er de 48 timene mellom trekning av tema og eksamensdagen. Slik bruker du dem effektivt:

**Dag 1 (første dag):**
1. **Les oppgaven nøye** (15 min): Hva er temaet? Hva blir du bedt om? Merk nøkkelord som «drøft», «forklar», «vurder».
2. **Formuler problemstilling** (30 min): Lag et spørsmål som gir presentasjonen retning.
3. **Samle stoff** (2-3 timer): Gå gjennom lærebok, notater, nettkilder. Bruk minst 3-4 ulike kilder.
4. **Lag disposisjon** (1 time): Strukturer innholdet i innledning, hoveddel (2-3 delemner) og avslutning.
5. **Velg eksempler** (30 min): Finn 2-3 gode, aktuelle eksempler som illustrerer poengene dine.

**Dag 2 (andre dag):**
1. **Lag slides** (1-2 timer): Enkle slides med nøkkelord, bilder og statistikk. IKKE mye tekst.
2. **Øv presentasjonen** (minst 2-3 ganger): Ta tid! Juster lengden. Øv på å snakke fritt fra stikkord.
3. **Forbered mulige spørsmål** (1 time): Hva kan sensor spørre om? Lag en liste og øv på svar.
4. **Hvil deg** (kvelden): Sov godt. En uthvilt hjerne tenker bedre enn en som har pugget hele natten.

**Vanlige feil i forberedelsestiden:**
- Bruke all tid på slides og for lite på innholdet
- Skrive ut et fullt manus i stedet for stikkord
- Glemme å øve muntlig
- Ikke forberede seg på fagsamtalen`,
    },
    {
      id: 'samfunnsfag-10-39-example-1',
      type: 'example',
      title: 'Eksempel: Fra tema til presentasjon',
      problem: 'Du trekker temaet: «Menneskerettigheter og medborgerskap». Hvordan kan du bygge opp en god presentasjon?',
      solution: `**Steg 1: Formuler problemstilling**
«Kan menneskerettighetene sikres uten aktive medborgere?»

**Steg 2: Disposisjon**
*Innledning (2 min):*
- Start med et eksempel: Klimastreikene viste at ungdom kan påvirke
- Presenter problemstillingen

*Hoveddel (8-10 min):*
- Delemne 1: Hva er menneskerettigheter? (kort, definisjoner)
- Delemne 2: Hva betyr medborgerskap? (formell og uformell deltakelse)
- Delemne 3: Drøfting — hvordan henger de sammen? (aktivt medborgerskap beskytter rettighetene, passivitet kan true dem)

*Avslutning (2 min):*
- Svar på problemstillingen
- Egen refleksjon: Hva er din rolle?

**Steg 3: Fagbegreper å inkludere**
Menneskerettigheter, FNs menneskerettighetserklæring, medborgerskap, demokratisk deltakelse, ytringsfrihet, sivilsamfunn

**Steg 4: Eksempler**
- Klimastreikene som eksempel på aktivt medborgerskap
- Autoritære regimer der manglende medborgerskap truer rettigheter
- Norges grunnlov § 100 om ytringsfrihet`,
    },
    {
      id: 'samfunnsfag-10-39-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-39-ex-1',
        number: '39.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det viktigste sensor ser etter på muntlig eksamen i samfunnsfag?',
        options: [
          { id: 'a', text: 'At du har lært alle årstall og fakta utenat', isCorrect: false, feedback: 'Detaljert faktakunnskap er nyttig, men sensor vurderer først og fremst evnen til å bruke kunnskapen — drøfte, se sammenhenger og reflektere.' },
          { id: 'b', text: 'At du kan drøfte, bruke fagbegreper, se sammenhenger og reflektere selvstendig', isCorrect: true, feedback: 'Riktig! Eksamen tester hvordan du tenker og bruker kunnskapen, ikke bare hva du husker.' },
          { id: 'c', text: 'At du har de fineste PowerPoint-slidesene', isCorrect: false, feedback: 'Slides er et hjelpemiddel, ikke det viktigste. Sensor vurderer innholdet og din evne til å kommunisere det.' },
          { id: 'd', text: 'At du snakker i nøyaktig 15 minutter', isCorrect: false, feedback: 'Tidsstyring er viktig, men det viktigste er kvaliteten på innholdet og din evne til å drøfte.' },
        ],
        solution: 'Sensor ser etter evnen til å drøfte (se flere sider), bruke fagbegreper, se sammenhenger mellom temaer, og reflektere selvstendig.',
      },
    },
    {
      id: 'samfunnsfag-10-39-def-2',
      type: 'definition',
      title: 'Fagsamtalen — her skiller det seg',
      content: `**Fagsamtalen** er den delen av eksamen som mange frykter mest — men som også gir deg størst mulighet til å vise hva du kan.

**Slik fungerer fagsamtalen:**
- Sensor stiller spørsmål i 15-20 minutter etter presentasjonen
- Spørsmålene kan handle om temaet ditt, men også om andre deler av pensum
- Sensor tilpasser spørsmålene til ditt nivå — svarer du godt, kommer det vanskeligere spørsmål

**Typiske spørsmålstyper:**
1. **Utdypningsspørsmål:** «Kan du si mer om...?» — sensor vil høre mer om noe du nevnte
2. **Forståelsesspørsmål:** «Hva mener du med...?» — sensor sjekker at du forstår begrepene
3. **Sammenhengsspørsmål:** «Hvordan henger dette sammen med...?» — sensor tester tverrfaglig forståelse
4. **Kontrafaktiske spørsmål:** «Hva hadde skjedd hvis...?» — sensor tester evnen til å tenke selvstendig
5. **Motargumentspørsmål:** «Hvilke motargumenter finnes?» — sensor sjekker drøftingsevne
6. **Aktualitetsspørsmål:** «Kan du knytte dette til noe aktuelt?» — sensor tester evnen til å koble teori og virkelighet

**Gylne regler for fagsamtalen:**
- **Lytt ferdig** før du svarer
- **Tenk før du snakker** — det er lov å ta noen sekunder
- **Strukturer svaret:** Hovedpoeng først, deretter utdyping
- **Bruk fagbegreper** naturlig
- **Vær ærlig:** Vet du ikke svaret, si det — og prøv å resonnere
- **Vis sammenhenger** mellom ulike temaer i faget`,
    },
    {
      id: 'samfunnsfag-10-39-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-39-ex-2',
        number: '39.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på fagsamtale. Svar på hvert spørsmål som om du satt på eksamen (3-5 setninger per svar).',
        subTasks: [
          { label: 'a', task: 'Sensor spør: «Hva mener du er den viktigste forskjellen mellom et demokrati og et diktatur?»', solution: 'Et godt svar trekker frem maktfordelingen og folkets innflytelse som kjernepunkter, bruker fagbegreper som ytringsfrihet, rettssikkerhet og maktfordeling, og gir gjerne et konkret eksempel.' },
          { label: 'b', task: 'Sensor spør: «Hvordan henger klimarettferdighet sammen med menneskerettigheter?»', solution: 'Et godt svar kobler retten til rent miljø, mat og vann (menneskerettigheter) med at klimaendringene rammer fattige hardest (klimarettferdighet). Eleven bør vise evne til tverrfaglig tenkning.' },
          { label: 'c', task: 'Sensor spør: «Hva hadde skjedd med demokratiet i Norge hvis vi ikke hadde ytringsfrihet?»', solution: 'Et godt svar viser forståelse for ytringsfrihetens rolle: uten den kunne ikke mediene kontrollere makthaverne, folk kunne ikke kritisere politikere, den offentlige debatten ville forsvunnet, og valgene ville mistet sin mening fordi folk ikke kunne ta informerte valg.' },
        ],
        hints: ['Bruk fagbegreper, gi eksempler, og vis at du kan se sammenhenger.'],
        solution: 'Fagsamtalen handler om å vise at du forstår fagstoffet, kan anvende det og tenke selvstendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-39-def-3',
      type: 'definition',
      title: 'Vurderingskriterier — hva gir hvilken karakter?',
      content: `Sensor vurderer etter nasjonale vurderingskriterier. Her er en forenklet oversikt:

**Karakter 2 — lav kompetanse:**
- Gjengir noe fagstoff, men viser begrenset forståelse
- Få eller ingen fagbegreper
- Kan ikke drøfte — bare beskrive
- Svarer kort og upresist i fagsamtalen

**Karakter 3 — noe kompetanse:**
- Viser grunnleggende kunnskap
- Bruker noen fagbegreper
- Kan forklare, men drøfter lite
- Trenger hjelp til å se sammenhenger

**Karakter 4 — god kompetanse:**
- God kunnskap om temaet
- Bruker fagbegreper riktig
- Kan drøfte noe — ser to sider av en sak
- Gir relevante eksempler
- Ser noen sammenhenger

**Karakter 5 — svært god kompetanse:**
- Grundig kunnskap og god forståelse
- Fagbegreper brukes presist og naturlig
- Drøfter selvstendig med flere perspektiver
- Aktuelle, relevante eksempler
- Ser sammenhenger mellom ulike temaer
- Kommuniserer klart

**Karakter 6 — fremragende kompetanse:**
- Dyp, helhetlig forståelse av faget
- Selvstendig, kritisk tenkning
- Drøfter nyansert med flere perspektiver og motargumenter
- Kobler teori og virkelighet sømløst
- Ser komplekse sammenhenger på tvers av faget
- Engasjerende og overbevisende kommunikasjon`,
    },
    {
      id: 'samfunnsfag-10-39-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-39-ex-3',
        number: '39.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En elev sier på eksamen: «Norge er et demokrati. Vi har Stortinget, regjeringen og domstolene. Ytringsfrihet betyr at alle kan si sin mening.» Hvilket karakternivå passer dette best til?',
        options: [
          { id: 'a', text: 'Karakter 5-6 — eleven viser grundig forståelse', isCorrect: false, feedback: 'Nei, eleven beskriver bare fakta uten å drøfte, se sammenhenger eller vise selvstendig tenkning.' },
          { id: 'b', text: 'Karakter 2-3 — eleven gjengir fagstoff, men viser begrenset forståelse og kan ikke drøfte', isCorrect: true, feedback: 'Riktig! Eleven gjentar fakta, men viser ikke forståelse for hvorfor det er viktig, drøfter ikke eller ser sammenhenger.' },
          { id: 'c', text: 'Karakter 4 — eleven viser god kunnskap', isCorrect: false, feedback: 'For karakter 4 kreves mer enn ren faktabeskrivelse — eleven bør kunne drøfte og gi eksempler.' },
          { id: 'd', text: 'Det går ikke an å vurdere ut fra så lite', isCorrect: false, feedback: 'Vi kan vurdere nivået: ren beskrivelse uten drøfting, fagdybde eller sammenhenger tilsvarer lavt nivå.' },
        ],
        solution: 'Ren faktabeskrivelse uten drøfting, faglig dybde eller sammenhenger tilsvarer karakter 2-3. For å nå høyere må eleven vise at de forstår og kan anvende kunnskapen.',
      },
    },
    {
      id: 'samfunnsfag-10-39-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-39-ex-4',
        number: '39.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en disposisjon for en eksamenspresentasjon om ETT av disse temaene. Inkluder problemstilling, 3 delemner og forslag til fagbegreper.',
        subTasks: [
          { label: 'a', task: 'Tema: «Bærekraftig utvikling og Norges ansvar»', solution: 'Problemstilling: Gjør Norge nok for bærekraftig utvikling? Delemner: 1) Hva er bærekraftig utvikling (bærekraftsmål, tre dimensjoner), 2) Norges dobbeltrolle (klimaforkjemper vs. oljenasjon), 3) Drøfting — hva bør Norge gjøre? Fagbegreper: bærekraftig utvikling, klimarettferdighet, Parisavtalen, karbonavtrykk, sirkulær økonomi.' },
          { label: 'b', task: 'Tema: «Medier og demokrati i den digitale tidsalderen»', solution: 'Problemstilling: Styrker eller svekker digitale medier det norske demokratiet? Delemner: 1) Medienes funksjoner i demokratiet, 2) Algoritmenes makt og filterbobler, 3) Drøfting — muligheter vs. trusler. Fagbegreper: den fjerde statsmakt, algoritmer, filterbobler, ekkokammer, desinformasjon, ytringsfrihet.' },
        ],
        hints: ['En god disposisjon bruker stikkord — ikke fullstendige setninger.'],
        solution: 'En sterk disposisjon har en klar problemstilling, logisk struktur, relevante fagbegreper og rom for drøfting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-39-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-39-ex-5',
        number: '39.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prøveeksamen med medelev.',
        subTasks: [
          { label: 'a', task: 'Velg et tema, forbered en 10-minutters presentasjon, og hold den for en medelev som spiller sensor.', solution: 'Eleven velger tema, formulerer problemstilling, strukturerer presentasjonen og holder den fritt fra stikkord.' },
          { label: 'b', task: '«Sensor» stiller minst fem spørsmål i en fagsamtale etterpå. Bytt roller etterpå.', solution: 'Elevene øver på å svare på spørsmål, bruke fagbegreper og tenke selvstendig under press.' },
          { label: 'c', task: 'Gi hverandre tilbakemelding basert på vurderingskriteriene. Hva var bra? Hva kan forbedres?', solution: 'Tilbakemeldingen bør være konkret og konstruktiv, knyttet til vurderingskriteriene (drøfting, fagbegreper, sammenhenger, kommunikasjon).' },
        ],
        hints: ['Bruk vurderingskriteriene aktivt når du gir tilbakemelding.'],
        solution: 'Å øve med en medelev er den mest effektive eksamensforberedelsen. Du lærer av både å presentere og å gi tilbakemelding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-39-oppsummering',
      type: 'text',
      content: `## Oppsummering: Muntlig eksamen i samfunnsfag

**De viktigste poengene:**
- **Forberedelsestiden:** Bruk den strukturert — problemstilling, stoff, disposisjon, slides, øving
- **Presentasjonen:** Klar problemstilling, tydelig struktur, fagbegreper, eksempler, drøfting
- **Fagsamtalen:** Lytt, tenk, svar strukturert, bruk fagbegreper, vis sammenhenger
- **Vurderingskriteriene:** Fra beskrivelse (lavt) til drøfting og selvstendig tenkning (høyt)
- **Snakk fritt** fra stikkord — ikke les opp fra manus
- **Det er lov å tenke** — ta noen sekunder før du svarer i fagsamtalen

Muntlig eksamen er din sjanse til å vise hva du kan. Med god forberedelse kan det bli en positiv opplevelse.`,
    },
    {
      id: 'samfunnsfag-10-39-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-39-ex-6',
        number: '39.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Selvvurdering og plan: Vurder dine egne styrker og svakheter med tanke på muntlig eksamen, og lag en konkret forberedelsesplan.',
        subTasks: [
          { label: 'a', task: 'Hva er du god på (f.eks. muntlig fremføring, fagkunnskap, drøfting, ro under press)? Hva trenger du å øve mer på?', solution: 'Eleven reflekterer ærlig over egne styrker og svakheter knyttet til eksamensferdighetene.' },
          { label: 'b', task: 'Lag en plan med fem konkrete tiltak for de neste ukene. Hva skal du gjøre, og når?', solution: 'Gode tiltak: Øve presentasjon for familie/venner, lage fagbegrepsliste, skrive drøftingsøvelser, lese nyheter daglig, øve fagsamtale med medelev. Planen bør ha tidspunkter.' },
        ],
        hints: ['Vær ærlig med deg selv — det er slik du kan forbedre deg mest effektivt.'],
        solution: 'Bevisst selvvurdering og en konkret plan er den beste strategien for målrettet eksamensforberedelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 40: Eksamensstrategier og repetisjon
// LK20: Tverrfaglig kompetanse og helhetlig fagforståelse
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_40: TextbookChapter = {
  id: 'samfunnsfag-10-40',
  courseId: 'samfunnsfag-10',
  chapterNumber: '40',
  title: 'Eksamensstrategier og repetisjon',
  description: 'Repeter hele pensum systematisk: nøkkelbegreper, tverrfaglige koblinger, typiske eksamenstemaer og praktiske strategier for å prestere på eksamen.',
  estimatedMinutes: 90,
  prevChapter: 'samfunnsfag-10-39',
  competenceGoals: [
    'presentere samfunnsfaglege tema og problemstillingar ved å bruke ulike kjelder og vise kjeldemedvit',
    'drøfte og argumentere med utgangspunkt i fagstoff og aktuelle hendingar',
    'vise samanheng mellom ulike tema og kompetansemål i faget',
  ],
  keyTerms: [
    { term: 'Repetisjon', definition: 'Systematisk gjennomgang av fagstoff for å styrke forståelsen og huske bedre' },
    { term: 'Aktiv læring', definition: 'Å bearbeide fagstoffet aktivt (forklare, diskutere, skrive) i stedet for bare å lese passivt' },
    { term: 'Tankekart', definition: 'Visuelt verktøy for å organisere og koble begreper og ideer' },
    { term: 'Fagbegrepsoversikt', definition: 'Systematisk liste over sentrale begreper med definisjoner og eksempler' },
    { term: 'Tverrfaglig kobling', definition: 'Å se sammenhenger mellom ulike temaer og perspektiver i faget' },
    { term: 'Eksamensoppgave', definition: 'Oppgaven eller temaet du trekker og skal presentere på eksamen' },
    { term: 'Forberedelsesplan', definition: 'En systematisk plan for hva du skal gjøre i forberedelsestiden' },
  ],
  content: [
    {
      id: 'samfunnsfag-10-40-intro',
      type: 'text',
      content: `## Siste innspurt — slik forbereder du deg best

Du har lært om demokrati, menneskerettigheter, bærekraft, globalisering, medier, identitet, metode og argumentasjon. Nå er det tid for å trekke trådene sammen og sørge for at du er klar for eksamen.

Repetisjon handler ikke om å pugge faktasetninger. Det handler om å **organisere kunnskapen din** slik at du kan bruke den fleksibelt — uansett hvilket tema du trekker.

Den viktigste innsikten er denne: I samfunnsfag henger alt sammen. Demokrati henger sammen med menneskerettigheter. Globalisering henger sammen med bærekraft. Medier henger sammen med demokrati. Identitet henger sammen med medborgerskap. Når du ser disse sammenhengene, er du forberedt til ethvert eksamenstema.

I dette kapittelet skal du:
- Repetere de viktigste temaene og fagbegrepene
- Øve på tverrfaglige koblinger
- Gjennomgå typiske eksamenstemaer
- Lage din egen repetisjonsstrategi`,
    },
    {
      id: 'samfunnsfag-10-40-def-1',
      type: 'definition',
      title: 'De store temaene i samfunnsfag — overblikk',
      content: `Her er en oversikt over de sentrale temaene du bør beherske:

**1. Demokrati og styresett**
Nøkkelbegreper: demokrati, maktfordeling, rettsstat, ytringsfrihet, pressefrihet, valgordning, politiske partier, populisme, demokratisk tilbakegang
Kjerneforståelse: Hvordan makt fordeles og kontrolleres, og hvorfor det er viktig

**2. Menneskerettigheter**
Nøkkelbegreper: FNs menneskerettighetserklæring, sivile rettigheter, sosiale rettigheter, barns rettigheter, brudd på menneskerettigheter
Kjerneforståelse: Hva rettighetene innebærer og utfordringene med å sikre dem

**3. Bærekraftig utvikling**
Nøkkelbegreper: FNs bærekraftsmål, Parisavtalen, klimarettferdighet, sirkulær økonomi, karbonavtrykk, grønnvasking
Kjerneforståelse: Sammenhengen mellom miljø, økonomi og sosial rettferdighet

**4. Globalisering**
Nøkkelbegreper: globalisering, frihandel, multinasjonal, global ulikhet, migrasjon, kulturutveksling
Kjerneforståelse: Fordeler og ulemper ved at verden henger tettere sammen

**5. Medier og kommunikasjon**
Nøkkelbegreper: den fjerde statsmakt, algoritmer, filterbobler, ekkokammer, desinformasjon, kildekritikk
Kjerneforståelse: Medienes rolle i demokratiet og digitale utfordringer

**6. Identitet og mangfold**
Nøkkelbegreper: identitet, kultur, mangfold, inkludering, urfolk, nasjonale minoriteter, fordommer, rasisme
Kjerneforståelse: Hva som former identitet og betydningen av mangfold`,
    },
    {
      id: 'samfunnsfag-10-40-example-1',
      type: 'example',
      title: 'Eksempel: Slik kobler du temaer — tverrfaglig tenkning',
      problem: 'Hvordan kan du vise sammenhenger mellom ulike temaer i samfunnsfag?',
      solution: `**Kobling 1: Medier + Demokrati**
Mediene er den fjerde statsmakt som overvåker de andre. Men algoritmene skaper filterbobler som kan true den demokratiske debatten. Desinformasjon kan påvirke valg.

**Kobling 2: Globalisering + Bærekraft**
Globaliseringen har gitt økonomisk vekst, men også økt forbruk og utslipp. Klimarettferdighet handler om at rike land som har tjent mest på globaliseringen, bør ta størst klimaansvar.

**Kobling 3: Identitet + Demokrati**
Hvem du føler deg som (identitet) påvirker om du deltar i demokratiet (medborgerskap). Ekskludering kan føre til at grupper mister tillit til demokratiske prosesser.

**Kobling 4: Menneskerettigheter + Bærekraft**
Retten til rent miljø, mat og vann er menneskerettigheter. Klimaendringer truer disse rettighetene — spesielt for fattige og sårbare grupper.

**Kobling 5: Metode + Alle temaer**
Kildekritikk og metodekompetanse gjør deg i stand til å vurdere påstander og informasjon om alle temaer — fra klimadata til valgstatistikk.

**Tips:** Når sensor spør om sammenhenger, kan du bruke formuleringen: «Dette henger sammen med [annet tema] fordi...»`,
    },
    {
      id: 'samfunnsfag-10-40-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-40-ex-1',
        number: '40.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom å pugge faktasetninger og å forstå sammenhenger i samfunnsfag?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell — begge deler gir like god eksamen', isCorrect: false, feedback: 'Det er en stor forskjell. Pugging gir karakter 2-3, mens forståelse og evne til å se sammenhenger gir karakter 5-6.' },
          { id: 'b', text: 'Pugging gir deg fakta å ramse opp, mens forståelse gjør deg i stand til å drøfte og se sammenhenger — som gir høyere karakter', isCorrect: true, feedback: 'Riktig! Drøfting, sammenhenger og selvstendig tenkning er nøkkelen til gode karakterer i samfunnsfag.' },
          { id: 'c', text: 'Pugging er viktigere fordi sensor liker å høre korrekte årstall', isCorrect: false, feedback: 'Sensor er mer interessert i forståelse og drøfting enn i presise årstall.' },
          { id: 'd', text: 'Sammenhenger er bare viktig hvis du vil ha karakter 6', isCorrect: false, feedback: 'Evnen til å se sammenhenger er viktig fra karakter 4 og oppover. Det er en sentral ferdighet i faget.' },
        ],
        solution: 'Forståelse og evnen til å se sammenhenger er viktigere enn pugging i samfunnsfag. Drøfting og selvstendig tenkning skiller mellom gode og fremragende besvarelser.',
      },
    },
    {
      id: 'samfunnsfag-10-40-def-2',
      type: 'definition',
      title: 'Repetisjonsteknikker som fungerer',
      content: `Forskning viser at noen repetisjonsteknikker er langt mer effektive enn andre:

**Effektive teknikker:**

1. **Forklare for andre (eller deg selv):** Prøv å forklare et tema med egne ord — uten å se i boka. Hvis du kan forklare det enkelt, forstår du det godt.

2. **Øve på drøfting:** Skriv korte drøftinger (150-200 ord) om ulike temaer. Bruk strukturen: argument for, argument mot, konklusjon.

3. **Lage tankekart:** Tegn et tankekart der du plasserer et tema i midten og kobler det til andre temaer. Dette trener tverrfaglig tenkning.

4. **Fagbegrepskort:** Lag kort med begrepet på den ene siden og definisjonen + et eksempel på den andre. Test deg selv jevnlig.

5. **Diskutere med andre:** Å diskutere aktuelle saker med venner, familie eller medelever er utmerket trening for fagsamtalen.

6. **Lese nyheter bevisst:** Les nyheter daglig og tenk: «Hvilke fagbegreper kan jeg knytte til denne saken?»

**Mindre effektive teknikker:**
- Lese passivt gjennom notater (du føler at du kan det, men gjenkjenning er ikke det samme som forståelse)
- Streke under tekst (gir falsk følelse av læring)
- Pugge definisjoner ordrett (sensor vil at du bruker egne ord)`,
    },
    {
      id: 'samfunnsfag-10-40-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-40-ex-2',
        number: '40.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tverrfaglig koblingstrening.',
        subTasks: [
          { label: 'a', task: 'Forklar sammenhengen mellom medier og bærekraftig utvikling i 3-5 setninger.', solution: 'Mediene spiller en viktig rolle i å informere om klimaendringer og bærekraft. Samtidig kan algoritmene forsterke klimafornektelse gjennom filterbobler. Mediene har dagsordenmakt — det de velger å dekke om miljø, påvirker hva folk bryr seg om. Undersøkende journalistikk kan avdekke grønnvasking.' },
          { label: 'b', task: 'Forklar sammenhengen mellom globalisering og identitet i 3-5 setninger.', solution: 'Globaliseringen eksponerer oss for ulike kulturer gjennom medier, handel og migrasjon. Dette kan berike identiteten, men kan også skape usikkerhet. Noen reagerer med sterkere nasjonal identitet, andre utvikler en global identitet. Spenningen mellom lokalt og globalt preger identitetsdebatten.' },
          { label: 'c', task: 'Forklar sammenhengen mellom menneskerettigheter og medier i 3-5 setninger.', solution: 'Ytringsfrihet og pressefrihet er grunnleggende menneskerettigheter. Frie medier er en forutsetning for å avdekke menneskerettighetsbrudd. Samtidig kan mediene bidra til hatprat som krenker andres rettigheter. Balansen mellom ytringsfrihet og beskyttelse mot hets er en sentral utfordring.' },
        ],
        hints: ['Bruk formuleringen: «[Tema A] henger sammen med [Tema B] fordi...»'],
        solution: 'Tverrfaglige koblinger viser høy kompetanse og er ofte det som skiller karakter 4 fra karakter 5-6 på eksamen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-40-def-3',
      type: 'definition',
      title: 'Typiske eksamenstemaer — vær forberedt',
      content: `Her er temaer som ofte dukker opp på muntlig eksamen i samfunnsfag. For hvert tema bør du kunne formulere en problemstilling, identifisere relevante fagbegreper og drøfte fra flere sider.

**Klassiske temaer:**
- Demokrati i Norge og verden
- Menneskerettigheter — universelle eller relative?
- Bærekraftig utvikling og Norges ansvar
- Medier, algoritmer og demokrati
- Identitet og mangfold i Norge
- Globalisering — fordeler og ulemper
- Urfolk og nasjonale minoriteter

**Aktuelle temaer (varierer fra år til år):**
- Klimaendringer og klimapolitikk
- Desinformasjon og kunstig intelligens
- Krig, konflikt og flyktninger
- Sosiale medier og unges hverdag
- Ulikhet i Norge og verden
- Populisme og polarisering

**For hvert tema bør du ha klart:**
1. En mulig problemstilling
2. 5-8 relevante fagbegreper
3. 2-3 gode eksempler
4. Argumenter for og mot (drøfting)
5. Koblinger til andre temaer i faget`,
    },
    {
      id: 'samfunnsfag-10-40-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-40-ex-3',
        number: '40.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag fagbegrepskort for de viktigste begrepene.',
        subTasks: [
          { label: 'a', task: 'Velg 10 fagbegreper du synes er viktigst for eksamen. For hvert begrep: skriv en kort definisjon (1-2 setninger) og gi et konkret eksempel.', solution: 'Eleven velger 10 sentrale begreper (f.eks. demokrati, maktfordeling, ytringsfrihet, menneskerettigheter, bærekraftig utvikling, klimarettferdighet, globalisering, filterboble, desinformasjon, medborgerskap) og forklarer hvert med definisjon og eksempel.' },
          { label: 'b', task: 'Test deg selv: Dekk til definisjonene og prøv å forklare hvert begrep med egne ord.', solution: 'Eleven tester seg selv aktivt — dette er mye mer effektivt enn passiv lesing.' },
        ],
        hints: ['Velg begreper som kan brukes på tvers av temaer — de er mest verdifulle på eksamen.'],
        solution: 'Fagbegrepskort med aktiv testing er en av de mest effektive repetisjonsteknikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-40-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-40-ex-4',
        number: '40.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Eksamenssimulering: Trekk et tema og gjennomfør en komplett forberedelse.',
        subTasks: [
          { label: 'a', task: 'Bruk følgende tema: «Demokrati under press — trusler og forsvar». Lag en fullstendig disposisjon med problemstilling, tre delemner, fagbegreper og eksempler.', solution: 'Problemstilling: Er demokratiet i verden i tilbakegang, og hva kan beskytte det? Delemner: 1) Trusler (populisme, desinformasjon, autoritære tendenser), 2) Forsvar (maktfordeling, frie medier, sivilsamfunn), 3) Drøfting — er truslene alvorlige nok til å bekymre seg? Fagbegreper: demokratisk tilbakegang, populisme, desinformasjon, maktfordeling, legitimitet, medborgerskap.' },
          { label: 'b', task: 'Forbered svar på fem mulige spørsmål sensor kan stille etter presentasjonen.', solution: 'Eksempler: 1) Hva truer demokratiet i Norge spesifikt? 2) Hvordan henger medier og demokratisk tilbakegang sammen? 3) Hva kan ungdom gjøre for å styrke demokratiet? 4) Kan du koble dette til menneskerettigheter? 5) Er populisme alltid negativt for demokratiet?' },
        ],
        hints: [
          'Bruk stikkord, ikke fullstendige setninger.',
          'Sørg for at disposisjonen inviterer til drøfting, ikke bare beskrivelse.',
        ],
        solution: 'En komplett forberedelse inkluderer problemstilling, strukturert disposisjon, fagbegreper, eksempler og forberedelse på fagsamtale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-40-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-40-ex-5',
        number: '40.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du er på eksamen og sensor stiller et spørsmål du ikke vet svaret på. Hva er den beste strategien?',
        options: [
          { id: 'a', text: 'Si at du ikke vet og bli stille', isCorrect: false, feedback: 'Det er ærlig å si at du ikke vet, men du bør alltid prøve å resonnere deg frem — det viser tenkeevne.' },
          { id: 'b', text: 'Finne på et svar som høres smart ut', isCorrect: false, feedback: 'Sensor merker raskt om du finner på noe. Det er bedre å være ærlig og vise at du kan resonnere.' },
          { id: 'c', text: 'Si at du er usikker, men prøve å resonnere deg frem ved å knytte spørsmålet til noe du kan', isCorrect: true, feedback: 'Riktig! Å vise at du kan tenke logisk og knytte til relevant kunnskap er verdifullt — selv om du ikke vet det eksakte svaret.' },
          { id: 'd', text: 'Skifte tema til noe du kan bedre', isCorrect: false, feedback: 'Å unngå spørsmålet virker unnvikende. Prøv heller å svare så godt du kan ut fra det du vet.' },
        ],
        solution: 'Den beste strategien er å være ærlig, men prøve å resonnere seg frem: «Jeg er ikke helt sikker, men ut fra det jeg vet om..., tror jeg...»',
      },
    },
    {
      id: 'samfunnsfag-10-40-oppsummering',
      type: 'text',
      content: `## Oppsummering: Eksamensstrategier og repetisjon

**De viktigste strategiene for eksamen:**

1. **Forstå, ikke pugge:** Fokuser på sammenhenger og drøfting, ikke på å memorere faktasetninger
2. **Bruk fagbegreper:** Ha en oversikt over de viktigste begrepene og øv på å bruke dem naturlig
3. **Se sammenhenger:** Tren på å koble temaer på tvers — det er det som gir toppkarakterer
4. **Øv muntlig:** Snakk fritt fra stikkord, hold prøvepresentasjoner, øv fagsamtale med medelever
5. **Les nyheter:** Knytt fagstoff til aktuelle hendelser — det gjør argumentene dine levende
6. **Drøft aktivt:** Skriv korte drøftinger, diskuter med andre, tren på å se flere sider
7. **Forbered deg på det uventede:** Ha strategier for spørsmål du ikke vet svaret på

**Huskeliste for eksamensdagen:**
- Pust rolig, nervøsitet er normalt
- Snakk fritt fra stikkord — ikke les opp
- Bruk fagbegreper naturlig
- Drøft — vis at du kan se flere sider
- Lytt nøye på spørsmål i fagsamtalen
- Det er lov å tenke før du svarer
- Vis engasjement og interesse for faget

**Du er bedre forberedt enn du tror.** Alt du har lært dette året — om demokrati, menneskerettigheter, bærekraft, globalisering, medier, identitet, metode og argumentasjon — er verktøy du kan bruke. Stol på kunnskapen din, tenk selvstendig, og vis hva du kan. Lykke til!`,
    },
    {
      id: 'samfunnsfag-10-40-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-40-ex-6',
        number: '40.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avsluttende helhetsoppgave: «Alt henger sammen med alt.» Velg tre temaer fra samfunnsfag og vis hvordan de henger sammen. Skriv en kort tekst (200-300 ord) der du kobler temaene med fagbegreper og eksempler.',
        hints: [
          'Velg temaer du føler deg trygg på.',
          'Bruk minst 5 fagbegreper.',
          'Gi konkrete eksempler for å forankre argumentene.',
          'Vis at du kan se helheten i faget.',
        ],
        solution: 'En sterk besvarelse kobler tre temaer sømløst, bruker fagbegreper presist, gir aktuelle eksempler, og viser at eleven ser samfunnsfag som et helhetlig fag — ikke en samling isolerte temaer. Dette er den typen helhetlig forståelse som kjennetegner de beste eksamensbesvarelsene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 8
// ============================================================================

export const SAMFUNNSFAG_10_DEL8_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_10_35,
  CHAPTER_SAMFUNNSFAG_10_36,
  CHAPTER_SAMFUNNSFAG_10_37,
  CHAPTER_SAMFUNNSFAG_10_38,
  CHAPTER_SAMFUNNSFAG_10_39,
  CHAPTER_SAMFUNNSFAG_10_40,
];
