/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Rettslære 2 VG3
 *
 * Seksjon 3: Strafferett (Kapittel 3.1–3.5)
 * Denne filen inneholder kapittel 3.1–3.5 (komplett).
 *
 * LK20 kompetansemål:
 * - «utforske reaksjonssystemet og bruke straffleggingsbetingelsene til å vurdere straff
 *    etter rettsregler om seksuallovbrudd, voldslovbrudd og vinningslovbrudd»
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1: Straffbarhetsbetingelsene
// ============================================================================

export const CHAPTER_RETTSLAERE_2_3_1: TextbookChapter = {
  id: 'rettslaere-2-3-1',
  courseId: 'rettslaere-2',
  chapterNumber: '3.1',
  title: 'Straffbarhetsbetingelsene',
  description: 'De fire vilkårene for straff: lovkrav, skyld, tilregnelighet og fravær av straffrihetsgrunner.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske reaksjonssystemet og bruke straffleggingsbetingelsene til å vurdere straff etter rettsregler om seksuallovbrudd, voldslovbrudd og vinningslovbrudd'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-3-1-intro',
      type: 'text',
      content: `## Straffbarhetsbetingelsene

Strafferetten er den delen av rettsordenen som regulerer statens adgang til å ilegge straff. Straff er det mest inngripende virkemiddelet staten kan rette mot enkeltpersoner, og det er derfor strenge vilkår for at straff kan anvendes. Disse vilkårene kalles **straffbarhetsbetingelsene**.

I norsk rett må fire kumulative vilkår være oppfylt for at en person skal kunne straffes. Dersom ett av vilkårene ikke er oppfylt, kan vedkommende ikke dømmes til straff – uavhengig av hvor klanderverdig handlingen måtte fremstå.

Straffbarhetsbetingelsene er utviklet gjennom langvarig rettspraksis og juridisk teori, og de er i dag forankret i straffeloven av 2005 (lov 20. mai 2005 nr. 28 om straff).`
    },

    // --- BLOKK 1: De fire vilkårene ---
    {
      id: 'rtl2-3-1-def-1',
      type: 'definition',
      title: 'De fire straffbarhetsbetingelsene',
      content: `For at en person skal kunne straffes, må **fire vilkår** være oppfylt samtidig:

1. **Lovkravet (legalitetsprinsippet)** – Handlingen må rammes av et straffebud i loven (Grunnloven § 96)
2. **Skyldkravet** – Gjerningspersonen må ha utvist tilstrekkelig skyld, det vil si forsett eller uaktsomhet (straffeloven § 21)
3. **Tilregnelighet** – Gjerningspersonen må ha vært tilregnelig på handlingstidspunktet (straffeloven § 20)
4. **Fravær av straffrihetsgrunner** – Det må ikke foreligge omstendigheter som gjør handlingen rettmessig, som nødverge eller nødrett

Alle fire vilkårene er **kumulative**: mangler ett vilkår, kan straff ikke ilegges.`
    },
    {
      id: 'rtl2-3-1-text-1',
      type: 'text',
      content: `### Lovkravet – legalitetsprinsippet

Grunnloven § 96 første ledd fastslår: *«Ingen kan dømmes uten etter lov.»* Dette er det strafferettslige legalitetsprinsippet, og det innebærer at en handling bare kan straffes dersom den er beskrevet som straffbar i en formell lov vedtatt av Stortinget.

Legalitetsprinsippet har flere sider:

- **Lovskravet:** Det kreves formell lov – ikke forskrift, sedvanerett eller rettspraksis alene
- **Klarhetskravet:** Straffebudet må være tilstrekkelig klart og presist til at borgerne kan forutberegne sin rettsstilling
- **Analogiforbudet:** Straffebestemmelser skal ikke anvendes analogisk (utvidende) til ulempe for tiltalte
- **Tilbakevirkningsforbudet:** Grunnloven § 97 forbyr at straffelover gis tilbakevirkende kraft

Legalitetsprinsippet er en grunnleggende rettssikkerhetsgaranti: staten kan bare straffe handlinger som borgerne på forhånd kunne vite var straffbare.`
    },
    {
      id: 'rtl2-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Legalitetsprinsippet',
      problem: 'Jonas driver en nettbutikk som selger spesielle kosttilskudd. Myndighetene mener produktene er helseskadelige og ønsker å straffeforfølge Jonas. Det finnes imidlertid ingen lovbestemmelse som forbyr salg av denne typen kosttilskudd. Kan Jonas straffes?',
      solution: `**Analyse:**

Legalitetsprinsippet i Grunnloven § 96 krever at handlingen må være beskrevet som straffbar i lov. Selv om myndighetene mener salget er uheldig, kan Jonas **ikke** straffes dersom det ikke finnes et straffebud som rammer denne typen salg.

Det er lovgivers oppgave å vedta nye straffebud dersom man ønsker å kriminalisere nye handlinger. Inntil et slikt straffebud eventuelt vedtas, er salget lovlig – og en eventuell ny straffelov kan ikke gis tilbakevirkende kraft etter Grunnloven § 97.

**Konklusjon:** Jonas kan ikke straffes. Lovkravet er ikke oppfylt.`
    },
    {
      id: 'rtl2-3-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken bestemmelse i Grunnloven forankrer det strafferettslige legalitetsprinsippet?',
        options: [
          { id: 'a', text: 'Grunnloven § 97 om tilbakevirkende lover', isCorrect: false },
          { id: 'b', text: 'Grunnloven § 96 om at ingen kan dømmes uten etter lov', isCorrect: true },
          { id: 'c', text: 'Grunnloven § 100 om ytringsfrihet', isCorrect: false },
          { id: 'd', text: 'Grunnloven § 102 om rett til privatliv', isCorrect: false }
        ],
        solution: 'Grunnloven § 96 første ledd fastslår at «Ingen kan dømmes uten etter lov». Dette er kjernen i det strafferettslige legalitetsprinsippet, som krever at straff bare kan ilegges med hjemmel i formell lov.'
      }
    },

    // --- BLOKK 2: Tilregnelighet ---
    {
      id: 'rtl2-3-1-def-2',
      type: 'definition',
      title: 'Tilregnelighet',
      content: `**Tilregnelighet** betyr at gjerningspersonen hadde evne til å forstå hva vedkommende gjorde, og til å handle annerledes. Straffeloven § 20 oppstiller fire grupper av utilregnelighet:

1. **Under 15 år** – den kriminelle lavalder i Norge er 15 år (straffeloven § 20 første ledd bokstav a)
2. **Psykotisk tilstand** – personen var psykotisk på handlingstidspunktet (bokstav b)
3. **Sterk bevissthetsforstyrrelse** – tilstand som ikke skyldes selvforskyldt rus (bokstav c)
4. **Psykisk utviklingshemming i høy grad** – IQ under ca. 55 (bokstav d)

Dersom gjerningspersonen var utilregnelig på handlingstidspunktet, kan vedkommende **ikke** straffes, men det kan ilegges **særreaksjoner** som tvungent psykisk helsevern.`
    },
    {
      id: 'rtl2-3-1-text-2',
      type: 'text',
      content: `### Straffrihetsgrunner

Selv om lovkravet, skyldkravet og tilregnelighetskravet er oppfylt, kan straff likevel være utelukket dersom det foreligger en **straffrihetsgrunn**. De viktigste er:

**Nødverge (straffeloven § 18)**
En handling som ellers ville vært straffbar, er lovlig dersom den er foretatt for å avverge et ulovlig angrep, og handlingen ikke går lenger enn nødvendig. Eksempel: å dytte bort en person som angriper deg.

**Nødrett (straffeloven § 17)**
En ellers straffbar handling er lovlig dersom den er foretatt for å redde liv, helse, eiendom eller annen interesse fra en fare som ikke kan avverges på annen måte, forutsatt at faren er vesentlig større enn skaden handlingen medfører.

**Selvtekt (straffeloven § 19)**
I begrenset utstrekning kan man ta tilbake sin egen eiendom fra den som urettmessig har tatt den, forutsatt at det skjer umiddelbart og at det ikke brukes uforholdsmessig makt.

**Samtykke**
Samtykke fra fornærmede kan i visse tilfeller være en straffrihetsgrunn, men ikke for alvorlige integritetskrenkelser. Man kan for eksempel ikke samtykke til å bli drept.`
    },
    {
      id: 'rtl2-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Nødverge',
      problem: 'Maria blir overfalt av en mann som forsøker å rane vesken hennes. Hun slår mannen i ansiktet med nøklene sine slik at han slipper taket og hun kan flykte. Mannen anmelder Maria for kroppskrenkelse. Er Maria straffri?',
      solution: `**Analyse av straffbarhetsbetingelsene:**

1. **Lovkravet:** Marias handling – å slå en person i ansiktet – rammes av straffeloven § 271 om kroppskrenkelse.
2. **Skyldkravet:** Maria handlet med forsett – hun slo bevisst.
3. **Tilregnelighet:** Maria var tilregnelig.
4. **Straffrihetsgrunner:** Maria handlet i **nødverge** etter straffeloven § 18. Ranet utgjør et «ulovlig angrep», og det å slå angriperen for å komme fri var en forholdsmessig forsvarshandling.

**Konklusjon:** Maria er straffri. Selv om de tre første vilkårene er oppfylt, foreligger det en straffrihetsgrunn (nødverge). Det fjerde vilkåret – fravær av straffrihetsgrunner – er dermed ikke oppfylt, og Maria kan ikke straffes.`
    },
    {
      id: 'rtl2-3-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende personer er utilregnelig etter straffeloven § 20?',
        options: [
          { id: 'a', text: 'En 17 år gammel elev som begår hærverk', isCorrect: false },
          { id: 'b', text: 'En person som var sterkt beruset da han begikk volden', isCorrect: false },
          { id: 'c', text: 'En 14 år gammel jente som stjeler fra en butikk', isCorrect: true },
          { id: 'd', text: 'En person som handlet i sinne etter en krangel', isCorrect: false }
        ],
        solution: 'Den kriminelle lavalderen i Norge er 15 år, jf. straffeloven § 20 første ledd bokstav a. En 14-åring er derfor utilregnelig og kan ikke straffes. Selvforskyldt rus (alternativ b) fritar ikke for straff, jf. straffeloven § 20 annet ledd. En 17-åring er over den kriminelle lavalderen, og sinne er ikke en straffrihetsgrunn.'
      }
    },
    {
      id: 'rtl2-3-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-1-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer analogiforbudet i strafferetten?',
        options: [
          { id: 'a', text: 'At straffelover ikke kan endres etter at de er vedtatt', isCorrect: false },
          { id: 'b', text: 'At straffebestemmelser ikke kan anvendes utvidende til ulempe for tiltalte', isCorrect: true },
          { id: 'c', text: 'At dommere ikke kan bruke tidligere dommer som rettskilde', isCorrect: false },
          { id: 'd', text: 'At to lovbrudd ikke kan straffes samtidig', isCorrect: false }
        ],
        solution: 'Analogiforbudet er en side av legalitetsprinsippet og innebærer at straffebestemmelser ikke kan tolkes utvidende (analogisk) til ulempe for tiltalte. Dersom en handling ikke dekkes av ordlyden i et straffebud, kan man ikke «strekke» bestemmelsen til å omfatte handlingen – selv om den ligner på det loven forbyr.'
      }
    },
    {
      id: 'rtl2-3-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hva som menes med at straffbarhetsbetingelsene er «kumulative». Gi et eksempel på en situasjon der tre av fire vilkår er oppfylt, men personen likevel ikke kan straffes.',
        hints: ['Tenk på hva kumulative vilkår betyr: alle må være oppfylt samtidig.', 'Eksempler kan knyttes til utilregnelighet eller straffrihetsgrunner.'],
        solution: 'At vilkårene er kumulative betyr at alle fire må være oppfylt samtidig. Mangler ett vilkår, kan personen ikke straffes. Eksempel: En 14-åring stjeler en sykkel. Lovkravet er oppfylt (tyveri er straffbart etter strl. § 321), skyldkravet er oppfylt (forsett) og det foreligger ingen straffrihetsgrunn. Men tilregnelighetskravet er ikke oppfylt fordi personen er under 15 år. Resultatet er at 14-åringen ikke kan straffes.'
      }
    },
    {
      id: 'rtl2-3-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ahmed (19 år) ser at en eldre mann holder på å drukne i en elv. Ahmed hopper et gjerde med «privat eiendom – ingen adgang»-skilt for å komme til elvebredden og redde mannen. Grunneieren anmelder Ahmed for ulovlig inntrengning etter straffeloven § 268.\n\na) Gå gjennom de fire straffbarhetsbetingelsene.\nb) Vurder om Ahmed har en straffrihetsgrunn.\nc) Hva blir konklusjonen?',
        hints: ['Vurder om nødrett etter straffeloven § 17 kan være relevant.'],
        solution: `a) Straffbarhetsbetingelsene:
1. Lovkravet: Ulovlig inntrengning rammes av straffeloven § 268. Oppfylt.
2. Skyldkravet: Ahmed handlet med forsett – han så skiltet og valgte bevisst å hoppe gjerdet. Oppfylt.
3. Tilregnelighet: Ahmed er 19 år og det er ingen holdepunkter for utilregnelighet. Oppfylt.
4. Straffrihetsgrunner: Se punkt b.

b) Ahmed handlet for å redde den eldre mannens liv. Straffeloven § 17 om nødrett er aktuell: handlingen ble foretatt for å avverge en fare for en annens liv, faren kunne ikke avverges på annen rimelig måte, og skaden ved inntrengningen er ubetydelig sammenlignet med faren for tap av liv.

c) Konklusjon: Ahmed er straffri. Nødrett etter § 17 utgjør en straffrihetsgrunn, og det fjerde vilkåret er dermed ikke oppfylt. Ahmed kan ikke straffes for inntrengningen.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-3-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Straffbarhetsbetingelsene

- For at en person skal kunne straffes, må **fire kumulative vilkår** være oppfylt: lovkrav, skyld, tilregnelighet og fravær av straffrihetsgrunner.
- **Legalitetsprinsippet** (Grunnloven § 96) krever at handlingen må være beskrevet som straffbar i formell lov. Straffelover skal tolkes i samsvar med klarhetskravet og analogiforbudet.
- **Skyldkravet** (straffeloven § 21) forutsetter at gjerningspersonen har utvist forsett eller uaktsomhet.
- **Tilregnelighetskravet** (straffeloven § 20) innebærer at personer under 15 år, psykotiske, sterkt bevissthetsforstyrrede eller psykisk utviklingshemmede i høy grad ikke kan straffes. Selvforskyldt rus fritar ikke.
- **Straffrihetsgrunner** som nødverge (§ 18), nødrett (§ 17) og selvtekt (§ 19) kan gjøre en ellers straffbar handling rettmessig.
- Straffbarhetsbetingelsene er sentrale rettssikkerhetsgarantier som verner borgerne mot vilkårlig maktbruk fra staten.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-3-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Stortinget vedtar en ny lov som kriminaliserer en bestemt type næringsvirksomhet. Loven trer i kraft 1. januar 2026. Per drev denne virksomheten lovlig i hele 2025. Påtalemyndigheten ønsker å straffeforfølge Per for virksomheten han drev i 2025.\n\na) Hvilke prinsipper i Grunnloven er relevante?\nb) Kan Per straffes for virksomheten han drev i 2025?\nc) Kan Per straffes dersom han fortsetter virksomheten etter 1. januar 2026?',
        hints: ['Grunnloven § 97 forbyr tilbakevirkende lover. Se også Grunnloven § 96.'],
        solution: `a) To grunnlovsprinsipper er relevante: legalitetsprinsippet (§ 96) – ingen kan dømmes uten etter lov – og tilbakevirkningsforbudet (§ 97) – ingen lov må gis tilbakevirkende kraft.

