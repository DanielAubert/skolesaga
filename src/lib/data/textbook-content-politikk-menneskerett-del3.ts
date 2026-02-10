/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Politikk og menneskerettigheter (VG2/VG3)
 *
 * Seksjon 3: Ideologier og partier (Kapittel 3.1–3.6)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Hva er en politisk ideologi?
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_3_1: TextbookChapter = {
  id: 'politikk-menneskerett-3-1',
  courseId: 'politikk-menneskerett',
  chapterNumber: '3.1',
  title: 'Hva er en politisk ideologi?',
  description: 'Forstå hva en politisk ideologi er, hvordan ideologier oppstod historisk, og hvilken rolle de spiller i moderne politikk.',
  estimatedMinutes: 50,
  prevChapter: 'politikk-menneskerett-2-6',
  nextChapter: 'politikk-menneskerett-3-2',
  competenceGoals: [
    'gjøre rede for sentrale politiske ideologier og deres historiske bakgrunn',
    'drøfte hvordan ideologier påvirker politiske standpunkter og beslutninger',
  ],
  keyTerms: [
    { term: 'Ideologi', definition: 'Et sammenhengende sett av ideer, verdier og overbevisninger om hvordan samfunnet bør organiseres og styres.' },
    { term: 'Politisk spektrum', definition: 'En modell for å plassere politiske holdninger langs en akse, typisk fra venstre (likhet, fellesskap) til høyre (frihet, tradisjon).' },
    { term: 'Venstresiden', definition: 'Politiske retninger som vektlegger økonomisk likhet, offentlig styring og solidaritet. Begrepet stammer fra den franske nasjonalforsamlingen i 1789.' },
    { term: 'Høyresiden', definition: 'Politiske retninger som vektlegger individuell frihet, privat eiendomsrett og markedsøkonomi, ofte kombinert med tradisjonelle verdier.' },
    { term: 'Utopi', definition: 'En visjon om et idealsamfunn. Politiske ideologier inneholder ofte utopiske elementer som beskriver hvordan samfunnet bør se ut.' },
    { term: 'Pragmatisme', definition: 'En politisk tilnærming som vektlegger praktiske løsninger fremfor ideologisk renhet. Pragmatikere tilpasser politikken etter hva som fungerer.' },
  ],
  exercises: [],
  content: [
    {
      id: 'pm-3-1-intro',
      type: 'text',
      content: `## Hva er en politisk ideologi?

Hvorfor mener noen at staten bør eie sykehusene, mens andre vil at private selskaper skal drive dem? Hvorfor er noen opptatt av å bevare tradisjoner, mens andre vil forandre samfunnet radikalt? Svarene på slike spørsmål henger sammen med **politiske ideologier** - de store tankesystemene som former vår forståelse av politikk og samfunn.

En **politisk ideologi** er et sammenhengende sett av ideer og verdier om hvordan samfunnet bør organiseres. Ideologier gir svar på grunnleggende spørsmål: Hva er rettferdighet? Hvor mye frihet bør enkeltmennesket ha? Hva er statens rolle? Hvordan bør økonomien styres?

Ideologier er ikke bare abstrakte teorier. De påvirker konkret politikk hver dag - fra statsbudsjettet til skolepolitikken, fra innvandringspolitikk til klimatiltak. Når politikere debatterer i Stortinget, står ulike ideologiske tradisjoner mot hverandre.`,
    },
    {
      id: 'pm-3-1-def-1',
      type: 'definition',
      title: 'Hva kjennetegner en ideologi?',
      content: `**En politisk ideologi inneholder typisk:**

1. **Menneske- og samfunnssyn:** Grunnleggende antakelser om menneskets natur og hvordan samfunnet fungerer. Er mennesker grunnleggende egoistiske eller samarbeidsvillige? Er ulikhet naturlig eller konstruert?

2. **Verdier og mål:** Hva er det gode samfunnet? Hvilke verdier bør prioriteres - frihet, likhet, trygghet, tradisjon eller fellesskap?

3. **Virkemidler:** Hvordan skal vi nå målene? Gjennom marked, stat, revolusjon, reformer eller tradisjon?

4. **Kritikk av nåværende tilstand:** Hva er galt med dagens samfunn? Alle ideologier inneholder en diagnose av samfunnets problemer.

5. **Visjon for fremtiden:** Hvordan bør samfunnet se ut? Ideologier peker mot en ønsket fremtid.`,
    },
    {
      id: 'pm-3-1-text-2',
      type: 'text',
      content: `## Ideologienes historiske bakgrunn

De politiske ideologiene vi kjenner i dag, vokste frem under store samfunnsomveltninger i Europa på 1700- og 1800-tallet. Tre historiske hendelser var særlig viktige:

**Den franske revolusjonen (1789):**
Under den franske revolusjonen ble begrepene «venstre» og «høyre» i politikken skapt. I den franske nasjonalforsamlingen satt tilhengerne av forandring til venstre for presidenten, mens forsvarerne av det bestående satt til høyre. Denne inndelingen brukes fortsatt i dag.

Revolusjonen skapte også slagordet «Frihet, likhet, brorskap» - verdier som har inspirert politiske bevegelser siden. **Liberalismen** vokste ut av kravet om frihet fra eneveldet, mens **konservatismen** oppstod som en reaksjon mot revolusjonens radikale endringer.

**Den industrielle revolusjonen (1750-1900):**
Industrialiseringen skapte enorme sosiale endringer: urbanisering, nye klassemotsetninger og utbytting av arbeidere. **Sosialismen** vokste frem som svar på arbeiderklassens nød og krevde rettferdig fordeling av godene.

**Nasjonalstatenes fremvekst (1800-tallet):**
Nasjonalismen ble en mektig kraft som formet politikken. Ideen om at hvert folk burde ha sin egen stat, drev frem samlingsprosesser (Italia, Tyskland) og frigjøringsbevegelser.`,
    },
    {
      id: 'pm-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvor stammer begrepene «venstre» og «høyre» i politikken fra?',
        options: [
          { id: 'a', text: 'Fra det britiske parlamentet på 1600-tallet', isCorrect: false },
          { id: 'b', text: 'Fra den franske nasjonalforsamlingen under revolusjonen i 1789', isCorrect: true },
          { id: 'c', text: 'Fra Karl Marx sine skrifter på 1800-tallet', isCorrect: false },
          { id: 'd', text: 'Fra den amerikanske uavhengighetserklæringen i 1776', isCorrect: false },
        ],
        hints: ['Tenk på hvor representantene satt i forsamlingssalen.'],
      },
    },
    {
      id: 'pm-3-1-text-3',
      type: 'text',
      content: `## Det politiske spektrumet

Den vanligste måten å ordne politiske ideologier på er langs en **venstre-høyre-akse**:

**Venstresiden** vektlegger typisk:
- Økonomisk likhet og omfordeling
- Offentlig eierskap og regulering
- Solidaritet og fellesskapsløsninger
- Arbeidstakernes rettigheter
- Progressiv samfunnsendring

**Høyresiden** vektlegger typisk:
- Individuell frihet og personlig ansvar
- Privat eiendomsrett og markedsøkonomi
- Tradisjonelle verdier og institusjoner
- Begrenset statlig innblanding
- Forsvar av det bestående

**Sentrum** forsøker å kombinere elementer fra begge sider, og søker ofte kompromisser og pragmatiske løsninger.

### Fleraksede modeller

Venstre-høyre-aksen er nyttig, men forenklet. Mange statsvitere bruker **toaksemodeller** som legger til en akse for autoritær versus libertær politikk:

- **Økonomisk akse:** Venstre (statlig styring) - Høyre (fritt marked)
- **Verdiakse:** Autoritær (sterk stat, tradisjon) - Libertær (personlig frihet, mangfold)

Dette forklarer hvorfor noen partier er vanskelige å plassere på den tradisjonelle aksen. Et parti kan for eksempel være økonomisk til venstre (for omfordeling) men konservativt på verdispørsmål.`,
    },
    {
      id: 'pm-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Ideologier i norsk politikk',
      problem: 'Hvordan kan vi se ulike ideologier i den norske politiske debatten?',
      solution: `**Skattepolitikk som ideologisk slagmark:**

I debatten om skattepolitikk ser vi tydelige ideologiske skillelinjer:

- **Sosialistisk perspektiv (SV, Rødt):** Ønsker høyere skatter for de rikeste og sterkere omfordeling. Mener ulikhet er et grunnleggende problem.
- **Sosialdemokratisk perspektiv (Ap):** Vil ha et skattesystem som finansierer velferdsstaten, men aksepterer markedsøkonomi med reguleringer.
- **Liberalt perspektiv (Venstre):** Vil ha moderate skatter som gir individuell frihet, men finansierer grunnleggende velferdsordninger.
- **Konservativt perspektiv (Høyre):** Ønsker lavere skatter for å stimulere næringsliv og personlig initiativ. Mener markedet fordeler ressurser effektivt.
- **Libertariansk perspektiv (FrP):** Vil kutte skatter kraftig og redusere statens rolle. Mener folk selv vet best hvordan de skal bruke pengene sine.

Denne debatten viser hvordan ulike ideologier gir ulike svar på samme spørsmål: Hvor mye bør staten ta inn i skatt?`,
    },
    {
      id: 'pm-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar med egne ord hva en politisk ideologi er, og nevn tre kjennetegn som alle ideologier har til felles.',
        hints: ['Tenk på hva ideologier sier om menneskesynet, verdiene og virkemidlene.'],
        solution: 'En politisk ideologi er et sammenhengende tankesystem som gir svar på hvordan samfunnet bør organiseres. Tre kjennetegn som alle ideologier deler: 1) De har et menneskesyn - antakelser om menneskets natur og hva som motiverer oss. 2) De har verdier og mål - en visjon om det gode samfunnet og hva som bør prioriteres. 3) De har virkemidler - konkrete forslag til hvordan man skal nå målene, enten gjennom markedet, staten, revolusjon eller reformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-1-text-4',
      type: 'text',
      content: `## Ideologienes rolle i dag

Er ideologiene døde? Etter Berlinmurens fall i 1989 og Sovjetunionens oppløsning hevdet den amerikanske statsviteren Francis Fukuyama at vi hadde nådd «historiens slutt» - at den liberale demokratiske kapitalismen hadde seiret som den eneste levedyktige modellen.

Men ideologiene lever videre, selv om de har endret seg:

**Nye skillelinjer:**
I tillegg til den tradisjonelle venstre-høyre-delingen har nye politiske skillelinjer vokst frem:
- **Klima og miljø:** Grønn ideologi utfordrer veksttenkningen i alle tradisjonelle ideologier
- **Globalisering vs. nasjonalisme:** Spenningen mellom åpne grenser og nasjonal suverenitet
- **Identitetspolitikk:** Spørsmål om kjønn, etnisitet og kulturell tilhørighet
- **Teknologi og overvåking:** Nye utfordringer for personvern og frihet

**Pragmatisme vs. ideologi:**
I norsk politikk ser vi ofte en spenning mellom ideologisk overbevisning og pragmatisk problemløsning. De fleste norske partier kombinerer ideologiske grunnholdninger med praktisk politikk. Dette gjør norsk politikk mer konsensuspreget enn i mange andre land.

**Ideologisk bevissthet:**
Å forstå ideologier er viktig for å gjennomskue politisk argumentasjon. Når politikere fremstiller sine standpunkter som «sunn fornuft» eller «det eneste fornuftige», skjuler de ofte ideologiske valg. Bevissthet om ideologier hjelper oss å stille kritiske spørsmål: Hvilke verdier ligger bak dette forslaget? Hvem tjener på det? Hvilke alternativer finnes?`,
    },
    {
      id: 'pm-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-3-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva mente Francis Fukuyama med «historiens slutt»?',
        options: [
          { id: 'a', text: 'At verden snart ville gå under på grunn av atomvåpen', isCorrect: false },
          { id: 'b', text: 'At den liberale demokratiske kapitalismen hadde seiret som den eneste levedyktige samfunnsmodellen', isCorrect: true },
          { id: 'c', text: 'At alle politiske ideologier hadde blitt like', isCorrect: false },
          { id: 'd', text: 'At historieundervisningen burde avskaffes', isCorrect: false },
        ],
        hints: ['Tenk på hva som skjedde med Sovjetunionen rundt 1990.'],
      },
    },
    {
      id: 'pm-3-1-text-5',
      type: 'text',
      content: `## De store ideologiene - en oversikt

I de neste kapitlene skal vi se nærmere på de viktigste politiske ideologiene:

**Liberalismen** (kapittel 3.2) vokste frem under opplysningstiden og setter individets frihet i sentrum. Den har utviklet seg i ulike retninger, fra klassisk liberalisme til sosialliberalisme og nyliberalisme.

**Sosialismen og sosialdemokratiet** (kapittel 3.3) oppstod som reaksjon på industrialismens urettferdigheter og kjemper for økonomisk likhet og arbeidernes rettigheter. Sosialdemokratiet ble den dominerende politiske retningen i Norden.

**Konservatismen og kristendemokratiet** (kapittel 3.4) vil bevare velprøvde samfunnsinstitusjoner og vektlegger tradisjon, stabilitet og gradvise endringer.

**Andre ideologier** (kapittel 3.5) som populisme, nasjonalisme, grønn ideologi, feminisme og anarkisme spiller også viktige roller i moderne politikk.

Til slutt ser vi på **norske politiske partier** (kapittel 3.6) og hvordan de plasserer seg i det ideologiske landskapet.

Når du leser om ideologiene, er det viktig å huske at ingen ideologi er «ren» i praksis. Politiske partier og bevegelser kombinerer ofte elementer fra ulike ideologier, og ideologier endrer seg over tid som svar på nye utfordringer.`,
    },
    {
      id: 'pm-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg en aktuell politisk sak (f.eks. helsepolitikk, klimapolitikk eller innvandring) og forklar hvordan minst to ulike ideologier ville tilnærmet seg saken forskjellig.',
        hints: ['Tenk på hvilke verdier de ulike ideologiene prioriterer, og hvordan dette påvirker deres syn på den valgte saken.'],
        solution: 'Eksempel med klimapolitikk: En sosialistisk tilnærming ville vektlegge statlig styring av næringslivet, strenge utslippskrav og rettferdig fordeling av kostnadene ved omstillingen - de rikeste bør betale mest. En liberal tilnærming ville satse på markedsmekanismer som CO₂-avgifter og kvotehandel, der markedet finner de mest effektive løsningene. En konservativ tilnærming ville vektlegge gradvis omstilling som ikke ødelegger eksisterende næringer, med vekt på teknologiutvikling og personlig ansvar. En grønn ideologisk tilnærming ville kreve radikale endringer i forbruk og produksjon, og utfordre selve vekstidealet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft påstanden: «Ideologier er utdaterte i moderne politikk - det eneste som teller er hva som fungerer.» Er du enig eller uenig? Begrunn svaret ditt.',
        hints: ['Tenk på hva vi mener med at noe «fungerer» - for hvem og etter hvilke kriterier?'],
        solution: 'Argumenter for at ideologier er utdaterte: Moderne problemer er komplekse og krever pragmatiske løsninger; velgere bryr seg mer om resultater enn ideologi; mange partier beveger seg mot sentrum. Argumenter mot: Selv «pragmatiske» løsninger bygger på verdivalg og antakelser om menneskesyn og samfunn; ideologier hjelper oss å forstå hva som menes med at noe «fungerer» - fungerer for hvem?; uten ideologisk bevissthet blir politikk lettere påvirket av mektige særinteresser; nye ideologiske skillelinjer (klima, globalisering) viser at ideologisk tenkning fortsatt er levende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-3-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken historisk hendelse var mest avgjørende for fremveksten av sosialismen som ideologi?',
        options: [
          { id: 'a', text: 'Den franske revolusjonen i 1789', isCorrect: false },
          { id: 'b', text: 'Den amerikanske uavhengighetskrigen', isCorrect: false },
          { id: 'c', text: 'Den industrielle revolusjonen', isCorrect: true },
          { id: 'd', text: 'Wienerkongressen i 1815', isCorrect: false },
        ],
        hints: ['Tenk på hvilke sosiale problemer sosialismen oppstod som svar på.'],
      },
    },
  ],
};

