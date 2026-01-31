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
      },
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
      },
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
  title: 'Skjønnlitteratur - noveller og kortprosa',
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
      id: 'norsk-vg1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-1',
        number: '1',
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
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-2',
        number: '2',
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
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les en novelle og skriv en analyse (300-400 ord) med SVIRP-modellen.',
        hints: ['Velg en novelle fra pensum eller fra et novellehefte', 'Dekk alle punktene i modellen'],
        solution: 'Analysen skal vise forståelse for sjanger, virkemidler, innhold, kontekst og gi en egen tolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Sammenlign to noveller med samme tema (f.eks. kjærlighet eller død). Hvordan behandler de temaet ulikt?',
        hints: ['Se på virkemidler, synsvinkel og avslutning', 'Vurder også historisk kontekst'],
        solution: 'Sammenligningen bør vise likheter og forskjeller i form og innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Skriv åpningen til en egen novelle (150 ord) som starter in medias res.',
        hints: ['Start midt i en spennende scene', 'La leseren lure på hva som skjer'],
        solution: 'Åpningen skal fange leserens interesse og starte midt i handlingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-6',
        number: '6',
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
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-7',
        number: '7',
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
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-8',
        number: '8',
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
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-9',
        number: '9',
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
        task: 'Sammenlign «Karen» av Kielland og «Karens jul» av Skram. To noveller om kvinner ved navn Karen - men fra ulike forfattere.',
        subTasks: [
          { label: 'a', task: 'Sammenlign hovedpersonene.', solution: 'Begge heter Karen og er kvinner i vanskelige situasjoner, men omstendighetene og forfatternes tilnærming er ulik.' },
          { label: 'b', task: 'Sammenlign virkemidlene.', solution: 'Kielland bruker ironi og kontrastbruk, Skram bruker mer naturalistisk skildring og psykologisk innsikt.' },
          { label: 'c', task: 'Sammenlign tema og budskap.', solution: 'Begge handler om sosial urettferdighet, men fra ulike vinkler og med ulik grad av håp.' },
        ],
        solution: 'Sammenligningen bør vise likheter og forskjeller i to realistiske noveller med beslektet tematikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord) der du sammenligner en realistisk novelle fra 1800-tallet (f.eks. Kielland, Skram eller Lie) med en moderne novelle. Drøft hvordan novellesjangeren har endret seg.',
        hints: ['Velg en moderne novelle fra pensum eller fra en novellesamling', 'Se på form, virkemidler, tema og språk', 'Drøft hva som er likt og ulikt, og mulige forklaringer'],
        solution: 'Essayet skal vise evne til å sammenligne tekster fra ulike perioder og reflektere over sjangermessig utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en egen novelle (500-700 ord) inspirert av Kielland eller Bjørnsons stil. Novellen skal ha et tydelig samfunnskritisk tema.',
        hints: ['Studer forfatternes stil og virkemidler først', 'Velg et aktuelt tema med samfunnskritisk brodd', 'Bruk kontrastbruk, ironi eller symbolikk bevisst', 'Ha en tydelig spenningskurve'],
        solution: 'Novellen skal vise bevisst bruk av virkemidler inspirert av realistiske forfattere, med et tydelig samfunnskritisk budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.1: Muntlig kommunikasjon
// ============================================================================

