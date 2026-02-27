/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - NARRATIV VERSJON DEL 6
 * Kapittel 23-28: Personlig oekonomi og arbeidsliv (Narrativ versjon)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 23 NARRATIV: Personlig oekonomi — Budsjett og sparing
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_23_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-23-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '23',
  title: 'Personlig økonomi — Budsjett og sparing',
  subtitle: 'Narrativ versjon',
  description: 'En praktisk fortelling om hvordan du tar kontroll over oekonomien din, setter opp budsjett og begynner aa spare -- med tips om BSU og renter.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for hovedtrekk ved arbeidslivet i Norge og velferdsstatens organisering'],
  linkedChapterId: 'samfunnsfag-10-23',
  content: [
    {
      id: 'samfunnsfag-10-23-n-intro',
      type: 'text',
      content: `## Pengene dine -- hvem bestemmer over dem?

Tenk deg at du nettopp har faat din foerste loenn. Kanskje det er fra en sommerjobb, eller kanskje du har begynt aa jobbe litt ved siden av skolen. Kontoen din viser et beloeep du aldri har hatt foer. Det foeles fantastisk. Men saa begynner spoersmaalene: Skal du kjoepe den jakken du har oensket deg? Spare til foererkortet? Legge noe til side for fremtiden?

Velkommen til **personlig oekonomi** -- kunsten aa styre pengene dine slik at de rekker til det du trenger og oensker deg. Det hoeres kanskje kjedelig ut, men det er faktisk en av de mest nyttige ferdighetene du kan laere. De som forstaar personlig oekonomi, opplever mindre stress, har flere valgmuligheter og slipper aa ligge vaaken om natten og bekymre seg for regninger.

Det hele begynner med to ord: **inntekter** og **utgifter**. Inntektene dine er pengene som kommer inn -- loenn, stipend, lommepenger. Utgiftene er pengene som gaar ut -- mat, klaaer, transport, underholdning. Saa lenge inntektene er stoerre enn utgiftene, er du i pluss. Saa enkelt -- og saa vanskelig -- er det.`,
    },
    {
      id: 'samfunnsfag-10-23-n-section1',
      type: 'text',
      content: `## Budsjett -- ditt oekonomiske veikart

Et **budsjett** er rett og slett en plan for hva du skal bruke pengene paa. Det er som et kart: det viser deg hvor du er, og hjelper deg aa komme dit du vil.

Aa lage et budsjett trenger ikke vaere komplisert. Begynn med aa skrive ned alle inntektene dine for en maaned. Deretter lister du opp alle faste utgifter -- det som maa betales uansett, som telefonabonnement, busskort, eller andel av husleie om du bor for deg selv. Saa kommer de variable utgiftene: mat, klaaer, fritidsaktiviteter. Til slutt ser du hva som er igjen.

Et godt tips er **50-30-20-regelen**: Bruk omtrent 50 prosent paa det du maa ha (behov), 30 prosent paa det du har lyst paa (oensker), og spar minst 20 prosent. Det er en tommelfingerregel, ikke en lov -- men den gir et godt utgangspunkt.

Det viktigste med et budsjett er ikke at du foelger det perfekt. Det viktigste er at du blir **bevisst** paa hvor pengene gaar. Mange som begynner aa foere budsjett, blir overrasket over hvor mye de bruker paa smaa ting -- en kaffekopp her, et impulskoep der. Disse smaabeloepene laerer seg raskt opp.`,
    },
    {
      id: 'samfunnsfag-10-23-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-23-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa budsjett og oekonomi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-23-n-quiz1-q0',
            task: 'Hva er et budsjett?',
            options: [
              { id: 'a', text: 'En konto i banken der du sparer penger', isCorrect: false },
              { id: 'b', text: 'En plan for hva du skal bruke pengene dine paa', isCorrect: true },
              { id: 'c', text: 'En regning du maa betale til staten', isCorrect: false },
              { id: 'd', text: 'Et laan du tar opp for aa kjoepe noe dyrt', isCorrect: false },
            ],
            solution: 'Et budsjett er en plan for inntektene og utgiftene dine. Det hjelper deg aa holde oversikt og sikre at pengene rekker til det du trenger.',
          },
          {
            id: 'samfunnsfag-10-23-n-quiz1-q1',
            task: 'Hva sier 50-30-20-regelen?',
            options: [
              { id: 'a', text: '50 % skatt, 30 % sparing, 20 % forbruk', isCorrect: false },
              { id: 'b', text: '50 % behov, 30 % oensker, 20 % sparing', isCorrect: true },
              { id: 'c', text: '50 % husleie, 30 % mat, 20 % transport', isCorrect: false },
              { id: 'd', text: '50 % sparing, 30 % behov, 20 % oensker', isCorrect: false },
            ],
            solution: '50-30-20-regelen er en tommelfingerregel for budsjett: 50 % til behov (faste utgifter), 30 % til oensker (fritid, klaaer), og 20 % til sparing.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-23-n-section2',
      type: 'text',
      content: `## Sparing og renter -- la pengene jobbe for deg

Sparing handler om aa sette av penger til fremtiden. Det kan vaere til noe konkret -- som foererkort, en reise eller en ny mobil -- eller det kan vaere en buffer for uforutsette utgifter.

Naar du setter penger i banken, faar du **renter** -- banken betaler deg for aa laa pengene dine staa der. Renten er vanligvis lav paa en vanlig sparekonto, men over tid kan **rentesrenteeffekten** gjoere underverker. Rentes rente betyr at du faar renter ogsaa paa rentene du allerede har opptjent. Jo lenger du sparer, jo kraftigere blir effekten.

For unge under 34 aar finnes det en saerlig god spareordning: **BSU (Boligsparing for ungdom)**. Med BSU faar du hoeaere rente enn paa en vanlig konto, og du faar **skattefradrag** -- staten gir deg 10 prosent av det du sparer tilbake paa skatten (opp til 27 500 kroner i aaret). BSU-pengene er oeremerket bolig, saa de kan bare brukes til aa kjoepe bolig eller betale ned boliglaan. Det er en av de smarteste maatene aa spare paa i Norge.

Det viktigste med sparing er aa begynne tidlig. Selv smaa beloeap gjoer en forskjell naar de faar vokse over tid. En tusenlapp i maaneden fra du er 16 til du er 25 blir til over 100 000 kroner -- uten aa telle med rentene.`,
    },
    {
      id: 'samfunnsfag-10-23-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-23-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa sparing:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-23-n-quiz2-q0',
            task: 'Hva er rentesrenteeffekten?',
            options: [
              { id: 'a', text: 'At du maa betale renter paa rentene du skylder', isCorrect: false },
              { id: 'b', text: 'At du faar renter ogsaa paa rentene du allerede har opptjent', isCorrect: true },
              { id: 'c', text: 'At renten oeker jo mer du sparer', isCorrect: false },
              { id: 'd', text: 'At banken tar mer i gebyr naar renten stiger', isCorrect: false },
            ],
            solution: 'Rentesrenteeffekten betyr at du faar renter paa rentene du allerede har opptjent. Over tid gjoer dette at sparingen din vokser raskere og raskere.',
          },
          {
            id: 'samfunnsfag-10-23-n-quiz2-q1',
            task: 'Hva er BSU?',
            options: [
              { id: 'a', text: 'Et laan til studenter', isCorrect: false },
              { id: 'b', text: 'En spareordning for unge under 34 aar med skattefordeler, oeremerket bolig', isCorrect: true },
              { id: 'c', text: 'En forsikringsordning for unge arbeidstakere', isCorrect: false },
              { id: 'd', text: 'Et stipend fra Laanekassen', isCorrect: false },
            ],
            solution: 'BSU (Boligsparing for ungdom) er en spareordning for unge under 34 aar. Du faar skattefradrag paa 10 % av det du sparer, og pengene kan brukes til aa kjoepe bolig.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-23-n-summary',
      type: 'text',
      content: `## Oppsummering

Personlig oekonomi handler om aa ta kontroll over pengene dine. Det begynner med aa forstaa **inntekter og utgifter**, og aa lage et **budsjett** -- en plan for pengebruken din. **50-30-20-regelen** gir et godt utgangspunkt.

**Sparing** er nokkelen til oekonomisk trygghet. **Rentesrenteeffekten** gjoer at selv smaa beloeap vokser over tid. **BSU** er en saerlig smart spareordning for unge, med skattefordeler og hoeye renter.

Den viktigste laeardommen er enkel: vit hva du har, vit hva du bruker, og begynn aa spare saa tidlig som mulig. Det gir deg frihet til aa ta de valgene du oensker i livet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 24 NARRATIV: Forbruk og gjeld
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_24_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-24-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '24',
  title: 'Forbruk og gjeld',
  subtitle: 'Narrativ versjon',
  description: 'En advarende og laererik fortelling om forbrukerkulturen, kredittkort, gjeldsfeller og rettighetene du har som forbruker.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for hovedtrekk ved arbeidslivet i Norge og velferdsstatens organisering'],
  linkedChapterId: 'samfunnsfag-10-24',
  content: [
    {
      id: 'samfunnsfag-10-24-n-intro',
      type: 'text',
      content: `## Koep naa, betal senere -- men til hvilken pris?

Det har aldri vaert enklere aa bruke penger. Med et par trykk paa telefonen kan du bestille alt fra klaaer til elektronikk, og det leveres paa doeren neste dag. «Koep naa, betal senere»-loesninger frister med at du kan faa det du vil uten aa ha pengene ennaa. Kredittkort gir deg tilgang til penger du ennaa ikke har tjent.

Men denne enkelheten har en bakside. Norge opplever at stadig flere, ogsaa unge, havner i **gjeldsproblemer**. Forbruksgjeld -- gjeld som ikke er knyttet til bolig -- har eksplodert. Og for dem som havner i en gjeldsspiral, kan livet bli svaaert vanskelig.

I dette kapittelet skal vi se naermere paa **forbrukerkulturen**, hva som skjer naar gjelden tar overhaaand, og hvilke rettigheter du har som forbruker i Norge.`,
    },
    {
      id: 'samfunnsfag-10-24-n-section1',
      type: 'text',
      content: `## Forbrukerkulturen og reklamens makt

Vi lever i et **forbrukersamfunn** -- et samfunn der det aa kjoepe ting er en sentral del av hverdagen. Reklame omgir oss overalt: paa sosiale medier, i gatene, paa TV, paa mobilen. Hver dag blir du eksponert for hundrevis av budskap som proever aa faa deg til aa kjoepe noe.

Reklamen bruker sofistikerte teknikker. Den spiller paa foelelser -- du blir penere, kulere, lykkeligere hvis du kjoepe dette produktet. **Influencere** markedsfoerer produkter saa soemloest at det kan vaere vanskelig aa skille reklame fra vanlig innhold. Algoritmer soeraer for at du faar se annonser for akkurat det du er interessert i.

Det er ingenting galt i aa kjoepe ting du oensker deg. Problemet oppstaar naar forbruket blir ukontrollert -- naar du kjoeaper ting du ikke har raad til, eller naar shopping blir en maate aa haandtere daalige foelelser paa. **Impulskjoep** -- ting du kjoeaper i oeyeblikket uten aa tenke deg om -- er en av de vanligste grunnene til at folk bruker mer enn de har.

Som forbruker i Norge har du viktige **rettigheter**. **Angrerettloven** gir deg 14 dagers angrefrist paa nettkjoep. **Forbrukerkjoepsloven** beskytter deg mot feil og mangler paa varer du kjoeaper. **Reklamasjonsretten** gir deg rett til aa klage paa produkter som ikke holder maalet. Disse lovene finnes for aa beskytte deg som den svakere parten i forholdet mellom deg og selger.`,
    },
    {
      id: 'samfunnsfag-10-24-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-24-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa forbruk og rettigheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-24-n-quiz1-q0',
            task: 'Hva gir angrerettloven deg rett til?',
            options: [
              { id: 'a', text: 'Gratis frakt paa alle varer', isCorrect: false },
              { id: 'b', text: '14 dagers angrefrist paa nettkjoep', isCorrect: true },
              { id: 'c', text: 'Pengene tilbake paa alle kjoep i butikk', isCorrect: false },
              { id: 'd', text: 'Aa bytte varer ubegrenset antall ganger', isCorrect: false },
            ],
            solution: 'Angrerettloven gir deg 14 dagers angrefrist paa kjoep gjort utenom fast forretningslokale, typisk nettkjoep. Du kan returnere varen uten aa oppgi grunn.',
          },
          {
            id: 'samfunnsfag-10-24-n-quiz1-q1',
            task: 'Hva er et impulskjoep?',
            options: [
              { id: 'a', text: 'Et kjoep du har planlagt lenge', isCorrect: false },
              { id: 'b', text: 'Et kjoep du gjoer i oeyeblikket uten aa tenke deg om', isCorrect: true },
              { id: 'c', text: 'Et kjoep av noedvendige varer som mat og klaaer', isCorrect: false },
              { id: 'd', text: 'Et kjoep gjort med kredittkort', isCorrect: false },
            ],
            solution: 'Impulskjoep er uplanlagte kjoep du gjoer i oeyeblikket, ofte drevet av foelelser eller fristelser. Det er en av de vanligste aarsakene til at folk bruker mer enn planlagt.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-24-n-section2',
      type: 'text',
      content: `## Kredittkort, gjeld og gjeldsfellen

Et **kredittkort** lar deg bruke penger du ikke har ennaa. Banken gir deg en kredittramme, og du kan handle for dette beloepet. Problemet er at hvis du ikke betaler tilbake hele beloepet i tide, paaioeper det **renter** -- ofte svaaert hoeye renter, gjerne 20-25 prosent i aaret.

La oss ta et eksempel. Du kjoepar en ny mobil til 10 000 kroner paa kredittkort og betaler bare minimumsbeloepet hver maaned. Med 20 prosent rente ender du opp med aa betale mange tusen kroner ekstra. Det som var et greit kjoep, blir ploetselig svaaert dyrt.

**Forbrukslaan** -- smaalaan uten sikkerhet -- er enda farligere. Renten er ofte enda hoeyrere enn paa kredittkort, og det er lett aa ta opp flere laan for aa betale ned andre laan. Da er du i en **gjeldsspiral**: du laaner for aa betale gjeld, som skaper ny gjeld, som krever nye laan.

For dem som havner i alvorlige gjeldsproblemer, finnes det hjelp. **NAV** og **oekonomiske raadgivere** i kommunen kan hjelpe med aa lage en plan for aa komme ut av gjelden. I alvorlige tilfeller kan man soeke om **gjeldsordning** -- en rettslig ordning der gjelden reduseres mot at du lever spaarsomelig i flere aar.

Det beste raadetat er foreabygging: bruk aldri kredittkort til ting du ikke kan betale for med en gang, vaer kritisk til «koep naa, betal senere»-loesninger, og si nei til forbrukslaan.`,
    },
    {
      id: 'samfunnsfag-10-24-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-24-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa gjeld:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-24-n-quiz2-q0',
            task: 'Hva er en gjeldsspiral?',
            options: [
              { id: 'a', text: 'Naar du sparer saa mye at du ikke har raad til mat', isCorrect: false },
              { id: 'b', text: 'Naar du laaner for aa betale gjeld, som skaper ny gjeld', isCorrect: true },
              { id: 'c', text: 'Naar renten paa sparekontoen gaar ned', isCorrect: false },
              { id: 'd', text: 'Naar du betaler ned boliglanet raskere enn planlagt', isCorrect: false },
            ],
            solution: 'En gjeldsspiral oppstaar naar du tar opp nye laan for aa betale paa gammel gjeld. Gjelden vokser stadig paa grunn av hoeye renter, og det blir vanskeligere og vanskeligere aa komme ut av den.',
          },
          {
            id: 'samfunnsfag-10-24-n-quiz2-q1',
            task: 'Hvorfor er forbrukslaan saerlig risikable?',
            options: [
              { id: 'a', text: 'Fordi de har lav rente og lang nedbetalingstid', isCorrect: false },
              { id: 'b', text: 'Fordi de ikke trenger aa betales tilbake', isCorrect: false },
              { id: 'c', text: 'Fordi de har svaaert hoey rente og er lette aa ta opp', isCorrect: true },
              { id: 'd', text: 'Fordi de bare er tilgjengelige for voksne over 25 aar', isCorrect: false },
            ],
            solution: 'Forbrukslaan har ofte svaaert hoey rente (opptil 20-25 % eller mer) og er lette aa ta opp, noe som gjoer det fristende -- men ogsaa farlig. Mange havner i gjeldsproblemer paa grunn av forbrukslaan.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-24-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi lever i et **forbrukersamfunn** der reklame og «koep naa, betal senere»-loesninger frister til oeverforbruk. Som forbruker har du rettigheter gjennom **angrerettloven**, **forbrukerkjoepsloven** og **reklamasjonsretten**.

**Kredittkort** og **forbrukslaan** kan foere til gjeldsproblemer hvis de misbrukes. Hoeye renter gjoer at gjelden vokser raskt, og en **gjeldsspiral** kan vaere svaaert vanskelig aa komme ut av. For dem som trenger hjelp, finnes oekonomisk raadgivning og gjeldsordning.

Den beste strategien er aa vaere bevisst paa forbruksmoenstrene dine, unngaa aa kjoepe ting du ikke har raad til, og aldri ta opp laan du ikke er sikker paa at du kan betale tilbake.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 25 NARRATIV: Arbeidsliv og rettigheter
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_25_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-25-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '25',
  title: 'Arbeidsliv og rettigheter',
  subtitle: 'Narrativ versjon',
  description: 'En praktisk guide til rettighetene dine i arbeidslivet -- fra arbeidskontrakt og arbeidsmiljoe til fagforeninger og tariffavtaler.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for hovedtrekk ved arbeidslivet i Norge og velferdsstatens organisering'],
  linkedChapterId: 'samfunnsfag-10-25',
  content: [
    {
      id: 'samfunnsfag-10-25-n-intro',
      type: 'text',
      content: `## Din foerste jobb -- hva har du krav paa?

Forestill deg at du faar din foerste ordentlige jobb. Kanskje det er paa en kafé, i en butikk eller som laeralring. Du er spent og nervoes. Men vet du egentlig hva du har krav paa?

I Norge har arbeidstakere sterke **rettigheter**. Det er ikke tilfeldig -- de er resultatet av over hundre aars kamp fra arbeiderbevegelsen. Foer fagforeningene ble sterke, kunne arbeidsgivere betale sa lite de ville, kreve 12-timersdager og sparke folk uten grunn. I dag er situasjonen helt annerledes, takket vaere lover og avtaler som beskytter deg.

Men rettigheter er bare nyttige hvis du kjenner dem. Altfor mange unge arbeidstakere aksepterer forhold som ikke er lovlige -- svart arbeid, manglende kontrakt, for lav loenn. La oss seerge for at du ikke er en av dem.`,
    },
    {
      id: 'samfunnsfag-10-25-n-section1',
      type: 'text',
      content: `## Arbeidskontrakten -- ditt viktigste dokument

Det foerste du skal faa naar du begynner i en jobb, er en **arbeidskontrakt**. Det er lovpaalagtg -- arbeidsgiveren din **maa** gi deg en skriftlig kontrakt. Den skal inneholde viktig informasjon: hva jobben din er, hvor mye du faar betalt, hvor mange timer du skal jobbe, og hvilke rettigheter du har.

**Arbeidsmiljoeloven** er den viktigste loven som beskytter deg paa jobben. Den regulerer alt fra arbeidstid til oppsigelse. Noen viktige punkter:

**Arbeidstid**: Du kan normalt ikke jobbe mer enn 9 timer i loepet av 24 timer, og ikke mer enn 40 timer i uken. Er du under 18 aar, gjelder strengere regler. Overtid maa betales ekstra.

**Arbeidsmiljoe**: Arbeidsgiveren har plikt til aa seerge for et forsvarlig arbeidsmiljoe -- baade fysisk og psykisk. Det betyr at arbeidsplassen skal vaere trygg, og at du ikke skal utsettes for mobbing, trakassering eller uforsvarlig press.

**Oppsigelse**: Du kan ikke sparkes uten saklig grunn. Hvis du blir sagt opp, har du krav paa oppsigelsestid -- vanligvis minst en maaned. Under proevetiden (vanligvis seks maaneder) gjelder kortere frister, men selv da maa oppsigelsen vaere saklig begrunnet.

**Ferie**: Alle arbeidstakere har rett til minst 25 virkedager ferie i aaret, og du har rett til feriepenger -- normalt 10,2 prosent av loennen du tjente aaret foer.`,
    },
    {
      id: 'samfunnsfag-10-25-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-25-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa arbeidsrettigheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-25-n-quiz1-q0',
            task: 'Er arbeidsgiveren din pliktig til aa gi deg en skriftlig arbeidskontrakt?',
            options: [
              { id: 'a', text: 'Nei, det er frivillig for arbeidsgiveren', isCorrect: false },
              { id: 'b', text: 'Ja, det er lovpaalagt', isCorrect: true },
              { id: 'c', text: 'Bare hvis du jobber mer enn 20 timer i uken', isCorrect: false },
              { id: 'd', text: 'Bare hvis du ber om det selv', isCorrect: false },
            ],
            solution: 'Ja, det er lovpaalagt at alle arbeidstakere skal ha en skriftlig arbeidskontrakt. Det staar i arbeidsmiljoeloven.',
          },
          {
            id: 'samfunnsfag-10-25-n-quiz1-q1',
            task: 'Hva er den normale maksimale arbeidstiden per uke ifoeoge arbeidsmiljoeloven?',
            options: [
              { id: 'a', text: '35 timer', isCorrect: false },
              { id: 'b', text: '37,5 timer', isCorrect: false },
              { id: 'c', text: '40 timer', isCorrect: true },
              { id: 'd', text: '45 timer', isCorrect: false },
            ],
            solution: 'Arbeidsmiljoeloven setter den normale maksimale arbeidstiden til 40 timer per uke (9 timer per dag). Mange tariffavtaler gir kortere arbeidstid, f.eks. 37,5 timer.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-25-n-section2',
      type: 'text',
      content: `## Fagforeninger og tariffavtaler

En av grunnene til at norske arbeidstakere har saa gode rettigheter, er **fagforeningene**. En fagforening er en organisasjon av arbeidstakere som staar sammen for aa forhandle med arbeidsgiverne om loenn, arbeidstid og arbeidsforhold.

Tanken er enkel: alene er du svak overfor arbeidsgiveren, men sammen er dere sterke. Naar tusenvis av arbeidstakere staar samlet bak ett krav, har de mye stoerre forhandlingskraft enn noen av dem ville hatt alene.

Resultatet av forhandlingene mellom fagforeninger og arbeidsgiverorganisasjoner kalles **tariffavtaler**. Det er avtaler som gjelder for alle ansatte innenfor et omraade, og de regulerer minimumsloenn, arbeidstid, overtidsbetaling, pensjonsordninger og mye mer. I mange bransjer gir tariffavtalen bedre vilkaar enn det loven krever.

Hvert aar forhandler partene i arbeidslivet om nye loennstillegg. Hvis de ikke blir enige, kan fagforeningen gaa til **streik** -- det vil si at medlemmene nekter aa jobbe. Arbeidsgiverne kan paa sin side bruke **lockout** -- stenge arbeidstakerne ute. Begge deler er lovlige virkemidler, men brukes sjelden fordi partene vanligvis klarer aa bli enige.

De stoerste fagforeningene i Norge er **LO** (Landsorganisasjonen), **Unio** og **YS**. Paa arbeidsgiversiden finner vi blant annet **NHO** (Naaeringslivets Hovedorganisasjon). Samspillet mellom disse partene er en av baerebjelkene i det norske arbeidslivet.`,
    },
    {
      id: 'samfunnsfag-10-25-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-25-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa fagforeninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-25-n-quiz2-q0',
            task: 'Hva er en tariffavtale?',
            options: [
              { id: 'a', text: 'En lov vedtatt av Stortinget om arbeidsforhold', isCorrect: false },
              { id: 'b', text: 'En avtale mellom fagforening og arbeidsgiver om loenn og arbeidsforhold', isCorrect: true },
              { id: 'c', text: 'En personlig avtale mellom deg og sjefen din', isCorrect: false },
              { id: 'd', text: 'En internasjonal avtale om arbeidstid', isCorrect: false },
            ],
            solution: 'En tariffavtale er en avtale forhandlet frem mellom fagforeninger og arbeidsgiverorganisasjoner. Den regulerer loenn, arbeidstid og andre arbeidsvilkaar for alle ansatte i omraadet.',
          },
          {
            id: 'samfunnsfag-10-25-n-quiz2-q1',
            task: 'Hva er streik?',
            options: [
              { id: 'a', text: 'Naar arbeidsgiveren stenger arbeidsplassen', isCorrect: false },
              { id: 'b', text: 'Naar arbeidstakerne nekter aa jobbe for aa presse gjennom krav', isCorrect: true },
              { id: 'c', text: 'Naar staten bestemmer loenn for alle', isCorrect: false },
              { id: 'd', text: 'Naar en arbeidstaker slutter i jobben', isCorrect: false },
            ],
            solution: 'Streik er naar arbeidstakere nekter aa jobbe som et pressmiddel i loennsforhandlinger. Det er et lovlig virkemiddel som brukes naar partene ikke klarer aa bli enige.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-25-n-summary',
      type: 'text',
      content: `## Oppsummering

I Norge har arbeidstakere sterke rettigheter, forankret i **arbeidsmiljoeloven**. Du har krav paa skriftlig **arbeidskontrakt**, regulert arbeidstid, trygt arbeidsmiljoe, oppsigelsesvearn og ferie med feriepenger.

**Fagforeninger** er organisasjoner der arbeidstakere staar sammen for aa forhandle om bedre vilkaar. Gjennom **tariffavtaler** fastsettes loenn, arbeidstid og andre rettigheter. Streik og lockout er lovlige virkemidler naar partene ikke blir enige.

Disse rettighetene er ikke selvfoelgelige -- de er resultatet av generasjoners kamp. Aa kjenne rettighetene dine er det foerste steget til aa forsvare dem.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 26 NARRATIV: Entreprenoerskap og innovasjon
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_26_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-26-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '26',
  title: 'Entreprenørskap og innovasjon',
  subtitle: 'Narrativ versjon',
  description: 'En inspirerende fortelling om gruendere, forretningsplaner og innovasjon -- og hva som skal til for aa gaa fra idé til virkelighet.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for hovedtrekk ved arbeidslivet i Norge og velferdsstatens organisering'],
  linkedChapterId: 'samfunnsfag-10-26',
  content: [
    {
      id: 'samfunnsfag-10-26-n-intro',
      type: 'text',
      content: `## Fra idé til virkelighet

Visste du at noen av de stoerste selskapene i verden begynte i en garasje? Apple ble startet av Steve Jobs og Steve Wozniak i en garasje i California. IKEA ble startet av en 17-aarig svensk gutt som solgte fyrstikker og julepynt. Og her hjemme begynte Kahoot! som et forskningsprosjekt ved NTNU foer det ble en global suksess.

**Entreprenoerskap** handler om aa se muligheter der andre ser problemer, og aa ha motet til aa handle paa ideene sine. En **entreprenoer** (eller gruender) er noen som starter en ny virksomhet -- enten det er en kafé paa hjornet, en teknologibedrift eller en frivillig organisasjon.

Men entreprenoerskap handler ikke bare om aa tjene penger. Det handler ogsaa om **innovasjon** -- aa finne nye og bedre maater aa gjoere ting paa. Hver gang noen utvikler en ny app, en ny teneste eller et nytt produkt som loeser et problem, er det innovasjon i praksis.`,
    },
    {
      id: 'samfunnsfag-10-26-n-section1',
      type: 'text',
      content: `## Forretningsplanen -- idéen paa papir

La oss si at du har en idé du brenner for. Kanskje du vil starte en klesvask-teneste for travle studenter, eller utvikle en app som hjelper folk aa finne turstier. Hva gjoer du naa?

Det foerste steget er aa lage en **forretningsplan**. Det er et dokument som beskriver idéen din, markedet du retter deg mot, hvordan du skal tjene penger, og hva som maa til for aa lykkes. En god forretningsplan inneholder vanligvis:

**Forretningsidé**: Hva tilbyr du, og hvilket problem loeser du? **Marked og kunder**: Hvem skal kjoepe det du tilbyr, og hvor mange potensielle kunder finnes det? **Konkurrenter**: Hvem andre tilbyr lignende ting, og hva gjoer din loesning bedre? **OEkonomi**: Hva koster det aa starte, og naar begynner du aa tjene penger? **Organisasjon**: Hvem gjoer hva, og hvilken kompetanse trenger dere?

Forretningsplanen er ikke bare for investorer -- den er foerst og fremst for deg selv. Den tvinger deg til aa tenke grundig gjennom idéen din og avdekke svakheter foer du investerer tid og penger.

I Norge finnes det mange stoetteordninger for gruendere. **Innovasjon Norge** tilbyr raadgivning, laeng og tilskudd. **Ungt Entreprenoerskap** (UE) jobber med aa laere unge om entreprenoerskap gjennom praktiske prosjekter. Mange elever i ungdomsskolen og videregaaende driver elevbedrifter gjennom UE -- og noen av dem har blitt til reelle bedrifter etter skolen.`,
    },
    {
      id: 'samfunnsfag-10-26-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-26-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa entreprenoerskap:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-26-n-quiz1-q0',
            task: 'Hva er en forretningsplan?',
            options: [
              { id: 'a', text: 'En kontrakt mellom bedriften og banken', isCorrect: false },
              { id: 'b', text: 'Et dokument som beskriver forretningsidéen, markedet, oekonomien og organisasjonen', isCorrect: true },
              { id: 'c', text: 'En soeknad om stoette fra staten', isCorrect: false },
              { id: 'd', text: 'En logg over alle salg bedriften gjoer', isCorrect: false },
            ],
            solution: 'En forretningsplan er et dokument som beskriver forretningsidéen, markedet, konkurrentene, oekonomien og organisasjonen. Den hjelper gruenderen aa tenke grundig gjennom idéen.',
          },
          {
            id: 'samfunnsfag-10-26-n-quiz1-q1',
            task: 'Hva gjoer Innovasjon Norge?',
            options: [
              { id: 'a', text: 'De driver skoler for entreprenoerer', isCorrect: false },
              { id: 'b', text: 'De tilbyr raadgivning, laan og tilskudd til gruendere og bedrifter', isCorrect: true },
              { id: 'c', text: 'De bestemmer hvilke bedrifter som faar lov til aa starte opp', isCorrect: false },
              { id: 'd', text: 'De selger norske produkter i utlandet', isCorrect: false },
            ],
            solution: 'Innovasjon Norge er et statlig selskap som tilbyr raadgivning, laan og tilskudd til gruendere og bedrifter som vil utvikle nye idéer og vokse.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-26-n-section2',
      type: 'text',
      content: `## Innovasjon, risiko og samfunnsverdi

Aa starte noe eget innebaaaerer alltid **risiko**. De fleste nye bedrifter lykkes ikke. Men de som lykkes, kan skape enorm verdi -- baade for gruenderen og for samfunnet. Nye bedrifter skaper arbeidsplasser, loeser problemer og driver utviklingen fremover.

**Innovasjon** trenger ikke aa vaere revolusjonaer. Det kan vaere smaa forbedringer: en butikk som finner en smartere maate aa organisere lageret paa, en laerer som utvikler en ny undervisningsmetode, eller en bonde som proever ut en ny avling. Det viktige er viljen til aa tenke nytt og proeve noe annerledes.

I dag er **sosialt entreprenoerskap** blitt stadig viktigere. Sosiale entreprenoerer starter virksomheter som loeser samfunnsproblemer -- som fattigdom, utenforskap eller miljoeutfordringer -- og der profitt ikke noedevendigvis er hovedmaalet. Eksempler er organisasjoner som gir arbeidstrening til mennesker som har staaett utenfor arbeidslivet, eller bedrifter som resirkulerer mat som ellers ville blitt kastet.

Noekkelen til god entreprenoeerskap er aa kombinere kreativitet med utholdenhet. Gode idéer er viktige, men det er evnen til aa staa paa -- ogsaa naar det butter imot -- som skiller de som lykkes fra de som gir opp.`,
    },
    {
      id: 'samfunnsfag-10-26-n-summary',
      type: 'text',
      content: `## Oppsummering

**Entreprenoerskap** handler om aa se muligheter og handle paa dem. En **forretningsplan** er verktoeyet som hjelper deg aa gaa fra idé til virkelighet. Den beskriver hva du tilbyr, hvem kundene dine er, og hvordan du skal tjene penger.

I Norge stoetter **Innovasjon Norge** og **Ungt Entreprenoerskap** gruendere med raadgivning og ressurser. **Sosialt entreprenoerskap** loeser samfunnsproblemer med forretningsmetoder.

Aa starte noe eget innebaaerer risiko, men ogsaa muligheter til aa skape verdi for deg selv og samfunnet. Kreativitet og utholdenhet er de viktigste egenskapene for en entreprenoer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 27 NARRATIV: Skatt og velferd
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_27_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-27-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '27',
  title: 'Skatt og velferd',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvorfor vi betaler skatt, hvordan statsbudsjettet fungerer, og sammenhengen mellom skatt og de velferdstjenestene vi tar for gitt.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for hovedtrekk ved arbeidslivet i Norge og velferdsstatens organisering'],
  linkedChapterId: 'samfunnsfag-10-27',
  content: [
    {
      id: 'samfunnsfag-10-27-n-intro',
      type: 'text',
      content: `## Hva faar du for skatten din?

Ingen liker aa betale skatt. Naar du faar din foerste loennsslipp og ser at en stor del av pengene har forsvunnet foer de naar kontoen din, kan det foeles urettferdig. Men har du noen gang tenkt paa hva du faar tilbake?

Du har gaaett paa skolen i over ti aar -- gratis. Hvis du blir syk, kan du gaa til legen for en lav egenandel. Hvis du knekker beinet, blir du operert uten aa motta en regning paa hundretusenvis av kroner. Veiene du kjoerer paa, brannvesenet som slukker branner, politiet som opprettholder lov og orden -- alt dette finansieres av **skatt**.

I land uten velfungerende skattesystem maa folk betale selv for skole, sykehus og trygghet. En brukket arm kan bety ruin for en familie. Utdanning er forbeholdt de rike. I Norge har vi valgt en annen modell: vi legger sammen og deler paa byrden. Det er ideen bak **velferdsstaten**.`,
    },
    {
      id: 'samfunnsfag-10-27-n-section1',
      type: 'text',
      content: `## Omfordeling -- fra de som har mest til de som trenger mest

Skattesystemet i Norge er **progressivt**: jo mer du tjener, jo stoerre andel betaler du i skatt. En som tjener 300 000 kroner i aaret betaler en lavere skatteprosent enn en som tjener 1 million. Tanken er at de som har mest, skal bidra mest.

Denne mekanismen kalles **omfordeling**. Gjennom skatt tar staten inn penger fra dem som har, og bruker dem paa tjenester og stoenader som kommer alle til gode -- men saerlig de som trenger det mest. Barnetrygd, studiestoeate, sosialhjelp, sykepenger og alderspensjon er alle eksempler paa omfordeling.

Omfordeling handler ikke bare om aa hjelpe de fattigste. Det handler om aa bygge et samfunn der alle har like muligheter. Naar utdanning er gratis, kan en jente fra en lavinntektsfamilie bli lege. Naar sykehus er tilgjengelig for alle, slipper folk aa gaa konkurs fordi de blir syke.

Ikke alle er enige om hvor mye omfordeling det boe vaere. Partier paa hoeyresiden mener generelt at skatten er for hoey, og at folk boe faa beholde mer av det de tjener. Partier paa venstresiden mener at hoeye skatter er noedvendig for aa opprettholde velferdsstaten og redusere ulikhet. Denne debatten er helt sentral i norsk politikk.`,
    },
    {
      id: 'samfunnsfag-10-27-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-27-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa skatt og omfordeling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-27-n-quiz1-q0',
            task: 'Hva betyr det at skattesystemet er progressivt?',
            options: [
              { id: 'a', text: 'At alle betaler den samme skatten uavhengig av inntekt', isCorrect: false },
              { id: 'b', text: 'At jo mer du tjener, jo stoerre andel betaler du i skatt', isCorrect: true },
              { id: 'c', text: 'At skatten oeker hvert aar', isCorrect: false },
              { id: 'd', text: 'At bedrifter betaler mer skatt enn privatpersoner', isCorrect: false },
            ],
            solution: 'Et progressivt skattesystem betyr at skatteprosenten oeker med inntekten. De som tjener mest, betaler en stoerre andel i skatt enn de som tjener minst.',
          },
          {
            id: 'samfunnsfag-10-27-n-quiz1-q1',
            task: 'Hva er omfordeling?',
            options: [
              { id: 'a', text: 'At alle faar utbetalt like mye i loenn', isCorrect: false },
              { id: 'b', text: 'At staten tar inn skatt og bruker den paa tjenester som kommer alle til gode', isCorrect: true },
              { id: 'c', text: 'At bedrifter maa gi overskuddet sitt til de ansatte', isCorrect: false },
              { id: 'd', text: 'At kommunene bytter penger seg imellom', isCorrect: false },
            ],
            solution: 'Omfordeling betyr at staten bruker skatteinntekter til aa finansiere velferdstjenester som utdanning, helse og trygdeordninger, slik at alle faar like muligheter.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-27-n-section2',
      type: 'text',
      content: `## Statsbudsjettet -- Norges stoerste regnskap

Hvert aar legger regjeringen frem **statsbudsjettet**. Det er Norges stoerste oekonomiske plan -- en oversikt over hvor mye staten planlegger aa bruke og hvordan pengene skal fordeles. Stortinget diskuterer og vedtar budsjettet, og det er en av aarets viktigste politiske hendelser.

Statsbudsjettet er enormt -- over 1 500 milliarder kroner i aaret. De stoerste postene er **helse** (sykehus, leger, medisin), **utdanning** (skoler, universiteter, forskning), **sosiale ytelser** (pensjon, trygd, sosialhjelp) og **forsvar** (militaeret, beredskap).

Inntektene kommer fra flere kilder. **Inntektsskatt** (skatt paa loenn og annen inntekt) er den stoerste. **Moms** (merverdiavgift) legges paa de fleste varer og tjenester -- naar du kjoepar en vare til 100 kroner, gaar 25 kroner til staten. **Formuesskatt**, **selskapsskatt** og avgifter paa bensin, alkohol og tobakk er andre viktige inntektskilder.

I tillegg bruker staten penger fra **Oljefondet** (Statens pensjonsfond utland). **Handlingsregelen** sier at regjeringen normalt ikke skal bruke mer enn forventet avkastning fra fondet -- omtrent 3 prosent av fondets verdi hvert aar. Dette er for aa sikre at oljepengene ogsaa skal komme fremtidige generasjoner til gode.`,
    },
    {
      id: 'samfunnsfag-10-27-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-27-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa statsbudsjettet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-27-n-quiz2-q0',
            task: 'Hva er handlingsregelen?',
            options: [
              { id: 'a', text: 'At staten ikke kan bruke mer enn den tjener', isCorrect: false },
              { id: 'b', text: 'At regjeringen normalt ikke bruker mer enn ca. 3 % av Oljefondets verdi aarlig', isCorrect: true },
              { id: 'c', text: 'At alle kommuner maa ha et overskudd i budsjettet', isCorrect: false },
              { id: 'd', text: 'At Stortinget kan overstyre regjeringens budsjett', isCorrect: false },
            ],
            solution: 'Handlingsregelen sier at regjeringen normalt ikke skal bruke mer enn forventet avkastning fra Oljefondet -- omtrent 3 prosent av fondets verdi hvert aar.',
          },
          {
            id: 'samfunnsfag-10-27-n-quiz2-q1',
            task: 'Hva er moms (merverdiavgift)?',
            options: [
              { id: 'a', text: 'En avgift som legges paa loenn', isCorrect: false },
              { id: 'b', text: 'En avgift som legges paa de fleste varer og tjenester', isCorrect: true },
              { id: 'c', text: 'En avgift kun paa luksuvarer', isCorrect: false },
              { id: 'd', text: 'En frivillig avgift man kan velge aa betale', isCorrect: false },
            ],
            solution: 'Moms (merverdiavgift) er en avgift som legges paa de fleste varer og tjenester. I Norge er den vanligste satsen 25 %, men matvarer har lavere sats.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-27-n-summary',
      type: 'text',
      content: `## Oppsummering

Skatt er prisen vi betaler for et fungerende samfunn. Gjennom et **progressivt skattesystem** bidrar de som tjener mest, mest. **Omfordeling** seerger for at skattepengene finansierer velferdstjenester som utdanning, helse og trygd.

**Statsbudsjettet** er statens aarlige plan for inntekter og utgifter. Det finansieres av inntektsskatt, moms, avgifter og overfeolinger fra Oljefondet -- styrt av **handlingsregelen** som begrenser bruken til ca. 3 prosent av fondets verdi.

Debatten om skattenivaaet er sentral i norsk politikk. Men uansett ståsted, er det bred enighet om at et velfungerende skattesystem er grunnlaget for det velferdssamfunnet nordmenn setter saa hoey pris paa.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 28 NARRATIV: Den norske modellen
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_28_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-28-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '28',
  title: 'Den norske modellen',
  subtitle: 'Narrativ versjon',
  description: 'En forklaring paa hva som gjoer norsk arbeidsliv og velferd unikt i verden -- fra trepartssamarbeidet til universelle velferdsordninger.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for hovedtrekk ved arbeidslivet i Norge og velferdsstatens organisering'],
  linkedChapterId: 'samfunnsfag-10-28',
  content: [
    {
      id: 'samfunnsfag-10-28-n-intro',
      type: 'text',
      content: `## Hvorfor fungerer Norge saa godt?

Naar utlendinger besoeker Norge, blir de ofte overrasket. Her er det kort avstand mellom sjefen og de ansatte. Her kan en roearleger og en laerer bo i samme nabolag. Her kan du bli syk uten aa miste jobben eller gaa konkurs. Her har de fleste raad til aa gaa paa skole, gaa til legen og leve et verdig liv -- uansett bakgrunn.

Hvordan er det mulig? Svaret er det vi kaller **den norske modellen** -- et system som kombinerer fritt marked med sterk velferdsstat, og der samarbeid mellom staten, arbeidsgiverne og arbeidstakerne staar helt sentralt.

Den norske modellen er ikke perfekt, og den har kritikere. Men den har gitt Norge noe de fleste land bare kan droemme om: hoey levestandard, lav ulikhet, hoey tillit og et produktivt arbeidsliv. La oss se naaermere paa hva den bestaar av.`,
    },
    {
      id: 'samfunnsfag-10-28-n-section1',
      type: 'text',
      content: `## Trepartssamarbeidet -- Norges hemmelige vaapen

Kjernen i den norske modellen er **trepartssamarbeidet**: et organisert samarbeid mellom tre parter -- **staten**, **arbeidsgiverorganisasjonene** (f.eks. NHO) og **arbeidstakerorganisasjonene** (f.eks. LO).

I mange land er forholdet mellom arbeidsgivere og arbeidstakere preget av konfrontasjon: streiker, oppsigelser og sterk uenighet. I Norge har vi valgt en annen vei. Partene setter seg rundt et bord og forhandler. De er uenige -- selvfoelgelig -- men de har en lang tradisjon for aa finne loesninger som alle kan leve med.

Denne tradisjonen gaar tilbake til **Hovedavtalen av 1935**, ofte kalt «arbeidslivets grunnlov». Den fastslo spillereglene for forhandlinger mellom arbeidstakere og arbeidsgivere, og la grunnlaget for det organiserte samarbeidet vi kjenner i dag.

Trepartssamarbeidet handler ikke bare om loenn. Partene diskuterer ogsaa pensjonsreformer, arbeidsmiljoeregler, kompetanseutvikling og omstilling. Naar alle tre partene er med paa aa utforme politikken, oeker sjansen for at den fungerer i praksis -- og for at folk aksepterer den.

Et konkret eksempel: Under oekonomiske kriser har norske fagforeninger akseptert lavere loennstillegg for aa redde arbeidsplasser. Til gjengjeld har arbeidsgiverne unngaatt masseoppsigelser. Denne gjensidige tilliten er noe av det mest verdifulle ved den norske modellen.`,
    },
    {
      id: 'samfunnsfag-10-28-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-28-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa den norske modellen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-28-n-quiz1-q0',
            task: 'Hvilke tre parter inngaar i trepartssamarbeidet?',
            options: [
              { id: 'a', text: 'Kommuner, fylkeskommuner og staten', isCorrect: false },
              { id: 'b', text: 'Staten, arbeidsgiverorganisasjoner og arbeidstakerorganisasjoner', isCorrect: true },
              { id: 'c', text: 'Stortinget, regjeringen og domstolene', isCorrect: false },
              { id: 'd', text: 'Universiteter, bedrifter og medier', isCorrect: false },
            ],
            solution: 'Trepartssamarbeidet bestaar av staten, arbeidsgiverorganisasjoner (f.eks. NHO) og arbeidstakerorganisasjoner (f.eks. LO). Sammen forhandler de om loenn, arbeidsvilkaar og politikk.',
          },
          {
            id: 'samfunnsfag-10-28-n-quiz1-q1',
            task: 'Hva er Hovedavtalen av 1935?',
            options: [
              { id: 'a', text: 'En fredsavtale mellom Norge og Sverige', isCorrect: false },
              { id: 'b', text: 'Grunnlaget for det organiserte samarbeidet mellom arbeidstakere og arbeidsgivere', isCorrect: true },
              { id: 'c', text: 'Den foerste norske loven om skatt', isCorrect: false },
              { id: 'd', text: 'Avtalen som ga kvinner stemmerett', isCorrect: false },
            ],
            solution: 'Hovedavtalen av 1935, ofte kalt «arbeidslivets grunnlov», fastslo spillereglene for forhandlinger mellom arbeidstakere og arbeidsgivere og la grunnlaget for trepartssamarbeidet.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-28-n-section2',
      type: 'text',
      content: `## Universelle velferdsordninger -- for alle, ikke bare de fattige

Et annet saeratrekk ved den norske modellen er at velferdsordningene er **universelle**. Det betyr at de gjelder for alle -- ikke bare for de som har minst.

Barnetrygd faar alle foreldre, uansett inntekt. Alle har rett til helsehjelp. Alle barn gaar paa den samme offentlige skolen. Og alle har rett til alderspensjon gjennom Folketrygden.

Hvorfor gjoer vi det slik? Ville det ikke vaere smartere aa bare hjelpe dem som trenger det mest? Argumentet for universelle ordninger er at de skaper **bred oppslutning**. Naar alle nyter godt av velferdsstaten, er alle ogsaa villige til aa betale for den gjennom skatt. Behovsproevde ordninger (der du maa bevise at du er fattig for aa faa hjelp) kan skape stigma og splittelse.

Et annet kjennetegn er **sammenpressede loennsforskjeller**. I Norge er avstanden mellom de best og daaraligst betalte jobbene mindre enn i de fleste andre land. En helsefagarbeider tjener ikke like mye som en ingenioesr, men forskjellen er mye mindre enn i f.eks. USA. Dette bidrar til et samfunn med hoey tillit og lav kriminalitet.

Modellen er under press fra flere hold: globalisering, innvandring, en aldrende befolkning og fallenede oljeinntekter utfordrer systemet. Kan vi opprettholde de generoeae velferdsordningene naar det blir faerre i yrkesaktiv alder og flere pensjonister? Det er et av de viktigste spoersmaaalene for fremtidens Norge.`,
    },
    {
      id: 'samfunnsfag-10-28-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-28-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa universelle ordninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-28-n-quiz2-q0',
            task: 'Hva betyr det at velferdsordningene er universelle?',
            options: [
              { id: 'a', text: 'At de gjelder for hele verden', isCorrect: false },
              { id: 'b', text: 'At de gjelder for alle borgere, uansett inntekt eller bakgrunn', isCorrect: true },
              { id: 'c', text: 'At de bare gjelder for de som har lav inntekt', isCorrect: false },
              { id: 'd', text: 'At de er like i alle nordiske land', isCorrect: false },
            ],
            solution: 'Universelle velferdsordninger gjelder for alle borgere, uavhengig av inntekt eller bakgrunn. Barnetrygd, offentlig skole og helsehjelp er eksempler paa slike ordninger i Norge.',
          },
          {
            id: 'samfunnsfag-10-28-n-quiz2-q1',
            task: 'Hva mener vi med sammenpressede loennsforskjeller?',
            options: [
              { id: 'a', text: 'At alle i Norge tjener det samme', isCorrect: false },
              { id: 'b', text: 'At avstanden mellom de best og daaraligst betalte jobbene er liten sammenlignet med andre land', isCorrect: true },
              { id: 'c', text: 'At loennen synker for alle over tid', isCorrect: false },
              { id: 'd', text: 'At det er forbudt aa ha hoey loenn i Norge', isCorrect: false },
            ],
            solution: 'Sammenpressede loennsforskjeller betyr at forskjellen mellom hoeyeste og laveste loenn er relativt liten i Norge. Det bidrar til lavere ulikhet og hoeaere tillit i samfunnet.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-28-n-summary',
      type: 'text',
      content: `## Oppsummering

**Den norske modellen** er en kombinasjon av fritt marked, sterk velferdsstat og organisert samarbeid. **Trepartssamarbeidet** mellom stat, arbeidsgivere og arbeidstakere er kjernen -- med roetter tilbake til **Hovedavtalen av 1935**.

**Universelle velferdsordninger** sikrer at alle har tilgang til utdanning, helse og grunnleggende trygghet. **Sammenpressede loennsforskjeller** bidrar til et samfunn med hoey tillit og lav ulikhet.

Modellen er under press fra globalisering, aldrende befolkning og endrede oekonomiske forutsetninger. Men den har ogsaa vist seg bemerkelsesverdigt tilpasningsdyktig gjennom kriser og endringer, og den er fortsatt noe av det mest saeraeagne ved det norske samfunnet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 6 Narrativ
// ============================================================================

export const SAMFUNNSFAG_10_NARRATIV_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSFAG_10_23_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_24_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_25_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_26_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_27_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_28_NARRATIV,
];
