/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 1 (VG2) - Del 3: Kultur og identitet
 *
 * Kapittel 3.1–3.5
 *
 * LK20-kompetansemål:
 * - gjøre rede for kulturbegrepet og kulturelle verdier og normer
 * - drøfte sammenhengen mellom kultur, identitet og kommunikasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Hva er kultur?
// ============================================================================

export const CHAPTER_KOMKULT_1_3_1: TextbookChapter = {
  id: 'komkult-1-3-1',
  courseId: 'komkult-1',
  chapterNumber: '3.1',
  title: 'Hva er kultur?',
  description: 'En innføring i kulturbegrepet, forskjellen mellom utvidet og smal kulturdefinisjon, og ulike kulturuttrykk i samfunnet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for kulturbegrepet og kulturelle verdier og normer',
    'drøfte ulike forståelser av kultur og kulturuttrykk',
  ],
  keyTerms: [
    { term: 'Kultur', definition: 'De felles verdier, normer, kunnskaper, tradisjoner og levemåter som kjennetegner en gruppe mennesker.' },
    { term: 'Utvidet kulturdefinisjon', definition: 'Kultur som hele levemåten til en gruppe, inkludert verdier, vaner, skikker og hverdagspraksis.' },
    { term: 'Smal kulturdefinisjon', definition: 'Kultur forstått som kunstneriske og åndelige uttrykk, som musikk, litteratur, teater og bildekunst.' },
    { term: 'Kulturuttrykk', definition: 'Konkrete uttrykk for kultur, som mat, klær, musikk, arkitektur og ritualer.' },
    { term: 'Materiell kultur', definition: 'Fysiske gjenstander og produkter som mennesker lager, for eksempel bygninger, klær og teknologi.' },
    { term: 'Immateriell kultur', definition: 'Ikke-fysiske deler av kulturen, som verdier, normer, språk, tradisjoner og trosforestillinger.' },
  ],
  content: [
    {
      id: 'kk-3-1-intro',
      type: 'text',
      content: `## Hva mener vi med kultur?

Ordet «kultur» brukes overalt — i aviser, på skolen, i politiske debatter og i hverdagssamtaler. Men hva betyr det egentlig? De fleste har en intuitiv forståelse av begrepet, men det er langt mer sammensatt enn vi kanskje tror.

I dette kapittelet skal du lære:
- Hva kultur betyr i vid og snever forstand
- Forskjellen mellom utvidet og smal kulturdefinisjon
- Ulike typer kulturuttrykk
- Hvordan skille mellom materiell og immateriell kultur`,
    },
    {
      id: 'kk-3-1-def-1',
      type: 'definition',
      title: 'Kultur (utvidet definisjon)',
      content: `**Utvidet kulturdefinisjon:** Kultur er hele levemåten til en gruppe mennesker. Det omfatter verdier, normer, skikker, tradisjoner, språk, mat, klær, ritualer og alle andre sider ved menneskers felles liv.

Denne definisjonen bygger på antropologen Edward B. Tylors klassiske formulering fra 1871: Kultur er «det komplekse hele som inkluderer kunnskap, tro, kunst, moral, lover, skikker og alle andre evner og vaner mennesket har tilegnet seg som medlem av samfunnet.»`,
    },
    {
      id: 'kk-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Utvidet kultur i praksis',
      problem: 'Hvordan kan vi se den utvidede kulturdefinisjonen i norsk hverdag?',
      solution: `Dersom vi bruker den utvidede definisjonen, er norsk kultur mye mer enn bare kunst og musikk. Det inkluderer:

- **Matvaner:** Brunost på brødskiva, taco på fredager, pinnekjøtt til jul
- **Sosiale normer:** Janteloven, lik rett til utdanning, dugnadstradisjonen
- **Språk og kommunikasjon:** Direkte kommunikasjonsstil, bruk av «du» til alle
- **Tidsvaner:** Punktlighet, kort lunsj, tidlig middag
- **Friluftsliv:** Søndagstur i marka, hyttekultur, «ut på tur, aldri sur»

Alt dette er kulturuttrykk som sier noe om verdier og levemåte i Norge.`,
    },
    {
      id: 'kk-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner den utvidede kulturdefinisjonen?',
        options: [
          { id: 'a', text: 'Kultur er hele levemåten til en gruppe mennesker', isCorrect: true },
          { id: 'b', text: 'Kultur er bare kunst, musikk og litteratur', isCorrect: false },
          { id: 'c', text: 'Kultur er det samme som religion', isCorrect: false },
          { id: 'd', text: 'Kultur handler bare om språk og tradisjon', isCorrect: false },
        ],
        hints: ['Tenk på ordet «utvidet» — hva utvider vi definisjonen til å gjelde?'],
        solution: 'Den utvidede kulturdefinisjonen omfatter hele levemåten til en gruppe mennesker: verdier, normer, skikker, språk, mat, klær og alt annet som preger gruppens felles liv.',
      },
    },
    {
      id: 'kk-3-1-def-2',
      type: 'definition',
      title: 'Kultur (smal definisjon)',
      content: `**Smal kulturdefinisjon:** Kultur forstått som kunstneriske og åndelige uttrykk. Dette inkluderer litteratur, musikk, teater, bildekunst, film, dans og andre estetiske uttrykksformer.

Når vi snakker om «kulturtilbud» i en by, «kulturbudsjettet» i statsbudsjettet eller «kulturskolen», bruker vi ofte denne smale forståelsen.`,
    },
    {
      id: 'kk-3-1-text-1',
      type: 'text',
      content: `### Materiell og immateriell kultur

En annen måte å dele inn kultur på er å skille mellom det vi kan ta på og det vi ikke kan ta på.

**Materiell kultur** er fysiske gjenstander som mennesker lager og bruker:
- Bygninger og arkitektur (stavkirker, moskeer, skyskrapere)
- Klær og mote (bunad, hijab, sneakers)
- Teknologi (smarttelefoner, biler, verktøy)
- Mat og drikke (ingredienser, oppskrifter, serveringsmåter)

**Immateriell kultur** er de ikke-fysiske sidene:
- Verdier og normer (hva vi anser som rett og galt)
- Språk og kommunikasjonsmønstre
- Tradisjoner og ritualer (17. mai-feiring, jul, id)
- Trosforestillinger og verdenssyn
- Kunnskap og fortellinger

Materiell og immateriell kultur henger tett sammen. En bunad (materiell) bærer med seg tradisjoner, identitet og tilhørighet (immateriell).`,
    },
    {
      id: 'kk-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Materiell og immateriell kultur i en moské',
      problem: 'Hvordan kan vi se sammenhengen mellom materiell og immateriell kultur i en moské?',
      solution: `**Materiell kultur:**
- Bygningen med kuppel og minaret
- Bønneteppene og dekorasjonene
- Arabisk kalligrafi på veggene

**Immateriell kultur:**
- Bønneritualet fem ganger daglig
- Verdier som gjestfrihet og fellesskap
- Religiøse fortellinger og lærdom
- Normer for oppførsel i hellige rom

**Sammenhengen:** De fysiske gjenstandene (materiell) er uttrykk for troen, verdiene og tradisjonene (immateriell). Kalligrafien på veggen er ikke bare dekorasjon — den formidler religiøse tekster og verdier.`,
    },
    {
      id: 'kk-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av disse er et eksempel på immateriell kultur?',
        options: [
          { id: 'a', text: 'Tradisjonen med å gå i 17. mai-tog', isCorrect: true },
          { id: 'b', text: 'En bunad fra Hardanger', isCorrect: false },
          { id: 'c', text: 'En stavkirke', isCorrect: false },
          { id: 'd', text: 'Et norsk flagg', isCorrect: false },
        ],
        hints: ['Immateriell kultur er det vi ikke kan ta på — praksiser, verdier og tradisjoner.'],
        solution: 'Tradisjonen med å gå i 17. mai-tog er immateriell kultur — det er en praksis og tradisjon. Bunaden, stavkirken og flagget er materielle kulturuttrykk (fysiske gjenstander), selv om de også bærer med seg immateriell betydning.',
      },
    },
    {
      id: 'kk-3-1-text-2',
      type: 'text',
      content: `### Kulturuttrykk i endring

Kultur er ikke statisk — den endrer seg hele tiden. Nye kulturuttrykk oppstår, og gamle forsvinner eller forandres. Globalisering, migrasjon og teknologi bidrar til at kulturer påvirker hverandre stadig raskere.

**Eksempler på kulturelle endringer i Norge:**
- Taco-fredagen er blitt en ny norsk tradisjon, påvirket av meksikansk matkultur
- Sosiale medier har skapt nye kommunikasjonsformer og normer
- Halloween har gått fra å være en ukjent tradisjon til å bli vanlig for norske barn
- Norsk hip-hop kombinerer amerikanske musikkuttrykk med norsk språk og virkelighet

Det betyr ikke at kulturen blir «utvannet» — den utvikler seg ved å ta opp nye impulser og gjøre dem til sine egne.`,
    },
    {
      id: 'kk-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre eksempler på kulturuttrykk fra din egen hverdag. For hvert eksempel: Forklar om det er materiell eller immateriell kultur, og om det tilhører den utvidede eller den smale kulturdefinisjonen.',
        hints: ['Tenk på mat, klær, musikk, vaner, tradisjoner eller sosiale medier.'],
        solution: 'Et godt svar beskriver tre konkrete eksempler og kategoriserer dem riktig. For eksempel: 1) Å spise middag kl. 17 — immateriell kultur, utvidet definisjon (vane/levemåte). 2) En Spotify-spilleliste med norsk rap — materiell kultur (digital), smal definisjon (kunst/musikk). 3) Å ta av skoene når man kommer hjem til noen — immateriell kultur, utvidet definisjon (norm/skikk).',
      },
    },
    {
      id: 'kk-3-1-summary',
      type: 'text',
      content: `## Oppsummering

- **Kultur** er et sammensatt begrep som kan forstås på ulike måter
- Den **utvidede kulturdefinisjonen** ser kultur som hele levemåten til en gruppe
- Den **smale kulturdefinisjonen** begrenser kultur til kunstneriske uttrykk
- **Materiell kultur** er fysiske gjenstander, **immateriell kultur** er verdier, normer og tradisjoner
- Kultur er **dynamisk** og endrer seg gjennom påvirkning og kontakt mellom grupper`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom den utvidede og den smale kulturdefinisjonen. Bruk konkrete eksempler for å illustrere.',
        hints: ['Tenk på hva som faller innenfor og utenfor de to definisjonene.'],
        solution: 'Den smale definisjonen begrenser kultur til kunstneriske uttrykk som teater, litteratur og musikk. Den utvidede definisjonen inkluderer i tillegg verdier, normer, matvaner, språk og all levemåte. Eksempel: Et teaterbesøk hører til begge definisjonene, mens taco-fredag bare hører til den utvidede.',
      },
    },
    {
      id: 'kk-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-3-1-ex-5',
        number: '3.1.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvem formulerte en av de tidligste klassiske definisjonene av kultur som «det komplekse hele»?',
        options: [
          { id: 'a', text: 'Edward B. Tylor', isCorrect: true },
          { id: 'b', text: 'Geert Hofstede', isCorrect: false },
          { id: 'c', text: 'George Herbert Mead', isCorrect: false },
          { id: 'd', text: 'Pierre Bourdieu', isCorrect: false },
        ],
        solution: 'Edward B. Tylor formulerte i 1871 en av de mest kjente kulturdefinisjonene: Kultur er «det komplekse hele som inkluderer kunnskap, tro, kunst, moral, lover, skikker og alle andre evner og vaner mennesket har tilegnet seg som medlem av samfunnet.»',
      },
    },
    {
      id: 'kk-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor det er viktig å forstå forskjellen mellom materiell og immateriell kultur. Bruk eksempler fra kulturmøter.',
        hints: ['Tenk på hva som kan skje når noen bare ser de materielle uttrykkene uten å forstå den immaterielle kulturen bak.'],
        solution: 'Skillet er viktig fordi misforståelser ofte oppstår når vi bare ser det materielle uten å forstå det immaterielle. Eksempel: Å se en hijab (materiell) uten å forstå verdiene og identiteten bak (immateriell) kan føre til stereotypier. I kulturmøter kan vi beundre en matrett (materiell) men krenke normene rundt serveringen (immateriell). Forståelse av begge nivåer er nødvendig for god interkulturell kommunikasjon.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Kulturelle verdier og normer
// ============================================================================

export const CHAPTER_KOMKULT_1_3_2: TextbookChapter = {
  id: 'komkult-1-3-2',
  courseId: 'komkult-1',
  chapterNumber: '3.2',
  title: 'Kulturelle verdier og normer',
  description: 'Utforsk hvordan verdier og normer varierer mellom kulturer. Du lærer om sanksjoner, kulturelle koder og Hofstedes kulturdimensjoner.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for kulturelle verdier og normer',
    'analysere kulturforskjeller ved hjelp av Hofstedes dimensjoner',
  ],
  keyTerms: [
    { term: 'Verdier', definition: 'Grunnleggende oppfatninger om hva som er viktig, riktig og ønskelig i en kultur.' },
    { term: 'Normer', definition: 'Uskrevne eller skrevne regler for akseptabel atferd i en gruppe eller et samfunn.' },
    { term: 'Formelle normer', definition: 'Nedskrevne regler og lover med tydelige sanksjoner ved brudd.' },
    { term: 'Uformelle normer', definition: 'Uskrevne regler og forventninger som styrer sosial atferd.' },
    { term: 'Sanksjoner', definition: 'Reaksjoner fra omgivelsene ved normbrudd (negative) eller normfølging (positive).' },
    { term: 'Kulturelle koder', definition: 'De uskrevne reglene for hvordan vi kommuniserer og oppfører oss i bestemte situasjoner.' },
    { term: 'Hofstedes kulturdimensjoner', definition: 'Et rammeverk for å sammenligne kulturelle verdier på tvers av nasjonale kulturer.' },
  ],
  content: [
    {
      id: 'kk-3-2-intro',
      type: 'text',
      content: `## Verdier og normer — kulturens uskrevne regler

Har du noen gang lagt merke til at det som er helt normalt i én kultur, kan oppfattes som uhøflig eller merkelig i en annen? Det skyldes at kulturer har ulike verdier og normer som styrer hvordan folk oppfører seg.

I dette kapittelet skal du lære:
- Hva verdier og normer er, og hvordan de henger sammen
- Forskjellen mellom formelle og uformelle normer
- Hva sanksjoner er og hvordan de virker
- Kulturelle koder og Hofstedes kulturdimensjoner`,
    },
    {
      id: 'kk-3-2-def-1',
      type: 'definition',
      title: 'Verdier og normer',
      content: `**Verdier** er grunnleggende oppfatninger om hva som er viktig, riktig og ønskelig. Verdier gir retning til livet vårt og fungerer som et kompass for handlinger og holdninger. Eksempler: likestilling, frihet, respekt for eldre, hardt arbeid.

**Normer** er regler for atferd som utledes av verdiene. Normene forteller oss hva vi bør og ikke bør gjøre i ulike situasjoner. Eksempler: stå i kø, hilse på naboen, komme presis til avtaler.

**Sammenhengen:** Verdien «likestilling» kan føre til normer som at alle hjelper til med husarbeid og at menn og kvinner har lik lønn.`,
    },
    {
      id: 'kk-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Verdier og normer i ulike kulturer',
      problem: 'Hvordan kan verdien «respekt» komme til uttrykk som ulike normer i ulike kulturer?',
      solution: `Verdien «respekt» finnes i de fleste kulturer, men normene som uttrykker respekt varierer:

**Norge:** Respekt vises gjennom likeverdig kommunikasjon. Man bruker «du» til alle, også til sjefen. Å behandle alle likt er et uttrykk for respekt.

**Japan:** Respekt vises gjennom hierarkisk høflighet. Man bukker dypere for de som har høyere rang. Språket har egne høflighetsformer (keigo) som brukes overfor overordnede.

**Saudi-Arabia:** Respekt for eldre vises ved at de alltid hilses først og får de beste plassene. Gjestfrihet er en sterk norm — man tilbyr mat og drikke til besøkende.

**Konklusjon:** Den underliggende verdien (respekt) er den samme, men normene for hvordan man viser respekt er svært forskjellige.`,
    },
    {
      id: 'kk-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom verdier og normer?',
        options: [
          { id: 'a', text: 'Verdier er grunnleggende oppfatninger om hva som er viktig, normer er regler for atferd', isCorrect: true },
          { id: 'b', text: 'Verdier er skrevne lover, normer er uskrevne tradisjoner', isCorrect: false },
          { id: 'c', text: 'Verdier gjelder individer, normer gjelder bare grupper', isCorrect: false },
          { id: 'd', text: 'Verdier og normer betyr det samme', isCorrect: false },
        ],
        hints: ['Tenk på verdier som «hva vi mener er viktig» og normer som «hva vi gjør på grunn av det».'],
        solution: 'Verdier er grunnleggende oppfatninger om hva som er viktig og riktig (f.eks. likestilling). Normer er regler for atferd som utledes fra verdiene (f.eks. at begge foreldre tar foreldrepermisjon).',
      },
    },
    {
      id: 'kk-3-2-text-1',
      type: 'text',
      content: `### Formelle og uformelle normer

**Formelle normer** er nedskrevne regler med tydelig definerte sanksjoner:
- Lover (du kan ikke stjele — straff: bøter eller fengsel)
- Regler på skolen (frammøteplikt — konsekvens: fravær)
- Trafikkregler (hastighetsbegrensning — konsekvens: bot)

**Uformelle normer** er uskrevne regler som alle «bare vet»:
- Man lar folk gå av bussen før man går på
- Man hever ikke stemmen i et bibliotek
- Man sier takk for maten etter et måltid
- Man holder avstand til fremmede i heisen

Uformelle normer er ofte vanskeligere for utlendinger å lære fordi de ikke står skrevet noen steder — de overføres gjennom sosialisering.`,
    },
    {
      id: 'kk-3-2-def-2',
      type: 'definition',
      title: 'Sanksjoner',
      content: `**Sanksjoner** er reaksjoner fra omgivelsene som belønner eller straffer atferd.

**Positive sanksjoner** belønner normfølging:
- Ros og anerkjennelse
- Lønnsøkning eller forfremmelse
- Likes og positive kommentarer på sosiale medier

**Negative sanksjoner** straffer normbrudd:
- Sosial avvisning eller blikk
- Kritikk og irettesettelse
- Bøter, straff eller utestengelse

Sanksjoner kan være **formelle** (bøter fra politiet) eller **uformelle** (et misbilligende blikk).`,
    },
    {
      id: 'kk-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Sanksjoner i hverdagen',
      problem: 'Hvilke sanksjoner kan oppstå hvis du sniker i køen på matbutikken?',
      solution: `**Negative sanksjoner:**
- Misbilligende blikk fra de andre i køen (uformell sanksjon)
- Noen sier «unnskyld, det er kø her» (uformell sanksjon)
- Andre kunder rister på hodet eller hvisker (uformell sanksjon)
- I alvorlige tilfeller: butikkansatte griper inn (mer formell)

**Hvorfor virker dette?** De fleste mennesker ønsker å bli akseptert av andre. Uformelle sanksjoner som blikk og kommentarer er ofte nok til å regulere atferd — nettopp fordi vi bryr oss om hva andre tenker om oss.

Det viser at uformelle normer opprettholdes gjennom sosial kontroll, ikke gjennom lover.`,
    },
    {
      id: 'kk-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en uformell negativ sanksjon?',
        options: [
          { id: 'a', text: 'Et misbilligende blikk fra sidemannen', isCorrect: true },
          { id: 'b', text: 'En bot fra politiet', isCorrect: false },
          { id: 'c', text: 'En lønnsøkning for godt arbeid', isCorrect: false },
          { id: 'd', text: 'En karakter på en prøve', isCorrect: false },
        ],
        hints: ['Uformell = ikke nedskrevet, negativ = straffer normbrudd.'],
        solution: 'Et misbilligende blikk er en uformell negativ sanksjon — det er en uskreven reaksjon som signaliserer at du har brutt en norm. En bot er formell og negativ. En lønnsøkning er formell og positiv.',
      },
    },
    {
      id: 'kk-3-2-text-2',
      type: 'text',
      content: `### Hofstedes kulturdimensjoner

Den nederlandske sosialpsykologen Geert Hofstede utviklet et rammeverk for å sammenligne kulturelle verdier på tvers av nasjoner. Gjennom forskning på IBM-ansatte i over 70 land identifiserte han flere dimensjoner:

**1. Maktdistanse (lav vs. høy)**
- Lav: Flat struktur, alle behandles likt (Norge, Sverige)
- Høy: Hierarkisk, stor respekt for autoriteter (Malaysia, Mexico)

**2. Individualisme vs. kollektivisme**
- Individualistisk: Fokus på individets rettigheter og selvstendighet (USA, Norge)
- Kollektivistisk: Fokus på gruppens behov og lojalitet (Japan, Colombia)

**3. Maskulinitet vs. femininitet**
- Maskulin: Verdsetter konkurranse, prestasjon, suksess (Japan, USA)
- Feminin: Verdsetter omsorg, livskvalitet, samarbeid (Norge, Sverige)

**4. Usikkerhetsunngåelse (lav vs. høy)**
- Lav: Komfortable med usikkerhet og endring (Danmark, Singapore)
- Høy: Foretrekker regler og forutsigbarhet (Hellas, Japan)

**5. Langsiktig vs. kortsiktig orientering**
- Langsiktig: Sparing, utholdenhet, tilpasning (Kina, Japan)
- Kortsiktig: Tradisjoner, rask gevinst, sosiale forventninger (Nigeria, Colombia)`,
    },
    {
      id: 'kk-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-3-2-ex-3',
        number: '3.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Ifølge Hofstede: Hva kjennetegner et samfunn med lav maktdistanse?',
        options: [
          { id: 'a', text: 'Flat struktur der alle behandles relativt likt', isCorrect: true },
          { id: 'b', text: 'Stor respekt for autoriteter og hierarki', isCorrect: false },
          { id: 'c', text: 'Fokus på individets rettigheter fremfor gruppens', isCorrect: false },
          { id: 'd', text: 'Høy grad av konkurranse og prestasjonsorientering', isCorrect: false },
        ],
        hints: ['Lav maktdistanse handler om forholdet mellom mennesker med ulik makt.'],
        solution: 'Lav maktdistanse betyr at samfunnet verdsetter likhet og flat struktur. Ledere og ansatte omgås relativt likeverdig, og det er kort avstand mellom folk med ulik makt. Norge og Sverige er typiske eksempler.',
      },
    },
    {
      id: 'kk-3-2-summary',
      type: 'text',
      content: `## Oppsummering

- **Verdier** er grunnleggende oppfatninger, **normer** er atferdsregler som utledes av verdiene
- Normer kan være **formelle** (skrevne lover) eller **uformelle** (uskrevne regler)
- **Sanksjoner** er positive eller negative reaksjoner som opprettholder normene
- **Hofstedes dimensjoner** gir et rammeverk for å sammenligne kulturer langs akser som maktdistanse, individualisme og usikkerhetsunngåelse
- Kulturelle verdier og normer varierer mellom samfunn, men finnes i alle kulturer`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi to eksempler på formelle normer og to eksempler på uformelle normer i det norske samfunnet. Forklar hvilke sanksjoner som kan følge ved brudd.',
        hints: ['Tenk på lover vs. uskrevne regler.'],
        solution: 'Formelle: 1) Trafikkloven — bot eller inndragning av førerkort. 2) Skolens ordensreglement — anmerkning eller bortvisning. Uformelle: 1) Å hilse på naboen — sosial avvisning ved unnlatelse. 2) Å stå i kø — blikk og kommentarer ved sniking.',
      },
    },
    {
      id: 'kk-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-3-2-ex-5',
        number: '3.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk to av Hofstedes kulturdimensjoner til å sammenligne norsk kultur med en annen kultur du kjenner til. Gi konkrete eksempler.',
        hints: ['Velg dimensjoner der det er tydelige forskjeller mellom kulturene.'],
        solution: 'Et godt svar velger to dimensjoner og gir konkrete eksempler. F.eks.: 1) Maktdistanse — Norge har lav maktdistanse (ansatte sier «du» til sjefen), mens India har høy maktdistanse (tydelig hierarki, respekt for overordnede). 2) Individualisme — Norge er individualistisk (barn oppmuntres til selvstendighet), mens mange asiatiske kulturer er kollektivistiske (familien tar beslutninger sammen).',
      },
    },
    {
      id: 'kk-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-3-2-ex-6',
        number: '3.2.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse er en positiv formell sanksjon?',
        options: [
          { id: 'a', text: 'Lønnsøkning for gode resultater', isCorrect: true },
          { id: 'b', text: 'Et klapp på skulderen fra en kollega', isCorrect: false },
          { id: 'c', text: 'Likes på sosiale medier', isCorrect: false },
          { id: 'd', text: 'Bot for ulovlig parkering', isCorrect: false },
        ],
        solution: 'En lønnsøkning er formell (fastsatt gjennom avtaler og systemer) og positiv (belønner ønsket atferd). Klapp på skulderen og likes er uformelle positive sanksjoner. Bot er en formell negativ sanksjon.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Identitet og identitetsutvikling
// ============================================================================

export const CHAPTER_KOMKULT_1_3_3: TextbookChapter = {
  id: 'komkult-1-3-3',
  courseId: 'komkult-1',
  chapterNumber: '3.3',
  title: 'Identitet og identitetsutvikling',
  description: 'Lær om personlig og sosial identitet, og hvordan vi utvikler identiteten vår gjennom samspill med andre. Du blir kjent med George Herbert Meads speilingsteori.',
  estimatedMinutes: 22,
  competenceGoals: [
    'drøfte sammenhengen mellom kultur, identitet og kommunikasjon',
    'gjøre rede for teorier om identitetsutvikling',
  ],
  keyTerms: [
    { term: 'Identitet', definition: 'Opplevelsen av hvem du er — det som gjør deg til deg, og som gir følelse av kontinuitet og tilhørighet.' },
    { term: 'Personlig identitet', definition: 'De egenskapene og erfaringene som gjør deg unik som individ.' },
    { term: 'Sosial identitet', definition: 'De delene av identiteten som er knyttet til gruppetilhørighet.' },
    { term: 'Speilingsteori', definition: 'George Herbert Meads teori om at vi utvikler identitet ved å speile oss i andres reaksjoner på oss.' },
    { term: 'Den generaliserte andre', definition: 'Meads begrep for samfunnets samlede forventninger som vi internaliserer.' },
    { term: 'Signifikante andre', definition: 'Viktige personer i livet vårt som har særlig stor påvirkning på identiteten.' },
  ],
  content: [
    {
      id: 'kk-3-3-intro',
      type: 'text',
      content: `## Hvem er du — egentlig?

Identitet handler om hvem du opplever at du er. Det er et av de mest grunnleggende spørsmålene vi stiller oss: Hvem er jeg? Hva gjør meg til meg? Tilhører jeg noen gruppe?

Identiteten vår er ikke noe vi fødes med ferdig utviklet — den formes gjennom hele livet, i samspill med menneskene rundt oss og kulturen vi lever i.

I dette kapittelet skal du lære:
- Forskjellen mellom personlig og sosial identitet
- Hvordan identitet utvikles gjennom samspill med andre
- George Herbert Meads teori om speiling og selvet`,
    },
    {
      id: 'kk-3-3-def-1',
      type: 'definition',
      title: 'Personlig og sosial identitet',
      content: `**Personlig identitet** er de egenskapene, erfaringene og trekkene som gjør deg unik som individ:
- Personlighet og temperament
- Interesser og verdier
- Minner og livshistorie
- Drømmer og mål

**Sosial identitet** er de delene av identiteten som er knyttet til grupper du tilhører:
- Kjønn og alder
- Nasjonalitet og etnisitet
- Religion eller livssyn
- Yrkesgruppe eller utdanning
- Interessefellesskap (gamer, idrettsutøver, musiker)

Personlig og sosial identitet henger sammen. Du er både et unikt individ OG medlem av ulike grupper — og begge deler påvirker hvordan du ser deg selv.`,
    },
    {
      id: 'kk-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Personlig og sosial identitet',
      problem: 'Hvordan kan vi se forskjellen mellom personlig og sosial identitet hos en elev på VG2?',
      solution: `**Personlig identitet:**
- Liker å tegne og er kreativ
- Er stille og observerende
- Drømmer om å bli grafisk designer
- Har en spesiell humor

**Sosial identitet:**
- Er norsk med somalisk bakgrunn
- Er jente, 17 år
- Er muslim
- Er elev i kommunikasjon og kultur
- Er medlem av et kunstkollektiv

**Samspillet:** Hennes personlige kreativitet (personlig identitet) kan kombineres med den somaliske bakgrunnen (sosial identitet) i kunstverkene hennes. Gruppetilhørighet og individuelle trekk former hverandre gjensidig.`,
    },
    {
      id: 'kk-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse er best beskrevet som sosial identitet?',
        options: [
          { id: 'a', text: 'At du er medlem av et fotballag', isCorrect: true },
          { id: 'b', text: 'At du liker å lese bøker', isCorrect: false },
          { id: 'c', text: 'At du er redd for edderkopper', isCorrect: false },
          { id: 'd', text: 'At du drømmer om å reise til Japan', isCorrect: false },
        ],
        hints: ['Sosial identitet handler om gruppetilhørighet.'],
        solution: 'Å være medlem av et fotballag er sosial identitet fordi det handler om tilhørighet til en gruppe. De andre alternativene beskriver personlige egenskaper, preferanser og drømmer — altså personlig identitet.',
      },
    },
    {
      id: 'kk-3-3-text-1',
      type: 'text',
      content: `### Meads speilingsteori

Den amerikanske sosiologen og filosofen George Herbert Mead (1863–1931) utviklet en innflytelsesrik teori om hvordan identiteten vår formes i samspill med andre. Kjernen i teorien er at vi «speiler» oss i andres reaksjoner for å forstå hvem vi er.

**Hovedideen:** Vi kan ikke se oss selv direkte. Vi er avhengige av andre menneskers reaksjoner for å danne et bilde av oss selv — omtrent som vi trenger et speil for å se ansiktet vårt.

**Selvet har to sider:**
- **«I»** (jeg-et): Den spontane, kreative og handlende siden av selvet
- **«Me»** (meg-et): Den sosiale, reflekterende siden som ser seg selv gjennom andres øyne

Når du gjør noe spontant (I), og deretter tenker «hva vil andre synes om dette?» (Me), er begge sidene i spill.`,
    },
    {
      id: 'kk-3-3-def-2',
      type: 'definition',
      title: 'Meads sentrale begreper',
      content: `**Signifikante andre** er personer som har særlig stor betydning for vår identitetsutvikling — typisk foreldre, søsken, nære venner og andre viktige relasjoner. Deres reaksjoner på oss veier ekstra tungt.

**Den generaliserte andre** er samfunnets samlede normer og forventninger. Etter hvert som barn vokser opp, lærer de ikke bare å ta hensyn til enkeltpersoners meninger, men til «hva folk generelt forventer». Barnet internaliserer samfunnets regler og kan styre sin egen atferd deretter.

**Rolletaking (å ta andres perspektiv):** Mead mente at barns utvikling av selvet skjer gjennom lek og spill. I leken tar barnet andres roller (leker «mor» eller «lærer»), og i organiserte spill lærer det å forholde seg til felles regler — altså den generaliserte andre.`,
    },
    {
      id: 'kk-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Speilingsteori i praksis',
      problem: 'Hvordan fungerer Meads speilingsteori i en klassesituasjon?',
      solution: `**Situasjon:** Sara holder en presentasjon i klassen.

**«I» (den spontane):** Sara forteller entusiastisk og bruker humor — hun handler spontant.

**Speiling:** Hun observerer reaksjoner:
- Medelevene ler og ser interessert ut
- Læreren nikker og smiler
- En kamerat gir tommel opp

**«Me» (den reflekterende):** Sara tenker: «De synes jeg er flink til å presentere. Kanskje jeg er morsom og god til å formidle.»

**Effekt på identitet:** Over tid bygger slike erfaringer opp Saras oppfatning av seg selv som en god formidler. De signifikante andre (læreren, de nære vennene) har særlig stor påvirkning.

**Merk:** Hadde klassen virket uinteressert, kunne Sara fått en helt annen oppfatning av seg selv.`,
    },
    {
      id: 'kk-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «den generaliserte andre» i Meads teori?',
        options: [
          { id: 'a', text: 'Samfunnets samlede normer og forventninger som individet internaliserer', isCorrect: true },
          { id: 'b', text: 'De viktigste personene i et barns liv', isCorrect: false },
          { id: 'c', text: 'Den spontane, kreative siden av selvet', isCorrect: false },
          { id: 'd', text: 'En bestemt person som barnet ser opp til', isCorrect: false },
        ],
        hints: ['Det handler om noe mer generelt enn enkeltpersoner.'],
        solution: 'Den generaliserte andre er Meads begrep for samfunnets samlede normer og forventninger. Barnet utvikler seg fra å ta hensyn til enkeltpersoner (signifikante andre) til å forstå hva «alle» forventer — altså den generaliserte andre.',
      },
    },
    {
      id: 'kk-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi et eksempel fra ditt eget liv der du har «speilet» deg i andres reaksjoner. Forklar hvordan dette påvirket oppfatningen du har av deg selv.',
        hints: ['Tenk på en situasjon der andres tilbakemeldinger endret hvordan du så på deg selv.'],
        solution: 'Et godt svar beskriver en konkret situasjon der andres reaksjoner (ros, kritikk, blikk) påvirket selvbildet. Eksempel: «Da jeg fikk positiv respons på et dikt jeg leste høyt, begynte jeg å se på meg selv som en som er flink til å skrive.»',
      },
    },
    {
      id: 'kk-3-3-summary',
      type: 'text',
      content: `## Oppsummering

- **Identitet** er opplevelsen av hvem du er, og den utvikles hele livet
- **Personlig identitet** handler om dine unike egenskaper, **sosial identitet** om gruppetilhørighet
- **Meads speilingsteori** viser at vi forstår oss selv gjennom andres reaksjoner
- **Signifikante andre** har størst påvirkning, men vi internaliserer også **den generaliserte andre**
- Selvet har en spontan side (**«I»**) og en reflekterende side (**«Me»**)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan sosiale medier kan påvirke identitetsutviklingen hos ungdom, sett i lys av Meads speilingsteori.',
        hints: ['Tenk på likes, kommentarer og følgere som «speiling».'],
        solution: 'Sosiale medier fungerer som et moderne «speil» i Meads forstand: likes, kommentarer og følgertall gir kontinuerlig tilbakemelding som former selvbildet. Positive kommentarer kan styrke selvfølelsen (positiv speiling), mens negative kan svekke den. En utfordring er at speilingen blir kvantifisert (antall likes) og at man kan velge hva man viser — slik at speilingen kanskje ikke gjenspeiler den «ekte» personen.',
      },
    },
    {
      id: 'kk-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-3-3-ex-5',
        number: '3.3.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «signifikante andre» i Meads teori?',
        options: [
          { id: 'a', text: 'Personer som har særlig stor betydning for vår identitetsutvikling', isCorrect: true },
          { id: 'b', text: 'Alle mennesker vi møter i løpet av livet', isCorrect: false },
          { id: 'c', text: 'Samfunnets samlede forventninger', isCorrect: false },
          { id: 'd', text: 'Personer som har makt i samfunnet', isCorrect: false },
        ],
        solution: 'Signifikante andre er de personene som har størst betydning for vår identitetsutvikling — typisk foreldre, søsken, nære venner og andre viktige relasjoner. Deres reaksjoner veier tyngre enn andres i formingen av selvbildet.',
      },
    },
    {
      id: 'kk-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom «I» og «Me» i Meads teori. Gi et eksempel som viser begge sidene.',
        hints: ['«I» er spontan handling, «Me» er refleksjon over hva andre tenker.'],
        solution: '«I» er den spontane, kreative og impulsive siden av selvet — det vi gjør uten å tenke oss om. «Me» er den reflekterende, sosiale siden som vurderer handlinger i lys av andres forventninger. Eksempel: Du roper spontant et svar i timen (I), og deretter tenker «oj, burde jeg ha rakt opp hånden?» (Me).',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Sosialisering
// ============================================================================

export const CHAPTER_KOMKULT_1_3_4: TextbookChapter = {
  id: 'komkult-1-3-4',
  courseId: 'komkult-1',
  chapterNumber: '3.4',
  title: 'Sosialisering',
  description: 'Lær om primær og sekundær sosialisering, og de ulike sosialiseringsagentene som former oss som mennesker og kulturelle aktører.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for sosialisering og sosialiseringsagenter',
    'drøfte sammenhengen mellom sosialisering, kultur og identitet',
  ],
  keyTerms: [
    { term: 'Sosialisering', definition: 'Prosessen der individer lærer normer, verdier og ferdigheter som gjør dem i stand til å fungere i samfunnet.' },
    { term: 'Primærsosialisering', definition: 'Den første sosialiseringen som skjer i familien, der barnet lærer grunnleggende verdier, språk og normer.' },
    { term: 'Sekundærsosialisering', definition: 'Sosialiseringen som skjer utenfor familien, i skolen, blant venner, på arbeidsplassen og gjennom medier.' },
    { term: 'Sosialiseringsagenter', definition: 'De personene, gruppene og institusjonene som bidrar til å sosialisere individet.' },
    { term: 'Resosialisering', definition: 'En prosess der man bryter med gamle normer og verdier og tilegner seg nye.' },
  ],
  content: [
    {
      id: 'kk-3-4-intro',
      type: 'text',
      content: `## Hvordan blir vi kulturelle mennesker?

Ingen blir født med kunnskap om hvordan man oppfører seg i et samfunn. Et nyfødt barn vet ikke hva som er rett eller galt, hva som er høflig eller uhøflig, eller hvordan man kommuniserer med andre. Alt dette må læres — og denne læringsprosessen kalles sosialisering.

I dette kapittelet skal du lære:
- Hva sosialisering er og hvorfor det er viktig
- Forskjellen mellom primær og sekundær sosialisering
- Hvilke sosialiseringsagenter som former oss
- Hva resosialisering innebærer`,
    },
    {
      id: 'kk-3-4-def-1',
      type: 'definition',
      title: 'Sosialisering',
      content: `**Sosialisering** er den livslange prosessen der vi lærer kulturens verdier, normer, kunnskaper og ferdigheter. Gjennom sosialiseringen utvikler vi oss fra biologiske vesener til kulturelle og sosiale aktører som kan fungere i et samfunn.

Sosialiseringen handler om å lære:
- Språk og kommunikasjonsferdigheter
- Normer for akseptabel atferd
- Verdier og holdninger
- Sosiale roller og forventninger
- Kunnskaper og ferdigheter som trengs i samfunnet`,
    },
    {
      id: 'kk-3-4-text-1',
      type: 'text',
      content: `### Primærsosialisering

Primærsosialiseringen er den første og mest grunnleggende sosialiseringen. Den skjer i familien i barndommen og legger fundamentet for hvem vi blir.

**Hva læres i primærsosialiseringen?**
- Språk — grunnlaget for all videre læring
- Grunnleggende normer — hva som er rett og galt
- Følelsesmessig tilknytning og trygghet
- Kulturelle vaner — matvaner, døgnrytme, hygiene
- Kjønnsroller og familieroller
- Religiøse eller livssynsbaserte verdier

**Kjennetegn:**
- Skjer tidlig i livet (0–6 år er mest avgjørende)
- Preges av nære, emosjonelle relasjoner
- Barnet «velger» ikke selv — det overtar verdier ukritisk
- Legger et grunnlag som er vanskelig å endre senere`,
    },
    {
      id: 'kk-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Primærsosialisering i to familier',
      problem: 'Hvordan kan primærsosialiseringen se ulik ut i to norske familier?',
      solution: `**Familie 1:**
- Begge foreldre jobber fulltid, barnet i barnehage fra 1 år
- Likestilt fordeling av husarbeid
- Vektlegger selvstendighet: «prøv selv først!»
- Sekulær familie — feirer jul, men ikke kristent
- Barn lærer: likestilling, selvstendighet, sekulære verdier

**Familie 2:**
- Far jobber, mor er hjemme til barna begynner på skolen
- Tradisjonell fordeling av roller
- Vektlegger respekt for voksne og samhold
- Muslimsk familie — feirer id, faster i ramadan
- Barn lærer: respekt for eldre, fellesskapsverdier, religiøse tradisjoner

**Poenget:** Begge barn sosialiseres inn i norsk kultur, men med ulike vektlegginger som former deres identitet og verdier på ulike måter.`,
    },
    {
      id: 'kk-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner primærsosialiseringen?',
        options: [
          { id: 'a', text: 'Den skjer i familien og legger grunnlaget for verdier og normer', isCorrect: true },
          { id: 'b', text: 'Den skjer først og fremst på skolen', isCorrect: false },
          { id: 'c', text: 'Den handler hovedsakelig om yrkesvalg', isCorrect: false },
          { id: 'd', text: 'Den skjer kun gjennom medier og sosiale medier', isCorrect: false },
        ],
        hints: ['Tenk på «primær» som det første og mest grunnleggende.'],
        solution: 'Primærsosialiseringen skjer i familien, typisk i barndommen, og legger det grunnleggende fundamentet for verdier, normer, språk og atferd.',
      },
    },
    {
      id: 'kk-3-4-def-2',
      type: 'definition',
      title: 'Sekundærsosialisering og sosialiseringsagenter',
      content: `**Sekundærsosialisering** skjer utenfor familien og bygger videre på primærsosialiseringen. Den pågår hele livet og involverer mange ulike aktører.

**Sosialiseringsagenter** er de personene, gruppene og institusjonene som bidrar til sosialiseringen:

1. **Familie** (primær): Foreldre, søsken, besteforeldre
2. **Skole og barnehage**: Lærere, pedagoger, medarbeidere
3. **Venner og jevnaldrende**: Særlig viktig i ungdomsårene
4. **Medier**: TV, sosiale medier, film, bøker, spill
5. **Arbeidsplassen**: Kolleger, sjef, yrkeskultur
6. **Religiøse organisasjoner**: Kirke, moské, tempel
7. **Fritidsaktiviteter**: Idrettslag, korps, kulturskole`,
    },
    {
      id: 'kk-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Venner som sosialiseringsagent',
      problem: 'Hvorfor er venner en så viktig sosialiseringsagent i ungdomsårene?',
      solution: `**Venner påvirker:**
- Klesvalg og stil (hva som er «kult»)
- Språk og sjargong (slang, uttrykk, kommunikasjonsform)
- Holdninger til skole, autoritet og fremtid
- Fritidsaktiviteter og interesser
- Verdier og moral (hva som er rett og galt i vennegjengen)

**Hvorfor ekstra viktig i ungdomsårene?**
- Ungdom søker selvstendighet fra foreldrene
- Identiteten er «under konstruksjon» — venner tilbyr nye forbilder
- Behov for tilhørighet og aksept er sterkt
- Gruppetilhørighet gir sosial identitet

**Konflikt:** Når familiens verdier (primærsosialisering) kolliderer med vennenes verdier (sekundærsosialisering), kan det oppstå lojalitetskonflikter. For eksempel: familien verdsetter akademisk suksess, mens vennegjengen synes det er «ukullt» å jobbe med skolen.`,
    },
    {
      id: 'kk-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse er IKKE en typisk sosialiseringsagent?',
        options: [
          { id: 'a', text: 'Vær og klima', isCorrect: true },
          { id: 'b', text: 'Venner og jevnaldrende', isCorrect: false },
          { id: 'c', text: 'Sosiale medier', isCorrect: false },
          { id: 'd', text: 'Religiøse organisasjoner', isCorrect: false },
        ],
        hints: ['En sosialiseringsagent er en person, gruppe eller institusjon som aktivt former normer og verdier.'],
        solution: 'Vær og klima er ikke en sosialiseringsagent fordi det ikke er en person, gruppe eller institusjon som former normer og verdier. Venner, sosiale medier og religiøse organisasjoner er alle sosialiseringsagenter.',
      },
    },
    {
      id: 'kk-3-4-text-2',
      type: 'text',
      content: `### Resosialisering

Noen ganger må vi bryte med gamle normer og verdier og lære nye. Dette kalles resosialisering.

**Eksempler på resosialisering:**
- En innvandrer som lærer seg normene i et nytt land
- En person som forlater et religiøst miljø og må finne nye verdier
- En innsatt i fengsel som skal tilbake til samfunnet
- En soldat som vender tilbake til sivillivet

Resosialisering kan være frivillig (du velger å endre livsstil) eller ufrivillig (omstendighetene tvinger det frem). Den er ofte krevende fordi de tidligste verdiene sitter dypest.`,
    },
    {
      id: 'kk-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rangér de tre viktigste sosialiseringsagentene i DIN hverdag og forklar hvorfor du rangerer dem slik.',
        hints: ['Tenk på hvem som påvirker deg mest i dag, ikke da du var liten.'],
        solution: 'Et godt svar rangerer tre agenter med personlig begrunnelse. Eksempel: 1) Venner — tilbringer mest tid med dem, påvirker holdninger og interesser. 2) Sosiale medier — bruker mye tid på TikTok og Instagram, påvirker trender og verdier. 3) Skolen — former kunnskap og holdninger gjennom undervisning og diskusjoner.',
      },
    },
    {
      id: 'kk-3-4-summary',
      type: 'text',
      content: `## Oppsummering

- **Sosialisering** er den livslange prosessen der vi lærer å fungere i samfunnet
- **Primærsosialiseringen** i familien legger det grunnleggende fundamentet
- **Sekundærsosialiseringen** skjer gjennom skole, venner, medier og andre arenaer
- **Sosialiseringsagenter** er de aktørene som bidrar til sosialiseringen
- **Resosialisering** innebærer å bryte med gamle normer og lære nye`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan sosiale medier har endret sosialiseringsprosessen for ungdom sammenlignet med tidligere generasjoner.',
        hints: ['Tenk på tilgang til informasjon, forbilder, gruppepress og identitetsutvikling.'],
        solution: 'Sosiale medier har skapt nye sosialiseringsarenaer som ikke fantes for 20 år siden. Ungdom eksponeres for et bredere mangfold av verdier, normer og livsstiler. Influencere fungerer som nye forbilder. Gruppepress har fått en digital dimensjon (likes, kommentarer). Samtidig kan ungdom finne fellesskap og tilhørighet på tvers av geografiske grenser. Utfordringer: filterboblere, urealistiske forbilder, cybermobbing.',
      },
    },
    {
      id: 'kk-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-3-4-ex-5',
        number: '3.4.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med resosialisering?',
        options: [
          { id: 'a', text: 'En prosess der man bryter med gamle normer og tilegner seg nye', isCorrect: true },
          { id: 'b', text: 'Den første sosialiseringen som skjer i familien', isCorrect: false },
          { id: 'c', text: 'Sosialiseringen som skjer gjennom medier', isCorrect: false },
          { id: 'd', text: 'At man lærer det samme om igjen', isCorrect: false },
        ],
        solution: 'Resosialisering er en prosess der man bryter med gamle normer, verdier og vaner og tilegner seg nye. Det kan skje frivillig (livsstilsendring) eller ufrivillig (migrasjon, fengselsopphold).',
      },
    },
    {
      id: 'kk-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom primær og sekundær sosialisering, og gi to eksempler på hva man lærer i hver av dem.',
        hints: ['Primær = familie og barndom, sekundær = alt utenfor familien.'],
        solution: 'Primærsosialisering skjer i familien og barndom: 1) Språk — barnet lærer morsmålet fra foreldrene. 2) Grunnleggende normer — hva som er rett og galt (ikke slå, si «takk»). Sekundærsosialisering skjer utenfor familien: 1) Fagkunnskap — læres på skolen. 2) Yrkesnormer — læres på arbeidsplassen (hvordan man oppfører seg profesjonelt).',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Kultur og kommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT_1_3_5: TextbookChapter = {
  id: 'komkult-1-3-5',
  courseId: 'komkult-1',
  chapterNumber: '3.5',
  title: 'Kultur og kommunikasjon',
  description: 'Utforsk hvordan kultur påvirker kommunikasjon, og lær om forskjellen mellom høykontekst- og lavkontekstkulturer.',
  estimatedMinutes: 24,
  competenceGoals: [
    'drøfte sammenhengen mellom kultur, identitet og kommunikasjon',
    'analysere hvordan kulturell bakgrunn påvirker kommunikasjonsformer',
  ],
  keyTerms: [
    { term: 'Interkulturell kommunikasjon', definition: 'Kommunikasjon mellom mennesker med ulik kulturell bakgrunn.' },
    { term: 'Høykontekstkultur', definition: 'Kultur der mye av budskapet ligger i konteksten — kroppsspråk, relasjoner og det som ikke sies direkte.' },
    { term: 'Lavkontekstkultur', definition: 'Kultur der budskapet ligger i det som sies eksplisitt, og man er tydelig og direkte i kommunikasjonen.' },
    { term: 'Kulturfilter', definition: 'Det «filteret» av verdier, normer og erfaringer vi tolker all kommunikasjon gjennom.' },
    { term: 'Nonverbal kommunikasjon', definition: 'Kommunikasjon uten ord: kroppsspråk, ansiktsuttrykk, øyekontakt, gestikulering og bruk av avstand.' },
    { term: 'Etnosentrisme', definition: 'Tendensen til å vurdere andre kulturer ut fra sin egen kulturs normer og verdier.' },
    { term: 'Kulturrelativisme', definition: 'Holdningen om at kulturer bør forstås på sine egne premisser, ikke måles mot andre kulturer.' },
  ],
  content: [
    {
      id: 'kk-3-5-intro',
      type: 'text',
      content: `## Når kulturer møtes i kommunikasjon

I en verden der mennesker med ulik bakgrunn møtes stadig oftere — på skolen, på arbeidsplassen, i sosiale medier og på reise — blir evnen til å kommunisere på tvers av kulturer viktigere enn noen gang.

Men kommunikasjon som fungerer i én kultur, kan føre til misforståelser i en annen. Et smil betyr ikke det samme overalt. Direkte tale verdsettes i noen kulturer og oppfattes som uhøflig i andre.

I dette kapittelet skal du lære:
- Hvordan kultur påvirker kommunikasjon
- Forskjellen mellom høykontekst- og lavkontekstkulturer
- Hvorfor nonverbal kommunikasjon varierer mellom kulturer
- Hva kulturfilter, etnosentrisme og kulturrelativisme innebærer`,
    },
    {
      id: 'kk-3-5-def-1',
      type: 'definition',
      title: 'Interkulturell kommunikasjon',
      content: `**Interkulturell kommunikasjon** er kommunikasjon mellom mennesker med ulik kulturell bakgrunn. Det kan gjelde ulik nasjonal bakgrunn, men også ulik religiøs, sosial eller yrkesmessig kultur.

**Utfordringer:**
- Ulike normer for høflighet og respekt
- Ulike tolkninger av kroppsspråk og ansiktsuttrykk
- Ulike forventninger til direktehet og ærlighet
- Ulike oppfatninger av tid, avtaler og forpliktelser
- Språkbarrierer og ulike kommunikasjonsstiler

**Målet** er ikke å bli lik den andre, men å forstå forskjellene godt nok til å kommunisere effektivt og respektfullt.`,
    },
    {
      id: 'kk-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Kulturell misforståelse',
      problem: 'Hva kan gå galt når en norsk forretningsperson møter en japansk kollega for første gang?',
      solution: `**Situasjon:** Per (norsk) møter Tanaka-san (japansk) på et forretningsmøte.

**Mulige misforståelser:**

**Hilsing:** Per strekker ut hånden for et fast håndtrykk. Tanaka-san forventer en bøying. Resultatet kan bli et forvirrende øyeblikk der begge prøver å tilpasse seg.

**Visittkort:** Per tar imot visittkortet med én hånd og legger det i lommen. I japansk kultur bør man ta imot med begge hender, studere kortet nøye og legge det respektfullt foran seg.

**Direktehet:** Per sier rett ut: «Vi er uenige i denne prisen.» Tanaka-san ville kanskje sagt: «Det er et interessant forslag som vi må vurdere nøye» — noe som egentlig betyr nei.

**Konklusjon:** Ingen av dem gjør noe galt — de følger sine kulturelle koder. Problemet oppstår når man ikke forstår den andres koder.`,
    },
    {
      id: 'kk-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er interkulturell kommunikasjon?',
        options: [
          { id: 'a', text: 'Kommunikasjon mellom mennesker med ulik kulturell bakgrunn', isCorrect: true },
          { id: 'b', text: 'Kommunikasjon innenfor én og samme kultur', isCorrect: false },
          { id: 'c', text: 'Kommunikasjon via internett og sosiale medier', isCorrect: false },
          { id: 'd', text: 'Kommunikasjon mellom mennesker som snakker samme språk', isCorrect: false },
        ],
        hints: ['«Inter» betyr «mellom».'],
        solution: 'Interkulturell kommunikasjon er kommunikasjon mellom mennesker med ulik kulturell bakgrunn. Det handler om å forstå og bygge bro over kulturelle forskjeller i kommunikasjon.',
      },
    },
    {
      id: 'kk-3-5-def-2',
      type: 'definition',
      title: 'Høykontekst- og lavkontekstkulturer',
      content: `Den amerikanske antropologen Edward T. Hall skiller mellom **høykontekstkulturer** og **lavkontekstkulturer**.

**Høykontekstkulturer** (f.eks. Japan, Kina, arabiske land):
- Mye av budskapet ligger i konteksten — ikke i ordene alene
- Man leser mellom linjene og tolker kroppsspråk, tonefall og situasjon
- Indirekte kommunikasjonsstil — man sier sjelden «nei» direkte
- Relasjoner og tillit er avgjørende for god kommunikasjon
- Taushet kan være meningsfull

**Lavkontekstkulturer** (f.eks. Norge, USA, Tyskland):
- Budskapet ligger i det som sies eksplisitt
- Man forventer klar, direkte og tydelig kommunikasjon
- «Si det du mener» er et ideal
- Skriftlige avtaler er viktigere enn muntlige
- Mindre fokus på å «lese mellom linjene»

**Merk:** Ingen kultur er 100 % høy- eller lavkontekst. Det er et spekter, og kulturer plasserer seg ulike steder.`,
    },
    {
      id: 'kk-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Høy- og lavkontekst i praksis',
      problem: 'Hvordan kan et «nei» uttrykkes forskjellig i en høy- og lavkontekstkultur?',
      solution: `**Situasjon:** Du spør en kollega om hen kan hjelpe deg med et prosjekt i helgen.

**Lavkontekstkultur (norsk/tysk):**
«Nei, beklager, det passer ikke denne helgen. Jeg har andre planer.»
- Direkte, eksplisitt og utvetydig

**Høykontekstkultur (japansk):**
«Det høres veldig interessant ut. Jeg skal se hva jeg kan gjøre, men det kan bli vanskelig...»
- Betyr sannsynligvis nei, men sies indirekte for å bevare harmoni
- Å si «nei» direkte kan oppfattes som uhøflig og ansiktstruende

**Høykontekstkultur (arabisk):**
«Inshallah» (om Gud vil) — kan bety alt fra «ja, kanskje» til «sannsynligvis ikke»
- Konteksten, tonefallet og relasjonen avgjør tolkningen

**Utfordring:** Lavkontekst-personen kan tolke det japanske svaret som «kanskje ja» og bli overrasket når kollegaen ikke dukker opp.`,
    },
    {
      id: 'kk-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket kjennetegn er typisk for en høykontekstkultur?',
        options: [
          { id: 'a', text: 'Mye av budskapet ligger i konteksten og det som ikke sies direkte', isCorrect: true },
          { id: 'b', text: 'Man verdsetter direkte og eksplisitt kommunikasjon', isCorrect: false },
          { id: 'c', text: 'Skriftlige avtaler er viktigere enn relasjoner', isCorrect: false },
          { id: 'd', text: 'Man sier alltid rett ut hva man mener', isCorrect: false },
        ],
        hints: ['«Høy kontekst» betyr at konteksten rundt ordene er viktig.'],
        solution: 'I høykontekstkulturer ligger mye av budskapet i konteksten — kroppsspråk, relasjoner, det usagte og situasjonen. Man kommuniserer indirekte og forventer at mottakeren «leser mellom linjene».',
      },
    },
    {
      id: 'kk-3-5-text-1',
      type: 'text',
      content: `### Kulturfilter og tolkning

Alle mennesker tolker kommunikasjon gjennom et **kulturfilter** — et sett av verdier, normer, erfaringer og forventninger som preger hvordan vi oppfatter andres budskap.

**Hvordan kulturfilter virker:**
- Vi tolker ubevisst andre ut fra vår egen kulturs normer
- Det som er «normalt» for oss, oppleves som den riktige måten
- Andre kulturers atferd kan virke merkelig, uhøflig eller forvirrende

**Eksempler:**
- En nordmann kan tolke japansk indirekthet som unnvikende eller uærlig
- En japaner kan tolke norsk direktehet som uhøflig eller aggressiv
- Begge tolker gjennom sitt eget kulturfilter — og begge tar feil

For å kommunisere godt på tvers av kulturer må vi bli bevisste på vårt eget kulturfilter og prøve å forstå den andres.`,
    },
    {
      id: 'kk-3-5-def-3',
      type: 'definition',
      title: 'Etnosentrisme og kulturrelativisme',
      content: `**Etnosentrisme** er tendensen til å vurdere andre kulturer ut fra sin egen kulturs standarder. Man ser sin egen kultur som det naturlige utgangspunktet og antar at andres måte er «feil» eller «merkelig».
- Eksempel: «Nordmenn er uhøflige fordi de ikke bukker» (vurdert fra japansk perspektiv)
- Eksempel: «Japanere er indirekte og vanskelige å forstå» (vurdert fra norsk perspektiv)

**Kulturrelativisme** er holdningen om at kulturer bør forstås på sine egne premisser. Ingen kulturs normer er objektivt «bedre» enn andres — de er bare forskjellige.
- Man prøver å forstå HVORFOR en kultur gjør ting på sin måte
- Man vurderer atferd ut fra kulturens egne verdier, ikke ens egne

**Merk:** Kulturrelativisme betyr ikke at «alt er greit». Menneskerettigheter gjelder uavhengig av kultur. Men det betyr at vi bør forstå før vi dømmer.`,
    },
    {
      id: 'kk-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-3-5-ex-3',
        number: '3.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er etnosentrisme?',
        options: [
          { id: 'a', text: 'Å vurdere andre kulturer ut fra sin egen kulturs standarder', isCorrect: true },
          { id: 'b', text: 'Å forstå kulturer på deres egne premisser', isCorrect: false },
          { id: 'c', text: 'Å studere ulike etniske gruppers historie', isCorrect: false },
          { id: 'd', text: 'Å kommunisere mellom ulike kulturer', isCorrect: false },
        ],
        hints: ['«Etno» = folkegruppe, «sentrisme» = å sette i sentrum.'],
        solution: 'Etnosentrisme er tendensen til å bruke sin egen kultur som målestokk for andre. Man antar at egne verdier og normer er universelle og vurderer andre kulturer som «merkelige» eller «feil» når de avviker.',
      },
    },
    {
      id: 'kk-3-5-text-2',
      type: 'text',
      content: `### Nonverbal kommunikasjon på tvers av kulturer

Nonverbal kommunikasjon — kroppsspråk, ansiktsuttrykk, øyekontakt, gestikulering og bruk av avstand — varierer betydelig mellom kulturer.

**Øyekontakt:**
- Norge/Vesten: Direkte øyekontakt viser interesse og ærlighet
- Mange asiatiske og afrikanske kulturer: Å senke blikket viser respekt

**Fysisk avstand (proksemikk):**
- Skandinavia: Stor personlig avstand, berøring er begrenset
- Middelhavsland og Latin-Amerika: Nærmere avstand, mer berøring

**Gestikulering:**
- Tommel opp: Positivt i Norge, kan være fornærmende i noen land
- Nikk: Betyr «ja» i de fleste kulturer, men «nei» i Bulgaria

**Tidsoppfatning:**
- Monokron tid (Norge, Tyskland): Tid er lineær, punktlighet er viktig
- Polykron tid (mange sør-europeiske og afrikanske kulturer): Tid er fleksibel, relasjoner viktigere enn klokkeslett`,
    },
    {
      id: 'kk-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi to eksempler på nonverbal kommunikasjon som tolkes ulikt i forskjellige kulturer. Forklar hvordan misforståelser kan oppstå.',
        hints: ['Tenk på øyekontakt, avstand, gestikulering eller tidsoppfatning.'],
        solution: 'Eksempel 1: Øyekontakt — i Norge viser direkte blikk interesse, men i mange asiatiske kulturer viser senket blikk respekt. En norsk lærer kan tolke en elev med asiatisk bakgrunn som uinteressert, mens eleven prøver å vise respekt. Eksempel 2: Tid — en norsk forretningsmann som venter på et punktlig møte kan oppfatte forsinkelser som respektløst, mens den andre parten følger en mer fleksibel tidsoppfatning.',
      },
    },
    {
      id: 'kk-3-5-summary',
      type: 'text',
      content: `## Oppsummering

- **Interkulturell kommunikasjon** handler om å kommunisere på tvers av kulturelle forskjeller
- **Høykontekstkulturer** kommuniserer indirekte og leser mellom linjene
- **Lavkontekstkulturer** kommuniserer direkte og eksplisitt
- Vi tolker all kommunikasjon gjennom et **kulturfilter** basert på våre egne verdier og normer
- **Etnosentrisme** er å vurdere andre ut fra sin egen kultur, **kulturrelativisme** er å forstå kulturer på deres egne premisser
- **Nonverbal kommunikasjon** varierer betydelig mellom kulturer og er en vanlig kilde til misforståelser`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og utfordringer ved at Norge er en lavkontekstkultur. Bruk eksempler fra interkulturelle møtesituasjoner.',
        hints: ['Tenk på hva som er effektivt med direkte kommunikasjon, og hva som kan skape problemer.'],
        solution: 'Fordeler: Effektiv kommunikasjon — lite rom for misforståelser, klare avtaler, rask beslutningsprosess. Utfordringer: Kan oppfattes som uhøflig av mennesker fra høykontekstkulturer, kan skade relasjoner (å si «nei» direkte), mangel på «face-saving». Eksempel: En norsk leder som gir direkte kritikk til en ansatt med japansk bakgrunn kan oppleves som svært krenkende, selv om den norske lederen mener det konstruktivt.',
      },
    },
    {
      id: 'kk-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-3-5-ex-6',
        number: '3.5.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvem utviklet skillet mellom høykontekst- og lavkontekstkulturer?',
        options: [
          { id: 'a', text: 'Edward T. Hall', isCorrect: true },
          { id: 'b', text: 'Geert Hofstede', isCorrect: false },
          { id: 'c', text: 'George Herbert Mead', isCorrect: false },
          { id: 'd', text: 'Edward B. Tylor', isCorrect: false },
        ],
        solution: 'Den amerikanske antropologen Edward T. Hall utviklet begrepene høykontekst- og lavkontekstkulturer. Hofstede er kjent for kulturdimensjoner, Mead for speilingsteori og Tylor for en av de tidligste definisjonene av kultur.',
      },
    },
    {
      id: 'kk-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kk-3-5-ex-7',
        number: '3.5.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom etnosentrisme og kulturrelativisme. Drøft deretter om det finnes grenser for kulturrelativisme.',
        hints: ['Tenk på menneskerettigheter og universelle verdier.'],
        solution: 'Etnosentrisme er å bruke egen kultur som målestokk og vurdere andre som «feil» når de avviker. Kulturrelativisme er å forstå kulturer på deres egne premisser. Grenser for kulturrelativisme: De fleste mener at menneskerettigheter gjelder uansett kultur — tvangsekteskap, kjønnslemlestelse og æresvold kan ikke forsvares med kulturrelativisme. Det finnes altså universelle verdier som setter grenser for hva som er akseptabelt, uavhengig av kulturelle tradisjoner.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const KOMKULT_1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT_1_3_1,
  CHAPTER_KOMKULT_1_3_2,
  CHAPTER_KOMKULT_1_3_3,
  CHAPTER_KOMKULT_1_3_4,
  CHAPTER_KOMKULT_1_3_5,
];
