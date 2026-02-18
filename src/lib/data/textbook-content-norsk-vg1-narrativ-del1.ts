/**
 * Norsk VG1 - Narrative versjoner Del 1 (Kapittel 1.3, 1.4, 1.5, 1.6)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-vg1-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.3 NARRATIV: Debattinnlegg og meningsytring
// ============================================================================

export const CHAPTER_NORSK_VG1_1_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-1-3-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '1.3',
  title: 'Debattinnlegg og meningsytring',
  subtitle: 'Narrativ versjon',
  description: 'Finn din stemme i demokratiet - kunsten å skrive innlegg som får folk til å lytte.',
  estimatedMinutes: 35,
  competenceGoals: [
    'lytte til andre, bygge opp saklig argumentasjon og bruke retoriske appellformer i diskusjoner',
  ],
  linkedChapterId: 'norsk-vg1-1-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-1-3-n-intro',
      type: 'text',
      content: `## Din mening teller

Forestill deg at du våkner en morgen og leser noe i avisen som gjør deg sint. Kanskje kommunen har vedtatt å legge ned ungdomsklubben din. Kanskje noen har skrevet noe urettferdig om ungdom. Du kjenner at du vil si noe tilbake, at du vil at folk skal høre din side av saken.

Velkommen til demokratiets kjerne. I Norge har vi en lang tradisjon for at vanlige folk kan delta i offentlig debatt. Du trenger ikke være politiker eller ekspert for å ytre deg. Alt du trenger er en mening, evnen til å begrunne den, og motet til å sende den inn til en avis.

I dette kapittelet skal du lære å skrive debattinnlegg som faktisk blir lest. Du skal lære å bygge opp argumenter som holder vann, og du skal lære å unngå de vanligste fellene som gjør at folk slutter å ta deg seriøst. For det handler ikke bare om å rope høyest. Det handler om å overbevise.`,
    },

    // ========== SEKSJON 1: Hva er et debattinnlegg? ==========
    {
      id: 'norsk-vg1-1-3-n-section1',
      type: 'text',
      content: `## Debattinnleggets natur

Et debattinnlegg er en kort tekst der du tar stilling til noe. Det kan handle om alt fra lokale saker som bussruter og skolebygg, til store spørsmål som klimapolitikk og ytringsfrihet. Det som kjennetegner sjangeren er at du har en tydelig mening og at du argumenterer for den.

Tenk på et debattinnlegg som en samtale med samfunnet. Du responderer på noe som har skjedd eller blitt sagt, og du inviterer andre til å tenke annerledes. I motsetning til en kronikk, som er lengre og mer utdypende, er debattinnlegget kort og konsist. Du har kanskje bare 300 ord til rådighet, så hvert ord må telle.

Det finnes ulike steder å publisere. Lokalavisen din har sannsynligvis en debattseksjon. Nasjonale aviser som Aftenposten har Si;D for unge stemmer, og VG har sine meningssider. I tillegg kan du dele meningene dine på sosiale medier, selv om debattinnleggsformatet tradisjonelt tilhører avisene.

Det viktigste å huske er dette: Du skriver ikke for deg selv. Du skriver for å påvirke andre. Det betyr at du må tenke på hvem som leser, og hva som skal til for at de endrer mening eller i det minste forstår synspunktet ditt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på debattinnleggets kjennetegn:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-3-n-quiz1-q0',
            task: 'Hva er hovedformålet med et debattinnlegg?',
            options: [
              { id: 'a', text: 'Å underholde leseren med en god historie', isCorrect: false },
              { id: 'b', text: 'Å ta stilling til et tema og argumentere for synspunktet ditt', isCorrect: true },
              { id: 'c', text: 'Å gi en nøytral fremstilling av ulike perspektiver', isCorrect: false },
              { id: 'd', text: 'Å presentere ny forskning på et felt', isCorrect: false },
            ],
            solution: 'Et debattinnlegg handler om å ta stilling og overbevise. I motsetning til en nyhetsartikkel er det subjektivt og argumenterende.',
          },
          {
            id: 'norsk-vg1-1-3-n-quiz1-q1',
            task: 'Hvem skriver du et debattinnlegg for?',
            options: [
              { id: 'a', text: 'Bare for deg selv - det er en personlig øvelse', isCorrect: false },
              { id: 'b', text: 'Bare for læreren som skal vurdere det', isCorrect: false },
              { id: 'c', text: 'For å påvirke andre - du tenker på hvem som leser', isCorrect: true },
              { id: 'd', text: 'For redaktøren i avisen', isCorrect: false },
            ],
            solution: 'Du skriver ikke for deg selv. Du skriver for å påvirke andre. Derfor må du tenke på hvem som leser og hva som skal til for at de lytter.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Strukturen som virker ==========
    {
      id: 'norsk-vg1-1-3-n-section2',
      type: 'text',
      content: `## Strukturen som virker

Et godt debattinnlegg følger en tredelt struktur som du vil kjenne igjen fra andre tekster. Men i debattinnlegget er denne strukturen ekstra viktig fordi leseren bestemmer seg raskt for om teksten er verdt å lese.

Innledningen er der du må fange oppmerksomheten. Mange begynner med det mest sjokkerende, det mest personlige, eller det mest oppsiktsvekkende de har å si. En god innledning kan være et retorisk spørsmål, en provoserende påstand, eller en personlig erfaring som illustrerer poenget ditt. Uansett hva du velger, må du også gjøre det klart hva saken handler om og hva du mener. Leseren skal ikke måtte gjette.

Hoveddelen er der du legger frem argumentene dine. Du har kanskje to eller tre gode poenger, og hvert av dem trenger støtte. Det kan være fakta, statistikk, eksempler, eller logiske resonnementer. Tenk på argumentene som byggeklosser som støtter hovedpåstanden din. Hvis en byggekloss er svak, vakler hele konstruksjonen.

I hoveddelen bør du også møte motargumenter. Ved å vise at du forstår hva de som er uenige med deg tenker, og forklare hvorfor de tar feil, styrker du din egen troverdighet. Det viser at du har tenkt grundig gjennom saken.

Avslutningen skal oppsummere hovedbudskapet og gjerne komme med en oppfordring. Hva vil du at leseren skal gjøre eller tenke etter å ha lest innlegget ditt? Avslutt med kraft, ikke med en svak setning som bare gjentar det du allerede har sagt.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på debattinnleggets struktur:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-3-n-quiz2-q0',
            task: 'Hvorfor bør du ta opp motargumenter i debattinnlegget ditt?',
            options: [
              { id: 'a', text: 'For å vise at du egentlig er usikker på egen sak', isCorrect: false },
              { id: 'b', text: 'For å gjøre teksten lengre og mer akademisk', isCorrect: false },
              { id: 'c', text: 'For å styrke troverdigheten din og vise at du har tenkt grundig', isCorrect: true },
              { id: 'd', text: 'Fordi redaktøren krever det for publisering', isCorrect: false },
            ],
            solution: 'Å møte motargumenter viser at du forstår kompleksiteten i saken og at synspunktet ditt holder selv når det utfordres.',
          },
          {
            id: 'norsk-vg1-1-3-n-quiz2-q1',
            task: 'Hva bør innledningen i et debattinnlegg gjøre?',
            options: [
              { id: 'a', text: 'Gi en grundig historisk bakgrunn for temaet', isCorrect: false },
              { id: 'b', text: 'Liste opp alle kildene du skal bruke', isCorrect: false },
              { id: 'c', text: 'Fange oppmerksomheten og gjøre det klart hva du mener', isCorrect: true },
              { id: 'd', text: 'Oppsummere alle argumentene dine', isCorrect: false },
            ],
            solution: 'Innledningen må fange leserens oppmerksomhet og tydeliggjøre hva saken handler om og hva du mener. Leseren bestemmer seg raskt.',
          },
          {
            id: 'norsk-vg1-1-3-n-quiz2-q2',
            task: 'Hva bør avslutningen i et debattinnlegg inneholde?',
            options: [
              { id: 'a', text: 'Nye argumenter som ikke er nevnt i hoveddelen', isCorrect: false },
              { id: 'b', text: 'En unnskyldning for å ha tatt opp temaet', isCorrect: false },
              { id: 'c', text: 'En oppsummering og gjerne en oppfordring til handling', isCorrect: true },
              { id: 'd', text: 'En detaljert referanseliste', isCorrect: false },
            ],
            solution: 'Avslutningen skal oppsummere hovedbudskapet og gjerne komme med en oppfordring. Avslutt med kraft!',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Argumenter som holder ==========
    {
      id: 'norsk-vg1-1-3-n-section3',
      type: 'text',
      content: `## Argumenter som holder

Det er forskjell på en påstand og et argument. Påstanden er det du mener, argumentet er begrunnelsen. Hvis du bare skriver at karakterer er stressende for elever, har du en påstand. Hvis du legger til at forskning fra NTNU viser at karakterpress fører til økt angst blant ungdom, har du et argument.

De sterkeste argumentene kombinerer ulike typer støtte. Fakta og statistikk gir tyngde fordi de er vanskelige å motsi. Når du skriver at syv av ti ungdommer rapporterer søvnproblemer, har du noe konkret å peke på. Men tall alene kan være tørre. Derfor er det lurt å supplere med eksempler som gjør statistikken levende. Historien om Maria som ligger våken hver natt før prøver, setter et menneskelig ansikt på tallene.

Logikk er også viktig. Argumentet ditt må henge sammen på en måte som føles fornuftig. Hvis premissene er sanne, og slutningen følger logisk, er argumentet gyldig. Men pass på at du ikke hopper over viktige trinn i resonnementet. Hvis du hevder at skolen burde begynne senere fordi ungdom sover lenge, mangler du bindeleddet som forklarer hvorfor søvn er viktig for læring.

Til slutt kan du bruke autoritet. Når en ekspert støtter synspunktet ditt, låner du deres troverdighet. Men vær forsiktig med å overdrive. En enkelt forsker er ikke bevis nok, og du bør aldri dikte opp eksperter eller forvrenge det de har sagt.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-1-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på argumentasjonsteknikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-3-n-quiz3-q0',
            task: 'Hva er forskjellen mellom en påstand og et argument?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell - begrepene betyr det samme', isCorrect: false },
              { id: 'b', text: 'En påstand er en mening uten begrunnelse, et argument er en påstand med støtte', isCorrect: true },
              { id: 'c', text: 'En påstand er fakta, et argument er mening', isCorrect: false },
              { id: 'd', text: 'En påstand kommer først i teksten, et argument kommer til slutt', isCorrect: false },
            ],
            solution: 'En påstand er det du mener. Et argument inkluderer begrunnelsen for hvorfor. Uten argument ber du bare leseren ta deg på ordet.',
          },
          {
            id: 'norsk-vg1-1-3-n-quiz3-q1',
            task: '"Forskning fra NTNU viser at karakterpress fører til økt angst blant ungdom." Hva gjør denne setningen sterk som argument?',
            options: [
              { id: 'a', text: 'Den bruker vanskelige ord', isCorrect: false },
              { id: 'b', text: 'Den viser til forskning og en troverdig kilde', isCorrect: true },
              { id: 'c', text: 'Den handler om ungdom', isCorrect: false },
              { id: 'd', text: 'Den er kort og enkel', isCorrect: false },
            ],
            solution: 'Argumentet støttes av fakta fra en anerkjent institusjon (NTNU). Å vise til forskning gir tyngde fordi det er vanskelig å motsi.',
          },
          {
            id: 'norsk-vg1-1-3-n-quiz3-q2',
            task: 'Hva er den beste strategien for å bygge sterke argumenter?',
            options: [
              { id: 'a', text: 'Bruke bare statistikk og tall', isCorrect: false },
              { id: 'b', text: 'Bare appellere til følelser', isCorrect: false },
              { id: 'c', text: 'Kombinere fakta, eksempler og logiske resonnementer', isCorrect: true },
              { id: 'd', text: 'Bruke mest mulig fagspråk', isCorrect: false },
            ],
            solution: 'De sterkeste argumentene kombinerer ulike typer støtte: fakta gir tyngde, eksempler gjør det levende, og logikk sørger for at resonnementet henger sammen.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Feilslutninger å unngå ==========
    {
      id: 'norsk-vg1-1-3-n-section4',
      type: 'text',
      content: `## Feilslutninger å unngå

Selv den beste debattant kan trå feil. Det finnes en rekke såkalte feilslutninger - argumenter som ser overbevisende ut, men som egentlig ikke holder vann. Å kjenne til disse gjør deg til både en bedre skribent og en bedre leser av andres tekster.

Personangrep, eller ad hominem, er kanskje den vanligste feilen. I stedet for å kritisere argumentet, kritiserer du personen. Hvis noen sier at du ikke kan stole på klimaforskere fordi de tjener penger på forskningen sin, angriper de forskernes motiver i stedet for å motbevise funnene deres. Det er irrelevant hvem som sier noe hvis det de sier er sant.

Stråmannen er en annen klassiker. Her forvrenger du motstanderens argument for å gjøre det lettere å angripe. Hvis noen argumenterer for å redusere kjøttforbruket, og du svarer med at de vil at alle skal slutte å spise alt de liker, har du skapt en stråmann. Du argumenterer mot noe de aldri sa.

Falsk dilemma oppstår når du presenterer bare to alternativer når det finnes flere. Enten er du for oss eller mot oss. Enten støtter du full ytringsfrihet eller ønsker du sensur. Virkeligheten er sjelden så svart-hvitt.

Appell til mengden er troen på at noe er riktig fordi mange mener det. Men populære meninger kan være feil. Én gang trodde de fleste at jorden var flat.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-1-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på feilslutninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-3-n-quiz4-q0',
            task: '"Du kan ikke stole på ham - han har jo tattoveringer." Hvilken feilslutning er dette?',
            options: [
              { id: 'a', text: 'Stråmann', isCorrect: false },
              { id: 'b', text: 'Falsk dilemma', isCorrect: false },
              { id: 'c', text: 'Personangrep (ad hominem)', isCorrect: true },
              { id: 'd', text: 'Appell til mengden', isCorrect: false },
            ],
            solution: 'Dette er et personangrep. Tattoveringer har ingenting med troverdighet å gjøre - argumentet angriper personen i stedet for saken.',
          },
          {
            id: 'norsk-vg1-1-3-n-quiz4-q1',
            task: 'Noen argumenterer for å redusere kjøttforbruket. Du svarer: "Så du vil at alle skal bli veganere og aldri spise noe godt igjen?" Hvilken feilslutning?',
            options: [
              { id: 'a', text: 'Personangrep', isCorrect: false },
              { id: 'b', text: 'Stråmann - du forvrenger motstanderens argument', isCorrect: true },
              { id: 'c', text: 'Appell til mengden', isCorrect: false },
              { id: 'd', text: 'Falsk dilemma', isCorrect: false },
            ],
            solution: 'Du har skapt en stråmann ved å forvrenge motstanderens argument. De sa "redusere kjøttforbruket", ikke "alle må bli veganere". Du argumenterer mot noe de aldri sa.',
          },
          {
            id: 'norsk-vg1-1-3-n-quiz4-q2',
            task: '"Enten er du for full ytringsfrihet, eller så ønsker du sensur." Hvilken feilslutning er dette?',
            options: [
              { id: 'a', text: 'Stråmann', isCorrect: false },
              { id: 'b', text: 'Personangrep', isCorrect: false },
              { id: 'c', text: 'Appell til mengden', isCorrect: false },
              { id: 'd', text: 'Falsk dilemma - det presenteres bare to alternativer', isCorrect: true },
            ],
            solution: 'Dette er et falsk dilemma. Virkeligheten har mange nyanser mellom full ytringsfrihet og total sensur. Å presentere bare to ekstreme alternativer er en feilslutning.',
          },
          {
            id: 'norsk-vg1-1-3-n-quiz4-q3',
            task: '"Alle mener at dette er riktig, så det må jo stemme." Hvilken feilslutning er dette?',
            options: [
              { id: 'a', text: 'Stråmann', isCorrect: false },
              { id: 'b', text: 'Appell til mengden - populære meninger kan være feil', isCorrect: true },
              { id: 'c', text: 'Personangrep', isCorrect: false },
              { id: 'd', text: 'Falsk dilemma', isCorrect: false },
            ],
            solution: 'Appell til mengden er troen på at noe er riktig fordi mange mener det. Men populære meninger kan være feil - en gang trodde de fleste at jorden var flat.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Din stemme i demokratiet ==========
    {
      id: 'norsk-vg1-1-3-n-section5',
      type: 'text',
      content: `## Din stemme i demokratiet

Å skrive debattinnlegg er mer enn en skoleøvelse. Det er en demokratisk handling. I et samfunn der alle kan ytre seg, har vi alle et ansvar for å gjøre det på en måte som bidrar til god debatt.

Det betyr å respektere meningsmotstandere selv når du er dypt uenig. Det betyr å holde deg til saken og unngå personangrep. Det betyr å være villig til å endre mening hvis du møter bedre argumenter. En god debattant er ikke den som alltid vinner, men den som alltid lærer.

Det betyr også å våge. Mange tier fordi de er redde for reaksjoner. Men demokratiet trenger mangfoldige stemmer. Din erfaring, ditt perspektiv, din mening - alt dette har verdi i den offentlige samtalen. Kanskje har du innsikt i noe de voksne ekspertene ikke forstår. Kanskje ser du løsninger ingen andre har tenkt på.

Når du skriver ditt neste debattinnlegg, husk dette: Du deltar i en samtale som har pågått i generasjoner. Camilla Collett skrev flammende innlegg om kvinners rettigheter på 1800-tallet. Bjørnstjerne Bjørnson engasjerte seg i tidens store spørsmål. De brukte pennen som våpen for forandring. Nå er det din tur.

Start med noe du brenner for. Finn fakta som støtter saken din. Strukturer teksten med innledning, hoveddel og avslutning. Unngå feilslutninger. Og send den inn. Kanskje blir den ikke publisert med en gang. Men øvelse gjør mester, og hver tekst du skriver gjør deg til en bedre formidler.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-1-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på debattkultur og demokratisk deltakelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-3-n-quiz5-q0',
            task: 'Hva kjennetegner en god debattant?',
            options: [
              { id: 'a', text: 'En som alltid vinner diskusjoner og aldri innrømmer feil', isCorrect: false },
              { id: 'b', text: 'En som bruker mest følelser og personlige angrep', isCorrect: false },
              { id: 'c', text: 'En som respekterer motstandere og er villig til å lære', isCorrect: true },
              { id: 'd', text: 'En som unngår kontroverser og holder seg til trygge temaer', isCorrect: false },
            ],
            solution: 'God debattkultur handler om gjensidig respekt og vilje til å lære. Åpenhet styrker troverdigheten din.',
          },
          {
            id: 'norsk-vg1-1-3-n-quiz5-q1',
            task: 'Hvorfor er det viktig at vanlige folk deltar i offentlig debatt?',
            options: [
              { id: 'a', text: 'Det er ikke viktig - bare eksperter bør uttale seg', isCorrect: false },
              { id: 'b', text: 'Fordi demokratiet trenger mangfoldige stemmer og perspektiver', isCorrect: true },
              { id: 'c', text: 'For å bli kjendis', isCorrect: false },
              { id: 'd', text: 'Bare for å øve seg på skriving', isCorrect: false },
            ],
            solution: 'Demokratiet trenger mangfoldige stemmer. Ulike erfaringer og perspektiver beriker den offentlige samtalen, og alle har noe verdifullt å bidra med.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Dine verktøy for debatt

Du har nå lært det viktigste om å skrive debattinnlegg. Her er en rask gjennomgang:

**Debattinnleggets struktur:**
Innledning som fanger oppmerksomhet og presenterer tesen, hoveddel med argumenter og behandling av motargumenter, og avslutning med oppsummering og oppfordring.

**Sterke argumenter:**
Kombiner fakta, eksempler, logikk og autoritet. Husk at en påstand uten begrunnelse bare er en mening - du trenger argumenter som støtter det du hevder.

**Feilslutninger å unngå:**
Personangrep, stråmann, falsk dilemma og appell til mengden. Kjenn igjen disse både i egne og andres tekster.

**Debattkultur:**
Respekter meningsmotstandere, hold deg til saken, og vær villig til å endre mening. Din stemme har verdi i demokratiet.

**Nøkkelbegreper:**
Tese (hovedpåstanden), argument (begrunnelse), motargument, feilslutning, stråmann, personangrep.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4 NARRATIV: Kronikk og leserinnlegg
// ============================================================================

export const CHAPTER_NORSK_VG1_1_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-1-4-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '1.4',
  title: 'Kronikk og leserinnlegg',
  subtitle: 'Narrativ versjon',
  description: 'Mestre avisens meningssider - fra korte innlegg til grundige kronikker.',
  estimatedMinutes: 35,
  competenceGoals: [
    'gjøre rede for og reflektere over bruken av retoriske appellformer og språklige virkemidler i sakprosatekster',
  ],
  linkedChapterId: 'norsk-vg1-1-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-1-4-n-intro',
      type: 'text',
      content: `## Avisen som talerstol

Åpne hvilken som helst avis, og du finner dem: meningssidene. Her står spaltene fulle av tekster fra folk som vil noe. Noen er korte og kampklare, andre er lange og grundige. Noen er skrevet av kjente eksperter, andre av helt vanlige mennesker med noe på hjertet.

Velkom til avisens to viktigste sjangre for meningsytring: kronikken og leserinnlegget. Begge handler om å dele synspunkter med offentligheten, men de gjør det på ganske ulike måter. Å forstå forskjellen er nøkkelen til å velge riktig format for det du vil si.

I dette kapittelet skal du lære hva som skiller disse sjangrene, hvordan du bygger opp tekster som fungerer i begge, og ikke minst hvordan du fanger leserens oppmerksomhet fra første setning. For i en verden der alle konkurrerer om oppmerksomheten, er det ikke nok å ha rett. Du må også få folk til å lese.`,
    },

    // ========== SEKSJON 1: To søsken, to personligheter ==========
    {
      id: 'norsk-vg1-1-4-n-section1',
      type: 'text',
      content: `## To søsken, to personligheter

Tenk på kronikken og leserinnlegget som to søsken med ganske ulike personligheter. Leserinnlegget er den raske, direkte søsteren som sier akkurat det hun mener uten å pakke det inn. Kronikken er den grundige broren som liker å forklare hele sammenhengen før han kommer til poenget.

Leserinnlegget er kort, gjerne bare 200 til 400 ord. Det responderer ofte på noe som nettopp har skjedd eller blitt sagt, og det tar tydelig stilling. Hvem som helst kan sende inn et leserinnlegg til avisen. Det handler om å være rask, relevant og poengtert. Tenk på det som et innlegg i en samtale som allerede pågår.

Kronikken er lengre, gjerne 600 til 1000 ord eller mer. Den gir plass til grundigere argumentasjon, flere nyanser, og dypere analyse. Ofte er kronikkforfattere eksperter, forskere, eller folk med spesiell innsikt i temaet de skriver om. Kronikken trenger ikke respondere på noe aktuelt, selv om det ofte styrker relevansen.

Begge sjangrene har sin plass. Hvis du vil reagere raskt på noe som har skjedd, er leserinnlegget veien å gå. Hvis du vil utforske et tema i dybden og har mye å si, er kronikken bedre egnet. Velg format etter hva du har å si og hvor mye plass du trenger for å si det godt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kronikk og leserinnlegg:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-4-n-quiz1-q0',
            task: 'Hva er hovedforskjellen mellom en kronikk og et leserinnlegg?',
            options: [
              { id: 'a', text: 'Kronikken publiseres bare på nett, leserinnlegget bare på papir', isCorrect: false },
              { id: 'b', text: 'Kronikken er lengre og mer grundig, leserinnlegget er kortere og mer direkte', isCorrect: true },
              { id: 'c', text: 'Kronikken må være objektiv, leserinnlegget kan være subjektivt', isCorrect: false },
              { id: 'd', text: 'Kronikken kan bare skrives av journalister', isCorrect: false },
            ],
            solution: 'Kronikken gir rom for dypere analyse, mens leserinnlegget er kortere og mer fokusert. Begge er subjektive meningsytringer.',
          },
          {
            id: 'norsk-vg1-1-4-n-quiz1-q1',
            task: 'Når er leserinnlegget et bedre valg enn kronikken?',
            options: [
              { id: 'a', text: 'Når du vil utforske et tema i dybden', isCorrect: false },
              { id: 'b', text: 'Når du vil reagere raskt på noe som nettopp har skjedd', isCorrect: true },
              { id: 'c', text: 'Når du har mye forskning å vise til', isCorrect: false },
              { id: 'd', text: 'Når du er ekspert på feltet', isCorrect: false },
            ],
            solution: 'Leserinnlegget passer best når du vil reagere raskt og poengtert. Det responderer ofte på noe aktuelt og er kort nok til at folk leser det.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Kroken som fanger ==========
    {
      id: 'norsk-vg1-1-4-n-section2',
      type: 'text',
      content: `## Kroken som fanger

I journalistikken snakker vi ofte om kroken - den fengende innledningen som fanger leserens oppmerksomhet. Uten en god krok risikerer du at leseren blar videre før de i det hele tatt har forstått hva du vil si.

Det finnes mange måter å skape en god krok på. Du kan stille et provoserende spørsmål som leseren ikke kan motstå å tenke på. Hvorfor lærer vi matematikk vi aldri kommer til å bruke? Du kan komme med en overraskende påstand som bryter med forventningene. Karakterer gjør elevene dummere. Du kan dele en personlig historie som setter temaet i perspektiv. Den dagen jeg fikk tilbake matteprøven, var det første jeg tenkte ikke om jeg hadde forstått stoffet, men om jeg fortsatt var god nok.

Uansett hvilken teknikk du velger, må kroken gjøre to ting. Den må vekke nysgjerrighet, og den må være relevant for det du skal si videre. En morsom krok som ikke har noe med resten av teksten å gjøre, vil bare irritere leseren.

Etter kroken må du raskt etablere hva saken handler om og hva du mener. Leseren skal ikke måtte lese halve teksten for å forstå poenget ditt. I et leserinnlegg bør hovedpåstanden komme innen de første avsnittene. I en kronikk kan du bygge opp litt mer, men ikke overdriv.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kroken og innledningen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-4-n-quiz2-q0',
            task: 'Hva er en "krok" i kronikk eller leserinnlegg?',
            options: [
              { id: 'a', text: 'Et argument som motstanderen ikke kan svare på', isCorrect: false },
              { id: 'b', text: 'En fengende innledning som fanger leserens oppmerksomhet', isCorrect: true },
              { id: 'c', text: 'En oppsummering av hovedargumentene', isCorrect: false },
              { id: 'd', text: 'En referanse til avisens redaksjonelle linje', isCorrect: false },
            ],
            solution: 'Kroken er den første setningen eller det første avsnittet som fanger interesse. Uten den blar leseren videre.',
          },
          {
            id: 'norsk-vg1-1-4-n-quiz2-q1',
            task: 'Hvilken av disse er det beste eksempelet på en god krok?',
            options: [
              { id: 'a', text: '"I denne teksten skal jeg skrive om skolen."', isCorrect: false },
              { id: 'b', text: '"Karakterer gjør elevene dummere."', isCorrect: true },
              { id: 'c', text: '"Det finnes mange meninger om skolen."', isCorrect: false },
              { id: 'd', text: '"Jeg heter Maria og går i 1. klasse VGS."', isCorrect: false },
            ],
            solution: 'En provoserende påstand som "Karakterer gjør elevene dummere" skaper umiddelbar nysgjerrighet - leseren vil vite mer. De andre er kjedelige eller nøytrale.',
          },
          {
            id: 'norsk-vg1-1-4-n-quiz2-q2',
            task: 'Hva må kroken gjøre i tillegg til å vekke nysgjerrighet?',
            options: [
              { id: 'a', text: 'Oppsummere hele teksten', isCorrect: false },
              { id: 'b', text: 'Være morsom for enhver pris', isCorrect: false },
              { id: 'c', text: 'Være relevant for det du skal si videre', isCorrect: true },
              { id: 'd', text: 'Inneholde et direkte sitat', isCorrect: false },
            ],
            solution: 'En krok som ikke henger sammen med resten av teksten vil bare irritere leseren. Den må både fange oppmerksomhet og peke mot det du skal argumentere for.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Argumentasjonens håndverk ==========
    {
      id: 'norsk-vg1-1-4-n-section3',
      type: 'text',
      content: `## Argumentasjonens håndverk

En ting er å ha en mening. En annen ting er å overbevise andre om at den er riktig. Her kommer argumentasjonens håndverk inn, og det finnes gode teknikker du kan lære.

Den enkleste strukturen er påstand, begrunnelse og eksempel. Først sier du hva du mener. Så forklarer du hvorfor. Så illustrerer du med et konkret eksempel. Dette mønsteret kan du gjenta for hvert hovedpoeng i teksten din.

Det finnes også ulike typer argumenter du kan bruke. Fakta-argumenter viser til statistikk, forskning og dokumentasjon. Når du skriver at forskning fra Folkehelseinstituttet viser at ungdom som bruker mer enn fire timer daglig på sosiale medier har dobbelt så høy risiko for depressive symptomer, bruker du et fakta-argument.

Verdi-argumenter appellerer til moral og rettferdighet. Når du skriver at det er urettferdig at skoleresultater skal avhenge av foreldrenes ressurser, snakker du om verdier. Konsekvens-argumenter peker på hva som vil skje hvis vi handler eller ikke handler på en bestemt måte. Hvis vi ikke kutter utslippene nå, vil konsekvensene være katastrofale for kommende generasjoner.

De beste tekstene kombinerer ulike argumenttyper. Bare fakta kan bli tørt. Bare følelser kan bli utsvevende. Kombinasjonen av begge treffer både hodet og hjertet.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på argumenttyper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-4-n-quiz3-q0',
            task: '"Det er urettferdig at noen elever får mer hjelp hjemme enn andre." Hvilken type argument er dette?',
            options: [
              { id: 'a', text: 'Fakta-argument basert på statistikk', isCorrect: false },
              { id: 'b', text: 'Verdi-argument basert på rettferdighet', isCorrect: true },
              { id: 'c', text: 'Konsekvens-argument om fremtidige effekter', isCorrect: false },
              { id: 'd', text: 'Ekspert-argument med referanse til autoritet', isCorrect: false },
            ],
            solution: 'Dette er et verdi-argument som appellerer til forestillinger om rettferdighet. Det handler om hvordan ting bør være.',
          },
          {
            id: 'norsk-vg1-1-4-n-quiz3-q1',
            task: '"Hvis vi ikke kutter utslippene nå, vil konsekvensene bli katastrofale for kommende generasjoner." Hvilken type argument?',
            options: [
              { id: 'a', text: 'Fakta-argument', isCorrect: false },
              { id: 'b', text: 'Verdi-argument', isCorrect: false },
              { id: 'c', text: 'Konsekvens-argument', isCorrect: true },
              { id: 'd', text: 'Autoritetsargument', isCorrect: false },
            ],
            solution: 'Konsekvens-argumenter peker på hva som vil skje dersom vi handler eller ikke handler. Her advares det om fremtidige konsekvenser.',
          },
          {
            id: 'norsk-vg1-1-4-n-quiz3-q2',
            task: 'Hvorfor bør du kombinere ulike argumenttyper?',
            options: [
              { id: 'a', text: 'For å gjøre teksten lengre', isCorrect: false },
              { id: 'b', text: 'Fordi bare fakta kan være tørt, og bare følelser kan bli utsvevende', isCorrect: true },
              { id: 'c', text: 'Fordi læreren krever det', isCorrect: false },
              { id: 'd', text: 'Det er ikke nødvendig - én type holder', isCorrect: false },
            ],
            solution: 'Kombinasjonen av fakta, verdier og konsekvenser treffer både hodet og hjertet. Bare fakta kan bli tørt, bare følelser kan bli utsvevende.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Språk som virker ==========
    {
      id: 'norsk-vg1-1-4-n-section4',
      type: 'text',
      content: `## Språk som virker

God argumentasjon er ikke nok hvis språket ditt er tungt og kjedelig. Hvordan du skriver er nesten like viktig som hva du skriver.

Hold setningene rimelig korte. Lange, kompliserte setninger med mange innskudd og bisetninger gjør teksten tung å lese og vanskelig å følge for leseren som kanskje sitter på bussen eller scroller på telefonen. Ser du hva jeg mener? Korte setninger er tydeligere. De gir luft til teksten. De lar budskapet skinne gjennom.

Skriv aktivt, ikke passivt. Det bør handles er svakere enn vi må handle. Det ble vedtatt av kommunestyret er svakere enn kommunestyret vedtok. Aktive setninger er tydeligere, mer engasjerende og lettere å lese.

Bruk konkrete ord fremfor abstrakte. I stedet for at mange opplever vanskeligheter, skriv at tusenvis av elever sliter. I stedet for utilstrekkelige ressurser, skriv for få lærere. Konkrete ord maler bilder i leserens hode.

Og bruk retoriske virkemidler bevisst. Et godt retorisk spørsmål kan få leseren til å stoppe opp og tenke. Er det virkelig slik vi vil ha det? Gjentakelse kan forsterke et poeng. Vi fortjener bedre. Vi krever bedre. Vi skal få bedre. Kontraster tydeliggjør motsetninger. Mens politikerne diskuterer, handler ungdommen.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-1-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på effektivt språk i meningsytringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-4-n-quiz4-q0',
            task: 'Hvorfor bør du skrive aktivt i stedet for passivt?',
            options: [
              { id: 'a', text: 'Fordi avisene krever det', isCorrect: false },
              { id: 'b', text: 'Fordi aktive setninger er tydeligere og mer engasjerende', isCorrect: true },
              { id: 'c', text: 'Fordi passive setninger alltid er grammatisk feil', isCorrect: false },
              { id: 'd', text: 'Fordi det gjør teksten lengre', isCorrect: false },
            ],
            solution: '"Kommunen kuttet budsjettet" er sterkere enn "Budsjettet ble kuttet". Aktiv stemme viser hvem som handler.',
          },
          {
            id: 'norsk-vg1-1-4-n-quiz4-q1',
            task: 'Hvilken av disse setningene er mest effektiv i et debattinnlegg?',
            options: [
              { id: 'a', text: '"Det finnes mange som opplever utilstrekkelige ressurser i skolen."', isCorrect: false },
              { id: 'b', text: '"Tusenvis av elever har for få lærere."', isCorrect: true },
              { id: 'c', text: '"Det kan argumenteres for at skolesituasjonen er vanskelig."', isCorrect: false },
              { id: 'd', text: '"Ressurssituasjonen er suboptimal i utdanningssektoren."', isCorrect: false },
            ],
            solution: 'Konkrete ord ("tusenvis av elever", "for få lærere") maler tydelige bilder. Abstrakte uttrykk som "utilstrekkelige ressurser" er vage og kjedelige.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Fra skriving til publisering ==========
    {
      id: 'norsk-vg1-1-4-n-section5',
      type: 'text',
      content: `## Fra skriving til publisering

Du har skrevet en tekst du er fornøyd med. Hva nå? Veien til publisering krever litt praktisk kunnskap.

Finn riktig mottaker. Ulike aviser har ulike profiler og målgrupper. En lokalsak hører hjemme i lokalavisen. En nasjonal sak passer bedre i Aftenposten eller VG. Saker rettet mot ungdom kan passe i Si;D eller lignende ungdomssider. Les avisen du vil sende til, og få en følelse av hva slags innlegg de publiserer.

Hold deg til lengdekravene. De fleste aviser oppgir hvor lange innlegg de aksepterer. Hvis de sier maksimalt 3000 tegn, ikke send inn 5000. Redaktøren har ikke tid til å kutte ned teksten din, og den havner i papirkurven.

Skriv en kort presentasjon av deg selv. Aviser liker å vite hvem du er og hvorfor du har noe å si om dette temaet. Hvis du skriver om skolen, nevn at du er elev. Hvis du har spesiell erfaring med temaet, ta det med.

Vær forberedt på respons. Hvis innlegget ditt publiseres og får oppmerksomhet, kan det komme tilsvar. Noen kan være saklige, andre kan være ubehagelige. Husk at du har rett til å ikke svare på alt, og at du alltid bør holde deg saklig selv når andre ikke gjør det.

Og ikke gi opp hvis det første innlegget ditt ikke publiseres. Skriv det neste. Og det neste. Hver tekst gjør deg bedre.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-1-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på veien til publisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-4-n-quiz5-q0',
            task: 'Hva bør du gjøre før du sender inn et leserinnlegg til en avis?',
            options: [
              { id: 'a', text: 'Bare sende det til så mange aviser som mulig samtidig', isCorrect: false },
              { id: 'b', text: 'Sjekke avisens krav til lengde og profil, og tilpasse innlegget', isCorrect: true },
              { id: 'c', text: 'Skrive så langt som mulig for å virke grundig', isCorrect: false },
              { id: 'd', text: 'Unngå å oppgi hvem du er for å være anonym', isCorrect: false },
            ],
            solution: 'Ved å tilpasse innlegget til mottakeren øker du sjansen for publisering. Det viser at du har gjort hjemmeleksen din.',
          },
          {
            id: 'norsk-vg1-1-4-n-quiz5-q1',
            task: 'Hva er den viktigste forskjellen mellom strukturen påstand-begrunnelse-eksempel?',
            options: [
              { id: 'a', text: 'Påstanden er det du mener, begrunnelsen forklarer hvorfor, eksempelet illustrerer', isCorrect: true },
              { id: 'b', text: 'Alle tre betyr det samme - det er bare tre ord for argument', isCorrect: false },
              { id: 'c', text: 'Påstanden kommer alltid til slutt', isCorrect: false },
              { id: 'd', text: 'Eksempelet er viktigere enn begrunnelsen', isCorrect: false },
            ],
            solution: 'Først sier du hva du mener (påstand), så forklarer du hvorfor (begrunnelse), så illustrerer du med noe konkret (eksempel). Dette mønsteret gjør argumenter tydelige.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Veien til meningssidene

Du har nå lært det viktigste om kronikk og leserinnlegg. Her er nøkkelpunktene:

**Sjangerforskjeller:**
Leserinnlegget er kort og direkte, kronikken lengre og grundigere. Velg format etter hva du har å si og hvor mye plass du trenger.

**Strukturen som virker:**
Start med en krok som fanger oppmerksomheten. Presenter tesen tidlig. Bygg opp argumentene i hoveddelen. Avslutt med kraft.

**Argumenttyper:**
Kombiner fakta-argumenter, verdi-argumenter og konsekvens-argumenter for å treffe både hodet og hjertet.

**Språklige tips:**
Korte setninger, aktiv stemme, konkrete ord, og bevisst bruk av retoriske virkemidler.

**Nøkkelbegreper:**
Kronikk, leserinnlegg, krok, tese, påstand-begrunnelse-eksempel, fakta-argument, verdi-argument, konsekvens-argument.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5 NARRATIV: Retorisk analyse
// ============================================================================

export const CHAPTER_NORSK_VG1_1_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-1-5-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '1.5',
  title: 'Retorisk analyse',
  subtitle: 'Narrativ versjon',
  description: 'Bli en kommunikasjonsdetektiv - lær å avsløre hvordan tekster og taler påvirker deg.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjøre rede for og reflektere over bruken av retoriske appellformer og språklige virkemidler i sakprosatekster',
  ],
  linkedChapterId: 'norsk-vg1-1-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-1-5-n-intro',
      type: 'text',
      content: `## Bak kulissene i kommunikasjonen

Hver dag bombarderes du med budskap. Reklamer vil at du skal kjøpe noe. Politikere vil at du skal stemme på dem. Influencere vil at du skal like og dele. Nyhetsmedier vil at du skal klikke. Alle disse budskapene er nøye designet for å påvirke deg, ofte uten at du legger merke til det.

Retorisk analyse er kunsten å se gjennom disse strategiene. Det handler om å forstå ikke bare hva noen sier, men hvordan de sier det og hvorfor de gjør akkurat de valgene de gjør. Når du mestrer retorisk analyse, blir du en smartere mottaker av informasjon og en bedre formidler selv.

I dette kapittelet skal du lære begreper som kairos, aptum og retorisk situasjon. Du skal lære å stille de riktige spørsmålene til enhver tekst eller tale. Og du skal oppdage at selv de mest spontane ytringene ofte er mer strategiske enn de virker.`,
    },

    // ========== SEKSJON 1: Den retoriske situasjonen ==========
    {
      id: 'norsk-vg1-1-5-n-section1',
      type: 'text',
      content: `## Den retoriske situasjonen

All kommunikasjon skjer i en kontekst. Denne konteksten kaller vi den retoriske situasjonen, og den består av tre hovedelementer som påvirker alt som sies og hvordan det mottas.

Det første elementet er det påtrengende problemet, eller exigence på fagspråket. Dette er situasjonen som gjør at noen føler behov for å si noe. Tenk deg en naturkatastrofe som rammer landet. Plutselig er det et sterkt behov for at noen tar til orde, at ledere snakker til befolkningen, at eksperter forklarer hva som skjer. Det påtrengende problemet skaper rom for kommunikasjon.

Det andre elementet er publikum. Men ikke et hvilket som helst publikum. I retorisk analyse snakker vi om det publikummet som faktisk kan gjøre noe med situasjonen. Hvis du holder en tale om å endre skolepolitikken, er det relevante publikummet politikere og velgere, ikke barn som ikke har stemmerett.

Det tredje elementet er de retoriske vilkårene, altså mulighetene og begrensningene i situasjonen. Hva er det passende å si? Hva forventes? Hvor lang tid har du? Hvilket medium bruker du? En tale i en begravelse har helt andre vilkår enn et innlegg på sosiale medier.

Disse tre elementene til sammen danner rammen for all kommunikasjon.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-1-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på den retoriske situasjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-5-n-quiz1-q0',
            task: 'Hva menes med "det påtrengende problemet" (exigence) i retorisk analyse?',
            options: [
              { id: 'a', text: 'Et problem som taleren personlig sliter med', isCorrect: false },
              { id: 'b', text: 'Situasjonen som skaper behov for at noen tar til orde', isCorrect: true },
              { id: 'c', text: 'Et vanskelig spørsmål fra publikum', isCorrect: false },
              { id: 'd', text: 'En feil i talerens argumentasjon', isCorrect: false },
            ],
            solution: 'Det påtrengende problemet er situasjonen som gjør at noen føler behov for å kommunisere - en krise, urettferdighet eller hendelse.',
          },
          {
            id: 'norsk-vg1-1-5-n-quiz1-q1',
            task: 'Hvilke tre hovedelementer utgjør den retoriske situasjonen?',
            options: [
              { id: 'a', text: 'Etos, patos og logos', isCorrect: false },
              { id: 'b', text: 'Innledning, hoveddel og avslutning', isCorrect: false },
              { id: 'c', text: 'Det påtrengende problemet, publikum og retoriske vilkår', isCorrect: true },
              { id: 'd', text: 'Avsender, budskap og mottaker', isCorrect: false },
            ],
            solution: 'Den retoriske situasjonen består av det påtrengende problemet (hva som utløser kommunikasjonen), publikum (hvem som kan handle) og de retoriske vilkårene (muligheter og begrensninger).',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Kairos - det rette øyeblikket ==========
    {
      id: 'norsk-vg1-1-5-n-section2',
      type: 'text',
      content: `## Kairos - det rette øyeblikket

De gamle grekerne hadde et begrep som fanger noe viktig om kommunikasjon: kairos. Det handler om å si rett ting til rett tid, å gripe øyeblikket når det byr seg.

Tenk deg at du vil snakke om klimaendringer. Du kan holde den talen når som helst, men hvis du holder den rett etter en voldsom flom eller en ekstrem hetebølge, treffer budskapet helt annerledes. Folk er mer mottakelige. Problemet føles akutt og virkelig. Du har utnyttet kairos.

Politikere og kommunikasjonsstrateger tenker konstant på kairos. De venter på riktig øyeblikk for å lansere en sak. De responderer raskt når noe aktuelt skjer som støtter deres budskap. De vet at timing kan utgjøre forskjellen mellom en tale som gir gjenklang og en som forsvinner i støyen.

Men kairos kan også misbrukes. Å utnytte en tragedie for politisk gevinst, å gripe et sårbart øyeblikk for å selge noe, det oppleves som usmakelig og opportunistisk. God bruk av kairos handler ikke bare om å gripe øyeblikket, men om å gjøre det på en etisk måte.

Når du analyserer en tekst eller tale, spør deg alltid: Hvorfor kommer dette akkurat nå? Hva er det aktuelle som gjør budskapet relevant? Hadde det hatt samme effekt på et annet tidspunkt?`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-1-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kairos i retorisk analyse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-5-n-quiz2-q0',
            task: 'En klimaaktivist holder tale om global oppvarming dagen etter en rekordvarm sommer. Hva utnytter aktivisten?',
            options: [
              { id: 'a', text: 'Etos - sin personlige troverdighet', isCorrect: false },
              { id: 'b', text: 'Patos - publikums følelser', isCorrect: false },
              { id: 'c', text: 'Kairos - det rette øyeblikket', isCorrect: true },
              { id: 'd', text: 'Logos - statistikk og fakta', isCorrect: false },
            ],
            solution: 'Ved å snakke om klimaendringer rett etter en hetebølge utnytter aktivisten kairos. Folk har opplevd konsekvensene og er mer mottakelige.',
          },
          {
            id: 'norsk-vg1-1-5-n-quiz2-q1',
            task: 'Når kan god bruk av kairos bli uetisk?',
            options: [
              { id: 'a', text: 'Kairos er alltid etisk å bruke', isCorrect: false },
              { id: 'b', text: 'Når man utnytter en tragedie for personlig gevinst', isCorrect: true },
              { id: 'c', text: 'Når man snakker om noe aktuelt', isCorrect: false },
              { id: 'd', text: 'Kairos er aldri etisk - det er manipulasjon', isCorrect: false },
            ],
            solution: 'Å utnytte en tragedie eller et sårbart øyeblikk for politisk eller kommersiell gevinst oppleves som usmakelig. God kairos-bruk er ærlig og respektfull.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Aptum - det passende ==========
    {
      id: 'norsk-vg1-1-5-n-section3',
      type: 'text',
      content: `## Aptum - det passende

Et annet sentralt begrep er aptum, som handler om hva som er passende i en gitt situasjon. Vi skiller mellom to typer: indre aptum og ytre aptum.

Indre aptum handler om samsvar innad i teksten. Passer stilen til innholdet? Harmonerer de ulike delene med hverandre? Hvis du skriver om en alvorlig sak men bruker en spøkefull tone, mangler teksten indre aptum. Formen og innholdet trekker i ulike retninger, og det skaper forvirring hos leseren.

Ytre aptum handler om samsvar med situasjonen utenfor teksten. Passer det du sier til hvem du snakker til? Passer det til anledningen? Til din rolle som avsender? Til mediet du bruker? En uformell tone i et jobbintervju eller en spøk i en begravelsestale bryter med ytre aptum.

Tenk på aptum som en klesdrakt. Du kler deg annerledes til en fest enn til en begravelse, ikke fordi den ene dressen er objektivt bedre, men fordi ulike situasjoner krever ulik påkledning. På samme måte krever ulike kommunikasjonssituasjoner ulik språklig påkledning.

De beste kommunikatørene leser situasjonen og tilpasser seg intuitivt. De vet når det er rom for humor og når det kreves alvor. De vet når de skal bruke fagspråk og når de skal snakke som folk flest. Denne evnen til tilpasning er kjernen i aptum.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-1-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på aptum - det passende:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-5-n-quiz3-q0',
            task: 'Hva er forskjellen mellom indre og ytre aptum?',
            options: [
              { id: 'a', text: 'Indre aptum handler om følelser, ytre om logikk', isCorrect: false },
              { id: 'b', text: 'Indre aptum er samsvar innad i teksten, ytre er samsvar med situasjonen', isCorrect: true },
              { id: 'c', text: 'Indre aptum gjelder skriftlige tekster, ytre gjelder muntlige', isCorrect: false },
              { id: 'd', text: 'Indre aptum er obligatorisk, ytre er valgfritt', isCorrect: false },
            ],
            solution: 'Indre aptum = stil passer til innhold innad i teksten. Ytre aptum = teksten passer til situasjonen utenfor.',
          },
          {
            id: 'norsk-vg1-1-5-n-quiz3-q1',
            task: 'En politiker bruker slang og vitser i en tale om en naturkatastrofe. Hva mangler?',
            options: [
              { id: 'a', text: 'Kairos', isCorrect: false },
              { id: 'b', text: 'Logos', isCorrect: false },
              { id: 'c', text: 'Ytre aptum - tonen passer ikke til anledningen', isCorrect: true },
              { id: 'd', text: 'Etos', isCorrect: false },
            ],
            solution: 'Vitser om en naturkatastrofe bryter med ytre aptum. Anledningen krever alvor og empati, ikke humor.',
          },
          {
            id: 'norsk-vg1-1-5-n-quiz3-q2',
            task: 'En tekst om barns rettigheter er skrevet i et strengt juridisk fagspråk. Innholdet er viktig, men stilen gjør det vanskelig å lese. Hva er problemet?',
            options: [
              { id: 'a', text: 'Ytre aptum - teksten passer ikke for allmennheten', isCorrect: true },
              { id: 'b', text: 'Indre aptum - stil og innhold harmonerer', isCorrect: false },
              { id: 'c', text: 'Kairos - tidspunktet er feil', isCorrect: false },
              { id: 'd', text: 'Det er ikke noe problem', isCorrect: false },
            ],
            solution: 'Ytre aptum handler om at teksten passer til mottakeren. Hvis målgruppen er allmennheten, er juridisk fagspråk et dårlig valg fordi det ekskluderer.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Å gjennomføre en retorisk analyse ==========
    {
      id: 'norsk-vg1-1-5-n-section4',
      type: 'text',
      content: `## Å gjennomføre en retorisk analyse

Nå har du verktøyene. La oss se på hvordan du faktisk gjennomfører en retorisk analyse steg for steg.

Start med å kartlegge den retoriske situasjonen. Hvem er avsenderen, og hvilken bakgrunn og rolle har de? Hvem er den tiltenkte mottakeren? Hva er anledningen, og hva er det påtrengende problemet som motiverer kommunikasjonen? Hvilket medium brukes, og hvilke muligheter og begrensninger gir det?

Deretter identifiserer du budskap og formål. Hva er hovedpåstanden eller tesen? Hva vil avsenderen oppnå? Vil de informere, overbevise, underholde, trøste, mobilisere?

Så analyserer du appellformene. Du husker etos, patos og logos fra tidligere kapitler. Hvordan bygger avsenderen troverdighet? Hvordan appellerer de til følelser? Hvordan bruker de logikk og fakta? Hvilken appellform dominerer, og hvorfor tror du det er slik?

Undersøk også de språklige virkemidlene og strukturen. Hvilke retoriske grep brukes? Gjentakelse, kontraster, metaforer, retoriske spørsmål? Hvordan er teksten eller talen bygget opp?

Til slutt vurderer du aptum og effekt. Er kommunikasjonen passende for situasjonen? Er den effektiv? Når den målet sitt?

En god retorisk analyse binder alt dette sammen til en helhetlig forståelse av hvordan kommunikasjonen fungerer.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-1-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på gjennomføring av retorisk analyse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-5-n-quiz4-q0',
            task: 'Hva bør du gjøre først i en retorisk analyse?',
            options: [
              { id: 'a', text: 'Vurdere om teksten er godt skrevet rent språklig', isCorrect: false },
              { id: 'b', text: 'Kartlegge den retoriske situasjonen: avsender, mottaker, anledning', isCorrect: true },
              { id: 'c', text: 'Telle hvor mange ganger forfatteren bruker metaforer', isCorrect: false },
              { id: 'd', text: 'Finne feil og svakheter i argumentasjonen', isCorrect: false },
            ],
            solution: 'Start alltid med konteksten. Hvem snakker, til hvem, om hva, og hvorfor? Uten dette kan du ikke vurdere de retoriske valgene.',
          },
          {
            id: 'norsk-vg1-1-5-n-quiz4-q1',
            task: 'Hva er riktig rekkefølge for trinnene i en retorisk analyse?',
            options: [
              { id: 'a', text: 'Virkemidler - Situasjon - Budskap - Aptum', isCorrect: false },
              { id: 'b', text: 'Aptum - Virkemidler - Situasjon - Budskap', isCorrect: false },
              { id: 'c', text: 'Situasjon - Budskap - Appellformer og virkemidler - Aptum og effekt', isCorrect: true },
              { id: 'd', text: 'Budskap - Situasjon - Aptum - Virkemidler', isCorrect: false },
            ],
            solution: 'Først kartlegger du situasjonen, deretter identifiserer du budskap og formål, så analyserer du appellformer og virkemidler, og til slutt vurderer du aptum og effekt.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Fra analyse til kritisk bevissthet ==========
    {
      id: 'norsk-vg1-1-5-n-section5',
      type: 'text',
      content: `## Fra analyse til kritisk bevissthet

Retorisk analyse er mer enn en akademisk øvelse. Det er et verktøy for å navigere i en verden full av forsøk på å påvirke deg.

Når du ser en reklame, kan du nå spørre: Hvilke appellformer brukes? Spiller de på frykt, på ønsket om tilhørighet, på autoritet? Er argumentene de bruker faktisk holdbare, eller er det bare emosjonell manipulasjon?

Når du hører en politisk tale, kan du spørre: Hvordan bygger taleren etos? Er påstandene støttet av fakta, eller bare fremført med overbevisende kraft? Utnytter de kairos på en legitim måte, eller er det opportunistisk?

Når du leser en nyhetssak, kan du spørre: Hvordan er denne vinklet? Hvilke perspektiver er utelatt? Hvem tjener på at saken presenteres på denne måten?

Dette betyr ikke at du skal bli kynisk og mistro alt og alle. Det betyr at du skal være bevisst. Du skal forstå at all kommunikasjon innebærer valg, og at disse valgene har konsekvenser. Noen ganger er valgene gode og ærlige. Andre ganger er de manipulative.

Retorisk kompetanse gjør deg til en frigjort mottaker som ikke bare sluker budskap ukritisk, men som forstår hvordan de er bygget opp og kan vurdere dem på egne premisser.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-1-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på retorisk analyse som verktøy:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-5-n-quiz5-q0',
            task: 'Hva er hovedformålet med å lære retorisk analyse?',
            options: [
              { id: 'a', text: 'Å kunne kritisere andres tekster i klasserommet', isCorrect: false },
              { id: 'b', text: 'Å bli en bedre manipulator selv', isCorrect: false },
              { id: 'c', text: 'Å bli en bevisst mottaker som forstår hvordan kommunikasjon påvirker', isCorrect: true },
              { id: 'd', text: 'Å unngå all påvirkning ved å ignorere mediene', isCorrect: false },
            ],
            solution: 'Retorisk analyse handler om bevissthet og kritisk tenkning - å forstå hvordan kommunikasjon fungerer og vurdere budskap på egne premisser.',
          },
          {
            id: 'norsk-vg1-1-5-n-quiz5-q1',
            task: 'Du ser en reklame med en kjent idrettsutøver som anbefaler et kosttilskudd. Hva bør du spørre deg?',
            options: [
              { id: 'a', text: 'Ingenting - kjente personer er alltid troverdige', isCorrect: false },
              { id: 'b', text: 'Hvilke appellformer brukes, og er argumentene faktisk holdbare?', isCorrect: true },
              { id: 'c', text: 'Om produktet er dyrt', isCorrect: false },
              { id: 'd', text: 'Om reklamen er underholdende', isCorrect: false },
            ],
            solution: 'Idrettsutøveren gir etos, men har de faktisk ekspertise på kosttilskudd? Spør deg alltid hvilke appellformer som brukes og om argumentene holder.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-1-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Kommunikasjonsdetektivens verktøy

Du har nå lært de viktigste begrepene for retorisk analyse. Her er en rask gjennomgang:

**Den retoriske situasjonen:**
Det påtrengende problemet (exigence), publikum, og de retoriske vilkårene. Disse tre elementene danner rammen for all kommunikasjon.

**Kairos:**
Det rette øyeblikket. Å si rett ting til rett tid. Effektiv kommunikasjon utnytter aktualitet og kontekst.

**Aptum:**
Det passende. Indre aptum er samsvar innad i teksten, ytre aptum er samsvar med situasjonen utenfor.

**Analysetrinnene:**
Kartlegg situasjonen, identifiser budskap og formål, analyser appellformer og virkemidler, vurder aptum og effekt.

**Nøkkelbegreper:**
Retorisk situasjon, exigence, kairos, aptum, indre og ytre aptum, etos, patos, logos.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.6 NARRATIV: Retorikk i praksis
// ============================================================================

export const CHAPTER_NORSK_VG1_1_6_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-1-6-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '1.6',
  title: 'Retorikk i praksis',
  subtitle: 'Narrativ versjon',
  description: 'Fra teori til handling - slik holder du taler og presentasjoner som folk husker.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lytte til andre, bygge opp saklig argumentasjon og bruke retoriske appellformer i diskusjoner',
  ],
  linkedChapterId: 'norsk-vg1-1-6',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-1-6-n-intro',
      type: 'text',
      content: `## Fra kunnskap til handling

Du har nå lært om etos, patos og logos. Du har lært om kairos og aptum. Du kan analysere andres taler og tekster. Men kan du selv stå foran en forsamling og overbevise dem om noe?

Retorikk er til syvende og sist en praktisk ferdighet. Det handler ikke bare om å forstå hvordan overbevisning fungerer, men om å kunne gjøre det selv. Og det krever øvelse.

I dette kapittelet skal vi gå fra teori til praksis. Du skal lære å strukturere en tale, å fremføre den med overbevisning, og å tilpasse budskapet til ulike situasjoner. Du skal lære at nervøsitet er normalt og håndterbart. Og du skal forstå at den beste måten å bli god på er å gjøre det igjen og igjen.`,
    },

    // ========== SEKSJON 1: Talens arkitektur ==========
    {
      id: 'norsk-vg1-1-6-n-section1',
      type: 'text',
      content: `## Talens arkitektur

De gamle romerske retorikerne utviklet en struktur for talen som har stått seg i over to tusen år. Denne strukturen har fem deler, og selv om du ikke trenger å bruke alle i enhver situasjon, er det nyttig å kjenne dem.

Exordium er innledningen. Her skal du fange oppmerksomheten, etablere kontakt med publikum, og introdusere hva du skal snakke om. Start gjerne med noe overraskende, et spørsmål, en historie, eller en provoserende påstand. Første inntrykk er viktig.

Narratio er bakgrunnsdelen. Her gir du den informasjonen publikum trenger for å forstå saken. Du setter scenen, forklarer konteksten, presenterer problemet. Vær saklig og objektiv i denne delen - du bygger opp mot argumentasjonen som kommer.

Argumentatio er hoveddelen der du legger frem argumentene dine. Her bruker du etos, patos og logos bevisst. Du presenterer bevis, eksempler, statistikk. Du bygger opp mot det sterkeste argumentet ditt.

Refutatio er der du møter motargumentene. Ved å anerkjenne og imøtegå innvendinger viser du at du har tenkt grundig, og du styrker din egen posisjon.

Peroratio er avslutningen. Her oppsummerer du hovedbudskapet, appellerer gjerne til følelsene, og avslutter med en oppfordring til handling. Avslutt med kraft, ikke med en svak setning.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-1-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på talens klassiske struktur:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-6-n-quiz1-q0',
            task: 'Hva kalles innledningsdelen av en klassisk tale?',
            options: [
              { id: 'a', text: 'Narratio', isCorrect: false },
              { id: 'b', text: 'Exordium', isCorrect: true },
              { id: 'c', text: 'Argumentatio', isCorrect: false },
              { id: 'd', text: 'Peroratio', isCorrect: false },
            ],
            solution: 'Exordium er innledningen der du fanger oppmerksomheten og etablerer kontakt med publikum.',
          },
          {
            id: 'norsk-vg1-1-6-n-quiz1-q1',
            task: 'Hva er formålet med refutatio i en tale?',
            options: [
              { id: 'a', text: 'Å presentere bakgrunnsinformasjon', isCorrect: false },
              { id: 'b', text: 'Å oppsummere hovedbudskapet', isCorrect: false },
              { id: 'c', text: 'Å møte og imøtegå motargumenter', isCorrect: true },
              { id: 'd', text: 'Å fange publikums oppmerksomhet', isCorrect: false },
            ],
            solution: 'Refutatio er delen der du anerkjenner og imøtegår innvendinger. Det styrker din posisjon og viser at du har tenkt grundig.',
          },
          {
            id: 'norsk-vg1-1-6-n-quiz1-q2',
            task: 'I hvilken rekkefølge kommer de fem delene i en klassisk tale?',
            options: [
              { id: 'a', text: 'Argumentatio - Exordium - Narratio - Peroratio - Refutatio', isCorrect: false },
              { id: 'b', text: 'Exordium - Narratio - Argumentatio - Refutatio - Peroratio', isCorrect: true },
              { id: 'c', text: 'Narratio - Exordium - Refutatio - Argumentatio - Peroratio', isCorrect: false },
              { id: 'd', text: 'Peroratio - Exordium - Narratio - Argumentatio - Refutatio', isCorrect: false },
            ],
            solution: 'Rekkefølgen er: Exordium (innledning), Narratio (bakgrunn), Argumentatio (hoveddel), Refutatio (motargumenter), Peroratio (avslutning).',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Actio - kunsten å fremføre ==========
    {
      id: 'norsk-vg1-1-6-n-section2',
      type: 'text',
      content: `## Actio - kunsten å fremføre

Du kan ha den beste talen i verden, men hvis du fremfører den monotont mens du stirrer ned i et manus, vil den falle flatt. Actio handler om hvordan du presenterer, og den kan utgjøre hele forskjellen.

Stemmebruk er fundamentalt. Snakk høyt nok til at alle hører deg, men ikke rop. Varier tempoet for å skape interesse. Bruk pauser for å la viktige poenger synke inn. Legg trykk på de ordene som betyr mest. Unngå monoton tale som får folk til å sovne.

Kroppsspråk kommuniserer like mye som ordene dine. Stå stødig, ikke vipp eller vri nervøst. Bruk rommet hvis det er passende, men ikke vandre rastløst. Naturlige gester understreker poenger, men unngå mekaniske bevegelser. Og fremfor alt: Ha øyekontakt med publikum. Se på dem, ikke på manuset, ikke på veggen bak i rommet, ikke på skoene dine.

Mange sliter med nervøsitet, og det er helt normalt. Nervøsitet er egentlig bare kroppen som forbereder seg på en viktig oppgave. Du kan håndtere den ved å puste dypt før du starter, ved å fokusere på budskapet i stedet for på deg selv, og ved å huske at publikum faktisk vil at du skal lykkes. De fleste tilhørere heier på deg, ikke imot deg.

Og husk: Øvelse hjelper. Jo mer du presenterer, jo mer komfortabel blir du. De beste talerne virker naturlige nettopp fordi de har øvd så mye at det har blitt naturlig.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-1-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på actio og fremføring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-6-n-quiz2-q0',
            task: 'Hva er det viktigste rådet for å håndtere nervøsitet før en presentasjon?',
            options: [
              { id: 'a', text: 'Tenk så mye som mulig på deg selv og hvordan du virker', isCorrect: false },
              { id: 'b', text: 'Unngå øyekontakt med publikum', isCorrect: false },
              { id: 'c', text: 'Fokuser på budskapet i stedet for på deg selv, og pust dypt', isCorrect: true },
              { id: 'd', text: 'Les manuset ord for ord så du ikke glemmer noe', isCorrect: false },
            ],
            solution: 'Ved å fokusere på budskapet tar du oppmerksomheten vekk fra nervøsiteten. Dyp pusting roer ned nervesystemet.',
          },
          {
            id: 'norsk-vg1-1-6-n-quiz2-q1',
            task: 'Hvorfor er øyekontakt viktig når du holder en tale?',
            options: [
              { id: 'a', text: 'For å skremme publikum til å høre etter', isCorrect: false },
              { id: 'b', text: 'For å etablere kontakt og vise at du snakker til dem', isCorrect: true },
              { id: 'c', text: 'For å sjekke om noen sover', isCorrect: false },
              { id: 'd', text: 'Det er ikke viktig - innholdet er alt', isCorrect: false },
            ],
            solution: 'Øyekontakt skaper forbindelse mellom taler og publikum. Det viser at du snakker til dem, ikke bare resiterer et manus.',
          },
          {
            id: 'norsk-vg1-1-6-n-quiz2-q2',
            task: 'Hva betyr "actio" i retorisk sammenheng?',
            options: [
              { id: 'a', text: 'Innholdet i talen', isCorrect: false },
              { id: 'b', text: 'Strukturen på argumentene', isCorrect: false },
              { id: 'c', text: 'Kunsten å fremføre - stemme, kroppsspråk og øyekontakt', isCorrect: true },
              { id: 'd', text: 'Å skrive ned talen', isCorrect: false },
            ],
            solution: 'Actio er fremføringen: stemmebruk, kroppsspråk, øyekontakt og bevegelse. En god tale kan falle flatt med dårlig actio.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Tilpasning til situasjonen ==========
    {
      id: 'norsk-vg1-1-6-n-section3',
      type: 'text',
      content: `## Tilpasning til situasjonen

Den samme talen fungerer ikke i alle situasjoner. En god retoriker tilpasser budskapet til publikum, anledning og kontekst. Dette er kairos og aptum i praksis.

Tenk på publikummet ditt. Hvem er de? Hva vet de fra før? Hva bryr de seg om? Hvis du snakker til ungdomsskoleelever, bruker du andre eksempler og et annet språk enn om du snakker til pensjonister. Hvis du snakker til eksperter på feltet, kan du bruke fagtermer. Hvis du snakker til folk flest, må du forklare mer.

Tenk på anledningen. Er det en formell eller uformell setting? Er det en feiring eller en alvorlig stund? Er det rom for humor, eller krever situasjonen alvor? Å vurdere dette feil kan ødelegge hele talen.

Tenk på tiden du har. Fem minutter krever en helt annen tilnærming enn tretti minutter. I en kort tale må du være knallhard i prioriteringen. I en lengre tale kan du utdype og gi flere eksempler.

Og tenk på formålet. Vil du informere, overbevise, underholde, trøste, inspirere? Ulike formål krever ulike strategier. En informativ tale legger vekt på logos. En inspirerende tale legger vekt på patos. En overbevisende tale må balansere alt.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-1-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på tilpasning til situasjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-6-n-quiz3-q0',
            task: 'Du skal holde en tale om klimaendringer for kommunepolitikere. Hva bør du legge mest vekt på?',
            options: [
              { id: 'a', text: 'Personlige historier om klimaangst', isCorrect: false },
              { id: 'b', text: 'Morsomme vitser for god stemning', isCorrect: false },
              { id: 'c', text: 'Lokale konsekvenser, kostnader og konkrete tiltak', isCorrect: true },
              { id: 'd', text: 'Generell informasjon om klimaendringer', isCorrect: false },
            ],
            solution: 'Kommunepolitikere kan påvirke lokalt. Fokuser på hva som er relevant for dem: lokal virkelighet, kostnader og konkrete tiltak.',
          },
          {
            id: 'norsk-vg1-1-6-n-quiz3-q1',
            task: 'Du har bare fem minutter til en presentasjon. Hva er viktigst?',
            options: [
              { id: 'a', text: 'Å snakke så fort som mulig for å få med alt', isCorrect: false },
              { id: 'b', text: 'Å prioritere hardt og fokusere på ett eller to hovedpoenger', isCorrect: true },
              { id: 'c', text: 'Å be om mer tid', isCorrect: false },
              { id: 'd', text: 'Å droppe innledning og avslutning', isCorrect: false },
            ],
            solution: 'Kort tid krever knallhard prioritering. Fokuser på de viktigste poengene og si dem tydelig, fremfor å prøve å dekke alt.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Eksempler fra virkelige taler ==========
    {
      id: 'norsk-vg1-1-6-n-section4',
      type: 'text',
      content: `## Eksempler fra virkelige taler

La oss se på noen berømte taler og hva som gjør dem effektive.

Martin Luther King Jr. holdt "I Have a Dream" i 1963 foran 250 000 mennesker. Talen er et mesterverk i patos. Gjentakelsen av "I have a dream" skaper rytme og bygger intensitet. Han maler levende bilder av en bedre fremtid. Men han bruker også logos ved å referere til den amerikanske uavhengighetserklæringen, og etos ved å snakke som far og som del av det afroamerikanske fellesskapet.

Greta Thunberg holdt sin berømte FN-tale i 2019 med gjentakelsen "How dare you!" som sjokkerte mange. Hun brøt med forventningene til en FN-tale ved å være direkte konfronterende. Noen mener det var genialt fordi det skapte oppmerksomhet og uttrykte ekte frustrasjon. Andre mener det var for aggressivt og fremmedgjorde dem hun forsøkte å overbevise. Uansett hva du mener, illustrerer talen hvordan retoriske valg har konsekvenser.

Jens Stoltenberg holdt tale etter terrorangrepene 22. juli 2011. Her handlet det om å trøste en nasjon i sorg, og han mestret det ved å balansere sorg med håp. Han siterte en ung AUF-jente som sa at hvis én mann kan vise så mye hat, kan vi alle vise hvor mye kjærlighet vi har sammen. Sitatet ble ikonisk fordi det fanget budskapet perfekt.

Alle disse talerne gjorde bevisste valg som passet til deres situasjon, publikum og formål.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-1-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på berømte taler og retoriske valg:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-6-n-quiz4-q0',
            task: 'Hva gjør gjentakelsen "I have a dream" effektiv i Martin Luther Kings tale?',
            options: [
              { id: 'a', text: 'Den gjør talen lengre og mer imponerende', isCorrect: false },
              { id: 'b', text: 'Den skaper rytme, bygger intensitet, og gjør budskapet minneverdig', isCorrect: true },
              { id: 'c', text: 'Den viser at King hadde lite å si', isCorrect: false },
              { id: 'd', text: 'Den var tilfeldig og ikke planlagt', isCorrect: false },
            ],
            solution: 'Gjentakelse (anafor) skaper musikalsk rytme, bygger intensitet for hvert nye "I have a dream", og gjør budskapet lettere å huske.',
          },
          {
            id: 'norsk-vg1-1-6-n-quiz4-q1',
            task: 'Greta Thunbergs "How dare you!"-tale var direkte konfronterende. Hva illustrerer dette om retorikk?',
            options: [
              { id: 'a', text: 'At man alltid bør være aggressiv for å bli hørt', isCorrect: false },
              { id: 'b', text: 'At retoriske valg har konsekvenser - de kan både begeistre og fremmedgjøre', isCorrect: true },
              { id: 'c', text: 'At FN-taler alltid er konfronterende', isCorrect: false },
              { id: 'd', text: 'At unge talere alltid er bedre enn eldre', isCorrect: false },
            ],
            solution: 'Thunbergs direkte stil skapte oppmerksomhet og uttrykte frustrasjon, men fremmedgjorde noen. Retoriske valg har alltid konsekvenser.',
          },
          {
            id: 'norsk-vg1-1-6-n-quiz4-q2',
            task: 'I Stoltenbergs tale etter 22. juli siterte han en ung AUF-jente. Hvilken effekt hadde dette?',
            options: [
              { id: 'a', text: 'Det var bare for å fylle ut tiden', isCorrect: false },
              { id: 'b', text: 'Det viste at han hadde forberedt seg godt', isCorrect: false },
              { id: 'c', text: 'Sitatet fanget budskapet perfekt - kjærlighet mot hat', isCorrect: true },
              { id: 'd', text: 'Det distraherte fra hovedbudskapet', isCorrect: false },
            ],
            solution: 'Sitatet om at "én manns hat kan møtes med alles kjærlighet" ble ikonisk fordi det fanget hele budskapet i én setning - fra en ung person som selv var rammet.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Din tur ==========
    {
      id: 'norsk-vg1-1-6-n-section5',
      type: 'text',
      content: `## Din tur

Nå er det din tur til å praktisere. Her er noen tips for å komme i gang.

Velg et tema du bryr deg om. Det er mye lettere å overbevise andre når du selv er overbevist. Din ekte engasjement vil skinne gjennom i fremføringen.

Planlegg strukturen først. Bruk den klassiske modellen: exordium, narratio, argumentatio, refutatio, peroratio. Eller i enklere termer: innledning med krok, bakgrunn, argumenter, motargumenter, avslutning med oppfordring.

Skriv stikkord, ikke fullt manus. Hvis du leser fra et manus, mister du kontakten med publikum. Stikkord hjelper deg å huske hva du skal si uten at du blir bundet til eksakt ordlyd.

Øv foran speilet eller ta opp deg selv. Det kan føles kleint, men det er den beste måten å oppdage uvaner du ikke visste du hadde. Kanskje sier du "eh" for ofte. Kanskje beveger du deg for mye. Kanskje snakker du for fort.

Be om tilbakemelding. Øv foran venner eller familie og spør hva som fungerte og hva som kan forbedres. Konstruktiv kritikk er gull verdt.

Og til slutt: Gjør det. Igjen og igjen. Hver presentasjon du holder gjør deg litt bedre. Over tid vil det som føltes skummelt bli naturlig. Og da har du en ferdighet som vil følge deg resten av livet.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-1-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på praktiske presentasjonstips:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-1-6-n-quiz5-q0',
            task: 'Hvorfor bør du bruke stikkord i stedet for fullt manus når du holder en tale?',
            options: [
              { id: 'a', text: 'Fordi det er for mye arbeid å skrive fullt manus', isCorrect: false },
              { id: 'b', text: 'Fordi stikkord gjør at du kan holde øyekontakt og tilpasse deg publikum', isCorrect: true },
              { id: 'c', text: 'Fordi det viser at du ikke har forberedt deg', isCorrect: false },
              { id: 'd', text: 'Fordi publikum foretrekker improvisasjon', isCorrect: false },
            ],
            solution: 'Med stikkord er du fri til å formulere naturlig i øyeblikket, holde øyekontakt og tilpasse deg publikums reaksjoner.',
          },
          {
            id: 'norsk-vg1-1-6-n-quiz5-q1',
            task: 'Hva er den beste måten å bli en god taler på?',
            options: [
              { id: 'a', text: 'Lese mest mulig teori om retorikk', isCorrect: false },
              { id: 'b', text: 'Se på YouTube-videoer av berømte taler', isCorrect: false },
              { id: 'c', text: 'Øve, få tilbakemelding, og holde presentasjoner igjen og igjen', isCorrect: true },
              { id: 'd', text: 'Vente til du føler deg klar', isCorrect: false },
            ],
            solution: 'Det finnes ingen snarvei. Øvelse gjør mester. Hver presentasjon du holder gjør deg litt bedre, og over tid blir det naturlig.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-1-6-n-summary',
      type: 'text',
      content: `## Oppsummering: Retorikeren i deg

Du har nå lært det viktigste om praktisk retorikk. Her er nøkkelpunktene:

**Talens struktur:**
Exordium (innledning), narratio (bakgrunn), argumentatio (hoveddel), refutatio (motargumenter), peroratio (avslutning).

**Actio - fremføring:**
Stemmebruk med variasjon, kroppsspråk som støtter budskapet, øyekontakt med publikum. Håndter nervøsitet ved å fokusere på budskapet.

**Tilpasning:**
Kjenn publikummet ditt. Respekter anledningen. Velg strategi etter formål. Kairos og aptum i praksis.

**Veien til mestring:**
Øv, få tilbakemelding, gjør det igjen. Det finnes ingen snarvei til å bli en god taler.

**Nøkkelbegreper:**
Exordium, narratio, argumentatio, refutatio, peroratio, actio, disposisjon, tilpasning.`,
    },
  ],
  exercises: [],
};

