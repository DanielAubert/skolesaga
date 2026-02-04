/**
 * Norsk VG2 - Del 5: Kapittel 5.1-5.7
 * Retorikk og fagskriving
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_VG2_BJORNSON_17MAI_TALE,
  TEKST_VG2_WERGELAND_TALE_JODANE,
} from './textbook-content-norsk-vg2-tekster';

// ============================================================================
// KAPITTEL 5.1: Retorikkens grunnbegreper
// ============================================================================

export const CHAPTER_NORSK_VG2_5_1: TextbookChapter = {
  id: 'norsk-vg2-5-1',
  courseId: 'norsk-vg2',
  chapterNumber: '5.1',
  title: 'Retorikkens grunnbegreper',
  description: 'Lær om retorikkens historie og grunnleggende begreper.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'skrive fagartikler som drøfter tekster i kontekst',
  ],
  content: [
    {
      id: 'norsk-vg2-5-1-intro',
      type: 'text',
      content: `## Retorikk - overtalelsens kunst

Retorikk er kunsten å tale og skrive overbevisende. Faget ble grunnlagt i antikkens Hellas og har siden vært sentralt i utdanning og offentlig liv. I dag er retorisk analyse et viktig verktøy for å forstå hvordan tekster og taler påvirker oss.

**Retorikkens historie**

Retorikken oppsto i Hellas på 400-tallet f.Kr. I demokratiet trengte borgerne å kunne tale i folkeforsamlingen og i retten. Sofistene underviste i talekunst, og filosofer som Aristoteles systematiserte faget.

I Romerriket videreførte Cicero og Quintilian tradisjonen. Retorikk var en del av den klassiske utdannelsen frem til moderne tid.

**Retorikkens tre taletyper (genera)**

Aristoteles delte talene inn i tre typer etter formål:

*Juridisk tale (genus judiciale):* Taler i retten - anklage eller forsvar. Handler om fortiden.

*Politisk tale (genus deliberativum):* Taler i folkeforsamlingen - rådgiving om fremtiden.

*Festtale (genus demonstrativum):* Taler ved seremonier - ros eller klander. Handler om nåtiden.

**De fem arbeidsfasene**

Arbeidet med en tale ble delt i fem faser:
1. Inventio - finne argumenter
2. Dispositio - ordne stoffet
3. Elocutio - formulere språklig
4. Memoria - huske talen
5. Actio - fremføre talen`,
    },
    {
      id: 'norsk-vg2-5-1-def-1',
      type: 'definition',
      title: 'Retoriske grunnbegreper',
      content: `**Retorikk:** Kunsten å tale og skrive overbevisende.

**Retor:** Den som taler eller skriver (avsender).

**Retorisk situasjon:** Konteksten for kommunikasjonen - hvem, hva, hvorfor, når, hvor.

**Kairos:** Det rette øyeblikket - timing og tilpasning til situasjonen.

**Aptum:** Det passende - tilpasning til publikum og situasjon.

**De fem arbeidsfasene:**
1. Inventio - finne stoff
2. Dispositio - ordne stoffet
3. Elocutio - formulere
4. Memoria - huske
5. Actio - fremføre

**De tre talesjangrer:**
- Juridisk tale (rett)
- Politisk tale (folkeforsamling)
- Festtale (seremonier)`,
    },
    {
      id: 'norsk-vg2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar retorikkens grunnbegreper.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er retorikk, og hvor kommer faget fra?',
            solution: 'Retorikk er kunsten å tale og skrive overbevisende. Faget oppsto i antikkens Hellas.',
          },
          {
            label: 'b',
            task: 'Forklar de fem arbeidsfasene.',
            solution: 'Inventio (finne stoff), dispositio (ordne), elocutio (formulere), memoria (huske), actio (fremføre).',
          },
        ],
        solution: 'Retorikken gir oss verktøy til å analysere og lage overbevisende tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av Aristoteles sine tre taletyper handlet om fremtiden?',
        options: [
          'Genus judiciale (juridisk tale)',
          'Genus deliberativum (politisk tale)',
          'Genus demonstrativum (festtale)',
          'Genus rhetoricum (retorisk tale)',
        ],
        answer: 1,
        solution: 'Genus deliberativum, den politiske talen, handlet om fremtiden. Den ble holdt i folkeforsamlingen og dreide seg om å gi råd om hva som burde gjøres.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr begrepet "kairos" i retorikken?',
        options: [
          'Avsenderens troverdighet',
          'Appell til følelser',
          'Det rette øyeblikket - timing og situasjonstilpasning',
          'Ordning av stoffet i en tale',
        ],
        answer: 2,
        solution: 'Kairos betyr "det rette øyeblikket". Det handler om å tilpasse budskapet til riktig tid og situasjon. En god retor vet når noe bør sies - og når det bør ties.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar kort hva hver av de tre taletypene innebærer, og gi et moderne eksempel på hver.',
        hints: ['Tenk på taler du har hørt i rettssaler, politiske debatter og bryllup.'],
        solution: 'Juridisk tale handler om fortiden (anklage/forsvar) - f.eks. en forsvarstale i retten. Politisk tale handler om fremtiden (rådgiving) - f.eks. et partiprogram eller debattinnlegg. Festtale handler om nåtiden (ros/klander) - f.eks. en tale i et bryllup eller en 17. mai-tale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en oversikt over de fem arbeidsfasene og forklar med egne ord hva som skjer i hver fase.',
        solution: '1. Inventio: Man finner frem til argumenter og stoff man vil bruke. 2. Dispositio: Man organiserer stoffet i en logisk rekkefølge. 3. Elocutio: Man formulerer stoffet språklig - velger ord, bilder og virkemidler. 4. Memoria: Man lærer seg innholdet utenat (viktigst for muntlige taler). 5. Actio: Man fremfører talen med stemme, kroppsspråk og engasjement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar begrepet "aptum" og gi et eksempel på en situasjon der en taler bryter med aptum.',
        hints: ['Aptum handler om det passende - å tilpasse språk, stil og innhold til situasjonen.'],
        solution: 'Aptum betyr "det passende" og handler om at kommunikasjonen må tilpasses publikum, situasjon og emne. Et brudd på aptum kunne være å holde en svært uformell og humoristisk tale i en begravelse, eller å bruke akademisk fagspråk i en tale til barnehagebarn. God retorisk sans innebærer å forstå hva som passer i ulike situasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvorfor er retorikk fortsatt relevant i dag? Gi tre eksempler på situasjoner der retorisk kompetanse er viktig.',
        hints: ['Tenk på politikk, medier, reklame og dagliglivet.'],
        solution: 'Retorikk er relevant fordi vi daglig utsettes for overtalelse. Eksempler: (1) Politiske debatter - politikere bruker retoriske teknikker for å vinne velgere. (2) Reklame - markedsførere bruker retoriske virkemidler for å selge produkter. (3) Jobbintervjuer - du må presentere deg selv overbevisende. Retorisk kompetanse gjør oss til bedre kommunikatorer og mer kritiske mottakere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sofistene var omreisende lærere i retorikk i antikkens Hellas. Platon var svært kritisk til dem. Forklar kort hva Platons kritikk gikk ut på, og drøft om kritikken er relevant i dag.',
        hints: [
          'Platon mente sofistene var mer opptatt av å vinne debatter enn av sannhet.',
          'Tenk på moderne eksempler på retorikk som kan villede.',
        ],
        solution: 'Platon mente at sofistene misbrukte retorikken ved å fokusere på overtalelse fremfor sannhet. De lærte elevene å argumentere overbevisende for enhver sak, uavhengig av om påstanden var sann eller rettferdig. Kritikken er relevant i dag: vi ser politikere som bruker retorikk for å villede, reklame som overdriver, og falske nyheter som spres gjennom overbevisende fremstillinger. Samtidig kan man argumentere for at retorisk kompetanse er nøytralt - det er verktøyet, ikke brukeren, som avgjør om det er godt eller dårlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en aktuell offentlig debatt (f.eks. klima, skjermtid, skolemat). Forklar hvordan de tre taletypene til Aristoteles kan brukes til å forstå ulike tekster i debatten.',
        hints: [
          'En avisartikkel om hva som har skjedd = juridisk tale (fortid).',
          'Et politisk innlegg om hva vi bør gjøre = politisk tale (fremtid).',
          'En hyllest av noen som har gjort en innsats = festtale (nåtid).',
        ],
        solution: 'Eksempel med klimadebatten: Juridisk tale (fortid): En rapport som vurderer om oljeindustrien er ansvarlig for klimaendringer. Politisk tale (fremtid): Et debattinnlegg som argumenterer for at Norge må kutte utslipp raskere. Festtale (nåtid): En tale som hyller klimaaktivister for innsatsen. Aristoteles sine kategorier hjelper oss å forstå at ulike tekster har ulike formål og perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft forholdet mellom retorikk og demokrati. Hvorfor oppsto retorikken i et demokrati, og hvilken rolle spiller retorikken i dagens demokrati?',
        hints: [
          'I et demokrati avgjøres saker gjennom debatt, ikke makt.',
          'Tenk på valgkamper, stortingsdebatter og medieoffentligheten.',
        ],
        solution: 'Retorikken oppsto i Atens demokrati fordi borgerne trengte å overbevise hverandre for å få gjennomslag. Beslutninger ble fattet gjennom debatt i folkeforsamlingen, ikke av en eneveldige hersker. I dagens demokrati er retorikken like sentral: politikere må overbevise velgere, mediene former den offentlige samtalen, og borgerne må kunne vurdere argumenter kritisk. Samtidig er det en fare for at retorisk dyktighet kan erstatte substans - at den som taler best, vinner, uavhengig av sak. Et velfungerende demokrati trenger borgere med retorisk kompetanse, både som avsendere og mottakere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du skal holde en tale om et tema du brenner for. Planlegg talen ved å bruke de fem arbeidsfasene. Skriv ned hva du ville gjort i hver fase.',
        hints: [
          'Velg først tema og formål.',
          'Gå gjennom alle fem fasene systematisk.',
        ],
        solution: 'Eksempel med tema "mer fysisk aktivitet i skolen": Inventio: Samle argumenter - forskning om helsegevinst, læringseffekt, konsentrasjon, eksempler fra andre land. Dispositio: Ordne stoffet - starte med personlig opplevelse, deretter forskning, så forslag, til slutt appell. Elocutio: Velge engasjerende språk - retoriske spørsmål, trikolon, konkrete eksempler. Memoria: Øve med stikkord, lære åpning og avslutning. Actio: Øyekontakt, variasjon i stemme, engasjert kroppsspråk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Retoriske appellformer - etos, logos, patos
// ============================================================================

export const CHAPTER_NORSK_VG2_5_2: TextbookChapter = {
  id: 'norsk-vg2-5-2',
  courseId: 'norsk-vg2',
  chapterNumber: '5.2',
  title: 'Retoriske appellformer - etos, logos, patos',
  description: 'Lær om de tre appellformene og hvordan de brukes for å overbevise.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-5-2-intro',
      type: 'text',
      content: `## De tre appellformene

Aristoteles identifiserte tre måter å overbevise på: etos (troverdighet), logos (fornuft) og patos (følelser). De fleste overbevisende tekster bruker en kombinasjon av alle tre.

**Etos - avsenderens troverdighet**

Etos handler om avsenderens karakter og troverdighet. Vi lar oss lettere overbevise av noen vi stoler på.

Etos bygges gjennom:
- Ekspertise og kunnskap
- Ærlighet og integritet
- Velvilje mot publikum

**Logos - fornuftsargumenter**

Logos handler om selve argumentasjonen. Overbevisning gjennom logikk, fakta og resonnementer.

Logos-argumenter:
- Fakta og statistikk
- Eksempler og bevis
- Logiske slutninger

**Patos - følelsesappell**

Patos handler om å vekke følelser hos publikum. Følelser kan motivere til handling.

Patos-virkemidler:
- Sterke bilder og eksempler
- Personlige fortellinger
- Appell til verdier`,
    },
    {
      id: 'norsk-vg2-5-2-def-1',
      type: 'definition',
      title: 'Appellformene',
      content: `**Etos:** Appell til avsenderens troverdighet og karakter.
- Ekspertise
- Ærlighet
- Velvilje

**Logos:** Appell til fornuft og logikk.
- Fakta
- Statistikk
- Logiske slutninger

**Patos:** Appell til følelser.
- Sterke bilder
- Personlige historier
- Verdier`,
    },
    {
      id: 'norsk-vg2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser bruken av appellformene.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi et eksempel på bruk av etos i en tekst.',
            solution: 'Når en lege uttaler seg om helse, eller når noen refererer til sin erfaring og utdanning.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på bruk av patos.',
            solution: 'Personlige historier om lidelse, bilder av barn, appell til nasjonale verdier.',
          },
        ],
        solution: 'Effektiv overbevisning bruker gjerne alle tre appellformene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En lege skriver i Aftenposten: "Som forsker med 20 års erfaring innen lungemedisin, kan jeg slå fast at luftforurensning er vår tids største helsetrussel." Hvilken appellform er mest fremtredende?',
        options: [
          'Logos - appell til logikk og fakta',
          'Patos - appell til følelser',
          'Etos - appell til avsenderens troverdighet',
          'Kairos - appell til timing',
        ],
        answer: 2,
        solution: 'Her bygger legen etos ved å vise til sin tittel (lege), sin rolle (forsker) og sin erfaring (20 år innen lungemedisin). Alle disse elementene styrker avsenderens troverdighet og gjør at vi lettere tror på påstanden.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse utsagnene er det beste eksempelet på logos?',
        options: [
          '"Tenk på barna som må vokse opp i en ødelagt verden!"',
          '"Ifølge SSB har levealderen økt med 15 år siden 1900."',
          '"Som sykepleier med lang erfaring mener jeg at..."',
          '"Vi kan ikke sitte stille og se på at dette skjer!"',
        ],
        answer: 1,
        solution: 'Logos er appell til fornuft gjennom fakta, statistikk og logikk. Henvisningen til SSB (Statistisk sentralbyrå) med et konkret tall (15 år) er et tydelig logos-argument. De andre eksemplene bruker patos (følelsesappell) og etos (troverdighet).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag tre setninger om skolemat: en som appellerer til etos, en til logos og en til patos.',
        hints: ['Etos: Bruk en troverdig avsender. Logos: Bruk fakta. Patos: Bruk følelser.'],
        solution: 'Etos: "Som ernæringsfysiolog anbefaler jeg varm skolemat for alle." Logos: "Forskning viser at elever som spiser et næringsrikt måltid, konsentrerer seg 30 % bedre." Patos: "Tenk på den eleven som kommer sulten på skolen fordi foreldrene ikke har råd til å smøre matpakke."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar med egne ord forskjellen mellom innledende etos og avledet etos.',
        hints: ['Tenk på hva vi vet om avsenderen fra før, og hva avsenderen viser i selve teksten.'],
        solution: 'Innledende etos er den troverdigheten avsenderen har før kommunikasjonen begynner, basert på yrke, status eller rykte (f.eks. en professor). Avledet etos er den troverdigheten avsenderen bygger opp gjennom selve teksten eller talen, ved å vise kunnskap, velvilje og god argumentasjon. En ukjent person kan bygge sterk avledet etos gjennom en god tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn en reklame (på TV, nett eller i avis). Analyser hvilke appellformer den bruker. Hvilken appellform dominerer?',
        hints: [
          'Se etter kjendiser (etos), tall og fakta (logos), følelsesladde bilder (patos).',
          'Tenk på hva reklamen vil at du skal føle og gjøre.',
        ],
        solution: 'Svar bør identifisere konkrete eksempler på appellformene i reklamen. Ofte dominerer patos i reklame (følelser som lykke, trygghet, begjær), men mange reklamer bruker også etos (kjendiser, eksperter) og logos (produktfakta, priser, tester). Analysen bør forklare hvorfor den dominerende appellformen er effektiv for det aktuelle produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor de fleste overbevisende tekster bruker en kombinasjon av etos, logos og patos. Hva kan skje hvis en tekst bare bruker én appellform?',
        solution: 'En kombinasjon er effektiv fordi mennesker overbevises av ulike ting: Noen lytter til fakta (logos), andre til følelser (patos), og alle påvirkes av troverdighet (etos). Bare logos kan virke kaldt og upersonlig. Bare patos kan virke manipulerende og usaklig. Bare etos kan virke autoritært. En god balanse skaper en tekst som både informerer, engasjerer og fremstår troverdig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Patos kan brukes til både godt og dårlig. Gi et eksempel på positiv bruk av patos og et eksempel på manipulerende bruk av patos.',
        hints: ['Tenk på forskjellen mellom å engasjere og å manipulere.'],
        solution: 'Positiv patos: En veldedighetsorganisasjon som forteller en personlig historie for å skape empati og motivere til hjelp - her tjener følelsesappellen et godt formål. Manipulerende patos: En politiker som bruker frykt og hat mot en minoritetsgruppe for å vinne stemmer - her brukes følelser for å skjule mangel på gode argumenter og for å sette grupper opp mot hverandre. Forskjellen ligger i om patos brukes for å opplyse og engasjere, eller for å villede og manipulere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser en selvvalgt debattartikkel fra en norsk avis. Identifiser bruken av etos, logos og patos. Vurder om balansen mellom appellformene er effektiv.',
        hints: [
          'Les artikkelen grundig og marker avsnitt som bruker ulike appellformer.',
          'Tenk på hva som er formålet med teksten og hvem som er målgruppen.',
        ],
        solution: 'En god analyse bør: (1) Identifisere konkrete eksempler på hver appellform med sitat. (2) Vurdere om appellformene støtter hverandre. (3) Drøfte om balansen er effektiv for formålet. (4) Peke på eventuelle svakheter, f.eks. overdreven patos som skjuler manglende logos, eller svak etos som undergraver gode argumenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv to korte innlegg (ca. 100 ord hver) om samme sak, men med ulik appellform som dominerer. Det ene innlegget skal være logostungt, det andre patostungt. Forklar deretter forskjellen i virkning.',
        hints: [
          'Velg en sak du har mening om - f.eks. lekser, dyrevelferd eller kollektivtransport.',
          'Overdrivelsen gjør forskjellen tydeligere.',
        ],
        solution: 'Logosdominert innlegg bør preges av fakta, statistikk og logisk argumentasjon, med nøytralt språk. Patosdominert innlegg bør bruke sterke bilder, personlige historier og følelsesladde ord. Sammenligningen bør vise at logos appellerer til fornuften, mens patos engasjerer følelsesmessig. Begge har styrker og svakheter: logos kan virke tørt, patos kan virke usaklig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter følgende påstand: "I sosiale medier er etos viktigere enn logos." Bruk eksempler fra virkeligheten.',
        hints: [
          'Tenk på influencere, politikere og eksperter i sosiale medier.',
          'Hvem lytter vi til - og hvorfor?',
        ],
        solution: 'For: Sosiale medier belønner personlighet og karisma. Influencere med mange følgere har sterk etos uansett fagkunnskap. Vi deler innhold fra folk vi liker, ikke nødvendigvis fakta. Mot: Faktasjekking har blitt mer vanlig. Seriøse aktører bruker kilder og data. Logos kan gå viralt (f.eks. tydelige forklaringsvideoer). Konklusjon: Etos har trolig mer makt i sosiale medier enn i akademiske sammenhenger, men logos er fortsatt viktig for langsiktig troverdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3: Analyse av sakprosatekster
// ============================================================================

export const CHAPTER_NORSK_VG2_5_3: TextbookChapter = {
  id: 'norsk-vg2-5-3',
  courseId: 'norsk-vg2',
  chapterNumber: '5.3',
  title: 'Analyse av sakprosatekster',
  description: 'Lær systematisk analyse av sakprosa med retoriske og sjangermessige begreper.',
  estimatedMinutes: 65,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'analysere og tolke tekster med bruk av fagbegreper',
    'skrive fagartikler som drøfter tekster i kontekst',
  ],
  content: [
    {
      id: 'norsk-vg2-5-3-intro',
      type: 'text',
      content: `## Sakprosaanalyse - et verktøy for kritisk lesing

Å analysere sakprosa er å undersøke hvordan tekster er bygget opp og hvordan de forsøker å påvirke oss. I en tid med informasjonsoverflod er dette en nøkkelkompetanse for alle borgere. God sakprosaanalyse kombinerer retorisk, språklig og kontekstuell forståelse.

**Hva er sakprosaanalyse?**

Sakprosaanalyse handler om å undersøke:

1. *Hva teksten sier* - innholdet og påstandene
2. *Hvordan den sier det* - virkemidler og stil
3. *Hvorfor den sier det slik* - formål og kontekst
4. *Hvilken virkning det har* - hvordan leseren påvirkes

**Den retoriske situasjonen**

Enhver sakprosatekst oppstår i en retorisk situasjon. For å forstå teksten må vi kartlegge:

*Avsender (retor):*
- Hvem har skrevet teksten?
- Hvilken bakgrunn og interesser har de?
- Hvilken rolle inntar de i teksten?

*Mottaker (publikum):*
- Hvem er teksten rettet mot?
- Hva vet/mener mottakeren fra før?
- Hvilke behov og forventninger har de?

*Saken (emnet):*
- Hva handler teksten om?
- Hvordan avgrenses emnet?
- Hvilke aspekter vektlegges?

*Situasjonen (kairos):*
- Når og hvor ble teksten skrevet?
- Hva var anledningen?
- Hvilken debatt er den del av?

*Formålet:*
- Hva vil avsenderen oppnå?
- Informere, overbevise, underholde, oppfordre?

**Analysens hovedelementer**

En fullstendig sakprosaanalyse bør inneholde:

*1. Innholdsanalyse:*
- Hva er hovedbudskapet (tesen)?
- Hvilke argumenter brukes?
- Hvordan er stoffet strukturert?

*2. Retorisk analyse:*
- Hvordan brukes etos, logos, patos?
- Hvilke retoriske virkemidler finnes?
- Hvordan bygges argumentasjonen opp?

*3. Språklig analyse:*
- Hvilken stil har teksten (formell/uformell)?
- Hvordan er ordvalget?
- Hvilke bilder og metaforer brukes?

*4. Kontekstuell analyse:*
- Hvordan henger teksten sammen med sin samtid?
- Hvilken sjanger tilhører den?
- Hvordan forholder den seg til andre tekster?

*5. Vurdering:*
- Er argumentasjonen overbevisende?
- Hvilke styrker og svakheter har teksten?
- Er teksten relevant i dag?

**Systematisk fremgangsmåte**

Slik kan du gå frem når du analyserer sakprosa:

1. *Første lesing:* Les teksten raskt for å få et helhetsinntrykk
2. *Kartlegging:* Finn avsender, mottaker, formål, kontekst
3. *Strukturanalyse:* Hvordan er teksten bygget opp?
4. *Detaljanalyse:* Gå gjennom teksten avsnitt for avsnitt
5. *Retorisk analyse:* Identifiser virkemidler og appellformer
6. *Språkanalyse:* Se på ordvalg, stil, bilder
7. *Syntese:* Samle funnene til en helhetlig tolkning
8. *Vurdering:* Hva fungerer, hva fungerer ikke?

**Fallgruver**

Unngå disse feilene i sakprosaanalyse:

- *Parafrase:* Ikke bare gjenfortell innholdet - analyser det
- *Begrepsoppramsing:* Ikke list opp virkemidler - forklar hvordan de virker
- *Ensidighet:* Se på hele teksten, ikke bare enkeltdeler
- *Synsing:* Begrunn påstandene dine med teksteksempler
- *Ureflektert kritikk:* Vær rettferdig, ikke bare negativ`,
    },
    {
      id: 'norsk-vg2-5-3-def-1',
      type: 'definition',
      title: 'Sakprosaanalysens begreper',
      content: `**Den retoriske situasjonen:**
- *Avsender:* Den som skriver/taler
- *Mottaker:* Den teksten er rettet mot
- *Saken:* Emnet for teksten
- *Kairos:* Tid, sted og anledning
- *Formål:* Hva avsenderen vil oppnå

**Argumentasjonstyper:**
- *Faktaargument:* Basert på etterprøvbare fakta
- *Erfaringsargument:* Basert på egne eller andres erfaring
- *Etisk argument:* Basert på verdier og moral
- *Autoritetsargument:* Basert på eksperter eller respekterte kilder

**Teksttyper i sakprosa:**
- *Informerende:* Gir kunnskap
- *Argumenterende:* Vil overbevise
- *Utredende:* Drøfter fra flere sider
- *Appellerende:* Oppfordrer til handling`,
    },
    {
      id: 'norsk-vg2-5-3-def-2',
      type: 'definition',
      title: 'Sakprosasjangre',
      content: `**Kronikk:** Lengre, argumenterende tekst i avis. Personlig vinkling på samfunnsspørsmål.

**Leder:** Avisens offisielle standpunkt til en sak. Unsigned, representerer redaksjonen.

**Debattinnlegg:** Kortere innlegg i offentlig debatt. Klar tese og argumentasjon.

**Essay:** Personlig, resonerende tekst. Utforsker mer enn den konkluderer.

**Artikkel:** Informerende, saklig fremstilling av et emne.

**Tale:** Muntlig sjanger, tilpasset situasjon og publikum.

**Kåseri:** Lett, underholdende tekst med humoristiske innslag.

**Fagartikkel:** Akademisk tekst med kilder og strukturert argumentasjon.`,
    },
    {
      id: 'norsk-vg2-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av en kronikk',
      problem: `Analyser denne fiktive kronikken:

**"Mobilen stjeler barndommen"**
av Kari Lærer, rektor

Hver dag ser jeg elever som stirrer ned i skjermene sine i stedet for å leke sammen. Som pedagog gjennom 30 år er jeg dypt bekymret.

Forskning fra NTNU viser at barn som bruker mer enn to timer daglig på skjerm, har dårligere sosiale ferdigheter. Vi vet også at søvnkvaliteten synker.

Men det verste er det vi ikke kan måle: Øyeblikkene som går tapt. Samtalene som aldri skjer. Vennskapene som ikke knyttes.

Det er på tide at foreldre tar ansvar. Legg bort mobilen under middagen. Sett grenser. Barndommen varer så kort.

Analyser tekstens retoriske situasjon og virkemidler.`,
      solution: `**Analyse av "Mobilen stjeler barndommen":**

**Retorisk situasjon:**

*Avsender:* Kari Lærer, rektor
- Etos: Lang erfaring (30 år), autoritetsposisjon (rektor), fagperson (pedagog)

*Mottaker:* Foreldre til skolebarn
- Antas å være bekymret for barna sine
- Har makt til å sette grenser

*Saken:* Barns skjermbruk
- Avgrenset til mobilbruk i fritiden
- Fokus på negative konsekvenser

*Kairos:* Aktuell debatt om barn og skjerm
- Skrevet i en tid med økende bekymring

*Formål:* Få foreldre til å begrense barns skjermbruk
- Argumenterende og appellerende

**Argumentasjon:**

*Logos:*
- Forskning fra NTNU (autoritetsargument + faktaargument)
- Statistikk om timer og sosiale ferdigheter
- Logisk sammenheng: skjerm -> dårlig søvn -> dårligere helse

*Etos:*
- "Som pedagog gjennom 30 år" - erfaring
- "Hver dag ser jeg" - førstehånds observasjon
- Rektor-tittelen - autoritet

*Patos:*
- "stjeler barndommen" - dramatisk, følelsesladet
- "det vi ikke kan måle" - appellerer til det usynlige, verdifulle
- "Barndommen varer så kort" - sentimentalt, minner om forgjengelighet

**Virkemidler:**

*Metafor:* "stjeler" - mobilen som tyv
*Kontrast:* Skjermer vs. lek, alene vs. sammen
*Trikolon:* "Øyeblikkene... Samtalene... Vennskapene"
*Direkte oppfordring:* "Legg bort mobilen", "Sett grenser"

**Struktur:**

1. Personlig observasjon (etos)
2. Forskning (logos)
3. Følelsesmessig appell (patos)
4. Konkret oppfordring (handling)

**Vurdering:**

*Styrker:*
- Tydelig budskap
- Kombinerer appellformer effektivt
- Konkrete råd

*Svakheter:*
- Ensidig fremstilling (ingen positive sider ved teknologi)
- "Vi vet også" uten kilde
- Generalisering ("hver dag ser jeg")`,
    },
    {
      id: 'norsk-vg2-5-3-tip-1',
      type: 'tip',
      title: 'Tips for sakprosaanalyse',
      content: `**Sjekkliste for analyse:**

**1. Før du begynner:**
- Les teksten flere ganger
- Noter førsteinntrykket
- Finn ut hvem som har skrevet og når

**2. Retorisk situasjon:**
- Hvem, til hvem, om hva, hvorfor, når?

**3. Innhold:**
- Hva er tesen/hovedbudskapet?
- Hvilke argumenter brukes?
- Er det motargumenter?

**4. Virkemidler:**
- Etos, logos, patos - finn eksempler!
- Språklige virkemidler?
- Struktur og oppbygning?

**5. Vurdering:**
- Er argumentasjonen god?
- Hva mangler?
- Fungerer teksten for formålet?

**Formuleringer du kan bruke:**
- "Forfatteren bygger etos ved å..."
- "Her appellerer teksten til patos gjennom..."
- "Logosappellen kommer til uttrykk i..."
- "Metaforen 'X' er effektiv fordi..."
- "Strukturen støtter argumentasjonen ved..."`,
    },
    {
      id: 'norsk-vg2-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en kronikk eller debattinnlegg.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en kronikk eller debattinnlegg i en avis. Beskriv den retoriske situasjonen.',
            solution: 'Svar bør inneholde: avsender (hvem, bakgrunn), mottaker (hvem teksten er rettet mot), saken (hva det handler om), kairos (når/hvor), formål (hva avsenderen vil oppnå).',
          },
          {
            label: 'b',
            task: 'Identifiser bruken av etos, logos og patos i teksten.',
            solution: 'Svar bør gi konkrete eksempler fra teksten på hver appellform og forklare hvordan de virker.',
          },
          {
            label: 'c',
            task: 'Vurder: Er argumentasjonen overbevisende? Begrunn.',
            solution: 'Svar bør vurdere både styrker og svakheter, med referanse til konkrete eksempler fra teksten.',
          },
        ],
        solution: 'God sakprosaanalyse krever systematisk gjennomgang og begrunnet vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign to tekster om samme emne.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn to tekster som argumenterer for ulike syn på samme sak. Beskriv hvordan de bruker ulike virkemidler.',
            solution: 'Svar bør vise forskjeller i appellformer, språk, struktur og argumentasjon mellom de to tekstene.',
          },
          {
            label: 'b',
            task: 'Hvilken tekst er mest overbevisende for deg? Begrunn med analyse.',
            solution: 'Svar bør forklare hva som gjør teksten overbevisende, med referanse til retoriske begreper.',
          },
        ],
        solution: 'Å sammenligne tekster gir god trening i kritisk analyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det FØRSTE du bør gjøre når du skal analysere en sakprosatekst?',
        options: [
          'Identifisere alle retoriske virkemidler',
          'Lese teksten for å få et helhetsinntrykk',
          'Finne tekstens tese og skrive den ned',
          'Slå opp vanskelige ord i ordboken',
        ],
        answer: 1,
        solution: 'Det første steget er å lese teksten for å få et helhetsinntrykk. Før du kan analysere detaljer som virkemidler og tese, trenger du å forstå hva teksten handler om i store trekk. Deretter kan du gå over til mer systematisk analyse.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner en kronikk til forskjell fra et debattinnlegg?',
        options: [
          'En kronikk er alltid skrevet av en journalist',
          'En kronikk er lengre og har mer personlig vinkling på et samfunnsspørsmål',
          'En kronikk bruker aldri kilder eller referanser',
          'En kronikk er avisens offisielle standpunkt',
        ],
        answer: 1,
        solution: 'En kronikk er en lengre, argumenterende tekst i en avis, med personlig vinkling på et samfunnsspørsmål. Et debattinnlegg er kortere og mer direkte i argumentasjonen. En leder er avisens offisielle standpunkt.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar med egne ord hva som menes med "den retoriske situasjonen" og hvorfor den er viktig for å forstå en tekst.',
        solution: 'Den retoriske situasjonen er konteksten teksten oppsto i: hvem som skrev den (avsender), hvem den er rettet mot (mottaker), hva den handler om (saken), når og hvorfor den ble skrevet (kairos), og hva avsenderen vil oppnå (formål). Den er viktig fordi en tekst ikke kan forstås isolert - den er alltid et svar på en situasjon og et forsøk på å påvirke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar forskjellen mellom faktaargument, erfaringsargument, etisk argument og autoritetsargument. Gi et eksempel på hvert.',
        hints: ['Bruk en aktuell debatt som utgangspunkt for eksemplene.'],
        solution: 'Faktaargument bygger på etterprøvbare fakta: "Temperaturen har steget 1,1 grader." Erfaringsargument bygger på erfaring: "Som lærer ser jeg at elevene trives bedre med kortere dager." Etisk argument bygger på verdier: "Det er urettferdig at noen barn ikke får skolemat." Autoritetsargument bygger på eksperter: "FNs klimapanel sier at vi må kutte utslipp."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser kronikken "Mobilen stjeler barndommen" fra eksempelet i kapittelet. Pek på to styrker og to svakheter ved teksten.',
        hints: [
          'Se på bruk av appellformer og argumentasjon.',
          'Tenk på hva som mangler eller er ensidig.',
        ],
        solution: 'Styrker: (1) Effektiv kombinasjon av etos, logos og patos som bygger opp mot en klar oppfordring. (2) Tydelig struktur som gjør teksten lett å følge. Svakheter: (1) Ensidig fremstilling - ingen positive sider ved teknologi nevnes, og ingen motargumenter drøftes. (2) Enkelte påstander mangler kilde ("Vi vet også at søvnkvaliteten synker") og generaliseringen "hver dag" er udokumentert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'En vanlig feil i sakprosaanalyser er å bare gjenfortelle innholdet i stedet for å analysere. Forklar forskjellen mellom parafrase og analyse, og gi et eksempel på hvert.',
        solution: 'Parafrase er gjenfortelling: "Forfatteren skriver at mobilen stjeler barndommen og at foreldre bør sette grenser." Analyse undersøker hvordan og hvorfor: "Ved å bruke metaforen \'stjeler\' fremstiller forfatteren mobilen som en trussel, noe som vekker beskyttelsesinstinktet hos foreldre (patos). Tittelen er bevisst dramatisk for å fange oppmerksomhet." Forskjellen er at analyse forklarer virkemidler og deres effekt, mens parafrase bare gjengir innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en av sakprosasjangrene (kronikk, leder, debattinnlegg, essay, kåseri eller fagartikkel). Forklar sjangerens kjennetegn og gi et eksempel på en situasjon der sjangeren er passende.',
        solution: 'Eksempel med essay: Essayet er en personlig, resonerende tekst som utforsker et tema fra flere sider uten nødvendigvis å konkludere. Det er subjektivt, assosierende og reflekterende. Essayet passer når forfatteren vil utforske et tema i dybden, dele personlige refleksjoner og invitere leseren til å tenke med. Eksempel: Et essay om "hva er vennskap?" der forfatteren deler egne erfaringer og trekker inn filosofiske perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort sakprosaanalyse (ca. 400 ord) av en selvvalgt tekst. Bruk den systematiske fremgangsmåten fra kapittelet.',
        hints: [
          'Velg en kronikk, tale eller debattinnlegg.',
          'Bruk sjekklisten fra tipsblokken som støtte.',
          'Husk å begrunne alle påstander med teksteksempler.',
        ],
        solution: 'Analysen bør inneholde: (1) Kort presentasjon av teksten og konteksten. (2) Retorisk situasjon (avsender, mottaker, formål, kairos). (3) Innholdsanalyse med hovedbudskap og argumentasjon. (4) Virkemiddelanalyse med konkrete eksempler. (5) Begrunnet vurdering av tekstens styrker og svakheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: "I vår tid er det viktigere å kunne analysere sakprosa enn skjønnlitteratur." Bruk argumenter for og mot.',
        hints: [
          'Tenk på mediesamfunnet, informasjonsflyt og demokratisk deltakelse.',
          'Hva gir skjønnlitteraturen som sakprosa ikke gjør?',
        ],
        solution: 'For: Vi omgis av sakprosa i medier, politikk og reklame. Kritisk lesing av sakprosa er nødvendig for å navigere i informasjonssamfunnet og delta i demokratiet. Mot: Skjønnlitteratur utvikler empati, kritisk tenkning og forståelse for menneskelivet. De to ferdighetene utfyller hverandre. Konklusjon bør nyansere og vise at begge kompetansene er viktige, men at de tjener ulike formål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4: Retoriske virkemidler i praksis
// ============================================================================

export const CHAPTER_NORSK_VG2_5_4: TextbookChapter = {
  id: 'norsk-vg2-5-4',
  courseId: 'norsk-vg2',
  chapterNumber: '5.4',
  title: 'Retoriske virkemidler i praksis',
  description: 'Lær å identifisere og bruke retoriske virkemidler i egne og andres tekster.',
  estimatedMinutes: 60,
  competenceGoals: [
    'reflektere over sakprosateksters formål og retoriske situasjon',
    'skrive tekster som kombinerer informasjon, drøfting og argumentasjon',
  ],
  content: [
    {
      id: 'norsk-vg2-5-4-intro',
      type: 'text',
      content: `## Retoriske virkemidler - verktøykassen for overbevisning

Retoriske virkemidler er teknikker som gjør kommunikasjon mer effektiv. Å kjenne dem gjør deg både til en bedre skribent og en mer kritisk leser. I dette kapittelet går vi gjennom de viktigste virkemidlene med eksempler fra ulike teksttyper.

**Hvorfor bruke retoriske virkemidler?**

- Gjør budskapet tydeligere
- Engasjerer leseren/lytteren
- Gjør argumentene mer minneverdige
- Skaper følelsesmessig resonans
- Styrker forfatterens troverdighet

**Kategorier av virkemidler**

Vi kan dele retoriske virkemidler i hovedkategorier:

1. *Argumentasjonsmønstre* - hvordan vi bygger opp resonnementer
2. *Stilistiske figurer* - språklige utforminger
3. *Troper* - overført betydning (metaforer etc.)
4. *Strukturelle virkemidler* - oppbygning og rekkefølge

---

## De viktigste virkemidlene

**Metafor**

Sammenligning uten "som" - noe er noe annet.

*Eksempel:* "Internett er en jungel av informasjon."
*Effekt:* Gjør det abstrakte konkret. Aktiverer assosiasjoner.

**Simile**

Sammenligning med "som" eller "liksom".

*Eksempel:* "Hun talte som en løve."
*Effekt:* Tydeliggjør egenskaper gjennom sammenligning.

**Besjeling (personifikasjon)**

Døde ting eller abstrakte begrep får menneskelige egenskaper.

*Eksempel:* "Naturen gråter over klimaødeleggelsene."
*Effekt:* Skaper emosjonell tilknytning.

**Kontrast (antitese)**

Sette motsetninger opp mot hverandre.

*Eksempel:* "Én liten feil kan gi stor konsekvens."
*Effekt:* Skaper spenning og tydeliggjør poenger.

**Trikolon**

Tre elementer i rekke.

*Eksempel:* "Frihet, likhet, brorskap" / "Vi kom, vi så, vi vant."
*Effekt:* Rytmisk, minneverdig, har en følelse av helhet.

**Anafor**

Gjentakelse av ord/frase i begynnelsen av setninger.

*Eksempel:* "Vi må handle. Vi må handle nå. Vi må handle sammen."
*Effekt:* Bygger intensitet, hamrer inn budskapet.

**Retorisk spørsmål**

Spørsmål som ikke forventer svar.

*Eksempel:* "Kan vi virkelig akseptere dette?"
*Effekt:* Aktiverer leseren, antyder svar.

**Ironi**

Si det motsatte av det man mener.

*Eksempel:* "Strålende timing!" (når noen kommer for sent)
*Effekt:* Kritiserer indirekte, skaper distanse.

**Overdrivelse (hyperbel)**

Forstørre for effekt.

*Eksempel:* "Jeg har sagt det tusen ganger."
*Effekt:* Understreker poeng, kan være humoristisk.

**Underdrivelse (litotes)**

Forminske for effekt.

*Eksempel:* "Det var ikke akkurat billig." (om noe dyrt)
*Effekt:* Diskret fremheving, ofte ironisk.

**Allitterasjon**

Bokstavrim - gjentakelse av begynnelseslyd.

*Eksempel:* "Folk flest føler seg fremmedgjort."
*Effekt:* Musikalitet, gjør teksten minneverdig.

**Eufemisme**

Mildere uttrykk for noe ubehagelig.

*Eksempel:* "Han gikk bort" (døde), "arbeidsledig" (uten jobb)
*Effekt:* Gjør det vanskelige lettere å snakke om.

**Dysefemisme**

Sterkere, mer negativt uttrykk enn nødvendig.

*Eksempel:* "Skattesluket" (om avgifter)
*Effekt:* Skaper negative assosiasjoner.

---

**Virkemidler i kontekst**

Virkemidlene fungerer ulikt i ulike sjangre:

*Politisk tale:* Mye trikolon, anafor, retoriske spørsmål - bygger intensitet
*Kronikk:* Ofte metaforer, kontraster - gjør abstrakte poenger konkrete
*Reklame:* Hyperbel, allitterasjon, eufemisme - selger og forskjønner
*Vitenskapelig tekst:* Få figurer, fokus på klarhet - logosappell

**Kritisk bruk**

Virkemidler kan misbrukes. Vær obs på:
- Overdreven patos som skjuler manglende argumenter
- Ladede ord som manipulerer
- Falske motsetninger (stråmannsargumenter)
- Glatte formuleringer uten substans`,
    },
    {
      id: 'norsk-vg2-5-4-def-1',
      type: 'definition',
      title: 'Retoriske virkemidler - oversikt',
      content: `**Troper (overført betydning):**
- *Metafor:* X er Y
- *Simile:* X er som Y
- *Besjeling:* Dødt får liv
- *Metonymi:* Del for helhet ("kronen" = kongen)
- *Synekdoke:* Helhet for del ("Norge vant" = landslaget)

**Stilistiske figurer:**
- *Trikolon:* Tre elementer
- *Anafor:* Gjentakelse i begynnelsen
- *Allitterasjon:* Bokstavrim
- *Kontrast:* Motsetninger
- *Retorisk spørsmål:* Spørsmål uten svar

**Tonemarkører:**
- *Ironi:* Si motsatt
- *Hyperbel:* Overdrive
- *Litotes:* Underdrive
- *Eufemisme:* Mildere ord
- *Dysefemisme:* Hardere ord`,
    },
    {
      id: 'norsk-vg2-5-4-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Bjørnstjerne Bjørnson – «17. mai-tale»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-5-4-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_BJORNSON_17MAI_TALE}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-5-4-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland – «Tale for opphevinga av Jodeparagrafen»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-5-4-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_WERGELAND_TALE_JODANE}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Virkemidler i tale',
      problem: `Les dette utdraget fra en fiktiv tale:

"Venner, vi står ved et veiskille. Bak oss ligger fortiden - full av feil, men også full av lærdom. Foran oss venter fremtiden - usikker, men full av muligheter.

Spørsmålet er: Vil vi gripe disse mulighetene? Vil vi ta ansvar? Vil vi handle?

Jeg tror vi vil. Jeg tror vi kan. Jeg vet vi må.

For vi skylder ikke bare oss selv å prøve. Vi skylder barna våre. Vi skylder barnebarna våre. Vi skylder alle som kommer etter."

Identifiser virkemidlene og analyser effekten.`,
      solution: `**Analyse av taletutdraget:**

**Virkemidler:**

*1. Tiltaleform:*
"Venner" - skaper nærhet og fellesskap (etos)

*2. Metafor:*
"veiskille" - valget fremstilles som en konkret vei
*Effekt:* Gjør det abstrakte (politiske valg) håndgripelig

*3. Kontrast:*
"Bak oss... Foran oss" / "fortiden... fremtiden"
*Effekt:* Skaper dramatikk, fremhever øyeblikkets viktighet

*4. Trikolon 1:*
"Vil vi gripe... Vil vi ta ansvar... Vil vi handle?"
*Effekt:* Bygger intensitet, hamrer inn spørsmålene

*5. Retoriske spørsmål:*
De tre spørsmålene forventer svar (ja!)
*Effekt:* Aktiverer publikum, antyder rett svar

*6. Anafor 1:*
"Jeg tror vi vil. Jeg tror vi kan. Jeg vet vi må."
*Effekt:* Gradvis stigning fra tro til visshet til plikt

*7. Trikolon 2:*
"oss selv... barna våre... barnebarna våre"
*Effekt:* Utvider ansvaret til kommende generasjoner (patos)

*8. Anafor 2:*
"Vi skylder... Vi skylder... Vi skylder"
*Effekt:* Understreker moralsk forpliktelse

**Helhetlig effekt:**

Talen bygger fra refleksjon ("veiskille") til spørsmål til overbevisning til moralsk appell. Virkemidlene støtter denne oppbyggingen:

- Kontraster skaper drama
- Retoriske spørsmål engasjerer
- Trikolon og anafor skaper rytme og intensitet
- Den moralske appellen til fremtidige generasjoner avslutter med sterk patos

Resultatet er en tale som er lett å følge, lett å huske, og som appellerer til både fornuft og følelser.`,
    },
    {
      id: 'norsk-vg2-5-4-tip-1',
      type: 'tip',
      title: 'Tips for å bruke virkemidler',
      content: `**Slik bruker du virkemidler effektivt:**

**1. Ikke overdriv:**
Noen virkemidler er nok. For mange virker kunstig.

**2. Match sjangeren:**
Trikolon passer i taler, kanskje ikke i fagartikler.

**3. La formen støtte innholdet:**
Virkemidlene skal fremheve budskapet, ikke distrahere.

**4. Øv deg:**
Prøv å skrive med bevisst bruk av virkemidler.

**5. Les gode eksempler:**
Studer taler og tekster som fungerer.

**Slik identifiserer du virkemidler:**

**Spør deg selv:**
- Er det gjentakelser? -> Anafor, trikolon
- Er det sammenligninger? -> Metafor, simile
- Er det motsetninger? -> Kontrast
- Er det spørsmål? -> Retorisk spørsmål
- Er det overdrivelse? -> Hyperbel
- Er det bokstavrim? -> Allitterasjon

**Så analyser effekten:**
- Hva gjør dette med budskapet?
- Hva gjør det med leseren?
- Hvorfor valgte forfatteren dette?`,
    },
    {
      id: 'norsk-vg2-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser virkemidler.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn tre virkemidler i en avisartikkel eller kronikk. Beskriv virkningen.',
            solution: 'Svar bør navngi virkemidlene, sitere eksemplet og forklare effekten (hva det gjør med leseren/budskapet).',
          },
          {
            label: 'b',
            task: 'Finn en reklamertekst og analyser hvilke virkemidler den bruker.',
            solution: 'Reklame bruker ofte: hyperbel, allitterasjon, eufemisme, metaforer om lykke/suksess. Svar bør gi konkrete eksempler.',
          },
        ],
        solution: 'Å identifisere virkemidler er første steg mot kritisk lesing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv med bevisst bruk av virkemidler.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en kort appell (100-150 ord) om et tema du bryr deg om. Bruk minst tre ulike virkemidler.',
            solution: 'Svar bør inneholde tydelig bruk av navngitte virkemidler (f.eks. trikolon, retorisk spørsmål, kontrast) og ha et klart budskap.',
          },
          {
            label: 'b',
            task: 'Marker hvilke virkemidler du brukte og forklar hvorfor du valgte dem.',
            solution: 'Svar bør vise bevisst refleksjon over valg av virkemidler og deres tiltenkte effekt.',
          },
        ],
        solution: 'Å skrive med bevisste valg gjør deg til en bedre kommunikator.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kritisk analyse av virkemiddelbruk.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn et eksempel på misbruk av retoriske virkemidler (f.eks. i politikk, reklame). Forklar hva som er problematisk.',
            solution: 'Eksempler: Overdreven patos som skjuler svake argumenter, falske motsetninger, manipulerende ordvalg. Svar bør gi konkret eksempel og analyse.',
          },
          {
            label: 'b',
            task: 'Hvordan kan vi som lesere beskytte oss mot manipulerende retorikk?',
            solution: 'Stille kritiske spørsmål, sjekke fakta, se etter det som utelates, være bevisst på egne følelser, sammenligne kilder.',
          },
        ],
        solution: 'Kritisk retorikkbevissthet er viktig i en demokratisk mediekultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en anafor?',
        options: [
          'En sammenligning uten "som"',
          'Gjentakelse av ord eller frase i begynnelsen av flere setninger',
          'Et spørsmål som ikke forventer svar',
          'Bruk av mildere ord for noe ubehagelig',
        ],
        answer: 1,
        solution: 'Anafor er gjentakelse av ord eller frase i begynnelsen av setninger eller verselinjer. Eksempel: "Vi må handle. Vi må handle nå. Vi må handle sammen." Effekten er å bygge intensitet og hamre inn budskapet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket virkemiddel brukes i setningen "Skattesluket tømmer lommeboken din"?',
        options: [
          'Eufemisme og metafor',
          'Dysefemisme og besjeling',
          'Simile og allitterasjon',
          'Litotes og ironi',
        ],
        answer: 1,
        solution: '"Skattesluket" er en dysefemisme - et sterkere, mer negativt uttrykk enn nødvendig for skatter/avgifter. "Tømmer lommeboken din" er en besjeling fordi skatten gis menneskelige handlingsevner (å tømme). Samlet skaper det et negativt bilde av beskatning.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar forskjellen mellom metafor og simile. Gi to eksempler på hver.',
        solution: 'Metafor er en sammenligning uten "som" - noe er noe annet: "Livet er en reise" og "Tiden er penger." Simile er en sammenligning med "som": "Hun er sterk som en bjørn" og "Ordene fløt som en elv." Metaforen er mer direkte og ofte kraftigere, mens similen er mer forsiktig og tydeliggjør at det er en sammenligning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en setning for hvert av disse virkemidlene: trikolon, retorisk spørsmål, hyperbel, kontrast.',
        hints: ['Bruk gjerne et felles tema for alle setningene.'],
        solution: 'Trikolon: "Vi trenger bedre lærere, bedre skoler og bedre fremtidsutsikter." Retorisk spørsmål: "Har vi ikke alle rett til en god utdanning?" Hyperbel: "Norske elever drukner i lekser." Kontrast: "Mens noen skoler har alt, mangler andre det meste."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Bjørnsons 17. mai-tale (primærteksten over). Identifiser minst fire retoriske virkemidler og analyser effekten av hvert.',
        hints: [
          'Se etter gjentakelser, kontraster og følelsesladde ord.',
          'Tenk på hvem talen er rettet mot og hva Bjørnson vil oppnå.',
        ],
        solution: 'Analysen bør identifisere virkemidler som: anaforer (gjentakelse av nøkkelord), kontraster (mellom fortid og nåtid, ufrihet og frihet), patosappell (nasjonal stolthet, fellesskapsfølelse), metaforer og eventuelle trikolon. Hvert virkemiddel bør analyseres med hensyn til effekt - hvordan det bygger opp Bjørnsons budskap om nasjonal identitet og samhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Wergelands tale for opphevinga av Jodeparagrafen (primærteksten over). Analyser hvordan Wergeland bruker appellformene etos, logos og patos for å argumentere for sin sak.',
        hints: [
          'Legg merke til hvordan Wergeland bygger troverdighet.',
          'Identifiser fakta og følelsesappeller.',
        ],
        solution: 'Analysen bør vise: Etos - Wergeland bygger troverdighet gjennom sitt engasjement og kunnskap om saken. Logos - han bruker logiske argumenter om rettferdighet og grunnlovens prinsipper. Patos - han appellerer til medmenneskelighet og rettferdighetssans. Virkemidlene bør kobles til Wergelands overordnede formål: å overbevise om at Jodeparagrafen må oppheves.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign virkemiddelbruken i Bjørnsons 17. mai-tale og Wergelands tale om Jodeparagrafen. Hvilke likheter og forskjeller finner du? Hvordan henger virkemiddelbruken sammen med formålet?',
        hints: [
          'Se på formål, situasjon og publikum for begge talene.',
          'Hvilke appellformer dominerer i hver tale?',
        ],
        solution: 'Sammenligningen bør vise at begge bruker sterke retoriske virkemidler, men med ulikt formål: Bjørnson feirer og bygger nasjonal identitet (festtale), mens Wergeland argumenterer for en politisk endring (politisk tale). Bjørnsons tale kan ha mer patos knyttet til nasjonal stolthet, mens Wergelands kombinerer sterkere logos-argumenter med etisk patos. Begge viser hvordan virkemiddelvalget henger sammen med situasjon og formål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tale (200-300 ord) om en sak du er opptatt av. Bruk minst fem navngitte retoriske virkemidler. Marker virkemidlene i teksten og forklar effekten av hvert.',
        hints: [
          'Planlegg hvilke virkemidler du vil bruke FØR du skriver.',
          'Tenk på oppbygging - start rolig og bygg opp intensiteten.',
          'Bruk de fem arbeidsfasene fra kapittel 5.1.',
        ],
        solution: 'Talen bør ha tydelig struktur (innledning, hoveddel, avslutning), bruke minst fem navngitte virkemidler (f.eks. retorisk spørsmål, trikolon, anafor, kontrast, metafor), og ha et klart budskap. Markeringene bør vise bevisst bruk, og forklaringene bør vise forståelse for hvorfor virkemidlene fungerer i den aktuelle sammenhengen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5: Fagartikkelens oppbygging
// ============================================================================

export const CHAPTER_NORSK_VG2_5_5: TextbookChapter = {
  id: 'norsk-vg2-5-5',
  courseId: 'norsk-vg2',
  chapterNumber: '5.5',
  title: 'Fagartikkelens oppbygging',
  description: 'Lær å skrive fagartikler med god struktur og argumentasjon.',
  estimatedMinutes: 90,
  competenceGoals: [
    'skrive fagartikler som gjør rede for og drøfter tekster i kontekst',
    'reflektere over sakprosatekster og retorisk situasjon',
    'vurdere og bruke kilder kritisk',
  ],
  content: [
    {
      id: 'norsk-vg2-5-5-intro',
      type: 'text',
      content: `## Fagartikkelen - akademisk skriving

Fagartikkelen er en sentral sjanger i videregående skole og høyere utdanning. Den kjennetegnes av saklig fremstilling, god struktur og bruk av kilder.

**Struktur**

*Innledning:*
- Presenterer tema og problemstilling
- Vekker interesse
- Avgrenser hva du vil ta opp

*Hoveddel:*
- Utdyper temaet systematisk
- Presenterer argumenter og motargumenter
- Bruker kilder og eksempler

*Avslutning:*
- Oppsummerer hovedpunkter
- Besvarer problemstillingen
- Kan peke fremover

**Krav til fagartikkelen**

- Saklig og nøytral tone
- Kildehenvisninger
- Presis språkbruk
- Logisk oppbygning`,
    },
    {
      id: 'norsk-vg2-5-5-def-1',
      type: 'definition',
      title: 'Fagartikkelens kjennetegn',
      content: `**Fagartikkel:** Saklig, argumenterende tekst om et faglig emne.

**Problemstilling:** Spørsmålet teksten skal besvare.

**Drøfting:** Å belyse en sak fra flere sider, veie argumenter.

**Kildehenvisning:** Referanse til hvor informasjonen kommer fra.

**Struktur:**
1. Innledning (tema, problemstilling)
2. Hoveddel (argumentasjon, drøfting)
3. Avslutning (konklusjon)`,
    },
    {
      id: 'norsk-vg2-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en disposisjon for en fagartikkel.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema fra litteraturhistorien og formuler en problemstilling.',
            solution: 'Eksempel: "Hvordan gjenspeiler Wergelands diktning romantikkens ideer?"',
          },
          {
            label: 'b',
            task: 'Lag en disposisjon med innledning, hoveddel og avslutning.',
            solution: 'Innledning: Tema og problemstilling. Hoveddel: Romantikkens ideer, Wergelands dikt, analyse, drøfting. Avslutning: Konklusjon.',
          },
        ],
        solution: 'God planlegging gir bedre fagartikler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør innledningen i en fagartikkel inneholde?',
        options: [
          'En personlig historie og følelsesappell',
          'Presentasjon av tema, problemstilling og avgrensning',
          'Alle argumentene for og mot saken',
          'Konklusjonen og en oppsummering av hoveddelen',
        ],
        answer: 1,
        solution: 'Innledningen i en fagartikkel skal presentere temaet, formulere problemstillingen og avgrense hva teksten vil ta opp. Den skal gjøre leseren interessert og gi oversikt over hva som kommer. Argumentasjonen hører hjemme i hoveddelen, og konklusjonen i avslutningen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det å "drøfte" i en fagartikkel?',
        options: [
          'Å gjenfortelle hva kildene sier',
          'Å gi sin personlige mening uten begrunnelse',
          'Å belyse en sak fra flere sider og veie argumenter',
          'Å liste opp fakta i kronologisk rekkefølge',
        ],
        answer: 2,
        solution: 'Å drøfte betyr å belyse en sak fra flere sider, vurdere ulike argumenter og veie dem mot hverandre. Det innebærer å se på både for og mot, og å komme frem til en begrunnet konklusjon. Drøfting er noe mer enn bare gjenfortelling eller personlig synsing.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar med egne ord hva som kjennetegner en god problemstilling. Gi to eksempler på gode og to eksempler på dårlige problemstillinger.',
        hints: ['En god problemstilling er avgrenset, åpen og lar seg besvare gjennom analyse.'],
        solution: 'En god problemstilling er avgrenset (ikke for vid), åpen (ikke ja/nei-spørsmål), og analytisk (krever drøfting). Gode: "Hvordan bruker Bjørnson retoriske virkemidler i sin 17. mai-tale?" og "Hvilken rolle spiller naturen i Wergelands diktning?" Dårlige: "Hva er litteratur?" (for vid) og "Skrev Ibsen Et dukkehjem?" (ja/nei-spørsmål). En god problemstilling styrer hele fagartikkelen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er forskjellen på en fagartikkel og et essay? Nevn minst tre forskjeller.',
        solution: '(1) Struktur: Fagartikkelen har fast struktur (innledning, hoveddel, avslutning), mens essayet er friere i formen. (2) Tone: Fagartikkelen er saklig og nøytral, essayet er personlig og resonerende. (3) Kilder: Fagartikkelen krever kildehenvisninger, essayet trenger ikke det i samme grad. (4) Formål: Fagartikkelen drøfter og konkluderer, essayet utforsker uten nødvendigvis å konkludere. (5) Språk: Fagartikkelen bruker fagspråk, essayet kan bruke mer litterært språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en innledning til en fagartikkel om et selvvalgt tema fra norskfaget. Innledningen skal inneholde: presentasjon av tema, problemstilling og avgrensning.',
        hints: [
          'Start med en "krok" som vekker interesse - et sitat, en påstand eller et spørsmål.',
          'Problemstillingen bør komme tydelig frem.',
        ],
        solution: 'Innledningen bør: (1) Starte med noe som vekker interesse (krok). (2) Presentere temaet bredt og deretter avgrense. (3) Formulere en tydelig problemstilling. (4) Eventuelt gi en oversikt over hvordan artikkelen er bygget opp. Eksempel: Start med et relevant sitat fra en forfatter, presenter temaet, avgrens til en bestemt epoke eller tekst, og formuler problemstillingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les gjennom dette avsnittet fra en elevtekst og forklar hva som kan forbedres:\n\n"Ibsen var en veldig kjent forfatter. Han skrev mange skuespill. Et dukkehjem er et av de mest kjente. Det handler om Nora som forlater mannen sin. Det var veldig kontroversielt."',
        hints: [
          'Tenk på fagspråk, presisjon og analyse versus gjenfortelling.',
          'Hva mangler av kildebruk og analytisk dybde?',
        ],
        solution: 'Avsnittet har flere svakheter: (1) Upresist språk ("veldig kjent") i stedet for faglige formuleringer. (2) Ren gjenfortelling uten analyse eller drøfting. (3) Ingen kildehenvisninger. (4) Ingen kobling til problemstilling eller fagbegreper. Forbedret versjon bør bruke fagspråk ("naturalistisk dramatiker"), analysere (hvorfor var det kontroversielt?), bruke kilder og koble til relevant kontekst (kvinnefrigjøring, samfunnskritikk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva det vil si å bruke en "IMRaD"-struktur, og drøft om denne strukturen passer for alle typer fagartikler.',
        hints: ['IMRaD = Introduction, Methods, Results and Discussion.'],
        solution: 'IMRaD-strukturen (Introduksjon, Metode, Resultater og Diskusjon) brukes primært i naturvitenskapelige artikler. Den passer for tekster som rapporterer funn fra undersøkelser. I norskfaget bruker vi oftere en friere struktur med innledning, hoveddel (tematisk organisert drøfting) og avslutning. IMRaD-strukturen passer ikke like godt for litteraturanalyser eller drøftende tekster, men prinsippet om klar struktur er universelt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv hoveddelen av en kort fagartikkel (ca. 400-500 ord) med problemstillingen: "Hvordan bruker sakprosaforfattere retoriske virkemidler for å overbevise?" Bruk minst to eksempler fra tekster du kjenner.',
        hints: [
          'Organiser drøftingen tematisk - f.eks. etter appellformer.',
          'Bruk eksempler fra primærtekstene i dette kapittelet eller andre tekster.',
          'Husk kildehenvisninger.',
        ],
        solution: 'Hoveddelen bør drøfte spørsmålet systematisk med eksempler. Mulig struktur: (1) Definere retoriske virkemidler kort. (2) Analysere eksempel 1 (f.eks. en kronikk) - hvilke virkemidler brukes og med hvilken effekt? (3) Analysere eksempel 2 (f.eks. en tale) - sammenligne virkemiddelbruken. (4) Drøfte likheter og forskjeller. Teksten bør bruke fagbegreper, referere til kilder, og vise evne til analyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en fullstendig fagartikkel (600-800 ord) med selvvalgt problemstilling. Artikkelen skal ha innledning, hoveddel og avslutning, og bruke minst tre kilder med korrekte referanser.',
        hints: [
          'Bruk disposisjonen din fra oppgave 1 som utgangspunkt, eller lag en ny.',
          'Skriv innledningen til slutt - da vet du hva artikkelen handler om.',
          'Drøft - ikke bare beskriv.',
        ],
        solution: 'Fagartikkelen bør inneholde: (1) Innledning med krok, tema, problemstilling og avgrensning. (2) Hoveddel med systematisk drøfting, eksempler, kildebruk og fagbegreper. (3) Avslutning med oppsummering og svar på problemstillingen. (4) Litteraturliste med minst tre kilder i konsekvent referanseformat. Teksten bør vise saklig tone, logisk oppbygning og god kildeintegrasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ============================================================================
    // UTVIDET INNHOLD: Kompetansemål 7 - Fagartikkel med drøfting av tekster i kontekst
    // ============================================================================
    {
      id: 'norsk-vg2-5-5-eksempelartikkel',
      type: 'collapsible',
      title: 'Komplett eksempelartikkel: Ibsens "Et dukkehjem" i lys av samtiden',
      buttonText: 'Vis eksempelartikkel',
      content: [
        {
          id: 'norsk-vg2-5-5-eksempelartikkel-text',
          type: 'text',
          content: `## Eksempelartikkel: Kvinnefrigjøring i "Et dukkehjem"

**Innledning**

Henrik Ibsens skuespill "Et dukkehjem" (1879) vakte skandale ved urpremieren. Sluttscenen, der Nora forlater mann og barn, brøt med alle konvensjoner for hvordan en kvinne skulle oppføre seg. Men hvorfor reagerte samtiden så sterkt? Denne fagartikkelen undersøker hvordan Ibsen bruker dramatiske virkemidler for å kritisere ekteskapet som institusjon i det borgerlige samfunnet.

**Historisk kontekst**

For å forstå reaksjonene må vi se på kvinnens stilling i 1870-årenes Norge. Gifte kvinner hadde ingen juridisk handleevne - de kunne ikke inngå kontrakter, ta opp lån eller disponere egen inntekt uten mannens samtykke (Hagemann, 2015, s. 78). Ekteskapet var en økonomisk og sosial nødvendighet for kvinner, ikke et personlig valg basert på følelser.

Samtidig vokste det frem en kvinnebevegelse. Camilla Collett hadde med "Amtmandens Døtre" (1854-55) kritisert kjærlighetsløse fornuftsekteskap. Aasta Hansteen og andre kjempet for kvinners rett til utdanning og arbeid. Det var i dette spenningsfeltet Ibsen skrev sitt drama.

**Analyse: Noras utvikling**

Ibsen viser oss en tilsynelatende idyllisk borgerlig familie. Men gjennom tre akter avdekkes fasadens falskhet. Nora har i hemmelighet tatt opp et lån for å redde mannens liv - en handling som juridisk sett var forbudt for en kvinne. Når dette kommer frem, reagerer ikke Torvald med takknemlighet, men med raseri over skammen hun har påført ham.

Det er denne reaksjonen som åpner Noras øyne: "Jeg har vært en dukke-hustru her, likesom jeg hjemme var pappa-dukke" (Ibsen, 1879, akt 3). Metaforen "dukke" er sentral - den viser at Nora aldri har fått være et selvstendig menneske, bare et objekt for andres behov.

**Drøfting: Ibsens budskap**

Man kan tolke "Et dukkehjem" på flere måter. Noen mener Ibsen primært kritiserer ekteskapet som institusjon. Torvald er ikke en ond mann, men et produkt av sin tid - han gjør det samfunnet forventer av ham (Templeton, 1997, s. 112). Andre legger vekt på det individuelle: Noras reise mot selvstendighet og autentisitet.

Det finnes også kritikere som mener Ibsen er uklar. Er det riktig av Nora å forlate barna? Ibsen selv nektet å gi et enkelt svar. Da en tysk skuespillerinne nektet å spille den originale slutten, skrev Ibsen motvillig en alternativ versjon der Nora blir - men kalte den "en barbarisk voldshandling" mot verket.

**Konklusjon**

"Et dukkehjem" var så provoserende fordi det stilte spørsmål ved selve grunnlaget for det borgerlige samfunnet: familien som uangripelig institusjon. Ved å sette Noras behov for selvrealisering opp mot hennes rolle som hustru og mor, tvang Ibsen publikum til å ta stilling. Stykket er fortsatt aktuelt fordi spørsmålet om individ versus fellesskap, og om kvinners selvstendighet, aldri blir endelig besvart.

**Litteraturliste**

Hagemann, G. (2015). *Kjønn og industrialisering*. Oslo: Universitetsforlaget.

Ibsen, H. (1879). *Et dukkehjem*. København: Gyldendal.

Templeton, J. (1997). *Ibsen's Women*. Cambridge: Cambridge University Press.`,
        },
      ],
    },
    {
      id: 'norsk-vg2-5-5-kildekritikk',
      type: 'text',
      content: `## Kildekritikk og akademisk etikk

Å skrive fagartikler handler ikke bare om å finne kilder - det handler om å vurdere dem kritisk og bruke dem etisk forsvarlig.

---

### Hvordan vurdere kilders troverdighet

Når du velger kilder til en fagartikkel, bør du stille disse spørsmålene:

**1. Hvem står bak kilden?**
- Er forfatteren en anerkjent forsker eller ekspert på feltet?
- Har institusjonen et godt rykte (universitet, forskningsinstitutt)?
- Er det en interesseorganisasjon som kan ha skjulte motiver?

**2. Når ble kilden publisert?**
- Er informasjonen oppdatert og relevant?
- Har det skjedd ny forskning som endrer bildet?
- For historiske emner: Er kilden samtids eller sekundær?

**3. Hvor er kilden publisert?**
- Fagfellevurderte tidsskrifter er mest pålitelige
- Bøker fra anerkjente forlag er normalt gode
- Nettsider varierer enormt - vær kritisk!

**4. Hvorfor er kilden skrevet?**
- Er formålet å informere, overbevise eller selge?
- Er fremstillingen balansert eller ensidig?
- Skjuler teksten viktig informasjon?

**5. Hvordan er informasjonen dokumentert?**
- Viser kilden til egne kilder?
- Kan påstandene etterprøves?
- Er metoden (for forskning) beskrevet?

*Eksempel på vurdering:*

En Wikipedia-artikkel kan gi god oversikt, men er ikke en primærkilde. Bruk heller kildene som Wikipedia selv refererer til. En kronikk i Aftenposten kan ha gode argumenter, men er en meningsytring - ikke en nøytral fremstilling.

---

### Plagiat og parafrasering - hva er forskjellen?

**Plagiat** er å bruke andres arbeid uten å oppgi kilde. Det regnes som akademisk juks og kan få alvorlige konsekvenser.

*Former for plagiat:*
- Kopiere tekst direkte uten anførselstegn og kilde
- Parafrasere (omskrive) uten å oppgi kilde
- Oversette fra andre språk uten kilde
- Bruke andres ideer eller struktur uten anerkjennelse
- Levere andres arbeid som sitt eget
- Gjenbruke egen tekst fra før uten å oppgi det (selvplagiat)

**Parafrasering** er å gjengi andres innhold med helt egne ord - og det er helt greit så lenge du oppgir kilden!

*Eksempel:*

**Originaltekst (fra kilde):**
"Romantikken representerte et oppgjør med opplysningstidens fornuftsdyrking og satte følelser, fantasi og individualitet i sentrum."

**Plagiat (FEIL):**
Romantikken var et oppgjør med opplysningstidens fornuftsdyrking og satte følelser, fantasi og individualitet i sentrum.
*(Små endringer, ingen kilde - dette er plagiat!)*

**Parafrase (RIKTIG):**
I motsetning til opplysningstiden, som vektla fornuft, fremhevet romantikerne følelsenes og fantasiens betydning (Hansen, 2019, s. 45).
*(Egne formuleringer + kilde = OK)*

**Direkte sitat (RIKTIG):**
Hansen (2019) skriver at "romantikken representerte et oppgjør med opplysningstidens fornuftsdyrking" (s. 45).
*(Anførselstegn + kilde = OK)*

---

### Hvordan sitere korrekt

**Direkte sitat** (under 40 ord):
Sett teksten i anførselstegn i løpende tekst.

*Eksempel:*
Ibsen lar Nora si at hun har vært "en dukke-hustru" (Ibsen, 1879, akt 3).

**Blokkitat** (over 40 ord):
Sett sitatet i eget avsnitt med innrykk, uten anførselstegn.

*Eksempel:*

I sluttscenen konfronterer Nora Torvald:

> Jeg har vært en dukke-hustru her, likesom jeg hjemme var pappa-dukke. Og barna, de har igjen vært mine dukker. Jeg syntes det var morsomt når du lekte med meg, likesom de syntes det var morsomt når jeg lekte med dem. Det har vært vårt ekteskap, Torvald. (Ibsen, 1879, akt 3)

**Indirekte sitat / parafrase:**
Gjengi med egne ord, men oppgi kilde.

*Eksempel:*
Ifølge Templeton (1997) er Torvalds reaksjon typisk for tidens menn - han handler etter samfunnets forventninger, ikke av ondskap.

**Sekundærsitat:**
Når du siterer noe som en annen forfatter har sitert.

*Eksempel:*
Ibsen skal ha kalt den alternative slutten "en barbarisk voldshandling" (sitert i Templeton, 1997, s. 115).`,
    },
    {
      id: 'norsk-vg2-5-5-drofting',
      type: 'text',
      content: `## Drøfting av motstridende perspektiver

God drøfting kjennetegnes ved at du presenterer flere synspunkter og veier dem mot hverandre. Dette krever at du:

1. Forstår ulike posisjoner grundig
2. Presenterer dem rettferdig (ikke stråmenn)
3. Vurderer styrker og svakheter ved hver
4. Trekker en begrunnet konklusjon

---

### Hvordan presentere ulike synspunkter

Bruk signalord som tydeliggjør at du gjengir andres syn:

*Nøytrale formuleringer:*
- "Ifølge [forsker]..."
- "[Forsker] hevder at..."
- "Et synspunkt er at..."
- "Det kan argumenteres for at..."

*Når du er uenig:*
- "[Forsker] påstår at..., men..."
- "Selv om [forsker] mener..., kan man innvende..."
- "Dette synet kan kritiseres fordi..."

*Når du er enig:*
- "Som [forsker] påpeker..."
- "I tråd med [forsker]..."
- "Dette støttes av..."

**Eksempel på balansert fremstilling:**

> Tolkningene av Noras valg om å forlate familien varierer. Templeton (1997) ser det som en nødvendig frigjøringshandling - Nora må bryte ut for å finne seg selv. Moi (2006) er mer kritisk og mener at Ibsen romantiserer individualismen på bekostning av ansvaret for andre. Begge synspunktene har noe for seg: Noras utvikling krever at hun bryter med det falske livet, men spørsmålet om barnas skjebne forblir ubesvart i teksten.

---

### Hvordan veie argumenter mot hverandre

Når du drøfter, må du ikke bare liste opp synspunkter - du må vurdere dem:

**Spør deg selv:**
- Hvilke argumenter er best underbygget?
- Hvilke har sterkest logisk sammenheng?
- Hvilke tar hensyn til flest relevante faktorer?
- Hvilke stemmer best med tekstens egen logikk?

**Eksempel på veiing:**

> Påstanden om at Ibsen var feminist støttes av temaene i hans verker, men han selv avviste merkelappen. I en tale i 1898 sa han at han "aldri har skrevet for kvinnesaken" (sitert i Templeton, 1997, s. 110). Dette kan tolkes på to måter: Enten var Ibsen ikke opptatt av kvinners rettigheter, eller så mente han at hans prosjekt var bredere - om menneskets frihet generelt. Det siste virker mer sannsynlig når vi ser på hans samlede forfatterskap, der både menn og kvinner kjemper mot samfunnets krav.

---

### Hvordan trekke egen konklusjon

Konklusjonen skal:
- Svare på problemstillingen
- Bygge på drøftingen du har gjort
- Være tydelig, men nyansert
- Ikke introdusere nye argumenter

**Svak konklusjon:**
> Det finnes mange meninger om "Et dukkehjem", og alle har noe for seg.
*(For vag - tar ikke stilling)*

**Sterk konklusjon:**
> "Et dukkehjem" kan leses både som en kritikk av ekteskapet som institusjon og som et drama om individuell frigjøring. Som drøftingen har vist, utelukker ikke disse tolkningene hverandre - tvert imot forsterker de hverandre. Ibsens styrke er nettopp at han viser hvordan institusjonelle strukturer hindrer individuell utvikling. Noras oppvåkning er både personlig og politisk.

---

### Vanlige feil i drøfting

**1. Stråmannsargumentasjon:**
Å fremstille motargumenter svakere enn de er.

**2. Falsk balanse:**
Å gi like mye plass til synspunkter som har ulik tyngde.

**3. Unnvikende konklusjon:**
Å unngå å ta stilling fordi "det finnes mange meninger".

**4. Manglende kobling:**
Å liste opp synspunkter uten å vise hvordan de forholder seg til hverandre.

**5. Sirkelargumentasjon:**
Å bruke konklusjonen som premiss for argumentasjonen.`,
    },
    {
      id: 'norsk-vg2-5-5-tip-kildekritikk',
      type: 'tip',
      title: 'Sjekkliste for kildekritikk',
      content: `**Før du bruker en kilde, sjekk:**

- [ ] Hvem er forfatteren? Er vedkommende ekspert?
- [ ] Når er kilden publisert? Er den oppdatert?
- [ ] Hvor er den publisert? Er det en seriøs utgivelse?
- [ ] Hvorfor er den skrevet? Har forfatteren en agenda?
- [ ] Hvordan underbygges påstandene? Er det dokumentert?

**Røde flagg:**
- Ingen forfatter oppgitt
- Ingen dato
- Ingen referanser til andre kilder
- Ekstreme påstander uten dokumentasjon
- Tydelig propaganda eller reklame

**Grønne flagg:**
- Publisert i fagfellevurdert tidsskrift
- Forfatteren er ansatt ved anerkjent institusjon
- Tydelig metode og kildebruk
- Balansert fremstilling
- Nyere publikasjon (med mindre historisk kilde)`,
    },
    {
      id: 'norsk-vg2-5-5-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser eksempelartikkelen om "Et dukkehjem" og identifiser styrker og svakheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Vurder innledningen: Hvordan vekker den interesse? Er problemstillingen tydelig formulert?',
            solution: 'Innledningen vekker interesse ved å referere til skandalen ved urpremieren. Problemstillingen ("hvordan Ibsen bruker dramatiske virkemidler for å kritisere ekteskapet som institusjon") er tydelig og avgrenset.',
          },
          {
            label: 'b',
            task: 'Vurder drøftingen: Presenteres flere synspunkter? Veies de mot hverandre?',
            solution: 'Artikkelen presenterer ulike tolkninger (institusjonskritikk vs. individualisme) og kritikere som mener Ibsen er uklar. Synspunktene veies mot hverandre, men drøftingen kunne vært dypere.',
          },
          {
            label: 'c',
            task: 'Vurder kildebruken: Er kildene relevante? Er de korrekt referert?',
            solution: 'Kildene (Hagemann, Ibsen, Templeton) er relevante og seriøse. De er referert i APA-stil med sidetall. Litteraturlisten er korrekt oppstilt.',
          },
          {
            label: 'd',
            task: 'Foreslå to konkrete forbedringer av artikkelen.',
            solution: 'Mulige forbedringer: (1) Dypere analyse av selve teksten med flere sitater. (2) Flere perspektiver i drøftingen, f.eks. fra feministisk eller historisk forskning. (3) Tydeligere kobling mellom kontekst og tekstanalyse.',
          },
        ],
        solution: 'Å vurdere andres tekster kritisk er en viktig ferdighet som også gjør deg til en bedre skribent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-13',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en innledning til en fagartikkel med problemstillingen: "Hvordan bruker Bjørnson retoriske virkemidler i sin 17. mai-tale for å skape nasjonal identitet?"',
        hints: [
          'Start med noe som vekker interesse - en påstand, et sitat eller et spørsmål.',
          'Presenter temaet (17. mai-talen, Bjørnson, nasjonsbygging).',
          'Avgrens hva du vil fokusere på.',
          'Avslutt med den presise problemstillingen.',
        ],
        solution: 'En god innledning kan starte med å påpeke 17. mai-talens betydning i norsk kultur, presentere Bjørnson som sentral figur i nasjonsbyggingen, og deretter snevre inn til spørsmålet om hvordan han bruker retorikk. Innledningen bør være 100-150 ord og gjøre leseren interessert i temaet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-14',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder følgende kilder for en fagartikkel om kvinners rettigheter i Norge på 1800-tallet. Ranger dem fra mest til minst pålitelig, og begrunn vurderingen.',
        subTasks: [
          {
            label: 'a',
            task: 'Wikipedia-artikkelen "Kvinnehistorie i Norge"',
            solution: 'Wikipedia gir god oversikt og kan være nyttig som startpunkt, men er ikke en primærkilde. Artikkelen kan inneholde feil og endres av hvem som helst. Bruk heller kildene Wikipedia refererer til.',
          },
          {
            label: 'b',
            task: 'Gro Hagemanns bok "Kjønn og industrialisering" (Universitetsforlaget, 2015)',
            solution: 'Høy troverdighet. Hagemann er professor i historie, boken er utgitt på et anerkjent akademisk forlag, og den er basert på omfattende forskning. Dette er en primærkilde for et akademisk arbeid.',
          },
          {
            label: 'c',
            task: 'En bloggpost om "Sterke kvinner i historien"',
            solution: 'Lav troverdighet. Blogger har ingen kvalitetskontroll, forfatteren er ofte ukjent, og fremstillingen kan være ensidig eller upresist. Kan gi ideer, men bør ikke brukes som kilde.',
          },
          {
            label: 'd',
            task: 'Camilla Colletts roman "Amtmandens Døtre" (1854-55)',
            solution: 'Verdifull primærkilde som viser samtidens holdninger og debatt, men er en skjønnlitterær tekst, ikke en historisk fremstilling. Må analyseres som litteratur, ikke brukes som faktagrunnlag.',
          },
        ],
        solution: 'Rangering: 1) Hagemanns bok (akademisk sekundærkilde), 2) Colletts roman (samtidig primærkilde, men litteratur), 3) Wikipedia (oversikt, men ikke autoritativ), 4) Bloggpost (lav troverdighet). God kildebruk kombinerer ulike typer kilder og vurderer dem kritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-15',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft spørsmålet: "Er Nora i Et dukkehjem en positiv eller negativ rollemodell?" Presenter minst to ulike synspunkter, vei dem mot hverandre, og trekk en begrunnet konklusjon.',
        hints: [
          'Hva taler for at Nora er en positiv rollemodell? (frigjøring, selvstendighet, ærlighet)',
          'Hva taler imot? (forlater barna, mangler plan, naiv)',
          'Unngå å bare liste opp argumenter - vei dem mot hverandre.',
          'Konklusjonen må følge av drøftingen.',
        ],
        solution: 'En god drøfting presenterer: (1) Positive perspektiver: Nora våkner opp, nekter å leve i løgn, krever å bli behandlet som voksen. Dette er modige valg som inspirerte kvinnebevegelsen. (2) Kritiske perspektiver: Hun forlater tre små barn, har ingen plan, har selv levd i illusjoner. Er det ansvarlig? (3) Veiing: Man kan argumentere for at Ibsen ikke nødvendigvis fremstiller Nora som et forbilde, men viser en prosess. Konklusjonen bør være nyansert og ta hensyn til at spørsmålet er komplekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-16',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Identifiser plagiat. Les de to tekstene under og vurder om tekst B er plagiat av tekst A.',
        subTasks: [
          {
            label: 'a',
            task: `TEKST A (original):
"Romantikken representerte et oppgjør med opplysningstidens fornuftsdyrking. Følelser, fantasi og individualitet ble satt i sentrum. Naturen fikk en ny betydning som kilde til inspirasjon og åndelig opplevelse."

TEKST B (elevtekst):
"Romantikken var et oppgjør med opplysningstiden som hadde dyrket fornuften. Nå ble følelser, fantasi og det individuelle viktig. Naturen fikk ny betydning - den ble en kilde til inspirasjon og åndelige opplevelser."

Er dette plagiat? Begrunn svaret.`,
            solution: 'Ja, dette er plagiat. Selv om noen ord er byttet ut (representerte -> var, fornuftsdyrking -> dyrket fornuften), er strukturen, innholdet og formuleringene så like at det er tydelig kopiering. Det mangler anførselstegn, kilde og egentlig omformulering.',
          },
          {
            label: 'b',
            task: 'Skriv om tekst A til en akseptabel parafrase med korrekt kildehenvisning.',
            solution: 'Akseptabel parafrase: "I motsetning til opplysningstiden, som hadde fremhevet fornuftens betydning, la romantikerne vekt på det følelsesmessige og fantasifulle. Den enkelte kunstners indre opplevelse ble viktigere enn universelle regler, og naturlandskapet ble en sentral inspirasjonskilde (Hansen, 2019, s. 23)." Her er innholdet gjengitt med helt egne formuleringer og kilde er oppgitt.',
          },
        ],
        solution: 'Plagiat handler ikke bare om å kopiere ord for ord, men om å ta andres tanker og formuleringer uten anerkjennelse. En god parafrase reformulerer innholdet helt og oppgir kilde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-5-ex-17',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-ex-17',
        number: '17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les en medelevs fagartikkel (eller din egen fra en tidligere oppgave) og gi en skriftlig tilbakemelding. Vurder: problemstilling, struktur, drøfting, kildebruk, språk og fagbegreper.',
        hints: [
          'Vær konkret - pek på avsnitt og setninger.',
          'Gi ros for det som fungerer, og forslag til forbedring.',
          'Bruk kriteriene fra kapittelet.',
        ],
        solution: 'Tilbakemeldingen bør være konstruktiv og konkret. Den bør vurdere: (1) Er problemstillingen god - avgrenset og analytisk? (2) Er strukturen tydelig med innledning, hoveddel og avslutning? (3) Drøftes saken fra flere sider? (4) Er kildene relevante og korrekt referert? (5) Er språket saklig med bruk av fagbegreper? Tilbakemeldingen bør balansere ros og forbedringsforslag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6: Kildebruk og referanser
// ============================================================================

export const CHAPTER_NORSK_VG2_5_6: TextbookChapter = {
  id: 'norsk-vg2-5-6',
  courseId: 'norsk-vg2',
  chapterNumber: '5.6',
  title: 'Kildebruk og referanser',
  description: 'Lær god kildebruk, referansesystemer og hvordan du unngår plagiat.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive fagartikler som drøfter tekster i kontekst',
    'bruke kilder og referanser på en etterrettelig måte',
  ],
  content: [
    {
      id: 'norsk-vg2-5-6-intro',
      type: 'text',
      content: `## Kildebruk - akademisk redelighet

God kildebruk er grunnleggende i all akademisk skriving. Det handler om å være ærlig om hvor kunnskapen din kommer fra, å gi anerkjennelse til andre, og å la leseren kunne sjekke påstandene dine. I dette kapittelet lærer du hvorfor og hvordan.

**Hvorfor bruke kilder?**

*Troverdighet:*
Kilder styrker argumentasjonen. Når du viser til forskning, eksperter eller primærkilder, blir påstandene dine mer troverdige.

*Etterprøvbarhet:*
Leseren skal kunne finne frem til kildene dine og vurdere dem selv. Dette er kjernen i akademisk metode.

*Redelighet:*
Å oppgi kilder er ærlig - du viser at du ikke later som om alle tanker er dine egne.

*Ydmykhet:*
Kilder viser at du bygger på andres arbeid. Ingen skaper kunnskap helt alene.

**Hva må refereres?**

Du må oppgi kilde når du:

- Siterer direkte (bruker eksakte ord)
- Parafraserer (gjengir innhold med egne ord)
- Henviser til spesifikke fakta, tall eller funn
- Bruker andres teorier, modeller eller ideer

Du trenger ikke referere:

- Allmennkunnskap (Norge ligger i Europa)
- Egne erfaringer og meninger (som du markerer som det)
- Innlysende fakta (vann koker ved 100 grader)

**Hvordan referere?**

Det finnes flere referansesystemer. De vanligste er:

*APA (American Psychological Association):*
- Brukes ofte i samfunnsvitenskap og psykologi
- Parenteshenvisning i teksten: (Forfatter, årstall)
- Full referanse i litteraturlisten

*Harvard:*
- Lignende APA, mye brukt i Norge
- (Forfatter årstall: sidetal)

*Chicago:*
- Brukes ofte i humaniora
- Fotnoter nederst på siden

**Eksempel på referering (APA-stil):**

*I teksten:*
"Ifølge Aasen (1853) var dialektene 'folkets virkelige maal' (s. 15)."

Eller:

"Dialektene ble sett som det autentiske norske (Aasen, 1853, s. 15)."

*I litteraturlisten:*
Aasen, I. (1853). Norsk Grammatik. Christiania: Werner.

**Sitater vs. parafraser**

*Direkte sitat:*
Bruk eksakte ord i anførselstegn. Korte sitater i løpende tekst, lengre sitater i eget avsnitt.

"Romantikken var 'følelsenes og fantasiens revolusjon' (Hansen, 2019, s. 45)."

*Parafrase:*
Gjengi innholdet med helt egne ord. Fortsatt med kilde!

Hansen (2019) beskriver romantikken som en opprørsbevegelse som satte følelser og fantasi i sentrum.

**Plagiat**

Plagiat er å bruke andres arbeid uten å oppgi kilde. Det er:

- Akademisk juks
- Ulovlig i noen tilfeller (brudd på opphavsrett)
- Lett å oppdage med plagiatkontroll

*Typer plagiat:*
- Kopiere tekst uten anførselstegn og kilde
- Parafrasere uten kilde
- Kjøpe eller låne andres oppgaver
- Bruke egen tekst fra før uten å oppgi det (selvplagiat)

*Konsekvenser:*
I skolen: Annullert oppgave, nedsatt karakter
På universitet: Utvisning, tilbaketrekking av grad

**Litteraturlisten**

Alle kilder skal samles i en alfabetisk ordnet litteraturliste til slutt.

Eksempler på oppføringer:

*Bok:*
Ibsen, H. (1879). Et dukkehjem. København: Gyldendal.

*Artikkel i tidsskrift:*
Hansen, O. (2020). Romantikkens naturlyrikk. Norsk Litteraturvitenskapelig Tidsskrift, 23(2), 45-60.

*Nettside:*
Språkrådet. (2023, 15. mars). Om nynorsk. Hentet fra https://www.sprakradet.no

**Kildeintegrasjon**

God kildebruk er ikke bare teknisk riktig - kildene skal integreres smidig i teksten:

*Dårlig:*
"Ifølge Aasen var..." "I følge Hansen mener..." (kilde etter kilde uten egen drøfting)

*Bedre:*
Sammenlign kilder, kommenter dem, bruk dem som støtte for egne argumenter.`,
    },
    {
      id: 'norsk-vg2-5-6-def-1',
      type: 'definition',
      title: 'Kildebruk - sentrale begreper',
      content: `**Kilde:** Opphav til informasjon - bok, artikkel, nettside, person.

**Primærkilde:** Førstehånds materiale (originaltekst, intervju, statistikk).

**Sekundærkilde:** Andres behandling av primærkilder (lærebok, oversiktsartikkel).

**Referanse:** Henvisning til kilde i teksten.

**Litteraturliste:** Samlet oversikt over alle kilder, til slutt i teksten.

**Sitat:** Eksakte ord fra kilde, i anførselstegn.

**Parafrase:** Gjengivelse av innhold med egne ord.

**Plagiat:** Å bruke andres arbeid uten å oppgi kilde.

**Referansesystem:** Standardisert måte å oppgi kilder på (APA, Harvard, Chicago).`,
    },
    {
      id: 'norsk-vg2-5-6-example-1',
      type: 'example',
      title: 'Eksempel: Kildebruk i praksis',
      problem: `Se på denne teksten uten kilder:

"Romantikken var en kulturbevegelse som oppsto rundt 1800. Den var en reaksjon mot opplysningstidens rasjonalisme. Romantikerne la vekt på følelser, natur og det nasjonale."

Vis hvordan den kunne forbedres med kildebruk.`,
      solution: `**Forbedret versjon med kilder:**

"Romantikken var en kulturbevegelse som oppsto rundt 1800 (Andersen, 2018). Den var en reaksjon mot opplysningstidens rasjonalisme - som Beyer (2020, s. 112) formulerer det: 'Romantikken satte hjertet over hodet, naturen over kulturen.' Romantikerne la vekt på følelser, natur og det nasjonale, noe som fikk særlig stor betydning i land som kjempet for selvstendighet (Andersen, 2018; Hansen, 2019)."

**Litteraturliste:**

Andersen, P.T. (2018). Norsk litteraturhistorie (3. utg.). Oslo: Universitetsforlaget.

Beyer, E. (2020). Romantikken i Norge. I K. Jensen (Red.), Norsk litteratur i europeisk perspektiv (s. 100-150). Bergen: Fagbokforlaget.

Hansen, J. (2019). Nasjonsbygging og litteratur. Norsk Litteraturvitenskapelig Tidsskrift, 22(1), 30-45.

**Hva er forbedret:**

1. *Påstand om tidspunkt* refereres til Andersen (allmennkunnskap, men viser lesning)

2. *Tolkning av romantikken* støttes med sitat fra Beyer - viser at andre er enige

3. *Flere kilder* (Andersen, Hansen) styrker troverdigheten

4. *Sidetall* gjør det mulig å finne igjen informasjonen

5. *Litteraturlisten* gir full informasjon om kildene`,
    },
    {
      id: 'norsk-vg2-5-6-tip-1',
      type: 'tip',
      title: 'Tips for god kildebruk',
      content: `**Sjekkliste for kildebruk:**

**1. Finn gode kilder:**
- Bruk fagbøker og vitenskapelige artikler
- Vær kritisk til nettsider (se kapittel 5.7)
- Primærkilder er best når mulig

**2. Hold orden:**
- Noter kilden med en gang du bruker den
- Bruk referanseverktøy (Zotero, EndNote)
- Lag litteraturlisten underveis

**3. Integrer kildene:**
- Ikke bare list opp kilder - bruk dem aktivt
- Kommenter og sammenlign
- La egen stemme dominere

**4. Varier referansemåten:**
- Noen ganger forfatter i teksten: "Aasen mener at..."
- Noen ganger i parentes: "(Aasen, 1853)"
- Noen ganger med sitat, noen ganger parafrase

**5. Sjekk til slutt:**
- Stemmer referansene med litteraturlisten?
- Er alle påstander som trenger det, referert?
- Er referansestilen konsekvent?

**Husk:**
Når i tvil - oppgi kilde. Det er bedre å referere for mye enn for lite.`,
    },
    {
      id: 'norsk-vg2-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på referering.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv et avsnitt om et selvvalgt tema (f.eks. romantikken) med minst to kilder. Bruk både sitat og parafrase.',
            solution: 'Svar bør inneholde: tydelig markert sitat med sidetal, parafrase med kilde, riktig referanseformat.',
          },
          {
            label: 'b',
            task: 'Lag en litteraturliste for kildene du brukte.',
            solution: 'Litteraturlisten bør være alfabetisk, følge et konsekvent format (f.eks. APA), og inneholde all nødvendig informasjon.',
          },
        ],
        solution: 'God kildebruk krever øvelse og nøyaktighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser plagiat.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen på lovlig bruk av kilder og plagiat. Gi eksempler.',
            solution: 'Lovlig: Siterer med anførselstegn og kilde, parafraserer med kilde. Plagiat: Kopierer uten anførselstegn, parafraserer uten kilde, later som tekst er egen.',
          },
          {
            label: 'b',
            task: 'Hva kan være konsekvensene av plagiat i skole og universitet?',
            solution: 'Skole: Annullert oppgave, nedsatt karakter, anmerkning. Universitet: Utvisning, tilbaketrekking av grad, yrkesforbud i alvorlige tilfeller.',
          },
        ],
        solution: 'Kunnskap om plagiat beskytter deg mot feil og lærer akademisk redelighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse tekstpassasjene er et eksempel på plagiat?',
        options: [
          '"Ifølge Hansen (2019, s. 45) var romantikken en følelsenes revolusjon."',
          '"Romantikken var en følelsenes revolusjon." (uten kildehenvisning, hentet fra en bok)',
          '"Hansen (2019) beskriver romantikken som en opprørsbevegelse."',
          '"Jeg mener at romantikken var viktig fordi den satte følelser i sentrum."',
        ],
        answer: 1,
        solution: 'Alternativ B er plagiat fordi påstanden er hentet fra en kilde uten at kilden oppgis. Det mangler både anførselstegn (det er et direkte sitat) og referanse. De andre alternativene viser korrekt kildebruk (A og C) eller er en personlig mening som er markert som det (D).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Når trenger du IKKE oppgi kilde?',
        options: [
          'Når du parafraserer noe fra en bok',
          'Når du skriver om allmennkunnskap som at Oslo er Norges hovedstad',
          'Når du refererer til statistikk fra SSB',
          'Når du bruker en teori du har lest om i en artikkel',
        ],
        answer: 1,
        solution: 'Allmennkunnskap trenger ikke kildehenvisning. At Oslo er Norges hovedstad er allment kjent og kan ikke tilskrives en spesifikk kilde. Parafraser, statistikk og teorier fra andre må alltid refereres.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar forskjellen mellom et direkte sitat og en parafrase. Gi et eksempel på hvert.',
        solution: 'Direkte sitat bruker eksakte ord i anførselstegn med kilde og sidetall: "Romantikken var \'følelsenes revolusjon\' (Hansen, 2019, s. 45)." Parafrase gjengir innholdet med egne ord, men med kilde: "Hansen (2019) beskriver romantikken som en periode der følelsene ble satt i sentrum." Begge krever kildehenvisning, men sitater krever i tillegg anførselstegn og helst sidetall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar forskjellen mellom en primærkilde og en sekundærkilde. Gi et eksempel på hver innenfor norskfaget.',
        solution: 'Primærkilde er førstehåndsmateriale - originalen. I norskfaget: Henrik Ibsens skuespill Et dukkehjem (1879) er en primærkilde. Sekundærkilde er andres behandling av primærkilden: En litteraturhistorisk analyse av Et dukkehjem skrevet av en forsker er en sekundærkilde. I en fagartikkel bør man helst bruke primærkilder der det er mulig, og vise til sekundærkilder for å støtte sine analyser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag tre korrekte litteraturlisteoppføringer i APA-format: en bok, en nettside og en tidsskriftartikkel. Du kan bruke fiktive eller virkelige kilder.',
        hints: [
          'Bok: Forfatter, Initialer. (Årstall). Tittel. Sted: Forlag.',
          'Nettside: Forfatter/Organisasjon. (Dato). Tittel. Hentet fra URL.',
          'Tidsskrift: Forfatter, Initialer. (Årstall). Artikkeltittel. Tidsskriftnavn, volum(nummer), sider.',
        ],
        solution: 'Bok: Andersen, P.T. (2018). Norsk litteraturhistorie (3. utg.). Oslo: Universitetsforlaget. Nettside: Språkrådet. (2023, 15. mars). Om nynorsk. Hentet fra https://www.sprakradet.no. Tidsskrift: Hansen, O. (2020). Romantikkens naturlyrikk. Norsk Litteraturvitenskapelig Tidsskrift, 23(2), 45-60. Alle oppføringer bør ha konsekvent format.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les eksempelet i kapittelet om hvordan en tekst forbedres med kildebruk. Skriv en lignende tekst (3-4 setninger) om et selvvalgt tema - først uten kilder, deretter med korrekte kildehenvisninger.',
        solution: 'Svar bør vise tydelig forskjell mellom tekst uten og med kilder. Versjonen med kilder bør inneholde minst ett direkte sitat og minst én parafrase, begge med korrekt referanseformat. Litteraturliste bør følge APA-format.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-6-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: "Med kunstig intelligens som kan skrive tekster for oss, er plagiat blitt vanskeligere å definere." Bruk argumenter for og mot.',
        hints: [
          'Tenk på hva plagiat er i kjernen - å fremstille andres arbeid som sitt eget.',
          'Er AI-generert tekst "andres arbeid"?',
          'Hva sier skolene om bruk av AI?',
        ],
        solution: 'For: AI-tekst er ikke skrevet av en person, så tradisjonelle plagiatdefinisjoner passer ikke. Plagiatkontrollverktøy sliter med å oppdage AI-tekst. Grensen mellom egen tekst og AI-hjelp er uklar. Mot: Kjernen i plagiat er å fremstille noe som eget arbeid når det ikke er det. Om teksten er skrevet av en person eller en maskin, er resultatet det samme: eleven har ikke gjort det intellektuelle arbeidet. Konklusjonen bør nyansere og argumentere for at akademisk redelighet handler om ærlig kommunikasjon uansett verktøy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-6-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et avsnitt (ca. 200 ord) der du integrerer minst tre kilder på en smidig måte. Temaet skal være "språkdebatt i Norge". Vis at du behersker ulike måter å referere på (sitat, parafrase, forfatter i tekst og i parentes).',
        hints: [
          'Varier mellom sitat og parafrase.',
          'La din egen stemme og analyse dominere - kildene skal støtte, ikke erstatte.',
          'Bruk overganger mellom kildene.',
        ],
        solution: 'Avsnittet bør vise: (1) Minst ett direkte sitat med anførselstegn og kilde. (2) Minst én parafrase med kilde. (3) Forfatter nevnt i teksten ("Ifølge Aasen...") og i parentes ("(Knudsen, 1850)"). (4) Egen stemme som binder kildene sammen. (5) Kildeintegrasjon - kildene brukes som støtte for egne argumenter, ikke bare listet opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-6-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign APA-stilen og Chicago-stilen for kildehenvisning. Forklar fordeler og ulemper med hver, og drøft hvilken som passer best for ulike fag.',
        hints: [
          'APA bruker parenteser i teksten, Chicago bruker fotnoter.',
          'Tenk på leseflyt, oversiktlighet og faglige tradisjoner.',
        ],
        solution: 'APA: Parenteshenvisning i teksten (Forfatter, årstall). Fordel: Kompakt, leseren ser umiddelbart hvem som er kilde. Ulempe: Kan bryte leseflyten. Passer for: Samfunnsvitenskap, psykologi. Chicago: Fotnoter nederst på siden. Fordel: Bedre leseflyt, mulighet for utfyllende kommentarer. Ulempe: Tar plass, kan bli uoversiktlig. Passer for: Humaniora, historie. Konklusjon: Valget avhenger av fagtradisjon og teksttype. Det viktigste er å være konsekvent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.7: Kritisk lesing av kilder
// ============================================================================

export const CHAPTER_NORSK_VG2_5_7: TextbookChapter = {
  id: 'norsk-vg2-5-7',
  courseId: 'norsk-vg2',
  chapterNumber: '5.7',
  title: 'Kritisk lesing av kilder',
  description: 'Lær å vurdere kilders troverdighet og kvalitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'vurdere og bruke kilder på en kritisk og etterrettelig måte',
    'reflektere over sakprosateksters formål og kontekst',
  ],
  content: [
    {
      id: 'norsk-vg2-5-7-intro',
      type: 'text',
      content: `## Kritisk kildevurdering - veien til pålitelig kunnskap

I en tid med informasjonsoverflod og desinformasjon er evnen til å vurdere kilder kritisk viktigere enn noensinne. Å være kritisk betyr ikke å være negativ - det betyr å stille spørsmål, undersøke og vurdere før man aksepterer informasjon.

**Hvorfor kritisk kildevurdering?**

- Alle kilder er ikke like pålitelige
- Også "seriøse" kilder kan ta feil
- Kilder kan være partiske uten å si det
- Falsk informasjon spres lett på nett
- Du er ansvarlig for det du skriver

**De fire hovedspørsmålene**

God kildevurdering handler om å stille de rette spørsmålene:

**1. HVEM?**
- Hvem står bak kilden?
- Hvilken bakgrunn/kompetanse har de?
- Hvilke interesser kan de ha?
- Er kilden anonym?

**2. HVA?**
- Hva er innholdet?
- Er påstandene etterprøvbare?
- Er fakta skilt fra meninger?
- Brukes kilder?

**3. HVORFOR?**
- Hva er formålet med teksten?
- Hvem er målgruppen?
- Er det reklame, propaganda, informasjon?
- Hvilken agenda kan ligge bak?

**4. HVORDAN?**
- Hvordan er informasjonen fremskaffet?
- Hvilken metode er brukt (for forskning)?
- Er fremstillingen balansert?
- Hvordan er språket (nøytralt, ladet)?

---

## Ulike kildetyper

**Vitenskapelige kilder**

Fagfellevurderte artikler og fagbøker fra anerkjente forlag.

*Styrker:*
- Kvalitetssikret av eksperter
- Metode gjøres rede for
- Refererer til andre studier

*Svakheter:*
- Kan være utdaterte
- Kan ha faglig uenighet
- Vanskelig tilgjengelig språk

**Leksika og oppslagsverk**

Encyklopedier, Store norske leksikon, Wikipedia.

*Styrker:*
- Gir oversikt
- Nøytral tone (ideelt)
- Lett tilgjengelig

*Svakheter:*
- Kan ha feil (særlig Wikipedia)
- Overfladisk
- Ikke alltid oppdatert

**Nyhetsmedier**

Aviser, TV, radio, nyhetsnettsteder.

*Styrker:*
- Aktuelle
- Journalistiske standarder
- Flere perspektiver

*Svakheter:*
- Kan være vinklet
- Tidsnød gir feil
- Sensasjonalisme

**Sosiale medier og blogger**

Innlegg på Facebook, Twitter, blogger, YouTube.

*Styrker:*
- Kan gi førstehåndsberetninger
- Viser ulike perspektiver
- Aktuelt

*Svakheter:*
- Ofte udokumenterte påstander
- Anonymitet
- Ekkokamre og desinformasjon

---

## Vurderingskriterier

**Relevans**
- Passer kilden til ditt tema?
- Er den oppdatert nok?
- Er detaljeringsnivået riktig?

**Troverdighet**
- Hvem står bak?
- Hvilken kompetanse har de?
- Er kilden fagfellevurdert?

**Objektivitet**
- Er fremstillingen balansert?
- Oppgis interessekonflikter?
- Er språket nøytralt eller ladet?

**Nøyaktighet**
- Stemmer fakta med andre kilder?
- Er det kilder for påstandene?
- Er metoden tydelig?

**Aktualitet**
- Når er kilden publisert?
- Er informasjonen fortsatt gyldig?
- Finnes nyere forskning?

---

## Triangulering

En god strategi er triangulering: Sjekk informasjonen mot flere uavhengige kilder. Hvis flere pålitelige kilder sier det samme, er det mer troverdig.

*Eksempel:*
Du finner en påstand på en blogg. Sjekk om du finner det samme i:
1. En fagbok eller vitenskapelig artikkel
2. En nyhetsartikkel fra seriøs avis
3. Et anerkjent leksikon

Hvis alle tre bekrefter, er påstanden trolig riktig.

---

## Falsk informasjon

Lær å gjenkjenne:

**Desinformasjon:**
Bevisst falsk informasjon spredt for å villede.

**Misinformasjon:**
Feilaktig informasjon spredt uten vond hensikt.

**Propaganda:**
Partisk informasjon for å fremme et syn.

**Clickbait:**
Overdrevne overskrifter for å få klikk.

*Varseltegn:*
- Sensasjonelle påstander uten kilder
- Anonyme eller ukjente avsendere
- Dårlig språk og mange feil
- Appell til frykt eller sinne
- Deling oppfordres
- For godt til å være sant`,
    },
    {
      id: 'norsk-vg2-5-7-def-1',
      type: 'definition',
      title: 'Kritisk kildevurdering - begreper',
      content: `**Kildekritikk:** Systematisk vurdering av kilders troverdighet og relevans.

**Fagfellevurdering:** Eksperter vurderer vitenskapelig arbeid før publisering.

**Triangulering:** Sjekke informasjon mot flere uavhengige kilder.

**Bias (skjevhet):** Systematisk tendens til å fremstille noe ensidig.

**Interessekonflikt:** Når avsenderens interesser kan påvirke innholdet.

**Primærkilde:** Førstehåndsinformasjon (originaltekst, øyenvitneskildring).

**Sekundærkilde:** Andres behandling av primærkilder.

**Desinformasjon:** Bevisst falsk informasjon.

**Misinformasjon:** Utilsiktet spredning av feil.`,
    },
    {
      id: 'norsk-vg2-5-7-example-1',
      type: 'example',
      title: 'Eksempel: Vurdering av en nettside',
      problem: `Du finner en nettside som hevder: "Ny forskning viser at sukker er like avhengighetsskapende som kokain."

Vurder denne kilden kritisk.`,
      solution: `**Kritisk vurdering:**

**1. HVEM?**
- Hvem driver nettsiden? Sjekk "Om oss"
- Er det en kjent organisasjon? Et firma? En privatperson?
- Har de kompetanse på feltet?

*Mulige funn:*
- Hvis det er et helsekostfirma: interessekonflikt
- Hvis det er en privatperson: mangler kanskje kompetanse
- Hvis det er et universitet: mer troverdig

**2. HVA?**
- Hvilken forskning refereres det til? Er det lenke?
- Er påstanden "like avhengighetsskapende som kokain" nøyaktig?
- Er dette sensasjonalisering?

*Mulige funn:*
- Ofte er originale studier mer nyanserte
- "Lignende mekanismer" er ikke det samme som "like avhengighetsskapende"

**3. HVORFOR?**
- Hva er formålet med artikkelen?
- Er det for å informere, skremme, selge noe?

*Mulige funn:*
- Hvis det selges produkter på siden: mistenkelig
- Clickbait-overskrift tyder på ønske om klikk/delinger

**4. TRIANGULERING:**
Sjekk påstanden mot:
- Helsenorge.no eller andre offisielle kilder
- Vitenskapelige artikler (Google Scholar)
- Store norske leksikon

*Mulige funn:*
- Forskning viser visse likheter i hjerneaktivitet
- Men "like avhengighetsskapende" er en overdrivelse
- Seriøse kilder er mer nyanserte

**Konklusjon:**
Påstanden er sannsynligvis overdrevet eller sensasjonalisert. Den originale forskningen finnes, men sier noe mer forsiktig. Vær skeptisk til sterke påstander som mangler nyansering og kilder.`,
    },
    {
      id: 'norsk-vg2-5-7-tip-1',
      type: 'tip',
      title: 'Tips for kritisk kildelesing',
      content: `**Sjekkliste for nettsider:**

**1. Sjekk URL-en:**
- .edu, .gov, .no (offisiell) er ofte mer pålitelig enn tilfeldige domener
- Er det en kjent organisasjon?

**2. Finn "Om oss":**
- Hvem driver siden?
- Hvilke interesser har de?

**3. Se etter kilder:**
- Henvises det til forskning?
- Kan du finne originalkilden?

**4. Vurder språket:**
- Er det nøytralt eller ladet?
- Er det mange skrivefeil?

**5. Sjekk dato:**
- Når er det publisert?
- Er det oppdatert?

**6. Triangulér:**
- Finn minst to andre kilder
- Sier de det samme?

**Sjekkliste for sosiale medier:**

- Hvem delte dette?
- Er det satire?
- Er bildet/videoen ekte?
- Kan du finne originalen?
- Bruk omvendt bildesøk

**Nyttige verktøy:**
- Faktisk.no (norsk faktasjekk)
- Snopes.com (internasjonal faktasjekk)
- Google Scholar (vitenskapelige artikler)
- Store norske leksikon`,
    },
    {
      id: 'norsk-vg2-5-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder kilder kritisk.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en nettside om et tema du er interessert i. Vurder den etter de fire hovedspørsmålene (hvem, hva, hvorfor, hvordan).',
            solution: 'Svar bør inneholde systematisk vurdering av avsender, innhold, formål og metode, med konkret referanse til nettsiden.',
          },
          {
            label: 'b',
            task: 'Finn en nyhetsartikkel og vurder om den er pålitelig. Begrunn.',
            solution: 'Svar bør vurdere: kilde, balanse, kilder oppgitt, språk, agenda. Konklusjon med begrunnelse.',
          },
          {
            label: 'c',
            task: 'Bruk triangulering: Sjekk en påstand du har funnet mot tre ulike kilder. Hva finner du?',
            solution: 'Svar bør vise konkret sammenligning av tre kilder og konkludere om påstandens troverdighet.',
          },
        ],
        solution: 'Kritisk kildevurdering er en ferdighet som krever øvelse og systematikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser falsk informasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på desinformasjon og misinformasjon?',
            solution: 'Desinformasjon er bevisst falsk informasjon (villedende hensikt). Misinformasjon er feilaktig informasjon som spres uten vond hensikt (uvitende).',
          },
          {
            label: 'b',
            task: 'Finn et eksempel på en falsk eller misvisende påstand som har spredt seg. Hvordan kunne man avslørt den?',
            solution: 'Svar bør beskrive et konkret eksempel og vise hvordan kritisk vurdering (kildesjekk, triangulering, faktasjekk) kunne avslørt feilen.',
          },
        ],
        solution: 'Å forstå hvordan falsk informasjon spres, gjør deg bedre rustet til å oppdage den.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er triangulering i kildekritisk sammenheng?',
        options: [
          'Å dele en tekst inn i tre deler for analyse',
          'Å sjekke informasjonen mot flere uavhengige kilder',
          'Å bruke tre ulike retoriske virkemidler',
          'Å skrive tre utkast av en tekst',
        ],
        answer: 1,
        solution: 'Triangulering betyr å sjekke informasjon mot flere uavhengige kilder. Hvis tre ulike, pålitelige kilder bekrefter samme informasjon, er den trolig riktig. Begrepet er hentet fra navigasjon, der man bruker tre punkter for å bestemme en posisjon.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse er et varseltegn på at en nettside kan inneholde falsk informasjon?',
        options: [
          'Nettsiden oppgir kilder og forfatternavn',
          'Nettsiden har en nøytral og saklig tone',
          'Nettsiden bruker sensasjonelle påstander og oppfordrer til deling',
          'Nettsiden er tilknyttet et universitet eller forskningsinstitusjon',
        ],
        answer: 2,
        solution: 'Sensasjonelle påstander og oppfordring til deling er typiske varseltegn for falsk informasjon. Seriøse kilder har nøytral tone, oppgir forfatter og kilder, og er gjerne tilknyttet kjente institusjoner. Clickbait og deleoppfordringer tyder på at formålet er å spre innholdet, ikke å informere.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar de fem vurderingskriteriene for kilder: relevans, troverdighet, objektivitet, nøyaktighet og aktualitet. Gi et kort eksempel for hvert.',
        solution: 'Relevans: Passer kilden til temaet? En artikkel om klimaendringer er ikke relevant for en oppgave om romantikken. Troverdighet: Er avsenderen pålitelig? En professor i klimaforskning er mer troverdig om klima enn en blogger. Objektivitet: Er fremstillingen balansert? En artikkel fra et oljefirma om klima kan være partisk. Nøyaktighet: Stemmer fakta? Sjekk tall og påstander mot andre kilder. Aktualitet: Er kilden oppdatert? En bok fra 1990 om internett er utdatert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Ranger disse kildene etter troverdighet for en oppgave om norsk litteraturhistorie (fra mest til minst troverdig): Wikipedia, en fagbok fra Universitetsforlaget, et blogginnlegg, Store norske leksikon, en artikkel i et vitenskapelig tidsskrift. Begrunn rangeringen.',
        solution: 'Mest troverdig: (1) Vitenskapelig tidsskriftartikkel - fagfellevurdert av eksperter. (2) Fagbok fra Universitetsforlaget - seriøst forlag med redaksjonell kontroll. (3) Store norske leksikon - fagansvarlige og redaksjon. (4) Wikipedia - redigert av frivillige, men med referanser. (5) Blogginnlegg - ukjent kompetanse, ingen kvalitetskontroll. Begrunnelse: Gradvis mindre kvalitetskontroll og fagkompetanse. Wikipedia kan likevel være nyttig som startpunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-7-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder nettsiden fra eksempelet i kapittelet (om sukker og avhengighet) ved hjelp av de fem vurderingskriteriene. Forklar hva du konkluderer.',
        solution: 'Relevans: Temaet (sukker og helse) er relevant, men overskriften er misvisende. Troverdighet: Avhenger av hvem som står bak - et helsekostfirma er mindre troverdig enn et universitet. Objektivitet: Påstanden er ensidig og sensasjonell. Nøyaktighet: "Like avhengighetsskapende som kokain" er trolig en overdrivelse av forskningen. Aktualitet: "Ny forskning" er vagt - hvilket år, hvilken studie? Konklusjon: Kilden er trolig upålitelig og bør verifiseres gjennom triangulering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-7-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva "bias" (skjevhet) betyr og gi tre eksempler på bias i ulike typer kilder.',
        hints: [
          'Tenk på politisk, økonomisk og kulturell bias.',
          'Alle har bias - det viktige er å gjenkjenne det.',
        ],
        solution: 'Bias er en systematisk skjevhet i fremstillingen. Eksempler: (1) Politisk bias: En partiavis som konsekvent fremstiller sitt parti i positivt lys. (2) Økonomisk bias: Et legemiddelfirma som bare publiserer studier der medisinen virker. (3) Bekreftelsesbias: En forsker som ubevisst tolker data i retning av sin hypotese. Alle kilder kan ha bias - det viktige er å være bevisst på det og sjekke mot andre kilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-7-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: "Wikipedia er like troverdig som Store norske leksikon." Bruk argumenter for og mot, og begrunn din konklusjon.',
        hints: [
          'Tenk på hvem som skriver, redigeringsprosess og feilhåndtering.',
          'Se på studier som har sammenlignet Wikipedia med tradisjonelle leksika.',
        ],
        solution: 'For: Studier har vist at Wikipedia har tilsvarende feilnivå som tradisjonelle leksika. Wikipedia oppdateres raskere og er bredere. Mange artikler er skrevet av eksperter. Mot: Wikipedia kan redigeres av hvem som helst, har risiko for vandalisering, mangler konsekvent fagansvar, og kvaliteten varierer sterkt mellom artikler. SNL har fagansvarlige med dokumentert kompetanse. Konklusjon: Wikipedia kan være like nøyaktig for veletablerte temaer, men SNL har mer konsekvent kvalitet. For akademiske formål er SNL tryggere, men Wikipedia er nyttig som startpunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-7-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn en aktuell nyhetssak som dekkes av minst tre ulike medier. Sammenlign dekningen: Hva vektlegges? Hva utelates? Hvilken vinkling har de? Bruk begrepene fra kapittelet.',
        hints: [
          'Velg medier med ulik profil - f.eks. NRK, VG og en uavhengig nettavis.',
          'Se på overskrifter, kilder som siteres, og vinkling.',
        ],
        solution: 'Analysen bør: (1) Identifisere forskjeller i vinkling (hva som vektlegges). (2) Peke på hva som utelates i de ulike dekkingene. (3) Vurdere kildebruk (hvem siteres). (4) Vurdere språk (nøytralt vs. ladet). (5) Drøfte hvorfor dekningen er forskjellig (redaksjonell linje, målgruppe, format). (6) Konkludere om hvilken dekning som gir det mest balanserte bildet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-7-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort veiledning (300-400 ord) for en yngre elev om hvordan man kan vurdere om informasjon på nettet er til å stole på. Bruk et klart og tilgjengelig språk.',
        hints: [
          'Målgruppen er 14-15-åringer - skriv forståelig.',
          'Bruk konkrete eksempler de kan kjenne seg igjen i.',
          'Organiser teksten med tydelige overskrifter eller punkter.',
        ],
        solution: 'Veiledningen bør: (1) Forklare hvorfor kildekritikk er viktig med et relaterbart eksempel. (2) Gi konkrete, enkle sjekklister (sjekk hvem, sjekk kilder, sjekk mot andre). (3) Nevne nyttige verktøy (Faktisk.no, omvendt bildesøk). (4) Gi eksempler på vanlige feller (clickbait, deling uten sjekking). (5) Oppmuntre til nysgjerrighet heller enn kynisme. Språket bør være klart, direkte og uten for mye fagterminologi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.8: Praktisk tekstutvikling og revisjon
// ============================================================================

export const CHAPTER_NORSK_VG2_5_8: TextbookChapter = {
  id: 'norsk-vg2-5-8',
  courseId: 'norsk-vg2',
  chapterNumber: '5.8',
  title: 'Praktisk tekstutvikling og revisjon',
  description: 'Lær praktiske verktøy for å utvikle og forbedre egne tekster gjennom tilbakemeldinger og språkbevissthet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke tilbakemeldinger og kunnskap om språk til å utvikle egne tekster',
    'vurdere og revidere egne tekster ut fra faglige kriterier',
  ],
  content: [
    {
      id: 'norsk-vg2-5-8-intro',
      type: 'text',
      content: `## Tekstutvikling - fra førsteutkast til ferdig tekst

God skriving er god omskriving. De fleste tekster blir ikke gode på første forsøk. Profesjonelle forfattere, journalister og akademikere arbeider alle med flere utkast og bruker tilbakemeldinger aktivt for å forbedre tekstene sine.

**Hvorfor revisjon er viktig**

- Førsteutkastet fanger ideene - revisjonen former dem
- Avstand til teksten gir nye perspektiver
- Tilbakemeldinger avdekker blindsoner
- Revisjon styrker både innhold og språk
- Øvelse i revisjon gjør deg til en bedre skribent

**Revisjonsprosessen**

En systematisk revisjonsprosess har flere nivåer:

**Nivå 1: Innhold og struktur**
- Er hovedbudskapet tydelig?
- Er argumentasjonen logisk?
- Er det nok støtte for påstandene?
- Er strukturen hensiktsmessig?

**Nivå 2: Avsnitt og sammenheng**
- Har hvert avsnitt ett hovedpoeng?
- Er overgangene mellom avsnitt gode?
- Er det god tekstbinding?

**Nivå 3: Setninger og språk**
- Er setningene klare og varierte?
- Er ordvalget presist?
- Er tonen passende?

**Nivå 4: Korrektur**
- Rettskriving
- Tegnsetting
- Formalia (referanser, format)

---

## Praktiske verktøy for selvvurdering

**Sjekkliste for egen tekst**

Bruk denne sjekklisten når du reviderer:

**Innledning:**
- [ ] Fanger oppmerksomheten
- [ ] Presenterer tema tydelig
- [ ] Gir en veiviser for teksten
- [ ] Har en klar problemstilling/tese

**Hoveddel:**
- [ ] Hvert avsnitt har ett hovedpoeng
- [ ] Påstandene er begrunnet
- [ ] Kilder brukes korrekt
- [ ] Argumentasjonen er logisk
- [ ] Motargumenter behandles

**Avslutning:**
- [ ] Oppsummerer hovedpunktene
- [ ] Knytter tilbake til innledningen
- [ ] Gir et tydelig svar/konklusjon
- [ ] Avslutter på en minneverdig måte

**Språk og form:**
- [ ] Klar og presis formulering
- [ ] Variasjon i setningsstruktur
- [ ] Passende fagspråk
- [ ] Korrekt tegnsetting
- [ ] Ingen skrivefeil

---

## Vurderingskriterier for fagartikkel

Når du vurderer egen eller andres tekst, kan du bruke disse kriteriene:

**Høy måloppnåelse:**
- Tydelig og velformulert problemstilling
- Selvstendig og reflektert drøfting
- God bruk av kilder som støtter egne poenger
- Klar struktur med god sammenheng
- Presist og variert språk
- Kritisk distanse til stoffet

**Middels måloppnåelse:**
- Problemstilling er til stede, men kan være uklar
- Noe drøfting, men kan mangle dybde
- Kilder brukes, men ikke alltid hensiktsmessig
- Struktur er grei, men overganger kan være svake
- Språket er forståelig, men kan være upresist
- Noe refleksjon, men mangler kritisk blikk

**Lav måloppnåelse:**
- Uklar eller manglende problemstilling
- Referat fremfor drøfting
- Manglende eller feil kildebruk
- Uklar struktur
- Språklige feil som hindrer forståelse
- Lite egen refleksjon

---

## Hvordan lese egen tekst kritisk

Det er vanskelig å se egen tekst med friske øyne. Her er noen strategier:

**1. La teksten ligge**
Legg teksten bort minst et døgn før du reviderer. Avstand gir perspektiv.

**2. Les høyt**
Når du leser teksten høyt, hører du lettere:
- Unødvendig lange setninger
- Gjentakelser
- Uklare formuleringer
- Manglende flyt

**3. Bytt perspektiv**
Forestill deg at du er:
- En kritisk sensor
- En som ikke kan noe om temaet
- En som er uenig med deg

**4. Bruk sjekklisten systematisk**
Gå gjennom teksten flere ganger - fokuser på ett element av gangen.

**5. Print ut teksten**
Vi leser annerledes på papir enn på skjerm. Feil vi overser på skjerm, blir synlige på papir.`,
    },
    {
      id: 'norsk-vg2-5-8-example-1',
      type: 'example',
      title: 'Før/etter: Tekstforbedring i praksis',
      problem: `Se hvordan et avsnitt kan forbedres gjennom revisjon.

**FØRSTEUTKAST:**
"Romantikken var viktig. Den kom etter opplysningstiden. Forfatterne skrev om følelser. De skrev også om natur. Norge ble selvstendig på den tiden. Wergeland og Welhaven var viktige forfattere. De var uenige om mye."

Hva er problemene med dette avsnittet?`,
      solution: `**PROBLEMER I FØRSTEUTKASTET:**
1. Korte, hakkete setninger uten sammenheng
2. Ingen tekstbinding mellom setningene
3. Vag og lite presis ("viktig", "mye")
4. Mangler utdyping og eksempler
5. Ingen klar struktur eller hovedpoeng

**REVIDERT VERSJON:**
"Romantikken representerte et markant brudd med opplysningstidens fornuftstro. Mens opplysningstiden hadde satt rasjonalitet og vitenskap i sentrum, vendte romantikerne seg mot følelser, fantasi og natur som kilder til innsikt. I Norge falt denne omveltningen sammen med kampen for nasjonal selvstendighet etter 1814, noe som ga romantikken en særegen nasjonal karakter. To sentrale skikkelser var Henrik Wergeland og Johan Sebastian Welhaven, som til tross for felles romantiske idealer sto steilt mot hverandre i synet på hvordan norsk kultur og språk skulle utvikles."

**HVA ER FORBEDRET:**
1. *Tekstbinding:* "Mens", "noe som", "til tross for" skaper sammenheng
2. *Presisjon:* "representerte et markant brudd" i stedet for "var viktig"
3. *Utdyping:* Forklarer hva romantikken reagerte mot
4. *Kontekst:* Knytter til norsk selvstendighet
5. *Nyansering:* "felles romantiske idealer" og "steilt mot hverandre"
6. *Ett hovedpoeng:* Romantikken som brudd og nasjonal begivelse`,
    },
    {
      id: 'norsk-vg2-5-8-example-2',
      type: 'example',
      title: 'Kommentert revisjonsprosess',
      problem: `Følg en reell revisjonsprosess med kommentarer.

**FØRSTEUTKAST (med kommentarer):**
"I dag bruker alle sosiale medier. [For generelt - hvem er "alle"?] Det er bra og dårlig. [Vagt - hva er bra/dårlig?] Mange unge sliter med mental helse. [Kobling til forrige setning mangler] Forskning viser at det er en sammenheng. [Hvilken forskning? Sammenheng mellom hva?] Vi burde gjøre noe med det. [Hva konkret?]"`,
      solution: `**REVISJONSSTEG:**

**Steg 1: Presiser påstandene**
- "alle" -> "ni av ti nordmenn mellom 16 og 79 år"
- "bra og dårlig" -> konkrete fordeler og ulemper

**Steg 2: Legg til kilder**
- Finn statistikk fra SSB eller Medietilsynet
- Finn forskning om sosiale medier og mental helse

**Steg 3: Skap sammenheng**
- Legg til setninger som binder poengene sammen
- Bruk tekstbindingsord

**Steg 4: Vær konkret**
- Spesifiser hva som kan gjøres

**REVIDERT VERSJON:**
"Ifølge Medietilsynets undersøkelse fra 2023 bruker ni av ti nordmenn sosiale medier daglig, og andelen er enda høyere blant ungdom. Denne utbredte bruken har åpenbare fordeler: sosiale medier gjør det lettere å holde kontakt, finne informasjon og delta i offentlig debatt. Samtidig peker stadig flere studier på bekymringsfulle sammenhenger. Forskning fra Folkehelseinstituttet (2022) viser at høyt forbruk av sosiale medier korrelerer med økt forekomst av angst og depresjon blant unge. Selv om sammenhengen ikke nødvendigvis er kausal, tyder funnene på at vi trenger bevissthet rundt egen mediebruk. Konkret kan det innebære å sette grenser for skjermtid, være kritisk til innhold som vekker negative følelser, og prioritere ansikt-til-ansikt-kontakt."`,
    },
    {
      id: 'norsk-vg2-5-8-def-1',
      type: 'definition',
      title: 'Vanlige språkfeil hos VG2-elever',
      content: `**GRAMMATISKE FEIL**

**Subjekt-verbal-kongruens:**
- FEIL: "Elevene liker at man får god tilbakemelding" (blanding av flertall og ubestemt)
- RIKTIG: "Elevene liker å få god tilbakemelding" / "Man liker å få god tilbakemelding"

**Preposisjonsbruk:**
- FEIL: "interessert på", "fokusere på" (dansk innflytelse ved "interessert")
- RIKTIG: "interessert i", "fokusere på" (fokusere på er faktisk riktig!)
- FEIL: "på grunn at"
- RIKTIG: "på grunn av at" / "fordi"

**Sammensatte ord:**
- FEIL: "selv om" (som adverb), "i følge" (preposisjon)
- RIKTIG: "selv om" (konjunksjon - to ord), "ifølge" (preposisjon - ett ord)
- FEIL: "idag", "imorgen"
- RIKTIG: "i dag", "i morgen"

---

**STILISTISKE FEIL**

**Gjentakelser:**
- FEIL: "Teksten handler om. I teksten ser vi. Forfatteren av teksten..."
- RIKTIG: Varier med synonymer og pronomen: "Den handler om... Her ser vi... Forfatteren..."

**Uklare formuleringer:**
- FEIL: "Det er på en måte sånn at..."
- RIKTIG: Sterk eller svekk påstanden tydelig

**Muntlig stil i skriftlig tekst:**
- FEIL: "Liksom, det er jo ganske tydelig at..."
- RIKTIG: "Det er tydelig at..."

---

**STRUKTURELLE FEIL**

**Avsnittsinndeling:**
- FEIL: Ett langt avsnitt med mange temaer
- RIKTIG: Nytt avsnitt for hvert nytt hovedpoeng

**Tekstbinding:**
- FEIL: Setninger uten sammenheng ("Ibsen skrev Et dukkehjem. Nora er gift med Torvald.")
- RIKTIG: Bruk tekstbindingsord ("Et dukkehjem handler om Nora, som er gift med Torvald...")

**Temasetninger:**
- FEIL: Avsnitt uten tydelig hovedpoeng
- RIKTIG: Start avsnitt med setning som sier hva avsnittet handler om`,
    },
    {
      id: 'norsk-vg2-5-8-tip-1',
      type: 'tip',
      title: 'Hvordan bruke tilbakemeldinger',
      content: `**TOLKE LÆRERKOMMENTARER**

Vanlige kommentarer og hva de betyr:

**"Utdyp" / "Forklar nærmere":**
Du har en god idé, men leseren trenger mer informasjon for å forstå. Legg til eksempler, forklaringer eller begrunnelser.

**"Kilde?" / "Dokumenter":**
Du fremsetter en påstand som trenger støtte. Finn en kilde som bekrefter det du skriver.

**"Uklart" / "Hva mener du?":**
Formuleringen er forvirrende. Skriv om setningen - ofte hjelper det å tenke: "Hva vil jeg egentlig si her?"

**"Sammenheng?" / "Overgang":**
Teksten hopper mellom temaer. Legg til setninger som binder avsnittene sammen.

**"Struktur" / "Organiser bedre":**
Innholdet er kanskje bra, men rekkefølgen er forvirrende. Lag en disposisjon og omorganiser.

---

**PRIORITERE HVA SOM SKAL RETTES**

1. **Først:** Strukturelle problemer (rekkefølge, avsnitt)
2. **Deretter:** Innholdsproblemer (argumentasjon, kildebruk)
3. **Så:** Språklige problemer (formulering, ordvalg)
4. **Til slutt:** Korrektur (skrivefeil, tegnsetting)

---

**IMPLEMENTERE ENDRINGER SYSTEMATISK**

1. Les alle kommentarene først - få oversikt
2. Grupper kommentarene etter type
3. Begynn med de største problemene
4. Gjør én ting av gangen
5. Les teksten på nytt etter hver runde
6. Sjekk at endringene ikke skaper nye problemer`,
    },
    {
      id: 'norsk-vg2-5-8-example-3',
      type: 'example',
      title: 'Vanlige feil og hvordan rette dem',
      problem: `Her er eksempler på vanlige feil med forklaring og løsning.`,
      solution: `**FEIL 1: Manglende temasetning**

*Problematisk avsnitt:*
"Ibsen bruker mye symbolikk. Dukkehuset er et symbol. Nora danser tarantella. Brevkassen er viktig i stykket. Lampen er også et symbol."

*Problem:* Ingen overordnet poeng - bare liste med observasjoner.

*Forbedret:*
"Ibsen bruker symbolikk gjennomgående i Et dukkehjem for å forsterke temaene i stykket. Det mest sentrale symbolet er selve dukkehuset, som representerer Noras innestengte tilværelse. Også brevkassen får symbolsk betydning som både trussel og mulig befrielse..."

---

**FEIL 2: Svak argumentasjon**

*Problematisk:*
"Romantikken var en bra periode for norsk litteratur."

*Problem:* "Bra" er vagt, og påstanden er udokumentert.

*Forbedret:*
"Romantikken var en formativ periode for norsk litteratur. I denne perioden ble grunnlaget lagt for en distinkt norsk litterær tradisjon, med verk som Wergelands 'Skabelsen, Mennesket og Messias' (1830) og Asbjørnsen og Moes folkeeventyrsamlinger (1841-44)."

---

**FEIL 3: Feilaktig kildebruk**

*Problematisk:*
"Det er mange som mener at klimaendringene er menneskeskapte."

*Problem:* Vagt ("mange"), ingen kilde, passiv formulering.

*Forbedret:*
"Ifølge FNs klimapanel (IPCC, 2021) er det 'utvetydig' at menneskers utslipp av klimagasser har forårsaket den observerte oppvarmingen."`,
    },
    {
      id: 'norsk-vg2-5-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk sjekklisten fra kapittelet til å vurdere følgende innledning til en fagartikkel om sosiale medier. Noter minst tre ting som fungerer og tre ting som kan forbedres.',
        subTasks: [
          {
            label: 'a',
            task: '"Sosiale medier. I dag bruker nesten alle sosiale medier. Det er både bra og dårlig. I denne teksten skal jeg skrive om sosiale medier og unge. Først skal jeg skrive om fordeler og så om ulemper."',
            solution: 'Fungerer: Presenterer tema, gir veiviser, nevner struktur. Kan forbedres: Kjedelig åpning, for vagt ("bra og dårlig"), mangler problemstilling/tese, for muntlig stil.',
          },
        ],
        solution: 'Innledningen har grunnstrukturen på plass, men mangler engasjerende åpning, presis problemstilling og akademisk tone.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Rett feilene i følgende setninger. Forklar hva som var feil.',
        subTasks: [
          {
            label: 'a',
            task: '"Forfatteren er interessert på å skrive om naturen."',
            solution: 'Riktig: "Forfatteren er interessert i å skrive om naturen." Feil: Preposisjonen "på" skal være "i" ved "interessert".',
          },
          {
            label: 'b',
            task: '"På grunn at mange elever sliter, bør skolen gjøre mer."',
            solution: 'Riktig: "På grunn av at mange elever sliter..." eller "Fordi mange elever sliter..." Feil: Mangler "av" i "på grunn av at".',
          },
          {
            label: 'c',
            task: '"Det er liksom ganske tydelig at teksten handler om kjærlighet."',
            solution: 'Riktig: "Det er tydelig at teksten handler om kjærlighet." Feil: "Liksom" og "ganske" er unødvendige fyllord som svekker påstanden.',
          },
        ],
        solution: 'Alle disse feilene er vanlige i elevtekster. Bevissthet om dem hjelper deg å unngå dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse setningene har best tekstbinding?',
        options: [
          '"Ibsen skrev Et dukkehjem. Nora er hovedpersonen. Hun er gift med Torvald."',
          '"Ibsen skrev Et dukkehjem, der Nora er hovedpersonen. Hun er gift med Torvald, og ekteskapet er sentralt i handlingen."',
          '"Ibsen skrev Et dukkehjem. Et dukkehjem handler om Nora. Nora er gift med Torvald. Torvald er bankdirektør."',
          '"Forfatteren Ibsen, han skrev Et dukkehjem. Der har vi Nora som er gift med Torvald."',
        ],
        answer: 1,
        solution: 'Alternativ B har best tekstbinding fordi det bruker relativsetning ("der Nora er hovedpersonen") og konjunksjon ("og ekteskapet er sentralt") til å skape sammenheng mellom opplysningene. De andre alternativene er enten hakkete (A, C) eller muntlige (D).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Her er et avsnitt med flere problemer. Identifiser minst fire problemer og skriv en forbedret versjon.',
        subTasks: [
          {
            label: 'a',
            task: '"Temaet i teksten er kjærlighet. Forfatteren skriver om kjærlighet. Vi kan se at kjærlighet er viktig fordi personene i teksten er forelsket. Det er en bra tekst. Kjærlighet er et tema som mange skriver om."',
            solution: 'Problemer: (1) Gjentakelse av "kjærlighet" 5 ganger. (2) Ingen konkret analyse - hva i teksten viser kjærlighet? (3) Vag vurdering ("bra tekst"). (4) Siste setning er irrelevant. (5) Manglende tekstbinding.',
          },
        ],
        hints: ['Se etter gjentakelser, vage formuleringer og manglende konkret analyse.'],
        solution: 'Forbedret versjon: "Kjærlighet står sentralt i teksten, noe som kommer til uttrykk gjennom hovedpersonenes handlinger og dialoger. Når Nora ofrer sin egen sikkerhet for å redde Torvalds liv, viser det en selvoppofrende kjærlighet. Samtidig problematiserer teksten dette idealet ved å vise hvordan kjærligheten også kan være innestengende..."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tenk deg at du har fått følgende tilbakemeldinger på en tekst. Forklar hva hver kommentar betyr, og beskriv konkret hva du ville gjort for å forbedre teksten.',
        subTasks: [
          {
            label: 'a',
            task: 'Kommentar: "Utdyp!" (ved påstanden "Ibsen var en viktig forfatter")',
            solution: 'Betyr: Påstanden er for generell og trenger begrunnelse. Tiltak: Legg til konkrete eksempler på hvorfor Ibsen var viktig - hans innflytelse, hvilke verk, hva han bidro med.',
          },
          {
            label: 'b',
            task: 'Kommentar: "Overgang?" (mellom to avsnitt)',
            solution: 'Betyr: Avsnittene henger ikke sammen - leseren forstår ikke forbindelsen. Tiltak: Legg til en setning som knytter det forrige avsnittet til det neste, f.eks. "Dette får konsekvenser også for..."',
          },
          {
            label: 'c',
            task: 'Kommentar: "Kilde?" (ved en faktapåstand)',
            solution: 'Betyr: Påstanden trenger dokumentasjon. Tiltak: Finn en pålitelig kilde som støtter påstanden, og legg til referanse i teksten.',
          },
        ],
        solution: 'Å forstå lærerkommentarer er nøkkelen til å forbedre tekstene dine. De fleste kommentarer peker på konkrete ting du kan gjøre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les følgende elevtekst og gi skriftlig tilbakemelding. Nevn to ting som fungerer godt og tre konkrete forbedringspunkter med forslag til hvordan de kan løses.',
        subTasks: [
          {
            label: 'a',
            task: '"I Et dukkehjem ser vi at Nora utvikler seg. Hun starter som en som bare tenker på seg selv og ender opp som en selvstendig kvinne. Ibsen viser dette gjennom hele stykket. Det er mange symboler i teksten, for eksempel dukkehuset og tarantellaen. Konklusjonen er at Nora går fordi hun må finne seg selv."',
            solution: 'Fungerer: Har tydelig hovedpåstand om utvikling, nevner relevante symboler. Forbedringspunkter: (1) "bare tenker på seg selv" er en misforståelse - utdyp med teksteksempler. (2) "Ibsen viser dette" - hvordan konkret? (3) Symbolene nevnes men analyseres ikke - forklar hva de symboliserer.',
          },
        ],
        hints: ['Vær konkret og konstruktiv. Forklar ikke bare hva som er feil, men hvordan det kan forbedres.'],
        solution: 'God tilbakemelding er spesifikk, konstruktiv og peker på konkrete løsninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-8-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en tekst du har skrevet tidligere (f.eks. en fagartikkel eller et analysestykke). Gå gjennom teksten systematisk med sjekklisten fra kapittelet og gjør følgende:',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser minst fem konkrete forbedringspunkter i din egen tekst.',
            solution: 'Svarene vil variere, men bør identifisere spesifikke problemer knyttet til innhold, struktur eller språk.',
          },
          {
            label: 'b',
            task: 'Velg de tre viktigste forbedringspunktene og forklar hvorfor du prioriterer akkurat disse.',
            solution: 'God prioritering fokuserer på problemer som påvirker forståelsen mest, f.eks. strukturelle problemer før språklige detaljer.',
          },
          {
            label: 'c',
            task: 'Revider teksten basert på de tre prioriterte punktene.',
            solution: 'Den reviderte teksten bør vise tydelig forbedring på de identifiserte områdene.',
          },
        ],
        hints: [
          'Les teksten høyt for å høre svakheter.',
          'Fokuser først på de største problemene.',
        ],
        solution: 'Systematisk selvvurdering er en ferdighet som krever øvelse, men som gjør deg til en mye bedre skribent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-8-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort notat (200-300 ord) der du reflekterer over din egen skriveprosess. Svar på følgende spørsmål:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er dine styrker som skribent?',
            solution: 'Svar bør være konkret og realistisk, f.eks. "Jeg er flink til å finne gode argumenter" eller "Jeg har et variert ordforråd".',
          },
          {
            label: 'b',
            task: 'Hvilke typer feil gjør du oftest?',
            solution: 'Svar bør gjenkjenne konkrete svakheter, f.eks. "Jeg glemmer ofte å lage overganger mellom avsnitt" eller "Jeg har lett for å gjenta de samme ordene".',
          },
          {
            label: 'c',
            task: 'Hva kan du gjøre konkret for å forbedre deg på ett område?',
            solution: 'Svar bør inneholde en konkret strategi, f.eks. "Jeg skal alltid lese teksten høyt for å finne gjentakelser før jeg leverer".',
          },
        ],
        hints: ['Vær ærlig med deg selv. Alle har forbedringspotensial.'],
        solution: 'Metakognisjon - å tenke over egen tenkning og læring - er nøkkelen til utvikling. Ved å bli bevisst dine egne mønstre kan du arbeide målrettet med forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.9: Argumentasjonsteori og feilslutninger
// ============================================================================

export const CHAPTER_NORSK_VG2_5_9: TextbookChapter = {
  id: 'norsk-vg2-5-9',
  courseId: 'norsk-vg2',
  chapterNumber: '5.9',
  title: 'Argumentasjonsteori og feilslutninger',
  description: 'Lær å analysere argumenter og gjenkjenne logiske feilslutninger i debatter, reklame og sosiale medier.',
  estimatedMinutes: 70,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'analysere og tolke tekster med bruk av fagbegreper',
    'bruke og variere språklige og retoriske virkemidler',
    'vurdere argumentasjon og kilder kritisk',
  ],
  content: [
    {
      id: 'norsk-vg2-5-9-intro',
      type: 'text',
      content: `## Argumentasjonsteori - kunsten å bygge og vurdere argumenter

Evnen til å vurdere argumenter kritisk er en av de viktigste ferdighetene i et demokratisk samfunn. Hver dag møter vi påstander som forsøker å overbevise oss - i nyheter, reklame, politisk debatt og sosiale medier. For å navigere i dette landskapet trenger vi verktøy til å skille gode argumenter fra dårlige.

**Hva er et argument?**

Et argument er en sammensetning av påstander der én påstand (konklusjonen) støttes av andre påstander (premissene). Formålet er å overbevise noen om at konklusjonen er sann eller sannsynlig.

Eksempel på et enkelt argument:
- *Premiss 1:* Alle mennesker er dødelige.
- *Premiss 2:* Sokrates er et menneske.
- *Konklusjon:* Sokrates er dødelig.

**Argumentets grunnstruktur**

Ethvert argument har tre hovedelementer:

*Påstand (tese/konklusjon):* Det du vil ha akseptert - hovedbudskapet ditt.

*Begrunnelse (premiss/warrant):* Hvorfor påstanden er sann - den logiske koblingen.

*Belegg (støtte/backing):* Fakta, eksempler eller data som støtter begrunnelsen.

Eksempel:
- *Påstand:* Vi bør innføre gratis skolemåltid.
- *Begrunnelse:* Fordi det vil gi bedre konsentrasjon og læringsutbytte.
- *Belegg:* Forskning fra Sverige viser at elever presterer 15% bedre på prøver etter innføring av gratis lunsj.

**Gyldige vs ugyldige argumenter**

Et argument kan være *gyldig* eller *ugyldig*, og *sant* eller *usant*:

*Gyldig argument:* Konklusjonen følger logisk av premissene. Hvis premissene er sanne, må konklusjonen være sann.

*Ugyldig argument:* Konklusjonen følger ikke logisk av premissene, selv om premissene er sanne.

*Sant argument:* Et gyldig argument der premissene faktisk er sanne.

Et argument kan være logisk gyldig men likevel ha usanne premisser:
- Alle fugler kan fly. (Usant - pingviner kan ikke fly)
- En spurv er en fugl.
- Derfor kan en spurv fly. (Logisk gyldig, men premissen er feil)

**Styrken i et argument**

Et godt argument kjennetegnes ved:
1. Relevante premisser som faktisk støtter konklusjonen
2. Tilstrekkelige premisser - nok støtte til å gjøre konklusjonen sannsynlig
3. Akseptable premisser som mottakeren kan godta
4. Tydelig og ærlig fremstilling uten manipulasjon`,
    },
    {
      id: 'norsk-vg2-5-9-toulmin',
      type: 'text',
      content: `## Toulmins argumentasjonsmodell

Den britiske filosofen Stephen Toulmin (1922-2009) utviklet en modell for å analysere argumenter som brukes mye i retorikk og kommunikasjon. Modellen er mer fleksibel enn klassisk logikk og passer godt til hverdagslige argumenter.

**De seks elementene i Toulmins modell**

*1. Påstand (Claim):*
Det du hevder eller vil ha akseptert. Kan være en faktapåstand, verdipåstand eller handlingspåstand.
- Eksempel: "Skolen bør tilby flere valgfag."

*2. Belegg (Data/Grounds):*
Fakta, bevis eller informasjon som støtter påstanden.
- Eksempel: "Undersøkelser viser at elever er mer motiverte når de kan velge fag selv."

*3. Hjemmel (Warrant):*
Den underliggende regelen eller prinsippet som kobler belegg til påstand.
- Eksempel: "Motiverte elever lærer bedre og får bedre resultater."

*4. Ryggdekning (Backing):*
Støtte for hjemmelen - hvorfor vi kan stole på prinsippet.
- Eksempel: "Pedagogisk forskning de siste 30 årene bekrefter sammenhengen mellom motivasjon og læring."

*5. Styrkemarkør (Qualifier):*
Indikerer hvor sikker konklusjonen er: "sannsynligvis", "i de fleste tilfeller", "med stor sikkerhet".
- Eksempel: "Skolen bør *sannsynligvis* tilby flere valgfag."

*6. Unntak (Rebuttal):*
Situasjoner der konklusjonen ikke gjelder.
- Eksempel: "Med mindre det går på bekostning av grunnleggende ferdigheter i kjernefagene."

**Hvorfor bruke Toulmins modell?**

Modellen hjelper deg å:
- Analysere egne argumenter og finne svakheter
- Vurdere andres argumenter systematisk
- Forstå hvor uenigheten ligger i en debatt
- Bygge sterkere og mer nyanserte argumenter

**Eksempel på fullstendig analyse**

*Debattinnlegg:* "Mobiltelefoner bør forbys i klasserommet."

| Element | Innhold |
|---------|---------|
| Påstand | Mobiltelefoner bør forbys i klasserommet |
| Belegg | Forskning viser at elever som bruker mobil i timen, får dårligere karakterer |
| Hjemmel | Det som forstyrrer læringen bør fjernes fra klasserommet |
| Ryggdekning | Skolens oppgave er å legge til rette for best mulig læring |
| Styrkemarkør | "I de fleste tilfeller" |
| Unntak | Med mindre mobilen brukes som pedagogisk verktøy under lærerens kontroll |`,
    },
    {
      id: 'norsk-vg2-5-9-def-1',
      type: 'definition',
      title: 'Sentrale begreper i argumentasjonsteori',
      content: `**Argument:** En sammensetning av påstander der premissene støtter konklusjonen.

**Påstand (claim/tese):** Det du hevder og vil ha akseptert.

**Premiss:** En påstand som støtter konklusjonen.

**Belegg (data/grounds):** Fakta, bevis eller eksempler som støtter argumentet.

**Hjemmel (warrant):** Det underliggende prinsippet som kobler belegg til påstand.

**Ryggdekning (backing):** Støtte for hjemmelen.

**Styrkemarkør (qualifier):** Ord som viser hvor sikker konklusjonen er.

**Unntak (rebuttal):** Situasjoner der argumentet ikke gjelder.

**Gyldig argument:** Et argument der konklusjonen følger logisk av premissene.

**Holdbart argument:** Et gyldig argument med sanne premisser.

**Feilslutning (fallacy):** En feil i argumentasjonen som gjør argumentet ugyldig.`,
    },
    {
      id: 'norsk-vg2-5-9-feilslutninger',
      type: 'text',
      content: `## Logiske feilslutninger

En feilslutning er en feil i argumentasjonen som gjør at konklusjonen ikke følger av premissene. Feilslutninger kan være utilsiktede (man vet ikke bedre) eller tilsiktede (man vil manipulere). Å kjenne igjen feilslutninger er essensielt for kritisk tenkning.

**1. Ad hominem (angripe personen)**

I stedet for å imøtegå argumentet, angriper man personen som fremfører det.

*Eksempel:* "Du kan ikke uttale deg om klimapolitikk - du har jo ikke engang studert miljøfag!"

*Hvorfor feil:* En påstands sannhet avhenger ikke av hvem som fremfører den. Selv en person uten formell utdanning kan ha rett.

*Merk:* Det er legitimt å vurdere en persons kompetanse, men det erstatter ikke saklig argumentasjon.

**2. Stråmann (forvrenge motstanderens argument)**

Man gjengir motstanderens argument i en svakere eller forvrengt versjon, og angriper denne versjonen i stedet.

*Eksempel:*
- A: "Vi bør ha strengere regler for våpenkontroll."
- B: "Så du vil ta fra alle nordmenn retten til å forsvare seg selv?"

*Hvorfor feil:* Man debatterer ikke det faktiske argumentet, men en karikatur av det.

**3. Falsk dilemma (bare to alternativer)**

Man presenterer en sak som om det bare finnes to alternativer, når det faktisk finnes flere.

*Eksempel:* "Enten er du med oss, eller så er du mot oss."

*Hvorfor feil:* Virkeligheten er sjelden svart-hvitt. Det finnes ofte nyanser, kompromisser eller tredje alternativer.

**4. Appell til autoritet (uten gyldig ekspertise)**

Man bruker en autoritetsfigur som støtte, selv om vedkommende ikke har relevant kompetanse.

*Eksempel:* "Denne tannkremen må være best - en kjent skuespiller anbefaler den!"

*Hvorfor feil:* At noen er kjent eller dyktig på ett felt, betyr ikke at de er eksperter på alt.

*Merk:* Å sitere faktiske eksperter på sitt felt er legitimt og viktig.

**5. Sirkelargumentasjon (petitio principii)**

Konklusjonen brukes som premiss - man forutsetter det man skal bevise.

*Eksempel:* "Bibelen er sann fordi den er Guds ord, og vi vet at det er Guds ord fordi det står i Bibelen."

*Hvorfor feil:* Argumentet beviser ingenting fordi det bare gjentar seg selv.

**6. Hastig generalisering**

Man trekker en generell konklusjon basert på for få eksempler.

*Eksempel:* "Jeg kjenner to svensker som er uhøflige, så svensker generelt er uhøflige."

*Hvorfor feil:* To eksempler er ikke nok til å si noe om en hel befolkning.

**7. Falsk årsakssammenheng (post hoc)**

Man antar at fordi B skjedde etter A, må A ha forårsaket B.

*Eksempel:* "Etter at jeg begynte å bruke dette amuletten, har jeg hatt flaks. Amuletten må virke!"

*Hvorfor feil:* Tidsrekkefølge beviser ikke årsakssammenheng. Korrelasjon er ikke det samme som kausalitet.

**8. Skråplansargument (slippery slope)**

Man hevder at ett skritt uunngåelig vil føre til en serie negative konsekvenser, uten å begrunne denne kjeden.

*Eksempel:* "Hvis vi tillater cannabis, vil snart heroin være lovlig, og hele samfunnet vil bryte sammen."

*Hvorfor feil:* Hvert ledd i kjeden må begrunnes separat. At A skjer betyr ikke automatisk at Z vil skje.`,
    },
    {
      id: 'norsk-vg2-5-9-def-2',
      type: 'definition',
      title: 'De åtte vanligste feilslutningene',
      content: `**Ad hominem:** Angripe personen i stedet for argumentet.

**Stråmann:** Forvrenge motstanderens argument og angripe den forvrengede versjonen.

**Falsk dilemma:** Presentere bare to alternativer når flere finnes.

**Appell til autoritet:** Bruke en kjent person uten relevant kompetanse som bevis.

**Sirkelargumentasjon:** Bruke konklusjonen som premiss.

**Hastig generalisering:** Trekke generelle slutninger fra for få eksempler.

**Falsk årsakssammenheng (post hoc):** Anta at fordi B skjedde etter A, forårsaket A B.

**Skråplansargument:** Hevde at ett skritt vil føre til katastrofe uten å begrunne kjeden.`,
    },
    {
      id: 'norsk-vg2-5-9-praksis',
      type: 'text',
      content: `## Gjenkjenne feilslutninger i praksis

Feilslutninger finnes overalt: i politikk, reklame, sosiale medier og hverdagssamtaler. La oss se på konkrete eksempler fra ulike arenaer.

**Eksempler fra politisk debatt**

*Ad hominem:*
"Hvorfor skal vi lytte til forslag om skattepolitikk fra noen som selv tjener millioner?"
- Angriper personens økonomi i stedet for argumentet.

*Stråmann:*
Politiker A: "Vi bør vurdere å senke bilavgiftene for elbiler."
Politiker B: "Motstanderen min vil altså at vi skal subsidiere de rikes Teslaer med fellesskapets penger!"
- Forvrenger forslaget til noe mer ekstremt.

*Falsk dilemma:*
"Enten støtter du økt forsvarsbudsjett, eller så bryr du deg ikke om landets sikkerhet."
- Ignorerer at man kan bry seg om sikkerhet uten å støtte akkurat dette forslaget.

**Eksempler fra reklame**

*Appell til autoritet:*
"9 av 10 tannleger anbefaler dette produktet!"
- Hvem er disse tannlegene? Er undersøkelsen uavhengig?

*Falsk årsakssammenheng:*
"Etter at jeg begynte med denne dietten, gikk jeg ned 10 kilo!"
- Kanskje vektnedgangen skyldtes andre faktorer.

*Hastig generalisering:*
"Vår undersøkelse viser at kundene er fornøyde!" (basert på 12 svar)
- For lite utvalg til å trekke konklusjoner.

**Eksempler fra sosiale medier**

*Sirkelargumentasjon:*
"Alle vet at vaksiner er farlige." - "Hvordan vet du det?" - "Fordi det er common knowledge!"
- Ingen faktisk begrunnelse, bare gjentagelse.

*Skråplansargument:*
"Hvis vi lar staten regulere hatytringer på nett, blir det snart totalitær sensur av all kritikk!"
- Ekstrem kjede uten begrunnelse for hvert ledd.

*Ad hominem:*
"Hvorfor kommenterer du dette? Du har bare 50 følgere!"
- Følgertallet har ingenting med argumentets gyldighet å gjøre.

**Kombinerte feilslutninger**

I praksis kombineres ofte flere feilslutninger:

"Min kollega som er lege (appell til autoritet) sier at dette kosttilskuddet kurerte hennes migrene (falsk årsakssammenheng), og alle som kritiserer det er bare bitre fordi de ikke tjener penger på det (ad hominem). Enten tar du kosttilskuddet, eller så aksepterer du å ha migrene resten av livet (falsk dilemma)."

**Hvorfor brukes feilslutninger?**

- Ofte er de enklere og mer emosjonelt effektive enn gode argumenter
- De kan virke overbevisende for dem som ikke kjenner igjen dem
- I hetsen av en debatt kan selv ærlige personer ty til feilslutninger
- Noen ganger er de utilsiktede - man vet rett og slett ikke bedre`,
    },
    {
      id: 'norsk-vg2-5-9-kritisk',
      type: 'text',
      content: `## Kritisk lesing av argumentasjon

Å lese argumentasjon kritisk betyr å vurdere om argumentene holder mål. Her er en systematisk tilnærming.

**Sjekkliste for å vurdere argumenter**

*1. Identifiser påstanden:*
- Hva er hovedbudskapet?
- Er påstanden klar og presis?
- Er den falsifiserbar (kan den motbevises)?

*2. Finn belegget:*
- Hvilke fakta, tall eller eksempler brukes?
- Er kildene oppgitt og troverdige?
- Er belegget relevant for påstanden?

*3. Vurder hjemmelen:*
- Hva er den underliggende regelen eller prinsippet?
- Er hjemmelen rimelig og allment akseptert?
- Er den uttalt eller skjult?

*4. Se etter feilslutninger:*
- Angripes personen i stedet for argumentet?
- Er motstanderens posisjon gjengitt korrekt?
- Presenteres falske dilemmaer?
- Brukes autoriteter utenfor sitt felt?

*5. Vurder helheten:*
- Er argumentasjonen balansert?
- Innrømmes motargumenter?
- Er språket saklig eller manipulerende?

**Hvordan svare på dårlige argumenter**

*Ved ad hominem:*
"La oss holde oss til saken. Uavhengig av hvem jeg er, hva er galt med argumentet mitt?"

*Ved stråmann:*
"Det er ikke det jeg sa. La meg presisere: Mitt argument er at..."

*Ved falsk dilemma:*
"Det finnes flere alternativer enn disse to. For eksempel kunne vi..."

*Ved appell til autoritet:*
"Har denne personen faktisk ekspertise på dette feltet? Hva sier fagfolkene?"

*Ved sirkelargumentasjon:*
"Dette forutsetter det du skal bevise. Kan du gi en uavhengig begrunnelse?"

*Ved hastig generalisering:*
"To eksempler er ikke nok til å trekke en slik konklusjon. Finnes det bredere data?"

*Ved post hoc:*
"At B skjedde etter A, betyr ikke at A forårsaket B. Kan det finnes andre forklaringer?"

*Ved skråplansargument:*
"Hvorfor vil A uunngåelig føre til Z? Hva er begrunnelsen for hvert ledd i kjeden?"

**Prinsipper for saklig debatt**

1. *Angrip argumentet, ikke personen*
2. *Gjengi motstanderens posisjon rettferdig*
3. *Innrøm når du tar feil*
4. *Skill mellom fakta og meninger*
5. *Vær villig til å endre mening*
6. *Bruk presist språk*
7. *Oppgi kilder*
8. *Unngå absolutte påstander uten belegg*

**Når er det OK å ikke svare?**

Ikke alle feilslutninger fortjener et svar. Vurder:
- Er personen interessert i ærlig diskusjon?
- Har du kapasitet til en lang debatt?
- Vil et svar gjøre noen forskjell?

Noen ganger er det beste svaret å navngi feilslutningen og gå videre: "Det der er en stråmann. Når du vil diskutere det jeg faktisk sa, er jeg åpen for det."`,
    },
    {
      id: 'norsk-vg2-5-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken feilslutning er dette? "Du kan ikke ha noe fornuftig å si om klimaendringer - du kjører jo dieselbil!"',
        options: [
          'Stråmann',
          'Ad hominem',
          'Falsk dilemma',
          'Skråplansargument',
        ],
        answer: 1,
        solution: 'Dette er et ad hominem-argument fordi det angriper personen (at vedkommende kjører dieselbil) i stedet for å ta stilling til argumentene om klimaendringer. Om påstanden er sann eller ikke, avhenger ikke av avsenderens transportvalg.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken feilslutning er dette? "Enten er du for full ytringsfrihet uten noen begrensninger, eller så er du for sensur."',
        options: [
          'Hastig generalisering',
          'Sirkelargumentasjon',
          'Falsk dilemma',
          'Post hoc',
        ],
        answer: 2,
        solution: 'Dette er et falsk dilemma fordi det presenterer bare to ekstreme alternativer (full ytringsfrihet eller sensur), når virkeligheten har mange nyanser. De fleste demokratier har ytringsfrihet med visse begrensninger (f.eks. mot hatytringer eller trusler).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-5-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser feilslutningen i hver av følgende utsagn og forklar hvorfor det er en feilslutning.',
        subTasks: [
          {
            label: 'a',
            task: '"Min bestemor røykte hele livet og ble 95 år gammel. Altså er ikke røyking farlig."',
            solution: 'Hastig generalisering. Ett enkelt eksempel kan ikke motbevise omfattende forskning som viser at røyking øker risikoen for sykdom. Bestemoren var et unntak, ikke regelen.',
          },
          {
            label: 'b',
            task: '"Hvis vi tillater 16-åringer å stemme, vil snart 12-åringer kreve stemmerett, så 8-åringer, og til slutt vil babyer bestemme politikken."',
            solution: 'Skråplansargument. Hvert ledd i kjeden begrunnes ikke. At man setter grensen ved 16 år betyr ikke at den automatisk vil senkes til absurde nivåer.',
          },
          {
            label: 'c',
            task: '"Denne kjente idrettsstjernen bruker dette proteinpulveret, så det må være det beste på markedet."',
            solution: 'Appell til falsk autoritet. En idrettsstjerne er ikke nødvendigvis ekspert på ernæring. Vedkommende kan også være betalt for å reklamere for produktet.',
          },
          {
            label: 'd',
            task: '"Folk som er mot innvandring vil egentlig bare ha et hvitt, etnisk rent Norge."',
            solution: 'Stråmann. Dette forvrenger mange innvandringskritikers faktiske argumenter (som kan handle om integrering, kapasitet eller økonomi) til en ekstrem posisjon som er lettere å angripe.',
          },
        ],
        solution: 'Å gjenkjenne feilslutninger krever at man ser på argumentets struktur, ikke bare innholdet. Spør alltid: Følger konklusjonen logisk av premissene?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser følgende argument med Toulmins modell. Identifiser påstand, belegg, hjemmel og eventuelle styrkemarkører eller unntak.',
        subTasks: [
          {
            label: 'a',
            task: '"Skoler bør tilby gratis frokost til alle elever. Forskning viser at elever som spiser frokost, presterer bedre på skolen. Alle barn fortjener like muligheter til å lykkes."',
            solution: 'Påstand: Skoler bør tilby gratis frokost. Belegg: Forskning viser sammenheng mellom frokost og skoleprestasjoner. Hjemmel: Alle barn fortjener like muligheter. Ryggdekning (implisitt): Skolen har ansvar for elevenes læring. Ingen tydelig styrkemarkør eller unntak er nevnt.',
          },
        ],
        hints: ['Bruk tabellen fra kapittelet som mal.'],
        solution: 'Toulmins modell hjelper deg å se strukturen i argumenter og finne eventuelle svakheter eller mangler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les følgende debattinnlegg og svar på spørsmålene.',
        subTasks: [
          {
            label: 'tekst',
            task: `"Veganere liker å fremstå som moralsk overlegne, men hvem er de egentlig til å fortelle oss hva vi skal spise? Min oldefar spiste kjøtt hver dag og ble 92 år. Dessuten: Hvis vi alle sluttet å spise kjøtt, ville tusenvis av bønder miste jobben, matvareprisene ville skyte i været, og til slutt ville økonomien kollapse. Kjendiskokk Martine Hartvig har sagt at kjøtt er en viktig del av et sunt kosthold - og hun vet vel hva hun snakker om?"`,
            solution: 'Dette er teksten som skal analyseres.',
          },
          {
            label: 'a',
            task: 'Identifiser minst tre feilslutninger i teksten og forklar hver av dem.',
            solution: '1) Ad hominem: Angriper veganere som "moralsk overlegne" i stedet for argumentene deres. 2) Hastig generalisering: Bruker oldefarens eksempel som bevis på at kjøtt er sunt. 3) Skråplansargument: Hevder at å slutte med kjøtt vil føre til økonomisk kollaps uten å begrunne hvert ledd. 4) Appell til falsk autoritet: Bruker en kjendiskokk som ekspert på ernæring.',
          },
          {
            label: 'b',
            task: 'Hvordan kunne forfatteren argumentert mer saklig for samme standpunkt?',
            solution: 'Forfatteren kunne referert til faktisk ernæringsforskning, diskutert nyansene i debatten, anerkjent gyldige poenger fra veganer-siden, og brukt relevante eksperter (ernæringsfysiologer) i stedet for kjendiskokker.',
          },
        ],
        solution: 'Kritisk analyse av debattinnlegg handler om å se forbi retoriske knep og vurdere selve argumentasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbedre følgende svake argumenter ved å fjerne feilslutninger og styrke argumentasjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Svakt argument: "Vi må forby energidrikker for ungdom fordi en kjent blogger sa det er farlig, og alle som er uenige bryr seg tydeligvis ikke om barnas helse."',
            solution: 'Forbedret: "Energidrikker bør reguleres for ungdom. Helsemyndighetene advarer mot høyt koffeininntak for unge, da det kan påvirke søvn, konsentrasjon og hjerterytme. Studier fra [kilde] viser at ungdom som drikker energidrikker regelmessig, rapporterer flere søvnproblemer. En aldersgrense på 16 år ville beskytte de yngste uten å totalforby produktet."',
          },
          {
            label: 'b',
            task: 'Svakt argument: "Lekser er bortkastet tid. Jeg gjorde aldri lekser og klarte meg helt fint!"',
            solution: 'Forbedret: "Verdien av tradisjonelle lekser bør diskuteres. Forskning gir blandede resultater: Noen studier viser at lekser har begrenset effekt på læring, spesielt for yngre elever, mens andre peker på fordeler ved selvstendig arbeid. Alternative tilnærminger som lesing hjemme eller prosjektarbeid kan være mer effektive. Vi bør vurdere hva slags hjemmearbeid som faktisk fremmer læring."',
          },
        ],
        hints: [
          'Fjern personangrep og generaliseringer.',
          'Legg til konkret belegg og kilder.',
          'Anerkjenn nyanser og motargumenter.',
        ],
        solution: 'Et godt argument er balansert, veldokumentert og angriper saken - ikke personen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-9-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn et innlegg fra en nettdebatt eller kommentarfelt (f.eks. under en nyhetsartikkel) og analyser argumentasjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Gjengi hovedpåstanden i innlegget.',
            solution: 'Svar vil variere. Påstanden bør formuleres nøytralt og presist.',
          },
          {
            label: 'b',
            task: 'Identifiser eventuelle feilslutninger og navngi dem.',
            solution: 'Svar vil variere. Vanlige funn inkluderer ad hominem, hastig generalisering og stråmann.',
          },
          {
            label: 'c',
            task: 'Vurder om det finnes gyldige poenger i innlegget, til tross for eventuelle feilslutninger.',
            solution: 'God analyse skiller mellom dårlig argumentasjon og dårlige poenger. Et poeng kan være gyldig selv om det argumenteres dårlig for det.',
          },
          {
            label: 'd',
            task: 'Skriv et kort svar (maks 100 ord) som imøtegår feilslutningene på en saklig måte.',
            solution: 'Svaret bør navngi feilslutningen, forklare hvorfor den er problematisk, og eventuelt tilby en mer konstruktiv tilnærming til diskusjonen.',
          },
        ],
        hints: [
          'Velg et innlegg med klar argumentasjon - ikke bare personangrep.',
          'Vær saklig selv når du kritiserer.',
        ],
        solution: 'Analyse av virkelige debatter gir god trening i å gjenkjenne feilslutninger og respondere konstruktivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-9-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort debattinnlegg (200-300 ord) om et selvvalgt tema der du bevisst unngår feilslutninger.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema du har en mening om (f.eks. karakterer i skolen, sosiale medier, dyrevelferd).',
            solution: 'Svar vil variere. Temaet bør være debattbart og engasjerende.',
          },
          {
            label: 'b',
            task: 'Bygg opp argumentasjonen etter Toulmins modell med tydelig påstand, belegg og hjemmel.',
            solution: 'Innlegget bør ha en klar struktur med identifiserbare elementer fra Toulmins modell.',
          },
          {
            label: 'c',
            task: 'Inkluder minst én styrkemarkør og ett unntak/forbehold.',
            solution: 'Styrkemarkører som "sannsynligvis", "i mange tilfeller" og unntak som "med mindre" eller "dette gjelder ikke når" viser nyansert tenkning.',
          },
          {
            label: 'd',
            task: 'La en medelev lese innlegget og lete etter eventuelle feilslutninger. Revider om nødvendig.',
            solution: 'Tilbakemelding fra andre avslører ofte blindsoner i egen argumentasjon.',
          },
        ],
        hints: [
          'Unngå absolutte påstander ("alle", "aldri", "alltid").',
          'Oppgi kilder der det er relevant.',
          'Anerkjenn motargumenter.',
        ],
        solution: 'Å skrive uten feilslutninger krever bevissthet om egen argumentasjon. Det er en ferdighet som tar tid å utvikle, men som gjør deg til en mer overbevisende skribent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const NORSK_VG2_CHAPTERS_DEL5: TextbookChapter[] = [
  CHAPTER_NORSK_VG2_5_1,
  CHAPTER_NORSK_VG2_5_2,
  CHAPTER_NORSK_VG2_5_3,
  CHAPTER_NORSK_VG2_5_4,
  CHAPTER_NORSK_VG2_5_5,
  CHAPTER_NORSK_VG2_5_6,
  CHAPTER_NORSK_VG2_5_7,
  CHAPTER_NORSK_VG2_5_8,
  CHAPTER_NORSK_VG2_5_9,
];
