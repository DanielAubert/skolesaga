/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Rettslære 2 VG3
 *
 * Seksjon 6: Personvern og IKT-rett (Kapittel 6.1–6.5)
 * Denne filen inneholder kapittel 6.1–6.5 (komplett).
 *
 * LK20 kompetansemål:
 * - «bruke sentrale regler om personvern og utforske juridiske problemstillinger
 *   som oppstår i forbindelse med bruk av informasjons- og kommunikasjonsteknologi»
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Personvern som grunnrettighet
// ============================================================================

export const CHAPTER_RETTSLAERE_2_6_1: TextbookChapter = {
  id: 'rettslaere-2-6-1',
  courseId: 'rettslaere-2',
  chapterNumber: '6.1',
  title: 'Personvern som grunnrettighet',
  description: 'Personvernet som grunnleggende rettighet i Grunnloven § 102 og EMK artikkel 8, og avveiningen mot andre rettigheter.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke sentrale regler om personvern og utforske juridiske problemstillinger som oppstår i forbindelse med bruk av informasjons- og kommunikasjonsteknologi'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-6-1-intro',
      type: 'text',
      content: `## Personvern som grunnrettighet

Personvern er retten til å ha kontroll over opplysninger om seg selv og til å beskytte sin private sfære mot uønsket innblanding fra andre. I en tid med stadig mer digital informasjonsbehandling er personvernet under økende press. Statlige myndigheter, private selskaper og andre aktører samler inn og bruker personopplysninger i et omfang som var utenkelig for bare få tiår siden.

Personvernet er ikke bare en praktisk rettighet – det er anerkjent som en **grunnleggende menneskerettighet** i norsk rett og i internasjonal rett. Det er forankret i Grunnloven § 102, i Den europeiske menneskerettskonvensjonen (EMK) artikkel 8 og i EUs charter om grunnleggende rettigheter artikkel 7 og 8.

I dette kapittelet skal du lære om det rettslige grunnlaget for personvernet, forholdet mellom personvern og ytringsfrihet, og hvorfor personvernet er viktig i en demokratisk rettsstat.`
    },

    // --- BLOKK 1: Grunnloven § 102 ---
    {
      id: 'rtl2-6-1-def-1',
      type: 'definition',
      title: 'Grunnloven § 102 – Rett til privatliv',
      content: `**Grunnloven § 102** lyder:

> «Enhver har rett til respekt for sitt privatliv og familieliv, sitt hjem og sin kommunikasjon. Husransakelse må ikke finne sted, unntatt i kriminelle tilfeller. Statens myndigheter skal sikre et vern om den personlige integritet.»

Bestemmelsen ble vedtatt i sin nåværende form ved grunnlovsrevisjonen i **2014**, da Stortinget vedtok et eget kapittel om menneskerettigheter i Grunnloven (kapittel E).

§ 102 verner flere sider av personvernet:

- **Privatliv** – retten til å ha en privat sfære fri for innblanding
- **Familieliv** – retten til å leve uforstyrret i familien
- **Hjem** – vern mot husransakelse uten rettslig grunnlag
- **Kommunikasjon** – vern mot at post, telefon og digital kommunikasjon avlyttes eller overvåkes

Bestemmelsen retter seg primært mot **staten**: det er statens myndigheter som har plikt til å respektere og sikre personvernet. Men den har også indirekte virkning i forholdet mellom private.`
    },
    {
      id: 'rtl2-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Grunnloven § 102 og kommuneovervåking',
      problem: 'En kommune installerer kameraovervåking med ansiktsgjenkjenning på alle offentlige plasser i sentrum for å forebygge kriminalitet. En innbygger klager og hevder at dette krenker retten til privatliv etter Grunnloven § 102. Vurder om overvåkingen kan være i strid med Grunnloven.',
      solution: `**Analyse:**

**Grunnloven § 102:** Bestemmelsen verner retten til respekt for privatliv. Masseovervåking med ansiktsgjenkjenning på offentlige plasser innebærer en betydelig innsamling av biometriske personopplysninger om alle som ferdes i sentrum.

**Inngrep:** Overvåkingen utgjør et **inngrep** i retten til privatliv. Selv om man befinner seg på offentlige plasser, har man en berettiget forventning om at myndighetene ikke systematisk registrerer ens bevegelser og identitet.

**Forholdsmessighet:** Et slikt inngrep krever hjemmel i lov, må forfølge et legitimt formål (kriminalitetsforebygging) og må være **forholdsmessig**. Masseovervåking med ansiktsgjenkjenning rammer alle innbyggere, også de aller fleste som ikke begår lovbrudd. Inngrepet er lite målrettet og svært vidtrekkende.

**Konklusjon:** Tiltaket vil sannsynligvis være i strid med Grunnloven § 102 fordi det ikke oppfyller kravet til forholdsmessighet. Mindre inngripende tiltak, som tradisjonell kameraovervåking uten ansiktsgjenkjenning på utsatte steder, vil lettere kunne forsvares.`
    },
    {
      id: 'rtl2-6-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken bestemmelse i Grunnloven verner retten til privatliv?',
        options: [
          { id: 'a', text: 'Grunnloven § 100 om ytringsfrihet', isCorrect: false },
          { id: 'b', text: 'Grunnloven § 102 om rett til privatliv', isCorrect: true },
          { id: 'c', text: 'Grunnloven § 96 om legalitetsprinsippet', isCorrect: false },
          { id: 'd', text: 'Grunnloven § 110 om rett til arbeid', isCorrect: false }
        ],
        solution: 'Grunnloven § 102 fastslår at enhver har rett til respekt for sitt privatliv og familieliv, sitt hjem og sin kommunikasjon. Bestemmelsen ble vedtatt i sin nåværende form ved grunnlovsrevisjonen i 2014.'
      }
    },

    // --- BLOKK 2: EMK artikkel 8 ---
    {
      id: 'rtl2-6-1-def-2',
      type: 'definition',
      title: 'EMK artikkel 8 – Retten til respekt for privatliv',
      content: `**Den europeiske menneskerettskonvensjonen (EMK) artikkel 8** lyder:

> «1. Enhver har rett til respekt for sitt privatliv og familieliv, sitt hjem og sin korrespondanse.
> 2. Det skal ikke skje noe inngrep av offentlig myndighet i utøvelsen av denne rettighet unntatt når dette er i samsvar med loven og er nødvendig i et demokratisk samfunn av hensyn til den nasjonale sikkerhet, offentlige trygghet eller landets økonomiske velferd, for å forebygge uorden eller kriminalitet, for å beskytte helse eller moral, eller for å beskytte andres rettigheter og friheter.»

EMK er inkorporert i norsk rett gjennom **menneskerettsloven** (lov 21. mai 1999 nr. 30) og har **forrang** foran annen norsk lovgivning dersom det oppstår motstrid (menneskerettsloven § 3).

**Den europeiske menneskerettsdomstolen (EMD)** i Strasbourg håndhever EMK og har avsagt en rekke dommer om personvern, blant annet om:

- Masseovervåking av kommunikasjon (Big Brother Watch-dommen, 2021)
- Arbeidsgivers overvåking av ansatte (Bărbulescu mot Romania, 2017)
- Kameraovervåking i offentlige rom (Peck mot Storbritannia, 2003)`
    },
    {
      id: 'rtl2-6-1-example-2',
      type: 'example',
      title: 'Eksempel: EMK artikkel 8 – trestegs-testen',
      problem: 'Politiet ønsker å gjennomgå en mistenkt persons e-postkonto uten domstolskontroll. Vurder om dette er forenlig med EMK artikkel 8.',
      solution: `**Analyse etter EMK artikkel 8 – trestegstesten:**

For at et inngrep i privatlivet skal være lovlig etter EMK artikkel 8 nr. 2, må tre vilkår være oppfylt:

**1. Lovhjemmel («i samsvar med loven»):**
Inngrepet må ha hjemmel i lov. I norsk rett regulerer straffeprosessloven politiets adgang til kommunikasjonskontroll. Gjennomgang av e-post krever normalt **rettens kjennelse** etter straffeprosessloven kapittel 16a.

**2. Legitimt formål:**
Etterforskning av kriminalitet er et legitimt formål etter EMK artikkel 8 nr. 2 (forebygge kriminalitet).

**3. Nødvendig i et demokratisk samfunn (forholdsmessighet):**
Det er et krav om proporsjonalitet. Gjennomgang av e-post uten domstolskontroll mangler den rettssikkerhetsgarantien som kravet til nødvendighet forutsetter. EMD har gjentatte ganger understreket at domstolskontroll er en viktig garanti mot misbruk av overvåkingsfullmakter.

**Konklusjon:** Gjennomgang av e-post uten domstolskontroll vil normalt ikke oppfylle vilkåret om at inngrepet er «nødvendig i et demokratisk samfunn», og er dermed i strid med EMK artikkel 8.`
    },
    {
      id: 'rtl2-6-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar de tre vilkårene som må være oppfylt for at staten lovlig kan gjøre inngrep i personvernet etter EMK artikkel 8 nr. 2. Bruk et selvvalgt eksempel.',
        hints: [
          'Tenk på lovhjemmel, legitimt formål og forholdsmessighet.',
          'Vurder et konkret eksempel på statlig overvåking.'
        ],
        solution: 'Etter EMK artikkel 8 nr. 2 må tre kumulative vilkår være oppfylt for at et inngrep i retten til privatliv skal være lovlig: (1) Inngrepet må ha hjemmel i lov – det vil si at det må finnes en tilgjengelig og forutsigbar rettsregel som gir grunnlag for inngrepet. (2) Inngrepet må forfølge et legitimt formål, slik som nasjonal sikkerhet, forebygging av kriminalitet eller beskyttelse av andres rettigheter. (3) Inngrepet må være nødvendig i et demokratisk samfunn – det vil si at det må være forholdsmessig og det minst inngripende tiltaket som kan oppnå formålet.'
      }
    },

    // --- BLOKK 3: Personvern og ytringsfrihet ---
    {
      id: 'rtl2-6-1-def-3',
      type: 'definition',
      title: 'Personvern vs. ytringsfrihet',
      content: `Personvernet kan komme i konflikt med andre grunnleggende rettigheter, særlig **ytringsfriheten** (Grunnloven § 100, EMK artikkel 10). Denne spenningen oppstår blant annet når:

- Pressen publiserer private opplysninger om offentlige personer
- Privatpersoner deler bilder eller informasjon om andre i sosiale medier
- Opplysninger om straffedømte personer gjøres tilgjengelig på internett

**Avveiningen** mellom personvern og ytringsfrihet må gjøres konkret i hver enkelt sak. Relevante momenter er:

1. **Allmenn interesse** – Angår opplysningene en sak av offentlig interesse, eller er det ren privat informasjon?
2. **Offentlig person** – Er den omtalte en offentlig person som må tåle mer oppmerksomhet enn en privatperson?
3. **Opplysningenes karakter** – Er opplysningene sensitive (helse, seksualitet, straffbare forhold)?
4. **Samtykke** – Har personen selv bidratt til offentliggjøringen?
5. **Konsekvenser** – Hvilke konsekvenser har offentliggjøringen for den berørte?

EMD har i en rekke dommer foretatt slike avveininger, blant annet i Von Hannover mot Tyskland (2004 og 2012) om paparazzi-fotografering av prinsesse Caroline av Monaco.`
    },
    {
      id: 'rtl2-6-1-example-3',
      type: 'example',
      title: 'Eksempel: Avisartikkel om politikers privatliv',
      problem: 'En lokalavis publiserer en artikkel om at en kommunepolitiker er innlagt på rusbehandling. Politikeren mener dette krenker personvernet. Avisen hevder at offentligheten har rett til å vite. Drøft om publiseringen er lovlig.',
      solution: `**Analyse – avveining mellom personvern og ytringsfrihet:**

**Personvernhensynet:** Opplysninger om rusbehandling er **sensitive helseopplysninger** som nyter sterkt vern etter Grunnloven § 102, EMK artikkel 8 og personopplysningsloven. Publisering kan ha alvorlige konsekvenser for politikerens privatliv og omdømme.

**Ytringsfrihetshensynet:** Politikeren er en folkevalgt og dermed en **offentlig person** som må tåle mer oppmerksomhet. Informasjon om rusbruk kan være relevant for velgernes vurdering av politikerens skikkethet.

**Avveining:** Selv om politikere må tåle kritisk søkelys på sin yrkesutøvelse, har de også krav på respekt for privatlivet. Helseopplysninger er blant de mest sensitive opplysningskategoriene. EMD har understreket at også offentlige personer har rett til et privatliv.

**Vurdering:** Dersom rusbruken ikke direkte påvirker politikerens evne til å utøve vervet, vil hensynet til personvern trolig veie tyngst. En generell opplysning om sykefravær uten å spesifisere behandlingstype ville vært et mindre inngripende alternativ.

**Konklusjon:** Publiseringen kan utgjøre en krenkelse av personvernet fordi den avslører sensitive helseopplysninger som ikke er nødvendige for å ivareta allmennhetens informasjonsbehov.`
    },
    {
      id: 'rtl2-6-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-1-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken bestemmelse i EMK verner retten til privatliv?',
        options: [
          { id: 'a', text: 'EMK artikkel 6 om rettferdig rettergang', isCorrect: false },
          { id: 'b', text: 'EMK artikkel 10 om ytringsfrihet', isCorrect: false },
          { id: 'c', text: 'EMK artikkel 8 om rett til respekt for privatliv', isCorrect: true },
          { id: 'd', text: 'EMK artikkel 3 om forbud mot tortur', isCorrect: false }
        ],
        solution: 'EMK artikkel 8 fastslår at enhver har rett til respekt for sitt privatliv og familieliv, sitt hjem og sin korrespondanse. Bestemmelsen tillater inngrep bare dersom de har lovhjemmel, forfølger et legitimt formål og er nødvendige i et demokratisk samfunn.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-6-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Personvern som grunnrettighet

- **Personvern** er retten til å ha kontroll over opplysninger om seg selv og til å beskytte sin private sfære.
- **Grunnloven § 102** verner retten til privatliv, familieliv, hjem og kommunikasjon. Bestemmelsen retter seg primært mot staten.
- **EMK artikkel 8** gir tilsvarende vern på europeisk nivå. Inngrep i personvernet er bare tillatt dersom tre vilkår er oppfylt: lovhjemmel, legitimt formål og nødvendighet i et demokratisk samfunn.
- EMK er inkorporert i norsk rett gjennom **menneskerettsloven** og har forrang foran annen norsk lovgivning.
- Personvernet kan komme i **konflikt med ytringsfriheten**. Avveiningen beror på en konkret vurdering der allmenn interesse, personens offentlige rolle og opplysningenes karakter er sentrale momenter.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-6-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En arbeidsgiver ønsker å lese ansattes private e-post for å avdekke mulig illojalitet. Drøft om dette kan være i strid med Grunnloven § 102 og EMK artikkel 8.',
        hints: [
          'Vurder om arbeidsforholdet endrer rekkevidden av personvernet.',
          'Tenk på EMDs praksis om arbeidsgivers overvåking av ansatte.'
        ],
        solution: 'Retten til respekt for privatliv og korrespondanse etter Grunnloven § 102 og EMK artikkel 8 gjelder også i arbeidsforhold. EMD har i Bărbulescu-dommen (2017) slått fast at arbeidsgivere ikke uten videre kan overvåke ansattes kommunikasjon. Inngrepet må vurderes etter EMK artikkel 8 nr. 2: det krever hjemmel (f.eks. i arbeidsavtalen eller personopplysningsloven), legitimt formål (verne virksomhetens interesser) og forholdsmessighet. Lesing av privat e-post uten forhåndsvarsel og uten konkret mistanke vil normalt være uforholdsmessig og i strid med personvernet.'
      }
    },
    {
      id: 'rtl2-6-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-1-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer det at EMK har «forrang» i norsk rett?',
        options: [
          { id: 'a', text: 'At EMK bare gjelder når Stortinget vedtar det i hvert enkelt tilfelle', isCorrect: false },
          { id: 'b', text: 'At EMK går foran annen norsk lovgivning ved motstrid', isCorrect: true },
          { id: 'c', text: 'At EMK kun gjelder for utlendinger i Norge', isCorrect: false },
          { id: 'd', text: 'At norske domstoler ikke kan anvende EMK direkte', isCorrect: false }
        ],
        solution: 'Etter menneskerettsloven § 3 skal EMK ved motstrid med annen norsk lovgivning gå foran. Det betyr at dersom en norsk lov strider mot EMK, skal EMK-bestemmelsen legges til grunn. Dette gir menneskerettighetene en sterk stilling i norsk rett.'
      }
    },
    {
      id: 'rtl2-6-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft forholdet mellom personvern og ytringsfrihet. Gi eksempler på situasjoner der de to rettighetene kan komme i konflikt, og forklar hvilke momenter som er relevante i avveiningen.',
        hints: [
          'Tenk på forskjellen mellom offentlige og private personer.',
          'Vurder hva slags opplysninger som er publisert.'
        ],
        solution: 'Personvernet (Grunnloven § 102, EMK artikkel 8) og ytringsfriheten (Grunnloven § 100, EMK artikkel 10) er begge grunnleggende rettigheter som kan komme i konflikt. Eksempler: pressen publiserer private helseopplysninger om en politiker, en privatperson legger ut bilder av andre uten samtykke, eller et nettsted publiserer navn og adresse på straffedømte. Relevante momenter i avveiningen er: (1) om opplysningene angår en sak av allmenn interesse, (2) om den berørte er en offentlig person, (3) opplysningenes sensitivitet, (4) om det foreligger samtykke, og (5) konsekvensene for den berørte. EMD har utviklet denne avveiningen gjennom en rekke dommer, blant annet Von Hannover-sakene.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Personvern', definition: 'Retten til å ha kontroll over opplysninger om seg selv og til å beskytte sin private sfære.' },
    { term: 'Grunnloven § 102', definition: 'Grunnlovens bestemmelse om rett til respekt for privatliv, familieliv, hjem og kommunikasjon.' },
    { term: 'EMK artikkel 8', definition: 'Den europeiske menneskerettskonvensjonens bestemmelse om rett til respekt for privatliv.' },
    { term: 'Menneskerettsloven', definition: 'Lov som inkorporerer EMK i norsk rett med forrang foran annen lovgivning.' },
    { term: 'Forholdsmessighet', definition: 'Krav om at inngrep i rettigheter må stå i rimelig forhold til formålet som søkes oppnådd.' },
    { term: 'Ytringsfrihet', definition: 'Retten til fritt å ytre seg, vernet av Grunnloven § 100 og EMK artikkel 10.' }
  ],
};