// ============================================================================
// Kapittel 3.2: Liberalisme og nyliberalisme
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_3_2: TextbookChapter = {
  id: 'politikk-menneskerett-3-2',
  courseId: 'politikk-menneskerett',
  chapterNumber: '3.2',
  title: 'Liberalisme og nyliberalisme',
  description: 'Forstå liberalismens grunnleggende ideer, fra John Locke og Adam Smith til moderne sosialliberalisme og nyliberalisme.',
  estimatedMinutes: 55,
  prevChapter: 'politikk-menneskerett-3-1',
  nextChapter: 'politikk-menneskerett-3-3',
  competenceGoals: [
    'gjøre rede for liberalismens kjerneideer og historiske utvikling',
    'skille mellom klassisk liberalisme, sosialliberalisme og nyliberalisme',
    'drøfte liberalismens betydning for moderne demokrati og menneskerettigheter',
  ],
  keyTerms: [
    { term: 'Liberalisme', definition: 'Politisk ideologi som setter individuell frihet, rettigheter og begrenset statsmakt i sentrum. Oppstod under opplysningstiden som reaksjon på eneveldet.' },
    { term: 'Naturlige rettigheter', definition: 'Rettigheter som alle mennesker har i kraft av å være mennesker - liv, frihet og eiendom. Sentral idé hos John Locke som inspirerte menneskerettighetene.' },
    { term: 'Sosialliberalisme', definition: 'Retning innenfor liberalismen som mener staten har ansvar for å sikre alle reell frihet gjennom velferd, utdanning og like muligheter. Representert av John Stuart Mill.' },
    { term: 'Nyliberalisme', definition: 'Økonomisk-politisk retning som vektlegger frie markeder, privatisering, deregulering og minimal statlig innblanding. Forbundet med Friedrich Hayek og Milton Friedman.' },
    { term: 'Laissez-faire', definition: 'Økonomisk prinsipp om at staten ikke skal gripe inn i markedet. Betyr bokstavelig «la det skje» på fransk.' },
    { term: 'Rettsstat', definition: 'Et politisk system der staten er bundet av lover, og der borgernes rettigheter er beskyttet mot vilkårlig maktbruk.' },
    { term: 'Maktfordeling', definition: 'Prinsippet om at statsmakten deles mellom lovgivende, utøvende og dømmende myndighet for å hindre maktmisbruk. Formulert av Montesquieu.' },
  ],
  exercises: [],
  content: [
    {
      id: 'pm-3-2-intro',
      type: 'text',
      content: `## Liberalismen - frihetens ideologi

Liberalismen er kanskje den mest innflytelsesrike politiske ideologien i moderne historie. Ideene om individets frihet, menneskerettigheter, demokrati, ytringsfrihet og rettsstat - alt dette har røtter i den liberale tradisjonen. Så gjennomgripende har liberalismens innflytelse vært at mange av dens ideer i dag oppfattes som selvfølgelige.

Ordet «liberalisme» kommer fra det latinske **liberalis**, som betyr «som angår en fri person». Kjernen i liberalismen er troen på at individet bør ha størst mulig frihet til å leve sitt eget liv, så lenge det ikke skader andre.

Liberalismen oppstod som en frigjørende kraft - mot eneveldet, religiøs tvang og adels privilegier. Men den har også blitt kritisert for å forsvare de velståendes interesser og for å ignorere strukturelle ulikheter.`,
    },
    {
      id: 'pm-3-2-def-1',
      type: 'definition',
      title: 'Liberalismens kjerneideer',
      content: `**Individuell frihet:**
Enkeltmennesket er det grunnleggende i politikken. Alle har rett til å tenke, tale, tro og leve som de vil, så lenge de ikke skader andre.

**Naturlige rettigheter:**
Alle mennesker er født med umistelige rettigheter - til liv, frihet og eiendom. Disse rettighetene er ikke gitt av staten, men tilhører mennesket i kraft av å være menneske.

**Begrenset statsmakt:**
Staten er nødvendig, men må holdes i tøyler. Maktfordeling, rettsstat og grunnlov skal hindre maktmisbruk. Staten skal beskytte borgernes rettigheter, ikke styre livene deres.

**Fornuft og fremskritt:**
Mennesket er et fornuftig vesen som kan forbedre samfunnet gjennom kunnskap, vitenskap og rasjonell debatt.

**Toleranse:**
Uenighet og mangfold er verdifullt. Staten skal ikke tvinge frem en bestemt livsstil, religion eller ideologi.

**Markedsøkonomi:**
Privat eiendomsrett og frie markeder er den mest effektive måten å organisere økonomien på.`,
    },
    {
      id: 'pm-3-2-text-2',
      type: 'text',
      content: `## Klassisk liberalisme: Locke, Smith og Montesquieu

**John Locke (1632-1704) - Frihetens filosof**

Den engelske filosofen John Locke regnes som liberalismens far. I sitt verk *Two Treatises of Government* (1689) argumenterte han for at alle mennesker har **naturlige rettigheter** til liv, frihet og eiendom.

Locke mente at staten bygger på en **samfunnskontrakt**: Mennesker går frivillig inn i et samfunn og gir staten makt til å beskytte deres rettigheter. Men dersom staten bryter denne kontrakten og undertrykker folket, har folket rett til å gjøre opprør.

Disse ideene inspirerte den amerikanske uavhengighetserklæringen (1776), den franske revolusjonens menneskerettighetserklæring (1789) og moderne menneskerettigheter.

**Adam Smith (1723-1790) - Markedets forsvar**

Den skotske økonomen Adam Smith regnes som grunnleggeren av moderne økonomi. I *The Wealth of Nations* (1776) argumenterte han for at frie markeder skaper velstand for alle.

Smith introduserte ideen om **«den usynlige hånd»**: Når alle følger sin egeninteresse i et fritt marked, blir resultatet til det beste for hele samfunnet - som om en usynlig hånd styrer det. Prismekanismen sørger for at ressurser fordeles effektivt uten at noen planlegger det.

Smith var likevel ikke motstander av all statlig regulering. Han mente staten skulle sørge for forsvar, rettsvesen, infrastruktur og utdanning - oppgaver markedet ikke kunne løse.

**Montesquieu (1689-1755) - Maktfordelingens tenker**

Den franske filosofen Montesquieu formulerte prinsippet om **maktfordeling** i sitt verk *De l'esprit des lois* (1748). Han argumenterte for at statsmakten måtte deles i tre uavhengige grener:

1. **Lovgivende makt** (parlamentet)
2. **Utøvende makt** (regjeringen)
3. **Dømmende makt** (domstolene)

Maktfordeling hindrer at én person eller gruppe får for mye makt. Dette prinsippet er grunnlaget for alle moderne demokratiske forfatninger, inkludert den norske Grunnloven fra 1814.`,
    },
    {
      id: 'pm-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva mente Adam Smith med «den usynlige hånd»?',
        options: [
          { id: 'a', text: 'At staten i det skjulte styrer all økonomisk aktivitet', isCorrect: false },
          { id: 'b', text: 'At frie markeder og egeninteresse fører til fellesskapets beste uten sentral planlegging', isCorrect: true },
          { id: 'c', text: 'At de rike i hemmelighet kontrollerer økonomien', isCorrect: false },
          { id: 'd', text: 'At religiøse krefter styrer den økonomiske utviklingen', isCorrect: false },
        ],
        hints: ['Tenk på hva Smith mente om forholdet mellom egeninteresse og fellesskapets gode.'],
      },
    },
    {
      id: 'pm-3-2-text-3',
      type: 'text',
      content: `## John Stuart Mill og sosialliberalismen

Den britiske filosofen **John Stuart Mill (1806-1873)** videreførte den liberale tradisjonen, men tok den i en ny retning. Mill stilte et avgjørende spørsmål: Hva hjelper det at du har frihet i teorien, hvis du er for fattig, syk eller uutdannet til å bruke den?

**Frihetsprinsippet:**
I sitt verk *On Liberty* (1859) formulerte Mill det berømte **skadeprinsippet**: Den eneste grunnen til å begrense en persons frihet er å hindre skade på andre. Samfunnet har ikke rett til å tvinge individet til å leve på en bestemt måte «for dets eget beste».

**Positiv frihet:**
Mill utviklet ideen om at ekte frihet ikke bare handler om fravær av tvang (negativ frihet), men også om å ha reelle muligheter til å utfolde seg (positiv frihet). Fattigdom, sykdom og uvitenhet begrenser friheten like effektivt som tvang.

**Sosialliberalismen** bygger videre på Mills tanker og mener at staten har et ansvar for å:
- Sikre alle grunnleggende velferd (helse, utdanning, minsteinntekt)
- Utjevne ulike startbetingelser
- Beskytte de svakeste i samfunnet
- Regulere markedet for å hindre monopoler og utnytting

**Mill om kvinners rettigheter:**
Mill var også en tidlig forkjemper for kvinners likestilling. I *The Subjection of Women* (1869) argumenterte han for at kvinner burde ha de samme politiske og sivile rettighetene som menn - en radikal idé i hans samtid.

I Norge representerer partiet **Venstre** den sosialliberale tradisjonen. Venstre var med på å innføre parlamentarismen (1884), stemmerett for menn og kvinner, og har historisk stått for personlig frihet kombinert med sosialt ansvar.`,
    },
    {
      id: 'pm-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom negativ og positiv frihet. Gi et konkret eksempel på hver.',
        hints: ['Negativ frihet handler om fravær av tvang, mens positiv frihet handler om muligheter.'],
        solution: 'Negativ frihet betyr fravær av ytre tvang og hindringer. Eksempel: Ytringsfrihet - staten forbyr deg ikke å si det du mener. Positiv frihet betyr å ha reelle muligheter og ressurser til å utfolde seg. Eksempel: En person som er for fattig til å betale for utdanning har negativ frihet (ingen forbyr dem å studere), men mangler positiv frihet (har ikke økonomiske muligheter til å gjøre det). Sosialliberalismen mener at staten bør sikre positiv frihet gjennom velferd og utdanning, fordi formell frihet uten reelle muligheter er meningsløs.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-2-text-4',
      type: 'text',
      content: `## Nyliberalismen

På 1970- og 1980-tallet fikk en ny retning innenfor liberalismen stor innflytelse: **nyliberalismen**. Denne retningen vokste frem som reaksjon på det man oppfattet som en for stor og ineffektiv stat.

**Friedrich Hayek (1899-1992):**
Den østerrikske økonomen Hayek argumenterte i *The Road to Serfdom* (1944) for at statlig planlegging uunngåelig fører til ufrihet. Jo mer staten styrer økonomien, desto mer makt får den over borgernes liv. Hayek mente at markedet er overlegen enhver planlegging fordi det utnytter kunnskap som er spredt blant millioner av mennesker.

**Milton Friedman (1912-2006):**
Den amerikanske økonomen Friedman ble nyliberalismens mest kjente talsmann. Han argumenterte for privatisering av offentlige tjenester, deregulering av markeder, skattelettelser og fri handel. Friedman mente at staten nesten alltid er en dårligere problemløser enn markedet.

**Thatcher og Reagan:**
Nyliberalismen ble satt ut i praksis av **Margaret Thatcher** i Storbritannia (1979-1990) og **Ronald Reagan** i USA (1981-1989). De gjennomførte:
- Privatisering av statlige bedrifter
- Deregulering av finansmarkeder
- Kutt i velferdsprogrammer
- Skattelettelser, særlig for de rikeste
- Svekkelse av fagforeningene

**Nyliberalismens innflytelse i Norge:**
I Norge har nyliberalismen hatt begrenset, men merkbar innflytelse. Fra 1980-tallet ble finansmarkedene deregulert, en rekke statlige monopoler ble avviklet, og konkurranse ble innført i sektorer som tele, post og energi. FrP og delvis Høyre har stått for nyliberale posisjoner, men den norske modellen med sterk velferdsstat har vært mer motstandsdyktig enn i mange andre land.`,
    },
    {
      id: 'pm-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-3-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er IKKE et typisk nyliberalt krav?',
        options: [
          { id: 'a', text: 'Privatisering av statlige bedrifter', isCorrect: false },
          { id: 'b', text: 'Skattelettelser for å stimulere økonomien', isCorrect: false },
          { id: 'c', text: 'Sterkere statlig regulering av finansmarkedene', isCorrect: true },
          { id: 'd', text: 'Deregulering av markeder', isCorrect: false },
        ],
        hints: ['Tenk på nyliberalismens syn på statens rolle i økonomien.'],
      },
    },
    {
      id: 'pm-3-2-text-5',
      type: 'text',
      content: `## Kritikk av liberalismen

Liberalismen har fått kritikk fra flere hold:

**Fra venstresiden:**
- **Formell vs. reell frihet:** Kritikere mener at liberalismen gir formell frihet (juridiske rettigheter) uten å sikre reell frihet (faktisk mulighet til å bruke rettighetene). Hva hjelper ytringsfrihet hvis du ikke har råd til utdanning?
- **Økonomisk ulikhet:** Markedsøkonomi uten regulering fører til voksende ulikhet. De rike blir rikere, de fattige faller utenfor.
- **Individualisering:** Liberalismens fokus på individet kan undergrave fellesskap og solidaritet.

**Fra konservativt hold:**
- **Tradisjon og fellesskap:** Liberalismen undervurderer betydningen av tradisjon, religion og sosiale bånd. Individet er ikke uavhengig, men del av et fellesskap.
- **Moralsk relativisme:** Ved å la enhver leve som de vil, mister samfunnet et felles moralsk fundament.

**Fra grønt perspektiv:**
- **Veksttvang:** Liberalismens tro på markedet og økonomisk vekst er uforenlig med planetens begrensede ressurser.
- **Kortsiktighet:** Markedet tenker kortsiktig og tar ikke hensyn til fremtidige generasjoner.

**Nyliberalismens konsekvenser:**
- Finanskrisen i 2008 ble av mange sett som et resultat av nyliberal deregulering.
- Voksende ulikhet i mange vestlige land har skapt misnøye og næret populisme.
- Privatisering av offentlige tjenester har i noen tilfeller ført til dyrere og dårligere tilbud.`,
    },
    {
      id: 'pm-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjør rede for de viktigste forskjellene mellom klassisk liberalisme, sosialliberalisme og nyliberalisme. Bruk konkrete eksempler.',
        hints: ['Tenk på hva de tre retningene mener om statens rolle, markedet og individets frihet.'],
        solution: 'Klassisk liberalisme (Locke, Smith) vektlegger naturlige rettigheter og begrenset stat. Staten skal beskytte liv, frihet og eiendom, men ellers la markedet styre. Eksempel: Staten skal ikke bestemme hvilken religion du skal ha. Sosialliberalisme (Mill) mener at frihet krever reelle muligheter. Staten må sikre velferd, utdanning og likere startvilkår. Eksempel: Gratis skolegang slik at alle kan utvikle sine evner, uavhengig av foreldres økonomi. Nyliberalisme (Hayek, Friedman) reagerer mot velferdsstaten og vil redusere statens rolle drastisk gjennom privatisering, deregulering og skattelettelser. Eksempel: Privatisering av helsevesenet fordi markedskonkurranse gir bedre og billigere tjenester. Den viktigste forskjellen handler om synet på staten: Klassisk liberalisme vil ha en minimal stat, sosialliberalismen en aktiv stat, og nyliberalismen en stat som trekker seg tilbake.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om John Stuart Mills skadeprinsipp er en tilstrekkelig rettesnor for når staten bør begrense individets frihet. Gi eksempler på situasjoner der prinsippet er vanskelig å anvende.',
        hints: ['Tenk på hva «skade» betyr - er psykisk skade inkludert? Hva med skade på miljøet? Hva med skade du påfører deg selv?'],
        solution: 'Mills skadeprinsipp sier at frihet kun kan begrenses for å hindre skade på andre. Prinsippet er viktig, men kan være vanskelig å anvende: 1) Hva er «skade»? Er krenkende ytringer skadelige nok til å forby? Er passiv røyking skade? 2) Selvskade: Bør staten hindre folk i å skade seg selv? F.eks. narkotika, motorsykkel uten hjelm, gambling. Mill ville sagt nei, men mange mener staten bør beskytte folk mot seg selv. 3) Indirekte skade: Klimautslipp skader ikke én bestemt person direkte, men har store konsekvenser for alle. 4) Kommende generasjoner: Kan vi «skade» folk som ikke er født ennå? Prinsippet gir et godt utgangspunkt, men krever supplement for å håndtere komplekse moderne utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-3-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvem regnes som «liberalismens far»?',
        options: [
          { id: 'a', text: 'Adam Smith', isCorrect: false },
          { id: 'b', text: 'John Locke', isCorrect: true },
          { id: 'c', text: 'John Stuart Mill', isCorrect: false },
          { id: 'd', text: 'Montesquieu', isCorrect: false },
        ],
        hints: ['Tenk på hvem som først formulerte ideene om naturlige rettigheter og samfunnskontrakten.'],
      },
    },
  ],
};

