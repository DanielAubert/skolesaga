/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - Del 3 (Kapittel 8-10)
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 * Grundig og dyptgående innhold for avsluttende år.
 *
 * Kapittel 8: Medier og kommunikasjon
 * Kapittel 9: Identitet og mangfold
 * Kapittel 10: Eksamensforberedelse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8: Medier og kommunikasjon
// LK20: Reflektere over korleis algoritmar, ekkokammer og digitale medium
//        påverkar meiningsdanning og demokrati
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_8: TextbookChapter = {
  id: 'samfunnsfag-10-8',
  courseId: 'samfunnsfag-10',
  chapterNumber: '8',
  title: 'Medier og kommunikasjon',
  description: 'Forstå medienes rolle i demokratiet, hvordan algoritmer og ekkokammer påvirker meningsdanning, og hva presseetikk betyr i praksis.',
  estimatedMinutes: 90,
  competenceGoals: [
    'reflektere over korleis algoritmar, ekkokammer og digitale medium påverkar meiningsdanning og demokrati',
    'drøfte korleis ytringsfridom og medborgarskap heng saman',
    'vurdere kjelder og kjeldekritisk kompetanse i ein digital kvardag',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-8-intro',
      type: 'text',
      content: `## Hvem bestemmer hva du ser, leser og tror på?

Når du åpner telefonen din om morgenen, hva møter deg? Kanskje en nyhetsvarsel, noen TikTok-videoer, en Snapchat-streak og et par Instagram-poster. Du føler kanskje at du selv velger hva du ser — men gjør du egentlig det?

Bak skjermen jobber kraftige **algoritmer** døgnet rundt for å bestemme hva som dukker opp i feeden din. De analyserer hva du har likt, delt og sett på før, og serverer deg mer av det samme. Resultatet? Du og bestevennen din kan sitte i samme klasserom og leve i helt forskjellige informasjonsverdener.

Mediene har alltid hatt stor makt i samfunnet. Aviser, radio og TV har formet folks meninger i over hundre år. Men de digitale mediene har endret spillereglene fundamentalt. I dag er det ikke bare journalister som lager nyheter — hvem som helst kan publisere innhold som når millioner av mennesker.

Dette gir oss fantastiske muligheter, men også store utfordringer. Hvordan vet vi hva som er sant? Hvem kontrollerer informasjonsstrømmen? Og hva skjer med demokratiet når folk lever i hver sin «informasjonsboble»?

I dette kapittelet skal du lære om:
- Medienes rolle i demokratiet
- Hvordan algoritmer styrer hva du ser
- Hva ekkokammer og filterbobler er
- Ytringskultur og nettdebatt
- Presseetikk og ansvarlig journalistikk
- Kildekritikk i en digital verden`,
    },

    // ========== DEFINISJON: DEN FJERDE STATSMAKT ==========
    {
      id: 'samfunnsfag-10-8-def-1',
      type: 'definition',
      title: 'Medienes rolle i demokratiet — den fjerde statsmakt',
      content: `**Den fjerde statsmakt** er et begrep som beskriver medienes rolle som en uavhengig kontrollør av de tre statsmaktene (Stortinget, regjeringen og domstolene).

Mediene fyller flere viktige funksjoner i et demokrati:

- **Informasjonsfunksjon:** Mediene gir befolkningen den informasjonen de trenger for å delta i demokratiet. Uten uavhengig informasjon kan ikke velgerne ta informerte valg.
- **Vaktbikkjefunksjon:** Gravende journalistikk avdekker maktmisbruk, korrupsjon og urettferdighet. Mediene holder politikere, næringsliv og andre makthavere ansvarlige.
- **Arenafunksjon:** Mediene er en plattform der ulike stemmer og meninger kan komme til uttrykk. Debattsider, kommentarfelt og meningsinnlegg bidrar til offentlig samtale.
- **Dagsordenfunksjon:** Det mediene velger å skrive om, blir det folk snakker om. Mediene har dermed stor makt til å bestemme hvilke saker som blir viktige i samfunnsdebatten.

I Norge har vi en sterk tradisjon for **pressefrihet**. Dette er nedfelt i Grunnlovens § 100, som beskytter ytringsfriheten. Pressefrihet betyr at myndighetene ikke kan sensurere eller kontrollere hva mediene skriver — en rettighet som mange mennesker i verden ikke har.

**Mediemangfold** — at det finnes mange ulike medier med forskjellige eiere og perspektiver — er avgjørende for et velfungerende demokrati. Hvis én aktør kontrollerer all informasjon, mister mediene sin uavhengighet.`,
    },

    // ========== TEKST: MEDIETYPER OG ENDRING ==========
    {
      id: 'samfunnsfag-10-8-medietyper',
      type: 'text',
      content: `## Fra avis til algoritme — medielandskapet i endring

Medielandskapet har gjennomgått en revolusjon de siste tiårene. La oss se på utviklingen:

### Tradisjonelle medier
- **Aviser:** Norske aviser som Aftenposten (grunnlagt 1860) og VG har i over hundre år informert befolkningen. Redaktørstyrte medier med journalister som undersøker, skriver og kvalitetssikrer innhold.
- **Radio:** NRK begynte radiosendinger i 1933. Radio nådde alle hjem og ble en viktig kilde til nyheter og fellesskap.
- **TV:** NRK TV startet i 1960. Fjernsynet ble det dominerende mediet i Norge og skapte felles referanserammer for hele befolkningen. TV2 kom i 1992 og ga konkurranse.

### Digitale medier
- **Nettaviser:** Fra slutten av 1990-tallet begynte avisene å publisere på nett. Nyheter ble tilgjengelige døgnet rundt, gratis og raskt.
- **Sosiale medier:** Facebook (2004), Twitter/X (2006), Instagram (2010), Snapchat (2011), TikTok (2016) endret alt. Plutselig kunne alle publisere innhold, og informasjon spredte seg lynraskt.
- **Podkaster og strømming:** Nye formater som gir folk tilgang til innhold når og hvor de vil.

### Hva endringen betyr
Den viktigste endringen er at **portvaktfunksjonen** er svekket. Før bestemte redaktører og journalister hva som ble publisert. I dag kan hvem som helst dele informasjon — eller feilinformasjon — med potensielt millioner av mennesker.

Det positive er at flere stemmer slipper til. Det negative er at det er vanskeligere å skille fakta fra fiksjon.`,
    },

    // ========== OPPGAVE 8.1 ==========
    {
      id: 'samfunnsfag-10-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-1',
        number: '8.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med at mediene er «den fjerde statsmakt»?',
        options: [
          {
            id: 'a',
            text: 'At mediene styrer landet sammen med de tre andre statsmaktene',
            isCorrect: false,
            feedback: 'Feil. Mediene er ikke en formell del av statsmakten, men en uavhengig kontrollør.',
          },
          {
            id: 'b',
            text: 'At mediene overvåker og kontrollerer de tre statsmaktene på vegne av folket',
            isCorrect: true,
            feedback: 'Riktig! Mediene fungerer som en uavhengig vaktbikkje som holder de tre statsmaktene ansvarlige.',
          },
          {
            id: 'c',
            text: 'At mediene er viktigere enn Stortinget, regjeringen og domstolene',
            isCorrect: false,
            feedback: 'Feil. Mediene er ikke viktigere enn de andre statsmaktene, men de spiller en viktig kontrollfunksjon.',
          },
          {
            id: 'd',
            text: 'At mediene lager lovene i Norge',
            isCorrect: false,
            feedback: 'Feil. Det er Stortinget som vedtar lover. Mediene informerer og kontrollerer, men lager ikke lover.',
          },
        ],
        solution: 'Mediene kalles «den fjerde statsmakt» fordi de fungerer som en uavhengig kontrollinstans som overvåker Stortinget, regjeringen og domstolene på vegne av folket.',
      },
    },

    // ========== OPPGAVE 8.2 ==========
    {
      id: 'samfunnsfag-10-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-2',
        number: '8.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Medienes fire funksjoner i demokratiet.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar med egne ord hva som menes med medienes «vaktbikkjefunksjon». Gi et eksempel.',
            solution: 'Vaktbikkjefunksjonen betyr at mediene overvåker makthaverne og avdekker kritikkverdige forhold. Eksempel: VGs avsløring av Trond Giskes oppførsel i metoo-saken, eller Aftenpostens avsløringer om Nav-skandalen, der tusenvis av nordmenn ble uriktig dømt for trygdesvindel.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom medienes informasjonsfunksjon og dagsordenfunksjon?',
            solution: 'Informasjonsfunksjonen handler om å formidle fakta og nyheter til befolkningen. Dagsordenfunksjonen handler om at mediene har makt til å velge HVILKE saker de dekker — og det de velger å fokusere på, blir det folk snakker om og bryr seg om. Det mediene ikke skriver om, forblir ofte usynlig.',
          },
        ],
        hints: ['Tenk på konkrete norske mediesaker du kjenner til.'],
        solution: 'Medienes funksjoner — informasjon, vaktbikkje, arena og dagsorden — er alle viktige for et fungerende demokrati.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: ALGORITMER ==========
    {
      id: 'samfunnsfag-10-8-def-2',
      type: 'definition',
      title: 'Algoritmer og filterbobler',
      content: `En **algoritme** er et sett med regler eller instruksjoner som en datamaskin følger for å løse en oppgave. I sosiale medier brukes algoritmer for å bestemme hva som vises i feeden din.

**Slik fungerer algoritmene:**
1. De registrerer hva du klikker på, liker, deler og kommenterer
2. De analyserer hvor lenge du ser på ulike typer innhold
3. De sammenligner deg med millioner av andre brukere med lignende atferd
4. De velger ut innhold de tror du vil engasjere deg i — slik at du blir værende på plattformen lengst mulig

**Filterboble** er et begrep laget av den amerikanske nettaktivisten Eli Pariser i 2011. Det beskriver situasjonen der algoritmer bare viser deg innhold som bekrefter det du allerede tror og interesserer deg for. Du «filtreres» bort fra informasjon som utfordrer deg.

**Eksempel:** Hvis du ofte liker innlegg som er kritiske til innvandring, vil algoritmen vise deg mer av det samme — og mindre av innlegg som presenterer et annet perspektiv. Over tid kan du få inntrykk av at «alle» mener det samme som deg.

**Konsekvenser for demokratiet:**
- Folk får et skjevt bilde av virkeligheten
- Det blir vanskeligere å forstå andres perspektiver
- Politisk debatt blir mer polarisert
- Falsk informasjon kan spres uten å bli korrigert

Algoritmene er designet for å tjene penger (gjennom annonser), ikke for å informere deg. Jo mer tid du bruker på plattformen, jo mer penger tjener selskapene. Innhold som vekker sterke følelser — sinne, frykt, opprørthet — holder deg engasjert lengre enn nøktern informasjon.`,
    },

    // ========== DEFINISJON: EKKOKAMMER ==========
    {
      id: 'samfunnsfag-10-8-def-3',
      type: 'definition',
      title: 'Ekkokammer',
      content: `Et **ekkokammer** oppstår når du bare omgir deg med mennesker og informasjon som bekrefter dine egne synspunkter. Dine meninger «ekkoer» tilbake til deg — som i et rom der du bare hører din egen stemme.

**Forskjellen på filterboble og ekkokammer:**
- **Filterboble:** Algoritmene velger for deg — du blir passivt isolert fra andre synspunkter
- **Ekkokammer:** Du velger selv — du følger bare de som mener det samme som deg, og blokkerer eller ignorerer de som er uenige

I praksis forsterker disse to hverandre. Algoritmene viser deg mer av det du liker (filterboble), og du velger aktivt å følge folk som tenker som deg (ekkokammer).

**Hvorfor er dette farlig for demokratiet?**

Demokrati forutsetter at borgerne kan diskutere saker åpent, lytte til hverandre og inngå kompromisser. Hvis folk lever i helt atskilte informasjonsverdener, blir det vanskelig å ha en felles samtale.

**Eksempler:**
- Under presidentvalget i USA i 2016 og 2020 levde Trump-tilhengere og Biden-tilhengere i så forskjellige medieverdener at de knapt var enige om hva som var sant.
- I Norge har forskning vist at kommentarfeltene i nettaviser ofte domineres av sterke meninger fra en liten gruppe, noe som kan gi et skjevt inntrykk av folkemeningen.

**Hva kan du gjøre?**
- Følg bevisst noen du er uenig med
- Les nyheter fra flere ulike kilder
- Vær bevisst på at algoritmen filtrerer for deg
- Sjekk kilder før du deler innhold`,
    },

    // ========== EKSEMPEL: ALGORITMER I PRAKSIS ==========
    {
      id: 'samfunnsfag-10-8-example-1',
      type: 'example',
      title: 'Eksempel: Algoritmenes makt — to forskjellige verdener',
      problem: 'Maria og Lars er begge 15 år og bor i Oslo. Maria er opptatt av klima og miljø, mens Lars er mest interessert i gaming og sport. Hvordan kan algoritmene gi dem helt forskjellige bilder av verden?',
      solution: `**Marias informasjonsverden:**
Maria følger flere miljøorganisasjoner på Instagram og liker ofte innlegg om klimaendringer. Algoritmen registrerer dette og viser henne:
- Nyheter om klimakatastrofer og ekstremvær
- Innlegg fra klimaaktivister
- Videoer om bærekraftig livsstil
- Artikler om at ungdommen er bekymret for fremtiden

Maria kan få inntrykk av at klimaet er den aller viktigste saken for alle, og at «alle» er enige om at det trengs drastiske tiltak umiddelbart.

**Lars' informasjonsverden:**
Lars følger gamere og sportssider. Algoritmen viser ham:
- Gaming-nyheter og turneringer
- Sportsresultater og -analyser
- Innlegg fra influencere innen gaming
- Memes og underholdning

Lars ser sjelden nyheter om klimaendringer, politikk eller samfunnsspørsmål i feeden sin. Han kan få inntrykk av at klima ikke er et viktig tema, fordi det knapt dukker opp i hans informasjonsverden.

**Konsekvensen:**
Begge to har et ufullstendig bilde av virkeligheten. Ingen av dem ser et balansert utvalg av nyheter og perspektiver. Algoritmene har skapt to parallelle informasjonsverdener — og Maria og Lars vet kanskje ikke engang at det skjer.

**Det viktige poenget:**
Verken Maria eller Lars har gjort noe «galt». Det er systemet som er designet for å holde dem engasjerte — ikke for å gi dem et komplett bilde av verden.`,
    },

    // ========== OPPGAVE 8.3 ==========
    {
      id: 'samfunnsfag-10-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-3',
        number: '8.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en filterboble?',
        options: [
          {
            id: 'a',
            text: 'Et filter man kan kjøpe for å blokkere reklame på internett',
            isCorrect: false,
            feedback: 'Feil. En filterboble handler ikke om reklamefiltre, men om hvordan algoritmer styrer innholdet du ser.',
          },
          {
            id: 'b',
            text: 'Når algoritmer bare viser deg innhold som bekrefter det du allerede tror og interesserer deg for',
            isCorrect: true,
            feedback: 'Riktig! Filterbobler oppstår når algoritmer filtrerer bort innhold som utfordrer dine eksisterende synspunkter.',
          },
          {
            id: 'c',
            text: 'Når du bevisst velger å bare følge folk du er enig med på sosiale medier',
            isCorrect: false,
            feedback: 'Delvis riktig tanke, men dette beskriver et ekkokammer — der du selv velger. En filterboble skapes av algoritmene automatisk.',
          },
          {
            id: 'd',
            text: 'Et beskyttet nettverksmiljø som skoler bruker for å holde elevene trygge',
            isCorrect: false,
            feedback: 'Feil. Du tenker kanskje på et nettfilter. En filterboble er noe helt annet.',
          },
        ],
        solution: 'En filterboble oppstår når algoritmer automatisk filtrerer informasjonen du ser, slik at du hovedsakelig møter innhold som bekrefter det du allerede tror og interesserer deg for.',
      },
    },

    // ========== OPPGAVE 8.4 ==========
    {
      id: 'samfunnsfag-10-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-4',
        number: '8.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør et lite eksperiment: Åpne YouTube eller TikTok uten å være innlogget (eller i et privat/inkognitovindu). Sammenlign forsiden med det du vanligvis ser.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er de viktigste forskjellene mellom innholdet du ser når du er innlogget og når du ikke er det?',
            solution: 'Når du er innlogget, vil algoritmene vise innhold basert på din aktivitetshistorikk. Uten innlogging vil du se mer generelt, populært innhold — trender, nyheter og bredere temaer som ikke er tilpasset dine preferanser.',
          },
          {
            label: 'b',
            task: 'Hva forteller dette deg om algoritmenes påvirkning på informasjonen du får?',
            solution: 'Det viser at algoritmene i stor grad styrer hva du ser. Informasjonen du får er ikke tilfeldig, men nøye utvalgt basert på dine digitale spor. Du lever i en personlig tilpasset informasjonsverden som kan være svært forskjellig fra andres.',
          },
        ],
        hints: ['Sammenlign temaer, toner og typer innhold.'],
        solution: 'Eksperimentet viser at algoritmene i stor grad styrer innholdet vi ser, og at vi alle lever i personlig tilpassede informasjonsverdener.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: YTRINGSKULTUR OG NETTDEBATT ==========
    {
      id: 'samfunnsfag-10-8-ytringskultur',
      type: 'text',
      content: `## Ytringskultur og nettdebatt

Ytringsfriheten er en grunnleggende rettighet i et demokrati — men med rettigheten følger også et ansvar. I den digitale verden er dette temaet mer aktuelt enn noensinne.

### Ytringsfriheten har grenser
Grunnlovens § 100 beskytter ytringsfriheten, men den er ikke absolutt. Det er forbudt å:
- **True** andre mennesker
- Oppfordre til **vold** eller terror
- Spre **hatefulle ytringer** mot grupper basert på etnisitet, religion, seksuell orientering, funksjonsevne eller kjønn (straffelovens § 185)
- Spre **rasistiske** eller **diskriminerende** utsagn
- Krenke andres **ære** gjennom usanne beskyldninger

### Nettdebatt — muligheter og utfordringer
Internett har gitt alle mulighet til å delta i samfunnsdebatten. Men den anonyme naturen til mange nettfora har også skapt problemer:

**Positive sider ved nettdebatt:**
- Flere stemmer slipper til
- Lavere terskel for å delta
- Rask spredning av viktig informasjon
- Kan mobilisere folk for gode formål

**Negative sider ved nettdebatt:**
- Anonymitet kan senke terskelen for hatefulle ytringer
- Tonen er ofte hardere enn i ansikt-til-ansikt-samtaler
- Trolling og trakassering kan skremme folk fra å delta
- Komplekse saker forenkles til korte, slagordpregede innlegg

### Hatprat og nettmobbing
Hatprat er ytringer som angriper eller nedverdiger en person eller gruppe basert på hvem de er. I Norge har forskning vist at mange unge — særlig jenter, LHBT+-personer og personer med minoritetsbakgrunn — opplever hatprat på nett.

Nettmobbing er gjentatt negativ atferd mot en person via digitale plattformer. Til forskjell fra tradisjonell mobbing kan nettmobbing skje hele døgnet, og innholdet kan spres til mange på kort tid.

### Din rolle i debattkulturen
Hvordan du oppfører deg på nett, er et valg. Du kan bidra til en bedre samtalekultur ved å:
- Være saklig og respektfull, selv når du er uenig
- Tenke deg om før du kommenterer — ville du sagt dette ansikt til ansikt?
- Si fra dersom du ser mobbing eller hatprat
- Skille mellom person og sak i diskusjoner`,
    },

    // ========== OPPGAVE 8.5 ==========
    {
      id: 'samfunnsfag-10-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-5',
        number: '8.5',
        type: 'classic',
        difficulty: 'medium',
        task: '«Det bør være lov å si hva som helst på internett, fordi vi har ytringsfrihet.» Er du enig eller uenig? Begrunn svaret ditt.',
        hints: [
          'Tenk på forskjellen mellom ytringsfrihet og ytringsansvar.',
          'Hva er forskjellen på å kritisere en idé og å angripe en person?',
        ],
        solution: 'Ytringsfriheten er viktig, men den er ikke absolutt. Det finnes grenser — trusler, hatefulle ytringer og oppfordring til vold er forbudt også på nett. Ytringsfriheten gir oss rett til å si mye, men ikke alt. Med friheten følger et ansvar for konsekvensene av det vi sier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 8.6 ==========
    {
      id: 'samfunnsfag-10-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-6',
        number: '8.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse ytringene er lovlig i Norge?',
        options: [
          {
            id: 'a',
            text: '«Jeg synes regjeringens klimapolitikk er for svak.»',
            isCorrect: true,
            feedback: 'Riktig! Politisk kritikk er en lovlig og viktig del av ytringsfriheten. Du har full rett til å kritisere politikk og politikere.',
          },
          {
            id: 'b',
            text: '«Alle fra det landet burde sendes tilbake.»',
            isCorrect: false,
            feedback: 'Dette kan falle inn under straffelovens bestemmelser om hatefulle ytringer (§ 185), avhengig av kontekst.',
          },
          {
            id: 'c',
            text: '«Noen burde gi den politikeren en omgang juling.»',
            isCorrect: false,
            feedback: 'Feil. Dette kan tolkes som en trussel eller oppfordring til vold, noe som er straffbart.',
          },
          {
            id: 'd',
            text: '«Jeg vet hvor du bor, og jeg skal ta deg.»',
            isCorrect: false,
            feedback: 'Feil. Dette er en klar trussel, som er straffbart etter straffeloven.',
          },
        ],
        solution: 'Politisk kritikk og meningsytringer er beskyttet av ytringsfriheten. Trusler, oppfordring til vold og hatefulle ytringer mot grupper er ikke lovlige.',
      },
    },

    // ========== DEFINISJON: PRESSEETIKK ==========
    {
      id: 'samfunnsfag-10-8-def-4',
      type: 'definition',
      title: 'Presseetikk og Vær Varsom-plakaten',
      content: `**Presseetikk** handler om de etiske retningslinjene som mediene skal følge i sitt arbeid. I Norge er disse samlet i **Vær Varsom-plakaten**, som ble utarbeidet av Norsk Presseforbund.

**Vær Varsom-plakatens viktigste prinsipper:**

1. **Pressens samfunnsrolle:** Pressen skal beskytte ytringsfriheten, informere om det som skjer i samfunnet, og avdekke kritikkverdige forhold.

2. **Integritet og troverdighet:** Journalister skal ikke la seg påvirke av utenforliggende interesser. Reklame skal skilles tydelig fra redaksjonelt innhold.

3. **Journalistisk atferd og kildekritikk:** Journalister skal opptre hensynsfullt, sjekke fakta og være åpne om metoder. Kilder skal kontrolleres og behandles kritisk.

4. **Publiseringsregler:** Mediene skal verne om privatlivets fred, vise omtanke i omtale av ulykker og kriminalsaker, og ikke identifisere personer unødvendig.

**Pressens Faglige Utvalg (PFU)** er et klageorgan der hvem som helst kan klage inn en mediesak de mener bryter med god presseskikk. PFU kan gi medier fellelse for brudd på Vær Varsom-plakaten — og mediet er da forpliktet til å publisere PFUs avgjørelse.

**Viktig:** Presseetikken er **selvjustis** — den er ikke pålagt av staten. Mediene har selv laget reglene og håndhever dem selv. Dette er viktig for å bevare pressens uavhengighet fra myndighetene.

Utfordringen i dag er at sosiale medier og influencere ikke er bundet av Vær Varsom-plakaten. Mens en journalist risikerer PFU-klage for uetisk opptreden, kan en influencer publisere nesten hva som helst uten tilsvarende konsekvenser.`,
    },

    // ========== EKSEMPEL: PRESSEETIKK I PRAKSIS ==========
    {
      id: 'samfunnsfag-10-8-example-2',
      type: 'example',
      title: 'Eksempel: Presseetikk i praksis — dilemmaer journalister møter',
      problem: 'Tenk deg at en journalist oppdager at en kjent politiker har en alvorlig sykdom som kan påvirke arbeidsevnen. Bør journalisten publisere dette? Hvilke etiske hensyn spiller inn?',
      solution: `**Hensynene som står mot hverandre:**

**For publisering:**
- Politikeren har en offentlig rolle med stort ansvar
- Velgerne har rett til å vite om forhold som kan påvirke politikerens evne til å gjøre jobben
- Informasjonsfunksjonen tilsier at viktig informasjon bør frem
- Offentlige personer må tåle mer innsyn enn privatpersoner

**Mot publisering:**
- Helseopplysninger er svært private
- Vær Varsom-plakaten sier at privatlivets fred skal vernes
- Sykdom har ikke nødvendigvis sammenheng med arbeidsevne
- Publisering kan føre til stigmatisering av personer med tilsvarende sykdom

**Hva ville en ansvarlig avis gjort?**
En god redaksjon ville vurdert: Er sykdommen av en slik art at den faktisk kan påvirke politikerens arbeid? Finnes det tegn til at det allerede har skjedd? Har politikeren fått mulighet til å kommentere?

Det finnes ikke alltid et enkelt svar — og det er nettopp derfor presseetikk er så viktig. Reglene gir journalister et rammeverk for å ta vanskelige avgjørelser på en gjennomtenkt måte.`,
    },

    // ========== OPPGAVE 8.7 ==========
    {
      id: 'samfunnsfag-10-8-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-7',
        number: '8.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et nettsted publiserer en artikkel med overskriften «SJOKKERENDE: Norsk politiker tatt i korrupsjon!» Når du leser artikkelen, finner du ingen konkrete bevis, bare udokumenterte påstander fra en anonym kilde.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke prinsipper i Vær Varsom-plakaten bryter denne artikkelen med?',
            solution: 'Artikkelen bryter med prinsippene om kildekritikk (anonyme, ukontrollerte kilder), faktagrunnlag (udokumenterte påstander), hensynsfull omtale av personer, og kravet om å gi den omtalte mulighet til tilsvar.',
          },
          {
            label: 'b',
            task: 'Hva bør du som leser gjøre når du møter slike artikler?',
            solution: 'Du bør sjekke hvem som står bak nettstedet, se etter saken i andre troverdige medier, vurdere om det finnes konkrete bevis, og unngå å dele artikkelen videre uten å vite at informasjonen stemmer.',
          },
        ],
        hints: ['Tenk på forskjellen mellom påstander og dokumenterte fakta.'],
        solution: 'Slike artikler bryter med grunnleggende presseetiske prinsipper og bør møtes med sunn skepsis og kildekritikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: KILDEKRITIKK ==========
    {
      id: 'samfunnsfag-10-8-kildekritikk',
      type: 'text',
      content: `## Kildekritikk i en digital verden

I en tid der informasjon flommer over oss fra alle kanter, er kildekritikk en av de viktigste ferdighetene du kan ha. Men hva betyr det egentlig å være kildekritisk?

### Hva er kildekritikk?
Kildekritikk er evnen til å vurdere informasjon kritisk — å spørre seg: Er dette sant? Hvem sier dette? Hvorfor sier de det? Har de noe å vinne på at jeg tror på det?

### Seks spørsmål du alltid bør stille
1. **Hvem er avsender?** Er det en kjent og troverdig kilde? En nettavis, en forsker, en organisasjon, eller en anonym bruker?
2. **Hva er formålet?** Vil avsenderen informere, overbevise, selge noe, eller underholde?
3. **Når ble det publisert?** Er informasjonen oppdatert, eller er den utdatert?
4. **Hva er kildegrunnlaget?** Viser artikkelen til konkrete kilder, forskning eller dokumentasjon — eller er det bare påstander?
5. **Finnes det flere kilder?** Skriver andre troverdige medier om det samme? Bekrefter de opplysningene?
6. **Er innholdet balansert?** Presenteres flere perspektiver, eller bare én side av saken?

### Vanlige typer feilinformasjon
- **Falske nyheter (fake news):** Bevisst fabrikkerte nyhetslignende artikler designet for å villede
- **Desinformasjon:** Feilaktig informasjon spredd med vilje for å manipulere
- **Feilinformasjon (misinformasjon):** Feilaktig informasjon spredd uten bevisst hensikt om å villede
- **Clickbait:** Sensasjonelle overskrifter designet for å få deg til å klikke
- **Manipulerte bilder og videoer:** Redigert innhold som gir et feilaktig inntrykk, inkludert «deepfakes» laget med kunstig intelligens

### Tips for kildekritikk i praksis
- Sjekk faktisk.no — Norges uavhengige faktasjekker
- Bruk snopes.com for internasjonale påstander
- Søk etter originalkilden til påstander
- Vær ekstra skeptisk til innhold som vekker sterke følelser
- Husk at et pent oppsett og et profesjonelt design ikke garanterer at innholdet er sant`,
    },

    // ========== OPPGAVE 8.8 ==========
    {
      id: 'samfunnsfag-10-8-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-8',
        number: '8.8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Du ser en påstand som deles mye på sosiale medier: «Forskere har bevist at mobilen gir hjernekreft.» Bruk de seks spørsmålene for kildekritikk til å vurdere påstanden.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke av de seks spørsmålene ville du stilt først, og hvorfor?',
            solution: 'De viktigste spørsmålene å stille først er: Hvem er avsender? (Er det en troverdig forsker/institusjon?) og Hva er kildegrunnlaget? (Hvilken forskning vises det til?). Disse avslører raskt om påstanden har faglig grunnlag.',
          },
          {
            label: 'b',
            task: 'Hva ville du gjort for å undersøke om påstanden stemmer?',
            solution: 'Søke opp påstanden på faktisk.no eller andre faktasjekkere. Søke etter originalforskningen det eventuelt vises til. Sjekke hva anerkjente helseorganisasjoner som WHO sier. Være skeptisk fordi påstanden er formulert absolutt («har bevist»), noe seriøs forskning sjelden gjør.',
          },
        ],
        hints: ['Seriøs forskning bruker sjelden absolutte formuleringer som «har bevist».'],
        solution: 'Kildekritikk handler om å stille systematiske spørsmål til informasjonen man møter, og å undersøke påstander før man tror på dem eller deler dem videre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: FALSKE NYHETER ==========
    {
      id: 'samfunnsfag-10-8-example-3',
      type: 'example',
      title: 'Eksempel: Falske nyheter og desinformasjon i Norge',
      problem: 'Hvordan har falske nyheter og desinformasjon påvirket den offentlige debatten i Norge?',
      solution: `**Eksempler på desinformasjon i norsk kontekst:**

**1. Covid-19-pandemien (2020-2022)**
Under pandemien florerte det med feilinformasjon om viruset, vaksiner og smitteverntiltak i norske sosiale medier. Falske påstander om at 5G-nettet forårsaket korona, eller at vaksinene inneholdt mikrochiper, ble spredd i lukkede Facebook-grupper. Folkehelseinstituttet og faktisk.no måtte drive aktivt arbeid for å motbevise feilaktige påstander.

**2. Russisk desinformasjon**
Forsvarets forskningsinstitutt (FFI) har dokumentert at norske nyhetsmedier og sosiale medier tidvis påvirkes av koordinerte desinformasjonskampanjer fra russiske aktører, særlig knyttet til temaer som NATO, forsvarspolitikk og Norges nordområder.

**3. Valgpåvirkning**
Før stortingsvalg har det blitt avdekket at falske eller villedende politiske budskap spres i norske sosiale medier. Medietilsynet overvåker dette aktivt.

**Hva gjør Norge for å motvirke desinformasjon?**
- **Faktisk.no:** Norges uavhengige faktasjekker, startet i 2017
- **Medietilsynet:** Overvåker mediemarkedet og driver mediepedagogikk
- **Skoleverket:** Kildekritikk er en del av læreplanen (LK20)
- **Medieselskapene:** NRK, TV2 og de store nettavisene har egne faktasjekkere

**Det viktige poenget:** Kampen mot desinformasjon er ikke noe myndighetene alene kan vinne — den krever at hver enkelt av oss er bevisst og kritisk til informasjonen vi møter.`,
    },

    // ========== OPPGAVE 8.9 ==========
    {
      id: 'samfunnsfag-10-8-ex-9',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-9',
        number: '8.9',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste forskjellen mellom desinformasjon og feilinformasjon?',
        options: [
          {
            id: 'a',
            text: 'Desinformasjon er falsk informasjon spredd med vilje, feilinformasjon er falsk informasjon spredd uten bevisst hensikt',
            isCorrect: true,
            feedback: 'Riktig! Den avgjørende forskjellen er hensikten bak spredningen — desinformasjon er bevisst villedende, mens feilinformasjon spres uten vond vilje.',
          },
          {
            id: 'b',
            text: 'Desinformasjon spres på internett, feilinformasjon spres i aviser',
            isCorrect: false,
            feedback: 'Feil. Begge kan spres gjennom alle mediekanaler. Forskjellen handler om hensikten, ikke plattformen.',
          },
          {
            id: 'c',
            text: 'Desinformasjon er ulovlig, mens feilinformasjon er lovlig',
            isCorrect: false,
            feedback: 'Feil. Ingen av delene er nødvendigvis ulovlige i seg selv, med mindre de for eksempel inneholder hatefulle ytringer eller ærekrenkelser.',
          },
          {
            id: 'd',
            text: 'Det er ingen forskjell — begge betyr det samme',
            isCorrect: false,
            feedback: 'Feil. Det er en viktig forskjell knyttet til intensjonen bak spredningen.',
          },
        ],
        solution: 'Desinformasjon er bevisst falsk informasjon spredd for å villede, mens feilinformasjon er feilaktig informasjon spredd uten bevisst hensikt. Hensikten er den avgjørende forskjellen.',
      },
    },

    // ========== OPPGAVE 8.10 — REFLEKSJON ==========
    {
      id: 'samfunnsfag-10-8-ex-10',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-10',
        number: '8.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Refleksjonsoppgave: Tenk over ditt eget mediebruk.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv medievanene dine: Hvilke medier og plattformer bruker du mest? Omtrent hvor mye tid bruker du daglig?',
            solution: 'Svaret er individuelt, men bør vise bevissthet om eget mediebruk, inkludert sosiale medier, strømming, nettaviser, gaming og eventuelt tradisjonelle medier.',
          },
          {
            label: 'b',
            task: 'Vurder om du befinner deg i en filterboble eller et ekkokammer. Hva slags innhold ser du mest av? Er det ensrettet?',
            solution: 'Eleven bør reflektere over om innholdet de møter er variert eller ensrettet, og om de aktivt oppsøker ulike perspektiver eller lar algoritmer styre hva de ser.',
          },
          {
            label: 'c',
            task: 'Lag tre konkrete tiltak du kan gjøre for å få et mer variert og balansert mediebilde.',
            solution: 'Eksempler: Følge nyhetsmedier med ulik profil, bevisst oppsøke meninger du er uenig med, bruke faktasjekk-tjenester, begrense tiden i algoritmestyrte feeder, lese lengre artikler i stedet for bare overskrifter.',
          },
        ],
        hints: ['Vær ærlig med deg selv — dette handler ikke om «riktige» svar, men om bevissthet.'],
        solution: 'En god refleksjon viser bevissthet om eget mediebruk, evne til selvkritikk, og konkrete tiltak for forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-8-oppsummering',
      type: 'text',
      content: `## Oppsummering: Medier og kommunikasjon

Mediene spiller en avgjørende rolle i demokratiet som informasjonskilde, vaktbikkje, debattarena og dagsordensetter.

**Nøkkelbegreper:**
- **Den fjerde statsmakt:** Medienes rolle som uavhengig kontrollør av de tre statsmaktene
- **Pressefrihet:** Medienes rett til å rapportere fritt, uten statlig sensur
- **Algoritme:** Et sett regler en datamaskin følger, som i sosiale medier bestemmer hva du ser
- **Filterboble:** Når algoritmer bare viser deg innhold som bekrefter det du allerede tror
- **Ekkokammer:** Når du bare omgir deg med folk og informasjon som bekrefter dine synspunkter
- **Presseetikk:** De etiske retningslinjene mediene følger
- **Vær Varsom-plakaten:** Norsk presses etiske regelverk
- **PFU:** Pressens Faglige Utvalg — klageorgan for presseetikk
- **Kildekritikk:** Evnen til å vurdere informasjon kritisk
- **Desinformasjon:** Bevisst falsk informasjon spredd for å villede
- **Feilinformasjon:** Falsk informasjon spredd uten bevisst hensikt
- **Hatprat:** Ytringer som angriper personer/grupper basert på hvem de er`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-8-ex-11',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-11',
        number: '8.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Sosiale medier er en trussel mot demokratiet.» Drøft denne påstanden ved å presentere argumenter for og mot.',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter minst tre argumenter for at sosiale medier truer demokratiet.',
            solution: 'Argumenter for: Filterbobler og ekkokammer polariserer samfunnet, desinformasjon spres raskt, algoritmer prioriterer engasjement over sannhet, utenlandske aktører kan drive valgpåvirkning, hatprat skremmer folk fra å delta i debatt, store teknologiselskaper har for mye makt over informasjonsstrømmen.',
          },
          {
            label: 'b',
            task: 'Presenter minst tre argumenter mot — altså for at sosiale medier styrker demokratiet.',
            solution: 'Argumenter mot: Flere stemmer slipper til, lavere terskel for politisk deltakelse, kan mobilisere for viktige saker (f.eks. klimastreik, metoo), gir folk i undertrykkende regimer mulighet til å organisere seg, holder makthavere ansvarlige gjennom citizen journalism, demokratiserer tilgang til informasjon.',
          },
          {
            label: 'c',
            task: 'Gi din egen vurdering: Styrker eller svekker sosiale medier demokratiet? Begrunn svaret.',
            solution: 'En god vurdering veier argumentene mot hverandre og kommer med en begrunnet konklusjon. Et mulig standpunkt: Sosiale medier er verken en entydig trussel eller styrke — det avhenger av hvordan de brukes og reguleres. Bevisste, kildekritiske borgere kan bruke sosiale medier til å styrke demokratiet.',
          },
        ],
        hints: [
          'Bruk konkrete eksempler.',
          'Vis at du forstår begge sider av saken.',
          'Din egen konklusjon må bygge på argumentene du har presentert.',
        ],
        solution: 'En god drøfting viser nyansert forståelse av sosiale mediers rolle i demokratiet, med konkrete eksempler og en begrunnet egen vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-8-ex-12',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-12',
        number: '8.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Bør staten regulere algoritmene i sosiale medier for å motvirke filterbobler og ekkokammer? Eller er det et inngrep i ytringsfriheten?',
        hints: [
          'Tenk på forholdet mellom frihet og regulering.',
          'Hvem har ansvaret — staten, selskapene eller brukerne?',
          'Se etter eksempler fra andre land.',
        ],
        solution: 'En god drøfting vurderer hensynet til demokratisk debatt, pressefrihet, næringslivets frihet og individets autonomi. EU har vedtatt regler for plattformselskaper (Digital Services Act), som kan være relevant å trekke inn. Svaret bør vise forståelse for at dette er et dilemma med gode argumenter på begge sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'samfunnsfag-10-8-ex-13',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-13',
        number: '8.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektoppgave: Velg én norsk mediesak fra det siste året. Analyser saken ved å svare på spørsmålene under.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort hva saken handler om og hvilke medier som dekket den.',
            solution: 'Svaret bør beskrive en konkret, aktuell norsk mediesak og nevne hvilke medier som har dekket den.',
          },
          {
            label: 'b',
            task: 'Analyser medienes dekning: Har de ulike mediene vinklet saken forskjellig? Har noen vært mer kritiske enn andre?',
            solution: 'Eleven bør sammenligne minst to mediers dekning av saken og peke på forskjeller i vinkling, kildebruk og balanse.',
          },
          {
            label: 'c',
            task: 'Vurder: Har mediene gjort en god jobb med å informere befolkningen om denne saken? Begrunn svaret.',
            solution: 'Svaret bør vurdere om dekningen var balansert, faktabasert og grundig, og om den ga leserne et godt grunnlag for å danne seg en mening.',
          },
        ],
        hints: ['Bruk gjerne søk i nettaviser for å finne og sammenligne dekningen.'],
        solution: 'Oppgaven trener kritisk medianalyse gjennom å sammenligne mediers dekning av en aktuell sak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Identitet og mangfold