// ============================================================================
// KAPITTEL 6.2: GDPR og personopplysningsloven
// ============================================================================

export const CHAPTER_RETTSLAERE_2_6_2: TextbookChapter = {
  id: 'rettslaere-2-6-2',
  courseId: 'rettslaere-2',
  chapterNumber: '6.2',
  title: 'GDPR og personopplysningsloven',
  description: 'EUs personvernforordning (GDPR) og den norske personopplysningsloven: grunnprinsipper, behandlingsgrunnlag og samtykke.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke sentrale regler om personvern og utforske juridiske problemstillinger som oppstår i forbindelse med bruk av informasjons- og kommunikasjonsteknologi'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-6-2-intro',
      type: 'text',
      content: `## GDPR og personopplysningsloven

Mens Grunnloven § 102 og EMK artikkel 8 verner personvernet som en grunnleggende rettighet, er det **personopplysningsloven** og **EUs personvernforordning (GDPR)** som regulerer den praktiske behandlingen av personopplysninger i Norge.

**GDPR** (General Data Protection Regulation) er EUs forordning om personvern, vedtatt i 2016 og trådt i kraft 25. mai 2018. Forordningen gjelder i hele EØS-området, og er gjennomført i norsk rett gjennom **personopplysningsloven** (lov 15. juni 2018 nr. 38 om behandling av personopplysninger).

GDPR representerte en vesentlig styrking av personvernet sammenlignet med det tidligere personverndirektivet fra 1995. Forordningen innfører strengere krav til behandling av personopplysninger, sterkere rettigheter for den registrerte og betydelig høyere bøter ved brudd.

I dette kapittelet skal du lære om GDPRs grunnprinsipper, hva som utgjør et gyldig behandlingsgrunnlag, og kravene til samtykke.`
    },

    // --- BLOKK 1: Sentrale begreper ---
    {
      id: 'rtl2-6-2-def-1',
      type: 'definition',
      title: 'Sentrale begreper i personvernretten',
      content: `GDPR og personopplysningsloven bygger på en rekke sentrale begreper:

- **Personopplysning** (GDPR artikkel 4 nr. 1): Enhver opplysning som kan knyttes til en identifisert eller identifiserbar fysisk person (den «registrerte»). Eksempler: navn, fødselsnummer, e-postadresse, IP-adresse, lokasjonsdata, bilder.

- **Behandling** (GDPR artikkel 4 nr. 2): Enhver operasjon som gjøres med personopplysninger, slik som innsamling, registrering, lagring, bruk, utlevering og sletting.

- **Behandlingsansvarlig** (GDPR artikkel 4 nr. 7): Den som bestemmer formålet med og midlene for behandlingen av personopplysninger. For eksempel en arbeidsgiver, en skole eller et selskap.

- **Databehandler** (GDPR artikkel 4 nr. 8): Den som behandler personopplysninger på vegne av den behandlingsansvarlige. For eksempel en skyleverandør (cloud-tjeneste) som lagrer data for en bedrift.

- **Registrert** (GDPR artikkel 4 nr. 1): Den fysiske personen som personopplysningene gjelder.

- **Særlige kategorier av personopplysninger** (GDPR artikkel 9): Sensitive opplysninger som nyter et forsterket vern, herunder opplysninger om helse, etnisitet, politisk oppfatning, religion, seksualitet og biometriske data.`
    },
    {
      id: 'rtl2-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Hva er en personopplysning?',
      problem: 'Avgjør om følgende opplysninger er personopplysninger etter GDPR: (a) Et mobilnummer, (b) statistikk over gjennomsnittlig strømforbruk i en kommune, (c) et bilde av en person tatt på gaten, (d) en anonymisert kundeundersøkelse.',
      solution: `**Vurdering:**

**(a) Mobilnummer:** Ja, dette er en personopplysning. Et mobilnummer kan knyttes til en bestemt person gjennom telefonoperatørens kunderegistre.

**(b) Statistikk over gjennomsnittlig strømforbruk:** Nei, dette er ikke en personopplysning. Aggregerte og anonymiserte data som ikke kan knyttes til enkeltpersoner, faller utenfor GDPRs virkeområde.

**(c) Bilde av en person:** Ja, dersom personen kan identifiseres. Et bilde der personens ansikt er synlig, er en personopplysning. Dersom bildet er tatt slik at personen ikke kan identifiseres, er det ikke en personopplysning.

**(d) Anonymisert kundeundersøkelse:** Nei, forutsatt at anonymiseringen er reell – det vil si at det ikke er mulig å identifisere enkeltpersoner verken direkte eller indirekte. Dersom svarene kan kobles tilbake til respondentene, er det fortsatt personopplysninger.`
    },
    {
      id: 'rtl2-6-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en «personopplysning» etter GDPR?',
        options: [
          { id: 'a', text: 'Kun navn og fødselsnummer', isCorrect: false },
          { id: 'b', text: 'Enhver opplysning som kan knyttes til en identifisert eller identifiserbar person', isCorrect: true },
          { id: 'c', text: 'Bare opplysninger som lagres digitalt', isCorrect: false },
          { id: 'd', text: 'Opplysninger som personen selv har offentliggjort', isCorrect: false }
        ],
        solution: 'Etter GDPR artikkel 4 nr. 1 er en personopplysning enhver opplysning som kan knyttes til en identifisert eller identifiserbar fysisk person. Dette omfatter et vidt spekter av opplysninger, inkludert navn, e-post, IP-adresse, bilder, lokasjonsdata og mye mer.'
      }
    },

    // --- BLOKK 2: Grunnprinsippene i GDPR ---
    {
      id: 'rtl2-6-2-def-2',
      type: 'definition',
      title: 'De syv grunnprinsippene i GDPR',
      content: `GDPR artikkel 5 oppstiller **syv grunnprinsipper** for behandling av personopplysninger:

1. **Lovlighet, rettferdighet og åpenhet** – Behandlingen må ha rettslig grunnlag, være rettferdig og skje på en åpen og transparent måte overfor den registrerte.

2. **Formålsbegrensning** – Personopplysninger skal samles inn for spesifikke, uttrykkelig angitte og berettigede formål, og ikke viderebehandles på en måte som er uforenlig med disse formålene.

3. **Dataminimering** – Det skal bare samles inn personopplysninger som er adekvate, relevante og begrenset til det som er nødvendig for formålet.

4. **Riktighet** – Personopplysningene skal være korrekte og om nødvendig oppdaterte.

5. **Lagringsbegrensning** – Personopplysninger skal ikke lagres lenger enn det som er nødvendig for formålet.

6. **Integritet og konfidensialitet** – Personopplysningene skal behandles på en måte som sikrer tilstrekkelig sikkerhet, herunder vern mot uautorisert tilgang, tap og ødeleggelse.

7. **Ansvarlighetsprinsippet** – Den behandlingsansvarlige skal kunne påvise at prinsippene overholdes (dokumentasjonsplikt).`
    },
    {
      id: 'rtl2-6-2-example-2',
      type: 'example',
      title: 'Eksempel: Brudd på grunnprinsippene',
      problem: 'En nettbutikk samler inn kundenes kjøpshistorikk for å sende relevante tilbud. Butikken beholder alle opplysningene i ti år, selv om kunden bare har handlet én gang. Butikken deler også opplysningene med tredjepartsannonsører uten å informere kundene. Hvilke grunnprinsipper kan være brutt?',
      solution: `**Analyse:**

**Formålsbegrensning (prinsipp 2):** Opplysningene ble samlet inn for å sende relevante tilbud. Deling med tredjepartsannonsører er et nytt formål som kundene ikke er informert om. Dette kan være i strid med formålsbegrensningsprinsippet.

**Dataminimering (prinsipp 3):** Ti års lagring av kjøpshistorikk for en engangskunde er trolig mer enn nødvendig for formålet. Prinsippet krever at bare nødvendige opplysninger lagres.

**Lagringsbegrensning (prinsipp 5):** Ti års lagring overskrider sannsynligvis det som er nødvendig for å sende relevante tilbud. Opplysningene burde slettes eller anonymiseres når de ikke lenger tjener formålet.

**Lovlighet, rettferdighet og åpenhet (prinsipp 1):** Kundene er ikke informert om delingen med tredjeparter. Behandlingen mangler dermed den åpenheten som prinsippet krever.

**Konklusjon:** Nettbutikken bryter minst fire av GDPRs syv grunnprinsipper.`
    },
    {
      id: 'rtl2-6-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar prinsippet om dataminimering og gi et eksempel på hvordan det kan anvendes i praksis.',
        hints: [
          'Tenk på hva som samles inn vs. hva som faktisk er nødvendig.',
          'Vurder et eksempel fra skole, arbeidsliv eller netthandel.'
        ],
        solution: 'Prinsippet om dataminimering (GDPR artikkel 5 nr. 1 bokstav c) innebærer at det bare skal samles inn personopplysninger som er adekvate, relevante og begrenset til det som er nødvendig for det angitte formålet. Eksempel: Dersom en nettbutikk trenger kundens navn og adresse for å levere en pakke, er det ikke nødvendig å også kreve opplysninger om fødselsdato, sivilstatus eller inntekt. Innsamling av slike tilleggsopplysninger ville bryte med dataminimeringsprinsippet fordi de ikke er nødvendige for å oppfylle formålet (levere pakken).'
      }
    },

    // --- BLOKK 3: Behandlingsgrunnlag og samtykke ---
    {
      id: 'rtl2-6-2-def-3',
      type: 'definition',
      title: 'Behandlingsgrunnlag – GDPR artikkel 6',
      content: `All behandling av personopplysninger krever et **rettslig grunnlag** (behandlingsgrunnlag). GDPR artikkel 6 nr. 1 oppstiller seks alternative behandlingsgrunnlag:

**(a) Samtykke** – Den registrerte har gitt sitt samtykke til behandlingen for ett eller flere spesifikke formål.

**(b) Avtale** – Behandlingen er nødvendig for å oppfylle en avtale den registrerte er part i, eller for å gjennomføre tiltak på den registrertes anmodning før avtaleinngåelse.

**(c) Rettslig forpliktelse** – Behandlingen er nødvendig for å oppfylle en rettslig forpliktelse som den behandlingsansvarlige er underlagt (f.eks. regnskapslovens oppbevaringsplikt).

**(d) Vitale interesser** – Behandlingen er nødvendig for å verne den registrertes eller en annen persons vitale interesser (liv og helse).

**(e) Allmenn interesse eller offentlig myndighetsutøvelse** – Behandlingen er nødvendig for å utføre en oppgave i allmennhetens interesse eller ved utøvelse av offentlig myndighet.

**(f) Berettiget interesse** – Behandlingen er nødvendig for formål knyttet til en berettiget interesse som den behandlingsansvarlige eller en tredjepart forfølger, med mindre den registrertes interesser veier tyngre.

Den behandlingsansvarlige må identifisere og dokumentere hvilket behandlingsgrunnlag som benyttes **før** behandlingen starter.`
    },
    {
      id: 'rtl2-6-2-example-3',
      type: 'example',
      title: 'Eksempel: Valg av behandlingsgrunnlag',
      problem: 'En bedrift ønsker å: (1) sende faktura til en kunde, (2) sende nyhetsbrev med tilbud, (3) rapportere ansattes lønn til skattemyndighetene. Hvilket behandlingsgrunnlag gjelder for hvert formål?',
      solution: `**Analyse:**

**(1) Sende faktura til en kunde:**
**Behandlingsgrunnlag: Avtale (artikkel 6 nr. 1 bokstav b).** Behandlingen av kundens navn og adresse er nødvendig for å oppfylle kjøpsavtalen. Det kreves ikke samtykke fordi behandlingen følger direkte av avtaleforholdet.

**(2) Sende nyhetsbrev med tilbud:**
**Behandlingsgrunnlag: Samtykke (artikkel 6 nr. 1 bokstav a).** Utsending av markedsføring per e-post krever normalt den registrertes forhåndssamtykke etter markedsføringsloven § 15 og GDPR. Samtykket må være frivillig, spesifikt, informert og utvetydig.

**(3) Rapportere lønn til skattemyndighetene:**
**Behandlingsgrunnlag: Rettslig forpliktelse (artikkel 6 nr. 1 bokstav c).** Arbeidsgiver er etter skatteforvaltningsloven pålagt å innrapportere ansattes lønn. Denne behandlingen krever ikke samtykke fordi den følger av en rettslig forpliktelse.`
    },
    {
      id: 'rtl2-6-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-2-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket behandlingsgrunnlag benyttes når en arbeidsgiver innrapporterer ansattes lønn til skattemyndighetene?',
        options: [
          { id: 'a', text: 'Samtykke fra den ansatte', isCorrect: false },
          { id: 'b', text: 'Berettiget interesse hos arbeidsgiveren', isCorrect: false },
          { id: 'c', text: 'Rettslig forpliktelse som arbeidsgiveren er underlagt', isCorrect: true },
          { id: 'd', text: 'Avtale mellom arbeidsgiver og skattemyndighetene', isCorrect: false }
        ],
        solution: 'Innrapportering av lønn til skattemyndighetene er en rettslig forpliktelse som arbeidsgiveren er pålagt etter skatteforvaltningsloven. Behandlingsgrunnlaget er derfor GDPR artikkel 6 nr. 1 bokstav c (rettslig forpliktelse). Det kreves ikke samtykke fra den ansatte.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-6-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – GDPR og personopplysningsloven

- **GDPR** er EUs personvernforordning, gjennomført i norsk rett gjennom **personopplysningsloven** av 2018.
- **Personopplysning** er enhver opplysning som kan knyttes til en identifiserbar person. **Behandling** er enhver operasjon som gjøres med personopplysninger.
- GDPR bygger på **syv grunnprinsipper**: lovlighet, formålsbegrensning, dataminimering, riktighet, lagringsbegrensning, integritet/konfidensialitet og ansvarlighet.
- All behandling krever et **rettslig grunnlag** etter GDPR artikkel 6: samtykke, avtale, rettslig forpliktelse, vitale interesser, allmenn interesse eller berettiget interesse.
- **Samtykke** må være frivillig, spesifikt, informert og utvetydig.
- **Datatilsynet** er tilsynsmyndighet for personvern i Norge og kan ilegge overtredelsesgebyr ved brudd.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-6-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En skole ønsker å ta bilder av elevene under skolens årsdag og publisere dem på skolens hjemmeside. Hvilket behandlingsgrunnlag er aktuelt, og hvilke krav stilles?',
        hints: [
          'Vurder om samtykke er nødvendig for publisering av bilder.',
          'Tenk på at elevene kan være mindreårige.'
        ],
        solution: 'Publisering av bilder på skolens hjemmeside innebærer behandling av personopplysninger (bilder der elevene kan identifiseres). Behandlingsgrunnlaget vil normalt være samtykke (GDPR artikkel 6 nr. 1 bokstav a). For barn under 16 år kreves foresattes samtykke (personopplysningsloven § 5). Samtykket må være frivillig, spesifikt, informert og utvetydig. Skolen må informere om formålet (publisering på hjemmesiden), hvem som er behandlingsansvarlig, og at samtykket kan trekkes tilbake. Dersom samtykket trekkes tilbake, må bildene fjernes.'
      }
    },
    {
      id: 'rtl2-6-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-2-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Datatilsynets rolle i personvernretten?',
        options: [
          { id: 'a', text: 'Datatilsynet vedtar personvernlovgivning i Norge', isCorrect: false },
          { id: 'b', text: 'Datatilsynet er tilsynsmyndighet for personvern og kan ilegge overtredelsesgebyr', isCorrect: true },
          { id: 'c', text: 'Datatilsynet er en domstol som behandler personvernsaker', isCorrect: false },
          { id: 'd', text: 'Datatilsynet er kun rådgivende og har ingen sanksjonsmyndighet', isCorrect: false }
        ],
        solution: 'Datatilsynet er Norges uavhengige tilsynsmyndighet for personvern. Datatilsynet fører tilsyn med at personvernregelverket overholdes, gir veiledning, behandler klager og kan ilegge overtredelsesgebyr etter GDPR artikkel 83. Gebyrnivåene kan være svært høye – opptil 20 millioner euro eller 4 % av virksomhetens globale årsomsetning.'
      }
    },
    {
      id: 'rtl2-6-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom behandlingsgrunnlagene «samtykke» og «berettiget interesse» etter GDPR artikkel 6. Gi eksempler på situasjoner der hvert grunnlag er mest hensiktsmessig.',
        hints: [
          'Tenk på når det er praktisk å innhente samtykke og når det ikke er det.',
          'Vurder interesseavveiningen som kreves ved berettiget interesse.'
        ],
        solution: 'Samtykke (artikkel 6 nr. 1 bokstav a) innebærer at den registrerte aktivt godkjenner behandlingen. Samtykke er nødvendig når behandlingen ikke kan begrunnes i et annet grunnlag, f.eks. ved markedsføring per e-post. Berettiget interesse (artikkel 6 nr. 1 bokstav f) tillater behandling uten samtykke dersom den behandlingsansvarlige har en berettiget interesse som veier tyngre enn den registrertes interesser, f.eks. kameraovervåking for sikkerhet. Sentrale forskjeller: (1) Samtykke kan trekkes tilbake, mens berettiget interesse ikke avhenger av den registrertes vilje. (2) Samtykke krever en aktiv handling fra den registrerte, mens berettiget interesse krever en dokumentert interesseavveining. (3) Samtykke egner seg for direkte markedsføring, mens berettiget interesse passer bedre for sikkerhetstiltak og forebygging av svindel.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'GDPR', definition: 'EUs personvernforordning (General Data Protection Regulation), gjeldende fra 2018.' },
    { term: 'Personopplysningsloven', definition: 'Norsk lov som gjennomfører GDPR i norsk rett (lov 15. juni 2018 nr. 38).' },
    { term: 'Personopplysning', definition: 'Enhver opplysning som kan knyttes til en identifisert eller identifiserbar person.' },
    { term: 'Behandlingsansvarlig', definition: 'Den som bestemmer formålet med og midlene for behandling av personopplysninger.' },
    { term: 'Behandlingsgrunnlag', definition: 'Det rettslige grunnlaget som gir adgang til å behandle personopplysninger etter GDPR artikkel 6.' },
    { term: 'Datatilsynet', definition: 'Norges uavhengige tilsynsmyndighet for personvern.' }
  ],
};

