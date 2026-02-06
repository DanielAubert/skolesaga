/**
 * Norsk VG1 - Del 4: Kapittel 5.4, 6.1–6.2, 7.1–7.3
 * Skriveprosess, sammensatte tekster, film, samisk språk og kultur
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_ISAK_SABA_SAMI_SOGA_LAVLLA,
} from './textbook-content-norsk-vg1-tekster';

// ============================================================================
// KAPITTEL 6.1: Sammensatte tekster
// ============================================================================

export const CHAPTER_NORSK_VG1_6_1: TextbookChapter = {
  id: 'norsk-vg1-6-1',
  courseId: 'norsk-vg1',
  chapterNumber: '6.1',
  title: 'Sammensatte tekster',
  description: 'Lær å analysere multimodale tekster som kombinerer ulike uttrykksformer som tekst, bilde og lyd.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
    'bruke fagbegreper i analyse av tekster',
  ],
  content: [
    {
      id: 'norsk-vg1-6-1-intro',
      type: 'text',
      content: `## Hva er sammensatte tekster?

I dag møter vi sjelden tekster som bare består av skrift. De fleste tekstene vi leser, ser og hører kombinerer flere uttrykksformer:

**Sammensatte/multimodale tekster:**
- Kombinerer to eller flere modaliteter
- Eksempler: nettsider, reklame, film, sosiale medier, lærebøker
- Modalitetene virker sammen og forsterker hverandre

**Modaliteter (uttrykksformer):**
- **Skrift:** Tekst, typografi, layout
- **Bilde:** Fotografier, illustrasjoner, grafikk
- **Lyd:** Tale, musikk, lydeffekter
- **Levende bilder:** Video, animasjon
- **Design:** Farger, komposisjon, navigasjon

**Hvorfor er dette viktig?**
- Vi omgis av sammensatte tekster
- For å forstå hvordan vi påvirkes
- For å kunne lage gode tekster selv
- Kritisk medieforståelse

**Sammensatte tekster krever at vi leser på flere plan samtidig - vi må se hvordan de ulike delene virker sammen for å skape mening.**`,
    },
    {
      id: 'norsk-vg1-6-1-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Sammensatt tekst** | Tekst som kombinerer flere uttrykksformer |
| **Modalitet** | En uttrykksform (tekst, bilde, lyd, video) |
| **Multimodal** | Som bruker flere modaliteter |
| **Forankring** | Tekst som forklarer/begrenser bildets mening |
| **Avløsning** | Tekst og bilde utfyller hverandre |
| **Layout** | Visuell organisering av elementer |
| **Typografi** | Utforming av skrift (font, størrelse) |
| **Blikkfang** | Element som trekker blikket |`,
    },
    {
      id: 'norsk-vg1-6-1-def-1',
      type: 'definition',
      title: 'Modaliteter og samspill',
      content: `**De viktigste modalitetene:**

**Verbaltekst (skrift):**
- Overskrifter og brødtekst
- Typografi (skrifttype, størrelse, farge)
- Plassering på siden/skjermen

**Visuelt (bilde):**
- Fotografier vs. illustrasjoner
- Fargebruk og kontraster
- Bildeutsnitt og komposisjon
- Ikoniske symboler

**Auditivt (lyd):**
- Tale og stemmebruk
- Musikk og lydeffekter
- Stillhet som virkemiddel

**Layout og design:**
- Komposisjon
- Hvitrom
- Blikkfang
- Leseretning

**Samspill mellom modaliteter:**

**Forankring:** Tekst forklarer bildet, innsnevrer tolkningen
**Avløsning:** Bilde og tekst utfyller hverandre med ulik informasjon
**Kontrast:** Modalitetene står i motsetning til hverandre (ofte ironisk)
**Forsterkning:** Modalitetene gjentar samme budskap for større effekt`,
    },
    {
      id: 'norsk-vg1-6-1-image-multimodal',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-6-1-multimodal.png',
      alt: 'Diagram som viser de tre typene samspill mellom bilde og tekst: forankring, avløsning og motstrid',
      caption: 'De tre hovedtypene samspill mellom modaliteter: forankring (tekst forklarer bildet), avløsning (bilde og tekst utfyller hverandre) og motstrid/kontrast (modalitetene står i motsetning).',
    },
    {
      id: 'norsk-vg1-6-1-def-2',
      type: 'definition',
      title: 'Analyse av reklame',
      content: `**Reklame som sammensatt tekst**

Reklame er et godt eksempel på sammensatte tekster fordi de bevisst bruker flere modaliteter for å påvirke.

**Analysemodell for reklame:**

**1. Beskrivelse:**
- Hva vises? (bilde, tekst, logo)
- Hva er produktet/tjenesten?
- Hvem er målgruppen?

**2. Visuell analyse:**
- Farger: Hvilke assosiasjoner skaper de?
- Komposisjon: Hva trekker blikket først?
- Mennesker: Hvem er avbildet? Hvordan fremstilles de?
- Setting: Hvor foregår det?

**3. Verbal analyse:**
- Slagord: Hva sier det? Hvordan?
- Tone: Saklig, humoristisk, følelsesladet?
- Språklige virkemidler: Rim, ordspill, imperativ?

**4. Samspill:**
- Hvordan virker bilde og tekst sammen?
- Forsterker, forankrer eller kontrasterer de?

**5. Retorisk analyse:**
- Etos: Hvordan skaper avsenderen troverdighet?
- Patos: Hvilke følelser appelleres det til?
- Logos: Brukes logiske argumenter?

**6. Vurdering:**
- Er reklamen effektiv? Hvorfor/hvorfor ikke?
- Hvem kan føle seg inkludert/ekskludert?`,
    },
    {
      id: 'norsk-vg1-6-1-image-reklame-1',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-6-1-reklame-1.png',
      alt: 'Fiktiv norsk reklame for bærekraftig klesmerk med teksten "Kle deg grønt"',
      caption: 'Eksempel på reklame som bruker miljøbevissthet som appellform. Analyser hvilke virkemidler som brukes.',
    },
    {
      id: 'norsk-vg1-6-1-image-reklame-2',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-6-1-reklame-2.png',
      alt: 'Fiktiv norsk reklame for lokal mat med teksten "Smak av Norge"',
      caption: 'Eksempel på reklame som appellerer til nasjonale verdier og lokalprodusert mat. Hvilke følelser forsøker reklamen å vekke?',
    },
    {
      id: 'norsk-vg1-6-1-def-3',
      type: 'definition',
      title: 'Analyse av nettaviser og sosiale medier',
      content: `**Nettaviser som sammensatte tekster**

Nettaviser er komplekse sammensatte tekster med mange elementer:

**Elementer:**
- Overskrifter (ofte oppsiktsvekkende)
- Ingress og brødtekst
- Bilder og video
- Faktabokser
- Lenker og relaterte saker
- Kommentarfelt
- Reklame

**Analysepunkter:**
- Hvordan fanger forsiden oppmerksomhet?
- Hvordan virker bilde og tekst sammen?
- Hvordan styres leseren gjennom teksten?
- Hva er forholdet mellom journalistikk og reklame?

**Sosiale medier som sammensatte tekster**

**Elementer:**
- Tekst, bilde, video
- Emojier og hashtags
- Lenker og delinger
- Kommentarer og reaksjoner
- Profil og identitet

**Analysepunkter:**
- Hvordan presenterer avsenderen seg?
- Hvordan kombineres tekst og bilde?
- Hvem er målgruppen?
- Hva er formålet? (informere, underholde, påvirke, selge)
- Hvordan inviteres til interaksjon?

**Kritisk lesing av digitale tekster krever bevissthet om algoritmer, viralitet og hvordan plattformenes design påvirker innholdet.**`,
    },
    {
      id: 'norsk-vg1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva som menes med sammensatte/multimodale tekster.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en modalitet?',
            solution: 'En modalitet er en uttrykksform, som skrift, bilde, lyd eller video.',
          },
          {
            label: 'b',
            task: 'Gi tre eksempler på sammensatte tekster.',
            solution: 'Eksempler: nettsider, reklame, film, musikkvideoer, lærebøker, sosiale medier-poster.',
          },
          {
            label: 'c',
            task: 'Hva betyr det at modaliteter "virker sammen"?',
            solution: 'Det betyr at de ulike uttrykksformene skaper mening sammen, på måter de ikke kunne gjort alene.',
          },
        ],
        solution: 'Forståelse av sammensatte tekster er viktig for kritisk lesing i dagens mediesamfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-6',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke av disse er eksempler på modaliteter i en sammensatt tekst?',
        options: [
          { id: 'a', text: 'Skrift, bilde, lyd og levende bilder', isCorrect: true },
          { id: 'b', text: 'Bare skrift og bilde', isCorrect: false },
          { id: 'c', text: 'Bare lyd og video', isCorrect: false },
          { id: 'd', text: 'Bare design og layout', isCorrect: false },
        ],
        solution: 'En sammensatt tekst kan kombinere mange ulike modaliteter: skrift, bilde, lyd, levende bilder og design.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-7',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at en tekst er multimodal?',
        options: [
          { id: 'a', text: 'At teksten er skrevet på flere språk', isCorrect: false },
          { id: 'b', text: 'At teksten kombinerer to eller flere uttrykksformer (modaliteter)', isCorrect: true },
          { id: 'c', text: 'At teksten er publisert på flere plattformer', isCorrect: false },
          { id: 'd', text: 'At teksten har flere forfattere', isCorrect: false },
        ],
        solution: 'Multimodal betyr at teksten bruker flere modaliteter (uttrykksformer) som virker sammen for å skape mening.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av reklame',
      problem: 'Analyser denne tenkte reklamen for en sykkel.',
      solution: `**Beskrivelse av reklamen:**
Bildet viser en person som sykler gjennom en grønn skog på en solskinnsdag. Teksten sier: "Frihet på to hjul. Oppdag naturen med [Sykkelmerke]."

**Visuell analyse:**

**Farger:**
- Grønt (natur, helse, miljø)
- Blått (himmel, frihet)
- Sollys (energi, positivitet)

**Komposisjon:**
- Syklisten i bevegelse mot høyre (fremover)
- Naturen dominerer bildet
- Sykkelen er synlig, men ikke påtrengende

**Mennesker:**
- Person i aktivt tøy
- Ser glad og fri ut
- Kan representere mange aldersgrupper

**Verbal analyse:**

**"Frihet på to hjul":**
- Metafor: sykkelen = frihet
- Kort og slagkraftig
- Appellerer til verdier (frihet)

**"Oppdag naturen":**
- Imperativ - oppfordring til handling
- Naturen som noe positivt
- Antyder eventyr og nye opplevelser

**Retorisk analyse:**
- **Etos:** Bildet viser kvalitetssykkel i bruk
- **Patos:** Frihetsfølelse, naturglede, helse
- **Logos:** Implisitt: sykkel = bra for deg og miljøet

**Samspill:**
Bilde og tekst forsterker hverandre - begge kommuniserer frihet, natur og aktivitet.`,
    },
    {
      id: 'norsk-vg1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn en reklame (på nett, i et blad, eller på TV) og analyser den.',
        hints: ['Beskriv først hva du ser', 'Analyser visuelt og verbalt', 'Vurder samspillet mellom modalitetene', 'Hvem er målgruppen?'],
        solution: 'Analysen bør vise evne til å bruke fagbegreper og identifisere virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-8',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn en plakat eller infografikk og analyser den som sammensatt tekst.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke modaliteter brukes (skrift, bilde, farge, layout)?',
            solution: 'Beskriv hver modalitet som er til stede og hvordan de er brukt.',
          },
          {
            label: 'b',
            task: 'Hvordan virker modalitetene sammen for å formidle budskapet?',
            solution: 'Vurder om de forsterker, forankrer eller kontrasterer hverandre.',
          },
          {
            label: 'c',
            task: 'Hva er tekstens formål og hvem er målgruppen?',
            solution: 'Identifiser formålet (informere, påvirke, selge) og hvem teksten henvender seg til.',
          },
        ],
        solution: 'Analysen bør vise evne til å identifisere modaliteter og forklare deres samspill.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-1-example-2',
      type: 'example',
      title: 'Eksempel: Analyse av nettavis-forside',
      content: `**Oppgave/Situasjon:**
Analyser hvordan modalitetene virker sammen pa forsiden til en nettavis.

**Analyse av en tenkt nettavis-forside:**

**Hovedoppslag:**
- Stort bilde av flom i en norsk by
- Overskrift: "EKSTREMVAER: Vann stiger - folk evakueres"
- Ingress: "Meteorologene varsler mer nedbor i natt"

**Visuell modalitet:**
- Dramatisk bilde med hoy fargemetning
- Blinkende "DIREKTE"-ikon oppe til hoeyre
- Rodt som signalfarger pa viktige elementer

**Verbal modalitet:**
- Store bokstaver i overskriften skaper hastefolelse
- Verb i presens ("stiger", "evakueres") gir folelse av na
- Fremtidsreferanse i ingressen ("i natt") skaper spenning

**Samspill mellom modalitetene:**
- **Forankring:** Overskriften forklarer hva bildet viser (flom)
- **Forsterkning:** Bade bilde og tekst kommuniserer dramatikk
- **Design:** Rodt og stort = viktig, farlig, klikk na!

**Vurdering:**
Forsiden bruker modalitetene bevisst for a skape engasjement og klikk. Fargene, bildeutvalget og ordvalgene forsterker hverandre og skaper en folelse av at dette er noe du ma lese med en gang.

**Kritisk refleksjon:**
Er dette journalistikk eller "clickbait"? Spor deg: Er dramatikken proporsjonal med hendelsen? Hvem tjener pa at du klikker?`,
    },
    {
      id: 'norsk-vg1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-3',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser forsiden til en nettavis.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan er forsiden organisert?',
            solution: 'Beskriv layout, plassering av hovedsaker, reklame, navigasjon.',
          },
          {
            label: 'b',
            task: 'Hva trekker blikket ditt først? Hvorfor?',
            solution: 'Identifiser blikkfang (store bilder, sterke farger, oppsiktsvekkende overskrifter).',
          },
          {
            label: 'c',
            task: 'Hvordan virker overskrifter og bilder sammen?',
            solution: 'Vurder om de forankrer, forsterker eller skaper kontrast.',
          },
        ],
        solution: 'Analysen viser forståelse for hvordan nettaviser er designet for å fange og holde oppmerksomhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-4',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en post fra et nøytralt tema på sosiale medier (f.eks. en matoppskrift, et reisebilde, eller en dyrevideo).',
        hints: ['Beskriv alle elementene', 'Hvem er avsenderen?', 'Hvem er målgruppen?', 'Hva er formålet?'],
        solution: 'Analysen bør vise forståelse for hvordan sosiale medier fungerer som sammensatte tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-5',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en enkel sammensatt tekst: en plakat for et skolearrangement.',
        hints: ['Velg et tema (konsert, idrettsdag, teater, etc.)', 'Tenk på målgruppe', 'Kombiner tekst og bilde', 'Tenk på farger, layout og typografi'],
        solution: 'Plakaten bør vise bevisst bruk av flere modaliteter som virker sammen for å kommunisere et tydelig budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en sammensatt tekst om et skolefaglig tema (f.eks. klimaendringer, demokrati eller helse).',
        hints: ['Velg minst tre modaliteter (f.eks. tekst, bilde, farger)', 'Tenk på hvem som er mottaker', 'Planlegg hvordan modalitetene skal virke sammen', 'Formatet kan være plakat, nettside-utkast eller presentasjon'],
        solution: 'Teksten bør vise bevisst bruk av flere modaliteter som forsterker hverandre og formidler budskapet effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign hvordan ulike medier formidler den samme historien.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en historie som finnes i minst to formater (f.eks. bok og film, podkast og artikkel, eller film og tegneserie).',
            solution: 'Velg en konkret historie du kjenner i flere formater.',
          },
          {
            label: 'b',
            task: 'Hvilke modaliteter bruker hvert medium, og hvilke styrker og begrensninger har de?',
            solution: 'F.eks.: Bok bruker skrift og kan gå dypt inn i tanker; film bruker bilde, lyd og bevegelse og kan vise følelser visuelt; podkast bruker stemme og lyd og skaper indre bilder.',
          },
          {
            label: 'c',
            task: 'Hvordan påvirker mediet opplevelsen av historien?',
            solution: 'Drøft hvordan valg av medium endrer hva som vektlegges, hva som er mulig å formidle, og hvordan mottakeren engasjeres.',
          },
        ],
        solution: 'Sammenligningen bør vise forståelse for at ulike medier har ulike affordanser og at valg av medium påvirker budskapet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (400-500 ord): Hvordan former sammensatte tekster vår forståelse av verden?',
        hints: [
          'Tenk på hvordan reklame, nyheter og sosiale medier bruker sammensatte tekster for å påvirke oss',
          'Bruk konkrete eksempler fra din hverdag',
          'Drøft både fordeler og ulemper med multimodale tekster',
          'Avslutt med en refleksjon om hva kritisk medieforståelse betyr',
        ],
        solution: 'Essayet bør drøfte hvordan sammensatte tekster former oppfatninger, holdninger og handlinger, og argumentere for viktigheten av kritisk mediekompetanse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-1-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 6.1

**Hovedpunkter:**
- Sammensatte/multimodale tekster kombinerer flere uttrykksformer (modaliteter) som skrift, bilde, lyd og video
- Modalitetene virker sammen gjennom forankring (tekst forklarer bildet), avløsning (tekst og bilde utfyller hverandre) eller kontrast
- Reklame, nettaviser og sosiale medier er viktige eksempler på sammensatte tekster i hverdagen

**Sentrale begreper:**
- **Modalitet**: En uttrykksform som skrift, bilde, lyd eller video
- **Forankring**: Tekst som forklarer og begrenser bildets mening
- **Avløsning**: Bilde og tekst utfyller hverandre med ulik informasjon
- **Layout**: Visuell organisering av elementer på en side/skjerm

**Tips for eksamen:**
- Bruk fagbegreper som modalitet, forankring og avløsning når du analyserer
- Beskriv først hva du ser, deretter analyser samspillet mellom modalitetene
- Drøft alltid formål og målgruppe i analysen`,
    },
    {
      id: 'norsk-vg1-6-1-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **6.2 Film som tekst** – Analyser bevegelige bilder
- **6.3 Digitale tekster og sosiale medier** – Utforsk multimodalitet i digitale medier
- **6.4 Kildekritikk og falske nyheter** – Vær kritisk til sammensatte tekster
- **2.6 Grafiske romaner og bildebøker** – Analyser tekst-bilde-samspill i litteratur`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2: Film som tekst
// ============================================================================

export const CHAPTER_NORSK_VG1_6_2: TextbookChapter = {
  id: 'norsk-vg1-6-2',
  courseId: 'norsk-vg1',
  chapterNumber: '6.2',
  title: 'Film som tekst',
  description: 'Lær å analysere film med fokus på filmspråk, virkemidler og adaptasjon av litteratur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
    'sammenligne tekster og vurdere hvordan samme tema behandles i ulike sjangrer og medier',
  ],
  content: [
    {
      id: 'norsk-vg1-6-2-intro',
      type: 'text',
      content: `## Film som fortelling

Film er en av de mektigste formene for fortelling i vår tid. Som sammensatt tekst kombinerer film mange uttrykksformer:

**Filmens modaliteter:**
- Levende bilder
- Lyd (dialog, musikk, lydeffekter)
- Tekst (undertekster, tekst i bildet)
- Skuespill og mise-en-scène

**Filmspråk:**
Film har sitt eget "språk" - et sett av konvensjoner og teknikker som brukes til å fortelle historier:

- **Kameraføring:** Vinkel, bevegelse, avstand
- **Klipping:** Hvordan scener settes sammen
- **Lyd:** Dialog, musikk, lydeffekter, stillhet
- **Mise-en-scène:** Alt som er i bildet (kulisser, kostyme, lys)

**Å lese film:**
Som med skriftlige tekster kan vi analysere film med faglige begreper. Vi ser på hvordan filmspråket brukes til å fortelle historier, skape stemninger og formidle budskap.

**Film er mer enn underholdning - det er en kunstform og et medium for fortelling som fortjener kritisk analyse.**`,
    },
    {
      id: 'norsk-vg1-6-2-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Filmspråk** | Konvensjoner og teknikker for å fortelle i film |
| **Kameravinkel** | Hvor kameraet er plassert i forhold til motivet |
| **Bildeutsnitt** | Hvor mye av motivet som vises (nær, halvnær, total) |
| **Mise-en-scène** | Alt som er synlig i bildet (kulisser, lys, kostyme) |
| **Klipping** | Hvordan scener og bilder settes sammen |
| **Diegetisk lyd** | Lyd som kommer fra filmens verden |
| **Ikke-diegetisk lyd** | Lyd som er lagt til (filmmusikk) |
| **Montasje** | Sammensetning av bilder for å skape mening |`,
    },
    {
      id: 'norsk-vg1-6-2-def-1',
      type: 'definition',
      title: 'Kameravinkel og bildeutsnitt',
      content: `**Bildeutsnitt (shot sizes):**

**Totalbilde (extreme long shot):**
- Viser landskap eller store omgivelser
- Mennesker er små
- Etablerer setting, skaper stemning

**Halvtotalt (long shot):**
- Viser hele kroppen til personer
- Ser omgivelsene tydelig
- Viser handling og bevegelse

**Halvnært (medium shot):**
- Viser personer fra livet og opp
- Standard for samtaler
- Balanse mellom person og omgivelser

**Nært (close-up):**
- Viser ansikt eller detaljer
- Viser følelser tydelig
- Skaper intimitet

**Ekstrem nært (extreme close-up):**
- Viser en detalj (øye, hånd, gjenstand)
- Fremhever viktighet
- Kan skape ubehag eller intensitet

**Kameravinkler:**

**Fugleperspektiv:** Ovenfra - gjør personer små, sårbare
**Normalperspektiv:** I øyehøyde - nøytral fremstilling
**Froskeperspektiv:** Nedenfra - gjør personer mektige, truende

**Disse teknikkene brukes bevisst for å styre hvordan vi oppfatter personer og situasjoner.**`,
    },
    {
      id: 'norsk-vg1-6-2-image-filmsprak',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-6-2-filmsprak.png',
      alt: 'Oversikt over filmspråk-begreper som bildeutsnitt og kameravinkler med visuelle eksempler',
      caption: 'Oversikt over sentrale filmspråkbegreper: bildeutsnitt (totalbilde, halvtotalt, halvnært, nært, ekstrem nært) og kameravinkler (fugle-, normal- og froskeperspektiv).',
    },
    {
      id: 'norsk-vg1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar sentrale begreper i filmanalyse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på nært og totalt bildeutsnitt?',
            solution: 'Nært viser ansikt/detaljer og følelser, totalt viser hele miljøet og etablerer setting.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen på diegetisk og ikke-diegetisk lyd?',
            solution: 'Diegetisk lyd kommer fra filmens verden (karakterene kan høre den), ikke-diegetisk lyd er lagt til for seeren (filmmusikk, fortellerstemme).',
          },
          {
            label: 'c',
            task: 'Hva betyr mise-en-scène?',
            solution: 'Alt som er i bildet: kulisser, kostyme, rekvisitter, lyssetting, skuespillernes plassering.',
          },
        ],
        solution: 'Å kjenne fagbegrepene gjør deg i stand til å analysere film presist.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-6',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kalles det når kameraet filmer en person nedenfra, slik at personen ser mektig og truende ut?',
        options: [
          { id: 'a', text: 'Fugleperspektiv', isCorrect: false },
          { id: 'b', text: 'Normalperspektiv', isCorrect: false },
          { id: 'c', text: 'Froskeperspektiv', isCorrect: true },
          { id: 'd', text: 'Totalbilde', isCorrect: false },
        ],
        solution: 'Froskeperspektiv (nedenfra) får personer til å virke mektige eller truende, mens fugleperspektiv (ovenfra) gjør dem små og sårbare.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-7',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken filmsjanger kjennetegnes av spenning, farer og ofte raske klipp?',
        options: [
          { id: 'a', text: 'Drama', isCorrect: false },
          { id: 'b', text: 'Komedie', isCorrect: false },
          { id: 'c', text: 'Action/thriller', isCorrect: true },
          { id: 'd', text: 'Dokumentar', isCorrect: false },
        ],
        solution: 'Action- og thrillerfilmer bruker raske klipp, spenningsmusikk og dramatiske kameravinkler for å skape intensitet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-2-def-2',
      type: 'definition',
      title: 'Klipping og montasje',
      content: `**Klipping (editing):**

Klipping er kunsten å sette sammen enkeltbilder til en sammenhengende film. Klippingen styrer:
- Tempo og rytme
- Hvilken informasjon seeren får
- Hvordan vi oppfatter tid og rom

**Klippeteknikker:**

**Kontinuitetsklipping:**
- Sømløs, usynlig klipping
- Opprettholder illusjonen av sammenhengende tid og rom
- Standard i spillefilm

**Kryssklipping:**
- Veksler mellom parallelle hendelser
- Skaper spenning
- Antyder at ting skjer samtidig

**Jump cut:**
- Brå klipp innenfor samme scene
- Bryter flyten, skaper uro
- Modernistisk teknikk

**Match cut:**
- Klipp mellom lignende former/bevegelser
- Skaper sammenheng mellom ulike scener

**Montasje:**
- Sekvens av korte klipp
- Viser tid som går eller utvikling
- Klassisk: treningssekvens

**Tempo:**
Raske klipp = spenning, action
Langsomme klipp = ettertanke, drama`,
    },
    {
      id: 'norsk-vg1-6-2-image-klipping',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-6-2-klipping.png',
      alt: 'Illustrasjon av klippeteknikker i film: kontinuitetsklipping, kryssklipping, jump cut og match cut',
      caption: 'Ulike klippeteknikker og deres effekt: kontinuitetsklipping skaper flyt, kryssklipping bygger spenning, jump cut skaper uro, og match cut kobler scener sammen.',
    },
    {
      id: 'norsk-vg1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en scene fra en film du liker og analyser bruken av filmspråk.',
        hints: ['Beskriv hva som skjer', 'Se på kameraføring og klipping', 'Hvordan brukes lyd?', 'Hva uttrykker valgene?'],
        solution: 'Analysen bør vise evne til å bruke fagbegreper og forklare hvordan filmspråket skaper mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-2-def-3',
      type: 'definition',
      title: 'Lyd i film',
      content: `**Filmens lydbilde:**

Lyd er like viktig som bilde i film. Vi deler lyden i:

**Diegetisk lyd:**
- Lyd som kommer fra filmens verden
- Dialog mellom karakterer
- Naturlyder, musikk fra radio i scenen
- Det karakterene selv kan høre

**Ikke-diegetisk lyd:**
- Lyd lagt til utenfor filmens verden
- Filmmusikk (score)
- Fortellerstemme (voice-over)
- Det bare seeren hører

**Lydens funksjoner:**

**Dialog:**
- Formidler informasjon
- Viser karaktertrekk
- Driver handlingen

**Lydeffekter:**
- Skaper realisme
- Forsterker stemning
- Fremhever viktige øyeblikk

**Musikk:**
- Skaper stemning
- Signaliserer sjanger
- Guider følelser
- Kommenterer handling

**Stillhet:**
- Kraftig virkemiddel
- Skaper spenning eller ubehag
- Fremhever det som kommer etter

**Lyden kan fortelle oss like mye som bildet - eller manipulere hvordan vi oppfatter det vi ser.**`,
    },
    {
      id: 'norsk-vg1-6-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-8',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en scene fra en norsk film og analyser bruken av filmteknikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv scenen kort: hva skjer?',
            solution: 'Gi et kort sammendrag av handlingen i scenen.',
          },
          {
            label: 'b',
            task: 'Analyser bruken av kameravinkel, bildeutsnitt og klipping.',
            solution: 'Identifiser spesifikke teknikker og forklar hvordan de påvirker opplevelsen.',
          },
          {
            label: 'c',
            task: 'Hvordan brukes lyd (dialog, musikk, lydeffekter) i scenen?',
            solution: 'Beskriv diegetisk og ikke-diegetisk lyd og deres funksjon i scenen.',
          },
        ],
        solution: 'Analysen bør vise evne til å bruke fagbegreper og tolke filmspråkets effekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-2-def-4',
      type: 'definition',
      title: 'Adaptasjon: fra bok til film',
      content: `**Når litteratur blir film**

Adaptasjon er når et verk overføres fra ett medium til et annet, for eksempel fra roman til film.

**Utfordringer ved adaptasjon:**
- Bok og film er forskjellige medier
- Indre monolog er vanskelig å filme
- Lang bok må kortes ned
- Leseren ser for seg karakterene selv, filmen viser dem

**Typer adaptasjon:**

**Tro adaptasjon:**
- Følger originalen tett
- Beholder så mye som mulig
- Risiko: kan føles stiv eller for lang

**Fri adaptasjon:**
- Tar utgangspunkt i verket
- Gjør store endringer
- Kan finne nye måter å formidle essensen

**Transformasjon:**
- Bruker elementer fra originalen
- Lager noe helt nytt
- Oppdatering til ny tid/setting

**Analysespørsmål for adaptasjon:**
1. Hva er beholdt fra originalen?
2. Hva er endret? Hvorfor?
3. Hvordan løser filmen det som er vanskelig å filme (tanker, tid, etc.)?
4. Hva tilfører filmen som mediet?
5. Hva mister vi fra boken?
6. Er filmen vellykket på egne premisser?

**En god adaptasjon er ikke nødvendigvis en som følger boken slavisk, men en som finner filmens egen måte å fortelle historien på.**`,
    },
    {
      id: 'norsk-vg1-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av filmscene',
      problem: 'Analyser en tenkt filmscene der to personer møtes for første gang.',
      solution: `**Scenebeskrivelse:**
To unge mennesker møtes ved en kafé. Øyekontakt, usikkerhet, så et smil.

**Analyse:**

**Bildeutsnitt:**
- Etablerende totalbilde av kafeen
- Halvnært av person A som ser opp
- Nært av person Bs ansikt
- Nært av person As reaksjon
- Totalt: de går mot hverandre

**Kamerabevegelse:**
- Kameraet nærmer seg sakte Person B (subjektivt fra As perspektiv)
- Skaper intimitet og spenning

**Klipping:**
- Sakte tempo - dveler ved blikk og reaksjoner
- Kryssklipping mellom de to ansiktene
- Bygger opp til møtet

**Lyd:**
- Kafeens diegetiske lyd dempes gradvis
- Ikke-diegetisk musikk kommer inn (romantisk)
- Dialog: "Hei" - enkelt, men ladet

**Mise-en-scène:**
- Varmt lys fra vinduet
- Andre mennesker i bakgrunnen (men uskarpe)
- Fargene på klærne komplementerer hverandre

**Tolkning:**
Filmspråket viser at dette øyeblikket er spesielt. Tempoet sakker, lyden endres, kameraet fokuserer - alt forteller seeren at disse to kommer til å bli viktige for hverandre.`,
    },
    {
      id: 'norsk-vg1-6-2-example-2',
      type: 'example',
      title: 'Eksempel: Sammenligning av bok og filmatisering',
      content: `**Oppgave/Situasjon:**
Sammenlign hvordan en scene fremstilles i bok og film - her bruker vi et tenkt eksempel.

**Bokens versjon:**
"Maria sto ved vinduet og sa ut pa regnet. Tankene fløy til barndommen, til de varme somrene hos bestemor. Hun kjente et stikk i hjertet. Hvorfor hadde hun ikke besøkt henne oftere?"

**Filmens versjon:**
Maria star ved vinduet. Regnet renner nedover glasset. Kameraet zoomer sakte inn pa ansiktet hennes. En tar ruller nedover kinnet. Ikke-diegetisk pianomusikk spiller melankolsk.

**Analyse av forskjellene:**

**Boken kan:**
- Ga direkte inn i tankene ("Tankene fløy til barndommen")
- Forklare følelser eksplisitt ("et stikk i hjertet")
- Stille retoriske spørsmål som viser indre konflikt
- La leseren forestille seg ansiktsuttrykket selv

**Filmen kan:**
- Vise følelser visuelt gjennom skuespill (taren)
- Bruke musikk til a skape stemning
- La kamerabevegelsen forsterke det emosjonelle
- Vise regnet som visuelt symbol pa tristhet

**Hva mister filmen?**
- Den direkte tilgangen til Marias tanker
- Referansen til bestemor (ma vises pa annen mate)
- Det retoriske spørsmalet (ma eventuelt bli voice-over)

**Hva tilfører filmen?**
- Det visuelle uttrykket (ansikt, tar, regn)
- Musikken som forsterker stemningen
- Umiddelbarheten i skuespillet

**Konklusjon:**
Verken bok eller film er "bedre" - de har ulike styrker. Filmen ma finne visuelle og auditive løsninger pa det boken forteller med ord.`,
    },
    {
      id: 'norsk-vg1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-4',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign en bok med filmatiseringen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er beholdt fra boken?',
            solution: 'Identifiser elementer som er uendret (handling, karakterer, temaer).',
          },
          {
            label: 'b',
            task: 'Hva er endret? Hvorfor tror du det er endret?',
            solution: 'Vurder praktiske grunner (tid, budsjett) og kunstneriske valg.',
          },
          {
            label: 'c',
            task: 'Er filmen vellykket som selvstendig verk?',
            solution: 'Vurder filmen på egne premisser, ikke bare som kopi av boken.',
          },
        ],
        solution: 'Sammenligningen viser forståelse for forskjeller mellom bok og film som medier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-9',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en bok du har lest som også er filmatisert. Sammenlign bok og film.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er de viktigste forskjellene mellom bok og film?',
            solution: 'Identifiser endringer i handling, karakterer, slutt, perspektiv eller tone.',
          },
          {
            label: 'b',
            task: 'Hva kan filmen gjøre som boken ikke kan, og omvendt?',
            solution: 'Film kan vise visuelt og auditivt, bok kan gå inn i tanker og bruke tid annerledes.',
          },
        ],
        hints: ['Tenk på indre monolog, tidshopp, detaljbeskrivelser i boken', 'Tenk på musikk, skuespill, visuell stemning i filmen'],
        solution: 'Sammenligningen bør vise forståelse for at bok og film er ulike medier med ulike styrker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-3',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en norsk film.',
        hints: ['Velg en scene eller sekvens å fokusere på', 'Hvordan brukes typisk norske virkemidler (naturbilder, stillhet, realisme)?', 'Hva er filmens tema?'],
        solution: 'Analysen bør vise forståelse for norsk filmtradisjon og evne til filmanalyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-5',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: Kan en film noen gang være "like god som boken"?',
        hints: ['Er det rettferdig å sammenligne?', 'Hva kan film gjøre som bok ikke kan?', 'Hva kan bok gjøre som film ikke kan?', 'Bør de vurderes hver for seg?'],
        solution: 'Drøftingen bør vise forståelse for at bok og film er ulike medier med ulike styrker, og at begge kan være gode på hver sin måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en filmanmeldelse (400-500 ord) der du bruker analytiske begreper fra kapittelet.',
        hints: [
          'Velg en film du har sett nylig',
          'Gi et kort handlingsreferat uten å avsløre slutten',
          'Analyser filmspråket: kamerabruk, klipping, lyd, mise-en-scène',
          'Vurder filmens temaer og budskap',
          'Gi en samlet vurdering med begrunnelse',
        ],
        solution: 'Anmeldelsen bør vise evne til å bruke fagbegreper, analysere filmspråk og gi en begrunnet vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et storyboard og en plan for en kort filmscene (1-2 minutter).',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv handlingen i scenen (hva skjer?).',
            solution: 'Skriv et kort manus med dialog og scenebeskrivelse.',
          },
          {
            label: 'b',
            task: 'Tegn eller beskriv minst 6 bilder (shots) med bildeutsnitt og kameravinkel.',
            solution: 'Hvert bilde bør ha en kort beskrivelse av innhold, bildeutsnitt og evt. kamerabevegelse.',
          },
          {
            label: 'c',
            task: 'Planlegg lydbildet: dialog, musikk, lydeffekter.',
            solution: 'Beskriv hva slags lyd som skal brukes i scenen og hvorfor.',
          },
          {
            label: 'd',
            task: 'Forklar hvilke virkemidler du har valgt og hvorfor.',
            solution: 'Reflekter over hvordan filmspråket bidrar til å formidle stemning og budskap.',
          },
        ],
        solution: 'Storyboardet bør vise bevisst bruk av filmspråk og evne til å planlegge en filmscene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-6-2-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 6.2

**Hovedpunkter:**
- Film er en sammensatt tekst som kombinerer levende bilder, lyd, dialog og mise-en-scène
- Filmspråket omfatter kameravinkel, bildeutsnitt, klipping og lyddesign
- Adaptasjon handler om å overføre et verk fra ett medium til et annet, med nødvendige tilpasninger

**Sentrale begreper:**
- **Bildeutsnitt**: Hvor mye av motivet som vises (totalbilde, halvnært, nært)
- **Kameravinkel**: Fugleperspektiv (ovenfra), normalperspektiv, froskeperspektiv (nedenfra)
- **Diegetisk lyd**: Lyd fra filmens verden som karakterene kan høre
- **Ikke-diegetisk lyd**: Lyd lagt til for seeren (filmmusikk, fortellerstemme)

**Tips for eksamen:**
- Beskriv konkrete filmtekniske valg og forklar deres effekt
- Sammenlign bok og film ved å se på hva som er beholdt, endret og hvorfor
- Husk at film og bok er ulike medier med ulike styrker`,
    },
    {
      id: 'norsk-vg1-6-2-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **6.1 Sammensatte tekster** – Grunnleggende om multimodale tekster
- **6.3 Digitale tekster og sosiale medier** – Analyser video i digitale medier
- **2.3 Drama og teater** – Sammenlign dramatikk på scene og i film
- **2.4 Romananalyse** – Analyser litterære forelegg for filmatiseringer`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4: Skriveprosess og revisjon
// ============================================================================

export const CHAPTER_NORSK_VG1_5_4: TextbookChapter = {
  id: 'norsk-vg1-5-4',
  courseId: 'norsk-vg1',
  chapterNumber: '5.4',
  title: 'Skriveprosess og revisjon',
  description: 'Lær om skriveprosessen og teknikker for å bli en bedre skribent.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike skrivestrategier og tilpasse skriving til formål og mottaker',
    'gi og motta tilbakemelding på tekster og bruke dette i egen skriving',
  ],
  content: [
    {
      id: 'norsk-vg1-5-4-intro',
      type: 'text',
      content: `## Skriving som prosess

God skriving kommer sjelden av seg selv. De fleste gode tekster er resultat av en prosess med flere faser:

**Skriveprosessens faser:**
1. **Førskriving:** Idéutvikling, planlegging, research
2. **Utkast:** Få ideene ned på papiret
3. **Revisjon:** Omskriving og forbedring
4. **Redigering:** Språkvask og finpuss
5. **Ferdigstilling:** Formatering og levering

**Hvorfor tenke prosess?**
- Reduserer stress og skrivevegring
- Gir bedre tekster
- Gjør skriving mer håndterlig
- Skiller ulike typer arbeid

**Viktig innsikt:**
Førstetkastet trenger ikke være perfekt. Det er i revisjonen teksten blir god. Profesjonelle skribenter skriver om og om igjen.

**"Skriving er omskriving."** - Klassisk skriveråd

**I dette kapittelet lærer du konkrete teknikker for hver fase av skriveprosessen.**`,
    },
    {
      id: 'norsk-vg1-5-4-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Skriveprosess** | De ulike fasene fra idé til ferdig tekst |
| **Førskriving** | Planlegging og idéutvikling før skriving |
| **Utkast** | Første versjon av en tekst |
| **Revisjon** | Å omarbeide og forbedre innholdet |
| **Redigering** | Språklig finpuss og korrektur |
| **Tankekart** | Visuell organisering av ideer |
| **Friskriving** | Skriving uten å stoppe eller sensurere |
| **Tilbakemelding** | Respons på tekst fra andre lesere |`,
    },
    {
      id: 'norsk-vg1-5-4-def-1',
      type: 'definition',
      title: 'Førskriving og idéutvikling',
      content: `**Før du begynner å skrive:**

Førskrivingsfasen handler om å finne ideer, samle materiale og planlegge teksten.

**Teknikker for idéutvikling:**

**Friskriving:**
- Skriv uavbrutt i 5-10 minutter
- Ikke sensurer deg selv
- La tankene flyte fritt
- Se på hva som dukker opp

**Tankekart:**
- Sett temaet i midten
- Skriv assosiasjoner rundt
- Finn sammenhenger
- God for å se strukturer

**Brainstorming:**
- List opp alle ideer
- Ingen er for dumme
- Mengde før kvalitet
- Sorter etterpå

**Spørsmålsteknikk:**
- Hvem? Hva? Hvor? Når? Hvorfor? Hvordan?
- Still spørsmål til emnet ditt
- Svarene gir innhold

**Research:**
- Les om emnet
- Ta notater
- Noter kilder
- Finn eksempler

**Planlegging:**
- Lag disposisjon
- Bestem rekkefølge
- Identifiser hovedpoenger
- Vurder lengde`,
    },
    {
      id: 'norsk-vg1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar fasene i skriveprosessen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjør du i førskrivingsfasen?',
            solution: 'Idéutvikling, planlegging, research, brainstorming, tankekart.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen på revisjon og redigering?',
            solution: 'Revisjon handler om innhold og struktur (store endringer), redigering handler om språk og feil (små endringer).',
          },
          {
            label: 'c',
            task: 'Hvorfor er det lurt å la teksten hvile?',
            solution: 'Du får distanse og ser teksten med friske øyne. Feil og forbedringer blir tydeligere.',
          },
        ],
        solution: 'Å forstå skriveprosessen hjelper deg å jobbe mer systematisk med skriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-6',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig rekkefølge på fasene i skriveprosessen?',
        options: [
          { id: 'a', text: 'Utkast, førskriving, redigering, revisjon, ferdigstilling', isCorrect: false },
          { id: 'b', text: 'Førskriving, utkast, revisjon, redigering, ferdigstilling', isCorrect: true },
          { id: 'c', text: 'Redigering, utkast, revisjon, førskriving, ferdigstilling', isCorrect: false },
          { id: 'd', text: 'Førskriving, revisjon, utkast, redigering, ferdigstilling', isCorrect: false },
        ],
        solution: 'Skriveprosessen følger fasene: førskriving (planlegging), utkast (skriving), revisjon (omskriving), redigering (språkvask) og ferdigstilling.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-2',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Prøv friskriving om et selvvalgt tema.',
        hints: ['Sett en timer på 10 minutter', 'Skriv uten å stoppe', 'Ikke bry deg om feil', 'Se hva som dukker opp'],
        solution: 'Friskriving skal gi deg råmateriale og overvinne skrivesperre. Resultatet trenger ikke være polert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-3',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et tankekart for en tekst om et tema du kjenner godt.',
        hints: ['Velg et tema (hobby, fag, erfaring)', 'Sett temaet i midten', 'Skriv assosiasjoner', 'Finn sammenhenger'],
        solution: 'Tankekartet skal vise strukturer og sammenhenger i emnet ditt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-4-def-2',
      type: 'definition',
      title: 'Skrivestrategier og utkast',
      content: `**Å skrive førsteutkastet:**

Når du har planlagt, er det tid for å skrive. Her er strategier for utkastfasen:

**Strategi 1: Skriv uten stopp**
- Ikke stopp for å rette
- Ikke se tilbake
- Få alt ned på papiret
- Rediger senere

**Strategi 2: Start der det er lettest**
- Du trenger ikke starte med innledningen
- Skriv avsnittet du er sikrest på først
- Fyll inn resten etterpå

**Strategi 3: Snakk høyt**
- Forklar argumentet ditt høyt
- Skriv ned det du sa
- Ofte mer naturlig språk

**Strategi 4: Skriv til noen**
- Forestill deg en konkret leser
- Forklar til dem
- Hjelper med å holde fokus

**Tips for utkastfasen:**
- Sett tidsfrist
- Fjern distraksjoner
- Godta "dårlig" skriving - det er bare et utkast
- Marker steder du er usikker på (med [???]) og fortsett
- Ikke perfeksjonisme - fremdrift!

**Husk: Utkastet er råmateriale. Det er i neste fase du former det til noe bra.**`,
    },
    {
      id: 'norsk-vg1-5-4-def-3',
      type: 'definition',
      title: 'Revisjon og tilbakemelding',
      content: `**Revisjon - å se med nye øyne:**

Revisjon betyr å "se igjen". Her forbedrer du teksten på innholds- og strukturnivå.

**Revisjonsnivåer:**

**Globalt nivå:**
- Er strukturen logisk?
- Henger argumentene sammen?
- Er det noe som mangler?
- Er det noe overflødig?

**Avsnittsnivå:**
- Har hvert avsnitt ett hovedpoeng?
- Er det gode overganger?
- Er rekkefølgen god?

**Setningsnivå:**
- Er setningene klare?
- Varierer setningslengden?
- Er det unødvendige ord?

**Tilbakemelding:**

**Gi tilbakemelding:**
- Start med noe positivt
- Vær konkret ("Innledningen fanger oppmerksomhet" er bedre enn "bra")
- Still spørsmål der du er forvirret
- Foreslå forbedringer, ikke bare kritiser
- Vær respektfull - det er personens tekst

**Motta tilbakemelding:**
- Lytt åpent
- Spør om utdyping
- Du trenger ikke bruke alt
- Husk: tilbakemelding på teksten, ikke på deg
- Ta tid til å vurdere før du endrer`,
    },
    {
      id: 'norsk-vg1-5-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-7',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom revisjon og korrektur (redigering)?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell, det er to ord for det samme', isCorrect: false },
          { id: 'b', text: 'Revisjon handler om innhold og struktur, redigering handler om språk og rettskriving', isCorrect: true },
          { id: 'c', text: 'Revisjon handler om rettskriving, redigering handler om innhold', isCorrect: false },
          { id: 'd', text: 'Revisjon er for andre, redigering er for seg selv', isCorrect: false },
        ],
        solution: 'Revisjon handler om å forbedre innhold, struktur og argumentasjon (store endringer), mens redigering/korrektur handler om å rette språk, rettskriving og tegnsetting (små endringer).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-4',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tilbakemelding på en medelevs tekst (eller en du har skrevet selv tidligere).',
        hints: ['Start med noe positivt', 'Vær konkret', 'Still spørsmål', 'Foreslå forbedringer'],
        solution: 'Tilbakemeldingen bør være konstruktiv, konkret og respektfull.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-4-def-4',
      type: 'definition',
      title: 'Egenvurdering',
      content: `**Å vurdere egen tekst:**

Egenvurdering er evnen til å se kritisk på eget arbeid. Det er en ferdighet du kan utvikle.

**Teknikker for egenvurdering:**

**La teksten hvile:**
- Legg den bort en dag eller to
- Du ser den med friske øyne
- Feil og forbedringer blir tydeligere

**Les høyt:**
- Du hører når noe ikke fungerer
- Merkelige setninger avsløres
- Naturlig måte å sjekke flyt

**Sjekkliste:**
Lag en liste med spørsmål du alltid sjekker:
- Svarer teksten på oppgaven?
- Er innledningen engasjerende?
- Er avslutningen god?
- Har jeg belegg for påstandene mine?
- Er språket tilpasset mottaker?

**Vurderingskriterier:**
Se på vurderingskriteriene før du starter og mens du reviderer:
- Hva vektlegges?
- Hvordan ligger teksten an?
- Hva kan forbedres?

**Sammenlign med gode tekster:**
- Les modelltekster
- Hva gjør de bra?
- Hva kan du lære?

**Egenvurdering gjør deg til en mer selvstendig skribent som kan forbedre egne tekster uten å vente på andres tilbakemelding.**`,
    },
    {
      id: 'norsk-vg1-5-4-image-revisjon-sjekkliste',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-4-revisjon-sjekkliste.png',
      alt: 'Sjekkliste for revisjon av tekst med punkter for struktur, innhold og språk',
      caption: 'En sjekkliste hjelper deg å revidere teksten systematisk',
    },
    {
      id: 'norsk-vg1-5-4-image-korrektur',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-4-korrektur.png',
      alt: 'Illustrasjon av korrekturlesing med markeringer og rettelser i en tekst',
      caption: 'Korrekturlesing er siste steg før teksten ferdigstilles',
    },
    {
      id: 'norsk-vg1-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Fra utkast til ferdig tekst',
      problem: 'Se hvordan en tekst forbedres gjennom revisjon.',
      solution: `**Førsteutkast:**
"Sosiale medier er bra og dårlig. Mange bruker det hver dag. Det kan være bra for å holde kontakt med venner, men det kan også være dårlig."

**Problemer:**
- Vagt og repeterende
- "Bra og dårlig" - ingen konkrete argumenter
- Ingen eksempler eller belegg
- Svak innledning

**Revidert versjon:**
"En gjennomsnittlig norsk ungdom bruker flere timer daglig på sosiale medier. Disse plattformene gir oss mulighet til å holde kontakt med venner og delta i fellesskap uavhengig av avstand. Samtidig viser forskning at mye bruk kan påvirke søvn og selvbilde negativt. I denne teksten vil jeg drøfte både fordeler og ulemper ved sosiale medier."

**Forbedringer:**
- Konkret åpning (fakta)
- Spesifikke argumenter (kontakt, fellesskap)
- Henvisning til forskning (belegg)
- Tydelig fokus (drøfting)
- Veiledende avslutning (hva teksten skal gjøre)

**Neste steg:**
- Utvikle argumentene med eksempler
- Legge til motargumenter
- Skrive en konklusjon
- Sjekke språk og komma`,
    },
    {
      id: 'norsk-vg1-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Bruk av tankekart i forskriving',
      content: `**Oppgave/Situasjon:**
Du skal skrive en tekst om klimaendringer. Hvordan kan du bruke tankekart til a organisere ideene dine?

**Steg 1: Sett temaet i midten**
Skriv "KLIMAENDRINGER" i midten av et ark.

**Steg 2: Lag hovedgrener**
Tegn linjer ut fra midten med hovedkategorier:
- Arsaker
- Konsekvenser
- Løsninger
- Min mening

**Steg 3: Legg til undergrener**

**Arsaker:**
- Fossilt brensel (kull, olje, gass)
- Avskoging
- Industri
- Transport

**Konsekvenser:**
- Stigende temperaturer
- Smelting av is
- Ekstremvar
- Tap av arter

**Løsninger:**
- Fornybar energi
- Offentlig transport
- Mindre forbruk
- Politiske tiltak

**Min mening:**
- Hva kan jeg gjøre?
- Hvem har ansvar?

**Steg 4: Finn sammenhenger**
Tegn piler mellom punkter som henger sammen:
- "Fossilt brensel" → "Stigende temperaturer" → "Smelting av is"
- "Fornybar energi" som løsning pa "Fossilt brensel"

**Resultat:**
Na har du et visuelt oversikt over temaet. Du kan bruke tankekartet til a:
- Velge fokus (du kan ikke skrive om alt)
- Lage disposisjon (arsaker → konsekvenser → løsninger)
- Finne argumenter og eksempler`,
    },
    {
      id: 'norsk-vg1-5-4-example-3',
      type: 'example',
      title: 'Eksempel: Tilbakemelding og revisjon',
      content: `**Oppgave/Situasjon:**
Se hvordan en elev bruker tilbakemelding til a forbedre teksten sin.

**Opprinnelig avsnitt:**
"Ungdom bruker mye tid pa sosiale medier. Det er ikke bra. De burde gjøre andre ting i stedet."

**Tilbakemelding fra medelev:**
- "Hvor mye er 'mye'? Kan du være mer konkret?"
- "Hvorfor er det ikke bra? Du mangler begrunnelse."
- "Hva slags 'andre ting'? Kan du gi eksempler?"
- "Hvem er 'de'? Inkluderer du deg selv?"

**Elevens refleksjon:**
Medeleven har rett - teksten min er for vag. Jeg pastar ting uten a begrunne dem, og jeg høres dømmende ut uten a inkludere meg selv.

**Revidert avsnitt:**
"Ifølge Medietilsynet bruker norske 15-aringer i gjennomsnitt tre timer daglig pa sosiale medier. Selv om dette kan gi sosial tilhørighet og underholdning, advarer forskere om at overdreven bruk kan ga utover søvn, skolearbeid og fysisk aktivitet. Som ungdom selv kjenner jeg pa dette dilemmaet: det er lett a bli hengende pa mobilen nar jeg egentlig skulle trent eller lest."

**Hva ble bedre?**
- Konkrete tall fra troverdig kilde
- Balansert fremstilling (bade fordeler og ulemper)
- Begrunnelse fra forskning
- Personlig perspektiv som inkluderer skribenten
- Mer nyansert og ærlig tone`,
    },
    {
      id: 'norsk-vg1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-5',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Revider et avsnitt fra en tidligere tekst du har skrevet.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser hva som kan forbedres.',
            solution: 'Se på struktur, klarhet, belegg, ordvalg.',
          },
          {
            label: 'b',
            task: 'Skriv en revidert versjon.',
            solution: 'Ny versjon bør vise tydelige forbedringer.',
          },
          {
            label: 'c',
            task: 'Forklar hva du endret og hvorfor.',
            solution: 'Refleksjon over egne valg viser metabevissthet om skriving.',
          },
        ],
        solution: 'Øvelsen viser at du kan vurdere og forbedre egen tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et avsnitt (5-8 setninger) om et selvvalgt tema. Gi avsnittet til en medelev, motta tilbakemelding, og skriv en revidert versjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv førsteutkastet.',
            solution: 'Skriv et sammenhengende avsnitt om et tema du kjenner.',
          },
          {
            label: 'b',
            task: 'Noter tilbakemeldingene du fikk.',
            solution: 'Skriv ned de viktigste tilbakemeldingene fra medeleven.',
          },
          {
            label: 'c',
            task: 'Skriv en revidert versjon og forklar hva du endret.',
            solution: 'Vis tydelige forbedringer basert på tilbakemelding.',
          },
        ],
        solution: 'Øvelsen viser at tilbakemelding og revisjon forbedrer teksten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Prøv tre ulike idéutviklingsteknikker for det samme temaet.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema og lag et tankekart.',
            solution: 'Tankekartet bør ha et sentralt tema med minst 5 grener.',
          },
          {
            label: 'b',
            task: 'Gjør en friskriving (5 minutter) om det samme temaet.',
            solution: 'Friskriving: skriv uavbrutt uten å stoppe opp.',
          },
          {
            label: 'c',
            task: 'Bruk spørsmålsteknikk (hvem, hva, hvor, når, hvorfor, hvordan).',
            solution: 'Still og svar på de seks spørsmålene om temaet.',
          },
          {
            label: 'd',
            task: 'Hvilken teknikk fungerte best for deg? Forklar hvorfor.',
            solution: 'Refleksjon over egen arbeidsprosess viser metakognitiv bevissthet.',
          },
        ],
        solution: 'Ulike teknikker passer for ulike situasjoner og personer. Det er nyttig å kjenne flere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-5-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en skriveportefølje der du dokumenterer hele skriveprosessen for en tekst.',
        subTasks: [
          {
            label: 'a',
            task: 'Dokumenter førskrivingsfasen: vis tankekart, notater eller brainstorming.',
            solution: 'Vis planleggingsarbeidet som ligger til grunn for teksten.',
          },
          {
            label: 'b',
            task: 'Lever førsteutkastet (uten endringer).',
            solution: 'Førsteutkastet viser utgangspunktet for revisjonsarbeidet.',
          },
          {
            label: 'c',
            task: 'Lever det reviderte utkastet med endringer markert.',
            solution: 'Vis hva som er endret fra førsteutkastet (f.eks. med fargemerking).',
          },
          {
            label: 'd',
            task: 'Skriv en refleksjon (150-200 ord) om skriveprosessen din.',
            solution: 'Refleksjonen bør beskrive hva som var utfordrende, hva du lærte, og hvordan prosessen påvirket sluttresultatet.',
          },
        ],
        solution: 'Porteføljen viser at du forstår og kan gjennomføre hele skriveprosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-4-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en reflekterende tekst (300-400 ord) om din egen utvikling som skribent.',
        hints: [
          'Hvordan har du endret deg som skribent de siste årene?',
          'Hvilke skrivestrategier bruker du mest?',
          'Hva er dine styrker og hva vil du forbedre?',
          'Hvordan har tilbakemelding fra andre påvirket skrivingen din?',
          'Hva har du lært i dette kapittelet som du vil ta med videre?',
        ],
        solution: 'Teksten bør vise selvrefleksjon, metakognitiv bevissthet og evne til å sette ord på egen skrivepraksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-4-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 5.4

**Hovedpunkter:**
- Skriveprosessen har fem faser: førskriving, utkast, revisjon, redigering og ferdigstilling
- Førskriving omfatter idéutvikling gjennom friskriving, tankekart, brainstorming og research
- Revisjon handler om innhold og struktur, redigering handler om språk og rettskriving

**Sentrale begreper:**
- **Førskriving**: Planlegging og idéutvikling før selve skrivingen
- **Revisjon**: Å omarbeide innhold og struktur (store endringer)
- **Redigering**: Språklig finpuss og korrekturlesing (små endringer)
- **Egenvurdering**: Å vurdere egen tekst systematisk med friske øyne

**Tips for eksamen:**
- La teksten hvile før du reviderer - du ser den med nye øyne
- Skriver du deg fast, prøv friskriving eller start et annet sted i teksten
- Bruk vurderingskriteriene som sjekkliste under revisjon`,
    },
    {
      id: 'norsk-vg1-5-4-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **5.2 Kreativ skriving** – Bruk skriveprosessen i kreativ skriving
- **5.3 Fagartikkel** – Bruk revisjon for å forbedre fagartikler
- **5.6 Respons og tilbakemelding** – Gi og motta tilbakemelding effektivt
- **8.3 Rettskriving bokmål** – Sjekk rettskriving i revisjon
- **8.5 Tegnsetting** – Sjekk tegnsetting i revisjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.1: De samiske språkene i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_7_1: TextbookChapter = {
  id: 'norsk-vg1-7-1',
  courseId: 'norsk-vg1',
  chapterNumber: '7.1',
  title: 'De samiske språkene i Norge',
  description: 'Lær om de samiske språkene, deres utbredelse og status i Norge.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for den historiske bakgrunnen for samisk og nasjonale minoritetsspråk i Norge',
    'reflektere over språklig mangfold i Norge og Norden',
  ],
  content: [
    {
      id: 'norsk-vg1-7-1-intro',
      type: 'text',
      content: `## Samisk - Norges urfolksspråk

Samene er Norges urfolk, og de samiske språkene har vært talt i Skandinavia i tusenvis av år - lenge før Norges grenser ble trukket. Samisk kultur og språk er en viktig del av Norges kulturarv.

**Sápmi - samenes hjemland:**
Sápmi strekker seg over fire land: Norge, Sverige, Finland og Russland. I Norge bor det samer over hele landet, men de tradisjonelle samiske områdene finnes hovedsakelig i Nord-Norge, Trøndelag og deler av Hedmark.

**Samisk som offisielt språk:**
Siden 1988 har samisk og norsk vært likestilte språk i Norge gjennom Grunnloven. Dette betyr at staten har et ansvar for å bevare og utvikle samisk språk og kultur.

**Hvorfor lære om samisk?**
- Det er en del av Norges historie og kulturarv
- Det er del av læreplanen (LK20)
- Det gir forståelse for språklig mangfold
- Det bidrar til forsoning etter fornorskingspolitikken`,
    },
    {
      id: 'norsk-vg1-7-1-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Sápmi** | Det samiske hjemområdet som strekker seg over fire land |
| **Urfolk** | Opprinnelig befolkning i et område |
| **Nordsamisk** | Det største samiske språket i Norge |
| **Lulesamisk** | Samisk språk i Nordland og Nord-Sverige |
| **Sørsamisk** | Samisk språk i Trøndelag og Hedmark |
| **Fornorskingspolitikken** | Norges assimileringspolitikk overfor samer |
| **Joik** | Tradisjonell samisk sangform |
| **Sametinget** | Samenes folkevalgte organ i Norge |`,
    },
    {
      id: 'norsk-vg1-7-1-def-1',
      type: 'definition',
      title: 'De tre samiske språkene i Norge',
      content: `Norge har tre samiske språk, som alle er selvstendige språk - ikke dialekter:

**1. Nordsamisk (davvisámegiella)**
- Det største samiske språket
- Ca. 20 000-25 000 talere totalt (Norge, Sverige, Finland)
- Snakkes i Finnmark og Nord-Troms
- Viktige områder: Kautokeino, Karasjok, Tana, Nesseby
- Har mest utviklet skriftspråk og litteratur

**2. Lulesamisk (julevsámegiella)**
- Ca. 500-1000 talere i Norge
- Snakkes i Tysfjord og Hamarøy i Nordland
- Også snakket i Sverige (Jokkmokk-området)
- Klassifisert som truet språk

**3. Sørsamisk (åarjelsaemien gïele)**
- Ca. 500-600 talere totalt
- Snakkes i Trøndelag, Nordland og Hedmark
- Språksentre i Snåsa og Røros
- Alvorlig truet språk
- Svært forskjellig fra nordsamisk

**Viktig:** Disse språkene er ikke gjensidig forståelige. En nordsamisktalende forstår ikke sørsamisk uten å lære det.`,
    },
    {
      id: 'norsk-vg1-7-1-image-samiske-omrader-detaljert',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-7-1-samiske-omrader-detaljert.png',
      alt: 'Detaljert kart over samiske språkområder i Norge, Sverige, Finland og Russland',
      caption: 'De samiske språkområdene i Sápmi',
    },
    {
      id: 'norsk-vg1-7-1-image-samisk-identitet',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-7-1-samisk-identitet.png',
      alt: 'Illustrasjon som viser samisk kultur og identitet med kofte, joik og natur',
      caption: 'Samisk identitet omfatter språk, kultur og tilhørighet',
    },
    {
      id: 'norsk-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmål om de samiske språkene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange samiske språk snakkes i Norge?',
            solution: 'Tre: nordsamisk, lulesamisk og sørsamisk.',
          },
          {
            label: 'b',
            task: 'Hvilket samisk språk har flest talere?',
            solution: 'Nordsamisk, med ca. 20 000-25 000 talere totalt.',
          },
          {
            label: 'c',
            task: 'Hvilken språkfamilie tilhører samisk?',
            solution: 'Den finsk-ugriske (eller uralske) språkfamilien.',
          },
          {
            label: 'd',
            task: 'Er samisk i slekt med norsk? Forklar.',
            solution: 'Nei, samisk tilhører den finsk-ugriske familien, mens norsk tilhører den germanske/indoeuropeiske familien.',
          },
        ],
        solution: 'De samiske språkene er selvstendige språk med lang historie i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-6',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange samiske språk snakkes i Norge?',
        options: [
          { id: 'a', text: 'Ett', isCorrect: false },
          { id: 'b', text: 'To', isCorrect: false },
          { id: 'c', text: 'Tre', isCorrect: true },
          { id: 'd', text: 'Fem', isCorrect: false },
        ],
        solution: 'I Norge snakkes tre samiske språk: nordsamisk, lulesamisk og sørsamisk. Disse er selvstendige språk, ikke dialekter.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-1-def-2',
      type: 'definition',
      title: 'Språkfamilie og særtrekk',
      content: `**Samisk tilhører den finsk-ugriske språkfamilien:**

Samisk er slekt med finsk, estisk og ungarsk - men IKKE med norsk. Dette gjør samisk til et helt annerledes språk enn norsk.

**Særtrekk ved samiske språk:**

**Kasus-system:**
- Samisk har mange kasus (bøyningsformer for substantiv)
- Nordsamisk har 7 kasus
- Viser grammatiske funksjoner som norsk uttrykker med ordstilling

**Verbsystem:**
- Rik verbbøyning
- Skiller mellom entall, totall og flertall
- "Vi to" har egen form forskjellig fra "vi mange"

**Ordforråd:**
- Rikt ordforråd for natur, vær og reindrift
- Mange ord for snø, is og reinsdyr
- Gjenspeiler tradisjonell levemåte

**Eksempel på nordsamisk:**
- "Buorre beaivi" = God dag
- "Giitu" = Takk
- "Mii lea du namma?" = Hva heter du?

**Samisk i dag:**
Moderne samisk brukes i alle sammenhenger - fra tradisjonell joik til hip-hop, fra reindrift til programmering.`,
    },
    {
      id: 'norsk-vg1-7-1-def-3',
      type: 'definition',
      title: 'Status og truethet',
      content: `**Samiske språks status i dag:**

UNESCO klassifiserer språkenes truethetsnivå:

**Nordsamisk: Definert truet**
- Det sterkeste samiske språket
- Har skoler, medier, litteratur
- Men færre barn lærer det som førstespråk
- Utfordring: Overføring mellom generasjoner

**Lulesamisk: Alvorlig truet**
- Få talere, få barn lærer språket
- Aktive revitaliseringstiltak
- Språksentre jobber for bevaring

**Sørsamisk: Alvorlig truet**
- Svært få førstespråkstalere
- Mange lærer det som andrespråk
- Stor innsats for revitalisering
- Språkreir og språkbad

**Hva truer språkene?**
- Fornorskingspolitikkens langtidsvirkninger
- Urbanisering (samer flytter til byer)
- Dominansen av norsk i samfunnet
- Manglende lærere og læremidler

**Positive utviklinger:**
- Økt interesse for å lære samisk
- Flere samiske barnehager
- Samisk på Duolingo og andre apper
- NRK Sápmi og annen samisk media
- Stolthet over samisk identitet`,
    },
    {
      id: 'norsk-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over språklig mangfold.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det viktig å bevare samiske språk?',
            solution: 'Svar kan inkludere: kulturarv, identitet, kunnskap, rettigheter, mangfold, forsoning.',
          },
          {
            label: 'b',
            task: 'Hva mister vi hvis et språk dør ut?',
            solution: 'Vi mister en unik måte å forstå verden på, kulturell kunnskap, tradisjonell viten, og et perspektiv som ikke kan gjenskapes.',
          },
        ],
        hints: ['Tenk på hva språk inneholder utover ord', 'Tenk på forholdet mellom språk og identitet'],
        solution: 'Språk bærer med seg kultur, historie og verdensforståelse som går tapt hvis språket dør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-7',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var fornorskingspolitikken?',
        options: [
          { id: 'a', text: 'En politikk for å lære nordmenn samisk', isCorrect: false },
          { id: 'b', text: 'En statlig politikk for å assimilere samer og andre minoriteter til norsk kultur og språk', isCorrect: true },
          { id: 'c', text: 'En politikk for å gjøre Norge tospråklig', isCorrect: false },
          { id: 'd', text: 'En politikk for å bevare samisk kultur', isCorrect: false },
        ],
        solution: 'Fornorskingspolitikken var statens offisielle politikk for å assimilere samer, kvener og andre minoriteter til norsk språk og kultur. Den varte fra ca. 1850 til 1980.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Samiske stedsnavn i Norge',
      problem: 'Mange steder i Norge har samiske navn. Hva forteller stedsnavnene oss?',
      solution: `**Samiske stedsnavn finnes over hele Nord-Norge og Trøndelag:**

**Eksempler med betydning:**
- **Tromsø** (Romsa) - kan bety "sted med sterk strøm"
- **Alta** (Áltá) - relatert til "alda" (bølge)
- **Kautokeino** (Guovdageaidnu) - "midtveis"
- **Karasjok** (Kárášjohka) - "elva ved den steinete/barkede"
- **Hammerfest** (Hámmerfeasta) - samisk versjon av det norske navnet

**Hva stedsnavnene viser:**
1. **Samisk tilstedeværelse:** Beviser at samer har bodd i områdene lenge
2. **Naturobservasjon:** Navnene beskriver ofte naturen
3. **Bruksområder:** Viser hvordan landskapet ble brukt
4. **Språkhistorie:** Viser samisk språks utbredelse

**Lovfesting:**
Stedsnavnloven (1990) sikrer at samiske stedsnavn skal tas vare på. Skilting på samisk er blitt vanligere, særlig i samiske forvaltningsområder.

**Refleksjon:** Stedsnavn er kulturminner. De viser hvem som har bodd der og hvordan de har brukt området.`,
    },
    {
      id: 'norsk-vg1-7-1-example-2',
      type: 'example',
      title: 'Eksempel: Samisk ordforrad - mer enn "mange ord for snø"',
      content: `**Oppgave/Situasjon:**
Det sies ofte at samisk har "mange ord for snø". Hva betyr dette egentlig, og hva forteller det oss om sprak og kultur?

**Samiske ord for snø og is (nordsamisk):**
- **muohta** - snø (generelt)
- **vahca** - løs nysnø
- **skárta** - tynt lag med hard snø
- **seaŋáš** - kornete, gammel snø
- **čuoŋu** - hard skorpe pa snøen som barer
- **moarri** - sprø isskorpe som ikke barer

**Hvorfor sa mange ord?**
Samisk levemåte - spesielt reindrift - krever presis kommunikasjon om snøforhold:
- Er snøen trygg a ga pa?
- Kan reinsdyrene grave gjennom den for a finne mat?
- Er det fare for ras?

**Hva dette viser om sprak:**
1. **Sprak gjenspeiler kultur:** Ordforradet utvikles etter behov
2. **Detaljert kunnskap:** Ordene viser dyp forstaelse av naturen
3. **Praktisk nytte:** Presis kommunikasjon kan være livsviktig

**Tilsvarende pa norsk:**
Norsk har ogsa mange ord for spesifikke fenomener:
- Fisketerminologi langs kysten
- Fjellterminologi i innlandet
- Værord i ulike dialekter

**Refleksjon:**
Spraket vart former hvordan vi oppfatter verden. Nar et sprak dør ut, mister vi ogsa en unik mate a forstå og beskrive virkeligheten pa.`,
    },
    // Primærtekst: Isak Saba - Sámi soga lávlla
    {
      id: 'norsk-vg1-7-1-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Isak Saba - "Sámi soga lávlla" (Samefolkets sang)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-7-1-primaertekst-1-text',
          type: 'text',
          content: TEKST_ISAK_SABA_SAMI_SOGA_LAVLLA,
        },
      ],
    },
    {
      id: 'norsk-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-2',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk samiske stedsnavn i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn tre norske byer eller tettsteder som har samiske navn.',
            solution: 'Eksempler: Tromsø (Romsa), Alta (Áltá), Kautokeino (Guovdageaidnu), Hammerfest (Hámmerfeasta), Vardø (Várggát).',
          },
          {
            label: 'b',
            task: 'Hva betyr stedsnavnloven for samiske stedsnavn?',
            solution: 'Loven sikrer at samiske stedsnavn tas vare på og kan brukes på skilt og kart.',
          },
        ],
        hints: ['Søk på nettstedet til Kartverket', 'Samiske stedsnavn finnes ofte på skilt i Nord-Norge'],
        solution: 'Samiske stedsnavn er kulturminner som viser samisk tilstedeværelse gjennom historien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-4',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn ut mer om samisk i media.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er NRK Sápmi?',
            solution: 'NRKs samiske redaksjon som lager nyheter, programmer og innhold på samisk.',
          },
          {
            label: 'b',
            task: 'Finn et eksempel på moderne samisk kultur (musikk, film, litteratur).',
            solution: 'Eksempler: Mari Boine (musikk), Elle Marja Eira (joik/pop), filmen Sameblod, Sofia Jannok, Maxida Märak.',
          },
        ],
        hints: ['Besøk NRK Sápmis nettsider', 'Søk på samisk musikk på Spotify'],
        solution: 'Samisk kultur er levende og utvikler seg i moderne former.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-8',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les "Sámi soga lávlla" (Samefolkets sang) av Isak Saba og analyser teksten.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva handler sangen om? Hva er hovedtemaene?',
            solution: 'Sangen handler om samisk identitet, tilhørighet til naturen og Sápmi, og stolthet over samisk kultur og historie.',
          },
          {
            label: 'b',
            task: 'Hvilke bilder og motiver bruker dikteren?',
            solution: 'Naturen (fjell, vidder, elver), historien, forfedrene og samisk levemåte brukes som sentrale motiver.',
          },
          {
            label: 'c',
            task: 'Hvorfor tror du denne sangen ble valgt som samenes nasjonalsang?',
            solution: 'Sangen uttrykker samisk identitet, stolthet og tilhørighet på en samlende måte som representerer hele det samiske folket.',
          },
        ],
        solution: 'Analysen bør vise forståelse for sangens temaer og dens betydning for samisk identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-9',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk samisk litteratur: finn og presenter en samisk forfatter.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en samisk forfatter og finn ut om forfatterskapet.',
            solution: 'Eksempler: Nils-Aslak Valkeapää, Rauni Magga Lukkari, Sigbjørn Skåden, Rawdna Carita Eira, Jovnna-Ánde Vest.',
          },
          {
            label: 'b',
            task: 'Hva skriver forfatteren om? Hvilke temaer er sentrale?',
            solution: 'Vanlige temaer: identitet, natur, samisk kultur, fornorsking, modernitet, tilhørighet.',
          },
          {
            label: 'c',
            task: 'Presenter forfatteren for klassen (muntlig eller skriftlig).',
            solution: 'Presentasjonen bør inkludere biografi, sentrale verk og temaer.',
          },
        ],
        hints: ['Bruk bibliotekets nettsider eller NRK Sápmi', 'Nils-Aslak Valkeapää er en god start'],
        solution: 'Undersøkelsen viser kjennskap til samisk litteratur og evne til å formidle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-5',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (150-200 ord) om hvorfor kunnskap om samiske språk bør være del av norskfaget.',
        hints: ['Tenk på Norges historie', 'Tenk på LK20 og læreplanmål', 'Tenk på forsoning og forståelse'],
        solution: 'Teksten bør argumentere for at kunnskap om samisk er viktig for å forstå norsk historie, kultur og språklig mangfold, og for forsoning etter fornorskingspolitikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (400-500 ord) om konsekvensene av fornorskingspolitikken for samisk språk.',
        hints: [
          'Beskriv kort hva fornorskingspolitikken innebar',
          'Drøft konkrete konsekvenser for samisk språk (språktap, generasjonsbrudd, truethet)',
          'Diskuter hva som gjøres for å reparere skadene i dag',
          'Reflekter over hva vi kan lære av denne historien',
        ],
        solution: 'Essayet bør vise kunnskap om fornorskingspolitikken, drøfte språklige konsekvenser med eksempler, og reflektere over revitalisering og forsoning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign språkrevitaliseringsarbeid for samisk med arbeidet for et annet truet språk i verden.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et truet språk utenfor Norge (f.eks. walisisk, maori, hawaiisk, baskisk) og beskriv situasjonen.',
            solution: 'Beskriv språkets status, antall talere, truethetsnivå og historisk bakgrunn.',
          },
          {
            label: 'b',
            task: 'Hvilke tiltak brukes for å revitalisere språket?',
            solution: 'Eksempler: språkbad, medier på språket, lovfesting, skoleundervisning, teknologi.',
          },
          {
            label: 'c',
            task: 'Sammenlign med samisk: hva er likt og hva er forskjellig?',
            solution: 'Se på lignende utfordringer (kolonialisme, assimilering) og forskjellige tilnærminger.',
          },
        ],
        hints: ['Maori i New Zealand og walisisk i Wales er gode sammenligninger', 'Tenk på hva som har fungert andre steder'],
        solution: 'Sammenligningen bør vise forståelse for at språkrevitalisering er en global utfordring med mange felles trekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-1-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 7.1

**Hovedpunkter:**
- Norge har tre samiske språk: nordsamisk, lulesamisk og sørsamisk - alle er selvstendige språk
- Samisk tilhører den finsk-ugriske språkfamilien og er ikke i slekt med norsk
- Alle de samiske språkene er truet, med sørsamisk og lulesamisk i mest kritisk tilstand

**Sentrale begreper:**
- **Sápmi**: Det samiske hjemområdet som strekker seg over Norge, Sverige, Finland og Russland
- **Nordsamisk**: Det største samiske språket med ca. 20 000-25 000 talere
- **Fornorskingspolitikken**: Statens assimileringspolitikk som førte til stort språktap
- **Revitalisering**: Arbeid for å gjenopplive og styrke truede språk

**Tips for eksamen:**
- Skill mellom de tre samiske språkene og deres geografiske utbredelse
- Forstå sammenhengen mellom fornorskingspolitikken og dagens språksituasjon
- Vis kunnskap om både historisk undertrykkelse og nåtidens revitaliseringsarbeid`,
    },
    {
      id: 'norsk-vg1-7-1-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **7.2 Fornorskingspolitikken** – Forstå historisk undertrykkelse av samiske språk
- **7.3 Samiske språklige rettigheter** – Lær om nåtidens rettigheter
- **7.4 Nasjonale minoriteter** – Se samisk i sammenheng med andre minoritetsspråk
- **3.3 Samisk litteratur** – Les litteratur på og om samisk`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Fornorskingspolitikken
// ============================================================================

export const CHAPTER_NORSK_VG1_7_2: TextbookChapter = {
  id: 'norsk-vg1-7-2',
  courseId: 'norsk-vg1',
  chapterNumber: '7.2',
  title: 'Fornorskingspolitikken',
  description: 'Lær om den norske statens assimileringspolitikk overfor samer og kvener.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for den historiske bakgrunnen for samisk og nasjonale minoritetsspråk i Norge',
    'reflektere over hvordan språkpolitikk har påvirket minoritetsgrupper',
  ],
  content: [
    {
      id: 'norsk-vg1-7-2-intro',
      type: 'text',
      content: `## Fornorskingspolitikken - et mørkt kapittel

Fornorskingspolitikken var den norske statens offisielle politikk for å assimilere samer, kvener og andre minoriteter til norsk kultur og språk. Denne politikken varte i over 100 år og har hatt dype konsekvenser som fortsatt merkes i dag.

**Hva var fornorsking?**
Fornorsking innebar at minoriteter skulle bli "norske" - de skulle slutte å snakke sine egne språk, gi opp sin kultur og tilpasse seg det norske majoritetssamfunnet.

**Perioden:**
Fornorskingspolitikken var på sitt sterkeste fra ca. 1850 til 1980, men enkelte tiltak varte enda lenger.

**Hvem ble rammet?**
- Samer i hele Norge
- Kvener (norsk-finner) i Nord-Norge
- Skogfinner i Hedmark
- Romani/tatere

**Hvorfor lære om dette?**
- For å forstå minoritetenes situasjon i dag
- For å bidra til forsoning
- For å unngå å gjenta historiens feil
- Fordi det er del av norsk historie alle bør kjenne`,
    },
    {
      id: 'norsk-vg1-7-2-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Fornorsking** | Politikk for å assimilere minoriteter til norsk kultur |
| **Assimilering** | Å innlemme en gruppe i majoritetssamfunnet |
| **Internatskole** | Skole der elever bor borte fra hjemmet |
| **Jordsalgsloven** | Lov som krevde norskkunnskaper for å kjøpe jord |
| **Språkbad** | Å bli nedsenket i et nytt språk uten morsmålstøtte |
| **Revitalisering** | Arbeid for å gjenopplive et truet språk |
| **Sannhets- og forsoningskommisjonen** | Offentlig gransking av fornorskingspolitikken |
| **Kulturelt folkemord** | Systematisk ødeleggelse av en kulturs språk og tradisjoner |`,
    },
    {
      id: 'norsk-vg1-7-2-def-1',
      type: 'definition',
      title: 'Fornorskingspolitikkens metoder',
      content: `**Hvordan foregikk fornorskingen?**

**I skolen:**
- Samisk og kvensk var forbudt som undervisningsspråk
- Barn ble straffet for å snakke morsmålet
- Internatskoler fjernet barn fra familie og kultur
- Lærebøker fremstilte samisk kultur negativt
- Lærere måtte beherske norsk, ikke samisk

**Jordsalgsloven (1902):**
- Krevde at kjøpere av jord måtte kunne norsk
- Samiske stedsnavn ble fornorsket
- Presset samer vekk fra tradisjonelle områder

**I kirken:**
- Gudstjenester bare på norsk
- Konfirmasjon krevde norskkunnskaper
- Samisk religiøs praksis ble motarbeidet

**I offentligheten:**
- Samisk var usynlig i det offentlige rom
- Ingen samiske aviser eller bøker
- Skam knyttet til samisk identitet

**Internatskolene:**
Mange samiske barn ble sendt på internat langt fra hjemmet. De fikk ikke snakke samisk, måtte lære norsk tvang, og mistet kontakt med familie og kultur.`,
    },
    {
      id: 'norsk-vg1-7-2-def-2',
      type: 'definition',
      title: 'Bakgrunn og ideologi',
      content: `**Hvorfor fornorsking?**

Fornorskingspolitikken hadde flere årsaker:

**Nasjonsbygging:**
- Norge ble selvstendig i 1814/1905
- Staten ville skape en enhetlig nasjon
- "Ett folk, ett språk, én kultur"
- Minoriteter ble sett som hindring

**Sosialdarwinisme:**
- Vanlig tankesett på 1800-tallet
- Noen kulturer ble ansett som "høyere" enn andre
- Samisk kultur ble sett som "primitiv"
- Man trodde assimilering var "til deres eget beste"

**Sikkerhetspolitikk:**
- Frykt for finsk/russisk innflytelse i nord
- Kvener og samer ble sett som sikkerhetstrussel
- "Norsk" befolkning i nord var strategisk viktig

**Økonomiske interesser:**
- Ressurser i samiske områder
- Lettere å utnytte land uten samiske rettigheter

**Viktig:** Dette var statlig politikk støttet av lover, bevilgninger og institusjoner - ikke bare holdninger blant enkeltpersoner.`,
    },
    {
      id: 'norsk-vg1-7-2-image-fornorsking-tidslinje',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-7-2-fornorsking-tidslinje.png',
      alt: 'Tidslinje som viser fornorskingspolitikkens faser fra 1850 til 1980',
      caption: 'Tidslinje over fornorskingspolitikken',
    },
    {
      id: 'norsk-vg1-7-2-image-konsekvenser',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-7-2-konsekvenser.png',
      alt: 'Diagram som viser konsekvensene av fornorskingspolitikken for språk, kultur og identitet',
      caption: 'Konsekvensene av fornorskingspolitikken merkes fortsatt',
    },
    {
      id: 'norsk-vg1-7-2-def-3',
      type: 'definition',
      title: 'Konsekvenser av fornorskingen',
      content: `**Virkninger som fortsatt merkes:**

**Språktap:**
- Mange mistet morsmålet sitt
- Samisk ble ikke overført til nye generasjoner
- Noen samiske språk er nå truet av utryddelse
- Tapt kunnskap om tradisjonell terminologi

**Kulturelt brudd:**
- Tradisjoner, joik og håndverk gikk tapt
- Generasjoner vokste opp uten kulturell forankring
- Skam over samisk bakgrunn
- Mange skjulte sin samiske identitet

**Psykiske konsekvenser:**
- Traumer fra internatskoler
- Skam og mindreverd
- Identitetsforvirring
- Virkninger går i arv gjennom generasjoner

**Sosiale konsekvenser:**
- Brutte familiebånd
- Tap av tradisjonell kunnskap
- Vanskeligheter med å videreføre kultur
- Fortsatte effekter i form av lavere utdanning og helse

**Mange samer i dag har foreldre eller besteforeldre som ikke fikk snakke samisk som barn, og som aldri lærte barna sine språket.**`,
    },
    {
      id: 'norsk-vg1-7-2-def-4',
      type: 'definition',
      title: 'Sannings- og forsoningskommisjonen',
      content: `**Oppgjør med fortiden:**

I 2018 oppnevnte Stortinget Sannhets- og forsoningskommisjonen for å granske fornorskingspolitikken.

**Kommisjonens mandat:**
- Granske fornorskingspolitikken overfor samer, kvener og skogfinner
- Undersøke virkningene frem til i dag
- Foreslå tiltak for forsoning

**Rapporten (2023):**
Kommisjonen la frem sin rapport til Stortinget med:
- Dokumentasjon av overgrep og urett
- Personlige historier fra dem som ble rammet
- Analyse av langtidsvirkninger
- Anbefalinger for veien videre

**Noen funn:**
- Systematisk og bevisst politikk fra staten
- Varige skader på individer og samfunn
- Behov for fortsatt forsoning
- Språkrevitalisering er avgjørende

**Forsoningsarbeidet:**
- Offisielle unnskyldninger fra staten
- Økt støtte til samisk språk og kultur
- Synliggjøring av samisk historie
- Dialog mellom majoritet og minoriteter

**Forsoning er en pågående prosess som krever kunnskap, anerkjennelse og handling.**`,
    },
    {
      id: 'norsk-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmål om fornorskingspolitikken.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var fornorskingspolitikken?',
            solution: 'Statlig politikk for å assimilere samer, kvener og andre minoriteter til norsk språk og kultur.',
          },
          {
            label: 'b',
            task: 'Hvor lenge varte fornorskingspolitikken omtrent?',
            solution: 'Fra ca. 1850 til 1980 - over 100 år.',
          },
          {
            label: 'c',
            task: 'Nevn tre metoder som ble brukt i fornorskingen.',
            solution: 'Eksempler: Forbud mot samisk i skolen, internatskoler, jordsalgsloven, fornorsking av stedsnavn, straff for å snakke morsmål.',
          },
        ],
        solution: 'Fornorskingspolitikken var systematisk statlig politikk med alvorlige konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser årsakene til fornorskingspolitikken.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med nasjonsbygging, og hvordan bidro det til fornorskingen?',
            solution: 'Nasjonsbygging er prosessen med å skape en samlet nasjon. Minoriteter ble sett som hinder for enhet.',
          },
          {
            label: 'b',
            task: 'Hva var sosialdarwinisme, og hvordan påvirket det synet på samer?',
            solution: 'Ideen om at noen kulturer/folk er "høyere" enn andre. Samisk kultur ble sett som "primitiv" og assimilering som "fremskritt".',
          },
        ],
        hints: ['Tenk på konteksten: Norge som ny selvstendig stat', 'Hvilke tankesett var vanlige på 1800-tallet?'],
        solution: 'Fornorskingen hadde ideologiske, politiske og økonomiske årsaker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Personlige historier fra fornorskingen',
      problem: 'Hvordan opplevde enkeltpersoner fornorskingspolitikken?',
      solution: `**Autentiske fortellinger (anonymisert/sammensatt):**

**"Jeg fikk ikke snakke samisk på skolen"**
"Da jeg begynte på skolen, kunne jeg bare samisk. Læreren slo meg over fingrene hver gang jeg sa et samisk ord. Jeg lærte fort å tie. Men jeg glemte også morsmålet mitt."

**"Jeg visste ikke at jeg var same"**
"Mine foreldre fortalte aldri at vi var samer. Jeg fant ut det først som voksen, da jeg spurte hvorfor bestemor snakket så rart med de gamle nabokona."

**"Skammen sitter dypt"**
"Selv om fornorskingen er over, bærer jeg fortsatt på skam. Jeg valgte å ikke lære barna mine samisk fordi jeg ville skåne dem for det jeg opplevde."

**"Å finne tilbake"**
"I voksen alder begynte jeg på samiskkurs. Det var som å finne en del av meg selv jeg ikke visste manglet. Nå lærer jeg sammen med barnebarna mine."

**Refleksjon:**
Disse historiene viser hvordan politikk påvirker enkeltmennesker og hvordan virkningene går i arv. Mange lever fortsatt med konsekvensene av fornorskingen.`,
    },
    {
      id: 'norsk-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft konsekvensene av fornorskingspolitikken.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke konsekvenser hadde fornorskingen for samisk språk?',
            solution: 'Mange mistet morsmålet, språk ble ikke overført mellom generasjoner, noen samiske språk er nå truet.',
          },
          {
            label: 'b',
            task: 'Hvordan kan traumer fra fornorskingen påvirke senere generasjoner?',
            solution: 'Skam og tabu rundt samisk identitet, brutte familiebånd, manglende språk- og kulturoverføring, psykiske ettervirkninger.',
          },
        ],
        hints: ['Tenk på hva det betyr å ikke kunne snakke med besteforeldrene', 'Tenk på identitet og tilhørighet'],
        solution: 'Fornorskingen har hatt varige konsekvenser for enkeltpersoner, familier og samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk Sannhets- og forsoningskommisjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Når ble kommisjonen oppnevnt og av hvem?',
            solution: 'Stortinget oppnevnte kommisjonen i 2018.',
          },
          {
            label: 'b',
            task: 'Hva var kommisjonens hovedoppgave?',
            solution: 'Å granske fornorskingspolitikken, undersøke virkningene og foreslå tiltak for forsoning.',
          },
          {
            label: 'c',
            task: 'Hvorfor er slike granskninger viktige?',
            solution: 'For å dokumentere urett, anerkjenne lidelse, lære av historien og legge grunnlag for forsoning.',
          },
        ],
        hints: ['Søk på kommisjonens nettsider', 'Tenk på lignende prosesser i andre land'],
        solution: 'Sannhetskommisjoner er viktige for å bearbeide historisk urett og muliggjøre forsoning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-2-example-2',
      type: 'example',
      title: 'Eksempel: Joik som kulturuttrykk og motstand',
      content: `**Oppgave/Situasjon:**
Hva er joik, og hvorfor var den forbudt under fornorskingen?

**Hva er joik?**
Joik er en tradisjonell samisk sangform som har eksistert i tusenvis av ar. I motsetning til vanlige sanger, joiker man ikke OM noe - man joiker noe eller noen. En joik forsøker a fange essensen av en person, et dyr, eller et sted.

**Saertrekk ved joik:**
- Ofte uten faste ord - bruker stavelser og lyder
- Repetitive melodier som kan vare lenge
- Improvisatorisk - kan tilpasses øyeblikket
- Personlig - en joik "tilhører" den som joikes

**Hvorfor ble joik forbudt?**
Under fornorskingen ble joik:
- Sett som "hedensk" og uforenlig med kristendommen
- Forbudt i skolen og kirken
- Forbundet med skam
- Sett pa som "primitiv" av norske myndigheter

**Konsekvenser:**
- Mange sluttet a joike
- Kunnskap gikk tapt mellom generasjoner
- Joik ble noe man gjorde i det skjulte

**Joik i dag:**
- Revitalisert og feiret
- Artister som Mari Boine og Sofia Jannok kombinerer joik med moderne musikk
- Brukt i offisielle sammenhenger (EM-finale, nasjonaldagsfeiringer)
- Symbol pa samisk identitet og stolthet

**Refleksjon:**
Joikens historie viser hvordan kulturuttrykk kan undertykkes, men ogsa overleve og blomstre. A forsta joik er a forsta noe grunnleggende om samisk kultur.`,
    },
    {
      id: 'norsk-vg1-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er joik?',
        options: [
          { id: 'a', text: 'En samisk matrett', isCorrect: false },
          { id: 'b', text: 'En tradisjonell samisk sang- og uttrykksform', isCorrect: true },
          { id: 'c', text: 'Et samisk skriftspråk', isCorrect: false },
          { id: 'd', text: 'Et samisk rettssystem', isCorrect: false },
        ],
        solution: 'Joik er en tradisjonell samisk vokal uttrykksform der man joiker om personer, dyr, steder eller hendelser. Det er en av de eldste musikktradisjonene i Europa.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner samisk fortellerkultur?',
        options: [
          { id: 'a', text: 'Den er utelukkende skriftlig', isCorrect: false },
          { id: 'b', text: 'Den bygger på en sterk muntlig tradisjon med fortellinger, sagn og joik', isCorrect: true },
          { id: 'c', text: 'Den handler bare om reindrift', isCorrect: false },
          { id: 'd', text: 'Den er identisk med norsk fortellerkultur', isCorrect: false },
        ],
        solution: 'Samisk fortellerkultur har en sterk muntlig tradisjon med fortellinger (muitalus), sagn, myter og joik som bærer kunnskap, historie og identitet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lytt til en joik og analyser uttrykket.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en joik på nett (f.eks. fra Mari Boine, Nils-Aslak Valkeapää eller Jon Henrik Fjällgren) og lytt til den.',
            solution: 'Beskriv hvilken joik du valgte og av hvem.',
          },
          {
            label: 'b',
            task: 'Beskriv hvordan joiken høres ut: stemmebruk, rytme, melodi, stemning.',
            solution: 'Beskriv det musikalske uttrykket med egne ord.',
          },
          {
            label: 'c',
            task: 'Hva uttrykker joiken? Hvilke følelser og bilder skaper den?',
            solution: 'Reflekter over hva joiken formidler uten bruk av vanlige ord/setninger.',
          },
        ],
        hints: ['Søk på "joik" på Spotify eller YouTube', 'Lytt med åpent sinn og uten fordommer'],
        solution: 'Analysen bør vise evne til å lytte aktivt og beskrive musikalsk uttrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign samisk og norsk fortellerkultur.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er likheter mellom samiske og norske folkeeventyr og sagn?',
            solution: 'Begge har overnaturlige vesener, naturkrefter, moralske lærdommer, og muntlig overlevering.',
          },
          {
            label: 'b',
            task: 'Hva er forskjeller i temaer, figurer eller verdensbilde?',
            solution: 'Samisk tradisjon har ofte sterkere tilknytning til naturen, stállu (troll-lignende vesen), og sjamanistiske elementer.',
          },
        ],
        hints: ['Tenk på troll i norsk tradisjon og stállu i samisk tradisjon', 'Se på forholdet mellom menneske og natur'],
        solution: 'Sammenligningen viser at kulturer har både felles og unike fortellertrekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-7-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en refleksjonstekst (200-250 ord) om hva du tenker om fornorskingspolitikken og dens betydning for Norge i dag.',
        hints: ['Hva har du lært som var nytt?', 'Hvordan kan kunnskap bidra til forsoning?', 'Hva er statens ansvar?', 'Hva kan du som enkeltperson gjøre?'],
        solution: 'Teksten bør vise refleksjon over historien, forståelse for konsekvensene og tanker om forsoning og veien videre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (400-500 ord): Hvordan utfordrer samisk kultur majoritetskulturens perspektiver?',
        hints: [
          'Tenk på forholdet mellom menneske og natur i samisk vs. vestlig tankegang',
          'Drøft hva samisk perspektiv kan tilføre i debatter om miljø, bærekraft og fellesskap',
          'Bruk konkrete eksempler fra samisk kultur, litteratur eller kunst',
          'Reflekter over hvordan flerkulturell forståelse beriker samfunnet',
        ],
        solution: 'Essayet bør vise evne til å se majoritetskulturen utenfra og drøfte hva urfolksperspektiver kan tilføre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør et forskningsprosjekt om moderne samisk kulturuttrykk.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et felt innenfor moderne samisk kultur (musikk, film, kunst, litteratur, mote, design).',
            solution: 'Eksempler: samisk hip-hop, samisk motedesign (duodji/moderne), samisk film, samisk bildende kunst.',
          },
          {
            label: 'b',
            task: 'Undersøk minst to kunstnere eller verk innenfor feltet.',
            solution: 'Beskriv hvem de er, hva de gjør, og hva som gjør det samisk.',
          },
          {
            label: 'c',
            task: 'Presenter prosjektet som en skriftlig tekst (300-400 ord) eller en presentasjon.',
            solution: 'Presenter funn med analyse og refleksjon over samisk kulturuttrykk i samtiden.',
          },
        ],
        hints: ['Søk på "samisk kunst", "samisk film", "samisk musikk"', 'NRK Sápmi og Riddu Riđđu-festivalen er gode utgangspunkt'],
        solution: 'Prosjektet viser evne til selvstendig research og formidling av samisk kultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-2-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 7.2

**Hovedpunkter:**
- Fornorskingspolitikken var statlig assimileringspolitikk fra ca. 1850 til 1980
- Metodene inkluderte språkforbud i skolen, internatskoler og fornorsking av stedsnavn
- Konsekvensene merkes fortsatt: språktap, kulturelt brudd og traumer som går i arv

**Sentrale begreper:**
- **Assimilering**: Å innlemme en minoritetsgruppe i majoritetssamfunnet
- **Internatskoler**: Skoler der samiske barn ble sendt bort fra familie og kultur
- **Sannhets- og forsoningskommisjonen**: Offentlig gransking av fornorskingspolitikken (2018-2023)
- **Joik**: Tradisjonell samisk vokal uttrykksform som ble forbudt under fornorskingen

**Tips for eksamen:**
- Forklar årsaker (nasjonsbygging, sosialdarwinisme, sikkerhetspolitikk) og konsekvenser
- Vis forståelse for at virkningene fortsatt merkes i dag
- Knytt historien til forsoning og revitalisering i samtiden`,
    },
    {
      id: 'norsk-vg1-7-2-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **7.1 De samiske språkene** – Grunnleggende om samiske språk
- **7.3 Samiske språklige rettigheter** – Fra undertrykkelse til rettigheter
- **7.4 Nasjonale minoriteter** – Sammenlign med andre minoriteters erfaringer
- **3.3 Samisk litteratur** – Les litteratur som behandler fornorskingens konsekvenser`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Samiske språklige rettigheter
// ============================================================================

export const CHAPTER_NORSK_VG1_7_3: TextbookChapter = {
  id: 'norsk-vg1-7-3',
  courseId: 'norsk-vg1',
  chapterNumber: '7.3',
  title: 'Samiske språklige rettigheter',
  description: 'Lær om lover og rettigheter som beskytter samisk språk i dag.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for språkpolitikk og språklige rettigheter i Norge',
    'reflektere over forholdet mellom språk, makt og identitet',
  ],
  content: [
    {
      id: 'norsk-vg1-7-3-intro',
      type: 'text',
      content: `## Fra undertrykkelse til rettigheter

Etter over 100 år med fornorskingspolitikk har situasjonen for samisk språk endret seg dramatisk. I dag har samisk en rekke lovfestede rettigheter, og staten har ansvar for å bevare og utvikle samisk språk.

**Vendepunkter:**
- 1988: Sameparagrafen i Grunnloven
- 1989: Opprettelse av Sametinget
- 1990: Sameloven med språkregler
- 2021: Ny språklov styrker samisk

**Fra forbud til rettigheter:**
Utviklingen viser hvordan politikk kan endre seg. Det som var forbudt for noen tiår siden, er nå beskyttet av loven.

**I dette kapittelet lærer du:**
- Om sameloven og språkforvaltningsområder
- Om samiske rettigheter i skole og offentlighet
- Om samisk i medier og på internett
- Om utfordringer og muligheter fremover`,
    },
    {
      id: 'norsk-vg1-7-3-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Sameloven** | Lov som regulerer samiske rettigheter |
| **Språkforvaltningsområdet** | Kommuner der samisk og norsk er likestilt |
| **Sameparagrafen** | Grunnlovsbestemmelsen om samisk språk og kultur |
| **Språklige rettigheter** | Retten til å bruke eget språk i offentlige sammenhenger |
| **Språkrev** | Område der et språk er i aktiv bruk |
| **Språknøytral** | Uten preferanse for et bestemt språk |
| **Minoritetsspråkpakten** | Europaråds-avtale om minoritetsspråk |
| **ILO-konvensjon 169** | Internasjonal avtale om urfolks rettigheter |`,
    },
    {
      id: 'norsk-vg1-7-3-def-1',
      type: 'definition',
      title: 'Grunnloven og sameloven',
      content: `**Grunnlovens sameparagraf (§ 108):**

"Det påligger statens myndigheter å legge forholdene til rette for at den samiske folkegruppe kan sikre og utvikle sitt språk, sin kultur og sitt samfunnsliv."

**Hva betyr dette?**
- Staten har PLIKT til å støtte samisk språk
- Samisk språk og kultur har grunnlovsvern
- Samene har rett til å utvikle sitt samfunnsliv

**Sameloven (1987):**
Gir konkrete rettigheter:
- Rett til å bruke samisk i kontakt med offentlige myndigheter
- Rett til svar på samisk i forvaltningsområdet
- Rett til samiskopplæring i skolen
- Rett til samiske stedsnavn

**Språkforvaltningsområdet:**
Kommuner der samisk og norsk er likestilte:
- Kautokeino, Karasjok, Tana, Nesseby, Porsanger
- Kåfjord, Lavangen, Tysfjord
- Snåsa, Røyrvik, Hattfjelldal
- Flere kan søke om å bli del av området

**I disse kommunene har du rett til å bruke samisk i alle offentlige sammenhenger.**`,
    },
    {
      id: 'norsk-vg1-7-3-def-2',
      type: 'definition',
      title: 'Samisk i skolen',
      content: `**Opplæringsloven gir rettigheter:**

**I samiske distrikt:**
- Samisk som førstespråk i grunnskolen
- Undervisning i og på samisk
- Samisk som hovedspråk i barnehagen

**Utenfor samiske distrikt:**
- Rett til opplæring i samisk hvis eleven ønsker det
- Gjelder uansett hvor i landet du bor
- Kan gis som fjernundervisning

**Praktiske utfordringer:**
- Mangel på samisktalende lærere
- Få læremidler på samisk
- Lange avstander til andre samiske elever
- Fjernundervisning kan være vanskelig

**Samisk videregående:**
- Samisk videregående skole i Karasjok og Kautokeino
- Undervisning på samisk
- Kombinerer akademisk og tradisjonell kunnskap

**Samiskkurs for voksne:**
- Voksne som mistet språket kan få gratis opplæring
- Språksentre tilbyr kurs
- Apper og nettressurser finnes

**Revitalisering i skolen:**
Språkbad og språkreir er metoder der barn lærer samisk gjennom lek og daglig bruk, ikke bare som fag.`,
    },
    {
      id: 'norsk-vg1-7-3-image-revitalisering',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-7-3-revitalisering.png',
      alt: 'Illustrasjon av språkrevitalisering med språkbad, språkreir og generasjonsoverføring',
      caption: 'Språkrevitalisering gir samisk språk en fremtid',
    },
    {
      id: 'norsk-vg1-7-3-image-samisk-opplaering',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-7-3-samisk-opplaering.png',
      alt: 'Oversikt over rettigheter til samisk opplæring i norsk skole',
      caption: 'Alle elever i Norge har rett til opplæring i samisk',
    },
    {
      id: 'norsk-vg1-7-3-def-3',
      type: 'definition',
      title: 'Samisk i medier og samfunn',
      content: `**Samisk i medier:**

**NRK Sápmi:**
- Nyheter på nordsamisk daglig
- Radioprogrammer på alle tre samiske språk
- TV-programmer og nettinnhold
- Barneprogram på samisk

**Aviser:**
- Ávvir (dagsavis på nordsamisk)
- Ságat (norskspråklig avis om samiske saker)
- Nuorttanaste (sørsamisk)

**Samisk på internett:**
- Samisk på Facebook, Instagram, TikTok
- Wikipedia på nordsamisk
- Oversettelse i Google og Microsoft
- Samisk tastatur på alle enheter

**Samiske stedsnavn:**
- Stedsnavnloven beskytter samiske navn
- Skilting på både norsk og samisk
- Samiske navn på kart
- Økt synlighet de siste årene

**Samisk i offentligheten:**
- Samiske farger og flagg 6. februar (samefolkets dag)
- Samisk i Stortinget
- Økt synlighet i nasjonale arrangementer
- Samisk i offentlige bygg og institusjoner`,
    },
    {
      id: 'norsk-vg1-7-3-def-4',
      type: 'definition',
      title: 'Utfordringer og muligheter',
      content: `**Utfordringer for samisk språk i dag:**

**Strukturelle:**
- For få lærere
- Mangel på læremidler
- Vanskelig å bruke samisk i hverdagen
- Norsk dominerer

**Holdninger:**
- Fortsatt noe stigma
- Manglende kunnskap i majoritetsbefolkningen
- Samisk kan føles "unyttig"

**Praktiske:**
- Få samisktalende i mange områder
- Digitale verktøy mangler
- Vanskelig å bruke i jobb og utdanning

**Muligheter og positive trender:**

**Økt interesse:**
- Flere vil lære samisk
- Stolthet over samisk identitet
- "Samisk er kult" blant unge

**Teknologi:**
- Samisk på Duolingo (kommer/under utvikling)
- Talesyntese og oversettelsesverktøy
- Samisk i smart-teknologi

**Revitalisering:**
- Språkreir gir resultater
- Voksne lærer tilbake språket
- Nye generasjoner vokser opp med samisk

**Det tar tid å rette opp 100 års fornorsking, men utviklingen går i riktig retning.**`,
    },
    {
      id: 'norsk-vg1-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmål om samiske språkrettigheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva sier Grunnlovens § 108 om samisk?',
            solution: 'Staten har plikt til å legge til rette for at samene kan sikre og utvikle sitt språk, kultur og samfunnsliv.',
          },
          {
            label: 'b',
            task: 'Hva er språkforvaltningsområdet?',
            solution: 'Kommuner der samisk og norsk er likestilte og du har rett til å bruke samisk i offentlige tjenester.',
          },
          {
            label: 'c',
            task: 'Hvilke rettigheter har elever til samiskopplæring?',
            solution: 'Alle elever i Norge har rett til opplæring i samisk hvis de ønsker det, uansett hvor de bor.',
          },
        ],
        solution: 'Samisk har sterkt lovvern i Norge etter Grunnloven og sameloven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Dine rettigheter',
      problem: 'Hvilke rettigheter har du hvis du vil lære eller bruke samisk?',
      solution: `**Dine samiske språkrettigheter:**

**Som elev:**
- Du har rett til opplæring i samisk uansett hvor du bor
- Du kan velge samisk som valgfag
- Du kan ta eksamen i samisk

**I offentlige tjenester (i forvaltningsområdet):**
- Rett til å henvende deg på samisk
- Rett til svar på samisk
- Rett til tolk hvis nødvendig

**I retten:**
- Rett til å bruke samisk i rettssaker
- Rett til tolk

**I helsevesenet:**
- Rett til informasjon du forstår
- SANKS (Samisk nasjonalt kompetansesenter) tilbyr helsetjenester

**Som voksen:**
- Rett til gratis samiskopplæring (for de som mistet språket)
- Språksentre tilbyr kurs

**Hvordan bruke rettighetene:**
1. Kontakt skolen din om samiskopplæring
2. Kontakt kommunen om tjenester på samisk
3. Besøk Sametingets nettsider for informasjon
4. Bruk språksenteret i din region`,
    },
    {
      id: 'norsk-vg1-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk samisk i medier.',
        subTasks: [
          {
            label: 'a',
            task: 'Besøk NRK Sápmis nettsider. Hva slags innhold finner du der?',
            solution: 'Nyheter, radio, TV-programmer, kulturstoff, barneinnhold - mye på samisk.',
          },
          {
            label: 'b',
            task: 'Hvorfor er samiske medier viktige for språkbevaring?',
            solution: 'De gir folk mulighet til å bruke og høre samisk daglig, viser at samisk er et moderne språk, og styrker identitet.',
          },
        ],
        hints: ['Gå til nrk.no/sapmi', 'Tenk på hva medier betyr for språk'],
        solution: 'Medier på samisk er avgjørende for å holde språket levende og relevant.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft forholdet mellom rettigheter og praksis.',
        subTasks: [
          {
            label: 'a',
            task: 'Selv om elever har rett til samiskopplæring, er det ikke alltid lett å få. Hvorfor?',
            solution: 'Mangel på lærere, få læremidler, lange avstander, fjernundervisning kan være utfordrende.',
          },
          {
            label: 'b',
            task: 'Hva kan gjøres for å lukke gapet mellom rettigheter og praksis?',
            solution: 'Utdanne flere lærere, utvikle digitale læremidler, mer ressurser, bedre fjernundervisningsløsninger.',
          },
        ],
        hints: ['Tenk på praktiske hindringer', 'Tenk på hva som trengs for at rettigheter skal fungere'],
        solution: 'Rettigheter på papiret må følges opp med ressurser for å fungere i praksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-3-example-2',
      type: 'example',
      title: 'Eksempel: Sprakrevitalisering i praksis - sprakreir',
      content: `**Oppgave/Situasjon:**
Hvordan fungerer sprakreir (sprakbad) som metode for a redde truede sprak?

**Hva er et sprakreir?**
Et sprakreir er en barnehage eller barnegruppe der all kommunikasjon foregar pa det truede spraket - i dette tilfellet samisk. Barna "bades" i spraket gjennom lek, sang og daglige aktiviteter.

**Hvordan fungerer det?**

**Maorimodellen fra New Zealand:**
- Utviklet pa 1980-tallet for a redde maorisprak
- Eldre som kunne spraket ble koblet med barn
- Spraket ble brukt i alle situasjoner
- Stor suksess - inspirerte mange land

**Samiske sprakreir i Norge:**
- Finnes i flere kommuner
- Voksne snakker KUN samisk med barna
- Barna plukker opp spraket naturlig
- Ogsa for barn uten samisk hjemme

**Eksempel pa en dag i sprakreir:**
- Morgensamling med samisk sang
- Frokost med samtale pa samisk
- Utelek med samiske navn pa alt
- Eventyr og fortellinger pa samisk
- Lunsj, hvile - alt pa samisk

**Resultater:**
- Barn blir flytende i samisk
- De overforer spraket til søsken og foreldre
- Skaper nye generasjoner med spraktalere
- Øker stolthet og identitetsfølelse

**Utfordringer:**
- Krever voksne som behersker spraket godt
- Dyrt a drifte
- Geografisk begrenset

**Refleksjon:**
Sprakreir viser at det er mulig a snu sprakdød. Nar barn lærer spraket naturlig, far spraket en fremtid.`,
    },
    {
      id: 'norsk-vg1-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign samisk med andre minoritetsspråk i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke andre minoritetsspråk har rettigheter i Norge?',
            solution: 'Kvensk, romanes, romani, norsk tegnspråk har status som nasjonale minoritetsspråk.',
          },
          {
            label: 'b',
            task: 'Hvorfor har samisk sterkere rettigheter enn andre minoritetsspråk?',
            solution: 'Samer er urfolk med særskilte rettigheter etter internasjonal lov, og har lengst historie i landet.',
          },
        ],
        hints: ['Søk på nasjonale minoritetsspråk', 'Hva er forskjellen på urfolk og minoritet?'],
        solution: 'Samisk har særstilling som urfolksspråk, men andre minoritetsspråk har også vern.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva definerer et urfolk ifølge internasjonal lov?',
        options: [
          { id: 'a', text: 'Et folk som bor i et fattig land', isCorrect: false },
          { id: 'b', text: 'Et folk som levde i et område før kolonisering eller statsdannelse, og som har beholdt egne kulturelle og sosiale institusjoner', isCorrect: true },
          { id: 'c', text: 'Et folk som har et eget skriftspråk', isCorrect: false },
          { id: 'd', text: 'Et folk som er i flertall i et land', isCorrect: false },
        ],
        solution: 'Urfolk er folkegrupper som levde i et område før det ble kolonisert eller innlemmet i en stat, og som har bevart egne kulturelle, sosiale og politiske institusjoner.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke samiske rettigheter er beskyttet i norsk lov?',
        options: [
          { id: 'a', text: 'Bare rett til å snakke samisk hjemme', isCorrect: false },
          { id: 'b', text: 'Bare rett til samisk undervisning i Finnmark', isCorrect: false },
          { id: 'c', text: 'Rett til samiskopplæring over hele landet, bruk av samisk i offentlige tjenester i forvaltningsområdet, og grunnlovsvern for samisk språk og kultur', isCorrect: true },
          { id: 'd', text: 'Samisk har ingen lovfestede rettigheter', isCorrect: false },
        ],
        solution: 'Samisk har omfattende lovfestede rettigheter gjennom Grunnloven, sameloven og opplæringsloven, inkludert rett til opplæring over hele landet og rett til bruk i offentlige tjenester.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign to urfolks kulturuttrykk.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et urfolk utenfor Skandinavia (f.eks. maori, inuitter, aboriginere, mapuche) og beskriv et viktig kulturuttrykk.',
            solution: 'Beskriv kulturuttrykket og dets betydning for folkegruppen (f.eks. haka for maori, totemkunst for urfolk i Canada).',
          },
          {
            label: 'b',
            task: 'Sammenlign dette kulturuttrykket med joik eller en annen samisk tradisjon.',
            solution: 'Identifiser likheter (f.eks. tilknytning til natur, muntlig tradisjon, identitetsuttrykk) og forskjeller.',
          },
          {
            label: 'c',
            task: 'Hva har disse urfolkene til felles når det gjelder kulturell overlevelse?',
            solution: 'Felles trekk kan inkludere: kamp mot kolonialisering, tap og revitalisering av språk, sterk naturtilknytning, muntlig tradisjon.',
          },
        ],
        solution: 'Sammenligningen bør vise forståelse for urfolksperspektiver og kulturell motstandskraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser fremstillingen av samer i norske medier.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn to eksempler på fremstilling av samisk kultur i norske medier (TV, film, nyheter, reklame).',
            solution: 'Beskriv eksemplene og konteksten de opptrer i.',
          },
          {
            label: 'b',
            task: 'Er fremstillingene nyanserte eller stereotype? Begrunn svaret.',
            solution: 'Vurder om fremstillingene viser mangfoldet i samisk kultur eller forenkler/stereotypiserer.',
          },
          {
            label: 'c',
            task: 'Hvorfor er representasjon i media viktig for minoriteter?',
            solution: 'Representasjon påvirker selvbilde, identitet og majoritetens holdninger. Stereotypier kan forsterke fordommer.',
          },
        ],
        hints: ['Tenk på TV-serier, nyhetsreportasjer, reklame eller sosiale medier', 'Se etter både positive og negative eksempler'],
        solution: 'Analysen bør vise kritisk medieforståelse og bevissthet om representasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-7-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en tekst (200 ord) om hvordan du mener Norge bør jobbe med samisk språk fremover.',
        hints: ['Hva fungerer bra i dag?', 'Hva bør forbedres?', 'Hva kan du selv gjøre?', 'Hvordan kan teknologi hjelpe?'],
        solution: 'Teksten bør vise forståelse for utfordringer og muligheter, og komme med konkrete forslag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord): Kolonialisme og avkolonisering i en skandinavisk kontekst.',
        hints: [
          'Hva betyr kolonialisme i forhold til samene og andre urfolk i Skandinavia?',
          'Hvordan har den norske staten opptrådt som kolonimakt overfor samene?',
          'Hva innebærer avkolonisering i dag - politisk, kulturelt og mentalt?',
          'Bruk konkrete eksempler: fornorskingspolitikken, Sannhetskommisjonen, kulturrevitalisering',
          'Drøft hva avkolonisering betyr for majoritetsbefolkningen',
        ],
        solution: 'Essayet bør vise kunnskap om koloniale strukturer i Skandinavia, drøfte avkoloniseringsbegrepet nyansert og reflektere over hva dette betyr for Norge i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en presentasjon om et urfolks litteraturtradisjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et urfolk (samisk, maori, inuittisk, aboriginsk, eller annet) og undersøk deres litteraturtradisjon.',
            solution: 'Beskriv den historiske bakgrunnen: muntlig tradisjon, kolonial påvirkning, moderne litteratur.',
          },
          {
            label: 'b',
            task: 'Presenter minst to forfattere eller verk fra denne tradisjonen.',
            solution: 'Beskriv forfatterne, deres sentrale verk og temaer.',
          },
          {
            label: 'c',
            task: 'Drøft hvordan litteraturen forholder seg til urfolkets historie og identitet.',
            solution: 'Analyser hvordan litteraturen reflekterer kampen for kulturell overlevelse, identitet og rettigheter.',
          },
          {
            label: 'd',
            task: 'Presenter for klassen (muntlig eller skriftlig, 400-500 ord).',
            solution: 'Presentasjonen bør vise kunnskap, analytisk evne og evne til formidling.',
          },
        ],
        hints: [
          'Samisk: Nils-Aslak Valkeapää, Rauni Magga Lukkari',
          'Maori: Patricia Grace, Witi Ihimaera',
          'Aboriginsk: Sally Morgan, Kim Scott',
          'Inuittisk: Markoosie Patsauq',
        ],
        solution: 'Presentasjonen viser kunnskap om urfolkslitteratur og evne til å formidle kulturelle perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-3-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 7.3

**Hovedpunkter:**
- Samisk har grunnlovsvern gjennom Grunnlovens § 108 og omfattende rettigheter gjennom sameloven
- I språkforvaltningsområdet er samisk og norsk likestilte i offentlige tjenester
- Alle elever i Norge har rett til opplæring i samisk, uansett hvor de bor

**Sentrale begreper:**
- **Sameparagrafen**: Grunnlovens § 108 som gir staten plikt til å verne samisk språk og kultur
- **Språkforvaltningsområdet**: Kommuner der samisk og norsk er likestilte (bl.a. Kautokeino, Karasjok)
- **Språkbad/språkreir**: Metoder der barn lærer samisk gjennom lek og daglig bruk
- **NRK Sápmi**: NRKs samiske redaksjon med nyheter og programmer på samisk

**Tips for eksamen:**
- Kjenn til de viktigste lovene og rettighetene (Grunnloven, sameloven, opplæringsloven)
- Drøft gapet mellom rettigheter på papiret og praktiske utfordringer
- Vis kunnskap om positive utviklinger og revitaliseringsarbeid`,
    },
    {
      id: 'norsk-vg1-7-3-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **7.1 De samiske språkene** – Grunnleggende om samiske språk
- **7.2 Fornorskingspolitikken** – Historisk bakgrunn for dagens rettigheter
- **7.4 Nasjonale minoriteter** – Se samiske rettigheter i sammenheng med andre minoriteter
- **4.1 Språk og identitet** – Forstå sammenhengen mellom språkrettigheter og identitet`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Nasjonale minoriteter
// ============================================================================

export const CHAPTER_NORSK_VG1_7_4: TextbookChapter = {
  id: 'norsk-vg1-7-4',
  courseId: 'norsk-vg1',
  chapterNumber: '7.4',
  title: 'Nasjonale minoriteter',
  description: 'Lær om kvensk, romani og andre nasjonale minoritetsspråk i Norge.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for språklig mangfold i Norge',
    'reflektere over forholdet mellom språk, identitet og kulturarv',
    'analysere hvordan språkpolitikk påvirker minoriteter',
  ],
  content: [
    {
      id: 'norsk-vg1-7-4-intro',
      type: 'text',
      content: `## Hva er nasjonale minoriteter?

Norge har fem offisielt anerkjente nasjonale minoriteter. Disse gruppene har en lang historie i Norge og har ofte vært utsatt for diskriminering og assimileringspolitikk.

**De fem nasjonale minoritetene:**
- Kvener/norskfinner
- Rom (sigøynere)
- Romanifolket/tatere
- Skogfinner
- Jøder

**Hva skiller nasjonale minoriteter fra andre minoriteter?**
- Lang historisk tilknytning til Norge (minst 100 år)
- Egen kultur, språk og/eller religion
- Anerkjent av staten som nasjonal minoritet
- Beskyttet av Europarådets rammekonvensjon for nasjonale minoriteter

**Viktig:** Nasjonale minoriteter er ikke det samme som urfolk. Samene er Norges eneste urfolk og har en annen juridisk status.

**I dette kapittelet lærer du om:**
- Hver av de fem nasjonale minoritetene
- Deres språk og kultur
- Fornorskingspolitikk og diskriminering
- Språklige rettigheter og revitalisering`,
    },
    {
      id: 'norsk-vg1-7-4-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Nasjonal minoritet** | Gruppe med lang historie i et land og egen kultur |
| **Kvener** | Finsk-talende minoritet i Nord-Norge |
| **Rom** | Folkegruppe med opprinnelse i India (sigøynere) |
| **Romani** | Språket til romanifolket/tatere |
| **Skogfinner** | Etterkommere av finske innvandrere på Østlandet |
| **Rammekonvensjonen** | Europarådets avtale om nasjonale minoriteters rettigheter |
| **Tatertid** | Perioden da tatere ble tvangssterilisert og diskriminert |
| **Minoritetsspråk** | Språk som snakkes av en minoritet i et land |`,
    },
    {
      id: 'norsk-vg1-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmål om nasjonale minoriteter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke fem grupper er anerkjent som nasjonale minoriteter i Norge?',
            solution: 'Kvener/norskfinner, rom, romanifolket/tatere, skogfinner og jøder.',
          },
          {
            label: 'b',
            task: 'Hva skiller en nasjonal minoritet fra andre minoriteter?',
            solution: 'Lang historisk tilknytning til landet (minst 100 år), egen kultur/språk/religion, og offisiell anerkjennelse.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen mellom nasjonale minoriteter og urfolk?',
            solution: 'Urfolk (samer) har en særlig tilknytning til landområder fra før staten ble etablert, mens nasjonale minoriteter innvandret senere men har lang historie.',
          },
        ],
        solution: 'De fem nasjonale minoritetene har ulik bakgrunn men felles status og rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-4-image-nasjonale-minoriteter',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-7-4-nasjonale-minoriteter.png',
      alt: 'Oversikt over de fem nasjonale minoritetene i Norge: kvener, rom, romanifolket, skogfinner og jøder',
      caption: 'Norges fem nasjonale minoriteter',
    },
    {
      id: 'norsk-vg1-7-4-image-minoritetsrettigheter',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-7-4-minoritetsrettigheter.png',
      alt: 'Diagram som viser rettigheter for nasjonale minoriteter i Norge',
      caption: 'Nasjonale minoriteter har lovfestede rettigheter',
    },
    {
      id: 'norsk-vg1-7-4-def-1',
      type: 'definition',
      title: 'Kvener og kvensk språk',
      content: `**Hvem er kvenene?**

Kvenene er etterkommere av finner som innvandret til Nord-Norge fra 1500-tallet og fremover. De bosatte seg særlig i Troms og Finnmark.

**Kvensk språk:**
- Nært beslektet med finsk, men et eget språk
- Anerkjent som eget minoritetsspråk i Norge i 2005
- Ca. 2000-8000 snakker kvensk i dag
- Truet språk - de fleste talere er eldre

**Historisk bakgrunn:**
- Kvenene kom som arbeidsfolk og nybyggere
- Bidro til jordbruk, fiske og gruvedrift
- Ble utsatt for hard fornorskingspolitikk fra 1850-tallet
- Mange mistet språket gjennom skolen

**Kvensk kultur:**
- Tradisjonell musikk og sang
- Båtbygging og fiske
- Byggeskikker
- Tradisjonelt håndverk

**Revitalisering i dag:**
- Kvensk språksenter (Kvensk institutt) i Børselv
- Kvenskundervisning i noen skoler
- Kvensk radio og aviser
- Språkkurs for voksne

**Kvenene har bidratt sterkt til utviklingen av Nord-Norge og har en rik kulturarv som nå arbeides for å bevare.**`,
    },
    {
      id: 'norsk-vg1-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket språk snakker kvenene tradisjonelt?',
        options: [
          { id: 'a', text: 'Samisk', isCorrect: false },
          { id: 'b', text: 'Kvensk, et språk beslektet med finsk', isCorrect: true },
          { id: 'c', text: 'Russisk', isCorrect: false },
          { id: 'd', text: 'Svensk', isCorrect: false },
        ],
        solution: 'Kvensk er nært beslektet med finsk, men ble anerkjent som et eget språk i Norge i 2005. Det har utviklet seg selvstendig i Norge gjennom flere hundre år.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-4-def-2',
      type: 'definition',
      title: 'Rom og romani',
      content: `**Hvem er rom?**

Rom (flertall: roma) er en folkegruppe med opprinnelse i India som kom til Europa på 1300-tallet. De har vært i Norge siden 1800-tallet.

**Romanés (romani chib):**
- Språket til romfolket
- Indo-europeisk språk med røtter i Sanskrit
- Ulike dialekter i ulike land
- Muntlig tradisjon, lite skriftlig materiale

**Historisk bakgrunn:**
- Rom ble nektet innreise til Norge 1927-1956
- De som var i Norge ble internert under krigen
- Mange norske rom ble drept i Holocaust
- Diskriminering fortsatte etter krigen

**Kultur og tradisjoner:**
- Sterke familiebånd
- Muntlig overlevering av kultur
- Musikk og dans
- Håndverk og handel

**Situasjonen i dag:**
- Ca. 500-700 rom i Norge
- Mange lever fortsatt med diskriminering
- Arbeid for anerkjennelse og rettigheter
- Økt fokus på romsk historie i skolen

**Rom i Norge har en smertefull historie preget av ekskludering og forfølgelse, men arbeider i dag for synlighet og anerkjennelse.**`,
    },
    {
      id: 'norsk-vg1-7-4-def-3',
      type: 'definition',
      title: 'Romanifolket/tatere og romanés',
      content: `**Hvem er romanifolket?**

Romanifolket, også kalt tatere, er en egen folkegruppe som har vært i Norge siden 1500-tallet. De er ikke det samme som rom, selv om navnene kan forveksles.

**Romanés (skandoromani):**
- Eget språk med norsk grammatikk og romanivokabular
- Tradisjonelt hemmelig språk
- Få talere igjen
- Kritisk truet språk

**Tradisjonelle næringer:**
- Hesthandel
- Blikkenslagerarbeid og kjeleflikkeri
- Kurvmaking
- Handel og byttehandel
- Musikktradisjoner

**Fornorskingspolitikken:**
Romanifolket ble utsatt for ekstrem undertrykkelse:
- Tvangssterilisering fram til 1977
- Barn ble tatt fra foreldre
- Tvungen bofasthet
- Forbud mot reising og tradisjonelle yrker
- Norsk misjon blant hjemløse drev leirer

**I dag:**
- Anerkjent som nasjonal minoritet i 1999
- Taternes landsforening arbeider for rettigheter
- Økt oppmerksomhet om historisk urett
- Revitalisering av kultur og språk

**Romanifolkets historie er blant de mørkeste kapitlene i norsk minoritetspolitikk.**`,
    },
    {
      id: 'norsk-vg1-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom rom og romanifolket/tatere?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell - det er det samme folket', isCorrect: false },
          { id: 'b', text: 'Rom kom til Norge på 1800-tallet, romanifolket har vært her siden 1500-tallet. De har ulike språk og kulturer.', isCorrect: true },
          { id: 'c', text: 'Rom bor i byer, romanifolket bor på landet', isCorrect: false },
          { id: 'd', text: 'Romanifolket er fra Romania, rom er fra India', isCorrect: false },
        ],
        solution: 'Rom og romanifolket er to forskjellige folkegrupper med ulik historie og ulike språk (romanés for rom, skandoromani for romanifolket). Begge har opprinnelse i India, men kom til Skandinavia på ulike tidspunkter.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-4-def-4',
      type: 'definition',
      title: 'Skogfinner og jøder',
      content: `**Skogfinnene:**

**Hvem er de?**
- Etterkommere av finske innvandrere på 1600-tallet
- Bosatte seg i skogområder i Hedmark, Akershus og Värmland
- Spesialister på svedjebruk (bråtebrenning)

**Språk og kultur:**
- Opprinnelig finsktalende
- Finsk språk er tapt - ingen talere igjen
- Bevart kulturarv: bygninger, stedsnavn, tradisjoner
- Finnskogdagene feirer kulturen årlig

**Skogfinsk kulturminneområde:**
- Utpekt som nasjonalt kulturminneområde
- Bevaring av bygninger og kulturlandskap
- Dokumentasjon av historie og tradisjoner

---

**Jødene i Norge:**

**Historisk bakgrunn:**
- Jøder var forbudt adgang til Norge 1687-1851
- Jødeparagrafen i Grunnloven av 1814
- Jødisk innvandring fra 1850-tallet
- Holocaust: 773 norske jøder ble deportert og drept

**Språk:**
- Jiddisk var tradisjonelt språk
- Hebraisk i religiøs sammenheng
- Norsk er hovedspråk i dag

**I dag:**
- Ca. 1500 jøder i Norge
- Synagoger i Oslo og Trondheim
- Det mosaiske trossamfund
- Jødisk museum i Oslo og Trondheim

**Begge grupper representerer viktige deler av norsk kulturhistorie og mangfold.**`,
    },
    {
      id: 'norsk-vg1-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjedde med skogfinnenes språk?',
        options: [
          { id: 'a', text: 'Det er et levende språk med mange talere', isCorrect: false },
          { id: 'b', text: 'Finsk språk blant skogfinnene døde ut, men kulturarven bevares', isCorrect: true },
          { id: 'c', text: 'Det utviklet seg til et eget språk som kalles skogfinsk', isCorrect: false },
          { id: 'd', text: 'Det ble forbudt og er nå hemmelig', isCorrect: false },
        ],
        solution: 'Skogfinnene mistet finsk språk gjennom assimilering over tid. I dag er det ingen morsmålstalere igjen, men kulturarven bevares gjennom bygninger, stedsnavn og tradisjoner.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-4-def-5',
      type: 'definition',
      title: 'Språklige rettigheter og revitalisering',
      content: `**Rettslig rammeverk:**

**Europarådets rammekonvensjon (1998):**
- Norge forpliktet seg til å beskytte nasjonale minoriteter
- Rett til å bevare kultur, språk og identitet
- Vern mot diskriminering
- Krav om deltakelse i beslutninger

**Europeisk charter for regions- eller minoritetsspråk:**
- Kvensk har høyeste beskyttelsesnivå (del III)
- Romani og romanes har lavere beskyttelse (del II)

**Språkloven (2021):**
- Anerkjenner de nasjonale minoritetsspråkene
- Staten har ansvar for å verne og fremme dem
- Kvensk nevnes eksplisitt

**Utfordringer for språkbevaring:**
- Få talere, mange eldre
- Manglende opplæringstilbud
- Lite skriftlig materiale
- Stigma og skam fra fornorskingstiden

**Revitaliseringstiltak:**
- Språksentre (særlig for kvensk)
- Dokumentasjonsarbeid
- Språkkurs for voksne
- Kulturarrangementer
- Digitale ressurser

**Språkrevitalisering krever både ressurser fra staten og engasjement fra minoritetssamfunnene selv.**`,
    },
    {
      id: 'norsk-vg1-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser truslene mot minoritetsspråkene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke språk blant de nasjonale minoritetene er mest truet?',
            solution: 'Romanés (taterspråk) er kritisk truet med svært få talere. Skogfinsk er allerede utdødd. Kvensk er truet men har flere talere.',
          },
          {
            label: 'b',
            task: 'Hva er årsakene til språkdøden?',
            solution: 'Fornorskingspolitikk, stigma, manglende overføring mellom generasjoner, få talere, lite institusjonell støtte.',
          },
          {
            label: 'c',
            task: 'Hva kan gjøres for å bevare truede språk?',
            solution: 'Dokumentasjon, opplæringstilbud, språkkurs, digitale ressurser, synliggjøring, økonomisk støtte.',
          },
        ],
        hints: ['Tenk på hva som får et språk til å overleve', 'Se på eksempler på vellykket revitalisering'],
        solution: 'Språkbevaring krever aktive tiltak fra både staten og minoritetssamfunnene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft betydningen av språk for identitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er språk viktig for en minoritetsgruppes identitet?',
            solution: 'Språk bærer kultur, historie og verdenssyn. Det knytter generasjoner sammen og skaper tilhørighet.',
          },
          {
            label: 'b',
            task: 'Hva skjer med en kultur når språket dør ut?',
            solution: 'Mye kunnskap og kulturelle uttrykk går tapt. Identitetsfølelsen kan svekkes. Men kultur kan leve videre på andre måter.',
          },
        ],
        hints: ['Tenk på hva som overføres gjennom språk', 'Tenk på din egen dialekt/språk og hva det betyr for deg'],
        solution: 'Språk og identitet er nært knyttet sammen, men identitet kan også uttrykkes på andre måter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av minoritetsspråkenes status',
      problem: 'Sammenlign situasjonen for kvensk og romanés i dag.',
      solution: `**Kvensk:**

**Antall talere:** Ca. 2000-8000
**Anerkjennelse:** Eget språk fra 2005
**Opplæring:** Finnes i noen skoler i Nord-Norge
**Ressurser:** Kvensk institutt, ordbøker, læremidler
**Medier:** Noe radio, aviser

**Styrker:** Relativt mange talere, institusjonell støtte, synlig revitalisering
**Utfordringer:** De fleste talere er eldre, lite bruk blant unge

---

**Romanés (taterspråk):**

**Antall talere:** Svært få, kanskje under 100
**Anerkjennelse:** Anerkjent som minoritetsspråk
**Opplæring:** Ingen formell opplæring
**Ressurser:** Lite dokumentasjon, få ordbøker
**Medier:** Ingen

**Styrker:** Økende interesse for dokumentasjon
**Utfordringer:** Kritisk truet, tradisjonelt hemmelig språk, lite skriftlig tradisjon

---

**Konklusjon:**
Kvensk har bedre forutsetninger for revitalisering på grunn av flere talere og mer institusjonell støtte. Romanés er i en mer kritisk situasjon og trenger umiddelbare dokumentasjonstiltak.`,
    },
    {
      id: 'norsk-vg1-7-4-example-2',
      type: 'example',
      title: 'Eksempel: Kvensk kultur og identitet i dag',
      content: `**Oppgave/Situasjon:**
Hvordan arbeider kvener i dag for a bevare og synliggjøre sin kultur?

**Kven - hvem er de?**
Kvenene er etterkommere av finske innvandrere som kom til Nord-Norge fra 1500-tallet. De har egen kultur, tradisjoner og sprak (kvensk), og ble anerkjent som nasjonal minoritet i 1998.

**Revitalisering av kvensk sprak:**

**Kvensk institutt (Kvænangen):**
- Utvikler kvensk skriftsprak
- Lager ordbøker og læremidler
- Tilbyr sprakkurs for voksne
- Dokumenterer kvensk kultur

**Sprakopplæring:**
- Kvensk tilbys i noen skoler i Troms og Finnmark
- Utfordring: fa kvalifiserte lærere
- Nettbaserte læremidler utvikles

**Kulturelle arrangementer:**

**Paaskifestivalen i Vadsø:**
- Feirer kvensk kultur
- Musikk, mat, kunst
- Samler kvener fra hele regionen

**Kvensk musikk:**
- Tradisjonelle sanger bevares
- Moderne artister inkorporerer kvenske elementer
- Ruijan Kaiku (kvensk kor)

**Kvensk i medier:**
- Eira - kvensk nettavis
- NRK Kvensk (radiosendinger)
- Podkaster pa kvensk

**Identitet og stolthet:**
Mange som vokste opp med fornorsking skjulte sin kvenske bakgrunn. I dag ser vi:
- Økt interesse for kvensk historie blant yngre
- Stolthet over a være kven
- Slektsforskning og dokumentasjon
- Kvenske stedsnavn tas tilbake

**Refleksjon:**
Kvensk revitalisering viser at det er mulig a gjenopplive en kultur som var pa vei til a forsvinne. Det krever institusjonell støtte, engasjerte ildsjeler og vilje fra samfunnet.`,
    },
    {
      id: 'norsk-vg1-7-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk fornorskingspolitikken overfor nasjonale minoriteter.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv hvordan fornorskingspolitikken rammet kvenene.',
            solution: 'Forbud mot kvensk i skolen, press om å ta norske navn, undertrykkelse av kvensk kultur og identitet.',
          },
          {
            label: 'b',
            task: 'Hva var de verste overgrepene mot romanifolket/taterne?',
            solution: 'Tvangssterilisering, barn tatt fra foreldre, tvangsplassering på leirer, forbud mot tradisjonelle levemåter.',
          },
          {
            label: 'c',
            task: 'Hvordan påvirket Holocaust den jødiske minoriteten i Norge?',
            solution: '773 norske jøder ble deportert og drept. Det jødiske samfunnet ble nesten utslettet.',
          },
        ],
        hints: ['Se på perioden 1850-1980', 'Tenk på konsekvenser for språk, kultur og familier'],
        solution: 'Alle de nasjonale minoritetene ble rammet av diskriminering og assimileringspolitikk, men på ulike måter og i ulik grad.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-7-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en refleksjonstekst (300-400 ord) om nasjonale minoriteters plass i norsk historie og samfunn.',
        hints: [
          'Hva visste du om nasjonale minoriteter fra før?',
          'Hvorfor har du lært lite om dette i skolen tidligere?',
          'Hva betyr anerkjennelse for en minoritetsgruppe?',
          'Hvordan kan kunnskap om minoriteter bidra til et mer inkluderende samfunn?',
        ],
        solution: 'Teksten bør vise refleksjon over egen læring, forståelse for minoritetsperspektiver og tanker om hvordan samfunnet kan bli mer inkluderende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign behandlingen av ulike minoriteter i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er likheter i hvordan samer og kvener ble behandlet under fornorskingstiden?',
            solution: 'Begge ble utsatt for språkforbud i skolen, press om å ta norske navn, og undertrykkelse av kultur. Begge ble sett som "mindre utviklede" kulturer.',
          },
          {
            label: 'b',
            task: 'Hvorfor har samene oppnådd sterkere rettigheter enn de nasjonale minoritetene?',
            solution: 'Samene har status som urfolk med særlige rettigheter. De har Sametinget og grunnlovsbeskyttelse. Nasjonale minoriteter har ikke samme institusjonelle rammeverk.',
          },
          {
            label: 'c',
            task: 'Er det rettferdig at ulike minoriteter har ulike rettigheter? Drøft.',
            solution: 'Drøftingen bør vurdere både urfolksperspektivet og minoritetsperspektivet, og diskutere hva likeverd betyr i praksis.',
          },
        ],
        hints: ['Tenk på historisk tilknytning', 'Se på internasjonale konvensjoner', 'Vurder ulike perspektiver'],
        solution: 'Sammenligningen bør vise forståelse for ulike minoriteters situasjon og evne til nyansert drøfting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør et prosjekt om en nasjonal minoritet.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en av de fem nasjonale minoritetene og undersøk deres historie i Norge.',
            solution: 'Beskriv når de kom til Norge, hvor de bosatte seg, og hvordan de levde.',
          },
          {
            label: 'b',
            task: 'Undersøk hvordan minoriteten ble behandlet av myndighetene gjennom historien.',
            solution: 'Beskriv diskriminering, assimileringspolitikk og eventuelle overgrep.',
          },
          {
            label: 'c',
            task: 'Beskriv minoritetens situasjon i dag: språk, kultur, organisasjoner, utfordringer.',
            solution: 'Beskriv dagens situasjon med fokus på revitalisering og fremtidsutsikter.',
          },
          {
            label: 'd',
            task: 'Presenter prosjektet skriftlig (400-500 ord) eller muntlig for klassen.',
            solution: 'Presentasjonen bør vise kunnskap, kildebruk og evne til formidling.',
          },
        ],
        hints: [
          'Bruk kilden Nasjonale minoriteter (regjeringen.no)',
          'Se etter minoritetenes egne organisasjoner',
          'Bruk biblioteket og digitale arkiver',
        ],
        solution: 'Prosjektet viser evne til selvstendig research og formidling om minoritetshistorie.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-7-4-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 7.4

**Hovedpunkter:**
- Norge har fem nasjonale minoriteter: kvener, rom, romanifolk/tatere, skogfinner og jøder
- Nasjonale minoriteter har lang historisk tilknytning til Norge (minst 100 år) og egen kultur/språk
- Alle gruppene ble rammet av diskriminering, men på ulike måter og i ulik grad

**Sentrale begreper:**
- **Nasjonal minoritet**: Gruppe med lang historie i landet, egen kultur, og offisiell anerkjennelse
- **Kvensk**: Språk beslektet med finsk, snakkes i Nord-Norge
- **Romanés/romani**: Språkene til rom og romanifolket
- **Rammekonvensjonen**: Europarådets avtale om nasjonale minoriteters rettigheter

**Tips for eksamen:**
- Skill mellom nasjonale minoriteter og urfolk (samer)
- Kjenn til de fem minoritetene og deres særtrekk
- Vis forståelse for felles og ulike erfaringer med diskriminering og fornorsking`,
    },
    {
      id: 'norsk-vg1-7-4-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **7.1 De samiske språkene** – Sammenlign med urfolksspråkene
- **7.2 Fornorskingspolitikken** – Se felles historisk erfaring med samene
- **7.3 Samiske språklige rettigheter** – Sammenlign rettigheter mellom grupper
- **4.4 Språkmangfold i Norge** – Se minoritetsspråk i sammenheng med dialekter`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4: Kildekritikk og falske nyheter
// ============================================================================

export const CHAPTER_NORSK_VG1_6_4: TextbookChapter = {
  id: 'norsk-vg1-6-4',
  courseId: 'norsk-vg1',
  chapterNumber: '6.4',
  title: 'Kildekritikk og falske nyheter',
  description: 'Lær å avsløre falske nyheter og vurdere troverdigheten til digitale kilder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke kilder kritisk og selvstendig i egne tekster',
    'vurdere troverdigheten til ulike typer kilder og informasjon',
    'reflektere over hvordan tekster påvirker og påvirkes av samfunnet',
  ],
  content: [
    {
      id: 'norsk-vg1-6-4-intro',
      type: 'text',
      content: `## Hvorfor trenger vi kildekritikk?

I dag har alle tilgang til å publisere informasjon på internett. Det betyr at vi møter enorme mengder tekst, bilder og videoer hver dag - men ikke alt er sant eller til å stole på.

**Utfordringer i den digitale hverdagen:**
- Hvem som helst kan publisere hva som helst
- Informasjon spres raskt uten kvalitetskontroll
- Det kan være vanskelig å skille fakta fra fiksjon
- Algoritmer viser oss det vi allerede tror på

**Hva er kildekritikk?**
Kildekritikk handler om å vurdere informasjon kritisk:
- Hvem står bak informasjonen?
- Hva er formålet?
- Er innholdet sant og pålitelig?
- Kan jeg stole på denne kilden?

**Hvorfor er dette viktig?**
- For å ta gode beslutninger
- For å ikke spre usannheter
- For demokratiet og samfunnsdebatten
- For å beskytte oss mot manipulasjon

**Kildekritikk er en av de viktigste ferdighetene du kan lære i vår digitale tid. Det handler ikke om å være mistenksom mot alt, men om å tenke før du tror og deler.**`,
    },
    {
      id: 'norsk-vg1-6-4-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Falske nyheter** | Bevisst villedende informasjon presentert som nyheter |
| **Desinformasjon** | Falsk informasjon spredt med vilje for å villede |
| **Misinformasjon** | Feilaktig informasjon spredt uten ond hensikt |
| **Clickbait** | Sensasjonelle overskrifter som lokker til klikk |
| **Ekkokammer** | Miljø der man bare hører meninger man er enig i |
| **Algoritme** | Dataprogram som bestemmer hva du ser på nettet |
| **Faktasjekk** | Å verifisere påstander mot pålitelige kilder |
| **Kildevurdering** | Systematisk vurdering av kilders troverdighet |`,
    },
    {
      id: 'norsk-vg1-6-4-def-1',
      type: 'definition',
      title: 'Hva er falske nyheter?',
      content: `**Falske nyheter og desinformasjon**

"Falske nyheter" er et samlebegrep for ulike typer villedende innhold. Det er viktig å skille mellom ulike kategorier:

**Typer feilinformasjon:**

**1. Satire og parodi:**
- Humor som etterligner nyhetsformat
- Ikke ment å lure, men kan misforstås
- Eksempel: Humorsider som "The Onion" eller norske "Nansen"

**2. Villedende innhold:**
- Ekte informasjon brukt i feil kontekst
- Manipulerte overskrifter
- Selektiv sitering

**3. Feilinformasjon (misinformasjon):**
- Usann informasjon spredt av folk som tror det er sant
- Ofte delt i god tro
- Feil som spres videre

**4. Desinformasjon:**
- Bevisst falsk informasjon laget for å villede
- Ofte politisk motivert
- Kan være statlig propagandavirksomhet

**5. Propaganda:**
- Systematisk spredning av informasjon for å påvirke holdninger
- Kan inneholde sannheter, halvsannheter og løgner
- Ofte emosjonelt ladet

**6. Fabrikerte nyheter:**
- Helt oppdiktede historier presentert som nyheter
- Laget for å tjene penger (klikk) eller påvirke meninger
- Ofte sensasjonelle overskrifter

**Viktig:** Ikke all feil informasjon er bevisst løgn. Mange sprer feilinformasjon fordi de selv tror det er sant.`,
    },
    {
      id: 'norsk-vg1-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar sentrale begreper innen kildekritikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på feilinformasjon (misinformasjon) og desinformasjon?',
            solution: 'Feilinformasjon er usann informasjon som spres av folk som tror det er sant (uten ond hensikt). Desinformasjon er bevisst falsk informasjon laget for å villede.',
          },
          {
            label: 'b',
            task: 'Hva mener vi med et ekkokammer?',
            solution: 'Et ekkokammer er når vi bare eksponeres for meninger og informasjon som bekrefter det vi allerede tror, ofte forsterket av algoritmer og hvem vi følger i sosiale medier.',
          },
          {
            label: 'c',
            task: 'Hva betyr det å faktasjekke?',
            solution: 'Å faktasjekke betyr å undersøke om en påstand er sann ved å finne og vurdere pålitelige kilder, ofte ved å kryssjekke med flere uavhengige kilder.',
          },
        ],
        solution: 'Å kjenne fagbegrepene gjør deg bedre rustet til kritisk lesing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-ex-8',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse er det BESTE eksempelet på desinformasjon?',
        options: [
          { id: 'a', text: 'En satireavis som skriver en humoristisk artikkel om en politiker', isCorrect: false },
          { id: 'b', text: 'En bestemor som deler en artikkel hun tror er sann, men som er falsk', isCorrect: false },
          { id: 'c', text: 'En organisasjon som lager falske artikler for å påvirke et valg', isCorrect: true },
          { id: 'd', text: 'En journalist som gjør en faktafeil i en artikkel', isCorrect: false },
        ],
        solution: 'Desinformasjon kjennetegnes ved at det er bevisst falsk informasjon laget for å villede. Alternativ c er det eneste der noen med vilje skaper falskt innhold for å manipulere.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-4-def-2',
      type: 'definition',
      title: 'TONE-modellen for kildekritikk',
      content: `**TONE-modellen**

TONE er en enkel huskeregel for kildekritiske spørsmål:

**T - Troverdighet**
- Hvem er avsenderen?
- Er dette en anerkjent kilde?
- Har avsenderen kompetanse på området?
- Oppgir kilden sine kilder?
- Har nettstedet kontaktinformasjon og redaksjon?

**O - Objektivitet**
- Hva er formålet med teksten?
- Er fremstillingen balansert?
- Presenteres flere sider av saken?
- Er det skjulte interesser? (reklame, politikk)
- Brukes følelsesladet språk?

**N - Nøyaktighet**
- Er fakta korrekte og etterprøvbare?
- Brukes presise tall og kilder?
- Stemmer informasjonen med andre kilder?
- Er det skrivefeil eller tegn på slurv?

**E - Egnethet**
- Er kilden relevant for mitt formål?
- Er informasjonen oppdatert?
- Er kilden på riktig nivå?
- Passer den til oppgaven min?

**Andre viktige spørsmål:**
- Når ble dette publisert?
- Kan jeg finne originalkilden?
- Hvem tjener på at jeg tror dette?
- Hva sier andre kilder?

**Bruk TONE hver gang du vurderer en kilde - enten det er til skolearbeid eller når du leser nyheter.**`,
    },
    {
      id: 'norsk-vg1-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-ex-2',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står T for i TONE-modellen?',
        options: [
          { id: 'a', text: 'Tekst', isCorrect: false },
          { id: 'b', text: 'Troverdighet', isCorrect: true },
          { id: 'c', text: 'Tendens', isCorrect: false },
          { id: 'd', text: 'Tidsriktig', isCorrect: false },
        ],
        solution: 'T i TONE står for Troverdighet - vi vurderer om avsenderen er til å stole på og har kompetanse på området.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-ex-3',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk TONE-modellen til å vurdere en kilde.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en artikkel fra en nettavis eller et blogginnlegg om et tema du er interessert i.',
            solution: 'Velg en konkret tekst du kan analysere.',
          },
          {
            label: 'b',
            task: 'Vurder Troverdighet: Hvem er avsenderen? Har de kompetanse? Er det en anerkjent kilde?',
            solution: 'Undersøk forfatteren, nettstedet og eventuelle redaksjonelle retningslinjer.',
          },
          {
            label: 'c',
            task: 'Vurder Objektivitet: Hva er formålet? Er fremstillingen balansert? Er det skjulte interesser?',
            solution: 'Se etter tegn på forutinntatthet, reklame, politisk vinkling eller ensidige fremstillinger.',
          },
          {
            label: 'd',
            task: 'Vurder Nøyaktighet: Er fakta korrekte? Oppgis kilder? Stemmer det med andre kilder?',
            solution: 'Sjekk påstander mot andre kilder og se om kilder er oppgitt.',
          },
          {
            label: 'e',
            task: 'Gi en samlet vurdering: Er dette en kilde du kan stole på?',
            solution: 'Oppsummer styrker og svakheter og konkluder.',
          },
        ],
        solution: 'TONE-analysen bør vise systematisk kildevurdering med konkrete observasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-4-def-3',
      type: 'definition',
      title: 'Faktasjekk - slik gjør du det',
      content: `**Hvordan faktasjekke informasjon**

Når du møter påstander du er usikker på, kan du faktasjekke:

**Steg 1: Stopp opp**
- Ikke del videre før du har sjekket
- Sterke følelsesreaksjoner kan være et varsel
- "For godt til å være sant" er ofte nettopp det

**Steg 2: Søk etter originalkilden**
- Hvem sa dette først?
- Finnes det en primærkilde?
- Sjekk om sitater er korrekte

**Steg 3: Kryssjekk med flere kilder**
- Rapporterer andre medier det samme?
- Bruk anerkjente nyhetskilder
- Vær obs på at mange kan sitere samme (feil) kilde

**Steg 4: Bruk faktasjekkere**

**Norske faktasjekkere:**
- Faktisk.no - Norges største faktasjekktjeneste
- NRKs faktasjekk
- Avisenes egne faktasjekker

**Internasjonale:**
- Snopes.com
- FullFact.org
- PolitiFact

**Steg 5: Sjekk bilder og video**
- Omvendt bildesøk (Google Bilder, TinEye)
- Sjekk om bildet er gammelt eller fra annen kontekst
- Vær kritisk til videoer - de kan være manipulert

**Steg 6: Vurder ekspertkilder**
- Hva sier fagfolk på området?
- Sjekk fagfellevurdert forskning
- Vær kritisk til "eksperter" uten relevant kompetanse

**Husk: Det er bedre å bruke litt tid på å sjekke enn å spre feilinformasjon videre.**`,
    },
    {
      id: 'norsk-vg1-6-4-image-faktasjekk',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-6-4-faktasjekk.png',
      alt: 'Infografikk som viser stegene i faktasjekking: stopp opp, finn originalkilden, kryssjekk, bruk faktasjekkere, sjekk bilder',
      caption: 'Slik faktasjekker du informasjon: 1) Stopp opp og tenk, 2) Finn originalkilden, 3) Kryssjekk med flere kilder, 4) Bruk faktasjekkere som Faktisk.no, 5) Sjekk bilder med omvendt bildesøk.',
    },
    {
      id: 'norsk-vg1-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør en faktasjekk av en påstand.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en påstand fra sosiale medier, en artikkel eller noe noen har sagt som du er usikker på.',
            solution: 'Velg en konkret påstand som kan sjekkes.',
          },
          {
            label: 'b',
            task: 'Beskriv hvilke steg du tar for å faktasjekke påstanden.',
            solution: 'F.eks.: søk etter originalkilden, bruk faktasjekk-nettsteder, sjekk med ekspertkilder, kryssjekk med flere kilder.',
          },
          {
            label: 'c',
            task: 'Hva fant du ut? Var påstanden sann, delvis sann eller usann?',
            solution: 'Presenter funnene med henvisning til kildene du brukte.',
          },
        ],
        solution: 'Faktasjekken bør vise metodisk tilnærming og bruk av pålitelige kilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-ex-4',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en overskrift fra sosiale medier eller en tabloidavis.',
        hints: ['Hva lover overskriften?', 'Hvilke følelser appellerer den til?', 'Er det clickbait?', 'Hva må være sant for at overskriften skal stemme?'],
        solution: 'Analysen bør vise bevissthet om hvordan overskrifter brukes for å fange oppmerksomhet og noen ganger villede.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-4-def-4',
      type: 'definition',
      title: 'Algoritmer og ekkokammer',
      content: `**Hvordan algoritmer påvirker hva vi ser**

Når du bruker sosiale medier og søkemotorer, møter du ikke et tilfeldig utvalg av informasjon. Algoritmer bestemmer hva du ser.

**Hva er en algoritme?**
- En oppskrift som datamaskiner følger
- På sosiale medier: bestemmer hva som vises i feeden din
- Målet: holde deg på plattformen lengst mulig

**Filterbobler:**
- Algoritmer viser deg innhold du sannsynligvis liker
- Basert på hva du har klikket på før
- Resultat: du ser mer av det du allerede er enig i

**Ekkokammer:**
- Når du bare hører meninger som ligner dine egne
- Forsterkes av hvem du følger og er venner med
- Kan gi et skjevt bilde av virkeligheten

**Konsekvenser:**
- Vi kan tro at "alle" mener det samme som oss
- Ekstreme synspunkter kan forsterkes
- Vanskeligere å forstå andres perspektiver
- Polarisering i samfunnet

**Hvordan bryte ut av ekkokammeret:**
- Følg kilder med ulike perspektiver
- Les aviser og medier du vanligvis ikke leser
- Vær bevisst på at feeden din er kuratert
- Snakk med folk som mener andre ting enn deg
- Søk aktivt etter motargumenter

**Viralitet:**
Innhold som skaper sterke følelser (sinne, frykt, glede) spres lettere. Algoritmer fremmer ofte slikt innhold fordi det skaper engasjement - men det betyr ikke at det er sant eller viktig.

**Algoritmene er ikke onde, men de er heller ikke nøytrale. Vær bevisst på at det du ser er et utvalg - ikke hele bildet.**`,
    },
    {
      id: 'norsk-vg1-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-ex-6',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk algoritmenes påvirkning på din egen informasjonsstrøm.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en plattform du bruker (YouTube, TikTok, Instagram, etc.) og beskriv hva slags innhold du vanligvis ser.',
            solution: 'Beskriv typisk innhold i feeden/anbefalingene dine.',
          },
          {
            label: 'b',
            task: 'Hvorfor tror du algoritmen viser deg akkurat dette innholdet?',
            solution: 'Reflekter over hva du har klikket på, søkt etter, og hvem du følger.',
          },
          {
            label: 'c',
            task: 'Hva ser du sjelden eller aldri? Hvilke perspektiver mangler?',
            solution: 'Tenk over hva som filtreres bort og hva du kanskje går glipp av.',
          },
          {
            label: 'd',
            task: 'Hva kan du gjøre for å få et bredere perspektiv?',
            solution: 'F.eks.: følge nye kontoer, søke bevisst etter andre synspunkter, bruke ulike kilder.',
          },
        ],
        solution: 'Refleksjonen bør vise bevissthet om algoritmers påvirkning og egne strategier for å motvirke filterbobler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-4-def-5',
      type: 'definition',
      title: 'Bilder og manipulasjon',
      content: `**Kan du stole på det du ser?**

Bilder har tradisjonelt vært ansett som bevis - "kamera lyver ikke". Men i dag kan bilder enkelt manipuleres og tas ut av kontekst.

**Typer bildemanipulasjon:**

**1. Retusjering:**
- Små endringer (fjerne kviser, endre farger)
- Vanlig i reklame og motebransjen
- Kan gi urealistiske skjønnhetsidealer

**2. Fotomontasje:**
- Sette sammen elementer fra ulike bilder
- Kan plassere personer steder de aldri har vært
- Brukes i politisk manipulasjon

**3. Kontekstmanipulasjon:**
- Ekte bilde, men feil kontekst
- Gamle bilder presentert som nye
- Bilder fra ett sted presentert som et annet

**4. Deepfakes:**
- AI-genererte bilder og videoer
- Kan vise personer som sier/gjør ting de aldri har gjort
- Stadig vanskeligere å avsløre

**5. AI-genererte bilder:**
- Helt oppdiktede bilder laget av kunstig intelligens
- Kan se helt realistiske ut
- Finnes ikke i virkeligheten

**Hvordan avsløre manipulerte bilder:**

- **Omvendt bildesøk:** Finn originalen
- **Se etter detaljer:** Skygger, proporsjoner, kanter
- **Sjekk metadata:** Når og hvor ble bildet tatt?
- **Vær kritisk:** Virker det for dramatisk/perfekt?
- **Bruk verktøy:** FotoForensics, InVID

**Regel:** Et bilde er ikke bevis før du vet konteksten. Hvem tok det? Når? Hvor? Hvorfor deles det nå?`,
    },
    {
      id: 'norsk-vg1-6-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-ex-7',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør et omvendt bildesøk og rapporter hva du finner.',
        hints: ['Bruk Google Bilder eller TinEye', 'Velg et bilde fra en nyhetssak eller sosiale medier', 'Undersøk hvor bildet opprinnelig kommer fra'],
        solution: 'Rapporten bør vise praktisk erfaring med omvendt bildesøk og evne til å vurdere bildets kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-4-def-6',
      type: 'definition',
      title: 'Konsekvenser for demokratiet',
      content: `**Desinformasjon truer demokratiet**

Demokratiet er avhengig av at borgerne kan ta informerte valg. Når falsk informasjon spres, undergraves dette.

**Trusler mot demokratiet:**

**1. Undergraving av tillit:**
- Når folk ikke vet hva de kan stole på
- Mistro til medier, eksperter og institusjoner
- "Alt kan være fake" - apati og resignasjon

**2. Polarisering:**
- Desinformasjon forsterker motsetninger
- Vanskeligere å finne felles grunn
- "Vi mot dem"-tenkning

**3. Valgpåvirkning:**
- Falske nyheter om kandidater
- Utenlandsk innblanding i valg
- Manipulasjon av velgere

**4. Folkehelse:**
- Farlig feilinformasjon om helse (vaksiner, behandlinger)
- Hindrer effektiv krisehåndtering
- Koster liv

**5. Hat og ekstremisme:**
- Konspirasjonsteorier radikaliserer
- Hatefulle ytringer spres
- Kan føre til vold

**Hvem står bak?**
- Profittjegere (annonseinntekter fra klikk)
- Politiske aktører (innenlands og utenlands)
- Trollfabrikker og botnettverk
- Vanlige folk som deler uten å tenke

**Hva kan du gjøre?**
- Vær kritisk til det du leser og deler
- Støtt kvalitetsjournalistikk
- Korriger feilinformasjon (høflig og saklig)
- Snakk med folk om kildekritikk
- Rapporter falsk innhold

**Kildekritikk er ikke bare en skoleferdighet - det er en demokratisk plikt. Hver gang du stopper og tenker før du deler, bidrar du til et sunnere offentlig ordskifte.**`,
    },
    {
      id: 'norsk-vg1-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Avsløre en falsk nyhet',
      problem: 'Hvordan kan vi avsløre at en nyhetssak er falsk? La oss se på et tenkt eksempel.',
      solution: `**Saken:**
En artikkel med overskriften "SJOKKERENDE: Forskere avslører at kaffe er like farlig som røyking!" spres i sosiale medier.

**Røde flagg:**

**1. Overskriften:**
- Store bokstaver og sjokkerende språk
- Ingen konkret kilde nevnt
- "Forskere" - hvilke forskere?

**2. Nettstedet:**
- Ukjent nettsted: "helsesannheter24.info"
- Ingen redaksjonell informasjon
- Mange popup-reklamer

**3. Innholdet:**
- Vage påstander uten kilder
- Ingen lenker til forskning
- Sitater uten navn på forskere
- Følelsesladet språk

**Faktasjekk-prosessen:**

**Steg 1: Søk etter kilden**
Søk "kaffe farlig som røyking studie" - finner ingen seriøse kilder som rapporterer dette.

**Steg 2: Sjekk faktasjekkere**
Faktisk.no har ingen sak om dette. Internasjonale faktasjekkere har avslørt lignende påstander som falske.

**Steg 3: Sjekk ekspertkilder**
Folkehelseinstituttet og WHO sier at moderat kaffeforbruk ikke er helsefarlig. Forskning viser faktisk noen helsefordeler.

**Steg 4: Omvendt bildesøk**
Bildet i artikkelen er et arkivfoto brukt på mange nettsteder, ikke fra en reell studie.

**Konklusjon:**
Dette er en falsk nyhet, trolig laget for å generere klikk og annonseinntekter. Ingen seriøs forskning støtter påstanden.

**Lærdom:** Sensasjonelle helsepåstander uten kilder bør alltid sjekkes før de deles.`,
    },
    {
      id: 'norsk-vg1-6-4-example-2',
      type: 'example',
      title: 'Eksempel: Bilde tatt ut av kontekst',
      problem: 'Hvordan kan vi avsløre at et bilde brukes i feil kontekst?',
      solution: `**Situasjonen:**
Et bilde av store folkemengder deles med teksten "Protestene mot regjeringen vokser - tusenvis i gatene i dag!"

**Undersøkelsen:**

**Steg 1: Omvendt bildesøk**
Last opp bildet til Google Bilder eller TinEye. Søkeresultatene viser at bildet dukker opp i artikler fra 2019.

**Steg 2: Finn originalen**
Bildet er fra en musikkfestival i et annet land for flere år siden - ikke fra noen protest.

**Steg 3: Se etter detaljer**
- Plakatene i bildet er på et annet språk
- Været stemmer ikke med årstiden
- Klærne ser ut som sommertøy, men det er vinter nå

**Steg 4: Kryssjekk**
Ingen nyhetsmedier rapporterer om store protester i dag. Politiet bekrefter at det ikke har vært store demonstrasjoner.

**Konklusjon:**
Bildet er ekte, men brukes i helt feil kontekst. Dette er et klassisk eksempel på kontekstmanipulasjon - et av de vanligste triksene i desinformasjon.

**Slik kan du sjekke bilder:**
1. Høyreklikk på bildet og velg "Søk på Google etter bilde" (eller bruk TinEye)
2. Se når bildet først ble publisert
3. Les hva originalkilden sier om bildet
4. Sammenlign detaljer med påstanden

**Husk: Et bilde beviser bare at bildet eksisterer - ikke at påstanden rundt bildet er sann.**`,
    },
    {
      id: 'norsk-vg1-6-4-example-3',
      type: 'example',
      title: 'Eksempel: Faktasjekk av en statistikk-pastand',
      content: `**Oppgave/Situasjon:**
En post pa sosiale medier pastar: "90% av alle nordmenn er imot innvandring, viser ny undersøkelse!" Hvordan faktasjekker vi dette?

**Steg 1: Reager pa røde flagg**
- Veldig høyt tall (90% er uvanlig enighet)
- Vag kilde ("ny undersøkelse")
- Følelsesladet tema
- Ingen lenke til undersøkelsen

**Steg 2: Søk etter kilden**
Søk pa "90% nordmenn innvandring undersøkelse":
- Ingen seriøse nyhetsmedier rapporterer dette
- Ingen forskningsinstitusjoner har publisert slikt

**Steg 3: Finn faktiske tall**
Sjekk pålitelige kilder:
- SSBs holdningsundersøkelser
- Forskningsinstitutter (FAFO, ISF)
- Medietilsynets rapporter

**Hva viser faktiske undersøkelser?**
SSBs holdningsundersøkelser viser at nordmenns holdninger til innvandring er nyanserte og varierer mellom:
- Type innvandring (arbeid, flukt, familie)
- Spørsmålsformulering
- Tidspunkt
Ingen seriøs undersøkelse viser 90% enighet i noen retning.

**Steg 4: Vurder hvem som sprer dette**
- Hvem la ut posten opprinnelig?
- Har de en agenda?
- Spres det av botter eller ekte kontoer?

**Konklusjon:**
Pastanden er sannsynligvis:
1. Fullstendig oppdiktet
2. Basert pa en utseriøs "undersøkelse"
3. En forvrenging av faktiske tall

**Lærdom:**
- Vær spesielt kritisk til statistikk uten kilde
- Ekstreme tall (90%, 99%) bør alltid dobbeltsjekkes
- Finn originalkilden - hvem utførte undersøkelsen og hvordan?`,
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-6-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en presentasjon eller infografikk om hvordan man avslører falske nyheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg 5-7 konkrete tips for å gjenkjenne falske nyheter.',
            solution: 'F.eks.: sjekk kilden, vær kritisk til sensasjonelle overskrifter, sjekk datoen, bruk faktasjekkere, osv.',
          },
          {
            label: 'b',
            task: 'Lag en visuell fremstilling som er lett å forstå.',
            solution: 'Bruk korte punkter, ikoner eller illustrasjoner.',
          },
          {
            label: 'c',
            task: 'Inkluder minst ett eksempel på en falsk nyhet og hvordan den kunne vært avslørt.',
            solution: 'Vis praktisk anvendelse av tipsene.',
          },
        ],
        hints: ['Tenk på hvem målgruppen er', 'Hold det enkelt og konkret', 'Bruk eksempler som er relevante for jevnaldrende'],
        solution: 'Presentasjonen bør være informativ, visuelt tiltalende og praktisk nyttig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (400-500 ord): Hvorfor er kildekritikk viktig for demokratiet?',
        hints: [
          'Drøft sammenhengen mellom informert borgerskap og demokrati',
          'Gi eksempler på hvordan desinformasjon kan true demokratiet',
          'Diskuter hvem som har ansvar: individet, mediene, plattformene, staten?',
          'Avslutt med en refleksjon om hva du selv kan gjøre',
        ],
        solution: 'Essayet bør vise forståelse for sammenhengen mellom informasjonskvalitet og demokratisk deltakelse, med konkrete eksempler og egne refleksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-4-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 6.4

**Hovedpunkter:**
- Kildekritikk handler om å vurdere hvem som står bak informasjonen, hva formålet er, og om den er pålitelig
- TONE-modellen (Troverdighet, Objektivitet, Nøyaktighet, Egnethet) er et verktøy for systematisk kildevurdering
- Algoritmer og filterbobler påvirker hvilken informasjon vi ser og kan forsterke ekkokamre

**Sentrale begreper:**
- **Desinformasjon**: Bevisst falsk informasjon laget for å villede
- **Misinformasjon**: Feilaktig informasjon spredt uten ond hensikt
- **Ekkokammer**: Miljø der man bare eksponeres for meninger man er enig i
- **Faktasjekk**: Å verifisere påstander mot pålitelige kilder

**Tips for eksamen:**
- Bruk TONE-modellen systematisk når du vurderer kilder
- Husk at bilder kan manipuleres eller tas ut av kontekst - gjør omvendt bildesøk
- Kildekritikk er viktig både for skolearbeid og som demokratisk borger`,
    },
    {
      id: 'norsk-vg1-6-4-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **1.2 Sakprosa og kildebruk** – Grunnleggende kildekritikk
- **6.1 Sammensatte tekster** – Forstå hvordan multimodale tekster kan villede
- **6.3 Digitale tekster og sosiale medier** – Analyser påvirkning i sosiale medier`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5: Tolkende og analyserende tekst
// ============================================================================

export const CHAPTER_NORSK_VG1_5_5: TextbookChapter = {
  id: 'norsk-vg1-5-5',
  courseId: 'norsk-vg1',
  chapterNumber: '5.5',
  title: 'Tolkende og analyserende tekst',
  description: 'Lær å skrive tolkende og analyserende tekster om litteratur og sakprosa.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke tekster og bruke fagbegreper',
    'skrive tekster med klart uttrykt tema og god struktur',
    'begrunne egne tolkninger med utgangspunkt i teksten',
  ],
  content: [
    {
      id: 'norsk-vg1-5-5-intro',
      type: 'text',
      content: `## Hva er en tolkende og analyserende tekst?

En tolkende og analyserende tekst er en saktekst der du undersøker og forklarer en annen tekst (litterær eller sakprosa). Du bryter teksten ned i deler, forklarer hvordan den virker, og tolker hva den betyr.

**Hovedkjennetegn:**
- Du undersøker HVA teksten handler om
- Du forklarer HVORDAN teksten er bygget opp
- Du tolker HVORFOR forfatteren har gjort sine valg
- Du argumenterer for din tolkning med belegg fra teksten

**Viktige begreper:**
- **Analyse:** Å bryte ned teksten i deler og forklare hvordan de virker
- **Tolkning:** Å forklare hva teksten betyr, finne mening utover det bokstavelige
- **Belegg:** Sitater og eksempler fra teksten som støtter påstandene dine

**Når skriver du analyserende tekster?**
- På eksamen i norsk
- I litterære oppgaver på skolen
- I akademisk sammenheng
- Når du vurderer og anmelder tekster

**En god analyse kombinerer nøktern undersøkelse med begrunnet tolkning.**`,
    },
    {
      id: 'norsk-vg1-5-5-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Analyse** | Å bryte ned en tekst og undersøke delene |
| **Tolkning** | Å forklare tekstens dypere mening |
| **Belegg** | Sitater eller eksempler som støtter påstander |
| **Problemstilling** | Spørsmålet analysen skal besvare |
| **Virkemiddel** | Teknikker forfatteren bruker for å skape effekt |
| **Sitat** | Direkte gjengivelse av tekstens ord |
| **Referat** | Kortfattet gjenfortelling av handlingen |
| **Tekstkompetanse** | Evne til å lese, forstå og vurdere tekster |`,
    },
    {
      id: 'norsk-vg1-5-5-def-1',
      type: 'definition',
      title: 'Struktur: Innledning, analyse, tolkning, avslutning',
      content: `**Oppbygning av en analyserende tekst:**

**1. INNLEDNING**
- Presenter teksten: tittel, forfatter, sjanger, utgivelsesår
- Kort om hva teksten handler om (ikke referat!)
- Si hva du skal undersøke (problemstilling/fokus)
- Vekk leserens interesse

**Eksempel på innledning:**
*"I novellen 'Karen' (1882) skildrer Alexander Kielland en ung kvinnes tragiske skjebne i et klassesamfunn. I denne analysen vil jeg undersøke hvordan Kielland bruker kontraster og ironi for å kritisere samfunnet."*

**2. HOVEDDEL: ANALYSE**
- Undersøk tekstens oppbygning og struktur
- Analyser virkemidler (språklige og litterære)
- Forklar hvordan virkemidlene skaper mening
- Bruk sitater som belegg

**3. HOVEDDEL: TOLKNING**
- Hva betyr teksten? Hva er temaene?
- Hvordan henger delene sammen?
- Hva vil forfatteren si oss?
- Sett teksten i kontekst (historisk, samfunnsmessig)

**4. AVSLUTNING**
- Oppsummer hovedfunnene
- Svar på problemstillingen
- Eventuell vurdering eller refleksjon
- Avrund teksten på en god måte

**Husk: Analyse og tolkning glir ofte over i hverandre - det viktige er at du begrunner påstandene dine.**`,
    },
    {
      id: 'norsk-vg1-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-ex-5',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør en innledning i en analyserende tekst inneholde?',
        options: [
          { id: 'a', text: 'Et detaljert referat av hele handlingen', isCorrect: false },
          { id: 'b', text: 'Presentasjon av teksten, kort om innholdet, og fokus for analysen', isCorrect: true },
          { id: 'c', text: 'Bare tittelen på teksten du skal analysere', isCorrect: false },
          { id: 'd', text: 'Din personlige mening om teksten', isCorrect: false },
        ],
        solution: 'Innledningen skal presentere teksten (tittel, forfatter, sjanger, år), si kort hva den handler om, og formulere hva du skal undersøke.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en innledning til en analyse av en selvvalgt tekst.',
        hints: [
          'Presenter teksten: tittel, forfatter, sjanger, år',
          'Si kort hva teksten handler om',
          'Formuler hva du skal undersøke (fokus/problemstilling)',
          'Gjør innledningen interessant',
        ],
        solution: 'Innledningen bør inneholde presentasjon av teksten, kort om innholdet, og et tydelig fokus for analysen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-5-5-def-2',
      type: 'definition',
      title: 'Fagbegreper og sitatbruk',
      content: `**Bruk av fagbegreper:**

Fagbegreper viser at du kan analysere faglig og gjør teksten din mer presis.

**Viktige begreper for litterær analyse:**
- Tema, motiv, symbol
- Synsvinkel, forteller
- Komposisjon, spenningskurve
- Miljøskildring, personskildring
- Kontrast, parallell
- Ironi, metafor, sammenligning
- Språklige virkemidler

**Viktige begreper for sakprosaanalyse:**
- Avsender, mottaker, formål
- Etos, patos, logos
- Argumentasjon, påstand, belegg
- Språkhandlinger
- Tone og stil

**Riktig sitatbruk:**

**Korte sitater (under 3 linjer):**
Integrer i setningen din med anførselstegn:
*Fortelleren beskriver Karen som "blek og mager" (s. 12), noe som understreker fattigdommen.*

**Lengre sitater (over 3 linjer):**
Sett som eget avsnitt med innrykk, uten anførselstegn.

**Regler for sitering:**
- Siter ordrett
- Bruk anførselstegn
- Oppgi sidetall
- Kommenter alltid sitatet - forklar hvorfor det er relevant
- Ikke la sitater stå alene

**Husk: Sitater er belegg for påstandene dine, ikke erstatning for egen analyse.**`,
    },
    {
      id: 'norsk-vg1-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-ex-6',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er belegg i en analyserende tekst?',
        options: [
          { id: 'a', text: 'Din personlige mening', isCorrect: false },
          { id: 'b', text: 'Sitater og eksempler fra teksten som støtter påstandene dine', isCorrect: true },
          { id: 'c', text: 'Informasjon om forfatterens liv', isCorrect: false },
          { id: 'd', text: 'Andre elevers tolkninger', isCorrect: false },
        ],
        solution: 'Belegg er sitater og eksempler fra teksten du analyserer. De brukes til å støtte og begrunne påstandene og tolkningene dine.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-ex-3',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på sitatbruk.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en setning fra en tekst du har lest, og skriv et avsnitt der du bruker sitatet som belegg for en påstand.',
            solution: 'Avsnittet bør ha en påstand, et sitat med korrekt anførsel, og en forklaring på hvordan sitatet støtter påstanden.',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor man alltid skal kommentere sitater i en analyse.',
            solution: 'Sitater skal ikke stå alene - leseren må forstå hvorfor sitatet er relevant og hva det viser. Uten kommentar vet ikke leseren hva du vil med sitatet.',
          },
        ],
        solution: 'God sitatbruk betyr at du velger relevante sitater, integrerer dem i teksten, og forklarer hva de viser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-5-5-def-3',
      type: 'definition',
      title: 'Å argumentere for en tolkning',
      content: `**Hvordan begrunner du en tolkning?**

En tolkning er ikke en mening du bare har - den må begrunnes med belegg fra teksten.

**Argumentasjonsstruktur:**
1. **Påstand:** Hva du mener teksten betyr
2. **Belegg:** Sitater og eksempler fra teksten
3. **Forklaring:** Hvordan belegget støtter påstanden

**Eksempel:**
*Påstand:* Novellen kritiserer klassesamfunnet.
*Belegg:* Kontrasten mellom Karens fattigslige rom og familiens overdådige hjem.
*Forklaring:* Denne kontrasten understreker urettferdigheten og får leseren til å sympatisere med Karen.

**Gode formuleringer:**
- "Dette kan tolkes som..."
- "Symbolikken antyder at..."
- "Kontrasten mellom X og Y understreker..."
- "Forfatteren bruker X for å vise..."
- "Dette støttes av at..."

**Flere gyldige tolkninger:**
- En tekst kan tolkes på flere måter
- Det finnes ikke én "riktig" tolkning
- MEN: tolkningen må kunne begrunnes i teksten
- Unngå: "Jeg tror forfatteren mente..." uten belegg

**Tips:**
- Vær presis og konkret
- Vis at du kjenner teksten godt
- Forklar hvorfor virkemidlene har den effekten
- Knytt analyse og tolkning sammen`,
    },
    {
      id: 'norsk-vg1-5-5-image-argumenterende-oppbygging',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-5-argumenterende-oppbygging.png',
      alt: 'Diagram som viser oppbyggingen av en argumenterende tekst med innledning, hoveddel og avslutning',
      caption: 'Strukturen i en argumenterende og tolkende tekst',
    },
    {
      id: 'norsk-vg1-5-5-image-argumenttyper',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-5-argumenttyper.png',
      alt: 'Oversikt over ulike argumenttyper: påstand, belegg og forklaring',
      caption: 'De ulike delene av et argument',
    },
    {
      id: 'norsk-vg1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-ex-4',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser bruken av kontraster i en tekst.',
        hints: [
          'Velg en tekst du kjenner',
          'Finn minst to kontraster (f.eks. lys/mørke, rik/fattig, inne/ute)',
          'Forklar hva kontrastene betyr for teksten',
        ],
        solution: 'Kontraster brukes ofte for å understreke temaer, skape spenning, eller tydeliggjøre konflikter. Analysen bør vise konkrete eksempler og forklare effekten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-5-5-def-4',
      type: 'definition',
      title: 'Forskjellen på analyse og tolkning',
      content: `**Analyse vs. tolkning - hva er forskjellen?**

Analyse og tolkning henger sammen, men er ikke det samme:

**ANALYSE:**
- Undersøker HVORDAN teksten er laget
- Identifiserer virkemidler og strukturer
- Beskriver det som faktisk står i teksten
- Er mer objektiv og tekstnær
- Spør: Hva gjør forfatteren?

**Eksempel på analyse:**
*"Novellen har en kronologisk oppbygning med et vendepunkt i midten. Fortelleren er allvitende og bruker indre monolog for å vise Karens tanker."*

**TOLKNING:**
- Undersøker HVA teksten betyr
- Finner mening utover det bokstavelige
- Setter teksten i sammenheng
- Er mer subjektiv (men begrunnet!)
- Spør: Hva betyr dette?

**Eksempel på tolkning:**
*"Karens skjebne kan ses som en kritikk av et samfunn der kvinner fra underklassen har få muligheter. Hennes tragedie representerer mange lignende skjebner."*

**Samspillet:**
- God tolkning bygger på grundig analyse
- Analysen gir belegg for tolkningen
- I en tekst fletter du dem gjerne sammen
- Først beskriv (analyse), så forklar betydningen (tolkning)

**Fallgruve:**
Å tolke uten analyse = synsing
Å analysere uten tolkning = overfladisk`,
    },
    {
      id: 'norsk-vg1-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-ex-1',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar forskjellen mellom analyse og tolkning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjør du når du analyserer en tekst?',
            solution: 'Du undersøker hvordan teksten er laget: virkemidler, struktur, språk, komposisjon. Du beskriver det som faktisk står i teksten.',
          },
          {
            label: 'b',
            task: 'Hva gjør du når du tolker en tekst?',
            solution: 'Du forklarer hva teksten betyr, finner mening utover det bokstavelige, og setter teksten i en større sammenheng.',
          },
          {
            label: 'c',
            task: 'Hvordan henger analyse og tolkning sammen?',
            solution: 'Analyse gir grunnlag og belegg for tolkning. God tolkning bygger på grundig analyse. I en analyserende tekst fletter man dem ofte sammen.',
          },
        ],
        solution: 'Analyse handler om hvordan teksten er laget, tolkning handler om hva den betyr. De henger tett sammen i en god analyserende tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-5-5-def-5',
      type: 'definition',
      title: 'Analysere ulike sjangre',
      content: `**Tilpasse analysen til sjangeren:**

**Novelle og roman:**
- Handling og komposisjon
- Personskildring og utvikling
- Miljø og tid
- Synsvinkel og forteller
- Tema og budskap
- Språk og stil

**Dikt:**
- Form: vers, rim, rytme
- Språklige bilder: metafor, symbol
- Lyrisk jeg
- Stemning og tone
- Tematikk
- Sammenheng form og innhold

**Drama:**
- Handling og konflikter
- Personene og relasjonene
- Sceneanvisninger
- Dialog og replikker
- Dramatisk oppbygning

**Sakprosa (artikkel, kronikk, essay):**
- Avsender og mottaker
- Formål og kontekst
- Argumentasjon og retorikk
- Språk og stil
- Struktur og oppbygning

**Fellestrekk for all analyse:**
- Start med helheten, gå til detaljene
- Se etter mønstre og kontraster
- Forklar sammenhenger
- Begrunne påstandene dine`,
    },
    {
      id: 'norsk-vg1-5-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-ex-8',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign analyse av skjønnlitteratur og sakprosa.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke virkemidler ser du etter i skjønnlitteratur?',
            solution: 'Forteller, synsvinkel, personskildring, miljøskildring, komposisjon, språklige bilder, symbolikk, tema.',
          },
          {
            label: 'b',
            task: 'Hvilke virkemidler ser du etter i sakprosa?',
            solution: 'Argumentasjon, retoriske appellformer (etos, patos, logos), struktur, språk og tone, avsender og mottaker, formål.',
          },
          {
            label: 'c',
            task: 'Hva er felles for analyse av begge?',
            solution: 'I begge undersøker du språk og struktur, begrunner påstandene med belegg, og tolker tekstens mening og formål.',
          },
        ],
        solution: 'Analyse av skjønnlitteratur og sakprosa krever ulike fagbegreper, men begge handler om å undersøke hvordan teksten virker og hva den betyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Analyserende tekst om novelle',
      problem: 'Se hvordan en analyserende tekst kan se ut.',
      solution: `**Oppgave:** Analyser novellen "Karens jul" av Amalie Skram (1885).

**Eksempel på analyserende tekst:**

**INNLEDNING:**
"Karens jul" er en novelle av Amalie Skram fra 1885. Novellen handler om den fattige tjenestejenta Karen som opplever julen alene i et kaldt og mørkt kjøkken mens familien hun arbeider for feirer i stuen. I denne analysen vil jeg undersøke hvordan Skram bruker kontraster og miljøskildring for å skildre sosial urettferdighet.

**ANALYSE OG TOLKNING:**
Novellen er bygget opp rundt en sterk kontrast mellom to verdener: det varme, lyse juleselskapet i stuen og det kalde, mørke kjøkkenet der Karen befinner seg. Skram skildrer detaljert lukten av mat, lyden av latter og musikk som siver inn til Karen. Denne kontrasten mellom overflod og savn forsterker leserens sympati med Karen.

Fortelleren er allvitende og lar oss se Karens tanker: "Hun tenkte på mor og småsøsknene hjemme" (s. 5). Denne indre monologen gjør Karen til et individ, ikke bare en type. Vi forstår hennes lengsel og sorg.

Miljøskildringen er sentral. Kjøkkenet beskrives med ord som "koldt", "mørkt" og "fuktig", mens stuen er "varm" og "strålende". Denne kontrasten symboliserer klasseskillet i samfunnet.

**AVSLUTNING:**
Gjennom virkemidler som kontrast, miljøskildring og indre monolog skaper Skram en tekst som både beveger og provoserer. Novellen kan leses som en kritikk av et samfunn der noen feirer i overflod mens andre fryser i samme hus. Karen representerer de usynlige - tjenerne og arbeiderne som holdt samfunnet i gang uten å få del i godene.

---
*Denne analysen viser hvordan du kombinerer tekstnær analyse med tolkning og setter teksten i en større sammenheng.*`,
    },
    {
      id: 'norsk-vg1-5-5-example-2',
      type: 'example',
      title: 'Eksempel: Slik bruker du sitater som belegg',
      content: `**Oppgave/Situasjon:**
Se hvordan du integrerer sitater i en analyserende tekst.

**Feil mate a bruke sitat:**
"Novellen handler om fattigdom. 'Hun frøs og var sulten.' (s. 3)"

**Problemer:**
- Sitatet star alene uten forklaring
- Ingen analyse av hva sitatet viser
- Leseren ma gjette hvorfor sitatet er relevant

**Riktig mate a bruke sitat:**

**Eksempel 1: Integrert sitat**
"Skram skildrer Karens fysiske lidelser gjennom korte, konkrete setninger: 'Hun frøs og var sulten' (s. 3). Den nøkterne stilen forsterker inntrykket av at dette er hverdagslig for Karen - hun er vant til a fryse og sulte."

**Eksempel 2: Analyse av spraket**
"Fortelleren beskriver Karen som 'blek og mager, med hender røde av kulde' (s. 2). Adjektivene 'blek', 'mager' og 'røde' maler et bilde av fysisk lidelse, mens detaljfokuset pa hendene viser at Karen er en som arbeider hardt."

**Eksempel 3: Sammenligning**
"Kontrasten mellom Karen og familien forsterkes gjennom parallelle beskrivelser. Mens familiens stue er 'varm og lysende' (s. 5), er kjøkkenet 'kaldt og mørkt' (s. 3). Denne motsetningen symboliserer klasseskillet."

**Sjekkliste for sitatbruk:**
1. Innled sitatet - forklar hva det skal vise
2. Siter nøyaktig med anførselstegn
3. Oppgi sidetall
4. Analyser sitatet - forklar hvorfor det er relevant
5. Knytt det til din overordnede tolkning

**Husk:** Et sitat beviser ingenting alene. Det er analysen din som gir sitatet mening.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-5-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-ex-7',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyserende tekst (300-400 ord) om et dikt eller en novelle du har lest.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en innledning som presenterer teksten og formulerer fokus.',
            solution: 'Innledningen bør inneholde tittel, forfatter, sjanger, år, kort om innhold, og hva du skal undersøke.',
          },
          {
            label: 'b',
            task: 'Analyser minst to virkemidler og forklar hvordan de skaper mening.',
            solution: 'Bruk fagbegreper, vis til konkrete eksempler fra teksten, og forklar effekten av virkemidlene.',
          },
          {
            label: 'c',
            task: 'Avslutt med å tolke hva teksten betyr og hva den sier om sitt tema.',
            solution: 'Tolkningen bør bygge på analysen og sette teksten i en større sammenheng.',
          },
        ],
        hints: ['Følg strukturen: innledning, analyse, tolkning, avslutning', 'Bruk sitater som belegg', 'Kommenter sitatene'],
        solution: 'En god analyserende tekst kombinerer tekstnær analyse med begrunnet tolkning og har en klar struktur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-5-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv tre tolkninger av et symbol i en tekst du kjenner.',
        hints: [
          'Velg et tydelig symbol (f.eks. en gjenstand, et sted, et vær-fenomen)',
          'Forklar hva symbolet kan bety',
          'Begrunn hver tolkning med belegg fra teksten',
        ],
        solution: 'Øvelsen viser at tekster kan tolkes på flere måter, og at gode tolkninger alltid begrunnes i teksten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-5-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les og vurder en medelevs analyserende tekst.',
        subTasks: [
          {
            label: 'a',
            task: 'Har teksten en god innledning med presentasjon og fokus?',
            solution: 'Vurder om innledningen inneholder nødvendig informasjon og et tydelig fokus.',
          },
          {
            label: 'b',
            task: 'Bruker teksten fagbegreper og sitater riktig?',
            solution: 'Se om fagbegreper brukes presist og om sitater er korrekt integrert og kommentert.',
          },
          {
            label: 'c',
            task: 'Er tolkningene begrunnet med belegg fra teksten?',
            solution: 'Vurder om påstander støttes av konkrete eksempler og sitater.',
          },
          {
            label: 'd',
            task: 'Gi konkrete forslag til forbedring.',
            solution: 'Pek på spesifikke steder der teksten kan styrkes, med konkrete forslag.',
          },
        ],
        solution: 'Å vurdere andres tekster utvikler din egen evne til å skrive gode analyserende tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-5-5-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 5.5

**Hovedpunkter:**
- En analyserende tekst undersøker hva teksten handler om, hvordan den er bygget opp, og hva den betyr
- Analyse handler om hvordan teksten er laget, tolkning handler om hva den betyr - begge må begrunnes
- Strukturen er: innledning (presenter tekst og fokus), analyse/tolkning (med belegg), avslutning

**Sentrale begreper:**
- **Analyse**: Å bryte ned teksten og undersøke virkemidler, struktur og språk
- **Tolkning**: Å forklare tekstens dypere mening utover det bokstavelige
- **Belegg**: Sitater og eksempler fra teksten som støtter påstandene dine
- **Problemstilling**: Spørsmålet eller fokuset analysen skal besvare

**Tips for eksamen:**
- Presenter alltid teksten i innledningen (tittel, forfatter, sjanger, år)
- Bruk sitater som belegg og kommenter dem alltid
- God tolkning bygger på grundig analyse - ikke synse uten belegg`,
    },
    {
      id: 'norsk-vg1-5-5-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **2.1 Novelleanalyse** – Analyser noveller med de riktige begrepene
- **2.2 Lyrikk og diktanalyse** – Analyser dikt systematisk
- **2.4 Romananalyse** – Skriv romananalyser
- **1.5 Retorisk analyse** – Analyser sakprosa retorisk
- **5.3 Fagartikkel** – Skriv analyser i fagartikkelformat`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6: Respons og tilbakemelding
// ============================================================================

export const CHAPTER_NORSK_VG1_5_6: TextbookChapter = {
  id: 'norsk-vg1-5-6',
  courseId: 'norsk-vg1',
  chapterNumber: '5.6',
  title: 'Respons og tilbakemelding',
  description: 'Lær å gi og motta konstruktiv tilbakemelding og bruke den til å forbedre tekster.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gi og motta tilbakemelding på tekster og bruke dette i egen skriving',
    'bruke ulike skrivestrategier og tilpasse skriving til formål og mottaker',
    'vurdere og revidere egne tekster ut fra faglige kriterier',
  ],
  content: [
    {
      id: 'norsk-vg1-5-6-intro',
      type: 'text',
      content: `## Respons og tilbakemelding

Å få og gi tilbakemelding på tekster er en viktig del av skriveprosessen. God respons hjelper deg å se teksten din med andres øyne og gjør deg til en bedre skribent.

**Hva er respons?**
- Tilbakemelding på tekst underveis i skriveprosessen
- Hjelp til å se hva som fungerer og hva som kan forbedres
- Grunnlag for revisjon

**Hvorfor er respons viktig?**
- Du ser ikke alltid svakhetene i egen tekst
- Andre lesere kan peke på uklarheter
- Du lærer av å vurdere andres tekster
- Responsarbeid utvikler kritisk sans
- Det forbereder deg på vurdering

**Responsens plass i skriveprosessen:**
1. Du skriver et utkast
2. Du får respons fra lærer eller medelever
3. Du vurderer tilbakemeldingene
4. Du reviderer teksten
5. (Eventuelt ny runde med respons)

**God respons er spesifikk, konstruktiv og respektfull. Den peker på både styrker og forbedringsområder.**`,
    },
    {
      id: 'norsk-vg1-5-6-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Respons** | Tilbakemelding på en tekst |
| **Mottakerrespons** | Tilbakemelding fra medelevers perspektiv |
| **Formativ vurdering** | Vurdering underveis som hjelper læring |
| **Summativ vurdering** | Sluttvurdering med karakter |
| **Revisjon** | Å omarbeide og forbedre en tekst |
| **Vurderingskriterier** | Hva teksten bedømmes etter |
| **Konstruktiv kritikk** | Kritikk som peker på forbedringsmuligheter |
| **Egenvurdering** | Å vurdere egen tekst systematisk |`,
    },
    {
      id: 'norsk-vg1-5-6-def-1',
      type: 'definition',
      title: 'Hva er god respons?',
      content: `**Kjennetegn på god respons:**

**1. KONKRET OG SPESIFIKK**
- Pek på konkrete steder i teksten
- Unngå vage kommentarer som "bra" eller "dårlig"
- Si nøyaktig hva som fungerer/ikke fungerer

**Dårlig:** "Fin innledning."
**God:** "Innledningen fanger oppmerksomheten min fordi du starter med et overraskende spørsmål."

**2. BEGRUNNET**
- Forklar hvorfor noe fungerer eller ikke
- Vis til konkrete teksteksempler
- Hjelp forfatteren å forstå

**3. KONSTRUKTIV**
- Gi forslag til forbedring, ikke bare kritikk
- Fokuser på teksten, ikke personen
- Vær løsningsorientert

**Dårlig:** "Dette gir ikke mening."
**God:** "Jeg forstår ikke sammenhengen her. Kan du legge til en overgangssetning?"

**4. BALANSERT**
- Pek på både styrker og svakheter
- Start gjerne med noe positivt
- Vær ærlig, men respektfull

**5. PRIORITERT**
- Fokuser på det viktigste først
- Ikke overveld med for mange kommentarer
- Tenk: Hva vil hjelpe forfatteren mest?

**Responsens mål:**
Hjelpe forfatteren å skrive en bedre tekst, ikke vise hvor flink du er til å finne feil.`,
    },
    {
      id: 'norsk-vg1-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva som kjennetegner god respons.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre kjennetegn på god respons.',
            solution: 'God respons er konkret/spesifikk, begrunnet, konstruktiv, balansert og prioritert.',
          },
          {
            label: 'b',
            task: 'Hvorfor bør respons være konkret og ikke vag?',
            solution: 'Konkret respons hjelper forfatteren å forstå nøyaktig hva som fungerer og ikke fungerer, og gjør det mulig å gjøre forbedringer.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen på kritikk og konstruktiv kritikk?',
            solution: 'Konstruktiv kritikk peker på problemer OG gir forslag til løsninger. Ren kritikk sier bare at noe er feil uten å hjelpe.',
          },
        ],
        solution: 'God respons er konkret, begrunnet, konstruktiv og hjelpsom. Den fokuserer på teksten og gir forfatteren verktøy til å forbedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-ex-4',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det viktigste målet med respons på tekst?',
        options: [
          { id: 'a', text: 'Å vise at du er flink til å finne feil', isCorrect: false },
          { id: 'b', text: 'Å hjelpe forfatteren å skrive en bedre tekst', isCorrect: true },
          { id: 'c', text: 'Å kritisere så mye som mulig', isCorrect: false },
          { id: 'd', text: 'Å rose forfatteren uansett hva som står', isCorrect: false },
        ],
        solution: 'Responsen skal hjelpe forfatteren å se hva som fungerer og hva som kan forbedres, slik at teksten blir bedre.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-6-def-2',
      type: 'definition',
      title: 'Responsgrupper og medelevvurdering',
      content: `**Arbeid i responsgrupper:**

Responsgrupper er små grupper (2-4 elever) som gir tilbakemelding på hverandres tekster.

**Fordeler:**
- Flere perspektiver på teksten din
- Trening i å vurdere tekst
- Lærer av å lese andres tekster
- Utvikler samarbeidsevner

**Hvordan organisere responsgrupper:**

**Forberedelse:**
- Alle leser tekstene på forhånd
- Noter kommentarer og spørsmål
- Tenk på både styrker og forbedringsområder

**Gjennomføring:**
1. Forfatteren leser (eventuelt) teksten høyt
2. Responsgiver oppsummerer: "Jeg oppfatter at teksten handler om..."
3. Pek på styrker: "Det som fungerer godt er..."
4. Still spørsmål: "Jeg lurte på..."
5. Gi forslag: "Du kunne kanskje..."
6. Forfatteren får svare og stille spørsmål

**Regler for responsgrupper:**
- Lytt til hverandre
- Vær respektfull
- Fokuser på teksten, ikke personen
- Alle bidrar
- Forfatteren bestemmer hva som brukes

**Medelevvurdering:**
Noen ganger vurderer medelever hverandres tekster med karakterer. Da er det viktig med klare vurderingskriterier og opplæring i vurdering.`,
    },
    {
      id: 'norsk-vg1-5-6-image-respons-modell',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-6-respons-modell.png',
      alt: 'Modell for hvordan gi god tilbakemelding på tekster',
      caption: 'En modell for konstruktiv respons',
    },
    {
      id: 'norsk-vg1-5-6-image-kameratvurdering',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-6-kameratvurdering.png',
      alt: 'Illustrasjon av kameratvurdering der elever gir tilbakemelding til hverandre',
      caption: 'Kameratvurdering styrker skriveferdighetene',
    },
    {
      id: 'norsk-vg1-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi respons på et avsnitt fra en medelevs tekst.',
        hints: [
          'Bruk sandwich-metoden: positiv - konstruktiv kritikk - positiv',
          'Vær konkret og spesifikk',
          'Gi forslag til forbedring',
          'Vær respektfull',
        ],
        solution: 'Responsen bør være konkret, konstruktiv og respektfull, med både ros og forslag til forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-6-def-3',
      type: 'definition',
      title: 'Å gi konstruktiv kritikk',
      content: `**Teknikker for å gi konstruktiv tilbakemelding:**

**"Sandwich-metoden":**
1. Start med noe positivt
2. Gi konstruktiv kritikk
3. Avslutt positivt

**Eksempel:**
"Innledningen din er engasjerende og får meg til å ville lese videre. Jeg synes imidlertid at argumentene i hoveddelen kunne vært tydeligere strukturert - kanskje med klarere avsnittsinndeling? Avslutningen er sterk og oppsummerer godt."

**Gode formuleringer:**

**Når noe fungerer:**
- "Det fungerer godt når du..."
- "Jeg liker hvordan du..."
- "Effektiv bruk av..."
- "Her holder du leserens interesse fordi..."

**Når noe kan forbedres:**
- "Jeg blir usikker på hva du mener med..."
- "Kan du utdype/konkretisere..."
- "Her kunne det vært nyttig med..."
- "Hva om du prøvde å..."

**Unngå:**
- "Dette er feil/dårlig/dumt"
- "Du må/skal..."
- Sarkasme eller ironi
- For mange kommentarer på en gang

**Fokuser på:**
- Det viktigste først
- Noe forfatteren faktisk kan gjøre noe med
- Tekstens styrker, ikke bare svakheter`,
    },
    {
      id: 'norsk-vg1-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-ex-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om dårlig respons til god respons.',
        subTasks: [
          {
            label: 'a',
            task: 'Dårlig respons: "Kjedelig innledning." Skriv dette om til god respons.',
            solution: 'Eksempel: "Innledningen presenterer temaet, men den fanger ikke oppmerksomheten min. Hva om du startet med et spørsmål, en påstand eller et eksempel som vekker nysgjerrighet?"',
          },
          {
            label: 'b',
            task: 'Dårlig respons: "Du har mange skrivefeil." Skriv dette om til god respons.',
            solution: 'Eksempel: "Jeg legger merke til noen gjentakende skrivefeil, spesielt med dobbel konsonant (f.eks. kommer/komer). Det kan være lurt å kjøre stavekontroll og se spesielt etter dette mønsteret."',
          },
        ],
        solution: 'God respons peker på konkrete problemer og gir forslag til forbedring, uten å være nedlatende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-6-def-4',
      type: 'definition',
      title: 'Å motta og bruke tilbakemelding',
      content: `**Hvordan ta imot respons:**

Det kan være vanskelig å få kritikk på noe du har jobbet med. Her er noen strategier:

**Under responsøkten:**
- Lytt aktivt og ikke avbryt
- Ta notater
- Still oppklarende spørsmål
- Ikke gå i forsvarsposisjon
- Husk: det er teksten, ikke deg, som får tilbakemelding

**Gode spørsmål å stille:**
- "Kan du gi et eksempel?"
- "Hva mener du med...?"
- "Hva tror du hadde fungert bedre?"
- "Hvor i teksten tenker du?"

**Etter responsøkten:**
- Ta tid til å tenke
- Ikke reager i affekt
- Les gjennom kommentarene på nytt
- Vurder hva som er nyttig

**Å vurdere tilbakemeldingene:**

Ikke all respons er like nyttig. Tenk over:
- Er dette en gjennomgående svakhet eller en smakssak?
- Får jeg samme tilbakemelding fra flere?
- Passer forslaget med det jeg vil med teksten?
- Hva er viktigst å jobbe med først?

**Husk:**
- Du bestemmer hva du vil bruke
- Noen kommentarer treffer, andre ikke
- Du trenger ikke endre alt
- Målet er en bedre tekst, ikke å gjøre alle til lags`,
    },
    {
      id: 'norsk-vg1-5-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre når du mottar respons på en tekst?',
        options: [
          { id: 'a', text: 'Forsvare teksten din og forklare hvorfor responsgiveren tar feil', isCorrect: false },
          { id: 'b', text: 'Lytte, ta notater, stille spørsmål, og vurdere hva som er nyttig', isCorrect: true },
          { id: 'c', text: 'Endre alt som blir kritisert umiddelbart', isCorrect: false },
          { id: 'd', text: 'Ignorere responsen og beholde teksten som den er', isCorrect: false },
        ],
        solution: 'Du bør lytte åpent, stille spørsmål for å forstå, og deretter vurdere hva av tilbakemeldingene som er nyttig for teksten din.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-6-def-5',
      type: 'definition',
      title: 'Kvalitetskriterier for tekster',
      content: `**Hva kjennetegner en god tekst?**

For å gi og motta god respons trenger vi kriterier å vurdere etter:

**INNHOLD:**
- Svarer teksten på oppgaven?
- Er innholdet relevant og interessant?
- Har teksten et klart tema/budskap?
- Er påstandene begrunnet?

**STRUKTUR:**
- Har teksten en god innledning?
- Er hoveddelen logisk organisert?
- Henger avsnittene sammen?
- Er det en avslutning som runder av?

**SPRÅK:**
- Er språket tilpasset mottaker og formål?
- Er setningene klare og varierte?
- Er ordvalget presist?
- Er det god flyt i teksten?

**FORMELLE KRAV:**
- Er rettskrivingen korrekt?
- Er tegnsettingen riktig?
- Følger teksten sjangerkonvensjoner?
- Er kilder oppgitt?

**Sjangerspesifikke kriterier:**
Ulike sjangre har ulike krav. En novelle vurderes etter andre kriterier enn en artikkel. Sjekk alltid oppgaven og vurderingskriteriene.

**Tips:**
Bruk vurderingskriteriene som sjekkliste både når du skriver, når du gir respons, og når du reviderer.`,
    },
    {
      id: 'norsk-vg1-5-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en sjekkliste for respons på argumenterende tekst.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bør du se etter i innledningen?',
            solution: 'Fanger den oppmerksomheten? Presenterer den temaet? Er problemstillingen/tesen tydelig?',
          },
          {
            label: 'b',
            task: 'Hva bør du se etter i argumentasjonen?',
            solution: 'Er påstandene tydelige? Har argumentene belegg? Er motargumenter drøftet? Er strukturen logisk?',
          },
          {
            label: 'c',
            task: 'Hva bør du se etter i avslutningen?',
            solution: 'Oppsummerer den hovedpunktene? Svarer den på problemstillingen? Runder den av på en god måte?',
          },
        ],
        solution: 'En sjekkliste hjelper deg å gi systematisk respons på de viktigste aspektene ved en tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-6-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-ex-9',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder en tekst etter kvalitetskriterier.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en tekst (egen eller annens) og vurder innholdet: Er det relevant? Er påstandene begrunnet?',
            solution: 'Vurderingen bør peke på konkrete eksempler på hva som fungerer og ikke fungerer innholdsmessig.',
          },
          {
            label: 'b',
            task: 'Vurder strukturen: Har teksten god innledning, hoveddel og avslutning? Henger avsnittene sammen?',
            solution: 'Vurderingen bør se på oppbygning, avsnittsinndeling og sammenheng.',
          },
          {
            label: 'c',
            task: 'Vurder språket: Er det klart og presist? Er det tilpasset mottaker?',
            solution: 'Vurderingen bør se på ordvalg, setningsbygning og språklig stil.',
          },
        ],
        solution: 'Å vurdere tekster etter kriterier utvikler din evne til å se hva som fungerer og ikke fungerer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-6-def-6',
      type: 'definition',
      title: 'Fra respons til revisjon',
      content: `**Å bruke respons til å forbedre teksten:**

Respons er bare nyttig hvis du bruker den. Slik går du fra tilbakemelding til revisjon:

**Steg 1: Sorter tilbakemeldingene**
- Hva handler om innhold/struktur? (store endringer)
- Hva handler om språk/tegnsetting? (små endringer)
- Hva er viktigst å ta tak i?

**Steg 2: Prioriter**
- Jobb med det viktigste først
- Store endringer før små
- Ikke prøv å fikse alt på en gang

**Steg 3: Revider systematisk**
- Én ting om gangen
- Les gjennom etter hver endring
- Sjekk at endringene fungerer

**Steg 4: Les gjennom helheten**
- Fungerer teksten bedre nå?
- Har endringene skapt nye problemer?
- Er du fornøyd?

**Vanlige revisjoner:**
- Skrive om uklar innledning
- Flytte avsnitt for bedre struktur
- Legge til eksempler og belegg
- Kutte unødvendig tekst
- Forbedre overganger
- Variere setningslengde
- Rette språkfeil

**Husk:**
Revisjon handler om å gjøre teksten bedre, ikke perfekt. En tekst kan alltid forbedres, men på et tidspunkt må du være fornøyd og levere.

**Ny respons?**
Etter store revisjoner kan det være lurt å få ny respons før du ferdigstiller teksten.`,
    },
    {
      id: 'norsk-vg1-5-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Revider en tekst basert på respons.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en tekst du har fått respons på. Sorter tilbakemeldingene: hva er viktigst å forbedre?',
            solution: 'Prioriter store endringer (innhold, struktur) før små (språk, tegnsetting).',
          },
          {
            label: 'b',
            task: 'Revider teksten. Gjør minst tre konkrete forbedringer basert på responsen.',
            solution: 'Vis at du har brukt tilbakemeldingene aktivt til å forbedre teksten.',
          },
          {
            label: 'c',
            task: 'Skriv en kort refleksjon: Hva endret du og hvorfor? Hva valgte du å ikke endre?',
            solution: 'Refleksjonen viser at du har vurdert responsen kritisk og tatt bevisste valg.',
          },
        ],
        solution: 'Øvelsen viser at du kan bruke respons aktivt til å forbedre tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-6-example-1',
      type: 'example',
      title: 'Eksempel: God og dårlig respons',
      problem: 'Se forskjellen på god og dårlig tilbakemelding.',
      solution: `**Tekst (utdrag):**
"Klimaendringer er et stort problem. Det er veldig varmt. Vi må gjøre noe. Mange dyr dør. Det er trist."

---

**DÅRLIG RESPONS:**
"Dette er for kort og dårlig. Du må skrive mer og bedre."

**Problemer:**
- Vag og uspesifikk
- Ikke konstruktiv
- Ingen forslag til forbedring
- Fokuserer på personen ("du må")

---

**GOD RESPONS:**
"Jeg forstår at du er opptatt av klimaendringer - det er et viktig tema! Jeg savner imidlertid mer utdyping: Hvilke klimaendringer tenker du på? Hva mener du med 'gjøre noe'?

Konkrete forslag:
- Kan du gi et eksempel på klimaendringer?
- Kan du forklare sammenhengen mellom varme og dyr som dør?
- Hva slags tiltak tenker du på?

Setningene er veldig korte og like. Prøv å variere ved å binde noen sammen med 'fordi' eller 'som' - da får du også forklart sammenhengene."

**Styrker:**
- Konkret og spesifikk
- Stiller spørsmål som hjelper forfatteren
- Gir konkrete forslag
- Respektfull tone
- Begynner med noe positivt`,
    },
    {
      id: 'norsk-vg1-5-6-example-2',
      type: 'example',
      title: 'Eksempel: Fra respons til revisjon',
      content: `**Oppgave/Situasjon:**
Se hvordan en elev bruker tilbakemelding systematisk til a forbedre teksten sin.

**Opprinnelig innledning:**
"Jeg skal skrive om sosiale medier. Det er et tema mange er opptatt av. I denne teksten skal jeg skrive litt om dette."

**Tilbakemelding mottatt:**
1. "Innledningen er litt vag - hva spesifikt med sosiale medier?"
2. "Hva er tesen din? Hva mener du?"
3. "'Skrive litt om' høres uforpliktende ut"

**Elevens tankeprosess:**
Medelevene har rett - innledningen min sier egentlig ingenting. Jeg ma:
- Velge et spesifikt fokus
- Formulere en tydelig tese
- Høres mer sikker ut

**Revidert innledning:**
"Hver dag bruker norske ungdommer i gjennomsnitt tre timer pa sosiale medier. Dette pavirker bade hvordan vi kommuniserer og hvordan vi ser pa oss selv. I denne teksten vil jeg argumentere for at sosiale medier har flere negative enn positive effekter pa ungdoms selvbilde."

**Hva ble bedre?**
- Konkret apning med fakta
- Tydelig fokus (ungdoms selvbilde)
- Klar tese (mer negativt enn positivt)
- Sikker tone ("vil jeg argumentere for")

**Neste steg:**
Forfatteren kan na:
- Utvikle argumenter som støtter tesen
- Inkludere motargumenter
- Finne belegg og eksempler

**Lærdom:**
Respons er bare nyttig hvis du bruker den aktivt. Les kritikken nøye, tenk over hva som er rimelig, og gjør konkrete endringer.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-5-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-ex-7',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Delta i en responsgruppe.',
        subTasks: [
          {
            label: 'a',
            task: 'Forbered respons på medelevenes tekster på forhånd.',
            solution: 'Les tekstene nøye, noter styrker og forbedringsområder, formuler konkrete spørsmål og forslag.',
          },
          {
            label: 'b',
            task: 'Gi respons i gruppen etter metodene du har lært.',
            solution: 'Start positivt, vær konkret, gi forslag, lytt til andre, vær respektfull.',
          },
          {
            label: 'c',
            task: 'Reflekter over hvordan det var å gi og motta respons.',
            solution: 'Refleksjon kan handle om hva som var vanskelig, hva du lærte, og hvordan responsen hjalp teksten din.',
          },
        ],
        hints: ['Les tekstene grundig på forhånd', 'Bruk sandwich-metoden', 'Vær konkret og respektfull'],
        solution: 'Responsgrupper gir verdifull trening i å vurdere tekst og motta tilbakemelding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-6-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over din egen utvikling som skribent.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type tilbakemelding hjelper deg mest?',
            solution: 'Refleksjon kan handle om konkrete forslag vs. spørsmål, fokus på innhold vs. språk, osv.',
          },
          {
            label: 'b',
            task: 'Hva er det vanskeligste med å motta kritikk på tekster?',
            solution: 'Vanlige utfordringer: å ikke ta det personlig, å vite hva man skal bruke, å akseptere at teksten kan bli bedre.',
          },
          {
            label: 'c',
            task: 'Hvordan kan du bruke respons mer aktivt i fremtidige skriveoppgaver?',
            solution: 'Forslag kan være: søke respons tidligere, stille spesifikke spørsmål, bruke sjekklister, sette av tid til revisjon.',
          },
        ],
        solution: 'Metarefleksjon over egen skriveprosess gjør deg til en mer bevisst og selvstendig skribent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['kombinere virkemidler kreativt i egen tekstskaping'],
      },
    },
    {
      id: 'norsk-vg1-5-6-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 5.6

**Hovedpunkter:**
- God respons er konkret, begrunnet, konstruktiv og balansert - den fokuserer på teksten, ikke personen
- Sandwich-metoden: start positivt, gi konstruktiv kritikk, avslutt positivt
- Du bestemmer selv hva av responsen du vil bruke - vurder kritisk hva som er nyttig

**Sentrale begreper:**
- **Respons**: Tilbakemelding på tekst underveis i skriveprosessen
- **Konstruktiv kritikk**: Kritikk som peker på problemer OG gir forslag til løsninger
- **Responsgruppe**: Små grupper som gir tilbakemelding på hverandres tekster
- **Vurderingskriterier**: Hva teksten bedømmes etter (innhold, struktur, språk, formelle krav)

**Tips for eksamen:**
- Gi konkret respons med eksempler, ikke vage kommentarer som "bra" eller "dårlig"
- Når du mottar kritikk: lytt, ta notater, still spørsmål - og ta deg tid til å vurdere
- Bruk vurderingskriteriene som sjekkliste både når du skriver og gir respons`,
    },
    {
      id: 'norsk-vg1-5-6-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **5.4 Skriveprosess og revisjon** – Bruk respons i revisjonsfasen
- **5.1 Muntlig kommunikasjon** – Gi muntlig tilbakemelding
- **5.3 Fagartikkel** – Gi respons på fagartikler
- **5.5 Tolkende og analyserende tekst** – Gi respons på analyser`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Samlet array for Del 4
// ============================================================================

export const NORSK_VG1_CHAPTERS_DEL4: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_6_1,
  CHAPTER_NORSK_VG1_6_2,
  CHAPTER_NORSK_VG1_6_4,
  CHAPTER_NORSK_VG1_5_4,
  CHAPTER_NORSK_VG1_5_5,
  CHAPTER_NORSK_VG1_5_6,
  CHAPTER_NORSK_VG1_7_1,
  CHAPTER_NORSK_VG1_7_2,
  CHAPTER_NORSK_VG1_7_3,
  CHAPTER_NORSK_VG1_7_4,
];
