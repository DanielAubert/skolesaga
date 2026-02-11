/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 1 (VG2) - Del 8: Kommunikasjonsetikk
 *
 * Kapittel 8.1–8.5
 *
 * LK20-kompetansemål:
 * - drøfte etiske problemstillinger knyttet til kommunikasjon
 * - reflektere over personvern, ytringsfrihet og digitalt medborgerskap
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Etikk og kommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT_1_8_1: TextbookChapter = {
  id: 'komkult-1-8-1',
  courseId: 'komkult-1',
  chapterNumber: '8.1',
  title: 'Etikk og kommunikasjon',
  description: 'Grunnleggende etiske begreper og hvordan de knytter seg til kommunikasjon. Du lærer om ulike etiske perspektiver, hva kommunikasjonsetikk innebærer, og hvorfor sannferdighet er viktig i all kommunikasjon.',
  estimatedMinutes: 22,
  competenceGoals: [
    'drøfte etiske problemstillinger knyttet til kommunikasjon',
  ],
  keyTerms: [
    { term: 'Etikk', definition: 'Systematisk refleksjon over hva som er rett og galt, godt og ondt' },
    { term: 'Moral', definition: 'De normene og verdiene vi faktisk lever etter i praksis' },
    { term: 'Kommunikasjonsetikk', definition: 'Etiske prinsipper og normer som gjelder for kommunikasjon mellom mennesker' },
    { term: 'Sannferdighet', definition: 'Å formidle informasjon som er i samsvar med virkeligheten, uten bevisst å villede' },
    { term: 'Pliktetikk', definition: 'Etisk retning der handlingen i seg selv vurderes som rett eller gal, uavhengig av konsekvensene' },
    { term: 'Konsekvensetikk', definition: 'Etisk retning der en handling vurderes ut fra hvilke konsekvenser den får' },
  ],
  content: [
    {
      id: 'kk-8-1-intro',
      type: 'text',
      content: `## Etikk i kommunikasjon

Hver dag tar vi valg som påvirker andre mennesker gjennom det vi sier, skriver og deler. Hva bør vi formidle, og hva bør vi la være? Når er det greit å overdrive, og når blir det løgn? Etikk handler om å reflektere over slike spørsmål og finne gode svar.

I dette kapittelet skal du lære:
- Hva etikk og moral er, og forskjellen mellom dem
- Ulike etiske perspektiver: pliktetikk og konsekvensetikk
- Hva kommunikasjonsetikk innebærer
- Hvorfor sannferdighet er grunnleggende i kommunikasjon`,
    },
    {
      id: 'kk-8-1-def-1',
      type: 'definition',
      title: 'Etikk og moral',
      content: `**Etikk** er systematisk refleksjon over hva som er rett og galt, godt og ondt. Etikk er teorien og filosofien bak våre moralske valg. **Moral** er de normene, reglene og verdiene vi faktisk lever etter i praksis. Kort sagt: etikk er teori, moral er praksis.`,
    },
    {
      id: 'kk-8-1-text-1',
      type: 'text',
      content: `### Etiske perspektiver

Når vi vurderer om en handling er riktig eller gal, finnes det ulike måter å tenke på. To sentrale retninger er:

**Pliktetikk (deontologi):**
- Noen handlinger er riktige eller gale i seg selv, uavhengig av resultatet
- Å lyve er alltid galt, selv om det gir gode konsekvenser
- Immanuel Kant: «Handle slik at du kan ville at regelen du handler etter, skal bli en allmenn lov»
- Eksempel: En journalist bør alltid rapportere sannheten, selv om det fører til ubehagelig oppmerksomhet

**Konsekvensetikk (utilitarisme):**
- En handling er riktig dersom den fører til best mulige konsekvenser for flest mulig
- Resultatet teller mer enn selve handlingen
- Jeremy Bentham og John Stuart Mill: «Størst mulig lykke for størst mulig antall»
- Eksempel: Kan det forsvares å holde tilbake informasjon hvis det beskytter sårbare mennesker?`,
    },
    {
      id: 'kk-8-1-example-1',
      type: 'example',
      title: 'Etisk dilemma: Avisoppslaget',
      problem: 'En journalist oppdager at en lokalpolitiker har en alvorlig sykdom. Politikeren ber journalisten om ikke å skrive om det. Bør journalisten publisere saken?',
      solution: `**Pliktetisk perspektiv:**
Journalisten har plikt til å informere offentligheten om forhold som kan påvirke politikerens arbeid. Sannhet og åpenhet er grunnleggende verdier i journalistikken.

**Konsekvensetisk perspektiv:**
Man veier konsekvensene: Vil publisering tjene offentlighetens interesse? Eller vil den primært skade politikeren og familien uten vesentlig samfunnsnytte?

**Mulig konklusjon:**
Det finnes ikke ett fasitsvar. Svaret avhenger av omstendighetene: Påvirker sykdommen evnen til å utøve vervet? Er informasjonen relevant for velgerne? Mange etiske dilemmaer i kommunikasjon er nettopp slike avveininger.`,
    },
    {
      id: 'kk-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom etikk og moral?',
        options: [
          { id: 'a', text: 'Etikk gjelder samfunnet, moral gjelder enkeltpersoner', isCorrect: false },
          { id: 'b', text: 'Etikk er den teoretiske refleksjonen, moral er de normene vi lever etter i praksis', isCorrect: true },
          { id: 'c', text: 'Moral er viktigere enn etikk', isCorrect: false },
          { id: 'd', text: 'Etikk handler om lover, moral handler om følelser', isCorrect: false },
        ],
        solution: 'Etikk er den systematiske, filosofiske refleksjonen over hva som er rett og galt. Moral er de normene og verdiene vi faktisk lever etter i hverdagen. Etikk er altså teorien, mens moral er praksisen.',
      },
    },
    {
      id: 'kk-8-1-def-2',
      type: 'definition',
      title: 'Kommunikasjonsetikk',
      content: `**Kommunikasjonsetikk** handler om etiske prinsipper og normer som gjelder når vi kommuniserer med andre. Det inkluderer spørsmål om sannferdighet, respekt for andre, rett til informasjon, og ansvar for konsekvensene av det vi formidler. Kommunikasjonsetikk gjelder alle former for kommunikasjon: muntlig, skriftlig og digital.`,
    },
    {
      id: 'kk-8-1-text-2',
      type: 'text',
      content: `### Sannferdighet i kommunikasjon

Sannferdighet er et grunnleggende prinsipp i all kommunikasjon. Det handler om å formidle informasjon som stemmer overens med virkeligheten, uten bevisst å villede mottakeren.

**Ulike former for usannhet:**
- **Direkte løgn:** Å si noe man vet er usant
- **Utelatelse:** Å bevisst holde tilbake viktig informasjon
- **Overdrivelse:** Å fremstille noe som større eller viktigere enn det er
- **Villedning:** Å presentere informasjon på en måte som skaper et feilaktig inntrykk

**Hvorfor sannferdighet er viktig:**
- Tillit er grunnlaget for all kommunikasjon
- Demokratiet er avhengig av at borgerne kan stole på informasjonen de får
- Relasjoner bygger på ærlighet
- Usannheter kan få alvorlige konsekvenser for enkeltpersoner og samfunn

**Gråsoner:**
Sannferdighet er ikke alltid svart-hvitt. Reklame overdriver ofte, politikere velger ut fakta som støtter sitt syn, og i høflighetsfraser sier vi ting vi ikke mener. Spørsmålet er hvor grensen går mellom akseptabel kommunikasjon og uetisk villeding.`,
    },
    {
      id: 'kk-8-1-example-2',
      type: 'example',
      title: 'Eksempel: Sannferdighet i reklame',
      problem: 'Et kosmetikkfirma reklamerer med at kremen gjør deg «10 år yngre». Er dette etisk forsvarlig kommunikasjon?',
      solution: `**Analyse:**
Påstanden «10 år yngre» er en overdrivelse som de fleste forbrukere forstår ikke er bokstavelig ment. Likevel kan slik reklame:
- Skape urealistiske forventninger
- Bidra til kroppspress og usunne skjønnhetsidealer
- Villede sårbare forbrukere som tar påstanden bokstavelig

**Regulering:**
I Norge reguleres reklame av markedsføringsloven. Reklame skal ikke være villedende. Forbrukertilsynet kan gripe inn mot usanne eller overdrevne påstander.

**Etisk vurdering:**
Fra et pliktetisk perspektiv er overdrivelsen problematisk fordi den bryter med sannferdighet. Fra et konsekvensetisk perspektiv må man veie økonomisk frihet mot forbrukervern. De fleste vil si at reklame kan være kreativ, men bør ikke villede om produktets faktiske egenskaper.`,
    },
    {
      id: 'kk-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom pliktetikk og konsekvensetikk, og gi et eksempel fra kommunikasjon der de to perspektivene gir ulike svar.',
        hints: ['Tenk på en situasjon der det å si sannheten kan føre til negative konsekvenser'],
        solution: 'Pliktetikk vurderer handlingen i seg selv: noen handlinger er riktige eller gale uansett konsekvenser. Konsekvensetikk vurderer resultatet: en handling er riktig hvis konsekvensene er gode. Eksempel: En venn spør om du liker den nye frisyren. Pliktetikeren mener du bør si sannheten fordi ærlighet er en plikt. Konsekvensetikeren vurderer hva som gir best resultat - kanskje en hvit løgn sparer vennen for unødig sorg uten vesentlige negative konsekvenser.',
      },
    },
    {
      id: 'kk-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-8-1-ex-3',
        number: '8.1.3',
        type: 'multiple-choice',
        task: 'Hvilken form for usannhet innebærer å bevisst holde tilbake viktig informasjon?',
        options: [
          { id: 'a', text: 'Direkte løgn', isCorrect: false },
          { id: 'b', text: 'Overdrivelse', isCorrect: false },
          { id: 'c', text: 'Utelatelse', isCorrect: true },
          { id: 'd', text: 'Villedning', isCorrect: false },
        ],
        solution: 'Utelatelse betyr at man bevisst holder tilbake informasjon som er viktig for mottakeren. Man sier ikke noe usant, men gir et ufullstendig bilde. For eksempel: En bilselger som ikke nevner at bilen har vært i en ulykke, selv om kjøperen ikke spør direkte.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        task: 'Drøft følgende påstand: «Det er alltid galt å lyve.» Bruk eksempler fra ulike kommunikasjonssituasjoner i svaret ditt, og trekk inn minst to etiske perspektiver.',
        hints: ['Tenk på hverdagssituasjoner, profesjonelle sammenhenger og ekstreme tilfeller'],
        solution: 'Fra et pliktetisk perspektiv er løgn alltid galt fordi sannferdighet er en universell plikt. Kant mente at hvis alle løy, ville kommunikasjon bryte sammen. Fra et konsekvensetisk perspektiv kan det i noen tilfeller forsvares å lyve, for eksempel for å beskytte noen mot fare. I hverdagen bruker vi hvite løgner for å vise hensyn. I profesjonell kommunikasjon er sannferdighet spesielt viktig fordi det handler om tillit og ansvar. Konklusjonen kan være at sannferdighet er et viktig ideal, men at konteksten spiller inn for hvor absolutt regelen bør være.',
      },
    },
    {
      id: 'kk-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        task: 'Gi tre eksempler på etiske utfordringer i hverdagskommunikasjon (for eksempel på sosiale medier, i vennegjengen eller på skolen). Forklar hva som gjør situasjonene etisk vanskelige.',
        solution: '1) Dele et rykte om en medelev videre på Snapchat: Etisk vanskelig fordi det kan skade personen det gjelder, men det føles som å bare videresende informasjon. 2) Legge ut redigerte bilder av seg selv: Skaper et urealistisk bilde, men alle gjør det og det kan ses som kreativ selvpresentasjon. 3) Ikke si fra når noen mobbes i en gruppechat: Passivitet kan ses som aksept av mobbingen, men det krever mot å si ifra og man risikerer å bli upopulær. Felles for alle er spenningen mellom egne interesser og hensyn til andre.',
      },
    },
    {
      id: 'kk-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Etikk** er systematisk refleksjon over rett og galt, mens **moral** er normene vi lever etter
- **Pliktetikk** vurderer handlingen i seg selv, **konsekvensetikk** vurderer resultatet
- **Kommunikasjonsetikk** handler om ansvarlig og respektfull kommunikasjon
- **Sannferdighet** er et grunnleggende prinsipp som bygger tillit
- Etiske dilemmaer i kommunikasjon har sjelden enkle fasitsvar

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Etikk | Systematisk refleksjon over rett og galt |
| Moral | Normene vi faktisk lever etter |
| Pliktetikk | Handlingen i seg selv er rett eller gal |
| Konsekvensetikk | Resultatet avgjør om handlingen er rett |
| Sannferdighet | Å formidle i samsvar med virkeligheten |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Personvern og overvåking
// ============================================================================

export const CHAPTER_KOMKULT_1_8_2: TextbookChapter = {
  id: 'komkult-1-8-2',
  courseId: 'komkult-1',
  chapterNumber: '8.2',
  title: 'Personvern og overvåking',
  description: 'Personopplysningsloven, GDPR, retten til privatliv og utfordringer knyttet til datainnsamling i det digitale samfunnet. Du lærer hva personvern innebærer og hvorfor det er viktig for demokratiet.',
  estimatedMinutes: 24,
  competenceGoals: [
    'reflektere over personvern, ytringsfrihet og digitalt medborgerskap',
  ],
  keyTerms: [
    { term: 'Personvern', definition: 'Retten til å kontrollere informasjon om seg selv og beskytte sitt privatliv' },
    { term: 'Personopplysninger', definition: 'Opplysninger som kan knyttes til en identifiserbar enkeltperson' },
    { term: 'GDPR', definition: 'EUs personvernforordning som regulerer behandling av personopplysninger i hele EØS-området' },
    { term: 'Samtykke', definition: 'Frivillig, informert og utvetydig godkjenning av at ens personopplysninger behandles' },
    { term: 'Overvåking', definition: 'Systematisk innsamling av informasjon om personers aktiviteter og bevegelser' },
    { term: 'Datatilsynet', definition: 'Norsk tilsynsorgan som kontrollerer at personopplysninger behandles i samsvar med loven' },
  ],
  content: [
    {
      id: 'kk-8-2-intro',
      type: 'text',
      content: `## Ditt privatliv i en digital verden

Hver dag legger du igjen digitale spor. Når du søker på Google, handler med kort, bruker sosiale medier eller bare har telefonen i lommen, samles det inn data om deg. Hvem har tilgang til disse opplysningene? Hva brukes de til? Og hvilke rettigheter har du?

I dette kapittelet skal du lære:
- Hva personvern og personopplysninger er
- Hvordan GDPR og personopplysningsloven beskytter deg
- Utfordringer knyttet til overvåking og datainnsamling
- Hvorfor personvern er viktig for demokratiet`,
    },
    {
      id: 'kk-8-2-def-1',
      type: 'definition',
      title: 'Personvern',
      content: `**Personvern** er retten til å bestemme over opplysninger om seg selv og til å ha et privatliv. Personvernet er beskyttet av Grunnlovens § 102: «Enhver har rett til respekt for sitt privatliv og familieliv, sitt hjem og sin kommunikasjon.» **Personopplysninger** er alle opplysninger som kan knyttes til en identifiserbar enkeltperson, for eksempel navn, adresse, fødselsnummer, IP-adresse, bilder og helsedata.`,
    },
    {
      id: 'kk-8-2-text-1',
      type: 'text',
      content: `### GDPR og personopplysningsloven

**GDPR (General Data Protection Regulation):**
GDPR er EUs personvernforordning fra 2018, som gjelder i hele EØS-området, inkludert Norge. Den stiller strenge krav til hvordan bedrifter og organisasjoner behandler personopplysninger.

**Sentrale prinsipper i GDPR:**
- **Lovlighet:** Det må finnes et rettslig grunnlag for å behandle personopplysninger
- **Formålsbegrensning:** Data kan bare brukes til det formålet de ble samlet inn for
- **Dataminimering:** Man skal ikke samle inn mer data enn nødvendig
- **Lagringsbegrensning:** Data skal ikke oppbevares lenger enn nødvendig
- **Integritet og konfidensialitet:** Data skal beskyttes mot uautorisert tilgang

**Dine rettigheter under GDPR:**
- Rett til innsyn: Du kan be om å se hvilke opplysninger som er lagret om deg
- Rett til retting: Du kan kreve at feilaktige opplysninger rettes
- Rett til sletting: Du kan be om at opplysninger slettes («retten til å bli glemt»)
- Rett til dataportabilitet: Du kan få dine data overført til en annen tjenesteleverandør`,
    },
    {
      id: 'kk-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Datainnsamling i hverdagen',
      problem: 'Hvor mye data samler egentlig en vanlig smarttelefon inn om brukeren i løpet av en dag?',
      solution: `**Data som typisk samles inn:**
- **Posisjon:** GPS-data som viser hvor du er til enhver tid
- **Kommunikasjon:** Hvem du ringer, sender meldinger til og når
- **Nettsurfing:** Hvilke nettsider du besøker og hva du søker etter
- **Appbruk:** Hvilke apper du bruker og hvor lenge
- **Biometri:** Ansiktsgjenkjenning, fingeravtrykk
- **Helse:** Skritt, puls, søvnmønstre

**Hvem får tilgang:**
- Apputviklere (gjennom tillatelser du gir)
- Teleselskaper (kommunikasjonsdata)
- Google/Apple (gjennom operativsystemet)
- Annonsenettverk (brukeratferd for målrettet reklame)

**Omfang:**
Google har opplyst at de samler inn data fra over 40 ulike kilder bare fra Android-telefoner. Alt dette brukes til å bygge detaljerte profiler som kan selges til annonsører.`,
    },
    {
      id: 'kk-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'Hva betyr «retten til å bli glemt» i GDPR?',
        options: [
          { id: 'a', text: 'At politiet ikke kan etterforske deg digitalt', isCorrect: false },
          { id: 'b', text: 'At du kan kreve at en virksomhet sletter personopplysninger om deg', isCorrect: true },
          { id: 'c', text: 'At sosiale medier automatisk sletter gamle innlegg', isCorrect: false },
          { id: 'd', text: 'At internettleverandøren må anonymisere all trafikk', isCorrect: false },
        ],
        solution: '«Retten til å bli glemt» er en del av GDPR som gir deg rett til å be en virksomhet om å slette personopplysninger om deg. Dette gjelder for eksempel hvis opplysningene ikke lenger er nødvendige, eller hvis du trekker tilbake samtykket du ga. Det er noen unntak, blant annet for ytringsfrihet og arkivformål.',
      },
    },
    {
      id: 'kk-8-2-def-2',
      type: 'definition',
      title: 'Overvåking',
      content: `**Overvåking** er systematisk innsamling av informasjon om personers aktiviteter, kommunikasjon og bevegelser. Overvåking kan skje gjennom tekniske hjelpemidler som kameraer, GPS-sporing, avlytting og digital sporing. Man skiller ofte mellom **statlig overvåking** (av sikkerhetsgrunner) og **kommersiell overvåking** (for å tjene penger på målrettet reklame).`,
    },
    {
      id: 'kk-8-2-text-2',
      type: 'text',
      content: `### Overvåking og maktbalanse

**Statlig overvåking:**
- Politiet og etterretningstjenester kan overvåke for å forhindre kriminalitet og terrorisme
- I Norge kreves det vanligvis rettslig kjennelse for kommunikasjonsovervåking
- Debatten: Hvor mye overvåking kan vi akseptere for trygghetens skyld?
- Edward Snowden avslørte i 2013 massiv overvåking fra amerikanske myndigheter

**Kommersiell overvåking:**
- Teknologiselskaper samler inn enorme mengder data om brukerne sine
- Forretningsmodellen til Google, Facebook og mange apper er basert på å selge tilgang til brukerdata
- Informasjonskapsler (cookies) sporer deg på tvers av nettsteder
- Algoritmer bruker dataene til å vise deg skreddersydd innhold og reklame

**Hvorfor personvern er viktig for demokratiet:**
- Overvåking kan hemme ytringsfrihet: Mennesker sensurerer seg selv når de vet de blir overvåket
- Persondata kan brukes til å manipulere valg (Cambridge Analytica-skandalen)
- Maktkonsentrasjon: De som kontrollerer dataene, har makt over mennesker
- Personvern beskytter individets frihet til å tenke, utforske og ytre seg fritt`,
    },
    {
      id: 'kk-8-2-example-2',
      type: 'example',
      title: 'Eksempel: Cambridge Analytica-skandalen',
      problem: 'Hvordan ble persondata fra Facebook brukt til politisk påvirkning?',
      solution: `**Hva skjedde:**
I 2018 ble det avslørt at konsulentselskapet Cambridge Analytica hadde fått tilgang til persondata fra opptil 87 millioner Facebook-brukere uten deres vitende.

**Hvordan:**
En forsker laget en personlighetstest-app på Facebook. Appen samlet inn data ikke bare fra dem som tok testen, men også fra alle vennene deres. Dataene ble sendt videre til Cambridge Analytica.

**Hva de ble brukt til:**
Dataene ble brukt til å lage detaljerte psykologiske profiler av velgere. Disse profilene ble brukt til å sende målrettet politisk reklame under det amerikanske presidentvalget i 2016 og Brexit-avstemningen.

**Konsekvenser:**
Skandalen førte til skjerpet personvernlovgivning verden over, store bøter til Facebook, og økt bevissthet om hvordan persondata kan misbrukes.`,
    },
    {
      id: 'kk-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        task: 'Forklar hva GDPR er, og nevn tre rettigheter du har som privatperson under denne forordningen.',
        hints: ['Tenk på innsyn, retting og sletting'],
        solution: 'GDPR er EUs personvernforordning som gjelder i hele EØS-området, inkludert Norge. Den regulerer hvordan virksomheter kan samle inn og bruke personopplysninger. Tre rettigheter: 1) Rett til innsyn: Du kan kreve å se hvilke opplysninger en virksomhet har lagret om deg. 2) Rett til retting: Du kan kreve at feilaktige opplysninger korrigeres. 3) Rett til sletting: Du kan be om at personopplysningene dine slettes, den såkalte «retten til å bli glemt».',
      },
    },
    {
      id: 'kk-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-8-2-ex-3',
        number: '8.2.3',
        type: 'multiple-choice',
        task: 'Hva var kjernen i Cambridge Analytica-skandalen?',
        options: [
          { id: 'a', text: 'Facebook solgte brukerdata direkte til politiske partier', isCorrect: false },
          { id: 'b', text: 'Persondata ble samlet inn uten brukernes vitende og brukt til politisk målrettet reklame', isCorrect: true },
          { id: 'c', text: 'Cambridge-universitetet hacket Facebooks servere', isCorrect: false },
          { id: 'd', text: 'Brukerne ble tvunget til å stemme på bestemte kandidater', isCorrect: false },
        ],
        solution: 'Cambridge Analytica fikk tilgang til persondata fra millioner av Facebook-brukere via en tredjeparts-app, uten at brukerne visste at dataene ble videresendt. Dataene ble brukt til å lage psykologiske profiler og sende målrettet politisk reklame.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        task: 'Drøft påstanden: «For å bekjempe terror og kriminalitet bør staten ha lov til å overvåke all digital kommunikasjon.» Gi argumenter for og imot.',
        hints: ['Tenk på trygghet versus frihet, og hva som skjer med tilliten til staten'],
        solution: 'For: Overvåking kan forhindre terrorangrep og alvorlig kriminalitet. Det kan redde liv. Har du ingenting å skjule, har du ingenting å frykte. Imot: Masseovervåking krenker retten til privatliv, som er en grunnleggende menneskerettighet. Det kan hemme ytringsfrihet og demokratisk deltakelse. Historien viser at overvåkingsmakt kan misbrukes. Det rammer uskyldige og skaper et samfunn preget av mistillit. En balansert konklusjon er at staten kan ha overvåkingsverktøy, men de må brukes målrettet med rettslig kontroll, ikke som masseovervåking av hele befolkningen.',
      },
    },
    {
      id: 'kk-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Undersøk hvilke personopplysninger en app du bruker daglig samler inn om deg. Beskriv hva du finner, og vurder om datainnsamlingen er proporsjonal med tjenesten du får.',
        solution: 'Svaret avhenger av appen man undersøker. Et godt svar vil: Identifisere appen og beskrive dens funksjon. Liste opp konkrete datatyper som samles inn (kan finnes i appens personvernerklæring eller innstillinger). Vurdere om all datainnsamlingen er nødvendig for appens funksjon. For eksempel: Trenger en lommelykt-app tilgang til kontaktlisten? Reflektere over hva dataene kan brukes til utover appens hovedfunksjon. Konkludere med om man mener datainnsamlingen er rimelig eller overdreven.',
      },
    },
    {
      id: 'kk-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Personvern** er retten til å kontrollere opplysninger om deg selv
- **GDPR** gir deg rettigheter som innsyn, retting og sletting av persondata
- **Overvåking** kan være statlig (sikkerhet) eller kommersiell (reklame)
- **Personvern** er viktig for ytringsfrihet, demokrati og individets frihet
- Det finnes en spenning mellom sikkerhet og personvern som samfunnet stadig forhandler om

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Personvern | Retten til privatliv og kontroll over egne data |
| GDPR | EUs personvernforordning |
| Samtykke | Frivillig godkjenning av databehandling |
| Datatilsynet | Norsk tilsynsorgan for personvern |
| Overvåking | Systematisk innsamling av informasjon om personer |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Ytringsfrihet og dens grenser
// ============================================================================

export const CHAPTER_KOMKULT_1_8_3: TextbookChapter = {
  id: 'komkult-1-8-3',
  courseId: 'komkult-1',
  chapterNumber: '8.3',
  title: 'Ytringsfrihet og dens grenser',
  description: 'Grunnlovens § 100, ytringsfrihetens begrunnelse, hatytringer, injurier og redaktøransvaret. Du lærer hva ytringsfrihet betyr, hvorfor den er viktig, og hvor grensene går.',
  estimatedMinutes: 22,
  competenceGoals: [
    'reflektere over personvern, ytringsfrihet og digitalt medborgerskap',
    'drøfte etiske problemstillinger knyttet til kommunikasjon',
  ],
  keyTerms: [
    { term: 'Ytringsfrihet', definition: 'Retten til fritt å ytre sine meninger uten forhåndssensur, beskyttet av Grunnloven § 100' },
    { term: 'Hatytringer', definition: 'Ytringer som sprer hat eller truer personer basert på etnisitet, religion, seksuell orientering eller andre kjennetegn' },
    { term: 'Injurier', definition: 'Usanne, ærekrenkende påstander om en annen person' },
    { term: 'Redaktøransvaret', definition: 'Ansvaret en redaktør har for alt innhold som publiseres i mediet de leder' },
    { term: 'Forhåndssensur', definition: 'At en myndighet kontrollerer og eventuelt forbyr ytringer før de publiseres' },
    { term: 'Den europeiske menneskerettskonvensjonen (EMK)', definition: 'Internasjonal konvensjon som beskytter grunnleggende rettigheter, inkludert ytringsfriheten i artikkel 10' },
  ],
  content: [
    {
      id: 'kk-8-3-intro',
      type: 'text',
      content: `## Friheten til å si hva du mener

Ytringsfrihet regnes som en av de mest grunnleggende rettighetene i et demokrati. Men betyr ytringsfrihet at du kan si absolutt hva som helst? Hvor går grensen mellom å ytre sin mening og å krenke andre? Dette er spørsmål som diskuteres heftig i det norske samfunnet.

I dette kapittelet skal du lære:
- Hva ytringsfrihet betyr og hvordan den er beskyttet i Norge
- De tre begrunnelsene for ytringsfrihet
- Grensene for ytringsfrihet: hatytringer og injurier
- Redaktøransvaret og pressens rolle`,
    },
    {
      id: 'kk-8-3-def-1',
      type: 'definition',
      title: 'Ytringsfrihet',
      content: `**Ytringsfrihet** er retten til å ytre sine meninger fritt uten forhåndssensur. I Norge er ytringsfriheten beskyttet av Grunnlovens § 100: «Ytringsfrihed bør finde Sted.» Den er også beskyttet av Den europeiske menneskerettskonvensjonen (EMK) artikkel 10. Ytringsfriheten omfatter retten til å motta informasjon, retten til å formidle informasjon, og retten til å tie.`,
    },
    {
      id: 'kk-8-3-text-1',
      type: 'text',
      content: `### Tre begrunnelser for ytringsfrihet

Ytringsfrihetskommisjonen (1999) pekte på tre begrunnelser for hvorfor ytringsfrihet er så viktig:

**1. Sannhetsprinsippet:**
- Sannheten kommer best frem gjennom fri meningsutveksling
- Når ideer brytes mot hverandre, kan vi skille sannhet fra usannhet
- Hvis vi forbyr meninger, risikerer vi å forby sannheter

**2. Demokratiprinsippet:**
- Et demokrati krever at borgerne kan delta fritt i den offentlige debatten
- Velgerne trenger tilgang til informasjon og ulike synspunkter for å ta informerte valg
- Maktmisbruk avdekkes gjennom frie ytringer og en fri presse

**3. Autonomiprinsippet:**
- Ytringsfrihet er nødvendig for at individer skal utvikle seg som selvstendige mennesker
- Vi formes av å møte ulike perspektiver og utvikle egne standpunkter
- Å bli nektet å ytre seg er en form for umyndiggjøring`,
    },
    {
      id: 'kk-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Ytringsfrihet i praksis',
      problem: 'Bør ytterliggående politiske grupper ha lov til å demonstrere i offentligheten?',
      solution: `**For (ytringsfrihetens side):**
- Ytringsfriheten gjelder alle, også de vi er uenige med
- Å forby meninger gir dem martyrstatus og kan gjøre dem mer populære
- Det er bedre å møte dårlige ideer med motargumenter enn med forbud
- Voltaire: «Jeg er uenig i det du sier, men jeg vil kjempe til døden for din rett til å si det»

**Imot (begrensningens side):**
- Noen ytringer kan true andre menneskers trygghet og verdighet
- Hatefulle demonstrasjoner kan oppleves som truende for utsatte grupper
- Det finnes en forskjell mellom å uttrykke politiske meninger og å spre hat

**Norsk rettspraksis:**
I Norge har ytterliggående grupper som regel lov til å demonstrere, men politiet kan sette vilkår og gripe inn dersom det oppstår fare for alvorlig ordensforstyrrelse. Hatytringer som rettes mot spesifikke grupper kan straffeforfølges etter straffeloven § 185.`,
    },
    {
      id: 'kk-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Hvilken paragraf i Grunnloven beskytter ytringsfriheten i Norge?',
        options: [
          { id: 'a', text: '§ 2', isCorrect: false },
          { id: 'b', text: '§ 100', isCorrect: true },
          { id: 'c', text: '§ 102', isCorrect: false },
          { id: 'd', text: '§ 110', isCorrect: false },
        ],
        solution: 'Ytringsfriheten er beskyttet av Grunnlovens § 100, som slår fast at «Ytringsfrihed bør finde Sted.» § 102 beskytter personvernet, ikke ytringsfriheten.',
      },
    },
    {
      id: 'kk-8-3-def-2',
      type: 'definition',
      title: 'Hatytringer og injurier',
      content: `**Hatytringer** er ytringer som sprer hat mot eller truer personer på grunn av deres etnisitet, religion, livssyn, seksuelle orientering, kjønnsidentitet eller nedsatte funksjonsevne. De er forbudt etter straffeloven § 185. **Injurier** er usanne, ærekrenkende påstander om en annen person. De som rammes kan kreve erstatning etter skadeerstatningsloven. Både hatytringer og injurier er eksempler på grenser for ytringsfriheten.`,
    },
    {
      id: 'kk-8-3-text-2',
      type: 'text',
      content: `### Grensene for ytringsfrihet

Ytringsfrihet er ikke absolutt. Det finnes flere lovbestemte begrensninger:

**Straffelovens grenser:**
- **§ 185 Hatytringer:** Forbyr diskriminerende og hatefulle ytringer rettet mot bestemte grupper
- **§ 263 Trusler:** Forbyr å true noen med straffbar handling
- **§ 267 Privatlivets fred:** Forbyr å krenke privatlivet gjennom offentlig meddelelse

**Sivilrettslige grenser:**
- Erstatning for ærekrenkelser (injurier)
- Forbud mot å offentliggjøre andres private forhold uten samtykke

**Redaktøransvaret:**
- Redaktøren har det fulle og hele ansvaret for innholdet i sitt medium
- Gjelder aviser, nettaviser, radio og TV
- Sikrer at mediene tar ansvar for det de publiserer
- Redaktøren kan ikke skylde på journalisten eller kildene

**Debatt om grensene:**
Hvor grensene for ytringsfrihet skal gå, er en kontinuerlig debatt. Noen mener grensene er for stramme og begrenser nødvendig samfunnsdebatt. Andre mener de er for vide og ikke beskytter sårbare grupper godt nok.`,
    },
    {
      id: 'kk-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Når ytring møter juss',
      problem: 'En person skriver på Facebook at alle innvandrere fra et bestemt land er kriminelle og bør kastes ut. Er dette lovlig?',
      solution: `**Vurdering:**
Ytringen generaliserer negativt om en hel folkegruppe basert på nasjonal opprinnelse. Den kan vurderes som en hatytring etter straffeloven § 185.

**Kriterier for hatytring (§ 185):**
For at en ytring skal være straffbar, må den:
1. Rette seg mot noen på grunn av tilhørighet til en beskyttet gruppe
2. Være kvalifisert krenkende (grovt nedsettende, demoniserende)
3. Fremsettes offentlig eller i nærvær av den det gjelder

**Konklusjon:**
Å mene at innvandringspolitikken bør endres, er lovlig. Men å stemple en hel folkegruppe som kriminell er en generalisering som kan rammes av § 185. Kontekst, ordvalg og setting spiller inn i den rettslige vurderingen. Norske domstoler har i flere saker dømt personer for slike ytringer på sosiale medier.`,
    },
    {
      id: 'kk-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        task: 'Forklar de tre begrunnelsene for ytringsfrihet (sannhetsprinsippet, demokratiprinsippet og autonomiprinsippet) med egne ord.',
        hints: ['Tenk på hvorfor ytringsfrihet er viktig for sannhet, folkestyre og personlig utvikling'],
        solution: 'Sannhetsprinsippet: Vi finner sannheten ved å la ulike meninger brytes mot hverandre i åpen debatt. Hvis vi forbyr meninger, kan vi forby sannheter. Demokratiprinsippet: Et fungerende demokrati krever at borgere kan ytre seg fritt, at mediene kan avdekke maktmisbruk, og at velgerne har tilgang til ulike synspunkter. Autonomiprinsippet: Mennesker trenger ytringsfrihet for å utvikle seg som selvstendige individer. Vi formes av å møte ulike perspektiver og danne egne meninger.',
      },
    },
    {
      id: 'kk-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-8-3-ex-3',
        number: '8.3.3',
        type: 'multiple-choice',
        task: 'Hva innebærer redaktøransvaret?',
        options: [
          { id: 'a', text: 'At journalisten er ansvarlig for egne artikler', isCorrect: false },
          { id: 'b', text: 'At redaktøren har det fulle ansvaret for alt innhold i mediet', isCorrect: true },
          { id: 'c', text: 'At staten kan bestemme hva mediene publiserer', isCorrect: false },
          { id: 'd', text: 'At leserne kan bestemme hva som skrives', isCorrect: false },
        ],
        solution: 'Redaktøransvaret innebærer at redaktøren har det fulle og hele ansvaret for alt innhold som publiseres i mediet vedkommende leder. Redaktøren kan ikke skyve ansvaret over på journalister, kilder eller andre. Dette gjelder for aviser, nettaviser, radio og TV.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        task: 'Drøft om det bør være strengere regler for ytringer på sosiale medier enn i tradisjonelle medier. Gi argumenter for og imot.',
        hints: ['Tenk på forskjellen i spredningshastighet, redaktøransvar og hvem som ytrer seg'],
        solution: 'For strengere regler: Sosiale medier sprer innhold mye raskere og bredere enn tradisjonelle medier. Det finnes intet redaktøransvar, så ingen kontrollerer innholdet. Anonymitet kan senke terskelen for hat og trusler. Unge mennesker er spesielt utsatte. Imot: Ytringsfrihet bør gjelde uavhengig av plattform. Sosiale medier demokratiserer deltakelse. Strengere regler kan misbrukes til sensur. Det er vanskelig å håndheve uten å ramme lovlige ytringer. En mulig mellomposisjon er å gi plattformene et tydeligere ansvar for å fjerne klart ulovlig innhold, uten å innføre forhåndssensur.',
      },
    },
    {
      id: 'kk-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom hatytringer og vanlige negative meninger. Hvorfor er det viktig å skille mellom disse?',
        solution: 'Negative meninger er del av den frie debatten: «Jeg mener denne politikken er dårlig» er en lovlig ytring. Hatytringer retter seg mot personer på grunn av deres gruppetilhørighet og er kvalifisert krenkende: «Alle med den bakgrunnen er mindreverdige.» Det er viktig å skille fordi ytringsfriheten beskytter kontroversielle meninger, men ikke hat rettet mot sårbare grupper. Uten dette skillet risikerer vi enten å begrense all kritikk (for strengt) eller å akseptere hatpropaganda (for vidt). Grensedragningen er vanskelig, og domstolene vurderer kontekst, ordvalg og formål.',
      },
    },
    {
      id: 'kk-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Ytringsfriheten** er beskyttet av Grunnlovens § 100 og EMK artikkel 10
- Den begrunnes med **sannhet**, **demokrati** og **autonomi**
- Ytringsfriheten er ikke absolutt: **hatytringer** og **injurier** er forbudt
- **Redaktøransvaret** sikrer at mediene tar ansvar for det de publiserer
- Grensene for ytringsfrihet er gjenstand for kontinuerlig samfunnsdebatt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Ytringsfrihet | Retten til å ytre seg fritt, Grunnloven § 100 |
| Hatytringer | Straffbare ytringer som sprer hat mot grupper, § 185 |
| Injurier | Usanne ærekrenkende påstander |
| Redaktøransvaret | Redaktørens ansvar for alt innhold i mediet |
| Forhåndssensur | Kontroll av ytringer før publisering, forbudt i Norge |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Digital etikk
// ============================================================================

export const CHAPTER_KOMKULT_1_8_4: TextbookChapter = {
  id: 'komkult-1-8-4',
  courseId: 'komkult-1',
  chapterNumber: '8.4',
  title: 'Digital etikk',
  description: 'Nettvett, nettmobbing, digitalt medborgerskap og etiske utfordringer knyttet til kunstig intelligens. Du lærer om ansvarlig bruk av digitale medier og hvordan teknologi reiser nye etiske spørsmål.',
  estimatedMinutes: 24,
  competenceGoals: [
    'reflektere over personvern, ytringsfrihet og digitalt medborgerskap',
    'drøfte etiske problemstillinger knyttet til kommunikasjon',
  ],
  keyTerms: [
    { term: 'Digital etikk', definition: 'Etisk refleksjon knyttet til bruk av digitale teknologier og plattformer' },
    { term: 'Nettvett', definition: 'Kunnskap og ferdigheter for trygg og ansvarlig bruk av internett og digitale medier' },
    { term: 'Nettmobbing', definition: 'Gjentatt trakassering, utestenging eller krenkelse av personer gjennom digitale kanaler' },
    { term: 'Digitalt medborgerskap', definition: 'Evnen til å delta aktivt, trygt og ansvarlig i digitale fellesskap og i samfunnet gjennom digitale kanaler' },
    { term: 'Algoritme', definition: 'Et sett med regler som en datamaskin følger for å løse en oppgave, for eksempel for å velge hva du ser i sosiale medier' },
    { term: 'Deepfake', definition: 'Kunstig skapt video eller lyd der en persons ansikt eller stemme er manipulert ved hjelp av kunstig intelligens' },
  ],
  content: [
    {
      id: 'kk-8-4-intro',
      type: 'text',
      content: `## Etikk i den digitale hverdagen

Digitale medier gir oss muligheter som ingen generasjon før oss har hatt: Vi kan dele kunnskap, organisere oss, og holde kontakt med mennesker over hele verden. Men den digitale verden skaper også nye etiske utfordringer. Nettmobbing, spredning av falsk informasjon, og kunstig intelligens som tar beslutninger om mennesker, er bare noen av problemstillingene vi må forholde oss til.

I dette kapittelet skal du lære:
- Hva nettvett og digitalt medborgerskap innebærer
- Hva nettmobbing er og hvordan det kan forebygges
- Etiske utfordringer med algoritmer og kunstig intelligens
- Hvordan deepfakes og manipulert innhold truer tilliten`,
    },
    {
      id: 'kk-8-4-def-1',
      type: 'definition',
      title: 'Digitalt medborgerskap',
      content: `**Digitalt medborgerskap** handler om å kunne delta aktivt, trygt og ansvarlig i digitale fellesskap og i samfunnet gjennom digitale kanaler. Det innebærer å behandle andre med respekt på nett, være kritisk til informasjon man møter, forstå konsekvensene av det man deler, og bruke digitale verktøy til å engasjere seg i demokratiske prosesser.`,
    },
    {
      id: 'kk-8-4-text-1',
      type: 'text',
      content: `### Nettvett i praksis

**Grunnleggende prinsipper:**
- Tenk før du poster: Ville du sagt det samme ansikt til ansikt?
- Det du deler på nett, kan leve videre selv om du sletter det
- Vær kritisk til informasjon: Sjekk kilden før du deler videre
- Respekter andres privatliv: Ikke del bilder eller informasjon om andre uten samtykke

**Digitalt fotavtrykk:**
Alt du gjør på nett etterlater spor. Kommentarer, bilder, søk og likes kan knyttes tilbake til deg. Fremtidige arbeidsgivere, studiesteder og andre kan finne denne informasjonen. Det digitale fotavtrykket er vanskelig å slette helt.

**Spredning av desinformasjon:**
Sosiale medier gjør det lett å spre falsk eller villedende informasjon. Algoritmene belønner innhold som vekker sterke følelser, noe som gjør at sensasjonelt og feilaktig innhold ofte sprer seg raskere enn nyansert og korrekt informasjon.`,
    },
    {
      id: 'kk-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Nettmobbing blant ungdom',
      problem: 'En elev oppdager at det er opprettet en anonym Instagram-konto som deler ydmykende bilder og kommentarer om medelever. Hva bør eleven gjøre?',
      solution: `**Hva er nettmobbing?**
Nettmobbing er gjentatt trakassering, utestenging eller krenkelse av personer gjennom digitale kanaler. Det skiller seg fra fysisk mobbing ved at det kan skje hele døgnet, spres raskt til mange, og oppleves ekstra sårbart fordi innholdet kan bli permanent.

**Hva bør eleven gjøre:**
1. Ikke del innholdet videre (det forverrer situasjonen og kan være straffbart)
2. Ta skjermbilder som bevis
3. Varsle en voksen: kontaktlærer, rådgiver eller foreldre
4. Rapporter kontoen til Instagram
5. Støtt dem som er rammet

**Konsekvenser:**
Nettmobbing kan gi alvorlige psykiske konsekvenser som angst, depresjon og i verste fall selvmordstanker. Å dele krenkende bilder av andre kan være straffbart etter straffeloven. Det er ikke bare den som lager innholdet som er ansvarlig - også de som deler det videre kan holdes ansvarlige.`,
    },
    {
      id: 'kk-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner nettmobbing sammenlignet med tradisjonell mobbing?',
        options: [
          { id: 'a', text: 'Nettmobbing er mindre alvorlig fordi det skjer digitalt', isCorrect: false },
          { id: 'b', text: 'Nettmobbing kan skje hele døgnet, spres raskt og innholdet kan bli permanent', isCorrect: true },
          { id: 'c', text: 'Nettmobbing rammer bare kjente personer', isCorrect: false },
          { id: 'd', text: 'Nettmobbing er alltid anonym', isCorrect: false },
        ],
        solution: 'Nettmobbing skiller seg fra tradisjonell mobbing ved at det kan skje hele døgnet, uavhengig av sted. Innholdet kan spres svært raskt til mange mennesker, og det som deles digitalt kan bli permanent. Dette gjør at offeret ikke har noe fristed, noe som forsterker den psykiske belastningen.',
      },
    },
    {
      id: 'kk-8-4-def-2',
      type: 'definition',
      title: 'Deepfake',
      content: `En **deepfake** er en kunstig skapt video, et bilde eller lyd der en persons ansikt, kropp eller stemme er manipulert ved hjelp av kunstig intelligens. Teknologien kan brukes til å få det til å se ut som om en person sier eller gjør noe de aldri har gjort. Deepfakes reiser alvorlige etiske spørsmål om tillit, sannferdighet og personvern i digital kommunikasjon.`,
    },
    {
      id: 'kk-8-4-text-2',
      type: 'text',
      content: `### Kunstig intelligens og etikk

Kunstig intelligens (KI) brukes i stadig flere sammenhenger og reiser nye etiske spørsmål:

**Algoritmiske beslutninger:**
- KI-systemer tar beslutninger som påvirker mennesker: lånesøknader, jobbsøknader, strafferettslige risikovurderinger
- Algoritmene kan være forutinntatte (bias) fordi de trenes på historiske data som kan inneholde diskriminerende mønstre
- Spørsmålet om ansvar: Hvem er ansvarlig når en algoritme diskriminerer?

**Deepfakes og manipulert innhold:**
- Teknologien gjør det stadig enklere å lage overbevisende falskt innhold
- Kan brukes til svindel, politisk manipulasjon, hevnporno og desinformasjon
- Undergraver tilliten til det vi ser og hører
- Utfordrer prinsippet «se det for å tro det»

**KI i kreativt arbeid:**
- KI kan skrive tekster, lage bilder, komponere musikk
- Hvem eier rettighetene til KI-generert innhold?
- Er det etisk å bruke KI-generert innhold uten å opplyse om det?
- Hva skjer med menneskelige kreative yrker?

**Filterbobler og ekkokamre:**
- Algoritmer i sosiale medier viser deg innhold du allerede er enig i
- Dette kan forsterke polarisering og gjøre det vanskeligere å forstå andre perspektiver
- Algoritmene optimaliserer for engasjement, ikke for sannhet eller nyanse`,
    },
    {
      id: 'kk-8-4-example-2',
      type: 'example',
      title: 'Eksempel: KI og fordommer',
      problem: 'Et selskap bruker et KI-system til å sortere jobbsøknader. Systemet viser seg å favorisere menn over kvinner. Er det KI-ens skyld?',
      solution: `**Hva skjedde:**
Amazon utviklet et KI-verktøy for rekruttering som ble trent på data fra de siste 10 årenes søknader. Fordi teknologibransjen historisk har ansatt flest menn, lærte KI-en at menn var «bedre» kandidater. Systemet begynte å nedprioritere søknader fra kvinner.

**Problemet:**
KI-systemet reproduserte historisk diskriminering. Det var ikke «ondsinnet» - det fant mønstre i dataene det ble trent på. Men disse mønstrene reflekterte menneskers fordommer.

**Etisk analyse:**
- KI er aldri nøytral: Den er et produkt av dataene den trenes på og valgene utviklerne tar
- Ansvar: Selskapet som bruker systemet er ansvarlig for konsekvensene
- Åpenhet: Bør det kreves at bedrifter opplyser om bruk av KI i rekruttering?
- Kontroll: Mennesker bør ha siste ord i beslutninger som påvirker andres liv

Amazon skrappet systemet da de oppdaget problemet.`,
    },
    {
      id: 'kk-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        task: 'Forklar hva en filterboble er, og diskuter hvordan algoritmestyrte nyhetsstrømmer kan påvirke den offentlige debatten.',
        hints: ['Tenk på hvordan sosiale medier velger hva du ser, og hva som skjer når folk bare møter meninger de allerede er enige i'],
        solution: 'En filterboble oppstår når algoritmer i sosiale medier viser deg innhold basert på dine tidligere klikk, likes og delinger. Du får stadig mer av det du allerede er interessert i, og mindre av det som utfordrer ditt syn. Dette kan føre til ekkokamre der man bare møter meninger man er enig i. Konsekvenser for den offentlige debatten: Folk forstår hverandre dårligere, polariseringen øker, det blir vanskeligere å finne felles grunn, og ekstreme synspunkter kan normaliseres innenfor lukkede grupper.',
      },
    },
    {
      id: 'kk-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-8-4-ex-3',
        number: '8.4.3',
        type: 'multiple-choice',
        task: 'Hva er den største etiske utfordringen med deepfake-teknologi?',
        options: [
          { id: 'a', text: 'At den er for dyr for vanlige brukere', isCorrect: false },
          { id: 'b', text: 'At den undergraver tilliten til det vi ser og hører', isCorrect: true },
          { id: 'c', text: 'At den bare kan brukes til underholdning', isCorrect: false },
          { id: 'd', text: 'At den krenker opphavsretten til filmstudioer', isCorrect: false },
        ],
        solution: 'Den største etiske utfordringen med deepfakes er at teknologien undergraver tilliten til det vi ser og hører. Når det blir mulig å lage overbevisende falsk video av hvem som helst, blir det vanskeligere å skille ekte fra falskt. Dette kan brukes til politisk manipulasjon, svindel og personforfølgelse, og det utfordrer hele grunnlaget for informasjonsbasert kommunikasjon.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Hva mener du bør gjøres for å bekjempe nettmobbing blant ungdom? Foreslå tiltak på tre nivåer: individnivå, skolenivå og samfunnsnivå.',
        hints: ['Tenk på forebygging, håndtering og oppfølging'],
        solution: 'Individnivå: Tenke over konsekvensene før man poster, si ifra til voksne om man ser mobbing, støtte dem som er utsatt, ikke dele krenkende innhold videre. Skolenivå: Undervisning i digital etikk og nettvett, klare regler og rutiner for håndtering, lav terskel for å varsle, tett oppfølging av ofre og mobbere. Samfunnsnivå: Strengere krav til sosiale medier om å fjerne krenkende innhold raskt, bedre håndhevelse av eksisterende lover, informasjonskampanjer rettet mot barn og unge, forskning på effektive tiltak.',
      },
    },
    {
      id: 'kk-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        task: 'Drøft om elever bør opplyse om bruk av KI-verktøy (som ChatGPT) i skolearbeid. Bruk etiske perspektiver i svaret ditt.',
        solution: 'Fra et pliktetisk perspektiv er det galt å fremstille KI-generert tekst som sitt eget arbeid, fordi det bryter med sannferdighet og ærlighet. Skolen bygger på tillit. Fra et konsekvensetisk perspektiv kan skjult bruk av KI undergrave læringsutbyttet og gi urettferdige fordeler. Samtidig kan KI være et nyttig verktøy hvis det brukes åpent. En fornuftig tilnærming er åpenhet: opplys om bruk av KI, bruk det som et hjelpemiddel snarere enn en erstatning for egen tenkning, og vær ærlig om hva som er eget arbeid og hva som er KI-generert.',
      },
    },
    {
      id: 'kk-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-8-4-ex-6',
        number: '8.4.6',
        type: 'multiple-choice',
        task: 'Hva menes med at KI kan ha «bias»?',
        options: [
          { id: 'a', text: 'At KI bevisst diskriminerer', isCorrect: false },
          { id: 'b', text: 'At KI kan reprodusere fordommer fra dataene den er trent på', isCorrect: true },
          { id: 'c', text: 'At KI alltid tar feil', isCorrect: false },
          { id: 'd', text: 'At KI favoriserer teknologiselskaper', isCorrect: false },
        ],
        solution: 'Bias i KI betyr at systemet kan reprodusere fordommer og skjevheter som finnes i dataene det er trent på. KI-en er ikke bevisst diskriminerende, men den finner mønstre i historiske data som kan reflektere menneskelig diskriminering. For eksempel kan et rekrutteringssystem lære å favorisere menn hvis det trenes på data fra en mannsdominert bransje.',
      },
    },
    {
      id: 'kk-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Digitalt medborgerskap** handler om ansvarlig og aktiv deltakelse i digitale fellesskap
- **Nettvett** inkluderer å tenke før du deler, sjekke kilder og respektere andres privatliv
- **Nettmobbing** kan ha alvorlige konsekvenser og er delvis straffbart
- **Kunstig intelligens** reiser nye etiske spørsmål om bias, ansvar og åpenhet
- **Deepfakes** undergraver tilliten til visuell informasjon

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Digitalt medborgerskap | Ansvarlig deltakelse i digitale fellesskap |
| Nettvett | Trygg og ansvarlig internettbruk |
| Nettmobbing | Trakassering gjennom digitale kanaler |
| Deepfake | KI-manipulert video, bilde eller lyd |
| Filterboble | Algoritmestyrt innhold som forsterker eksisterende syn |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Profesjonell kommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT_1_8_5: TextbookChapter = {
  id: 'komkult-1-8-5',
  courseId: 'komkult-1',
  chapterNumber: '8.5',
  title: 'Profesjonell kommunikasjon',
  description: 'Profesjonsetikk, Vær Varsom-plakaten og etiske retningslinjer i arbeidslivet. Du lærer hvordan ulike yrker forholder seg til etikk i kommunikasjonen sin, og hva som kjennetegner ansvarlig profesjonell kommunikasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte etiske problemstillinger knyttet til kommunikasjon',
  ],
  keyTerms: [
    { term: 'Profesjonsetikk', definition: 'Etiske normer og retningslinjer som gjelder for utøvere av et bestemt yrke' },
    { term: 'Vær Varsom-plakaten', definition: 'Pressens egne etiske retningslinjer som regulerer journalisters og redaktørers arbeid i Norge' },
    { term: 'Pressens Faglige Utvalg (PFU)', definition: 'Organ som behandler klager mot medier for brudd på Vær Varsom-plakaten' },
    { term: 'Informert samtykke', definition: 'At en person gir tillatelse basert på fullstendig og forståelig informasjon om hva de samtykker til' },
    { term: 'Kildekritikk', definition: 'Systematisk vurdering av en kildes troverdighet, relevans og pålitelighet' },
    { term: 'PR-etikk', definition: 'Etiske normer for hvordan organisasjoner kommuniserer strategisk med omverdenen' },
  ],
  content: [
    {
      id: 'kk-8-5-intro',
      type: 'text',
      content: `## Etikk i yrkeslivet

I mange yrker er kommunikasjon en sentral del av arbeidet. Journalister formidler nyheter, markedsførere påvirker forbrukere, leger informerer pasienter, og lærere underviser elever. Alle disse yrkene har etiske retningslinjer for hvordan kommunikasjonen skal foregå. Profesjonsetikk handler om å utøve sitt yrke på en ansvarlig og etisk forsvarlig måte.

I dette kapittelet skal du lære:
- Hva profesjonsetikk er og hvorfor det er viktig
- Vær Varsom-plakaten og presseetikk
- Etikk i reklame og PR
- Kommunikasjonsetikk i arbeidslivet generelt`,
    },
    {
      id: 'kk-8-5-def-1',
      type: 'definition',
      title: 'Profesjonsetikk',
      content: `**Profesjonsetikk** er de etiske normene, verdiene og retningslinjene som gjelder for utøvere av et bestemt yrke. Profesjonsetikken definerer hva som er akseptabel og uakseptabel atferd innenfor yrket, og gir veiledning i etiske dilemmaer. Eksempler er legers taushetsplikt, journalisters kildebeskyttelse og advokaters lojalitet til klienten.`,
    },
    {
      id: 'kk-8-5-text-1',
      type: 'text',
      content: `### Vær Varsom-plakaten

Vær Varsom-plakaten er pressens egne etiske retningslinjer i Norge, vedtatt av Norsk Presseforbund. Den regulerer hvordan journalister og redaktører skal utøve sitt arbeid.

**Hovedprinsipper:**

**1. Pressens samfunnsrolle:**
- Pressen skal verne om ytringsfriheten og informasjonsfriheten
- Pressen har rett til å informere om det som skjer i samfunnet og avdekke kritikkverdige forhold

**2. Integritet og troverdighet:**
- Unngå dobbeltroller og interessekonflikter
- Vær åpen om pressens arbeidsmåter
- Skille klart mellom journalistikk og reklame

**3. Journalistisk atferd og forholdet til kildene:**
- Vis respekt for menneskers privatliv
- Vær kritisk til kilder
- Beskytt kilder som er lovet anonymitet

**4. Publiseringsregler:**
- Sjekk at opplysningene stemmer
- Vis saklighet og omtanke i all journalistikk
- Tenk på konsekvensene for dem som omtales
- Gi den som utsettes for angrep, mulighet til å uttale seg (samtidig imøtegåelse)`,
    },
    {
      id: 'kk-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Presseetisk dilemma',
      problem: 'En journalist har avdekket at en kjent idrettsutøver er innlagt på avrusning. Bør saken publiseres?',
      solution: `**Argumenter for publisering:**
- Idrettsutøveren er et offentlig forbilde, særlig for unge
- Offentligheten har rett til å vite at forbilder sliter
- Åpenhet om rusproblemer kan bidra til å redusere stigma

**Argumenter mot publisering:**
- Helseopplysninger er sensitive og private
- Publisering kan skade utøverens rehabilitering
- Saken har begrenset samfunnsrelevans

**Vær Varsom-plakaten sier:**
Punkt 4.3: «Vis respekt for menneskers egenart og identitet, privatliv, etnisitet, nasjonalitet og livssyn.» Punkt 4.6: «Ta hensyn til hvordan omtale av ulykker og kriminalsaker kan virke på ofre og pårørende.»

**Vurdering:**
De fleste presseorganer ville vært forsiktige med å publisere slike helseopplysninger, med mindre det hadde direkte relevans for utøverens offentlige rolle (f.eks. bruk av doping). Personvernet veier tungt.`,
    },
    {
      id: 'kk-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'Hva er Vær Varsom-plakaten?',
        options: [
          { id: 'a', text: 'En lov som regulerer mediene i Norge', isCorrect: false },
          { id: 'b', text: 'Pressens egne etiske retningslinjer, vedtatt av Norsk Presseforbund', isCorrect: true },
          { id: 'c', text: 'En veileder fra Datatilsynet om personvern', isCorrect: false },
          { id: 'd', text: 'En internasjonal konvensjon om ytringsfrihet', isCorrect: false },
        ],
        solution: 'Vær Varsom-plakaten er pressens egne etiske retningslinjer i Norge, vedtatt av Norsk Presseforbund. Den er ikke en lov, men et selvreguleringssystem. Brudd på Vær Varsom-plakaten behandles av Pressens Faglige Utvalg (PFU), som kan gi kritikk til medier som bryter retningslinjene.',
      },
    },
    {
      id: 'kk-8-5-def-2',
      type: 'definition',
      title: 'Etikk i reklame og PR',
      content: `**Reklame- og PR-etikk** handler om ansvarlig kommunikasjon fra kommersielle og offentlige aktører. Reklame reguleres av markedsføringsloven og bransjens egen selvregulering. **PR (Public Relations)** er strategisk kommunikasjon som skal bygge og vedlikeholde et godt omdømme. PR-etikk innebærer at organisasjoner kommuniserer åpent, ærlig og uten å villede, selv når de ønsker å fremstille seg i best mulig lys.`,
    },
    {
      id: 'kk-8-5-text-2',
      type: 'text',
      content: `### Etikk i reklame og PR

**Etiske utfordringer i reklame:**
- Villedende reklame: Overdrevne eller usanne påstander om produkter
- Skjult reklame: Innhold som ser ut som journalistikk eller personlige anbefalinger, men er betalt
- Influencer-markedsføring: Uklart skille mellom personlige meninger og betalt samarbeid
- Reklame rettet mot barn: Barn er mer sårbare for påvirkning
- Kroppspress: Urealistiske bilder som fremmer usunne idealer

**Regulering i Norge:**
- Markedsføringsloven forbyr villedende reklame
- Forbrukertilsynet håndhever loven
- Influencere må merke betalt innhold med «annonse» eller «reklame»
- Retusjert reklame skal merkes etter retusjloven

### Etikk i arbeidslivet generelt

Også utenfor mediene finnes det etiske utfordringer knyttet til kommunikasjon:

- **Varsling:** Bør en ansatt si fra om kritikkverdige forhold på arbeidsplassen?
- **Konfidensialitet:** Hva kan man dele om arbeidsgiver på sosiale medier?
- **Lojalitet vs. sannhet:** Hva gjør du når arbeidsgiveren ber deg fremstille noe mer positivt enn det er?
- **Maktforhold:** Den som har makt over andres jobb, har et spesielt ansvar for sin kommunikasjon`,
    },
    {
      id: 'kk-8-5-example-2',
      type: 'example',
      title: 'Eksempel: Influencer og skjult reklame',
      problem: 'En populær influencer poster et bilde med et bestemt sminkemerke og skriver «Elsker denne nye leppestiften!» Influenceren har fått produktet gratis og betalt for å poste om det, men opplyser ikke om dette. Er dette etisk forsvarlig?',
      solution: `**Analyse:**
Etter norsk lov er dette ulovlig. Markedsføringsloven krever at reklame skal kunne identifiseres som reklame. Forbrukertilsynets retningslinjer sier at betalt innhold må merkes tydelig med «annonse» eller «reklame».

**Etisk vurdering:**
- **Sannferdighet:** Følgerne tror dette er en ærlig anbefaling, ikke en betalt reklame
- **Tillit:** Når følgere oppdager skjult reklame, svekkes tilliten til influenceren
- **Forbrukervern:** Folk skal vite om de blir utsatt for reklame, slik at de kan vurdere informasjonen deretter
- **Rolleblanding:** Influencere blander personlig innhold og reklame, noe som gjør det vanskelig for følgerne å skille

**Konsekvenser:**
Forbrukertilsynet kan gi advarsler og bøter. Influencere risikerer også tap av troverdighet og følgere.`,
    },
    {
      id: 'kk-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-8-5-ex-2',
        number: '8.5.2',
        type: 'classic',
        task: 'Forklar hva «samtidig imøtegåelse» betyr i presseetikken, og hvorfor dette prinsippet er viktig.',
        hints: ['Tenk på hva som skjer hvis bare én side av en sak presenteres'],
        solution: 'Samtidig imøtegåelse betyr at den som angripes eller kritiseres i en mediesak, skal få mulighet til å uttale seg i samme sak. Prinsippet er viktig fordi det sikrer at leserne får høre begge sider av en sak, det beskytter den omtalte mot ensidig fremstilling, det styrker journalistikkens troverdighet, og det er et uttrykk for rettferdighet og balanse. Uten dette prinsippet kunne medier fungere som en enveis maktkanal.',
      },
    },
    {
      id: 'kk-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-8-5-ex-3',
        number: '8.5.3',
        type: 'multiple-choice',
        task: 'Hvorfor er det ulovlig for influencere å ikke merke betalt innhold?',
        options: [
          { id: 'a', text: 'Fordi det bryter med opphavsretten', isCorrect: false },
          { id: 'b', text: 'Fordi reklame skal kunne identifiseres som reklame, slik at forbrukerne ikke villedes', isCorrect: true },
          { id: 'c', text: 'Fordi det er urettferdig mot andre influencere', isCorrect: false },
          { id: 'd', text: 'Fordi staten vil kontrollere hva influencere sier', isCorrect: false },
        ],
        solution: 'Markedsføringsloven krever at reklame skal kunne gjenkjennes som reklame. Når influencere ikke merker betalt innhold, tror følgerne at det er en ærlig, personlig anbefaling. Dette vileder forbrukerne og bryter med prinsippet om sannferdighet i kommersiell kommunikasjon. Forbrukertilsynet håndhever disse reglene.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Velg et yrke der kommunikasjon er sentralt (f.eks. journalist, lege, lærer, markedsfører). Beskriv minst tre etiske utfordringer som kan oppstå i kommunikasjonen i dette yrket.',
        hints: ['Tenk på situasjoner der ulike hensyn står mot hverandre'],
        solution: 'Eksempel med journalist: 1) Balansen mellom å informere offentligheten og å beskytte personvernet til de som omtales. Journalisten må veie samfunnsnytten mot konsekvensene for enkeltpersoner. 2) Kildebeskyttelse: Journalisten har lovet kilden anonymitet, men politiet krever å få vite hvem kilden er. Pressens kildebeskyttelse er sterk i Norge, men kan bli utfordret i alvorlige saker. 3) Objektivitet: Journalisten har egne meninger, men skal presentere saker balansert. Det er utfordrende å skille egne synspunkter fra journalistikken.',
      },
    },
    {
      id: 'kk-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        task: 'Drøft følgende påstand: «Reklame som spiller på folks usikkerhet og frykt bør forbys.» Bruk eksempler og etiske perspektiver i svaret ditt.',
        solution: 'For forbud: Reklame som spiller på usikkerhet (f.eks. om kropp, utseende, status) kan skade selvfølelsen, særlig hos unge. Fra et konsekvensetisk perspektiv fører slik reklame til negative konsekvenser for mange. Fra et pliktetisk perspektiv er det galt å utnytte andres sårbarhet for profitt. Imot forbud: Ytringsfrihet og næringsfrihet tilsier at bedrifter bør ha rom til å reklamere. Det er vanskelig å trekke grensen - all reklame forsøker å påvirke følelser. Regulering er bedre enn forbud, for eksempel krav om merking av retusjerte bilder. En balansert konklusjon kan være at vi trenger strengere regulering uten totalt forbud, kombinert med bedre mediekompetanse blant forbrukerne.',
      },
    },
    {
      id: 'kk-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Profesjonsetikk** gir retningslinjer for ansvarlig yrkesutøvelse
- **Vær Varsom-plakaten** er pressens egne etiske retningslinjer
- **PFU** behandler klager mot medier som bryter Vær Varsom-plakaten
- Reklame og PR må være **sannferdig** og tydelig merket
- Etisk kommunikasjon i arbeidslivet handler om balanse mellom lojalitet, åpenhet og sannhet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Profesjonsetikk | Etiske retningslinjer for et yrke |
| Vær Varsom-plakaten | Pressens etiske regler |
| PFU | Pressens Faglige Utvalg |
| Samtidig imøtegåelse | Retten til å svare på angrep |
| Skjult reklame | Betalt innhold uten merking |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksportert samling
// ============================================================================

export const KOMKULT_1_DEL8_CHAPTERS = [
  CHAPTER_KOMKULT_1_8_1,
  CHAPTER_KOMKULT_1_8_2,
  CHAPTER_KOMKULT_1_8_3,
  CHAPTER_KOMKULT_1_8_4,
  CHAPTER_KOMKULT_1_8_5,
];