// ============================================================================
// KAPITTEL 6.3: Behandling av personopplysninger
// ============================================================================

export const CHAPTER_RETTSLAERE_2_6_3: TextbookChapter = {
  id: 'rettslaere-2-6-3',
  courseId: 'rettslaere-2',
  chapterNumber: '6.3',
  title: 'Behandling av personopplysninger',
  description: 'Den registrertes rettigheter etter GDPR, databehandleravtaler og plikten til å gjennomføre personvernkonsekvensvurdering.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke sentrale regler om personvern og utforske juridiske problemstillinger som oppstår i forbindelse med bruk av informasjons- og kommunikasjonsteknologi'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-6-3-intro',
      type: 'text',
      content: `## Behandling av personopplysninger

GDPR gir den registrerte en rekke rettigheter som skal sikre at vedkommende har kontroll over egne personopplysninger. Disse rettighetene er et sentralt element i personvernforordningen og pålegger den behandlingsansvarlige tilsvarende plikter.

Når en virksomhet bruker en ekstern leverandør til å behandle personopplysninger – for eksempel en skyleverandør eller et regnskapsbyrå – oppstår forholdet mellom **behandlingsansvarlig** og **databehandler**. GDPR stiller strenge krav til dette forholdet, blant annet gjennom plikten til å inngå en **databehandleravtale**.

I dette kapittelet skal du lære om den registrertes rettigheter, kravene til databehandleravtaler, og plikten til å gjennomføre personvernkonsekvensvurderinger (DPIA).`
    },

    // --- BLOKK 1: Den registrertes rettigheter ---
    {
      id: 'rtl2-6-3-def-1',
      type: 'definition',
      title: 'Den registrertes rettigheter etter GDPR',
      content: `GDPR kapittel III (artikkel 12–23) gir den registrerte følgende rettigheter:

- **Rett til informasjon** (artikkel 13–14): Den registrerte har rett til å vite hvem som behandler personopplysningene, til hvilket formål, og på hvilket grunnlag.

- **Rett til innsyn** (artikkel 15): Den registrerte har rett til å få bekreftet om det behandles opplysninger om vedkommende, og i så fall få tilgang til opplysningene.

- **Rett til retting** (artikkel 16): Den registrerte har rett til å få uriktige personopplysninger korrigert.

- **Rett til sletting («retten til å bli glemt»)** (artikkel 17): Den registrerte har i visse tilfeller rett til å kreve at personopplysningene slettes, blant annet når opplysningene ikke lenger er nødvendige for formålet.

- **Rett til begrensning av behandlingen** (artikkel 18): Den registrerte kan kreve at behandlingen begrenses, for eksempel mens en klage behandles.

- **Rett til dataportabilitet** (artikkel 20): Den registrerte har rett til å motta sine personopplysninger i et strukturert, maskinlesbart format og overføre dem til en annen behandlingsansvarlig.

- **Rett til å protestere** (artikkel 21): Den registrerte kan protestere mot behandling som bygger på berettiget interesse eller allmenn interesse.`
    },
    {
      id: 'rtl2-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Retten til å bli glemt',
      problem: 'Sara oppdager at en nettavis har publisert en artikkel om at hun ble siktet for underslag for fem år siden. Saken ble henlagt. Sara ber nettavisen om å slette artikkelen under henvisning til «retten til å bli glemt» etter GDPR artikkel 17. Har hun krav på sletting?',
      solution: `**Analyse:**

**Retten til sletting (GDPR artikkel 17):** Den registrerte har rett til sletting blant annet når opplysningene ikke lenger er nødvendige for formålet, eller når den registrerte trekker tilbake samtykket.

**Unntak – ytringsfrihet (artikkel 17 nr. 3 bokstav a):** Retten til sletting gjelder ikke dersom behandlingen er nødvendig for å utøve retten til ytringsfrihet og informasjon, herunder journalistisk virksomhet.

**Avveining:** Her må retten til å bli glemt veies mot pressens ytringsfrihet. Relevante momenter:
- Saken ble **henlagt** – Sara ble aldri dømt
- Det har gått **fem år** – opplysningenes aktualitet er begrenset
- Sara er en **privatperson** – ikke en offentlig person
- Artikkelen kan ha **vesentlige negative konsekvenser** for Saras omdømme og yrkesmuligheter

**Konklusjon:** Momentene taler for at Saras personvern veier tyngre enn nettavisens ytringsfrihet. EMD og EU-domstolen har i lignende saker (Google Spain-dommen, C-131/12) lagt vekt på at henlagte straffesaker om privatpersoner bør kunne fjernes etter en viss tid. Sara har trolig krav på sletting, eventuelt avindeksering fra søkemotorer.`
    },
    {
      id: 'rtl2-6-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer «retten til å bli glemt» etter GDPR artikkel 17?',
        options: [
          { id: 'a', text: 'At alle personopplysninger automatisk slettes etter fem år', isCorrect: false },
          { id: 'b', text: 'At den registrerte i visse tilfeller kan kreve at personopplysningene slettes', isCorrect: true },
          { id: 'c', text: 'At politiet må slette strafferegisteret til en person etter begjæring', isCorrect: false },
          { id: 'd', text: 'At søkemotorer aldri kan vise personopplysninger i søkeresultater', isCorrect: false }
        ],
        solution: 'Retten til å bli glemt (GDPR artikkel 17) gir den registrerte rett til å kreve sletting av personopplysninger i visse tilfeller, blant annet når opplysningene ikke lenger er nødvendige for formålet. Retten er ikke absolutt – den kan begrenses av hensyn til blant annet ytringsfrihet og rettslige forpliktelser.'
      }
    },

    // --- BLOKK 2: Databehandleravtaler ---
    {
      id: 'rtl2-6-3-def-2',
      type: 'definition',
      title: 'Databehandleravtale – GDPR artikkel 28',
      content: `Når en **behandlingsansvarlig** bruker en ekstern aktør (**databehandler**) til å behandle personopplysninger, stiller GDPR artikkel 28 krav om at det skal inngås en **databehandleravtale**.

En databehandleravtale skal inneholde:

- **Formålet** med behandlingen og hva slags personopplysninger som behandles
- **Varigheten** av behandlingen
- **Den registrertes rettigheter** – databehandleren skal bistå den behandlingsansvarlige med å oppfylle sine plikter
- **Sikkerhetstiltak** – databehandleren skal iverksette tilstrekkelige tekniske og organisatoriske tiltak
- **Underbehandlere** – databehandleren kan ikke engasjere underbehandlere uten den behandlingsansvarliges godkjennelse
- **Sletting eller tilbakelevering** – etter avsluttet behandling skal personopplysningene slettes eller leveres tilbake
- **Revisjonsrett** – den behandlingsansvarlige skal ha rett til å kontrollere at databehandleren overholder avtalen

**Eksempler på databehandlerforhold:**
- En bedrift som bruker en skyleverandør (f.eks. Microsoft Azure) til å lagre kundedata
- En skole som bruker et eksternt system for elevadministrasjon
- Et sykehus som bruker et eksternt laboratorium til å analysere prøver`
    },
    {
      id: 'rtl2-6-3-example-2',
      type: 'example',
      title: 'Eksempel: Manglende databehandleravtale',
      problem: 'En fysioterapiklinikk bruker en nettbasert bookingløsning for å administrere pasientavtaler. Bookingløsningen lagrer pasientens navn, telefonnummer og helseopplysninger. Klinikken har ikke inngått databehandleravtale med leverandøren av bookingløsningen. Hvilke konsekvenser kan dette få?',
      solution: `**Analyse:**

**Rollene:** Fysioterapiklinikken er **behandlingsansvarlig** fordi den bestemmer formålet med behandlingen (administrere pasientavtaler). Leverandøren av bookingløsningen er **databehandler** fordi den behandler personopplysninger på vegne av klinikken.

**Krav etter GDPR artikkel 28:** Klinikken plikter å inngå en databehandleravtale med leverandøren. Avtalen skal regulere blant annet formål, sikkerhetstiltak, underbehandlere og sletting.

**Konsekvenser av manglende avtale:**
1. **Brudd på GDPR:** Manglende databehandleravtale er i seg selv et brudd på GDPR artikkel 28.
2. **Overtredelsesgebyr:** Datatilsynet kan ilegge overtredelsesgebyr.
3. **Manglende kontroll:** Uten avtale har klinikken ingen formell kontroll over hvordan leverandøren behandler sensitive helseopplysninger.
4. **Ansvar ved databrudd:** Dersom leverandøren lekker pasientopplysninger, vil klinikken som behandlingsansvarlig kunne holdes ansvarlig fordi den ikke har sikret forholdet gjennom en databehandleravtale.

**Konklusjon:** Klinikken må umiddelbart inngå en databehandleravtale med leverandøren.`
    },
    {
      id: 'rtl2-6-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-3-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom en behandlingsansvarlig og en databehandler. Gi et eksempel på et forhold der begge roller er til stede.',
        hints: [
          'Hvem bestemmer formålet med behandlingen?',
          'Hvem utfører den praktiske behandlingen?'
        ],
        solution: 'Den behandlingsansvarlige er den som bestemmer formålet med og midlene for behandling av personopplysninger (GDPR artikkel 4 nr. 7). Databehandleren er den som behandler personopplysninger på vegne av den behandlingsansvarlige (artikkel 4 nr. 8). Eksempel: En kommune (behandlingsansvarlig) bruker en skyleverandør (databehandler) til å lagre innbyggernes helsejournaler. Kommunen bestemmer at journalene skal lagres digitalt og hvilke opplysninger som skal registreres, mens skyleverandøren utfører den tekniske lagringen. Det skal inngås en databehandleravtale som regulerer forholdet.'
      }
    },

    // --- BLOKK 3: Personvernkonsekvensvurdering ---
    {
      id: 'rtl2-6-3-def-3',
      type: 'definition',
      title: 'Personvernkonsekvensvurdering (DPIA)',
      content: `**GDPR artikkel 35** pålegger den behandlingsansvarlige å gjennomføre en **personvernkonsekvensvurdering** (Data Protection Impact Assessment, DPIA) når en type behandling sannsynligvis vil medføre **høy risiko** for den registrertes rettigheter og friheter.

En DPIA er obligatorisk blant annet ved:

- **Systematisk og omfattende profilering** som har rettslige virkninger for den registrerte
- **Behandling i stor skala** av særlige kategorier av personopplysninger (helse, biometri osv.)
- **Systematisk overvåking** av et offentlig tilgjengelig område i stor skala

En DPIA skal inneholde:

1. **Beskrivelse** av de planlagte behandlingsaktivitetene og formålene
2. **Vurdering** av behandlingens nødvendighet og forholdsmessighet
3. **Vurdering av risiko** for den registrertes rettigheter og friheter
4. **Tiltak** som skal iverksettes for å håndtere risikoene

Dersom DPIA-en viser at behandlingen medfører høy risiko som ikke kan reduseres tilstrekkelig, skal den behandlingsansvarlige rådføre seg med **Datatilsynet** før behandlingen starter (forhåndsdrøfting, artikkel 36).`
    },
    {
      id: 'rtl2-6-3-example-3',
      type: 'example',
      title: 'Eksempel: Personvernkonsekvensvurdering for en app',
      problem: 'Et forsikringsselskap ønsker å lansere en app som samler inn helsedata fra brukernes smartklokker (puls, søvn, aktivitet) og bruker disse opplysningene til å beregne individuelle forsikringspremier. Er det nødvendig å gjennomføre en DPIA?',
      solution: `**Analyse:**

**Type behandling:** Appen samler inn helseopplysninger (særlige kategorier etter GDPR artikkel 9) i stor skala og bruker dem til systematisk profilering som har rettslige/økonomiske virkninger for den registrerte (forsikringspremien).

**Krav til DPIA (artikkel 35 nr. 3):** Behandlingen utløser DPIA-plikten fordi:
- Den innebærer **behandling i stor skala** av særlige kategorier (helseopplysninger)
- Den innebærer **systematisk profilering** med rettslige virkninger (forsikringspremie)

**DPIA-en skal vurdere:**
1. Er innsamlingen nødvendig og forholdsmessig for å beregne forsikringspremier?
2. Hvilke risikoer innebærer behandlingen for de registrerte (diskriminering, urimelige premier, datalekkasje)?
3. Hvilke sikkerhetstiltak er nødvendige (kryptering, tilgangskontroll, anonymisering)?
4. Er det innhentet gyldig samtykke for behandling av helseopplysninger?

**Konklusjon:** Ja, det er obligatorisk å gjennomføre en DPIA. Risikoen for de registrerte er høy, og behandlingen kan potensielt føre til diskriminering av personer med dårligere helse.`
    },
    {
      id: 'rtl2-6-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-3-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når er det obligatorisk å gjennomføre en personvernkonsekvensvurdering (DPIA)?',
        options: [
          { id: 'a', text: 'Alltid når en virksomhet behandler personopplysninger', isCorrect: false },
          { id: 'b', text: 'Kun når Datatilsynet pålegger det', isCorrect: false },
          { id: 'c', text: 'Når behandlingen sannsynligvis vil medføre høy risiko for den registrertes rettigheter', isCorrect: true },
          { id: 'd', text: 'Bare ved behandling av personopplysninger om barn', isCorrect: false }
        ],
        solution: 'Etter GDPR artikkel 35 er DPIA obligatorisk når en type behandling sannsynligvis vil medføre høy risiko for den registrertes rettigheter og friheter. Dette gjelder blant annet ved systematisk profilering med rettslige virkninger, behandling i stor skala av sensitive opplysninger og systematisk overvåking av offentlige områder.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-6-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Behandling av personopplysninger

- GDPR gir den registrerte en rekke **rettigheter**: innsyn, retting, sletting, begrensning, dataportabilitet og rett til å protestere.
- **Retten til å bli glemt** (artikkel 17) gir den registrerte rett til sletting i visse tilfeller, men kan begrenses av ytringsfriheten.
- Forholdet mellom behandlingsansvarlig og databehandler skal reguleres gjennom en **databehandleravtale** (artikkel 28).
- En **personvernkonsekvensvurdering (DPIA)** er obligatorisk når behandlingen medfører høy risiko for den registrerte (artikkel 35).
- Dersom risikoen ikke kan reduseres tilstrekkelig, skal den behandlingsansvarlige rådføre seg med Datatilsynet (**forhåndsdrøfting**, artikkel 36).`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-6-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En nettbutikk mottar en forespørsel fra en kunde om innsyn i alle personopplysninger som nettbutikken har lagret om vedkommende. Forklar hvilke plikter nettbutikken har etter GDPR.',
        hints: [
          'Se GDPR artikkel 15 om innsynsrett.',
          'Hva er fristen for å svare på innsynskrav?'
        ],
        solution: 'Etter GDPR artikkel 15 har den registrerte rett til å få bekreftet om det behandles personopplysninger om vedkommende, og i så fall få tilgang til opplysningene samt informasjon om formålet, kategorier av opplysninger, mottakere, lagringstid og den registrertes rettigheter. Nettbutikken plikter å svare på innsynskravet uten ugrunnet opphold og senest innen én måned (artikkel 12 nr. 3). Fristen kan forlenges med to måneder dersom forespørselen er kompleks. Innsynet skal gis kostnadsfritt.'
      }
    },
    {
      id: 'rtl2-6-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-3-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skal en databehandleravtale regulere?',
        options: [
          { id: 'a', text: 'Kun prisen på tjenesten', isCorrect: false },
          { id: 'b', text: 'Formål, sikkerhetstiltak, underbehandlere, sletting og den behandlingsansvarliges revisjonsrett', isCorrect: true },
          { id: 'c', text: 'Bare hvem som er behandlingsansvarlig', isCorrect: false },
          { id: 'd', text: 'Kun tekniske spesifikasjoner for datalagring', isCorrect: false }
        ],
        solution: 'Etter GDPR artikkel 28 skal en databehandleravtale regulere blant annet formålet med behandlingen, typen personopplysninger, sikkerhetstiltak, bruk av underbehandlere, sletting eller tilbakelevering av data etter avsluttet behandling, og den behandlingsansvarliges rett til å kontrollere (revidere) at avtalen overholdes.'
      }
    },
    {
      id: 'rtl2-6-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kommune ønsker å innføre et system med automatisk ansiktsgjenkjenning i skolen for å registrere fremmøte. Drøft om kommunen er forpliktet til å gjennomføre en DPIA, og hvilke problemstillinger som bør vurderes.',
        hints: [
          'Tenk på at biometriske data er særlige kategorier av personopplysninger.',
          'Vurder risikoen for barn og unge.'
        ],
        solution: 'Ja, kommunen er forpliktet til å gjennomføre en DPIA. Ansiktsgjenkjenning innebærer behandling av biometriske data, som er en særlig kategori etter GDPR artikkel 9. Behandlingen skjer i stor skala (alle elever) og innebærer systematisk overvåking. Problemer som bør vurderes: (1) Nødvendighet – er ansiktsgjenkjenning det minst inngripende tiltaket for å registrere fremmøte? Tradisjonell navneopprop er langt mindre inngripende. (2) Samtykke – barn kan ikke gi fritt samtykke overfor skolen (maktforskjell). (3) Risiko – datalekkasje av biometriske data kan ikke repareres (man kan ikke bytte ansikt). (4) Forholdsmessighet – tiltaket er trolig uforholdsmessig for formålet. Konklusjonen er at ansiktsgjenkjenning for fremmøteregistrering sannsynligvis ikke er lovlig.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Innsynsrett', definition: 'Den registrertes rett til å få tilgang til egne personopplysninger (GDPR artikkel 15).' },
    { term: 'Retten til å bli glemt', definition: 'Den registrertes rett til å kreve sletting av personopplysninger (GDPR artikkel 17).' },
    { term: 'Dataportabilitet', definition: 'Retten til å motta sine personopplysninger i et maskinlesbart format (GDPR artikkel 20).' },
    { term: 'Databehandleravtale', definition: 'Avtale mellom behandlingsansvarlig og databehandler som regulerer behandlingen (GDPR artikkel 28).' },
    { term: 'DPIA', definition: 'Personvernkonsekvensvurdering – risikovurdering som er obligatorisk ved høyrisiko-behandlinger (GDPR artikkel 35).' },
    { term: 'Forhåndsdrøfting', definition: 'Plikt til å rådføre seg med Datatilsynet dersom DPIA viser uakseptabel risiko (GDPR artikkel 36).' }
  ],
};

// ============================================================================
// KAPITTEL 6.4: Personvern i digital hverdag
// ============================================================================

export const CHAPTER_RETTSLAERE_2_6_4: TextbookChapter = {
  id: 'rettslaere-2-6-4',
  courseId: 'rettslaere-2',
  chapterNumber: '6.4',
  title: 'Personvern i digital hverdag',
  description: 'Personvernspørsmål knyttet til sosiale medier, informasjonskapsler, sporing og overvåking i det digitale samfunnet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke sentrale regler om personvern og utforske juridiske problemstillinger som oppstår i forbindelse med bruk av informasjons- og kommunikasjonsteknologi'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-6-4-intro',
      type: 'text',
      content: `## Personvern i digital hverdag

Den digitale hverdagen innebærer at vi stadig etterlater oss digitale spor. Når vi bruker sosiale medier, handler på nett, søker på Google eller beveger oss med mobiltelefonen, samles det inn personopplysninger om oss. Mange er ikke klar over omfanget av denne datainnsamlingen eller hvordan opplysningene brukes videre.

Personvernlovgivningen – særlig GDPR, ekomloven og markedsføringsloven – setter grenser for hvordan aktører kan samle inn, bruke og dele personopplysninger. Likevel oppstår det stadig nye utfordringer i skjæringspunktet mellom teknologi og rett.

I dette kapittelet skal du lære om personvern i sosiale medier, reglene om informasjonskapsler (cookies), og juridiske spørsmål knyttet til digital overvåking og sporing.`
    },

    // --- BLOKK 1: Sosiale medier og personvern ---
    {
      id: 'rtl2-6-4-def-1',
      type: 'definition',
      title: 'Personvern i sosiale medier',
      content: `Sosiale medier som Facebook, Instagram, TikTok og Snapchat samler inn store mengder personopplysninger om brukerne. Disse opplysningene brukes blant annet til målrettet annonsering, innholdsoptimalisering og utvikling av algoritmer.

**Personvernutfordringer i sosiale medier:**

- **Samtykke:** Brukere aksepterer ofte lange og kompliserte vilkår uten å lese dem. Spørsmålet er om slikt samtykke oppfyller GDPRs krav om at samtykke skal være «frivillig, spesifikt, informert og utvetydig» (artikkel 4 nr. 11).

- **Barn og unge:** Personopplysningsloven § 5 setter aldersgrense for barns samtykke til informasjonssamfunnstjenester til **13 år** i Norge. For barn under 13 år kreves foresattes samtykke.

- **Profilering:** Sosiale medier bruker algoritmer til å lage profiler av brukerne basert på deres adferd, preferanser og kontakter. Slik profilering er regulert i GDPR artikkel 22.

- **Videredeling:** Personopplysninger kan deles med tredjeparter, annonsører og partnere. Cambridge Analytica-skandalen (2018) viste hvordan Facebooks data ble misbrukt til politisk påvirkning.

- **Deling av andres opplysninger:** Når en bruker legger ut bilder eller informasjon om andre personer uten samtykke, kan dette bryte med personvernreglene.`
    },
    {
      id: 'rtl2-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Deling av bilder på sosiale medier',
      problem: 'Morten tar et bilde av klassekameraten Lise på en fest og legger det ut på Instagram uten å spørre henne. Lise oppdager bildet og ber Morten fjerne det. Morten nekter og hevder at han har ytringsfrihet. Vurder Lises rettigheter.',
      solution: `**Analyse:**

**Personopplysning:** Et bilde der Lise kan identifiseres, er en personopplysning etter GDPR artikkel 4 nr. 1.

**Behandlingsgrunnlag:** Publisering av bildet på Instagram innebærer behandling av personopplysninger. GDPR gjelder i utgangspunktet ikke for «rent personlige eller familiemessige aktiviteter» (artikkel 2 nr. 2 bokstav c), men publisering på en åpen Instagram-profil overskrider denne unntaksgrensen fordi opplysningene gjøres tilgjengelig for et ubestemt antall personer.

**Åndsverkloven § 104:** Etter åndsverkloven § 104 er det som hovedregel forbudt å publisere bilder av en person uten vedkommendes samtykke. Unntak gjelder for bilder som har aktuell og allmenn interesse, bilder av forsamlinger og bilder der personen er en del av bakgrunnen.

**Avveining:** Et bilde fra en fest der Lise er hovedmotiv, faller ikke inn under noe unntak. Mortens ytringsfrihet må her vike for Lises rett til å bestemme over bilder av seg selv.

**Konklusjon:** Lise har rett til å kreve bildet fjernet. Morten mangler både samtykke etter GDPR og tillatelse etter åndsverkloven § 104.`
    },
    {
      id: 'rtl2-6-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er aldersgrensen for barns samtykke til bruk av sosiale medier etter personopplysningsloven?',
        options: [
          { id: 'a', text: '10 år', isCorrect: false },
          { id: 'b', text: '13 år', isCorrect: true },
          { id: 'c', text: '16 år', isCorrect: false },
          { id: 'd', text: '18 år', isCorrect: false }
        ],
        solution: 'Personopplysningsloven § 5 setter aldersgrensen for barns samtykke til informasjonssamfunnstjenester (herunder sosiale medier) til 13 år i Norge. For barn under 13 år kreves foresattes samtykke. GDPR gir medlemsstatene frihet til å sette grensen mellom 13 og 16 år.'
      }
    },

    // --- BLOKK 2: Informasjonskapsler (cookies) ---
    {
      id: 'rtl2-6-4-def-2',
      type: 'definition',
      title: 'Informasjonskapsler (cookies) og sporing',
      content: `**Informasjonskapsler** (cookies) er små tekstfiler som lagres på brukerens enhet når vedkommende besøker en nettside. Cookies brukes til ulike formål:

- **Nødvendige cookies:** Sikrer at nettsiden fungerer (f.eks. innlogging, handlekurv). Krever ikke samtykke.
- **Funksjonelle cookies:** Husker brukerens preferanser (f.eks. språkvalg). Krever samtykke.
- **Analytiske cookies:** Samler inn statistikk om brukeradferd (f.eks. Google Analytics). Krever samtykke.
- **Markedsføringscookies:** Sporer brukeren på tvers av nettsider for å vise målrettet reklame. Krever samtykke.

**Rettslig regulering:**

- **Ekomloven § 2-7b:** Lagring av opplysninger på brukerens utstyr (cookies) eller tilgang til slike opplysninger krever at brukeren er informert om formålet og har gitt **samtykke**. Unntak gjelder for teknisk nødvendige cookies.

- **GDPR:** Dersom cookies inneholder personopplysninger (f.eks. IP-adresse, bruker-ID), gjelder GDPRs regler om behandlingsgrunnlag i tillegg.

- **Cookie-bannere:** Nettsider er pålagt å vise et cookie-banner der brukeren kan velge hvilke cookies som aksepteres. Et forhåndsavkrysset samtykke er **ikke** gyldig (EU-domstolen, Planet49-dommen, C-673/17).`
    },
    {
      id: 'rtl2-6-4-example-2',
      type: 'example',
      title: 'Eksempel: Ugyldig cookie-samtykke',
      problem: 'En nettavis viser et cookie-banner som sier: «Ved å bruke denne siden samtykker du til bruk av cookies.» Det er ingen mulighet til å velge bort cookies, bare en «OK»-knapp. Er dette et gyldig samtykke etter ekomloven og GDPR?',
      solution: `**Analyse:**

**Ekomloven § 2-7b:** Brukeren skal være informert om formålet med cookies og ha gitt samtykke. Et implisitt samtykke (at bruk av siden anses som samtykke) oppfyller ikke kravet til aktivt samtykke.

**GDPR artikkel 4 nr. 11:** Samtykke skal være «en frivillig, spesifikk, informert og utvetydig viljesytring der den registrerte ved en erklæring eller en tydelig bekreftende handling samtykker til behandling». Bare en «OK»-knapp uten mulighet til å velge bort ikke-nødvendige cookies gir ikke et reelt valg.

**EU-domstolens Planet49-dom (C-673/17):** Domstolen slo fast at:
1. Samtykke til cookies krever en **aktiv handling** fra brukeren
2. Forhåndsavkrysset samtykke er **ikke** gyldig
3. Brukeren må ha reell mulighet til å **velge bort** ikke-nødvendige cookies

**Konklusjon:** Nettavisens cookie-banner gir ikke gyldig samtykke. Nettavisen må tilby et banner med tydelige valgmuligheter der brukeren aktivt kan velge hvilke cookie-kategorier som aksepteres.`
    },
    {
      id: 'rtl2-6-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-4-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom nødvendige cookies og markedsføringscookies. Hvorfor kreves det samtykke for den ene typen, men ikke den andre?',
        hints: [
          'Tenk på formålet med de ulike cookie-typene.',
          'Vurder ekomloven § 2-7b og unntaket for teknisk nødvendige cookies.'
        ],
        solution: 'Nødvendige cookies er cookies som er strengt nødvendige for at nettsiden skal fungere teknisk, for eksempel cookies som styrer innlogging eller handlekurv. Disse krever ikke samtykke fordi de er «nødvendige for å levere en tjeneste som brukeren uttrykkelig har etterspurt» (ekomloven § 2-7b). Markedsføringscookies sporer brukerens adferd på tvers av nettsider for å bygge en profil og vise målrettet reklame. Disse er ikke nødvendige for nettsidens funksjonalitet og innebærer en betydelig innsamling av personopplysninger. Derfor kreves aktivt, informert samtykke.'
      }
    },

    // --- BLOKK 3: Digital overvåking ---
    {
      id: 'rtl2-6-4-def-3',
      type: 'definition',
      title: 'Kameraovervåking og digital sporing',
      content: `Den digitale utviklingen har gitt nye muligheter for overvåking. Både myndigheter og private aktører bruker teknologi til å samle inn opplysninger om enkeltpersoner.

**Kameraovervåking** er regulert i personopplysningsloven og GDPR:

- Kameraovervåking av **offentlige områder** krever behandlingsgrunnlag etter GDPR artikkel 6, typisk berettiget interesse (bokstav f) for å ivareta sikkerhet
- Det skal settes opp **skilt** som informerer om at området er kameraovervåket
- Opptak skal som hovedregel slettes etter **7 dager** (personopplysningsloven § 31)
- **Arbeidsplassovervåking** er underlagt strenge begrensninger etter arbeidsmiljøloven

**Lokasjonsdata og sporing:**

- Mobiltelefoner genererer lokasjonsdata som kan brukes til å spore enkeltpersoners bevegelser
- **Ekomloven § 2-9** regulerer behandling av lokasjonsdata fra elektronisk kommunikasjon
- Arbeidsgivers bruk av GPS-sporing av ansattes kjøretøy krever behandlingsgrunnlag og informasjonsplikt

**Masseovervåking:**

- Statens overvåking av elektronisk kommunikasjon i stor skala reiser alvorlige menneskerettslige spørsmål
- EMD har i Big Brother Watch mot Storbritannia (2021) oppstilt strenge vilkår for masseovervåking`
    },
    {
      id: 'rtl2-6-4-example-3',
      type: 'example',
      title: 'Eksempel: GPS-sporing av ansatte',
      problem: 'En transportbedrift installerer GPS-sporing i alle firmabiler for å effektivisere ruteplanleggingen. Bedriften informerer ikke de ansatte om sporingen. En sjåfør oppdager sporingen og klager til Datatilsynet. Vurder om bedriften har opptrådt lovlig.',
      solution: `**Analyse:**

**Personopplysning:** GPS-data som viser ansattes bevegelser i arbeidstiden, er personopplysninger etter GDPR artikkel 4 nr. 1.

**Behandlingsgrunnlag:** Bedriften kan vise til **berettiget interesse** (GDPR artikkel 6 nr. 1 bokstav f) for ruteplanlegging. Men det kreves en interesseavveining der bedriftens behov veies mot den ansattes personvern.

**Informasjonsplikt:** Etter GDPR artikkel 13 har den behandlingsansvarlige plikt til å informere den registrerte om behandlingen **før** den starter. Bedriften har brutt informasjonsplikten ved ikke å informere de ansatte.

**Arbeidsmiljøloven:** Overvåkingstiltak på arbeidsplassen skal drøftes med de tillitsvalgte (arbeidsmiljøloven § 9-2).

**Datatilsynets praksis:** Datatilsynet har uttalt at GPS-sporing av ansatte kan være lovlig dersom (1) det er nødvendig for et saklig formål, (2) det ikke er uforholdsmessig inngripende, (3) de ansatte er informert, og (4) sporingen avgrenses til arbeidstiden.

**Konklusjon:** Bedriften har brutt personvernreglene ved manglende informasjon til de ansatte og manglende drøfting med tillitsvalgte. GPS-sporingen i seg selv kan være lovlig, men forutsetter at vilkårene overfor er oppfylt.`
    },
    {
      id: 'rtl2-6-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-4-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvor lenge kan opptak fra kameraovervåking normalt lagres etter personopplysningsloven?',
        options: [
          { id: 'a', text: '24 timer', isCorrect: false },
          { id: 'b', text: '7 dager', isCorrect: true },
          { id: 'c', text: '30 dager', isCorrect: false },
          { id: 'd', text: 'Ubegrenset, så lenge det foreligger behandlingsgrunnlag', isCorrect: false }
        ],
        solution: 'Etter personopplysningsloven § 31 skal opptak fra kameraovervåking som hovedregel slettes senest 7 dager etter at opptaket ble gjort. Lengre lagringstid krever særskilt begrunnelse, for eksempel at opptaket dokumenterer en hendelse som er under etterforskning.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-6-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Personvern i digital hverdag

- **Sosiale medier** samler inn store mengder personopplysninger. Vilkårene for samtykke etter GDPR er ofte ikke oppfylt. Aldersgrensen for barns samtykke er 13 år i Norge.
- **Informasjonskapsler (cookies)** krever aktivt samtykke etter ekomloven § 2-7b, med unntak for teknisk nødvendige cookies. Forhåndsavkrysset samtykke er ugyldig.
- **Kameraovervåking** krever behandlingsgrunnlag, skilting og sletting av opptak etter 7 dager.
- **GPS-sporing** av ansatte kan være lovlig, men krever behandlingsgrunnlag, informasjon til de ansatte og drøfting med tillitsvalgte.
- **Bilder av andre** krever som hovedregel samtykke etter åndsverkloven § 104.
- Den digitale utviklingen stiller stadig nye krav til personvernreguleringen.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-6-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-4-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En butikkjede ønsker å bruke ansiktsgjenkjenning i butikkene for å identifisere kjente butikktyver. Drøft personvernrettslige problemstillinger knyttet til dette.',
        hints: [
          'Tenk på at ansiktsgjenkjenning innebærer behandling av biometriske data.',
          'Vurder om alle kunders personvern berøres, ikke bare tyvenes.'
        ],
        solution: 'Ansiktsgjenkjenning innebærer behandling av biometriske data, som er særlige kategorier etter GDPR artikkel 9. Slik behandling er som hovedregel forbudt med mindre det foreligger et unntak. Problemstillinger: (1) Alle kunder må skannes for å identifisere de få som er butikktyver – dette rammer et stort antall uskyldige. (2) Biometriske data er svært sensitive og kan ikke endres ved datalekkasje. (3) Det kreves en DPIA. (4) Det er tvilsomt om butikkjedens berettigede interesse i å forebygge tyveri veier tyngre enn kundenes personvern. (5) Mindre inngripende tiltak (vektere, tradisjonelt kamera) er tilgjengelige. Konklusjonen er at tiltaket sannsynligvis ikke er lovlig etter GDPR.'
      }
    },
    {
      id: 'rtl2-6-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-4-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva fastslo EU-domstolen i Planet49-dommen om cookie-samtykke?',
        options: [
          { id: 'a', text: 'At nettsider ikke trenger å be om samtykke til cookies', isCorrect: false },
          { id: 'b', text: 'At forhåndsavkrysset samtykke er gyldig dersom brukeren ikke protesterer', isCorrect: false },
          { id: 'c', text: 'At samtykke krever en aktiv handling og forhåndsavkrysset samtykke er ugyldig', isCorrect: true },
          { id: 'd', text: 'At bare offentlige nettsider trenger cookie-samtykke', isCorrect: false }
        ],
        solution: 'I Planet49-dommen (C-673/17) slo EU-domstolen fast at samtykke til cookies krever en aktiv handling fra brukeren. Forhåndsavkryssede bokser utgjør ikke gyldig samtykke. Brukeren må ha en reell mulighet til å velge bort ikke-nødvendige cookies.'
      }
    },
    {
      id: 'rtl2-6-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-4-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft personvernrettslige utfordringer ved bruk av sosiale medier for ungdom. Vurder både de registrertes rettigheter og plattformenes plikter.',
        hints: [
          'Tenk på samtykke, aldersgrenser og profilering.',
          'Vurder om unge fullt ut forstår konsekvensene av datainnsamlingen.'
        ],
        solution: 'Personvernrettslige utfordringer ved unges bruk av sosiale medier: (1) Samtykke – unge under 13 år kan ikke samtykke selv, men aldersverifisering er ofte svak. Spørsmålet er om samtykke fra 13-åringer reelt er «informert». (2) Profilering – plattformene lager detaljerte profiler basert på unges adferd, noe som kan påvirke innhold og reklame de eksponeres for. GDPR artikkel 22 gir rett til å ikke bli gjenstand for automatiserte beslutninger. (3) Dataminimering – plattformene samler inn langt mer data enn nødvendig for å levere tjenesten. (4) Plattformenes plikter – de er behandlingsansvarlige og plikter å informere, gi innsyn, sikre dataene og respektere den registrertes rettigheter. (5) Sletterett – unge bør ha mulighet til å slette opplysninger de har delt, men digitalt innhold kan være vanskelig å fjerne fullstendig.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Informasjonskapsler (cookies)', definition: 'Små tekstfiler som lagres på brukerens enhet for å huske informasjon om besøket.' },
    { term: 'Ekomloven § 2-7b', definition: 'Bestemmelse som krever samtykke for lagring av cookies, med unntak for teknisk nødvendige.' },
    { term: 'Profilering', definition: 'Automatisert behandling av personopplysninger for å analysere eller forutsi en persons adferd (GDPR artikkel 4 nr. 4).' },
    { term: 'Åndsverkloven § 104', definition: 'Bestemmelse om retten til eget bilde – forbyr publisering av personbilder uten samtykke.' },
    { term: 'Kameraovervåking', definition: 'Vedvarende eller regelmessig overvåking med fjernbetjent kamera, regulert av GDPR og personopplysningsloven.' },
    { term: 'Lokasjonsdata', definition: 'Data som viser geografisk plassering, generert av mobiltelefon eller GPS-utstyr.' }
  ],
};

// ============================================================================
// KAPITTEL 6.5: IKT-kriminalitet og cybersikkerhet
// ============================================================================

export const CHAPTER_RETTSLAERE_2_6_5: TextbookChapter = {
  id: 'rettslaere-2-6-5',
  courseId: 'rettslaere-2',
  chapterNumber: '6.5',
  title: 'IKT-kriminalitet og cybersikkerhet',
  description: 'Strafferettslige bestemmelser om datainnbrudd, identitetstyveri, hacking og annen IKT-kriminalitet, samt juridiske rammer for cybersikkerhet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke sentrale regler om personvern og utforske juridiske problemstillinger som oppstår i forbindelse med bruk av informasjons- og kommunikasjonsteknologi'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-6-5-intro',
      type: 'text',
      content: `## IKT-kriminalitet og cybersikkerhet

Den digitale utviklingen har skapt nye former for kriminalitet. **IKT-kriminalitet** (også kalt datakriminalitet eller cyberkriminalitet) omfatter straffbare handlinger som begås ved hjelp av, eller rettet mot, informasjons- og kommunikasjonsteknologi.

Norsk straffelov inneholder en rekke bestemmelser som rammer IKT-kriminalitet, blant annet forbud mot datainnbrudd, identitetskrenkelse og skadeverk mot datasystemer. I tillegg stiller lovgivningen krav til cybersikkerhet – det vil si tiltak for å beskytte datasystemer, nettverk og data mot angrep.

IKT-kriminalitet er ofte grenseoverskridende: en hacker i ett land kan angripe systemer i et annet land, noe som skaper utfordringer for etterforskning og straffeforfølgning. Internasjonalt samarbeid er derfor sentralt, blant annet gjennom **Budapestkonvensjonen om IKT-kriminalitet** (2001) som Norge har ratifisert.

I dette kapittelet skal du lære om de viktigste strafferettslige bestemmelsene om IKT-kriminalitet og om de juridiske rammene for cybersikkerhet.`
    },

    // --- BLOKK 1: Datainnbrudd og hacking ---
    {
      id: 'rtl2-6-5-def-1',
      type: 'definition',
      title: 'Datainnbrudd – straffeloven § 204',
      content: `**Straffeloven § 204** rammer **datainnbrudd** (ulovlig tilgang til datasystem):

> «Med bot eller fengsel inntil 2 år straffes den som ved å bryte en beskyttelse eller ved annen uberettiget fremgangsmåte skaffer seg tilgang til et datasystem.»

**Sentrale vilkår:**

- **Datasystem** – et system for elektronisk behandling av data, herunder datamaskiner, servere, mobiltelefoner, nettverksutstyr og skyløsninger
- **Beskyttelse** – systemet må ha en form for beskyttelse, for eksempel passord, brannmur eller kryptering
- **Uberettiget tilgang** – gjerningspersonen må ha skaffet seg tilgang uten rett til det

**Straffeloven § 205** rammer **grovt datainnbrudd** med fengsel inntil 6 år. Ved vurderingen av om datainnbruddet er grovt, legges det blant annet vekt på:
- Om det er voldt vesentlig skade
- Om handlingen har rammet et stort antall datasystemer
- Om det er skaffet tilgang til særlig sensitiv informasjon (helseopplysninger, militære data)

**Forsøk** på datainnbrudd er straffbart (straffeloven § 16).`
    },
    {
      id: 'rtl2-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Datainnbrudd i skolens system',
      problem: 'Eleven Thomas finner ut lærerens passord til skolens karaktersystem ved å se over skulderen hennes. Han logger inn og endrer sine egne karakterer. Vurder om Thomas har begått et straffbart datainnbrudd etter straffeloven § 204.',
      solution: `**Analyse etter straffeloven § 204:**

**Datasystem:** Skolens karaktersystem er et datasystem for elektronisk behandling av data.

**Beskyttelse:** Systemet er beskyttet med passord. Selv om Thomas skaffet seg passordet ved observasjon (shoulder surfing), er systemet likevel beskyttet.

**Uberettiget tilgang:** Thomas er ikke berettiget til å logge inn i karaktersystemet med lærerens brukerkonto. Han har skaffet seg tilgang ved en **uberettiget fremgangsmåte** – å bruke et passord han har tilegnet seg uten tillatelse.

**Endring av karakterer:** I tillegg til selve datainnbruddet har Thomas endret data i systemet, noe som kan utgjøre **dataskadeverk** etter straffeloven § 206 (å uberettiget endre, slette eller ødelegge data).

**Konklusjon:** Thomas har begått datainnbrudd etter straffeloven § 204 og kan i tillegg straffes for dataskadeverk etter § 206. Strafferammen for ordinært datainnbrudd er bot eller fengsel inntil 2 år.`
    },
    {
      id: 'rtl2-6-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken bestemmelse i straffeloven rammer datainnbrudd?',
        options: [
          { id: 'a', text: 'Straffeloven § 321 om tyveri', isCorrect: false },
          { id: 'b', text: 'Straffeloven § 204 om datainnbrudd', isCorrect: true },
          { id: 'c', text: 'Straffeloven § 185 om hatefulle ytringer', isCorrect: false },
          { id: 'd', text: 'Straffeloven § 291 om voldtekt', isCorrect: false }
        ],
        solution: 'Straffeloven § 204 rammer datainnbrudd – det vil si å skaffe seg uberettiget tilgang til et datasystem ved å bryte en beskyttelse eller ved annen uberettiget fremgangsmåte. Strafferammen er bot eller fengsel inntil 2 år. Grovt datainnbrudd etter § 205 har strafferamme på fengsel inntil 6 år.'
      }
    },

    // --- BLOKK 2: Identitetskrenkelse og svindel ---
    {
      id: 'rtl2-6-5-def-2',
      type: 'definition',
      title: 'Identitetskrenkelse og nettsvindel',
      content: `**Straffeloven § 202** rammer **identitetskrenkelse** (identitetstyveri):

> «Med bot eller fengsel inntil 2 år straffes den som uberettiget setter seg i besittelse av en annens identitetsbevis, eller opptrer med en annens identitet eller en identitet som er lett å forveksle med en annens identitet, og derved
> a) oppnår en uberettiget vinning for seg eller andre, eller
> b) påfører en annen tap eller ulempe.»

