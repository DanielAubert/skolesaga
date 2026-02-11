/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Rettslære 2 VG3
 *
 * Seksjon 5: Erstatningsrett (Kapittel 5.1–5.5)
 * Denne filen inneholder kapittel 5.1–5.5 (komplett).
 *
 * LK20 kompetansemål:
 * - «bruke grunnleggende vilkår til å vurdere spørsmål om erstatning»
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1: Grunnvilkår for erstatning
// ============================================================================

export const CHAPTER_RETTSLAERE_2_5_1: TextbookChapter = {
  id: 'rettslaere-2-5-1',
  courseId: 'rettslaere-2',
  chapterNumber: '5.1',
  title: 'Grunnvilkår for erstatning',
  description: 'De tre vilkårene for erstatning: ansvarsgrunnlag, årsakssammenheng og økonomisk tap.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke grunnleggende vilkår til å vurdere spørsmål om erstatning'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-5-1-intro',
      type: 'text',
      content: `## Grunnvilkår for erstatning

Erstatningsretten er den delen av rettsordenen som regulerer når en person kan kreve økonomisk kompensasjon for skade eller tap som en annen har påført vedkommende. Erstatning skal gjenopprette den økonomiske situasjonen skadelidte ville vært i dersom skaden ikke hadde skjedd – det såkalte **restitusjonsprinsippet**.

Mens strafferetten handler om statens reaksjon mot lovbrudd, handler erstatningsretten om forholdet mellom **skadevolder** og **skadelidte**. Formålet er ikke å straffe, men å flytte det økonomiske tapet fra den som er rammet til den som er ansvarlig for skaden.

I norsk rett bygger erstatningsansvaret på tre grunnleggende vilkår som alle må være oppfylt for at erstatning kan tilkjennes. Disse vilkårene er utviklet gjennom langvarig rettspraksis og juridisk teori, og er i dag delvis lovfestet i skadeserstatningsloven av 1969 (lov 13. juni 1969 nr. 26 om skadeserstatning).`
    },

    // --- BLOKK 1: De tre grunnvilkårene ---
    {
      id: 'rtl2-5-1-def-1',
      type: 'definition',
      title: 'De tre grunnvilkårene for erstatning',
      content: `For at skadelidte skal ha krav på erstatning, må **tre kumulative vilkår** være oppfylt:

1. **Ansvarsgrunnlag** – Det må foreligge et rettslig grunnlag for å holde skadevolder ansvarlig. De viktigste ansvarsgrunnlagene er culpaansvaret (uaktsomhetsansvar), objektivt ansvar og arbeidsgiveransvar.

2. **Årsakssammenheng** – Det må være årsakssammenheng mellom skadevolders handling (eller unnlatelse) og skaden som har oppstått. Handlingen må være en nødvendig og tilstrekkelig betingelse for skaden.

3. **Økonomisk tap** – Skadelidte må ha lidt et tap som kan måles i penger. Erstatning skal kompensere for et reelt økonomisk tap, ikke gi skadelidte en berikelse.

Alle tre vilkårene er **kumulative**: mangler ett vilkår, kan erstatning ikke tilkjennes.`
    },
    {
      id: 'rtl2-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Grunnvilkårene i praksis',
      problem: 'Henrik kjører bil og ser ned på mobiltelefonen sin. Han ser ikke at fotgjengeren Astrid krysser veien på grønn mann, og kjører på henne. Astrid bryter ankelen og blir sykemeldt i tre måneder. Vurder om de tre grunnvilkårene for erstatning er oppfylt.',
      solution: `**Analyse av de tre grunnvilkårene:**

**1. Ansvarsgrunnlag:**
Henrik kjørte bil mens han så på mobilen. Dette er uaktsomt – han handlet i strid med det en alminnelig forsvarlig bilist ville gjort. Culpaansvaret (uaktsomhetsansvaret) er oppfylt.

**2. Årsakssammenheng:**
Det var Henriks uoppmerksomhet som førte til at han kjørte på Astrid. Dersom Henrik hadde sett på veien, ville han sett Astrid og kunnet stoppe. Årsakssammenhengen er klar.

**3. Økonomisk tap:**
Astrid har lidt tap i form av behandlingsutgifter (sykehus, fysioterapi) og inntektstap under sykemeldingsperioden. Hun har et dokumenterbart økonomisk tap.

**Konklusjon:** Alle tre grunnvilkårene er oppfylt. Astrid har krav på erstatning fra Henrik.`
    },
    {
      id: 'rtl2-5-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke tre vilkår må være oppfylt for at skadelidte skal ha krav på erstatning?',
        options: [
          { id: 'a', text: 'Forsett, årsakssammenheng og straffeskyld', isCorrect: false },
          { id: 'b', text: 'Ansvarsgrunnlag, årsakssammenheng og økonomisk tap', isCorrect: true },
          { id: 'c', text: 'Uaktsomhet, dokumentasjon og dom', isCorrect: false },
          { id: 'd', text: 'Lovhjemmel, skyld og tilregnelighet', isCorrect: false }
        ],
        solution: 'De tre grunnvilkårene for erstatning er: (1) ansvarsgrunnlag – det må finnes et rettslig grunnlag for ansvar, (2) årsakssammenheng – det må være sammenheng mellom handlingen og skaden, og (3) økonomisk tap – skadelidte må ha lidt et målbart økonomisk tap. Alle tre må være oppfylt samtidig.'
      }
    },

    // --- BLOKK 2: Forskjellen mellom straff og erstatning ---
    {
      id: 'rtl2-5-1-def-2',
      type: 'definition',
      title: 'Erstatningsrett vs. strafferett',
      content: `Erstatningsrett og strafferett har ulike formål og ulike vilkår:

| | **Strafferett** | **Erstatningsrett** |
|---|---|---|
| **Formål** | Samfunnets reaksjon mot lovbrudd | Gjenopprette skadelidtes økonomiske tap |
| **Parter** | Staten mot tiltalte | Skadelidte mot skadevolder |
| **Skyldkrav** | Forsett eller uaktsomhet (fire straffbarhetsbetingelser) | Uaktsomhet er tilstrekkelig (tre grunnvilkår) |
| **Beviskrav** | Bevist utover enhver rimelig tvil | Sannsynlighetsovervekt (mer enn 50 %) |
| **Resultat** | Straff (fengsel, bot, samfunnsstraff) | Erstatning i penger |

En og samme handling kan utløse **både** straffeansvar og erstatningsansvar. Dersom Henrik i eksempelet over dømmes for uaktsom kjøring (straffeloven § 280), kan Astrid i tillegg kreve erstatning for sitt økonomiske tap.`
    },
    {
      id: 'rtl2-5-1-example-2',
      type: 'example',
      title: 'Eksempel: Beviskrav',
      problem: 'Etter en trafikkulykke hevder Lars at det var Tone som kjørte på rødt lys. Tone bestrider dette. I en straffesak frikjennes Tone fordi retten ikke finner det bevist «utover enhver rimelig tvil» at hun kjørte på rødt. Kan Lars likevel kreve erstatning?',
      solution: `**Analyse:**

I en erstatningssak gjelder et lavere beviskrav enn i straffesaker. Det er tilstrekkelig med **sannsynlighetsovervekt** – det vil si at det er mer sannsynlig enn ikke (over 50 %) at Tone kjørte på rødt.

Dersom retten i erstatningssaken finner det mer sannsynlig at Tone kjørte på rødt enn at hun ikke gjorde det, kan Lars tilkjennes erstatning – selv om Tone ble frifunnet i straffesaken.

Dette illustrerer at frifinnelse i straffesak ikke automatisk betyr frifinnelse i erstatningssak. Det mest kjente eksempelet internasjonalt er O.J. Simpson-saken (1995), der tiltalte ble frifunnet for drap, men senere dømt til å betale erstatning.`
    },
    {
      id: 'rtl2-5-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom beviskravet i straffesaker og erstatningssaker. Hvorfor er beviskravet forskjellig?',
        hints: [
          'Tenk over hva som står på spill for tiltalte i en straffesak versus en erstatningssak.',
          'Vurder formålet med de to rettsområdene.'
        ],
        solution: 'I straffesaker kreves bevist «utover enhver rimelig tvil», mens det i erstatningssaker er tilstrekkelig med sannsynlighetsovervekt (mer enn 50 %). Forskjellen skyldes at konsekvensene av en uriktig domfellelse er langt mer alvorlige i straffesaker (frihetsberøvelse), mens erstatningssaker handler om fordeling av et økonomisk tap mellom to private parter. Hensynet til rettssikkerhet tilsier at staten må ha sterkere bevis for å straffe en borger enn for å pålegge erstatningsansvar.'
      }
    },

    // --- BLOKK 3: Restitusjonsprinsippet ---
    {
      id: 'rtl2-5-1-def-3',
      type: 'definition',
      title: 'Restitusjonsprinsippet',
      content: `**Restitusjonsprinsippet** (gjenopprettingsprinsippet) er det bærende prinsippet i erstatningsretten. Det innebærer at erstatningen skal bringe skadelidte tilbake i den økonomiske stillingen vedkommende ville hatt dersom skaden ikke hadde skjedd.

Prinsippet har to sider:

- **Full erstatning:** Skadelidte skal få dekket hele det økonomiske tapet – verken mer eller mindre.
- **Ikke berikelse:** Erstatningen skal ikke sette skadelidte i en bedre økonomisk posisjon enn vedkommende ville hatt uten skaden.

Restitusjonsprinsippet er slått fast i Høyesteretts praksis og fremgår indirekte av skadeserstatningsloven § 3-1.`
    },
    {
      id: 'rtl2-5-1-example-3',
      type: 'example',
      title: 'Eksempel: Restitusjonsprinsippet',
      problem: 'Karis bil (verdi: 150 000 kr) blir totalvraket i en kollisjon forårsaket av Erik. Kari krever 250 000 kr i erstatning fordi hun ønsker å kjøpe en nyere bil. Hvor mye har Kari krav på?',
      solution: `**Analyse:**

Etter restitusjonsprinsippet skal Kari settes tilbake i den økonomiske stillingen hun ville vært i uten skaden. Bilens verdi var 150 000 kr.

Kari har krav på **150 000 kr** – ikke 250 000 kr. Erstatningen skal dekke det faktiske tapet, ikke gi Kari en bedre bil enn hun hadde. Å tilkjenne 250 000 kr ville innebære en **berikelse** i strid med restitusjonsprinsippet.

Dersom Kari i tillegg har hatt utgifter til leiebil i perioden uten bil, og dette er et nødvendig og påregnelig følgetap, kan hun også kreve erstatning for dette.`
    },
    {
      id: 'rtl2-5-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-1-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer restitusjonsprinsippet i erstatningsretten?',
        options: [
          { id: 'a', text: 'Skadelidte skal straffes med et beløp tilsvarende skaden', isCorrect: false },
          { id: 'b', text: 'Skadevolder skal betale dobbelt opp som en avskrekkende effekt', isCorrect: false },
          { id: 'c', text: 'Skadelidte skal settes tilbake i den økonomiske stillingen vedkommende ville hatt uten skaden', isCorrect: true },
          { id: 'd', text: 'Skadelidte har krav på erstatning bare dersom skadevolder handlet med forsett', isCorrect: false }
        ],
        solution: 'Restitusjonsprinsippet innebærer at erstatningen skal gjenopprette skadelidtes økonomiske stilling – verken mer eller mindre. Formålet er at skadelidte skal stå som om skaden aldri hadde skjedd. Prinsippet forhindrer både underkompensasjon og berikelse.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-5-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Grunnvilkår for erstatning

- Erstatningsretten regulerer når en person kan kreve økonomisk kompensasjon for skade påført av en annen.
- Tre **kumulative grunnvilkår** må være oppfylt: **ansvarsgrunnlag**, **årsakssammenheng** og **økonomisk tap**.
- Erstatningsrett skiller seg fra strafferett i formål (gjenoppretting vs. straff), beviskrav (sannsynlighetsovervekt vs. utover enhver rimelig tvil) og parter (skadelidte vs. skadevolder mot staten vs. tiltalte).
- **Restitusjonsprinsippet** er det bærende prinsippet: skadelidte skal settes tilbake i den økonomiske stillingen vedkommende ville hatt uten skaden.
- En og samme handling kan utløse både straffe- og erstatningsansvar.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-5-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Silje er elektriker og gjør en feil ved installasjon av et sikringsskap hos familien Berge. Feilen fører til kortslutning og brann, og familiens stue får skader for 400 000 kr. Vurder om de tre grunnvilkårene for erstatning er oppfylt.',
        hints: [
          'Vurder hvert vilkår for seg: ansvarsgrunnlag, årsakssammenheng og økonomisk tap.',
          'Hva er faglig forsvarlig standard for en elektriker?'
        ],
        solution: '(1) Ansvarsgrunnlag: Silje handlet uaktsomt ved å gjøre en faglig feil – en kompetent elektriker ville ikke gjort denne feilen. Culpaansvaret er oppfylt. (2) Årsakssammenheng: Det var Siljes feilinstallasjon som førte til kortslutningen og brannen. Uten feilen ville brannen ikke oppstått. (3) Økonomisk tap: Familien Berge har dokumenterte skader for 400 000 kr. Alle tre vilkårene er oppfylt, og familien har krav på erstatning.'
      }
    },
    {
      id: 'rtl2-5-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-1-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Martin blir frikjent for uaktsom kjøring i en straffesak. Kan skadelidte likevel vinne frem med et erstatningskrav?',
        options: [
          { id: 'a', text: 'Nei, frikjennelse i straffesaken betyr automatisk frifinnelse i erstatningssaken', isCorrect: false },
          { id: 'b', text: 'Ja, fordi beviskravet i erstatningssaker er lavere enn i straffesaker', isCorrect: true },
          { id: 'c', text: 'Ja, men bare dersom Martin tilstår i ettertid', isCorrect: false },
          { id: 'd', text: 'Nei, straffesaken må ankes først', isCorrect: false }
        ],
        solution: 'Frikjennelse i straffesaken utelukker ikke erstatningsansvar. I straffesaker kreves bevis «utover enhver rimelig tvil», mens det i erstatningssaker er tilstrekkelig med sannsynlighetsovervekt. Det kan altså være tilstrekkelig bevist at Martin var uaktsom for erstatningsformål, selv om det ikke er bevist godt nok for straffansvar.'
      }
    },
    {
      id: 'rtl2-5-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for hva som menes med restitusjonsprinsippet i erstatningsretten. Diskuter om det finnes situasjoner der prinsippet ikke gir et rettferdig resultat.',
        hints: [
          'Tenk på tilfeller der skadelidte har immaterielle tap som er vanskelige å verdsette.',
          'Hva med tilfeller der den faktiske gjenopprettingen er umulig?'
        ],
        solution: 'Restitusjonsprinsippet innebærer at erstatningen skal bringe skadelidte tilbake til den økonomiske stillingen vedkommende ville hatt uten skaden. Prinsippet kan gi urettferdige resultater der (1) tap er vanskelige å beregne (for eksempel fremtidig inntektstap for unge mennesker), (2) tap er immaterielle (smerte, livskvalitet) som ikke fanges opp av ren økonomisk erstatning, og (3) gjenopprettelse er umulig (for eksempel tap av et unikt kunstverk). Lovgiver har derfor innført regler om ménerstatning og oppreisning som supplement til det rene restitusjonsprinsippet.'
      }
    },
    {
      id: 'rtl2-5-1-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-1-oppg-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det overordnede formålet med erstatningsretten?',
        options: [
          { id: 'a', text: 'Å straffe den som har voldt skade', isCorrect: false },
          { id: 'b', text: 'Å forebygge fremtidige skader', isCorrect: false },
          { id: 'c', text: 'Å gjenopprette skadelidtes økonomiske stilling', isCorrect: true },
          { id: 'd', text: 'Å sikre at skadevolder mister retten til å utøve sitt yrke', isCorrect: false }
        ],
        solution: 'Det overordnede formålet med erstatningsretten er å gjenopprette skadelidtes økonomiske stilling, slik at vedkommende stilles som om skaden aldri hadde skjedd. Dette kalles restitusjonsprinsippet. Erstatning er ikke straff – selv om erstatningsansvar i praksis også kan ha en preventiv effekt.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Erstatning', definition: 'Økonomisk kompensasjon for skade eller tap påført av en annen.' },
    { term: 'Ansvarsgrunnlag', definition: 'Rettslig grunnlag for å holde skadevolder erstatningsansvarlig.' },
    { term: 'Årsakssammenheng', definition: 'Krav om at skadevolders handling må ha forårsaket skaden.' },
    { term: 'Økonomisk tap', definition: 'Målbart tap i penger som skadelidte har lidt.' },
    { term: 'Restitusjonsprinsippet', definition: 'Prinsippet om at erstatning skal gjenopprette skadelidtes økonomiske stilling.' },
    { term: 'Sannsynlighetsovervekt', definition: 'Beviskrav i erstatningssaker: mer sannsynlig enn ikke (over 50 %).' }
  ],
};

