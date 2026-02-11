/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Markedsføring og ledelse 1 (VG3) - DEL 2
 * Seksjon 2: Forbrukeratferd (Kapittel 2.1–2.5)
 *
 * LK20 kompetansemål:
 * - vurdere forhold som påvirker forbrukeratferd, og reflektere over psykologiske, sosiale og kulturelle faktorer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1: Hva påvirker forbrukeren?
// ============================================================================

export const CHAPTER_MARKEDSFORING_2_1: TextbookChapter = {
  id: 'markedsforing-2-1',
  courseId: 'markedsforing',
  chapterNumber: '2.1',
  title: 'Hva påvirker forbrukeren?',
  description: 'Oversikt over faktorer som påvirker forbrukeratferd, ulike kjøpssituasjoner, og forskjellen mellom behov og ønsker.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere forhold som påvirker forbrukeratferd, og reflektere over psykologiske, sosiale og kulturelle faktorer',
  ],
  content: [
    {
      id: 'mfl-2-1-intro',
      type: 'text',
      content: `## Hvorfor kjøper vi det vi kjøper?

Har du noen gang gått inn i en butikk for å kjøpe melk — og kommet ut med tre bæreposer? Eller bestilt noe på nett klokken to om natten, og lurt på *hvorfor* dagen etter?

Forbrukeratferd handler om å forstå **hvorfor** mennesker kjøper det de kjøper, **hvordan** de tar kjøpsbeslutninger, og **hva** som påvirker valgene deres. For bedrifter er dette avgjørende kunnskap. Hvis du forstår forbrukeren, kan du utvikle produkter folk faktisk vil ha, kommunisere på en måte som treffer, og plassere varene der kundene leter.

Forbrukeratferd påvirkes av en rekke faktorer som vi kan gruppere i fire hovedkategorier:
- **Psykologiske faktorer** — motivasjon, persepsjon, læring og holdninger
- **Sosiale faktorer** — familie, venner, referansegrupper og sosiale roller
- **Kulturelle faktorer** — kultur, subkultur og sosial klasse
- **Situasjonelle faktorer** — tidspunkt, humør, fysisk omgivelse og kjøpssituasjon

I dette kapittelet gir vi en oversikt over disse faktorene, før vi går i dybden på hver kategori i de neste kapitlene.`,
    },
    {
      id: 'mfl-2-1-def-1',
      type: 'definition',
      title: 'Forbrukeratferd',
      content: `**Forbrukeratferd** er studiet av hvordan enkeltpersoner, grupper og organisasjoner velger, kjøper, bruker og kvitter seg med varer, tjenester, ideer eller opplevelser for å tilfredsstille sine behov og ønsker.

Faget omfatter alle faser av forbruksprosessen:
- **Før kjøp:** Behovserkjennelse, informasjonssøk, evaluering av alternativer
- **Under kjøp:** Selve kjøpsbeslutningen, valg av butikk/kanal, betalingsmåte
- **Etter kjøp:** Bruk, tilfredshet eller misnøye, anbefalinger til andre, eventuelt retur`,
    },
    {
      id: 'mfl-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Hva påvirket Sofias treningssko-kjøp?',
      problem: 'Sofia (19) kjøpte et par Nike-treningssko til 1 899 kr i stedet for et rimeligere alternativ til 699 kr. Hvilke faktorer kan ha påvirket hennes kjøpsbeslutning?',
      solution: `**Psykologiske faktorer:**
- Motivasjon: Sofia vil trene mer og tror dyre sko gir bedre ytelse
- Persepsjon: Hun oppfatter Nike som et kvalitetsmerke basert på reklame
- Holdning: Hun har en positiv holdning til Nike etter å ha brukt merket tidligere

**Sosiale faktorer:**
- Referansegruppe: Venninnene hennes trener i Nike-sko
- Sosiale medier: Influencere hun følger bruker Nike

**Kulturelle faktorer:**
- Treningskultur: I Norge er det en sterk treningskultur, og utstyr signaliserer tilhørighet
- Merkebevissthet: I Sofias omgangskrets er merkevarer et statussymbol

**Situasjonelle faktorer:**
- Salg: Nike hadde 20 % rabatt den uken
- Butikkopplevelse: En kunnskapsrik selger anbefalte modellen

Sofias kjøp ble altså påvirket av en blanding av indre og ytre faktorer — ikke bare pris og kvalitet.`,
    },
    {
      id: 'mfl-2-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-1-oppg-1',
        number: '2.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke fire hovedkategorier av faktorer påvirker forbrukeratferd?',
        options: [
          { id: 'a', text: 'Psykologiske, sosiale, kulturelle og situasjonelle faktorer', isCorrect: true },
          { id: 'b', text: 'Pris, produkt, plass og påvirkning', isCorrect: false },
          { id: 'c', text: 'Alder, kjønn, inntekt og utdanning', isCorrect: false },
          { id: 'd', text: 'Reklame, rabatter, referanser og rykte', isCorrect: false },
        ],
        solution: 'Forbrukeratferd påvirkes av psykologiske faktorer (motivasjon, persepsjon, læring, holdninger), sosiale faktorer (familie, venner, referansegrupper), kulturelle faktorer (kultur, subkultur, sosial klasse) og situasjonelle faktorer (tidspunkt, humør, kjøpssituasjon). De andre alternativene inneholder relevante begreper, men er ikke de korrekte hovedkategoriene.',
      },
    },
    {
      id: 'mfl-2-1-def-2',
      type: 'definition',
      title: 'Behov og ønsker',
      content: `**Behov** er en grunnleggende mangeltilstand — noe du *trenger*. Behov kan være fysiologiske (mat, drikke, varme), sosiale (tilhørighet, anerkjennelse) eller individuelle (kunnskap, selvrealisering).

**Ønsker** er måten behov kommer til uttrykk på, formet av kultur og personlighet. Du *trenger* mat (behov), men du *ønsker* sushi fra Bæ Sushi Bar (ønske). Du *trenger* transport (behov), men du *ønsker* en Tesla Model 3 (ønske).

**Etterspørsel** oppstår når ønsker støttes av kjøpekraft. Du ønsker deg en Tesla, men har du råd til det?

For markedsførere er det viktig å forstå forskjellen: Du kan ikke skape behov, men du kan forme ønsker og stimulere etterspørsel.`,
    },
    {
      id: 'mfl-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Behov, ønske og etterspørsel',
      problem: 'Identifiser behov, ønske og etterspørsel i følgende situasjon: En student trenger noe å drikke etter en treningsøkt og velger å kjøpe en NOCCO-energidrikk til 35 kr.',
      solution: `**Behov:** Tørst/væskebehov etter trening (fysiologisk behov)

**Ønske:** Studenten ønsker en NOCCO — ikke bare vann fra springen. Ønsket er formet av smakspreferanser, treningskultur, markedsføring og venners vaner.

**Etterspørsel:** Studenten har 35 kr tilgjengelig og velger faktisk å kjøpe drikken. Ønsket er støttet av kjøpekraft, og det oppstår etterspørsel.

**Markedsførerens rolle:**
- NOCCO kan ikke skape tørsten (behovet), men de kan påvirke at studenten velger *deres* drikk fremfor konkurrentene (formet ønsket)
- Gjennom prissetting, distribusjon (tilgjengelig i treningssenteret) og markedsføring (sponsing av influencere) stimulerer de etterspørselen`,
    },
    {
      id: 'mfl-2-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-1-oppg-2',
        number: '2.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste forskjellen mellom behov og ønsker i markedsføring?',
        options: [
          { id: 'a', text: 'Behov er gratis, ønsker koster penger', isCorrect: false },
          { id: 'b', text: 'Behov er grunnleggende mangeltilstander, mens ønsker er kulturelt og personlig formede uttrykk for behov', isCorrect: true },
          { id: 'c', text: 'Behov gjelder bare mat og drikke, ønsker gjelder alt annet', isCorrect: false },
          { id: 'd', text: 'Det er ingen vesentlig forskjell — begrepene brukes om hverandre', isCorrect: false },
        ],
        solution: 'Behov er grunnleggende mangeltilstander som alle mennesker har (fysiologiske, sosiale, individuelle). Ønsker er måten disse behovene kommer til uttrykk på, formet av kultur, personlighet og sosial påvirkning. Markedsførere kan ikke skape behov, men de kan forme ønsker og stimulere etterspørsel.',
      },
    },
    {
      id: 'mfl-2-1-def-3',
      type: 'definition',
      title: 'Kjøpssituasjoner',
      content: `Ikke alle kjøp er like komplekse. Vi skiller mellom tre typer kjøpssituasjoner:

**1. Rutinekjøp (lavengasjement)**
Dagligdagse kjøp der du bruker lite tid og energi. Eksempler: melk, brød, tannkrem. Du velger ofte det samme merket av vane.

**2. Begrenset problemløsning (middels engasjement)**
Kjøp der du bruker litt tid på å sammenligne alternativer, men ikke gjør grundig research. Eksempler: ny genser, restaurantvalg, billig elektronikk.

**3. Utvidet problemløsning (høyengasjement)**
Store, viktige eller sjeldne kjøp der du bruker mye tid på informasjonssøk og evaluering. Eksempler: bil, bolig, utdanning, dyr elektronikk.

**Hva bestemmer engasjementsnivået?**
- Pris (høyere pris = høyere engasjement)
- Risiko (konsekvensene av feil valg)
- Synlighet (om andre ser kjøpet)
- Personlig interesse (hobbyutstyr kan gi høyt engasjement selv ved lav pris)`,
    },
    {
      id: 'mfl-2-1-example-3',
      type: 'example',
      title: 'Eksempel: Tre kjøpssituasjoner i praksis',
      content: `**Rutinekjøp:** Markus kjøper alltid den samme Grandiosa-pizzaen på Rema 1000. Han tenker ikke over det — hånden går automatisk til den røde boksen. Her er engasjementet lavt, og kjøpet styres av vane.

**Begrenset problemløsning:** Markus trenger nye hodetelefoner til trening. Han bruker ti minutter på å sammenligne tre modeller på Elkjøp.no, leser et par anmeldelser, og velger den med best vurdering i prisklassen 300–500 kr. Engasjementet er middels.

**Utvidet problemløsning:** Markus skal kjøpe sin første bil. Han bruker flere uker på å lese tester, sammenligne forsikringspriser, besøke forhandlere og snakke med venner. Han vurderer økonomi, sikkerhet, miljøavtrykk og status. Her er engasjementet svært høyt.

**For markedsføreren betyr dette:**
- Ved rutinekjøp: Fokuser på synlighet i butikkhyllen og gjenkjennelig emballasje
- Ved begrenset problemløsning: Sørg for gode anmeldelser og enkel sammenligning
- Ved utvidet problemløsning: Gi grundig produktinformasjon, trygghet og sosialt bevis`,
    },
    {
      id: 'mfl-2-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-1-oppg-3',
        number: '2.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Eline bruker tre uker på å velge ny laptop. Hun leser tester, sammenligner spesifikasjoner og besøker flere nettbutikker. Hvilken kjøpssituasjon befinner hun seg i?',
        options: [
          { id: 'a', text: 'Rutinekjøp', isCorrect: false },
          { id: 'b', text: 'Begrenset problemløsning', isCorrect: false },
          { id: 'c', text: 'Utvidet problemløsning', isCorrect: true },
          { id: 'd', text: 'Impulskjøp', isCorrect: false },
        ],
        solution: 'Eline befinner seg i en utvidet problemløsning fordi hun bruker mye tid på informasjonssøk og evaluering. En laptop er et relativt dyrt og viktig kjøp med mange alternativer å velge mellom. Det er typisk for høyengasjementskjøp at forbrukeren gjør grundig research over tid.',
      },
    },
    {
      id: 'mfl-2-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-1-oppg-4',
        number: '2.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et produkt du har kjøpt nylig. Beskriv hvilken kjøpssituasjon det var (rutinekjøp, begrenset eller utvidet problemløsning), og forklar hvilke faktorer — psykologiske, sosiale, kulturelle og situasjonelle — som påvirket din beslutning.',
        hints: ['Tenk gjennom hele prosessen: Hva utløste kjøpet? Hvem eller hva påvirket deg? Hvor lang tid brukte du?'],
        solution: 'Svaret vil variere, men et godt svar identifiserer kjøpssituasjonen korrekt og begrunner det med pris/risiko/engasjement. Det nevner konkrete psykologiske faktorer (f.eks. motivasjon eller holdning til merket), sosiale faktorer (venners anbefalinger, influencere), kulturelle faktorer (trender, normer i omgangskretsen) og situasjonelle faktorer (tilbud, tilgjengelighet, humør). Eksempel: "Jeg kjøpte en ny mobiltelefon (utvidet problemløsning). Motivasjonen var at den gamle var treg (psykologisk). Vennene mine anbefalte Samsung (sosialt). I Norge er det vanlig å ha nyeste modell (kulturelt). Jeg ventet til Black Friday for å få rabatt (situasjonelt)."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-1-oppg-5',
        number: '2.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter påstanden: «Markedsførere skaper kunstige behov hos forbrukerne.» Bruk begrepene behov, ønsker og etterspørsel i svaret ditt, og ta stilling til om du er enig eller uenig.',
        hints: ['Skille mellom å skape behov og å forme ønsker. Tenk på eksempler som smartklokker eller energidrikker.'],
        solution: 'Et godt svar skiller tydelig mellom behov og ønsker. Markedsførere kan ikke skape grunnleggende behov — disse eksisterer allerede (f.eks. behov for tilhørighet, status, bekvemmelighet). Men de kan forme *ønsker* ved å vise at deres produkt tilfredsstiller behovet bedre enn alternativene. Eksempel: Apple skapte ikke behovet for kommunikasjon, men de formet ønsket om iPhone som den foretrukne måten å kommunisere på. Kritikere hevder at aggressiv markedsføring kan få folk til å tro de *trenger* ting de ikke trenger, som den nyeste smartklokken. Tilhengere mener markedsføring bare synliggjør alternativer — forbrukeren tar den endelige beslutningen selv. Et balansert svar anerkjenner begge perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-1-oppg-6',
        number: '2.1.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva oppstår når et ønske støttes av kjøpekraft?',
        options: [
          { id: 'a', text: 'Et behov', isCorrect: false },
          { id: 'b', text: 'En etterspørsel', isCorrect: true },
          { id: 'c', text: 'En mangeltilstand', isCorrect: false },
          { id: 'd', text: 'En kjøpssituasjon', isCorrect: false },
        ],
        solution: 'Etterspørsel oppstår når et ønske støttes av kjøpekraft. Du kan ønske deg en ny bil, men det blir først etterspørsel når du faktisk har råd til å kjøpe den. For markedsførere er det viktig å stimulere etterspørsel, ikke bare skape ønsker.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Forbrukeratferd', definition: 'Studiet av hvordan mennesker velger, kjøper, bruker og kvitter seg med produkter og tjenester.' },
    { term: 'Behov', definition: 'En grunnleggende mangeltilstand som mennesker opplever.' },
    { term: 'Ønsker', definition: 'Kulturelt og personlig formede uttrykk for behov.' },
    { term: 'Etterspørsel', definition: 'Ønsker som støttes av kjøpekraft.' },
    { term: 'Rutinekjøp', definition: 'Dagligdagse kjøp med lavt engasjement der forbrukeren bruker lite tid på beslutningen.' },
    { term: 'Utvidet problemløsning', definition: 'Viktige kjøp med høyt engasjement der forbrukeren gjør grundig research.' },
  ],
};