**Typiske former for identitetskrenkelse:**

- **ID-tyveri:** Bruke en annens personopplysninger (navn, fødselsnummer, BankID) til å opprette lån, kontoer eller abonnementer
- **Phishing:** Sende falske e-poster eller meldinger som utgir seg for å komme fra banker, offentlige myndigheter eller andre troverdige avsendere for å lure til seg innloggingsopplysninger
- **Falske profiler:** Opprette profiler i sosiale medier i en annens navn

**Andre relevante bestemmelser:**

- **Straffeloven § 371** (bedrageri): Å skaffe seg uberettiget vinning ved å villede en person, for eksempel ved nettsvindel
- **Straffeloven § 206** (dataskadeverk): Å uberettiget endre, slette, skade eller ødelegge data
- **Straffeloven § 201** (uberettiget befatning med tilgangsdata): Å anskaffe, besitte eller gjøre tilgjengelig passord eller andre tilgangsdata for å begå straffbare handlinger`
    },
    {
      id: 'rtl2-6-5-example-2',
      type: 'example',
      title: 'Eksempel: Phishing-angrep',
      problem: 'Kari mottar en e-post som ser ut som den kommer fra banken hennes. E-posten ber henne klikke på en lenke og oppgi BankID-opplysningene sine for å «verifisere kontoen». Kari gjør dette, og gjerningspersonene bruker opplysningene til å overføre 150 000 kr fra kontoen hennes. Hvilke straffebud kan være overtrådt?',
      solution: `**Analyse:**

