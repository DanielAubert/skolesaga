/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnskunnskap - NARRATIV VERSJON DEL 1
 * Kapittel 1.1-1.8: Individ og samfunn (Narrativ versjon)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * a lese og lytte til, med quiz-sporsmal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1 NARRATIV: Sosialisering - hvordan vi formes
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_1_1_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-1-1-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.1',
  title: 'Sosialisering - hvordan vi formes',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan vi fra foedsel til voksen alder formes av menneskene rundt oss -- fra familiens trygge favn til sosiale mediers uendelige paavirkningskraft.',
  estimatedMinutes: 25,
  competenceGoals: [
    'reflektere over hvordan identitet utvikles og formes',
    'droefte hvordan sosialisering pavirker holdninger og verdier',
  ],
  linkedChapterId: 'samfunnskunnskap-1-1',
  content: [
    {
      id: 'samfunnskunnskap-1-1-n-intro',
      type: 'text',
      content: `## Du ble ikke fodt som den du er

Tenk deg et nyfodt barn. Det kan ikke snakke, det forstaar ingen regler, og det aner ikke hva som er riktig eller galt. Likevel -- gi det noen aar, og det samme barnet kan foere en samtale, vente paa tur i koen paa butikken, og faa daarlig samvittighet for aa ha loeyet. Hvordan skjer den forvandlingen?

Svaret er **sosialisering**. Det er prosessen der vi laerer normer, verdier og ferdigheter som gjoer oss i stand til aa fungere i samfunnet. Fra det oeyeblikket du ble fodt, begynte menneskene rundt deg aa forme deg. Foreldrene dine laerte deg aa snakke. De viste deg hva som var greit og hva som ikke var greit. De ga deg klemmer naar du var lei deg, og de satte grenser naar du gikk for langt.

Men det stoppet ikke med familien. Da du begynte i barnehagen, moedte du andre barn og andre voksne med kanskje litt andre regler. Paa skolen laerte du ikke bare fag, men ogsaa aa rekke opp haanden, samarbeide i grupper og foelge timeplanen. Og i dag -- med telefonen i haanden og hele verden et tastetrykk unna -- blir du formet av influencere, nyheter, memer og algoritmer paa maater som ingen generasjon foer deg har opplevd.

Sosialisering handler om alt dette. Det er historien om hvordan et hjelpeloest spedbarn blir til et menneske som kan delta i samfunnet.`,
    },
    {
      id: 'samfunnskunnskap-1-1-n-section1',
      type: 'text',
      content: `## De tre lagene av sosialisering

Forskere deler gjerne sosialiseringen inn i tre typer, nesten som tre lag som bygger paa hverandre.

Det foerste og mest grunnleggende laget kalles **primaersosialisering**. Det er sosialiseringen som skjer i familien, og den begynner fra dag en. Her laerer du spraak -- ikke bare ord, men ogsaa tonefall, kroppssprak og maaten du uttrykker foelelser paa. Du laerer grunnleggende verdier: er det viktig aa vaere aerlig? Skal man hjelpe andre? Er det greit aa vise foelelser? Familien gir deg ogsaa dine foerste foelesesmessige baand, og disse tidlige erfaringene legger grunnlaget for hvordan du forholder deg til andre mennesker resten av livet. Primaersosialiseringen er saa grunnleggende at den former oss paa maater vi sjelden tenker over.

Det andre laget er **sekundaersosialisering**, og det begynner naar vi trer ut av familiens verden. Barnehagen er for mange det foerste moedet med sekundaersosialiseringen. Ploetselig maa du dele leketoy med fremmede barn, foelge regler som ikke er laget av foreldrene dine, og forholde deg til voksne som har en annen rolle enn mamma og pappa. Skolen tar dette videre: her laerer du formelle regler, du faar karakterer, og du begynner aa forstaa at samfunnet har forventninger til deg basert paa rollen din som elev. Fritidsaktiviteter, vennegjenger og etter hvert arbeidslivet -- alt dette er arenaer for sekundaersosialisering.

Det tredje laget er **tertiaersosialisering**, og det er kanskje det laget som har endret seg mest de siste tiaarene. Tertiaersosialisering skjer gjennom medier og samfunnet generelt. Naar du scroller gjennom TikTok, ser en Netflix-serie eller leser en nyhetsartikkel, blir du sosialisert. Du plukker opp verdier, holdninger og forventninger uten at du noedevendigvis er klar over det. I vaar digitale tid har denne formen for sosialisering faat enorm betydning, saerlig for unge mennesker.`,
    },
    {
      id: 'samfunnskunnskap-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa de tre typene sosialisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-1-n-quiz1-q0',
            task: 'Hva er primaersosialisering?',
            options: [
              { id: 'a', text: 'Sosialiseringen som skjer gjennom sosiale medier og internett', isCorrect: false },
              { id: 'b', text: 'Den grunnleggende sosialiseringen som skjer i familien fra foedsel', isCorrect: true },
              { id: 'c', text: 'Sosialiseringen som skjer paa skolen og i arbeidslivet', isCorrect: false },
              { id: 'd', text: 'Den sosialiseringen du selv velger aa delta i', isCorrect: false },
            ],
            solution: 'Primaersosialisering er den foerste og mest grunnleggende sosialiseringen, som skjer i familien. Her laerer vi spraak, grunnleggende verdier og foelesesmessige baand.',
          },
          {
            id: 'samfunnskunnskap-1-1-n-quiz1-q1',
            task: 'Hvilken type sosialisering har endret seg mest de siste tiaarene?',
            options: [
              { id: 'a', text: 'Primaersosialisering', isCorrect: false },
              { id: 'b', text: 'Sekundaersosialisering', isCorrect: false },
              { id: 'c', text: 'Tertiaersosialisering', isCorrect: true },
              { id: 'd', text: 'Alle har endret seg like mye', isCorrect: false },
            ],
            solution: 'Tertiaersosialisering -- sosialiseringen gjennom medier og samfunnet -- har endret seg mest paa grunn av sosiale medier, internett og digital teknologi som gir helt nye arenaer for paavirkning.',
          },
          {
            id: 'samfunnskunnskap-1-1-n-quiz1-q2',
            task: 'En elev laerer aa rekke opp haanden og vente paa tur i klasserommet. Hvilken type sosialisering er dette?',
            options: [
              { id: 'a', text: 'Primaersosialisering', isCorrect: false },
              { id: 'b', text: 'Sekundaersosialisering', isCorrect: true },
              { id: 'c', text: 'Tertiaersosialisering', isCorrect: false },
              { id: 'd', text: 'Det er ikke sosialisering', isCorrect: false },
            ],
            solution: 'Skolen er en arena for sekundaersosialisering. Her laerer vi formelle regler og rolleforventninger som gjelder utenfor familien.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-1-n-section2',
      type: 'text',
      content: `## Hvem former deg? Sosialiseringsagentene

La oss se naermere paa de viktigste aktørene -- eller **sosialiseringsagentene** -- som pavirker hvem du blir.

**Familien** er den foerste og kanskje mektigste agenten. Tenk paa Sara, som vokste opp i en familie der det var vanlig aa diskutere politikk rundt middagsbordet. Foreldrene oppmuntret henne til aa stille spoersmaal og tenke kritisk. Resultatet? Sara er sannsynligvis mer politisk engasjert enn gjennomsnittet. Hun toer aa ytre meningene sine. Familiens paavirkning har gitt henne et utgangspunkt hun kanskje aldri fullt ut vil vaere bevisst paa.

**Barnehage og skole** er viktige arenaer der du laerer aa samarbeide, foelge regler og forholde deg til autoriteter utenfor familien. Her moeter du ogsaa ulike verdisett for foerste gang -- kanskje har vennene dine andre regler hjemme enn du har.

**Venner og jevnaldrende** faar stadig stoerre betydning jo eldre du blir. Saerlig i ungdomsaarene kan vennegruppen vaere den sterkeste sosialiseringsagenten. Klesstil, musikksmak, spraakbruk, holdninger -- alt dette pavirkes av dem du omgaas. Oensket om aa hoere til og passe inn er en av de sterkeste kreftene i sosialiseringen.

**Medier og sosiale medier** har blitt en enorm paavirkningskraft. Influencere, algoritmer og trender former verdier og forventninger paa maater vi ofte ikke er klar over. Naar du ser tusenvis av innlegg om kropp, livsstil og suksess, pavirker det hvordan du ser paa deg selv og verden -- enten du vil eller ikke.

Til slutt spiller **arbeidslivet** en viktig rolle naar du blir eldre. En arbeidsplass sosialiserer deg inn i yrkesroller, profesjonell atferd og nye sosiale normer.

Ingen av disse agentene virker isolert. De pavirker deg samtidig, og noen ganger trekker de i ulike retninger. Kanskje mener foreldrene dine noe annet enn vennene dine, og sosiale medier presenterer et tredje syn. Det er i spenningen mellom disse kreftene at du former din egen identitet.`,
    },
    {
      id: 'samfunnskunnskap-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa sosialiseringsagenter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-1-n-quiz2-q0',
            task: 'Hvilken sosialiseringsagent er vanligvis den viktigste i primaersosialiseringen?',
            options: [
              { id: 'a', text: 'Skolen', isCorrect: false },
              { id: 'b', text: 'Venner', isCorrect: false },
              { id: 'c', text: 'Familien', isCorrect: true },
              { id: 'd', text: 'Sosiale medier', isCorrect: false },
            ],
            solution: 'Familien er den viktigste agenten i primaersosialiseringen. Den gir trygghet, omsorg og grunnleggende verdier i de foerste leveaarene.',
          },
          {
            id: 'samfunnskunnskap-1-1-n-quiz2-q1',
            task: 'Hvordan har sosiale medier endret sosialiseringen for unge?',
            options: [
              { id: 'a', text: 'De har ingen vesentlig pavirkning paa sosialisering', isCorrect: false },
              { id: 'b', text: 'De har gitt nye arenaer for paavirkning, innflytelse fra influencere og gruppetilhoerighet paa tvers av geografi', isCorrect: true },
              { id: 'c', text: 'De har kun negativ pavirkning paa unge', isCorrect: false },
              { id: 'd', text: 'De har helt erstattet familiens rolle i sosialiseringen', isCorrect: false },
            ],
            solution: 'Sosiale medier har gitt nye arenaer for sosialisering der unge eksponeres for flere ulike verdisett, faar innflytelse fra influencere, opplever gruppetilhoerighet paa tvers av geografi, men ogsaa press om aa passe inn.',
          },
          {
            id: 'samfunnskunnskap-1-1-n-quiz2-q2',
            task: 'Hva er en sosialiseringsagent?',
            options: [
              { id: 'a', text: 'En person som jobber med aa sosialisere innvandrere', isCorrect: false },
              { id: 'b', text: 'En aktør som pavirker sosialiseringen -- som familie, skole, venner og medier', isCorrect: true },
              { id: 'c', text: 'En laerebok om sosialisering', isCorrect: false },
              { id: 'd', text: 'Et offentlig kontor som styrer sosialiseringen', isCorrect: false },
            ],
            solution: 'En sosialiseringsagent er en aktør som pavirker sosialiseringen vaar. De viktigste agentene er familie, barnehage og skole, venner, medier og arbeidsliv.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi fulgt reisen fra hjelpeloest spedbarn til samfunnsmedlem. Vi har sett at **sosialisering** er prosessen der vi laerer normer, verdier og ferdigheter som gjoer oss i stand til aa fungere i samfunnet.

Sosialiseringen skjer i tre lag: **primaersosialisering** i familien, der vi laerer spraak og grunnleggende verdier; **sekundaersosialisering** i barnehage, skole og arbeidsliv, der vi laerer formelle regler og rolleforventninger; og **tertiaersosialisering** gjennom medier og samfunnet, som har faat enormt oekt betydning i den digitale tidsalderen.

Vi pavirkes av ulike **sosialiseringsagenter** -- familie, skole, venner, medier og arbeidsliv -- og det er i samspillet mellom disse kreftene at vi former vaar identitet. Sosiale medier har gitt oss nye arenaer for sosialisering og paavirkning, med baade muligheter og utfordringer.

Kanskje det viktigste aa ta med seg er dette: sosialisering er ikke noe som bare skjer med deg. Naar du forstaar hvordan den virker, kan du ogsaa bli mer bevisst paa hva som former deg -- og ta mer aktive valg om hvem du vil vaere.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2 NARRATIV: Identitet og selvfoelelse
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_1_2_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-1-2-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.2',
  title: 'Identitet og selvfølelse',
  subtitle: 'Narrativ versjon',
  description: 'En utforskning av hvem vi er, hvordan vi ser paa oss selv, og hva som skjer naar identiteten vaar blir utfordret -- fortalt gjennom historier og refleksjoner.',
  estimatedMinutes: 25,
  competenceGoals: [
    'reflektere over hvordan identitet utvikles og formes',
    'droefte sammenhengen mellom selvfoelelse og samfunnets forventninger',
  ],
  linkedChapterId: 'samfunnskunnskap-1-2',
  content: [
    {
      id: 'samfunnskunnskap-1-2-n-intro',
      type: 'text',
      content: `## Hvem er du, egentlig?

Det hoeres ut som et enkelt spoersmaal, men proev aa svare: Hvem er du? Kanskje begynner du med navnet ditt. Saa nevner du kanskje alderen din, hvor du bor, hva du driver med. Men er det egentlig deg? Hva om du byttet navn, flyttet til en annen by og begynte med en helt ny hobby -- ville du fortsatt vaere den samme personen?

**Identitet** handler om hvem vi er og hvordan vi oppfatter oss selv. Det er summen av vare egenskaper, verdier, erfaringer og tilhorigheter som gjoer oss til den vi er. Men identitet er ikke en ting du finner en gang for alle og saa er ferdig. Den utvikles og endres gjennom hele livet, i moete med andre mennesker og nye erfaringer.

Identiteten din har mange sider. Du har en **personlig identitet** -- de egenskapene som gjoer deg unik: dine verdier, interesser, droemer og personlighet. Du har en **sosial identitet** -- de gruppene du tilhoerer og identifiserer deg med: familie, vennegjeng, klasse, idrettslag, nasjonalitet. Du har en **kulturell identitet** -- hvilken kultur du identifiserer deg med. Og i dag har de fleste ogsaa en **digital identitet** -- hvordan du presenterer deg selv paa nett og i sosiale medier, som kan vaere ganske annerledes enn hvem du er offline.

I tillegg har du ulike **rolleidentiteter**. Du er kanskje soenn eller datter, elev, venn, arbeidstaker og kjaereste -- noen ganger alt paa en og samme dag. I hver rolle oppfoerer du deg litt ulikt, og det er helt normalt.`,
    },
    {
      id: 'samfunnskunnskap-1-2-n-section1',
      type: 'text',
      content: `## Selvbilde og selvfoelelse -- to sider av samme mynt

Tenk deg et speil. Naar du ser deg selv i speilet, ser du det ytre. Men det finnes ogsaa et indre speil -- det er **selvbildet** ditt. Selvbildet er hvordan du ser paa deg selv: dine styrker, svakheter og egenskaper. Det pavirkes i stor grad av andres tilbakemeldinger. Hvis du stadig faar hoere at du er flink, begynner du aa se deg selv som flink. Hvis du stadig faar hoere at du ikke duger, kan det bli en del av selvbildet ditt -- selv om det ikke stemmer.

**Selvfoelelse** er noe litt annet. Det handler ikke om hva du tror du er flink til, men om hvordan du foeler om deg selv. Har du et positivt forhold til deg selv? Aksepterer du deg selv med baade styrker og svakheter? God selvfoelelse betyr ikke at du synes du er perfekt -- det betyr at du verdsetter deg selv som den du er.

Saa har vi **selvsikkerhet**, som er troen paa egne evner til aa mestre utfordringer og naa maal. Du kan ha god selvfoelelse uten aa vaere selvsikker i alle situasjoner, og omvendt.

Hva er det som pavirker selvfoelelsen vaar? For det foerste: **oppvekst og omsorg**. Barn som vokser opp med kjaerlighet, stoeette og trygge grenser, har et bedre utgangspunkt. For det andre: **tilbakemeldinger fra andre** -- det vi hoerer fra foreldre, laerere, venner og fremmede former synet vaart paa oss selv. For det tredje: **mestringsopplevelser** -- naar du klarer noe du trodde var vanskelig, styrkes troen paa deg selv. For det fjerde: **sammenligning med andre** -- vi maaler oss stadig mot dem rundt oss. Og for det femte, og dette er kanskje det nyeste og mest kraftfulle: **sosiale medier og idealbilder**. Naar du daglig ser bilder av mennesker som ser ut til aa ha perfekte liv, perfekte kropper og perfekte forhold, kan det faa ditt eget liv til aa kjennes utilstrekkelig ut -- selv om bildene er redigert, filtrert og noeye utvalgt.`,
    },
    {
      id: 'samfunnskunnskap-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa identitet og selvfoelelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-2-n-quiz1-q0',
            task: 'Hva er forskjellen mellom selvbilde og selvfoelelse?',
            options: [
              { id: 'a', text: 'Selvbilde er det samme som selvfoelelse', isCorrect: false },
              { id: 'b', text: 'Selvbilde er hvordan vi ser paa oss selv, selvfoelelse er hvordan vi foeler om oss selv', isCorrect: true },
              { id: 'c', text: 'Selvbilde handler om utseende, selvfoelelse handler om intelligens', isCorrect: false },
              { id: 'd', text: 'Selvfoelelse er medfodt, selvbilde er tillart', isCorrect: false },
            ],
            solution: 'Selvbilde er hvordan vi ser paa oss selv -- vare styrker, svakheter og egenskaper. Selvfoelelse er hvordan vi foeler om oss selv -- om vi verdsetter og aksepterer oss selv. Begge pavirkes av omgivelsene.',
          },
          {
            id: 'samfunnskunnskap-1-2-n-quiz1-q1',
            task: 'Hva er digital identitet?',
            options: [
              { id: 'a', text: 'BankID og andre digitale identifikasjonsloesninger', isCorrect: false },
              { id: 'b', text: 'Antall foelgere du har paa sosiale medier', isCorrect: false },
              { id: 'c', text: 'Hvordan du presenterer deg selv paa nett og i sosiale medier', isCorrect: true },
              { id: 'd', text: 'Din e-postadresse og brukernavn', isCorrect: false },
            ],
            solution: 'Digital identitet handler om hvordan du presenterer deg selv paa nett og i sosiale medier. Den kan vaere annerledes enn din offline-identitet, og er en stadig viktigere del av identiteten vaar.',
          },
          {
            id: 'samfunnskunnskap-1-2-n-quiz1-q2',
            task: 'Hvilken faktor har IKKE blitt nevnt som noe som pavirker selvfoelelse?',
            options: [
              { id: 'a', text: 'Mestringsopplevelser', isCorrect: false },
              { id: 'b', text: 'Aastrologisk stjernetegn', isCorrect: true },
              { id: 'c', text: 'Sammenligning med andre', isCorrect: false },
              { id: 'd', text: 'Sosiale medier og idealbilder', isCorrect: false },
            ],
            solution: 'Faktorer som pavirker selvfoelelse er oppvekst og omsorg, tilbakemeldinger fra andre, mestringsopplevelser, sammenligning med andre, og sosiale medier. Stjernetegn har ingen dokumentert effekt.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-2-n-section2',
      type: 'text',
      content: `## Naar identiteten rister -- historien om Marius

La oss se paa et konkret eksempel. Marius er 17 aar og har alltid definert seg gjennom fotballen. Han har spilt siden han var 6 aar og droemer om aa bli proff. Fotballen gir ham venner, mestring, en rolle i gruppen og en droem for fremtiden. Naar noen spoer hvem han er, sier han: "Jeg er fotballspiller."

Saa skjer det uventede. En alvorlig kneskade setter ham ut av spill -- permanent. Ploetselig er arenaen der han foeler seg mest hjemme borte. Vennegjengen, som traener tre ganger i uken, ser han sjeldnere. Maalene han har jobbet mot i elleve aar, eksisterer ikke lenger.

Marius opplever det som kalles en **identitetsutfordring**. Naar noe som har vaert sentralt i identiteten din forsvinner, kan det foeles som aa miste en del av deg selv. "Hvem er jeg uten fotballen?" Er han fortsatt Marius? Selvfoelgelig. Men han maa finne nye svar paa spoersmaalet om hvem han er.

Og her kommer det viktige poenget: **identitet er fleksibel**. Marius er mer enn en fotballspiller. Han har andre egenskaper, andre tilhorigheter, andre droemer han kanskje ikke har utforsket enda. Han kan engasjere seg i fotball paa nye maater -- som trener, dommer eller kommentator. Eller han kan oppdage helt nye sider av seg selv. Krisen kan, paradoksalt nok, bli en mulighet for vekst.

Historien om Marius laerer oss noe viktig: det er risikabelt aa bygge hele identiteten paa en ting. Jo flere sider av deg selv du har utviklet, desto bedre rustet er du naar livet tar en uventet vending.`,
    },
    {
      id: 'samfunnskunnskap-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa identitet i endring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-2-n-quiz2-q0',
            task: 'Hva menes med at identitet er fleksibel?',
            options: [
              { id: 'a', text: 'At vi kan late som vi er noen andre', isCorrect: false },
              { id: 'b', text: 'At identiteten kan utvikles og tilpasses nye livssituasjoner', isCorrect: true },
              { id: 'c', text: 'At identiteten endrer seg helt hvert aar', isCorrect: false },
              { id: 'd', text: 'At vi ikke har noen fast identitet i det hele tatt', isCorrect: false },
            ],
            solution: 'Identitet er fleksibel betyr at den kan utvikles og tilpasses nye livssituasjoner. Vi har baade stabile og foranderlige sider, og vi kan oppdage og utvikle nye deler av oss selv gjennom hele livet.',
          },
          {
            id: 'samfunnskunnskap-1-2-n-quiz2-q1',
            task: 'Har vi full kontroll over hvem vi er?',
            options: [
              { id: 'a', text: 'Ja, identiteten er helt opp til oss selv', isCorrect: false },
              { id: 'b', text: 'Nei, vi formes helt av ytre krefter', isCorrect: false },
              { id: 'c', text: 'Identiteten er et samspill mellom egne valg og ytre paavirkning', isCorrect: true },
              { id: 'd', text: 'Vi kan bare kontrollere var digitale identitet', isCorrect: false },
            ],
            solution: 'Identiteten formes i samspill mellom individ og omgivelser. Vi har noe kontroll gjennom vare valg og holdninger, men pavirkes ogsaa av oppvekst, genetikk, samfunnsstrukturer og andres forventninger.',
          },
          {
            id: 'samfunnskunnskap-1-2-n-quiz2-q2',
            task: 'Hvordan kan sosiale medier paavirke selvfoelelsen negativt?',
            options: [
              { id: 'a', text: 'Ved aa gi tilgang til for mye informasjon', isCorrect: false },
              { id: 'b', text: 'Gjennom sammenligning med idealiserte bilder, press om likes, og mobbing', isCorrect: true },
              { id: 'c', text: 'Ved aa ta for mye tid fra lekser', isCorrect: false },
              { id: 'd', text: 'Sosiale medier kan bare paavirke selvfoelelsen positivt', isCorrect: false },
            ],
            solution: 'Sosiale medier kan paavirke selvfoelelsen negativt gjennom sammenligning med idealiserte bilder, press om likes og foelgere, og mobbing. Men de kan ogsaa vaere positive gjennom tilhoerighet og selvuttrykk.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket spoersmaalet "Hvem er du?" Vi har sett at **identitet** har mange dimensjoner -- personlig, sosial, kulturell, digital og rollebasert -- og at den utvikles gjennom hele livet.

Vi har laert forskjellen mellom **selvbilde** (hvordan vi ser paa oss selv), **selvfoelelse** (hvordan vi foeler om oss selv) og **selvsikkerhet** (troen paa egne evner). Alle disse pavirkes av oppvekst, tilbakemeldinger, mestring, sammenligning med andre og sosiale medier.

Gjennom historien om Marius saa vi at identitet er **fleksibel** og kan tilpasses nye livssituasjoner, men at det kan vaere smertefullt naar sentrale deler av identiteten utfordres.

Det viktigste aa huske er at identiteten din ikke er hugget i stein. Den er et livslangt prosjekt der du baade formes av verden rundt deg og tar aktive valg om hvem du vil vaere.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3 NARRATIV: Personlig oekonomi - budsjett og sparing
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_1_3_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-1-3-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.3',
  title: 'Personlig økonomi - budsjett og sparing',
  subtitle: 'Narrativ versjon',
  description: 'En praktisk guide til aa ta kontroll over din egen oekonomi -- fra det foerste budsjettet til smarte sparevaner, fortalt gjennom Emmas foerste jobb.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske og reflektere over egen oekonomi og forbruk',
    'droefte hvordan oekonomiske valg pavirker egen livssituasjon',
  ],
  linkedChapterId: 'samfunnskunnskap-1-3',
  content: [
    {
      id: 'samfunnskunnskap-1-3-n-intro',
      type: 'text',
      content: `## Penger styrer mer enn du tror

Tenk deg dette: Du har nettopp faat din foerste loenning. 8000 kroner staar paa kontoen din, og det foeles som en formue. Du har lyst paa nye klaar, du skylder en kompis penger, mobilen trenger nytt abonnement, og vennene dine vil paa konsert i helgen. Foer du vet ordet av det, er kontoen nesten tom -- og det er tre uker til neste loenning.

Kjenner du deg igjen? De fleste har vaert der. Og det er nettopp derfor **personlig oekonomi** er en av de viktigste ferdighetene du kan laere deg. Det handler ikke om aa bli rik eller aa aldri bruke penger paa noe goy. Det handler om aa ha kontroll -- aa vite hvor pengene gaar, slik at du kan bruke dem paa det som faktisk betyr noe for deg.

God oekonomistyring gir deg frihet. Daarlig oekonomistyring kan foere til stress, soevnloese netter, gjeldsproblemer og begrensede muligheter. Og det starter med noen grunnleggende begreper og vaner.`,
    },
    {
      id: 'samfunnskunnskap-1-3-n-section1',
      type: 'text',
      content: `## Grunnsteinene: inntekter, utgifter og budsjett

La oss starte med det grunnleggende. **Inntekt** er penger du mottar -- loeann, stipend, laan eller gaver. **Utgifter** er penger du bruker, og de deles i to typer: **faste utgifter** som er like hver maaned (husleie, abonnementer, forsikring), og **variable utgifter** som varierer (mat, klaar, underholdning). Faste utgifter er lettere aa planlegge for, mens variable utgifter krever mer bevissthet.

Saa har vi **budsjett** -- en plan for hvordan du skal bruke pengene dine. Tenk paa det som et kart for oekonomien din. Uten kart kan du ende opp hvor som helst. Med kart vet du hvor du er paa vei. Og saa er det **sparing** -- aa sette av penger til fremtidige behov. Det gamle radet "betal deg selv foerst" betyr at du boer spare foer du bruker, ikke omvendt.

Til slutt er det **gjeld** -- penger du skylder andre. Studielaan, kredittkort og forbrukslaan er ulike former for gjeld, og ikke all gjeld er lik. Et studielaan kan vaere en god investering i fremtiden. Et forbrukslaan for aa kjoepe ting du egentlig ikke har raad til, kan bli en felle.

La oss se paa hvordan dette fungerer i praksis.`,
    },
    {
      id: 'samfunnskunnskap-1-3-n-section2',
      type: 'text',
      content: `## Emmas foerste budsjett

Emma er 18 aar og har nettopp faat sin foerste deltidsjobb. Hun tjener 8000 kroner i maaneden etter skatt. Hun bor hjemme, men betaler 2000 kroner til foreldrene sine. Saa setter hun seg ned med et blankt ark og lager sitt foerste budsjett.

Foerst kartlegger hun **inntekten**: 8000 kroner i maaneden.

Saa lister hun opp **faste utgifter**: bidrag hjemme (2000 kr), mobilabonnement (300 kr) og Spotify pluss Netflix (250 kr). Totalt 2550 kroner som gaar ut uansett.

Deretter estimerer hun **variable utgifter**: transport til jobb og skole (500 kr), mat og lunsj paa jobb (600 kr), klaar og personlige ting (500 kr), og sosiale aktiviteter med venner (800 kr). Totalt 2400 kroner.

Saa setter hun av til **sparing**: 500 kroner til et noedfond og 1000 kroner til en sparekonto for en reise hun droemer om. Totalt 1500 kroner.

Til slutt er det 1550 kroner igjen som **buffer** til uforutsette utgifter. Det er lurt aa ha litt aa gaa paa.

Emma laerer seg tre viktige vaner: hun setter opp automatisk sparing slik at pengene flyttes til sparekontoen paa loenningsdagen foer hun rekker aa bruke dem, hun vurderer regelmessig om alle abonnementene hennes er verdt pengene, og hun unngaar aa handle naar hun er sulten eller lei -- da er det lett aa impulskjoepe.

Det viktigste Emma gjoer er kanskje aa skape **oversikt**. Bare det aa vite hvor pengene gaar, gir en foelelse av kontroll og trygghet.`,
    },
    {
      id: 'samfunnskunnskap-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa budsjett og oekonomi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-3-n-quiz1-q0',
            task: 'Hva er forskjellen mellom faste og variable utgifter?',
            options: [
              { id: 'a', text: 'Faste utgifter er store, variable er smaa', isCorrect: false },
              { id: 'b', text: 'Faste utgifter er like hver maaned, variable varierer', isCorrect: true },
              { id: 'c', text: 'Faste utgifter betales kontant, variable med kort', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Faste utgifter er utgifter som er like hver maaned -- husleie, abonnementer, forsikring. Variable utgifter varierer fra maaned til maaned -- mat, klaar, underholdning.',
          },
          {
            id: 'samfunnskunnskap-1-3-n-quiz1-q1',
            task: 'Hva betyr "betal deg selv foerst"?',
            options: [
              { id: 'a', text: 'At du boer kjoepe det du vil foer du betaler regninger', isCorrect: false },
              { id: 'b', text: 'At du boer spare foer du bruker pengene paa andre ting', isCorrect: true },
              { id: 'c', text: 'At du boer betale laan foer du sparer', isCorrect: false },
              { id: 'd', text: 'At du boer faa betalt foer du begynner aa jobbe', isCorrect: false },
            ],
            solution: '"Betal deg selv foerst" betyr at du boer sette av penger til sparing med en gang du faar loeann, foer du bruker pengene paa andre ting. Automatisk overfoering paa loenningsdagen er en god vane.',
          },
          {
            id: 'samfunnskunnskap-1-3-n-quiz1-q2',
            task: 'I Emmas budsjett paa 8000 kr: hvor mye har hun igjen som buffer etter faste utgifter, variable utgifter og sparing?',
            options: [
              { id: 'a', text: '500 kr', isCorrect: false },
              { id: 'b', text: '1000 kr', isCorrect: false },
              { id: 'c', text: '1550 kr', isCorrect: true },
              { id: 'd', text: '2000 kr', isCorrect: false },
            ],
            solution: 'Emma har 8000 kr i inntekt. Faste utgifter er 2550 kr, variable er 2400 kr, og sparing er 1500 kr. Det gir 8000 - 2550 - 2400 - 1500 = 1550 kr i buffer.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-3-n-section3',
      type: 'text',
      content: `## Noedfond og fremtidige utfordringer

Et **noedfond** er kanskje den viktigste sparingen du kan ha. Forestill deg at telefonen din gaar i stykker, du faar en uventet tannlegeregning, eller du plutselig mister jobben. Uten noedfond maa du kanskje ta opp et dyrt forbrukslaan for aa dekke utgiften. Med noedfond kan du loeese problemet uten aa sette deg i gjeld.

Ekspertene anbefaler at noedfondet boer dekke tre til seks maaneders utgifter. For en student som bor hjemme kan det vaere 10-15 000 kroner. For en som bor for seg selv, kanskje 30-60 000 kroner. Det hoereas kanskje mye ut, men du trenger ikke spare alt paa en gang. Selv 500 kroner i maaneden blir 6000 kroner paa et aar.

Unge voksne i dag moeter noen saerlige oekonomiske utfordringer. Boligprisene er hoeye, saerlig i byene. Studielaan vokser. Forbrukslaan og kredittkort er lett tilgjengelig og fristende. Og sosiale medier skaper et press om aa ha det siste og beste -- nye klaar, reiser, gadgets.

Derfor er det aa laere seg god oekonomistyring tidlig kanskje noe av det smarteste du kan gjoere. Det handler ikke om aa aldri kose seg, men om aa gjoeere bevisste valg: Trenger jeg egentlig dette, eller har jeg bare lyst paa det akkurat naa? Har jeg raad til det uten aa sette meg i gjeld? Finnes det billigere alternativer?

Den som har oversikt over sin oekonomi, har ogsaa stoerre frihet til aa velge det livet han eller hun oensker seg.`,
    },
    {
      id: 'samfunnskunnskap-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa sparing og oekonomiske utfordringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-3-n-quiz2-q0',
            task: 'Hvor mye anbefaler eksperter at man har i noedfond?',
            options: [
              { id: 'a', text: 'En maaaneds loeann', isCorrect: false },
              { id: 'b', text: '3-6 maaneders utgifter', isCorrect: true },
              { id: 'c', text: 'Minst 100 000 kroner', isCorrect: false },
              { id: 'd', text: 'Det er ikke noedvendig med noedfond', isCorrect: false },
            ],
            solution: 'Ekspertene anbefaler et noedfond paa 3-6 maaneders utgifter. Det gir trygghet ved uforutsette hendelser som jobb-tap, sykdom eller plutselige utgifter, og forhindrer at du maa ta opp dyre laan.',
          },
          {
            id: 'samfunnskunnskap-1-3-n-quiz2-q1',
            task: 'Hvilken oekonomisk utfordring er IKKE typisk for unge voksne i dag?',
            options: [
              { id: 'a', text: 'Hoeye boligpriser', isCorrect: false },
              { id: 'b', text: 'For mye penger paa sparekontoen', isCorrect: true },
              { id: 'c', text: 'Lett tilgang til forbrukslaan', isCorrect: false },
              { id: 'd', text: 'Press fra sosiale medier om forbruk', isCorrect: false },
            ],
            solution: 'Typiske oekonomiske utfordringer for unge i dag er hoeye boligpriser, studielaan, lett tilgang til forbrukslaan og kredittkort, og press fra sosiale medier om forbruk. For mye penger paa sparekontoen er sjelden et problem.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi fulgt Emma inn i den voksne oekonomiens verden. Vi har laert at personlig oekonomi handler om aa ha **oversikt** over inntekter og utgifter, og aa **leve innenfor sine rammer**.

Et **budsjett** er kartet ditt -- det viser veien fra kaos til kontroll. Det boer inneholde inntekter, faste utgifter, variable utgifter og sparing. "Betal deg selv foerst" er en gyllen regel: spar foer du bruker.

Et **noedfond** paa tre til seks maaneders utgifter gir deg trygghet naar livet byr paa overraskelser. Og i en verden med hoeye boligpriser, lett tilgjengelige forbrukslaan og sosialt press om forbruk, er det aa laere god oekonomistyring tidlig en av de viktigste tingene du kan gjoere for din egen fremtid.

Husk: oekonomi handler ikke om aa aldri bruke penger. Det handler om aa bruke dem bevisst -- paa det som faktisk betyr noe for deg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4 NARRATIV: Forbruk og kommersiell paavirkning
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_1_4_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-1-4-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.4',
  title: 'Forbruk og kommersiell påvirkning',
  subtitle: 'Narrativ versjon',
  description: 'En avsloering av hvordan reklame, influencere og algoritmer manipulerer oenskene dine -- og hvordan du kan bli en bevisst forbruker som tar egne valg.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske og reflektere over egen oekonomi og forbruk',
    'droefte hvordan kommersiell paavirkning virker paa forbrukeratferd',
  ],
  linkedChapterId: 'samfunnskunnskap-1-4',
  content: [
    {
      id: 'samfunnskunnskap-1-4-n-intro',
      type: 'text',
      content: `## Du er maalskiven

Visste du at du eksponeres for anslagsvis flere tusen reklambudskap hver eneste dag? Tenk paa det et oeyeblikk. Paa telefonen, paa bussen, paa TV, i butikken, paa nettsider, i apper, i sosiale medier -- overalt er det noen som proever aa faa deg til aa kjoepe noe.

Vi lever i et **forbrukersamfunn**. Det betyr et samfunn preget av masseproduksjon, masseforbruk, og en kultur der det aa kjoepe og eie ting er tett knyttet til identitet og status. Har du den rette telefonen? De riktige skoene? Det nyeste spillet? Forbrukersamfunnet forteller deg at du trenger alt dette for aa vaere god nok.

Men stopp opp og tenk: **hvem bestemmer egentlig hva du vil ha?** Er det virkelig du selv, eller er det noen som har brukt milliarder av kroner paa aa faa deg til aa tro at du trenger produktet deres?

Aa vaere en bevisst forbruker betyr aa forstaa hvordan du blir pavirket -- saa du kan ta gjennomtenkte valg i stedet for aa bli styrt av andre.`,
    },
    {
      id: 'samfunnskunnskap-1-4-n-section1',
      type: 'text',
      content: `## Triksene som faar deg til aa kjoepe

Reklamebransjen bruker sofistikerte psykologiske virkemidler for aa paavirke deg. La oss avsloere de viktigste.

**Emosjonell appell** er det mest grunnleggende trikset. Reklame spiller paa foelelster: glede, frykt, tilhoerighet, status. "Kjoeep dette produktet og bli lykkelig! Populaer! Vellykket!" Ingen reklame sier "kjoeep dette produktet fordi vi vil tjene penger" -- selv om det er den egentlige grunnen.

**Sosial bevis** spiller paa flokkinstinktet vaart. "Alle andre har det" -- og vi vil ha det andre har for aa passe inn. Naar du ser at en million mennesker har kjoept noe, foeles det tryggere aa kjoepe det selv ogsaa.

**Knapphetseffekten** skaper kunstig hastverk. "Kun i dag!" "Begrenset antall!" "Siste sjanse!" Hjernen vaar reagerer sterkt paa frykten for aa gaa glipp av noe, og det faar oss til aa handle impulsivt i stedet for aa tenke oss om.

**Influencer-markedsfoering** er kanskje det kraftigste virkemiddelet for unge i dag. Naar en person du beundrer og foeler du kjenner anbefaler et produkt, foeles det som et tips fra en venn -- ikke som reklame. Men i virkeligheten er det ofte nettopp det det er: betalt reklame. Influenceren faar penger eller gratisprodukter for aa promotere varen.

**Maalrettet reklame** bruker algoritmene paa en ny maate. Basert paa soekehistorikken din, klikkene dine og lokasjonsdataene dine, bygger systemene en profil av deg og viser deg reklame tilpasset akkurat dine interesser og svakheter. Det er som om reklamen kjenner deg bedre enn du kjenner deg selv.

**Produktplassering** er den mest snikende formen. Produkter dukker opp i filmer, serier og hos influencere uten at det fremstaar som reklame. Du legger kanskje ikke merke til det bevisst, men hjernen din registrerer det likevel.`,
    },
    {
      id: 'samfunnskunnskap-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa reklamens virkemidler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-4-n-quiz1-q0',
            task: 'Hva er knapphetseffekten?',
            options: [
              { id: 'a', text: 'At det finnes for faa produkter i butikken', isCorrect: false },
              { id: 'b', text: 'Et reklamevirkemiddel som skaper hastverk med "kun i dag!" og "begrenset antall!"', isCorrect: true },
              { id: 'c', text: 'At forbrukerne har for lite penger', isCorrect: false },
              { id: 'd', text: 'At reklame vises for sjelden', isCorrect: false },
            ],
            solution: 'Knapphetseffekten er et reklamevirkemiddel som skaper kunstig hastverk -- "kun i dag!", "begrenset antall!". Det spiller paa frykten for aa gaa glipp av noe og faar oss til aa handle impulsivt.',
          },
          {
            id: 'samfunnskunnskap-1-4-n-quiz1-q1',
            task: 'Hvorfor er influencer-markedsfoering saa effektiv?',
            options: [
              { id: 'a', text: 'Fordi influencere alltid er aerlige', isCorrect: false },
              { id: 'b', text: 'Fordi det foeles som tips fra en venn, ikke som reklame', isCorrect: true },
              { id: 'c', text: 'Fordi influencere bare anbefaler gode produkter', isCorrect: false },
              { id: 'd', text: 'Fordi det er billigere enn vanlig reklame', isCorrect: false },
            ],
            solution: 'Influencer-markedsfoering er effektiv fordi det foeles som en anbefaling fra noen du kjenner og stoler paa, ikke som tradisjonell reklame. Men i virkeligheten faar influenceren ofte betalt for aa promotere produktet.',
          },
          {
            id: 'samfunnskunnskap-1-4-n-quiz1-q2',
            task: 'Hva er maalrettet reklame?',
            options: [
              { id: 'a', text: 'Reklame som vises paa en bestemt plass i butikken', isCorrect: false },
              { id: 'b', text: 'Reklame som bare vises for voksne', isCorrect: false },
              { id: 'c', text: 'Reklame tilpasset deg basert paa dine digitale spor og profil', isCorrect: true },
              { id: 'd', text: 'Reklame som har et tydelig maal', isCorrect: false },
            ],
            solution: 'Maalrettet reklame bruker algoritmer til aa analysere dine digitale spor -- soekehistorikk, klikk, lokasjon -- og viser deg reklame tilpasset dine interesser og svakheter.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-4-n-section2',
      type: 'text',
      content: `## Lives dilemma -- og dine rettigheter

Live foelger flere influencere paa Instagram. En dag ser hun at favorittinfluenceren hennes viser frem et nytt hudpleieprodukt og sier det har "forandret huden hennes totalt". Live faar umiddelbart lyst til aa kjoepe det. Det koster 500 kroner.

Men Live har laert aa stille kritiske spoersmaal. **Er dette reklame?** Hun sjekker om innlegget er merket med #ad eller #reklame. Det er det ikke -- noe som faktisk er ulovlig i Norge hvis influenceren har faat betalt. Markedsfoeringsloven krever tydelig merking av reklame. **Er paastanden troverdig?** "Forandret huden totalt" -- kan det dokumenteres? Har influenceren brukt produktet lenge nok til aa vite? **Trenger Live dette?** Har hun et hudproblem produktet loeser? Har hun lignende produkter fra foer?

Live bestemmer seg for aa vente noen dager og sjekke uavhengige anmeldelser foer hun tar et valg.

Du har faktisk ganske sterke **rettigheter som forbruker** i Norge. **Angrerett** ved nettkjoeep gir deg 14 dager til aa ombestemme deg. **Reklamasjonsrett** paa to eller fem aar beskytter deg mot feil og mangler. Du har rett til korrekt informasjon, og du er beskyttet mot villedende markedsfoering.

Men rettigheter alene er ikke nok. Du maa ogsaa utvikle **kritisk forbrukerkompetanse**: vurdere om du virkelig trenger produktet, sammenligne priser og kvalitet, gjenkjenne reklametriks, tenke paa miljoeekonsekvenser, og unngaa impulskjoeep.

Og saa er det det stoerre bildet: **baerekraftig forbruk**. Aa kjoepe mindre, men bedre kvalitet. Aa gjenbruke og reparere i stedet for aa kaste. Aa velge miljoevennlige alternativer. Aa stoeette etiske produsenter. Fordi hvert kjoeep du gjoer, er ogsaa en stemme for den typen verden du vil leve i.`,
    },
    {
      id: 'samfunnskunnskap-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa forbrukerrettigheter og bevisst forbruk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-4-n-quiz2-q0',
            task: 'Hvor lang angrerett har du ved nettkjoeep i Norge?',
            options: [
              { id: 'a', text: '7 dager', isCorrect: false },
              { id: 'b', text: '14 dager', isCorrect: true },
              { id: 'c', text: '30 dager', isCorrect: false },
              { id: 'd', text: 'Det finnes ingen angrerett', isCorrect: false },
            ],
            solution: 'Angreretten ved nettkjoeep er 14 dager. Du kan returnere varen uten aa oppgi grunn innen denne fristen.',
          },
          {
            id: 'samfunnskunnskap-1-4-n-quiz2-q1',
            task: 'Hva krever markedsfoeringsloven av influencere som faar betalt for aa anbefale produkter?',
            options: [
              { id: 'a', text: 'Ingenting -- det er deres eget valg', isCorrect: false },
              { id: 'b', text: 'At de bare anbefaler produkter de selv bruker', isCorrect: false },
              { id: 'c', text: 'At reklame merkes tydelig, for eksempel med #ad eller #reklame', isCorrect: true },
              { id: 'd', text: 'At de donerer inntekten til veldedighet', isCorrect: false },
            ],
            solution: 'Markedsfoeringsloven krever at reklame skal vaere tydelig merket. Influencere som faar betalt eller gratisprodukter for aa promotere noe, maa merke innlegget som reklame.',
          },
          {
            id: 'samfunnskunnskap-1-4-n-quiz2-q2',
            task: 'Hva menes med baerekraftig forbruk?',
            options: [
              { id: 'a', text: 'Aa kjoepe saa mye som mulig foer det gaar ut paa dato', isCorrect: false },
              { id: 'b', text: 'Aa kjoepe mindre men bedre kvalitet, gjenbruke, og velge miljoevennlig', isCorrect: true },
              { id: 'c', text: 'Aa bare kjoepe norske produkter', isCorrect: false },
              { id: 'd', text: 'Aa aldri kjoepe noe nytt', isCorrect: false },
            ],
            solution: 'Baerekraftig forbruk handler om aa forbruke paa en maate som tar hensyn til miljoeet -- kjoepe mindre men bedre kvalitet, gjenbruke og reparere, velge miljoevennlige alternativer, og stoeette etiske produsenter.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi avslort mekanismene bak **forbrukersamfunnet** -- hvordan reklame bruker emosjonell appell, sosial bevis, knapphetseffekt, influencer-markedsfoering, maalrettet reklame og produktplassering for aa faa deg til aa kjoepe.

Vi fulgte Live som laerte aa stille kritiske spoersmaal til influencer-anbefalinger, og vi gjennomgikk viktige **forbrukerrettigheter**: 14 dagers angrerett ved nettkjoeep, reklamasjonsrett, og beskyttelse mot villedende markedsfoering.

Vi saa at **kritisk forbruk** handler om aa gjenkjenne reklametriks, unngaa impulskjoeep, og ta bevisste valg. Og **baerekraftig forbruk** handler om aa tenke paa miljoeet i de valgene vi tar.

Husk: du er maalskiven for milliardbudsjetterke reklamekampanjer. Men naar du forstaar triksene, har du ogsaa makten til aa si nei -- og bruke pengene dine paa det som virkelig betyr noe for deg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5 NARRATIV: Kropp, grenser og samtykke
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_1_5_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-1-5-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.5',
  title: 'Kropp, grenser og samtykke',
  subtitle: 'Narrativ versjon',
  description: 'En viktig samtale om retten til aa bestemme over egen kropp, hva ekte samtykke betyr, og hvorfor evnen til aa si nei er en styrke -- ikke en svakhet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'reflektere over grensesetting og samtykke',
    'droefte hvordan respekt for egen og andres kropp er viktig i relasjoner',
  ],
  linkedChapterId: 'samfunnskunnskap-1-5',
  content: [
    {
      id: 'samfunnskunnskap-1-5-n-intro',
      type: 'text',
      content: `## Din kropp, dine regler

Det finnes ett prinsipp som er saa grunnleggende at det burde vaere selvfoelgelig, men som likevel maa sies hoyt og tydelig: **du eier din egen kropp**. Ingen andre har rett til aa bestemme over den uten ditt samtykke.

Dette hoeres kanskje opplagt ut. Men tenk litt dypere. Har du noen gang foelt deg presset til aa gi en klem du ikke hadde lyst paa? Har du sagt ja til noe du egentlig ikke ville, fordi du var redd for aa vaere uhoeeflig? Har du delt et bilde du angret paa fordi noen ba deg om det?

Grenser handler om mye mer enn fysisk kontakt. Det handler om foelelelser, tid, personlig rom og digital kommunikasjon. Og det aa forstaa og respektere grenser -- baade egne og andres -- er grunnleggende for gode relasjoner og et trygt samfunn.

I dette kapittelet skal vi snakke om noe av det viktigste du kan laere: hva ekte samtykke betyr, hvordan du setter grenser, og hvorfor det aa si nei er en styrke.`,
    },
    {
      id: 'samfunnskunnskap-1-5-n-section1',
      type: 'text',
      content: `## Hva er egentlig samtykke?

**Samtykke** betyr at noen frivillig og aktivt sier ja til noe. Det hoeres enkelt ut, men det er viktig aa forstaa hva som ligger i det lille ordet "ja".

For det foerste maa samtykke vaere **frivillig**. Det betyr at det er gitt uten press, trusler eller tvang. Hvis noen sier ja fordi de er redde for konsekvensene av aa si nei, er det ikke ekte samtykke. Maktforhold spiller inn her -- en yngre person kan foele seg presset av en eldre, en ansatt av en sjef, en som er usikker av en som er populaer.

For det andre maa samtykke vaere **informert**. Personen maa forstaa hva de sier ja til. Halve sannheter og manipulasjon undergraver samtykket.

For det tredje boer samtykke vaere **entusiastisk**. Det betyr et ekte ja, ikke bare fravaer av nei. Stillhet er ikke samtykke. Aa ikke protestere er ikke samtykke. Bare et tydelig, aktivt ja er samtykke.

For det fjerde maa samtykke vaere **gjensidig**. Begge parter maa samtykke.

For det femte kan samtykke **trekkes tilbake** naar som helst. Du kan ombestemme deg midt i noe, og det er helt greit. Ingen har rett til aa si "men du sa jo ja i stad".

Og for det sjette er samtykke **situasjonsbestemt**. Aa si ja til en ting betyr ikke aa si ja til alt. Aa si ja i dag betyr ikke aa si ja i morgen.

Det er ogsaa viktig aa vite at noen situasjoner gjoer at man **ikke kan gi gyldig samtykke**: naar man er beruset, naar man sover, eller naar man er redd. I slike tilstander er man ikke i stand til aa ta en fri, informert beslutning.`,
    },
    {
      id: 'samfunnskunnskap-1-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa samtykke:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-5-n-quiz1-q0',
            task: 'Hvilken paastand om samtykke er riktig?',
            options: [
              { id: 'a', text: 'Samtykke til en ting betyr samtykke til alt', isCorrect: false },
              { id: 'b', text: 'Samtykke kan trekkes tilbake naar som helst', isCorrect: true },
              { id: 'c', text: 'Stillhet betyr samtykke', isCorrect: false },
              { id: 'd', text: 'Naar man foerst har sagt ja, kan man ikke ombestemme seg', isCorrect: false },
            ],
            solution: 'Samtykke kan trekkes tilbake naar som helst. Du kan ombestemme deg midt i noe, og det er helt greit. Samtykke er ogsaa situasjonsbestemt -- aa si ja til en ting betyr ikke ja til alt.',
          },
          {
            id: 'samfunnskunnskap-1-5-n-quiz1-q1',
            task: 'Naar kan man IKKE gi gyldig samtykke?',
            options: [
              { id: 'a', text: 'Naar man er sliten etter trening', isCorrect: false },
              { id: 'b', text: 'Naar man er beruset, sover eller er redd', isCorrect: true },
              { id: 'c', text: 'Naar man er under 18 aar', isCorrect: false },
              { id: 'd', text: 'Naar man kjenner personen godt', isCorrect: false },
            ],
            solution: 'Man kan ikke gi gyldig samtykke naar man er beruset, sover eller er redd. I slike tilstander er man ikke i stand til aa ta en fri og informert beslutning.',
          },
          {
            id: 'samfunnskunnskap-1-5-n-quiz1-q2',
            task: 'Hva betyr det at samtykke maa vaere entusiastisk?',
            options: [
              { id: 'a', text: 'At man maa hoppe av glede', isCorrect: false },
              { id: 'b', text: 'At det skal vaere et ekte ja, ikke bare fravaer av nei', isCorrect: true },
              { id: 'c', text: 'At man maa si ja minst tre ganger', isCorrect: false },
              { id: 'd', text: 'At man maa vaere svart begeistret for ideen', isCorrect: false },
            ],
            solution: 'Entusiastisk samtykke betyr et ekte, aktivt ja -- ikke bare fravaer av nei. Stillhet, noeeling eller aa "ikke protestere" er ikke tilstrekkelig. Bare et tydelig ja er samtykke.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-5-n-section2',
      type: 'text',
      content: `## Grensesetting -- aa vaere sjefen i eget liv

Grenser finnes i mange former, og alle er viktige.

**Fysiske grenser** handler om hvem som faar ta paa deg, hvordan og hvor. Du bestemmer selv hva som er greit. Noen liker klemmer fra alle, andre foretrekker haandtrykk. Begge deler er helt OK.

**Emosjonelle grenser** handler om hva du deler av foelelelser og personlig informasjon. Du trenger ikke fortelle alt til alle. Du har rett til aa beskytte ditt indre liv.

**Digitale grenser** er blitt stadig viktigere. Hva deler du paa nett? Hvem svarer du? Hva slags bilder sender eller mottar du? Digitale grenser handler om aa beskytte deg selv i en verden der alt kan lagres, deles og spres.

**Tidsgrenser** handler om hvor mye tid du bruker paa andre versus deg selv. Det er lov aa si "jeg trenger litt tid alene" uten aa unnskylde seg.

Men hvordan setter man egentlig grenser i praksis? Foerst: **kjenn etter hva som foeles riktig for deg**. Kroppen din sender signaler naar noe er feil -- en klump i magen, en uro, et ubehag. Lytt til disse signalene. Deretter: **kommuniser tydelig og direkte**. Si hva du vil og ikke vil, uten aa pakke det inn. Og husk: **du trenger ikke forklare eller rettferdiggjore grensene dine**. "Nei" er en hel setning. Til slutt: **staa fast**. Det kan vaere ubehagelig, saerlig i begynnelsen, men det er viktig.

Tenk paa Karoline, som er paa fest og danser med noen hun nylig har moett. Personen begynner aa ta paa henne paa maater hun ikke er komfortabel med. Hva kan hun gjoere? Hun kan si tydelig ifra: "Stopp, jeg vil ikke det." Hun kan flytte seg unna. Hun kan gaa til vennene sine. At hun danset med personen betyr ikke samtykke til mer. At det er fest endrer ingenting. Karolines grenser er gyldige -- uansett.

Det viktige er dette: aa sette grenser er ikke aa vaere vanskelig. Det er aa ta vare paa seg selv. Og alle fortjener aa bli tatt vare paa.`,
    },
    {
      id: 'samfunnskunnskap-1-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa grensesetting:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-5-n-quiz2-q0',
            task: 'Hvilken type grense handler om hva du deler paa nett og hvem du svarer?',
            options: [
              { id: 'a', text: 'Fysiske grenser', isCorrect: false },
              { id: 'b', text: 'Emosjonelle grenser', isCorrect: false },
              { id: 'c', text: 'Digitale grenser', isCorrect: true },
              { id: 'd', text: 'Tidsgrenser', isCorrect: false },
            ],
            solution: 'Digitale grenser handler om hva du deler paa nett, hvem du svarer, og hva slags bilder du sender eller mottar. De er blitt stadig viktigere i den digitale tidsalderen.',
          },
          {
            id: 'samfunnskunnskap-1-5-n-quiz2-q1',
            task: 'Hvorfor kan det vaere vanskelig aa sette grenser?',
            options: [
              { id: 'a', text: 'Fordi det er ulovlig aa si nei', isCorrect: false },
              { id: 'b', text: 'Paa grunn av frykt for aa saare andre, oenske om aa passe inn, og sosiale forventninger', isCorrect: true },
              { id: 'c', text: 'Fordi grenser alltid er unodvendige', isCorrect: false },
              { id: 'd', text: 'Fordi man maa ha opplaering for aa sette grenser', isCorrect: false },
            ],
            solution: 'Det kan vaere vanskelig aa sette grenser paa grunn av frykt for aa saare andre, oenske om aa passe inn, usikkerhet, maktforhold og sosiale forventninger. Men det er en ferdighet som kan oeves opp.',
          },
          {
            id: 'samfunnskunnskap-1-5-n-quiz2-q2',
            task: 'Karoline danser med noen paa fest som tar paa henne paa ubehagelige maater. Hva stemmer?',
            options: [
              { id: 'a', text: 'Hun ba om det ved aa danse med personen', isCorrect: false },
              { id: 'b', text: 'Paa fest gjelder ikke vanlige regler', isCorrect: false },
              { id: 'c', text: 'At hun danset betyr ikke samtykke til mer -- grensene hennes er gyldige uansett', isCorrect: true },
              { id: 'd', text: 'Hun boer vaere hoeflig og ikke si noe', isCorrect: false },
            ],
            solution: 'At Karoline danset med personen betyr ikke samtykke til noe mer. Grensene hennes er gyldige uansett. Alkohol endrer ikke paa samtykkeregelen, og den andre personen har ansvar for sin oppfoersel.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi snakket om noe av det mest grunnleggende i menneskelige relasjoner: **kroppslig autonomi** -- retten til aa bestemme over egen kropp.

Vi har laert at **samtykke** maa vaere frivillig, informert, entusiastisk, gjensidig, kan trekkes tilbake, og er situasjonsbestemt. Man kan ikke gi gyldig samtykke naar man er beruset, sover eller er redd.

Vi har utforsket ulike typer **grenser** -- fysiske, emosjonelle, digitale og tidsbaserte -- og sett at det aa sette grenser er en ferdighet som kan laeres og oeves.

Det viktigste aa ta med seg: aa si nei er en styrke, ikke en svakhet. Aa respektere andres nei er grunnleggende for trygge relasjoner. Og alle fortjener aa bli behandlet med respekt -- uansett situasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.6 NARRATIV: Kjoenn, seksualitet og samfunn
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_1_6_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-1-6-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.6',
  title: 'Kjønn, seksualitet og samfunn',
  subtitle: 'Narrativ versjon',
  description: 'En balansert utforskning av ulike syn paa kjoenn og seksualitet i samfunnet -- fra biologi og kultur til lovverk og debatt.',
  estimatedMinutes: 30,
  competenceGoals: [
    'reflektere over ulike perspektiver paa kjoenn og seksualitet',
    'droefte hvordan normer og forventninger varierer i samfunnet',
  ],
  linkedChapterId: 'samfunnskunnskap-1-6',
  content: [
    {
      id: 'samfunnskunnskap-1-6-n-intro',
      type: 'text',
      content: `## Et tema med mange stemmer

Faa temaer i samfunnsdebatten engasjerer saa sterkt som kjoenn og seksualitet. Det er omraader der mennesker har ulike syn og verdier, formet av biologi, kultur, religion, personlige erfaringer og politisk overbevisning.

Noen legger hovedvekt paa biologiske forskjeller mellom kjoennene. Andre fremhever sosiale og kulturelle faktorer. Religioese tradisjoner har ofte definerte syn, og politiske standpunkter varierer fra tradisjonelle til progressive. Selv vitenskapelige miljoer har ulike tilnaerminger.

Det er viktig aa forstaa at dette er temaer der rimelige mennesker kan vaere uenige -- og at uenighet i god tro er noe annet enn mangel paa respekt. Maalet i dette kapittelet er ikke aa fortelle deg hva du skal mene, men aa gi deg kunnskap og verktoy til aa forstaa debatten og delta i den paa en informert maate.`,
    },
    {
      id: 'samfunnskunnskap-1-6-n-section1',
      type: 'text',
      content: `## Begrepene du trenger aa kjenne

For aa forstaa debatten maa vi foerst forstaa begrepene.

**Biologisk kjoenn** refererer til de fysiske egenskapene som definerer kroppen som mann eller kvinne -- kromosomer, hormoner og reproduktive organer. De aller fleste mennesker er biologisk sett tydelig mann eller kvinne, men et lite mindretall (anslagsvis 0,02-0,05 prosent) foedes med variasjon i kjoennskarakteristika.

**Kjoennsidentitet** handler om hvordan en person opplever sitt eget kjoenn. De aller fleste opplever samsvar mellom biologisk kjoenn og kjoennsidentitet. Noen opplever at disse ikke samsvarer -- dette kalles kjoennsinkongruens.

**Kjoennsroller** er samfunnets forventninger til hvordan menn og kvinner skal oppfoere seg. Disse har endret seg betydelig over tid. For hundre aar siden var det utenkelig at kvinner skulle stemme ved valg eller jobbe som ingeniorer. I dag er dette selvfoelgeligheter i Norge.

**Seksuell orientering** handler om hvem man foeler romantisk og seksuell tiltrekning til. De fleste mennesker er heterofile -- tiltrukket av det motsatte kjoenn. Noen er homofile eller lesbiske -- tiltrukket av samme kjoenn. Andre er bifile -- tiltrukket av begge kjoenn.

Det er viktig aa merke seg at det finnes ulike syn paa hvordan disse begrepene skal forstaas og brukes. Noen vektlegger biologiske definisjoner, andre vektlegger personlig opplevelse. Aa vaere klar over denne uenigheten er en del av det aa forstaa debatten.`,
    },
    {
      id: 'samfunnskunnskap-1-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa grunnleggende begreper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-6-n-quiz1-q0',
            task: 'Hva er biologisk kjoenn basert paa?',
            options: [
              { id: 'a', text: 'Personlig opplevelse og foelelelser', isCorrect: false },
              { id: 'b', text: 'Kromosomer, hormoner og reproduktive organer', isCorrect: true },
              { id: 'c', text: 'Samfunnets forventninger til oppfoersel', isCorrect: false },
              { id: 'd', text: 'Hvem man er tiltrukket av', isCorrect: false },
            ],
            solution: 'Biologisk kjoenn er basert paa fysiske egenskaper: kromosomer (XX/XY), hormoner og reproduktive organer. De aller fleste er biologisk sett tydelig mann eller kvinne.',
          },
          {
            id: 'samfunnskunnskap-1-6-n-quiz1-q1',
            task: 'Hva er kjoennsroller?',
            options: [
              { id: 'a', text: 'Biologiske forskjeller mellom mann og kvinne', isCorrect: false },
              { id: 'b', text: 'Samfunnets forventninger til hvordan menn og kvinner skal oppfoere seg', isCorrect: true },
              { id: 'c', text: 'Roller i et skuespill fordelt etter kjoenn', isCorrect: false },
              { id: 'd', text: 'Lovbestemte rettigheter for menn og kvinner', isCorrect: false },
            ],
            solution: 'Kjoennsroller er samfunnets forventninger til hvordan menn og kvinner skal oppfoere seg. Disse har endret seg betydelig over tid og varierer mellom kulturer.',
          },
          {
            id: 'samfunnskunnskap-1-6-n-quiz1-q2',
            task: 'Hva betyr kjoennsinkongruens?',
            options: [
              { id: 'a', text: 'At man ikke foelger tradisjonelle kjoennsroller', isCorrect: false },
              { id: 'b', text: 'At man er tiltrukket av samme kjoenn', isCorrect: false },
              { id: 'c', text: 'At en person opplever at biologisk kjoenn og kjoennsidentitet ikke samsvarer', isCorrect: true },
              { id: 'd', text: 'At man er usikker paa sin seksuelle orientering', isCorrect: false },
            ],
            solution: 'Kjoennsinkongruens betyr at en person opplever at biologisk kjoenn og kjoennsidentitet ikke samsvarer. De aller fleste opplever samsvar, men noen gjoer det ikke.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-6-n-section2',
      type: 'text',
      content: `## Ulike perspektiver -- og hva de ser

Debatten om kjoenn og seksualitet formes av ulike perspektiver, og hvert perspektiv ser noe viktig.

Det **biologiske eller tradisjonelle perspektivet** vektlegger at kjoenn primaert er biologisk bestemt. Mann og kvinne er de to naturlige kategoriene, og biologiske forskjeller kan ha betydning for preferanser og atferd. Fra dette perspektivet har tradisjonelle kjoennsroller en viss naturlig basis, selv om de ogsaa har kulturelle elementer.

Det **sosialkonstruktivistiske perspektivet** vektlegger at kjoennsroller hovedsakelig er sosialt og kulturelt skapt. Forventninger til kjoenn varierer enormt mellom kulturer og epoker, noe som tyder paa at mye av det vi tenker paa som "naturlige" kjoennsforskjeller egentlig er laert. Fra dette perspektivet kan tradisjonelle kjoennsroller begrense individets frihet.

**Religioese perspektiver** er mangfoldige, men mange religioner har definerte syn paa kjoenn og seksualitet. Tradisjonelle ekteskap- og familieverdier vektlegges ofte. Mennesker av tro kan imidlertid ha ulike syn paa hvordan tradisjonelle tekster og verdier skal tolkes i dagens samfunn.

Ingen av disse perspektivene har monopol paa sannheten. Det biologiske perspektivet tar hensyn til reelle biologiske forskjeller, men kan undervurdere kulturens rolle. Det sosialkonstruktivistiske perspektivet aapner for endring og frihet, men kan underkjenne biologiske faktorer. Religioese perspektiver gir moralske rammer, men kan vaere vanskelige aa tilpasse nye kunnskaper.

Det viktige poenget er at folk med ulike syn kan -- og boer -- behandle hverandre med respekt og verdighet. Uenighet i sak betyr ikke noedvendigvis diskriminering.`,
    },
    {
      id: 'samfunnskunnskap-1-6-n-section3',
      type: 'text',
      content: `## Homofili -- fra straffbart til ekteskapslov

Utviklingen i Norges holdning til homofili er en av de mest dramatiske samfunnsendringene de siste femti aarene, og den illustrerer hvordan normer kan endre seg.

Saa sent som i 1972 var homofili straffbart i Norge. Menn kunne bli doemt til fengsel for aa ha et seksuelt forhold til en annen mann. Tenk deg det -- det som i dag er en lovbeskyttet rettighet, var en forbrytelse for bare to generasjoner siden.

I 1993 kom partnerskapsloven, som ga homofile par mange av de samme rettighetene som ektepar. Og i 2009 ble ekteskapsloven endret til ogsaa aa omfatte par av samme kjoenn, slik at homofile og heterofile par fikk helt like juridiske rettigheter. I dag er diskriminering paa grunn av seksuell orientering forbudt ved lov.

De fleste forskere mener at seksuell orientering ikke er et valg, og anslagsvis to til fem prosent av befolkningen er homofile eller bifile. Homofili finnes i alle samfunn og har eksistert gjennom hele historien.

Men selv om lovverket har endret seg, finnes det fortsatt ulike syn i samfunnet. Noen -- ofte med bakgrunn i et **liberalt syn** -- mener at homofili er en naturlig variasjon som boer ha fulle rettigheter paa linje med heterofili. Andre -- ofte med bakgrunn i **tradisjonelle eller religioese verdier** -- ser homofilt samliv som moralsk problematisk, samtidig som de mener homofile skal behandles med respekt.

Her er en viktig distinksjon: det er forskjell paa aa ha et syn paa hva som er moralsk riktig, og aa diskriminere mennesker. Man kan respektere mennesker selv om man er uenig med dem. Et pluralistisk samfunn maa ha rom for baade ulike livsstiler og ulike meninger, saa lenge alle foelger loven og behandler hverandre med verdighet.`,
    },
    {
      id: 'samfunnskunnskap-1-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa perspektiver og lovverk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-6-n-quiz2-q0',
            task: 'Naar ble homofili avkriminalisert i Norge?',
            options: [
              { id: 'a', text: '1945', isCorrect: false },
              { id: 'b', text: '1972', isCorrect: true },
              { id: 'c', text: '1993', isCorrect: false },
              { id: 'd', text: '2009', isCorrect: false },
            ],
            solution: 'Homofili var straffbart i Norge frem til 1972. Partnerskapsloven kom i 1993, og felles ekteskapslov ble innfoert i 2009.',
          },
          {
            id: 'samfunnskunnskap-1-6-n-quiz2-q1',
            task: 'Hva kjennetegner det sosialkonstruktivistiske perspektivet paa kjoenn?',
            options: [
              { id: 'a', text: 'At kjoenn er helt bestemt av biologi', isCorrect: false },
              { id: 'b', text: 'At kjoennsroller hovedsakelig er sosialt og kulturelt skapt', isCorrect: true },
              { id: 'c', text: 'At det bare finnes to kjoenn', isCorrect: false },
              { id: 'd', text: 'At religioese tekster bestemmer kjoennsroller', isCorrect: false },
            ],
            solution: 'Sosialkonstruktivisme vektlegger at kjoennsroller hovedsakelig er sosialt og kulturelt skapt. Forventninger til kjoenn varierer mellom kulturer og epoker, noe som tyder paa at mye er laert snarere enn medfodt.',
          },
          {
            id: 'samfunnskunnskap-1-6-n-quiz2-q2',
            task: 'Hva er forskjellen mellom like muligheter og like utfall?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'Like muligheter betyr at alle stiller likt, like utfall betyr at resultatet er det samme', isCorrect: true },
              { id: 'c', text: 'Like utfall er alltid rettferdig, like muligheter er det ikke', isCorrect: false },
              { id: 'd', text: 'Like muligheter gjelder bare i arbeidslivet', isCorrect: false },
            ],
            solution: 'Like muligheter betyr at alle har samme sjanse og forutsetninger. Like utfall betyr at resultatet er likt fordelt. Man kan stoeette likestilling uten noedevendigvis aa mene at alle utfall maa vaere identiske.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket et tema der mange stemmer gjoer seg gjeldende. Vi har laert grunnleggende begreper: **biologisk kjoenn**, **kjoennsidentitet**, **kjoennsroller** og **seksuell orientering**.

Vi har sett paa tre hovedperspektiver -- det **biologiske**, det **sosialkonstruktivistiske** og **religioese perspektiver** -- og forstatt at hvert av dem ser noe viktig, men at ingen har monopol paa sannheten.

Vi har fulgt Norges dramatiske reise fra aa straffe homofili (til 1972) via partnerskapsloven (1993) til felles ekteskapslov (2009), og sett at samfunnsnormer kan endre seg radikalt.

Det viktigste aa ta med seg er kanskje dette: i et **pluralistisk samfunn** kan folk ha ulike syn paa kjoenn og seksualitet, men alle skal behandles med respekt og verdighet. Uenighet i sak og gjensidig respekt kan eksistere side om side.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.7 NARRATIV: Digitale spor og personvern
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_1_7_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-1-7-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.7',
  title: 'Digitale spor og personvern',
  subtitle: 'Narrativ versjon',
  description: 'En oeyeaapnende reise gjennom den usynlige verdenen av datainnsamling -- hvem som foelger med paa hvert klikk du gjoer, og hvordan du kan beskytte deg.',
  estimatedMinutes: 25,
  competenceGoals: [
    'droefte utfordringer knyttet til personvern i en digital verden',
    'reflektere over egne digitale spor og hvordan de kan beskyttes',
  ],
  linkedChapterId: 'samfunnskunnskap-1-7',
  content: [
    {
      id: 'samfunnskunnskap-1-7-n-intro',
      type: 'text',
      content: `## Noen ser alt du gjoer

Hver eneste dag etterlater du hundrevis av digitale spor uten aa tenke over det. Du googler noe -- lagret. Du liker et innlegg paa Instagram -- registrert. Du gaar forbi en butikk med telefonen i lomma -- lokasjonen din er sporet. Du klikker paa en lenke i en e-post -- notert. Alt dette samles inn, lagres og analyseres av selskaper og algoritmer.

**Digitale spor** er data som etterlates naar du bruker internett. Noen spor legger du igjen aktivt -- som innlegg, bilder og kommentarer du selv publiserer. Andre spor samles inn automatisk uten at du merker det: soekehistorikk, lokasjon, klikkemoenstre, hvor lenge du ser paa et bilde foer du scroller videre. I tillegg finnes det metadata -- data om dataene dine -- som viser naar, hvor og hvor lenge du var online.

Hvem samler inn alt dette? Listen er lang: sosiale medier som Facebook, Instagram, TikTok og Snapchat. Soekemotorer som Google. Nettbutikker og apper. Annonsenettverk som foelger deg paa tvers av nettsider. Og i noen tilfeller: myndigheter.

Dataene brukes til aa maalrette reklame, forme innholdet du ser, og kan i verste fall misbrukes. Spoersmaalet er: er du komfortabel med at noen vet mer om deg enn du vet om deg selv?`,
    },
    {
      id: 'samfunnskunnskap-1-7-n-section1',
      type: 'text',
      content: `## Personvern -- din rett til et privatliv

**Personvern** er retten til aa bestemme over opplysninger om deg selv og aa ha et privatliv. Det er en grunnleggende rettighet, beskyttet av baade norsk lov og internasjonale konvensjoner.

**Personopplysninger** er informasjon som kan knyttes til en enkeltperson: navn, adresse, bilder, helseopplysninger, politiske meninger, seksuell orientering. Alt dette er beskyttet av loven.

I 2018 ble **GDPR** (personvernforordningen) innfoert i EU og EOES, inkludert Norge. GDPR gir deg flere viktige rettigheter. Du har **rett til innsyn** -- du kan be selskaper vise deg alle data de har om deg. Du har **rett til sletting** -- du kan be om aa faa dataene dine slettet, noe som ogsaa kalles "retten til aa bli glemt". Du har **rett til aa trekke samtykke** -- hvis du tidligere sa ja til datainnsamling, kan du ombestemme deg. Og selskaper maa ha en **lovlig grunn** til aa behandle dataene dine.

**Informasjonskapsler** (cookies) er smaa datafiler som lagres i nettleseren din. Noen er noedvendige for at nettsider skal fungere -- for eksempel for aa huske innloggingen din. Men mange cookies brukes til aa spore aktiviteten din paa tvers av nettsider for aa bygge en profil av deg.

**Datatilsynet** er den norske myndigheten som foerer tilsyn med personvern. De kan gi boeeter til selskaper som bryter reglene, og de gir raad til baade privatpersoner og virksomheter.

Men lover og tilsyn er bare halvparten. Den andre halvparten er din egen bevissthet og dine egne valg.`,
    },
    {
      id: 'samfunnskunnskap-1-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa digitale spor og personvern:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-7-n-quiz1-q0',
            task: 'Hva er digitale spor?',
            options: [
              { id: 'a', text: 'Fingeravtrykk paa skjermen', isCorrect: false },
              { id: 'b', text: 'Data som etterlates naar du bruker internett -- soekehistorikk, likes, lokasjon', isCorrect: true },
              { id: 'c', text: 'Fysiske spor fra elektronisk utstyr', isCorrect: false },
              { id: 'd', text: 'Bare innlegg du selv publiserer', isCorrect: false },
            ],
            solution: 'Digitale spor er all data som etterlates naar du bruker internett. Det inkluderer baade aktive spor (innlegg, bilder) og automatisk innsamlede spor (soekehistorikk, lokasjon, klikkemoenstre).',
          },
          {
            id: 'samfunnskunnskap-1-7-n-quiz1-q1',
            task: 'Hva gir GDPR deg rett til?',
            options: [
              { id: 'a', text: 'Gratis internett og mobildata', isCorrect: false },
              { id: 'b', text: 'Aa bruke andres personopplysninger fritt', isCorrect: false },
              { id: 'c', text: 'Innsyn i, sletting av og kontroll over dine personopplysninger', isCorrect: true },
              { id: 'd', text: 'Aa vaere anonym paa alle nettsider', isCorrect: false },
            ],
            solution: 'GDPR gir deg rett til innsyn (se hva selskaper vet om deg), rett til sletting ("retten til aa bli glemt"), rett til aa trekke samtykke, og krav om at selskaper maa ha lovlig grunn til aa behandle dataene dine.',
          },
          {
            id: 'samfunnskunnskap-1-7-n-quiz1-q2',
            task: 'Hva er informasjonskapsler (cookies)?',
            options: [
              { id: 'a', text: 'Virus som spres gjennom e-post', isCorrect: false },
              { id: 'b', text: 'Smaa datafiler som lagres i nettleseren for aa huske preferanser og spore aktivitet', isCorrect: true },
              { id: 'c', text: 'Programvare som beskytter mot hacking', isCorrect: false },
              { id: 'd', text: 'Bilder som lastes ned automatisk', isCorrect: false },
            ],
            solution: 'Informasjonskapsler er smaa datafiler som lagres i nettleseren din. Noen er noedvendige for at nettsider skal fungere, men mange brukes til aa spore aktiviteten din paa tvers av nettsider.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-7-n-section2',
      type: 'text',
      content: `## Historien om Maria og joggeskoene

La oss foelge Maria gjennom en vanlig dag for aa forstaa hvordan sporings-oekonomien fungerer.

Maria googler "joggesko dame stoerrelse 39". Google lagrer soeeket. Informasjonskapsler paa Google kjenner henne igjen fra tidligere soek og vet allerede en del om henne -- omtrentlig alder, kjoenn, interesser og inntektsnivaa basert paa tusenvis av tidligere soek og klikk.

Kort tid etter ser Maria reklame for joggesko paa Facebook. Saa paa Instagram. Saa paa en nyhetsside hun leser. Joggeskoene foelger henne overalt. Hvordan skjer dette?

Svaret er et nettverk av **annonsesystemer** som deler data. Googles annonsenettverk vet at Maria er interessert i joggesko. Facebook vet det ogsaa -- fordi informasjonskapsler og sporingspikler (usynlige bilder i nettsider) knytter aktiviteten hennes sammen paa tvers av plattformer. Algoritmene bygger en profil og selger tilgang til denne profilen til annonsorer som betaler for aa naa "kvinner i 20-aarene som soeker etter joggesko".

Maria kan beskytte seg: slette informasjonskapsler regelmessig, bruke annonseblokker, endre personverninnstillinger, bruke privat nettlesermodus, og velge "avvis alle" paa cookie-bannere.

Men Marias historie avslorer noe stoerre. Det finnes risikoer utover irriterende reklame: **identitetstyveri**, der noen faar tak i personopplysningene dine og utgir seg for aa vaere deg. **Maalrettet manipulasjon**, der dataprofilen din brukes til aa paavirke meningene dine. **Datalekkasjer**, der personopplysninger kommer paa avveie. **Ekkokammer og filterbobler**, der algoritmene bare viser deg innhold du allerede er enig i.

Det finnes et kjent ordtak i teknologibransjen: "Hvis tjenesten er gratis, er du produktet." Dataene dine har verdi -- og det er du som betaler med dem.

For aa beskytte deg boer du bruke sterke, unike passord og tofaktorautentisering, vaere kritisk til hva du deler, sjekke personverninnstillinger, bruke VPN paa offentlig wifi, slette gamle kontoer du ikke bruker, og huske: det du deler paa nett kan vaere der for alltid, selv om du sletter det.`,
    },
    {
      id: 'samfunnskunnskap-1-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa sporing og beskyttelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-7-n-quiz2-q0',
            task: 'Hvorfor ser Maria reklame for joggesko paa Facebook etter aa ha soekt paa Google?',
            options: [
              { id: 'a', text: 'Det er tilfeldig', isCorrect: false },
              { id: 'b', text: 'Informasjonskapsler og annonsenettverk deler data paa tvers av plattformer', isCorrect: true },
              { id: 'c', text: 'Facebook lytter paa mikrofonen hennes', isCorrect: false },
              { id: 'd', text: 'Alle ser de samme reklamene', isCorrect: false },
            ],
            solution: 'Annonsenettverk og informasjonskapsler knytter Marias aktivitet sammen paa tvers av plattformer. Naar hun soeker paa Google, vet ogsaa Facebooks annonsesystem om det, og viser henne maalrettet reklame.',
          },
          {
            id: 'samfunnskunnskap-1-7-n-quiz2-q1',
            task: 'Hva menes med "Hvis tjenesten er gratis, er du produktet"?',
            options: [
              { id: 'a', text: 'At gratis tjenester alltid er daarlige', isCorrect: false },
              { id: 'b', text: 'At dataene dine har verdi og er det du betaler med', isCorrect: true },
              { id: 'c', text: 'At du maa jobbe for selskapet', isCorrect: false },
              { id: 'd', text: 'At gratis tjenester snart blir betalte', isCorrect: false },
            ],
            solution: 'Naar en tjeneste er gratis, tjener selskapet penger paa aa selge dataene dine og tilgangen til oppmerksomheten din til annonsorer. Du betaler ikke med penger, men med dine personopplysninger.',
          },
          {
            id: 'samfunnskunnskap-1-7-n-quiz2-q2',
            task: 'Hvilken risiko er IKKE knyttet til digitale spor?',
            options: [
              { id: 'a', text: 'Identitetstyveri', isCorrect: false },
              { id: 'b', text: 'Ekkokammer og filterbobler', isCorrect: false },
              { id: 'c', text: 'Fysisk slitasje paa telefonen', isCorrect: true },
              { id: 'd', text: 'Maalrettet manipulasjon', isCorrect: false },
            ],
            solution: 'Risikoer knyttet til digitale spor inkluderer identitetstyveri, maalrettet manipulasjon, datalekkasjer og ekkokammer. Fysisk slitasje paa telefonen er ikke knyttet til digitale spor.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-7-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi fulgt de usynlige sporene du etterlater hver dag paa internett. Vi har laert at **digitale spor** inkluderer baade data du aktivt deler og data som samles inn automatisk.

Vi har utforsket **personvern** som rettighet og laert om **GDPR**, som gir deg rett til innsyn, sletting og kontroll over dine personopplysninger. **Datatilsynet** vaaker over disse rettighetene i Norge.

Gjennom historien om Maria og joggeskoene saa vi hvordan **sporings-oekonomien** fungerer i praksis -- hvordan informasjonskapsler og annonsenettverk foelger deg paa tvers av plattformer.

Vi har ogsaa sett paa risikoer som identitetstyveri, maalrettet manipulasjon og ekkokammer, og laert konkrete tiltak for aa beskytte oss: sterke passord, tofaktor, kritisk deling, og bevissthet om at det vi deler paa nett kan vaere der for alltid.

Husk: personvern er ikke noe du bare faar -- det er noe du aktivt maa beskytte.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.8 NARRATIV: Kritisk mediebruk
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_1_8_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-1-8-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.8',
  title: 'Kritisk mediebruk',
  subtitle: 'Narrativ versjon',
  description: 'En guide til aa navigere i en verden av informasjonskaos -- hvordan du skiller fakta fra fiksjon, gjenkjenner manipulasjon, og tar kontroll over ditt eget mediebilde.',
  estimatedMinutes: 25,
  competenceGoals: [
    'droefte hvordan algoritmer pavirker medieinnholdet vi ser',
    'utvikle evne til kildekritikk og faktasjekk',
  ],
  linkedChapterId: 'samfunnskunnskap-1-8',
  content: [
    {
      id: 'samfunnskunnskap-1-8-n-intro',
      type: 'text',
      content: `## Informasjonsjungelen

Vi lever i en tid der vi har tilgang til mer informasjon enn noen generasjon foer oss. Hvert minutt lastes det opp hundrevis av timer med video paa YouTube, tusenvis av innlegg publiseres paa sosiale medier, og utallige artikler legges ut paa nettsider rundt om i verden.

Men her er problemet: noe av det er sant, noe er vinklet, og noe er direkte feil. Og det kan vaere ekstremt vanskelig aa skille mellom disse.

Tenk deg at du ser en artikkel med overskriften "SJOKKERENDE: Ny studie viser at..." Overskriften faar hjertet til aa slaa litt fortere. Du faar lyst til aa dele den med vennene dine. Men stopp. Er det sant? Hvem staar bak? Finnes studien i det hele tatt?

**Kritisk mediebruk** handler om akkurat dette: aa vaere bevisst, stille spoersmaal og verifisere informasjon foer du tror paa den eller deler den videre. I et demokratisk samfunn er denne evnen helt avgjoorende -- fordi demokratiet avhenger av at borgerne kan ta informerte valg basert paa paalitelig informasjon.`,
    },
    {
      id: 'samfunnskunnskap-1-8-n-section1',
      type: 'text',
      content: `## Feilinformasjon, desinformasjon og andre faeller

Foer vi kan beskytte oss, maa vi kjenne fienden. Det finnes flere typer problematisk informasjon, og det er viktig aa skille mellom dem.

**Feilinformasjon** (misinformation) er usann informasjon som spres uten intensjon om aa villede. Bestemor deler en artikkel paa Facebook som hun tror er sann, men som viser seg aa vaere feil. Hensikten er god, men resultatet er det samme: usann informasjon spres.

**Desinformasjon** (disinformation) er noe langt mer alvorlig. Det er bevisst falsk informasjon som spres for aa villede, manipulere eller skade. Stater, organisasjoner eller enkeltpersoner kan lage falske nyheter for aa paavirke valg, skape splid eller tjene penger paa klikk.

**Propaganda** er informasjon brukt for aa fremme en politisk sak, ofte ensidig eller manipulerende. Den trenger ikke vaere usann, men den presenterer bare en side av saken.

**Clickbait** er overskrifter designet for aa faa deg til aa klikke: "Du vil IKKE tro hva som skjedde!" "Leger HATER dette trikset!" De er ofte overdrevne eller villedende, og innholdet holder sjelden det overskriften lover.

**Deepfakes** er kanskje den mest skremmende utviklingen: manipulerte videoer eller bilder laget med kunstig intelligens. Du kan se en video av en kjent person som sier noe de aldri har sagt. Teknologien blir stadig bedre, og det blir stadig vanskeligere aa se forskjellen.

Og saa er det **satire og parodi** -- overdrivelser ment som humor, som kan misforstaas som ekte nyheter. Naar noen deler en satirisk artikkel i fullt alvor, har vi et problem.`,
    },
    {
      id: 'samfunnskunnskap-1-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa feilinformasjon og desinformasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-8-n-quiz1-q0',
            task: 'Hva er forskjellen mellom feilinformasjon og desinformasjon?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'Feilinformasjon spres ubevisst, desinformasjon spres bevisst for aa villede', isCorrect: true },
              { id: 'c', text: 'Feilinformasjon er paa nett, desinformasjon er paa papir', isCorrect: false },
              { id: 'd', text: 'Desinformasjon er alltid fra utlandet', isCorrect: false },
            ],
            solution: 'Feilinformasjon er usann informasjon som spres uten intensjon om aa villede -- avsenderen tror selv det er sant. Desinformasjon er bevisst falsk informasjon spredt for aa villede eller manipulere.',
          },
          {
            id: 'samfunnskunnskap-1-8-n-quiz1-q1',
            task: 'Hva er deepfakes?',
            options: [
              { id: 'a', text: 'Svart dype falske profiler paa sosiale medier', isCorrect: false },
              { id: 'b', text: 'Manipulerte videoer eller bilder laget med kunstig intelligens', isCorrect: true },
              { id: 'c', text: 'Nettsider som ser ekte ut men er falske', isCorrect: false },
              { id: 'd', text: 'E-poster fra falske avsendere', isCorrect: false },
            ],
            solution: 'Deepfakes er manipulerte videoer eller bilder laget med kunstig intelligens. De kan vise mennesker som sier eller gjoer ting de aldri har gjort, og teknologien blir stadig vanskeligere aa avsloere.',
          },
          {
            id: 'samfunnskunnskap-1-8-n-quiz1-q2',
            task: 'Hva er clickbait?',
            options: [
              { id: 'a', text: 'Reklame som popper opp paa skjermen', isCorrect: false },
              { id: 'b', text: 'Virus som aktiveres naar du klikker paa en lenke', isCorrect: false },
              { id: 'c', text: 'Overdrevne eller villedende overskrifter designet for aa faa deg til aa klikke', isCorrect: true },
              { id: 'd', text: 'En type aateagn brukt i digital fiske', isCorrect: false },
            ],
            solution: 'Clickbait er overskrifter designet for aa faa deg til aa klikke, ofte overdrevne eller villedende. "Du vil IKKE tro..." og "SJOKKERENDE!" er typiske eksempler. Innholdet holder sjelden det overskriften lover.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-8-n-section2',
      type: 'text',
      content: `## TONE-metoden -- ditt viktigste verktoy

Heldigvis har du et kraftig verktoy for aa vurdere informasjon: **TONE-metoden** for kildekritikk.

**T staar for Troverdighet.** Hvem staar bak denne informasjonen? Er det en etablert nyhetskilde med journalister som foelger pressens etiske regler, eller en ukjent nettside uten "Om oss"-side? Har forfatteren relevant kompetanse? Er kilden kjent for aa vaere paalitelig?

**O staar for Objektivitet.** Er informasjonen balansert, eller presenterer den bare en side av saken? Skilles det tydelig mellom fakta og meninger? Er det skjult reklame eller interessekonflikter som kan farge innholdet?

**N staar for Noeyaktighet.** Er pastandene dokumentert med kilder? Kan informasjonen bekreftes av andre, uavhengige kilder? Stemmer tallene og faktaene naar du sjekker dem?

**E staar for Egnethet.** Er kilden relevant for det du undersoeker? Er informasjonen oppdatert? Passer kilden til formaalet?

La oss bruke TONE-metoden paa et konkret eksempel. Andreas ser en artikkel paa sosiale medier med overskriften "SJOKKERENDE: Ny studie viser at..." fra en nettside han aldri har hoert om. Han boer reagere paa flere varselsignaler: store bokstaver og sterke foelelesesord (clickbait), ukjent kilde (lav troverdighet), manglende lenke til selve studien (lav noeyaktighet). Foer han deler, boer han soeke etter studien selv, sjekke hva andre kilder sier, og bruke faktasjekkere som Faktisk.no. Sannsynligheten er stor for at artikkelen er upaalitelig.`,
    },
    {
      id: 'samfunnskunnskap-1-8-n-section3',
      type: 'text',
      content: `## Ekkokammer og filterbobler -- naar du bare hoerer deg selv

Det finnes en utfordring som er vanskeligere aa oppdage enn falske nyheter, fordi den er usynlig: **ekkokammer** og **filterbobler**.

Et ekkokammer er et miljo der du bare moeter meninger du allerede er enig i. Tenk deg at du bare foelger folk paa sosiale medier som mener det samme som deg, leser nyheter fra kilder som bekrefter ditt verdensbilde, og omgaas venner som tenker likt. Da lever du i et ekkokammer. Alt du hoerer bekrefter det du allerede tror, og du faar inntrykk av at "alle" er enige med deg.

**Filterbobler** er algoritmenes bidrag til dette problemet. Sosiale medier og soekemotorer bruker algoritmer som analyserer hva du har klikket paa, likt og delt tidligere, og viser deg mer av det samme. Hvis du klikker paa artikler om et bestemt tema, faar du flere slike artikler. Gradvis skapes en boble rundt deg der bare visse typer informasjon slipper gjennom.

Problemet med ekkokammer og filterbobler er at de forsterker eksisterende syn, reduserer eksponeringen for andre perspektiver, kan radikalisere, og svekker den demokratiske debatten. Hvis vi alle lever i vaare egne informasjonsunivers, hvordan skal vi da kunne diskutere og ta felles beslutninger?

Hva kan du gjoere? Aktivt soek opp kilder og perspektiver du er uenig med. Foelg folk paa sosiale medier som tenker annerledes enn deg. Vaer bevisst paa at algoritmene proever aa gi deg mer av det du allerede liker -- og at det ikke noedvendigvis er bra for deg.

Til slutt: hvem har ansvar for aa bekjempe falske nyheter? Alle har et ansvar. **Plattformene** maa moderere innhold og merke tvilsomt materiale. **Myndighetene** maa regulere og stoeette faktasjekking. Og **du** -- du maa vaere kritisk, sjekke foer du deler, og ta ansvar for din egen mediediett.`,
    },
    {
      id: 'samfunnskunnskap-1-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa kildekritikk og ekkokammer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-1-8-n-quiz2-q0',
            task: 'Hva staar bokstavene i TONE-metoden for?',
            options: [
              { id: 'a', text: 'Tema, Omfang, Nytte, Effektivitet', isCorrect: false },
              { id: 'b', text: 'Troverdighet, Objektivitet, Noeyaktighet, Egnethet', isCorrect: true },
              { id: 'c', text: 'Tittel, Opphav, Nyhetsverdi, Etikk', isCorrect: false },
              { id: 'd', text: 'Tid, Objekt, Nettside, Ekspert', isCorrect: false },
            ],
            solution: 'TONE-metoden staar for Troverdighet (hvem staar bak?), Objektivitet (balansert?), Noeyaktighet (dokumentert?) og Egnethet (relevant og oppdatert?).',
          },
          {
            id: 'samfunnskunnskap-1-8-n-quiz2-q1',
            task: 'Hva er en filterboble?',
            options: [
              { id: 'a', text: 'Et filter du setter paa bilder i sosiale medier', isCorrect: false },
              { id: 'b', text: 'Naar algoritmer bare viser deg innhold basert paa dine tidligere preferanser', isCorrect: true },
              { id: 'c', text: 'En boble av falske nyheter', isCorrect: false },
              { id: 'd', text: 'En sikkerhetsmekanisme i nettleseren', isCorrect: false },
            ],
            solution: 'En filterboble oppstaar naar algoritmer analyserer hva du har klikket paa og likt, og viser deg mer av det samme. Gradvis skapes en boble der bare visse typer informasjon slipper gjennom.',
          },
          {
            id: 'samfunnskunnskap-1-8-n-quiz2-q2',
            task: 'Hvilken av foelgende er et varselsignal paa upaalitelig informasjon?',
            options: [
              { id: 'a', text: 'Artikkelen er fra en kjent nyhetsredaksjon', isCorrect: false },
              { id: 'b', text: 'Artikkelen inneholder lenker til vitenskapelige studier', isCorrect: false },
              { id: 'c', text: 'Overskriften bruker store bokstaver, sterke foelelesesord og ber deg dele "foer det blir sensurert"', isCorrect: true },
              { id: 'd', text: 'Artikkelen presenterer flere sider av saken', isCorrect: false },
            ],
            solution: 'Varselsignaler inkluderer store bokstaver og sterke foelelesesord (clickbait), anonyme forfattere, manglende kilder, ekstreme paastander, og oppfordringer om aa dele "foer det blir sensurert". Serioese kilder presenterer fakta noekternt.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-1-8-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi rustet deg med verktoy til aa navigere i informasjonsjungelen. Vi har laert aa skille mellom **feilinformasjon** (ubevisst usann), **desinformasjon** (bevisst falsk), **propaganda**, **clickbait**, **deepfakes** og **satire**.

Vi har laert **TONE-metoden** for kildekritikk: vurder **Troverdighet** (hvem staar bak?), **Objektivitet** (balansert?), **Noeyaktighet** (dokumentert?) og **Egnethet** (relevant?).

Vi har utforsket **ekkokammer** og **filterbobler** -- de usynlige veggene som algoritmene bygger rundt oss, og som kan forsterke eksisterende syn og svekke demokratisk debatt.

Det viktigste budskapet er dette: kritisk mediebruk er ikke bare en ferdighet -- det er en plikt i et demokratisk samfunn. Stopp, tenk og sjekk foer du deler. Soek aktivt opp andre perspektiver. Og husk at du har ansvar for din egen informasjonsdiett, akkurat som du har ansvar for kostholdet ditt. Det du mater hjernen med, former hvordan du forstaar verden.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 1 Narrativ
// ============================================================================

export const SAMFUNNSKUNNSKAP_NARRATIV_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSKUNNSKAP_1_1_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_1_2_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_1_3_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_1_4_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_1_5_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_1_6_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_1_7_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_1_8_NARRATIV,
];
