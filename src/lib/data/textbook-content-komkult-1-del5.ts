/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 1 (VG2) - Del 5: Mediekommunikasjon
 *
 * Kapittel 5.1–5.5
 *
 * LK20-kompetansemål:
 * - analysere medienes rolle i samfunnet og demokratiet
 * - vurdere kilder kritisk og identifisere falske nyheter
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Medienes rolle i samfunnet
// ============================================================================

export const CHAPTER_KOMKULT_1_5_1: TextbookChapter = {
  id: 'komkult-1-5-1',
  courseId: 'komkult-1',
  chapterNumber: '5.1',
  title: 'Medienes rolle i samfunnet',
  description: 'Massemedier, dagsordensfunksjon, portvaktfunksjon og medienes bidrag til offentlig debatt og demokrati.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere medienes rolle i samfunnet og demokratiet',
  ],
  content: [
    {
      id: 'kk-5-1-intro',
      type: 'text',
      content: `## Medienes rolle i samfunnet

Mediene er en av de viktigste institusjonene i et demokratisk samfunn. Gjennom aviser, TV, radio og nettmedier far innbyggerne informasjon om hva som skjer i samfunnet, og de kan delta i den offentlige debatten. Medienes rolle strekker seg langt utover ren informasjonsformidling. De setter dagsordenen, gransker makthaverne og skaper rom for meningsutveksling.

I dette kapittelet skal du laere:
- Hva massemedier er og hvilke typer som finnes
- Hvordan mediene setter dagsordenen
- Hva portvaktfunksjonen innebærer
- Medienes rolle i offentligheten og demokratiet`,
    },
    {
      id: 'kk-5-1-def-1',
      type: 'definition',
      title: 'Massemedier',
      content: `**Massemedier** er kommunikasjonskanaler som nar ut til et stort publikum. Begrepet omfatter aviser, TV, radio, nettaviser og andre plattformer som formidler informasjon, underholdning og meninger til mange mennesker samtidig. I motsetning til personlig kommunikasjon er massekommunikasjon kjennetegnet av at senderen ikke kjenner hver enkelt mottaker.`,
    },
    {
      id: 'kk-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Avisenes utvikling',
      content: `For 30 ar siden var de fleste norske husholdninger abonnenter pa minst en lokalavis og en riksavis. I dag leser de fleste nyheter digitalt. VG og Dagbladet har gatt fra papir til digitale plattformer med betalingsmurer, og lokalaviser sliter med fallende opplag.

Likevel er den redaksjonelle funksjonen den samme: a velge ut, prioritere og formidle nyheter til publikum. Det er formen som har endret seg, ikke oppdraget.`,
    },
    {
      id: 'kk-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner massekommunikasjon?',
        options: [
          { id: 'a', text: 'Senderen kjenner mottakeren personlig', isCorrect: false },
          { id: 'b', text: 'Budskapet nar ut til et stort og ofte ukjent publikum', isCorrect: true },
          { id: 'c', text: 'Kommunikasjonen er alltid toveis', isCorrect: false },
          { id: 'd', text: 'Den foregår bare gjennom trykte medier', isCorrect: false },
        ],
        solution: 'Massekommunikasjon kjennetegnes ved at budskapet nar ut til et stort og ofte ukjent publikum. Senderen har som regel ikke direkte kontakt med hver enkelt mottaker, og kommunikasjonen er hovedsakelig enveis.',
      },
    },
    {
      id: 'kk-5-1-def-2',
      type: 'definition',
      title: 'Dagsordensfunksjonen',
      content: `**Dagsordensfunksjonen** (agenda-setting) beskriver medienes evne til a pavirke hva folk tenker pa og snakker om. Mediene bestemmer ikke nødvendigvis hva folk mener, men de bestemmer i stor grad hvilke saker folk mener noe om. Nar en sak far mye omtale i mediene, oppfatter publikum den som viktig.`,
    },
    {
      id: 'kk-5-1-example-2',
      type: 'example',
      title: 'Eksempel: Dagsordensfunksjonen i praksis',
      problem: 'Hvordan kan medienes dekning av en sak pavirke den politiske debatten?',
      solution: `Tenk deg at flere medier samtidig lager reportasjer om ventetider pa sykehus. Plutselig blir helsepolitikk et hovedtema i den offentlige debatten. Politikere ma ta stilling til saken, og velgerne vurderer partiene ut fra hva de lover om sykehusene.

Hadde mediene ikke skrevet om ventetidene, ville saken kanskje aldri blitt diskutert, selv om problemet var det samme. Slik setter mediene dagsordenen for hva samfunnet er opptatt av.`,
    },
    {
      id: 'kk-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        task: 'Forklar hva dagsordensfunksjonen innebærer, og gi et eksempel pa hvordan mediene kan pavirke hvilke saker folk er opptatt av.',
        hints: ['Tenk pa forskjellen mellom a pavirke hva folk tenker pa og hva folk mener.'],
        solution: 'Dagsordensfunksjonen innebærer at mediene pavirker hvilke saker folk tenker pa og diskuterer, uten nødvendigvis a bestemme hva folk mener om sakene. For eksempel kan stor mediedekning av klimaendringer gjøre at folk oppfatter klima som den viktigste politiske saken, mens lite dekning av eldreomsorgen kan gjøre at den saken far mindre oppmerksomhet i den offentlige debatten.',
      },
    },
    {
      id: 'kk-5-1-def-3',
      type: 'definition',
      title: 'Portvaktfunksjonen',
      content: `**Portvaktfunksjonen** (gatekeeping) handler om at redaksjoner velger ut hvilke saker som skal publiseres og hvordan de skal vinkles. Journalister og redaktører fungerer som portvakter som bestemmer hva som slipper gjennom til publikum. Denne utvelgelsen styres av nyhetskriterier som aktualitet, vesentlighet, nærhet, sensasjon og konflikt.`,
    },
    {
      id: 'kk-5-1-text-2',
      type: 'text',
      title: 'Mediene og offentligheten',
      content: `### Den offentlige sfæren

Filosofen Jurgen Habermas beskrev **offentligheten** som et rom der borgerne kan diskutere samfunnsspørsmal fritt. Mediene spiller en avgjørende rolle i denne offentligheten fordi de:

- **Informerer** borgerne om hva som skjer i samfunnet
- **Gransker** makthavere og avdekker maktmisbruk (vaktbikkjefunksjonen)
- **Skaper arenaer** for debatt og meningsutveksling
- **Gir stemme** til ulike grupper i samfunnet

Pressefrihet er derfor en grunnleggende forutsetning for et fungerende demokrati.`,
    },
    {
      id: 'kk-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-5-1-ex-3',
        number: '5.1.3',
        type: 'multiple-choice',
        task: 'Hvilken funksjon beskriver medienes rolle nar de avdekker korrupsjon og maktmisbruk?',
        options: [
          { id: 'a', text: 'Dagsordensfunksjonen', isCorrect: false },
          { id: 'b', text: 'Underholdningsfunksjonen', isCorrect: false },
          { id: 'c', text: 'Vaktbikkjefunksjonen', isCorrect: true },
          { id: 'd', text: 'Portvaktfunksjonen', isCorrect: false },
        ],
        solution: 'Vaktbikkjefunksjonen beskriver medienes oppgave med a granske makthavere og avdekke urett. Dette er en av de viktigste rollene mediene har i et demokrati, fordi det holder politikere og andre i maktposisjoner ansvarlige overfor folket.',
      },
    },
    {
      id: 'kk-5-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Massemedier** er kommunikasjonskanaler som nar ut til et stort publikum
- **Dagsordensfunksjonen** betyr at mediene pavirker hva folk tenker pa
- **Portvaktfunksjonen** handler om redaksjonenes utvelgelse av nyheter
- **Vaktbikkjefunksjonen** innebærer gransking av makthavere
- Mediene er avgjørende for den **offentlige debatten** og demokratiet`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        task: 'Diskuter hvordan portvaktfunksjonen har endret seg med fremveksten av sosiale medier. Har journalister fortsatt like stor makt til a bestemme hva folk far vite om?',
        hints: ['Tenk pa at alle na kan publisere innhold pa nett.'],
        solution: 'Tradisjonelt hadde redaksjonene eneste makt over hva som ble publisert. Med sosiale medier kan alle publisere innhold, og saker kan spres viralt uten at de har gatt gjennom en redaksjon. Dette betyr at portvaktfunksjonen er svekket, men journalistikken har fortsatt en viktig rolle i a kvalitetssikre og kontekstualisere informasjon. Samtidig har nye portvakter oppstatt i form av algoritmene til plattformer som Facebook og Google.',
      },
    },
    {
      id: 'kk-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        task: 'Velg en aktuell nyhetssak og analyser hvordan den dekkes av to ulike medier. Sammenlign vinkling, kildebruk og omfang. Hva forteller dette om medienes dagsordensfunksjon?',
        solution: 'Svaret vil variere etter valgt sak. Et godt svar viser at ulike medier kan vinkle den samme saken forskjellig, bruke ulike kilder og gi den ulik plass. Dette illustrerer at dagsordensfunksjonen ikke bare handler om hvilke saker som dekkes, men ogsa om hvordan de dekkes. Forskjellene kan skyldes redaksjonelle prioriteringer, malgruppetenkning og økonomi.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Massemedier', definition: 'Kommunikasjonskanaler som nar ut til et stort publikum, som aviser, TV, radio og nettmedier.' },
    { term: 'Dagsordensfunksjonen', definition: 'Medienes evne til a pavirke hva folk tenker pa og diskuterer.' },
    { term: 'Portvaktfunksjonen', definition: 'Redaksjonenes utvelgelse av hvilke saker som publiseres og hvordan de vinkles.' },
    { term: 'Vaktbikkjefunksjonen', definition: 'Medienes oppgave med a granske makthavere og avdekke maktmisbruk.' },
    { term: 'Offentligheten', definition: 'Et rom der borgere fritt kan diskutere samfunnsspørsmal, sentralt for demokratiet.' },
  ],
};

// ============================================================================
// Kapittel 5.2: Sosiale medier
// ============================================================================

export const CHAPTER_KOMKULT_1_5_2: TextbookChapter = {
  id: 'komkult-1-5-2',
  courseId: 'komkult-1',
  chapterNumber: '5.2',
  title: 'Sosiale medier',
  description: 'Plattformer, algoritmer, filterbobler, ekkokamre og selvpresentasjon i sosiale medier.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analysere medienes rolle i samfunnet og demokratiet',
    'vurdere kilder kritisk og identifisere falske nyheter',
  ],
  content: [
    {
      id: 'kk-5-2-intro',
      type: 'text',
      content: `## Sosiale medier

Sosiale medier har forandret maten vi kommuniserer pa. Plattformer som Instagram, TikTok, Snapchat og Facebook gir alle muligheten til a publisere innhold, dele meninger og delta i offentlig debatt. Men sosiale medier er ogsa preget av algoritmer som styrer hva vi ser, og mekanismer som kan forsterke bestemte synspunkter.

I dette kapittelet skal du laere:
- Hva som kjennetegner sosiale medier som kommunikasjonsform
- Hvordan algoritmer styrer innholdet du ser
- Hva filterbobler og ekkokamre er
- Hvordan vi presenterer oss selv pa sosiale medier`,
    },
    {
      id: 'kk-5-2-def-1',
      type: 'definition',
      title: 'Sosiale medier',
      content: `**Sosiale medier** er digitale plattformer der brukerne selv skaper, deler og interagerer med innhold. I motsetning til tradisjonelle massemedier er kommunikasjonen pa sosiale medier flerveis: alle kan være bade avsendere og mottakere. Eksempler er Instagram, TikTok, Snapchat, X (tidligere Twitter), Facebook og YouTube.`,
    },
    {
      id: 'kk-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Fra enveis til flerveis kommunikasjon',
      content: `I tradisjonelle medier sender NRK nyheter til millioner av seere uten at seerne kan svare direkte. Pa sosiale medier kan alle kommentere, dele og lage sine egne nyheter. En vanlig person kan legge ut en video pa TikTok som far millioner av visninger, uten a ha gatt gjennom noen redaksjon.

Denne endringen har demokratisert tilgangen til offentligheten, men har ogsa skapt utfordringer med kvalitetskontroll og spredning av usann informasjon.`,
    },
    {
      id: 'kk-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        task: 'Hva skiller sosiale medier fra tradisjonelle massemedier?',
        options: [
          { id: 'a', text: 'Sosiale medier har alltid høyere kvalitet pa innholdet', isCorrect: false },
          { id: 'b', text: 'Brukerne kan selv skape og dele innhold, og kommunikasjonen er flerveis', isCorrect: true },
          { id: 'c', text: 'Sosiale medier nar ut til færre mennesker', isCorrect: false },
          { id: 'd', text: 'Tradisjonelle medier bruker ikke internett', isCorrect: false },
        ],
        solution: 'Det viktigste skillet er at sosiale medier er flerveis: brukerne er bade avsendere og mottakere. I tradisjonelle medier er kommunikasjonen hovedsakelig enveis fra redaksjon til publikum.',
      },
    },
    {
      id: 'kk-5-2-def-2',
      type: 'definition',
      title: 'Algoritmer i sosiale medier',
      content: `**Algoritmer** i sosiale medier er automatiserte systemer som bestemmer hvilket innhold som vises til hver enkelt bruker. Algoritmene analyserer brukerens atferd (hva du liker, deler, kommenterer og ser pa) og viser mer av det som engasjerer deg. Malet er a holde deg lengst mulig pa plattformen.`,
    },
    {
      id: 'kk-5-2-example-2',
      type: 'example',
      title: 'Eksempel: Algoritmens pavirkning',
      problem: 'Hvordan kan en algoritme pavirke hva en bruker oppfatter som viktig?',
      solution: `La oss si at en bruker begynner a se pa videoer om treningsøvelser pa TikTok. Algoritmen registrerer interessen og viser stadig mer treningsinnhold. Snart er hele «For You»-feeden full av trening. Brukeren kan fa inntrykk av at trening er det alle er opptatt av, selv om feeden til vennen som liker matlaging ser helt annerledes ut.

Pa samme mate kan algoritmer forsterke politiske synspunkter: en bruker som klikker pa innlegg om innvandring, vil fa stadig mer av den typen innhold, uavhengig av om det representerer et balansert bilde.`,
    },
    {
      id: 'kk-5-2-def-3',
      type: 'definition',
      title: 'Filterboble og ekkokammer',
      content: `En **filterboble** oppstar nar algoritmer skaper et personlig tilpasset informasjonsunivers der brukeren hovedsakelig eksponeres for innhold som bekrefter egne synspunkter og interesser. Et **ekkokammer** er et beslektet fenomen der mennesker bare kommuniserer med likesinnede, slik at deres egne meninger forsterkes og ekkoes tilbake. Bade filterbobler og ekkokamre kan føre til polarisering og manglende forstaelse for andres perspektiver.`,
    },
    {
      id: 'kk-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-5-2-ex-2',
        number: '5.2.2',
        type: 'multiple-choice',
        task: 'Hva er en filterboble?',
        options: [
          { id: 'a', text: 'Et sosialt nettverk der alle brukere ser det samme innholdet', isCorrect: false },
          { id: 'b', text: 'Et algoritmedrevet informasjonsunivers tilpasset den enkelte bruker', isCorrect: true },
          { id: 'c', text: 'En funksjon som filtrerer bort upassende innhold', isCorrect: false },
          { id: 'd', text: 'En type annonseblokkerer', isCorrect: false },
        ],
        solution: 'En filterboble er et personlig tilpasset informasjonsunivers der algoritmer sørger for at brukeren hovedsakelig ser innhold som matcher egne interesser og synspunkter. Begrepet ble innført av Eli Pariser i 2011.',
      },
    },
    {
      id: 'kk-5-2-text-2',
      type: 'text',
      title: 'Selvpresentasjon i sosiale medier',
      content: `### Selvpresentasjon og identitet

Sosiologen Erving Goffman beskrev allerede pa 1950-tallet hvordan mennesker presenterer seg selv som skuespillere pa en scene. Pa sosiale medier er denne selvpresentasjonen svært bevisst:

- **Kuratert identitet:** Brukerne velger nøye hvilke bilder, tekster og historier de deler
- **Idealisert selvbilde:** Mange viser bare de beste øyeblikkene i livet
- **Sosialt press:** Likes, kommentarer og følgere fungerer som bekreftelse
- **Sammenligning:** Brukere sammenligner seg med andres kuraterte liv

Forskning viser at overforbruk av sosiale medier kan pavirke selvbilde og mental helse, særlig blant unge.`,
    },
    {
      id: 'kk-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom en filterboble og et ekkokammer. Gi et eksempel pa hver.',
        hints: ['Filterboble styres av teknologi, ekkokammer av sosial dynamikk.'],
        solution: 'En filterboble skapes av algoritmer som tilpasser innholdet til den enkelte bruker basert pa tidligere atferd. Eksempel: TikTok viser deg bare innhold om temaer du har vist interesse for. Et ekkokammer oppstar nar mennesker frivillig oppsøker likesinnede og unngår motstridende synspunkter. Eksempel: en politisk diskusjonsgruppe pa Facebook der alle medlemmene deler samme meninger, og kritiske røster utestenges. Hovedforskjellen er at filterboblen styres av teknologi, mens ekkokammeret i større grad er sosialt skapt.',
      },
    },
    {
      id: 'kk-5-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Sosiale medier** kjennetegnes av flerveis kommunikasjon der brukerne skaper innhold
- **Algoritmer** styrer hva du ser basert pa din tidligere atferd
- **Filterbobler** skapes av algoritmer og begrenser informasjonstilfanget
- **Ekkokamre** oppstar nar man bare kommuniserer med likesinnede
- **Selvpresentasjon** pa sosiale medier er bevisst og kuratert`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        task: 'Gjør et lite eksperiment: Logg inn pa to ulike sosiale medier-kontoer (eller sammenlign med en venn). Beskriv forskjellene i innholdet dere far opp, og forklar hvordan dette kan forklares med algoritmenes virkemater.',
        solution: 'Svaret vil variere, men et godt svar beskriver konkrete forskjeller i innholdet de to kontoene far opp og knytter dette til algoritmenes personalisering. Ulik historikk, ulike interesser og ulike sosiale nettverk gir ulike feeder. Eleven bør reflektere over at dette betyr at vi ikke ser det samme bildet av verden selv om vi bruker de samme plattformene.',
      },
    },
    {
      id: 'kk-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        task: 'Drøft om sosiale medier styrker eller svekker demokratiet. Bruk begrepene dagsordensfunksjon, filterboble og offentlighet i svaret.',
        hints: ['Vurder bade fordeler og ulemper.'],
        solution: 'Sosiale medier kan styrke demokratiet ved a gi flere stemmer tilgang til offentligheten og gjøre det mulig a sette dagsorden utenom de tradisjonelle medienes portvaktfunksjon. Eksempler er sosiale bevegelser som har spredd seg gjennom sosiale medier. Samtidig kan filterbobler og ekkokamre svekke demokratiet ved a polarisere den offentlige debatten og gjøre det vanskelig a fa et felles informasjonsgrunnlag. Et balansert svar anerkjenner bade den demokratiserende effekten og utfordringene med kvalitet, polarisering og desinformasjon.',
      },
    },
    {
      id: 'kk-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-5-2-ex-6',
        number: '5.2.6',
        type: 'multiple-choice',
        task: 'Hva beskriver begrepet "kuratert identitet" i sosiale medier?',
        options: [
          { id: 'a', text: 'At en redaktør bestemmer hva du publiserer', isCorrect: false },
          { id: 'b', text: 'At brukere bevisst velger ut og redigerer innholdet de deler om seg selv', isCorrect: true },
          { id: 'c', text: 'At algoritmer automatisk lager en profil av deg', isCorrect: false },
          { id: 'd', text: 'At alle profiler ser identiske ut', isCorrect: false },
        ],
        solution: 'Kuratert identitet betyr at brukere bevisst velger ut hvilke bilder, tekster og historier de deler om seg selv pa sosiale medier. Det handler om a presentere et idealisert bilde der man viser de beste øyeblikkene og skjuler det som ikke passer inn.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sosiale medier', definition: 'Digitale plattformer der brukerne selv skaper, deler og interagerer med innhold.' },
    { term: 'Algoritme', definition: 'Automatisert system som bestemmer hvilket innhold som vises til brukeren basert pa atferd.' },
    { term: 'Filterboble', definition: 'Personlig tilpasset informasjonsunivers skapt av algoritmer.' },
    { term: 'Ekkokammer', definition: 'Situasjon der man bare kommuniserer med likesinnede og egne meninger forsterkes.' },
    { term: 'Selvpresentasjon', definition: 'Bevisst fremstilling av seg selv, ofte idealisert, i sosiale medier.' },
  ],
};