**1. Identitetskrenkelse (straffeloven § 202):**
Gjerningspersonene har opptrådt med bankens identitet (sendt e-post som utgir seg for å komme fra banken) for å oppnå en uberettiget vinning. Bestemmelsen er overtrådt.

**2. Bedrageri (straffeloven § 371):**
Gjerningspersonene har villedet Kari til å oppgi sine bankopplysninger og dermed skaffet seg en uberettiget vinning på 150 000 kr. Bedrageriet er **grovt** etter § 372 dersom beløpet er betydelig.

**3. Datainnbrudd (straffeloven § 204):**
Gjerningspersonene har brukt de tilegnede opplysningene til å logge inn på Karis bankkonto – et datasystem beskyttet med BankID. Dette utgjør uberettiget tilgang.

**4. Uberettiget befatning med tilgangsdata (straffeloven § 201):**
Gjerningspersonene har skaffet seg og brukt Karis tilgangsdata (BankID) uten rett.

**Konklusjon:** Handlingen rammes av flere straffebud. I praksis vil gjerningspersonene normalt tiltales for grovt bedrageri som den mest alvorlige forbrytelsen, med strafferamme på fengsel inntil 6 år.`
    },
    {
      id: 'rtl2-6-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-5-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med «phishing» og hvilke strafferettslige bestemmelser som kan ramme slik virksomhet.',
        hints: [
          'Tenk på hva gjerningspersonen gjør og hvem vedkommende utgir seg for.',
          'Vurder bestemmelsene om identitetskrenkelse, bedrageri og datainnbrudd.'
        ],
        solution: 'Phishing er en form for nettsvindel der gjerningspersoner sender falske e-poster, SMS-er eller meldinger som utgir seg for å komme fra en troverdig avsender (bank, offentlig myndighet, nettbutikk) for å lure mottakeren til å oppgi sensitive opplysninger som passord, BankID eller kortinformasjon. Phishing kan rammes av: (1) identitetskrenkelse (straffeloven § 202) – gjerningspersonen opptrer med en annens identitet for å oppnå vinning, (2) bedrageri (§ 371/372) – mottakeren villledes til å oppgi opplysninger som fører til økonomisk tap, (3) datainnbrudd (§ 204) – dersom de tilegnede opplysningene brukes til å logge inn i systemer, og (4) uberettiget befatning med tilgangsdata (§ 201).'
      }
    },

    // --- BLOKK 3: Cybersikkerhet og rettslige rammer ---
    {
      id: 'rtl2-6-5-def-3',
      type: 'definition',
      title: 'Cybersikkerhet – juridiske rammer',
      content: `**Cybersikkerhet** handler om å beskytte datasystemer, nettverk og data mot digitale angrep. Norsk lovgivning pålegger både offentlige og private aktører plikter for å sikre digital infrastruktur.