// ============================================================================
// Kapittel 3.3: Sosialisme og sosialdemokrati
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_3_3: TextbookChapter = {
  id: 'politikk-menneskerett-3-3',
  courseId: 'politikk-menneskerett',
  chapterNumber: '3.3',
  title: 'Sosialisme og sosialdemokrati',
  description: 'Forstå sosialismens historiske røtter fra Karl Marx til moderne sosialdemokrati, og den nordiske modellens særtrekk.',
  estimatedMinutes: 55,
  prevChapter: 'politikk-menneskerett-3-2',
  nextChapter: 'politikk-menneskerett-3-4',
  competenceGoals: [
    'gjøre rede for sosialismens kjerneideer og historiske utvikling',
    'skille mellom marxisme, kommunisme og sosialdemokrati',
    'analysere den nordiske modellens ideologiske grunnlag',
  ],
  keyTerms: [
    { term: 'Sosialisme', definition: 'Politisk ideologi som vektlegger økonomisk likhet, felleseie av produksjonsmidlene og solidaritet. Oppstod som reaksjon på industrikapitalismens urettferdigheter.' },
    { term: 'Marxisme', definition: 'Karl Marx sin teori om at historien drives av klassekamp mellom eiere (borgerskapet) og arbeidere (proletariatet), og at kapitalismen vil erstattes av et klassesløst samfunn.' },
    { term: 'Klassekamp', definition: 'Konflikten mellom ulike samfunnsklasser med motstridende økonomiske interesser. Marx mente klassekampen mellom borgerskap og arbeiderklasse var den viktigste drivkraften i historien.' },
    { term: 'Sosialdemokrati', definition: 'Politisk retning som vil reformere kapitalismen innenfra gjennom demokratiske midler - velferd, omfordeling og regulering - i stedet for revolusjon.' },
    { term: 'Velferdsstaten', definition: 'En stat der det offentlige tar ansvar for borgernes grunnleggende behov som helse, utdanning, trygd og pensjon. Kjennetegner de nordiske landene.' },
    { term: 'Den nordiske modellen', definition: 'Betegnelse for den skandinaviske kombinasjonen av markedsøkonomi, sterk velferdsstat, organisert arbeidsliv og høy tillit. Bygger på sosialdemokratisk tradisjon.' },
    { term: 'Merverdi', definition: 'I Marx sin teori: Forskjellen mellom verdien arbeideren skaper og lønnen arbeideren mottar. Merverdien tilfaller kapitalisten som profitt.' },
  ],
  exercises: [],
  content: [
    {
      id: 'pm-3-3-intro',
      type: 'text',
      content: `## Sosialismen - likhetens ideologi

Sosialismen oppstod som et svar på industrikapitalismens brutalitet. Mens liberalismen feiret individets frihet, spurte sosialistene: Hva slags frihet har en fabrikkarbeider som jobber 16 timer om dagen for sultelønn, mens fabrikkeieren lever i luksus?

**Sosialismens kjerne** er ideen om at økonomisk ulikhet ikke er naturlig, men et resultat av hvordan samfunnet er organisert - og at det kan endres. Sosialister mener at de viktigste ressursene i samfunnet bør eies i fellesskap eller kontrolleres demokratisk, snarere enn av private eiere som jakter profitt.

Sosialismen har tatt mange former gjennom historien, fra Karl Marx sin revolusjonære kommunisme til de nordiske landenes demokratiske sosialisme. I dette kapittelet følger vi utviklingen fra de tidlige utopiske sosialistene via Marx til det sosialdemokratiet som har preget Skandinavia.`,
    },
    {
      id: 'pm-3-3-def-1',
      type: 'definition',
      title: 'Sosialismens kjerneideer',
      content: `**Økonomisk likhet:**
Alle mennesker har lik verdi og bør ha tilnærmet like muligheter og levekår. Stor økonomisk ulikhet er urettferdig og skadelig for samfunnet.

**Felleseie:**
Viktige produksjonsmidler (fabrikker, naturressurser, banker) bør eies av fellesskapet, ikke av private kapitalister. Graden av felleseie varierer mellom sosialistiske retninger.

**Solidaritet:**
Menneskene er gjensidig avhengige av hverandre. Samfunnet har ansvar for alle sine medlemmer, og de sterkeste skuldrene bør bære de tyngste byrdene.

**Klasseperspektiv:**
Samfunnet er preget av motsetninger mellom ulike klasser med ulike økonomiske interesser. Sosialismen tar arbeiderklassens perspektiv.

**Kollektive løsninger:**
Samfunnsproblemer løses best i fellesskap, gjennom stat, fagforeninger og andre kollektive organisasjoner, ikke av enkeltindivider alene.`,
    },
    {
      id: 'pm-3-3-text-2',
      type: 'text',
      content: `## Fra utopisk sosialisme til Marx

**De utopiske sosialistene (tidlig 1800-tall)**

De første sosialistene ble kalt «utopiske» fordi de drømte om idealsamfunn uten å ha en klar strategi for å nå dit.

**Robert Owen (1771-1858):** Britisk fabrikkeier som skapte et mønstersamfunn i New Lanark, Skottland. Han ga arbeiderne kortere arbeidsdager, bedre boliger og skoler for barna. Owen viste at det gikk an å drive en lønnsom fabrikk uten å utbytte arbeiderne, men forsøkene hans ble aldri gjentatt i stor skala.

**Charles Fourier (1772-1837):** Fransk tenker som foreslo å organisere samfunnet i selvforsynte fellesskap kalt «falangsterer», der alle arbeidet frivillig med det de likte best.

**Henri de Saint-Simon (1760-1825):** Fransk tenker som mente at samfunnet burde styres av vitenskapsfolk og industriledere, ikke av adel og prester. Han regnes som en forløper for teknokrati.

**Karl Marx (1818-1883) og Friedrich Engels (1820-1895)**

Karl Marx revolusjonerte sosialistisk tenkning. Han avviste de utopiske sosialistene som naive drømmere og ville gjøre sosialismen **vitenskapelig**.

I sitt hovedverk *Das Kapital* (1867) analyserte Marx kapitalismens virkemåte og mente å bevise at den nødvendigvis ville bryte sammen. Hans viktigste ideer var:`,
    },
    {
      id: 'pm-3-3-def-2',
      type: 'definition',
      title: 'Marx sine nøkkelbegreper',
      content: `**Historisk materialisme:**
Historien drives av endringer i produksjonsforholdene - hvordan samfunnet produserer og fordeler materielle goder. Økonomien er «basis» som former politikk, kultur og ideologi («overbygningen»).

**Klassekamp:**
Alle samfunn er preget av konflikt mellom de som eier produksjonsmidlene og de som arbeider. Under kapitalismen står **borgerskapet** (kapitalistene) mot **proletariatet** (arbeiderklassen).

**Merverdi og utbytting:**
Arbeiderne skaper mer verdi enn de får i lønn. Differansen - **merverdien** - tilfaller kapitalisten som profitt. Dette er ifølge Marx systematisk utbytting.

**Fremmedgjøring:**
Under kapitalismen mister arbeiderne kontroll over sitt eget arbeid og dets produkter. De blir fremmedgjorte - fra arbeidet, fra produktet, fra hverandre og fra sin egen menneskelighet.

**Revolusjon:**
Marx mente at kapitalismens indre motsetninger ville føre til en revolusjon der arbeiderklassen overtok makten. Etter en overgangsperiode («proletariatets diktatur») ville et klasseløst, kommunistisk samfunn oppstå.`,
    },
    {
      id: 'pm-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva mente Marx med «merverdi»?',
        options: [
          { id: 'a', text: 'Den ekstra verdien en vare får når den selges i utlandet', isCorrect: false },
          { id: 'b', text: 'Forskjellen mellom verdien arbeideren skaper og lønnen arbeideren mottar', isCorrect: true },
          { id: 'c', text: 'Økningen i verdien av aksjer over tid', isCorrect: false },
          { id: 'd', text: 'Verdien av statens tjenester til befolkningen', isCorrect: false },
        ],
        hints: ['Tenk på forholdet mellom hva arbeideren produserer og hva arbeideren får betalt.'],
      },
    },
    {
      id: 'pm-3-3-text-3',
      type: 'text',
      content: `## Kommunisme i praksis

Marx sine ideer inspirerte revolusjoner i det 20. århundre, men resultatene ble svært annerledes enn han hadde forutsett.

**Den russiske revolusjonen (1917):**
Vladimir Lenin ledet en revolusjon i Russland og etablerte verdens første kommunistiske stat - Sovjetunionen. Lenin tilpasste Marx sine ideer til russiske forhold: et lite, disiplinert parti (bolsjevikene) skulle lede revolusjonen på vegne av arbeiderklassen.

**Stalinismen:**
Under Josef Stalin (1924-1953) utviklet Sovjetunionen seg til et brutalt diktatur med planøkonomi, tvangsarbeid (gulag), politisk forfølgelse og millioner av dødsofre. «Proletariatets diktatur» ble et diktatur over proletariatet.

**Den kalde krigen (1947-1991):**
Verden ble delt mellom den kapitalistiske Vesten (ledet av USA) og den kommunistiske Østblokken (ledet av Sovjetunionen). Kommunistiske regimer ble etablert i Øst-Europa, Kina, Cuba, Nord-Korea og andre steder.

**Sammenbruddet (1989-1991):**
Berlinmurens fall i 1989 og Sovjetunionens oppløsning i 1991 markerte slutten på den kommunistiske æraen i Europa. Planøkonomien hadde vist seg ineffektiv, og de politiske systemene hadde brutt alle de frihetene Marx hadde kjempet for.

**Arven:**
Kommunismens historie reiser vanskelige spørsmål: Var Stalins terror en uunngåelig konsekvens av Marx sine ideer, eller et svik mot dem? Kan man gjennomføre radikal økonomisk omfordeling uten å undertrykke individuell frihet?`,
    },
    {
      id: 'pm-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Drøft påstanden: «Kommunismen i Sovjetunionen viste at Marx sine ideer er umulige å gjennomføre i praksis.» Er dette en rettferdig vurdering av Marx?',
        hints: ['Tenk på forskjellen mellom Marx sine idealer og hva som faktisk skjedde i Sovjetunionen.'],
        solution: 'Argumenter for påstanden: Sovjetunionen forsøkte å følge Marx og endte i diktatur, planøkonomisk kaos og undertrykking. Lignende mønster gjentok seg i alle kommunistiske stater. Kanskje inneholder Marx sine ideer (revolusjon, proletariatets diktatur, avskaffelse av privat eiendom) elementer som uunngåelig fører til autoritære regimer. Argumenter mot: Marx beskrev et idealsamfunn etter en lang modningsprosess i industrialiserte land. Revolusjonen i Russland skjedde i et fattig jordbruksland, stikk i strid med Marx sin teori. Lenin og spesielt Stalin formet kommunismen i en retning Marx ikke hadde forutsett. Marx var en skarp kritiker av kapitalismen, og mye av kritikken hans (ulikhet, utbytting, fremmedgjøring) er fortsatt relevant selv om hans løsning kanskje ikke fungerte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-3-text-4',
      type: 'text',
      content: `## Sosialdemokratiet - den tredje veien

Mens kommunistene valgte revolusjon, valgte sosialdemokratene en annen strategi: å reformere kapitalismen innenfra gjennom demokratiske midler.

**Eduard Bernstein (1850-1932):**
Den tyske sosialisten Bernstein er sosialdemokratiets teoretiske grunnlegger. Han argumenterte for at Marx tok feil på flere punkter: Kapitalismen brøt ikke sammen, arbeiderklassen fikk det gradvis bedre, og revolusjonen var verken nødvendig eller ønskelig. I stedet burde sosialister arbeide innenfor det demokratiske systemet for å oppnå gradvise forbedringer - **reformisme**.

**Sosialdemokratiets program:**
- **Blandingsøkonomi:** Markedsøkonomi regulert og korrigert av staten, ikke planøkonomi
- **Velferdsstat:** Offentlige ordninger for helse, utdanning, pensjon og trygd
- **Omfordeling:** Progressive skatter og overføringer som utjevner ulikhet
- **Organisert arbeidsliv:** Sterke fagforeninger som forhandler med arbeidsgivere
- **Universelle rettigheter:** Ytelser som gjelder alle borgere, ikke bare de fattigste

**Den nordiske modellen:**

De nordiske landene - Norge, Sverige, Danmark, Finland og Island - utviklet en særegen variant av sosialdemokratiet. **Den nordiske modellen** kjennetegnes av:

1. **Sterk velferdsstat:** Universelle ordninger finansiert av høye skatter
2. **Trepartssamarbeid:** Samarbeid mellom stat, arbeidsgivere og fagforeninger
3. **Høy tillit:** Befolkningen stoler på hverandre og på myndighetene
4. **Likestilling:** Tidlig satsing på kvinners deltakelse i arbeidslivet
5. **Markedsøkonomi:** Privat næringsliv og frihandel, men med sterk regulering
6. **Egalitær kultur:** Små forskjeller mellom folk - Janteloven som kulturelt uttrykk

I Norge har **Arbeiderpartiet (Ap)** vært den viktigste bæreren av sosialdemokratiet. Partiet satt sammenhengende i regjering fra 1945 til 1965 og la grunnlaget for den norske velferdsstaten. Einar Gerhardsen, «landsfaderen», ledet gjenoppbyggingen etter krigen og utformingen av det moderne Norge.`,
    },
    {
      id: 'pm-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-3-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom kommunisme og sosialdemokrati?',
        options: [
          { id: 'a', text: 'Kommunismen vil ha likhet, sosialdemokratiet vil ikke', isCorrect: false },
          { id: 'b', text: 'Sosialdemokratiet vil reformere kapitalismen gjennom demokrati, kommunismen vil erstatte den gjennom revolusjon', isCorrect: true },
          { id: 'c', text: 'Kommunismen er opptatt av arbeidsfolk, sosialdemokratiet av middelklassen', isCorrect: false },
          { id: 'd', text: 'Det er ingen vesentlig forskjell - begge vil ha det samme samfunnet', isCorrect: false },
        ],
        hints: ['Tenk på virkemidlene - revolusjon eller reform?'],
      },
    },
    {
      id: 'pm-3-3-text-5',
      type: 'text',
      content: `## Sosialismens utfordringer i dag

Sosialdemokratiet og sosialismen møter flere utfordringer i det 21. århundre:

**Globalisering:**
Når kapital beveger seg fritt over landegrenser, blir det vanskeligere for nasjonalstater å regulere økonomien og skattlegge bedrifter. Bedrifter kan true med å flytte til lavskattland.

**Endret klassestruktur:**
Den tradisjonelle industriarbeiderklassen har krympet. Nye grupper som tjenesteytere, frilansere og «gig-arbeidere» passer ikke inn i de tradisjonelle kategoriene. Fagforeningsmedlemskapet synker i mange land.

**Innvandring og mangfold:**
Velferdsstatens universelle ordninger ble bygget i homogene nasjonalstater. Økt innvandring utfordrer solidariteten: Er folk villige til å betale høye skatter når pengene også går til «de andre»?

**Klimakrise:**
Sosialdemokratiet har historisk vært knyttet til økonomisk vekst og industrialisering. Klimakrisen utfordrer vekstmodellen og krever en ny tenkning om forholdet mellom økonomi og natur.

**Ny sosialisme?**
I flere land ser vi en fornyet interesse for sosialistiske ideer. Bernie Sanders i USA, Jeremy Corbyn i Storbritannia og partiet Rødt i Norge representerer en venstredreining som utfordrer det moderate sosialdemokratiet. De tar opp spørsmål om voksende ulikhet, boligpriser, studentgjeld og klimakrise.`,
    },
    {
      id: 'pm-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjør rede for den nordiske modellens viktigste kjennetegn. Diskuter om modellen er truet av globalisering og innvandring.',
        hints: ['Start med å forklare hva den nordiske modellen er, og drøft deretter utfordringene.'],
        solution: 'Den nordiske modellen kjennetegnes av: 1) Sterk velferdsstat med universelle ordninger. 2) Trepartssamarbeid mellom stat, arbeidsgivere og fagforeninger. 3) Høy tillit i befolkningen. 4) Blandingsøkonomi med frihandel og regulering. 5) Egalitær kultur med små forskjeller. Globalisering truer modellen fordi bedrifter kan flytte til lavkostland, og det blir vanskeligere å opprettholde høye skatter. Innvandring utfordrer solidariteten som modellen bygger på - forskning viser at etnisk mangfold kan svekke oppslutningen om universelle velferdsordninger. Samtidig har den nordiske modellen vist seg robust: De nordiske landene skårer fortsatt høyest på velstand, likhet og livskvalitet. Tillit og sterke institusjoner kan være viktigere enn etnisk homogenitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-3-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign Karl Marx og Eduard Bernstein sine syn på hvordan sosialismen best kan oppnås. Hvem var mest realistisk?',
        hints: ['Marx var revolusjonær, Bernstein var reformist. Hva sier historien om hvem som hadde rett?'],
        solution: 'Marx mente at kapitalismen ville bryte sammen på grunn av indre motsetninger, og at arbeiderklassen ville gripe makten gjennom revolusjon. Bernstein mente Marx tok feil: Kapitalismen var mer tilpasningsdyktig enn Marx trodde, arbeiderklassen fikk det bedre gjennom reformer, og revolusjon ville sannsynligvis føre til diktatur, ikke frigjøring. Historien gir i stor grad Bernstein rett: Revolusjonær kommunisme førte til diktaturer, mens sosialdemokratisk reformpolitikk ga høy levestandard og frihet i de nordiske landene. Samtidig har Marx sin kritikk av ulikhet og utbytting fått fornyet relevans etter finanskrisen i 2008 og den voksende ulikheten i mange land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-3-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilket norsk parti har historisk vært den viktigste bæreren av sosialdemokratiet?',
        options: [
          { id: 'a', text: 'Sosialistisk Venstreparti (SV)', isCorrect: false },
          { id: 'b', text: 'Rødt', isCorrect: false },
          { id: 'c', text: 'Arbeiderpartiet (Ap)', isCorrect: true },
          { id: 'd', text: 'Senterpartiet (Sp)', isCorrect: false },
        ],
        hints: ['Tenk på hvilket parti som bygde den norske velferdsstaten etter krigen.'],
      },
    },
  ],
};