b) Per kan ikke straffes for virksomheten i 2025. Handlingen var lovlig da den ble utført, og Grunnloven § 97 forbyr at den nye straffeloven gis tilbakevirkende kraft. Legalitetsprinsippet krever at straffebudet må ha eksistert på handlingstidspunktet.

c) Ja, Per kan straffes dersom han fortsetter virksomheten etter 1. januar 2026. Fra dette tidspunktet er handlingen beskrevet som straffbar i lov, og lovkravet er oppfylt. Per har hatt mulighet til å innrette seg etter den nye loven.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Skyldkrav og skyldgrader
// ============================================================================

export const CHAPTER_RETTSLAERE_2_3_2: TextbookChapter = {
  id: 'rettslaere-2-3-2',
  courseId: 'rettslaere-2',
  chapterNumber: '3.2',
  title: 'Skyldkrav og skyldgrader',
  description: 'Forsett (hensiktsforsett, sannsynlighetsforsett, eventuelt forsett) og uaktsomhet (grov og simpel).',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske reaksjonssystemet og bruke straffleggingsbetingelsene til å vurdere straff etter rettsregler om seksuallovbrudd, voldslovbrudd og vinningslovbrudd'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-3-2-intro',
      type: 'text',
      content: `## Skyldkrav og skyldgrader

Det andre straffbarhetsvilkåret er **skyldkravet**. Straffeloven § 21 fastsetter at straffeansvar forutsetter at lovbryteren har handlet med **forsett**, med mindre straffebudet bestemmer at også uaktsomhet rammes.

Skyldkravet uttrykker et grunnleggende rettferdighetsprinsipp: vi straffer bare den som kan klandres for sin handling. En person som uten egen skyld forårsaker skade, skal ikke straffes. Det er derfor avgjørende å forstå de ulike skyldformene og gradene av skyld, fordi skyldgraden har direkte betydning for om handlingen er straffbar, og for straffens strenghet.`
    },

    // --- BLOKK 1: Forsett ---
    {
      id: 'rtl2-3-2-def-1',
      type: 'definition',
      title: 'Forsett',
      content: `**Forsett** er den strengeste skyldformen og innebærer at gjerningspersonen handlet med vilje eller bevissthet om at handlingen ville oppfylle gjerningsbeskrivelsen i straffebudet. Straffeloven § 22 definerer tre former for forsett:

1. **Hensiktsforsett** – gjerningspersonen handler med det formål å oppnå det straffbare resultatet
2. **Sannsynlighetsforsett** – gjerningspersonen holder det for **sikkert eller mest sannsynlig** (over 50 %) at handlingen vil oppfylle gjerningsbeskrivelsen
3. **Eventuelt forsett (dolus eventualis)** – gjerningspersonen holder det for **mulig** at handlingen oppfyller gjerningsbeskrivelsen, og velger å handle selv om det skulle være tilfellet (den positive innvilgelsesteori)

Hovedregelen er at forsett kreves for straffansvar. Uaktsomhet er bare tilstrekkelig der straffebudet uttrykkelig sier det.`
    },
    {
      id: 'rtl2-3-2-text-1',
      type: 'text',
      content: `### De tre forsettformene i praksis

**Hensiktsforsett** er den klareste formen. Gjerningspersonen ønsker å oppnå det straffbare resultatet. Eksempel: A skyter B med det formål å drepe ham. Hensikten – å ta livet av B – er selve motivasjonen for handlingen.

**Sannsynlighetsforsett** foreligger når gjerningspersonen innser at det straffbare resultatet er en overveiende sannsynlig følge av handlingen. Eksempel: A tenner på et hus der han vet at det befinner seg mennesker. Selv om A kanskje ikke ønsker å drepe noen, anser han det som mest sannsynlig at personene inne i huset vil omkomme.

**Eventuelt forsett (dolus eventualis)** er den nedre grensen for forsett og brukes i tilfeller der gjerningspersonen ser muligheten for det straffbare resultatet, men ikke anser det som mest sannsynlig. Kjernen er den **positive innvilgelsen**: gjerningspersonen bestemmer seg for å gjennomføre handlingen selv om det straffbare resultatet skulle inntre. Eksempel: A slår B kraftig i hodet under et slagsmål. A tenker at B kanskje kan dø, men bestemmer seg for at han ville slått uansett.

Dolus eventualis er omstridt i juridisk teori og brukes med forsiktighet av domstolene. Høyesterett har understreket at den positive innvilgelsesteorien krever at gjerningspersonen faktisk har tatt et bevisst valg.`
    },
    {
      id: 'rtl2-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Forsettformene',
      problem: 'Tre gjerningspersoner er tiltalt for å ha skadet en annen person. Klassifiser skyldformen:\n\na) Anna knivstikker Berit fordi hun ønsker å skade henne.\nb) Carl kaster en tung stein fra en bro ned mot en folkemengde. Han anser det som overveiende sannsynlig at steinen vil treffe noen.\nc) David deltar i et slagsmål og slår med en flaske. Han tenker at flasken kan knuse og skade motparten, men ville slått uansett.',
      solution: `**a) Anna – hensiktsforsett:**
Anna handler med det bevisste formålet å skade Berit. Skaden er selve hensikten med handlingen.

**b) Carl – sannsynlighetsforsett:**
Carl ønsker kanskje ikke å treffe noen bestemt person, men han holder det for mest sannsynlig (over 50 %) at steinen vil treffe noen i folkemengden. Han handler likevel.

**c) David – eventuelt forsett (dolus eventualis):**
David anser det ikke som mest sannsynlig at flasken vil knuse og skade motparten, men han ser det som en mulighet. Han velger likevel å slå – han ville gjort det «selv om» skaden var sikker. Den positive innvilgelsen er oppfylt.`
    },
    {
      id: 'rtl2-3-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedregelen for skyldkrav i strafferetten?',
        options: [
          { id: 'a', text: 'Uaktsomhet er tilstrekkelig for alle straffebud', isCorrect: false },
          { id: 'b', text: 'Forsett kreves med mindre straffebudet bestemmer at uaktsomhet er tilstrekkelig', isCorrect: true },
          { id: 'c', text: 'Alle lovbrudd krever hensiktsforsett', isCorrect: false },
          { id: 'd', text: 'Skyldkravet avhenger av straffens strenghet', isCorrect: false }
        ],
        solution: 'Straffeloven § 21 fastsetter at forsett er hovedregelen for straffansvar. Uaktsomhet er bare tilstrekkelig der straffebudet uttrykkelig bestemmer det. De fleste straffebud i straffeloven krever derfor forsett.'
      }
    },

    // --- BLOKK 2: Uaktsomhet ---
    {
      id: 'rtl2-3-2-def-2',
      type: 'definition',
      title: 'Uaktsomhet',
      content: `**Uaktsomhet** foreligger når gjerningspersonen handler i strid med kravet til forsvarlig opptreden på et område, og ut fra sine personlige forutsetninger kan bebreides for dette. Uaktsomhet deles i to grader:

**Grov uaktsomhet** – gjerningspersonen har handlet **svært klanderverdig**, og det er grunnlag for sterk bebreidelse. Det foreligger et markert avvik fra forsvarlig handlemåte. Mange straffebud har forhøyet strafferamme ved grov uaktsomhet.

**Simpel (vanlig) uaktsomhet** – gjerningspersonen har handlet i strid med det forsvarlige, men avviket er mindre markert enn ved grov uaktsomhet.

Vurderingen av uaktsomhet er **objektiv**: man spør hva en alminnelig fornuftig person ville ha gjort i samme situasjon. Men det tas også hensyn til gjerningspersonens individuelle forutsetninger (alder, erfaring, kunnskap).`
    },
    {
      id: 'rtl2-3-2-text-2',
      type: 'text',
      content: `### Grensen mellom forsett og uaktsomhet

Skillet mellom forsett og uaktsomhet er av stor praktisk betydning:

| | **Forsett** | **Uaktsomhet** |
|---|---|---|
| Bevissthet | Gjerningspersonen innser at handlingen (sannsynligvis) oppfyller gjerningsbeskrivelsen | Gjerningspersonen burde ha innsett dette |
| Viljeselement | Gjerningspersonen velger å handle til tross for bevisstheten | Gjerningspersonen handler uten tilstrekkelig aktpågivenhet |
| Straffbarhet | Alltid straffbart (dersom øvrige vilkår er oppfylt) | Bare straffbart der straffebudet bestemmer det |
| Straff | Høyere strafferamme | Lavere strafferamme |

Grensen har også betydning for **skyldspørsmålet** i retten: Aktor må bevise gjerningspersonens skyldform utover enhver rimelig tvil.

**Bevisst uaktsomhet** er et grensetilfelle. Her er gjerningspersonen klar over risikoen, men regner med at det vil gå bra. Forskjellen fra eventuelt forsett er at den bevisst uaktsomme ikke har foretatt den positive innvilgelsen – vedkommende ville **ikke** ha handlet dersom det straffbare resultatet var sikkert.`
    },
    {
      id: 'rtl2-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Grov og simpel uaktsomhet',
      problem: 'To bilister er involvert i hver sin ulykke:\n\na) Frida kjører 55 km/t i en 50-sone i god sikt og tørr vei. Hun kolliderer med en fotgjenger som plutselig krysser veien.\nb) Gustav kjører 110 km/t i en 60-sone mens han leser meldinger på telefonen i mørket. Han kjører ned en syklist.\n\nVurder skyldgraden for hver av dem.',
      solution: `**a) Frida – simpel uaktsomhet:**
Frida overskrider fartsgrensen med 5 km/t, noe som er et moderat avvik fra forsvarlig opptreden. Forholdene var gode (god sikt, tørr vei), og fotgjengeren opptrådte uforutsigbart. Avviket fra forsvarlig opptreden er begrenset, og Frida kan bebreides i noen grad, men ikke sterkt. Dette er simpel uaktsomhet.

**b) Gustav – grov uaktsomhet:**
Gustav overskrider fartsgrensen med 50 km/t, ser på telefonen (distrahert kjøring) og kjører i mørket. Dette representerer et **markert avvik** fra forsvarlig handlemåte, og det er grunnlag for sterk bebreidelse. Flere risikofaktorer er til stede samtidig. Gustav har utvist grov uaktsomhet.

Skyldgraden har direkte betydning for straffeutmålingen: Gustav risikerer en vesentlig strengere straff enn Frida.`
    },
    {
      id: 'rtl2-3-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skiller eventuelt forsett (dolus eventualis) fra bevisst uaktsomhet?',
        options: [
          { id: 'a', text: 'Ved eventuelt forsett er gjerningspersonen klar over risikoen, ved bevisst uaktsomhet er vedkommende ikke det', isCorrect: false },
          { id: 'b', text: 'Ved eventuelt forsett ville gjerningspersonen handlet selv om resultatet var sikkert (positiv innvilgelse), ved bevisst uaktsomhet ville vedkommende ikke det', isCorrect: true },
          { id: 'c', text: 'Eventuelt forsett krever at resultatet var mest sannsynlig, bevisst uaktsomhet krever bare at det var mulig', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begrepene brukes om hverandre', isCorrect: false }
        ],
        solution: 'Forskjellen ligger i den positive innvilgelsen. Ved dolus eventualis har gjerningspersonen bestemt seg for å handle «selv om» det straffbare resultatet skulle inntre – vedkommende har akseptert risikoen og ville handlet uansett. Ved bevisst uaktsomhet er gjerningspersonen klar over risikoen, men regner med at det vil gå bra og ville ikke ha handlet dersom resultatet var sikkert.'
      }
    },
    {
      id: 'rtl2-3-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom hensiktsforsett, sannsynlighetsforsett og eventuelt forsett med ett eget eksempel for hver skyldform.',
        hints: ['Bruk konkrete situasjoner som tydeliggjør forskjellene.'],
        solution: 'Hensiktsforsett: A planlegger og gjennomfører et tyveri – formålet er å stjele. Sannsynlighetsforsett: B fyrer opp et bål rett ved en tørr låve og innser at det er overveiende sannsynlig at låven vil ta fyr, men gjør det likevel. Eventuelt forsett: C sender en aggressiv hund løs i en park. Han ser det som mulig at hunden biter noen, men bestemmer seg for at han ville gjort det uansett – den positive innvilgelsen er oppfylt.'
      }
    },
    {
      id: 'rtl2-3-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Henrik kjører bil i 90 km/t gjennom et boligområde med fartsgrense 30 km/t. Han er klar over at det kan befinne seg barn i veien, men tenker at han nok vil rekke å bremse. Han treffer en syklist som påføres alvorlige skader.\n\na) Drøft om Henrik har handlet med eventuelt forsett eller grov uaktsomhet.\nb) Hvilken betydning har skyldformen for tiltalen og straffen?',
        hints: ['Vurder om Henrik har foretatt en positiv innvilgelse.', 'Tenk på forskjellen mellom å akseptere risikoen og å regne med at det vil gå bra.'],
        solution: `a) Vurderingen beror på om Henrik har foretatt en positiv innvilgelse. Henrik er klar over risikoen for at noen kan bli skadet, men han «regner med at det vil gå bra» – han tenker at han vil rekke å bremse. Dette taler for bevisst uaktsomhet, ikke eventuelt forsett. Henrik har ikke bestemt seg for å kjøre på noen «uansett»; han håper tvert imot at det vil gå bra.

Fartsovertredelsen (90 i 30-sone) og boligområdet gjør dette til et svært markert avvik fra forsvarlig opptreden, som gir grunnlag for sterk bebreidelse. Henrik har utvist grov uaktsomhet.

b) Skyldformen har stor betydning. Ved forsettlig grov kroppsskade (strl. § 274) er strafferammen fengsel inntil 10 år. Ved grovt uaktsom kroppsskade (strl. § 272 jf. § 23) er strafferammen vesentlig lavere. Tiltalen vil derfor lyde på grovt uaktsom kroppsskade, med en mildere straff enn om forsett var bevist.`
      }
    },
    {
      id: 'rtl2-3-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-2-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner grov uaktsomhet?',
        options: [
          { id: 'a', text: 'Et lite avvik fra forsvarlig opptreden', isCorrect: false },
          { id: 'b', text: 'At gjerningspersonen handlet med vilje', isCorrect: false },
          { id: 'c', text: 'Et markert avvik fra forsvarlig handlemåte som gir grunnlag for sterk bebreidelse', isCorrect: true },
          { id: 'd', text: 'At skaden var uforutsigbar for alle', isCorrect: false }
        ],
        solution: 'Grov uaktsomhet foreligger når gjerningspersonen har handlet svært klanderverdig, og det er et markert avvik fra forsvarlig handlemåte. Det kreves at det er grunnlag for sterk bebreidelse. Grov uaktsomhet er strengere enn simpel uaktsomhet, men mildere enn forsett.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-3-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Skyldkrav og skyldgrader

- **Forsett** er hovedregelen for straffansvar (straffeloven § 21). Forsett foreligger i tre former: **hensiktsforsett** (formålet er det straffbare resultatet), **sannsynlighetsforsett** (resultatet er overveiende sannsynlig) og **eventuelt forsett** (den positive innvilgelsen – ville handlet uansett).
- **Uaktsomhet** er bare tilstrekkelig der straffebudet uttrykkelig bestemmer det. Uaktsomhet deles i **grov** (markert avvik, sterk bebreidelse) og **simpel** (mindre avvik).
- Grensen mellom eventuelt forsett og bevisst uaktsomhet trekkes ved den **positive innvilgelsen**: ville gjerningspersonen handlet selv om resultatet var sikkert?
- Skyldgraden har direkte betydning for straffbarhet (forsett vs. uaktsomhet), tiltale og straffeutmåling (strengere straff ved høyere skyldgrad).
- Påtalemyndigheten har bevisbyrden for skyld og må bevise gjerningspersonens skyldform **utover enhver rimelig tvil**.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-3-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en oversikt (tabell eller punktliste) som viser de fem skyldformene (hensiktsforsett, sannsynlighetsforsett, eventuelt forsett, grov uaktsomhet, simpel uaktsomhet) rangert fra strengest til mildest. For hver skyldform: beskriv vilkåret med én setning og gi et kort eksempel.',
        hints: ['Start med hensiktsforsett som den strengeste formen.'],
        solution: `1. Hensiktsforsett – gjerningspersonen handler med det formål å oppnå det straffbare resultatet. Eks.: A planlegger et ran og gjennomfører det.
2. Sannsynlighetsforsett – gjerningspersonen holder det for overveiende sannsynlig at handlingen oppfyller gjerningsbeskrivelsen. Eks.: B tenner på et bygg med folk inne og anser det som mest sannsynlig at noen vil omkomme.
3. Eventuelt forsett – gjerningspersonen ser muligheten og ville handlet uansett (positiv innvilgelse). Eks.: C smugler en koffert og har bestemt seg for å gjennomføre selv om den inneholder narkotika.
4. Grov uaktsomhet – markert avvik fra forsvarlig handlemåte, grunnlag for sterk bebreidelse. Eks.: D kjører i 120 km/t gjennom en skolesone.
5. Simpel uaktsomhet – avvik fra forsvarlig opptreden, men mindre markert. Eks.: E overser et vikepliktskilt og forårsaker en kollisjon.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Seksuallovbrudd
// ============================================================================

export const CHAPTER_RETTSLAERE_2_3_3: TextbookChapter = {
  id: 'rettslaere-2-3-3',
  courseId: 'rettslaere-2',
  chapterNumber: '3.3',
  title: 'Seksuallovbrudd',
  description: 'Straffeloven kapittel 26 – rettslig regulering av voldtekt, seksuell handling, overgrep mot mindreårige og samtykkespørsmål.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske reaksjonssystemet og bruke straffleggingsbetingelsene til å vurdere straff etter rettsregler om seksuallovbrudd, voldslovbrudd og vinningslovbrudd'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-3-3-intro',
      type: 'text',
      content: `## Seksuallovbrudd

Seksuallovbrudd er regulert i straffeloven kapittel 26 (§§ 291–320). Disse bestemmelsene verner den enkeltes **seksuelle selvbestemmelsesrett** – retten til selv å bestemme over egen kropp og seksualitet. Lovgivningen beskytter også barn og unge mot seksuell utnyttelse.

Seksuallovbrudd er blant de mest alvorlige forbrytelsene i norsk strafferett, med strenge strafferammer. I dette kapittelet gjennomgår vi de sentrale straffebudene og de rettslige vilkårene for straffansvar. Fremstillingen er juridisk og saklig, med fokus på lovens systematikk og vilkår.`
    },

    // --- BLOKK 1: Voldtekt ---
    {
      id: 'rtl2-3-3-def-1',
      type: 'definition',
      title: 'Voldtekt (straffeloven § 291)',
      content: `**Voldtekt** er definert i straffeloven § 291. Bestemmelsen rammer den som har seksuell omgang med noen som:

a) **ikke har samtykket** i den seksuelle omgangen, eller
b) er **bevisstløs eller av andre grunner ute av stand til å motsette seg** handlingen, eller
c) ved **vold eller truende atferd** tvinges til seksuell omgang, eller
d) har seksuell omgang med noen ved å **utnytte en posisjon** som gir grunnlag for tillit, avhengighet eller frykt.

