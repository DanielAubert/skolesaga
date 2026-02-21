/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1 NARRATIV: Ytringsfrihet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_7_1_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-7-1-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.1',
  title: 'Ytringsfrihet',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om ytringsfrihetens betydning, rettslige grunnlag og grenser i et demokratisk samfunn.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare ytringsfrihetens betydning i et demokrati',
    'drofte grensene for ytringsfrihet',
  ],
  linkedChapterId: 'samfunnskunnskap-7-1',
  content: [
    {
      id: 'samfunnskunnskap-7-1-n-intro',
      type: 'text',
      content: `## Retten til aa si hva du mener

Tenk deg at du lever i et samfunn der du ikke faar lov til aa kritisere regjeringen. Tenk deg at avisene bare skriver det myndighetene tillater. At forskere ikke faar publisere funn som staar i strid med den offisielle politikken. At kunstnere maa holde seg til det som er godkjent ovenfra.

Hoeres det ut som en dystopi? For milliarder av mennesker rundt i verden er dette hverdagen. Men i Norge har vi noe vi kanskje tar for gitt: **ytringsfrihet**. Det er retten til aa uttrykke meninger, tanker og informasjon uten at myndighetene sensurerer deg paa forhaand. Denne retten regnes som en av de mest grunnleggende menneskerettighetene -- og som en absolutt forutsetning for at demokratiet skal fungere.

Uten ytringsfrihet kan ikke borgerne delta i offentlig debatt. Pressen kan ikke kontrollere makthaverne. Vitenskapen kan ikke utvikle ny kunnskap fritt. Kunsten kan ikke utforske og provosere. Kort sagt: uten ytringsfrihet stopper det meste av det som gjor et aapent samfunn levende og dynamisk.`,
    },
    {
      id: 'samfunnskunnskap-7-1-n-section1',
      type: 'text',
      content: `## Tre grunner til at ytringsfriheten er saa viktig

Gjennom historien har tenkere begrunnet ytringsfriheten paa ulike maater. Vi kan sortere argumentene i tre hovedkategorier.

Det forste kalles **sannhetsargumentet**. Ideen er enkel, men kraftfull: fri meningsutveksling forer til bedre erkjennelse av sannheten. Naar ideer testes i offentlig debatt, vil feilaktige meninger avsloeres gjennom motargumenter. Tenk paa det som en slags "markedsplass for ideer" -- de beste ideene overlever fordi de taaler kritikk, mens de daarlige faller bort. Hvis vi forbyr visse meninger, risikerer vi aa hindre sannheten fra aa komme fram.

Det andre er **demokratiargumentet**. Et demokrati krever informerte borgere som kan ta kloke valg. Fri debatt gir bedre politiske beslutninger fordi alle synspunkter faar komme til orde. Velgerne maa kunne kritisere makthaverne -- ellers er demokratiet bare en fasade. Offentligheten fungerer som en arena for deliberasjon, der vi sammen kommer fram til gode losninger.

Det tredje kalles **autonomiargumentet**. Her handler det om individets verdighet. Hvert menneske har rett til aa forme sine egne meninger. Ytringsfrihet er et uttrykk for personlig frihet -- retten til selvutvikling gjennom meningsdannelse. Naar staten forteller deg hva du faar lov til aa mene, krenker den noe grunnleggende ved det aa vaere menneske.`,
    },
    {
      id: 'samfunnskunnskap-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv om ytringsfrihetens begrunnelser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-1-n-quiz1-q0',
            task: 'Hva gaar sannhetsargumentet for ytringsfrihet ut paa?',
            options: [
              { id: 'a', text: 'At alle mennesker har rett til aa mene hva de vil', isCorrect: false },
              { id: 'b', text: 'At fri meningsutveksling forer til bedre erkjennelse av sannheten', isCorrect: true },
              { id: 'c', text: 'At demokratiet krever informerte borgere', isCorrect: false },
              { id: 'd', text: 'At staten maa beskytte borgerne mot farlige meninger', isCorrect: false },
            ],
            solution: 'Sannhetsargumentet handler om at frie debatter lar ideer bli testet mot hverandre. Feilaktige meninger avsloeres gjennom motargumenter, og de beste ideene overlever paa "markedsplassen for ideer".',
          },
          {
            id: 'samfunnskunnskap-7-1-n-quiz1-q1',
            task: 'Hvilket argument for ytringsfrihet legger vekt paa individets verdighet og rett til selvutvikling?',
            options: [
              { id: 'a', text: 'Sannhetsargumentet', isCorrect: false },
              { id: 'b', text: 'Demokratiargumentet', isCorrect: false },
              { id: 'c', text: 'Autonomiargumentet', isCorrect: true },
              { id: 'd', text: 'Rettssikkerhetsargumentet', isCorrect: false },
            ],
            solution: 'Autonomiargumentet bygger paa at hvert menneske har rett til aa forme sine egne meninger som uttrykk for personlig frihet og selvutvikling. Det handler om respekt for individets verdighet.',
          },
          {
            id: 'samfunnskunnskap-7-1-n-quiz1-q2',
            task: 'Hvorfor er ytringsfrihet viktig for demokratiet, ifoolge demokratiargumentet?',
            options: [
              { id: 'a', text: 'Fordi det beskytter minoriteter mot flertallet', isCorrect: false },
              { id: 'b', text: 'Fordi det gir bedre politiske beslutninger gjennom fri debatt og informerte borgere', isCorrect: true },
              { id: 'c', text: 'Fordi det hindrer revolusjoner', isCorrect: false },
              { id: 'd', text: 'Fordi det sikrer oekonomisk vekst', isCorrect: false },
            ],
            solution: 'Demokratiargumentet sier at demokratiet krever informerte borgere. Fri debatt gir bedre politiske beslutninger fordi alle synspunkter faar komme til orde, og velgerne kan kritisere makthaverne.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-1-n-section2',
      type: 'text',
      content: `## Ytringsfrihetens rettslige grunnlag

Ytringsfriheten er ikke bare en fin idé -- den er beskyttet av lover og internasjonale avtaler.

I Norge er det **Grunnloven paragraf 100** som er selve ytringsfrihetsparagrafen. Den ble grundig revidert i 2004 og gir et sterkt vern. Forste ledd sier at vi har rett til fri meningsdannelse. Andre ledd beskytter retten til aa ytre seg. Fjerde ledd forbyr forhåndssensur -- myndighetene kan altsaa ikke stoppe en ytring for den er publisert. Og sjette ledd inneholder noe unikt: et infrastrukturkrav som palegger staten aa legge til rette for aapen og opplyst offentlig debatt.

Paa europeisk nivaa har vi **Den europeiske menneskerettskonvensjonen (EMK) artikkel 10**, som beskytter retten til ytringsfrihet, menings- og informasjonsfrihet, og pressefriheten. EMK er ogsaa gjort til norsk lov, saa den gjelder direkte i norske domstoler.

Paa globalt nivaa finner vi **FNs konvensjon om sivile og politiske rettigheter**, der artikkel 19 beskytter retten til aa soeke, motta og meddele opplysninger og tanker.

Til sammen gir disse et kraftig juridisk vern for ytringsfriheten. Men som vi skal se, er dette vernet ikke uten grenser.`,
    },
    {
      id: 'samfunnskunnskap-7-1-n-section3',
      type: 'text',
      content: `## Grenser for ytringsfrihet -- og vanskelige avveininger

Ytringsfrihet er ikke absolutt. Det finnes ytringer som er forbudt, og av gode grunner.

**Hatefulle ytringer** rammes av straffeloven paragraf 185. Det er ulovlig aa true, forhaane eller fremme hat mot grupper basert paa hudfarge, religion, seksuell orientering og lignende. Slike ytringer kan straffes naar de framsettes offentlig eller i andres paahoer.

**AErekrenkelser** -- altsaa usanne paastander som skader en persons omdomme -- kan gi sivilrettslig erstatningsansvar. Her staar personvern mot ytringsfrihet.

**Krenkelse av privatlivets fred** er regulert i straffeloven paragraf 267. Det handler om uberettiget omtale av private forhold og krenkende atferd mot privatpersoner.

I tillegg er det forbudt med trusler (straffeloven paragraf 263), oppfordring til straffbare handlinger, barnepornografi, og brudd paa taushetsplikt. Det er ogsaa verdt aa merke seg at blasfemi -- det aa haane religion -- var forbudt i Norge helt til 2015.

Men de vanskeligste sporsmaalene oppstaar i grasonen. Kan man kritisere religion uten aa krenke troende? Er karikaturtegninger kunst eller hets? Holocaustfornektelse er forbudt i flere europeiske land, men ikke i Norge -- selv om det kan rammes av paragraf 185. Hvor langt strekker beskyttelsen av politisk ekstremisme seg? Hva med antidemokratiske ytringer i et demokrati? Og hva med nettroll og anonyme ytringer -- anonymitet beskytter varslere, men ogsaa trakassering og hat.

Naar vi skal avveie disse hensynene, bruker vi prinsipper som proporsjonalitet, nodvendighet, kontekst og offentlig interesse. Den europeiske menneskerettsdomstolens (EMDs) praksis gir viktig veiledning i slike saker.`,
    },
    {
      id: 'samfunnskunnskap-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv om ytringsfrihetens rettslige grunnlag og grenser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-1-n-quiz2-q0',
            task: 'Hvilken paragraf i Grunnloven beskytter ytringsfriheten i Norge?',
            options: [
              { id: 'a', text: 'Paragraf 2', isCorrect: false },
              { id: 'b', text: 'Paragraf 100', isCorrect: true },
              { id: 'c', text: 'Paragraf 185', isCorrect: false },
              { id: 'd', text: 'Paragraf 267', isCorrect: false },
            ],
            solution: 'Grunnloven paragraf 100 er Norges ytringsfrihetsparagraf, revidert i 2004. Den beskytter fri meningsdannelse, retten til aa ytre seg, forbyr forhaandssensur, og palegger staten aa legge til rette for aapen debatt.',
          },
          {
            id: 'samfunnskunnskap-7-1-n-quiz2-q1',
            task: 'Hvilken type ytringer rammes av straffeloven paragraf 185?',
            options: [
              { id: 'a', text: 'Politisk kritikk av regjeringen', isCorrect: false },
              { id: 'b', text: 'Hatefulle ytringer mot grupper basert paa hudfarge, religion eller seksuell orientering', isCorrect: true },
              { id: 'c', text: 'Vitenskapelig debatt om kontroversielle temaer', isCorrect: false },
              { id: 'd', text: 'Satiriske tegninger i aviser', isCorrect: false },
            ],
            solution: 'Straffeloven paragraf 185 rammer hatefulle ytringer -- trusler, forhaanelse eller fremming av hat mot grupper basert paa hudfarge, religion, seksuell orientering med mer.',
          },
          {
            id: 'samfunnskunnskap-7-1-n-quiz2-q2',
            task: 'Hva betyr det at Grunnloven forbyr forhaandssensur?',
            options: [
              { id: 'a', text: 'At man aldri kan straffes for noe man har sagt', isCorrect: false },
              { id: 'b', text: 'At myndighetene ikke kan stoppe en ytring foer den er publisert', isCorrect: true },
              { id: 'c', text: 'At alle ytringer er lovlige', isCorrect: false },
              { id: 'd', text: 'At mediene bestemmer hva som faar publiseres', isCorrect: false },
            ],
            solution: 'Forbudet mot forhaandssensur betyr at myndighetene ikke kan hindre en ytring i aa bli publisert. Man kan derimot holdes ansvarlig i etterkant dersom ytringen bryter loven.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-1-n-section4',
      type: 'text',
      content: `## Ytringsfrihetens utfordringer i dag

Selv om ytringsfriheten har et sterkt rettslig vern, staar den overfor nye utfordringer i vaar digitale tid.

**Digitaliseringen** har gitt alle en plattform gjennom sosiale medier. Det er fantastisk for demokratiet -- men det har ogsaa foert til rask spredning av desinformasjon, algoritmer som skaper ekkokammer, og en enorm maktkonsentrasjon hos store teknologiselskaper som Facebook, Google og TikTok.

Et saerlig bekymringsfullt fenomen er **chilling effect** -- naar folk sensurerer seg selv av frykt for konsekvensene. Journalister og debattanter som mottar trusler, kan vegre seg for aa ta opp kontroversielle temaer. Hatprat paa nett kan stille stemmer som ellers ville bidratt til den offentlige debatten. Slik kan ytringsfriheten uthules selv uten formell sensur.

**Polariseringen** i samfunnet gjor debatten hardere. Ekstreme stemmer faar uforholdsmessig mye oppmerksomhet, og nyanserte synspunkter drukner. Dette kan gjore det vanskeligere for vanlige folk aa delta i debatten.

**Globaliseringen** skaper nye utfordringer fordi ytringer krysser landegrenser. Ulike land har ulike kulturelle normer og lover om ytringsfrihet. Autoritaere regimer overvaaker og sensurerer sine innbyggere, ogsaa paa internett.

Og saa har vi spoersmalet om **privat sensur**. Naar plattformer som Facebook og YouTube modererer innhold, er det de -- ikke demokratisk valgte organer -- som bestemmer hva folk faar se og si. Algoritmene filtrerer innhold uten at vi vet det. Dette reiser fundamentale spoersmaal om makt og kontroll i den digitale tidsalderen.`,
    },
    {
      id: 'samfunnskunnskap-7-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv om utfordringer for ytringsfriheten i dag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-1-n-quiz3-q0',
            task: 'Hva menes med "chilling effect" i sammenheng med ytringsfrihet?',
            options: [
              { id: 'a', text: 'At ytringsfriheten blir kaldere i vintermaanedene', isCorrect: false },
              { id: 'b', text: 'At folk sensurerer seg selv av frykt for negative konsekvenser', isCorrect: true },
              { id: 'c', text: 'At sosiale medier begrenser spredning av nyheter', isCorrect: false },
              { id: 'd', text: 'At myndighetene innfoerer nye lover mot hatprat', isCorrect: false },
            ],
            solution: 'Chilling effect betyr at folk sensurerer seg selv fordi de frykter trusler, hets eller andre konsekvenser av aa ytre seg. Det er en indirekte trussel mot ytringsfriheten, fordi stemmer stilnes uten formell sensur.',
          },
          {
            id: 'samfunnskunnskap-7-1-n-quiz3-q1',
            task: 'Hva er et sentralt problem med privat sensur paa sosiale medier?',
            options: [
              { id: 'a', text: 'At det er for faa regler', isCorrect: false },
              { id: 'b', text: 'At private selskaper -- ikke demokratisk valgte organer -- bestemmer hva folk faar se og si', isCorrect: true },
              { id: 'c', text: 'At det koster for mye', isCorrect: false },
              { id: 'd', text: 'At det bare pavirker unge mennesker', isCorrect: false },
            ],
            solution: 'Naar plattformer som Facebook og YouTube modererer innhold, er det private selskaper uten demokratisk kontroll som avgjoer hva som er akseptabelt. Algoritmene filtrerer innhold uten transparens, og det reiser spoersmaal om makt i den digitale tidsalderen.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket ytringsfriheten -- en av de mest grunnleggende rettighetene i et demokratisk samfunn.

- **Ytringsfrihet** er retten til aa uttrykke meninger uten forhaandssensur, begrunnet i sannhetsargumentet (fri debatt avdekker sannhet), demokratiargumentet (informerte borgere gir bedre beslutninger) og autonomiargumentet (individets rett til aa danne egne meninger).
- **Rettslig vern** gis av Grunnloven paragraf 100, EMK artikkel 10 og FNs konvensjoner. Norge har et sterkt vern med forbud mot forhaandssensur og krav om at staten legger til rette for aapen debatt.
- **Grenser** finnes: Hatefulle ytringer, aerekrenkelser, krenkelse av privatlivets fred og trusler er ikke beskyttet. Avveiningen krever proporsjonalitet og kontekstvurdering.
- **Moderne utfordringer** inkluderer digitalisering og sosiale medier, chilling effect fra trusler og hatprat, polarisering av debatten, og privat sensur gjennom plattformenes innholdsmoderering.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2 NARRATIV: Medienes rolle i demokratiet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_7_2_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-7-2-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.2',
  title: 'Medienes rolle i demokratiet',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om hvordan mediene fungerer som demokratiets voktere og hvilke utfordringer de staar overfor.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare medienes funksjoner i et demokrati',
    'vurdere medienes rolle kritisk',
  ],
  linkedChapterId: 'samfunnskunnskap-7-2',
  content: [
    {
      id: 'samfunnskunnskap-7-2-n-intro',
      type: 'text',
      content: `## Demokratiets voktere

I Norge har vi tre statsmakter: Stortinget lager lovene, regjeringen styrer landet, og domstolene dommer. Men det finnes en fjerde makt som ikke staar i Grunnloven -- en makt som likevel er helt avgjoerende for at demokratiet fungerer. Den kalles **"den fjerde statsmakt"**, og det er mediene.

Frie og uavhengige medier er en forutsetning for et fungerende demokrati. Uten dem ville borgerne mangle informasjon om politikken. Makthaverne ville unnslippe granskning. Korrupsjon og maktmisbruk ville blomstre i det skjulte. Den offentlige debatten ville forstumme. Kort sagt: uten frie medier ville demokratiet vaere et tomt skall.

Men hva er det egentlig mediene gjor som er saa viktig? La oss se naermere paa de fire hovedfunksjonene.`,
    },
    {
      id: 'samfunnskunnskap-7-2-n-section1',
      type: 'text',
      content: `## Medienes fire funksjoner

Den forste er **informasjonsfunksjonen**. Mediene informerer oss om hendelser og beslutninger i samfunnet. De forklarer komplekse saker -- som statsbudsjett, klimaavtaler og lovendringer -- slik at vanlige folk kan forstaa dem. De gir borgerne det kunnskapsgrunnlaget vi trenger for aa ta informerte valg. Uten denne funksjonen ville vi vaere blinde for hva som skjer rundt oss.

Den andre er **vakthundfunksjonen**. Her opptrer mediene som demokratiets vaktbikkje. Gjennom gravejournalistikk avdekker de maktmisbruk og korrupsjon. De gransker politikere og naeringsliv. De stiller makthavere til ansvar. Tenk paa alle de store sakene som er blitt avdekket av journalister -- fra Watergate i USA til Monika-saken i Bergen. Uten mediene som vaktbikkje ville mye maktmisbruk aldri blitt kjent.

Den tredje er **arenafunksjonen**. Mediene skaper rom for offentlig debatt. De gir plass til ulike stemmer og synspunkter -- i debattsider, kommentarfelt og TV-debatter. De legger til rette for meningsutveksling og bidrar til demokratisk deliberasjon. Uten denne arenaen ville den offentlige samtalen vaere fattigere.

Den fjerde er **kommentarfunksjonen**. Her analyserer og fortolker mediene det som skjer. Gjennom ledere, kommentarer og analyser gir de perspektiver og bidrar til forstaelse. Redaksjonene ytrer sine meninger og hjelper leserne med aa se saker fra ulike vinkler.`,
    },
    {
      id: 'samfunnskunnskap-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv om medienes funksjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-2-n-quiz1-q0',
            task: 'Hvorfor kalles mediene "den fjerde statsmakt"?',
            options: [
              { id: 'a', text: 'Fordi de er nevnt som den fjerde makten i Grunnloven', isCorrect: false },
              { id: 'b', text: 'Fordi de gransker og kontrollerer de tre andre statsmaktene', isCorrect: true },
              { id: 'c', text: 'Fordi de har fire ulike funksjoner', isCorrect: false },
              { id: 'd', text: 'Fordi Norge har fire store mediehus', isCorrect: false },
            ],
            solution: 'Mediene kalles "den fjerde statsmakt" fordi de kontrollerer og gransker Stortinget, regjeringen og domstolene. De avdekker maktmisbruk og holder makthavere ansvarlige, noe som er avgjoerende for demokratiet.',
          },
          {
            id: 'samfunnskunnskap-7-2-n-quiz1-q1',
            task: 'Hvilken funksjon utover mediene naar de avdekker korrupsjon og maktmisbruk?',
            options: [
              { id: 'a', text: 'Informasjonsfunksjonen', isCorrect: false },
              { id: 'b', text: 'Arenafunksjonen', isCorrect: false },
              { id: 'c', text: 'Vakthundfunksjonen', isCorrect: true },
              { id: 'd', text: 'Kommentarfunksjonen', isCorrect: false },
            ],
            solution: 'Vakthundfunksjonen handler om at mediene gransker politikere og naeringsliv, avdekker maktmisbruk og stiller makthavere til ansvar -- som en vaktbikkje for demokratiet.',
          },
          {
            id: 'samfunnskunnskap-7-2-n-quiz1-q2',
            task: 'Hva innebærer medienes arenafunksjon?',
            options: [
              { id: 'a', text: 'Aa forklare komplekse politiske saker for borgerne', isCorrect: false },
              { id: 'b', text: 'Aa skape rom for offentlig debatt med ulike stemmer og synspunkter', isCorrect: true },
              { id: 'c', text: 'Aa analysere og kommentere nyheter', isCorrect: false },
              { id: 'd', text: 'Aa underholde publikum', isCorrect: false },
            ],
            solution: 'Arenafunksjonen handler om at mediene skaper rom for offentlig debatt, gir plass til ulike stemmer og synspunkter, og legger til rette for demokratisk deliberasjon og meningsutveksling.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-2-n-section2',
      type: 'text',
      content: `## Pressefrihet -- medienes saerlige vern

For at mediene skal kunne utfore sine funksjoner, trenger de et saerlig vern. Dette kaller vi **pressefrihet**.

**Redaksjonell frihet** betyr at mediene selv bestemmer hva de publiserer. Det er ingen statlig sensur, og mediene skal vaere uavhengige av bade eiere og annonsoerer. Denne friheten er beskyttet av Grunnloven og EMK.

**Kildevern** er en annen viktig del av pressefriheten. Journalister kan beskytte identiteten til sine kilder. Dette er helt avgjoerende for at varslere og informanter skal tore aa tipse om kritikkverdige forhold. Uten kildevern ville mange skandaler aldri bli avdekket. Kildevernet kan bare oppheves i svært alvorlige straffesaker.

Pressen har ogsaa visse **privilegier**. Offentlighetsloven gir mediene tilgang til informasjon og innsynsrett i offentlige dokumenter. De har rett til aa referere fra rettssaker. Alt dette er verktoy som gjor at mediene kan utfore sin viktige samfunnsrolle.

Men med stor makt folger stort ansvar. Derfor har mediene ogsaa egne etiske retningslinjer: **Vaer varsom-plakaten**. Den er vedtatt av Norsk Presseforbund og omhandler journalistisk atferd, kildebruk og publisering. Pressens Faglige Utvalg (PFU) haandhever reglene og behandler klager fra dem som mener seg urettferdig behandlet av mediene.`,
    },
    {
      id: 'samfunnskunnskap-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv om pressefrihet og medienes ansvar:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-2-n-quiz2-q0',
            task: 'Hva er kildevern, og hvorfor er det viktig?',
            options: [
              { id: 'a', text: 'At journalister maa oppgi alle kildene sine til politiet', isCorrect: false },
              { id: 'b', text: 'At journalister kan beskytte identiteten til sine kilder, slik at varslere toer aa tipse', isCorrect: true },
              { id: 'c', text: 'At mediene maa ha minst to kilder for aa publisere en sak', isCorrect: false },
              { id: 'd', text: 'At kildene selv bestemmer hva som publiseres', isCorrect: false },
            ],
            solution: 'Kildevern betyr at journalister kan beskytte identiteten til sine kilder. Det er viktig fordi varslere og informanter trenger trygghet for aa tipse om kritikkverdige forhold, noe som styrker medienes vakthundfunksjon.',
          },
          {
            id: 'samfunnskunnskap-7-2-n-quiz2-q1',
            task: 'Hva er Vaer varsom-plakaten?',
            options: [
              { id: 'a', text: 'En lov vedtatt av Stortinget som regulerer mediene', isCorrect: false },
              { id: 'b', text: 'En internasjonal menneskerettighetskonvensjon', isCorrect: false },
              { id: 'c', text: 'Medienes egne etiske retningslinjer, vedtatt av Norsk Presseforbund', isCorrect: true },
              { id: 'd', text: 'En veiledning for sosiale medier-brukere', isCorrect: false },
            ],
            solution: 'Vaer varsom-plakaten er medienes egne etiske retningslinjer vedtatt av Norsk Presseforbund. Den omhandler journalistisk atferd, kildebruk og publisering, og haandheves av Pressens Faglige Utvalg (PFU).',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-2-n-section3',
      type: 'text',
      content: `## Utfordringer og medienes makt

Norske medier staar overfor en rekke utfordringer i dag.

**OEkonomisk press** er kanskje den storste. Annonseinntektene har flyttet til tech-giganter som Google og Facebook, noe som betyr faerre journalister og faerre ressurser til grundig journalistikk. Aviser legges ned eller slaas sammen. Noen tyr til clickbait og underholdning for aa trekke lesere.

**Konsentrasjon av eierskap** er et annet problem. Faerre og storre mediehus -- som Schibsted, Amedia og Polaris Media -- dominerer markedet. Det gir stordriftsfordeler, men det er ogsaa en fare for ensretting naar faerre aktorer kontrollerer informasjonsstromnen.

**Konkurranse fra sosiale medier** endrer hvordan folk faar nyheter. Mange faar nyhetene sine fra Facebook og TikTok, der algoritmene styrer hva de ser. Profesjonell journalistikk konkurrerer med brukergenerert innhold, og det er ikke alltid kvaliteten som vinner.

Mediene har ogsaa en enorm **makt** som de maa forvalte ansvarlig. Gjennom **dagsordenfunksjonen** pavirker de hva folk er opptatt av -- saker som dekkes faar oppmerksomhet, mens saker som ignoreres, forsvinner fra offentligheten. Gjennom **vinkling og framing** pavirker de hvordan vi oppfatter sakene -- valg av kilder, perspektiver, bilder og overskrifter er aldri helt noeytralt.

Norsk gravejournalistikk har gjort stor forskjell: VGs Tysfjord-saken avdekket overgrep, Aftenpostens dekning av 22. juli-terrorsaken informerte nasjonen, NRK har avsloert politisk korrupsjon, og Bergens Tidendes Monika-saken avdekket svikt i politietterforskning. Men mediene faar ogsaa kritikk -- for sensasjonsjournalistikk, personfokus fremfor saksfokus, ensidighet i vinkling, og for aa vaere for naer maktens korridorer.`,
    },
    {
      id: 'samfunnskunnskap-7-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv om medienes utfordringer og makt:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-2-n-quiz3-q0',
            task: 'Hva er en viktig aarsak til at norske medier har faerre ressurser i dag?',
            options: [
              { id: 'a', text: 'At folk har sluttet aa lese nyheter', isCorrect: false },
              { id: 'b', text: 'At annonseinntektene har flyttet til tech-giganter som Google og Facebook', isCorrect: true },
              { id: 'c', text: 'At staten har kuttet all pressestoette', isCorrect: false },
              { id: 'd', text: 'At journalistutdanningen er lagt ned', isCorrect: false },
            ],
            solution: 'Annonseinntektene har i stor grad flyttet til tech-giganter som Google og Facebook, noe som gir mediene faerre ressurser til grundig journalistikk. Dette forer til faerre journalister, nedleggelser og sammenslaainger.',
          },
          {
            id: 'samfunnskunnskap-7-2-n-quiz3-q1',
            task: 'Hva betyr medienes "dagsordenfunksjon"?',
            options: [
              { id: 'a', text: 'At mediene bestemmer hvilke dager avisene utgis', isCorrect: false },
              { id: 'b', text: 'At mediene pavirker hva folk er opptatt av ved aa velge hvilke saker som dekkes', isCorrect: true },
              { id: 'c', text: 'At mediene setter opp moeter for politikerne', isCorrect: false },
              { id: 'd', text: 'At mediene folger en fast publiseringsplan', isCorrect: false },
            ],
            solution: 'Dagsordenfunksjonen betyr at mediene har stor makt over hva folk er opptatt av. Saker som faar mediedekning, faar oppmerksomhet, mens saker som ikke dekkes, blir oversett av offentligheten.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett paa medienes avgjoerende rolle i demokratiet.

- **Den fjerde statsmakt**: Mediene gransker og kontrollerer Stortinget, regjeringen og domstolene, og er en forutsetning for et fungerende demokrati.
- **Fire funksjoner**: Informasjonsfunksjonen (opplyse borgerne), vakthundfunksjonen (granske makthavere), arenafunksjonen (skape rom for debatt) og kommentarfunksjonen (analysere og fortolke).
- **Pressefrihet**: Redaksjonell frihet, kildevern og innsynsrett er viktige verktoy, regulert av Vaer varsom-plakaten og haandhevet av PFU.
- **Utfordringer**: OEkonomisk press fra tech-giganter, konsentrasjon av eierskap, konkurranse fra sosiale medier og synkende tillit.
- **Makt og ansvar**: Dagsordenfunksjonen og vinkling gir mediene stor innflytelse over den offentlige debatten -- en makt som krever ansvarlig forvaltning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3 NARRATIV: Det norske medielandskapet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_7_3_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-7-3-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.3',
  title: 'Det norske medielandskapet',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om NRK, aviser, medieeierskap og pressestoette i Norge.',
  estimatedMinutes: 25,
  competenceGoals: [
    'faa oversikt over det norske medielandskapet',
    'forstaa mediepolitikk og mediestotte',
  ],
  linkedChapterId: 'samfunnskunnskap-7-3',
  content: [
    {
      id: 'samfunnskunnskap-7-3-n-intro',
      type: 'text',
      content: `## Et medielandskap i endring

Forestill deg Norge uten NRK. Uten lokalavisen. Uten VG og Aftenposten. Hva vet du da om hva som skjer i kommunen din, i Stortinget, i verden? Sannheten er at vi er helt avhengige av et mangfoldig medielandskap for aa vaere informerte borgere.

Norge har et av verdens mest mangfoldige medielandskap, med en sterk allmennkringkaster, nasjonale og lokale aviser, og kommersielle aktorer. Staten forer en aktiv **mediepolitikk** for aa sikre mangfold og kvalitetsjournalistikk. Det norske mediemarkedet preges av fire ting: en sterk allmennkringkaster i NRK, tradisjonelt hoey avislesing, konsentrasjon av eierskap i noen store konsern, og betydelig pressestoette fra staten.

La oss se naermere paa de viktigste aktoorene.`,
    },
    {
      id: 'samfunnskunnskap-7-3-n-section1',
      type: 'text',
      content: `## NRK -- Hele Norges kringkaster

**NRK -- Norsk rikskringkasting** er Norges allmennkringkaster og den storste medieaktoren i landet. NRK er eid av staten, men er redaksjonelt uavhengig -- det betyr at politikerne ikke bestemmer hva NRK sender.

NRK har et bredt tilbud: paa TV har de NRK1, NRK2 og NRK3/NRK Super. Paa radio finnes P1, P2, P3, P1+ og flere nisjekanaler. Og paa nett tilbyr nrk.no nyheter, TV og radio -- alt tilgjengelig for alle.

Tidligere var NRK finansiert av lisensavgiften -- den beroemte TV-lisensen som alle med TV-apparat maatte betale. Fra 2020 ble dette endret: naa finansieres NRK over statsbudsjettet. Det betyr at NRK er uavhengig av annonseinntekter, noe som gir dem frihet til aa fokusere paa kvalitet fremfor klikk.

NRK har et tydelig **samfunnsoppdrag**: de skal informere, utdanne og underholde. De skal dekke hele landet -- ogsaa de delene som ikke er kommersielt loennsomme. De skal tilby innhold paa nynorsk og samisk. De skal ivareta mangfoldet i samfunnet. Og de skal vaere allment tilgjengelige for alle.

Kringkastingsraadet overvaaker NRK og behandler klager. Men det viktigste prinsippet er at NRK skal vaere fri fra politisk paavirkning i sin redaksjonelle virksomhet.`,
    },
    {
      id: 'samfunnskunnskap-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv om NRK og allmennkringkasting:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-3-n-quiz1-q0',
            task: 'Hvordan finansieres NRK i dag?',
            options: [
              { id: 'a', text: 'Gjennom TV-lisens', isCorrect: false },
              { id: 'b', text: 'Gjennom reklame og annonseinntekter', isCorrect: false },
              { id: 'c', text: 'Over statsbudsjettet', isCorrect: true },
              { id: 'd', text: 'Gjennom abonnementer', isCorrect: false },
            ],
            solution: 'Fra 2020 finansieres NRK over statsbudsjettet, i stedet for gjennom den tidligere TV-lisensen. Dette gjor NRK uavhengig av annonseinntekter og lar dem fokusere paa kvalitet.',
          },
          {
            id: 'samfunnskunnskap-7-3-n-quiz1-q1',
            task: 'Hva innebaerer NRKs samfunnsoppdrag?',
            options: [
              { id: 'a', text: 'Aa tjene mest mulig penger for staten', isCorrect: false },
              { id: 'b', text: 'Aa informere, utdanne og underholde, og dekke hele landet', isCorrect: true },
              { id: 'c', text: 'Aa konkurrere med kommersielle kanaler om seertall', isCorrect: false },
              { id: 'd', text: 'Aa publisere regjeringens politikk', isCorrect: false },
            ],
            solution: 'NRKs samfunnsoppdrag er aa informere, utdanne og underholde. De skal dekke hele landet, tilby innhold paa nynorsk og samisk, ivareta mangfoldet, og vaere tilgjengelig for alle.',
          },
          {
            id: 'samfunnskunnskap-7-3-n-quiz1-q2',
            task: 'Hva betyr det at NRK er "redaksjonelt uavhengig"?',
            options: [
              { id: 'a', text: 'At NRK ikke har noen sjefredaktor', isCorrect: false },
              { id: 'b', text: 'At NRK ikke trenger aa folge lover og regler', isCorrect: false },
              { id: 'c', text: 'At politikerne ikke bestemmer hva NRK sender', isCorrect: true },
              { id: 'd', text: 'At NRK kan bestemme selv hvor mye penger de faar', isCorrect: false },
            ],
            solution: 'Redaksjonell uavhengighet betyr at NRK selv bestemmer hva de publiserer og sender, uten politisk innblanding. Selv om NRK er eid av staten og finansiert over statsbudsjettet, er innholdet fritt for politisk styring.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-3-n-section2',
      type: 'text',
      content: `## Avistradisjonen -- fra nasjonale giganter til lokal livsnerve

Norge har tradisjonelt hatt svart hoey avislesing sammenlignet med andre land. Avisene har vaert viktige for demokratiet og for lokalsamfunnene.

Paa nasjonalt nivaa finner vi aviser som **VG**, Norges storste avis og en tabloidavis. **Dagbladet** er ogsaa en lossalgsavis. **Aftenposten** er en abonnementsavis med riksdekkende dekning. **Klassekampen** er en dagsavis med venstreorientert profil, **Dagens Naeringsliv** er en naeringslivsavis med liberalistisk profil, og **Nationen** er en distrikts- og landbruksavis med senterorientert profil.

Regionalt har vi aviser som Bergens Tidende, Stavanger Aftenblad, Adresseavisen i Trondheim og Faedrelandsvennen i Kristiansand. Disse avisene spiller en viktig rolle i sine regioner.

Men det er kanskje lokalavisene som er mest undervurdert. Norge har over 200 lokalaviser, og de er livsviktige for lokaldemokratiet. De dekker kommunestyrer og lokalt naeringsliv. Ofte er de den eneste kilden til lokal informasjon. Uten lokalavisen vet du rett og slett ikke hva som skjer i kommunen din.`,
    },
    {
      id: 'samfunnskunnskap-7-3-n-section3',
      type: 'text',
      content: `## Medieeierskap -- naar faa kontrollerer mye

Det norske mediemarkedet preges av **konsentrasjon** -- faa store aktorer kontrollerer mange medier. La oss se paa hvem de er.

**Schibsted** eier blant annet VG, Aftenposten og Bergens Tidende, pluss Finn.no. De er et nordisk mediekonsern med betydelig innflytelse.

**Amedia** er Norges storste aviskonsern etter opplag. De eier over 80 lokale og regionale aviser, pluss Dagbladet og Nettavisen.

**Polaris Media** eier Adresseavisen og flere aviser i Midt-Norge.

Denne konsentrasjonen har baade fordeler og ulemper. Paa den positive siden gir det stordriftsfordeler og mulighet for deling av innhold mellom avisene. Paa den negative siden risikerer vi mindre mangfold og faerre redaksjonelle stemmer. Naar faerre aktorer kontrollerer informasjonsflyten, oeker faren for ensretting.

For aa motvirke dette finnes det regulering. Medietilsynet overvaaker mediemarkedet. Det er eierskapsgrenser i kringkasting. Og staten gir mediestotte for aa sikre mangfold.`,
    },
    {
      id: 'samfunnskunnskap-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv om aviser og medieeierskap:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-3-n-quiz2-q0',
            task: 'Hvilket mediekonsern eier VG, Aftenposten og Bergens Tidende?',
            options: [
              { id: 'a', text: 'Amedia', isCorrect: false },
              { id: 'b', text: 'Polaris Media', isCorrect: false },
              { id: 'c', text: 'Schibsted', isCorrect: true },
              { id: 'd', text: 'TV 2', isCorrect: false },
            ],
            solution: 'Schibsted er et nordisk mediekonsern som eier VG, Aftenposten og Bergens Tidende, i tillegg til Finn.no.',
          },
          {
            id: 'samfunnskunnskap-7-3-n-quiz2-q1',
            task: 'Hvorfor er lokalaviser viktige for demokratiet?',
            options: [
              { id: 'a', text: 'Fordi de har de beste journalistene', isCorrect: false },
              { id: 'b', text: 'Fordi de dekker kommunestyrer og er ofte den eneste kilden til lokal informasjon', isCorrect: true },
              { id: 'c', text: 'Fordi de er gratis for alle', isCorrect: false },
              { id: 'd', text: 'Fordi de eies av kommunene', isCorrect: false },
            ],
            solution: 'Norge har over 200 lokalaviser som dekker kommunestyrer og lokalt naeringsliv. De er ofte den eneste kilden til informasjon om hva som skjer lokalt, og er dermed livsviktige for lokaldemokratiet.',
          },
          {
            id: 'samfunnskunnskap-7-3-n-quiz2-q2',
            task: 'Hva er en ulempe ved konsentrasjon av medieeierskap?',
            options: [
              { id: 'a', text: 'At avisene blir dyrere', isCorrect: false },
              { id: 'b', text: 'At det blir faerre redaksjonelle stemmer og risiko for mindre mangfold', isCorrect: true },
              { id: 'c', text: 'At journalistene faar lavere loenn', isCorrect: false },
              { id: 'd', text: 'At det blir vanskeligere aa trykke aviser', isCorrect: false },
            ],
            solution: 'Naar faa store aktorer kontrollerer mange medier, risikerer vi faerre redaksjonelle stemmer og mindre mangfold. Det kan fore til ensretting av informasjonen borgerne faar tilgang til.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-3-n-section4',
      type: 'text',
      content: `## Pressestoette -- staten sikrer mangfold

Norge har en aktiv mediepolitikk for aa sikre at vi har et mangfoldig medielandskap. Dette gjores gjennom flere virkemidler.

**Produksjonstilskudd** er stoette til aviser med svak oekonomi. Det prioriterer saerlig "nummer to-aviser" i byer -- altsaa den nest storste avisen paa et sted som ellers ville blitt utkonkurrert. Ogsaa nisjeaviser og aviser paa nynorsk faar stoette.

**Innovasjonsstoette** skal hjelpe medier med digital omstilling, utvikle nye forretningsmodeller og satse paa kvalitetsjournalistikk i en tid der alt endrer seg raskt.

**Momsfritak** er et viktig virkemiddel: aviser og nyhetstjenester har 0 prosent moms, ogsaa digitale abonnement. Dette er en betydelig oekonomisk fordel som gjor at mediene kan holde prisene nede.

**NRK-finansieringen** over statsbudsjettet sikrer at allmennkringkasteren er uavhengig av markedet.

Begrunnelsene for pressestoette er klare: man vil sikre mediemangfold, stoette kvalitetsjournalistikk, opprettholde lokal mediedekning, og motvirke markedssvikt -- altsaa situasjoner der markedet alene ikke klarer aa opprettholde det mediemangfoldet demokratiet trenger.

Men pressestoetten faar ogsaa kritikk. Noen mener den skaper konkurransevridning og subsidierer ineffektive aktorer. Andre spoer om det er riktig at staten bruker skattepenger paa medier -- bor ikke markedet bestemme hvilke medier som overlever?`,
    },
    {
      id: 'samfunnskunnskap-7-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv om pressestoette og mediepolitikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-3-n-quiz3-q0',
            task: 'Hva er hovedbegrunnelsen for at Norge har pressestoette?',
            options: [
              { id: 'a', text: 'Aa gjore aviser billigst mulig', isCorrect: false },
              { id: 'b', text: 'Aa sikre mediemangfold og kvalitetsjournalistikk som markedet alene ikke ville gitt', isCorrect: true },
              { id: 'c', text: 'Aa sikre at alle aviser tjener penger', isCorrect: false },
              { id: 'd', text: 'Aa kontrollere hva mediene skriver', isCorrect: false },
            ],
            solution: 'Pressestoetten skal sikre mediemangfold og kvalitetsjournalistikk. Uten offentlig stoette ville mange viktige medier -- saerlig nummer to-aviser og lokalaviser -- forsvinne paa grunn av markedssvikt.',
          },
          {
            id: 'samfunnskunnskap-7-3-n-quiz3-q1',
            task: 'Hva innebaerer momsfritaket for medier?',
            options: [
              { id: 'a', text: 'At medier slipper aa betale skatt', isCorrect: false },
              { id: 'b', text: 'At aviser og nyhetstjenester har 0 prosent moms, ogsaa digitalt', isCorrect: true },
              { id: 'c', text: 'At journalister faar skattefritak', isCorrect: false },
              { id: 'd', text: 'At medier slipper aa betale for papir', isCorrect: false },
            ],
            solution: 'Aviser og nyhetstjenester har 0 prosent moms i Norge, ogsaa for digitale abonnement. Dette er en betydelig oekonomisk fordel som gjor at mediene kan holde prisene nede og naa flere lesere.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi faat oversikt over det norske medielandskapet.

- **NRK** er Norges allmennkringkaster med samfunnsoppdrag om aa informere, utdanne og underholde. NRK er finansiert over statsbudsjettet og er redaksjonelt uavhengig.
- **Avistradisjonen**: Norge har hoey avislesing med nasjonale aviser som VG og Aftenposten, regionale aviser, og over 200 lokalaviser som er livsviktige for lokaldemokratiet.
- **Medieeierskap**: Konsentrasjon rundt Schibsted, Amedia og Polaris Media gir stordriftsfordeler, men risikerer mindre mangfold og faerre redaksjonelle stemmer.
- **Pressestoette**: Staten sikrer mediemangfold gjennom produksjonstilskudd, innovasjonsstoette og momsfritak for aa motvirke markedssvikt.
- **Mediepolitikk**: En aktiv offentlig politikk balanserer markedskrefter og sikrer kvalitetsjournalistikk som demokratiet trenger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4 NARRATIV: Sosiale medier
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_7_4_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-7-4-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.4',
  title: 'Sosiale medier',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om sosiale mediers paavirkning paa samfunnet, algoritmer, ekkokammer og demokrati.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forstaa hvordan sosiale medier pavirker samfunnet',
    'reflektere kritisk over egen bruk av sosiale medier',
  ],
  linkedChapterId: 'samfunnskunnskap-7-4',
  content: [
    {
      id: 'samfunnskunnskap-7-4-n-intro',
      type: 'text',
      content: `## Revolusjonen i lomma di

Tenk tilbake til bare tjue aar siden. Hvis du ville dele en mening med verden, maatte du skrive et leserbrev til avisen og haape det ble publisert. Hvis du ville vite hva venner drev med, maatte du ringe dem. Hvis du ville se en morsom video, maatte du vente paa at den ble vist paa TV.

I dag har du en revolusjon i lomma. **Sosiale medier** har fundamentalt endret hvordan vi kommuniserer, faar informasjon og deltar i samfunnsdebatten. Plattformer som Facebook, Instagram, TikTok, YouTube og X (tidligere Twitter) har milliarder av brukere verden over.

Det som kjennetegner sosiale medier er fire ting: innholdet er **brukergenerert** -- det er vi som lager det, ikke profesjonelle redaksjoner. Det handler om **deling og interaksjon** -- vi liker, kommenterer og sender videre. Det finnes sterke **nettverkseffekter** -- jo flere som bruker plattformen, jo mer verdifull blir den. Og alt styres av **algoritmisk distribusjon** -- det er dataprogrammer som bestemmer hva du faar se.

Hver plattform har sin profil. Facebook er verdens storste sosiale nettverk for deling av tekst, bilder og video. Instagram handler om bilder og video og er preget av influencer-kultur. TikTok tilbyr korte videoer med en kraftig algoritme og er enormt populaert blant unge. YouTube er en videodelingsplattform for alt fra underholdning til nyheter. X brukes mye av journalister og politikere for korte meldinger og debatt. Snapchat brukes for bilder og meldinger som forsvinner. Og LinkedIn er et profesjonelt nettverk for karriere og arbeidsliv.`,
    },
    {
      id: 'samfunnskunnskap-7-4-n-section1',
      type: 'text',
      content: `## Algoritmene -- den usynlige haanden

Har du noen gang lurt paa hvorfor feeden din paa Instagram eller TikTok virker skreddersydd for deg? Svaret er **algoritmer** -- dataprogrammer som bestemmer hva du ser.

Algoritmene fungerer slik: de samler data om din aktivitet -- hva du liker, hvor lenge du ser paa noe, hva du klikker paa. De bygger en profil av dine interesser. Saa viser de deg innhold som er sannsynlig aa engasjere deg. Maalet? Aa holde deg paa plattformen saa lenge som mulig -- fordi jo mer tid du bruker der, jo flere annonser kan de vise deg.

Dette har baade positive og negative konsekvenser. Paa den positive siden faar du relevant innhold for deg, du oppdager nye interesser, og informasjonsstromnen er effektiv. Paa den negative siden ser du ikke hele bildet av virkeligheten. Algoritmen forsterker eksisterende preferanser -- liker du katter, faar du mer katter, og faar aldri se hundene. Sensasjonelt og kontroversielt innhold prioriteres fordi det engasjerer mer. Og bak det hele ligger en kommersiell motivasjon: det handler om aa tjene penger paa din oppmerksomhet.`,
    },
    {
      id: 'samfunnskunnskap-7-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv om sosiale medier og algoritmer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-4-n-quiz1-q0',
            task: 'Hva er hovedmaalet til algoritmene i sosiale medier?',
            options: [
              { id: 'a', text: 'Aa gi deg den viktigste informasjonen', isCorrect: false },
              { id: 'b', text: 'Aa holde deg paa plattformen saa lenge som mulig', isCorrect: true },
              { id: 'c', text: 'Aa beskytte deg mot farlig innhold', isCorrect: false },
              { id: 'd', text: 'Aa vise deg innhold fra vennene dine', isCorrect: false },
            ],
            solution: 'Algoritmenes hovedmaal er aa holde deg paa plattformen saa lenge som mulig, fordi det betyr flere annonser og mer inntekter. De gjor dette ved aa vise innhold som engasjerer deg basert paa din tidligere aktivitet.',
          },
          {
            id: 'samfunnskunnskap-7-4-n-quiz1-q1',
            task: 'Hvilken data bruker algoritmene for aa bestemme hva du ser?',
            options: [
              { id: 'a', text: 'Bare alderen din', isCorrect: false },
              { id: 'b', text: 'Bare hva vennene dine liker', isCorrect: false },
              { id: 'c', text: 'Din aktivitet: likes, tid brukt, klikk og interesser', isCorrect: true },
              { id: 'd', text: 'Bare hva som er mest populaert akkurat naa', isCorrect: false },
            ],
            solution: 'Algoritmene samler data om alt du gjor paa plattformen -- hva du liker, hvor lenge du ser paa innhold, hva du klikker paa -- og bygger en profil av dine interesser for aa vise deg mer av det som engasjerer deg.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-4-n-section2',
      type: 'text',
      content: `## Ekkokammer og filterbobler

Algoritmene foerer oss til to fenomener som har faat mye oppmerksomhet.

**Ekkokammer** oppstaar naar vi hovedsakelig eksponeres for synspunkter vi allerede er enige i. Vi omgir oss med likesinnede -- i sosiale medier, i nyhetene vi leser, i podcastene vi hoerer paa. Meningene vaare bekreftes igjen og igjen, som et ekko i et kammer.

**Filterbobler** er et relatert fenomen: algoritmene filtrerer aktivt bort informasjon som ikke passer vaare preferanser. Du vet ikke engang hva du gaar glipp av.

Konsekvensene kan vaere alvorlige. Eksisterende holdninger forsterkes. Dialog paa tvers av meningsforskjeller blir vanskeligere. Polariseringen i samfunnet kan oeke. Vi blir mindre eksponert for motargumenter. Og samfunnets felles kunnskapsgrunnlag svekkes naar vi lever i ulike informasjonsvirkeligheter.

Men det er viktig aa nevne at forskningen er blandet. Mange mennesker eksponeres faktisk for ulike synspunkter, ogsaa paa sosiale medier. Tradisjonelle medier hadde ogsaa ensidighet -- folk leste aviser som bekreftet deres politiske syn. Og brukerne er ikke passive mottakere; de gjor aktive valg.

Hva kan du gjore? Folg ulike kilder og synspunkter bevisst. Vaer oppmerksom paa at algoritmene filtrerer. Oppsoek informasjon aktivt i stedet for bare aa la feeden servere deg. Og bruk flere nyhetskilder for aa faa et bredere bilde.`,
    },
    {
      id: 'samfunnskunnskap-7-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv om ekkokammer og filterbobler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-4-n-quiz2-q0',
            task: 'Hva er forskjellen mellom ekkokammer og filterboble?',
            options: [
              { id: 'a', text: 'De er det samme fenomenet', isCorrect: false },
              { id: 'b', text: 'Ekkokammer handler om at vi eksponeres for meninger vi er enige i, filterbobler om at algoritmer filtrerer bort annet', isCorrect: true },
              { id: 'c', text: 'Ekkokammer finnes bare paa Facebook, filterbobler bare paa TikTok', isCorrect: false },
              { id: 'd', text: 'Ekkokammer er positivt, filterbobler er negativt', isCorrect: false },
            ],
            solution: 'Ekkokammer oppstaar naar vi hovedsakelig hoerer meninger vi allerede er enige i. Filterbobler oppstaar naar algoritmene aktivt filtrerer bort informasjon som ikke passer vaare preferanser. Begge kan forsterke holdninger og oeke polarisering.',
          },
          {
            id: 'samfunnskunnskap-7-4-n-quiz2-q1',
            task: 'Hva kan du gjore for aa unngaa aa havne i et ekkokammer?',
            options: [
              { id: 'a', text: 'Slutte aa bruke sosiale medier helt', isCorrect: false },
              { id: 'b', text: 'Bare lese aviser', isCorrect: false },
              { id: 'c', text: 'Bevisst folge ulike kilder, oppsoeke informasjon aktivt og bruke flere nyhetskilder', isCorrect: true },
              { id: 'd', text: 'Bare lese det algoritmene anbefaler', isCorrect: false },
            ],
            solution: 'Du kan motvirke ekkokammer ved aa bevisst folge ulike kilder og synspunkter, vaere oppmerksom paa algoritmenes filtrering, oppsoeke informasjon aktivt, og bruke flere nyhetskilder.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-4-n-section3',
      type: 'text',
      content: `## Sosiale medier og demokrati

Sosiale medier har baade styrket og utfordret demokratiet.

Paa den positive siden har de senket terskelen for deltakelse. Alle kan ytre seg, ikke bare de som har tilgang til tradisjonelle medier. Nye stemmer faar plattform. Grasrotbevegelser kan organisere seg raskt og effektivt. Og makthavere kan holdes ansvarlige gjennom viral spredning av kritikk. Vi har sett dette i praksis med mobiliseringer paa tvers av det politiske spekteret: den arabiske vaaren i 2011, Tea Party-bevegelsen i USA, Brexit-kampanjen, bompengeopproeret i Norge, og de gule vestene i Frankrike.

Men det er ogsaa alvorlige utfordringer. Feilinformasjon fra alle hold spres raskt. Hatprat og trakassering skremmer folk fra aa delta. Paavirkningskampanjer fra ulike aktorer -- inkludert utenlandske stater -- manipulerer opinionen. Og polariseringen i debatten oeker.

Vi har sett problematisk bruk i form av utenlandsk paavirkning i valg, konspirasjonsteorienes raske spredning, koordinerte trollkampanjer, og hatkampanjer mot enkeltpersoner. Disse eksemplene finnes paa tvers av politiske retninger.

Spoersmaalet om **regulering** er derfor brennaktuelt. Plattformene har selv ansvar for innholdsmoderering -- aa fjerne ulovlig innhold, ha retningslinjer for bruk, og drive faktasjekk og merking. EUs Digital Services Act (DSA) stiller krav om fjerning av ulovlig innhold, transparens om algoritmer, aldersgrenser og barnevern.

Debatten staar mellom dem som vil ha strengere regulering -- for aa beskytte mot skadelig innhold, sikre demokratisk debatt og ansvarliggjore plattformene -- og dem som advarer mot at det kan true ytringsfriheten, hemme innovasjon, og gi noen makt til aa definere hva som er "skadelig".`,
    },
    {
      id: 'samfunnskunnskap-7-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv om sosiale medier og demokrati:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-4-n-quiz3-q0',
            task: 'Hvordan kan sosiale medier styrke demokratiet?',
            options: [
              { id: 'a', text: 'Ved aa erstatte tradisjonelle medier', isCorrect: false },
              { id: 'b', text: 'Ved aa senke terskelen for deltakelse slik at alle kan ytre seg og organisere seg', isCorrect: true },
              { id: 'c', text: 'Ved aa sikre at bare eksperter faar uttale seg', isCorrect: false },
              { id: 'd', text: 'Ved aa fjerne alle kontroversielle meninger', isCorrect: false },
            ],
            solution: 'Sosiale medier styrker demokratiet ved aa gi alle en plattform, senke terskelen for deltakelse, la nye stemmer bli hoert, og muliggjore rask organisering av grasrotbevegelser paa tvers av politiske retninger.',
          },
          {
            id: 'samfunnskunnskap-7-4-n-quiz3-q1',
            task: 'Hva er EUs Digital Services Act (DSA)?',
            options: [
              { id: 'a', text: 'En lov som forbyr sosiale medier i EU', isCorrect: false },
              { id: 'b', text: 'En lov som gir alle rett til gratis internett', isCorrect: false },
              { id: 'c', text: 'Lovgivning som stiller krav til plattformers innholdsmoderering og transparens', isCorrect: true },
              { id: 'd', text: 'En avtale mellom sosiale medier-selskaper', isCorrect: false },
            ],
            solution: 'EUs Digital Services Act (DSA) er lovgivning som stiller krav til plattformenes innholdsmoderering, fjerning av ulovlig innhold, transparens om algoritmer, og aldersgrenser for barn.',
          },
          {
            id: 'samfunnskunnskap-7-4-n-quiz3-q2',
            task: 'Hva er et argument MOT strengere regulering av sosiale medier?',
            options: [
              { id: 'a', text: 'At det er for dyrt', isCorrect: false },
              { id: 'b', text: 'At det kan true ytringsfriheten og gi noen makt til aa definere hva som er "skadelig"', isCorrect: true },
              { id: 'c', text: 'At sosiale medier allerede er perfekt regulert', isCorrect: false },
              { id: 'd', text: 'At bare unge bruker sosiale medier', isCorrect: false },
            ],
            solution: 'Et sentralt argument mot strengere regulering er faren for at det kan true ytringsfriheten. Hvem skal definere hva som er "skadelig" innhold? Det er ogsaa bekymring for at det kan hemme innovasjon og fore til privat sensur.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket sosiale mediers revolusjon og dens konsekvenser.

- **Sosiale mediers kjennetegn**: Brukergenerert innhold, deling og interaksjon, nettverkseffekter og algoritmisk distribusjon preger plattformer som Facebook, Instagram, TikTok og YouTube.
- **Algoritmer**: Dataprogrammer styrer hva du ser basert paa din aktivitet. Maalet er aa holde deg paa plattformen, noe som har baade positive (relevant innhold) og negative (forvrengning av virkeligheten) konsekvenser.
- **Ekkokammer og filterbobler**: Kan forsterke eksisterende holdninger, vanskeliggjore dialog paa tvers og svekke felles kunnskapsgrunnlag -- men forskningen er blandet.
- **Demokrati**: Sosiale medier gir lavere terskel for deltakelse og nye stemmer, men kan ogsaa spre feilinformasjon, hatprat og paavirkningskampanjer.
- **Regulering**: En paagende debatt om balansen mellom ytringsfrihet og beskyttelse mot skadelig innhold, der EUs DSA er et viktig skritt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.5 NARRATIV: Kildekritikk og faktasjekk
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_7_5_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-7-5-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.5',
  title: 'Kildekritikk og faktasjekk',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om hvordan du vurderer kilder kritisk og avslorer feilinformasjon i en verden av informasjonsoverflod.',
  estimatedMinutes: 25,
  competenceGoals: [
    'anvende kildekritiske metoder',
    'vurdere troverdigheten til informasjon',
  ],
  linkedChapterId: 'samfunnskunnskap-7-5',
  content: [
    {
      id: 'samfunnskunnskap-7-5-n-intro',
      type: 'text',
      content: `## Navigere i informasjonsjungelen

Du scroller gjennom sosiale medier og ser en artikkel med en sjokkerende overskrift. En venn har delt den. Det virker troverdig. Du er fristet til aa dele den videre. Men stopp et oeyeblikk -- stemmer det egentlig?

I en tid med informasjonsoverflod er det viktigere enn noen gang aa kunne vurdere kilder kritisk. Alle kan publisere paa internett. Falsk og villedende informasjon spres raskt, ofte raskere enn sannheten. Og konsekvensene kan vaere alvorlige -- feilaktig informasjon kan paavirke valg, skade enkeltpersoner og undergrave tilliten til viktige institusjoner.

**Kildekritikk** er metoder for aa vurdere om informasjon er paalitelig, sann og relevant. Det er en grunnleggende ferdighet for aa navigere i dagens medielandskap -- en ferdighet som er like viktig som aa kunne lese og skrive.`,
    },
    {
      id: 'samfunnskunnskap-7-5-n-section1',
      type: 'text',
      content: `## De fire grunnsporsmaalene

Naar du moeter informasjon, bor du alltid stille fire grunnleggende spoersmaal.

Det forste er: **Hvem staar bak?** Hvem har produsert informasjonen? Er avsenderen troverdig? Har de kompetanse paa feltet? Og like viktig: kan de ha skjulte motiver? En forskningsrapport fra et uavhengig universitet er noe annet enn en "studie" finansiert av et selskap som har oekonomisk interesse i konklusjonen.

Det andre er: **Hva er kildens formaal?** Er maalet aa informere objektivt? Eller er det aa overbevise og paavirke deg? Kanskje er formaalet aa selge deg noe -- et produkt, en idé, en politisk holdning? Eller kanskje det bare er ment som underholdning som ikke bor tas bokstavelig?

Det tredje er: **Naar ble informasjonen publisert?** Er den oppdatert? Har situasjonen endret seg siden den ble skrevet? En artikkel fra 2015 om teknologi kan vaere fullstendig utdatert i dag. Tidspunktet kan ogsaa paavirke innholdet -- informasjon publisert midt i en krise kan vaere preget av ufullstendig kunnskap.

Det fjerde er: **Hvordan er informasjonen fremstilt?** Er den saklig og balansert? Brukes emosjonelle virkemidler for aa manipulere deg? Er paastander dokumentert med kilder? Finnes det motstridende informasjon som ikke nevnes?

Disse fire sporsmaalene er ditt viktigste verktoy for aa vurdere om informasjon er til aa stole paa.`,
    },
    {
      id: 'samfunnskunnskap-7-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv om kildekritiske prinsipper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-5-n-quiz1-q0',
            task: 'Hva er de fire grunnsporsmaalene i kildekritikk?',
            options: [
              { id: 'a', text: 'Hvem, hva, naar og hvordan', isCorrect: true },
              { id: 'b', text: 'Hva, hvor, hvorfor og hvem', isCorrect: false },
              { id: 'c', text: 'Naar, hvor, hvem og hvorfor', isCorrect: false },
              { id: 'd', text: 'Hva, hvordan, hvorfor og hvor', isCorrect: false },
            ],
            solution: 'De fire grunnsporsmaalene er: Hvem staar bak? (avsender og kompetanse), Hva er formaalet? (informere, paavirke, selge), Naar ble det publisert? (aktualitet), og Hvordan er det fremstilt? (saklighet og dokumentasjon).',
          },
          {
            id: 'samfunnskunnskap-7-5-n-quiz1-q1',
            task: 'Hvorfor er det viktig aa spoerre om kildens formaal?',
            options: [
              { id: 'a', text: 'For aa finne ut hvem som skrev det', isCorrect: false },
              { id: 'b', text: 'For aa forstaa om maalet er aa informere objektivt, paavirke, selge eller underholde', isCorrect: true },
              { id: 'c', text: 'For aa sjekke om informasjonen er ny', isCorrect: false },
              { id: 'd', text: 'For aa finne ut om det er en primaerkilde', isCorrect: false },
            ],
            solution: 'Kildens formaal avgjor hvor paalitelig informasjonen er. En kilde som vil informere objektivt er mer paalitelig enn en som vil selge deg noe eller paavirke holdningene dine. Formaalet farger alltid innholdet.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-5-n-section2',
      type: 'text',
      content: `## Ulike kildetyper -- ikke alle kilder er like gode

Det finnes ulike typer kilder, og de har ulik paalitelighet.

**Primaerkilder** er foerstehands vitnesbyrd og originaldokumenter. Det kan vaere oeyenvitneskildringer, originale forskningsrapporter, historiske dokumenter eller raadata fra undersokelser. Primaerkilder er oftest de mest troverdige fordi de ikke har gaatt gjennom andres tolkning.

**Sekundaerkilder** er fortolkninger og analyser av primaerkilder. Journalistikk basert paa primaerkilder, laereboeker og oppslagsverk er typiske sekundaerkilder. De kan vaere svart nyttige, men vaer oppmerksom paa at de kan vaere farget av forfatterens tolkning.

**Tertiaerkilder** er sammendrag av sekundaerkilder. Wikipedia og leksikon er typiske eksempler. De er gode for aa faa oversikt over et tema, men du bor sjekke videre i de underliggende kildene for aa vaere sikker.

Naar du vurderer nettsider, kan du se paa flere ting. **Domenet** gir en pekepinn: .no, .org, .edu og .gov er generelt mer paalitelige enn tilfeldig .com-adresser. **Designet** sier noe -- er det profesjonelt eller amatoermessig? **Kontaktinformasjon** bor vaere tilgjengelig -- kan du finne ut hvem som staar bak? Og er **paastander dokumentert med kilder**?`,
    },
    {
      id: 'samfunnskunnskap-7-5-n-section3',
      type: 'text',
      content: `## Faktasjekk -- slik avslorer du usannheter

**Faktasjekk** er systematisk verifisering av om paastander stemmer med virkeligheten. Her er en oppskrift du kan folge.

**Steg 1: Identifiser paastanden.** Hva er det konkrete som hevdes? Skille fakta fra mening -- "regjeringen har oeekt budsjettet" er en faktagjennomgang, "regjeringen bruker for mye penger" er en mening.

**Steg 2: Finn primaerkilden.** Hvor stammer paastanden opprinnelig fra? Gaa til originalkilden i stedet for aa stole paa andres gjengivelse.

**Steg 3: Sjekk flere kilder.** Bekreftes paastanden av andre uavhengige kilder? Hvis bare en kilde rapporterer noe som burde vaere stor nyhet, bor du vaere skeptisk.

**Steg 4: Bruk faktasjekktjenester.** Faktisk.no er Norges faktasjekktjeneste. Internasjonalt finnes Snopes.com og Full Fact i Storbritannia. Disse tjenestene gjor grundig arbeid med aa verifisere paastander.

**Steg 5: Vaer kritisk til bilder og video.** Bruk bildesoek paa Google Images for aa sjekke om et bilde er brukt i andre sammenhenger. Spoer deg: er bildet manipulert? Er det tatt ut av kontekst?

Det finnes ogsaa tydelige **varselstegn** paa upaaalitelig informasjon. Sensasjonelle overskrifter med ord som "sjokkerende" eller "du vil ikke tro" bor faa alarmklokkene til aa ringe. Ukjent eller anonym avsender, manglende kontaktinformasjon, fravaer av kilder og dokumentasjon, ensidig fremstilling, mange skrivefeil, og sterke foelelsesladede formuleringer er alle roede flagg. Hvis noe virker for godt eller for ille til aa vaere sant, er det ofte nettopp det.`,
    },
    {
      id: 'samfunnskunnskap-7-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv om kildetyper og faktasjekk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-5-n-quiz2-q0',
            task: 'Hvilken kildetype er oftest mest troverdig?',
            options: [
              { id: 'a', text: 'Tertiaerkilder som Wikipedia', isCorrect: false },
              { id: 'b', text: 'Sekundaerkilder som laereboeker', isCorrect: false },
              { id: 'c', text: 'Primaerkilder som originaldokumenter og foerstehands vitnesbyrd', isCorrect: true },
              { id: 'd', text: 'Alle kilder er like troverdige', isCorrect: false },
            ],
            solution: 'Primaerkilder -- foerstehands vitnesbyrd, originaldokumenter og forskningsrapporter -- er oftest mest troverdige fordi de ikke har gaatt gjennom andres tolkning. Sekundaer- og tertiaerkilder bygger paa primaerkilder.',
          },
          {
            id: 'samfunnskunnskap-7-5-n-quiz2-q1',
            task: 'Hva er Faktisk.no?',
            options: [
              { id: 'a', text: 'En nettavis', isCorrect: false },
              { id: 'b', text: 'Norges faktasjekktjeneste som verifiserer paastander', isCorrect: true },
              { id: 'c', text: 'En soekemotor', isCorrect: false },
              { id: 'd', text: 'En statlig informasjonstjeneste', isCorrect: false },
            ],
            solution: 'Faktisk.no er Norges faktasjekktjeneste som systematisk verifiserer om paastander i offentlig debatt stemmer med virkeligheten. Internasjonalt finnes lignende tjenester som Snopes.com og Full Fact.',
          },
          {
            id: 'samfunnskunnskap-7-5-n-quiz2-q2',
            task: 'Hvilket av foelgende er et varselstegn paa upaaalitelig informasjon?',
            options: [
              { id: 'a', text: 'Saklig spraak og dokumenterte paastander', isCorrect: false },
              { id: 'b', text: 'Informasjon fra en anerkjent forsker', isCorrect: false },
              { id: 'c', text: 'Sensasjonelle overskrifter, ukjent avsender og manglende kilder', isCorrect: true },
              { id: 'd', text: 'Balansert fremstilling med flere perspektiver', isCorrect: false },
            ],
            solution: 'Varselstegn paa upaaalitelig informasjon inkluderer sensasjonelle overskrifter (clickbait), ukjent eller anonym avsender, manglende kilder og dokumentasjon, ensidig fremstilling og sterke foelelsesladede formuleringer.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-5-n-section4',
      type: 'text',
      content: `## Laterallesing -- profesjonellenes hemmelighet

La oss avslutte med en teknikk som profesjonelle faktasjekkere bruker, og som du ogsaa bor laere deg: **laterallesing**.

De fleste av oss leser en nettside ved aa studere den grundig innenfra. Vi ser paa designet, leser innholdet, vurderer argumentene. Dette kalles vertikal lesing. Men profesjonelle faktasjekkere gjor noe annet -- og det er mye mer effektivt.

I stedet for aa fordype deg i selve artikkelen, stopper du. Du aapner en ny fane i nettleseren. Du soeker etter informasjon OM kilden -- hva sier andre om denne nettsiden, denne organisasjonen, denne forfatteren? Er de troverdige? Har de en agenda? Har de blitt kritisert?

Forst etter at du har faat et bilde av kildens troverdighet utenfra, gaar du tilbake og vurderer selve innholdet.

Hvorfor fungerer dette saa bra? For det forste sparer du tid -- du trenger ikke lese hele artikkelen for aa oppdage at kilden er upaaalitelig. For det andre unngaar du aa bli overbevist av overtalende innhold. Et godt skrevet argument kan vaere svart overbevisende, selv om det bygger paa feil. Og for det tredje faar du en ekstern vurdering av kilden, i stedet for bare kildens egen selvpresentasjon.

Konkrete tips: soek paa organisasjonens navn pluss "troverdig" eller "kritikk". Sjekk Wikipedia om organisasjonen. Se etter uavhengige vurderinger. Og husk: det viktigste er ikke hva kilden sier om seg selv, men hva andre sier om kilden.`,
    },
    {
      id: 'samfunnskunnskap-7-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv om laterallesing:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-5-n-quiz3-q0',
            task: 'Hva er laterallesing?',
            options: [
              { id: 'a', text: 'Aa lese en artikkel svart grundig fra start til slutt', isCorrect: false },
              { id: 'b', text: 'Aa aapne nye faner og soeke informasjon OM kilden i stedet for bare aa lese innholdet', isCorrect: true },
              { id: 'c', text: 'Aa lese flere artikler om samme tema samtidig', isCorrect: false },
              { id: 'd', text: 'Aa skumlese overskrifter uten aa lese innholdet', isCorrect: false },
            ],
            solution: 'Laterallesing betyr at du i stedet for aa lese kilden grundig innenfra (vertikal lesing), aapner nye faner og soeker informasjon OM kilden. Du sjekker hva andre sier om troverdigheten for du vurderer innholdet.',
          },
          {
            id: 'samfunnskunnskap-7-5-n-quiz3-q1',
            task: 'Hvorfor er laterallesing mer effektivt enn aa bare lese artikkelen grundig?',
            options: [
              { id: 'a', text: 'Fordi det gaar raskere', isCorrect: false },
              { id: 'b', text: 'Fordi du unngaar aa bli overbevist av overtalende innhold og faar en ekstern vurdering av kilden', isCorrect: true },
              { id: 'c', text: 'Fordi det er enklere', isCorrect: false },
              { id: 'd', text: 'Fordi du slipper aa tenke selv', isCorrect: false },
            ],
            solution: 'Laterallesing er effektivt fordi du unngaar aa bli overbevist av godt skrevne, men feilaktige argumenter. Du sparer tid, faar en ekstern vurdering av kilden, og bruker samme metode som profesjonelle faktasjekkere.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert verktoyene du trenger for aa navigere trygt i informasjonsjungelen.

- **Kildekritiske prinsipper**: Still alltid fire spoersmaal -- hvem staar bak, hva er formaalet, naar ble det publisert, og hvordan er det fremstilt.
- **Kildetyper**: Primaerkilder (foerstehands vitnesbyrd) er oftest mest troverdige, sekundaerkilder (fortolkninger) kan vaere farget av tolkning, og tertiaerkilder (Wikipedia, leksikon) er gode for oversikt.
- **Faktasjekk**: Identifiser paastanden, finn primaerkilden, sjekk flere kilder, bruk faktasjekktjenester som Faktisk.no, og vaer kritisk til bilder og video.
- **Varselstegn**: Sensasjonelle overskrifter, ukjent avsender, manglende kilder og sterke foelelsesladede formuleringer bor faa deg til aa stoppe opp.
- **Laterallesing**: Soek informasjon om kilden i stedet for bare aa lese innholdet -- det er den mest effektive metoden for rask kildekritikk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.6 NARRATIV: Falske nyheter og desinformasjon
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_7_6_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-7-6-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.6',
  title: 'Falske nyheter og desinformasjon',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om hva desinformasjon er, hvordan den spres, og hva vi kan gjore for aa motvirke den.',
  estimatedMinutes: 25,
  competenceGoals: [
    'skille mellom ulike typer feilinformasjon',
    'forstaa hvordan desinformasjon spres',
  ],
  linkedChapterId: 'samfunnskunnskap-7-6',
  content: [
    {
      id: 'samfunnskunnskap-7-6-n-intro',
      type: 'text',
      content: `## Naar lognen sprer seg raskere enn sannheten

Forestill deg at du ser en nyhet som sier at en kjent politiker har blitt tatt for svindel. Du blir opproert. Du deler den med vennene dine. De deler den videre. Paa noen timer har tusenvis av mennesker sett den. Men saa viser det seg at nyheten var helt oppfunnet -- publisert paa en nettside som ser ut som en ekte nyhetsside, men som er laget for aa spre falsk informasjon.

Dette er ikke et tenkt scenario. Det skjer hver eneste dag. Spredning av falsk og villedende informasjon er blitt et alvorlig samfunnsproblem i den digitale tidsalderen. Begrepet "falske nyheter" har blitt vanlig, men det er viktig aa forstaa at ikke all feilinformasjon er lik.

Konsekvensene er reelle og alvorlige: feilinformasjon undergraver tilliten til medier og institusjoner, pavirker valg og politiske prosesser, kan fore til skadelige handlinger, og forverrer polariseringen i samfunnet.`,
    },
    {
      id: 'samfunnskunnskap-7-6-n-section1',
      type: 'text',
      content: `## Feilinformasjon, desinformasjon og propaganda -- hva er forskjellen?

Det finnes flere typer falsk informasjon, og det er viktig aa skille mellom dem.

**Feilinformasjon** (paa engelsk: misinformation) er falsk informasjon som spres uten intensjon om aa villede. Den som deler den, tror gjerne det er sant. Det kan skyldes missforstaelse eller uvitenhet. Tenk paa bestemoren din som deler et rykte paa Facebook fordi hun oppriktig tror det stemmer. Hun vil ikke lure noen -- hun vet bare ikke bedre.

**Desinformasjon** (disinformation) er noe helt annet. Her snakker vi om falsk informasjon som bevisst spres for aa villede. Den har til hensikt aa skade eller manipulere. Det kan vaere statlig propaganda, malrettede loegner i en valgkamp, eller systematiske kampanjer for aa undergrave tilliten til institusjoner. Forskjellen fra feilinformasjon ligger altsaa i intensjonen.

**Propaganda** er ensidig informasjon som brukes for aa paavirke holdninger. Den kan faktisk vaere sann, men den er alltid partisk -- den viser bare den ene siden av saken. Propaganda har vaert brukt av stater og politiske bevegelser gjennom hele historien.

**Konspirasjonsteorier** fortjener ogsaa oppmerksomhet. De er forklaringer basert paa hemmelige sammensvergelser -- ideen om at mektige krefter i det skjulte kontrollerer det som skjer. De er ofte immune mot motbevis: hvis du prover aa motbevise dem, sier tilhengerne bare at det beviser at sammensvergelsen er enda storre. Konspirasjonsteorier kan ha farlige konsekvenser naar folk handler paa bakgrunn av dem.`,
    },
    {
      id: 'samfunnskunnskap-7-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv om begreper knyttet til falsk informasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-6-n-quiz1-q0',
            task: 'Hva er hovedforskjellen mellom feilinformasjon og desinformasjon?',
            options: [
              { id: 'a', text: 'Feilinformasjon spres paa nett, desinformasjon i aviser', isCorrect: false },
              { id: 'b', text: 'Feilinformasjon er litt feil, desinformasjon er helt feil', isCorrect: false },
              { id: 'c', text: 'Feilinformasjon spres uten intensjon om aa villede, desinformasjon spres bevisst for aa manipulere', isCorrect: true },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Den avgjoerende forskjellen ligger i intensjonen. Feilinformasjon spres av folk som tror det er sant (uten ond hensikt), mens desinformasjon spres bevisst for aa villede og manipulere.',
          },
          {
            id: 'samfunnskunnskap-7-6-n-quiz1-q1',
            task: 'Hva kjennetegner konspirasjonsteorier?',
            options: [
              { id: 'a', text: 'De er alltid basert paa vitenskapelig forskning', isCorrect: false },
              { id: 'b', text: 'De er forklaringer basert paa hemmelige sammensvergelser og er ofte immune mot motbevis', isCorrect: true },
              { id: 'c', text: 'De er alltid sanne men hemmeligholdt', isCorrect: false },
              { id: 'd', text: 'De spres bare av myndighetene', isCorrect: false },
            ],
            solution: 'Konspirasjonsteorier er forklaringer basert paa ideen om hemmelige sammensvergelser. De er ofte immune mot motbevis -- forsook paa aa motbevise dem tolkes som bevis paa at sammensvergelsen er enda stoerre.',
          },
          {
            id: 'samfunnskunnskap-7-6-n-quiz1-q2',
            task: 'Hva kjennetegner propaganda?',
            options: [
              { id: 'a', text: 'Den er alltid usann', isCorrect: false },
              { id: 'b', text: 'Den er ensidig informasjon ment for aa paavirke holdninger, og kan vaere sann men partisk', isCorrect: true },
              { id: 'c', text: 'Den brukes bare i krig', isCorrect: false },
              { id: 'd', text: 'Den spres bare gjennom sosiale medier', isCorrect: false },
            ],
            solution: 'Propaganda er ensidig informasjon som bevisst brukes for aa paavirke holdninger. Den kan faktisk vaere sann, men er alltid partisk -- den viser bare den ene siden av saken.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-6-n-section2',
      type: 'text',
      content: `## Hvordan sprer desinformasjon seg?

Desinformasjon sprer seg gjennom en kombinasjon av teknologiske og menneskelige faktorer.

**Sosiale medier spiller en noekkelrolle.** Algoritmene prioriterer innhold som engasjerer -- og falske nyheter er ofte mer engasjerende enn ekte nyheter fordi de er mer sjokkerende og emosjonelle. Innholdet spres raskt uten noen form for kvalitetskontroll. Anonyme kontoer og botnett -- nettverk av automatiserte kontoer -- kan spre tusenvis av meldinger paa kort tid.

Men det handler ikke bare om teknologi. **Menneskelige faktorer** er minst like viktige. **Bekreftelsesbias** gjor at vi lettere tror paa informasjon som bekrefter det vi allerede mener. Vaar kritiske sans svekkes naar vi moeter meninger vi liker. **Sosial spredning** betyr at vi stoler paa det som deles av venner og familie -- hvis tante Gerd deler en artikkel, tenker vi at den maa vaere troverdig. Og **foelelsesappell** er et kraftig virkemiddel: frykt, sinne og opprorthet faar oss til aa reagere raskt og dele uten aa tenke oss om.

I tillegg finnes det **profesjonelle aktorer** som driver desinformasjon systematisk. Utenlandske paavirkningsoperasjoner fra ulike stater forsoeker aa paavirke andre lands politikk. Politiske kampanjer bruker desinformasjon som vaapen. OEkonomisk motiverte nettsteder lager falske nyheter for aa tjene penger paa klikk og annonser. Og trollfabrikker -- organiserte grupper som systematisk sprer desinformasjon og propaganda paa nett -- opererer i stor skala.`,
    },
    {
      id: 'samfunnskunnskap-7-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv om hvordan desinformasjon spres:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-6-n-quiz2-q0',
            task: 'Hvorfor sprer falske nyheter seg ofte raskere enn ekte nyheter paa sosiale medier?',
            options: [
              { id: 'a', text: 'Fordi de er bedre skrevet', isCorrect: false },
              { id: 'b', text: 'Fordi algoritmene prioriterer engasjerende innhold, og falske nyheter er ofte mer sjokkerende og emosjonelle', isCorrect: true },
              { id: 'c', text: 'Fordi folk foretrekker aa lese falske nyheter', isCorrect: false },
              { id: 'd', text: 'Fordi ekte nyheter er kjedelige', isCorrect: false },
            ],
            solution: 'Algoritmene prioriterer innhold som engasjerer, og falske nyheter er ofte mer sjokkerende og emosjonelle enn ekte nyheter. De spres ogsaa raskt uten kvalitetskontroll, og botnett kan forsterke spredningen.',
          },
          {
            id: 'samfunnskunnskap-7-6-n-quiz2-q1',
            task: 'Hva er bekreftelsesbias?',
            options: [
              { id: 'a', text: 'At man alltid tror det motparten sier', isCorrect: false },
              { id: 'b', text: 'At man lettere tror paa informasjon som bekrefter det man allerede mener', isCorrect: true },
              { id: 'c', text: 'At man aldri stoler paa sosiale medier', isCorrect: false },
              { id: 'd', text: 'At man bare leser nyheter fra én kilde', isCorrect: false },
            ],
            solution: 'Bekreftelsesbias er tendensen til aa lettere tro paa informasjon som bekrefter vaart eksisterende syn. Vaar kritiske sans svekkes naar vi moeter meninger vi liker, noe som gjor oss saarbare for feilinformasjon.',
          },
          {
            id: 'samfunnskunnskap-7-6-n-quiz2-q2',
            task: 'Hva er en trollfabrikk?',
            options: [
              { id: 'a', text: 'En fabrikk som lager trollfigurer', isCorrect: false },
              { id: 'b', text: 'En nettside som samler morsomme kommentarer', isCorrect: false },
              { id: 'c', text: 'En organisert gruppe som systematisk sprer desinformasjon og propaganda paa nett', isCorrect: true },
              { id: 'd', text: 'En plattform for anonyme debatter', isCorrect: false },
            ],
            solution: 'En trollfabrikk er en organisert gruppe som systematisk sprer desinformasjon og propaganda paa nett. De kan operere paa vegne av stater, politiske bevegelser eller andre aktorer, og bruker ofte falske kontoer.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-6-n-section3',
      type: 'text',
      content: `## Konsekvenser og eksempler

Desinformasjon har faat reelle konsekvenser paa mange omraader.

I forbindelse med **valg** har vi sett utenlandsk innblanding fra flere stater, falske nyheter om kandidater fra ulike hold, og systematisk manipulasjon av sosiale medier. Dette truer selve grunnlaget for demokratiet: at velgerne tar beslutninger basert paa riktig informasjon.

Under **Covid-19-pandemien** spredte falske kurer og behandlinger seg raskt. Feilinformasjon kom fra ulike kilder, og debatten om grensen mellom legitim skepsis og skadelig feilinformasjon var intens. Resultatet var at noen tok beslutninger om egen helse basert paa feil grunnlag.

I **vitenskapelige spoersmaal** ser vi selektiv bruk av forskningsresultater fra ulike interessegrupper, overdrivelser og forenklinger i begge retninger, og at det er viktig aa skille mellom vitenskapelige fakta og politiske vurderinger.

I **krig og konflikt** bruker alle parter propaganda. Falske bilder og videoer spres fra flere hold. Dehumanisering av motstandere gjor det lettere aa rettferdiggjore vold.

Et viktig poeng er at feilinformasjon spres paa tvers av det politiske spekteret. Alle grupper kan vaere saarbare for bekreftende feilinformasjon. Kritisk tenkning er viktig uansett politisk staaested.`,
    },
    {
      id: 'samfunnskunnskap-7-6-n-section4',
      type: 'text',
      content: `## Hvordan motvirke desinformasjon -- og beskytte demokratiet

Kampen mot desinformasjon foregaar paa flere nivaaer.

Paa **individnivaa** handler det om aa utvikle kritisk tenkning, sjekke kilder for du deler, bruke faktasjekktjenester, og vaere bevisst paa egne fordommer -- inkludert bekreftelsesbias. Hver gang du stopper og tenker for du deler, gjor du en liten innsats for demokratiet.

Paa **medie- og plattformnivaa** arbeides det med faktasjekk og merking av tvilsomt innhold, innholdsmoderering, transparens om algoritmer, og samarbeid med forskere.

Paa **myndighetsnivaa** satses det paa digital mediekompetanse i skolen, stoette til kvalitetsjournalistikk, regulering av plattformer, og tiltak for aa bekjempe utenlandsk paavirkning.

En saerlig lovende strategi er **"prebunking"** -- aa forberede folk paa desinformasjonsteknikker for de eksponeres for dem. I stedet for aa rette feilinformasjon i etterkant (som ofte er for sent), bygger man immunitet mot manipulasjon ved aa laere folk aa gjenkjenne taktikkene. Forskning viser at dette er mer effektivt enn tradisjonell faktasjekk.

Men alt maa balanseres. Vi maa bekjempe desinformasjon uten aa innfore sensur. Vi maa beskytte ytringsfriheten. Vi maa styrke tillit gjennom aapenhet og transparens. Og vi maa anerkjenne kompleksiteten -- det finnes ingen enkle losninger. Demokratiets beste forsvar er fortsatt fri presse, uavhengig journalistikk, kritiske borgere med mediekompetanse, og institusjoner som holder stand.`,
    },
    {
      id: 'samfunnskunnskap-7-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv om mottiltak mot desinformasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-6-n-quiz3-q0',
            task: 'Hva er "prebunking"?',
            options: [
              { id: 'a', text: 'Aa rette feilinformasjon etter at den har spredd seg', isCorrect: false },
              { id: 'b', text: 'Aa forberede folk paa desinformasjonsteknikker foer de eksponeres for dem', isCorrect: true },
              { id: 'c', text: 'Aa blokkere all falsk informasjon paa internett', isCorrect: false },
              { id: 'd', text: 'Aa straffe de som sprer falske nyheter', isCorrect: false },
            ],
            solution: 'Prebunking handler om aa bygge immunitet mot desinformasjon ved aa laere folk aa gjenkjenne manipulasjonsteknikker foer de eksponeres for dem. Forskning viser at dette er mer effektivt enn aa rette feilinformasjon i etterkant.',
          },
          {
            id: 'samfunnskunnskap-7-6-n-quiz3-q1',
            task: 'Hva kan du som individ gjore for aa motvirke spredning av desinformasjon?',
            options: [
              { id: 'a', text: 'Slutte aa lese nyheter helt', isCorrect: false },
              { id: 'b', text: 'Bare stole paa det vennene dine deler', isCorrect: false },
              { id: 'c', text: 'Utvikle kritisk tenkning, sjekke kilder foer du deler, og vaere bevisst paa egne fordommer', isCorrect: true },
              { id: 'd', text: 'Bare lese utenlandske medier', isCorrect: false },
            ],
            solution: 'Som individ kan du utvikle kritisk tenkning, sjekke kilder foer du deler, bruke faktasjekktjenester som Faktisk.no, og vaere bevisst paa egne fordommer som bekreftelsesbias.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket truslene fra falsk informasjon og hva vi kan gjore med dem.

- **Begreper**: Feilinformasjon spres utilsiktet, desinformasjon spres bevisst for aa villede, og propaganda er ensidig informasjon ment for aa paavirke holdninger.
- **Spredning**: Algoritmer, bekreftelsesbias, foelelsesappell og profesjonelle aktorer som trollfabrikker bidrar til rask spredning av falsk informasjon.
- **Konsekvenser**: Desinformasjon undergraver tillit til institusjoner, pavirker valg, kan fore til skadelige handlinger og forverrer polarisering i samfunnet.
- **Mottiltak**: Kritisk tenkning, faktasjekk, mediekompetanse i skolen og prebunking er effektive strategier paa ulike nivaaer.
- **Demokratiets forsvar**: Balansen mellom aa bekjempe desinformasjon og bevare ytringsfriheten krever fri presse, kritiske borgere og sterke institusjoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.7 NARRATIV: Personvern i den digitale tidsalder
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_7_7_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-7-7-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.7',
  title: 'Personvern i den digitale tidsalder',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om personvern, digitale spor, GDPR og utfordringene med overvakning i en digital verden.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forstaa betydningen av personvern',
    'kjenne til personvernlovgivning og rettigheter',
  ],
  linkedChapterId: 'samfunnskunnskap-7-7',
  content: [
    {
      id: 'samfunnskunnskap-7-7-n-intro',
      type: 'text',
      content: `## Du er produktet

Har du noen gang lurt paa hvorfor Facebook, Instagram og Google er gratis? Det finnes et gammelt ordtak i tech-bransjen: "Hvis du ikke betaler for produktet, er du produktet." Og det er mer sant enn de fleste tror.

**Personvern** handler om retten til aa kontrollere informasjon om deg selv. I den digitale tidsalderen samles det inn enorme mengder data om oss -- ofte uten at vi er klar over det. Hvert soek du gjor paa Google, hvert bilde du liker paa Instagram, hvert sted du gaar med telefonen i lomma -- alt registreres, lagres og analyseres.

Hvorfor er dette viktig? Fordi personvern beskytter individets autonomi og verdighet. Det gir deg kontroll over eget liv. Det forhindrer misbruk av informasjon. Og -- kanskje mest overraskende -- det er en forutsetning for demokrati og ytringsfrihet. Tenk over det: hvis du vet at noen overvaaker alt du gjor og sier, vil du da vaage aa kritisere makthaverne? Vil du toerre aa oppsoke kontroversielle nettsider? Personvern og ytringsfrihet haenger uloeselig sammen.`,
    },
    {
      id: 'samfunnskunnskap-7-7-n-section1',
      type: 'text',
      content: `## Digitale spor -- det usynlige fotavtrykket

Vi legger igjen **digitale spor** i alt vi gjor paa nett, og de fleste er ikke klar over omfanget.

**Aktive spor** er det du bevisst legger igjen: poster i sosiale medier, e-poster og meldinger, soek paa Google, kjop paa nett. Dette er informasjon du selv produserer, og du har en viss kontroll over den -- selv om du kanskje ikke tenker over at den lagres permanent.

**Passive spor** er mer uhyggelig. Det er data som samles inn uten at du aktivt gjor noe. Telefonen din registrerer lokasjonsdata -- hvor du er, hele tiden. Cookies paa nettsider folger deg fra side til side. IP-adressen din kan spores. Noen nettsider registrerer til og med hvordan du beveger musen -- noe som kan brukes til aa identifisere deg.

**Metadata** er data om data. Det er ikke hva du sa i samtalen, men naar og hvor du kommuniserte, hvem du kommuniserte med, hvor lenge samtalen varte, og bevegelsesmonstrene dine. Forskning har vist at metadata alene kan avsloere enormt mye om et menneske -- hvem du kjenner, hva du er interessert i, til og med helseinformasjon.

Og hvem samler all denne dataen? Store teknologiselskaper som Google, Meta og Amazon er de storste aktoorene. Annonsoerer og databrokers kjoper og selger data. Apper og nettsider samler data gjennom vilkaar de fleste aldri leser. Og staten og myndighetene samler data for ulike formaal -- fra skatteinnkreving til kriminalitetsbekjempelse.`,
    },
    {
      id: 'samfunnskunnskap-7-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv om personvern og digitale spor:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-7-n-quiz1-q0',
            task: 'Hvorfor er personvern viktig for demokratiet?',
            options: [
              { id: 'a', text: 'Fordi det gjor internett raskere', isCorrect: false },
              { id: 'b', text: 'Fordi folk som overvaakes kan sensurere seg selv og ikke toerre aa kritisere makthavere', isCorrect: true },
              { id: 'c', text: 'Fordi det beskytter mot datavirus', isCorrect: false },
              { id: 'd', text: 'Fordi det gjor sosiale medier tryggere', isCorrect: false },
            ],
            solution: 'Personvern er en forutsetning for ytringsfrihet og demokrati. Hvis folk vet de overvaakes, sensurerer de seg selv (chilling effect). De vaager ikke aa kritisere makthaverne eller utforske kontroversielle temaer.',
          },
          {
            id: 'samfunnskunnskap-7-7-n-quiz1-q1',
            task: 'Hva er forskjellen mellom aktive og passive digitale spor?',
            options: [
              { id: 'a', text: 'Aktive spor er ulovlige, passive er lovlige', isCorrect: false },
              { id: 'b', text: 'Aktive spor legges bevisst igjen av deg, passive samles uten at du aktivt gjor noe', isCorrect: true },
              { id: 'c', text: 'Aktive spor er paa sosiale medier, passive er paa e-post', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Aktive spor er informasjon du bevisst produserer (poster, soek, kjop). Passive spor samles automatisk uten din aktive medvirkning (lokasjonsdata, cookies, IP-adresser, musebevegelser).',
          },
          {
            id: 'samfunnskunnskap-7-7-n-quiz1-q2',
            task: 'Hva er metadata?',
            options: [
              { id: 'a', text: 'Innholdet i meldingene dine', isCorrect: false },
              { id: 'b', text: 'Data om data -- som naar, hvor og med hvem du kommuniserte', isCorrect: true },
              { id: 'c', text: 'Passord og personlig informasjon', isCorrect: false },
              { id: 'd', text: 'Bilder du har tatt med telefonen', isCorrect: false },
            ],
            solution: 'Metadata er data om data -- ikke hva du sa, men naar og hvor du kommuniserte, hvem du kommuniserte med, og hvor lenge samtalen varte. Metadata alene kan avsloere enormt mye om en persons liv.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-7-n-section2',
      type: 'text',
      content: `## Overvakning -- kommersiell og statlig

Overvakning kommer i to former, og begge reiser alvorlige personvernspoersmaal.

**Kommersiell overvakning** er det tech-selskapene driver med. De samler data for aa maalrette reklame, forbedre tjenestene sine, predikere atferden din, og selge innsikt til tredjeparter. Begrepet **overvaakningskapitalisme** beskriver forretningsmodeller som er basert paa aa hoeste og selge persondata. Du er ikke bare en bruker -- du er en datakilde som gjores til penger.

**Statlig overvakning** drives av myndigheter for aa forebygge terrorisme og kriminalitet, kontrollere grenser, og innkreve skatt. I demokratiske land er dette underlagt lover og regler. Men i autoritaere regimer brukes overvakning til aa undertrykke opposisjon -- til aa holde folk nede.

Utfordringene er mange. Hvor gaar grensen mellom sikkerhet og frihet? Vi vil at politiet skal fange terrorister, men vi vil ikke at de skal lese alle e-postene vaare. Hvem kontrollerer kontrollorene? Overvaakningsdata kan misbrukes -- bade av stater og selskaper. Og saa er det den allerede nevnte **"chilling effect"** -- naar folk vet at de overvaakes, sensurerer de seg selv. Det er en trussel mot ytringsfrihet og demokrati.`,
    },
    {
      id: 'samfunnskunnskap-7-7-n-section3',
      type: 'text',
      content: `## GDPR -- dine rettigheter i den digitale verden

Heldigvis har vi lover som beskytter personvernet. Den viktigste er **GDPR** -- General Data Protection Regulation -- EUs personvernforordning fra 2018, som ogsaa gjelder i Norge.

GDPR bygger paa noen grunnprinsipper: lovlighet og rettferdighet i behandling av data, formaalsbegrensning (data kan bare brukes til det den ble samlet inn for), dataminimering (ikke samle inn mer enn nodvendig), riktighet (data skal vaere korrekt), lagringsbegrensning (ikke lagre data lenger enn nodvendig), og integritet og konfidensialitet (data skal beskyttes mot uautorisert tilgang).

Som borger gir GDPR deg en rekke rettigheter. Du har **rett til informasjon** om hvordan dine data behandles. Du har **rett til innsyn** -- du kan be om aa faa se alle data et selskap har om deg. Du har **rett til retting** av feilaktige opplysninger. Du har **rett til sletting** -- den saakalte "retten til aa bli glemt" -- som betyr at du kan kreve at data om deg slettes. Du har **rett til dataportabilitet** -- du kan ta med deg dataene dine fra en tjeneste til en annen. Og du har **rett til aa protestere** mot visse typer databehandling.

I Norge er det **Datatilsynet** som er tilsynsmyndighet for personvern. De kan gi boeter og paalegg til selskaper som bryter personvernlovgivningen, og de veileder og informerer bade borgere og virksomheter.`,
    },
    {
      id: 'samfunnskunnskap-7-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv om overvakning og personvernlovgivning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-7-n-quiz2-q0',
            task: 'Hva er overvaakningskapitalisme?',
            options: [
              { id: 'a', text: 'Statlig overvakning av naeringslivet', isCorrect: false },
              { id: 'b', text: 'Forretningsmodeller basert paa aa hoeste og selge persondata', isCorrect: true },
              { id: 'c', text: 'Selskapers overvakning av sine ansatte', isCorrect: false },
              { id: 'd', text: 'Bruk av overvaakningskameraer i butikker', isCorrect: false },
            ],
            solution: 'Overvaakningskapitalisme er et begrep som beskriver forretningsmodeller der selskapenes inntekter er basert paa aa samle, analysere og selge persondata. Tech-giganter som Google og Meta bygger sin oekonomi paa dette.',
          },
          {
            id: 'samfunnskunnskap-7-7-n-quiz2-q1',
            task: 'Hva er "retten til aa bli glemt" under GDPR?',
            options: [
              { id: 'a', text: 'Retten til aa slette alt paa internett', isCorrect: false },
              { id: 'b', text: 'Retten til aa kreve at et selskap sletter personopplysninger om deg', isCorrect: true },
              { id: 'c', text: 'Retten til aa vaere anonym paa nettet', isCorrect: false },
              { id: 'd', text: 'Retten til aa glemme passordene sine', isCorrect: false },
            ],
            solution: 'Retten til aa bli glemt er en GDPR-rettighet som gir deg mulighet til aa kreve at selskaper sletter personopplysninger om deg naar det ikke lenger er nodvendig aa beholde dem.',
          },
          {
            id: 'samfunnskunnskap-7-7-n-quiz2-q2',
            task: 'Hva er Datatilsynets rolle i Norge?',
            options: [
              { id: 'a', text: 'Aa samle data om norske borgere', isCorrect: false },
              { id: 'b', text: 'Aa vaere tilsynsmyndighet for personvern, med makt til aa gi boeter og paalegg', isCorrect: true },
              { id: 'c', text: 'Aa utvikle nye apper', isCorrect: false },
              { id: 'd', text: 'Aa overvaake sosiale medier', isCorrect: false },
            ],
            solution: 'Datatilsynet er Norges tilsynsmyndighet for personvern. De overvaaker at personvernlovgivningen folges, kan gi boeter og paalegg til selskaper som bryter reglene, og veileder borgere og virksomheter.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-7-n-section4',
      type: 'text',
      content: `## Personvernutfordringer og beskyttelse

Personvernet staar overfor stadig nye utfordringer i takt med teknologisk utvikling.

**Ansiktsgjenkjenning** kan identifisere personer fra bilder og brukes av politi og i overvakning. I Kina brukes det i omfattende grad for kontroll av befolkningen, mens Europa har innfort strenge begrensninger.

**Sosiale medier** representerer et paradoks: vi gir bort data frivillig, deler bilder av andre uten samtykke, og skaper digitale fotavtrykk for barn lenge for de kan samtykke selv. Psykologisk profilering basert paa sosiale medier-data kan brukes til aa manipulere oss.

**Helsedata** er saerlig sensitive. Helseapper og treningsutstyr samler informasjon om kroppen vaar, og forsikringsselskaper er svart interesserte i slike data.

**Smarte hjem** med IoT-enheter samler data kontinuerlig. Smarthoyttalere som lytter, termostater som registrerer naar du er hjemme, og kameraer som filmer -- hvem har egentlig tilgang til all denne informasjonen?

Saa hva kan du gjore for aa beskytte personvernet ditt? Paa det **tekniske** plan bor du bruke sterke passord og tofaktorautentisering, vurdere hvilke tillatelser apper faar, bruke VPN og privat nettlesing, begrense cookies, og kryptere kommunikasjon. Gjennom **bevisste valg** kan du lese personvernerklaerninger, tenke for du deler, vurdere om tjenesten er verdt dataene, og bruke alternative tjenester med bedre personvern. Du kan ogsaa bruke **rettighetene** dine: be om innsyn i data om deg, kreve sletting av unodvendige data, klage til Datatilsynet ved brudd, og stotte organisasjoner som kjemper for personvern. Og paa **samfunnsnivaa** kan du stotte sterkere personvernlovgivning, delta i debatten, og kreve transparens fra selskaper og myndigheter.`,
    },
    {
      id: 'samfunnskunnskap-7-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv om personvernutfordringer og beskyttelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-7-7-n-quiz3-q0',
            task: 'Hvorfor er ansiktsgjenkjenning en personvernutfordring?',
            options: [
              { id: 'a', text: 'Fordi den ikke fungerer ordentlig', isCorrect: false },
              { id: 'b', text: 'Fordi den kan identifisere og spore personer uten deres samtykke', isCorrect: true },
              { id: 'c', text: 'Fordi den er for dyr', isCorrect: false },
              { id: 'd', text: 'Fordi den bare brukes i Kina', isCorrect: false },
            ],
            solution: 'Ansiktsgjenkjenning kan identifisere og spore personer fra bilder uten deres samtykke. I Kina brukes det for omfattende kontroll av befolkningen, mens Europa har innfort strenge begrensninger for aa beskytte personvernet.',
          },
          {
            id: 'samfunnskunnskap-7-7-n-quiz3-q1',
            task: 'Hva er det viktigste du kan gjore teknisk for aa beskytte personvernet ditt?',
            options: [
              { id: 'a', text: 'Slutte aa bruke internett', isCorrect: false },
              { id: 'b', text: 'Bruke sterke passord, tofaktorautentisering og begrense tillatelser til apper', isCorrect: true },
              { id: 'c', text: 'Bare bruke iPhone', isCorrect: false },
              { id: 'd', text: 'Ha flere kontoer paa sosiale medier', isCorrect: false },
            ],
            solution: 'Viktige tekniske tiltak inkluderer sterke passord og tofaktorautentisering, vurdere hvilke tillatelser apper faar, bruke VPN og privat nettlesing, begrense cookies, og kryptere kommunikasjon.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-7-7-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi dykket ned i personvernets verden -- et tema som blir stadig viktigere.

- **Personvern** er retten til aa kontrollere informasjon om seg selv, og er viktig for autonomi, verdighet og demokrati.
- **Digitale spor**: Vi legger igjen aktive spor (poster, soek, kjop), passive spor (lokasjonsdata, cookies) og metadata (naar, hvor og med hvem vi kommuniserer) i alt vi gjor digitalt.
- **Overvakning**: Bade kommersiell overvaakningskapitalisme (tech-selskaper som selger data) og statlig overvakning (sikkerhet vs. frihet) reiser alvorlige personvernspoersmaal.
- **GDPR** gir deg rettigheter som innsyn, retting, sletting ("retten til aa bli glemt") og dataportabilitet, haandhevet av Datatilsynet i Norge.
- **Beskyttelse**: Du kan beskytte deg gjennom tekniske tiltak (sterke passord, VPN), bevisste valg (tenke for du deler), og ved aa bruke rettighetene dine under GDPR.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLET EKSPORT FOR DEL 7
// ============================================================================

export const SAMFUNNSKUNNSKAP_NARRATIV_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSKUNNSKAP_7_1_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_7_2_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_7_3_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_7_4_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_7_5_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_7_6_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_7_7_NARRATIV,
];