// ============================================================================
// KAPITTEL 5.2: Ansvarsgrunnlag
// ============================================================================

export const CHAPTER_RETTSLAERE_2_5_2: TextbookChapter = {
  id: 'rettslaere-2-5-2',
  courseId: 'rettslaere-2',
  chapterNumber: '5.2',
  title: 'Ansvarsgrunnlag',
  description: 'Culpanormen (uaktsomhetsansvar), objektivt ansvar og arbeidsgiveransvar.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke grunnleggende vilkår til å vurdere spørsmål om erstatning'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-5-2-intro',
      type: 'text',
      content: `## Ansvarsgrunnlag

Det første grunnvilkåret for erstatning er at det må foreligge et **ansvarsgrunnlag** – et rettslig grunnlag for å holde skadevolder ansvarlig for skaden. Norsk erstatningsrett opererer med tre hovedtyper av ansvarsgrunnlag:

1. **Culpaansvaret** (skyldansvaret/uaktsomhetsansvaret) – hovedregelen i norsk erstatningsrett
2. **Objektivt ansvar** (ansvar uten skyld) – ansvar for særlig risikofylt virksomhet
3. **Arbeidsgiveransvaret** – arbeidsgivers ansvar for skade voldt av arbeidstaker

Valget av ansvarsgrunnlag avhenger av situasjonen. I mange tilfeller vil flere ansvarsgrunnlag kunne påberopes samtidig, og skadelidte kan velge det grunnlaget som er mest gunstig.`
    },

    // --- BLOKK 1: Culpaansvaret ---
    {
      id: 'rtl2-5-2-def-1',
      type: 'definition',
      title: 'Culpaansvaret (uaktsomhetsansvaret)',
      content: `**Culpaansvaret** er hovedregelen for erstatningsansvar i norsk rett. Culpa er latin og betyr «skyld». Ansvarsgrunnlaget er ulovfestet og bygger på langvarig rettspraksis.

Culpanormen innebærer at den som ved **uaktsomhet** (culpa) volder skade på en annens person eller eiendom, er erstatningsansvarlig. Vurderingen av om det foreligger uaktsomhet beror på om skadevolder har handlet i strid med det en **alminnelig fornuftig person** ville gjort i samme situasjon – den såkalte **bonus pater familias**-standarden.

Sentrale momenter i culpavurderingen:

- **Handlingens skadeevne:** Hvor stor var risikoen for skade?
- **Skadeevnens synbarhet:** Burde skadevolder forstått at handlingen kunne medføre skade?
- **Handlingsalternativer:** Hadde skadevolder rimelige alternativer som ville unngått skaden?
- **Tidspress og nødssituasjon:** Handlet skadevolder under press?
- **Skadevolders profesjon:** Fagfolk bedømmes strengere enn privatpersoner (profesjonsansvar).`
    },
    {
      id: 'rtl2-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Culpavurdering',
      problem: 'Tannlege Johansen borer i feil tann under en behandling fordi han ikke sjekket journalen grundig nok. Pasienten må gjennomgå ekstra behandling og har smerter i to uker. Er tannlegen erstatningsansvarlig etter culpanormen?',
      solution: `**Culpavurdering:**

**Handlingens skadeevne:** Å bore i feil tann innebærer en direkte fysisk skade på pasienten. Skadeevnen er betydelig.

**Skadeevnens synbarhet:** En tannlege må vite at det å bore i feil tann vil påføre pasienten skade. Risikoen er åpenbar for en fagperson.

**Handlingsalternativer:** Tannlegen kunne og burde ha sjekket journalen før behandlingen. Dette er en enkel og rutinemessig handling.

**Profesjonsansvar:** Tannlegen bedømmes etter den standarden som gjelder for en alminnelig dyktig og samvittighetsfull tannlege. Å unnlate å sjekke journalen er et klart avvik fra denne standarden.

**Konklusjon:** Tannlegen har handlet uaktsomt (culpøst). Culpaansvaret er oppfylt.`
    },
    {
      id: 'rtl2-5-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr culpa i erstatningsrettslig sammenheng?',
        options: [
          { id: 'a', text: 'Forsettlig skadevoldelse med hensikt', isCorrect: false },
          { id: 'b', text: 'Uaktsomhet – at skadevolder har handlet klanderverdig', isCorrect: true },
          { id: 'c', text: 'Ansvar uten skyld for farlig virksomhet', isCorrect: false },
          { id: 'd', text: 'Arbeidsgivers ansvar for ansattes handlinger', isCorrect: false }
        ],
        solution: 'Culpa betyr «skyld» og refererer i erstatningsretten til uaktsomhet. Culpaansvaret innebærer at den som ved uaktsom (klanderverdig) atferd volder skade, er erstatningsansvarlig. Vurderingen bygger på hva en alminnelig fornuftig person ville gjort i samme situasjon.'
      }
    },

    // --- BLOKK 2: Objektivt ansvar ---
    {
      id: 'rtl2-5-2-def-2',
      type: 'definition',
      title: 'Objektivt ansvar',
      content: `**Objektivt ansvar** innebærer erstatningsansvar **uten krav om skyld** (uaktsomhet) hos skadevolder. Ansvaret kan være lovfestet eller ulovfestet.

**Lovfestet objektivt ansvar:**
- **Bilansvarslova** (lov 3. februar 1961 om ansvar for skade som motorvogner gjer) – eieren av en motorvogn er ansvarlig for skade som kjøretøyet volder, uavhengig av skyld
- **Produktansvarsloven** (lov 23. desember 1988 nr. 104) – produsenten er ansvarlig for skade som et defekt produkt volder
- **Forurensningsloven** § 55 – forurenseren er ansvarlig for skade som følge av forurensning

**Ulovfestet objektivt ansvar:**
Utviklet gjennom rettspraksis. Gjelder der skadevolder har skapt en **ekstraordinær risiko** gjennom sin virksomhet. Vilkårene er:
- Virksomheten innebærer en **stadig, typisk og ekstraordinær risiko** for skade
- Risikoen er skapt av skadevolder og ligger **utenfor skadelidtes kontroll**

Begrunnelsen for objektivt ansvar er at den som tjener på en risikofylt virksomhet, også bør bære risikoen for skade.`
    },
    {
      id: 'rtl2-5-2-example-2',
      type: 'example',
      title: 'Eksempel: Objektivt ansvar – bilansvar',
      problem: 'Morten kjører forsvarlig langs en landevei når et hjort plutselig løper ut i veien. Morten svinger unna, men bilen treffer Livs gjerde og ødelegger det. Morten har ikke handlet uaktsomt. Er han likevel erstatningsansvarlig?',
      solution: `**Analyse:**

Morten har ikke handlet uaktsomt – han reagerte som en alminnelig fornuftig bilist ville gjort. Culpaansvaret er derfor ikke oppfylt.

Men etter **bilansvarslova § 4** er eieren av motorvognen objektivt ansvarlig for skade som motorvognen «gjer». Ansvaret gjelder uavhengig av om føreren har utvist skyld. Det er tilstrekkelig at skaden er voldt av motorvognen.

Liv kan derfor kreve erstatning for gjerdet sitt med hjemmel i bilansvarslova. I praksis vil kravet rettes mot Mortens **ansvarsforsikringsselskap**, da bilansvarslova § 15 pålegger alle motorkjøretøyer å ha ansvarsforsikring.

**Konklusjon:** Morten er objektivt ansvarlig etter bilansvarslova, selv om han ikke har utvist skyld.`
    },
    {
      id: 'rtl2-5-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom culpaansvar og objektivt ansvar. Gi et eksempel på en situasjon der objektivt ansvar er mer hensiktsmessig enn culpaansvar.',
        hints: [
          'Tenk på skyldkravet – kreves det uaktsomhet?',
          'Vurder begrunnelsen for objektivt ansvar: hvem bør bære risikoen?'
        ],
        solution: 'Culpaansvaret krever at skadevolder har handlet uaktsomt, mens objektivt ansvar pålegger erstatningsansvar uavhengig av skyld. Objektivt ansvar er hensiktsmessig der virksomheten innebærer en ekstraordinær risiko som skadevolder har skapt og tjener på. Eksempel: En fabrikk som bruker farlige kjemikalier, bør være ansvarlig for forurensningsskader uavhengig av om driften er forsvarlig, fordi risikoen er ekstraordinær og ligger utenfor naboenes kontroll.'
      }
    },

    // --- BLOKK 3: Arbeidsgiveransvaret ---
    {
      id: 'rtl2-5-2-def-3',
      type: 'definition',
      title: 'Arbeidsgiveransvaret',
      content: `**Arbeidsgiveransvaret** er regulert i skadeserstatningsloven § 2-1. Bestemmelsen fastslår at en arbeidsgiver er erstatningsansvarlig for skade som **arbeidstakeren** volder **forsettlig eller uaktsomt** under utføring av arbeidet.

Vilkår for arbeidsgiveransvar:
1. Det må foreligge et **arbeidsgiver-/arbeidstakerforhold**
2. Arbeidstakeren må ha handlet **forsettlig eller uaktsomt** (culpøst)
3. Skaden må være voldt **under utføring av arbeidet** – det vil si i tilknytning til arbeidsoppgavene

Begrunnelsen for arbeidsgiveransvaret er at:
- Arbeidsgiveren **tjener** på arbeidstakerens innsats og bør derfor bære risikoen
- Arbeidsgiveren har mulighet til å **forsikre seg** mot ansvar
- Arbeidsgiveren kan **forebygge** skader gjennom opplæring, instrukser og tilsyn
- Skadelidte sikres en **solvent debitor** (noen som kan betale)`
    },
    {
      id: 'rtl2-5-2-example-3',
      type: 'example',
      title: 'Eksempel: Arbeidsgiveransvar',
      problem: 'Vaktmester Ola glemmer å strø utenfor inngangen til et kontorbygg etter en frostnatt. En besøkende, Hanna, skli på isen og brekker håndleddet. Kan Hanna rette erstatningskravet mot Olas arbeidsgiver, Eiendomsservice AS?',
      solution: `**Analyse av vilkårene for arbeidsgiveransvar (skadeserstatningsloven § 2-1):**

**1. Arbeidsgiver-/arbeidstakerforhold:**
Ola er ansatt i Eiendomsservice AS. Det foreligger et arbeidsforhold.

**2. Uaktsomhet:**
Ola glemte å strø – en oppgave som inngår i hans arbeidsoppgaver som vaktmester. Å unnlate å strø etter frostnatt er uaktsomt vurdert etter standarden for en alminnelig samvittighetsfull vaktmester.

**3. Under utføring av arbeidet:**
Strøing av inngangspartier er en del av Olas arbeidsoppgaver. Skaden oppstod i tilknytning til arbeidet.

**Konklusjon:** Alle vilkårene er oppfylt. Hanna kan rette erstatningskravet mot Eiendomsservice AS etter arbeidsgiveransvaret i skadeserstatningsloven § 2-1. Selskapet kan deretter søke regress mot Ola, men dette er i praksis sjelden.`
    },
    {
      id: 'rtl2-5-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-2-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken lovbestemmelse hjemler arbeidsgiveransvaret i norsk erstatningsrett?',
        options: [
          { id: 'a', text: 'Arbeidsmiljøloven § 2-1', isCorrect: false },
          { id: 'b', text: 'Skadeserstatningsloven § 2-1', isCorrect: true },
          { id: 'c', text: 'Bilansvarslova § 4', isCorrect: false },
          { id: 'd', text: 'Straffeloven § 27', isCorrect: false }
        ],
        solution: 'Arbeidsgiveransvaret er hjemlet i skadeserstatningsloven § 2-1 (lov 13. juni 1969 nr. 26 om skadeserstatning). Bestemmelsen fastslår at en arbeidsgiver er erstatningsansvarlig for skade som arbeidstaker volder forsettlig eller uaktsomt under utføring av arbeidet.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-5-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Ansvarsgrunnlag

- **Culpaansvaret** er hovedregelen: skadevolder er ansvarlig dersom vedkommende har handlet **uaktsomt**. Vurderingen bygger på «bonus pater familias»-standarden.
- **Objektivt ansvar** innebærer ansvar **uten krav om skyld**. Gjelder for ekstraordinær risiko, og kan være lovfestet (bilansvarslova, produktansvarsloven, forurensningsloven) eller ulovfestet.
- **Arbeidsgiveransvaret** etter skadeserstatningsloven § 2-1 innebærer at arbeidsgiver er ansvarlig for skade arbeidstaker volder uaktsomt eller forsettlig under utføring av arbeidet.
- Flere ansvarsgrunnlag kan gjelde samtidig, og skadelidte kan velge det mest gunstige.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-5-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En ansatt ved et rørleggerfirma installerer et badekar feil, noe som fører til vannskade i etasjen under. Bygningseieren krever erstatning. Drøft hvilke ansvarsgrunnlag som kan påberopes og hvem kravet kan rettes mot.',
        hints: [
          'Vurder både culpaansvar og arbeidsgiveransvar.',
          'Hvem er det mest praktisk å rette kravet mot?'
        ],
        solution: 'Bygningseieren kan påberope to ansvarsgrunnlag: (1) Culpaansvar mot rørleggeren personlig – feilen utgjør uaktsomhet vurdert etter profesjonsstandarden for rørleggere. (2) Arbeidsgiveransvar mot rørleggerfirmaet etter skadeserstatningsloven § 2-1 – rørleggeren handlet uaktsomt under utføring av arbeidet. I praksis er det mest hensiktsmessig å rette kravet mot firmaet, som normalt er bedre rustet økonomisk og har ansvarsforsikring.'
      }
    },
    {
      id: 'rtl2-5-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-2-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvorfor finnes det objektive ansvarsregler i tillegg til culpaansvaret?',
        options: [
          { id: 'a', text: 'Fordi culpaansvaret ikke gjelder for virksomheter', isCorrect: false },
          { id: 'b', text: 'Fordi den som skaper og tjener på en ekstraordinær risiko, bør bære ansvaret for skade', isCorrect: true },
          { id: 'c', text: 'Fordi objektivt ansvar gir lavere erstatningsbeløp', isCorrect: false },
          { id: 'd', text: 'Fordi Stortinget ønsker å straffe farlig virksomhet', isCorrect: false }
        ],
        solution: 'Objektive ansvarsregler begrunnes med at den som driver en virksomhet som skaper en ekstraordinær risiko, og som tjener økonomisk på denne virksomheten, bør bære risikoen for skade – selv om virksomheten drives forsvarlig. Dette kalles risikobetraktningen. I tillegg sikrer objektivt ansvar at skadelidte får erstatning selv der det er vanskelig å påvise uaktsomhet.'
      }
    },
    {
      id: 'rtl2-5-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hva som ligger i kravet om at arbeidstakeren må ha voldt skade «under utføring av arbeidet» for at arbeidsgiveransvaret skal gjelde. Gi eksempler på situasjoner som faller innenfor og utenfor dette kravet.',
        hints: [
          'Tenk over grensen mellom arbeidsoppgaver og private gjøremål.',
          'Hva med skade som skjer i lunsjpausen eller på vei til jobb?'
        ],
        solution: 'Kravet om at skaden er voldt «under utføring av arbeidet» innebærer at det må være saklig tilknytning mellom arbeidsoppgavene og den skadevoldende handlingen. Innenfor: en bussjåfør som kjører uaktsomt under en rute, en sykepleier som gir feil medisin under en vakt, en håndverker som gjør en feil under en installasjon. Utenfor: en ansatt som skader noen i en privat krangel i lunsjpausen, en sjåfør som bruker firmabilen til privat kjøring. Grensetilfeller kan oppstå ved representasjonsoppdrag og firmafester.'
      }
    },
    {
      id: 'rtl2-5-2-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-2-oppg-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En tannlege borer i feil tann. Pasienten krever erstatning. Hvilken standard legges til grunn for uaktsomhetsvurderingen?',
        options: [
          { id: 'a', text: 'Standarden for en alminnelig privatperson uten fagkunnskap', isCorrect: false },
          { id: 'b', text: 'Standarden for en alminnelig dyktig og samvittighetsfull tannlege', isCorrect: true },
          { id: 'c', text: 'Standarden for den beste tannlegen i landet', isCorrect: false },
          { id: 'd', text: 'Standarden fastsatt i tannlegens egen arbeidsavtale', isCorrect: false }
        ],
        solution: 'For profesjonsutøvere gjelder et strengere aktsomhetskrav enn for privatpersoner. Tannlegen vurderes etter standarden for en alminnelig dyktig og samvittighetsfull utøver av profesjonen. Det kreves ikke at vedkommende handler perfekt, men avviket fra faglig standard må ikke være for stort.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Culpaansvaret', definition: 'Hovedregelen for erstatningsansvar: den som ved uaktsomhet volder skade, er ansvarlig.' },
    { term: 'Bonus pater familias', definition: 'Den alminnelig fornuftige person – standarden for uaktsomhetsvurderingen.' },
    { term: 'Objektivt ansvar', definition: 'Erstatningsansvar uten krav om skyld, for ekstraordinær risiko.' },
    { term: 'Arbeidsgiveransvaret', definition: 'Arbeidsgivers ansvar for skade voldt av arbeidstaker under utføring av arbeidet.' },
    { term: 'Profesjonsansvar', definition: 'Strengere aktsomhetskrav for fagfolk enn for privatpersoner.' },
    { term: 'Regress', definition: 'Arbeidsgivers krav mot arbeidstaker om tilbakebetaling av erstatningsbeløp.' }
  ],
};

