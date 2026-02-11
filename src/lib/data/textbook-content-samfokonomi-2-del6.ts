/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 2 (VG3 programfag) - Del 6: Miljøøkonomi og bærekraft
 *
 * Dekker LK20-kompetansemål:
 * - vurdere økonomisk bærekraft
 * - analysere hvordan markedssvikt og eksterne virkninger påvirker ressursbruk og miljø
 * - drøfte virkemidler for å fremme bærekraftig utvikling
 *
 * Kapittel 6.1–6.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Markedssvikt og eksterne virkninger
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6_1: TextbookChapter = {
  id: 'samfokonomi-2-6-1',
  courseId: 'samfokonomi-2',
  chapterNumber: '6.1',
  title: 'Markedssvikt og eksterne virkninger',
  description: 'Eksternaliteter, Pigou-skatt og markedssvikt som grunnlag for miljopolitikk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere okonomisk barekraft',
    'analysere hvordan markedssvikt og eksterne virkninger pavirker ressursbruk og miljo',
  ],
  content: [
    {
      id: 'sf2-6-1-intro',
      type: 'text',
      content: `# Markedssvikt og eksterne virkninger

I en perfekt fungerende markedsokonomi vil prisene gjenspeile alle kostnader og all nytte ved produksjon og forbruk. I praksis er det imidlertid mange situasjoner der markedet ikke klarer a inkludere alle relevante kostnader i prisen. Nar en fabrikk slipper ut forurensning som skader naboenes helse, betaler ikke fabrikken for denne skaden. Kostnaden veltes over pa andre.

Slike eksterne virkninger er en form for markedssvikt og et sentralt begrep i miljookonomien. Nar markedet svikter, kan det vare nodvendig med offentlige inngrep for a sikre at ressursene brukes pa en samfunnsokonomisk effektiv mate. I dette kapittelet ser vi pa hva eksternaliteter er, hvorfor de oppstar, og hvordan Pigou-skatt kan korrigere markedssvikten.`,
    },
    {
      id: 'sf2-6-1-def-markedssvikt',
      type: 'definition',
      title: 'Markedssvikt',
      content: `**Markedssvikt** oppstar nar det frie markedet ikke klarer a fordele ressursene pa en samfunnsokonomisk effektiv mate. Markedsprisen gjenspeiler ikke den sanne samfunnsokonomiske kostnaden eller nytten.

**Viktige former for markedssvikt:**
- **Eksterne virkninger (eksternaliteter):** Kostnader eller nytte som pavirker tredjeparter uten a bli reflektert i prisen.
- **Kollektive goder:** Goder som er ikke-rivaliserende og ikke-ekskluderbare, for eksempel rent miljo eller nasjonalt forsvar.
- **Ufullkommen informasjon:** Aktorer mangler relevant informasjon til a ta optimale valg.
- **Markedsmakt:** Monopoler eller oligopoler som begrenser konkurransen.

I miljookonomien er eksterne virkninger den viktigste formen for markedssvikt. Nar forurensning er gratis, vil bedrifter forurense mer enn det som er samfunnsokonomisk optimalt.`,
    },
    {
      id: 'sf2-6-1-def-eksternalitet',
      type: 'definition',
      title: 'Eksternaliteter',
      content: `**Eksternaliteter** (eksterne virkninger) er kostnader eller nytte som oppstar som folge av en okonomisk aktivitet, men som ikke bares av den som utforer aktiviteten. De pavirker tredjeparter uten at dette gjenspeiles i markedsprisen.

**Negative eksternaliteter (eksterne kostnader):**
- Forurensning fra fabrikker som skader naboers helse
- CO₂-utslipp som bidrar til klimaendringer
- Stoy fra flytrafikk som reduserer livskvaliteten for naboer
- Overfiske som truer fiskebestander

**Positive eksternaliteter (ekstern nytte):**
- Vaksinering som beskytter ogsa de som ikke er vaksinert (flokkimmunitet)
- Utdanning som gir gevinster for hele samfunnet
- Forskning og utvikling som skaper kunnskap andre kan bruke
- Birrokt som pollinerer naboens frukttrar

**Samfunnsokonomisk konsekvens:**
- Ved negative eksternaliteter produseres det **for mye** av varen fordi den private kostnaden er lavere enn den samfunnsokonomiske.
- Ved positive eksternaliteter produseres det **for lite** fordi den private nytten er lavere enn den samfunnsokonomiske.`,
    },
    {
      id: 'sf2-6-1-example-eksternalitet',
      type: 'example',
      title: 'Eksempel: Negativ eksternalitet fra forurensning',
      problem: 'En fabrikk produserer stalprodukter og slipper ut svoveldioksid (SO₂) som forarsakar luftforurensning i nabolaget. Produksjonskostnaden per tonn stal er 5 000 kr, men forurensningen paforerer en helsekostnad pa 1 200 kr per tonn for innbyggerne. Markedsprisen pa stal er 6 000 kr per tonn. Forklar markedssvikten.',
      solution: `**Privat kostnad:** 5 000 kr per tonn (det fabrikken betaler).
**Ekstern kostnad:** 1 200 kr per tonn (helsekostnader for nabolaget).
**Samfunnsokonomisk kostnad:** 5 000 + 1 200 = 6 200 kr per tonn.

**Markedssvikten:**
- Fabrikken sammenligner privat kostnad (5 000 kr) med markedsprisen (6 000 kr) og finner det lonnsomt a produsere (fortjeneste 1 000 kr per tonn).
- Men den samfunnsokonomiske kostnaden (6 200 kr) er hoyere enn markedsprisen (6 000 kr). Produksjonen er altsa samfunnsokonomisk ulonnsom med et tap pa 200 kr per tonn.
- Fabrikken produserer for mye fordi den slipper a betale for forurensningsskadene.

**Losning:** Dersom fabrikken ble palagt a betale en avgift pa 1 200 kr per tonn (en Pigou-skatt), ville den private kostnaden bli lik den samfunnsokonomiske kostnaden. Fabrikken ville da redusere produksjonen til det samfunnsokonomisk optimale nivaet.`,
    },
    {
      id: 'sf2-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-1-ex-1',
        number: '6.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en negativ eksternalitet?',
        multipleChoiceOptions: [
          'En kostnad som pavirker tredjeparter uten a bli reflektert i markedsprisen',
          'En kostnad som bedriften selv barer ved produksjonen',
          'Et tap som oppstar nar ettersporselen faller',
          'En skatt som staten palegger bedrifter',
        ],
        hints: ['Tenk pa hva som skjer nar en fabrikk forurenser uten a betale for det.'],
        solution: 'En negativ eksternalitet er en kostnad som pavirker tredjeparter (for eksempel naboer, miljoet) uten at denne kostnaden blir reflektert i markedsprisen pa varen. Eksempler er forurensning, stoy og klimagassutslipp. Markedet svikter fordi produsenten ikke tar hensyn til de fulle kostnadene aktiviteten paforerer samfunnet.',
      },
    },
    {
      id: 'sf2-6-1-def-pigou',
      type: 'definition',
      title: 'Pigou-skatt',
      content: `**Pigou-skatt** (oppkalt etter okonomen Arthur Pigou) er en avgift som legges pa aktiviteter med negative eksternaliteter, slik at den private kostnaden blir lik den samfunnsokonomiske kostnaden.

**Prinsippet:**
- Avgiften settes lik den marginale eksterne kostnaden ved optimalt produksjonsniva.
- Produsenten internaliserer eksternaliteten - kostnaden flyttes fra tredjeparter til produsenten.
- Markedsprisen oker og produksjonen synker til det samfunnsokonomisk optimale nivaet.

**Matematisk:**
$$\\text{Pigou-skatt} = \\text{Marginal ekstern kostnad ved optimalt niva}$$

**Eksempler pa Pigou-lignende avgifter:**
- CO₂-avgift pa fossilt drivstoff
- Avgift pa sukkerholdig drikke
- Avgift pa plastposer
- Veiprising i rushtrafikken

**Fordeler:** Kostnadseffektivt (bedriftene med lavest rensekostnad reduserer mest), gir insentiver til innovasjon, og genererer inntekter til staten.

**Ulemper:** Krever presise data om de eksterne kostnadene, som ofte er vanskelige a beregne.`,
    },
    {
      id: 'sf2-6-1-example-pigou',
      type: 'example',
      title: 'Eksempel: CO₂-avgiften som Pigou-skatt',
      problem: 'Norges CO₂-avgift pa fossilt drivstoff er et eksempel pa en Pigou-skatt. Forklar hvordan denne avgiften virker og hvorfor den regnes som et effektivt virkemiddel.',
      solution: `**Hvordan CO₂-avgiften virker:**
- Avgiften legges pa utslipp av CO₂ fra forbrenning av fossilt drivstoff (bensin, diesel, gass).
- I Norge er CO₂-avgiften pa petroleumssektoren blant de hoyeste i verden.
- Avgiften oker prisen pa fossilt drivstoff, slik at forbrukere og bedrifter tar hensyn til klimakostnaden.

**Hvorfor den er effektiv:**
1. **Internalisering:** Utslippskostnaden, som ellers ville vart en eksternalitet, innlemmes i prisen.
2. **Kostnadseffektivitet:** De som har lavest kostnad ved a redusere utslipp, gjor det forst. Det gir storst utslippsreduksjon per krone.
3. **Innovasjonsinsentiv:** Avgiften gjor det lonnsomt a investere i renere teknologi.
4. **Inntekter:** Staten kan bruke inntektene til a finansiere gronn omstilling eller redusere andre skatter.

**Utfordring:** Det er vanskelig a fastsette riktig avgiftsniva fordi klimakostnaden per tonn CO₂ er usikker. Estimatene varierer fra noen hundre til flere tusen kroner per tonn, avhengig av hvilke modeller som brukes.`,
    },
    {
      id: 'sf2-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-1-ex-2',
        number: '6.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hensikten med en Pigou-skatt?',
        multipleChoiceOptions: [
          'A gjore den private kostnaden lik den samfunnsokonomiske kostnaden, slik at markedet tar hensyn til eksternaliteter',
          'A maksimere statens skatteinntekter fra forurensende bedrifter',
          'A straffe bedrifter for all produksjon som forurenser',
          'A eliminere all forurensning i samfunnet',
        ],
        hints: ['Tenk pa hva som skjer nar produsenten ma betale for de eksterne kostnadene.'],
        solution: 'Hensikten med en Pigou-skatt er a internalisere eksternaliteten - det vil si a gjore den private kostnaden lik den samfunnsokonomiske kostnaden. Nar produsenten ma betale for forurensningen, vil markedsprisen gjenspeile den sanne kostnaden, og produksjonen justeres til det samfunnsokonomisk optimale nivaet. Malet er ikke a eliminere all forurensning, men a sikre at den forurensningen som skjer, er samfunnsokonomisk forsvarlig.',
      },
    },
    {
      id: 'sf2-6-1-text-coase',
      type: 'text',
      title: 'Coase-teoremet og alternative losninger',
      content: `## Coase-teoremet og alternative losninger

Okonomen Ronald Coase papekte at eksternaliteter ogsa kan loses gjennom private forhandlinger, uten statlig inngrep, dersom visse betingelser er oppfylt.

**Coase-teoremet:** Hvis eiendomsrettighetene er klart definerte og transaksjonskostnadene er lave, vil de berarte partene forhandle seg fram til en samfunnsokonomisk effektiv losning, uavhengig av hvem som har rettigheten.

**Eksempel:** En fabrikk forurenser en elv som en fisker bruker. Hvis fiskeren har rett til rent vann, kan fabrikken betale fiskeren for a akseptere noe forurensning. Hvis fabrikken har rett til a forurense, kan fiskeren betale fabrikken for a redusere utslippene. I begge tilfeller ender man (i teorien) pa samme, optimale niva av forurensning.

**Begrensninger i praksis:**
- Transaksjonskostnadene er ofte hoye (mange berarte parter, vanskelige forhandlinger).
- Eiendomsrettighetene er uklare (hvem eier retten til ren luft?).
- Klimaproblemet involverer milliarder av mennesker globalt - forhandling er umulig.
- Maktforskjeller mellom partene kan fore til urettferdige utfall.

Derfor er Pigou-skatter og offentlig regulering vanligvis nodvendig for store miljoproblemer, mens Coase-losninger kan fungere for lokale, avgrensede konflikter.`,
    },
    {
      id: 'sf2-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-1-ex-3',
        number: '6.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom privat kostnad og samfunnsokonomisk kostnad ved en negativ eksternalitet. Bruk et konkret eksempel til a illustrere hvordan dette forer til markedssvikt.',
        hints: [
          'Tenk pa et eksempel der produksjonen paforerer kostnader pa tredjeparter.',
          'Vis hvordan det frie markedet forer til for hoy produksjon.',
        ],
        solution: 'Den private kostnaden er det produsenten selv betaler for a produsere (ravarar, lonn, energi). Den samfunnsokonomiske kostnaden inkluderer i tillegg de eksterne kostnadene som paforeres tredjeparter. Eksempel: En sementfabrikk har en privat produksjonskostnad pa 800 kr per tonn. Stovutslippene forarsakar helseplager for naboene tilsvarende 200 kr per tonn. Samfunnsokonomisk kostnad er da 1 000 kr per tonn. Markedet priser bare den private kostnaden, sa fabrikken produserer mer enn det som er optimalt for samfunnet. Markedssvikten bestar i at prisen er for lav og produksjonen for hoy fordi miljokostnaden ikke er inkludert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-1-ex-4',
        number: '6.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for hvordan en Pigou-skatt kan korrigere en negativ eksternalitet. Bruk gjerne et talleksempel for a vise hvordan avgiften endrer produksjonsnivaet.',
        hints: [
          'Sett opp et eksempel med privat kostnad, ekstern kostnad og markedspris.',
          'Vis hva som skjer for og etter avgiften innfores.',
        ],
        solution: 'En Pigou-skatt settes lik den marginale eksterne kostnaden ved det samfunnsokonomisk optimale produksjonsnivaet. Eksempel: En bedrift har en privat marginalkostnad pa 400 kr per enhet og paforerer en ekstern kostnad (forurensning) pa 100 kr per enhet. Markedsprisen er 500 kr. Uten avgift produserer bedriften inntil privat marginalkostnad = pris, altsa ved 400 = 500. Overskudd 100 kr per enhet. Men samfunnsokonomisk kostnad er 500 kr, sa optimalt produksjonsniva er der 500 = 500. Med en Pigou-skatt pa 100 kr blir bedriftens kostnad 400 + 100 = 500 kr. Na produserer bedriften bare nar prisen dekker den fulle kostnaden. Resultatet er at produksjonen reduseres til det samfunnsokonomisk optimale nivaet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Markedssvikt og eksterne virkninger

- **Markedssvikt** oppstar nar det frie markedet ikke fordeler ressursene effektivt.
- **Eksternaliteter** er kostnader eller nytte som pavirker tredjeparter uten a bli reflektert i markedsprisen.
- Ved negative eksternaliteter produseres det **for mye** fordi den private kostnaden er lavere enn den samfunnsokonomiske.
- **Pigou-skatt** internaliserer eksternaliteten ved a sette avgiften lik den marginale eksterne kostnaden.
- **Coase-teoremet** viser at private forhandlinger kan lose eksternaliteter under ideelle forhold, men i praksis kreves offentlige inngrep for store miljoproblemer.`,
    },
    {
      id: 'sf2-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-1-ex-5',
        number: '6.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Coase-teoremet sier at private forhandlinger kan lose eksternalitetsproblemer uten statlig inngrep. Droft hvorfor denne losningen sjelden fungerer for store miljoproblemer som klimaendringer, og vurder hva dette innebarer for behovet for offentlig politikk.',
        hints: [
          'Tenk pa betingelsene for at Coase-teoremet skal gjelde.',
          'Vurder utfordringene nar milioner av mennesker er involvert.',
        ],
        solution: 'Coase-teoremet forutsetter klare eiendomsrettigheter og lave transaksjonskostnader. For klimaendringer feiler begge: Ingen eier atmosfaren, og forhandlinger mellom milliarder av mennesker er umulig. I tillegg er informasjonen asymmetrisk, maktforholdene ulike, og virkningene strekker seg over generasjoner. Derfor kreves offentlige inngrep som CO₂-avgifter, kvotesystemer og internasjonale avtaler. Coase-teoremet er likevel verdifullt som tankeverktoy: det viser at problemet er manglende eiendomsrettigheter, og at kvotesystemer (der man tildeler utslippsrettigheter) kan ses som en praktisk tilnaerming til Coase-losningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-1-ex-6',
        number: '6.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gi eksempler pa bade negative og positive eksternaliteter. Droft hvorfor positive eksternaliteter ogsa representerer en markedssvikt, og foreslå tiltak som kan korrigere bade negative og positive eksternaliteter.',
        hints: [
          'Tenk pa symmetrien: for lite av det gode og for mye av det darlige.',
          'Vurder hvilke virkemidler som passer for ulike typer eksternaliteter.',
        ],
        solution: 'Negative eksternaliteter: forurensning, klimagassutslipp, stoy. Positive eksternaliteter: vaksinering (flokkimmunitet), utdanning (produktivitet for samfunnet), forskning (kunnskap som sprer seg). Positive eksternaliteter er ogsa markedssvikt fordi det produseres for lite: den private nytten er lavere enn den samfunnsokonomiske, sa individer investerer for lite i aktiviteten. Tiltak mot negative eksternaliteter: Pigou-skatter, kvotehandel, regulering. Tiltak for positive eksternaliteter: subsidier (gjor aktiviteten billigere), offentlig finansiering (gratis utdanning, forskningsmidler), patentbeskyttelse (gir forskereinsentiver). Prinsippet er det samme: a bringe den private kostnaden/nytten i samsvar med den samfunnsokonomiske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2: Miljøpolitiske virkemidler
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6_2: TextbookChapter = {
  id: 'samfokonomi-2-6-2',
  courseId: 'samfokonomi-2',
  chapterNumber: '6.2',
  title: 'Miljopolitiske virkemidler',
  description: 'Avgifter, kvoter, subsidier og regulering som virkemidler i miljopolitikken.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere okonomisk barekraft',
    'drofte virkemidler for a fremme barekraftig utvikling',
  ],
  content: [
    {
      id: 'sf2-6-2-intro',
      type: 'text',
      content: `# Miljopolitiske virkemidler

Nar markedet svikter og eksternaliteter forer til overforbruk av miljoressurser, har myndighetene flere virkemidler tilgjengelig for a korrigere situasjonen. De viktigste kategoriene er okonomiske virkemidler (avgifter og kvoter), direkte regulering (palud og forbud) og subsidier til onsket atferd.

Valget av virkemiddel avhenger av flere faktorer: kostnadseffektivitet, politisk gjennomforbarhet, fordelingsvirkninger og evnen til a fremme innovasjon. I dette kapittelet analyserer vi de viktigste virkemidlene og sammenligner deres styrker og svakheter.`,
    },
    {
      id: 'sf2-6-2-def-avgift',
      type: 'definition',
      title: 'Miljoavgifter',
      content: `**Miljoavgifter** er skatter og avgifter som legges pa miljosakadelig aktivitet for a gjore den dyrere og dermed redusere omfanget. De er en form for prisstyrt regulering.

**Typer miljoavgifter:**
- **Utslippsavgift:** Avgift per enhet utslipp (f.eks. kr per tonn CO₂)
- **Produktavgift:** Avgift pa produkter som forarsakar forurensning (f.eks. bensin, plast)
- **Ressursavgift:** Avgift pa utvinning av naturressurser

**Fordeler:**
- **Kostnadseffektivt:** Bedrifter med lav rensekostnad reduserer utslippene mest; de med hoy rensekostnad betaler avgiften. Samlet oppnas utslippsmalet til lavest mulig kostnad.
- **Innovasjonsinsentiv:** Det blir lonnsomt a utvikle renere teknologi.
- **Inntekter:** Avgiftsinntektene kan brukes til a redusere andre skatter eller finansiere gronn omstilling.
- **Forutsigbarhet i pris:** Bedriftene vet noyaktig hva utslippene koster.

**Ulemper:**
- **Usikkerhet i utslippsmengde:** Man vet ikke pa forhand noyaktig hvor mye utslippene vil synke.
- **Vanskelig a fastsette riktig niva:** Krever god informasjon om skadevirkninger og rensekostnader.
- **Fordelingsvirkninger:** Kan ramme lavinntektsgrupper uforholdsmessig hardt.`,
    },
    {
      id: 'sf2-6-2-def-kvote',
      type: 'definition',
      title: 'Omsettelige utslippskvoter',
      content: `**Omsettelige utslippskvoter** (kvotehandel, cap-and-trade) er et system der myndighetene setter et tak pa samlede utslipp og fordeler utslippstillatelser (kvoter) som bedriftene kan handle med seg imellom.

**Hvordan det fungerer:**
1. Myndighetene setter et totalt utslippstak (cap).
2. Kvoter fordeles til bedriftene (gratis eller via auksjon).
3. Bedrifter som kan redusere utslipp billig, gjor det og selger overskuddskvoter.
4. Bedrifter med hoye rensekostnader kjoper kvoter istedenfor a rense.
5. Taket senkes gradvis over tid for a na utslippsmalene.

**Fordeler:**
- **Sikkerhet i utslippsmengde:** Taket garanterer at de totale utslippene ikke overstiger et bestemt niva.
- **Kostnadseffektivt:** Kvotehandelen sikrer at utslippsreduksjonene skjer der det er billigst.
- **Fleksibilitet:** Bedriftene velger selv om de vil rense eller kjope kvoter.

**Ulemper:**
- **Usikkerhet i kvotepris:** Prisen kan svinge mye, noe som gjor det vanskelig for bedrifter a planlegge.
- **Komplisert a administrere:** Krever overvaking, rapportering og kontroll.
- **Gratiskvoter kan gi vindfall:** Bedrifter som far gratis kvoter, kan selge dem med fortjeneste.

**EUs kvotesystem (EU ETS)** er verdens storste kvotemarked og dekker kraft- og industrisektoren i hele EOS-omradet.`,
    },
    {
      id: 'sf2-6-2-example-kvote-vs-avgift',
      type: 'example',
      title: 'Eksempel: Avgift vs. kvotesystem',
      problem: 'Et land onsker a redusere CO₂-utslippene med 30 %. Sammenlign bruk av en CO₂-avgift med et kvotesystem for a oppna dette malet.',
      solution: `**CO₂-avgift:**
- Myndighetene setter en avgift per tonn CO₂, for eksempel 1 000 kr/tonn.
- Bedrifter og forbrukere tilpasser seg: de som kan redusere utslipp for under 1 000 kr/tonn gjor det, resten betaler avgiften.
- **Fordel:** Forutsigbar pris for bedriftene.
- **Ulempe:** Man vet ikke om avgiftsnivaet faktisk gir 30 % reduksjon. Kanskje ma avgiften justeres opp eller ned.

**Kvotesystem:**
- Myndighetene setter et utslippstak 30 % lavere enn navarende niva og utsteder tilsvarende antall kvoter.
- Kvotene omsettes i markedet, og prisen bestemmes av tilbud og ettersporsel.
- **Fordel:** 30 % reduksjon er garantert (malet nas med sikkerhet).
- **Ulempe:** Kvoteprisen kan svinge kraftig. I en lavkonjunktur faller prisen, noe som svekker insentivene til gronn innovasjon.

**I praksis:** Mange land bruker en kombinasjon. Norge har bade CO₂-avgift (for sektorer utenfor kvotesystemet) og deltar i EU ETS (for industri og kraftsektoren). Et gulv for kvoteprisen (minimumspris) kan kombinere fordelene ved begge systemer.`,
    },
    {
      id: 'sf2-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-2-ex-1',
        number: '6.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom en miljoavgift og et kvotesystem?',
        multipleChoiceOptions: [
          'En miljoavgift gir forutsigbar pris pa utslipp, mens et kvotesystem gir forutsigbar mengde utslipp',
          'En miljoavgift reduserer alltid utslippene til null, mens et kvotesystem tillater noe forurensning',
          'En miljoavgift er alltid billigere for bedriftene enn et kvotesystem',
          'Et kvotesystem brukes bare i utviklingsland, mens avgifter brukes i rike land',
        ],
        hints: ['Tenk pa hva myndighetene kontrollerer i hvert system: pris eller mengde.'],
        solution: 'Hovedforskjellen er hva myndighetene kontrollerer. Med en miljoavgift setter myndighetene prisen pa utslipp (avgiften), og mengden utslipp bestemmes av markedet. Med et kvotesystem setter myndighetene mengden utslipp (taket), og prisen bestemmes av markedet. Avgiften gir prisforutsigbarhet, kvotesystemet gir mengdeforutsigbarhet.',
      },
    },
    {
      id: 'sf2-6-2-def-subsidier',
      type: 'definition',
      title: 'Subsidier og direkte regulering',
      content: `**Miljosubsidier** er okonomisk stotte fra myndighetene til aktiviteter som er miljovennlige. De fungerer som det motsatte av avgifter: istedenfor a gjore forurensnig dyrere, gjor de rene alternativer billigere.

**Eksempler pa miljosubsidier:**
- Stotte til elbilkjop (redusert avgift, gratis bompenger)
- Tilskudd til solcellepaneler og varmepumper
- Stotte til forskning pa gronn teknologi
- Subsidier til okologisk landbruk

**Direkte regulering** (command-and-control) innebarer at myndighetene setter konkrete krav, palud eller forbud:
- Utslippsgrenser per bedrift
- Krav om best tilgjengelig teknologi (BAT)
- Forbud mot bestemte stoffer (f.eks. KFK-gasser)
- Krav til energimerking av bygninger og produkter

**Sammenligning:**
| Virkemiddel | Prisforutsigbarhet | Mengdeforutsigbarhet | Innovasjon | Kostnadseffektivitet |
|---|---|---|---|---|
| Avgift | Hoy | Lav | Hoy | Hoy |
| Kvote | Lav | Hoy | Middels | Hoy |
| Subsidi | Middels | Lav | Middels | Lav |
| Regulering | Lav | Hoy | Lav | Lav |`,
    },
    {
      id: 'sf2-6-2-example-elbil',
      type: 'example',
      title: 'Eksempel: Norges elbilpolitikk',
      problem: 'Norge er verdensledende pa elbiler. Droft hvilke virkemidler som har bidratt til dette, og vurder om politikken er kostnadseffektiv.',
      solution: `**Virkemidler som har drevet elbilsalget i Norge:**
- Fritak fra merverdiavgift (25 %) pa kjop av elbil
- Fritak fra engangsavgift
- Reduserte bompenger og ferjetakster
- Tilgang til kollektivfelt
- Gratis parkering (avviklet mange steder)
- Redusert firmabilbeskatning

**Resultater:**
- Over 80 % av nye biler som selges i Norge er helelektriske (2024).
- Norge er det forste landet i verden der elbiler dominerer nybilsalget.
- Betydelig reduksjon i utslipp fra veitrafikken.

**Kostnadseffektivitet - kritisk vurdering:**
- Subsidiene har kostet staten milliarder i tapte avgiftsinntekter.
- Kostnaden per tonn CO₂ spart gjennom elbilsubsidier er hoyt sammenlignet med andre tiltak.
- Subsidiene har i stor grad gatt til hoyinntektshusholdninger som kjoper dyre elbiler.
- Alternativt kunne pengene vart brukt pa tiltak med lavere kostnad per tonn CO₂.

**Likevel:** Politikken har bidratt til a bygge ut ladeinfrastruktur, drive ned batterikostnader og skape et marked for elbiler som na begynner a bli konkurransedyktige uten subsidier.`,
    },
    {
      id: 'sf2-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-2-ex-2',
        number: '6.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor anses miljoavgifter og kvotesystemer generelt som mer kostnadseffektive enn direkte regulering?',
        multipleChoiceOptions: [
          'Fordi de lar markedet finne de billigste matene a redusere utslipp pa, mens direkte regulering krever lik innsats fra alle',
          'Fordi de alltid gir lavere utslipp enn direkte regulering',
          'Fordi de er enklere a administrere enn direkte regulering',
          'Fordi de ikke krever overvaking av bedriftene',
        ],
        hints: ['Tenk pa hva som skjer nar bedrifter med ulike rensekostnader far velge selv om de vil betale avgift eller rense.'],
        solution: 'Avgifter og kvoter er kostnadseffektive fordi de gir bedriftene fleksibilitet til a velge den billigste losningen. Bedrifter med lave rensekostnader vil rense, mens bedrifter med hoye rensekostnader vil betale avgift eller kjope kvoter. Resultatet er at de samlede utslippsreduksjonene oppnas til lavest mulig totalkostnad. Direkte regulering (f.eks. krav om lik rensing for alle) tar ikke hensyn til at rensekostnadene varierer mellom bedrifter, og blir derfor dyrere totalt sett.',
      },
    },
    {
      id: 'sf2-6-2-text-virkemiddelmiks',
      type: 'text',
      title: 'Virkemiddelmiks i praksis',
      content: `## Virkemiddelmiks i praksis

I virkeligheten bruker de fleste land en kombinasjon av virkemidler - en sa kalt virkemiddelmiks. Det finnes sjelden ett virkemiddel som loser alle miljoproblemer optimalt.

**Norges virkemiddelmiks for klima:**
- **CO₂-avgift** for sektorer utenfor kvotesystemet (transport, oppvarming)
- **EU ETS-kvoter** for industri og kraftsektoren
- **Subsidier** til elbiler, fornybar energi og gronn forskning
- **Regulering** som forbud mot oljefyring i bygninger og krav om nullutslippsomrader
- **Informasjon** som energimerking og klimaregnskap

**Utfordringer med virkemiddelmiks:**
- **Overlappende virkemidler** kan svekke hverandres effekt. Hvis en sektor bade er i kvotesystemet og har en avgift, kan den ekstra avgiften redusere ettersporselen etter kvoter og dermed senke kvoteprisen, slik at utslippene bare flyttes til andre bedrifter i kvotesystemet.
- **Karbonlekkasje:** Strenge virkemidler i ett land kan fore til at bedrifter flytter produksjonen til land med svakere regulering, uten at globale utslipp reduseres.
- **Fordelingshensyn:** Avgifter pa drivstoff og energi rammer lavinntektsgrupper hardere relativt sett, noe som krever kompenserende tiltak.`,
    },
    {
      id: 'sf2-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-2-ex-3',
        number: '6.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign miljoavgifter og omsettelige utslippskvoter som virkemidler i miljopolitikken. Droft fordeler og ulemper ved hvert virkemiddel.',
        hints: [
          'Tenk pa hva myndighetene kontrollerer i hvert system og hva de ikke kontrollerer.',
          'Vurder forutsigbarhet, kostnadseffektivitet og innovasjonsinsentiver.',
        ],
        solution: 'Miljoavgifter: Myndighetene kontrollerer prisen (avgiftssatsen), men ikke utslippsmengden. Fordeler: forutsigbar kostnad for bedriftene, enkel a administrere, gir inntekter og sterke innovasjonsinsentiver. Ulemper: usikkerhet om utslippsmengden, krever god informasjon for a sette riktig niva. Kvotesystem: Myndighetene kontrollerer mengden (utslippstaket), men ikke prisen. Fordeler: garanterer at utslippsmalene nas, kostnadseffektivt gjennom handel. Ulemper: kvoteprisen kan svinge, komplisert a administrere, gratiskvoter kan gi ufortjente gevinster. Begge er mer kostnadseffektive enn direkte regulering fordi de lar markedet finne de billigste losningene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-2-ex-4',
        number: '6.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva karbonlekkasje er, og droft hvorfor det er en utfordring for nasjonal klimapolitikk.',
        hints: [
          'Tenk pa hva som skjer nar ett land har streng klimapolitikk og nabolandene ikke har det.',
          'Vurder hvordan bedrifter tilpasser seg ulike reguleringskostnader.',
        ],
        solution: 'Karbonlekkasje oppstar nar strenge klimatiltak i ett land forer til at produksjon flyttes til land med svakere regulering, uten at globale utslipp reduseres - de bare flyttes. Eksempel: Hvis Norge innforer hoy CO₂-avgift pa sementproduksjon, kan det bli lonnsomt a produsere sementen i et land uten avgift og importere den. Norges utslipp synker, men utslippene i det andre landet oker. Klimaet bryr seg ikke om hvor utslippene skjer. Utfordringen gjor det vanskelig for enkeltland a fore ambisios klimapolitikk alene, og understreker behovet for internasjonalt samarbeid, grensejusteringsmekanismer (som EUs CBAM) og globale avtaler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Miljopolitiske virkemidler

- **Miljoavgifter** gir prisforutsigbarhet og sterke innovasjonsinsentiver, men usikkerhet om utslippsmengden.
- **Omsettelige kvoter** garanterer utslippsmalet, men kvoteprisen kan svinge.
- **Subsidier** gjor rene alternativer billigere, men er kostbare og kan vare lite malrettede.
- **Direkte regulering** gir sikkerhet, men er sjelden kostnadseffektivt.
- I praksis brukes en **virkemiddelmiks** som kombinerer flere tilnarminger.
- **Karbonlekkasje** er en viktig utfordring: strenge tiltak i ett land kan flytte utslipp til andre land.`,
    },
    {
      id: 'sf2-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-2-ex-5',
        number: '6.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norges elbilpolitikk har vart svart vellykket i a oke andelen elbiler, men har ogsa blitt kritisert for a vare kostbar og fordelingsmessig skjev. Droft om elbilsubsidiene har vart et godt miljopolitisk virkemiddel, og vurder alternativer.',
        hints: [
          'Vurder kostnad per tonn CO₂ spart, fordelingseffekter og langsiktige virkninger.',
          'Tenk pa om en hoyere CO₂-avgift kunne gitt samme resultat til lavere kostnad.',
        ],
        solution: 'Elbilpolitikken har gitt enorme resultater: Norge har verdens hoyeste elbillandel og har bidratt til a drive ned globale batterikostnader. Kritikken: subsidiene har kostet titalls milliarder i tapte avgiftsinntekter, kostnaden per tonn CO₂ er hoy sammenlignet med andre tiltak, og fordelene har i stor grad tilfalt hoyinntektsgrupper. Alternativ: en uniformt hoy CO₂-avgift ville vart mer kostnadseffektivt i teorien, men ville kanskje ikke ha utlost det teknologiske skiftet like raskt. Subsidier kan rettferdiggjores nar det er sterke laringseffekter og nettverkseffekter. Konklusjon: politikken var trolig riktig i en oppstartsfase, men bor fases ut etter hvert som elbiler blir konkurransedyktige pa egne premisser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-2-ex-6',
        number: '6.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft hvordan EUs kvotesystem (EU ETS) fungerer, og vurder styrker og svakheter ved systemet. Hvordan kan systemet forbedres for a gi sterkere klimainsentiver?',
        hints: [
          'Tenk pa erfaringene med kvoteprisen over tid - den var svart lav i mange ar.',
          'Vurder tiltak som markedsstabilitetsreserven (MSR) og utvidelse til nye sektorer.',
        ],
        solution: 'EU ETS setter et tak pa utslipp fra industri og kraft i EOS og lar bedrifter handle kvoter. Styrker: garanterer samlet utslippstak, kostnadseffektivt, dekker en stor del av europeiske utslipp. Svakheter: kvoteprisen var lenge for lav (under 10 euro) pa grunn av overskudd av kvoter etter finanskrisen, gratiskvoter ga vindfall til industrien, og karbonlekkasje forblir en risiko. Forbedringer: markedsstabilitetsreserven (innfort 2019) trekker overskuddskvoter ut av markedet, raskere reduksjon av kvotetaket, utvidelse til nye sektorer (skipsfart, bygninger, transport), prisgulv for a sikre minimumsinsentiver, og CBAM (grensejusteringsmekanisme) for a motvirke karbonlekkasje. Kvoteprisen har okt betydelig (til over 80-100 euro) etter reformene, noe som viser at systemet kan fungere med riktig utforming.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3: Klimaøkonomi
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6_3: TextbookChapter = {
  id: 'samfokonomi-2-6-3',
  courseId: 'samfokonomi-2',
  chapterNumber: '6.3',
  title: 'Klimaokonomi',
  description: 'Karbonprising, Parisavtalen og gronn omstilling i et samfunnsokonomisk perspektiv.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere okonomisk barekraft',
    'drofte virkemidler for a fremme barekraftig utvikling',
  ],
  content: [
    {
      id: 'sf2-6-3-intro',
      type: 'text',
      content: `# Klimaokonomi

Klimaendringene er det kanskje storste eksempelet pa en global eksternalitet. Utslipp av klimagasser bidrar til oppvarming uavhengig av hvor de skjer, og konsekvensene rammer hele verden. Klimaokonomien analyserer kostnadene ved klimaendringer, kostnadene ved a redusere utslipp, og utformingen av politikk for a na klimamalene.

Sentralt star sporsmalet om karbonprising: hva er den rette prisen pa utslipp av CO₂? For lav pris gir for lite utslippsreduksjon; for hoy pris kan hemme okonomisk vekst. I tillegg ma klimapolitikken balansere hensynet til natid og framtid, og den krever internasjonalt samarbeid. I dette kapittelet ser vi pa karbonprising, Parisavtalen og de okonomiske sidene ved gronn omstilling.`,
    },
    {
      id: 'sf2-6-3-def-karbonpris',
      type: 'definition',
      title: 'Karbonprising',
      content: `**Karbonprising** innebarer a sette en pris pa utslipp av klimagasser (malt i CO₂-ekvivalenter) slik at utslippskostnaden internaliseres i okonomiske beslutninger.

**To hovedformer:**
1. **Karbonavgift:** Myndighetene setter prisen direkte (f.eks. kr per tonn CO₂).
2. **Kvotehandel:** Myndighetene setter utslippstaket, og prisen dannes i kvotemarkedet.

**Den sosiale kostnaden av karbon (SCC):**
SCC er et estimat pa den totale skaden som ett ekstra tonn CO₂-utslipp forarsaker over tid, malt i kroner. Den inkluderer:
- Skader fra ekstremvar (flom, torke, orkaner)
- Tap av jordbruksproduksjon
- Helsekostnader
- Tap av biologisk mangfold
- Kostnader ved havnivastiging

**Estimater varierer stort:**
- Det amerikanske EPA: ca. 500-2 000 kr per tonn CO₂
- Stern-rapporten (2006): opptil 7 000-8 000 kr per tonn
- Hoyere estimater nar man vektlegger framtidige generasjoner sterkere (lav diskonteringsrente)

**Diskonteringsrenten** spiller en avgjorende rolle: en lav rente betyr at framtidige klimaskader veier tungt, og den optimale karbonprisen blir hoy. En hoy diskonteringsrente betyr at framtidige skader diskonteres kraftig, og den optimale karbonprisen blir lavere.`,
    },
    {
      id: 'sf2-6-3-example-diskontering',
      type: 'example',
      title: 'Eksempel: Diskonteringsrenten og klimapolitikk',
      problem: 'Forklar hvorfor valget av diskonteringsrente er avgjorende for klimapolitikken. Hva er forskjellen mellom Stern-rapportens og Nordhaus tilnarming?',
      solution: `**Diskonteringsrenten** bestemmer hvor mye vi vektlegger framtidige skader sammenlignet med kostnader i dag.

**Stern-rapporten (Nicholas Stern, 2006):**
- Brukte en lav diskonteringsrente (ca. 1,4 %).
- Begrunnelse: det er etisk feil a verdsette framtidige generasjoners velferd lavere enn var.
- Konsekvens: Framtidige klimaskader veier tungt. Kostnadene ved klimaendringer ble estimert til 5-20 % av globalt BNP. Det lonnner seg med kraftig handling na.

**William Nordhaus:**
- Brukte en hoyere diskonteringsrente (ca. 5 %), basert pa observerte markedsrenter.
- Begrunnelse: mennesker foretrekker faktisk nytid framfor framtid, og framtidige generasjoner vil vare rikere enn oss.
- Konsekvens: Framtidige skader veier mindre. Optimal strategi er mer gradvis utslippsreduksjon.

**Talleksempel:**
En klimaskade pa 1 million kroner om 50 ar er verdt:
- Med 1,4 % rente: 1 000 000 / (1,014)⁵⁰ ≈ 500 000 kr i dag
- Med 5 % rente: 1 000 000 / (1,05)⁵⁰ ≈ 87 000 kr i dag

Valget av diskonteringsrente endrer altsa den beregnede verdien av framtidige skader med en faktor pa nesten 6. Det er i stor grad et etisk sporsmal, ikke bare et teknisk.`,
    },
    {
      id: 'sf2-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-3-ex-1',
        number: '6.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er karbonprising?',
        multipleChoiceOptions: [
          'A sette en pris pa utslipp av klimagasser slik at utslippskostnaden inkluderes i okonomiske beslutninger',
          'A subsidiere bruk av karbonholdige materialer i industrien',
          'A forbyde all bruk av fossilt brensel',
          'A beregne prisen pa kull og olje pa verdensmarkedet',
        ],
        hints: ['Tenk pa hva som skjer nar CO₂-utslipp far en prislapp.'],
        solution: 'Karbonprising innebarer a sette en pris pa utslipp av klimagasser, enten gjennom en karbonavgift (prisen settes direkte) eller et kvotesystem (prisen dannes i markedet). Formalet er a internalisere klimakostnaden: nar det koster penger a slippe ut CO₂, vil bedrifter og forbrukere ta hensyn til klimaet i sine beslutninger og redusere utslippene.',
      },
    },
    {
      id: 'sf2-6-3-def-paris',
      type: 'definition',
      title: 'Parisavtalen',
      content: `**Parisavtalen** (2015) er en internasjonal klimaavtale vedtatt under FNs klimakonvensjon (UNFCCC). Den trad i kraft i 2016 og er signert av nesten alle verdens land.

**Hovedmal:**
- Begrense global oppvarming til godt under 2 °C, og tilstrebe 1,5 °C, over forindstrielt niva.
- Oppna netto nullutslipp i andre halvdel av dette arhundret.

**Viktige mekanismer:**
- **Nasjonalt bestemte bidrag (NDC):** Hvert land setter sine egne utslippsmal og rapporterer om fremdriften. Malene er ikke juridisk bindende, men rapporteringen er det.
- **Stotte til utviklingsland:** Rike land skal mobilisere 100 milliarder dollar arlig til klimafinansiering i utviklingsland.
- **Global gjennomgang:** Hvert femte ar vurderes den samlede fremdriften, og landene oppfordres til a skjerpe malene.

**Styrker:**
- Nesten universell deltakelse (i motsetning til Kyoto-avtalen)
- Fleksibel tilnarming der hvert land velger egne virkemidler

**Svakheter:**
- Malene er frivillige og ofte utilstrekkelige til a na 1,5-2 °C
- Ingen sanksjonsmekanisme for land som ikke oppfyller malene
- Summen av nasjonale mal gir na anslagsvis 2,5-2,8 °C oppvarming`,
    },
    {
      id: 'sf2-6-3-example-gratispassasjer',
      type: 'example',
      title: 'Eksempel: Gratispassasjerproblemet i klimapolitikken',
      problem: 'Forklar hvorfor internasjonalt klimasamarbeid er sa vanskelig, og hva gratispassasjerproblemet innebarer i denne sammenhengen.',
      solution: `**Gratispassasjerproblemet:**
Klimaet er et globalt fellesgode. Utslippsreduksjoner i ett land kommer alle til gode, men kostnadene bares av det landet som kutter. Hvert land har dermed et insentiv til a la andre land ta byrden (vare gratispassasjer).

**Hvorfor det er sa vanskelig:**
1. **Asymmetriske kostnader:** Noen land (oljeprodusenter, kullbaserte okonomier) har mye hoyere kostnader ved omstilling enn andre.
2. **Asymmetriske konsekvenser:** Oynasjoner og fattige land rammes hardest av klimaendringer, men har minst ansvar og kapasitet.
3. **Tidshorisont:** Kostnadene ved utslippsreduksjon er umiddelbare, men gevinstene ligger langt frem i tid.
4. **Suverenitet:** Ingen overnasonal myndighet kan tvinge land til a kutte utslipp.

**Eksempel:** Hvis Norge kutter alle utslipp (ca. 0,1 % av globale utslipp), koster det betydelig for norsk okonomi, men effekten pa det globale klimaet er minimal. Det er rasjonelt for hvert enkelt land a vente pa at andre handler forst. Men hvis alle tenker slik, skjer ingenting.

**Losninger:** Parisavtalen forsoker a overkomme dette gjennom universell deltakelse, jevnlig rapportering, sosialt press og lovnader om finansiell stotte. Men den fundamentale utfordringen blistaende.`,
    },
    {
      id: 'sf2-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-3-ex-2',
        number: '6.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av folgende er en sentral svakhet ved Parisavtalen?',
        multipleChoiceOptions: [
          'At de nasjonale utslippsmalene er frivillige og det ikke finnes sanksjonsmekanismer for land som ikke oppfyller malene',
          'At bare rike land har signert avtalen',
          'At den forbyr all bruk av fossilt brensel innen 2030',
          'At den kun gjelder for CO₂ og ikke andre klimagasser',
        ],
        hints: ['Tenk pa forskjellen mellom juridisk bindende forpliktelser og frivillige mal.'],
        solution: 'Parisavtalens sentrale svakhet er at de nasjonale utslippsmalene (NDC) er selvbestemte og frivillige. Det finnes ingen sanksjonsmekanisme dersom et land ikke oppfyller sine lovnader. Rapporteringsplikten er juridisk bindende, men selve malet er det ikke. Resultatet er at summen av landenes navarende mal gir anslagsvis 2,5-2,8 °C oppvarming, langt over det erklarte malet pa 1,5-2 °C.',
      },
    },
    {
      id: 'sf2-6-3-text-gronn',
      type: 'text',
      title: 'Gronn omstilling',
      content: `## Gronn omstilling

Gronn omstilling innebarer a transformere okonomien fra fossil til fornybar energi og fra lineaer til sirkulaer ressursbruk, samtidig som okonomisk vekst og velferd opprettholdes.

**Okonomiske dimensjoner av gronn omstilling:**

**Kostnader pa kort sikt:**
- Investeringer i ny infrastruktur (fornybar energi, ladenettverk, hydrogenanlegg)
- Omstillingskostnader for arbeidskraft (omskolering, arbeidsledighet i fossile sektorer)
- Hoye kostnader for ny teknologi for den modnes

**Gevinster pa lang sikt:**
- Reduserte klimaskader (som ellers ville kostet langt mer)
- Lavere energikostnader nar fornybar energi er utbygget (sol og vind har nesten null marginalkostnad)
- Nye naeringer og arbeidsplasser i gronn sektor
- Forbedret luftkvalitet og folkehelse

**Norges sarstilling:**
Norge er en stor olje- og gasseksportor. Gronn omstilling innebarer en saerskilt utfordring: a fase ut den mest loennsomme naeringen. Samtidig har Norge unike fordeler: et stort oljefond, rikelig tilgang pa fornybar energi (vannkraft), og teknologisk kompetanse fra olje- og gassektoren som kan overfoeres til nye naeringer (havvind, karbonfangst, hydrogen).`,
    },
    {
      id: 'sf2-6-3-example-stranded',
      type: 'example',
      title: 'Eksempel: Stranded assets og oljeindustrien',
      problem: 'Begrepet «stranded assets» (strandede eiendeler) brukes i klimaokonomien. Forklar hva det betyr og hvorfor det er relevant for Norges okonomi.',
      solution: `**Stranded assets** er eiendeler som mister mye av sin verdi for de er ferdig brukt, typisk pa grunn av reguleringsendringer, teknologisk utvikling eller endrede markedsforhold.

**Klimarelevans:**
For a na 1,5-2 °C-malet kan bare en begrenset mengde fossilt brensel forbrennes (det gjenvarende karbonbudsjettet). Store deler av verdens olje-, gass- og kullreserver kan aldri utvinnes uten a sprenge karbonbudsjettet. Disse reservene - og infrastrukturen knyttet til dem - kan bli stranded assets.

**Konsekvenser for Norge:**
- Norges gjenvarende olje- og gassreserver har en estimert verdi pa mange tusen milliarder kroner.
- Dersom verden lykkes med a na klimamalene, vil ettersporselen etter olje falle kraftig.
- Olje- og gassfelter som forventes a produsere i 30-40 ar, kan bli ulennsomme mye for.
- Investeringer i ny letevirksomhet og feltutbygging innebarer en risiko for at verdier gar tapt.

**Motargument:** Gass kan vare et overgangsbrensel (erstatter kull), og siste fat olje vil vare dyrt. Men risikoen er reell og bor inngas i investeringsbeslutninger.`,
    },
    {
      id: 'sf2-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-3-ex-3',
        number: '6.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva den sosiale kostnaden av karbon (SCC) er, og droft hvorfor det er sa vanskelig a fastsette en presis verdi.',
        hints: [
          'Tenk pa alle de ulike typene skader klimaendringer forarsaker.',
          'Vurder rollen til diskonteringsrenten og usikkerhet om framtiden.',
        ],
        solution: 'Den sosiale kostnaden av karbon (SCC) er et estimat pa den totale skaden ett ekstra tonn CO₂ forarsaker over hele sin levetid i atmosfaeren. Den inkluderer skader fra ekstremvar, tap av jordbruksproduksjon, helsekostnader, havnivastiging og tap av biologisk mangfold. Det er vanskelig a fastsette SCC fordi: 1) Klimamodellene er usikre - vi vet ikke noyaktig hvor mye oppvarming som kommer. 2) Skadene er spredt over mange tiar og vanskelige a verdsette i kroner. 3) Valget av diskonteringsrente pavirker verdien enormt. 4) Ulik vektlegging av fattige vs. rike lands skader gir ulike svar. Estimatene varierer fra noen hundre til flere tusen kroner per tonn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-3-ex-4',
        number: '6.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for Parisavtalens viktigste mekanismer. Droft om avtalen er tilstrekkelig for a begrense oppvarmingen til 1,5-2 °C.',
        hints: [
          'Beskriv NDC-systemet, den globale gjennomgangen og klimafinansiering.',
          'Vurder gapet mellom landenes mal og det som kreves for a na temperaturmalet.',
        ],
        solution: 'Parisavtalens mekanismer: 1) Nasjonalt bestemte bidrag (NDC) - hvert land setter egne utslippsmal. 2) Global gjennomgang hvert femte ar for a vurdere fremdrift. 3) Klimafinansiering - rike land skal stotte utviklingsland. 4) Transparens - rapporteringsplikt for utslipp og tiltak. Vurdering: Avtalen er utilstrekkelig i sin navarende form. Summen av nasjonale mal gir anslagsvis 2,5-2,8 °C oppvarming. Malene er frivillige uten sanksjoner, og mange land ligger etter sine egne mal. Likevel er avtalen viktig som rammeverk: den etablerer normen om at alle land ma bidra, og den globale gjennomgangen skaper press for a skjerpe malene over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Klimaokonomi

- **Karbonprising** (avgift eller kvotehandel) er det sentrale okonomiske virkemiddelet for a redusere klimagassutslipp.
- **Den sosiale kostnaden av karbon (SCC)** varierer stort avhengig av modell og diskonteringsrente.
- **Parisavtalen** samler nesten alle land, men de nasjonale malene er sa langt utilstrekkelige for a na 1,5-2 °C.
- **Gratispassasjerproblemet** gjor internasjonalt klimasamarbeid vanskelig.
- **Gronn omstilling** innebarer kortsiktige kostnader, men gir langsiktige gevinster.
- **Stranded assets** er en reell risiko for fossilbaserte okonomier som Norge.`,
    },
    {
      id: 'sf2-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-3-ex-5',
        number: '6.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft gratispassasjerproblemet i internasjonal klimapolitikk. Forklar hvorfor det oppstar, og vurder om Parisavtalen har funnet en god losning pa problemet.',
        hints: [
          'Tenk pa klimaet som et globalt fellesgode og hvert lands insentiver.',
          'Vurder mekanismene i Parisavtalen opp mot det klassiske gratispassasjerproblemet.',
        ],
        solution: 'Gratispassasjerproblemet oppstar fordi klimaet er et globalt fellesgode: utslippsreduksjoner i ett land gagner alle, men kostnadene bares lokalt. Hvert land har insentiv til a la andre kutte forst. Parisavtalen forsoker a lose dette gjennom universell deltakelse, jevnlig rapportering og sosialt press (naming and shaming). Men den loser det ikke fullstendig: malene er frivillige, det finnes ingen sanksjoner, og summen av mal er utilstrekkelig. Likevel er Parisavtalen et fremskritt fra Kyoto-avtalen (som bare inkluderte rike land). Mulige forbedringer: sterkere finansieringsmekanismer, handelsrestriksjoner mot land som ikke bidrar (CBAM-lignende tiltak), og sterkere institusjonelle mekanismer for a heve ambisjonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-3-ex-6',
        number: '6.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge er en stor olje- og gasseksportor som samtidig har ambisiose klimamal. Droft dilemmaet Norge star overfor, og vurder hvordan landet kan haandtere risikoen for stranded assets i overgangen til en gronnere okonomi.',
        hints: [
          'Tenk pa risikoen ved a investere i ny oljeleting versus a satse pa nye naeringer.',
          'Vurder oljefondets rolle som buffer i omstillingen.',
        ],
        solution: 'Norge star i et dilemma: olje og gass er den mest loennsomme naeringen og finansierer velferdsstaten, men verdens klimamal innebarer at ettersporselen vil falle. Risikoen for stranded assets betyr at investeringer i ny oljeinfrastruktur kan tape verdi. Haandtering: 1) Gradvis omstilling - bruke kompetansen fra olje og gass i nye naeringer (havvind, hydrogen, karbonfangst). 2) Strengere loennsomhetskrav for nye felt - ikke bygge ut prosjekter som bare er loennsomme ved hoey oljepris. 3) Bruke oljefondet som buffer i omstillingen. 4) Investere i forskning, utdanning og infrastruktur for groenne naeringer. 5) Diversifisere okonomien for a redusere avhengigheten. Norges fordel er at oljefondet gir et unikt handlingsrom sammenlignet med andre olje-land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.4: Sirkulær økonomi
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6_4: TextbookChapter = {
  id: 'samfokonomi-2-6-4',
  courseId: 'samfokonomi-2',
  chapterNumber: '6.4',
  title: 'Sirkulaer okonomi',
  description: 'Lineaer vs sirkulaer produksjonsmodell, gjenbruk, resirkulering og gronne verdikjeder.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere okonomisk barekraft',
    'drofte virkemidler for a fremme barekraftig utvikling',
  ],
  content: [
    {
      id: 'sf2-6-4-intro',
      type: 'text',
      content: `# Sirkulaer okonomi

Den tradisjonelle okonomiske modellen er lineaer: vi utvinner ravarar, produserer varer, bruker dem og kaster dem. Denne «ta-bruke-kaste»-modellen er ikke barekraftig pa lang sikt fordi den tarer pa begrensede naturressurser og skaper store mengder avfall og forurensning.

Sirkulaer okonomi er et alternativt okonomisk system der produkter og materialer holdes i bruk sa lenge som mulig gjennom gjenbruk, reparasjon, oppgradering og resirkulering. Malet er a minimere avfall og utvinning av nye ravarar, samtidig som okonomisk verdiskaping opprettholdes. I dette kapittelet analyserer vi de okonomiske prinsippene bak sirkulaer okonomi, barrierer mot overgang, og virkemidler som kan drive utviklingen.`,
    },
    {
      id: 'sf2-6-4-def-lineaer',
      type: 'definition',
      title: 'Lineaer vs. sirkulaer okonomi',
      content: `**Lineaer okonomi** folger modellen: utvinning → produksjon → bruk → avfall. Ressursene flyter i en rett linje fra natur til soppelfylling.

**Sirkulaer okonomi** folger modellen: utvinning → produksjon → bruk → gjenbruk/reparasjon/resirkulering → ny produksjon. Ressursene gar i sirkler og holdes i okonomien sa lenge som mulig.

**Grunnprinsipper i sirkulaer okonomi:**
1. **Design for varighet:** Produkter designes for a vare lenge, repareres og oppgraderes.
2. **Gjenbruk og deling:** Produkter brukes av flere (deleokonomi) eller far nytt liv hos nye eiere.
3. **Reparasjon og oppgradering:** Produkter repareres fremfor a kastes.
4. **Resirkulering:** Materialer gjenvinnes og brukes i ny produksjon.
5. **Biologisk nedbryting:** Organisk materiale returneres til naturen som naeringsstoffer.

**R-hierarkiet** (fra mest til minst foretrukket):
- **Refuse** (avvis): Unnga unodvendig forbruk
- **Reduce** (reduser): Bruk mindre ressurser
- **Reuse** (gjenbruk): Bruk produkter om igjen
- **Repair** (reparer): Fiks opp produkter
- **Recycle** (resirkuler): Gjenvin materialer
- **Recover** (gjenvin energi): Brenn avfall til energi`,
    },
    {
      id: 'sf2-6-4-example-mobil',
      type: 'example',
      title: 'Eksempel: Mobiltelefonen i et sirkulaert perspektiv',
      problem: 'En gjennomsnittlig smarttelefon byttes ut etter 2-3 ar. Analyser denne produktkjeden i et lineaert og et sirkulaert perspektiv.',
      solution: `**Lineaert perspektiv:**
- Sjeldne jordmetaller utvinnes (ofte under darlige arbeidsforhold) i Afrika og Asia.
- Komponenter produseres i Kina og andre asiatiske land.
- Telefonen selges, brukes i 2-3 ar og kastes.
- Bare 20 % av verdens e-avfall resirkuleres; resten havner pa soppelfyllinger eller eksporteres til utviklingsland.
- For hver ny telefon trengs nye ravarar.

**Sirkulaert perspektiv:**
1. **Design:** Telefonen designes for a vare lenger, med utskiftbare deler (batteri, skjerm).
2. **Forlenget bruk:** Programvareoppdateringer sikrer at eldre modeller fortsatt fungerer godt.
3. **Reparasjon:** Odelgatte komponenter byttes ut istedenfor a kaste hele telefonen. EUs «rett til a reparere»-lovgivning stotter dette.
4. **Gjenbruk:** Brukte telefoner selges videre eller doneres.
5. **Resirkulering:** Nar telefonen ikke kan brukes mer, gjenvinnes verdifulle materialer (gull, kobolt, litium).

**Okonomisk utfordring:** Det er ofte billigere a kjope nytt enn a reparere, fordi ravareprisene ikke gjenspeiler de reelle miljokostnadene (eksternaliteter). Uten korreksjon av denne markedssvikten forblir lineaer okonomi mest lonnsomt for den enkelte.`,
    },
    {
      id: 'sf2-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-4-ex-1',
        number: '6.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom lineaer og sirkulaer okonomi?',
        multipleChoiceOptions: [
          'I lineaer okonomi ender ressurser som avfall, mens sirkulaer okonomi holder materialer i bruk sa lenge som mulig gjennom gjenbruk og resirkulering',
          'Lineaer okonomi bruker bare fornybare ressurser, mens sirkulaer okonomi bruker fossile ressurser',
          'Sirkulaer okonomi er alltid billigere enn lineaer okonomi',
          'Lineaer okonomi finnes bare i fattige land, mens rike land har sirkulaer okonomi',
        ],
        hints: ['Tenk pa hva som skjer med materialene nar produktet er ferdig brukt i hvert system.'],
        solution: 'Den viktigste forskjellen er at i en lineaer okonomi folger ressursene en rett linje fra utvinning via produksjon og bruk til avfall (ta-bruke-kaste). I en sirkulaer okonomi holdes materialer i bruk sa lenge som mulig gjennom gjenbruk, reparasjon og resirkulering, slik at behovet for nye ravarar og mengden avfall reduseres vesentlig.',
      },
    },
    {
      id: 'sf2-6-4-def-barrierer',
      type: 'definition',
      title: 'Barrierer og drivere for sirkulaer okonomi',
      content: `**Barrierer mot sirkulaer okonomi:**

**Okonomiske barrierer:**
- Nye ravarar er ofte billigere enn resirkulerte (fordi miljokostnaden ikke er inkludert i prisen).
- Reparasjon er dyrere enn nykjop for mange produkter.
- Investeringer i sirkulaere forretningsmodeller er risikable.

**Teknologiske barrierer:**
- Mange produkter er ikke designet for demontering og resirkulering.
- Materialgjenvinning krever avansert teknologi.
- Kvaliteten pa resirkulerte materialer kan vare lavere enn nye.

**Atferdsbarrierer:**
- Forbrukere foretrekker ofte nytt fremfor brukt.
- Mangel pa informasjon om resirkuleringemuligheter.
- Statusforbruk og trender driver kjop av nye produkter.

**Drivere for sirkulaer okonomi:**
- Stigende ravarepriser og ressursknapphet
- Strengere miljoregulering (EUs avfallsdirektiv, plastforbud)
- Teknologisk utvikling (bedre resirkuleringsteknologi)
- Nye forretningsmodeller (leasing, deleokonomi, produkt-som-tjeneste)
- Endrede forbrukerholdninger (sarlig blant yngre generasjoner)`,
    },
    {
      id: 'sf2-6-4-example-deleokonomi',
      type: 'example',
      title: 'Eksempel: Deleokonomien som sirkulaer modell',
      problem: 'Deleokonomien (f.eks. bildeling, verktoybibliotek, klesbyttedager) er et element i sirkulaer okonomi. Analyser de okonomiske fordelene og utfordringene.',
      solution: `**Okonomiske fordeler:**
- **Bedre utnyttelse av ressurser:** En gjennomsnittlig privatbil star stille 95 % av tiden. Bildeling kan redusere antall biler drastisk.
- **Lavere kostnad per bruk:** Brukerne betaler bare for faktisk bruk, ikke for eierskap.
- **Redusert produksjon:** Farre produkter trenger a produseres, noe som sparer ravarar og energi.
- **Lavere avfallsmengde:** Produktene brukes mer intensivt og har lengre levetid.

**Utfordringer:**
- **Transaksjonskostnader:** Det koster tid og krefter a koordinere deling.
- **Tillitsproblemer:** Man ma stole pa at andre behandler delte ting med forsiktighet.
- **Rebound-effekt:** Nar ting blir billigere a bruke, kan folk bruke dem mer (f.eks. kjore mer med delt bil fordi det er billig).
- **Tap av arbeidsplasser:** Farre produkter produsert betyr farre jobber i tradisjonell industri.

**Samfunnsokonomisk vurdering:** Deleokonomien kan oke velferden ved a gi tilgang til goder uten eierskap, men krever regulering for a sikre kvalitet, forsikring og rettferdig konkurranse med tradisjonelle naeringer.`,
    },
    {
      id: 'sf2-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-4-ex-2',
        number: '6.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er det ofte billigere a kjope nytt enn a reparere, og hva har dette med markedssvikt a gjore?',
        multipleChoiceOptions: [
          'Fordi prisene pa nye produkter ikke inkluderer de fulle miljokostnadene ved utvinning og avfallshandtering, noe som er en eksternalitet',
          'Fordi nye produkter alltid er av bedre kvalitet enn reparerte',
          'Fordi myndighetene bevisst gjor reparasjon dyrere gjennom avgifter',
          'Fordi reparasjon alltid krever mer energi enn nyproduksjon',
        ],
        hints: ['Tenk pa negative eksternaliteter i produksjon og avfallshandtering.'],
        solution: 'Nye produkter er ofte billigere fordi prisene ikke inkluderer de fulle miljokostnadene: utvinning av ravarar forarsaker forurensning og naturodeleggelse, produksjonen slipper ut klimagasser, og avfallet skaper problemer. Disse kostnadene er negative eksternaliteter som bares av samfunnet, ikke av produsenten. Hvis ravareprisene inkluderte de reelle miljokostnadene, ville reparasjon og gjenbruk bli relativt mer lonnsomt. Denne markedssvikten er en viktig arsak til at den lineaere modellen dominerer.',
      },
    },
    {
      id: 'sf2-6-4-text-verdikjeder',
      type: 'text',
      title: 'Gronne verdikjeder og forretningsmodeller',
      content: `## Gronne verdikjeder og forretningsmodeller

Overgangen til sirkulaer okonomi krever nye forretningsmodeller som er lonnsomme uten a vare avhengige av stadig okt salg av nye produkter.

**Nye forretningsmodeller:**

**1. Produkt-som-tjeneste (PaaS)**
Istedenfor a selge et produkt, selges tilgang til funksjonen. Produsenten beholder eierskapet og har insentiv til a lage holdbare, reparerbare produkter.
- Eksempler: Philips leaser lys til bedrifter (betaling per lux-time), Michelin selger «kjorte kilometer» istedenfor dekk.

**2. Utvidet produsentansvar (EPR)**
Produsenter palegges ansvar for produktets hele livslop, inkludert avfallshandtering. Dette gir insentiv til a designe for resirkulering.
- Eksempler: Retursystemet for flasker og bokser (pant), retur av elektronikkavfall.

**3. Industriell symbiose**
Avfall fra en bedrift blir ravare for en annen. Bedrifter i et omrade samarbeider om a utnytte ressursstrommene optimalt.
- Eksempel: Kalundborg i Danmark, der et kraftverk, et oljeraffineri, en gipsplateprodusentog et enzymselskap utveksler energi, vann og materialer.

**Virkemidler for a fremme gronne verdikjeder:**
- Offentlige innkjop med sirkulaere krav
- Redusert moms pa reparasjonstjenester
- Forbud mot planlagt foreldelse
- Krav om at produkter skal vare reparerbare (EUs rett til a reparere)`,
    },
    {
      id: 'sf2-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-4-ex-3',
        number: '6.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom lineaer og sirkulaer okonomi. Gi eksempler pa hvordan produkter handteres ulikt i de to modellene.',
        hints: [
          'Bruk et konkret produkt (f.eks. klaer, elektronikk) som gjennomgaende eksempel.',
          'Beskriv hva som skjer fra produksjon til produktet ikke lenger er i bruk.',
        ],
        solution: 'Lineaer okonomi: ravarar utvinnes, produkter produseres, brukes og kastes. Eksempel med klaer: bomull dyrkes, tekstiler produseres, plagg selges, brukes en sesong og kastes pa soppelet. Sirkulaer okonomi: materialer holdes i bruk sa lenge som mulig. Eksempel med klaer: plagg designes for varighet, brukes lenger, repareres ved skader, selges videre pa bruktmarkedet, og nar de ikke kan brukes mer, resirkuleres fibrene til nye tekstiler. Forskjellen er at lineaer okonomi behandler ressurser som ubegrensede og avfall som uunngaelig, mens sirkulaer okonomi ser avfall som en ressurs og designer systemet for a minimere tap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-4-ex-4',
        number: '6.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for minst tre barrierer mot overgang til sirkulaer okonomi, og foresla virkemidler som kan overkomme hver av dem.',
        hints: [
          'Tenk pa okonomiske, teknologiske og atferdsmessige barrierer.',
          'Koble hvert virkemiddel direkte til barrieren det skal lose.',
        ],
        solution: 'Barriere 1: Nye ravarar er billigere enn resirkulerte (markedssvikt). Virkemiddel: miljoavgifter pa utvinning og avfall, slik at resirkulering blir relativt billigere. Barriere 2: Produkter er ikke designet for reparasjon og resirkulering. Virkemiddel: krav om okodesign, rett til a reparere (EU-lovgivning), utvidet produsentansvar (EPR). Barriere 3: Forbrukere foretrekker nytt fremfor brukt. Virkemiddel: redusert moms pa reparasjon og brukte varer, informasjonskampanjer, merkeordninger for sirkulaere produkter. Tillegg: offentlige innkjop kan drive ettersporselen etter sirkulaere produkter og skape et marked for sirkulaere forretningsmodeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Sirkulaer okonomi

- **Lineaer okonomi** (ta-bruke-kaste) er ikke barekraftig; **sirkulaer okonomi** holder materialer i bruk sa lenge som mulig.
- **R-hierarkiet** prioriterer fra avvisning av forbruk via gjenbruk og reparasjon til resirkulering.
- Barrierer inkluderer billige ravarar (markedssvikt), produktdesign og forbrukervaner.
- Nye forretningsmodeller som **produkt-som-tjeneste**, **utvidet produsentansvar** og **industriell symbiose** driver overgangen.
- Virkemidler som miljoavgifter, okodesignkrav og redusert moms pa reparasjon kan akselerere overgangen.`,
    },
    {
      id: 'sf2-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-4-ex-5',
        number: '6.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser forretningsmodellen «produkt-som-tjeneste» (PaaS) fra et samfunnsokonomisk perspektiv. Droft hvordan denne modellen kan bidra til sirkulaer okonomi, og vurder mulige utfordringer.',
        hints: [
          'Tenk pa hvordan insentivene endres nar produsenten beholder eierskapet.',
          'Vurder bade miljomessige, okonomiske og sosiale konsekvenser.',
        ],
        solution: 'I produkt-som-tjeneste (PaaS) selger bedriften funksjonen istedenfor produktet. Eksempel: Philips selger belysning (lux-timer) istedenfor lysparer. Bidrag til sirkulaer okonomi: Produsenten har insentiv til a lage holdbare, energieffektive produkter fordi vedkommende barer kostnadene ved reparasjon og erstatning. Produktene designes for lang levetid og enkel reparasjon. Materialene forblir i produsentens eie og resirkuleres nar produktet ikke lenger kan brukes. Utfordringer: Hoye oppstartsinvesteringer for produsenten, forbrukere kan foretrekke a eie, det kan oppsta maktkonsentrasjon nar fa produsenter kontrollerer tilgangen, og det krever et langsiktig kundeforhold basert pa tillit.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-4-ex-6',
        number: '6.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft om sirkulaer okonomi er forenlig med okonomisk vekst. Kan vi ha en okonomi som vokser og samtidig bruker stadig farre ressurser?',
        hints: [
          'Tenk pa begrepet absolut frakobling: kan BNP oke mens ressursbruken synker?',
          'Vurder rebound-effekter og begrensningene ved resirkulering.',
        ],
        solution: 'Tilhengere av gronn vekst hevder at okonomisk vekst kan frakobles ressursbruk: BNP oker mens materialforbruk og utslipp synker. Bevis: mange rike land har oppnadd relativ frakobling (BNP vokser raskere enn ressursbruken). Sirkulaer okonomi bidrar ved a redusere behovet for nye ravarar. Motargumenter: Absolutt frakobling i global skala er ikke oppnadd. Rebound-effekter betyr at effektivitetsgevinster ofte spises opp av okt forbruk. Resirkulering har begrensninger (energikrevende, kvalitetstap). Noen okonomer mener at varig barekraft krever nermare null-vekst eller nedvekst (degrowth) i rike land. Trolig er svaret at sirkulaer okonomi er nodvendig, men ikke tilstrekkelig alene - den ma kombineres med endringer i forbruksmonstre og prioriteringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.5: Bærekraftig utvikling
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6_5: TextbookChapter = {
  id: 'samfokonomi-2-6-5',
  courseId: 'samfokonomi-2',
  chapterNumber: '6.5',
  title: 'Barekraftig utvikling',
  description: 'FNs baerekraftsmal, ESG-kriterier og gronn finans i et samfunnsokonomisk perspektiv.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere okonomisk barekraft',
    'drofte virkemidler for a fremme barekraftig utvikling',
  ],
  content: [
    {
      id: 'sf2-6-5-intro',
      type: 'text',
      content: `# Baerekraftig utvikling

Barekraftig utvikling ble definert av Brundtlandkommisjonen i 1987 som «utvikling som imotekommer dagens behov uten a odelegge mulighetene for at kommende generasjoner skal fa dekket sine behov.» Begrepet har tre dimensjoner: okonomisk, sosial og miljomessig barekraft.

I samfunnsokonomien handler barekraft om a forvalte naturkapitalen slik at den kan fortsette a levere okosystemtjenester og ressurser for framtiden. I dette kapittelet ser vi pa FNs baerekraftsmal som globalt rammeverk, ESG-kriterier som verktoy for ansvarlige investeringer, og gronn finans som mekanisme for a kanalisere kapital mot barekraftige aktiviteter.`,
    },
    {
      id: 'sf2-6-5-def-baerekraftsmal',
      type: 'definition',
      title: 'FNs baerekraftsmal (SDG)',
      content: `**FNs baerekraftsmal** (Sustainable Development Goals, SDG) er 17 globale mal vedtatt i 2015 som skal nas innen 2030. De dekker okonomiske, sosiale og miljomessige dimensjoner av barekraft.

**De 17 malene spenner fra:**
- Utrydde fattigdom (mal 1) og sult (mal 2)
- God helse (mal 3), utdanning (mal 4) og likestilling (mal 5)
- Rent vann (mal 6), ren energi (mal 7) og anstendig arbeid (mal 8)
- Innovasjon og infrastruktur (mal 9), redusert ulikhet (mal 10)
- Barekraftige byer (mal 11), ansvarlig forbruk (mal 12)
- Stoppe klimaendringene (mal 13), liv under vann (mal 14), liv pa land (mal 15)
- Fred og rettferdighet (mal 16) og samarbeid for malene (mal 17)

**Okonomisk relevans:**
- Malene er gjensidig avhengige: okonomisk vekst (mal 8) ma skje pa en mate som er forenlig med klimaet (mal 13) og naturmangfold (mal 14, 15).
- Konflikter mellom mal: okt energitilgang (mal 7) kan kollidere med klimamalet (mal 13) dersom energien er fossil.
- Malene gir et felles spraak for myndigheter, naeringslivet og sivilsamfunnet.

**Kritikk:** Malene er svaert ambisiose, og verden ligger etter skjema pa de fleste. De er ikke juridisk bindende, og det mangler effektive mekanismer for rapportering og ansvarliggjoring.`,
    },
    {
      id: 'sf2-6-5-example-maalkonflikt',
      type: 'example',
      title: 'Eksempel: Malkonflikter i barekraftig utvikling',
      problem: 'FNs barekraftsmal 7 (ren energi for alle) og mal 13 (stoppe klimaendringene) kan komme i konflikt. Forklar hvordan, og droft hvordan konflikten kan handteres.',
      solution: `**Konflikten:**
- Mal 7 krever at alle far tilgang til moderne energi. I dag mangler ca. 675 millioner mennesker elektrisitet.
- Mal 13 krever drastiske kutt i klimagassutslipp.
- Den raskeste og billigste maten a gi fattige land energi pa har tradisjonelt vaert kull og gass, som forverrer klimaproblemet.

**Eksempel:** Afrikanske land onsker a bruke sine gassressurser for a loefte befolkningen ut av energifattigdom, men klimamalet tilsier at fossile ressurser bor bli liggende.

**Mulige losninger:**
1. **Teknologisprang:** Fornybar energi (sol, vind) har blitt sa billig at mange utviklingsland kan hoppe over fossil energi direkte til fornybart. Solceller i Afrika kan gi desentralisert energi uten store kraftnett.
2. **Klimafinansiering:** Rike land finansierer fornybar energi i utviklingsland, slik at de slaepper a bruke fossilt.
3. **Overgangslosninger:** Gass som overgangsbrensel (halvparten sa mye CO₂ som kull) mens fornybar kapasitet bygges ut.

**Laerdom:** Barekraftig utvikling krever at man ser malene i sammenheng og finner losninger som ivaretar flere dimensjoner samtidig.`,
    },
    {
      id: 'sf2-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-5-ex-1',
        number: '6.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med barekraftig utvikling?',
        multipleChoiceOptions: [
          'Utvikling som imotekommer dagens behov uten a odelegge mulighetene for kommende generasjoner',
          'Okonomisk vekst som er sa hoy som mulig pa kort sikt',
          'En utviklingsmodell der miljoet alltid prioriteres over okonomisk vekst',
          'Utvikling som kun fokuserer pa a redusere klimagassutslipp',
        ],
        hints: ['Tenk pa Brundtlandkommisjonens definisjon og de tre dimensjonene av barekraft.'],
        solution: 'Barekraftig utvikling ble definert av Brundtlandkommisjonen (1987) som utvikling som imotekommer dagens behov uten a odelegge mulighetene for at kommende generasjoner skal fa dekket sine behov. Begrepet har tre dimensjoner: okonomisk barekraft (stabil okonomi), sosial barekraft (rettferdighet og velferd) og miljomessig barekraft (bevaring av naturressurser og okosystemer). Alle tre dimensjonene ma ivaretas samtidig.',
      },
    },
    {
      id: 'sf2-6-5-def-esg',
      type: 'definition',
      title: 'ESG-kriterier',
      content: `**ESG** star for **Environmental, Social and Governance** (miljo, sosialt ansvar og selskapsstyring) og er et sett med kriterier som brukes til a vurdere bedrifters og investeringers barekraft.

**E - Environmental (miljo):**
- Klimagassutslipp og karbonfotavtrykk
- Energieffektivitet og bruk av fornybar energi
- Avfallshandtering og resirkulering
- Pavirkning pa biologisk mangfold

**S - Social (sosialt):**
- Arbeidsforhold og arbeidstakerrettigheter
- Mangfold og likestilling
- Helse og sikkerhet pa arbeidsplassen
- Lokalsamfunnspavirkning og menneskerettigheter

**G - Governance (selskapsstyring):**
- Styresammensetning og uavhengighet
- Lonn og bonusordninger for ledelsen
- Antikorrupsjonstiltak
- Transparens og rapportering

**Bruk av ESG:**
- Investorer bruker ESG-kriterier for a identifisere risiko og muligheter.
- Bedrifter rapporterer ESG-data for a tiltrekke investorer og oppfylle regulatoriske krav.
- ESG-ratinger (f.eks. fra MSCI, Sustainalytics) rangerer bedrifter etter barekraftsprestasjon.
- Oljefondet (NBIM) bruker ESG-kriterier og ekskluderer selskaper som bryter etiske retningslinjer.`,
    },
    {
      id: 'sf2-6-5-example-oljefond',
      type: 'example',
      title: 'Eksempel: Oljefondets etiske retningslinjer',
      problem: 'Norges oljefond (Statens pensjonsfond utland) er verdens storste statlige investeringsfond. Hvordan bruker fondet ESG-kriterier, og hvilke dilemmaer oppstar?',
      solution: `**Oljefondets ESG-praksis:**
- Fondet er investert i over 9 000 selskaper i 70 land.
- Etikkradet vurderer selskaper mot etiske retningslinjer og anbefaler utelukkelse ved alvorlige brudd.
- Fondet har utelukket selskaper som produserer kjernevapen, klasebomber, tobakk og kull.
- Fondet driver aktivt eierskap: stemmer pa generalforsamlinger og tar opp ESG-sporsmal med selskapenes ledelse.

**Dilemmaer:**
1. **Avkastning vs. etikk:** Kan utelukkelse av lonnsomme selskaper redusere avkastningen? Forskning viser blandede resultater.
2. **Utelukkelse vs. paavirkning:** Er det mer effektivt a utelukke et selskap (miste innflytelse) eller forbli som eier og presse pa for endring innenfra?
3. **Grensedragninger:** Hvor gar grensen? Fondet eier aksjer i olje- og gasselskaper, noe som er kontroversielt gitt Norges klimamal.
4. **Dobbeltrolle:** Norge tjener penger pa olje og gass, men fondet investerer i selskaper som pavirkes negativt av klimaendringer.

**Trend:** ESG-investeringer har vokst kraftig globalt, og det er et okende press for a tilpasse finanssektoren til klimamalene.`,
    },
    {
      id: 'sf2-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-5-ex-2',
        number: '6.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva star ESG for, og hva brukes det til?',
        multipleChoiceOptions: [
          'Environmental, Social and Governance - kriterier for a vurdere bedrifters barekraft og ansvarlighet',
          'Economic, Strategic and Global - indikatorer for internasjonal handel',
          'Energy, Sustainability and Growth - mal pa okonomisk vekst',
          'Emission, Standard and Guideline - utslippsregler for industrien',
        ],
        hints: ['Tenk pa de tre dimensjonene av barekraft og hvordan de kan males for bedrifter.'],
        solution: 'ESG star for Environmental (miljo), Social (sosialt ansvar) og Governance (selskapsstyring). Det er et sett med kriterier som brukes av investorer, bedrifter og reguleringsmyndigheter for a vurdere og rapportere barekraftsprestasjon. Investorer bruker ESG til a identifisere risiko og muligheter, mens bedrifter bruker det for a tiltrekke kapital og oppfylle regulatoriske krav. Norges oljefond er et fremtredende eksempel pa en investor som bruker ESG aktivt.',
      },
    },
    {
      id: 'sf2-6-5-def-gronnfinans',
      type: 'definition',
      title: 'Gronn finans',
      content: `**Gronn finans** er finansielle produkter, tjenester og reguleringer som kanaliserer kapital mot miljo- og klimavennlige aktiviteter.

**Viktige instrumenter:**

**Gronne obligasjoner (Green Bonds):**
- Laneopptak der pengene oremerkeds gronne prosjekter (fornybar energi, energieffektivisering, rent transport).
- Markedet har vokst kraftig: fra nesten null i 2007 til over 500 milliarder USD arlig.
- Verifiseres av uavhengige tredjeparter for a sikre at midlene brukes som lovet.

**EUs taksonomi:**
- Et klassifiseringssystem som definerer hva som regnes som en «gronn» okonomisk aktivitet.
- Skal forhindre gronnvasking (at aktiviteter fremstilles som gronnere enn de er).
- Stiller krav til at aktiviteter bidrar vesentlig til minst ett miljomal og ikke gjor vesentlig skade pa andre.

**Klimarisiko i finanssektoren:**
- **Fysisk risiko:** Skader fra klimaendringer (flom, torke, brann) som pavirker eiendeler og forsikring.
- **Overgangsrisiko:** Verdtap nar okonomien omstilles (stranded assets, ny regulering, endrede preferanser).
- Sentralbanker og finanstilsyn krever i okende grad at finansinstitusjoner rapporterer klimarisiko (TCFD-rammeverket).`,
    },
    {
      id: 'sf2-6-5-example-gronnvasking',
      type: 'example',
      title: 'Eksempel: Gronnvasking og taksonomi',
      problem: 'Gronnvasking (greenwashing) er et voksende problem. Forklar hva det innebarer og hvordan EUs taksonomi er ment a motvirke det.',
      solution: `**Gronnvasking** er nar en bedrift eller et finansprodukt fremstiller seg som mer miljovennlig enn det faktisk er. Det kan skje gjennom:
- Villedende markedsforing (bilder av natur pa produkter med hoyt fotavtrykk)
- Selektiv rapportering (fremheve positive miljoaspekter, skjule negative)
- Vage paastander («miljovennlig», «gronn» uten dokumentasjon)
- Opprettelse av gronne fond som investerer i lite gronne selskaper

**EUs taksonomi som mottiltak:**
1. **Klar definisjon:** Taksonomien definerer presist hvilke aktiviteter som kvalifiserer som gronne, basert pa vitenskapelige kriterier.
2. **Seks miljomal:** Aktiviteter vurderes mot klimatilpasning, klimareduksjon, vann, sirkulaer okonomi, forurensning og biologisk mangfold.
3. **Dobbelttest:** Aktiviteten ma bidra vesentlig til minst ett mal og ikke gjore vesentlig skade pa noen av de andre (DNSH - Do No Significant Harm).
4. **Rapporteringsplikt:** Store selskaper ma rapportere hvor stor andel av omsetningen som er taksonomi-kvalifisert.

**Utfordring:** Taksonomien er kompleks, og det er politisk uenighet om grensetilfeller (er gass og kjernekraft «gronnt»?). Men prinsippet om en vitenskapelig basert standard er viktig for a bygge tillit til gronn finans.`,
    },
    {
      id: 'sf2-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-5-ex-3',
        number: '6.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for FNs baerekraftsmal (SDG). Droft hvorfor det kan oppsta konflikter mellom malene, og gi et konkret eksempel pa en slik malkonflikt.',
        hints: [
          'Tenk pa at malene dekker okonomiske, sosiale og miljomessige dimensjoner.',
          'Vurder hva som skjer nar et land forsaker a oke okonomisk vekst og samtidig kutte utslipp.',
        ],
        solution: 'FNs baerekraftsmal er 17 globale mal vedtatt i 2015 som spenner fra fattigdomsbekjempelse til klimahandling. Malkonflikter oppstar fordi fremgang pa ett mal kan hindre fremgang pa et annet. Eksempel: Mal 8 (okonomisk vekst) kan komme i konflikt med mal 13 (klimahandling) dersom veksten er fossil-basert. Et utviklingsland som bruker kull for a industrialisere (mal 8, 9) forverrer klimaproblemet (mal 13) og kan skade okosystemer (mal 14, 15). Losningen krever integrert tenkning: bruke fornybar energi for a kombinere energitilgang og klimamal, og finne utviklingsveier som ivaretar flere dimensjoner samtidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-5-ex-4',
        number: '6.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva ESG-kriterier er og hvordan de brukes i finanssektoren. Droft om ESG-investeringer kan bidra til barekraftig utvikling.',
        hints: [
          'Beskriv de tre komponentene E, S og G med eksempler.',
          'Vurder om investorer som bruker ESG-kriterier faktisk pavirker bedrifters atferd.',
        ],
        solution: 'ESG-kriterier vurderer bedrifter pa tre dimensjoner: Environmental (miljo - utslipp, energibruk), Social (sosialt - arbeidsforhold, menneskerettigheter) og Governance (styring - transparens, antikorrupsjon). Finanssektoren bruker ESG til a vurdere risiko og identifisere langsiktig verdiskaping. ESG kan bidra til barekraft fordi: 1) Kapital kanaliseres mot ansvarlige selskaper. 2) Bedrifter far insentiver til a forbedre ESG-prestasjon for a tiltrekke investorer. 3) Aktivt eierskap kan presse selskaper til endring. Begrensninger: ESG-ratinger er inkonsistente mellom ulike byraer, gronnvasking er utbredt, og sammenhengen mellom ESG-score og faktisk miljopavirkning er ikke alltid klar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Barekraftig utvikling

- **Barekraftig utvikling** har tre dimensjoner: okonomisk, sosial og miljomessig.
- **FNs baerekraftsmal** gir et globalt rammeverk, men er ambisiose og har malkonflikter.
- **ESG-kriterier** (miljo, sosialt, styring) brukes av investorer til a vurdere barekraftsprestasjon.
- **Gronn finans** kanaliserer kapital mot barekraftige aktiviteter gjennom gronne obligasjoner, taksonomier og klimarisikorapportering.
- **Gronnvasking** er en utfordring som EUs taksonomi forsaker a motvirke med klare definisjoner.
- Norges oljefond viser bade mulighetene og dilemmaene ved ansvarlige investeringer.`,
    },
    {
      id: 'sf2-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-5-ex-5',
        number: '6.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft hvordan gronn finans kan bidra til a na klimamalene. Vurder bade muligheter og begrensninger ved finansielle virkemidler som gronne obligasjoner og EUs taksonomi.',
        hints: [
          'Tenk pa hvordan kapitalen styres og hvem som tar beslutningene.',
          'Vurder om finansmarkedet kan lose problemet uten politisk regulering.',
        ],
        solution: 'Muligheter: Gronn finans kan kanalisere enorme mengder privat kapital mot klimavennlige investeringer - noe som er nodvendig fordi offentlige midler alene ikke er tilstrekkelige. Gronne obligasjoner gir oremerking av midler, EUs taksonomi gir klarhet om hva som er gronnt, og klimarisikorapportering gjor investorer bevisste pa risikoen ved fossile investeringer. Begrensninger: Gronne obligasjoner endrer ikke nddvendigvis bedriftens totale strategi, bare finansieringen av enkeltprosjekter. Taksonomien er politisk pavirket (kjernekraft/gass-debatten). Gronnvasking undergraver tilliten. Og finansmarkedet kan ikke alene drive omstillingen - det trengs ogsa karbonprising, regulering og offentlige investeringer for a endre de grunnleggende insentivene i okonomien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-6-5-ex-6',
        number: '6.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norges oljefond bruker ESG-kriterier og har utelukket selskaper pa etisk grunnlag. Droft dilemmaene fondet star overfor, og vurder om utelukkelse eller aktivt eierskap er den mest effektive strategien for a fremme barekraft.',
        hints: [
          'Tenk pa forskjellen mellom a selge seg ut og a bruke eierposisjonen til a pavirke.',
          'Vurder signaleffekten av utelukkelse versus den direkte pavirkningen av aktivt eierskap.',
        ],
        solution: 'Dilemmaer: 1) Fondet eier aksjer i olje- og gasselskaper samtidig som Norge har ambisiose klimamal. 2) Utelukkelse reduserer innflytelsen, men sender et tydelig signal. 3) Aktivt eierskap krever ressurser og gir usikre resultater. 4) Norges dobbeltrolle som oljeprodusent og klimaforkjemper. Utelukkelse: effektivt signal, men aksjene kjopes av andre investorer som kanskje bryr seg mindre. Aktivt eierskap: direkte pavirkning gjennom stemmegiving og dialog, men krever at selskapet faktisk lytter. Optimal strategi er trolig en kombinasjon: utelukkelse for de groveste overgriperne (kjernevapen, kull) og aktivt eierskap for selskaper der fondet kan drive endring innenfra. Forskning tyder pa at aktivt eierskap kan vare mer effektivt enn utelukkelse for a endre bedriftspraksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SAMFOKONOMI_2_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_6_1, CHAPTER_SAMFOKONOMI_2_6_2, CHAPTER_SAMFOKONOMI_2_6_3,
  CHAPTER_SAMFOKONOMI_2_6_4, CHAPTER_SAMFOKONOMI_2_6_5,
];