Strafferammen for voldtekt er fengsel inntil **10 år**. For grov voldtekt (§ 293) er strafferammen fengsel inntil **21 år**.

**Merk:** Etter lovendringen i 2024 er samtykkebasert voldtektsdefinisjon innført i norsk rett. Den seksuelle omgangen må være frivillig og basert på samtykke.`
    },
    {
      id: 'rtl2-3-3-text-1',
      type: 'text',
      content: `### Samtykkekravet

Et sentralt element i voldtektsbestemmelsen er kravet om **samtykke**. Samtykke til seksuell omgang må være:

- **Frivillig** – gitt uten tvang, press eller utnyttelse av sårbar situasjon
- **Aktivt** – taushet eller fravær av motstand utgjør ikke samtykke
- **Informert** – personen må forstå hva vedkommende samtykker til
- **Tilbakekallelig** – samtykke kan trekkes tilbake når som helst

Samtykke kan ikke gis av personer som er **bevisstløse, sovende, sterkt berusede** eller på annen måte ute av stand til å forstå situasjonen. Det stilles heller ikke krav om at fornærmede har gjort fysisk motstand.

**Den seksuelle lavalder** i Norge er **16 år** (straffeloven § 302). Seksuell omgang med barn under 16 år er straffbart uavhengig av samtykke, fordi lovgiver har vurdert at barn under denne alderen ikke har forutsetninger for å samtykke til seksuelle handlinger.`
    },
    {
      id: 'rtl2-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Straffbarhetsvurdering – seksuallovbrudd',
      problem: 'En 22 år gammel mann har seksuell omgang med en 15 år gammel jente. Han hevder at hun samtykket og at han trodde hun var 17 år. Kan mannen straffes?',
      solution: `**Analyse etter straffbarhetsbetingelsene:**

