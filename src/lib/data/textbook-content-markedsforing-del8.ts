/* eslint-disable */
// @ts-nocheck
/**
 * Markedsføring og ledelse 1 (VG3) - Del 8: Etikk, regelverk og bærekraft
 * Kapittel 8.1-8.5
 *
 * Dekker LK20 kompetansemål:
 * - utforske og følge gjeldende regelverk for markedsføring og vurdere virksomhetens etiske ansvar
 * - reflektere over sammenhengen mellom markedsføring og bærekraftig utvikling
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Markedsføringsloven
// ============================================================================

export const CHAPTER_MARKEDSFORING_8_1: TextbookChapter = {
  id: 'markedsforing-8-1',
  courseId: 'markedsforing',
  chapterNumber: '8.1',
  title: 'Markedsføringsloven',
  description: 'En innføring i markedsføringsloven og dens viktigste bestemmelser. Du lærer om kravet til god markedsføringsskikk, Forbrukertilsynets rolle og reglene mot villedende markedsføring.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og følge gjeldende regelverk for markedsføring og vurdere virksomhetens etiske ansvar',
  ],
  content: [
    {
      id: 'mfl-8-1-intro',
      type: 'text',
      content: `## Lovverket som rammer inn markedsføringen

Markedsføring er ikke et lovløst land. I Norge finnes det et omfattende regelverk som setter grenser for hva bedrifter kan gjøre for å selge produktene sine. Markedsføringsloven er den viktigste loven på dette området, og den gjelder for all markedsføring rettet mot norske forbrukere - uavhengig av om bedriften holder til i Norge eller i utlandet.

I dette kapittelet skal du lære:
- Hva markedsføringsloven regulerer og hvorfor den finnes
- Hva kravet til god markedsføringsskikk innebærer
- Hvilken rolle Forbrukertilsynet spiller
- Hva som regnes som villedende markedsføring`,
    },
    {
      id: 'mfl-8-1-def-1',
      type: 'definition',
      title: 'Markedsføringsloven',
      content: `**Markedsføringsloven** (lov om kontroll med markedsføring og avtalevilkår) regulerer markedsføring og handelspraksis i Norge. Loven har to hovedformål:

1. **Beskytte forbrukerne** mot urimelig handelspraksis, villedende reklame og aggressiv markedsføring
2. **Sikre rettferdig konkurranse** mellom næringsdrivende ved å forby ulovlige metoder

Loven gjelder for all kommersiell markedsføring, inkludert reklame i sosiale medier, e-postmarkedsføring, telefonmarkedsføring og tradisjonelle medier.`,
    },
    {
      id: 'mfl-8-1-text-1',
      type: 'text',
      content: `### God markedsføringsskikk

Markedsføringslovens § 2 slår fast at markedsføring skal være i samsvar med **god markedsføringsskikk**. Dette er en rettslig standard som utvikler seg over tid i takt med samfunnets normer og verdier.

**Hva betyr god markedsføringsskikk i praksis?**

- Markedsføring skal ikke stride mot allment aksepterte etiske normer
- Reklame skal ikke være krenkende, diskriminerende eller nedverdigende
- Kjønnsstereotypier og seksualisering skal unngås
- Markedsføring skal ikke skape frykt eller utnytte folks usikkerhet
- Miljøpåstander skal kunne dokumenteres

**Viktig å merke seg:** God markedsføringsskikk er en strengere norm enn det som er direkte forbudt i loven. Noe kan altså bryte med god markedsføringsskikk selv om det ikke bryter med noen spesifikk lovparagraf.`,
    },
    {
      id: 'mfl-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Brudd på god markedsføringsskikk',
      problem: 'Hvordan har Forbrukertilsynet vurdert saker om god markedsføringsskikk?',
      solution: `**Retusjert reklame i sosiale medier:**
I 2022 trådte en endring i markedsføringsloven i kraft som krever at retusjerte reklamebilder merkes med et standardisert varselmerke. Bakgrunnen var at uretusjerte kroppsbilder i reklame kan skape urealistiske kroppsidealer, særlig blant unge. Annonsører og influencere som deler retusjert reklame uten merking, bryter loven.

**Sexistisk reklame:**
Forbrukertilsynet har ved flere anledninger reagert på reklame som bruker seksualiserte fremstillinger for å selge produkter som ikke har noe med kropp å gjøre. Et bilverksted som brukte lettkledde modeller i reklamen ble kritisert for å bryte med god markedsføringsskikk, selv om ingen spesifikk paragraf forbyr det.`,
    },
    {
      id: 'mfl-8-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-1-oppg-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med markedsføringsloven?',
        options: [
          { id: 'a', text: 'Å sikre at bedrifter tjener mest mulig penger', isCorrect: false },
          { id: 'b', text: 'Å beskytte forbrukerne og sikre rettferdig konkurranse', isCorrect: true },
          { id: 'c', text: 'Å forby all form for reklame i Norge', isCorrect: false },
          { id: 'd', text: 'Å regulere prisene på varer og tjenester', isCorrect: false },
        ],
        solution: 'Markedsføringsloven har to hovedformål: å beskytte forbrukerne mot urimelig handelspraksis og villedende reklame, og å sikre rettferdig konkurranse mellom næringsdrivende.',
      },
    },
    {
      id: 'mfl-8-1-def-2',
      type: 'definition',
      title: 'Forbrukertilsynet',
      content: `**Forbrukertilsynet** er det offentlige organet som fører tilsyn med at markedsføringsloven og andre forbrukerlover overholdes. Forbrukertilsynet kan:

- **Veilede** bedrifter om regelverket og gi veiledningsuttalelser
- **Forhandle** med bedrifter for å få slutt på lovbrudd
- **Fatte vedtak** om forbud mot ulovlig markedsføring
- **Ilegge tvangsmulkt** (dagbøter) om vedtak ikke følges
- **Ilegge overtredelsesgebyr** (bøter) for grove brudd

Forbrukertilsynet behandler også klager fra forbrukere. Vedtak kan klages inn for **Markedsrådet**, som er klageinstans.`,
    },
    {
      id: 'mfl-8-1-text-2',
      type: 'text',
      content: `### Villedende markedsføring

Markedsføringslovens §§ 6-8 forbyr **villedende og urimelig handelspraksis**. Markedsføring er villedende dersom den inneholder uriktige opplysninger eller på annen måte er egnet til å villede forbrukerne.

**Villedende markedsføring kan dreie seg om:**

- **Produktets egenskaper** - å overdrive kvalitet, holdbarhet eller effekt
- **Pris** - å gi inntrykk av lavere pris enn den faktiske (for eksempel «førpris» som aldri har vært reell)
- **Tilgjengelighet** - å reklamere for et tilbud som i praksis er utsolgt (lokkepris)
- **Opprinnelse** - å gi inntrykk av norskprodusert vare når den er importert
- **Miljøegenskaper** - å bruke udokumenterte påstander som «miljøvennlig» eller «grønn»

**Svekkelse ved utelatelse:**
Det er også villedende å utelate vesentlig informasjon som forbrukeren trenger for å ta et informert valg. For eksempel å reklamere for en mobilpakke uten å opplyse om bindingstid og totalpriser.`,
    },
    {
      id: 'mfl-8-1-example-2',
      type: 'example',
      title: 'Eksempel: Villedende prismarkedsføring',
      problem: 'En nettbutikk skriver «50 % avslag - før 999 kr, nå 499 kr» på en jakke. Jakken har aldri kostet 999 kr i nettbutikken. Er dette lovlig?',
      solution: `**Nei, dette er villedende prismarkedsføring.**

Markedsføringsloven krever at «førpriser» i avslag-kampanjer skal være reelle. Bedriften må kunne dokumentere at varen faktisk har vært solgt til den oppgitte førprisen over en rimelig periode før salget.

Forbrukertilsynet har presisert at førprisen må ha vært den faktiske utsalgsprisen i minst 6 sammenhengende uker før prisnedsettelsen for at det skal regnes som et reelt avslag. Hvis ikke, er prismarkedsføringen villedende.

Nettbutikken i eksempelet risikerer vedtak fra Forbrukertilsynet, tvangsmulkt og overtredelsesgebyr.`,
    },
    {
      id: 'mfl-8-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-1-oppg-2',
        number: '8.1.2',
        type: 'multiple-choice',
        task: 'Hvilken instans fører tilsyn med at markedsføringsloven overholdes i Norge?',
        options: [
          { id: 'a', text: 'Konkurransetilsynet', isCorrect: false },
          { id: 'b', text: 'Forbrukertilsynet', isCorrect: true },
          { id: 'c', text: 'Datatilsynet', isCorrect: false },
          { id: 'd', text: 'Finanstilsynet', isCorrect: false },
        ],
        solution: 'Forbrukertilsynet er det offentlige organet som fører tilsyn med markedsføringsloven. De kan veilede bedrifter, fatte vedtak om forbud, ilegge tvangsmulkt og overtredelsesgebyr. Vedtak kan klages inn for Markedsrådet.',
      },
    },
    {
      id: 'mfl-8-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-1-oppg-3',
        number: '8.1.3',
        type: 'classic',
        task: 'Forklar hva som menes med «god markedsføringsskikk» og gi to eksempler på markedsføring som kan bryte med denne standarden.',
        hints: ['Tenk på hva slags markedsføring de fleste i samfunnet ville oppfattet som urimelig eller uetisk'],
        solution: 'God markedsføringsskikk er en rettslig standard i markedsføringslovens § 2 som krever at markedsføring ikke skal stride mot allment aksepterte etiske normer. Standarden utvikler seg over tid med samfunnets verdier. Eksempel 1: En slankereklame som bruker retusjerte bilder for å skape urealistiske kroppsidealer, kan bryte med god markedsføringsskikk fordi det utnytter folks usikkerhet. Eksempel 2: Reklame som bruker seksualiserte fremstillinger som ikke har sammenheng med produktet, kan bryte med standarden fordi det er nedverdigende.',
      },
    },
    {
      id: 'mfl-8-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-1-oppg-4',
        number: '8.1.4',
        type: 'classic',
        task: 'En nettbutikk reklamerer med «Norges laveste priser - garantert!» uten å ha undersøkt konkurrentenes priser. Vurder om dette er i strid med markedsføringsloven, og begrunn svaret ditt.',
        hints: ['Vurder om påstanden er villedende og om den kan dokumenteres'],
        solution: 'Ja, dette er sannsynligvis i strid med markedsføringsloven. Påstanden «Norges laveste priser - garantert» er en absolutt påstand som krever dokumentasjon. Når nettbutikken ikke har undersøkt konkurrentenes priser, kan de ikke dokumentere påstanden. Ifølge markedsføringsloven §§ 6-8 er markedsføring villedende dersom den inneholder uriktige opplysninger eller er egnet til å villede forbrukerne. En slik udokumentert prisgaranti kan gi forbrukerne et feilaktig inntrykk og påvirke deres kjøpsbeslutning. Forbrukertilsynet vil kunne gripe inn med vedtak og eventuelt overtredelsesgebyr.',
      },
    },
    {
      id: 'mfl-8-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-1-oppg-5',
        number: '8.1.5',
        type: 'multiple-choice',
        task: 'Hva er villedende markedsføring ifølge markedsføringsloven?',
        options: [
          { id: 'a', text: 'Markedsføring som er kjedelig og lite kreativ', isCorrect: false },
          { id: 'b', text: 'Markedsføring som inneholder uriktige opplysninger eller er egnet til å villede forbrukerne', isCorrect: true },
          { id: 'c', text: 'Markedsføring som bare vises på sosiale medier', isCorrect: false },
          { id: 'd', text: 'Markedsføring som sammenligner seg med konkurrenter', isCorrect: false },
        ],
        solution: 'Villedende markedsføring er markedsføring som inneholder uriktige opplysninger eller på annen måte er egnet til å villede forbrukerne. Det kan dreie seg om feilaktige opplysninger om pris, kvalitet, opprinnelse eller tilgjengelighet. Også utelatelse av vesentlig informasjon kan være villedende.',
      },
    },
    {
      id: 'mfl-8-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-1-oppg-6',
        number: '8.1.6',
        type: 'classic',
        task: 'Finn et eksempel på en reklame du har sett nylig (i sosiale medier, på TV, i butikk eller på nett). Vurder om reklamen er i tråd med markedsføringslovens krav til god markedsføringsskikk og forbudet mot villedende markedsføring. Begrunn svaret ditt med referanse til loven.',
        hints: ['Beskriv reklamen konkret, og vurder den opp mot § 2 (god markedsføringsskikk) og §§ 6-8 (villedende markedsføring)'],
        solution: 'Svaret avhenger av reklamen eleven velger. Et godt svar beskriver reklamen konkret, identifiserer hvilke bestemmelser i markedsføringsloven som er relevante, og gjør en selvstendig vurdering. Eksempel: En influencer som reklamerer for et kosttilskudd med påstand om at det «kurerer akne» uten vitenskapelig dokumentasjon. Dette bryter med forbudet mot villedende markedsføring (§ 7) fordi påstanden er udokumentert og overdrevet. Det kan også stride mot god markedsføringsskikk (§ 2) fordi det utnytter unge menneskers usikkerhet.',
      },
    },
    {
      id: 'mfl-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Markedsføringsloven** regulerer all markedsføring i Norge og beskytter både forbrukere og næringsdrivende
- **God markedsføringsskikk** (§ 2) krever at markedsføring ikke skal stride mot allment aksepterte etiske normer
- **Forbrukertilsynet** fører tilsyn med loven og kan ilegge bøter og forbud
- **Villedende markedsføring** (§§ 6-8) omfatter uriktige opplysninger og utelatelse av vesentlig informasjon
- Førpriser i avslag-kampanjer må være reelle og dokumenterbare
- Retusjert reklame skal merkes med standardisert varselmerke

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Markedsføringsloven | Lov som regulerer markedsføring og handelspraksis i Norge |
| God markedsføringsskikk | Rettslig standard som krever etisk forsvarlig markedsføring |
| Forbrukertilsynet | Tilsynsorgan for markedsføringsloven |
| Markedsrådet | Klageinstans for Forbrukertilsynets vedtak |
| Villedende markedsføring | Markedsføring med uriktige eller misvisende opplysninger |
| Overtredelsesgebyr | Bøter for grove brudd på markedsføringsloven |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Reklameregelverk og forbrukervern
// ============================================================================

export const CHAPTER_MARKEDSFORING_8_2: TextbookChapter = {
  id: 'markedsforing-8-2',
  courseId: 'markedsforing',
  chapterNumber: '8.2',
  title: 'Reklameregelverk og forbrukervern',
  description: 'Du lærer om spesielle reklameregler som supplerer markedsføringsloven. Kapittelet dekker angrerettloven, forbud mot alkohol- og tobakksreklame, og særlige regler for markedsføring rettet mot barn og unge.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og følge gjeldende regelverk for markedsføring og vurdere virksomhetens etiske ansvar',
  ],
  content: [
    {
      id: 'mfl-8-2-intro',
      type: 'text',
      content: `## Spesielle reklameregler

I tillegg til den generelle markedsføringsloven finnes det en rekke spesiallover og forskrifter som regulerer markedsføring av bestemte produkter og mot bestemte målgrupper. Disse reglene finnes fordi noen produkter og målgrupper krever ekstra beskyttelse.

I dette kapittelet skal du lære:
- Hva angrerettloven innebærer for netthandel og fjernsalg
- Hvorfor alkohol- og tobakksreklame er forbudt i Norge
- Hvilke spesielle regler som gjelder for markedsføring mot barn
- Hvordan regelverket for personvern påvirker digital markedsføring`,
    },
    {
      id: 'mfl-8-2-def-1',
      type: 'definition',
      title: 'Angrerettloven',
      content: `**Angrerettloven** gir forbrukere rett til å gå fra en avtale innen 14 dager uten å oppgi grunn ved kjøp utenfor fast forretningssted (netthandel, telefonsalg, dørsalg). Loven stiller krav til selgeren:

- **Opplysningsplikt:** Selgeren må informere om angrerett, leveringsbetingelser, totalpris og klagefrist **før** kjøpet
- **Angreskjema:** Selgeren må gi et standardisert angreskjema
- **Tilbakebetaling:** Ved bruk av angreretten skal forbrukeren få pengene tilbake innen 14 dager
- **Angrefristens start:** Fristen løper fra dagen etter at varen er mottatt

Hvis selgeren ikke opplyser om angreretten, utvides fristen til 12 måneder.`,
    },
    {
      id: 'mfl-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Angrerett ved netthandel',
      problem: 'Kari bestiller en jakke fra en norsk nettbutikk mandag 5. mars. Jakken leveres onsdag 7. mars. Når utløper angreretten?',
      solution: `**Angreretten utløper onsdag 21. mars.**

Angrefristen er 14 dager og begynner å løpe dagen etter at Kari mottok varen, altså torsdag 8. mars. 14 dager fra 8. mars gir siste frist onsdag 21. mars.

**Viktig:** Kari trenger ikke oppgi grunn for å angre. Hun må sende melding til nettbutikken (gjerne via angreskjemaet) innen fristen og returnere jakken. Kari må selv betale returfrakten med mindre nettbutikken har opplyst at de dekker den. Nettbutikken skal tilbakebetale kjøpesummen innen 14 dager etter at angremeldingen er mottatt.`,
    },
    {
      id: 'mfl-8-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-2-oppg-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'Hvor lang er den ordinære angrefristen ved kjøp på nett?',
        options: [
          { id: 'a', text: '7 dager', isCorrect: false },
          { id: 'b', text: '14 dager', isCorrect: true },
          { id: 'c', text: '30 dager', isCorrect: false },
          { id: 'd', text: '3 måneder', isCorrect: false },
        ],
        solution: 'Den ordinære angrefristen er 14 dager fra dagen etter at varen er mottatt. Forbrukeren trenger ikke oppgi grunn for å benytte angreretten. Dersom selgeren ikke informerer om angreretten, utvides fristen til 12 måneder.',
      },
    },
    {
      id: 'mfl-8-2-def-2',
      type: 'definition',
      title: 'Alkohol- og tobakksreklameforbud',
      content: `**Alkoholloven § 9-2** forbyr enhver form for reklame for alkoholholdig drikke (over 2,5 volumprosent alkohol). Forbudet gjelder:
- Annonser, plakater, TV- og radioreklame
- Sponsing av arrangementer og idrettslag
- Merkevaresynlighet og produktplassering
- Sosiale medier og digitale kanaler

**Tobakksskadeloven § 22** forbyr enhver form for reklame for tobakksvarer og e-sigaretter, inkludert synlig oppstilling i butikk.

Forbudene er begrunnet i folkehelsehensyn. Norge har noen av verdens strengeste regler på dette området.`,
    },
    {
      id: 'mfl-8-2-text-1',
      type: 'text',
      content: `### Markedsføring rettet mot barn og unge

Barn er særlig sårbare for markedsføring fordi de i mindre grad enn voksne klarer å gjennomskue kommersielle budskap. Markedsføringsloven gir derfor barn et ekstra sterkt vern.

**Forbrukertilsynets retningslinjer for markedsføring mot barn:**

- **Ingen direkte kjøpsoppfordring** til barn under 18 år
- **Forbud mot press:** Reklame skal ikke skape følelse av at barnet må ha produktet for å passe inn
- **Tydelig merking:** Det skal alltid fremgå at det er reklame
- **Skjult reklame:** Reklame som er kamuflert som redaksjonelt innhold eller underholdning er ulovlig
- **Influencermarkedsføring:** Strenge krav til merking av betalt samarbeid, særlig innhold rettet mot unge

**Digital markedsføring mot barn:**
EU og Norge har innført strengere regler for personvernbasert markedsføring mot barn. Bruk av barns personopplysninger til markedsføringsformål er sterkt begrenset av personopplysningsloven (GDPR).`,
    },
    {
      id: 'mfl-8-2-example-2',
      type: 'example',
      title: 'Eksempel: Influencermarkedsføring og barn',
      problem: 'En populær norsk YouTuber med mange unge følgere lager en video der hun viser frem og roser et nytt mobilspill. Hun har fått betalt av spillutvikleren, men nevner ikke dette i videoen. Er dette lovlig?',
      solution: `**Nei, dette er ulovlig.**

Markedsføringsloven § 3 krever tydelig merking av reklame. Når en influencer mottar betaling for å omtale et produkt, er det reklame som skal merkes tydelig. Forbrukertilsynet krever at merkingen skjer:

- **Umiddelbart og tydelig** - med merking som «Annonse» eller «Betalt samarbeid» i begynnelsen av videoen og i beskrivelsen
- **Ikke skjult** - det holder ikke med en liten tekst i beskrivelsen under videoen
- **Tilpasset plattformen** - merkingen må fungere for måten innholdet konsumeres på

Forbrukertilsynet har skjerpet håndhevingen mot skjult reklame i sosiale medier og har ilagt overtredelsesgebyr i flere saker. At målgruppen er unge, gjør bruddet mer alvorlig.`,
    },
    {
      id: 'mfl-8-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-2-oppg-2',
        number: '8.2.2',
        type: 'multiple-choice',
        task: 'Hvorfor har Norge forbud mot alkoholreklame?',
        options: [
          { id: 'a', text: 'Fordi alkoholprodusentene ikke har råd til reklame', isCorrect: false },
          { id: 'b', text: 'Fordi det strider mot norsk kultur å reklamere for alkohol', isCorrect: false },
          { id: 'c', text: 'For å beskytte folkehelsen ved å begrense etterspørselen etter alkohol', isCorrect: true },
          { id: 'd', text: 'Fordi EU krever at alle land forbyr alkoholreklame', isCorrect: false },
        ],
        solution: 'Forbudet mot alkoholreklame er begrunnet i folkehelsehensyn. Forskning viser at reklame kan øke alkoholforbruket i befolkningen, særlig blant unge. Norge har, sammen med blant annet Island og Sverige, noen av verdens strengeste regler på dette området.',
      },
    },
    {
      id: 'mfl-8-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-2-oppg-3',
        number: '8.2.3',
        type: 'classic',
        task: 'Forklar hvorfor barn og unge har et sterkere vern mot markedsføring enn voksne. Gi to eksempler på regler som gjelder spesielt for markedsføring rettet mot barn.',
        hints: ['Tenk på hva som gjør barn mer sårbare for reklame enn voksne'],
        solution: 'Barn og unge har sterkere vern fordi de i mindre grad enn voksne klarer å gjennomskue kommersielle budskap og skille reklame fra redaksjonelt innhold. De er mer påvirkelige og har mindre erfaring med å vurdere reklame kritisk. Eksempel 1: Reklame rettet mot barn skal ikke inneholde direkte kjøpsoppfordringer - man kan ikke si «kjøp dette nå!» eller «be mamma om å kjøpe dette». Eksempel 2: Reklame skal ikke skape sosialt press - det er ikke lov å antyde at barnet trenger et produkt for å passe inn blant venner eller for å bli populært.',
      },
    },
    {
      id: 'mfl-8-2-text-2',
      type: 'text',
      content: `### Personvern og digital markedsføring

Personopplysningsloven (som gjennomfører EUs personvernforordning GDPR) har stor betydning for digital markedsføring. Viktige regler inkluderer:

**Samtykke:**
- Bedrifter trenger **samtykke** fra forbrukeren for å sende e-postmarkedsføring og SMS-markedsføring
- Samtykket skal være **frivillig, spesifikt, informert og utvetydig**
- Det skal være like enkelt å trekke samtykke som å gi det

**Informasjonskapsler (cookies):**
- Nettsider skal informere om bruk av informasjonskapsler og innhente samtykke
- Det skilles mellom nødvendige (tekniske) og markedsføringsrelaterte cookies
- Forbrukeren skal kunne velge å avslå markedsføringscookies uten at det påvirker brukeropplevelsen negativt

**Profilering:**
- Bruk av persondata til målrettet reklame (profilering) krever lovlig grunnlag
- Automatiserte beslutninger som påvirker forbrukeren kan kreve eksplisitt samtykke`,
    },
    {
      id: 'mfl-8-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-2-oppg-4',
        number: '8.2.4',
        type: 'multiple-choice',
        task: 'Hva krever GDPR (personopplysningsloven) for å sende markedsføring via e-post til forbrukere?',
        options: [
          { id: 'a', text: 'At bedriften har registrert seg i Brønnøysundregistrene', isCorrect: false },
          { id: 'b', text: 'Frivillig, spesifikt, informert og utvetydig samtykke fra forbrukeren', isCorrect: true },
          { id: 'c', text: 'At e-posten inneholder kontaktinformasjon til bedriften', isCorrect: false },
          { id: 'd', text: 'At bedriften har mer enn 50 ansatte', isCorrect: false },
        ],
        solution: 'GDPR krever at bedriften har et frivillig, spesifikt, informert og utvetydig samtykke fra forbrukeren for å sende e-postmarkedsføring. Forbrukeren må aktivt gi samtykke (forhåndsavkryssede bokser er ikke gyldig), og det skal være like enkelt å trekke samtykke tilbake som å gi det.',
      },
    },
    {
      id: 'mfl-8-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-2-oppg-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Et norsk bryggeri publiserer bilder av sine ølprodukter på sin Instagram-konto med teksten «Perfekt til sommerfesten!». Vurder om dette er lovlig etter alkoholloven.',
        hints: ['Tenk på hva alkoholreklameforbudet omfatter og hvor grensen går'],
        solution: 'Nei, dette er sannsynligvis ulovlig etter alkoholloven § 9-2. Alkoholreklameforbudet omfatter enhver form for massekommunikasjon som er egnet til å fremme omsetning av alkoholholdig drikke. Publisering av produktbilder med oppfordring til bruk på Instagram er reklame - det retter seg mot en ubestemt krets av mottakere og er egnet til å fremme salg. Forbudet gjelder også i sosiale medier. Helsedirektoratet fører tilsyn med alkoholreklameforbudet og kan ilegge sanksjoner. Selv en bedrifts egen konto i sosiale medier regnes som en reklamekanal.',
      },
    },
    {
      id: 'mfl-8-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-2-oppg-6',
        number: '8.2.6',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper med strenge reklameregler for alkohol og tobakk i Norge. Bruk argumenter fra både et folkehelsesynspunkt og et næringslivssynspunkt.',
        hints: ['Vurder både samfunnsnytten og konsekvensene for bransjen'],
        solution: 'Fordeler (folkehelse): Forskning viser at reklameforbud kan bidra til lavere forbruk, særlig blant unge. Redusert alkohol- og tobakksforbruk gir bedre folkehelse, lavere helseutgifter og færre rusrelaterte skader. Forbudet beskytter også barn og unge mot kommersiell påvirkning. Ulemper (næringsliv): Norske bryggerier og vinprodusenter har vanskelig for å markedsføre nye produkter og bygge merkevarer. Forbudet kan gi utenlandske merker en fordel fordi de blir kjent gjennom reklame i andre land. Småprodusenter rammes hardere enn store aktører med etablerte merkenavn. Balansert vurdering: De fleste eksperter mener at folkehelsehensyn veier tyngre enn næringsinteressene, men det pågår debatt om nyansene i regelverket.',
      },
    },
    {
      id: 'mfl-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Angrerettloven** gir 14 dagers angrefrist ved netthandel og fjernsalg
- **Alkoholloven** forbyr all reklame for alkoholholdig drikke over 2,5 volumprosent
- **Tobakksskadeloven** forbyr all tobakksreklame, inkludert synlig oppstilling i butikk
- Barn og unge har **ekstra sterkt vern** mot markedsføring, med forbud mot direkte kjøpsoppfordringer og sosialt press
- **Influencermarkedsføring** skal merkes tydelig med «Annonse» eller «Betalt samarbeid»
- **GDPR** krever informert samtykke for e-postmarkedsføring og bruk av persondata til reklame

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Angrerettloven | Gir 14 dagers angrefrist ved netthandel og fjernsalg |
| Alkoholreklameforbudet | Totalforbud mot reklame for alkoholholdig drikk |
| Skjult reklame | Reklame kamuflert som redaksjonelt innhold |
| GDPR | Personvernforordning som regulerer bruk av persondata |
| Samtykke | Krav om aktiv godkjenning for markedsføring |
| Profilering | Bruk av persondata til målrettet reklame |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Etikk i markedsføring
// ============================================================================

export const CHAPTER_MARKEDSFORING_8_3: TextbookChapter = {
  id: 'markedsforing-8-3',
  courseId: 'markedsforing',
  chapterNumber: '8.3',
  title: 'Etikk i markedsføring',
  description: 'Du lærer om etiske dilemmaer i markedsføring og hvordan bedrifter kan ta ansvar utover det loven krever. Kapittelet dekker manipulasjon, skjult reklame, samfunnsansvar (CSR) og forholdet mellom etikk og lønnsomhet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og følge gjeldende regelverk for markedsføring og vurdere virksomhetens etiske ansvar',
  ],
  content: [
    {
      id: 'mfl-8-3-intro',
      type: 'text',
      content: `## Når loven ikke er nok

Markedsføringsloven setter minimumsgrenser for hva bedrifter kan gjøre. Men etikk handler om mer enn å følge loven. Noe kan være fullt lovlig, men likevel etisk problematisk. Bedrifter som vil bygge langsiktig tillit hos kundene og i samfunnet, må stille seg selv spørsmålet: «Er dette riktig å gjøre?» - ikke bare «Er dette lovlig?»

I dette kapittelet skal du lære:
- Hva etikk betyr i en markedsføringskontekst
- Eksempler på etiske dilemmaer markedsførere møter
- Hva manipulasjon og skjult påvirkning innebærer
- Hva bedriftens samfunnsansvar (CSR) betyr i praksis`,
    },
    {
      id: 'mfl-8-3-def-1',
      type: 'definition',
      title: 'Etikk i markedsføring',
      content: `**Etikk** er læren om hva som er rett og galt, godt og ondt. I markedsføring handler etikk om å vurdere om handlinger og metoder er moralsk forsvarlige, selv om de er lovlige.

**Tre etiske tilnærminger:**
- *Konsekvensetikk (utilitarisme):* Er handlingen god fordi den fører til gode konsekvenser for flest mulig?
- *Pliktetikk (deontologi):* Er handlingen riktig i seg selv, uavhengig av konsekvensene? (F.eks. «det er alltid galt å lyve»)
- *Dydsetikk:* Hva ville en person med god karakter gjort i denne situasjonen?

Etiske dilemmaer oppstår når disse tilnærmingene gir ulike svar på hva som er rett å gjøre.`,
    },
    {
      id: 'mfl-8-3-text-1',
      type: 'text',
      content: `### Etiske gråsoner i markedsføring

Mange situasjoner i markedsføring befinner seg i en etisk gråsone - de er lovlige, men kan diskuteres. Her er noen vanlige dilemmaer:

**1. Målretting mot sårbare grupper**
- Pengespillreklame rettet mot personer med spilleproblemer
- Kviklån-reklame på tidspunkter da folk er stresset over økonomi
- Usunt godteri og brus markedsført mot barn

**2. Kunstig knapphet og tidspress**
- «Kun 3 igjen på lager!» (selv om det er 300 på sentrallageret)
- «Tilbudet utløper om 2 timer!» (det kommer et nytt tilbud i morgen)
- Slike teknikker utnytter psykologisk press for å fremskynde kjøpsbeslutninger

**3. Emosjonell manipulasjon**
- Reklame som bevisst spiller på skyldfølelse (f.eks. «du fortjener det»)
- Bruk av frykt for å selge sikkerhetsprodukter eller forsikringer
- «Fearporn» i nyhetsbrev for å få folk til å klikke

**4. Datadrevet manipulasjon**
- Bruk av personlige data til å identifisere sårbare øyeblikk for kjøp
- Algoritmer som tilpasser priser basert på brukerens betalingsvilje
- «Dark patterns» i nettbutikker som gjør det vanskelig å velge bort tilleggtjenester`,
    },
    {
      id: 'mfl-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Dark patterns i digital markedsføring',
      problem: 'Hva er dark patterns, og hvordan brukes de i praksis?',
      solution: `**Dark patterns** er designvalg i nettsider og apper som bevisst lurer eller manipulerer brukeren til å gjøre noe de ikke hadde tenkt å gjøre.

**Vanlige dark patterns:**
- **Skjulte kostnader:** Ekstra avgifter som dukker opp først i handlekurven
- **Vanskelig avmelding:** Å melde seg på et nyhetsbrev krever ett klikk, mens avmelding krever fem steg og en e-post
- **Forhåndsavkrysset samtykke:** Bokser som allerede er krysset av for tilleggstjenester
- **Confirmshaming:** «Nei takk, jeg liker ikke gode tilbud» som alternativ til å avslå

**Norsk eksempel:**
Forbrukertilsynet har kritisert flere norske nettbutikker for å bruke dark patterns, blant annet forhåndsavkrysset forsikring ved kjøp av elektronikk og abonnementstjenester som er vanskelige å si opp.

Dark patterns beveger seg ofte i en gråsone mellom lovlig og ulovlig, men bryter gjerne med prinsippet om god markedsføringsskikk.`,
    },
    {
      id: 'mfl-8-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-3-oppg-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Hva er et etisk dilemma i markedsføringssammenheng?',
        options: [
          { id: 'a', text: 'En situasjon der bedriften ikke har nok penger til reklame', isCorrect: false },
          { id: 'b', text: 'En situasjon der det er vanskelig å avgjøre hva som er rett og galt fordi ulike verdier eller hensyn står mot hverandre', isCorrect: true },
          { id: 'c', text: 'En situasjon der konkurrentene bruker bedre reklame', isCorrect: false },
          { id: 'd', text: 'En situasjon der Forbrukertilsynet har godkjent reklamen', isCorrect: false },
        ],
        solution: 'Et etisk dilemma oppstår når det er vanskelig å avgjøre hva som er rett og galt, fordi ulike verdier eller hensyn står mot hverandre. I markedsføring kan det for eksempel handle om at en lovlig teknikk er effektiv men moralsk tvilsom, eller at hensynet til profitt kolliderer med hensynet til sårbare grupper.',
      },
    },
    {
      id: 'mfl-8-3-def-2',
      type: 'definition',
      title: 'Bedriftens samfunnsansvar (CSR)',
      content: `**CSR** (Corporate Social Responsibility) eller **bedriftens samfunnsansvar** handler om at bedrifter tar ansvar for sin påvirkning på samfunnet og miljøet utover det loven krever.

**Tre dimensjoner av CSR:**
- *Økonomisk ansvar:* Drive lønnsomt og skape verdier for eiere, ansatte og samfunnet
- *Sosialt ansvar:* Ivareta ansattes rettigheter, mangfold, leverandørkjeder og lokalsamfunn
- *Miljøansvar:* Minimere negativ miljøpåvirkning og bidra til bærekraftig utvikling

CSR kan integreres i markedsføringen, men det krever at engasjementet er ekte og dokumenterbart. Falsk CSR-kommunikasjon kalles ofte «CSR-vasking» og kan skade bedriftens omdømme.`,
    },
    {
      id: 'mfl-8-3-text-2',
      type: 'text',
      content: `### CSR i praksis i Norge

Mange norske bedrifter har integrert samfunnsansvar i sin strategi og markedsføring:

**Stormberg** (friluftsklær):
- Ansetter en andel personer som har stått utenfor arbeidslivet
- Kommuniserer åpent om utfordringer i leverandørkjeden
- Gir 1 % av omsetningen til sosiale formål
- CSR er en integrert del av merkevaren, ikke bare et påheng

**TINE:**
- Har forpliktet seg til å redusere matsvinn i hele verdikjeden
- Utvikler emballasje med lavere miljøavtrykk
- Kommuniserer bærekraftsarbeidet gjennom merking og kampanjer

**Viktig prinsipp:** CSR-kommunikasjon må være troverdig. Dersom en bedrift fremhever sine gode gjerninger i markedsføringen uten at virkeligheten stemmer, risikerer den å miste tillit. Forbrukere og medier er stadig flinkere til å gjennomskue overfladisk CSR.`,
    },
    {
      id: 'mfl-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Etisk dilemma - personalisert markedsføring',
      problem: 'En nettbutikk bruker kundedata til å identifisere at en kunde gjentatte ganger søker etter slankeproduker. De sender deretter målrettet reklame for dyre kosttilskudd til denne kunden. Er dette etisk forsvarlig?',
      solution: `**Dette er et etisk dilemma med argumenter på begge sider:**

**Argumenter for at det er etisk akseptabelt:**
- Kunden søker aktivt etter slike produkter og vil trolig sette pris på relevante tilbud
- Personalisert markedsføring gir bedre brukeropplevelse
- Bedriften bruker data som kunden frivillig har generert

**Argumenter for at det er etisk problematisk:**
- Gjentatte søk etter slankeprodukter kan tyde på en sårbar person med dårlig kroppsimage
- Målrettet reklame for dyre kosttilskudd kan utnytte denne sårbarheten
- Bedriften tjener penger på kundens usikkerhet
- Kosttilskudd har ofte begrenset dokumentert effekt

**Vurdering:** Selv om praksisen kan være lovlig (med gyldig samtykke for databruk), er det etisk tvilsomt å bevisst målrette markedsføring mot personer i sårbare situasjoner. En etisk bevisst bedrift ville vurdert om inntektene rettferdiggjør den potensielle skaden.`,
    },
    {
      id: 'mfl-8-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-3-oppg-2',
        number: '8.3.2',
        type: 'multiple-choice',
        task: 'Hva står CSR for?',
        options: [
          { id: 'a', text: 'Customer Satisfaction Rate', isCorrect: false },
          { id: 'b', text: 'Corporate Social Responsibility', isCorrect: true },
          { id: 'c', text: 'Company Sales Revenue', isCorrect: false },
          { id: 'd', text: 'Commercial Strategy Report', isCorrect: false },
        ],
        solution: 'CSR står for Corporate Social Responsibility, som på norsk kalles bedriftens samfunnsansvar. Det handler om at bedrifter tar ansvar for sin påvirkning på samfunnet og miljøet utover det loven krever, og inkluderer økonomisk, sosialt og miljømessig ansvar.',
      },
    },
    {
      id: 'mfl-8-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-3-oppg-3',
        number: '8.3.3',
        type: 'classic',
        task: 'Gi to eksempler på «dark patterns» og forklar hvorfor de er etisk problematiske, selv om de kan være lovlige.',
        hints: ['Tenk på designvalg som lurer brukeren til å gjøre noe de ikke ønsker'],
        solution: 'Eksempel 1: Forhåndsavkrysset samtykke - en nettbutikk har allerede krysset av for tilleggsforsikring i handlekurven, slik at kunden må aktivt fjerne krysset. Dette er etisk problematisk fordi det utnytter at mange ikke leser nøye, og kunden ender opp med å betale for noe de ikke aktivt valgte. Eksempel 2: Confirmshaming - når avslå-knappen på et pop-up-vindu sier «Nei takk, jeg vil ikke spare penger» istedenfor et nøytralt «Nei takk». Dette er manipulativt fordi det bruker psykologisk press og skyldfølelse for å påvirke valget, istedenfor å la kunden ta en fri beslutning.',
      },
    },
    {
      id: 'mfl-8-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-3-oppg-4',
        number: '8.3.4',
        type: 'classic',
        task: 'Velg en norsk bedrift du kjenner og vurder dens CSR-arbeid. Drøft om bedriftens CSR-kommunikasjon virker troverdig, og begrunn hvorfor eller hvorfor ikke.',
        hints: ['Tenk på om bedriftens handlinger stemmer overens med det de kommuniserer'],
        solution: 'Et godt svar velger en konkret bedrift og vurderer den kritisk. Eksempel: Stormberg kommuniserer aktivt om sine sosiale prosjekter (inkludering av personer utenfor arbeidslivet) og miljøtiltak (reparasjonstjeneste, resirkulerte materialer). Kommunikasjonen virker troverdig fordi: 1) Tiltakene er konkrete og dokumenterbare. 2) Bedriften er åpen om utfordringer, ikke bare suksesser. 3) CSR er integrert i forretningsmodellen, ikke bare en kampanje. Dersom en bedrift bare har fine ord på nettsiden uten konkrete tiltak, eller fremhever små miljøtiltak mens kjernevirksomheten er miljøskadelig, er kommunikasjonen lite troverdig.',
      },
    },
    {
      id: 'mfl-8-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-3-oppg-5',
        number: '8.3.5',
        type: 'multiple-choice',
        task: 'En nettbutikk bruker teknikken «Kun 2 igjen på lager!» selv om de har mange eksemplarer. Hva er dette et eksempel på?',
        options: [
          { id: 'a', text: 'God kundeservice', isCorrect: false },
          { id: 'b', text: 'Effektiv logistikkstyring', isCorrect: false },
          { id: 'c', text: 'Kunstig knapphet for å presse frem kjøpsbeslutninger', isCorrect: true },
          { id: 'd', text: 'Lovpålagt informasjon om lagerstatus', isCorrect: false },
        ],
        solution: 'Dette er et eksempel på kunstig knapphet - en psykologisk teknikk der bedriften gir inntrykk av at varen snart er utsolgt for å presse forbrukeren til å kjøpe raskt. Teknikken utnytter FOMO (fear of missing out) og er etisk tvilsom. Dersom lagerbeholdningen er feilaktig oppgitt, kan det også være villedende markedsføring.',
      },
    },
    {
      id: 'mfl-8-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-3-oppg-6',
        number: '8.3.6',
        type: 'classic',
        task: 'Bruk de tre etiske tilnærmingene (konsekvensetikk, pliktetikk og dydsetikk) til å vurdere følgende situasjon: En bedrift vet at et av produktene deres har begrenset effekt, men fortsetter å markedsføre det med positive påstander fordi det selger godt.',
        hints: ['Anvend hver av de tre tilnærmingene separat og vis at de kan gi ulike konklusjoner'],
        solution: 'Konsekvensetikk: Konsekvensene for bedriften er positive (gode inntekter), men for kundene er de negative (de betaler for noe som ikke virker). En utilitaristisk vurdering vil veie den totale nytten - dersom mange kunder blir skuffet, er den totale skaden trolig større enn bedriftens gevinst. Pliktetikk: Å bevisst gi feilaktig informasjon for å tjene penger er en form for løgn. Pliktetikken vil si at dette er galt uavhengig av konsekvensene, fordi vi har en plikt til å være ærlige. Dydsetikk: En person med god karakter (ærlig, rettferdig, omtenksom) ville ikke solgt et produkt de visste ikke virket. Det ville være i strid med dydene ærlighet og integritet. Alle tre tilnærmingene konkluderer med at praksisen er etisk problematisk, men av ulike grunner.',
      },
    },
    {
      id: 'mfl-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Etikk i markedsføring** handler om å vurdere om handlinger er moralsk forsvarlige, utover det loven krever
- **Etiske gråsoner** oppstår ved kunstig knapphet, emosjonell manipulasjon, målretting mot sårbare grupper og dark patterns
- **Dark patterns** er designvalg som bevisst lurer brukeren til uønskede handlinger
- **CSR** (bedriftens samfunnsansvar) omfatter økonomisk, sosialt og miljømessig ansvar
- CSR-kommunikasjon må være **troverdig og dokumenterbar** for å ha verdi
- **Tre etiske tilnærminger** (konsekvensetikk, pliktetikk, dydsetikk) kan brukes til å analysere dilemmaer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Etisk dilemma | Situasjon der ulike verdier eller hensyn står mot hverandre |
| Manipulasjon | Påvirkning som utnytter folks svakheter eller sårbarhet |
| Dark patterns | Designvalg som lurer brukere til uønskede handlinger |
| CSR | Corporate Social Responsibility - bedriftens samfunnsansvar |
| Konsekvensetikk | Etisk vurdering basert på handlingens konsekvenser |
| Pliktetikk | Etisk vurdering basert på plikter og regler |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Bærekraftig markedsføring
// ============================================================================

export const CHAPTER_MARKEDSFORING_8_4: TextbookChapter = {
  id: 'markedsforing-8-4',
  courseId: 'markedsforing',
  chapterNumber: '8.4',
  title: 'Bærekraftig markedsføring',
  description: 'Du lærer om sammenhengen mellom markedsføring og bærekraftig utvikling. Kapittelet dekker grønn markedsføring, grønnvasking, sirkulærøkonomi og FNs bærekraftsmål i bedriftssammenheng.',
  estimatedMinutes: 25,
  competenceGoals: [
    'reflektere over sammenhengen mellom markedsføring og bærekraftig utvikling',
  ],
  content: [
    {
      id: 'mfl-8-4-intro',
      type: 'text',
      content: `## Markedsføring i en bærekraftig verden

Bærekraft er blitt et av de viktigste temaene i næringslivet. Forbrukerne etterspør i økende grad produkter og tjenester som er produsert på en bærekraftig måte, og bedrifter opplever press fra investorer, myndigheter og offentligheten om å ta miljø- og samfunnsansvar. Men hvordan kan markedsføring bidra til - og ikke motarbeide - bærekraftig utvikling?

I dette kapittelet skal du lære:
- Hva bærekraftig markedsføring innebærer
- Forskjellen mellom ekte grønn markedsføring og grønnvasking
- Hva sirkulærøkonomi betyr for markedsføring
- Hvordan FNs bærekraftsmål kan kobles til markedsføringsarbeid`,
    },
    {
      id: 'mfl-8-4-def-1',
      type: 'definition',
      title: 'Bærekraftig markedsføring',
      content: `**Bærekraftig markedsføring** er markedsføring som ivaretar nåtidens behov uten å ødelegge for fremtidige generasjoners muligheter. Det handler om å integrere miljømessige, sosiale og økonomiske hensyn i hele markedsføringsprosessen.

**Tre nivåer av bærekraftig markedsføring:**
- *Grønn markedsføring:* Fremheve produkters miljøegenskaper (f.eks. resirkulerbar emballasje)
- *Sosialt ansvarlig markedsføring:* Kommunisere om rettferdig handel, arbeidsforhold og inkludering
- *Bærekraftig forretningsmodell:* Markedsføring som fremmer endring i forbruksmønstre (f.eks. deling, gjenbruk, reparasjon)`,
    },
    {
      id: 'mfl-8-4-text-1',
      type: 'text',
      content: `### Grønn markedsføring

Grønn markedsføring handler om å utvikle, prise, distribuere og promotere produkter på en måte som er skånsom for miljøet. Det kan gjelde hele verdikjeden:

**Produkt:**
- Bruke resirkulerte eller fornybare materialer
- Designe for lang levetid og reparerbarhet
- Redusere emballasje og unødvendig plast

**Pris:**
- Reflektere de faktiske miljøkostnadene i prisen
- Tilby reparasjonstjenester som alternativ til nykjøp
- Bruke panteordninger eller innbytteordninger

**Distribusjon:**
- Optimalisere transport for lavest mulig utslipp
- Velge miljøvennlige emballeringsmaterialer for frakt
- Tilby samleforsendelse for å redusere antall leveranser

**Promotering:**
- Kommunisere miljøegenskaper ærlig og dokumentert
- Unngå grønnvasking
- Utdanne forbrukerne om bærekraftige valg`,
    },
    {
      id: 'mfl-8-4-example-1',
      type: 'example',
      title: 'Eksempel: IKEA og sirkulær markedsføring',
      problem: 'Hvordan kan en stor bedrift integrere bærekraft i markedsføringen?',
      solution: `**IKEA** har innført flere tiltak som kobler bærekraft med markedsføring:

**«Kjøp tilbake»-tjenesten:** IKEA tilbyr å kjøpe tilbake brukte IKEA-møbler mot et gavekort. Møblene selges videre i en egen avdeling. Dette gir en ny inntektskilde, reduserer avfall og gir kunder en grunn til å besøke butikken på nytt.

**Reservedeler:** IKEA tilbyr gratis reservedeler til sine produkter. I markedsføringen fremheves det at møblene er laget for å vare, noe som styrker merkevaren.

**Bærekraftskommunikasjon:** IKEA rapporterer årlig om fremgang mot bærekraftsmålene og kommuniserer konkrete mål (f.eks. at all plast skal være resirkulert eller fornybar innen 2030).

**Lærdommen:** Bærekraft er integrert i forretningsmodellen, ikke bare i reklamen. Det gjør kommunikasjonen troverdig.`,
    },
    {
      id: 'mfl-8-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-4-oppg-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'Hva er bærekraftig markedsføring?',
        options: [
          { id: 'a', text: 'Markedsføring som kun fokuserer på bedriftens lønnsomhet', isCorrect: false },
          { id: 'b', text: 'Markedsføring som ivaretar nåtidens behov uten å ødelegge for fremtidige generasjoner', isCorrect: true },
          { id: 'c', text: 'Markedsføring som bare bruker digitale kanaler', isCorrect: false },
          { id: 'd', text: 'Markedsføring som unngår all bruk av papir', isCorrect: false },
        ],
        solution: 'Bærekraftig markedsføring integrerer miljømessige, sosiale og økonomiske hensyn i hele markedsføringsprosessen. Målet er å ivareta nåtidens behov uten å ødelegge mulighetene for fremtidige generasjoner, inspirert av Brundtland-kommisjonens definisjon av bærekraftig utvikling.',
      },
    },
    {
      id: 'mfl-8-4-def-2',
      type: 'definition',
      title: 'Grønnvasking',
      content: `**Grønnvasking** (greenwashing) er når en bedrift gir et villedende inntrykk av å være mer miljøvennlig enn den faktisk er. Dette kan skje gjennom:

- **Vage påstander:** Bruk av udefinerte ord som «miljøvennlig», «naturlig» eller «grønn» uten dokumentasjon
- **Irrelevante påstander:** Fremheve en miljøegenskap som er ubetydelig (f.eks. «KFK-fritt» når KFK allerede er forbudt)
- **Skjulte avveininger:** Fremheve én miljøegenskap mens man skjuler andre miljøproblemer
- **Falske sertifiseringer:** Bruke hjemmelagde «miljømerker» som ikke er fra uavhengige organisasjoner
- **Selektiv rapportering:** Bare rapportere om de delene av virksomheten som er bærekraftige

Grønnvasking kan rammes av markedsføringslovens forbud mot villedende markedsføring. EU har vedtatt et direktiv mot grønnvasking som skjerper kravene til dokumentasjon av miljøpåstander.`,
    },
    {
      id: 'mfl-8-4-example-2',
      type: 'example',
      title: 'Eksempel: Grønnvasking i klessbransjen',
      problem: 'En kleskjede lanserer en «bærekraftig kolleksjon» med klær laget av resirkulert polyester. Samtidig selger de over 20 andre kolleksjoner per år med konvensjonelle materialer. Er dette grønnvasking?',
      solution: `**Dette kan være grønnvasking, avhengig av hvordan det kommuniseres.**

**Tegn på grønnvasking:**
- Hvis kleskjeden fremstiller seg som bærekraftig basert på én liten kolleksjon mens 95 % av produksjonen er uendret, er det en form for «skjulte avveininger»
- Hvis markedsføringen gir inntrykk av at hele bedriften er bærekraftig, er det villedende
- Overforbruk drives av «fast fashion»-modellen - 20+ kolleksjoner per år - som i seg selv er miljøskadelig

**Når det IKKE er grønnvasking:**
- Hvis kleskjeden er åpen om at den bærekraftige kolleksjonen er et første steg
- Hvis de har en konkret plan og tidsramme for å gjøre resten av produksjonen mer bærekraftig
- Hvis de kommuniserer ærlig om utfordringene og dilemmaene

**Nøkkelen:** Ærlig kommunikasjon om hvor man er i prosessen, ikke overdrevne påstander om hva man allerede har oppnådd.`,
    },
    {
      id: 'mfl-8-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-4-oppg-2',
        number: '8.4.2',
        type: 'multiple-choice',
        task: 'Hva er grønnvasking?',
        options: [
          { id: 'a', text: 'Å vaske klær på en miljøvennlig måte', isCorrect: false },
          { id: 'b', text: 'Å gi et villedende inntrykk av å være mer miljøvennlig enn man faktisk er', isCorrect: true },
          { id: 'c', text: 'Å bruke grønn farge i reklamen sin', isCorrect: false },
          { id: 'd', text: 'Å donere penger til miljøorganisasjoner', isCorrect: false },
        ],
        solution: 'Grønnvasking (greenwashing) er når en bedrift gir et villedende inntrykk av å være mer miljøvennlig enn den faktisk er. Det kan skje gjennom vage påstander, irrelevante miljøegenskaper, falske sertifiseringer eller selektiv rapportering. Grønnvasking kan rammes av markedsføringslovens forbud mot villedende markedsføring.',
      },
    },
    {
      id: 'mfl-8-4-text-2',
      type: 'text',
      content: `### Sirkulærøkonomi og markedsføring

Den tradisjonelle økonomien er lineær: vi henter ut råvarer, produserer varer, bruker dem og kaster dem. Sirkulærøkonomien snur dette tankesettet og tar sikte på at materialer og produkter skal beholde sin verdi lengst mulig.

**Sirkulære forretningsmodeller som påvirker markedsføring:**

**1. Produkt som tjeneste:**
- I stedet for å selge et produkt, selger man tilgang til det
- Eksempel: Swappie selger brukte og renoverte iPhoner med garanti
- Markedsføringen fokuserer på verdi, ikke eierskap

**2. Gjenbruk og videresalg:**
- Plattformer som Finn.no og Tise har gjort bruktmarkedet til mainstream
- Merkevarer som Patagonia oppfordrer til å kjøpe brukt gjennom «Worn Wear»
- Markedsføringen fremhever bærekraft og smart økonomi

**3. Reparasjon og oppgradering:**
- Rett til reparasjon er et voksende krav fra forbrukere og EU
- Bedrifter som tilbyr reparasjonstjenester bygger lojalitet
- Markedsføringen handler om kvalitet og langsiktighet

**4. Resirkulering og materialgjenvinning:**
- Produsenter tar ansvar for produktenes livsløp
- Panteordninger og returordninger som markedsføringsverktøy
- Eksempel: Norrøna tar tilbake gamle jakker og resirkulerer materialene`,
    },
    {
      id: 'mfl-8-4-text-3',
      type: 'text',
      content: `### FNs bærekraftsmål og markedsføring

FNs 17 bærekraftsmål (SDG-ene) gir et globalt rammeverk for bærekraftig utvikling frem mot 2030. Flere av målene er direkte relevante for markedsføring:

**Mål 12: Ansvarlig forbruk og produksjon**
- Bærekraftige forretningsmodeller og verdikjeder
- Redusere matsvinn og overforbruk
- Informere forbrukerne om bærekraftige valg

**Mål 13: Stoppe klimaendringene**
- Redusere klimafotavtrykk i markedsføring og distribusjon
- Kommunisere om klimatiltak og -mål

**Mål 8: Anstendig arbeid og økonomisk vekst**
- Rettferdige arbeidsforhold i leverandørkjeden
- Etisk handel og rettferdig lønn

**Hvordan bedrifter kan bruke bærekraftsmålene:**
- Identifisere hvilke mål som er mest relevante for virksomheten
- Sette konkrete, målbare mål knyttet til SDG-ene
- Rapportere om fremgang og resultater
- Kommunisere arbeidet eksternt - men bare med grunnlag i reelle tiltak`,
    },
    {
      id: 'mfl-8-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-4-oppg-3',
        number: '8.4.3',
        type: 'classic',
        task: 'Forklar hva sirkulærøkonomi betyr, og gi to eksempler på hvordan norske bedrifter kan bruke sirkulære forretningsmodeller i sin markedsføring.',
        hints: ['Tenk på alternativene til den tradisjonelle «kjøp, bruk, kast»-modellen'],
        solution: 'Sirkulærøkonomi er et økonomisk system der materialer og produkter beholder sin verdi lengst mulig, i motsetning til den lineære «hent ut, produser, bruk, kast»-modellen. Eksempel 1: Finn.no har bygget en forretningsmodell rundt gjenbruk og brukthandel. Markedsføringen fokuserer på at det er smart, enkelt og bærekraftig å kjøpe og selge brukt. Eksempel 2: Norrøna tilbyr reparasjonstjenester for sine produkter og tar tilbake gamle plagg for materialgjenvinning. De markedsfører produktene sine med vekt på kvalitet og lang levetid, og kommuniserer at kundene bidrar til bærekraft ved å velge reparasjon fremfor nykjøp.',
      },
    },
    {
      id: 'mfl-8-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-4-oppg-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Vurder følgende reklame: En flyselskapreklame sier «Fly med god samvittighet - vi kompenserer alle CO₂-utslipp gjennom klimakvoter». Drøft om dette er troverdig bærekraftskommunikasjon eller grønnvasking.',
        hints: ['Tenk på hva klimakompensasjon faktisk innebærer og om det løser problemet'],
        solution: 'Dette har trekk av grønnvasking. Argumenter for at det er problematisk: 1) Påstanden «fly med god samvittighet» er villedende fordi flyvning har et betydelig klimaavtrykk uansett. 2) Klimakvoter kompenserer ikke fullt ut for alle klimaeffektene av flyving (for eksempel kondensstriper). 3) Formuleringen gir inntrykk av at problemet er løst, noe det ikke er. 4) Det kan oppmuntre til mer flyving istedenfor å redusere utslipp. Argumenter for at det kan være akseptabelt: 1) Klimakompensasjon er bedre enn ingenting. 2) Flyselskapet tar i det minste noe ansvar. Samlet vurdering: Kommunikasjonen er overdrevet og egnet til å villede. En mer ærlig formulering ville vært: «Vi kompenserer CO₂-utslippene våre gjennom klimakvoter, men jobber også med å redusere utslippene direkte gjennom nyere fly og mer effektive ruter.»',
      },
    },
    {
      id: 'mfl-8-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-4-oppg-5',
        number: '8.4.5',
        type: 'multiple-choice',
        task: 'Hvilket av FNs bærekraftsmål handler spesifikt om ansvarlig forbruk og produksjon?',
        options: [
          { id: 'a', text: 'Mål 8: Anstendig arbeid og økonomisk vekst', isCorrect: false },
          { id: 'b', text: 'Mål 10: Mindre ulikhet', isCorrect: false },
          { id: 'c', text: 'Mål 12: Ansvarlig forbruk og produksjon', isCorrect: true },
          { id: 'd', text: 'Mål 15: Livet på land', isCorrect: false },
        ],
        solution: 'FNs bærekraftsmål 12 handler om ansvarlig forbruk og produksjon. Det innebærer blant annet bærekraftige forretningsmodeller, reduksjon av matsvinn og overforbruk, og å informere forbrukerne om bærekraftige valg. Dette er svært relevant for markedsføring.',
      },
    },
    {
      id: 'mfl-8-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-4-oppg-6',
        number: '8.4.6',
        type: 'classic',
        task: 'Diskuter om markedsføring og bærekraft kan være i konflikt med hverandre. Bruk eksempler til å belyse argumentene.',
        hints: ['Tenk på at markedsføring tradisjonelt handler om å selge mer, mens bærekraft handler om å forbruke mindre'],
        solution: 'Ja, det finnes en grunnleggende spenning: Tradisjonell markedsføring har som mål å øke salget og forbruket, mens bærekraft ofte krever at vi forbruker mindre. Eksempler på konflikt: 1) «Black Friday»-kampanjer oppmuntrer til impulskjøp og overforbruk, selv når bedriften ellers kommuniserer om bærekraft. 2) Reklame som skaper nye behov og trender (fast fashion) driver overforbruk. Eksempler på sameksistens: 1) Patagonia-kampanjen «Don\'t Buy This Jacket» oppfordret kunder til å tenke seg om, men styrket merkevaren og økte langsiktig lojalitet. 2) Sirkulære modeller som Finn.no viser at markedsføring kan fremme gjenbruk. Konklusjon: Det er mulig å forene markedsføring og bærekraft, men det krever et skifte fra å maksimere salgsvolum til å fokusere på verdi, kvalitet og langsiktige kunderelasjoner.',
      },
    },
    {
      id: 'mfl-8-4-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-4-oppg-7',
        number: '8.4.7',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en sirkulær forretningsmodell?',
        options: [
          { id: 'a', text: 'At bedriften produserer mest mulig for å maksimere inntektene', isCorrect: false },
          { id: 'b', text: 'At materialer og produkter beholder sin verdi lengst mulig gjennom gjenbruk, reparasjon og resirkulering', isCorrect: true },
          { id: 'c', text: 'At bedriften kun selger produkter i fysiske butikker', isCorrect: false },
          { id: 'd', text: 'At bedriften donerer overskuddet til veldedige formål', isCorrect: false },
        ],
        solution: 'En sirkulær forretningsmodell sørger for at materialer og produkter beholder sin verdi lengst mulig. I motsetning til den lineære modellen (hent ut, produser, bruk, kast) fokuserer sirkulærøkonomien på gjenbruk, reparasjon, renovering og resirkulering. Eksempler er produkt-som-tjeneste, bruktmarkedsplattformer og returordninger.',
      },
    },
    {
      id: 'mfl-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bærekraftig markedsføring** integrerer miljømessige, sosiale og økonomiske hensyn i hele markedsføringsprosessen
- **Grønn markedsføring** fremhever produkters miljøegenskaper ærlig og dokumentert
- **Grønnvasking** er å gi et villedende inntrykk av å være mer miljøvennlig enn man er
- **Sirkulærøkonomi** handler om at materialer og produkter skal beholde sin verdi lengst mulig
- **FNs bærekraftsmål** gir et rammeverk bedrifter kan bruke for å koble bærekraft til strategi
- Det finnes en grunnleggende spenning mellom å selge mer og å forbruke mindre

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Bærekraftig markedsføring | Markedsføring som ivaretar fremtidige generasjoners behov |
| Grønn markedsføring | Fremheve produkters miljøegenskaper |
| Grønnvasking | Villedende fremstilling av miljøvennlighet |
| Sirkulærøkonomi | System der materialer beholder verdi gjennom gjenbruk og resirkulering |
| FNs bærekraftsmål | 17 globale mål for bærekraftig utvikling mot 2030 |
| Lineær økonomi | Tradisjonell modell: hent ut, produser, bruk, kast |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Markedsplan – fra idé til gjennomføring
// ============================================================================

export const CHAPTER_MARKEDSFORING_8_5: TextbookChapter = {
  id: 'markedsforing-8-5',
  courseId: 'markedsforing',
  chapterNumber: '8.5',
  title: 'Markedsplan – fra idé til gjennomføring',
  description: 'Du lærer å lage en komplett markedsplan fra idé til gjennomføring. Kapittelet dekker markedsplanens struktur, budsjettering, tidslinjer, valg av tiltak og evaluering av resultater.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og følge gjeldende regelverk for markedsføring og vurdere virksomhetens etiske ansvar',
    'reflektere over sammenhengen mellom markedsføring og bærekraftig utvikling',
  ],
  content: [
    {
      id: 'mfl-8-5-intro',
      type: 'text',
      content: `## Alt samles i markedsplanen

Gjennom hele dette faget har du lært om markedsføringens ulike elementer - fra markedsanalyse og segmentering til konkurransemidler, merkevarebygging, ledelse og etikk. Nå er det tid for å sette alt sammen i en helhetlig **markedsplan**. En markedsplan er bedriftens konkrete handlingsplan for markedsføringsarbeidet.

I dette kapittelet skal du lære:
- Hva en markedsplan inneholder og hvorfor den er viktig
- De sentrale delene av en markedsplan
- Hvordan sette opp budsjett og tidslinje
- Hvordan evaluere og justere markedsplanen`,
    },
    {
      id: 'mfl-8-5-def-1',
      type: 'definition',
      title: 'Markedsplan',
      content: `**Markedsplanen** er et strategisk dokument som beskriver bedriftens markedsføringsmål, strategier og konkrete tiltak for en bestemt periode (vanligvis ett år). Planen fungerer som et veikart for markedsføringsarbeidet.

**Formålet med markedsplanen:**
- Sikre at markedsføringstiltakene støtter bedriftens overordnede mål
- Koordinere innsatsen mellom ulike avdelinger
- Prioritere ressurser (tid, penger, personell)
- Gi grunnlag for evaluering og forbedring
- Dokumentere beslutninger og begrunnelser`,
    },
    {
      id: 'mfl-8-5-text-1',
      type: 'text',
      content: `### Markedsplanens struktur

En komplett markedsplan inneholder følgende hoveddeler:

**1. Situasjonsanalyse (Hvor er vi?)**
- Intern analyse: Bedriftens ressurser, styrker og svakheter
- Ekstern analyse: Marked, konkurrenter, trender, muligheter og trusler
- SWOT-analyse som sammenfatter intern og ekstern analyse
- Kundeanalyse: Hvem er kundene, hva trenger de, hvordan handler de

**2. Mål (Hvor skal vi?)**
- Overordnede mål knyttet til bedriftens visjon og strategi
- Spesifikke markedsføringsmål (SMART-mål):
  - *Spesifikt:* Hva konkret skal oppnås?
  - *Målbart:* Hvordan måler vi om målet er nådd?
  - *Attraktivt:* Er målet motiverende?
  - *Realistisk:* Er målet oppnåelig med tilgjengelige ressurser?
  - *Tidsbegrenset:* Når skal målet være nådd?

**3. Strategi (Hvordan kommer vi dit?)**
- Segmentering, målgruppe og posisjonering (STP)
- Valg av konkurransemiddelmiks (de 4 P-ene)
- Differensiering fra konkurrentene
- Digital strategi og kanalmiks

**4. Handlingsplan (Hva gjør vi konkret?)**
- Konkrete tiltak med ansvarlige, tidsfrister og budsjett
- Aktivitetskalender med viktige milepæler
- Kanalplan: Hvilke kanaler brukes til hva

**5. Budsjett (Hva koster det?)**
- Kostnadsoverslag for hvert tiltak
- Fordeling mellom kanaler og aktiviteter
- Forventet avkastning (ROI)

**6. Evaluering (Har vi lykkes?)**
- KPI-er (nøkkeltall) for å måle resultater
- Evalueringsrutiner og frekvens
- Plan for justering underveis`,
    },
    {
      id: 'mfl-8-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-5-oppg-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'Hva betyr SMART-mål i markedsplanlegging?',
        options: [
          { id: 'a', text: 'Smarte, Motiverende, Avanserte, Raske, Teknologiske', isCorrect: false },
          { id: 'b', text: 'Spesifikke, Målbare, Attraktive, Realistiske, Tidsbegrensede', isCorrect: true },
          { id: 'c', text: 'Strategiske, Markedsorienterte, Analytiske, Resultatorienterte, Tilpassede', isCorrect: false },
          { id: 'd', text: 'Sosiale, Mediefokuserte, Algoritmiske, Reklamefokuserte, Treffsikre', isCorrect: false },
        ],
        solution: 'SMART-mål er et rammeverk for å sette gode mål: Spesifikke (hva konkret), Målbare (kan vi måle det), Attraktive (motiverende), Realistiske (oppnåelig med tilgjengelige ressurser) og Tidsbegrensede (frist). Eksempel: «Øke antall følgere på Instagram fra 5 000 til 10 000 innen 31. desember» er et SMART-mål.',
      },
    },
    {
      id: 'mfl-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Markedsplan for en lokal kafé',
      problem: 'Kafé Solsiden i Trondheim ønsker å øke kundebesøkene med 20 % det neste året. Hvordan kan en forenklet markedsplan se ut?',
      solution: `**1. Situasjonsanalyse:**
- Styrker: Sentral beliggenhet, god kaffe, lojale kunder
- Svakheter: Lav synlighet på nett, lite markedsføringsbudsjett
- Muligheter: Voksende marked for spesialkaffe, studenter i nærheten
- Trusler: Ny Starbucks-filial i nabolaget, økte råvarepriser

**2. Mål (SMART):**
- Øke antall daglige kunder fra 100 til 120 innen desember
- Nå 3 000 følgere på Instagram innen juni
- Oppnå 4,5 i snittrating på Google Maps

**3. Strategi:**
- Målgruppe: Studenter (18-25 år) og kontorarbeidere (25-45 år)
- Posisjonering: «Trondheims koseligste kaffested med kaffe fra lokale brennerier»
- Differensiering: Lokal profil og bærekraft (gjenbrukskopper, lokale leverandører)

**4. Handlingsplan:**
- Januar-mars: Oppgradere Instagram-profil med daglige innlegg
- April: Lansere studentrabatt (20 % med studentbevis)
- Mai: Arrangere kaffekurs (markedsføres på sosiale medier)
- September: Starte lojalitetsprogram (10. kopp gratis)

**5. Budsjett:** 60 000 kr fordelt på sosiale medier (25 000), arrangementer (20 000) og materiell (15 000)

**6. Evaluering:** Månedlig gjennomgang av besøkstall, Instagram-vekst og omsetning.`,
    },
    {
      id: 'mfl-8-5-text-2',
      type: 'text',
      content: `### Budsjettering av markedsplanen

Et markedsbudsjett skal vise hva markedsføringsarbeidet koster og hvordan pengene fordeles. Det finnes flere metoder for å sette budsjettet:

**1. Prosentmetoden:**
- Sett markedsbudsjettet som en fast prosent av omsetningen (vanligvis 3-10 %)
- Fordel: Enkelt og forutsigbart
- Ulempe: Tar ikke hensyn til faktiske behov eller muligheter

**2. Konkurranseparitetsmetoden:**
- Match konkurrentenes markedsbudsjett
- Fordel: Hindrer at man blir utkonkurrert
- Ulempe: Konkurrentene har kanskje andre behov og mål

**3. Mål-og-middelmetoden:**
- Bestem først hva du vil oppnå, deretter hva det koster
- Fordel: Mest rasjonell, knytter budsjett til konkrete mål
- Ulempe: Kan bli dyrt, vanskelig å estimere nøyaktig

**Typisk fordeling av markedsbudsjett:**

| Kanal | Andel |
|-------|-------|
| Digitale kanaler (SoMe, Google Ads, e-post) | 40-60 % |
| Innholdsproduksjon (foto, video, tekst) | 15-25 % |
| Arrangementer og aktiviteter | 10-20 % |
| Trykt materiell og skilt | 5-15 % |
| Analyse og måling | 5-10 % |`,
    },
    {
      id: 'mfl-8-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-5-oppg-2',
        number: '8.5.2',
        type: 'multiple-choice',
        task: 'Hvilken budsjetteringsmetode tar utgangspunkt i hva man ønsker å oppnå og deretter beregner kostnadene?',
        options: [
          { id: 'a', text: 'Prosentmetoden', isCorrect: false },
          { id: 'b', text: 'Konkurranseparitetsmetoden', isCorrect: false },
          { id: 'c', text: 'Mål-og-middelmetoden', isCorrect: true },
          { id: 'd', text: 'Null-budsjetteringsmetoden', isCorrect: false },
        ],
        solution: 'Mål-og-middelmetoden tar utgangspunkt i hva bedriften ønsker å oppnå (målene), og beregner deretter hva det vil koste å nå disse målene (midlene). Denne metoden er den mest rasjonelle fordi den knytter budsjettet direkte til konkrete mål, men den kan bli kostbar og krever gode kostnadsestimater.',
      },
    },
    {
      id: 'mfl-8-5-text-3',
      type: 'text',
      content: `### Tidslinjer og aktivitetskalender

En aktivitetskalender (eller Gantt-diagram) viser hvilke tiltak som gjennomføres når, og hvem som er ansvarlig. Den er et viktig styringsverktøy for å sikre at alt skjer til rett tid.

**Tips for en god aktivitetskalender:**

- **Planlegg bakover:** Start med lanseringsdato og jobb bakover for å finne startdato for forberedelser
- **Buffertid:** Legg inn ekstra tid for uforutsette forsinkelser
- **Koordinering:** Sjekk at tiltak ikke kolliderer med hverandre eller med viktige datoer
- **Sesongvariasjon:** Tilpass tiltakene til sesong, ferier og bransjetrender
- **Milepæler:** Sett tydelige delmål og deadlines underveis

**Eksempel på årshjul:**

| Måned | Hovedaktiviteter |
|-------|-----------------|
| Jan-Feb | Planlegging og forberedelser, oppstart av vårens kampanjer |
| Mar-Apr | Vårens lansering, påskekampanje |
| Mai-Jun | Sommermarkedsføring, evaluering av første halvår |
| Jul-Aug | Sommerpause (redusert aktivitet), planlegging av høsten |
| Sep-Okt | Høstkampanjer, Black Friday-forberedelser |
| Nov-Des | Julekampanje, Black Friday/Cyber Monday, årsavslutning |`,
    },
    {
      id: 'mfl-8-5-text-4',
      type: 'text',
      content: `### Evaluering og justering

En markedsplan er ikke et statisk dokument. Den skal følges opp kontinuerlig, og tiltak som ikke fungerer skal justeres eller erstattes. Evaluering er den siste - men kanskje viktigste - delen av markedsplanprosessen.

**Vanlige KPI-er for evaluering:**

| KPI | Hva den måler |
|-----|--------------|
| ROI (Return on Investment) | Avkastning per investert krone |
| CPA (Cost per Acquisition) | Kostnad per ny kunde |
| Konverteringsrate | Andel besøkende som kjøper |
| Kundetilfredshet (NPS) | Anbefaling fra kunder |
| Engasjementsrate (SoMe) | Liker, kommentarer, delinger |
| Trafikk til nettside | Antall besøkende |
| Merkekjennskap | Andel i målgruppen som kjenner merkevaren |

**PDCA-syklusen for kontinuerlig forbedring:**
1. **Plan:** Planlegg tiltak basert på analyse
2. **Do:** Gjennomfør tiltaket
3. **Check:** Mål resultatene og sammenlign med målene
4. **Act:** Juster og forbedre basert på det du har lært

Evaluering bør skje løpende (daglig/ukentlig for digitale kanaler) og periodisk (månedlig/kvartalsvis for den overordnede planen).`,
    },
    {
      id: 'mfl-8-5-example-2',
      type: 'example',
      title: 'Eksempel: Evaluering av en digital kampanje',
      problem: 'Kafé Solsiden kjørte en Instagram-kampanje i april med mål om å nå 500 nye følgere. De brukte 8 000 kr på sponsede innlegg. Etter en måned hadde de fått 320 nye følgere. Hvordan bør de evaluere og justere?',
      solution: `**Evaluering:**
- Mål: 500 nye følgere. Resultat: 320 nye følgere (64 % måloppnåelse)
- Kostnad per følger: 8 000 / 320 = 25 kr per følger
- Engasjementsrate: 4,2 % (bra, men varierer mellom innlegg)
- De mest populære innleggene var bilder av «latte art» og kunders hunder

**Analyse av hva som fungerte og ikke:**
- Innlegg publisert kl. 08:00 og 15:00 fikk mest engasjement
- Video fungerte bedre enn stillbilder (dobbelt engasjement)
- Innlegg med personlig tone («Barista Kristian anbefaler...») fungerte bedre enn bedriftskommunikasjon

**Justering for neste kampanje:**
- Flytte budsjettet fra stillbilder til video
- Publisere mer i tidspunktene som fungerer
- Bruke mer personlig tone i innleggene
- Vurdere influencersamarbeid med lokale matbloggere
- Justere målet basert på erfaringen: 400 nye følgere er mer realistisk for budsjettet`,
    },
    {
      id: 'mfl-8-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-5-oppg-3',
        number: '8.5.3',
        type: 'classic',
        task: 'Forklar hva PDCA-syklusen er og hvordan den kan brukes til å forbedre en markedsplan underveis.',
        hints: ['Tenk på de fire stegene og hvordan de henger sammen i en syklus'],
        solution: 'PDCA-syklusen er et rammeverk for kontinuerlig forbedring med fire steg: Plan (planlegg tiltak basert på analyse og mål), Do (gjennomfør tiltaket i praksis), Check (mål resultatene og sammenlign med målene) og Act (juster og forbedre basert på det du har lært). I markedsplanen kan dette brukes slik: Plan - sett et mål om å øke nettsidetrafikken med 30 % gjennom Google Ads. Do - kjør annonsekampanjen i én måned. Check - mål trafikken og sammenlign med målet. Act - juster søkeord, annonsetekster eller budsjett basert på resultatene, og start en ny syklus. Slik blir markedsplanen et levende dokument som stadig forbedres.',
      },
    },
    {
      id: 'mfl-8-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-5-oppg-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Du skal lage en forenklet markedsplan for en selvvalgt bedrift (ekte eller fiktiv). Planen skal inneholde: (a) kort situasjonsanalyse (SWOT), (b) to SMART-mål, (c) tre konkrete tiltak med budsjett og tidslinje, (d) forslag til to KPI-er for evaluering.',
        hints: ['Bruk strukturen fra kapittelet. Velg en bedrift du kjenner til eller kan relatere deg til.'],
        solution: 'Et godt svar følger strukturen og er konkret. Eksempel for en fiktiv nettbutikk for treningsutstyr: (a) SWOT: Styrker - unikt produktutvalg, god kundeservice. Svakheter - lav merkekjennskap, lite budsjett. Muligheter - voksende treningsmarked, influencersamarbeid. Trusler - store konkurrenter (XXL, Milrab). (b) SMART-mål: 1) Øke månedlig omsetning fra 150 000 til 250 000 kr innen juni. 2) Nå 5 000 følgere på Instagram innen september. (c) Tiltak: 1) Google Ads-kampanje for kjerneprodukter (3 000 kr/mnd, jan-jun). 2) Influencersamarbeid med tre treningsprofiler (15 000 kr, mars-mai). 3) E-postkampanje til eksisterende kunder med 15 % rabattkode (2 000 kr, februar). (d) KPI-er: 1) Konverteringsrate fra nettside (mål: 3 %). 2) Cost per Acquisition - kostnad per ny kunde (mål: under 150 kr).',
      },
    },
    {
      id: 'mfl-8-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-5-oppg-5',
        number: '8.5.5',
        type: 'multiple-choice',
        task: 'Hva måler KPI-en «ROI» (Return on Investment)?',
        options: [
          { id: 'a', text: 'Antall nye følgere i sosiale medier', isCorrect: false },
          { id: 'b', text: 'Avkastningen per investert krone i markedsføring', isCorrect: true },
          { id: 'c', text: 'Antall sidevisninger på nettsiden', isCorrect: false },
          { id: 'd', text: 'Kundetilfredsheten målt i prosent', isCorrect: false },
        ],
        solution: 'ROI (Return on Investment) måler avkastningen per investert krone. I markedsføring beregnes den som: ROI = (inntekter fra kampanjen - kostnad for kampanjen) / kostnad for kampanjen. En ROI på 3 betyr at for hver krone investert i markedsføring, fikk bedriften 3 kroner tilbake.',
      },
    },
    {
      id: 'mfl-8-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-8-5-oppg-6',
        number: '8.5.6',
        type: 'classic',
        task: 'Reflekter over hele faget: Hvordan henger markedsplanens ulike deler (analyse, mål, strategi, tiltak, budsjett, evaluering) sammen med temaene du har lært om i markedsføring og ledelse? Gi minst tre konkrete koblinger.',
        hints: ['Tenk på hvordan ulike temaer fra faget brukes i de ulike delene av markedsplanen'],
        solution: 'Kobling 1: Situasjonsanalysen bygger på SWOT-analyse (del 2-3), markedsundersøkelser og forbrukeratferd (del 1-2). Uten en grundig analyse kan man ikke sette gode mål eller velge riktig strategi. Kobling 2: Strategidelen bruker segmentering, målgruppe og posisjonering (STP), samt de fire P-ene (produkt, pris, plass, promotering) fra del 4-5. Det er her man velger hvordan man skal nå målgruppen. Kobling 3: Evaluering kobler til ledelse og implementering (del 7). PDCA-syklusen sikrer at planen justeres underveis, og ledelsen må sørge for at hele organisasjonen følger opp tiltakene. I tillegg: Etikk og regelverk (del 8) setter rammene for hva som er lov å gjøre, og bærekraft bør integreres i alle deler av markedsplanen.',
      },
    },
    {
      id: 'mfl-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Markedsplanen** er bedriftens handlingsplan for markedsføringsarbeidet
- Planen inneholder **situasjonsanalyse, mål, strategi, handlingsplan, budsjett og evaluering**
- **SMART-mål** er spesifikke, målbare, attraktive, realistiske og tidsbegrensede
- **Budsjettering** kan gjøres med prosentmetoden, konkurranseparitetsmetoden eller mål-og-middelmetoden
- **Aktivitetskalender** viser når tiltak gjennomføres og hvem som er ansvarlig
- **PDCA-syklusen** sikrer kontinuerlig forbedring av markedsplanen
- **KPI-er** som ROI, CPA og konverteringsrate brukes til å evaluere resultater

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Markedsplan | Strategisk handlingsplan for markedsføringsarbeidet |
| SMART-mål | Spesifikke, målbare, attraktive, realistiske, tidsbegrensede mål |
| Aktivitetskalender | Oversikt over tiltak, tidsfrister og ansvarlige |
| ROI | Return on Investment - avkastning per investert krone |
| CPA | Cost per Acquisition - kostnad per ny kunde |
| PDCA-syklusen | Plan-Do-Check-Act - rammeverk for kontinuerlig forbedring |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i Del 8
// ============================================================================

export const MARKEDSFORING_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MARKEDSFORING_8_1,
  CHAPTER_MARKEDSFORING_8_2,
  CHAPTER_MARKEDSFORING_8_3,
  CHAPTER_MARKEDSFORING_8_4,
  CHAPTER_MARKEDSFORING_8_5,
];