// ============================================================================
// Kapittel 5.3: Digitale medier og konvergens
// ============================================================================

export const CHAPTER_KOMKULT_1_5_3: TextbookChapter = {
  id: 'komkult-1-5-3',
  courseId: 'komkult-1',
  chapterNumber: '5.3',
  title: 'Digitale medier og konvergens',
  description: 'Mediekonvergens, plattformøkonomi, brukermedvirkning og hvordan digitale medier forandrer mediebildet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere medienes rolle i samfunnet og demokratiet',
  ],
  content: [
    {
      id: 'kk-5-3-intro',
      type: 'text',
      content: `## Digitale medier og konvergens

Den digitale utviklingen har forandret medielandskapet fundamentalt. Tidligere var avis, radio og TV klart atskilte medier med ulike distribusjonsformer. I dag smelter disse sammen pa digitale plattformer. En nettavis inneholder tekst, bilder, video og podkast. En TV-kanal har app, nettside og sosiale medier-kontoer. Denne sammensmelting kalles mediekonvergens.

I dette kapittelet skal du laere:
- Hva mediekonvergens innebærer
- Hvordan plattformøkonomien fungerer
- Hva brukermedvirkning betyr for medieinnholdet
- Konsekvenser av digitaliseringen for mediebransjen`,
    },
    {
      id: 'kk-5-3-def-1',
      type: 'definition',
      title: 'Mediekonvergens',
      content: `**Mediekonvergens** betyr at ulike medieformer smelter sammen. Teknologisk konvergens innebærer at en og samme enhet (f.eks. smarttelefonen) kan brukes til a lese aviser, se TV, høre radio og kommunisere pa sosiale medier. Innholdskonvergens betyr at mediene blander sjangre og formater, slik at en nettavis ogsa har video og podkast.`,
    },
    {
      id: 'kk-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Smarttelefonen som konvergenspunkt',
      content: `For 20 ar siden trengte du en avis for nyheter, en radio for musikk, en TV for serier, en telefon for samtaler og et kamera for bilder. I dag gjør smarttelefonen alt dette og mer. Den er blitt et konvergenspunkt der alle medieformer møtes.

NRK er et godt eksempel: De produserer innhold for TV, radio, nett, apper og sosiale medier. Det samme innholdet tilpasses ulike plattformer. En nyhetssak kan starte som en tweet, bli til en nettartikkel, diskuteres i en podkast og vises i Dagsrevyen.`,
    },
    {
      id: 'kk-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        task: 'Hva betyr mediekonvergens?',
        options: [
          { id: 'a', text: 'At alle medier konkurrerer mot hverandre', isCorrect: false },
          { id: 'b', text: 'At ulike medieformer smelter sammen pa tvers av teknologi og innhold', isCorrect: true },
          { id: 'c', text: 'At det bare finnes ett medium igjen', isCorrect: false },
          { id: 'd', text: 'At papiravisene forsvinner', isCorrect: false },
        ],
        solution: 'Mediekonvergens betyr at ulike medieformer (tekst, lyd, bilde, video) smelter sammen pa tvers av teknologier og plattformer. Det handler bade om at enhetene kan brukes til alt (teknologisk konvergens) og at innholdet blander formater (innholdskonvergens).',
      },
    },
    {
      id: 'kk-5-3-def-2',
      type: 'definition',
      title: 'Plattformøkonomi',
      content: `**Plattformøkonomi** beskriver en forretningsmodell der digitale plattformer kobler sammen ulike brukergrupper. I mediesammenheng er plattformer som Google, Facebook og YouTube mellommenn som kobler innholdsprodusenter med publikum og annonsører. Plattformene tjener penger pa brukerdata og annonsesalg, uten nødvendigvis a produsere eget innhold.`,
    },
    {
      id: 'kk-5-3-example-2',
      type: 'example',
      title: 'Eksempel: YouTube som plattform',
      problem: 'Hvordan fungerer plattformøkonomien pa YouTube?',
      solution: `YouTube produserer ikke innhold selv, men tilbyr en plattform der brukerne laster opp videoer. YouTube-modellen kobler tre grupper:

1. **Innholdsskapere** som lager videoer (f.eks. norske YouTubere)
2. **Seere** som ser pa videoene
3. **Annonsører** som betaler for a vise reklame

YouTube far en andel av annonseinntektene, innholdsskaperne far resten. Jo mer tid seerne bruker pa plattformen, jo mer annonseinntekter genereres. Derfor er algoritmene designet for a holde seerne pa plattformen lengst mulig.`,
    },
    {
      id: 'kk-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        task: 'Forklar hva plattformøkonomi innebærer, og drøft hvordan denne forretningsmodellen kan pavirke medieinnholdet vi ser.',
        hints: ['Tenk pa hva plattformene tjener penger pa og hvordan det former innholdet.'],
        solution: 'Plattformøkonomi innebærer at digitale plattformer kobler innholdsskapere, brukere og annonsører. Plattformene tjener penger pa annonsering og brukerdata. Dette kan pavirke medieinnholdet fordi algoritmene er designet for a maksimere engasjement og tid brukt pa plattformen. Innhold som vekker sterke følelser, sjokkerer eller underholder far derfor ofte mer synlighet enn saklig og nyansert innhold. Klikkagn og sensasjonelt innhold kan bli prioritert over grundig journalistikk.',
      },
    },
    {
      id: 'kk-5-3-text-2',
      type: 'text',
      title: 'Brukermedvirkning',
      content: `### Brukermedvirkning og delingskultur

Digitaliseringen har gjort publikum til aktive deltakere i medieproduksjonen. Begrepet **prosument** (en sammenslaning av produsent og konsument) beskriver brukere som bade konsumerer og produserer medieinnhold.

**Former for brukermedvirkning:**
- Kommentarfelt under nettartikler
- Deling og spredning av innhold pa sosiale medier
- Borgerjournalistikk og øyevitnerapporter
- Brukergenererte anmeldelser og vurderinger
- Podkaster og YouTube-kanaler drevet av privatpersoner

Denne utviklingen har gitt flere stemmer tilgang til offentligheten, men reiser ogsa spørsmal om kvalitet, ansvar og troverdighet.`,
    },
    {
      id: 'kk-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-5-3-ex-3',
        number: '5.3.3',
        type: 'multiple-choice',
        task: 'Hva beskriver begrepet "prosument"?',
        options: [
          { id: 'a', text: 'En profesjonell mediekonsument', isCorrect: false },
          { id: 'b', text: 'En bruker som bade produserer og konsumerer medieinnhold', isCorrect: true },
          { id: 'c', text: 'En bedrift som selger medieprodukter', isCorrect: false },
          { id: 'd', text: 'En journalist som jobber frilanst', isCorrect: false },
        ],
        solution: 'Prosument er en sammenslaning av produsent og konsument. Begrepet beskriver at dagens mediebrukere ikke bare er passive mottakere, men ogsa aktivt skaper og deler innhold, for eksempel gjennom sosiale medier, blogger og podkaster.',
      },
    },
    {
      id: 'kk-5-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Mediekonvergens** betyr at ulike medieformer smelter sammen
- **Plattformøkonomien** kobler innholdsskapere, brukere og annonsører
- Algoritmene prioriterer engasjement og kan pavirke innholdskvaliteten
- **Prosumenter** er brukere som bade produserer og konsumerer innhold
- Digitaliseringen gir flere tilgang til offentligheten, men utfordrer kvalitetskontrollen`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        task: 'Velg en norsk mediebedrift (f.eks. NRK, VG, Aftenposten). Beskriv hvordan den har tilpasset seg mediekonvergensen ved a bruke flere plattformer og formater.',
        solution: 'Svaret vil variere etter valgt mediebedrift. Et godt svar beskriver konkret hvordan bedriften distribuerer innhold pa tvers av plattformer (nettside, app, sosiale medier, TV/radio, podkast) og hvordan de tilpasser formatet til hver plattform. For eksempel publiserer NRK nyhetssaker som tekst pa nrk.no, som innslag i Dagsrevyen, som diskusjoner i podkaster og som korte videoer pa Instagram og TikTok.',
      },
    },
    {
      id: 'kk-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper med at vanlige brukere kan publisere innhold pa lik linje med profesjonelle medier. Bruk begrepet prosument i svaret.',
        hints: ['Tenk pa bade tilgang til offentligheten og kvalitetskontroll.'],
        solution: 'Fordeler med at prosumenter kan publisere fritt er at flere stemmer far tilgang til offentligheten, at øyevitnerapporter kan supplere journalistikken, og at minoritetsperspektiver nar ut. Ulemper er at det ikke finnes noen kvalitetskontroll, at feilinformasjon kan spres raskt, og at det kan være vanskelig a skille pålitelig informasjon fra upålitelig. Et viktig poeng er at den tradisjonelle journalistikkens redaksjonelle prosesser fungerte som et kvalitetsfilter som mangler i brukergenerert innhold.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Mediekonvergens', definition: 'Sammensmelting av ulike medieformer pa tvers av teknologi og innhold.' },
    { term: 'Plattformøkonomi', definition: 'Forretningsmodell der digitale plattformer kobler innholdsskapere, brukere og annonsører.' },
    { term: 'Prosument', definition: 'Bruker som bade produserer og konsumerer medieinnhold.' },
    { term: 'Brukermedvirkning', definition: 'At publikum aktivt deltar i medieproduksjonen gjennom deling, kommentering og innholdsskaping.' },
  ],
};

// ============================================================================
// Kapittel 5.4: Medieinnhold og sjangre
// ============================================================================

export const CHAPTER_KOMKULT_1_5_4: TextbookChapter = {
  id: 'komkult-1-5-4',
  courseId: 'komkult-1',
  chapterNumber: '5.4',
  title: 'Medieinnhold og sjangre',
  description: 'Mediesjangre, underholdning, informasjon, reklame og propaganda som ulike former for medieinnhold.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere medienes rolle i samfunnet og demokratiet',
  ],
  content: [
    {
      id: 'kk-5-4-intro',
      type: 'text',
      content: `## Medieinnhold og sjangre

Alt innhold i mediene hører til en eller flere sjangre. En sjanger er et sett med konvensjoner og forventninger som bade avsendere og mottakere kjenner. Nar du apner en nettavis, skiller du raskt mellom nyhetsartikler, kommentarer, anmeldelser og annonser. Denne sjangerforstaelsen hjelper deg a tolke innholdet riktig.

I dette kapittelet skal du laere:
- Hva mediesjangre er og hvorfor de er viktige
- Forskjellen mellom informasjon og underholdning
- Kjennetegn ved reklame og propaganda
- Hvordan sjangre kan blandes og utfordre mottakerens forstaelse`,
    },
    {
      id: 'kk-5-4-def-1',
      type: 'definition',
      title: 'Mediesjanger',
      content: `En **mediesjanger** er en kategori av medieinnhold med bestemte kjennetegn, konvensjoner og formater. Sjangre gir mottakeren forventninger om hva slags innhold det dreier seg om, og hvordan det bør tolkes. Eksempler pa mediesjangre er nyhetsreportasjen, kronikken, dokumentaren, reklameannonsen, komedieserien og podkastintervjuet.`,
    },
    {
      id: 'kk-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Sjangerkjennetegn i nyhetsmedier',
      content: `En **nyhetsartikkel** følger bestemte konvensjoner: den har en overskrift som oppsummerer saken, en ingress som gir hovedpoengene, og en brødtekst med detaljer. Journalisten skal være nøytral og balansert.

En **kommentar** eller **leder** er derimot meningsbærende. Her argumenterer skribenten for et synspunkt. Avisen merker tydelig at dette er en meningsartikkel.

Et problem oppstar nar leseren ikke gjenkjenner sjangeren og tolker en meningsartikkel som en nøytral nyhetsartikkel, eller omvendt.`,
    },
    {
      id: 'kk-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        task: 'Hvorfor er det viktig a kunne identifisere mediesjangre?',
        options: [
          { id: 'a', text: 'Fordi det gjør det lettere a finne underholdning', isCorrect: false },
          { id: 'b', text: 'Fordi sjangeren pavirker hvordan innholdet bør tolkes og vurderes', isCorrect: true },
          { id: 'c', text: 'Fordi bare noen sjangre er lovlige', isCorrect: false },
          { id: 'd', text: 'Fordi det er pensum pa eksamen', isCorrect: false },
        ],
        solution: 'Sjangerforstaelse er viktig fordi sjangeren pavirker hvordan vi bør tolke og vurdere innholdet. En nyhetsartikkel forventes a være nøytral og faktabasert, mens en kommentar er meningsbærende. Uten sjangerbevissthet kan vi feiltolke hensikten med innholdet.',
      },
    },
    {
      id: 'kk-5-4-text-2',
      type: 'text',
      title: 'Informasjon og underholdning',
      content: `### Fra informasjon til underholdning

Medieinnhold kan plasseres pa en skala fra ren informasjon til ren underholdning:

**Informasjonssjangre:**
- Nyhetsartikler og nyhetsinnslag
- Dokumentarer og reportasjer
- Faktaprogrammer og populærvitenskap

**Underholdningssjangre:**
- Serier og filmer
- Musikkvideoer og underholdningsshow
- Spill og interaktivt innhold

**Blandingssjangre (infotainment):**
- Dokusaper (dokumentar + underholdning)
- Morgensendinger (nyheter + underholdning)
- Edutainment (utdanning + underholdning)

Grensen mellom informasjon og underholdning blir stadig mer utydelig. Dette kalles **infotainment** og kan gjøre informasjon mer tilgjengelig, men det kan ogsa føre til at underholdningsverdien prioriteres over innholdets kvalitet.`,
    },
    {
      id: 'kk-5-4-def-2',
      type: 'definition',
      title: 'Reklame',
      content: `**Reklame** er betalt kommunikasjon der en avsender fremmer et produkt, en tjeneste eller et budskap. Reklamen har som mal a pavirke mottakerens holdninger og handlinger, ofte gjennom emosjonelle virkemidler, gjentakelse og assosiasjon. I digitale medier kan reklamen være målrettet mot bestemte brukergrupper basert pa data om deres atferd og interesser.`,
    },
    {
      id: 'kk-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Innholdsmarkedsføring og sponset innhold',
      problem: 'Hva er forskjellen mellom en vanlig artikkel og sponset innhold?',
      solution: `Sponset innhold (ogsa kalt native advertising) er reklame som er utformet slik at det ligner redaksjonelt innhold. Et eksempel er en «artikkel» pa en nettavis om de beste reisedestinasjonene som egentlig er betalt av et reisebyra.

Forskjellen fra en vanlig artikkel er:
- Avsenderen har betalt for publiseringen
- Hensikten er a selge, ikke a informere nøytralt
- Innholdet er merket med «annonsørinnhold» eller «sponset», men dette er ikke alltid tydelig

Problemet er at leserne kan forveksle sponset innhold med uavhengig journalistikk.`,
    },
    {
      id: 'kk-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        task: 'Forklar hva propaganda er, og nevn tre virkemidler som brukes i propaganda.',
        hints: ['Tenk pa historiske og moderne eksempler.'],
        solution: 'Propaganda er systematisk kommunikasjon som har som mal a pavirke folks holdninger og handlinger i en bestemt retning, ofte gjennom ensidige eller villedende fremstillinger. Tre vanlige virkemidler er: 1) Forenkling og slagord - komplekse spørsmal reduseres til enkle budskap. 2) Appellering til følelser - bruk av frykt, sinne eller stolthet i stedet for saklig argumentasjon. 3) Demonisering av motstandere - fienden fremstilles som ond eller farlig for a skape samhold i egen gruppe.',
      },
    },
    {
      id: 'kk-5-4-def-3',
      type: 'definition',
      title: 'Propaganda',
      content: `**Propaganda** er systematisk kommunikasjon med mal om a pavirke folks meninger, holdninger og handlinger i en bestemt retning. I motsetning til balansert informasjon er propaganda ensidig og bruker ofte emosjonelle, forenklende og villedende virkemidler. Propaganda kan forekomme i bade politisk, kommersiell og ideologisk sammenheng.`,
    },
    {
      id: 'kk-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-5-4-ex-3',
        number: '5.4.3',
        type: 'multiple-choice',
        task: 'Hva er infotainment?',
        options: [
          { id: 'a', text: 'Innhold som kun er ment som informasjon', isCorrect: false },
          { id: 'b', text: 'En blanding av informasjon og underholdning', isCorrect: true },
          { id: 'c', text: 'Et annet ord for nyhetsformidling', isCorrect: false },
          { id: 'd', text: 'Reklame forkledt som nyheter', isCorrect: false },
        ],
        solution: 'Infotainment er en sammenslaning av information og entertainment. Det beskriver medieinnhold som blander informasjon og underholdning, for eksempel dokusaper, morgensendinger og populærvitenskapelige programmer. Det kan gjøre informasjon mer tilgjengelig, men kan ogsa føre til at underholdningsverdien prioriteres over nøyaktighet.',
      },
    },
    {
      id: 'kk-5-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Mediesjangre** er kategorier med bestemte kjennetegn som pavirker tolkningen
- Medieinnhold spenner fra ren **informasjon** til ren **underholdning**
- **Infotainment** blander informasjon og underholdning
- **Reklame** er betalt kommunikasjon med mal om a pavirke holdninger og kjøpsatferd
- **Propaganda** er ensidig, systematisk kommunikasjon som pavirker folks meninger
- Sjangerblandinger kan gjøre det vanskelig for mottakeren a vurdere innholdet`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        task: 'Finn et eksempel pa sponset innhold (native advertising) i en norsk nettavis. Beskriv hvordan det er merket, og vurder om merkingen er tydelig nok for en vanlig leser.',
        solution: 'Svaret vil variere etter valgt eksempel. Et godt svar identifiserer sponset innhold, beskriver hvordan det er merket (f.eks. «annonsørinnhold», «i samarbeid med»), vurderer om merkingen er tydelig nok og reflekterer over konsekvensene nar grensen mellom redaksjonelt innhold og reklame viskes ut. Eleven bør ogsa nevne Vær Varsom-plakatens krav om tydelig merking av reklame.',
      },
    },
    {
      id: 'kk-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        task: 'Sammenlign en nyhetsartikkel og en kommentar om det samme temaet fra en norsk avis. Hvilke sjangerforskjeller finner du i sprake, vinkling og bruk av kilder?',
        hints: ['Legg merke til ulik bruk av pastandsform og argumentasjon.'],
        solution: 'Et godt svar viser at nyhetsartikkelen bruker nøytralt sprak, flere kilder og balansert fremstilling, mens kommentaren bruker argumenterende sprak, personlige vurderinger og tar tydelig stilling. Nyhetsartikkelen presenterer fakta og sitater fra ulike parter, mens kommentaren drøfter og mener noe om saken. Eleven bør ogsa reflektere over at bade sjangrer har en funksjon i mediene: nyheten informerer, kommentaren bidrar til meningsdannelse.',
      },
    },
    {
      id: 'kk-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-5-4-ex-6',
        number: '5.4.6',
        type: 'multiple-choice',
        task: 'Hva kjennetegner sponset innhold (native advertising)?',
        options: [
          { id: 'a', text: 'Det er alltid merket som reklame og har tradisjonelt annonseformat', isCorrect: false },
          { id: 'b', text: 'Det er betalt innhold som ligner redaksjonelt innhold i utseende og format', isCorrect: true },
          { id: 'c', text: 'Det er gratis innhold som produseres av leserne selv', isCorrect: false },
          { id: 'd', text: 'Det er nyhetsartikler om sponsorer', isCorrect: false },
        ],
        solution: 'Sponset innhold er betalt innhold som er utformet slik at det ligner redaksjonelt innhold i utseende, format og tone. Det skal merkes tydelig, men merkingen er ikke alltid iøynefallende. Utfordringen er at lesere kan forveksle det med uavhengig journalistikk.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Mediesjanger', definition: 'Kategori av medieinnhold med bestemte kjennetegn, konvensjoner og formater.' },
    { term: 'Infotainment', definition: 'Blanding av informasjon og underholdning i medieinnhold.' },
    { term: 'Reklame', definition: 'Betalt kommunikasjon som fremmer et produkt, en tjeneste eller et budskap.' },
    { term: 'Propaganda', definition: 'Systematisk, ensidig kommunikasjon som søker a pavirke folks meninger og handlinger.' },
    { term: 'Sponset innhold', definition: 'Betalt innhold utformet for a ligne redaksjonelt innhold (native advertising).' },
  ],
};