1. **Lovkravet:** Straffeloven § 302 rammer seksuell omgang med barn under 16 år. Handlingen er beskrevet i loven.

2. **Skyldkravet:** Straffeloven § 307 fastsetter at villfarelse om barnets alder **ikke fritar for straff** med mindre ingen uaktsomhet kan legges gjerningspersonen til last med hensyn til alderen. Det er en streng aktsomhetsnorm: mannen hadde plikt til å forsikre seg om jentas alder. At han «trodde» hun var 17, vil sjelden frita for straff.

3. **Tilregnelighet:** Mannen er 22 år og tilregnelig.

4. **Straffrihetsgrunner:** Samtykke fra fornærmede er **ikke** en straffrihetsgrunn ved seksuell omgang med mindreårige – dette er hele poenget med den seksuelle lavalderen.

**Konklusjon:** Mannen kan straffes etter § 302. Samtykke er irrelevant når fornærmede er under 16 år, og hans villfarelse om alderen fritar ham sannsynligvis ikke.`
    },
    {
      id: 'rtl2-3-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den seksuelle lavalderen i Norge?',
        options: [
          { id: 'a', text: '14 år', isCorrect: false },
          { id: 'b', text: '15 år', isCorrect: false },
          { id: 'c', text: '16 år', isCorrect: true },
          { id: 'd', text: '18 år', isCorrect: false }
        ],
        solution: 'Den seksuelle lavalderen i Norge er 16 år, jf. straffeloven § 302. Seksuell omgang med barn under 16 år er straffbart uavhengig av om barnet har samtykket.'
      }
    },

    // --- BLOKK 2: Andre seksuallovbrudd ---
    {
      id: 'rtl2-3-3-def-2',
      type: 'definition',
      title: 'Sentrale straffebud i straffeloven kapittel 26',
      content: `Straffeloven kapittel 26 inneholder flere bestemmelser om seksuallovbrudd:

- **§ 291 Voldtekt** – seksuell omgang uten samtykke. Strafferamme: fengsel inntil 10 år.
- **§ 293 Grov voldtekt** – voldtekt begått under særlig skjerpende omstendigheter (f.eks. gjentatte overgrep, flere gjerningspersoner). Strafferamme: fengsel inntil 21 år.
- **§ 295 Misbruk av overmaktsforhold** – seksuell omgang oppnådd ved misbruk av stilling, avhengighetsforhold eller tillitsforhold. Strafferamme: fengsel inntil 6 år.
- **§ 299 Voldtekt av barn under 14 år** – seksuell omgang med barn under 14 år. Strafferamme: fengsel inntil 10 år (grov: 21 år).
- **§ 302 Seksuell omgang med barn mellom 14 og 16 år** – strafferamme: fengsel inntil 6 år.
- **§ 305 Seksuelt krenkende atferd overfor barn** – strafferamme: fengsel inntil 1 år.
- **§ 311 Fremstilling av seksuelle overgrep mot barn** – strafferamme: fengsel inntil 3 år.`
    },
    {
      id: 'rtl2-3-3-text-2',
      type: 'text',
      content: `### Særlig om overgrep mot barn

Lovgiver har gitt et særlig sterkt vern til barn, og strafferammene er strengere jo yngre barnet er:

**Barn under 14 år:** Straffeloven § 299 likestiller seksuell omgang med barn under 14 år med voldtekt, uavhengig av omstendighetene. Minstestraffen er fengsel i **3 år** for samleie.

**Barn mellom 14 og 16 år:** Straffeloven § 302 rammer seksuell omgang med barn i denne aldersgruppen. Strafferammen er fengsel inntil 6 år.

**Jevnbyrdighet i alder og utvikling:** Straffeloven § 308 gir retten adgang til å frita for straff eller sette ned straffen dersom de involverte er **omtrent jevnbyrdige i alder og utvikling**. Denne bestemmelsen tar hensyn til at ungdommer i lignende alder kan ha frivillig seksuell omgang, og at straffeforfølgning i slike tilfeller kan være uforholdsmessig.

**Internettrelaterte overgrep:** Straffeloven § 306 rammer den som avtaler møte med barn under 16 år med forsett om å begå seksuallovbrudd (grooming). § 311 rammer fremstilling av seksuelle overgrep mot barn.`
    },
    {
      id: 'rtl2-3-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-3-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken betydning har straffeloven § 308 om jevnbyrdighet i alder og utvikling?',
        options: [
          { id: 'a', text: 'Den opphever den seksuelle lavalderen for ungdommer', isCorrect: false },
          { id: 'b', text: 'Den gir retten adgang til å frita for straff eller sette ned straffen dersom partene er omtrent jevnbyrdige i alder og utvikling', isCorrect: true },
          { id: 'c', text: 'Den setter den seksuelle lavalderen til 14 år for jevnaldrende', isCorrect: false },
          { id: 'd', text: 'Den gjelder bare for barn under 14 år', isCorrect: false }
        ],
        solution: 'Straffeloven § 308 gir retten mulighet til å frita for straff eller nedsette straffen dersom de involverte er omtrent jevnbyrdige i alder og utvikling. Bestemmelsen endrer ikke den seksuelle lavalderen, men tar hensyn til at straffeforfølgning av jevnaldrende ungdommer kan være uforholdsmessig.'
      }
    },
    {
      id: 'rtl2-3-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-3-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kreves for at samtykke til seksuell omgang skal være gyldig etter norsk rett?',
        options: [
          { id: 'a', text: 'Det holder at fornærmede ikke sa nei', isCorrect: false },
          { id: 'b', text: 'Samtykke må gis skriftlig', isCorrect: false },
          { id: 'c', text: 'Samtykke må være frivillig, aktivt og kan trekkes tilbake når som helst', isCorrect: true },
          { id: 'd', text: 'Samtykke trenger bare å gis én gang for hele forholdet', isCorrect: false }
        ],
        solution: 'Gyldig samtykke må være frivillig (uten tvang eller press), aktivt (taushet eller fravær av motstand er ikke samtykke), informert og tilbakekallelig. Samtykke kan trekkes tilbake når som helst, og en person som er bevisstløs, sovende eller sterkt beruset kan ikke gi gyldig samtykke.'
      }
    },
    {
      id: 'rtl2-3-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for hva som menes med den seksuelle lavalderen, og forklar hvorfor lovgiver har satt denne til 16 år.',
        hints: ['Tenk på begrunnelsen for aldersgrensen – beskyttelse av barn og unges utvikling.'],
        solution: 'Den seksuelle lavalderen er den alderen en person må ha oppnådd for at seksuell omgang med vedkommende ikke skal være straffbart. I Norge er denne 16 år (strl. § 302). Begrunnelsen er at lovgiver mener barn under 16 år ikke har de nødvendige forutsetningene – modenheten, erfaringen og kunnskapen – for å gi et reelt og informert samtykke til seksuell omgang. Aldersgrensen er satt for å beskytte barn og unges fysiske og psykiske utvikling mot seksuell utnyttelse.'
      }
    },
    {
      id: 'rtl2-3-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En 30 år gammel fotballtrener har seksuell omgang med en 17 år gammel spiller på laget. Spilleren hevder det var frivillig.\n\na) Kan treneren straffes etter § 291 (voldtekt)?\nb) Kan treneren straffes etter § 295 (misbruk av overmaktsforhold)?\nc) Anvend straffbarhetsbetingelsene på det mest aktuelle straffebudet.',
        hints: ['Vurder om forholdet mellom trener og spiller utgjør et tillitsforhold eller avhengighetsforhold.'],
        solution: `a) Spilleren er over 16 år og hevder det var frivillig. Det er dermed ikke umiddelbart grunnlag for tiltale etter § 291 basert på manglende samtykke. Man må likevel vurdere om samtykket var reelt gitt maktforholdet.