export const CHAPTER_NORSK_VG1_3_1: TextbookChapter = {
  id: 'norsk-vg1-3-1',
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
      id: 'norsk-vg1-3-1-intro',
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
      id: 'norsk-vg1-3-1-def-1',
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
      id: 'norsk-vg1-3-1-def-2',
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
      id: 'norsk-vg1-3-1-example-1',
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
      id: 'norsk-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-2',
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
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør en diskusjon med en medelev om et aktuelt tema. Fokuser på aktiv lytting og saklig argumentasjon.',
        hints: ['Velg et tema dere er uenige om', 'Fokuser på å forstå motpartens synspunkt', 'Oppsummer det den andre sier før du svarer'],
        solution: 'God diskusjon krever både å uttrykke egne synspunkter og å lytte til andres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hold presentasjonen du planla for klassen eller en gruppe. Be om tilbakemelding på struktur og fremføring.',
        hints: ['Ta opp presentasjonen om mulig', 'Be om konkret tilbakemelding', 'Reflekter over hva du kan forbedre'],
        solution: 'Øvelse gjør mester - jo mer du presenterer, jo bedre blir du.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over dine egne muntlige ferdigheter. Hva er dine styrker? Hva ønsker du å forbedre?',
        hints: ['Tenk på tidligere presentasjoner', 'Vurder både forberedelse og fremføring', 'Sett deg konkrete mål'],
        solution: 'Selvinnsikt er første steg mot forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-6',
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
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-7',
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
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-8',
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
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-9',
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
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-10',
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
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et reflekterende essay (500-700 ord) om muntlig kommunikasjon i demokratiet. Drøft hvorfor evnen til å uttrykke seg muntlig, lytte og delta i debatt er viktig for demokratisk deltakelse.',
        hints: ['Trekk inn eksempler fra politikk, skole og hverdagsliv', 'Drøft hva som skjer når folk ikke får eller tar ordet', 'Reflekter over din egen rolle som muntlig deltaker', 'Bruk fagbegreper fra kapittelet'],
        solution: 'Essayet skal vise refleksjon over sammenhengen mellom muntlige ferdigheter og demokratisk deltakelse, med personlige og samfunnsmessige perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Kreativ skriving
// ============================================================================

export const CHAPTER_NORSK_VG1_3_2: TextbookChapter = {
  id: 'norsk-vg1-3-2',
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
      id: 'norsk-vg1-3-2-intro',
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
      id: 'norsk-vg1-3-2-def-1',
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
      id: 'norsk-vg1-3-2-def-2',
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
      id: 'norsk-vg1-3-2-example-1',
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
      id: 'norsk-vg1-3-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Knut Hamsun – Åpningen av «Sult» (1890)',
      content: [
        {
          id: 'norsk-vg1-3-2-primaertekst-1-text',
          type: 'text',
          content: TEKST_HAMSUN_SULT_AAPNING,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-2-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Jonas Lie – Dialogutdrag fra «Familien paa Gilje» (1883)',
      content: [
        {
          id: 'norsk-vg1-3-2-primaertekst-2-text',
          type: 'text',
          content: TEKST_LIE_FAMILIEN_PAA_GILJE_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en miljøskildring (100-150 ord) som skaper en bestemt stemning uten å si hva stemningen er.',
        hints: ['Bruk sanseskildringer', 'La detaljer formidle følelsen', 'Vis, ikke fortell'],
        solution: 'En god miljøskildring bruker konkrete detaljer for å skape stemning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en dialog (10-15 replikker) mellom to personer der konflikten kommer frem uten at noen sier direkte hva den handler om.',
        hints: ['La det ligge mening mellom linjene', 'Bruk kroppsspråk og pauser', 'Vis spenningen gjennom ordvalg'],
        solution: 'God dialog avslører mer enn den sier direkte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort novelle (400-500 ord) med følgende krav: minst tre litterære virkemidler, tydelig spenningskurve, overraskende avslutning.',
        hints: ['Planlegg strukturen først', 'Marker virkemidlene du bruker', 'Les teksten høyt for å sjekke flyten'],
        solution: 'Novellen skal vise bevisst bruk av virkemidler og god struktur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tilbakemelding på en medelevs tekst og revider din egen basert på tilbakemelding.',
        hints: ['Fokuser på både styrker og forbedringsområder', 'Vær konkret og konstruktiv', 'Still spørsmål til teksten'],
        solution: 'Revisjon og respons er viktige deler av skriveprosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-6',
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
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-7',
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
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-8',
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
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en scene (200-300 ord) med dialog, inspirert av Jonas Lies dialogstil i utdraget ovenfor.',
        hints: ['Studer Lies måte å bruke dialog på', 'La dialogen avsløre noe om karakterene og deres relasjoner', 'Bruk miljøskildring mellom replikkene', 'Tenk på hva som ikke blir sagt'],
        solution: 'Scenen skal vise bevisst bruk av dialog som virkemiddel, inspirert av Lies realistiske stil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en komplett novelle (500-700 ord) der du bevisst bruker minst fem litterære virkemidler. Skriv en kort refleksjonstekst (100 ord) der du forklarer hvilke virkemidler du har brukt og hvorfor.',
        hints: ['Planlegg spenningskurven før du skriver', 'Velg virkemidler som støtter tema og stemning', 'Bruk «vis, ikke fortell»-prinsippet', 'Revider teksten minst en gang'],
        solution: 'Novellen og refleksjonsteksten skal vise bevisst og gjennomtenkt bruk av litterære virkemidler i en sammenhengende tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-11',
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
      },
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
  CHAPTER_NORSK_VG1_2_1,
  CHAPTER_NORSK_VG1_2_2,
  CHAPTER_NORSK_VG1_3_1,
  CHAPTER_NORSK_VG1_3_2,
];