// ============================================================================
// Kapittel 3.4: Konservatisme og kristendemokrati
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_3_4: TextbookChapter = {
  id: 'politikk-menneskerett-3-4',
  courseId: 'politikk-menneskerett',
  chapterNumber: '3.4',
  title: 'Konservatisme og kristendemokrati',
  description: 'Forstå konservatismens forsvar for tradisjon og gradvise endringer, fra Edmund Burke til moderne norsk konservatisme og kristendemokrati.',
  estimatedMinutes: 50,
  prevChapter: 'politikk-menneskerett-3-3',
  nextChapter: 'politikk-menneskerett-3-5',
  competenceGoals: [
    'gjøre rede for konservatismens kjerneideer og historiske bakgrunn',
    'skille mellom tradisjonell konservatisme og kristendemokrati',
    'drøfte konservatismens syn på endring, tradisjon og verdier',
  ],
  keyTerms: [
    { term: 'Konservatisme', definition: 'Politisk ideologi som vektlegger tradisjon, gradvise endringer, sosial orden og respekt for velprøvde institusjoner. Oppstod som reaksjon på den franske revolusjonen.' },
    { term: 'Tradisjonalisme', definition: 'Holdningen om at nedarvede skikker, institusjoner og verdier har bevist sin verdi over tid og bør bevares. Nye ideer bør prøves forsiktig.' },
    { term: 'Kristendemokrati', definition: 'Politisk retning som bygger på kristne verdier som nestekjærlighet, menneskeverd og forvalteransvar. Kombinerer sosial rettferdighet med tradisjonelle verdier.' },
    { term: 'Organisk samfunnssyn', definition: 'Oppfatningen av at samfunnet er en levende organisme der alle delene henger sammen. Endringer bør skje gradvis for ikke å ødelegge den organiske helheten.' },
    { term: 'Subsidiaritetsprinsippet', definition: 'Prinsippet om at beslutninger bør fattes på lavest mulig nivå - av individet, familien eller lokalsamfunnet før staten. Sentralt i kristendemokratiet.' },
    { term: 'Neokonservatisme', definition: 'Moderne retning som kombinerer konservative verdier med aktivistisk utenrikspolitikk og markedsøkonomi. Særlig fremtredende i USA.' },
  ],
  exercises: [],
  content: [
    {
      id: 'pm-3-4-intro',
      type: 'text',
      content: `## Konservatismen - tradisjonens forsvar

Mens liberalismen og sosialismen vil forandre samfunnet, vil konservatismen bevare det som fungerer. Konservatismen er skeptisk til radikale endringer og mener at historiske institusjoner, tradisjoner og verdier rommer en visdom som ideologiske eksperimenter ikke kan erstatte.

Konservatismen er kanskje den mest misforståtte ideologien. Den betyr ikke at man er mot all forandring - konservative aksepterer at samfunnet endrer seg. Men endringene bør skje **gradvis**, bygge på erfaring fremfor teori, og respektere det som allerede fungerer.

I norsk politikk er **Høyre** det viktigste konservative partiet, mens **Kristelig Folkeparti (KrF)** representerer den kristendemokratiske tradisjonen. Men konservative elementer finnes i de fleste partier.`,
    },
    {
      id: 'pm-3-4-def-1',
      type: 'definition',
      title: 'Konservatismens kjerneideer',
      content: `**Tradisjon og erfaring:**
Velprøvde institusjoner og skikker har bestått tidens test og rommer en kollektiv visdom. Det er farlig å rive ned noe som generasjoner har bygget opp, basert på abstrakte teorier.

**Gradvise endringer:**
Samfunnet bør endres forsiktig og stegvis, ikke gjennom revolusjon eller radikale reformer. Uforutsette konsekvenser er uunngåelige ved raske endringer.

**Organisk samfunnssyn:**
Samfunnet er ikke en maskin som kan designes på nytt, men en levende organisme. Familie, lokalsamfunn, menighet og foreningsliv er viktigere enn staten.

**Menneskelig ufullkommenhet:**
Mennesket er feilbarlig og drives av mer enn fornuft. Utopiske prosjekter som ignorerer menneskets svakheter, er dømt til å mislykkes.

**Sosial orden:**
Et vel fungerende samfunn trenger orden, autoritet og respekt for loven. Uten dette oppstår kaos.

**Eiendomsrett:**
Privat eiendom er grunnlaget for individuell frihet og et stabilt samfunn.`,
    },
    {
      id: 'pm-3-4-text-2',
      type: 'text',
      content: `## Edmund Burke - konservatismens far

Den irsk-britiske politikeren og filosofen **Edmund Burke (1729-1797)** regnes som konservatismens grunnlegger. I sitt verk *Reflections on the Revolution in France* (1790) formulerte han en skarp kritikk av den franske revolusjonen.

**Burkes hovedargumenter:**

1. **Mot abstrakte rettigheter:** Burke var skeptisk til revolusjonens erklæring om universelle menneskerettigheter. Han mente at rettigheter vokser frem historisk innenfor konkrete samfunn, ikke som abstrakte prinsipper. Engelske rettigheter som Magna Carta (1215) og Bill of Rights (1689) var vokst frem over århundrer.

2. **Samfunnskontrakten mellom generasjoner:** Mens Locke mente at samfunnskontrakten er mellom levende mennesker, mente Burke at den binder sammen de døde, de levende og de enda ufødte. Vi har en plikt til å forvalte det vi har arvet og gi det videre i forbedret stand.

3. **Fordommer som visdom:** Burke brukte ordet «fordom» (prejudice) positivt. Nedarvet visdom, vaner og følelser er verdifulle fordi de rommer generasjoners erfaring. Ren fornuft alene er ikke nok til å styre et samfunn.

4. **Revolusjonens farer:** Burke forutsa at den franske revolusjonen ville ende i vold og diktatur - noe den også gjorde under «Skrekkveldet» og senere under Napoleon.

Burke var likevel ikke mot all forandring. Han støttet de amerikanske kolonistenes opprør fordi de kjempet for tradisjonelle engelske rettigheter. Hans poeng var at endring bør bygge på det bestående, ikke rive det ned.`,
    },
    {
      id: 'pm-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva var Edmund Burkes hovedkritikk av den franske revolusjonen?',
        options: [
          { id: 'a', text: 'At den ikke gikk langt nok i å endre samfunnet', isCorrect: false },
          { id: 'b', text: 'At radikale endringer basert på abstrakte ideer er farlige og ødelegger velprøvde institusjoner', isCorrect: true },
          { id: 'c', text: 'At den var for dyr og ineffektiv', isCorrect: false },
          { id: 'd', text: 'At den burde ha innført kommunisme i stedet for demokrati', isCorrect: false },
        ],
        hints: ['Tenk på Burkes syn på tradisjon og gradvise endringer versus revolusjon.'],
      },
    },
    {
      id: 'pm-3-4-text-3',
      type: 'text',
      content: `## Konservatismens ulike retninger

Konservatismen har utviklet seg i flere retninger:

**Tradisjonell konservatisme (Burke-tradisjonen):**
Vektlegger tradisjon, gradvise endringer og organisk samfunnsutvikling. Skeptisk til både uregulert marked og sterk stat. I Storbritannia representert av «one nation»-konservative som Benjamin Disraeli, som mente at de velstående har et ansvar for de fattige.

**Liberalkonservatisme:**
Kombinerer konservative verdier med liberal markedsøkonomi. I Norge representerer **Høyre** denne tradisjonen: tradisjonelle verdier, markedsøkonomi og begrenset stat, men aksept for en grunnleggende velferdsstat.

**Neokonservatisme:**
Oppstod i USA på 1970-tallet. Kombinerer konservative moralske verdier med en aktivistisk utenrikspolitikk og sterk markedsøkonomi. Fremtredende under George W. Bush sin presidentperiode.

**Sosialkonservatisme:**
Vektlegger tradisjonelle sosiale verdier som familien, religion og nasjonal identitet. Ofte kritisk til innvandring, multikulturalisme og raske kulturelle endringer.

**Grønn konservatisme:**
En nyere retning som mener forvalteransvaret - plikten til å bevare det vi har mottatt - også gjelder naturen. Kombinerer miljøvern med konservative verdier.`,
    },
    {
      id: 'pm-3-4-text-4',
      type: 'text',
      content: `## Kristendemokratiet

**Kristendemokratiet** er en beslektet, men selvstendig politisk tradisjon som bygger på kristne verdier. Det vokste frem i Europa på slutten av 1800-tallet som en reaksjon på både liberalismens individualisme og sosialismens materialisme.

**Kristendemokratiets røtter:**
Pave Leo XIII skrev i 1891 encyklikaen *Rerum Novarum* (Om nye ting), som la grunnlaget for katolsk sosiallære. Dokumentet kritiserte både uregulert kapitalisme og revolusjonær sosialisme, og argumenterte for en «tredje vei» basert på:
- **Menneskeverd:** Alle mennesker har ukrenkelig verdi som skapt i Guds bilde
- **Solidaritet:** Vi har ansvar for hverandre, spesielt de svakeste
- **Subsidiaritet:** Beslutninger bør fattes nærmest mulig dem de angår
- **Forvalteransvar:** Vi er forvaltere, ikke eiere, av skaperverket

**Kristendemokratiet i Europa:**
Etter andre verdenskrig ble kristendemokratiske partier dominerende i mange europeiske land. CDU i Tyskland (Konrad Adenauer, Angela Merkel) og DC i Italia var sentrale i gjenoppbyggingen av Europa.

**KrF i Norge:**
Kristelig Folkeparti ble stiftet i 1933 og har vært et sentrumsparti som kombinerer kristne verdier med pragmatisk politikk. KrF har vært opptatt av:
- Familiepolitikk og kontantstøtte
- Bistand til fattige land
- Alkoholpolitikk og folkehelse
- Menneskerettigheter og religionsfrihet
- Menneskeverd i bioetiske spørsmål (abort, bioteknologi)

KrF har historisk fungert som en brobygger mellom blokkene i norsk politikk, og har samarbeidet med både venstre- og høyresiden.`,
    },
    {
      id: 'pm-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva subsidiaritetsprinsippet innebærer, og gi et eksempel på hvordan det kan brukes i norsk politikk.',
        hints: ['Tenk på hvilket nivå beslutninger bør fattes - individet, familien, kommunen eller staten.'],
        solution: 'Subsidiaritetsprinsippet sier at beslutninger bør fattes på lavest mulig nivå. Det staten kan overlate til kommunen, bør den gjøre. Det kommunen kan overlate til familien, bør den gjøre. Det familien kan overlate til individet, bør den gjøre. Prinsippet innebærer ikke at staten er uviktig, men at den bare bør gripe inn når lavere nivåer ikke kan løse oppgaven. Eksempel i norsk politikk: Kontantstøtte-debatten. KrF har argumentert for at familiene selv bør velge omsorgsform for små barn (subsidiaritet), mens andre mener at barnehage er best for alle barn og bør styres av staten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-4-text-5',
      type: 'text',
      content: `## Konservatismen i Norge - Høyre

**Høyre** ble stiftet i 1884 og er Norges viktigste konservative parti. Partiet har gjennomgått store endringer:

**Embetsmannsstaten (1800-tallet):** Høyre forsvarte opprinnelig embetsmennenes makt mot folkestyret. Partiet var mot innføring av parlamentarismen i 1884.

**Mellomkrigstiden:** Høyre ble gradvis mer demokratisk og aksepterte folkestyret. Partiet stod for forsvar av eiendomsrett og markedsøkonomi.

**Etterkrigstiden:** Under Kåre Willoch (statsminister 1981-1986) ble Høyre et mer liberalkonservativt parti som kombinerte markedsøkonomi med aksept for velferdsstaten.

**Moderne Høyre:** Under Erna Solberg (statsminister 2013-2021) befestet Høyre seg som et bredt sentrum-høyre-parti. Moderne Høyre vektlegger:
- Valgfrihet og personlig ansvar
- Privat eierskap og lavere skatter
- Kunnskap og utdanning
- Bærekraftig velferdsstat
- Internasjonal frihandel

**Konservatismens relevans i dag:**
Konservative ideer har fått fornyet aktualitet i møte med raske teknologiske og kulturelle endringer. Spørsmål om nasjonal identitet, innvandring og tradisjonelle verdier har gjort konservatismen mer relevant for mange velgere. Samtidig utfordres konservatismen av populistiske bevegelser som vil ha raskere og mer radikale endringer enn den tradisjonelle konservatismen åpner for.`,
    },
    {
      id: 'pm-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign konservatismens og liberalismens syn på endring i samfunnet. Hva er de viktigste forskjellene?',
        hints: ['Tenk på hva de to ideologiene mener om tradisjon, fornuft og forandring.'],
        solution: 'Liberalismen ser forandring som noe grunnleggende positivt: Fornuften kan forbedre samfunnet, utdaterte tradisjoner bør erstattes med bedre løsninger, og individets frihet er viktigere enn tradisjon. Liberalister stoler på at rasjonell debatt og vitenskap kan vise veien fremover. Konservatismen er mer skeptisk til forandring: Tradisjon rommer erfaring og visdom som ikke kan erstattes av abstrakte teorier, raske endringer skaper uforutsette problemer, og menneskets ufullkommenhet gjør at utopiske prosjekter er farlige. Konservative foretrekker gradvise reformer som bygger på det bestående. Nøkkelforskjellen er synet på tradisjon: For liberalismen er tradisjon noe som må begrunnes rasjonelt for å beholdes. For konservatismen er tradisjon verdifull nettopp fordi den har bestått tidens prøve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-3-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er det organiske samfunnssynet?',
        options: [
          { id: 'a', text: 'At samfunnet bør dyrke kun økologisk mat', isCorrect: false },
          { id: 'b', text: 'At samfunnet er som en levende organisme der alle deler henger sammen, og endringer bør skje gradvis', isCorrect: true },
          { id: 'c', text: 'At samfunnet styres av naturlover, og politikk er unødvendig', isCorrect: false },
          { id: 'd', text: 'At bare naturvitenskapelig utdannede bør ha stemmerett', isCorrect: false },
        ],
        hints: ['Tenk på metaforen om samfunnet som en kropp.'],
      },
    },
    {
      id: 'pm-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-3-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft konservatismens styrker og svakheter som politisk ideologi. Er det alltid lurt å bevare det bestående?',
        hints: ['Tenk på situasjoner der tradisjon har vært verdifull, og situasjoner der den har stått i veien for viktige endringer.'],
        solution: 'Styrker: Konservatismen minner oss om at radikale endringer kan ha uforutsette konsekvenser (f.eks. den franske revolusjonen endte i terror). Tradisjon og erfaring er verdifulle kunnskapskilder. Stabilitet og sosial orden er viktig for menneskers trygghet. Svakheter: Konservatismen kan brukes til å forsvare urettferdige ordninger (slaveri, undertrykking av kvinner, diskriminering). Noen ganger er radikale endringer nødvendige - slaveriet ble ikke avskaffet gradvis, det måtte oppheves. Konservativt forsvar for det bestående favoriserer de som allerede har makt og privilegier. Konklusjon: Konservatismen har et poeng i at vi bør være forsiktige med endringer, men den kan ikke brukes som argument for å bevare urettferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-3-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva skiller kristendemokratiet fra tradisjonell konservatisme?',
        options: [
          { id: 'a', text: 'Kristendemokratiet bygger på kristne verdier som nestekjærlighet og menneskeverd, ikke bare tradisjon', isCorrect: true },
          { id: 'b', text: 'Kristendemokratiet er en sosialistisk retning', isCorrect: false },
          { id: 'c', text: 'Kristendemokratiet vil ha en religiøs stat', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell - begge er konservative', isCorrect: false },
        ],
        hints: ['Tenk på verdigrunnlaget og synet på sosial rettferdighet.'],
      },
    },
  ],
};

