/**
 * Tekstbok innhold for Historie - NARRATIV VERSJON
 * Kapittel 1: Historisk metode (lesevennlig fortellende format)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1 NARRATIV: Hva er historie?
// ============================================================================

export const CHAPTER_HISTORIE_1_1_NARRATIV: TextbookChapter = {
  id: 'historie-1-1-narrativ',
  courseId: 'historie',
  chapterNumber: '1.1',
  title: 'Hva er historie?',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan vi forstår fortiden og dens betydning for oss i dag.',
  estimatedMinutes: 45,
  competenceGoals: ['reflektere over hvordan fortiden former oss'],
  linkedChapterId: 'historie-1-1', // Lenke til originalversjonen
  content: [
    {
      id: 'historie-1-1-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/historie/historie-1-1-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: 'historie-1-1-n-intro',
      type: 'text',
      content: `## Detektiver i tid

Tenk deg at du finner en gammel kiste på loftet hos bestemoren din. Inni ligger det gulnede brev, svart-hvitt fotografier og en medaljong du aldri har sett før. Plutselig har du et mysterium i hendene: Hvem skrev disse brevene? Hvorfor ble dette fotografiet tatt akkurat der? Hva betyr denne medaljongen?

Dette er kjernen i historiefaget. Historikere er som detektiver, men i stedet for å løse krimgåter fra forrige uke, forsøker de å forstå hendelser som skjedde for tiår, århundrer – noen ganger årtusener – siden. De samler inn spor fra fortiden, setter dem sammen, og prøver å forstå hvordan mennesker levde, tenkte og handlet.

Men her kommer den store forskjellen mellom historikere og vanlige detektiver: Historikeren kan aldri «gjenta» hendelsen for å se hva som skjedde. Hvis politiet etterforsker et innbrudd, kan de rekonstruere hendelsene. De kan teste hypoteser. En historiker som studerer vikingtiden kan ikke reise tilbake og spørre en viking direkte. Alt vi har, er sporene som er igjen.`,
    },
    {
      id: 'historie-1-1-n-section1',
      type: 'text',
      content: `## Spor fra fortiden

Disse sporene kaller vi **kilder**. En kilde kan være nesten hva som helst: et gammelt dokument, ruinene av en bygning, en gjenstand i jorda, et maleri, en sang som har blitt sunget i generasjoner. Til og med navnet på gaten der du bor kan være en historisk kilde – kanskje den er oppkalt etter en person eller hendelse fra fortiden.

La oss ta et konkret eksempel. I 1904 brant store deler av Ålesund ned til grunnen i en av Norges verste bybranner. 10 000 mennesker ble hjemløse på én natt. Hvordan vet vi dette? Jo, fordi vi har kilder: Aviser fra dagene etter brannen, brev fra folk som var der, fotografier av ruinene, brannrapporter, og ikke minst – selve byen som ble gjenoppbygd i jugendstil og fortsatt står der i dag.

Men her er det viktige: Ingen av disse kildene forteller hele sannheten alene. Avisene skrev kanskje dramatisk for å selge flere eksemplarer. Brevene viser bare én persons opplevelse. Fotografiene viser bare det fotografen valgte å ta bilde av. Først når vi setter alle kildene sammen, kan vi begynne å danne oss et bilde av hva som faktisk skjedde.`,
    },
    {
      id: 'historie-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom en historiker og en kriminaletterforsker?',
        options: [
          { id: 'a', text: 'Historikere arbeider med eldre saker', isCorrect: false },
          { id: 'b', text: 'Historikere kan ikke gjenta eller eksperimentere med hendelsene de studerer', isCorrect: true },
          { id: 'c', text: 'Historikere har flere kilder å jobbe med', isCorrect: false },
          { id: 'd', text: 'Historikere jobber alltid alene', isCorrect: false },
        ],
        solution: 'Den avgjørende forskjellen er at historikere ikke kan gjenta fortiden. En politietterforsker kan rekonstruere hendelser og teste teorier, men en historiker er helt avhengig av de sporene som tilfeldigvis har overlevd.',
      },
    },
    {
      id: 'historie-1-1-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/historie/historie-1-1-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: 'historie-1-1-n-section2',
      type: 'text',
      content: `## De store spørsmålene

Historiefaget handler ikke bare om å finne ut *hva* som skjedde. Det handler minst like mye om *hvorfor* det skjedde og *hva konsekvensene ble*.

Ta for eksempel første verdenskrig. Vi vet at krigen brøt ut i 1914 etter at den østerriksk-ungarske tronarvingen Franz Ferdinand ble skutt i Sarajevo. Men hvis vi stopper der, har vi ikke forstått noe som helst. Den virkelig interessante historien handler om hvorfor dette ene attentatet utløste en verdenskrig der millioner døde. Hvorfor hadde europeiske stormakter bygget opp enorme armeer? Hvorfor var de så ivrige etter å gå til krig? Hvilke allianser trakk landene inn i konflikten?

Og kanskje viktigst av alt: Hvordan påvirker denne krigen oss i dag, over hundre år senere?

Dette bringer oss til et sentralt begrep: **historiebevissthet**. Det høres kanskje abstrakt ut, men ideen er enkel: Alt som eksisterer i dag – samfunnet vårt, lovene våre, grensene våre, til og med måten vi tenker på – er formet av fortiden. Og våre handlinger i dag vil forme fremtiden.`,
    },
    {
      id: 'historie-1-1-n-section3',
      type: 'text',
      content: `## Fortidens lange skygger

La oss ta et hverdagslig eksempel. Hvorfor feirer vi 17. mai? Fordi Grunnloven ble undertegnet på Eidsvoll den datoen i 1814. Men gå dypere: Hvorfor fikk Norge en grunnlov akkurat da? Jo, fordi Napoleon hadde tapt krigen, og Danmark – som hadde støttet Napoleon – måtte gi fra seg Norge til Sverige som «krigsbytte». I stedet for å akseptere dette, grep norske embedsmenn sjansen til å lage en egen grunnlov.

Så hver 17. mai feirer vi egentlig konsekvensene av Napoleonskrigene. De franske soldatene som frøs i hjel på tilbaketrekningen fra Moskva i 1812 visste ikke at de indirekte bidro til at norske barn ville gå i tog med is og pølser to hundre år senere.

Dette er historiebevissthet i praksis: å forstå at fortid, nåtid og fremtid henger sammen i en ubrutt kjede.`,
    },
    {
      id: 'historie-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva betyr «historiebevissthet»?',
        options: [
          { id: 'a', text: 'Å kunne mange årstall og navn fra historien', isCorrect: false },
          { id: 'b', text: 'Å forstå sammenhengen mellom fortid, nåtid og fremtid', isCorrect: true },
          { id: 'c', text: 'Å være interessert i historie som hobby', isCorrect: false },
          { id: 'd', text: 'Å ha studert historie på universitet', isCorrect: false },
        ],
        solution: 'Historiebevissthet handler om å forstå at nåtiden er formet av fortiden, og at våre handlinger i dag vil forme fremtiden. Det er en forståelse av sammenhengen i tiden.',
      },
    },
    {
      id: 'historie-1-1-n-section4',
      type: 'text',
      content: `## Historiens synlige og usynlige spor

Noen historiske spor er lette å se. Akershus festning står midt i Oslo og minner oss om middelalderen. Stortingsbygningen fra 1866 forteller om 1800-tallets nasjonsbygging. Krigsminnesmerker over hele landet minner om okkupasjonstiden.

Men de usynlige sporene er kanskje enda viktigere. Hvorfor har vi ytringsfrihet? Fordi folk kjempet for det gjennom århundrer, og ideene ble nedfelt i Grunnloven. Hvorfor har vi et helsevesen som er tilgjengelig for alle? Fordi arbeiderbevegelsen på 1900-tallet kjempet fram velferdsstaten. Hvorfor har vi likestilling mellom menn og kvinner? Fordi kvinner – og menn – har kjempet for dette i generasjoner.

Disse «usynlige» historiske sporene former hverdagen vår mer enn noen festning eller statue. De er innvevd i lovene, institusjonene, verdiene og forventningene vi har til samfunnet.`,
    },
    {
      id: 'historie-1-1-n-section5',
      type: 'text',
      content: `## Andre verdenskrig: Et eksempel på fortidens lange arm

For å virkelig forstå hvor dypt fortiden griper inn i nåtiden, la oss se på andre verdenskrig – en hendelse som fortsatt former verden over 80 år senere.

**FN og menneskerettighetene:** FN ble opprettet i 1945 spesifikt for å hindre nye verdenskonfliker. FNs menneskerettighetserklæring fra 1948 var et direkte svar på Holocaust og krigens grusomheter. Hver gang du hører om menneskerettigheter i nyhetene, hører du et ekko fra andre verdenskrig.

**Europa-samarbeidet:** EU startet som et prosjekt for å knytte Frankrike og Tyskland så tett sammen økonomisk at krig mellom dem ble umulig. Den kranglingen om fiskekvoter og budsjetter som fyller nyhetene, er egentlig en fredsprosess som begynte i ruinene av 1945.

**Norges utenrikspolitikk:** Norge valgte NATO-medlemskap i 1949 – et direkte resultat av erfaringene fra 9. april 1940, da nøytralitetspolitikken viste seg å ikke beskytte oss. Den debatten vi har i dag om forsvar, allianser og sikkerhetspolitikk, har røtter i denne erfaringen.

**Minnekultur:** 8. mai er frigjøringsdagen. Vi har holocaustundervisning i skolen. Krigsminnesmerker finnes i nesten hver eneste norske kommune. Alt dette er aktive valg om å huske – og dermed påvirke fremtiden.`,
    },
    {
      id: 'historie-1-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvorfor ble FN opprettet i 1945?',
        options: [
          { id: 'a', text: 'For å organisere OL og andre internasjonale arrangementer', isCorrect: false },
          { id: 'b', text: 'For å hindre nye verdenskonfliker etter erfaringene fra andre verdenskrig', isCorrect: true },
          { id: 'c', text: 'For å hjelpe med gjenoppbyggingen av Europa', isCorrect: false },
          { id: 'd', text: 'For å regulere internasjonal handel', isCorrect: false },
        ],
        solution: 'FN ble opprettet som en direkte respons på andre verdenskrig, med hovedmål å forhindre nye verdenskonfliker gjennom internasjonalt samarbeid og dialog.',
      },
    },
    {
      id: 'historie-1-1-n-section6',
      type: 'text',
      content: `## «Den som ikke kjenner historien...»

Det finnes et kjent sitat, ofte tilskrevet filosofen George Santayana: «Den som ikke kjenner historien, er dømt til å gjenta den.» Det høres klokt ut, men er det sant?

Både ja og nei. Historie gjentar seg aldri helt likt – omstendighetene er alltid forskjellige. Men *mønstre* kan gjenta seg. Økonomiske bobler sprekker. Politisk ekstremisme kan vokse i krisetider. Kriger starter ofte av misforståelser og feilvurderinger. Å kjenne historien gir oss ikke en krystallkule, men det gir oss et bibliotek av erfaringer å lære av.

Samtidig er det ingen garanti for at kunnskap fører til klokskap. Verden visste om farene ved nasjonalisme etter første verdenskrig – likevel kom andre verdenskrig. Vi vet om historiens folkemord – likevel fortsetter folkemord å skje. Historiekunnskap er nødvendig, men ikke tilstrekkelig, for å unngå fortidens feil.

Kanskje er det derfor vi studerer historie: Ikke fordi det gir oss alle svarene, men fordi det gir oss bedre spørsmål.`,
    },
    {
      id: 'historie-1-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er den mest presise beskrivelsen av påstanden «den som ikke kjenner historien, er dømt til å gjenta den»?',
        options: [
          { id: 'a', text: 'Den er helt sann – kunnskap om historie forhindrer alltid feil', isCorrect: false },
          { id: 'b', text: 'Den er helt usann – historie gjentar seg aldri', isCorrect: false },
          { id: 'c', text: 'Den er delvis sann – mønstre kan gjenta seg, men kunnskap alene er ikke nok', isCorrect: true },
          { id: 'd', text: 'Den handler bare om krig, ikke andre historiske hendelser', isCorrect: false },
        ],
        solution: 'Historiske mønstre kan gjenta seg, og kunnskap om dem er verdifull. Men kunnskap alene garanterer ikke at vi unngår å gjøre de samme feilene – det krever også vilje til å handle på kunnskapen.',
      },
    },
    {
      id: 'historie-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Historiefaget handler om mer enn å memorere datoer og navn. Det handler om å forstå *hvorfor* ting skjedde, og *hvordan* fortiden fortsetter å forme oss i dag.

**Nøkkelbegreper du nå kjenner:**
- **Historiker**: En forsker som studerer fortiden ved å analysere kilder
- **Kilder**: Spor fra fortiden – dokumenter, gjenstander, bygninger, tradisjoner
- **Historiebevissthet**: Forståelsen av at fortid, nåtid og fremtid henger sammen

**Det viktigste du tar med deg:**
Hver gang du ser på samfunnet rundt deg – lovene, institusjonene, verdiene – husk at alt dette har en historie. Og historien du lever nå, vil forme fremtiden.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2 NARRATIV: Kilder og kildekritikk
// ============================================================================

export const CHAPTER_HISTORIE_1_2_NARRATIV: TextbookChapter = {
  id: 'historie-1-2-narrativ',
  courseId: 'historie',
  chapterNumber: '1.2',
  title: 'Kilder og kildekritikk',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan vi vurderer troverdigheten til historiske kilder.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske fortiden - stille spørsmål, bruke historisk materiale'],
  linkedChapterId: 'historie-1-2',
  content: [
    {
      id: 'historie-1-2-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/historie/historie-1-2-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: 'historie-1-2-n-intro',
      type: 'text',
      content: `## Vinduet til fortiden

Alt vi vet om fortiden – absolutt alt – kommer fra kilder. Uten kilder ville fortiden vært som et mørkt rom vi aldri kunne se inn i. Kildene er våre vinduer, våre kikkhull, våre glimt av det som har vært.

Men her er utfordringen: Vinduene er ofte små, skitne eller skakke. De viser oss bare en del av rommet, fra én bestemt vinkel. Noen vinduer er til og med falske – speil som viser noe helt annet enn det som faktisk er der.

Dette er grunnen til at **kildekritikk** er den viktigste ferdigheten en historiker må ha. Kildekritikk er kunsten å vurdere om en kilde er til å stole på, og i så fall – til hva.`,
    },
    {
      id: 'historie-1-2-n-section1',
      type: 'text',
      content: `## En soldat skriver hjem

La oss starte med et eksempel. Vi finner et brev fra 1943, skrevet av en norsk soldat som kjempet på østfronten i Den norske legion (norske frivillige som kjempet på tysk side). Han skriver til foreldrene sine:

*«Kjære mor og far. Jeg har det bra her. Vi kjemper for Europas fremtid mot bolsjevismen. Motet er høyt, og vi vet at seieren vil bli vår. Jeg savner dere, men dette er noe jeg må gjøre. Hilsen fra deres sønn.»*

Er dette en god kilde til å forstå krigen på østfronten? Svaret er: Det kommer an på hva du vil vite.

**Hva kan brevet fortelle oss?**
- At noen nordmenn virkelig trodde på den tyske saken
- Hvordan propagandaspråket («Europas fremtid», «bolsjevismen») ble brukt
- At soldaten ønsket å berolige foreldrene
- At han savnet hjemmet

**Hva kan brevet IKKE fortelle oss?**
- Hvordan forholdene faktisk var ved fronten
- Hva soldaten egentlig følte (han ville kanskje ikke bekymre foreldrene)
- Krigens gang eller militære detaljer
- Hva andre soldater opplevde

Brevet er en **primærkilde** – en førstehåndsberetning fra den tiden vi studerer. Men det betyr ikke at alt som står i det er sant eller representativt.`,
    },
    {
      id: 'historie-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er en primærkilde?',
        options: [
          { id: 'a', text: 'Den viktigste kilden i en undersøkelse', isCorrect: false },
          { id: 'b', text: 'En førstehåndsberetning fra den tiden som studeres', isCorrect: true },
          { id: 'c', text: 'En kilde som alltid er pålitelig', isCorrect: false },
          { id: 'd', text: 'En bok skrevet av en historiker', isCorrect: false },
        ],
        solution: 'En primærkilde er en førstehåndsberetning fra den perioden som studeres – for eksempel et brev, en dagbok, et dokument eller en gjenstand fra tiden.',
      },
    },
    {
      id: 'historie-1-2-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/historie/historie-1-2-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: 'historie-1-2-n-section2',
      type: 'text',
      content: `## Primærkilder og sekundærkilder

Historikere skiller mellom to hovedtyper kilder:

**Primærkilder** er spor fra selve tiden vi studerer:
- Brev, dagbøker og notater
- Offisielle dokumenter (lover, traktater, rettsprotokoller)
- Aviser og tidsskrifter fra perioden
- Fotografier, filmopptak, lydopptak
- Gjenstander og bygninger
- Kunst, musikk og litteratur fra tiden

**Sekundærkilder** er tolkninger og analyser laget i ettertid:
- Historiebøker og forskningsartikler
- Dokumentarer
- Leksikon og oppslagsverk
- Lærebøker (som denne!)

Men her er en fallgruve mange går i: De tror at primærkilder alltid er bedre enn sekundærkilder. Det stemmer ikke!

En primærkilde kan lyve, overdrive, eller bare ha et veldig begrenset perspektiv. Soldaten som skrev hjem ville kanskje ikke innrømme at han var redd. Kongen som skrev kronikken om sine bragder ville kanskje ikke nevne nederlaget. En sekundærkilde – for eksempel en historiebok skrevet i 2020 – kan ha sammenlignet hundrevis av primærkilder og satt sammen et mer komplett bilde.

Det viktige er ikke *hvilken type* kilde du bruker, men *hvordan* du bruker den.`,
    },
    {
      id: 'historie-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En lærebok om andre verdenskrig skrevet i 2020 er:',
        options: [
          { id: 'a', text: 'En primærkilde', isCorrect: false },
          { id: 'b', text: 'En sekundærkilde', isCorrect: true },
          { id: 'c', text: 'Verken primær- eller sekundærkilde', isCorrect: false },
          { id: 'd', text: 'Både primær- og sekundærkilde', isCorrect: false },
        ],
        solution: 'En lærebok skrevet i ettertid er en sekundærkilde – den baserer seg på og tolker andre kilder for å gi en fremstilling av fortiden.',
      },
    },
    {
      id: 'historie-1-2-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/historie/historie-1-2-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: 'historie-1-2-n-section3',
      type: 'text',
      content: `## De fire kildekritiske spørsmålene

Når historikere møter en ny kilde, stiller de fire grunnleggende spørsmål. La oss bruke en konkret kilde som eksempel: En nazistisk propagandaplakat fra 1942 som oppfordrer nordmenn til å melde seg som frontkjempere.

**1. OPPHAV – Hvem står bak kilden?**

Dette er kanskje det viktigste spørsmålet. Plakaten er laget av okkupasjonsmakten eller NS (Nasjonal Samling). De har en klar agenda: å rekruttere nordmenn til å kjempe for Tyskland. Alt på plakaten må forstås i lys av dette.

**2. FORMÅL – Hvorfor ble kilden laget?**

Formålet her er krystallklart: propaganda. Plakaten skal overtale, ikke informere objektivt. Den vil appellere til følelser – kanskje patriotisme, eventyrlyst, ideologi eller gruppepress. Målgruppen er unge norske menn.

**3. TID OG STED – Når og hvor ble kilden laget?**

1942 var midt i krigen, før vendepunktet ved Stalingrad. Tyskerne trengte flere soldater. Plakaten er laget i okkupert Norge, under tysk kontroll. Disse omstendighetene forklarer hvorfor kilden eksisterer.

**4. SAMSVAR – Støttes kilden av andre kilder?**

Stemmer innholdet på plakaten med det vi vet fra andre kilder? Vi vet fra andre kilder at tyske propagandister faktisk jobbet aktivt for å rekruttere skandinaver. Vi vet også at noen tusen nordmenn faktisk meldte seg. Men plakaten overdriver nok entusiasmen og utelater at flertallet av nordmenn var motstandere av okkupasjonen.`,
    },
    {
      id: 'historie-1-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kan en nazistisk propagandaplakat fra 1942 være en god kilde til?',
        options: [
          { id: 'a', text: 'Sannheten om krigens gang', isCorrect: false },
          { id: 'b', text: 'Hva nordmenn flest mente om okkupasjonen', isCorrect: false },
          { id: 'c', text: 'Hvilke argumenter okkupantene brukte for å rekruttere nordmenn', isCorrect: true },
          { id: 'd', text: 'Antall nordmenn som meldte seg som frontkjempere', isCorrect: false },
        ],
        solution: 'Selv om propagandaen ikke er objektiv sannhet, er den en utmerket kilde til å forstå *hvordan* okkupantene forsøkte å overtale nordmenn – hvilke argumenter, symboler og appeller de brukte.',
      },
    },
    {
      id: 'historie-1-2-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/historie/historie-1-2-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: 'historie-1-2-n-section4',
      type: 'text',
      content: `## Levning og beretning

Historikere bruker også et annet skille: mellom kilden som **levning** og kilden som **beretning**.

**Levning** betyr at kilden er et direkte spor fra fortiden. Den «forteller» ikke noe – den bare *er*. En vikinggrav er en levning. Den forteller oss direkte at noen ble gravlagt på denne måten, på dette stedet.

**Beretning** betyr at kilden forteller om noe. En saga som beskriver samme gravlegging er en beretning. Den gir oss mer informasjon (hvem personen var, hvorfor de ble gravlagt slik), men denne informasjonen filtreres gjennom fortellerens perspektiv.

Her kommer det interessante: Samme kilde kan være både levning og beretning!

La oss gå tilbake til soldatens brev fra østfronten:
- Som **beretning**: Brevet forteller om soldatens tanker og opplevelser. Men vi vet ikke hvor mye som er sant.
- Som **levning**: Brevet er et direkte bevis på at norske soldater skrev hjem fra fronten, at de brukte denne typen språk, at postgang fungerte.

Som levning er brevet alltid pålitelig – det *er* et ekte brev fra den tiden. Som beretning må vi være mer kritiske.`,
    },
    {
      id: 'historie-1-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'En dagbok fra 1814 er som «levning» bevis på:',
        options: [
          { id: 'a', text: 'At alt forfatteren skrev er sant', isCorrect: false },
          { id: 'b', text: 'At noen i 1814 førte dagbok og skrev på denne måten', isCorrect: true },
          { id: 'c', text: 'At forfatteren var en viktig person', isCorrect: false },
          { id: 'd', text: 'At hendelsene i dagboken faktisk skjedde slik de beskrives', isCorrect: false },
        ],
        solution: 'Som levning er dagboken et direkte bevis på at den eksisterer – at noen førte dagbok, brukte dette språket, hadde tilgang til papir osv. Innholdet (beretningen) må vurderes mer kritisk.',
      },
    },
    {
      id: 'historie-1-2-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/historie/historie-1-2-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: 'historie-1-2-n-section5',
      type: 'text',
      content: `## Når kilder lyver – og når det er nyttig

Noen ganger er det mest interessante ved en kilde nettopp det den *ikke* sier, eller det den åpenbart overdriver.

Ta for eksempel de gamle egyptiske faraonenes inskripsjoner. Nesten alle beskriver faraoens seire, aldri nederlag. Er dette nyttige kilder? Absolutt! De forteller oss noe viktig: at faraonene ønsket å fremstille seg som uovervinnelige. De forteller om maktens selvbilde, om propagandaens regler i det gamle Egypt.

Eller ta aviser fra sovjettiden. De beskrev ofte rekordavlinger og arbeidernes entusiasme. Var dette sant? Ofte ikke. Men avisene er uvurderlige kilder til å forstå hvordan Sovjet-regimet ønsket å fremstille seg selv.

Selv løgner er nyttige for historikere – de forteller sannheten om løgneren.`,
    },
    {
      id: 'historie-1-2-n-section6',
      type: 'text',
      content: `## De tause kildene

Det finnes også et stort problem som kildekritikk ikke kan løse: alle kildene som *ikke* finnes.

Tenk på det: Hvem var det som skrev dagbøker, brev og bøker gjennom historien? I hovedsak menn, og hovedsakelig menn fra de øvre samfunnslagene. Kvinner, bønder, fattige, slaver – millioner av mennesker levde og døde uten å etterlate seg skriftlige spor.

Selv når vi har kilder, er de ofte filtrert gjennom elitens perspektiv. Vi vet mye om hva vikingkongene gjorde, fordi sagaene forteller om dem. Vi vet mye mindre om hvordan vanlige bønder levde, fordi ingen skrev om dem.

Moderne historikere prøver å løse dette ved å lete etter andre typer kilder: arkeologiske funn, materielle gjenstander, spor i lovtekster og regnskap. Men vi må alltid huske at det bildet vi har av fortiden, er formet av hvem som tilfeldigvis etterlot seg spor – og hvem som ikke gjorde det.`,
    },
    {
      id: 'historie-1-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor vet vi mer om vikingkonger enn om vanlige vikingbønder?',
        options: [
          { id: 'a', text: 'Fordi vikingkongene var viktigere', isCorrect: false },
          { id: 'b', text: 'Fordi sagaene hovedsakelig handler om eliten, ikke vanlige folk', isCorrect: true },
          { id: 'c', text: 'Fordi bøndene ikke gjorde noe interessant', isCorrect: false },
          { id: 'd', text: 'Fordi arkeologer bare har gravd ut kongegraver', isCorrect: false },
        ],
        solution: 'Kildene fra vikingtiden – sagaene – ble skrevet av og for eliten, og handler derfor mest om konger, høvdinger og stormenn. Vanlige bønders liv var ikke «verdt» å skrive om.',
      },
    },
    {
      id: 'historie-1-2-n-audio-6',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/historie/historie-1-2-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: 'historie-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Kildekritikk er kunsten å vurdere om vi kan stole på en kilde, og i så fall til hva. Det handler ikke om å finne «sanne» eller «falske» kilder, men om å forstå hva hver kilde kan og ikke kan fortelle oss.

**Nøkkelbegreper du nå kjenner:**
- **Primærkilde**: Førstehåndsberetning fra tiden som studeres
- **Sekundærkilde**: Tolkning/analyse laget i ettertid
- **Levning**: Kilden som direkte spor fra fortiden
- **Beretning**: Kilden som fortelling om noe
- **Kildekritikk**: Systematisk vurdering av kilders troverdighet

**De fire kildekritiske spørsmålene:**
1. Opphav – Hvem står bak?
2. Formål – Hvorfor ble kilden laget?
3. Tid og sted – Når og hvor?
4. Samsvar – Støttes den av andre kilder?`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3 NARRATIV: Periodisering av fortiden
// ============================================================================

export const CHAPTER_HISTORIE_1_3_NARRATIV: TextbookChapter = {
  id: 'historie-1-3-narrativ',
  courseId: 'historie',
  chapterNumber: '1.3',
  title: 'Periodisering av fortiden',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan vi deler historien inn i epoker – og hvorfor det er mer komplisert enn det høres ut.',
  estimatedMinutes: 40,
  competenceGoals: ['periodisering av fortiden'],
  linkedChapterId: 'historie-1-3',
  content: [
    {
      id: 'historie-1-3-n-intro',
      type: 'text',
      content: `## Historiens kapitler

Menneskets historie strekker seg over hundretusenvis av år. Fra de første Homo sapiens i Afrika, via de store sivilisasjonene i Egypt og Mesopotamia, gjennom Romerriket, middelalderen, verdenskrigene – helt fram til deg som leser dette nå.

Hvordan holder vi oversikt over alt dette? Vi deler historien inn i perioder, omtrent som kapitlene i en bok. «Antikken», «middelalderen», «moderne tid» – disse begrepene hjelper oss å kommunisere og organisere kunnskapen vår.

Men her kommer det viktige: Disse periodene er *menneskeskapte*. De er verktøy vi bruker for å forstå, ikke naturlover som finnes der ute. Ingen i år 500 visste at de levde på slutten av «antikken». Ingen i år 1200 tenkte at de levde i «middelalderen».`,
    },
    {
      id: 'historie-1-3-n-section1',
      type: 'text',
      content: `## Den vestlige periodiseringen

La oss starte med den klassiske inndelingen som brukes i vestlig historieskriving:

**Forhistorisk tid** (før ca. 3000 f.Kr.)
Tiden før mennesker lærte å skrive. Vi kaller det «forhistorisk» fordi vi ikke har skriftlige kilder, bare arkeologiske funn. Denne perioden deles gjerne inn i steinalder, bronsealder og jernalder – oppkalt etter hvilke materialer menneskene brukte til verktøy.

**Antikken** (ca. 3000 f.Kr. – 500 e.Kr.)
De første sivilisasjonene i Egypt og Mesopotamia, deretter de greske bystatene og det mektige Romerriket. Perioden slutter symbolsk med Vestromerrikets fall i 476 e.Kr.

**Middelalderen** (ca. 500 – 1500)
Tusen år mellom Romas fall og renessansen. En gang kalt «den mørke tid» av folk som så ned på perioden, men dette er et misvisende begrep. Middelalderen hadde sine egne fremskritt og sin egen storhet.

**Tidlig moderne tid** (ca. 1500 – 1800)
Renessansen, reformasjonen, oppdagelsesreisene, opplysningstiden. Europa ekspanderer ut i verden.

**Moderne tid** (ca. 1800 – i dag)
Den industrielle revolusjon, nasjonalismen, verdenskrigene, den kalde krigen, globaliseringen.`,
    },
    {
      id: 'historie-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvorfor kalles perioden før ca. 3000 f.Kr. for «forhistorisk tid»?',
        options: [
          { id: 'a', text: 'Fordi det ikke fantes mennesker da', isCorrect: false },
          { id: 'b', text: 'Fordi vi ikke har skriftlige kilder fra denne perioden', isCorrect: true },
          { id: 'c', text: 'Fordi ingenting viktig skjedde', isCorrect: false },
          { id: 'd', text: 'Fordi det var så lenge siden', isCorrect: false },
        ],
        solution: '«Forhistorisk» betyr «før historien» i betydningen «før de skriftlige kildene». Vi har fortsatt kunnskap om perioden, men den kommer fra arkeologi, ikke skriftlige kilder.',
      },
    },
    {
      id: 'historie-1-3-n-section2',
      type: 'text',
      content: `## Problemet med periodegrenser

Når sluttet egentlig middelalderen? Spør ti historikere, og du kan få ti forskjellige svar:

- **1453**: Konstantinopel faller for osmanerne. Bysants – det østlige Romerriket – opphører å eksistere etter nesten tusen år.
- **1492**: Columbus «oppdager» Amerika, og verden blir aldri den samme.
- **1517**: Martin Luther spikrer sine teser på kirkedøra i Wittenberg, og reformasjonen begynner.
- **1537**: For Norge – reformasjonen innføres, og den katolske middelalderkirken opphører.
- **Ca. 1500**: Renessansen blomstrer i Italia, og nye måter å tenke på sprer seg.

Hvem har rett? Alle – og ingen. Det kommer an på perspektivet. Hvis du er mest interessert i religionshistorie, er reformasjonen et naturlig skille. Hvis du studerer handel og økonomi, er oppdagelsen av Amerika viktigere. For norsk historie er 1537 et vendepunkt, selv om det ikke betyr så mye for italiensk historie.

Dessuten skjedde ikke endringene over natten. Renessansen begynte i Italia på 1300-tallet, men nådde Skandinavia først på 1500-tallet. Grensene er derfor alltid omtrentlige.`,
    },
    {
      id: 'historie-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvorfor er det vanskelig å sette en eksakt dato for «middelalderens slutt»?',
        options: [
          { id: 'a', text: 'Fordi vi mangler kilder fra denne perioden', isCorrect: false },
          { id: 'b', text: 'Fordi endringene skjedde gradvis og varierer fra land til land', isCorrect: true },
          { id: 'c', text: 'Fordi historikere ikke har blitt enige ennå', isCorrect: false },
          { id: 'd', text: 'Fordi middelalderen egentlig aldri tok slutt', isCorrect: false },
        ],
        solution: 'Historiske endringer skjer gradvis, ikke plutselig. Renessansen kom til ulike deler av Europa til forskjellige tider, og ulike hendelser er viktige i ulike lands historie.',
      },
    },
    {
      id: 'historie-1-3-n-section3',
      type: 'text',
      content: `## Norges egen periodisering

Norge har sin egen historiske rytme, med vendepunkter som er viktige for oss, men som knapt nevnes i europeisk historieskrivning.

**Vikingtiden** (ca. 800 – 1050)
Nordmenn drar ut i verden – som krigere, handelsmenn og nybyggere. Samtidig samles Norge til ett rike under Harald Hårfagre og hans etterfølgere.

**Norsk middelalder** (ca. 1050 – 1537)
Kristendommen etableres, Norge blir en europeisk stat, og kongene i høymiddelalderen styrer et rike som strekker seg fra Grønland til Russlands grenser. Men så kommer Svartedauden i 1349, som dreper kanskje halvparten av befolkningen. Norge går inn i en lang nedgangstid og blir underordnet Danmark fra 1380.

**Dansketiden** (1537 – 1814)
Norge styres fra København. Reformasjonen innføres i 1537, og eneveldet i 1660. Norsk kultur og språk undertrykkes, men det norske samfunnet utvikler seg likevel.

**Unionen med Sverige** (1814 – 1905)
Etter Napoleonskrigene må Danmark avstå Norge til Sverige. Men nordmennene griper sjansen til å gi seg selv en grunnlov først. De neste 91 årene er en kamp for økt selvstyre og til slutt full uavhengighet.

**Selvstendig Norge** (1905 – i dag)
Fra et fattig utkantsland til en av verdens rikeste nasjoner. To verdenskriger, okkupasjon, gjenreisning, og til slutt oljen som forandrer alt.`,
    },
    {
      id: 'historie-1-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva markerer overgangen fra «dansketiden» til «unionen med Sverige» i norsk historie?',
        options: [
          { id: 'a', text: 'Reformasjonen i 1537', isCorrect: false },
          { id: 'b', text: 'Svartedauden i 1349', isCorrect: false },
          { id: 'c', text: 'Grunnloven i 1814', isCorrect: true },
          { id: 'd', text: 'Unionsoppløsningen i 1905', isCorrect: false },
        ],
        solution: 'I 1814 ble Norge tvunget ut av unionen med Danmark som følge av Napoleonskrigene. Nordmennene ga seg selv en grunnlov før de gikk inn i union med Sverige.',
      },
    },
    {
      id: 'historie-1-3-n-section4',
      type: 'text',
      content: `## «Den mørke middelalderen» – en myte

Har du hørt uttrykket «den mørke middelalder»? Det stammer fra renessansen, da forfattere og kunstnere så tilbake på de tusen årene mellom Romas storhet og sin egen tid som en periode av forfall og uvitenhet. De mente at de selv gjenoppdaget antikkens lysende kultur etter et årtusen i mørke.

Men dette er historiebruk – og kanskje historiemisbruk. Renessansemenneskene hadde interesse av å fremstille seg selv som et gjenfødelsens lys etter mørket. Realiteten er mer nyansert.

Middelalderen var perioden da:
- **Universitetene** ble grunnlagt (Paris, Oxford, Bologna)
- **Katedralene** ble bygget – arkitektoniske mesterverk vi fortsatt beundrer
- **Teknologi** som vindmøller, brillier og mekaniske klokker ble oppfunnet
- **Rettssystemer** ble utviklet som vi fortsatt bruker
- **Litteratur** som Dantes «Den guddommelige komedie» ble skrevet

«Mørk» er altså ikke en nøytral beskrivelse, men et verdidømt begrep fra renessansen – folk som hadde interesse av å snakke ned perioden som kom før dem.`,
    },
    {
      id: 'historie-1-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvem kalte først middelalderen for «den mørke tid», og hvorfor?',
        options: [
          { id: 'a', text: 'Moderne historikere, fordi perioden var preget av krig og pest', isCorrect: false },
          { id: 'b', text: 'Renessansemennesker, fordi de ville fremheve sin egen tids storhet', isCorrect: true },
          { id: 'c', text: 'Middelaldermennesker selv, fordi de var misfornøyde', isCorrect: false },
          { id: 'd', text: 'Romerne, fordi de så nedgangen etter rikets fall', isCorrect: false },
        ],
        solution: 'Renessanseforfatterne skapte begrepet «den mørke tid» for å kontrastere middelalderen med sin egen «gjenfødelse» av antikkens kultur. Det var PR for deres egen tidsalder.',
      },
    },
    {
      id: 'historie-1-3-n-section5',
      type: 'text',
      content: `## Problemet med eurosentrisme

Den periodiseringen vi har gjennomgått, passer godt for Europa. Men hva med resten av verden?

Kinas historie følger en helt annen rytme med sine dynastier: Han, Tang, Song, Ming, Qing... Japans historie deles inn etter shogunater og keisere. Den islamske verden har sin egen periodisering basert på kalifater og riker.

For Afrika sør for Sahara gir «middelalderen» lite mening – begrepet refererer til europeiske forhold. Store afrikanske riker som Ghana, Mali og Songhai blomstret i perioder som ikke passer inn i europeiske kategorier.

Selv «moderne tid» er et problematisk begrep globalt. For mange samfunn i Asia, Afrika og Amerika markerer ikke 1800 noe spesielt – derimot kan kolonitiden, uavhengigheten eller andre lokale vendepunkter være viktigere.

Dette betyr ikke at periodisering er ubrukelig. Men vi må huske at det er et *verktøy*, ikke en absolutt sannhet. Og verktøyet er utviklet i Europa, for å forstå europeisk historie.`,
    },
    {
      id: 'historie-1-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er «eurosentrisme» i sammenheng med periodisering?',
        options: [
          { id: 'a', text: 'At Europa har den lengste historien', isCorrect: false },
          { id: 'b', text: 'At periodiseringen er utviklet for å forstå europeisk historie og ikke passer like godt for andre kulturer', isCorrect: true },
          { id: 'c', text: 'At europeisk historie er viktigst', isCorrect: false },
          { id: 'd', text: 'At europeere oppfant periodisering', isCorrect: false },
        ],
        solution: 'Eurosentrisme betyr at perspektivet tar utgangspunkt i Europa. Den vanlige periodiseringen (antikken, middelalder osv.) er utviklet for å forstå europeisk historie og passer ikke like godt for andre deler av verden.',
      },
    },
    {
      id: 'historie-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Periodisering er et nyttig verktøy for å organisere historien, men vi må bruke det med bevissthet om dets begrensninger.

**Nøkkelbegreper du nå kjenner:**
- **Periodisering**: Å dele historien inn i epoker
- **Epoke**: En avgrenset tidsperiode med visse kjennetegn
- **Eurosentrisme**: At perspektivet tar utgangspunkt i Europa

**De viktigste epokene i vestlig historieskrivning:**
1. Forhistorisk tid (før ca. 3000 f.Kr.)
2. Antikken (ca. 3000 f.Kr. – 500 e.Kr.)
3. Middelalderen (ca. 500 – 1500)
4. Tidlig moderne tid (ca. 1500 – 1800)
5. Moderne tid (ca. 1800 – i dag)

**Husk:**
- Periodegrenser er omtrentlige, ikke eksakte
- Ulike land har ulike periodiseringer
- «Den mørke middelalderen» er et verdidømt begrep, ikke en nøytral beskrivelse`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4 NARRATIV: Historiebruk og historiebevissthet
// ============================================================================

export const CHAPTER_HISTORIE_1_4_NARRATIV: TextbookChapter = {
  id: 'historie-1-4-narrativ',
  courseId: 'historie',
  chapterNumber: '1.4',
  title: 'Historiebruk og historiebevissthet',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan historie brukes – og misbrukes – i dag.',
  estimatedMinutes: 45,
  competenceGoals: ['fortolkninger av fortiden preget av nåtid', 'historiebruk av ulike aktører'],
  linkedChapterId: 'historie-1-4',
  content: [
    {
      id: 'historie-1-4-n-intro',
      type: 'text',
      content: `## Fortiden i nåtidens tjeneste

Historie er ikke bare et skolefag eller et akademisk felt. Fortiden brukes aktivt – av politikere, reklamebransjen, filmskapere, aktivister og vanlige mennesker – for å argumentere, selge, underholde og skape identitet.

Se deg rundt: Historiske filmer og TV-serier er mer populære enn noensinne. Politikere refererer til fortiden for å rettferdiggjøre sin politikk. Turister valfarter til historiske steder. Familier forsker på slektshistorien sin. Konflikter – fra Midtøsten til Balkan – handler ofte om konkurrerende historiefortellinger.

Hvordan vi fremstiller og bruker fortiden, sier ofte like mye om *oss i dag* som om *det som skjedde den gang*.`,
    },
    {
      id: 'historie-1-4-n-section1',
      type: 'text',
      content: `## Fire typer historiebruk

Historikere skiller gjerne mellom ulike måter historie brukes på:

**1. Vitenskapelig bruk**
Dette er det historikere gjør: forskning på fortiden for å forstå hva som skjedde og hvorfor. Den vitenskapelige bruken er (ideelt sett) kritisk, kildebasert, åpen for revisjon, og villig til å innrømme usikkerhet.

**2. Politisk bruk**
Politikere bruker historien for å legitimere makt, skape nasjonal identitet, eller rettferdiggjøre politiske standpunkter. Dette kan være konstruktivt (fellesskap rundt felles minner) eller manipulativt (forvrenging av fakta for politisk gevinst).

**3. Kommersiell bruk**
Film, TV, spill, romaner, turisme – det er store penger i å pakke fortiden som underholdning. «Vikings», «Assassin's Creed», vikingskipsmuseer – alle lever av å gjøre historie spennende og tilgjengelig.

**4. Privat/personlig bruk**
Slektsforskning, familiehistorie, søken etter røtter. Millioner av mennesker bruker DNA-tester og arkiver for å finne ut hvor de kommer fra.

Ingen av disse bruksmåtene er automatisk «god» eller «dårlig». Men de har ulike formål, og vi må lese dem deretter.`,
    },
    {
      id: 'historie-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'En populær TV-serie om vikingtiden er et eksempel på:',
        options: [
          { id: 'a', text: 'Vitenskapelig historiebruk', isCorrect: false },
          { id: 'b', text: 'Politisk historiebruk', isCorrect: false },
          { id: 'c', text: 'Kommersiell historiebruk', isCorrect: true },
          { id: 'd', text: 'Personlig historiebruk', isCorrect: false },
        ],
        solution: 'TV-serier lages for å underholde og tjene penger – det er kommersiell historiebruk. Det betyr ikke at de er «dårlige», men at de har andre formål enn vitenskapelig forskning.',
      },
    },
    {
      id: 'historie-1-4-n-section2',
      type: 'text',
      content: `## Vikingene: Et lærerikt eksempel

Hvordan vi ser på vikingene har forandret seg dramatisk gjennom historien – og det forteller oss mye om historiebruk.

**Middelalderen: Barbariske hedninger**
De samtidige kildene – ofte skrevet av munker som var ofre for vikingraidene – fremstiller vikingene som brutale hedninger som kom fra mørket, drepte, plyndret og forsvant. «Fra nordmennenes raseri, frels oss, Herre,» lyder en berømt bønn.

**1800-tallet: Nasjonale helter**
Plutselig ble vikingene romantisert. I en tid da Norge bygget nasjonal identitet (mot Sverige, mot fortiden under Danmark), trengte man stolte forfedre. Vikingene ble omgjort til modige, frie nordmenn – symboler på det genuint norske. Diktere og malere skapte heroiske bilder av vikingskip og kjemper.

**1900-tallet: Nazistisk misbruk**
Naziregimet i Tyskland misbrukte nordisk og vikingsymbolikk for å fremme ideer om «arisk» overlegenhet. SS hadde en egen «Vikingdivisjon». Runetegn ble brukt som SS-symboler. Dette er et grelt eksempel på historiemisbruk – fortiden fortrengt til å støtte en dødelig ideologi.

**I dag: Komplekst bilde**
Moderne forskning viser et mer nyansert bilde: Vikingene var bønder, handelsmenn, håndverkere og oppdagere – i tillegg til krigere. De hadde sofistikert kunst, jus og religion. De var hverken hellige helter eller rene barbarer.

**Hva lærer vi?**
Vikingene selv har ikke forandret seg – de levde og døde for over tusen år siden. Det som har forandret seg, er *vi* – og hva vi trenger fra fortiden.`,
    },
    {
      id: 'historie-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvorfor ble vikingene romantisert som nasjonale helter på 1800-tallet?',
        options: [
          { id: 'a', text: 'Fordi nye kilder viste at de var snille', isCorrect: false },
          { id: 'b', text: 'Fordi Norge trengte stolte forfedre i nasjonsbyggingen', isCorrect: true },
          { id: 'c', text: 'Fordi historikere ble flinkere', isCorrect: false },
          { id: 'd', text: 'Fordi vikingskip ble funnet på denne tiden', isCorrect: false },
        ],
        solution: 'På 1800-tallet bygget Norge nasjonal identitet etter århundrer under Danmark. Man trengte en stolt fortid å identifisere seg med, og vikingene passet perfekt til dette formålet.',
      },
    },
    {
      id: 'historie-1-4-n-section3',
      type: 'text',
      content: `## Historiemisbruk

Det finnes en grense mellom legitim historiebruk og historiemisbruk. Men hvor går den?

**Kjennetegn på historiemisbruk:**
- **Selektiv faktabruk**: Bare inkluderer det som støtter argumentet, utelater alt annet
- **Overdrivelse eller underdrivelse**: Blåser opp eller bagatelliserer hendelser
- **Anakronismer**: Legger moderne ideer inn i fortiden («vikingene ville ha stemt på vårt parti»)
- **Falske påstander**: Rett og slett dikter opp ting som ikke skjedde
- **Motstand mot korreksjon**: Nekter å endre syn selv når motbevist

**Eksempler på historiemisbruk:**
- **Holocaustfornektelse**: Nekter for eller bagatelliserer folkemordet på jødene
- **«Lost Cause»-myten**: Fremstiller den amerikanske borgerkrigen som noe annet enn en kamp om slaveri
- **Nasjonalistisk historieskriving**: Glorifiserer egen nasjon, demoniserer andre
- **Propaganda**: Bruker historiske referanser for å rettferdiggjøre aggresjon

**Hvorfor er dette farlig?**
Historiemisbruk kan brukes til å rettferdiggjøre hat, diskriminering og vold. Når noen forteller deg at «historien viser» at en bestemt gruppe er underlegen, at en krig var rettferdig, at overgrep aldri skjedde – da er det på tide å være kritisk.`,
    },
    {
      id: 'historie-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er et «anakronisme» i historisk sammenheng?',
        options: [
          { id: 'a', text: 'En gammel gjenstand', isCorrect: false },
          { id: 'b', text: 'Å legge moderne ideer inn i fortiden', isCorrect: true },
          { id: 'c', text: 'En kilde som motbeviser en teori', isCorrect: false },
          { id: 'd', text: 'En historisk periode', isCorrect: false },
        ],
        solution: 'En anakronisme er når man plasserer noe i feil tidsperiode – for eksempel å påstå at folk i fortiden tenkte akkurat som oss, eller å tillegge dem moderne verdier og ideer.',
      },
    },
    {
      id: 'historie-1-4-n-section4',
      type: 'text',
      content: `## 17. mai: Norsk historiebruk i praksis

La oss bruke et hjemlig eksempel: 17. mai-feiringen. Dette er norsk historiebruk i sin reneste form – og det er verdt å reflektere over hva som feires, og hva som *ikke* nevnes.

**Det som fremheves:**
- Grunnloven og demokratiet
- Frihet og selvstendighet
- Fellesskap og glede
- Barnetogene som symbol på fremtiden

**Det som tones ned:**
- Grunnloven av 1814 utelukket jøder, munker og jesuitter
- Kvinner fikk ikke stemmerett før 1913
- Vi var i union med Sverige helt til 1905
- Samene ble ikke nevnt i Grunnloven og ble senere utsatt for fornorskingspolitikk

Er dette historiemisbruk? Ikke nødvendigvis. Det er legitimt å feire det gode i vår historie. Men en kritisk historiebevissthet innebærer også å kjenne til de mørkere sidene – ikke for å ødelegge feiringen, men for å forstå den fulle historien.`,
    },
    {
      id: 'historie-1-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva ble utelatt fra Grunnloven av 1814?',
        options: [
          { id: 'a', text: 'Kongen', isCorrect: false },
          { id: 'b', text: 'Jøder, munker og jesuitter fikk ikke adgang til riket', isCorrect: true },
          { id: 'c', text: 'Stortinget', isCorrect: false },
          { id: 'd', text: 'Ytringsfrihet', isCorrect: false },
        ],
        solution: 'Den opprinnelige Grunnloven inneholdt en paragraf som nektet jøder, munker og jesuitter adgang til riket. Denne ble først opphevet i 1851 (for jøder) og 1897/1956 (for munker og jesuitter).',
      },
    },
    {
      id: 'historie-1-4-n-section5',
      type: 'text',
      content: `## Kritisk historiebevissthet

Målet med å lære om historiebruk er ikke å bli kynisk, men å bli *kritisk*. En person med kritisk historiebevissthet:

**Stiller spørsmål:**
- Hvem forteller denne historien?
- Hva er hensikten?
- Hva blir utelatt?
- Hvilke kilder finnes det for dette?

**Ser sammenhengen:**
- Forstår at nåtiden formes av fortiden
- Innser at vår forståelse av fortiden formes av nåtiden
- Vet at våre handlinger i dag vil forme fremtiden

**Aksepterer kompleksitet:**
- Vet at fortiden sjelden er svart-hvitt
- Erkjenner at historiske personer levde i andre omstendigheter enn oss
- Forstår at det kan finnes flere gyldige perspektiver

**Er åpen for revisjon:**
- Vet at historiefaget utvikler seg
- Aksepterer at nye kilder kan endre bildet
- Skiller mellom «det vi vet» og «det vi tror»`,
    },
    {
      id: 'historie-1-4-n-section6',
      type: 'text',
      content: `## Fortiden, nåtiden og deg

Vi startet dette kapittelet med spørsmålet: Hvordan brukes historien? Nå er du bedre rustet til å se det selv. Neste gang du ser en historisk film, hører en politiker referere til fortiden, eller besøker et museum – stopp opp og tenk:

- Hvilken historie fortelles her?
- Hvem forteller den, og hvorfor?
- Hva blir fremhevet, og hva utelates?
- Hvordan ville denne historien blitt fortalt fra et annet perspektiv?

Dette er ikke for å ødelegge gleden ved en god vikingserie eller 17. mai-feiring. Det er for å gjøre deg til en mer bevisst mottaker av alle fortellingene om fortiden som omgir oss.

For historien er aldri bare fortid. Den er levende, den formes, den brukes – og den er en del av hvem du er.`,
    },
    {
      id: 'historie-1-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en person med «kritisk historiebevissthet»?',
        options: [
          { id: 'a', text: 'Vedkommende er kritisk til all historie og mener alt er løgn', isCorrect: false },
          { id: 'b', text: 'Vedkommende stiller spørsmål ved hvem som forteller historien og hvorfor', isCorrect: true },
          { id: 'c', text: 'Vedkommende er ekspert på alle historiske perioder', isCorrect: false },
          { id: 'd', text: 'Vedkommende foretrekker primærkilder over sekundærkilder', isCorrect: false },
        ],
        solution: 'Kritisk historiebevissthet handler om å stille spørsmål: Hvem forteller? Hvorfor? Hva utelates? Det handler ikke om å være kynisk, men om å være bevisst på at alle fremstillinger av fortiden er formet av noen.',
      },
    },
    {
      id: 'historie-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Historie er ikke bare et fag – det er et verktøy som brukes av mange aktører med ulike formål. Å forstå hvordan historie brukes, gjør deg bedre rustet til å vurdere de fortellingene om fortiden du møter.

**Nøkkelbegreper du nå kjenner:**
- **Historiebruk**: Hvordan fortiden brukes i nåtiden
- **Historiemisbruk**: Bevisst forvrengning av fortiden for bestemte formål
- **Kritisk historiebevissthet**: Evnen til å stille spørsmål ved historiske fremstillinger

**Fire typer historiebruk:**
1. Vitenskapelig (forskning)
2. Politisk (legitimering, nasjonsbygging)
3. Kommersiell (underholdning, turisme)
4. Personlig (slektsforskning, identitet)

**Spørsmål å stille:**
- Hvem forteller denne historien?
- Hva er hensikten?
- Hva blir utelatt?
- Hvilke andre perspektiver finnes?`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const HISTORIE_NARRATIV_CHAPTERS = [
  CHAPTER_HISTORIE_1_1_NARRATIV,
  CHAPTER_HISTORIE_1_2_NARRATIV,
  CHAPTER_HISTORIE_1_3_NARRATIV,
  CHAPTER_HISTORIE_1_4_NARRATIV,
];
