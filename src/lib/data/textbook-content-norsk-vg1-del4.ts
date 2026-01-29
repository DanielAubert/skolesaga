/**
 * Norsk VG1 - Del 4: Kapittel 12.1–14.3
 * Sammensatte tekster, film, skriveprosess, samisk språk og kultur
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_ISAK_SABA_SAMI_SOGA_LAVLLA,
} from './textbook-content-norsk-vg1-tekster';

// ============================================================================
// KAPITTEL 12.1: Sammensatte tekster
// ============================================================================

export const CHAPTER_NORSK_VG1_12_1: TextbookChapter = {
  id: 'norsk-vg1-12-1',
  courseId: 'norsk-vg1',
  chapterNumber: '12.1',
  title: 'Sammensatte tekster',
  description: 'Lær å analysere multimodale tekster som kombinerer ulike uttrykksformer som tekst, bilde og lyd.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
    'bruke fagbegreper i analyse av tekster',
  ],
  content: [
    {
      id: 'norsk-vg1-12-1-intro',
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
      id: 'norsk-vg1-12-1-def-1',
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
      id: 'norsk-vg1-12-1-def-2',
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
      id: 'norsk-vg1-12-1-def-3',
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
      id: 'norsk-vg1-12-1-example-1',
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
      id: 'norsk-vg1-12-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn en reklame (på nett, i et blad, eller på TV) og analyser den.',
        hints: ['Beskriv først hva du ser', 'Analyser visuelt og verbalt', 'Vurder samspillet mellom modalitetene', 'Hvem er målgruppen?'],
        solution: 'Analysen bør vise evne til å bruke fagbegreper og identifisere virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-3',
        number: '3',
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
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en post fra et nøytralt tema på sosiale medier (f.eks. en matoppskrift, et reisebilde, eller en dyrevideo).',
        hints: ['Beskriv alle elementene', 'Hvem er avsenderen?', 'Hvem er målgruppen?', 'Hva er formålet?'],
        solution: 'Analysen bør vise forståelse for hvordan sosiale medier fungerer som sammensatte tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en enkel sammensatt tekst: en plakat for et skolearrangement.',
        hints: ['Velg et tema (konsert, idrettsdag, teater, etc.)', 'Tenk på målgruppe', 'Kombiner tekst og bilde', 'Tenk på farger, layout og typografi'],
        solution: 'Plakaten bør vise bevisst bruk av flere modaliteter som virker sammen for å kommunisere et tydelig budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-6',
        number: '6',
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
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-7',
        number: '7',
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
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-8',
        number: '8',
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
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en sammensatt tekst om et skolefaglig tema (f.eks. klimaendringer, demokrati eller helse).',
        hints: ['Velg minst tre modaliteter (f.eks. tekst, bilde, farger)', 'Tenk på hvem som er mottaker', 'Planlegg hvordan modalitetene skal virke sammen', 'Formatet kan være plakat, nettside-utkast eller presentasjon'],
        solution: 'Teksten bør vise bevisst bruk av flere modaliteter som forsterker hverandre og formidler budskapet effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-10',
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
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-11',
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
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.2: Film som tekst
// ============================================================================

export const CHAPTER_NORSK_VG1_12_2: TextbookChapter = {
  id: 'norsk-vg1-12-2',
  courseId: 'norsk-vg1',
  chapterNumber: '12.2',
  title: 'Film som tekst',
  description: 'Lær å analysere film med fokus på filmspråk, virkemidler og adaptasjon av litteratur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
    'sammenligne tekster og vurdere hvordan samme tema behandles i ulike sjangrer og medier',
  ],
  content: [
    {
      id: 'norsk-vg1-12-2-intro',
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
      id: 'norsk-vg1-12-2-def-1',
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
      id: 'norsk-vg1-12-2-def-2',
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
      id: 'norsk-vg1-12-2-def-3',
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
      id: 'norsk-vg1-12-2-def-4',
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
      id: 'norsk-vg1-12-2-example-1',
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
      id: 'norsk-vg1-12-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en scene fra en film du liker og analyser bruken av filmspråk.',
        hints: ['Beskriv hva som skjer', 'Se på kameraføring og klipping', 'Hvordan brukes lyd?', 'Hva uttrykker valgene?'],
        solution: 'Analysen bør vise evne til å bruke fagbegreper og forklare hvordan filmspråket skaper mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en norsk film.',
        hints: ['Velg en scene eller sekvens å fokusere på', 'Hvordan brukes typisk norske virkemidler (naturbilder, stillhet, realisme)?', 'Hva er filmens tema?'],
        solution: 'Analysen bør vise forståelse for norsk filmtradisjon og evne til filmanalyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-4',
        number: '4',
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
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: Kan en film noen gang være "like god som boken"?',
        hints: ['Er det rettferdig å sammenligne?', 'Hva kan film gjøre som bok ikke kan?', 'Hva kan bok gjøre som film ikke kan?', 'Bør de vurderes hver for seg?'],
        solution: 'Drøftingen bør vise forståelse for at bok og film er ulike medier med ulike styrker, og at begge kan være gode på hver sin måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-6',
        number: '6',
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
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-7',
        number: '7',
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
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-8',
        number: '8',
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
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-9',
        number: '9',
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
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-10',
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
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-11',
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
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 13.1: Skriving - prosess og teknikker
// ============================================================================

export const CHAPTER_NORSK_VG1_13_1: TextbookChapter = {
  id: 'norsk-vg1-13-1',
  courseId: 'norsk-vg1',
  chapterNumber: '13.1',
  title: 'Skriving - prosess og teknikker',
  description: 'Lær om skriveprosessen og teknikker for å bli en bedre skribent.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike skrivestrategier og tilpasse skriving til formål og mottaker',
    'gi og motta tilbakemelding på tekster og bruke dette i egen skriving',
  ],
  content: [
    {
      id: 'norsk-vg1-13-1-intro',
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
      id: 'norsk-vg1-13-1-def-1',
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
      id: 'norsk-vg1-13-1-def-2',
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
      id: 'norsk-vg1-13-1-def-3',
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
      id: 'norsk-vg1-13-1-def-4',
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
      id: 'norsk-vg1-13-1-example-1',
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
      id: 'norsk-vg1-13-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Prøv friskriving om et selvvalgt tema.',
        hints: ['Sett en timer på 10 minutter', 'Skriv uten å stoppe', 'Ikke bry deg om feil', 'Se hva som dukker opp'],
        solution: 'Friskriving skal gi deg råmateriale og overvinne skrivesperre. Resultatet trenger ikke være polert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et tankekart for en tekst om et tema du kjenner godt.',
        hints: ['Velg et tema (hobby, fag, erfaring)', 'Sett temaet i midten', 'Skriv assosiasjoner', 'Finn sammenhenger'],
        solution: 'Tankekartet skal vise strukturer og sammenhenger i emnet ditt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tilbakemelding på en medelevs tekst (eller en du har skrevet selv tidligere).',
        hints: ['Start med noe positivt', 'Vær konkret', 'Still spørsmål', 'Foreslå forbedringer'],
        solution: 'Tilbakemeldingen bør være konstruktiv, konkret og respektfull.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-5',
        number: '5',
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
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-6',
        number: '6',
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
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-7',
        number: '7',
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
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-8',
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
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-9',
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
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-10',
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
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-11',
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
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14.1: De samiske språkene i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_14_1: TextbookChapter = {
  id: 'norsk-vg1-14-1',
  courseId: 'norsk-vg1',
  chapterNumber: '14.1',
  title: 'De samiske språkene i Norge',
  description: 'Lær om de samiske språkene, deres utbredelse og status i Norge.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for den historiske bakgrunnen for samisk og nasjonale minoritetsspråk i Norge',
    'reflektere over språklig mangfold i Norge og Norden',
  ],
  content: [
    {
      id: 'norsk-vg1-14-1-intro',
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
      id: 'norsk-vg1-14-1-def-1',
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
      id: 'norsk-vg1-14-1-def-2',
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
      id: 'norsk-vg1-14-1-def-3',
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
      id: 'norsk-vg1-14-1-example-1',
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
    // Primærtekst: Isak Saba - Sámi soga lávlla
    {
      id: 'norsk-vg1-14-1-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Isak Saba - "Sámi soga lávlla" (Samefolkets sang)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-14-1-primaertekst-1-text',
          type: 'text',
          content: TEKST_ISAK_SABA_SAMI_SOGA_LAVLLA,
        },
      ],
    },
    {
      id: 'norsk-vg1-14-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-2',
        number: '2',
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
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-3',
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
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-4',
        number: '4',
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
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (150-200 ord) om hvorfor kunnskap om samiske språk bør være del av norskfaget.',
        hints: ['Tenk på Norges historie', 'Tenk på LK20 og læreplanmål', 'Tenk på forsoning og forståelse'],
        solution: 'Teksten bør argumentere for at kunnskap om samisk er viktig for å forstå norsk historie, kultur og språklig mangfold, og for forsoning etter fornorskingspolitikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-6',
        number: '6',
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
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-7',
        number: '7',
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
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-8',
        number: '8',
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
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-9',
        number: '9',
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
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-10',
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
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-11',
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
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14.2: Fornorskingspolitikken
// ============================================================================

export const CHAPTER_NORSK_VG1_14_2: TextbookChapter = {
  id: 'norsk-vg1-14-2',
  courseId: 'norsk-vg1',
  chapterNumber: '14.2',
  title: 'Fornorskingspolitikken',
  description: 'Lær om den norske statens assimileringspolitikk overfor samer og kvener.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for den historiske bakgrunnen for samisk og nasjonale minoritetsspråk i Norge',
    'reflektere over hvordan språkpolitikk har påvirket minoritetsgrupper',
  ],
  content: [
    {
      id: 'norsk-vg1-14-2-intro',
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
      id: 'norsk-vg1-14-2-def-1',
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
      id: 'norsk-vg1-14-2-def-2',
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
      id: 'norsk-vg1-14-2-def-3',
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
      id: 'norsk-vg1-14-2-def-4',
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
      id: 'norsk-vg1-14-2-example-1',
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
      id: 'norsk-vg1-14-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-2',
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
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-3',
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
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-4',
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
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en refleksjonstekst (200-250 ord) om hva du tenker om fornorskingspolitikken og dens betydning for Norge i dag.',
        hints: ['Hva har du lært som var nytt?', 'Hvordan kan kunnskap bidra til forsoning?', 'Hva er statens ansvar?', 'Hva kan du som enkeltperson gjøre?'],
        solution: 'Teksten bør vise refleksjon over historien, forståelse for konsekvensene og tanker om forsoning og veien videre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-6',
        number: '6',
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
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-7',
        number: '7',
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
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-8',
        number: '8',
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
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-9',
        number: '9',
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
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-10',
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
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-11',
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
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14.3: Samiske språklige rettigheter
// ============================================================================

export const CHAPTER_NORSK_VG1_14_3: TextbookChapter = {
  id: 'norsk-vg1-14-3',
  courseId: 'norsk-vg1',
  chapterNumber: '14.3',
  title: 'Samiske språklige rettigheter',
  description: 'Lær om lover og rettigheter som beskytter samisk språk i dag.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for språkpolitikk og språklige rettigheter i Norge',
    'reflektere over forholdet mellom språk, makt og identitet',
  ],
  content: [
    {
      id: 'norsk-vg1-14-3-intro',
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
      id: 'norsk-vg1-14-3-def-1',
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
      id: 'norsk-vg1-14-3-def-2',
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
      id: 'norsk-vg1-14-3-def-3',
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
      id: 'norsk-vg1-14-3-def-4',
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
      id: 'norsk-vg1-14-3-example-1',
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
      id: 'norsk-vg1-14-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-2',
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
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-3',
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
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-4',
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
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en tekst (200 ord) om hvordan du mener Norge bør jobbe med samisk språk fremover.',
        hints: ['Hva fungerer bra i dag?', 'Hva bør forbedres?', 'Hva kan du selv gjøre?', 'Hvordan kan teknologi hjelpe?'],
        solution: 'Teksten bør vise forståelse for utfordringer og muligheter, og komme med konkrete forslag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-6',
        number: '6',
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
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-7',
        number: '7',
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
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-8',
        number: '8',
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
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-9',
        number: '9',
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
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-10',
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
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-11',
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
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Samlet array for Del 4
// ============================================================================

export const NORSK_VG1_CHAPTERS_DEL4: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_12_1,
  CHAPTER_NORSK_VG1_12_2,
  CHAPTER_NORSK_VG1_13_1,
  CHAPTER_NORSK_VG1_14_1,
  CHAPTER_NORSK_VG1_14_2,
  CHAPTER_NORSK_VG1_14_3,
];
