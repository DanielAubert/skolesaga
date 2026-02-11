/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 3 (VG3) - Seksjon 7: Treneryrket
 * 5 delkapitler (7.1-7.5)
 *
 * Dekker LK20-kompetansemål for treningslære 3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Trenerrollen
// ============================================================================

export const CHAPTER_TRENING_3_7_1: TextbookChapter = {
  id: 'trening-3-7-1',
  courseId: 'trening-3',
  chapterNumber: '7.1',
  title: 'Trenerrollen',
  description: 'Lederskap, mentorskap, rollemodell og ansvar i trenerrollen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte trenerens rolle som leder, mentor og rollemodell',
    'gjøre rede for trenerens ansvar overfor utøvere og organisasjon',
    'reflektere over ulike lederstiler og deres påvirkning på treningsarbeidet',
  ],
  content: [
    {
      id: 'tr3-7-1-intro',
      type: 'text',
      content: `Treneren har en av de mest sentrale rollene i organisert idrett. En trener er langt mer enn en person som lager treningsprogrammer og gir beskjeder under kamp. Trenerrollen innebærer lederskap, mentorskap og det å være en rollemodell. Treneren påvirker utøvernes fysiske utvikling, mentale helse, verdier og holdninger. Denne påvirkningen strekker seg ofte langt utover idrettsarenaen og inn i utøvernes dagligliv. I dette kapittelet skal vi se nærmere på hva trenerrollen innebærer, hvilke forventninger som stilles, og hvilket ansvar som følger med.`,
    },
    {
      id: 'tr3-7-1-def-trenerrollen',
      type: 'definition',
      title: 'Trenerrollen',
      content: 'Trenerrollen beskriver summen av oppgaver, forventninger og ansvar en trener har overfor utøvere, lag, foreldre, klubb og idrettsorganisasjon. Rollen spenner fra faglig kompetanse innen trening og taktikk til mellommenneskelige ferdigheter som kommunikasjon, omsorg og motivasjon.',
    },
    {
      id: 'tr3-7-1-text-leder',
      type: 'text',
      title: 'Treneren som leder',
      content: `Treneren er en leder, og lederstilen har stor innvirkning på treningsklimaet og utøvernes utvikling. I idrettspsykologien skiller vi gjerne mellom flere lederstiler:

**Autoritær lederstil:**
- Treneren tar alle beslutninger selv
- Klar struktur og tydelige forventninger
- Kan gi effektiv styring i pressede situasjoner
- Risiko: utøverne opplever liten medbestemmelse og kan miste indre motivasjon

**Demokratisk lederstil:**
- Treneren involverer utøverne i beslutningsprosesser
- Fremmer selvstendighet og eierskap til treningsprosessen
- Bygger sterkere relasjoner og tillit
- Risiko: kan virke utydelig dersom treneren ikke setter rammer

**Relasjonsorientert lederstil:**
- Fokus på utøvernes trivsel og sosiale behov
- Skaper trygt treningsmiljø
- Styrker lojalitet og samhold
- Risiko: kan gå på bekostning av faglig utvikling dersom treneren unngår krav

**Oppgaveorientert lederstil:**
- Fokus på resultater, mål og konkrete prestasjoner
- Effektiv for utøvere som er sterkt motiverte
- Risiko: kan oppleves som kald og lite inkluderende

I praksis bruker de fleste trenere en kombinasjon av disse stilene, tilpasset situasjonen, utøvergruppen og nivået. En god trener er fleksibel og kan justere tilnærmingen etter behov.`,
    },
    {
      id: 'tr3-7-1-text-mentor',
      type: 'text',
      title: 'Treneren som mentor',
      content: `En mentor er en erfaren person som veileder, støtter og utvikler en mindre erfaren person. I idrettssammenheng innebærer mentorskapet at treneren:

**Ser hele mennesket:**
- Interesserer seg for utøverens liv utover idretten
- Forstår at skole, familie, venner og psykisk helse påvirker prestasjonen
- Er tilgjengelig for samtaler om mer enn bare trening

**Bidrar til personlig vekst:**
- Hjelper utøveren med å utvikle selvtillit, disiplin og sosiale ferdigheter
- Lærer utøveren å håndtere motgang, tap og skuffelser
- Fremmer selvstendig tenkning og kritisk refleksjon

**Skaper et utviklingsmiljø:**
- Tilpasser opplæringen til den enkeltes forutsetninger og behov
- Gir konstruktiv tilbakemelding som bygger opp, ikke bryter ned
- Feirer fremgang, ikke bare resultater

Mentorforholdet mellom trener og utøver kan vare i mange år og ha avgjørende betydning for utøverens karriere og liv. Mange toppidrettsutøvere trekker frem en bestemt trener som den viktigste personen for utviklingen deres.`,
    },
    {
      id: 'tr3-7-1-def-rollemodell',
      type: 'definition',
      title: 'Rollemodell',
      content: 'En rollemodell er en person som andre ser opp til og ønsker å etterligne. Trenere er rollemodeller gjennom sine holdninger, verdier og handlinger. Utøvere, særlig unge, observerer og internaliserer trenerens atferd, enten den er positiv eller negativ. Trenerens væremåte setter standarden for hva som er akseptabelt i treningsmiljøet.',
    },
    {
      id: 'tr3-7-1-text-rollemodell',
      type: 'text',
      title: 'Treneren som rollemodell',
      content: `Treneren er en rollemodell enten vedkommende er bevisst på det eller ikke. Alt treneren gjør og sier, registreres av utøverne. Dette gjelder:

**Holdninger til trening:**
- Viser treneren punktlighet og forberedthet?
- Behandler treneren alle utøvere med respekt, uavhengig av nivå?
- Viser treneren lidenskap og engasjement?

**Reaksjon på press og motgang:**
- Hvordan reagerer treneren på tap eller dårlige prestasjoner?
- Viser treneren fair play overfor dommere og motstandere?
- Håndterer treneren konflikter på en konstruktiv måte?

**Livsstil og verdier:**
- Er treneren et forbilde når det gjelder helse og velvære?
- Viser treneren respekt for regler og normer i idretten?
- Fremmer treneren inkludering og mangfold?

Forskning viser at trenerens atferd har direkte innvirkning på utøvernes verdier og holdninger. En trener som konsekvent viser fair play, ærlighet og respekt, vil forme utøvere som tar med seg de samme verdiene videre i livet.`,
    },
    {
      id: 'tr3-7-1-text-ansvar',
      type: 'text',
      title: 'Trenerens ansvar',
      content: `Trenerrollen medfører et betydelig ansvar som strekker seg over flere områder:

**Faglig ansvar:**
- Planlegge og gjennomføre trening basert på oppdatert kunnskap
- Sørge for alderstilpasset belastning og progresjon
- Holde seg oppdatert på ny forskning og metoder

**Sikkerhet:**
- Forebygge skader gjennom riktig oppvarming, teknikk og belastningsstyring
- Ha beredskap for akutte skader og førstehjelp
- Sørge for trygt utstyr og treningsforhold

**Mellommenneskelig ansvar:**
- Skape et trygt og inkluderende treningsmiljø
- Være oppmerksom på tegn til mistrivsel, mobbing eller overtrening
- Ha nulltoleranse for mobbing, trakassering og diskriminering

**Organisatorisk ansvar:**
- Samarbeide med klubb, foreldre og andre trenere
- Følge idrettens retningslinjer og regelverk
- Bidra til klubbens verdigrunnlag og sportslige strategi

**Juridisk ansvar:**
- Trenere har tilsynsplikt for mindreårige utøvere
- Politiattest er påkrevd for trenere som jobber med barn og unge
- Treneren plikter å melde fra om bekymringsverdige forhold`,
    },
    {
      id: 'tr3-7-1-example-leder',
      type: 'example',
      title: 'Lederstil i praksis',
      content: `**Situasjon:** Et juniorlag i håndball har tapt fire kamper på rad. Spillerne er frustrerte, og stemningen på trening er dårlig. Treneren må velge tilnærming.

**Autoritær:** Treneren skjerper kravene, innfører strengere struktur og bestemmer treningsinnholdet alene. Spillerne vet nøyaktig hva som forventes.

**Demokratisk:** Treneren kaller inn til lagmøte der spillerne selv får identifisere hva som ikke fungerer, og foreslå løsninger. Treneren styrer prosessen, men spillerne opplever medbestemmelse.

**Relasjonsorientert:** Treneren fokuserer på å gjenbygge selvtillit og trivsel. Treningene gjøres morsommere, og treneren tar individuelle samtaler med spillere som sliter.

I praksis ville en erfaren trener trolig kombinere elementer fra alle tre: lytte til spillerne (demokratisk), vise omsorg (relasjonsorientert) og samtidig lage en tydelig plan med klare forventninger (autoritær). Situasjonstilpasset ledelse er nøkkelen.`,
    },
    {
      id: 'tr3-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-1-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken lederstil kjennetegnes av at treneren involverer utøverne i beslutninger og fremmer selvstendighet?',
        options: [
          { id: 'a', text: 'Demokratisk lederstil', isCorrect: true },
          { id: 'b', text: 'Autoritær lederstil', isCorrect: false },
          { id: 'c', text: 'Oppgaveorientert lederstil', isCorrect: false },
          { id: 'd', text: 'Passiv lederstil', isCorrect: false },
        ],
        solution: 'Demokratisk lederstil kjennetegnes av at treneren involverer utøverne i beslutningsprosesser. Dette fremmer selvstendighet, eierskap til treningsprosessen og sterkere relasjoner mellom trener og utøver.',
      },
    },
    {
      id: 'tr3-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-1-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer trenerens rolle som mentor?',
        options: [
          { id: 'a', text: 'At treneren veileder, støtter og ser hele mennesket bak utøveren', isCorrect: true },
          { id: 'b', text: 'At treneren kun fokuserer på teknisk og taktisk utvikling', isCorrect: false },
          { id: 'c', text: 'At treneren overlater ansvaret for den personlige utviklingen til foreldrene', isCorrect: false },
          { id: 'd', text: 'At treneren gir utøveren full frihet til å bestemme treningsinnholdet selv', isCorrect: false },
        ],
        solution: 'Som mentor ser treneren hele mennesket bak utøveren. Det innebærer å interessere seg for livet utover idretten, bidra til personlig vekst, og skape et miljø der utøveren kan utvikle seg både sportslig og som menneske.',
      },
    },
    {
      id: 'tr3-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-1-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for hva det betyr at treneren er en rollemodell. Gi minst tre konkrete eksempler på situasjoner der trenerens atferd påvirker utøvernes holdninger og verdier.',
        solution: 'At treneren er en rollemodell betyr at utøverne observerer og etterligner trenerens atferd, holdninger og verdier. Konkrete eksempler: 1) Når treneren konsekvent er punktlig og godt forberedt, lærer utøverne at punktlighet og forberedelse er viktig. 2) Dersom treneren reagerer rolig og konstruktivt etter et urettferdig dommeravgjørelse, lærer utøverne å håndtere motgang med verdighet og fair play. 3) Hvis treneren behandler alle utøvere med respekt uavhengig av ferdighetsnivå, internaliserer utøverne verdien av inkludering og likeverd. Trenerens atferd setter standarden for hele treningsmiljøet og former utøvernes karakter langt utover idrettens rammer.',
      },
    },
    {
      id: 'tr3-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-1-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de fire ansvarsområdene en trener har (faglig, sikkerhet, mellommenneskelig og organisatorisk). Forklar hvorfor hvert område er viktig for et velfungerende treningsmiljø.',
        solution: 'Faglig ansvar: Treneren skal planlegge og gjennomføre trening basert på oppdatert kunnskap, med alderstilpasset belastning og progresjon. Uten faglig kompetanse risikerer man feiltrening, skader og stagnasjon. Sikkerhet: Treneren skal forebygge skader gjennom riktig oppvarming, teknikk og belastningsstyring, samt ha beredskap for akutte situasjoner. Uten fokus på sikkerhet settes utøvernes helse i fare. Mellommenneskelig ansvar: Treneren skal skape et trygt og inkluderende miljø, være oppmerksom på mistrivsel og ha nulltoleranse for mobbing og trakassering. Uten dette vil utøvere mistrives og slutte med idretten. Organisatorisk ansvar: Treneren skal samarbeide med klubb, foreldre og andre trenere, og følge idrettens retningslinjer. Uten godt organisatorisk arbeid mangler rammene som treningsmiljøet trenger for å fungere.',
      },
    },
    {
      id: 'tr3-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-1-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper med autoritær og demokratisk lederstil i idrett. Bruk eksempler fra ulike idretter og aldersgrupper for å vise når de ulike stilene kan være mest hensiktsmessige.',
        solution: 'Autoritær lederstil gir klar struktur og tydelige forventninger, noe som kan være effektivt i pressede konkurransesituasjoner og med store grupper der mange beslutninger må tas raskt. For eksempel kan en fotballtrener under en viktig kamp ha behov for å ta raske taktiske beslutninger uten diskusjon. For barn og nybegynnere kan tydelig struktur gi trygghet. Ulempen er at utøvere kan miste indre motivasjon, bli avhengige av ytre styring og utvikle dårligere evne til selvstendig problemløsning. Demokratisk lederstil fremmer selvstendighet, eierskap og indre motivasjon. I individuell idrett som friidrett eller svømming, der utøveren selv må ta mange valg, er dette verdifullt. For eldre og mer erfarne utøvere styrker medbestemmelse engasjementet. Ulempen er at prosessen kan bli treg, og dersom treneren ikke setter klare rammer, kan det oppstå utydelighet. I praksis vil de fleste gode trenere bruke en situasjonstilpasset tilnærming. Med yngre utøvere kan mer struktur være nødvendig, mens eldre utøvere trenger mer medvirkning. Under kamp kan autoritær stil være effektiv, mens i planlegging av sesong kan demokratisk stil gi bedre resultater.',
      },
    },
    {
      id: 'tr3-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-1-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Reflekter over trenerens betydning som mentor for unge utøvere. Hvordan kan en trener bidra til å utvikle utøvere som er rustet for livet, ikke bare for idretten? Bruk teori om mentorskap og rollemodellering i svaret ditt.',
        solution: 'En trener som fungerer som mentor, ser utøveren som et helt menneske og tar ansvar for mer enn den rent fysiske og tekniske utviklingen. Gjennom mentorskapet kan treneren bidra til at unge utøvere utvikler livsferdigheter som disiplin, samarbeidsevne, evne til å håndtere motgang, målsetting og selvrefleksjon. Disse ferdighetene er overførbare til utdanning, arbeidsliv og personlige relasjoner. Treneren som rollemodell viser gjennom egne handlinger hva som er akseptable verdier og holdninger. Dersom treneren konsekvent demonstrerer ærlighet, respekt, inkludering og ansvarsfullhet, vil utøverne internalisere disse verdiene. Omvendt, dersom treneren viser aggresjon, urettferdighet eller manglende respekt, vil dette også prege utøverne. Konkret kan en trener bidra til livsmestring ved å: la utøverne ta ansvar for deler av treningen (selvstendighet), reflektere over tap og motgang som læringsmuligheter (resiliens), vektlegge innsats fremfor resultat (vekstorientert tankesett), og skape et trygt rom der utøverne tør å feile (psykologisk trygghet). Forskning viser at unge mennesker som har hatt gode trener-mentor-relasjoner, ofte har høyere selvtillit, bedre sosiale ferdigheter og sterkere motivasjon for videre utvikling.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.2: Kommunikasjon og motivasjon
// ============================================================================

export const CHAPTER_TRENING_3_7_2: TextbookChapter = {
  id: 'trening-3-7-2',
  courseId: 'trening-3',
  chapterNumber: '7.2',
  title: 'Kommunikasjon og motivasjon',
  description: 'Feedback, instruksjon, autonomistøtte og motivasjonsteknikker i trenerrollen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive ulike former for kommunikasjon og feedback i treningsarbeidet',
    'gjøre rede for hvordan treneren kan fremme indre motivasjon gjennom autonomistøtte',
    'anvende prinsipper fra selvbestemmelsesteorien i trenerarbeidet',
  ],
  content: [
    {
      id: 'tr3-7-2-intro',
      type: 'text',
      content: `God kommunikasjon er selve grunnmuren i forholdet mellom trener og utøver. Hvordan treneren gir instruksjoner, tilbakemeldinger og motiverer, har direkte innvirkning på utøverens utvikling, trivsel og motivasjon. En trener kan ha all verdens fagkunnskap, men uten evnen til å formidle denne kunnskapen på en god måte, vil mye gå tapt. I dette kapittelet ser vi på kommunikasjon, feedback og motivasjon som sentrale trenerverktøy.`,
    },
    {
      id: 'tr3-7-2-def-feedback',
      type: 'definition',
      title: 'Feedback',
      content: 'Feedback er informasjon som gis til utøveren om utførelsen av en handling eller prestasjon. Feedback kan komme fra treneren (ytre feedback) eller fra utøverens egne sanser og opplevelser (indre feedback). Effektiv feedback er spesifikk, rettidig og konstruktiv, og hjelper utøveren å forstå hva som fungerer og hva som kan forbedres.',
    },
    {
      id: 'tr3-7-2-text-kommunikasjon',
      type: 'text',
      title: 'Kommunikasjonsformer i trenerrollen',
      content: `**Verbal kommunikasjon:**
- Instruksjoner og forklaringer under trening
- Tilbakemeldinger på utførelse og prestasjon
- Samtaler om mål, progresjon og trivsel
- Taler og peptalk før og etter kamp

**Nonverbal kommunikasjon:**
- Kroppsspråk: holdning, gester, ansiktsuttrykk
- Blikk-kontakt: viser oppmerksomhet og interesse
- Toneleie: kan forsterke eller undergrave det verbale budskapet
- Avstand og plassering: nærhet signaliserer tilgjengelighet

**Visuell kommunikasjon:**
- Demonstrasjon av teknikk og øvelser
- Bruk av video til analyse og tilbakemelding
- Taktiske tavler og illustrasjoner
- Treningsprogrammer og planverk

Forskning viser at nonverbal kommunikasjon utgjør en stor del av det totale budskapet. En trener som sier «bra jobbet» med et fraværende blikk og slapp kroppsholdning, sender et blandet signal. Kongruens mellom verbal og nonverbal kommunikasjon er avgjørende for troverdighet.`,
    },
    {
      id: 'tr3-7-2-text-feedbacktyper',
      type: 'text',
      title: 'Typer feedback',
      content: `**Positiv feedback (forsterkning):**
- Anerkjenner og forsterker ønsket atferd
- Bygger selvtillit og motivasjon
- Eksempel: «Veldig bra tidspunkt på den pasningen, du leste spillet riktig!»

**Korrigerende feedback (konstruktiv tilbakemelding):**
- Peker på hva som bør endres, og gir retning for forbedring
- Bør være spesifikk og løsningsorientert, ikke generelt kritisk
- Eksempel: «Du har bøyd ryggen i benkpress — prøv å trekke skuldrene sammen og press korsryggen ned i benken.»

**Deskriptiv feedback (beskrivende):**
- Beskriver hva som skjedde uten å vurdere det som bra eller dårlig
- Stimulerer utøverens egen refleksjon
- Eksempel: «Du landet med tyngden på hælene i det hoppet.»

**Preskriptiv feedback (foreskrivende):**
- Gir konkret anvisning om hva utøveren skal gjøre annerledes
- Nyttig for nybegynnere som trenger tydelig veiledning
- Eksempel: «Bøy knærne mer i landingen neste gang.»

**Sandwich-metoden:**
- Starter med noe positivt, etterfulgt av korrigering, og avsluttes med noe positivt
- Gjør korrigeringen lettere å ta imot
- Kritikk: Kan virke uærlig dersom den brukes mekanisk og forutsigbart

**Timing av feedback:**
- Umiddelbar feedback: Gis rett etter utførelsen. Effektiv for motorisk læring.
- Forsinket feedback: Gis etter en periode. Kan stimulere utøverens egne vurderinger.
- Hyppig feedback: Kan gi rask læring, men risikerer at utøveren blir avhengig av ytre tilbakemelding.
- Sjelden feedback: Fremmer selvstendighet, men kan føre til at feil befestes.`,
    },
    {
      id: 'tr3-7-2-def-sdt',
      type: 'definition',
      title: 'Selvbestemmelsesteorien (SDT)',
      content: 'Selvbestemmelsesteorien, utviklet av Deci og Ryan, hevder at mennesker har tre grunnleggende psykologiske behov som må tilfredsstilles for å oppleve indre motivasjon: autonomi (opplevelse av selvbestemmelse), kompetanse (opplevelse av mestring) og tilhørighet (opplevelse av sosial tilknytning). Når disse behovene er dekket, trives mennesker og er motiverte innenfra.',
    },
    {
      id: 'tr3-7-2-text-motivasjon',
      type: 'text',
      title: 'Motivasjon og selvbestemmelsesteorien',
      content: `Motivasjon er drivkraften bak utøverens innsats og utholdenhet. Vi skiller mellom indre og ytre motivasjon:

**Indre motivasjon:**
- Utøveren driver med aktiviteten fordi den oppleves som givende i seg selv
- Glede, interesse, nysgjerrighet og mestringsfølelse
- Den mest holdbare formen for motivasjon
- Eksempel: En løper som trener fordi hun elsker følelsen av å løpe

**Ytre motivasjon:**
- Utøveren drives av belønninger eller konsekvenser utenfor selve aktiviteten
- Medaljer, premier, ros, sosial status, eller frykt for straff
- Kan variere fra kontrollert (press utenfra) til internalisert (utøveren ser verdien selv)
- Eksempel: En fotballspiller som trener hardt fordi han vil bli sett av scoutere

**Amotivasjon:**
- Utøveren opplever ingen motivasjon og ser ikke meningen med aktiviteten
- Kan skyldes gjentatte nederlag, mangel på mestring eller manglende tilhørighet

**Trenerens rolle i å fremme indre motivasjon:**

Ifølge selvbestemmelsesteorien kan treneren fremme indre motivasjon ved å støtte de tre grunnleggende behovene:

*Autonomistøtte:*
- Gi utøverne valgmuligheter der det er mulig
- Forklare hvorfor øvelser og treningsmetoder brukes
- Invitere til medbestemmelse i treningsplanlegging
- Respektere utøverens perspektiv og meninger

*Kompetansestøtte:*
- Tilpasse oppgavene til utøverens nivå (ikke for lett, ikke for vanskelig)
- Gi konstruktiv og spesifikk tilbakemelding
- Anerkjenne fremgang og innsats, ikke bare resultater
- Sette oppnåelige delmål

*Tilhørighetsstøtte:*
- Skape et inkluderende og trygt treningsmiljø
- Fremme samarbeid og lagfølelse
- Vise omsorg og interesse for utøveren som person
- Bygge positive relasjoner mellom utøverne`,
    },
    {
      id: 'tr3-7-2-text-instruksjon',
      type: 'text',
      title: 'Instruksjon og formidling',
      content: `Effektiv instruksjon er en kunst som krever fagkunnskap, formidlingsevne og forståelse for utøverens forutsetninger.

**Prinsipper for god instruksjon:**
- **Klarhet:** Bruk enkle og presise formuleringer. Unngå for mange instruksjoner samtidig.
- **Relevans:** Tilpass budskapet til utøverens nivå og situasjon.
- **Demonstrasjon:** Vis øvelsen i tillegg til å forklare den. Mange lærer bedre visuelt.
- **Fokuspunkter:** Gi ett eller to fokuspunkter om gangen, ikke en lang liste.
- **Sjekk forståelse:** Spør utøverne om de forstår, eller la dem gjengi instruksjonen med egne ord.

**Spørsmålsbasert instruksjon:**
En alternativ tilnærming er å stille spørsmål i stedet for å gi svar direkte:
- «Hva tror du skjer hvis du bøyer knærne litt mer?»
- «Hva la du merke til i det siste forsøket?»
- «Hva kan du gjøre annerledes for å få mer fart?»

Denne metoden stimulerer utøverens refleksjon og egenlæring, og er et sentralt verktøy i autonomistøttende trenerskap. Utøvere som selv oppdager løsninger, husker dem ofte bedre og blir mer selvstendige.`,
    },
    {
      id: 'tr3-7-2-example-feedback',
      type: 'example',
      title: 'Feedback i praksis',
      content: `**Situasjon:** En ung turner lander ustøtt etter et salto-hopp.

**Lite effektiv feedback:** «Det var dårlig. Du må gjøre det bedre.» (Generell, negativ, gir ingen retning.)

**Effektiv korrigerende feedback:** «Du hadde god fart i tilløpet, men du åpnet kroppen litt for tidlig i rotasjonen. Prøv å holde tuck-posisjonen litt lenger neste gang, og åpne opp nærmere gulvet.» (Spesifikk, løsningsorientert, anerkjenner det som var bra.)

**Spørsmålsbasert tilnærming:** «Hva følte du var annerledes med den landingen sammenlignet med den forrige? Hva tror du skjedde i rotasjonen?» (Stimulerer refleksjon og egenlæring.)

Den mest effektive tilnærmingen avhenger av situasjonen, utøverens nivå og hva som trengs akkurat da. Nybegynnere har ofte behov for tydeligere instruksjoner, mens erfarne utøvere kan ha mer nytte av spørsmålsbasert veiledning.`,
    },
    {
      id: 'tr3-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-2-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de tre grunnleggende psykologiske behovene ifølge selvbestemmelsesteorien?',
        options: [
          { id: 'a', text: 'Autonomi, kompetanse og tilhørighet', isCorrect: true },
          { id: 'b', text: 'Styrke, utholdenhet og smidighet', isCorrect: false },
          { id: 'c', text: 'Belønning, straff og ros', isCorrect: false },
          { id: 'd', text: 'Fysisk, psykisk og sosial helse', isCorrect: false },
        ],
        solution: 'Ifølge selvbestemmelsesteorien (Deci og Ryan) er de tre grunnleggende psykologiske behovene autonomi (selvbestemmelse), kompetanse (mestring) og tilhørighet (sosial tilknytning). Når disse er tilfredsstilt, opplever mennesker indre motivasjon.',
      },
    },
    {
      id: 'tr3-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-2-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner korrigerende feedback?',
        options: [
          { id: 'a', text: 'Den peker på hva som bør endres og gir retning for forbedring', isCorrect: true },
          { id: 'b', text: 'Den beskriver hva som skjedde uten å vurdere det som bra eller dårlig', isCorrect: false },
          { id: 'c', text: 'Den fokuserer utelukkende på det positive', isCorrect: false },
          { id: 'd', text: 'Den gis bare etter konkurranser', isCorrect: false },
        ],
        solution: 'Korrigerende feedback peker på hva som bør endres og gir konkret retning for forbedring. Den bør være spesifikk og løsningsorientert, ikke generelt kritisk. Et godt eksempel er å beskrive hva utøveren bør gjøre annerledes, heller enn bare å si at noe var feil.',
      },
    },
    {
      id: 'tr3-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-2-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom indre og ytre motivasjon. Gi eksempler fra idretten og diskuter hvilken form for motivasjon som er mest holdbar på lang sikt.',
        solution: 'Indre motivasjon kommer fra selve aktiviteten — utøveren trener fordi det oppleves som morsomt, utfordrende eller meningsfylt. Eksempel: En svømmer som elsker følelsen av å gli gjennom vannet og stadig mestre nye teknikker. Ytre motivasjon drives av faktorer utenfor aktiviteten, som belønninger, premier, ros eller frykt for straff. Eksempel: En tennisspiller som trener hardt primært for å vinne pokaler og oppnå rangering. Indre motivasjon er mest holdbar på lang sikt fordi den ikke er avhengig av ytre belønninger som kan forsvinne. Utøvere med sterk indre motivasjon fortsetter å trene selv gjennom perioder uten premier eller anerkjennelse. Ytre motivasjon kan gi kortvarig energi, men dersom den er den eneste drivkraften, risikerer utøveren å miste motivasjonen når belønningene uteblir. De beste resultatene oppnås ofte gjennom en kombinasjon, der den indre gleden utgjør grunnlaget.',
      },
    },
    {
      id: 'tr3-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-2-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv minst fire ulike typer feedback en trener kan gi. Forklar når de ulike typene er mest hensiktsmessige, og gi et konkret eksempel på hver.',
        solution: 'Positiv feedback forsterker ønsket atferd og bygger selvtillit. Mest hensiktsmessig når utøveren gjør noe bra. Eksempel: «Perfekt timing på det skuddet — du ventet akkurat lenge nok.» Korrigerende feedback peker på hva som bør endres. Hensiktsmessig når utøveren gjør en feil som bør rettes opp. Eksempel: «Du snur skulderen for tidlig i kastet, prøv å holde fronten lenger mot målet.» Deskriptiv feedback beskriver hva som skjedde uten å vurdere. Hensiktsmessig for å stimulere utøverens egen refleksjon. Eksempel: «Du tok sats med høyre fot i det siste forsøket.» Preskriptiv feedback gir konkret anvisning om hva utøveren skal gjøre. Hensiktsmessig for nybegynnere som trenger tydelig veiledning. Eksempel: «Strekk armene helt ut over hodet i avslutningen av kastet.» God trenerskap innebærer å variere mellom disse typene avhengig av situasjonen og utøverens behov.',
      },
    },
    {
      id: 'tr3-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-2-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk selvbestemmelsesteorien til å analysere et treningsmiljø du kjenner til (eget lag, klubb eller lignende). Vurder i hvilken grad de tre grunnleggende behovene (autonomi, kompetanse og tilhørighet) er ivaretatt, og kom med konkrete forslag til forbedringer.',
        solution: 'En god analyse bør ta for seg hvert av de tre behovene systematisk. Autonomi: I hvilken grad har utøverne medbestemmelse? Får de velge mellom øvelser, sette egne delmål, eller er all trening bestemt av treneren? Forbedring kan være å la utøverne velge mellom to eller tre ulike øvelsesstasjoner, eller involvere dem i planlegging av deler av treningen. Kompetanse: Er treningen tilpasset ulike nivåer? Får utøverne utfordringer som er overkommelige men krevende nok? Gis det konstruktiv og spesifikk feedback? Forbedring kan være å differensiere øvelser etter nivå, gi mer individuell tilbakemelding og sette synlige delmål som utøverne kan strekke seg mot. Tilhørighet: Føler alle seg inkludert? Er det et trygt miljø der man tør å feile? Er det godt samhold? Forbedring kan være å innføre mer samarbeidsøvelser, sosiale aktiviteter utenfor treningen, og bevisst inkludere alle utøvere i kommunikasjonen. Analysen bør konkludere med at de tre behovene henger sammen — et miljø som ivaretar alle tre, vil skape sterkere indre motivasjon og bedre utvikling.',
      },
    },
    {
      id: 'tr3-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-2-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper med hyppig versus sjelden feedback. Hvordan bør en trener tilpasse feedback-frekvensen til utøverens erfaring og situasjonen? Knytt svaret til teori om motorisk læring.',
        solution: 'Hyppig feedback gir utøveren rask informasjon om utførelsen, noe som kan akselerere den tidlige fasen av motorisk læring. Nybegynnere som får umiddelbar og hyppig feedback, kan korrigere feil raskt og utvikle et bedre bevegelsesmønster. Ulempen er at utøveren kan bli avhengig av ytre feedback og ikke utvikle evnen til å vurdere egen utførelse. Dette kalles «guidance-hypotesen» — feedback fungerer som en krykke som forhindrer selvstendighet. Sjelden feedback tvinger utøveren til å bruke egne sanser og vurderinger for å evaluere utførelsen. Dette styrker indre feedback-mekanismer og bygger selvstendige utøvere. Ulempen er at feil kan befestes dersom utøveren ikke har tilstrekkelig erfaring til å oppdage dem selv. For nybegynnere bør treneren gi hyppigere og mer detaljert feedback for å etablere et riktig bevegelsesgrunnlag. Etter hvert som utøveren utvikler seg, bør treneren gradvis redusere feedback-frekvensen og heller stille spørsmål som stimulerer egenvurdering. For erfarne utøvere er mindre, men mer presis feedback ofte mest effektivt. Treneren bør også variere mellom umiddelbar og forsinket feedback for å stimulere ulike læringsmekanismer.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.3: Treneretikk
// ============================================================================

export const CHAPTER_TRENING_3_7_3: TextbookChapter = {
  id: 'trening-3-7-3',
  courseId: 'trening-3',
  chapterNumber: '7.3',
  title: 'Treneretikk',
  description: 'Maktrelasjon, grenser, vold og trakassering, og etisk bevissthet i treneryrket.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte maktrelasjonen mellom trener og utøver og konsekvensene av maktmisbruk',
    'gjøre rede for trenerens ansvar for å forebygge trakassering og overgrep',
    'reflektere over etiske dilemmaer i treneryrket',
  ],
  content: [
    {
      id: 'tr3-7-3-intro',
      type: 'text',
      content: `Trenerrollen innebærer betydelig makt og innflytelse over andre mennesker. Denne makten medfører et stort etisk ansvar. Treneretikk handler om å forstå maktrelasjonen mellom trener og utøver, sette tydelige grenser, forebygge krenkende atferd og utvikle en bevisst holdning til etiske spørsmål i idretten. Dessverre viser undersøkelser at trakassering, overgrep og psykisk vold forekommer i idrettssammenheng. Derfor er etisk bevissthet ikke bare ønskelig — det er helt nødvendig for alle som jobber med mennesker i idrett.`,
    },
    {
      id: 'tr3-7-3-def-maktrelasjon',
      type: 'definition',
      title: 'Maktrelasjon',
      content: 'En maktrelasjon oppstår når en person har mer innflytelse, kontroll eller autoritet enn en annen. I trener-utøver-forholdet har treneren makt i kraft av sin rolle, kompetanse, posisjon og ofte alder. Utøveren er i en sårbar posisjon fordi treneren kontrollerer spilletid, uttak, treningsinnhold og har innflytelse over utøverens idrettskarriere og selvbilde.',
    },
    {
      id: 'tr3-7-3-text-makt',
      type: 'text',
      title: 'Maktrelasjonen mellom trener og utøver',
      content: `Maktforholdet mellom trener og utøver er asymmetrisk — treneren har mer makt enn utøveren. Denne ubalansen er en naturlig del av relasjonen, men den medfører et særlig ansvar for treneren.

**Kilder til trenerens makt:**
- **Posisjonsmakt:** Treneren er utnevnt til rollen og har formell autoritet
- **Ekspertmakt:** Treneren har fagkunnskap utøveren er avhengig av
- **Belønningsmakt:** Treneren kontrollerer spilletid, uttak og muligheter
- **Referansemakt:** Utøveren ser opp til treneren og ønsker anerkjennelse
- **Tvangsmakt:** Treneren kan straffe gjennom ekskludering, benking eller kritikk

**Risiko ved maktrelasjonen:**
- Utøvere, særlig unge, tør ofte ikke si fra om forhold de er uenige i
- Treneren kan, bevisst eller ubevisst, utnytte sin posisjon
- Utøvere kan finne seg i uakseptabel behandling fordi de frykter konsekvensene
- Maktmisbruk kan ta mange former: favorisering, utfrysing, ydmykelse, seksualisering

**Det viktigste prinsippet:** Ansvaret for at maktrelasjonen ikke misbrukes, ligger alltid hos den som har makten — treneren. Det er aldri utøverens ansvar å sette grenser overfor en trener som misbruker sin posisjon.`,
    },
    {
      id: 'tr3-7-3-text-grenser',
      type: 'text',
      title: 'Grensesetting og profesjonalitet',
      content: `Trenere må ha et bevisst forhold til grenser i relasjonen til utøvere. Gode grenser beskytter både utøveren og treneren.

**Fysiske grenser:**
- Berøring skal alltid ha et faglig formål (korrigering av teknikk, førstehjelp)
- Utøveren skal alltid kunne si nei til fysisk kontakt
- Unngå situasjoner der trener og utøver er alene i lukkede rom uten innsyn
- Vær spesielt bevisst ved taping, massasje og lignende

**Emosjonelle grenser:**
- Treneren bør ikke dele for mye av eget privatliv med utøvere
- Unngå å bli utøverens fortrolige i private problemer — henvis til kompetent hjelp
- Vær bevisst på at utøvere kan utvikle sterke følelsesmessige bånd til treneren

**Digitale grenser:**
- Vær forsiktig med privat kommunikasjon på sosiale medier
- Unngå private meldinger med mindreårige utøvere utenfor nødvendig trenerkommunikasjon
- All kommunikasjon bør tåle offentlighetens lys

**Relasjonsgrenser:**
- Trener-utøver-relasjonen er profesjonell, ikke et vennskaps- eller kjærlighetsforhold
- Seksuell eller romantisk relasjon mellom trener og utøver er alltid uakseptabelt når utøveren er mindreårig, og sterkt problematisk også mellom voksne på grunn av maktforholdet
- Favorisering av enkeltutøvere undergraver tilliten i hele gruppen`,
    },
    {
      id: 'tr3-7-3-def-trakassering',
      type: 'definition',
      title: 'Trakassering i idrett',
      content: 'Trakassering er handlinger, unnlatelser eller ytringer som har til hensikt eller virkning å være krenkende, skremmende, fiendtlige, nedverdigende eller ydmykende. I idrettssammenheng kan trakassering være fysisk (vold, uønsket berøring), psykisk (ydmykelse, utfrysing, mobbing), seksuell (uønsket seksuell oppmerksomhet, overgrep) eller verbal (nedlatende kommentarer, kjefting, latterliggjøring).',
    },
    {
      id: 'tr3-7-3-text-trakassering',
      type: 'text',
      title: 'Vold, trakassering og overgrep i idretten',
      content: `Idretten er dessverre ikke fri for vold, trakassering og overgrep. Forskning og medieoppslag har avdekket at dette forekommer i alle idretter, på alle nivåer og i alle aldersgrupper.

**Former for krenkende atferd i idretten:**

*Psykisk vold:*
- Systematisk kjefting, ydmykelse eller latterliggjøring
- Utfrysing og ignorering
- Urimelig press og trusler (f.eks. om å miste plassen)
- Manipulasjon og kontrollerende atferd
- Forskning viser at psykisk vold er den vanligste formen for krenkende atferd i idretten

*Fysisk vold:*
- Slag, spark, dytting
- Tvungen trening som straff
- Påtvunget fysisk aktivitet utover det forsvarlige
- Kan forekomme både fra trenere og mellom utøvere

*Seksuell trakassering og overgrep:*
- Uønsket seksuell oppmerksomhet, kommentarer eller berøring
- Seksuelle overgrep — alvorlig kriminalitet som skal anmeldes
- Utøvere i maktrelasjoner er spesielt sårbare
- Forskning viser at overgrep i idretten ofte begår av personer utøveren har tillit til

**Varselsignaler trenere bør kjenne til:**
- Utøvere som plutselig endrer atferd eller trekker seg tilbake
- Utøvere som viser overdreven lydighet og frykt
- Utøvere som viser tegn på angst, depresjon eller spiseforstyrrelser
- Utøvere som unngår bestemte personer eller situasjoner

**Trenerens ansvar:**
- Nulltoleranse for alle former for trakassering og overgrep
- Aktivt forebyggende arbeid gjennom åpenhet og trygge rammer
- Meldeplikt ved mistanke om overgrep mot mindreårige
- Kjennskap til klubbens og idrettsforbundets varslingsrutiner`,
    },
    {
      id: 'tr3-7-3-text-etikk',
      type: 'text',
      title: 'Etisk bevissthet og etiske dilemmaer',
      content: `Etisk bevissthet handler om evnen til å gjenkjenne, reflektere over og handle riktig i situasjoner der verdier og interesser kan komme i konflikt. I treneryrket møter man jevnlig etiske dilemmaer.

**Eksempler på etiske dilemmaer:**

*Rettferdighet vs. resultat:*
Skal treneren satse på de beste spillerne for å vinne, eller gi alle like mye spilletid for rettferdighetens skyld? I barne- og ungdomsidretten er inkludering et grunnleggende prinsipp, men det kan kollidere med ønsket om å vinne.

*Helse vs. prestasjon:*
En utøver har en mindre skade, men vil spille den viktige kampen. Skal treneren la utøveren spille og risikere forverring, eller holde utøveren ute og prioritere langsiktig helse?

*Lojalitet vs. sannhet:*
Treneren oppdager at en kollega i klubben behandler utøvere dårlig. Skal treneren si fra, selv om det kan skade kollegaen og skape konflikt?

*Press vs. utvikling:*
Foreldre presser på for at barnet skal trene mer og prestere bedre. Treneren mener barnet trenger mer frilek og mindre press. Hvordan håndtere foreldrekonflikten?

**Etiske retningslinjer:**
- Norges idrettsforbund (NIF) har etiske retningslinjer som alle trenere bør kjenne
- Mange særforbund har egne etiske retningslinjer
- FNs barnekonvensjon og barneidrettsbestemmelsene gir rammer for arbeid med barn
- Retningslinjer mot seksuell trakassering og overgrep er obligatoriske for alle idrettsorganisasjoner`,
    },
    {
      id: 'tr3-7-3-note-varsling',
      type: 'note',
      title: 'Varsling i idretten',
      content: 'Alle idrettsorganisasjoner tilknyttet NIF er pålagt å ha varslingsrutiner. Utøvere, trenere, foreldre og andre kan varsle om kritikkverdige forhold. Det er også mulig å varsle anonymt gjennom idrettens varslingskanal. Dersom man har mistanke om seksuelle overgrep mot mindreårige, har man plikt til å melde fra til politiet og/eller barnevernet. Man trenger ikke bevise noe — det er tilstrekkelig med en begrunnet bekymring.',
    },
    {
      id: 'tr3-7-3-example-dilemma',
      type: 'example',
      title: 'Etisk dilemma: Helse versus prestasjon',
      content: `**Situasjon:** Maren (17 år) er toppscorer på juniorlaget i volleyball. Laget har kvalifiseringskamp til NM neste uke. Maren har hatt smerter i skulderen de siste to ukene, men ønsker desperat å spille. Fysioterapeuten anbefaler hvile i tre uker. Maren og foreldrene mener hun kan spille med smertestillende.

**Etisk vurdering:** Treneren står overfor et dilemma mellom kortsiktig suksess (NM-kvalifisering) og langsiktig helse (risiko for alvorlig skade). Trenerens ansvar er å prioritere utøverens helse, selv om det betyr å tape en viktig kamp. Å la en 17-åring spille med smerter og smertestillende i en alvorlig skulderbelastende idrett er etisk problematisk. Treneren bør følge fysioterapeutens anbefaling, forklare begrunnelsen tydelig for Maren og foreldrene, og hjelpe Maren å se det lange bildet. Dette kan være vanskelig i øyeblikket, men det er et eksempel på ansvarlig trenerskap.`,
    },
    {
      id: 'tr3-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-3-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem har ansvaret for at maktrelasjonen mellom trener og utøver ikke misbrukes?',
        options: [
          { id: 'a', text: 'Treneren, fordi det er den med makt som har ansvaret', isCorrect: true },
          { id: 'b', text: 'Utøveren, fordi det er utøverens ansvar å si fra', isCorrect: false },
          { id: 'c', text: 'Foreldrene, fordi de skal passe på barna sine', isCorrect: false },
          { id: 'd', text: 'Klubben, fordi de har det administrative ansvaret', isCorrect: false },
        ],
        solution: 'Ansvaret for at maktrelasjonen ikke misbrukes, ligger alltid hos den som har makten — det vil si treneren. Selv om klubben og foreldre også har et ansvar for å følge med, er det treneren som er i maktposisjon og dermed har det primære ansvaret for å handle etisk og profesjonelt.',
      },
    },
    {
      id: 'tr3-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-3-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken form for krenkende atferd viser forskning er mest vanlig i idretten?',
        options: [
          { id: 'a', text: 'Psykisk vold (kjefting, ydmykelse, utfrysing)', isCorrect: true },
          { id: 'b', text: 'Fysisk vold (slag og spark)', isCorrect: false },
          { id: 'c', text: 'Seksuell trakassering', isCorrect: false },
          { id: 'd', text: 'Økonomisk utnyttelse', isCorrect: false },
        ],
        solution: 'Forskning viser at psykisk vold er den vanligste formen for krenkende atferd i idretten. Dette inkluderer systematisk kjefting, ydmykelse, latterliggjøring, utfrysing og urimelig press. Selv om fysisk vold og seksuell trakassering også forekommer og er svært alvorlig, er psykisk vold langt mer utbredt.',
      },
    },
    {
      id: 'tr3-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-3-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for maktrelasjonen mellom trener og utøver. Beskriv minst fire ulike kilder til trenerens makt, og forklar hvorfor denne maktbalansen krever etisk bevissthet.',
        solution: 'Maktrelasjonen mellom trener og utøver er asymmetrisk, der treneren har vesentlig mer makt. Kildene til denne makten inkluderer: 1) Posisjonsmakt — treneren er formelt utnevnt og har autoritet i kraft av rollen. 2) Ekspertmakt — treneren besitter fagkunnskap utøveren er avhengig av for sin utvikling. 3) Belønningsmakt — treneren kontrollerer spilletid, uttak til lag og muligheter for utvikling. 4) Referansemakt — utøveren ser opp til treneren og ønsker anerkjennelse og bekreftelse. Denne maktbalansen krever etisk bevissthet fordi utøvere, særlig unge, ofte ikke tør å si fra om forhold de er uenige i eller opplever som krenkende. De frykter konsekvensene, som å miste plassen eller bli utfrosset. Treneren kan dermed, bevisst eller ubevisst, utnytte sin posisjon uten at noen korrigerer atferden. Uten etisk bevissthet risikerer man at makt brukes til å kontrollere, manipulere eller krenke.',
      },
    },
    {
      id: 'tr3-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-3-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv ulike former for grensesetting (fysiske, emosjonelle, digitale og relasjonsgrenser) en trener bør ha. Gi konkrete eksempler på hva som er akseptabelt og hva som ikke er det.',
        solution: 'Fysiske grenser: Berøring skal ha faglig formål, som korrigering av teknikk. Akseptabelt: Trener plasserer hånden på utøverens skulder for å vise riktig stilling. Uakseptabelt: Trener berører utøver uten faglig grunn eller fortsetter etter at utøveren sier nei. Emosjonelle grenser: Treneren bør holde en profesjonell avstand. Akseptabelt: Trener spør hvordan det går med skole og trivsel. Uakseptabelt: Trener deler intime detaljer fra eget privatliv eller gjør utøveren til sin fortrolige. Digitale grenser: Kommunikasjon bør tåle offentlighetens lys. Akseptabelt: Trener sender treningsinformasjon i gruppekanal. Uakseptabelt: Trener sender private meldinger til mindreårig utøver om ikke-trenerrelaterte temaer. Relasjonsgrenser: Relasjonen er profesjonell. Akseptabelt: Trener og utøver har et varmt og tillitsfullt samarbeid innenfor trenerrollen. Uakseptabelt: Romantisk eller seksuell relasjon, favorisering av enkeltutøvere på bekostning av gruppen.',
      },
    },
    {
      id: 'tr3-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-3-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft det etiske dilemmaet mellom rettferdighet og resultat i ungdomsidretten. Bør alle utøvere få like mye spilletid, eller er det akseptabelt å prioritere de beste for å vinne? Bruk etiske argumenter og vis til relevant regelverk for barne- og ungdomsidrett.',
        solution: 'Dette er et sentralt etisk dilemma i ungdomsidretten. Argumenter for lik spilletid: NIFs barneidrettsbestemmelser slår fast at barn (til og med 12 år) skal ha like mye spilletid uavhengig av ferdighetsnivå. Prinsippet bygger på at alle barn har rett til å delta, ha det gøy og utvikle seg. Å sitte på benken gir ingen utvikling. Aktivitetsglede er viktigere enn resultater for den langsiktige rekrutteringen til idretten. Barn som får lite spilletid, risikerer å miste motivasjon og slutte. Argumenter for differensiert spilletid (eldre ungdom): Etter hvert som utøverne nærmer seg seniornivå, er en viss differensiering naturlig. Utøvere som legger ned mer innsats, forventer at dette anerkjennes. I konkurranseidretten er det nødvendig å prioritere for å oppnå resultater. Men selv her bør alle få muligheter til å spille og utvikle seg. Vurdering: I praksis bør trenere i ungdomsidretten (13-19 år) finne en balanse. Norges idrettsforbund anbefaler at alle skal få meningsfull spilletid, men anerkjenner at differensiering øker med alderen. Etisk sett bør treneren alltid vurdere: Hva tjener utøverens langsiktige utvikling? En 14-åring som benkes hele sesongen, mister utviklingsmuligheter. En fornuftig tilnærming er å differensiere spilletid i viktige kamper, men sørge for at alle får spille jevnlig.',
      },
    },
    {
      id: 'tr3-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-3-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er trener for et ungdomslag og oppdager at en av dine trenerkollegaer systematisk ydmyker og kjefter på utøvere under trening. Noen utøvere har begynt å mistrives og vurderer å slutte. Drøft hva du bør gjøre, hvilke etiske prinsipper som er relevante, og hvilke varslingsmuligheter som finnes.',
        solution: 'Denne situasjonen involverer psykisk vold mot unge utøvere, noe som er en alvorlig krenkelse. Steg 1: Dokumentere. Noter ned konkrete hendelser med dato, tidspunkt og hva som ble sagt. Snakk med utøverne som berøres for å forstå omfanget. Steg 2: Vurdere alvorlighetsgrad. Systematisk ydmykelse og kjefting utgjør psykisk vold, som er den vanligste formen for krenkende atferd i idretten. Når utøvere mistrives og vurderer å slutte, er situasjonen alvorlig. Steg 3: Varsle. Man bør først ta opp bekymringen med kollegaen direkte, dersom man vurderer det som trygt og hensiktsmessig. Dersom det ikke fører frem, bør saken varsles til klubbens styre eller sportslige leder. Alle idrettsorganisasjoner tilknyttet NIF er pålagt å ha varslingsrutiner. Man kan også varsle gjennom idrettens varslingskanal. Etiske prinsipper: Barnets beste skal alltid prioriteres. Trenerens maktposisjon medfører ansvar for å ikke misbruke denne makten. Lojalitet til utøverne veier tyngre enn lojalitet til en kollega. Å ikke si fra gjør en medskyldig i at krenkelsene fortsetter. Selv om det kan oppleves vanskelig å varsle om en kollega, er utøvernes trygghet og trivsel det viktigste hensynet.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.4: Trenerutdanning i Norge
// ============================================================================

export const CHAPTER_TRENING_3_7_4: TextbookChapter = {
  id: 'trening-3-7-4',
  courseId: 'trening-3',
  chapterNumber: '7.4',
  title: 'Trenerutdanning i Norge',
  description: 'NIF, særforbundene og utdanningstrappen for trenere i norsk idrett.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for strukturen i norsk trenerutdanning og utdanningstrappens nivåer',
    'beskrive NIFs og særforbundenes roller i trenerutvikling',
    'vurdere betydningen av formell og uformell trenerkompetanse',
  ],
  content: [
    {
      id: 'tr3-7-4-intro',
      type: 'text',
      content: `Trenerutdanning er en viktig del av norsk idretts infrastruktur. Norges idrettsforbund (NIF) og de ulike særforbundene har bygget opp et strukturert utdanningssystem som skal sikre at trenere på alle nivåer har nødvendig kompetanse. Fra frivillige foreldretrenere i breddeidretten til profesjonelle trenere i toppidretten — utdanningstilbudet er tilpasset ulike behov og ambisjonsnivåer. I dette kapittelet ser vi på hvordan trenerutdanningen i Norge er organisert, og hvilke muligheter som finnes for deg som vil utvikle deg som trener.`,
    },
    {
      id: 'tr3-7-4-def-nif',
      type: 'definition',
      title: 'Norges idrettsforbund (NIF)',
      content: 'Norges idrettsforbund og olympiske og paralympiske komite (NIF) er Norges største frivillige organisasjon og paraplyorganisasjonen for all organisert idrett i landet. NIF har ansvar for felles rammeverk, verdier og retningslinjer for idretten, inkludert overordnede rammer for trenerutdanning. Under NIF finnes 55 særforbund som organiserer de ulike idrettsgrenene.',
    },
    {
      id: 'tr3-7-4-text-struktur',
      type: 'text',
      title: 'Organisering av norsk idrett',
      content: `For å forstå trenerutdanningen, er det nyttig å kjenne strukturen i norsk idrett:

**Norges idrettsforbund (NIF):**
- Paraplyorganisasjon for all organisert idrett
- Ansvar for overordnet idrettspolitikk, verdier og retningslinjer
- Utvikler felles rammeverk for trenerutdanning
- Samordner og kvalitetssikrer utdanningstilbudet

**Særforbund (55 stykker):**
- Organiserer hver sin idrettsgren (f.eks. Norges Fotballforbund, Norges Friidrettsforbund)
- Utvikler idrettsspesifikke trenerutdanninger innenfor NIFs rammeverk
- Har det operative ansvaret for trenerutdanning i sin idrett
- Eksempler: NFF (fotball), NSF (svømming), NHF (håndball), NFIF (friidrett)

**Idrettskretser (11 stykker):**
- Regionale ledd av NIF
- Tilbyr kurs og utdanning lokalt
- Støtter klubber med trenerutvikling

**Idrettslag/klubber:**
- Lokale enheter der treningen skjer
- Har ansvar for å rekruttere og utvikle trenere
- Bør tilrettelegge for at trenere tar utdanning`,
    },
    {
      id: 'tr3-7-4-def-utdanningstrappen',
      type: 'definition',
      title: 'Utdanningstrappen',
      content: 'Utdanningstrappen er NIFs modell for strukturert trenerutdanning i norsk idrett. Den beskriver ulike nivåer av trenerkompetanse fra nybegynner til toppnivå. Trappen gir en felles struktur på tvers av idretter, samtidig som hvert særforbund tilpasser innholdet til sin idrettsgrens behov.',
    },
    {
      id: 'tr3-7-4-text-trappen',
      type: 'text',
      title: 'Utdanningstrappen — nivåer',
      content: `NIFs utdanningstrapp for trenere har flere nivåer som bygger på hverandre:

**Trener 1 (aktivitetsleder/hjelpetrener):**
- Målgruppe: Nye trenere, foreldretrenere, ungdomstrenere
- Omfang: Korte kurs (typisk 8–20 timer)
- Innhold: Grunnleggende treningslære, aktivitetsledelse, barneidrettsbestemmelser, sikkerhet
- Fokus: Å kunne lede trygg og morsom aktivitet for barn og unge
- Mange tusen trenere utdannes på dette nivået hvert år

**Trener 2 (trener):**
- Målgruppe: Trenere som ønsker å utvikle seg videre
- Omfang: Mer omfattende kurs (typisk 40–80 timer)
- Innhold: Utvidet treningslære, idrettsspesifikk teknikk og taktikk, planlegging, kommunikasjon
- Fokus: Å kunne planlegge og gjennomføre systematisk trening
- Ofte krav for å trene lag på visse nivåer

**Trener 3 (topptrener/elitetrener):**
- Målgruppe: Ambisiøse trenere på høyt nivå
- Omfang: Omfattende utdanning (typisk 100+ timer, ofte over flere år)
- Innhold: Avansert treningslære, prestasjonsutvikling, lederskap, idrettspsykologi
- Fokus: Å kunne lede toppidrettsmiljøer og utvikle talenter til toppnivå
- Kombinerer teori med praksis og veiledning

**Trener 4 (UEFA Pro-lisens, o.l.):**
- Finnes i noen idretter (særlig fotball)
- Høyeste trenernivå med internasjonal godkjenning
- Krav for å trene lag på øverste nivå

**Høyere utdanning:**
- Idrettsvitenskap på universitet/høgskole (bachelor og master)
- Kan kombineres med særforbundenes trenerutdanning
- Gir bredere akademisk forståelse av treningslære, fysiologi, psykologi og pedagogikk`,
    },
    {
      id: 'tr3-7-4-text-innhold',
      type: 'text',
      title: 'Innhold i trenerutdanningen',
      content: `Trenerutdanningen dekker et bredt spekter av kompetanseområder:

**Treningslære og fysiologi:**
- Treningsprinsipper og treningsplanlegging
- Kroppens tilpasning til trening
- Energisystemer og ernæring
- Skadeforebygging og restitusjon

**Pedagogikk og formidling:**
- Instruksjonsmetoder og tilbakemeldingsteknikk
- Tilpasning til ulike aldersgrupper og nivåer
- Læringsteori og motorisk utvikling
- Veiledning og mentorskap

**Psykologi og kommunikasjon:**
- Motivasjon og selvbestemmelsesteorien
- Kommunikasjon og relasjonsbygging
- Prestasjonsforberedelse og mental trening
- Stressmestring og konflikthåndtering

**Etikk og verdier:**
- Barneidrettsbestemmelsene og idrettens verdigrunnlag
- Forebygging av trakassering og overgrep
- Fair play og antidoping
- Inkludering og mangfold

**Ledelse og organisasjon:**
- Lederstiler og teambygging
- Samarbeid med foreldre, klubb og støtteapparat
- Sportslig planlegging og periodisering
- Talent- og utøverutvikling`,
    },
    {
      id: 'tr3-7-4-text-uformell',
      type: 'text',
      title: 'Formell og uformell kompetanse',
      content: `Selv om formell utdanning er viktig, utvikles mye trenerkompetanse utenfor det formelle utdanningssystemet.

**Formell kompetanse:**
- Kurs og utdanning gjennom særforbund og NIF
- Høgskoleutdanning i idrettsvitenskap
- Sertifiseringer og lisenser
- Gir systematisk kunnskap og anerkjent dokumentasjon

**Uformell kompetanse:**
- Erfaring som utøver — mange gode trenere har selv vært aktive utøvere
- Praktisk trenererfaring over tid
- Faglig oppdatering gjennom bøker, artikler og konferanser
- Mentorskap fra erfarne trenere
- Observasjon av andre trenere
- Egenlæring og refleksjon over egen praksis

**Refleksiv praksis:**
En sentral del av trenerutviklingen er evnen til å reflektere over egen praksis. Dette innebærer å systematisk vurdere hva som fungerer og ikke fungerer, søke feedback fra utøvere og kollegaer, og stadig justere tilnærmingen. De beste trenerne er de som aldri slutter å lære.

**Veilederordninger:**
Flere særforbund har innført veilederordninger der erfarne trenere veileder mindre erfarne. Dette er en effektiv måte å overføre praktisk kunnskap og refleksjon på, og kombinerer elementer av formell og uformell læring.`,
    },
    {
      id: 'tr3-7-4-example-utdanning',
      type: 'example',
      title: 'Trenerutdanning i fotball',
      content: `Norges Fotballforbund (NFF) har en av de mest utviklede trenerutdanningene i norsk idrett:

**Grasrotkurs:** For foreldretrenere og nye trenere. Dekker barneidrettsbestemmelser, aktivitetsledelse og grunnleggende fotballferdigheter. Helgekurs.

**UEFA C-lisens:** Tilsvarer Trener 2. Omfatter treningsplanlegging, teknikk, taktikk og kampmøteledelse. Flere samlinger over en sesong.

**UEFA B-lisens:** Tilsvarer Trener 3. Avansert trenerskap med fokus på spillerutvikling, kampanalyse og lederskap. Omfattende utdanning med praksis og veiledning.

**UEFA A-lisens:** Høyt nivå. Krav for å trene lag i OBOS-ligaen (1. divisjon). Fokus på toppfotball, strategisk ledelse og prestasjonsutvikling.

**UEFA Pro-lisens:** Høyeste nivå. Krav for å trene lag i Eliteserien. Kombinerer avansert taktikk, ledelse og idrettsvitenskap. Internasjonal godkjenning.

Denne stegvise strukturen sikrer at trenere på hvert nivå har den kompetansen som kreves for sin rolle.`,
    },
    {
      id: 'tr3-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-4-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er utdanningstrappen i norsk idrett?',
        options: [
          { id: 'a', text: 'NIFs modell for strukturert trenerutdanning med ulike nivåer fra nybegynner til toppnivå', isCorrect: true },
          { id: 'b', text: 'En fysisk trapp som brukes til kondisjonstesting av trenere', isCorrect: false },
          { id: 'c', text: 'Et system for rangering av idrettsprestasjoner', isCorrect: false },
          { id: 'd', text: 'Et krav om at alle trenere må ha universitetsutdanning', isCorrect: false },
        ],
        solution: 'Utdanningstrappen er NIFs modell for strukturert trenerutdanning i norsk idrett. Den beskriver ulike nivåer av trenerkompetanse (Trener 1 til Trener 4) som bygger på hverandre, og gir en felles ramme som hvert særforbund tilpasser til sin idrett.',
      },
    },
    {
      id: 'tr3-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-4-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er særforbundenes rolle i trenerutdanningen?',
        options: [
          { id: 'a', text: 'De utvikler og gjennomfører idrettsspesifikke trenerutdanninger innenfor NIFs rammeverk', isCorrect: true },
          { id: 'b', text: 'De har ingen rolle i trenerutdanning — det er NIFs ansvar alene', isCorrect: false },
          { id: 'c', text: 'De bestemmer uavhengig alt innhold uten koordinering med NIF', isCorrect: false },
          { id: 'd', text: 'De utdanner bare dommere, ikke trenere', isCorrect: false },
        ],
        solution: 'Særforbundene (som Norges Fotballforbund, Norges Håndballforbund osv.) utvikler og gjennomfører idrettsspesifikke trenerutdanninger. De gjør dette innenfor NIFs overordnede rammeverk, men tilpasser innholdet til sin idretts spesifikke behov og utfordringer.',
      },
    },
    {
      id: 'tr3-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-4-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de ulike nivåene i utdanningstrappen (Trener 1-3). For hvert nivå: Hvem er målgruppen, hva er omfanget, og hva er hovedfokuset?',
        solution: 'Trener 1 (aktivitetsleder/hjelpetrener): Målgruppe er nye trenere, foreldretrenere og ungdomstrenere. Omfanget er korte kurs på typisk 8-20 timer. Hovedfokus er å kunne lede trygg og morsom aktivitet for barn og unge, med innhold i grunnleggende treningslære, aktivitetsledelse og barneidrettsbestemmelser. Trener 2 (trener): Målgruppe er trenere som ønsker å utvikle seg videre. Omfanget er mer omfattende kurs på typisk 40-80 timer. Hovedfokus er å kunne planlegge og gjennomføre systematisk trening, med utvidet treningslære, idrettsspesifikk teknikk og taktikk. Trener 3 (topptrener/elitetrener): Målgruppe er ambisiøse trenere på høyt nivå. Omfanget er omfattende utdanning på over 100 timer, ofte over flere år. Hovedfokus er å kunne lede toppidrettsmiljøer og utvikle talenter til toppnivå, med avansert treningslære, prestasjonsutvikling og idrettspsykologi.',
      },
    },
    {
      id: 'tr3-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-4-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for forskjellen mellom formell og uformell trenerkompetanse. Diskuter hvordan begge former for kompetanse bidrar til å utvikle gode trenere.',
        solution: 'Formell kompetanse erverves gjennom strukturerte utdanningsprogrammer som kurs gjennom særforbund og NIF, høgskoleutdanning i idrettsvitenskap og sertifiseringer. Den gir systematisk kunnskap, oppdatert teori og anerkjent dokumentasjon. Formell utdanning sikrer et felles kompetansenivå og kvalitetsstandard. Uformell kompetanse utvikles gjennom erfaring og praksis: egen utøvererfaring, praktisk trenererfaring over tid, faglig oppdatering gjennom selvstudium, observasjon av andre trenere og mentorskap. Uformell kompetanse gir praktisk visdom, kontekstuell forståelse og evne til improvisasjon. Begge former er nødvendige for å bli en god trener. Formell utdanning gir det faglige grunnlaget og sikrer at treneren kjenner oppdatert forskning og metoder. Uformell kompetanse gir den praktiske erfaringen og den mellommenneskelige forståelsen som ikke fullt ut kan læres i et klasserom. De beste trenerne kombinerer begge: de har solid faglig kunnskap og lang erfaring med refleksjon over egen praksis.',
      },
    },
    {
      id: 'tr3-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-4-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vurder styrker og svakheter ved det norske trenerutdanningssystemet. Hva fungerer godt, og hva kunne vært forbedret? Trekk inn perspektiver fra bredde- og toppidretten.',
        solution: 'Styrker: Utdanningstrappen gir en systematisk og trinnvis modell som gjør det tydelig hva som kreves på hvert nivå. Breddetilbudet på Trener 1-nivå gjør det mulig for mange frivillige foreldretrenere å tilegne seg grunnleggende kompetanse raskt. Særforbundene tilpasser innholdet til sin idretts behov, noe som gir relevant og idrettsspesifikk utdanning. Kombinasjonen av teori og praksis på høyere nivåer sikrer at trenere utvikler både kunnskap og ferdigheter. Svakheter: Det er stor variasjon i kvalitet og omfang mellom særforbundene — noen har svært utviklede utdanningsprogrammer, mens andre har mer begrensede tilbud. Mange trenere, særlig i breddeidretten, tar aldri formell utdanning og baserer seg utelukkende på egen erfaring. Kursene kan være kostbare og tidkrevende, noe som kan være en barriere for frivillige trenere. Det mangler systematiske veilederordninger i mange idretter. Breddetrenerens behov for pedagogisk kompetanse og relasjonskompetanse kunne vært bedre ivaretatt. For toppidretten kan utdanningssystemet oppleves som rigid, og noen etterspør mer individuell tilpasning og internasjonalt samarbeid. Forbedringsforslag: Bedre tilgjengelighet gjennom nettbaserte kurs, tydeligere koblinger mellom akademisk utdanning og særforbundenes kurs, og styrking av veilederordninger på alle nivåer.',
      },
    },
    {
      id: 'tr3-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-4-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en plan for din egen trenerutvikling de neste fem årene. Beskriv hvilke formelle utdanninger du vil ta, hvordan du vil utvikle uformell kompetanse, og begrunn valgene dine. Tenk deg at du allerede er aktiv trener i en idrett du kjenner.',
        solution: 'En god plan bør inneholde konkrete mål, tidsrammer og begrunnelser. Eksempel for en fotballtrener: År 1-2: Ta UEFA C-lisens gjennom NFF for å bygge et solid grunnlag i treningsplanlegging, teknikk og taktikk. Parallelt: hospitere hos en erfaren trener på høyere nivå for å observere og lære. Lese faglitteratur om treningslære og idrettspsykologi. Begynne å skrive treningslogg for å utvikle refleksiv praksis. År 2-3: Ta UEFA B-lisens for å utvide kompetansen innen spillerutvikling og kampanalyse. Delta på trenerseminarer og konferanser for å bygge nettverk og holde seg oppdatert. Søke veiledning fra en mentor i trenerutdanningssystemet. Prøve ut nye metoder i egen trenervirksomhet og evaluere resultatene. År 4-5: Vurdere UEFA A-lisens dersom ambisjonsnivået tilsier det. Ta emner i idrettsvitenskap på høgskole for å styrke den akademiske forståelsen. Begynne å veilede yngre trenere for å gi tilbake og lære gjennom undervisning. Begrunnelse: Planen kombinerer formell og uformell kompetanse, bygger gradvis og inkluderer refleksjon og mentorskap. Ved å strekke utviklingen over fem år unngår man å ta snarveier og sikrer at kompetansen modnes gjennom praksis.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.5: Trener-utøver-relasjonen
// ============================================================================

export const CHAPTER_TRENING_3_7_5: TextbookChapter = {
  id: 'trening-3-7-5',
  courseId: 'trening-3',
  chapterNumber: '7.5',
  title: 'Trener-utøver-relasjonen',
  description: 'Tillit, samarbeid og konflikthåndtering i relasjonen mellom trener og utøver.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hva som kjennetegner en god trener-utøver-relasjon',
    'gjøre rede for betydningen av tillit og samarbeid i trenerforholdet',
    'beskrive strategier for konflikthåndtering mellom trener og utøver',
  ],
  content: [
    {
      id: 'tr3-7-5-intro',
      type: 'text',
      content: `Forholdet mellom trener og utøver er selve kjernen i treningsarbeidet. Kvaliteten på denne relasjonen er en av de viktigste faktorene for utøverens utvikling, trivsel og prestasjoner. Forskning viser at en god trener-utøver-relasjon kjennetegnes av gjensidig tillit, respekt, åpen kommunikasjon og felles forpliktelse til utøverens mål. Samtidig er det uunngåelig at det oppstår uenigheter og konflikter. Hvordan disse håndteres, avgjør om relasjonen styrkes eller svekkes. I dette kapittelet utforsker vi hva som bygger gode relasjoner og hvordan konflikter kan løses konstruktivt.`,
    },
    {
      id: 'tr3-7-5-def-tillit',
      type: 'definition',
      title: 'Tillit',
      content: 'Tillit er troen på at en annen person vil handle til ens beste og ikke misbruke sin posisjon. I trener-utøver-relasjonen innebærer tillit at utøveren stoler på trenerens fagkompetanse, intensjoner og omtanke, og at treneren stoler på utøverens engasjement og ærlighet. Tillit bygges over tid gjennom konsekvent, forutsigbar og omsorgsfull atferd.',
    },
    {
      id: 'tr3-7-5-text-tillit',
      type: 'text',
      title: 'Tillit som fundament',
      content: `Tillit er grunnsteinen i enhver god trener-utøver-relasjon. Uten tillit vil utøveren ikke tørre å være sårbar, utfordre seg selv eller følge trenerens råd fullt ut.

**Hva bygger tillit:**
- **Kompetanse:** Utøveren opplever at treneren vet hva han eller hun snakker om. Treningen gir resultater.
- **Konsistens:** Treneren er forutsigbar og pålitelig. Løfter holdes. Rammene er tydelige.
- **Omsorg:** Utøveren opplever at treneren genuint bryr seg om ham eller henne som person, ikke bare som utøver.
- **Ærlighet:** Treneren er ærlig, også når tilbakemeldingene er vanskelige. Utøveren vet at de får sannheten.
- **Rettferdighet:** Treneren behandler alle utøvere rettferdig og favoriserer ikke enkeltpersoner.
- **Konfidensialitet:** Personlige samtaler mellom trener og utøver holdes konfidensielle.

**Hva bryter ned tillit:**
- Løftebrudd og inkonsekvens
- Favorisering og urettferdighet
- Sladder eller deling av fortrolig informasjon
- Manglende interesse for utøveren som person
- Ydmykelse eller offentlig kritikk
- Unnlatelse av å følge opp det man har avtalt

**Tillitens betydning for prestasjon:**
Forskning viser at utøvere med høy tillit til treneren presterer bedre, er mer åpne for tilbakemeldinger, tåler mer belastning og har bedre psykisk helse. Tillit gjør at utøveren tør å gå utenfor komfortsonen, noe som er nødvendig for utvikling og topprestasjon.`,
    },
    {
      id: 'tr3-7-5-text-samarbeid',
      type: 'text',
      title: 'Samarbeid og partnerskap',
      content: `En moderne tilnærming til trener-utøver-relasjonen vektlegger samarbeid og partnerskap fremfor enveis ledelse. Dette betyr ikke at treneren og utøveren er likestilte i alle beslutninger, men at relasjonen preges av gjensidig respekt og dialog.

**Kjennetegn på godt samarbeid:**
- Felles målsetting: Trener og utøver setter mål sammen
- Åpen kommunikasjon: Begge parter kan uttrykke meninger, bekymringer og ønsker
- Delt ansvar: Utøveren tar medansvar for egen utvikling
- Gjensidig respekt: Begge parter verdsetter hverandres bidrag
- Fleksibilitet: Evne til å tilpasse planer etter behov og situasjon

**3+1Cs-modellen (Jowett):**
Sophia Jowetts forskning har identifisert fire sentrale dimensjoner i trener-utøver-relasjonen:

*Closeness (nærhet):*
Emosjonell tilknytning mellom trener og utøver. Gjensidig tillit, respekt og verdsetting. Utøveren føler seg sett og verdsatt.

*Commitment (forpliktelse):*
Begge parters vilje til å investere tid, energi og innsats i relasjonen og i utøverens utvikling. Langsiktig perspektiv.

*Complementarity (komplementaritet):*
Samspillet mellom trener og utøver i treningssituasjoner. Trenerens instruksjoner matcher utøverens respons. God «kjemi» i samarbeidet.

*Co-orientation (samstemthet):*
I hvilken grad trener og utøver har sammenfallende oppfatninger av relasjonen, målene og situasjonen. Når begge opplever relasjonen likt, fungerer samarbeidet godt.

Når alle fire dimensjoner er til stede, har forskningen vist at utøvere opplever høyere trivsel, sterkere motivasjon og bedre prestasjoner.`,
    },
    {
      id: 'tr3-7-5-text-konflikt',
      type: 'text',
      title: 'Konflikter i trener-utøver-relasjonen',
      content: `Konflikter er en naturlig del av enhver nær relasjon, inkludert forholdet mellom trener og utøver. Det avgjørende er ikke å unngå konflikter, men å håndtere dem konstruktivt.

**Vanlige konflikttemaer:**
- Uenighet om treningsinnhold, mengde eller metoder
- Utøveren føler seg forbigått eller urettferdig behandlet
- Ulike forventninger til roller og ansvar
- Kommunikasjonssvikt og misforståelser
- Uenighet om mål og ambisjoner
- Påvirkning fra tredjeparter (foreldre, agenter, andre trenere)

**Konfliktstiler (Thomas-Kilmann):**

*Konkurrerende:* En part vinner, den andre taper. Kan være nødvendig i akutte situasjoner, men skader relasjonen på sikt.

*Samarbeidende:* Begge parter søker en løsning som ivaretar begges behov. Tidkrevende, men styrker relasjonen.

*Kompromiss:* Begge gir litt. Rask løsning, men ingen er helt fornøyd.

*Unnvikende:* Konflikten unngås. Kan fungere for ubetydelige uenigheter, men undertrykking av viktige konflikter skaper problemer over tid.

*Tilpassende:* En part gir etter for den andres ønsker. Kan være greit i noen situasjoner, men risikerer frustrasjon og oppdemmet misnøye.`,
    },
    {
      id: 'tr3-7-5-text-konflikthåndtering',
      type: 'text',
      title: 'Strategier for konflikthåndtering',
      content: `**Forebygging:**
- Tydelige forventningsavklaringer tidlig i relasjonen
- Regelmessige samtaler om trivsel, mål og utvikling
- Åpen dør-policy: utøveren vet at det er lov å ta opp vanskelige temaer
- Felles regelsett og spilleregler for samarbeidet

**Når konflikten har oppstått:**
1. **Anerkjenn konflikten:** Ikke la den ulme. Ta tak i den tidlig.
2. **Lytt aktivt:** La begge parter fortelle sin versjon uten avbrudd. Vis at du forstår den andres perspektiv.
3. **Fokuser på saken, ikke personen:** «Jeg opplever at treningsplanen ikke tar hensyn til eksamen min» er bedre enn «Du bryr deg ikke om meg».
4. **Søk felles løsninger:** Hva kan vi gjøre for å løse dette? Hva trenger begge parter?
5. **Avtal oppfølging:** Sjekk etter en tid om løsningen fungerer.

**Vanskelige samtaler:**
- Velg riktig tidspunkt og sted (aldri foran hele laget)
- Vær direkte men respektfull
- Bruk «jeg»-utsagn: «Jeg opplever...» fremfor «Du gjør alltid...»
- Bekreft det som er bra i relasjonen, før du tar opp det vanskelige

**Når konflikten ikke kan løses:**
Noen ganger er det beste for begge parter at trener-utøver-forholdet avsluttes. Det kan skyldes uforenlige forventninger, vedvarende tillitsbrudd eller endrede omstendigheter. En ryddig avslutning er bedre enn et destruktivt samarbeid.`,
    },
    {
      id: 'tr3-7-5-text-utvikling',
      type: 'text',
      title: 'Relasjonens utvikling over tid',
      content: `Trener-utøver-relasjonen er ikke statisk — den utvikler seg og endrer karakter over tid.

**Oppstartsfasen:**
- Partene blir kjent med hverandre
- Forventninger avklares
- Tillit begynner å bygges gjennom de første erfaringene
- Utøveren vurderer om treneren er kompetent og troverdig

**Utviklingsfasen:**
- Relasjonen fordypes og tilliten styrkes
- Samarbeidet finner sin form
- Partene kjenner hverandres styrker og svakheter
- Produktiv arbeidsperiode med god kommunikasjon

**Modningsfasen:**
- Relasjonen er solid og tåler utfordringer
- Utøveren har internalisert mye av trenerens kunnskap
- Mer likeverdig dialog og partnerskap
- Kan oppstå behov for fornyelse og nye impulser

**Avslutningsfasen:**
- Kan skyldes karriereslutt, bytte av trener, eller at utøveren vokser ut av relasjonen
- En naturlig del av idrettslivet
- Viktig med en ryddig og respektfull avslutning
- De beste trener-utøver-relasjonene varer som vennskap lenge etter at samarbeidet er over

Bevissthet om disse fasene hjelper treneren å tilpasse sin tilnærming etter hvor i utviklingen relasjonen befinner seg.`,
    },
    {
      id: 'tr3-7-5-example-konflikt',
      type: 'example',
      title: 'Konflikthåndtering i praksis',
      content: `**Situasjon:** Jonas (18 år) spiller på A-laget i ishockey. Han er uenig med treneren om at han har blitt flyttet fra første til tredje rekke etter en periode med dårlige prestasjoner. Jonas mener treneren er urettferdig og at andre spillere som presterer like dårlig, ikke har blitt degradert.

**Dårlig håndtering:** Treneren avfeier Jonas: «Jeg bestemmer. Slutt å klage og bevis at du fortjener en plass.» Jonas føler seg ydmyket og mister motivasjon. Han snakker negativt om treneren til lagkamerater, og stemningen i gruppen forverres.

**God håndtering:** Treneren inviterer Jonas til en en-til-en-samtale. Treneren lytter til Jonas sin frustrasjon uten å avbryte. Deretter forklarer treneren sine begrunnelser konkret: «Jeg har observert at du de siste tre kampene har hatt lavere intensitet i forsvarsspillet, og jeg trenger at tredje rekke bidrar mer defensivt. Jeg tror en periode der du fokuserer på det, kan hjelpe deg tilbake.» Treneren spør Jonas hva han tenker om dette, og de blir enige om konkrete mål Jonas kan jobbe mot for å komme tilbake på første rekke. De avtaler en ny samtale om to uker.

Denne tilnærmingen anerkjenner Jonas sin følelse, gir en tydelig og saklig begrunnelse, involverer utøveren i løsningen, og sikrer oppfølging.`,
    },
    {
      id: 'tr3-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-5-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de fire dimensjonene i Jowetts 3+1Cs-modell for trener-utøver-relasjonen?',
        options: [
          { id: 'a', text: 'Closeness, Commitment, Complementarity og Co-orientation', isCorrect: true },
          { id: 'b', text: 'Communication, Competence, Confidence og Control', isCorrect: false },
          { id: 'c', text: 'Cooperation, Creativity, Consistency og Courage', isCorrect: false },
          { id: 'd', text: 'Care, Challenge, Competition og Criticism', isCorrect: false },
        ],
        solution: 'Jowetts 3+1Cs-modell beskriver fire dimensjoner: Closeness (nærhet og emosjonell tilknytning), Commitment (gjensidig forpliktelse), Complementarity (komplementaritet i samspillet) og Co-orientation (samstemthet i oppfatninger). Forskning viser at trener-utøver-relasjoner med høy skåre på alle fire gir bedre trivsel, motivasjon og prestasjon.',
      },
    },
    {
      id: 'tr3-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-5-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken konfliktstil søker en løsning som ivaretar begge parters behov?',
        options: [
          { id: 'a', text: 'Samarbeidende', isCorrect: true },
          { id: 'b', text: 'Konkurrerende', isCorrect: false },
          { id: 'c', text: 'Unnvikende', isCorrect: false },
          { id: 'd', text: 'Tilpassende', isCorrect: false },
        ],
        solution: 'Samarbeidende konfliktstil innebærer at begge parter aktivt søker en løsning som ivaretar begges behov og interesser. Selv om denne tilnærmingen er mer tidkrevende, styrker den relasjonen fordi begge opplever å bli hørt og respektert.',
      },
    },
    {
      id: 'tr3-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-5-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for hva som bygger tillit i trener-utøver-relasjonen. Beskriv minst fem faktorer, og forklar hvorfor tillit er avgjørende for utøverens utvikling og prestasjon.',
        solution: 'Fem faktorer som bygger tillit: 1) Kompetanse — utøveren opplever at treneren har god fagkunnskap og at treningen gir resultater. 2) Konsistens — treneren er forutsigbar og pålitelig, holder løfter og har tydelige rammer. 3) Omsorg — utøveren opplever at treneren genuint bryr seg om vedkommende som person, ikke bare som utøver. 4) Ærlighet — treneren er ærlig og gir sannferdig tilbakemelding, også når det er vanskelig. 5) Rettferdighet — treneren behandler alle utøvere rettferdig uten favorisering. Tillit er avgjørende fordi den gjør at utøveren tør å gå utenfor komfortsonen, noe som er nødvendig for utvikling. Utøvere med høy tillit til treneren er mer åpne for krevende tilbakemeldinger, tåler mer belastning i treningsprosessen, og har bedre psykisk helse. Uten tillit holder utøveren igjen, stiller spørsmål ved trenerens valg og bruker energi på usikkerhet fremfor utvikling.',
      },
    },
    {
      id: 'tr3-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-5-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de fire fasene i trener-utøver-relasjonens utvikling (oppstart, utvikling, modning, avslutning). Hva kjennetegner hver fase, og hvordan bør treneren tilpasse sin tilnærming?',
        solution: 'Oppstartsfasen: Partene blir kjent, forventninger avklares og tillit begynner å bygges. Treneren bør investere tid i å lære utøveren å kjenne, tydeliggjøre sine forventninger og demonstrere kompetanse gjennom handling. Det er viktig å skape positive førsteinntrykk. Utviklingsfasen: Relasjonen fordypes, samarbeidet finner sin form og partene kjenner hverandres styrker og svakheter. Treneren bør utfordre utøveren mer, gi mer ansvar og involvere utøveren i planlegging. Det er en produktiv arbeidsperiode. Modningsfasen: Relasjonen er solid og tåler utfordringer. Utøveren har internalisert mye av trenerens kunnskap. Treneren bør gi utøveren mer autonomi, behandle forholdet som et partnerskap og være åpen for nye impulser. Kan oppstå behov for fornyelse. Avslutningsfasen: Samarbeidet nærmer seg slutten, enten på grunn av karriereslutt, trenerbytte eller at utøveren vokser ut av relasjonen. Treneren bør sørge for en ryddig og respektfull avslutning, anerkjenne det som er oppnådd og gjøre overgangen til neste fase så god som mulig.',
      },
    },
    {
      id: 'tr3-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-5-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk 3+1Cs-modellen (Jowett) til å analysere en trener-utøver-relasjon du har erfaring med eller kjenner til. Vurder de fire dimensjonene (closeness, commitment, complementarity, co-orientation) og foreslå tiltak for å styrke relasjonen.',
        solution: 'En god analyse bør systematisk vurdere hver dimensjon. Closeness (nærhet): Hvordan er den emosjonelle tilknytningen mellom trener og utøver? Opplever utøveren seg sett, verdsatt og respektert? Er det gjensidig tillit? Styrking: Treneren kan investere mer tid i individuelle samtaler, vise interesse for utøverens liv utover idretten, og gi anerkjennelse for innsats. Commitment (forpliktelse): Er begge parter villige til å investere tid og energi? Har de et langsiktig perspektiv? Styrking: Sette felles mål, ha jevnlige utviklingssamtaler, og synliggjøre trenerens forpliktelse gjennom handlinger. Complementarity (komplementaritet): Fungerer samspillet i treningssituasjoner? Matcher trenerens instruksjoner utøverens behov og respons? Styrking: Tilpasse kommunikasjonsstil til utøverens preferanser, prøve ut nye metoder og evaluere hva som fungerer. Co-orientation (samstemthet): Har trener og utøver sammenfallende oppfatninger av situasjonen, målene og relasjonen? Styrking: Regelmessige samtaler der begge deler sine oppfatninger, for å oppdage og korrigere misforståelser. Konklusjon bør vektlegge at de fire dimensjonene henger sammen og at arbeid med en dimensjon kan styrke de andre.',
      },
    },
    {
      id: 'tr3-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr3-7-5-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan ulike konfliktstiler (konkurrerende, samarbeidende, kompromiss, unnvikende, tilpassende) kan påvirke trener-utøver-relasjonen. Gi eksempler på situasjoner der de ulike stilene kan være hensiktsmessige og uhensiktsmessige, og forklar hvilken tilnærming du mener bør være hovedregelen i trenerarbeidet.',
        solution: 'Konkurrerende stil: En part vinner, den andre taper. Hensiktsmessig: Akutte sikkerhetssituasjoner der treneren må ta en rask avgjørelse (f.eks. å stoppe trening ved fare for skade). Uhensiktsmessig: Daglige uenigheter om trening, der utøveren opplever at treneren alltid «vinner». Over tid ødelegger dette motivasjon og tillit. Samarbeidende stil: Begge søker en løsning som ivaretar begges behov. Hensiktsmessig: De fleste konfliktsituasjoner i trener-utøver-relasjonen, særlig når det gjelder treningsmengde, mål og rolle. Uhensiktsmessig: Når det ikke er tid til grundig dialog (kamp pågår). Kompromiss: Begge gir litt. Hensiktsmessig: Når det ikke finnes en perfekt løsning og begge må akseptere noe de ikke er helt fornøyde med (f.eks. justere treningsmengden et sted mellom trenerens og utøverens ønske). Uhensiktsmessig: Når det gjelder prinsipielle spørsmål som sikkerhet eller etikk. Unnvikende stil: Konflikten unngås. Hensiktsmessig: For trivielle uenigheter som ikke er verdt å bruke tid på. Uhensiktsmessig: For viktige temaer — ubehandlede konflikter vokser og forgifter relasjonen over tid. Tilpassende stil: En part gir etter. Hensiktsmessig: Når den ene parten innser at den andre har et bedre poeng. Uhensiktsmessig: Når utøveren alltid gir etter for treneren av frykt — dette undertrykker viktig kommunikasjon. Hovedregel: Samarbeidende stil bør være hovedtilnærmingen fordi den bygger tillit, respekt og gjensidig forpliktelse. Den kommuniserer at begge parters perspektiver har verdi, og løsningene som kommer ut av samarbeid er ofte mer bærekraftige og bedre forankret hos begge parter.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TRENING_3_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_3_7_1,
  CHAPTER_TRENING_3_7_2,
  CHAPTER_TRENING_3_7_3,
  CHAPTER_TRENING_3_7_4,
  CHAPTER_TRENING_3_7_5,
];