// ============================================================================
// KAPITTEL 2.2: Psykologiske faktorer
// ============================================================================

export const CHAPTER_MARKEDSFORING_2_2: TextbookChapter = {
  id: 'markedsforing-2-2',
  courseId: 'markedsforing',
  chapterNumber: '2.2',
  title: 'Psykologiske faktorer',
  description: 'Motivasjon og Maslows behovspyramide, persepsjon, læring og holdninger som drivkrefter bak forbrukervalg.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere forhold som påvirker forbrukeratferd, og reflektere over psykologiske, sosiale og kulturelle faktorer',
  ],
  content: [
    {
      id: 'mfl-2-2-intro',
      type: 'text',
      content: `## Hva skjer inni hodet til forbrukeren?

Vi tar hundrevis av små og store beslutninger hver dag, mange av dem knyttet til forbruk. Skal jeg kjøpe lunsj eller spise matpakke? Hvilket merke velger jeg? Er dette verdt prisen?

Psykologiske faktorer er de indre prosessene som driver forbrukerens atferd. De handler om **hvorfor** vi motiveres til å handle, **hvordan** vi oppfatter og tolker informasjon, **hva** vi lærer av tidligere erfaringer, og **hvilke holdninger** vi har til produkter og merker.

I dette kapittelet ser vi nærmere på fire sentrale psykologiske faktorer:
1. **Motivasjon** — hva driver oss til å handle?
2. **Persepsjon** — hvordan oppfatter vi verden rundt oss?
3. **Læring** — hvordan påvirker erfaring fremtidige valg?
4. **Holdninger** — hva mener vi om produkter og merker?`,
    },
    {
      id: 'mfl-2-2-def-1',
      type: 'definition',
      title: 'Motivasjon og Maslows behovspyramide',
      content: `**Motivasjon** er den indre drivkraften som får oss til å handle for å tilfredsstille et behov. Når et behov er sterkt nok, blir det et motiv — det «dytter» oss mot handling.

Den mest kjente modellen for å forstå motivasjon er **Maslows behovspyramide** (1943):

**Nivå 5 — Selvrealisering:** Personlig vekst, kreativitet, oppnå sitt potensial
**Nivå 4 — Anerkjennelse:** Status, respekt, prestisje, selvtillit
**Nivå 3 — Sosiale behov:** Tilhørighet, vennskap, kjærlighet
**Nivå 2 — Trygghetsbehov:** Sikkerhet, stabilitet, helse, økonomi
**Nivå 1 — Fysiologiske behov:** Mat, drikke, søvn, varme

**Prinsippet:** Lavere behov må i hovedsak være tilfredsstilt før høyere behov blir dominerende. En sulten student tenker ikke på selvrealisering — den tenker på middag.

**For markedsførere:** Identifiser hvilket behovsnivå produktet ditt tilfredsstiller, og kommuniser deretter. En forsikring appellerer til trygghetsbehov, mens et luksusmerke appellerer til anerkjennelse.`,
    },
    {
      id: 'mfl-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Maslow i markedsføring',
      content: `Slik bruker ulike bedrifter Maslows behovspyramide:

**Fysiologiske behov:**
REMA 1000 — «Det enkle er ofte det beste.» Fokus på mat til rimelige priser.

**Trygghetsbehov:**
Gjensidige forsikring — «Vi gjør satisfaksjonen tryggere.» Appellerer til behovet for økonomisk sikkerhet.

**Sosiale behov:**
Tinder — «Det starter med en Swipe.» Appellerer til behovet for tilhørighet og romantikk.

**Anerkjennelse:**
Rolex — «A Crown for Every Achievement.» Appellerer til status og prestisje.

**Selvrealisering:**
Nike — «Just Do It.» Appellerer til behovet for å oppnå sitt potensial og overgå egne grenser.

Legg merke til at samme produkt kan appellere til flere nivåer. En Tesla tilfredsstiller transportbehov (fysiologisk), er trygg (trygghet), viser miljøbevissthet (sosial tilhørighet) og signaliserer suksess (anerkjennelse).`,
    },
    {
      id: 'mfl-2-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-2-oppg-1',
        number: '2.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket behovsnivå i Maslows pyramide appellerer en Rolex-klokke primært til?',
        options: [
          { id: 'a', text: 'Fysiologiske behov', isCorrect: false },
          { id: 'b', text: 'Trygghetsbehov', isCorrect: false },
          { id: 'c', text: 'Sosiale behov', isCorrect: false },
          { id: 'd', text: 'Anerkjennelse (status og prestisje)', isCorrect: true },
        ],
        solution: 'En Rolex-klokke appellerer primært til anerkjennelsesbehovet (nivå 4). Klokken signaliserer status, suksess og prestisje. Selv om en klokke også tilfredsstiller et praktisk behov (se tiden), er det ikke derfor folk betaler 100 000+ kr for en Rolex — det handler om anerkjennelse og sosial status.',
      },
    },
    {
      id: 'mfl-2-2-def-2',
      type: 'definition',
      title: 'Persepsjon',
      content: `**Persepsjon** er prosessen der vi velger ut, organiserer og tolker sanseinntrykk for å skape et meningsfullt bilde av verden. To personer kan oppleve nøyaktig det samme, men *oppfatte* det helt ulikt.

Persepsjon påvirker forbrukeratferd gjennom tre prosesser:

**1. Selektiv oppmerksomhet**
Vi kan ikke ta inn all informasjon vi utsettes for. Hjernen filtrerer og fokuserer på det som er relevant for oss. Hvis du akkurat har bestemt deg for å kjøpe ny sykkel, legger du plutselig merke til sykkelreklamer overalt.

**2. Selektiv tolkning**
Vi tolker informasjon basert på våre eksisterende holdninger og forventninger. En Apple-fan og en Samsung-fan vil tolke den samme telefontesten helt ulikt.

**3. Selektiv hukommelse**
Vi husker informasjon som støtter våre eksisterende holdninger, og glemmer det som motsier dem. Etter at du har kjøpt en bil, husker du de gode anmeldelsene — og glemmer kritikken.`,
    },
    {
      id: 'mfl-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Persepsjon og emballasjedesign',
      problem: 'Hvorfor bruker mange luksusmerker svart emballasje og minimalistisk design?',
      solution: `**Svaret ligger i persepsjon.**

Forbrukere *oppfatter* svart emballasje som mer eksklusiv, elegant og sofistikert enn fargerik emballasje. Dette er en lært assosiasjon: Over tid har vi blitt eksponert for at luksusmerker som Chanel, Nespresso og Apple bruker mørke, rene farger og minimalistisk design.

**Hva skjer i hjernen til forbrukeren?**
- Selektiv oppmerksomhet: Svart emballasje skiller seg ut i en butikkhylle full av fargerike produkter
- Selektiv tolkning: Forbrukeren tolker minimalistisk design som «kvalitet» og «premiumprodukt»
- Selektiv hukommelse: Kunden husker produktet som «stilig og eksklusivt»

**Praktisk konsekvens:**
Studier viser at forbrukere er villige til å betale mer for identiske produkter i «premium»-emballasje. Persepsjon av kvalitet styres altså ikke bare av selve produktet, men av hele presentasjonen.`,
    },
    {
      id: 'mfl-2-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-2-oppg-2',
        number: '2.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Jonas har nettopp kjøpt en ny iPhone. Etterpå leser han flere anmeldelser som bekrefter at han gjorde et godt valg, men ignorerer negative tester. Hvilken persepsjonsprosess illustrerer dette?',
        options: [
          { id: 'a', text: 'Selektiv oppmerksomhet', isCorrect: false },
          { id: 'b', text: 'Selektiv tolkning', isCorrect: false },
          { id: 'c', text: 'Selektiv hukommelse', isCorrect: true },
          { id: 'd', text: 'Kognitiv dissonans', isCorrect: false },
        ],
        solution: 'Jonas viser selektiv hukommelse — han husker og oppsøker informasjon som bekrefter hans valg, mens han overser eller glemmer negativ informasjon. Dette er en vanlig mekanisme etter store kjøp. (Det er også relatert til kognitiv dissonans, men spørsmålet handler spesifikt om persepsjonsprosessen.)',
      },
    },
    {
      id: 'mfl-2-2-def-3',
      type: 'definition',
      title: 'Læring',
      content: `**Læring** i forbrukersammenheng er endring i atferd basert på erfaring. Tidligere erfaringer med produkter og merker påvirker fremtidige kjøpsbeslutninger.

**To hovedtyper læring er relevante for forbrukeratferd:**

**1. Klassisk betinging**
Du kobler en følelse eller reaksjon til et produkt gjennom gjentatt eksponering. Eksempel: Du hører en glad melodi i REMA-reklamen gang etter gang. Til slutt gir melodien alene deg en positiv følelse — som overføres til butikken.

**2. Instrumentell (operant) betinging**
Du lærer gjennom belønning og straff. Hvis et produkt gir en god opplevelse (belønning), kjøper du det igjen. Hvis det skuffer (straff), velger du noe annet neste gang.

**For markedsførere:**
- Bruk konsistente merkeelementer (logo, farge, lyd) for å bygge gjenkjennelse (klassisk betinging)
- Sørg for at produktopplevelsen er god for å skape gjenkjøp (instrumentell betinging)
- Bruk kundelojalitetsprogrammer for å belønne gjentatte kjøp`,
    },
    {
      id: 'mfl-2-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-2-oppg-3',
        number: '2.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom klassisk betinging og instrumentell betinging i forbrukersammenheng, og gi ett eksempel på hver.',
        hints: ['Klassisk betinging handler om assosiasjoner, instrumentell betinging handler om konsekvenser av atferd'],
        solution: 'Klassisk betinging: Forbrukeren lærer å assosiere et produkt med en bestemt følelse gjennom gjentatt eksponering. Eksempel: Coca-Cola bruker alltid julestemning i desemberreklamer. Etter mange år kobler forbrukere automatisk Coca-Cola med juleglede — selv uten reklamen. Instrumentell betinging: Forbrukeren lærer gjennom belønning/straff. Positiv erfaring fører til gjenkjøp, negativ erfaring fører til merkebytte. Eksempel: Du prøver en ny sjampo, og håret blir mykt og fint (belønning). Neste gang velger du samme sjampo igjen. Hadde håret blitt tørt og livløst (straff), ville du valgt en annen neste gang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-2-def-4',
      type: 'definition',
      title: 'Holdninger',
      content: `**Holdninger** er lærte tendenser til å reagere positivt eller negativt overfor et objekt, en person, en idé eller et merke. Holdninger er relativt stabile, men kan endres over tid.

**Holdninger har tre komponenter (ABC-modellen):**

**A — Affektiv (følelser):** Hva føler du om produktet? «Jeg *liker* IKEA.»
**B — Behavioral (atferd):** Hva gjør du? «Jeg *handler* på IKEA jevnlig.»
**C — Kognitiv (kunnskap):** Hva vet eller tror du? «Jeg *vet* at IKEA har rimelige møbler.»

**Holdninger og kjøpsatferd:**
Positive holdninger øker sannsynligheten for kjøp, men garanterer det ikke. Du kan like et merke uten å kjøpe det (f.eks. fordi det er for dyrt). Negative holdninger er vanskelige å endre — en dårlig kundeopplevelse kan prege holdningen i lang tid.

**For markedsførere:** Jobb med alle tre komponentene. Skap positive følelser (reklame), gi god kunnskap (innholdsmarkedsføring), og gjør det lett å handle (distribusjon og tilgjengelighet).`,
    },
    {
      id: 'mfl-2-2-example-3',
      type: 'example',
      title: 'Eksempel: Holdningsendring — Norsk Tipping',
      content: `Norsk Tipping er et godt eksempel på hvordan et selskap jobber aktivt med holdninger:

**Utfordring:** Mange nordmenn har ambivalente holdninger til pengespill — de liker underholdningsaspektet, men er bekymret for spilleavhengighet.

**Affektiv strategi (følelser):**
Norsk Tipping bruker humor, nostalgi og fellesskapsfølelse i reklamer. Lotto-trekningen er en nasjonal tradisjon som gir positive følelser.

**Kognitiv strategi (kunnskap):**
De kommuniserer at overskuddet går til idrett, kultur og frivillighet i hele Norge. «Staker vi spiller for, spiller for alle.» Dette gir forbrukeren kunnskap som støtter en positiv holdning.

**Atferdsstrategi:**
De gjør det enkelt å sette grenser for eget spill (ansvarlig spillpolitikk), noe som reduserer den negative holdningskomponenten.

**Resultat:** Ved å jobbe med alle tre holdningskomponentene klarer Norsk Tipping å opprettholde en mer positiv holdning enn private spillselskaper.`,
    },
    {
      id: 'mfl-2-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-2-oppg-4',
        number: '2.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilke tre komponenter inngår i ABC-modellen for holdninger?',
        options: [
          { id: 'a', text: 'Analyse, Budsjett, Concurranse', isCorrect: false },
          { id: 'b', text: 'Affektiv (følelser), Behavioral (atferd), Kognitiv (kunnskap)', isCorrect: true },
          { id: 'c', text: 'Awareness, Belief, Commitment', isCorrect: false },
          { id: 'd', text: 'Attraksjon, Behov, Commitment', isCorrect: false },
        ],
        solution: 'ABC-modellen for holdninger består av tre komponenter: Affektiv (hva du føler), Behavioral (hva du gjør) og Kognitiv (hva du vet/tror). Alle tre komponentene påvirker hverandre og styrer samlet sett forbrukerens holdning til et produkt eller merke.',
      },
    },
    {
      id: 'mfl-2-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-2-oppg-5',
        number: '2.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et merke du har en sterk holdning til (positiv eller negativ). Analyser holdningen din ved hjelp av ABC-modellen: Hva føler du (affektiv)? Hva vet du (kognitiv)? Hva gjør du (atferd)? Reflekter over hva som har formet denne holdningen.',
        hints: ['Bruk konkrete eksempler og tenk over om holdningen er basert mest på følelser, kunnskap eller erfaring'],
        solution: 'Et godt svar velger et konkret merke og analyserer alle tre komponenter. Eksempel (positiv holdning til Apple): Affektiv — jeg føler begeistring og tilhørighet når jeg bruker Apple-produkter. Kognitiv — jeg vet at Apple har godt design, lang levetid og tett økosystem. Atferd — jeg kjøper konsekvent Apple-produkter og anbefaler dem til andre. Holdningen er formet av: positive erfaringer (instrumentell betinging), venners anbefalinger (sosialt), Apples markedsføring (klassisk betinging) og medieoppslagene om produktlanseringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-2-oppg-6',
        number: '2.2.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er selektiv oppmerksomhet?',
        options: [
          { id: 'a', text: 'At vi husker informasjon som støtter våre holdninger', isCorrect: false },
          { id: 'b', text: 'At hjernen filtrerer sanseinntrykk og fokuserer på det som er relevant for oss', isCorrect: true },
          { id: 'c', text: 'At vi tolker informasjon basert på forventninger', isCorrect: false },
          { id: 'd', text: 'At vi glemmer negativ informasjon om produkter vi liker', isCorrect: false },
        ],
        solution: 'Selektiv oppmerksomhet betyr at hjernen filtrerer den enorme mengden sanseinntrykk vi utsettes for, og fokuserer på det som er relevant for oss akkurat nå. Vi legger merke til reklame for produkter vi allerede er interessert i, og overser resten. Det er anslått at forbrukere eksponeres for tusenvis av reklamebudskap daglig, men kun legger merke til en brøkdel.',
      },
    },
    {
      id: 'mfl-2-2-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-2-oppg-7',
        number: '2.2.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan et treningssenter kan bruke Maslows behovspyramide i sin markedsføring. Gi eksempler på budskap som appellerer til minst tre ulike behovsnivåer.',
        hints: ['Tenk på ulike grunner folk har for å trene — helse, sosial omgang, utseende, prestasjon'],
        solution: 'Et treningssenter kan appellere til flere nivåer: Fysiologiske behov — «Tren for bedre helse og mer energi i hverdagen» (grunnleggende fysisk velvære). Trygghetsbehov — «Styrketrening forebygger skader og gir bedre helse på sikt» (langsiktig helsesikkerhet). Sosiale behov — «Bli med i vårt treningsfellesskap — gruppetimer hver dag» (tilhørighet og sosialt samvær). Anerkjennelse — «Oppnå dine personlige mål og inspirer andre» (status og prestasjon). Selvrealisering — «Bli den beste versjonen av deg selv» (personlig vekst). Ved å bruke ulike budskap i ulike kanaler kan treningssenteret nå bredere målgrupper med ulik motivasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Motivasjon', definition: 'Den indre drivkraften som får oss til å handle for å tilfredsstille et behov.' },
    { term: 'Maslows behovspyramide', definition: 'Modell med fem behovsnivåer: fysiologiske, trygghet, sosiale, anerkjennelse og selvrealisering.' },
    { term: 'Persepsjon', definition: 'Prosessen der vi velger ut, organiserer og tolker sanseinntrykk.' },
    { term: 'Selektiv oppmerksomhet', definition: 'At hjernen filtrerer sanseinntrykk og fokuserer på det relevante.' },
    { term: 'Holdning', definition: 'Lært tendens til å reagere positivt eller negativt overfor noe.' },
    { term: 'ABC-modellen', definition: 'Modell for holdninger: Affektiv (følelser), Behavioral (atferd), Kognitiv (kunnskap).' },
  ],
};