// ============================================================================
// Kapittel 5.5: Kildekritikk og falske nyheter
// ============================================================================

export const CHAPTER_KOMKULT_1_5_5: TextbookChapter = {
  id: 'komkult-1-5-5',
  courseId: 'komkult-1',
  chapterNumber: '5.5',
  title: 'Kildekritikk og falske nyheter',
  description: 'Kildekritiske prinsipper, desinformasjon, misinformasjon, faktasjekk og verktøy for a vurdere troverdigheten til medieinnhold.',
  estimatedMinutes: 24,
  competenceGoals: [
    'vurdere kilder kritisk og identifisere falske nyheter',
  ],
  content: [
    {
      id: 'kk-5-5-intro',
      type: 'text',
      content: `## Kildekritikk og falske nyheter

I en tid med informasjonsoverflod er evnen til a vurdere kilder kritisk viktigere enn noensinne. Hvem star bak informasjonen? Hva er hensikten? Er opplysningene dokumenterbare? Disse spørsmalene er kjernen i kildekritikk, og de er avgjørende for a skille pålitelig informasjon fra feilinformasjon og bevisst villedning.

I dette kapittelet skal du laere:
- Hva kildekritikk er og hvilke prinsipper som ligger til grunn
- Forskjellen mellom desinformasjon og misinformasjon
- Hva falske nyheter er og hvordan de spres
- Hvordan du kan faktasjekke informasjon`,
    },
    {
      id: 'kk-5-5-def-1',
      type: 'definition',
      title: 'Kildekritikk',
      content: `**Kildekritikk** er en systematisk metode for a vurdere troverdigheten og påliteligheten til informasjon og informasjonskilder. De grunnleggende kildekritiske prinsippene er: (1) **Opphav** - hvem star bak informasjonen? (2) **Hensikt** - hvorfor er informasjonen publisert? (3) **Aktualitet** - nar ble informasjonen publisert? (4) **Dokumenterbarhet** - kan opplysningene bekreftes av andre kilder? (5) **Tendens** - er fremstillingen balansert eller ensidig?`,
    },
    {
      id: 'kk-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Kildekritisk analyse',
      problem: 'Du finner en artikkel pa nett som hevder at en bestemt kosttilskudd kurerer depresjon. Hvordan vurderer du kilden?',
      solution: `Kildekritisk analyse:

1. **Opphav:** Hvem har skrevet artikkelen? Er det en lege, forsker eller noen uten relevant kompetanse? Hvem eier nettsiden?
2. **Hensikt:** Forsøker nettsiden a selge kosttilskuddet? Er det en annonse forkledt som informasjon?
3. **Aktualitet:** Nar ble artikkelen publisert? Er forskningen oppdatert?
4. **Dokumenterbarhet:** Lenker artikkelen til vitenskapelige studier? Kan du finne bekreftelse fra uavhengige, fagfellevurderte kilder?
5. **Tendens:** Presenteres bare positive sider? Nevnes bivirkninger eller begrensninger?

Konklusjon: Dersom artikkelen er publisert pa en nettside som selger produktet, mangler vitenskapelige referanser og bare presenterer positive sider, bør du være svært skeptisk.`,
    },
    {
      id: 'kk-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        task: 'Hvilke av disse er et kildekritisk prinsipp?',
        options: [
          { id: 'a', text: 'Popularitet - hvor mange har lest artikkelen', isCorrect: false },
          { id: 'b', text: 'Opphav - hvem star bak informasjonen', isCorrect: true },
          { id: 'c', text: 'Lengde - hvor lang artikkelen er', isCorrect: false },
          { id: 'd', text: 'Estetikk - hvor pen nettsiden ser ut', isCorrect: false },
        ],
        solution: 'Opphav er et sentralt kildekritisk prinsipp. Det handler om a vurdere hvem som star bak informasjonen, hvilken kompetanse de har og om de har egeninteresser i saken. Popularitet, lengde og estetikk er ikke pålitelige indikatorer pa kvalitet.',
      },
    },
    {
      id: 'kk-5-5-def-2',
      type: 'definition',
      title: 'Desinformasjon og misinformasjon',
      content: `**Desinformasjon** er bevisst falsk eller villedende informasjon som spres med hensikt a lure, manipulere eller skade. **Misinformasjon** er falsk eller unøyaktig informasjon som spres uten at avsenderen vet at den er feil. Forskjellen ligger altsai i intensjonen: desinformasjon er bevisst løgn, misinformasjon er ufrivillig feilinformasjon.`,
    },
    {
      id: 'kk-5-5-example-2',
      type: 'example',
      title: 'Eksempel: Desinformasjon vs. misinformasjon',
      content: `**Desinformasjon:** En statseid mediekanal publiserer bevisst falske nyheter om et annet land for a svekke tilliten til landets regjering. Avsenderen vet at informasjonen er usann og har en politisk hensikt.

**Misinformasjon:** En bestemor deler en artikkel pa Facebook om at mobilstraling forårsaker kreft. Hun tror artikkelen er sann og vil advare familien. Informasjonen er feil, men bestemoren har ingen intensjon om a lure noen.

I bade tilfeller er resultatet at feilinformasjon spres, men intensjonen er helt forskjellig.`,
    },
    {
      id: 'kk-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-5-5-ex-2',
        number: '5.5.2',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom desinformasjon og misinformasjon?',
        options: [
          { id: 'a', text: 'Desinformasjon spres pa nettet, misinformasjon spres muntlig', isCorrect: false },
          { id: 'b', text: 'Desinformasjon er bevisst villedende, misinformasjon er utilsiktet feil', isCorrect: true },
          { id: 'c', text: 'Misinformasjon er farligere enn desinformasjon', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell mellom dem', isCorrect: false },
        ],
        solution: 'Hovedforskjellen er intensjonen. Desinformasjon er falsk informasjon som bevisst spres for a villede eller manipulere. Misinformasjon er falsk informasjon som spres uten at avsenderen vet at den er feil. Bade er skadelig, men avsenderens hensikt er forskjellig.',
      },
    },
    {
      id: 'kk-5-5-text-2',
      type: 'text',
      title: 'Falske nyheter',
      content: `### Falske nyheter og hvordan de spres

**Falske nyheter** er innhold som bevisst etterligner nyhetsformatet, men som inneholder usann eller villedende informasjon. Falske nyheter kan spres av ulike grunner:

- **Politisk pavirkning:** Ønske om a pavirke valg eller opinion
- **Økonomisk vinning:** Klikk genererer annonseinntekter
- **Ideologisk motivasjon:** Fremme et bestemt verdensbilde
- **Underholdning:** Satire som feiltolkes som ekte nyheter

**Hvorfor spres falske nyheter sa fort?**
- Algoritmene prioriterer engasjerende innhold
- Sjokkerende og emosjonelt innhold deles oftere
- Mange deler uten a lese mer enn overskriften
- Bekreftelsestendens: vi tror lettere pa det som bekrefter det vi allerede mener`,
    },
    {
      id: 'kk-5-5-def-3',
      type: 'definition',
      title: 'Faktasjekk',
      content: `**Faktasjekk** er en journalistisk og kildekritisk metode for a verifisere pastandar, sitater og opplysninger. Faktasjekking innebærer a spore opplysningene tilbake til opprinnelig kilde, sammenligne med andre kilder og vurdere dokumentasjonen. I Norge driver blant annet Faktisk.no systematisk faktasjekk av pastandar i mediene og offentlig debatt.`,
    },
    {
      id: 'kk-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-5-5-ex-3',
        number: '5.5.3',
        type: 'classic',
        task: 'Beskriv tre konkrete strategier du kan bruke for a vurdere om en nyhet du ser pa sosiale medier er sann.',
        hints: ['Tenk pa kildekritiske prinsipper og verktøy som finnes.'],
        solution: 'Tre strategier: 1) Sjekk kilden - hvem har publisert innholdet? Er det et troverdig nyhetsorgan eller en ukjent konto? Sjekk om andre seriøse medier dekker den samme saken. 2) Les mer enn overskriften - overskrifter kan være villedende. Les hele artikkelen og vurder om innholdet stemmer med overskriften. 3) Bruk faktasjekkingsnettsteder som Faktisk.no eller Snopes.com for a se om pastandene allerede er verifisert eller avkreftet.',
      },
    },
    {
      id: 'kk-5-5-tip-1',
      type: 'tip',
      title: 'Tips: SIFT-metoden',
      content: `**SIFT** er en enkel metode for a vurdere informasjon pa nett:
- **S** - Stop: Stopp opp og tenk før du deler
- **I** - Investigate the source: Undersøk hvem som star bak
- **F** - Find better coverage: Let etter bedre dekning av saken i andre kilder
- **T** - Trace claims: Spor pastandene tilbake til opprinnelig kilde`,
    },
    {
      id: 'kk-5-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Kildekritikk** handler om a vurdere opphav, hensikt, aktualitet, dokumenterbarhet og tendens
- **Desinformasjon** er bevisst falsk informasjon, **misinformasjon** er utilsiktet feil
- **Falske nyheter** etterligner nyhetsformatet, men inneholder usann informasjon
- Algoritmene og bekreftelsestendensen bidrar til at feilinformasjon spres raskt
- **Faktasjekk** og kildekritisk metode er verktøy for a vurdere informasjon
- SIFT-metoden gir en enkel sjekkliste for a vurdere kilder pa nett`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        task: 'Bruk SIFT-metoden pa en nyhetssak du finner pa sosiale medier. Dokumenter hvert steg og vurder om nyhetssaken er troverdig.',
        solution: 'Svaret vil variere etter valgt sak. Et godt svar dokumenterer alle fire steg: Stop (refleksjon over egne fordommer), Investigate (undersøkelse av hvem som star bak), Find better coverage (sammenligning med andre kilder) og Trace claims (sporing av pastandene til originalkilde). Konklusjonen bør være en begrunnet vurdering av troverdigheten basert pa de kildekritiske prinsippene.',
      },
    },
    {
      id: 'kk-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        task: 'Diskuter hvorfor falske nyheter spres raskere enn ekte nyheter pa sosiale medier. Bruk begrepene algoritmer, bekreftelsestendens og emosjonelt innhold i svaret.',
        hints: ['Tenk pa hva som far folk til a dele innhold.'],
        solution: 'Falske nyheter spres ofte raskere fordi de er designet for a vekke sterke følelser (sinne, frykt, overraskelse), og emosjonelt innhold far mer engasjement og deling. Algoritmene forsterker dette ved a prioritere innhold med høyt engasjement, uavhengig av om det er sant. Bekreftelsestendensen gjør at folk er tilbøyelige til a dele innhold som bekrefter det de allerede tror, uten a sjekke om det stemmer. I tillegg er falske nyheter ofte enklere og mer dramatiske enn nyanserte, ekte nyheter, noe som gjør dem lettere a huske og dele.',
      },
    },
    {
      id: 'kk-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-5-5-ex-6',
        number: '5.5.6',
        type: 'multiple-choice',
        task: 'Hva star F for i SIFT-metoden?',
        options: [
          { id: 'a', text: 'Fact-check the claims', isCorrect: false },
          { id: 'b', text: 'Find better coverage', isCorrect: true },
          { id: 'c', text: 'Filter out bias', isCorrect: false },
          { id: 'd', text: 'Follow the money', isCorrect: false },
        ],
        solution: 'F i SIFT star for "Find better coverage", altsai a finne bedre dekning av saken i andre kilder. Dette innebærer a søke etter den samme saken i anerkjente nyhetsmedier og fagkilder for a fa et bredere og mer pålitelig bilde.',
      },
    },
    {
      id: 'kk-5-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kk-5-5-ex-7',
        number: '5.5.7',
        type: 'classic',
        task: 'Drøft hvem som har ansvar for a bekjempe falske nyheter: plattformene, myndighetene, mediene eller den enkelte bruker? Begrunn svaret.',
        solution: 'Et godt svar argumenterer for at ansvaret er delt. Plattformene har ansvar for a begrense spredning av desinformasjon gjennom moderering og algoritmejusteringer. Myndighetene har ansvar for a sikre lovverk og utdanning. Mediene har ansvar for a drive kvalitetsjournalistikk og faktasjekk. Den enkelte bruker har ansvar for a tenke kildekritisk og ikke dele usann informasjon videre. Et særlig godt svar drøfter ogsa utfordringene med hvert ansvarsomrade, som ytringsfrihetsdilemmaer ved plattformregulering og skoleringsbehov blant innbyggere i alle aldre.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kildekritikk', definition: 'Systematisk metode for a vurdere troverdigheten til informasjon og kilder.' },
    { term: 'Desinformasjon', definition: 'Bevisst falsk eller villedende informasjon som spres med hensikt a lure.' },
    { term: 'Misinformasjon', definition: 'Falsk informasjon som spres uten at avsenderen vet at den er feil.' },
    { term: 'Falske nyheter', definition: 'Innhold som etterligner nyhetsformatet, men inneholder usann informasjon.' },
    { term: 'Faktasjekk', definition: 'Journalistisk metode for a verifisere pastandar og opplysninger.' },
    { term: 'SIFT-metoden', definition: 'Kildekritisk metode: Stop, Investigate, Find better coverage, Trace claims.' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT_1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT_1_5_1,
  CHAPTER_KOMKULT_1_5_2,
  CHAPTER_KOMKULT_1_5_3,
  CHAPTER_KOMKULT_1_5_4,
  CHAPTER_KOMKULT_1_5_5,
];