b) Straffeloven § 295 rammer den som skaffer seg seksuell omgang ved misbruk av stilling, avhengighetsforhold eller tillitsforhold. Forholdet mellom trener og spiller kan utgjøre et tillitsforhold: treneren har autoritet over spilleren, bestemmer spilletid og påvirker spillerens karriere. Dersom den seksuelle omgangen er oppnådd ved misbruk av dette tillitsforholdet, kan treneren straffes etter § 295.

c) Straffbarhetsbetingelsene for § 295:
1. Lovkravet: § 295 rammer misbruk av tillitsforhold for å oppnå seksuell omgang. Oppfylt.
2. Skyldkravet: Treneren må ha handlet med forsett – bevissthet om at han utnyttet tillitsforholdet. Sannsynligvis oppfylt gitt den åpenbare rolleforskjellen.
3. Tilregnelighet: Oppfylt (30 år, ingen indikasjoner på utilregnelighet).
4. Straffrihetsgrunner: Fornærmedes «samtykke» er ikke en straffrihetsgrunn når det nettopp er oppnådd gjennom misbruk av overmaktsforholdet.
Konklusjon: Treneren kan med stor sannsynlighet straffes etter § 295.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-3-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Seksuallovbrudd

- Seksuallovbrudd er regulert i straffeloven kapittel 26 og verner den enkeltes **seksuelle selvbestemmelsesrett**.
- **Voldtekt** (§ 291) er seksuell omgang uten samtykke. Strafferammen er fengsel inntil 10 år (grov voldtekt inntil 21 år).
- **Samtykke** må være frivillig, aktivt og tilbakekallelig. Taushet eller fravær av motstand utgjør ikke samtykke. Bevisstløse, sovende eller sterkt berusede personer kan ikke samtykke.
- Den **seksuelle lavalderen** er 16 år (§ 302). Seksuell omgang med barn under 16 år er straffbart uavhengig av samtykke.
- Seksuell omgang med barn under 14 år likestilles med voldtekt (§ 299), med minstestraff 3 år for samleie.
- **§ 295** rammer misbruk av overmaktsforhold for å oppnå seksuell omgang (tillitsforhold, avhengighetsforhold).
- **§ 308** gir adgang til straffritak ved jevnbyrdighet i alder og utvikling.
- Villfarelse om alder fritar normalt **ikke** for straff (§ 307).`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-3-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en oversikt over de sentrale straffebudene i straffeloven kapittel 26 som er gjennomgått i dette kapittelet. For hvert straffebud: oppgi paragraf, gjerningsbeskrivelse (kort) og strafferamme.',
        hints: ['Inkluder §§ 291, 293, 295, 299, 302, 305, 306 og 311.'],
        solution: `§ 291 Voldtekt – seksuell omgang uten samtykke. Fengsel inntil 10 år.
§ 293 Grov voldtekt – voldtekt under særlig skjerpende omstendigheter. Fengsel inntil 21 år.
§ 295 Misbruk av overmaktsforhold – seksuell omgang oppnådd ved misbruk av stilling eller tillitsforhold. Fengsel inntil 6 år.
§ 299 Voldtekt av barn under 14 år – seksuell omgang med barn under 14 år. Fengsel inntil 10 år (grov: 21 år). Minstestraff 3 år for samleie.
§ 302 Seksuell omgang med barn 14–16 år – strafferamme fengsel inntil 6 år.
§ 305 Seksuelt krenkende atferd overfor barn – fengsel inntil 1 år.
§ 306 Grooming – avtale om møte med barn under 16 år med forsett om seksuallovbrudd. Fengsel inntil 1 år.
§ 311 Fremstilling av seksuelle overgrep mot barn – fengsel inntil 3 år.`
      }
    },
    {
      id: 'rtl2-3-3-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-3-oppg-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'En 20 år gammel mann har seksuell omgang med en 15 år gammel jente. Han hevder han trodde hun var 16 år. Straffeloven § 307 bestemmer at villfarelse om alder ikke fritar for straff med mindre «ingen uaktsomhet foreligger». Hva innebærer dette?',
        options: [
          { id: 'a', text: 'Mannen frifinnes automatisk dersom han trodde hun var 16', isCorrect: false },
          { id: 'b', text: 'Mannen frifinnes bare dersom han har gjort alt som med rimelighet kan forventes for å avklare alderen, og likevel tok feil', isCorrect: true },
          { id: 'c', text: 'Villfarelse om alder er alltid en straffrihetsgrunn ved seksuallovbrudd', isCorrect: false },
          { id: 'd', text: 'Mannen kan bare straffes dersom han visste at jenta var 15 år', isCorrect: false }
        ],
        solution: 'Straffeloven § 307 oppstiller en svært streng aktsomhetsnorm: villfarelse om fornærmedes alder fritar bare for straff dersom «ingen uaktsomhet» kan legges gjerningspersonen til last. Dette betyr at mannen må ha gjort alt som med rimelighet kan forventes – for eksempel sjekket legitimasjon – og likevel tok feil. I praksis frifinnes tiltalte svært sjelden på dette grunnlaget.'
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: Voldslovbrudd
// ============================================================================

export const CHAPTER_RETTSLAERE_2_3_4: TextbookChapter = {
  id: 'rettslaere-2-3-4',
  courseId: 'rettslaere-2',
  chapterNumber: '3.4',
  title: 'Voldslovbrudd',
  description: 'Straffeloven kapittel 25 – kroppskrenkelse, kroppsskade, grov kroppsskade og drap.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske reaksjonssystemet og bruke straffleggingsbetingelsene til å vurdere straff etter rettsregler om seksuallovbrudd, voldslovbrudd og vinningslovbrudd'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-3-4-intro',
      type: 'text',
      content: `## Voldslovbrudd

Voldslovbrudd er regulert i straffeloven kapittel 25 (§§ 271–288). Bestemmelsene verner enkeltpersoners **fysiske integritet** – retten til ikke å bli utsatt for vold og legemskrenkelser.

Voldslovbruddene er gradert etter alvorlighetsgrad, fra relativt milde kroppskrenkelser til de mest alvorlige forbrytelsene: grov kroppsskade og drap. Strafferammene gjenspeiler denne graderingen, med økende straff for mer alvorlige krenkelser.

I dette kapittelet gjennomgår vi de sentrale straffebudene om voldslovbrudd, hvordan handlingene klassifiseres etter alvorlighetsgrad, og hvordan straffbarhetsbetingelsene anvendes på typiske voldstilfeller.`
    },

    // --- BLOKK 1: Kroppskrenkelse og kroppsskade ---
    {
      id: 'rtl2-3-4-def-1',
      type: 'definition',
      title: 'Kroppskrenkelse (straffeloven § 271)',
      content: `**Kroppskrenkelse** er den mildeste formen for voldslovbrudd og er definert i straffeloven § 271. Bestemmelsen rammer den som øver vold mot en annen person.

«Vold» i lovens forstand omfatter enhver fysisk maktanvendelse mot en annen persons kropp, for eksempel:
- Slag, spark, dytt, kloring
- Å kaste gjenstander mot noen
- Å holde noen fast mot sin vilje

Strafferammen for kroppskrenkelse er **bot eller fengsel inntil 1 år**. For **grov kroppskrenkelse** (§ 272) er strafferammen fengsel inntil **6 år**.

Grov kroppskrenkelse foreligger når krenkelsen har hatt til følge sterk smerte, skade eller død, eller det foreligger andre skjerpende omstendigheter (bruk av våpen, angrep mot forsvarsløs person mv.).`
    },
    {
      id: 'rtl2-3-4-def-2',
      type: 'definition',
      title: 'Kroppsskade (straffeloven § 273)',
      content: `**Kroppsskade** er en mer alvorlig form for voldslovbrudd, definert i straffeloven § 273. Bestemmelsen rammer den som skader en annen på kropp eller helse, gjør en annen fysisk maktesløs, eller fremkaller bevisstløshet eller liknende tilstand.

Strafferammen for kroppsskade er fengsel inntil **6 år**. For **grov kroppsskade** (§ 274) er strafferammen fengsel inntil **10 år** (inntil 15 år dersom handlingen har døden til følge).

Grov kroppsskade foreligger blant annet ved:
- Betydelig skade på kropp eller helse
- Bruk av særlig farlig redskap (kniv, slagvåpen)
- Handlingen er begått mot en forsvarsløs person
- Handlingen har preg av mishandling`
    },
    {
      id: 'rtl2-3-4-text-1',
      type: 'text',
      content: `### Graderingen av voldslovbrudd

Straffeloven opererer med en hierarkisk gradering av voldslovbrudd etter alvorlighetsgrad:

| **Straffebud** | **Handling** | **Strafferamme** |
|---|---|---|
| § 271 Kroppskrenkelse | Vold mot en annen | Bot/fengsel inntil 1 år |
| § 272 Grov kroppskrenkelse | Kroppskrenkelse med skjerpende omstendigheter | Fengsel inntil 6 år |
| § 273 Kroppsskade | Skade på kropp eller helse | Fengsel inntil 6 år |
| § 274 Grov kroppsskade | Kroppsskade med skjerpende omstendigheter | Fengsel inntil 10 år (15 år ved døden til følge) |
| § 275 Drap | Å drepe en annen person | Fengsel inntil 21 år |