// ============================================================================
// KAPITTEL 2.3: Sosiale og kulturelle faktorer
// ============================================================================

export const CHAPTER_MARKEDSFORING_2_3: TextbookChapter = {
  id: 'markedsforing-2-3',
  courseId: 'markedsforing',
  chapterNumber: '2.3',
  title: 'Sosiale og kulturelle faktorer',
  description: 'Referansegrupper, familie, sosial klasse, kultur og subkultur som påvirker forbrukervalg.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere forhold som påvirker forbrukeratferd, og reflektere over psykologiske, sosiale og kulturelle faktorer',
  ],
  content: [
    {
      id: 'mfl-2-3-intro',
      type: 'text',
      content: `## Vi er sosiale vesener — også når vi handler

Mennesker lever ikke i vakuum. Vi er omgitt av familie, venner, kolleger og kulturelle normer som hele tiden påvirker valgene våre — ofte uten at vi er klar over det.

Tenk deg at du er i en klesbutikk. Du prøver en jakke og tenker: «Hva ville vennene mine sagt?» eller «Passer denne stilen til meg?» Disse tankene handler ikke bare om deg — de handler om ditt *sosiale jeg*.

I dette kapittelet ser vi på hvordan sosiale og kulturelle faktorer former forbrukeratferd:
- **Referansegrupper** — hvem sammenligner vi oss med?
- **Familie** — den viktigste innflytelseskilden for mange
- **Sosial klasse** — inntekt, utdanning og livsstil
- **Kultur** — de grunnleggende verdiene og normene i samfunnet
- **Subkultur** — grupper med egne verdier innenfor storsamfunnet`,
    },
    {
      id: 'mfl-2-3-def-1',
      type: 'definition',
      title: 'Referansegrupper',
      content: `**Referansegrupper** er grupper som en person bruker som sammenligningsgrunnlag når de former sine holdninger og sin atferd. Vi påvirkes av hva disse gruppene mener, kjøper og gjør.

**Typer referansegrupper:**

**Primærgrupper** — personer du har tett, regelmessig kontakt med: familie, nære venner, kolleger.

**Sekundærgrupper** — personer du har mer formell eller sjeldnere kontakt med: foreninger, idrettslag, religiøse grupper.

**Aspirerende grupper** — grupper du *ønsker* å tilhøre: Kanskje du kler deg som en bestemt subkultur eller kjøper produkter som brukes av folk du beundrer.

**Dissosiative grupper** — grupper du *ikke* vil bli assosiert med: Du unngår bevisst produkter eller stiler som knyttes til disse gruppene.

**Opinionsledere** er personer innenfor en referansegruppe som har spesielt stor påvirkningskraft på andres valg. I dag er mange opinionsledere influencere på sosiale medier.`,
    },
    {
      id: 'mfl-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Referansegrupper i skolehverdagen',
      content: `Se for deg en VG3-elev som skal kjøpe ny ryggsekk:

**Primærgruppe (venner):** Flere i vennegjengen har Douchebags/Db-sekker. Eleven ønsker å passe inn og vurderer samme merke.

**Aspirerende gruppe:** Eleven ser at studenter på NTNU bruker stilige Fjällräven-sekker på Instagram. Selv om eleven ikke er student ennå, identifiserer den seg med denne gruppen.

**Dissosiativ gruppe:** Den billige sekken fra Europris assosieres med noe «barnslig» i elevens omgangskrets, så den velges bort — selv om den er funksjonell.

**Opinionsleder:** En populær klassekamerat som er kjent for god stil anbefaler et bestemt merke. Denne anbefalingen veier tungt.

**For markedsføreren:** Forstå hvilke referansegrupper som er viktige for din målgruppe, og bruk dette i kommunikasjonen. Samarbeid med relevante opinionsledere og vis produktet i riktig sosial kontekst.`,
    },
    {
      id: 'mfl-2-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-3-oppg-1',
        number: '2.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en aspirerende referansegruppe?',
        options: [
          { id: 'a', text: 'En gruppe du har daglig kontakt med', isCorrect: false },
          { id: 'b', text: 'En gruppe du ønsker å tilhøre eller identifisere deg med', isCorrect: true },
          { id: 'c', text: 'En gruppe du aktivt tar avstand fra', isCorrect: false },
          { id: 'd', text: 'En gruppe som bestemmer hva du skal kjøpe', isCorrect: false },
        ],
        solution: 'En aspirerende referansegruppe er en gruppe du ønsker å tilhøre eller identifisere deg med, selv om du ikke er medlem. Du kan for eksempel kle deg som folk i den gruppen eller kjøpe produkter de bruker. Dette utnytter markedsførere ved å vise produktet i en kontekst målgruppen aspirerer til.',
      },
    },
    {
      id: 'mfl-2-3-def-2',
      type: 'definition',
      title: 'Familiens rolle i forbrukeratferd',
      content: `**Familien** er den viktigste referansegruppen for de fleste mennesker, og påvirker forbrukeratferd på to måter:

**1. Orienteringsfamilien (oppvekstfamilien)**
Familien du vokste opp i former dine grunnleggende verdier, holdninger og forbruksvaner. Hvis foreldrene dine alltid handlet på KIWI, er det sannsynlig at du også velger KIWI som voksen — av vane.

**2. Prokreasjonsfamilien (egen familie)**
Familien du selv danner har direkte innvirkning på daglige kjøpsbeslutninger. Hvem bestemmer hva i en familie?

**Roller i familiens kjøpsbeslutninger:**
- **Initiativtaker:** Den som foreslår kjøpet («Vi trenger ny TV»)
- **Påvirker:** Den som kommer med meninger og informasjon («Samsung har best bilde»)
- **Beslutningstaker:** Den som tar den endelige avgjørelsen
- **Kjøper:** Den som faktisk gjennomfører kjøpet
- **Bruker:** Den som bruker produktet (kan være alle eller én person)

Samme person kan ha flere roller, og rollene varierer mellom produktkategorier.`,
    },
    {
      id: 'mfl-2-3-example-2',
      type: 'example',
      title: 'Eksempel: Familieroller ved kjøp av feriereise',
      problem: 'Familien Hansen skal på ferie. Identifiser de ulike kjøpsrollene.',
      solution: `**Initiativtaker:** Sønnen (15 år) sier: «Alle i klassen har vært i Syden. Kan vi dra til Kreta?»

**Påvirker:** Datteren (17 år) googler hoteller og viser TripAdvisor-anmeldelser. Bestemor anbefaler et hotell hun besøkte i fjor.

**Beslutningstaker:** Mor og far diskuterer og bestemmer sammen at det blir Kreta, men velger et annet hotell enn det bestemor foreslo.

**Kjøper:** Far bestiller flybilletter og hotell gjennom Ving.no.

**Brukere:** Hele familien nyter ferien.

**For reiseselskapet (Ving):**
- Reklamen bør appellere til initiativtakeren (barna) med spennende aktiviteter
- Nettsiden bør gi god informasjon til påvirkeren (datteren som googler)
- Prisen og trygghetsinformasjonen bør rettes mot beslutningstakerne (foreldrene)
- Bestillingsprosessen bør være enkel for kjøperen (far)`,
    },
    {
      id: 'mfl-2-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-3-oppg-2',
        number: '2.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tenk på et større kjøp familien din har gjort nylig (f.eks. bil, ferie, møbel, elektronikk). Beskriv hvem som hadde de ulike rollene: initiativtaker, påvirker, beslutningstaker, kjøper og bruker. Var det noen som hadde flere roller?',
        hints: ['Det er helt normalt at én person har flere roller. Tenk gjennom hele prosessen fra idé til bruk.'],
        solution: 'Et godt svar identifiserer et konkret kjøp og beskriver hvem som hadde hvilke roller. Eksempel: Kjøp av ny sofa — Initiativtaker: Mor (den gamle sofaen var slitt). Påvirkere: Hele familien kom med ønsker, og en interiørvenninne ga tips. Beslutningstaker: Mor og far bestemte sammen. Kjøper: Far bestilte på nett. Brukere: Hele familien. Far hadde tre roller (påvirker, beslutningstaker, kjøper). Eksempelet viser at kjøpsroller ofte overlapper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-3-def-3',
      type: 'definition',
      title: 'Sosial klasse',
      content: `**Sosial klasse** er en relativt permanent inndeling av samfunnet der medlemmene deler lignende verdier, interesser og atferdsmønstre. Sosial klasse bestemmes av en kombinasjon av:
- **Inntekt** — hva du tjener
- **Utdanning** — hvilket utdanningsnivå du har
- **Yrke** — hva slags jobb du har
- **Formue** — hva du eier

**Sosial klasse påvirker forbrukeratferd gjennom:**
- Hvilke produkter og merker du velger
- Hvor du handler (Meny vs. REMA 1000)
- Hvilke medier du konsumerer
- Hvilke fritidsaktiviteter du har
- Hvordan du snakker om produkter og forbruk

**Viktig nyanse:** I Norge liker vi å tro at vi er et klasseløst samfunn, men forskning viser at sosial klasse fortsatt påvirker forbruksmønstre. Forskjellene er kanskje subtilere enn i andre land, men de finnes — for eksempel i valg av matbutikk, bilmerke og feriedestinasjon.`,
    },
    {
      id: 'mfl-2-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-3-oppg-3',
        number: '2.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilke faktorer bestemmer sosial klasse?',
        options: [
          { id: 'a', text: 'Bare inntekt', isCorrect: false },
          { id: 'b', text: 'En kombinasjon av inntekt, utdanning, yrke og formue', isCorrect: true },
          { id: 'c', text: 'Alder og kjønn', isCorrect: false },
          { id: 'd', text: 'Hvor du bor og hvilket språk du snakker', isCorrect: false },
        ],
        solution: 'Sosial klasse bestemmes av en kombinasjon av inntekt, utdanning, yrke og formue. Det er ikke nok å se på inntekt alene — en rørlegger kan tjene mer enn en lektor, men de kan tilhøre ulike sosiale klasser basert på utdanning, verdier og forbruksmønstre. Det er kombinasjonen av faktorer som skaper sosiale klassemønstre.',
      },
    },
    {
      id: 'mfl-2-3-def-4',
      type: 'definition',
      title: 'Kultur og subkultur',
      content: `**Kultur** er de grunnleggende verdiene, normene, oppfatningene og atferdsmønstrene som deles av medlemmer av et samfunn. Kultur er den mest grunnleggende påvirkningsfaktoren for forbrukeratferd — den former våre ønsker og vår atferd fra vi er små.

**Eksempler på kulturelle verdier som påvirker norsk forbruk:**
- Likhet og janteloven — overdreven luksus ses ofte ned på
- Friluftsliv — nordmenn bruker mye penger på turklær og hytteliv
- Dugnad og fellesskap — kollektive løsninger verdsettes
- Bærekraft — miljøbevissthet påvirker stadig flere kjøpsbeslutninger

**Subkultur** er en gruppe innenfor storsamfunnet som deler egne verdier, normer og atferdsmønstre. Subkulturer kan baseres på:
- **Nasjonalitet/etnisitet** (polsk, somalisk, pakistansk subkultur i Norge)
- **Religion** (muslimsk, kristen subkultur)
- **Alder/generasjon** (Gen Z, millennials)
- **Livsstil/interesser** (e-sport-miljøet, friluftsfolket, veganere)

Subkulturer representerer viktige segmenter for markedsførere fordi de ofte har tydelige forbruksmønstre.`,
    },
    {
      id: 'mfl-2-3-example-3',
      type: 'example',
      title: 'Eksempel: Kultur og matforbruk — Norge vs. Japan',
      content: `Kultur påvirker de mest grunnleggende forbruksvalgene våre, inkludert mat:

**Norge:**
- Frokost: Brødskiver med brunost, leverpostei eller smøreost
- Lunsj: Matpakke (et unikt norsk kulturelt fenomen!)
- Middag: Ofte enkel hverdagsmat — taco på fredager er nesten en nasjonal tradisjon
- Kulturell verdi: Praktisk, uformell, tidsbegrensende

**Japan:**
- Frokost: Ris, misosuppe, grillet fisk, fermenterte grønnsaker
- Lunsj: Bento-boks — estetisk presentert med flere retter
- Middag: Variert, sesongbasert, der presentasjon er like viktig som smak
- Kulturell verdi: Estetikk, balanse, respekt for råvarer

**For markedsførere betyr dette:**
Et norsk matselskap som vil selge i Japan kan ikke bare oversette emballasjen. De må forstå japansk matkultur, estetiske preferanser og kulturelle verdier. McDonald's forstår dette — i Norge selger de BigMac, i Japan selger de Teriyaki-burgere og Ebi (reke)-burgere.`,
    },
    {
      id: 'mfl-2-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-3-oppg-4',
        number: '2.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre eksempler på hvordan norsk kultur påvirker forbrukeratferd ulikt fra et annet land du kjenner til. Forklar den kulturelle verdien som ligger bak hvert eksempel.',
        hints: ['Tenk på janteloven, friluftsliv, matpakke-tradisjonen, likestilling eller holdninger til luksus'],
        solution: 'Et godt svar gir tre konkrete eksempler med tydelig kobling til kulturelle verdier. Eksempel: 1) Matpakke-kultur: I Norge tar de fleste med matpakke på jobb/skole (verdi: nøysomhet og likhet — alle spiser det samme). I Frankrike er en lang lunsjpause på restaurant normalt (verdi: nytelse og sosial omgang). 2) Friluftsliv: Nordmenn investerer mye i turklær og hytteutstyr (verdi: naturnærhet). I mange andre land er dette nisjeforbruk. 3) Luksusholdning: I Norge er diskré merkebruk vanlig — for synlig luksus kan oppfattes negativt pga. janteloven. I Dubai eller USA er synlig luksus oftere positivt assosiert med suksess.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-3-oppg-5',
        number: '2.3.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En energidrikk-produsent sponser e-sport-turneringer og bruker gamere i reklamen. Hvilken form for påvirkning utnytter de?',
        options: [
          { id: 'a', text: 'Kulturell påvirkning', isCorrect: false },
          { id: 'b', text: 'Subkultur og referansegrupper', isCorrect: true },
          { id: 'c', text: 'Sosial klasse', isCorrect: false },
          { id: 'd', text: 'Familieroller', isCorrect: false },
        ],
        solution: 'Energidrikk-produsenten utnytter subkultur (e-sport/gamer-miljøet) og referansegrupper (kjente gamere som opinionsledere). E-sport-miljøet er en subkultur med egne verdier, normer og forbruksmønstre. Ved å sponse turneringer og bruke kjente gamere som ambassadører, posisjonerer merket seg som en del av denne subkulturen og påvirker gjennom referansegrupper.',
      },
    },
    {
      id: 'mfl-2-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-3-oppg-6',
        number: '2.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter: I Norge sier vi at vi er et klasseløst samfunn, men studier viser at sosial klasse påvirker forbruksmønstre. Gi eksempler på hvordan sosial klasse kan påvirke valg av matbutikk, fritidsaktiviteter og klesmerker i Norge, og reflekter over om disse forskjellene er problematiske.',
        hints: ['Tenk på forskjeller mellom f.eks. Meny/Jacobs og REMA 1000, golf vs. fotball, og hvordan ulike grupper forholder seg til merkevarekjøp'],
        solution: 'Et godt svar viser at sosial klasse, selv i «likhetslandet» Norge, påvirker forbruk. Matbutikk: Meny og Jacobs appellerer til høyere sosiale klasser med økologisk mat, spesialiteter og vinkolonner, mens REMA 1000 og KIWI fokuserer på lavpris. Fritid: Golf, seiling og alpint knyttes til høyere sosiale klasser; fotball og håndball er mer «folkeaktiviteter». Klær: Noen kjøper designermerker diskré (norsk stil), mens andre prioriterer funksjonalitet og pris. Refleksjon bør diskutere om forskjellene er naturlige preferanser eller uttrykk for ulikhet. Et balansert svar anerkjenner at Norge har lavere klasseskiller enn mange land, men at de likevel eksisterer og påvirker forbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-3-note-1',
      type: 'note',
      title: 'Oppsummering: Sosiale og kulturelle faktorer',
      content: `**Nøkkelpunkter fra dette kapittelet:**
- Referansegrupper (primære, sekundære, aspirerende, dissosiative) påvirker holdninger og kjøp
- Familien er den viktigste referansegruppen med ulike kjøpsroller (initiativtaker, påvirker, beslutningstaker, kjøper, bruker)
- Sosial klasse bestemmes av inntekt, utdanning, yrke og formue — og påvirker forbruksmønstre
- Kultur er den mest grunnleggende påvirkningsfaktoren — den former våre ønsker fra barndommen
- Subkulturer er viktige segmenter med egne forbruksmønstre

For markedsførere er det avgjørende å forstå den sosiale og kulturelle konteksten til målgruppen for å kommunisere effektivt.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Referansegruppe', definition: 'En gruppe som en person bruker som sammenligningsgrunnlag for holdninger og atferd.' },
    { term: 'Opinionsleder', definition: 'En person i en referansegruppe med spesielt stor påvirkningskraft.' },
    { term: 'Orienteringsfamilien', definition: 'Familien man vokser opp i, som former grunnleggende verdier og vaner.' },
    { term: 'Sosial klasse', definition: 'Relativt permanent samfunnsinndeling basert på inntekt, utdanning, yrke og formue.' },
    { term: 'Kultur', definition: 'Grunnleggende verdier, normer og atferdsmønstre delt av et samfunn.' },
    { term: 'Subkultur', definition: 'En gruppe innenfor storsamfunnet som deler egne verdier og atferdsmønstre.' },
  ],
};

// ============================================================================
// KAPITTEL 2.4: Kjøpsprosessen
// ============================================================================

export const CHAPTER_MARKEDSFORING_2_4: TextbookChapter = {
  id: 'markedsforing-2-4',
  courseId: 'markedsforing',
  chapterNumber: '2.4',
  title: 'Kjøpsprosessen',
  description: 'De fem trinnene i kjøpsprosessen: behovserkjennelse, informasjonssøk, evaluering av alternativer, kjøpsbeslutning og etterkjøpsatferd.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere forhold som påvirker forbrukeratferd, og reflektere over psykologiske, sosiale og kulturelle faktorer',
  ],
  content: [
    {
      id: 'mfl-2-4-intro',
      type: 'text',
      content: `## Fra behov til kjøp — en reise i fem trinn

Når du kjøper noe, går du gjennom en prosess — selv om du kanskje ikke tenker over det. For enkle kjøp (som en brus i kiosken) tar prosessen sekunder. For komplekse kjøp (som en bil) kan den ta uker eller måneder.

**Kjøpsprosessen** er en modell som beskriver de fem trinnene en forbruker typisk går gjennom:

1. **Behovserkjennelse** — «Jeg trenger/vil ha noe»
2. **Informasjonssøk** — «Hva finnes der ute?»
3. **Evaluering av alternativer** — «Hvilket alternativ er best for meg?»
4. **Kjøpsbeslutning** — «Jeg velger dette»
5. **Etterkjøpsatferd** — «Er jeg fornøyd?»

Det er viktig å forstå at forbrukere ikke alltid går gjennom alle trinnene. Ved rutinekjøp hopper man gjerne rett fra behovserkjennelse til kjøp. Men for markedsførere er modellen verdifull fordi den viser *hvor* i prosessen du kan påvirke forbrukeren.`,
    },
    {
      id: 'mfl-2-4-def-1',
      type: 'definition',
      title: 'Trinn 1: Behovserkjennelse',
      content: `**Behovserkjennelse** oppstår når forbrukeren oppdager en forskjell mellom nåværende tilstand og ønsket tilstand. Dette er startpunktet for all kjøpsatferd.

**Behovserkjennelse kan utløses av:**

**Indre stimuli:**
- Sult, tørst, tretthet (fysiologisk)
- Kjedsomhet, ensomhet (emosjonell)
- Ambisjon, nysgjerrighet (intellektuell)

**Ytre stimuli:**
- Reklame som viser deg et produkt du ikke visste du trengte
- En venns anbefaling
- Sesongskifte (høst → behov for varmere klær)
- Produktet ditt slutter å fungere (telefonen knuser)
- Livshendelser (flytte hjemmefra, begynne i ny jobb)

**For markedsførere:**
Du kan stimulere behovserkjennelse gjennom reklame som viser gapet mellom nåværende og ønsket tilstand. «Er du lei av treg internett?» får forbrukeren til å erkjenne et behov de kanskje ikke hadde tenkt over.`,
    },
    {
      id: 'mfl-2-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-4-oppg-1',
        number: '2.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva utløser behovserkjennelse hos forbrukeren?',
        options: [
          { id: 'a', text: 'Bare reklame og markedsføring', isCorrect: false },
          { id: 'b', text: 'En opplevd forskjell mellom nåværende tilstand og ønsket tilstand', isCorrect: true },
          { id: 'c', text: 'Bare indre stimuli som sult og tørst', isCorrect: false },
          { id: 'd', text: 'At produktet er billig nok', isCorrect: false },
        ],
        solution: 'Behovserkjennelse utløses når forbrukeren oppdager en forskjell mellom nåværende tilstand og ønsket tilstand. Dette kan skyldes både indre stimuli (sult, ambisjon) og ytre stimuli (reklame, venners anbefalinger, produktet som slutter å fungere). Det er altså ikke bare reklame som skaper behovserkjennelse.',
      },
    },
    {
      id: 'mfl-2-4-def-2',
      type: 'definition',
      title: 'Trinn 2: Informasjonssøk',
      content: `Når behovet er erkjent, starter forbrukeren å søke etter informasjon om mulige løsninger. Omfanget av søket avhenger av engasjementsnivået.

**Informasjonskilder:**

**Personlige kilder:** Familie, venner, kolleger, naboer. Mest pålitelige.

**Kommersielle kilder:** Reklame, nettsider, selgere, emballasje. Gir mest informasjon.

**Offentlige kilder:** Forbrukertester (f.eks. Forbrukerrådet), medier, anmeldelser. Gir objektiv vurdering.

**Erfaringskilder:** Prøve, ta og føle, teste produktet selv.

**Evoked set (vurderingssettet):**
Av alle tilgjengelige merker og produkter vil forbrukeren bare vurdere et lite utvalg — det såkalte *evoked set*. For markedsførere er det kritisk å være i forbrukerens evoked set. Et merke som ikke en gang vurderes, kan heller ikke velges.

**Eksempel:** Når du tenker «smarttelefon», dukker kanskje Apple, Samsung og Google opp i hodet ditt — det er ditt evoked set. Merkene du ikke tenker på (OnePlus, Motorola) er utenfor og har liten sjanse.`,
    },
    {
      id: 'mfl-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Informasjonssøk — ny TV',
      problem: 'Ahmed vil kjøpe ny TV. Beskriv hvordan han bruker ulike informasjonskilder.',
      solution: `Ahmed bruker flere kilder i sin informasjonssøkprosess:

**Personlige kilder:**
Ahmed spør kompisen sin som er «teknologinerd» om hvilken TV han anbefaler. Kompisen sier: «Gå for Samsung OLED — den beste bildet for prisen.»

**Kommersielle kilder:**
Ahmed besøker Elkjøp.no og Power.no, sammenligner spesifikasjoner og priser. Han ser en Samsung-reklame på YouTube som viser bildekvaliteten.

**Offentlige kilder:**
Han leser en TV-test i Tek.no der Samsung, LG og Sony sammenlignes. Samsung scorer 9/10.

**Erfaringskilder:**
Ahmed drar til Elkjøp-butikken og ser TV-ene i virkeligheten. Han sammenligner bildekvalitet og størrelse fysisk.

**Ahmeds evoked set:** Samsung, LG og Sony. Han vurderer ikke Philips eller Hisense fordi de aldri dukket opp i hans bevissthet.

**For markedsføreren:** Samsung tjener på å være synlige i alle kanalene Ahmed bruker — men den personlige anbefalingen fra kompisen veide kanskje tyngst.`,
    },
    {
      id: 'mfl-2-4-def-3',
      type: 'definition',
      title: 'Trinn 3: Evaluering av alternativer',
      content: `I denne fasen sammenligner forbrukeren alternativene i sitt evoked set basert på **evalueringskriterier** — egenskaper som er viktige for kjøpet.

**Vanlige evalueringskriterier:**
- Pris
- Kvalitet
- Merkevare/rykte
- Funksjoner og egenskaper
- Design/utseende
- Anmeldelser og omtaler
- Tilgjengelighet
- Bærekraft/miljøprofil

**Hvordan vektes kriteriene?**
Forbrukere vektlegger ulike kriterier ulikt. For en student er pris kanskje viktigst, mens for en teknologientusiast er funksjoner og spesifikasjoner viktigere.

**Kompensatorisk vs. ikke-kompensatorisk evaluering:**
- **Kompensatorisk:** En svakhet på ett kriterium kan veies opp av styrke på et annet. (Dyrere, men bedre kvalitet — akseptabelt.)
- **Ikke-kompensatorisk:** Hvis et alternativ bryter med et minimumskrav, avvises det uansett. (Over budsjett → eliminert, uansett kvalitet.)`,
    },
    {
      id: 'mfl-2-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-4-oppg-2',
        number: '2.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «evoked set» i kjøpsprosessen?',
        options: [
          { id: 'a', text: 'Alle merkene som finnes i en produktkategori', isCorrect: false },
          { id: 'b', text: 'De merkene forbrukeren kjenner til og faktisk vurderer ved et kjøp', isCorrect: true },
          { id: 'c', text: 'Merkene som reklamerer mest', isCorrect: false },
          { id: 'd', text: 'De billigste alternativene i markedet', isCorrect: false },
        ],
        solution: 'Evoked set (vurderingssettet) er den lille gruppen merker som forbrukeren faktisk vurderer når de skal kjøpe. Det er ikke alle merker i kategorien, bare de som er i forbrukerens bevissthet og som anses som relevante. For markedsførere er det avgjørende å være i målgruppens evoked set, ellers blir man ikke engang vurdert.',
      },
    },
    {
      id: 'mfl-2-4-def-4',
      type: 'definition',
      title: 'Trinn 4: Kjøpsbeslutning',
      content: `Etter evaluering tar forbrukeren en **kjøpsbeslutning**. Men selv om du har bestemt deg for et alternativ, kan to faktorer endre beslutningen i siste sekund:

**1. Andres holdninger:**
Du har bestemt deg for Samsung-TV-en, men partneren din sier: «LG er bedre — søsteren min har den og er superfornøyd.» Andres meninger kan endre ditt valg rett før kjøpet.

**2. Uventede situasjonsfaktorer:**
- Du mister jobben og har plutselig ikke råd
- Produktet er utsolgt
- Du oppdager et bedre tilbud et annet sted
- Selgeren i butikken er uhøflig, og du forlater butikken

**Kjøpskanalen spiller også en rolle:**
- Fysisk butikk: Mulighet for å se, ta og prøve. Selger kan påvirke.
- Nettbutikk: Enkel sammenligning, anmeldelser, men du kan ikke prøve produktet.
- Sosiale medier: Direkte kjøp via Instagram/TikTok Shop — impulskjøp blir lettere.

**For markedsførere:** Gjør kjøpsprosessen så enkel og friksjonsfri som mulig. Fjern barrierer — tilby enkle retur, trygg betaling og god kundeservice.`,
    },
    {
      id: 'mfl-2-4-example-2',
      type: 'example',
      title: 'Eksempel: Hele kjøpsprosessen — Nora kjøper vinterstøvler',
      content: `**Trinn 1 — Behovserkjennelse:**
Nora (20) merker at de gamle vinterstøvlene lekker. Føttene er våte og kalde. Gapet mellom nåværende tilstand (våte føtter) og ønsket tilstand (tørre, varme føtter) utløser behov.

**Trinn 2 — Informasjonssøk:**
Nora spør venninnen sin (personlig kilde), søker «beste vinterstøvler 2024» på Google (offentlig kilde), og blar gjennom Zalando og XXL (kommersielle kilder). Hun prøver et par i butikken (erfaringskilde). Hennes evoked set: Sorel, Timberland og Viking.

**Trinn 3 — Evaluering av alternativer:**
Noras evalueringskriterier: Vanntetthet (viktigst), pris (maks 2 000 kr), utseende og varme. Sorel: vanntett, 1 899 kr, pen, varm. Timberland: vanntett, 2 399 kr → eliminert (over budsjett, ikke-kompensatorisk). Viking: vanntett, 1 499 kr, ok utseende, varm.

**Trinn 4 — Kjøpsbeslutning:**
Nora bestemmer seg for Sorel, men i kassen får hun opp «Anbefalt for deg: Viking-modell med ekstra fôr, 1 599 kr». Hun ombestemmer seg og velger Viking — bedre pris og ekstra varme.

**Trinn 5 — Etterkjøpsatferd:**
Etter to uker med tørre, varme føtter er Nora fornøyd. Hun legger ut en positiv anmeldelse på Trustpilot og anbefaler Viking til søsteren sin.`,
    },
    {
      id: 'mfl-2-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-4-oppg-3',
        number: '2.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv din egen kjøpsprosess for et nylig kjøp ved hjelp av de fem trinnene: behovserkjennelse, informasjonssøk, evaluering av alternativer, kjøpsbeslutning og etterkjøpsatferd. Hoppet du over noen trinn? Hvorfor/hvorfor ikke?',
        hints: ['Velg gjerne et kjøp der du faktisk brukte tid på å vurdere — ikke et rutinekjøp som melk'],
        solution: 'Et godt svar beskriver alle fem trinn for et konkret kjøp. Eksempel: Kjøp av hodetelefoner. 1) Behovserkjennelse: De gamle sluttet å virke. 2) Informasjonssøk: Leste tester på Tek.no, spurte venner, sjekket priser på Prisjakt. 3) Evaluering: Sammenlignet Sony, Bose og Apple basert på lydkvalitet, pris og komfort. 4) Kjøp: Valgte Sony fordi de hadde best lydkvalitet i min prisklasse. 5) Etterkjøp: Svært fornøyd, anbefaler dem til andre. Reflekterer over om noen trinn ble hoppet over — for eksempel hoppet man kanskje over grundig evaluering fordi en venns anbefaling var nok.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-4-def-5',
      type: 'definition',
      title: 'Trinn 5: Etterkjøpsatferd',
      content: `**Etterkjøpsatferd** er forbrukerens reaksjon etter kjøpet. Er forbrukeren fornøyd eller misfornøyd? Dette trinnet er kritisk for markedsførere fordi det bestemmer om kunden kommer tilbake.

**Kundetilfredshet:**
Tilfredshet = Opplevd ytelse − Forventninger
- Hvis opplevelsen **overgår** forventningene → Svært fornøyd (kan bli lojal kunde og ambassadør)
- Hvis opplevelsen **møter** forventningene → Fornøyd (kan kjøpe igjen)
- Hvis opplevelsen **skuffer** i forhold til forventningene → Misfornøyd (risiko for negativ vareprat)

**Kognitiv dissonans:**
Etter store kjøp kan forbrukeren oppleve usikkerhet: «Valgte jeg riktig?» Dette kalles **kognitiv dissonans** — ubehaget ved å holde motstridende tanker. Forbrukeren søker bekreftelse (leser positive anmeldelser) og unngår informasjon som sår tvil.

**For markedsførere:**
- Send oppfølgingsmail med tips om produktet
- Ha god kundestøtte for spørsmål etter kjøp
- Oppmuntre til anmeldelser fra fornøyde kunder
- Tilby enkel returmulighet for å redusere kjøpsrisiko`,
    },
    {
      id: 'mfl-2-4-example-3',
      type: 'example',
      title: 'Eksempel: Etterkjøpsatferd og Coolblue',
      problem: 'Den nederlandske nettbutikken Coolblue er kjent for eksepsjonell kundeopplevelse etter kjøp. Hvordan reduserer de kognitiv dissonans?',
      solution: `Coolblue bruker flere strategier for å sikre positiv etterkjøpsatferd:

**1. Umiddelbar bekreftelse:**
Etter bestilling mottar kunden en morsom, personlig ordrebekreftelse som forsterker følelsen av at de gjorde et godt valg.

**2. Transparente leveringsoppdateringer:**
Kunden kan følge pakken i sanntid. Forutsigbarhet reduserer usikkerhet.

**3. Enkel installasjon:**
For elektronikk tilbyr de installasjonsservice og detaljerte guider som sikrer at produktet fungerer fra dag én.

**4. Proaktiv oppfølging:**
En uke etter levering sender de en e-post: «Hvordan går det med din nye [produkt]? Trenger du hjelp?»

**5. Super enkel retur:**
30 dagers åpent kjøp uten bry reduserer kjøpsrisikoen og dermed kognitiv dissonans.

**Resultat:** Coolblue har en av Europas høyeste NPS-scorer (Net Promoter Score) fordi de investerer tungt i etterkjøpsopplevelsen. Fornøyde kunder handler igjen og anbefaler til andre.`,
    },
    {
      id: 'mfl-2-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-4-oppg-4',
        number: '2.4.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er kognitiv dissonans i forbrukersammenheng?',
        options: [
          { id: 'a', text: 'At forbrukeren glemmer hva de kjøpte', isCorrect: false },
          { id: 'b', text: 'At forbrukeren opplever ubehag og tvil etter et kjøp — «valgte jeg riktig?»', isCorrect: true },
          { id: 'c', text: 'At forbrukeren alltid er misfornøyd med kjøp', isCorrect: false },
          { id: 'd', text: 'At forbrukeren sammenligner priser etter kjøpet', isCorrect: false },
        ],
        solution: 'Kognitiv dissonans er det psykologiske ubehaget som oppstår når man holder motstridende tanker — for eksempel «jeg kjøpte riktig» og «kanskje det andre var bedre». Det er spesielt vanlig etter store, viktige kjøp. Forbrukeren søker bekreftelse (positive anmeldelser, venners støtte) for å redusere dissonansen.',
      },
    },
    {
      id: 'mfl-2-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-4-oppg-5',
        number: '2.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er markedssjef for en norsk nettbutikk som selger møbler. Lag en plan for hvordan du vil jobbe med etterkjøpsatferd for å øke kundetilfredshet, redusere kognitiv dissonans og skape gjenkjøp. Gi minst fem konkrete tiltak.',
        hints: ['Tenk på hele perioden fra bestilling til måneder etter levering. Hva kan gå galt, og hvordan forebygger du det?'],
        solution: 'En god plan inkluderer: 1) Automatisk ordrebekreftelse med forventet leveringstid og tips til montering. 2) SMS-varsling med sanntidssporing av levering — reduserer usikkerhet. 3) Montasjeguide med video som gjør det lett å sette opp møbelet — sikrer at produktet lever opp til forventningene. 4) Oppfølgingsmail 7 dager etter levering: «Er du fornøyd? Trenger du hjelp?» Viser at bedriften bryr seg. 5) Invitasjon til å legge igjen anmeldelse etter 14 dager — fornøyde kunder bekrefter sitt eget valg ved å skrive positivt. 6) 30 dagers returrett uten spørsmål — reduserer kjøpsrisiko. 7) Personlig anbefaling av tilhørende produkter 30 dager etter kjøp — stimulerer gjenkjøp. 8) Lojalitetsprogram med rabatt på neste kjøp — belønner gjentatte kunder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-4-oppg-6',
        number: '2.4.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig rekkefølge på de fem trinnene i kjøpsprosessen?',
        options: [
          { id: 'a', text: 'Informasjonssøk → Behovserkjennelse → Kjøp → Evaluering → Etterkjøpsatferd', isCorrect: false },
          { id: 'b', text: 'Behovserkjennelse → Informasjonssøk → Evaluering av alternativer → Kjøpsbeslutning → Etterkjøpsatferd', isCorrect: true },
          { id: 'c', text: 'Kjøpsbeslutning → Behovserkjennelse → Informasjonssøk → Evaluering → Etterkjøpsatferd', isCorrect: false },
          { id: 'd', text: 'Behovserkjennelse → Evaluering → Informasjonssøk → Etterkjøpsatferd → Kjøpsbeslutning', isCorrect: false },
        ],
        solution: 'Den korrekte rekkefølgen er: 1) Behovserkjennelse, 2) Informasjonssøk, 3) Evaluering av alternativer, 4) Kjøpsbeslutning, 5) Etterkjøpsatferd. Prosessen starter alltid med at forbrukeren erkjenner et behov, og avsluttes med etterkjøpsopplevelsen. Ved rutinekjøp kan trinn 2 og 3 hoppes over.',
      },
    },
    {
      id: 'mfl-2-4-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-4-oppg-7',
        number: '2.4.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med kompensatorisk og ikke-kompensatorisk evaluering, og gi et eksempel på hver i en situasjon der en forbruker velger mellom tre ulike smarttelefoner.',
        hints: ['Ved kompensatorisk evaluering kan en styrke veie opp for en svakhet. Ved ikke-kompensatorisk eliminerer man alternativer som bryter med et minimumskrav.'],
        solution: 'Kompensatorisk evaluering: Forbrukeren veier styrker og svakheter mot hverandre. Eksempel: Telefon A har best kamera men dårligst batteri, Telefon B har middels kamera men best batteri. Forbrukeren kan velge A fordi kameraet veier opp for svakere batteri. Ikke-kompensatorisk evaluering: Forbrukeren har absolutte minimumskrav. Eksempel: Budsjett maks 8 000 kr. Telefon C koster 12 000 kr og er objektivt best — men den elimineres umiddelbart uansett kvalitet, fordi den er over budsjettet. Ingen annen egenskap kan kompensere for dette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kjøpsprosessen', definition: 'De fem trinnene en forbruker går gjennom ved et kjøp.' },
    { term: 'Behovserkjennelse', definition: 'Forbrukeren oppdager et gap mellom nåværende og ønsket tilstand.' },
    { term: 'Evoked set', definition: 'Den lille gruppen merker forbrukeren faktisk vurderer ved et kjøp.' },
    { term: 'Kognitiv dissonans', definition: 'Ubehag og tvil etter et kjøp — «valgte jeg riktig?»' },
    { term: 'Etterkjøpsatferd', definition: 'Forbrukerens reaksjon etter kjøpet — tilfredshet, klage eller anbefaling.' },
    { term: 'Kompensatorisk evaluering', definition: 'En styrke på ett kriterium kan veie opp for en svakhet på et annet.' },
  ],
};

// ============================================================================
// KAPITTEL 2.5: Digital forbrukeratferd
// ============================================================================

export const CHAPTER_MARKEDSFORING_2_5: TextbookChapter = {
  id: 'markedsforing-2-5',
  courseId: 'markedsforing',
  chapterNumber: '2.5',
  title: 'Digital forbrukeratferd',
  description: 'Netthandel, influencere, sosiale medier, digital kundereise og hvordan teknologi endrer forbrukermønstre.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere forhold som påvirker forbrukeratferd, og reflektere over psykologiske, sosiale og kulturelle faktorer',
  ],
  content: [
    {
      id: 'mfl-2-5-intro',
      type: 'text',
      content: `## Forbrukeren i den digitale tidsalderen

Internett og sosiale medier har fundamentalt endret måten vi handler på. I dag kan du:
- Sammenligne priser på hundrevis av produkter på sekunder (Prisjakt, Kelkoo)
- Lese anmeldelser fra tusenvis av andre kunder (Trustpilot, Google Reviews)
- Få personlige anbefalinger basert på dine tidligere kjøp (Amazon, Netflix)
- Handle fra sofaen klokken 03:00 om natten (Zalando, Komplett)
- Bli inspirert av influencere og kjøpe direkte via sosiale medier

**Norsk netthandel i tall:**
- Over 75 % av nordmenn handler på nett
- Netthandel i Norge omsetter for over 80 milliarder kroner årlig
- Nordmenn er blant de mest digitalt modne forbrukerne i verden
- Mobilen har tatt over som den viktigste handelskanalen for mange

Men digital forbrukeratferd handler om mer enn bare netthandel. Det handler om hvordan digitale verktøy og plattformer påvirker *hele* kjøpsprosessen — fra behovserkjennelse til etterkjøpsatferd.`,
    },
    {
      id: 'mfl-2-5-def-1',
      type: 'definition',
      title: 'Den digitale kundereisen',
      content: `**Den digitale kundereisen** beskriver alle de digitale berøringspunktene en forbruker har med et merke eller produkt — fra første gang de hører om det til etter kjøpet.

**De viktigste berøringspunktene:**

**1. Oppdagelse (Awareness):**
Forbrukeren oppdager produktet gjennom sosiale medier, søkemotorer, reklame eller influencere.

**2. Vurdering (Consideration):**
Forbrukeren søker mer informasjon: Leser anmeldelser, sammenligner priser, ser produktvideoer på YouTube.

**3. Konvertering (Conversion):**
Forbrukeren gjennomfører kjøpet — i nettbutikk, via app eller i fysisk butikk etter digital research.

**4. Lojalitet (Loyalty):**
Etter kjøp: Nyhetsbrev, lojalitetsprogram, personlige tilbud, kundeservice via chat.

**5. Ambassadør (Advocacy):**
Fornøyde kunder deler sin opplevelse — anmeldelser, sosiale medier, vareprat.

**Viktig:** Kundereisen er sjelden lineær. Forbrukere hopper frem og tilbake mellom trinnene, bruker flere kanaler samtidig (omnikanal), og kan bli påvirket av et Instagram-innlegg midt i en Google-søkeprosess.`,
    },
    {
      id: 'mfl-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Emmas digitale kundereise',
      content: `Emma (21) trenger nye treningsklær. Slik ser hennes digitale kundereise ut:

**Oppdagelse (mandag):**
Emma ser en Instagram-reel fra en treningsinfluencer som har på seg et sett fra Gymshark. Hun tenker: «Det ser kult ut!»

**Vurdering (tirsdag–onsdag):**
- Hun søker «Gymshark anmeldelse» på Google og leser en Trustpilot-side
- Hun sjekker Gymshark.no for priser og utvalg
- Hun sammenligner med Nike og Better Bodies på Prisjakt
- Hun ser en YouTube-video: «Gymshark vs Nike — hva er verdt pengene?»
- Hun spør i en trenings-gruppe på Facebook om erfaringer

**Konvertering (torsdag):**
Emma legger varene i handlekurven på Gymshark.no, men fullfører ikke kjøpet (forlater handlekurven). Fredag morgen får hun en e-post: «Du glemte noe! Her er 10 % rabatt.» Hun fullfører kjøpet.

**Lojalitet (uken etter):**
Hun mottar pakken, og Gymshark sender en oppfølgingsmail med trenings-tips og en oppfordring om å dele bilder med #Gymshark.

**Ambassadør:**
Emma legger ut et bilde i det nye treningssettet på Instagram og tagger @Gymshark. Venninnene hennes spør hvor hun kjøpte det.`,
    },
    {
      id: 'mfl-2-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-5-oppg-1',
        number: '2.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva beskriver den digitale kundereisen?',
        options: [
          { id: 'a', text: 'Bare selve netthandelen — fra handlekurv til betaling', isCorrect: false },
          { id: 'b', text: 'Alle digitale berøringspunkter mellom forbruker og merke — fra oppdagelse til ambassadør', isCorrect: true },
          { id: 'c', text: 'Hvordan en bedrift lager en nettside', isCorrect: false },
          { id: 'd', text: 'Antall klikk det tar å fullføre et kjøp', isCorrect: false },
        ],
        solution: 'Den digitale kundereisen omfatter alle digitale berøringspunkter mellom forbrukeren og merket — fra første oppdagelse (f.eks. en Instagram-annonse) gjennom vurdering og kjøp, til lojalitet og ambassadøratferd. Det handler altså om mye mer enn bare selve transaksjonen.',
      },
    },
    {
      id: 'mfl-2-5-def-2',
      type: 'definition',
      title: 'Influencermarkedsføring',
      content: `**Influencermarkedsføring** er en form for markedsføring der bedrifter samarbeider med personer som har stor påvirkningskraft i sosiale medier for å nå målgruppen.

**Typer influencere:**
- **Mega-influencere** (1M+ følgere): Kjendiser og store profiler. Stor rekkevidde, men lavere troverdighet.
- **Makro-influencere** (100K–1M): Etablerte innholdsskapere. God balanse mellom rekkevidde og engasjement.
- **Mikro-influencere** (10K–100K): Nisjeprofilerte. Høy troverdighet og engasjement i sin målgruppe.
- **Nano-influencere** (1K–10K): «Vanlige folk» med liten men engasjert følgerskare. Høyest troverdighet.

**Hvorfor fungerer influencermarkedsføring?**
- Influencere fungerer som **opinionsledere** i referansegrupper
- Anbefalinger oppleves som mer **autentiske** enn tradisjonell reklame
- Forbrukere har høyere tillit til «vanlige mennesker» enn til merkevarers egne budskap
- Influencere når spesifikke **nisjer og subkulturer** effektivt

**Lovkrav i Norge:**
Markedsføringsloven krever at all reklame skal være merket. Influencere må tydelig merke betalte samarbeid med «annonse» eller «betalt samarbeid». Forbrukertilsynet håndhever dette aktivt.`,
    },
    {
      id: 'mfl-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Influencermarkedsføring — «Syng med Therese»',
      problem: 'Hvordan kan et norsk kosttilskudd-merke bruke influencermarkedsføring effektivt og lovlig?',
      solution: `**Scenario:** Merket «NorVital» vil lansere et nytt D-vitamin-tilskudd for unge voksne.

**Strategi:**
I stedet for å bruke én mega-influencer, velger NorVital å samarbeide med 10 mikro-influencere innen helse/trening med 15 000–50 000 følgere hver.

**Hvorfor mikro-influencere?**
- Høyere engasjementsrate (5–7 %) sammenlignet med mega (1–2 %)
- Mer troverdige i helsesegmentet — følgerne stoler på dem
- Billigere per samarbeid — budsjettet strekker til flere profiler
- Treffer nisjemålgruppen (helseinteresserte 20–35 år) presist

**Gjennomføring:**
- Influencerne mottar produktet og lager innhold med personlig vinkling
- Alle innlegg merkes tydelig med «Betalt samarbeid med NorVital» (lovkrav)
- Influencerne deler en personlig rabattkode (sporbar)
- Innholdet repurposeres som betalt annonsering via Meta Ads

**Resultat:** Kampanjen gir sporbar salgseffekt og bygger troverdighet i målgruppen — uten å bryte markedsføringsloven.`,
    },
    {
      id: 'mfl-2-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-5-oppg-2',
        number: '2.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor har mikro-influencere (10K–100K følgere) ofte høyere engasjementsrate enn mega-influencere?',
        options: [
          { id: 'a', text: 'Fordi de legger ut oftere', isCorrect: false },
          { id: 'b', text: 'Fordi de har en tettere og mer personlig relasjon til følgerne sine, noe som gir høyere troverdighet', isCorrect: true },
          { id: 'c', text: 'Fordi algoritmene favoriserer dem', isCorrect: false },
          { id: 'd', text: 'Fordi de bruker bedre hashtags', isCorrect: false },
        ],
        solution: 'Mikro-influencere har typisk en tettere og mer personlig relasjon til følgerne sine. De svarer på kommentarer, deler mer autentisk innhold og oppleves som «en av oss» i stedet for en fjern kjendis. Denne nærheten gir høyere troverdighet og dermed høyere engasjementsrate. Studier viser at engasjementsraten ofte synker jo flere følgere en influencer har.',
      },
    },
    {
      id: 'mfl-2-5-def-3',
      type: 'definition',
      title: 'Sosiale mediers påvirkning på forbrukeratferd',
      content: `Sosiale medier har endret forbrukeratferd på flere måter:

**1. Sosial bevisføring (Social proof)**
Forbrukere ser på hva andre gjør for å ta egne beslutninger. Anmeldelser, likes, delinger og «1 243 har kjøpt dette» er alle former for sosial bevisføring.

**2. FOMO (Fear of Missing Out)**
Frykten for å gå glipp av noe. «Kun 3 igjen på lager!» eller «Tilbudet utløper om 2 timer!» utnytter FOMO for å skape hastegevir.

**3. Sammenligning og aspirasjon**
Sosiale medier viser konstant andre menneskers livsstil, noe som stimulerer ønsker og forbruk. Du ser vennens nye kjøkken på Instagram og tenker: «Kanskje vi også bør pusse opp?»

**4. Brukergenerert innhold (UGC)**
Innhold laget av kunder selv — unboxing-videoer, anmeldelser, bilder med produktet. UGC oppfattes som mer troverdig enn bedriftens egen reklame.

**5. Direkte handel (Social commerce)**
Muligheten til å kjøpe direkte via Instagram Shop, TikTok Shop eller Facebook Marketplace — uten å forlate plattformen. Reduserer friksjon mellom inspirasjon og kjøp.`,
    },
    {
      id: 'mfl-2-5-example-3',
      type: 'example',
      title: 'Eksempel: FOMO og digital forbrukeratferd',
      content: `**Black Friday på Komplett.no:**

Komplett.no bruker flere psykologiske virkemidler under Black Friday:

**FOMO-teknikker:**
- «Kun 12 stk. igjen!» — skaper hastegevir
- Nedtellingsklokke: «Tilbudet utløper om 01:34:22» — tidsbegrensning
- «347 personer ser på dette produktet nå» — sosial bevisføring
- «Bestselger — 2 000+ solgt i dag» — flokkatferd

**Resultat for forbrukeren:**
- Mange opplever stress og hastverkfølelse
- Impulskjøp øker dramatisk
- Forbrukere kjøper ting de ikke planla å kjøpe
- Etterkjøps-anger er vanlig etter Black Friday

**Kritisk refleksjon:**
Er dette etisk markedsføring? FOMO-teknikker utnytter psykologiske svakheter. Forbrukertilsynet har advart mot villedende «begrensede tilbud» der varen egentlig ikke er begrenset. Det er en balansegang mellom effektiv markedsføring og manipulasjon.

**Lærdom for markedsførere:** Bruk FOMO forsiktig. Kortsiktig salgsøkning kan gi langsiktig tillitssvekkelse hvis kundene føler seg lurt.`,
    },
    {
      id: 'mfl-2-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-5-oppg-3',
        number: '2.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv din egen digitale kundereise for et nylig kjøp. Hvilke digitale berøringspunkter hadde du med merket/butikken? Bruk de fem fasene: oppdagelse, vurdering, konvertering, lojalitet og ambassadør.',
        hints: ['Tenk på alle de digitale kanalene du brukte — Google, sosiale medier, nettbutikk, e-post, anmeldelser'],
        solution: 'Et godt svar beskriver en konkret digital kundereise. Eksempel: Kjøp av treningsmat. Oppdagelse: Så en TikTok-video om Myprotein. Vurdering: Søkte på Google etter anmeldelser, sjekket pris på Prisjakt, leste Trustpilot. Konvertering: Bestilte på Myprotein.no etter å ha mottatt en velkomstrabatt på e-post. Lojalitet: Mottar ukentlige nyhetsbrev med trenings-tips og tilbud, har lastet ned appen. Ambassadør: Delte en Instagram-story med produktet og anbefalte det til en treningskamerat. Refleksjonen bør vise bevissthet om at kundereisen ikke var lineær — man hoppet kanskje frem og tilbake mellom kanalene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-5-def-4',
      type: 'definition',
      title: 'Netthandel og omnikanal',
      content: `**Netthandel (e-handel)** er kjøp og salg av varer og tjenester over internett. Men i dag handler det ikke om enten nett *eller* butikk — det handler om **omnikanal**.

**Omnikanal** betyr at kunden kan bevege seg sømløst mellom digitale og fysiske kanaler:
- Søke på nett → prøve i butikk → kjøpe på nett (*webrooming*)
- Se i butikk → sammenligne priser på mobilen → kjøpe billigere online (*showrooming*)
- Bestille på nett → hente i butikk (*click & collect*)
- Kjøpe i butikk → få kvittering og oppfølging digitalt

**Utfordringer for bedrifter:**
- Konsistent opplevelse på tvers av kanaler
- Samme pris online og i butikk (ellers mister fysisk butikk salg)
- Integrasjon av lagersystemer mellom nett og butikk
- Personalisering basert på kundedata fra alle kanaler

**Eksempler i Norge:**
- Elkjøp: Sterk omnikanal-strategi med click & collect, nettbutikk og fysiske butikker
- XXL: Sjekk lagerstatus i nærmeste butikk online, bestill og hent gratis
- IKEA: Planlegg kjøkken digitalt, besøk utstilling fysisk, bestill levering online`,
    },
    {
      id: 'mfl-2-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-5-oppg-4',
        number: '2.5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «showrooming»?',
        options: [
          { id: 'a', text: 'Å vise frem produkter i et utstillingsvindu', isCorrect: false },
          { id: 'b', text: 'Å se og prøve produkter i fysisk butikk, men kjøpe billigere på nett', isCorrect: true },
          { id: 'c', text: 'Å bestille på nett og hente i butikk', isCorrect: false },
          { id: 'd', text: 'Å streame en live shopping-event', isCorrect: false },
        ],
        solution: 'Showrooming er når forbrukere bruker fysiske butikker som «utstillingslokale» — de ser, tar og prøver produkter i butikken, men kjøper dem billigere i en nettbutikk. Dette er en stor utfordring for fysiske butikker og en viktig grunn til at mange forhandlere nå satser på omnikanal-strategi med prisgaranti på tvers av kanaler.',
      },
    },
    {
      id: 'mfl-2-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-5-oppg-5',
        number: '2.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter: Er influencermarkedsføring en positiv eller negativ utvikling for forbrukerne? Ta stilling til påstanden og begrunn svaret med eksempler. Drøft også det etiske aspektet med tanke på unge forbrukere.',
        hints: ['Tenk på troverdighet, merking av reklame, påvirkning på selvbilde og forbruksmønstre, og forskjellen mellom informasjon og manipulasjon'],
        solution: 'Et godt svar drøfter begge sider balansert. Positive sider: Influencere gir ærlige anmeldelser og produktanbefalinger, de representerer «vanlige folk» i stedet for modeller, de kan gi verdifull informasjon i nisjer, og de gjør markedsføring mer relevant og personlig. Negative sider: Skillet mellom ekte anbefaling og betalt reklame er uklart for mange, unge forbrukere er spesielt påvirkelige, det kan skape urealistiske forventninger til livsstil og forbruk, og noen influencere promoterer useriøse produkter. Etisk aspekt: Markedsføringsloven krever merking av reklame, men mange unge forstår ikke forskjellen mellom betalt og ekte anbefaling. Forbrukertilsynet har skjerpet kontrollen. Konklusjonen bør vise at influencermarkedsføring kan være positivt når det gjøres åpent og ærlig, men problematisk når grensene mellom innhold og reklame viskes ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-2-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-2-5-oppg-6',
        number: '2.5.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er «sosial bevisføring» (social proof) i digital markedsføring?',
        options: [
          { id: 'a', text: 'At bedriften beviser at produktet er bra gjennom labtester', isCorrect: false },
          { id: 'b', text: 'At forbrukere ser på hva andre gjør (anmeldelser, likes, kjøpstall) for å ta egne beslutninger', isCorrect: true },
          { id: 'c', text: 'At sosiale medier kontrollerer hva du ser', isCorrect: false },
          { id: 'd', text: 'At staten godkjenner reklame på sosiale medier', isCorrect: false },
        ],
        solution: 'Sosial bevisføring (social proof) er det psykologiske fenomenet der folk ser på andres atferd for å avgjøre hva som er riktig. I digital markedsføring brukes dette aktivt: «4,8/5 stjerner basert på 2 340 anmeldelser», «1 243 har kjøpt dette i dag», eller «Anbefalt av 95 % av våre kunder». Det gir forbrukeren trygghet for at de gjør et godt valg.',
      },
    },
    {
      id: 'mfl-2-5-note-1',
      type: 'note',
      title: 'Oppsummering: Forbrukeratferd i den digitale tidsalderen',
      content: `**Nøkkelpunkter fra denne seksjonen:**

Forbrukeratferd påvirkes av psykologiske, sosiale, kulturelle og situasjonelle faktorer. I den digitale tidsalderen har teknologi tilført nye dimensjoner:

- **Kjøpsprosessen** er blitt mer kompleks og ikke-lineær — forbrukere hopper mellom kanaler og faser
- **Informasjonssøket** er mer omfattende — forbrukere har tilgang til uendelig informasjon
- **Sosiale medier** har forsterket referansegruppens påvirkning gjennom influencere og sosial bevisføring
- **FOMO** og digitale virkemidler skaper nye former for impulsatferd
- **Omnikanal** krever at bedrifter tenker helhetlig om kundeopplevelsen
- **Etikk** er viktigere enn noen gang — grensen mellom påvirkning og manipulasjon må respekteres

For å lykkes med markedsføring i dag må man forstå *hele* den digitale kundereisen og møte forbrukeren med riktig budskap, i riktig kanal, til riktig tid.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Digital kundereise', definition: 'Alle digitale berøringspunkter mellom forbruker og merke fra oppdagelse til ambassadør.' },
    { term: 'Influencermarkedsføring', definition: 'Markedsføring gjennom personer med stor påvirkningskraft i sosiale medier.' },
    { term: 'Sosial bevisføring', definition: 'Psykologisk fenomen der folk ser på andres atferd for å ta egne beslutninger.' },
    { term: 'FOMO', definition: 'Fear of Missing Out — frykten for å gå glipp av noe.' },
    { term: 'Omnikanal', definition: 'Sømløs kundeopplevelse på tvers av digitale og fysiske kanaler.' },
    { term: 'Showrooming', definition: 'Å prøve produkter i butikk men kjøpe billigere på nett.' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const MARKEDSFORING_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MARKEDSFORING_2_1,
  CHAPTER_MARKEDSFORING_2_2,
  CHAPTER_MARKEDSFORING_2_3,
  CHAPTER_MARKEDSFORING_2_4,
  CHAPTER_MARKEDSFORING_2_5,
];
