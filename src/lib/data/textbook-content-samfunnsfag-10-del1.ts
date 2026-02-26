/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - Del 1 (Kapittel 1-4)
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 * Grundig og dyptgående innhold for avsluttende år.
 *
 * Kapittel 1: Demokrati og medborgerskap
 * Kapittel 2: Menneskerettigheter
 * Kapittel 3: Bærekraftig utvikling
 * Kapittel 4: Globalisering
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Demokrati og medborgerskap
// LK20: Reflektere over hva det innebærer å være medborger, og ulike former
//        for demokratisk deltakelse
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_1: TextbookChapter = {
  id: 'samfunnsfag-10-1',
  courseId: 'samfunnsfag-10',
  chapterNumber: '1',
  title: 'Demokrati og medborgerskap',
  description: 'Lær om demokratiets grunnprinsipper, maktfordeling i Norge, og hvordan du kan delta aktivt i demokratiet.',
  estimatedMinutes: 90,
  competenceGoals: [
    'reflektere over hva det innebærer å være medborger, og ulike former for demokratisk deltakelse',
    'utforske og beskrive korleis ulike politiske system er organiserte',
    'drøfte korleis makt og maktmisbruk kjem til uttrykk i ulike samanhengar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-1-intro',
      type: 'text',
      content: `## Hva betyr det at Norge er et demokrati?

Tenk deg at du våkner en morgen og oppdager at alle beslutninger i Norge nå tas av én enkelt person. Ingen valg, ingen debatt, ingen mulighet til å si hva du mener. Hvordan ville det føles?

De fleste av oss tar demokratiet for gitt. Vi lever i et samfunn der vi kan si hva vi mener, der vi kan kritisere politikere uten å bli straffet, og der vi selv er med på å bestemme hvem som skal styre landet. Men demokrati er ikke noe som bare «er der» — det er et system som mennesker har kjempet for gjennom hundrevis av år, og som fortsatt må forsvares og vedlikeholdes.

Ordet **demokrati** kommer fra gresk: *demos* (folk) og *kratos* (styre). Demokrati betyr altså **folkestyre** — at det er folket som har makten i samfunnet. Men hva betyr det i praksis? Hvordan fungerer det norske demokratiet, og hvilken rolle har du som medborger?

I dette kapittelet skal du lære om:
- Hva som kjennetegner et demokrati
- Hvordan makten er fordelt i Norge
- Forskjellen på direkte og representativt demokrati
- Hvordan du kan delta i demokratiet — også før du får stemmerett
- Hva som truer demokratiet i dag`,
    },

    // ========== DEFINISJON: DEMOKRATI ==========
    {
      id: 'samfunnsfag-10-1-def-1',
      type: 'definition',
      title: 'Demokrati',
      content: `**Demokrati** er en styreform der folket har den øverste makten i samfunnet. I et demokrati bestemmer innbyggerne — enten direkte eller gjennom valgte representanter — hvordan landet skal styres.

Et fungerende demokrati bygger på flere grunnleggende prinsipper:

- **Frie og rettferdige valg:** Innbyggerne kan velge sine ledere i regelmessige valg, uten tvang eller juks.
- **Ytringsfrihet:** Alle har rett til å si sin mening, også om de er uenige med myndighetene.
- **Pressefrihet:** Mediene kan rapportere fritt og fungere som en «vaktbikkje» overfor makthaverne.
- **Rettssikkerhet:** Lovene gjelder likt for alle, og alle har rett til en rettferdig rettssak.
- **Mindretallsvern:** Flertallet bestemmer, men mindretallet har rettigheter som ikke kan stemmes bort.
- **Maktfordeling:** Makten er fordelt mellom ulike organer slik at ingen får for mye makt alene.

Demokrati er ikke bare et politisk system — det er også en **kultur** og en **holdning**. Det innebærer at vi respekterer andres meninger, selv når vi er sterkt uenige.`,
    },

    // ========== TEKST: DIREKTE VS REPRESENTATIVT ==========
    {
      id: 'samfunnsfag-10-1-direkte-repr',
      type: 'text',
      content: `## Direkte og representativt demokrati

Det finnes to hovedformer for demokrati:

### Direkte demokrati
I et direkte demokrati stemmer folket selv over alle viktige saker. Den antikke greske bystaten Athen praktiserte dette for over 2400 år siden — frie menn (ikke kvinner eller slaver) møttes på torget og stemte over lovforslag.

I dag er **Sveits** det landet som bruker direkte demokrati mest. Sveitserne stemmer i folkeavstemninger flere ganger i året om alt fra innvandringspolitikk til kutrengsel.

**Fordeler med direkte demokrati:**
- Folket får direkte innflytelse på alle beslutninger
- Øker folks engasjement og kunnskap
- Gir stor legitimitet til vedtakene

**Ulemper med direkte demokrati:**
- Tidkrevende — mange saker er tekniske og kompliserte
- Risiko for at folk stemmer etter følelser i stedet for fakta
- Kan gå utover mindretallet hvis flertallet alltid «vinner»

### Representativt demokrati
I et representativt demokrati velger folket representanter som tar beslutninger på deres vegne. Norge er et representativt demokrati — vi velger 169 stortingsrepresentanter hvert fjerde år.

**Fordeler med representativt demokrati:**
- Representantene kan spesialisere seg og sette seg inn i kompliserte saker
- Mer effektivt i store samfunn
- Representantene har tid til å veie ulike hensyn

**Ulemper med representativt demokrati:**
- Større avstand mellom folk og politikere
- Risiko for at representantene ikke lytter til velgerne
- Folk kan føle seg maktesløse mellom valgene

Norge bruker **folkeavstemninger** i noen tilfeller, som i 1972 og 1994 da folket stemte om EU-medlemskap. Men resultatet av folkeavstemninger i Norge er kun rådgivende — det er Stortinget som tar den endelige avgjørelsen.`,
    },

    // ========== OPPGAVE 1: FLERVALG ==========
    {
      id: 'samfunnsfag-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-1',
        number: '1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom direkte og representativt demokrati?',
        options: [
          {
            id: 'a',
            text: 'I et direkte demokrati stemmer folket selv over sakene, mens i et representativt demokrati velger folket noen som stemmer for dem',
            isCorrect: true,
            feedback: 'Riktig! I et direkte demokrati stemmer innbyggerne direkte, mens i et representativt demokrati velger de representanter.',
          },
          {
            id: 'b',
            text: 'I et direkte demokrati er det bare de rike som stemmer, mens i et representativt har alle stemmerett',
            isCorrect: false,
            feedback: 'Feil. Begge formene for demokrati kan gi stemmerett til alle voksne innbyggere.',
          },
          {
            id: 'c',
            text: 'Direkte demokrati finnes bare i Sveits, mens representativt demokrati finnes overalt',
            isCorrect: false,
            feedback: 'Feil. Sveits er det mest kjente eksempelet, men direkte demokrati brukes i mange land gjennom folkeavstemninger.',
          },
          {
            id: 'd',
            text: 'Det er ingen forskjell — begge fungerer helt likt',
            isCorrect: false,
            feedback: 'Feil. Det er en grunnleggende forskjell i hvordan beslutninger tas.',
          },
        ],
        solution: 'I et direkte demokrati stemmer folket direkte over saker, mens i et representativt demokrati velger folket representanter som tar beslutninger på deres vegne.',
      },
    },

    // ========== OPPGAVE 2: DRØFTING ==========
    {
      id: 'samfunnsfag-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-2',
        number: '1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'I 1994 stemte det norske folk nei til EU-medlemskap i en folkeavstemning. Likevel var resultatet bare rådgivende — Stortinget kunne i teorien ha valgt å gå inn i EU likevel.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor tror du folkeavstemninger i Norge bare er rådgivende?',
            solution: 'Fordi Grunnloven sier at det er Stortinget som har den lovgivende makten. Å la folkeavstemninger være bindende ville overføre makt fra Stortinget til folket direkte, noe som ville endre maktfordelingen i det norske systemet.',
          },
          {
            label: 'b',
            task: 'Hva tror du hadde skjedd dersom Stortinget hadde gått imot folkets nei i 1994?',
            solution: 'Det ville trolig skapt en alvorlig tillitskrise mellom folket og politikerne. Mange ville følt at demokratiet ble overkjørt, og det kunne ført til politisk uro, protestaksjoner og stort velgertap for partiene som gikk imot.',
          },
        ],
        hints: ['Tenk på forholdet mellom folkets vilje og det representative demokratiet.'],
        solution: 'Folkeavstemninger i Norge er rådgivende fordi det er Stortinget som har den lovgivende makten i henhold til Grunnloven. Selv om resultatet ikke er juridisk bindende, ville det vært politisk svært vanskelig å gå imot et klart folkeavstemningsresultat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: MAKTFORDELINGSPRINSIPPET ==========
    {
      id: 'samfunnsfag-10-1-def-2',
      type: 'definition',
      title: 'Maktfordelingsprinsippet',
      content: `**Maktfordelingsprinsippet** ble formulert av den franske filosofen **Montesquieu** på 1700-tallet. Ideen er enkel, men kraftfull: Makten i et samfunn skal deles mellom flere uavhengige organer, slik at ingen får for mye makt.

I Norge er statsmakten delt i tre:

**1. Stortinget — den lovgivende makt**
- Vedtar lover
- Bevilger penger (statsbudsjettet)
- Kontrollerer regjeringen
- 169 representanter valgt av folket hvert 4. år

**2. Regjeringen — den utøvende makt**
- Setter lovene ut i livet
- Styrer forvaltningen (departementer, direktorater)
- Foreslår lover og statsbudsjett
- Ledes av statsministeren

**3. Domstolene — den dømmende makt**
- Avgjør rettstvister
- Kan prøve om lover er i strid med Grunnloven
- Uavhengige av politisk press
- Høyesterett er den øverste domstolen

I tillegg snakker vi ofte om en **fjerde statsmakt**: **mediene**. Pressen fungerer som en vaktbikkje som overvåker de tre andre statsmaktene og informerer befolkningen.

Maktfordelingsprinsippet handler om **kontroll og balanse** (*checks and balances*). Ingen av de tre statsmaktene kan handle helt fritt — de holder hverandre i sjakk.`,
    },

    // ========== TEKST: MAKTFORDELING I PRAKSIS ==========
    {
      id: 'samfunnsfag-10-1-maktfordeling-praksis',
      type: 'text',
      content: `## Maktfordeling i praksis

Hvordan fungerer maktfordelingen i hverdagen? Her er noen eksempler:

### Stortinget kontrollerer regjeringen
Stortinget kan stille spørsmål til statsråder (ministrene), kreve forklaringer, og i ytterste konsekvens fremme **mistillitsforslag** mot regjeringen. Hvis flertallet i Stortinget ikke har tillit til regjeringen, må den gå av.

### Domstolene kontrollerer lovene
Hvis noen mener at en lov bryter med Grunnloven eller menneskerettighetene, kan saken bringes til domstolene. Domstolene kan da sette loven til side. Dette kalles **prøvingsrett**.

### Regjeringen foreslår — Stortinget bestemmer
Regjeringen kan foreslå nye lover, men det er Stortinget som vedtar dem. Stortinget kan også endre forslagene. Ingen lover blir gyldige uten Stortingets godkjenning.

### Et historisk eksempel
Under den såkalte **Kings Bay-saken** i 1963 ble regjeringen til Einar Gerhardsen felt av et mistillitsforslag i Stortinget, etter en gruveulykke på Svalbard. Dette viste at selv en populær statsminister kan bli holdt ansvarlig av folkets representanter.

Maktfordelingen er ikke bare noe som står i lærebøker — den er et levende system som beskytter deg og meg mot maktmisbruk hver eneste dag.`,
    },

    // ========== EKSEMPEL: MAKTFORDELING ==========
    {
      id: 'samfunnsfag-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Hvordan maktfordelingen beskytter deg',
      problem: `Tenk deg at regjeringen ønsker å innføre en lov som forbyr all kritikk av regjeringen på sosiale medier. Hvordan ville maktfordelingsprinsippet hindre dette?`,
      solution: `**Slik ville de tre statsmaktene reagert:**

**1. Stortinget (lovgivende makt):**
Regjeringen kan foreslå loven, men den må vedtas av Stortinget. Stortingsrepresentantene ville sannsynligvis avvise forslaget fordi det bryter med ytringsfriheten i Grunnloven, og fordi velgerne ville reagert sterkt.

**2. Domstolene (dømmende makt):**
Selv om loven mot alle odds ble vedtatt av Stortinget, kunne domstolene sette den til side. Grunnlovens § 100 beskytter ytringsfriheten, og loven ville bli funnet grunnlovsstridig.

**3. Mediene (fjerde statsmakt):**
Pressen ville umiddelbart rapportert om forslaget og skapt sterk offentlig debatt. Politisk press fra velgerne ville gjort det nesten umulig å gjennomføre.

**Konklusjon:**
Maktfordelingen fungerer som et sikkerhetsnett med flere lag. Selv om én instans svikter, finnes det andre som kan stoppe maktmisbruk. Dette er grunnen til at maktfordelingsprinsippet er så viktig for demokratiet.`,
    },

    // ========== OPPGAVE 3: MAKTFORDELING ==========
    {
      id: 'samfunnsfag-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-3',
        number: '1.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av de tre statsmaktene vedtar lover i Norge?',
        options: [
          {
            id: 'a',
            text: 'Regjeringen',
            isCorrect: false,
            feedback: 'Feil. Regjeringen er den utøvende makt — den setter lovene ut i livet og foreslår nye lover, men vedtar dem ikke.',
          },
          {
            id: 'b',
            text: 'Stortinget',
            isCorrect: true,
            feedback: 'Riktig! Stortinget er den lovgivende makt og er det eneste organet som kan vedta lover i Norge.',
          },
          {
            id: 'c',
            text: 'Høyesterett',
            isCorrect: false,
            feedback: 'Feil. Domstolene er den dømmende makt — de tolker lovene og avgjør rettstvister.',
          },
          {
            id: 'd',
            text: 'Kongen',
            isCorrect: false,
            feedback: 'Feil. Kongen signerer lovene (kongelig resolusjon), men har i praksis ingen reell makt til å vedta eller avvise lover.',
          },
        ],
        solution: 'Stortinget er den lovgivende makt i Norge og har enerett på å vedta lover.',
      },
    },

    // ========== OPPGAVE 4: ANALYSE ==========
    {
      id: 'samfunnsfag-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-4',
        number: '1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor maktfordelingsprinsippet er viktig for et demokrati.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kan skje i et samfunn der én person eller gruppe kontrollerer all makt?',
            solution: 'Uten maktfordeling kan makthaverne misbruke sin posisjon. De kan vedta lover som gagner dem selv, straffe motstandere uten rettferdig rettssak, og undertrykke kritikk. Historien viser mange eksempler på dette i diktaturer.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på hvordan de tre statsmaktene i Norge kontrollerer hverandre.',
            solution: 'For eksempel: Stortinget kan fremme mistillitsforslag mot regjeringen og tvinge den til å gå av. Domstolene kan sette til side en lov vedtatt av Stortinget dersom den strider mot Grunnloven. Regjeringen kan oppløse Stortinget og utskrive nyvalg (selv om dette aldri har skjedd i Norge).',
          },
          {
            label: 'c',
            task: 'Hva menes med at mediene er «den fjerde statsmakt»?',
            solution: 'Mediene overvåker og rapporterer om hva de tre statsmaktene gjør. Gjennom gravende journalistikk kan pressen avdekke maktmisbruk, korrupsjon og feil. Mediene holder politikerne ansvarlige overfor folket ved å informere borgerne.',
          },
        ],
        hints: ['Tenk på hva som kan skje hvis kontrollen mangler.'],
        solution: 'Maktfordelingsprinsippet hindrer maktmisbruk ved at de tre statsmaktene kontrollerer hverandre. Ingen instans kan vedta, gjennomføre og dømme alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: MEDBORGERSKAP ==========
    {
      id: 'samfunnsfag-10-1-def-3',
      type: 'definition',
      title: 'Medborgerskap og demokratisk deltakelse',
      content: `**Medborgerskap** handler om mer enn å ha et pass eller statsborgerskap. Det betyr å være en **aktiv deltaker** i samfunnet — å bry seg om fellesskapet, bruke rettighetene sine og ta ansvar.

En medborger:
- Holder seg informert om hva som skjer i samfunnet
- Respekterer andres rettigheter og meninger
- Bidrar til fellesskapet gjennom deltakelse
- Tar ansvar for sine handlinger
- Stiller krav til myndighetene

**Demokratisk deltakelse** kan være **formell** eller **uformell**:

**Formell deltakelse:**
- Stemme ved valg
- Stille som kandidat til valg
- Melde seg inn i et politisk parti
- Sitte i kommunestyre eller på Stortinget

**Uformell deltakelse:**
- Skrive debattinnlegg eller leserbrev
- Delta i demonstrasjoner og markeringer
- Engasjere seg i organisasjoner og foreninger
- Dele meninger på sosiale medier
- Signere opprop og underskriftskampanjer
- Delta i elevråd eller ungdomsråd
- Drive frivillig arbeid

Du trenger ikke stemmerett for å delta i demokratiet. Faktisk er uformell deltakelse noe av det viktigste for et levende demokrati.`,
    },

    // ========== TEKST: DEMOKRATI I NORGE ==========
    {
      id: 'samfunnsfag-10-1-norsk-demokrati',
      type: 'text',
      content: `## Det norske demokratiet — en kort historie

Det norske demokratiet har utviklet seg gradvis over mer enn 200 år:

### 1814: Grunnloven
Norge fikk sin egen grunnlov 17. mai 1814. Den la grunnlaget for folkestyret, men kun rundt 7 % av befolkningen fikk stemmerett — menn med eiendom eller embete.

### 1898: Allmenn stemmerett for menn
Alle menn over 25 år fikk stemmerett, uavhengig av inntekt og eiendom.

### 1913: Stemmerett for kvinner
Norge ble et av de første landene i verden der kvinner fikk full stemmerett. Kampen for kvinnelig stemmerett ble ledet av foreninger som **Landskvinnestemmerettsforeningen**.

### 1978: Likestillingsloven
Loven forbød diskriminering basert på kjønn og styrket kvinners stilling i arbeidslivet.

### 2018: Stemmerettsalderen debatteres
Det har vært gjentatte forslag om å senke stemmerettsalderen fra 18 til 16 år, med prøveordninger i enkelte kommuner.

### Viktig å huske
Demokrati er ikke noe som ble «ferdig» i 1814 eller 1913. Det er en pågående prosess der rettighetene utvides og utfordres. Grupper som kvinner, arbeidere, samer og LHBT+-personer har alle måttet kjempe for sine rettigheter innenfor det demokratiske systemet.`,
    },

    // ========== EKSEMPEL: DEMOKRATISK DELTAKELSE ==========
    {
      id: 'samfunnsfag-10-1-example-2',
      type: 'example',
      title: 'Eksempel: Ung og engasjert',
      problem: `Jonas er 15 år. Han er frustrert over at det ikke er trygg sykkelvei til skolen hans. Flere elever har nesten blitt påkjørt. Hvordan kan Jonas bruke demokratiske virkemidler for å gjøre noe med dette?`,
      solution: `**Jonas har mange muligheter:**

**Steg 1: Samle informasjon og støtte**
- Snakke med andre elever og foreldre om problemet
- Dokumentere farlige situasjoner (bilder, video)
- Finne ut hvem som har ansvaret (kommunen/fylkeskommunen)

**Steg 2: Bruke formelle kanaler**
- Ta saken opp i **elevrådet** og be om at skolen sender brev til kommunen
- Skrive **brev til kommunestyret** med konkret forslag om sykkelvei
- Kontakte det lokale **ungdomsrådet**, som er ungdommens rådgivende organ overfor kommunen
- Delta på **kommunestyremøter** som er åpne for alle

**Steg 3: Bruke uformelle kanaler**
- Skrive **debattinnlegg** i lokalavisen
- Starte **underskriftskampanje** på nett og papir
- Kontakte **lokale politikere** direkte — de fleste er tilgjengelige via e-post eller sosiale medier
- Organisere en **markering** ved den farlige veien

**Steg 4: Bruke mediene**
- Tipse **lokalavisen** om saken
- Dele saken på **sosiale medier** for å skape oppmerksomhet

**Resultat:**
Mange saker har blitt løst nettopp fordi ungdom har tatt initiativ. Politikere lytter ofte til engasjerte innbyggere, og spesielt ungdom som bruker systemet aktivt.

Dette eksempelet viser at demokratisk deltakelse handler om mer enn å stemme — det handler om å bruke **alle verktøyene** som er tilgjengelige.`,
    },

    // ========== OPPGAVE 5: DELTAKELSE ==========
    {
      id: 'samfunnsfag-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-5',
        number: '1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Demokratisk deltakelse kan være både formell og uformell.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi tre eksempler på formell demokratisk deltakelse.',
            solution: 'Eksempler: Stemme ved valg, melde seg inn i et politisk parti, stille som kandidat til kommunevalg, sitte i kommunestyre eller bydelsutvalg.',
          },
          {
            label: 'b',
            task: 'Gi tre eksempler på uformell demokratisk deltakelse.',
            solution: 'Eksempler: Skrive debattinnlegg, delta i demonstrasjoner, engasjere seg i frivillige organisasjoner, dele politiske meninger på sosiale medier, signere opprop.',
          },
          {
            label: 'c',
            task: 'Hvilke former for demokratisk deltakelse kan du som 15-16-åring drive med?',
            solution: 'Du kan delta i elevråd, ungdomsråd, ungdomspartier, demonstrasjoner, skrive debattinnlegg, bruke sosiale medier, drive frivillig arbeid, kontakte politikere, delta i organisasjoner. Du kan gjøre det meste bortsett fra å stemme ved offentlige valg.',
          },
        ],
        hints: ['Husk at uformell deltakelse kan være like viktig som formell.'],
        solution: 'Formell deltakelse handler om å bruke offisielle kanaler (valg, partier, folkevalgte organer), mens uformell deltakelse handler om å påvirke gjennom ytringer, organisasjoner og aksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: TRUSLER MOT DEMOKRATIET ==========
    {
      id: 'samfunnsfag-10-1-trusler',
      type: 'text',
      content: `## Trusler mot demokratiet

Selv i veletablerte demokratier som Norge finnes det utfordringer som kan svekke folkestyret:

### Lav valgdeltakelse
Hvis få stemmer, representerer de valgte politikerne en mindre del av befolkningen. Ved kommunevalg i Norge stemmer ofte bare 60-65 % av de stemmeberettigede. Hvem er det som ikke stemmer, og hvorfor?

### Desinformasjon og falske nyheter
Sosiale medier gjør det lett å spre feilaktig informasjon. Når folk ikke kan stole på informasjonen de får, blir det vanskelig å ta informerte valg. Noen aktører sprer bevisst desinformasjon for å svekke tilliten til demokratiske institusjoner.

### Polarisering
Når samfunnet deles i grupper som ser på hverandre som fiender i stedet for medborgere med ulike meninger, svekkes demokratiet. Dialog og kompromiss erstattes av konfrontasjon og hat.

### Maktkonsentrasjon
Selv i demokratier kan makt samles hos noen få — store selskaper, lobbygrupper eller mediekonsentrasjoner. Når pengesterke interesser får for stor innflytelse, kan vanlige borgeres stemme bli svekket.

### Autoritære tendenser
I noen land ser vi at demokratisk valgte ledere gradvis svekker demokratiske institusjoner — de begrenser pressefrihet, svekker domstolenes uavhengighet og endrer valglovene til sin fordel. Dette kan skje sakte og nesten umerkelig.

### Hva kan vi gjøre?
- Bruke stemmeretten aktivt
- Være kritiske til informasjon vi leser
- Respektere meningsmotstandere
- Engasjere oss i samfunnsdebatten
- Forsvare demokratiske verdier og institusjoner`,
    },

    // ========== NOTAT: TENK OVER ==========
    {
      id: 'samfunnsfag-10-1-note-1',
      type: 'note',
      title: 'Tenk over dette',
      content: `Demokrati betyr ikke at alle alltid er enige. Faktisk er **uenighet** et tegn på et sunt demokrati — det betyr at folk kan si hva de mener uten å frykte straff.

Det viktige er ikke at vi er enige, men **hvordan** vi håndterer uenighetene. Klarer vi å diskutere med respekt? Aksepterer vi at vi noen ganger er i mindretall? Er vi villige til å lytte til argumenter vi ikke liker?

Et demokrati dør ikke nødvendigvis med et smell — det kan også dø stille, når folk slutter å bry seg.`,
    },

    // ========== OPPGAVE 6: TRUSLER ==========
    {
      id: 'samfunnsfag-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-6',
        number: '1.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Desinformasjon på sosiale medier regnes som en trussel mot demokratiet.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor desinformasjon er en trussel mot demokratiet.',
            solution: 'Desinformasjon hindrer folk i å ta informerte valg, som er grunnlaget for demokratiet. Når velgere stemmer basert på feil informasjon, fungerer ikke folkestyret som det skal. Desinformasjon kan også svekke tilliten til institusjoner, medier og vitenskap.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på hvordan desinformasjon kan påvirke et valg.',
            solution: 'For eksempel kan falske påstander om en kandidat spres på sosiale medier like før et valg. Hvis mange tror på påstandene uten å sjekke dem, kan det påvirke valgresultatet. Et annet eksempel er manipulerte bilder eller videoer (deepfakes) som kan gi et falskt inntrykk av hva en politiker har sagt.',
          },
          {
            label: 'c',
            task: 'Hva kan du selv gjøre for å motvirke desinformasjon?',
            solution: 'Sjekke kilder før du deler informasjon, bruke flere og troverdige nyhetskilder, lære å gjenkjenne falske nyheter (sjekke om andre medier bekrefter saken, se på hvem som står bak, være kritisk til sensasjonelle overskrifter), og varsle sosiale medieplattformer om åpenbar feilinformasjon.',
          },
        ],
        hints: ['Tenk på hvordan sosiale medier påvirker informasjonsflyten i samfunnet.'],
        solution: 'Desinformasjon undergraver demokratiet fordi det hindrer informerte valg. Vi kan motvirke det gjennom kildekritikk og bevissthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: INTERNASJONAL SAMMENLIGNING ==========
    {
      id: 'samfunnsfag-10-1-example-3',
      type: 'example',
      title: 'Eksempel: Demokrati i verden',
      problem: `Organisasjonen Freedom House rangerer land etter hvor demokratiske de er. I 2024 ble 83 land klassifisert som «frie», 56 som «delvis frie» og 56 som «ikke frie». Hva kan vi lære av denne rangeringen?`,
      solution: `**Hva tallene forteller oss:**

**Demokrati er ikke selvsagt.** Omtrent halvparten av verdens befolkning lever i land som ikke er fullt ut demokratiske. Det er et privilegium å leve i et fritt land.

**Demokrati kan svekkes.** Flere land har gått fra å være «frie» til «delvis frie» de siste årene. Eksempler inkluderer land der valgte ledere har begrenset pressefrihet og domstolenes uavhengighet.

**Ulike grader av demokrati.** Det er ikke bare «demokrati» eller «diktatur» — det finnes et helt spekter. Noen land har valg, men mangelfull pressefrihet. Andre har ytringsfrihet, men korrupte institusjoner.

**Kjennetegn på «frie» land:**
- Regelmessige, frie valg
- Uavhengige domstoler
- Fri presse
- Respekt for menneskerettigheter
- Fungerende maktfordeling

**Kjennetegn på «ikke frie» land:**
- Ingen reelle valg, eller valg uten reell konkurranse
- Kontrollerte domstoler
- Sensurert presse
- Undertrykkelse av opposisjon
- Maktkonsentrasjon hos en leder eller et parti

**Konklusjon:** Demokrati er noe vi kontinuerlig må forsvare og utvikle. Selv land som Norge kan ikke ta demokratiet for gitt.`,
    },

    // ========== OPPGAVE 7: FLERVALG ==========
    {
      id: 'samfunnsfag-10-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-7',
        number: '1.7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av følgende er IKKE et kjennetegn på et fungerende demokrati?',
        options: [
          {
            id: 'a',
            text: 'Frie og rettferdige valg',
            isCorrect: false,
            feedback: 'Feil. Frie og rettferdige valg er et av de viktigste kjennetegnene på et demokrati.',
          },
          {
            id: 'b',
            text: 'Uavhengige domstoler',
            isCorrect: false,
            feedback: 'Feil. Uavhengige domstoler er avgjørende for at maktfordelingsprinsippet skal fungere.',
          },
          {
            id: 'c',
            text: 'At flertallet alltid bestemmer, uten begrensninger',
            isCorrect: true,
            feedback: 'Riktig! I et demokrati bestemmer flertallet, men mindretallet har rettigheter som ikke kan stemmes bort. Uten mindretallsvern kan demokrati bli «flertallets tyranni».',
          },
          {
            id: 'd',
            text: 'Ytringsfrihet og pressefrihet',
            isCorrect: false,
            feedback: 'Feil. Ytringsfrihet og pressefrihet er grunnleggende demokratiske verdier.',
          },
        ],
        solution: 'Et demokrati har begrensninger på flertallets makt — mindretallet har rettigheter som ikke kan stemmes bort.',
      },
    },

    // ========== OPPGAVE 8: REFLEKSJON ==========
    {
      id: 'samfunnsfag-10-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-8',
        number: '1.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en refleksjonstekst (200-300 ord) om følgende problemstilling:',
        subTasks: [
          {
            label: 'a',
            task: 'Bør stemmerettsalderen senkes til 16 år i Norge? Presenter argumenter for og mot, og gi din egen vurdering.',
            solution: 'Argumenter for: 16-åringer betaler skatt, er strafferettslig ansvarlige, er berørt av politiske beslutninger, kan øke engasjementet blant unge. Argumenter mot: Mangler modenhet og erfaring, kan bli påvirket av foreldre/skole, hjernen er ikke ferdig utviklet, de fleste 16-åringer har lite arbeidserfaring. Egen vurdering bør bygge på argumentene.',
          },
        ],
        hints: [
          'Husk å presentere begge sider balansert.',
          'Bruk gjerne eksempler fra land som allerede har senket stemmerettsalderen.',
        ],
        solution: 'En god tekst presenterer argumenter for og mot på en balansert måte, bruker konkrete eksempler, og gir en begrunnet egen vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-1-oppsummering',
      type: 'text',
      content: `## Oppsummering: Demokrati og medborgerskap

**Demokrati** betyr folkestyre og bygger på prinsipper som frie valg, ytringsfrihet, rettssikkerhet og maktfordeling.

**Nøkkelbegreper:**
- **Direkte demokrati:** Folket stemmer selv over sakene (f.eks. folkeavstemninger)
- **Representativt demokrati:** Folket velger representanter (f.eks. stortingsvalg)
- **Maktfordelingsprinsippet:** Makten deles mellom Stortinget, regjeringen og domstolene
- **Den fjerde statsmakt:** Medienes rolle som vaktbikkje
- **Medborgerskap:** Å være en aktiv deltaker i samfunnet
- **Formell deltakelse:** Valg, partier, folkevalgte organer
- **Uformell deltakelse:** Debattinnlegg, demonstrasjoner, organisasjoner
- **Mindretallsvern:** Flertallets makt har grenser
- **Desinformasjon:** Falsk informasjon som truer demokratiet
- **Polarisering:** Når samfunnet splittes i fiendtlige grupper`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-9',
        number: '1.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Sammenlign det norske demokratiet med et land som regnes som «ikke fritt» (f.eks. Nord-Korea, Kina eller Russland).',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort hvordan det politiske systemet fungerer i det landet du velger.',
            solution: 'Svaret bør beskrive landets styringsform, lederens makt, om det finnes valg, pressefrihet og rettssikkerhet.',
          },
          {
            label: 'b',
            task: 'Pek på tre viktige forskjeller mellom Norge og det landet du valgte.',
            solution: 'Mulige forskjeller: Frie valg vs. kontrollerte valg, fri presse vs. sensur, uavhengige domstoler vs. politisk styrt rettsvesen, maktfordeling vs. maktkonsentrasjon, ytringsfrihet vs. undertrykkelse.',
          },
          {
            label: 'c',
            task: 'Reflekter over hvorfor demokrati er viktig for vanlige menneskers hverdag.',
            solution: 'Demokrati påvirker hverdagen gjennom ytringsfrihet, rettssikkerhet, medbestemmelse, fri presse som avdekker maktmisbruk, og mulighet til å endre politikken gjennom valg. Uten demokrati er vanlige mennesker sårbare for vilkårlig maktbruk.',
          },
        ],
        hints: ['Bruk gjerne aktuelle nyhetseksempler.', 'Vis at du forstår både styrker og svakheter ved ulike systemer.'],
        solution: 'Drøftingen bør vise forståelse for demokratiske prinsipper ved å sette dem i kontrast til ikke-demokratiske systemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-10',
        number: '1.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Det er viktigere å stemme ved valg enn å demonstrere i gatene.» Er du enig eller uenig? Begrunn svaret ditt med minst tre argumenter.',
        hints: [
          'Vurder begge sider av påstanden.',
          'Tenk på eksempler der demonstrasjoner har ført til endringer.',
          'Tenk på hva som skjer hvis folk slutter å stemme.',
        ],
        solution: 'En god drøfting anerkjenner at både valg og demonstrasjoner er viktige demokratiske virkemidler. Valg gir direkte politisk makt, mens demonstrasjoner setter saker på dagsordenen, mobiliserer opinion og kan føre til endringer. De supplerer hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Menneskerettigheter