// ============================================================================
// Kapittel 3.5: Populisme, nasjonalisme og andre ideologier
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_3_5: TextbookChapter = {
  id: 'politikk-menneskerett-3-5',
  courseId: 'politikk-menneskerett',
  chapterNumber: '3.5',
  title: 'Populisme, nasjonalisme og andre ideologier',
  description: 'Forstå populisme, nasjonalisme, grønn ideologi, feminisme og anarkisme - ideologier som utfordrer det tradisjonelle politiske landskapet.',
  estimatedMinutes: 55,
  prevChapter: 'politikk-menneskerett-3-4',
  nextChapter: 'politikk-menneskerett-3-6',
  competenceGoals: [
    'gjøre rede for populisme og nasjonalisme som politiske fenomener',
    'analysere nyere ideologiske retninger som grønn ideologi og feminisme',
    'drøfte hvordan nye skillelinjer utfordrer det tradisjonelle venstre-høyre-skillet',
  ],
  keyTerms: [
    { term: 'Populisme', definition: 'Politisk stil eller ideologi som hevder å representere «folket» mot en korrupt «elite». Finnes i både venstre- og høyrevarianter.' },
    { term: 'Nasjonalisme', definition: 'Politisk ideologi som setter nasjonen i sentrum og mener at hvert folk bør ha sin egen stat. Kan være inkluderende (borgerlig) eller ekskluderende (etnisk).' },
    { term: 'Grønn ideologi', definition: 'Politisk retning som setter miljø og bærekraft i sentrum. Utfordrer den økonomiske veksttenkningen som preger andre ideologier.' },
    { term: 'Feminisme', definition: 'Politisk bevegelse og teori som kjemper for likestilling mellom kjønnene og mot patriarkalske strukturer i samfunnet.' },
    { term: 'Anarkisme', definition: 'Politisk ideologi som avviser all form for hierarkisk makt og stat. Mener at mennesker kan organisere seg frivillig uten tvangsmakt.' },
    { term: 'Høyrepopulisme', definition: 'Politisk retning som kombinerer populistisk retorikk med nasjonalisme, innvandringsskepsis og motstand mot eliter og overnasjonale organisasjoner.' },
    { term: 'Økofeminisme', definition: 'Retning som ser sammenheng mellom undertrykkelse av kvinner og utnyttelse av naturen, og mener begge har røtter i patriarkalske maktstrukturer.' },
  ],
  exercises: [],
  content: [
    {
      id: 'pm-3-5-intro',
      type: 'text',
      content: `## Utover venstre og høyre

De tre store ideologiene - liberalisme, sosialisme og konservatisme - har dominert europeisk politikk i over to hundre år. Men de har aldri vært alene. Andre politiske ideer har utfordret, supplert og noen ganger truet de etablerte ideologiene.

I dette kapittelet ser vi på politiske retninger som ikke alltid passer inn i det tradisjonelle venstre-høyre-skillet: **populisme**, **nasjonalisme**, **grønn ideologi**, **feminisme** og **anarkisme**. Noen av disse er gamle ideologier med nye former, andre er genuint nye svar på nye utfordringer.`,
    },
    {
      id: 'pm-3-5-text-2',
      type: 'text',
      content: `## Populisme - folket mot eliten

**Populisme** er et av de mest omtalte - og omdiskuterte - politiske fenomenene i vår tid. Men hva er det egentlig?

Populisme er ikke en fullstendig ideologi, men snarere en **politisk stil** eller **tynn ideologi** som kan kombineres med ulike politiske retninger. Kjernen i populismen er en motsetning mellom to grupper:

1. **«Folket»:** Den vanlige, ærlige befolkningen som er undertrykt eller ignorert
2. **«Eliten»:** En korrupt, selvopptatt overklasse som styrer til egen fordel

Populister hevder å representere «folkets vilje» mot en elite som svikter dem. Men hvem «folket» og «eliten» er, varierer:

**Høyrepopulisme:**
«Folket» er den opprinnelige nasjonen, truet av innvandring og globalisering. «Eliten» er liberale medier, akademikere og politikere som fremmer multikulturalisme og overnasjonale organisasjoner. Eksempler: Donald Trump (USA), Marine Le Pen (Frankrike), Viktor Orbán (Ungarn). I Norge har **Fremskrittspartiet (FrP)** hatt populistiske trekk, særlig under Carl I. Hagen.

**Venstrepopulisme:**
«Folket» er de vanlige arbeiderne og de fattige, undertrykt av rike kapitalister og storselskaper. «Eliten» er milliardærer, banker og deres politiske allierte. Eksempler: Hugo Chávez (Venezuela), Podemos (Spania), Bernie Sanders (USA).`,
    },
    {
      id: 'pm-3-5-def-1',
      type: 'definition',
      title: 'Kjennetegn ved populisme',
      content: `**Anti-elitisme:**
Populister angriper konsekvent «eliten» - politikere, medier, eksperter, byråkrater - og hevder at disse svikter vanlige folk.

**«Folkets vilje»:**
Populister hevder å kjenne og representere «folkets vilje» - en antatt enhetlig folkemening som eliten ignorerer.

**Forenkling:**
Komplekse problemer fremstilles med enkle årsaker og enkle løsninger. «Hvis bare eliten hørte på folket, ville alt bli bra.»

**Karismatiske ledere:**
Populistiske bevegelser samles ofte rundt sterke, karismatiske ledere som fremstiller seg som «en av folket».

**Anti-pluralisme:**
Populister avviser ofte at det finnes legitim uenighet. De som er uenige med «folkets vilje» er enten del av eliten eller villedet.

**Kritikk av populisme:**
- Hvem er «folket»? Det finnes ikke én felles folkevilje - demokrati handler nettopp om å håndtere uenighet.
- Populisme kan undergrave demokratiske institusjoner som uavhengige domstoler og frie medier.
- Populismens forenklinger kan lede til dårlig politikk.`,
    },
    {
      id: 'pm-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom høyre- og venstrepopulisme?',
        options: [
          { id: 'a', text: 'Høyrepopulisme er demokratisk, venstrepopulisme er det ikke', isCorrect: false },
          { id: 'b', text: 'De definerer «folket» og «eliten» forskjellig - høyrepopulisme kulturelt/nasjonalt, venstrepopulisme økonomisk/klassemessig', isCorrect: true },
          { id: 'c', text: 'Høyrepopulisme finnes bare i Europa, venstrepopulisme bare i Latin-Amerika', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell - populisme er alltid det samme', isCorrect: false },
        ],
        hints: ['Tenk på hvem som er «folket» og hvem som er «eliten» i de to variantene.'],
      },
    },
    {
      id: 'pm-3-5-text-3',
      type: 'text',
      content: `## Nasjonalisme

**Nasjonalismen** er ideen om at verden er delt i nasjoner, og at hver nasjon har rett til sin egen stat. Nasjonalismen har vært en av de mektigste politiske kreftene i moderne historie - den har skapt stater, men også ført til krig og folkemord.

**Nasjonalismens to ansikter:**

**Borgerlig (inkluderende) nasjonalisme:**
Nasjonen defineres av felles statsborgerskap, lover og verdier. Alle som bor i landet og aksepterer dets grunnleggende verdier, tilhører nasjonen uavhengig av etnisitet. Denne formen for nasjonalisme var sentral i frigjøringsbevegelser mot kolonialisme og i Norges løsrivelse fra Sverige i 1905.

**Etnisk (ekskluderende) nasjonalisme:**
Nasjonen defineres av felles etnisitet, språk, kultur og avstamning. De som ikke tilhører den etniske gruppen, vil aldri bli «ekte» medlemmer av nasjonen. Denne formen for nasjonalisme har inspirert rasisme, fremmedfrykt og i verste fall folkemord.

**Nasjonalisme i norsk historie:**
Norsk nasjonalisme har hovedsakelig vært av den inkluderende typen. Nasjonsbyggingen på 1800-tallet - med vekt på norsk språk, folkekultur og historie - handlet om å skape en felles identitet etter løsrivelsen fra Danmark (1814). Unionsoppløsningen i 1905 var et nasjonalistisk prosjekt med bred folkelig støtte.

Men norsk nasjonalisme har også en mørkere side. Fornorskingspolitikken overfor samer og kvener var en form for kulturell nasjonalisme der minoriteter ble tvunget til å oppgi sitt språk og sin kultur.`,
    },
    {
      id: 'pm-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-3-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom borgerlig (inkluderende) og etnisk (ekskluderende) nasjonalisme. Gi et historisk eksempel på hver.',
        hints: ['Tenk på hva som definerer nasjonen - statsborgerskap og verdier, eller etnisitet og avstamning?'],
        solution: 'Borgerlig nasjonalisme definerer nasjonen gjennom felles statsborgerskap, lover og verdier. Alle som bor i landet og aksepterer verdiene kan tilhøre nasjonen. Eksempel: Norges løsrivelse fra Sverige i 1905, der alle innbyggere ble del av den norske nasjonen uavhengig av bakgrunn, basert på folkeavstemning og demokratisk rett. Etnisk nasjonalisme definerer nasjonen gjennom felles etnisitet, blod og kultur. De som ikke har «riktig» bakgrunn, kan aldri bli fullverdige medlemmer. Eksempel: Nazistenes «blod og jord»-ideologi i Tyskland, som definerte nasjonen gjennom «arisk» rase og utelukket jøder, roma og andre fra nasjonalt fellesskap, med folkemord som konsekvens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-5-text-4',
      type: 'text',
      content: `## Grønn ideologi

Den **grønne ideologien** (økologismen) oppstod på 1960- og 1970-tallet som svar på økende miljøproblemer. Den utfordrer en grunnleggende antakelse som deles av liberalisme, sosialisme og konservatisme: at økonomisk vekst er et gode.

**Grunnleggende ideer:**

1. **Økologisk grense:** Jorden har begrensede ressurser. Ubegrenset økonomisk vekst er umulig på en begrenset planet.
2. **Bærekraft:** Vi må leve slik at fremtidige generasjoner har de samme mulighetene som oss.
3. **Systemtenkning:** Alt henger sammen. Mennesker er del av naturen, ikke herskere over den.
4. **Desentralisering:** Lokale, småskala løsninger er ofte bedre enn store, sentraliserte systemer.

**Dypøkologi vs. reformøkologi:**
- **Dypøkologi** (Arne Næss): Naturen har egenverdi uavhengig av nytten for mennesker. Krever radikale endringer i livsstil og samfunn.
- **Reformøkologi:** Miljøproblemene kan løses innenfor det eksisterende systemet gjennom regulering, teknologi og grønne avgifter.

**MDG i Norge:**
Miljøpartiet De Grønne (MDG) ble stiftet i 1988 og representerer den grønne ideologien i norsk politikk. Partiet hevder å stå «hverken til venstre eller høyre, men foran» - og setter klima og miljø over den tradisjonelle venstre-høyre-aksen. MDG har fått kritikk for å ville avvikle norsk petroleumsvirksomhet for raskt.

Den norske filosofen **Arne Næss (1912-2009)** er en av grønn ideologis viktigste tenkere internasjonalt. Hans «dypøkologi» argumenterer for at naturen har verdi i seg selv, og at vi trenger et grunnleggende skifte i måten vi ser på forholdet mellom menneske og natur.`,
    },
    {
      id: 'pm-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-3-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva skiller grønn ideologi fra de andre store ideologiene?',
        options: [
          { id: 'a', text: 'Grønn ideologi er mot demokrati', isCorrect: false },
          { id: 'b', text: 'Grønn ideologi utfordrer antakelsen om at økonomisk vekst er et gode', isCorrect: true },
          { id: 'c', text: 'Grønn ideologi er en form for konservatisme', isCorrect: false },
          { id: 'd', text: 'Grønn ideologi mener bare eksperter bør bestemme', isCorrect: false },
        ],
        hints: ['Tenk på hva som er felles for liberalisme, sosialisme og konservatisme når det gjelder økonomisk vekst.'],
      },
    },
    {
      id: 'pm-3-5-text-5',
      type: 'text',
      content: `## Feminisme

**Feminismen** er en politisk bevegelse og teori som kjemper for likestilling mellom kjønnene. Feminismen har gjennomgått flere «bølger»:

**Første bølge (1800-tallet - tidlig 1900-tall):**
Kampen for juridiske rettigheter, særlig stemmerett. I Norge fikk kvinner alminnelig stemmerett i 1913, som et av de første landene i verden. Viktige norske forkjempere var Gina Krog og Fredrikke Qvam.

**Andre bølge (1960-1980-tallet):**
Kampen for reell likestilling i arbeidslivet, familien og samfunnet. Slagord som «Det personlige er politisk» og kampen for selvbestemt abort, likelønn og barnehageplasser preget denne perioden. Likestillingsloven ble vedtatt i Norge i 1978.

**Tredje bølge (1990-tallet - i dag):**
Fokus på mangfold og interseksjonalitet - hvordan kjønn samspiller med etnisitet, klasse, seksualitet og funksjonshemning. Kritikk av at tidlig feminisme var for opptatt av hvite middelklassekvinners problemer.

**Fjerde bølge (2010-tallet - i dag):**
Nettfeminisme og #MeToo-bevegelsen. Fokus på seksuell trakassering, samtykke og maktmisbruk.

**Feminismens retninger:**
- **Liberalfeminisme:** Vil ha like rettigheter og muligheter innenfor det eksisterende systemet.
- **Sosialistisk feminisme:** Ser kvinneundertrykkelse som knyttet til kapitalismen. Frigjøring krever endring av økonomiske strukturer.
- **Radikalfeminisme:** Mener at patriarkatet er det grunnleggende undertrykkingssystemet. Krever radikale endringer i kultur og samfunnsstruktur.
- **Økofeminisme:** Ser sammenheng mellom undertrykkelse av kvinner og utnyttelse av naturen.`,
    },
    {
      id: 'pm-3-5-text-6',
      type: 'text',
      content: `## Anarkisme

**Anarkismen** er den mest radikale av de politiske ideologiene. Den avviser all form for hierarkisk makt og tvang - inkludert staten.

Ordet «anarki» betyr ikke kaos, men «uten herrer» (fra gresk *an-archos*). Anarkister mener at mennesker kan organisere seg frivillig i likeverdige fellesskap uten behov for en tvangsstat.

**Viktige anarkistiske tenkere:**

**Pierre-Joseph Proudhon (1809-1865):** Fransk tenker som erklærte at «eiendom er tyveri». Han ville erstatte staten og kapitalismen med frivillige sammenslutninger av arbeidere.

**Mikhail Bakunin (1814-1876):** Russisk revolusjonær som var Karl Marx sin hovedmotstander i den sosialistiske bevegelsen. Mens Marx ville bruke staten til å gjennomføre sosialismen, mente Bakunin at staten selv var problemet og måtte avskaffes umiddelbart.

**Peter Kropotkin (1842-1921):** Russisk fyrste og geograf som argumenterte for at samarbeid, ikke konkurranse, var naturens grunnleggende prinsipp. I *Gjensidig hjelp* (1902) viste han at dyrearter som samarbeider, klarer seg best.

**Anarkisme i dag:**
Anarkistiske ideer lever videre i:
- Autonome bevegelser og ulike aktivistmiljøer
- Desentraliserte organisasjonsformer og kooperativer
- Deler av miljøbevegelsen og globaliseringskritikken
- Digitale fellesskap basert på frivillig samarbeid (open source, Wikipedia)

Kritikere av anarkismen mener den er utopisk: Uten stat vil den sterkestes rett gjelde, og det finnes ingen mekanisme for å løse konflikter fredelig i stor skala.`,
    },
    {
      id: 'pm-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-3-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjør rede for feminismens fire bølger og forklar hva som kjennetegner hver av dem.',
        hints: ['Tenk på hva som var den viktigste kampsaken i hver periode.'],
        solution: 'Første bølge (1800-tallet - tidlig 1900-tall): Kampen for juridiske rettigheter, spesielt stemmerett. Kvinner hadde ikke lov til å stemme, eie eiendom eller studere. Norske kvinner fikk stemmerett i 1913. Andre bølge (1960-1980-tallet): Kampen for reell likestilling utover juridiske rettigheter - i arbeidslivet, familien og kroppen. Sentrale saker var likelønn, barnehageplasser, selvbestemt abort og likestillingsloven. Tredje bølge (1990-tallet): Fokus på mangfold og interseksjonalitet. Erkjennelse av at kvinner er forskjellige og at kjønn samspiller med etnisitet, klasse og seksualitet. Fjerde bølge (2010-tallet): Nettbasert aktivisme og #MeToo-bevegelsen. Fokus på seksuell trakassering, samtykke og maktmisbruk. Sosiale medier som verktøy for mobilisering og bevisstgjøring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-3-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om populisme er en trussel mot demokratiet, eller om den tvert imot kan styrke demokratiet ved å gi en stemme til folk som føler seg oversett.',
        hints: ['Tenk på både positive og negative sider ved populisme.'],
        solution: 'Populisme som trussel: Populister kan undergrave demokratiske institusjoner som uavhengige domstoler, frie medier og minoritetsrettigheter. Påstanden om å representere hele «folkets vilje» er anti-pluralistisk og kan brukes til å delegitimere opposisjon. Populistiske ledere kan utnytte folkelig misnøye til å konsentrere makt. Populisme som demokratisk korrektiv: Populisme kan synliggjøre reelle problemer som etablerte partier har oversett (f.eks. økende ulikhet, innvandringens konsekvenser). Den kan mobilisere grupper som har trukket seg fra politisk deltakelse. Den tvinger eliter til å lytte til vanlige folks bekymringer. Konklusjon: Populisme er et varsel om at demokratiet ikke fungerer godt nok for alle. Svaret er ikke å avvise populismens tilhengere, men å ta deres bekymringer på alvor innenfor demokratiske rammer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-3-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva betyr «anarki» bokstavelig?',
        options: [
          { id: 'a', text: 'Kaos og lovløshet', isCorrect: false },
          { id: 'b', text: 'Uten herrer / uten styre', isCorrect: true },
          { id: 'c', text: 'Revolusjon', isCorrect: false },
          { id: 'd', text: 'Direkte demokrati', isCorrect: false },
        ],
        hints: ['Tenk på det greske ordet an-archos.'],
      },
    },
    {
      id: 'pm-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'pm-3-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Velg en av de «nye» ideologiene (grønn ideologi, feminisme, populisme eller anarkisme) og drøft om den er relevant for å forstå politikk i Norge i dag. Gi konkrete eksempler.',
        hints: ['Tenk på aktuelle politiske debatter i Norge og hvordan den valgte ideologien belyser dem.'],
        solution: 'Eksempel med grønn ideologi: Grønn ideologi er svært relevant i norsk politikk i dag. Debatten om oljepolitikk er et direkte møte mellom grønn ideologi (stoppe oljeproduksjonen for klimaet) og tradisjonelle ideologier (fortsette fordi det gir arbeidsplasser og inntekter). MDG fikk gjennomslag for bilfritt byliv i Oslo. Klimastreikene blant ungdom viser bred støtte til grønne ideer. Samtidig viser motstanden mot vindkraft, bompenger og elbilfordeler at den grønne omstillingen skaper konflikter. Spørsmålet om vi kan opprettholde vekst og velstand samtidig som vi kutter utslipp, er sentralt i norsk politikk og kan best forstås gjennom grønn ideologisk tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// Kapittel 3.6: Norske politiske partier og partisystemet
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_3_6: TextbookChapter = {
  id: 'politikk-menneskerett-3-6',
  courseId: 'politikk-menneskerett',
  chapterNumber: '3.6',
  title: 'Norske politiske partier og partisystemet',
  description: 'Forstå de ni stortingspartienes ideologiske grunnlag, norske politiske skillelinjer og det norske partisystemets særtrekk.',
  estimatedMinutes: 60,
  prevChapter: 'politikk-menneskerett-3-5',
  nextChapter: 'politikk-menneskerett-4-1',
  competenceGoals: [
    'gjøre rede for de norske stortingspartienes ideologiske grunnlag',
    'analysere politiske skillelinjer i norsk politikk',
    'drøfte det norske flerpartisystemets styrker og svakheter',
  ],
  keyTerms: [
    { term: 'Flerpartisystem', definition: 'Et politisk system med flere partier som konkurrerer om makt. Norge har ni partier på Stortinget, noe som krever koalisjoner for å danne regjering.' },
    { term: 'Politisk skillelinje', definition: 'Varige motsetninger i samfunnet som preger partikonkurransen. Rokkan og Valen identifiserte flere skillelinjer i norsk politikk: sentrum-periferi, arbeid-kapital, m.fl.' },
    { term: 'Blokkpolitikk', definition: 'Inndelingen av partiene i to blokker - rød-grønn (Ap, SV, Sp) og borgerlig (H, FrP, V, KrF) - som konkurrerer om regjeringsmakt.' },
    { term: 'Koalisjonsregjering', definition: 'Regjering bestående av flere partier som samarbeider. Vanlig i Norge fordi ingen partier alene har flertall.' },
    { term: 'Mindretallsregjering', definition: 'Regjering som ikke har flertall i Stortinget og må søke støtte fra andre partier for å få vedtatt sin politikk. Svært vanlig i Norge.' },
    { term: 'Sentrum-periferi-skillelinjen', definition: 'Motsetningen mellom by og land, hovedstad og distriktene. Senterpartiet er bygget på denne skillelinjen.' },
    { term: 'Vippeparti', definition: 'Et parti som befinner seg mellom blokkene og kan avgjøre hvem som danner regjering, for eksempel Senterpartiet eller KrF.' },
  ],
  exercises: [],
  content: [
    {
      id: 'pm-3-6-intro',
      type: 'text',
      content: `## Det norske partisystemet

Norge har et **flerpartisystem** med ni partier representert på Stortinget. Dette er uvanlig mange sammenlignet med land som USA (to partier) og Storbritannia (i praksis to-tre dominerende partier). Det norske systemet gir velgerne mange valgmuligheter, men gjør det også vanskelig for ett parti å styre alene.

Partiene har røtter i historiske **skillelinjer** - varige motsetninger i det norske samfunnet. Statsviterne Stein Rokkan og Henry Valen identifiserte flere slike skillelinjer:

1. **Sentrum-periferi:** Motsetningen mellom hovedstaden/byene og distriktene
2. **Arbeid-kapital:** Motsetningen mellom arbeidere og eiere
3. **Kultur-motkulturer:** Motsetninger knyttet til religion, språk (nynorsk vs. bokmål) og avhold
4. **Vekst-vern:** Miljø og økonomisk vekst (nyere skillelinje)
5. **Innvandring-integrering:** Holdninger til innvandring (nyeste skillelinje)

La oss se på hvert av de ni stortingspartiene og deres ideologiske grunnlag. Vi går fra venstre til høyre langs den politiske aksen.`,
    },
    {
      id: 'pm-3-6-text-2',
      type: 'text',
      content: `## Rødt (R)

**Stiftet:** 2007 (med røtter tilbake til AKP fra 1973)
**Ideologisk grunnlag:** Sosialisme, marxisme
**Plassering:** Ytre venstre

Rødt er det mest venstreorienterte partiet på Stortinget. Partiet har sine røtter i den marxist-leninistiske bevegelsen fra 1970-tallet (AKP(m-l)), men har gradvis beveget seg mot en bredere sosialistisk profil.

**Kjernesaker:**
- Erstatte kapitalismen med demokratisk sosialisme
- Kraftig omfordeling fra rik til fattig
- Kortere arbeidstid (sekstimersdag)
- Mot NATO-medlemskap og norsk krigsdeltakelse
- Folkelig eierskap over naturressurser og storindustri
- Sterk motstand mot privatisering av offentlige tjenester

Rødt kom inn på Stortinget med ett mandat i 2017 og styrket seg betydelig i 2021 under leder Bjørnar Moxnes. Partiet har bidratt til å løfte debatter om ulikhet, arbeidsforhold og profitt i velferden.`,
    },
    {
      id: 'pm-3-6-text-3',
      type: 'text',
      content: `## Sosialistisk Venstreparti (SV)

**Stiftet:** 1975 (med røtter i SF fra 1961)
**Ideologisk grunnlag:** Demokratisk sosialisme, feminisme, miljøpolitikk
**Plassering:** Venstre

SV kombinerer sosialistiske ideer med sterk vekt på feminisme, miljø og internasjonal solidaritet. Partiet brøt opprinnelig ut fra Arbeiderpartiet i protest mot NATO-medlemskapet.

**Kjernesaker:**
- Sterk velferdsstat med universelle ordninger
- Utjevning av økonomiske forskjeller
- Radikal klimapolitikk
- Feminisme og likestilling
- Gratis tannhelse og barnehage
- Motstand mot kommersiell velferd
- Fredspolitikk og internasjonal solidaritet

SV satt i regjering med Ap og Sp fra 2005 til 2013 (Stoltenberg II-regjeringen). Partiet har hatt stor innflytelse på norsk utdannings- og likestillingspolitikk.`,
    },
    {
      id: 'pm-3-6-text-4',
      type: 'text',
      content: `## Arbeiderpartiet (Ap)

**Stiftet:** 1887
**Ideologisk grunnlag:** Sosialdemokrati
**Plassering:** Sentrum-venstre

Arbeiderpartiet er Norges tradisjonelt største parti og har hatt avgjørende innflytelse på det moderne Norge. Ap bygde velferdsstaten etter andre verdenskrig og har vært i regjering store deler av etterkrigstiden.

**Kjernesaker:**
- Sterk og universell velferdsstat
- Arbeidslinja - alle som kan jobbe, skal jobbe
- Trepartssamarbeidet mellom stat, arbeidsgivere og arbeidstakere
- Fellesskolen - lik rett til utdanning
- Regulert markedsøkonomi
- NATO-medlemskap og transatlantisk samarbeid
- Ansvarlig økonomisk styring

**Historisk rolle:**
Under Einar Gerhardsen (statsminister 1945-1965, med avbrudd) la Ap grunnlaget for den norske modellen. Gro Harlem Brundtland (Norges første kvinnelige statsminister) førte partiet videre og ble en internasjonal leder i bærekraftspørsmål. Jens Stoltenberg ledet to regjeringer og er nå NATOs generalsekretær. Jonas Gahr Støre tok over som partileder og ble statsminister i 2021.`,
    },
    {
      id: 'pm-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-3-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilke tre partier utgjorde den rød-grønne regjeringen (Stoltenberg II) fra 2005 til 2013?',
        options: [
          { id: 'a', text: 'Ap, SV og Rødt', isCorrect: false },
          { id: 'b', text: 'Ap, SV og Sp', isCorrect: true },
          { id: 'c', text: 'Ap, Sp og KrF', isCorrect: false },
          { id: 'd', text: 'Ap, SV og MDG', isCorrect: false },
        ],
        hints: ['Tenk på hvilke partier som tradisjonelt utgjør den rød-grønne blokken.'],
      },
    },
    {
      id: 'pm-3-6-text-5',
      type: 'text',
      content: `## Senterpartiet (Sp)

**Stiftet:** 1920 (som Bondepartiet)
**Ideologisk grunnlag:** Agrarisme, desentralisme, distriktspolitikk
**Plassering:** Sentrum

Senterpartiet ble opprinnelig stiftet for å ivareta bøndenes interesser, men har utviklet seg til et bredere distriktsparti. Sp er bygget på sentrum-periferi-skillelinjen og kjemper for livskraftige lokalsamfunn over hele landet.

**Kjernesaker:**
- Desentralisering og sterke distrikter
- Norsk selvråderett - motstand mot EU/EØS
- Landbrukspolitikk og matproduksjon
- Beredskap og forsvar i hele landet
- Motstand mot sentralisering og kommunesammenslåing
- Lavere avgifter i distriktene

**Historisk rolle:**
Sp var avgjørende i begge EU-avstemningene (1972 og 1994), der nei-siden vant. Under leder Trygve Slagsvold Vedum opplevde partiet sterk vekst ved valget i 2021 og ble med i regjering med Ap. Sp appellerer til velgere som mener at sentralisering truer distriktene og norsk suverenitet.`,
    },
    {
      id: 'pm-3-6-text-6',
      type: 'text',
      content: `## Miljøpartiet De Grønne (MDG)

**Stiftet:** 1988
**Ideologisk grunnlag:** Grønn ideologi, økologisme
**Plassering:** Sentrum (hevder å stå hverken til venstre eller høyre)

MDG setter klima og miljø over den tradisjonelle venstre-høyre-aksen. Partiet mener den økologiske krisen er vår tids viktigste politiske utfordring og at alle andre saker må sees i lys av den.

**Kjernesaker:**
- Rask avvikling av norsk olje- og gassproduksjon
- Storsatsing på fornybar energi og grønn teknologi
- Bilfritt byliv og bedre kollektivtransport
- Vern av natur og biologisk mangfold
- Sirkulær økonomi og redusert forbruk
- Dyrevelferd

MDG fikk sitt første stortingsmandat i 2013 og har hatt stor innflytelse i flere bykommuner, særlig i Oslo der partiet var med i byrådet (2015-2023). Partiet er kontroversielt fordi det utfordrer den norske oljeøkonomien direkte.`,
    },
    {
      id: 'pm-3-6-text-7',
      type: 'text',
      content: `## Kristelig Folkeparti (KrF)

**Stiftet:** 1933
**Ideologisk grunnlag:** Kristendemokrati
**Plassering:** Sentrum

KrF bygger sin politikk på kristne og humanistiske verdier. Partiet har historisk vært en brobygger mellom blokkene i norsk politikk, men valgte i 2018 side med den borgerlige regjeringen etter en dramatisk intern prosess.

**Kjernesaker:**
- Familiepolitikk og valgfrihet for barnefamilier
- Menneskeverd i etiske spørsmål (abort, bioteknologi, dødshjelp)
- Internasjonal bistand og solidaritet med fattige land
- Religionsfrihet og trossamfunnenes plass i samfunnet
- Alkohol- og ruspolitikk
- Integrering og flyktningpolitikk

KrF har vært et viktig parti for norsk bistandspolitikk og har tradisjonelt høy troverdighet på etiske spørsmål. Partiet har slitt med fallende oppslutning de siste årene og har ligget nær sperregrensen.`,
    },
    {
      id: 'pm-3-6-text-8',
      type: 'text',
      content: `## Venstre (V)

**Stiftet:** 1884
**Ideologisk grunnlag:** Sosialliberalisme
**Plassering:** Sentrum

Venstre er Norges eldste parti og har sine røtter i kampen for demokrati og parlamentarisme. Partiet var avgjørende for innføringen av folkestyret i Norge.

**Kjernesaker:**
- Personlig frihet og rettigheter
- Klima- og miljøpolitikk
- Kunnskap og utdanning
- Gründerskap og småbedrifter
- Liberal innvandringspolitikk
- Digital frihet og personvern
- Sosialt ansvar kombinert med markedsøkonomi

**Historisk rolle:**
Venstre innførte parlamentarismen (1884), bidro til stemmeretten for menn og kvinner, og har stått for ytringsfrihet og borgerrettigheter. I nyere tid har partiet profilert seg på klima- og utdanningspolitikk. Venstre samarbeider med Høyre og har sittet i regjering med de borgerlige partiene, men har historisk også samarbeidet med sentrum-venstre.`,
    },
    {
      id: 'pm-3-6-text-9',
      type: 'text',
      content: `## Høyre (H)

**Stiftet:** 1884
**Ideologisk grunnlag:** Liberalkonservatisme
**Plassering:** Sentrum-høyre

Høyre er Norges viktigste konservative parti og har vært det ledende alternativet til Arbeiderpartiet. Partiet kombinerer konservative verdier med liberal markedsøkonomi.

**Kjernesaker:**
- Lavere skatter og avgifter
- Valgfrihet i velferdstjenester (privat vs. offentlig)
- Kunnskap, forskning og utdanning
- Ansvarlig innvandringspolitikk med krav til integrering
- Forsvar og NATO-samarbeid
- Forenkling av byråkrati
- Bærekraftig velferdsstat

**Historisk rolle:**
Kåre Willoch moderniserte norsk økonomi på 1980-tallet. Erna Solberg ledet regjeringen fra 2013 til 2021, først med FrP, deretter med V og KrF. Høyre er tradisjonelt det dominerende partiet i byene, blant folk med høyere utdanning og i næringslivet.`,
    },
    {
      id: 'pm-3-6-text-10',
      type: 'text',
      content: `## Fremskrittspartiet (FrP)

**Stiftet:** 1973 (som Anders Langes Parti)
**Ideologisk grunnlag:** Liberalisme, populisme, nasjonalkonservatisme
**Plassering:** Høyre

FrP er et ideologisk sammensatt parti som kombinerer liberalistiske krav om lavere skatter og mindre stat med en restriktiv innvandringspolitikk og populistisk retorikk.

**Kjernesaker:**
- Kraftig kutt i skatter og avgifter
- Restriktiv innvandringspolitikk
- Sterk eldreomsorg og helsevesen
- Bedre veier og infrastruktur
- Mindre byråkrati og regulering
- Sterkere bruk av oljepengene
- Lov og orden, strengere straffer

**Historisk rolle:**
Under Carl I. Hagen vokste FrP fra et marginalt protestparti til Norges nest største parti. Siv Jensen ledet partiet inn i regjering med Høyre i 2013-2020, den første gangen FrP satt i regjering. Partiet har hatt stor innflytelse på norsk innvandrings- og avgiftsdebatt.

FrP er ideologisk spenningsfylt: Den liberalistiske fløyen vil ha lavere skatter og mindre stat, mens den nasjonalkonservative fløyen er opptatt av innvandring, nasjonal identitet og sterkere offentlige tjenester. Denne spenningen gjør partiet vanskelig å plassere entydig.`,
    },
    {
      id: 'pm-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-3-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilket parti er Norges eldste?',
        options: [
          { id: 'a', text: 'Arbeiderpartiet', isCorrect: false },
          { id: 'b', text: 'Høyre', isCorrect: false },
          { id: 'c', text: 'Venstre', isCorrect: true },
          { id: 'd', text: 'Senterpartiet', isCorrect: false },
        ],
        hints: ['Tenk på hvilket parti som var med på å innføre parlamentarismen i 1884.'],
      },
    },
    {
      id: 'pm-3-6-text-11',
      type: 'text',
      content: `## Det norske partisystemets særtrekk

Det norske partisystemet skiller seg fra mange andre land:

**Mange partier:**
Med ni stortingspartier har velgerne mange valgmuligheter. Sperregrensen på 4 % (for utjevningsmandater) gjør det mulig for småpartier å overleve.

**Mindretallsregjeringer:**
Norge har oftere mindretallsregjeringer enn flertallsregjeringer. Det betyr at regjeringen må forhandle med andre partier for å få flertall for sine forslag. Dette gir Stortinget en sterk posisjon.

**Blokkpolitikk:**
Partiene grupperer seg i to hovedblokker:
- **Rød-grønn blokk:** Ap, SV, Sp (og tidvis Rødt og MDG)
- **Borgerlig blokk:** H, FrP, V, KrF

**Konsensuskultur:**
Norsk politikk er preget av forhandlinger og kompromisser. Store reformer har ofte bred støtte på tvers av blokkene. Pensjonsreformen (2011) er et eksempel på en reform som ble vedtatt med støtte fra nesten alle partier.

**Endrede skillelinjer:**
De tradisjonelle skillelinjene (arbeid-kapital, sentrum-periferi) suppleres av nye: klima vs. olje, globalisering vs. nasjonalt selvstyre, mangfold vs. nasjonal identitet. Dette gjør det norske partisystemet mer uforutsigbart enn før.

**Partienes utfordringer:**
Alle partiene opplever synkende medlemstall og lavere partilojalitet. Velgerne skifter lettere mellom partier enn før. Nye saksfelt som klima, innvandring og distriktspolitikk skaper nye allianser på tvers av de tradisjonelle blokkene.`,
    },
    {
      id: 'pm-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Partiene langs venstre-høyre-aksen',
      problem: 'Hvordan kan vi plassere de ni stortingspartiene langs den tradisjonelle venstre-høyre-aksen?',
      solution: `**Fra venstre til høyre (forenklet):**

**Ytre venstre:** Rødt
Erstatte kapitalismen med sosialisme. Sterkest omfordeling.

**Venstre:** SV
Demokratisk sosialisme, sterk stat, radikal klima- og likestillingspolitikk.

**Sentrum-venstre:** Arbeiderpartiet
Sosialdemokrati, velferdsstat, regulert markedsøkonomi.

**Sentrum:** Senterpartiet, MDG, KrF
Sp: Distrikt og desentralisering. MDG: Klima og miljø. KrF: Kristne verdier.

**Sentrum (liberalt):** Venstre
Personlig frihet, sosialliberalisme, klima og utdanning.

**Sentrum-høyre:** Høyre
Liberalkonservatisme, lavere skatter, valgfrihet i velferden.

**Høyre:** FrP
Liberalisme og populisme, kraftig skattelette, restriktiv innvandring.

**NB:** Denne plasseringen er forenklet. Partier som Sp, MDG og KrF er vanskelige å plassere på én akse fordi de prioriterer andre spørsmål enn den økonomiske venstre-høyre-dimensjonen.`,
    },
    {
      id: 'pm-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-3-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg to norske partier fra ulike deler av det politiske spektrumet og sammenlign deres syn på en konkret politisk sak (f.eks. skattepolitikk, innvandring, klimapolitikk eller helsepolitikk).',
        hints: ['Bruk partienes programmer eller nettsider for å finne konkrete standpunkter.'],
        solution: 'Eksempel - skattepolitikk (SV vs. FrP): SV vil øke skattene for de rikeste og bedriftene for å finansiere en sterkere velferdsstat. Partiet ønsker høyere formuesskatt, økt utbytteskatt og skatt på arv. Begrunnelse: Omfordeling er nødvendig for å redusere ulikhet og sikre like muligheter. FrP vil kutte skatter og avgifter kraftig. Partiet ønsker å fjerne formuesskatten, redusere inntektsskatten og kutte avgifter på drivstoff. Begrunnelse: Lavere skatter gir folk frihet til å bestemme over egne penger, stimulerer næringslivet og skaper arbeidsplasser. De ideologiske forskjellene er tydelige: SV bygger på sosialisme og kollektive løsninger, FrP på liberalisme og individuell frihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-3-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva Rokkan og Valens politiske skillelinjer er, og drøft om de fortsatt er relevante for norsk politikk i dag.',
        hints: ['Tenk på de fem skillelinjene: sentrum-periferi, arbeid-kapital, kultur-motkultur, vekst-vern, innvandring-integrering.'],
        solution: 'Rokkan og Valen identifiserte varige motsetninger (skillelinjer) i norsk politikk som forklarer partisystemet: 1) Sentrum-periferi: By vs. land. Fortsatt relevant - Sp vinner velgere på distriktsmisnøye, sentraliseringsdebatten er levende. 2) Arbeid-kapital: Arbeider vs. eier. Fortsatt grunnleggende, men færre identifiserer seg som «arbeidere». Ulikhetsdebatten holder skillelinjen levende. 3) Kultur-motkultur: Religion, språk, avhold. Mindre relevant - sekularisering og språkdebatten har stilnet. Men verdispørsmål (abort, bioteknologi) holder KrF relevant. 4) Vekst-vern: Økonomi vs. miljø. Svært relevant - klimadebatten og oljepolitikken er sentrale. MDG er bygget på denne skillelinjen. 5) Innvandring: Nyeste skillelinjen. Svært relevant - preger FrPs profil og har endret alle partienes politikk. Konklusjon: De gamle skillelinjene er svekket men ikke borte, og nye har kommet til.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-3-6-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva innebærer det at Norge ofte har mindretallsregjeringer?',
        options: [
          { id: 'a', text: 'At regjeringen ikke har lov til å styre', isCorrect: false },
          { id: 'b', text: 'At regjeringen må forhandle med andre partier for å få flertall for sine forslag', isCorrect: true },
          { id: 'c', text: 'At regjeringen kun sitter i et halvt år av gangen', isCorrect: false },
          { id: 'd', text: 'At bare mindretallet i befolkningen støtter regjeringen', isCorrect: false },
        ],
        hints: ['Tenk på hva som skjer i Stortinget når regjeringen ikke har flertall alene.'],
      },
    },
    {
      id: 'pm-3-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-3-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft styrker og svakheter ved det norske flerpartisystemet sammenlignet med et topartisystem (som i USA). Hvilket system mener du gir best demokrati?',
        hints: ['Tenk på representasjon, stabilitet, samarbeid og velgernes valgmuligheter.'],
        solution: 'Styrker ved flerpartisystem: 1) Bedre representasjon - velgere med ulike synspunkter finner et parti som ligner på dem. 2) Tvinger til samarbeid og kompromisser, noe som gir bredere forankrede beslutninger. 3) Gir plass til nye politiske saker (klima, distrikter) gjennom nisje-partier. 4) Hindrer polarisering mellom bare to sider. Svakheter: 1) Kan gi ustabile regjeringer og hyppige regjeringsskifter. 2) Kompromisser kan føre til utvannet politikk der ingen er fornøyde. 3) Koalisjonsforhandlinger skjer i lukkede rom, utenfor velgernes kontroll. 4) Vanskelig for velgere å vite hva de egentlig stemmer på. Styrker ved topartisystem: Stabile regjeringer, klart ansvar, enklere valg for velgerne. Svakheter: Dårlig representasjon av mangfoldet, polarisering, vanskelig for nye ideer å slippe til. De fleste vil si at flerpartisystemet gir bedre demokrati fordi det representerer flere synspunkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-3-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'pm-3-6-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvilken politisk skillelinje er Senterpartiet primært bygget på?',
        options: [
          { id: 'a', text: 'Arbeid-kapital', isCorrect: false },
          { id: 'b', text: 'Sentrum-periferi', isCorrect: true },
          { id: 'c', text: 'Vekst-vern', isCorrect: false },
          { id: 'd', text: 'Kultur-motkultur', isCorrect: false },
        ],
        hints: ['Tenk på Senterpartiets viktigste sak: distriktene versus sentralisering.'],
      },
    },
    {
      id: 'pm-3-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 'pm-3-6-ex-8',
        number: '8',
        type: 'classic',
        task: 'Gjør en analyse av et norsk stortingsparti du er interessert i: Hva er partiets ideologiske grunnlag? Hvilke historiske røtter har det? Hvilke velgergrupper appellerer det til? Hvilke utfordringer står partiet overfor?',
        hints: ['Bruk kunnskapen fra hele kapitlet om ideologier til å analysere partiet.'],
        solution: 'Eksempel med Venstre: Ideologisk grunnlag: Sosialliberalisme - kombinasjon av personlig frihet med sosialt ansvar. Historiske røtter: Norges eldste parti (1884), innførte parlamentarisme og stemmerett. Tradisjon for ytringsfrihet, utdanning og borgerrettigheter. Velgergrupper: Urbane, høyt utdannede velgere, spesielt i Oslo og store byer. Studenter, kulturarbeidere, gründere. Utfordringer: Lav oppslutning nær sperregrensen (4 %). Partiet presses mellom Høyre (liberalkonservative velgere) og MDG (miljøvelgere). Samarbeidet med FrP i regjering kostet troverdighet hos liberale velgere. Vanskelig å skille seg ut med tydelig profil. Partiets historiske rolle som liberalt fyrtårn utfordres av at mange av dets kampsaker (ytringsfrihet, rettigheter) nå er selvfølgelige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// EKSPORT AV ALLE KAPITLER I DEL 3
// ============================================================================

export const POLITIKK_MENNESKERETT_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_POLITIKK_MENNESKERETT_3_1, CHAPTER_POLITIKK_MENNESKERETT_3_2,
  CHAPTER_POLITIKK_MENNESKERETT_3_3, CHAPTER_POLITIKK_MENNESKERETT_3_4,
  CHAPTER_POLITIKK_MENNESKERETT_3_5, CHAPTER_POLITIKK_MENNESKERETT_3_6,
];