// LK20: Reflektere over korleis identitet, sjølvbilde og eigne grenser
//        blir utvikla og utfordra
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_9: TextbookChapter = {
  id: 'samfunnsfag-10-9',
  courseId: 'samfunnsfag-10',
  chapterNumber: '9',
  title: 'Identitet og mangfold',
  description: 'Utforsk hva identitet er, hvordan den formes, og hvilken rolle etnisitet, religion, mangfold og inkludering spiller i det norske samfunnet.',
  estimatedMinutes: 90,
  competenceGoals: [
    'reflektere over korleis identitet, sjølvbilde og eigne grenser blir utvikla og utfordra',
    'utforske korleis samisk identitet og rettar er sikra i Noreg',
    'drøfte problemstillingar knytte til mangfald, inkludering og rasisme',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-9-intro',
      type: 'text',
      content: `## Hvem er du — egentlig?

Hvis noen ber deg beskrive deg selv, hva sier du? Kanskje nevner du navnet ditt, alderen, hjemstedet, interessene dine, musikken du hører på, eller vennene dine. Men er det dette som gjør deg til deg?

**Identitet** handler om hvem du opplever at du er — og hvem andre oppfatter deg som. Det er et sammensatt puslespill der mange brikker passer sammen: Familien du vokser opp i, språket du snakker, kulturen du er en del av, verdiene du tror på, kroppen du lever i, og erfaringene du har gjort deg.

Det som gjør identitet så fascinerende, er at den ikke er statisk. Du er ikke den samme som du var for fem år siden, og du vil ikke være den samme om ti år. Identitet er noe som utvikler seg gjennom hele livet — i møte med andre mennesker, nye opplevelser og et samfunn som er i stadig endring.

Norge er i dag et **mangfoldig** samfunn. Her bor mennesker med ulik bakgrunn, ulike religioner, ulike tradisjoner og ulike måter å leve på. Noen familier har bodd i Norge i generasjoner, andre kom for kort tid siden. Noen tilhører urfolk med en tusenårig historie i dette landet. Dette mangfoldet er en ressurs, men det byr også på utfordringer.

I dette kapittelet skal du lære om:
- Hva identitet er og hvordan den formes
- Etnisitet, kultur og tilhørighet
- Religion og livssyn i et mangfoldig samfunn
- Urfolk i Norge — samenes rettigheter og kultur
- Innvandring og integrering
- Rasisme, diskriminering og inkludering`,
    },

    // ========== DEFINISJON: IDENTITET ==========
    {
      id: 'samfunnsfag-10-9-def-1',
      type: 'definition',
      title: 'Identitet',
      content: `**Identitet** er opplevelsen av hvem du er — det som gjør deg til deg. Identiteten din er sammensatt av mange faktorer som påvirker og former hverandre.

Vi kan dele identitet inn i flere lag:

**Personlig identitet** — det som er unikt for deg:
- Personligheten din (introvert/ekstrovert, kreativ/analytisk)
- Interessene og lidenskapene dine
- Verdiene og meningene dine
- Dine drømmer og ambisjoner
- Dine personlige erfaringer

**Sosial identitet** — gruppene du tilhører og identifiserer deg med:
- Familie og slekt
- Vennegjeng
- Klasse, skole, idrettslag
- Bosted og lokalsamfunn
- Nasjonalitet og etnisitet

**Kulturell identitet** — kulturen som har formet deg:
- Språk og dialekt
- Tradisjoner, skikker og høytider
- Mat, musikk, kunst
- Religion eller livssyn
- Normer og verdier du har vokst opp med

**Viktige poenger om identitet:**
- Identitet er **dynamisk** — den endrer seg gjennom livet
- Du har **mange identiteter** samtidig: Du kan være norsk, muslim, fotballspiller og bookworm på én gang
- Identitet formes i **samspill** med andre — vi definerer oss selv delvis gjennom hvem vi er, og delvis gjennom hvem vi ikke er
- Det er forskjell mellom den identiteten du **velger selv** (for eksempel interesser og venner) og den du **blir tildelt** av andre (for eksempel etnisitet og kjønn)`,
    },

    // ========== TEKST: IDENTITETSUTVIKLING I UNGDOMSTIDEN ==========
    {
      id: 'samfunnsfag-10-9-identitetsutvikling',
      type: 'text',
      content: `## Identitetsutvikling i ungdomstiden

Ungdomstiden er den perioden i livet der identitetsutviklingen er aller mest intens. Du er i ferd med å finne ut hvem du er, hva du står for, og hvem du vil bli.

### Hva påvirker identiteten din?

**Familie:** Familien er den første og viktigste påvirkningen. Verdier, språk, tradisjoner og levemåte formes tidlig i livet. Mange ungdommer opplever et spenningsfelt mellom familiens forventninger og ønsket om å gå sin egen vei.

**Venner og jevnaldrende:** I ungdomstiden blir venners meninger stadig viktigere. Du sammenligner deg med andre, tilpasser deg gruppa, og utforsker ulike roller. Gruppepress kan både være positivt (motivere deg) og negativt (presse deg til ting du egentlig ikke vil).

**Skolen:** Skolen er en arena der du møter mange forskjellige mennesker og ideer. Fagene, lærerne og medelevene bidrar alle til å forme hvordan du tenker og ser verden.

**Medier og populærkultur:** Sosiale medier, TV-serier, musikk og influencere spiller en stor rolle. De gir deg forbilder, men kan også skape urealistiske forventninger til utseende, livsstil og suksess.

**Samfunnet:** Kulturen, normene og verdiene i samfunnet du lever i, former identiteten din. Å vokse opp i Norge i dag gir andre forutsetninger enn å vokse opp i et annet land eller i en annen tid.

### Identitetskrise — en normal del av utviklingen
Psykologen Erik Erikson beskrev ungdomstiden som en periode preget av «identitet versus rolleforvirring». Det er normalt å føle seg usikker, prøve ulike roller, og endre mening om hvem man er og vil være. Dette er ikke et tegn på at noe er galt — det er en nødvendig del av utviklingen.

### Dobbel identitet
Mange ungdommer i Norge vokser opp med det som kalles **dobbel kulturell identitet** — de føler tilhørighet til både norsk kultur og en annen kultur gjennom foreldre eller besteforeldre. Dette kan være berikende, men også utfordrende dersom de to kulturene har ulike forventninger.`,
    },

    // ========== OPPGAVE 9.1 ==========
    {
      id: 'samfunnsfag-10-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-1',
        number: '9.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Refleksjonsoppgave om din egen identitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre ting som er viktige for din identitet — hvem du er. Forklar hvorfor disse er viktige for deg.',
            solution: 'Svaret er individuelt. Eleven bør velge tre elementer (f.eks. familiebakgrunn, en hobby, en verdi, en vennegjeng, et talent) og forklare hvorfor akkurat disse er viktige for hvem de er.',
          },
          {
            label: 'b',
            task: 'Hvordan har identiteten din endret seg de siste tre årene? Hva har formet endringene?',
            solution: 'Eleven bør reflektere over endringer i interesser, verdier, venner, selvbilde eller holdninger, og knytte dem til påvirkningsfaktorer som venner, medier, skole eller erfaringer.',
          },
        ],
        hints: ['Det finnes ingen «riktige» svar her — dette handler om din personlige refleksjon.'],
        solution: 'En god refleksjon viser selvinnsikt og evne til å se seg selv i sammenheng med omgivelsene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9.2 ==========
    {
      id: 'samfunnsfag-10-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-2',
        number: '9.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med at identitet er «dynamisk»?',
        options: [
          {
            id: 'a',
            text: 'At identiteten din er bestemt av genene dine og ikke kan endres',
            isCorrect: false,
            feedback: 'Feil. Dynamisk betyr det motsatte av fastlåst — det betyr at noe endrer seg og utvikler seg.',
          },
          {
            id: 'b',
            text: 'At identiteten din utvikler seg og endrer seg gjennom livet',
            isCorrect: true,
            feedback: 'Riktig! En dynamisk identitet er en som er i stadig utvikling, formet av erfaringer og omgivelser.',
          },
          {
            id: 'c',
            text: 'At du har samme identitet som foreldrene dine',
            isCorrect: false,
            feedback: 'Feil. Foreldrene påvirker identiteten din, men du utvikler din egen unike identitet.',
          },
          {
            id: 'd',
            text: 'At identiteten din bestemmes av hvilken skole du går på',
            isCorrect: false,
            feedback: 'Feil. Skolen er én av mange påvirkningsfaktorer, men identiteten din er mye bredere enn skolen.',
          },
        ],
        solution: 'At identitet er dynamisk betyr at den ikke er fastsatt en gang for alle, men utvikler seg og endrer seg gjennom hele livet.',
      },
    },

    // ========== DEFINISJON: ETNISITET OG KULTUR ==========
    {
      id: 'samfunnsfag-10-9-def-2',
      type: 'definition',
      title: 'Etnisitet og kultur',
      content: `**Etnisitet** handler om tilhørighet til en folkegruppe som deler felles kultur, historie, språk, tradisjoner eller opprinnelse. Etnisk identitet er ofte noe du føler innenfra — en opplevelse av tilhørighet til en bestemt gruppe.

**Viktig å forstå:**
- Etnisitet er **ikke det samme som rase**. Rase er et utdatert biologisk begrep som har blitt brukt til å kategorisere mennesker etter utseende. Moderne vitenskap har vist at det ikke finnes biologiske «raser» blant mennesker — genetisk sett er vi langt mer like enn vi er forskjellige.
- Etnisitet er **kulturelt betinget**, ikke biologisk. Det handler om fellesskap, kultur og identitet — ikke om hudfarge, hårtype eller ansiktstrekk.
- Du kan ha **flere etniske identiteter** samtidig. En person kan føle seg både norsk og somalisk, eller både samisk og norsk.

**Kultur** er den samlede kunnskapen, verdiene, tradisjonene, normene, kunstuttrykkene og levemåtene som deles av en gruppe mennesker. Kultur er noe vi lærer — det er ikke medfødt.

**Noen viktige kulturbegreper:**
- **Kulturarv:** Tradisjoner, skikker og verdier som overføres fra generasjon til generasjon
- **Kulturmøte:** Når mennesker fra ulike kulturer møtes og påvirker hverandre
- **Kulturkollisjon:** Når kulturmøter fører til konflikter fordi verdier og normer er i strid med hverandre
- **Kulturrelativisme:** Å forsøke å forstå en kultur på dens egne premisser, uten å dømme den ut fra sin egen kultur
- **Etnosentrisme:** Å vurdere andre kulturer ut fra sin egen som «den riktige» målestokken

I et mangfoldig samfunn som Norge er det viktig å kunne forholde seg til kulturforskjeller med både åpenhet og refleksjon.`,
    },

    // ========== OPPGAVE 9.3 ==========
    {
      id: 'samfunnsfag-10-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-3',
        number: '9.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forskjellen mellom etnisitet og rase.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar med egne ord hva som er forskjellen mellom etnisitet og rase.',
            solution: 'Etnisitet handler om kulturell tilhørighet — felles språk, tradisjoner, historie og identitet. Rase er et utdatert begrep basert på biologisk klassifisering etter utseende. Moderne vitenskap viser at det ikke finnes biologiske raser blant mennesker. Etnisitet er kulturelt, rase var et forsøk på biologisk kategorisering.',
          },
          {
            label: 'b',
            task: 'Hvorfor er det viktig å skille mellom disse begrepene?',
            solution: 'Fordi rasetenkning har blitt brukt historisk til å rettferdiggjøre undertrykkelse, slaveri og folkemord. Å forstå at det ikke finnes biologiske raser undergraver rasisme. Etnisitet er et mer presist og nyttig begrep fordi det beskriver kulturell tilhørighet uten å skape falske biologiske hierarkier.',
          },
        ],
        hints: ['Tenk på hva som er medfødt og hva som er tillært.'],
        solution: 'Etnisitet er kulturelt, mens rase var et utdatert forsøk på biologisk kategorisering. Moderne vitenskap viser at det ikke finnes biologiske raser blant mennesker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: RELIGION OG LIVSSYN ==========
    {
      id: 'samfunnsfag-10-9-religion',
      type: 'text',
      content: `## Religion og livssyn i Norge

Norge har gått fra å være et nesten helt homogent kristent samfunn til å bli et mangfoldig livssynssamfunn på bare noen tiår. Denne endringen gjenspeiler globale trender, innvandring og sekularisering.

### Historisk bakgrunn
I tusen år var Den norske kirke (luthersk-evangelisk) statskirke i Norge. Alle nordmenn var automatisk medlemmer, og kristendommen preget lover, skikker og hverdagsliv. Først i 2012 ble det formelle båndet mellom stat og kirke løsnet, selv om Den norske kirke fortsatt har en spesiell stilling i Grunnloven.

### Religionsmangfold i dag
Norge er i dag et **livssynsåpent samfunn** der mange religioner og livssyn eksisterer side om side:

- **Kristendom:** Fortsatt den største religionen. Den norske kirke har ca. 3,6 millioner medlemmer, men bare en liten andel er aktivt praktiserende.
- **Islam:** Norges nest største religion, med ca. 200 000 medlemmer i trossamfunn. Norske muslimer har bakgrunn fra mange ulike land og representerer et stort mangfold av tradisjoner.
- **Humanisme:** Human-Etisk Forbund er Norges største livssynsorganisasjon utenfor Den norske kirke, med over 100 000 medlemmer. De har et ikke-religiøst livssyn basert på menneskeverd og fornuft.
- **Andre religioner:** Buddhisme, hinduisme, sikhisme, jødedom, bahá'í og mange andre er representert i Norge.

### Religionsfrihet
Grunnlovens § 16 sikrer religionsfrihet i Norge. Det betyr at alle har rett til å:
- Tro eller ikke tro
- Praktisere sin religion fritt
- Skifte religion eller livssyn
- Ikke bli diskriminert på grunn av sin tro

### Utfordringer og debatter
Noen spørsmål som diskuteres i Norge i dag:
- Skal religiøse symboler som hijab, kors eller kippa tillates i politiet og domstolene?
- Bør barn omskjæres av religiøse grunner?
- Hvordan balansere religionsfrihet med andre rettigheter, som likestilling?
- Bør religiøse privatskoler motta statsstøtte?

Disse spørsmålene har ikke enkle svar. Ulike mennesker — med ulike verdier og perspektiver — vil mene ulike ting. Det som er viktig, er at debatten foregår med respekt og vilje til å forstå hverandre.`,
    },

    // ========== OPPGAVE 9.4 ==========
    {
      id: 'samfunnsfag-10-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-4',
        number: '9.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier Grunnloven om religionsfrihet i Norge?',
        options: [
          {
            id: 'a',
            text: 'Alle nordmenn må være medlemmer av Den norske kirke',
            isCorrect: false,
            feedback: 'Feil. Denne regelen ble avskaffet for lenge siden. Norge har full religionsfrihet.',
          },
          {
            id: 'b',
            text: 'Alle har rett til fritt å tro, praktisere sin religion og skifte livssyn',
            isCorrect: true,
            feedback: 'Riktig! Grunnlovens § 16 sikrer full religionsfrihet i Norge.',
          },
          {
            id: 'c',
            text: 'Religion er forbudt i offentlige bygninger',
            isCorrect: false,
            feedback: 'Feil. Norge har ikke et slikt forbud. Religionsfrihet betyr at alle kan praktisere sin tro.',
          },
          {
            id: 'd',
            text: 'Bare kristendom og islam er tillatt i Norge',
            isCorrect: false,
            feedback: 'Feil. Religionsfriheten gjelder alle religioner og livssyn — uten begrensning.',
          },
        ],
        solution: 'Grunnlovens § 16 gir alle innbyggere i Norge full religionsfrihet — retten til å tro, praktisere og skifte religion eller livssyn.',
      },
    },

    // ========== EKSEMPEL: KULTURMØTE ==========
    {
      id: 'samfunnsfag-10-9-example-1',
      type: 'example',
      title: 'Eksempel: Kulturmøte i hverdagen — mat som brobygger',
      problem: 'Hvordan kan noe så hverdagslig som mat vise hvordan kulturer møtes og beriker hverandre i Norge?',
      solution: `**Matkultur som kulturmøte:**

For 50 år siden var norsk matkultur ganske enhetlig: poteter, fisk, kjøttkaker, komle og lefse. I dag er det norske matlandskapet totalt forandret — og det er et direkte resultat av kulturmøter.

**Eksempler på kulturpåvirkning gjennom mat:**
- **Taco:** Norges uoffisielle nasjonalrett på fredager kommer opprinnelig fra Mexico, men har blitt tilpasset norsk smak
- **Kebab:** Fra Midtøsten og Tyrkia har kebaben blitt en av Norges mest populære gatematretter
- **Sushi:** Japansk matkultur som har blitt hverdagsmat i Norge
- **Pizza:** Opprinnelig italiensk, men i Norge har vi utviklet vår egen versjon (Grandiosa)
- **Indisk og thailandsk mat:** Krydder og smaker som har beriklet norsk matkultur enormt

**Hva dette viser oss:**
Kulturmøter handler ikke bare om konflikter — de fører ofte til berikelse. Kulturer er ikke statiske bokser, men levende tradisjoner som påvirker og beriker hverandre. Norsk kultur i dag er allerede et resultat av tusenvis av kulturmøter gjennom historien — fra vikingtiden til i dag.

**Et viktig poeng:** Når vi snakker om «norsk kultur», snakker vi om noe som alltid har vært i endring. Poteten, som mange ser som «typisk norsk», kom til Norge fra Sør-Amerika på 1700-tallet. Kaffen — en norsk institusjon — ble først dyrket i Etiopia. Kultur er ikke noe som kan fryses fast.`,
    },

    // ========== DEFINISJON: URFOLK ==========
    {
      id: 'samfunnsfag-10-9-def-3',
      type: 'definition',
      title: 'Urfolk — samene i Norge',
      content: `**Urfolk** er folkegrupper som har bodd i et område lenge før andre folk kom dit, og som har beholdt sin egen kultur, sine tradisjoner og sitt eget samfunn.

**Samene** er Norges — og Skandinavias — urfolk. De har levd i Sápmi (samisk land) i tusenvis av år, lenge før statsgrensene mellom Norge, Sverige, Finland og Russland ble trukket. Sápmi strekker seg fra Hedmark i sør til Finnmark i nord.

**Samisk kultur og identitet:**
- **Språk:** Det finnes flere samiske språk, der nordsamisk er det største. Samisk er et offisielt språk i Norge, likestilt med norsk i samiske forvaltningsområder.
- **Næringer:** Tradisjonelt reindrift, fiske, jakt og duodji (samisk kunsthåndverk). I dag jobber samer i alle yrker.
- **Kultur:** Joik, samisk kunst, kofte (tradisjonelle klær), mattradisjoner og naturfilosofi er viktige deler av samisk kultur.
- **Samfunn:** Sametinget ble opprettet i 1989 og er samenes folkevalgte organ. Det har 39 representanter valgt av personer i samemanntallet.

**Fornorskningspolitikken:**
Fra midten av 1800-tallet til slutten av 1900-tallet førte den norske staten en systematisk **fornorskningspolitikk** overfor samene. Samiske barn ble sendt på internatskoler der det var forbudt å snakke samisk. Samisk kultur ble undertrykt, og mange samer mistet språket og de kulturelle tradisjonene sine.

Denne politikken er et mørkt kapittel i norsk historie. I 1997 ba kong Harald om unnskyldning på vegne av staten, og i 2018 nedsatte Stortinget en sannhets- og forsoningskommisjon for å granske fornorskningspolitikken.

**Samenes rettigheter i dag:**
- ILO-konvensjon nr. 169 om urfolk beskytter samenes rettigheter
- Grunnlovens § 108 slår fast at staten skal legge til rette for samisk kultur og samfunnsliv
- Finnmarksloven (2005) ga Finnmarkseiendommen (FeFo) ansvaret for forvaltning av land og ressurser i Finnmark
- Sametinget har konsultasjonsrett i saker som berører samene`,
    },

    // ========== OPPGAVE 9.5 ==========
    {
      id: 'samfunnsfag-10-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-5',
        number: '9.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fornorskningspolitikken overfor samene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gikk fornorskningspolitikken ut på? Gi minst tre konkrete eksempler.',
            solution: 'Fornorskningspolitikken innebar at samiske barn ble sendt på internatskoler der samisk språk var forbudt. Samisk navngiving ble motarbeidet. Samiske næringsformer ble nedvurdert. Samisk kultur ble aktivt undertrykt gjennom skoleverket og myndighetene. Samiske stedsnavn ble erstattet med norske.',
          },
          {
            label: 'b',
            task: 'Hvilke konsekvenser har fornorskningspolitikken fått for samisk kultur og identitet?',
            solution: 'Mange samer mistet språket sitt — hele generasjoner vokste opp uten å lære samisk. Skam over samisk identitet gjorde at mange skjulte bakgrunnen sin. Kulturtradisjoner gikk tapt. Mange opplevde traumer som har blitt overført til senere generasjoner. I dag arbeides det aktivt med revitalisering av samisk språk og kultur.',
          },
          {
            label: 'c',
            task: 'Sannhets- og forsoningskommisjonen la frem sin rapport i 2023. Hvorfor tror du Stortinget mente det var viktig å granske denne delen av historien?',
            solution: 'For å anerkjenne uretten som ble begått, gi de berørte oppreisning, lære av historien for å unngå lignende overgrep i fremtiden, og styrke forsoningen mellom det samiske og det norske samfunnet. Å forstå fortiden er viktig for å bygge et rettferdig samfunn i fremtiden.',
          },
        ],
        hints: ['Fornorskningspolitikken pågikk i over hundre år og berørte tusenvis av mennesker.'],
        solution: 'Fornorskningspolitikken var en systematisk undertrykkelse av samisk kultur og identitet som har hatt langvarige konsekvenser for det samiske samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9.6 ==========
    {
      id: 'samfunnsfag-10-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-6',
        number: '9.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er Sametinget?',
        options: [
          {
            id: 'a',
            text: 'Et museum for samisk kultur i Karasjok',
            isCorrect: false,
            feedback: 'Feil. Sametinget er et folkevalgt organ, ikke et museum. (Selv om det ligger i Karasjok!)',
          },
          {
            id: 'b',
            text: 'Samenes folkevalgte organ med 39 representanter, opprettet i 1989',
            isCorrect: true,
            feedback: 'Riktig! Sametinget er samenes demokratiske organ, der representanter velges av personer registrert i samemanntallet.',
          },
          {
            id: 'c',
            text: 'En norsk domstol som behandler saker som gjelder samiske rettigheter',
            isCorrect: false,
            feedback: 'Feil. Sametinget er ikke en domstol, men et folkevalgt organ — litt som et «samisk storting».',
          },
          {
            id: 'd',
            text: 'En FN-organisasjon som jobber for urfolk over hele verden',
            isCorrect: false,
            feedback: 'Feil. Sametinget er et norsk organ spesifikt for samene. FN har andre organer for urfolksrettigheter.',
          },
        ],
        solution: 'Sametinget ble opprettet i 1989 og er samenes folkevalgte organ med 39 representanter. Det har konsultasjonsrett i saker som berører samene.',
      },
    },

    // ========== TEKST: INNVANDRING OG INTEGRERING ==========
    {
      id: 'samfunnsfag-10-9-innvandring',
      type: 'text',
      content: `## Innvandring og integrering

Norge har alltid hatt inn- og utvandring. Nordmenn har reist til andre land, og folk fra andre land har kommet til Norge. Men omfanget og mønsteret har endret seg kraftig de siste tiårene.

### Innvandringens historie i Norge
- **1960-1970-tallet:** Arbeidsinnvandring fra Pakistan, Tyrkia og Marokko. Folk kom for å jobbe i norsk industri.
- **1975:** Innvandringsstopp — Norge begrenset arbeidsinnvandringen. Familiegjenforening ble en viktigere innvandringsvei.
- **1980-1990-tallet:** Flyktninger fra Vietnam, Sri Lanka, Bosnia og Somalia.
- **2004-:** EØS-utvidelsen førte til stor arbeidsinnvandring fra Øst-Europa, særlig Polen og Litauen.
- **2015:** Flyktningstrøm fra Syria, Afghanistan og Irak.
- **2022-:** Ukrainere som flyktet fra krigen.

### Tall og fakta
I dag har omtrent 20 % av Norges befolkning innvandrerbakgrunn (innvandrere eller norskfødte med innvandrerforeldre). Oslo er den mest mangfoldige byen, der over 30 % har innvandrerbakgrunn. De største gruppene er fra Polen, Litauen, Somalia, Sverige og Pakistan.

### Integrering — hva betyr det?
**Integrering** betyr at innvandrere blir en del av det norske samfunnet — at de lærer norsk, deltar i arbeidslivet, og kjenner sine rettigheter og plikter — samtidig som de kan beholde sin egen kulturelle identitet.

Integrering er et **toveiskonsept**: Det krever innsats både fra innvandrerne og fra det norske storsamfunnet.

**Ulike perspektiver på integrering:**
- **Assimilering:** Innvandrerne gir opp sin opprinnelige kultur og blir helt like majoritetsbefolkningen. Noen mener dette er ønskelig, andre mener det er urimelig og unødvendig.
- **Integrering:** Innvandrerne deltar i samfunnet og lærer språk og normer, men beholder også sin egen kultur. De fleste i Norge støtter denne modellen.
- **Segregering:** Grupper lever ved siden av hverandre uten kontakt eller fellesskap. De fleste er enige om at dette er uønsket.
- **Multikulturalisme:** Alle kulturer anerkjennes som likeverdige, og mangfoldet ses som en ressurs. Kritikere mener dette kan føre til parallellsamfunn.

### Hva diskuteres?
Innvandring og integrering er blant de mest debatterte temaene i norsk politikk. Noen viktige debatter:
- Hvor mange flyktninger bør Norge ta imot?
- Bør innvandrere ha plikt til å lære norsk?
- Hva er den beste veien til integrering — arbeid, utdanning eller begge deler?
- Hvordan motvirke segregering i boligmarkedet?

Det er viktig å huske at dette er spørsmål der fornuftige mennesker med gode intensjoner kan være uenige. Innvandringspolitikk handler om vanskelige avveininger mellom ulike hensyn — humanitære, økonomiske, kulturelle og sikkerhetsmessige.`,
    },

    // ========== OPPGAVE 9.7 ==========
    {
      id: 'samfunnsfag-10-9-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-7',
        number: '9.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom assimilering, integrering og segregering.',
        subTasks: [
          {
            label: 'a',
            task: 'Definer de tre begrepene med egne ord.',
            solution: 'Assimilering: Innvandrere gir helt opp sin opprinnelige kultur og blir «like» majoriteten. Integrering: Innvandrere deltar i samfunnet og lærer språk og normer, men beholder også sin kultur. Segregering: Ulike grupper lever adskilt uten kontakt eller fellesskap.',
          },
          {
            label: 'b',
            task: 'Hvilke fordeler og ulemper kan du se ved integrering sammenlignet med assimilering?',
            solution: 'Integrering: Fordeler — bevarer kulturelt mangfold, respekterer individets identitet, mer realistisk. Ulemper — kan ta lengre tid, risiko for parallellsamfunn hvis integreringen ikke lykkes. Assimilering: Fordeler — kan gi raskere fellesskap og sammenhold. Ulemper — krever at folk gir opp sin identitet, kan oppleves som tvang og undertrykkelse, historisk knyttet til overgrep (jf. fornorskningspolitikken).',
          },
        ],
        hints: ['Tenk på hva hvert begrep betyr for individet og for samfunnet.'],
        solution: 'Integrering innebærer deltakelse i samfunnet med bevaring av egen kultur, assimilering betyr å gi opp sin opprinnelige kultur, og segregering betyr at grupper lever adskilt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: RASISME OG DISKRIMINERING ==========
    {
      id: 'samfunnsfag-10-9-def-4',
      type: 'definition',
      title: 'Rasisme og diskriminering',
      content: `**Rasisme** er holdninger, handlinger eller strukturer som behandler mennesker ulikt — eller nedvurderer dem — basert på deres etnisitet, hudfarge eller kulturelle bakgrunn.

Vi skiller mellom ulike former for rasisme:

**Direkte rasisme (individuell):**
Bevisste handlinger der en person behandler en annen dårligere på grunn av etnisitet eller hudfarge. Eksempler: rasistiske skjellsord, vold mot personer med minoritetsbakgrunn, bevisst ekskludering.

**Strukturell rasisme:**
Systemer, regler eller praksiser i samfunnet som — bevisst eller ubevisst — stiller personer med minoritetsbakgrunn dårligere. Eksempler: Studier viser at jobbsøkere med utenlandsk-klingende navn blir sjeldnere kalt inn til intervju, selv med identiske kvalifikasjoner. Boligutleiere som avviser leietakere med minoritetsbakgrunn.

**Hverdagsrasisme (mikroaggresjoner):**
Dagligdagse kommentarer eller handlinger som kan oppleves krenkende, selv om avsenderen kanskje ikke mener det vondt. Eksempler: «Hvor kommer du egentlig fra?» (til en person som er født i Norge), «Du snakker jo så bra norsk!» (som underforstått antar at personen ikke «hører til»).

**Diskriminering** er å behandle noen urettferdig eller ulikt basert på kjennetegn som etnisitet, kjønn, religion, funksjonsevne, seksuell orientering eller alder. Diskriminering er forbudt i Norge gjennom **likestillings- og diskrimineringsloven**.

**Viktig:** Diskriminering kan ramme mange grupper — ikke bare etniske minoriteter. Kvinner, LHBT+-personer, personer med funksjonsnedsettelse og eldre kan også utsettes for diskriminering.

Likestillings- og diskrimineringsombudet (LDO) hjelper personer som opplever diskriminering, og Diskrimineringsnemnda behandler klager.`,
    },

    // ========== EKSEMPEL: STRUKTURELL RASISME ==========
    {
      id: 'samfunnsfag-10-9-example-2',
      type: 'example',
      title: 'Eksempel: Forskning på diskriminering i arbeidslivet',
      problem: 'Forskere ved Institutt for samfunnsforskning gjennomførte i 2012 og 2021 eksperimenter der de sendte ut identiske jobbsøknader med norske og pakistanske navn. Hva fant de?',
      solution: `**Forskningsresultater:**

Forskerne sendte ut tusenvis av fiktive jobbsøknader til reelle stillingsannonser. Søknadene var identiske — samme utdanning, erfaring og kvalifikasjoner — med ett unntak: navnet på søkeren.

**Funnene:**
- Søkere med pakistansk-klingende navn ble kalt inn til intervju **ca. 25 % sjeldnere** enn søkere med norsk-klingende navn
- Forskjellen gjaldt på tvers av bransjer og stillingsnivåer
- Diskrimineringen var omtrent like stor i 2021 som i 2012, til tross for økt bevissthet om temaet

**Hva dette betyr:**
Dette er et eksempel på strukturell diskriminering. Arbeidsgiverne diskriminerte sannsynligvis ikke bevisst, men ubevisste fordommer (også kalt **implisitte holdninger**) påvirket vurderingen deres.

**Ulike perspektiver på funnene:**
- Noen mener dette viser at strukturell rasisme er et alvorlig og vedvarende problem som krever aktive tiltak, som anonyme jobbsøknader
- Andre påpeker at forskningen har begrensninger og at andre faktorer enn rasisme kan spille inn, som språkkompetanse eller nettverk
- De fleste er enige om at alle bør vurderes på bakgrunn av kvalifikasjoner, ikke navn eller bakgrunn

**Hva gjøres?**
Flere norske kommuner og bedrifter har innført anonyme jobbsøknader, der navn og bakgrunn fjernes fra søknaden før den vurderes. Forskning tyder på at dette kan redusere diskriminering i ansettelsesprosessen.`,
    },

    // ========== OPPGAVE 9.8 ==========
    {
      id: 'samfunnsfag-10-9-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-8',
        number: '9.8',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er et eksempel på strukturell rasisme?',
        options: [
          {
            id: 'a',
            text: 'At en person kaller en annen for rasistiske skjellsord',
            isCorrect: false,
            feedback: 'Dette er direkte/individuell rasisme, ikke strukturell. Strukturell rasisme handler om systemer og strukturer, ikke enkelthandlinger.',
          },
          {
            id: 'b',
            text: 'At jobbsøkere med utenlandsk navn blir kalt inn til færre intervjuer enn søkere med norsk navn, til tross for like kvalifikasjoner',
            isCorrect: true,
            feedback: 'Riktig! Dette er strukturell rasisme fordi det handler om et mønster i arbeidsmarkedet som systematisk stiller en gruppe dårligere.',
          },
          {
            id: 'c',
            text: 'At to venner av ulik bakgrunn er uenige om en politisk sak',
            isCorrect: false,
            feedback: 'Feil. Politisk uenighet er ikke rasisme — det er en normal del av demokratiet.',
          },
          {
            id: 'd',
            text: 'At en person velger å lære seg samisk',
            isCorrect: false,
            feedback: 'Feil. Å lære et annet språk er positivt og har ingenting med rasisme å gjøre.',
          },
        ],
        solution: 'Strukturell rasisme handler om systematiske mønstre og praksiser som stiller minoriteter dårligere, selv uten bevisst diskriminering fra enkeltpersoner.',
      },
    },

    // ========== TEKST: INKLUDERING ==========
    {
      id: 'samfunnsfag-10-9-inkludering',
      type: 'text',
      content: `## Mangfold og inkludering

Et mangfoldig samfunn er ikke automatisk et godt samfunn. Det avgjørende er om mangfoldet møtes med **inkludering** eller **ekskludering**.

### Hva er inkludering?
Inkludering betyr at alle mennesker — uansett bakgrunn, funksjonsevne, kjønn, seksuell orientering eller religion — har reell mulighet til å delta i og bidra til samfunnet. Det handler ikke bare om å «tolerere» at folk er forskjellige, men om å verdsette mangfoldet og gi alle like muligheter.

### Inkludering i praksis
**I skolen:** En inkluderende skole tilpasser undervisningen slik at alle elever kan lære og trives — enten de har norsk som morsmål eller ikke, har en funksjonsnedsettelse, eller kommer fra en annen kultur.

**I arbeidslivet:** Inkludering betyr at alle har like muligheter til jobb og karriere, uavhengig av bakgrunn, kjønn eller funksjonsevne. Det innebærer aktiv innsats for å motvirke diskriminering.

**I lokalsamfunnet:** Et inkluderende lokalsamfunn har møteplasser der mennesker med ulik bakgrunn kan bli kjent med hverandre — idrettslag, frivillighet, kulturarrangementer.

### Fordommer og stereotypier
**Fordommer** er negative holdninger til en gruppe mennesker basert på generalisering i stedet for faktisk kunnskap. Vi har alle fordommer — det viktige er å være bevisst på dem.

**Stereotypier** er forenklede, ofte unyanserte bilder av en gruppe. «Alle nordmenn er opptatt av ski», «alle ungdommer er late» eller «innvandrere er kriminelle» er eksempler på stereotypier. Problemet med stereotypier er at de overser det enorme mangfoldet innen enhver gruppe.

### Hva kan motvirke fordommer?
Forskning viser at **kontakthypotesen** har mye for seg: Når mennesker fra ulike grupper møtes, samarbeider og blir kjent med hverandre som individer, reduseres fordommene. Det er mye vanskeligere å ha negative fordommer mot noen du kjenner personlig.

Dette er en viktig grunn til at inkluderende skoler, arbeidsplasser og nærmiljøer er så viktige — de skaper møteplasser der folk kan bli kjent på tvers av bakgrunn.`,
    },

    // ========== OPPGAVE 9.9 ==========
    {
      id: 'samfunnsfag-10-9-ex-9',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-9',
        number: '9.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fordommer og stereotypier.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi to eksempler på vanlige stereotypier (om en hvilken som helst gruppe) og forklar hvorfor de er problematiske.',
            solution: 'Eksempler kan være: «Gutter er bedre i matte enn jenter» — problematisk fordi det ignorerer individuell variasjon og kan påvirke jenters selvtillit. «Eldre mennesker skjønner ikke teknologi» — problematisk fordi det overser de mange eldre som er fullt ut digitalt kompetente. Stereotypier generaliserer og overser individuelle forskjeller.',
          },
          {
            label: 'b',
            task: 'Forklar kontakthypotesen med egne ord. Har du selv erfaring som støtter eller utfordrer denne hypotesen?',
            solution: 'Kontakthypotesen sier at fordommer reduseres når mennesker fra ulike grupper møtes, samarbeider og blir kjent med hverandre som individer. Egen erfaring kan for eksempel handle om å bli kjent med noen med en annen bakgrunn og oppdage at fordommene stemte dårlig.',
          },
        ],
        hints: ['Vi har alle fordommer — bevissthet om dem er første steg til å motvirke dem.'],
        solution: 'Stereotypier er forenklede generaliseringer som overser individuell variasjon. Kontakt mellom grupper er en effektiv måte å redusere fordommer på.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: MANGFOLD SOM RESSURS ==========
    {
      id: 'samfunnsfag-10-9-example-3',
      type: 'example',
      title: 'Eksempel: Mangfold som ressurs i norsk idrett',
      problem: 'Hvordan viser norsk idrett at mangfold kan være en styrke for samfunnet?',
      solution: `**Eksempler fra norsk idrett:**

Norsk idrett er et godt eksempel på hvordan mangfold kan berike et samfunn:

- **Fotball:** Det norske herrelandslaget har hatt mange spillere med innvandrerbakgrunn, som John Carew (far fra Gambia), Joshua King (far fra Gambia), og Erling Braut Haaland (mor fra England). Disse spillerne har bidratt enormt til norsk fotball.
- **Håndball:** Nora Mørk, Abdul Abdel Hassan og mange andre har gjort Norge til en håndballnasjon.
- **Friidrett:** Karsten Warholm og Jakob Ingebrigtsen konkurrerer side om side med utøvere med ulik bakgrunn.
- **Taekwondo:** Norges OL-gull med Ruth Kasirye (foreldre fra Uganda) viste at talent ikke kjenner etniske grenser.

**Hva idretten viser oss:**
- Talent finnes overalt, uavhengig av bakgrunn
- Når mennesker samarbeider mot et felles mål, spiller bakgrunn mindre rolle
- Idrett er en viktig arena for integrering og fellesskap
- Felles jubel (som når landslaget vinner) skaper tilhørighet på tvers av forskjeller

**Et nyansert bilde:**
Samtidig vet vi at idretten ikke er fri for diskriminering. Rasistiske tilrop på tribuner, ulik tilgang til dyre idretter, og kulturelle barrierer er utfordringer som fortsatt finnes. Inkludering i idretten krever bevisst arbeid.`,
    },

    // ========== OPPGAVE 9.10 ==========
    {
      id: 'samfunnsfag-10-9-ex-10',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-10',
        number: '9.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Refleksjonsoppgave: Mangfold i din hverdag.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv mangfoldet på din skole eller i ditt nærmiljø. Hvilke ulike bakgrunner, kulturer eller livssyn er representert?',
            solution: 'Svaret er individuelt, men bør vise observasjonsevne og bevissthet om det mangfoldet som finnes i elevens omgivelser.',
          },
          {
            label: 'b',
            task: 'Opplever du at mangfoldet i ditt nærmiljø er en ressurs, en utfordring, eller begge deler? Forklar.',
            solution: 'Eleven bør gi en nyansert vurdering som anerkjenner at mangfold kan ha både positive og utfordrende sider. Eksempler kan handle om kulturelt mangfold i mat, musikk og perspektiver, men også om språkbarrierer eller kulturkonflikter.',
          },
          {
            label: 'c',
            task: 'Hva tror du er de viktigste forutsetningene for et vellykket mangfoldig samfunn?',
            solution: 'Gode svar kan nevne: gjensidig respekt, felles arenaer der folk møtes, språkopplæring, like muligheter, rettferdig lovverk, kamp mot diskriminering, dialog på tvers av forskjeller, og vilje til både å tilpasse seg og bevare sin identitet.',
          },
        ],
        hints: ['Det finnes mange «riktige» svar — det viktigste er at du reflekterer og begrunner.'],
        solution: 'En god refleksjon viser evne til å se mangfold fra flere sider og formulere gjennomtenkte vurderinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-9-oppsummering',
      type: 'text',
      content: `## Oppsummering: Identitet og mangfold

Identitet er sammensatt og dynamisk — formet av både personlige valg og samfunnets påvirkning. Norge er et mangfoldig samfunn der mange kulturer, religioner og tradisjoner lever side om side.

**Nøkkelbegreper:**
- **Identitet:** Opplevelsen av hvem du er — sammensatt av personlig, sosial og kulturell identitet
- **Etnisitet:** Tilhørighet til en folkegruppe med felles kultur, historie og språk
- **Kultur:** Felles kunnskap, verdier, tradisjoner og levemåter i en gruppe
- **Kulturrelativisme:** Å forstå en kultur på dens egne premisser
- **Etnosentrisme:** Å vurdere andre kulturer ut fra sin egen
- **Urfolk:** Folkegrupper som har bodd i et område lenge før andre; samene er Norges urfolk
- **Sametinget:** Samenes folkevalgte organ
- **Fornorskningspolitikken:** Norsk statlig undertrykkelse av samisk kultur (ca. 1850-1980)
- **Integrering:** At innvandrere deltar i samfunnet, men beholder sin kulturelle identitet
- **Assimilering:** At innvandrere gir opp sin opprinnelige kultur
- **Rasisme:** Holdninger, handlinger eller strukturer som nedvurderer basert på etnisitet
- **Strukturell rasisme:** Systemer som stiller minoriteter dårligere
- **Diskriminering:** Å behandle noen urettferdig basert på gruppetilhørighet
- **Inkludering:** At alle har reell mulighet til å delta i samfunnet`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-9-ex-11',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-11',
        number: '9.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Det er mulig å være fullt integrert i det norske samfunnet og samtidig ha sterk tilhørighet til en annen kultur.» Drøft denne påstanden.',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter argumenter for at dobbel kulturell identitet er mulig og positivt.',
            solution: 'Argumenter for: Mennesker har alltid hatt sammensatte identiteter. Dobbel tilhørighet gir bredere perspektiv, språkkompetanse og kulturforståelse. Mange norskfødte med innvandrerbakgrunn opplever seg som fullt norske OG forbundet med foreldrenes kultur. Mangfoldige identiteter kan berike både individet og samfunnet.',
          },
          {
            label: 'b',
            task: 'Presenter argumenter for at det kan oppstå spenninger mellom ulike kulturelle tilhørigheter.',
            solution: 'Argumenter for spenninger: Ulike kulturer kan ha motstridende verdier (f.eks. synet på individ vs. kollektiv, kjønnsroller, ytringsfrihet). Lojalitetskonflikter kan oppstå. Press fra både majoritets- og minoritetsmiljøet. Opplevelse av å ikke «passe inn» noe sted.',
          },
          {
            label: 'c',
            task: 'Gi din egen vurdering med begrunnelse.',
            solution: 'En god vurdering veier argumentene mot hverandre og kommer med en begrunnet konklusjon. Et mulig standpunkt: Dobbel tilhørighet er fullt mulig og beriker både individer og samfunn, men det krever et åpent og inkluderende storsamfunn som aksepterer at «norsk» kan se ut på mange måter.',
          },
        ],
        hints: [
          'Bruk gjerne eksempler fra norsk virkelighet.',
          'Husk å vise at du forstår begge perspektivene.',
        ],
        solution: 'Drøftingen bør vise nyansert forståelse av forholdet mellom kulturell tilhørighet og integrering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-9-ex-12',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-12',
        number: '9.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Hva bør det norske samfunnet gjøre for å motvirke rasisme og diskriminering?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv minst tre konkrete tiltak som kan bidra til å redusere rasisme og diskriminering i Norge.',
            solution: 'Mulige tiltak: Anonyme jobbsøknader, antirasistisk undervisning i skolen, strengere håndhevelse av diskrimineringsloven, bevisstgjøring om ubevisste fordommer, mangfoldsarbeid i arbeidslivet, støtte til møteplasser på tvers av bakgrunn, representasjon i media og politikk.',
          },
          {
            label: 'b',
            task: 'Noen mener det er viktigere å bekjempe holdninger, andre mener det er viktigere å endre strukturer. Hva tenker du?',
            solution: 'En god drøfting peker på at begge deler er viktige: Holdningsarbeid gjennom skole, media og dialog endrer hva folk tenker. Strukturelle tiltak som lover, kvotering og anonyme søknader endrer hva folk gjør. De to tilnærmingene supplerer hverandre.',
          },
        ],
        hints: ['Tenk på tiltak som retter seg mot ulike nivåer — individ, institusjon og samfunn.'],
        solution: 'Kampen mot rasisme krever innsats på flere nivåer: holdninger, strukturer og lovverk. Tiltak bør være konkrete, gjennomførbare og basert på kunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'samfunnsfag-10-9-ex-13',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-13',
        number: '9.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektoppgave: Velg en minoritetsgruppe i Norge (f.eks. samer, nasjonale minoriteter som kvener, romani, jøder, eller en innvandrergruppe). Lag en presentasjon der du:',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriver gruppens historie i Norge — når og hvordan kom de hit (eller har de alltid vært her)?',
            solution: 'Svaret bør gi en korrekt historisk oversikt over gruppens tilstedeværelse i Norge.',
          },
          {
            label: 'b',
            task: 'Forklarer hvilke utfordringer gruppen har møtt i Norge, historisk og i dag.',
            solution: 'Svaret bør dekke både historiske utfordringer (f.eks. diskriminering, fornorskning) og nåværende utfordringer (f.eks. fordommer, kulturell bevaring).',
          },
          {
            label: 'c',
            task: 'Vurderer hva Norge har gjort — og bør gjøre — for å sikre gruppens rettigheter og inkludering.',
            solution: 'Svaret bør vise kjennskap til relevante lover, tiltak og politikk, samt gi en egen vurdering av hva som eventuelt mangler.',
          },
        ],
        hints: [
          'Bruk troverdige kilder som store norske leksikon, regjeringen.no, eller forskning.',
          'Husk å skille mellom fakta og egne vurderinger.',
        ],
        solution: 'Oppgaven trener evnen til å undersøke en minoritetsgruppes situasjon i Norge med et kunnskapsbasert og empatisk blikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Eksamensforberedelse