**Sentrale lover og rammeverk:**

- **Sikkerhetsloven** (lov 1. juni 2018 nr. 24): Regulerer vern av nasjonale sikkerhetsinteresser, herunder digital infrastruktur. Pålegger virksomheter som er omfattet, å gjennomføre risikovurderinger og iverksette sikkerhetstiltak.

- **GDPR artikkel 32** (sikkerhet ved behandling): Den behandlingsansvarlige og databehandleren skal gjennomføre «egnede tekniske og organisatoriske tiltak» for å sikre et sikkerhetsnivå som er tilpasset risikoen. Tiltak kan omfatte kryptering, tilgangskontroll, logging og sikkerhetskopiering.

- **Personopplysningsloven § 26** (avvikshåndtering): Ved brudd på personopplysningssikkerheten (databrudd) skal den behandlingsansvarlige varsle **Datatilsynet** uten ugrunnet opphold og senest innen **72 timer**. Dersom bruddet medfører høy risiko for de registrerte, skal også de berørte personene varsles.

- **Nasjonal sikkerhetsmyndighet (NSM):** Norges fagmyndighet for digital sikkerhet i nasjonal sammenheng. NSM gir råd og veiledning om cybersikkerhet.

- **Budapestkonvensjonen** (2001): Europarådets konvensjon om IKT-kriminalitet. Gir grunnlag for internasjonalt samarbeid om etterforskning og straffeforfølgning av datakriminalitet over landegrensene.`
    },
    {
      id: 'rtl2-6-5-example-3',
      type: 'example',
      title: 'Eksempel: Databrudd og varslingsplikt',
      problem: 'En helseregion oppdager at en hacker har fått tilgang til pasientjournaler for 50 000 pasienter. Hackeren har lastet ned journalene og truer med å offentliggjøre dem dersom regionen ikke betaler 5 millioner kroner i løsepenger (ransomware). Hvilke juridiske plikter har helseregionen?',
      solution: `**Analyse:**