Graderingen har betydning for tiltalen påtalemyndigheten tar ut, og for straffeutmålingen. Domstolen må ta stilling til hvilken bestemmelse som passer, basert på handlingens karakter og skadens omfang.`
    },
    {
      id: 'rtl2-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Klassifisering av voldslovbrudd',
      problem: 'I en krangel på et utested skjer følgende tre hendelser. Klassifiser hvert tilfelle:\n\na) Ola dytter Kari så hun faller bakover og slår hodet i gulvet. Hun får en kul.\nb) Per slår Erik i ansiktet med knyttneven slik at Erik mister to tenner og får et brukket kjeveben.\nc) Siri stikker Lena med en kniv i låret, noe som medfører alvorlig blødning og langvarig skade.',
      solution: `**a) Ola – kroppskrenkelse (§ 271) eller grov kroppskrenkelse (§ 272):**
Et dytt er vold i lovens forstand og rammes av § 271. Dersom hodeskaden er mer alvorlig enn en kul (f.eks. hjernerystelse), kan forholdet subsumeres som grov kroppskrenkelse etter § 272 på grunn av skadefølgen.

**b) Per – kroppsskade (§ 273) eller grov kroppsskade (§ 274):**
Å miste tenner og brekke kjevebenet utgjør skade på kropp. Forholdet rammes av § 273. Dersom skaden vurderes som «betydelig», kan forholdet bedømmes som grov kroppsskade etter § 274.

**c) Siri – grov kroppsskade (§ 274):**
Bruk av kniv utgjør et «særlig farlig redskap», og den alvorlige blødningen og langvarige skaden utgjør skjerpende omstendigheter. Forholdet rammes av § 274 om grov kroppsskade. Strafferammen er fengsel inntil 10 år.`
    },
    {
      id: 'rtl2-3-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er strafferammen for kroppskrenkelse etter straffeloven § 271?',
        options: [
          { id: 'a', text: 'Bot eller fengsel inntil 1 år', isCorrect: true },
          { id: 'b', text: 'Fengsel inntil 3 år', isCorrect: false },
          { id: 'c', text: 'Fengsel inntil 6 år', isCorrect: false },
          { id: 'd', text: 'Fengsel inntil 10 år', isCorrect: false }
        ],
        solution: 'Strafferammen for kroppskrenkelse etter § 271 er bot eller fengsel inntil 1 år. Dette er den mildeste strafferammen for voldslovbrudd, og gjenspeiler at kroppskrenkelse er den minst alvorlige formen.'
      }
    },

    // --- BLOKK 2: Drap og skjerpende omstendigheter ---
    {
      id: 'rtl2-3-4-def-3',
      type: 'definition',
      title: 'Drap (straffeloven § 275)',
      content: `**Drap** er den mest alvorlige voldsforbrytelsen og er definert i straffeloven § 275: «Den som dreper en annen, straffes med fengsel fra 8 inntil 21 år.»

Drap har en **minstestraff** på 8 års fengsel, som er den høyeste minstestraffen i norsk strafferett. Maksimumsstraffen er 21 år – den strengeste straffen som kan idømmes for et enkelt lovbrudd.

**Uaktsomt drap** (§ 281) rammer den som uaktsomt forvolder en annens død. Strafferammen er fengsel inntil 6 år. Uaktsomt drap i trafikken er den vanligste formen for uaktsomt drap.

**Medvirkning til selvmord** (§ 277) rammer den som medvirker til at noen tar sitt eget liv. Eutanasi (aktiv dødshjelp) er straffbart som drap eller medvirkning til selvmord etter norsk rett.`
    },
    {
      id: 'rtl2-3-4-text-2',
      type: 'text',
      content: `### Straffeutmåling ved voldslovbrudd

Ved straffeutmåling i voldssaker vurderer domstolen en rekke **skjerpende og formildende omstendigheter**:

**Skjerpende omstendigheter (straffeloven § 77):**
- Handlingen er begått mot en forsvarsløs person (barn, eldre, funksjonshemmet)
- Handlingen har preg av mishandling over tid
- Bruk av våpen eller særlig farlig redskap
- Handlingen er begått i fellesskap med andre
- Rasistisk, homofobisk eller diskriminerende motiv

**Formildende omstendigheter (straffeloven § 78):**
- Gjerningspersonen har handlet i berettiget harme (provokasjon)
- Gjerningspersonen har avgitt uforbeholden tilståelse
- Det har gått lang tid siden handlingen (liggetid)
- Gjerningspersonen var under 18 år på handlingstidspunktet

**Mishandling i nære relasjoner (§ 282):** Denne bestemmelsen rammer vedvarende vold, trusler eller tvang mot nåværende eller tidligere partner, barn, foreldre eller andre i gjerningspersonens husstand. Strafferammen er fengsel inntil 6 år (grov mishandling § 283: inntil 15 år).`
    },
    {
      id: 'rtl2-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Straffbarhetsbetingelsene ved voldslovbrudd',
      problem: 'Lars (20 år) blir provosert av en mann på en fest og slår ham i ansiktet. Mannen faller og slår hodet i et bord. Han får en alvorlig hodeskade. Lars sier at han bare mente å gi ham et «lett slag» og ikke ønsket alvorlig skade. Vurder straffbarheten og aktuelt straffebud.',
      solution: `**Straffbarhetsbetingelsene:**

1. **Lovkravet:** Å slå en person rammes av straffeloven § 271 (kroppskrenkelse). Den alvorlige hodeskaden kan føre til at forholdet vurderes som grov kroppskrenkelse (§ 272) eller kroppsskade (§ 273).

2. **Skyldkravet:** Lars handlet med forsett når det gjelder selve slaget – han slo bevisst. Spørsmålet er om han hadde forsett om den alvorlige skadefølgen. § 24 om uforsettlig følge er relevant: dersom en handling forårsaker en følge som går ut over gjerningspersonens forsett, kan vedkommende straffes for følgen dersom den er forårsaket ved uaktsomhet. Lars burde ha forstått at et slag kunne medføre alvorlig skade – uaktsomhet foreligger.

3. **Tilregnelighet:** Lars er 20 år og tilregnelig.

4. **Straffrihetsgrunner:** Provokasjon er **ikke** en straffrihetsgrunn, men en formildende omstendighet ved straffeutmåling (§ 78 bokstav c).

**Konklusjon:** Lars kan dømmes for grov kroppskrenkelse (§ 272) – kroppskrenkelse med alvorlig skadefølge. Provokasjonen kan virke formildende på straffen, men fritar ikke for straff.`
    },
    {
      id: 'rtl2-3-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-4-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er minstestraffen for drap etter straffeloven § 275?',
        options: [
          { id: 'a', text: '3 års fengsel', isCorrect: false },
          { id: 'b', text: '6 års fengsel', isCorrect: false },
          { id: 'c', text: '8 års fengsel', isCorrect: true },
          { id: 'd', text: '15 års fengsel', isCorrect: false }
        ],
        solution: 'Minstestraffen for drap etter § 275 er fengsel i 8 år. Dette er den høyeste minstestraffen i norsk strafferett og gjenspeiler at drap er den mest alvorlige forbrytelsen. Maksimumsstraffen er 21 år.'
      }
    },
    {
      id: 'rtl2-3-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-4-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende omstendigheter er skjerpende ved straffeutmåling i voldssaker?',
        options: [
          { id: 'a', text: 'At gjerningspersonen har avgitt uforbeholden tilståelse', isCorrect: false },
          { id: 'b', text: 'At handlingen ble begått i berettiget harme', isCorrect: false },
          { id: 'c', text: 'At volden er begått mot en forsvarsløs person', isCorrect: true },
          { id: 'd', text: 'At det har gått lang tid siden handlingen', isCorrect: false }
        ],
        solution: 'Vold mot en forsvarsløs person (barn, eldre, funksjonshemmet) er en skjerpende omstendighet etter straffeloven § 77. Tilståelse, provokasjon og liggetid er formildende omstendigheter etter § 78.'
      }
    },
    {
      id: 'rtl2-3-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-4-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom kroppskrenkelse (§ 271), kroppsskade (§ 273) og drap (§ 275). Bruk strafferammene til å illustrere graderingen.',
        hints: ['Tenk på skadeomfanget som den sentrale forskjellen.'],
        solution: 'Kroppskrenkelse (§ 271) er vold mot en person uten krav om konkret skade – selve voldshandlingen er nok. Strafferamme: bot/fengsel inntil 1 år. Kroppsskade (§ 273) krever at noen er skadet på kropp eller helse – det må foreligge en målbar skade. Strafferamme: fengsel inntil 6 år. Drap (§ 275) er den mest alvorlige formen – en annen persons død er forårsaket. Strafferamme: fengsel 8–21 år. Graderingen gjenspeiler at mer alvorlige konsekvenser medfører strengere straff.'
      }
    },
    {
      id: 'rtl2-3-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-4-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Martin har i tre år gjentatte ganger utsatt samboeren sin for vold og trusler. Samboeren anmelder forholdet.\n\na) Hvilket straffebud er mest aktuelt?\nb) Hva gjør dette straffebudet forskjellig fra de ordinære voldsbestemmelsene?\nc) Nevn to skjerpende omstendigheter som kan være relevante i saken.',
        hints: ['Vurder straffeloven § 282 om mishandling i nære relasjoner.'],
        solution: `a) Straffeloven § 282 om mishandling i nære relasjoner er mest aktuelt. Bestemmelsen rammer den som ved trusler, tvang, frihetsberøvelse, vold eller andre krenkelser alvorlig eller gjentatt mishandler nåværende eller tidligere samboer.

b) § 282 skiller seg fra de ordinære voldsbestemmelsene ved at den fanger opp det systematiske mønsteret av mishandling over tid. Hver enkelt voldshandling kan i seg selv være relativt mild (kroppskrenkelse), men summen av gjentatte handlinger utgjør mishandling. Strafferammen (fengsel inntil 6 år, grov: 15 år etter § 283) er også strengere enn for enkeltstående kroppskrenkelser.

c) Skjerpende omstendigheter: (1) Handlingen har preg av mishandling over tid (§ 77 bokstav h) – tre år med gjentatt vold. (2) Handlingen er begått mot en person gjerningspersonen har et nært forhold til, noe som representerer et grovt tillitsbrudd.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-3-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Voldslovbrudd

