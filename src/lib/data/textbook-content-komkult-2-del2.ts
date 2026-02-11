/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Stuart Hall og kulturrepresentasjon
// ============================================================================

export const CHAPTER_KOMKULT2_2_1: TextbookChapter = {
  id: 'komkult2-2-1',
  courseId: 'komkult-2',
  chapterNumber: '2.1',
  title: 'Stuart Hall og kulturrepresentasjon',
  description: 'Stuart Halls teori om representasjon, encoding/decoding-modellen, og hvordan medier og kultur skaper mening gjennom tegn og symboler.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjore rede for sentrale teorier om kulturell representasjon',
    'analysere hvordan medier konstruerer virkelighetsbilder gjennom representasjon',
  ],
  keyTerms: [
    { term: 'Representasjon', definition: 'Prosessen der mening skapes gjennom bruk av tegn, symboler og sprak i medier og kultur.' },
    { term: 'Encoding/decoding', definition: 'Stuart Halls modell for hvordan budskap kodes inn av avsender og avkodes av mottaker, med rom for ulike tolkninger.' },
    { term: 'Foretrukket lesning', definition: 'Den tolkningen avsenderen onsker at mottakeren skal sitte igjen med.' },
    { term: 'Stereotypi', definition: 'En forenklet og generalisert fremstilling av en gruppe mennesker som reduserer dem til noen fa, overdrevne trekk.' },
    { term: 'Den Andre', definition: 'Begrepet for hvordan kulturer definerer seg selv gjennom a konstruere en motsetning - noen som er forskjellige fra oss.' },
  ],
  content: [
    {
      id: 'kk2-2-1-intro',
      type: 'text',
      content: `## Stuart Hall og kulturrepresentasjon

Hvordan vi forstaar verden, er ikke bare et resultat av hva vi ser og opplever direkte. Det er ogsa formet av bilder, tekster, filmer og nyhetsinnslag vi moter hver dag. Den jamaicansk-britiske kulturteoretikeren Stuart Hall (1932-2014) var en av de viktigste tenkerne innen kulturstudier, og hans teorier om representasjon har forandret maaten vi analyserer medier og kultur paa.

I dette kapittelet skal du laere:
- Hva representasjon betyr i kulturteori
- Hvordan Stuart Halls encoding/decoding-modell fungerer
- De tre posisjonene mottakere kan innta overfor mediertekster
- Hvordan stereotypier og "Den Andre" konstrueres i medier`,
    },
    {
      id: 'kk2-2-1-def-1',
      type: 'definition',
      title: 'Representasjon',
      content: `**Representasjon** er et sentralt begrep i kulturstudier og handler om prosessen der mening skapes gjennom spraak, bilder og symboler. Stuart Hall definerte representasjon som "produksjon av mening gjennom spraak". Det handler ikke bare om aa speile virkeligheten, men om aa **konstruere** virkeligheten gjennom maaten vi fremstiller den paa.

Naar en avis velger et bestemt bilde til en nyhetssak, naar en film fremstiller en bestemt kultur paa en bestemt maate, eller naar en reklame velger aa vise bestemte mennesketyper - da handler det om representasjon. Hvert valg former hvordan vi oppfatter virkeligheten.

Hall skilte mellom tre tilnaerminger til representasjon:
- **Refleksiv tilnaerming:** Spraak speiler virkeligheten direkte (naiv realisme)
- **Intensjonal tilnaerming:** Spraak uttrykker det avsenderen mener
- **Konstruktivistisk tilnaerming:** Mening konstrueres gjennom spraak og kultur (Halls posisjon)`,
    },
    {
      id: 'kk2-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Representasjon i nyhetsmedier',
      problem: 'En avis skriver om kriminalitet i en bydel. Avis A bruker overskriften "Voldsbolgje i Gronland" med et morkt bilde av tomme gater. Avis B skriver "Innbyggere tar grep mot kriminalitet" med bilde av engasjerte naboer. Hvordan pavirker representasjonen vaar oppfatning?',
      solution: `**Avis A - "Voldsbolgje i Gronland":**
- Overskriften bruker dramatisk spraak ("bolgje") som skaper frykt
- Det morke bildet forsterker folelsen av utrygghet
- Bydelen representeres som farlig og uhyggelig
- Leseren faar et negativt bilde av omraadet og menneskene som bor der

**Avis B - "Innbyggere tar grep":**
- Overskriften fokuserer paa handling og fellesskap
- Bildet viser aktive, engasjerte mennesker
- Bydelen representeres som et sted med sterkt samhold
- Leseren faar et positivt bilde av beboerne

**Begge artiklene handler om det samme fenomenet**, men gjennom ulike valg av ord, bilder og vinkling skaper de helt forskjellige virkelighetsbilder. Dette er kjernen i Halls representasjonsteori: medier **speiler** ikke virkeligheten nooytralt - de **konstruerer** den gjennom representasjon.`,
    },
    {
      id: 'kk2-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken tilnaerming til representasjon mente Stuart Hall var den riktigste?',
        options: [
          { id: 'a', text: 'Den refleksive - spraak speiler virkeligheten direkte', isCorrect: false },
          { id: 'b', text: 'Den intensjonale - spraak uttrykker avsenderens mening', isCorrect: false },
          { id: 'c', text: 'Den konstruktivistiske - mening konstrueres gjennom spraak og kultur', isCorrect: true },
          { id: 'd', text: 'Den biologiske - mening er medfodt og universell', isCorrect: false },
        ],
        solution: 'Hall argumenterte for den konstruktivistiske tilnaermingen: mening oppstaar ikke naturlig eller automatisk, men konstrueres gjennom spraak, tegn og kulturelle praksiser. Vi forstaar verden gjennom de representasjonssystemene kulturen vaar gir oss.',
      },
    },
    {
      id: 'kk2-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-1-ex-2',
        number: '2.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Stuart Hall utviklet encoding/decoding-modellen. Hva menes med "decoding" i denne sammenhengen?',
        options: [
          { id: 'a', text: 'At avsenderen velger ut hvilke bilder og ord som skal brukes', isCorrect: false },
          { id: 'b', text: 'At mottakeren tolker og gir mening til budskapet ut fra sin egen bakgrunn', isCorrect: true },
          { id: 'c', text: 'At mediehusene sensurerer innhold for de sender det ut', isCorrect: false },
          { id: 'd', text: 'At budskapet automatisk forandres naar det sendes digitalt', isCorrect: false },
        ],
        solution: 'Decoding er mottakerens tolkningsprosess. Hall paaekte at mottakere ikke er passive - de tolker budskapet aktivt ut fra sin egen kulturelle bakgrunn, sine erfaringer og sin sosiale posisjon. Derfor kan samme medietekst forstaaes paa ulike maater av ulike mennesker.',
      },
    },
    {
      id: 'kk2-2-1-def-2',
      type: 'definition',
      title: 'Encoding/decoding-modellen',
      content: `Stuart Halls **encoding/decoding-modell** (1973) var banebrytende fordi den utfordret ideen om at mottakere passivt tar imot medienes budskap.

**Encoding** er prosessen der medieprodusenter koder mening inn i en tekst gjennom valg av spraak, bilder, vinkling og redigering. Avsenderen har typisk en **foretrukket lesning** - den tolkningen de onsker at mottakeren skal fa.

**Decoding** er prosessen der mottakeren tolker teksten. Hall identifiserte tre posisjoner mottakeren kan innta:

1. **Dominant-hegemonisk posisjon:** Mottakeren aksepterer den foretrukne lesningen fullt ut - de tolker budskapet slik avsenderen mente det.
2. **Forhandlingsposisjon:** Mottakeren aksepterer deler av den foretrukne lesningen, men tilpasser eller modifiserer tolkningen basert paa egne erfaringer.
3. **Opposisjonell posisjon:** Mottakeren avviser den foretrukne lesningen og tolker budskapet paa en helt annen maate - ofte kritisk eller i opposisjon.`,
    },
    {
      id: 'kk2-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-1-ex-3',
        number: '2.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en reklame du kjenner godt (fra TV, nett eller sosiale medier). Analyser den ved hjelp av Halls encoding/decoding-modell: Hva er den foretrukne lesningen? Hvordan kunne en forhandlingslesning se ut? Hva ville en opposisjonell lesning vaere?',
        hints: ['Tenk paa hvilke verdier og livsstiler reklamen fremmer', 'Vurder hvordan noen med helt annen bakgrunn ville tolket den'],
        solution: 'Et godt svar identifiserer en konkret reklame, beskriver den foretrukne lesningen (f.eks. "dette produktet gjor deg lykkelig/vellykket"), gir en forhandlingslesning (f.eks. "produktet ser bra ut, men reklamen overdriver") og en opposisjonell lesning (f.eks. "denne reklamen spiller paa usikkerhet for aa selge noe ingen trenger"). Eksempel: En bilreklame som viser frihet og eventyr - foretrukket: "denne bilen gir deg frihet", forhandling: "fin bil, men jeg trenger den ikke", opposisjonell: "reklamen glorifiserer forbruk og ignorerer klimaproblematikken".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Stuart Hall skrev ogsa om stereotypier og "Den Andre" (the Other). Forklar hva disse begrepene betyr, og gi et eksempel paa hvordan medier kan bidra til aa skape stereotypier om en bestemt gruppe.',
        hints: ['Tenk paa hvordan bestemte grupper fremstilles gjentakende i filmer, nyheter eller reklame', 'Vurder hvem som har makt til aa definere hvordan andre grupper representeres'],
        solution: 'Et godt svar forklarer at stereotypier er forenklede, generaliserte fremstillinger som reduserer en gruppe til noen faa trekk. "Den Andre" er et begrep for hvordan kulturer definerer seg selv ved aa konstruere en motsetning. Hall viste at medier ofte representerer minoritetsgrupper gjennom stereotypier - f.eks. at muslimer fremstilles primaert i sammenheng med terror i nyhetsmedier, at kvinner i reklame ofte reduseres til utseende, eller at urfolk fremstilles som "eksotiske". Svaret bor diskutere at dette har reelle konsekvenser for hvordan mennesker oppfattes og behandles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Representasjon** handler om hvordan mening skapes gjennom spraak, bilder og symboler i medier og kultur.
- Stuart Hall argumenterte for en **konstruktivistisk tilnaerming**: medier speiler ikke virkeligheten, de konstruerer den.
- **Encoding/decoding-modellen** viser at budskap kodes inn av avsender og tolkes (avkodes) av mottaker.
- Mottakere kan innta tre posisjoner: **dominant** (aksepterer), **forhandling** (delvis aksept) eller **opposisjonell** (avviser).
- Hall viste at medier skaper **stereotypier** og konstruerer "**Den Andre**" gjennom forenklede representasjoner.
- Representasjonsanalyse gir oss verktoy for aa avsloere maktstrukturer i medier og kultur.`,
    },
    {
      id: 'kk2-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-1-ex-5',
        number: '2.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Se en kort dokumentarklipp eller nyhetssak (3-5 minutter). Analyser representasjonen ved hjelp av Halls teori: Hva er den foretrukne lesningen? Identifiser minst to konkrete valg (kameravinkel, ordbruk, vinkling) som styrer tolkningen. Beskriv ogsa en mulig opposisjonell lesning.',
        hints: ['Legg merke til hvilke stemmer som faar slippe til, og hvem som er fravarende', 'Tenk paa Halls begrep om encoding - hvilke valg har produsenten tatt?'],
        solution: 'Et godt svar identifiserer konkrete encoding-valg (f.eks. narbilde av gartende barn = skape empati, intervju med ekspert = gi autoritet, musikk = skape stemning) og forklarer hvordan disse styrer den foretrukne lesningen. En opposisjonell lesning bor vaere begrunnet - f.eks. at dokumentaren fremstiller et land ensidig, overser lokale losninger, eller at den bruker vestlig perspektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-1-ex-6',
        number: '2.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drooft folgende pastand: "Alle medierepresentasjoner er politiske, fordi ethvert valg om hva som inkluderes og ekskluderes i en fremstilling innebarer en form for maktutovelse." Bruk Stuart Halls teorier i argumentasjonen din.',
        hints: ['Tenk paa hvem som eier mediene og hvem som bestemmer hvilke historier som fortelles', 'Vurder om det er mulig aa lage helt noyrale medierepresentasjoner'],
        solution: 'Et godt svar drooofter for og mot paasstanden. For: Hall viste at alle representasjoner innebarer valg (vinkling, spraak, bilder), og disse valgene er aldri nooytrale. De reflekterer maktforhold i samfunnet - hvem har definisjonsmakten? Eksempel: Nyhetsmedier velger hvilke saker som dekkes og hvordan, noe som pavirker hva vi oppfatter som viktig. Mot/nyansering: Selv om alle representasjoner innebarer valg, er det forskjell paa bevisst propaganda og journalistisk arbeid med ambisjoner om balanse. Svaret bor konkludere med at bevissthet om representasjonens politiske dimensjon er nokkelen til kritisk medieforstaelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Bourdieu og kulturell kapital
// ============================================================================

export const CHAPTER_KOMKULT2_2_2: TextbookChapter = {
  id: 'komkult2-2-2',
  courseId: 'komkult-2',
  chapterNumber: '2.2',
  title: 'Bourdieu og kulturell kapital',
  description: 'Pierre Bourdieus teori om kulturell kapital, habitus, felt og symbolsk vold, og hvordan kulturelle ressurser pavirker makt og sosial ulikhet.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjore rede for Bourdieus begreper om kulturell kapital og habitus',
    'drooofte hvordan kulturelle ressurser kan bidra til aa opprettholde sosiale forskjeller',
  ],
  keyTerms: [
    { term: 'Kulturell kapital', definition: 'Kunnskaper, ferdigheter, utdanning og kulturell kompetanse som gir fordeler i samfunnet.' },
    { term: 'Habitus', definition: 'Varige disposisjoner og vaner som er formet av oppvekst og sosial bakgrunn, og som styrer hvordan vi handler og tenker.' },
    { term: 'Felt', definition: 'Et avgrenset sosialt omraade med egne regler og maktstrukturer, for eksempel kunstfeltet eller det akademiske feltet.' },
    { term: 'Symbolsk vold', definition: 'Usynlig maktutovelse der dominerende gruppers kultur og verdier presenteres som naturlige og universelle.' },
    { term: 'Sosial kapital', definition: 'Nettverket av sosiale relasjoner og kontakter som kan gi fordeler og tilgang til ressurser.' },
  ],
  content: [
    {
      id: 'kk2-2-2-intro',
      type: 'text',
      content: `## Bourdieu og kulturell kapital

Har du noen gang lurt paa hvorfor noen mennesker virker "hjemme" paa et museum, mens andre foler seg utenfor? Eller hvorfor det aa ha foreldre med hoy utdanning gir statistiske fordeler i skolen? Den franske sosiologen Pierre Bourdieu (1930-2002) utviklet teorier som forklarer hvordan kultur ikke bare er underholdning, men et system av makt og ulikhet.

I dette kapittelet skal du laere:
- Hva kulturell kapital er og hvilke former den tar
- Hvordan habitus formes av oppvekst og sosial bakgrunn
- Hva Bourdieu mente med "felt" og "symbolsk vold"
- Hvordan disse teoriene kan brukes til aa analysere kulturelle fenomener i dag`,
    },
    {
      id: 'kk2-2-2-def-1',
      type: 'definition',
      title: 'Kulturell kapital',
      content: `**Kulturell kapital** er Pierre Bourdieus begrep for de kulturelle ressursene som gir fordeler i samfunnet. Bourdieu skilte mellom tre former:

**Kroppsliggjort kulturell kapital:** Kunnskaper, ferdigheter, smak og vaaner som er innlart gjennom oppvekst og utdanning. For eksempel aa kunne spille et instrument, snakke korrekt, eller ha kunnskap om kunst og litteratur. Denne formen tar tid aa tilegne seg og kan ikke overfoores direkte.

**Objektivert kulturell kapital:** Kulturelle gjenstander som boker, malerier, instrumenter og kunstgjenstander. Disse kan kjopes, men for aa utnytte dem fullt ut trenger man ogsa den kroppsliggjorte kapitalen.

**Institusjonalisert kulturell kapital:** Formelle kvalifikasjoner som utdanningstitler, vitnemaal og sertifiseringer. En mastergrad er et eksempel - den gir anerkjennelse og tilgang til bestemte posisjoner i samfunnet.`,
    },
    {
      id: 'kk2-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Kulturell kapital i hverdagen',
      problem: 'Sara og Knut er begge 17 aar og gaar paa samme skole. Saras foreldre er professorer, og hun vokste opp med klassisk musikk, reiser til europeiske byer og middagssamtaler om politikk. Knuts foreldre driver en bilverksted, og han vokste opp med fotball, bilreparasjoner og actionfilmer. Hvordan kan Bourdieus teori forklare forskjellige erfaringer de har paa skolen?',
      solution: `**Saras kulturelle kapital:**
- **Kroppsliggjort:** Vant til akademisk spraak, har lest mye litteratur, kjenner til kunsthistorie og musikk. Fooeler seg hjemme i skolens "spraak" og forventninger.
- **Objektivert:** Har tilgang til boker, instrumenter, datamaskiner hjemme.
- **Institusjonalisert:** Foreldrenes utdanning gir kunnskap om hvordan utdanningssystemet fungerer.

**Knuts kulturelle kapital:**
- **Kroppsliggjort:** Praktiske ferdigheter, teknisk forstaelse, lagspill. Disse verdsettes hoyere i noen sammenhenger enn andre.
- **Objektivert:** Verktoy, praktisk utstyr.
- **Institusjonalisert:** Foreldrene har yrkesutdanning.

**Bourdieus poeng:** Skolen er ikke noytral - den belonner den typen kulturell kapital som overklassen har mest av. Sara foler seg "naturlig" flink fordi skolens krav matcher hennes habitus. Knut kan vaere like intelligent, men maa jobbe hardere fordi han maa laere seg skolens "spilleregler" i tillegg til det faglige. Bourdieu kalte dette **symbolsk vold** - at skolens standarder presenteres som universelle, mens de egentlig favoriserer en bestemt sosial gruppe.`,
    },
    {
      id: 'kk2-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken form for kulturell kapital representerer et vitnemaal fra universitetet?',
        options: [
          { id: 'a', text: 'Kroppsliggjort kulturell kapital', isCorrect: false },
          { id: 'b', text: 'Objektivert kulturell kapital', isCorrect: false },
          { id: 'c', text: 'Institusjonalisert kulturell kapital', isCorrect: true },
          { id: 'd', text: 'Sosial kapital', isCorrect: false },
        ],
        solution: 'Et vitnemaal er institusjonalisert kulturell kapital fordi det er en formell, offisiell anerkjennelse av kunnskap og kompetanse. Det gir innehaveren tilgang til bestemte posisjoner i samfunnet og blir anerkjent av institusjoner som arbeidsgivere og utdanningsinstitusjoner.',
      },
    },
    {
      id: 'kk2-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-2-ex-2',
        number: '2.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva mente Bourdieu med begrepet "habitus"?',
        options: [
          { id: 'a', text: 'De bevisste valgene vi tar om hvilken kultur vi foretrekker', isCorrect: false },
          { id: 'b', text: 'Varige disposisjoner og vaner formet av oppvekst og sosial bakgrunn som styrer handling og tenkning', isCorrect: true },
          { id: 'c', text: 'De fysiske omgivelsene vi lever i', isCorrect: false },
          { id: 'd', text: 'De offentlige arenaene der kultur produseres', isCorrect: false },
        ],
        solution: 'Habitus er de dyptsittende vanene, holdningene og disposisjonene som er formet av vaar oppvekst og sosiale bakgrunn. Habitus paavirker alt fra hvordan vi snakker og kler oss, til hva vi liker og hvordan vi forholder oss til autoriteter. Det er ikke helt bevisst, men heller ikke helt ubevisst - det er "kroppen som husker".',
      },
    },
    {
      id: 'kk2-2-2-def-2',
      type: 'definition',
      title: 'Habitus og felt',
      content: `**Habitus** er Bourdieus begrep for de varige disposisjonene og vanene vi tilegner oss gjennom oppvekst og sosial bakgrunn. Habitus er som et sett av "briller" vi ser verden gjennom - det former vaar smak, vaare preferanser, kroppssprak, maate aa snakke paa og folelsen av hva som er "naturlig". Habitus er ikke determinerende (vi kan endre oss), men det gir oss en grunnleggende orientering.

**Felt** er Bourdieus begrep for avgrensede sosiale omraader med egne regler, verdier og maktstrukturer. Eksempler er kunstfeltet, det akademiske feltet, det politiske feltet og idrettsfeltet. Innenfor hvert felt kjaempes det om bestemte former for kapital. I kunstfeltet er det kulturell kapital som gir makt, mens i naeringslivsfeltet er det okonomisk kapital.

**Symbolsk vold** oppstaar naar de dominerende gruppenes verdier, smak og kultur presenteres som "naturlige" og "universelle" - slik at det aa ikke mestre dem fremstaar som en individuell mangel snarere enn et resultat av sosiale strukturer.`,
    },
    {
      id: 'kk2-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-2-ex-3',
        number: '2.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre eksempler paa situasjoner i dagens Norge der kulturell kapital kan gi fordeler. Forklar for hvert eksempel hvilken form for kulturell kapital det handler om, og hvordan den gir en fordel.',
        hints: ['Tenk paa skole, jobb, sosiale situasjoner og kulturliv', 'Vurder baade formelle og uformelle fordeler'],
        solution: 'Et godt svar gir konkrete eksempler, for eksempel: 1) Jobbintervju - en person med "riktig" spraak, klesstil og kulturell referanseramme gjor bedre inntrykk (kroppsliggjort kapital). 2) Skolen - barn av foreldre med hoy utdanning faar hjelp med lekser og forstaar skolens forventninger bedre (kroppsliggjort og institusjonalisert kapital). 3) Nettverksbygging i kulturlivet - kjennskap til kunst, vin og klassisk musikk gir innpass i bestemte sosiale kretser (kroppsliggjort kapital som gir sosial kapital).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-2-ex-4',
        number: '2.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bourdieu hevdet at utdanningssystemet utover "symbolsk vold" ved aa behandle overklassens kultur som den "riktige" kulturen. Drooft denne paastanden med utgangspunkt i den norske skolen. Er du enig eller uenig? Bruk konkrete eksempler.',
        hints: ['Tenk paa hvilken type kunnskap som verdsettes i skolen', 'Vurder om praktiske ferdigheter verdsettes like hoyt som akademiske'],
        solution: 'Et godt svar drooofter baade for og mot. For: Skolen vektlegger akademiske ferdigheter (skriving, lesing, abstrakt tenkning) som typisk er sterkere hos barn fra akademikerhjem. Laereplaner prioriterer "finkultur" (klassisk litteratur, kunsthistorie) over populaerkultur. Spraaklige koder i laereboker og undervisning matcher middelklassens spraak. Mot/nyansering: Den norske skolen har ogsa yrkesfag som verdsetter praktiske ferdigheter. Gratis utdanning og laanesordninger reduserer okonomiske barrierer. Likevel viser forskning at sosial bakgrunn fremdeles har stor innvirkning paa skoleprestasjoner i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Kulturell kapital** er kulturelle ressurser som gir fordeler, og finnes i tre former: kroppsliggjort, objektivert og institusjonalisert.
- **Habitus** er varige disposisjoner formet av oppvekst som pavirker smak, handling og tenkning.
- **Felt** er avgrensede sosiale omraader med egne regler og maktstrukturer.
- **Symbolsk vold** er usynlig maktutovelse der dominerende gruppers kultur fremstilles som naturlig og universell.
- Bourdieus teorier viser at kultur ikke er nooytralt - det er en arena for makt og sosial reproduksjon.
- I den norske konteksten kan teoriene brukes til aa analysere hvordan sosial bakgrunn pavirker utdanning og sosial mobilitet.`,
    },
    {
      id: 'kk2-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-2-ex-5',
        number: '2.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En elev fra en arbeiderfamilie begynner paa en prestisjetung privatskole og foler seg utenfor fordi de andre elevene snakker om ferier i utlandet, klassisk musikk og restaurantbesoik eleven aldri har opplevd. Analyser denne situasjonen ved hjelp av minst tre av Bourdieus begreper (kulturell kapital, habitus, felt, symbolsk vold). Forklar hva som skjer og hvorfor.',
        hints: ['Tenk paa hvilke former for kulturell kapital som er paa spill', 'Vurder hva som skjer naar habitus og felt ikke matcher'],
        solution: 'Et godt svar bruker flere av Bourdieus begreper: Elevens habitus (formet av oppvekst i arbeiderfamilie) stemmer ikke med feltets forventninger (privatskolen). Eleven mangler den kroppsliggjorte kulturelle kapitalen (kjennskap til finkultur, reiseerfaringer, restaurantkultur) som de andre tar for gitt. Dette er symbolsk vold - privatskole-feltets verdier presenteres som normale og universelle, mens elevens bakgrunn implisitt fremstaar som mangelfull. Det handler ikke om individuelle evner, men om strukturelle forskjeller i tilgang til kulturell kapital.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-2-ex-6',
        number: '2.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk paa ditt eget liv og din egen bakgrunn. Hvilke former for kulturell kapital har du? Hvordan har din habitus blitt formet av oppveksten din? Reflekter over minst tre konkrete eksempler.',
        hints: ['Vaer aerlig og reflektert - det finnes ingen "riktige" svar her', 'Tenk paa spraak, smak, vaner og ferdigheter du har tilegnet deg gjennom familien'],
        solution: 'Et godt svar viser selvrefleksjon og evne til aa bruke Bourdieus begreper paa eget liv. For eksempel: "Min mor leser mye, og jeg har arvet interessen for boker (kroppsliggjort kapital). Vi har mange boker hjemme (objektivert kapital). Jeg liker matlaging fordi vi alltid lagde mat fra bunnen av hjemme (habitus). Jeg merker at jeg snakker mer dialekt enn mange i klassen, og noen ganger foler jeg at det ikke er riktig paa skolen (symbolsk vold)."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Subkulturer og motkultur
// ============================================================================

export const CHAPTER_KOMKULT2_2_3: TextbookChapter = {
  id: 'komkult2-2-3',
  courseId: 'komkult-2',
  chapterNumber: '2.3',
  title: 'Subkulturer og motkultur',
  description: 'Subkulturteori fra Birmingham-skolen, motkultur, stilens betydning som kommunikasjon, og hvordan ungdomskulturer utfordrer og forandrer samfunnet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjore rede for begrepene subkultur og motkultur',
    'analysere hvordan subkulturer bruker stil og symboler for aa kommunisere identitet og motstand',
  ],
  keyTerms: [
    { term: 'Subkultur', definition: 'En gruppe innenfor en storere kultur som har egne verdier, normer, uttrykksformer og praksiser som skiller dem fra hovedkulturen.' },
    { term: 'Motkultur', definition: 'En kultur som aktivt utfordrer og opposisjonerer seg mot de dominerende verdiene i samfunnet.' },
    { term: 'Bricolage', definition: 'Aa sette sammen eksisterende kulturelle elementer paa nye maater for aa skape ny mening - typisk for subkulturer.' },
    { term: 'Inkorporering', definition: 'Prosessen der subkulturelle uttrykk blir tatt opp og kommersialisert av hovedkulturen.' },
    { term: 'Birmingham-skolen', definition: 'Forskningsgruppen ved CCCS i Birmingham som utviklet innflytelsesrike teorier om subkulturer, klasse og motstand.' },
  ],
  content: [
    {
      id: 'kk2-2-3-intro',
      type: 'text',
      content: `## Subkulturer og motkultur

Fra punk til hip-hop, fra goth til skatere, fra gamere til cosplay-entusiaster - gjennom historien har unge mennesker samlet seg i grupper med egne kleskoder, musikk, spraak og verdier. Men subkulturer handler om mer enn bare stil og smak. De er maater aa uttrykke identitet, tilhorighet og noen ganger motstand mot det bestaaende samfunnet.

I dette kapittelet skal du laere:
- Hva en subkultur er og hva som skiller den fra en motkultur
- Hvordan Birmingham-skolen analyserte subkulturer
- Hva bricolage betyr og hvordan subkulturer skaper mening gjennom stil
- Hvordan subkulturer blir inkorporert i hovedkulturen over tid`,
    },
    {
      id: 'kk2-2-3-def-1',
      type: 'definition',
      title: 'Subkultur og motkultur',
      content: `En **subkultur** er en gruppe innenfor en storere kultur som deler bestemte verdier, normer, uttrykksformer og praksiser som skiller dem fra hovedkulturen (ogsaa kalt dominerende kultur eller mainstreamkultur). Subkulturer har ofte egne kleskoder, musikkpreferanser, spraak (slang) og mootesteder.

En **motkultur** (counterculture) er en mer radikal form for subkultur som aktivt opposisjonerer seg mot og forsooker aa forandre de dominerende verdiene i samfunnet. Mens en subkultur kan eksistere ved siden av hovedkulturen uten aa utfordre den direkte, soker motkulturen bevisst konfrontasjon.

**Eksempler paa subkulturer:** Skatere, gamere, cosplayere, metalhooder, graffiti-miljooet.
**Eksempler paa motkulturer:** Hippie-bevegelsen (1960-tallet), punkbevegelsen (1970-tallet), Occupy-bevegelsen (2010-tallet).

Grensen mellom subkultur og motkultur er ikke alltid skarp - mange subkulturer har elementer av motstand, og mange motkulturer har subkulturelle trekk.`,
    },
    {
      id: 'kk2-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Punk som motkultur',
      problem: 'Punkbevegelsen oppstod i Storbritannia paa midten av 1970-tallet. Analyser punk som motkultur: Hva var det de reagerte mot, og hvordan brukte de stil for aa kommunisere budskapet sitt?',
      solution: `**Kontekst:** Storbritannia paa 1970-tallet var preget av okonomisk krise, arbeidsledighet og klasseskiller. Mange unge fooelte seg utenfor og uten fremtidshap.

**Hva punk reagerte mot:**
- Det borgerlige samfunnets verdier (hoflighet, karriere, konformitet)
- Musikkbransjen som var blitt kommersiell og fjern fra hverdagsliv
- Klassesystemet og sosial ulikhet
- Politisk passivitet og resignasjon

**Stil som kommunikasjon (bricolage):**
- **Sikkerhetsnaaler** i ooorene - tok en hverdagsgjenstand og ga den ny mening (provokasjon, smerte)
- **Revne klaer** - avvisning av borgerlig pyntelig het
- **Mohawk og farget haar** - provoserende synlighet, nektet aa blande inn
- **Bandnavn som Sex Pistols, The Clash** - sjokkeffekt, direkte spraak
- **DIY-kultur** (gjor det selv) - lag egne fanziner, spill inn egen musikk, lim opp egne plakater

**Musikkens rolle:** Punk var raa, enkel og tilgjengelig - du trenger ikke aa vaere virtuos for aa starte et band. Slagordet "Here are three chords, now form a band" oppsummerte ideologien: hvem som helst kan skape kultur.

**Bourdieus perspektiv:** Punk kan sees som en protest mot kulturell kapital - en avvisning av ideen om at "god" kultur krever utdanning, finesse og okonomiske ressurser.`,
    },
    {
      id: 'kk2-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-3-ex-1',
        number: '2.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom en subkultur og en motkultur?',
        options: [
          { id: 'a', text: 'En subkultur er for unge, en motkultur er for voksne', isCorrect: false },
          { id: 'b', text: 'En subkultur har egne uttrykksformer, mens en motkultur aktivt utfordrer og forsooker aa forandre dominerende verdier', isCorrect: true },
          { id: 'c', text: 'En subkultur er lovlig, en motkultur er ulovlig', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell - begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'Hovedforskjellen er graden av opposisjon mot hovedkulturen. En subkultur har egne verdier og uttrykk som skiller den fra hovedkulturen, men utfordrer den ikke nooodvendigvis. En motkultur soker aktivt aa utfordre og forandre de dominerende verdiene i samfunnet.',
      },
    },
    {
      id: 'kk2-2-3-def-2',
      type: 'definition',
      title: 'Bricolage og inkorporering',
      content: `**Bricolage** (fra fransk: "aa fikle") er et begrep den franske antropologen Claude Levi-Strauss brukte, og som Birmingham-skolen anvendte paa subkulturer. Det beskriver prosessen der eksisterende kulturelle elementer tas ut av sin opprinnelige sammenheng og settes sammen paa nye maater for aa skape ny mening. Punkerens sikkerhetsnaaler, hip-hopperens samplede beats, og cosplayerens sammensetning av karaktertrekk er alle eksempler paa bricolage.

**Inkorporering** (ogsaa kalt kooptering) er den motsatte prosessen: naar subkulturelle uttrykk blir tatt opp av hovedkulturen og kommersialisert. Dette skjer typisk i to trinn:
1. **Vare-fasen:** Subkulturens stil blir til produkter (klaer, musikk, tilbehoor) som selges paa massemarkedet.
2. **Ideologisk inkorporering:** Subkulturens opproorske budskap toommes for innhold og gjores harmloost.

Eksempel: Punkens revne klaer selges naa som dyr "distressed fashion" hos luksusmerker. Graffiti-kunst henger paa gallerier. Hip-hop brukes i reklame for verdensomspennende selskaper.`,
    },
    {
      id: 'kk2-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-3-ex-2',
        number: '2.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et motemerke lanserer en kolleksjon inspirert av graffiti-kunst, med revne jeans og spraymaling-print til hoy pris. Hva kalles denne prosessen i subkulturteori?',
        options: [
          { id: 'a', text: 'Bricolage - aa sette sammen kulturelle elementer paa nye maater', isCorrect: false },
          { id: 'b', text: 'Inkorporering - subkulturelle uttrykk kommersialiseres av hovedkulturen', isCorrect: true },
          { id: 'c', text: 'Motkultur - merket forsooker aa vaere opproorsk', isCorrect: false },
          { id: 'd', text: 'Habitus - merket tilpasser seg markedet', isCorrect: false },
        ],
        solution: 'Dette er et klassisk eksempel paa inkorporering: subkulturelle uttrykk (graffiti, revne klaer) som opprinnelig var tegn paa opproor og utenforskap, blir tatt opp av moteindustrien, tomt for politisk innhold, og solgt som luksusvarer. Det opprinnelige budskapet om motstand forsvinner i kommersialiseringsprosessen.',
      },
    },
    {
      id: 'kk2-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-3-ex-3',
        number: '2.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en subkultur eller et ungdomsmiljo du kjenner til (det kan vaere gamere, skatemiljooet, K-pop-fans, cosplay eller noe annet). Beskriv subkulturen ved hjelp av fooolgende punkter: 1) Hvilke verdier og normer har gruppen? 2) Hvilke stilmarkooorer brukes (klaer, musikk, spraak)? 3) Er det elementer av motstand mot hovedkulturen? 4) Har noen av uttrykkene blitt inkorporert av mainstream?',
        hints: ['Bruk Bourdieus og Birmingham-skolens begreper i analysen', 'Vaer konkret og bruk eksempler'],
        solution: 'Et godt svar velger en konkret subkultur og analyserer den systematisk. For eksempel gamere: 1) Verdier som mestring, fellesskap, kreativitet og teknologisk kompetanse. 2) Stilmarkooorer: gaming-headset, band-T-skjorter, referanser og memes, eget spraak (GG, noob, meta). 3) Motstand: Opprinnelig en nisje som ble sett ned paa, utfordret ideen om at digital aktivitet er "bortkastet tid". 4) Inkorporering: Gaming er naa mainstream, esport sendes paa TV, motemerker lager gamer-klaer, storselskaper sponser turneringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-3-ex-4',
        number: '2.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Birmingham-skolen har faat kritikk for aa romantisere subkulturer som motstandsformer og for aa fokusere for mye paa hvite, mannlige arbeiderklasseungdommer. Drooft denne kritikken: Er subkulturer alltid uttrykk for motstand? Hvem ble oversett i den tidlige subkulturforskningen?',
        hints: ['Tenk paa kjoonn, etnisitet og klasse', 'Vurder om alle subkulturer handler om motstand, eller om noen bare handler om tilhorighet og identitet'],
        solution: 'Et godt svar anerkjenner baade Birmingham-skolens bidrag og begrensninger. Kritikk: 1) Jenter og kvinner ble nesten usynlige i forskningen - Angela McRobbie pekte paa at jenters subkulturer (f.eks. "bedroom culture") ble oversett. 2) Etniske minoriteters subkulturer ble marginalisert. 3) Ikke alle subkulturer handler om klassemotstand - noen handler primaert om identitet, tilhoorighet eller estetikk. 4) Romantisering: Forskerne tilskrev subkulturene mer bevisst motstand enn deltakerne selv kanskje opplevde. Likevel ga Birmingham-skolen viktige verktoy for aa forstaa forholdet mellom kultur, makt og identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- En **subkultur** er en gruppe med egne verdier, normer og uttrykksformer innenfor en stoorre kultur.
- En **motkultur** utfordrer aktivt de dominerende verdiene i samfunnet.
- **Birmingham-skolen** (CCCS) utviklet innflytelsesrike teorier om subkulturer som uttrykk for klassemotstand.
- **Bricolage** er prosessen der eksisterende kulturelle elementer settes sammen paa nye maater for aa skape ny mening.
- **Inkorporering** skjer naar subkulturelle uttrykk kommersialiseres og tooommes for opproorsk innhold av hovedkulturen.
- Birmingham-skolen har faat kritikk for aa overse kjoonn, etnisitet og for aa romantisere motstand.`,
    },
    {
      id: 'kk2-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-3-ex-5',
        number: '2.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gi et eksempel paa bricolage fra en subkultur du kjenner til. Beskriv hvilke elementer som blir tatt ut av sin opprinnelige kontekst, hvordan de settes sammen paa nye maater, og hvilken ny mening de faar. Sammenlign med punkerens bruk av sikkerhetsnaaler.',
        hints: ['Tenk paa musikk (sampling), mote (kombinering av stiler) eller spraak (slang)', 'Vurder om bricolage fortsatt er relevant i digitale subkulturer (memes, remixer)'],
        solution: 'Et godt svar identifiserer et konkret eksempel paa bricolage og analyserer det. For eksempel hip-hop: sampling tar musikkfragmenter fra andre sjangre og kontekster (jazz, soul, pop) og setter dem sammen til noe nytt. Graffiti tar bokstaver og teknikker fra skilting og reklame og omformer dem til gatekunst. Memes tar bilder og tekst fra populaerkulturen og gir dem ny mening gjennom rekontekstualisering. Sammenligningen med punk bor vise at bricolage er et universelt subkulturelt virkemiddel, men at materialene og mediene endrer seg over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-3-ex-6',
        number: '2.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drooft paastanden: "I en tid med sosiale medier og global kommunikasjon finnes det ikke lenger ekte subkulturer - alt blir umiddelbart mainstream." Er du enig eller uenig? Begrunn svaret ditt med eksempler og bruk relevante begreper fra kapittelet.',
        hints: ['Tenk paa hvordan algoritmer og viralitet pavirker spredningen av subkulturelle uttrykk', 'Vurder om nettbaserte fellesskap kan vaere subkulturer'],
        solution: 'Et godt svar drooofter begge sider. For paastanden: Sosiale medier akselererer inkorporeringsprosessen drastisk - en subkulturell trend kan gaa viralt og bli mainstream paa dager i stedet for aar. TikTok-algoritmer sprer nisjekulturer til massene umiddelbart. Mot paastanden: Nettbaserte subkulturer blomstrer (dark academia, cottagecore, vaporwave) og kan vaere like autentiske som fysiske subkulturer. Dessuten kan subkulturer finnes paa lukkede plattformer (Discord-servere, subredditer) som ikke umiddelbart naaes av mainstream. Nyansering: Kanskje subkulturer i dag har kortere levetid, men de er ikke borte - de har bare endret form.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Populaerkultur og massemedia
// ============================================================================

export const CHAPTER_KOMKULT2_2_4: TextbookChapter = {
  id: 'komkult2-2-4',
  courseId: 'komkult-2',
  chapterNumber: '2.4',
  title: 'Populaerkultur og massemedia',
  description: 'Frankfurterskolen, kulturindustrien, massekulturens rolle i samfunnet, og debatten mellom elite- og populaerkultur fra Adorno til dagens mediesamfunn.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjore rede for ulike perspektiver paa populaerkultur og massemedia',
    'drooofte forholdet mellom kulturindustri, makt og publikums handlekraft',
  ],
  keyTerms: [
    { term: 'Kulturindustri', definition: 'Adorno og Horkheimers begrep for masseproduksjon av kultur som vare, der malet er profitt snarere enn kunstnerisk verdi.' },
    { term: 'Populaerkultur', definition: 'Kultur som er utbredt og tilgjengelig for store deler av befolkningen, i motsetning til smal eller elitistaisk kultur.' },
    { term: 'Frankfurterskolen', definition: 'Gruppe kritiske teoretikere fra Frankfurt som analyserte forholdet mellom kultur, makt og kapitalisme.' },
    { term: 'Aktive publikummere', definition: 'Perspektivet paa mediebrukere som aktive tolkere og medskapere av mening, ikke passive mottakere.' },
    { term: 'Hegemoni', definition: 'Gramscis begrep for den dominerende gruppens evne til aa faa sine verdier og ideer akseptert som naturlige og selvfooolgende.' },
  ],
  content: [
    {
      id: 'kk2-2-4-intro',
      type: 'text',
      content: `## Populaerkultur og massemedia

Er det aa se Netflix en form for hjernevask? Eller er det en meningsfull kulturell praksis der vi aktivt tolker, diskuterer og finner glaede? Er popmusikk tom underholdning som holder oss passive, eller er det en arena for kreativitet og identitet? Debatten om populaerkultur har pagaat i over hundre aar, og den handler dypest sett om makt, mening og menneskers handlekraft.

I dette kapittelet skal du laere:
- Hva Frankfurterskolen mente med "kulturindustrien"
- Adornos kritikk av populaerkultur som maktmiddel
- Motstridende perspektiver fra kulturstudier og Birmingham-skolen
- Hvordan vi kan analysere populaerkultur i dag`,
    },
    {
      id: 'kk2-2-4-def-1',
      type: 'definition',
      title: 'Kulturindustrien',
      content: `**Kulturindustrien** er et begrep utviklet av Theodor Adorno og Max Horkheimer ved Frankfurterskolen paa 1940-tallet. De argumenterte for at kultur i det kapitalistiske samfunnet hadde blitt til en **industri** - masseproduserrt for profitt, standardisert og manipulerende.

Kjennetegn ved kulturindustrien ifooolge Adorno og Horkheimer:
- **Standardisering:** Kulturprodukter (filmer, musikk, serier) foooolger faste formler. Hver poplaat fooolger samme struktur, hver Hollywood-film det samme plottet.
- **Pseudoindividualitet:** Produktene later som de er unike og nye, men variasjonene er overfladiske. Ulike poplater hoores forskjellige ut, men fooolger den samme grunnoppskriften.
- **Passivisering:** Populaerkultur bedoover publikum og hindrer kritisk tenkning. I stedet for aa utfordre det bestaaende, gir den midlertidig tilfredsstillelse som faar folk til aa akseptere sin situasjon.
- **Profittmotiv:** Kultur produseres for aa selge, ikke for aa opplyse eller utfordre.`,
    },
    {
      id: 'kk2-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Kulturindustri-analysen brukt paa dagens medier',
      problem: 'Kan Adorno og Horkheimers teori om kulturindustrien brukes paa strooommetjenester som Netflix og Spotify i dag? Hva ville de ha sagt?',
      solution: `**Adornos perspektiv paa Netflix/Spotify:**

**Standardisering:**
- Netflix bruker algoritmer til aa produsere innhold basert paa hva som gir flest seere. Mange serier foooolger velproovde formler (true crime, romantisk komedie, superheltfortelling).
- Spotify-algoritmer fremmer musikk som passer inn i eksisterende lyttemooonstre snarere enn aa utfordre dem.

**Pseudoindividualitet:**
- "Personalisering" (din egen playlist, dine anbefalinger) gir en illusjon av individuelt valg, men valgene styres av algoritmer som er designet for aa holde deg paa plattformen.
- Hver ny Netflix-original kan fooles unik, men fooolger ofte samme dramaturgiske oppskrift.

**Passivisering:**
- "Binge-watching" fremmer passivt konsum. Netflix spiller automatisk neste episode for aa holde seeren i en passiv stroomm.
- Spotify-spillelister som "Chill Vibes" er designet for bakgrunnslytting, ikke aktiv engasjement.

**Motargument fra kulturstudier:**
Mange vil hevde at denne analysen er for pessimistisk. Seere diskuterer, analyserer og skaper fan-kultur rundt Netflix-serier. Spotify gir uavhengige artister en plattform. Publikum er ikke saa passive som Adorno antok.`,
    },
    {
      id: 'kk2-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva mente Adorno og Horkheimer med begrepet "kulturindustrien"?',
        options: [
          { id: 'a', text: 'At kultur er det viktigste for et samfunns velstand', isCorrect: false },
          { id: 'b', text: 'At kultur i det kapitalistiske samfunnet masseproduseres for profitt og passiviserer befolkningen', isCorrect: true },
          { id: 'c', text: 'At alle kulturuttrykk er like verdifulle', isCorrect: false },
          { id: 'd', text: 'At staten boor kontrollere all kulturproduksjon', isCorrect: false },
        ],
        solution: 'Kulturindustrien beskriver Adorno og Horkheimers syn paa hvordan kultur i det kapitalistiske samfunnet blir til en industri der malet er profitt. Kulturprodukter masseproduseres etter faste formler, gir en illusjon av mangfold (pseudoindividualitet), og passiviserer befolkningen slik at de aksepterer de raadende forholdene.',
      },
    },
    {
      id: 'kk2-2-4-def-2',
      type: 'definition',
      title: 'Aktive publikummere og populaerkultur som kamparena',
      content: `I motsetning til Frankfurterskolens pessimistiske syn utviklet kulturstudier (saerlig Birmingham-skolen og forskere som John Fiske) et mer optimistisk perspektiv paa populaerkultur.

**Aktive publikummere:** Mediebrukere er ikke passive mottakere som sluker alt de faar servert. De tolker, diskuterer, kritiserer og omformer kulturelle tekster. Fans skriver fan-fiksjon, lager memes, diskuterer i nettfora og bruker populaerkultur til aa bearbeide egne erfaringer.

**Hegemoni og motstand:** Antonio Gramsci brukte begrepet **hegemoni** om den prosessen der dominerende gruppers verdier blir akseptert som naturlige. Men hegemoni er aldri totalt - det finnes alltid rom for motstand og alternative tolkninger. Populaerkultur er en kamparena der dominerende og alternative ideer konkurrerer.

**Stuart Hall** (som vi kjent fra kapittel 2.1) paekte at mottakere kan innta dominante, forhandlende eller opposisjonelle posisjoner overfor medietekster. Dette betyr at populaerkultur aldri har eeen fastlast mening.`,
    },
    {
      id: 'kk2-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-4-ex-2',
        number: '2.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedforskjellen mellom Frankfurterskolens og Birmingham-skolens syn paa populaerkultur?',
        options: [
          { id: 'a', text: 'Frankfurterskolen studerte film, Birmingham-skolen studerte musikk', isCorrect: false },
          { id: 'b', text: 'Frankfurterskolen saa populaerkultur som passiviserende, Birmingham-skolen saa den som en arena for aktiv tolkning og motstand', isCorrect: true },
          { id: 'c', text: 'Frankfurterskolen var for populaerkultur, Birmingham-skolen var mot den', isCorrect: false },
          { id: 'd', text: 'Det er ingen vesentlig forskjell mellom de to skolene', isCorrect: false },
        ],
        solution: 'Hovedforskjellen ligger i synet paa publikum og populaerkulturras funksjon. Frankfurterskolen (Adorno, Horkheimer) saa populaerkultur som et verktoy for passivisering og kontroll - et middel for aa opprettholde det bestaaende. Birmingham-skolen saa populaerkultur som en arena der mening forhandles, og der publikum er aktive tolkere som kan utfordre dominerende lesninger.',
      },
    },
    {
      id: 'kk2-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-4-ex-3',
        number: '2.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en populaerkulturell tekst du kjenner godt (en TV-serie, en film, et dataspill eller en musikkartist). Analyser den fra baade Frankfurterskolens og Birmingham-skolens perspektiv. Hvordan ville Adorno kritisert den? Hvordan ville kulturstudier forsvart den?',
        hints: ['Vaer konkret - velg en bestemt serie/film/artist, ikke en generell sjanger', 'Forsook aa gi begge perspektivene en rettferdig behandling'],
        solution: 'Et godt svar anvender begge perspektivene paa en konkret tekst. F.eks. Marvel-filmene: Adornos kritikk: Standardisert helteformel, pseudoindividualitet (hver film "ny" men fooolger samme oppsett), masseprodusert for profitt, passiviserer gjennom enkel underholdning. Kulturstudiers forsvar: Fansen er aktive (cosplay, fan-teorier, diskusjoner), filmene tematiserer reelle spoorsmaal (mangfold, ansvar, makt), representasjon av ulike grupper har okt (Black Panther, Shang-Chi). Svaret boor vise at begge perspektivene har noe for seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Algoritmer paa plattformer som TikTok, YouTube og Spotify former i stor grad hva vi ser og hoorer. Drooft om algoritmestyrte anbefalinger stotter Adornos teori om kulturindustrien, eller om de gir brukere storerre frihet til aa oppdage ny kultur.',
        hints: ['Tenk paa begreper som filterboble, ekkokammer og pseudoindividualitet', 'Vurder om personalisering er reell valgfrihet eller styrt illusjon'],
        solution: 'Et godt svar drooofter begge sider. Stotter Adorno: Algoritmer skaper filterbobbler som begrenser mangfold, fremmer innhold som holder brukeren paa plattformen (engasjement > kvalitet), og gir en illusjon av personlig valg mens valgene egentlig styres av profittmaksimering (pseudoindividualitet 2.0). Utfordrer Adorno: Algoritmer kan ogsa eksponere brukere for innhold de aldri ville oppdaget ellers, noe som kan ooke kulturelt mangfold. Brukere kan aktivt soke utenfor anbefalingene. Uavhengige skapere kan naa et publikum uten tradisjonelle portvoktere. Nyansering: Algoritmene er verktoy - det avhenger av hvordan de er designet og hvem som styrer dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Frankfurterskolen** (Adorno, Horkheimer) saa populaerkultur som en **kulturindustri** som passiviserer befolkningen gjennom standardiserte, profittdrevne kulturprodukter.
- Kjennetegn ved kulturindustrien: **standardisering**, **pseudoindividualitet**, **passivisering** og **profittmotiv**.
- **Birmingham-skolen** og kulturstudier utfordret dette med perspektivet om **aktive publikummere** som tolker, forhandler og omformer medietekster.
- **Hegemoni** (Gramsci) beskriver hvordan dominerende verdier aksepteres som naturlige, men hegemoniet er aldri totalt - det finnes alltid rom for motstand.
- I dag er debatten aktuell i forbindelse med **algoritmer**, **stroommetjenester** og spooorsmaalet om digital kultur gir frihet eller kontroll.`,
    },
    {
      id: 'kk2-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-4-ex-5',
        number: '2.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar Gramscis begrep "hegemoni" med egne ord og gi to eksempler paa hvordan hegemoni fungerer i dagens mediesamfunn. Drooft ogsa: Finnes det eksempler paa at hegemoni utfordres gjennom populaerkultur?',
        hints: ['Tenk paa hvilke verdier og ideer som presenteres som selvfoolgende i mediene', 'Vurder om populaerkultur noen ganger utfordrer dominerende forestillinger (f.eks. om skjoonnhet, suksess, kjoonn)'],
        solution: 'Et godt svar forklarer hegemoni som prosessen der dominerende gruppers verdier aksepteres som naturlige og selvfoolgende. Eksempler: 1) Forbrukshegemoni - reklame presenterer materielt forbruk som veien til lykke, og de fleste aksepterer dette uten aa stille spoorsmaal. 2) Skjoonnhetshegemoni - mediene fremmer bestemte skjoonnhetsidealer som naturlige. Utfordringer: Artister som Lizzo utfordrer kroppsidealer, TV-serier med mangfoldig representasjon utfordrer hvem som faar vaere helter, og sosiale medier gir marginaliserte grupper en plattform til aa utfordre hegemoniske fortellinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-4-ex-6',
        number: '2.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyse (ca. 250 ord) der du drooofter spooorsmaalet: "Er skillet mellom finkultur og populaerkultur fortsatt relevant?" Bruk eksempler og refererer til minst to teoretikere fra kapittelet.',
        hints: ['Tenk paa eksempler der grensene mellom finkultur og populaerkultur viskes ut', 'Vurder om Bourdieus begrep om kulturell kapital fortsatt gjelder her'],
        solution: 'Et godt svar drooofter om det tradisjonelle hierarkiet (finkultur paa toppen, populaerkultur paa bunnen) fortsatt er gyldig. Argument for at det er relevant: Bourdieu viste at kulturell smak fortsatt er knyttet til klasse - noen kulturformer gir mer status enn andre. Argument mot: Grensene viskes ut - operaartister opptrer paa popfestivaler, graffiti henger paa gallerier, TV-serier analyseres som litteratur paa universitetene. Adorno ville kanskje sagt at dette bare betyr at kulturindustrien har okt sin rekkevidde. Hall og kulturstudier ville argumentert for at alle kulturelle tekster kan analyseres med de samme verktoyene. Konklusjon: Selv om grensene har blitt mer flytende, finnes det fortsatt hierarkier - men de er mer komplekse enn for.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Kulturanalyse i praksis
// ============================================================================

export const CHAPTER_KOMKULT2_2_5: TextbookChapter = {
  id: 'komkult2-2-5',
  courseId: 'komkult-2',
  chapterNumber: '2.5',
  title: 'Kulturanalyse i praksis',
  description: 'Hvordan bruke kulturteori til aa analysere konkrete kulturelle fenomener - semiotisk analyse, diskursanalyse og kulturanalysemodeller med praktiske eksempler.',
  estimatedMinutes: 25,
  competenceGoals: [
    'anvende kulturanalytiske metoder paa konkrete kulturelle uttrykk',
    'gjennomfoore en selvstendig kulturanalyse med bruk av relevant teori',
  ],
  keyTerms: [
    { term: 'Semiotikk', definition: 'Laren om tegn og tegnssystemer - hvordan tegn (ord, bilder, symboler) skaper mening i kultur og kommunikasjon.' },
    { term: 'Denotasjon og konnotasjon', definition: 'Barthes skille mellom et tegns bokstavelige betydning (denotasjon) og de kulturelle tilleggsbetydningene det bar (konnotasjon).' },
    { term: 'Diskurs', definition: 'Et sett av ideer, begreper og maater aa snakke om et tema paa som former hvordan vi forstaar og handler i forhold til det.' },
    { term: 'Myte', definition: 'Barthes begrep for kulturelle forestillinger som presenteres som naturlige og selvfooolgende, men som egentlig er kulturelt konstruerte.' },
    { term: 'Kulturanalyse', definition: 'Systematisk undersookelse av kulturelle uttrykk (tekster, bilder, praksiser) med bruk av kulturteori for aa avdekke underliggende mening og maktstrukturer.' },
  ],
  content: [
    {
      id: 'kk2-2-5-intro',
      type: 'text',
      content: `## Kulturanalyse i praksis

Gjennom de tidligere kapitlene har du lart om representasjon (Hall), kulturell kapital (Bourdieu), subkulturer og populaerkultur. Men hvordan bruker du disse teoriene i praksis? Hvordan analyserer du et konkret kulturelt uttrykk - en reklame, en musikkvideo, en nyhetssak eller en sosiale medier-trend?

I dette kapittelet skal du laere:
- Grunnleggende semiotisk analyse med Roland Barthes
- Hvordan identifisere diskurser i tekster og bilder
- En praktisk modell for kulturanalyse
- Hvordan skrive en selvstendig kulturanalyse`,
    },
    {
      id: 'kk2-2-5-def-1',
      type: 'definition',
      title: 'Semiotikk og Roland Barthes',
      content: `**Semiotikk** er vitenskapen om tegn og hvordan de skaper mening. Den franske filosofen Roland Barthes (1915-1980) utviklet en innflytelsesrik tilnaerming til kulturanalyse basert paa semiotikk.

Barthes skilte mellom to nivaaer av mening:

**Denotasjon** (fooorste nivaa): Den bokstavelige, beskrivende betydningen av et tegn. Hva vi faktisk ser. Eksempel: Et fotografi av en soldat som hever flagget.

**Konnotasjon** (andre nivaa): De kulturelle tilleggsbetydningene, assosiasjonene og verdiene tegnet bar. Eksempel: Det samme fotografiet konnoterer patriotisme, heltedaad, nasjonal stolthet.

**Myte** (tredje nivaa): Naar konnotasjoner blir saa innarbeidede at de fremstaar som "naturlige" og selvfoolgende, kaller Barthes dem **myter**. Myter er ikke usanne, men de er kulturelt konstruerte forestillinger som presenteres som om de er universelle sannheter. Eksempel: "Morsinstinktet" - en kulturell myte som fremstiller omsorg for barn som noe biologisk kvinnelig, snarere enn noe baade menn og kvinner kan utooove.`,
    },
    {
      id: 'kk2-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Semiotisk analyse av en reklame',
      problem: 'Analyser fooolgende reklame semiotisk: En parfymereklame viser en kvinne i en gullfargeet kjole paa en luksusjaacht ved solnedgang. Hun holder en parfymeflaske og ser rett i kamera med et selvsikkert blikk. Teksten sier: "The essence of you."',
      solution: `**Denotasjon (hva vi ser):**
- En kvinne i en gullkjole
- En jaacht (baaat)
- Solnedgang over havet
- En parfymeflaske
- Teksten "The essence of you"

**Konnotasjon (hva det betyr kulturelt):**
- **Gull:** Luksus, rikdom, eksklusivitet, verdi
- **Jaacht:** Overklasse, frihet, eventyrlyst
- **Solnedgang:** Romantikk, magi, det ooyeblikket der alt er perfekt
- **Selvsikkert blikk:** Makt, kontroll, uavhengighet
- **"The essence of you":** Parfymen er din sanne identitet - kjoop deg en identitet

**Myte:**
Reklamen bygger paa myten om at **luksus = selvrealisering**. Den antyder at det aa kjope denne parfymen bringer deg naermere din "sanne essens" - at materielle gjenstander kan gi deg identitet og selvtillit. Dette er en kulturelt konstruert forestilling (myte) som presenteres som naturlig.

**Halls perspektiv:**
Den foretrukne lesningen er: "Denne parfymen gir deg luksus og selvtillit." En opposisjonell lesning kunne vaere: "Denne reklamen selger urealistiske idealer og knytter selvverd til konsum."`,
    },
    {
      id: 'kk2-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I semiotisk analyse skiller Barthes mellom denotasjon og konnotasjon. Hva er denotasjonen i et bilde av en rood rose?',
        options: [
          { id: 'a', text: 'Kjaerlighet, romantikk og lidenskap', isCorrect: false },
          { id: 'b', text: 'En rood blomst med groonne blader og torner', isCorrect: true },
          { id: 'c', text: 'At noen er forelskeet', isCorrect: false },
          { id: 'd', text: 'Valentinsdagen', isCorrect: false },
        ],
        solution: 'Denotasjon er den bokstavelige, beskrivende betydningen - hva vi faktisk ser. En rood rose denoterer en rood blomst med groonne blader og torner. Konnotasjonene (kjaerlighet, romantikk, lidenskap, Valentinsdagen) er kulturelle tilleggsbetydninger som vi har laert aa knytte til tegnet.',
      },
    },
    {
      id: 'kk2-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-5-ex-2',
        number: '2.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Roland Barthes brukte begrepet "myte" i en spesiell betydning. Hva mente han?',
        options: [
          { id: 'a', text: 'En gammel fortelling om guder og helter', isCorrect: false },
          { id: 'b', text: 'Kulturelt konstruerte forestillinger som presenteres som naturlige og selvfoooolgende', isCorrect: true },
          { id: 'c', text: 'En bevisst loogn som mediene sprer', isCorrect: false },
          { id: 'd', text: 'En vitenskapelig teori som har blitt motbevist', isCorrect: false },
        ],
        solution: 'For Barthes er en myte ikke en loogn eller en gammel fortelling, men en kulturelt konstruert forestilling som har blitt saa innarbeidet at den fremstaar som naturlig og selvfoooolgende. Myten skjuler sin historiske og kulturelle opprinnelse og presenterer seg som universell sannhet.',
      },
    },
    {
      id: 'kk2-2-5-def-2',
      type: 'definition',
      title: 'Diskursanalyse og kulturanalysemodell',
      content: `**Diskurs** er et begrep hentet fra Michel Foucault og handler om de systematiske maatene et tema snakkes om, tenkes om og praktiseres paa i et samfunn. En diskurs er ikke bare ord - det er et helt rammeverk av kunnskap, makt og praksiser. For eksempel former "helsediskursen" hvordan vi forstaar kropp, sykdom og sunnhet.

**En praktisk modell for kulturanalyse:**

1. **Beskriv:** Hva ser/hoorer/leser du? (Denotasjon)
2. **Tolk:** Hvilke konnotasjoner, symboler og referanser finner du? Hvilke diskurser aktiveres?
3. **Kontekstualiser:** Naar og hvor ble teksten laget? Hvem er avsenderen? Hvem er maalgruppen?
4. **Analyser makt:** Hvem har makt i denne teksten? Hvem representeres, og hvordan? Hvem er fravarende?
5. **Bruk teori:** Anvend relevant teori (Hall, Bourdieu, Barthes, Frankfurterskolen, subkulturteori)
6. **Reflekter:** Hva forteller analysen oss om kulturen og samfunnet teksten er en del av?`,
    },
    {
      id: 'kk2-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-5-ex-3',
        number: '2.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en reklame (fra nett, TV eller magasin) og gjennomfoor en semiotisk analyse. Fooolg denne strukturen: 1) Beskriv hva du ser (denotasjon). 2) Analyser konnotasjoner og symbolikk. 3) Identifiser eventuelle myter teksten bygger paa. 4) Drooft den foretrukne lesningen og en mulig opposisjonell lesning (Hall).',
        hints: ['Vaer systematisk - gaa gjennom hvert element i reklamen', 'Se etter det som ikke er med i reklamen ogsa - fravaret kan vaere like viktig'],
        solution: 'Et godt svar velger en konkret reklame og analyserer den systematisk. Denotasjon boor vaere nooyktern beskrivelse av visuelle elementer, tekst og lyd. Konnotasjoner boor knyttes til kulturelle verdier (luksus, frihet, ungdom, etc.). Myteidentifisering boor peke paa underliggende kulturelle forestillinger (f.eks. at lykke kan kjoopes, at ungdom er ideal). Foretrukket og opposisjonell lesning boor tydelig kontrasteres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-5-ex-4',
        number: '2.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfoor en kulturanalyse av en selvvalgt TikTok- eller Instagram-trend. Bruk den seksleddede modellen fra kapittelet (beskriv, tolk, kontekstualiser, analyser makt, bruk teori, reflekter). Bruk minst to teoretikere fra seksjon 2 i analysen din (Hall, Bourdieu, Barthes, Adorno/Frankfurterskolen, Birmingham-skolen).',
        hints: ['Velg en trend du kjenner godt og har et personlig forhold til', 'Husk at kulturanalyse handler om aa stille spoorsmaal ved det som virker selvfoooolgende'],
        solution: 'Et godt svar velger en konkret trend og analyserer den systematisk. For eksempel en "aesthetic"-trend som "clean girl": Beskriv: Minimalistisk sminke, naturlige farger, dyrt utseende. Tolk: Konnoterer naturlighet, helse, velstand. Kontekst: Oppstod paa TikTok 2022-23, spredde seg globalt. Makt: Hvem definerer hva "clean" er? Trenden fremmer et utseendeideal som krever dyre produkter (Bourdieu: kulturell kapital). Hvem ekskluderes? Teori: Barthes - myten om "naturlig" skjoonnhet som egentlig krever mye arbeid. Hall - representasjon av bestemte kropper og hudfarger. Refleksjon: Trenden viser hvordan sosiale medier skaper nye former for kulturell kapital og estetiske hierarkier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Semiotikk** er laren om tegn og hvordan de skaper mening. Roland Barthes skiller mellom **denotasjon** (bokstavelig betydning), **konnotasjon** (kulturelle tilleggsbetydninger) og **myte** (naturaliserte kulturelle forestillinger).
- **Diskursanalyse** undersoker hvordan systematiske maater aa snakke om et tema former vaar forstaaelse av det.
- En **kulturanalysemodell** kan fooolge seks trinn: beskriv, tolk, kontekstualiser, analyser makt, bruk teori og reflekter.
- Gode kulturanalyser kombinerer flere teoretiske perspektiver (Hall, Bourdieu, Barthes, Frankfurterskolen, subkulturteori).
- Kulturanalyse handler om aa stille spoorsmaal ved det som virker selvfoooolgende og naturlig.`,
    },
    {
      id: 'kk2-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-5-ex-5',
        number: '2.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et tema som diskuteres mye i mediene (f.eks. kropp og helse, teknologi, klima eller kjonn). Identifiser to ulike diskurser som finnes om dette temaet. For hver diskurs: Beskriv hvilke begreper og perspektiver som brukes, og hvem som tjener paa at akkurat denne diskursen dominerer.',
        hints: ['Tenk paa hva Foucault mente med at diskurser former hva vi kan tenke og si om et tema', 'Vurder hvem som har makt til aa definere hvilken diskurs som dominerer'],
        solution: 'Et godt svar velger et konkret tema og identifiserer to tydelige diskurser. For eksempel kropp og helse: 1) "Helsisme-diskursen" - kroppen er et prosjekt som skal optimaliseres, sunnhet er individuelt ansvar, overvekt er et valg. Tjener: treningsindustrien, kostholdseksperter. 2) "Kropppositivisme-diskursen" - alle kropper er gode kropper, fokus paa mental helse og selvaksept. Tjener: mangfoldsbevegelsen, moteindustrien som utvider stoorrelsesspekteret. Svaret bor vise at diskurser ikke er noyytrale beskrivelser, men maktfulle rammeverk som former handling og holdninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-2-5-ex-6',
        number: '2.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en sammenfattende refleksjon (ca. 300 ord) der du drooofter: Hva har du laert om forholdet mellom kultur og makt gjennom denne seksjonen? Velg den teoretikeren eller det begrepet som har gjort stooorst inntrykk paa deg, og forklar hvorfor. Bruk et konkret eksempel fra din egen hverdag for aa illustrere pooenget.',
        hints: ['Vaer personlig og reflektert - det finnes ingen fasitsvar', 'Vis at du kan anvende teori paa eget liv og egne erfaringer'],
        solution: 'Et godt svar viser personlig refleksjon og evne til aa anvende teori paa eget liv. Eksempel: "Det begrepet som har gjort stooorst inntrykk paa meg, er Bourdieus symbolske vold. Jeg har alltid tenkt paa skolen som noooytral, men naar jeg tenker paa det, beloonner den bestemte ferdigheter og kunnskaper mer enn andre. Et eksempel fra min hverdag: Naar vi har analyse av dikt i norsktimen, fooler de elevene som har vokst opp med mye lesing seg naturlig flinke, mens andre sliter - ikke fordi de er dummere, men fordi de har en annen kulturell bagasje." Svaret boor vise kritisk tenkning og evne til aa koble abstrakt teori til konkret erfaring.',
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

export const KOMKULT2_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT2_2_1,
  CHAPTER_KOMKULT2_2_2,
  CHAPTER_KOMKULT2_2_3,
  CHAPTER_KOMKULT2_2_4,
  CHAPTER_KOMKULT2_2_5,
];