**1. Varslingsplikt til Datatilsynet (GDPR artikkel 33 / personopplysningsloven § 26):**
Helseregionen har plikt til å varsle Datatilsynet om databruddet uten ugrunnet opphold og senest innen **72 timer** etter at bruddet ble oppdaget. Varselet skal inneholde beskrivelse av bruddet, kategorier og antall berørte, sannsynlige konsekvenser og tiltak som er iverksatt.

**2. Varslingsplikt til de berørte (GDPR artikkel 34):**
Fordi bruddet gjelder helseopplysninger (særlige kategorier) og medfører **høy risiko** for de registrertes rettigheter, plikter helseregionen å varsle de berørte pasientene direkte.

**3. Politianmeldelse:**
Hackeren har begått **datainnbrudd** (straffeloven § 204/205), og utpressingen utgjør **utpressing** (straffeloven § 330). Helseregionen bør anmelde forholdet til politiet.

**4. Sikkerhetstiltak (GDPR artikkel 32):**
Helseregionen plikter å iverksette tiltak for å begrense skadevirkningene og forebygge nye angrep.

**5. Betaling av løsepenger:**
Det anbefales normalt **ikke** å betale løsepenger, da dette finansierer kriminell virksomhet og ikke gir garanti for at dataene ikke offentliggjøres.

