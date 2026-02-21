/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 11.1 NARRATIV: Die Weimarer Republik und der Aufstieg des Nationalsozialismus
// ============================================================================

export const CHAPTER_TYSK_3_11_1_NARRATIV: TextbookChapter = {
  id: 'tysk-3-11-1-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '11.1',
  title: 'Die Weimarer Republik und der Aufstieg des Nationalsozialismus',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om Tysklands forste demokrati, de gylne tjuearene, verdenskrisen og veien mot diktatur.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  linkedChapterId: 'tysk-3-11-1',
  content: [
    {
      id: 'tysk-3-11-1-n-intro',
      type: 'text',
      content: `## Et demokrati pa kanten av stupet

Forestill deg dette: Det er november 1918. Keiser Wilhelm II har nettopp abdisert og flyktet til Nederland. Tyskland har tapt forste verdenskrig, millioner av soldater er dode, og befolkningen er utmattet og sulten. Midt i dette kaoset skal et helt nytt demokrati bygges fra grunnen av. Det er som a bygge et hus i en orkan.

I byen Weimar, langt fra den urolige hovedstaden Berlin, samles politikere for a skrive Tysklands forste demokratiske grunnlov, **die Weimarer Verfassung**. Den nye staten far navnet **die Weimarer Republik** og blir Tysklands aller forste demokrati. For forste gang far kvinner stemmerett, **das Frauenwahlrecht**, innfort i 1919. Det er et radikalt brudd med fortiden.

Men vi ma sporre oss: Kan et demokrati overleve nar det foedes midt i et nederlag, omgitt av fiender pa alle sider? Historien om Weimarrepublikken er historien om et demokrati som prover a sta oppreist i storm etter storm, helt til det til slutt faller.`,
    },
    {
      id: 'tysk-3-11-1-n-section1',
      type: 'text',
      content: `## Kriseår og hyperinflasjon

De forste arene til Weimarrepublikken var preget av en krise etter den andre. Versaillestraktaten paforte Tyskland enorme **Reparationszahlungen**, krigserstatningsbetalinger som tynget okonomien. Da Tyskland ikke klarte a betale, okkuperte franske og belgiske tropper Ruhrområdet, Tysklands industrielle hjerte, i 1923.

Svaret fra den tyske regjeringen var a trykke mer penger. Resultatet ble **die Hyperinflation**, en okonomisk katastrofe uten sidestykke. Tenk deg at en brødloff som kostet 1 mark i 1918, plutselig kostet 200 milliarder mark i november 1923. Folk brukte trillebarer for a frakte pengesedlene sine til bakeren. Sparepengene til en hel generasjon ble verdilose over natten. Denne erfaringen brant seg inn i den tyske folkesjelen og forklarer mye av den tyske frykten for inflasjon den dag i dag.

Samtidig praget politisk uro perioden. Det var kuppforsok bade fra hoyre og venstre, blant annet Adolf Hitlers mislykkede olgjerdeputsch, **der Putsch**, i Munchen i 1923. **Der Reichstag**, det tyske parlamentet, var splittet mellom dusinvis av partier. Det var som om alle kriget mot alle.`,
    },
    {
      id: 'tysk-3-11-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Weimarrepublikken og krisearene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-1-n-quiz1-q0',
            task: 'Hva var die Weimarer Republik?',
            options: [
              { id: 'a', text: 'Et rike styrt av keiser Wilhelm II', isCorrect: false },
              { id: 'b', text: 'Tysklands forste demokrati, grunnlagt i 1919', isCorrect: true },
              { id: 'c', text: 'En by i sor-Tyskland der krigen tok slutt', isCorrect: false },
              { id: 'd', text: 'En allianse mellom Tyskland og Osterrike', isCorrect: false },
            ],
            solution: 'Die Weimarer Republik var Tysklands forste demokrati, grunnlagt etter keiserens abdikasjon i 1918. Grunnloven ble vedtatt i byen Weimar i 1919.',
          },
          {
            id: 'tysk-3-11-1-n-quiz1-q1',
            task: 'Hva var die Hyperinflation i 1923?',
            options: [
              { id: 'a', text: 'En periode da prisene falt drastisk', isCorrect: false },
              { id: 'b', text: 'En politisk krise i parlamentet', isCorrect: false },
              { id: 'c', text: 'En militaer okkupasjon av Berlin', isCorrect: false },
              { id: 'd', text: 'Ekstremt hoy inflasjon der pengene mistet all verdi', isCorrect: true },
            ],
            solution: 'Die Hyperinflation i 1923 var en okonomisk katastrofe der pengene ble tilnaermet verdilose. En brodloff som kostet 1 mark i 1918 kostet 200 milliarder mark i november 1923.',
          },
          {
            id: 'tysk-3-11-1-n-quiz1-q2',
            task: 'Hva betyr "die Reparationszahlungen"?',
            options: [
              { id: 'a', text: 'Reparasjon av krigsskadde bygninger', isCorrect: false },
              { id: 'b', text: 'Krigserstatningsbetalinger palagt Tyskland etter forste verdenskrig', isCorrect: true },
              { id: 'c', text: 'Lonnsutbetalinger til tyske soldater', isCorrect: false },
              { id: 'd', text: 'Investeringer i tysk industri', isCorrect: false },
            ],
            solution: 'Die Reparationszahlungen var de enorme krigserstatningene Tyskland ble palagt a betale etter forste verdenskrig gjennom Versaillestraktaten. De tynget den tyske okonomien kraftig.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-1-n-section2',
      type: 'text',
      content: `## Die Goldenen Zwanziger - Kultur i blomstring

Sa skjedde noe overraskende. Midt i alt kaoset opplevde Tyskland en kulturell blomstringsperiode som er naermest uforklarlig. Perioden fra 1924 til 1929 kalles **die Goldenen Zwanziger**, de gylne tjuearene, og det er ikke uten grunn.

Berlin ble en av verdens mest spennende byer. Nattlivet blomstret, kabaretscenene serverte skarp politisk satire, og byen tiltrakk kunstnere fra hele verden. Innen film skapte Fritz Lang mesterverket *Metropolis* i 1927, og tysk ekspresjonistisk film, med klassikere som *Das Cabinet des Dr. Caligari* fra 1920, pavirket hele verdens filmkunst. Thomas Mann, Bertolt Brecht og Erich Maria Remarque skrev litteratur som fremdeles leses i dag. Remarques antikrigsroman *Im Westen nichts Neues* (Intet nytt fra Vestfronten) rystet en hel generasjon.

I arkitekturen revolusjonerte **Bauhaus**-skolen, grunnlagt av Walter Gropius i 1919, forholdet mellom kunst og handverk. Bauhaus-designet preger fremdeles mye av den moderne arkitekturen og designen vi ser rundt oss. Kvinner klipt haret kort, danset charleston og krevde **Gleichberechtigung**, likestilling. Det var en tid der alt syntes mulig.

Men bak glansen skjulte det seg en dyp sosial splittelse. Mens en elite feiret i Berlins nattklubber, levde millioner i fattigdom. Weimarrepublikken var, som en historiker har sagt, et paradoks: den skapte noen av det 20. arhundrets storste kulturelle prestasjoner, samtidig som den sto pa randen av stupet.`,
    },
    {
      id: 'tysk-3-11-1-n-section3',
      type: 'text',
      content: `## Verdenskrisen og demokratiets fall

Sa kom krakket. Den 24. oktober 1929 kollapset aksjemarkedet pa Wall Street i New York, og sjokkbolgene spredte seg over hele verden. Tyskland ble spesielt hardt rammet fordi den tyske okonomien var sterkt avhengig av amerikanske lan. **Die Weltwirtschaftskrise**, verdenskrisen, slo beina under det spirende demokratiet.

Arbeidsloshet, **die Arbeitslosigkeit**, steg til over seks millioner. Familier mistet alt de hadde. Folk sto i lange koer for a fa mat. I denne desperasjonen begynte flere og flere a lytte til ekstreme ropere pa begge sider av det politiske spekteret. Og den roperen som ropte hoyest av alle, var Adolf Hitler og hans parti NSDAP, **Nationalsozialistische Deutsche Arbeiterpartei**.

Hitlers propaganda appellerte til frykt, nasjonalisme og antisemittisme. Han lovte arbeid, broed pa bordet og et sterkt Tyskland. I 1932 fikk NSDAP 37 prosent av stemmene. Den 30. januar 1933 ble Hitler utnevnt til rikskansler, **Reichskanzler**. Det som fulgte, var en systematisk avvikling av demokratiet.`,
    },
    {
      id: 'tysk-3-11-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa de gylne tjuearene og kulturlivet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-1-n-quiz2-q0',
            task: 'Hva var "die Goldenen Zwanziger"?',
            options: [
              { id: 'a', text: 'En periode med krig og hungersnod i Tyskland pa 1920-tallet', isCorrect: false },
              { id: 'b', text: 'En politisk bevegelse som kjempet for demokrati', isCorrect: false },
              { id: 'c', text: 'En periode med kulturell blomstring og okonomisk oppgang fra 1924 til 1929', isCorrect: true },
              { id: 'd', text: 'Et kunstnerisk manifest signert av Bauhaus-grunnleggeren', isCorrect: false },
            ],
            solution: 'Die Goldenen Zwanziger (de gylne tjuearene) var perioden 1924-1929, preget av kulturell blomstring i Berlin, okonomisk oppgang, og modernisering innen film, kunst, arkitektur og litteratur.',
          },
          {
            id: 'tysk-3-11-1-n-quiz2-q1',
            task: 'Hvilken kunstretning revolusjonerte arkitektur og design i Weimarrepublikken?',
            options: [
              { id: 'a', text: 'Ekspresjonismen', isCorrect: false },
              { id: 'b', text: 'Bauhaus', isCorrect: true },
              { id: 'c', text: 'Kubismen', isCorrect: false },
              { id: 'd', text: 'Dadaismen', isCorrect: false },
            ],
            solution: 'Bauhaus-skolen, grunnlagt av Walter Gropius i 1919, revolusjonerte design og arkitektur med sitt prinsipp om a forene kunst og handverk. Bauhaus-designet preger fremdeles moderne arkitektur.',
          },
          {
            id: 'tysk-3-11-1-n-quiz2-q2',
            task: 'Hva utloste die Weltwirtschaftskrise?',
            options: [
              { id: 'a', text: 'Hitlers maktovertagelse i 1933', isCorrect: false },
              { id: 'b', text: 'Borskrakket pa Wall Street i oktober 1929', isCorrect: true },
              { id: 'c', text: 'Hyperinflasjonen i 1923', isCorrect: false },
              { id: 'd', text: 'Forste verdenskrigs slutt i 1918', isCorrect: false },
            ],
            solution: 'Die Weltwirtschaftskrise (verdenskrisen) ble utlost av borskrakket pa Wall Street 24. oktober 1929. Tyskland ble spesielt hardt rammet fordi okonomien var avhengig av amerikanske lan.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-1-n-section4',
      type: 'text',
      content: `## Die Machtergreifung - maktovertagelsen

Det mest skremmende med **die Machtergreifung**, maktovertagelsen, er kanskje hvor raskt det gikk. I lopet av bare noen fa maneder i 1933 forvandlet Hitler et demokrati til et diktatur, og han brukte lovens egne mekanismer for a gjore det.

Allerede i februar 1933 brant riksdagsbygningen, **der Reichstagsbrand**. Det er fremdeles uklart hvem som tente pa, men Hitler brukte brannen som paskudd for a innfore unntakstilstand. Politiske motstandere ble arrestert, aviser ble forbudt, og grunnleggende rettigheter ble suspendert.

Sa kom **das Ermachtigungsgesetz**, fullmaktsloven, den 24. mars 1933. Denne loven ga Hitlers regjering rett til a vedta lover uten parlamentets godkjennelse. Riksdagen stemte i praksis bort sin egen makt. Bare SPD, sosialdemokratene, stemte imot. KPD, kommunistene, var allerede forbudt og arrestert. Innen sommeren 1933 var alle andre partier forbudt, fagforeningene oppløst, og pressen under statlig kontroll. Demokratiet var doedt.

Weimarrepublikken er en maning til ettertanke. Den viser oss at demokrati ikke er noe vi kan ta for gitt. Det ma forsvares, neres og beskyttes, saerlig i krisetider nar forenklede losninger frister.`,
    },
    {
      id: 'tysk-3-11-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa nasjonalsosialismens fremvekst og maktovertagelsen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-1-n-quiz3-q0',
            task: 'Hva var "das Ermachtigungsgesetz"?',
            options: [
              { id: 'a', text: 'En lov som ga regjeringen fullmakt til a vedta lover uten parlamentets godkjennelse', isCorrect: true },
              { id: 'b', text: 'Weimarrepublikkens grunnlov fra 1919', isCorrect: false },
              { id: 'c', text: 'En lov som innforte demokrati etter krigen', isCorrect: false },
              { id: 'd', text: 'En handelsavtale mellom Tyskland og Frankrike', isCorrect: false },
            ],
            solution: 'Das Ermachtigungsgesetz (fullmaktsloven) ble vedtatt 24. mars 1933 og ga Hitlers regjering diktatorisk makt. Bare SPD stemte imot. KPD var allerede forbudt.',
          },
          {
            id: 'tysk-3-11-1-n-quiz3-q1',
            task: 'Hvilken hendelse ble brukt som paskudd for a innfore unntakstilstand i februar 1933?',
            options: [
              { id: 'a', text: 'Borskrakket pa Wall Street', isCorrect: false },
              { id: 'b', text: 'Et attentat pa Hitler', isCorrect: false },
              { id: 'c', text: 'Der Reichstagsbrand, brannen i riksdagsbygningen', isCorrect: true },
              { id: 'd', text: 'En generalstreik blant tyske arbeidere', isCorrect: false },
            ],
            solution: 'Der Reichstagsbrand (riksdagsbrannen) i februar 1933 ble brukt som paskudd for a innfore unntakstilstand, arrestere politiske motstandere og suspendere grunnleggende rettigheter.',
          },
          {
            id: 'tysk-3-11-1-n-quiz3-q2',
            task: 'Hvor mange prosent av stemmene fikk NSDAP i 1932?',
            options: [
              { id: 'a', text: '51 prosent', isCorrect: false },
              { id: 'b', text: '37 prosent', isCorrect: true },
              { id: 'c', text: '12 prosent', isCorrect: false },
              { id: 'd', text: '75 prosent', isCorrect: false },
            ],
            solution: 'NSDAP fikk 37 prosent av stemmene i 1932. De fikk aldri flertall gjennom frie valg. Hitler ble utnevnt til rikskansler 30. januar 1933 og brukte deretter Ermachtigungsgesetz for a sikre total makt.',
          },
          {
            id: 'tysk-3-11-1-n-quiz3-q3',
            task: 'Hvorfor er Weimarrepublikken viktig a studere i dag?',
            options: [
              { id: 'a', text: 'Fordi den hadde den storste haeren i Europa', isCorrect: false },
              { id: 'b', text: 'Fordi den viser hvor skarbart et demokrati kan vaere i krisetider', isCorrect: true },
              { id: 'c', text: 'Fordi den var det siste monarkiet i Europa', isCorrect: false },
              { id: 'd', text: 'Fordi den varte i over hundre ar', isCorrect: false },
            ],
            solution: 'Weimarrepublikken viser oss at demokrati ikke er noe vi kan ta for gitt. Okonomiske kriser, politisk radikalisering og forenklede losninger kan undergrave selv et fungerende demokrati pa kort tid.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi fulgt Weimarrepublikken fra dens fødsel i 1919 til dens fall i 1933. Vi har sett hvordan Tysklands forste demokrati ble grunnlagt midt i kaos, opplevde kulturell blomstring under **die Goldenen Zwanziger**, og til slutt ble knust av **die Weltwirtschaftskrise** og **die Machtergreifung**.

De sentrale tyske begrepene du bor huske er **die Weimarer Republik** (Weimarrepublikken), **die Verfassung** (grunnloven), **die Hyperinflation** (hyperinflasjonen i 1923), **die Goldenen Zwanziger** (de gylne tjuearene), **die Weltwirtschaftskrise** (verdenskrisen fra 1929), **der Reichstag** (riksdagen), **die Machtergreifung** (maktovertagelsen), **das Ermachtigungsgesetz** (fullmaktsloven), **das Frauenwahlrecht** (kvinners stemmerett) og **die Reparationszahlungen** (krigserstatningsbetalinger).

Perioden 1919-1933 er et kraftig eksempel pa hvordan okonomisk krise, politisk splittelse og propaganda kan rive ned et demokrati. Det er en historie som er like relevant i dag som den var for hundre ar siden.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.2 NARRATIV: Der Holocaust und die Erinnerungskultur
// ============================================================================

export const CHAPTER_TYSK_3_11_2_NARRATIV: TextbookChapter = {
  id: 'tysk-3-11-2-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '11.2',
  title: 'Der Holocaust und die Erinnerungskultur',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om historiens verste forbrytelse og Tysklands arbeid med a minnes og ta oppgjor med fortiden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer',
  ],
  linkedChapterId: 'tysk-3-11-2',
  content: [
    {
      id: 'tysk-3-11-2-n-intro',
      type: 'text',
      content: `## Aldri glemme

Tenk deg at du gar gjennom en gate i Berlin. Du ser ned og legger merke til en liten messingplate i fortauet, ikke storre enn en brostein. Pa den star det: *Hier wohnte Sara Goldstein, Jg. 1922, deportiert 1943, ermordet in Auschwitz*. Her bodde Sara Goldstein, fodt 1922, deportert 1943, myrdet i Auschwitz.

Du stopper opp. Sara var 21 ar gammel da hun ble drept. Hun bodde akkurat her, i denne gaten, i dette huset. Kanskje sa hun ut av det vinduet du star og ser pa na. Kanskje gikk hun pa skole i naerheten, hadde venner, drommer om fremtiden.

Denne lille messingplaten er en **Stolperstein**, en snublestein, og den er en del av Tysklands omfattende **Erinnerungskultur**, minnekultur. For a forstå det moderne Tyskland ma vi forstå Holocaust og det tyske oppgjoret med fortiden. Det er et tungt tema, men det er helt avgjorende.`,
    },
    {
      id: 'tysk-3-11-2-n-section1',
      type: 'text',
      content: `## Der Holocaust - die Shoah

**Der Holocaust**, ogsa kalt **die Shoah** (hebraisk for katastrofe), er betegnelsen pa nazistenes systematiske folkemord, **der Volkermord**, pa seks millioner europeiske joder og millioner av andre ofre under andre verdenskrig. Det er en av historiens verste forbrytelser, og det har satt umiskjennelige spor i tysk identitet.

Forfolgelsen begynte ikke med gasskamrene. Den begynte gradvis, med ord og lover. Allerede i 1933 ble jodiske butikker boikottet. I 1935 kom **die Nurnberger Gesetze**, Nurnbergerlovene, som fratok joder deres statsborgerskap og forbod ekteskap mellom joder og ikke-joder. Joder ble utestengt fra skoler, universiteter og yrker. Sa kom **die Reichspogromnacht**, krystallnatten, 9. til 10. november 1938. Den natten ble synagoger brent, jodiske butikker knust og over 30 000 jodiske menn arrestert. Navnet henspiller pa de knuste glassrutene som lå igjen i gatene.

Fra 1941 begynte den systematiske utryddelsen. I **Konzentrationslager** som Auschwitz, Treblinka og Dachau ble millioner myrdet i gasskamrene. Totalt ble rundt seks millioner joder drept, i tillegg til romaer, funksjonshemmede, homofile og politiske motstandere. Det var industrialisert massemord i en skala verden aldri hadde sett.`,
    },
    {
      id: 'tysk-3-11-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Holocaust og forfolgelsen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-2-n-quiz1-q0',
            task: 'Hva var "die Reichspogromnacht" (krystallnatten)?',
            options: [
              { id: 'a', text: 'Riksdagsbrannen i februar 1933', isCorrect: false },
              { id: 'b', text: 'Pogrom mot joder natten 9.-10. november 1938 der synagoger og butikker ble oydelagt', isCorrect: true },
              { id: 'c', text: 'Vedtakelsen av Nurnbergerlovene i 1935', isCorrect: false },
              { id: 'd', text: 'Frigjoeringen av konsentrasjonsleirene i 1945', isCorrect: false },
            ],
            solution: 'Die Reichspogromnacht (krystallnatten) var pogromen mot joder 9.-10. november 1938. Synagoger ble brent, jodiske butikker knust, og over 30 000 jodiske menn ble arrestert. Navnet henspiller pa de knuste glassrutene.',
          },
          {
            id: 'tysk-3-11-2-n-quiz1-q1',
            task: 'Hva var "die Nurnberger Gesetze"?',
            options: [
              { id: 'a', text: 'Lover som innforte demokrati i Tyskland', isCorrect: false },
              { id: 'b', text: 'Reglene for Nurnbergprosessene etter krigen', isCorrect: false },
              { id: 'c', text: 'Raselover fra 1935 som fratok joder statsborgerskap og grunnleggende rettigheter', isCorrect: true },
              { id: 'd', text: 'Lover som beskyttet jodiske minoriteter', isCorrect: false },
            ],
            solution: 'Die Nurnberger Gesetze (Nurnbergerlovene) fra 1935 fratok joder deres tyske statsborgerskap og forbod ekteskap og forhold mellom joder og ikke-joder. De var et avgjorende skritt i den systematiske forfolgelsen.',
          },
          {
            id: 'tysk-3-11-2-n-quiz1-q2',
            task: 'Omtrent hvor mange joder ble drept under Holocaust?',
            options: [
              { id: 'a', text: 'Ca. 600 000', isCorrect: false },
              { id: 'b', text: 'Ca. 6 millioner', isCorrect: true },
              { id: 'c', text: 'Ca. 60 000', isCorrect: false },
              { id: 'd', text: 'Ca. 60 millioner', isCorrect: false },
            ],
            solution: 'Rundt 6 millioner europeiske joder ble systematisk drept under Holocaust. I tillegg ble millioner av romaer, funksjonshemmede, homofile og politiske motstandere myrdet.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-2-n-section2',
      type: 'text',
      content: `## Nurnbergprosessene og det forste oppgjoret

Da krigen tok slutt i mai 1945, sto verden overfor et sportsmal ingen hadde stilt for: Hvordan stiller man en hel stat til ansvar for folkemord? Svaret ble **die Nurnberger Prozesse**, Nurnbergprosessene, de forste internasjonale krigsforbryterdomstolene i historien.

I Nurnberg ble 24 ledende nazister stilt for retten mellom 1945 og 1946. Tolv ble domt til doden, tre ble frikjent. Men det viktigste var kanskje ikke dommene i seg selv, men prinsippet de slo fast: Du kan ikke gjemme deg bak ordre. "Jeg fulgte bare ordre" var ikke et gyldig forsvar. Hvert enkelt menneske har et personlig ansvar for sine handlinger, uansett hva overordnede befaler.

Dette prinsippet la grunnlaget for moderne internasjonal strafferett og **das Volkerrecht**, folkeretten. De sentrale begrepene fra rettssalen er **der Angeklagte** (den tiltalte), **das Urteil** (dommen), **schuldig sprechen** (a domme skyldig), **freisprechen** (a frikjenne), **die Todesstrafe** (dodsstraff) og **der Kriegsverbrecher** (krigsforbryter). Nurnbergprosessene viste verden at selv de mektigste kan stilles til ansvar.`,
    },
    {
      id: 'tysk-3-11-2-n-section3',
      type: 'text',
      content: `## Vergangenheitsbewaltigung - a ta oppgjor med fortiden

Det tyske ordet **Vergangenheitsbewaltigung** er et av verdens lengste og viktigste ord. Det betyr "bearbeidelse av fortiden" og beskriver den lange, smertefulle prosessen Tyskland har gatt gjennom for a konfrontere sin nazi-fortid. Det er ikke ett ord pa norsk som fanger hele betydningen. Det handler om mer enn bare a "huske". Det handler om a forstå, anerkjenne, sørge over og laere av det som skjedde.

Denne prosessen var ikke umiddelbar. I de forste tiårene etter krigen var det mange tyskere som helst ville glemme og ga videre. Det var forst pa 1960- og 1970-tallet, da en ny generasjon begynte a stille sporsmal til foreldrene sine, at det tyske samfunnet for alvor begynte a konfrontere fortiden. "Hva gjorde du under krigen, pappa?" ble et definerende sporsmal for en hel generasjon.

I dag er **die Erinnerungskultur**, minnekulturen, en sentral del av tysk identitet. Hvert ar pa **27. januar**, dagen da Auschwitz ble frigjort i 1945, begår Tyskland den offisielle Holocaust-minnedagen. I skoler, parlamenter og pa minnesteder holdes arrangementer. Forbundspresidenten holder en minnetale. Unge tyskere besoker tidligere konsentrasjonsleirer for a laere av historien. Minnet om Holocaust er blitt en del av den tyske identiteten.`,
    },
    {
      id: 'tysk-3-11-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Nurnbergprosessene og oppgjoret med fortiden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-2-n-quiz2-q0',
            task: 'Hva betyr "Vergangenheitsbewaltigung"?',
            options: [
              { id: 'a', text: 'Et minnesmerke over krigsofre', isCorrect: false },
              { id: 'b', text: 'Prosessen med a bearbeide og ta oppgjor med fortiden, saerlig nazitiden', isCorrect: true },
              { id: 'c', text: 'En type rettssak mot krigsforbrytere', isCorrect: false },
              { id: 'd', text: 'En historiebok om andre verdenskrig', isCorrect: false },
            ],
            solution: 'Vergangenheitsbewaltigung betyr bearbeidelse av fortiden (Vergangenheit = fortid, Bewaltigung = bearbeidelse/mestring). Det beskriver Tysklands prosess med a konfrontere og ta oppgjor med nazitiden og Holocaust.',
          },
          {
            id: 'tysk-3-11-2-n-quiz2-q1',
            task: 'Hvilket viktig prinsipp ble fastsatt gjennom Nurnbergprosessene?',
            options: [
              { id: 'a', text: 'At bare statsledere kan stilles til ansvar for krigsforbrytelser', isCorrect: false },
              { id: 'b', text: 'At "jeg fulgte bare ordre" er et gyldig forsvar', isCorrect: false },
              { id: 'c', text: 'At krigsforbrytere automatisk far dodsstraff', isCorrect: false },
              { id: 'd', text: 'At hvert individ har personlig ansvar for sine handlinger, uansett ordre', isCorrect: true },
            ],
            solution: 'Nurnbergprosessene slo fast at "jeg fulgte bare ordre" ikke er et gyldig forsvar. Hvert menneske har individuelt ansvar for sine handlinger. Dette la grunnlaget for internasjonal strafferett.',
          },
          {
            id: 'tysk-3-11-2-n-quiz2-q2',
            task: 'Nar er den tyske Holocaust-minnedagen?',
            options: [
              { id: 'a', text: '9. november', isCorrect: false },
              { id: 'b', text: '8. mai', isCorrect: false },
              { id: 'c', text: '27. januar', isCorrect: true },
              { id: 'd', text: '3. oktober', isCorrect: false },
            ],
            solution: 'Den tyske Holocaust-minnedagen er 27. januar, dagen da Auschwitz ble frigjort i 1945. Pa denne dagen holdes arrangementer i skoler, parlamenter og pa minnesteder over hele Tyskland.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-2-n-section4',
      type: 'text',
      content: `## Stolpersteine og minnesmerker

En av de mest berorende formene for minnekultur er **die Stolpersteine**, snublesteinene. Siden 1992 har kunstneren Gunter Demnig lagt ned over 100 000 messingplater i fortauet foran hjemmene til Holocaust-ofre i over 2 000 byer i hele Europa, ogsa noen i Norge. Pa hver stein star det *Hier wohnte...* (Her bodde...) etterfulgt av personens navn, fodselsar og skjebne.

Det geniale med snublesteinene er at du ikke snubler fysisk. Du snubler med hjertet og forstanden, som Demnig selv har sagt. De gjor minnearbeidet til en del av hverdagen. Plutselig er ikke Holocaust noe som skjedde "et annet sted" med "andre mennesker". Det skjedde her, i denne gaten, med dette mennesket som hadde et navn og en adresse.

I Berlin star ogsa det store **Holocaust-Mahnmal**, Holocaust-minnesmerket, med sine 2 711 betongsteler nær Brandenburger Tor. Det er et overveldende syn som far deg til a fole deg liten og fortapt, kanskje ikke ulikt det ofrene matte ha foelt. I Nurnberg finnes **Dokumentationszentrum**, dokumentasjonssenteret, og ved de tidligere konsentrasjonsleirene er det opprettet **KZ-Gedenkstatten**, minnesteder.

Uttrykket **"Nie wieder"**, aldri igjen, oppsummerer hele den tyske tilnermingen. Det er ikke bare et slagord. Det er et lofte og et grunnprinsipp i tysk politikk og samfunnsliv. Tyskland har tatt et saerlig ansvar for a minne om Holocaust og forhindre folkemord.`,
    },
    {
      id: 'tysk-3-11-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa Stolpersteine og minnesmerker:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-2-n-quiz3-q0',
            task: 'Hva er "die Stolpersteine"?',
            options: [
              { id: 'a', text: 'Store steinmonumenter i tyske byer', isCorrect: false },
              { id: 'b', text: 'Messingplater i fortauet foran hjemmene til Holocaust-ofre', isCorrect: true },
              { id: 'c', text: 'En utstilling i Holocaust-museet i Berlin', isCorrect: false },
              { id: 'd', text: 'En type brostein brukt i tyske byer etter krigen', isCorrect: false },
            ],
            solution: 'Die Stolpersteine (snublesteiner) er messingplater nedfelt i fortauet foran hjemmene til Holocaust-ofre. Over 100 000 steiner finnes i mer enn 2 000 byer i Europa. De begynner alltid med "Hier wohnte..." (Her bodde...).',
          },
          {
            id: 'tysk-3-11-2-n-quiz3-q1',
            task: 'Hva betyr uttrykket "Nie wieder"?',
            options: [
              { id: 'a', text: 'Aldri glemme', isCorrect: false },
              { id: 'b', text: 'Aldri tilbake', isCorrect: false },
              { id: 'c', text: 'Aldri igjen', isCorrect: true },
              { id: 'd', text: 'Aldri alene', isCorrect: false },
            ],
            solution: '"Nie wieder" betyr "aldri igjen" og er et grunnprinsipp i tysk etterkrigskultur. Det uttrykker loftet om at Holocaust og lignende forbrytelser aldri skal gjenta seg.',
          },
          {
            id: 'tysk-3-11-2-n-quiz3-q2',
            task: 'Hva er Holocaust-Mahnmal i Berlin?',
            options: [
              { id: 'a', text: 'Et museum med dokumenter fra andre verdenskrig', isCorrect: false },
              { id: 'b', text: 'En kirke til minne om Holocaust-ofrene', isCorrect: false },
              { id: 'c', text: 'En stor kirkegard for falne soldater', isCorrect: false },
              { id: 'd', text: 'Et minnesmerke med 2 711 betongsteler naer Brandenburger Tor', isCorrect: true },
            ],
            solution: 'Holocaust-Mahnmal i Berlin er et stort minnesmerke med 2 711 betongsteler. Det ligger naer Brandenburger Tor og er et av Tysklands mest kjente minnesmerker over Holocaust-ofrene.',
          },
          {
            id: 'tysk-3-11-2-n-quiz3-q3',
            task: 'Hvorfor er Erinnerungskultur viktig for det moderne Tyskland?',
            options: [
              { id: 'a', text: 'Fordi det er palagt av FN', isCorrect: false },
              { id: 'b', text: 'Fordi det tiltrekker turister', isCorrect: false },
              { id: 'c', text: 'Fordi minnet om Holocaust er en del av tysk identitet og ansvar', isCorrect: true },
              { id: 'd', text: 'Fordi det er obligatorisk i EU', isCorrect: false },
            ],
            solution: 'Die Erinnerungskultur er sentral fordi minnet om Holocaust er blitt en del av tysk identitet. Tyskland har tatt et saerlig ansvar for a minne om forbrytelsene og forhindre at noe lignende skjer igjen. Det gjenspeiles i skoler, politikk og samfunnsliv.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi gatt gjennom et av historiens morskeste kapitler og sett hvordan Tyskland har valgt a forholde seg til det. Vi har laert om **der Holocaust** og **die Shoah**, det systematiske folkemordet pa seks millioner joder. Vi har fulgt forfolgelsen fra de forste lovene i 1933, via **die Nurnberger Gesetze** og **die Reichspogromnacht**, til de systematiske drapene i **Konzentrationslager** som Auschwitz.

Vi har sett hvordan **die Nurnberger Prozesse** skapte presedens for internasjonal strafferett, og hvordan **Vergangenheitsbewaltigung**, bearbeidelse av fortiden, har blitt en sentral del av tysk kultur. Vi har laert om **die Stolpersteine**, snublesteinene som individualiserer ofrene, og om **das Holocaust-Mahnmal** i Berlin.

Det viktigste a ta med seg er kanskje uttrykket **"Nie wieder"**, aldri igjen. Det er ikke bare et slagord, men et lofte om at verden aldri ma la noe slikt skje igjen. Og det loftet krever at vi husker, at vi laerer, og at vi aldri slutter a bry oss.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.3 NARRATIV: Die deutsche Teilung und die DDR
// ============================================================================

export const CHAPTER_TYSK_3_11_3_NARRATIV: TextbookChapter = {
  id: 'tysk-3-11-3-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '11.3',
  title: 'Die deutsche Teilung und die DDR',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om et delt land, en mur som skilte familier, og et folk som kjempet for frihet.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  linkedChapterId: 'tysk-3-11-3',
  content: [
    {
      id: 'tysk-3-11-3-n-intro',
      type: 'text',
      content: `## En mur midt i hjertet

Forestill deg at du en morgen vakner opp og oppdager at noen har bygget en mur midt i gaten din. Naboen pa den andre siden, som du pleide a hilse pa hver dag, er plutselig utilgjengelig. Bestemoren din bor pa feil side av muren. Du kan ikke besoke henne, ikke ringe henne, ikke engang vinke til henne. Og denne muren star der i 28 ar.

Dette er ikke et tankeeksperiment. Det er noyaktig det som skjedde i Berlin den 13. august 1961, da **die DDR**, Den tyske demokratiske republikken, begynte a bygge **die Berliner Mauer**, Berlinmuren. Over natten ble familier skilt, gater sperret og piggtrad trukket opp. Muren ble det mest konkrete symbolet pa **der Eiserne Vorhang**, jernteppet, som delte Europa i to under den kalde krigen.

Men for a forstå hvorfor muren ble bygget, ma vi forste spole tilbake til 1945 og det som skjedde da krigen tok slutt.`,
    },
    {
      id: 'tysk-3-11-3-n-section1',
      type: 'text',
      content: `## Et land blir to

Da andre verdenskrig endte i 1945, ble Tyskland delt mellom seiersmaktene. De vestlige sonene, kontrollert av USA, Storbritannia og Frankrike, ble i 1949 til **die BRD**, Bundesrepublik Deutschland, Forbundsrepublikken Tyskland. Den sovjetiske sonen ble til **die DDR**, Deutsche Demokratische Republik, Den tyske demokratiske republikken. Til tross for navnet var DDR alt annet enn demokratisk.

De to Tysklandene utviklet seg i helt forskjellige retninger. I vest opplevde man **das Wirtschaftswunder**, det okonomiske mirakelet, pa 1950- og 60-tallet. Vesttyskere fikk tilgang til forbruksvarer, reisefrihet og politisk frihet. Hovedstaden var Bonn, og landet var tilknyttet NATO og det vestlige samarbeidet.

I ost var virkeligheten en annen. DDR var en sosialistisk ettpartistat styrt av **SED**, Sozialistische Einheitspartei Deutschlands. Okonomien var en **Planwirtschaft**, planokonomi, der staten bestemte hva som skulle produseres, hvor mye det skulle koste, og hvem som skulle jobbe hvor. Hovedstaden var Ost-Berlin, og landet var tilknyttet Warszawapakten og Sovjetunionen. Berlin selv var delt i fire soner, og byen ble et brennpunkt for den kalde krigen.

I arene for muren ble bygget, flyktet over 3,5 millioner mennesker fra DDR til vest. Det var denne massive flukten som til slutt fikk DDR-ledelsen til a bygge muren.`,
    },
    {
      id: 'tysk-3-11-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa delingen av Tyskland:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-3-n-quiz1-q0',
            task: 'Nar ble Berlinmuren bygget?',
            options: [
              { id: 'a', text: '9. november 1989', isCorrect: false },
              { id: 'b', text: '8. mai 1945', isCorrect: false },
              { id: 'c', text: '13. august 1961', isCorrect: true },
              { id: 'd', text: '3. oktober 1990', isCorrect: false },
            ],
            solution: 'Berlinmuren ble bygget natten til 13. august 1961. Over natten ble familier skilt, gater sperret og piggtrad trukket opp. Muren sto i 28 ar til den falt 9. november 1989.',
          },
          {
            id: 'tysk-3-11-3-n-quiz1-q1',
            task: 'Hva var hovedforskjellen mellom BRD og DDR?',
            options: [
              { id: 'a', text: 'BRD var storre enn DDR', isCorrect: false },
              { id: 'b', text: 'BRD var et demokrati med markedsokonomi, DDR var en ettpartistat med planokonomi', isCorrect: true },
              { id: 'c', text: 'BRD hadde flere innbyggere enn DDR', isCorrect: false },
              { id: 'd', text: 'BRD la i nord, DDR la i sor', isCorrect: false },
            ],
            solution: 'BRD (Forbundsrepublikken) var et demokrati med markedsokonomi, tilknyttet NATO. DDR var en sosialistisk ettpartistat med planokonomi, tilknyttet Warszawapakten og Sovjetunionen.',
          },
          {
            id: 'tysk-3-11-3-n-quiz1-q2',
            task: 'Hva betyr "der Eiserne Vorhang"?',
            options: [
              { id: 'a', text: 'Berlinmuren', isCorrect: false },
              { id: 'b', text: 'Et teaterforheng i Berlin', isCorrect: false },
              { id: 'c', text: 'Jernteppet - grensen som delte Europa i ost og vest', isCorrect: true },
              { id: 'd', text: 'Et militaert forsvarssystem i DDR', isCorrect: false },
            ],
            solution: 'Der Eiserne Vorhang (jernteppet) var betegnelsen pa den politiske og fysiske grensen som delte Europa i en vestlig og en ostlig blokk under den kalde krigen. Berlinmuren var den mest synlige delen av dette jernteppet.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-3-n-section2',
      type: 'text',
      content: `## Hverdagen i DDR - mellom trygghet og frykt

Livet i DDR var fullt av motsetninger. Pa den ene siden ga staten en form for trygghet som mange vestlige land ikke hadde. Utdanning var gratis, helsevesenet var gratis, husleie og basisvarer som brod og strom var svaert billige. Kvinner hadde hoy yrkesdeltakelse, og barn ble tatt vare pa i statlige barnehager. Det var et fellesskap i de store boligblokkene, **die Plattenbauten**, der naboer kjente hverandre og hjalp hverandre.

Men sa var det baksiden. DDR var en **Mangelwirtschaft**, en mangelokonomi. Det var kronisk mangel pa forbruksvarer. Bananer var luksus. Hvis du ville ha en bil, en **Trabant** (kjaelenavn: "Trabi"), matte du vente ti til femten ar. **Intershop**-butikkene solgte vestlige varer, men bare mot vestlig valuta. Pa 1970-tallet opplevde DDR til og med en kaffekrise, og folk matte drikke erstatningskaffe kalt **Mischkaffee**.

Og sa var det det verste: frykten. **Die Stasi**, Ministerium fur Staatssicherheit, det hemmelige politiet, overvakte befolkningen med en grundighet som er vanskelig a forestille seg. Rundt 90 000 ansatte og 180 000 **IM**, Inoffizielle Mitarbeiter (uoffisielle medarbeidere), altsa vanlige sivile som spionerte pa naboer, venner og til og med familiemedlemmer. Brev ble apnet, telefoner avlyttet. Din beste venn, din ektemann, din kollega kunne vaere en Stasi-informant. **Die Uberwachung**, overvakingen, gjennomsyret hele samfunnet.`,
    },
    {
      id: 'tysk-3-11-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa hverdagen i DDR:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-3-n-quiz2-q0',
            task: 'Hva var "die Stasi"?',
            options: [
              { id: 'a', text: 'DDRs statsminister', isCorrect: false },
              { id: 'b', text: 'Det hemmelige politiet i DDR som overvakte befolkningen', isCorrect: true },
              { id: 'c', text: 'En type boligblokk i Ost-Berlin', isCorrect: false },
              { id: 'd', text: 'DDRs statseid bilprodusent', isCorrect: false },
            ],
            solution: 'Die Stasi (Ministerium fur Staatssicherheit) var det hemmelige politiet i DDR. Med ca. 90 000 ansatte og 180 000 uoffisielle medarbeidere (IM) overvakte de befolkningen grundig gjennom apning av brev, avlytting og informanter.',
          },
          {
            id: 'tysk-3-11-3-n-quiz2-q1',
            task: 'Hva betyr "die Mangelwirtschaft"?',
            options: [
              { id: 'a', text: 'En okonomi med overproduksjon', isCorrect: false },
              { id: 'b', text: 'En okonomi der staten investerer i mangfold', isCorrect: false },
              { id: 'c', text: 'En okonomi preget av kronisk mangel pa forbruksvarer', isCorrect: true },
              { id: 'd', text: 'En type markedsokonomi i Vest-Tyskland', isCorrect: false },
            ],
            solution: 'Die Mangelwirtschaft (mangelokonomien) beskriver DDRs okonomiske system der det var kronisk mangel pa forbruksvarer. Bananer var luksus, og ventetiden pa en Trabant-bil var 10-15 ar.',
          },
          {
            id: 'tysk-3-11-3-n-quiz2-q2',
            task: 'Hva var en "IM" (Inoffizieller Mitarbeiter)?',
            options: [
              { id: 'a', text: 'En offisiell ansatt i DDR-regjeringen', isCorrect: false },
              { id: 'b', text: 'En vestlig diplomat i Ost-Berlin', isCorrect: false },
              { id: 'c', text: 'En uoffisiell Stasi-informant som spionerte pa naboer og venner', isCorrect: true },
              { id: 'd', text: 'En arbeider i en statlig fabrikk', isCorrect: false },
            ],
            solution: 'IM (Inoffizieller Mitarbeiter) var sivile personer som rapporterte til Stasi om naboer, kolleger, venner og til og med familiemedlemmer. Ca. 180 000 personer fungerte som slike uoffisielle medarbeidere.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-3-n-section3',
      type: 'text',
      content: `## Motstand, flukt og Montagsdemonstrationen

Til tross for Stasis altseende oye, fantes det motstand i DDR. Kirkene ble viktige moterstedeer for opposisjonelle, fordi de var blant de fa institusjonene som hadde en viss autonomi fra staten. Undergrunnskunst og samizdat-litteratur (illegalt trykte boker og tidsskrifter) sirkulerte i smug. Opposisjonsgrupper som **das Neue Forum** (Nytt Forum) vokste frem, saerlig pa 1980-tallet.

Fluktforsokene var ofte dramatiske og desperate. Etter at muren ble bygget i 1961, provde folk a flykte gjennom tunneler, i luftballonger, gjemt i bilens bagasjerom, og til og med ved a svomme over elver. **Republikflucht**, republikk-flukt, var en straffbar handling i DDR. Langs grensen gjaldt **Schiessbefehl**, skytingsordre, og minst 140 mennesker mistet livet i forsok pa a forsere muren. Langs muren var det vakttarn, miner og en **Todesstreifen**, en dodssone mellom to murer.

Men den storste motstanden kom fredelig. Hosten 1989 begynte tusenvis av mennesker a samle seg i Nikolaikirken i Leipzig hver mandag. Etter fredsbonnen gikk de ut pa gaten og ropte det som ble det mest beroemte slagordet i tysk etterkrigshistorie: **"Wir sind das Volk!"** - Vi er folket! **Die Montagsdemonstrationen**, mandagsdemonstrasjionene, vokste fra uke til uke. Den 9. oktober 1989 demonstrerte 70 000 mennesker i Leipzig, og statsmakten vaget ikke a gripe inn. Det var begynnelsen pa slutten for DDR.`,
    },
    {
      id: 'tysk-3-11-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa motstand og flukt i DDR:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-3-n-quiz3-q0',
            task: 'Hva ropte demonstrantene i Leipzig hosten 1989?',
            options: [
              { id: 'a', text: '"Nie wieder!" (Aldri igjen!)', isCorrect: false },
              { id: 'b', text: '"Freiheit fur alle!" (Frihet for alle!)', isCorrect: false },
              { id: 'c', text: '"Wir sind das Volk!" (Vi er folket!)', isCorrect: true },
              { id: 'd', text: '"Deutschland uber alles!"', isCorrect: false },
            ],
            solution: '"Wir sind das Volk!" (Vi er folket!) var slagordet til mandagsdemonstrasjionene i Leipzig. Det uttrykte folkets krav om demokrati og medbestemmelse. Senere endret det seg til "Wir sind ein Volk!" (Vi er ett folk!) som krav om gjenforening.',
          },
          {
            id: 'tysk-3-11-3-n-quiz3-q1',
            task: 'Hvor samlet demonstrantene seg for mandagsdemonstrasjionene?',
            options: [
              { id: 'a', text: 'Ved Brandenburger Tor i Berlin', isCorrect: false },
              { id: 'b', text: 'I Nikolaikirken i Leipzig', isCorrect: true },
              { id: 'c', text: 'Foran Stasi-hovedkvarteret i Berlin', isCorrect: false },
              { id: 'd', text: 'Pa Alexanderplatz i Berlin', isCorrect: false },
            ],
            solution: 'Mandagsdemonstrasjionene startet i Nikolaikirken i Leipzig, der folk samlet seg til fredsbonner for de gikk ut pa gatene. Kirkene var blant de fa institusjonene med en viss autonomi fra staten.',
          },
          {
            id: 'tysk-3-11-3-n-quiz3-q2',
            task: 'Omtrent hvor mange mennesker mistet livet i forsok pa a forsere Berlinmuren?',
            options: [
              { id: 'a', text: 'Ingen - muren var bare symbolsk', isCorrect: false },
              { id: 'b', text: 'Rundt 20 personer', isCorrect: false },
              { id: 'c', text: 'Minst 140 personer', isCorrect: true },
              { id: 'd', text: 'Over 1 000 personer', isCorrect: false },
            ],
            solution: 'Minst 140 mennesker mistet livet i forsok pa a forsere Berlinmuren. Langs grensen gjaldt Schiessbefehl (skytingsordre), og muren var sikret med vakttarn, miner og en Todesstreifen (dodssone).',
          },
          {
            id: 'tysk-3-11-3-n-quiz3-q3',
            task: 'Hva var "das Neue Forum"?',
            options: [
              { id: 'a', text: 'En ny avis i DDR', isCorrect: false },
              { id: 'b', text: 'Et museum i Leipzig', isCorrect: false },
              { id: 'c', text: 'En opposisjonsgruppe som kjempet for reform i DDR', isCorrect: true },
              { id: 'd', text: 'Et vesttysk politisk parti', isCorrect: false },
            ],
            solution: 'Das Neue Forum (Nytt Forum) var en av de viktigste opposisjonsgruppene i DDR pa 1980-tallet. De krevde demokratiske reformer og var med pa a drive frem den fredelige revolusjonen i 1989.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har i dette kapittelet fulgt historien om et delt Tyskland fra krigens slutt til hosten 1989. Vi har sett hvordan **die Teilung**, delingen, skapte to vidt forskjellige samfunn: **die BRD** i vest med demokrati og markedsokonomi, og **die DDR** i ost med ettpartistyre og planokonomi.

Vi har opplevd hverdagen i DDR med dens blanding av trygghet og frykt: gratis utdanning og helsevesen pa den ene siden, **die Mangelwirtschaft** og **die Stasi**-overvaking pa den andre. Vi har laert om **die Berliner Mauer** som skilte familier i 28 ar, om **der Todesstreifen** langs grensen, og om de modige menneskene som risikerte alt for a flykte.

Til slutt har vi sett hvordan fredelig motstand, med **die Montagsdemonstrationen** og slagordet **"Wir sind das Volk!"**, ble sterke nok til a rokke ved et helt regime. De viktigste tyske begrepene a huske er **die Teilung** (delingen), **die Berliner Mauer** (Berlinmuren), **die Stasi** (det hemmelige politiet), **die Flucht** (flukten), **der Eiserne Vorhang** (jernteppet), **die Mangelwirtschaft** (mangelokonomien) og **die Uberwachung** (overvakingen).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.4 NARRATIV: Die Wiedervereinigung und das moderne Deutschland
// ============================================================================

export const CHAPTER_TYSK_3_11_4_NARRATIV: TextbookChapter = {
  id: 'tysk-3-11-4-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '11.4',
  title: 'Die Wiedervereinigung und das moderne Deutschland',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om natten muren falt, gjenforeningen av et folk, og utfordringene med a bli ett land igjen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer',
  ],
  linkedChapterId: 'tysk-3-11-4',
  content: [
    {
      id: 'tysk-3-11-4-n-intro',
      type: 'text',
      content: `## Natten da alt forandret seg

Det er kvelden 9. november 1989. En tilsynelatende rutinepreget pressekonferanse i Ost-Berlin er i ferd med a forandre verden. Pressesekretaer Gunter Schabowski leser opp fra et notat om nye reiseregler og sier, naermest i forbifarten, at DDR-borgere na kan reise ut. En journalist spor: "Nar trer dette i kraft?" Schabowski noler, blar i papirene sine, og svarer: "Umiddelbart, uten opphold" - **unverzuglich**. Han hadde egentlig ikke ment a si det.

Nyheten sprer seg som ild i tort gress. Tusenvis av ost-berlinere strommet til grenseovergangene. Grensevaktene, som ikke hadde fatt noen ordre, sto overfor et umulig valg: skyte eller apne? De apnet. Det var **der Mauerfall**, murens fall, og det var begynnelsen pa **die Wende**, vendepunktet.

Ved Brandenburger Tor sto folk pa muren og danset. Ost- og vest-berlinere klemte hverandre, grat av glede og ropte **"Wahnsinn! Wahnsinn!"** - Vanvittig! Galskap! Champagnekorkene smalt. 28 ar med deling var over pa en kveld som ingen hadde planlagt.`,
    },
    {
      id: 'tysk-3-11-4-n-section1',
      type: 'text',
      content: `## Fra murens fall til gjenforening

Murens fall var ikke det samme som gjenforening. Det tok nesten et ar til. I mellomtiden endret slagordet seg fra **"Wir sind das Volk!"** (Vi er folket!) til **"Wir sind ein Volk!"** (Vi er ett folk!). Det var en subtil men avgjorende endring: fra krav om demokrati til krav om gjenforening.

Bakgrunnen var ogsa internasjonal. Ungarn hadde allerede apnet grensen til Osterrike i september 1989, og tusener av DDR-borgere hadde flyktet via Ungarn og Tsjekkoslovakia. Sovjetunionens leder Mikhail Gorbatsjov hadde signalisert at han ikke ville bruke makt for a holde DDR-regimet pa plass. Uten sovjetisk stotte var DDR-ledelsens dager talte.

Den 3. oktober 1990 ble Tyskland offisielt gjenforent. DDR ble opplost, og de fem ostlige delstatene ble en del av Forbundsrepublikken gjennom **der Einigungsvertrag**, gjenforeningsavtalen. Denne datoen, **der Tag der Deutschen Einheit** (Dagen for tysk enhet), feires fremdeles som Tysklands nasjonaldag. Forbundskansler Helmut Kohl lovte befolkningen i ost **"bluhende Landschaften"**, blomstrende landskap. Det var et lofte som skulle vise seg a ta lang tid a innfri.`,
    },
    {
      id: 'tysk-3-11-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa murens fall og gjenforeningen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-4-n-quiz1-q0',
            task: 'Nar falt Berlinmuren?',
            options: [
              { id: 'a', text: '3. oktober 1990', isCorrect: false },
              { id: 'b', text: '13. august 1961', isCorrect: false },
              { id: 'c', text: '9. november 1989', isCorrect: true },
              { id: 'd', text: '9. november 1938', isCorrect: false },
            ],
            solution: 'Berlinmuren falt 9. november 1989. 3. oktober 1990 er Tysklands nasjonaldag (gjenforeningen), 13. august 1961 var da muren ble bygget, og 9. november 1938 var Krystallnatten.',
          },
          {
            id: 'tysk-3-11-4-n-quiz1-q1',
            task: 'Hva betyr "die Wende"?',
            options: [
              { id: 'a', text: 'Berlinmuren', isCorrect: false },
              { id: 'b', text: 'Vendepunktet - perioden 1989-1990 da DDR-regimet falt og Tyskland ble gjenforent', isCorrect: true },
              { id: 'c', text: 'En vesttysk politisk bevegelse', isCorrect: false },
              { id: 'd', text: 'Den tyske nasjonaldagen', isCorrect: false },
            ],
            solution: 'Die Wende (vendepunktet) betegner perioden fra hosten 1989 til gjenforeningen i oktober 1990, da DDR-regimet falt og Tyskland ble gjenforent.',
          },
          {
            id: 'tysk-3-11-4-n-quiz1-q2',
            task: 'Nar ble Tyskland offisielt gjenforent?',
            options: [
              { id: 'a', text: '9. november 1989', isCorrect: false },
              { id: 'b', text: '1. januar 1990', isCorrect: false },
              { id: 'c', text: '8. mai 1990', isCorrect: false },
              { id: 'd', text: '3. oktober 1990', isCorrect: true },
            ],
            solution: 'Tyskland ble offisielt gjenforent 3. oktober 1990 gjennom Einigungsvertrag (gjenforeningsavtalen). Denne datoen feires som Tag der Deutschen Einheit, Tysklands nasjonaldag.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-4-n-section2',
      type: 'text',
      content: `## Gjenforeningens pris

Gjenforeningen var et historisk oyeblikk av glede, men den brakte ogsa enorme utfordringer. For mange ost-tyskere ble de forste arene etter gjenforeningen preget av sjokk snarere enn feiring.

**Die Treuhandanstalt**, privatiseringsorganet, fikk oppgaven med a omstille DDR-okonomien til markedsokonomi. Over 8 000 DDR-bedrifter, alle de statlige VEB-ene, skulle privatiseres. I praksis ble mange av dem lagt ned. Massearbeidsloshet rammet de ostlige delstatene, **die neuen Bundeslander**, med arbeidsledighet pa opp til 20 prosent. Mange ost-tyskere mistet over natten arbeidet, identiteten og hele livsprosjektet sitt, **der Lebensentwurf**.

For a finansiere gjenoppbyggingen ble **der Solidaritatszuschlag**, solidaritetstillegget, innfort. Det var en ekstraskatt som alle tyskere betalte, og som varte helt til 2021 for de fleste. Milliarder ble overfort fra vest til ost, men penger alene kunne ikke lose de menneskelige utfordringene.

De kulturelle forskjellene mellom "Ossis" og "Wessis", som de kalte hverandre, ble tydelige. Mange ost-tyskere folte seg som andreklasses borgere i sitt eget gjenforente land. Alt fra DDR syntes plutselig a vaere "feil", fra utdanning til arbeidserfaring. Unge mennesker flyttet vestover i store tall. Det oppsto en identitetskrise som fremdeles merkes.`,
    },
    {
      id: 'tysk-3-11-4-n-section3',
      type: 'text',
      content: `## Ostalgie - nar fortiden blir rosa

Midt i denne identitetskrisen oppsto et fenomen som far et eget tysk ord: **die Ostalgie**. Ordet er satt sammen av "Ost" (ost) og "Nostalgie" (nostalgi), og det beskriver en nostalgisk lengsel etter deler av DDR-hverdagen. Det handler ikke om a onske diktaturet og Stasi tilbake. Det handler om a savne det trygge, det kjente, det som var "hjemme".

Hva savner folk? Produkter som Spreewald-agurker, Rotkappchen-sekt og Vita Cola, som plutselig ble erstattet av vestlige merker. **Ampelmannchen**, de sjarmerende osttyske fotgjengerlyssignalene med den lille mannen med hatt, ble nesten fjernet men reddet etter folkelig protest og ble et ikonisk symbol. **Sandmannchen**, en elsket TV-figur for barn, var noe alle DDR-barn vokste opp med.

Den mest beroemte kulturelle behandlingen av ostalgi er filmen *Good Bye, Lenin!* fra 2003. Den handler om en ung mann som holder gjenforeningen hemmelig for sin mor, en overbevist DDR-borger, etter at hun vakner fra koma. Han gjenskaper DDR-verdenen rundt henne for a beskytte henne. Filmen viser pa en humoristisk og berorende mate hvor vanskelig die Wende var for mange ost-tyskere. De mistet ikke bare et politisk system, men hele sin livsverden.`,
    },
    {
      id: 'tysk-3-11-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa gjenforeningens utfordringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-4-n-quiz2-q0',
            task: 'Hva var "die Treuhandanstalt"?',
            options: [
              { id: 'a', text: 'Det tyske parlamentet etter gjenforeningen', isCorrect: false },
              { id: 'b', text: 'Organet som privatiserte DDR-bedrifter, men der mange ble lagt ned', isCorrect: true },
              { id: 'c', text: 'En vesttysk bank som finansierte gjenoppbyggingen', isCorrect: false },
              { id: 'd', text: 'Et museum over DDR-historien', isCorrect: false },
            ],
            solution: 'Die Treuhandanstalt var organet som fikk oppgaven med a privatisere over 8 000 DDR-bedrifter. I praksis ble mange av dem lagt ned, noe som forte til massearbeidsloshet i de ostlige delstatene.',
          },
          {
            id: 'tysk-3-11-4-n-quiz2-q1',
            task: 'Hva er "die Ostalgie"?',
            options: [
              { id: 'a', text: 'Et politisk parti i det gjenforente Tyskland', isCorrect: false },
              { id: 'b', text: 'Et museum om Berlinmuren', isCorrect: false },
              { id: 'c', text: 'Nostalgi for deler av hverdagen i det tidligere DDR', isCorrect: true },
              { id: 'd', text: 'En type ost-tysk musikk fra 1980-tallet', isCorrect: false },
            ],
            solution: 'Die Ostalgie (Ost + Nostalgie) er nostalgi for deler av DDR-hverdagen. Det handler ikke om a savne diktaturet, men om a savne produkter, TV-programmer og fellesskapet fra oppveksten.',
          },
          {
            id: 'tysk-3-11-4-n-quiz2-q2',
            task: 'Hva var "der Solidaritatszuschlag"?',
            options: [
              { id: 'a', text: 'En bonus som ble utbetalt til ost-tyske borgere', isCorrect: false },
              { id: 'b', text: 'En ekstraskatt for a finansiere gjenoppbyggingen i de ostlige delstatene', isCorrect: true },
              { id: 'c', text: 'En handelsavtale mellom ost og vest', isCorrect: false },
              { id: 'd', text: 'Et solidaritetsfond opprettet av EU', isCorrect: false },
            ],
            solution: 'Der Solidaritatszuschlag (solidaritetstillegget) var en ekstraskatt alle tyskere betalte for a finansiere gjenoppbyggingen i de ostlige delstatene. Den varte helt til 2021 for de fleste skattebetalere.',
          },
          {
            id: 'tysk-3-11-4-n-quiz2-q3',
            task: 'Hva handler filmen "Good Bye, Lenin!" om?',
            options: [
              { id: 'a', text: 'Sovjetunionens fall og Gorbatsjovs reformer', isCorrect: false },
              { id: 'b', text: 'En ung mann som holder gjenforeningen hemmelig for sin DDR-tro mor etter hennes koma', isCorrect: true },
              { id: 'c', text: 'Byggingen av Berlinmuren i 1961', isCorrect: false },
              { id: 'd', text: 'Stasis overvaking av DDR-borgere', isCorrect: false },
            ],
            solution: 'Good Bye, Lenin! (2003) handler om en ung mann som gjenskaper DDR-verdenen rundt sin mor etter at hun vakner fra koma, for a beskytte henne mot sjokket over gjenforeningen. Filmen viser Ostalgien og gjenforeningens menneskelige utfordringer.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-4-n-section4',
      type: 'text',
      content: `## Det moderne Tyskland - fremdeles pa vei

I dag er Tyskland et forent land, men det finnes fortsatt forskjeller mellom ost og vest. Lonnsgapet er der fremdeles: ost-tyskere tjener i gjennomsnitt mindre enn vest-tyskere. Politisk er det storre oppslutning om populistiske partier i de ostlige delstatene. De ulike erfaringene og minnene fra DDR-tiden og gjenforeningen preger fremdeles den offentlige debatten.

Men det skjer ogsa en gradvis utjevning, saerlig blant de yngre generasjonene som har vokst opp i det gjenforente Tyskland. For dem er muren noe de leser om i historieboker, ikke noe de husker. Byer som Leipzig, Dresden og Berlin har blomstret og blitt dynamiske kultursentre. **Die innere Einheit**, den indre enheten, det a virkelig vokse sammen som ett folk, ikke bare formelt og okonomisk men ogsa sosialt og kulturelt, er en prosess som fremdeles pagar.

Hvert ar, den 3. oktober, feires **der Tag der Deutschen Einheit** som nasjonaldag. Det er en dag for a feire det som ble oppnadd, men ogsa for a reflektere over det som gjenstar. For gjenforeningen er ikke bare en historisk hendelse som fant sted i 1990. Det er en pagaende prosess, et prosjekt som hver generasjon ma bidra til.`,
    },
    {
      id: 'tysk-3-11-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa det moderne Tyskland:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'tysk-3-11-4-n-quiz3-q0',
            task: 'Hva betyr "die innere Einheit"?',
            options: [
              { id: 'a', text: 'Den formelle gjenforeningen av Tyskland', isCorrect: false },
              { id: 'b', text: 'Det a virkelig vokse sammen som ett folk, sosialt og kulturelt', isCorrect: true },
              { id: 'c', text: 'Gjenoppbyggingen av Berlinmuren som museum', isCorrect: false },
              { id: 'd', text: 'Avviklingen av DDR-institusjoner', isCorrect: false },
            ],
            solution: 'Die innere Einheit (den indre enhet) betyr a virkelig vokse sammen som ett folk - ikke bare formelt og okonomisk, men ogsa sosialt og kulturelt. Det er en prosess som fremdeles pagar i Tyskland.',
          },
          {
            id: 'tysk-3-11-4-n-quiz3-q1',
            task: 'Hvilken dato feires som Tysklands nasjonaldag?',
            options: [
              { id: 'a', text: '9. november', isCorrect: false },
              { id: 'b', text: '3. oktober', isCorrect: true },
              { id: 'c', text: '27. januar', isCorrect: false },
              { id: 'd', text: '8. mai', isCorrect: false },
            ],
            solution: 'Der Tag der Deutschen Einheit feires 3. oktober, datoen for den offisielle gjenforeningen i 1990. 9. november (murens fall) ble ikke valgt som nasjonaldag fordi det ogsa er datoen for Krystallnatten i 1938.',
          },
          {
            id: 'tysk-3-11-4-n-quiz3-q2',
            task: 'Hva lovte forbundskansler Helmut Kohl befolkningen i ost?',
            options: [
              { id: 'a', text: 'Gratis reiser til vest', isCorrect: false },
              { id: 'b', text: 'At Berlinmuren aldri skulle bygges opp igjen', isCorrect: false },
              { id: 'c', text: '"Bluhende Landschaften" - blomstrende landskap', isCorrect: true },
              { id: 'd', text: 'At alle DDR-lover skulle beholdes', isCorrect: false },
            ],
            solution: '"Bluhende Landschaften" (blomstrende landskap) var Helmut Kohls beroemte lofte om at de ostlige delstatene raskt ville oppna okonomisk velstand. Det tok langt lengre tid enn lovet, og uttrykket ble ofte brukt ironisk.',
          },
        ],
      },
    },
    {
      id: 'tysk-3-11-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har i dette kapittelet fulgt de dramatiske hendelsene fra natten 9. november 1989, da Berlinmuren falt, til det gjenforente Tysklands utfordringer i dag. Vi har sett hvordan en tilfeldig formulering pa en pressekonferanse utloste **der Mauerfall**, og hvordan **die Wende** ledet til den offisielle gjenforeningen den 3. oktober 1990.

Vi har ogsa sett baksiden av gjenforeningen: **die Treuhandanstalt** som la ned tusenvis av bedrifter, massearbeidsloshet i **die neuen Bundeslander**, **der Solidaritatszuschlag** som ekstraskatt, og kulturkloeften mellom "Ossis" og "Wessis". Vi har laert om **die Ostalgie**, nostalgien for deler av DDR-hverdagen, og filmen *Good Bye, Lenin!* som viser gjenforeningens menneskelige kostnader.

De viktigste tyske begrepene er **die Wiedervereinigung** (gjenforeningen), **die Wende** (vendepunktet), **der Mauerfall** (murens fall), **die Ostalgie** (nostalgi for DDR), **der Solidaritatszuschlag** (solidaritetstillegget), **die innere Einheit** (den indre enhet), **der Einigungsvertrag** (gjenforeningsavtalen) og **der Tag der Deutschen Einheit** (den tyske nasjonaldagen 3. oktober). Gjenforeningen er ikke bare en historisk hendelse, men en pagaende prosess som handler om a bli ett folk, ikke bare ett land.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.1 NARRATIV: Die Energiewende
// ============================================================================

export const CHAPTER_TYSK_3_12_1_NARRATIV: TextbookChapter = {
  id: 'tysk-3-12-1-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '12.1',
  title: 'Die Energiewende',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om Tysklands ambisiose energiomstilling -- fra atomkraft og kull til vindmoller og solceller, og hva det betyr for fremtiden.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer',
  ],
  linkedChapterId: 'tysk-3-12-1',
  content: [
    {
      id: 'tysk-3-12-1-n-intro',
      type: 'text',
      content: `## Da Tyskland bestemte seg for a snu alt pa hodet

Forestill deg at du er i Nord-Tyskland en klar vinterdag. Sa langt oyet rekker, ser du hvite vindturbiner som dreier seg rolig mot den gra himmelen. Pa takene til husene glitrer morkebla solcellepaneler. Et kullkraftverk i det fjerne star fortsatt og ryker, men alle vet at dagene er talte. Velkommen til **die Energiewende** -- den tyske energiomstillingen.

Begrepet "Energiewende" er blitt et internasjonalt ord. Det beskriver Tysklands storslatte plan om a gjenomfore en fullstendig overgang fra fossil og kjernefysisk energi til **erneuerbare Energien** -- fornybare energikilder som sol, vind og biomasse. Det er et av de mest ambisiose energiprosjektene noe land har tatt pa seg, og det pavirker alt fra storpolitikk til stromregningen til vanlige familier.

Men hvordan kom Tyskland hit? For a forsta det, ma vi forst ga tilbake til den 11. mars 2011, da en tsunami traff kysten av Japan og forandret tysk energipolitikk for alltid.`,
    },
    {
      id: 'tysk-3-12-1-n-section1',
      type: 'text',
      content: `## Fukushima og Atomausstieg -- nar frykten endret politikken

Den 11. mars 2011 utloste et kraftig jordskjelv utenfor Japans ostkyst en enorm tsunami. Bolgen traff kjernekraftverket Fukushima Daiichi og forarsaker en av historiens verste atomulykker. I Tyskland satt folk klistret til TV-skjermene. Bildene av eksplosjoner og radioaktive utslipp vekket en dyp frykt som hadde ligget latent i det tyske samfunnet i artier.

For Tyskland hadde alltid hatt et komplisert forhold til kjernekraft. Allerede pa 1970-tallet demonstrerte folk mot **Atomkraftwerke** (atomkraftverk), og den tyske anti-atombevegelsen var en av de sterkeste i Europa. Na, i kjolvannet av Fukushima, handlet politikerne raskt. Den konservative forbundskansleren Angela Merkel -- som faktisk hadde vaert positiv til kjernekraft -- annonserte en fullstendig utfasing: **der Atomausstieg**.

Beslutningen var dramatisk: alle tyske atomkraftverk skulle stenges. Planen ble gjennomfort trinn for trinn, og den 15. april 2023 ble de tre siste reaktorene sladd av. Et helt land hadde bestemt seg for a si nei til en energikilde som hadde levert rundt en fjerdedel av strommen deres.

Men var det riktig? Debatten raser fortsatt. De som er **fur den Ausstieg** (for utfasingen) papeker at atomkraft er for farlig -- "Die Risiken eines Unfalls sind nicht kalkulierbar" (risikoen ved en ulykke kan ikke beregnes). Dessuten er problemet med **die Endlagerung** (sluttlagring) av radioaktivt avfall fortsatt ulost.

De som er **gegen den Ausstieg** (mot utfasingen) argumenterer med at kjernekraft ikke produserer CO₂ -- "Kernenergie produziert keinen CO₂-Ausstoß." Og de mener at fornybar energi alene ikke kan dekke behovet: "Erneuerbare Energien konnen den Bedarf allein nicht decken." Etter utfasingen har Tyskland faktisk matte oke bruken av naturgass og kull midlertidig, noe som har gitt kritikerne vann pa molla.

For a forstae denne debatten trenger du nokkelord som **die Laufzeitverlängerung** (forlengelse av driftstid), **die Versorgungssicherheit** (forsyningssikkerhet) og **die Energiespeicherung** (energilagring). Disse begrepene dukker opp igjen og igjen i tysk politisk debatt.`,
    },
    {
      id: 'tysk-3-12-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-1-n-quiz1-q0',
            task: 'Hva betyr "die Energiewende" pa norsk?',
            options: [
              { id: 'a', text: 'Energikrisen', isCorrect: false },
              { id: 'b', text: 'Energiomstillingen', isCorrect: true },
              { id: 'c', text: 'Energiforsyningen', isCorrect: false },
              { id: 'd', text: 'Energiproduksjonen', isCorrect: false },
            ],
            solution: '"Die Energiewende" betyr energiomstillingen. "Wende" betyr vending eller omstilling, og begrepet beskriver Tysklands overgang fra fossil og kjernefysisk energi til fornybare kilder.',
          },
          {
            id: 'tysk-3-12-1-n-quiz1-q1',
            task: 'Nar ble det siste tyske atomkraftverket stengt?',
            options: [
              { id: 'a', text: '2020', isCorrect: false },
              { id: 'b', text: '2022', isCorrect: false },
              { id: 'c', text: '2023', isCorrect: true },
              { id: 'd', text: '2025', isCorrect: false },
            ],
            solution: 'Det siste tyske atomkraftverket ble stengt i april 2023. Beslutningen om Atomausstieg ble tatt etter Fukushima-ulykken i 2011.',
          },
          {
            id: 'tysk-3-12-1-n-quiz1-q2',
            task: 'Hva betyr "die Endlagerung"?',
            options: [
              { id: 'a', text: 'Energilagring', isCorrect: false },
              { id: 'b', text: 'Sluttlagring av radioaktivt avfall', isCorrect: true },
              { id: 'c', text: 'Driftstid for kraftverk', isCorrect: false },
              { id: 'd', text: 'Utbygging av strommnettet', isCorrect: false },
            ],
            solution: '"Die Endlagerung" betyr sluttlagring -- altsa permanent lagring av radioaktivt avfall. Problemet er fortsatt ulost i Tyskland, noe som er et viktig argument for utfasingen av atomkraft.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-1-n-section2',
      type: 'text',
      content: `## Vindmoller og solceller -- de nye gigantene

Sa hva skal erstatte atomkraften og kullet? Svaret blaser deg bokstavelig talt i ansiktet nar du besoker Nord-Tyskland: **die Windkraft** -- vindkraft. Vindenergi er na den viktigste stromkilden i landet. Tusenvis av vindturbiner star spredt utover det flate nordtyske landskapet, og ute pa **Nord- og Ostsee** (Nord- og Ostersjoen) ligger enorme **Offshore-Windanlagen** (havvindanlegg) forankret i havbunnen.

Men det er ikke bare vind. Nar sola skinner pa Bayerns landsbyer, arbeider millioner av **Photovoltaikanlagen** (solcelleanlegg) i det stille. Tyskland har investert massivt i **die Solarenergie** (solenergi), og pa mange dager produserer solcellene mer strom enn landet trenger akkurat der og da.

I tillegg kommer **die Wasserkraft** (vannkraft), **die Biomasse** og **die Geothermie** (geotermisk energi). Og pa horisonten venter **das Wasserstoff** (hydrogen) som en mulig fremtidig losnokkel -- spesielt for industri og tungtransport.

Tyskland har vedtatt ambisiose mal: innen 2030 skal **80 prosent** av all strom komme fra fornybare kilder. Og innen 2045 skal landet vaere helt **klimaneutral** -- det betyr netto null utslipp av drivhusgasser. For a na dit, ma ogsa **der Kohleausstieg** (utfasing av kull) gjennomfores. Planen er a stenge alle **Kohlekraftwerke** (kullkraftverk) innen 2038, men mange politikere og aktivister vil fremskynde denne datoen.

Et sentralt verktoy i denne omstillingen er **das Erneuerbare-Energien-Gesetz**, ofte forkortet EEG -- loven om fornybar energi. Denne loven garanterer produsentene av fornybar energi en fast pris for strommen de leverer til nettet, den sakalte **Einspeisevergutung** (innatingsavgodgjorelse). Det er denne loven som har gjort det lonnsomt for vanlige huseierne a investere i solceller pa taket.`,
    },
    {
      id: 'tysk-3-12-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-1-n-quiz2-q0',
            task: 'Hvilken energikilde er na den viktigste stromkilden i Tyskland?',
            options: [
              { id: 'a', text: 'Solenergi', isCorrect: false },
              { id: 'b', text: 'Vindkraft', isCorrect: true },
              { id: 'c', text: 'Kjernekraft', isCorrect: false },
              { id: 'd', text: 'Vannkraft', isCorrect: false },
            ],
            solution: 'Vindkraft (die Windkraft) er na den viktigste stromkilden i Tyskland. Tusenvis av vindturbiner star spredt utover Nord-Tyskland og pa havet (Offshore-Windanlagen).',
          },
          {
            id: 'tysk-3-12-1-n-quiz2-q1',
            task: 'Nar planlegger Tyskland a stenge alle kullkraftverk?',
            options: [
              { id: 'a', text: 'Innen 2030', isCorrect: false },
              { id: 'b', text: 'Innen 2035', isCorrect: false },
              { id: 'c', text: 'Innen 2038', isCorrect: true },
              { id: 'd', text: 'Innen 2045', isCorrect: false },
            ],
            solution: 'Der Kohleausstieg (utfasing av kull) er planlagt gjennomfort innen 2038. Mange politikere og aktivister onsker imidlertid a fremskynde denne datoen.',
          },
          {
            id: 'tysk-3-12-1-n-quiz2-q2',
            task: 'Hva er en "Photovoltaikanlage"?',
            options: [
              { id: 'a', text: 'Et vindkraftverk', isCorrect: false },
              { id: 'b', text: 'Et atomkraftverk', isCorrect: false },
              { id: 'c', text: 'Et solcelleanlegg', isCorrect: true },
              { id: 'd', text: 'Et vannkraftverk', isCorrect: false },
            ],
            solution: 'En Photovoltaikanlage er et solcelleanlegg -- paneler som omdanner sollys til elektrisk energi. Millioner av disse finnes pa hustak i Tyskland.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-1-n-section3',
      type: 'text',
      content: `## Utfordringene -- nar vinden ikke blaser

Men Energiewende er ikke bare en solskinnhistorie. Det finnes store utfordringer som Tyskland sliter med, og disse er noe av det mest debatterte i tysk politikk.

Det forste problemet er **der Netzausbau** -- utbyggingen av stromnettet. Mesteparten av vindkraften produseres i nord, men den stromkrevende industrien befinner seg i sor. Strommen ma transporteres over enorme avstander, men utbyggingen av hoyspenningslinjer henger etter. Som en tysk tekst beskriver det: "Der Ausbau der Stromnetze hinkt dem Ausbau der erneuerbaren Energien hinterher." -- utbyggingen av stromnettet henger etter utbyggingen av fornybar energi.

Det andre problemet er **die Energiespeicherung** -- energilagring. Hva gjor man nar det er vindstille og overskyet (bewolkt)? Da produseres det lite strom fra sol og vind, og det kan oppsta flaskehalser -- det tyske ordet er **der Engpass**. Batterilagring og hydrogen er mulige losninger, men teknologien er forelopig ikke moden nok til a dekke behovet.

Det tredje problemet er **der Strompreis** -- stromprisen. Tyske forbrukere betaler noen av Europas hoyeste strompriser, blant annet fordi overgangen til fornybar energi koster mye. Noen kritikere mener at vanlige folk ma betale prisen for politikernes gronne ambisjoner.

Likevel: framgangen er betydelig. I 2023 kom over halvparten av Tysklands strom fra fornybare kilder for forste gang. Og sammenligner vi Tysklands energimiks med Norges, ser vi en interessant kontrast: Norge produserer nesten all sin strom fra **vannkraft** (die Wasserkraft), mens Tyskland satser pa en kombinasjon av vind og sol. Begge land har mye a laere av hverandre -- Deutschland kann von Norwegens Erfahrung mit Wasserkraft lernen, og Norwegen kan la seg inspirere av Tysklands massive utbygging av sol og vind.`,
    },
    {
      id: 'tysk-3-12-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-1-n-quiz3-q0',
            task: 'Hva er hovedproblemet med stromnettet i Tyskland?',
            options: [
              { id: 'a', text: 'Det er for mange kraftverk i sor', isCorrect: false },
              { id: 'b', text: 'Vindkraften produseres i nord, men industrien er i sor, og ledningene mangler', isCorrect: true },
              { id: 'c', text: 'Stromnettet er for gammelt til a brukes', isCorrect: false },
              { id: 'd', text: 'Det finnes ikke nok stromkunder', isCorrect: false },
            ],
            solution: 'Utbyggingen av stromnettet (Netzausbau) henger etter. Vindkraften produseres mest i nord, men den stromkrevende industrien er i sor. Hoyspenningslinjene (die Leitungen) som trengs for a transportere strommen, mangler.',
          },
          {
            id: 'tysk-3-12-1-n-quiz3-q1',
            task: 'Hva betyr "der Engpass"?',
            options: [
              { id: 'a', text: 'Energilagring', isCorrect: false },
              { id: 'b', text: 'Vindstille dag', isCorrect: false },
              { id: 'c', text: 'Flaskehals / mangelsituasjon', isCorrect: true },
              { id: 'd', text: 'Stromkabel', isCorrect: false },
            ],
            solution: '"Der Engpass" betyr flaskehals eller mangelsituasjon. Pa vindstille, overskya dager kan det oppsta Engpasse i stromforsyningen fordi lite fornybar energi produseres.',
          },
          {
            id: 'tysk-3-12-1-n-quiz3-q2',
            task: 'Hva er Norges viktigste energikilde for stromproduksjon?',
            options: [
              { id: 'a', text: 'Vindkraft', isCorrect: false },
              { id: 'b', text: 'Solenergi', isCorrect: false },
              { id: 'c', text: 'Olje og gass', isCorrect: false },
              { id: 'd', text: 'Vannkraft', isCorrect: true },
            ],
            solution: 'Norge produserer nesten all sin strom fra vannkraft (die Wasserkraft). Dette er en stor kontrast til Tyskland, som satser pa en kombinasjon av vind- og solenergi.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi fulgt Tysklands reise gjennom **die Energiewende** -- en av verdens mest ambisiose energiomstillinger.

**Hovedpunkter:**
- **Die Energiewende** er Tysklands overgang fra fossil og kjernefysisk energi til fornybare kilder
- **Der Atomausstieg** ble utlost av Fukushima-ulykken i 2011 -- det siste atomkraftverket stengte i april 2023
- **Der Kohleausstieg** er planlagt innen 2038 -- utfasing av alle kullkraftverk
- **Die Windkraft** er na den viktigste stromkilden, fulgt av **die Solarenergie**
- Malene er 80 % fornybar strom innen 2030 og klimanoytralitet innen 2045
- Utfordringene omfatter nettutbygging (**Netzausbau**), energilagring (**Energiespeicherung**) og hoye strompriser (**Strompreis**)

**Viktige tyske ord a huske:**
die Energiewende, die erneuerbare Energie, die Windkraft, die Solarenergie, der Kohleausstieg, das Atomkraftwerk, der Ausstieg, die Versorgungssicherheit, die Energiespeicherung, das Erneuerbare-Energien-Gesetz (EEG), die Photovoltaikanlage, der Engpass, klimaneutral`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.2 NARRATIV: Klimawandel und Umweltpolitik
// ============================================================================

export const CHAPTER_TYSK_3_12_2_NARRATIV: TextbookChapter = {
  id: 'tysk-3-12-2-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '12.2',
  title: 'Klimawandel und Umweltpolitik',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om klimaendringer, ungdomsbevegelsen Fridays for Future, CO₂-avgifter og Tysklands rolle i internasjonal klimapolitikk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke varierte strategier for spraklæring, tekstskaping og kommunikasjon',
  ],
  linkedChapterId: 'tysk-3-12-2',
  content: [
    {
      id: 'tysk-3-12-2-n-intro',
      type: 'text',
      content: `## Nar ungdommen tok gata -- klima pa tysk

Det er fredag morgen i Berlin, og tusenvis av elever og studenter strommer ut av skolene og universitetene. De holder plakater med slagord som "Es gibt keinen Planet B" og "Wir sind hier, wir sind laut, weil ihr uns die Zukunft klaut!" (Vi er her, vi er hoyrøstede, fordi dere stjeler fremtiden var!). Politiet estimerer at over 100 000 mennesker deltar. Velkommen til **Fridays for Future** i Tyskland.

**Der Klimawandel** -- klimaendringene -- er et av de mest presserende temaene i tysk politikk og samfunnsdebatt. Og kanskje ingen steder i verden har klimabevegelsen fatt like stor gjennomslagskraft som i Tyskland. For a forsta hvorfor, ma vi se pa bade historien, politikken og de konkrete tiltakene som preger det tyske klimaordskiftet.

Tyskland har en lang tradisjon for miljobevissthet. Allerede i 1994 ble miljoartikel innfort i den tyske grunnloven (Grundgesetz, Artikkel 20a). Men det er de siste arene som virkelig har satt fart pa klimapolitikken. La oss ta en titt pa de viktigste milæpælene:

- **2015:** Parisavtalen (**das Pariser Abkommen**) undertegnes
- **2019:** Fridays for Future mobiliserer hundretusener, og Klimapakke (**Klimapaket**) vedtas
- **2021:** Ny klimavernlov med skjerpede mal
- **2023:** Siste atomkraftverk stenges som del av energiomstillingen`,
    },
    {
      id: 'tysk-3-12-2-n-section1',
      type: 'text',
      content: `## Fridays for Future -- fra Greta til Luisa

Historien starter egentlig i Sverige, med en tenaring som satte seg utenfor Riksdagen med en skilt: "Skolstrejk for klimatet." Greta Thunberg ble raskt et globalt symbol, men i Tyskland fikk bevegelsen et helt eget liv -- og et eget ansikt: **Luisa Neubauer**.

Neubauer, en ung klimaaktivist fra Hamburg, ble det mest kjente ansiktet (**das bekannteste Gesicht**) i den tyske Fridays for Future-bevegelsen. Siden 2019 har hun ledet demonstrasjoner, holdt taler og konfrontert politikere med krav om handling. Og kravene var konkrete: raskere utfasing av kull (**den schnelleren Ausstieg aus der Kohle**), hoyere CO₂-avgift (**eine hohere CO₂-Steuer**) og mer investering i fornybar energi.

Det tyske uttrykket "auf die Strasse gehen" -- bokstavelig "a ga ut i gata" -- brukes i overfort betydning om a demonstrere. Og det var akkurat det hundretusener av tyskere gjorde, fredag etter fredag. Bevegelsen (**die Bewegung**) demonstrantene (**die Demonstranten**) krevde (**forderten**) blant annet (**unter anderem**) endringer som mange politikere hadde utsatt i artier.

Fridays for Future hadde reell politisk effekt. Bevegelsen bidro til at **Die Grunen** (De gronne) fikk sitt beste valgresultat noensinne ved forbundsdagsvalget i 2021, og ble del av regjeringen. Partiet presset igjennom strengere klimamal og storre investeringer i fornybar energi.

For a snakke om klimapolitikk pa tysk trenger du ord som **der Klimaschutz** (klimavern), **das Klimaschutzgesetz** (klimavernloven), **das Umweltbundesamt** (miljovernmyndigheten) og **der Emissionshandel** (utslippshandel). Og du bor kjenne uttrykket "das Klimaziel verfehlen" -- a bomme pa klimamalet -- fordi det dessverre er et uttrykk som brukes ofte i tysk media.`,
    },
    {
      id: 'tysk-3-12-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-2-n-quiz1-q0',
            task: 'Hvem er det mest kjente ansiktet i den tyske Fridays for Future-bevegelsen?',
            options: [
              { id: 'a', text: 'Greta Thunberg', isCorrect: false },
              { id: 'b', text: 'Angela Merkel', isCorrect: false },
              { id: 'c', text: 'Luisa Neubauer', isCorrect: true },
              { id: 'd', text: 'Robert Habeck', isCorrect: false },
            ],
            solution: 'Luisa Neubauer fra Hamburg er det mest kjente ansiktet (das bekannteste Gesicht) i den tyske Fridays for Future-bevegelsen. Hun har ledet demonstrasjoner og konfrontert politikere med konkrete klimakrav.',
          },
          {
            id: 'tysk-3-12-2-n-quiz1-q1',
            task: 'Hva er "der Treibhauseffekt" pa norsk?',
            options: [
              { id: 'a', text: 'Drivkraften', isCorrect: false },
              { id: 'b', text: 'Drivhuseffekten', isCorrect: true },
              { id: 'c', text: 'Treibstoffeffekten', isCorrect: false },
              { id: 'd', text: 'Klimaeffekten', isCorrect: false },
            ],
            solution: '"Der Treibhauseffekt" betyr drivhuseffekten. "Treibhaus" betyr drivhus, og effekten beskriver hvordan visse gasser i atmosfaeren holder pa varmen, slik et drivhus gjor.',
          },
          {
            id: 'tysk-3-12-2-n-quiz1-q2',
            task: 'Hva betyr "auf die Strasse gehen" i overfort betydning?',
            options: [
              { id: 'a', text: 'A flytte til en annen by', isCorrect: false },
              { id: 'b', text: 'A ga tur i byen', isCorrect: false },
              { id: 'c', text: 'A demonstrere / protestere', isCorrect: true },
              { id: 'd', text: 'A krysse veien', isCorrect: false },
            ],
            solution: '"Auf die Strasse gehen" betyr bokstavelig "a ga ut i gata", men brukes i overfort betydning om a demonstrere eller protestere. Det er et vanlig uttrykk i tysk politisk sprak.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-2-n-section2',
      type: 'text',
      content: `## CO₂-Steuer og Parisavtalen -- pengene og lovnadene

Men demonstrasjoner alene endrer ikke utslippstall. Det gjor derimot politiske tiltak. Et av de mest omdiskuterte er **die CO₂-Steuer** -- CO₂-avgiften.

Siden 2021 ma alle som bruker fossile brennstoffer i Tyskland -- enten det er bensin, diesel, naturgass eller fyringsolje -- betale en avgift per tonn CO₂ som slippes ut. Prisen har steget trinnvis (**schrittweise**): fra 25 euro per tonn i 2021 til 45 euro i 2024. Logikken er enkel: gjor det dyrere a forurense, sa velger folk og bedrifter renere alternativer. Formalet er a fremme (**fordern**) overgangen (**der Umstieg**) til klimavennlige losninger.

Men kritikere bemerenker (**bemangeln**) at avgiften belaster de som har minst. En familie som bor pa landsbygda og er avhengig av bilen, merker prisstigningen langt mer enn en velstaende byboer med elbil og solceller pa taket. Uttrykket er at CO₂-avgiften "sozial Schwachere besonders belastet" -- belaster sosialt svakere grupper spesielt.

Pa det internasjonale planet er **das Pariser Abkommen** (Parisavtalen) fra 2015 selve rammeverket for klimapolitikken. 195 stater undertegnet (**unterzeichneten**) denne avtalen (**diesen Vertrag**) med et hovedmal: a begrense den globale oppvarmingen til "deutlich unter 2 Grad Celsius" sammenlignet med det forindustrielle nivaet (**das vorindustrielle Niveau**).

Tyskland har forpliktet seg (**sich verpflichtet**) til a senke sine utslipp av drivhusgasser (**Treibhausgasemissionen**) med minst 65 prosent innen 2030, sammenlignet med 1990-nivaet. Det er et ambisiost mal, og det er slett ikke sikkert at landet klarer a na det. Begrepet "das Klimaziel verfehlen" (a bomme pa klimamalet) er blitt nesten like vanlig som malet selv.`,
    },
    {
      id: 'tysk-3-12-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-2-n-quiz2-q0',
            task: 'Hva er Tysklands mal for reduksjon av drivhusgasser innen 2030 (sammenlignet med 1990)?',
            options: [
              { id: 'a', text: 'Minst 40 prosent', isCorrect: false },
              { id: 'b', text: 'Minst 55 prosent', isCorrect: false },
              { id: 'c', text: 'Minst 65 prosent', isCorrect: true },
              { id: 'd', text: 'Minst 80 prosent', isCorrect: false },
            ],
            solution: 'Tyskland har forpliktet seg til a senke drivhusgassutslippene med minst 65 prosent innen 2030 sammenlignet med 1990-niva. Dette er nedfelt i Klimaschutzgesetz (klimavernloven).',
          },
          {
            id: 'tysk-3-12-2-n-quiz2-q1',
            task: 'Nar ble Parisavtalen undertegnet?',
            options: [
              { id: 'a', text: '2010', isCorrect: false },
              { id: 'b', text: '2015', isCorrect: true },
              { id: 'c', text: '2019', isCorrect: false },
              { id: 'd', text: '2021', isCorrect: false },
            ],
            solution: 'Das Pariser Abkommen (Parisavtalen) ble undertegnet i 2015 av 195 stater. Malet er a begrense global oppvarming til under 2 grader Celsius sammenlignet med forindustrielt niva.',
          },
          {
            id: 'tysk-3-12-2-n-quiz2-q2',
            task: 'Hva er hovedkritikken mot CO₂-avgiften i Tyskland?',
            options: [
              { id: 'a', text: 'Den er for lav til a ha noen effekt', isCorrect: false },
              { id: 'b', text: 'Den belaster sosialt svakere grupper spesielt', isCorrect: true },
              { id: 'c', text: 'Den gjelder bare for industrien', isCorrect: false },
              { id: 'd', text: 'Den ble innfort uten Stortingets godkjenning', isCorrect: false },
            ],
            solution: 'Kritikerne mener at CO₂-avgiften belaster sosialt svakere grupper spesielt ("sozial Schwachere besonders belastet"). Familier pa landsbygda som er avhengige av bilen, rammes hardere enn velstaende byboere.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-2-n-section3',
      type: 'text',
      content: `## Konsekvensene banker pa dora

Klimadebatten i Tyskland er ikke bare abstrakt politikk. Konsekvensene av **die Erderwarmung** (global oppvarming) er allerede synlige -- og de treffer hardt.

Sommeren 2021 ble deler av Rheinland-Pfalz og Nordrhein-Westfalen rammet av katastrofale oversvommelser (**Uberschwemmungen**). Over 180 mennesker mistet livet da styrtregn (**Starkregen**) fikk elver til a ga over sine bredder. Hele landsbyer ble skylt bort. Det var en painnelse om at klimaendringer ikke er noe som skjer "et annet sted" -- de skjer her og na.

Sommeren 2022 og 2023 brakte hetebølger (**Hitzewellen**) med temperaturer over 40 grader, noe som for noen tiar siden var utenkelig i Tyskland. Tørke (**Durre**) rammet landbruket og senket vannstanden i Rhinen sa mye at fraktskip ikke kunne seile. Skogbranner (**Waldbrande**) brøt ut i Brandenburg.

Det tyske vokabularet for klimakonsekvenser er dessverre blitt stadig mer relevant: **der Anstieg des Meeresspiegels** (stigning av havnivaet), **das Extremwetter** (ekstremaer), **der Gletscherruckgang** (tilbaketrekning av isbreer), **das Artensterben** (artsutryddelse), **die Wustenbildung** (orkenspredning). Disse ordene dukker opp i nyheter, politiske taler og hverdagssamtaler.

For mange tyskere har disse hendelsene forandret debatten fra "bor vi gjore noe?" til "gjor vi nok, raskt nok?" Og det er akkurat det spennet mellom ambisjoner og handling som preger Tysklands klimapolitikk i dag. Einerseits har landet satt ambisiose mal. Andererseits viser virkeligheten at det er vanskelig a na dem uten smertefull omstilling.`,
    },
    {
      id: 'tysk-3-12-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-2-n-quiz3-q0',
            task: 'Hva betyr "die Uberschwemmung" pa norsk?',
            options: [
              { id: 'a', text: 'Hetebølge', isCorrect: false },
              { id: 'b', text: 'Oversvommelse', isCorrect: true },
              { id: 'c', text: 'Jordskjelv', isCorrect: false },
              { id: 'd', text: 'Skogbrann', isCorrect: false },
            ],
            solution: '"Die Uberschwemmung" betyr oversvommelse. Sommeren 2021 ble deler av Tyskland rammet av katastrofale oversvommelser der over 180 mennesker mistet livet.',
          },
          {
            id: 'tysk-3-12-2-n-quiz3-q1',
            task: 'Hva betyr "das Artensterben"?',
            options: [
              { id: 'a', text: 'Dyremangfold', isCorrect: false },
              { id: 'b', text: 'Orkenspredning', isCorrect: false },
              { id: 'c', text: 'Artsutryddelse', isCorrect: true },
              { id: 'd', text: 'Isbreendring', isCorrect: false },
            ],
            solution: '"Das Artensterben" betyr artsutryddelse. "Arten" er arter og "Sterben" er doden/utryddelsen. Det er en av de alvorlige konsekvensene av klimaendringer.',
          },
          {
            id: 'tysk-3-12-2-n-quiz3-q2',
            task: 'Hvilket tysk parti styrket seg mest som folge av klimabevegelsen?',
            options: [
              { id: 'a', text: 'CDU/CSU', isCorrect: false },
              { id: 'b', text: 'SPD', isCorrect: false },
              { id: 'c', text: 'Die Grunen', isCorrect: true },
              { id: 'd', text: 'FDP', isCorrect: false },
            ],
            solution: 'Die Grunen (De gronne) fikk sitt beste valgresultat noensinne ved forbundsdagsvalget i 2021 og ble del av regjeringen. Fridays for Future-bevegelsen bidro til okt oppslutning om partiet.',
          },
          {
            id: 'tysk-3-12-2-n-quiz3-q3',
            task: 'Hva betyr uttrykket "das Klimaziel verfehlen"?',
            options: [
              { id: 'a', text: 'A sette klimamal', isCorrect: false },
              { id: 'b', text: 'A na klimamalet', isCorrect: false },
              { id: 'c', text: 'A bomme pa klimamalet', isCorrect: true },
              { id: 'd', text: 'A oke klimamalet', isCorrect: false },
            ],
            solution: '"Das Klimaziel verfehlen" betyr a bomme pa klimamalet. "Verfehlen" betyr a bomme pa / ikke na. Dessverre er dette et uttrykk som brukes ofte i tysk media.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett pa klimaendringer og miljopolitikk i Tyskland -- fra gatene med demonstranter til de internasjonale forhandlingsbordene.

**Hovedpunkter:**
- **Der Klimawandel** er et sentralt tema i tysk politikk og samfunn
- **Fridays for Future** med Luisa Neubauer har hatt reell politisk innvirkning pa tysk klimapolitikk
- **Die CO₂-Steuer** gjor fossile brennstoffer dyrere for a fremme gronne alternativer -- men belaster ogsa sosialt svakere grupper
- **Das Pariser Abkommen** (2015) forplikter Tyskland til a senke utslippene med minst 65 % innen 2030
- **Die Grunen** ble styrket politisk av klimabevegelsen
- Konsekvensene av klimaendringer er allerede synlige: hetebølger, oversvommelser, torke og skogbranner

**Viktige tyske ord a huske:**
der Klimawandel, die Erderwarmung, der Treibhauseffekt, die CO₂-Steuer, das Pariser Abkommen, das Klimaziel, die Emissionen, die Uberschwemmung, die Hitzewelle, die Durre, das Artensterben, die Klimaneutralitat, der okologische Fussabdruck`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.3 NARRATIV: Nachhaltiger Konsum
// ============================================================================

export const CHAPTER_TYSK_3_12_3_NARRATIV: TextbookChapter = {
  id: 'tysk-3-12-3-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '12.3',
  title: 'Nachhaltiger Konsum',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om baerekraftig forbruk i Tyskland -- fra kildesortering og panteautomater til emballasjefrie butikker og sirkulaerokonomi.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kommunisere med god uttale, variert ordforrad og avanserte strukturer',
  ],
  linkedChapterId: 'tysk-3-12-3',
  content: [
    {
      id: 'tysk-3-12-3-n-intro',
      type: 'text',
      content: `## Soppelsortering som livsfilosofi

Du star i kjokkenet til en tysk vertsfamilie. Det er din forste dag som utvekslingselev i Freiburg, og du skal kaste en yoghurtbeger. Du apner skapdora under vasken og oppdager -- ikke en, ikke to, men *fire* ulike soppelboller. Pluss en brun boks pa benken. Vertsmoren din, Frau Muller, smiler talmoding og forklarer: "Den gule er for emballasje, den bla for papir, den brune for matavfall, den gra for restavfall, og glassflasker tar vi med til containeren pa gata -- sortert etter farge, selvfolgelig."

Velkommen til **die Mulltrennung** -- kildesortering pa tysk vis. I Tyskland er avfallssortering ikke bare en anbefaling; det er naermest en nasjonal disiplin. Og det er bare en liten del av et storre bilde: **nachhaltiger Konsum** -- baerekraftig forbruk.

Tyskland er kjent for sin sterke miljobevissthet, og **die Nachhaltigkeit** (baerekraft) er blitt et nokkelbegrep i alt fra politikk til reklame. Mange tyskere lever etter prinsippet om a redusere sitt **okologische Fussabdruck** (okologiske fotavtrykk), og de har utviklet systemer og vaner som kan overraske besokende fra andre land.`,
    },
    {
      id: 'tysk-3-12-3-n-section1',
      type: 'text',
      content: `## Die Mulltrennung -- et fargekart for avfall

La oss starte med selve grunnmuren i tysk miljohverdag: **die Mulltrennung** -- kildesortering. I de fleste tyske byer sorterer man avfall i opptil seks kategorier, og hver kategori har sin egen fargekodede beholder.

**Die Gelbe Tonne** (den gule beholderen) er for emballasje -- plastikk, metall og sammensatte materialer. Her havner yoghurtbegre, hermetikkbokser og plastposer. **Die Blaue Tonne** (den bla beholderen) er for papir og kartong -- alt fra aviser til pizzaesker. **Die Biotonne** (den brune beholderen) tar imot biologisk avfall -- matrester, kaffegrut og hageavfall. **Die Restmulltonne** (den gra eller svarte beholderen) er for alt som ikke passer noe annet sted -- stovsugerposer, bleier og annet restavfall.

I tillegg finnes det **Glascontainere** pa gata, der du leverer glassflasker sortert etter farge: "Weissglas" (klart glass), "Braunglas" (brunt glass) og "Grunglas" (gront glass). Og for elektronikk, batterier og farlig avfall finnes det egne innsamlingspunkter.

Horer dette komplisert ut? For mange tyskere er det like naturlig som a pusse tenner. De laerer det fra barnsben av, og det a sortere feil kan faktisk fore til problemer -- i noen kommuner finnes det "Mullpolizei" (avfallsinspektorer) som kan gi advarsler eller boter for feil sortering.

De viktigste ordene a kunne er: **der Abfall** eller **der Mull** (avfall/soppel), **die Tonne** (beholder), **trennen** (a sortere/skille) og **entsorgen** (a kaste/kvitte seg med). Nar du mestrer disse, kan du snakke om avfall som en ekte tysker!`,
    },
    {
      id: 'tysk-3-12-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-3-n-quiz1-q0',
            task: 'Hvor kaster du plastikkemballasje i Tyskland?',
            options: [
              { id: 'a', text: 'Die Blaue Tonne', isCorrect: false },
              { id: 'b', text: 'Die Gelbe Tonne', isCorrect: true },
              { id: 'c', text: 'Die Biotonne', isCorrect: false },
              { id: 'd', text: 'Die Restmulltonne', isCorrect: false },
            ],
            solution: 'Plastikkemballasje kastes i den gule beholderen (die Gelbe Tonne). Den gule tonnen er for all slags emballasje -- plast, metall og sammensatt emballasje.',
          },
          {
            id: 'tysk-3-12-3-n-quiz1-q1',
            task: 'Hva horer hjemme i "die Biotonne"?',
            options: [
              { id: 'a', text: 'Plastikkposer og metall', isCorrect: false },
              { id: 'b', text: 'Papir og kartong', isCorrect: false },
              { id: 'c', text: 'Matrester og hageavfall', isCorrect: true },
              { id: 'd', text: 'Elektronikk og batterier', isCorrect: false },
            ],
            solution: 'Die Biotonne (den brune beholderen) er for biologisk avfall -- matrester, kaffegrut, epleskrotter og hageavfall som lauv og gressklipp.',
          },
          {
            id: 'tysk-3-12-3-n-quiz1-q2',
            task: 'Hva betyr verbet "trennen" i sammenhengen "Mulltrennung"?',
            options: [
              { id: 'a', text: 'A kaste', isCorrect: false },
              { id: 'b', text: 'A brenne', isCorrect: false },
              { id: 'c', text: 'A sortere / skille', isCorrect: true },
              { id: 'd', text: 'A samle', isCorrect: false },
            ],
            solution: '"Trennen" betyr a sortere eller skille. "Mulltrennung" er altsa soppelsortering eller kildesortering -- a skille avfallet i ulike kategorier.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-3-n-section2',
      type: 'text',
      content: `## Das Pfandsystem -- nar tomflasker er penger verdt

Har du noen gang tenkt pa hva som skjer med en tom brus- eller olflaske i Tyskland? I Norge har vi jo pantesystemet vart, men det tyske **Pfandsystem** er i en liga for seg selv nar det gjelder effektivitet.

Systemet er enkelt men genialt. Nar du kjoper en drikke i Tyskland, betaler du en liten ekstraavgift -- **das Pfand** (panten). Det finnes to typer: **Einwegpfand** (engangspant) pa 25 cent for engangsflasker og bokser, og **Mehrwegpfand** (flergangspant) pa 8 til 15 cent for flergangsflasker av glass eller tykk plast.

Nar flasken er tom, tar du den med til butikken og mater den inn i en **Pfandautomat** (panteautomat). Maskinen scanner strekkoden, teller opp verdien, og spytter ut en **Pfandbon** (pantekvittering) som du kan bruke i kassen for a fa pengene tilbake -- eller trekke fra pa neste handel.

Forskjellen mellom de to typene er viktig a forsta. **Einwegflaschen** (engangsflasker) -- typisk tynne plastflasker -- knuses i automaten og sendes til materialgjenvinning. **Mehrwegflaschen** (flergangsflasker) -- ofte tykke glassflasker -- samles inn, vaskes grundig og fylles pa nytt. En typisk tysk olflaske kan brukes opptil 50 ganger for den ma erstattes!

Systemet er ekstremt vellykket: nesten 99 % av alle Mehrwegflascher returneres. Det tyske Pfandsystem anses som et forbilde internasjonalt, og flere land har innfort lignende ordninger etter tysk modell.

Her er noen nyttige ord: **zuruckgeben** (a levere tilbake), **wiederverwenden** (a gjenbruke), **einlosen** (a lose inn -- som i a veksle inn en pantebon), **die Dose** (boks) og **die Wertstofftonne** (beholder for gjenvinnbart materiale).`,
    },
    {
      id: 'tysk-3-12-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-3-n-quiz2-q0',
            task: 'Hvor mye er Einwegpfand (engangspant) i Tyskland?',
            options: [
              { id: 'a', text: '8 cent', isCorrect: false },
              { id: 'b', text: '15 cent', isCorrect: false },
              { id: 'c', text: '25 cent', isCorrect: true },
              { id: 'd', text: '50 cent', isCorrect: false },
            ],
            solution: 'Einwegpfand (engangspant) er 25 cent per flaske eller boks. Mehrwegpfand (flergangspant) er lavere -- mellom 8 og 15 cent -- fordi disse flaskene vaskes og brukes pa nytt.',
          },
          {
            id: 'tysk-3-12-3-n-quiz2-q1',
            task: 'Hva er forskjellen pa Einwegflaschen og Mehrwegflaschen?',
            options: [
              { id: 'a', text: 'Einweg er dyrere enn Mehrweg', isCorrect: false },
              { id: 'b', text: 'Einweg knuses og resirkuleres, Mehrweg vaskes og brukes pa nytt', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell -- begge resirkuleres likt', isCorrect: false },
              { id: 'd', text: 'Mehrweg kastes i soppelet, Einweg pantes', isCorrect: false },
            ],
            solution: 'Einwegflaschen (engangsflasker) knuses og materialene resirkuleres. Mehrwegflaschen (flergangsflasker) samles inn, vaskes og fylles pa nytt -- de kan brukes opptil 50 ganger!',
          },
          {
            id: 'tysk-3-12-3-n-quiz2-q2',
            task: 'Hva betyr "die Kreislaufwirtschaft" pa norsk?',
            options: [
              { id: 'a', text: 'Kretsokonomi', isCorrect: false },
              { id: 'b', text: 'Sirkulaerokonomi', isCorrect: true },
              { id: 'c', text: 'Rundgangshandel', isCorrect: false },
              { id: 'd', text: 'Kretslopsindustri', isCorrect: false },
            ],
            solution: '"Die Kreislaufwirtschaft" betyr sirkulaerokonomi. "Kreislauf" betyr kretsløp og "Wirtschaft" betyr okonomi. Konseptet handler om a gjenbruke og resirkulere ressurser i stedet for a kaste dem.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-3-n-section3',
      type: 'text',
      content: `## Baerekraft i hverdagen -- fra Unverpackt-Laden til bildeling

Kildesortering og panteautomater er bare begynnelsen. For mange tyskere er baerekraftig livsstil noe som gjennomsyrer hele hverdagen. La oss folge Lisa og Tom, to unge tyskere som prover a leve sa miljobevisst som mulig.

Lisa handler na bare **Bioprodukte** (okologiske produkter) og tar alltid med seg sin egen pose til butikken. Hun har ogsa oppdaget **Unverpackt-Laden** -- butikker der alt selges uten emballasje (**ohne Verpackung**). Du tar med dine egne glass, poser og beholdere og fyller opp akkurat sa mye du trenger. Ris, pasta, notter, sjampo -- alt selges lost. Disse butikkene har vokst raskt i Tyskland, og det finnes hundrevis av dem spredt over hele landet.

Tom har pa sin side solgt bilen og sykler til jobb. Nar han trenger bil, bruker han **Carsharing** (bildeling). Han passer ogsa pa a redusere **die Lebensmittelverschwendung** (matsvinn) -- han planlegger matlager noyere, kjoper bare det han trenger, og bruker apper som "Too Good To Go" for a redde mat fra a bli kastet.

Begge er bevisste pa **der faire Handel** (Fair Trade) -- de kjoper kaffe, sjokolade og klaer som er produsert under rettferdige forhold. Og de handler i **Secondhandladen** (bruktbutikker) i stedet for a alltid kjope nytt.

Alt dette er del av en storerre trend mot **die Kreislaufwirtschaft** (sirkulaerokonomi). I stedet for den tradisjonelle lineaere modellen -- produser, bruk, kast -- handler det om a holde ressursene i et kretsløp: produser, bruk, reparer, gjenbruk, resirkuler. Den tyske regjeringen har vedtatt en nasjonal strategi for Kreislaufwirtschaft, og mange bedrifter utvikler nye forretningsmodeller basert pa dette prinsippet.

Og hva kan du gjore? Pa tysk uttrykker du det med "Ich kann..." -- "Ich kann mit dem Fahrrad zur Schule fahren" (jeg kan sykle til skolen), "Ich kann weniger Lebensmittel verschwenden" (jeg kan slose mindre med mat), "Ich kann den Mull besser trennen" (jeg kan sortere avfallet bedre). Sma endringer i hverdagen -- men de teller.`,
    },
    {
      id: 'tysk-3-12-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-3-n-quiz3-q0',
            task: 'Hva er en "Unverpackt-Laden"?',
            options: [
              { id: 'a', text: 'En butikk som bare selger okologisk mat', isCorrect: false },
              { id: 'b', text: 'En butikk der alt selges uten emballasje', isCorrect: true },
              { id: 'c', text: 'En bruktbutikk for klaer', isCorrect: false },
              { id: 'd', text: 'En butikk som bare selger lokale produkter', isCorrect: false },
            ],
            solution: 'En Unverpackt-Laden er en butikk der alt selges uten emballasje (ohne Verpackung). Kundene tar med egne beholdere og fyller opp det de trenger -- ris, pasta, notter, sjampo og mye mer.',
          },
          {
            id: 'tysk-3-12-3-n-quiz3-q1',
            task: 'Hva betyr "die Lebensmittelverschwendung"?',
            options: [
              { id: 'a', text: 'Mattrygghet', isCorrect: false },
              { id: 'b', text: 'Matproduksjon', isCorrect: false },
              { id: 'c', text: 'Matsvinn', isCorrect: true },
              { id: 'd', text: 'Matlagring', isCorrect: false },
            ],
            solution: '"Die Lebensmittelverschwendung" betyr matsvinn. "Lebensmittel" er matvarer og "Verschwendung" er slosing. A redusere matsvinn er en viktig del av baerekraftig forbruk.',
          },
          {
            id: 'tysk-3-12-3-n-quiz3-q2',
            task: 'Hva er hovedideen bak "die Kreislaufwirtschaft"?',
            options: [
              { id: 'a', text: 'A produsere sa mye som mulig for a oke okonomien', isCorrect: false },
              { id: 'b', text: 'A holde ressursene i et kretsløp gjennom gjenbruk og resirkulering', isCorrect: true },
              { id: 'c', text: 'A importere alle varer fra utlandet for a spare miljoet lokalt', isCorrect: false },
              { id: 'd', text: 'A kutte all produksjon og leve av naturen', isCorrect: false },
            ],
            solution: 'Kreislaufwirtschaft (sirkulaerokonomi) handler om a holde ressursene i et kretsløp: produser, bruk, reparer, gjenbruk, resirkuler -- i stedet for den lineaere modellen produser-bruk-kast.',
          },
          {
            id: 'tysk-3-12-3-n-quiz3-q3',
            task: 'Hvilket av disse er IKKE et eksempel pa baerekraftig forbruk?',
            options: [
              { id: 'a', text: 'A handle i Unverpackt-Laden', isCorrect: false },
              { id: 'b', text: 'A bruke Carsharing i stedet for egen bil', isCorrect: false },
              { id: 'c', text: 'A alltid kjope nye klaer i stedet for brukte', isCorrect: true },
              { id: 'd', text: 'A kjope Fair Trade-produkter', isCorrect: false },
            ],
            solution: 'A alltid kjope nye klaer i stedet for brukte er IKKE baerekraftig forbruk. De andre alternativene -- Unverpackt-Laden, Carsharing og Fair Trade -- er alle eksempler pa nachhaltiger Konsum.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi dykket ned i den tyske hverdagens baerekraftige sider -- fra fargerike soppelboller til panteautomater og emballasjefrie butikker.

**Hovedpunkter:**
- **Die Mulltrennung** (kildesortering) er en sentral del av tysk hverdag med opptil 6 kategorier: gul (emballasje), bla (papir), brun (bio), gra (rest), glass og spesialavfall
- **Das Pfandsystem** er en svært effektiv panteordning -- 25 cent for Einweg, 8-15 cent for Mehrweg, og nesten 99 % returrate
- **Bioprodukte** og **Unverpackt-Laden** representerer en voksende trend mot mer bevisst forbruk
- **Die Kreislaufwirtschaft** (sirkulaerokonomi) er idealet: holde ressursene i et kretsløp i stedet for a kaste dem
- Baerekraftig livsstil inkluderer ogsa Fair Trade, Carsharing, Secondhand og redusert matsvinn

**Viktige tyske ord a huske:**
der nachhaltige Konsum, die Mulltrennung, das Pfandsystem, der okologische Fussabdruck, die Kreislaufwirtschaft, das Bioprodukt, die Verpackung, die Mullvermeidung, der Einwegbecher, die Mehrwegflasche, die Lebensmittelverschwendung, der Unverpackt-Laden`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.4 NARRATIV: Naturschutz und Biodiversitat
// ============================================================================

export const CHAPTER_TYSK_3_12_4_NARRATIV: TextbookChapter = {
  id: 'tysk-3-12-4-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '12.4',
  title: 'Naturschutz und Biodiversitat',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om Tysklands naturvern -- fra vadehavets trekkfugler og Svarteskogens gauper til ulvens kontroversielle tilbakekomst og NABU.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  linkedChapterId: 'tysk-3-12-4',
  content: [
    {
      id: 'tysk-3-12-4-n-intro',
      type: 'text',
      content: `## Nar naturen far sin egen advokat

Det er tidlig morgen ved den tyske Nordsjokysten. Tidevannet har trukket seg tilbake, og sa langt du kan se, strekker det seg en endeløs flate av vat sand og sma vannpytter. En guide i gummistovler vinker deg med seg ut pa havbunnen -- ja, du leser riktig, du kan ga pa havbunnen her. Rundt deg flyr tusenvis av fugler, og under fottene kjenner du smadyr som graver seg ned i sanden. Du er i **Wattenmeer** -- Vadehavet -- et av verdens mest unike naturomrader.

Tyskland er kanskje mest kjent for biler, ol og Oktoberfest, men landet har ogsa en overraskende rik natur -- og en lang tradisjon for **Naturschutz** (naturvern). Allerede i 1836 ble det forste naturvernomradet opprettet, og i dag finnes det 16 nasjonalparker, over 100 naturparker og tusenvis av **Naturschutzgebiete** (naturvernomrader).

Men det er ikke bare idyll. **Die Biodiversitat** (biologisk mangfold) er truet av klimaendringer, urbanisering og intensivt landbruk. Ulven har kommet tilbake, men ikke alle er glade for det. Og spenningen mellom bruk og vern av naturen preger debatten i Tyskland -- akkurat som den gjor i Norge. La oss utforske dette landskapet sammen.`,
    },
    {
      id: 'tysk-3-12-4-n-section1',
      type: 'text',
      content: `## Wattenmeer -- havbunnen du kan ga pa

La oss starte med Tysklands kanskje mest spektakulaere naturomrade: **das Wattenmeer** -- Vadehavet. Siden 2009 er det UNESCO-verdensarv (**UNESCO-Weltnaturerbe**), og det er et av verdens viktigste vatmarksomrader (**Feuchtgebiete**).

Vadehavet strekker seg langs den tyske, nederlandske og danske Nordsjokysten. Det som gjor det sa spesielt, er tidevannet. To ganger om dagen trekker havet seg tilbake ved lavvann (**die Ebbe**) og avslorer enorme flater av sand og mudder. Og to ganger om dagen kommer det tilbake ved hoyvann (**die Flut**). Denne rytmen skaper et unikt okosystem der tusenvis av dyre- og plantearter lever.

Den mest populaere aktiviteten for besokende er **Wattwandern** -- a vandre pa den blottlagte havbunnen ved lavvann. Med en erfaren guide kan du ga flere kilometer ut pa det som vanligvis er hav, studere sma krabber og muskeringer, og fole deg som en oppdagelsesreisende pa en fremmed planet. Men pass pa klokka -- nar tidevannet snur, stiger vannet overraskende fort!

For fugler er Vadehavet livsviktig. Hvert ar bruker millioner av **Zugvogel** (trekkfugler) det som rasteplass pa sin lange reise mellom Afrika og Arktis. Her finner de mat og hvile for de fortsetter den strabasiose ferden. Uten Vadehavet ville mange av disse fugleartene simpelthen ikke overleve.

Nasjonalparken Wattenmeer (**der Nationalpark Wattenmeer**) beskytter (**schutzt**) dette enestaaende (**einzigartige**) okosystemet. Det er et forbilde for naturvern -- og et bevis pa at selv i et tett befolket land som Tyskland kan store naturomrader bevares for fremtidige generasjoner.`,
    },
    {
      id: 'tysk-3-12-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-4-n-quiz1-q0',
            task: 'Hva er Wattenmeer?',
            options: [
              { id: 'a', text: 'En innsjø i Bayern', isCorrect: false },
              { id: 'b', text: 'Et fjellomrade i Sveits', isCorrect: false },
              { id: 'c', text: 'Et vatmarksomrade ved Nordsjokysten', isCorrect: true },
              { id: 'd', text: 'En nasjonalpark i Schwarzwald', isCorrect: false },
            ],
            solution: 'Wattenmeer (Vadehavet) er et vatmarksomrade (Feuchtgebiet) ved den tyske Nordsjokysten. Det er UNESCO-verdensarv og et av verdens viktigste okosystemer for trekkfugler og marine arter.',
          },
          {
            id: 'tysk-3-12-4-n-quiz1-q1',
            task: 'Siden nar har Wattenmeer vaert UNESCO-verdensarv?',
            options: [
              { id: 'a', text: '1999', isCorrect: false },
              { id: 'b', text: '2005', isCorrect: false },
              { id: 'c', text: '2009', isCorrect: true },
              { id: 'd', text: '2015', isCorrect: false },
            ],
            solution: 'Vadehavet har vaert UNESCO-Weltnaturerbe (verdensarv) siden 2009. Det beskytter et unikt okosystem med tusenvis av dyre- og plantearter.',
          },
          {
            id: 'tysk-3-12-4-n-quiz1-q2',
            task: 'Hva er "Wattwandern"?',
            options: [
              { id: 'a', text: 'A svomme i Nordsjaen', isCorrect: false },
              { id: 'b', text: 'A vandre pa havbunnen ved lavvann', isCorrect: true },
              { id: 'c', text: 'A seile langs kysten', isCorrect: false },
              { id: 'd', text: 'A fiske i Vadehavet', isCorrect: false },
            ],
            solution: 'Wattwandern er a vandre pa den blottlagte havbunnen ved lavvann (Ebbe). Nar tidevannet trekker seg tilbake, kan man ga pa bunnen og utforske det unike miljoet.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-4-n-section2',
      type: 'text',
      content: `## Schwarzwald -- de morke skogens hemmeligheter

Fra Nordsjoens flate kyst reiser vi sorover til et helt annet landskap: **der Schwarzwald** -- Svarteskogen. I sorvest-Tyskland, i delstaten Baden-Wurttemberg, ligger et av Europas mest kjente skogsomrader. Navnet (**der Name**) kommer fra de morke barskogene (**dunkle Nadelwalder**) som preger omradet -- de tette granene slipper sa lite lys igjennom at skogen naermest ser svart ut.

Siden 2014 har en del av Schwarzwald hatt status som nasjonalpark (**der Nationalpark Schwarzwald**), og her far naturen lov til a utvikle seg fritt. Dode traer far ligge og raatne, noe som skaper leveomrader (**Lebensraume**) for utallige insekter, sopp og sma pattedyr.

I Schwarzwald lever sjeldne (**seltene**) dyr. **Der Auerhahn** (storfuglen) er et ikonisk symbol for omradet, med sin imponerende tokking om varen. **Der Luchs** (gaupen) er blitt gjeninnfort etter a ha vaert borte i over hundre ar. Og i hulrom i gamle traer gjemmer seg sjeldne **Fledermausarten** (flaggermusarter) som er truet av utryddelse.

Men Schwarzwald er ikke bare natur. Det er ogsa et kulturlandskap rikt pa tradisjoner. Her kommer de beromte **Kuckucksuhren** (gjokurene) fra -- de ornamenterte klokkene med mekaniske fugler som kukker pa timen. Her bakes den legendariske **Schwarzwalder Kirschtorte** -- en sjokoladekake med kirsebær og krem som har blitt verdenskjent. Og her produseres ekte **Schwarzwalder Schinken** -- rokt skinke som har vaert en delikatesse i hundrevis av ar.

Denne blandingen av natur og kultur er typisk for Tysklands tilnaerming til naturvern: det handler ikke bare om a sette opp gjerder og holde folk ute, men om a finne en balanse mellom vern og bruk, mellom tradisjon og bevaring.`,
    },
    {
      id: 'tysk-3-12-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-4-n-quiz2-q0',
            task: 'Hvorfor heter det "Schwarzwald" (Svarteskogen)?',
            options: [
              { id: 'a', text: 'Fordi traerne er svarte om vinteren', isCorrect: false },
              { id: 'b', text: 'Fordi de morke barskogene slipper lite lys igjennom', isCorrect: true },
              { id: 'c', text: 'Fordi det en gang var en stor skogbrann der', isCorrect: false },
              { id: 'd', text: 'Fordi jorden i omradet er svart', isCorrect: false },
            ],
            solution: 'Navnet Schwarzwald kommer fra de morke barskogene (dunkle Nadelwalder) som preger omradet. De tette granene slipper sa lite lys igjennom at skogen naermest ser svart ut.',
          },
          {
            id: 'tysk-3-12-4-n-quiz2-q1',
            task: 'Nar fikk Schwarzwald status som nasjonalpark?',
            options: [
              { id: 'a', text: '1970', isCorrect: false },
              { id: 'b', text: '2000', isCorrect: false },
              { id: 'c', text: '2014', isCorrect: true },
              { id: 'd', text: '2020', isCorrect: false },
            ],
            solution: 'Nationalpark Schwarzwald ble opprettet i 2014. Bayerischer Wald er derimot Tysklands eldste nasjonalpark, grunnlagt i 1970.',
          },
          {
            id: 'tysk-3-12-4-n-quiz2-q2',
            task: 'Hvilke av disse dyrene lever i Schwarzwald?',
            options: [
              { id: 'a', text: 'Ulv og bever', isCorrect: false },
              { id: 'b', text: 'Storfugl, gaupe og sjeldne flaggermus', isCorrect: true },
              { id: 'c', text: 'Isbjorn og sel', isCorrect: false },
              { id: 'd', text: 'Havorn og trekkfugler', isCorrect: false },
            ],
            solution: 'I Schwarzwald lever blant annet der Auerhahn (storfugl), der Luchs (gaupe) og sjeldne Fledermausarten (flaggermusarter). Disse er alle viktige for det biologiske mangfoldet i omradet.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-4-n-section3',
      type: 'text',
      content: `## Ulvens tilbakekomst -- nar naturen skaper konflikter

Fa temaer vekker like sterke folelser i det tyske naturverndebatten som **die Ruckkehr des Wolfs** -- ulvens tilbakekomst. Etter over 150 ar uten ulv i Tyskland dukket det forste ulveparet opp i Sachsen rundt ar 2000. Siden den gang har bestanden vokst raskt, og i dag finnes det over 180 **Wolfsrudel** (ulveflokker), hovedsakelig i Brandenburg, Sachsen og Niedersachsen.

Ulven star under strengt vern (**unter strengem Schutz**), og for naturvernere er dens tilbakekomst en stor triumf. Det viser at okosystemet kan heles, at ville dyr kan finne tilbake selv i et tett befolket land. Organisasjoner som **NABU** (Naturschutzbund Deutschland -- Tysklands naturvernforbund) og **BUND** (Bund fur Umwelt und Naturschutz Deutschland) kjemper for ulvens rett til a leve i sine naturlige **Lebensraume** (leveomrader).

Men for bondene (**die Landwirte**) er ulven et problem. Ulver angriper (**angreifen**) sau (**Schafe**) og geiter (**Ziegen**), og i noen tilfeller har hele flokker blitt drept pa en natt. Debatten er heftig (**hitzig**): naturvernere pa den ene siden, bonder pa den andre. Einerseits har ulven rett pa sin plass i naturen. Andererseits ma bondene kunne beskytte dyrene sine.

Men ulven er langt fra den eneste arten det handles om. Pa **die Rote Liste** (den rode listen over truede arter) i Tyskland star blant annet **der Seeadler** (havorn), **der Biber** (bever), **die Wildkatze** (villkatt) og **der Fischotter** (oter). Heldigvis er det ogsa suksesshistorier: havorn var naer utryddelse pa 1970-tallet, men takket vaere **Artenschutzprogramme** (artvernprogrammer) og **Wiederansiedlung** (gjeninnforing) har bestanden kommet seg kraftig.

Naturvernorganisasjonene i Tyskland driver et enormt arbeid, mye av det basert pa **ehrenamtliche Arbeit** (frivillig arbeid). NABU har over 900 000 medlemmer og ble grunnlagt allerede i 1899. Sammen med BUND og WWF Deutschland jobber de for a opprette **Schutzzonen** (vernesoner), samle inn **Spenden** (donasjoner) og organisere **Petitionen** (underskriftskampanjer) for a pavirke politikken.`,
    },
    {
      id: 'tysk-3-12-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-12-4-n-quiz3-q0',
            task: 'Nar kom ulven tilbake til Tyskland?',
            options: [
              { id: 'a', text: 'Pa 1980-tallet', isCorrect: false },
              { id: 'b', text: 'Rundt ar 2000', isCorrect: true },
              { id: 'c', text: 'I 2010', isCorrect: false },
              { id: 'd', text: 'I 2020', isCorrect: false },
            ],
            solution: 'Det forste ulveparet dukket opp i Sachsen rundt ar 2000, etter over 150 ars fravar. Siden den gang har bestanden vokst til over 180 ulveflokker (Wolfsrudel).',
          },
          {
            id: 'tysk-3-12-4-n-quiz3-q1',
            task: 'Hva star NABU for?',
            options: [
              { id: 'a', text: 'Nationale Abfallbeseitigung und Umweltschutz', isCorrect: false },
              { id: 'b', text: 'Naturschutzbund Deutschland', isCorrect: true },
              { id: 'c', text: 'Naturliche Artenbestimmung und Umweltforschung', isCorrect: false },
              { id: 'd', text: 'Norddeutsche Artenschutz- und Biologieunion', isCorrect: false },
            ],
            solution: 'NABU star for "Naturschutzbund Deutschland" (Tysklands naturvernforbund). Det er Tysklands storste naturvernorganisasjon med over 900 000 medlemmer, grunnlagt i 1899.',
          },
          {
            id: 'tysk-3-12-4-n-quiz3-q2',
            task: 'Hva er hovedkonflikten rundt ulvens tilbakekomst?',
            options: [
              { id: 'a', text: 'Ulven odelegger skogsomrader', isCorrect: false },
              { id: 'b', text: 'Ulven angriper husdyr som sau og geiter, noe som skaper konflikt med bonder', isCorrect: true },
              { id: 'c', text: 'Ulven sprer sykdommer til mennesker', isCorrect: false },
              { id: 'd', text: 'Ulven jager bort andre rovdyr', isCorrect: false },
            ],
            solution: 'Konflikten star mellom naturvernere som vil beskytte ulven og bonder (Landwirte) som opplever at ulver angriper sau (Schafe) og geiter (Ziegen). Debatten er heftig (hitzig).',
          },
          {
            id: 'tysk-3-12-4-n-quiz3-q3',
            task: 'Hva betyr "die Wiederansiedlung"?',
            options: [
              { id: 'a', text: 'Utryddelse av arter', isCorrect: false },
              { id: 'b', text: 'Registrering av truede arter', isCorrect: false },
              { id: 'c', text: 'Gjeninnforing av arter', isCorrect: true },
              { id: 'd', text: 'Jakt pa ville dyr', isCorrect: false },
            ],
            solution: '"Die Wiederansiedlung" betyr gjeninnforing av arter -- altsa a bringe tilbake dyr som har forsvunnet fra et omrade. Et eksempel er gaupen som er blitt gjeninnfort i Schwarzwald.',
          },
          {
            id: 'tysk-3-12-4-n-quiz3-q4',
            task: 'Hva betyr uttrykket "vom Aussterben bedroht"?',
            options: [
              { id: 'a', text: 'Beskyttet av loven', isCorrect: false },
              { id: 'b', text: 'Nylig oppdaget', isCorrect: false },
              { id: 'c', text: 'Truet av utryddelse', isCorrect: true },
              { id: 'd', text: 'Allerede utryddet', isCorrect: false },
            ],
            solution: '"Vom Aussterben bedroht" betyr truet av utryddelse. "Das Aussterben" er utryddelse og "bedroht" er truet. Mange arter i Tyskland star pa den rode listen (die Rote Liste) som truede.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-12-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi reist gjennom Tysklands mest fascinerende naturlandskaper og utforsket utfordringene med a verne naturen i et moderne industriland.

**Hovedpunkter:**
- **Der Naturschutz** har lang tradisjon i Tyskland, med 16 nasjonalparker og tusenvis av naturvernomrader
- **Das Wattenmeer** (Vadehavet) er UNESCO-verdensarv siden 2009 og et livsviktig omrade for millioner av trekkfugler
- **Der Schwarzwald** er et ikonisk skogsomrade med nasjonalpark siden 2014, hjem for storfugl, gaupe og sjeldne flaggermus
- **Die Ruckkehr des Wolfs** er bade en naturvernsuksess og en kilde til heftig debatt mellom naturvernere og bonder
- **NABU** og **BUND** er Tysklands storste naturvernorganisasjoner, drevet av hundretusener av frivillige
- **Die Biodiversitat** er truet av klimaendringer, urbanisering og intensivt landbruk, men artvernprogrammer gir ogsa hap

**Viktige tyske ord a huske:**
der Naturschutz, die Biodiversitat, das Naturschutzgebiet, die bedrohte Art, das Weltnaturerbe, der Nationalpark, der Lebensraum, die Renaturierung, die Artenvielfalt, der Zugvogel, das Wolfsrudel, die Wiederansiedlung, vom Aussterben bedroht, die ehrenamtliche Arbeit`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 13.1 NARRATIV: Das Bauhaus und die moderne Kunst
// ============================================================================

export const CHAPTER_TYSK_3_13_1_NARRATIV: TextbookChapter = {
  id: 'tysk-3-13-1-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '13.1',
  title: 'Das Bauhaus und die moderne Kunst',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om Bauhaus-bevegelsen, Walter Gropius, tysk ekspresjonisme, Die Brucke og Der Blaue Reiter -- og hvordan disse bevegelsene formet moderne kunst og design.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  linkedChapterId: 'tysk-3-13-1',
  content: [
    {
      id: 'tysk-3-13-1-n-intro',
      type: 'text',
      content: `## Nar kunsten bryter alle regler

Tenk deg at du star foran et maleri. Det forestiller en gate i en storby, men ingenting ser "riktig" ut. Bygningene heller i rare vinkler. Ansiktene til menneskene er forvrengte, nesten maskeaktige. Fargene er skarpe og urealistiske -- knallgronn hud, blodrode skygger, giftig gule vegger. Du foler deg urolig bare av a se pa det. Og nettopp det er poenget.

Vi er i Dresden, Tyskland, i begynnelsen av 1900-tallet. En gruppe unge kunstnere har bestemt seg for a kaste bort alle gamle regler om hvordan kunst "skal" se ut. De kaller seg **Die Brucke** -- "Broen" -- fordi de vil bygge en bro fra det gamle til det nye, fra tradisjon til fremtid. Og de er bare begynnelsen pa en kunstnerisk revolusjon som vil forandre hele den vestlige kulturen.

I dette kapittelet skal vi folge tre bevegelser som alle oppsto i Tyskland og som pa hver sin mate snudde kunstverden pa hodet: den folelsesladde **Expressionismus** med gruppene Die Brucke og Der Blaue Reiter, og den funksjonalistiske **Bauhaus**-skolen som ville forene kunst, handverk og teknologi. Disse bevegelsene virker kanskje motsetningsfylte -- raatt uttrykk mot kjolelig funksjonalisme -- men sammen forteller de historien om hvordan Tyskland ble et senter for moderne kunst og design.`,
    },
    {
      id: 'tysk-3-13-1-n-section1',
      type: 'text',
      content: `## Die Brucke -- Ekspresjonismens ville begynnelse

I 1905 satt fire arkitektstudenter i Dresden og kjente pa en dyp frustrasjon. Ernst Ludwig Kirchner, Karl Schmidt-Rottluff, Erich Heckel og Fritz Bleyl var lei av det de opplevde som borgerlig, tamt og livlost i samtidskunsten. De ville male det de *folte*, ikke det de sa. Resultatet ble gruppen **Die Brucke** -- en av de mest radikale kunstbevegelsene i europeisk historie.

Die Brucke-kunstnerne hentet inspirasjon fra uventet hold. De studerte afrikansk kunst og oseansk skulptur, fascinert av den raae energien og det ikke-naturalistiske uttrykket. De sa pa Edvard Munchs angstfylte bilder og kjente et slektskap. Og de lot seg inspirere av naturen -- men ikke den pene, romantiske naturen. Det var naturens villskap og kraft som tiltrakk dem.

Pa tysk kalles stilen **der Expressionismus** -- ekspresjonisme. Det handler om a uttrykke (auf Deutsch: *ausdrucken*) indre folelser gjennom ytre form. Ernst Ludwig Kirchner malte bylivets stress og fremmedgjoring med forvrengte former (*verzerrte Formen*) og grelle, nesten aggressive farger (*grelle Farben*). Emil Nolde, som ogsa ble tilknyttet gruppen, brukte mektige fargeflater som naesten vibrerte av folelsesmessig intensitet. Schmidt-Rottluff eksperimenterte med forenklede, nesten primitive former.

Det Die Brucke gjorde, var a si: Kunsten trenger ikke vaere pen. Kunsten trenger ikke ligne virkeligheten. Kunsten skal *fole* noe -- og fa deg til a fole noe. Og det var en revolusjonerende tanke i 1905. Gruppen holdt sammen til 1913, da indre spenninger forte til opploesning. Men da hadde de allerede forandret kunstverdenen for godt.

**Noen viktige tyske ord a merke seg:**
- **die Kunstbewegung** -- kunstbevegelse
- **der Expressionismus** -- ekspresjonisme
- **verzerrte Formen** -- forvrengte former
- **grelle Farben** -- grelle, skarpe farger`,
    },
    {
      id: 'tysk-3-13-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Die Brucke og ekspresjonismen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-1-n-quiz1-q0',
            task: 'Hvor og nar ble Die Brucke grunnlagt?',
            options: [
              { id: 'a', text: 'I Munchen i 1911', isCorrect: false },
              { id: 'b', text: 'I Dresden i 1905', isCorrect: true },
              { id: 'c', text: 'I Weimar i 1919', isCorrect: false },
              { id: 'd', text: 'I Berlin i 1900', isCorrect: false },
            ],
            solution: 'Die Brucke ble grunnlagt i Dresden i 1905 av Ernst Ludwig Kirchner, Karl Schmidt-Rottluff, Erich Heckel og Fritz Bleyl. De var fire arkitektstudenter som ville revolusjonere kunsten.',
          },
          {
            id: 'tysk-3-13-1-n-quiz1-q1',
            task: 'Hva kjennetegnet Die Brucke-kunstnernes stil?',
            options: [
              { id: 'a', text: 'Realistiske portretter med dempede farger', isCorrect: false },
              { id: 'b', text: 'Abstrakte geometriske moenstre', isCorrect: false },
              { id: 'c', text: 'Forvrengte former og grelle, aggressive farger som uttrykte indre folelser', isCorrect: true },
              { id: 'd', text: 'Minimalistisk design med fokus pa funksjon', isCorrect: false },
            ],
            solution: 'Die Brucke-kunstnerne brukte verzerrte Formen (forvrengte former) og grelle Farben (grelle farger) for a uttrykke indre folelser. De malte ikke det de sa, men det de folte.',
          },
          {
            id: 'tysk-3-13-1-n-quiz1-q2',
            task: 'Hva betyr "der Expressionismus" pa norsk?',
            options: [
              { id: 'a', text: 'Impresjonisme -- a gjengi inntrykk fra naturen', isCorrect: false },
              { id: 'b', text: 'Funksjonalisme -- at formen folger funksjonen', isCorrect: false },
              { id: 'c', text: 'Ekspresjonisme -- a uttrykke indre folelser gjennom kunsten', isCorrect: true },
              { id: 'd', text: 'Romantikk -- a male idealiserte naturscener', isCorrect: false },
            ],
            solution: 'Der Expressionismus betyr ekspresjonisme, av det tyske verbet "ausdrucken" (a uttrykke). Kunstretningen fokuserte pa a uttrykke kunstnerens indre folelser gjennom ytre form, heller enn a gjengi virkeligheten realistisk.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-1-n-section2',
      type: 'text',
      content: `## Der Blaue Reiter -- Farge, abstraksjon og det andelige

Mens Die Brucke holdt til i Dresden og malte den raae folelsen, skjedde noe annet noen hundre kilometer sor -- i Munchen. I 1911 grunnla den russisk-fodte kunstneren Wassily Kandinsky og den tyske maleren Franz Marc en ny kunstnergruppe: **Der Blaue Reiter** -- "Den bla rytteren".

Navnet var poetisk og symbolsk. Kandinsky elsket farge -- spesielt blatt, som han forbandt med det andelige. Marc elsket dyr -- spesielt hester, som han sa som renere og edlere enn mennesker. En bla rytter. Slik ble navnet til.

Der Blaue Reiter var ogsa en del av den ekspresjonistiske bevegelsen, men de var ganske forskjellige fra Die Brucke. Mens Die Brucke var raae og folelsesladde, var Der Blaue Reiter mer **abstrakt og spirituell**. Kandinsky beveget seg stadig lenger bort fra gjenkjennelige motiver og mot ren abstraksjon. Han regnes faktisk som en av de aller forste kunstnerne som malte helt abstrakte bilder -- bilder som ikke forestiller noe konkret, men som virker gjennom farge, form og komposisjon alene.

Franz Marc er kanskje mest kjent for sine fantastiske dyremalerier, der hester, rever og andre dyr skildres i rike, symbolske farger. En hest kan vaere bla, en rev rod, en ku gul. Fargene representerer ikke virkeligheten, men folelser og andelige kvaliteter.

Dessverre ble Der Blaue Reiter kortvarig. Franz Marc falt i forste verdenskrig i 1916, bare 36 ar gammel, ved Verdun. August Macke, et annet viktig medlem, doede allerede i 1914. Krigen odelag gruppen, men ideene levde videre. Kandinsky tok med seg sin visjon om abstrakt kunst til Bauhaus-skolen, der han ble en sentral laerer.

| Bevegelse | Tysk | Kjennetegn |
|-----------|------|------------|
| Die Brucke | die Brucke | Raatt, folelsesladd, sterke farger |
| Der Blaue Reiter | der Blaue Reiter | Abstrakt, spirituelt, fargeeksperimenter |
| Bauhaus | das Bauhaus | Funksjonalistisk, minimalistisk, enhet av kunst og handverk |`,
    },
    {
      id: 'tysk-3-13-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Der Blaue Reiter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-1-n-quiz2-q0',
            task: 'Hvem grunnla Der Blaue Reiter?',
            options: [
              { id: 'a', text: 'Ernst Ludwig Kirchner og Emil Nolde', isCorrect: false },
              { id: 'b', text: 'Walter Gropius og Ludwig Mies van der Rohe', isCorrect: false },
              { id: 'c', text: 'Wassily Kandinsky og Franz Marc', isCorrect: true },
              { id: 'd', text: 'Paul Klee og Marcel Breuer', isCorrect: false },
            ],
            solution: 'Der Blaue Reiter ble grunnlagt i Munchen i 1911 av den russisk-fodte Wassily Kandinsky og den tyske Franz Marc. Kandinsky regnes som en av de forste abstrakte kunstnerne.',
          },
          {
            id: 'tysk-3-13-1-n-quiz2-q1',
            task: 'Hva er den viktigste forskjellen mellom Die Brucke og Der Blaue Reiter?',
            options: [
              { id: 'a', text: 'Die Brucke malte landskaper, Der Blaue Reiter malte portretter', isCorrect: false },
              { id: 'b', text: 'Die Brucke var raatt og folelsesladd, Der Blaue Reiter var mer abstrakt og spirituelt', isCorrect: true },
              { id: 'c', text: 'Die Brucke var funksjonalistisk, Der Blaue Reiter var dekorativ', isCorrect: false },
              { id: 'd', text: 'De var helt identiske i stil og temaer', isCorrect: false },
            ],
            solution: 'Die Brucke var preget av raatt, folelsesladd uttrykk med sterke farger og forvrengte former. Der Blaue Reiter var mer abstrakt og spirituelt orientert, med fokus pa farge som andelig uttrykk og bevegelse mot ren abstraksjon.',
          },
          {
            id: 'tysk-3-13-1-n-quiz2-q2',
            task: 'Hva er Wassily Kandinsky spesielt kjent for?',
            options: [
              { id: 'a', text: 'A vaere grunnleggeren av Bauhaus-skolen', isCorrect: false },
              { id: 'b', text: 'A vaere en av de forste kunstnerne som malte helt abstrakte bilder', isCorrect: true },
              { id: 'c', text: 'A male realistiske portretter av tyske politikere', isCorrect: false },
              { id: 'd', text: 'A designe de forste funksjonalistiske bygningene', isCorrect: false },
            ],
            solution: 'Kandinsky regnes som en av de aller forste kunstnerne som malte helt abstrakte bilder -- bilder som ikke forestiller noe konkret, men virker gjennom farge, form og komposisjon alene. Han ble senere en sentral laerer ved Bauhaus.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-1-n-section3',
      type: 'text',
      content: `## Das Bauhaus -- Nar kunst moter handverk og teknologi

Na gjor vi et tidssprang til 1919. Forste verdenskrig er over. Tyskland er i kaos -- militaert, okonomisk og moralsk. Men midt i dette kaoset fodes noe helt nytt. I den lille byen Weimar apner arkitekten **Walter Gropius** en skole som vil forandre vart syn pa kunst, design og arkitektur for alltid: **Das Bauhaus**.

Gropius' visjon var radikal. Han mente at de tradisjonelle grensene mellom "hoy kunst" (maleri, skulptur) og "handverk" (mobelsnekring, tekstildesign, keramikk) var kunstige og skadelige. Kunst og handverk burde vaere ett. I det beroemte Bauhaus-manifestet fra 1919 skrev han:

*"Das Endziel aller bildnerischen Tatigkeit ist der Bau! Der Kunstler ist eine Steigerung des Handwerkers."*

Oversatt: "Det endelige malet for all bildende virksomhet er bygget! Kunstneren er en foredling av handverkeren." Gropius sa altsa arkitekturen som den overordnede kunstformen, og han mente at all kunst bygger pa handverksmessige ferdigheter.

Bauhaus-skolen var organisert som et verksted, ikke et tradisjonelt akademi. Studentene laerte bade kunstneriske og handverksmessige ferdigheter. Laererne ble kalt "mestere" (*Meister*), ikke professorer. Blant dem fant vi noen av 1900-tallets storste kunstnere: Paul Klee, Wassily Kandinsky (ja, den samme fra Der Blaue Reiter!), Marcel Breuer, Laszlo Moholy-Nagy og Ludwig Mies van der Rohe.

Skolen ga opphav til begrepet **das Gesamtkunstwerk** -- totalkunstverket, der alle kunstformer arbeider sammen mot en helhet. Og den utviklet en designfilosofi som vi kjenner igjen overalt i dag: **der Funktionalismus** -- funksjonalismen, der formen folger funksjonen. Ikke dekorasjon for dekorasjonens skyld, men form som tjener et formal.

**Viktige Bauhaus-prinsipper:**
- "Form follows function" -- formen skal folge funksjonen
- Samarbeid mellom ulike kunstformer og handverk
- Bruk av nye materialer: stal, glass, betong
- Minimalistisk, geometrisk design
- Godt design skal vaere tilgjengelig for alle -- ikke bare en elite`,
    },
    {
      id: 'tysk-3-13-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa Bauhaus:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-1-n-quiz3-q0',
            task: 'Hvem grunnla Bauhaus, og i hvilket ar?',
            options: [
              { id: 'a', text: 'Wassily Kandinsky i 1911', isCorrect: false },
              { id: 'b', text: 'Walter Gropius i 1919', isCorrect: true },
              { id: 'c', text: 'Ludwig Mies van der Rohe i 1925', isCorrect: false },
              { id: 'd', text: 'Ernst Ludwig Kirchner i 1905', isCorrect: false },
            ],
            solution: 'Walter Gropius grunnla Bauhaus i Weimar i 1919. Han var arkitekt og formulerte det beroemte Bauhaus-manifestet der han beskrev visjonen om a forene kunst, handverk og teknologi.',
          },
          {
            id: 'tysk-3-13-1-n-quiz3-q1',
            task: 'Hva betyr "das Gesamtkunstwerk"?',
            options: [
              { id: 'a', text: 'Et individuelt mesterverk laget av en enkelt kunstner', isCorrect: false },
              { id: 'b', text: 'Et totalkunstverk der alle kunstformer arbeider sammen mot en helhet', isCorrect: true },
              { id: 'c', text: 'Et handverksmessig produkt laget for masseproduksjon', isCorrect: false },
              { id: 'd', text: 'En ekspresjonistisk skulptur i stor skala', isCorrect: false },
            ],
            solution: 'Das Gesamtkunstwerk betyr totalkunstverk -- et helhetlig verk der alle kunstformer (arkitektur, maleri, skulptur, design) arbeider sammen. Dette var et sentralt ideal for bade Bauhaus og Richard Wagner.',
          },
          {
            id: 'tysk-3-13-1-n-quiz3-q2',
            task: 'Hvilket prinsipp er mest sentralt i Bauhaus-filosofien?',
            options: [
              { id: 'a', text: 'Kunst skal vaere dekorativ og luksurios', isCorrect: false },
              { id: 'b', text: 'Form og funksjon skal forenes -- godt design for alle', isCorrect: true },
              { id: 'c', text: 'Kunstneren skal uttrykke sine indre folelser uten begrensninger', isCorrect: false },
              { id: 'd', text: 'Tradisjonelle handverksteknikker er viktigere enn ny teknologi', isCorrect: false },
            ],
            solution: 'Det sentrale Bauhaus-prinsippet er "Form follows function" -- formen folger funksjonen. Godt design skal vaere funksjonelt, minimalistisk og tilgjengelig for alle, ikke bare for en rik elite.',
          },
          {
            id: 'tysk-3-13-1-n-quiz3-q3',
            task: 'Hva mente Gropius med at "Der Kunstler ist eine Steigerung des Handwerkers"?',
            options: [
              { id: 'a', text: 'At kunstnere er viktigere enn handverkere', isCorrect: false },
              { id: 'b', text: 'At handverk er unoedvendig i moderne kunst', isCorrect: false },
              { id: 'c', text: 'At kunstneren er en foredling av handverkeren -- kunst bygger pa handverksmessige ferdigheter', isCorrect: true },
              { id: 'd', text: 'At bare handverkere kan lage ekte kunst', isCorrect: false },
            ],
            solution: 'Gropius mente at kunst og handverk burde vaere ett. Kunstneren er en "Steigerung" (foredling, oppgradering) av handverkeren -- all kunst bygger pa handverksmessige ferdigheter, og de tradisjonelle grensene mellom "hoy kunst" og handverk er kunstige.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-1-n-section4',
      type: 'text',
      content: `## Bauhaus-arven -- Fra Weimar til din iPhone

Bauhaus-skolens historie var kort og dramatisk. I 1925 matte skolen flytte fra Weimar til Dessau pa grunn av politisk press. I 1932 matte den flytte igjen, denne gangen til Berlin. Og i 1933 ble den tvunget til a stenge av nazistene, som sa Bauhaus som "degenerert" og truende.

Men selv om skolen bare eksisterte i 14 ar (1919-1933), er innflytelsen naesten umaalelig. Mange av Bauhaus-mestrene flyktet til USA etter at nazistene tok makten. Gropius ble professor ved Harvard. Mies van der Rohe ble en av Amerikas mest innflytelsesrike arkitekter. Og Bauhaus-ideene spredte seg over hele verden.

I dag er Bauhaus-arven overalt. IKEA, med sin idee om god design til en overkommelig pris, er dypt pavirket av Bauhaus-filosofien. Apples minimalistiske produktdesign -- rene linjer, enkle former, fokus pa funksjon -- star i direkte tradisjon fra Bauhaus. Moderne arkitektur med glass, stal og betong folger Bauhaus-prinsippene. Til og med webdesign med sitt fokus pa brukervennlighet og ren estetikk har aner i Bauhaus.

I 2019 feiret man 100-arsjubileet for Bauhaus med utstillinger (auf Deutsch: *Ausstellungen*) over hele verden. Og som en tekst vi kan studere pa tysk sier det: *"Hundert Jahre nach seiner Grundung ist das Bauhaus aktueller denn je."* -- Hundre ar etter grunnleggelsen er Bauhaus mer aktuelt enn noensinne.

Det er kanskje den storste anerkjennelsen en kunstbevegelse kan fa: at ideene dens fortsatt er levende, fortsatt er relevante, og fortsatt preger hverdagen var -- hundre ar etter at de forst ble formulert i en liten by i Thuringen.

**Viktige begreper for dette kapittelet:**

| Tysk | Norsk |
|------|-------|
| das Bauhaus | Bauhaus-skolen (1919-1933) |
| die Kunstbewegung | kunstbevegelse |
| der Expressionismus | ekspresjonisme |
| die Avantgarde | avantgarde |
| das Gesamtkunstwerk | totalkunstverk |
| die Gestaltung | formgivning, design |
| der Funktionalismus | funksjonalisme |
| die Ausstellung | utstilling |
| die abstrakte Kunst | abstrakt kunst |
| die Werkstatt | verksted |`,
    },
    {
      id: 'tysk-3-13-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Bauhaus-arven og de tre bevegelsene:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-1-n-quiz4-q0',
            task: 'Hvorfor ble Bauhaus-skolen stengt i 1933?',
            options: [
              { id: 'a', text: 'Den gikk tom for penger', isCorrect: false },
              { id: 'b', text: 'Studentene mistet interessen', isCorrect: false },
              { id: 'c', text: 'Nazistene tvang den til a stenge', isCorrect: true },
              { id: 'd', text: 'Gropius bestemte seg for a pensjonere seg', isCorrect: false },
            ],
            solution: 'Bauhaus ble tvunget til a stenge i 1933 av nazistene, som sa skolen som "degenerert" og truende. Mange av Bauhaus-mestrene flyktet til USA, der de spredte ideene videre.',
          },
          {
            id: 'tysk-3-13-1-n-quiz4-q1',
            task: 'Hvor kan vi se Bauhaus-pavirkning i dag?',
            options: [
              { id: 'a', text: 'Kun i museer og gallerier', isCorrect: false },
              { id: 'b', text: 'I IKEAs design, Apples produkter, moderne arkitektur og webdesign', isCorrect: true },
              { id: 'c', text: 'Bare i Tyskland og USA', isCorrect: false },
              { id: 'd', text: 'Bauhaus-stilen brukes ikke lenger', isCorrect: false },
            ],
            solution: 'Bauhaus-arven er overalt: IKEAs idee om god design til overkommelig pris, Apples minimalistiske produktdesign, moderne arkitektur med glass og stal, og webdesign med fokus pa brukervennlighet og ren estetikk.',
          },
          {
            id: 'tysk-3-13-1-n-quiz4-q2',
            task: 'Koble riktig: Hvilken bevegelse var mest opptatt av funksjonell design?',
            options: [
              { id: 'a', text: 'Die Brucke -- med sine forvrengte former og grelle farger', isCorrect: false },
              { id: 'b', text: 'Der Blaue Reiter -- med sin abstrakte og spirituelle tilnaerming', isCorrect: false },
              { id: 'c', text: 'Das Bauhaus -- med prinsippet om at formen folger funksjonen', isCorrect: true },
              { id: 'd', text: 'Alle tre bevegelsene hadde identisk fokus', isCorrect: false },
            ],
            solution: 'Das Bauhaus var den bevegelsen som fokuserte pa funksjonell design med prinsippet "Form follows function". Die Brucke var raatt ekspresjonistisk, Der Blaue Reiter var abstrakt og spirituelt, mens Bauhaus var funksjonalistisk og minimalistisk.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-1-n-summary',
      type: 'note',
      title: 'Oppsummering: Das Bauhaus und die moderne Kunst',
      content: `**Det viktigste fra dette kapittelet:**

- **Die Brucke (1905-1913)** i Dresden var en ekspresjonistisk gruppe med raatt, folelsesladd uttrykk. Kirchner, Schmidt-Rottluff, Heckel og Nolde brukte forvrengte former og grelle farger for a uttrykke indre folelser.
- **Der Blaue Reiter (1911-1914)** i Munchen var mer abstrakt og spirituell. Kandinsky beveget seg mot ren abstraksjon, mens Franz Marc malte dyr i symbolske farger.
- **Das Bauhaus (1919-1933)** i Weimar ble grunnlagt av Walter Gropius. Skolen forente kunst, handverk og teknologi under mottoet "Form follows function".
- Bauhaus-prinsippet om at godt design skal vaere funksjonelt og tilgjengelig for alle preger fortsatt moderne design -- fra IKEA til Apple.
- Bauhaus ble stengt av nazistene i 1933, men Bauhaus-mestrene tok ideene med seg ut i verden.

**Sentrale tyske begreper:** das Bauhaus, die Kunstbewegung, der Expressionismus, die Avantgarde, das Gesamtkunstwerk, die Gestaltung, der Funktionalismus, die Ausstellung`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Bauhaus', definition: 'Bauhaus-skolen (1919-1933), forente kunst, handverk og teknologi' },
    { term: 'die Kunstbewegung', definition: 'kunstbevegelse' },
    { term: 'der Expressionismus', definition: 'ekspresjonisme -- kunstretning med folelsesladd uttrykk' },
    { term: 'die Avantgarde', definition: 'avantgarde -- kunstnerisk fornyelse og eksperimentering' },
    { term: 'das Gesamtkunstwerk', definition: 'totalkunstverk, helhetlig kunstverk' },
    { term: 'die Gestaltung', definition: 'formgivning, design' },
    { term: 'der Funktionalismus', definition: 'funksjonalisme -- formen folger funksjonen' },
    { term: 'die Ausstellung', definition: 'utstilling' },
  ],
};

// ============================================================================
// KAPITTEL 13.2 NARRATIV: Deutsche Musik von Klassik bis Techno
// ============================================================================

export const CHAPTER_TYSK_3_13_2_NARRATIV: TextbookChapter = {
  id: 'tysk-3-13-2-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '13.2',
  title: 'Deutsche Musik von Klassik bis Techno',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om tyske musikktradisjoner fra Bach og Beethoven via Wagner til Kraftwerk og techno -- og hvordan musikken speiler Tysklands historie.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer',
  ],
  linkedChapterId: 'tysk-3-13-2',
  content: [
    {
      id: 'tysk-3-13-2-n-intro',
      type: 'text',
      content: `## Lydsporet til et land

Forestill deg at du kan reise gjennom Tysklands historie bare ved a lytte. Du starter med en orgelkoral i en morkhvelvd kirke i Leipzig -- det er Johann Sebastian Bach som spiller. Musikken er intrikat, naesten matematisk i sin struktur, men samtidig dypt folelsesladd. Sa hopper du hundre ar frem og horer et orkester i Wien spille med en intensitet som far haarene til a reise seg -- Ludwig van Beethoven dirigerer sin niende symfoni, selv om han ikke lenger kan hore en eneste tone. Enda hundre ar senere fyller Richard Wagners overdadige operaer et helt operahus med mytologisk drama.

Og sa -- et bratt skifte. Det er 1970-tallet, og fire menn fra Dusseldorf star pa en scene med ingenting annet enn elektroniske maskiner. Ingen gitarer, ingen trommer, ingen tradisjonelle instrumenter. Det er Kraftwerk, og lydene de lager vil legge grunnlaget for synth-pop, techno og hele den elektroniske musikkrevolusjonen.

Vi hopper igjen til 1989. Berlinmuren har falt. I forlatte fabrikker i Ost-Berlin danser tusenvis av unge mennesker -- fra ost og vest, for forste gang sammen -- til bankende technobeats. Musikken er lydsporet til gjenforeningen.

Tysk musikk er ikke bare en enkelt tradisjon. Det er et enormt, mangfoldig landskap som spenner fra die klassische Musik til die elektronische Musik, fra die Oper til der Schlager, fra hoytidelig til helt vilt. La oss utforske denne reisen.`,
    },
    {
      id: 'tysk-3-13-2-n-section1',
      type: 'text',
      content: `## Bach og Beethoven -- De udodelige

To navn star over alle andre nar vi snakker om tysk musikk: Johann Sebastian Bach og Ludwig van Beethoven. Begge var genier. Begge forandret musikken for alltid. Men de var svart forskjellige.

**Johann Sebastian Bach (1685-1750)** var barokkens ubestridte mester. I Leipzig ledet han **den Thomanerchor** -- det beroemte guttekoret som fortsatt eksisterer den dag i dag. Der skapte han mesterverk (*Meisterwerke*) som Matteus-pasjonen og Det veltempererte klaver. Bachs musikk er ofte beskrevet som arkitektonisk -- lag pa lag av melodier som foldes inn i hverandre med fantastisk presisjon. Pa tysk sier man at han *gilt als einer der grossten Komponisten aller Zeiten* -- han regnes som en av de storste komponistene gjennom alle tider.

**Ludwig van Beethoven (1770-1827)** revolusjonerte musikken. Han bygde bro mellom klassisismen og romantikken, og han utvidet hva et orkester kunne gjore og uttrykke. Hans niende symfoni, med koret "Ode an die Freude" (Ode til gleden, med tekst av Friedrich Schiller), er i dag **die Europaische Hymne** -- den europeiske hymnen. Tenk pa det: Europas offisielle sang er et stykke tysk musikk.

Men det mest bemerkelsesverdige med Beethoven er kanskje dette: de siste arene av livet var han *fast vollig taub* -- naesten helt dov. Og likevel komponerte han noen av sine aller storste verk i denne perioden. Han horte musikken bare i hodet sitt. Det er en av musikkhistoriens mest utrolige prestasjoner.

**Viktige musikkbegreper:**

| Tysk | Norsk |
|------|-------|
| der Komponist | komponist |
| die Sinfonie | symfoni |
| die klassische Musik | klassisk musikk |
| das Orchester | orkester |
| der Dirigent | dirigent |
| der Chor | kor |
| das Konzert | konsert |`,
    },
    {
      id: 'tysk-3-13-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Bach og Beethoven:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-2-n-quiz1-q0',
            task: 'Hva ledet Bach i Leipzig?',
            options: [
              { id: 'a', text: 'Det kongelige orkesteret', isCorrect: false },
              { id: 'b', text: 'Den Thomanerchor -- det beroemte guttekoret', isCorrect: true },
              { id: 'c', text: 'Bauhaus-skolen', isCorrect: false },
              { id: 'd', text: 'Den forste musikkfestivalen', isCorrect: false },
            ],
            solution: 'I Leipzig ledet Bach den Thomanerchor, det beroemte guttekoret som fortsatt eksisterer i dag. Der skapte han mesterverk som Matteus-pasjonen og Det veltempererte klaver.',
          },
          {
            id: 'tysk-3-13-2-n-quiz1-q1',
            task: 'Hvilken av Beethovens komposisjoner er blitt den europeiske hymnen?',
            options: [
              { id: 'a', text: 'Maneskinnssonaten', isCorrect: false },
              { id: 'b', text: 'Den femte symfonien', isCorrect: false },
              { id: 'c', text: 'Den niende symfonien med "Ode an die Freude"', isCorrect: true },
              { id: 'd', text: 'Fur Elise', isCorrect: false },
            ],
            solution: 'Beethovens niende symfoni, naermere bestemt koret "Ode an die Freude" med tekst av Friedrich Schiller, er den europeiske hymnen (die Europaische Hymne). Beethoven fullforte verket i 1824.',
          },
          {
            id: 'tysk-3-13-2-n-quiz1-q2',
            task: 'Hva var spesielt med Beethovens siste leveaar?',
            options: [
              { id: 'a', text: 'Han sluttet helt a komponere', isCorrect: false },
              { id: 'b', text: 'Han var naesten helt dov, men komponerte likevel noen av sine storste verk', isCorrect: true },
              { id: 'c', text: 'Han flyttet til Paris og komponerte for den franske kongen', isCorrect: false },
              { id: 'd', text: 'Han gikk over til a spille elektronisk musikk', isCorrect: false },
            ],
            solution: 'Beethoven var fast vollig taub (naesten helt dov) de siste arene av livet. Likevel komponerte han noen av sine aller storste verk. Han horte musikken bare i hodet sitt -- en utrolig prestasjon.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-2-n-section2',
      type: 'text',
      content: `## Wagner og operaen -- Makt, myter og kontrovers

Nar vi snakker om tysk musikkhistorie, kan vi ikke unnlate a nevne **Richard Wagner (1813-1883)** -- en av de mest innflytelsesrike og mest kontroversielle skikkelsene i hele musikkhistorien.

Wagner tok operaen og forvandlet den til noe helt nytt. Han utviklet konseptet **Gesamtkunstwerk** -- totalkunstverk -- der musikk, tekst, scenografi og drama smelter sammen til en udelelig helhet. Nar du ser en Wagner-opera, er det ikke bare musikk du opplever. Det er en altomfattende kunstopplevelse.

Hans mest ambisiose prosjekt var **"Der Ring des Nibelungen"** -- en syklus pa fire operaer basert pa nordisk og germansk mytologi. Tilsammen varer Ringen omtrent 15 timer. Ja, du leste riktig. 15 timer opera. Wagner var ikke kjent for a vaere beskjeden.

For a oppfore dette enorme verket bygde Wagner sitt eget operahus i **Bayreuth** -- Festspielhaus. Huset er spesialdesignet for Wagners musikk, med orkesteret gjemt under scenen for a skape en unik klangeffekt. **Bayreuther Festspiele** -- festivalen som fortsatt holdes her hvert ar -- er en av verdens mest prestisjefylte musikkfestivaler. Ventelistene for billetter er aarelange.

Men Wagners arv er ogsa dyster. Han var en uttalt antisemitt, og hans ideer og musikk ble brukt aktivt av nazistene. Hitler var en lidenskapelig Wagner-fan. Dette gjor Wagners arv ekstremt komplisert. I Israel er det fremdeles uoffisielt tabu a spille Wagners musikk. Sporsmaliet er et av de vanskeligste i kulturdebatten: Kan vi skille kunstverket fra kunstneren? Og bor vi?

Wagners pavirkning strekker seg langt utover operaen. Filmmusikk, fra John Williams til Hans Zimmer, bruker teknikker Wagner utviklet. Ledemotiver -- musikalske temaer knyttet til bestemte personer eller ideer -- er noe Wagner perfeksjonerte og som i dag er standard i Hollywood.`,
    },
    {
      id: 'tysk-3-13-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Wagner og operaen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-2-n-quiz2-q0',
            task: 'Hva utviklet Wagner for et konsept innen opera?',
            options: [
              { id: 'a', text: 'Schlager -- melodios populaermusikk', isCorrect: false },
              { id: 'b', text: 'Gesamtkunstwerk -- totalkunstverk der musikk, tekst, scenografi og drama smelter sammen', isCorrect: true },
              { id: 'c', text: 'Funktionalismus -- funksjonalistisk musikkdesign', isCorrect: false },
              { id: 'd', text: 'Expressionismus -- ekspresjonistisk musikk', isCorrect: false },
            ],
            solution: 'Wagner utviklet konseptet Gesamtkunstwerk -- totalkunstverk -- der musikk, tekst, scenografi og drama smelter sammen til en udelelig helhet. Denne ideen har pavirket bade opera, teater og film.',
          },
          {
            id: 'tysk-3-13-2-n-quiz2-q1',
            task: 'Hva er "Der Ring des Nibelungen"?',
            options: [
              { id: 'a', text: 'En enkelt kort opera om nordisk historie', isCorrect: false },
              { id: 'b', text: 'En syklus pa fire operaer basert pa nordisk og germansk mytologi, ca. 15 timer totalt', isCorrect: true },
              { id: 'c', text: 'Et musikalbum av Kraftwerk', isCorrect: false },
              { id: 'd', text: 'En symfoni av Beethoven', isCorrect: false },
            ],
            solution: '"Der Ring des Nibelungen" er en syklus pa fire operaer av Wagner basert pa nordisk og germansk mytologi. Ringen varer ca. 15 timer totalt og oppfores ved Bayreuther Festspiele i det spesialbygde operahuset.',
          },
          {
            id: 'tysk-3-13-2-n-quiz2-q2',
            task: 'Hvorfor er Wagners arv kontroversiell?',
            options: [
              { id: 'a', text: 'Musikken hans er teknisk darlig', isCorrect: false },
              { id: 'b', text: 'Han var antisemitt og musikken hans ble brukt av nazistene', isCorrect: true },
              { id: 'c', text: 'Han kopierte all musikken sin fra andre komponister', isCorrect: false },
              { id: 'd', text: 'Han nektet a la operaene sine oppfores offentlig', isCorrect: false },
            ],
            solution: 'Wagner var en uttalt antisemitt, og musikken hans ble aktivt brukt av nazistene. Hitler var en lidenskapelig Wagner-fan. Dette gjor arven ekstremt komplisert -- i Israel er det fremdeles uoffisielt tabu a spille Wagners musikk.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-2-n-section3',
      type: 'text',
      content: `## Fra Kraftwerk til techno -- Den elektroniske revolusjonen

Na gjor vi et enormt hopp i tid og stil. Fra Wagners operahus i Bayreuth til et studio i Dusseldorf pa 1970-tallet. Her sitter fire menn omgitt av synthesizere, trommemaskiner og datamaskiner. De kaller seg **Kraftwerk** -- "Kraftverk". Og de er i ferd med a oppfinne en helt ny type musikk.

Kraftwerk ble grunnlagt i 1970 av Ralf Hutter og Florian Schneider. I en tid da rock og pop dominerte, valgte de a lage musikk utelukkende med elektroniske instrumenter. Album som **"Autobahn"** (1974) og **"Die Mensch-Maschine"** (1978, "Menneske-maskinen") var revolusjonerende. Musikken var repetitiv, hypnotisk og maskinell -- og likevel merkelig vakker.

Kraftwerks innflytelse er enorm. De regnes som pionerer innen **die elektronische Musik** -- elektronisk musikk. David Bowie kalte dem "profetene for det 21. arhundret". De pavirket artister fra Depeche Mode til Daft Punk, fra Afrika Bambaataa til Bjork. Uten Kraftwerk ville musikklandskapet sett helt annerledes ut.

Men den virkelig store tyske musikkrevolusjonen kom etter **der Mauerfall** -- murens fall -- i 1989. Da muren falt, ble tomme fabrikkbygninger, bunkere og kjellere i Ost-Berlin plotselig tilgjengelige. Og unge mennesker fra bade ost og vest gjorde dem til klubber. Legendariske steder som **Tresor** (bokstavelig talt i en gammel bankhvelving) og det naermest mytiske **Berghain** ble fodt.

Techno ble, som en tekst pa tysk uttrykker det, *"der Soundtrack der Wiedervereinigung"* -- lydsporet til gjenforeningen. *Die Musik verband, was die Mauer getrennt hatte* -- musikken forbandt det muren hadde adskilt. Unge fra ost og vest feiret sammen, og dansemusikken ble et symbol pa frihet og enhet.

**Love Parade** (1989-2010) ble et massivt techno-gateparade i Berlin med hundretusener av deltakere. Berlin ble verdens techno-hovedstad -- en posisjon byen holder den dag i dag.`,
    },
    {
      id: 'tysk-3-13-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa Kraftwerk og techno:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-2-n-quiz3-q0',
            task: 'Hvilken tysk gruppe regnes som pionerer innen elektronisk musikk?',
            options: [
              { id: 'a', text: 'Rammstein', isCorrect: false },
              { id: 'b', text: 'Die Toten Hosen', isCorrect: false },
              { id: 'c', text: 'Kraftwerk', isCorrect: true },
              { id: 'd', text: 'Scorpions', isCorrect: false },
            ],
            solution: 'Kraftwerk fra Dusseldorf (grunnlagt 1970) regnes som pionerer innen elektronisk musikk. Album som "Autobahn" og "Die Mensch-Maschine" la grunnlaget for synth-pop, techno og elektronisk dansemusikk.',
          },
          {
            id: 'tysk-3-13-2-n-quiz3-q1',
            task: 'Hva skjedde i Ost-Berlin etter murens fall i 1989?',
            options: [
              { id: 'a', text: 'Alle musikkklubber ble stengt av myndighetene', isCorrect: false },
              { id: 'b', text: 'Forlatte fabrikkbygninger og bunkere ble til illegale klubber, og techno ble lydsporet til gjenforeningen', isCorrect: true },
              { id: 'c', text: 'Klassisk musikk ble den dominerende sjangeren', isCorrect: false },
              { id: 'd', text: 'Schlager-musikk tok over hele musikkscenen', isCorrect: false },
            ],
            solution: 'Etter murens fall i 1989 ble forlatte fabrikkbygninger, bunkere og kjellere i Ost-Berlin til illegale klubber. Techno ble "Soundtrack der Wiedervereinigung" -- unge fra ost og vest feiret sammen for forste gang.',
          },
          {
            id: 'tysk-3-13-2-n-quiz3-q2',
            task: 'Hva betyr "die Wiedervereinigung" pa norsk?',
            options: [
              { id: 'a', text: 'Oppdelingen -- at Tyskland ble delt i to', isCorrect: false },
              { id: 'b', text: 'Gjenforeningen -- at Ost- og Vest-Tyskland ble ett igjen', isCorrect: true },
              { id: 'c', text: 'Revolusjonen -- at folket gjorde opproor', isCorrect: false },
              { id: 'd', text: 'Feiringen -- den arlige nasjonaldagen', isCorrect: false },
            ],
            solution: 'Die Wiedervereinigung betyr gjenforeningen (wieder = igjen + Vereinigung = forening). Det viser til at Ost- og Vest-Tyskland ble gjenforent i 1990 etter at Berlinmuren falt i 1989.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-2-n-section4',
      type: 'text',
      content: `## Schlager, festivaler og mangfold

Vi har snakket om den klassiske arven og den elektroniske revolusjonen, men det tyske musikklandskapet har enda flere dimensjoner. La oss ta en titt pa noen av dem.

**Der Schlager** er kanskje den mest "tyske" av alle musikkformer. Schlager er melodios, lettfattelig populaermusikk -- ofte med romantiske eller sentimentale tekster. Ordet "Schlager" kommer fra "schlagen" (a sla) og betyr noe som "hit" eller "slager". Store stjerner som **Helene Fischer** og **Andrea Berg** fyller stadioner og trekker millioner av TV-seere pa de store Schlager-showene. Det er folkemusikk i ordets sanne forstand -- elsket av millioner, selv om kulturkritikere noen ganger ser ned pa sjangeren.

Det tyske **Musikfestival**-landskapet er enormt. **Rock am Ring** er en av Europas storste rockfestivaler. **Wacken Open Air** er verdens storste heavy metal-festival (ja, i Tyskland!). **Wave-Gotik-Treffen** i Leipzig samler goth-kulturen. Og selvfolgelig er **Bayreuther Festspiele** fortsatt den fremste festivalen for Wagner-opera.

Og sa er det det moderne mangfoldet. Hip-hop-artister som **Sido** og **Capital Bra** dominerer de tyske hitlistene. Den elektroniske produsenten **Paul Kalkbrenner** lager musikk som fyller arenaer. Og Tyskland er det tredje storste musikkmarkedet i verden etter USA og Japan.

Som en tysk tekst uttrykker det: *"Die deutsche Musiklandschaft ist so vielfaltig wie das Land selbst."* -- Det tyske musikklandskapet er like mangfoldig som landet selv. *"Jede Epoche hat ihre Klange, und jede Generation hat ihre Stimme gefunden."* -- Hver epoke har sine klanger, og hver generasjon har funnet sin stemme.

| Sjanger | Tysk | Periode |
|---------|------|---------|
| Klassisk | die klassische Musik | 1600-1900 |
| Opera | die Oper | 1600-i dag |
| Schlager | der Schlager | 1950-i dag |
| Elektronisk | die elektronische Musik | 1970-i dag |
| Techno | der Techno | 1980-i dag |`,
    },
    {
      id: 'tysk-3-13-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Schlager og det tyske musikklandskapet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-2-n-quiz4-q0',
            task: 'Hva er "der Schlager"?',
            options: [
              { id: 'a', text: 'Avantgardistisk elektronisk musikk', isCorrect: false },
              { id: 'b', text: 'Melodios, lettfattelig populaermusikk, ofte med romantiske tekster', isCorrect: true },
              { id: 'c', text: 'Tradisjonell kirkesang', isCorrect: false },
              { id: 'd', text: 'Heavy metal-musikk fra Wacken-festivalen', isCorrect: false },
            ],
            solution: 'Der Schlager er melodios, lettfattelig populaermusikk med ofte romantiske eller sentimentale tekster. Ordet kommer av "schlagen" (a sla) og betyr "hit/slager". Store stjerner som Helene Fischer fyller stadioner.',
          },
          {
            id: 'tysk-3-13-2-n-quiz4-q1',
            task: 'Hvilken plassering har Tyskland pa listen over verdens storste musikkmarkeder?',
            options: [
              { id: 'a', text: 'Nummer ett', isCorrect: false },
              { id: 'b', text: 'Nummer to', isCorrect: false },
              { id: 'c', text: 'Nummer tre, etter USA og Japan', isCorrect: true },
              { id: 'd', text: 'Nummer ti', isCorrect: false },
            ],
            solution: 'Tyskland er det tredje storste musikkmarkedet i verden, etter USA og Japan. Landet har et enormt mangfoldig musikkliv som spenner fra klassisk til techno, fra Schlager til hip-hop.',
          },
          {
            id: 'tysk-3-13-2-n-quiz4-q2',
            task: 'Hva betyr det tyske uttrykket "vielfaltig" pa norsk?',
            options: [
              { id: 'a', text: 'Kjedelig og ensformig', isCorrect: false },
              { id: 'b', text: 'Mangfoldig (viel = mye + faltig = -foldig)', isCorrect: true },
              { id: 'c', text: 'Gammeldags og tradisjonelt', isCorrect: false },
              { id: 'd', text: 'Komplett og ferdig', isCorrect: false },
            ],
            solution: '"Vielfaltig" betyr mangfoldig pa norsk, satt sammen av "viel" (mye) og "faltig" (-foldig). Det tyske musikklandskapet beskrives som "so vielfaltig wie das Land selbst" -- like mangfoldig som landet selv.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-2-n-summary',
      type: 'note',
      title: 'Oppsummering: Deutsche Musik von Klassik bis Techno',
      content: `**Det viktigste fra dette kapittelet:**

- **Bach (1685-1750)** ledet Thomanerkoret i Leipzig og skapte mesterverk som Matteus-pasjonen. Regnes som en av historiens storste komponister.
- **Beethoven (1770-1827)** revolusjonerte musikken. Hans 9. symfoni med "Ode an die Freude" er den europeiske hymnen. Han var naesten helt dov de siste arene.
- **Wagner (1813-1883)** utviklet Gesamtkunstwerk-konseptet og skapte "Der Ring des Nibelungen". Kontroversiell pa grunn av antisemittisme og bruk av nazistene.
- **Kraftwerk** (grunnlagt 1970 i Dusseldorf) var pionerer innen elektronisk musikk som pavirket hele den moderne musikkscenen.
- **Berlins techno-scene** oppsto etter murens fall i 1989 da forlatte bygninger ble til klubber. Techno ble lydsporet til gjenforeningen.
- **Schlager** er populaer tysk underholdningsmusikk med store stjerner som Helene Fischer.
- Tyskland er verdens tredje storste musikkmarked.

**Sentrale tyske begreper:** die klassische Musik, die Sinfonie, die Oper, der Schlager, die elektronische Musik, das Musikfestival, der Komponist`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die klassische Musik', definition: 'klassisk musikk -- den store tyske tradisjonen fra Bach til Brahms' },
    { term: 'die Sinfonie', definition: 'symfoni -- orkesterverk, Beethovens ni symfonier er verdensberoemte' },
    { term: 'die Oper', definition: 'opera -- Wagner revolusjonerte kunstformen med Gesamtkunstwerk' },
    { term: 'der Schlager', definition: 'schlager -- populaer, melodios tysk underholdningsmusikk' },
    { term: 'die elektronische Musik', definition: 'elektronisk musikk -- Kraftwerk var pionerer' },
    { term: 'das Musikfestival', definition: 'musikkfestival -- f.eks. Bayreuther Festspiele, Rock am Ring' },
    { term: 'der Komponist', definition: 'komponist -- Bach, Beethoven, Wagner m.fl.' },
  ],
};

// ============================================================================
// KAPITTEL 13.3 NARRATIV: Der deutsche Film
// ============================================================================

export const CHAPTER_TYSK_3_13_3_NARRATIV: TextbookChapter = {
  id: 'tysk-3-13-3-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '13.3',
  title: 'Der deutsche Film',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om tysk filmhistorie fra stumfilm og ekspresjonisme via Neuer Deutscher Film til samtidsfilmer som Das Leben der Anderen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  linkedChapterId: 'tysk-3-13-3',
  content: [
    {
      id: 'tysk-3-13-3-n-intro',
      type: 'text',
      content: `## Lys, kamera -- Geschichte!

Det er 1927. I en morkt kinosal i Berlin sitter publikum med apne munner. Pa lerretet ser de en by de aldri har sett maken til: enorme skyskrapere som rekker mot himmelen, flygende biler mellom bygningene, og under bakken -- et helvete av maskiner der arbeidere sliter som slaver. Det er Fritz Langs **Metropolis**, og det er noe av det mest ambisiose som noensinne er blitt filmet.

Filmen var en kommersiell fiasko ved premieren. Publikum skjonte ikke helt hva de sa. Men Metropolis ville bli anerkjent som et av filmhistoriens aller viktigste verk -- en dystopisk visjon som pavirket alt fra Blade Runner til The Matrix.

Og det er bare begynnelsen pa historien om tysk film. For tysk film er ikke bare en nasjonal filmtradisjon. Den er en av filmkunstens store soyler, med tre tydelige hoeydepunkter: den ekspresjonistiske **stumfilmen** pa 1920-tallet, den politisk engasjerte **Neue Deutsche Film** pa 1960-70-tallet, og en ny gullalder av **samtidsfilm** etter gjenforeningen. I dette kapittelet skal vi reise gjennom alle tre periodene.`,
    },
    {
      id: 'tysk-3-13-3-n-section1',
      type: 'text',
      content: `## Skygger pa lerretet -- Stummfilm og ekspresjonisme

La oss starte i begynnelsen -- eller i hvert fall naer begynnelsen av filmens historie. Pa 1910- og 1920-tallet var Tyskland et av verdens viktigste filmland. Og de tyske filmskaperne gjorde noe ingen andre gjorde: de brukte filmen som et ekspresjonistisk medium, pa samme mate som malerne i Die Brucke brukte lerretet.

**Der Stummfilm** -- stumfilmen -- var det store formatet. Uten lyd matte filmskaperne fortelle historier utelukkende gjennom bilder. Og de tyske ekspresjonistiske filmskaperne skapte bilder som aldri var sett for.

I 1920 kom **"Das Cabinet des Dr. Caligari"** -- en film som ser ut som et mareritt brakt til live. Kulissene er skjeve, veggene heller, skyggene er malte rett pa settene. Ingenting er normalt. Ingenting er trygt. Filmen regnes som selve grunnsteinen i ekspresjonistisk film.

To ar senere, i 1922, kom **"Nosferatu"** -- F.W. Murnaus uautoriserte versjon av Bram Stokers Dracula. Skuespilleren Max Schreck som den spekelseslignende vampyren Count Orlok skapte bilder som fortsatt forekommer i populaerkulturen. Nosferatu er sannsynligvis den mest innflytelsesrike skrekkfilmen noensinne.

Og sa, i 1927, kom altsa **"Metropolis"** av Fritz Lang. Som en tysk tekst beskriver den: *"Der Stummfilm zeigt eine dystopische Zukunftsstadt, in der die Arbeiter unter der Erde schuften, wahrend die Reichen in luxuriosen Wolkenkratzern leben."* Filmen viser en dystopisk fremtidsby der arbeiderne sliter under jorden, mens de rike lever i luksoriose skyskrapere. Temaene -- sosial ulikhet (soziale Ungleichheit), teknologi (Technologie) og menneskelighet (Menschlichkeit) -- er like relevante i dag som i 1927.

Disse filmene var *einflussreich* -- innflytelsesrike -- pa en mate som er vanskelig a overdrive. Hollywood laerte av dem. Da nazistene tok makten, flyktet mange tyske filmskapere til USA og tok teknikkene sine med seg. Fritz Lang selv dro til Hollywood og ble en viktig regissor der.

**Viktige filmbegreper:**

| Tysk | Norsk |
|------|-------|
| der Stummfilm | stumfilm |
| der Regisseur | regissor |
| das Drehbuch | manus, filmmanus |
| die Handlung | handling (i en film) |
| der Hauptdarsteller | hovedrolleinnehaver |
| die Kamera | kamera |
| der Schnitt | klipping, redigering |`,
    },
    {
      id: 'tysk-3-13-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa den tyske stumfilmen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-3-n-quiz1-q0',
            task: 'Hvilken tysk stumfilm fra 1927 regnes som en av filmhistoriens mest innflytelsesrike?',
            options: [
              { id: 'a', text: 'Nosferatu', isCorrect: false },
              { id: 'b', text: 'Das Cabinet des Dr. Caligari', isCorrect: false },
              { id: 'c', text: 'Metropolis', isCorrect: true },
              { id: 'd', text: 'Der letzte Mann', isCorrect: false },
            ],
            solution: 'Fritz Langs "Metropolis" (1927) er en av filmhistoriens mest innflytelsesrike filmer. Den dystopiske science fiction-filmen handler om sosial ulikhet i en fremtidsby og revolusjonerte filmens visuelle uttrykk.',
          },
          {
            id: 'tysk-3-13-3-n-quiz1-q1',
            task: 'Hva handler Metropolis om?',
            options: [
              { id: 'a', text: 'En romantisk kjaerlighetshistorie i mellomkrigstidens Berlin', isCorrect: false },
              { id: 'b', text: 'En dystopisk fremtidsby der arbeiderne sliter under jorden mens de rike lever i skyskrapere', isCorrect: true },
              { id: 'c', text: 'En vampyr som terroriserer en landsby', isCorrect: false },
              { id: 'd', text: 'Et portrett av en gal vitenskapsmann', isCorrect: false },
            ],
            solution: 'Metropolis viser en dystopisk fremtidsby (dystopische Zukunftsstadt) der arbeiderne sliter under jorden (unter der Erde schuften) mens de rike lever i luksoriose skyskrapere (luxuriose Wolkenkratzer). Temaene sosial ulikhet, teknologi og menneskelighet er fortsatt relevante.',
          },
          {
            id: 'tysk-3-13-3-n-quiz1-q2',
            task: 'Hvilken film fra 1922 regnes som den mest innflytelsesrike skrekkfilmen noensinne?',
            options: [
              { id: 'a', text: 'Metropolis', isCorrect: false },
              { id: 'b', text: 'Das Cabinet des Dr. Caligari', isCorrect: false },
              { id: 'c', text: 'Nosferatu', isCorrect: true },
              { id: 'd', text: 'Der Blaue Engel', isCorrect: false },
            ],
            solution: 'F.W. Murnaus "Nosferatu" (1922) er sannsynligvis den mest innflytelsesrike skrekkfilmen noensinne. Skuespilleren Max Schreck som vampyren Count Orlok skapte bilder som fortsatt preger populaerkulturen.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-3-n-section2',
      type: 'text',
      content: `## Neuer Deutscher Film -- Opproerets kino

Etter andre verdenskrig la tysk film i ruiner -- bade bokstavelig og kunstnerisk. Pa 1950-tallet produserte den tyske filmindustrien stort sett harmloe underholdningsfilm. Unge tyske filmskapere kalte det foraktelig **"Opas Kino"** -- bestefars kino. Kedsommelig, kommersiell og feig.

I 1962 kom oppgjoerets time. Under filmfestivalen i Oberhausen undertegnet 26 unge filmskapere et manifest som erklarte: *"Der alte Film ist tot. Wir glauben an den neuen."* -- Den gamle filmen er dod. Vi tror pa den nye. **Das Oberhausener Manifest** ble et vendepunkt (*Wendepunkt*) i tysk filmhistorie og markerte fodselen av **der Neue Deutsche Film** -- den nye tyske filmen.

Fire regissorer ble baerebjelkene i denne bevegelsen:

**Rainer Werner Fassbinder (1945-1982)** var utrolig produktiv -- over 40 filmer pa bare 16 ar. Han doede tragisk ung, bare 37 ar gammel. Fassbinders filmer handler om undertrykkelse, klasse, homofili og Tysklands vanskelige forhold til sin egen historie. "Die Ehe der Maria Braun" (1979) folger en kvinne gjennom etterkrigstidens Tyskland og er et skarpt portrett av et land som gjor alt for a glemme. "Angst essen Seele auf" (1974, "Frykt spiser sjel opp") handler om forholdet mellom en eldre tysk kvinne og en ung marokkansk gjestearbeider.

**Werner Herzog (f. 1942)** er kanskje den mest eksentriske av dem alle. Han lager ekstreme, visjonaere filmer, ofte med den like eksentriske skuespilleren Klaus Kinski. "Aguirre, der Zorn Gottes" (1972) handler om en spansk conquistadors galskap i Amazonas. "Fitzcarraldo" (1982) handler om en mann som vil dra et dampskip over et fjell i jungelen -- og Herzog insisterte pa a faktisk gjore det under innspillingen. Han er ogsa anerkjent som dokumentarfilmskaper.

**Wim Wenders (f. 1945)** er den mest poetiske av de fire. Hans filmer er kontemplative og vakre. "Der Himmel uber Berlin" (1987, "Himmelen over Berlin") handler om to engler som observerer menneskene i det delte Berlin. Filmen ble remaken til Hollywood-filmen "City of Angels" med Nicolas Cage. "Paris, Texas" (1984) vant Gullpalmen i Cannes.

**Volker Schlondorff (f. 1939)** filmatiserte Gunter Grass' roman "Die Blechtrommel" (Blikktrommen) i 1979. Filmen vant bade Gullpalmen i Cannes og Oscar for beste fremmedspraklige film.

Disse regissorene avviste det kommersielle (*lehnten das konventionelle, kommerzielle Kino ab*) og ville lage filmer som kritisk reflekterte det tyske samfunnet (*die deutsche Gesellschaft kritisch reflektieren*). De ble de viktigste representantene (*die wichtigsten Vertreter*) for en bevegelse som gjorde tysk film internasjonalt kjent igjen.`,
    },
    {
      id: 'tysk-3-13-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Neuer Deutscher Film:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-3-n-quiz2-q0',
            task: 'Hva var Oberhausener Manifest (1962)?',
            options: [
              { id: 'a', text: 'En sensurlov som begrenset tyske filmer', isCorrect: false },
              { id: 'b', text: 'En erklaring der 26 unge filmskapere krevde fornyelse av tysk film', isCorrect: true },
              { id: 'c', text: 'Et manifest for ekspresjonistisk stumfilm', isCorrect: false },
              { id: 'd', text: 'En avtale mellom tyske og amerikanske filmstudioer', isCorrect: false },
            ],
            solution: 'Oberhausener Manifest fra 1962 var et vendepunkt i tysk filmhistorie. 26 unge filmskapere erklarte: "Der alte Film ist tot. Wir glauben an den neuen." De avviste kommersiell underholdningsfilm og markerte starten pa Neuer Deutscher Film.',
          },
          {
            id: 'tysk-3-13-3-n-quiz2-q1',
            task: 'Koble regissor med film: Hvem laget "Der Himmel uber Berlin"?',
            options: [
              { id: 'a', text: 'Rainer Werner Fassbinder', isCorrect: false },
              { id: 'b', text: 'Werner Herzog', isCorrect: false },
              { id: 'c', text: 'Wim Wenders', isCorrect: true },
              { id: 'd', text: 'Volker Schlondorff', isCorrect: false },
            ],
            solution: 'Wim Wenders regisserte "Der Himmel uber Berlin" (1987) -- en poetisk film om to engler som observerer menneskene i det delte Berlin. Filmen ble remaken til Hollywood-filmen "City of Angels".',
          },
          {
            id: 'tysk-3-13-3-n-quiz2-q2',
            task: 'Hva kalte unge tyske filmskapere den eksisterende tyske filmindustrien pa 1950-60-tallet?',
            options: [
              { id: 'a', text: 'Neues Kino -- ny kino', isCorrect: false },
              { id: 'b', text: 'Opas Kino -- bestefars kino', isCorrect: true },
              { id: 'c', text: 'Expressionistisches Kino -- ekspresjonistisk kino', isCorrect: false },
              { id: 'd', text: 'Volksfilm -- folkefilm', isCorrect: false },
            ],
            solution: 'De unge filmskaperne kalte den eksisterende filmindustrien foraktelig "Opas Kino" -- bestefars kino -- fordi den produserte harmloes, kommersiell underholdningsfilm uten kunstnerisk ambisjon eller politisk engasjement.',
          },
          {
            id: 'tysk-3-13-3-n-quiz2-q3',
            task: 'Hva kjennetegnet Rainer Werner Fassbinders filmkarriere?',
            options: [
              { id: 'a', text: 'Han laget kun en film, men den ble verdensberomt', isCorrect: false },
              { id: 'b', text: 'Han var utrolig produktiv med over 40 filmer pa 16 ar, og doede bare 37 ar gammel', isCorrect: true },
              { id: 'c', text: 'Han jobbet utelukkende med dokumentarfilm', isCorrect: false },
              { id: 'd', text: 'Han flyttet til Hollywood og laget amerikanske actionfilmer', isCorrect: false },
            ],
            solution: 'Fassbinder var utrolig produktiv -- over 40 filmer pa bare 16 ar. Han doede tragisk ung, bare 37 ar gammel, i 1982. Filmene hans handler om undertrykkelse, klasse, homofili og Tysklands forhold til sin historie.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-3-n-section3',
      type: 'text',
      content: `## Samtidsfilm -- Nar Tyskland ser seg i speilet

Etter gjenforeningen i 1990 begynte en ny aera for tysk film. En generasjon filmskapere tok fatt pa Tysklands kompliserte historie -- delingen, muren, DDR, nazismen -- og laget filmer som bade var kunstnerisk sterke og internasjonalt suksessrike.

**"Good Bye, Lenin!" (2003)** av Wolfgang Becker er en komedie-drama med et genialt premiss: en ung mann i Ost-Berlin mister sin mor i en koma rett for murens fall. Nar hun vakner, tror legene at ethvert sjokk kan drepe henne. Sa Alex bestemmer seg for a late som om DDR fortsatt eksisterer -- midt i den totale omveltningen. Filmen er bade morsom og hjerteskjaerende, og ga opphav til begrepet "Ostalgie" -- nostalgi for Ost-Tyskland.

**"Der Untergang" (2004)** av Oliver Hirschbiegel skildrer Hitlers siste dager i bunkeren i Berlin. Bruno Ganz' portrett av Hitler ble verdenskjent -- og fikk et uventet etterlivet som internett-meme (den beroemte "Hitler finner ut"-videoen bruker en scene fra denne filmen). Men filmen er et dodserioest drama om et regimes siste krampetrekninger.

**"Das Leben der Anderen" (2006)** av Florian Henckel von Donnersmarck er kanskje den mest anerkjente tyske filmen i moderne tid. Handlingen (*die Handlung*) utspiller seg i Ost-Berlin i 1984. Stasi-kapteinen Gerd Wiesler far i oppdrag (*erhalt den Auftrag*) a overvaake dramatikeren Georg Dreyman og hans kjaereste, skuespillerinnen Christa-Maria Sieland. Men mens han avlytter livene deres (*ihr Leben belauscht*), begynner Wiesler a stille sporsmaalstegn ved sine overbevisninger (*seine Uberzeugungen in Frage zu stellen*). Filmen viser inntrengende (*eindringlich*) hvordan total overvaking odelegger mennesker -- bade de overvakede og overvakerne. Den vant Oscar for beste fremmedspraklige film.

**"Toni Erdmann" (2016)** av Maren Ade er en tragikomisk film om forholdet mellom en far og datter, nominert til Oscar og vinner av flere europeiske priser.

Tysk film fortsetter a vaere relevant, og **Berlinale** -- Berlin International Film Festival -- er en av verdens tre storste filmfestivaler, sammen med Cannes og Venezia. Den deler ut **Gullbjornen** (*Goldener Bar*) som hovedpris.`,
    },
    {
      id: 'tysk-3-13-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa tysk samtidsfilm:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-3-n-quiz3-q0',
            task: 'Hvilken tysk film vant Oscar for beste fremmedspraklige film i 2007?',
            options: [
              { id: 'a', text: 'Good Bye, Lenin!', isCorrect: false },
              { id: 'b', text: 'Der Untergang', isCorrect: false },
              { id: 'c', text: 'Das Leben der Anderen', isCorrect: true },
              { id: 'd', text: 'Toni Erdmann', isCorrect: false },
            ],
            solution: '"Das Leben der Anderen" (De andres liv) av regissor Florian Henckel von Donnersmarck vant Oscar for beste fremmedspraklige film. Filmen handler om Stasi-overvaking i DDR og er en av de mest anerkjente tyske filmene.',
          },
          {
            id: 'tysk-3-13-3-n-quiz3-q1',
            task: 'Hva handler "Das Leben der Anderen" om?',
            options: [
              { id: 'a', text: 'Hitlers siste dager i bunkeren', isCorrect: false },
              { id: 'b', text: 'En Stasi-agent som overvaker en dramatiker i Ost-Berlin og begynner a tvile pa systemet', isCorrect: true },
              { id: 'c', text: 'En mann som later som om DDR fortsatt eksisterer for a beskytte sin mor', isCorrect: false },
              { id: 'd', text: 'En far og datters kompliserte forhold', isCorrect: false },
            ],
            solution: 'Filmen handler om Stasi-kapteinen Gerd Wiesler som far i oppdrag a overvaake dramatikeren Georg Dreyman i Ost-Berlin 1984. Mens han avlytter livene deres, begynner han a stille sporsmal ved sine overbevisninger.',
          },
          {
            id: 'tysk-3-13-3-n-quiz3-q2',
            task: 'Hva er "Ostalgie"?',
            options: [
              { id: 'a', text: 'En type ost fra Ost-Tyskland', isCorrect: false },
              { id: 'b', text: 'Nostalgi for Ost-Tyskland og DDR-tiden', isCorrect: true },
              { id: 'c', text: 'En filmsjanger fra Ost-Berlin', isCorrect: false },
              { id: 'd', text: 'En politisk bevegelse for gjenforening av Tyskland', isCorrect: false },
            ],
            solution: 'Ostalgie er et sammensatt ord av "Ost" (ost) og "Nostalgie" (nostalgi) -- nostalgi for Ost-Tyskland og DDR-tiden. Begrepet ble populaert etter filmen "Good Bye, Lenin!" (2003).',
          },
          {
            id: 'tysk-3-13-3-n-quiz3-q3',
            task: 'Hva er Berlinale?',
            options: [
              { id: 'a', text: 'En techno-festival i Berlin', isCorrect: false },
              { id: 'b', text: 'Et tysk filmstudio', isCorrect: false },
              { id: 'c', text: 'Berlin International Film Festival -- en av verdens tre storste filmfestivaler', isCorrect: true },
              { id: 'd', text: 'En pris som deles ut til tyske skuespillere', isCorrect: false },
            ],
            solution: 'Berlinale (Berlin International Film Festival) er en av verdens tre storste filmfestivaler, sammen med Cannes og Venezia. Hovedprisen er Gullbjornen (Goldener Bar).',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-3-n-section4',
      type: 'text',
      content: `## Tysk film og den vanskelige historien

Noe som gar igjen i tysk film er et behov for a gjore opp med fortiden. Tysk film handler ofte om historie, identitet og det a forholde seg til det som har skjedd -- enten det er nazismen, DDR-tiden eller gjenforeningen.

Stummfilmperioden var preget av angst og usikkerhet etter forste verdenskrig. De forvrengte bildene i "Das Cabinet des Dr. Caligari" og den uhyggelige vampyren i "Nosferatu" kan leses som uttrykk for et samfunn i krise. Neuer Deutscher Film var et direkte opprror mot foreldregenerasjonens taushet om nazitiden -- Fassbinder, Herzog og Wenders ville tvinge Tyskland til a se seg selv i oynene. Og samtidsfilmene etter gjenforeningen handler om a forstaa hva DDR var, hva muren gjorde med mennesker, og hvem tyskerne er na.

Den tyske filmkritikken (*die Filmkritik*) har en sterk tradisjon. Tyske filmtidsskrifter og kritikere analyserer film som kunstverk og som sosiale dokumenter. Filmens rolle er ikke bare a underholde -- den er a provosere, a stille sporsmaal, a tvinge oss til a tenke.

Og kanskje er det nettopp dette som gjor tysk film sa spesiell. Fra de ekspresjonistiske skyggene i 1920-tallets stumfilmer til de intime portrettene av DDR-tidens overvakingssamfunn -- tysk film tar aldri den lette veien ut. Den ser mennesker i oynene, ogsa nar det er ubehagelig. Og det er noe vi alle kan laere av.`,
    },
    {
      id: 'tysk-3-13-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa tysk filmhistorie samlet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-3-n-quiz4-q0',
            task: 'Hva er et gjennomgaende tema i tysk filmhistorie?',
            options: [
              { id: 'a', text: 'Romantiske komedier om livet i Berlin', isCorrect: false },
              { id: 'b', text: 'A gjore opp med fortiden -- nazisme, DDR, gjenforeningen', isCorrect: true },
              { id: 'c', text: 'Actionfilmer inspirert av Hollywood', isCorrect: false },
              { id: 'd', text: 'Barnefilmer og eventyrfortellinger', isCorrect: false },
            ],
            solution: 'Et gjennomgaende tema i tysk film er behovet for a gjore opp med fortiden. Stummfilmen uttrykte angst etter forste verdenskrig, Neuer Deutscher Film konfronterte nazitiden, og samtidsfilmen utforsker DDR-arven og gjenforeningen.',
          },
          {
            id: 'tysk-3-13-3-n-quiz4-q1',
            task: 'Sett filmene i kronologisk rekkefølge: Metropolis, Das Leben der Anderen, Die Ehe der Maria Braun',
            options: [
              { id: 'a', text: 'Die Ehe der Maria Braun (1979), Metropolis (1927), Das Leben der Anderen (2006)', isCorrect: false },
              { id: 'b', text: 'Metropolis (1927), Die Ehe der Maria Braun (1979), Das Leben der Anderen (2006)', isCorrect: true },
              { id: 'c', text: 'Das Leben der Anderen (2006), Metropolis (1927), Die Ehe der Maria Braun (1979)', isCorrect: false },
              { id: 'd', text: 'Metropolis (1927), Das Leben der Anderen (2006), Die Ehe der Maria Braun (1979)', isCorrect: false },
            ],
            solution: 'Riktig rekkefølge er: Metropolis (1927) -- stumfilmperioden, Die Ehe der Maria Braun (1979) -- Neuer Deutscher Film, Das Leben der Anderen (2006) -- samtidsfilm.',
          },
          {
            id: 'tysk-3-13-3-n-quiz4-q2',
            task: 'Hva betyr "der Regisseur" pa norsk?',
            options: [
              { id: 'a', text: 'Skuespiller', isCorrect: false },
              { id: 'b', text: 'Manusforfatter', isCorrect: false },
              { id: 'c', text: 'Regissor', isCorrect: true },
              { id: 'd', text: 'Filmkritiker', isCorrect: false },
            ],
            solution: 'Der Regisseur betyr regissor pa norsk. Tysk film har fostret mange beroemte regissorer, fra Fritz Lang (Metropolis) via Fassbinder, Herzog og Wenders til Florian Henckel von Donnersmarck (Das Leben der Anderen).',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-3-n-summary',
      type: 'note',
      title: 'Oppsummering: Der deutsche Film',
      content: `**Det viktigste fra dette kapittelet:**

- **Tysk ekspresjonistisk stumfilm (1920-tallet)** revolusjonerte filmspraket. "Das Cabinet des Dr. Caligari" (1920), "Nosferatu" (1922) og "Metropolis" (1927) er mileparler i filmhistorien.
- **Neuer Deutscher Film (1960-1980)** ble fodt med Oberhausener Manifest (1962). De fire store regissorene var Fassbinder, Herzog, Wenders og Schlondorff.
- **Samtidsfilm etter gjenforeningen** utforsker tysk historie og identitet. "Good Bye, Lenin!" (2003), "Der Untergang" (2004) og "Das Leben der Anderen" (2006) er viktige filmer.
- "Das Leben der Anderen" vant Oscar for beste fremmedspraklige film og handler om Stasi-overvaking i DDR.
- **Berlinale** er en av verdens tre storste filmfestivaler og deler ut Gullbjornen (Goldener Bar).
- Et gjennomgaende tema i tysk film er a gjore opp med fortiden -- nazisme, DDR og gjenforeningen.

**Sentrale tyske begreper:** der Stummfilm, der Regisseur, die Filmkritik, das Drehbuch, die Filmszene, der Neue Deutsche Film, das Filmfestival`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Stummfilm', definition: 'stumfilm -- Metropolis og Nosferatu er tyske klassikere' },
    { term: 'der Regisseur', definition: 'regissor -- f.eks. Fritz Lang, Fassbinder, Herzog, Wenders' },
    { term: 'die Filmkritik', definition: 'filmkritikk -- analyse og vurdering av film' },
    { term: 'das Drehbuch', definition: 'manus/filmmanus (drehen = a dreie/filme + Buch = bok)' },
    { term: 'die Filmszene', definition: 'filmscene -- en enkelt scene i en film' },
    { term: 'der Neue Deutsche Film', definition: 'den nye tyske filmen (1960-1980) -- kunstnerisk ambisios filmbevegelse' },
    { term: 'das Filmfestival', definition: 'filmfestival -- Berlinale er Tysklands storste' },
  ],
};

// ============================================================================
// KAPITTEL 13.4 NARRATIV: Kulturkritik und Kunstdebatte
// ============================================================================

export const CHAPTER_TYSK_3_13_4_NARRATIV: TextbookChapter = {
  id: 'tysk-3-13-4-narrativ',
  courseId: 'tysk-3',
  chapterNumber: '13.4',
  title: 'Kulturkritik und Kunstdebatte',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om kunstkritikk, kunstnerisk frihet, offentlig kulturstotte, sensur og de store debattene om kunstens rolle i det tyske samfunnet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke varierte strategier for spraeklaering, tekstskaping og kommunikasjon',
  ],
  linkedChapterId: 'tysk-3-13-4',
  content: [
    {
      id: 'tysk-3-13-4-n-intro',
      type: 'text',
      content: `## Hvem bestemmer hva som er kunst?

Tenk deg folgende scenario: En kunstner stiller ut et verk pa et offentlig museum. Verket er provoserende -- kanskje stotende for noen. Noen mener det er et viktig kunstnerisk utsagn. Andre mener det er rent sjokkerende, og at det ikke burde vaere i et museum som er finansiert med skattebetalernes penger. Politikere krever at verket fjernes. Kunstnere protesterer og roper om sensur.

Hvem har rett? Hvem bestemmer hva som er kunst -- og hva som er akseptabelt?

I Tyskland er denne typen debatter langt fra hypotetiske. De er en levende, energisk del av det offentlige livet. Og det har de vaert i hundrevis av ar. Fra opplysningstiden (*die Aufklarung*) til i dag har tyske intellektuelle diskutert kunstens rolle i samfunnet, forholdet mellom kunst og politikk, og grensene for ytringsfrihet.

I dette kapittelet skal vi se naermere pa fire store temaer i den tyske kulturdebatten: **die Kunstfreiheit** (kunstnerisk frihet), **die Zensur** (sensur), **die offentliche Forderung** (offentlig kulturstotte) og **die Kulturpolitik** (kulturpolitikk). Vi skal se hvorfor disse debattene er sa viktige, og hva de kan laere oss om forholdet mellom kunst, makt og demokrati.`,
    },
    {
      id: 'tysk-3-13-4-n-section1',
      type: 'text',
      content: `## Kunstfreiheit -- Nar kunsten er grunnlovsfestet

La oss starte med det mest grunnleggende: I Tyskland er kunstnerisk frihet en **grunnlovsfestet rettighet**. Artikkel 5, avsnitt 3 i den tyske grunnloven (**das Grundgesetz**) sier:

*"Kunst und Wissenschaft, Forschung und Lehre sind frei."*

Kunst og vitenskap, forskning og undervisning er frie. Punktum. Ferdig. Ingen unntak, ingen forbehold. Det er en av de korteste og mest kraftfulle setningene i hele grunnloven.

Men hva betyr dette i praksis? Det betyr at staten ikke har lov til a begrense den kunstneriske friheten (*die Kunstfreiheit nicht einschranken darf*). En kunstner kan male, skrive, filme, synge eller skulptere hva som helst -- og staten kan ikke forby det fordi den ikke liker innholdet.

Eller kan den? For her begynner det a bli komplisert. Hva nar kunstnerisk frihet kolliderer med andre rettigheter? Hva nar en kunstner fornsermer (*beleidigt*) noen? Hva nar et kunstverk krenker menneskeverdet (*die Menschenwurde*)? Hva nar kunst sprer hat (*Hass verbreitet*)?

Dette er sporsmaal som tyske domstoler og debattanter har slitt med i artiaar. Det finnes ingen enkle svar. Pa den ene siden star prinsippet om at kunst ma vaere fri -- at et demokrati som sensurerer kunst, undergraver seg selv. Pa den andre siden star beskyttelsen av menneskeverd og andre grunnrettigheter.

La oss se pa en fiktiv debatt som illustrerer posisjonene:

**Person A** sier: *"Kunst muss frei sein. Auch wenn sie provoziert und schockiert."* -- Kunst ma vaere fri, selv nar den provoserer og sjokkerer.

**Person B** svarer: *"Kunstfreiheit hat Grenzen. Wenn Kunst Menschen verletzt oder Hass verbreitet, ist das keine Kunst mehr, sondern Missbrauch der Freiheit."* -- Kunstfriheten har grenser. Nar kunst sarrer mennesker eller sprer hat, er det ikke lenger kunst, men misbruk av friheten.

**Person C** tilfoeyer: *"Die Frage ist nicht, ob Kunst frei sein soll, sondern wer entscheidet, wo die Grenzen liegen."* -- Sporsmalet er ikke om kunst skal vaere fri, men hvem som bestemmer hvor grensene gar.

Person Cs poeng er kanskje det viktigste: Sporsmalet om grenser er ogsa et sporsmaal om makt. Hvem bestemmer? Staten? Domstolene? Kunstnerne selv? Publikum?`,
    },
    {
      id: 'tysk-3-13-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Kunstfreiheit:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-4-n-quiz1-q0',
            task: 'Hva sier den tyske grunnloven (Grundgesetz) om kunst?',
            options: [
              { id: 'a', text: 'Kunst er fri, men ma godkjennes av staten', isCorrect: false },
              { id: 'b', text: 'Kunst og vitenskap, forskning og undervisning er frie', isCorrect: true },
              { id: 'c', text: 'Kunst er bare beskyttet hvis den er politisk noytral', isCorrect: false },
              { id: 'd', text: 'Kunsten er underlagt kulturministerens godkjennelse', isCorrect: false },
            ],
            solution: 'Artikkel 5, avsnitt 3 i Grundgesetz slaar fast: "Kunst und Wissenschaft, Forschung und Lehre sind frei." Kunstnerisk frihet er grunnlovsfestet uten forbehold.',
          },
          {
            id: 'tysk-3-13-4-n-quiz1-q1',
            task: 'Hva betyr "die Menschenwurde" pa norsk?',
            options: [
              { id: 'a', text: 'Menneskerettigheter', isCorrect: false },
              { id: 'b', text: 'Menneskeverd (Mensch = menneske + Wurde = verdighet)', isCorrect: true },
              { id: 'c', text: 'Menneskelig svakhet', isCorrect: false },
              { id: 'd', text: 'Menneskemaskin', isCorrect: false },
            ],
            solution: 'Die Menschenwurde betyr menneskeverd, satt sammen av Mensch (menneske) og Wurde (verdighet). Krenkelse av menneskeverdet (Verletzung der Menschenwurde) er en av de fa grensene for kunstnerisk frihet i tysk rett.',
          },
          {
            id: 'tysk-3-13-4-n-quiz1-q2',
            task: 'Hva er kjernesporsmalet i debatten om kunstnerisk frihet?',
            options: [
              { id: 'a', text: 'Om kunst bor vaere gratis for publikum', isCorrect: false },
              { id: 'b', text: 'Om musikk er viktigere enn billedkunst', isCorrect: false },
              { id: 'c', text: 'Hvem som bestemmer hvor grensene for kunstnerisk frihet gar', isCorrect: true },
              { id: 'd', text: 'Om utenlandske kunstnere bor fa stille ut i Tyskland', isCorrect: false },
            ],
            solution: 'Kjernesporsmalet er ikke om kunst skal vaere fri (det er grunnlovsfestet), men hvem som bestemmer hvor grensene gar: staten, domstolene, kunstnerne selv eller publikum? Det er et sporsmaal om makt.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-4-n-section2',
      type: 'text',
      content: `## Offentliche Forderung -- 14 milliarder euro til kultur

Na skal vi snakke om penger. For kunst koster. Operahus ma drives. Museer ma holdes apne. Orkestre ma ha musikere. Og i Tyskland betaler staten en stor del av regningen.

Tyskland har et av verdens mest generose systemer for offentlig kulturstotte (*die offentliche Forderung*). Prinsippet er at kultur er et offentlig gode som alle skal ha tilgang til -- ikke bare de rike. Dette kalles **der Kulturauftrag** -- kulturoppdraget. Staten har et ansvar for a sikre og fremme kulturlivet.

La oss se pa noen tall som er ganske oppsiktsvekkende:
- Over **80 offentlig finansierte operahus** -- flere enn noe annet land i verden
- Ca. **130 profesjonelle orkestre**
- Over **6.000 museer**
- Ca. **820 offentlige teatre**
- Totalt ca. **14 milliarder euro** i aarlig offentlig kulturstotte

Det tyske kulturstoettesystemet er delt pa tre nivaaer. Pa toppen har vi **Bund** (den foederale staten), som finansierer nasjonale institusjoner som Stiftung Preussischer Kulturbesitz. Sa har vi de 16 **Landern** (delstatene), som har hovedansvaret for **die Kulturpolitik** -- kulturpolitikken. Hvert land har egne teatre, museer og orkestre. Og pa det lokale nivaaet har vi **Kommunen** (kommunene), som driver lokale kulturhus, biblioteker og musikkskoler.

Men denne generositeten utloeser ogsa debatt. Kritikere mener at for mye offentlig stotte gjor kunsten avhengig av politiske beslutninger. Hvem bestemmer hvilke kunstnere og prosjekter som far stotte? Blir det politisk "trygg" kunst som far penger, mens den provoserende, eksperimentelle kunsten faller utenfor?

Tilhengere svarer at markedet alene ikke kan sikre kulturelt mangfold. Uten offentlig stotte ville mange teatre, museer og operahus matte stenge, og kultur ville bli et privilegium for de rike. Og det tyske systemet har faktisk produsert et kulturlandskap som er enestaaende i verden -- rikt, mangfoldig og tilgjengelig for brede lag av befolkningen.`,
    },
    {
      id: 'tysk-3-13-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa offentlig kulturstotte:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-4-n-quiz2-q0',
            task: 'Hvor mye bruker Tyskland aarlig pa offentlig kulturstotte?',
            options: [
              { id: 'a', text: 'Ca. 2 milliarder euro', isCorrect: false },
              { id: 'b', text: 'Ca. 14 milliarder euro', isCorrect: true },
              { id: 'c', text: 'Ca. 50 milliarder euro', isCorrect: false },
              { id: 'd', text: 'Ca. 100 millioner euro', isCorrect: false },
            ],
            solution: 'Tyskland bruker ca. 14 milliarder euro aarlig pa offentlig kulturstotte. Dette finansierer over 80 operahus, ca. 130 orkestre, over 6.000 museer og ca. 820 teatre -- fordelt pa stat, delstater og kommuner.',
          },
          {
            id: 'tysk-3-13-4-n-quiz2-q1',
            task: 'Hva betyr "der Kulturauftrag"?',
            options: [
              { id: 'a', text: 'En bestilling av et kunstverk', isCorrect: false },
              { id: 'b', text: 'Kulturoppdraget -- ideen om at staten har ansvar for a sikre og fremme kulturlivet', isCorrect: true },
              { id: 'c', text: 'En kulturell ordre fra regjeringen', isCorrect: false },
              { id: 'd', text: 'Et budsjettdokument for kulturministeriet', isCorrect: false },
            ],
            solution: 'Der Kulturauftrag betyr kulturoppdraget -- ideen om at staten har et ansvar for a sikre og fremme kulturlivet for alle borgere, ikke bare en elite. Det er et sentralt prinsipp i tysk kulturpolitikk.',
          },
          {
            id: 'tysk-3-13-4-n-quiz2-q2',
            task: 'Hva er det viktigste motargumentet mot offentlig kulturstotte?',
            options: [
              { id: 'a', text: 'At kunst er unoedvendig i et moderne samfunn', isCorrect: false },
              { id: 'b', text: 'At for mye offentlig stotte gjor kunsten avhengig av politiske beslutninger', isCorrect: true },
              { id: 'c', text: 'At bare klassisk musikk bor stottes', isCorrect: false },
              { id: 'd', text: 'At Tyskland ikke har rad til kulturstotte', isCorrect: false },
            ],
            solution: 'Kritikere mener at for mye offentlig stotte kan gjore kunsten avhengig av politiske beslutninger -- de som fordeler penger far makt over kunsten. Tilhengere svarer at markedet alene ikke sikrer kulturelt mangfold.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-4-n-section3',
      type: 'text',
      content: `## Provokation und Kontroverse -- Nar kunsten ryster

Kunst som ikke provoserer er kanskje ikke kunst i det hele tatt -- i hvert fall ikke i den tyske tradisjonen. Tyskland har en rekke beroemte kunstkontroverser som har utloest brede offentlige diskusjoner.

**Documenta i Kassel** er verdens viktigste utstilling for samtidskunst, og den har vaert arnested for flere store kontroverser. I 2022 utloste verket "People's Justice" av den indonesiske gruppen Taring Padi en massiv debatt om antisemittisme i kunsten. Verket inneholdt antisemittiske stereotyper, og det ble til slutt fjernet. Saken reiste fundamentale sporsmaal: Hvem sjekker kunsten for stotende innhold? Bor kunst sensureres? Og hva gjor vi nar grensene mellom kunstnerisk uttrykk og hatefulle stereotyper er uklare?

En helt annen type kontrovers oppsto i 1995, da kunstnerparet **Christo og Jeanne-Claude** pakket inn den tyske Riksdagsbygningen (**Reichstag**) i Berlin i stoff. Prosjektet var ekstremt kontroversielt pa forhand -- mange politikere mente det var respektlost overfor et nasjonalsymbol. Men da det ble gjennomfort, ble det en folkefest. Fem millioner mennesker kom for a se det innpakkede Reichstag. Det ble et symbol pa det nye, gjenforente Tyskland -- kreativt, apent og selvironisk.

Og sa er det historien om **Gunter Grass**, en av Tysklands storste forfattere og vinner av Nobelprisen i litteratur. I 2006 innrommet han at han som ungdom hadde vaert medlem av Waffen-SS. For en mann som hadde bygget hele sin karriere pa moralsk autoritet og kritikk av Tysklands manglende oppgjor med nazitiden, var dette et sjokk. Debatten som fulgte handlet om det vanskelige forholdet mellom kunst og moral: Kan vi stole pa en moralist som selv har en morkt hemmelighet?

Disse kontroversene viser noe viktig: I et levende demokrati *skal* kunst provosere. Den skal stille ubehagelige sporsmaal. Og debatten som folger er ikke et problem -- den er en styrke.`,
    },
    {
      id: 'tysk-3-13-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa provokasjon og kontrovers i kunsten:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-4-n-quiz3-q0',
            task: 'Hva er Documenta?',
            options: [
              { id: 'a', text: 'En tysk filmfestival i Berlin', isCorrect: false },
              { id: 'b', text: 'Verdens viktigste utstilling for samtidskunst, i Kassel', isCorrect: true },
              { id: 'c', text: 'Et tysk dokumentarfilmselskap', isCorrect: false },
              { id: 'd', text: 'En database over tysk kulturarv', isCorrect: false },
            ],
            solution: 'Documenta i Kassel er verdens viktigste utstilling for samtidskunst. Den har vaert arnested for flere store kontroverser, inkludert debatten om antisemittisme i 2022.',
          },
          {
            id: 'tysk-3-13-4-n-quiz3-q1',
            task: 'Hva skjedde nar Christo og Jeanne-Claude pakket inn Reichstag i 1995?',
            options: [
              { id: 'a', text: 'Prosjektet ble avlyst pa grunn av protester', isCorrect: false },
              { id: 'b', text: 'Det var kontroversielt pa forhand, men ble en folkefest med 5 millioner besokende', isCorrect: true },
              { id: 'c', text: 'Ingen la merke til det', isCorrect: false },
              { id: 'd', text: 'Politiet stanset prosjektet', isCorrect: false },
            ],
            solution: 'Innpakningen av Reichstag var svart kontroversiell pa forhand, men ble en enorm folkefest med 5 millioner besokende. Det ble et symbol pa det nye, gjenforente Tyskland -- kreativt, apent og selvironisk.',
          },
          {
            id: 'tysk-3-13-4-n-quiz3-q2',
            task: 'Hva betyr "die Zensur" pa norsk?',
            options: [
              { id: 'a', text: 'Sensur -- undertrykking av ytringer', isCorrect: true },
              { id: 'b', text: 'Sensor -- en person som bedoemmer eksamener', isCorrect: false },
              { id: 'c', text: 'Sentralisering -- a samle makt', isCorrect: false },
              { id: 'd', text: 'Sending -- a sende et TV-program', isCorrect: false },
            ],
            solution: 'Die Zensur betyr sensur -- undertrykking av ytringer. Sensur er forbudt i Tyskland ifolge Grundgesetz, men debatten om grensene for kunstnerisk uttrykk er stadig aktuell.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-4-n-section4',
      type: 'text',
      content: `## Die Leitkultur-Debatte -- Hva er egentlig "tysk kultur"?

Det finnes en debatt i Tyskland som er sa het at den kan faa temperaturen til a stige i ethvert middagsselskap: **die Leitkultur-Debatte** -- debatten om "ledende kultur" eller "referansekultur".

Sporsmalet hoeres enkelt ut: Finnes det en felles tysk kultur? Og hva inneholder den i sa fall?

Den ene siden argumenterer for at det finnes en felles tysk kultur basert pa verdier som demokrati (*Demokratie*), likestilling (*Gleichberechtigung*) og ytringsfrihet (*Meinungsfreiheit*). Disse verdiene er forankret i Grundgesetz og utgjor et felles fundament som alle som lever i Tyskland -- uansett bakgrunn -- bor dele.

Den andre siden ser begrepet "Leitkultur" som problematisk. De mener det er et forsok pa a begrense kulturelt mangfold (*kulturelle Vielfalt einzuschranken*) og utestenge migranter (*Migranten auszugrenzen*). I en globalisert verden, argumenterer de, er ideen om en enhetlig nasjonal kultur utdatert.

Og sa er det sporsmalet som den tyske teksten vi studerer stiller: *"Was bedeutet 'deutsche Kultur' uberhaupt noch?"* -- Hva betyr "tysk kultur" egentlig i dag? Er det Bach og Beethoven? Bauhaus? Techno? Bratwurst og Bier? Eller er det demokrati, ytringsfrihet og menneskerettigheter?

Debatten har ingen endelig loesning, og det er kanskje poenget. I et apent, demokratisk samfunn er sporsmalet om kulturell identitet alltid i bevegelse. Det viktige er ikke a finne *det* svaret, men a fortsette samtalen -- respektfullt, nysgjerrig og med vilje til a lytte til hverandre.

Og kanskje er det nettopp *det* som er den tyske Leitkultur i dag: viljen til a debattere, til a stille vanskelige sporsmaal, til a aldri ta noe for gitt. Fra den Kunstfreiheit som er grunnlovsfestet, via den sjenerose offentliche Forderung, til de heftige debattene om Provokation og Zensur -- alt handler om det samme grunnleggende sporsmalet: Hva slags samfunn vil vi vaere?

**Sentrale begreper i kulturdebatten:**

| Tysk | Norsk |
|------|-------|
| die Kulturkritik | kulturkritikk |
| die Kunstdebatte | kunstdebatt |
| die Kulturpolitik | kulturpolitikk |
| die Zensur | sensur |
| die Kunstfreiheit | kunstnerisk frihet |
| die offentliche Forderung | offentlig stotte/finansiering |
| der Kulturauftrag | kulturoppdraget |
| die Meinungsfreiheit | ytringsfrihet |
| der Kulturbetrieb | kulturbransjen |
| die Provokation | provokasjon |
| die Asthetik | estetikk |
| der Diskurs | diskurs, debatt |`,
    },
    {
      id: 'tysk-3-13-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Leitkultur-debatten og kulturpolitikk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'tysk-3-13-4-n-quiz4-q0',
            task: 'Hva er "die Leitkultur-Debatte"?',
            options: [
              { id: 'a', text: 'En debatt om Tysklands ledende rolle i europeisk kulturpolitikk', isCorrect: false },
              { id: 'b', text: 'En debatt om hvorvidt det finnes en felles tysk kultur og hva den inneholder', isCorrect: true },
              { id: 'c', text: 'En debatt om sensur av kontroversielle kunstverk', isCorrect: false },
              { id: 'd', text: 'En debatt om finansiering av offentlige kulturinstitusjoner', isCorrect: false },
            ],
            solution: 'Die Leitkultur-Debatte handler om hvorvidt det finnes en felles tysk referansekultur. Tilhengere mener den baseres pa verdier som demokrati og ytringsfrihet. Kritikere ser begrepet som ekskluderende overfor kulturelt mangfold.',
          },
          {
            id: 'tysk-3-13-4-n-quiz4-q1',
            task: 'Hva betyr "die Meinungsfreiheit"?',
            options: [
              { id: 'a', text: 'Frihet fra meninger -- a slippe a hore andres synspunkter', isCorrect: false },
              { id: 'b', text: 'Ytringsfrihet -- retten til a uttrykke sine meninger fritt', isCorrect: true },
              { id: 'c', text: 'Meningsfrihet -- retten til a vaere likegyldig', isCorrect: false },
              { id: 'd', text: 'Gratis kulturopplevelser', isCorrect: false },
            ],
            solution: 'Die Meinungsfreiheit betyr ytringsfrihet -- retten til a uttrykke sine meninger fritt. Satt sammen av Meinung (mening) og Freiheit (frihet). Det er en av verdiene som ofte nevnes som del av den tyske Leitkultur.',
          },
          {
            id: 'tysk-3-13-4-n-quiz4-q2',
            task: 'Hvem har hovedansvaret for kulturpolitikk i Tyskland?',
            options: [
              { id: 'a', text: 'Den foederale regjeringen alene', isCorrect: false },
              { id: 'b', text: 'EU-kommisjonen', isCorrect: false },
              { id: 'c', text: 'De 16 delstatene (Lander), med stotte fra stat og kommuner', isCorrect: true },
              { id: 'd', text: 'Private stiftelser og sponsorer', isCorrect: false },
            ],
            solution: 'De 16 delstatene (Lander) har hovedansvaret for kulturpolitikk i Tyskland. I tillegg bidrar den foederale staten (Bund) med nasjonale institusjoner, og kommunene driver lokale kulturhus, biblioteker og musikkskoler.',
          },
          {
            id: 'tysk-3-13-4-n-quiz4-q3',
            task: 'Hvorfor er det viktig at kunst provoserer, ifolge kapittelet?',
            options: [
              { id: 'a', text: 'Fordi provoserende kunst selger bedre', isCorrect: false },
              { id: 'b', text: 'Fordi provokasjon og debatten som folger er en styrke for demokratiet', isCorrect: true },
              { id: 'c', text: 'Fordi kunstnere oensker a vaere upopulere', isCorrect: false },
              { id: 'd', text: 'Fordi staten krever at kunst skal vaere provoserende', isCorrect: false },
            ],
            solution: 'I et levende demokrati skal kunst stille ubehagelige sporsmaal og provosere til ettertanke. Debatten som folger er ikke et problem, men en styrke -- den tvinger oss til a tenke over hva vi mener om kunst, frihet og grenser.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'tysk-3-13-4-n-summary',
      type: 'note',
      title: 'Oppsummering: Kulturkritik und Kunstdebatte',
      content: `**Det viktigste fra dette kapittelet:**

- **Die Kunstfreiheit** (kunstnerisk frihet) er grunnlovsfestet i Tyskland gjennom Grundgesetz, artikkel 5. Kunst og vitenskap er frie.
- Debatten om **grensene** for kunstnerisk frihet handler om nar kunst kolliderer med andre rettigheter som menneskeverd (die Menschenwurde).
- Tyskland bruker ca. **14 milliarder euro** aarlig pa offentlig kulturstotte (die offentliche Forderung), som finansierer over 80 operahus, 130 orkestre og 6.000 museer.
- **Der Kulturauftrag** (kulturoppdraget) er ideen om at staten har ansvar for a sikre kulturlivet for alle borgere.
- Kontroverser som **Documenta 2022** og **innpakningen av Reichstag (1995)** viser at kunst og provokasjon hoerer sammen i et demokrati.
- **Die Leitkultur-Debatte** handler om felles tysk kultur og identitet i et mangfoldig samfunn.
- Forholdet mellom kunst, politikk og sensur er et stadig aktuelt tema i Tyskland.

**Sentrale tyske begreper:** die Kulturkritik, die Kunstdebatte, die Kulturpolitik, die Zensur, die Kunstfreiheit, die offentliche Forderung, der Kulturauftrag, die Meinungsfreiheit`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Kulturkritik', definition: 'kulturkritikk -- analyse og vurdering av kultur og samfunn' },
    { term: 'die Kunstdebatte', definition: 'kunstdebatt -- offentlig diskusjon om kunstens rolle og grenser' },
    { term: 'die Kulturpolitik', definition: 'kulturpolitikk -- statlig politikk for kultur og kunst' },
    { term: 'die Zensur', definition: 'sensur -- undertrykking av ytringer, forbudt i Tyskland' },
    { term: 'die Kunstfreiheit', definition: 'kunstnerisk frihet -- grunnlovsfestet i Grundgesetz art. 5' },
    { term: 'die offentliche Forderung', definition: 'offentlig stotte/finansiering av kultur' },
    { term: 'der Kulturauftrag', definition: 'kulturoppdraget -- statens ansvar for a fremme kulturlivet' },
  ],
};

export const TYSK_3_NARRATIV_KAP11_13_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TYSK_3_11_1_NARRATIV,
  CHAPTER_TYSK_3_11_2_NARRATIV,
  CHAPTER_TYSK_3_11_3_NARRATIV,
  CHAPTER_TYSK_3_11_4_NARRATIV,
  CHAPTER_TYSK_3_12_1_NARRATIV,
  CHAPTER_TYSK_3_12_2_NARRATIV,
  CHAPTER_TYSK_3_12_3_NARRATIV,
  CHAPTER_TYSK_3_12_4_NARRATIV,
  CHAPTER_TYSK_3_13_1_NARRATIV,
  CHAPTER_TYSK_3_13_2_NARRATIV,
  CHAPTER_TYSK_3_13_3_NARRATIV,
  CHAPTER_TYSK_3_13_4_NARRATIV,
];