- Voldslovbrudd er regulert i straffeloven kapittel 25 og verner den fysiske integriteten.
- **Kroppskrenkelse** (§ 271) rammer vold mot en annen person. Strafferamme: bot/fengsel inntil 1 år. Grov kroppskrenkelse (§ 272): inntil 6 år.
- **Kroppsskade** (§ 273) rammer skade på kropp eller helse. Strafferamme: fengsel inntil 6 år. Grov kroppsskade (§ 274): inntil 10 år (15 år ved døden til følge).
- **Drap** (§ 275) har minstestraff 8 år og maksimumsstraff 21 år. **Uaktsomt drap** (§ 281) har strafferamme inntil 6 år.
- **Mishandling i nære relasjoner** (§ 282) rammer systematisk vold og trusler mot partner, barn eller andre i husstanden. Strafferamme: fengsel inntil 6 år (grov: 15 år).
- Ved straffeutmåling vurderer domstolen **skjerpende** (§ 77) og **formildende** (§ 78) omstendigheter.
- Provokasjon er en formildende omstendighet, men **ikke** en straffrihetsgrunn.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-3-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-4-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Trond (17 år) slår en jevnaldrende gutt etter en krangel om en fotballkamp. Gutten faller, slår hodet og dør av skadene tre dager senere. Trond er dypt ulykkelig og avgir en uforbeholden tilståelse.\n\na) Kan Trond dømmes for drap (§ 275) eller kroppskrenkelse med døden til følge (§ 272)?\nb) Hvilke formildende omstendigheter kan påvirke straffeutmålingen?\nc) Har det betydning at Trond er under 18 år?',
        hints: ['Vurder om Trond hadde forsett om drapet, eller om dødsfølgen var uaktsom.', 'Se straffeloven § 33 om straff for mindreårige.'],
        solution: `a) Vurderingen avhenger av skyldformen. Trond hadde forsett om selve kroppskrenkelsen (slaget), men neppe forsett om dødsfølgen – han ønsket ikke å drepe gutten. Etter strl. § 24 kan Trond straffes for den uforsettlige følgen (døden) dersom den er forårsaket ved uaktsomhet. Et kraftig slag i hodet kan medføre døden, og Trond burde ha innsett denne risikoen. Trond kan dømmes for grov kroppskrenkelse med døden til følge (§ 272), ikke for forsettlig drap (§ 275).

b) Formildende omstendigheter: (1) Uforbeholden tilståelse (§ 78 bokstav f). (2) Provokasjon / berettiget harme etter krangelen (§ 78 bokstav c). (3) Alder – Trond var under 18 år (se punkt c).

c) Ja, det har stor betydning. Straffeloven § 33 annet ledd fastsetter at den som var under 18 år på handlingstidspunktet, bare kan idømmes ubetinget fengselsstraff når det er «særlig påkrevd». Lovgiver ønsker å skjerme unge lovbrytere fra de mest inngripende straffereaksjonene, og ungdomsstraff eller samfunnsstraff kan være aktuelle alternativer.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: Vinningslovbrudd og reaksjonssystemet
// ============================================================================

export const CHAPTER_RETTSLAERE_2_3_5: TextbookChapter = {
  id: 'rettslaere-2-3-5',
  courseId: 'rettslaere-2',
  chapterNumber: '3.5',
  title: 'Vinningslovbrudd og reaksjonssystemet',
  description: 'Tyveri, ran, bedrageri og heleri; straffereaksjoner som fengsel, bot, samfunnsstraff og ungdomsstraff.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske reaksjonssystemet og bruke straffleggingsbetingelsene til å vurdere straff etter rettsregler om seksuallovbrudd, voldslovbrudd og vinningslovbrudd'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-3-5-intro',
      type: 'text',
      content: `## Vinningslovbrudd og reaksjonssystemet

**Vinningslovbrudd** er straffbare handlinger der gjerningspersonen tar sikte på å skaffe seg en uberettiget økonomisk fordel på bekostning av andre. Disse lovbruddene er blant de mest vanlige i norsk strafferett og er regulert i straffeloven kapittel 27 (tyveri, underslag mv.) og kapittel 28 (bedrageri, utroskap mv.).

I dette kapittelet gjennomgår vi de sentrale formene for vinningslovbrudd og knytter dette til **reaksjonssystemet** – de ulike straffereaksjonene domstolene kan ilegge.`
    },

    // --- BLOKK 1: Tyveri, ran, bedrageri og heleri ---
    {
      id: 'rtl2-3-5-def-1',
      type: 'definition',
      title: 'Tyveri (straffeloven § 321)',
      content: `**Tyveri** er definert i straffeloven § 321: den som tar en gjenstand som tilhører en annen, med forsett om å skaffe seg eller andre en uberettiget vinning ved å selge, forbruke eller på annen måte tilegne seg den.

Strafferammen for tyveri er **bot eller fengsel inntil 2 år**. For **grovt tyveri** (§ 322) er strafferammen fengsel inntil **6 år**.

Ved vurderingen av om tyveriet er grovt, legges det blant annet vekt på:
- Verdien av det stjålne
- Om tyveriet er begått ved innbrudd
- Om gjerningspersonen har utnyttet en persons hjelpeløse tilstand
- Om handlingen er begått profesjonelt eller som ledd i organisert kriminalitet`
    },
    {
      id: 'rtl2-3-5-def-2',
      type: 'definition',
      title: 'Ran, bedrageri og heleri',
      content: `**Ran (§ 327):** Den som ved vold eller trussel om vold tvinger noen til å utlevere en gjenstand eller tilegner seg en gjenstand umiddelbart etter å ha brukt vold. Strafferamme: fengsel inntil **6 år** (grovt ran § 328: inntil **15 år**). Ran kombinerer vinningslovbrudd med voldslovbrudd.

**Bedrageri (§ 371):** Den som ved villedende opptreden forleder noen til å foreta en handling som medfører tap eller fare for tap for vedkommende eller den vedkommende handler for. Strafferamme: bot eller fengsel inntil **2 år** (grovt bedrageri § 372: inntil **6 år**).

**Heleri (§ 332):** Den som mottar eller skaffer seg del i utbytte fra en straffbar handling. Strafferamme: bot eller fengsel inntil **2 år** (grovt heleri § 333: inntil **6 år**). Heleri rammer mottakeren av stjålne gjenstander – den som «kjøper billig» fra en tyv.`
    },
    {
      id: 'rtl2-3-5-text-1',
      type: 'text',
      content: `### Oversikt over sentrale vinningslovbrudd

| **Straffebud** | **Handling** | **Strafferamme** | **Grovt** |
|---|---|---|---|
| § 321 Tyveri | Tilegnelse av annens gjenstand | Bot/fengsel inntil 2 år | § 322: inntil 6 år |
| § 324 Underslag | Tilegnelse av betrodd gjenstand | Bot/fengsel inntil 2 år | § 325: inntil 6 år |
| § 327 Ran | Tyveri med vold eller trusler | Fengsel inntil 6 år | § 328: inntil 15 år |
| § 332 Heleri | Mottak av utbytte fra straffbar handling | Bot/fengsel inntil 2 år | § 333: inntil 6 år |
| § 371 Bedrageri | Villedende opptreden som medfører tap | Bot/fengsel inntil 2 år | § 372: inntil 6 år |

**Naskeri (§ 323)** er en mildere form for tyveri – tyveri av gjenstand med liten verdi. Strafferammen er bare **bot**. Grensen mellom naskeri og tyveri går ved ca. 2 000 kroner.`
    },
    {
      id: 'rtl2-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Klassifisering av vinningslovbrudd',
      problem: 'Klassifiser følgende handlinger under riktig straffebud:\n\na) Mona tar en sjokolade til 35 kroner fra en butikk uten å betale.\nb) Thomas bryter seg inn i en bolig og stjeler smykker verdt 80 000 kroner.\nc) Silje selger en iPhone hun vet er stjålet, til en bekjent.\nd) Knut truer en mann med kniv og tar lommeboken hans.',
      solution: `**a) Mona – naskeri (§ 323):**
Verdien er lav (35 kr) og under grensen for tyveri. Handlingen er naskeri med strafferamme bot.

**b) Thomas – grovt tyveri (§ 322):**
Innbrudd i bolig og høy verdi (80 000 kr) er skjerpende omstendigheter som gjør tyveriet grovt. Strafferamme: fengsel inntil 6 år.

**c) Silje – heleri (§ 332):**
Silje videreselger en gjenstand hun vet er utbytte fra en straffbar handling (tyveri). Dette er heleri. Strafferamme: bot eller fengsel inntil 2 år.

**d) Knut – ran (§ 327), trolig grovt ran (§ 328):**
Knut bruker trussel om vold (kniv) for å tilegne seg lommeboken. Bruk av våpen gjør ranet grovt. Strafferamme: fengsel inntil 15 år.`
    },
    {
      id: 'rtl2-3-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom tyveri og ran?',
        options: [
          { id: 'a', text: 'Tyveri gjelder gjenstander, ran gjelder penger', isCorrect: false },
          { id: 'b', text: 'Ved ran brukes vold eller trusler for å tilegne seg gjenstanden, ved tyveri gjøres det ikke', isCorrect: true },
          { id: 'c', text: 'Ran er planlagt, tyveri er impulsivt', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begrepene brukes om hverandre', isCorrect: false }
        ],
        solution: 'Forskjellen er at ran innebærer bruk av vold eller trusler om vold for å tilegne seg en gjenstand, mens tyveri skjer uten vold. Ran er derfor vesentlig strengere straffet (inntil 6 år, grovt ran inntil 15 år) sammenlignet med tyveri (inntil 2 år).'
      }
    },

    // --- BLOKK 2: Reaksjonssystemet ---
    {
      id: 'rtl2-3-5-def-3',
      type: 'definition',
      title: 'Reaksjonssystemet',
      content: `**Reaksjonssystemet** er samlebetegnelsen på de ulike straffereaksjonene domstolene kan ilegge. Straffeloven § 29 lister opp følgende straffer:

- **Fengsel** (§ 31) – frihetsberøvelse i en bestemt periode
- **Forvaring** (§ 40) – tidsubestemt frihetsberøvelse for særlig farlige lovbrytere
- **Samfunnsstraff** (§ 48) – arbeid i frihet som alternativ til fengsel
- **Ungdomsstraff** (§ 52 a) – alternativ reaksjon for lovbrytere under 18 år
- **Bot** (§ 53) – pengeinndragning

I tillegg finnes **betinget fengsel** (§ 34): fengselsstraffen gjøres betinget, noe som betyr at den ikke sones dersom domfelte overholder fastsatte vilkår i en prøvetid.`
    },
    {
      id: 'rtl2-3-5-text-2',
      type: 'text',
      content: `### De viktigste straffereaksjonene

**Ubetinget fengsel** er den strengeste ordinære straffen. Gjerningspersonen sitter i fengsel i den perioden dommen fastsetter. Minste fengselsstraff er 14 dager, lengste er 21 år (30 år ved konkurrens – flere lovbrudd til sammen).

**Betinget fengsel** innebærer at fengselsstraffen ikke sones, forutsatt at domfelte overholder bestemte vilkår i en prøvetid (normalt 2 år). Typiske vilkår er å avstå fra nye straffbare handlinger, gjennomføre rusbehandling eller betale erstatning.

**Samfunnsstraff** er et alternativ til fengsel inntil 1 år. Domfelte utfører mellom 30 og 420 timer samfunnsnyttig tjeneste. Samfunnsstraff brukes ofte ved førstegangskriminalitet og mindre alvorlige lovbrudd.

**Ungdomsstraff** er forbeholdt lovbrytere under 18 år og gjennomføres som et ungdomsstormøte med den domfelte, fornærmede og øvrige berørte. Domfelte får en plan med vilkår tilpasset den enkeltes situasjon.