**Konklusjon:** Helseregionen må varsle Datatilsynet innen 72 timer, varsle pasientene direkte, anmelde forholdet og iverksette sikkerhetstiltak.`
    },
    {
      id: 'rtl2-6-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-5-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Innen hvilken frist skal den behandlingsansvarlige varsle Datatilsynet om et databrudd?',
        options: [
          { id: 'a', text: 'Innen 24 timer', isCorrect: false },
          { id: 'b', text: 'Innen 72 timer', isCorrect: true },
          { id: 'c', text: 'Innen 7 dager', isCorrect: false },
          { id: 'd', text: 'Innen 30 dager', isCorrect: false }
        ],
        solution: 'Etter GDPR artikkel 33 og personopplysningsloven § 26 skal den behandlingsansvarlige varsle Datatilsynet om brudd på personopplysningssikkerheten uten ugrunnet opphold og senest innen 72 timer etter at bruddet ble oppdaget. Dersom varselet gis etter fristen, skal forsinkelsen begrunnes.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-6-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – IKT-kriminalitet og cybersikkerhet

- **Datainnbrudd** (straffeloven § 204) er å skaffe seg uberettiget tilgang til et datasystem. Grovt datainnbrudd (§ 205) har strafferamme på 6 år.
- **Identitetskrenkelse** (straffeloven § 202) rammer uberettiget bruk av en annens identitet for å oppnå vinning eller påføre tap.
- **Phishing** er en form for nettsvindel som kan rammes av bestemmelsene om identitetskrenkelse, bedrageri og datainnbrudd.
- **Dataskadeverk** (straffeloven § 206) rammer den som uberettiget endrer, sletter eller ødelegger data.
- **Cybersikkerhet** er regulert gjennom GDPR artikkel 32 (sikkerhetstiltak), sikkerhetsloven og personopplysningsloven.
- Ved **databrudd** har den behandlingsansvarlige plikt til å varsle Datatilsynet innen 72 timer og de berørte dersom risikoen er høy.
- **Budapestkonvensjonen** gir grunnlag for internasjonalt samarbeid om bekjempelse av IKT-kriminalitet.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-6-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-5-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En person oppretter en falsk Facebook-profil i en kjent journalists navn og publiserer usanne påstander. Drøft hvilke strafferettslige bestemmelser som kan være overtrådt.',
        hints: [
          'Vurder straffeloven § 202 om identitetskrenkelse.',
          'Tenk også på bestemmelser om ærekrenkelse.'
        ],
        solution: 'Den falske profilen kan rammes av: (1) Identitetskrenkelse (straffeloven § 202) – vedkommende opptrer med journalistens identitet og påfører journalisten ulempe. (2) Krenkelse av privatlivets fred (straffeloven § 267) – dersom de usanne påstandene krenker journalistens privatliv. (3) Hensynsløs adferd (straffeloven § 266) – dersom handlingen innebærer gjentatt eller vedvarende krenkende adferd. Journalisten kan også kreve erstatning for ikke-økonomisk skade (oppreisning) etter skadeserstatningsloven § 3-6.'
      }
    },
    {
      id: 'rtl2-6-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-5-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «dataskadeverk» etter straffeloven § 206?',
        options: [
          { id: 'a', text: 'Å ødelegge en datamaskin fysisk', isCorrect: false },
          { id: 'b', text: 'Å uberettiget endre, slette, skade eller ødelegge data', isCorrect: true },
          { id: 'c', text: 'Å kopiere data uten tillatelse', isCorrect: false },
          { id: 'd', text: 'Å bruke en annens datamaskin uten tillatelse', isCorrect: false }
        ],
        solution: 'Dataskadeverk etter straffeloven § 206 innebærer å uberettiget endre, slette, skade eller ødelegge data som tilhører en annen. Dette omfatter for eksempel å slette filer, introdusere skadevare (virus, ransomware) eller endre innholdet i databaser. Fysisk ødeleggelse av datautstyr rammes av de alminnelige bestemmelsene om skadeverk (§ 351).'
      }
    },
    {
      id: 'rtl2-6-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-6-5-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft de juridiske utfordringene ved å etterforske og straffeforfølge IKT-kriminalitet som skjer over landegrensene. Hvordan bidrar Budapestkonvensjonen til å løse disse utfordringene?',
        hints: [
          'Tenk på jurisdiksjon og bevisproblemer.',
          'Vurder behovet for internasjonalt samarbeid.'
        ],
        solution: 'Grenseoverskridende IKT-kriminalitet skaper flere juridiske utfordringer: (1) Jurisdiksjon – strafferetten er i utgangspunktet territorialt begrenset; spørsmålet er hvilket lands rett som gjelder når gjerningspersonen er i ett land og offeret i et annet. (2) Bevisinnhenting – digitale bevis kan lagres i tredjeland, og tilgang krever rettshjelp fra det aktuelle landets myndigheter, noe som er tidkrevende. (3) Anonymitet – gjerningspersoner kan bruke VPN, Tor eller andre anonymiseringstjenester. (4) Ulike rettslige standarder – land har ulik lovgivning om datakriminalitet. Budapestkonvensjonen bidrar ved å: (a) harmonisere straffelovgivningen om IKT-kriminalitet i medlemsstatene, (b) etablere prosessuelle regler for rask bevisinnhenting over landegrenser, (c) opprette et nettverk for 24/7-kontaktpunkter for hastesaker, og (d) forplikte stater til gjensidig rettshjelp ved etterforskning av datakriminalitet.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Datainnbrudd', definition: 'Uberettiget tilgang til et datasystem (straffeloven § 204).' },
    { term: 'Identitetskrenkelse', definition: 'Uberettiget bruk av en annens identitet for å oppnå vinning eller påføre tap (straffeloven § 202).' },
    { term: 'Phishing', definition: 'Nettsvindel der gjerningspersoner utgir seg for å være en troverdig avsender for å lure til seg opplysninger.' },
    { term: 'Dataskadeverk', definition: 'Uberettiget endring, sletting eller ødeleggelse av data (straffeloven § 206).' },
    { term: 'Ransomware', definition: 'Skadevare som krypterer offerets data og krever løsepenger for å låse dem opp.' },
    { term: 'Budapestkonvensjonen', definition: 'Europarådets konvensjon om IKT-kriminalitet (2001), som gir grunnlag for internasjonalt samarbeid.' }
  ],
};

// ============================================================================
// Samlet eksport for del 6 (kapittel 6.1–6.5)
// ============================================================================

export const RETTSLAERE_2_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_2_6_1,
  CHAPTER_RETTSLAERE_2_6_2,
  CHAPTER_RETTSLAERE_2_6_3,
  CHAPTER_RETTSLAERE_2_6_4,
  CHAPTER_RETTSLAERE_2_6_5,
];
