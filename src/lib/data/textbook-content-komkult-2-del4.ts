/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 2 (VG3) - Del 4: Medieanalyse
 *
 * Kapittel 4.1–4.5
 *
 * LK20-kompetansemål:
 * - analysere medietekster ved hjelp av semiotiske og narrative begreper
 * - drøfte hvordan mediespråk og diskurser former vår forståelse av virkeligheten
 * - planlegge, gjennomføre og vurdere egen medieproduksjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Tekstanalyse og semiotikk
// ============================================================================

export const CHAPTER_KOMKULT2_4_1: TextbookChapter = {
  id: 'komkult2-4-1',
  courseId: 'komkult-2',
  chapterNumber: '4.1',
  title: 'Tekstanalyse og semiotikk',
  description: 'Semiotikkens grunnbegreper og hvordan tegn skaper mening i medietekster. Du lærer om denotasjon, konnotasjon, koder og myter, og hvordan du kan bruke semiotisk analyse til å forstå medienes budskap.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analysere medietekster ved hjelp av semiotiske og narrative begreper',
    'drøfte hvordan mediespråk og diskurser former vår forståelse av virkeligheten',
  ],
  keyTerms: [
    { term: 'Semiotikk', definition: 'Læren om tegn og tegnbruk. Semiotikken undersøker hvordan tegn (ord, bilder, lyder, gester) skaper mening i kommunikasjon.' },
    { term: 'Denotasjon', definition: 'Den bokstavelige, beskrivende betydningen av et tegn. Hva tegnet direkte viser eller refererer til.' },
    { term: 'Konnotasjon', definition: 'De tilleggsbetydninger og assosiasjoner et tegn vekker ut over den bokstavelige betydningen, påvirket av kultur, erfaring og kontekst.' },
    { term: 'Kode', definition: 'Et system av konvensjoner som bestemmer hvordan tegn kombineres og tolkes innenfor en bestemt kultur eller sjanger.' },
    { term: 'Myte (Barthes)', definition: 'Et kulturbetinget meningssystem som gjør bestemte verdier og ideologier til noe som virker naturlig og selvfølgelig, slik Roland Barthes beskrev det.' },
  ],
  content: [
    {
      id: 'kk2-4-1-intro',
      type: 'text',
      content: `## Tegn og mening i medietekster

Hver gang du leser en avisartikkel, ser en reklame eller scroller gjennom sosiale medier, tolker du et stort antall tegn. Farger, bilder, ord, lyder og layout er alle tegn som bærer mening. Semiotikken gir oss verktøy for å analysere hvordan disse tegnene virker.

I dette kapittelet skal du lære:
- Hva semiotikk er og hvem som utviklet fagfeltet
- Forskjellen mellom denotasjon og konnotasjon
- Hva koder betyr for tolkning av medietekster
- Roland Barthes' begrep om myten
- Hvordan du gjennomfører en semiotisk analyse`,
    },
    {
      id: 'kk2-4-1-def-1',
      type: 'definition',
      title: 'Semiotikk',
      content: `**Semiotikk** er vitenskapen om tegn og tegnbruk. Fagfeltet undersøker hvordan mening skapes, formidles og tolkes gjennom tegn i alle former for kommunikasjon. Den sveitsiske lingvisten **Ferdinand de Saussure** og den amerikanske filosofen **Charles Sanders Peirce** regnes som semiotikkens grunnleggere. Saussure delte tegnet i to deler: *signifikanten* (uttrykket, f.eks. lyden av ordet «hund») og *signifikatet* (innholdet, altså forestillingen om en hund).`,
    },
    {
      id: 'kk2-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Denotasjon og konnotasjon i reklame',
      problem: 'En reklame for en luksusbil viser bilen parkert foran en elegant herregård. Himmelen er solnedgangsrød og en velkledd mann lener seg mot bilen.',
      solution: `**Denotasjon (bokstavelig nivå):**
Vi ser en bil, en bygning, en himmel med røde og oransje farger og en mann i dress.

**Konnotasjon (assosiativt nivå):**
- Herregården konnoterer rikdom, tradisjon og eksklusivitet
- Solnedgangen konnoterer ro, skjønnhet og livsnytelse
- Den velkleddne mannen konnoterer suksess, kontroll og maskulinitet
- Bilen kobles til denne livsstilen gjennom visuell nærhet

**Samlet budskap:** Reklamen selger ikke bare en bil, men en livsstil. Den knytter produktet til verdier som rikdom, frihet og status gjennom konnotasjonene i bildet.`,
    },
    {
      id: 'kk2-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom denotasjon og konnotasjon?',
        options: [
          { id: 'a', text: 'Denotasjon handler om følelser, konnotasjon handler om fakta', isCorrect: false },
          { id: 'b', text: 'Denotasjon er den bokstavelige betydningen, konnotasjon er tilleggsbetydninger og assosiasjoner', isCorrect: true },
          { id: 'c', text: 'Denotasjon gjelder bilder, konnotasjon gjelder tekst', isCorrect: false },
          { id: 'd', text: 'Denotasjon er avsenderens mening, konnotasjon er mottakerens mening', isCorrect: false },
        ],
        solution: 'Denotasjon er den bokstavelige, beskrivende betydningen av et tegn (hva tegnet direkte viser). Konnotasjon er de tilleggsbetydningene og assosiasjonene tegnet vekker, påvirket av kultur og kontekst.',
      },
    },
    {
      id: 'kk2-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-1-ex-2',
        number: '4.1.2',
        type: 'multiple-choice',
        task: 'Hvem regnes som grunnlegger av den europeiske tradisjonen innen semiotikk?',
        options: [
          { id: 'a', text: 'Roland Barthes', isCorrect: false },
          { id: 'b', text: 'Charles Sanders Peirce', isCorrect: false },
          { id: 'c', text: 'Ferdinand de Saussure', isCorrect: true },
          { id: 'd', text: 'Marshall McLuhan', isCorrect: false },
        ],
        solution: 'Ferdinand de Saussure regnes som grunnleggeren av den europeiske semiotiske tradisjonen (semiologi). Han innførte skillet mellom signifikant (uttrykk) og signifikat (innhold) som to uatskillelige sider av tegnet.',
      },
    },
    {
      id: 'kk2-4-1-def-2',
      type: 'definition',
      title: 'Myte (Roland Barthes)',
      content: `Den franske semiotikeren **Roland Barthes** (1915-1980) utviklet begrepet **myte** i semiotisk forstand. En myte er et meningssystem som gjør kulturbestemte verdier og ideologier til noe som fremstår som naturlig og selvfølgelig. Myten bygger på konnotasjoner: Når bestemte konnotasjoner gjentas ofte nok, blir de oppfattet som «sannheter». Eksempel: Ideen om at «det naturlige er best» er en myte som brukes i reklame for alt fra mat til kosmetikk.`,
    },
    {
      id: 'kk2-4-1-text-2',
      type: 'text',
      content: `### Koder i medietekster

En **kode** er et sett av konvensjoner som styrer hvordan tegn kombineres og tolkes. Uten felles koder ville vi ikke kunne forstå hverandre. I medieanalyse skiller vi mellom flere typer koder:

**Tekniske koder**
- Kameravinkler (froskeperspektiv, fugleperspektiv, normalperspektiv)
- Bildekomposisjon og utsnitt (nær, halvtotal, total)
- Lyssetting, farge og kontrast
- Klipping og redigering i film og TV

**Sosiale koder**
- Kroppsspråk, ansiktsuttrykk og gester
- Klesdrakt og utseende
- Oppførsel og sosial samhandling
- Bruk av omgivelser og rekvisitter

**Kulturelle koder**
- Sjangerkoder (vi vet hva vi kan forvente av en krimfilm vs. en romantisk komedie)
- Symboler og ikoniske tegn (rød rose = kjærlighet)
- Mytologiske referanser og kulturelle fortellinger
- Ideologiske koder (hva som fremstilles som «normalt» eller «riktig»)

Koder er kulturelt bestemte. Et tegn som betyr noe bestemt i én kultur, kan bety noe helt annet i en annen.`,
    },
    {
      id: 'kk2-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        task: 'Finn en reklame (på nett, i en avis eller i et magasin) og gjennomfør en enkel semiotisk analyse. Beskriv denotasjon, konnotasjoner og hvilke koder som brukes. Hva er reklamens underliggende budskap?',
        hints: ['Skill mellom hva du bokstavelig ser og hvilke assosiasjoner det vekker', 'Tenk på fargevalg, bildekomposisjon og tekst'],
        solution: 'En god semiotisk analyse av en reklame bør inneholde: 1) Denotasjon: En objektiv beskrivelse av hva som vises (personer, objekter, tekst, farger). 2) Konnotasjoner: Hvilke assosiasjoner og tilleggsbetydninger elementene vekker (luksus, ungdom, frihet osv.). 3) Koder: Hvilke tekniske koder (lyssetting, kameravinkel), sosiale koder (klesdrakt, kroppsspråk) og kulturelle koder (symboler, sjangertrekk) som brukes. 4) Myte: Hvilken ideologisk fortelling reklamen bygger på, for eksempel at «dette produktet gir deg frihet» eller «naturlig er best».',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        task: 'Forklar Barthes sitt begrep om myten med egne ord. Gi et eksempel på en myte som er utbredt i dagens mediekultur, og forklar hvordan den fungerer.',
        hints: ['Tenk på ideer som fremstilles som naturlige og selvfølgelige i mediene', 'Vurder reklame, sosiale medier eller nyheter'],
        solution: 'Barthes bruker begrepet myte om kulturbestemte verdier som har blitt så vanlige at de oppfattes som naturlige sannheter. En myte skjuler at noe er konstruert og ideologisk. Eksempel: «Skjønnhetsmyten» i mediene - ideen om at ungdommelighet, slanke kropper og glatt hud er universelt vakre. Denne myten fungerer ved at reklame og sosiale medier gjentatte ganger viser bestemte kroppsidealer og kobler dem til suksess, lykke og kjærlighet. Over tid fremstår disse idealene som naturlige og selvsagte, mens de egentlig er kulturelt konstruerte og historisk foranderlige. Myten tjener kommersielle interesser fordi den skaper behov for produkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Semiotikk** er læren om tegn og hvordan mening skapes
- **Denotasjon** er den bokstavelige betydningen, **konnotasjon** er assosiasjoner og tilleggsbetydninger
- **Koder** (tekniske, sosiale, kulturelle) styrer hvordan vi tolker tegn
- Roland Barthes' begrep om **myten** beskriver hvordan ideologi fremstår som noe naturlig
- En **semiotisk analyse** avdekker hvordan medietekster skaper mening gjennom bevisste tegnvalg`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-1-ex-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign to reklamer for samme type produkt (f.eks. to mobilreklamer eller to parfymereklamer). Analyser hvilke semiotiske virkemidler de bruker, og drøft hvilke ulike konnotasjoner og myter de bygger på.',
        hints: ['Bruk begrepene denotasjon, konnotasjon, kode og myte', 'Fokuser på forskjellene mellom de to reklamene'],
        solution: 'En god sammenligning bør peke på: 1) Denotative forskjeller: Ulike visuelle elementer, fargebruk, personer og settinger. 2) Konnotative forskjeller: Den ene reklamen kan konnotere teknologi og fremtid, den andre tradisjon og håndverk. 3) Kodebruk: Ulike tekniske koder (kameravinkler, belysning), sosiale koder (hvem er modellene, hvordan opptrer de) og kulturelle koder (referanser til livsstiler). 4) Myter: Den ene kan bygge på myten om teknologisk fremskritt, den andre på myten om autentisitet. Sammenligningen viser at samme produkttype kan markedsføres gjennom helt ulike meningssystemer rettet mot ulike målgrupper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-1-ex-6',
        number: '4.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor semiotisk analyse er viktig for mediekompetanse. Hvordan kan kunnskap om tegn og koder gjøre oss til mer kritiske mediebrukere?',
        hints: ['Tenk på hvordan mening konstrueres i mediene', 'Vurder makt og påvirkning'],
        solution: 'Semiotisk analyse er viktig fordi den avslører at mediebudskap ikke er nøytrale avspeilinger av virkeligheten, men konstruksjoner laget gjennom bevisste og ubevisste tegnvalg. Ved å forstå denotasjon og konnotasjon kan vi skille mellom hva vi faktisk ser og hvilke assosiasjoner vi ledes til å gjøre. Ved å kjenne til koder forstår vi at vår tolkning er kulturelt betinget, ikke universell. Ved å avsløre myter gjennomskuer vi ideologiske budskap som fremstår som naturlige. Dette gjør oss mindre utsatte for manipulasjon gjennom reklame, propaganda og påvirkningskampanjer, og styrker vår evne til selvstendig og kritisk tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Narrativ analyse
// ============================================================================

export const CHAPTER_KOMKULT2_4_2: TextbookChapter = {
  id: 'komkult2-4-2',
  courseId: 'komkult-2',
  chapterNumber: '4.2',
  title: 'Narrativ analyse',
  description: 'Fortellingsstruktur i medietekster: aktantmodellen, heltefortellingen og dramaturgi. Du lærer å analysere hvordan fortellinger bygges opp i film, nyheter og reklame, og hvilke funksjoner fortellinger har i kommunikasjon.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere medietekster ved hjelp av semiotiske og narrative begreper',
  ],
  keyTerms: [
    { term: 'Narrativ', definition: 'En fortelling eller fortellende fremstilling som presenterer en rekke hendelser i en bestemt rekkefølge, med begynnelse, midtdel og slutt.' },
    { term: 'Aktantmodellen', definition: 'En modell utviklet av A.J. Greimas som beskriver seks roller (aktanter) i en fortelling: subjekt, objekt, hjelper, motstander, sender og mottaker.' },
    { term: 'Dramaturgi', definition: 'Læren om oppbygningen av dramatiske fortellinger, inkludert spenningskurve, vendepunkt og klimaks.' },
    { term: 'Heltefortellingen', definition: 'En universell fortellingsstruktur beskrevet av Joseph Campbell, der helten forlater det kjente, møter utfordringer, og vender tilbake forandret.' },
    { term: 'Narrativ struktur', definition: 'Den overordnede organiseringen av en fortelling, inkludert rekkefølgen hendelser presenteres i, synsvinkel og tidsbruk.' },
  ],
  content: [
    {
      id: 'kk2-4-2-intro',
      type: 'text',
      content: `## Fortellingens kraft i mediene

Mennesker har alltid fortalt historier. Fortellinger hjelper oss å forstå verden, organisere erfaringer og skape mening. I mediene finner vi fortellingsstrukturer overalt: i filmer og serier, men også i nyheter, reklame, dokumentarer og politisk retorikk.

I dette kapittelet skal du lære:
- Hva en narrativ analyse er
- Greimas' aktantmodell og dens seks roller
- Klassisk dramaturgi og spenningskurven
- Joseph Campbells heltefortelling
- Hvordan narrativer brukes strategisk i mediene`,
    },
    {
      id: 'kk2-4-2-def-1',
      type: 'definition',
      title: 'Narrativ og narrativ analyse',
      content: `Et **narrativ** er en fortelling: en fremstilling av hendelser i en bestemt rekkefølge, med en begynnelse, en midtdel og en slutt. **Narrativ analyse** er en metode for å undersøke hvordan fortellinger er bygget opp, hvilke roller karakterene fyller, og hvilken funksjon fortellingen har. Den litauisk-franske lingvisten **Algirdas Julien Greimas** utviklet aktantmodellen som et sentralt verktøy for narrativ analyse.`,
    },
    {
      id: 'kk2-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Aktantmodellen i en nyhetssak',
      problem: 'En nyhetssak handler om at en norsk hjelpeorganisasjon sender nødhjelp til et jordskjelvrammet område. Identifiser aktantene i fortellingen.',
      solution: `**Aktantmodellen har seks roller:**

- **Subjekt:** Hjelpeorganisasjonen (den som handler)
- **Objekt:** Nødhjelp til de rammede (det subjektet streber etter)
- **Sender:** Medlidenhet og humanitære verdier (det som setter handlingen i gang)
- **Mottaker:** Jordskjelvofre (de som nyter godt av handlingen)
- **Hjelper:** Frivillige, donorer, transportselskaper (de som bistår subjektet)
- **Motstander:** Ødelagt infrastruktur, logistiske utfordringer, tidsnød (det som hindrer subjektet)

**Refleksjon:** Selv en tilsynelatende «nøytral» nyhetssak følger en narrativ struktur. Journalisten velger hvem som er helt, hvem som er offer, og hva som er hindringen. En annen vinkling kunne hatt de rammede som subjekt og selvberging som objekt.`,
    },
    {
      id: 'kk2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        task: 'Hvilken rolle fyller «motstanderen» i Greimas aktantmodell?',
        options: [
          { id: 'a', text: 'Den som setter handlingen i gang', isCorrect: false },
          { id: 'b', text: 'Den som mottar resultatet av handlingen', isCorrect: false },
          { id: 'c', text: 'Den eller det som hindrer subjektet i å nå målet', isCorrect: true },
          { id: 'd', text: 'Den som hjelper subjektet underveis', isCorrect: false },
        ],
        solution: 'Motstanderen (opponent) er den eller det som hindrer subjektet i å oppnå sitt mål. Det kan være en person, en naturkraft, et samfunnsproblem eller en indre konflikt.',
      },
    },
    {
      id: 'kk2-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-2-ex-2',
        number: '4.2.2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner heltefortellingen ifølge Joseph Campbell?',
        options: [
          { id: 'a', text: 'Helten er alltid en mann som kjemper mot et monster', isCorrect: false },
          { id: 'b', text: 'Helten forlater det kjente, møter utfordringer og vender tilbake forandret', isCorrect: true },
          { id: 'c', text: 'Helten forteller sin egen historie i førsteperson', isCorrect: false },
          { id: 'd', text: 'Helten vinner alltid til slutt uten hjelp fra andre', isCorrect: false },
        ],
        solution: 'Joseph Campbells heltefortelling (monomyten) beskriver en universell struktur der helten forlater den kjente verdenen, krysser en terskel inn i det ukjente, møter prøvelser, oppnår en innsikt eller belønning, og vender tilbake forandret. Denne strukturen finnes i myter, eventyr og moderne filmer.',
      },
    },
    {
      id: 'kk2-4-2-def-2',
      type: 'definition',
      title: 'Dramaturgi og spenningskurve',
      content: `**Dramaturgi** er læren om oppbygningen av fortellinger. Den klassiske **dramaturgiske modellen** (etter Aristoteles) deler fortellingen i tre akter: eksposisjon (introduksjon av konflikten), stigning (konflikten tilspisser seg) og oppløsning (konflikten løses). **Spenningskurven** viser hvordan spenningen stiger fra anslaget, gjennom komplikasjoner og vendepunkt, til et klimaks, før den faller i avslutningen.`,
    },
    {
      id: 'kk2-4-2-text-2',
      type: 'text',
      content: `### Narrativer i ulike mediesjangre

Fortellingsstrukturer finnes ikke bare i fiksjon. De brukes aktivt i mange mediesjangre:

**Nyheter**
- Nyhetssaker følger ofte et narrativt mønster med konflikt, aktører og oppløsning
- Journalister velger «helter» og «skurker» gjennom kildevalg og vinkling
- Personlige historier brukes for å menneskeliggjøre abstrakte temaer

**Reklame**
- Mange reklamer forteller en minifortelling (problem → løsning → lykkelig slutt)
- Produktet plasseres som «hjelper» som gjør hverdagen bedre
- Merkevarefotelling (brand storytelling) skaper emosjonell tilknytning

**Dokumentar**
- Bruker dramaturgisk oppbygging for å holde på seeren
- Velger ofte en hovedperson å følge gjennom en reise
- Spenningskurve og vendepunkter strukturerer fortellingen

**Sosiale medier**
- Influencere bruker personlige narrativer for å bygge troverdighet
- «Før og etter»-fortellinger er en vanlig narrativ struktur
- Hverdagsfortellinger skaper identifikasjon og engasjement`,
    },
    {
      id: 'kk2-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        task: 'Velg en film, en serie eller et eventyr du kjenner godt. Bruk aktantmodellen til å identifisere de seks rollene (subjekt, objekt, sender, mottaker, hjelper, motstander). Forklar valgene dine.',
        hints: ['Start med å identifisere subjektet (hovedpersonen) og objektet (målet)', 'Hvem eller hva sender subjektet ut på reisen?'],
        solution: 'Eksempel med Askepott: Subjekt: Askepott (den som handler). Objekt: Å komme på ballet og vinne prinsens kjærlighet. Sender: Ønsket om frihet og et bedre liv. Mottaker: Askepott selv (og prinsen). Hjelper: Den gode feen, de magiske dyrene. Motstander: Stemoren og stesøstrene. Analysen viser at eventyr følger et tydelig mønster der subjektet streber etter noe, hjulpet av magiske hjelpere, og motarbeidet av onde krefter. Denne strukturen gjenfinnes i mange moderne filmer og serier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        task: 'Finn en reklamefilm (på YouTube eller TV) og analyser den narrative strukturen. Hvem er «helten»? Hva er problemet? Hvordan presenteres produktet som løsning? Bruk begreper fra dramaturgien.',
        hints: ['Se etter en begynnelse-midtdel-slutt-struktur', 'Legg merke til hvordan produktet introduseres'],
        solution: 'En god analyse av en reklamefilm bør inneholde: 1) Eksposisjon: Hvordan reklamen etablerer en situasjon eller et problem (f.eks. en person som sliter med noe). 2) Konflikt/komplikasjon: Hva som gjør situasjonen vanskelig. 3) Vendepunkt: Når produktet introduseres som løsningen. 4) Klimaks/oppløsning: Transformasjonen etter at produktet er tatt i bruk. 5) Aktantanalyse: Forbrukeren er subjektet, et bedre liv er objektet, produktet er hjelperen, og problemet er motstanderen. De fleste reklamer komprimerer denne strukturen til 15-60 sekunder, noe som viser hvor effektivt narrative konvensjoner kommuniserer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Et **narrativ** er en fortelling med begynnelse, midtdel og slutt
- **Aktantmodellen** identifiserer seks roller: subjekt, objekt, hjelper, motstander, sender og mottaker
- **Dramaturgien** beskriver fortellingens oppbygging med eksposisjon, stigning og oppløsning
- **Heltefortellingen** er en universell narrativ struktur der helten reiser ut, møter prøvelser og vender tilbake forandret
- Narrativer brukes i **alle mediesjangre**, fra nyheter til reklame og sosiale medier`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan narrativer i nyhetsmedier kan påvirke vår oppfatning av en sak. Gi et eksempel på hvordan den samme hendelsen kan fortelles med ulike aktanter og ulik dramaturgi, og dermed gi ulike inntrykk.',
        hints: ['Tenk på hvem som velges som subjekt og motstander', 'Vurder hva som skjer når man bytter perspektiv'],
        solution: 'Nyhetsmedier bruker narrativer ved å velge hvem som er helt, offer og skurk, og ved å strukturere saken dramaturgisk. Eksempel: En streik i helsevesenet. Fortelling 1: Sykepleierne er subjektet, bedre lønn er objektet, regjeringen er motstanderen. Dramaturgien vektlegger deres kamp og ofre. Fortelling 2: Pasientene er subjektet, trygg behandling er objektet, streiken er motstanderen. Dramaturgien vektlegger lidelsen til de rammede. Fortelling 3: Helseministeren er subjektet, en løsning er objektet, fagforeningens krav er motstanderen. Dramaturgien vektlegger politisk handlekraft. Samme hendelse gir helt ulike inntrykk avhengig av narrativt valg. Dette viser at nyheter aldri er helt nøytrale, og at narrativ analyse er et viktig redskap for kritisk mediekompetanse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-2-ex-6',
        number: '4.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv to korte versjoner (3-4 setninger hver) av en fiktiv nyhetssak om bygging av en ny motorvei. I den ene versjonen skal prosjektet fremstilles positivt, i den andre negativt. Forklar hvilke narrative grep du har brukt.',
        hints: ['Tenk på valg av aktanter, ordvalg og vinkling', 'Hvem er helten og hvem er offeret i hver versjon?'],
        solution: 'Positiv versjon: «Etter år med planlegging kan endelig den nye motorveien stå ferdig. Samferdselsministeren jubler over at tusenvis av pendlere nå slipper lange køer. Prosjektet har skapt hundrevis av arbeidsplasser og knytter regionen tettere sammen.» Negativ versjon: «Tross massive protester fra lokalbefolkningen er den omstridte motorveien nå ferdig. Tusenvis av trær er felt og verdifulle jordbruksarealer er borte for alltid. Miljøorganisasjonene frykter konsekvensene for artsmangfoldet i området.» Narrative grep: I den positive versjonen er myndighetene subjektet og bedre infrastruktur objektet. I den negative er naturen og lokalbefolkningen subjektet og motstanderen er veimyndighetene. Ordvalg som «jubler» vs. «omstridte» og «skapt arbeidsplasser» vs. «felt tusenvis av trær» styrer konnotasjonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Diskursanalyse av medietekster
// ============================================================================

export const CHAPTER_KOMKULT2_4_3: TextbookChapter = {
  id: 'komkult2-4-3',
  courseId: 'komkult-2',
  chapterNumber: '4.3',
  title: 'Diskursanalyse av medietekster',
  description: 'Diskursbegrepet, makt og språk i mediene. Du lærer hva en diskurs er, hvordan diskurser former vår forståelse av virkeligheten, og hvordan du kan gjennomføre en enkel diskursanalyse av medietekster.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte hvordan mediespråk og diskurser former vår forståelse av virkeligheten',
    'analysere medietekster ved hjelp av semiotiske og narrative begreper',
  ],
  keyTerms: [
    { term: 'Diskurs', definition: 'En bestemt måte å snakke om og forstå et tema på, som setter rammer for hva som kan sies, hvem som kan si det, og hva som regnes som sant eller normalt.' },
    { term: 'Diskursanalyse', definition: 'En analysemetode som undersøker hvordan språkbruk og kommunikasjon konstruerer virkelighetsforståelser, maktforhold og identiteter.' },
    { term: 'Makt og språk', definition: 'Sammenhengen mellom språkbruk og maktforhold: Den som definerer begrepene og setter rammene for debatten, har makt over hvordan virkeligheten forstås.' },
    { term: 'Hegemoni', definition: 'En dominerende virkelighetsforståelse som de fleste i samfunnet aksepterer som naturlig og selvfølgelig, selv om den tjener bestemte interesser.' },
    { term: 'Representasjon', definition: 'Måten grupper, hendelser eller fenomener fremstilles og gis mening i mediene, som påvirker hvordan vi oppfatter dem.' },
  ],
  content: [
    {
      id: 'kk2-4-3-intro',
      type: 'text',
      content: `## Språk, makt og virkelighetsforståelse

Språket vi bruker er aldri nøytralt. Ordene vi velger, kategoriene vi tenker i og måten vi rammer inn en sak på, alt dette påvirker hvordan vi forstår virkeligheten. Diskursanalyse er en metode for å undersøke nettopp dette: hvordan språkbruk skaper og opprettholder bestemte virkelighetsforståelser.

I dette kapittelet skal du lære:
- Hva en diskurs er
- Hvordan diskurser former vår forståelse av virkeligheten
- Sammenhengen mellom språk, makt og hegemoni
- Hvordan medier representerer grupper og fenomener
- Grunnleggende fremgangsmåte for diskursanalyse`,
    },
    {
      id: 'kk2-4-3-def-1',
      type: 'definition',
      title: 'Diskurs',
      content: `En **diskurs** er en bestemt måte å snakke om, skrive om og forstå et tema på. Diskursen setter rammer for hva som kan sies, hvilke perspektiver som er gyldige, og hva som regnes som normalt. Den franske filosofen **Michel Foucault** (1926-1984) viste hvordan diskurser er tett knyttet til makt: Den som kontrollerer diskursen, kontrollerer også hva som regnes som «sannhet». Eksempel: Diskursen om «innvandring» i mediene kan rammes inn som en trussel, en ressurs eller en menneskerett, og dette påvirker holdningene til publikum.`,
    },
    {
      id: 'kk2-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Ulike diskurser om samme tema',
      problem: 'Temaet «unge og skjermtid» kan omtales på svært ulike måter i mediene. Identifiser ulike diskurser om dette temaet.',
      solution: `**Bekymringsdiskursen:**
«Barn og unge er avhengige av skjermene. Skjermtiden øker, uteleken forsvinner, og forskere advarer mot konsekvensene for hjernen.»
- Ordbruk: «avhengige», «advarer», «forsvinner»
- Perspektiv: Barn som passive ofre for teknologi
- Implisitt budskap: Skjermtid er skadelig og bør begrenses

**Mulighetsdiskursen:**
«Digital kompetanse er avgjørende for fremtidens arbeidsmarked. Unge som behersker teknologi, har et forsprang.»
- Ordbruk: «kompetanse», «forsprang», «behersker»
- Perspektiv: Unge som aktive digitale borgere
- Implisitt budskap: Skjermtid kan være positivt og nødvendig

**Refleksjon:** Samme fenomen, men to helt ulike virkelighetsbilder. Hvilken diskurs som dominerer i mediene, påvirker politikk, foreldreholdninger og barns selvforståelse.`,
    },
    {
      id: 'kk2-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        task: 'Hva menes med en diskurs i medieanalyse?',
        options: [
          { id: 'a', text: 'En muntlig presentasjon eller tale', isCorrect: false },
          { id: 'b', text: 'En bestemt måte å snakke om og forstå et tema på, som setter rammer for hva som kan sies', isCorrect: true },
          { id: 'c', text: 'En debatt mellom to eller flere personer', isCorrect: false },
          { id: 'd', text: 'En skriftlig tekst publisert i et tidsskrift', isCorrect: false },
        ],
        solution: 'En diskurs er en bestemt måte å snakke om og forstå et tema på. Diskursen setter rammer for hva som kan sies, hvem som kan si det, og hva som regnes som sant. Begrepet er sentralt hos Michel Foucault.',
      },
    },
    {
      id: 'kk2-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-3-ex-2',
        number: '4.3.2',
        type: 'multiple-choice',
        task: 'Hva innebærer begrepet hegemoni i diskursanalyse?',
        options: [
          { id: 'a', text: 'At alle i samfunnet har lik tilgang til mediene', isCorrect: false },
          { id: 'b', text: 'At en bestemt politisk ideologi styrer alle medier', isCorrect: false },
          { id: 'c', text: 'At en dominerende virkelighetsforståelse aksepteres som naturlig, selv om den tjener bestemte interesser', isCorrect: true },
          { id: 'd', text: 'At staten har kontroll over medienes innhold', isCorrect: false },
        ],
        solution: 'Hegemoni betyr at en bestemt virkelighetsforståelse har blitt så dominerende at den aksepteres som naturlig og selvfølgelig av de fleste, selv om den egentlig tjener bestemte gruppers interesser. Begrepet stammer fra Antonio Gramsci.',
      },
    },
    {
      id: 'kk2-4-3-def-2',
      type: 'definition',
      title: 'Representasjon',
      content: `**Representasjon** handler om hvordan grupper, hendelser eller fenomener fremstilles og gis mening i mediene. Representasjon er aldri en nøytral gjengivelse, men et resultat av valg: Hvem får uttale seg? Hvilke bilder brukes? Hvilke egenskaper fremheves? **Stuart Hall** (1932-2014), en sentral figur i kulturstudier, viste at representasjon er en aktiv prosess der mening skapes, ikke bare gjengis. Medierepresentasjon påvirker vår oppfatning av andre mennesker og grupper, og kan forsterke eller utfordre stereotypier.`,
    },
    {
      id: 'kk2-4-3-text-2',
      type: 'text',
      content: `### Fremgangsmåte for diskursanalyse

En enkel diskursanalyse av en medietekst kan gjennomføres i fire steg:

**1. Identifiser temaet og konteksten**
- Hva handler teksten om?
- Hvor og når er den publisert?
- Hvem er avsender og målgruppe?

**2. Analyser språkbruken**
- Hvilke ord og uttrykk brukes? (Ladede ord, metaforer, eufemismer)
- Hvem omtales som «vi» og «de»?
- Hvilke kategorier og klassifiseringer brukes?
- Hva sies eksplisitt og hva tas for gitt (forutsetninger)?

**3. Identifiser diskursen**
- Hvilken virkelighetsforståelse bygger teksten på?
- Hvilke perspektiver er inkludert og ekskludert?
- Hvem tilskrives ansvar, handlekraft eller sårbarhet?
- Finnes det konkurrerende diskurser?

**4. Vurder makt og konsekvenser**
- Hvem tjener på at denne diskursen er dominerende?
- Hvilke stemmer og perspektiver marginaliseres?
- Hvilke handlinger fremstår som naturlige eller nødvendige?
- Hvordan kan diskursen påvirke holdninger og politikk?`,
    },
    {
      id: 'kk2-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        task: 'Velg en nyhetssak om et kontroversielt tema (f.eks. klima, innvandring eller teknologi). Gjennomfør en enkel diskursanalyse ved å bruke de fire stegene: identifiser tema og kontekst, analyser språkbruken, identifiser diskursen og vurder makt og konsekvenser.',
        hints: ['Vær oppmerksom på ladede ord og metaforer', 'Hvem kommer til orde og hvem er fraværende?'],
        solution: 'En god diskursanalyse bør inneholde: 1) Tema og kontekst: Hva handler saken om, hvem publiserte den, og i hvilken sammenheng. 2) Språkbruk: Identifisering av ladede ord (f.eks. «strøm av flyktninger» vs. «mennesker på flukt»), metaforer (f.eks. «bølge» eller «krise»), og hvem som defineres som «vi» og «de». 3) Diskurs: Hvilken virkelighetsforståelse som dominerer (f.eks. en trusseldiskurs, en mulighetsdiskurs eller en rettferdighetsdiskurs). 4) Makt: Hvem som tjener på denne fremstillingen, og hvilke stemmer og perspektiver som eventuelt utelates. Analysen bør vise bevissthet om at alle medietekster bygger på bestemte diskurser og dermed former vår virkelighetsforståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-3-ex-4',
        number: '4.3.4',
        type: 'classic',
        task: 'Forklar sammenhengen mellom språk og makt med egne ord. Gi et eksempel på hvordan valg av ord kan påvirke oppfatningen av en sak eller en gruppe mennesker.',
        hints: ['Tenk på forskjellen mellom ulike betegnelser for det samme fenomenet', 'Vurder hvem som har makten til å definere begreper'],
        solution: 'Språk og makt henger sammen fordi den som definerer begrepene, styrer hvordan virkeligheten forstås. Ordvalg er aldri nøytralt: «Illegal innvandrer» vs. «papirløs» vs. «udokumentert migrant» beskriver samme person, men skaper ulike assosiasjoner. «Illegal» konnoterer kriminalitet, «papirløs» konnoterer sårbarhet, «udokumentert» konnoterer byråkratisk status. Den som får sitt ordvalg til å dominere i offentlig debatt, påvirker holdningene til temaet. Mediene har stor makt i denne prosessen fordi de velger hvilke begreper som brukes i nyhetsdekning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **diskurs** er en bestemt måte å snakke om og forstå et tema på
- **Michel Foucault** viste at diskurser er knyttet til makt og kontroll over «sannhet»
- **Hegemoni** betyr at en dominerende forståelse fremstår som naturlig
- **Representasjon** handler om hvordan grupper fremstilles i mediene
- **Diskursanalyse** avdekker hvordan språkbruk konstruerer virkelighetsforståelser og maktforhold`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-3-ex-5',
        number: '4.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign hvordan to ulike aviser eller nettsteder dekker den samme nyhetssaken. Identifiser forskjeller i ordvalg, kildebruk og vinkling. Hvilke diskurser bygger de to fremstillingene på?',
        hints: ['Velg en kontroversiell sak med ulike synspunkter', 'Vær oppmerksom på hvilke stemmer som kommer til orde'],
        solution: 'En god sammenligning bør inneholde: 1) Identifisering av de to kildene og deres redaksjonelle profil. 2) Konkrete forskjeller i ordvalg (f.eks. «skattelette» vs. «kutt i velferden» om samme politiske vedtak). 3) Forskjeller i kildebruk: Hvem uttaler seg i de to artiklene? Eksperter, politikere, berørte? 4) Forskjeller i vinkling: Hva fremheves og hva tones ned? 5) Identifisering av diskurser: Den ene kan bygge på en markedsliberal diskurs der skattekutt gir vekst, den andre på en velferdsdiskurs der offentlige tjenester er truet. Sammenligning av mediedekning er en viktig øvelse i kritisk mediekompetanse og viser at «objektive nyheter» alltid innebærer valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-3-ex-6',
        number: '4.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft Stuart Halls påstand om at representasjon er en aktiv prosess der mening skapes, ikke bare gjengis. Bruk eksempler fra medier for å belyse argumentet.',
        hints: ['Tenk på hvordan bestemte grupper fremstilles i film, TV eller nyheter', 'Vurder hvilke konsekvenser representasjon kan ha'],
        solution: 'Stuart Hall argumenterte for at mediene ikke speiler virkeligheten, men aktivt konstruerer mening gjennom representasjon. Eksempler: 1) Fremstillingen av ungdom i nyhetsmedier fokuserer ofte på kriminalitet og rus, noe som gir et skjevt bilde av ungdomsgruppen. 2) Representasjonen av ulike etniske grupper i norsk film og TV har historisk vært begrenset og stereotyp, noe som kan forsterke fordommer. 3) Kjønnsrepresentasjon i reklame har tradisjonelt plassert kvinner i passive roller og menn i aktive, noe som bidrar til å naturalisere kjønnsstereotypier. Representasjon har reelle konsekvenser fordi den påvirker selvbilde, holdninger og politikk. Når vi forstår at representasjon er konstruert, kan vi stille kritiske spørsmål om hvem som fremstilles hvordan, og hvem som har makt til å definere bildene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Visuell analyse og bildeanalyse
// ============================================================================

export const CHAPTER_KOMKULT2_4_4: TextbookChapter = {
  id: 'komkult2-4-4',
  courseId: 'komkult-2',
  chapterNumber: '4.4',
  title: 'Visuell analyse og bildeanalyse',
  description: 'Verktøy og metoder for å analysere bilder, fotografier og visuell kommunikasjon i mediene. Du lærer om komposisjon, farger, blikkretning og forankring, og hvordan visuelle valg skaper mening og påvirker mottakeren.',
  estimatedMinutes: 23,
  competenceGoals: [
    'analysere medietekster ved hjelp av semiotiske og narrative begreper',
    'drøfte hvordan mediespråk og diskurser former vår forståelse av virkeligheten',
  ],
  keyTerms: [
    { term: 'Visuell analyse', definition: 'En systematisk undersøkelse av hvordan visuelle elementer (bilder, farger, komposisjon, typografi) skaper mening i en medietekst.' },
    { term: 'Komposisjon', definition: 'Måten visuelle elementer er arrangert innenfor bilderammen, inkludert plassering, balanse, linjer og rom.' },
    { term: 'Forankring', definition: 'Tekst (bildetekst, overskrift) som styrer tolkningen av et bilde i en bestemt retning og begrenser polysemien (flertydighetene).' },
    { term: 'Bildeutsnitt', definition: 'Hvor mye av motivet som vises: totalbilde, halvtotalt, halvnært, nært og ultranært. Utsnitt påvirker avstand og intimitet.' },
    { term: 'Visuell retorikk', definition: 'Bruken av visuelle virkemidler for å overbevise, påvirke eller argumentere. Bilder har retorisk kraft fordi de oppleves som direkte og troverdig.' },
  ],
  content: [
    {
      id: 'kk2-4-4-intro',
      type: 'text',
      content: `## Bildets makt

Vi lever i en visuell kultur. Bilder omgir oss overalt: i nyhetsmedier, reklame, sosiale medier, film og kunst. Bilder oppleves ofte som mer umiddelbare og troverdige enn tekst, nettopp fordi de «viser» i stedet for å «fortelle». Men bilder er like konstruerte som tekst, og de visuelle valgene påvirker hvordan vi tolker budskapet.

I dette kapittelet skal du lære:
- Hvordan du gjennomfører en visuell analyse
- Betydningen av komposisjon, utsnitt og perspektiv
- Hvordan farger og lyssetting skaper mening
- Hva forankring betyr for tolkningen av bilder
- Hvordan bilder brukes retorisk i mediene`,
    },
    {
      id: 'kk2-4-4-def-1',
      type: 'definition',
      title: 'Visuell analyse',
      content: `**Visuell analyse** er en systematisk metode for å undersøke hvordan visuelle elementer skaper mening. Analysen ser på hva bildet viser (innhold), hvordan det er utformet (form), og i hvilken sammenheng det opptrer (kontekst). Gunther Kress og Theo van Leeuwen utviklet en innflytelsesrik modell for visuell analyse i boken *Reading Images* (1996), der de beskriver bilder som en form for «visuell grammatikk» med egne regler for meningsskaping.`,
    },
    {
      id: 'kk2-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Bildeutsnitt og perspektiv i en nyhetssak',
      problem: 'Et nyhetsoppslag om en politiker viser to ulike bilder: ett tatt nedenfra med vidvinkel, og ett nært bilde der politikeren ser rett i kamera.',
      solution: `**Bilde 1: Froskeperspektiv (nedenfra)**
- Denotasjon: En person fotografert nedenfra
- Konnotasjon: Personen virker mektig, autoritær og dominerende
- Effekt: Froskeperspektiv gjør at vi «ser opp til» personen, noe som forsterker inntrykket av makt og styrke

**Bilde 2: Nært utsnitt, rett i kamera**
- Denotasjon: Ansiktet til en person som ser mot kamera
- Konnotasjon: Nærhet, direktekontakt, personlighet
- Effekt: Mottakeren opplever en «relasjon» til personen. Kress og van Leeuwen kaller dette et «krav-bilde» fordi blikket krever noe av betrakteren

**Refleksjon:** Valg av kameravinkel og utsnitt er aldri tilfeldig i profesjonelle medier. Fotografen og redaksjonen tar bevisste valg som påvirker hvordan publikum oppfatter personen.`,
    },
    {
      id: 'kk2-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        task: 'Hva menes med forankring i bildeanalyse?',
        options: [
          { id: 'a', text: 'At bildet er festet til en bestemt plass på nettsiden', isCorrect: false },
          { id: 'b', text: 'At tekst styrer tolkningen av et bilde i en bestemt retning', isCorrect: true },
          { id: 'c', text: 'At bildet er tatt med et stativ for å unngå uskarphet', isCorrect: false },
          { id: 'd', text: 'At bildet refererer til et annet bilde', isCorrect: false },
        ],
        solution: 'Forankring betyr at tekst (som bildetekst eller overskrift) styrer tolkningen av et bilde i en bestemt retning. Bilder er ofte flertydige (polysemiske), og teksten begrenser tolkningsmulighetene. Begrepet stammer fra Roland Barthes.',
      },
    },
    {
      id: 'kk2-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-4-ex-2',
        number: '4.4.2',
        type: 'multiple-choice',
        task: 'Hvilket bildeutsnitt gir størst opplevelse av nærhet og intimitet?',
        options: [
          { id: 'a', text: 'Totalbilde', isCorrect: false },
          { id: 'b', text: 'Halvtotalt bilde', isCorrect: false },
          { id: 'c', text: 'Nært bilde (nærportrett)', isCorrect: true },
          { id: 'd', text: 'Oversiktsbilde', isCorrect: false },
        ],
        solution: 'Nært bilde (nærportrett) gir størst opplevelse av nærhet og intimitet. Jo nærmere vi er motivet, desto sterkere føler vi en personlig forbindelse. Totalbilde skaper derimot avstand og oversikt.',
      },
    },
    {
      id: 'kk2-4-4-def-2',
      type: 'definition',
      title: 'Visuell retorikk',
      content: `**Visuell retorikk** handler om hvordan bilder brukes for å overbevise, påvirke eller argumentere. Bilder har stor retorisk kraft fordi de oppleves som umiddelbare og troverdige. Vi sier «jeg tror det når jeg ser det», men glemmer at bilder er like konstruerte som ord. Visuell retorikk inkluderer strategisk bruk av farger, komposisjon, utsnitt, perspektiv og kontekst for å fremkalle bestemte følelser og holdninger hos mottakeren.`,
    },
    {
      id: 'kk2-4-4-text-2',
      type: 'text',
      content: `### Farger og lyssetting som meningsbærere

Farger og lys er ikke bare estetiske valg. De er meningsbærende elementer som påvirker tolkningen av bildet:

**Farger**
- **Varme farger** (rød, oransje, gul): Energi, varme, lidenskap, fare
- **Kalde farger** (blå, grønn, lilla): Ro, distanse, tristhet, troverdighet
- **Svart:** Makt, eleganse, sorg, alvor
- **Hvitt:** Renhet, uskyld, minimalisme, sterilitet
- **Metning og kontrast:** Sterke farger gir intensitet, dempede farger gir ro eller nostalgi

**Lyssetting**
- **Høy nøkkel** (mye lys, lite skygge): Åpenhet, optimisme, trygghet
- **Lav nøkkel** (mye skygge, dramatiske kontraster): Mystikk, dramatikk, uro
- **Motlys:** Silhuetteffekt som kan anonymisere eller skape mystikk
- **Sidelys:** Fremhever tekstur og dybde, kan gi et dramatisk uttrykk

**Kulturelle forskjeller:** Fargesymbolikk varierer mellom kulturer. Hvitt er sorgfarge i mange asiatiske kulturer, mens det er bryllupsfarge i vestlige kulturer.`,
    },
    {
      id: 'kk2-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        task: 'Finn et pressefoto fra en nyhetsartikkel. Gjennomfør en visuell analyse der du beskriver: (1) innholdet (denotasjon), (2) komposisjon og utsnitt, (3) farger og lyssetting, (4) forankring (bildetekst/overskrift), og (5) hva slags virkelighet bildet konstruerer.',
        hints: ['Beskriv først hva du bokstavelig ser, deretter hvordan det er fremstilt', 'Sjekk hvordan bildeteksten styrer tolkningen'],
        solution: 'En god visuell analyse av et pressefoto bør inneholde: 1) Denotasjon: Objektiv beskrivelse av hva bildet viser (personer, sted, handling, gjenstander). 2) Komposisjon og utsnitt: Er det nært eller totalt? Hva er i fokus? Hva er i bakgrunnen? Hvordan er elementer plassert i bildet? 3) Farger og lys: Er bildet lyst eller mørkt? Varme eller kalde farger? Hva slags stemning skaper det? 4) Forankring: Hva sier bildeteksten? Hvordan styrer den tolkningen? Ville bildet hatt en annen mening med en annen bildetekst? 5) Virkelighetsbygging: Hva slags bilde av virkeligheten skaper dette valget? Hvem fremstilles som aktive/passive, sterke/sårbare?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        task: 'Forklar hvorfor bilder ofte oppleves som mer troverdige enn tekst. Drøft om denne troverdigheten er berettiget, med tanke på redigering, utvalg og visuell retorikk.',
        hints: ['Tenk på uttrykket «et bilde sier mer enn tusen ord»', 'Vurder bildemanipulasjon og kontekst'],
        solution: 'Bilder oppleves som troverdige fordi de synes å vise virkeligheten direkte: vi «ser det med egne øyne». Bilder kommuniserer umiddelbart og følelsesmessig, uten å kreve refleksjon. Denne troverdigheten er imidlertid problematisk: 1) Utvalg: Fotografen velger hva som fotograferes, fra hvilken vinkel, og i hvilket øyeblikk. 2) Redigering: Bilder kan beskjæres, fargekorrigeres og retusjeres. 3) Kontekst: Samme bilde kan gi helt ulik mening avhengig av bildetekst og plassering. 4) AI-genererte bilder gjør det stadig vanskeligere å skille ekte fra konstruerte bilder. Visuell retorikk er effektiv nettopp fordi vi sjelden stiller kritiske spørsmål til bilder. Mediekompetanse innebærer å behandle bilder like kritisk som tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Visuell analyse** undersøker hvordan bilder skaper mening gjennom innhold, form og kontekst
- **Komposisjon**, **utsnitt** og **perspektiv** påvirker hvordan vi oppfatter motivet
- **Farger** og **lyssetting** er meningsbærende elementer med kulturelle konnotasjoner
- **Forankring** styrer bildetolkningen gjennom tekst
- **Visuell retorikk** utnytter bildets umiddelbare og følelsesmessige kraft til å overbevise`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-4-ex-5',
        number: '4.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn det samme bildet brukt i to ulike sammenhenger (f.eks. i to ulike artikler eller med ulike bildetekster). Analyser hvordan kontekst og forankring endrer billedets betydning. Drøft hva dette forteller oss om bildets polysemi.',
        hints: ['Søk etter et pressefoto eller et arkivbilde som brukes av ulike medier', 'Sammenlign bildetekster og artikkelkontekst'],
        solution: 'Analyse bør vise: 1) Beskrivelse av bildet (denotasjon). 2) Kontekst 1: Hvor bildet er brukt, hvilken bildetekst det har, og hvilken mening det gis i denne sammenhengen. 3) Kontekst 2: Hvor bildet er brukt i den andre sammenhengen, med annen bildetekst og annen mening. 4) Sammenligning: Hvordan endrer forankringen billedets konnotasjoner? 5) Refleksjon om polysemi: Bilder er flertydige (polysemiske) og kan bety ulike ting avhengig av kontekst. Forankring (bildetekst og artikkelkontekst) fungerer som et filter som styrer tolkningen i en bestemt retning. Dette viser at bilder ikke har en fast mening, men er åpne for tolkninger som kan styres bevisst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-4-ex-6',
        number: '4.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I en tid med AI-genererte bilder og avansert bildemanipulasjon: Drøft hvordan dette utfordrer bildets troverdighet og hva det betyr for visuell mediekompetanse i fremtiden.',
        hints: ['Tenk på deepfakes, generative AI-bilder og manipulerte foto', 'Vurder konsekvenser for nyheter, demokrati og tillit'],
        solution: 'AI-genererte bilder og avansert bildemanipulasjon utfordrer bildets troverdighet på flere måter: 1) Deepfakes kan skape realistiske videoer av personer som sier og gjør ting de aldri har gjort, noe som truer politisk debatt og personvern. 2) Generative AI-verktøy kan lage fotorealistiske bilder av hendelser som aldri har skjedd, noe som undergraver pressefotoets dokumentariske funksjon. 3) Manipulerte bilder i nyheter og sosiale medier kan spre desinformasjon raskere enn tekst fordi bilder oppleves som bevis. For visuell mediekompetanse betyr dette: Vi trenger nye verktøy for å verifisere bilder (omvendt bildesøk, metadata-sjekk). Kritisk holdning til bilder blir like viktig som kildekritikk av tekst. Mediene må utvikle transparens om bildebruk, og utdanningssystemet må inkludere visuell kildekritikk som en grunnleggende ferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Medieproduksjon og kreativt arbeid
// ============================================================================

export const CHAPTER_KOMKULT2_4_5: TextbookChapter = {
  id: 'komkult2-4-5',
  courseId: 'komkult-2',
  chapterNumber: '4.5',
  title: 'Medieproduksjon og kreativt arbeid',
  description: 'Fra analyse til produksjon: planlegging, gjennomføring og vurdering av egne medieproduksjoner. Du lærer om produksjonsprosessen, sjangerbevissthet og etiske vurderinger i kreativt mediearbeid.',
  estimatedMinutes: 25,
  competenceGoals: [
    'planlegge, gjennomføre og vurdere egen medieproduksjon',
    'analysere medietekster ved hjelp av semiotiske og narrative begreper',
  ],
  keyTerms: [
    { term: 'Medieproduksjon', definition: 'Prosessen med å planlegge, skape og distribuere medieinnhold, fra ideutvikling via produksjon til publisering og vurdering.' },
    { term: 'Preproduksjon', definition: 'Planleggingsfasen i medieproduksjon, der man utvikler ideer, velger sjanger og virkemidler, skriver manus/storyboard og planlegger gjennomføringen.' },
    { term: 'Sjangerbevissthet', definition: 'Kunnskap om og bevisst bruk av sjangerkonvensjoner i egen produksjon, inkludert forståelse for hvordan sjangertrekk skaper forventninger hos mottakeren.' },
    { term: 'Storyboard', definition: 'En visuell plan for en film- eller videoproduksjon som viser bildeutsnitt, kamerabevegelser og handlingsforløp bilde for bilde.' },
    { term: 'Refleksjon over egen produksjon', definition: 'Kritisk vurdering av egne medievalg i etterkant: Hvilke virkemidler ble brukt? Hvilke budskap formidles? Hva fungerte og hva kunne vært gjort annerledes?' },
  ],
  content: [
    {
      id: 'kk2-4-5-intro',
      type: 'text',
      content: `## Fra teori til praksis

Å lage egne medieprodukter er en av de beste måtene å forstå hvordan medier virker. Når du selv må velge vinkling, utsnitt, ord og bilder, opplever du på kroppen at alle medietekster er resultater av bevisste valg. Medieproduksjon styrker både den analytiske og den kreative kompetansen.

I dette kapittelet skal du lære:
- Hvordan du planlegger en medieproduksjon (preproduksjon)
- Hva sjangerbevissthet betyr i praksis
- Produksjonsprosessens ulike faser
- Etiske vurderinger i medieproduksjon
- Hvordan du reflekterer kritisk over egen produksjon`,
    },
    {
      id: 'kk2-4-5-def-1',
      type: 'definition',
      title: 'Medieproduksjonens faser',
      content: `**Medieproduksjon** gjennomføres typisk i tre hovedfaser: (1) **Preproduksjon** er planleggingsfasen der man utvikler ideer, definerer målgruppe, velger sjanger og virkemidler, og lager manus eller storyboard. (2) **Produksjon** er gjennomføringsfasen der man skriver, filmer, fotograferer eller designer det ferdige produktet. (3) **Postproduksjon** er etterarbeidet der man redigerer, klipper, fargekorrigerer og ferdigstiller produktet for publisering.`,
    },
    {
      id: 'kk2-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Planlegging av en kort dokumentarfilm',
      problem: 'En gruppe elever skal lage en 3-minutters dokumentarfilm om skolens matsvinnprosjekt. Beskriv preproduksjonsfasen.',
      solution: `**Steg 1: Ideutvikling og research**
- Hva er historien? Elevene vil vise hvordan skolen har redusert matsvinnet med 40 %
- Hvem er målgruppen? Andre skoler og elever
- Hvilken vinkling? Fokusere på elevenes engasjement og praktiske løsninger

**Steg 2: Manus og struktur**
- Anslag: Bilde av overflødige matrester i en søppelkasse (problem)
- Midtdel: Intervjuer med elever og kantinepersonale, bilder av tiltakene
- Avslutning: Resultatene og veien videre (løsning)

**Steg 3: Storyboard**
- Skisse av hvert bildeutsnitt med notater om kameravinkel, lyd og varighet
- Planlegge intervjuene: Hvem, hvor, hvilke spørsmål?

**Steg 4: Praktisk planlegging**
- Utstyr: Kamera, mikrofon, lys
- Tidsplan: Når filmes intervjuene? Når filmes b-roll?
- Ansvar: Hvem filmer, hvem intervjuer, hvem redigerer?

**Refleksjon:** Allerede i planleggingen tar man narrative og retoriske valg: Hva skal være «problemet» og hva skal være «løsningen»? Hvem er «heltene» i fortellingen?`,
    },
    {
      id: 'kk2-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        task: 'Hva hører til preproduksjonsfasen i medieproduksjon?',
        options: [
          { id: 'a', text: 'Redigering, klipping og fargekorrigering', isCorrect: false },
          { id: 'b', text: 'Filming, fotografering og lydopptak', isCorrect: false },
          { id: 'c', text: 'Ideutvikling, manus, storyboard og planlegging', isCorrect: true },
          { id: 'd', text: 'Publisering og distribusjon til målgruppen', isCorrect: false },
        ],
        solution: 'Preproduksjon er planleggingsfasen der man utvikler ideer, skriver manus, lager storyboard, velger sjanger og virkemidler, og planlegger den praktiske gjennomføringen. God preproduksjon er avgjørende for et godt sluttresultat.',
      },
    },
    {
      id: 'kk2-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-5-ex-2',
        number: '4.5.2',
        type: 'multiple-choice',
        task: 'Hva er et storyboard?',
        options: [
          { id: 'a', text: 'En skriftlig oppsummering av filmens handling', isCorrect: false },
          { id: 'b', text: 'En visuell plan som viser bildeutsnitt, kamerabevegelser og handlingsforløp bilde for bilde', isCorrect: true },
          { id: 'c', text: 'En liste over alle medvirkende i produksjonen', isCorrect: false },
          { id: 'd', text: 'En oversikt over budsjettet for medieproduksjonen', isCorrect: false },
        ],
        solution: 'Et storyboard er en visuell plan for en film- eller videoproduksjon. Det viser bilde for bilde hva som skal filmes, med notater om kameravinkel, utsnitt, lyd og bevegelse. Storyboardet fungerer som en «tegneserie» av det ferdige produktet.',
      },
    },
    {
      id: 'kk2-4-5-def-2',
      type: 'definition',
      title: 'Sjangerbevissthet',
      content: `**Sjangerbevissthet** innebærer at man kjenner til og bevisst forholder seg til sjangerkonvensjonene i sin medieproduksjon. Hver sjanger har bestemte forventninger knyttet til innhold, form og funksjon: En nyhetsartikkel krever en annen tilnærming enn en reklamefilm eller en podkastepisode. Sjangerbevissthet betyr at man enten følger konvensjonene (for å kommunisere tydelig) eller bryter dem bevisst (for å overraske eller utfordre mottakeren).`,
    },
    {
      id: 'kk2-4-5-text-2',
      type: 'text',
      content: `### Etiske vurderinger i medieproduksjon

Som medieprodusent har du et ansvar for innholdet du skaper og publiserer. Viktige etiske vurderinger:

**Personvern og samtykke**
- Har du fått samtykke fra alle som medvirker?
- Respekterer du personvernet til dem du omtaler eller avbilder?
- Er du bevisst på publiseringsloven og GDPR?

**Representasjon og fremstilling**
- Hvordan fremstiller du personer og grupper?
- Forsterker du stereotypier, eller utfordrer du dem?
- Er fremstillingen balansert og rettferdig?

**Sannhet og troverdighet**
- Er innholdet sant og korrekt?
- Presenterer du egne meninger som fakta?
- Bruker du manipulerte bilder eller villedende klipping?

**Konsekvenser**
- Kan innholdet ditt skade noen?
- Har du tenkt gjennom mulige konsekvenser av publisering?
- Ville du vært komfortabel med at alle visste hvilke valg du har tatt?

**Opphavsrett**
- Har du rettigheter til å bruke bilder, musikk og tekst?
- Krediterer du kilder og opphavspersoner korrekt?
- Er du bevisst på Creative Commons-lisenser og rettigheter?`,
    },
    {
      id: 'kk2-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-5-ex-3',
        number: '4.5.3',
        type: 'classic',
        task: 'Lag en kort plan (preproduksjonsnotat) for en medieproduksjon du selv kan gjennomføre. Velg en sjanger (f.eks. podkast, kortfilm, fotoreportasje eller reklame). Beskriv: (1) ideen og temaet, (2) målgruppen, (3) sjanger og virkemidler du vil bruke, (4) en enkel narrativ struktur, og (5) en etisk vurdering.',
        hints: ['Velg et tema du brenner for', 'Tenk på hvem du vil nå og hva du vil oppnå'],
        solution: 'Et godt preproduksjonsnotat bør inneholde: 1) Ide og tema: En tydelig beskrivelse av hva produksjonen handler om og hva formålet er. 2) Målgruppe: Hvem produksjonen er rettet mot og hva som kjennetegner denne gruppen. 3) Sjanger og virkemidler: Hvilken sjanger man har valgt (med begrunnelse), og hvilke visuelle, auditive og tekstlige virkemidler man planlegger å bruke. 4) Narrativ struktur: Hvordan fortellingen er bygget opp (begynnelse, midtdel, slutt, hvem er aktantene). 5) Etisk vurdering: Vurdering av personvern, representasjon, sannhet og opphavsrett. Planen viser at medieproduksjon krever bevisste valg i alle faser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        task: 'Forklar hva sjangerbevissthet betyr i medieproduksjon. Velg to ulike sjangre (f.eks. nyhetsreportasje og reklamefilm) og beskriv minst tre forskjeller i konvensjoner for innhold, form og funksjon.',
        hints: ['Tenk på hva mottakeren forventer av hver sjanger', 'Vurder språk, tone, struktur og visuelle valg'],
        solution: 'Sjangerbevissthet betyr at man kjenner til og forholder seg bevisst til konvensjonene i den sjangeren man jobber med. Eksempel: Nyhetsreportasje vs. reklamefilm. 1) Innhold: Nyhetsreportasje baseres på fakta og kildebruk, reklamefilm selger et produkt gjennom følelser. 2) Språk og tone: Nyhetsreportasje har nøkternt, informativt språk. Reklamefilm bruker overtalende, følelsesladet språk. 3) Struktur: Nyhetsreportasje følger pyramideprinsippet (viktigst først). Reklamefilm følger en forenklet narrativ struktur (problem → løsning). 4) Visuelt: Nyhetsreportasje bruker dokumentariske bilder. Reklamefilm bruker estetiserte, iscenesatte bilder. 5) Funksjon: Nyhetsreportasje skal informere. Reklamefilm skal overtale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Medieproduksjon** gjennomføres i tre faser: preproduksjon, produksjon og postproduksjon
- **Preproduksjon** (planlegging) er avgjørende for kvaliteten på sluttproduktet
- Et **storyboard** er en visuell plan for film- og videoproduksjon
- **Sjangerbevissthet** betyr å kjenne og bevisst forholde seg til sjangerkonvensjoner
- **Etiske vurderinger** om personvern, representasjon, sannhet og opphavsrett er sentrale i medieproduksjon`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en enkel medieproduksjon (f.eks. en kort podkast, en fotoreportasje, en reklamefilm eller en digital fortelling). Skriv etterpå en refleksjon der du analyserer dine egne valg: Hvilke semiotiske, narrative og retoriske virkemidler brukte du? Hva ville du gjort annerledes?',
        hints: ['Bruk begreper fra de tidligere kapitlene i refleksjonen', 'Vær ærlig om hva som fungerte og hva som ikke fungerte'],
        solution: 'En god produksjonsrefleksjon bør inneholde: 1) Beskrivelse av produktet: Hva er det, hvilken sjanger, hva er temaet. 2) Semiotisk analyse av egne valg: Hvilke tegn og koder brukte du? Hvilke konnotasjoner skapte du bevisst? 3) Narrativ analyse: Hvordan bygde du opp fortellingen? Hvem er aktantene? 4) Retoriske valg: Hvordan forsøkte du å overbevise eller engasjere mottakeren? 5) Diskursrefleksjon: Hvilken virkelighetsforståelse fremmer produksjonen din? 6) Etisk vurdering: Hvilke etiske valg tok du? 7) Selvkritikk: Hva fungerte, hva ville du gjort annerledes? Refleksjonen viser at analytisk kunnskap og praktisk medieproduksjon styrker hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-4-5-ex-6',
        number: '4.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Den som lager medieinnhold, har et ansvar for hvordan virkeligheten fremstilles.» Bruk begreper som diskurs, representasjon og visuell retorikk i argumentasjonen din.',
        hints: ['Tenk på maktforholdet mellom medieprodusent og mottaker', 'Vurder konsekvensene av medierepresentasjon'],
        solution: 'Medieprodusenter har makt fordi de gjennom sine valg konstruerer virkelighetsbilder (diskurser) som påvirker publikums oppfatninger. Representasjon er en aktiv prosess der mening skapes: Valg av hvem som vises, hvordan de fremstilles, og hvilke historier som fortelles, har konsekvenser for holdninger og selvbilder. Visuell retorikk forsterker dette fordi bilder oppleves som umiddelbare og troverdige. Ansvaret innebærer: 1) Bevissthet om egne valg og deres konsekvenser. 2) Refleksjon over hvem som representeres og hvordan. 3) Etisk vurdering av sannhet, personvern og rettferdighet. 4) Forståelse for at man aldri er nøytral som medieprodusent. Motargument: Noen vil hevde at mottakeren har eget ansvar for kritisk tolkning. Men maktforholdet er asymmetrisk, og medieprodusenten har større ansvar fordi de kontrollerer hva som formidles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT2_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT2_4_1,
  CHAPTER_KOMKULT2_4_2,
  CHAPTER_KOMKULT2_4_3,
  CHAPTER_KOMKULT2_4_4,
  CHAPTER_KOMKULT2_4_5,
];