// LK20: Tverrfaglig kompetanse og muntlig eksamen
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_10: TextbookChapter = {
  id: 'samfunnsfag-10-10',
  courseId: 'samfunnsfag-10',
  chapterNumber: '10',
  title: 'Eksamensforberedelse',
  description: 'Forbered deg til muntlig eksamen i samfunnsfag med teknikker for presentasjon, fagsamtale, struktur og tverrfaglig tenkning.',
  estimatedMinutes: 75,
  competenceGoals: [
    'presentere samfunnsfaglege tema og problemstillingar ved å bruke ulike kjelder og vise kjeldemedvit',
    'drøfte og argumentere med utgangspunkt i fagstoff og aktuelle hendingar',
    'vise samanheng mellom ulike tema og kompetansemål i faget',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-10-intro',
      type: 'text',
      content: `## Klar for eksamen — din guide til å lykkes

Muntlig eksamen i samfunnsfag kan virke skummelt. Du skal stå foran sensorer, presentere et tema, og svare på spørsmål du ikke vet på forhånd. Men her er en hemmelighet: Med god forberedelse og riktig strategi kan muntlig eksamen faktisk bli en positiv opplevelse — en sjanse til å vise hva du kan.

Denne eksamensformen tester ikke bare hva du husker, men hvordan du **tenker**. Kan du se sammenhenger? Kan du bruke kunnskap til å drøfte aktuelle problemstillinger? Kan du presentere et tema på en strukturert og engasjerende måte? Kan du svare gjennomtenkt på uventede spørsmål?

Alt dette er ferdigheter du kan øve på — og det er nettopp det dette kapittelet handler om.

**Hvordan fungerer muntlig eksamen i samfunnsfag?**
1. Du trekker et tema 48 timer (to arbeidsdager) før eksamen
2. I forberedelsestiden lager du en presentasjon (vanligvis 10-15 minutter)
3. På eksamensdagen presenterer du temaet for sensor og faglærer
4. Etter presentasjonen er det en **fagsamtale** (ca. 15-20 minutter) der sensor stiller spørsmål

I dette kapittelet skal du lære om:
- Hvordan du forbereder en god presentasjon
- Presentasjonsteknikk som fungerer
- Hva en fagsamtale er og hvordan du mestrer den
- Struktur og drøfting
- Tverrfaglige temaer i LK20
- Konkrete eksamenstips`,
    },

    // ========== DEFINISJON: PRESENTASJON ==========
    {
      id: 'samfunnsfag-10-10-def-1',
      type: 'definition',
      title: 'Presentasjonen — din mulighet til å styre samtalen',
      content: `**Presentasjonen** er den delen av eksamen du har mest kontroll over. Du velger selv hva du vil vektlegge, hvilke eksempler du bruker, og hvordan du strukturerer innholdet. En god presentasjon legger grunnlaget for en god fagsamtale.

**Krav til en god presentasjon i samfunnsfag:**

1. **Klar problemstilling:** Start med et spørsmål eller en påstand som gir presentasjonen retning. Ikke bare «referer» et tema — analyser og drøft.
   - Svak: «Jeg skal snakke om demokrati»
   - Sterk: «Hvordan truer sosiale medier det norske demokratiet — og hva kan vi gjøre med det?»

2. **Tydelig struktur:** Innledning, hoveddel og avslutning. Sensor skal alltid vite hvor du er i presentasjonen.

3. **Fagbegreper:** Bruk relevante fagbegreper og vis at du forstår dem. Definer gjerne begrepene kort slik at sensor ser at du vet hva du snakker om.

4. **Drøfting:** Vis at du kan se en sak fra flere sider. Presenter ulike perspektiver og vurder dem opp mot hverandre.

5. **Aktuelle eksempler:** Knytt teorien til virkelige hendelser og aktuelle saker. Dette viser at du kan anvende kunnskapen din.

6. **Kilder:** Vis kildene du har brukt. Det styrker troverdigheten og viser at du har gjort grundig research.

7. **Egen refleksjon:** Avslutt gjerne med din egen vurdering — men husk at den må være **begrunnet** i argumentene du har presentert.`,
    },

    // ========== TEKST: PRESENTASJONSSTRUKTUR ==========
    {
      id: 'samfunnsfag-10-10-struktur',
      type: 'text',
      content: `## Slik strukturerer du presentasjonen

En god struktur gjør presentasjonen lettere å følge — både for deg og for sensor. Her er en oppskrift som fungerer:

### 1. Innledning (ca. 2 minutter)
- **Fang oppmerksomheten:** Start med et spørsmål, et sitat, en overraskende statistikk, eller en kort historie. Ikke start med «Hei, jeg heter...»
- **Presenter problemstillingen:** Hva er det overordnede spørsmålet du skal besvare?
- **Gi en oversikt:** Fortell kort hva du skal snakke om (disposisjon)

**Eksempel på god åpning:**
«Visste du at nordmenn i gjennomsnitt bruker over fire timer daglig på sosiale medier? Hva gjør det med demokratiet vårt? I denne presentasjonen skal jeg se på hvordan algoritmer og filterbobler påvirker den offentlige debatten, og drøfte om myndighetene bør regulere teknologiselskapene.»

### 2. Hoveddel (ca. 8-10 minutter)
- Del inn i 2-4 **tydelige delemner**
- For hvert delemne: Teori/fagbegreper + eksempler + drøfting
- Bruk **overganger** mellom delene slik at det henger sammen
- Vis at du kan se saken fra **flere perspektiver**

**Tips:** Ikke les opp fra manus. Bruk stikkord og snakk fritt. Det viser at du forstår stoffet.

### 3. Avslutning (ca. 2 minutter)
- **Oppsummer** hovedpoengene kort
- **Svar på problemstillingen** — hva er din konklusjon?
- **Åpne for refleksjon:** Eventuelt si noe om hva som er usikkert, eller hva du gjerne ville utforsket mer
- **Avslutt tydelig:** Ikke la presentasjonen bare renne ut i sanden

### Visuelle hjelpemidler
- PowerPoint/Google Slides er vanlig, men det er et **hjelpemiddel**, ikke manuset ditt
- Bruk lite tekst — nøkkelord, bilder, statistikk
- Sensor vil heller høre deg snakke enn lese fra skjermen
- Kart, diagrammer og bilder kan gjøre presentasjonen mer engasjerende`,
    },

    // ========== OPPGAVE 10.1 ==========
    {
      id: 'samfunnsfag-10-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-1',
        number: '10.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en disposisjon (stikkordmessig plan) for en presentasjon om ETT av følgende temaer. Inkluder problemstilling, innledning, 3 delemner for hoveddelen, og avslutning.',
        subTasks: [
          {
            label: 'a',
            task: 'Tema: «Medienes rolle i det norske demokratiet»',
            solution: 'Eksempel: Problemstilling: Hvordan påvirker mediene demokratiet i Norge? Innledning: Statistikk om mediebruk blant unge. Delemne 1: Medienes fire funksjoner. Delemne 2: Algoritmers påvirkning på informasjonstilfanget. Delemne 3: Presseetikk og ansvar. Avslutning: Oppsummering + er mediene en trussel eller en styrke for demokratiet?',
          },
          {
            label: 'b',
            task: 'Tema: «Identitet og mangfold i Norge»',
            solution: 'Eksempel: Problemstilling: Hva betyr det å være norsk i dag? Innledning: Personlig refleksjon eller aktuell debatt. Delemne 1: Identitet — hva former hvem vi er? Delemne 2: Mangfold i Norge — historikk og nåtid. Delemne 3: Inkludering og utfordringer. Avslutning: Er mangfoldet en styrke eller en utfordring — eller begge deler?',
          },
        ],
        hints: ['Husk at en god problemstilling er et spørsmål du kan drøfte, ikke bare beskrive.'],
        solution: 'En god disposisjon har en klar problemstilling, logisk oppbygging, og balanse mellom teori, eksempler og drøfting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: FAGSAMTALE ==========
    {
      id: 'samfunnsfag-10-10-def-2',
      type: 'definition',
      title: 'Fagsamtalen — vis at du kan tenke',
      content: `**Fagsamtalen** er den delen av eksamen der sensor stiller deg spørsmål. Den varer vanligvis 15-20 minutter og er minst like viktig som presentasjonen.

**Hva sensor ser etter i fagsamtalen:**
- At du **forstår** fagstoffet — ikke bare har memorert det
- At du kan **anvende** kunnskapen på nye problemstillinger
- At du kan **drøfte** — se en sak fra flere sider og veie argumenter
- At du kan **se sammenhenger** mellom ulike temaer i faget
- At du kan **reflektere** kritisk og selvstendig
- At du bruker **fagbegreper** presist og naturlig

**Typiske spørsmål i fagsamtalen:**
- «Kan du utdype det du sa om...?»
- «Hva mener du med...?»
- «Hvordan henger dette sammen med...?»
- «Hva hadde skjedd hvis...?»
- «Hvilke motargumenter finnes?»
- «Kan du gi et eksempel på...?»
- «Hva er forskjellen mellom ... og ...?»
- «Hvordan kan vi knytte dette til [et annet tema i faget]?»

**Tips for å mestre fagsamtalen:**
1. **Lytt nøye** til spørsmålet. Ikke svar på noe du ikke ble spurt om.
2. **Tenk før du svarer.** Det er helt greit å ta noen sekunder til å tenke. Si gjerne «Hmm, la meg tenke litt på det...»
3. **Strukturer svaret.** Begynn med hovedpoenget, forklar, gi et eksempel.
4. **Vær ærlig.** Hvis du ikke vet svaret, si det. Prøv heller å resonnere deg frem: «Jeg er ikke helt sikker, men ut fra det jeg vet om..., tror jeg...»
5. **Vis sammenhenger.** Knytt svarene dine til andre deler av faget.`,
    },

    // ========== OPPGAVE 10.2 ==========
    {
      id: 'samfunnsfag-10-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-2',
        number: '10.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på fagsamtale med en medelev. Den ene er sensor, den andre er elev. Sensoren stiller spørsmål fra listen under, og eleven svarer.',
        subTasks: [
          {
            label: 'a',
            task: 'Spørsmål: «Hva er det viktigste kjennetegnet ved et demokrati, etter din mening? Begrunn svaret.»',
            solution: 'Et godt svar velger ett kjennetegn (f.eks. frie valg, ytringsfrihet, maktfordeling) og begrunner valget med konkrete argumenter. Eleven bør også anerkjenne at andre kjennetegn er viktige.',
          },
          {
            label: 'b',
            task: 'Spørsmål: «Kan du forklare sammenhengen mellom menneskerettigheter og demokrati?»',
            solution: 'Demokrati forutsetter at menneskerettighetene er sikret: ytringsfrihet, pressefrihet, forsamlingsfrihet og rettssikkerhet er nødvendige for at demokratiet skal fungere. Samtidig er demokratiet den beste garantien for menneskerettighetene. De to begrepene er gjensidig avhengige.',
          },
          {
            label: 'c',
            task: 'Spørsmål: «Hvordan henger globalisering og bærekraftig utvikling sammen?»',
            solution: 'Globalisering fører til økt handel, transport og forbruk — som kan skade miljøet. Samtidig gir globalisering muligheter for å samarbeide om klimaløsninger, dele teknologi og koordinere tiltak internasjonalt. Utfordringen er å forme globaliseringen slik at den blir bærekraftig.',
          },
        ],
        hints: ['Husk å bruke fagbegreper, gi eksempler, og vise at du kan se saken fra flere sider.'],
        solution: 'Fagsamtalen handler om å vise at du forstår stoffet, kan anvende det, og kan tenke selvstendig og kritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: DRØFTING ==========
    {
      id: 'samfunnsfag-10-10-drofting',
      type: 'text',
      content: `## Kunsten å drøfte — slik viser du at du tenker

Drøfting er den viktigste ferdigheten i samfunnsfag. Mens du i mange fag kan svare «riktig» eller «galt», handler samfunnsfag ofte om å veie ulike perspektiver mot hverandre og komme frem til en begrunnet vurdering.

### Hva er drøfting?
Å drøfte betyr å belyse en sak fra **flere sider**, veie argumenter **for og mot**, og komme frem til en **begrunnet konklusjon**. Det er ikke det samme som å beskrive eller forklare.

- **Beskrive:** Fortelle hva noe er. «Norge har ytringsfrihet.»
- **Forklare:** Fortelle hvorfor noe er som det er. «Norge har ytringsfrihet fordi det er nedfelt i Grunnloven og er viktig for demokratiet.»
- **Drøfte:** Belyse fra flere sider og vurdere. «Ytringsfrihet er viktig for demokratiet, men bør den ha grenser? På den ene siden... På den andre siden... Min vurdering er at...»

### Oppskrift på drøfting
1. **Presenter saken:** Hva er problemstillingen?
2. **Argument for:** Presenter det første perspektivet med begrunnelse og eksempler
3. **Argument mot:** Presenter det andre perspektivet med begrunnelse og eksempler
4. **Eventuelt flere perspektiver:** Finnes det mellomposisjoner eller andre synsvinkler?
5. **Vurdering:** Hva veier tyngst? Hvorfor? Gi din begrunnede konklusjon

### Nyttige uttrykk for drøfting
- «På den ene siden... på den andre siden...»
- «Et argument for er at... Et motargument er at...»
- «Noen mener at... mens andre hevder at...»
- «Selv om [argument A] har mye for seg, mener jeg at [argument B] veier tyngst fordi...»
- «Det er viktig å nyansere dette: ...»
- «Min vurdering er at... fordi...»

### Vanlige feil i drøfting
- **Bare beskrive:** Å liste opp fakta uten å vurdere dem
- **Bare én side:** Å bare presentere argumenter for én posisjon
- **Ubegrunnet konklusjon:** Å si hva du mener uten å forklare hvorfor
- **Ingen fagbegreper:** Å drøfte uten å bruke relevant fagspråk
- **For svart-hvitt:** Alt er sjelden «helt riktig» eller «helt galt» i samfunnsfag`,
    },

    // ========== OPPGAVE 10.3 ==========
    {
      id: 'samfunnsfag-10-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-3',
        number: '10.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse formuleringene er et eksempel på drøfting?',
        options: [
          {
            id: 'a',
            text: '«Norge er et demokrati med maktfordeling mellom Stortinget, regjeringen og domstolene.»',
            isCorrect: false,
            feedback: 'Dette er en beskrivelse — du forteller hva som er, uten å vurdere eller diskutere.',
          },
          {
            id: 'b',
            text: '«Demokrati er best fordi alle får stemme.»',
            isCorrect: false,
            feedback: 'Dette er en påstand uten drøfting. Du presenterer bare én side og gir ingen begrunnelse.',
          },
          {
            id: 'c',
            text: '«Selv om ytringsfrihet er viktig for demokratiet, kan ubegrensede ytringer skade sårbare grupper. Spørsmålet er om hensynet til den offentlige debatten veier tyngre enn hensynet til beskyttelse mot hatprat.»',
            isCorrect: true,
            feedback: 'Riktig! Her belyses saken fra flere sider, med en spenning mellom to hensyn, noe som er kjernen i drøfting.',
          },
          {
            id: 'd',
            text: '«Maktfordelingsprinsippet ble laget av Montesquieu på 1700-tallet.»',
            isCorrect: false,
            feedback: 'Dette er en ren faktaopplysning — beskrivende, men ingen drøfting.',
          },
        ],
        solution: 'Drøfting innebærer å belyse en sak fra flere sider og veie argumenter mot hverandre. Det handler om å vise at du forstår kompleksiteten i en problemstilling.',
      },
    },

    // ========== OPPGAVE 10.4 ==========
    {
      id: 'samfunnsfag-10-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-4',
        number: '10.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på drøfting: Velg én av påstandene under og skriv en kort drøfting (ca. 150-200 ord). Bruk oppskriften: argument for, argument mot, egen vurdering.',
        subTasks: [
          {
            label: 'a',
            task: '«Stemmerettsalderen bør senkes til 16 år.»',
            solution: 'For: 16-åringer er berørt av politikken, kan øke unges engasjement, betaler skatt, er strafferettslig ansvarlige. Mot: Hjernen er ikke ferdig utviklet, begrenset livserfaring, kan påvirkes av foreldre/lærere, lav valgdeltakelse blant unge. Vurdering: Begge sider har gode poenger, og svaret bør veie hensynene mot hverandre med en begrunnet konklusjon.',
          },
          {
            label: 'b',
            task: '«Norge bør ta imot flere flyktninger enn vi gjør i dag.»',
            solution: 'For: Humanitær plikt, Norge har kapasitet og ressurser, FNs flyktningkonvensjon, solidaritet. Mot: Integreringsutfordringer, kostnader, kapasitet i kommuner, hensyn til eksisterende befolkning. Vurdering: Bør nyanseres og begrunnes. En god drøfting anerkjenner at det finnes legitime hensyn på begge sider.',
          },
        ],
        hints: [
          'Husk å presentere begge sider balansert.',
          'Bruk fagbegreper der det er naturlig.',
          'Avslutt med din egen begrunnede vurdering.',
        ],
        solution: 'En god drøfting presenterer argumenter for og mot på en balansert måte og lander på en begrunnet egen vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: TVERRFAGLIGE TEMAER ==========
    {
      id: 'samfunnsfag-10-10-def-3',
      type: 'definition',
      title: 'Tverrfaglige temaer i LK20',
      content: `Læreplanen LK20 legger vekt på tre **tverrfaglige temaer** som går igjen i alle fag. I samfunnsfag er disse spesielt viktige, og sensor kan stille spørsmål som knytter temaer sammen.

**1. Folkehelse og livsmestring**
Handler om fysisk og psykisk helse, identitetsutvikling, mellommenneskelige relasjoner, mediebruk og forbruk. I samfunnsfag knyttes dette til:
- Identitetsutvikling og sosial tilhørighet
- Nettdebatt, hatprat og psykisk helse
- Mediebruk og kritisk tenkning
- Forbruk og bærekraft i hverdagen

**2. Demokrati og medborgerskap**
Handler om demokratiske verdier, deltakelse, ytringsfrihet og mangfold. I samfunnsfag er dette selve kjernen:
- Demokratiets prinsipper og maktfordeling
- Menneskerettigheter og medborgerskap
- Ytringsfrihet og debattkultur
- Politisk deltakelse og valgordning

**3. Bærekraftig utvikling**
Handler om miljø, klima, sosial rettferdighet og økonomisk bærekraft. I samfunnsfag knyttes dette til:
- FNs bærekraftsmål
- Globalisering og global ulikhet
- Klima og miljøpolitikk
- Forbruk, produksjon og internasjonal handel

**Hvorfor tverrfaglighet er viktig på eksamen:**
Sensor kan spørre deg om å knytte sammen temaer — for eksempel: «Hvordan henger medienes rolle i demokratiet sammen med bærekraftig utvikling?» Når du viser at du kan se sammenhenger på tvers av temaer, viser du høy kompetanse.`,
    },

    // ========== EKSEMPEL: TVERRFAGLIG KOBLING ==========
    {
      id: 'samfunnsfag-10-10-example-1',
      type: 'example',
      title: 'Eksempel: Slik kobler du temaer på tvers',
      problem: 'Sensor spør: «Kan du forklare sammenhengen mellom medier og demokratisk deltakelse?» Hvordan kan du svare på en måte som viser tverrfaglig forståelse?',
      solution: `**Et godt svar kan se slik ut:**

«Mediene og demokratisk deltakelse henger tett sammen. For det første trenger demokratiet informerte borgere, og det er medienes jobb å informere oss om hva som skjer i samfunnet. Uten fri presse kan folk ikke ta informerte valg.

Men i dag ser vi at sosiale medier også utfordrer demokratiet. Algoritmene skaper filterbobler som gjør at folk lever i ulike informasjonsverdener. Forskning viser at dette kan øke polariseringen og gjøre det vanskeligere å ha en felles demokratisk samtale.

Samtidig kan sosiale medier også styrke deltakelsen. Ungdom kan engasjere seg i saker som klima gjennom skolestrejker organisert på Instagram, eller i lokalsamfunnet gjennom Facebook-grupper.

Vi kan også knytte dette til menneskerettighetene — ytringsfrihet og pressefrihet er grunnleggende rettigheter som er forutsetninger for både medier og demokrati.

Min vurdering er at mediene er avgjørende for demokratiet, men at vi må være bevisste på hvordan de digitale mediene endrer spillereglene.»

**Hvorfor er dette et godt svar?**
- Det kobler flere temaer: medier, demokrati, menneskerettigheter, digitalisering
- Det bruker fagbegreper: filterbobler, polarisering, ytringsfrihet
- Det gir konkrete eksempler
- Det drøfter — ser både muligheter og utfordringer
- Det avslutter med en egen vurdering`,
    },

    // ========== OPPGAVE 10.5 ==========
    {
      id: 'samfunnsfag-10-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-5',
        number: '10.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på tverrfaglige koblinger. For hvert spørsmål, skriv et kort svar (3-5 setninger) som viser sammenhengen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan henger identitet og demokratisk deltakelse sammen?',
            solution: 'Identitet og tilhørighet påvirker hvem du føler deg som medborger. Hvis du opplever deg inkludert i samfunnet, er det mer sannsynlig at du deltar demokratisk. Ekskludering og diskriminering kan føre til at grupper mister tillit til demokratiske prosesser og lar være å stemme. Inkludering og anerkjennelse av mangfold er derfor viktig for et levende demokrati.',
          },
          {
            label: 'b',
            task: 'Hvordan henger globalisering og identitet sammen?',
            solution: 'Globaliseringen gjør at vi eksponeres for mange ulike kulturer gjennom medier, reiser og innvandring. Dette kan berike identiteten vår, men kan også skape usikkerhet — spesielt hvis folk føler at deres egen kultur trues. Noen utvikler en «global identitet», mens andre reagerer med sterkere nasjonal eller lokal tilhørighet.',
          },
          {
            label: 'c',
            task: 'Hvordan henger bærekraftig utvikling og menneskerettigheter sammen?',
            solution: 'Klimaendringer rammer de fattigste hardest — de som har bidratt minst til problemet. Dette reiser spørsmål om rettferdighet og menneskerettigheter. Retten til rent vann, mat og et levelig miljø kan ses som grunnleggende menneskerettigheter. Bærekraftig utvikling handler derfor også om global rettferdighet.',
          },
        ],
        hints: ['Bruk gjerne formuleringen: «[Tema A] henger sammen med [tema B] fordi...»'],
        solution: 'Tverrfaglige koblinger viser at du forstår at samfunnsfaglige temaer ikke eksisterer i isolasjon, men henger sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: EKSAMENSTIPS ==========
    {
      id: 'samfunnsfag-10-10-eksamenstips',
      type: 'text',
      content: `## Konkrete eksamenstips

### Forberedelsestiden (48 timer)
1. **Les oppgaven nøye** — hva blir du bedt om å gjøre? Merk nøkkelordene: drøft, forklar, beskriv, vurder.
2. **Lag en problemstilling** som gir presentasjonen retning
3. **Samle stoff** fra læreboka, notater, nettkilder. Bruk minst 3-4 ulike kilder
4. **Velg 2-3 gode eksempler** som belyser temaet
5. **Lag disposisjon** med stikkord — IKKE et ferdig manus du leser opp
6. **Lag enkle slides** med nøkkelord, bilder og statistikk (ikke mye tekst)
7. **Øv presentasjonen** minst 2-3 ganger — ta tid! Juster lengden
8. **Forbered deg på mulige spørsmål** — hva kan sensor spørre om?
9. **Sov godt** natten før. En uthvilt hjerne tenker bedre enn en som har pugget hele natten

### På eksamensdagen
1. **Pust rolig** før du begynner. Nervøsitet er normalt — det skjerper deg
2. **Snakk til sensor som en interessert voksen**, ikke som en eksamenssensor
3. **Hold øyekontakt** og snakk tydelig. Ikke les opp fra manus eller slides
4. **Vis engasjement** — det smitter over på sensor
5. **Bruk fagbegreper** naturlig, ikke tvungent
6. **Hvis du mister tråden:** Ta en pause, se på stikkordene dine, og fortsett
7. **I fagsamtalen:** Lytt, tenk, svar. Det er lov å tenke litt før du svarer
8. **Vet du ikke svaret?** Si det ærlig og prøv å resonnere deg frem

### Vanlige fallgruver
- **Lese opp** fra manus i stedet for å snakke fritt
- **For mye beskrivelse**, for lite drøfting
- **Glemme fagbegreper** — bruk dem!
- **Bare presentere én side** av en sak
- **For lange svar** i fagsamtalen — vær konsis og presis
- **Panikk** når du ikke vet svaret — prøv heller å tenke høyt`,
    },

    // ========== OPPGAVE 10.6 ==========
    {
      id: 'samfunnsfag-10-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-6',
        number: '10.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom å beskrive og å drøfte?',
        options: [
          {
            id: 'a',
            text: 'Å beskrive er å fortelle hva noe er, mens å drøfte er å belyse fra flere sider og komme med en begrunnet vurdering',
            isCorrect: true,
            feedback: 'Riktig! Drøfting krever at du ser en sak fra flere perspektiver og veier argumenter mot hverandre — dette er det sensor ser etter.',
          },
          {
            id: 'b',
            text: 'Det er ingen forskjell — begge betyr å forklare noe',
            isCorrect: false,
            feedback: 'Feil. Det er en viktig forskjell: beskrivelse forteller hva noe er, mens drøfting analyserer og vurderer fra flere sider.',
          },
          {
            id: 'c',
            text: 'Å drøfte er å gi sin personlige mening uten begrunnelse',
            isCorrect: false,
            feedback: 'Feil. Drøfting krever begrunnelse — du må forklare HVORFOR du mener det du mener, basert på argumenter og fagkunnskap.',
          },
          {
            id: 'd',
            text: 'Å beskrive er muntlig, å drøfte er skriftlig',
            isCorrect: false,
            feedback: 'Feil. Begge kan være både muntlige og skriftlige. Forskjellen handler om dybden i analysen.',
          },
        ],
        solution: 'Å beskrive er å fortelle hva noe er. Å drøfte er å belyse en sak fra flere sider, veie argumenter, og gi en begrunnet vurdering. Drøfting viser høyere kompetanse enn beskrivelse.',
      },
    },

    // ========== DEFINISJON: KARAKTERNIVÅER ==========
    {
      id: 'samfunnsfag-10-10-def-4',
      type: 'definition',
      title: 'Hva kjennetegner ulike karakternivåer på muntlig eksamen',
      content: `For å forstå hva som kreves, kan det hjelpe å vite hva sensor vurderer på de ulike karakternivåene:

**Karakter 2 — lav kompetanse:**
- Eleven gjentar noe fagstoff, men viser begrenset forståelse
- Lite bruk av fagbegreper
- Svarer kort og upresist på spørsmål
- Kan ikke se sammenhenger eller drøfte

**Karakter 3-4 — middels kompetanse:**
- Eleven viser grei kunnskap om temaet
- Bruker noen fagbegreper riktig
- Kan forklare og gi eksempler
- Begrenset evne til drøfting — ser hovedsakelig én side av saken
- Trenger ofte hjelp til å se sammenhenger

**Karakter 5-6 — høy kompetanse:**
- Eleven viser grundig kunnskap og god forståelse
- Bruker fagbegreper presist og naturlig
- Drøfter selvstendig — ser flere sider av en sak og veier argumenter
- Gir aktuelle, relevante eksempler
- Ser sammenhenger mellom ulike temaer i faget
- Viser kritisk tenkning og selvstendige refleksjoner
- Kommuniserer klart og engasjerende

**Det viktige poenget:** Forskjellen mellom en middels og en sterk besvarelse handler oftest ikke om hvor mye du husker, men om **hvordan du bruker kunnskapen**. Drøfting, sammenhenger og selvstendig tenkning er nøkkelen til toppkarakterer.`,
    },

    // ========== EKSEMPEL: ØVINGSEKSAMEN ==========
    {
      id: 'samfunnsfag-10-10-example-2',
      type: 'example',
      title: 'Eksempel: Slik kan et eksamenstema se ut',
      problem: 'Du trekker følgende tema: «Demokrati under press — trusler mot demokratiet i det 21. århundre.» Hvordan ville du bygget opp en presentasjon og forberedt deg til fagsamtalen?',
      solution: `**Forslag til oppbygging:**

**Problemstilling:** «Er demokratiet i verden i tilbakegang, og hva er de største truslene?»

**Innledning:**
Start med statistikk: Ifølge Freedom House har antall land som regnes som «frie» gått ned hvert år siden 2006. Si at du skal se på tre hovedtrusler mot demokratiet.

**Hoveddel:**
*Delemne 1: Desinformasjon og mediemanipulering*
- Algoritmene og filterboblene
- Falske nyheter og utenlandsk valgpåvirkning
- Eksempler: Brexit-kampanjen, amerikanske valg
- Fagbegreper: filterbobler, ekkokammer, desinformasjon

*Delemne 2: Autoritære ledere og demokratisk tilbakegang*
- Ledere som blir valgt demokratisk, men gradvis svekker demokratiske institusjoner
- Eksempler: Angrep på uavhengige medier, domstoler og opposisjon
- Fagbegreper: maktfordeling, pressefrihet, rettssikkerhet

*Delemne 3: Ulikhet og mistillit*
- Økende ulikhet svekker tilliten til demokratiet
- Folk som føler seg «glemt» av det politiske systemet
- Lav valgdeltakelse som tegn på svekket demokrati
- Fagbegreper: legitimitet, medborgerskap, politisk deltakelse

**Avslutning:**
Oppsummer truslene. Drøft: Er truslene så alvorlige at demokratiet er i fare? Eller har demokratiet vist seg motstandsdyktig? Avslutt med egen vurdering og refleksjon om hva som kan gjøres.

**Forberedelse til fagsamtalen:**
- Les opp på menneskerettigheter — sensor kan spørre om sammenhengen
- Tenk gjennom hva Norge gjør for å beskytte demokratiet
- Ha eksempler klare fra norsk kontekst (ikke bare internasjonale)
- Vær forberedt på «hva mener du selv?»-spørsmål`,
    },

    // ========== OPPGAVE 10.7 ==========
    {
      id: 'samfunnsfag-10-10-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-7',
        number: '10.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prøveeksamen: Velg ETT av temaene under. Lag en fullstendig disposisjon for en 10-minutters presentasjon, inkludert problemstilling, 3 delemner med stikkord, og forberedte svar på 3 mulige spørsmål fra sensor.',
        subTasks: [
          {
            label: 'a',
            task: 'Tema: «Menneskerettigheter — universelle rettigheter eller vestlig påfunn?»',
            solution: 'Problemstilling: Er menneskerettighetene virkelig universelle? Delemner: 1) Hva menneskerettighetene er og hvordan de ble til, 2) Kritikk: kulturrelativisme og vestlig dominans, 3) Forsvar: menneskeverdet som universelt. Mulige sensorspørsmål: Hvorfor ble FNs menneskerettighetserklæring til? Hvordan brytes menneskerettighetene i dag? Er det noen rettigheter som er viktigere enn andre?',
          },
          {
            label: 'b',
            task: 'Tema: «Norge og verden — globalisering, utfordringer og muligheter»',
            solution: 'Problemstilling: Tjener Norge på globaliseringen, eller er vi avhengig av den? Delemner: 1) Hva globalisering er og hvordan den påvirker Norge, 2) Fordeler for Norge (handel, teknologi, kulturutveksling), 3) Utfordringer (klimaavtrykk, ulikhet, sårbarhet). Mulige sensorspørsmål: Hvordan henger olje/gass-eksport sammen med klimaansvar? Er globalisering bra eller dårlig for utviklingsland? Hva er FNs bærekraftsmål?',
          },
        ],
        hints: [
          'Lag disposisjonen som stikkord — ikke fullstendige setninger.',
          'Tenk på hvilke fagbegreper du skal bruke.',
          'Forbered deg på at sensor kan spørre om ting du ikke har dekket i presentasjonen.',
        ],
        solution: 'En god eksamensforberedelse inkluderer en klar problemstilling, strukturert disposisjon, relevante fagbegreper, eksempler, og forberedelse til uventede spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 10.8 ==========
    {
      id: 'samfunnsfag-10-10-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-8',
        number: '10.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fagbegrepsøvelse: Forklar hvert av begrepene under med én tydelig setning. Gi et kort eksempel for hvert begrep.',
        subTasks: [
          {
            label: 'a',
            task: 'Demokrati, maktfordeling, ytringsfrihet',
            solution: 'Demokrati: Styreform der folket har den øverste makten. Eksempel: Stortingsvalg hvert fjerde år. Maktfordeling: At makten deles mellom uavhengige organer. Eksempel: Stortinget vedtar lover, regjeringen gjennomfører dem, domstolene kontrollerer. Ytringsfrihet: Retten til å si sin mening uten straff. Eksempel: Du kan kritisere regjeringen offentlig.',
          },
          {
            label: 'b',
            task: 'Menneskerettigheter, globalisering, bærekraftig utvikling',
            solution: 'Menneskerettigheter: Rettigheter alle mennesker har uansett hvem de er. Eksempel: Retten til utdanning. Globalisering: At verden blir tettere sammenvevd gjennom handel, teknologi og kommunikasjon. Eksempel: En t-skjorte laget i Bangladesh, solgt i Norge. Bærekraftig utvikling: Utvikling som dekker dagens behov uten å ødelegge for fremtidige generasjoner. Eksempel: Bruke fornybar energi i stedet for fossil.',
          },
          {
            label: 'c',
            task: 'Filterboble, ekkokammer, desinformasjon',
            solution: 'Filterboble: Når algoritmer bare viser deg innhold som bekrefter det du allerede tror. Eksempel: TikTok-feeden din viser bare innhold som ligner det du har sett før. Ekkokammer: Når du bare omgir deg med folk som mener det samme som deg. Eksempel: En Facebook-gruppe der alle er enige. Desinformasjon: Falsk informasjon spredd med vilje for å villede. Eksempel: Fabrikkerte nyhetsartikler om vaksiner.',
          },
        ],
        hints: ['Hold forklaringene korte og presise. Bruk eksempler fra norsk virkelighet der det passer.'],
        solution: 'Å kunne forklare fagbegreper kort og presist med eksempler er en nøkkelferdighet på muntlig eksamen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: TYPISKE FEIL ==========
    {
      id: 'samfunnsfag-10-10-example-3',
      type: 'example',
      title: 'Eksempel: Typiske feil — og hvordan unngå dem',
      problem: 'Hva er de vanligste feilene elever gjør på muntlig eksamen i samfunnsfag?',
      solution: `**Feil 1: Lese opp fra manus**
*Problem:* Eleven står med et fullt manus og leser høyt. Sensor ser at eleven ikke forstår stoffet, bare gjentar det.
*Løsning:* Bruk STIKKORD, ikke fullstendige setninger. Øv på å snakke fritt ut fra stikkordene.

**Feil 2: Bare beskrive, aldri drøfte**
*Problem:* «Norge har ytringsfrihet. Grunnlovens § 100 sier...» Eleven ramser opp fakta uten å vurdere.
*Løsning:* Still deg selv spørsmålet «men hva betyr dette?» og «hva er argumentene for og mot?»

**Feil 3: Glemme fagbegreper**
*Problem:* Eleven snakker i hverdagsspråk: «Det er litt urettferdig for de som har kommet til Norge.»
*Løsning:* Bruk fagspråk: «Strukturell diskriminering i arbeidsmarkedet rammer innvandrere, som vist i forskning om...»

**Feil 4: Ingen eksempler**
*Problem:* Alt blir abstrakt og teoretisk. Sensor lurer på om eleven kan koble teori til virkelighet.
*Løsning:* Ha 2-3 gode, aktuelle eksempler klare for hvert delemne.

**Feil 5: Panikk i fagsamtalen**
*Problem:* Sensor stiller et spørsmål eleven ikke har forberedt, og eleven fryser.
*Løsning:* Det er lov å tenke. Si: «Det har jeg ikke tenkt så mye over, men...» og prøv å resonnere deg frem ved å knytte spørsmålet til noe du kan.`,
    },

    // ========== OPPGAVE 10.9 ==========
    {
      id: 'samfunnsfag-10-10-ex-9',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-9',
        number: '10.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Selvevaluering: Vurder dine egne styrker og svakheter med tanke på muntlig eksamen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er du god på? (F.eks. muntlig presentasjon, fagkunnskap, drøfting, eksempler, ro under press...)',
            solution: 'Svaret er individuelt. Eleven bør identifisere konkrete styrker og knytte dem til eksamensferdigheter.',
          },
          {
            label: 'b',
            task: 'Hva trenger du å øve mer på? Lag en konkret plan med tre tiltak for de neste ukene.',
            solution: 'Svaret er individuelt. Gode tiltak kan være: øve presentasjon for venner/familie, lage oversikt over fagbegreper, øve på drøfting gjennom skriving, lese nyheter daglig for aktuelle eksempler, øve på å snakke fritt fra stikkord.',
          },
        ],
        hints: ['Vær ærlig med deg selv — det er slik du kan forbedre deg mest effektivt.'],
        solution: 'Selvevaluering er et viktig verktøy for målrettet forberedelse. Bruk styrkene dine aktivt og jobb målrettet med forbedringspunktene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 10.10 ==========
    {
      id: 'samfunnsfag-10-10-ex-10',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-10',
        number: '10.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Minieksamen: Gjennomfør en øvelseseksamen med en medelev. Den ene presenterer i 10 minutter, deretter 10 minutter fagsamtale. Bytt roller etterpå.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema fra pensum og forbered en 10-minutters presentasjon med disposisjon og slides.',
            solution: 'Eleven velger et relevant tema, lager en klar problemstilling, strukturerer presentasjonen med innledning, hoveddel og avslutning, og bruker fagbegreper og eksempler.',
          },
          {
            label: 'b',
            task: 'Etter at du har sett medelevens presentasjon: Gi tilbakemelding på minst to styrker og to forbedringspunkter.',
            solution: 'Tilbakemeldingen bør være konstruktiv og konkret — f.eks. «Du brukte fagbegreper godt, men kunne drøftet mer i stedet for å beskrive» eller «God struktur, men les mindre fra manus».',
          },
        ],
        hints: [
          'Bruk karakterkjennetegnene (karakter 2-6) som veiledning for tilbakemelding.',
          'Vær ærlig, men konstruktiv — målet er at begge skal bli bedre.',
        ],
        solution: 'Å øve med en medelev er den mest effektive måten å forberede seg til muntlig eksamen på. Du lærer både av å presentere og av å gi tilbakemelding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-10-oppsummering',
      type: 'text',
      content: `## Oppsummering: Eksamensforberedelse

Muntlig eksamen i samfunnsfag handler om å vise at du kan bruke kunnskapen din — ikke bare gjengi den.

**Nøkkelbegreper:**
- **Problemstilling:** Et spørsmål som gir presentasjonen retning og inviterer til drøfting
- **Disposisjon:** En stikkordmessig plan for presentasjonen
- **Drøfting:** Å belyse en sak fra flere sider, veie argumenter og gi en begrunnet vurdering
- **Fagsamtale:** Den delen av eksamen der sensor stiller spørsmål for å teste forståelse
- **Fagbegreper:** Presise ord fra faget som viser at du behersker fagspråket
- **Tverrfaglige temaer:** Folkehelse og livsmestring, demokrati og medborgerskap, bærekraftig utvikling
- **Kildekritikk:** Evnen til å vurdere informasjon kritisk — viktig både i faget og på eksamen

**Huskeliste for eksamen:**
1. Lag en klar problemstilling
2. Strukturer presentasjonen: innledning, hoveddel, avslutning
3. Bruk fagbegreper presist og naturlig
4. Drøft — se saker fra flere sider
5. Gi aktuelle, konkrete eksempler
6. Vis sammenhenger mellom temaer
7. Snakk fritt fra stikkord — ikke les opp
8. Lytt nøye på spørsmål i fagsamtalen
9. Det er lov å tenke før du svarer
10. Vis engasjement — det smitter!

**Lykke til!** Husk at eksamen er en mulighet til å vise hva du kan — og med god forberedelse har du alle forutsetninger for å gjøre det bra.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-10-ex-11',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-11',
        number: '10.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tverrfaglig drøftingsoppgave: «I et demokrati har alle rett til å si sin mening. Men har alle plikt til å lytte?» Drøft denne påstanden ved å trekke inn kunnskap fra minst tre av temaene du har lært om i samfunnsfag (f.eks. demokrati, menneskerettigheter, medier, identitet, mangfold).',
        hints: [
          'Vis at du kan koble kunnskap fra ulike deler av faget.',
          'Bruk fagbegreper fra de temaene du trekker inn.',
          'Avslutt med en tydelig egen vurdering.',
        ],
        solution: 'En sterk drøfting kobler ytringsfrihet (demokrati), retten til respektfull behandling (menneskerettigheter), debattkultur og ekkokammer (medier), og anerkjennelse av mangfold (identitet og mangfold) i en sammenhengende argumentasjon. Konklusjonen bør reflektere over at lytting er en forutsetning for reell demokratisk samtale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-10-ex-12',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-12',
        number: '10.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Helhetsoppgave: Velg en aktuell nyhetssak og analyser den ved å bruke kunnskap fra flere temaer i samfunnsfag.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort hva saken handler om.',
            solution: 'Eleven velger en aktuell sak og beskriver den kort og presist.',
          },
          {
            label: 'b',
            task: 'Analyser saken ved å knytte den til minst tre ulike temaer fra samfunnsfag (f.eks. demokrati, menneskerettigheter, globalisering, medier, identitet, bærekraft).',
            solution: 'Eleven viser at de kan se saken i lys av ulike faglige perspektiver og bruke relevante fagbegreper fra de valgte temaene.',
          },
          {
            label: 'c',
            task: 'Drøft: Hva er de viktigste spørsmålene denne saken reiser? Presenter ulike perspektiver og gi din egen vurdering.',
            solution: 'Drøftingen viser evne til kritisk tenkning, nyansering og begrunnet stillingtaken. Eleven bruker fagbegreper og kobler teori til aktuell virkelighet.',
          },
        ],
        hints: [
          'Velg en sak du kjenner godt og bryr deg om.',
          'Vis bredde ved å trekke inn flere temaer.',
          'Bruk fagbegreper fra hvert tema du trekker inn.',
        ],
        solution: 'Denne oppgaven er den ultimate øvelsen for muntlig eksamen: den krever faktakunnskap, tverrfaglig tenkning, drøfting og selvstendige vurderinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 3
// ============================================================================

export const SAMFUNNSFAG_10_DEL3_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_10_8,
  CHAPTER_SAMFUNNSFAG_10_9,
  CHAPTER_SAMFUNNSFAG_10_10,
];
