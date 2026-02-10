/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Sosiologi og sosialantropologi VG3
 *
 * Seksjon 3: Familie, ulikhet og klasse (Kapittel 3.1–3.7)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Familie og familieformer
// ============================================================================

const CHAPTER_SOSIOLOGI_3_1: TextbookChapter = {
  id: 'sosiologi-3-1',
  courseId: 'sosiologi',
  title: 'Familie og familieformer',
  chapterNumber: '3.1',
  estimatedMinutes: 20,
  exercises: [],
  content: [
    {
      id: 'sos-3-1-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Familien regnes ofte som samfunnets grunnleggende enhet. I alle kjente samfunn finner vi en eller annen form for familieorganisering, men hvordan familien er sammensatt og hvilke oppgaver den fyller, varierer enormt – både mellom kulturer og over tid. I dette kapittelet ser vi på ulike familieformer, familiens funksjoner og hvordan familiemønstre har endret seg i Norge og verden.',
    },
    {
      id: 'sos-3-1-def-1',
      type: 'definition',
      title: 'Familie',
      content:
        'En familie er en gruppe mennesker som er knyttet sammen gjennom slektskap, ekteskap, samboerskap eller adopsjon, og som ofte deler husholdning. Familien er en sosial institusjon som finnes i alle samfunn, men som tar svært ulike former.',
    },
    {
      id: 'sos-3-1-text-1',
      type: 'text',
      title: 'Kjernefamilien',
      content:
        'Kjernefamilien består av to voksne (foreldre) og deres barn. Denne familieformen har vært dominerende i vestlige industrisamfunn, særlig fra etterkrigstiden og fremover. Kjernefamilien ble lenge betraktet som den «normale» familieformen, men i dag er det viktig å forstå at dette er en historisk og kulturelt betinget oppfatning. Sosiologer peker på at kjernefamilien fikk sin sterke posisjon i sammenheng med industrialiseringen, da arbeid ble flyttet ut av hjemmet og familien ble mer spesialisert som arena for omsorg og følelsesmessig støtte.',
    },
    {
      id: 'sos-3-1-def-2',
      type: 'definition',
      title: 'Storfamilie',
      content:
        'En storfamilie (utvidet familie) omfatter flere generasjoner og/eller sideledd som bor sammen eller i tett tilknytning. Besteforeldre, tanter, onkler og søskenbarn kan inngå i husholdningen. Storfamilien har vært og er fortsatt vanlig i mange deler av verden, blant annet i Sør-Asia, Midtøsten og deler av Afrika.',
    },
    {
      id: 'sos-3-1-text-2',
      type: 'text',
      title: 'Andre familieformer',
      content:
        'I tillegg til kjernefamilien og storfamilien finner vi en rekke andre familieformer. Enslige forsørgere (aleneforeldre) utgjør en betydelig andel av norske familier – om lag én av fire barn bor med bare én forelder. Stefamilier, der en eller begge voksne har barn fra tidligere forhold, er også blitt vanlig. Samkjønnede familier, der to personer av samme kjønn lever sammen med barn, har fått juridisk anerkjennelse i Norge siden partnerskapsloven i 1993 og felles ekteskapslov i 2009. Noen sosiologer bruker begrepet «valgfamilie» om nære relasjoner som ikke nødvendigvis bygger på blodsbånd eller juridiske bånd, men på følelsesmessig tilknytning og gjensidig omsorg.',
    },
    {
      id: 'sos-3-1-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva kjennetegner en storfamilie?',
      options: [
        'To voksne og deres biologiske barn',
        'Flere generasjoner og/eller sideledd som bor sammen eller i nær tilknytning',
        'En enslig forsørger med barn',
        'To samboere uten barn',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-1-text-3',
      type: 'text',
      title: 'Familiens funksjoner i samfunnet',
      content:
        'Sosiologer har identifisert flere sentrale funksjoner familien fyller. Den funksjonalistiske tradisjonen, representert ved Talcott Parsons, fremhever særlig to: primærsosialisering av barn og stabilisering av voksne personligheter. Gjennom primærsosialiseringen lærer barn språk, normer og verdier, og utvikler sin identitet. Familien gir også økonomisk trygghet gjennom fordeling av ressurser mellom medlemmene. I tillegg fyller familien en reproduktiv funksjon – den sikrer nye generasjoner – og en omsorgsfunksjon for både barn, syke og eldre. Kritikere av det funksjonalistiske perspektivet peker på at familien også kan være en arena for maktutøvelse, undertrykkelse og vold, noe det er viktig å ta med i en helhetlig analyse.',
    },
    {
      id: 'sos-3-1-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hvilken funksjon fremhevet Talcott Parsons som familiens viktigste?',
      options: [
        'Økonomisk produksjon',
        'Politisk organisering',
        'Primærsosialisering av barn og stabilisering av voksne personligheter',
        'Religiøs opplæring',
      ],
      correctAnswer: 2,
    },
    {
      id: 'sos-3-1-text-4',
      type: 'text',
      title: 'Endringer i familiemønstre',
      content:
        'Familiemønstrene i Norge har gjennomgått store endringer de siste tiårene. Gjennomsnittsalderen for førstegangsforeldre har steget markant – fra rundt 23 år for kvinner på 1970-tallet til over 30 år i dag. Samboerskap har blitt langt vanligere enn ekteskap som første samlivsform. Skilsmisseraten økte kraftig fra 1960-tallet, men har stabilisert seg noe de siste årene. Fødselstallene har gått ned, og fruktbarhetsraten i Norge ligger nå under reproduksjonsnivået på 2,1 barn per kvinne. Disse endringene henger sammen med økt likestilling, bedre tilgang til prevensjon, velferdsstatens utbygging og endrede verdier knyttet til individualisme og selvrealisering. Noen forskere ser endringene som uttrykk for økt valgfrihet, mens andre uttrykker bekymring for svakere sosiale bånd og lavere fødselstall.',
    },
    {
      id: 'sos-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Familieformer i endring',
      content:
        'I 1970 var over 90 prosent av alle norske barn født innenfor ekteskap. I dag fødes rundt halvparten av alle barn av samboende foreldre. Dette viser en grunnleggende endring i holdninger til ekteskap og samliv. Samtidig har aksepten for ulike familieformer økt – enslige forsørgere, regnbuefamilier og stefamilier møter i dag langt mindre stigma enn for noen tiår siden.',
    },
    {
      id: 'sos-3-1-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content:
        'Beskriv minst tre endringer i norske familiemønstre fra 1970-tallet til i dag. Hva kan årsakene til disse endringene være?',
    },
    {
      id: 'sos-3-1-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content:
        'Sammenlign kjernefamilien og storfamilien. Hvilke fordeler og ulemper kan de ulike familieformene ha for henholdsvis barn, voksne og samfunnet som helhet?',
    },
    {
      id: 'sos-3-1-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hva menes med begrepet «valgfamilie»?',
      options: [
        'En familie der barna selv velger hvilken forelder de vil bo hos',
        'Nære relasjoner som bygger på følelsesmessig tilknytning, ikke nødvendigvis blodsbånd',
        'En familie som har valgt å ikke få barn',
        'En adoptivfamilie',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Familien er en universell sosial institusjon, men den tar svært ulike former i ulike samfunn og historiske perioder. De viktigste familieformene er kjernefamilien, storfamilien, aleneforeldrefamilien, stefamilien og samkjønnede familier. Familiens sentrale funksjoner omfatter sosialisering, omsorg, reproduksjon og økonomisk trygghet. I Norge har familiemønstrene endret seg dramatisk de siste tiårene, med høyere alder for førstegangsforeldre, mer samboerskap, flere skilsmisser og lavere fruktbarhet. Disse endringene reflekterer bredere samfunnsmessige utviklingstrekk som økt likestilling, velferdsstat og endrede verdier.',
    },
    {
      id: 'sos-3-1-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Drøft påstanden: «Kjernefamilien er i oppløsning.» Bruk sosiologiske begreper og empiri i svaret ditt. Vurder ulike perspektiver på endringene i familiemønstre.',
    },
  ],
};

// ============================================================================
// Kapittel 3.2: Samliv og parforhold
// ============================================================================

const CHAPTER_SOSIOLOGI_3_2: TextbookChapter = {
  id: 'sosiologi-3-2',
  courseId: 'sosiologi',
  title: 'Samliv og parforhold',
  chapterNumber: '3.2',
  estimatedMinutes: 18,
  exercises: [],
  content: [
    {
      id: 'sos-3-2-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Hvordan mennesker organiserer sine nære relasjoner, har stor betydning både for den enkelte og for samfunnet. I dette kapittelet ser vi nærmere på ulike samlivsformer – ekteskap, samboerskap og andre typer parforhold – og på de juridiske rammene som regulerer samliv i Norge. Vi undersøker også hvordan synet på samliv har endret seg, med særlig vekt på likekjønnet samliv og skilsmisse.',
    },
    {
      id: 'sos-3-2-def-1',
      type: 'definition',
      title: 'Ekteskap',
      content:
        'Ekteskap er en formell, juridisk anerkjent samlivsform mellom to personer. I Norge reguleres ekteskapet av ekteskapsloven. Ekteskapet gir partene en rekke rettigheter og plikter knyttet til økonomi, arv, barn og omsorg. Siden 2009 har ekteskapsloven vært kjønnsnøytral, slik at både heterofile og homofile par kan inngå ekteskap.',
    },
    {
      id: 'sos-3-2-text-1',
      type: 'text',
      title: 'Ekteskapets historiske utvikling',
      content:
        'Ekteskapet har historisk sett vært langt mer enn en kjærlighetsrelasjon. I førindustrielle samfunn var ekteskapet først og fremst en økonomisk og politisk allianse mellom familier. Valg av ektefelle var ofte styrt av foreldrene, og kjærlighet mellom ektefellene ble sett på som en bonus, ikke en forutsetning. I løpet av 1800- og 1900-tallet skjedde en gradvis overgang til det som sosiologer kaller «det romantiske kjærlighetsidealet», der gjensidig tiltrekning og følelser ble den viktigste begrunnelsen for ekteskap. I dag snakker noen forskere om «det rene forholdet» (Anthony Giddens), der relasjonen opprettholdes så lenge begge parter opplever den som tilfredsstillende.',
    },
    {
      id: 'sos-3-2-def-2',
      type: 'definition',
      title: 'Samboerskap',
      content:
        'Samboerskap innebærer at to personer lever sammen i et parforhold uten å være gift. I Norge har samboere noen juridiske rettigheter, blant annet knyttet til arv (hvis de har felles barn), men rettighetene er mer begrensede enn for ektefeller. Samboerskap har blitt stadig vanligere og er i dag den mest utbredte samlivsformen blant unge voksne i Norge.',
    },
    {
      id: 'sos-3-2-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva mener Anthony Giddens med «det rene forholdet»?',
      options: [
        'Et forhold uten seksuell kontakt',
        'Et forhold som opprettholdes så lenge begge parter opplever det som tilfredsstillende',
        'Et ekteskap uten barn',
        'Et forhold som er godkjent av begges familier',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-2-text-2',
      type: 'text',
      title: 'Juridiske rammer for samliv',
      content:
        'Norsk lov skiller mellom ekteskap og samboerskap når det gjelder rettigheter og plikter. Ektefeller har gjensidig forsørgelsesplikt, rett til å sitte i uskiftet bo ved dødsfall, og likedeling av felleseie ved samlivsbrudd. Samboere har langt svakere juridisk beskyttelse – det er ingen automatisk forsørgelsesplikt, og uten samboerkontrakt eller testament kan den ene parten stå svakt økonomisk ved brudd eller dødsfall. Samboere med felles barn har riktignok visse arverettigheter. Forskjellene i juridisk vern har ført til debatt om samboere bør få sterkere lovbeskyttelse, eller om ekteskapet fortsatt bør ha en særstilling.',
    },
    {
      id: 'sos-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Samboerskap versus ekteskap i praksis',
      content:
        'Tenk deg to par som begge har bodd sammen i ti år og har to felles barn. Det ene paret er gift, det andre er samboere. Hvis den ene parten dør uten testament, vil den gifte ektefellen ha krav på arv og rett til å sitte i uskiftet bo. Samboeren vil ha en begrenset arverett (4G), men ikke rett til uskifte av annet enn felles bolig og innbo. Denne forskjellen illustrerer den juridiske ulikheten mellom samlivsformene.',
    },
    {
      id: 'sos-3-2-exercise-2',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 2',
      content:
        'Gjør rede for de viktigste juridiske forskjellene mellom ekteskap og samboerskap i Norge. Diskuter om disse forskjellene er rimelige i et samfunn der samboerskap er blitt så utbredt.',
    },
    {
      id: 'sos-3-2-text-3',
      type: 'text',
      title: 'Skilsmisse',
      content:
        'Skilsmisseraten i Norge økte kraftig fra 1960-tallet og fremover, og i dag ender om lag 40 prosent av alle ekteskap i skilsmisse. Fra et sosiologisk perspektiv kan den økte skilsmisseraten forstås som et resultat av flere faktorer: kvinner er blitt mer økonomisk selvstendige, velferdsstatens sikkerhetsnett gjør det mulig å klare seg alene, og holdningene til skilsmisse har blitt mer aksepterende. Individualiseringen av samfunnet har også spilt inn – når ekteskapet primært begrunnes med kjærlighet og personlig tilfredsstillelse, er terskelen for å bryte opp lavere enn når ekteskapet ses som en økonomisk nødvendighet. Skilsmisse har både positive og negative konsekvenser. For noen er det en befrielse fra et dysfunksjonelt forhold, mens forskning viser at det kan ha negative virkninger for barn, særlig på kort sikt.',
    },
    {
      id: 'sos-3-2-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 3',
      content: 'Hvilken faktor har IKKE bidratt til økt skilsmisserate i Norge?',
      options: [
        'Økt økonomisk selvstendighet for kvinner',
        'Strengere skilsmisselovgivning',
        'Endrede holdninger til skilsmisse',
        'Individualiseringen av samfunnet',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-2-text-4',
      type: 'text',
      title: 'Likekjønnet samliv',
      content:
        'Norge har vært et foregangsland når det gjelder juridisk anerkjennelse av likekjønnet samliv. Partnerskapsloven av 1993 ga homofile par mulighet til å registrere partnerskap med mange av de samme rettighetene som ekteskap. I 2009 ble ekteskapsloven gjort kjønnsnøytral, slik at homofile og lesbiske par kan gifte seg på lik linje med heterofile par. Loven ga også likekjønnede par rett til å bli vurdert som adoptivforeldre og rett til assistert befruktning. Fra et sosiologisk perspektiv representerer denne utviklingen en betydelig endring i synet på hva en familie er. Mens familien tradisjonelt ble definert ut fra heteroseksuelle normer, har den juridiske og sosiale anerkjennelsen av likekjønnede familier utvidet familiebegrepet.',
    },
    {
      id: 'sos-3-2-exercise-4',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 4',
      content: 'Når ble ekteskapsloven i Norge kjønnsnøytral?',
      options: ['1993', '2001', '2009', '2015'],
      correctAnswer: 2,
    },
    {
      id: 'sos-3-2-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content:
        'Forklar hva som menes med at ekteskapet har gått fra å være en økonomisk allianse til å bli et «rent forhold». Hvilke konsekvenser har denne endringen for stabiliteten i parforhold?',
    },
    {
      id: 'sos-3-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Samliv og parforhold i Norge har gjennomgått store endringer. Ekteskapet har gått fra å være en økonomisk og sosial allianse til å bli en relasjon basert på kjærlighet og personlig tilfredsstillelse. Samboerskap har blitt den vanligste samlivsformen blant unge voksne, men gir svakere juridisk vern enn ekteskap. Skilsmisseraten har økt markant som følge av blant annet økt likestilling og endrede holdninger. Norge har vært et foregangsland i å anerkjenne likekjønnet samliv juridisk, med kjønnsnøytral ekteskapslov fra 2009.',
    },
    {
      id: 'sos-3-2-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Drøft hvordan endringer i samlivsmønstre henger sammen med bredere samfunnsmessige endringer som individualisering, likestilling og velferdsstatens utvikling. Bruk sosiologiske begreper i svaret ditt.',
    },
  ],
};

// ============================================================================
// Kapittel 3.3: Sosial ulikhet – begreper og perspektiver
// ============================================================================

const CHAPTER_SOSIOLOGI_3_3: TextbookChapter = {
  id: 'sosiologi-3-3',
  courseId: 'sosiologi',
  title: 'Sosial ulikhet – begreper og perspektiver',
  chapterNumber: '3.3',
  estimatedMinutes: 25,
  exercises: [],
  content: [
    {
      id: 'sos-3-3-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Sosial ulikhet er et sentralt tema i sosiologien. Alle kjente samfunn har en eller annen form for ulik fordeling av goder, makt og status, men omfanget og formene varierer kraftig. I dette kapittelet ser vi på hva sosial ulikhet er, hvordan den kommer til uttrykk gjennom økonomi, utdanning og helse, og vi gjennomgår tre av sosiologiens mest innflytelsesrike perspektiver på ulikhet: Karl Marx, Max Weber og Pierre Bourdieu.',
    },
    {
      id: 'sos-3-3-def-1',
      type: 'definition',
      title: 'Sosial ulikhet',
      content:
        'Sosial ulikhet refererer til den systematiske, ujevne fordelingen av ressurser, muligheter og privilegier mellom ulike grupper i et samfunn. Det handler ikke om tilfeldige forskjeller mellom enkeltpersoner, men om mønstre som følger sosiale kategorier som klasse, kjønn, etnisitet og geografi.',
    },
    {
      id: 'sos-3-3-text-1',
      type: 'text',
      title: 'Dimensjoner av sosial ulikhet',
      content:
        'Sosial ulikhet viser seg på mange områder. Økonomisk ulikhet handler om forskjeller i inntekt og formue. I Norge er inntektsforskjellene relativt små sammenlignet med mange andre land, men formuesforskjellene er betydelige og har økt de siste tiårene. Utdanningsulikhet viser seg ved at barn fra høyere sosiale lag i gjennomsnitt oppnår høyere utdanning enn barn fra lavere sosiale lag – til tross for gratis utdanning. Helseulikhet innebærer at personer med høy utdanning og inntekt i gjennomsnitt lever lenger og har bedre helse enn personer med lav utdanning og inntekt. Disse dimensjonene henger sammen og forsterker ofte hverandre.',
    },
    {
      id: 'sos-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Helseulikhet i Norge',
      content:
        'Forskning fra Folkehelseinstituttet viser at menn med høyere utdanning i gjennomsnitt lever rundt 6 år lenger enn menn med kun grunnskoleutdanning. For kvinner er forskjellen noe mindre, men fortsatt betydelig. Denne sammenhengen mellom sosial posisjon og helse kalles den sosiale helsegradienten og finnes i alle land som er undersøkt.',
    },
    {
      id: 'sos-3-3-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva menes med «den sosiale helsegradienten»?',
      options: [
        'At helsevesenet gir bedre behandling til rike pasienter',
        'At det er en gradvis sammenheng mellom sosial posisjon og helse gjennom hele befolkningen',
        'At innvandrere har dårligere helse enn etnisk norske',
        'At kvinner lever lenger enn menn',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-3-text-2',
      type: 'text',
      title: 'Karl Marx: Klasse og klassekamp',
      content:
        'Karl Marx (1818–1883) utviklet en av de mest innflytelsesrike teoriene om sosial ulikhet. For Marx var det forholdet til produksjonsmidlene – fabrikkene, jorda, maskinene – som var den avgjørende faktoren. Han skilte mellom to hovedklasser i det kapitalistiske samfunnet: borgerskapet (bourgeoisiet), som eide produksjonsmidlene, og arbeiderklassen (proletariatet), som måtte selge sin arbeidskraft for å overleve. Marx mente at forholdet mellom disse klassene var preget av utbytting: borgerskapet beriker seg på merverdien som arbeiderne skaper. Denne strukturelle motsetningen ville ifølge Marx føre til klassekamp og til slutt en revolusjon der arbeiderklassen overtok produksjonsmidlene. Marx sitt perspektiv har hatt enorm innflytelse, men har også blitt kritisert for å være for deterministisk, for å undervurdere mellomklassens rolle, og for at de revolusjonære forutsigelsene ikke har slått til i vestlige demokratier.',
    },
    {
      id: 'sos-3-3-def-2',
      type: 'definition',
      title: 'Klasse (hos Marx)',
      content:
        'For Marx er klasse definert av forholdet til produksjonsmidlene. De som eier produksjonsmidlene utgjør borgerskapet, mens de som selger sin arbeidskraft utgjør arbeiderklassen. Marx skiller mellom «klasse i seg selv» (en objektiv posisjon) og «klasse for seg selv» (bevissthet om felles interesser).',
    },
    {
      id: 'sos-3-3-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hva er det avgjørende kriteriet for klasseinndeling hos Marx?',
      options: [
        'Inntektsnivå',
        'Utdanningsnivå',
        'Forholdet til produksjonsmidlene',
        'Kulturell smak og livsstil',
      ],
      correctAnswer: 2,
    },
    {
      id: 'sos-3-3-text-3',
      type: 'text',
      title: 'Max Weber: Klasse, stand og parti',
      content:
        'Max Weber (1864–1920) bygde videre på Marx, men mente at sosial ulikhet var mer sammensatt enn Marx fremstilte det. Weber opererte med tre dimensjoner av sosial lagdeling. Klasse handler om økonomisk posisjon – ikke bare eierskap, men også markedsposisjon, altså hvilke ferdigheter og kvalifikasjoner man kan tilby i arbeidsmarkedet. Stand (status) handler om sosial anseelse og ære – hvordan ulike grupper vurderes og rangeres sosialt. Parti handler om makt og politisk innflytelse – evnen til å påvirke beslutninger i samfunnet. For Weber kunne disse dimensjonene sammenfalle, men de kunne også stå i motsetning til hverandre. En professor kan for eksempel ha høy stand (status) men relativt lav klasse (inntekt) sammenlignet med en forretningsperson. Webers flerdimensjonale modell gir et mer nyansert bilde av sosial ulikhet enn Marx sin todeling.',
    },
    {
      id: 'sos-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Webers tre dimensjoner i praksis',
      content:
        'En nyrik gründer kan ha høy klasse (mye penger), men lav stand (mangler den kulturelle kompetansen som gir anerkjennelse i visse miljøer) og begrenset parti (lite politisk innflytelse). Omvendt kan en prest ha høy stand i et lokalsamfunn, men relativt lav inntekt. En fagforeningsleder kan ha stor politisk makt (parti) uten nødvendigvis å ha høy inntekt eller sosial status. Disse eksemplene viser at de tre dimensjonene ikke alltid følger hverandre.',
    },
    {
      id: 'sos-3-3-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content:
        'Forklar Webers tre dimensjoner av sosial lagdeling med egne eksempler. Hvorfor mente Weber at Marx sitt perspektiv var for ensidig?',
    },
    {
      id: 'sos-3-3-text-4',
      type: 'text',
      title: 'Pierre Bourdieu: Kapitalformer',
      content:
        'Den franske sosiologen Pierre Bourdieu (1930–2002) utviklet en teori om sosial ulikhet som bygger på begrepet kapital i utvidet forstand. Bourdieu skiller mellom fire former for kapital. Økonomisk kapital er materielle ressurser som penger, eiendom og aksjer. Kulturell kapital er kunnskap, utdanning, kulturell kompetanse og smak – altså evnen til å beherske de kulturelle kodene som verdsettes i samfunnet. Sosial kapital er nettverket av sosiale relasjoner og forbindelser man har tilgang til. Symbolsk kapital er den anerkjennelsen og prestisjen man får i kraft av de andre kapitalformene. Bourdieu viste at kulturell kapital er særlig viktig for å forstå reproduksjonen av sosial ulikhet: barn fra høyere sosiale lag arver en kulturell kompetanse som gir dem fordeler i utdanningssystemet, selv om systemet formelt er åpent for alle.',
    },
    {
      id: 'sos-3-3-def-3',
      type: 'definition',
      title: 'Kulturell kapital',
      content:
        'Kulturell kapital er et begrep fra Bourdieu som betegner den kunnskapen, kompetansen, utdanningen og kulturelle smaken en person besitter. Kulturell kapital kan eksistere i tre former: kroppsliggjort (inkorporert kunnskap og vaner), objektivert (bøker, kunst, instrumenter) og institusjonalisert (formelle kvalifikasjoner som vitnemål og grader).',
    },
    {
      id: 'sos-3-3-example-3',
      type: 'example',
      title: 'Eksempel: Kapitalformer i utdanning',
      content:
        'Et barn som vokser opp i et hjem med mange bøker, der foreldrene leser og diskuterer, besøker museer og snakker om kunst og politikk, tilegner seg en kulturell kapital som passer godt med skolens forventninger. Barnet vet hvordan man oppfører seg i formelle sammenhenger, mestrer et avansert språk og har referanserammer som lærerne gjenkjenner og verdsetter. Et barn fra et hjem med annerledes kulturelle verdier kan ha like gode evner, men mangler den kulturelle kapitalen som skolen ubevisst premierer. Slik bidrar skolen til å reprodusere sosial ulikhet, ifølge Bourdieu.',
    },
    {
      id: 'sos-3-3-exercise-4',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 4',
      content: 'Hvilken kapitalform la Bourdieu særlig vekt på for å forklare reproduksjon av ulikhet gjennom utdanningssystemet?',
      options: [
        'Økonomisk kapital',
        'Sosial kapital',
        'Kulturell kapital',
        'Politisk kapital',
      ],
      correctAnswer: 2,
    },
    {
      id: 'sos-3-3-text-5',
      type: 'text',
      title: 'Sammenligning av perspektivene',
      content:
        'Marx, Weber og Bourdieu gir alle viktige bidrag til forståelsen av sosial ulikhet, men med ulikt fokus. Marx la vekt på økonomiske strukturer og eierskap, og så klassekamp som historiens drivkraft. Weber utvidet perspektivet ved å inkludere status og makt som selvstendige dimensjoner av ulikhet. Bourdieu viste hvordan ulikhet reproduseres gjennom kulturelle mekanismer og hverdagspraksis, ikke bare gjennom åpen maktbruk eller økonomiske strukturer. Felles for alle tre er at de ser sosial ulikhet som strukturelt betinget – den skyldes ikke bare individuelle forskjeller i talent eller innsats, men er innvevd i samfunnets organisering. Denne innsikten er et av sosiologiens viktigste bidrag til samfunnsforståelsen.',
    },
    {
      id: 'sos-3-3-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content:
        'Forklar Bourdieus begrep om kulturell kapital. Gi et eget eksempel på hvordan kulturell kapital kan gi fordeler i utdanningssystemet.',
    },
    {
      id: 'sos-3-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Sosial ulikhet handler om systematiske forskjeller i fordeling av ressurser, muligheter og privilegier. Ulikheten viser seg langs flere dimensjoner: økonomi, utdanning og helse. Tre sentrale perspektiver gir ulike forklaringer: Marx vektlegger eierskap og klassekamp, Weber skiller mellom klasse, stand og parti, og Bourdieu fremhever kapitalformer – særlig kulturell kapital – som grunnlag for reproduksjon av ulikhet. Alle tre perspektivene peker på at sosial ulikhet er strukturelt forankret i samfunnets organisering.',
    },
    {
      id: 'sos-3-3-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Velg en form for sosial ulikhet i det norske samfunnet (for eksempel utdanningsulikhet eller helseulikhet). Analyser denne ulikheten ved hjelp av perspektivene til Marx, Weber og Bourdieu. Hvilke styrker og svakheter har hvert perspektiv i denne sammenhengen?',
    },
  ],
};

// ============================================================================
// Kapittel 3.4: Sosial mobilitet
// ============================================================================

const CHAPTER_SOSIOLOGI_3_4: TextbookChapter = {
  id: 'sosiologi-3-4',
  courseId: 'sosiologi',
  title: 'Sosial mobilitet',
  chapterNumber: '3.4',
  estimatedMinutes: 20,
  exercises: [],
  content: [
    {
      id: 'sos-3-4-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Sosial mobilitet handler om i hvilken grad mennesker kan bevege seg mellom ulike posisjoner i samfunnets lagdeling. Er det mulig å klatre på den sosiale stigen, eller er den posisjonen du er født inn i, i stor grad bestemmende for hvor du ender opp? Dette spørsmålet er sentralt både for sosiologien og for politisk debatt. I dette kapittelet ser vi på ulike former for sosial mobilitet, hva som fremmer og hemmer mobilitet, og hvordan Norge plasserer seg i internasjonal sammenheng.',
    },
    {
      id: 'sos-3-4-def-1',
      type: 'definition',
      title: 'Sosial mobilitet',
      content:
        'Sosial mobilitet betegner bevegelse mellom ulike posisjoner i et samfunns lagdeling. Begrepet omfatter endringer i sosial status, inntekt, utdanningsnivå eller yrkesposisjon – enten i løpet av en persons liv (intragenerasjonell mobilitet) eller mellom generasjoner (intergenerasjonell mobilitet).',
    },
    {
      id: 'sos-3-4-text-1',
      type: 'text',
      title: 'Vertikal og horisontal mobilitet',
      content:
        'Sosial mobilitet kan være vertikal eller horisontal. Vertikal mobilitet innebærer bevegelse oppover eller nedover i den sosiale lagdelingen – for eksempel når en person fra en arbeiderfamilie tar høyere utdanning og får en lederstilling, eller når en person opplever økonomisk nedgang og faller i sosial posisjon. Horisontal mobilitet betegner bevegelse mellom posisjoner på omtrent samme nivå – for eksempel når en person bytter fra en type fagarbeiderstilling til en annen uten vesentlig endring i inntekt eller status. I sosiologisk forskning er det særlig vertikal mobilitet som får oppmerksomhet, fordi den sier noe om hvor åpent eller lukket et samfunn er.',
    },
    {
      id: 'sos-3-4-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva er forskjellen mellom vertikal og horisontal mobilitet?',
      options: [
        'Vertikal mobilitet skjer innenfor én generasjon, horisontal mellom generasjoner',
        'Vertikal mobilitet innebærer bevegelse oppover eller nedover i lagdelingen, horisontal innebærer bevegelse mellom posisjoner på samme nivå',
        'Vertikal mobilitet gjelder utdanning, horisontal gjelder inntekt',
        'Vertikal mobilitet er frivillig, horisontal er ufrivillig',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-4-def-2',
      type: 'definition',
      title: 'Strukturell mobilitet',
      content:
        'Strukturell mobilitet er sosial mobilitet som skyldes endringer i samfunnets yrkesstruktur, snarere enn individuelle prestasjoner. Når nye typer jobber oppstår og gamle forsvinner – for eksempel ved overgang fra jordbrukssamfunn til industrisamfunn – kan store grupper oppleve vertikal mobilitet uten at det nødvendigvis skyldes endringer i den relative åpenheten i samfunnet.',
    },
    {
      id: 'sos-3-4-text-2',
      type: 'text',
      title: 'Strukturell mobilitet i historisk perspektiv',
      content:
        'I løpet av 1900-tallet opplevde Norge en storstilt strukturell mobilitet. Overgangen fra jordbrukssamfunn til industrisamfunn, og videre til kunnskaps- og tjenestesamfunn, innebar at millioner av mennesker fikk helt andre yrkesposisjoner enn foreldrene sine. Mange barn av bønder og arbeidere fikk mulighet til høyere utdanning og funksjonærstillinger. Denne strukturelle mobiliteten ga inntrykk av et svært åpent samfunn, men det er viktig å skille mellom strukturell mobilitet (drevet av endringer i yrkesstrukturen) og sirkulasjonsmobilitet (som sier noe om den faktiske sjanselikheten). Selv i perioder med stor oppadgående strukturell mobilitet kan den relative forskjellen i livssjanser mellom sosiale lag forbli stabil.',
    },
    {
      id: 'sos-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Fra gårdsarbeid til kontorjobb',
      content:
        'I 1950 jobbet om lag 25 prosent av den norske yrkesbefolkningen i jordbruket. I dag er andelen under 2 prosent. Denne endringen innebar at store deler av befolkningen måtte finne arbeid i andre sektorer – industri, service og offentlig sektor. Barna til bønder og fiskere fikk utdanning og ble lærere, ingeniører eller helsepersonell. Dette er et tydelig eksempel på strukturell mobilitet: mobiliteten skyldtes ikke først og fremst at samfunnet ble «rettferdigere», men at selve yrkesstrukturen endret seg fundamentalt.',
    },
    {
      id: 'sos-3-4-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hva kjennetegner strukturell mobilitet?',
      options: [
        'Mobilitet som skyldes individuelle talenter og innsats',
        'Mobilitet som skyldes endringer i samfunnets yrkesstruktur',
        'Mobilitet mellom ulike geografiske områder',
        'Mobilitet som bare skjer i nedadgående retning',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-4-text-3',
      type: 'text',
      title: 'Faktorer som påvirker sosial mobilitet',
      content:
        'En rekke faktorer påvirker graden av sosial mobilitet i et samfunn. Utdanningssystemet er kanskje den viktigste enkeltfaktoren: et tilgjengelig og gratis utdanningssystem gir flere muligheten til å kvalifisere seg for høyere posisjoner. Arbeidsmarkedets struktur spiller også inn – et variert arbeidsmarked med mange typer jobber gir flere muligheter for mobilitet. Velferdsordninger som barnehager, studiefinansiering og helsevesen reduserer barrierer for mobilitet ved å utjevne økonomiske forskjeller i oppvekstvilkår. Sosiale nettverk og kulturell kapital (jf. Bourdieu) påvirker også mulighetene, fordi forbindelser og kulturell kompetanse kan åpne dører som formelle kvalifikasjoner alene ikke gjør. Til sist spiller diskriminering en rolle: fordommer basert på kjønn, etnisitet eller sosial bakgrunn kan begrense enkeltpersoners muligheter uavhengig av deres evner og innsats.',
    },
    {
      id: 'sos-3-4-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content:
        'Gjør rede for minst tre faktorer som påvirker graden av sosial mobilitet i et samfunn. Gi konkrete eksempler på hvordan disse faktorene kan virke fremmende eller hemmende.',
    },
    {
      id: 'sos-3-4-text-4',
      type: 'text',
      title: 'Sosial mobilitet i Norge',
      content:
        'Norge regnes internasjonalt som et land med relativt høy sosial mobilitet. Studier viser at sammenhengen mellom foreldres inntekt og barnas inntekt er svakere i de skandinaviske landene enn i for eksempel USA og Storbritannia. Flere faktorer bidrar til dette: et offentlig finansiert utdanningssystem fra barnehage til høyere utdanning, universelle velferdsordninger, relativt små lønnsforskjeller og et regulert arbeidsmarked. Likevel viser forskning at sosial bakgrunn fortsatt har betydning: barn av foreldre med høy utdanning og inntekt har større sannsynlighet for selv å ta høyere utdanning og oppnå høy inntekt. Debatten om sosial mobilitet i Norge handler blant annet om hvorvidt den norske modellen i tilstrekkelig grad sikrer reell sjanselikhet, eller om ulikheter reproduseres til tross for universelle ordninger.',
    },
    {
      id: 'sos-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Den store Gatsby-kurven',
      content:
        'Økonomen Miles Corak har utviklet det som kalles «den store Gatsby-kurven», som viser sammenhengen mellom inntektsulikhet og sosial mobilitet mellom generasjoner. Kurven viser at land med stor inntektsulikhet (som USA og Storbritannia) tenderer til å ha lavere sosial mobilitet, mens land med lav inntektsulikhet (som Norge, Danmark og Finland) har høyere mobilitet. Dette tyder på at strukturelle forhold – ikke bare individuell innsats – er avgjørende for mobilitetsmulighetene.',
    },
    {
      id: 'sos-3-4-exercise-4',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 4',
      content: 'Hva viser «den store Gatsby-kurven»?',
      options: [
        'At rike mennesker alltid er lykkeligere enn fattige',
        'At det er en sammenheng mellom inntektsulikhet i et land og graden av sosial mobilitet mellom generasjoner',
        'At sosial mobilitet er høyest i USA',
        'At utdanning ikke har betydning for sosial mobilitet',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-4-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content:
        'Forklar forskjellen mellom strukturell mobilitet og sirkulasjonsmobilitet. Hvorfor er dette skillet viktig for å forstå hvor åpent et samfunn egentlig er?',
    },
    {
      id: 'sos-3-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Sosial mobilitet handler om muligheten til å bevege seg mellom posisjoner i samfunnets lagdeling. Vi skiller mellom vertikal og horisontal mobilitet, og mellom intragenerasjonell og intergenerasjonell mobilitet. Strukturell mobilitet skyldes endringer i yrkesstrukturen, mens sirkulasjonsmobilitet sier noe om den reelle sjanselikheten. Utdanning, velferdsordninger, arbeidsmarked, sosiale nettverk og fravær av diskriminering er sentrale faktorer som påvirker mobiliteten. Norge har relativt høy sosial mobilitet i internasjonal sammenheng, men sosial bakgrunn har fortsatt betydning for livssjanser.',
    },
    {
      id: 'sos-3-4-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Drøft påstanden: «I Norge har alle like muligheter til å lykkes, uavhengig av sosial bakgrunn.» Bruk begreper som sosial mobilitet, strukturell mobilitet, kulturell kapital og sjanselikhet i svaret ditt.',
    },
  ],
};

// ============================================================================
// Kapittel 3.5: Fattigdom og velferd
// ============================================================================

const CHAPTER_SOSIOLOGI_3_5: TextbookChapter = {
  id: 'sosiologi-3-5',
  courseId: 'sosiologi',
  title: 'Fattigdom og velferd',
  chapterNumber: '3.5',
  estimatedMinutes: 22,
  exercises: [],
  content: [
    {
      id: 'sos-3-5-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Fattigdom er et av de mest omdiskuterte temaene i samfunnsvitenskapen. Hva betyr det egentlig å være fattig? Hvordan kan samfunnet organisere seg for å forebygge og bekjempe fattigdom? I dette kapittelet ser vi på ulike måter å definere og måle fattigdom, gjennomgår sentrale velferdsmodeller, og drøfter barnefattigdom i Norge. Temaet berører grunnleggende spørsmål om rettferdighet, ansvar og samfunnsorganisering, og det finnes ulike perspektiver på hva som er de beste løsningene.',
    },
    {
      id: 'sos-3-5-def-1',
      type: 'definition',
      title: 'Absolutt fattigdom',
      content:
        'Absolutt fattigdom innebærer at en person mangler ressurser til å dekke grunnleggende behov som mat, klær, bolig og helse. Verdensbanken definerer ekstrem fattigdom som å leve på under 2,15 amerikanske dollar om dagen (justert for kjøpekraft). Absolutt fattigdom er først og fremst utbredt i lav- og mellominntektsland.',
    },
    {
      id: 'sos-3-5-def-2',
      type: 'definition',
      title: 'Relativ fattigdom',
      content:
        'Relativ fattigdom innebærer at en person har vesentlig lavere ressurser enn det som er vanlig i samfunnet vedkommende lever i. EU definerer fattigdomsrisiko som å ha en inntekt under 60 prosent av medianinntekten i landet. Relativ fattigdom handler ikke bare om materiell nød, men også om manglende mulighet til å delta i samfunnslivet på lik linje med andre.',
    },
    {
      id: 'sos-3-5-text-1',
      type: 'text',
      title: 'Fattigdom som sosiologisk fenomen',
      content:
        'Sosiologien betrakter fattigdom som mer enn et økonomisk problem. Fattigdom henger sammen med sosial eksklusjon – det å bli stengt ute fra aktiviteter, arenaer og fellesskap som de fleste i samfunnet har tilgang til. Å være fattig i et rikt land som Norge innebærer sjelden sult eller absolutt materiell nød, men det kan bety at man ikke har råd til å la barna delta på fritidsaktiviteter, at man ikke kan feire bursdag på vanlig måte, eller at man lever med konstant økonomisk stress. Det finnes ulike syn på årsakene til fattigdom. Individorienterte forklaringer vektlegger personlige forhold som utdanningsnivå, helse, rusproblemer eller manglende arbeidsmotivasjon. Strukturorienterte forklaringer peker på arbeidsmarkedets organisering, boligmarkedet, innvandringspolitikk og velferdsordningers utforming. De fleste sosiologer anerkjenner at både individuelle og strukturelle faktorer spiller inn, men vektleggingen varierer.',
    },
    {
      id: 'sos-3-5-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva er forskjellen mellom absolutt og relativ fattigdom?',
      options: [
        'Absolutt fattigdom gjelder barn, relativ fattigdom gjelder voksne',
        'Absolutt fattigdom handler om manglende dekning av grunnleggende behov, relativ fattigdom handler om å ha vesentlig mindre enn det som er vanlig i samfunnet',
        'Absolutt fattigdom finnes bare i Norge, relativ fattigdom finnes bare i utviklingsland',
        'Det er ingen forskjell mellom begrepene',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-5-text-2',
      type: 'text',
      title: 'Velferdsstatens modeller: Esping-Andersen',
      content:
        'Den danske sosiologen Gøsta Esping-Andersen klassifiserte i 1990 vestlige velferdsstater i tre hovedmodeller. Den liberale modellen (for eksempel USA, Storbritannia og Australia) bygger på et begrenset offentlig sikkerhetsnett der markedet spiller hovedrollen. Offentlige ytelser er lave og ofte behovsprøvde, og det er stor vekt på individuelt ansvar. Den konservative (korporative) modellen (for eksempel Tyskland, Frankrike og Italia) bygger på yrkesbaserte forsikringsordninger der rettighetene er knyttet til deltakelse i arbeidslivet. Familien spiller også en viktig rolle i omsorgsarbeidet. Den sosialdemokratiske modellen (de skandinaviske landene) kjennetegnes av universelle ordninger som omfatter hele befolkningen, høyt skattenivå, omfattende offentlige tjenester og en ambisjon om å sikre likhet og sosial utjevning. Det er viktig å merke seg at dette er idealtyper – i praksis blander de fleste land elementer fra ulike modeller. Klassifiseringen har også blitt kritisert for å overse andre velferdsmodeller, blant annet i Øst-Asia og Sør-Europa.',
    },
    {
      id: 'sos-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Tre velferdsmodeller i praksis',
      content:
        'Tenk deg en enslig forsørger som mister jobben. I et land med liberal velferdsmodell vil vedkommende få begrensede ytelser i en kort periode, og forventes å finne ny jobb raskt. I et land med konservativ modell vil ytelsene avhenge av hvor lenge personen har vært i arbeid og betalt forsikringspremier. I et land med sosialdemokratisk modell vil vedkommende ha rett til arbeidsledighetstrygd, og i tillegg ha tilgang til gratis helsetjenester, barnehage og eventuelt omskolering. Disse forskjellene illustrerer ulike syn på forholdet mellom individ, marked og stat.',
    },
    {
      id: 'sos-3-5-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hvilken velferdsmodell kjennetegnes av universelle ordninger og høyt skattenivå?',
      options: [
        'Den liberale modellen',
        'Den konservative modellen',
        'Den sosialdemokratiske modellen',
        'Den autoritære modellen',
      ],
      correctAnswer: 2,
    },
    {
      id: 'sos-3-5-text-3',
      type: 'text',
      title: 'Den nordiske modellen',
      content:
        'Den nordiske velferdsmodellen kombinerer en omfattende velferdsstat med en åpen markedsøkonomi. Kjerneelementene er universelle velferdsordninger (alle har rett til tjenester uavhengig av inntekt), høy grad av omfordeling gjennom skattesystemet, sterk offentlig sektor med gratis utdanning og helsevesen, trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere, og høy yrkesdeltakelse – også blant kvinner. Tilhengere av modellen fremhever at den kombinerer høy levestandard med relativt lav ulikhet og høy sosial mobilitet. Kritikere peker på at modellen er kostbar, kan svekke arbeidsincentiver, og er avhengig av høy sysselsetting og skattevilje i befolkningen. Modellens bærekraft diskuteres også i lys av utfordringer som en aldrende befolkning, innvandring og globalisering. Ulike politiske ståsteder vektlegger forskjellige aspekter av denne debatten.',
    },
    {
      id: 'sos-3-5-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content:
        'Gjør rede for Esping-Andersens tre velferdsmodeller. Hvilke fordeler og ulemper har den sosialdemokratiske modellen sammenlignet med den liberale modellen? Presenter ulike perspektiver.',
    },
    {
      id: 'sos-3-5-text-4',
      type: 'text',
      title: 'Barnefattigdom i Norge',
      content:
        'Selv om Norge er et av verdens rikeste land, lever en økende andel barn i husholdninger med vedvarende lavinntekt. Ifølge Statistisk sentralbyrå gjaldt dette om lag 11 prosent av alle barn i 2022 – en andel som har økt over tid. Barnefattigdom rammer ikke tilfeldig: barn med innvandrerbakgrunn, barn av enslige forsørgere og barn i familier med lav utdanning og svak arbeidsmarkedstilknytning er overrepresentert. Konsekvensene av å vokse opp i en lavinntektsfamilie kan være alvorlige: forskning viser sammenhenger med dårligere skoleresultater, svakere psykisk helse og reduserte framtidsmuligheter. Det er debatt om hva som er de mest effektive tiltakene mot barnefattigdom. Noen vektlegger universelle ordninger som gratis fritidsaktiviteter og økt barnetrygd, mens andre fremhever at målrettede tiltak og arbeidsinkludering av foreldre er mer treffsikkert. Det er bred enighet om at barnefattigdom er uakseptabelt i et rikt land, men det er ulike syn på årsaker og løsninger.',
    },
    {
      id: 'sos-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Barnefattigdom og deltakelse',
      content:
        'For mange barn i lavinntektsfamilier er det ikke de mest grunnleggende behovene som mangler, men muligheten til å delta på lik linje med jevnaldrende. Å ikke kunne delta på fotballag fordi kontingenten er for dyr, å ikke kunne dra på klassetur fordi familien ikke har råd, eller å ikke kunne invitere til bursdagsselskap – slike opplevelser kan føre til skam, utenforskap og svekket selvfølelse. Forskning viser at barn selv ofte er svært bevisste på de sosiale forskjellene og at de utvikler strategier for å skjule familiens økonomiske situasjon.',
    },
    {
      id: 'sos-3-5-exercise-4',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 4',
      content: 'Hvilke barn er mest utsatt for å vokse opp i vedvarende lavinntekt i Norge?',
      options: [
        'Barn i storfamilier',
        'Barn med innvandrerbakgrunn, barn av enslige forsørgere og barn i familier med svak arbeidsmarkedstilknytning',
        'Barn i byer er like utsatt som barn på landet',
        'Barn i familier med to yrkesaktive foreldre',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-5-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content:
        'Forklar forskjellen mellom absolutt og relativ fattigdom. Hvorfor er relativ fattigdom et nyttig begrep for å forstå fattigdom i et rikt land som Norge?',
    },
    {
      id: 'sos-3-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Fattigdom kan forstås som absolutt (manglende dekning av grunnleggende behov) eller relativ (å ha vesentlig mindre enn det som er vanlig i samfunnet). Sosiologien ser fattigdom i sammenheng med sosial eksklusjon og strukturelle forhold. Esping-Andersen klassifiserte velferdsstater i tre modeller: den liberale, den konservative og den sosialdemokratiske. Den nordiske modellen kombinerer universelle velferdsordninger med åpen markedsøkonomi. Til tross for den norske velferdsmodellen er barnefattigdom et voksende problem, som rammer bestemte grupper hardest og har dokumenterte negative konsekvenser for barns utvikling og framtidsmuligheter.',
    },
    {
      id: 'sos-3-5-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Drøft om den norske velferdsmodellen er tilstrekkelig for å forebygge fattigdom og sosial eksklusjon. Bruk Esping-Andersens velferdsmodeller og begrepene absolutt og relativ fattigdom. Presenter argumenter fra ulike perspektiver.',
    },
  ],
};

// ============================================================================
// Kapittel 3.6: Utdanning og ulikhet
// ============================================================================

const CHAPTER_SOSIOLOGI_3_6: TextbookChapter = {
  id: 'sosiologi-3-6',
  courseId: 'sosiologi',
  title: 'Utdanning og ulikhet',
  chapterNumber: '3.6',
  estimatedMinutes: 22,
  exercises: [],
  content: [
    {
      id: 'sos-3-6-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Utdanning betraktes ofte som nøkkelen til sosial mobilitet og likhet. Gjennom utdanningssystemet skal alle, uavhengig av bakgrunn, få mulighet til å utvikle sine evner og kvalifisere seg for ulike posisjoner i samfunnet. Men stemmer dette idealet med virkeligheten? I dette kapittelet undersøker vi utdanningens rolle som sosialiseringsarena, ser på hvordan utdanningssystemet kan bidra til å reprodusere sosial ulikhet, og trekker inn sentrale sosiologiske perspektiver fra Pierre Bourdieu og Basil Bernstein.',
    },
    {
      id: 'sos-3-6-text-1',
      type: 'text',
      title: 'Utdanning som sosialiseringsarena',
      content:
        'Skolen er, ved siden av familien, den viktigste sosialiseringsarenaen i moderne samfunn. Gjennom utdanningssystemet tilegner barn og unge seg kunnskap, ferdigheter og verdier som samfunnet anser som viktige. Utdanning fyller flere funksjoner: den kvalifiserer for arbeidslivet, den formidler kulturarv og fellesverdier, og den fungerer som en sorteringsmekanisme som fordeler mennesker til ulike posisjoner i yrkeslivet. Fra et funksjonalistisk perspektiv er denne sorteringen basert på meritt – de dyktigste og mest motiverte oppnår høyest utdanning og best posisjoner. Fra et konfliktteoretisk perspektiv er bildet annerledes: skolen sorterer ikke bare etter evner, men også etter sosial bakgrunn, fordi barn fra ulike sosiale lag stiller med ulike forutsetninger.',
    },
    {
      id: 'sos-3-6-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hvilken funksjon fyller utdanningssystemet ifølge funksjonalistisk teori?',
      options: [
        'Å opprettholde sosiale privilegier for overklassen',
        'Å kvalifisere og sortere individer basert på meritt og kompetanse',
        'Å undertrykke arbeiderklassens barn',
        'Å erstatte familiens rolle som sosialiseringsarena',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-6-text-2',
      type: 'text',
      title: 'Bourdieu: Reproduksjon av ulikhet gjennom utdanning',
      content:
        'Pierre Bourdieu hevdet at utdanningssystemet, til tross for sin formelle åpenhet, bidrar til å reprodusere sosial ulikhet fra generasjon til generasjon. Nøkkelen ligger i begrepet kulturell kapital. Skolen verdsetter bestemte former for kunnskap, språk og atferd – former som barn fra høyere sosiale lag har tilegnet seg gjennom oppveksten. Bourdieu kalte dette for «kulturell vilkårlighet»: det som fremstår som nøytrale og universelle kunnskapskrav, er i virkeligheten uttrykk for den dominerende klassens kultur. Barn fra lavere sosiale lag møter skolen med en annen kulturell kapital, som ikke nødvendigvis er dårligere, men som ikke passer like godt med skolens forventninger. Når disse barna gjør det svakere på skolen, tolkes det gjerne som uttrykk for individuelle evner eller innsats, snarere enn som et resultat av strukturelle betingelser. Bourdieu brukte begrepet «symbolsk vold» om denne mekanismen: en form for usynlig maktutøvelse der de dominerte aksepterer den dominerende kulturens verdier som naturlige og riktige.',
    },
    {
      id: 'sos-3-6-def-1',
      type: 'definition',
      title: 'Symbolsk vold',
      content:
        'Symbolsk vold er et begrep fra Pierre Bourdieu som betegner en form for maktutøvelse der de dominerende gruppenes kultur, verdier og normer fremstilles som naturlige og universelle, slik at de dominerte gruppene aksepterer sin underordnede posisjon uten å gjennomskue maktforholdet. I utdanningssammenheng innebærer det at skolens verdsetting av bestemte kulturelle ferdigheter oppfattes som nøytral og objektiv.',
    },
    {
      id: 'sos-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Kulturell kapital i klasserommet',
      content:
        'Forskning viser at lærere ofte ubevisst gir mer positiv oppmerksomhet til elever som behersker «skolekultur» – som rekker opp hånden på riktig måte, bruker et utvidet ordforråd og viser interesse for temaer som skolen verdsetter. En elev som hjemme har lært å diskutere nyheter ved middagsbordet, som har besøkt museer og lest skjønnlitteratur, har en fordel som ikke handler om medfødte evner, men om kulturell kapital. En annen elev kan ha like gode kognitive forutsetninger, men mangler den kulturelle koden som skolen premierer.',
    },
    {
      id: 'sos-3-6-exercise-2',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 2',
      content:
        'Forklar hva Bourdieu mener med «symbolsk vold» i utdanningssystemet. Gi et eget eksempel på hvordan dette kan komme til uttrykk i skolen.',
    },
    {
      id: 'sos-3-6-text-3',
      type: 'text',
      title: 'Basil Bernstein: Språkkoder',
      content:
        'Den britiske sosiolingvisten Basil Bernstein (1924–2000) utviklet en teori om hvordan språk bidrar til å reprodusere sosial ulikhet i utdanningssystemet. Han skilte mellom to språkkoder: den begrensede koden og den utvidede koden. Den begrensede koden kjennetegnes av korte setninger, implisitt mening (mye tas for gitt fordi samtalepartnerne deler kontekst), og konkret, kontekstavhengig språkbruk. Den utvidede koden kjennetegnes av lengre og mer komplekse setninger, eksplisitt uttrykk for meninger og begrunnelser, og abstrakt, kontekstuavhengig språkbruk. Bernstein mente at barn fra arbeiderklassen primært ble sosialisert inn i den begrensede koden, mens barn fra middelklassen hadde tilgang til begge kodene. Skolen opererer hovedsakelig med den utvidede koden, noe som gir middelklassens barn en fordel. Det er viktig å understreke at Bernstein ikke hevdet at den ene koden er bedre enn den andre som kommunikasjonsform – poenget var at skolen systematisk premierer den utvidede koden, noe som skaper ulike vilkår.',
    },
    {
      id: 'sos-3-6-def-2',
      type: 'definition',
      title: 'Begrenset og utvidet kode (Bernstein)',
      content:
        'Bernsteins begrensede kode er en språkbruk som er kontekstavhengig, implisitt og basert på felles forståelse. Den utvidede koden er kontekstuavhengig, eksplisitt og abstrakt. Skolesystemet bruker primært den utvidede koden, noe som kan gi barn fra middelklassen en fordel. Bernstein hevdet ikke at den ene koden er bedre enn den andre – men at skolens ensidig verdsetting av den utvidede koden skaper systematiske ulikheter.',
    },
    {
      id: 'sos-3-6-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 3',
      content: 'Hva kjennetegner Bernsteins «utvidede kode»?',
      options: [
        'Korte setninger og implisitt mening',
        'Lange, komplekse setninger, eksplisitt mening og abstrakt språkbruk',
        'Bruk av dialekt og slang',
        'Språk som bare brukes i formelle situasjoner',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-6-text-4',
      type: 'text',
      title: 'Ulik tilgang til utdanning globalt',
      content:
        'I et globalt perspektiv er tilgangen til utdanning svært ujevnt fordelt. Selv om andelen barn som får grunnskoleutdanning har økt dramatisk de siste tiårene, er det fortsatt om lag 250 millioner barn og unge som ikke går på skole. Jenter i fattige land er særlig utsatt for å bli holdt utenfor utdanning. Også kvaliteten på utdanningen varierer enormt – mange barn som formelt er innmeldt i skolen, lærer svært lite fordi skolene mangler kvalifiserte lærere, læremidler og infrastruktur. I tillegg til materielle barrierer spiller også kulturelle, religiøse og kjønnsbaserte normer en rolle for hvem som får tilgang til utdanning. FNs bærekraftsmål 4 handler om å sikre inkluderende og rettferdig kvalitetsutdanning for alle innen 2030, men mange land er langt fra å nå dette målet.',
    },
    {
      id: 'sos-3-6-example-2',
      type: 'example',
      title: 'Eksempel: Utdanningsulikhet mellom kjønn',
      content:
        'I Afghanistan under Taliban-styret ble jenter nektet tilgang til utdanning utover sjette klasse. I mange land i Vest-Afrika og Sør-Asia tas jenter ut av skolen i puberteten – på grunn av tidlig ekteskap, mangel på sanitæranlegg på skolene, eller fordi familiens økonomi krever at jentene bidrar til husarbeid. Samtidig har mange land gjort store fremskritt: i Bangladesh har myndighetene gjennom stipendordninger og skolematprogrammer klart å øke jenters skoledeltakelse kraftig. Eksempelet viser at utdanningsulikhet ikke er naturgitt, men kan påvirkes gjennom politiske tiltak.',
    },
    {
      id: 'sos-3-6-exercise-4',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 4',
      content: 'Hva mener Bourdieu med «kulturell vilkårlighet» i utdanningssystemet?',
      options: [
        'At lærerne velger pensum tilfeldig',
        'At det som fremstår som nøytrale kunnskapskrav, i virkeligheten reflekterer den dominerende klassens kultur',
        'At kultur er uviktig i skolen',
        'At alle kulturer verdsettes likt i skolen',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-6-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content:
        'Sammenlign Bourdieus teori om kulturell kapital med Bernsteins teori om språkkoder. Hva er felles for perspektivene, og hva skiller dem?',
    },
    {
      id: 'sos-3-6-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Utdanningssystemet fyller viktige funksjoner som kvalifisering, sosialisering og sortering, men det kan også bidra til å reprodusere sosial ulikhet. Bourdieu viste hvordan kulturell kapital gir barn fra høyere sosiale lag systematiske fordeler, og brukte begrepet symbolsk vold om skolens usynlige maktutøvelse. Bernstein påviste at skolens bruk av den utvidede koden favoriserer middelklassens barn. I et globalt perspektiv er tilgangen til utdanning svært ujevnt fordelt, med kjønn, økonomi og geografi som sentrale faktorer.',
    },
    {
      id: 'sos-3-6-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Drøft påstanden: «Det norske utdanningssystemet gir alle barn like muligheter.» Bruk perspektiver fra Bourdieu og Bernstein, og trekk gjerne inn globale sammenligninger.',
    },
  ],
};

// ============================================================================
// Kapittel 3.7: Helse og sosial ulikhet
// ============================================================================

const CHAPTER_SOSIOLOGI_3_7: TextbookChapter = {
  id: 'sosiologi-3-7',
  courseId: 'sosiologi',
  title: 'Helse og sosial ulikhet',
  chapterNumber: '3.7',
  estimatedMinutes: 20,
  exercises: [],
  content: [
    {
      id: 'sos-3-7-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Helse er ikke bare et medisinsk spørsmål – det er også et sosiologisk fenomen. Forskning viser gjennomgående at helsetilstanden i en befolkning følger sosiale skillelinjer: personer med høy utdanning, inntekt og yrkesposisjon lever i gjennomsnitt lenger og har bedre helse enn personer med lavere sosial posisjon. I dette kapittelet undersøker vi helsegradienten, sosiale determinanter for helse, sammenhengen mellom psykisk helse og samfunn, og ulike tilnærminger til helsepolitikk og forebygging.',
    },
    {
      id: 'sos-3-7-def-1',
      type: 'definition',
      title: 'Helsegradienten',
      content:
        'Helsegradienten (den sosiale helsegradienten) betegner det systematiske mønsteret der helse gradvis forbedres med stigende sosial posisjon. Det er ikke bare de aller fattigste som har dårligere helse – mønsteret er gradvis gjennom hele befolkningen. Hvert trinn oppover i sosial posisjon er i gjennomsnitt forbundet med bedre helse og lengre levealder.',
    },
    {
      id: 'sos-3-7-text-1',
      type: 'text',
      title: 'Helsegradienten i praksis',
      content:
        'Helsegradienten er et av de best dokumenterte funnene innen sosialepidemiologien. I Norge viser data fra Folkehelseinstituttet at menn med høyere utdanning i gjennomsnitt lever rundt 6 år lenger enn menn med kun grunnskoleutdanning. Tilsvarende, men noe svakere, forskjeller finnes blant kvinner. Gradienten gjelder ikke bare forventet levealder, men også sykelighet: personer med lavere sosial posisjon har høyere forekomst av hjerte-karsykdommer, diabetes, kroniske smertetilstander og psykiske lidelser. Bemerkelsesverdig nok finnes helsegradienten i alle land som er undersøkt – også i land med universelle helsetjenester som Norge. Det betyr at tilgang til helsehjelp alene ikke er tilstrekkelig for å fjerne sosiale helseforskjeller.',
    },
    {
      id: 'sos-3-7-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva innebærer helsegradienten?',
      options: [
        'At bare de aller fattigste har dårlig helse',
        'At helse gradvis forbedres med stigende sosial posisjon gjennom hele befolkningen',
        'At alle med høy utdanning er friske',
        'At helsevesenet gir bedre behandling til rike mennesker',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-7-text-2',
      type: 'text',
      title: 'Sosiale determinanter for helse',
      content:
        'Verdens helseorganisasjon (WHO) bruker begrepet «sosiale determinanter for helse» om de samfunnsmessige forholdene som påvirker menneskers helse. Disse omfatter materielle levekår (bolig, inntekt, ernæring), arbeidsmiljø og arbeidsforhold, utdanning og kompetanse, sosiale nettverk og tilhørighet, og de overordnede politiske, økonomiske og kulturelle strukturene i samfunnet. Poenget er at helse ikke bare bestemmes av individuell atferd og biologi, men i stor grad av de sosiale forholdene mennesker lever under. Inntekt påvirker hva slags bolig, mat og fritidsaktiviteter man har tilgang til. Utdanning gir kunnskap og ferdigheter som gjør det lettere å ta helsefremmende valg. Arbeidsmiljøet påvirker helsen direkte – noen yrker er mer fysisk belastende og risikofylte enn andre. Sosiale nettverk gir emosjonell støtte og tilhørighet, som har dokumentert beskyttende effekt på helsen.',
    },
    {
      id: 'sos-3-7-example-1',
      type: 'example',
      title: 'Eksempel: Sosiale determinanter i et nabolag',
      content:
        'Tenk deg to nabolag i samme by. I det ene nabolaget er det trygge gangveier, parker, god tilgang til butikker med ferskvarer, et aktivt foreningsliv og lavt kriminalitetsnivå. I det andre nabolaget er det trafikkert, lite grøntareal, begrenset utvalg av sunn mat i nærbutikkene, og få organiserte fritidsaktiviteter. Beboerne i det første nabolaget vil, alt annet likt, ha bedre forutsetninger for å leve et helsevennlig liv – ikke fordi de har «bedre viljestyrke», men fordi omgivelsene legger til rette for gode valg. Dette illustrerer hvordan sosiale determinanter påvirker helse uavhengig av individuelle egenskaper.',
    },
    {
      id: 'sos-3-7-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hva menes med «sosiale determinanter for helse»?',
      options: [
        'Genetiske faktorer som bestemmer helse',
        'Samfunnsmessige forhold som påvirker menneskers helse, som inntekt, utdanning og arbeidsmiljø',
        'Medisinske behandlinger som forbedrer helsen',
        'Individuelle livsstilsvalg',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-7-text-3',
      type: 'text',
      title: 'Psykisk helse og samfunn',
      content:
        'Psykisk helse er ikke bare et individuelt anliggende – den formes også av samfunnsmessige forhold. Forskning viser at psykiske lidelser som depresjon og angst er mer utbredt blant personer med lav sosioøkonomisk status. Flere mekanismer kan forklare denne sammenhengen. Stresshypotesen peker på at personer med lav sosial posisjon opplever mer kronisk stress – knyttet til økonomiske bekymringer, usikre arbeidsforhold og begrensede ressurser til å håndtere motgang. Seleksjonshypotesen foreslår at psykiske lidelser kan føre til nedadgående sosial mobilitet, fordi sykdommen svekker arbeidsevne og sosial fungering. I virkeligheten virker trolig begge mekanismene samtidig. Blant unge i Norge rapporterer en økende andel om psykiske plager. Ungdata-undersøkelsene viser at jenter er overrepresentert, og at press knyttet til skole, kropp og sosiale medier trekkes frem som medvirkende faktorer. Diskusjonen om ungdommers psykiske helse involverer spørsmål om hvordan samfunnets forventninger og strukturer påvirker den enkeltes velvære.',
    },
    {
      id: 'sos-3-7-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content:
        'Gjør rede for stresshypotesen og seleksjonshypotesen som forklaringer på sammenhengen mellom sosial posisjon og psykisk helse. Hvorfor er det sannsynlig at begge mekanismene virker samtidig?',
    },
    {
      id: 'sos-3-7-text-4',
      type: 'text',
      title: 'Helsepolitikk og forebygging',
      content:
        'Helsepolitikken kan innrettes mot å redusere sosiale helseforskjeller gjennom ulike strategier. Individrettede tiltak fokuserer på å endre enkeltpersoners atferd – for eksempel gjennom informasjonskampanjer om kosthold, fysisk aktivitet og røyking. Slike tiltak er viktige, men forskning viser at de ofte når best frem til personer med høy utdanning, og dermed kan forstørre helseforskjellene. Strukturelle tiltak retter seg mot de underliggende sosiale forholdene – som boligpolitikk, arbeidsmarkedsregulering, utdanningspolitikk og inntektsfordeling. Slike tiltak har potensial til å nå bredere, men er mer komplekse å gjennomføre og involverer politiske avveininger. Proporsjonalt universelle tiltak er en mellomposisjon: universelle ordninger (tilgjengelige for alle) som er dimensjonert proporsjonalt med behovet, slik at de som trenger det mest, også får mest. Et eksempel er gratis skolemat for alle, kombinert med ekstra ernæringsstøtte i områder med lav inntekt. Debatten om helsepolitikk berører grunnleggende spørsmål om individuelt ansvar versus strukturelle løsninger, og ulike politiske posisjoner vektlegger disse hensynene forskjellig.',
    },
    {
      id: 'sos-3-7-example-2',
      type: 'example',
      title: 'Eksempel: Tobakkspolitikk som strukturelt tiltak',
      content:
        'Røyking er et klassisk eksempel på en helseatferd med sterk sosial gradient – andelen røykere er mye høyere blant personer med lav utdanning enn blant dem med høy utdanning. Informasjonskampanjer om røykens skadevirkninger nådde først og fremst de høyt utdannede. Strukturelle tiltak – som røykeloven (røykfri arbeidsplass, røykfrie serveringssteder), høye avgifter på tobakk, og reklameforbud – har derimot hatt effekt på tvers av sosiale grupper. Norsk tobakkspolitikk illustrerer hvordan strukturelle tiltak kan være mer effektive enn individrettede tiltak for å redusere sosiale helseforskjeller.',
    },
    {
      id: 'sos-3-7-exercise-4',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 4',
      content: 'Hva menes med «proporsjonalt universelle tiltak» i helsepolitikken?',
      options: [
        'Tiltak som kun retter seg mot de fattigste i samfunnet',
        'Tiltak som er tilgjengelige for alle, men dimensjonert proporsjonalt med behovet',
        'Tiltak som fordeler helseressursene likt til alle uansett behov',
        'Tiltak som kun fokuserer på individuell atferdsendring',
      ],
      correctAnswer: 1,
    },
    {
      id: 'sos-3-7-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content:
        'Forklar hva som menes med sosiale determinanter for helse. Gi minst tre eksempler på hvordan samfunnsmessige forhold kan påvirke en persons helse.',
    },
    {
      id: 'sos-3-7-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Helse er nært knyttet til sosial posisjon. Helsegradienten viser at helse gradvis forbedres med stigende sosial posisjon gjennom hele befolkningen – ikke bare blant de aller fattigste. Sosiale determinanter for helse – som inntekt, utdanning, arbeidsmiljø og sosiale nettverk – forklarer mye av de sosiale helseforskjellene. Psykisk helse påvirkes av både stressbelastning og sosiale forhold, og en økende andel unge rapporterer om psykiske plager. Helsepolitikken kan innrettes mot individuelle eller strukturelle tiltak, der forskningen tyder på at strukturelle og proporsjonalt universelle tiltak er mest effektive for å redusere sosiale helseforskjeller.',
    },
    {
      id: 'sos-3-7-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Drøft hvorfor sosiale helseforskjeller eksisterer også i et land som Norge, der alle har tilgang til gratis helsetjenester. Bruk begrepene helsegradient, sosiale determinanter og strukturelle tiltak i svaret ditt.',
    },
  ],
};

// ============================================================================
// Eksport: Alle kapitler i seksjon 3
// ============================================================================

export const SOSIOLOGI_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SOSIOLOGI_3_1,
  CHAPTER_SOSIOLOGI_3_2,
  CHAPTER_SOSIOLOGI_3_3,
  CHAPTER_SOSIOLOGI_3_4,
  CHAPTER_SOSIOLOGI_3_5,
  CHAPTER_SOSIOLOGI_3_6,
  CHAPTER_SOSIOLOGI_3_7,
];