// LK20: Utforske og beskrive hvordan menneske- og urfolksrettigheter er nedfelt
//        i nasjonale og internasjonale lover
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_2: TextbookChapter = {
  id: 'samfunnsfag-10-2',
  courseId: 'samfunnsfag-10',
  chapterNumber: '2',
  title: 'Menneskerettigheter',
  description: 'Forstå menneskerettighetenes opprinnelse, innhold og betydning, og lær om FNs verdenserklæring, barnekonvensjonen og urfolks rettigheter.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og beskrive hvordan menneske- og urfolksrettigheter er nedfelt i nasjonale og internasjonale lover',
    'reflektere over korleis identitet, sjølvbilde og eigne grenser blir utvikla og utfordra',
    'drøfte korleis makt og maktmisbruk kjem til uttrykk i ulike samanhengar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-2-intro',
      type: 'text',
      content: `## Hvilke rettigheter har du — bare fordi du er et menneske?

Forestill deg at du blir født i et land der du ikke har rett til å gå på skole. Eller at du ikke kan si hva du mener uten å risikere fengsel. Eller at myndighetene kan ta barna dine fra deg uten grunn.

For millioner av mennesker i verden er dette virkeligheten — ikke en tenkt situasjon.

**Menneskerettigheter** er rettigheter som alle mennesker har, uansett hvem de er, hvor de bor, hvilket kjønn de har, eller hva de tror på. De er ikke noe du må gjøre deg fortjent til — du har dem fra fødselen av.

Men menneskerettighetene oppsto ikke av seg selv. De ble til fordi mennesker opplevde grusomheter så forferdelige at verdenssamfunnet sa: «Aldri mer.»

I dette kapittelet skal du lære om:
- Hvorfor menneskerettighetene ble til
- Hva de viktigste rettighetene inneholder
- Hvordan de er beskyttet i Norge og internasjonalt
- Barns særlige rettigheter
- Samenes rettigheter som urfolk
- Eksempler på menneskerettighetsbrudd i dag`,
    },

    // ========== DEFINISJON: MENNESKERETTIGHETER ==========
    {
      id: 'samfunnsfag-10-2-def-1',
      type: 'definition',
      title: 'Menneskerettigheter',
      content: `**Menneskerettigheter** er grunnleggende rettigheter og friheter som tilhører alle mennesker, uavhengig av nasjonalitet, kjønn, etnisitet, religion, språk eller annen status.

Menneskerettighetene har tre viktige egenskaper:

**Universelle:** De gjelder for alle mennesker, overalt i verden, til enhver tid. Du har de samme grunnleggende rettighetene enten du er født i Norge, Somalia eller Japan.

**Udelelige:** Alle rettighetene henger sammen og er like viktige. Man kan ikke si at retten til ytringsfrihet er viktigere enn retten til mat, eller omvendt. De utgjør en helhet.

**Uavhendelige:** Du kan ikke miste menneskerettighetene dine. Ingen kan ta dem fra deg, og du kan ikke gi dem fra deg. Selv en person som er dømt for en alvorlig forbrytelse, beholder sine grunnleggende rettigheter (for eksempel forbud mot tortur).`,
    },

    // ========== TEKST: HISTORISK BAKGRUNN ==========
    {
      id: 'samfunnsfag-10-2-historie',
      type: 'text',
      content: `## Hvordan menneskerettighetene ble til

### Røtter i opplysningstiden
Ideen om at mennesker har naturlige, medfødte rettigheter går tilbake til opplysningstiden på 1600- og 1700-tallet. Filosofer som **John Locke** argumenterte for at alle mennesker har rett til liv, frihet og eiendom, og at statens oppgave er å beskytte disse rettighetene.

### Den amerikanske uavhengighetserklæringen (1776)
«Vi holder disse sannhetene for å være selvinnlysende, at alle mennesker er skapt like, at de er utstyrt av sin Skaper med visse umistelige rettigheter...» Dette var en av de første offisielle dokumentene som slo fast at mennesker har medfødte rettigheter.

### Den franske menneskerettighetserklæringen (1789)
Under den franske revolusjonen ble det vedtatt en erklæring om menneskets og borgerens rettigheter, som fastslo frihet, eiendomsrett og likhet for loven.

### Andre verdenskrig og Holocaust
Det store vendepunktet kom etter andre verdenskrig (1939-1945). Holocaust — nazistenes systematiske mord på seks millioner jøder og millioner av andre — viste hva som kan skje når menneskerettigheter ikke respekteres. Krigen kostet over 60 millioner menneskeliv.

### FNs verdenserklæring om menneskerettigheter (1948)
10. desember 1948 vedtok FNs generalforsamling **Verdenserklæringen om menneskerettigheter**. Det var første gang i historien at verdens land ble enige om en felles standard for grunnleggende rettigheter.

Erklæringen har 30 artikler som dekker alt fra retten til liv og frihet til retten til utdanning og arbeid. Den ble utarbeidet av en komité ledet av **Eleanor Roosevelt**, tidligere førstedame i USA.

**Viktig å vite:** Verdenserklæringen er ikke juridisk bindende i seg selv, men den har inspirert to bindende konvensjoner:
- **Konvensjonen om sivile og politiske rettigheter** (1966)
- **Konvensjonen om økonomiske, sosiale og kulturelle rettigheter** (1966)

Sammen utgjør verdenserklæringen og disse to konvensjonene det som kalles **Den internasjonale menneskerettighetserklæringen** (*The International Bill of Human Rights*).`,
    },

    // ========== OPPGAVE 1: FLERVALG ==========
    {
      id: 'samfunnsfag-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-1',
        number: '2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var den viktigste årsaken til at FNs verdenserklæring om menneskerettigheter ble vedtatt i 1948?',
        options: [
          {
            id: 'a',
            text: 'Den kalde krigen mellom USA og Sovjet',
            isCorrect: false,
            feedback: 'Feil. Den kalde krigen begynte omtrent samtidig, men det var ikke hovedårsaken til erklæringen.',
          },
          {
            id: 'b',
            text: 'Erfaringene fra andre verdenskrig og Holocaust',
            isCorrect: true,
            feedback: 'Riktig! Grusomhetene under andre verdenskrig, spesielt Holocaust, fikk verdenssamfunnet til å vedta felles menneskerettighetsstandarder.',
          },
          {
            id: 'c',
            text: 'Den franske revolusjonen',
            isCorrect: false,
            feedback: 'Feil. Den franske revolusjonen (1789) var en viktig forløper, men skjedde 160 år tidligere.',
          },
          {
            id: 'd',
            text: 'Avkoloniseringen av Afrika',
            isCorrect: false,
            feedback: 'Feil. Avkoloniseringen skjedde hovedsakelig etter 1948, selv om kampen for selvstyre hadde begynt.',
          },
        ],
        solution: 'Erfaringene fra andre verdenskrig og Holocaust var den direkte årsaken til at verdenssamfunnet vedtok FNs verdenserklæring om menneskerettigheter i 1948.',
      },
    },

    // ========== DEFINISJON: KATEGORIER ==========
    {
      id: 'samfunnsfag-10-2-def-2',
      type: 'definition',
      title: 'Menneskerettighetenes kategorier',
      content: `Menneskerettighetene deles tradisjonelt inn i tre kategorier:

**1. Sivile og politiske rettigheter (SP-rettigheter)**
Disse beskytter individet mot overgrep fra staten:
- **Retten til liv** — ingen skal drepes vilkårlig av staten
- **Forbud mot tortur** — ingen skal utsettes for tortur eller umenneskelig behandling
- **Ytringsfrihet** — retten til å si sin mening fritt
- **Religionsfrihet** — retten til å tro på det man vil, eller ikke tro
- **Stemmerett** — retten til å delta i frie valg
- **Rettferdig rettssak** — retten til å bli behandlet rettferdig av rettsvesenet
- **Forbud mot slaveri** — ingen skal holdes som slave

**2. Økonomiske, sosiale og kulturelle rettigheter (ØSK-rettigheter)**
Disse sikrer grunnleggende levekår:
- **Retten til utdanning** — alle barn skal få gå på skole
- **Retten til helse** — tilgang til helsetjenester
- **Retten til arbeid** — mulighet til å forsørge seg selv
- **Retten til mat og vann** — tilgang til nok mat og rent vann
- **Retten til bolig** — et sted å bo
- **Retten til kulturliv** — delta i kulturelle aktiviteter

**3. Grupperettigheter (solidaritetsrettigheter)**
Disse gjelder for grupper og folk:
- **Folkenes selvbestemmelsesrett** — retten til å bestemme over egen fremtid
- **Urfolks rettigheter** — rett til land, kultur og selvbestemmelse
- **Rett til utvikling** — alle folk har rett til utvikling
- **Rett til fred** — retten til å leve i fred

Under den kalde krigen la vestlige land mest vekt på SP-rettighetene, mens østblokklandene fremhevet ØSK-rettighetene. I dag er det bred enighet om at alle kategoriene er like viktige.`,
    },

    // ========== OPPGAVE 2: KATEGORISERING ==========
    {
      id: 'samfunnsfag-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-2',
        number: '2.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Plasser følgende rettigheter i riktig kategori:',
        subTasks: [
          {
            label: 'a',
            task: 'Retten til utdanning',
            solution: 'Økonomisk, sosial og kulturell rettighet (ØSK)',
            multipleChoiceOptions: [
              'Økonomisk, sosial og kulturell rettighet (ØSK)',
              'Sivil og politisk rettighet (SP)',
              'Grupperettighet',
              'Miljørettighet',
            ],
          },
          {
            label: 'b',
            task: 'Ytringsfrihet',
            solution: 'Sivil og politisk rettighet (SP)',
            multipleChoiceOptions: [
              'Sivil og politisk rettighet (SP)',
              'Økonomisk rettighet',
              'Grupperettighet',
              'Barnerettighet',
            ],
          },
          {
            label: 'c',
            task: 'Samenes rett til å bevare sitt språk',
            solution: 'Grupperettighet / urfolksrettighet',
            multipleChoiceOptions: [
              'Grupperettighet / urfolksrettighet',
              'Sivil og politisk rettighet',
              'Økonomisk rettighet',
              'Religiøs rettighet',
            ],
          },
          {
            label: 'd',
            task: 'Retten til en rettferdig rettssak',
            solution: 'Sivil og politisk rettighet (SP)',
            multipleChoiceOptions: [
              'Sivil og politisk rettighet (SP)',
              'Økonomisk rettighet',
              'Grupperettighet',
              'Kulturell rettighet',
            ],
          },
        ],
        solution: 'a) ØSK-rettighet, b) SP-rettighet, c) Grupperettighet/urfolksrettighet, d) SP-rettighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: BESKYTTELSE I NORGE ==========
    {
      id: 'samfunnsfag-10-2-norge',
      type: 'text',
      content: `## Hvordan er menneskerettighetene beskyttet i Norge?

Norge regnes som et av landene i verden som best beskytter menneskerettighetene. Men dette har ikke alltid vært tilfelle, og det finnes fortsatt utfordringer.

### Grunnloven
Norges grunnlov fra 1814 inneholder et eget kapittel om menneskerettigheter (kapittel E). I 2014 ble dette kapittelet utvidet og modernisert. Det slår fast blant annet:
- Retten til liv (§ 93)
- Forbud mot tortur (§ 93)
- Ytringsfrihet (§ 100)
- Religionsfrihet (§ 16)
- Personvern (§ 102)
- Barns rettigheter (§ 104)
- Rett til utdanning (§ 109)

### Menneskerettsloven (1999)
Denne loven gjør flere internasjonale menneskerettighetskonvensjoner til norsk lov. Det betyr at de har **forrang** — hvis en norsk lov er i strid med menneskerettighetene, er det menneskerettighetene som gjelder.

### Domstolene
Norske domstoler kan prøve om lover og vedtak er i strid med menneskerettighetene. Høyesterett er den øverste instansen.

### Den europeiske menneskerettighetsdomstolen (EMD)
Norge har sluttet seg til Den europeiske menneskerettighetskonvensjonen (EMK). Norske borgere kan klage til EMD i Strasbourg hvis de mener at norske myndigheter har krenket deres rettigheter. Norge har blitt felt flere ganger.

### Sivilombudet
Sivilombudet (tidligere Sivilombudsmannen) er Stortingets vaktbikkje overfor forvaltningen. Vanlige borgere kan klage hit hvis de mener at myndighetene har behandlet dem urettferdig.

### Norsk institutt for menneskerettigheter (NIM)
NIM er et uavhengig organ som overvåker og rapporterer om menneskerettighetssituasjonen i Norge. De utgir årlige rapporter og kommer med anbefalinger til myndighetene.`,
    },

    // ========== EKSEMPEL: RETTIGHETSBRUDD I NORGE ==========
    {
      id: 'samfunnsfag-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Norge felt i menneskerettighetsdomstolen',
      problem: `Norge regnes som et foregangsland for menneskerettigheter. Likevel har Den europeiske menneskerettighetsdomstolen (EMD) felt Norge i flere saker. Hva sier dette om menneskerettighetenes rolle?`,
      solution: `**Eksempler på saker der Norge er felt:**

**Barnevern og familierett:**
I perioden 2015-2020 ble Norge felt i flere barnevernssaker der EMD mente at norske myndigheters inngripen i familier var for omfattende. Domstolen mente blant annet at foreldre ikke fikk tilstrekkelig rett til kontakt med barna sine etter omsorgsovertakelse.

**Isolasjon i fengsel:**
Norge er blitt kritisert for bruk av isolasjon i varetektsfengslinger, som kan bryte med forbudet mot umenneskelig behandling.

**Hva betyr dette?**
1. **Ingen land er perfekte.** Selv foregangsland som Norge kan bryte menneskerettighetene.
2. **Systemet fungerer.** Det at Norge kan klages inn og dømmes, viser at kontrollsystemet virker.
3. **Rettigheter utvikles.** Menneskerettighetene er ikke statiske — tolkningen utvikler seg gjennom rettspraksis.
4. **Staten må korrigere seg.** Når Norge felles, må myndighetene endre praksis. Dette styrker rettighetsvernet over tid.

**Konklusjon:** Det at Norge noen ganger taper saker i EMD, er ikke et tegn på at systemet har feilet — det er et tegn på at det fungerer.`,
    },

    // ========== OPPGAVE 3: BESKYTTELSE ==========
    {
      id: 'samfunnsfag-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-3',
        number: '2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan menneskerettighetene er beskyttet på ulike nivåer i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan beskytter Grunnloven menneskerettighetene?',
            solution: 'Grunnloven har et eget kapittel (E) om menneskerettigheter. Grunnloven er den høyeste loven i Norge, og ingen vanlige lover kan stride mot den. Stortinget kan bare endre Grunnloven med 2/3 flertall, noe som gir ekstra beskyttelse.',
          },
          {
            label: 'b',
            task: 'Hva er menneskerettsloven, og hvorfor er den viktig?',
            solution: 'Menneskerettsloven gjør internasjonale menneskerettighetskonvensjoner til norsk lov. Den gir konvensjonene forrang, noe som betyr at de går foran andre norske lover ved motstrid. Dette sikrer at Norge følger internasjonale standarder.',
          },
          {
            label: 'c',
            task: 'Hva er Den europeiske menneskerettighetsdomstolen (EMD), og hvordan fungerer den?',
            solution: 'EMD er en internasjonal domstol i Strasbourg som behandler klager fra borgere som mener at staten har krenket rettighetene deres under Den europeiske menneskerettighetskonvensjonen. Dommene er bindende for medlemslandene.',
          },
        ],
        hints: ['Tenk på beskyttelse fra det nasjonale til det internasjonale nivået.'],
        solution: 'Menneskerettighetene beskyttes gjennom flere lag: Grunnloven, menneskerettsloven, domstolene, Sivilombudet og EMD.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: BARNEKONVENSJONEN ==========
    {
      id: 'samfunnsfag-10-2-def-3',
      type: 'definition',
      title: 'FNs barnekonvensjon',
      content: `**FNs barnekonvensjon** ble vedtatt i 1989 og er ratifisert av nesten alle verdens land (alle unntatt USA). Den gir barn (alle under 18 år) særlige rettigheter i tillegg til de generelle menneskerettighetene.

**Fire grunnleggende prinsipper:**

**1. Ikke-diskriminering (art. 2)**
Alle barn har de samme rettighetene, uansett bakgrunn.

**2. Barnets beste (art. 3)**
Ved alle avgjørelser som berører barn, skal barnets beste være et grunnleggende hensyn. Dette gjelder for domstoler, myndigheter, foreldre og andre.

**3. Retten til liv og utvikling (art. 6)**
Alle barn har rett til liv, og staten har plikt til å sikre barnets overlevelse og utvikling.

**4. Retten til å bli hørt (art. 12)**
Barn har rett til å uttrykke sine synspunkter i alle saker som angår dem, og synspunktene skal tillegges vekt i samsvar med barnets alder og modenhet.

**Andre viktige artikler:**
- Art. 19: Beskyttelse mot vold og overgrep
- Art. 28: Rett til utdanning
- Art. 31: Rett til lek og fritid
- Art. 32: Beskyttelse mot barnearbeid
- Art. 34: Beskyttelse mot seksuell utnyttelse
- Art. 37: Forbud mot tortur og umenneskelig straff
- Art. 38: Beskyttelse mot deltakelse i væpnet konflikt

I Norge er barnekonvensjonen gjort til norsk lov gjennom menneskerettsloven, og den har forrang foran annen lovgivning.`,
    },

    // ========== OPPGAVE 4: BARNEKONVENSJONEN ==========
    {
      id: 'samfunnsfag-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-4',
        number: '2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Ifølge barnekonvensjonen: Hva er et grunnleggende hensyn ved alle avgjørelser som berører barn?',
        options: [
          {
            id: 'a',
            text: 'Foreldrenes ønsker',
            isCorrect: false,
            feedback: 'Feil. Foreldrenes ønsker er viktige, men det er barnets beste som skal være det grunnleggende hensynet.',
          },
          {
            id: 'b',
            text: 'Barnets beste',
            isCorrect: true,
            feedback: 'Riktig! Artikkel 3 i barnekonvensjonen slår fast at barnets beste skal være et grunnleggende hensyn i alle avgjørelser som berører barn.',
          },
          {
            id: 'c',
            text: 'Statens økonomiske hensyn',
            isCorrect: false,
            feedback: 'Feil. Økonomiske hensyn kan spille inn, men barnets beste skal alltid være det grunnleggende hensynet.',
          },
          {
            id: 'd',
            text: 'Lærerens vurdering',
            isCorrect: false,
            feedback: 'Feil. Læreren kan ha meninger, men barnets beste er et bredere prinsipp som gjelder alle som tar avgjørelser om barn.',
          },
        ],
        solution: 'Barnets beste (artikkel 3) er det grunnleggende hensynet ved alle avgjørelser som berører barn.',
      },
    },

    // ========== TEKST: SAMENE SOM URFOLK ==========
    {
      id: 'samfunnsfag-10-2-urfolk',
      type: 'text',
      content: `## Samene — Norges urfolk

Samene er anerkjent som urfolk i Norge, Sverige, Finland og Russland. De har bodd i nordområdene i tusenvis av år, lenge før nasjonalstatene ble til.

### Fornorsking
Fra midten av 1800-tallet førte norske myndigheter en aktiv **fornorskingspolitikk** overfor samene. Samisk språk og kultur ble undertrykt:
- Samiske barn ble sendt til internatskoler der de ble tvunget til å snakke norsk
- Samisk språk ble forbudt i skolen
- Samisk kultur og levesett ble sett ned på
- For å kjøpe jord i Finnmark måtte man snakke norsk

Denne politikken påførte det samiske folket stor skade og har hatt konsekvenser som merkes den dag i dag.

### Alta-saken (1979-1982)
Da norske myndigheter planla å demme opp Alta-Kautokeino-vassdraget for å bygge kraftverk, førte det til massive protester fra samer og miljøvernere. Demonstrantene lenket seg fast, og samiske kvinner gjennomførte sultestreik foran Stortinget. Kraftverket ble til slutt bygget, men saken ble et vendepunkt for samiske rettigheter i Norge.

### Opprettelsen av Sametinget (1989)
Som følge av Alta-saken og økt bevissthet om samiske rettigheter ble **Sametinget** opprettet i 1989. Det er et folkevalgt organ for det samiske folket med rådgivende myndighet i saker som berører samene.

### Samiske rettigheter i dag
- **Sametinget:** Folkevalgt organ med 39 representanter
- **Samisk språk:** Anerkjent som likeverdig med norsk i samiske forvaltningsområder
- **ILO-konvensjon 169:** Norge har ratifisert denne konvensjonen om urfolks rettigheter
- **Finnmarksloven (2005):** Overførte rettigheter til land og vann i Finnmark til lokalbefolkningen
- **Grunnloven § 108:** Staten har plikt til å legge forholdene til rette for at samene kan sikre og utvikle sitt språk, sin kultur og sitt samfunnsliv`,
    },

    // ========== EKSEMPEL: RETTIGHETSKONFLIKT ==========
    {
      id: 'samfunnsfag-10-2-example-2',
      type: 'example',
      title: 'Eksempel: Når rettigheter kolliderer',
      problem: `Ytringsfrihet og vern mot hatytringer er begge viktige rettigheter. Men hva skjer når de kolliderer? Kan man si hva man vil, selv om det krenker andre?`,
      solution: `**Problemstillingen:**
Ytringsfrihet betyr at du kan si din mening fritt. Men hva hvis noen bruker ytringsfriheten til å spre hat mot en folkegruppe?

**Rettighetene i konflikt:**
- **Ytringsfrihet** (Grunnloven § 100, EMK art. 10): Retten til å uttrykke seg fritt
- **Vern mot diskriminering** (Grunnloven § 98, EMK art. 14): Retten til å ikke bli diskriminert
- **Straffelovens § 185**: Forbyr hatefulle ytringer mot bestemte grupper

**Hvordan håndteres konflikten?**
I norsk rett gjøres det en **avveining** mellom rettighetene:
- Ytringsfrihet er en grunnleggende rettighet, men den er ikke absolutt
- Ytringer som oppfordrer til vold eller sprer hat mot grupper, kan straffes
- Domstolene vurderer hver enkelt sak konkret

**Ulike perspektiver:**
- **Noen mener** ytringsfriheten bør være nesten absolutt — at det er bedre å motargumentere dårlige meninger enn å forby dem
- **Andre mener** at hatefulle ytringer gjør så stor skade at de bør forbys, fordi de undergraver andre menneskers verdighet og trygghet

**Konklusjon:**
Det finnes ingen enkel løsning. Balansen mellom ytringsfrihet og vern mot hatytringer er en av de vanskeligste avveiningene i et demokratisk samfunn. Denne debatten er levende i Norge og internasjonalt.`,
    },

    // ========== OPPGAVE 5: URFOLK ==========
    {
      id: 'samfunnsfag-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-5',
        number: '2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samenes rettigheter som urfolk i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var fornorskingspolitikken, og hvordan rammet den samene?',
            solution: 'Fornorskingspolitikken var statens forsøk på å assimilere samene inn i norsk kultur. Samisk språk ble forbudt i skolen, samiske barn ble sendt på internatskoler, og samisk kultur ble sett ned på. Politikken påførte samene stor kulturell og psykologisk skade.',
          },
          {
            label: 'b',
            task: 'Hva er Sametinget, og hvilken rolle har det?',
            solution: 'Sametinget er et folkevalgt organ for det samiske folket, opprettet i 1989. Det har 39 representanter og er rådgivende i saker som berører samene. Sametinget jobber for samiske rettigheter, kultur og språk.',
          },
          {
            label: 'c',
            task: 'Nevn tre rettigheter samene har som urfolk i dag.',
            solution: 'Eksempler: Rett til å bruke samisk språk i offentlig sammenheng, rett til land og naturressurser (Finnmarksloven), rett til selvbestemmelse gjennom Sametinget, rett til å bevare kultur og tradisjonelle næringer som reindrift, rett til undervisning på samisk.',
          },
        ],
        hints: ['Tenk på historien, institusjonene og lovverket.'],
        solution: 'Samene har som Norges urfolk særlige rettigheter knyttet til språk, kultur, land, selvbestemmelse og tradisjonelle næringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: BRUDD I VERDEN ==========
    {
      id: 'samfunnsfag-10-2-brudd',
      type: 'text',
      content: `## Menneskerettighetsbrudd i verden i dag

Til tross for at menneskerettighetene er nedfelt i internasjonale avtaler, brytes de daglig over hele verden:

### Væpnede konflikter
I kriger og konflikter er sivilbefolkningen ofte de som lider mest. Bombing av sivile mål, bruk av barnesoldater, og angrep på sykehus og skoler er alvorlige brudd på internasjonal humanitær rett.

### Forfølgelse av minoriteter
I mange land forfølges etniske og religiøse minoriteter. Uigurene i Kina, rohingyaene i Myanmar og kristne i deler av Midtøsten og Afrika er eksempler.

### Undertrykkelse av ytringsfrihet
Journalister fengsles, bloggere sensureres, og demonstranter slås ned. Organisasjonen Reportere uten grenser dokumenterer at pressefrihet er under press i store deler av verden.

### Barnearbeid
FNs arbeidsorganisasjon (ILO) anslår at rundt 160 millioner barn er i barnearbeid. Mange jobber under farlige forhold i gruver, fabrikker eller som soldater.

### Moderne slaveri
Millioner av mennesker lever i dag som slaver — som ofre for menneskehandel, tvangsarbeid eller tvangsgiftemål.

### Hva gjør verdenssamfunnet?
- **FNs menneskerettighetsråd** gransker brudd og kommer med anbefalinger
- **Den internasjonale straffedomstolen (ICC)** kan straffeforfølge personer ansvarlige for folkemord, krigsforbrytelser og forbrytelser mot menneskeheten
- **Sanksjoner** — land kan innføre økonomiske sanksjoner mot stater som bryter menneskerettighetene
- **Diplomatisk press** — stater og organisasjoner kan legge press på overgripere
- **Frivillige organisasjoner** som Amnesty International, Human Rights Watch og Røde Kors dokumenterer og rapporterer om brudd`,
    },

    // ========== OPPGAVE 6: BRUDD ==========
    {
      id: 'samfunnsfag-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-6',
        number: '2.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Menneskerettighetsbrudd i verden.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi to eksempler på alvorlige menneskerettighetsbrudd som skjer i verden i dag.',
            solution: 'Eksempler kan inkludere: Forfølgelse av uigurer i Kina, undertrykkelse av kvinner under Taliban i Afghanistan, bruk av barnesoldater i afrikanske konflikter, fengsling av journalister i land som Russland og Iran, systematisk diskriminering av minoriteter.',
          },
          {
            label: 'b',
            task: 'Hvilke virkemidler har verdenssamfunnet for å stoppe menneskerettighetsbrudd?',
            solution: 'Virkemidler inkluderer: FNs menneskerettighetsråd, Den internasjonale straffedomstolen (ICC), økonomiske sanksjoner, diplomatisk press, rapportering fra organisasjoner som Amnesty International, fredsbevarende styrker, og i ytterste konsekvens militær intervensjon godkjent av FNs sikkerhetsråd.',
          },
          {
            label: 'c',
            task: 'Hvorfor er det vanskelig for verdenssamfunnet å stoppe menneskerettighetsbrudd?',
            solution: 'Utfordringer inkluderer: Staters suverenitet (andre land kan ikke blande seg inn i indre anliggender), vetoretten i FNs sikkerhetsråd (stormakter kan blokkere tiltak), geopolitiske interesser (land beskytter allierte), manglende håndhevingsmekanismer, og at noen stater aktivt motarbeider internasjonale institusjoner.',
          },
        ],
        hints: ['Tenk på hva som begrenser verdenssamfunnets handlingsrom.'],
        solution: 'Verdenssamfunnet har flere virkemidler, men staters suverenitet, vetoretten og geopolitikk gjør det vanskelig å gripe inn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7: REFLEKSJON ==========
    {
      id: 'samfunnsfag-10-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-7',
        number: '2.7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med at menneskerettighetene er «uavhendelige»?',
        options: [
          {
            id: 'a',
            text: 'At de bare gjelder i rike land',
            isCorrect: false,
            feedback: 'Feil. Menneskerettighetene er universelle og gjelder i alle land.',
          },
          {
            id: 'b',
            text: 'At du kan miste dem hvis du begår en forbrytelse',
            isCorrect: false,
            feedback: 'Feil. Selv kriminelle beholder sine grunnleggende menneskerettigheter, som forbudet mot tortur.',
          },
          {
            id: 'c',
            text: 'At ingen kan ta dem fra deg, og du kan ikke gi dem fra deg',
            isCorrect: true,
            feedback: 'Riktig! Uavhendelig betyr at rettighetene ikke kan fratas deg eller gis bort. De tilhører deg fordi du er et menneske.',
          },
          {
            id: 'd',
            text: 'At de er vanskelige å forstå',
            isCorrect: false,
            feedback: 'Feil. Uavhendelig handler om at rettighetene er permanente, ikke om forståelse.',
          },
        ],
        solution: 'Uavhendelige rettigheter betyr at de ikke kan tas fra deg og at du ikke kan gi dem fra deg — de tilhører deg fordi du er et menneske.',
      },
    },

    // ========== NOTAT ==========
    {
      id: 'samfunnsfag-10-2-note-1',
      type: 'note',
      title: 'Visste du?',
      content: `Norge var med på å utarbeide FNs verdenserklæring om menneskerettigheter i 1948. Den norske juristen **Hersch Lauterpacht** var en viktig bidragsyter til utviklingen av internasjonal menneskerettighetslov.

I dag er 10. desember — dagen erklæringen ble vedtatt — FNs internasjonale menneskerettighetsdag. Nobels fredspris, som deles ut i Oslo, går ofte til personer og organisasjoner som kjemper for menneskerettighetene.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-2-oppsummering',
      type: 'text',
      content: `## Oppsummering: Menneskerettigheter

**Nøkkelbegreper:**
- **Menneskerettigheter:** Grunnleggende rettigheter som tilhører alle mennesker
- **Universelle, udelelige, uavhendelige:** De tre egenskapene til menneskerettighetene
- **FNs verdenserklæring (1948):** Den første internasjonale menneskerettighetsstandarden
- **SP-rettigheter:** Sivile og politiske rettigheter (ytringsfrihet, stemmerett, rettssikkerhet)
- **ØSK-rettigheter:** Økonomiske, sosiale og kulturelle rettigheter (utdanning, helse, arbeid)
- **Barnekonvensjonen:** FN-konvensjon som gir barn særlige rettigheter
- **Barnets beste:** Det grunnleggende prinsippet i barnekonvensjonen
- **Urfolksrettigheter:** Samenes rettigheter som urfolk i Norge
- **Sametinget:** Samenes folkevalgte organ
- **Fornorskingspolitikken:** Statens forsøk på å assimilere samene
- **EMD:** Den europeiske menneskerettighetsdomstolen
- **Menneskerettsloven:** Gjør internasjonale konvensjoner til norsk lov med forrang`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-8',
        number: '2.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Menneskerettighetene er vestlige verdier som ikke passer for alle kulturer.» Noen hevder dette. Hva mener du?',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter argumenter som støtter påstanden.',
            solution: 'Argumenter for: Rettighetene ble utformet hovedsakelig av vestlige land, de vektlegger individuelle rettigheter som er mer sentrale i vestlig kultur, noen rettigheter kan komme i konflikt med kulturelle og religiøse tradisjoner, det kan oppfattes som kulturimperialisme å påtvinge andre samfunn vestlige verdier.',
          },
          {
            label: 'b',
            task: 'Presenter argumenter mot påstanden.',
            solution: 'Argumenter mot: Verdenserklæringen ble vedtatt av alle FN-land, ikke bare vestlige. Ønsket om verdighet, frihet og rettferdighet finnes i alle kulturer. Å kalle rettigheter «vestlige» kan brukes av autoritære ledere for å rettferdiggjøre undertrykking av egne borgere. Mange aktivister i ikke-vestlige land kjemper for disse rettighetene.',
          },
          {
            label: 'c',
            task: 'Gi din egen vurdering.',
            solution: 'En god vurdering viser at man forstår begge perspektivene, men tar stilling basert på argumenter.',
          },
        ],
        hints: ['Husk å være balansert i drøftingen.', 'Tenk på hvem som tjener på å kalle menneskerettighetene «vestlige».'],
        solution: 'En god drøfting vurderer kulturrelativisme mot universalitet, og reflekterer over hvem som tjener på å avvise menneskerettighetene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-9',
        number: '2.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Barnekonvensjonen sier at barnets beste skal være et grunnleggende hensyn. Men hvem bestemmer hva som er barnets beste?',
        hints: [
          'Tenk på situasjoner der foreldre, barnevern og barn selv kan ha ulike oppfatninger.',
          'Tenk på den kontroversen rundt norsk barnevern internasjonalt.',
        ],
        solution: 'Drøftingen bør reflektere over spenningen mellom barns rettigheter, foreldres rettigheter og statens ansvar. Ulike aktører (foreldre, barnevernet, domstolene, barnet selv) kan ha forskjellige oppfatninger om hva som er barnets beste, og det finnes ikke alltid et klart svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'samfunnsfag-10-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-10',
        number: '2.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forskningsoppgave: Velg ett av FNs menneskerettighetsorganer (f.eks. FNs menneskerettighetsråd, UNICEF, FNs høykommissær for flyktninger). Finn ut hva organet gjør, og vurder hvor effektivt det er.',
        hints: ['Bruk flere kilder og vær kildekritisk.'],
        solution: 'Svaret bør presentere organets mandat og arbeid, gi konkrete eksempler på innsats, og vurdere styrker og svakheter ved organets arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Bærekraftig utvikling
// LK20: Utforske og presentere dagsaktuelle tema eller historiske hendingar
//        med utgangspunkt i interessekonfliktar og maktforhold
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_3: TextbookChapter = {
  id: 'samfunnsfag-10-3',
  courseId: 'samfunnsfag-10',
  chapterNumber: '3',
  title: 'Bærekraftig utvikling',
  description: 'Forstå hva bærekraftig utvikling innebærer, lær om FNs bærekraftsmål, miljøutfordringer, ressursforvaltning og interessekonflikter.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og presentere dagsaktuelle tema eller historiske hendingar med utgangspunkt i interessekonfliktar og maktforhold',
    'utforske korleis teknologi har endra og endrar samfunnet, og drøfte ulike syn på teknologiutvikling',
    'beskrive ulike dimensjonar ved berekraftig utvikling og korleis dei påverkar kvarandre',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-3-intro',
      type: 'text',
      content: `## Kan vi leve godt uten å ødelegge for fremtiden?

Se deg rundt. Klærne du har på deg, maten du spiser, telefonen i lommen din — alt dette krever ressurser fra naturen. Bomull, metaller, olje, vann, jord. Spørsmålet er: Har vi nok til alle — også de som ennå ikke er født?

I 1987 definerte FNs Brundtland-kommisjon, ledet av den norske statsministeren **Gro Harlem Brundtland**, bærekraftig utvikling slik:

> «Utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for at kommende generasjoner skal få dekket sine behov.»

Denne definisjonen endret måten verden tenker om utvikling. Den slo fast at vi ikke kan fortsette å bruke opp jordens ressurser som om de var uendelige. Men den sa også at utvikling er nødvendig — fattige land og mennesker må få mulighet til bedre liv.

I dette kapittelet skal du lære om:
- De tre dimensjonene av bærekraftig utvikling
- FNs bærekraftsmål
- Klima- og miljøutfordringer
- Ressursforvaltning og interessekonflikter
- Norges rolle som oljenasjon og miljønasjon
- Hva du selv kan gjøre`,
    },

    // ========== DEFINISJON: BÆREKRAFTIG UTVIKLING ==========
    {
      id: 'samfunnsfag-10-3-def-1',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** handler om å dekke behovene til dagens generasjon uten å ødelegge fremtidige generasjoners muligheter til å dekke sine behov.

Bærekraftig utvikling har **tre dimensjoner** som må være i balanse:

**1. Miljømessig bærekraft**
- Ta vare på naturen og det biologiske mangfoldet
- Ikke forbruke mer ressurser enn naturen kan fornye
- Begrense forurensning og klimagassutslipp
- Beskytte økosystemer som skog, hav og ferskvann

**2. Økonomisk bærekraft**
- Skape verdier og velstand over tid
- Investere i fornybare ressurser og grønn teknologi
- Sikre at økonomisk vekst ikke ødelegger miljøet
- Bygge robuste økonomier som tåler kriser

**3. Sosial bærekraft**
- Rettferdig fordeling av goder og muligheter
- Bekjempe fattigdom og ulikhet
- Sikre menneskerettigheter, helse og utdanning for alle
- Skape inkluderende samfunn der alle kan delta

**Viktig:** De tre dimensjonene påvirker hverandre. Miljøødeleggelser rammer fattige hardest (sosial bærekraft), og fattigdom kan tvinge folk til å overforbruke naturressurser (miljømessig bærekraft). Man kan ikke jobbe med én dimensjon uten å ta hensyn til de andre.`,
    },

    // ========== OPPGAVE 1: FLERVALG ==========
    {
      id: 'samfunnsfag-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-1',
        number: '3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er kjernen i begrepet «bærekraftig utvikling»?',
        options: [
          {
            id: 'a',
            text: 'At vi skal slutte helt med økonomisk vekst',
            isCorrect: false,
            feedback: 'Feil. Bærekraftig utvikling betyr ikke at vi skal stoppe all utvikling, men at den må skje på en måte som ikke ødelegger for fremtiden.',
          },
          {
            id: 'b',
            text: 'At vi skal dekke dagens behov uten å ødelegge for fremtidige generasjoner',
            isCorrect: true,
            feedback: 'Riktig! Dette er kjernen i Brundtland-kommisjonens definisjon fra 1987.',
          },
          {
            id: 'c',
            text: 'At bare rike land skal ta miljøhensyn',
            isCorrect: false,
            feedback: 'Feil. Bærekraftig utvikling gjelder alle land, men med ulikt ansvar basert på kapasitet og historiske utslipp.',
          },
          {
            id: 'd',
            text: 'At miljøet alltid er viktigere enn økonomi og mennesker',
            isCorrect: false,
            feedback: 'Feil. Bærekraftig utvikling handler om balansen mellom miljø, økonomi og sosiale forhold.',
          },
        ],
        solution: 'Bærekraftig utvikling handler om å møte dagens behov uten å ødelegge mulighetene for fremtidige generasjoner.',
      },
    },

    // ========== TEKST: FNS BÆREKRAFTSMÅL ==========
    {
      id: 'samfunnsfag-10-3-fn-mal',
      type: 'text',
      content: `## FNs bærekraftsmål

I 2015 vedtok FNs 193 medlemsland **17 bærekraftsmål** (*Sustainable Development Goals*, SDG) som skal nås innen 2030. Målene er verdens felles arbeidsplan for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene.

### De 17 målene:
1. Utrydde fattigdom
2. Utrydde sult
3. God helse og livskvalitet
4. God utdanning
5. Likestilling mellom kjønnene
6. Rent vann og gode sanitærforhold
7. Ren energi til alle
8. Anstendig arbeid og økonomisk vekst
9. Industri, innovasjon og infrastruktur
10. Mindre ulikhet
11. Bærekraftige byer og lokalsamfunn
12. Ansvarlig forbruk og produksjon
13. Stoppe klimaendringene
14. Livet i havet
15. Livet på land
16. Fred, rettferdighet og velfungerende institusjoner
17. Samarbeid for å nå målene

### Hvordan henger målene sammen?
Målene er ikke uavhengige av hverandre. Her er noen eksempler:

- **Utdanning (mål 4)** bidrar til **mindre fattigdom (mål 1)** fordi utdannede mennesker har bedre muligheter i arbeidslivet
- **Likestilling (mål 5)** styrker **økonomisk vekst (mål 8)** fordi halvparten av befolkningen får delta fullt ut
- **Ren energi (mål 7)** reduserer **klimaendringer (mål 13)** ved å erstatte fossil energi
- **Bekjempelse av fattigdom (mål 1)** gjør det lettere å ta vare på **miljøet (mål 13, 14, 15)** fordi folk ikke tvinges til å overforbruke naturen for å overleve

### Kritikk av bærekraftsmålene
Ikke alle er enige om at bærekraftsmålene er den beste tilnærmingen:
- **For ambisiøse:** 17 mål med 169 delmål kan være for mange å jobbe med
- **Mangler prioritering:** Alle mål er «like viktige», men i praksis må man ofte velge
- **Vanskelig å måle:** Noen mål er vage og vanskelige å måle konkret
- **Frivillige:** Landene er ikke juridisk forpliktet til å nå målene`,
    },

    // ========== DEFINISJON: KLIMAENDRINGER ==========
    {
      id: 'samfunnsfag-10-3-def-2',
      type: 'definition',
      title: 'Klimaendringer og drivhuseffekten',
      content: `**Klimaendringer** er langvarige endringer i temperatur- og værmønstre på jorden. Selv om klimaet alltid har endret seg naturlig, er dagens klimaendringer i all hovedsak forårsaket av menneskelig aktivitet — særlig utslipp av **klimagasser**.

**Drivhuseffekten:**
Jordens atmosfære inneholder gasser som CO₂ (karbondioksid), metan og lystgass. Disse fungerer som et drivhus: De slipper solstråler inn, men hindrer en del av varmen i å stråle tilbake til verdensrommet. Uten drivhuseffekten ville jorden vært ubeboelig kald (ca. -18°C i gjennomsnitt). Problemet er at menneskelige utslipp **forsterker** drivhuseffekten og fører til global oppvarming.

**Kilder til klimagassutslipp:**
- Forbrenning av fossil energi (olje, kull, gass) — transport, industri, oppvarming
- Avskoging — fjerner trær som absorberer CO₂
- Landbruk — husdyrhold (metan), kunstgjødsel (lystgass)
- Industriprosesser — sement, stål, kjemikalier

**Konsekvenser av klimaendringene:**
- Stigende havnivå (smelting av isbreer og istyper)
- Mer ekstremvær (flom, tørke, stormer)
- Tap av biologisk mangfold
- Matmangel i sårbare områder
- Klimaflyktninger — mennesker som må flykte fra klimarelaterte katastrofer

**Parisavtalen (2015):**
Verdens land ble enige om å begrense global oppvarming til godt under 2°C, helst 1,5°C, over førindustrielt nivå. Hvert land setter egne utslippsmål.`,
    },

    // ========== EKSEMPEL: VINDKRAFT ==========
    {
      id: 'samfunnsfag-10-3-example-1',
      type: 'example',
      title: 'Eksempel: Interessekonflikten om vindkraft i Norge',
      problem: `Det planlegges et stort vindkraftverk i et fjellområde i Nord-Norge. Området brukes av reindriftssamer og er populært blant turister. Hvilke interessekonflikter oppstår, og hvilke bærekraftdimensjoner er involvert?`,
      solution: `**Aktører og deres interesser:**

**For vindkraft:**
- **Energiselskaper:** Vindkraft er lønnsomt og etterspurt. Investeringer kan gi god avkastning.
- **Staten/klimapolitikere:** Norge trenger mer fornybar energi for å nå klimamålene og erstatte fossil energi.
- **Kommunen:** Vindkraft kan gi arbeidsplasser, skatteinntekter og nettleie som kommer lokalsamfunnet til gode.
- **Globalt perspektiv:** Ren energi bidrar til å redusere klimautslipp (mål 7 og 13).

**Mot vindkraft:**
- **Reindriftssamer:** Vindturbiner og veier forstyrrer reinens trekkruter og beiteområder. Dette truer en tradisjonell næring og samisk kultur (urfolksrettigheter).
- **Naturvernere:** Vindturbiner dreper fugler og insekter, ødelegger uberørt natur og forstyrrer økosystemer.
- **Turister og hyttefolk:** Vindturbiner gir støy og ødelegger landskapet som tiltrekker besøkende.
- **Lokalbefolkning:** Ikke alle i kommunen ønsker vindkraft, selv om kommunestyret sier ja.

**Bærekraftdimensjonene i konflikt:**
- **Miljø vs. miljø:** Ren energi (bra for klima) vs. naturødeleggelse (dårlig for biologisk mangfold)
- **Økonomi vs. sosial:** Inntekter og arbeidsplasser vs. samiske rettigheter og kulturvern
- **Kort sikt vs. lang sikt:** Umiddelbare inntekter vs. langsiktige konsekvenser for natur og kultur

**Konklusjon:**
Det finnes ingen enkel løsning. Denne typen interessekonflikt viser at bærekraftig utvikling handler om vanskelige avveininger der ulike verdier og hensyn står mot hverandre.`,
    },

    // ========== OPPGAVE 2: DIMENSJONER ==========
    {
      id: 'samfunnsfag-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-2',
        number: '3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'De tre dimensjonene av bærekraftig utvikling henger sammen.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi et eksempel på hvordan miljøødeleggelse kan påvirke sosial bærekraft.',
            solution: 'Eksempel: Avskoging i utviklingsland kan føre til at lokale samfunn mister matgrunnlaget, rent vann og leveveier. Tørke og flom som følge av klimaendringer rammer fattige hardest, noe som øker ulikhet og fattigdom.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på hvordan fattigdom kan føre til miljøproblemer.',
            solution: 'Eksempel: Fattige bønder i regnskogen kan bli tvunget til å hugge ned trær for å dyrke mat (slash-and-burn). De har ikke råd til bærekraftige alternativer. Mangel på utdanning og teknologi gjør at forurensende metoder brukes.',
          },
          {
            label: 'c',
            task: 'Forklar hvorfor alle tre dimensjonene må være i balanse for at utvikling skal være bærekraftig.',
            solution: 'Hvis vi kun fokuserer på økonomi, kan vi ødelegge miljøet og skape ulikhet. Hvis vi kun fokuserer på miljø, kan det gå utover fattige som trenger utvikling. Hvis vi kun fokuserer på sosiale forhold, kan vi ignorere miljøproblemer som ødelegger livsgrunnlaget. Balanse er nødvendig fordi dimensjonene påvirker hverandre.',
          },
        ],
        hints: ['Tenk på konkrete eksempler der dimensjonene henger sammen.'],
        solution: 'De tre dimensjonene påvirker hverandre gjensidig: miljøproblemer forsterker sosiale problemer, og sosiale problemer kan forverre miljøet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: NORGE SOM OLJENASJON ==========
    {
      id: 'samfunnsfag-10-3-oljenasjon',
      type: 'text',
      content: `## Norges dobbeltrolle: Oljenasjon og miljønasjon

Norge befinner seg i en unik posisjon: Vi er et av verdens rikeste land, mye takket være **olje- og gassindustrien**. Samtidig ønsker vi å være en pådriver for **klimahandling** internasjonalt. Denne dobbeltrolle skaper debatt.

### Oljens betydning for Norge
- Olje- og gassindustrien har bidratt enormt til norsk velstand
- Oljefondet (Statens pensjonsfond utland) er verdens største statlige investeringsfond, med verdier på over 17 000 milliarder kroner
- Industrien sysselsetter titusenvis av mennesker direkte og indirekte
- Oljeinntektene finansierer velferdsstaten — sykehus, skoler, pensjoner

### Klimautfordringen
- Norge er en stor produsent av fossil energi som bidrar til klimagassutslipp
- Oljen og gassen Norge eksporterer, forårsaker utslipp i andre land
- FNs klimapanel (IPCC) sier at fossil energibruk må reduseres kraftig for å nå klimamålene
- Klimaendringene rammer allerede sårbare land og mennesker

### Ulike standpunkter i debatten
**De som vil fortsette med olje:**
- Oljenæringen skaper arbeidsplasser og velstand
- Verden trenger energi, og det tar tid å bygge ut fornybar energi
- Norsk olje og gass har lavere utslipp per enhet enn mange andre produsenters
- Inntektene kan investeres i grønn omstilling

**De som vil slutte med olje:**
- Vi kan ikke produsere fossil energi og samtidig kalle oss en klimaleder
- Oljefondet gir økonomisk sikkerhet selv uten ny produksjon
- Norge har gode forutsetninger for fornybar energi (vann, vind)
- Fortsatt oljeproduksjon gir signal om at fossilt er greit

**De som vil ha gradvis omstilling:**
- En brå stopp ville rammet mange arbeidsplasser og lokalsamfunn
- Men vi må sette en slutdato og trappe ned planmessig
- Investeringer i ny teknologi og nye næringer er nødvendig
- Kompetansen fra oljenæringen kan overføres til fornybar energi

Denne debatten handler i bunn og grunn om **kortsiktige økonomiske interesser vs. langsiktig miljøansvar** — et klassisk dilemma i bærekraftig utvikling.`,
    },

    // ========== OPPGAVE 3: OLJEKONFLIKTEN ==========
    {
      id: 'samfunnsfag-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-3',
        number: '3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norges rolle som oljenasjon og klimanasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med at Norge har en «dobbeltrolle» i klimaspørsmålet.',
            solution: 'Norge er en stor produsent av olje og gass (fossil energi som forårsaker klimagassutslipp), samtidig som landet ønsker å være en global leder i klimapolitikk og satser på fornybar energi. Disse to rollene kan virke motstridende.',
          },
          {
            label: 'b',
            task: 'Gi to argumenter for og to argumenter mot å slutte med oljeproduksjon i Norge.',
            solution: 'For å slutte: Oljeproduksjon bidrar til klimaendringer, og Norge har råd til omstilling med Oljefondet i ryggen. Mot å slutte: Det vil koste mange arbeidsplasser, og andre land vil produsere oljen i stedet (med høyere utslipp per enhet).',
          },
          {
            label: 'c',
            task: 'Hva mener du Norge bør gjøre? Begrunn svaret ditt.',
            solution: 'En god besvarelse viser at eleven har vurdert ulike perspektiver og begrunner sitt standpunkt med relevante argumenter.',
          },
        ],
        hints: ['Husk å se saken fra flere sider.', 'Tenk på både kortsiktige og langsiktige konsekvenser.'],
        solution: 'Oljekonflikten illustrerer spenningen mellom kortsiktig økonomi og langsiktig klimaansvar. Det finnes gode argumenter på begge sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: RESSURSFORVALTNING ==========
    {
      id: 'samfunnsfag-10-3-def-3',
      type: 'definition',
      title: 'Fornybare og ikke-fornybare ressurser',
      content: `**Naturressurser** er materialer og energi fra naturen som mennesker bruker.

**Fornybare ressurser** fornyer seg selv over tid — forutsatt at vi ikke overutnytter dem:
- Solenergi, vindenergi, vannkraft
- Skog (hvis vi planter like mye som vi hogger)
- Fisk (hvis vi ikke overfisker)
- Matjord (hvis vi driver bærekraftig landbruk)

**Ikke-fornybare ressurser** finnes i begrenset mengde og kan ikke fornyes i menneskelig tidsskala:
- Olje, kull og naturgass (fossile brensler)
- Metaller og mineraler
- Fosfat (viktig for kunstgjødsel)
- Grunnvann i tørre områder (hvis det brukes raskere enn det fylles opp)

**Overforbruk av ressurser:**
Vi bruker i dag ressurser som om vi hadde **1,7 jordkloder**. Det betyr at vi tærer på naturens reserver raskere enn de fornyes. «Earth Overshoot Day» markerer dagen da vi har brukt opp årets «budsjett» av fornybare ressurser. I 2024 falt denne dagen i august — det betyr at vi brukte resten av året på å «låne» fra fremtiden.

**Sirkulær økonomi:**
En løsning er å gå fra en **lineær økonomi** (bruk og kast) til en **sirkulær økonomi** der produkter designes for gjenbruk, reparasjon og resirkulering, slik at avfall minimeres.`,
    },

    // ========== EKSEMPEL: DIN TELEFON ==========
    {
      id: 'samfunnsfag-10-3-example-2',
      type: 'example',
      title: 'Eksempel: Miljøavtrykket til smarttelefonen din',
      problem: `En smarttelefon inneholder over 60 forskjellige grunnstoffer, blant annet kobolt, litium, gull og sjeldne jordarter. Hva er det miljømessige og sosiale fotavtrykket til en telefon?`,
      solution: `**Livsløpet til en smarttelefon:**

**1. Utvinning av råmaterialer**
- Kobolt (til batteri): Ofte utvunnet i Kongo, noen ganger av barn under farlige forhold
- Litium (til batteri): Utvinnes i Chile og Australia, krever store mengder vann
- Sjeldne jordarter (til skjerm og elektronikk): Utvinnes hovedsakelig i Kina med store miljøkonsekvenser
- Gull, tinn, wolfram (til elektronikk): Noen mineraler er «konfliktmineraler» som finansierer væpnede grupper

**2. Produksjon**
- Fabrikkene ligger hovedsakelig i Kina, Vietnam og India
- Energikrevende produksjon med store CO₂-utslipp
- Arbeidsforhold som noen ganger bryter menneskerettighetene

**3. Transport**
- Komponenter fraktes over hele verden med skip og fly
- Utslipp fra global transport

**4. Bruk**
- Strømforbruk over levetiden
- Gjennomsnittlig brukstid: 2-3 år

**5. Avfall**
- Bare 20 % av e-avfall resirkuleres globalt
- Mye havner på søppeldynger i utviklingsland
- Giftige stoffer kan forurense jord og grunnvann

**Hva kan du gjøre?**
- Bruke telefonen lenger (reparere i stedet for å erstatte)
- Kjøpe brukt eller refurbished
- Levere gammel telefon til gjenvinning
- Velge merker som tar ansvar for hele verdikjeden`,
    },

    // ========== OPPGAVE 4: FORBRUK ==========
    {
      id: 'samfunnsfag-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-4',
        number: '3.4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forbruk og bærekraft i hverdagen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på fornybare og ikke-fornybare ressurser? Gi to eksempler på hver.',
            solution: 'Fornybare ressurser fornyer seg over tid (solenergi, fisk), mens ikke-fornybare finnes i begrenset mengde og kan ikke fornyes (olje, kobolt).',
          },
          {
            label: 'b',
            task: 'Hva menes med «sirkulær økonomi»?',
            solution: 'En økonomi der produkter designes for gjenbruk, reparasjon og resirkulering, slik at avfall minimeres. I motsetning til lineær økonomi (ta-bruk-kast).',
          },
          {
            label: 'c',
            task: 'List opp fem ting du kan gjøre i hverdagen for å leve mer bærekraftig.',
            solution: 'Eksempler: Bruke ting lenger, kjøpe brukt, velge kollektivtransport/sykkel, spise mindre kjøtt, resirkulere, spare strøm, velge produkter med lavt miljøavtrykk, unngå unødvendig plastbruk, reparere i stedet for å kaste.',
          },
        ],
        hints: ['Tenk på ditt eget forbruksmønster.'],
        solution: 'Bærekraftig forbruk handler om å bruke ressurser mer effektivt og redusere avfall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: RETTFERDIGHET ==========
    {
      id: 'samfunnsfag-10-3-rettferdighet',
      type: 'text',
      content: `## Klimarettferdighet — hvem bærer ansvaret?

Klimaendringene rammer ikke alle likt. De som har minst ansvar for problemet, rammes ofte hardest.

### Hvem slipper ut mest?
De rike, industrialiserte landene har stått for mesteparten av de historiske klimagassutslippene. Europa og Nord-Amerika har sluppet ut CO₂ i over 200 år gjennom industrialisering. Samtidig øker utslippene i land som Kina og India raskt.

Men hvis vi ser på **utslipp per person**, har rike land langt høyere utslipp. En gjennomsnittlig nordmann slipper ut mange ganger mer CO₂ enn en gjennomsnittlig person i Bangladesh eller Etiopia.

### Hvem rammes hardest?
- **Øystater** som Tuvalu og Marshalløyene trues med å forsvinne på grunn av stigende havnivå
- **Afrikanske land** opplever tørke, matmangel og vannkrise
- **Sørøst-Asia** rammes av hyppigere og kraftigere orkaner og flom
- **Arktiske områder** opplever at isen smelter, noe som truer urfolk og dyreliv

Disse landene og områdene har bidratt minst til problemet, men mangler ofte ressursene til å beskytte seg.

### Klimarettferdighet
Begrepet **klimarettferdighet** handler om at de som har forårsaket problemet (rike land) har et særlig ansvar for å:
- Kutte sine egne utslipp kraftig
- Hjelpe fattige land med å tilpasse seg klimaendringene
- Bidra med finansiering til grønn utvikling i utviklingsland
- Akseptere at fattige land har rett til utvikling

Under klimatoppmøtet COP27 i 2022 ble det vedtatt et «tap og skade»-fond der rike land skal betale for klimaskader i sårbare utviklingsland. Detaljene om hvordan fondet skal fungere, debatteres fortsatt.`,
    },

    // ========== OPPGAVE 5: KLIMARETTFERDIGHET ==========
    {
      id: 'samfunnsfag-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-5',
        number: '3.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «klimarettferdighet»?',
        options: [
          {
            id: 'a',
            text: 'At alle land skal slippe ut like mye CO₂',
            isCorrect: false,
            feedback: 'Feil. Klimarettferdighet handler ikke om like utslipp, men om rettferdig fordeling av ansvar og byrder.',
          },
          {
            id: 'b',
            text: 'At de som har forårsaket mest klimaendringer har størst ansvar for å løse problemet',
            isCorrect: true,
            feedback: 'Riktig! Klimarettferdighet handler om at rike land som har bidratt mest til problemet, har et særlig ansvar.',
          },
          {
            id: 'c',
            text: 'At fattige land ikke skal få lov til å utvikle seg',
            isCorrect: false,
            feedback: 'Feil. Klimarettferdighet anerkjenner at fattige land har rett til utvikling.',
          },
          {
            id: 'd',
            text: 'At klimaendringene er en myte',
            isCorrect: false,
            feedback: 'Feil. Klimaendringene er vitenskapelig dokumentert og anerkjent av verdens forskere.',
          },
        ],
        solution: 'Klimarettferdighet betyr at de landene som har bidratt mest til klimaproblemet, også har størst ansvar for å løse det og hjelpe de som rammes hardest.',
      },
    },

    // ========== OPPGAVE 6: BÆREKRAFTSMÅL ==========
    {
      id: 'samfunnsfag-10-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-6',
        number: '3.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'FNs bærekraftsmål henger sammen.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg tre av FNs bærekraftsmål og forklar hvordan de henger sammen med hverandre.',
            solution: 'Eksempel: God utdanning (mål 4) gir mennesker kunnskap og muligheter, som reduserer fattigdom (mål 1). Utdannede mennesker tar bedre valg for helse (mål 3) og klima (mål 13). Slik forsterker målene hverandre.',
          },
          {
            label: 'b',
            task: 'Kan to bærekraftsmål noen ganger komme i konflikt med hverandre? Gi et eksempel.',
            solution: 'Eksempel: Økonomisk vekst (mål 8) kan komme i konflikt med klimahandling (mål 13) hvis veksten er basert på fossil energi. Livet på land (mål 15) kan stå i spenning med ren energi (mål 7) når vindkraft ødelegger naturområder.',
          },
        ],
        hints: ['Tenk på årsak-virkning-sammenhenger mellom målene.'],
        solution: 'Bærekraftsmålene henger sammen og kan både forsterke og motsi hverandre. Det krever helhetlig tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: MOTEINDUSTRIEN ==========
    {
      id: 'samfunnsfag-10-3-example-3',
      type: 'example',
      title: 'Eksempel: «Fast fashion» — klær og bærekraft',
      problem: `Moteindustrien er en av verdens mest forurensende næringer. Hva er problemet med «fast fashion», og finnes det alternativer?`,
      solution: `**Hva er «fast fashion»?**
Fast fashion er billige klær som produseres raskt for å følge motetrender. Store kjeder lanserer nye kolleksjoner nesten ukentlig. Resultatet er at vi kjøper mer klær enn noen gang — og kaster dem raskere.

**Miljøproblemene:**
- Moteindustrien står for ca. 10 % av globale CO₂-utslipp
- Produksjon av én bomullsskjorte krever ca. 2700 liter vann
- Farging av tekstiler er den nest største forurenseren av vann globalt
- 85 % av alle tekstiler havner på søppeldynger hvert år
- Syntetiske stoffer (polyester) frigjør mikroplast ved vask

**Sosiale problemer:**
- Lav lønn og dårlige arbeidsforhold i produksjonsland
- Barnearbeid i bomullsproduksjon
- Rana Plaza-ulykken i Bangladesh (2013): 1134 fabrikkarbeidere omkom da en textilfabrikk kollapset

**Alternativer:**
- Kjøpe brukt (gjenbruksbutikker, Finn.no, Tise)
- Velge kvalitet over kvantitet (klær som varer lenger)
- Reparere og sy om klær
- Velge merker med bærekraftig produksjon
- Klesbytte med venner
- Leie klær til spesielle anledninger

**Individ vs. system:**
Mens individuelle valg er viktige, mener mange at det trengs systemendringer — som strengere krav til produsenter, avgifter på forurensning, og forbud mot å kaste usolgte klær.`,
    },

    // ========== OPPGAVE 7: INTERESSEKONFLIKT ==========
    {
      id: 'samfunnsfag-10-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-7',
        number: '3.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en av følgende interessekonflikter og analyser den:',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en interessekonflikt: (1) Oljeboring i Lofoten, (2) utbygging av hyttefelt i fjellet, eller (3) oppdrettsnæringen langs kysten.',
            solution: 'Eleven velger en av konfliktene.',
          },
          {
            label: 'b',
            task: 'Beskriv minst tre ulike aktører/interessenter og deres standpunkt.',
            solution: 'For oljeboring i Lofoten: Oljeselskaper (vil bore for profitt), fiskere (frykter forurensning av fiskefelter), miljøorganisasjoner (vil bevare naturen), lokalpolitikere (arbeidsplasser vs. turisme), turistnæringen (frykter at olje ødelegger attraksjonsverdi).',
          },
          {
            label: 'c',
            task: 'Forklar hvilke bærekraftsdimensjoner (miljø, økonomi, sosial) som er involvert.',
            solution: 'Alle tre dimensjoner er typisk involvert: Miljø (naturvern, forurensning), økonomi (arbeidsplasser, inntekter, turisme), sosial (lokalsamfunn, tradisjonelle næringer, urfolksrettigheter).',
          },
          {
            label: 'd',
            task: 'Foreslå et mulig kompromiss.',
            solution: 'Kompromiss bør ta hensyn til alle parters interesser og vise forståelse for at ulike verdier må veies mot hverandre.',
          },
        ],
        hints: ['Husk at det sjelden finnes perfekte løsninger i interessekonflikter.'],
        solution: 'En god analyse identifiserer aktører, forklarer ulike standpunkter, og viser hvordan bærekraftdimensjonene er involvert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NOTAT ==========
    {
      id: 'samfunnsfag-10-3-note-1',
      type: 'note',
      title: 'Individ vs. system',
      content: `Det er viktig å skille mellom individuelt ansvar og systemansvar:

**Individuelle valg** — som å resirkulere, velge kollektivtransport og kjøpe brukt — er meningsfulle og signaliserer verdier.

Men **systemendringer** — som strengere miljølover, karbonavgifter, internasjonale avtaler og offentlig transport — har langt større effekt.

Det er en pågående debatt om hvem som har størst ansvar: enkeltpersoner eller store selskaper og myndigheter. Mange mener at fokus på individuelle valg kan avlede oppmerksomheten fra behovet for systemendringer. Andre mener at individuelle valg driver etterspørsel og skaper press for endring ovenfra.

Sannheten er trolig at vi trenger **begge deler** — individuelle valg og systemendringer som forsterker hverandre.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-3-oppsummering',
      type: 'text',
      content: `## Oppsummering: Bærekraftig utvikling

**Nøkkelbegreper:**
- **Bærekraftig utvikling:** Dekke dagens behov uten å ødelegge for fremtidige generasjoner
- **De tre dimensjonene:** Miljømessig, økonomisk og sosial bærekraft
- **Brundtland-kommisjonen:** Norsk-ledet FN-kommisjon som definerte bærekraftig utvikling i 1987
- **FNs bærekraftsmål (SDG):** 17 mål som skal nås innen 2030
- **Drivhuseffekten:** Naturlig fenomen som forsterkes av menneskelige utslipp
- **Parisavtalen:** Global klimaavtale fra 2015
- **Fornybare ressurser:** Ressurser som fornyer seg (sol, vind, fisk)
- **Ikke-fornybare ressurser:** Ressurser som finnes i begrenset mengde (olje, metaller)
- **Sirkulær økonomi:** Gjenbruk, reparasjon og resirkulering i stedet for bruk-og-kast
- **Klimarettferdighet:** At de som har forårsaket mest klimaendringer, bærer størst ansvar
- **Interessekonflikt:** Når ulike aktører har motstridende interesser i en sak`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-8',
        number: '3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Er det rettferdig at fattige land skal begrense sin utvikling for å redde klimaet, når rike land har forurenset i over 200 år?»',
        hints: [
          'Se saken fra begge sider.',
          'Tenk på historisk ansvar, nåværende utslipp, og retten til utvikling.',
          'Vurder mulige kompromisser og løsninger.',
        ],
        solution: 'Drøftingen bør vurdere historisk ansvar (rike land har sluppet ut mest over tid), nåværende utslipp (Kina og India er store utslippere nå), retten til utvikling for fattige land, og mulige løsninger som klimafinansiering, teknologioverføring og differensiert ansvar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-9',
        number: '3.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Er det mest effektivt å endre individuell atferd (spise mindre kjøtt, fly mindre, kjøpe brukt) eller å kreve systemendringer (strenge miljølover, forbud, avgifter) for å oppnå bærekraftig utvikling?',
        hints: [
          'Tenk på fordeler og ulemper ved begge tilnærminger.',
          'Kan de kombineres?',
        ],
        solution: 'En god drøfting viser at individuelle valg og systemendringer virker på ulike nivåer og kan forsterke hverandre. Individuelle valg kan skape etterspørsel og politisk press, mens systemendringer skaper rammene som gjør bærekraftige valg lettere for alle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'samfunnsfag-10-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-10',
        number: '3.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektoppgave: Velg én av FNs bærekraftsmål og undersøk: Hva er situasjonen i dag? Hva gjør Norge for å nå dette målet? Hva gjøres internasjonalt? Er vi på vei til å nå målet innen 2030?',
        hints: ['Bruk troverdige kilder (FN, SSB, regjeringen.no).'],
        solution: 'Svaret bør basere seg på oppdatert informasjon fra troverdige kilder, og vise at eleven kan vurdere fremgang kritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Globalisering
// LK20: Utforske korleis handel, økonomiske strukturar og arbeidsforhold heng
//        saman med ressursfordeling og maktforhold
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_4: TextbookChapter = {
  id: 'samfunnsfag-10-4',
  courseId: 'samfunnsfag-10',
  chapterNumber: '4',
  title: 'Globalisering',
  description: 'Forstå globaliseringens drivkrefter og konsekvenser — økonomisk, kulturelt og politisk — og drøft ulikhet, verdikjeder og maktforhold i en globalisert verden.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske korleis handel, økonomiske strukturar og arbeidsforhold heng saman med ressursfordeling og maktforhold',
    'utforske og beskrive korleis ulike politiske system er organiserte',
    'drøfte kva det vil seie å vere medborgar, og korleis ulike former for medborgarskap fungerer i ulike samfunn',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-4-intro',
      type: 'text',
      content: `## En verden uten grenser?

Tenk deg en helt vanlig morgen. Du våkner av en alarm på telefonen din (laget i Kina med mineraler fra Kongo). Du tar på deg en t-skjorte (sydd i Bangladesh av bomull fra India). Du spiser frokost med kaffe (dyrket i Colombia) og brød (bakt med hvete fra Russland). Du sjekker sosiale medier (utviklet i USA) og ser nyheter fra hele verden.

Uten at du tenker over det, er du allerede **koblet til hundrevis av land** — bare gjennom morgenrutinen din.

Dette er **globalisering**: prosessen der verden blir stadig mer sammenkoblet gjennom handel, teknologi, kultur og politikk. Mennesker, varer, penger og ideer beveger seg raskere og friere over landegrensene enn noensinne.

Men globalisering er ikke bare positivt. Den skaper rikdom — men også ulikhet. Den gir oss tilgang til hele verden — men kan true lokale kulturer. Den kobler oss sammen — men gjør oss også sårbare for kriser som sprer seg globalt.

I dette kapittelet skal du lære om:
- Hva globalisering er og hva som driver den
- Økonomisk, kulturell og politisk globalisering
- Globale verdikjeder og arbeidsforhold
- Hvordan globalisering påvirker ulikhet og maktforhold
- Fordeler og ulemper ved globalisering
- Norges plass i den globaliserte verden`,
    },

    // ========== DEFINISJON: GLOBALISERING ==========
    {
      id: 'samfunnsfag-10-4-def-1',
      type: 'definition',
      title: 'Globalisering',
      content: `**Globalisering** er prosessen der verden blir stadig mer sammenkoblet gjennom økt flyt av varer, tjenester, kapital, mennesker, informasjon og ideer over landegrensene.

**Drivkrefter bak globaliseringen:**

**1. Teknologi**
- Internett og sosiale medier gjør global kommunikasjon mulig i sanntid
- Billig flytransport gjør det enkelt å reise og frakte varer
- Containerskip har revolusjonert internasjonal handel
- Digitale betalingssystemer gjør global handel enkel

**2. Politiske vedtak**
- Frihandelsavtaler som fjerner toll og handelshindringer
- Internasjonale organisasjoner (WTO, EU, ASEAN) som fremmer samarbeid
- Deregulering av finansmarkeder
- Åpning av tidligere lukkede økonomier (Kina fra 1978, Østblokken etter 1989)

**3. Økonomiske drivkrefter**
- Selskaper søker lavere produksjonskostnader (billigere arbeidskraft, svakere regulering)
- Investorer søker avkastning globalt
- Forbrukere ønsker billige varer og stort utvalg
- Stordriftsfordeler ved å produsere for et globalt marked

**4. Kulturelle drivkrefter**
- Nyhets- og underholdningsmedier med global rekkevidde
- Sosiale medier skaper globale fellesskap
- Engelsk som globalt fellesspråk
- Migrasjon og turisme sprer kulturer`,
    },

    // ========== TEKST: ØKONOMISK GLOBALISERING ==========
    {
      id: 'samfunnsfag-10-4-okonomi',
      type: 'text',
      content: `## Økonomisk globalisering

Økonomisk globalisering handler om at verdens økonomier er blitt tett sammenvevd gjennom handel, investeringer og finansmarkeder.

### Internasjonal handel
Verden handler mer med hverandre enn noen gang. Norge eksporterer olje, gass, fisk og tjenester, og importerer alt fra biler og elektronikk til klær og mat. Ingen land er selvforsynte — alle er avhengige av handel.

### Flernasjonale selskaper
Store selskaper som Apple, Samsung, Nestlé og H&M opererer i mange land samtidig. De kan ha hovedkontor i ett land, produksjon i et annet, og kunder over hele verden. Noen av disse selskapene har økonomier som er større enn mange lands BNP (bruttonasjonalprodukt).

### Globale verdikjeder
En **verdikjede** beskriver alle stegene fra råvare til ferdig produkt. I en globalisert verden er disse kjedene spredt over mange land:
- Råvarer utvinnes i ett land
- Delene produseres i et annet
- Montering skjer i et tredje
- Design og markedsføring i et fjerde
- Salg i hele verden

### Frihandel vs. proteksjonisme
Det er en pågående debatt om hvordan land bør forholde seg til internasjonal handel:

**Frihandel** betyr at varer og tjenester kan handles fritt mellom land uten toll eller andre hindringer. Tilhengere mener dette gir lavere priser, mer effektiv produksjon og økonomisk vekst.

**Proteksjonisme** betyr at et land beskytter sin egen industri mot utenlandsk konkurranse gjennom toll, kvoter eller subsidier. Tilhengere mener dette beskytter arbeidsplasser og nasjonal sikkerhet.

De fleste land har en blanding av frihandel og proteksjonisme — noen sektorer er åpne for konkurranse, mens andre (som norsk landbruk) er beskyttet.`,
    },

    // ========== OPPGAVE 1: FLERVALG ==========
    {
      id: 'samfunnsfag-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-1',
        number: '4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er IKKE en drivkraft bak globaliseringen?',
        options: [
          {
            id: 'a',
            text: 'Utviklingen av internett og digital teknologi',
            isCorrect: false,
            feedback: 'Feil. Teknologi er en av de viktigste drivkreftene bak globalisering.',
          },
          {
            id: 'b',
            text: 'Frihandelsavtaler som fjerner handelshindringer',
            isCorrect: false,
            feedback: 'Feil. Politiske vedtak om frihandel er en viktig drivkraft.',
          },
          {
            id: 'c',
            text: 'At alle land har nøyaktig like mye ressurser',
            isCorrect: true,
            feedback: 'Riktig! Landene har ulike ressurser, og nettopp dette er en grunn til at de handler med hverandre.',
          },
          {
            id: 'd',
            text: 'At selskaper søker billigere produksjon i andre land',
            isCorrect: false,
            feedback: 'Feil. Jakten på lavere kostnader er en viktig økonomisk drivkraft.',
          },
        ],
        solution: 'Land har ulike ressurser og forutsetninger — det er nettopp forskjellene som driver handel og globalisering.',
      },
    },

    // ========== EKSEMPEL: VERDIKJEDE ==========
    {
      id: 'samfunnsfag-10-4-example-1',
      type: 'example',
      title: 'Eksempel: Verdikjeden bak en iPhone',
      problem: `En iPhone er et godt eksempel på økonomisk globalisering. Hvordan ser verdikjeden ut, og hvordan fordeles verdien?`,
      solution: `**iPhones globale verdikjede:**

**Design og utvikling:** USA (Apple i California)
- Apple designer produktet og utvikler programvaren
- Dette er den mest verdifulle delen av kjeden

**Komponenter fra hele verden:**
- Prosessorbrikke: Taiwan (TSMC)
- Skjerm: Sør-Korea (Samsung/LG)
- Kamerasensorer: Japan (Sony)
- Minne: Sør-Korea/Japan
- Sjeldne jordarter: Kina, Kongo

**Montering:** Kina (Foxconn/Pegatron)
- Hundretusener av arbeidere setter sammen delene
- Relativt lave lønninger sammenlignet med vestlige land

**Transport:** Global
- Ferdig monterte telefoner fraktes med fly og skip til hele verden

**Salg og markedsføring:** Globalt
- Apple Store-butikker, nettbutikker og forhandlere i over 175 land

**Verdifordelingen:**
Her blir det interessant. En iPhone som selges for 10 000 kroner har omtrent denne fordelingen:
- Apple (USA): ~60 % av verdien (design, programvare, markedsføring, profitt)
- Komponentleverandører (diverse land): ~30 %
- Montering i Kina: ~3-5 %
- Transport og distribusjon: resten

**Hva dette viser:**
Den **største verdien** skapes i design, merkevare og teknologiutvikling — ikke i selve produksjonen. Arbeiderne som fysisk lager telefonen, får minst av verdien. Dette illustrerer globale **maktforhold** i økonomien.`,
    },

    // ========== OPPGAVE 2: VERDIKJEDER ==========
    {
      id: 'samfunnsfag-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-2',
        number: '4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Globale verdikjeder og maktforhold.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva en global verdikjede er, med et eksempel.',
            solution: 'En global verdikjede beskriver alle stegene fra råvare til ferdig produkt, fordelt over flere land. For eksempel: Bomull dyrkes i India, spinnes til garn i Bangladesh, veves til stoff i Kina, sys til klær i Vietnam, og selges i Norge.',
          },
          {
            label: 'b',
            task: 'Hvorfor blir mest av verdien skapt i rike land, selv om produksjonen skjer i fattigere land?',
            solution: 'Fordi de mest verdifulle delene av kjeden — design, teknologiutvikling, merkevarebygging, markedsføring og salg — utføres i rike land. Disse aktivitetene krever høy kompetanse og teknologi, og gir høyere profitt enn selve produksjonen.',
          },
          {
            label: 'c',
            task: 'Hva sier verdifordelingen i en global verdikjede om maktforholdene i verdensøkonomien?',
            solution: 'Den viser at rike land med teknologi, kapital og merkevarer sitter med størst makt og fortjeneste. Fattige land som leverer arbeidskraft og råvarer, har svakere forhandlingsposisjon og får mindre av verdiskapingen, selv om de gjør det fysiske arbeidet.',
          },
        ],
        hints: ['Tenk på hvem som tjener mest og hvorfor.'],
        solution: 'Globale verdikjeder viser at makt og verdiskaping er ujevnt fordelt — rike land kontrollerer de mest verdifulle delene av kjeden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KULTURELL GLOBALISERING ==========
    {
      id: 'samfunnsfag-10-4-def-2',
      type: 'definition',
      title: 'Kulturell globalisering',
      content: `**Kulturell globalisering** handler om spredning av ideer, verdier, livsstiler og kulturelle uttrykk over landegrensene.

**Uttrykk for kulturell globalisering:**
- Filmer og serier fra Hollywood og Netflix som ses over hele verden
- K-pop (koreansk popmusikk) som er populært blant ungdom globalt
- McDonald's, Starbucks og Coca-Cola i nesten alle land
- Sosiale medier (TikTok, Instagram, YouTube) som skaper globale trender
- Engelsk som dominerende språk i vitenskap, teknologi og populærkultur
- Moter og trender som sprer seg raskt via sosiale medier

**To motstridende tendenser:**

**Kulturell homogenisering (ensretting):**
Globalisering kan føre til at kulturer blir mer like hverandre. Når alle ser de samme filmene, hører den samme musikken og spiser den samme maten, kan lokale tradisjoner og kulturuttrykk bli fortrengt. Noen kaller dette **amerikanisering** fordi amerikansk kultur er den mest dominerende i global underholdning og forbrukskultur.

**Kulturell hybridisering (blanding):**
Samtidig kan globalisering føre til nye, spennende kulturuttrykk der ulike tradisjoner blandes. K-pop kombinerer koreansk og vestlig musikk. Japansk anime inspirerer vestlige filmskapere. Norsk black metal har fans over hele verden. Sushi finnes på norske matbutikker, og taco er blitt «norsk fredagsmat».

**Kulturell motstand:**
Noen reagerer på kulturell globalisering med å forsterke sin egen kulturelle identitet. For eksempel:
- Frankrike har kvoter for fransk musikk på radio
- Island har en streng navnepolitikk for å bevare islandsk språk
- Urfolk kjemper for å bevare sine språk og tradisjoner`,
    },

    // ========== OPPGAVE 3: KULTUR ==========
    {
      id: 'samfunnsfag-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-3',
        number: '4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kulturell globalisering i din egen hverdag.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi fem eksempler på kulturell globalisering fra din egen hverdag (film, musikk, mat, klær, sosiale medier).',
            solution: 'Eksempler kan være: Ser amerikanske serier på Netflix, lytter til K-pop eller britisk popmusikk, spiser sushi eller taco, bruker TikTok (kinesisk), har klær fra internasjonale merkevarer, spiller spill utviklet i Japan eller USA.',
          },
          {
            label: 'b',
            task: 'Mener du kulturell globalisering er mest positivt eller negativt? Begrunn svaret.',
            solution: 'En god besvarelse viser at eleven ser både fordeler (tilgang til mangfold, nye ideer, forståelse for andre kulturer) og ulemper (tap av lokale tradisjoner, kommersialisering, dominans av vestlig/amerikansk kultur).',
          },
          {
            label: 'c',
            task: 'Forklar forskjellen mellom kulturell homogenisering og kulturell hybridisering.',
            solution: 'Homogenisering: Kulturer blir mer like hverandre, lokale kulturer fortrenges av global (ofte vestlig) kultur. Hybridisering: Kulturer blandes og skaper nye, unike uttrykk — en kreativ prosess der ulike tradisjoner kombineres.',
          },
        ],
        hints: ['Tenk på ditt eget kulturforbruk.'],
        solution: 'Kulturell globalisering gir tilgang til mangfold, men kan også true lokale tradisjoner. Hybridisering skaper nye kulturformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: ULIKHET ==========
    {
      id: 'samfunnsfag-10-4-ulikhet',
      type: 'text',
      content: `## Globalisering og ulikhet

En av de mest omstridte sidene ved globalisering er dens virkning på ulikhet.

### Global ulikhet — hva sier tallene?
Bildet er sammensatt:

**Fattigdom har gått ned:**
I 1990 levde 36 % av verdens befolkning i ekstrem fattigdom (under 2,15 dollar om dagen). I 2024 er dette tallet nede i rundt 8-9 %. Spesielt Kina og Sørøst-Asia har løftet hundrevis av millioner ut av fattigdom gjennom handel og industrialisering.

**Men ulikheten mellom rik og fattig har økt innenfor land:**
I mange land — både rike og fattige — har gapet mellom de rikeste og resten av befolkningen økt. Globaliseringen har vært svært lønnsom for noen (investorer, bedriftseiere, høyt utdannede) og mindre lønnsom for andre (industriarbeidere i rike land som mister jobbene sine til lavkostland).

**Noen tall som illustrerer:**
- De 1 % rikeste i verden eier nesten halvparten av all global rikdom
- De 50 % fattigste eier bare rundt 2 % av all global rikdom
- En tekstilarbeider i Bangladesh tjener kanskje 100-150 kroner om dagen for å sy klær som selges for tusenvis av kroner i Norge

### Hvem vinner og hvem taper?
**Mulige «vinnere» av globaliseringen:**
- Bedriftseiere og investorer i rike land
- Middelklassen i fremvoksende økonomier (Kina, India, Vietnam)
- Forbrukere som får billigere varer
- Mennesker med høy utdanning og teknologikompetanse

**Mulige «tapere» av globaliseringen:**
- Industriarbeidere i rike land som mister jobben til lavkostland
- Småbønder i fattige land som ikke kan konkurrere med subsidiert landbruk fra rike land
- Kulturer og språk som trues av global dominans
- Miljøet, som belastes av økt transport og produksjon

### En viktig nyanse
Det er vanskelig å si at globaliseringen i seg selv skaper ulikhet. Mye avhenger av **politiske valg**: Hvordan fordeles gevinstene? Finnes det sikkerhetsnett for de som taper? Investeres det i utdanning og omstilling? Land med sterke velferdsstater (som de nordiske landene) har klart seg bedre med å fordele godene av globaliseringen enn land med svake sikkerhetsnett.`,
    },

    // ========== EKSEMPEL: TEKSTILINDUSTRIEN ==========
    {
      id: 'samfunnsfag-10-4-example-2',
      type: 'example',
      title: 'Eksempel: Tekstilindustrien i Bangladesh',
      problem: `Bangladesh er verdens nest største eksportør av klær. Millioner av kvinner jobber i tekstilfabrikker. Hvordan illustrerer dette globaliseringens fordeler og ulemper?`,
      solution: `**Bakgrunn:**
Tekstilindustrien i Bangladesh har vokst enormt de siste tiårene og sysselsetter over 4 millioner mennesker, de fleste kvinner fra landsbygda.

**Positive sider:**
- Millioner av kvinner har fått arbeid og egen inntekt
- Kvinners deltakelse i arbeidslivet har økt selvstendighet og status
- Bangladesh har hatt sterk økonomisk vekst
- Fattigdommen har gått ned — fra 44 % i 1991 til under 20 % i dag
- Jenter får mer utdanning fordi familier ser verdien av det

**Negative sider:**
- **Lave lønninger:** Minstelønnen er blant verdens laveste — ofte under levekostnadene
- **Farlige arbeidsforhold:** Rana Plaza-ulykken i 2013 (1134 døde) avslørte livsfarlige fabrikker
- **Lange arbeidsdager:** Mange jobber 10-14 timer daglig, seks dager i uken
- **Svak fagorganisering:** Arbeidere som forsøker å organisere seg, risikerer å miste jobben
- **Barnearbeid:** Selv om det er forbudt, forekommer det
- **Miljøødeleggelser:** Farging av tekstiler forurenser elver og grunnvann

**Maktforholdet:**
Internasjonale merkevarer (H&M, Zara, Nike) har stor makt over fabrikkeierne. De presser prisene ned for å holde sine egne marginer oppe. Fabrikkeierne presser deretter ned lønninger og kutter sikkerhetstiltak. Arbeiderne, som er mest sårbare, ender med å bære den største byrden.

**Hva kan gjøres?**
- Strengere internasjonale regler for arbeidsforhold
- Transparens i verdikjeder (sporbarhet)
- Forbrukere som krever etisk produksjon
- Fagforeninger som kan forhandle for arbeidernes rettigheter
- Sertifiseringsordninger (Fair Trade, etc.)

**Konklusjon:**
Tekstilindustrien i Bangladesh viser globaliseringens doble ansikt: Den har løftet millioner ut av fattigdom, men til en pris som mange mener er for høy.`,
    },

    // ========== OPPGAVE 4: ULIKHET ==========
    {
      id: 'samfunnsfag-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-4',
        number: '4.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er riktig om globaliseringens virkning på fattigdom og ulikhet?',
        options: [
          {
            id: 'a',
            text: 'Globaliseringen har gjort alle fattigere',
            isCorrect: false,
            feedback: 'Feil. Andelen av verdens befolkning som lever i ekstrem fattigdom, har gått kraftig ned de siste tiårene.',
          },
          {
            id: 'b',
            text: 'Globaliseringen har fjernet all ulikhet i verden',
            isCorrect: false,
            feedback: 'Feil. Ulikheten mellom rik og fattig har faktisk økt innenfor mange land, selv om global fattigdom har gått ned.',
          },
          {
            id: 'c',
            text: 'Global fattigdom har gått ned, men ulikheten innenfor mange land har økt',
            isCorrect: true,
            feedback: 'Riktig! Globaliseringen har bidratt til å løfte millioner ut av fattigdom, men gevinstene er ujevnt fordelt.',
          },
          {
            id: 'd',
            text: 'Globaliseringen har bare påvirket rike land',
            isCorrect: false,
            feedback: 'Feil. Globaliseringen påvirker alle land, men på ulike måter.',
          },
        ],
        solution: 'Globaliseringen har bidratt til å redusere ekstrem fattigdom globalt, men ulikheten innenfor mange land har økt.',
      },
    },

    // ========== TEKST: POLITISK GLOBALISERING ==========
    {
      id: 'samfunnsfag-10-4-politisk',
      type: 'text',
      content: `## Politisk globalisering og internasjonalt samarbeid

Politisk globalisering handler om at stater samarbeider gjennom internasjonale organisasjoner og avtaler for å løse felles utfordringer.

### Viktige internasjonale organisasjoner

**FN (De forente nasjoner)**
Verdens største internasjonale organisasjon med 193 medlemsland. FN jobber med fred og sikkerhet, menneskerettigheter, utvikling og humanitær hjelp. Sikkerhetsrådet kan vedta sanksjoner og godkjenne militære aksjoner, men de fem faste medlemmene (USA, Russland, Kina, Frankrike, Storbritannia) har vetorett.

**EU (Den europeiske union)**
Et politisk og økonomisk samarbeid mellom 27 europeiske land. EU har et felles indre marked, felles lovgivning på mange områder, og en felles valuta (euro) i de fleste medlemsland. Norge er ikke medlem, men er tett knyttet gjennom EØS-avtalen.

**NATO (North Atlantic Treaty Organization)**
En militær allianse mellom 32 land (per 2024). Kjernen er artikkel 5: Et angrep på ett medlemsland betraktes som et angrep på alle. Norge er med fra starten i 1949.

**WTO (Verdens handelsorganisasjon)**
Regulerer internasjonal handel og løser handelskonflikter mellom land.

### Norges internasjonale tilknytning
Norge er ikke EU-medlem, men er dypt integrert i det internasjonale systemet:
- **EØS-avtalen:** Gir tilgang til EUs indre marked, men forplikter Norge til å følge EU-regler
- **NATO-medlem:** Bidrar til kollektivt forsvar
- **FN-bidragsyter:** En av verdens største bidragsytere til FN per innbygger
- **Bistand:** Norge gir rundt 1 % av BNI i bistand

### Utfordringer for internasjonalt samarbeid
- **Nasjonal suverenitet:** Land ønsker å bestemme selv, og internasjonale avtaler kan begrense handlefriheten
- **Interessemotsetninger:** Land har ulike interesser og prioriteringer
- **Demokratisk underskudd:** Beslutninger i internasjonale organisasjoner kan oppleves fjerne fra vanlige borgere
- **Vetoretten:** I FNs sikkerhetsråd kan stormakter blokkere tiltak mot sine allierte`,
    },

    // ========== OPPGAVE 5: ORGANISASJONER ==========
    {
      id: 'samfunnsfag-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-5',
        number: '4.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match organisasjonen med riktig beskrivelse:',
        subTasks: [
          {
            label: 'a',
            task: 'FN',
            solution: 'Verdens største internasjonale organisasjon med 193 medlemsland, jobber med fred, sikkerhet og utvikling',
            multipleChoiceOptions: [
              'Verdens største internasjonale organisasjon med 193 medlemsland, jobber med fred, sikkerhet og utvikling',
              'En militær forsvarsallianse mellom vestlige land',
              'Et økonomisk og politisk samarbeid mellom europeiske land',
              'En organisasjon som regulerer internasjonal handel',
            ],
          },
          {
            label: 'b',
            task: 'NATO',
            solution: 'En militær forsvarsallianse der et angrep på ett medlem betraktes som angrep på alle',
            multipleChoiceOptions: [
              'En militær forsvarsallianse der et angrep på ett medlem betraktes som angrep på alle',
              'Verdens største internasjonale organisasjon',
              'En organisasjon som regulerer internasjonal handel',
              'Et samarbeid mellom nordiske land',
            ],
          },
          {
            label: 'c',
            task: 'EU',
            solution: 'Et politisk og økonomisk samarbeid mellom 27 europeiske land med felles indre marked',
            multipleChoiceOptions: [
              'Et politisk og økonomisk samarbeid mellom 27 europeiske land med felles indre marked',
              'En militær forsvarsallianse',
              'Verdens største internasjonale organisasjon',
              'Et bistandssamarbeid mellom rike land',
            ],
          },
          {
            label: 'd',
            task: 'WTO',
            solution: 'Organisasjon som regulerer internasjonal handel og løser handelskonflikter',
            multipleChoiceOptions: [
              'Organisasjon som regulerer internasjonal handel og løser handelskonflikter',
              'En militær forsvarsallianse',
              'Et samarbeid mellom europeiske land',
              'Verdens største internasjonale organisasjon',
            ],
          },
        ],
        solution: 'a) FN, b) NATO, c) EU, d) WTO.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: MAKTFORHOLD ==========
    {
      id: 'samfunnsfag-10-4-def-3',
      type: 'definition',
      title: 'Maktforhold i en globalisert verden',
      content: `I en globalisert verden er **makt** fordelt på mange ulike måter:

**Staters makt:**
- **Stormakter** som USA, Kina, Russland og EU har størst innflytelse i internasjonal politikk
- Økonomisk styrke gir politisk innflytelse
- Militær styrke gir forhandlingsmakt
- Vetoretten i FNs sikkerhetsråd gir stormaktene ekstra makt

**Flernasjonale selskapers makt:**
- Noen selskaper (Apple, Amazon, Google) har større omsetning enn mange lands samlede BNP
- De kan flytte produksjon og skatte der det er billigst
- De påvirker politikk gjennom lobbyvirksomhet
- De kontrollerer teknologi og plattformer som milliarder bruker daglig

**Organisasjoners og sivilsamfunnets makt:**
- Internasjonale organisasjoner (FN, EU) setter regler og normer
- Frivillige organisasjoner (NGOer) kan påvirke opinion og politikk
- Sosiale bevegelser kan mobilisere globalt (f.eks. klimastreikene)
- Medier former opinionen og holder makthavere ansvarlige

**Individets makt:**
- Som forbruker kan du påvirke gjennom hva du kjøper
- Som borger kan du stemme, demonstrere og engasjere deg
- Sosiale medier gir enkeltpersoner en global stemme
- Men individuell makt er begrenset sammenlignet med stater og store selskaper

**Maktasymmetri:**
Et viktig begrep er **maktasymmetri** — at makt er ujevnt fordelt. I forholdet mellom et stort internasjonalt selskap og en fattig fabrikkarbeider, eller mellom en stormakt og et lite utviklingsland, er makten svært ulik. Globaliseringen kan både forsterke og utfordre slike maktforhold.`,
    },

    // ========== OPPGAVE 6: MAKT ==========
    {
      id: 'samfunnsfag-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-6',
        number: '4.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Maktforhold i en globalisert verden.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi et eksempel på hvordan et stort flernasjonalt selskap kan ha makt over et fattig land.',
            solution: 'Eksempel: Et stort gruveselskap kan tilby arbeidsplasser og investeringer i et fattig land, men presse frem gunstige vilkår — lave skatter, svak miljøregulering, lave lønninger. Landet er avhengig av investeringen og tør ikke stille krav. Selskapet tar med seg profitten ut av landet.',
          },
          {
            label: 'b',
            task: 'Forklar hva «maktasymmetri» betyr, med et konkret eksempel.',
            solution: 'Maktasymmetri betyr at makt er ujevnt fordelt mellom partene. For eksempel har en stor internasjonal klesskjede langt mer makt enn en enkelt fabrikkarbeider i Bangladesh. Kjeden kan velge blant mange leverandører og presse prisene ned, mens arbeideren har få alternativer og liten forhandlingsstyrke.',
          },
          {
            label: 'c',
            task: 'Kan vanlige borgere påvirke globaliseringen? Forklar hvordan.',
            solution: 'Ja, borgere kan påvirke gjennom: Forbrukervalg (kjøpe Fair Trade, boikotte selskaper), politisk deltakelse (stemme på partier med ønsket handelspolitikk), engasjement i organisasjoner (Amnesty, Framtiden i våre hender), sosiale medier (skape oppmerksomhet), demonstrasjoner og protestaksjoner. Men individuell påvirkning er begrenset — kollektiv handling er mer effektiv.',
          },
        ],
        hints: ['Tenk på hvem som har mest å vinne og mest å tape.'],
        solution: 'Maktforholdene i en globalisert verden er ujevne, men vanlige borgere kan påvirke gjennom kollektiv handling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: KORONAPANDEMIEN ==========
    {
      id: 'samfunnsfag-10-4-example-3',
      type: 'example',
      title: 'Eksempel: Koronapandemien viste globaliseringens sårbarhet',
      problem: `Da koronapandemien rammet verden i 2020, ble globaliseringens fordeler og ulemper synlige. Hva lærte vi?`,
      solution: `**Globaliseringen spredte viruset:**
- Et virus fra Kina nådde alle verdens hjørner på få uker
- Internasjonal reising og handel spredte smitten raskt
- Ingen land kunne stenge seg helt ute

**Globale forsyningskjeder brøt sammen:**
- Fabrikknedstengninger i Kina rammet produksjon over hele verden
- Mangel på medisinsk utstyr (munnbind, tester, respiratorer)
- Bil- og elektronikkindustrien stoppet opp på grunn av mangel på databrikker
- Land innførte eksportforbud på matvarer og medisinsk utstyr

**Ulikhet ble forsterket:**
- Rike land sikret seg vaksiner først, mens fattige land måtte vente
- De som kunne jobbe hjemmefra (ofte høyt utdannede) klarte seg bedre enn de med fysiske jobber
- Fattige land uten sikkerhetsnett ble rammet hardest

**Men samarbeid viste seg også mulig:**
- Vaksineutviklingen gikk rekordraskt takket være globalt samarbeid
- COVAX-initiativet forsøkte å fordele vaksiner rettferdig (med blandet suksess)
- Digital teknologi muliggjorde fjernarbeid og fjernundervisning

**Lærdom:**
Pandemien viste at globalisering gjør oss sårbare for globale kriser, men at vi også trenger globalt samarbeid for å løse dem. Mange land diskuterer nå om de bør bli mer selvforsynte på kritiske varer som medisin og matproduksjon.`,
    },

    // ========== OPPGAVE 7: FLERVALG ==========
    {
      id: 'samfunnsfag-10-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-7',
        number: '4.7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «proteksjonisme»?',
        options: [
          {
            id: 'a',
            text: 'At et land fjerner all toll og åpner for fri handel',
            isCorrect: false,
            feedback: 'Feil. Dette beskriver frihandel, som er det motsatte av proteksjonisme.',
          },
          {
            id: 'b',
            text: 'At et land beskytter sin egen industri mot utenlandsk konkurranse gjennom toll og andre tiltak',
            isCorrect: true,
            feedback: 'Riktig! Proteksjonisme handler om å beskytte nasjonale bedrifter og arbeidsplasser mot internasjonal konkurranse.',
          },
          {
            id: 'c',
            text: 'At et land bare handler med nabolandene sine',
            isCorrect: false,
            feedback: 'Feil. Proteksjonisme handler om å beskytte egen industri, ikke nødvendigvis å begrense hvem man handler med.',
          },
          {
            id: 'd',
            text: 'At et land beskytter miljøet gjennom internasjonale avtaler',
            isCorrect: false,
            feedback: 'Feil. Proteksjonisme er et handelspolitisk begrep, ikke et miljøbegrep.',
          },
        ],
        solution: 'Proteksjonisme betyr at et land beskytter sin egen industri mot utenlandsk konkurranse, for eksempel gjennom toll, importkvoter eller subsidier.',
      },
    },

    // ========== NOTAT ==========
    {
      id: 'samfunnsfag-10-4-note-1',
      type: 'note',
      title: 'Globalisering — et perspektivspørsmål',
      content: `Hvordan du ser på globalisering, avhenger mye av perspektivet ditt:

**Fra en fattig fabrikkarbeider i Bangladesh:**
Globaliseringen ga meg jobb og inntekt, men lønnen er lav og arbeidsdagene er lange. Uten denne jobben ville jeg hatt det enda verre.

**Fra en arbeidsledig industriarbeider i Norge:**
Globaliseringen tok jobben min da fabrikken flyttet til utlandet. Jeg har kompetanse, men ikke den typen som etterspørres i den nye økonomien.

**Fra en norsk forbruker:**
Globaliseringen gir meg billige klær, elektronikk og mat fra hele verden. Jeg har tilgang til underholdning og informasjon som mine besteforeldre bare kunne drømme om.

**Fra en bedriftseier:**
Globaliseringen lar meg produsere billig, selge dyrt, og nå kunder over hele verden. Den gir muligheter, men også konkurranse fra hele kloden.

**Ingen av disse perspektivene er «feil»** — de viser at globaliseringen har ulike konsekvenser for ulike mennesker.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-4-oppsummering',
      type: 'text',
      content: `## Oppsummering: Globalisering

**Nøkkelbegreper:**
- **Globalisering:** Prosessen der verden blir stadig mer sammenkoblet
- **Økonomisk globalisering:** Økt handel, investeringer og globale verdikjeder
- **Kulturell globalisering:** Spredning av kultur, ideer og livsstiler over grenser
- **Politisk globalisering:** Internasjonalt samarbeid gjennom organisasjoner og avtaler
- **Verdikjede:** Alle steg fra råvare til ferdig produkt, ofte spredt over mange land
- **Frihandel:** Handel uten toll og andre hindringer mellom land
- **Proteksjonisme:** Beskyttelse av egen industri mot utenlandsk konkurranse
- **Flernasjonale selskaper:** Selskaper som opererer i mange land
- **Maktasymmetri:** Ulik fordeling av makt mellom aktører
- **Kulturell homogenisering:** At kulturer blir mer like hverandre
- **Kulturell hybridisering:** At kulturer blandes og skaper nye uttrykk
- **FN, EU, NATO, WTO:** Viktige internasjonale organisasjoner
- **EØS-avtalen:** Norges tilknytning til EUs indre marked`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-8',
        number: '4.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Globaliseringen har gjort verden bedre.» Er du enig eller uenig? Presenter argumenter for og mot, og gi din egen vurdering.',
        hints: [
          'Se saken fra ulike perspektiver (fattige land, rike land, arbeidere, forbrukere, miljøet).',
          'Bruk konkrete eksempler.',
          'Husk å vurdere for hvem globaliseringen er «bedre» eller «verre».',
        ],
        solution: 'En god drøfting viser at globaliseringen har både positive og negative sider. Positive: Redusert fattigdom, økt levestandard, kulturutveksling, teknologispredning. Negative: Økt ulikhet innenfor land, miljøbelastning, kulturell ensretting, sårbare forsyningskjeder. Vurderingen avhenger av perspektiv og verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-9',
        number: '4.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Bør Norge bli medlem av EU? Presenter argumenter for og mot.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi tre argumenter for norsk EU-medlemskap.',
            solution: 'Argumenter for: Norge ville fått medbestemmelse i EU-regler vi allerede må følge gjennom EØS, norsk næringsliv ville fått full tilgang til EUs indre marked, Norge kunne bidratt til europeisk samarbeid om klima og sikkerhet.',
          },
          {
            label: 'b',
            task: 'Gi tre argumenter mot norsk EU-medlemskap.',
            solution: 'Argumenter mot: Tap av nasjonal suverenitet, Norge ville mistet kontroll over fiskeripolitikken, landbrukspolitikken ville blitt endret, beslutninger ville blitt tatt lenger bort fra norske borgere.',
          },
          {
            label: 'c',
            task: 'Hva er EØS-avtalen, og hva betyr den for Norges forhold til EU?',
            solution: 'EØS-avtalen gir Norge tilgang til EUs indre marked (fri bevegelse av varer, tjenester, kapital og personer) mot at Norge innfører de fleste EU-regler. Norge er utenfor EUs politiske beslutningsprosesser — vi følger reglene uten å være med på å lage dem. Kritikere kaller dette «faksdemokrati».',
          },
        ],
        hints: ['Dette er et politisk spørsmål der det finnes sterke meninger på begge sider.'],
        solution: 'EU-debatten handler om avveiningen mellom politisk innflytelse, økonomisk integrasjon og nasjonal selvbestemmelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'samfunnsfag-10-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-10',
        number: '4.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektoppgave: Velg et produkt du bruker daglig (for eksempel en sjokolade, en t-skjorte eller en mobiltelefon). Undersøk verdikjeden bak produktet: Hvor kommer råvarene fra? Hvem produserer det? Under hvilke forhold? Hva skjer når du kaster det?',
        hints: [
          'Bruk internett til å finne informasjon om verdikjeden.',
          'Tenk på miljømessige, økonomiske og sosiale aspekter.',
          'Presenter funnene dine med kart, bilder eller diagram.',
        ],
        solution: 'Svaret bør kartlegge verdikjeden fra råvare til avfall, identifisere aktører i ulike land, vurdere arbeidsforhold og miljøkonsekvenser, og reflektere over maktforhold og verdifordeling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 1
// ============================================================================

export const SAMFUNNSFAG_10_DEL1_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_10_1,
  CHAPTER_SAMFUNNSFAG_10_2,
  CHAPTER_SAMFUNNSFAG_10_3,
  CHAPTER_SAMFUNNSFAG_10_4,
];