// ============================================================================
// KAPITTEL 5.3: Årsakssammenheng og adekvans
// ============================================================================

export const CHAPTER_RETTSLAERE_2_5_3: TextbookChapter = {
  id: 'rettslaere-2-5-3',
  courseId: 'rettslaere-2',
  chapterNumber: '5.3',
  title: 'Årsakssammenheng og adekvans',
  description: 'Betingelseslæren, hovedårsakslæren og adekvanskravet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke grunnleggende vilkår til å vurdere spørsmål om erstatning'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-5-3-intro',
      type: 'text',
      content: `## Årsakssammenheng og adekvans

Det andre grunnvilkåret for erstatning er at det må foreligge **årsakssammenheng** mellom skadevolders handling og den skade som har oppstått. Kravet om årsakssammenheng sikrer at skadevolder bare holdes ansvarlig for skade som faktisk skyldes vedkommendes handling – ikke for tilfeldige eller fjerntliggende følger.

I tillegg til den faktiske årsakssammenhengen stiller norsk rett krav om **adekvans** – at skaden ikke må være for fjern, avledet eller upåregnelig i forhold til den ansvarsbetingende handlingen.

Kravene til årsakssammenheng og adekvans er utviklet gjennom Høyesteretts praksis og bygger på to sentrale rettslige verktøy: **betingelseslæren** og **adekvanslæren**.`
    },

    // --- BLOKK 1: Betingelseslæren ---
    {
      id: 'rtl2-5-3-def-1',
      type: 'definition',
      title: 'Betingelseslæren',
      content: `**Betingelseslæren** (conditio sine qua non) er det grunnleggende verktøyet for å fastslå årsakssammenheng i norsk erstatningsrett.

Testen er: **Var handlingen en nødvendig betingelse for at skaden oppstod?**

Man spør: Dersom man tenker bort den ansvarsbetingende handlingen – ville skaden da likevel ha oppstått?

- **Ja** → det foreligger ikke årsakssammenheng
- **Nei** → det foreligger årsakssammenheng (handlingen var en nødvendig betingelse for skaden)

Betingelseslæren er bekreftet i en rekke høyesterettsdommer, blant annet i **P-pilledom II** (Rt. 1992 s. 64).`
    },
    {
      id: 'rtl2-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Betingelseslæren',
      problem: 'Siri kjører uaktsomt og kolliderer med Vegards bil. Vegard får nakkesleng og blir sykemeldt i tre måneder. Vegard hevder at han også mistet en forretningsavtale verdt 500 000 kr fordi han ikke kunne delta på et viktig møte under sykemeldingen. Er det årsakssammenheng mellom kollisjonen og det tapte forretningsoppdraget?',
      solution: `**Analyse med betingelseslæren:**

**Nakkesleng og sykemelding:** Dersom man tenker bort kollisjonen, ville Vegard ikke fått nakkesleng og ikke blitt sykemeldt. Kollisjonen er en nødvendig betingelse for skaden. Årsakssammenheng foreligger.

**Tapt forretningsavtale:** Dersom man tenker bort kollisjonen, ville Vegard kunnet delta på møtet. Men spørsmålet er om det var sikkert at avtalen ville blitt inngått. Her kreves det sannsynlighetsovervekt – det må være mer sannsynlig enn ikke at avtalen ville blitt inngått.

Dersom Vegard kan dokumentere at avtalen var nær ved å bli inngått og at hans fravær var avgjørende, kan årsakssammenheng foreligge. Dersom avtalen var usikker uansett, er kravet om årsakssammenheng ikke oppfylt for denne tapsposten.`
    },
    {
      id: 'rtl2-5-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er kjernen i betingelseslæren (conditio sine qua non)?',
        options: [
          { id: 'a', text: 'At skadevolder må ha handlet forsettlig', isCorrect: false },
          { id: 'b', text: 'At handlingen må ha vært den eneste årsaken til skaden', isCorrect: false },
          { id: 'c', text: 'At skaden ikke ville oppstått dersom man tenker bort handlingen', isCorrect: true },
          { id: 'd', text: 'At skaden må ha oppstått umiddelbart etter handlingen', isCorrect: false }
        ],
        solution: 'Betingelseslæren spør om handlingen var en nødvendig betingelse for skaden: ville skaden ha oppstått selv om man tenker bort handlingen? Dersom svaret er nei, foreligger årsakssammenheng. Det kreves ikke at handlingen er den eneste årsaken – bare at den er en nødvendig betingelse.'
      }
    },

    // --- BLOKK 2: Samvirkende årsaker ---
    {
      id: 'rtl2-5-3-def-2',
      type: 'definition',
      title: 'Samvirkende årsaker og hovedårsakslæren',
      content: `Ofte oppstår skade som følge av flere **samvirkende årsaker**. Det kan være vanskelig å fastslå hvilken årsak som var avgjørende. Norsk rett bruker da **hovedårsakslæren**:

**Hovedårsakslæren** innebærer at skadevolder er ansvarlig dersom den ansvarsbetingende handlingen var en **vesentlig** og **ikke uvesentlig** medvirkende årsak til skaden. Det kreves ikke at handlingen var den eneste eller den viktigste årsaken.

Rettspraksis har presisert at:
- Dersom den ansvarsbetingende handlingen er én av flere nødvendige betingelser, må det vurderes om den var en **tilstrekkelig vesentlig** del av årsaksbildet
- En årsak som er «utvilsomt den mest vesentlige» vil normalt gi ansvar
- En årsak som bare er en «fjern og avledet medvirkende faktor» vil normalt ikke gi ansvar

Hovedårsakslæren ble formulert i **Rt. 1992 s. 64 (P-pilledom II)** og er senere bekreftet i en rekke dommer.`
    },
    {
      id: 'rtl2-5-3-example-2',
      type: 'example',
      title: 'Eksempel: Samvirkende årsaker',
      problem: 'Anne har en medfødt svakhet i ryggen (skivelidelse). Etter en bilulykke forårsaket av Tor får Anne kraftige ryggplager. Legen mener at ryggplagene skyldes en kombinasjon av den medfødte svakheten og ulykken, og at plagene ville kommet uansett, men først om 10–15 år. Er Tor ansvarlig for ryggplagene?',
      solution: `**Analyse med betingelseslæren og hovedårsakslæren:**

**Betingelseslæren:** Dersom man tenker bort ulykken, ville Anne fått ryggplager, men først om 10–15 år. Ulykken er altså en nødvendig betingelse for at plagene oppstod **nå**.

**Hovedårsakslæren:** Ulykken var en vesentlig medvirkende årsak til at plagene oppstod da de gjorde. Den medfødte svakheten er en **sårbarhet**, ikke en selvstendig årsak til de aktuelle plagene.

**Sårbarhetsprinsippet:** Etter norsk rett skal skadevolder ta skadelidte «som han er». At skadelidte har en forutgående sårbarhet, fritar ikke skadevolder for ansvar. Men erstatningen kan begrenses til den **fremskyndelsen** av skaden som ulykken medførte.

**Konklusjon:** Tor er ansvarlig for ryggplagene, men erstatningen kan begrenses til merkostnaden ved at plagene oppstod nå i stedet for om 10–15 år.`
    },
    {
      id: 'rtl2-5-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-3-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med at skadevolder må ta skadelidte «som han er» (sårbarhetsprinsippet). Hvorfor er dette prinsippet viktig i erstatningsretten?',
        hints: [
          'Tenk på tilfeller der skadelidte har en forutgående sykdom eller sårbarhet.',
          'Hva ville konsekvensen vært dersom skadevolder kunne fraskrive seg ansvar ved å vise til skadelidtes sårbarhet?'
        ],
        solution: 'Sårbarhetsprinsippet innebærer at skadevolder ikke kan fraskrive seg ansvar ved å hevde at skaden ble mer alvorlig enn normalt på grunn av skadelidtes forutgående sårbarhet. Skadevolder må ta skadelidte «som han er» – med de svakheter vedkommende har. Prinsippet er viktig fordi det beskytter sårbare personer og forhindrer at skadevoldere fritas for ansvar bare fordi skadelidte tilfeldigvis var mer utsatt for skade enn gjennomsnittet.'
      }
    },

    // --- BLOKK 3: Adekvans ---
    {
      id: 'rtl2-5-3-def-3',
      type: 'definition',
      title: 'Adekvanskravet',
      content: `Selv om det foreligger årsakssammenheng etter betingelseslæren, er skadevolder bare ansvarlig for skade som er **adekvat** – det vil si tilstrekkelig påregnelig og nærliggende.

**Adekvanskravet** begrenser erstatningsansvaret slik at skadevolder ikke holdes ansvarlig for fjerne, avledete eller helt upåregnelige skadefølger.

Sentrale momenter i adekvansvurderingen:

- **Påregnelighet:** Var skadefølgen en påregnelig (forutsigbar) konsekvens av handlingen?
- **Nærhet:** Er det tilstrekkelig nærhet mellom handlingen og skaden, eller er skaden for fjern og avledet?
- **Skadens art og omfang:** Er skadens art og omfang innenfor det som med rimelighet kan forventes?

Adekvanskravet er en rettslig vurdering som beror på hva som er **rimelig** å holde skadevolder ansvarlig for.`
    },
    {
      id: 'rtl2-5-3-example-3',
      type: 'example',
      title: 'Eksempel: Adekvans',
      problem: 'Per kjører uaktsomt og kolliderer med en lastebil som frakter verdifulle malerier til et galleri. Maleriene ødelegges. Galleriet går deretter konkurs fordi de hadde satset alt på denne utstillingen. Fem ansatte mister jobben. Kan de ansatte kreve erstatning fra Per?',
      solution: `**Analyse:**

**Årsakssammenheng:** Etter betingelseslæren er det årsakssammenheng – uten kollisjonen ville maleriene kommet frem, galleriet ville ikke gått konkurs, og de ansatte ville beholdt jobbene.

**Adekvansvurdering:** Selv om det foreligger årsakssammenheng, er spørsmålet om tapet til de ansatte er en **adekvat** følge av Pers uaktsomme kjøring.

- **Skade på maleriene:** Adekvat – det er påregnelig at en kollisjon med en lastebil kan ødelegge lasten.
- **Galleriets konkurs:** Tvilsomt – at et galleri har satset alt på én utstilling er et forretningsmessig valg som Per ikke kan forutse.
- **De ansattes tap:** Inadekvat – at ansatte i galleriet mister jobben er en for fjern og avledet følge av Pers kollisjon. Per kunne ikke forutse denne kjeden av konsekvenser.

**Konklusjon:** Per er ansvarlig for skaden på maleriene, men trolig ikke for galleriets konkurs og de ansattes jobbtap. Disse følgene er ikke adekvate.`
    },
    {
      id: 'rtl2-5-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-3-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er formålet med adekvanskravet i erstatningsretten?',
        options: [
          { id: 'a', text: 'Å sikre at skadelidte alltid får full erstatning', isCorrect: false },
          { id: 'b', text: 'Å begrense ansvaret slik at skadevolder ikke svarer for fjerne og upåregnelige skadefølger', isCorrect: true },
          { id: 'c', text: 'Å erstatte betingelseslæren med en enklere test', isCorrect: false },
          { id: 'd', text: 'Å sikre at bare forsettlige skadevoldere holdes ansvarlige', isCorrect: false }
        ],
        solution: 'Adekvanskravet begrenser erstatningsansvaret slik at skadevolder ikke holdes ansvarlig for skadefølger som er for fjerne, avledete eller upåregnelige. Uten adekvanskravet kunne en liten uaktsom handling i teorien utløse ansvar for en uendelig kjede av følgeskader.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-5-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Årsakssammenheng og adekvans

- **Betingelseslæren** (conditio sine qua non) er det grunnleggende verktøyet: handlingen må ha vært en nødvendig betingelse for skaden.
- Ved **samvirkende årsaker** brukes **hovedårsakslæren**: handlingen må ha vært en vesentlig medvirkende årsak.
- **Sårbarhetsprinsippet** innebærer at skadevolder må ta skadelidte «som han er», inkludert forutgående svakheter.
- **Adekvanskravet** begrenser ansvaret: skadevolder er bare ansvarlig for påregnelige og nærliggende skadefølger.
- Årsakssammenheng og adekvans vurderes ut fra **sannsynlighetsovervekt** (mer enn 50 %).`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-5-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En håndverker gjør en feil under et takreparasjonsoppdrag. Feilen fører til at taket lekker. Vannskaden ødelegger et sjeldent maleri som henger i rommet under taket, verdsatt til 2 millioner kroner. Drøft årsakssammenheng og adekvans.',
        hints: [
          'Bruk betingelseslæren for å vurdere årsakssammenheng.',
          'Vurder om det er påregnelig at et svært verdifullt maleri henger rett under et tak som repareres.'
        ],
        solution: 'Årsakssammenheng etter betingelseslæren: Uten håndverkerens feil ville det ikke vært lekkasje, og maleriet ville ikke blitt ødelagt. Handlingen er en nødvendig betingelse for skaden. Adekvans: At et tak lekker som følge av feilreparasjon er påregnelig, og at gjenstander i rommet under kan bli skadet er en nærliggende følge. Spørsmålet er om den svært høye verdien gjør skaden inadekvat. Etter norsk rettspraksis er det normalt skadens art (vannskade på inventar) som vurderes, ikke det konkrete omfanget. Maleriskaden er trolig adekvat fordi det er påregnelig at verdifulle gjenstander kan befinne seg i et hjem.'
      }
    },
    {
      id: 'rtl2-5-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-3-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Erik har en medfødt hjertefeil. Han blir lettere skadet i en bilulykke. Sjokket fra ulykken utløser hjerteinfarkt, og Erik dør. Skadevolder hevder at Erik ville overlevd uten hjertefeilen. Hva er korrekt?',
        options: [
          { id: 'a', text: 'Skadevolder er ikke ansvarlig fordi hjertefeilen var hovedårsaken', isCorrect: false },
          { id: 'b', text: 'Skadevolder er ansvarlig fordi man må ta skadelidte «som han er» (sårbarhetsprinsippet)', isCorrect: true },
          { id: 'c', text: 'Skadevolder er bare ansvarlig for den lette skaden, ikke dødsfallet', isCorrect: false },
          { id: 'd', text: 'Saken må avgjøres ved loddtrekning mellom partene', isCorrect: false }
        ],
        solution: 'Etter sårbarhetsprinsippet må skadevolder ta skadelidte «som han er», inkludert medfødte svakheter. At Erik hadde en hjertefeil som gjorde ham mer sårbar, fritar ikke skadevolder. Ulykken utløste hjerteinfarkt, og uten ulykken ville Erik levd videre. Skadevolder er ansvarlig for dødsfallet.'
      }
    },
    {
      id: 'rtl2-5-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for forholdet mellom betingelseslæren og adekvanskravet. Hvorfor trenger vi begge?',
        hints: [
          'Tenk på betingelseslæren som en vid «sil» og adekvanskravet som en smalere «sil».',
          'Hva ville skjedd dersom vi bare hadde betingelseslæren?'
        ],
        solution: 'Betingelseslæren er en vid test som fastslår faktisk årsakssammenheng: var handlingen en nødvendig betingelse for skaden? Problemet er at den kan favne svært vidt – i teorien kan en liten handling forårsake en lang rekke følgeskader. Adekvanskravet fungerer som en begrensning: selv om det foreligger faktisk årsakssammenheng, er skadevolder bare ansvarlig for påregnelige og nærliggende følger. Uten adekvanskravet kunne en person som forårsaker en liten kollisjon bli ansvarlig for en kjede av følger som ingen rimeligvis kunne forutse.'
      }
    },
    {
      id: 'rtl2-5-3-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-3-oppg-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kalles den rettslige testen der man spør: «Ville skaden ha oppstått dersom man tenker bort handlingen?»',
        options: [
          { id: 'a', text: 'Adekvanslæren', isCorrect: false },
          { id: 'b', text: 'Hovedårsakslæren', isCorrect: false },
          { id: 'c', text: 'Betingelseslæren (conditio sine qua non)', isCorrect: true },
          { id: 'd', text: 'Culpanormen', isCorrect: false }
        ],
        solution: 'Betingelseslæren (conditio sine qua non – «nødvendig betingelse») er den grunnleggende testen for årsakssammenheng i erstatningsretten. Man spør om handlingen var en nødvendig betingelse for at skaden oppstod, ved å tenke bort handlingen og se om skaden likevel ville inntruffet.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Betingelseslæren', definition: 'Test for årsakssammenheng: var handlingen en nødvendig betingelse for skaden?' },
    { term: 'Conditio sine qua non', definition: 'Latin for «nødvendig betingelse» – betingelseslærens kjerne.' },
    { term: 'Hovedårsakslæren', definition: 'Ved samvirkende årsaker: var handlingen en vesentlig medvirkende årsak?' },
    { term: 'Sårbarhetsprinsippet', definition: 'Skadevolder må ta skadelidte «som han er», inkludert forutgående svakheter.' },
    { term: 'Adekvans', definition: 'Krav om at skadefølgen er påregnelig og nærliggende – ikke for fjern eller avledet.' },
    { term: 'Påregnelighet', definition: 'At skadefølgen er forutsigbar og rimelig å forvente.' }
  ],
};

// ============================================================================
// KAPITTEL 5.4: Erstatningsutmåling
// ============================================================================

export const CHAPTER_RETTSLAERE_2_5_4: TextbookChapter = {
  id: 'rettslaere-2-5-4',
  courseId: 'rettslaere-2',
  chapterNumber: '5.4',
  title: 'Erstatningsutmåling',
  description: 'Økonomisk tap, tapsbegrensningsplikt, oppreisning og ménerstatning.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke grunnleggende vilkår til å vurdere spørsmål om erstatning'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-5-4-intro',
      type: 'text',
      content: `## Erstatningsutmåling

Når de tre grunnvilkårene for erstatning er oppfylt – ansvarsgrunnlag, årsakssammenheng og økonomisk tap – oppstår spørsmålet om **erstatningsutmåling**: hvor mye skal skadevolder betale?

Utgangspunktet er restitusjonsprinsippet: skadelidte skal settes tilbake i den økonomiske stillingen vedkommende ville vært i uten skaden. I praksis må retten vurdere ulike typer tap og beregne erstatningen konkret.

Norsk erstatningsrett skiller mellom:
- **Økonomisk tap** (det rene formuestapet)
- **Ménerstatning** (kompensasjon for varig medisinsk invaliditet)
- **Oppreisning** (kompensasjon for tort og smerte)

Reglene om erstatningsutmåling finnes hovedsakelig i skadeserstatningsloven kapittel 3.`
    },

    // --- BLOKK 1: Økonomisk tap ---
    {
      id: 'rtl2-5-4-def-1',
      type: 'definition',
      title: 'Økonomisk tap',
      content: `**Økonomisk tap** er det tredje grunnvilkåret for erstatning og samtidig utgangspunktet for utmålingen. Tapet må kunne måles i penger.

De viktigste typene økonomisk tap ved personskade (skadeserstatningsloven § 3-1):

1. **Påførte utgifter:** Dokumenterte merutgifter som følge av skaden (legebehandling, medisiner, transport, tilpasning av bolig mv.)
2. **Fremtidige utgifter:** Påregnelige merutgifter i fremtiden som følge av skaden
3. **Påført inntektstap:** Tapt arbeidsinntekt fra skadetidspunktet og frem til domstidspunktet
4. **Fremtidig inntektstap:** Redusert ervervsevne som følge av skaden – differansen mellom hva skadelidte ville tjent uten skaden og hva vedkommende kan forventes å tjene med skaden

Ved tingsskade (skade på gjenstander) er utgangspunktet **gjenstandens omsetningsverdi** eller **reparasjonskostnad**, avhengig av hva som er lavest.`
    },
    {
      id: 'rtl2-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av økonomisk tap',
      problem: 'Ingeniør Kristin (35 år, årslønn 750 000 kr) blir påkjørt av en uaktsom bilist og får en ryggskade som gjør at hun bare kan jobbe 50 %. Beregn de viktigste tapspostene.',
      solution: `**Tapspostene:**

**1. Påførte utgifter:**
- Sykehusopphold, operasjoner, medisiner, fysioterapi – dokumenterte utgifter som NAV/forsikring ikke dekker.

**2. Påført inntektstap:**
- Fra skadetidspunktet til domstidspunktet: Differansen mellom full lønn (750 000 kr/år) og 50 % lønn (375 000 kr/år) = 375 000 kr per år, fratrukket ytelser fra NAV (sykepenger, arbeidsavklaringspenger).

**3. Fremtidig inntektstap:**
- Fra domstidspunktet til pensjonsalder (67 år = 32 gjenstående yrkesår): 375 000 kr × 32 år = 12 000 000 kr i nominelle kroner, neddiskontert til nåverdi og justert for skatt og usikkerhet.

**4. Fremtidige utgifter:**
- Påregnelige merutgifter til medisinsk behandling, hjelpemidler og tilpasning resten av livet.

Erstatningen kan bli svært høy ved varige personskader – dette illustrerer hvorfor ansvarsforsikring er viktig.`
    },
    {
      id: 'rtl2-5-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke av følgende er en type økonomisk tap ved personskade?',
        options: [
          { id: 'a', text: 'Oppreisning for tort og smerte', isCorrect: false },
          { id: 'b', text: 'Påført inntektstap og fremtidige merutgifter', isCorrect: true },
          { id: 'c', text: 'Straff ilagt av retten', isCorrect: false },
          { id: 'd', text: 'Ménerstatning for varig medisinsk invaliditet', isCorrect: false }
        ],
        solution: 'Påført inntektstap og fremtidige merutgifter er eksempler på økonomisk tap som erstattes etter skadeserstatningsloven § 3-1. Oppreisning og ménerstatning er ikke rent økonomisk tap, men særskilte erstatningsformer som kompenserer for henholdsvis tort/smerte og varig medisinsk invaliditet.'
      }
    },

    // --- BLOKK 2: Tapsbegrensningsplikt ---
    {
      id: 'rtl2-5-4-def-2',
      type: 'definition',
      title: 'Tapsbegrensningsplikten',
      content: `**Tapsbegrensningsplikten** innebærer at skadelidte har plikt til å begrense sitt eget tap så langt det er rimelig. Skadelidte kan ikke passivt la tapet vokse og deretter kreve erstatning for tap som kunne vært unngått.

Plikten er ulovfestet, men anerkjent i rettspraksis og juridisk teori. Den bygger på lojalitetshensyn: skadevolder skal ikke betale for tap som skadelidte med rimelige tiltak kunne forhindret.

Eksempler på tapsbegrensningsplikt:
- En skadet person skal følge legens behandlingsråd og delta i rehabilitering
- En person som mister jobben grunnet skade, skal forsøke å finne annet passende arbeid
- En bedrift som får ødelagt utstyr, skal skaffe erstatningsutstyr uten unødvendig forsinkelse

Tapsbegrensningsplikten innebærer **ikke** at skadelidte må akseptere urimelige tiltak – bare det som er **rimelig** ut fra situasjonen.`
    },
    {
      id: 'rtl2-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Tapsbegrensningsplikt',
      problem: 'Tømrer Anders (40 år) skader hånden i en arbeidsulykke og kan ikke lenger jobbe som tømrer. Han får tilbud om omskolering til prosjektleder i byggebransjen med tilnærmet samme lønn, men takker nei fordi han bare vil jobbe som tømrer. Kan erstatningen reduseres?',
      solution: `**Analyse:**

Tapsbegrensningsplikten innebærer at Anders må forsøke å begrense sitt inntektstap. Et tilbud om omskolering til et relevant yrke med tilsvarende lønn er et **rimelig tiltak**.

Dersom Anders uten god grunn avslår omskolering, kan retten redusere erstatningen for fremtidig inntektstap. Retten vil beregne erstatningen ut fra hva Anders ville tjent **dersom** han hadde akseptert omskolering, ikke ut fra full uførhet.

Anders plikter ikke å akseptere et helt annet yrke eller vesentlig lavere lønn, men et tilbud om et tilsvarende yrke innenfor samme bransje anses normalt som rimelig.

**Konklusjon:** Erstatningen kan reduseres fordi Anders ikke oppfyller tapsbegrensningsplikten.`
    },
    {
      id: 'rtl2-5-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-4-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva tapsbegrensningsplikten innebærer og gi et eksempel der skadelidte ikke oppfyller plikten.',
        hints: [
          'Hva skjer med erstatningen dersom skadelidte ikke begrenser tapet?',
          'Plikten gjelder bare «rimelige» tiltak – hva er rimelig?'
        ],
        solution: 'Tapsbegrensningsplikten innebærer at skadelidte har plikt til å begrense sitt eget tap gjennom rimelige tiltak. Dersom skadelidte forsømmer denne plikten, kan erstatningen reduseres tilsvarende. Eksempel: En butikkeier får ødelagt kjøleanlegget av en skadevolder. I stedet for å leie et midlertidig kjøleanlegg lar butikkeieren varene bli ødelagt over flere dager. Butikkeieren kan da ikke kreve full erstatning for de ødelagte varene – erstatningen reduseres med det tapet som kunne vært unngått ved å skaffe midlertidig kjøleanlegg.'
      }
    },

    // --- BLOKK 3: Ménerstatning og oppreisning ---
    {
      id: 'rtl2-5-4-def-3',
      type: 'definition',
      title: 'Ménerstatning og oppreisning',
      content: `I tillegg til erstatning for økonomisk tap, gir norsk rett mulighet for to former for **ikke-økonomisk** erstatning:

**Ménerstatning (skadeserstatningsloven § 3-2):**
Kompensasjon for **varig og betydelig skade av medisinsk art**. Vilkår:
- Skadelidte må ha fått en **varig** skade (minimum ca. 15 % medisinsk invaliditet)
- Skaden må være av **medisinsk art** – vurderes etter en medisinsk invaliditetstabell
- Utmåles som et standardisert beløp basert på invaliditetsgraden

Ménerstatning skal kompensere for tapt livsutfoldelse og livskvalitet – tap som ikke lar seg måle i rene penger.

**Oppreisning (skadeserstatningsloven § 3-5):**
Kompensasjon for den **tort og smerte** (ikke-økonomisk lidelse) som skadelidte er påført. Vilkår:
- Skadevolder må ha handlet **forsettlig eller grovt uaktsomt**
- Kravet er strengere enn for vanlig erstatning – alminnelig uaktsomhet er ikke tilstrekkelig
- Utmåles skjønnsmessig og er normalt lavere enn ménerstatning`
    },
    {
      id: 'rtl2-5-4-example-3',
      type: 'example',
      title: 'Eksempel: Ménerstatning og oppreisning',
      problem: 'Lise (25 år) blir utsatt for grov vold av en beruset person og får varig 30 % medisinsk invaliditet. Hun har også store psykiske plager i etterkant. Hvilke erstatningsposter kan Lise kreve?',
      solution: `**Erstatningsposter Lise kan kreve:**

**1. Økonomisk tap (skadeserstatningsloven § 3-1):**
- Påførte og fremtidige behandlingsutgifter (sykehus, psykolog, medisiner)
- Påført og fremtidig inntektstap dersom skaden påvirker arbeidsevnen

**2. Ménerstatning (skadeserstatningsloven § 3-2):**
- Lise har 30 % varig medisinsk invaliditet, som er over terskelen. Hun har krav på ménerstatning basert på invaliditetsgrad og alder.

**3. Oppreisning (skadeserstatningsloven § 3-5):**
- Skadevolder handlet med **grov uaktsomhet** eller forsett (grov vold). Lise har krav på oppreisning for den tort og smerte hun er påført. Oppreisning for voldssaker utmåles gjerne mellom 20 000 og 150 000 kr, avhengig av alvorlighetsgraden.

**Konklusjon:** Lise kan kreve erstatning for tre poster: økonomisk tap, ménerstatning og oppreisning.`
    },
    {
      id: 'rtl2-5-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-4-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kreves for at skadelidte skal ha krav på oppreisning etter skadeserstatningsloven § 3-5?',
        options: [
          { id: 'a', text: 'At skadelidte har lidt et økonomisk tap på over 100 000 kr', isCorrect: false },
          { id: 'b', text: 'At skadevolder har handlet forsettlig eller grovt uaktsomt', isCorrect: true },
          { id: 'c', text: 'At skadelidte har fått varig medisinsk invaliditet over 15 %', isCorrect: false },
          { id: 'd', text: 'At skaden er forårsaket av en motorvogn', isCorrect: false }
        ],
        solution: 'Oppreisning etter skadeserstatningsloven § 3-5 krever at skadevolder har handlet forsettlig eller grovt uaktsomt. Alminnelig uaktsomhet er ikke tilstrekkelig. Oppreisning skal kompensere for «tort og smerte» – den ikke-økonomiske belastningen skadelidte har vært utsatt for.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-5-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Erstatningsutmåling

- **Økonomisk tap** erstattes etter restitusjonsprinsippet: påførte/fremtidige utgifter og inntektstap (skadeserstatningsloven § 3-1).
- **Tapsbegrensningsplikten** innebærer at skadelidte må begrense sitt eget tap gjennom rimelige tiltak.
- **Ménerstatning** (skadeserstatningsloven § 3-2) kompenserer for varig og betydelig medisinsk invaliditet (minimum ca. 15 %).
- **Oppreisning** (skadeserstatningsloven § 3-5) kompenserer for tort og smerte, og krever forsett eller grov uaktsomhet.
- Ved tingsskade erstattes gjenstandens omsetningsverdi eller reparasjonskostnad.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-5-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-4-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Student Maria (22 år) blir påkjørt av en uaktsom bilist og får en kneskade som gir 20 % varig medisinsk invaliditet. Hun planlegger å bli fysioterapeut. Gjør rede for hvilke erstatningsposter hun kan kreve.',
        hints: [
          'Vurder både økonomisk tap, ménerstatning og eventuelt oppreisning.',
          'Tenk over hvordan skaden påvirker hennes fremtidige karriere.'
        ],
        solution: 'Maria kan kreve: (1) Økonomisk tap etter § 3-1: påførte utgifter (behandling, medisiner), fremtidige utgifter (rehabilitering, hjelpemidler), og fremtidig inntektstap dersom kneskaden begrenser hennes evne til å jobbe som fysioterapeut. (2) Ménerstatning etter § 3-2: 20 % varig medisinsk invaliditet er over terskelen, og hennes unge alder gir et høyere beløp. (3) Oppreisning etter § 3-5: kun dersom bilisten handlet grovt uaktsomt (alminnelig uaktsomhet er ikke tilstrekkelig for oppreisning).'
      }
    },
    {
      id: 'rtl2-5-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-4-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er forskjellen mellom ménerstatning og oppreisning?',
        options: [
          { id: 'a', text: 'Ménerstatning krever forsett, oppreisning krever uaktsomhet', isCorrect: false },
          { id: 'b', text: 'Ménerstatning kompenserer for varig medisinsk invaliditet, oppreisning kompenserer for tort og smerte ved forsett/grov uaktsomhet', isCorrect: true },
          { id: 'c', text: 'Ménerstatning gis bare ved trafikkskader, oppreisning gis ved alle skader', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begge dekker ikke-økonomisk tap', isCorrect: false }
        ],
        solution: 'Ménerstatning (§ 3-2) kompenserer for varig og betydelig medisinsk invaliditet og krever ikke forsett eller grov uaktsomhet – alminnelig uaktsomhet er tilstrekkelig. Oppreisning (§ 3-5) kompenserer for tort og smerte og krever at skadevolder har handlet forsettlig eller grovt uaktsomt. Begge er ikke-økonomisk erstatning, men har ulike vilkår og formål.'
      }
    },
    {
      id: 'rtl2-5-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-4-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper med tapsbegrensningsplikten. Er det rimelig å kreve at en skadet person selv begrenser tapet?',
        hints: [
          'Vurder hensynet til skadevolder vs. hensynet til skadelidte.',
          'Hva om skadelidte er i en vanskelig situasjon og ikke har ressurser til å begrense tapet?'
        ],
        solution: 'Fordeler: Tapsbegrensningsplikten forhindrer at skadelidte spekulerer i å la tapet vokse, den fordeler byrdene rimelig mellom partene, og den fremmer en effektiv ressursbruk i samfunnet. Ulemper: Den kan ramme skadelidte som er i en sårbar situasjon og ikke har ressurser til å iverksette tiltak. Det kan oppleves som urettferdig å kreve aktivitet fra den som allerede er rammet av en skade. Avveiningen er at plikten bare gjelder «rimelige» tiltak – skadelidte trenger ikke akseptere urimelige byrder, og det tas hensyn til skadelidtes faktiske situasjon.'
      }
    },
    {
      id: 'rtl2-5-4-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-4-oppg-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer tapsbegrensningsplikten?',
        options: [
          { id: 'a', text: 'At skadevolder har plikt til å begrense skaden så raskt som mulig', isCorrect: false },
          { id: 'b', text: 'At domstolen har plikt til å begrense erstatningsbeløpet', isCorrect: false },
          { id: 'c', text: 'At skadelidte har plikt til å begrense sitt eget tap gjennom rimelige tiltak', isCorrect: true },
          { id: 'd', text: 'At forsikringsselskapet begrenser utbetalingen til en fastsatt sum', isCorrect: false }
        ],
        solution: 'Tapsbegrensningsplikten innebærer at skadelidte har plikt til å begrense sitt eget tap gjennom rimelige tiltak. Dersom skadelidte forsømmer denne plikten, kan erstatningen reduseres med det beløpet som kunne vært spart. Plikten gjelder bare tiltak som er rimelige ut fra situasjonen.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Erstatningsutmåling', definition: 'Beregningen av hvor mye skadevolder skal betale i erstatning.' },
    { term: 'Økonomisk tap', definition: 'Tap som kan måles i penger: utgifter, inntektstap mv.' },
    { term: 'Tapsbegrensningsplikt', definition: 'Skadelidtes plikt til å begrense eget tap gjennom rimelige tiltak.' },
    { term: 'Ménerstatning', definition: 'Kompensasjon for varig og betydelig medisinsk invaliditet (§ 3-2).' },
    { term: 'Oppreisning', definition: 'Kompensasjon for tort og smerte ved forsett eller grov uaktsomhet (§ 3-5).' },
    { term: 'Neddiskontering', definition: 'Beregning av nåverdi av fremtidige tapsposter.' }
  ],
};

// ============================================================================
// KAPITTEL 5.5: Erstatning i praksis
// ============================================================================

export const CHAPTER_RETTSLAERE_2_5_5: TextbookChapter = {
  id: 'rettslaere-2-5-5',
  courseId: 'rettslaere-2',
  chapterNumber: '5.5',
  title: 'Erstatning i praksis',
  description: 'Pasientskade, trafikkskade, produktansvar og yrkesskade.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke grunnleggende vilkår til å vurdere spørsmål om erstatning'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-5-5-intro',
      type: 'text',
      content: `## Erstatning i praksis

De alminnelige grunnvilkårene for erstatning – ansvarsgrunnlag, årsakssammenheng og økonomisk tap – gjelder i alle erstatningssaker. Lovgiver har imidlertid vedtatt flere **særlover** som gir spesialregler for bestemte skadetyper. Disse lovene forenkler ofte skadelidtes stilling, for eksempel ved å innføre objektivt ansvar eller egne tvisteløsningsordninger.

I dette kapittelet skal vi se på fire praktisk viktige erstatningsområder:

- **Trafikkskade** – regulert av bilansvarslova
- **Pasientskade** – regulert av pasientskadeloven
- **Produktansvar** – regulert av produktansvarsloven
- **Yrkesskade** – regulert av yrkesskadeforsikringsloven

Felles for disse områdene er at de gir skadelidte et sterkere vern enn de alminnelige erstatningsreglene.`
    },

    // --- BLOKK 1: Trafikkskade ---
    {
      id: 'rtl2-5-5-def-1',
      type: 'definition',
      title: 'Trafikkskade – bilansvarslova',
      content: `**Bilansvarslova** (lov 3. februar 1961 om ansvar for skade som motorvogner gjer) innfører **objektivt ansvar** for skade som motorvogner volder.

Hovedregler:
- **Objektivt ansvar (§ 4):** Eieren av motorvognen er ansvarlig for skade kjøretøyet «gjer», uavhengig av om føreren har utvist skyld
- **Obligatorisk ansvarsforsikring (§ 15):** Alle motorvogner må ha ansvarsforsikring. Kravet rettes i praksis mot forsikringsselskapet
- **Unntak for egen skyld (§ 7):** Erstatningen kan settes ned dersom skadelidte har medvirket til skaden, for eksempel ved manglende bruk av bilbelte
- **Trafikkforsikringsforeningen:** Dersom bilen er uforsikret, dekkes kravet av Trafikkforsikringsforeningen

Bilansvarslova gir skadelidte et sterkt vern: det er tilstrekkelig å påvise at skaden er voldt av en motorvogn. Skadelidte trenger ikke bevise uaktsomhet.`
    },
    {
      id: 'rtl2-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Trafikkskade med medvirkning',
      problem: 'Elin sitter som passasjer i en bil uten å bruke bilbelte. Bilen kolliderer med en annen bil, og Elin skader nakken. Legen vurderer at skadene ville vært vesentlig mildere dersom hun hadde brukt bilbelte. Hvordan påvirker dette erstatningen?',
      solution: `**Analyse:**

**Objektivt ansvar (bilansvarslova § 4):** Skaden er voldt av en motorvogn. Objektivt ansvar foreligger, uavhengig av hvem som forårsaket kollisjonen.

**Medvirkning (bilansvarslova § 7):** Elin har medvirket til skadeomfanget ved å unnlate å bruke bilbelte, noe som er påbudt etter vegtrafikkloven § 23a. Erstatningen kan derfor settes ned.

**Praktisk utfall:** Retten foretar en skjønnsmessig avkortning. Dersom skadene ville vært 50 % mildere med bilbelte, kan erstatningen typisk reduseres med 20–30 %. Avkortningen er normalt noe lavere enn skadelidtes faktiske medvirkningsandel, fordi det er skadevolder som har skapt den farlige situasjonen.

**Konklusjon:** Elin har krav på erstatning, men beløpet reduseres på grunn av manglende bilbeltebruk.`
    },
    {
      id: 'rtl2-5-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva slags ansvarsgrunnlag gjelder etter bilansvarslova?',
        options: [
          { id: 'a', text: 'Culpaansvar – føreren må ha handlet uaktsomt', isCorrect: false },
          { id: 'b', text: 'Objektivt ansvar – eieren er ansvarlig uavhengig av skyld', isCorrect: true },
          { id: 'c', text: 'Arbeidsgiveransvar – arbeidsgiver er alltid ansvarlig', isCorrect: false },
          { id: 'd', text: 'Kontraktsansvar – det kreves avtale mellom partene', isCorrect: false }
        ],
        solution: 'Bilansvarslova § 4 innfører objektivt ansvar for skade som motorvogner volder. Eieren er ansvarlig uavhengig av om føreren har utvist skyld. Dette gir skadelidte et sterkt vern og forenkler erstatningsprosessen.'
      }
    },

    // --- BLOKK 2: Pasientskade ---
    {
      id: 'rtl2-5-5-def-2',
      type: 'definition',
      title: 'Pasientskade – pasientskadeloven',
      content: `**Pasientskadeloven** (lov 15. juni 2001 nr. 53 om erstatning ved pasientskader) gir pasienter rett til erstatning for skade oppstått i forbindelse med helsehjelp.

Hovedregler:
- **Sviktansvar (§ 2 første ledd bokstav a):** Erstatning ytes dersom skaden skyldes «svikt ved ytelsen av helsehjelp» – det vil si at helsehjelpen ikke var i samsvar med god medisinsk praksis
- **Teknisk svikt (bokstav b):** Skade som skyldes svikt ved utstyr eller tekniske hjelpemidler
- **Vaksinasjonsansvar (bokstav d):** Skade som skyldes vaksinasjon
- **Norsk pasientskadeerstatning (NPE):** En statlig ordning som behandler erstatningskrav fra pasienter. Pasienten melder kravet til NPE, som utreder saken og avgjør om erstatning skal ytes.

Pasientskadeordningen er enklere og rimeligere for pasienten enn å gå til ordinær rettssak. NPE dekker også saksomkostningene ved utredningen.`
    },
    {
      id: 'rtl2-5-5-example-2',
      type: 'example',
      title: 'Eksempel: Pasientskade',
      problem: 'Under en kneoperasjon skader kirurgen en nerve i Olavs kne. Olav får varig nedsatt førlighet i foten. Medisinsk sakkyndig uttaler at nerveskaden skyldes at kirurgen brukte feil operasjonsteknikk. Kan Olav kreve erstatning gjennom NPE?',
      solution: `**Analyse etter pasientskadeloven:**

**Sviktansvar (§ 2 første ledd bokstav a):** Medisinsk sakkyndig uttaler at nerveskaden skyldes feil operasjonsteknikk. Dette innebærer at helsehjelpen ikke var i samsvar med **god medisinsk praksis** – det foreligger en svikt.

**Årsakssammenheng:** Nerveskaden oppstod under operasjonen som direkte følge av den feilaktige teknikken. Årsakssammenheng foreligger.

**Økonomisk tap / varig skade:** Olav har varig nedsatt førlighet, som kan utløse krav på erstatning for økonomisk tap (behandlingsutgifter, eventuelt inntektstap) og ménerstatning dersom invaliditetsgraden er tilstrekkelig høy.

**Fremgangsmåte:** Olav melder kravet til Norsk pasientskadeerstatning (NPE), som utreder saken uten kostnad for Olav. Dersom NPE avslår, kan Olav klage til Pasientskadenemnda.

**Konklusjon:** Olav har krav på erstatning for pasientskade.`
    },
    {
      id: 'rtl2-5-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-5-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med «svikt ved ytelsen av helsehjelp» etter pasientskadeloven § 2. Hvem avgjør om det foreligger svikt?',
        hints: [
          'Tenk på begrepet «god medisinsk praksis».',
          'Hvem utreder pasientskadekrav i Norge?'
        ],
        solution: 'Svikt ved ytelsen av helsehjelp innebærer at behandlingen ikke var i samsvar med god medisinsk praksis – det vil si at helsepersonellet ikke opptrådte som en alminnelig dyktig og samvittighetsfull fagperson ville gjort. NPE (Norsk pasientskadeerstatning) utreder krav og avgjør om det foreligger svikt, basert på medisinsk sakkyndigvurdering. NPEs vedtak kan påklages til Pasientskadenemnda og deretter bringes inn for domstolene.'
      }
    },

    // --- BLOKK 3: Produktansvar og yrkesskade ---
    {
      id: 'rtl2-5-5-def-3',
      type: 'definition',
      title: 'Produktansvar – produktansvarsloven',
      content: `**Produktansvarsloven** (lov 23. desember 1988 nr. 104 om produktansvar) innfører et strengt ansvar for produsenter og importører av defekte produkter.

Hovedregler:
- **Objektivt ansvar:** Produsenten er ansvarlig for skade som skyldes en **sikkerhetsmangel** ved produktet, uavhengig av skyld
- **Sikkerhetsmangel:** Et produkt har en sikkerhetsmangel dersom det ikke gir den sikkerhet som en bruker med rimelighet kan forvente (§ 2-1)
- **Ansvarssubjekt:** Produsent, importør og i visse tilfeller selger kan holdes ansvarlig
- **Personskade og tingsskade:** Loven dekker både skade på person og skade på ting (med en nedre grense for tingsskade)

Begrunnelsen er at produsenten er nærmest til å kontrollere produktets sikkerhet og til å tegne forsikring mot produktansvar.`
    },
    {
      id: 'rtl2-5-5-text-1',
      type: 'text',
      content: `### Yrkesskade – yrkesskadeforsikringsloven

**Yrkesskadeforsikringsloven** (lov 16. juni 1989 nr. 65) pålegger alle arbeidsgivere å tegne yrkesskadeforsikring for sine ansatte.

Hovedregler:
- **Yrkesskade** er skade som oppstår som følge av en arbeidsulykke eller yrkessykdom i arbeidstiden, på arbeidsstedet, under utføring av arbeid
- **Objektivt ansvar:** Forsikringsselskapet er ansvarlig uavhengig av om arbeidsgiveren har utvist skyld
- **Bevispresumpsjon:** Dersom en skade oppstår på arbeidsplassen i arbeidstiden, presumeres den å være en yrkesskade med mindre forsikringsselskapet beviser det motsatte
- **Erstatningsposter:** Arbeidstakeren kan kreve erstatning for økonomisk tap, ménerstatning og oppreisning

Yrkesskadeforsikringen sikrer at arbeidstakere som skades på jobb, alltid har et forsikringsselskap å rette kravet mot.`
    },
    {
      id: 'rtl2-5-5-example-3',
      type: 'example',
      title: 'Eksempel: Produktansvar',
      problem: 'Nina kjøper en ny vannkoker. Vannkokeren har en defekt i termostaten som gjør at den overopphetes og tar fyr. Brannen sprer seg til kjøkkenet, og Nina får brannskader på hånden. Kjøkkenskadene beløper seg til 200 000 kr. Hvem kan Nina rette erstatningskravet mot?',
      solution: `**Analyse etter produktansvarsloven:**

**Sikkerhetsmangel (§ 2-1):** En vannkoker som tar fyr på grunn av en termostatdefekt, gir ikke den sikkerhet en bruker med rimelighet kan forvente. Det foreligger en sikkerhetsmangel.

**Objektivt ansvar:** Produsenten er objektivt ansvarlig for skade som skyldes sikkerhetsmangelen. Nina trenger ikke bevise uaktsomhet.

**Ansvarssubjekt:** Nina kan rette kravet mot:
- **Produsenten** av vannkokeren
- **Importøren** dersom produsenten er utenlandsk
- **Selgeren** i visse tilfeller

**Erstatningsposter:**
- Personskade: Brannskader på hånden (behandlingsutgifter, eventuelt ménerstatning)
- Tingsskade: Kjøkkenskader for 200 000 kr

**Konklusjon:** Nina har krav på erstatning for både personskaden og kjøkkenskaden etter produktansvarsloven.`
    },
    {
      id: 'rtl2-5-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-5-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «sikkerhetsmangel» etter produktansvarsloven?',
        options: [
          { id: 'a', text: 'At produktet er dyrere enn tilsvarende produkter på markedet', isCorrect: false },
          { id: 'b', text: 'At produktet ikke gir den sikkerhet en bruker med rimelighet kan forvente', isCorrect: true },
          { id: 'c', text: 'At produktet mangler bruksanvisning på norsk', isCorrect: false },
          { id: 'd', text: 'At produktet er eldre enn fem år', isCorrect: false }
        ],
        solution: 'Etter produktansvarsloven § 2-1 foreligger en sikkerhetsmangel dersom produktet ikke gir den sikkerhet som en bruker med rimelighet kan forvente, vurdert ut fra blant annet markedsføring, forventet bruk og tidspunktet produktet ble satt i omsetning.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-5-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Erstatning i praksis

- **Trafikkskade:** Bilansvarslova innfører objektivt ansvar for skade fra motorvogner. Obligatorisk ansvarsforsikring sikrer at skadelidte alltid har et selskap å rette krav mot. Medvirkning kan gi avkortning.
- **Pasientskade:** Pasientskadeloven gir erstatning for skade som skyldes svikt ved helsehjelp. NPE behandler krav uten kostnad for pasienten.
- **Produktansvar:** Produktansvarsloven gir objektivt ansvar for skade fra defekte produkter med sikkerhetsmangel.
- **Yrkesskade:** Yrkesskadeforsikringsloven pålegger arbeidsgivere forsikringsplikt og gir objektivt ansvar for skade i arbeid.
- Felles for særlovene er at de gir skadelidte et **sterkere vern** enn de alminnelige erstatningsreglene.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-5-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-5-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En lagerarbeider skader ryggen når han løfter en tung pall på jobb. Arbeidsgiveren hevder at det var lagerarbeiderens egen feil fordi han løftet feil. Drøft om lagerarbeideren har krav på erstatning etter yrkesskadeforsikringsloven.',
        hints: [
          'Vurder om skaden oppstod i arbeidstiden, på arbeidsstedet, under utføring av arbeid.',
          'Hva slags ansvarsgrunnlag gjelder etter yrkesskadeforsikringsloven?'
        ],
        solution: 'Etter yrkesskadeforsikringsloven er forsikringsselskapet objektivt ansvarlig for skade som oppstår i arbeidstiden, på arbeidsstedet, under utføring av arbeid. Lagerarbeideren skadet ryggen under utføring av arbeidsoppgaver. At han eventuelt løftet feil, fritar ikke forsikringsselskapet – ansvaret er objektivt. Skaden presumeres å være en yrkesskade med mindre forsikringsselskapet beviser det motsatte. Lagerarbeideren har krav på erstatning.'
      }
    },
    {
      id: 'rtl2-5-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-5-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken instans behandler erstatningskrav fra pasienter som mener de er påført skade under behandling?',
        options: [
          { id: 'a', text: 'Tingretten i pasientens hjemstedskrets', isCorrect: false },
          { id: 'b', text: 'Norsk pasientskadeerstatning (NPE)', isCorrect: true },
          { id: 'c', text: 'Helsetilsynet', isCorrect: false },
          { id: 'd', text: 'Pasientombudet', isCorrect: false }
        ],
        solution: 'Norsk pasientskadeerstatning (NPE) er en statlig ordning som behandler erstatningskrav fra pasienter. NPE utreder saken uten kostnad for pasienten og avgjør om erstatning skal ytes. Vedtaket kan påklages til Pasientskadenemnda og deretter bringes inn for domstolene.'
      }
    },
    {
      id: 'rtl2-5-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-5-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign de fire erstatningsordningene som er gjennomgått i dette kapittelet (trafikkskade, pasientskade, produktansvar, yrkesskade). Hva har de til felles, og hva skiller dem?',
        hints: [
          'Se på ansvarsgrunnlag, forsikringsordning og formål for hver ordning.',
          'Tenk på hvem som bærer den økonomiske risikoen.'
        ],
        solution: 'Felles: Alle fire ordningene gir skadelidte et sterkere vern enn alminnelig erstatningsrett, alle innfører former for objektivt ansvar eller lempeligere ansvar, og alle har forsikringsordninger som sikrer at skadelidte får utbetalt erstatning. Forskjeller: (1) Trafikkskade og yrkesskade har rent objektivt ansvar, mens pasientskade bygger på sviktansvar. (2) Trafikkskade og yrkesskade har obligatorisk forsikring hos private selskaper, mens pasientskade behandles av den statlige ordningen NPE. (3) Produktansvar retter seg mot produsent/importør, mens de andre retter seg mot forsikringsselskaper eller statlige ordninger.'
      }
    },
    {
      id: 'rtl2-5-5-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'rtl2-5-5-oppg-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva har bilansvarslova, produktansvarsloven og yrkesskadeforsikringsloven til felles?',
        options: [
          { id: 'a', text: 'De krever alle at skadevolder har handlet forsettlig', isCorrect: false },
          { id: 'b', text: 'De gjelder bare for skade på ting, ikke personskade', isCorrect: false },
          { id: 'c', text: 'De innfører former for objektivt ansvar som gir skadelidte et sterkere vern', isCorrect: true },
          { id: 'd', text: 'De krever alle at saken behandles i tingretten', isCorrect: false }
        ],
        solution: 'Alle tre lovene innfører former for objektivt ansvar, som betyr at skadevolder (eller forsikringsselskapet) er ansvarlig uavhengig av om det er utvist skyld. Dette gir skadelidte et sterkere vern enn culpaansvaret, der skadelidte må bevise uaktsomhet.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Bilansvarslova', definition: 'Lov som innfører objektivt ansvar for skade voldt av motorvogner.' },
    { term: 'Pasientskadeloven', definition: 'Lov som gir pasienter rett til erstatning for skade ved svikt i helsehjelp.' },
    { term: 'NPE', definition: 'Norsk pasientskadeerstatning – statlig ordning som behandler pasientskadekrav.' },
    { term: 'Produktansvarsloven', definition: 'Lov som innfører objektivt ansvar for skade fra defekte produkter.' },
    { term: 'Sikkerhetsmangel', definition: 'At et produkt ikke gir den sikkerhet en bruker med rimelighet kan forvente.' },
    { term: 'Yrkesskadeforsikringsloven', definition: 'Lov som pålegger arbeidsgivere forsikringsplikt for yrkesskader.' }
  ],
};

// ============================================================================
// Samlet eksport for del 5 (kapittel 5.1–5.5)
// ============================================================================

export const RETTSLAERE_2_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_2_5_1,
  CHAPTER_RETTSLAERE_2_5_2,
  CHAPTER_RETTSLAERE_2_5_3,
  CHAPTER_RETTSLAERE_2_5_4,
  CHAPTER_RETTSLAERE_2_5_5,
];
