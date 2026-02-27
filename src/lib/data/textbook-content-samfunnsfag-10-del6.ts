/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - Del 6 (Kapittel 23-28)
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 * Tema: Personlig økonomi og arbeidsliv
 *
 * Kapittel 23: Personlig økonomi — Budsjett og sparing
 * Kapittel 24: Forbruk og gjeld
 * Kapittel 25: Arbeidsliv og rettigheter
 * Kapittel 26: Entreprenørskap og innovasjon
 * Kapittel 27: Skatt og velferd
 * Kapittel 28: Den norske modellen
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 23: Personlig økonomi — Budsjett og sparing
// LK20: Utforske og presentere dagsaktuelle tema eller historiske hendingar
//        med utgangspunkt i ulike kjelder og vurdere informasjonen kritisk
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_23: TextbookChapter = {
  id: 'samfunnsfag-10-23',
  courseId: 'samfunnsfag-10',
  chapterNumber: '23',
  title: 'Personlig økonomi — Budsjett og sparing',
  description: 'Lær å sette opp et budsjett, forstå forskjellen på inntekter og utgifter, og hvorfor sparing er viktig for din økonomiske trygghet.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og beskrive korleis ulike delar av samfunnet heng saman med personleg økonomi',
    'reflektere over korleis individ og samfunn påverkar kvarandre gjennom økonomiske val',
    'drøfte korleis personleg økonomi heng saman med forbruk, sparing og gjeld',
  ],
  keyTerms: [
    { term: 'Budsjett', definition: 'En oversikt over forventede inntekter og planlagte utgifter i en bestemt periode' },
    { term: 'Inntekt', definition: 'Penger du mottar, for eksempel lønn, stipend, lommepenger eller trygdeytelser' },
    { term: 'Faste utgifter', definition: 'Utgifter som er omtrent like store hver måned, for eksempel husleie, forsikring og abonnementer' },
    { term: 'Variable utgifter', definition: 'Utgifter som varierer fra måned til måned, for eksempel mat, klær og fritidsaktiviteter' },
    { term: 'Sparing', definition: 'Å sette til side penger for fremtidig bruk i stedet for å bruke dem med en gang' },
    { term: 'Rente', definition: 'Prisen for å låne penger (lånerente) eller belønningen for å spare penger (sparerente)' },
    { term: 'Rentesrente', definition: 'Rente som beregnes både av opprinnelig beløp og av tidligere opptjente renter, slik at sparepengene vokser raskere over tid' },
    { term: 'BSU', definition: 'Boligsparing for ungdom — en spareordning med skattefordel for unge under 34 år som sparer til sin første bolig' },
    { term: 'Likviditet', definition: 'Evnen til å betale regninger og utgifter når de forfaller, altså tilgang på penger når du trenger dem' },
    { term: 'Buffersparing', definition: 'En sparekonto med penger til uforutsette utgifter, typisk anbefalt å ha 1–3 månedslønner tilgjengelig' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-23-intro',
      type: 'text',
      content: `## Har du kontroll på pengene dine — eller har pengene kontroll på deg?

Tenk deg dette: Du har akkurat fått utbetalt 3 500 kroner i lønn fra deltidsjobben din. Du føler deg rik. Kanskje du kjøper de nye skoene du har hatt lyst på, spanderer på vennene dine, eller oppgraderer Spotify-abonnementet. Men så, tre uker senere, dukker det opp en regning for mobilabonnementet, bussen trenger påfylling, og plutselig har du 47 kroner igjen på kontoen. Kjent følelse?

De fleste nordmenn — både unge og voksne — har opplevd denne situasjonen. Ifølge en undersøkelse fra SIFO (Forbruksforskningsinstituttet) har nesten 40 % av unge mellom 18 og 25 år problemer med å få pengene til å strekke til. Og det er ikke fordi de tjener for lite — det handler oftere om at de mangler en plan.

Det er her **budsjettet** kommer inn. Et budsjett er rett og slett en plan for pengene dine. Det høres kjedelig ut, men det er faktisk det viktigste verktøyet du har for å ta kontroll over din egen økonomi — og dermed over livet ditt.

I dette kapittelet skal du lære om:
- Hva et budsjett er og hvorfor det er viktig
- Hvordan du setter opp ditt eget budsjett
- Forskjellen på faste og variable utgifter
- Ulike former for sparing
- Hvordan rentesrente kan gjøre sparepenger til en formue
- Praktiske tips for å få økonomien til å fungere`,
    },

    // ========== DEFINISJON: BUDSJETT ==========
    {
      id: 'samfunnsfag-10-23-def-1',
      type: 'definition',
      title: 'Budsjett — en plan for pengene dine',
      content: `Et **budsjett** er en oversikt over hvor mye penger du forventer å få inn (inntekter) og hvor mye du planlegger å bruke (utgifter) i en bestemt periode — vanligvis en måned.

**Inntekter** er alle pengene du mottar:
- Lønn fra deltidsjobb
- Lommepenger
- Stipend eller lån fra Lånekassen
- Barnetrygd (utbetales til foreldre, men noen gir den videre)
- Gaver og ekstra inntekter

**Utgifter** deles i to hovedkategorier:

**Faste utgifter** — beløp som er omtrent like store hver måned:
- Husleie / hybel (for de som har flyttet hjemmefra)
- Mobilabonnement (f.eks. 299 kr/mnd)
- Strømmetjenester (Spotify, Netflix — f.eks. 179 + 119 kr/mnd)
- Forsikring
- Treningsmedlemskap (f.eks. 349 kr/mnd)
- Kollektivtransport / busskort

**Variable utgifter** — beløp som varierer:
- Mat og drikke
- Klær og sko
- Fritid og sosiale aktiviteter
- Uforutsette utgifter (reparasjoner, legebesøk)

**Hovedregelen** er enkel: Inntektene dine må være **større enn eller lik** utgiftene dine. Hvis du bruker mer enn du tjener, lever du over evne — og før eller senere får du et problem.`,
    },

    // ========== EKSEMPEL: BUDSJETTET TIL NOAH ==========
    {
      id: 'samfunnsfag-10-23-ex-noah',
      type: 'example',
      title: 'Noahs månedsbudsjett',
      problem: 'Noah er 16 år og jobber to kvelder i uken på en matbutikk. Han vil lage et budsjett for å se om han kan spare noe.',
      solution: `**Noahs inntekter per måned:**
| Post | Beløp |
|------|-------|
| Lønn deltidsjobb (ca. 30 timer × 140 kr) | 4 200 kr |
| Lommepenger fra foreldre | 500 kr |
| **Sum inntekter** | **4 700 kr** |

**Noahs utgifter per måned:**
| Post | Type | Beløp |
|------|------|-------|
| Mobilabonnement | Fast | 249 kr |
| Spotify | Fast | 79 kr (studentpris) |
| Busskort | Fast | 450 kr |
| Mat på skolen / snacks | Variabel | 600 kr |
| Klær | Variabel | 400 kr |
| Fritid (kino, café, gaming) | Variabel | 800 kr |
| Uforutsette utgifter | Variabel | 300 kr |
| **Sum utgifter** | | **2 878 kr** |

**Overskudd:** 4 700 − 2 878 = **1 822 kr**

Noah kan altså spare 1 822 kr i måneden! Hvis han setter 1 000 kr på BSU-konto og 500 kr på buffersparing, har han fortsatt 322 kr ekstra til gode.`,
    },

    // ========== OPPGAVE 23.1 ==========
    {
      id: 'samfunnsfag-10-23-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-23-ex-1',
        number: '23.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er en FAST utgift?',
        options: [
          {
            id: 'a',
            text: 'Kinobillett til 159 kroner',
            isCorrect: false,
            feedback: 'Feil. En kinobillett er en variabel utgift — du velger selv om og når du går på kino.',
          },
          {
            id: 'b',
            text: 'Mobilabonnement til 249 kroner i måneden',
            isCorrect: true,
            feedback: 'Riktig! Et mobilabonnement koster det samme hver måned uansett, og er dermed en fast utgift.',
          },
          {
            id: 'c',
            text: 'Ny jakke til 899 kroner',
            isCorrect: false,
            feedback: 'Feil. Kjøp av klær varierer fra måned til måned og er en variabel utgift.',
          },
          {
            id: 'd',
            text: 'Lunsj på skolen til 65 kroner',
            isCorrect: false,
            feedback: 'Feil. Matutgifter varierer fra dag til dag og måned til måned, og er en variabel utgift.',
          },
        ],
        solution: 'Faste utgifter er utgifter som er omtrent like store hver måned, som mobilabonnement, husleie og forsikring. Variable utgifter varierer, som mat, klær og fritidsaktiviteter.',
      },
    },

    // ========== OPPGAVE 23.2 ==========
    {
      id: 'samfunnsfag-10-23-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-23-ex-2',
        number: '23.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag ditt eget månedsbudsjett.',
        subTasks: [
          {
            label: 'a',
            task: 'List opp alle inntektene dine i en vanlig måned (lønn, lommepenger, stipend osv.). Hva er totalsummen?',
            solution: 'Svaret er individuelt. Eleven bør liste opp alle inntektskilder med beløp og beregne totalsum.',
          },
          {
            label: 'b',
            task: 'List opp alle utgiftene dine og marker hvilke som er faste og hvilke som er variable. Hva er totalsummen?',
            solution: 'Eleven bør sortere utgiftene i faste (abonnementer, transport) og variable (mat, klær, fritid) og beregne totalsum.',
          },
          {
            label: 'c',
            task: 'Beregn overskuddet (inntekter minus utgifter). Har du nok til å spare? Hvis ikke, hva kan du kutte?',
            solution: 'Eleven beregner overskudd/underskudd og reflekterer over mulige tiltak for å forbedre budsjettet, f.eks. kutte strømmetjenester, handle mat billigere, eller jobbe litt mer.',
          },
        ],
        hints: [
          'Sjekk kontoutskriften din for å finne realistiske tall.',
          'Ikke glem små utgifter som snacks og brus — de legger seg opp!',
        ],
        solution: 'Et godt budsjett er realistisk, detaljert og gir en klar oversikt over hva du kan bruke og hva du kan spare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        allowsSpreadsheet: true,
        spreadsheetTemplate: 'budget',
      },
    },

    // ========== DEFINISJON: SPARING ==========
    {
      id: 'samfunnsfag-10-23-def-2',
      type: 'definition',
      title: 'Sparing og renter',
      content: `**Sparing** betyr å sette til side penger du har nå, til fremtidig bruk. Det høres enkelt ut, men det krever disiplin — fordi hjernen vår foretrekker belønning her og nå fremfor gevinst i fremtiden.

**Hvorfor spare?**
- **Buffersparing:** Penger til uforutsette utgifter (f.eks. ødelagt mobil, tannlegeregning). Eksperter anbefaler å ha 1–3 månedslønner tilgjengelig.
- **Målsparing:** Spare til noe konkret — en reise, en ny datamaskin, bil eller førerkort.
- **Langsiktig sparing:** Spare til bolig, utdanning eller pensjon.

**Rente — belønning for å vente**
Når du setter penger i banken, låner du egentlig pengene dine til banken. Banken betaler deg for dette i form av **rente**. Per 2024 gir de beste sparekontiene ca. 4–5 % rente.

**Rentesrente — den magiske effekten**
Rentesrente betyr at du tjener rente ikke bare på pengene du selv har spart, men også på rentene du allerede har fått. Over tid vokser dette eksponentielt.

**Eksempel:** Du setter 10 000 kr i banken med 4 % rente:
- Etter 1 år: 10 000 × 1,04 = 10 400 kr (400 kr i rente)
- Etter 2 år: 10 400 × 1,04 = 10 816 kr (416 kr i rente — mer enn året før!)
- Etter 5 år: ca. 12 167 kr
- Etter 10 år: ca. 14 802 kr
- Etter 20 år: ca. 21 911 kr — pengene er mer enn doblet!

Jo tidligere du begynner å spare, jo mer tjener du på rentesrente-effekten.`,
    },

    // ========== EKSEMPEL: BSU ==========
    {
      id: 'samfunnsfag-10-23-ex-bsu',
      type: 'example',
      title: 'BSU — den beste spareordningen for unge',
      problem: 'Marte fyller 17 år og begynner å spare i BSU (Boligsparing for ungdom). Hun sparer 2 000 kr i måneden. Hva kan hun oppnå?',
      solution: `**BSU-reglene (2024):**
- Maks innbetaling per år: 27 500 kr
- Maks totalbeløp: 300 000 kr
- Skattefradrag: 10 % av innbetalt beløp = opptil 2 750 kr tilbake på skatten
- Vilkår: Pengene skal brukes til kjøp av første bolig
- Aldersgrense: Under 34 år

**Martes spareprogresjon:**
| År | Innbetalt totalt | Skattefradrag totalt | Ca. saldo med rente (4 %) |
|----|-----------------|---------------------|--------------------------|
| 1 | 24 000 kr | 2 400 kr | 24 960 kr |
| 3 | 72 000 kr | 7 200 kr | 78 000 kr |
| 5 | 120 000 kr | 12 000 kr | 136 000 kr |
| 10 | 240 000 kr | 24 000 kr | 302 000 kr |

**Martes gevinst etter 10 år:**
- Spart selv: 240 000 kr
- Renteinntekter: ca. 62 000 kr
- Skattefradrag: 24 000 kr
- **Total verdi: ca. 326 000 kr** — fra egne 240 000 kr!

BSU er den mest lønnsomme spareordningen for unge fordi du får både gode renter OG skattefradrag.`,
    },

    // ========== OPPGAVE 23.3 ==========
    {
      id: 'samfunnsfag-10-23-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-23-ex-3',
        number: '23.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du setter 5 000 kr i banken med 4 % årlig rente. Omtrent hvor mye har du etter 2 år dersom du ikke tar ut noe?',
        options: [
          {
            id: 'a',
            text: '5 200 kr',
            isCorrect: false,
            feedback: 'Feil. 5 200 kr ville vært 4 % rente for bare ett år. Etter to år har du tjent renter på rentene også.',
          },
          {
            id: 'b',
            text: '5 400 kr',
            isCorrect: false,
            feedback: 'Nesten, men ikke helt. Med enkel rente (uten rentesrente) ville svaret vært 5 400 kr, men banken beregner rentesrente.',
          },
          {
            id: 'c',
            text: '5 408 kr',
            isCorrect: true,
            feedback: 'Riktig! Etter 1 år: 5 000 × 1,04 = 5 200 kr. Etter 2 år: 5 200 × 1,04 = 5 408 kr. De ekstra 8 kronene er rentesrente.',
          },
          {
            id: 'd',
            text: '5 800 kr',
            isCorrect: false,
            feedback: 'Feil. 5 800 kr tilsvarer 8 % rente per år, dobbelt så mye som i oppgaven.',
          },
        ],
        solution: 'Med rentesrente: 5 000 × 1,04 × 1,04 = 5 000 × 1,04² = 5 408 kr. Du tjener rente på rentene — det er rentesrente-effekten.',
      },
    },

    // ========== TEKST: SPARETIPS ==========
    {
      id: 'samfunnsfag-10-23-sparetips',
      type: 'text',
      content: `## Praktiske sparetips for ungdom

Å spare handler ikke om å være gjerrig — det handler om å ta bevisste valg med pengene dine. Her er noen konkrete tips:

### 1. Betal deg selv først
Når du får lønn eller lommepenger, overfør et fast beløp til sparekontoen **med en gang** — før du rekker å bruke noe. Sett opp en automatisk overføring.

### 2. 50/30/20-regelen
En enkel tommelfingerregel for budsjettet:
- **50 %** til det du MÅ ha (faste utgifter, mat, transport)
- **30 %** til det du VIL ha (klær, fritid, underholdning)
- **20 %** til sparing og gjeldsbetaling

For Noah med 4 700 kr i måneden betyr dette:
- 2 350 kr til nødvendigheter
- 1 410 kr til ønsker
- 940 kr til sparing

### 3. Liten drypp uthuler stor stein
Daglige småutgifter legger seg opp. Hvis du kjøper kaffe til 59 kr hver skoledag, bruker du ca. 1 180 kr i måneden — over 14 000 kr i året. Bare på kaffe.

### 4. Vent 24 timer
Før du gjør et impulskjøp over 300 kr, vent et døgn. Ofte oppdager du at du egentlig ikke trenger tingen likevel.

### 5. Sett deg sparemål
Det er lettere å spare når du har et konkret mål. Skriv det ned: «Jeg sparer 30 000 kr til førerkort innen juni neste år» er mye mer motiverende enn «Jeg skal prøve å spare litt.»`,
    },

    // ========== OPPGAVE 23.4 ==========
    {
      id: 'samfunnsfag-10-23-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-23-ex-4',
        number: '23.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyse av daglige småutgifter.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv ned alle småkjøpene du gjør i løpet av en vanlig uke (brus, snacks, kaffe, energidrikk, takeaway osv.). Anslå beløpet for hvert kjøp.',
            solution: 'Svaret er individuelt. Eleven bør identifisere sine vanlige småkjøp med realistiske priser, f.eks. brus 29 kr, energidrikk 35 kr, snacks 45 kr, kaffe 59 kr.',
          },
          {
            label: 'b',
            task: 'Beregn hvor mye disse småkjøpene koster deg per måned og per år.',
            solution: 'Eleven multipliserer ukeskostnad × 4,3 (gjennomsnittlig uker per måned) for månedsbeløp, og × 52 uker for årsbeløp. Eksempel: 350 kr/uke × 52 = 18 200 kr/år.',
          },
          {
            label: 'c',
            task: 'Hva kunne du ha brukt dette beløpet på i stedet? Gi et konkret eksempel.',
            solution: 'Eleven bør sammenligne årsbeløpet med noe konkret, f.eks. «18 200 kr er nok til en sydentur», «nok til førerkortets teorikurs og kjøretimer», eller «nok til en god laptop».',
          },
        ],
        hints: ['Vær ærlig — det er lettere å endre vaner du er bevisst på.'],
        solution: 'Denne oppgaven handler om bevisstgjøring. Mange blir overrasket over hvor mye småkjøp koster i løpet av et år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: LÅNEKASSEN OG UTDANNINGSSTØTTE ==========
    {
      id: 'samfunnsfag-10-23-def-3',
      type: 'definition',
      title: 'Lånekassen og støtte til utdanning',
      content: `**Lånekassen** er en statlig etat som gir lån og stipend til elever og studenter i Norge. Formålet er å sikre at alle har mulighet til å ta utdanning, uavhengig av familiens økonomi.

**For elever i videregående:**
- **Grunnstipend:** Behovsprøvd stipend basert på foreldrenes inntekt (opptil ca. 4 280 kr/mnd i 2024)
- **Borteboerstipend:** Ekstra stipend for elever som må bo borte fra foreldre (opptil ca. 5 530 kr/mnd)
- **Utstyrsstipend:** Engangsstøtte til nødvendig utstyr per skoleår (ca. 1 100–4 600 kr avhengig av studieprogram)
- **Lån:** Elever i videregående kan låne i tillegg til stipend

**For studenter i høyere utdanning:**
- Basisstøtte: ca. 129 000 kr per studieår (2024)
- 40 % av støtten kan bli gjort om til stipend dersom du fullfører og består
- Rentefritt lån under studietiden

**Viktig å vite:**
- Stipend må ikke betales tilbake, men lån må det
- Studielån har gunstigere rente enn vanlige banklån
- Renten begynner å løpe etter avsluttet utdanning
- Du bør alltid planlegge for at du skal betale tilbake lånet

Lånekassen er en viktig del av den norske velferdsmodellen, fordi den sørger for at det ikke bare er barn av rike foreldre som kan ta høyere utdanning.`,
    },

    // ========== OPPGAVE 23.5 ==========
    {
      id: 'samfunnsfag-10-23-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-23-ex-5',
        number: '23.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom stipend og lån fra Lånekassen?',
        options: [
          {
            id: 'a',
            text: 'Stipend og lån er det samme — begge må betales tilbake',
            isCorrect: false,
            feedback: 'Feil. Stipend er en gave fra staten som du IKKE trenger å betale tilbake, i motsetning til lån.',
          },
          {
            id: 'b',
            text: 'Stipend er penger du får som du ikke trenger å betale tilbake, mens lån må betales tilbake med renter',
            isCorrect: true,
            feedback: 'Riktig! Stipend er en støtte du beholder, mens lån må du betale tilbake over tid etter at utdanningen er ferdig.',
          },
          {
            id: 'c',
            text: 'Lån er gratis penger, men stipend har høy rente',
            isCorrect: false,
            feedback: 'Feil. Det er motsatt — stipend er «gratis» penger, mens lån har rente som begynner å løpe etter endt utdanning.',
          },
          {
            id: 'd',
            text: 'Stipend er bare for rike familier, mens lån er for alle',
            isCorrect: false,
            feedback: 'Feil. Stipend er faktisk behovsprøvd og gis primært til dem som trenger det mest. Lån er tilgjengelig for alle studenter.',
          },
        ],
        solution: 'Stipend er en økonomisk støtte du beholder, mens lån må betales tilbake med renter etter at utdanningen er ferdig.',
      },
    },

    // ========== OPPGAVE 23.6 ==========
    {
      id: 'samfunnsfag-10-23-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-23-ex-6',
        number: '23.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregningsoppgave om sparing.',
        subTasks: [
          {
            label: 'a',
            task: 'Du sparer 500 kr i måneden i 3 år uten rente. Hvor mye har du spart totalt?',
            solution: '500 kr × 12 måneder × 3 år = 18 000 kr.',
          },
          {
            label: 'b',
            task: 'Forklar med egne ord hva rentesrente er, og hvorfor det lønner seg å begynne å spare tidlig.',
            solution: 'Rentesrente betyr at du tjener rente ikke bare på det du sparer, men også på renten du allerede har tjent. Jo tidligere du begynner, jo lenger jobber rentesrente-effekten for deg, og jo mer vokser pengene dine.',
          },
          {
            label: 'c',
            task: 'Hvis du setter 20 000 kr i en BSU-konto med 4 % rente: Omtrent hvor mye har du etter 5 år? (Hint: bruk formelen beløp × 1,04 fem ganger.)',
            solution: '20 000 × 1,04⁵ = 20 000 × 1,2167 ≈ 24 334 kr. Du har tjent ca. 4 334 kr bare i renter — i tillegg til skattefradraget fra BSU.',
          },
        ],
        hints: [
          'For deloppgave c: Bruk kalkulator. 1,04 × 1,04 × 1,04 × 1,04 × 1,04 = 1,2167.',
        ],
        solution: 'Sparingsberegninger viser kraften i tålmodighet og rentesrente.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-23-oppsummering',
      type: 'text',
      content: `## Oppsummering: Personlig økonomi — Budsjett og sparing

God personlig økonomi handler om å ha en plan for pengene dine, ikke om å tjene mest mulig.

**Nøkkelpunkter:**
- Et **budsjett** gir deg oversikt over inntekter og utgifter
- **Faste utgifter** (mobilabonnement, husleie) er like hver måned; **variable utgifter** (mat, klær) varierer
- Hovedregelen: Inntekter **≥** utgifter. Hvis ikke, må du kutte eller tjene mer
- **Sparing** gir økonomisk trygghet og muligheter
- **Rentesrente** gjør at sparepengene vokser raskere jo lenger de får stå
- **BSU** er den beste spareordningen for unge: gode renter + skattefradrag
- **50/30/20-regelen** er en nyttig tommelfingerregel for budsjett
- **Lånekassen** gir stipend og lån til elever og studenter

Den viktigste vanen du kan bygge nå, er å ta bevisste valg med pengene dine. Det handler ikke om å aldri kose seg — men om å vite hva du bruker og ha en plan for fremtiden.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-23-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-23-ex-7',
        number: '23.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Skolen burde ha obligatorisk undervisning i personlig økonomi fra 8. klasse.» Er du enig eller uenig? Begrunn svaret.',
        hints: [
          'Tenk på hva konsekvensene er av at mange unge sliter med økonomi.',
          'Vurder hva som er skolens ansvar versus foreldrenes ansvar.',
          'Bruk gjerne eksempler fra dette kapittelet.',
        ],
        solution: 'En god drøfting vurderer argumenter for (mange unge sliter med gjeld, ulikhet i hjemmets kunnskapsoverføring, viktig livsferdighet) og mot (skolen har allerede nok å gjøre, foreldrene har hovedansvaret, privatlivets fred). Svaret bør ha en begrunnet konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-23-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-23-ex-8',
        number: '23.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektoppgave: Lag et 6-måneders sparemål og en plan for å nå det.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg noe du vil spare til og finn ut hva det koster. Beskriv målet ditt.',
            solution: 'Eleven velger et realistisk sparemål (f.eks. førerkort ca. 25 000–30 000 kr, en reise ca. 8 000–15 000 kr, elektronikk ca. 5 000–15 000 kr) og oppgir nøyaktig pris.',
          },
          {
            label: 'b',
            task: 'Beregn hvor mye du må spare per måned for å nå målet innen 6 måneder. Er det realistisk ut fra budsjettet ditt?',
            solution: 'Eleven deler totalpris på 6 og vurderer om beløpet er innenfor det budsjettet tillater. Eksempel: 12 000 kr ÷ 6 = 2 000 kr/mnd.',
          },
          {
            label: 'c',
            task: 'Lag en konkret plan: Hvilke utgifter kan du kutte eller redusere for å nå sparemålet? Er det mulig å øke inntektene dine?',
            solution: 'Eleven identifiserer konkrete tiltak, f.eks. kutte strømmetjenester, ta med matpakke i stedet for å kjøpe lunsj, jobbe ekstra helgevakter, selge ting de ikke bruker.',
          },
        ],
        hints: ['Vær realistisk — en plan du ikke klarer å følge, er ingen god plan.'],
        solution: 'God økonomisk planlegging handler om å sette konkrete mål og finne realistiske veier til å nå dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        allowsSpreadsheet: true,
        spreadsheetTemplate: 'budget',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 24: Forbruk og gjeld
// LK20: Utforske og drøfte korleis ulike delar av samfunnet heng saman
//        med personleg økonomi og forbruk
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_24: TextbookChapter = {
  id: 'samfunnsfag-10-24',
  courseId: 'samfunnsfag-10',
  chapterNumber: '24',
  title: 'Forbruk og gjeld',
  description: 'Forstå mekanismene bak forbrukersamfunnet, farene ved gjeld og kredittkort, og lær hvordan du kan ta smarte forbrukervalg.',
  estimatedMinutes: 75,
  competenceGoals: [
    'drøfte korleis personleg økonomi heng saman med forbruk, sparing og gjeld',
    'reflektere over korleis individ og samfunn påverkar kvarandre gjennom økonomiske val',
    'utforske korleis kommersielle krefter påverkar forbrukarval og identitet',
  ],
  keyTerms: [
    { term: 'Forbruk', definition: 'Kjøp og bruk av varer og tjenester for å dekke behov og ønsker' },
    { term: 'Forbrukersamfunn', definition: 'Et samfunn der kjøp av varer og tjenester er en sentral del av kulturen og identiteten' },
    { term: 'Gjeld', definition: 'Penger du skylder andre, for eksempel et lån fra banken eller en ubetalte regning' },
    { term: 'Kredittkort', definition: 'Et betalingskort som lar deg kjøpe ting på kreditt — du låner penger fra banken og betaler tilbake senere' },
    { term: 'Effektiv rente', definition: 'Den totale kostnaden for et lån per år, inkludert renter og alle gebyrer, oppgitt i prosent' },
    { term: 'Forbrukslån', definition: 'Et lån uten sikkerhet (pant) som ofte har svært høy rente, gjerne 15–25 %' },
    { term: 'Inkasso', definition: 'Innkreving av ubetalte regninger, vanligvis gjennom et inkassoselskap, med tilleggsgebyrer' },
    { term: 'Betalingsanmerkning', definition: 'En registrering i et kredittregister som viser at du ikke har betalt en regning — gjør det vanskelig å få lån, bolig eller mobilabonnement' },
    { term: 'Angrerett', definition: 'Retten til å returnere en vare kjøpt på nett innen 14 dager uten å oppgi grunn' },
    { term: 'Forbrukerrådet', definition: 'En offentlig etat som hjelper forbrukere med klager og rettigheter' },
    { term: 'Impulskjøp', definition: 'Kjøp du gjør spontant uten å ha planlagt det, ofte drevet av følelser eller markedsføring' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-24-intro',
      type: 'text',
      content: `## Kjøp nå — betal senere. Hva er egentlig prisen?

«Betal om 30 dager!» «Få det du vil — nå!» «Delbetaling fra kun 99 kr/mnd!» Disse reklamemeldingene dukker opp overalt — på Instagram, i nettbutikker, og i apper som Klarna og Vipps Delbetaling. De gjør det fristende enkelt å kjøpe ting du egentlig ikke har råd til.

I Norge har husholdningene gjeld på totalt over 4 000 milliarder kroner. Det er 4 000 000 000 000 — et tall med tolv nuller. I gjennomsnitt har hver norsk husholdning gjeld tilsvarende omtrent 240 % av inntekten sin, noe som betyr at en familie som tjener 800 000 kr i året, har nesten 2 millioner kroner i gjeld.

Mesteparten av dette er boliglån — noe de fleste ser på som trygg gjeld. Men en voksende andel er usikret **forbruksgjeld**: kredittkort, forbrukslån og «kjøp nå, betal senere»-tjenester. Og det er denne typen gjeld som skaper størst problemer.

Rundt 300 000 nordmenn har betalingsproblemer, og gjeldsrådgiverne melder om en kraftig økning blant unge. NAV mottar stadig flere henvendelser fra unge under 25 år som trenger hjelp med gjeld.

I dette kapittelet skal du lære om:
- Hva forbrukersamfunnet er og hvordan reklame påvirker deg
- Hvorfor gjeld kan bli en felle
- Hvordan kredittkort og forbrukslån fungerer
- Dine rettigheter som forbruker
- Hvordan du kan ta smarte forbrukervalg`,
    },

    // ========== DEFINISJON: FORBRUKERSAMFUNNET ==========
    {
      id: 'samfunnsfag-10-24-def-1',
      type: 'definition',
      title: 'Forbrukersamfunnet',
      content: `**Forbrukersamfunnet** er en betegnelse på et samfunn der kjøp og forbruk av varer og tjenester er en sentral del av kulturen, identiteten og hverdagen.

**Kjennetegn på forbrukersamfunnet:**
- Vi kjøper mye mer enn vi trenger for å overleve
- Produkter brukes og kastes raskere enn nødvendig (planlagt foreldelse)
- Status og identitet knyttes til hva vi eier og kjøper
- Reklame er overalt og påvirker valgene våre kontinuerlig
- «Nytt» betyr «bedre» — det skapes et konstant behov for det siste

**Hvordan reklame påvirker deg:**
Gjennomsnittlig eksponeres du for 5 000–10 000 reklamemeldinger per dag — på sosiale medier, i apper, på skjermreklame og nettaviser. De fleste legger du ikke merke til bevisst, men de påvirker deg likevel.

Moderne reklame selger sjelden bare et produkt. Den selger en **følelse**: tilhørighet, selvtillit, lykke, suksess. Et par Nike-sko handler ikke bare om fottøy — det handler om å føle seg sporty, kul og vellykket.

**Behov og ønsker:**
Det er viktig å skille mellom:
- **Behov:** Noe du trenger for å leve godt (mat, klær, bolig, transport, helse)
- **Ønsker:** Noe du har lyst på, men klarer deg uten (merkeklær, ny mobil hvert år, takeaway)

Mye av forbruket vårt handler om ønsker forkledd som behov. «Jeg trenger nye sko» betyr ofte «Jeg har lyst på nye sko» — selv om skoene du har, fungerer fint.`,
    },

    // ========== EKSEMPEL: EMMAS IMPULSKJØP ==========
    {
      id: 'samfunnsfag-10-24-ex-emma',
      type: 'example',
      title: 'Emmas impulskjøp — hva kostet det egentlig?',
      problem: 'Emma (17) ser en jakke til 1 499 kr i en nettbutikk med tilbudet «Betal om 30 dager med Klarna». Hun har 600 kr på kontoen. Hva kan skje?',
      solution: `**Scenario 1 — Emma betaler i tide:**
Emma husker å betale innen 30 dager. Hun sparer opp de resterende 899 kronene ved å kutte utgifter. Totalprisen: 1 499 kr. Ingen problem.

**Scenario 2 — Emma glemmer å betale:**
Emma glemmer betalingsfristen. Nå påløper det:
- Purregebyr: 70 kr
- Forsinkelsesrente: starter å tikke
- Etter 14 dager: Ny purring + 70 kr
- Etter 28 dager: Sendes til inkasso

**Inkassokostnader:**
| Post | Beløp |
|------|-------|
| Opprinnelig pris | 1 499 kr |
| Purregebyr (2 ×) | 140 kr |
| Inkassosalær | 700 kr |
| Forsinkelsesrente | ca. 50 kr |
| **Totalt** | **ca. 2 389 kr** |

Den jakken til 1 499 kr kostet plutselig **2 389 kr** — nesten 900 kr mer enn prisen.

**Scenario 3 — Betalingsanmerkning:**
Hvis Emma fortsatt ikke betaler, får hun en **betalingsanmerkning**. Denne blir liggende i 4 år og gjør at hun:
- Ikke kan få mobilabonnement
- Ikke kan få lån til bil eller bolig
- Kan ha problemer med å leie leilighet
- Kan bli nektet kredittkort

Alt dette på grunn av en jakke.`,
    },

    // ========== OPPGAVE 24.1 ==========
    {
      id: 'samfunnsfag-10-24-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-24-ex-1',
        number: '24.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en betalingsanmerkning?',
        options: [
          {
            id: 'a',
            text: 'En kommentar banken skriver på kontoutskriften din',
            isCorrect: false,
            feedback: 'Feil. En betalingsanmerkning er langt mer alvorlig enn en kommentar.',
          },
          {
            id: 'b',
            text: 'En registrering som viser at du ikke har betalt en regning, og som gjør det vanskelig å få lån eller leie bolig',
            isCorrect: true,
            feedback: 'Riktig! En betalingsanmerkning er en alvorlig konsekvens som kan påvirke livet ditt i flere år.',
          },
          {
            id: 'c',
            text: 'Et gebyr du betaler til banken for å ha konto',
            isCorrect: false,
            feedback: 'Feil. En betalingsanmerkning er ikke et gebyr, men en registrering i kredittregisteret.',
          },
          {
            id: 'd',
            text: 'En melding fra NAV om at du skylder skatt',
            isCorrect: false,
            feedback: 'Feil. Betalingsanmerkninger registreres av kredittselskapene, ikke av NAV.',
          },
        ],
        solution: 'En betalingsanmerkning er en registrering i et kredittregister som viser at du ikke har betalt en regning. Den blir liggende i 4 år og kan gjøre det vanskelig å få lån, mobilabonnement eller leie bolig.',
      },
    },

    // ========== OPPGAVE 24.2 ==========
    {
      id: 'samfunnsfag-10-24-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-24-ex-2',
        number: '24.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Refleksjonsoppgave om reklame og forbruk.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn tre eksempler på reklame du har sett i løpet av den siste uken (på sosiale medier, nett, TV eller ute). Beskriv hva reklamen handler om.',
            solution: 'Eleven beskriver tre konkrete reklamer med produkt, plattform og budskap.',
          },
          {
            label: 'b',
            task: 'For hver reklame: Hvilken følelse prøver reklamen å selge? (Tilhørighet, status, trygghet, glede, frykt for å gå glipp av noe?)',
            solution: 'Eleven analyserer de følelsesmessige virkemidlene i reklamen. Eksempel: «Nike-reklamen selger følelsen av å være atletisk og vellykket, ikke bare et par sko.»',
          },
          {
            label: 'c',
            task: 'Forklar forskjellen mellom behov og ønsker. Gi to eksempler på ting ungdom ofte opplever som behov, men som egentlig er ønsker.',
            solution: 'Behov er noe du trenger for å leve godt (mat, klær, helsehjelp), mens ønsker er ting du har lyst på men klarer deg uten. Eksempler: Siste iPhone (en fungerende mobil er behov, men den nyeste modellen er et ønske), merkeklær (klær er behov, men merket er et ønske).',
          },
        ],
        hints: ['Tenk på reklamen du ser i sosiale medier — den er ofte tilpasset nettopp deg.'],
        solution: 'Reklameanalyse trener kritisk tenkning og bevisstgjøring om hvordan kommersielle krefter påvirker valgene våre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: GJELD OG KREDITTKORT ==========
    {
      id: 'samfunnsfag-10-24-def-2',
      type: 'definition',
      title: 'Gjeld, kredittkort og forbrukslån',
      content: `**Gjeld** betyr at du skylder penger til noen. All gjeld er ikke lik — det er stor forskjell mellom «god» og «dårlig» gjeld.

**«God» gjeld:**
- **Boliglån:** Lån for å kjøpe bolig, med relativt lav rente (ca. 5–6 % i 2024) og boligen som sikkerhet. Boligen stiger vanligvis i verdi over tid.
- **Studielån:** Lån til utdanning med gunstig rente. Utdanning øker vanligvis inntektsevnen din.

**«Dårlig» gjeld:**
- **Forbrukslån:** Lån uten sikkerhet til forbruk (ferie, klær, elektronikk). Rente: ofte 15–25 % per år. Et lån på 50 000 kr med 20 % rente koster deg 10 000 kr i renter hvert år!
- **Kredittkort:** Fungerer som et lån. Kjøper du for 10 000 kr og bare betaler minimumsbeløpet (f.eks. 500 kr/mnd), kan det ta **over 2 år** å betale ned — og du har betalt tusenvis ekstra i renter.
- **Kjøp nå, betal senere:** Tjenester som Klarna, som gjør det enkelt å handle for penger du ikke har. Ingen rente hvis du betaler i tide, men store gebyrer og renter hvis du ikke gjør det.

**Gjeldsspiralen:**
1. Du tar opp et forbrukslån for å kjøpe noe du ikke har råd til
2. Rentene gjør at du betaler tilbake mye mer enn du lånte
3. Du sliter med å betale, og tar opp et nytt lån for å betale det første
4. Nå har du to lån med høy rente
5. Situasjonen forverres raskt — dette kalles **gjeldsspiralen**

**Eksempel på forbrukslån:**
Du låner 100 000 kr til 20 % rente over 5 år:
- Månedlig betaling: ca. 2 649 kr
- Total tilbakebetaling: ca. 159 000 kr
- Du har betalt **59 000 kr bare i renter** — nesten like mye som halve lånet!`,
    },

    // ========== EKSEMPEL: TOBIAS' KREDITTKORT ==========
    {
      id: 'samfunnsfag-10-24-ex-tobias',
      type: 'example',
      title: 'Tobias bruker kredittkort — hva koster det?',
      problem: 'Tobias (19) har et kredittkort med 22 % rente. Han handler for 15 000 kr og betaler bare minimumsbeløpet på 500 kr per måned. Hva blir den reelle prisen?',
      solution: `**Beregning (forenklet):**
Med 22 % årlig rente og betaling på 500 kr/mnd:

| Måned | Gjeld ved start | Rente denne mnd | Betaling | Gjeld ved slutt |
|-------|----------------|-----------------|----------|----------------|
| 1 | 15 000 kr | 275 kr | 500 kr | 14 775 kr |
| 6 | ca. 13 600 kr | 249 kr | 500 kr | ca. 13 350 kr |
| 12 | ca. 11 700 kr | 215 kr | 500 kr | ca. 11 415 kr |
| 24 | ca. 7 200 kr | 132 kr | 500 kr | ca. 6 830 kr |

**Etter 3 år (36 måneder):** Tobias har betalt 18 000 kr (500 × 36), men har fortsatt ca. 2 500 kr igjen i gjeld!

**Totalt betalt tilbake:** ca. 20 000 kr
**Rentekostnader:** ca. 5 000 kr — det er 33 % ekstra i ren rente.

**Lærdommen:** Kredittkort med minimumsbetaling er en av de dyreste måtene å låne penger på. Betal alltid hele beløpet innen forfallsdatoen hvis du bruker kredittkort.`,
    },

    // ========== OPPGAVE 24.3 ==========
    {
      id: 'samfunnsfag-10-24-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-24-ex-3',
        number: '24.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du låner 50 000 kr til 20 % rente per år. Omtrent hvor mye koster rentene deg det første året?',
        options: [
          {
            id: 'a',
            text: '2 000 kr',
            isCorrect: false,
            feedback: 'Feil. 2 000 kr tilsvarer 4 % rente. Med 20 % rente er kostnaden mye høyere.',
          },
          {
            id: 'b',
            text: '5 000 kr',
            isCorrect: false,
            feedback: 'Feil. 5 000 kr tilsvarer 10 % rente. Med 20 % rente er kostnaden dobbelt så høy.',
          },
          {
            id: 'c',
            text: '10 000 kr',
            isCorrect: true,
            feedback: 'Riktig! 50 000 × 0,20 = 10 000 kr. Det betyr at du betaler 10 000 kr bare for å ha lånt pengene i ett år.',
          },
          {
            id: 'd',
            text: '20 000 kr',
            isCorrect: false,
            feedback: 'Feil. 20 000 kr ville tilsvare 40 % rente. Riktig beregning er 50 000 × 0,20 = 10 000 kr.',
          },
        ],
        solution: '50 000 kr × 20 % = 50 000 × 0,20 = 10 000 kr i rentekostnader det første året.',
      },
    },

    // ========== DEFINISJON: FORBRUKERRETTIGHETER ==========
    {
      id: 'samfunnsfag-10-24-def-3',
      type: 'definition',
      title: 'Dine rettigheter som forbruker',
      content: `I Norge har du sterke rettigheter som forbruker, regulert av blant annet **forbrukerkjøpsloven** og **angrerettloven**.

**Angrerett ved nettkjøp:**
- Du har **14 dagers angrerett** på alle varer kjøpt på nett, telefon eller utenfor butikk
- Du trenger ikke oppgi noen grunn — du kan bare angre
- Selger må betale returfrakten dersom dette var opplyst om på forhånd
- Angreretten gjelder IKKE for varer kjøpt i fysisk butikk (med mindre butikken tilbyr bytterett)

**Reklamasjon — klag på feil:**
- Har varen en feil, har du rett til å klage (reklamere) i opptil **5 år**
- Selger kan velge om de vil reparere, bytte eller gi pengene tilbake
- Du må klage innen «rimelig tid» etter at du oppdaget feilen — som hovedregel innen 2 måneder

**Garanti:**
- Garanti er noe selger eller produsent gir **i tillegg til** lovens rettigheter
- En garanti kan aldri gi deg dårligere rettigheter enn loven

**Forbrukerrådet:**
- Offentlig etat som hjelper forbrukere
- Gratis rådgivning og klagebehandling
- Kan megle mellom deg og selger ved tvister
- Nettside: forbrukerradet.no

**Viktig tips:** Ta alltid vare på kvittering og ordrebekreftelse. Uten dokumentasjon er det vanskeligere å klage.`,
    },

    // ========== OPPGAVE 24.4 ==========
    {
      id: 'samfunnsfag-10-24-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-24-ex-4',
        number: '24.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Du kjøper en jakke på nett og angrer etter 5 dager. Hva kan du gjøre?',
        options: [
          {
            id: 'a',
            text: 'Ingenting — har du kjøpt, har du kjøpt',
            isCorrect: false,
            feedback: 'Feil. Ved nettkjøp har du 14 dagers angrerett i Norge.',
          },
          {
            id: 'b',
            text: 'Du kan bruke angreretten og returnere jakken innen 14 dager uten å oppgi grunn',
            isCorrect: true,
            feedback: 'Riktig! Angrerettloven gir deg 14 dagers angrerett på varer kjøpt utenfor fast utsalgssted (nettbutikk, telefon osv.).',
          },
          {
            id: 'c',
            text: 'Du kan bare returnere den hvis jakken har en feil',
            isCorrect: false,
            feedback: 'Feil. Det gjelder for reklamasjon. Angreretten gir deg rett til å returnere uansett grunn.',
          },
          {
            id: 'd',
            text: 'Du må betale 50 % av prisen som gebyr for å returnere',
            isCorrect: false,
            feedback: 'Feil. Angreretten er gratis å bruke — du kan måtte betale returfrakten, men ingen prosentbasert gebyr.',
          },
        ],
        solution: 'Angrerettloven gir deg 14 dagers angrefrist på nettkjøp. Du trenger ikke oppgi noen grunn for å returnere varen.',
      },
    },

    // ========== OPPGAVE 24.5 ==========
    {
      id: 'samfunnsfag-10-24-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-24-ex-5',
        number: '24.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Case: Gjeldsspiralen.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar med egne ord hva en «gjeldsspiral» er.',
            solution: 'En gjeldsspiral oppstår når noen tar opp nye lån for å betale gamle lån, slik at gjelden og rentekostnadene øker stadig mer. Personen graver seg dypere og dypere ned i gjeld.',
          },
          {
            label: 'b',
            task: 'Gi et konkret eksempel på hvordan en gjeldsspiral kan starte fra et lite forbrukslån.',
            solution: 'Eksempel: Du låner 20 000 kr til ny mobil med 20 % rente. Etter et halvt år har du betalt 6 000 kr, men gjelden er bare 16 000 kr (pga. renter). Du sliter med betalingene, og en kamerat tipser deg om et annet låneselskap. Du tar opp 20 000 kr til for å betale det første lånet og dekke andre utgifter. Nå har du 36 000 kr i gjeld med høy rente i stedet for 20 000 kr.',
          },
          {
            label: 'c',
            task: 'Hva bør du gjøre hvis du havner i gjeldsproblemer? Nevn minst to konkrete tiltak.',
            solution: 'Tiltak: 1) Kontakt banken din for å forhandle om en nedbetalingsplan. 2) Ring NAVs gjeldsrådgivningstjeneste (gratis hjelp). 3) Stopp all ny låneopptak umiddelbart. 4) Lag et stramt budsjett og prioriter å betale ned gjeld med høyest rente først. 5) Kontakt Forbrukerrådet for rådgivning.',
          },
        ],
        hints: ['Tenk trinn for trinn — hvordan forverrer situasjonen seg?'],
        solution: 'Gjeldsspiralen er en farlig dynamikk som kan starte med et lite beløp og ende med at livet føles uoverkommelig. Det viktigste er å søke hjelp tidlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: BÆREKRAFTIG FORBRUK ==========
    {
      id: 'samfunnsfag-10-24-barekraft',
      type: 'text',
      content: `## Bærekraftig forbruk — for lommeboka og planeten

Forbruk handler ikke bare om din personlige økonomi — det påvirker hele planeten. Norge er blant verdens mest forbruksintensive land. Hvis alle på jorden levde som nordmenn, ville vi trenge **3,4 jordkloder** for å dekke ressursforbruket.

### Hva er bærekraftig forbruk?
Bærekraftig forbruk betyr å dekke dagens behov uten å ødelegge mulighetene for fremtidige generasjoner. Det handler om å:
- **Kjøpe mindre** — trenger du virkelig den nye tingen?
- **Kjøpe smartere** — velg kvalitet fremfor kvantitet
- **Bruke lenger** — reparer i stedet for å kaste
- **Dele og låne** — bibliotek, bildeling, verktøyutlån
- **Kjøpe brukt** — Finn.no, Tise, bruktbutikker

### Sirkulær økonomi
Tradisjonell økonomi er lineær: vi tar ut ressurser → produserer varer → bruker dem → kaster dem. I en **sirkulær økonomi** gjenbrukes og resirkuleres materialene slik at avfall minimeres.

### Personlig gevinst
Det fine er at bærekraftig forbruk ofte er bra for lommeboka også:
- Brukte klær er billigere enn nye
- Å reparere er billigere enn å kjøpe nytt
- Å kutte unødvendig forbruk gir mer penger til det som virkelig betyr noe for deg`,
    },

    // ========== OPPGAVE 24.6 ==========
    {
      id: 'samfunnsfag-10-24-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-24-ex-6',
        number: '24.6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Praktisk oppgave om bærekraftig forbruk.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre ting du har kjøpt i løpet av den siste måneden som du ikke egentlig trengte. Hvorfor kjøpte du dem?',
            solution: 'Svaret er individuelt. Eleven bør identifisere konkrete unødvendige kjøp og reflektere over hva som motiverte kjøpet (impulskjøp, reklame, gruppepress, vane).',
          },
          {
            label: 'b',
            task: 'Beregn omtrent hvor mye du kunne spart i måneden ved å kutte unødvendige kjøp.',
            solution: 'Eleven legger sammen kostnaden for de unødvendige kjøpene. Eksempel: 3 kaffekopper (180 kr) + takeaway (250 kr) + uplanlagt kleskjøp (400 kr) = 830 kr/mnd = ca. 10 000 kr/år.',
          },
        ],
        hints: ['Vær ærlig med deg selv — poenget er bevisstgjøring, ikke dårlig samvittighet.'],
        solution: 'Bevissthet om eget forbruk er første steg mot smartere økonomiske valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-24-oppsummering',
      type: 'text',
      content: `## Oppsummering: Forbruk og gjeld

Forbruk er en naturlig del av livet, men ukontrollert forbruk og gjeld kan bli en alvorlig felle.

**Nøkkelpunkter:**
- **Forbrukersamfunnet** skaper et konstant press om å kjøpe mer
- Reklame selger følelser, ikke bare produkter — vær bevisst på hvordan du påvirkes
- Skill mellom **behov** (det du trenger) og **ønsker** (det du har lyst på)
- **Forbrukslån** og **kredittkort** med høy rente kan bli svært dyrt
- **Gjeldsspiralen** oppstår når du låner for å betale lån — søk hjelp tidlig
- **Betalingsanmerkning** påvirker livet ditt i 4 år og begrenser mulighetene dine
- Du har sterke **forbrukerrettigheter** i Norge: 14 dagers angrerett på nettkjøp og 5 års reklamasjonsrett
- **Bærekraftig forbruk** er bra for både lommeboka og planeten

Hukeregel: Hvis du ikke har pengene, har du ikke råd til det. «Kjøp nå, betal senere» er fremdeles å betale — ofte med ekstra kostnader.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-24-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-24-ex-7',
        number: '24.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Kjøp nå, betal senere»-tjenester som Klarna burde forbys for personer under 25 år.» Er du enig eller uenig? Begrunn svaret.',
        hints: [
          'Tenk på fordelene og ulempene med slike tjenester.',
          'Hvem har ansvaret — forbrukeren, selskapene eller staten?',
          'Bruk gjerne eksempler fra kapittelet.',
        ],
        solution: 'En god drøfting vurderer argumenter for (mange unge havner i gjeld, hjernen er ikke ferdig utviklet mht. impulskontroll, høye rentekostnader) og mot (personlig frihet, voksne nok til å stemme og kjøre bil, kan lære ansvar). Svaret bør ha en tydelig, begrunnet konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-24-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-24-ex-8',
        number: '24.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektoppgave: Undersøk forbrukerrettighetene dine.',
        subTasks: [
          {
            label: 'a',
            task: 'Du har kjøpt en mobil på nett for 8 999 kr. Etter 3 måneder slutter ladeporten å fungere. Hva kan du gjøre? Nevn dine rettigheter.',
            solution: 'Eleven bør nevne: 1) Reklamasjonsrett i opptil 5 år for varer som forventes å vare lenger. 2) Selger kan velge å reparere, bytte eller refundere. 3) Du må klage innen rimelig tid (ca. 2 mnd). 4) Kontakt selger først, deretter Forbrukerrådet om nødvendig.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom reklamasjon og garanti? Forklar med egne ord.',
            solution: 'Reklamasjon er en lovfestet rett du har i opptil 5 år — selger MÅ gi deg dette. Garanti er noe selger frivillig tilbyr i tillegg til loven, og kan ha andre vilkår. En garanti kan aldri gi deg dårligere rettigheter enn loven allerede gir.',
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig at forbrukere har sterke rettigheter? Hva kan skje i et samfunn uten slike rettigheter?',
            solution: 'Sterke forbrukerrettigheter beskytter den svakere parten (forbrukeren) mot den sterkere (bedriften). Uten rettigheter kunne bedrifter selge dårlige produkter uten konsekvenser, og forbrukere ville tape penger uten mulighet til å klage.',
          },
        ],
        hints: ['Bruk gjerne forbrukerradet.no for å sjekke rettighetene dine.'],
        solution: 'Kunnskap om forbrukerrettigheter er en viktig livsferdighet som beskytter deg som forbruker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 25: Arbeidsliv og rettigheter
// LK20: Utforske og beskrive korleis ulike delar av samfunnet heng saman
//        med arbeidsliv og rettar i arbeidslivet
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_25: TextbookChapter = {
  id: 'samfunnsfag-10-25',
  courseId: 'samfunnsfag-10',
  chapterNumber: '25',
  title: 'Arbeidsliv og rettigheter',
  description: 'Lær om dine rettigheter og plikter som arbeidstaker, arbeidskontrakt, arbeidsmiljøloven, fagforeninger og hvordan det norske arbeidslivet er organisert.',
  estimatedMinutes: 80,
  competenceGoals: [
    'utforske og beskrive korleis arbeidslivet er organisert i Noreg',
    'drøfte rettar og plikter i arbeidslivet og kva rolle fagforeiningar og arbeidsgjevarorganisasjonar har',
    'reflektere over samanhengen mellom utdanning, arbeid og inntekt',
  ],
  keyTerms: [
    { term: 'Arbeidskontrakt', definition: 'En skriftlig avtale mellom arbeidsgiver og arbeidstaker som beskriver lønn, arbeidstid, arbeidsoppgaver og andre vilkår' },
    { term: 'Arbeidsmiljøloven', definition: 'Norges viktigste lov for arbeidslivet, som sikrer trygge arbeidsforhold, regulerer arbeidstid og beskytter mot usaklig oppsigelse' },
    { term: 'Fagforening', definition: 'En organisasjon av arbeidstakere som forhandler med arbeidsgivere om lønn, rettigheter og arbeidsvilkår' },
    { term: 'Tariffavtale', definition: 'En avtale mellom en fagforening og en arbeidsgiver(organisasjon) om lønn og arbeidsvilkår for en bestemt gruppe ansatte' },
    { term: 'Streik', definition: 'Arbeidstakernes sterkeste virkemiddel — de nekter å arbeide for å presse gjennom krav i en forhandling' },
    { term: 'Lockout', definition: 'Arbeidsgivernes virkemiddel — de stenger arbeidstakerne ute fra arbeidsplassen under en konflikt' },
    { term: 'HMS', definition: 'Helse, miljø og sikkerhet — krav til arbeidsgivere om å sikre et forsvarlig arbeidsmiljø' },
    { term: 'Verneombud', definition: 'En representant for de ansatte som skal passe på at arbeidsmiljøet er trygt og at lovverket følges' },
    { term: 'Prøvetid', definition: 'De første 6 månedene av et ansettelsesforhold, der arbeidsgiver lettere kan si opp arbeidstakeren' },
    { term: 'Svart arbeid', definition: 'Arbeid der inntekten ikke rapporteres til skattemyndighetene — ulovlig og straffbart' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-25-intro',
      type: 'text',
      content: `## Du har fått deg jobb — men kjenner du rettighetene dine?

Forestill deg denne situasjonen: Du har fått din første deltidsjobb på en kaffebar. Sjefen sier at du skal jobbe fra 16 til 22 på onsdager og hele lørdagen. Lønnen er 120 kr i timen, og du får ikke noen skriftlig kontrakt. «Vi tar det litt uformelt,» sier sjefen. Etter tre uker ber du om fri en lørdag fordi du skal i et bryllup. Sjefen sier nei og truer med å gi deg sparken.

Hva gjør du? Har sjefen lov til dette? Har du rett på kontrakt? Er 120 kr i timen lovlig? Kan du sies opp fordi du spør om fri?

For å svare på disse spørsmålene trenger du kunnskap om **arbeidsmiljøloven** og dine rettigheter som arbeidstaker. Mange unge tar sin første jobb uten å vite hva de har krav på — og noen arbeidsgivere utnytter dette.

I dette kapittelet skal du lære om:
- Arbeidskontrakt og hva den skal inneholde
- Arbeidstidsregler for ungdom
- Lønn, feriepenger og overtid
- Fagforeninger og deres rolle
- Hva du gjør hvis rettighetene dine brytes
- HMS og arbeidsmiljø`,
    },

    // ========== DEFINISJON: ARBEIDSKONTRAKT ==========
    {
      id: 'samfunnsfag-10-25-def-1',
      type: 'definition',
      title: 'Arbeidskontrakt — din viktigste sikkerhet',
      content: `En **arbeidskontrakt** (også kalt arbeidsavtale) er en skriftlig avtale mellom deg og arbeidsgiveren din. Den er **lovpålagt** — arbeidsgiver MÅ gi deg en kontrakt, uansett om du jobber heltid eller bare noen timer i uken.

**Hva skal kontrakten inneholde?**
- Hvem som er arbeidsgiver og arbeidstaker
- Arbeidssted
- Beskrivelse av arbeidet (stilling og arbeidsoppgaver)
- Startdato
- Forventet varighet (hvis midlertidig)
- Prøvetid (maks 6 måneder)
- Arbeidstid (antall timer og tidspunkter)
- Lønn og eventuelt lønnstillegg
- Feriedager og feriepenger
- Oppsigelsesfrister
- Eventuell tariffavtale

**Regler for unge arbeidstakere (under 18 år):**
- Du MÅ ha skriftlig samtykke fra foreldre/foresatte
- Du kan IKKE jobbe mellom kl. 23.00 og kl. 06.00
- Du har krav på minst 48 timer sammenhengende fri per uke
- Du kan IKKE jobbe overtid
- Du må ha minst 30 minutter pause hvis du jobber mer enn 4,5 timer

**Viktig:** Ingen kontrakt betyr ikke ingen rettigheter. Du har de samme rettighetene uansett, men uten kontrakt er det vanskeligere å bevise hva dere avtalte.`,
    },

    // ========== EKSEMPEL: SOFIES FØRSTE JOBB ==========
    {
      id: 'samfunnsfag-10-25-ex-sofie',
      type: 'example',
      title: 'Sofie sjekker kontrakten sin',
      problem: 'Sofie (16) har fått deltidsjobb i en klesbutikk. Hun har fått en arbeidskontrakt og vil sjekke at alt er i orden. Her er det som står:',
      solution: `**Sofies kontrakt:**
| Punkt | I kontrakten | Vurdering |
|-------|-------------|-----------|
| Lønn | 155 kr/time | OK — over minstelønn i bransjen |
| Arbeidstid | Lørdag 10–17, onsdag 15–19 | OK — ikke nattarbeid |
| Timer per uke | Ca. 11 timer | OK — deltid som passer med skole |
| Prøvetid | 3 måneder | OK — lovlig (maks 6 mnd) |
| Feriepenger | 12 % av brutto lønn | OK — dette er lovens minstekrav for alle |
| Oppsigelse | 1 måneds varsel | OK — lovens minimum |
| Foreldresamtykke | Ja, signert | OK — påkrevd for personer under 18 |

**Hva mangler?**
Kontrakten mangler beskrivelse av pauserettigheter. Sofie jobber 7 timer på lørdager, og har dermed krav på minst 30 minutters pause. Hun bør be arbeidsgiver legge dette inn i kontrakten.

**Sofies månedslønn (omtrent):**
- Lørdag: 7 timer × 155 kr = 1 085 kr
- Onsdag: 4 timer × 155 kr = 620 kr
- Per uke: 1 705 kr
- Per måned (4,3 uker): ca. 7 332 kr brutto
- Etter skatt (ca. 20 %): ca. 5 866 kr netto
- Feriepenger (12 %): 880 kr/mnd spart opp, utbetalt neste sommer`,
    },

    // ========== OPPGAVE 25.1 ==========
    {
      id: 'samfunnsfag-10-25-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-25-ex-1',
        number: '25.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er arbeidsgiver lovpålagt å gi deg?',
        options: [
          {
            id: 'a',
            text: 'Muntlig beskjed om hva du skal gjøre',
            isCorrect: false,
            feedback: 'Feil. Arbeidsgiver er lovpålagt å gi deg en SKRIFTLIG arbeidskontrakt.',
          },
          {
            id: 'b',
            text: 'En skriftlig arbeidskontrakt med lønn, arbeidstid og arbeidsoppgaver',
            isCorrect: true,
            feedback: 'Riktig! Arbeidsmiljøloven krever at alle arbeidstakere får en skriftlig kontrakt — uansett om det er heltid, deltid eller bare noen timer i uken.',
          },
          {
            id: 'c',
            text: 'En SMS med bekreftelse på at du er ansatt',
            isCorrect: false,
            feedback: 'Feil. En SMS er ikke tilstrekkelig. Loven krever en fullstendig skriftlig arbeidskontrakt.',
          },
          {
            id: 'd',
            text: 'Arbeidskontrakt er valgfritt — det er bare vanlig praksis',
            isCorrect: false,
            feedback: 'Feil. Arbeidskontrakt er LOVPÅLAGT i Norge. Arbeidsgiver bryter loven hvis du ikke får kontrakt.',
          },
        ],
        solution: 'Ifølge arbeidsmiljøloven § 14-5 skal det inngås skriftlig arbeidsavtale i alle arbeidsforhold.',
      },
    },

    // ========== OPPGAVE 25.2 ==========
    {
      id: 'samfunnsfag-10-25-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-25-ex-2',
        number: '25.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Case: Brudd på rettighetene.',
        subTasks: [
          {
            label: 'a',
            task: 'Gå tilbake til situasjonen i introduksjonen (kaffebaren). Finn minst tre ting sjefen gjør feil.',
            solution: '1) Ingen skriftlig kontrakt — loven krever dette. 2) Lønn på 120 kr/time er svært lavt og kan ligge under tariff. 3) Arbeid til kl. 22 kan være ulovlig for ansatte under 18 år (avhengig av alder). 4) Å true med oppsigelse fordi noen ber om fri er usaklig og potensielt ulovlig.',
          },
          {
            label: 'b',
            task: 'Hva bør du gjøre i en slik situasjon? Nevn konkrete steg.',
            solution: 'Steg: 1) Be om skriftlig kontrakt — si at det er lovpålagt. 2) Sjekk tarifflønn for bransjen. 3) Kontakt Arbeidstilsynet (tlf. 73 19 97 00 eller arbeidstilsynet.no) for gratis veiledning. 4) Snakk med foreldre/foresatte. 5) Fagforening som HK (Handel og Kontor) kan gi råd.',
          },
        ],
        hints: ['Sjekk reglene for unge arbeidstakere under 18 år.'],
        solution: 'Kunnskap om dine rettigheter gjør at du ikke lar deg utnytte. Arbeidstilsynet er der for å hjelpe.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: FAGFORENINGER ==========
    {
      id: 'samfunnsfag-10-25-def-2',
      type: 'definition',
      title: 'Fagforeninger og organisering',
      content: `En **fagforening** er en organisasjon av arbeidstakere som jobber for å ivareta medlemmenes interesser — bedre lønn, trygge arbeidsforhold og rettferdige vilkår.

**Slik er det organisert i Norge:**

**Arbeidstakersiden:**
- **LO** (Landsorganisasjonen): Norges største hovedorganisasjon med ca. 970 000 medlemmer. Organiserer alt fra industriarbeidere til lærere.
- **Unio:** Organiserer utdanningsgruppene — lærere, sykepleiere, politifolk.
- **YS** (Yrkesorganisasjonenes Sentralforbund): Partipolitisk uavhengig, organiserer mange yrkesgrupper.
- **Akademikerne:** Organiserer grupper med høyere utdanning — leger, jurister, sivilingeniører.

**Arbeidsgiversiden:**
- **NHO** (Næringslivets Hovedorganisasjon): Representerer private bedrifter.
- **KS** (Kommunesektorens organisasjon): Representerer kommuner og fylkeskommuner.
- **Spekter:** Representerer blant annet sykehus og kulturinstitusjoner.

**Tariffavtale** er en avtale mellom en fagforening og en arbeidsgiver(organisasjon) om lønn og vilkår. Den gjelder for alle ansatte som jobben dekker.

**Når partene ikke blir enige:**
1. **Forhandlinger:** Partene prøver å bli enige.
2. **Mekling:** En mekler (Riksmekleren) prøver å finne en løsning.
3. **Streik:** Arbeidstakerne nekter å jobbe.
4. **Lockout:** Arbeidsgiver stenger de ansatte ute.
5. **Tvungen lønnsnemnd:** Staten griper inn og bestemmer, f.eks. ved fare for liv og helse.

**Organisasjonsgrad:** Ca. 50 % av norske arbeidstakere er organisert i en fagforening. Det er høyt sammenlignet med de fleste andre land (USA: 10 %, Storbritannia: 23 %), men lavere enn i Sverige (65 %).`,
    },

    // ========== EKSEMPEL: TARIFFOPPGJØRET ==========
    {
      id: 'samfunnsfag-10-25-ex-tariff',
      type: 'example',
      title: 'Slik fungerer et tariffoppgjør',
      problem: 'Norsk Sykepleierforbund (medlem av Unio) forhandler med KS om ny lønn for sykepleiere. Hvordan foregår det?',
      solution: `**Trinn 1: Krav (mars)**
Sykepleierforbundet presenterer sine krav: 5 % lønnsvekst og bedre tillegg for kvelds- og nattarbeid.

**Trinn 2: Tilbud (april)**
KS tilbyr 3,2 % lønnsvekst og ingen endring i kveldstillegg.

**Trinn 3: Forhandlinger bryter sammen**
Partene er for langt unna hverandre. Forhandlingene brytes.

**Trinn 4: Mekling (mai)**
Riksmekleren kaller inn partene og prøver å finne en mellomløsning. Mekleren foreslår 4,0 % lønnsvekst + et lite kveldstillegg.

**Trinn 5: Resultat**
- Hvis begge sier ja → ny tariffavtale
- Hvis sykepleierne sier nei → **streik**: Sykepleiere ved utvalgte sykehus og sykehjem legger ned arbeidet
- Under streik: Dispensasjoner gis for å sikre at pasienter som trenger livsnødvendig hjelp fortsatt får det

**Resultat i dette eksempelet:** Etter 5 dagers streik ble partene enige om 4,3 % lønnsvekst og forbedrede kveldstillegg.

**I kroner:** For en sykepleier med 550 000 kr i årslønn betyr 4,3 % en lønnsøkning på 23 650 kr — nesten 2 000 kr mer i måneden.`,
    },

    // ========== OPPGAVE 25.3 ==========
    {
      id: 'samfunnsfag-10-25-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-25-ex-3',
        number: '25.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en tariffavtale?',
        options: [
          {
            id: 'a',
            text: 'En lov som bestemmer lønnen til alle nordmenn',
            isCorrect: false,
            feedback: 'Feil. En tariffavtale er ikke en lov, men en avtale mellom en fagforening og en arbeidsgiver(organisasjon).',
          },
          {
            id: 'b',
            text: 'En individuell avtale mellom deg og sjefen din',
            isCorrect: false,
            feedback: 'Feil. Det er en arbeidskontrakt. En tariffavtale gjelder for en hel yrkesgruppe eller bransje.',
          },
          {
            id: 'c',
            text: 'En avtale mellom fagforening og arbeidsgiver om lønn og arbeidsvilkår for en gruppe ansatte',
            isCorrect: true,
            feedback: 'Riktig! En tariffavtale forhandles mellom arbeidstaker- og arbeidsgiversiden og gjelder for alle ansatte den dekker.',
          },
          {
            id: 'd',
            text: 'Et dokument som viser hvor mye skatt du betaler',
            isCorrect: false,
            feedback: 'Feil. Det er skattekortet eller skattemeldingen. Tariffavtaler handler om lønn og arbeidsvilkår.',
          },
        ],
        solution: 'En tariffavtale er en kollektiv avtale mellom fagforening og arbeidsgiver(organisasjon) som fastsetter lønn, arbeidstid og andre vilkår for en bestemt gruppe arbeidstakere.',
      },
    },

    // ========== TEKST: HMS OG ARBEIDSMILJØ ==========
    {
      id: 'samfunnsfag-10-25-hms',
      type: 'text',
      content: `## HMS — trygghet på arbeidsplassen

**HMS** står for **helse, miljø og sikkerhet** og handler om at alle arbeidstakere har rett til en trygg og helsefremmende arbeidsplass.

### Arbeidsgivers plikter:
- Sørge for at arbeidsplassen er trygg (brannsikkerhet, ergonomi, renhold)
- Gi opplæring i sikkerhet og bruk av utstyr
- Forebygge mobbing, trakassering og diskriminering
- Ha systemer for å rapportere farlige forhold
- Tilby verneombud og arbeidsmiljøutvalg

### Dine plikter som arbeidstaker:
- Følge sikkerhetsregler og bruke pålagt verneutstyr
- Melde fra om farlige forhold
- Medvirke til et godt arbeidsmiljø
- Si fra om trakassering eller diskriminering du opplever eller observerer

### Verneombudet
**Verneombudet** er de ansattes representant for HMS. Alle arbeidsplasser med mer enn 10 ansatte er pålagt å ha verneombud. Verneombudet kan:
- Stanse farlig arbeid
- Kreve tiltak for å bedre arbeidsmiljøet
- Representere deg overfor arbeidsgiver

### Svart arbeid — et samfunnsproblem
**Svart arbeid** betyr at inntekten ikke rapporteres til skattemyndighetene. Det er ulovlig og:
- Du betaler ikke skatt, noe som er skattesvindel
- Du har ingen rettigheter (ingen oppsigelsesrett, ingen feriepenger, ingen sykepengerett)
- Du er ikke dekket av yrkesskadesforsikring
- Arbeidsgiver sparer på bekostning av fellesskapet
- Det undergraver det norske velferdssystemet

**Konsekvenser:** Svart arbeid koster det norske samfunnet anslagsvis 28 milliarder kroner årlig i tapte skatteinntekter — penger som ellers ville gått til skoler, sykehus og veier.`,
    },

    // ========== OPPGAVE 25.4 ==========
    {
      id: 'samfunnsfag-10-25-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-25-ex-4',
        number: '25.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft svart arbeid.',
        subTasks: [
          {
            label: 'a',
            task: 'En kamerat tilbyr deg 200 kr i timen for å hjelpe til med oppussing i helgen — svart. Det er mer enn du tjener på den vanlige jobben din. Nevn tre grunner til at du bør si nei.',
            solution: '1) Det er ulovlig — skattesvindel kan straffes med bøter eller fengsel. 2) Du har ingen rettigheter — skader du deg, har du ingen forsikring. 3) Du undergraver velferdsstaten — skattepengene betaler for sykehus, skole og trygd som du og familien din bruker.',
          },
          {
            label: 'b',
            task: 'Hva er konsekvensene for samfunnet dersom mange velger å jobbe svart?',
            solution: 'Lavere skatteinntekter betyr dårligere offentlige tjenester (skole, helse, veier). Useriøse bedrifter utkonkurrerer seriøse bedrifter på pris. Arbeidstakere uten rettigheter kan utnyttes. Tilliten i samfunnet svekkes.',
          },
        ],
        hints: ['Tenk på sammenhengen mellom skatt og de tjenestene du bruker.'],
        solution: 'Svart arbeid kan virke fristende på kort sikt, men er ulovlig og skadelig for både deg selv og samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 25.5 ==========
    {
      id: 'samfunnsfag-10-25-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-25-ex-5',
        number: '25.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva har du IKKE rett på dersom du jobber svart?',
        options: [
          {
            id: 'a',
            text: 'Høy timelønn',
            isCorrect: false,
            feedback: 'Svart arbeid kan gi høy timelønn, men det gjør det ikke lovlig eller trygt.',
          },
          {
            id: 'b',
            text: 'Sykepenger, feriepenger og yrkesskadesforsikring',
            isCorrect: true,
            feedback: 'Riktig! Ved svart arbeid har du ingen av de rettighetene som følger med et lovlig arbeidsforhold — ingen sykepenger, ingen feriepenger, og ingen forsikring om du skader deg.',
          },
          {
            id: 'c',
            text: 'Muligheten til å jobbe i helgen',
            isCorrect: false,
            feedback: 'Feil. Du kan jobbe i helgen uansett, men det har ingenting med svart arbeid å gjøre.',
          },
          {
            id: 'd',
            text: 'Kontantbetaling',
            isCorrect: false,
            feedback: 'Svart arbeid betales ofte kontant, men det er nettopp dette som gjør det vanskelig å spore — og ulovlig.',
          },
        ],
        solution: 'Ved svart arbeid mister du sykepenger, feriepenger, pensjonsopptjening og yrkesskadesforsikring — alle rettigheter som er knyttet til et lovlig arbeidsforhold.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-25-oppsummering',
      type: 'text',
      content: `## Oppsummering: Arbeidsliv og rettigheter

Arbeidslivet i Norge er regulert av lover og avtaler som beskytter deg som arbeidstaker.

**Nøkkelpunkter:**
- **Arbeidskontrakt** er lovpålagt — alle har krav på en skriftlig avtale
- **Arbeidsmiljøloven** regulerer arbeidstid, oppsigelse, HMS og rettigheter
- Unge under 18 har **ekstra beskyttelse** (ikke nattarbeid, foreldresamtykke, begrenset arbeidstid)
- **Fagforeninger** forhandler om lønn og vilkår gjennom tariffavtaler
- Ved uenighet kan det bli **mekling, streik eller lockout**
- **HMS** sikrer et trygt arbeidsmiljø — verneombudet er din representant
- **Svart arbeid** er ulovlig og fratar deg rettigheter og forsikring
- **Arbeidstilsynet** er din myndighetsinstans dersom rettighetene dine brytes

Den viktigste regelen: Kjenner du rettighetene dine, kan ingen utnytte deg.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-25-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-25-ex-6',
        number: '25.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Alle arbeidstakere bør være medlem av en fagforening.» Er du enig eller uenig? Begrunn svaret.',
        hints: [
          'Tenk på fordelene ved fagforeningsmedlemskap (kollektiv styrke, tariffavtale, rettshjelp).',
          'Tenk på ulempene (kontingent, kan oppleves unødvendig, individuell frihet).',
          'Hva skjer med arbeidslivet dersom organisasjonsgraden synker?',
        ],
        solution: 'En god drøfting vurderer fordelene (bedre lønn, tryggere vilkår, rettshjelp, kollektiv forhandlingsmakt) og ulempene (kontingent ca. 300–600 kr/mnd, begrenser individuell forhandling, kan oppleves som unødvendig for noen). Svaret bør reflektere over sammenhengen mellom høy organisasjonsgrad og det norske arbeidslivets kvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-25-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-25-ex-7',
        number: '25.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektoppgave: Utforsk et yrke du er interessert i.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et yrke du er interessert i. Finn ut: Hva er vanlig lønn? Kreves det utdanning? Hvilken fagforening organiserer dette yrket?',
            solution: 'Eleven velger et yrke og oppgir konkrete tall. Eksempel: Sykepleier — startlønn ca. 450 000 kr/år, krever 3-årig bachelorgrad, organisert i Norsk Sykepleierforbund (Unio).',
          },
          {
            label: 'b',
            task: 'Beregn omtrent hva du vil sitte igjen med per måned etter skatt (bruk en skatteprosent på ca. 25 % for enkel beregning).',
            solution: 'Eleven deler årslønn på 12 og trekker fra 25 % skatt. Eksempel: 450 000 / 12 = 37 500 kr brutto → 37 500 × 0,75 = 28 125 kr netto per måned.',
          },
          {
            label: 'c',
            task: 'Lag et enkelt budsjett for hvordan du ville disponert denne lønnen som voksen (husleie, mat, transport, sparing osv.).',
            solution: 'Eleven lager et realistisk voksenbudsjett. Eksempel med 28 000 kr netto: Husleie 10 000 kr, mat 4 000 kr, transport 1 500 kr, forsikring 800 kr, mobilabonnement 399 kr, strøm 800 kr, sparing 3 000 kr, fritid/klær 5 000 kr, buffer 2 501 kr.',
          },
        ],
        hints: ['Bruk utdanning.no eller fagforbundenes nettsider for å finne informasjon.'],
        solution: 'Denne oppgaven kobler yrkesvalg, utdanning og personlig økonomi — og viser at det er lurt å tenke praktisk om fremtiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        allowsSpreadsheet: true,
        spreadsheetTemplate: 'budget',
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 26: Entreprenørskap og innovasjon
// LK20: Utforske korleis teknologi og innovasjon har endra og endrar
//        arbeids- og næringsliv
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_26: TextbookChapter = {
  id: 'samfunnsfag-10-26',
  courseId: 'samfunnsfag-10',
  chapterNumber: '26',
  title: 'Entreprenørskap og innovasjon',
  description: 'Lær hva entreprenørskap betyr, hvordan gode ideer kan bli til bedrifter, og hvilken rolle innovasjon spiller for samfunnsutviklingen.',
  estimatedMinutes: 70,
  competenceGoals: [
    'utforske korleis teknologi og innovasjon har endra og endrar arbeids- og næringsliv',
    'drøfte kva det vil seie å skape verdiar i samfunnet, og korleis entreprenørskap kan bidra',
    'reflektere over samanhengen mellom utdanning, kreativitet og arbeid',
  ],
  keyTerms: [
    { term: 'Entreprenør', definition: 'En person som starter en ny bedrift eller virksomhet basert på en idé, og tar den økonomiske risikoen det innebærer' },
    { term: 'Entreprenørskap', definition: 'Prosessen med å identifisere muligheter, utvikle ideer og skape nye virksomheter eller verdier' },
    { term: 'Innovasjon', definition: 'Å skape noe nytt eller forbedre noe eksisterende på en måte som gir verdi — nye produkter, tjenester, prosesser eller forretningsmodeller' },
    { term: 'Forretningsplan', definition: 'Et dokument som beskriver forretningsideen, markedet, økonomien og strategien for en ny bedrift' },
    { term: 'Oppstartsbedrift (startup)', definition: 'En nystartet bedrift, ofte teknologibasert, som jobber med å utvikle et nytt produkt eller en tjeneste' },
    { term: 'Enkeltpersonforetak', definition: 'Den enkleste selskapsformen i Norge — du starter og driver bedriften alene, med fullt personlig ansvar' },
    { term: 'Aksjeselskap (AS)', definition: 'En selskapsform der eierne (aksjonærene) har begrenset ansvar — du risikerer bare pengene du har skutt inn' },
    { term: 'Sosialt entreprenørskap', definition: 'Entreprenørskap som har som hovedmål å løse et samfunnsproblem, ikke bare å tjene penger' },
    { term: 'Verdiskaping', definition: 'Å skape verdi for andre gjennom produkter, tjenester eller arbeid — grunnlaget for all økonomisk aktivitet' },
    { term: 'Investor', definition: 'En person eller institusjon som skyter inn penger i en bedrift i bytte mot eierandel og mulig avkastning' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-26-intro',
      type: 'text',
      content: `## Fra idé til bedrift — kan du bli din egen sjef?

Visste du at noen av verdens mest kjente selskaper ble startet av unge mennesker med en idé og mye pågangsmot? Steve Jobs startet Apple i garasjen som 21-åring. Mark Zuckerberg laget Facebook på hybelen sin som 19-åring. Og her i Norge startet Petter Stordalen sin karriere med å selge jordbær som 13-åring.

Men entreprenørskap handler ikke bare om å bli rik og berømt. Det handler om å se et problem, finne en løsning og gjøre noe med det. Kanskje har du lagt merke til at det mangler en god matlevering i nabolaget ditt, at det er vanskelig for eldre å bruke nettbank, eller at ungdomsklubben trenger et bedre bookingsystem. Alle disse observasjonene kan være starten på en bedrift.

I Norge finnes det mange gode støtteordninger for gründere: Innovasjon Norge, Ungt Entreprenørskap, og kommunale næringsfond. Du trenger ikke engang være voksen for å starte — mange ungdommer driver vellykkede småbedrifter allerede.

I dette kapittelet skal du lære om:
- Hva entreprenørskap og innovasjon betyr
- Fra idé til bedrift — steg for steg
- Ulike selskapsformer i Norge
- Sosialt entreprenørskap
- Innovasjon og samfunnsutvikling
- Norske suksesshistorier`,
    },

    // ========== DEFINISJON: ENTREPRENØRSKAP ==========
    {
      id: 'samfunnsfag-10-26-def-1',
      type: 'definition',
      title: 'Entreprenørskap — å skape noe nytt',
      content: `**Entreprenørskap** er prosessen med å identifisere en mulighet, utvikle en idé og skape en ny virksomhet eller verdi. En **entreprenør** (eller gründer) er personen som gjør dette — den som tar initiativet og risikoen.

**Kjennetegn på entreprenører:**
- **Ser muligheter** der andre ser problemer
- **Tar initiativ** — venter ikke på at noen andre skal gjøre det
- **Tåler risiko** — ikke redd for å feile
- **Er utholdende** — gir ikke opp ved første motgang
- **Er kreative** — finner nye løsninger

**Ulike typer entreprenørskap:**
- **Kommersielt entreprenørskap:** Å starte en bedrift for å tjene penger. Eksempel: En ny kaffebar, en app, en nettbutikk.
- **Sosialt entreprenørskap:** Å starte en virksomhet for å løse et samfunnsproblem. Eksempel: En app som kobler matsvinn fra butikker med folk som trenger billig mat (Too Good To Go).
- **Intraprenørskap:** Å tenke som en entreprenør innenfor en eksisterende bedrift — skape nye produkter eller forbedre prosesser.

**Verdiskaping:**
Entreprenørskap skaper verdi for samfunnet gjennom:
- Nye arbeidsplasser
- Nye produkter og tjenester som dekker behov
- Skatteinntekter til fellesskapet
- Økonomisk vekst og utvikling
- Løsninger på samfunnsutfordringer`,
    },

    // ========== EKSEMPEL: TOO GOOD TO GO ==========
    {
      id: 'samfunnsfag-10-26-ex-tgtg',
      type: 'example',
      title: 'Too Good To Go — sosialt entreprenørskap i praksis',
      problem: 'I 2015 ble appen Too Good To Go startet i Danmark for å bekjempe matsvinn. Hvordan fungerer den som eksempel på sosialt entreprenørskap?',
      solution: `**Problemet:**
En tredjedel av all mat som produseres i verden, kastes. I Norge kaster vi ca. 390 000 tonn mat i året. Butikker, bakeri og restauranter kaster mat som er nær utløpsdatoen — selv om den er helt fin.

**Løsningen:**
Too Good To Go er en app der butikker og spisesteder selger overskuddsmat i «overraskelsesposer» til en brøkdel av prisen — typisk 39–79 kr for mat verdt 120–250 kr.

**Hvorfor det er sosialt entreprenørskap:**
| Aspekt | Kommersielt | Sosialt |
|--------|------------|---------|
| Hovedmål | Tjene penger | Redusere matsvinn |
| Inntektskilde | Provisjon per salg | Provisjon per salg |
| Samfunnsnytte | Jobber skapt | Mindre matsvinn, billig mat |
| Kunder | Forbrukere som vil spare | Forbrukere som vil spare OG redusere svinn |

**Resultater (2024):**
- Opererer i 17 land
- Over 80 millioner brukere
- Over 200 millioner måltider reddet
- Samarbeider med 150 000+ butikker og restauranter

**Lærdommen:** Du trenger ikke velge mellom å tjene penger og gjøre noe godt for verden. De beste forretningsideene gjør begge deler.`,
    },

    // ========== OPPGAVE 26.1 ==========
    {
      id: 'samfunnsfag-10-26-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-26-ex-1',
        number: '26.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom kommersielt og sosialt entreprenørskap?',
        options: [
          {
            id: 'a',
            text: 'Kommersielt entreprenørskap er lovlig, sosialt er ulovlig',
            isCorrect: false,
            feedback: 'Feil. Begge er fullt lovlige former for entreprenørskap.',
          },
          {
            id: 'b',
            text: 'Kommersielt entreprenørskap har profitt som hovedmål, sosialt har å løse et samfunnsproblem som hovedmål',
            isCorrect: true,
            feedback: 'Riktig! Kommersielt entreprenørskap fokuserer primært på å tjene penger, mens sosialt entreprenørskap fokuserer på å løse et samfunnsproblem — selv om begge kan tjene penger.',
          },
          {
            id: 'c',
            text: 'Sosialt entreprenørskap drives av staten, kommersielt av privatpersoner',
            isCorrect: false,
            feedback: 'Feil. Begge drives av private initiativer. Sosialt entreprenørskap er ikke det samme som offentlig virksomhet.',
          },
          {
            id: 'd',
            text: 'Det er ingen forskjell — det er det samme',
            isCorrect: false,
            feedback: 'Feil. Det er en viktig forskjell i hovedmotivasjonen bak virksomheten.',
          },
        ],
        solution: 'Kommersielt entreprenørskap har profitt som hovedmål, mens sosialt entreprenørskap har som hovedmål å løse et samfunnsproblem. Begge kan tjene penger, men motivasjonen er forskjellig.',
      },
    },

    // ========== DEFINISJON: FRA IDÉ TIL BEDRIFT ==========
    {
      id: 'samfunnsfag-10-26-def-2',
      type: 'definition',
      title: 'Fra idé til bedrift — steg for steg',
      content: `Å starte en bedrift krever mer enn en god idé. Her er de viktigste stegene:

**1. Finn en idé — se et problem**
De beste forretningsideene løser et reelt problem. Spør deg selv:
- Hva irriterer meg? Hva mangler i hverdagen min?
- Er det noe som kan gjøres enklere, raskere eller billigere?
- Er det noen som trenger noe de ikke får i dag?

**2. Undersøk markedet**
- Hvem er kundene dine? (målgruppe)
- Finnes det lignende produkter/tjenester? (konkurrenter)
- Vil folk faktisk betale for dette?

**3. Lag en forretningsplan**
- **Forretningsidé:** Hva skal du selge?
- **Målgruppe:** Hvem er kundene?
- **Inntektsmodell:** Hvordan tjener du penger?
- **Kostnader:** Hva koster det å starte og drive?
- **Markedsføring:** Hvordan skal kundene finne deg?

**4. Velg selskapsform**
- **Enkeltpersonforetak (ENK):** Enklest å starte, gratis å registrere. Du er personlig ansvarlig for gjelden.
- **Aksjeselskap (AS):** Krever 30 000 kr i aksjekapital. Eierne risikerer bare det de har skutt inn.
- **Samvirke:** Eid og styrt av medlemmene. Demokratisk struktur.

**5. Registrer bedriften**
- Registrering i Brønnøysundregistrene (obligatorisk)
- Søk om nødvendige tillatelser (f.eks. servering, helsekrav)
- Ordne forsikring og regnskap

**6. Start, lær, tilpass**
De fleste gründere justerer ideen sin underveis. Det viktigste er å starte — og lære av tilbakemeldinger.`,
    },

    // ========== EKSEMPEL: UNGDOMSBEDRIFT ==========
    {
      id: 'samfunnsfag-10-26-ex-ub',
      type: 'example',
      title: 'Ungdomsbedrift — entreprenørskap i skolen',
      problem: 'Klasse 10B på Fjordvik ungdomsskole skal starte en ungdomsbedrift gjennom Ungt Entreprenørskap. De har observert at mange elever glemmer matboks og bruker mye penger i kantina. Kan de lage en løsning?',
      solution: `**Idéfasen:**
Klassen brainstormer og lander på en idé: «FjordLunch» — et abonnement der elever bestiller lunsj kvelden før via en app, og maten lages av elever på morgenen med rimelige råvarer.

**Forretningsplanen:**
| Element | Innhold |
|---------|---------|
| Produkt | Fersk, sunn og billig lunsj levert til klasserommet |
| Målgruppe | Elever ved Fjordvik ungdomsskole |
| Pris | 35 kr per lunsj (kantina tar 65 kr) |
| Kostnader per lunsj | Råvarer ca. 18 kr, emballasje 2 kr |
| Fortjeneste per lunsj | 35 − 20 = 15 kr |
| Antall kunder per dag | Mål: 30 elever |
| Daglig omsetning | 30 × 35 = 1 050 kr |
| Daglig fortjeneste | 30 × 15 = 450 kr |
| Ukentlig fortjeneste | 450 × 5 = 2 250 kr |

**Organisering:**
- Daglig leder: Ansvarlig for bestillinger og økonomi
- Kjøkkenteam (3 elever): Lager maten om morgenen
- Leveringsteam (2 elever): Leverer til klasserommene
- Markedsføringsteam (2 elever): Promoterer på Instagram og plakater

**Læringsutbytte:**
Elevene lærer om økonomi, samarbeid, markedsføring, matlaging, logistikk og kundeservice — alt i praksis.`,
    },

    // ========== OPPGAVE 26.2 ==========
    {
      id: 'samfunnsfag-10-26-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-26-ex-2',
        number: '26.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utvikle en egen forretningsidé.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser et problem eller behov du ser i hverdagen din (på skolen, i nærmiljøet, eller blant venner).',
            solution: 'Eleven identifiserer et reelt problem, f.eks. «det er vanskelig å finne gode leksehjelp-grupper», «eldre naboer trenger hjelp med teknologi», «det mangler et sted å henge for ungdom i helgene».',
          },
          {
            label: 'b',
            task: 'Beskriv din løsning: Hva vil du tilby? Hvem er kundene? Hvordan skal du tjene penger?',
            solution: 'Eleven beskriver en konkret løsning med målgruppe og inntektsmodell.',
          },
          {
            label: 'c',
            task: 'Lag et enkelt budsjett: Hva koster det å starte? Hva vil du ta betalt? Hvor mye kan du tjene per måned?',
            solution: 'Eleven lager et realistisk budsjett med oppstartskostnader, prisnivå og estimert inntekt.',
          },
        ],
        hints: [
          'De beste ideene løser et reelt problem.',
          'Start i det små — du trenger ikke å redde verden med en gang.',
        ],
        solution: 'Denne oppgaven trener kreativitet, problemløsning og grunnleggende forretningsforståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        allowsSpreadsheet: true,
        spreadsheetTemplate: 'custom',
      },
    },

    // ========== TEKST: INNOVASJON OG SAMFUNN ==========
    {
      id: 'samfunnsfag-10-26-innovasjon',
      type: 'text',
      content: `## Innovasjon — motoren i samfunnsutviklingen

**Innovasjon** betyr å skape noe nytt som gir verdi. Det trenger ikke være en helt ny oppfinnelse — det kan også være å forbedre noe som allerede finnes.

### Typer innovasjon:
- **Produktinnovasjon:** Et helt nytt produkt (f.eks. smarttelefonen)
- **Prosessinnovasjon:** En ny, bedre måte å lage noe på (f.eks. roboter i industrien)
- **Tjenesteinnovasjon:** En ny måte å levere en tjeneste på (f.eks. Vipps som erstattet kontanter)
- **Sosial innovasjon:** Nye løsninger på sosiale utfordringer (f.eks. Housing First — gi bostedsløse bolig først, hjelp etterpå)

### Norske innovasjoner som endret verden:
- **Ostehøvelen (1925):** Thor Bjørklund fra Lillehammer oppfant et redskap som finnes i hvert eneste norske hjem
- **Vipps (2015):** DNBs mobilbetalingsapp revolusjonerte måten vi overfører penger på. Nå brukt av 4,4 millioner nordmenn
- **Autopass (1990-tallet):** Automatisk bompengeavlesning som fjernet køer ved bomstasjoner
- **Salmon farming (1970-tallet):** Norge pionerte oppdrettslaks og er nå verdens største eksportør

### Innovasjon og arbeidslivet
Innovasjon endrer arbeidslivet kontinuerlig. Noen yrker forsvinner (f.eks. bompengeinnkrever), mens nye oppstår (f.eks. apputvikler, droneoperatør, dataingeniør). Evnen til å lære nye ting og tilpasse seg endringer — det som kalles **omstillingsevne** — blir stadig viktigere.

### Kunstig intelligens (KI) og fremtidens arbeidsliv
KI som ChatGPT og lignende verktøy endrer allerede mange yrker. Jobber som er rutinepreget og regelbasert, er mest utsatt for automatisering. Jobber som krever kreativitet, empati og kompleks problemløsning vil trolig bestå lenger.`,
    },

    // ========== OPPGAVE 26.3 ==========
    {
      id: 'samfunnsfag-10-26-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-26-ex-3',
        number: '26.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Vipps er et eksempel på:',
        options: [
          {
            id: 'a',
            text: 'Produktinnovasjon — et helt nytt fysisk produkt',
            isCorrect: false,
            feedback: 'Feil. Vipps er ikke et fysisk produkt, men en digital tjeneste.',
          },
          {
            id: 'b',
            text: 'Sosial innovasjon — løser et sosialt problem',
            isCorrect: false,
            feedback: 'Feil. Vipps løser primært et praktisk problem (betaling), ikke et sosialt problem.',
          },
          {
            id: 'c',
            text: 'Tjenesteinnovasjon — en ny måte å utføre en eksisterende tjeneste (pengeoverføring) på',
            isCorrect: true,
            feedback: 'Riktig! Vipps er en ny, enklere måte å overføre penger på — noe vi alltid har gjort, men nå via mobiltelefonen.',
          },
          {
            id: 'd',
            text: 'Prosessinnovasjon — en ny industriell prosess',
            isCorrect: false,
            feedback: 'Feil. Prosessinnovasjon handler om produksjonsprosesser i industrien, ikke om forbrukerapper.',
          },
        ],
        solution: 'Vipps er tjenesteinnovasjon: en ny og bedre måte å utføre pengeoverføring — noe som har eksistert lenge, men nå gjøres smidigere gjennom en mobilapp.',
      },
    },

    // ========== OPPGAVE 26.4 ==========
    {
      id: 'samfunnsfag-10-26-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-26-ex-4',
        number: '26.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Innovasjon og fremtidens arbeidsliv.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre yrker som kan bli sterkt påvirket av kunstig intelligens (KI) i løpet av de neste 10–20 årene. Forklar hvorfor.',
            solution: 'Eksempler: 1) Kassamedarbeidere — selvbetjeningskasser og Amazon Go-butikker erstatter allerede disse. 2) Regnskapsførere — KI kan automatisere bokføring og rapportering. 3) Sjåfører — selvkjørende biler og lastebiler er under utvikling. Alle disse er rutinepreget arbeid som kan automatiseres.',
          },
          {
            label: 'b',
            task: 'Nevn tre yrker som trolig vil være trygge for KI. Forklar hvorfor.',
            solution: 'Eksempler: 1) Sykepleier — krever empati, fysisk tilstedeværelse og komplekse vurderinger. 2) Lærer — krever mellommenneskelig kontakt, motivasjon og tilpasning. 3) Rørlegger — krever praktisk arbeid i ulike fysiske miljøer. Disse yrkene krever egenskaper KI ikke kan erstatte.',
          },
          {
            label: 'c',
            task: 'Hva er den viktigste ferdigheten du tror unge bør utvikle for å lykkes i fremtidens arbeidsliv? Begrunn svaret.',
            solution: 'Svaret er individuelt, men bør begrunnes. Gode svar inkluderer: omstillingsevne/lærevillighet (evnen til å lære nye ting hele livet), kreativitet (maskiner er dårlige på å tenke nytt), samarbeidsevne (komplekse problemer krever team), eller kritisk tenkning (evnen til å vurdere informasjon).',
          },
        ],
        hints: ['Tenk på hva som kjennetegner yrker som er vanskelige å automatisere.'],
        solution: 'Fremtidens arbeidsliv krever evne til å tilpasse seg, samarbeide og løse komplekse problemer — ferdigheter som maskiner (foreløpig) ikke kan erstatte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-26-oppsummering',
      type: 'text',
      content: `## Oppsummering: Entreprenørskap og innovasjon

Entreprenørskap og innovasjon er drivkrefter bak økonomisk utvikling og samfunnsendring.

**Nøkkelpunkter:**
- **Entreprenørskap** handler om å se muligheter og skape noe nytt
- **Sosialt entreprenørskap** har som mål å løse samfunnsproblemer (f.eks. Too Good To Go)
- Å starte bedrift krever idé, markedsundersøkelse, forretningsplan, registrering og pågangsmot
- I Norge kan du velge mellom **enkeltpersonforetak** (ENK) og **aksjeselskap** (AS)
- **Innovasjon** finnes i mange former: produkt, prosess, tjeneste og sosial innovasjon
- Norge har lang tradisjon for innovasjon — fra ostehøvelen til Vipps
- **KI og automatisering** endrer arbeidslivet — omstillingsevne blir stadig viktigere
- **Ungt Entreprenørskap** gir ungdom mulighet til å prøve seg som gründere allerede på skolen

Å tenke som en entreprenør — se problemer som muligheter og ta initiativ — er nyttig uansett hva du velger å jobbe med.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-26-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-26-ex-5',
        number: '26.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Alle bør lære entreprenørskap i skolen — ikke bare de som vil starte bedrift.» Er du enig eller uenig? Begrunn svaret.',
        hints: [
          'Tenk på hva entreprenørskap lærer deg, utover det å starte bedrift.',
          'Er kreativitet, initiativ og problemløsning nyttig i alle yrker?',
          'Hva er argumentene mot å bruke skoletid på dette?',
        ],
        solution: 'En god drøfting vurderer argumenter for (utvikler kreativitet, initiativ og problemløsning som er nyttig i alle yrker, gir praktisk forståelse av økonomi) og mot (tar tid fra andre fag, ikke alle har interesse for bedrift, kan gi for mye fokus på profitt). Svaret bør ha en begrunnet konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-26-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-26-ex-6',
        number: '26.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektoppgave: Sosialt entreprenørskap — løs et problem i nærmiljøet ditt.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser et problem i nærmiljøet ditt eller på skolen som du tror kan løses med en ny tjeneste eller et nytt tilbud.',
            solution: 'Eleven identifiserer et reelt problem, f.eks. ensomhet blant eldre, mangel på møteplasser for ungdom, forsøpling, manglende leksehjelp.',
          },
          {
            label: 'b',
            task: 'Beskriv en løsning: Hva er tjenesten/tilbudet? Hvem er det for? Hvordan skal det organiseres?',
            solution: 'Eleven beskriver en konkret løsning med målgruppe og gjennomføringsplan.',
          },
          {
            label: 'c',
            task: 'Vurder: Kan denne løsningen også tjene penger, eller må den finansieres av andre (f.eks. kommunen, sponsorer, frivillig arbeid)?',
            solution: 'Eleven vurderer realistiske finansieringskilder. Eksempel: «Leksehjelp-klubben kan drives frivillig av elever, med støtte fra skolen for lokaler og materiell. Eventuelt kan kommunen bidra med midler fra Frivillighetsregisteret.»',
          },
        ],
        hints: [
          'Tenk lokalt — du trenger ikke redde hele verden.',
          'De beste løsningene er ofte enkle.',
        ],
        solution: 'Sosialt entreprenørskap handler om å bruke kreativitet og initiativ til å gjøre verden litt bedre — uansett om det er i stor eller liten skala.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 27: Skatt og velferd
// LK20: Utforske og beskrive korleis den norske velferdsstaten fungerer
//        og er finansiert
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_27: TextbookChapter = {
  id: 'samfunnsfag-10-27',
  courseId: 'samfunnsfag-10',
  chapterNumber: '27',
  title: 'Skatt og velferd',
  description: 'Forstå sammenhengen mellom skatt og velferd, hvordan skattesystemet fungerer, og hvorfor vi betaler skatt i Norge.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og beskrive korleis den norske velferdsstaten er finansiert gjennom skatt',
    'drøfte korleis fordelinga av gode og byrder i samfunnet heng saman med politiske val',
    'reflektere over samanheng mellom personleg økonomi og samfunnsøkonomi',
  ],
  keyTerms: [
    { term: 'Skatt', definition: 'Penger innbyggerne og bedriftene betaler til staten, fylkeskommunen eller kommunen for å finansiere fellesgoder og velferdstjenester' },
    { term: 'Inntektsskatt', definition: 'Skatt beregnet som en prosentandel av inntekten din — jo mer du tjener, jo mer betaler du' },
    { term: 'Merverdiavgift (moms)', definition: 'En avgift på 25 % som legges på de fleste varer og tjenester du kjøper (mat har 15 %, kollektivtransport 12 %)' },
    { term: 'Progressiv skatt', definition: 'Et skattesystem der de som tjener mest, betaler en høyere prosentandel i skatt enn de som tjener minst' },
    { term: 'Brutto lønn', definition: 'Lønnen din før skatt trekkes fra — det arbeidsgiver betaler' },
    { term: 'Netto lønn', definition: 'Lønnen du faktisk får utbetalt etter at skatt er trukket fra' },
    { term: 'Skattekort', definition: 'Et elektronisk dokument som forteller arbeidsgiver hvor mye skatt som skal trekkes fra lønnen din' },
    { term: 'Skattemelding', definition: 'En årlig oversikt fra Skatteetaten som viser inntekter, fradrag og skatteberegning — du sjekker at alt er riktig' },
    { term: 'Velferdsstaten', definition: 'Et samfunnssystem der staten tar ansvar for innbyggernes grunnleggende behov som helse, utdanning, trygd og sosiale tjenester' },
    { term: 'Fellesgoder', definition: 'Tjenester og goder som er tilgjengelige for alle, finansiert gjennom skatt — som veier, skoler, sykehus og politi' },
    { term: 'Frikort', definition: 'Et skattekort for unge som tjener under frikortgrensen (ca. 70 000 kr/år i 2024) — da betaler du null i skatt' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-27-intro',
      type: 'text',
      content: `## Hva får du egentlig for skattepengene dine?

Se for deg en helt vanlig dag: Du våkner i et hus som er koblet til et offentlig vann- og avløpssystem. Du går på en skole som er gratis. Lærerne dine er betalt av fellesskapet. Hvis du blir syk, går du til legen og betaler nesten ingenting. Du kjører på en vei som noen har bygget og vedlikeholdt. Politiet passer på at du er trygg. Og hvis familien din en dag skulle slite økonomisk, finnes det et sikkerhetsnett som sørger for at dere ikke faller gjennom.

Alt dette koster penger. Og pengene kommer fra **skatt**.

Mange klager over skatten — «staten tar for mye av pengene mine!» Men sannheten er at skatten betaler for nesten alt det vi tar for gitt i hverdagen. I Norge betaler vi mer i skatt enn i mange andre land, men vi får også mer tilbake i form av gratis utdanning, gratis helsevesen, gode trygdeordninger og et trygt samfunn.

Spørsmålet er ikke om vi skal betale skatt — det er *hvor mye* og *hvordan* pengene skal brukes. Det er kjernen i norsk politikk.

I dette kapittelet skal du lære om:
- Hva skatt er og hvorfor vi betaler det
- Hvordan skattesystemet fungerer i praksis
- Hva skattepengene brukes til
- Sammenhengen mellom skatt og velferd
- Frikort og skatt for unge
- Politisk uenighet om skattenivå`,
    },

    // ========== DEFINISJON: SKATT ==========
    {
      id: 'samfunnsfag-10-27-def-1',
      type: 'definition',
      title: 'Skatt — fellesskapets spleiselag',
      content: `**Skatt** er penger som innbyggere og bedrifter betaler til det offentlige (stat, fylkeskommune og kommune). Skatteinntektene finansierer de tjenestene og godene som fellesskapet tilbyr.

**De viktigste skattetypene:**

**1. Inntektsskatt** (ca. 22 % av inntekten + trinnskatt for høye inntekter)
- Du betaler skatt av lønnen din
- Progressivt system: De som tjener mest, betaler mest
- Eksempel: En person som tjener 400 000 kr betaler ca. 25 % i snitt, mens en som tjener 1 000 000 kr betaler ca. 35 %

**2. Merverdiavgift (moms)**
- 25 % på de fleste varer og tjenester
- 15 % på matvarer
- 12 % på kultur, kino og kollektivtransport
- Eksempel: En mobil til 8 000 kr inkluderer 1 600 kr i moms (25 %)

**3. Arbeidsgiveravgift**
- Arbeidsgiver betaler 14,1 % av lønnen din i tillegg til det du ser på lønnslippen
- Finansierer blant annet folketrygden (sykepenger, pensjon)

**4. Særavgifter**
- Ekstra avgifter på spesielle varer: tobakk, alkohol, sukker, bensin
- Formål: Redusere skadelig forbruk og finansiere fellesgoder

**Skatt for unge:**
- **Frikort:** Hvis du er under 13 år eller tjener under frikortgrensen (ca. 70 000 kr/år i 2024), betaler du null i skatt
- Over frikortgrensen begynner du å betale skatt som alle andre
- Du søker om frikort via skatteetaten.no`,
    },

    // ========== EKSEMPEL: LIAMS LØNNSLIPP ==========
    {
      id: 'samfunnsfag-10-27-ex-liam',
      type: 'example',
      title: 'Liams lønnslipp — hvor ble pengene av?',
      problem: 'Liam (17) jobber deltid og tjener 8 500 kr brutto denne måneden. Han har vanlig skattekort (ikke frikort, fordi han tjener over 70 000 kr i året). Hva får han utbetalt?',
      solution: `**Liams lønnslipp:**
| Post | Beløp |
|------|-------|
| Brutto lønn | 8 500 kr |
| − Skatt (ca. 20 %) | − 1 700 kr |
| − Trygdeavgift (inkl. i skatten) | (inkludert) |
| **Netto utbetalt** | **6 800 kr** |

**Hva arbeidsgiver betaler i tillegg:**
| Post | Beløp |
|------|-------|
| Liams brutto lønn | 8 500 kr |
| + Arbeidsgiveravgift (14,1 %) | + 1 199 kr |
| + Feriepenger (12 % satt av) | + 1 020 kr |
| **Total kostnad for arbeidsgiver** | **10 719 kr** |

**Hvor ble skatten av?**
Liams 1 700 kr i skatt bidrar til:
- Ca. 510 kr → Helse og sykehus
- Ca. 340 kr → Utdanning (også Liams egen skolegang!)
- Ca. 238 kr → Trygd og pensjon
- Ca. 170 kr → Samferdsel (veier, tog, buss)
- Ca. 136 kr → Forsvar og politi
- Ca. 306 kr → Andre fellesgoder

**Liam «betaler» altså for læreren sin, veiene han sykler på, og sykehuset han kan bruke gratis.**`,
    },

    // ========== OPPGAVE 27.1 ==========
    {
      id: 'samfunnsfag-10-27-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-27-ex-1',
        number: '27.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «progressiv skatt»?',
        options: [
          {
            id: 'a',
            text: 'Alle betaler like mye i skatt uansett inntekt',
            isCorrect: false,
            feedback: 'Feil. Det er et flatt skattesystem. Progressiv skatt betyr at skatteprosenten øker med inntekten.',
          },
          {
            id: 'b',
            text: 'De som tjener mest, betaler en høyere prosentandel i skatt',
            isCorrect: true,
            feedback: 'Riktig! I et progressivt skattesystem øker skattesatsen med inntekten, slik at de med høy inntekt betaler en større andel enn de med lav inntekt.',
          },
          {
            id: 'c',
            text: 'De som tjener minst, betaler mest i skatt',
            isCorrect: false,
            feedback: 'Feil. Det ville vært et regressivt system. Progressiv skatt betyr det motsatte.',
          },
          {
            id: 'd',
            text: 'Skatten øker automatisk hvert år',
            isCorrect: false,
            feedback: 'Feil. «Progressiv» betyr at satsen øker med inntektsnivå, ikke at den øker over tid.',
          },
        ],
        solution: 'Progressiv skatt betyr at de som tjener mest, betaler en høyere prosentandel i skatt. Hensikten er at byrden fordeles rettferdig etter betalingsevne.',
      },
    },

    // ========== OPPGAVE 27.2 ==========
    {
      id: 'samfunnsfag-10-27-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-27-ex-2',
        number: '27.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregningsoppgave om skatt og lønn.',
        subTasks: [
          {
            label: 'a',
            task: 'Du tjener 120 000 kr i året fra deltidsjobben din. Frikortgrensen er 70 000 kr. Hvor mye av inntekten din er skattepliktig?',
            solution: '120 000 − 70 000 = 50 000 kr er skattepliktig inntekt.',
          },
          {
            label: 'b',
            task: 'Med en forenklet skattesats på 25 % på den skattepliktige delen: Omtrent hvor mye betaler du i skatt per år?',
            solution: '50 000 kr × 0,25 = 12 500 kr i skatt per år.',
          },
          {
            label: 'c',
            task: 'Hvor mye sitter du igjen med netto per måned? (Fordel årslønnen jevnt over 12 måneder.)',
            solution: 'Netto årslønn: 120 000 − 12 500 = 107 500 kr. Per måned: 107 500 / 12 ≈ 8 958 kr netto.',
          },
        ],
        hints: ['Husk at du bare betaler skatt av beløpet OVER frikortgrensen.'],
        solution: 'Frikortgrensen betyr at du slipper skatt på de første 70 000 kronene. Dette er en ordning som hjelper unge med lav inntekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: VELFERDSSTATEN ==========
    {
      id: 'samfunnsfag-10-27-def-2',
      type: 'definition',
      title: 'Velferdsstaten — hva får vi tilbake?',
      content: `**Velferdsstaten** er et samfunnssystem der staten tar ansvar for innbyggernes grunnleggende velferd. Norge er en av verdens mest omfattende velferdsstater.

**Hva skattepengene betaler for — Statsbudsjettet 2024 (ca. 1 860 milliarder kr):**

| Område | Ca. andel | Eksempler |
|--------|----------|-----------|
| Helse og omsorg | 30 % | Sykehus, legebesøk, eldreomsorg |
| Utdanning | 20 % | Barnehage, grunnskole, videregående, universitet |
| Trygd og pensjon | 20 % | Alderspensjon, sykepenger, arbeidsledighetstrygd |
| Samferdsel | 10 % | Veier, jernbane, buss, ferje |
| Forsvar og politi | 8 % | Forsvaret, politiet, rettsvesenet |
| Annet | 12 % | Kultur, bistand, forskning, miljø |

**Universelle velferdsordninger — gjelder ALLE:**
- **Gratis utdanning** fra barnehage til universitet
- **Gratis helsevesen** (med egenandeler som begrenses av frikortordningen)
- **Folketrygden:** Sykepenger (100 % lønn i opptil 1 år), fødselspermisjon (49 uker), alderspensjon, uføretrygd
- **Barnetrygd:** Ca. 1 766 kr/mnd per barn (2024)
- **Arbeidsledighetstrygd:** Ca. 62 % av lønn i opptil 2 år

**Sammenlignet med andre land:**
I USA koster et sykehusopphold gjennomsnittlig 2 600 dollar per natt. Mange amerikanere har ikke råd til helseforsikring. I Norge betaler du maks 3 040 kr i egenandeler per år (egenandelstak), og resten er gratis.

Et år med høyere utdanning koster gjennomsnittlig 30 000 dollar i USA. I Norge er det gratis.`,
    },

    // ========== EKSEMPEL: HVA KOSTER LIVET UTEN VELFERDSSTAT? ==========
    {
      id: 'samfunnsfag-10-27-ex-sammenligning',
      type: 'example',
      title: 'Hva ville livet kostet uten velferdsstaten?',
      problem: 'Familien Hansen har to voksne og to barn. La oss sammenligne hva de betaler i skatt versus hva de måtte betalt uten velferdsstat.',
      solution: `**Familien Hansens «regnestykke»:**

**Hva de betaler i skatt (begge foreldre jobber):**
Samlet bruttoinntekt: 1 100 000 kr
Samlet skatt (ca. 30 %): **330 000 kr per år**

**Hva de ville betalt UTEN velferdsstat:**
| Tjeneste | Uten velferdsstat | Med velferdsstat |
|----------|------------------|-----------------|
| Barnehage (2 barn) | 120 000 kr/år | 39 600 kr/år (maks) |
| Skole (2 barn) | 200 000 kr/år | 0 kr |
| Helseforsikring (4 pers.) | 100 000 kr/år | 0 kr (via skatt) |
| Sykehusinnleggelse (1 gang) | 50 000 kr | 0 kr (egenandelstak) |
| Veier (bompenger, privat) | 30 000 kr/år | Delvis via skatt |
| Politi/brannvesen | 15 000 kr/år | 0 kr |
| **Sum uten velferdsstat** | **515 000 kr/år** | |
| **Sum med velferdsstat (skatt)** | | **330 000 kr/år** |

**Konklusjon:** Familien Hansen betaler 330 000 kr i skatt, men ville betalt over 515 000 kr for tilsvarende tjenester selv. Velferdsstaten er faktisk god butikk for de fleste familier.

**I tillegg** har familien Hansen:
- Opptil 1 år med full lønn ved sykdom
- 49 uker fødselspermisjon
- Pensjon fra fylte 67 år
- Arbeidsledighetstrygd om de mister jobben`,
    },

    // ========== OPPGAVE 27.3 ==========
    {
      id: 'samfunnsfag-10-27-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-27-ex-3',
        number: '27.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse er IKKE en universell velferdsordning i Norge?',
        options: [
          {
            id: 'a',
            text: 'Gratis grunnskole',
            isCorrect: false,
            feedback: 'Feil. Grunnskole er gratis for alle i Norge og er en universell ordning.',
          },
          {
            id: 'b',
            text: 'Barnetrygd til alle familier med barn',
            isCorrect: false,
            feedback: 'Feil. Barnetrygd er en universell ordning som gis til alle familier med barn under 18 år.',
          },
          {
            id: 'c',
            text: 'Gratis tannlege for alle voksne over 20 år',
            isCorrect: true,
            feedback: 'Riktig! Tannlege er gratis for barn og unge opp til 18 år (og redusert pris til 20 år), men voksne over 20 må betale for tannlege selv. Dette er et unntak fra det ellers gratis helsevesenet.',
          },
          {
            id: 'd',
            text: 'Sykepenger ved sykdom',
            isCorrect: false,
            feedback: 'Feil. Sykepenger er en universell rettighet for alle arbeidstakere gjennom folketrygden.',
          },
        ],
        solution: 'I Norge er tannhelsetjenester for voksne over 20 år ikke dekket av det offentlige helsevesenet — et unntak mange mener bør endres.',
      },
    },

    // ========== TEKST: POLITISK UENIGHET OM SKATT ==========
    {
      id: 'samfunnsfag-10-27-politikk',
      type: 'text',
      content: `## Mer eller mindre skatt? — politisk uenighet

Skatt er et av de mest debatterte temaene i norsk politikk. De politiske partiene er uenige om både skattenivået og hvordan skattepengene skal brukes.

### Venstresiden (Arbeiderpartiet, SV, Rødt)
- Vil ha **mer omfordeling** — høyere skatt for de rikeste
- Vil bevare og styrke velferdsstaten
- Argumenterer for at ulikhet er skadelig for samfunnet
- Vil ha sterke offentlige tjenester (skole, helse, eldreomsorg)

### Høyresiden (Høyre, Fremskrittspartiet, Venstre)
- Vil ha **lavere skatt** — spesielt for bedrifter og de med høy inntekt
- Argumenterer for at lavere skatt gir mer innovasjon og vekst
- Vil at folk skal beholde mer av sin egen inntekt
- Noen ønsker å privatisere deler av offentlige tjenester

### Sentrumspartiene (Senterpartiet, KrF)
- Kompromiss — moderat skattenivå
- Fokus på distriktspolitikk og små bedrifter
- Vil bevare velferdsstaten, men med lokalt selvstyre

### Utfordringer for velferdsstaten fremover:
- **Eldrebølgen:** Flere eldre = høyere pensjonsutgifter og behov for eldreomsorg
- **Mindre oljeinntekter:** Oljefondet kan ikke vokse evig
- **Arbeidsledighet:** Automatisering kan fjerne arbeidsplasser og redusere skatteinntekter
- **Globalisering:** Bedrifter kan flytte til land med lavere skatt

Disse utfordringene betyr at fremtidens politikere må ta vanskelige valg: Enten øke skattene, kutte i velferd, eller finne nye inntektskilder.`,
    },

    // ========== OPPGAVE 27.4 ==========
    {
      id: 'samfunnsfag-10-27-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-27-ex-4',
        number: '27.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Refleksjon om skatt og rettferdighet.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre ting du bruker daglig eller ukentlig som er finansiert av skatt.',
            solution: 'Eksempler: Skolen, veiene, politiet, biblioteket, legevakten, bussen/toget, gatebelysning, renovasjon (søppelhenting), brannvesenet.',
          },
          {
            label: 'b',
            task: 'Noen mener at de som tjener mest bør betale mer i skatt (progressiv skatt), andre mener alle bør betale lik prosent (flat skatt). Hva mener du er mest rettferdig? Begrunn svaret.',
            solution: 'Svaret er individuelt, men bør være begrunnet. For progressiv: de rike har mer å gi, og ulikhet skader samfunnet. For flat: alle bør behandles likt, og progressiv skatt kan straffe hardt arbeid. Eleven bør vise forståelse for begge sider.',
          },
        ],
        hints: ['Tenk på hva «rettferdighet» betyr for deg — er det lik behandling eller lik byrde?'],
        solution: 'Spørsmålet om rettferdig skatt har ikke ett korrekt svar — det handler om verdier og prioriteringer. Det viktige er at du kan begrunne standpunktet ditt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 27.5 ==========
    {
      id: 'samfunnsfag-10-27-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-27-ex-5',
        number: '27.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mye moms betaler du når du kjøper en jakke til 1 000 kr i en butikk (vanlig momssats)?',
        options: [
          {
            id: 'a',
            text: '150 kr (15 %)',
            isCorrect: false,
            feedback: 'Feil. 15 % moms gjelder for matvarer. Klær har vanlig momssats på 25 %.',
          },
          {
            id: 'b',
            text: '200 kr (20 %)',
            isCorrect: false,
            feedback: 'Nesten, men den vanlige momssatsen i Norge er 25 %, ikke 20 %.',
          },
          {
            id: 'c',
            text: '250 kr (25 %)',
            isCorrect: false,
            feedback: 'Feil beregning. Prisen på 1 000 kr inkluderer ALLEREDE momsen. Moms er ikke noe du betaler i tillegg. Momsen som er inkludert i prisen er 1 000 × 25/125 = 200 kr.',
          },
          {
            id: 'd',
            text: '200 kr — momsen er allerede inkludert i butikkprisen',
            isCorrect: true,
            feedback: 'Riktig! Butikkpriser i Norge inkluderer moms. Av 1 000 kr er 200 kr moms (beregnet som 1 000 × 25/125 = 200 kr, fordi 25 % legges på prisen uten moms: 800 + 200 = 1 000).',
          },
        ],
        solution: 'I Norge er momsen allerede inkludert i prisen du ser i butikken. Av en jakke til 1 000 kr er 200 kr moms (25 % av 800 kr eksklusive moms).',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-27-oppsummering',
      type: 'text',
      content: `## Oppsummering: Skatt og velferd

Skatt og velferd henger uløselig sammen — uten skatt, ingen velferdsstat.

**Nøkkelpunkter:**
- **Skatt** finansierer fellesgoder: skole, helse, veier, politi, trygd og pensjon
- Norge har **progressiv skatt** — de som tjener mest, betaler mest
- **Merverdiavgift** (moms) er 25 % på de fleste varer, 15 % på mat
- **Frikort** betyr null skatt for unge under frikortgrensen (ca. 70 000 kr/år)
- **Velferdsstaten** gir alle tilgang til grunnleggende tjenester uavhengig av inntekt
- Universelle ordninger: gratis utdanning, gratis helsevesen, sykepenger, fødselspermisjon, barnetrygd
- Det er **politisk uenighet** om skattenivå og velferdsomfang
- Velferdsstaten står overfor utfordringer: eldrebølge, mindre oljeinntekter, automatisering

Tenk på det slik: Skatt er fellesskapets spleiselag. Du betaler inn, og du får tilbake — ofte mye mer enn du betaler.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-27-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-27-ex-6',
        number: '27.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Den norske velferdsstaten er for sjenerøs — folk bør ta mer ansvar for seg selv.» Er du enig eller uenig? Begrunn svaret.',
        hints: [
          'Tenk på hva som ville skjedd med de svakeste i samfunnet uten velferdsstat.',
          'Vurder argumenter om personlig ansvar og motivasjon.',
          'Sammenlign med land som har mindre velferdsstat (f.eks. USA).',
        ],
        solution: 'En god drøfting vurderer argumenter for (avhengighetskultur, manglende motivasjon til å jobbe, høye skatter bremser vekst) og mot (beskytter svake grupper, skaper trygghet som fremmer risiko og innovasjon, reduserer fattigdom og ulikhet, gratis utdanning gir sosial mobilitet). Svaret bør vise nyanse og ha en begrunnet konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-27-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-27-ex-7',
        number: '27.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektoppgave: Sammenlign velferdsstaten i Norge med et annet land.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et land (f.eks. USA, Sverige, Storbritannia eller Japan). Undersøk: Hvor mye skatt betaler innbyggerne? Hva får de tilbake i form av velferd?',
            solution: 'Eleven velger et land og finner konkrete tall. Eksempel USA: Gjennomsnittlig skattesats ca. 25 %, men ingen gratis helsevesen (63 millioner uten forsikring i 2022), høye studieavgifter, kortere fødselspermisjon.',
          },
          {
            label: 'b',
            task: 'Sammenlign med Norge: Hva er fordelene og ulempene med det norske systemet versus det andre landets system?',
            solution: 'Eleven sammenligner konkret. Eksempel: Norge har høyere skatt men gratis utdanning og helsevesen, lavere ulikhet, men også høyere priser og potensielt lavere lønninger for høyt utdannede.',
          },
          {
            label: 'c',
            task: 'Hva ville DU foretrekke? Norges system eller det andre landets? Begrunn svaret.',
            solution: 'Individuelt svar som viser evne til å reflektere over verdivalg, rettferdighet og samfunnsorganisering.',
          },
        ],
        hints: ['Bruk nettsider som SSB, OECD eller Wikipedia for å finne tall.'],
        solution: 'Internasjonal sammenligning gir perspektiv på hva som gjør den norske velferdsstaten unik — og hvilke utfordringer den deler med andre land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 28: Den norske modellen
// LK20: Utforske og drøfte korleis det norske samfunnet er organisert
//        og kva som kjenneteiknar den norske modellen
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_28: TextbookChapter = {
  id: 'samfunnsfag-10-28',
  courseId: 'samfunnsfag-10',
  chapterNumber: '28',
  title: 'Den norske modellen',
  description: 'Forstå hva den norske modellen er, hvordan trepartssamarbeidet fungerer, og hvorfor Norge regnes som et av verdens beste land å bo i.',
  estimatedMinutes: 80,
  competenceGoals: [
    'utforske og drøfte korleis det norske samfunnet er organisert og kva som kjenneteiknar den norske modellen',
    'reflektere over samanhengen mellom arbeidsliv, velferdsstat og demokrati',
    'drøfte korleis den norske modellen kan møte framtidige utfordringar',
  ],
  keyTerms: [
    { term: 'Den norske modellen', definition: 'Samlebetegnelse for det tette samarbeidet mellom staten, arbeidsgiverne og arbeidstakerne som preger det norske samfunnet' },
    { term: 'Trepartssamarbeid', definition: 'Samarbeidet mellom tre parter: staten (regjeringen), arbeidsgiverne (NHO m.fl.) og arbeidstakerne (LO m.fl.) om lønn, arbeidsvilkår og samfunnsutvikling' },
    { term: 'Frontfagsmodellen', definition: 'Et system der konkurranseutsatt industri (eksportbedrifter) forhandler om lønn først, og setter rammen for andre bransjer' },
    { term: 'Universell velferdsstat', definition: 'En velferdsstat der ytelsene gjelder alle innbyggere, ikke bare de som trenger det mest' },
    { term: 'Egalitært samfunn', definition: 'Et samfunn preget av likhet og små forskjeller mellom fattig og rik' },
    { term: 'Gini-koeffisient', definition: 'Et mål på ulikhet i et samfunn, fra 0 (perfekt likhet) til 1 (maksimal ulikhet) — Norge har ca. 0,27, blant de laveste i verden' },
    { term: 'Oljefondet', definition: 'Statens pensjonsfond utland — verdens største statlige investeringsfond, verdt over 17 000 milliarder kr (2024)' },
    { term: 'Handlingsregelen', definition: 'Regelen som sier at staten skal bruke maks 3 % av Oljefondets verdi per år, slik at fondet varer i generasjoner' },
    { term: 'Sosial mobilitet', definition: 'Muligheten til å forbedre sin sosiale og økonomiske posisjon uavhengig av hvilken familie du er født inn i' },
    { term: 'Tillitssamfunnet', definition: 'Et samfunn preget av høy tillit mellom mennesker og mellom befolkningen og myndighetene' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-28-intro',
      type: 'text',
      content: `## Hvorfor er Norge et av verdens beste land å bo i?

Hvert år publiserer FN sin «Human Development Index» — en rangering av verdens land basert på levealder, utdanning og levestandard. Norge har ligget på toppen av denne listen nesten hvert eneste år siden 2001. Vi scorer også høyt på lykke, frihet, tillit og likestilling.

Men hvorfor? Norge er et lite land langt mot nord med bare 5,5 millioner innbyggere. Oljen forklarer noe — men det er langt ifra hele svaret. Saudi-Arabia har enda mer olje, men scorer mye lavere på livskvalitet. Sveits har ingen olje, men scorer nesten like høyt som Norge.

Svaret ligger i **den norske modellen** — en unik måte å organisere samfunnet på som kombinerer:
- Et **sterkt demokrati** med høy deltakelse
- **Trepartssamarbeid** mellom stat, arbeidsgivere og arbeidstakere
- En **sjenerøs velferdsstat** finansiert av skatt
- Et **egalitært samfunn** med relativt små forskjeller
- **Høy tillit** mellom mennesker og mellom folk og myndigheter

Denne modellen har ikke oppstått tilfeldig. Den er bygget opp gjennom over 100 år med politiske kompromisser, fagforeningskamp, sosiale reformer og kloke beslutninger (som Oljefondet). Og den er ikke perfekt — den møter stadig nye utfordringer.

I dette kapittelet skal du lære om:
- Hva den norske modellen er
- Trepartssamarbeidet og frontfagsmodellen
- Oljefondet og handlingsregelen
- Likhet, tillit og sosial mobilitet
- Utfordringer modellen står overfor`,
    },

    // ========== DEFINISJON: DEN NORSKE MODELLEN ==========
    {
      id: 'samfunnsfag-10-28-def-1',
      type: 'definition',
      title: 'Den norske modellen — tre pilarer',
      content: `**Den norske modellen** (også kalt den nordiske modellen) er et samlebegrep for den spesielle måten det norske samfunnet er organisert på. Den hviler på tre pilarer:

**Pilar 1: Trepartssamarbeid**
Staten, arbeidsgiverne og arbeidstakerne samarbeider tett om lønn, arbeidsvilkår og økonomisk politikk. I stedet for at hver part kjemper for seg, forhandler de seg frem til løsninger som alle kan leve med.

- **Staten** representerer fellesskapet og setter lover og rammer
- **Arbeidsgiversiden** (NHO, KS m.fl.) representerer bedriftene
- **Arbeidstakersiden** (LO, Unio, YS m.fl.) representerer de ansatte

**Pilar 2: Universell velferdsstat**
Alle innbyggere har rett på grunnleggende velferdstjenester — uavhengig av inntekt, bakgrunn eller sosial status. Gratis utdanning, gratis helsevesen, sykepenger, fødselspermisjon, barnetrygd og pensjon.

**Pilar 3: Et organisert arbeidsliv**
Høy organisasjonsgrad (ca. 50 %), kollektive forhandlinger og lovregulert arbeidsliv med sterke rettigheter for arbeidstakere.

**Resultatet:**
- Lav ulikhet (Gini-koeffisient ca. 0,27 — blant verdens laveste)
- Høy produktivitet (norske arbeidere er blant verdens mest produktive)
- Lav arbeidsledighet (ca. 3,5 %)
- Høy tillit (8 av 10 nordmenn stoler på medmennesker)
- Høy levestandard og livskvalitet

**Paradokset:** Norge har høye lønninger og høy skatt, men likevel er norske bedrifter konkurransedyktige internasjonalt. Grunnen er at godt lønnede arbeidere er mer motiverte, mer produktive og mer innovative.`,
    },

    // ========== EKSEMPEL: TREPARTSSAMARBEID I PRAKSIS ==========
    {
      id: 'samfunnsfag-10-28-ex-trepart',
      type: 'example',
      title: 'Trepartssamarbeid i praksis — lønnsdannelsen',
      problem: 'Hvert år forhandler partene i arbeidslivet om lønn. Hvordan foregår dette, og hvorfor kalles det «frontfagsmodellen»?',
      solution: `**Frontfagsmodellen steg for steg:**

**Steg 1: Frontfaget forhandler først**
Norsk Industri (NHO) og Fellesforbundet (LO) — som representerer eksportindustrien — forhandler først om lønn. De setter en **ramme** for lønnsveksten.

**Hvorfor industrien først?** Fordi eksportbedriftene konkurrerer internasjonalt. Hvis lønningene i Norge vokser for raskt, blir norske produkter for dyre, bedriftene taper kunder, og arbeidsplasser forsvinner.

**Steg 2: Andre bransjer følger rammen**
Etter at industrien har satt rammen (f.eks. 5,2 % lønnsvekst), forhandler andre sektorer innenfor samme ramme:
- Kommuneansatte (lærere, sykepleiere)
- Statsansatte (politi, NAV-ansatte)
- Private serviceyrker (handel, transport)

**Steg 3: Staten bidrar**
Staten kan påvirke gjennom:
- Skattelettelser eller -økning
- Tiltak for å holde inflasjonen lav
- Tvungen lønnsnemnd ved fare for liv og helse

**Eksempel 2024:**
| Sektor | Forhandlet lønnsvekst |
|--------|----------------------|
| Industri (frontfag) | 5,2 % |
| Kommuneansatte | 5,2 % |
| Statsansatte | 5,2 % |
| Handels- og service | 5,2 % |

**Fordelen:** Alle får omtrent lik lønnsvekst, noe som holder ulikheten lav og sikrer at norsk økonomi forblir konkurransedyktig.`,
    },

    // ========== OPPGAVE 28.1 ==========
    {
      id: 'samfunnsfag-10-28-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-28-ex-1',
        number: '28.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med «trepartssamarbeid»?',
        options: [
          {
            id: 'a',
            text: 'Samarbeid mellom tre politiske partier (Ap, Høyre og Sp)',
            isCorrect: false,
            feedback: 'Feil. Trepartssamarbeid handler ikke om politiske partier, men om aktørene i arbeidslivet.',
          },
          {
            id: 'b',
            text: 'Samarbeid mellom staten, arbeidsgiverne og arbeidstakerne',
            isCorrect: true,
            feedback: 'Riktig! De tre partene er staten (regjeringen), arbeidsgiversiden (NHO, KS m.fl.) og arbeidstakersiden (LO, Unio, YS m.fl.).',
          },
          {
            id: 'c',
            text: 'Samarbeid mellom Stortinget, regjeringen og Høyesterett',
            isCorrect: false,
            feedback: 'Feil. Det er de tre statsmaktene (maktfordelingen), ikke trepartssamarbeidet.',
          },
          {
            id: 'd',
            text: 'Samarbeid mellom Norge, Sverige og Danmark',
            isCorrect: false,
            feedback: 'Feil. Trepartssamarbeid er et nasjonalt samarbeid mellom arbeidslivets parter i Norge.',
          },
        ],
        solution: 'Trepartssamarbeidet er samarbeidet mellom staten, arbeidsgiverne (NHO, KS) og arbeidstakerne (LO, Unio, YS) om lønn, arbeidsvilkår og samfunnsutvikling.',
      },
    },

    // ========== DEFINISJON: OLJEFONDET ==========
    {
      id: 'samfunnsfag-10-28-def-2',
      type: 'definition',
      title: 'Oljefondet og handlingsregelen',
      content: `**Statens pensjonsfond utland** (Oljefondet) er verdens største statlige investeringsfond. Per 2024 er det verdt over **17 000 milliarder kroner** — det tilsvarer ca. 3,1 millioner kroner per nordmann.

**Historien:**
- 1969: Olje oppdages i Nordsjøen (Ekofisk-feltet)
- 1990: Oljefondet opprettes for å spare oljeinntektene til fremtidige generasjoner
- 1996: Første innskudd — 1,98 milliarder kr
- 2024: Fondet har vokst til over 17 000 milliarder kr

**Hva fondet investerer i:**
- Aksjer i 9 200 selskaper i 70 land (ca. 70 % av fondet)
- Obligasjoner (statslån og bedriftslån) (ca. 27 %)
- Eiendom (kontorbygg, handelssentre verden over) (ca. 3 %)

**Fondet eier ca. 1,5 % av alle børsnoterte aksjer i verden!**

**Handlingsregelen:**
Staten skal bruke **maks 3 %** av Oljefondets verdi per år over statsbudsjettet. Hensikten er:
- At fondet varer i generasjoner, ikke bare i vår levetid
- At vi ikke overoppheter økonomien med for mye pengebruk
- At vi bygger opp verdier for fremtidige generasjoner

**I praksis (2024):**
3 % av 17 000 milliarder = ca. **510 milliarder kr** — dette er beløpet staten kan bruke fra fondet i tillegg til vanlige skatteinntekter.

**Etisk forvaltning:**
Fondet har etiske retningslinjer og investerer ikke i:
- Selskaper som produserer visse typer våpen
- Selskaper med alvorlig miljøskade
- Selskaper med grove menneskerettighetsbrudd`,
    },

    // ========== OPPGAVE 28.2 ==========
    {
      id: 'samfunnsfag-10-28-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-28-ex-2',
        number: '28.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregning og refleksjon om Oljefondet.',
        subTasks: [
          {
            label: 'a',
            task: 'Oljefondet er verdt ca. 17 000 milliarder kr, og Norge har 5,5 millioner innbyggere. Omtrent hvor mye er din «andel» av fondet verdt?',
            solution: '17 000 000 000 000 / 5 500 000 ≈ 3 090 000 kr. Din «andel» av Oljefondet er verdt ca. 3,1 millioner kroner.',
          },
          {
            label: 'b',
            task: 'Handlingsregelen sier at staten kan bruke maks 3 % av fondet per år. Forklar med egne ord hvorfor det er lurt å ikke bruke alt med en gang.',
            solution: 'Hvis vi bruker alt nå, har fremtidige generasjoner ingenting. Dessuten ville for mye pengebruk skape inflasjon (prisene ville steget kraftig fordi det ville vært for mye penger i omløp). Ved å bruke bare 3 % vokser fondet fortsatt, og vi kan bruke det i mange generasjoner fremover.',
          },
          {
            label: 'c',
            task: 'Bør fondet investere i selskaper som driver med fossil energi (olje, gass, kull)? Nevn argumenter for og mot.',
            solution: 'For: Fossil energi gir god avkastning, vi er selv en oljeprodusent. Mot: Klimaendringer er en global trussel, fondet bør støtte grønn omstilling, fossile selskaper kan bli mindre lønnsomme i fremtiden. Eleven bør vise forståelse for begge sider.',
          },
        ],
        hints: ['Del det store tallet på antall innbyggere for å finne «din» andel.'],
        solution: 'Oljefondet er et unikt fortrinn for Norge, men krever klok forvaltning for å vare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: LIKHET, TILLIT OG SOSIAL MOBILITET ==========
    {
      id: 'samfunnsfag-10-28-likhet',
      type: 'text',
      content: `## Likhet, tillit og muligheter for alle

Tre kjennetegn gjør den norske modellen spesiell sammenlignet med de fleste andre land:

### 1. Lav ulikhet
Norge har en av verdens laveste Gini-koeffisienter (ca. 0,27). Til sammenligning:
- Sverige: 0,28
- USA: 0,39
- Brasil: 0,49
- Sør-Afrika: 0,63

**Hva betyr dette i praksis?** Forskjellen mellom den rikeste og fattigste i Norge er mye mindre enn i de fleste andre land. En norsk lege tjener kanskje 3–4 ganger så mye som en butikkmedarbeider. I USA kan forskjellen være 10–20 ganger.

### 2. Høy tillit
Norge er et **tillitssamfunn**. 7 av 10 nordmenn sier at de stoler på folk de ikke kjenner. I mange andre land er dette tallet under 3 av 10.

**Konsekvenser av høy tillit:**
- Lavere transaksjonskostnader (vi trenger færre kontrakter og advokater)
- Mer effektivt næringsliv (enklere å gjøre avtaler)
- Lavere kriminalitet
- Bedre folkehelse
- Sterkere demokrati

### 3. Sosial mobilitet
**Sosial mobilitet** betyr at du kan forbedre din posisjon i samfunnet uavhengig av hvilken familie du er født inn i. Norge har høy sosial mobilitet:
- Gratis utdanning betyr at alle kan ta høyere utdanning
- Lånekassen sikrer at økonomi ikke stopper deg
- Helsevesenet sikrer at sykdom ikke ødelegger familieøkonomien
- Arbeidsmarkedet verdsetter kompetanse mer enn bakgrunn

**Likevel:** Forskning viser at sosial bakgrunn fortsatt påvirker livssjanser i Norge. Barn av foreldre med høy utdanning har statistisk sett større sjanse for selv å ta høy utdanning. Modellen er god, men ikke perfekt.`,
    },

    // ========== OPPGAVE 28.3 ==========
    {
      id: 'samfunnsfag-10-28-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-28-ex-3',
        number: '28.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva måler Gini-koeffisienten?',
        options: [
          {
            id: 'a',
            text: 'Hvor mye et land tjener totalt',
            isCorrect: false,
            feedback: 'Feil. Det er BNP (bruttonasjonalprodukt). Gini-koeffisienten måler fordelingen, ikke størrelsen.',
          },
          {
            id: 'b',
            text: 'Hvor stor forskjell det er mellom fattig og rik i et samfunn',
            isCorrect: true,
            feedback: 'Riktig! Gini-koeffisienten måler ulikhet i et samfunn. 0 = perfekt likhet, 1 = maksimal ulikhet. Norges 0,27 betyr relativt lav ulikhet.',
          },
          {
            id: 'c',
            text: 'Hvor mange som er arbeidsledige',
            isCorrect: false,
            feedback: 'Feil. Arbeidsledighet måles i prosent av arbeidsstyrken, ikke med Gini-koeffisienten.',
          },
          {
            id: 'd',
            text: 'Hvor lykkelige innbyggerne er',
            isCorrect: false,
            feedback: 'Feil. Lykke måles av FNs World Happiness Report. Gini-koeffisienten handler spesifikt om økonomisk ulikhet.',
          },
        ],
        solution: 'Gini-koeffisienten er et mål på økonomisk ulikhet. Norge har ca. 0,27, som betyr relativt lav ulikhet sammenlignet med de fleste andre land.',
      },
    },

    // ========== DEFINISJON: UTFORDRINGER ==========
    {
      id: 'samfunnsfag-10-28-def-3',
      type: 'definition',
      title: 'Utfordringer for den norske modellen',
      content: `Den norske modellen er ikke statisk — den møter stadig nye utfordringer som krever tilpasning.

**Eldrebølgen:**
Andelen eldre over 67 år øker kraftig. I 2025 er ca. 16 % av befolkningen over 67 år. I 2060 vil det være ca. 22 %. Det betyr:
- Flere pensjonister → høyere pensjonsutgifter
- Flere eldre → større behov for helse- og omsorgstjenester
- Færre yrkesaktive per pensjonist → mindre skatteinntekter per person som trenger støtte

**Oljeavhengighet:**
Norge er fortsatt avhengig av olje- og gassinntekter. Verden beveger seg mot fornybar energi, og etterspørselen etter fossil energi vil trolig falle. Norge må omstille seg til andre inntektskilder.

**Økende ulikhet:**
Selv om Norge har lav ulikhet, har forskjellene økt de siste 20 årene. De rikeste 10 % eier en stadig større andel av verdiene. Barnefattigdom har økt fra 5 % til over 11 % på to tiår.

**Globalisering og migrasjon:**
Arbeidsinnvandring skaper muligheter (bedriftene får arbeidskraft), men kan også presse lønningene ned i enkelte bransjer og utfordre integreringen.

**Synkende organisasjonsgrad:**
Andelen fagforeningsmedlemmer synker sakte, spesielt blant unge og i privat sektor. Hvis trenden fortsetter, kan det svekke trepartssamarbeidet.

**Teknologi og automatisering:**
KI og roboter kan erstatte mange jobber. Uten nye arbeidsplasser faller skatteinntektene, og velferdsstaten får finansieringsproblemer.

**Prinsipielle motforestillinger:**
Kritikere av den norske modellen peker på at høyt skattenivå kan svekke insentiver til innovasjon og entreprenørskap, at en stor offentlig sektor kan begrense individuell valgfrihet, og at generøse velferdsordninger kan skape avhengighet fremfor selvstendighet. Tilhengere svarer at modellen har levert både høy produktivitet og lav ulikhet, og at velferdsstaten fungerer som et sikkerhetsnett som faktisk fremmer risikotaking.`,
    },

    // ========== OPPGAVE 28.4 ==========
    {
      id: 'samfunnsfag-10-28-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-28-ex-4',
        number: '28.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utfordringer for den norske modellen.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar med egne ord hva «eldrebølgen» er, og hvorfor den er en utfordring for velferdsstaten.',
            solution: 'Eldrebølgen betyr at andelen eldre i befolkningen øker kraftig. Det er en utfordring fordi flere pensjonister betyr høyere utgifter til pensjon og helseomsorg, samtidig som færre yrkesaktive betaler skatt. Det blir med andre ord flere som mottar og færre som betaler.',
          },
          {
            label: 'b',
            task: 'Hva kan Norge gjøre for å forberede seg på at oljen en dag tar slutt? Nevn minst to tiltak.',
            solution: 'Tiltak: 1) Investere i nye næringer (teknologi, havbruk, fornybar energi, reiseliv). 2) Satse på utdanning og forskning for å utvikle ny kompetanse. 3) Fortsette å spare i Oljefondet. 4) Utvikle grønn teknologi vi kan eksportere. 5) Styrke gründerkultur og innovasjon.',
          },
          {
            label: 'c',
            task: 'Hva tror du er den største utfordringen for den norske modellen i din levetid? Begrunn svaret.',
            solution: 'Individuelt svar, men bør vise forståelse for de strukturelle utfordringene. Gode svar trekker inn kombinasjonen av eldrebølge, teknologisk endring og mulig oljeavhengighet, og reflekterer over hva dette betyr for egen fremtid.',
          },
        ],
        hints: ['Tenk langsiktig — hva skjer med velferdsstaten om 20–30 år?'],
        solution: 'Den norske modellen er robust, men ikke uforanderlig. Den må tilpasses nye utfordringer for å overleve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 28.5 ==========
    {
      id: 'samfunnsfag-10-28-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-28-ex-5',
        number: '28.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier handlingsregelen?',
        options: [
          {
            id: 'a',
            text: 'At staten kan bruke alle oljepengene hvert år',
            isCorrect: false,
            feedback: 'Feil. Hele poenget med handlingsregelen er å BEGRENSE bruken av oljepenger.',
          },
          {
            id: 'b',
            text: 'At staten kan bruke maks 3 % av Oljefondets verdi per år',
            isCorrect: true,
            feedback: 'Riktig! Handlingsregelen sikrer at Oljefondet varer i generasjoner ved å begrense den årlige bruken til ca. 3 % av fondets verdi.',
          },
          {
            id: 'c',
            text: 'At alle nordmenn får utbetalt en andel av oljepengene hvert år',
            isCorrect: false,
            feedback: 'Feil. Oljepengene brukes over statsbudsjettet til fellesgoder, ikke som direkte utbetaling til hver enkelt.',
          },
          {
            id: 'd',
            text: 'At Norge må slutte med oljeutvinning innen 2030',
            isCorrect: false,
            feedback: 'Feil. Handlingsregelen handler om pengebruk fra fondet, ikke om oljeproduksjon.',
          },
        ],
        solution: 'Handlingsregelen sier at staten skal bruke maks 3 % av Oljefondets verdi over statsbudsjettet per år, slik at pengene varer i generasjoner.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-28-oppsummering',
      type: 'text',
      content: `## Oppsummering: Den norske modellen

Den norske modellen er en unik samfunnsorganisering som gjør Norge til et av verdens beste land å leve i.

**Nøkkelpunkter:**
- **Den norske modellen** hviler på tre pilarer: trepartssamarbeid, universell velferdsstat og organisert arbeidsliv
- **Trepartssamarbeidet** mellom stat, arbeidsgivere og arbeidstakere sikrer samarbeid fremfor konflikt
- **Frontfagsmodellen** holder lønnsveksten ansvarlig og bevarer konkurranseevnen
- **Oljefondet** (over 17 000 milliarder kr) er en unik økonomisk buffer for fremtiden
- **Handlingsregelen** (maks 3 % per år) sørger for at fondet varer i generasjoner
- Norge har **lav ulikhet** (Gini 0,27), **høy tillit** og **høy sosial mobilitet**
- Modellen møter utfordringer: eldrebølge, oljeavhengighet, økende ulikhet, synkende organisasjonsgrad
- **Modellen er ikke gitt** — den krever aktiv innsats og vilje til tilpasning

Den norske modellen er ikke bare noe du bor i — den er noe du er med på å forme gjennom dine valg, din deltakelse og din stemme.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-28-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-28-ex-6',
        number: '28.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Den norske modellen fungerer bare fordi vi har olje. Den vil bryte sammen når oljen tar slutt.» Er du enig eller uenig? Begrunn svaret.',
        hints: [
          'Tenk på de nordiske landene uten olje (Sverige, Danmark, Finland) — fungerer deres modell?',
          'Hva består modellen av, utover oljepenger?',
          'Hvilken rolle spiller trepartssamarbeid, tillit og utdanning?',
        ],
        solution: 'En god drøfting peker på at oljen er viktig, men at modellen bygger på mye mer: trepartssamarbeid, universell velferdsstat, høy tillit og utdanning. Sverige, Danmark og Finland har lignende modeller uten olje. Oljefondet gir en buffer, men modellens fundament er politiske valg og institusjoner, ikke bare penger. Svaret bør ha en nyansert, begrunnet konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-28-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-28-ex-7',
        number: '28.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Stor drøftingsoppgave: Koble alle temaer fra del 6 sammen.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar sammenhengen mellom personlig økonomi (budsjett, sparing) og den norske modellen. Hvordan påvirker det ene det andre?',
            solution: 'God personlig økonomi bidrar til at færre trenger sosialhjelp og trygd, noe som styrker velferdsstaten. Samtidig gir velferdsstaten et sikkerhetsnett som gjør at folk tør å ta risiko (starte bedrift, ta utdanning). Gratis utdanning gir alle mulighet til å forbedre sin økonomiske situasjon.',
          },
          {
            label: 'b',
            task: 'Hvordan henger arbeidsliv, fagforeninger, skatt og velferd sammen? Forklar med en konkret kjede av sammenhenger.',
            solution: 'Kjede: Fagforeninger forhandler frem gode lønninger → Høye lønninger gir mye skatteinntekter → Skatteinntekter finansierer velferdsstaten → Velferdsstaten gir gratis utdanning og helse → Utdannet arbeidskraft er produktiv → Produktivitet gir lønnsomme bedrifter → Bedriftene kan betale gode lønninger. Sirkelen starter på nytt.',
          },
          {
            label: 'c',
            task: 'Hvis du var statsminister, hva ville du prioritert for å sikre den norske modellen for din generasjon? Nevn tre konkrete tiltak og begrunn dem.',
            solution: 'Individuelt, men gode svar viser systemforståelse: f.eks. 1) Satsing på utdanning og omstilling for å møte KI-revolusjonen. 2) Tiltak mot barnefattigdom for å bevare sosial mobilitet. 3) Investering i grønn teknologi for å erstatte oljeinntekter. Begrunnelser bør knyttes til utfordringene modellen står overfor.',
          },
        ],
        hints: [
          'Tenk helhetlig — alle temaene i del 6 henger sammen.',
          'Bruk fagbegreper fra alle de seks kapitlene.',
        ],
        solution: 'Denne oppgaven trener evnen til å se sammenhenger mellom personlig økonomi, arbeidsliv, skattesystem og velferdsstat — noe som er sentralt i samfunnsfag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 6
// ============================================================================

export const SAMFUNNSFAG_10_DEL6_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_10_23,
  CHAPTER_SAMFUNNSFAG_10_24,
  CHAPTER_SAMFUNNSFAG_10_25,
  CHAPTER_SAMFUNNSFAG_10_26,
  CHAPTER_SAMFUNNSFAG_10_27,
  CHAPTER_SAMFUNNSFAG_10_28,
];
