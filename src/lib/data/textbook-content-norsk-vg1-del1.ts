/**
 * Norsk VG1 - Del 1: Kapittel 1.1–3.2
 * Retorikk, sakprosa, novelle, lyrikk, muntlig kommunikasjon, kreativ skriving
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_BJORNSON_TALE,
  TEKST_COLLETT_AMTMANDENS_DOTRE_FORORD,
  TEKST_AASEN_OM_VORT_SKRIFTSPROG,
  TEKST_KIELLAND_KAREN,
  TEKST_BJORNSON_FADEREN,
  TEKST_SKRAM_KARENS_JUL,
  TEKST_LIE_TROLD,
  TEKST_OBSTFELDER_JEG_SER,
  TEKST_WERGELAND_TIL_MIN_GYLDENLAK,
  TEKST_WERGELAND_MIG_SELV,
  TEKST_BJORNSON_OVER_DE_HOIE_FJELLE,
  TEKST_VINJE_VED_RUNDARNE,
  TEKST_GARBORG_HAUGTUSSA_UTDRAG,
  TEKST_HAMSUN_SULT_AAPNING,
  TEKST_LIE_FAMILIEN_PAA_GILJE_UTDRAG,
} from './textbook-content-norsk-vg1-tekster';

// ============================================================================
// KAPITTEL 1.1: Retorikk og argumentasjon
// ============================================================================

export const CHAPTER_NORSK_VG1_1_1: TextbookChapter = {
  id: 'norsk-vg1-1-1',
  courseId: 'norsk-vg1',
  chapterNumber: '1.1',
  title: 'Retorikk og argumentasjon',
  description: 'Lær å analysere og bruke retoriske virkemidler i argumenterende tekster.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke retoriske appellformer og virkemidler i egen skriving og analyse',
  ],
  content: [
    {
      id: 'norsk-vg1-1-1-intro',
      type: 'text',
      content: `## Retorikk - kunsten å overbevise

Retorikk er læren om talekunst og overtalelse. Begrepet stammer fra antikkens Hellas, der filosofen Aristoteles (384-322 f.Kr.) systematiserte kunnskapen om hvordan man kan overbevise et publikum.

I dag bruker vi retorikk i mange sammenhenger:
- Politiske taler
- Reklame og markedsføring
- Debattinnlegg og kronikker
- Presentasjoner
- Sosiale medier

**Hvorfor lære retorikk?**
- For å bli en bedre skribent og taler
- For å gjennomskue andres argumentasjon
- For å delta aktivt i demokratiske prosesser`,
    },
    {
      id: 'norsk-vg1-1-1-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Retorikk** | Læren om talekunst og overtalelse |
| **Etos** | Appell til avsenderens troverdighet |
| **Patos** | Appell til mottakerens følelser |
| **Logos** | Appell til logikk og fornuft |
| **Kairos** | Å si rett ting til rett tid |
| **Retorisk spørsmål** | Spørsmål man ikke forventer svar på |
| **Argumentasjon** | Å begrunne et synspunkt med argumenter |
| **Metafor** | Billedlig språk, sammenligning uten "som" |`,
    },
    {
      id: 'norsk-vg1-1-1-def-1',
      type: 'definition',
      title: 'De retoriske appellformene',
      content: `Aristoteles identifiserte tre måter å overbevise på:

**Etos - troverdighet**
- Handler om avsenderens troverdighet
- Hvordan fremstår taleren? Kompetent? Ærlig? Sympatisk?
- Eksempler: «Som lege med 20 års erfaring...», «Jeg har selv opplevd...»

**Patos - følelser**
- Appell til tilhørernes følelser
- Skaper engasjement og handling
- Eksempler: Sterke historier, bilder, personlige vitnesbyrd

**Logos - fornuft**
- Appell til logikk og fornuft
- Fakta, statistikk, logiske slutninger
- Eksempler: «Forskning viser at...», «Tall fra SSB viser...»

**Kairos - timing**
- Å si rett ting til rett tid
- Kontekst og situasjon påvirker budskapet
- Eksempel: Å ta opp klimasaken etter en naturkatastrofe`,
    },
    {
      id: 'norsk-vg1-1-1-image-retorisk-trekant',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-1-1-retorisk-trekant.png',
      alt: 'Den retoriske trekanten som viser forholdet mellom etos, patos og logos',
      caption: 'Den retoriske trekanten viser hvordan avsender, mottaker og sak påvirker hvilke appellformer som er mest effektive.',
    },
    {
      id: 'norsk-vg1-1-1-image-appelformer',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-1-1-appelformer.png',
      alt: 'Oversikt over de tre retoriske appellformene etos, patos og logos med eksempler',
      caption: 'De tre retoriske appellformene: etos (troverdighet), patos (følelser) og logos (fornuft).',
    },
    {
      id: 'norsk-vg1-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av appellformer',
      problem: `Analyser appellformene i denne teksten:

"Som sykepleier med 15 års erfaring har jeg sett hvordan bemanningskrisen rammer pasientene. Tall fra Statistisk sentralbyrå viser at vi mangler 6000 sykepleiere. Tenk på alle de eldre som ikke får den omsorgen de fortjener. Vi trenger handling nå!"`,
      solution: `**Etos:** "Som sykepleier med 15 års erfaring" - avsenderen etablerer troverdighet gjennom yrkeserfaring og førstehåndskunnskap.

**Patos:** "Tenk på alle de eldre" og "omsorgen de fortjener" - følelsesmessig appell som skaper empati og engasjement.

**Logos:** "Tall fra Statistisk sentralbyrå" og "6000 sykepleiere" - henvisning til offisiell statistikk og konkrete tall.

**Kairos:** Teksten spiller på aktualiteten til helsedebatten.

**Hovedappell:** Teksten bruker primært patos (følelser rundt eldres situasjon), støttet av etos (yrkeserfaring) og logos (statistikk). Merk at alle disse appellformene kan brukes i ulike politiske debatter - det viktige er å gjenkjenne hvordan de brukes.`,
    },
    {
      id: 'norsk-vg1-1-1-def-2',
      type: 'definition',
      title: 'Retoriske virkemidler',
      content: `**Språklige virkemidler:**
- **Retoriske spørsmål:** Spørsmål du ikke forventer svar på
- **Gjentakelse:** Repetere ord eller fraser for effekt
- **Kontraster:** Sette motsetninger opp mot hverandre
- **Treleddet oppbygging:** Tre elementer i rekke (kraft, mot og vilje)
- **Metaforer:** Billedlig språk for å forklare abstrakte ting

**Strukturelle virkemidler:**
- **Innledning:** Fange oppmerksomhet, presentere tema
- **Hoveddel:** Argumenter i logisk rekkefølge
- **Avslutning:** Oppsummere, oppfordre til handling`,
    },
    {
      id: 'norsk-vg1-1-1-example-2',
      type: 'example',
      title: 'Eksempel: Identifisere retoriske virkemidler',
      problem: `Identifiser de retoriske virkemidlene i denne teksten:

"Er det virkelig slik vi vil ha det? Våre barn, våre barnebarn, vår fremtid - alle står på spill. Vi kan ikke lenger sitte stille og se på. Vi må handle. Nå."`,
      solution: `**Retoriske virkemidler i teksten:**

**1. Retorisk spørsmål:**
"Er det virkelig slik vi vil ha det?" - Spørsmålet krever ikke et direkte svar, men får leseren til å reflektere og implisitt svare "nei".

**2. Treleddet oppbygging (trikolon):**
"Våre barn, våre barnebarn, vår fremtid" - Tre elementer i rekke skaper rytme og forsterker budskapet. Merk at rekkefølgen også viser utvidelse fra nært til fjernt.

**3. Gjentakelse (anafor):**
"Våre... våre... vår" - Gjentagelsen av "vår/våre" skaper fellesskapsfølelse og inkluderer leseren.

**4. Kontrast:**
"sitte stille" vs. "handle" - Motsetningen mellom passivitet og handling understreker at noe må gjøres.

**5. Kort, rytmisk avslutning:**
"Vi må handle. Nå." - Korte setninger til slutt skaper kraft og hastverk.

**Samlet effekt:**
Teksten kombinerer flere virkemidler for å skape engasjement og oppfordre til handling. Den appellerer til fellesskap (patos) gjennom "våre"-formuleringene og skaper hastverk gjennom de korte setningene til slutt.`,
    },
    {
      id: 'norsk-vg1-1-1-primaertekst-1',
      type: 'text',
      title: 'Primærtekst: Bjørnstjerne Bjørnson - tale',
      content: `## Primærtekst: Bjørnstjerne Bjørnson\n\n${TEKST_BJORNSON_TALE}`,
    },
    {
      id: 'norsk-vg1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser hvilken appellform som dominerer i disse utsagnene:',
        subTasks: [
          {
            label: 'a',
            task: '"Statistikk fra FN viser at 800 millioner mennesker sulter."',
            solution: 'Logos - bruker fakta og statistikk',
            multipleChoiceOptions: ['Etos', 'Patos', 'Logos', 'Kairos'],
          },
          {
            label: 'b',
            task: '"Som professor i økonomi ved Universitetet i Oslo..."',
            solution: 'Etos - etablerer troverdighet gjennom ekspertise',
            multipleChoiceOptions: ['Etos', 'Patos', 'Logos', 'Kairos'],
          },
          {
            label: 'c',
            task: '"Tenk på alle de ensomme eldre som sitter alene hver eneste dag."',
            solution: 'Patos - appellerer til følelser som empati og medfølelse',
            multipleChoiceOptions: ['Etos', 'Patos', 'Logos', 'Kairos'],
          },
        ],
        solution: 'a) Logos, b) Etos, c) Patos',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn retoriske virkemidler i Martin Luther Kings berømte "I Have a Dream"-tale:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn et eksempel på gjentakelse.',
            solution: '"I have a dream" gjentas flere ganger gjennom talen for å forsterke budskapet.',
          },
          {
            label: 'b',
            task: 'Finn et eksempel på metafor.',
            solution: '"Let freedom ring" - frihet fremstilles som en klokke som ringer.',
          },
          {
            label: 'c',
            task: 'Hvordan bruker King kontraster?',
            solution: 'Han kontrasterer nåtid med fremtid, undertrykkelse med frihet, hat med kjærlighet.',
          },
        ],
        hints: ['Les et utdrag av talen på nett', 'Se etter mønstre i språkbruken'],
        solution: 'King bruker gjentakelse, metaforer og kontraster for å skape et kraftfullt budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en politisk tale eller et debattinnlegg fra norske medier. Identifiser bruken av etos, patos og logos.',
        hints: ['Finn en aktuell tale på NRK eller i en avis', 'Lag en strukturert analyse'],
        solution: 'En god retorisk analyse identifiserer appellformene, gir eksempler fra teksten, og vurderer hvor effektiv argumentasjonen er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et kort debattinnlegg (200-300 ord) der du bevisst bruker alle tre appellformene.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema du engasjerer deg i.',
            solution: 'Temaet bør være aktuelt og debatterbart.',
          },
          {
            label: 'b',
            task: 'Planlegg hvordan du skal bruke etos, patos og logos.',
            solution: 'Etos: Etabler din troverdighet. Patos: Skape følelsesmessig engasjement. Logos: Bruk fakta og logikk.',
          },
          {
            label: 'c',
            task: 'Skriv innlegget og merk av hvor du bruker hver appellform.',
            solution: 'Innlegget skal ha tydelig struktur og balansert bruk av appellformer.',
          },
        ],
        hints: ['Start med etos for å etablere troverdighet', 'Avslutt med patos for å skape handling'],
        solution: 'Et godt debattinnlegg kombinerer alle tre appellformer på en naturlig måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign to tekster om samme tema som bruker ulike retoriske strategier. Hvilken er mest overbevisende, og hvorfor?',
        hints: ['Velg f.eks. to avisinnlegg om samme sak', 'Vurder målgruppe og kontekst'],
        solution: 'Sammenligningen bør vise forståelse for hvordan ulike retoriske valg påvirker effekten av argumentasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedformålet med retorikk?',
        options: [
          'Å overbevise og påvirke',
          'Å underholde publikum',
          'Å beskrive naturen',
          'Å skrive skjønnlitteratur',
        ],
        answer: 0,
        solution: 'Retorikk handler primært om å overbevise og påvirke - det er kunsten å overbevise.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken appellform bruker man når man viser til sin egen erfaring for å virke troverdig?',
        options: ['Etos', 'Patos', 'Logos', 'Kairos'],
        answer: 0,
        solution: 'Etos handler om avsenderens troverdighet - å vise til egen erfaring er en typisk etos-strategi.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Bjørnson-talen ovenfor. Identifiser minst to retoriske virkemidler Bjørnson bruker, og forklar effekten av dem.',
        hints: ['Se etter gjentakelse, kontraster og retoriske spørsmål', 'Vurder hvem Bjørnson henvender seg til'],
        solution: 'Bjørnson bruker typiske retoriske virkemidler som gjentakelse for å forsterke budskapet, kontraster for å understreke poenger, og appellerer til nasjonalfølelse (patos).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en reklame (TV, nett eller trykt). Hvilke retoriske virkemidler brukes? Hvordan appellerer reklamen til mottakeren?',
        subTasks: [
          { label: 'a', task: 'Beskriv reklamen kort.', solution: 'Beskriv hva reklamen viser og hva den reklamerer for.' },
          { label: 'b', task: 'Identifiser appellformene.', solution: 'Vurder bruk av etos (troverdighet), patos (følelser) og logos (fakta).' },
          { label: 'c', task: 'Vurder målgruppe og virkemidler.', solution: 'Hvem henvender reklamen seg til, og hvilke virkemidler brukes for å nå dem?' },
        ],
        solution: 'Reklame bruker ofte en kombinasjon av appellformer, med hovedvekt på patos for å skape et ønske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en retorisk analyse (400-500 ord) av en valgfri tale eller et debattinnlegg. Bruk fagbegreper fra kapittelet.',
        hints: ['Bruk den retoriske pentagonmodellen: avsender, mottaker, budskap, kontekst, medium', 'Analyser systematisk alle tre appellformer', 'Vurder den retoriske situasjonen'],
        solution: 'Analysen skal demonstrere evne til systematisk bruk av retoriske fagbegreper i en sammenhengende tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Bjørnson-talen med en moderne politisk tale. Hvordan har retoriske strategier endret seg? Skriv en drøftende tekst (500-700 ord).',
        hints: ['Velg en tale fra de siste årene', 'Se på bruk av appellformer, virkemidler og språk', 'Vurder kontekstens betydning for retoriske valg'],
        solution: 'Sammenligningen bør vise forståelse for hvordan retorikk tilpasses tid, kontekst og medium.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Retorikk:** Kunsten å overbevise gjennom språket, med opprinnelse i antikkens Hellas
- **Etos:** Appellform som handler om avsenderens troverdighet og karakter
- **Patos:** Appellform som appellerer til mottakerens følelser
- **Logos:** Appellform som bruker logikk, fakta og fornuft
- **Kairos:** Å si rett ting til rett tid - betydningen av timing og kontekst
- **Retoriske virkemidler:** Språklige grep som retoriske spørsmål, gjentakelse, kontraster og metaforer

**Det viktigste å huske:**
1. En god argumenterende tekst kombinerer etos, patos og logos på en balansert måte
2. Retoriske virkemidler forsterker budskapet og gjør teksten mer overbevisende
3. Retorisk analyse handler om å identifisere hvordan en tekst forsøker å påvirke mottakeren

**Kompetansemål dette kapittelet dekker:**
- Bruke retoriske appellformer og virkemidler i egen skriving og analyse`,
    },
    {
      id: 'norsk-vg1-1-1-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **1.3 Debattinnlegg og meningsytring** – Bruk retoriske virkemidler i egen argumentasjon
- **1.5 Retorisk analyse** – Fordyp deg i systematisk analyse av taler og tekster
- **5.3 Fagartikkel** – Bruk logos og faglig argumentasjon i akademisk skriving`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Sakprosa og kildebruk
// ============================================================================

export const CHAPTER_NORSK_VG1_1_2: TextbookChapter = {
  id: 'norsk-vg1-1-2',
  courseId: 'norsk-vg1',
  chapterNumber: '1.2',
  title: 'Sakprosa og kildebruk',
  description: 'Lær å finne, vurdere og bruke kilder i egne tekster.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere og bruke kilder kritisk og etterrettelig',
  ],
  content: [
    {
      id: 'norsk-vg1-1-2-intro',
      type: 'text',
      content: `## Sakprosa og kilder

Sakprosa er tekster som formidler informasjon, kunnskap eller meninger - ikke fiksjon. I en tid med informasjonsoverflod er det avgjørende å kunne vurdere kilder kritisk.

**Sakprosatyper:**
- **Journalistiske tekster:** Nyhetsartikler, reportasjer, kommentarer
- **Fagartikler:** Akademiske og populærvitenskapelige tekster
- **Administrative tekster:** Rapporter, utredninger, lovtekster
- **Personlige tekster:** Essay, blogginnlegg, leserbrev

**Hvorfor er kildebruk viktig?**
- Styrker troverdigheten til teksten din
- Viser at du bygger på etablert kunnskap
- Gjør det mulig for leseren å sjekke påstandene
- Unngår plagiat`,
    },
    {
      id: 'norsk-vg1-1-2-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Sakprosa** | Tekster som formidler informasjon, kunnskap eller meninger |
| **Primærkilde** | Originale dokumenter, førstehåndsberetninger |
| **Sekundærkilde** | Tekster som tolker eller bearbeider primærkilder |
| **Kildekritikk** | Å vurdere om en kilde er pålitelig og relevant |
| **TRAFO-modellen** | Modell for kildekritikk: Troverdighet, Relevans, Aktualitet, Formål, Objektivitet |
| **Plagiat** | Å utgi andres arbeid som sitt eget uten kildehenvisning |
| **Parafrasering** | Å gjengi innhold med egne ord |
| **Kildehenvisning** | Henvisning til hvor informasjonen kommer fra |`,
    },
    {
      id: 'norsk-vg1-1-2-def-1',
      type: 'definition',
      title: 'Kildetyper og kildekritikk',
      content: `**Primærkilder:**
- Originale dokumenter, forskning, øyenvitneskildringer
- Eksempel: Et forskningsintervju, en historisk dagbok

**Sekundærkilder:**
- Bearbeider og tolker primærkilder
- Eksempel: En lærebok, en Wikipedia-artikkel

**TRAFO-modellen for kildekritikk:**

**T - Troverdighet**
- Hvem er avsenderen? Har de kompetanse?
- Er kilden uavhengig?

**R - Relevans**
- Passer kilden til formålet ditt?
- Er informasjonen relevant for problemstillingen?

**A - Aktualitet**
- Når ble kilden laget? Er den oppdatert?
- Er informasjonen fortsatt gyldig?

**F - Formål**
- Hva er hensikten med teksten?
- Er det skjulte motiver (reklame, propaganda)?

**O - Objektivitet**
- Er fremstillingen balansert?
- Presenteres flere sider av saken?`,
    },
    {
      id: 'norsk-vg1-1-2-image-kildekritikk-flytskjema',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-1-2-kildekritikk-flytskjema.png',
      alt: 'Flytskjema for kildekritikk med TRAFO-modellen',
      caption: 'Flytskjema for kildekritikk: Bruk TRAFO-modellen (Troverdighet, Relevans, Aktualitet, Formål, Objektivitet) for å vurdere kilder systematisk.',
    },
    {
      id: 'norsk-vg1-1-2-image-kildetyper',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-1-2-kildetyper.png',
      alt: 'Oversikt over primærkilder og sekundærkilder med eksempler',
      caption: 'Primærkilder (originale dokumenter) og sekundærkilder (bearbeidet informasjon) - kjenn forskjellen for god kildebruk.',
    },
    {
      id: 'norsk-vg1-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Kildekritisk vurdering',
      problem: `Vurder denne kilden: En artikkel fra Store norske leksikon (SNL) om klimaendringer.`,
      solution: `**Troverdighet:** Høy - SNL har fagansvarlige redaktører og artikkelforfattere med akademisk bakgrunn. Artiklene er kvalitetssikret.

**Relevans:** Avhenger av bruk - God for generell oversikt, men kan være for grunnleggende for spesialiserte oppgaver.

**Aktualitet:** God - SNL oppdaterer artikler jevnlig, og datoen for siste oppdatering vises.

**Formål:** Leksikalsk - Formålet er å informere nøytralt, ikke å overbevise.

**Objektivitet:** God - SNL tilstreber nøytral fremstilling basert på etablert forskning.

**Konklusjon:** En solid kilde for bakgrunnsinformasjon og definisjoner. Bør suppleres med primærkilder for dypere analyse.`,
    },
    {
      id: 'norsk-vg1-1-2-def-2',
      type: 'definition',
      title: 'Kildehenvisning og sitat',
      content: `**Direkte sitat:**
- Brukes når formuleringen er viktig
- Sett i anførselstegn: "..."
- Oppgi forfatter, tittel, årstall

**Indirekte sitat (parafrasering):**
- Gjengi innholdet med egne ord
- Oppgi fortsatt kilden

**Kildehenvisning i teksten:**
- "(Forfatter, år)" eller "Ifølge Forfatter (år)..."
- Eksempel: "Klimaforskere advarer om at temperaturen kan stige med 2 grader (IPCC, 2023)."

**Kildeliste:**
- Settes til slutt i teksten
- Alfabetisk ordnet etter forfatter
- Inneholder all informasjon for å finne kilden

**Eksempel på kildelisteinnegg:**
Forfatter, F. (År). *Tittel på bok*. Forlag.
Forfatter, F. (År). Tittel på artikkel. *Tidsskrift*, volum(nummer), sider.`,
    },
    {
      id: 'norsk-vg1-1-2-example-2',
      type: 'example',
      title: 'Eksempel: Omskrive fra plagiat til korrekt kildebruk',
      problem: `En elev har skrevet følgende avsnitt i en oppgave om sosiale medier:

"Sosiale medier har endret hvordan vi kommuniserer fundamentalt. Unge mennesker bruker i snitt over fire timer daglig på ulike plattformer, og forskning viser at dette kan påvirke både søvnkvalitet og mental helse."

Problemet: Eleven har hentet informasjonen fra en rapport, men oppgir ikke kilden. Hvordan kan dette skrives om til korrekt kildebruk?`,
      solution: `**Versjon med direkte sitat:**
Medietilsynet fastslår i sin rapport at "unge i alderen 9-18 år bruker i snitt 4 timer og 7 minutter daglig på sosiale medier" (Medietilsynet, 2023, s. 12). Forskning fra Folkehelseinstituttet viser at høy skjermbruk kan være forbundet med "redusert søvnkvalitet og økt risiko for depressive symptomer" (FHI, 2022, s. 45).

**Versjon med parafrasering:**
Ifølge Medietilsynet (2023) bruker norske ungdommer i gjennomsnitt over fire timer daglig på sosiale medier. En rapport fra Folkehelseinstituttet (2022) peker på mulige sammenhenger mellom høy skjermbruk og negative helseeffekter som søvnproblemer og psykiske plager.

**Kildeliste:**
Folkehelseinstituttet. (2022). *Barn og unges psykiske helse*. FHI.
Medietilsynet. (2023). *Barn og medier 2023*. Medietilsynet.

**Viktige forskjeller:**
1. Påstandene er nå knyttet til konkrete kilder
2. Leseren kan sjekke informasjonen selv
3. Forfatterens troverdighet styrkes
4. Plagiat unngås`,
    },
    {
      id: 'norsk-vg1-1-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Camilla Collett – Forord til «Amtmandens Døttre» (1855)',
      content: [
        {
          id: 'norsk-vg1-1-2-primaertekst-1-text',
          type: 'text',
          content: TEKST_COLLETT_AMTMANDENS_DOTRE_FORORD,
        },
      ],
    },
    {
      id: 'norsk-vg1-1-2-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen – «Om vort Skriftsprog» (1836)',
      content: [
        {
          id: 'norsk-vg1-1-2-primaertekst-2-text',
          type: 'text',
          content: TEKST_AASEN_OM_VORT_SKRIFTSPROG,
        },
      ],
    },
    {
      id: 'norsk-vg1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Vurder disse kildene med TRAFO-modellen:',
        subTasks: [
          {
            label: 'a',
            task: 'En YouTube-video om helse laget av en influencer uten medisinsk bakgrunn.',
            solution: 'Lav troverdighet (mangler faglig kompetanse), usikker objektivitet (kan ha sponsoravtaler), varierende aktualitet.',
          },
          {
            label: 'b',
            task: 'En rapport fra Folkehelseinstituttet om vaksiner.',
            solution: 'Høy troverdighet (offentlig faginstans), god aktualitet (oppdateres jevnlig), høy objektivitet (vitenskapelig fundert).',
          },
          {
            label: 'c',
            task: 'Et debattinnlegg i Aftenposten skrevet av en partileder.',
            solution: 'Middels troverdighet (politisk aktør med agenda), lav objektivitet (subjektiv mening), god aktualitet.',
          },
        ],
        solution: 'Kildevurdering krever at du ser på hvem som står bak, hva formålet er, og hvor oppdatert informasjonen er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Omskriv dette sitatet til et indirekte sitat (parafrasering):',
        subTasks: [
          {
            label: 'a',
            task: '"Ungdommers bruk av sosiale medier har økt med 40 prosent de siste fem årene" (Medietilsynet, 2023).',
            solution: 'Ifølge Medietilsynet (2023) har ungdoms bruk av sosiale medier steget betydelig det siste tiåret.',
          },
        ],
        hints: ['Behold kjerneinnholdet', 'Bruk egne ord', 'Oppgi fortsatt kilden'],
        solution: 'Parafrasering innebærer å gjengi innholdet med egne ord, men likevel oppgi kilden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tre ulike kilder om samme tema og vurder dem mot hverandre.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et aktuelt tema og finn tre kilder av ulik type (f.eks. avisartikkel, fagartikkel, blogginnlegg).',
            solution: 'Kildene bør representere ulike perspektiver og pålitelighetsnivåer.',
          },
          {
            label: 'b',
            task: 'Vurder hver kilde med TRAFO-modellen.',
            solution: 'Systematisk gjennomgang av troverdighet, relevans, aktualitet, formål og objektivitet.',
          },
          {
            label: 'c',
            task: 'Konkluder: Hvilken kilde er mest pålitelig for en faglig tekst?',
            solution: 'Begrunnet valg basert på kildekritiske kriterier.',
          },
        ],
        hints: ['Sammenlign hvordan kildene behandler samme informasjon', 'Se etter motstridende påstander'],
        solution: 'Kildesammenligning viser kritisk tenkning og evne til å vurdere informasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort faglig tekst (200-250 ord) med minst tre kildehenvisninger. Lag en korrekt kildeliste.',
        hints: ['Velg et tema du kan finne gode kilder om', 'Bruk både direkte og indirekte sitat', 'Følg oppsettet for kildeliste'],
        solution: 'Teksten skal demonstrere korrekt bruk av kilder og kildehenvisninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen på plagiat og korrekt kildebruk. Gi eksempler på begge.',
        hints: ['Tenk på hva som skjer når du ikke oppgir kilder', 'Hvorfor er plagiat problematisk?'],
        solution: 'Plagiat er å fremstille andres arbeid som sitt eget. Korrekt kildebruk innebærer å oppgi hvor informasjonen kommer fra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er et eksempel på subjektiv sakprosa?',
        options: [
          'Et debattinnlegg i avisen',
          'En nyhetsartikkel fra NRK',
          'En forskningsrapport fra UiO',
          'En lovtekst fra Stortinget',
        ],
        answer: 0,
        solution: 'Et debattinnlegg er subjektiv sakprosa fordi det uttrykker forfatterens personlige mening og argumentasjon.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står «T» for i TRAFO-modellen?',
        options: [
          'Troverdighet',
          'Tema',
          'Tekst',
          'Tilgjengelighet',
        ],
        answer: 0,
        solution: 'T i TRAFO står for Troverdighet - hvem står bak kilden, og har de kompetanse på området?',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Collett-teksten ovenfor. Analyser den som sakprosa: Hva er formålet? Hvem er mottakeren? Hvilke virkemidler bruker Collett for å overbevise?',
        hints: ['Vurder konteksten: Norge i 1855', 'Se etter bruk av appellformer', 'Tenk på hvem som leste bøker på denne tiden'],
        solution: 'Collett bruker forordet som en sakprosa-sjanger for å argumentere for kvinners rett til å uttrykke seg og velge fritt. Hun henvender seg til et dannet borgerlig publikum og bruker både patos og logos.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Aasens essay «Om vort Skriftsprog» med en moderne tekst om språkdebatt (f.eks. om nynorsk, dialektbruk eller språklig mangfold).',
        subTasks: [
          { label: 'a', task: 'Hva argumenterer Aasen for?', solution: 'Aasen argumenterer for at Norge trenger et eget skriftspråk basert på norske dialekter, ikke dansk.' },
          { label: 'b', task: 'Finn en moderne tekst om språkdebatt og beskriv standpunktet.', solution: 'Velg en aktuell tekst fra aviser eller nettsider som tar opp norsk språkpolitikk.' },
          { label: 'c', task: 'Sammenlign argumentasjonen i de to tekstene.', solution: 'Vurder likheter og forskjeller i argumentasjon, virkemidler og kontekst.' },
        ],
        solution: 'Sammenligningen bør vise forståelse for hvordan språkdebatten har utviklet seg fra Aasens tid til i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kildebasert analysetekst (400-500 ord) om et selvvalgt tema. Bruk minst fire kilder og vurder dem kritisk i teksten.',
        hints: ['Velg et tema du finner gode kilder om', 'Bruk TRAFO-modellen for å vurdere kildene', 'Vis at du kan skille mellom sterke og svake kilder', 'Lag en korrekt kildeliste'],
        solution: 'Teksten skal demonstrere evne til å finne, vurdere og bruke kilder i en sammenhengende faglig tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et aktuelt tema og finn fem kilder av ulik type. Skriv en kritisk kildeevaluering (500-700 ord) der du vurderer hver kilde med TRAFO-modellen og rangerer dem etter pålitelighet.',
        hints: ['Bruk minst tre ulike kildetyper (f.eks. fagartikkel, nyhetsartikkel, blogg, offentlig rapport, sosiale medier)', 'Begrunn rangeringen grundig', 'Diskuter hva som gjør en kilde god eller dårlig for ditt formål'],
        solution: 'Evalueringen skal vise avansert kildekritisk kompetanse og evne til å vurdere og rangere kilder systematisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Sakprosa:** Tekster som formidler informasjon, kunnskap eller meninger - ikke fiksjon
- **Primærkilde:** Originale dokumenter, forskning eller øyenvitneskildringer
- **Sekundærkilde:** Tekster som bearbeider og tolker primærkilder
- **TRAFO-modellen:** Verktøy for kildekritikk - Troverdighet, Relevans, Aktualitet, Formål, Objektivitet
- **Kildehenvisning:** Å oppgi hvor informasjonen kommer fra, både i teksten og i kildeliste
- **Parafrasering:** Å gjengi innholdet fra en kilde med egne ord

**Det viktigste å huske:**
1. Alle påstander i en tekst bør kunne dokumenteres med kilder
2. TRAFO-modellen hjelper deg å vurdere om en kilde er pålitelig
3. Korrekt kildebruk styrker troverdigheten din og unngår plagiat

**Kompetansemål dette kapittelet dekker:**
- Vurdere og bruke kilder kritisk og etterrettelig`,
    },
    {
      id: 'norsk-vg1-1-2-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **5.3 Fagartikkel** – Bruk kildehenvisning i akademisk skriving
- **6.4 Kildekritikk og falske nyheter** – Fordyp deg i kritisk vurdering av kilder
- **1.4 Kronikk og leserinnlegg** – Bruk kilder i argumenterende tekster`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4: Kronikk og leserinnlegg
// ============================================================================

export const CHAPTER_NORSK_VG1_1_4: TextbookChapter = {
  id: 'norsk-vg1-1-4',
  courseId: 'norsk-vg1',
  chapterNumber: '1.4',
  title: 'Kronikk og leserinnlegg',
  description: 'Lær å skrive kronikker og leserinnlegg med tydelig argumentasjon og struktur.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke fagspråk og retoriske virkemidler i egne tekster',
    'skrive argumenterende tekster til ulike formål',
  ],
  content: [
    {
      id: 'norsk-vg1-1-4-intro',
      type: 'text',
      content: `## Avissjangre: Kronikk og leserinnlegg

I en demokratisk offentlighet er det viktig at alle kan delta i samfunnsdebatten. Kronikker og leserinnlegg er to sentrale sjangre for å uttrykke meninger og delta i offentlig ordskifte.

**Hvorfor skrive kronikk eller leserinnlegg?**
- Påvirke opinionen og beslutningstakere
- Dele kunnskap og perspektiver
- Sette dagsorden for viktige saker
- Trene skriftlig argumentasjon

Selv om begge er meningsytringer, skiller de seg på flere måter.`,
    },
    {
      id: 'norsk-vg1-1-4-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Kronikk** | Lengre, argumenterende artikkel med faglig tyngde |
| **Leserinnlegg** | Kortere meningsytring fra lesere i avisen |
| **Tese** | Hovedpåstanden eller synspunktet du argumenterer for |
| **Argument** | Begrunnelse som støtter tesen |
| **Premiss** | Forutsetning som et argument bygger på |
| **Offentlig ordskifte** | Samfunnsdebatt i mediene |
| **Opinion** | Den allmenne mening i samfunnet |
| **Ingress** | Innledende avsnitt som oppsummerer hovedpoenget |`,
    },
    {
      id: 'norsk-vg1-1-4-def-1',
      type: 'definition',
      title: 'Hva er en kronikk?',
      content: `**Kronikk** er en lengre, argumenterende artikkel som står på egne premisser i avisen.

**Kjennetegn:**
- **Lengde:** 4000-8000 tegn (600-1000 ord)
- **Avsender:** Ofte eksperter, fagfolk, politikere eller engasjerte samfunnsdebattanter
- **Formål:** Belyse en sak grundig, argumentere for et standpunkt, dele innsikt
- **Plassering:** Egen kronikkplass i avisen, ofte på kultursidene eller meningssidene

**Forventninger til kronikken:**
- Grundig argumentasjon med faktagrunnlag
- Gjerne personlig vinkling, men med faglig tyngde
- Klar struktur med innledning, hoveddel og avslutning
- Ofte respons på aktuelle hendelser eller debatter`,
    },
    {
      id: 'norsk-vg1-1-4-def-2',
      type: 'definition',
      title: 'Hva er et leserinnlegg?',
      content: `**Leserinnlegg** (også kalt leserbrev eller debattinnlegg) er kortere meningsytringer fra leserne.

**Kjennetegn:**
- **Lengde:** 1500-3000 tegn (200-400 ord)
- **Avsender:** Hvem som helst kan sende inn
- **Formål:** Uttrykke en mening, svare på andre innlegg, rette opp feil
- **Plassering:** Debattsidene, leserbrev-seksjonen

**Forventninger til leserinnlegget:**
- Kort og poengtert
- Tydelig standpunkt
- Relevant for aktuelle saker
- Gjerne personlig engasjement`,
    },
    {
      id: 'norsk-vg1-1-4-def-3',
      type: 'definition',
      title: 'Strukturen i kronikk og leserinnlegg',
      content: `**Innledning (ca. 10-15% av teksten):**
- Fang leserens oppmerksomhet (krok)
- Presenter tema og aktualitet
- Antydet eller tydelig påstand/tese
- Eksempler på kroker: provoserende påstand, retorisk spørsmål, personlig historie, aktuell hendelse

**Hoveddel (ca. 70-80% av teksten):**
- Argumenter for ditt synspunkt
- Bruk eksempler, fakta, referanser
- Ta gjerne opp motargumenter og imøtegå dem
- Bygg argumentasjonen logisk

**Avslutning (ca. 10-15% av teksten):**
- Oppsummer hovedpoenget
- Avslutt med en sterk formulering
- Eventuelt oppfordring til handling eller videre refleksjon
- Unngå å introdusere nye argumenter`,
    },
    {
      id: 'norsk-vg1-1-4-def-4',
      type: 'definition',
      title: 'Argumentasjonsteknikker',
      content: `**Påstand - begrunnelse - eksempel:**
En klassisk oppbygging av et argument:
1. Fremsett en påstand
2. Gi en begrunnelse for påstanden
3. Underbygg med et konkret eksempel

**Toulmins argumentasjonsmodell:**
- **Påstand:** Det du vil overbevise leseren om
- **Belegg:** Fakta eller observasjoner som støtter påstanden
- **Hjemmel:** Den generelle regelen som kobler belegg til påstand
- **Ryggdekning:** Støtte for hjemmelen
- **Styrkemarkører:** Ord som «sannsynligvis», «ofte», «som regel»
- **Unntak:** Situasjoner der argumentet ikke gjelder

**Ulike argumenttyper:**
- **Fakta-argumenter:** Basert på statistikk, forskning, dokumentasjon
- **Verdi-argumenter:** Basert på moral, etikk, rettferdighet
- **Konsekvens-argumenter:** Viser til positive eller negative følger
- **Ekspert-argumenter:** Viser til autoriteters syn
- **Eksempel-argumenter:** Bruker konkrete tilfeller`,
    },
    {
      id: 'norsk-vg1-1-4-image-kronikk-oppbygging',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-1-4-kronikk-oppbygging.png',
      alt: 'Illustrasjon av oppbyggingen av en kronikk med innledning, hoveddel og avslutning',
      caption: 'Oppbyggingen av en kronikk: innledning (10-15%), hoveddel (70-80%) og avslutning (10-15%).',
    },
    {
      id: 'norsk-vg1-1-4-image-leserinnlegg',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-1-4-leserinnlegg.png',
      alt: 'Sammenligning av kronikk og leserinnlegg som viser forskjeller i lengde, avsender og formål',
      caption: 'Sammenligning av kronikk og leserinnlegg - to viktige sjangre i offentlig debatt.',
    },
    {
      id: 'norsk-vg1-1-4-def-5',
      type: 'definition',
      title: 'Språk og stil i avissjangre',
      content: `**Språklige kjennetegn:**
- Klart og tydelig språk (unngå unødvendig fagsjargong)
- Variert setningsoppbygging
- Aktiv stemme («Regjeringen bør handle») fremfor passiv («Det bør handles»)
- Bruk av retoriske virkemidler (se kapittel 1.1)

**Viktige huskeregler:**
- Skriv for en generell leser, ikke bare eksperter
- Unngå fremmedord når norske ord fungerer
- Hold deg til én sak per innlegg
- Vær konkret, unngå vage formuleringer
- Rediger og stram inn teksten

**Tittel og ingress:**
- Tittelen skal fange oppmerksomhet og formidle hovedbudskapet
- Ingressen oppsummerer innholdet (hvem, hva, hvorfor)
- Avisen kan endre tittel og ingress - fokuser på innholdet`,
    },
    {
      id: 'norsk-vg1-1-4-example-2',
      type: 'example',
      title: 'Eksempel: Fra svakt til sterkt argument',
      problem: `Eleven har skrevet følgende argument i et leserinnlegg om lekser:

"Lekser er dumt og bør avskaffes fordi elevene blir slitne."

Hvordan kan dette argumentet forbedres med påstand-begrunnelse-eksempel-strukturen?`,
      solution: `**Forbedret versjon:**

**Påstand:** Leksepraksisen i norsk skole bør revurderes.

**Begrunnelse:** Forskning viser at lekser i grunnskolen har begrenset læringseffekt, samtidig som de forsterker sosiale forskjeller mellom elever med ulik grad av støtte hjemme.

**Eksempel/belegg:** En studie fra NTNU (2019) fant at lekser først har tydelig positiv effekt fra ungdomsskolenivå og oppover. Samtidig rapporterer Utdanningsdirektoratet at elever med foreldre uten høyere utdanning får mindre hjelp med lekser, noe som skaper ulikhet.

**Ferdig avsnitt:**
"Leksepraksisen i norsk skole bør revurderes. Forskning fra NTNU viser at lekser i grunnskolen har begrenset læringseffekt, mens de samtidig forsterker sosiale forskjeller. Elever med ressurssterke foreldre får mer støtte, mens andre blir hengende etter. Er det rettferdig at skoleresultater skal avhenge av foreldrenes tid og kompetanse?"

**Hva ble bedre:**
1. Spesifikk påstand i stedet for vag ("revurderes" i stedet for "er dumt")
2. Faglig begrunnelse med henvisning til forskning
3. Konkret eksempel som støtter argumentet
4. Avsluttende retorisk spørsmål som engasjerer leseren`,
    },
    {
      id: 'norsk-vg1-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av leserinnlegg',
      problem: `Analyser dette leserinnlegget:

"**Skolen svikter guttene**

Som lærer i over 20 år har jeg sett en bekymringsfull trend: Guttene faller fra. Tall fra SSB viser at jenter har bedre karakterer i nesten alle fag. Mens vi feirer jentenes suksess, glemmer vi å spørre hvorfor guttene sliter.

Kanskje er det på tide å innse at skolen er tilpasset en bestemt måte å lære på. Mer stillesitting, mer lesing, mer skriving - alt dette favoriserer tradisjonelt jenter. Hvor er plassen for praktisk læring? For bevegelse? For konkurranse?

Vi trenger ikke å velge mellom gutter og jenter. Men vi må slutte å late som problemet ikke finnes."`,
      solution: `**Struktur:**
- Innledning: Etos-etablering (20 års erfaring) + problemstilling
- Hoveddel: Logos (SSB-statistikk) + analyse av årsaker
- Avslutning: Nyansering og oppfordring

**Appellformer:**
- **Etos:** «Som lærer i over 20 år» - erfaring gir troverdighet
- **Logos:** Henvisning til SSB-statistikk, logisk resonnement
- **Patos:** «bekymringsfull trend», «svikter», engasjement for guttene

**Argumentasjonsteknikk:**
Innlegget bruker påstand-begrunnelse-struktur:
- Påstand: Skolen svikter guttene
- Belegg: SSB-statistikk om karakterforskjeller
- Hjemmel: (implisitt) Skolen bør fungere like godt for alle

**Språk og stil:**
- Retoriske spørsmål skaper engasjement
- Konkret og direkte språk
- Treleddet oppbygging i «Mer stillesitting, mer lesing, mer skriving»

**Vurdering:**
Et effektivt leserinnlegg som kombinerer personlig erfaring med fakta. Nyansert avslutning styrker troverdigheten.`,
    },
    {
      id: 'norsk-vg1-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom en kronikk og et leserinnlegg?',
        options: [
          'Kronikken er lengre og mer grundig argumenterende',
          'Leserinnlegget publiseres bare på nett',
          'Kronikken kan bare skrives av journalister',
          'Leserinnlegget må handle om lokale saker',
        ],
        answer: 0,
        solution: 'Kronikken er lengre (4000-8000 tegn mot 1500-3000) og forventes å ha grundigere argumentasjon, gjerne med faglig tyngde.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en «krok» i en kronikk eller et leserinnlegg?',
        options: [
          'En fengende innledning som fanger leserens oppmerksomhet',
          'Et argument som motstanderen ikke kan svare på',
          'En måte å avslutte teksten på',
          'En referanse til en annen tekst',
        ],
        answer: 0,
        solution: 'En krok er en fengende innledning som fanger leserens oppmerksomhet, for eksempel en provoserende påstand, et retorisk spørsmål eller en personlig historie.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-ex-5',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre ulike kroker (innledninger) til et leserinnlegg om karakterpress i skolen:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en krok med personlig historie.',
            solution: 'Eksempel: «Da jeg fikk tilbake matematikkprøven, var det første jeg tenkte ikke om jeg hadde forstått stoffet, men om jeg fortsatt var god nok.»',
          },
          {
            label: 'b',
            task: 'Skriv en krok med provoserende påstand.',
            solution: 'Eksempel: «Karaktersystemet ødelegger lærelysten for en hel generasjon.»',
          },
          {
            label: 'c',
            task: 'Skriv en krok med retorisk spørsmål.',
            solution: 'Eksempel: «Når ble tallene på papiret viktigere enn kunnskapen i hodet?»',
          },
        ],
        hints: ['Tenk på hva som ville fått deg til å lese videre', 'Prøv å vekke følelser eller nysgjerrighet'],
        solution: 'Ulike kroker appellerer til ulike lesere. Varier mellom personlige, provoserende og spørrende innledninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-ex-6',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bygg opp et argument med Toulmins modell om følgende påstand: «Skoler bør innføre mobilforbud i undervisningen».',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler påstanden tydelig.',
            solution: 'Påstand: Alle skoler bør forby mobiltelefoner i undervisningen.',
          },
          {
            label: 'b',
            task: 'Finn belegg (fakta/observasjoner) som støtter påstanden.',
            solution: 'Belegg: Forskning viser at elever som har mobil tilgjengelig, presterer dårligere. Land som har innført forbud, rapporterer bedre læringsmiljø.',
          },
          {
            label: 'c',
            task: 'Formuler hjemmelen (den generelle regelen).',
            solution: 'Hjemmel: Det som forbedrer læring og læringsmiljø, bør innføres i skolen.',
          },
          {
            label: 'd',
            task: 'Nevn et mulig unntak fra argumentet.',
            solution: 'Unntak: Elever med spesielle behov som trenger mobilen som hjelpemiddel, bør få unntak.',
          },
        ],
        hints: ['Tenk på hva som kobler fakta til konklusjonen', 'Husk å være nyansert'],
        solution: 'Toulmins modell hjelper deg å bygge opp et fullstendig og nyansert argument.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-4-primaertekst-1',
      type: 'text',
      title: 'Primærtekst: Eksempel på kronikk',
      content: `## Primærtekst: Kronikk om ungdom og skjermtid

**«Vi må snakke om telefonene»**

*Av Maria Hansen, psykolog og forfatter*

Hver dag ser jeg det på venteværelset mitt: Ungdommer som ikke kan løsrive blikket fra skjermen, selv ikke i de få minuttene før timen. Foreldre som sender bekymrede blikk over hodene på barna sine. Vi har fått et problem, og det haster å snakke om det.

La meg være tydelig: Dette handler ikke om å demonisere teknologi. Smarttelefoner er fantastiske verktøy. De kobler oss sammen, gir oss tilgang til informasjon, og har gjort hverdagen enklere på utallige måter. Men når stadig flere unge rapporterer om angst, søvnproblemer og konsentrasjonsvansker, må vi spørre oss selv: Har vi mistet kontrollen?

Forskningen er urovekkende. En studie fra Folkehelseinstituttet viser at ungdom som bruker mer enn fire timer daglig på sosiale medier, har dobbelt så høy risiko for depressive symptomer. Samtidig vet vi at hjernen til en tenåring fortsatt er under utvikling - spesielt de delene som styrer impulskontroll.

Men her kommer paradokset: Vi som voksne er minst like avhengige. Vi sjekker e-post i middagsselskap, scroller Instagram på trening, og svarer på meldinger midt i samtaler med barna våre. Hvordan kan vi forvente at de unge skal ha en sunn relasjon til teknologi når vi selv ikke klarer det?

Jeg har tre forslag:

For det første trenger vi skjermfrie soner i hverdagen. Måltider, soverom, og de første og siste timene av dagen bør være telefonfrie. Ikke som straff, men som en gave til oss selv og relasjonene våre.

For det andre må skolene ta ansvar. Flere land har nå innført mobilforbud i skoletiden med gode resultater. Elevene presterer bedre, og det sosiale miljøet forbedres.

For det tredje: Vi må snakke med de unge, ikke bare til dem. Hva er det de finner på skjermen som de ikke finner andre steder? Ofte handler det om tilhørighet, anerkjennelse og underholdning - behov vi alle har.

Det er lett å føle seg maktesløs i møte med teknologigigantene og algoritmene deres. Men vi har fortsatt et valg. Hver dag, hver gang vi legger fra oss telefonen og ser barnet vårt i øynene, tar vi det valget.

Det begynner med oss.`,
    },
    {
      id: 'norsk-vg1-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-ex-3',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser strukturen i kronikken «Vi må snakke om telefonene» ovenfor:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor slutter innledningen, og hva er kroken?',
            solution: 'Innledningen er de to første avsnittene. Kroken er den personlige observasjonen fra venteværelset som illustrerer problemet.',
          },
          {
            label: 'b',
            task: 'Hva er hovedpåstanden (tesen) i kronikken?',
            solution: 'Vi har mistet kontrollen over teknologibruken, og det påvirker unge menneskers helse negativt.',
          },
          {
            label: 'c',
            task: 'Identifiser de tre hovedargumentene i hoveddelen.',
            solution: 'De tre hovedargumentene er de tre forslagene: 1) Skjermfrie soner, 2) Mobilforbud på skoler, 3) Dialog med de unge.',
          },
        ],
        solution: 'Kronikken følger en klassisk struktur med personlig krok, problemstilling, argumentasjon med fakta, og konkrete forslag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-4-primaertekst-2',
      type: 'text',
      title: 'Primærtekst: Eksempel på leserinnlegg',
      content: `## Primærtekst: Leserinnlegg om kollektivtransport

**«Bussen kommer aldri»**

Jeg bor på Lillestrøm og jobber i Oslo. I teorien er dette en enkel pendlerrute. I praksis er det et mareritt.

Forrige uke var bussen forsinket fire av fem dager. Tirsdag kom den aldri. Onsdag var den så full at jeg måtte vente på neste. Ruters app lyver konsekvent om avgangstider, og når jeg ringer kundeservice, får jeg beskjed om å «sjekke app-en».

Jeg har regnet på det: Hittil i år har jeg mistet over 30 timer på grunn av forsinkelser. Det tilsvarer nesten en hel arbeidsuke. Tid jeg kunne brukt med familien min.

Politikerne snakker om å kutte utslipp og få flere til å velge kollektivt. Men hvordan skal vi velge buss når bussen ikke velger oss? Hvorfor skal jeg betale stadig mer for en tjeneste som blir stadig dårligere?

Jeg er ikke alene om dette. Snakk med hvem som helst på holdeplassen, og du får høre de samme historiene. Men ingen lytter.

Nå har jeg kjøpt bil. Jeg ville helst sluppet.`,
    },
    {
      id: 'norsk-vg1-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-ex-4',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser leserinnlegget «Bussen kommer aldri» ovenfor:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke appellformer bruker forfatteren? Gi eksempler.',
            solution: 'Etos: Personlig erfaring som pendler. Patos: «Tid jeg kunne brukt med familien min», frustrasjon. Logos: Konkrete tall (30 timer tapt), systematisk dokumentasjon av problemer.',
          },
          {
            label: 'b',
            task: 'Hvordan bygges argumentasjonen opp?',
            solution: 'Påstand (bussen fungerer ikke) - belegg (konkrete eksempler fra uken) - konsekvens (tapt tid, kjøpt bil). Avsluttes med politisk poeng.',
          },
          {
            label: 'c',
            task: 'Vurder effektiviteten av innlegget. Hva fungerer godt, og hva kunne vært bedre?',
            solution: 'Styrker: Konkret, personlig, med dokumentasjon. Svakheter: Kunne hatt forslag til løsninger, kunne referert til rapporter eller andre kilder for å styrke logos.',
          },
        ],
        solution: 'Innlegget er et godt eksempel på hvordan personlig erfaring kan brukes som utgangspunkt for samfunnskritikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-4-primaertekst-3',
      type: 'text',
      title: 'Primærtekst: Klassisk kronikk fra litteraturhistorien',
      content: `## Primærtekst: Arnulf Øverland - utdrag fra «Kristendommen - den tiende landeplage» (1933)

Arnulf Øverlands kontroversielle kronikk vakte enorm debatt da den ble publisert. Den illustrerer hvordan kronikken kan brukes til samfunnskritikk med sterke retoriske virkemidler.

*[Utdrag for analyseformål:]*

«Jeg vet at mange vil ta anstøt av det jeg her skal si. La dem gjøre det. Det er nettopp min hensikt å vekke anstøt. Jeg har nemlig ikke noe til overs for den feige og hensiktsløse toleranse som lar alt passere, fordi alt i grunnen er like gyldig.

Jeg vil her kreve rett til å tale fritt om ting som hittil har vært beskyttet av pietet og konvensjon. Jeg gjør det ikke av ondskap, men fordi jeg mener at sannheten må fram, selv om den skulle være ubehagelig.»

**Analyseoppgave:** Legg merke til:
- Øverlands bruk av etos (posisjonerer seg som en som tør å si det andre ikke sier)
- Patos (sterke ord som «feige», «ondskap»)
- Direkte henvendelse til leseren
- Kontraster mellom «toleranse» og «sannhet»

Dette er et eksempel på provokativ kronikk-stil som fortsatt brukes i dag.`,
    },
    {
      id: 'norsk-vg1-1-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-ex-10',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser Øverland-utdraget med fokus på retorikk og stil. Diskuter deretter: Er det greit å bruke så provoserende stil i offentlig debatt? Skriv en reflekterende tekst (300-400 ord).',
        hints: ['Se på ordvalg, kontraster og direkte henvendelse', 'Vurder hvem som er mottaker', 'Diskuter grensene for ytringsfrihet og debattkultur'],
        solution: 'Teksten skal vise evne til retorisk analyse og refleksjon over debattkulturens grenser og virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-1-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-ex-7',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign språk og stil i de to primærtekstene (kronikken og leserinnlegget). Hva er likt og hva er forskjellig?',
        hints: ['Se på setningslengde, ordvalg, bruk av retoriske virkemidler', 'Vurder grad av personlig stil vs. faglig stil'],
        solution: 'Kronikken har lengre setninger, mer faglig språk, flere kilder og et bredere perspektiv. Leserinnlegget er mer personlig, direkte og følelsesladet med kortere setninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-ex-8',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et leserinnlegg (200-300 ord) om et tema du engasjerer deg i. Bruk påstand-begrunnelse-eksempel-strukturen.',
        hints: ['Velg et aktuelt tema', 'Start med en god krok', 'Ha ett tydelig hovedpoeng', 'Avslutt med kraft'],
        solution: 'Innlegget skal ha tydelig struktur, minst ett godt argument med begrunnelse og eksempel, og vise bevisst bruk av appellformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-4-ex-9',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kronikk (500-700 ord) om et samfunnsaktuelt tema. Bruk minst tre ulike argumenttyper (fakta, verdi, konsekvens, ekspert eller eksempel).',
        subTasks: [
          {
            label: 'a',
            task: 'Velg tema og formuler en tydelig tese.',
            solution: 'Tesen skal være et debatterbart standpunkt, ikke et faktautsagn.',
          },
          {
            label: 'b',
            task: 'Planlegg strukturen med innledning (krok), hoveddel (argumenter) og avslutning.',
            solution: 'Lag en disposisjon før du skriver.',
          },
          {
            label: 'c',
            task: 'Skriv kronikken og marker hvilke argumenttyper du bruker.',
            solution: 'Kronikken skal vise bevisst bruk av ulike argumenttyper.',
          },
        ],
        hints: ['Finn minst to gode kilder', 'Vurder motargumenter', 'Les kronikken høyt for å sjekke flyt'],
        solution: 'Kronikken skal vise evne til grundig argumentasjon, kildebruk og bevisst bruk av retoriske virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-4-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **1.1 Retorikk og argumentasjon** – Grunnleggende retoriske begreper og appellformer
- **1.3 Debattinnlegg og meningsytring** – Kortere og mer spisset argumenterende tekst
- **1.2 Sakprosa og kildebruk** – Kildebruk og kildehenvisning i sakprosa`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5: Retorisk analyse
// ============================================================================

export const CHAPTER_NORSK_VG1_1_5: TextbookChapter = {
  id: 'norsk-vg1-1-5',
  courseId: 'norsk-vg1',
  chapterNumber: '1.5',
  title: 'Retorisk analyse',
  description: 'Lær å analysere taler og tekster med retoriske begreper som kairos, aptum og retorisk situasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere tekster med vekt på retoriske appellformer og situasjon',
    'bruke retorisk analyse som verktøy for kritisk lesing',
  ],
  content: [
    {
      id: 'norsk-vg1-1-5-intro',
      type: 'text',
      content: `## Retorisk analyse - å forstå kommunikasjon i dybden

I kapittel 1.1 lærte du om de grunnleggende appellformene etos, patos og logos. Nå skal vi gå dypere inn i den retoriske analysen og lære flere begreper som hjelper oss å forstå hvordan kommunikasjon fungerer.

**Hvorfor retorisk analyse?**
- Forstå hvordan tekster og taler påvirker oss
- Gjennomskue manipulasjon og propaganda
- Bli en bedre skribent og taler selv
- Kritisk lesing av medier og politikk

Retorisk analyse handler ikke bare om å finne virkemidler, men om å forstå hvordan hele kommunikasjonssituasjonen påvirker budskapet.`,
    },
    {
      id: 'norsk-vg1-1-5-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Retorisk situasjon** | Konteksten som all kommunikasjon skjer i |
| **Kairos** | Det rette øyeblikket - å si rett ting til rett tid |
| **Aptum** | At teksten passer til situasjonen og publikum |
| **Exigence** | Det påtrengende problemet som krever respons |
| **Publikum** | De som kan påvirkes og handle |
| **Retoriske vilkår** | Muligheter og begrensninger i situasjonen |
| **Den retoriske pentagon** | Modell med avsender, mottaker, budskap, kontekst, medium |
| **Kommunikasjonsmodell** | Modell som viser hvem som sier hva til hvem |`,
    },
    {
      id: 'norsk-vg1-1-5-def-1',
      type: 'definition',
      title: 'Den retoriske situasjonen',
      content: `Den **retoriske situasjonen** er konteksten som all kommunikasjon skjer i. Den amerikanske retorikeren Lloyd Bitzer definerte tre sentrale elementer:

**1. Det påtrengende problemet (exigence)**
- En situasjon som krever en respons
- Noe som «roper» på at noen sier noe
- Eksempel: En miljøkrise krever at noen tar til orde for handling

**2. Publikum (audience)**
- De som kan påvirkes av budskapet
- De som har makt til å gjøre noe med problemet
- Ikke alle som hører, men de som kan handle

**3. De retoriske vilkårene (constraints)**
- Muligheter og begrensninger i situasjonen
- Hva kan sies? Hva forventes? Hva er passende?
- Inkluderer normer, forventninger, tid og sted

**Kommunikasjonsmodellen:**
Hvem (avsender) - sier hva (budskap) - til hvem (mottaker) - gjennom hvilken kanal (medium) - med hvilken effekt (virkning)`,
    },
    {
      id: 'norsk-vg1-1-5-image-retorisk-analyse',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-1-5-retorisk-analyse.png',
      alt: 'Rammeverk for retorisk analyse med den retoriske situasjonen og kommunikasjonsmodellen',
      caption: 'Rammeverk for retorisk analyse: Den retoriske situasjonen omfatter det påtrengende problemet, publikum og de retoriske vilkårene.',
    },
    {
      id: 'norsk-vg1-1-5-def-2',
      type: 'definition',
      title: 'Kairos - det rette øyeblikket',
      content: `**Kairos** er et gresk begrep som betyr «det rette øyeblikket» eller «den rette tiden».

**Hva innebærer kairos?**
- Timing: Å si rett ting til rett tid
- Kontekst: Hva er aktuelt akkurat nå?
- Mulighet: Å gripe øyeblikket når det byr seg

**Eksempler på kairos:**
- Å holde en tale om trafikksikkerhet like etter en tragisk ulykke
- Å lansere en klimakampanje under en hetebølge
- Å ta opp likestilling på kvinnedagen
- Å kritisere myndighetene rett etter en skandale

**Kairos i analyse:**
Spør deg selv:
- Hvorfor kommer denne teksten/talen akkurat nå?
- Hva er det aktuelle som gjør budskapet relevant?
- Hadde budskapet hatt samme effekt på et annet tidspunkt?

**Merk:** Kairos kan også misbrukes - opportunisme og utnyttelse av tragedier til politisk gevinst er etisk problematisk.`,
    },
    {
      id: 'norsk-vg1-1-5-image-kairos',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-1-5-kairos.png',
      alt: 'Illustrasjon av kairos-begrepet med eksempler på timing i kommunikasjon',
      caption: 'Kairos - det rette øyeblikket: Timing er avgjørende for hvor effektiv kommunikasjonen blir.',
    },
    {
      id: 'norsk-vg1-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr kairos?',
        options: [
          'Det rette øyeblikket - å si rett ting til rett tid',
          'Å være troverdig som avsender',
          'Å appellere til logikk og fornuft',
          'Å bruke følelser for å overbevise',
        ],
        answer: 0,
        solution: 'Kairos er gresk og betyr «det rette øyeblikket» - å time budskapet riktig i forhold til kontekst og situasjon.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-5-def-3',
      type: 'definition',
      title: 'Aptum - det passende',
      content: `**Aptum** handler om hva som er passende i en gitt situasjon. Vi skiller mellom indre og ytre aptum.

**Indre aptum - samsvar innad i teksten:**
- Passer stilen til innholdet?
- Harmonerer argumentene med hverandre?
- Er formen tilpasset budskapet?

*Eksempel:* En morsom innledning i en tale passer ikke hvis emnet er alvorlig (manglende indre aptum).

**Ytre aptum - samsvar med situasjonen:**
- Passer teksten til mottakeren?
- Passer den til anledningen?
- Passer den til avsenderens rolle?
- Passer den til mediet/kanalen?

*Eksempel:* En uformell tone i et formelt jobbintervju (manglende ytre aptum).

**Aptum-spørsmål i analyse:**
1. Avsender-budskap: Passer budskapet til hvem avsenderen er?
2. Budskap-mottaker: Er budskapet tilpasset mottakeren?
3. Situasjon-uttrykk: Er formen passende for situasjonen?
4. Innhold-form: Passer stilen til det som sies?`,
    },
    {
      id: 'norsk-vg1-1-5-example-2',
      type: 'example',
      title: 'Eksempel: Vurdere aptum i ulike situasjoner',
      problem: `Vurder aptum i disse tre situasjonene:

1. En statsminister som holder pressekonferanse om en naturkatastrofe, men åpner med en vits.
2. En ungdomspolitiker som bruker slang og memes i en tale på et ungdomsarrangement.
3. En elev som bruker svært formelt og akademisk språk i en klasseromsdiskusjon.`,
      solution: `**Situasjon 1: Statsministeren med vits under krisen**

**Vurdering:** Manglende ytre aptum. Situasjonen (naturkatastrofe) krever alvor og empati. En vits signaliserer at statsministeren ikke tar situasjonen alvorlig nok.

**Konsekvens:** Statsministerens etos svekkes. Folk vil oppfatte vedkommende som ufølsom.

**Bedre alternativ:** Åpne med beklagelse overfor de rammede og uttrykke medfølelse.

---

**Situasjon 2: Ungdomspolitikeren med slang og memes**

**Vurdering:** God ytre aptum. Språket er tilpasset mottakeren (ungdom) og situasjonen (ungdomsarrangement). Dette kan styrke etosen ved å vise at politikeren "forstår" målgruppen.

**Men pass på:** Må ikke virke påtatt eller overdrevet. Da kan det slå tilbake og svekke troverdigheten.

---

**Situasjon 3: Eleven med svært formelt språk**

**Vurdering:** Mulig manglende ytre aptum. Klasseromsdiskusjoner er ofte mer uformelle. Svært formelt språk kan skape avstand og virke unaturlig.

**Nyanse:** Kommer an på konteksten. I en muntlig eksamen kan formelt språk være mer passende enn i en hverdagslig klassediskusjon.

---

**Hovedpoeng:** Aptum handler om å tilpasse uttrykket til situasjonen. Det som fungerer i én kontekst, kan være helt feil i en annen. God retoriker leser situasjonen og tilpasser seg.`,
    },
    {
      id: 'norsk-vg1-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom indre og ytre aptum?',
        options: [
          'Indre aptum er samsvar innad i teksten, ytre er samsvar med situasjonen',
          'Indre aptum handler om følelser, ytre om logikk',
          'Indre aptum er for skriftlige tekster, ytre for muntlige',
          'Indre aptum er formelt språk, ytre er uformelt',
        ],
        answer: 0,
        solution: 'Indre aptum handler om harmoni mellom tekstens ulike deler, mens ytre aptum handler om at teksten passer til situasjonen, mottakeren og anledningen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-5-def-4',
      type: 'definition',
      title: 'Retorikkens fem arbeidsfaser',
      content: `De gamle grekerne delte talekunsten inn i fem faser. Disse er fortsatt nyttige for å forstå og lage tekster:

**1. Inventio (finne stoff)**
- Hva skal jeg si?
- Samle argumenter, eksempler, fakta
- Brainstorming og research

**2. Dispositio (ordne stoffet)**
- Hvordan skal jeg organisere innholdet?
- Hva kommer først, i midten, til slutt?
- Klassisk struktur: innledning - hoveddel - avslutning

**3. Elocutio (formulere)**
- Hvordan skal jeg si det?
- Ordvalg, setningsoppbygging, stil
- Retoriske virkemidler (metaforer, gjentakelser, kontraster)

**4. Memoria (huske)**
- Hvordan skal jeg huske innholdet?
- Relevant for muntlige presentasjoner
- Øving og forberedelse

**5. Actio (fremføre)**
- Hvordan skal jeg presentere?
- Kroppsspråk, stemmebruk, blikkontakt
- Tilpasning til publikum

**I analyse:** Vurder hvordan avsenderen har arbeidet med disse fasene. God retorikk viser bevisste valg i alle fem.`,
    },
    {
      id: 'norsk-vg1-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble retorikkens fem arbeidsfaser til riktig beskrivelse:',
        subTasks: [
          {
            label: 'a',
            task: 'Inventio',
            solution: 'Finne stoff - samle argumenter og ideer',
            multipleChoiceOptions: ['Finne stoff', 'Ordne stoffet', 'Formulere', 'Huske', 'Fremføre'],
          },
          {
            label: 'b',
            task: 'Dispositio',
            solution: 'Ordne stoffet - bestemme rekkefølge og struktur',
            multipleChoiceOptions: ['Finne stoff', 'Ordne stoffet', 'Formulere', 'Huske', 'Fremføre'],
          },
          {
            label: 'c',
            task: 'Elocutio',
            solution: 'Formulere - velge ord, stil og virkemidler',
            multipleChoiceOptions: ['Finne stoff', 'Ordne stoffet', 'Formulere', 'Huske', 'Fremføre'],
          },
          {
            label: 'd',
            task: 'Actio',
            solution: 'Fremføre - presentere med stemme og kroppsspråk',
            multipleChoiceOptions: ['Finne stoff', 'Ordne stoffet', 'Formulere', 'Huske', 'Fremføre'],
          },
        ],
        solution: 'a) Finne stoff, b) Ordne stoffet, c) Formulere, d) Fremføre',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-5-def-5',
      type: 'definition',
      title: 'Hvordan gjennomføre en retorisk analyse',
      content: `**Trinn 1: Kartlegg den retoriske situasjonen**
- Hvem er avsenderen? (bakgrunn, rolle, troverdighet)
- Hvem er mottakeren? (målgruppe, forkunnskaper, holdninger)
- Hva er anledningen? (kairos - hvorfor akkurat nå?)
- Hva er mediet/kanalen? (avis, tale, sosiale medier)

**Trinn 2: Identifiser budskap og formål**
- Hva er hovedbudskapet/tesen?
- Hva vil avsenderen oppnå? (informere, overbevise, underholde, mobilisere)

**Trinn 3: Analyser appellformene**
- Etos: Hvordan bygger avsenderen troverdighet?
- Patos: Hvordan appellerer teksten til følelser?
- Logos: Hvordan brukes logikk og fakta?
- Hvilken appell dominerer?

**Trinn 4: Undersøk virkemidler og struktur**
- Språklige virkemidler (metaforer, gjentakelse, kontraster)
- Strukturelle grep (oppbygging, disposisjon)
- Stil (formell/uformell, personlig/distansert)

**Trinn 5: Vurder aptum og effekt**
- Er teksten passende for situasjonen? (ytre aptum)
- Er det samsvar mellom innhold og form? (indre aptum)
- Hvor effektiv er kommunikasjonen? Når den målet?

**Trinn 6: Konkluder og vurder**
- Oppsummer de viktigste funnene
- Vurder teksten kritisk
- Reflekter over tekstens betydning`,
    },
    {
      id: 'norsk-vg1-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Retorisk analyse av tale',
      problem: `Gjennomfør en kort retorisk analyse av denne innledningen fra Barack Obamas tale etter Sandy Hook-skytingen (2012):

"Vi har opplevd dette for mange ganger. Enten det er en elementer skole i Newtown, eller et kjøpesenter i Oregon, eller et tempel i Wisconsin, eller et kinosenter i Aurora, eller et gatehjørne i Chicago - disse nabolagene er våre nabolag, og disse barna er våre barn."`,
      solution: `**Retorisk situasjon:**
- Avsender: President Barack Obama - høy etisk posisjon som nasjonens leder
- Mottaker: Det amerikanske folk, spesielt foreldre og de som er berørt
- Kairos: Umiddelbart etter en nasjonal tragedie - sterkt påtrengende problem
- Medium: Offisiell tale, direktesendt på TV

**Appellformer:**
- **Etos:** Obama taler som president og som far («våre barn»), noe som styrker hans troverdighet og autoritet
- **Patos:** Sterkt følelsesladet - oppramsingen av tragedier skaper sorg og frustrasjon. «Disse barna er våre barn» appellerer til foreldres dypeste frykt
- **Logos:** Oppramsingen fungerer også logisk - den viser et mønster som krever handling

**Virkemidler:**
- **Oppramning:** Listen over steder skaper et bilde av et mønster
- **Gjentakelse:** «våre nabolag... våre barn» - inkluderende fellesskapsfølelse
- **Anafon:** «Enten det er...» gjentas og skaper rytme

**Aptum:**
- Ytre: Høytidelig, alvorlig tone passer perfekt til situasjonen
- Indre: Form og innhold harmonerer - enkel struktur, sterke ord

**Vurdering:**
Ekstremt effektiv innledning som utnytter kairos maksimalt. Obama transformerer en lokal tragedie til et nasjonalt anliggende gjennom «våre»-retorikken.`,
    },
    {
      id: 'norsk-vg1-1-5-primaertekst-1',
      type: 'text',
      title: 'Primærtekst: Martin Luther King Jr. - "I Have a Dream" (utdrag)',
      content: `## Primærtekst: Martin Luther King Jr. - "I Have a Dream" (1963)

**Kontekst:** Holdt under marsjen mot Washington, 28. august 1963, foran over 250 000 mennesker ved Lincoln Memorial.

*[Utdrag fra den avsluttende delen:]*

«I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.

I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal."

I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.

I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice.

I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.

I have a dream today!»

---

**Oversettelse (forenklet):**

«Jeg sier til dere i dag, mine venner, selv om vi står overfor dagens og morgendagens vanskeligheter, har jeg fortsatt en drøm. Det er en drøm dypt forankret i den amerikanske drømmen.

Jeg har en drøm om at denne nasjonen en dag vil reise seg og leve ut den sanne betydningen av sin tro: 'Vi holder disse sannhetene for selvinnlysende, at alle mennesker er skapt like.'

Jeg har en drøm om at på Georgias røde åser vil sønnene til tidligere slaver og sønnene til tidligere slaveeiere en dag kunne sitte sammen ved brorskapets bord.

Jeg har en drøm om at selv delstaten Mississippi, en stat som koker av urettferdighetens hete, koker av undertrykkingens hete, vil bli forvandlet til en oase av frihet og rettferdighet.

Jeg har en drøm om at mine fire små barn en dag vil leve i en nasjon hvor de ikke blir bedømt etter hudfargen, men etter karakterens innhold.

Jeg har en drøm i dag!»`,
    },
    {
      id: 'norsk-vg1-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser kairos i Martin Luther Kings "I Have a Dream"-tale:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var den retoriske situasjonen? (Påtrengende problem, publikum, vilkår)',
            solution: 'Påtrengende problem: Rasediskriminering og borgerrettighetskamp. Publikum: 250 000 demonstranter og hele den amerikanske nasjonen gjennom TV. Vilkår: Stor nasjonal oppmerksomhet, symbolsk sted (Lincoln Memorial), historisk øyeblikk.',
          },
          {
            label: 'b',
            task: 'Hvorfor var dette det rette øyeblikket (kairos) for denne talen?',
            solution: 'Borgerrettighetsbevegelsen var på sitt sterkeste, nasjonal og internasjonal oppmerksomhet var rettet mot marsjen, og King grep muligheten til å definere bevegelsens visjon for fremtiden.',
          },
          {
            label: 'c',
            task: 'Hvordan utnytter King kairos i selve talen?',
            solution: 'Han refererer til «hundre år» siden Emansipasjonsdeklarasjonen, kobler drømmen til grunnleggende amerikanske verdier, og bruker øyeblikket til å male et bilde av fremtiden.',
          },
        ],
        solution: 'King utnyttet det historiske øyeblikket maksimalt ved å forene borgerrettighetskampen med amerikanske kjerneverdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-5-primaertekst-2',
      type: 'text',
      title: 'Primærtekst: Greta Thunberg - tale til FN (utdrag)',
      content: `## Primærtekst: Greta Thunberg - tale til FNs klimatoppmøte (2019)

**Kontekst:** Holdt under FNs klimatoppmøte i New York, 23. september 2019.

*[Utdrag:]*

«My message is that we'll be watching you.

This is all wrong. I shouldn't be up here. I should be back in school on the other side of the ocean. Yet you all come to us young people for hope. How dare you!

You have stolen my dreams and my childhood with your empty words. And yet I'm one of the lucky ones. People are suffering. People are dying. Entire ecosystems are collapsing. We are in the beginning of a mass extinction, and all you can talk about is money and fairy tales of eternal economic growth. How dare you!

For more than 30 years, the science has been crystal clear. How dare you continue to look away and come here saying that you're doing enough, when the politics and solutions needed are still nowhere in sight.

You say you hear us and that you understand the urgency. But no matter how sad and angry I am, I do not want to believe that. Because if you really understood the situation and still kept on failing to act, then you would be evil. And that I refuse to believe.»

---

**Oversettelse (forenklet):**

«Budskapet mitt er at vi kommer til å følge med på dere.

Alt dette er galt. Jeg burde ikke stå her. Jeg burde være tilbake på skolen på den andre siden av havet. Likevel kommer dere alle til oss unge mennesker for håp. Hvordan våger dere!

Dere har stjålet drømmene mine og barndommen min med deres tomme ord. Og likevel er jeg en av de heldige. Folk lider. Folk dør. Hele økosystemer kollapser. Vi er i begynnelsen av en masseutryddelse, og alt dere kan snakke om er penger og eventyr om evig økonomisk vekst. Hvordan våger dere!

I mer enn 30 år har vitenskapen vært krystallklar. Hvordan våger dere å fortsette å se bort og komme hit og si at dere gjør nok, når politikken og løsningene som trengs, fortsatt ikke er i sikte.

Dere sier at dere hører oss og at dere forstår alvoret. Men uansett hvor trist og sint jeg er, vil jeg ikke tro det. For hvis dere virkelig forsto situasjonen og fortsatt ikke handlet, da ville dere vært onde. Og det nekter jeg å tro.»`,
    },
    {
      id: 'norsk-vg1-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser det retoriske virkemiddelet «How dare you!» i Thunbergs tale:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva slags virkemiddel er dette, og hvilken effekt har det?',
            solution: 'Gjentakelse (anafor) kombinert med retorisk spørsmål/anklage. Effekten er å uttrykke sinne, stille til ansvar, og skape en rytme som forsterker budskapet.',
          },
          {
            label: 'b',
            task: 'Hvordan bryter dette med forventningene til en FN-tale?',
            solution: 'FN-taler er vanligvis diplomatiske og høflige. Thunberg bryter radikalt med denne normen ved å anklage tilhørerne direkte. Dette skaper oppmerksomhet og understreker alvoret.',
          },
          {
            label: 'c',
            task: 'Diskuter: Er dette god eller dårlig retorikk? Begrunn svaret.',
            solution: 'Avhenger av perspektiv. God: Autentisk, ærlig, skapte massiv oppmerksomhet, mobiliserte unge. Dårlig: Kan fremmedgjøre beslutningstakere, risikerer å bli avfeid som emosjonell. Effektiv for noen mottakere, ikke for andre.',
          },
        ],
        hints: ['Tenk på hvem talen var rettet mot', 'Vurder både umiddelbar og langsiktig effekt'],
        solution: 'Thunbergs stil er et bevisst brudd med konvensjoner som skaper oppmerksomhet, men som også kan være polariserende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-5-primaertekst-3',
      type: 'text',
      title: 'Primærtekst: Jens Stoltenberg - tale etter 22. juli (utdrag)',
      content: `## Primærtekst: Jens Stoltenberg - tale i Oslo Domkirke (2011)

**Kontekst:** Holdt under minnegudstjenesten 24. juli 2011, to dager etter terrorangrepene som tok 77 liv.

*[Utdrag:]*

«I går kveld var det i Oslos gater tusenvis av roser utenfor kirken. Vi forstår ikke som har mistet sine nærmeste.

Det som har skjedd er et stort traume for alle som ble direkte rammet, og for hele nasjonen. Jeg har selv møtt foreldre, søsken og besteforeldre som har mistet sine kjæreste.

Deres tap er ufattelig. Sorgen er dyp, og den vil vare. Men midt i all sorg har vi sett noe som gjør oss stolte.

Vi har sett en nasjon som reiser seg. Vi har sett mennesker som tar vare på hverandre. Vi har sett at onde gjerninger ikke sprer frykt, men samler et folk.

I kveld er gatene fylt med kjærlighet.

Det var et angrep på våre verdier, på vårt åpne samfunn, på vårt demokrati. Vårt svar er mer demokrati, mer åpenhet og mer humanitet. Men aldri naivitet.

Ingen har sagt det bedre enn AUF-jenta som ble intervjuet av CNN: 'Hvis én mann kan vise så mye hat, tenk hvor mye kjærlighet vi alle kan vise sammen.'»`,
    },
    {
      id: 'norsk-vg1-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder aptum i Stoltenbergs tale etter 22. juli:',
        subTasks: [
          {
            label: 'a',
            task: 'Vurder ytre aptum: Passer talen til situasjonen, mottakeren og anledningen?',
            solution: 'Ja - alvorlig, verdig, samlende tone. Passer til minnegudstjeneste og et traumatisert folk. Stoltenberg taler som statsminister og medmenneske.',
          },
          {
            label: 'b',
            task: 'Vurder indre aptum: Er det samsvar mellom innhold, form og stil?',
            solution: 'Ja - enkel, klar struktur. Korte setninger. Sterke, men ikke overdrevne bilder. Balanse mellom sorg og håp. Ingen politisk polemikk.',
          },
          {
            label: 'c',
            task: 'Hvorfor valgte Stoltenberg å sitere AUF-jenta i avslutningen?',
            solution: 'Sitatet gir stemme til de unge som ble rammet, forsterker budskapet om kjærlighet vs. hat, og skaper en kraftfull avslutning som er lettere å huske enn egne ord.',
          },
        ],
        solution: 'Talen er et eksempel på høy grad av aptum - perfekt tilpasset en ekstremt vanskelig retorisk situasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-1-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Greta Thunbergs og Martin Luther Kings taler med fokus på retoriske strategier:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan bygger hver av dem etos? Sammenlign.',
            solution: 'King: Erfaren predikant, sivil leder, moralsk autoritet. Thunberg: Ung, autentisk, representerer fremtidige generasjoner. Begge bruker sin posisjon strategisk - King som etablert, Thunberg som utenfor systemet.',
          },
          {
            label: 'b',
            task: 'Hvilke patos-strategier bruker de? Hva er likt og forskjellig?',
            solution: 'King: Håp, drøm, inspirasjon, fellesskap. Thunberg: Sinne, frykt, skyld, desperat alvor. King trekker mot lyset, Thunberg konfronterer.',
          },
          {
            label: 'c',
            task: 'Hvordan bruker de gjentakelse som virkemiddel?',
            solution: 'King: «I have a dream» - skaper rytme og visjon. Thunberg: «How dare you!» - uttrykker sinne og anklage. Begge bruker anafor for å forsterke budskapet.',
          },
        ],
        solution: 'Begge er mestere i retorikk, men med helt ulike strategier tilpasset deres situasjon, persona og mål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn en aktuell tale eller et debattinnlegg i norske medier. Kartlegg den retoriske situasjonen ved å svare på disse spørsmålene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem er avsenderen, og hvilken etos har vedkommende?',
            solution: 'Beskriv avsenderens bakgrunn, posisjon og hvordan dette påvirker troverdigheten.',
          },
          {
            label: 'b',
            task: 'Hvem er mottakeren, og hva er konteksten (kairos)?',
            solution: 'Identifiser målgruppen og forklar hvorfor teksten kommer akkurat nå.',
          },
          {
            label: 'c',
            task: 'Hva er budskapet, og hvordan argumenterer avsenderen?',
            solution: 'Oppsummer hovedpåstanden og de viktigste argumentene.',
          },
        ],
        hints: ['Bruk NRK, VG, Dagbladet eller andre nyhetsmedier', 'Velg gjerne en tekst om et tema du interesserer deg for'],
        solution: 'Øvelsen trener evnen til å anvende retoriske begreper på faktiske tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en fullstendig retorisk analyse (500-700 ord) av en av primærtekstene (King, Thunberg eller Stoltenberg). Bruk alle begrepene fra kapittelet.',
        hints: [
          'Følg strukturen fra «Hvordan gjennomføre en retorisk analyse»',
          'Start med den retoriske situasjonen',
          'Analyser appellformer, virkemidler og aptum',
          'Avslutt med en helhetlig vurdering',
        ],
        solution: 'Analysen skal vise systematisk bruk av retoriske fagbegreper i en sammenhengende, velstrukturert tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlignende analyse: Velg to av primærtekstene og sammenlign dem systematisk. Diskuter likheter og forskjeller i retorisk strategi. (600-800 ord)',
        subTasks: [
          {
            label: 'a',
            task: 'Sammenlign den retoriske situasjonen for de to talene.',
            solution: 'Beskriv likheter og forskjeller i kontekst, publikum og kairos.',
          },
          {
            label: 'b',
            task: 'Sammenlign bruken av appellformer og virkemidler.',
            solution: 'Vis hvordan talerne bruker etos, patos og logos på ulike måter.',
          },
          {
            label: 'c',
            task: 'Vurder hvilken tale som er mest effektiv, og begrunn svaret.',
            solution: 'Effektivitet avhenger av formål og mottaker - diskuter dette nyansert.',
          },
        ],
        hints: ['Bruk konkrete eksempler fra begge tekstene', 'Organiser teksten tematisk, ikke tekst for tekst'],
        solution: 'En god sammenligning viser forståelse for at ulike situasjoner krever ulike retoriske strategier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-5-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **1.1 Retorikk og argumentasjon** – Grunnleggende begreper: etos, patos, logos
- **1.3 Debattinnlegg og meningsytring** – Bruk retoriske virkemidler i egen skriving
- **5.5 Tolkende og analyserende tekst** – Skriv analyser av retoriske tekster`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.1: Skjønnlitteratur - noveller og kortprosa
// ============================================================================

export const CHAPTER_NORSK_VG1_2_1: TextbookChapter = {
  id: 'norsk-vg1-2-1',
  courseId: 'norsk-vg1',
  chapterNumber: '2.1',
  title: 'Novelleanalyse',
  description: 'Lær å analysere og tolke noveller og annen kortprosa.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke skjønnlitterære tekster med vekt på form og innhold',
  ],
  content: [
    {
      id: 'norsk-vg1-2-1-intro',
      type: 'text',
      content: `## Novellen som sjanger

Novellen er en kort, fortellende tekst som skiller seg fra romanen ved sin konsentrasjon og fokus. Mens romanen kan utforske mange temaer og personer over tid, fokuserer novellen gjerne på én hendelse eller ett vendepunkt.

**Kjennetegn på novellen:**
- Kort form (få sider til noen titalls sider)
- Få personer
- Begrenset tidsrom
- Ofte ett sentralt vendepunkt
- Konsentrert handling
- Åpen eller overraskende slutt`,
    },
    {
      id: 'norsk-vg1-2-1-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Novelle** | Kort, fortellende tekst med konsentrert handling |
| **Synsvinkel** | Hvem som ser og opplever handlingen i teksten |
| **Forteller** | Den stemmen som forteller historien |
| **Vendepunkt** | Det avgjørende øyeblikket der handlingen snur |
| **Symbol** | Noe konkret som representerer noe abstrakt |
| **Motiv** | Et gjentakende element som skaper mening |
| **Tema** | Hovedideen eller det teksten handler om på et dypere plan |
| **In medias res** | Å begynne midt i handlingen |`,
    },
    {
      id: 'norsk-vg1-2-1-def-1',
      type: 'definition',
      title: 'Novelleanalyse - SVIRP-modellen',
      content: `**S - Sjanger og struktur**
- Hvilken type novelle er det? (realistisk, fantastisk, psykologisk)
- Hvordan er oppbyggingen? (spenningskurve, tidshåndtering)

**V - Virkemidler**
- Språklige virkemidler (metaforer, symboler, kontraster)
- Fortelleteknikk (synsvinkel, fortellerstemme)

**I - Innhold og handling**
- Hva skjer i teksten? (kort sammendrag)
- Hvem er personene og hvordan utvikler de seg?

**R - Relasjon og kontekst**
- Når og hvor ble novellen skrevet?
- Historisk og litteraturhistorisk kontekst

**P - Personlig tolkning**
- Hva er tema og budskap?
- Hvordan kan vi forstå teksten i dag?`,
    },
    {
      id: 'norsk-vg1-2-1-def-2',
      type: 'definition',
      title: 'Fortelleteknikk',
      content: `**Synsvinkel:**
- **Jeg-forteller:** Fortalt fra én persons perspektiv (begrenset innsikt)
- **Tredjeperson begrenset:** Følger én person, men i tredjeperson
- **Allvitende forteller:** Kjenner alle personers tanker og følelser

**Tidshåndtering:**
- **Kronologisk:** Hendelsene fortelles i den rekkefølgen de skjer
- **In medias res:** Starter midt i handlingen
- **Tilbakeblikk (analepse):** Hopper tilbake i tid
- **Frampek (prolepse):** Antyder hva som skal skje

**Spenningskurve:**
1. Eksposisjon (introduksjon av setting og personer)
2. Komplikasjon (konflikt oppstår)
3. Spenningsstigning
4. Klimaks (høydepunkt)
5. Avtrapning
6. Løsning/avslutning`,
    },
    {
      id: 'norsk-vg1-2-1-image-novelle-struktur',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-1-novelle-struktur.png',
      alt: 'Spenningskurven i en novelle med eksposisjon, komplikasjon, spenningsstigning, klimaks, avtrapning og løsning',
      caption: 'Spenningskurven viser den dramatiske buen i en novelle fra eksposisjon til løsning.',
    },
    {
      id: 'norsk-vg1-2-1-image-novelle-elementer',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-1-novelle-elementer.png',
      alt: 'Oversikt over novellens elementer: synsvinkel, forteller, vendepunkt, symbol, motiv og tema',
      caption: 'Novellens grunnleggende elementer - bruk disse begrepene når du analyserer kortprosa.',
    },
    {
      id: 'norsk-vg1-2-1-example-0',
      type: 'example',
      title: 'Eksempel: Identifisere synsvinkel og fortelleteknikk',
      problem: `Les disse tre åpningene og identifiser synsvinkel og fortelleteknikk:

**Tekst A:** "Jeg våknet av lyden av glass som knuste. Hjertet hamret. Noen var i huset."

**Tekst B:** "Maren lå våken og stirret i taket. Hun visste at hun burde sove, men tankene ville ikke gi seg. Utenfor vinduet hørte hun en bil kjøre forbi."

**Tekst C:** "Klokken var halv tre om natten. I det lille huset på hjørnet lå Maren våken og tenkte på morgendagen. I nabohuset sov Erik tungt, uvitende om at dette var siste gang."`,
      solution: `**Tekst A: Jeg-forteller**
- Synsvinkel: Første person ("Jeg")
- Begrenset innsikt: Vi vet bare det fortelleren vet/opplever
- Effekt: Skaper umiddelbar spenning og identifikasjon
- Vi er "inni" karakteren og opplever frykten med ham/henne

**Tekst B: Tredjeperson begrenset**
- Synsvinkel: Tredje person, men følger Marens perspektiv
- Vi har tilgang til Marens tanker ("hun visste"), men ikke andres
- Effekt: Nærhet til karakteren, men med litt mer distanse enn jeg-forteller
- Objektivt ytre kombinert med subjektivt indre

**Tekst C: Allvitende forteller**
- Synsvinkel: Tredje person, men kjenner flere karakterers situasjon
- Kan hoppe mellom Maren og Erik, og vet fremtiden ("siste gang")
- Effekt: Skaper dramatisk ironi - vi vet mer enn karakterene
- Frampeket ("siste gang") antyder at noe dramatisk skal skje

**Lærdom:** Valg av synsvinkel påvirker hva leseren får vite og hvordan vi opplever historien. Jeg-forteller gir nærhet, allvitende gir oversikt og mulighet for dramatisk ironi.`,
    },
    {
      id: 'norsk-vg1-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av "Karen" av Alexander Kielland',
      problem: `Analyser novellen "Karen" (1882) med fokus på virkemidler og tema.`,
      solution: `**Sjanger:** Realistisk novelle fra realismen

**Handling:** Karen er en ung tjenestepike som blir gravid med sin arbeidsgiver, men blir kastet ut og ender i fattigdom og prostitusjon.

**Virkemidler:**
- **Kontrastbruk:** Overklassens velstand mot Karens fattigdom
- **Ironi:** Samfunnets "moral" kontra handlingene
- **Naturskildringer:** Speiler Karens sinnstilstand

**Synsvinkel:** Tredjeperson med fokus på Karen

**Tema:** Sosial urettferdighet, dobbeltmoral, kvinneundertrykkelse

**Budskap:** Kielland kritiserer et samfunn der kvinner blir ofre for menns handlinger, mens mennene går fri. Novellen avslører hykleriet i borgerlig moral.

**Kontekst:** Skrevet i realismen, en periode preget av samfunnskritikk og fokus på urettferdighet.`,
    },
    {
      id: 'norsk-vg1-2-1-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Alexander Kielland – «Karen» (1882)',
      content: [
        {
          id: 'norsk-vg1-2-1-primaertekst-1-text',
          type: 'text',
          content: TEKST_KIELLAND_KAREN,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-1-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Bjørnstjerne Bjørnson – «Faderen» (1860)',
      content: [
        {
          id: 'norsk-vg1-2-1-primaertekst-2-text',
          type: 'text',
          content: TEKST_BJORNSON_FADEREN,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-1-primaertekst-3',
      type: 'collapsible',
      title: 'Primærtekst: Amalie Skram – «Karens jul» (1885)',
      content: [
        {
          id: 'norsk-vg1-2-1-primaertekst-3-text',
          type: 'text',
          content: TEKST_SKRAM_KARENS_JUL,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-1-primaertekst-4',
      type: 'collapsible',
      title: 'Primærtekst: Jonas Lie – «Trold» (1891)',
      content: [
        {
          id: 'norsk-vg1-2-1-primaertekst-4-text',
          type: 'text',
          content: TEKST_LIE_TROLD,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-1-def-samtid',
      type: 'definition',
      title: 'Samtidsnoveller',
      content: `**Hva kjennetegner samtidsnoveller?**
Samtidsnoveller er noveller skrevet fra rundt 1980 og frem til i dag. De skiller seg ofte fra de klassiske realistiske novellene ved å bruke et mer minimalistisk språk, åpne slutninger og fokus på hverdagslige situasjoner.

**Viktige samtidsforfattere:**
- **Kjell Askildsen** (1929–2021): Mester i minimalistisk prosa, ofte kalt "Nordens Hemingway"
- **Hanne Ørstavik** (f. 1969): Utforsker ensomhet og relasjoner med poetisk presisjon
- **Roy Jacobsen** (f. 1954): Kombinerer realisme med lyriske skildringer
- **Frode Grytten** (f. 1960): Skriver om arbeiderklassen og hverdagsliv med poetisk blikk
- **Ingvild H. Rishøi** (f. 1978): Skildrer marginaliserte skjebner med varme og presisjon

**Sentrale temaer:**
- **Fremmedgjøring:** Personer som ikke føler tilhørighet eller forbindelse med andre
- **Identitet:** Hvem er vi egentlig? Hvordan former omgivelsene oss?
- **Hverdagsliv:** Fokus på tilsynelatende små hendelser som avslører noe stort
- **Klasse og sosiale forskjeller:** Fortsatt aktuelt, men skildret på nye måter

**Stilistiske kjennetegn:**
- **Minimalisme:** Kort, konsentrert språk. Det som ikke sies, er like viktig som det som sies.
- **Åpne avslutninger:** Leseren må selv tolke hva som skjer videre
- **Upålitelig forteller:** Fortelleren vet ikke alt, eller skjuler noe for leseren
- **Undertekst:** Mye av meningen ligger "mellom linjene"
- **Hverdagsspråk:** Enklere, mer muntlig språk enn i klassiske noveller`,
    },
    {
      id: 'norsk-vg1-2-1-example-samtid',
      type: 'example',
      title: 'Eksempel: Analyse av samtidsnovelle',
      problem: `Hvordan analyserer vi en minimalistisk samtidsnovelle med SVIRP-modellen? La oss se på kjennetegnene ved Kjell Askildsens stil som eksempel.`,
      solution: `**Askildsens stil - et eksempel på minimalistisk novellekunst:**

Kjell Askildsen regnes som en mester i den minimalistiske novellen. Hans tekster kjennetegnes av:
- Korte, enkle setninger
- Mye dialog, lite beskrivelse
- Karakterer som ikke sier det de egentlig mener
- Et fravær av forklaring - leseren må tolke selv

**SVIRP-analyse av en typisk Askildsen-novelle:**

**S - Sjanger og struktur:**
Minimalistisk novelle. Ofte mangler tradisjonell spenningskurve. Handlingen kan virke "flat", men under overflaten bygges det opp en spenning gjennom det usagte.

**V - Virkemidler:**
- **Understatement:** Følelser og konflikter nedtones i språket
- **Repetisjon:** Gjentakelser av ord og setninger skaper ubehag
- **Tomrom i dialogen:** Pauser og det som ikke sies
- **Symbolske gjenstander:** Hverdagslige ting (kaffekopper, aviser) får betydning

**I - Innhold og handling:**
Ofte tilsynelatende hverdagslige situasjoner - en samtale mellom ektefeller, et besøk hos en nabo. Men under overflaten avdekkes fremmedgjøring, ensomhet eller undertrykte konflikter.

**R - Relasjon og kontekst:**
Askildsen skrev fra 1950-tallet til 2000-tallet. Hans noveller reflekterer et moderne Norge der tradisjonelle fellesskap har forvitret. Inspirert av Hemingway og den amerikanske kortprosatradisjonen.

**P - Personlig tolkning:**
Den minimalistiske stilen tvinger leseren til å være aktiv. Vi må lese mellom linjene og tåle usikkerhet. Dette speiler kanskje hvordan kommunikasjon i det moderne samfunnet ofte svikter.

**Tips til analyse av samtidsnoveller:**
- Let etter det som IKKE sies
- Vær oppmerksom på gjentakelser og mønstre
- Spør deg selv: Hva skjuler karakterene?
- Godta at slutten kan være åpen - det er meningen!`,
    },
    {
      id: 'norsk-vg1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn og les en samtidsnovelle av en av forfatterne nevnt ovenfor (Askildsen, Ørstavik, Jacobsen, Grytten eller Rishøi). Skriv en analyse (300-400 ord) med SVIRP-modellen.',
        hints: [
          'Mange biblioteker har novellesamlinger av disse forfatterne',
          'Vær spesielt oppmerksom på det som ikke sies direkte i teksten',
          'Noter deg hvordan avslutningen fungerer - er den åpen eller lukket?',
        ],
        solution: 'Analysen skal vise forståelse for minimalistisk stil og demonstrere evne til å tolke undertekst og åpne avslutninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign en realistisk novelle fra 1800-tallet (f.eks. Kielland eller Skram) med en minimalistisk samtidsnovelle. Drøft følgende:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skiller språket og stilen seg?',
            solution: 'Realistene bruker ofte mer utfyllende beskrivelser og forklaringer, mens samtidsforfattere bruker kortere setninger og lar mer være usagt.',
          },
          {
            label: 'b',
            task: 'Hvordan presenteres personene ulikt?',
            solution: 'Realistene gir ofte mer direkte karakterbeskrivelser, mens samtidsforfattere lar leseren tolke gjennom handling og dialog.',
          },
          {
            label: 'c',
            task: 'Hvordan er avslutningene forskjellige?',
            solution: 'Realistiske noveller har ofte tydeligere avslutninger med klar moral, mens samtidsnoveller ofte har åpne slutninger.',
          },
          {
            label: 'd',
            task: 'Hva forteller forskjellene om sin tid?',
            solution: 'Realistene ville avdekke og kritisere samfunnsproblemer direkte. Samtidsforfattere speiler kanskje en tid der sannheten er mer usikker og fragmentert.',
          },
        ],
        hints: [
          'Bruk konkrete teksteksempler fra begge novellene',
          'Tenk på hva forfatterne ville oppnå med sin stil',
        ],
        solution: 'Sammenligningen skal vise forståelse for hvordan novellesjangeren har utviklet seg, og reflektere over sammenhengen mellom form og historisk kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser synsvinkel i disse åpningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg våknet av en lyd jeg ikke kjente igjen."',
            solution: 'Jeg-forteller',
            multipleChoiceOptions: ['Jeg-forteller', 'Tredjeperson begrenset', 'Allvitende forteller'],
          },
          {
            label: 'b',
            task: '"Han visste ikke at hun allerede hadde bestemt seg. Hun på sin side ante ikke at han hadde sett brevet."',
            solution: 'Allvitende forteller - har innsikt i begges tanker',
            multipleChoiceOptions: ['Jeg-forteller', 'Tredjeperson begrenset', 'Allvitende forteller'],
          },
          {
            label: 'c',
            task: '"Maren så ut av vinduet. Hva skulle hun gjøre nå? Mannen i gata så opp mot henne."',
            solution: 'Tredjeperson begrenset - vi følger Marens perspektiv',
            multipleChoiceOptions: ['Jeg-forteller', 'Tredjeperson begrenset', 'Allvitende forteller'],
          },
        ],
        solution: 'a) Jeg-forteller, b) Allvitende, c) Tredjeperson begrenset',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn spenningskurven for en novelle du har lest.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser eksposisjonen.',
            solution: 'Beskriv hvordan novellen introduserer personer og setting.',
          },
          {
            label: 'b',
            task: 'Hva er konflikten/komplikasjonen?',
            solution: 'Beskriv hva som setter handlingen i gang.',
          },
          {
            label: 'c',
            task: 'Hvor er klimaks?',
            solution: 'Identifiser det mest intense øyeblikket.',
          },
          {
            label: 'd',
            task: 'Hvordan er avslutningen?',
            solution: 'Er den åpen, lukket, overraskende?',
          },
        ],
        hints: ['Tegn gjerne en visuell kurve', 'Bruk konkrete eksempler fra teksten'],
        solution: 'Spenningskurven viser hvordan novellen bygger opp mot et høydepunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les en novelle og skriv en analyse (300-400 ord) med SVIRP-modellen.',
        hints: ['Velg en novelle fra pensum eller fra et novellehefte', 'Dekk alle punktene i modellen'],
        solution: 'Analysen skal vise forståelse for sjanger, virkemidler, innhold, kontekst og gi en egen tolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign to noveller med samme tema (f.eks. kjærlighet eller død). Hvordan behandler de temaet ulikt?',
        hints: ['Se på virkemidler, synsvinkel og avslutning', 'Vurder også historisk kontekst'],
        solution: 'Sammenligningen bør vise likheter og forskjeller i form og innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv åpningen til en egen novelle (150 ord) som starter in medias res.',
        hints: ['Start midt i en spennende scene', 'La leseren lure på hva som skjer'],
        solution: 'Åpningen skal fange leserens interesse og starte midt i handlingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-8',
        number: '8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kalles det når fortelleren kjenner alle personers tanker og følelser?',
        options: [
          'Allvitende forteller',
          'Jeg-forteller',
          'Tredjeperson begrenset',
          'Upålitelig forteller',
        ],
        answer: 0,
        solution: 'En allvitende forteller har innsikt i alle personers tanker og følelser, og kan skifte mellom perspektiver.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-9',
        number: '9',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse er IKKE et typisk kjennetegn på novellen?',
        options: [
          'Mange personer og parallelle handlinger',
          'Kort form',
          'Begrenset tidsrom',
          'Ofte ett sentralt vendepunkt',
        ],
        answer: 0,
        solution: 'Novellen kjennetegnes av få personer og konsentrert handling. Mange personer og parallelle handlinger er typisk for romanen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les «Karen» av Kielland ovenfor. Analyser novellen med SVIRP-modellen.',
        subTasks: [
          { label: 'a', task: 'Beskriv sjanger og struktur.', solution: 'Realistisk novelle med kronologisk oppbygning og en tydelig spenningskurve.' },
          { label: 'b', task: 'Identifiser tre sentrale virkemidler.', solution: 'F.eks. kontrastbruk, ironi, naturskildringer som speiler stemning.' },
          { label: 'c', task: 'Oppsummer innhold og handling kort.', solution: 'Karen er en tjenestepike som utnyttes, kastes ut og ender i fattigdom.' },
          { label: 'd', task: 'Plasser teksten i historisk kontekst.', solution: 'Skrevet i realismen (1880-tallet), preget av samfunnskritikk.' },
          { label: 'e', task: 'Gi din personlige tolkning av tema og budskap.', solution: 'Kielland kritiserer dobbeltmoral og sosial urettferdighet.' },
        ],
        solution: 'Analysen skal dekke alle fem punkter i SVIRP-modellen med konkrete teksteksempler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les «Faderen» av Bjørnson ovenfor. Analyser tema og virkemidler.',
        subTasks: [
          { label: 'a', task: 'Hva handler novellen om?', solution: 'En far som bærer sitt døde barn over isen for å få det døpt - en historie om tro, tap og forsoning.' },
          { label: 'b', task: 'Hvilke virkemidler bruker Bjørnson?', solution: 'Naturskildringer, symbolikk (isen, kirken), kontraster mellom liv og død.' },
          { label: 'c', task: 'Hva er novellens tema og budskap?', solution: 'Temaet er tro, forsoning og farskjærlighet. Bjørnson viser hvordan troen gir styrke i kriser.' },
        ],
        hints: ['Se på naturens rolle i novellen', 'Tenk på hva isen symboliserer'],
        solution: 'Analysen bør vise forståelse for Bjørnsons bruk av natur som speil for menneskelige følelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign «Karen» av Kielland og «Karens jul» av Skram. To noveller om kvinner ved navn Karen - men fra ulike forfattere.',
        subTasks: [
          { label: 'a', task: 'Sammenlign hovedpersonene.', solution: 'Begge heter Karen og er kvinner i vanskelige situasjoner, men omstendighetene og forfatternes tilnærming er ulik.' },
          { label: 'b', task: 'Sammenlign virkemidlene.', solution: 'Kielland bruker ironi og kontrastbruk, Skram bruker mer naturalistisk skildring og psykologisk innsikt.' },
          { label: 'c', task: 'Sammenlign tema og budskap.', solution: 'Begge handler om sosial urettferdighet, men fra ulike vinkler og med ulik grad av håp.' },
        ],
        solution: 'Sammenligningen bør vise likheter og forskjeller i to realistiske noveller med beslektet tematikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-13',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord) der du sammenligner en realistisk novelle fra 1800-tallet (f.eks. Kielland, Skram eller Lie) med en moderne novelle. Drøft hvordan novellesjangeren har endret seg.',
        hints: ['Velg en moderne novelle fra pensum eller fra en novellesamling', 'Se på form, virkemidler, tema og språk', 'Drøft hva som er likt og ulikt, og mulige forklaringer'],
        solution: 'Essayet skal vise evne til å sammenligne tekster fra ulike perioder og reflektere over sjangermessig utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-14',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en egen novelle (500-700 ord) inspirert av Kielland eller Bjørnsons stil. Novellen skal ha et tydelig samfunnskritisk tema.',
        hints: ['Studer forfatternes stil og virkemidler først', 'Velg et aktuelt tema med samfunnskritisk brodd', 'Bruk kontrastbruk, ironi eller symbolikk bevisst', 'Ha en tydelig spenningskurve'],
        solution: 'Novellen skal vise bevisst bruk av virkemidler inspirert av realistiske forfattere, med et tydelig samfunnskritisk budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-1-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **2.4 Romananalyse** – Utvid novellekompetansen til lengre fortellinger
- **2.5 Litterære virkemidler** – Fordyp deg i fortelleteknikk og virkemidler
- **5.2 Kreativ skriving** – Skriv egne noveller og kortprosa
- **3.1 Flerkulturell litteratur** – Utforsk samtidslitteratur med nye perspektiver`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Lyrikk og diktanalyse
// ============================================================================

export const CHAPTER_NORSK_VG1_2_2: TextbookChapter = {
  id: 'norsk-vg1-2-2',
  courseId: 'norsk-vg1',
  chapterNumber: '2.2',
  title: 'Lyrikk og diktanalyse',
  description: 'Lær å lese, analysere og tolke dikt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og tolke lyriske tekster med vekt på form og innhold',
  ],
  content: [
    {
      id: 'norsk-vg1-2-2-intro',
      type: 'text',
      content: `## Lyrikk - diktets verden

Lyrikk er en av de eldste litterære sjangrene. Mens prosa forteller, uttrykker lyrikken følelser, stemninger og tanker gjennom et konsentrert, rytmisk språk.

**Hva kjennetegner lyrikk?**
- Konsentrert form - hvert ord teller
- Ofte rytme og klang
- Bruk av bilder og symboler
- Uttrykker følelser og stemninger
- Kan ha rim og fast form, eller være fri vers

**Hvorfor lese dikt?**
- Utvikler språklig bevissthet
- Gir tilgang til andres opplevelser
- Skaper rom for tolkning og refleksjon
- Viser språkets musikalitet`,
    },
    {
      id: 'norsk-vg1-2-2-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Lyrikk** | Sjanger som uttrykker følelser gjennom rytmisk språk |
| **Strofe** | En gruppe verselinjer i et dikt |
| **Rim** | Lydlikhet mellom ord, ofte på slutten av linjer |
| **Metafor** | Skjult sammenligning uten "som" eller "lik" |
| **Besjeling** | Å gi døde ting menneskelige egenskaper |
| **Allitterasjon** | Gjentakelse av konsonanter i begynnelsen av ord |
| **Lyrisk jeg** | Stemmen som taler i diktet |
| **Versefot** | Grunnenheten i diktets rytme |`,
    },
    {
      id: 'norsk-vg1-2-2-def-1',
      type: 'definition',
      title: 'Diktets form og oppbygning',
      content: `**Rim:**
- **Parrim:** aa bb (to linjer rimer)
- **Kryssrim:** abab (annenhver linje rimer)
- **Klammerrim:** abba (første og siste, andre og tredje)
- **Fri vers:** Ingen fast rimstruktur

**Rytme:**
- **Jambe:** trykklett-trykk (da-DUM): "I dag"
- **Troke:** trykk-trykklett (DUM-da): "sommer"
- **Versefot:** Grunnenheten i rytmen
- **Metrum:** Det faste rytmemønsteret

**Strofeformer:**
- **Sonett:** 14 linjer, fast struktur
- **Haiku:** 3 linjer (5-7-5 stavelser)
- **Ballade:** Fortellende dikt med refreng
- **Frie vers:** Ingen fast form`,
    },
    {
      id: 'norsk-vg1-2-2-image-diktanalyse',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-2-diktanalyse.png',
      alt: 'Oversikt over elementer i diktanalyse: form, innhold, virkemidler og tolkning',
      caption: 'Rammeverk for diktanalyse - analyser form og innhold for å forstå diktets betydning.',
    },
    {
      id: 'norsk-vg1-2-2-image-rimskjema',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-2-rimskjema.png',
      alt: 'Illustrasjon av ulike rimskjemaer: parrim, kryssrim, klammerrim og fri vers',
      caption: 'De vanligste rimskjemaene i lyrikk: parrim (aa bb), kryssrim (abab) og klammerrim (abba).',
    },
    {
      id: 'norsk-vg1-2-2-def-2',
      type: 'definition',
      title: 'Lyriske virkemidler',
      content: `**Billedspråk:**
- **Metafor:** Skjult sammenligning ("Livet er en reise")
- **Sammenligning:** Med "som" eller "lik" ("Øynene hennes var som stjerner")
- **Besjeling:** Gi døde ting liv ("Trærne gråt")
- **Symbol:** Konkret ting som står for noe abstrakt (hjerte = kjærlighet)

**Lydlige virkemidler:**
- **Allitterasjon:** Bokstavrim ("Fager fjell og fosser")
- **Assonans:** Vokalrim ("Sol og sorg")
- **Onomatopoetikon:** Lydmalende ord ("sus", "brus", "klirr")

**Andre virkemidler:**
- **Gjentakelse:** Forsterker budskapet
- **Kontraster:** Skaper spenning
- **Enjambement:** Setningen fortsetter over linjeskiftet
- **Apostrofe:** Tiltale til noe fraværende`,
    },
    {
      id: 'norsk-vg1-2-2-image-bildesprak',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-2-bildesprak.png',
      alt: 'Oversikt over billedsprak i lyrikk: metafor, sammenligning, besjeling og symbol',
      caption: 'Billedsprak i lyrikk - metaforer, sammenligninger og besjeling skaper levende bilder.',
    },
    {
      id: 'norsk-vg1-2-2-example-0',
      type: 'example',
      title: 'Eksempel: Analysere form og lydlige virkemidler',
      problem: `Analyser form og lydlige virkemidler i denne strofen:

"Ser du solen synke saklig
bak de blå og brede åser,
svale sommervinder suser
gjennom siv og seine gras."`,
      solution: `**Formanalyse:**

**Rimstruktur:**
- Linjer 1 og 2: "saklig" og "åser" - intet fullrim, men assonans (a-lyd)
- Linjer 3 og 4: "suser" og "gras" - intet fullrim
- Strofen bruker altså ikke tradisjonelt enderim, men andre lydlige effekter

**Rytme:**
- Fire verselinjer med relativt jevn lengde
- Naturlig, flytende rytme som speiler innholdet (solvinden)

---

**Lydlige virkemidler:**

**Allitterasjon (bokstavrim):**
- "**S**er du **s**olen **s**ynke **s**aklig" - gjentatt s-lyd
- "**b**ak de **b**lå og **b**rede" - gjentatt b-lyd
- "**s**vale **s**ommervinder **s**user" - s-lyd igjen
- "**s**iv og **s**eine" - fortsatt s-dominans

**Effekt av s-lyden:**
S-lyden er en "frikatatlyd" som minner om sus og vind. Den lydmaler innholdet - vi "hører" vinden i selve språket.

**Assonans (vokalrim):**
- "blå" og "åser" - å-lyd
- "seine" og "gres" (kan variere) - e-lyd

---

**Samlet analyse:**
Dikteren bruker lydlige virkemidler for å skape en stemning av ro og natur. S-allitterasjonen løper gjennom hele strofen og binder den sammen lydlig, samtidig som den mimer lyden av vind. Dette er et eksempel på hvordan form og innhold forsterker hverandre i lyrikk.`,
    },
    {
      id: 'norsk-vg1-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av "Du må ikke sove" av Arnulf Øverland',
      problem: `Analyser første strofe:

"Du må ikke sitte trygt i ditt hjem
og si: Det er sørgelig, stakkars dem!
Du må ikke tåle så inderlig vel
den urett som ikke rammer dig selv!"`,
      solution: `**Form:**
- Fire linjer (kvartett)
- Parrim: hjem/dem, vel/selv
- Fast rytme med trykk på viktige ord

**Virkemidler:**
- **Gjentakelse:** "Du må ikke" - forsterker budskapet
- **Apostrofe:** Taler direkte til leseren med "du"
- **Kontrast:** "trygt i ditt hjem" vs. andres lidelse
- **Ironi:** "stakkars dem" - avslører likegyldighet

**Innhold og tolkning:**
Diktet kritiserer passivitet overfor urettferdighet. Øverland utfordrer leseren til å ta stilling, ikke bare se på. Skrevet som advarsel mot fascismen i 1936.

**Tema:** Ansvar, solidaritet, moralsk forpliktelse

**Budskap:** Vi har et ansvar for å reagere på urettferdighet, selv når den ikke rammer oss direkte.`,
    },
    {
      id: 'norsk-vg1-2-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Sigbjørn Obstfelder – «Jeg ser» (1893)',
      content: [
        {
          id: 'norsk-vg1-2-2-primaertekst-1-text',
          type: 'text',
          content: TEKST_OBSTFELDER_JEG_SER,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-2-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland – «Til min Gyldenlak»',
      content: [
        {
          id: 'norsk-vg1-2-2-primaertekst-2-text',
          type: 'text',
          content: TEKST_WERGELAND_TIL_MIN_GYLDENLAK,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-2-primaertekst-3',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland – «Mig selv»',
      content: [
        {
          id: 'norsk-vg1-2-2-primaertekst-3-text',
          type: 'text',
          content: TEKST_WERGELAND_MIG_SELV,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-2-primaertekst-4',
      type: 'collapsible',
      title: 'Primærtekst: Bjørnstjerne Bjørnson – «Over de høie Fjelle»',
      content: [
        {
          id: 'norsk-vg1-2-2-primaertekst-4-text',
          type: 'text',
          content: TEKST_BJORNSON_OVER_DE_HOIE_FJELLE,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-2-primaertekst-5',
      type: 'collapsible',
      title: 'Primærtekst: Aasmund Olavsson Vinje – «Ved Rundarne»',
      content: [
        {
          id: 'norsk-vg1-2-2-primaertekst-5-text',
          type: 'text',
          content: TEKST_VINJE_VED_RUNDARNE,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-2-primaertekst-6',
      type: 'collapsible',
      title: 'Primærtekst: Arne Garborg – Haugtussa (utdrag)',
      content: [
        {
          id: 'norsk-vg1-2-2-primaertekst-6-text',
          type: 'text',
          content: TEKST_GARBORG_HAUGTUSSA_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-2-def-samtid',
      type: 'definition',
      title: 'Samtidslyrikk',
      content: `**Hva kjennetegner samtidslyrikken?**

Norsk samtidslyrikk (fra ca. 1990 til i dag) er preget av mangfold og eksperimentering. Mens tidligere epoker ofte hadde felles stilidealer, er dagens poesi kjennetegnet av at mange ulike uttrykksformer eksisterer side om side.

**Viktige samtidspoeter:**
- **Ruth Lillegraven** (f. 1978): Kjent for dikt om hverdagsliv, morskap og natur. Debuterte med *Stort kvitt dyr* (2011). Utforsker det nære og hverdagslige med presist, konsentrert språk.
- **Steinar Opstad** (f. 1971): Filosofisk og reflekterende lyrikk. Vant Brageprisen for *Utenom deg* (2014). Utforsker eksistensielle spørsmål gjennom nøkternt språk.
- **Tor Ulven** (1953-1995): Sentral modernist med varig innflytelse. Kjent for konsentrert, billedrik poesi som utforsker tid, minne og forgjengelighet.
- **Øyvind Rimbereid** (f. 1966): Eksperimenterer med språk og form, inkludert dialektbruk og fremtidsscenarioer. Diktsamlingen *Solaris korrigert* (2004) er et nyskapende verk.
- **Maja Lee Langvall** (f. 1986): Ung stemme som utforsker identitet og tilhørighet, ofte med flerkulturelt perspektiv.

**Vanlige temaer i samtidslyrikken:**
- **Natur og miljø:** Klimakrise, menneskets forhold til naturen, økokritikk
- **Identitet:** Hvem er jeg? Flerkulturelle erfaringer, kjønn, seksualitet
- **Språk og kommunikasjon:** Refleksjon over språkets muligheter og begrensninger
- **Det hverdagslige:** Oppvurdering av det små og tilsynelatende ubetydelige
- **Kropp og sanselighet:** Fysisk erfaring og tilstedeværelse

**Stilmessige kjennetegn:**
- **Frie vers:** De fleste samtidspoeter skriver uten fast rim og rytme
- **Prosalyrikk:** Dikt som ligner prosa, uten verselinjer
- **Minimalisme:** Korte, konsentrerte tekster der hvert ord veier tungt
- **Dialektbruk:** Noen poeter bruker dialekt eller blander språkformer
- **Intertekstualitet:** Referanser til andre tekster, kunst og kultur

**Rap og sangtekster som lyrikk**

I samtiden har rap og sangtekster fått økt anerkjennelse som lyrikk:

- **Karpe** (Chirag Rashmikant Patel og Magdi Omar Ytreeide Abdelmaguid): Norsk-indisk og norsk-egyptisk duo. Tekstene deres tar opp identitet, rasisme og oppvekst i Norge.
- **Lars Vaular** (f. 1984): Bergensrapper kjent for poetiske tekster og språklig kreativitet.
- **Silvana Imam** (f. 1986): Svensk-litauisk rapper og feminist som utforsker identitet og motstand.

Disse artistene viser at lyrikk lever i mange former, og at grensene mellom «høy» og «lav» kultur er i stadig bevegelse.

*Les mer:* Utforsk diktsamlinger fra disse poetene på biblioteket eller i digitale ressurser som Nasjonalbibliotekets nb.no.`,
    },
    {
      id: 'norsk-vg1-2-2-example-samtid',
      type: 'example',
      title: 'Eksempel: Analyse av samtidsdikt',
      problem: `Hvordan analyserer vi et moderne dikt i frie vers, uten fast rim og rytme?

La oss ta utgangspunkt i følgende analyseoppsett for et tenkt samtidsdikt om natur og forgjengelighet:`,
      solution: `**Fremgangsmåte for analyse av samtidsdikt:**

**1. Førsteinntrykk og tema**
- Hva handler diktet om på overflaten?
- Hvilke følelser eller stemninger vekker det?
- Hvilket tema ser ut til å ligge under?

**2. Form og oppbygning**
Selv om diktet er i frie vers, har det fortsatt form:
- Hvordan er diktet delt inn? (Strofer, avsnitt, enkeltlinjer)
- Er linjene lange eller korte? Hva gjør dette med leserytmen?
- Finnes det enjambementer (linjeskift midt i setninger)?
- Er det gjentakelser eller mønstre?

**3. Språk og virkemidler**
- **Billedspråk:** Metaforer, sammenligninger, besjeling
- **Konkreter:** Hvilke konkrete bilder og gjenstander nevnes?
- **Kontraster:** Settes noe opp mot hverandre?
- **Ordvalg:** Er språket hverdagslig, poetisk, teknisk?
- **Lydlige virkemidler:** Selv uten rim kan diktet ha allitterasjon, assonans

**4. Det lyriske jeget**
- Hvem snakker i diktet?
- Hvilket perspektiv har jeget?
- Hvilken tone har diktet? (Distansert, nært, ironisk, alvorlig)

**5. Tolkning og kontekst**
- Hva kan være diktets budskap eller underbetydning?
- Hvordan forholder diktet seg til samtiden?
- Kan det leses i lys av økokritikk, identitetspolitikk eller andre samtidsstrømninger?

**Diktsamlinger å utforske:**
- Ruth Lillegraven: *Stort kvitt dyr* (2011), *Urd* (2013)
- Steinar Opstad: *Utenom deg* (2014)
- Øyvind Rimbereid: *Solaris korrigert* (2004)
- Tor Ulven: *Søppelsolen* (1989), *Stein og speil* (1995)

*Tips:* Les dikt høyt! Selv uten fast rytme har samtidslyrikk en egen musikalitet som kommer frem når du leser dem med stemmen.`,
    },
    {
      id: 'norsk-vg1-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser rimtype i disse strofene:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg vandret en vår langs elvebredden (a)\nOg tenkte på alt som var sagt og gjort (b)\nDa speilet vannet den gylne redden (a)\nAv sol som dalte mot vest og nord (b)"',
            solution: 'Kryssrim (abab)',
            multipleChoiceOptions: ['Parrim', 'Kryssrim', 'Klammerrim', 'Fri vers'],
          },
          {
            label: 'b',
            task: '"Natten er stille (a)\nOg tanken er fri (b)\nÅ kunne bare ville (a)\nOg være meg og di (b)"',
            solution: 'Kryssrim (abab)',
            multipleChoiceOptions: ['Parrim', 'Kryssrim', 'Klammerrim', 'Fri vers'],
          },
        ],
        solution: 'Begge eksemplene bruker kryssrim (abab).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn billedspråk i disse linjene:',
        subTasks: [
          {
            label: 'a',
            task: '"Hjertet mitt er en stein"',
            solution: 'Metafor - hjertet sammenlignes med stein uten "som"',
          },
          {
            label: 'b',
            task: '"Fjellene stod som vakter ved kysten"',
            solution: 'Sammenligning - bruker "som"',
          },
          {
            label: 'c',
            task: '"Vinden sang gjennom furuskogen"',
            solution: 'Besjeling - vinden får menneskelige egenskaper',
          },
        ],
        solution: 'a) Metafor, b) Sammenligning, c) Besjeling',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les et dikt og skriv en analyse (250-350 ord) med fokus på form, virkemidler og innhold.',
        hints: ['Velg et dikt fra pensum', 'Start med å beskrive form og oppbygning', 'Identifiser minst tre virkemidler'],
        solution: 'Analysen skal dekke både form (rim, rytme, strofer) og innhold (tema, budskap, virkemidler).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et eget dikt (minst 8 linjer) med minst to virkemidler fra listen over.',
        hints: ['Velg et tema som betyr noe for deg', 'Eksperimenter med rim eller fri vers', 'Les diktet høyt for å høre rytmen'],
        solution: 'Diktet skal vise bevisst bruk av lyriske virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign to dikt om samme tema (f.eks. kjærlighet eller natur) fra ulike epoker. Hvordan påvirker tiden diktets form og uttrykk?',
        hints: ['Velg ett klassisk og ett moderne dikt', 'Se på forskjeller i form, språk og virkemidler'],
        solution: 'Sammenligningen bør vise hvordan litterære konvensjoner og samfunn påvirker diktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kalles det når to linjer rimer annenhver (abab)?',
        options: [
          'Kryssrim',
          'Parrim',
          'Klammerrim',
          'Halvrim',
        ],
        answer: 0,
        solution: 'Kryssrim (abab) betyr at linje 1 rimer på linje 3, og linje 2 rimer på linje 4.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en metafor?',
        options: [
          'En skjult sammenligning uten «som» eller «lik»',
          'En sammenligning med «som» eller «lik»',
          'Å gi døde ting menneskelige egenskaper',
          'Et lydmalende ord',
        ],
        answer: 0,
        solution: 'En metafor er en skjult sammenligning der noe beskrives som noe annet uten å bruke sammenligningsord som «som» eller «lik». Eksempel: «Livet er en reise».',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les «Jeg ser» av Obstfelder ovenfor. Analyser diktet med fokus på form, virkemidler og tema.',
        subTasks: [
          { label: 'a', task: 'Beskriv diktets form (rim, rytme, strofer).', solution: 'Diktet er skrevet i frie vers uten fast rim. Rytmen er ujevn og bidrar til en følelse av desorientering.' },
          { label: 'b', task: 'Identifiser minst tre virkemidler.', solution: 'Gjentakelse («Jeg ser»), kontraster (det kjente vs. det fremmede), besjeling, billedspråk.' },
          { label: 'c', task: 'Hva er diktets tema og budskap?', solution: 'Tema: Fremmedgjøring og eksistensiell undring. Det lyriske jeget føler seg malplassert i verden.' },
        ],
        hints: ['Legg merke til gjentakelsen av «Jeg ser»', 'Hva observerer det lyriske jeget?', 'Hvorfor føler jeget seg fremmed?'],
        solution: 'Obstfelders dikt er et nøkkelverk i norsk nyromantikk/tidlig modernisme og uttrykker en følelse av fremmedgjøring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Wergelands naturdikt med Vinjes «Ved Rundarne». Hvordan bruker de to dikterne naturen ulikt?',
        subTasks: [
          { label: 'a', task: 'Beskriv Wergelands naturfremstilling.', solution: 'Wergeland bruker naturen som uttrykk for livsglede, skjønnhet og romantisk begeistring.' },
          { label: 'b', task: 'Beskriv Vinjes naturfremstilling.', solution: 'Vinje bruker naturen mer reflekterende og vemodig - naturopplevelsen knyttes til minner og forgjengelighet.' },
          { label: 'c', task: 'Sammenlign de to tilnærmingene.', solution: 'Wergeland er ekstatisk og optimistisk, Vinje er mer melankolsk og reflekterende. Begge viser dyp naturfølelse.' },
        ],
        solution: 'Sammenligningen viser utviklingen fra romantisk naturbegeistrelse til en mer nyansert og reflekterende naturfremstilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Garborgs «Haugtussa» ovenfor. Analyser utdraget med fokus på språk, virkemidler og stemning.',
        hints: ['Legg merke til det nynorske språket', 'Se etter naturskildringer og mystikk', 'Hva sier teksten om forholdet mellom menneske og natur?'],
        solution: 'Garborgs «Haugtussa» forener nynorsk språk med naturmystikk og folkloristiske elementer. Analysen bør vise forståelse for sammenheng mellom språk, form og innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign et romantisk dikt (Wergeland eller Bjørnson) med et modernistisk dikt (Obstfelder). Skriv en drøftende tekst (500-700 ord) om hvordan form, språk og tema har endret seg.',
        hints: ['Velg ett dikt fra hver epoke', 'Se på form (rim, rytme), virkemidler og tema', 'Drøft hva endringene forteller om samfunnsendringer', 'Bruk fagbegreper fra kapittelet'],
        solution: 'Teksten skal vise forståelse for utviklingen fra romantikkens faste former og optimisme til modernismens frie vers og fremmedgjøring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord) om hvordan norsk lyrikk utviklet seg fra romantikken til modernismen. Bruk konkrete teksteksempler fra primærtekstene i kapittelet.',
        hints: ['Bruk minst tre av tekstene fra kapittelet', 'Vis utviklingen kronologisk: Wergeland/Bjørnson (romantikken) -> Vinje/Garborg (overgang) -> Obstfelder (modernisme)', 'Drøft endringer i form, tema og språk', 'Knytt til historisk kontekst'],
        solution: 'Essayet skal vise overblikk over norsk litteraturhistorie og evne til å bruke konkrete teksteksempler for å belyse utviklingstrekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-13',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn et samtidsdikt av en norsk poet (for eksempel Ruth Lillegraven, Steinar Opstad, Øyvind Rimbereid eller Maja Lee Langvall). Analyser diktet med fokus på form, virkemidler og tema.',
        subTasks: [
          { label: 'a', task: 'Beskriv diktets form: Hvordan er det delt inn? Er det frie vers eller har det struktur?', solution: 'Svar avhenger av diktet. De fleste samtidspoeter bruker frie vers, men diktet kan likevel ha tydelig struktur gjennom strofeinndeling, linjeskift og gjentakelser.' },
          { label: 'b', task: 'Identifiser minst to virkemidler og forklar hvordan de fungerer i diktet.', solution: 'Vanlige virkemidler i samtidslyrikk: konkreter, hverdagslig språk, metaforer, kontraster, enjambement, gjentakelse.' },
          { label: 'c', task: 'Hva er diktets tema? Knytt gjerne til samtidsrelevante temaer som identitet, natur/miljø eller språk.', solution: 'Svar avhenger av diktet. Typiske temaer i samtidslyrikk: natur og miljø, identitet, det hverdagslige, språk og kommunikasjon, kropp og sanselighet.' },
          { label: 'd', task: 'Skriv en kort tolkning (100-150 ord) av diktets budskap eller underbetydning.', solution: 'Tolkningen skal vise evne til å se utover det diktet sier direkte, og koble teksten til større temaer.' },
        ],
        hints: ['Bruk biblioteket eller nb.no for å finne dikt', 'Les diktet høyt flere ganger', 'Legg merke til ordvalg og bildespråk', 'Tenk på hva diktet sier om vår tid'],
        solution: 'Analysen skal vise forståelse for samtidslyrikkens kjennetegn og evne til å bruke analysebegreper på moderne dikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-14',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign et romantisk eller nasjonalromantisk dikt (for eksempel Wergeland, Bjørnson eller Vinje) med et samtidsdikt som tar opp et lignende tema (for eksempel natur, kjærlighet eller identitet). Skriv en drøftende tekst (400-500 ord).',
        subTasks: [
          { label: 'a', task: 'Presenter de to diktene kort: Hvem har skrevet dem, når, og hva handler de om?', solution: 'Kort presentasjon av begge diktene med forfatter, tid og tema.' },
          { label: 'b', task: 'Sammenlign form: Hvordan er diktene bygget opp? Rim, rytme, strofer?', solution: 'Romantiske dikt har ofte fast rim og rytme, mens samtidslyrikk gjerne bruker frie vers. Vis konkrete eksempler.' },
          { label: 'c', task: 'Sammenlign virkemidler: Hvilke virkemidler bruker poetene? Er det likheter eller forskjeller?', solution: 'Begge kan bruke billedspråk, men på ulike måter. Romantikken bruker ofte store bilder og følelsesladde ord, mens samtidslyrikk ofte er mer nøktern og konkret.' },
          { label: 'd', task: 'Drøft: Hva forteller forskjellene og likhetene om hvordan synet på lyrikk har endret seg?', solution: 'Drøftingen bør knytte formelle og tematiske forskjeller til endringer i litterære konvensjoner, samfunn og verdier.' },
        ],
        hints: ['Velg dikt med sammenlignbart tema', 'Bruk konkrete eksempler fra begge diktene', 'Vis at du forstår historisk kontekst', 'Drøft hva endringene betyr'],
        solution: 'Teksten skal vise evne til sammenligning på tvers av epoker, bruk av fagbegreper og refleksjon over lyrikkens utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-2-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **2.5 Litterære virkemidler** – Utforsk billedspråk, symboler og andre virkemidler i dybden
- **3.3 Samisk litteratur** – Les samisk lyrikk, inkludert joik som poetisk uttrykk
- **5.2 Kreativ skriving** – Skriv egne dikt og lyriske tekster`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4: Romananalyse
// ============================================================================

export const CHAPTER_NORSK_VG1_2_4: TextbookChapter = {
  id: 'norsk-vg1-2-4',
  courseId: 'norsk-vg1',
  chapterNumber: '2.4',
  title: 'Romananalyse',
  description: 'Lær å analysere romaner med fokus på fortellerteknikk, tematikk og komposisjon i nyere litteratur.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke skjønnlitterære tekster med vekt på form og innhold',
    'reflektere over hvordan tekster fra ulike tider og kulturer kan gi innsikt i egne og andres liv',
  ],
  content: [
    {
      id: 'norsk-vg1-2-4-intro',
      type: 'text',
      content: `## Romansjangeren

Romanen er den dominerende litterære sjangeren i moderne tid. Fra 1800-tallet og frem til i dag har romanen utviklet seg enormt, fra de store realistiske samfunnsromanene til dagens fragmenterte og eksperimentelle fortellinger.

**Kjennetegn på romanen:**
- Lang, prosafiktiv fortelling
- Komplekst persongalleri med utvikling
- Flere handlingstråder og temaer
- Utforsker menneskets indre og ytre verden
- Skildrer samfunn, relasjoner og konflikter

**Utviklingen av den moderne romanen:**
- **1800-tallet:** Realismens store samfunnsromaner (Ibsen, Lie, Kielland)
- **1890-1920:** Psykologisk dybde og strøm av bevissthet (Hamsun)
- **1900-tallet:** Modernistisk eksperimentering, fragmentering
- **Samtidsromanen:** Mangfold av stemmer, autofiktive former, globale perspektiver`,
    },
    {
      id: 'norsk-vg1-2-4-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Roman** | Lang, prosafiktiv fortelling med kompleks handling |
| **Allvitende forteller** | Forteller som kjenner alle karakterers tanker |
| **Jeg-forteller** | Forteller som er en karakter i historien |
| **Upålitelig forteller** | Forteller som gir et skjevt eller ufullstendig bilde |
| **Tidshopp** | Brudd i kronologien, hopper frem eller tilbake i tid |
| **Komposisjon** | Hvordan teksten er bygd opp og organisert |
| **Spenningskurve** | Oppbyggingen av spenning i handlingen |
| **Episk tekst** | Fortellende tekst (roman, novelle) |`,
    },
    {
      id: 'norsk-vg1-2-4-def-1',
      type: 'definition',
      title: 'Fortellerteknikk i romanen',
      content: `**Synsvinkel og fortellerstemme:**

**Førsteperson (jeg-forteller):**
- Fortelleren er en karakter i historien
- Begrenset innsikt - vi vet bare det fortelleren vet
- Skaper nærhet og identifikasjon
- Eksempel: Karl Ove Knausgårds "Min kamp"

**Tredjeperson begrenset:**
- Følger én karakter, men i tredjeperson
- Har tilgang til denne karakterens tanker
- Eksempel: Mange av Jon Fosses romaner

**Allvitende forteller:**
- Kjenner alle karakterers tanker og følelser
- Kan skifte perspektiv fritt
- Tradisjonell i klassiske romaner
- Eksempel: Jonas Lies "Familien på Gilje"

**Upålitelig forteller:**
- Fortelleren gir et skjevt eller ufullstendig bilde
- Leseren må "lese mellom linjene"
- Skaper spenning og tolkningsrom

**Tidshåndtering:**
- **Kronologisk:** Hendelser i rekkefølge
- **Analepse (tilbakeblikk):** Hopper tilbake i tid
- **Prolepse (frampek):** Antyder fremtidige hendelser
- **In medias res:** Starter midt i handlingen
- **Parallellhandling:** Flere handlinger samtidig`,
    },
    {
      id: 'norsk-vg1-2-4-image-roman-elementer',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-4-roman-elementer.png',
      alt: 'Oversikt over romanens elementer: handling, personer, setting, tema og fortellerteknikk',
      caption: 'Romanens grunnleggende elementer - bruk disse begrepene i romananalyse.',
    },
    {
      id: 'norsk-vg1-2-4-image-fortellerstemme',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-4-fortellerstemme.png',
      alt: 'Illustrasjon av ulike fortellerstemmer: jeg-forteller, tredjeperson begrenset, allvitende og upålitelig forteller',
      caption: 'De ulike fortellerstemmene i romanen - valget påvirker leserens opplevelse av historien.',
    },
    {
      id: 'norsk-vg1-2-4-example-0',
      type: 'example',
      title: 'Eksempel: Analysere tidshåndtering i roman',
      problem: `En roman har følgende struktur:

Kapittel 1: Hovedpersonen som voksen står ved en grav
Kapittel 2-5: Tilbakeblikk til barndommen
Kapittel 6: Tilbake til nåtid, kort
Kapittel 7-10: Ungdomstiden
Kapittel 11: Nåtid - åpenbaring av hvem som ligger i graven

Analyser tidshåndteringen og dens effekt.`,
      solution: `**Tidshåndtering i romanen:**

**Rammefortelling med tilbakeblikk (analepser):**
Romanen bruker en rammestruktur der nåtiden (graven) rammer inn fortellingen, mens hoveddelen er tilbakeblikk.

**Strukturanalyse:**
- **Kapittel 1 (nåtid):** Etablerer et mysterium - hvem er død?
- **Kapittel 2-5 (fortid):** Analepse til barndommen
- **Kapittel 6 (nåtid):** Kort retur - minner leseren på mysteriet
- **Kapittel 7-10 (fortid):** Analepse til ungdommen
- **Kapittel 11 (nåtid):** Oppløsning - mysteriet avsløres

**Effekter av denne strukturen:**

**1. Skaper spenning:**
Ved å begynne med graven (in medias res) stiller forfatteren et spørsmål som driver leseren videre: Hvem er død? Hvorfor?

**2. Dramatisk ironi:**
Leseren vet at noen skal dø, men ikke hvem. Dette farger lesningen av barndommen og ungdommen - vi leter etter tegn.

**3. Tematisk forsterkning:**
Strukturen understreker temaer som tap, minner og hvordan fortiden former nåtiden.

**4. Emosjonell virkning:**
Når vi endelig får vite hvem som er død, kjenner vi personen gjennom tilbakeblikkene. Det gjør tapet sterkere.

**Sammenligning:**
En kronologisk fortelling ville gitt en annen opplevelse - mer lineær, men uten det samme mysteriet og den gradvise avsløringen.`,
    },
    {
      id: 'norsk-vg1-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser fortellerstemmen i disse romanåpningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg husker den dagen som om det var i går. Solen skinte og fuglene sang."',
            solution: 'Jeg-forteller med tilbakeblikk',
            multipleChoiceOptions: ['Jeg-forteller', 'Tredjeperson begrenset', 'Allvitende forteller'],
          },
          {
            label: 'b',
            task: '"Maria visste ikke at Lars hadde sett henne. Hun tenkte på samtalen med moren. Lars, på sin side, lurte på om han skulle si noe."',
            solution: 'Allvitende forteller - har innsikt i begge karakterenes tanker',
            multipleChoiceOptions: ['Jeg-forteller', 'Tredjeperson begrenset', 'Allvitende forteller'],
          },
          {
            label: 'c',
            task: '"Hun så ut av vinduet. Hva skulle hun gjøre nå? Bilen i gaten startet, men hvem som kjørte den visste hun ikke."',
            solution: 'Tredjeperson begrenset - vi følger henne, men vet ikke mer enn hun',
            multipleChoiceOptions: ['Jeg-forteller', 'Tredjeperson begrenset', 'Allvitende forteller'],
          },
        ],
        solution: 'a) Jeg-forteller, b) Allvitende, c) Tredjeperson begrenset',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kalles det når en fortelling starter midt i handlingen?',
        options: [
          'In medias res',
          'Analepse',
          'Prolepse',
          'Eksposisjon',
        ],
        answer: 0,
        solution: 'In medias res (latin for "midt i tingene") betyr at fortellingen starter midt i handlingen, ofte på et dramatisk punkt.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-4-def-2',
      type: 'definition',
      title: 'Komposisjon og struktur',
      content: `**Romanens oppbygning:**

**Tradisjonell struktur:**
1. **Eksposisjon:** Introduksjon av karakterer og setting
2. **Komplikasjon:** Konflikt oppstår
3. **Stigende handling:** Spenningen øker
4. **Klimaks:** Vendepunkt eller høydepunkt
5. **Fallende handling:** Konsekvenser utspiller seg
6. **Løsning:** Avslutning (åpen eller lukket)

**Moderne strukturer:**
- **Episodisk struktur:** Løst sammenhengende scener
- **Rammefortelling:** En historie inni en annen
- **Fragmentert narrativ:** Brudd i tid og rom
- **Sirkularkomposisjon:** Slutter der den begynner
- **Parallelle handlinger:** Flere historier veves sammen

**Setting og miljø:**
- Tid og sted for handlingen
- Sosial og kulturell kontekst
- Atmosfære og stemning
- Symbolsk funksjon (f.eks. hus, natur, by)`,
    },
    {
      id: 'norsk-vg1-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-5',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en roman du har lest. Analyser komposisjonen.',
        subTasks: [
          { label: 'a', task: 'Beskriv romanens struktur (eksposisjon, komplikasjon, klimaks osv.).', solution: 'Identifiser de ulike delene av handlingsforløpet.' },
          { label: 'b', task: 'Er strukturen tradisjonell eller eksperimentell? Forklar.', solution: 'Sammenlign med tradisjonell oppbygning - er det brudd, parallelle handlinger, fragmentering?' },
          { label: 'c', task: 'Hvordan bidrar strukturen til romanens tematikk?', solution: 'Vis sammenhengen mellom form og innhold.' },
        ],
        hints: ['Tegn gjerne en visuell oversikt over strukturen', 'Bruk fagbegreper fra kapittelet'],
        solution: 'Analysen skal vise forståelse for samspillet mellom romanens form og innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-4-def-3',
      type: 'definition',
      title: 'Tematisk analyse',
      content: `**Hva er tema?**
Tema er de underliggende ideene eller spørsmålene en roman utforsker. En roman kan ha flere temaer.

**Vanlige temaer i norsk samtidslitteratur:**
- Identitet og tilhørighet
- Familie og generasjonsforhold
- Klasse og sosiale forskjeller
- Innvandring og kulturmøter
- Ensomhet og fremmedgjøring
- Kjønn og seksualitet
- Natur og miljø
- Teknologi og digitalisering

**Hvordan identifisere tema:**
1. Se på hva karakterene strever med
2. Analyser konfliktene i romanen
3. Undersøk gjentagende motiver
4. Vurder hva tittelen antyder
5. Se på romanens avslutning

**Fra tema til budskap:**
- Tema er spørsmålet romanen stiller
- Budskap er et mulig svar
- Romaner er ofte flertydige - unngå enkle svar`,
    },
    {
      id: 'norsk-vg1-2-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-8',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser og analyser minst to sentrale temaer i en roman du har lest.',
        subTasks: [
          { label: 'a', task: 'Hvilke temaer behandler romanen?', solution: 'Identifiser hovedtemaer og undertemaer.' },
          { label: 'b', task: 'Hvordan kommer temaene til uttrykk?', solution: 'Gjennom karakterer, konflikter, motiver, symboler?' },
          { label: 'c', task: 'Hva kan være romanens budskap?', solution: 'Formuler en mulig tolkning - men anerkjenn flertydighet.' },
        ],
        hints: ['Unngå for enkle svar - romaner er ofte flertydige', 'Bruk teksteksempler'],
        solution: 'Tematisk analyse krever at man ser sammenhenger mellom ulike elementer i romanen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-4-def-4',
      type: 'definition',
      title: 'Karakteranalyse',
      content: `**Karaktertyper:**
- **Runde karakterer:** Komplekse, utvikler seg gjennom romanen
- **Flate karakterer:** Endimensjonale, forutsigbare
- **Hovedperson (protagonist):** Den handlingen dreier seg om
- **Antagonist:** Motspiller til hovedpersonen
- **Bifigurer:** Støtter handlingen, kaster lys over hovedpersonene

**Karakterisering:**
- **Direkte karakterisering:** Fortelleren beskriver karakteren
- **Indirekte karakterisering:** Karakteren vises gjennom handling, dialog, tanker

**Karakterutvikling:**
- Hvordan endrer karakteren seg?
- Hva utløser endringen?
- Hva lærer karakteren?
- Er endringen troverdig?

**Analysemodell for karakter:**
1. Ytre kjennetegn (alder, utseende, sosial bakgrunn)
2. Indre kjennetegn (personlighet, verdier, drømmer)
3. Relasjoner til andre karakterer
4. Konflikter (indre og ytre)
5. Utvikling gjennom romanen`,
    },
    {
      id: 'norsk-vg1-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-3',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner en "rund" karakter?',
        options: [
          'Kompleks og utvikler seg gjennom romanen',
          'Endimensjonal og forutsigbar',
          'En bifigur som støtter handlingen',
          'En antagonist som motarbeider helten',
        ],
        answer: 0,
        solution: 'Runde karakterer er komplekse, har flere sider og utvikler seg gjennom fortellingen. Begrepet stammer fra E.M. Forster.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-7',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en hovedperson fra en roman du har lest.',
        subTasks: [
          { label: 'a', task: 'Beskriv karakterens ytre kjennetegn.', solution: 'Alder, utseende, sosial bakgrunn, yrke osv.' },
          { label: 'b', task: 'Analyser karakterens indre kjennetegn.', solution: 'Personlighet, verdier, drømmer, frykt, konflikter.' },
          { label: 'c', task: 'Hvordan utvikler karakteren seg gjennom romanen?', solution: 'Beskriv endringer og hva som utløser dem.' },
          { label: 'd', task: 'Er karakteren rund eller flat? Begrunn.', solution: 'Vurder kompleksitet og utvikling.' },
        ],
        hints: ['Bruk analysekategoriene fra kapittelet', 'Gi konkrete eksempler fra teksten'],
        solution: 'Karakteranalysen skal vise forståelse for hvordan forfatteren skaper troverdige og interessante karakterer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av romanåpning',
      problem: `Analyser denne åpningen fra Knut Hamsuns "Sult" (1890):

"Det var i den Tid jeg gik omkring og sulted i Kristiania, denne forunderlige By, som ingen forlader før han har faaet Mærker af den..."`,
      solution: `**Fortellerteknikk:**
- Jeg-forteller: Skaper umiddelbar nærhet
- Tilbakeblikk: "Det var i den Tid" signaliserer at dette er fortalt i etterkant
- Upålitelig forteller: Svekket av sult - kan vi stole på hans oppfatninger?

**Stil og språk:**
- Intim tone, som om vi overhører tankene hans
- "forunderlige By" - ambivalent forhold til Kristiania
- "Mærker af den" - byen setter fysiske og psykiske spor

**Tema:**
- Sult (bokstavelig og symbolsk)
- Fremmedgjøring i storbyen
- Kunstnerens kamp for tilværelsen

**Stemning:**
- Melankolsk, men fascinert
- Intens selvobservasjon
- Forbereder leseren på en psykologisk reise

**Kontekst:**
Romanen regnes som et gjennombrudd for modernismen i Norden - fokus på det irrasjonelle og psykologiske.`,
    },
    {
      id: 'norsk-vg1-2-4-text-1',
      type: 'collapsible',
      title: 'Utdrag: Knut Hamsun - Sult (åpningen)',
      content: [
        {
          id: 'norsk-vg1-2-4-text-1-content',
          type: 'text',
          content: TEKST_HAMSUN_SULT_AAPNING,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-4-text-2',
      type: 'collapsible',
      title: 'Utdrag: Jonas Lie - Familien paa Gilje',
      content: [
        {
          id: 'norsk-vg1-2-4-text-2-content',
          type: 'text',
          content: TEKST_LIE_FAMILIEN_PAA_GILJE_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-4',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra "Sult" av Hamsun ovenfor. Analyser fortellerteknikken.',
        subTasks: [
          { label: 'a', task: 'Beskriv fortellerstemmen.', solution: 'Jeg-forteller som ser tilbake på fortiden. Intim, selvobserverende tone.' },
          { label: 'b', task: 'Hvordan håndteres tid i utdraget?', solution: 'Tilbakeblikk ("Det var i den Tid"), men hendelsene fortelles kronologisk.' },
          { label: 'c', task: 'Hva gjør fortelleren potensielt upålitelig?', solution: 'Sulten påvirker hans sanseopplevelser og vurderinger - leseren må være kritisk.' },
        ],
        solution: 'Hamsuns jeg-forteller er et tidlig eksempel på modernistisk fortellerteknikk med fokus på det subjektive og irrasjonelle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-6',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign utdraget fra "Sult" med utdraget fra "Familien paa Gilje". Hvordan er fortellerteknikken ulik?',
        subTasks: [
          { label: 'a', task: 'Beskriv fortellerstemmen i begge tekstene.', solution: 'Hamsun: Jeg-forteller. Lie: Allvitende/tredjeperson.' },
          { label: 'b', task: 'Sammenlign fokus og perspektiv.', solution: 'Hamsun: Subjektivt, indre fokus. Lie: Objektivt, ytre fokus med innsyn i flere.' },
          { label: 'c', task: 'Hva forteller forskjellene om litteraturhistorisk utvikling?', solution: 'Lie representerer realismen (samfunn, ytre), Hamsun representerer overgangen til modernismen (individ, indre).' },
        ],
        solution: 'Sammenligningen viser utviklingen fra realistisk til modernistisk fortellerteknikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    // --- Samtidsromanen og flerkulturelle stemmer ---
    {
      id: 'norsk-vg1-2-4-def-samtid',
      type: 'definition',
      title: 'Samtidsromanen',
      content: `**Viktige samtidsforfattere:**
Norsk samtidslitteratur har fått internasjonal oppmerksomhet, særlig gjennom forfattere som Karl Ove Knausgård, Vigdis Hjorth, Erlend Loe, Tomas Espedal og Hanne Ørstavik.

**Autofiksjon og "Knausgård-effekten":**
Autofiksjon er en sjanger som blander selvbiografi og fiksjon. Forfatteren bruker sitt eget liv som materiale, men former det litterært. Karl Ove Knausgårds seksbinds verk "Min kamp" (2009-2011) utløste en internasjonal trend og debatt om grensene mellom litteratur og virkelighet.

**Kjennetegn på autofiksjon:**
- Forfatteren og jeg-fortelleren deler navn og biografi
- Detaljerte, nærgående skildringer av hverdagsliv
- Utforsking av minner, familie og identitet
- Grenseoverskridende ærlighet

**Sentrale temaer i samtidsromanen:**
- **Familie:** Generasjonskonflikter, arv, hemmeligheter (Vigdis Hjorths "Arv og miljø")
- **Identitet:** Selvforståelse, autentisitet, roller
- **Klasse:** Sosial mobilitet, skam, tilhørighet
- **Kjønn:** Maskulinitet, feminisme, seksualitet
- **Hverdagsliv:** Det tilsynelatende banale som utgangspunkt for dypere refleksjon

**Stiltrekk:**
- Førstepersonsfortelling
- Bekjennende, intim tone
- Detaljerte beskrivelser av sanseinntrykk og hverdagssituasjoner
- Lange, utforskende setninger

**Familieromanen:**
Vigdis Hjorths "Arv og miljø" (2016) fornyet familieromanen ved å skildre en arvestrid som avdekker gamle familiehemmeligheter. Romanen utløste debatt om litterær frihet og personvern.

*Tips: Les romanene selv for å få fullt utbytte av analysene. Korte sitater kan ikke erstatte leseopplevelsen.*`,
    },
    {
      id: 'norsk-vg1-2-4-example-samtid',
      type: 'example',
      title: 'Eksempel: Analyse av samtidsroman',
      problem: `Hvordan analyserer vi autofiksjon? Hvilke spørsmål bør vi stille til teksten?`,
      solution: `**Analysespørsmål for autofiksjon:**

**1. Forholdet mellom forfatter og forteller:**
- Deler fortelleren navn med forfatteren?
- Hvordan fremstilles "jeget" - selvkritisk, idealisert, sammensatt?
- Hvilke valg har forfatteren gjort i utvelgelsen av materiale?

**2. Fortellerperspektiv og pålitelighet:**
- Er fortelleren pålitelig? Minner er selektive og formbare.
- Hvordan påvirker tidens avstand fremstillingen?
- Finnes det spor av selvbedrag eller rasjonalisering?

**3. Etiske spørsmål:**
- Hvordan fremstilles andre (virkelige) personer?
- Har de samtykket? Er de gjenkjennelige?
- Skiller forfatteren mellom sin egen og andres historie?

**4. Form og innhold:**
- Hvordan brukes litterære virkemidler på selvbiografisk materiale?
- Hva tilfører den litterære formen til stoffet?
- Hvilke scener er fortettet eller dramatisert?

**Eksempel på analyse:**
Når Knausgård i "Min kamp" skriver detaljert om sin fars død og bestemorens hjem, bruker han litterære teknikker som slow motion-beskrivelser og symbolsk ladet setting. Dette gjør det selvbiografiske stoffet til litteratur - men reiser også spørsmål om de portretterte personenes rett til eget narrativ.

**Den etiske debatten:**
Autofiksjonen har utløst debatt: Har forfattere rett til å bruke andres liv som materiale? "Arv og miljø" førte til offentlig konflikt da familiemedlemmer kjente seg igjen. Dette viser at autofiksjon opererer i et spenningsfelt mellom kunstnerisk frihet og etisk ansvar.`,
    },
    {
      id: 'norsk-vg1-2-4-def-flerkulturell',
      type: 'definition',
      title: 'Flerkulturelle stemmer i norsk litteratur',
      content: `**Nye perspektiver:**
Forfattere med flerkulturell bakgrunn har beriket norsk litteratur med nye perspektiver på identitet, tilhørighet og språk.

**Viktige forfattere:**
- **Zeshan Shakar:** "Tante Ulrikkes vei" (2017) - Oppvekstroman fra Stovner med to kontrasterende fortellerstemmer
- **Maria Navarro Skaranger:** "Alle utlendinger har lukka gardiner" (2015) - Om å vokse opp mellom kulturer på Romsås
- **Jonas Hassen Khemiri** (svensk-tunisisk): "Alt jeg ikke husker" (2015) - Eksperimentell roman om en ung manns død, fortalt gjennom mange stemmer

**Sentrale temaer:**
- **Identitet:** Å være "bindestrek-norsk", tilhøre flere kulturer
- **Tilhørighet:** Hvor hører man hjemme? Kan man tilhøre flere steder?
- **Språk:** Kodeskifting, flerspråklighet, språk som identitetsmarkør
- **Fordommer:** Møter med rasisme og stereotypier
- **Generasjon:** Forskjeller mellom foreldregenerasjon og barn oppvokst i Norge

**Språklige særtrekk:**
- **Kodeskifting:** Veksling mellom norsk og andre språk
- **Kebabnorsk/multietnolekt:** Ungdomsspråk fra flerkulturelle miljøer
- **Språklek:** Bevisst bruk av "feil" norsk som litterært virkemiddel

**"Tante Ulrikkes vei":**
Romanen følger to unge menn fra Stovner - Mo som strever etter å lykkes i det norske samfunnet, og Jamal som finner sin plass i en annen verden. De to fortellerstemmene bruker ulikt språk og representerer ulike veier gjennom det norske samfunnet.

**"Alle utlendinger har lukka gardiner":**
Tittelen spiller på fordommer og viser hvordan det er å vokse opp med blikket utenfra. Romanen bruker humor og gjenkjennelse til å skildre flerkulturell hverdag.

*Anbefaling: Les disse romanene for å få et innenfra-perspektiv på flerkulturell norsk virkelighet.*`,
    },
    {
      id: 'norsk-vg1-2-4-ex-samtid-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-samtid-1',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en norsk samtidsroman (f.eks. av Knausgård, Hjorth, Loe, Shakar eller Skaranger). Analyser romanen med fokus på samtidens temaer og fortellerteknikk.',
        subTasks: [
          { label: 'a', task: 'Beskriv romanens fortellerstemme og synsvinkel.', solution: 'Identifiser om det er jeg-forteller, hvem fortelleren er, og hvordan dette påvirker fremstillingen.' },
          { label: 'b', task: 'Hvilke temaer tar romanen opp? Hvordan er disse relevante for vår tid?', solution: 'Analyser temaer som identitet, familie, klasse, tilhørighet eller andre samtidsaktuelle spørsmål.' },
          { label: 'c', task: 'Hvordan bruker forfatteren språk og stil for å skape nærhet til stoffet?', solution: 'Se på ordvalg, setningsstruktur, bruk av detaljer, og eventuelt kodeskifting eller dialekt.' },
          { label: 'd', task: 'Hva gjør romanen relevant for deg som leser i dag?', solution: 'Personlig refleksjon over romanens aktualitet og gjenkjennelse.' },
        ],
        hints: ['Bruk fagbegreper fra kapittelet', 'Gi konkrete eksempler fra teksten (korte sitater)', 'Reflekter over hva som gjør romanen til samtidslitteratur'],
        solution: 'Analysen skal vise evne til å plassere en roman i sin samtidskontekst og analysere samspillet mellom form og innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-4-ex-samtid-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-samtid-2',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft autofiksjon og etikk: Hvilke etiske utfordringer reiser det når forfattere skriver om virkelige mennesker?',
        subTasks: [
          { label: 'a', task: 'Hva kjennetegner autofiksjon som sjanger?', solution: 'Blanding av selvbiografi og fiksjon, forfatteren bruker eget liv som materiale, litterær forming av virkelige hendelser.' },
          { label: 'b', task: 'Hvilke etiske spørsmål oppstår når forfattere skriver om familie og venner?', solution: 'Personvern, samtykke, retten til eget narrativ, maktforholdet mellom forfatter og de som portretteres.' },
          { label: 'c', task: 'Argumenter for kunstnerisk frihet: Hvorfor bør forfattere få skrive om sitt eget liv?', solution: 'Litterær verdi, bearbeiding av erfaringer, universelle temaer gjennom det personlige, ytringsfrihet.' },
          { label: 'd', task: 'Argumenter for begrensninger: Når kan autofiksjon være problematisk?', solution: 'Når andre ikke kan forsvare seg, når private forhold eksponeres, når det skader relasjoner eller mennesker.' },
        ],
        hints: ['Tenk på konkrete eksempler fra norsk litteraturdebatt', 'Vurder både forfatterens og de portretterte personenes perspektiv', 'Det finnes ikke ett riktig svar - drøft nyansert'],
        solution: 'Drøftingen skal vise evne til å reflektere over komplekse etiske spørsmål i litteraturen, med argumenter fra flere sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-2-4-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en fullstendig romananalyse (600-800 ord) av en roman du har lest. Analysen skal dekke fortellerteknikk, komposisjon, karakterer og tematikk.',
        hints: ['Strukturer analysen tydelig med avsnitt for hver del', 'Bruk fagbegreper fra kapittelet', 'Gi konkrete teksteksempler', 'Avslutt med en helhetlig tolkning'],
        solution: 'En fullstendig romananalyse viser evne til å anvende fagbegreper systematisk og gi en sammenhengende tolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-4-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign to romaner med ulikt perspektiv på samme tema (f.eks. identitet, tilhørighet eller familie). Drøft hvordan fortellerteknikk og komposisjon påvirker fremstillingen av temaet.',
        hints: ['Velg romaner fra pensum eller egen lesning', 'Vis konkrete paralleller og forskjeller', 'Reflekter over hvorfor forfatterne har gjort ulike valg'],
        solution: 'Sammenligningen skal vise evne til å analysere flere tekster i sammenheng og reflektere over forholdet mellom form og innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-4-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **2.1 Novelleanalyse** – Grunnleggende fortelleteknikk i kortere format
- **2.5 Litterære virkemidler** – Fordyp deg i virkemidler brukt i romaner
- **3.1 Flerkulturell litteratur** – Les romaner med flerkulturelle perspektiver
- **5.5 Tolkende og analyserende tekst** – Skriv romananalyser`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5: Litterære virkemidler
// ============================================================================

export const CHAPTER_NORSK_VG1_2_5: TextbookChapter = {
  id: 'norsk-vg1-2-5',
  courseId: 'norsk-vg1',
  chapterNumber: '2.5',
  title: 'Litterære virkemidler',
  description: 'Utforsk sentrale litterære virkemidler som metafor, symbol, ironi og intertekstualitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke skjønnlitterære tekster med vekt på form og innhold',
    'bruke fagspråk om språk og litteratur i tekstarbeid',
  ],
  content: [
    {
      id: 'norsk-vg1-2-5-intro',
      type: 'text',
      content: `## Litterære virkemidler - språkets verktøykasse

Litterære virkemidler er de teknikkene forfattere bruker for å skape effekt, mening og skjønnhet i tekster. Å kjenne virkemidlene gjør deg til en bedre leser - og en bedre skribent.

**Hvorfor bruke virkemidler?**
- Skape bilder og stemninger
- Si mye med få ord
- Formidle abstrakte ideer konkret
- Engasjere leseren følelsesmessig
- Skape dybde og flertydighet

**Kategorier av virkemidler:**
- Troper (billedspråk): metafor, metonymi, personifikasjon
- Symboler og allegorier
- Ironi i ulike former
- Intertekstualitet og allusjoner
- Lydlige og strukturelle virkemidler`,
    },
    {
      id: 'norsk-vg1-2-5-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Trope** | Samlebetegnelse for billedspråk (metafor, metonymi osv.) |
| **Metafor** | Skjult sammenligning der noe beskrives som noe annet |
| **Metonymi** | Erstatte ett ord med et nærstående ord |
| **Personifikasjon** | Gi livløse ting menneskelige egenskaper |
| **Symbol** | Noe konkret som representerer noe abstrakt |
| **Ironi** | Å si det motsatte av det man mener |
| **Intertekstualitet** | Referanser til andre tekster |
| **Allusjon** | Hentydning til noe kjent (tekst, hendelse, person) |`,
    },
    {
      id: 'norsk-vg1-2-5-image-virkemidler-oversikt',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-5-virkemidler-oversikt.png',
      alt: 'Oversikt over litterære virkemidler: troper, symboler, ironi og intertekstualitet',
      caption: 'De viktigste litterære virkemidlene - bruk dem i analyse og egen skriving.',
    },
    {
      id: 'norsk-vg1-2-5-def-1',
      type: 'definition',
      title: 'Troper - billedspråk',
      content: `**Metafor:**
En skjult sammenligning der noe beskrives som noe annet - uten "som" eller "lik".

*Eksempler:*
- "Livet er en reise" (liv = reise)
- "Tiden flyr" (tid = fugl)
- "Han er en rev" (person = lur)

**Sammenligning (simile):**
Eksplisitt sammenligning med "som" eller "lik".

*Eksempler:*
- "Hun var rask som en hare"
- "Øynene skinte lik to stjerner"

**Metonymi:**
Erstatte et ord med noe nærliggende.

*Eksempler:*
- "Kronen bestemte" (kongen)
- "Pennen er mektigere enn sverdet" (ord vs. vold)
- "Han leste Ibsen" (Ibsens verker)

**Personifikasjon (besjeling):**
Gi menneskelige egenskaper til noe ikke-menneskelig.

*Eksempler:*
- "Vinden hvisket"
- "Døden ventet tålmodig"
- "Naturen gråter"

**Synekdoke:**
Del står for helhet, eller omvendt.

*Eksempler:*
- "Vi trenger flere hender" (arbeidere)
- "Norge vant kampen" (landslaget)`,
    },
    {
      id: 'norsk-vg1-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser hvilken type virkemiddel som brukes i hvert eksempel:',
        subTasks: [
          {
            label: 'a',
            task: '"Tiden er penger."',
            solution: 'Metafor',
            multipleChoiceOptions: ['Metafor', 'Sammenligning', 'Metonymi', 'Personifikasjon'],
          },
          {
            label: 'b',
            task: '"Trærne bukket seg i stormen."',
            solution: 'Personifikasjon',
            multipleChoiceOptions: ['Metafor', 'Sammenligning', 'Metonymi', 'Personifikasjon'],
          },
          {
            label: 'c',
            task: '"Han løp som vinden."',
            solution: 'Sammenligning',
            multipleChoiceOptions: ['Metafor', 'Sammenligning', 'Metonymi', 'Personifikasjon'],
          },
          {
            label: 'd',
            task: '"Hele byen feirer i dag."',
            solution: 'Metonymi (byen = byens innbyggere)',
            multipleChoiceOptions: ['Metafor', 'Sammenligning', 'Metonymi', 'Personifikasjon'],
          },
        ],
        solution: 'a) Metafor, b) Personifikasjon, c) Sammenligning, d) Metonymi',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom metafor og sammenligning?',
        options: [
          'Metafor er en skjult sammenligning uten "som" eller "lik"',
          'Metafor handler alltid om mennesker',
          'Sammenligning er sterkere enn metafor',
          'Det er ingen forskjell',
        ],
        answer: 0,
        solution: 'Metafor er en skjult sammenligning ("Livet er en reise"), mens sammenligning bruker "som" eller "lik" ("Livet er som en reise").',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-2-5-def-2',
      type: 'definition',
      title: 'Symbol og allegori',
      content: `**Symbol:**
Et konkret element som representerer noe abstrakt eller større enn seg selv. Symboler får mening gjennom kulturell konvensjon eller konteksten i teksten.

**Konvensjonelle symboler:**
- Hjerte = kjærlighet
- Kors = kristendom, offer
- Hvit due = fred
- Svart = sorg, død
- Lys = håp, kunnskap

**Litterære symboler:**
- Havet = livets uendelighet, det ukjente
- Huset = selvet, familien
- Veien = livsreisen
- Årstidene = livsfaser
- Fuglen = frihet, sjelen

**Allegori:**
En utvidet metafor der hele fortellingen representerer noe annet.

*Eksempler:*
- Dyrefabler: Dyr representerer mennesketyper
- "Peer Gynt": Peers reise som et bilde på menneskelig søken
- "Ringenes Herre": Ringen som symbol på makt og korrupsjon

**Motiv vs. symbol:**
- Motiv: Gjentakende element (f.eks. vann, reise)
- Symbol: Element med overført betydning
- Et motiv kan bli et symbol gjennom gjentagelse og vektlegging`,
    },
    {
      id: 'norsk-vg1-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-ex-5',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksempler på symboler i en tekst du har lest. Analyser hva symbolene representerer.',
        subTasks: [
          { label: 'a', task: 'Identifiser minst to symboler i teksten.', solution: 'Beskriv de konkrete elementene som fungerer som symboler.' },
          { label: 'b', task: 'Forklar hva hvert symbol representerer.', solution: 'Analyser den abstrakte betydningen.' },
          { label: 'c', task: 'Hvordan bidrar symbolene til tekstens tema?', solution: 'Vis sammenhengen mellom symbol og tematikk.' },
        ],
        hints: ['Se etter gjentakende elementer', 'Vurder hva som får mye oppmerksomhet i teksten'],
        solution: 'Symbolanalyse krever at man ser sammenheng mellom konkrete elementer og abstrakte betydninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-2-5-def-3',
      type: 'definition',
      title: 'Ironi',
      content: `**Verbal ironi:**
Å si det motsatte av det man mener.

*Eksempel:*
"Så flott vær!" (når det regner)
"Du er jo kjempeflink!" (til noen som gjør feil)

**Situasjonsironi:**
Når det motsatte av det forventede skjer.

*Eksempel:*
En brannstasjon som brenner ned.
En tyv som blir ranet.

**Dramatisk ironi:**
Når leseren/publikum vet mer enn karakterene.

*Eksempel:*
I "Romeo og Julie" vet publikum at Julie ikke er død, men Romeo tror det.

**Sokratisk ironi:**
Å late som man er uvitende for å avsløre andres feil.

**Ironi som litterært grep:**
- Skaper distanse og kritisk perspektiv
- Avslører hykleri og dobbeltmoral
- Sentral i satire og samfunnskritikk
- Kielland og Ibsen er mestere i ironisk fremstilling

**Sarkasme vs. ironi:**
- Sarkasme: Skarp, ofte sårende ironi
- Ironi kan være mild og leken`,
    },
    {
      id: 'norsk-vg1-2-5-image-ironi-typer',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-5-ironi-typer.png',
      alt: 'Oversikt over ulike typer ironi: verbal ironi, situasjonsironi, dramatisk ironi og sokratisk ironi',
      caption: 'De ulike typene ironi - et viktig virkemiddel i litteratur og retorikk.',
    },
    {
      id: 'norsk-vg1-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-ex-3',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er dramatisk ironi?',
        options: [
          'Når leseren/publikum vet mer enn karakterene',
          'Når man sier det motsatte av det man mener',
          'Når det motsatte av det forventede skjer',
          'Når man later som man er uvitende',
        ],
        answer: 0,
        solution: 'Dramatisk ironi oppstår når publikum har informasjon karakterene ikke har, noe som skaper spenning og engasjement.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-ex-6',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksempler på ironi i en tekst av Kielland, Ibsen eller en annen samfunnskritisk forfatter. Analyser ironiens funksjon.',
        subTasks: [
          { label: 'a', task: 'Finn et eksempel på ironi i teksten.', solution: 'Sitér teksten og identifiser ironitypen.' },
          { label: 'b', task: 'Hva er ironiens mål/offer?', solution: 'Hvem eller hva blir kritisert?' },
          { label: 'c', task: 'Hvordan bidrar ironien til samfunnskritikken?', solution: 'Analyser ironiens retoriske funksjon.' },
        ],
        hints: ['Realister som Kielland brukte ofte ironi for å avsløre hykleri', 'Se etter kontraster mellom det som sies og det som menes'],
        solution: 'Ironi er et kraftfullt verktøy for samfunnskritikk fordi det avslører uten å moralisere direkte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-2-5-def-4',
      type: 'definition',
      title: 'Intertekstualitet og allusjoner',
      content: `**Intertekstualitet:**
Når en tekst refererer til, siterer eller spiller på andre tekster.

**Typer intertekstualitet:**
- **Sitat:** Direkte gjentakelse av annen tekst
- **Allusjon:** Hentydning til annen tekst uten direkte sitat
- **Parodi:** Komisk etterlikning
- **Pastisj:** Stiletterlikning uten komisk intensjon
- **Adaptasjon:** Ny versjon av eksisterende verk

**Allusjoner:**
Hentydninger til kjente tekster, myter, historie eller kultur.

*Eksempler:*
- "Et Dukkehjem" - tittelen alluderer til kvinnens begrensede liv
- Bibelske allusjoner: "Judas-kyss", "Barmhjertig samaritan"
- Mytologiske allusjoner: "Odyssé", "Sisyfosarbeid"

**Hvorfor bruke intertekstualitet?**
- Skape dybde og lag av mening
- Plassere teksten i en tradisjon
- Invitere leseren til aktiv tolkning
- Kommentere og kritisere andre tekster
- Skape gjenkjennelse og humor

**Leserens rolle:**
- Leseren må kjenne referansene for full forståelse
- Ulik bakgrunn gir ulik lesning
- Tekster kan leses på flere nivåer`,
    },
    {
      id: 'norsk-vg1-2-5-example-3',
      type: 'example',
      title: 'Eksempel: Analysere symbolikk i tekst',
      problem: `I en novelle finner vi følgende motiver som går igjen: et gammelt ur som har stoppet, et vindu som aldri åpnes, og en hage som har grodd igjen.

Analyser disse som potensielle symboler.`,
      solution: `**Symbolanalyse:**

**1. Det stoppede uret:**

**Bokstavelig:** Et ur som ikke fungerer, viser feil tid.

**Symbolsk betydning:**
- Tid som har stoppet eller "frosset"
- En hendelse i fortiden som ikke er bearbeidet
- Karakterens manglende evne til å gå videre
- Død eller stagnasjon

**I kontekst:** Hvis hovedpersonen har mistet noen, kan uret symbolisere at tiden stoppet for ham/henne i det øyeblikket.

---

**2. Vinduet som aldri åpnes:**

**Bokstavelig:** Et vindu som forblir lukket.

**Symbolsk betydning:**
- Manglende forbindelse med omverdenen
- Isolasjon og innelukkethet
- Uvilje mot å slippe inn frisk luft / nye perspektiver
- Frykt for forandring

**I kontekst:** Vinduet representerer kanskje karakterens motvilje mot å åpne seg for andre eller for livet utenfor.

---

**3. Den gjengrodde hagen:**

**Bokstavelig:** En hage som ikke er stelt, overgrodd av ugress.

**Symbolsk betydning:**
- Noe som en gang var vakkert og pleiet, nå forfalt
- Forsømmelse og mangel på omsorg
- Fortiden som tar over nåtiden
- Naturens gjenerobing når mennesket gir opp

**I kontekst:** Hagen kan speile karakterens indre tilstand - noe som har visnet fordi det ikke ble tatt vare på.

---

**Samlet tolkning:**
De tre symbolene forsterker hverandre og peker mot samme tematikk: **stagnasjon, sorg og isolasjon**. En karakter som er fanget i fortiden, som ikke klarer å gå videre eller åpne seg for livet.

**Tips:** Symboler får sin fulle betydning i kontekst. Se alltid på hvordan de forholder seg til handling, karakterer og tema.`,
    },
    {
      id: 'norsk-vg1-2-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-ex-7',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn et eksempel på intertekstualitet i en tekst, film eller sang du kjenner. Forklar referansen og dens effekt.',
        subTasks: [
          { label: 'a', task: 'Beskriv teksten og den intertekstuelle referansen.', solution: 'Identifiser hva det refereres til og hvordan.' },
          { label: 'b', task: 'Hva tilfører referansen teksten?', solution: 'Analyser effekten - dybde, humor, kritikk?' },
          { label: 'c', task: 'Hva må leseren/seeren vite for å forstå referansen?', solution: 'Reflekter over leserens rolle.' },
        ],
        hints: ['Tenk på filmer som refererer til andre filmer, sanger med sitater osv.', 'Populærkultur er full av intertekstualitet'],
        solution: 'Intertekstualitet skaper mening gjennom dialog med andre tekster og kulturell kunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Identifisering av virkemidler',
      problem: `Identifiser og forklar virkemidlene i disse tekstutdragene:

1. "Sorgen lå tungt over huset som en våt dyne."
2. "Kronen har talt - folket må adlyde."
3. "For en fantastisk idé det var å gå tur i stormen!"
4. "Havet kalte på ham, og han visste at han måtte reise."`,
      solution: `**1. "Sorgen lå tungt over huset som en våt dyne."**
- **Sammenligning:** "som en våt dyne"
- **Personifikasjon:** Sorgen "lå" - får fysisk tilstedeværelse
- **Effekt:** Gjør den abstrakte følelsen konkret og fysisk følbar

**2. "Kronen har talt - folket må adlyde."**
- **Metonymi:** "Kronen" står for kongen/makten
- **Effekt:** Understreker institusjonell makt fremfor person

**3. "For en fantastisk idé det var å gå tur i stormen!"**
- **Ironi (verbal):** Sier det motsatte av det som menes
- **Effekt:** Uttrykker kritikk/frustrasjon indirekte

**4. "Havet kalte på ham, og han visste at han måtte reise."**
- **Personifikasjon:** Havet "kalte"
- **Symbol:** Havet som lengsel, eventyr, det ukjente
- **Effekt:** Skaper mystikk og følelse av skjebne`,
    },
    {
      id: 'norsk-vg1-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Symbol i Ibsens "Vildanden"',
      problem: `I Ibsens "Vildanden" (1884) er vildanden et sentralt symbol. Hvordan fungerer dette symbolet?`,
      solution: `**Villanden som symbol:**

Villanden i stykket har flere lag av symbolsk betydning:

**1. Hedvig og villanden:**
- Begge er "skadeskutte" - villanden fysisk, Hedvig emosjonelt
- Begge lever i et kunstig miljø (mørkeloftet/familien)
- Begge er avhengige av andres omsorg

**2. Familien Ekdal:**
- Hele familien lever i en illusjon, som villanden i sitt kunstige tjern
- De har tilpasset seg en begrenset tilværelse
- Sannheten (lyset) kan være ødeleggende

**3. Livsløgnen:**
- Villanden representerer menneskets behov for illusjoner
- Å "drepe" illusjonen kan være fatalt
- Gregers' krav om sannhet blir destruktivt

**Symbolets kompleksitet:**
- Symbolet er ikke entydig
- Ulike karakterer tolker villanden ulikt
- Ibsen unngår enkle svar

**Effekt:**
Symbolet binder sammen temaer og karakterer, og gir stykket dybde uten å være moraliserende.`,
    },
    {
      id: 'norsk-vg1-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-ex-4',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre setninger som bruker henholdsvis metafor, personifikasjon og ironi. Forklar effekten av hvert virkemiddel.',
        hints: ['Velg et tema (f.eks. skole, vennskap, natur)', 'Tenk på hva virkemiddelet tilfører uttrykket'],
        solution: 'Setningene skal vise bevisst bruk av virkemidler med forklaring av hvordan de skaper effekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-2-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (200-300 ord) der du bevisst bruker minst fire ulike litterære virkemidler. Legg ved en analyse der du forklarer bruken.',
        hints: ['Velg et tema som egner seg for billedspråk', 'Varier virkemidlene', 'Ikke overdriv - virkemidler skal tjene teksten'],
        solution: 'Teksten skal vise kreativ og bevisst bruk av virkemidler, og analysen skal demonstrere faglig forståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-2-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en analyse (400-500 ord) av virkemiddelbruken i et dikt eller en novelle. Fokuser på samspillet mellom ulike virkemidler og deres effekt.',
        hints: ['Velg en tekst med rik virkemiddelbruk', 'Vis hvordan virkemidlene jobber sammen', 'Knytt virkemidlene til tekstens tema og stemning'],
        solution: 'Analysen skal vise evne til å identifisere virkemidler og forklare deres funksjon i en sammenhengende tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-2-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign bruken av ironi hos to forfattere (f.eks. Kielland og Ibsen, eller en klassisk og en moderne forfatter). Hvordan bruker de ironi ulikt?',
        hints: ['Velg konkrete teksteksempler', 'Se på ironityper, mål for kritikk og tone', 'Reflekter over kontekstens betydning'],
        solution: 'Sammenligningen skal vise forståelse for ironi som litterært virkemiddel og evne til å analysere forfatterstemmer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-2-5-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **2.1 Novelleanalyse** – Bruk virkemidler i novelleanalyse
- **2.2 Lyrikk og diktanalyse** – Bruk virkemidler i diktanalyse
- **2.3 Drama og teater** – Se virkemidler i dramatisk sammenheng
- **2.4 Romananalyse** – Bruk virkemidler i romananalyse`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6: Grafiske romaner og bildebøker
// ============================================================================

export const CHAPTER_NORSK_VG1_2_6: TextbookChapter = {
  id: 'norsk-vg1-2-6',
  courseId: 'norsk-vg1',
  chapterNumber: '2.6',
  title: 'Grafiske romaner og bildebøker',
  description: 'Analyser fortelling gjennom samspill mellom tekst og bilde i grafiske romaner og bildebøker.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og tolke sammensatte tekster',
    'reflektere over hvordan tekst og bilde sammen skaper mening',
  ],
  content: [
    {
      id: 'norsk-vg1-2-6-intro',
      type: 'text',
      content: `## Visuell fortelling

Grafiske romaner og bildebøker er narrative sjangre der tekst og bilde sammen skaper mening. Disse sjangrene har fått stadig større anerkjennelse og brukes til alt fra barnelitteratur til komplekse voksenbøker om krig, traume og identitet.

**Hvorfor studere grafiske romaner og bildebøker?**
- Utvikler visuell literacy
- Viser hvordan mening skapes multimodalt
- Relevant i en visuell kultur
- Tilgjengelig for ulike lesere
- Kunstform med lang historie og høy kvalitet

**Historisk bakgrunn:**
- Tegneserien har røtter tilbake til 1800-tallet
- Moderne grafisk roman fra 1980-tallet (Art Spiegelman: "Maus")
- Bildeboka har utviklet seg fra ren barnelitteratur til kunstnerisk uttrykk
- Norske bidrag: Steffen Kverneland, Jason, Lars Fiske`,
    },
    {
      id: 'norsk-vg1-2-6-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Grafisk roman** | Lengre fortelling i tegneserieformat |
| **Bildebok** | Bok der tekst og bilde sammen skaper fortellingen |
| **Panel** | En enkelt rute i en tegneserie |
| **Renne** | Mellomrommet mellom panelene |
| **Snakkeboble** | Ramme rundt dialog i tegneserier |
| **Onomatopoetikon** | Lydmalende ord (bang, splash) |
| **Ikonotext** | Samspillet mellom tekst og bilde |
| **Visuell literacy** | Evne til å lese og tolke visuelle uttrykk |`,
    },
    {
      id: 'norsk-vg1-2-6-def-1',
      type: 'definition',
      title: 'Hva er grafisk roman?',
      content: `**Definisjon:**
En grafisk roman er en lengre, sammenhengende fortelling i tegneserieformat. Den skiller seg fra tradisjonelle tegneserieblader ved:
- Lengde (boklengde)
- Sammenhengende narrativ
- Ofte mer komplekse temaer
- Utgis som bok, ikke hefte

**Kjennetegn:**
- Fortelling gjennom sekvensielle bilder
- Samspill mellom tekst og bilde
- Panelstruktur og layout
- Visuell stil som meningsbærer

**Sjangre innenfor grafisk roman:**
- **Memoar/selvbiografi:** "Persepolis" (Marjane Satrapi)
- **Historie/dokumentar:** "Maus" (Art Spiegelman)
- **Fiksjon:** "Watchmen" (Alan Moore)
- **Litterære adaptasjoner:** Klassikere i tegneserieformat

**Norske grafiske romaner:**
- Steffen Kverneland: "Munch" (biografisk)
- Jason: "Jeg drepte Adolf Hitler" (alternativ historie)
- Lars Fiske: "Herr Merz" (kunstnerbiografi)`,
    },
    {
      id: 'norsk-vg1-2-6-image-tegneserie-elementer',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-6-tegneserie-elementer.png',
      alt: 'Oversikt over tegneseriens elementer: panel, renne, snakkeboble, tankeboble og lydeffekter',
      caption: 'Grunnleggende elementer i tegneserier og grafiske romaner.',
    },
    {
      id: 'norsk-vg1-2-6-def-2',
      type: 'definition',
      title: 'Bildeboka som sjanger',
      content: `**Definisjon:**
Bildeboka er en bok der tekst og bilde er gjensidig avhengige for å skape mening. Ingen av delene fungerer alene.

**Typer bildebøker:**
- **Illustrert bok:** Teksten kan stå alene, bildene illustrerer
- **Bildebok:** Tekst og bilde utfyller hverandre
- **Ordløs bildebok:** Historien fortelles bare gjennom bilder
- **Kunstnerisk bildebok:** For alle aldersgrupper, kunstnerisk ambisiøs

**Kjennetegn på bildeboka:**
- Ofte 32 sider (praktiske hensyn)
- Oppslag (dobbeltside) som enhet
- Vendepunkt og rytme gjennom boken
- Forsats og omslag som del av fortellingen

**Bildeboka i dag:**
- Ikke bare for barn
- Behandler komplekse temaer
- Anerkjent som kunstform
- Crossover-bøker for alle aldersgrupper

**Norske bildebokskapere:**
- Stian Hole, Gro Dahle/Svein Nyhus, Lisa Aisato`,
    },
    {
      id: 'norsk-vg1-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-ex-3',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv forskjellen mellom en illustrert bok og en bildebok.',
        hints: ['Tenk på forholdet mellom tekst og bilde', 'Kan teksten stå alene?'],
        solution: 'I en illustrert bok kan teksten stå alene, bildene illustrerer. I en bildebok er tekst og bilde gjensidig avhengige - ingen av delene fungerer alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-6-def-3',
      type: 'definition',
      title: 'Visuell fortelling: Paneler og layout',
      content: `**Panelstrukturen i grafiske romaner:**

**Panel:**
Et enkelt bilde, vanligvis avgrenset av ramme.

**Gutter:**
Rommet mellom panelene. Her skjer mye av fortellingen - leseren fyller inn det som "mangler".

**Paneltyper:**
- **Standard panel:** Rektangulært, normal størrelse
- **Stort panel:** Viktig øyeblikk, bredere perspektiv
- **Lite panel:** Detalj, rask handling
- **Splash page:** Hele siden er ett bilde
- **Rammeløst panel:** Flyter over i bakgrunnen

**Layout-prinsipper:**
- Venstre til høyre, topp til bunn (i vestlig kultur)
- Panelstørrelse signaliserer viktighet
- Asymmetri skaper spenning
- Gjentakelse skaper rytme

**Overganger mellom paneler:**
- **Handling til handling:** Samme scene, tid går
- **Scene til scene:** Hopp i tid/rom
- **Aspekt til aspekt:** Ulike deler av samme øyeblikk
- **Øyeblikk til øyeblikk:** Minimal tid
- **Subjekt til subjekt:** Skifte av fokus`,
    },
    {
      id: 'norsk-vg1-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-ex-1',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kalles rommet mellom panelene i en tegneserie?',
        options: [
          'Gutter',
          'Panel',
          'Splash',
          'Layout',
        ],
        answer: 0,
        solution: 'Gutter er rommet mellom panelene. Her skjer mye av fortellingen - leseren fyller inn det som "mangler" mellom bildene.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-ex-5',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser panelstruktur og layout i en side fra en grafisk roman.',
        subTasks: [
          { label: 'a', task: 'Beskriv panelstrukturen (størrelse, form, plassering).', solution: 'Analyser hvordan panelene er organisert.' },
          { label: 'b', task: 'Hva signaliserer layouten om tempo og viktighet?', solution: 'Store paneler = viktig, mange små = raskt tempo.' },
          { label: 'c', task: 'Hvordan fungerer overgangene mellom panelene?', solution: 'Hva skjer i "gutteret"? Hvor mye fyller leseren inn?' },
        ],
        hints: ['Velg en side med variert panelstruktur', 'Tenk på leserens øye-bevegelse'],
        solution: 'Analysen skal vise forståelse for hvordan layout bidrar til fortellingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-6-def-4',
      type: 'definition',
      title: 'Tekst-bilde-relasjoner',
      content: `**Ankring:**
Teksten forklarer eller presiserer bildet.
- Bildet er flertydig, teksten gir retning
- Eksempel: Bildetekst som forteller hvem/hva vi ser

**Avløsning:**
Tekst og bilde gir ulik informasjon som utfyller hverandre.
- Teksten kan si noe bildet ikke viser
- Bildet kan vise noe teksten ikke nevner
- Skaper rikere fortelling

**Motstrid:**
Tekst og bilde motsier hverandre.
- Kan skape ironi eller tvil
- Viser karakterens løgner eller selvbedrag
- Engasjerer leseren i tolkning

**Repetisjon:**
Tekst og bilde sier det samme.
- Sjelden og ofte kjedelig
- Kan brukes for å forsterke poeng

**Symmetri/asymmetri:**
Forholdet mellom visuell og verbal informasjon.
- Symmetri: Lik vekt på tekst og bilde
- Asymmetri: En av delene dominerer

**Dialogballonger og tekstbokser:**
- **Snakkeboble:** Direkte tale
- **Tankeboble:** Indre monolog
- **Tekstboks:** Fortellerstemme, tid/sted
- **Lydeffekter:** Onomatopoetikon som visuelt element`,
    },
    {
      id: 'norsk-vg1-2-6-image-grafisk-roman-analyse',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-2-6-grafisk-roman-analyse.png',
      alt: 'Rammeverk for analyse av grafiske romaner med fokus på panelstruktur, tekst-bilde-relasjoner og visuell fortelling',
      caption: 'Analyseverktoy for grafiske romaner - se på samspillet mellom tekst og bilde.',
    },
    {
      id: 'norsk-vg1-2-6-example-0',
      type: 'example',
      title: 'Eksempel: Analysere panelstruktur og tempo',
      problem: `En side i en grafisk roman har følgende layout:
- Øverst: Ett stort panel som dekker halve siden (splash-lignende)
- Midten: Seks små, like store paneler (2x3)
- Nederst: Ett bredt, lavt panel

Analyser hvordan denne layouten kan påvirke lesningen.`,
      solution: `**Analyse av panelstruktur:**

**Det store panelet øverst:**
- **Funksjon:** Etablerer scene, setting eller et viktig øyeblikk
- **Effekt:** Stopper leserens øye, signaliserer "dette er viktig"
- **Mulig innhold:** Oversiktsbilde, dramatisk øyeblikk, emosjonelt høydepunkt
- **Tempo:** Langsomt - leseren dveler ved bildet

---

**De seks små panelene (2x3):**
- **Funksjon:** Rask handling, detaljer, sekvens
- **Effekt:** Øyet beveger seg raskt gjennom rutenett
- **Mulig innhold:** Dialog-utveksling, handlingssekvens, detaljer som bygger opp
- **Tempo:** Hurtig - mange små øyeblikk etter hverandre

**Eksempel på innhold:**
Panel 1-2: Karakterene snakker
Panel 3-4: Noe skjer
Panel 5-6: Reaksjoner

---

**Det brede panelet nederst:**
- **Funksjon:** Avslutter siden, ofte med et vendepunkt eller cliffhanger
- **Effekt:** Bredden gir pusterom etter de raske panelene
- **Mulig innhold:** Reaksjonsbilde, ny informasjon, overgang til neste side
- **Tempo:** Pause før sidevending

---

**Samlet tempoanalyse:**

Siden har en **bølgestruktur**:
1. **Langsom start** (stort panel) - etablering
2. **Rask midtdel** (små paneler) - handling/dialog
3. **Pause til slutt** (bredt panel) - landing

**Dramaturgisk funksjon:**
Denne strukturen mimer klassisk spenningsoppbygging: Etablering → Handling → Vendepunkt. Leseren tvinges til å variere lesetempo, noe som skaper dynamikk.

**Kontrast:**
Hvis alle paneler var like store, ville siden føles monoton. Variasjonen guider leserens opplevelse.`,
    },
    {
      id: 'norsk-vg1-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-ex-2',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er "avløsning" i tekst-bilde-relasjoner?',
        options: [
          'Tekst og bilde gir ulik informasjon som utfyller hverandre',
          'Teksten forklarer bildet',
          'Tekst og bilde motsier hverandre',
          'Tekst og bilde sier det samme',
        ],
        answer: 0,
        solution: 'Avløsning betyr at tekst og bilde gir ulik informasjon som utfyller hverandre - de "avløser" hverandre i å fortelle historien.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-ex-4',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser tekst-bilde-relasjonen i en bildebok eller grafisk roman du kjenner.',
        subTasks: [
          { label: 'a', task: 'Beskriv et oppslag eller en side.', solution: 'Beskriv hva tekst og bilde hver for seg viser.' },
          { label: 'b', task: 'Er relasjonen ankring, avløsning eller motstrid?', solution: 'Identifiser og begrunn.' },
          { label: 'c', task: 'Hvordan bidrar relasjonen til fortellingen?', solution: 'Analyser effekten av samspillet.' },
        ],
        hints: ['Velg et interessant oppslag med tydelig samspill', 'Se på hva tekst og bilde hver for seg bidrar med'],
        solution: 'Analysen skal vise forståelse for hvordan tekst og bilde sammen skaper mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-6-def-5',
      type: 'definition',
      title: 'Analyse av multimodale tekster',
      content: `**Analysemodell for grafiske romaner/bildebøker:**

**1. Fortelling:**
- Hva handler det om? (innhold)
- Hvordan er fortellingen strukturert?
- Hvem forteller? (visuelt og verbalt)

**2. Visuell stil:**
- Fargebruk (naturalistisk, symbolsk, begrenset)
- Strek og form (realistisk, stilisert, karikert)
- Perspektiv og billedutsnitt
- Lys og skygge

**3. Layout og komposisjon:**
- Panelstruktur og -overganger
- Bruk av hele sider/oppslag
- Lesens rytme og tempo

**4. Tekst-bilde-relasjon:**
- Ankring, avløsning eller motstrid?
- Hvordan fordeles informasjonen?
- Dialogens og fortellerens rolle

**5. Tema og tolkning:**
- Hvilke temaer utforskes?
- Hvordan bidrar tekst og bilde sammen til meningen?
- Hva gjør verket unikt som multimodal tekst?

**Tips for analyse:**
- Les flere ganger: først for historien, så for virkemidler
- Studer enkeltbilder nøye
- Vær oppmerksom på det som IKKE vises
- Sammenlign med andre tekster i sjangeren`,
    },
    {
      id: 'norsk-vg1-2-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser den visuelle stilen i en grafisk roman eller bildebok.',
        subTasks: [
          { label: 'a', task: 'Beskriv fargebruken.', solution: 'Er den naturalistisk, symbolsk, begrenset? Hva signaliserer fargene?' },
          { label: 'b', task: 'Beskriv strek og form.', solution: 'Realistisk, stilisert, karikert? Hva uttrykker stilen?' },
          { label: 'c', task: 'Hvordan bidrar stilen til stemning og tema?', solution: 'Knytt visuell stil til innhold.' },
        ],
        hints: ['Velg et verk med tydelig visuell stil', 'Sammenlign gjerne med andre verk'],
        solution: 'Analysen skal vise forståelse for visuell stil som meningsbærer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av bildebok-oppslag',
      problem: `Analyser et tenkt oppslag fra en bildebok:

Venstre side: En liten jente sitter alene i et stort, mørkt rom. Tekst: "Jeg er ikke redd."
Høyre side: Skygger av trær som ser ut som monstre på veggen. Ingen tekst.`,
      solution: `**Tekst-bilde-relasjon:**
Dette er et klassisk eksempel på **motstrid** mellom tekst og bilde.

**Analyse:**
- **Teksten** sier "Jeg er ikke redd" - et direkte utsagn
- **Bildet** på venstre side viser ensomhet og mørke
- **Bildet** på høyre side viser truende skygger

**Effekt av motstriden:**
- Leseren forstår at jenta ER redd, selv om hun sier det motsatte
- Skaper empati og gjenkjennelse
- Viser "showing" vs. "telling" - vi ser sannheten

**Visuell analyse:**
- **Størrelseskontrast:** Liten jente i stort rom = sårbarhet
- **Lys/mørke:** Mørket dominerer = frykt, ukjent
- **Tomme oppslag:** Høyre side har ingen tekst = bildet taler for seg

**Symbolikk:**
- Skygger som monstre = barnlig fantasi, frykt
- Det tomme rommet = ensomhet

**Tolkning:**
Oppslaget handler om barns frykt og hvordan vi prøver å være modige selv når vi er redde. Tekst-bilde-motstriden skaper dybde og inviterer leseren til å forstå mer enn karakteren selv uttrykker.`,
    },
    {
      id: 'norsk-vg1-2-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et eget oppslag (dobbeltside) til en bildebok. Beskriv eller tegn bildene og skriv teksten. Forklar tekst-bilde-relasjonen.',
        hints: ['Velg et tema som egner seg for visuell fortelling', 'Tenk gjennom hva tekst og bilde hver skal bidra med', 'Prøv avløsning eller motstrid for interessant samspill'],
        solution: 'Oppslaget skal vise bevisst bruk av tekst-bilde-relasjon, og forklaringen skal demonstrere faglig forståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-2-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en fullstendig analyse (500-700 ord) av en grafisk roman eller bildebok. Bruk analysemodellen fra kapittelet.',
        hints: ['Dekk alle punktene i modellen: fortelling, visuell stil, layout, tekst-bilde-relasjon, tema', 'Gi konkrete eksempler fra verket', 'Avslutt med en helhetlig tolkning'],
        solution: 'Analysen skal vise evne til å anvende fagbegreper på multimodale tekster og gi en sammenhengende tolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-6-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign en grafisk roman med en tradisjonell roman som behandler lignende tema. Drøft hva mediet gjør med fortellingen.',
        hints: ['Velg verk med sammenlignbart tema', 'Se på hva det visuelle tilfører', 'Reflekter over hva som går tapt/vinnes i ulike medier'],
        solution: 'Sammenligningen skal vise forståelse for mediets betydning for fortelling og opplevelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-6-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: "Grafiske romaner og bildebøker er like litterært verdifulle som tradisjonelle romaner."',
        hints: ['Definer hva "litterær verdi" kan bety', 'Bruk eksempler fra kjente verk', 'Vurder argumenter for og mot', 'Ta stilling, men vis nyansering'],
        solution: 'Drøftingen skal vise evne til å reflektere kritisk over sjangervurdering og begrunne egne synspunkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-6-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **6.1 Sammensatte tekster** – Analyser multimodale tekster generelt
- **6.2 Film som tekst** – Utforsk visuell fortelling i film
- **2.4 Romananalyse** – Sammenlign tradisjonell romanfortelling`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.1: Muntlig kommunikasjon
// ============================================================================

export const CHAPTER_NORSK_VG1_5_1: TextbookChapter = {
  id: 'norsk-vg1-5-1',
  courseId: 'norsk-vg1',
  chapterNumber: '5.1',
  title: 'Muntlig kommunikasjon',
  description: 'Utvikle ferdigheter i muntlig presentasjon og diskusjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere fagstoff muntlig med klar struktur og tilpasning til mottaker',
  ],
  content: [
    {
      id: 'norsk-vg1-5-1-intro',
      type: 'text',
      content: `## Muntlig kommunikasjon

Muntlige ferdigheter er avgjørende i utdanning, arbeidsliv og samfunnsdeltakelse. Å kunne uttrykke seg klart, lytte aktivt og delta i samtaler er grunnleggende kompetanser.

**Muntlige situasjoner:**
- Presentasjoner og foredrag
- Diskusjoner og debatter
- Møter og gruppearbeid
- Jobbintervjuer
- Daglige samtaler

**Hvorfor er muntlige ferdigheter viktige?**
- Formidler kunnskap effektivt
- Bygger relasjoner
- Fremmer demokratisk deltakelse
- Øker selvtillit`,
    },
    {
      id: 'norsk-vg1-5-1-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Presentasjon** | Muntlig fremleggelse av et emne for publikum |
| **Retorikk** | Kunsten å overbevise gjennom tale |
| **Kroppsspråk** | Ikke-verbal kommunikasjon (gester, holdning) |
| **Stemmebruk** | Bevisst bruk av tempo, volum og toneleie |
| **Aktiv lytting** | Å lytte oppmerksomt og vise forståelse |
| **Diskusjon** | Samtale der ulike synspunkter utveksles |
| **Debatt** | Ordnet meningsutveksling mellom parter |
| **Tilbakemelding** | Respons på andres presentasjon eller innlegg |`,
    },
    {
      id: 'norsk-vg1-5-1-def-1',
      type: 'definition',
      title: 'Presentasjonsteknikk',
      content: `**Forberedelse:**
- Definer formål: Hva vil du oppnå?
- Kjenn publikum: Hvem snakker du til?
- Strukturer innholdet: Innledning - hoveddel - avslutning
- Øv på fremføringen

**Struktur:**
- **Innledning:** Fang oppmerksomheten, presenter tema
- **Hoveddel:** Maks 3-4 hovedpunkter, logisk rekkefølge
- **Avslutning:** Oppsummer, gi en konklusjon eller oppfordring

**Fremføringsteknikk:**
- Øyekontakt med publikum
- Tydelig og variert stemmebruk
- Naturlige pauser
- Kroppsspråk som støtter budskapet
- Bruk av hjelpemidler (stikkord, presentasjon)`,
    },
    {
      id: 'norsk-vg1-5-1-image-presentasjon-struktur',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-1-presentasjon-struktur.png',
      alt: 'Struktur for en god presentasjon med innledning, hoveddel og avslutning',
      caption: 'En god presentasjon har tydelig struktur: innledning som fanger oppmerksomhet, hoveddel med hovedpunkter, og avslutning som oppsummerer.',
    },
    {
      id: 'norsk-vg1-5-1-image-presentasjon-tips',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-1-presentasjon-tips.png',
      alt: 'Tips for god presentasjonsteknikk: oyekontakt, stemmebruk, kroppssprak og bruk av hjelpemidler',
      caption: 'Fremforingsteknikk - husk oyekontakt, tydelig stemme og naturlige pauser.',
    },
    {
      id: 'norsk-vg1-5-1-def-2',
      type: 'definition',
      title: 'Deltakelse i samtaler og diskusjoner',
      content: `**Aktiv lytting:**
- Vis at du lytter (blikk, nikk)
- Still oppfølgingsspørsmål
- Oppsummer det andre har sagt
- Unngå å avbryte

**Konstruktiv diskusjon:**
- Respekter andres synspunkter
- Argumenter saklig, ikke personlig
- Begrunn standpunktene dine
- Vær åpen for å endre mening

**Samtaleregler:**
- Vent på tur
- Hold deg til saken
- Bidra til samtalen
- Vær inkluderende`,
    },
    {
      id: 'norsk-vg1-5-1-example-0',
      type: 'example',
      title: 'Eksempel: Fra nervøs til selvsikker presentasjon',
      problem: `Maria skal holde en 5-minutters presentasjon om klimaendringer for klassen. Hun er nervøs og har følgende utfordringer:
- Vet ikke hvordan hun skal begynne
- Redd for å miste tråden
- Vet ikke hvor hun skal se
- Snakker ofte for fort når hun er nervøs

Hvordan kan Maria forberede seg for å lykkes?`,
      solution: `**Forberedelse til presentasjonen:**

**1. Strukturer innholdet tydelig:**

**Innledning (30 sek):**
Maria åpner med en konkret, overraskende fakta:
"Visste dere at 2023 var det varmeste året som noensinne er målt? I dag skal jeg snakke om hva dette betyr for oss."

**Hoveddel (3,5 min) - tre hovedpunkter:**
1. Hva skjer med klimaet? (1 min)
2. Hvorfor skjer det? (1 min)
3. Hva kan vi gjøre? (1,5 min)

**Avslutning (1 min):**
"Klimaendringene er vår tids største utfordring. Men vi kan alle bidra - og det begynner med de små valgene vi tar hver dag."

---

**2. Lag stikkordskort:**
Maria skriver ett kort per hovedpunkt med bare nøkkelord - ikke hele setninger. Dette hindrer at hun leser opp.

---

**3. Øv på teknikk:**

**Øyekontakt:**
- Del rommet i tre: venstre, midten, høyre
- Se på ulike personer i hver del gjennom presentasjonen
- Ikke fest blikket på én person hele tiden

**Tempo:**
- Merk av på stikkordskortene: "PUST" og "PAUSE"
- Ta bevisste pauser etter viktige poenger
- Spør en venn om å gi tegn hvis hun snakker for fort

**Mot nervøsiteten:**
- Forbered de første setningene ekstra godt
- Pust dypt tre ganger før hun begynner
- Husk: Nervøsitet er energi - bruk den!

---

**4. Øv presentasjonen:**
- Først alene, gjerne foran speil
- Så for en venn eller familiemedlem
- Ta opp på mobilen og se gjennom

**Resultat:** Med god forberedelse kan Maria gå fra nervøs til selvsikker. Strukturen gir henne trygghet, stikkordene hindrer at hun mister tråden, og øvelsen gjør fremføringen naturlig.`,
    },
    {
      id: 'norsk-vg1-5-1-example-1',
      type: 'example',
      title: 'Eksempel: God presentasjonsstruktur',
      problem: `Lag en struktur for en 5-minutters presentasjon om bærekraftig mote.`,
      solution: `**Innledning (30 sek):**
- Hook: "Visste du at moteindustrien er verdens nest mest forurensende industri?"
- Presentasjon av tema: "I dag skal jeg snakke om bærekraftig mote og hva vi kan gjøre."

**Hoveddel (3,5 min):**
1. Problemet (1 min): Fast fashion, miljøpåvirkning, arbeidsforhold
2. Løsninger (1,5 min): Gjenbruk, kvalitet over kvantitet, bevisste valg
3. Hva du kan gjøre (1 min): Konkrete tips

**Avslutning (1 min):**
- Oppsummering: "Moteindustrien har store utfordringer, men vi kan alle bidra."
- Oppfordring: "Neste gang du handler, tenk over valget ditt."

**Hjelpemidler:**
- Stikkordskort
- Bilder/statistikk på skjerm`,
    },
    {
      id: 'norsk-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva kjennetegner god muntlig presentasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er viktigst å tenke på i innledningen?',
            solution: 'Fange oppmerksomheten og presentere tema tydelig.',
          },
          {
            label: 'b',
            task: 'Hvorfor er øyekontakt viktig?',
            solution: 'Det skaper kontakt med publikum og viser selvtillit.',
          },
          {
            label: 'c',
            task: 'Når bør du bruke pauser?',
            solution: 'Etter viktige poenger, for å la informasjonen synke inn.',
          },
        ],
        solution: 'God presentasjon krever forberedelse, struktur og bevisst fremføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Planlegg en 3-minutters presentasjon om et selvvalgt tema.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en innledning som fanger oppmerksomheten.',
            solution: 'Bruk en overraskende fakta, et spørsmål eller en kort historie.',
          },
          {
            label: 'b',
            task: 'List opp 2-3 hovedpunkter for hoveddelen.',
            solution: 'Velg de viktigste aspektene ved temaet.',
          },
          {
            label: 'c',
            task: 'Skriv en avslutning med oppfordring eller konklusjon.',
            solution: 'Oppsummer og gi publikum noe å tenke på.',
          },
        ],
        hints: ['Hold det enkelt', 'Øv på tiden'],
        solution: 'En godt planlagt presentasjon gjør fremføringen enklere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør en diskusjon med en medelev om et aktuelt tema. Fokuser på aktiv lytting og saklig argumentasjon.',
        hints: ['Velg et tema dere er uenige om', 'Fokuser på å forstå motpartens synspunkt', 'Oppsummer det den andre sier før du svarer'],
        solution: 'God diskusjon krever både å uttrykke egne synspunkter og å lytte til andres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hold presentasjonen du planla for klassen eller en gruppe. Be om tilbakemelding på struktur og fremføring.',
        hints: ['Ta opp presentasjonen om mulig', 'Be om konkret tilbakemelding', 'Reflekter over hva du kan forbedre'],
        solution: 'Øvelse gjør mester - jo mer du presenterer, jo bedre blir du.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over dine egne muntlige ferdigheter. Hva er dine styrker? Hva ønsker du å forbedre?',
        hints: ['Tenk på tidligere presentasjoner', 'Vurder både forberedelse og fremføring', 'Sett deg konkrete mål'],
        solution: 'Selvinnsikt er første steg mot forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den anbefalte strukturen for en presentasjon?',
        options: [
          'Innledning - hoveddel - avslutning',
          'Avslutning - hoveddel - innledning',
          'Hoveddel - innledning - avslutning',
          'Innledning - avslutning - hoveddel',
        ],
        answer: 0,
        solution: 'En god presentasjon følger den klassiske strukturen: innledning (fang oppmerksomheten), hoveddel (hovedpoenger), avslutning (oppsummering og konklusjon).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et kjennetegn på aktiv lytting?',
        options: [
          'Å stille oppfølgingsspørsmål',
          'Å tenke på hva du selv skal si neste gang',
          'Å avbryte når du er uenig',
          'Å se ned i notatene mens den andre snakker',
        ],
        answer: 0,
        solution: 'Aktiv lytting innebærer å vise at du lytter gjennom blikk, nikk og oppfølgingsspørsmål. Det handler om å forstå den andre, ikke bare vente på tur.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn en TED Talk (eller lignende foredrag) på nett og analyser presentasjonen.',
        subTasks: [
          { label: 'a', task: 'Beskriv innledningen. Hvordan fanger taleren oppmerksomheten?', solution: 'Gode TED Talks starter ofte med en personlig historie, et overraskende faktum eller et provoserende spørsmål.' },
          { label: 'b', task: 'Vurder strukturen. Er presentasjonen logisk oppbygd?', solution: 'Se om hoveddelen har tydelige hovedpunkter og om det er en rød tråd gjennom presentasjonen.' },
          { label: 'c', task: 'Analyser fremføringsteknikken: stemmebruk, kroppsspråk, bruk av hjelpemidler.', solution: 'Vurder øyekontakt, stemmevariasjon, pauser, bevegelse og bruk av visuelle hjelpemidler.' },
          { label: 'd', task: 'Gi en samlet vurdering: Hva fungerer godt, og hva kunne vært bedre?', solution: 'Gi en begrunnet vurdering basert på kriteriene fra kapittelet.' },
        ],
        hints: ['Velg en TED Talk om et tema som interesserer deg', 'Se den gjerne to ganger - en gang for innhold, en gang for teknikk'],
        solution: 'Analysen skal vise at du kan bruke presentasjonskriterier fra kapittelet til å vurdere andres muntlige fremføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rollespill: Forbered og presenter motstridende argumenter i en debatt.',
        subTasks: [
          { label: 'a', task: 'Velg et tema der det finnes tydelige for- og mot-argumenter.', solution: 'Velg et aktuelt og engasjerende tema, f.eks. skoleuniform, stemmerett fra 16 år, eller obligatorisk sidetall i norsk.' },
          { label: 'b', task: 'Forbered argumenter for den ene siden (2-3 minutter).', solution: 'Bruk etos, patos og logos bevisst i argumentasjonen.' },
          { label: 'c', task: 'Bytt side og forbered argumenter for den andre siden.', solution: 'Å argumentere for noe du ikke nødvendigvis mener, trener argumentasjonsevnen.' },
          { label: 'd', task: 'Reflekter: Hva lærte du av å argumentere for begge sider?', solution: 'Refleksjonen bør vise innsikt i hvordan perspektiv påvirker argumentasjon.' },
        ],
        hints: ['Bruk retoriske virkemidler bevisst', 'Tenk på hvem mottakeren er'],
        solution: 'Øvelsen trener evnen til å se en sak fra flere sider og å argumentere overbevisende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Planlegg og gjennomfør en paneldebatt i klassen.',
        subTasks: [
          { label: 'a', task: 'Velg et aktuelt og engasjerende tema.', solution: 'Temaet bør ha tydelige uenigheter og være relevant for elevene.' },
          { label: 'b', task: 'Fordel roller: ordstyrer, paneldeltakere (minst 3), publikum.', solution: 'Paneldeltakerne bør representere ulike synspunkter.' },
          { label: 'c', task: 'Forbered argumenter og spørsmål.', solution: 'Hver paneldeltaker bør ha 2-3 forberedte hovedargumenter.' },
          { label: 'd', task: 'Gjennomfør debatten (15-20 minutter).', solution: 'Ordstyreren sørger for at alle slipper til og at diskusjonen holder seg saklig.' },
          { label: 'e', task: 'Evaluer debatten som klasse.', solution: 'Vurder argumentasjon, lytting, struktur og samtaleklima.' },
        ],
        hints: ['Ordstyreren bør forberede åpningsspørsmål', 'Sett tydelige regler for taletid og respekt'],
        solution: 'Paneldebatten trener muntlige ferdigheter i en strukturert og demokratisk ramme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et reflekterende essay (500-700 ord) om muntlig kommunikasjon i demokratiet. Drøft hvorfor evnen til å uttrykke seg muntlig, lytte og delta i debatt er viktig for demokratisk deltakelse.',
        hints: ['Trekk inn eksempler fra politikk, skole og hverdagsliv', 'Drøft hva som skjer når folk ikke får eller tar ordet', 'Reflekter over din egen rolle som muntlig deltaker', 'Bruk fagbegreper fra kapittelet'],
        solution: 'Essayet skal vise refleksjon over sammenhengen mellom muntlige ferdigheter og demokratisk deltakelse, med personlige og samfunnsmessige perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-5-1-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **1.1 Retorikk og argumentasjon** – Bruk retoriske virkemidler i presentasjoner
- **1.3 Debattinnlegg og meningsytring** – Uttrykk meninger skriftlig og muntlig
- **5.6 Respons og tilbakemelding** – Gi og motta tilbakemelding i muntlige situasjoner`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Kreativ skriving
// ============================================================================

export const CHAPTER_NORSK_VG1_5_2: TextbookChapter = {
  id: 'norsk-vg1-5-2',
  courseId: 'norsk-vg1',
  chapterNumber: '5.2',
  title: 'Kreativ skriving',
  description: 'Utvikle ferdigheter i kreativ og skjønnlitterær skriving.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive kreative tekster med bevisst bruk av litterære virkemidler',
  ],
  content: [
    {
      id: 'norsk-vg1-5-2-intro',
      type: 'text',
      content: `## Kreativ skriving

Kreativ skriving handler om å uttrykke deg selv gjennom fortelling og fiksjon. Det kan være noveller, kortprosa, dikt eller andre skjønnlitterære sjangre.

**Hvorfor skrive kreativt?**
- Utvikler språklig bevissthet og ordforråd
- Gir rom for å utforske tanker og følelser
- Øker forståelse for litterære tekster
- Skaper glede og mening

**Skriving som prosess:**
1. Idefase - finn inspirasjon
2. Planlegging - strukturer teksten
3. Utkast - skriv uten å sensurere
4. Revisjon - forbedre og omarbeid
5. Korrektur - rett feil`,
    },
    {
      id: 'norsk-vg1-5-2-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Synsvinkel** | Perspektivet historien fortelles fra |
| **Jeg-forteller** | Fortelleren er en karakter i historien |
| **Allvitende forteller** | Fortelleren vet alt om alle karakterer |
| **Miljøskildring** | Beskrivelse av hvor og når handlingen foregår |
| **Personskildring** | Beskrivelse av karakterers utseende og oppførsel |
| **Dialog** | Samtale mellom karakterer i teksten |
| **Show, don't tell** | Å vise gjennom handling i stedet for å fortelle |
| **Spenningskurve** | Handlingens forløp fra start til slutt |`,
    },
    {
      id: 'norsk-vg1-5-2-image-skriveprosess',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-2-skriveprosess.png',
      alt: 'Skriveprosessens fem faser: idefase, planlegging, utkast, revisjon og korrektur',
      caption: 'Skriveprosessen - fra ide til ferdig tekst gjennom fem faser.',
    },
    {
      id: 'norsk-vg1-5-2-image-idemyldring',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-2-idemyldring.png',
      alt: 'Teknikker for idemyldring og kreativ inspirasjon',
      caption: 'Idemyldring - ulike teknikker for a finne inspirasjon til kreativ skriving.',
    },
    {
      id: 'norsk-vg1-5-2-def-1',
      type: 'definition',
      title: 'Fortelleteknikk',
      content: `**Synsvinkel:**
- **Jeg-forteller:** Personlig, nær, begrenset innsikt
- **Tredjeperson begrenset:** Følger en karakter
- **Allvitende:** Vet alt om alle karakterer

**Skildringer:**
- **Miljøskildring:** Hvor og når handlingen foregår
- **Personskildring:** Hvordan karakterene ser ut og oppfører seg
- **Sanseskildring:** Syn, hørsel, lukt, smak, berøring

**Dialog:**
- Avslører karakter og relasjoner
- Driver handlingen fremover
- Varierer med replikker og tankestrek

**Indre monolog:**
- Viser karakterens tanker
- Skaper nærhet til leseren
- Kan bryte opp handling`,
    },
    {
      id: 'norsk-vg1-5-2-def-2',
      type: 'definition',
      title: 'Litterære virkemidler i kreativ skriving',
      content: `**Spenning:**
- Frempek og antydninger
- Tilbakeholdelse av informasjon
- Cliffhangers
- Tempo og rytme i språket

**Kontraster:**
- Lys og mørke
- Fortid og nåtid
- Karakterers motsetninger

**Symbolikk:**
- Gjenstander med dypere mening
- Farger som bærer betydning
- Gjentagende motiver

**Språklig stil:**
- Korte setninger: Spenning, tempo
- Lange setninger: Refleksjon, skildring
- Billedspråk: Skaper stemning`,
    },
    {
      id: 'norsk-vg1-5-2-example-0',
      type: 'example',
      title: 'Eksempel: Show, don\'t tell - å vise i stedet for å fortelle',
      problem: `En elev har skrevet: "Per var sint."

Denne setningen forteller leseren at Per er sint, men viser det ikke. Hvordan kan vi skrive om dette så leseren opplever sinnet?`,
      solution: `**Fra "tell" til "show":**

**Versjon 1 - Telling (svakt):**
"Per var sint."

**Versjon 2 - Showing (sterkt):**
"Per smalt døren igjen så vinduene ristet. Han rev av seg jakken og kastet den på gulvet. Hendene skalv da han presset dem mot bordplaten."

---

**Hva er forskjellen?**

**Telling:**
- Forteller leseren hva han skal føle/tenke
- Leseren er passiv mottaker
- Abstrakt og flatt

**Showing:**
- Viser gjennom handling, kropp, dialog
- Leseren tolker selv og blir aktiv
- Konkret og levende

---

**Flere eksempler:**

| Tell (svakt) | Show (sterkt) |
|--------------|---------------|
| "Hun var redd." | "Hjertet hamret. Hun presset ryggen mot veggen og holdt pusten." |
| "Det var kaldt." | "Pusten sto som hvit røyk foran munnen. Han gjemte hendene i armhulene." |
| "Han elsket henne." | "Han fant seg selv i å smile hver gang hun lo. Telefonen var alltid i hånden, i tilfelle hun skulle sende melding." |
| "Rommet var rotete." | "Klær lå strødd over stolen, tomme kaffekrus dekket skrivebordet, og en haug med aviser sperret veien til sengen." |

---

**Tips for å "show":**

1. **Bruk sansene:** Hva ser, hører, lukter, kjenner karakteren?
2. **Beskriv kroppen:** Hendene skalv. Magen knøt seg. Skuldrene sank.
3. **Vis gjennom handling:** Hva gjør karakteren? Handlinger avslører følelser.
4. **Bruk dialog:** Hva sier karakteren, og hvordan sier de det?

**Merk:** Ikke alt trenger å "showes". Noen ganger er "telling" effektivt for å komme videre i historien. Kunsten er å vite når du skal vise og når du skal fortelle.`,
    },
    {
      id: 'norsk-vg1-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Åpninger som fenger',
      problem: `Skriv tre ulike åpninger til en novelle om en person som finner et brev.`,
      solution: `**Åpning 1 - In medias res:**
"Hendene skalv da jeg brettet ut det gulnede papiret. Etter tjue år visste jeg endelig sannheten."

**Åpning 2 - Miljøskildring:**
"Det gamle huset hadde stått tomt siden bestemors død. Støvet lå tykt over møblene, og lukten av tid trengte inn i lungene mine."

**Åpning 3 - Dialog:**
"'Du burde aldri ha åpnet den skuffen,' sa mora mi. Stemmen hennes var fremmed, hard."

**Analyse:**
- Åpning 1 skaper umiddelbar spenning og nysgjerrighet
- Åpning 2 setter stemning og kontekst
- Åpning 3 antyder konflikt og hemmeligheter

Alle tre vekker leserens interesse på ulike måter.`,
    },
    {
      id: 'norsk-vg1-5-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Knut Hamsun – Åpningen av «Sult» (1890)',
      content: [
        {
          id: 'norsk-vg1-5-2-primaertekst-1-text',
          type: 'text',
          content: TEKST_HAMSUN_SULT_AAPNING,
        },
      ],
    },
    {
      id: 'norsk-vg1-5-2-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Jonas Lie – Dialogutdrag fra «Familien paa Gilje» (1883)',
      content: [
        {
          id: 'norsk-vg1-5-2-primaertekst-2-text',
          type: 'text',
          content: TEKST_LIE_FAMILIEN_PAA_GILJE_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv tre ulike versjoner av samme scene fra ulike synsvinkler:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv scenen fra jeg-perspektiv.',
            solution: 'Jeg-forteller gir nærhet og begrenset innsikt.',
          },
          {
            label: 'b',
            task: 'Skriv samme scene fra tredjeperson begrenset.',
            solution: 'Vi følger en karakter, men med litt mer distanse.',
          },
          {
            label: 'c',
            task: 'Skriv scenen fra allvitende perspektiv.',
            solution: 'Fortelleren kan vise flere karakterers tanker.',
          },
        ],
        hints: ['Velg en enkel scene med to personer', 'Se hvordan informasjonen endres med synsvinkelen'],
        solution: 'Ulike synsvinkler gir ulike effekter og påvirker hva leseren får vite.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en miljøskildring (100-150 ord) som skaper en bestemt stemning uten å si hva stemningen er.',
        hints: ['Bruk sanseskildringer', 'La detaljer formidle følelsen', 'Vis, ikke fortell'],
        solution: 'En god miljøskildring bruker konkrete detaljer for å skape stemning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en dialog (10-15 replikker) mellom to personer der konflikten kommer frem uten at noen sier direkte hva den handler om.',
        hints: ['La det ligge mening mellom linjene', 'Bruk kroppsspråk og pauser', 'Vis spenningen gjennom ordvalg'],
        solution: 'God dialog avslører mer enn den sier direkte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort novelle (400-500 ord) med følgende krav: minst tre litterære virkemidler, tydelig spenningskurve, overraskende avslutning.',
        hints: ['Planlegg strukturen først', 'Marker virkemidlene du bruker', 'Les teksten høyt for å sjekke flyten'],
        solution: 'Novellen skal vise bevisst bruk av virkemidler og god struktur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tilbakemelding på en medelevs tekst og revider din egen basert på tilbakemelding.',
        hints: ['Fokuser på både styrker og forbedringsområder', 'Vær konkret og konstruktiv', 'Still spørsmål til teksten'],
        solution: 'Revisjon og respons er viktige deler av skriveprosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kalles det når en fortelling starter midt i handlingen?',
        options: [
          'In medias res',
          'Kronologisk fortelling',
          'Analepse',
          'Prolepse',
        ],
        answer: 0,
        solution: 'In medias res (latin: «midt i tingene») betyr at fortellingen starter midt i handlingen, uten tradisjonell innledning.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er besjeling?',
        options: [
          'Å gi døde ting eller naturen menneskelige egenskaper',
          'En skjult sammenligning uten «som»',
          'En overdrivelse for effekt',
          'Å gjenta et ord eller uttrykk',
        ],
        answer: 0,
        solution: 'Besjeling (personifikasjon) er et virkemiddel der døde ting, naturen eller abstrakte begreper får menneskelige egenskaper. Eksempel: «Vinden sang.»',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les åpningen av Hamsuns «Sult» ovenfor. Skriv den om i en annen synsvinkel.',
        subTasks: [
          { label: 'a', task: 'Skriv om åpningen fra tredjeperson begrenset perspektiv.', solution: 'Behold stemningen og detaljene, men endre «jeg» til «han» og tilpass fortellerstemmen.' },
          { label: 'b', task: 'Sammenlign: Hva mister vi, og hva vinner vi, ved å endre synsvinkel?', solution: 'Jeg-perspektivet gir umiddelbar nærhet og intensitet. Tredjeperson gir mer distanse, men kan gi et bredere blikk.' },
        ],
        hints: ['Hamsun bruker jeg-forteller for å skape en intens, personlig opplevelse', 'Tenk på hva som endres når vi ikke er «inne i hodet» til fortelleren'],
        solution: 'Øvelsen viser hvordan synsvinkel påvirker leseropplevelsen og nærhet til karakteren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en scene (200-300 ord) med dialog, inspirert av Jonas Lies dialogstil i utdraget ovenfor.',
        hints: ['Studer Lies måte å bruke dialog på', 'La dialogen avsløre noe om karakterene og deres relasjoner', 'Bruk miljøskildring mellom replikkene', 'Tenk på hva som ikke blir sagt'],
        solution: 'Scenen skal vise bevisst bruk av dialog som virkemiddel, inspirert av Lies realistiske stil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en komplett novelle (500-700 ord) der du bevisst bruker minst fem litterære virkemidler. Skriv en kort refleksjonstekst (100 ord) der du forklarer hvilke virkemidler du har brukt og hvorfor.',
        hints: ['Planlegg spenningskurven før du skriver', 'Velg virkemidler som støtter tema og stemning', 'Bruk «vis, ikke fortell»-prinsippet', 'Revider teksten minst en gang'],
        solution: 'Novellen og refleksjonsteksten skal vise bevisst og gjennomtenkt bruk av litterære virkemidler i en sammenhengende tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Eksperimentell skriving: Skriv den samme scenen (en person som mottar en viktig nyhet) i tre ulike litterære stiler. Hver versjon skal være 150-250 ord.',
        subTasks: [
          { label: 'a', task: 'Realistisk stil (inspirert av Kielland eller Lie): Nøktern, detaljert, ytre beskrivelse.', solution: 'Realistisk stil fokuserer på observerbare detaljer, nøkternt språk og sosial kontekst.' },
          { label: 'b', task: 'Modernistisk stil (inspirert av Hamsun): Indre monolog, fragmentert, subjektivt.', solution: 'Modernistisk stil bruker strøm av bevissthet, brudd og subjektive sanseinntrykk.' },
          { label: 'c', task: 'Romantisk stil (inspirert av Wergeland/Bjørnson): Følelsesladet, naturbilder, poetisk språk.', solution: 'Romantisk stil bruker sterke følelser, naturmetaforer og et opphøyet språk.' },
        ],
        hints: ['Les eksemplene fra primærtekstene for inspirasjon', 'Overdriv gjerne stilene litt for å gjøre forskjellene tydelige', 'Skriv en kort refleksjon om hva som endres mellom versjonene'],
        solution: 'Øvelsen trener evnen til å tilpasse skrivestil og viser forståelse for ulike litterære tradisjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-2-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **2.1 Novelleanalyse** – Lær virkemidler gjennom å lese noveller
- **2.2 Lyrikk og diktanalyse** – Inspirasjonskilder til egne dikt
- **2.5 Litterære virkemidler** – Fordyp deg i virkemidler du kan bruke
- **5.4 Skriveprosess og revisjon** – Utvikle tekstene dine gjennom revisjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 1
// ============================================================================

export const NORSK_VG1_CHAPTERS_DEL1: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_1_1,
  CHAPTER_NORSK_VG1_1_2,
  CHAPTER_NORSK_VG1_1_4,
  CHAPTER_NORSK_VG1_1_5,
  CHAPTER_NORSK_VG1_2_1,
  CHAPTER_NORSK_VG1_2_2,
  CHAPTER_NORSK_VG1_2_4,
  CHAPTER_NORSK_VG1_2_5,
  CHAPTER_NORSK_VG1_2_6,
  CHAPTER_NORSK_VG1_5_1,
  CHAPTER_NORSK_VG1_5_2,
];