**Forvaring** brukes når det er «nærliggende fare» for gjentakelse av alvorlige forbrytelser. Forvaring har en tidsramme, men kan forlenges. Den er forbeholdt de farligste lovbryterne.

**Bot** er en pengestraff som kan ilegges alene eller i tillegg til fengsel. Botens størrelse fastsettes etter lovbruddets grovhet og domfeltes økonomi.`
    },
    {
      id: 'rtl2-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Valg av straffereaksjon',
      problem: 'Tre personer er dømt for ulike lovbrudd. Hvilken straffereaksjon er mest aktuell for hver av dem?\n\na) Emma (19 år), førstegangskriminell, dømt for tyveri av en jakke til 3 000 kroner.\nb) Rune (35 år), gjentatte ganger dømt for grovt tyveri og ran.\nc) Kristian (16 år), dømt for innbrudd og tyveri i en hytte.',
      solution: `**a) Emma – betinget fengsel eller bot:**
Emma er førstegangskriminell og lovbruddet er relativt lite alvorlig. Domstolen vil sannsynligvis idømme betinget fengsel med prøvetid eller bot. Samfunnsstraff kan også være aktuelt.

**b) Rune – ubetinget fengsel:**
Rune er gjentatt straffet for alvorlige vinningslovbrudd. Gjentakelse er en skjerpende omstendighet (strl. § 79 bokstav b). Ubetinget fengsel er den mest aktuelle reaksjonen. Ved grovt ran kan strafferammen være inntil 15 år.

**c) Kristian – ungdomsstraff:**
Kristian er under 18 år. Etter straffeloven § 33 annet ledd skal ubetinget fengsel for mindreårige bare brukes når det er «særlig påkrevd». Ungdomsstraff (§ 52 a) med ungdomsstormøte og individuelle vilkår er den mest aktuelle reaksjonen.`
    },
    {
      id: 'rtl2-3-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-5-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner samfunnsstraff som straffereaksjon?',
        options: [
          { id: 'a', text: 'Gjerningspersonen soner i fengsel på dagtid og er hjemme om natten', isCorrect: false },
          { id: 'b', text: 'Gjerningspersonen utfører samfunnsnyttig arbeid som alternativ til fengselsstraff', isCorrect: true },
          { id: 'c', text: 'Gjerningspersonen betaler en høy bot til staten', isCorrect: false },
          { id: 'd', text: 'Gjerningspersonen må flytte til en annen kommune', isCorrect: false }
        ],
        solution: 'Samfunnsstraff innebærer at domfelte utfører mellom 30 og 420 timer samfunnsnyttig tjeneste i stedet for å sone i fengsel. Det er et alternativ til fengselsstraff inntil 1 år og brukes ofte ved førstegangskriminalitet og mindre alvorlige lovbrudd.'
      }
    },
    {
      id: 'rtl2-3-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-5-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er strafferammen for grovt ran etter straffeloven § 328?',
        options: [
          { id: 'a', text: 'Fengsel inntil 6 år', isCorrect: false },
          { id: 'b', text: 'Fengsel inntil 10 år', isCorrect: false },
          { id: 'c', text: 'Fengsel inntil 15 år', isCorrect: true },
          { id: 'd', text: 'Fengsel inntil 21 år', isCorrect: false }
        ],
        solution: 'Strafferammen for grovt ran etter § 328 er fengsel inntil 15 år. Dette er blant de strengeste strafferammene for vinningslovbrudd og gjenspeiler at ran kombinerer vinningskriminalitet med alvorlig voldsbruk.'
      }
    },
    {
      id: 'rtl2-3-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-5-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom betinget og ubetinget fengsel. I hvilke tilfeller vil domstolen velge betinget fengsel fremfor ubetinget?',
        hints: ['Tenk på prøvetid og vilkår ved betinget fengsel.'],
        solution: 'Ved ubetinget fengsel soner domfelte straffen i fengsel. Ved betinget fengsel fastsettes en fengselsstraff, men den sones ikke dersom domfelte overholder bestemte vilkår i en prøvetid (normalt 2 år). Domstolen velger betinget fengsel typisk ved førstegangskriminalitet, mindre alvorlige lovbrudd, ung alder, uforbeholden tilståelse og gode rehabiliteringsutsikter. Formålet er å unngå skadevirkningene av fengsel for lovbrytere med gode forutsetninger for å avstå fra fremtidige lovbrudd.'
      }
    },
    {
      id: 'rtl2-3-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-5-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Andreas (22 år) begår bedrageri ved å opprette en falsk nettbutikk der han tar imot betaling for varer han aldri sender. 45 kunder har tapt til sammen 180 000 kroner.\n\na) Hvilket straffebud er overtrådt, og er bedrageriet grovt?\nb) Anvend straffbarhetsbetingelsene.\nc) Hvilken straffereaksjon er mest aktuell?',
        hints: ['Se strl. §§ 371 og 372 for bedrageri. Vurder antall fornærmede og totalbeløpet.'],
        solution: `a) Straffeloven § 371 om bedrageri er overtrådt – Andreas har ved villedende opptreden (falsk nettbutikk) forledet kundene til å betale for varer han aldri hadde til hensikt å levere. Bedrageriet er trolig grovt etter § 372: det er planmessig gjennomført, rammer mange fornærmede (45 kunder) og gjelder et betydelig beløp (180 000 kr). Strafferamme: fengsel inntil 6 år.

b) Straffbarhetsbetingelsene:
1. Lovkravet: Handlingen rammes av § 371/§ 372. Oppfylt.
2. Skyldkravet: Andreas handlet med hensiktsforsett – bedrageriet var selve formålet med nettbutikken.
3. Tilregnelighet: 22 år, ingen holdepunkter for utilregnelighet. Oppfylt.
4. Straffrihetsgrunner: Ingen aktuelle. Oppfylt.
Alle fire vilkår er oppfylt – Andreas kan straffes.

c) Gitt at dette er grovt bedrageri med mange fornærmede, planmessig gjennomføring og et betydelig beløp, er ubetinget fengsel den mest aktuelle reaksjonen. Straffen vil trolig ligge rundt 6–12 måneders fengsel, avhengig av om Andreas har tidligere dommer og eventuelle formildende omstendigheter (tilståelse mv.). I tillegg kan inndragning av utbyttet (180 000 kr) ilegges etter strl. § 67.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-3-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Vinningslovbrudd og reaksjonssystemet

- **Vinningslovbrudd** er handlinger der formålet er uberettiget økonomisk vinning. De vanligste er tyveri (§ 321), ran (§ 327), bedrageri (§ 371) og heleri (§ 332).
- **Ran** skiller seg fra tyveri ved bruk av vold eller trusler, og har vesentlig strengere strafferamme (grovt ran: inntil 15 år).
- **Heleri** rammer den som mottar utbytte fra andres straffbare handlinger.
- **Reaksjonssystemet** omfatter ubetinget fengsel, betinget fengsel, forvaring, samfunnsstraff, ungdomsstraff og bot.
- **Betinget fengsel** innebærer at straffen ikke sones dersom vilkårene overholdes i prøvetiden.
- **Samfunnsstraff** er et alternativ til fengsel inntil 1 år og innebærer samfunnsnyttig arbeid.
- **Ungdomsstraff** er forbeholdt lovbrytere under 18 år og gjennomføres med ungdomsstormøte.
- **Forvaring** brukes for særlig farlige lovbrytere der det er nærliggende fare for gjentakelse.
- Straffereaksjonen velges ut fra lovbruddets alvorlighet, gjerningspersonens alder, tilståelse, gjentakelse og rehabiliteringsutsikter.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-3-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-5-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er forsvarsadvokat for Lise (17 år) som er tiltalt for grovt tyveri etter å ha stjålet elektronikk verdt 25 000 kroner fra en butikk gjennom innbrudd. Det er hennes første lovbrudd, og hun har avgitt uforbeholden tilståelse.\n\na) Gjennomgå straffbarhetsbetingelsene.\nb) Argumenter for den mildeste mulige straffereaksjonen.\nc) Hvilke formildende omstendigheter vil du påberope?',
        hints: ['Husk reglene for mindreårige lovbrytere (strl. § 33) og ungdomsstraff (§ 52 a).'],
        solution: `a) Straffbarhetsbetingelsene:
1. Lovkravet: Innbrudd og tyveri av 25 000 kr rammes av §§ 321–322 (grovt tyveri). Oppfylt.
2. Skyldkravet: Lise handlet med forsett – innbruddet var planlagt. Oppfylt.
3. Tilregnelighet: 17 år, over den kriminelle lavalderen. Oppfylt.
4. Straffrihetsgrunner: Ingen aktuelle. Oppfylt.

b) Argument for mild reaksjon: Lise er 17 år – straffeloven § 33 annet ledd fastsetter at ubetinget fengsel bare kan idømmes mindreårige når det er «særlig påkrevd». Ved et førstegangstyveri er dette vilkåret neppe oppfylt. Ungdomsstraff (§ 52 a) med ungdomsstormøte og individuelt tilpassede vilkår er den mest egnede reaksjonen. Alternativt kan betinget fengsel med vilkår være aktuelt.

c) Formildende omstendigheter:
- Alder under 18 år (§ 78 bokstav i)
- Uforbeholden tilståelse (§ 78 bokstav f)
- Førstegangskriminalitet (ingen tidligere domfellelser)
- Mulighet for rehabilitering og positiv utvikling`
      }
    },
    {
      id: 'rtl2-3-5-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'rtl2-3-5-oppg-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når kan domstolen idømme forvaring i stedet for ordinær fengselsstraff?',
        options: [
          { id: 'a', text: 'Når lovbruddet har strafferamme over 10 år', isCorrect: false },
          { id: 'b', text: 'Når det er nærliggende fare for at lovbryteren vil begå nye alvorlige forbrytelser', isCorrect: true },
          { id: 'c', text: 'Når lovbryteren ikke har fast bopel', isCorrect: false },
          { id: 'd', text: 'Når lovbryteren nekter å tilstå', isCorrect: false }
        ],
        solution: 'Forvaring etter straffeloven § 40 kan ilegges når det er begått en alvorlig forbrytelse og det foreligger «nærliggende fare» for at lovbryteren vil begå nye alvorlige forbrytelser. Forvaring er tidsubestemt og kan forlenges, og er forbeholdt de tilfellene der ordinær fengselsstraff ikke gir tilstrekkelig beskyttelse for samfunnet.'
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 3 (kapittel 3.1–3.5)
// ============================================================================

export const RETTSLAERE_2_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_2_3_1,
  CHAPTER_RETTSLAERE_2_3_2,
  CHAPTER_RETTSLAERE_2_3_3,
  CHAPTER_RETTSLAERE_2_3_4,
  CHAPTER_RETTSLAERE_2_3_5,
];
