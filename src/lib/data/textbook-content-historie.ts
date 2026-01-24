/**
 * Tekstbok innhold for Historie (VG2-VG3)
 *
 * Følger LK20 læreplan for historie med alle 28 kompetansemål.
 * Dekker 17 kapitler organisert i 6 deler:
 * - Del 1: Historisk metode og tenkning (Kap 1-2)
 * - Del 2: Fra antikken til tidlig nytid (Kap 3-5)
 * - Del 3: Revolusjoner og nasjonsbygging (Kap 6-8)
 * - Del 4: Imperialisme og global historie (Kap 9-10)
 * - Del 5: Verdenskrigene (Kap 11-13)
 * - Del 6: Etterkrigstid og moderne tid (Kap 14-17)
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import { HISTORIE_CHAPTERS_DEL1 } from './textbook-content-historie-del1';
import { HISTORIE_CHAPTERS_DEL2 } from './textbook-content-historie-del2';
import { HISTORIE_CHAPTERS_DEL3, HISTORIE_CHAPTERS_DEL3_VG2, HISTORIE_CHAPTERS_DEL3_VG3 } from './textbook-content-historie-del3';
import { HISTORIE_CHAPTERS_DEL4 } from './textbook-content-historie-del4';

// ============================================================================
// KAPITTEL 1: Historisk metode og kildekritikk
// ============================================================================

export const CHAPTER_HISTORIE_1: TextbookChapter = {
  id: 'historie-1-1',
  courseId: 'historie',
  chapterNumber: '1',
  title: 'Historisk metode og kildekritikk',
  description: 'Lær om hvordan historikere arbeider med kilder og tolker fortiden.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for hvordan historisk kunnskap blir til',
    'bruke kildekritikk til å vurdere historiske kilder',
    'reflektere over hvordan historie kan brukes og misbrukes',
  ],
  content: [
    {
      id: 'historie-1-1-intro',
      type: 'text',
      content: `## Hva er historie?

Historie handler om å forstå fortiden. Men historikere kan ikke observere fortiden direkte - de må bruke kilder for å rekonstruere hva som skjedde.

**Historiefagets mål:**
- Forstå hvorfor hendelser skjedde
- Se sammenhenger mellom fortid og nåtid
- Lære av tidligere erfaringer
- Utvikle kritisk tenkning

**Historieskrivningens utfordringer:**
- Kildene gir bare et ufullstendig bilde
- Historikere påvirkes av sin egen tid
- Ulike perspektiver gir ulike tolkninger
- Nye kilder kan endre vår forståelse`,
    },
    {
      id: 'historie-1-1-def-1',
      type: 'definition',
      title: 'Typer historiske kilder',
      content: `**Primærkilder:**
Kilder fra den tiden man studerer. Dagbøker, brev, lover, avisartikler, fotografier, gjenstander.

**Sekundærkilder:**
Bearbeidede fremstillinger basert på primærkilder. Historiebøker, artikler, dokumentarer.

**Skriftlige kilder:**
Dokumenter, brev, lover, litteratur, aviser.

**Materielle kilder:**
Gjenstander, bygninger, kunst, våpen, redskaper.

**Muntlige kilder:**
Intervjuer, fortellinger, folkeminner.

**Levninger vs. beretninger:**
- **Levninger:** Spor etter fortiden (bygninger, redskaper)
- **Beretninger:** Fortellinger om fortiden (krøniker, memoarer)`,
    },
    {
      id: 'historie-1-1-def-2',
      type: 'definition',
      title: 'Kildekritiske spørsmål',
      content: `**Opphavsspørsmål:**
- Hvem skapte kilden?
- Når ble den skapt?
- Hvor ble den skapt?
- Hvorfor ble den skapt?

**Innholdsspørsmål:**
- Hva forteller kilden?
- Er informasjonen troverdig?
- Hvilke perspektiver mangler?

**Tendensspørsmål:**
- Har kilden en bestemt hensikt?
- Er den partisk eller propagandistisk?
- Hvem var målgruppen?

**Representativitetsspørsmål:**
- Er kilden typisk for sin tid?
- Kan man generalisere fra den?`,
    },
    {
      id: 'historie-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Kildekritisk analyse',
      problem: `En historiker finner et brev fra 1814 der en norsk bonde beskriver hvordan han opplevde at Norge fikk sin grunnlov. Hvordan bør historikeren vurdere denne kilden?`,
      solution: `**Kildekritisk vurdering:**

**Styrker:**
- Primærkilde fra hendelsens tid
- Gir perspektiv fra vanlige folk
- Personlig opplevelse kan gi detaljer som mangler i offisielle kilder
- Førstehåndsberetning

**Svakheter:**
- Bondens perspektiv er begrenset til hans lokalmiljø
- Personlige meninger kan farge fremstillingen
- Hukommelse kan være upålitelig
- Vi vet ikke om brevet er representativt

**Spørsmål å stille:**
- Hvor bodde bonden? Nær Eidsvoll eller langt unna?
- Kunne han lese og skrive godt?
- Hvem skrev han til, og hvorfor?
- Finnes det andre kilder som bekrefter hans beskrivelse?

**Konklusjon:** Kilden er verdifull for å forstå hvordan vanlige folk opplevde 1814, men bør suppleres med andre kilder for å få et helhetlig bilde.`,
    },
    {
      id: 'historie-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom primærkilder og sekundærkilder.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en primærkilde? Gi eksempler.',
            solution: 'En primærkilde er en kilde fra den tiden man studerer. Eksempler: dagbøker, brev, lover, fotografier, avisartikler fra tiden.',
          },
          {
            label: 'b',
            task: 'Hva er en sekundærkilde? Gi eksempler.',
            solution: 'En sekundærkilde er en bearbeidet fremstilling basert på primærkilder. Eksempler: historiebøker, artikler, dokumentarer.',
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig å skille mellom disse?',
            solution: 'Primærkilder gir direkte tilgang til fortiden, mens sekundærkilder er tolkninger. Begge har verdi, men krever ulik kritisk tilnærming.',
          },
        ],
        solution: 'Primærkilder er fra tiden, sekundærkilder er bearbeidede fremstillinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva menes med at en kilde har tendens?',
        hints: ['Tenk på hvem som skapte kilden og hvorfor'],
        solution: 'Tendens betyr at kilden har en bestemt hensikt eller vinkling. Skaperen kan ønske å fremstille noe i et spesielt lys, påvirke mottakeren, eller forsvare egne handlinger. Propaganda er et ekstremt eksempel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'En avis fra 1905 beskriver unionsoppløsningen med Sverige. Hvilke kildekritiske spørsmål bør du stille?',
        hints: ['Tenk på opphav, innhold, tendens og representativitet'],
        solution: 'Spørsmål: Hvilken avis? Norsk eller svensk? Hvilket politisk ståsted hadde avisen? Når ble artikkelen skrevet (under eller etter hendelsene)? Hvem var journalisten? Hva var formålet - informere eller påvirke? Finnes det motstridende kilder?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kan historie misbrukes?',
        hints: ['Tenk på propaganda, nasjonalisme og selektiv bruk av kilder'],
        solution: 'Historie kan misbrukes gjennom: Selektiv utvelgelse av kilder, forfalskning av dokumenter, overdrivelse eller underdrivelse av hendelser, bruk av historie for å rettferdiggjøre politikk, nasjonalistisk propaganda, fornektelse av overgrep som Holocaust.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en historisk hendelse du kjenner til. Hvilke typer kilder kunne en historiker bruke for å studere den?',
        hints: ['Tenk på ulike kildetyper: skriftlige, materielle, muntlige'],
        solution: 'Svaret vil variere. For andre verdenskrig i Norge: Skriftlige kilder (aviser, dagbøker, rapporter), materielle kilder (bunkere, krigsminnesmerker), muntlige kilder (intervjuer med tidsvitner), fotografier og film.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft påstanden: "Historien skrives av seierherrene."',
        hints: ['Tenk på hvem som har makt til å skrive historie, og hvilke stemmer som mangler'],
        solution: 'Det er delvis sant at makthavere har dominert historieskrivningen. Mange perspektiver har vært utelatt (kvinner, urfolk, undertrykte grupper). Moderne historikere arbeider med å inkludere flere stemmer. Kritisk kildekritikk kan avdekke fortiede perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Antikken - Hellas og Roma
// ============================================================================

export const CHAPTER_HISTORIE_2: TextbookChapter = {
  id: 'historie-1-2',
  courseId: 'historie',
  chapterNumber: '2',
  title: 'Antikken - Hellas og Roma',
  description: 'Utforsk de greske bystatene og Romerriket - grunnlaget for vestlig sivilisasjon.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjøre rede for sentrale trekk ved gresk og romersk sivilisasjon',
    'reflektere over antikkens betydning for demokrati og kultur',
    'analysere hvordan makt ble organisert i antikken',
  ],
  content: [
    {
      id: 'historie-1-2-intro',
      type: 'text',
      content: `## Antikkens betydning

Antikken (ca. 800 f.Kr. - 500 e.Kr.) la grunnlaget for mye av det vi forbinder med vestlig sivilisasjon: demokrati, filosofi, vitenskap, kunst og arkitektur.

**Det gamle Hellas:**
- Bystatene (polis) som politisk enhet
- Aten: Demokratiets vugge
- Sparta: Militærstat
- Filosofi: Sokrates, Platon, Aristoteles
- Kunst, teater og idrett

**Romerriket:**
- Fra bystat til verdensrike
- Republikk og keisertid
- Lover og administrasjon
- Arkitektur og ingeniørkunst
- Kristendommens spredning`,
    },
    {
      id: 'historie-1-2-def-1',
      type: 'definition',
      title: 'Det athenske demokratiet',
      content: `**Demokrati:**
Fra gresk "demos" (folk) og "kratos" (styre). Folket har makten.

**Folkeforsamlingen (ekklesia):**
Alle mannlige borgere over 18 år kunne delta og stemme. Direkte demokrati.

**Rådet (bule):**
500 medlemmer valgt ved loddtrekning. Forberedte saker for folkeforsamlingen.

**Embetsmenn:**
Mange ble valgt ved loddtrekning for å sikre likhet. Kortvarige perioder.

**Begrensninger:**
- Bare frie menn var borgere
- Kvinner hadde ingen politiske rettigheter
- Slaver utgjorde en stor del av befolkningen
- Fremmede (metøker) var utelukket

**Ostrakisme:**
Folket kunne stemme ut borgere de mente var en trussel. 10 års eksil.`,
    },
    {
      id: 'historie-1-2-def-2',
      type: 'definition',
      title: 'Romerrikets styreformer',
      content: `**Kongedømmet (753-509 f.Kr.):**
Roma styrt av konger. Endte med fordrivelsen av den siste kongen.

**Republikken (509-27 f.Kr.):**
- Senatet: Adelsmenn som ga råd og kontrollerte finanser
- Konsulene: To ledere valgt for ett år
- Folkebattningen: Vanlige borgere fikk stemmerett
- Tribunene: Beskyttet folkets interesser

**Keisertiden (27 f.Kr. - 476 e.Kr.):**
- Augustus ble første keiser
- Keiseren hadde nærmest ubegrenset makt
- Senatet mistet reell innflytelse
- Hæren ble avgjørende for keiservalg

**Pax Romana:**
Omtrent 200 år med relativ fred og stabilitet (27 f.Kr. - 180 e.Kr.).`,
    },
    {
      id: 'historie-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Perikles tale',
      problem: `Den athenske lederen Perikles holdt en berømt tale i 431 f.Kr. der han priste det athenske demokratiet. Hva sier talen om demokratiets idealer?`,
      solution: `**Perikles gravtale (gjengitt av Thukydid):**

**Hovedpunkter:**
- Alle borgere er like for loven
- Politisk deltakelse er en borgerplikt
- Aten er åpen for verden og frykter ikke spioner
- Athenerne kombinerer frihet med disiplin
- Kultur og utdanning gjør Aten til "Hellas' skole"

**Demokratiske idealer:**
- Folkestyre fremfor fåmannsvelde
- Meritokrati: Dyktighet teller, ikke rikdom
- Frihet i privatlivet kombinert med respekt for lover
- Aktiv deltakelse i fellesskapet

**Kritisk vurdering:**
Talen er idealisert og overser:
- Utelukkelsen av kvinner og slaver
- Athens imperialisme overfor andre bystater
- Ikke alle borgere deltok aktivt
- Perikles selv hadde stor personlig makt`,
    },
    {
      id: 'historie-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign det athenske demokratiet med moderne demokrati.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke likheter finnes?',
            solution: 'Likheter: Folket har makt, stemmerett, likhet for loven, debatt og diskusjon, valgte representanter.',
          },
          {
            label: 'b',
            task: 'Hvilke forskjeller finnes?',
            solution: 'Forskjeller: Aten hadde direkte demokrati, vi har representativt. I Aten var bare menn borgere. Vi har allmenn stemmerett. Aten brukte loddtrekning.',
          },
          {
            label: 'c',
            task: 'Var Aten egentlig demokratisk etter moderne målestokk?',
            solution: 'Nei, ikke fullt ut. Kvinner, slaver og fremmede var utelukket. Men det var revolusjonerende for sin tid og la grunnlaget for demokratisk tenkning.',
          },
        ],
        solution: 'Aten hadde demokratiske prinsipper, men begrenset hvem som var borgere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvordan den romerske republikken ble til et keiserdømme.',
        hints: ['Tenk på interne konflikter, sterke hærførere og borgerkriger'],
        solution: 'Republikken ble svekket av: Klassekonflikter mellom patrisierne og plebeiere, utvidelse som skapte mektige generaler med lojale hærer, borgerkriger (Caesar mot Pompey), mordet på Caesar og nye borgerkriger. Augustus vant og ble keiser i 27 f.Kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en bystat (polis), og hvorfor var den viktig i det gamle Hellas?',
        hints: ['Tenk på selvstyre, identitet og konkurranse'],
        solution: 'En polis var en uavhengig by med omliggende landområde. Viktig fordi: Hver polis hadde egen styreform og lover, borgerne hadde sterk lojalitet til sin polis, konkurranse mellom polisene drev utvikling, demokratiet utviklet seg i denne konteksten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken betydning har romersk lov hatt for ettertiden?',
        hints: ['Tenk på rettsprinsipper vi bruker i dag'],
        solution: 'Romersk lov påvirker oss fortsatt: Prinsippet om at man er uskyldig til det motsatte er bevist, skillet mellom sivil- og strafferett, skriftlige lover som gjelder likt for alle, kontraktsrett. Mange europeiske rettssystemer bygger på romersk lov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor falt det vestromerske riket i 476 e.Kr.?',
        hints: ['Tenk på indre og ytre faktorer'],
        solution: 'Mange faktorer: Barbarinvasjoner (germanere, hunere), økonomisk krise og inflasjon, politisk ustabilitet med mange keisere, for stort rike å forsvare, avhengighet av leiesoldater, sykdommer som reduserte befolkningen, tap av skatteinntekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Hva kan vi lære av antikken i dag?',
        hints: ['Tenk på demokrati, filosofi, kunst og farer ved makt'],
        solution: 'Vi kan lære: Demokratiske idealer om deltakelse og debatt, filosofisk tenkning om etikk og samfunn, at sivilisasjoner kan falle, farer ved maktkonsentrasjon, betydningen av utdanning og kultur, at fremskritt ikke er garantert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Middelalderen i Europa og Norge
// ============================================================================

export const CHAPTER_HISTORIE_3: TextbookChapter = {
  id: 'historie-1-3',
  courseId: 'historie',
  chapterNumber: '3',
  title: 'Middelalderen i Europa og Norge',
  description: 'Utforsk føydalsamfunnet, kirkens makt og Norges storhetstid.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for hovedtrekk ved det føydale samfunnet',
    'analysere kirkens rolle i middelalderen',
    'forstå Norges utvikling i middelalderen',
  ],
  content: [
    {
      id: 'historie-1-3-intro',
      type: 'text',
      content: `## Middelalderen (ca. 500-1500)

Middelalderen var perioden mellom antikken og moderne tid. Tidligere kalt "den mørke middelalder", men historikere ser nå at det var en periode med viktig utvikling.

**Europeiske hovedtrekk:**
- Føydalsamfunnet med leilendingssystemet
- Kirkens dominerende rolle
- Byer og handel vokste frem
- Korstogene og kontakt med Østen
- Pesten (Svartedauden) på 1300-tallet

**Norge i middelalderen:**
- Rikssamling under Harald Hårfagre
- Kristningen av Norge
- Storhetstiden under Håkon Håkonsson
- Svartedauden (1349) rammet hardt
- Union med Danmark fra 1380`,
    },
    {
      id: 'historie-1-3-def-1',
      type: 'definition',
      title: 'Føydalsamfunnet',
      content: `**Føydalisme:**
Et hierarkisk system basert på jordeiendeler og personlige lojalitetsbånd.

**Kongen:**
Øverst i hierarkiet. Eide i prinsippet all jord.

**Vasaller/adelsmenn:**
Fikk jord (len) mot løfte om militærtjeneste og lojalitet.

**Riddere:**
Krigeraristokratiet. Kjempet for sin herre.

**Bønder/leilendinger:**
Arbeidet på jorda. Betalte avgifter og hadde arbeidsplikt.
- Frie bønder: Eide sin egen jord
- Leilendinger: Leide jord av godseierne
- Livegne: Bundet til jorda, nesten som slaver

**Manorialisme:**
Det økonomiske systemet der godseieren kontrollerte landsbyen og bøndenes arbeid.`,
    },
    {
      id: 'historie-1-3-def-2',
      type: 'definition',
      title: 'Kirkens makt',
      content: `**Den katolske kirken:**
- Eneste anerkjente kirke i Vest-Europa
- Paven i Roma var kirkens overhode
- Enorm jordeierer og økonomisk makt

**Kirkens roller:**
- Religiøst liv: Sakramenter, frelse
- Utdanning: Klosterskoler, universiteter
- Omsorg: Hospitaler, fattigpleie
- Politikk: Kroninger, ekskommunikasjon

**Klostervesenet:**
Munker og nonner levde etter strenge regler. Klostrene var sentre for læring, jordbruk og håndverk.

**Investiturstriden:**
Konflikt mellom paven og keiseren om hvem som skulle utnevne biskoper.

**Korstogene (1095-1291):**
Militære ekspedisjoner for å erobre Det hellige land fra muslimene.`,
    },
    {
      id: 'historie-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Norge i middelalderen',
      problem: `Hvordan utviklet Norge seg fra vikingtid til høymiddelalder?`,
      solution: `**Vikingtiden (ca. 800-1050):**
- Småkonger og høvdinger
- Plyndringstokter og handel
- Kolonisering av Island, Grønland
- Gradvis rikssamling

**Rikssamling:**
- Harald Hårfagre (872) - første rikssamlingskonge
- Olav Tryggvason og Olav Haraldsson - kristningen
- Magnus den gode og Harald Hardråde - konsolidering

**Borgerkrigstiden (1130-1240):**
- Strid om tronfølgen
- Birkebeinere mot baglere
- Sverre Sigurdsson og kirkekonflikten

**Storhetstiden (1240-1319):**
- Håkon Håkonsson samlet riket
- Norge på sitt største (Island, Grønland, deler av Sverige)
- Lovgivning: Landsloven av 1274
- Bergen som stor handelsby

**Nedgangstiden:**
- Svartedauden (1349) drepte kanskje halvparten
- Adelen ble svekket
- Union med Sverige (1319) og Danmark (1380)`,
    },
    {
      id: 'historie-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv det føydale hierarkiet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem var på toppen?',
            solution: 'Kongen var på toppen og eide i prinsippet all jord.',
          },
          {
            label: 'b',
            task: 'Hva var vasallenes rolle?',
            solution: 'Vasallene (adelsmenn) fikk jord av kongen mot å love militærtjeneste og lojalitet.',
          },
          {
            label: 'c',
            task: 'Hvordan levde bøndene?',
            solution: 'De fleste bønder var leilendinger som leide jord, betalte avgifter og hadde arbeidsplikt. Livegne var bundet til jorda.',
          },
        ],
        solution: 'Kongen øverst, deretter vasaller/adelsmenn, riddere, og bønder/leilendinger nederst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor kirken hadde så stor makt i middelalderen.',
        hints: ['Tenk på religion, økonomi, utdanning og politikk'],
        solution: 'Kirken hadde makt fordi: Alle trodde på frelse gjennom kirken, den eide enorme jordeiendommer, kontrollerte utdanning, ga legitimitet til konger gjennom kroning, kunne ekskommunisere (utstøte) folk, og var den eneste organisasjonen som fungerte over landegrensene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var konsekvensene av Svartedauden (1349)?',
        hints: ['Tenk på befolkning, økonomi, samfunn og religion'],
        solution: 'Konsekvenser: Kanskje halvparten av befolkningen døde, mange gårder ble lagt øde, arbeidskraft ble mangelvare, lønningene steg, føydalsamfunnet ble svekket, religiøs krise (hvorfor straffer Gud oss?), jødeforfølgelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor kalles perioden under Håkon Håkonsson Norges storhetstid?',
        hints: ['Tenk på territorium, lovgivning og kultur'],
        solution: 'Storhetstid fordi: Norge var på sitt største territorielt, inkludert Island og Grønland. Landsloven av 1274 ga felles lov for hele landet. Bergen var en stor europeisk handelsby. Kongemakten var sterk og stabil. Kulturell blomstring med sagalitteratur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva var korstogene, og hvilke konsekvenser hadde de?',
        hints: ['Tenk på både positive og negative konsekvenser'],
        solution: 'Korstogene var militære ekspedisjoner for å erobre Det hellige land. Konsekvenser: Mange døde, fiendskap mellom kristne og muslimer, men også økt handel og kulturutveksling, nye varer og ideer kom til Europa, stimulerte byutvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Var middelalderen virkelig en "mørk" tid?',
        hints: ['Tenk på både negative og positive aspekter'],
        solution: 'Begrepet "mørk middelalder" er misvisende. Negative sider: Krig, pest, undertrykkelse, begrenset frihet. Positive sider: Bygging av katedraler, universiteter grunnlagt, lovutvikling, teknologisk fremgang (vannmøller, klokkeverk), kunstnerisk utvikling. Middelalderen la grunnlaget for moderne Europa.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Renessanse, reformasjon og opplysningstid
// ============================================================================

export const CHAPTER_HISTORIE_4: TextbookChapter = {
  id: 'historie-1-4',
  courseId: 'historie',
  chapterNumber: '4',
  title: 'Renessanse, reformasjon og opplysningstid',
  description: 'Forstå de store kulturelle og intellektuelle omveltningene som formet moderne Europa.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjøre rede for renessansen og humanismen',
    'analysere reformasjonens årsaker og konsekvenser',
    'forstå opplysningstidens ideer og betydning',
  ],
  content: [
    {
      id: 'historie-1-4-intro',
      type: 'text',
      content: `## Fra middelalder til moderne tid

Perioden 1400-1800 var preget av store endringer i tenkning, kultur og samfunn. Tre hovedbevegelser preget utviklingen:

**Renessansen (ca. 1400-1600):**
- "Gjenfødelse" av antikkens kultur
- Begynte i Italia, spredte seg nordover
- Humanisme: Mennesket i sentrum
- Kunst, vitenskap og oppdagelser

**Reformasjonen (1500-tallet):**
- Brudd med den katolske kirken
- Martin Luther og protestantismen
- Religiøse kriger i Europa
- Nye nasjonalkirker

**Opplysningstiden (ca. 1650-1800):**
- Fornuft og vitenskap
- Kritikk av tradisjonelle autoriteter
- Nye politiske ideer
- Grunnlag for moderne demokrati`,
    },
    {
      id: 'historie-1-4-def-1',
      type: 'definition',
      title: 'Renessansen og humanismen',
      content: `**Renessanse:**
"Gjenfødelse" - gjenoppdagelse av antikkens kunst, litteratur og filosofi.

**Humanisme:**
Filosofisk retning som satte mennesket og menneskelig potensial i sentrum. Studerte antikke tekster på originalspråket.

**Kjennetegn på renessansekunst:**
- Realisme og perspektiv
- Anatomisk korrekthet
- Verdslige motiver (ikke bare religiøse)
- Individet fremheves

**Viktige personer:**
- **Leonardo da Vinci:** Kunstner, oppfinner, vitenskapsmann
- **Michelangelo:** Skulptør og maler (Sixtinske kapell)
- **Machiavelli:** Politisk tenker (Fyrsten)
- **Kopernikus:** Astronomi, heliosentrisk verdensbilde

**Boktrykkerkunsten:**
Gutenbergs trykkpresse (ca. 1450) revolusjonerte spredningen av kunnskap.`,
    },
    {
      id: 'historie-1-4-def-2',
      type: 'definition',
      title: 'Reformasjonen',
      content: `**Bakgrunn:**
Kritikk av den katolske kirkens praksis: avlatshandel, korrupsjon, prester som ikke fulgte sølibat.

**Martin Luther (1483-1546):**
- 95 teser mot avlatshandel (1517)
- Frelse ved troen alene
- Bibelen som eneste autoritet
- Oversatte Bibelen til tysk

**Protestantiske retninger:**
- **Lutheranere:** Fulgte Luthers lære (Skandinavia, Nord-Tyskland)
- **Kalvinister:** Predestinasjonslære (Sveits, Nederland, Skottland)
- **Anglikanere:** Engelske kirken under kongen

**Katolsk motreformasjon:**
Kirken reformerte seg selv. Konsilet i Trent. Jesuittordenen.

**Konsekvenser:**
Religionskrigene, Europa delt religiøst, nasjonalkirker styrket kongemakten, mer leseferdighet.`,
    },
    {
      id: 'historie-1-4-def-3',
      type: 'definition',
      title: 'Opplysningstiden',
      content: `**Grunnideer:**
- Fornuften som rettesnor
- Kritisk tenkning, tvil på autoriteter
- Toleranse og religionsfrihet
- Naturlige rettigheter
- Fremskrittstro

**Viktige tenkere:**
- **John Locke:** Naturlige rettigheter, samfunnskontrakten
- **Montesquieu:** Maktfordelingsprinsippet
- **Voltaire:** Ytringsfrihet, toleranse, kirkekritikk
- **Rousseau:** Folkesuverenitet, "allmennviljen"
- **Kant:** "Våg å bruke din egen fornuft!"

**Den vitenskapelige revolusjon:**
- Newton: Gravitasjonsloven
- Empirisme: Kunnskap gjennom observasjon
- Sekularisering av vitenskapen

**Politisk betydning:**
Ideene inspirerte den amerikanske og franske revolusjonen.`,
    },
    {
      id: 'historie-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Fra kirkekunst til renessanse',
      problem: `Sammenlign middelalderens kirkekunst med renessansens kunst. Hva var forskjellene?`,
      solution: `**Middelalderens kunst:**
- Religiøse motiver dominerte
- Flat, todimensjonal fremstilling
- Symbolikk viktigere enn realisme
- Anonyme kunstnere
- Kunsten skulle tjene kirken

**Renessansens kunst:**
- Både religiøse og verdslige motiver
- Perspektiv og dybde
- Anatomisk korrekte kropper
- Realisme og naturalisme
- Kunstnerne ble berømte (Leonardo, Michelangelo)
- Portrettmaleri viser individets betydning

**Eksempel: Fremstilling av mennesker**
- Middelalder: Stive, stiliserte figurer, helgener med glorier
- Renessanse: Levende mennesker med følelser, naturlige stillinger

**Årsaker til endringen:**
- Gjenoppdagelse av antikken
- Rike handelsfamilier bestilte kunst (Medici i Firenze)
- Humanismens fokus på mennesket
- Vitenskapelig interesse for anatomi`,
    },
    {
      id: 'historie-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var humanismen, og hvordan påvirket den renessansen?',
        hints: ['Tenk på synet på mennesket, antikken og utdanning'],
        solution: 'Humanismen var en filosofi som satte mennesket i sentrum. Humanistene studerte antikkens tekster på originalspråket, trodde på menneskets potensial, og fremmet utdanning. Dette påvirket kunsten (fokus på individet) og vitenskapen (observasjon og kritisk tenkning).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar årsakene til reformasjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kritiserte Luther ved kirken?',
            solution: 'Luther kritiserte avlatshandel, korrupsjon, at kirken fokuserte på ytre gjerninger fremfor indre tro, og at Bibelen ikke var tilgjengelig for vanlige folk.',
          },
          {
            label: 'b',
            task: 'Hvorfor spredte reformasjonen seg så raskt?',
            solution: 'Boktrykkerkunsten spredte Luthers ideer. Mange fyrster så mulighet til å bryte med paven. Misnøye med kirkens rikdom og makt var utbredt.',
          },
        ],
        solution: 'Religiøs kritikk kombinert med politiske og økonomiske interesser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan påvirket reformasjonen Norge?',
        hints: ['Tenk på kirkens eiendom, språk og religiøs praksis'],
        solution: 'Norge ble luthersk i 1537 ved kongens befaling. Kirken mistet jord og eiendom til kongen. Gudstjenester ble holdt på dansk. Katolske klostre ble nedlagt. Prestene kunne gifte seg. Danmark-Norge fikk en statskirke under kongen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er maktfordelingsprinsippet, og hvem utviklet det?',
        hints: ['Tenk på lovgivende, utøvende og dømmende makt'],
        solution: 'Montesquieu utviklet maktfordelingsprinsippet. Makten skulle deles i tre: Lovgivende (parlamentet), utøvende (regjeringen) og dømmende (domstolene). Dette hindrer maktmisbruk ved at maktene kontrollerer hverandre. Prinsippet er grunnleggende i moderne demokratier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilken betydning hadde boktrykkerkunsten?',
        hints: ['Tenk på spredning av kunnskap, reformasjonen og leseferdighet'],
        solution: 'Boktrykkerkunsten revolusjonerte spredningen av kunnskap: Bøker ble billigere og mer tilgjengelige. Luthers ideer spredte seg raskt. Vitenskapelige oppdagelser kunne deles. Leseferdigheten økte. Nasjonalspråkene ble styrket. Grunnlag for offentlig debatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Hvordan la opplysningstidens ideer grunnlaget for moderne demokrati?',
        hints: ['Tenk på naturlige rettigheter, folkesuverenitet og maktfordeling'],
        solution: 'Opplysningsfilosofene utviklet ideer som: Naturlige rettigheter (liv, frihet, eiendom), folkesuverenitet (makten utgår fra folket), maktfordeling, religionsfrihet og toleranse, ytringsfrihet. Disse ideene inspirerte den amerikanske uavhengighetserklæringen og den franske revolusjonen, og er grunnlaget for moderne grunnlover.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Revolusjoner og nasjonsbygging
// ============================================================================

export const CHAPTER_HISTORIE_5: TextbookChapter = {
  id: 'historie-1-5',
  courseId: 'historie',
  chapterNumber: '5',
  title: 'Revolusjoner og nasjonsbygging',
  description: 'Forstå de store revolusjonene og fremveksten av nasjonalstater.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere den amerikanske og franske revolusjonen',
    'forstå industrialiseringens samfunnsendringer',
    'gjøre rede for nasjonalismens fremvekst',
  ],
  content: [
    {
      id: 'historie-1-5-intro',
      type: 'text',
      content: `## Revolusjonenes tid

Perioden 1775-1871 var preget av store omveltninger som formet moderne samfunn:

**De politiske revolusjonene:**
- Den amerikanske revolusjonen (1775-1783)
- Den franske revolusjonen (1789-1799)
- Revolusjonsåret 1848 i Europa

**Den industrielle revolusjonen:**
- Begynte i England på 1700-tallet
- Maskiner erstattet håndarbeid
- Urbanisering og nye sosiale klasser
- Arbeiderklassens fremvekst

**Nasjonalismen:**
- Ideen om at folk med felles språk og kultur bør ha egen stat
- Nasjonsbygging i Norge, Italia, Tyskland
- Både samlende og splittende kraft`,
    },
    {
      id: 'historie-1-5-def-1',
      type: 'definition',
      title: 'Den amerikanske revolusjonen',
      content: `**Bakgrunn:**
13 britiske kolonier i Nord-Amerika. Misnøye med skatter uten representasjon i parlamentet.

**Boston Tea Party (1773):**
Kolonistene kastet te i havnen i protest mot skatter.

**Uavhengighetserklæringen (4. juli 1776):**
Skrevet av Thomas Jefferson. Alle mennesker er skapt like med rett til liv, frihet og streben etter lykke.

**Krigen (1775-1783):**
Koloniene vant med fransk støtte. Storbritannia anerkjente USA.

**Grunnloven (1787):**
- Maktfordeling mellom president, kongress og domstoler
- Føderalisme: Makt delt mellom sentral og delstatsmyndigheter
- Bill of Rights: Grunnleggende rettigheter

**Betydning:**
Første moderne demokratiske republikk. Inspirasjonskilde for revolusjoner i Europa.`,
    },
    {
      id: 'historie-1-5-def-2',
      type: 'definition',
      title: 'Den franske revolusjonen',
      content: `**Bakgrunn:**
- Eneveldet under Ludvig XVI
- Økonomisk krise og sult
- Privilegier for adel og kirke
- Opplysningsideenes innflytelse

**Hovedfaser:**
1. **1789-1791:** Nasjonalforsamlingen, storming av Bastillen, erklæring om menneske- og borgerrettigheter
2. **1792-1794:** Republikken, henrettelse av kongen, terroren under Robespierre
3. **1795-1799:** Direktoratet, ustabilitet, Napoleon tar makten

**Erklæringen om menneske- og borgerrettigheter (1789):**
- Frihet, likhet, eiendomsrett
- Folkesuverenitet
- Likhet for loven

**Slagord:** "Frihet, likhet, brorskap"

**Konsekvenser:**
Eneveldet avskaffet, ideen om folkestyre spredte seg, men også terror og krig.`,
    },
    {
      id: 'historie-1-5-def-3',
      type: 'definition',
      title: 'Industrialiseringen',
      content: `**Hva var industrialiseringen?**
Overgang fra håndverk og jordbruk til maskindrevet fabrikkindustri.

**Hvorfor begynte det i England?**
- Kull og jernforekomster
- Kapital fra handel og kolonier
- Stabil politisk situasjon
- Oppfinnelser og innovasjon

**Viktige oppfinnelser:**
- Spinning jenny (tekstil)
- Dampmaskin (Watt)
- Jernbane og dampskip
- Bessemerprosessen (stål)

**Samfunnsendringer:**
- Urbanisering: Folk flyttet til byene
- Fabrikkarbeid erstattet håndverk
- Nye klasser: Industrikapitalister og arbeiderklasse
- Kvinne- og barnearbeid
- Sosiale problemer: Fattigdom, boligmangel

**Arbeiderbevegelsen:**
Fagforeninger, streiker, kamp for bedre vilkår.`,
    },
    {
      id: 'historie-1-5-example-1',
      type: 'example',
      title: 'Eksempel: 1814 og Norges grunnlov',
      problem: `Hvordan fikk Norge sin grunnlov i 1814, og hvilke ideer lå bak?`,
      solution: `**Bakgrunn:**
- Norge i union med Danmark siden 1380
- Napoleonskrigene: Danmark-Norge på Napoleons side
- 1814: Danmark måtte avstå Norge til Sverige (Kieltraktaten)

**Riksforsamlingen på Eidsvoll:**
- 112 representanter samlet
- 17. mai 1814: Grunnloven vedtatt
- Christian Frederik valgt til konge

**Grunnlovens ideer:**
- Folkesuverenitet (påvirket av Rousseau)
- Maktfordeling (påvirket av Montesquieu)
- Personlig frihet og rettigheter
- Inspirert av USA og den franske revolusjonen

**Begrensninger:**
- Kun velstående menn hadde stemmerett
- Jødeparagrafen (opphevet 1851)
- Jesuitter og munkeordener forbudt

**Union med Sverige:**
Etter kort krig måtte Norge godta union med Sverige, men beholdt grunnloven og indre selvstyre.`,
    },
    {
      id: 'historie-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign den amerikanske og franske revolusjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var hovedårsakene?',
            solution: 'USA: Skatter uten representasjon, kolonial frihetslengsel. Frankrike: Eneveldet, økonomisk krise, privilegiesamfunnet.',
          },
          {
            label: 'b',
            task: 'Hva oppnådde revolusjonene?',
            solution: 'USA: Uavhengighet, demokratisk republikk. Frankrike: Eneveldet styrtet, menneskerettigheter proklamert, men fulgt av terror og krig.',
          },
          {
            label: 'c',
            task: 'Hvilke likheter og forskjeller ser du?',
            solution: 'Likheter: Opplysningsideer, kamp for frihet og rettigheter. Forskjeller: USA ble stabil republikk, Frankrike gjennomgikk terror og ustabilitet.',
          },
        ],
        solution: 'Begge var inspirert av opplysningstidens ideer, men utviklet seg ulikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var "terroren" under den franske revolusjonen?',
        hints: ['Tenk på Robespierre, guillotinen og hvem som ble rammet'],
        solution: 'Terroren (1793-1794) var en periode der revolusjonære under Robespierre henrettet tusenvis av "fiender av revolusjonen" - både adelige, men også vanlige folk og andre revolusjonære. Guillotinen ble brukt. Terroren endte da Robespierre selv ble henrettet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvordan industrialiseringen endret samfunnet.',
        hints: ['Tenk på by/land, klasser og levekår'],
        solution: 'Industrialiseringen førte til: Urbanisering - folk flyttet fra landsbygda til byer. Nye klasser - industrikapitalister og arbeiderklasse. Fabrikkarbeid erstattet håndverk. Sosiale problemer - fattigdom, barnearbeid, dårlige boforhold. Men også økonomisk vekst og teknologisk utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er nasjonalisme, og hvilken rolle spilte den på 1800-tallet?',
        hints: ['Tenk på samling og splittelse'],
        solution: 'Nasjonalisme er ideen om at folk med felles språk, kultur og historie bør ha egen stat. På 1800-tallet: Samlet Italia (1861) og Tyskland (1871). Frigjorde Norge fra Sverige (1905). Men også splittende: Truet fleretniske imperier som Østerrike-Ungarn og Det osmanske riket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke opplysningsideer finner vi i den norske grunnloven fra 1814?',
        hints: ['Tenk på maktfordeling, folkesuverenitet og rettigheter'],
        solution: 'Opplysningsideer i Grunnloven: Folkesuverenitet - makten utgår fra folket (Rousseau). Maktfordeling mellom Storting, regjering og domstoler (Montesquieu). Individuelle rettigheter - ytringsfrihet, religionsfrihet. Begrensninger på kongemakten. Likhet for loven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Var revolusjonene på 1700-1800-tallet positive eller negative?',
        hints: ['Tenk på både frihet og vold, kortsiktige og langsiktige konsekvenser'],
        solution: 'Argumenter for positive: Avskaffet eneveldet, spredte ideer om demokrati og rettigheter, inspirerte senere frigjøringsbevegelser. Negative: Mye vold og krig, terroren i Frankrike, revolusjoner ga ikke alltid stabilitet. Konklusjon: Blandede resultater kortsiktig, men la grunnlaget for moderne demokrati.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Imperialisme og kolonialisme
// ============================================================================

export const CHAPTER_HISTORIE_6: TextbookChapter = {
  id: 'historie-1-6',
  courseId: 'historie',
  chapterNumber: '6',
  title: 'Imperialisme og kolonialisme',
  description: 'Forstå europeisk ekspansjon og dens konsekvenser for verden.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for årsakene til imperialismen',
    'analysere konsekvensene for koloniserte folk',
    'reflektere over imperialismens ettervirkninger',
  ],
  content: [
    {
      id: 'historie-1-6-intro',
      type: 'text',
      content: `## Europeisk verdensherredømme

På slutten av 1800-tallet kontrollerte europeiske land store deler av verden. Denne perioden kalles imperialismens tidsalder.

**Hva var imperialismen?**
Politikk der stormaktene bygde ut verdensomspennende imperier ved å erobre og kontrollere andre land og folk.

**Omfang:**
- 1870: Europeere kontrollerte 10% av Afrika
- 1914: Europeere kontrollerte 90% av Afrika
- Asia: India under britisk styre, Kina tvunget til å åpne for handel
- Stillehavet: Delt mellom europeere og USA

**Hovedaktører:**
Storbritannia, Frankrike, Tyskland, Belgia, Nederland, Italia, Russland, USA, Japan`,
    },
    {
      id: 'historie-1-6-def-1',
      type: 'definition',
      title: 'Årsaker til imperialismen',
      content: `**Økonomiske årsaker:**
- Behov for råvarer til industrien
- Søken etter nye markeder
- Investering av overskuddskapital
- Sikre handelsveier

**Politiske årsaker:**
- Nasjonalistisk prestisje
- Militærstrategiske posisjoner
- Rivalisering mellom stormaktene

**Ideologiske årsaker:**
- "Sivilisering" av "primitive" folk
- Sosialdarwinisme: De sterkeste overlever
- "Den hvite manns byrde": Plikt til å "hjelpe"
- Misjon og kristendom

**Teknologiske forutsetninger:**
- Dampskip og jernbaner
- Moderne våpen (maskingevær)
- Medisiner (kinin mot malaria)
- Telegraf for kommunikasjon`,
    },
    {
      id: 'historie-1-6-def-2',
      type: 'definition',
      title: 'Kolonistyrets former',
      content: `**Direkte styre:**
Kolonimakten styrte direkte gjennom egne tjenestemenn. Lite lokalt selvstyre.

**Indirekte styre:**
Brukte lokale herskere som mellomledd. Storbritannia brukte ofte dette.

**Bosetterkolonier:**
Europeere bosatte seg permanent. Eksempel: Sør-Afrika, Algerie, Australia.

**Utnyttelseskolonier:**
Fokus på å hente ut ressurser. Få europeere bosatte seg.

**Protektorater:**
Formelt selvstendige, men under kolonimaktens "beskyttelse" og kontroll.

**Konsesjonsselskaper:**
Private selskaper fikk monopol på handel og utvinning. Eksempel: Det britiske østindiske kompani.`,
    },
    {
      id: 'historie-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Belgisk Kongo',
      problem: `Belgisk Kongo under kong Leopold II er et av de verste eksemplene på kolonial brutalitet. Hva skjedde?`,
      solution: `**Bakgrunn:**
Leopold II av Belgia fikk personlig kontroll over Kongo i 1885 - ikke som belgisk koloni, men som sin private eiendom.

**Brutalitet:**
- Befolkningen ble tvunget til å samle gummi
- De som ikke møtte kvotene ble straffet
- Avkapping av hender som straff
- Gisseltagning av kvinner og barn
- Massakrer på landsbyer
- Millioner døde (anslagene varierer fra 1 til 10 millioner)

**Avsløring:**
Journalister og misjonærer avslørte forholdene. Internasjonal kampanje førte til at Belgia overtok kolonien i 1908.

**Lærdom:**
- Viser hvordan kolonialisme kunne føre til ekstrem utbytting
- Rasisme rettferdiggjorde overgrep
- Profitt ble prioritert over menneskeliv
- Ettervirkninger preger DR Kongo fortsatt`,
    },
    {
      id: 'historie-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar de viktigste årsakene til imperialismen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke økonomiske grunner hadde europeerne?',
            solution: 'Behov for råvarer, nye markeder for industrivarer, steder å investere kapital, kontroll over handelsveier.',
          },
          {
            label: 'b',
            task: 'Hvilke politiske grunner var viktige?',
            solution: 'Nasjonal prestisje, militærstrategiske posisjoner, rivalisering mellom stormaktene om å bli størst.',
          },
          {
            label: 'c',
            task: 'Hvordan ble imperialismen ideologisk rettferdiggjort?',
            solution: 'Sivilisering av "primitive" folk, sosialdarwinisme, "den hvite manns byrde", kristning.',
          },
        ],
        solution: 'Kombinasjon av økonomiske, politiske og ideologiske årsaker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva menes med sosialdarwinisme, og hvordan ble den brukt?',
        hints: ['Tenk på Darwins ideer overført til samfunn og "raser"'],
        solution: 'Sosialdarwinisme overførte Darwins evolusjonsteori til samfunn og "raser". De hevdet at noen folk var naturlig overlegne andre. Dette ble brukt til å rettferdiggjøre kolonialisme - de "overlegne" europeerne hadde rett til å styre "underlegne" folk. En pseudovitenskapelig rasisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke konsekvenser hadde imperialismen for koloniserte folk?',
        hints: ['Tenk på økonomi, kultur, politikk og befolkning'],
        solution: 'Konsekvenser: Tap av selvstendighet, økonomisk utbytting, tvangsarbeid, kulturell undertrykkelse, innføring av kunstige grenser, sykdommer, folketap. Men også: Infrastruktur, utdanning, nye ideer som senere inspirerte motstand.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva var Berlinkonferansen (1884-85)?',
        hints: ['Tenk på delingen av Afrika'],
        solution: 'På Berlinkonferansen møttes europeiske stormakter for å dele Afrika mellom seg. Ingen afrikanske ledere var invitert. De trakk grenser uten hensyn til eksisterende folk og riker. Dette la grunnlaget for "kappløpet om Afrika" og mange av dagens afrikanske landegrenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan gjorde motstandsbevegelser opprør mot kolonialismen?',
        hints: ['Tenk på ulike former for motstand - væpnet og ikke-væpnet'],
        solution: 'Former for motstand: Væpnede opprør (Zulukriger, Boxeropprøret i Kina), sabotasje, bevaring av egen kultur og religion, bruk av europeiske ideer (nasjonalisme, menneskerettigheter) mot kolonimaktene, politisk organisering, streiker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-1-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Hvilke ettervirkninger har kolonialismen i dag?',
        hints: ['Tenk på grenser, økonomi, konflikter og internasjonale relasjoner'],
        solution: 'Ettervirkninger: Kunstige landegrenser skaper konflikter, økonomisk avhengighet og ulikhet, psykologiske traumer, tap av kulturarv, rasisme som ideologi lever videre. Men også: Spredning av teknologi og ideer, internasjonale forbindelser. Debatten om reparasjoner og unnskyldninger pågår.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Første verdenskrig
// ============================================================================

export const CHAPTER_HISTORIE_7: TextbookChapter = {
  id: 'historie-1-7',
  courseId: 'historie',
  chapterNumber: '7',
  title: 'Første verdenskrig',
  description: 'Forstå årsakene til, forløpet av og konsekvensene av den store krigen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere årsakene til første verdenskrig',
    'gjøre rede for krigens karakter og forløp',
    'vurdere krigens konsekvenser for Europa og verden',
  ],
  content: [
    {
      id: 'historie-1-7-intro',
      type: 'text',
      content: `## Den store krigen

Første verdenskrig (1914-1918) var en katastrofe som endret verden for alltid. Den ble kalt "krigen som skulle avslutte alle kriger", men la i stedet grunnlaget for nye konflikter.

**Omfang:**
- Ca. 17 millioner døde (soldater og sivile)
- 20 millioner sårede
- Fire imperier falt: Det tyske, østerriksk-ungarske, russiske og osmanske
- Nye nasjoner oppsto
- Politisk radikalisering

**Hvorfor "første verdenskrig"?**
Kjempet på flere kontinenter med deltakere fra hele verden. Kolonier leverte soldater og ressurser.`,
    },
    {
      id: 'historie-1-7-def-1',
      type: 'definition',
      title: 'Årsakene til krigen',
      content: `**Langsiktige årsaker:**

**Nasjonalisme:**
Sterk nasjonal stolthet og rivalisering. "Min nasjon er best."

**Imperialisme:**
Konkurranse om kolonier og innflytelsessfærer.

**Militarisme:**
Opprustning og glorifisering av militæret. Hærene vokste.

**Allianser:**
- Trippelalliansen: Tyskland, Østerrike-Ungarn, Italia
- Trippelententen: Frankrike, Russland, Storbritannia

**Kortsiktig årsak - gnisten:**
Skuddene i Sarajevo 28. juni 1914. Den østerriksk-ungarske tronarvingen Franz Ferdinand ble drept av den serbiske nasjonalisten Gavrilo Princip.

**Alliansene i aksjon:**
Østerrike-Ungarn angrep Serbia → Russland mobiliserte → Tyskland erklærte krig → Frankrike og Storbritannia kom med.`,
    },
    {
      id: 'historie-1-7-def-2',
      type: 'definition',
      title: 'Krigens karakter',
      content: `**Skyttergravskrig:**
På vestfronten gravde soldatene seg ned i skyttergraver. Fronten beveget seg knapt på fire år.

**Ny teknologi:**
- Maskingevær: Gjorde angrep over åpent terreng dødelige
- Artilleri: 60% av tapene skyldtes granater
- Giftgass: Sennepsgass, klorgass
- Tanks: Introdusert av britene i 1916
- Fly: Først til rekognosering, senere bombing
- Ubåter: Tysklands våpen mot britisk skipsfart

**Industrialisert krig:**
Første krig der industri var avgjørende. Masseproduksjon av våpen. Total mobilisering av samfunnet.

**"Ingen manns land":**
Området mellom skyttergravene - en dødssone med piggtråd, kratere og lik.

**Slagene:**
Verdun (1916): 300 000 døde, fronten flyttet seg knapt. Somme (1916): 1 million døde og sårede.`,
    },
    {
      id: 'historie-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Soldatenes opplevelser',
      problem: `Hvordan var livet i skyttergravene? Hva forteller kilder fra soldater oss?`,
      solution: `**Fysiske forhold:**
- Gjørme, kulde og fuktighet
- Rotter og lus overalt
- "Skyttergravsfot" - råtnende føtter av fuktighet
- Konstant fare for granatangrep
- Søvnmangel og dårlig mat

**Psykiske belastninger:**
- Ventet i dager/uker på angrepsordre
- Så kamerater dø rundt seg
- Konstant frykt og angst
- "Shell shock" (det vi kaller PTSD)
- Desillusjonering - følte seg lurt av lederne

**Soldatbrev og dagbøker forteller:**
- Begynte ofte optimistisk, ble mørkere
- Lengsel hjem til familie
- Sinne over krigens meningsløshet
- Kameratskap i skyttergravene
- Hat mot politikere og generaler

**Eksempel fra vestfronten:**
"Vi angrep klokken seks. Klokken sju var halvparten av kompaniet døde. Vi hadde tatt 50 meter." (Britisk soldat, Somme 1916)`,
    },
    {
      id: 'historie-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar de langsiktige årsakene til første verdenskrig.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var nasjonalismens rolle?',
            solution: 'Nasjonalisme skapte rivalisering mellom land, konflikter i fleretniske imperier, og vilje til krig for nasjonal ære.',
          },
          {
            label: 'b',
            task: 'Hvorfor var alliansesystemet farlig?',
            solution: 'Alliansene gjorde at en konflikt mellom to land automatisk trakk inn andre land. En lokal krig ble til verdenskrig.',
          },
          {
            label: 'c',
            task: 'Hva betydde militarismen?',
            solution: 'Militarisme førte til opprustning og glorifisering av krig. Store hærer sto klare. Generaler fikk innflytelse på politikken.',
          },
        ],
        solution: 'Kombinasjonen av nasjonalisme, imperialisme, militarisme og allianser skapte en eksplosiv situasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor utviklet krigen seg til skyttergravskrig på vestfronten?',
        hints: ['Tenk på teknologi og strategi'],
        solution: 'Maskingeværet og artilleriet gjorde angrep over åpent terreng selvmord. Forsvar var mye sterkere enn angrep. Begge sider gravde seg ned for beskyttelse. Ingen klarte å gjennombryte fiendens linjer. Resultatet var fastlåst krig i fire år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var USA sin rolle i første verdenskrig?',
        hints: ['Tenk på nøytralitet, ubåtkrig og krigsinntredelse'],
        solution: 'USA var nøytralt til 1917. Tysk ubåtkrig (inkludert senking av Lusitania), og avsløring av Zimmermann-telegrammet (tysk tilbud til Mexico) førte til krigserklæring. USAs ressurser og soldater var avgjørende for ententens seier i 1918.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken rolle spilte kvinner under første verdenskrig?',
        hints: ['Tenk på industri, pleie og samfunnsdeltakelse'],
        solution: 'Kvinner tok over menns jobber i fabrikker, transport og jordbruk. Mange tjenestegjorde som sykepleiere nær fronten. Dette endret synet på kvinners evner og bidro til at kvinner fikk stemmerett i flere land etter krigen (Storbritannia, USA, Tyskland).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva var konsekvensene av første verdenskrig?',
        hints: ['Tenk på politiske, sosiale og økonomiske følger'],
        solution: 'Konsekvenser: Fire imperier falt (tysk, østerriksk-ungarske, russiske, osmanske). Nye nasjoner oppsto. Russland ble kommunistisk. Versaillestraktaten straffet Tyskland hardt. Folkeforbundet ble opprettet. Økonomisk kaos. Grunnlag for andre verdenskrig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-1-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Var Versaillestraktaten en god fredsavtale?',
        hints: ['Tenk på dens innhold, mål og konsekvenser'],
        solution: 'Mot: Var for hard mot Tyskland (krigsskyldparagrafen, erstatninger, tap av territorium), skapte bitterhet som Hitler utnyttet. For: Forståelig ut fra fransk hevnlyst etter invasjon. Problem: Hverken mild nok til forsoning eller hard nok til å holde Tyskland nede permanent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Mellomkrigstiden og totalitære ideologier
// ============================================================================

export const CHAPTER_HISTORIE_8: TextbookChapter = {
  id: 'historie-1-8',
  courseId: 'historie',
  chapterNumber: '8',
  title: 'Mellomkrigstiden og totalitære ideologier',
  description: 'Forstå de politiske og økonomiske krisene som førte til fascisme og nazisme.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjøre rede for mellomkrigstidens politiske og økonomiske kriser',
    'analysere totalitære ideologiers fremvekst',
    'forstå hvordan demokratier kunne bli diktaturer',
  ],
  content: [
    {
      id: 'historie-1-8-intro',
      type: 'text',
      content: `## Mellomkrigstidens kriser

Perioden 1918-1939 var preget av politisk ustabilitet, økonomiske kriser og fremveksten av totalitære bevegelser.

**Hovedutfordringer:**
- Nye demokratier slet med å etablere seg
- Økonomiske problemer etter krigen
- Den store depresjonen fra 1929
- Misnøye med fredsoppgjøret
- Frykt for kommunisme

**Resultat:**
Demokratiene falt ett etter ett. I 1939 var de fleste europeiske land diktaturer:
- Italia: Fascisme fra 1922
- Tyskland: Nazisme fra 1933
- Spania: Franco fra 1939
- Sovjetunionen: Stalins diktatur`,
    },
    {
      id: 'historie-1-8-def-1',
      type: 'definition',
      title: 'Totalitarisme',
      content: `**Hva er totalitarisme?**
Styreform der staten søker total kontroll over samfunnet og individet. Ingen sfære er privat.

**Kjennetegn:**
- Enepartistyre - ingen opposisjon tillatt
- Diktator med personkult
- Ideologi som forklarer alt
- Kontroll over media og utdanning
- Hemmelig politi og terror
- Kontroll over økonomien
- Mobilisering av massene

**Totalitære bevegelser:**
- **Fascisme:** Italia, Mussolini
- **Nazisme:** Tyskland, Hitler
- **Stalinisme:** Sovjetunionen, Stalin

**Forskjell fra tradisjonelle diktaturer:**
Tradisjonelle diktaturer nøyde seg med politisk makt. Totalitære regimer ville kontrollere tanker, følelser og alle aspekter av livet.`,
    },
    {
      id: 'historie-1-8-def-2',
      type: 'definition',
      title: 'Fascisme og nazisme',
      content: `**Fascismens kjerne:**
- Nasjonalisme - nasjonen over alt
- Antiparlamentarisme - avvisning av demokrati
- Antimarxisme - mot kommunisme
- Vold og handling verdsatt
- Leder (Duce, Führer) som nasjonens legemliggjøring
- Korporativisme - samarbeid mellom arbeid og kapital under statens ledelse

**Nazismens særtrekk:**
- Rasisme og antisemittisme som kjerneelement
- "Herrefolkideologi" - arierne overlegne
- Lebensraum - "livsrom" i øst
- Sosialdarwinisme - de sterkeste overlever
- Blod og jord - mystikk om det tyske folk

**Propaganda:**
Effektiv bruk av radio, film, massemøter. Følelser over fornuft. Enkle budskap. Syndebukker.`,
    },
    {
      id: 'historie-1-8-def-3',
      type: 'definition',
      title: 'Den store depresjonen',
      content: `**Hva skjedde?**
Børskrakket på Wall Street i oktober 1929 utløste verdens verste økonomiske krise.

**Årsaker:**
- Spekulasjon på aksjemarkedet
- Overproduksjon av varer
- Gjeldsproblemer etter krigen
- Proteksjonisme (tollmurer)

**Konsekvenser:**
- Massiv arbeidsledighet (25% i USA og Tyskland)
- Bankkollapser
- Konkurser
- Fattigdom og nød

**Politiske følger:**
- Mistillit til demokratiet og kapitalismen
- Ekstreme bevegelser vokste
- Folk søkte sterke ledere
- Nazistene vokste fra 2% til 37% i Tyskland

**Løsninger:**
- USA: New Deal - statlig inngripen
- Skandinavia: Sosialdemokratisk velferdsstat
- Tyskland/Italia: Opprustning og offentlige arbeider`,
    },
    {
      id: 'historie-1-8-example-1',
      type: 'example',
      title: 'Eksempel: Hitlers vei til makten',
      problem: `Hvordan kunne Hitler og nazistene ta makten i demokratiske Tyskland?`,
      solution: `**Weimarrepublikken (1919-1933):**
- Demokratisk grunnlov, men svak
- Belastet av Versaillestraktaten
- Hyperinflasjon i 1923
- Politisk vold fra høyre og venstre

**Nazistenes fremvekst:**
- Hitler grunnla NSDAP, forsøkte kupp i 1923
- Brukte lovlige metoder etter fengsel
- Depresjonen fra 1929 ga massestøtte
- Effektiv propaganda og masseappell

**Maktovertakelsen:**
- Januar 1933: Hitler utnevnt til rikskansler
- Riksdagsbrannen: Unntakstilstand
- Fullmaktsloven: Diktatorisk makt
- Opposisjon forbudt, nazifisering

**Hvorfor lyktes de?**
- Økonomisk krise og massearbeidsløshet
- Frykt for kommunisme
- Svakt demokratisk forsvar
- Eliten trodde de kunne kontrollere Hitler
- Splittelse mellom motstandere

**Lærdom:**
Demokrati er sårbart i krisetider. Det må forsvares aktivt.`,
    },
    {
      id: 'historie-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner et totalitært regime?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skiller det seg fra et vanlig diktatur?',
            solution: 'Et vanlig diktatur kontrollerer politisk makt, mens totalitarisme søker kontroll over alle aspekter av livet - tanker, følelser, kultur, økonomi.',
          },
          {
            label: 'b',
            task: 'Nevn minst fire kjennetegn på totalitarisme.',
            solution: 'Enepartistyre, personkult rundt lederen, ideologi som forklarer alt, kontroll over media, hemmelig politi, terror, massemobilisering.',
          },
        ],
        solution: 'Totalitarisme søker total kontroll over samfunn og individ.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var fascismens hovedideer?',
        hints: ['Tenk på nasjonalisme, lederskap og syn på demokrati'],
        solution: 'Fascismens hovedideer: Ekstrem nasjonalisme, leder (Duce/Führer) som nasjonens legemliggjøring, avvisning av demokrati og parlamentarisme, antimarxisme, glorifisering av vold og handling, korporativisme, masseappell gjennom propaganda.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva skilte nazismen fra italiensk fascisme?',
        hints: ['Tenk på rasisme og antisemittisme'],
        solution: 'Nazismens særtrekk: Biologisk rasisme og antisemittisme var kjerneelementer. Herrefolkideologi om ariernes overlegenhet. Lebensraum-ideen om ekspansjon østover. Holocaust ble mulig bare under nazismen, ikke italiensk fascisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan bidro den store depresjonen til nazismens suksess?',
        hints: ['Tenk på arbeidsledighet, fattigdom og mistillit'],
        solution: 'Depresjonen skapte massiv arbeidsledighet (6 millioner i Tyskland), fattigdom og desperasjon. Folk mistet troen på demokratiet og kapitalismen. Nazistene tilbød enkle løsninger og syndebukker. De vokste fra 2% til 37% på få år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan brukte de totalitære regimene propaganda?',
        hints: ['Tenk på medier, følelser og teknikker'],
        solution: 'Propaganda-teknikker: Kontroll over all media (radio, aviser, film). Massemøter og symboler. Enkle slagord og repetisjon. Appell til følelser, ikke fornuft. Personkult rundt lederen. Demonisering av fiender (jøder, kommunister). Sensur av motstridende synspunkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-1-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Kan demokratier falle i dag på samme måte som i 1930-årene?',
        hints: ['Tenk på likheter og forskjeller mellom den gang og nå'],
        solution: 'Likheter med i dag: Økonomiske kriser, misnøye med eliter, populisme, spredning av desinformasjon. Forskjeller: Sterke internasjonale institusjoner, lærdommer fra historien, mer utdannet befolkning. Likevel: Demokrati må forsvares aktivt. Advarsler: Polarisering, mistillit, autoritære tendenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Andre verdenskrig og Holocaust
// ============================================================================

export const CHAPTER_HISTORIE_9: TextbookChapter = {
  id: 'historie-1-9',
  courseId: 'historie',
  chapterNumber: '9',
  title: 'Andre verdenskrig og Holocaust',
  description: 'Forstå historiens mest ødeleggende konflikt og folkemordet på jødene.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere årsakene til andre verdenskrig',
    'gjøre rede for krigens hovedfaser og vendepunkter',
    'forstå Holocaust og drøfte hvordan det var mulig',
  ],
  content: [
    {
      id: 'historie-1-9-intro',
      type: 'text',
      content: `## Verdenshistoriens største katastrofe

Andre verdenskrig (1939-1945) var den mest ødeleggende konflikten i menneskehetens historie.

**Omfang:**
- 70-85 millioner døde (inkludert sivile)
- Flertallet var sivile, ikke soldater
- Holocaust: 6 millioner jøder drept
- Atombombene over Hiroshima og Nagasaki
- Enorme materielle ødeleggelser

**Krigen var total:**
- Hele samfunn mobilisert
- Sivile mål bombet
- Ideologisk kamp på liv og død
- Folkemord som krigsmål

**Resultat:**
USA og Sovjetunionen som supermakter, FN opprettet, Europa delt, avkolonisering begynte.`,
    },
    {
      id: 'historie-1-9-def-1',
      type: 'definition',
      title: 'Veien til krig',
      content: `**Hitlers mål:**
- Oppheve Versaillestraktaten
- Samle alle tyskere i ett rike
- Lebensraum (livsrom) i øst
- Knuse kommunismen
- Rase-ideologisk nyordning

**Stegene til krig:**
1. **1936:** Remilitarisering av Rhinland
2. **1938:** Anschluss - innlemmelse av Østerrike
3. **1938:** München-avtalen - Sudetenland
4. **1939:** Okkupasjon av resten av Tsjekkoslovakia
5. **1939:** Angrep på Polen - krigen bryter ut

**Ettergivenhetspolitikken:**
Storbritannia og Frankrike ga etter for Hitlers krav i håp om å unngå krig. München-avtalen (1938) ble symbolet. "Fred i vår tid" - Chamberlain.

**Hitler-Stalin-pakten (august 1939):**
Ikke-angrepsavtale med hemmelig protokoll om deling av Polen og Øst-Europa. Sjokkerte verden.`,
    },
    {
      id: 'historie-1-9-def-2',
      type: 'definition',
      title: 'Krigens hovedfaser',
      content: `**Blitzkrieg (1939-1941):**
- Polen erobret på uker
- Danmark og Norge (april 1940)
- Nederland, Belgia, Frankrike (mai-juni 1940)
- Balkan og Nord-Afrika
- Operasjon Barbarossa: Angrep på Sovjetunionen (juni 1941)

**Vendepunktet (1942-1943):**
- Stalingrad: Tysk nederlag (februar 1943)
- El Alamein: Britisk seier i Afrika
- Midway: USA stanser Japan
- Kursk: Største panserslagfronten

**Alliert fremrykking (1943-1945):**
- Italia invadert (1943)
- D-dagen: Normandie (6. juni 1944)
- Sovjetisk fremrykking fra øst
- Bombing av tyske byer
- Tysklands kapitulasjon (8. mai 1945)

**Stillehavskrigen:**
- Pearl Harbor (desember 1941)
- Øyhopping mot Japan
- Atombombene (august 1945)
- Japansk kapitulasjon (15. august 1945)`,
    },
    {
      id: 'historie-1-9-def-3',
      type: 'definition',
      title: 'Holocaust',
      content: `**Hva var Holocaust?**
Det nazistiske folkemordet på Europas jøder. Ca. 6 millioner jøder ble drept.

**Utviklingen:**
1. Diskriminering: Nürnberglovene (1935) tok borgerrettigheter
2. Forfølgelse: Krystallnatten (1938), ghettoer
3. Massedrap: Innsatsgrupper (Einsatzgruppen) i øst fra 1941
4. Industrielt folkemord: Dødsleire fra 1942

**Dødsleire:**
Auschwitz-Birkenau, Treblinka, Sobibor, mfl. Gasskamre og krematorier for massedrap.

**Andre ofre:**
Roma (sigøynere), funksjonshemmede, homofile, politiske motstandere, Jehovas vitner, sovjetiske krigsfanger.

**"Endlösung" (Den endelige løsningen):**
Besluttet på Wannsee-konferansen (januar 1942). Systematisk utryddelse av alle jøder.

**Hvordan var det mulig?**
Antisemittisme, propaganda, byråkratisk organisering, lydighet, opportunisme, likegyldighet.`,
    },
    {
      id: 'historie-1-9-example-1',
      type: 'example',
      title: 'Eksempel: Norge under okkupasjonen',
      problem: `Hvordan var livet i Norge under den tyske okkupasjonen 1940-1945?`,
      solution: `**Okkupasjonen:**
- 9. april 1940: Tyskland angriper Norge
- Kongen og regjeringen flykter
- Motstand i to måneder, deretter kapitulasjon
- Quisling og NS-regimet

**Hverdagen:**
- Rasjonering av mat og varer
- Sensur og propaganda
- Nasjonal Samling forsøkte nazifisering
- Jøssinger vs. quislings
- Mange levde "normalt" men vanskelig

**Motstand:**
- Sivil motstand: "Isfront" mot NS
- Lærernes nei til nazifisering
- Kirkens motstand
- Hjemmefronten: Sabotasje, etterretning
- Milorg: Militær motstandsorganisasjon
- Tungtvannsaksjonen

**Jødene i Norge:**
- Ca. 2100 jøder i Norge
- 773 deportert til Auschwitz
- 34 overlevde
- Mange flyktet til Sverige

**Frigjøringen:**
8. mai 1945: Tyskland kapitulerer. Kongen kommer hjem 7. juni.`,
    },
    {
      id: 'historie-1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar årsakene til andre verdenskrig.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke mål hadde Hitler?',
            solution: 'Oppheve Versaillestraktaten, samle alle tyskere, skaffe Lebensraum i øst, knuse kommunismen, skape rasemessig "ren" stat.',
          },
          {
            label: 'b',
            task: 'Hva var ettergivenhetspolitikken?',
            solution: 'Storbritannia og Frankrike ga etter for Hitlers krav i håp om å unngå krig. München-avtalen (1938) var høydepunktet.',
          },
          {
            label: 'c',
            task: 'Hvorfor mislyktes ettergivenhetspolitikken?',
            solution: 'Hitler så det som svakhet og fortsatte ekspansjonen. Han ønsket krig. Appeasement ga ham tid til å ruste opp.',
          },
        ],
        solution: 'Kombinasjon av Hitlers aggresjon og de alliertes unnfallenhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var vendepunktene i andre verdenskrig?',
        hints: ['Tenk på de viktigste slagene og hendelsene'],
        solution: 'Viktige vendepunkter: Slaget om Stalingrad (1942-43) - tysk nederlag i øst. El Alamein (1942) - vendepunkt i Nord-Afrika. Midway (1942) - USA stanser Japan. Kursk (1943) - sovjetisk seier. D-dagen (1944) - alliert invasjon i vest.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gjør rede for Holocaust.',
        hints: ['Beskriv utviklingen fra diskriminering til folkemord'],
        solution: 'Holocaust utviklet seg i faser: Først diskriminering (Nürnberglovene). Så forfølgelse (Krystallnatten, ghettoer). Deretter massedrap (Einsatzgruppen). Til slutt industrielt folkemord i dødsleire (Auschwitz). 6 millioner jøder ble drept.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan var det mulig at Holocaust kunne skje?',
        hints: ['Tenk på ideologi, byråkrati og menneskelig atferd'],
        solution: 'Flere faktorer: Lang historie med antisemittisme. Nazistisk propaganda dehumaniserte jøder. Byråkratisk organisering spredte ansvar. Lydighet mot autoriteter. Karriereisme og opportunisme. Likegyldighet fra tilskuere. Frykt for å motsette seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv motstandsarbeidet i Norge under okkupasjonen.',
        hints: ['Tenk på ulike former for motstand'],
        solution: 'Motstandsformer: Sivil motstand ("isfront" mot NS), lærernes nei til nazifisering, kirkens protest. Aktiv motstand: Sabotasje, etterretning, illegale aviser. Milorg forberedte væpnet kamp. Tungtvannsaksjonen. Hjelp til jøder og flyktninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-1-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Var det riktig å bruke atombomben mot Japan?',
        hints: ['Tenk på argumenter for og mot'],
        solution: 'For: Avsluttet krigen raskere, sparte allierte liv, alternativet var invasjon. Mot: Enorme sivile tap, unødvendig (Japan var nær kapitulasjon), demonstrasjon av makt mot Sovjet, moralsk grense overskredet. Debatten fortsetter blant historikere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Den kalde krigen og etterkrigstiden
// ============================================================================

export const CHAPTER_HISTORIE_10: TextbookChapter = {
  id: 'historie-1-10',
  courseId: 'historie',
  chapterNumber: '10',
  title: 'Den kalde krigen og etterkrigstiden',
  description: 'Forstå konflikten mellom Øst og Vest og utviklingen frem mot vår tid.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjøre rede for den kalde krigens årsaker og kjennetegn',
    'analysere viktige hendelser og kriser i den kalde krigen',
    'forstå avslutningen på den kalde krigen og dens ettervirkninger',
  ],
  content: [
    {
      id: 'historie-1-10-intro',
      type: 'text',
      content: `## Den kalde krigen (1947-1991)

Etter andre verdenskrig ble verden delt mellom to supermakter med motstridende ideologier: USA og Sovjetunionen.

**Hva var den kalde krigen?**
- Konflikt uten direkte krig mellom supermaktene
- Ideologisk kamp: Kapitalisme vs. kommunisme
- Våpenkappløp og atomvåpen
- Stedfortrederkrig i den tredje verden
- Propaganda og spionasje

**Europa delt:**
- Jernteppet: Grensen mellom øst og vest
- NATO (1949): Vestlig forsvarsallianse
- Warszawapakten (1955): Østblokkens allianse
- Berlinmuren (1961): Symbol på delingen

**Hvorfor "kald"?**
Supermaktene bekjempet hverandre uten direkte militær konfrontasjon - krigen var "kald", ikke "varm".`,
    },
    {
      id: 'historie-1-10-def-1',
      type: 'definition',
      title: 'Den kalde krigens årsaker',
      content: `**Ideologiske motsetninger:**
- USA: Kapitalisme, demokrati, frihet
- Sovjet: Kommunisme, planøkonomi, ettpartistyre

**Geopolitiske interesser:**
- Begge ønsket innflytelse i Europa og verden
- Sovjetisk kontroll over Øst-Europa
- Amerikansk frykt for kommunismens spredning

**Mistillit:**
- Motstandere i 1918-1920 (intervensjonen)
- Ubekvemt samarbeid under krigen
- Uenighet om Tysklands fremtid

**Utløsende faktorer:**
- Churchills "jernteppe"-tale (1946)
- Truman-doktrinen (1947): Støtte mot kommunisme
- Marshallplanen (1948): Økonomisk hjelp til Vest-Europa
- Berlin-blokaden (1948-49)
- Sovjetisk atombombe (1949)`,
    },
    {
      id: 'historie-1-10-def-2',
      type: 'definition',
      title: 'Kriser og konflikter',
      content: `**Korea-krigen (1950-1953):**
Nord-Korea (kommunistisk) angrep Sør-Korea. USA grep inn med FN-mandat. Kina grep inn. Våpenhvile i 1953.

**Cuba-krisen (1962):**
Sovjet plasserte atomraketter på Cuba. USA krevde fjerning. Verden nær atomkrig. Endte med sovjetisk tilbaketrekning.

**Vietnam-krigen (1955-1975):**
USA støttet Sør-Vietnam mot kommunistiske Nord-Vietnam. Over 58 000 amerikanske soldater døde. USA trakk seg ut. Vietnam ble kommunistisk.

**Invasjonen av Afghanistan (1979-1989):**
Sovjet invaderte, møtte gerilja (mujahedin) støttet av USA. "Sovjets Vietnam". Svekket Sovjet.

**Andre konflikter:**
Berlin-muren (1961), Ungarn 1956, Praha-våren 1968, stedfortrederkrig i Afrika og Latin-Amerika.`,
    },
    {
      id: 'historie-1-10-def-3',
      type: 'definition',
      title: 'Den kalde krigens slutt',
      content: `**Årsaker til kommunismens fall:**

**Økonomiske problemer:**
- Planøkonomien fungerte ikke
- Teknologisk tilbakestand
- Våpenkappløpet kostet enormt
- Lavere levestandard enn i Vesten

**Politisk:**
- Gorbatsjov: Glasnost (åpenhet) og Perestrojka (omstrukturering)
- Nektet å bruke makt mot reformer i Øst-Europa

**Folkelig motstand:**
- Solidaritet i Polen
- Demonstrasjoner i Øst-Tyskland
- "Folkenes høst" 1989

**Hovedhendelser 1989-1991:**
- Berlinmurens fall (9. november 1989)
- Frie valg i Øst-Europa
- Tysklands gjenforening (1990)
- Sovjetunionens oppløsning (desember 1991)

**Ny verdensorden:**
USA ene supermakt, EU-utvidelse, NATO-utvidelse, men også nye konflikter.`,
    },
    {
      id: 'historie-1-10-example-1',
      type: 'example',
      title: 'Eksempel: Norge i den kalde krigen',
      problem: `Hvilken posisjon hadde Norge i den kalde krigen?`,
      solution: `**Norges stilling:**
- NATO-medlem fra 1949
- Grense mot Sovjetunionen
- Strategisk viktig: Atlanterhavet, Nordområdene
- "Flankestat" i NATO

**Basepolitikken:**
Norge tillot ikke fremmed militære baser i fredstid. Kompromiss mellom avskrekking og beroligelse.

**Etterretningstjeneste:**
Norge viktig for overvåking av sovjetisk aktivitet i nord. Samarbeid med USA og Storbritannia.

**Forsvarspolitikk:**
Stor forsvarsutbygging. Verneplikt. Forhåndslagring av amerikansk utstyr.

**Brobygging:**
Norge forsøkte også dialog med øst. Kulturutveksling. Nordisk samarbeid.

**Innenrikspolitiske følger:**
Debatt om NATO og atomvåpen. "Nato-saken" splittet Arbeiderpartiet. Overvåking av kommunister (POT).

**Nordområdene:**
Fiskerigrense, Svalbard, havretten - spenninger og forhandlinger med Sovjet.`,
    },
    {
      id: 'historie-1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var hovedårsakene til den kalde krigen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke ideologiske motsetninger fantes?',
            solution: 'USA sto for kapitalisme og demokrati, Sovjetunionen for kommunisme og ettpartistyre. Uforenlige verdenssyn.',
          },
          {
            label: 'b',
            task: 'Hvilke hendelser utløste konflikten?',
            solution: 'Uenighet om Europas fremtid, Truman-doktrinen, Marshallplanen, Berlin-blokaden, sovjetisk atombombe.',
          },
        ],
        solution: 'Ideologiske motsetninger kombinert med geopolitiske interesser og mistillit.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var Cuba-krisen, og hvorfor var den så farlig?',
        hints: ['Tenk på atomvåpen og supermaktskonfrontasjon'],
        solution: 'I 1962 oppdaget USA sovjetiske atomraketter på Cuba. Kennedy krevde fjerning og innførte blokade. Verden sto på randen av atomkrig i 13 dager. Khrusjtsjov trakk tilbake rakettene mot at USA lovet å ikke invadere Cuba. Nærmeste verden kom atomkrig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var konsekvensene av Vietnam-krigen?',
        hints: ['Tenk på USA, Vietnam og verdensopinionen'],
        solution: 'Konsekvenser: Over 58 000 amerikanske og 2-3 millioner vietnamesiske døde. USA mistet tillit hjemme og ute. Vietnam ble kommunistisk. "Vietnam-syndromet" - USAs skepsis til militær intervensjon. Miljøskader (Agent Orange). Flyktningkrise.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor falt kommunismen i Øst-Europa i 1989?',
        hints: ['Tenk på økonomi, Gorbatsjov og folkelig motstand'],
        solution: 'Årsaker: Økonomisk stagnasjon og lavere levestandard enn Vesten. Gorbatsjovs reformer (glasnost, perestrojka). Han nektet å bruke makt mot reformer. Folkelige protester (Polen, Øst-Tyskland). Berlinmurens fall utløste dominoeffekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-1-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilken rolle spilte Norge i den kalde krigen?',
        hints: ['Tenk på NATO, nordområdene og balansepolitikk'],
        solution: 'Norge var NATO-medlem med grense mot Sovjet, strategisk viktig. Basepolitikken balanserte avskrekking og beroligelse. Viktig for etterretning i nord. Forsøkte også brobygging gjennom dialog. Nordområdene var spenningsområde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-1-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Lever vi fortsatt med følgene av den kalde krigen?',
        hints: ['Tenk på geopolitikk, konflikter og internasjonale relasjoner'],
        solution: 'Ja, på flere måter: NATO og Russland-spenninger fortsetter. Konflikter fra den tiden ulmer (Korea, Taiwan). Atomvåpen eksisterer fortsatt. Mistilliten mellom Vesten og Russland har røtter i den kalde krigen. Samtidig er verden mer multipolar i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

// Behold de gamle kapitlene for bakoverkompatibilitet (brukes av gamle ID-er)
export const HISTORIE_LEGACY_CHAPTERS = [
  CHAPTER_HISTORIE_1,
  CHAPTER_HISTORIE_2,
  CHAPTER_HISTORIE_3,
  CHAPTER_HISTORIE_4,
  CHAPTER_HISTORIE_5,
  CHAPTER_HISTORIE_6,
  CHAPTER_HISTORIE_7,
  CHAPTER_HISTORIE_8,
  CHAPTER_HISTORIE_9,
  CHAPTER_HISTORIE_10,
];

// Ny fullstendig eksport med alle 70 kapitler fra LK20
export const HISTORIE_CHAPTERS: TextbookChapter[] = [
  ...HISTORIE_CHAPTERS_DEL1,
  ...HISTORIE_CHAPTERS_DEL2,
  ...HISTORIE_CHAPTERS_DEL3,
  ...HISTORIE_CHAPTERS_DEL4,
];

// VG2-kapitler (Kapittel 1-10): Historisk metode, antikken, middelalderen, renessanse,
// revolusjoner, industrialisering, nasjonalisme, imperialisme, kulturmøter
export const HISTORIE_CHAPTERS_VG2: TextbookChapter[] = [
  ...HISTORIE_CHAPTERS_DEL1,  // Kap 1-4
  ...HISTORIE_CHAPTERS_DEL2,  // Kap 5-8
  ...HISTORIE_CHAPTERS_DEL3_VG2,  // Kap 9-10
];

// VG3-kapitler (Kapittel 11-17): Første verdenskrig, mellomkrigstid, andre verdenskrig,
// kald krig, velferdsstat, norsk identitet, samtidshistorie
export const HISTORIE_CHAPTERS_VG3: TextbookChapter[] = [
  ...HISTORIE_CHAPTERS_DEL3_VG3,  // Kap 11-12
  ...HISTORIE_CHAPTERS_DEL4,  // Kap 13-17
];
