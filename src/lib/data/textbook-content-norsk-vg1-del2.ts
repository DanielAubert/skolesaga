/**
 * Norsk VG1 - Del 2: Kapittel 4.1–6.3
 * Språk og identitet (4.1), nynorsk/bokmål (4.3), språkmangfold (4.4),
 * språk i endring (4.5), fagartikkel (5.3), digitale tekster og sosiale medier (6.3)
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_AASEN_NORSK_GRAMMATIK_FORORD,
  TEKST_WERGELAND_ESSAY,
  TEKST_AASEN_NORDMANNEN,
  TEKST_VINJE_FERDAMINNI_UTDRAG,
  TEKST_GARBORG_BONDESTUDENTAR_UTDRAG,
} from './textbook-content-norsk-vg1-tekster';

// ============================================================================
// KAPITTEL 4.1: Språk og identitet
// ============================================================================

export const CHAPTER_NORSK_VG1_4_1: TextbookChapter = {
  id: 'norsk-vg1-4-1',
  courseId: 'norsk-vg1',
  chapterNumber: '4.1',
  title: 'Språk og identitet',
  description: 'Utforsk sammenhengen mellom språk, identitet og tilhørighet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over sammenhengen mellom språk, kultur og identitet',
  ],
  content: [
    {
      id: 'norsk-vg1-4-1-intro',
      type: 'text',
      content: `## Språk og identitet

Språket er ikke bare et verktøy for kommunikasjon - det former hvem vi er og hvordan vi oppfatter verden. Gjennom språket uttrykker vi tilhørighet, verdier og personlighet.

**Språk og identitet henger sammen:**
- Dialekt viser geografisk tilhørighet
- Sosiolekt viser sosial gruppe
- Fagspråk viser yrkestilhørighet
- Ungdomsspråk viser generasjon

**Spørsmål å reflektere over:**
- Hvordan påvirker språket mitt identiteten min?
- Tilpasser jeg språket mitt til ulike situasjoner?
- Hva sier språkvalgene mine om meg?`,
    },
    {
      id: 'norsk-vg1-4-1-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Dialekt** | Geografisk variasjon av et språk |
| **Sosiolekt** | Språkvariasjon knyttet til sosiale grupper |
| **Idiolekt** | En persons personlige måte å snakke på |
| **Kodeveksling** | Å veksle mellom ulike språkstiler etter situasjon |
| **Standardspråk** | Den offisielle skriftnormen |
| **Språklig identitet** | Hvordan språket vårt uttrykker hvem vi er |
| **Språkholdninger** | Holdninger til ulike måter å snakke på |
| **Flerspråklighet** | Å beherske flere språk |`,
    },
    {
      id: 'norsk-vg1-4-1-def-1',
      type: 'definition',
      title: 'Språklig variasjon',
      content: `**Dialekt:**
- Geografisk variasjon av språket
- Kjennetegnes av uttale, ord og bøyning
- De fire hoveddialektgruppene: østnorsk, vestnorsk, trøndersk, nordnorsk
- Norsk har stor dialektaksept sammenlignet med andre land

**Sosiolekt:**
- Språkvariasjon knyttet til sosiale grupper
- Påvirkes av utdanning, yrke, alder, kjønn
- Eksempel: akademisk språk vs. arbeiderspråk

**Idiolekt:**
- Din personlige måte å snakke på
- Unik kombinasjon av dialekt, sosiolekt og personlige trekk
- Påvirket av oppvekst, utdanning, interesser

**Kodeveksling:**
- Veksle mellom ulike språkstiler
- Tilpasse språket til situasjonen
- En naturlig del av språklig kompetanse`,
    },
    {
      id: 'norsk-vg1-4-1-image-dialektkart',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-4-1-dialektkart.png',
      alt: 'Kart over Norge som viser de fire hoveddialektomradene: ostnorsk, vestnorsk, trondersk og nordnorsk',
      caption: 'Dialektkart over Norge med de fire hoveddialektomradene markert i ulike farger.',
    },
    {
      id: 'norsk-vg1-4-1-image-dialekttrekk',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-4-1-dialekttrekk.png',
      alt: 'Oversikt over typiske dialekttrekk for hvert av de fire hoveddialektomradene i Norge',
      caption: 'Karakteristiske dialekttrekk for ostnorsk, vestnorsk, trondersk og nordnorsk.',
    },
    {
      id: 'norsk-vg1-4-1-def-2',
      type: 'definition',
      title: 'Språk, makt og holdninger',
      content: `**Språk og makt:**
- Standardspråk vs. dialekter
- Hvem bestemmer hva som er "korrekt"?
- Språklig diskriminering

**Språkholdninger:**
- Fordommer basert på talemål
- "Finere" og "grovere" dialekter
- Språklig mangfold som ressurs

**Flerspråklighet:**
- Mange nordmenn er flerspråklige
- Ulike morsmål i Norge
- Samisk, kvensk og andre minoritetsspråk

**Språkpolitikk:**
- Norges to offisielle skriftspråk
- Språklig likestilling
- Språklige rettigheter`,
    },
    {
      id: 'norsk-vg1-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Kodeveksling i praksis',
      problem: `En elev fra Trøndelag går på skole i Oslo. Hvordan kan hen tilpasse språket til ulike situasjoner?`,
      solution: `**Med venner fra Trøndelag:**
- Bruker trønderdialekt
- Lokale uttrykk og ord
- Uformelt språk

**I klasserommet:**
- Kan beholde dialekten, men kanskje dempe noen trekk
- Tilpasser formelliteten til situasjonen
- Bruker fagspråk når det er relevant

**I jobbintervju:**
- Beholder dialekten (det er helt akseptert)
- Mer formelt ordvalg
- Tydelig og klar uttale

**Med besteforeldre:**
- Kanskje bruker mer tradisjonell dialekt
- Unngår ungdomsslang

**Refleksjon:**
Kodeveksling er ikke "falskt" eller "uærlig" - det er en naturlig tilpasning til kommunikasjonssituasjonen. Vi gjør det alle, mer eller mindre bevisst.`,
    },
    {
      id: 'norsk-vg1-4-1-example-2',
      type: 'example',
      title: 'Eksempel: Analyse av spraakholdninger',
      content: `**Oppgave/Situasjon:**
En elev fra Nordland opplever at medelever i Oslo kommenterer dialekten hennes. Noen sier den er "koselig", andre spor om hun kan "snakke normalt".

**Analyse:**
Dette eksemplet viser flere typer spraakholdninger:

1. **Stereotypisering:** Nordnorsk forbindes ofte med "koselig" - en positiv, men overfladisk holdning som kan fole reduserende.

2. **Normativitet:** Sparsmalet om aa "snakke normalt" avslorer en holdning om at ostlandsk er "normalspraak", mens andre dialekter er avvik.

3. **Maktforhold:** Standardostlandsk har hoyere status i mange sammenhenger, noe som kan skape usikkerhet hos dialektbrukere.

**Forklaring:**
Spraakholdninger er ofte ubevisste. De formes av:
- Media (hvem snakker i nyheter og TV-serier?)
- Skole og arbeidsliv
- Sosiale hierarkier

Bevissthet om egne spraakholdninger er forste steg mot aa verdsette spraaklig mangfold.`,
    },

    // ========== PRIMÆRTEKSTER ==========
    {
      id: 'norsk-vg1-4-1-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen – Forord til «Norsk Grammatik» (1864)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-4-1-primaertekst-1-text',
          type: 'text',
          content: TEKST_AASEN_NORSK_GRAMMATIK_FORORD,
        },
      ],
    },
    {
      id: 'norsk-vg1-4-1-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland – Om språk og frihet',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-4-1-primaertekst-2-text',
          type: 'text',
          content: TEKST_WERGELAND_ESSAY,
        },
      ],
    },

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Reflekter over ditt eget språk:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan vil du beskrive din egen dialekt/idiolekt?',
            solution: 'Beskriv særtrekk ved ditt talemål: uttale, ordvalg, typiske uttrykk.',
          },
          {
            label: 'b',
            task: 'I hvilke situasjoner tilpasser du språket ditt?',
            solution: 'Reflekter over hvordan du snakker ulikt med venner, foreldre, lærere osv.',
          },
          {
            label: 'c',
            task: 'Hva sier språkvalgene dine om identiteten din?',
            solution: 'Tenk over hva talemålet ditt forteller om tilhørighet og bakgrunn.',
          },
        ],
        hints: ['Vær ærlig og reflektert', 'Det finnes ingen feil svar'],
        solution: 'Språklig selvrefleksjon øker bevisstheten om egen kommunikasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter språkholdninger:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke fordommer finnes mot ulike dialekter i Norge?',
            solution: 'Eksempler: Bergen-dialekt oppfattes som arrogant, nordnorsk som koselig, østlandsk som nøytralt.',
          },
          {
            label: 'b',
            task: 'Hvorfor tror du disse holdningene finnes?',
            solution: 'Kobling til geografi, sosial status, medierepresentasjon.',
          },
          {
            label: 'c',
            task: 'Hvordan kan vi motvirke språklige fordommer?',
            solution: 'Bevisstgjøring, eksponering for mangfold, holdningsarbeid.',
          },
        ],
        solution: 'Språkholdninger er ofte ubevisste og kan motvirkes gjennom refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk flerspråklighet i Norge: Hvor mange språk snakkes i Norge i dag? Hvilke minoritetsspråk har offisiell status?',
        hints: ['Bruk Språkrådet og SSB som kilder', 'Se på urfolksspråk og innvandrerspråk'],
        solution: 'Norge har stor språklig variasjon, med samisk, kvensk og romani som offisielle minoritetsspråk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en refleksjonstekst (250-300 ord) om forholdet mellom språk og identitet, med utgangspunkt i ditt eget liv.',
        hints: ['Bruk konkrete eksempler', 'Reflekter over både muntlig og skriftlig språk'],
        solution: 'Teksten skal vise personlig refleksjon og kobling til fagstoff.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: Bør alle i Norge snakke bokmål/standardøstlandsk, eller bør vi bevare dialektene?',
        hints: ['Se saken fra flere sider', 'Tenk på kommunikasjon, identitet og demokrati'],
        solution: 'En god drøfting presenterer argumenter for og mot, og viser evne til nyansering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en idiolekt?',
        options: [
          { id: 'a', text: 'En persons helt personlige måte å snakke på', isCorrect: true },
          { id: 'b', text: 'Et språk som bare snakkes i én region', isCorrect: false },
          { id: 'c', text: 'Et skriftspråk som brukes i akademiske tekster', isCorrect: false },
          { id: 'd', text: 'En dialekt som er i ferd med å dø ut', isCorrect: false },
        ],
        solution: 'En idiolekt er din personlige måte å snakke på - en unik kombinasjon av dialekt, sosiolekt og individuelle trekk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr kodeveksling?',
        options: [
          { id: 'a', text: 'At man veksler mellom ulike språkstiler avhengig av situasjonen', isCorrect: true },
          { id: 'b', text: 'At man bytter mellom bokmål og nynorsk i samme tekst', isCorrect: false },
          { id: 'c', text: 'At man endrer dialekten sin permanent når man flytter', isCorrect: false },
          { id: 'd', text: 'At man oversetter fra et språk til et annet', isCorrect: false },
        ],
        solution: 'Kodeveksling er å tilpasse språket sitt til ulike situasjoner og samtalepartnere. Det er en naturlig del av språklig kompetanse.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten av Ivar Aasen (forordet til «Norsk Grammatik»). Hva er Aasens hovedargument for at Norge trenger et eget skriftspråk? Hvordan begrunner han dette?',
        hints: ['Se på hva Aasen mener om forholdet mellom talespråk og skriftspråk', 'Tenk på den historiske konteksten: Norge under dansk påvirkning'],
        solution: 'Aasen argumenterer for at det norske talespråket har egenverdi og fortjener et eget skriftspråk. Han begrunner dette med at dialektene representerer en levende norsk språktradisjon som er forskjellig fra dansk, og at et folk trenger et skriftspråk som gjenspeiler deres eget talemål for å bevare sin kulturelle identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten av Henrik Wergeland om språk og frihet. Sammenlign Wergelands syn på språk med moderne språkdebatt i Norge. Hvilke paralleller og forskjeller finner du?',
        hints: ['Tenk på hva Wergeland mente med språklig frihet', 'Se på debatten om nynorsk/bokmål i dag, eller debatten om engelske lånord'],
        solution: 'Wergeland så språk som uløselig knyttet til frihet og nasjonal identitet. I moderne debatt ser vi lignende argumenter brukt både i målstriden og i debatten om engelsk påvirkning. Forskjellen er at Wergelands kamp handlet om nasjonsbygging etter 1814, mens dagens debatt handler mer om globalisering og identitet i en flerkulturell tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et forskningsessay (400-500 ord) om språk og makt i Norge. Bruk minst tre kilder og drøft hvordan språkvalg kan gi makt eller skape avmakt.',
        hints: [
          'Tenk på standardspråk vs. dialekt, bokmål vs. nynorsk, norsk vs. samisk',
          'Bruk konkrete eksempler fra norsk samfunn',
          'Husk kildehenvisninger og kildeliste',
        ],
        solution: 'Essayet bør drøfte hvordan språknormer, språkvalg og språkpolitikk kan være uttrykk for maktforhold. Gode eksempler inkluderer fornorskingspolitikken overfor samer, debatten om sidemål, og holdninger til ulike dialekter og sosiolekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en debattekst: Bør dialekt brukes i formelle sammenhenger som nyhetsopplesning, stortingsdebatter og undervisning? Argumenter for ditt syn.',
        hints: [
          'Vurder argumenter for og mot',
          'Tenk på demokrati, representasjon og kommunikasjon',
          'Bruk eksempler fra norsk mediehistorie',
        ],
        solution: 'En god debattekst tar et tydelig standpunkt, men viser også forståelse for motargumenter. Argumenter for dialektbruk: demokrati, identitet, norsk tradisjon. Argumenter mot: forståelighet, profesjonalitet, tradisjon for standardspråk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Dialekt:** Geografisk variasjon av språket med særtrekk i uttale, ord og bøyning
- **Sosiolekt:** Språkvariasjon knyttet til sosiale grupper (utdanning, yrke, alder)
- **Idiolekt:** Din personlige måte å snakke på - en unik kombinasjon av påvirkninger
- **Kodeveksling:** Å tilpasse språket til ulike situasjoner og samtalepartnere
- **Språkholdninger:** Fordommer og vurderinger knyttet til ulike talemål

**Det viktigste å huske:**
1. Språk er tett knyttet til identitet - vi uttrykker tilhørighet gjennom måten vi snakker på
2. Kodeveksling er en naturlig og viktig språklig kompetanse, ikke noe falskt
3. Norge har stor dialektaksept sammenlignet med mange andre land

**Kompetansemål dette kapittelet dekker:**
- Reflektere over sammenhengen mellom språk, kultur og identitet`,
    },
    {
      id: 'norsk-vg1-4-1-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **4.2 Norsk sammenlignet med andre språk** – Utforsk norskens plass i språkfamilien
- **4.3 Nynorsk og bokmål** – Se hvordan de norske målformene former identitet
- **4.4 Språkmangfold i Norge** – Forstå dialekters og minoritetsspråks rolle for identitet
- **3.1 Flerkulturell litteratur** – Les tekster om språk og identitet i praksis`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2: Norsk sammenlignet med andre språk
// ============================================================================

export const CHAPTER_NORSK_VG1_4_2: TextbookChapter = {
  id: 'norsk-vg1-4-2',
  courseId: 'norsk-vg1',
  chapterNumber: '4.2',
  title: 'Norsk sammenlignet med andre språk',
  description: 'Sammenlign norsk med andre språk og utforsk hvordan språklige møter skaper endringer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for utvikling og variasjon i norsk språk',
    'reflektere over sammenhengen mellom språk, kultur og identitet',
  ],
  content: [
    {
      id: 'norsk-vg1-4-2-intro',
      type: 'text',
      content: `## Norsk i et språklig perspektiv

Norsk er ikke et isolert språk - det er en del av en stor språkfamilie og har gjennom historien blitt påvirket av mange andre språk. Ved å sammenligne norsk med andre språk kan vi bedre forstå både vårt eget språk og hvordan språk generelt fungerer og utvikler seg.

**I dette kapittelet skal vi se på:**
- Norsk i den germanske språkfamilien
- Skandinavisk nabospråkforståelse
- Lånord og språkpåvirkning
- Språkmangfold og flerspråklighet

**Språk er i stadig endring:**
Norsk er et levende språk som stadig påvirkes av andre språk og kulturer. Dette er ikke noe nytt - det har skjedd gjennom hele språkhistorien.`,
    },
    {
      id: 'norsk-vg1-4-2-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Språkfamilie** | Gruppe av beslektede språk med felles opphav |
| **Germanske språk** | Språkgruppe som inkluderer norsk, engelsk, tysk |
| **Kognat** | Ord i ulike språk med felles historisk opphav |
| **Lånord** | Ord som er lånt inn fra et annet språk |
| **Nabospråkforståelse** | Evne til å forstå nærslektede språk |`,
    },
    {
      id: 'norsk-vg1-4-2-def-1',
      type: 'definition',
      title: 'Norsk i den germanske språkfamilien',
      content: `**De germanske språkene deles inn i:**

**Nordgermanske (skandinaviske) språk:**
- Norsk, svensk, dansk (fastlandsskandinavisk)
- Islandsk, færøysk (øyskandinavisk)

**Vestgermanske språk:**
- Engelsk, tysk, nederlandsk, frisisk

**Østgermanske språk:**
- Gotisk (utdødd)

**Felles opphav:**
Alle germanske språk stammer fra et felles urgermansk språk som ble snakket for ca. 2500 år siden. Derfor finner vi mange likheter mellom språkene.

**Eksempler på felles ord (kognat):**
| Norsk | Engelsk | Tysk | Svensk |
|-------|---------|------|--------|
| hus | house | Haus | hus |
| vann | water | Wasser | vatten |
| mor | mother | Mutter | mor |
| fot | foot | Fuß | fot |
| grønn | green | grün | grön |

**Språktreet:**
Når vi tegner et språktre, ser vi at norsk, svensk og dansk er nærmest beslektede - som søsken. Engelsk og tysk er som fettere.`,
    },
    {
      id: 'norsk-vg1-4-2-image-indoeuropeisk-tre',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-4-2-indoeuropeisk-tre.png',
      alt: 'Spraaktre som viser den indoeuropeiske spraakfamilien med forgreninger til germanske, romanske, slaviske og andre spraakgrupper',
      caption: 'Det indoeuropeiske spraaktreet viser hvordan norsk er beslektet med andre europeiske spraak gjennom felles opphav.',
    },
    {
      id: 'norsk-vg1-4-2-image-germansk',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-4-2-germansk.png',
      alt: 'Oversikt over de germanske spraakene delt inn i nordgermansk, vestgermansk og ostgermansk',
      caption: 'De germanske spraakene med norsk plassert i den nordgermanske grenen sammen med svensk, dansk, islandsk og faroysk.',
    },
    {
      id: 'norsk-vg1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn kognater (beslektede ord) mellom norsk og engelsk:',
        subTasks: [
          {
            label: 'a',
            task: 'Lag en liste med minst 10 ord som er like på norsk og engelsk.',
            solution: 'Eksempler: arm/arm, finger/finger, kne/knee, hus/house, land/land, mann/man, sommer/summer, vinter/winter, blå/blue, grønn/green.',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor disse ordene ligner på hverandre.',
            solution: 'Ordene ligner fordi norsk og engelsk begge er germanske språk som stammer fra et felles urgermansk språk. De grunnleggende ordene har bevart likheten gjennom århundrene.',
          },
        ],
        hints: ['Se på kroppsdeler, farger, tall og familiemedlemmer', 'Tenk på ord som er grunnleggende og gamle'],
        solution: 'Kognater viser den felles opprinnelsen til germanske språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken språkgruppe tilhører norsk?',
        options: [
          { id: 'a', text: 'Nordgermanske (skandinaviske) språk', isCorrect: true },
          { id: 'b', text: 'Vestgermanske språk', isCorrect: false },
          { id: 'c', text: 'Romanske språk', isCorrect: false },
          { id: 'd', text: 'Slaviske språk', isCorrect: false },
        ],
        solution: 'Norsk tilhører de nordgermanske (skandinaviske) språkene, sammen med svensk, dansk, islandsk og færøysk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-2-def-2',
      type: 'definition',
      title: 'Skandinavisk nabospråkforståelse',
      content: `**Nabospråkforståelse:**
Nordmenn, svensker og dansker kan i stor grad forstå hverandres språk. Dette kalles nabospråkforståelse eller semikommunikasjon.

**Likheter mellom de skandinaviske språkene:**

| Norsk | Svensk | Dansk |
|-------|--------|-------|
| jeg | jag | jeg |
| hva | vad | hvad |
| hus | hus | hus |
| ikke | inte | ikke |
| takk | tack | tak |
| god morgen | god morgon | godmorgen |

**Forskjeller som kan skape misforståelse:**

**"Falske venner" (ord som ligner, men betyr noe annet):**
- "rolig" - norsk: rolig, svensk: morsom
- "grina" - norsk: grine (gråte), svensk: flire
- "rar" - norsk: merkelig, svensk: snill
- "frokost" - norsk: morgenmåltid, dansk: lunsj

**Uttaleforskjeller:**
- Dansk har ofte "bløtt" d og g
- Svensk har tonal aksent (ordmelodi)
- Norsk har tydeligere uttale av konsonanter

**Nordmenn forstår best:**
Studier viser at nordmenn vanligvis forstår svensk og dansk bedre enn svensker og dansker forstår hverandre. Dette kan skyldes at norsk ligger "midt imellom" de to andre.`,
    },
    {
      id: 'norsk-vg1-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nabospråkforståelse - les og svar:',
        subTasks: [
          {
            label: 'a',
            task: 'Les denne svenske teksten og oversett til norsk: "Jag tycker om att läsa böcker. Min favorit är en bok om en ung flicka som bor i ett stort hus vid havet."',
            solution: 'Jeg liker å lese bøker. Min favoritt er en bok om en ung jente som bor i et stort hus ved havet.',
          },
          {
            label: 'b',
            task: 'Hvilke ord var lettest å forstå? Hvilke var vanskeligst?',
            solution: 'Lette ord: jag (jeg), bok, hus, havet. Vanskeligere: tycker om (liker), läsa (lese), flicka (jente). Ordene som ligner mest er substantiv og grunnleggende ord.',
          },
          {
            label: 'c',
            task: 'Hvorfor kan nordmenn ofte forstå svensk bedre enn omvendt?',
            solution: 'Norsk ligger språklig mellom svensk og dansk. Nordmenn hører også mer svensk (musikk, TV) enn svensker hører norsk. Norge har også mer dialektvariasjon, som gjør nordmenn vant til å "tolke" ulike språkvarianter.',
          },
        ],
        solution: 'Nabospråkforståelse krever litt øvelse, men er mulig fordi språkene er nært beslektet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk "falske venner" mellom skandinaviske språk:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn tre eksempler på ord som ser like ut på norsk og svensk/dansk, men betyr noe forskjellig.',
            solution: 'Eksempler: rolig (no: calm, sv: morsom), grina (no: gråte, sv: flire), rar (no: merkelig, sv: snill), frokost (no: morgenmåltid, da: lunsj), glass (no: glass, sv: iskrem).',
          },
          {
            label: 'b',
            task: 'Hvorfor kan slike ord skape misforståelser?',
            solution: 'Fordi vi antar at like ord betyr det samme. Når et ord ser kjent ut, bruker vi ikke ekstra energi på å sjekke betydningen - og da kan vi misforstå fullstendig.',
          },
        ],
        hints: ['Søk på "falske venner skandinavisk" eller spør noen som kan svensk/dansk'],
        solution: 'Falske venner viser at selv nært beslektede språk kan ha viktige forskjeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-2-def-3',
      type: 'definition',
      title: 'Lånord og språkpåvirkning',
      content: `**Språkpåvirkning gjennom historien:**

**Fra norrønt til andre språk (vikingtiden):**
Norsk/norrønt ga mange ord til engelsk:
- "egg" (egg), "sky" (sky), "window" (vindu - vindauga)
- "they", "their", "them" (pronomen)
- Stedsnavn i England: -by (Whitby), -thorpe (Cleethorpes)

**Fra lavtysk/nedertysk (hansatiden 1200-1500):**
- arbeid, flink, prøve, snekkere, bekjent
- billig, betale, handle, pris
- Svært mange hverdagsord vi bruker i dag

**Fra dansk (unionstiden):**
- Dansk skriftspråk påvirket norsk sterkt
- Mange ordformer og uttrykksmåter

**Fra fransk (1700-1800-tallet):**
- elegant, parfyme, restaurant, garderobe
- Særlig ord knyttet til kultur, mote, mat

**Fra engelsk (1900-tallet til i dag):**
- Teknologi: datamaskin, software, app
- Kultur: film, show, band, hit
- Sport: fotball, tennis, fair play
- Sosiale medier: like, selfie, hashtag

**Norvagisering:**
Mange engelske lånord tilpasses norsk:
- "guide" → gaid
- "design" → designe (verb)
- "team" → lag (erstatning)`,
    },
    {
      id: 'norsk-vg1-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en liste med 10 engelske lånord som brukes i norsk i dag. For hvert ord: Skriv en norsk erstatning der det finnes.',
        hints: ['Tenk på teknologi, sport, musikk og sosiale medier', 'Sjekk Språkrådets ordliste for norske alternativer'],
        solution: 'Eksempler: software/programvare, design/utforming, deadline/tidsfrist, feedback/tilbakemelding, workshop/verksted, mail/e-post, cool/kul, team/lag, highlights/høydepunkter, content/innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket språk har gitt flest lånord til norsk i perioden 1200-1500 (hansatiden)?',
        options: [
          { id: 'a', text: 'Lavtysk (nedertysk)', isCorrect: true },
          { id: 'b', text: 'Engelsk', isCorrect: false },
          { id: 'c', text: 'Fransk', isCorrect: false },
          { id: 'd', text: 'Latin', isCorrect: false },
        ],
        solution: 'Lavtysk (nedertysk) ga svært mange lånord til norsk i hansatiden. Ord som arbeid, billig, prøve, flink og handle kommer fra lavtysk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-2-def-4',
      type: 'definition',
      title: 'Norsk og engelsk - likheter og forskjeller',
      content: `**Likheter mellom norsk og engelsk:**

**Felles ordforråd (kognater):**
| Norsk | Engelsk |
|-------|---------|
| mann | man |
| land | land |
| hand | hand |
| bok | book |
| god | good |
| lang | long |
| ung | young |

**Lignende setningsstruktur:**
- Begge språk: Subjekt - Verb - Objekt (SVO)
- "Jeg leser en bok" / "I read a book"

**Forskjeller mellom norsk og engelsk:**

**Verbsystem:**
- Norsk: Enkel bøyning (leser, leste, har lest)
- Engelsk: Mer komplekst tempussystem (am reading, have been reading)

**Ordstilling:**
- Norsk: V2-regel (verbet alltid på andre plass)
  - "I går gikk jeg på kino"
- Engelsk: Subjektet før verbet
  - "Yesterday I went to the cinema"

**Substantiv:**
- Norsk: Tre kjønn (hankjønn, hunkjønn, intetkjønn)
- Engelsk: Ingen grammatisk kjønn

**Uttale:**
- Norsk: Skrift og uttale stemmer relativt godt
- Engelsk: Stor forskjell mellom skrift og uttale`,
    },
    {
      id: 'norsk-vg1-4-2-def-5',
      type: 'definition',
      title: 'Språkmangfold og flerspråklighet',
      content: `**Flerspråklighet i Norge:**
Norge har alltid vært flerspråklig. I tillegg til norsk finnes:

**Urfolksspråk:**
- Samisk (flere varianter: nordsamisk, sørsamisk, lulesamisk)
- Samisk har offisiell status i Norge

**Nasjonale minoritetsspråk:**
- Kvensk (finsk-beslektet)
- Romani (språket til romanifolket)
- Romanes (språket til romfolk)

**Tegnspråk:**
- Norsk tegnspråk er et fullverdig språk med egen grammatikk

**Innvandrerspråk:**
- Polsk, arabisk, urdu, somalisk, tyrkisk m.fl.
- Mange nordmenn har et annet morsmål enn norsk

**Fordeler med flerspråklighet:**
- Kognitiv fleksibilitet
- Kulturell forståelse
- Kommunikasjonsmuligheter
- Økonomiske fordeler

**Språkmøter skaper endring:**
Når språk møtes, påvirker de hverandre. Dette kan gi:
- Lånord og nye uttrykk
- Kodeveksling (veksle mellom språk)
- Nye språkvarianter (multietnolekter)`,
    },
    {
      id: 'norsk-vg1-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Spore etymologi',
      problem: 'Undersøk opphavet til ordet "vindu". Hvilken språkhistorie forteller dette ordet?',
      solution: `**Etymologisk analyse av "vindu":**

**Norsk:** vindu
**Opprinnelse:** Norrønt "vindauga" (vind + auge = vindøye)

**Sammenligning:**
| Språk | Ord | Betydning |
|-------|-----|-----------|
| Norrønt | vindauga | vindøye |
| Engelsk | window | fra norrønt |
| Tysk | Fenster | fra latin fenestra |
| Svensk | fönster | fra latin fenestra |
| Dansk | vindue | fra norrønt |

**Hva dette forteller oss:**
1. Norsk og dansk har beholdt det norrøne ordet
2. Engelsk lånte ordet fra vikingene
3. Tysk og svensk lånte fra latin
4. Ordet viser kontakten mellom språk

**Refleksjon:**
Vikingenes påvirkning på engelsk var så sterk at grunnleggende ord som "window" kommer fra norrønt. Dette viser hvordan folkevandringer og erobringer påvirker språk.`,
    },
    {
      id: 'norsk-vg1-4-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Etymologi-oppgave: Undersøk opphavet til disse ordene og hvilket språk de kommer fra: "ski", "ombudsman", "fjord", "ransake", "slalom".',
        hints: ['Bruk etymologiske ordbøker eller Store norske leksikon', 'Disse ordene har gått fra norsk/skandinavisk til andre språk'],
        solution: 'Alle disse ordene har skandinavisk/norrønt opphav og er lånt inn i andre språk: ski (norrønt skíð), ombudsman (svensk/norsk), fjord (norrønt fjǫrðr), ransake (norrønt rannsaka), slalom (norsk sla + lom = skrånende spor). Dette viser at språkpåvirkning går begge veier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Sammenligning av setninger',
      problem: 'Oversett setningen "Mannen som bor i det store huset, leser en bok" til svensk, dansk og engelsk. Hva legger du merke til?',
      solution: `**Oversettelse:**

**Norsk:** Mannen som bor i det store huset, leser en bok.

**Svensk:** Mannen som bor i det stora huset, läser en bok.

**Dansk:** Manden som bor i det store hus, læser en bog.

**Engelsk:** The man who lives in the big house is reading a book.

**Observasjoner:**

**Skandinaviske språk:**
- Svært lik ordstilling og struktur
- Små forskjeller i ordformer:
  - store/stora/store (adjektiv)
  - huset/huset/hus (bestemt form)
  - bok/bok/bog (substantiv)

**Norsk vs. engelsk:**
- Engelsk bruker bestemt artikkel (the)
- Norsk har etterstilt artikkel (mannen, huset)
- Engelsk: "is reading" (pågående handling)
- Norsk: "leser" (enklere verbform)
- Engelsk: "big" (ett ord for stor/stort/store)
- Norsk: Adjektivet bøyes (store)

**Konklusjon:**
De skandinaviske språkene er svært like i struktur. Engelsk har en del forskjeller, men er fremdeles gjenkjennelig som et beslektet språk.`,
    },
    {
      id: 'norsk-vg1-4-2-example-3',
      type: 'example',
      title: 'Eksempel: Laanord fra ulike epoker',
      content: `**Oppgave/Situasjon:**
Identifiser opphavet til disse vanlige norske ordene og forklar hva de forteller om norsk historie.

**Analyse:**

| Ord | Opphav | Historisk kontekst |
|-----|--------|-------------------|
| arbeid | Lavtysk | Hansatiden (1200-1500) - handel og haandverk |
| straff | Lavtysk | Hansatiden - lov og orden |
| restaurant | Fransk | 1700-1800-tallet - europeisk finkultur |
| sjaafor | Fransk | Bilen kommer til Norge, franske ord for ny teknologi |
| streame | Engelsk | 2000-tallet - digital mediebruk |
| podcast | Engelsk | 2000-tallet - ny medieteknologi |

**Forklaring:**
Laanordene viser hvilke kulturer og nasjoner som har pavirket Norge gjennom historien:
- **Tysk pavirkning:** Hanseatene dominerte handel i Bergen og andre byer
- **Fransk pavirkning:** Fransk var kulturens og diplomatens spraak
- **Engelsk pavirkning:** USA og Storbritannia dominerer teknologi og populaerkultur

Spraakhistorie er ogsaa kulturhistorie. Ordene vi bruker forteller hvem vi har vaert i kontakt med.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-4-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en refleksjonstekst (300-400 ord) der du drøfter: Bør vi beskytte norsk mot engelske lånord, eller er språkblanding en naturlig del av språkutviklingen?',
        hints: [
          'Tenk på historiske eksempler (lavtysk, fransk)',
          'Vurder argumenter for og mot',
          'Ta et standpunkt og begrunn det',
          'Bruk eksempler fra din egen språkbruk',
        ],
        solution: 'En god drøfting bør inneholde: 1) Historisk perspektiv - norsk har alltid tatt opp lånord 2) Argumenter for: språklig rikdom, kommunikasjon, naturlig utvikling 3) Argumenter mot: tap av norske ord, forståelsesproblemer, kulturell identitet 4) Et nyansert standpunkt som viser refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Intervju en person som snakker et annet språk enn norsk som morsmål. Still følgende spørsmål og skriv en kort rapport (200-300 ord):',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var vanskeligst å lære da de lærte norsk?',
            solution: 'Rapporten bør gjengi informantens erfaringer og reflektere over hva dette forteller om norsk språk.',
          },
          {
            label: 'b',
            task: 'Hvilke likheter og forskjeller ser de mellom norsk og morsmålet sitt?',
            solution: 'Rapporten bør inneholde konkrete eksempler på likheter og forskjeller.',
          },
          {
            label: 'c',
            task: 'Bruker de noen ganger ord fra morsmålet når de snakker norsk?',
            solution: 'Rapporten bør knytte dette til kodeveksling og flerspråklighet.',
          },
        ],
        hints: ['Vær respektfull og nysgjerrig', 'Ta notater eller spør om du kan ta opp samtalen', 'Reflekter over hva svarene forteller om språk generelt'],
        solution: 'Intervjuet gir innsikt i hvordan norsk oppleves utenfra og belyser flerspråklighet i praksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør et mini-forskningsprosjekt: Sammenlign en kort tekst (5-10 setninger) på norsk, svensk og dansk. Analyser likheter og forskjeller i ordforråd, grammatikk og ortografi. Presenter funnene dine i en tabell med forklaring.',
        hints: [
          'Du kan bruke en nyhetsartikkel, Wikipedia-artikkel eller lignende',
          'Se på ordstilling, ordformer og skrivemåte',
          'Bruk Google Translate eller en som kan språket til å sjekke',
        ],
        solution: 'Prosjektet bør vise systematisk sammenligning med konkrete eksempler. Tabellen bør inneholde minst 5-10 ord/uttrykk med analyse av likheter og forskjeller. Konklusjonen bør reflektere over hva sammenligningen viser om skandinavisk språkfellesskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Germanske språk:** Språkfamilien norsk tilhører, sammen med svensk, dansk, engelsk og tysk
- **Nordgermansk:** Undergruppen med de skandinaviske språkene (norsk, svensk, dansk, islandsk, færøysk)
- **Kognater:** Beslektede ord i ulike språk med felles opphav (hus/house/Haus)
- **Nabospråkforståelse:** At skandinaver kan forstå hverandres språk uten oversettelse
- **Lånord:** Ord som er tatt inn fra andre språk (f.eks. fra lavtysk, fransk, engelsk)

**Det viktigste å huske:**
1. Norsk tilhører de nordgermanske (skandinaviske) språkene og er nærmest beslektet med svensk og dansk
2. Skandinavisk nabospråkforståelse er unik i verden - vi forstår hverandre uten å ha lært språkene formelt
3. Norsk har gjennom historien blitt påvirket av mange språk: norrønt, lavtysk, dansk, engelsk

**Kompetansemål dette kapittelet dekker:**
- Gjøre rede for utvikling og variasjon i norsk språk
- Reflektere over sammenhengen mellom språk, kultur og identitet`,
    },
    {
      id: 'norsk-vg1-4-2-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **4.1 Språk og identitet** – Forstå hvordan språk former identitet
- **4.3 Nynorsk og bokmål** – Utforsk de norske målformene i dybden
- **4.4 Språkmangfold i Norge** – Se på dialekter og minoritetsspråk
- **4.5 Språk i endring** – Følg språkutviklingen fra norrønt til i dag`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3: Digitale tekster og sosiale medier
// ============================================================================

export const CHAPTER_NORSK_VG1_6_3: TextbookChapter = {
  id: 'norsk-vg1-6-3',
  courseId: 'norsk-vg1',
  chapterNumber: '6.3',
  title: 'Digitale tekster og sosiale medier',
  description: 'Analyser og produser tekster i digitale medier.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og produsere sammensatte tekster i digitale medier',
  ],
  content: [
    {
      id: 'norsk-vg1-6-3-intro',
      type: 'text',
      content: `## Digitale tekster

I dagens samfunn er digitale tekster en sentral del av hverdagen. Vi leser, skriver og deler tekster på måter som var utenkelige for få tiår siden.

**Digitale teksttyper:**
- Sosiale medier (Instagram, TikTok, Snapchat)
- Blogger og nettaviser
- Podkaster og videoinnhold
- Kommentarfelt og forum
- Meldinger og chat

**Særtrekk ved digitale tekster:**
- Multimodale (tekst, bilde, lyd, video)
- Interaktive (kommentarer, delinger)
- Flytende (kan endres, slettes, deles)
- Målbare (likes, visninger, rekkevidde)`,
    },
    {
      id: 'norsk-vg1-6-3-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Digitale tekster** | Tekster som lages og leses på digitale plattformer |
| **Sosiale medier** | Plattformer for deling og kommunikasjon |
| **Interaktivitet** | Mulighet for brukere å delta og respondere |
| **Viralitet** | Når innhold spres raskt og bredt på nett |
| **Algoritme** | Program som bestemmer hva du ser |
| **Personvern** | Retten til å kontrollere egen informasjon |
| **Digital kompetanse** | Evne til å bruke digitale verktøy kritisk |
| **Nettvett** | Bevissthet om sikkerhet og etikk på nett |`,
    },
    {
      id: 'norsk-vg1-6-3-def-1',
      type: 'definition',
      title: 'Sammensatte tekster',
      content: `**Modaliteter:**
- **Verbalspråk:** Skriftlig og muntlig tekst
- **Visuell:** Bilder, farger, layout, typografi
- **Auditiv:** Musikk, lydeffekter, stemme
- **Kinestetisk:** Animasjon, bevegelse

**Samspill mellom modaliteter:**
- **Forsterkning:** Modalitetene støtter samme budskap
- **Utfylling:** Hver modalitet tilfører noe eget
- **Kontrast:** Modalitetene står i motsetning (ofte ironisk effekt)

**Digitale virkemidler:**
- Lenker og hypertext
- Interaktive elementer
- Algoritmebasert innhold
- Hashtags og metadata`,
    },
    {
      id: 'norsk-vg1-6-3-def-2',
      type: 'definition',
      title: 'Sosiale medier og påvirkning',
      content: `**Kjennetegn ved sosiale medier:**
- Brukerskapt innhold
- Umiddelbar deling
- Algoritmebasert visning
- Personlig branding

**Påvirkningsmekanismer:**
- **Filterbobler:** Algoritmer viser innhold basert på tidligere aktivitet
- **Ekkokamre:** Eksponering for likesinnede synspunkter
- **Influencer-markedsføring:** Skjult reklame gjennom personligheter
- **FOMO:** Fear Of Missing Out - sosial angst

**Kritisk mediebruk:**
- Vær bevisst på algoritmers påvirkning
- Sjekk kilder før du deler
- Reflekter over personvern
- Vær aktiv produsent, ikke bare konsument`,
    },
    {
      id: 'norsk-vg1-6-3-image-sosiale-medier',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-6-3-sosiale-medier.png',
      alt: 'Skjermbildemockup av en sosial medie-grensesnitt med typiske elementer som likes, kommentarer og delinger',
      caption: 'Sosiale medier er sammensatte tekster med mange elementer: profil, bilde, tekst, hashtags, likes, kommentarer og delinger. Hvert element bidrar til å skape mening.',
    },
    {
      id: 'norsk-vg1-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av Instagram-post',
      problem: `Analyser en influencers sponsede Instagram-post om et hudpleieprodukt.`,
      solution: `**Modaliteter:**
- Visuelt: Profesjonelt bilde, god belysning, produktet synlig
- Verbalt: Personlig tekst med "jeg elsker dette produktet"
- Interaktivt: Call-to-action ("link i bio"), hashtags

**Retorisk analyse:**
- **Etos:** Influencerens personlige merkevare og troverdighet
- **Patos:** Personlig anbefaling, "dette endret huden min"
- **Logos:** Eventuell henvisning til ingredienser/forskning

**Kritisk vurdering:**
- Er dette sponset? (bør merkes)
- Hvem er målgruppen?
- Hvilke behov appellerer det til?
- Er det skjulte motiver?

**Konklusjon:**
Innlegget fremstår personlig, men er i realiteten markedsføring. Samspillet mellom modalitetene skaper en følelse av autentisitet som tilslører det kommersielle formålet.`,
    },
    {
      id: 'norsk-vg1-6-3-example-2',
      type: 'example',
      title: 'Eksempel: Analyse av TikTok-video',
      content: `**Oppgave/Situasjon:**
Analyser en typisk TikTok-video der en ungdom snakker om "studietips".

**Analyse:**

**Modaliteter i bruk:**
| Modalitet | Eksempel | Funksjon |
|-----------|----------|----------|
| Visuell | Ansikt i focus, estetisk rom | Skaper naerhet og troverdighet |
| Verbal | Muntlig, uformelt spraak | Foler seg som en venn |
| Auditiv | Trendy bakgrunnsmusikk | Holder oppmerksomheten |
| Tekstlig | Teksting paa skjermen | Forsterker budskapet |

**Retorisk analyse:**
- **Etos:** "Jeg fikk 6 paa alle prover" - bygger troverdighet
- **Patos:** "Jeg skjonner at det er slitsomt" - viser empaati
- **Logos:** "Forskning viser at..." - gir faglig tyngde

**Kritiske sporsmal:**
1. Hvem er avsenderen? (Vanlig elev eller betalt innhold?)
2. Hva er formalet? (Hjelpe, underholde, selge?)
3. Er raadene faktisk forskningsbaserte?
4. Hvem er maalgruppen? (Alder, interesser)

**Forklaring:**
Korte videoer paa sosiale medier bruker mange virkemidler samtidig for aa fange og holde oppmerksomheten. Som kritiske mediebrukere maa vi vaere bevisste paa:
- Skjult reklame (affiliate-lenker, sponsede produkter)
- Filterbobler (algoritmen viser mer av det vi liker)
- Forenklet informasjon (komplekse temaer presenteres enkelt)`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Analyser en digital tekst fra sosiale medier:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke modaliteter brukes?',
            solution: 'Beskriv tekst, bilder, lyd, video og interaktive elementer.',
          },
          {
            label: 'b',
            task: 'Hvordan samspiller modalitetene?',
            solution: 'Forsterker de hverandre, utfyller de hverandre, eller skaper de kontrast?',
          },
          {
            label: 'c',
            task: 'Hva er formålet med teksten?',
            solution: 'Informere, underholde, overbevise, selge?',
          },
        ],
        hints: ['Velg en konkret post eller video', 'Se på kommentarfeltet som en del av teksten'],
        solution: 'Analyse av digitale tekster krever oppmerksomhet på flere lag av mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over din egen mediebruk:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke sosiale medier bruker du mest?',
            solution: 'Beskriv bruksmønsteret ditt.',
          },
          {
            label: 'b',
            task: 'Hvordan påvirker algoritmene hva du ser?',
            solution: 'Reflekter over filterbobler og personalisert innhold.',
          },
          {
            label: 'c',
            task: 'Hvordan presenterer du deg selv digitalt?',
            solution: 'Tenk over bevisste og ubevisste valg i selviscenesettelse.',
          },
        ],
        hints: ['Vær ærlig med deg selv', 'Tenk på både positive og negative aspekter'],
        solution: 'Bevissthet om egen mediebruk er første steg mot kritisk forbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en sammensatt tekst for sosiale medier om et tema du bryr deg om.',
        hints: ['Velg plattform og målgruppe', 'Tenk gjennom modalitetsvalg', 'Vær bevisst på retorikk'],
        solution: 'Den sammensatte teksten skal vise bevisst bruk av modaliteter og retoriske virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign hvordan samme nyhetssak dekkes i en nettavis og på sosiale medier. Hva er forskjellene?',
        hints: ['Se på vinkling, kilder, modaliteter', 'Vurder troverdighet'],
        solution: 'Sammenligningen bør vise forståelse for ulike sjangerkrav og medieplattformers egenart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kronikk (300-400 ord) om et aktuelt tema knyttet til digitale medier (f.eks. skjermtid, falske nyheter, influencer-kultur).',
        hints: ['Bruk kildehenvisninger', 'Argumenter saklig', 'Ha en tydelig holdning'],
        solution: 'Kronikken skal kombinere personlig engasjement med saklig argumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er IKKE en modalitet i en sammensatt tekst?',
        options: [
          { id: 'a', text: 'Algoritme', isCorrect: true },
          { id: 'b', text: 'Visuell (bilde, farge, layout)', isCorrect: false },
          { id: 'c', text: 'Auditiv (lyd, musikk)', isCorrect: false },
          { id: 'd', text: 'Verbalspråklig (tekst, tale)', isCorrect: false },
        ],
        solution: 'Algoritme er ikke en modalitet, men en teknisk mekanisme som styrer hvilke tekster vi ser. Modaliteter er uttrykksmåter som verbalspråk, visuell, auditiv og kinestetisk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en filterboble?',
        options: [
          { id: 'a', text: 'Når algoritmer viser deg innhold basert på din tidligere aktivitet, slik at du får et begrenset syn på verden', isCorrect: true },
          { id: 'b', text: 'Et verktøy for å blokkere uønsket innhold på sosiale medier', isCorrect: false },
          { id: 'c', text: 'En type filter man bruker på bilder i Instagram', isCorrect: false },
          { id: 'd', text: 'En metode for å sortere nyheter etter troverdighet', isCorrect: false },
        ],
        solution: 'En filterboble oppstår når algoritmer viser deg innhold som ligner det du allerede har vist interesse for, noe som kan gi et ensidig bilde av virkeligheten.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en multimodal tekst (plakat, infografikk eller kort video) om et selvvalgt tema. Analyser deretter din egen tekst: Hvilke modaliteter har du brukt? Hvordan samspiller de? Hva er formålet?',
        hints: ['Planlegg teksten før du lager den', 'Tenk bevisst gjennom valg av modaliteter', 'Bruk fagbegrepene i analysen'],
        solution: 'Oppgaven tester evnen til både å produsere og analysere multimodale tekster. Analysen bør bruke fagbegreper som forsterkning, utfylling og kontrast.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign dekningen av en aktuell nyhetssak på tre ulike plattformer: en nettavis, en TV-nyhetssending og et innlegg på sosiale medier. Hvordan påvirker plattformen fremstillingen?',
        hints: ['Se på vinkling, kildebruk og modaliteter', 'Vurder troverdighet og grundighet', 'Tenk på målgruppe for hver plattform'],
        solution: 'Sammenligningen bør vise hvordan ulike plattformer har ulike sjangerkrav, ulik bruk av modaliteter og ulikt forhold til tid og rom. Nettaviser kan gå mer i dybden, TV bruker levende bilder, sosiale medier er korte og deler ofte bare overskrifter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (400-500 ord) om kunstig intelligens og digital kompetanse. Drøft: Hvordan endrer AI-verktøy vår forståelse av hva det betyr å lese og skrive kritisk i digitale medier?',
        hints: [
          'Tenk på AI-generert tekst, bilder og video',
          'Drøft hva det betyr for kildekritikk',
          'Vurder både muligheter og utfordringer',
        ],
        solution: 'Essayet bør drøfte hvordan AI utfordrer tradisjonell kildekritikk, hva det betyr at tekster kan genereres automatisk, og hvorfor digital kompetanse blir enda viktigere i en tid med AI.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør en kritisk analyse av influencer-kulturen. Velg en kjent norsk eller internasjonal influencer og analyser tre innlegg. Drøft: Hvilke retoriske virkemidler brukes? Hvordan er forholdet mellom det personlige og det kommersielle? Hva er konsekvensene for unge følgere?',
        hints: [
          'Bruk retorisk analyse (etos, patos, logos)',
          'Se på samspill mellom modaliteter',
          'Reflekter over skjult reklame og påvirkning',
        ],
        solution: 'Analysen bør vise evne til å gjennomskue kommersielle budskap i tilsynelatende personlig innhold. Den bør drøfte etos-bygging, følelsesappell og forholdet mellom autentisitet og markedsføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Digitale tekster:** Tekster som produseres og distribueres digitalt, ofte med interaktive elementer
- **Sosiale medier:** Plattformer for deling av innhold og kommunikasjon (Instagram, TikTok, Snapchat)
- **Algoritmer:** Systemer som styrer hva vi ser i sosiale medier basert på våre handlinger
- **Digital identitet:** Hvordan vi presenterer oss selv på nett
- **Clickbait:** Overskrifter designet for å lokke til klikk, ofte villedende
- **Influencer:** Person som påvirker følgere gjennom innhold i sosiale medier

**Det viktigste å huske:**
1. Sosiale medier er sammensatte tekster som kombinerer tekst, bilde, video og interaksjon
2. Algoritmer påvirker hva vi ser - vi må være kritiske til hvordan informasjon filtreres
3. Grensen mellom personlig innhold og reklame er ofte uklar i sosiale medier

**Kompetansemål dette kapittelet dekker:**
- Analysere og produsere sammensatte tekster i digitale medier`,
    },
    {
      id: 'norsk-vg1-6-3-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **6.1 Sammensatte tekster** – Grunnleggende om multimodale tekster
- **6.2 Film som tekst** – Analyser visuell fortelling i bevegelige bilder
- **6.4 Kildekritikk og falske nyheter** – Vær kritisk til innhold i sosiale medier`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3: Fagartikkel
// ============================================================================

export const CHAPTER_NORSK_VG1_5_3: TextbookChapter = {
  id: 'norsk-vg1-5-3',
  courseId: 'norsk-vg1',
  chapterNumber: '5.3',
  title: 'Fagartikkel',
  description: 'Lær å skrive fagartikler med god struktur og kildebruk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive fagartikler med klar struktur, korrekt kildebruk og tilpasset språk',
  ],
  content: [
    {
      id: 'norsk-vg1-5-3-intro',
      type: 'text',
      content: `## Fagartikkelen

En fagartikkel er en saklig, informerende tekst som formidler kunnskap om et avgrenset tema. Den er en viktig sjanger i skolen og i yrkeslivet.

**Kjennetegn på fagartikkelen:**
- Saklig og informerende
- Klar og logisk struktur
- Kildebasert og etterrettelig
- Tilpasset målgruppe og formål

**Når brukes fagartikkelen?**
- Skoleoppgaver og eksamener
- Akademisk skriving
- Populærvitenskapelig formidling
- Rapporter og utredninger`,
    },
    {
      id: 'norsk-vg1-5-3-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Fagartikkel** | Saklig, informerende tekst om et avgrenset tema |
| **Problemstilling** | Spørsmålet eller temaet artikkelen undersøker |
| **Avsnitt** | Del av teksten som handler om ett poeng |
| **Kildebruk** | Å referere til andre tekster som støtte |
| **Sitat** | Direkte gjengivelse av andres ord |
| **Parafrase** | Å gjengi innhold med egne ord |
| **Kildeliste** | Oversikt over kilder brukt i teksten |
| **Populærvitenskapelig** | Fagstoff tilpasset allmennheten |`,
    },
    {
      id: 'norsk-vg1-5-3-def-1',
      type: 'definition',
      title: 'Struktur i fagartikkelen',
      content: `**Innledning:**
- Presentere tema og problemstilling
- Fange leserens interesse
- Gjøre rede for avgrensning
- Eventuelt definere sentrale begreper

**Hoveddel:**
- Systematisk gjennomgang av tema
- Logisk oppbygning (kronologisk, tematisk, fra generelt til spesifikt)
- Hvert avsnitt har ett hovedpoeng
- Avsnittsmarkører og overganger

**Avslutning:**
- Oppsummere hovedpunkter
- Besvare problemstillingen
- Eventuelt peke på videre perspektiver
- Ikke introdusere nytt stoff

**Kildeliste:**
- Alle kilder som er brukt
- Alfabetisk ordnet
- Korrekt formatert`,
    },
    {
      id: 'norsk-vg1-5-3-image-akademisk-struktur',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-3-akademisk-struktur.png',
      alt: 'Diagram som viser strukturen i en fagartikkel: innledning, hoveddel, avslutning og kildeliste',
      caption: 'Oppbyggingen av en fagartikkel med innledning, hoveddel, avslutning og kildeliste.',
    },
    {
      id: 'norsk-vg1-5-3-image-kildehenvisning',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-5-3-kildehenvisning.png',
      alt: 'Eksempler pa korrekt kildehenvisning i lopende tekst og i kildeliste',
      caption: 'Slik skriver du kildehenvisninger i teksten og i kildelisten.',
    },
    {
      id: 'norsk-vg1-5-3-def-2',
      type: 'definition',
      title: 'Språk og stil',
      content: `**Kjennetegn på faglig språk:**
- Saklig og nøytralt
- Presis ordbruk
- Passende fagtermer
- Variert setningsbygning

**Unngå:**
- Muntlig språk og slang
- For mange personlige pronomen (jeg, vi)
- Følelsesladet språk
- Generaliseringer uten belegg

**Tips for godt fagspråk:**
- Bruk aktive verb der det passer
- Varier mellom korte og lengre setninger
- Unngå unødvendig komplisert språk
- Forklar fagtermer første gang de brukes

**Overganger og sammenheng:**
- "For det første..., for det andre..."
- "I tillegg...", "Dessuten..."
- "På den annen side..."
- "Oppsummert...", "Avslutningsvis..."`,
    },
    {
      id: 'norsk-vg1-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Fra problemstilling til struktur',
      problem: `Planlegg en fagartikkel om temaet "Ungdom og søvn".`,
      solution: `**Problemstilling:**
"Hvordan påvirker søvnmangel ungdommers helse og skoleprestasjoner?"

**Struktur:**

**Innledning:**
- Startpåstand: "Norske ungdommer sover i gjennomsnitt én time mindre enn anbefalt."
- Presentasjon av tema og problemstilling
- Avgrensning: Fokus på helse og skole, ikke årsaker

**Hoveddel:**
1. Hva sier forskningen om ungdom og søvn?
   - Anbefalt søvnmengde
   - Faktisk søvnmengde

2. Fysiske konsekvenser av søvnmangel
   - Immunforsvar
   - Hormonbalanse
   - Overvekt

3. Psykiske konsekvenser
   - Konsentrasjon
   - Hukommelse
   - Følelsesregulering

4. Påvirkning på skoleprestasjoner
   - Forskning på sammenheng søvn-karakterer
   - Konkrete eksempler

**Avslutning:**
- Oppsummering av hovedfunn
- Svar på problemstillingen
- Eventuelt forslag til tiltak

**Kilder:**
- Folkehelseinstituttet, Helsedirektoratet, relevante studier`,
    },
    {
      id: 'norsk-vg1-5-3-example-2',
      type: 'example',
      title: 'Eksempel: Kildebruk i fagartikkel',
      content: `**Oppgave/Situasjon:**
Hvordan bruker vi kilder korrekt i en fagartikkel?

**Losning:**

**1. Sitat (direkte gjengivelse):**
Ifølge Helsedirektoratet (2024) bør ungdom "sove mellom 8 og 10 timer hver natt for optimal helse og læring" (s. 12).

**2. Parafrase (gjengivelse med egne ord):**
Forskning fra Folkehelseinstituttet viser at ungdom som sover mindre enn anbefalt, har hoyere risiko for konsentrasjonsvansker og nedstemthet (FHI, 2023).

**3. Henvisning i teksten:**
Flere studier bekrefter sammenhengen mellom sovnmangel og svakere skoleprestasjoner (Hansen, 2022; Olsen, 2023).

**Kildeliste (alfabetisk):**
- Folkehelseinstituttet. (2023). *Søvn og helse hos ungdom*. https://www.fhi.no/sovn
- Hansen, E. (2022). Søvnens betydning for læring. *Tidsskrift for norsk psykologforening*, 59(4), 234-241.
- Helsedirektoratet. (2024). *Anbefalinger for søvn*. Oslo: Helsedirektoratet.
- Olsen, K. (2023). Ungdom og skjermtid. *Utdanning*, 12, 18-22.

**Forklaring:**
- **Sitat:** Bruk naar ordlyden er viktig. Maa ha anforselsesmerker og sidetall.
- **Parafrase:** Bruk naar du vil gjengi innholdet, men ikke ordlyden. Husk kilde!
- **Kildeliste:** Alle kilder du har brukt, alfabetisk ordnet.`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Vurder disse problemstillingene for en fagartikkel:',
        subTasks: [
          {
            label: 'a',
            task: '"Klima"',
            solution: 'For vagt - må avgrenses til et konkret aspekt.',
          },
          {
            label: 'b',
            task: '"Hvordan påvirker klimaendringer nordnorsk fiske?"',
            solution: 'God - avgrenset og undersøkbar.',
          },
          {
            label: 'c',
            task: '"Klimaendringer er farlig"',
            solution: 'For påstående - en fagartikkel skal undersøke, ikke konkludere på forhånd.',
          },
        ],
        solution: 'En god problemstilling er avgrenset, undersøkbar og nøytral.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Formuler en problemstilling og lag en disposisjon for en fagartikkel om et selvvalgt tema.',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler en avgrenset problemstilling.',
            solution: 'Problemstillingen bør være et spørsmål som kan undersøkes.',
          },
          {
            label: 'b',
            task: 'Lag en disposisjon med innledning, 3-4 punkter i hoveddelen, og avslutning.',
            solution: 'Disposisjonen skal vise logisk oppbygning.',
          },
          {
            label: 'c',
            task: 'List opp minst tre relevante kilder du kan bruke.',
            solution: 'Kildene bør være troverdige og relevante for temaet.',
          },
        ],
        hints: ['Velg et tema du har tilgang til gode kilder om', 'Vær realistisk med omfanget'],
        solution: 'God planlegging er halve jobben med en fagartikkel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv innledningen til fagartikkelen (100-150 ord). Den skal presentere tema, problemstilling og avgrensning.',
        hints: ['Start med noe som fanger oppmerksomheten', 'Vær tydelig på hva artikkelen handler om'],
        solution: 'Innledningen skal gi leseren en klar forventning om hva som kommer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en fullstendig fagartikkel (500-700 ord) med korrekt kildebruk og kildeliste.',
        hints: ['Følg disposisjonen', 'Bruk kildehenvisninger underveis', 'Les gjennom og sjekk struktur og språk'],
        solution: 'Fagartikkelen vurderes etter struktur, innhold, kildebruk og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gi tilbakemelding på en medelevs fagartikkel og revider din egen basert på tilbakemelding.',
        hints: ['Fokuser på struktur, kilder og språk', 'Vær konstruktiv og konkret', 'Bruk vurderingskriteriene'],
        solution: 'Responsarbeid er en viktig del av skriveprosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig rekkefølge i en fagartikkel?',
        options: [
          { id: 'a', text: 'Innledning med problemstilling, hoveddel med systematisk gjennomgang, avslutning med oppsummering, kildeliste', isCorrect: true },
          { id: 'b', text: 'Hoveddel med argumenter, innledning med konklusjon, avslutning med problemstilling, kildeliste', isCorrect: false },
          { id: 'c', text: 'Kildeliste, innledning, avslutning, hoveddel', isCorrect: false },
          { id: 'd', text: 'Problemstilling, personlig mening, kildeliste, hoveddel', isCorrect: false },
        ],
        solution: 'Fagartikkelen følger en klar struktur: innledning (presenterer tema og problemstilling), hoveddel (systematisk gjennomgang), avslutning (oppsummering og svar), og kildeliste.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse er et kjennetegn på godt fagspråk?',
        options: [
          { id: 'a', text: 'Presis ordbruk, saklig tone og forklarte fagtermer', isCorrect: true },
          { id: 'b', text: 'Muntlig språk med mange personlige kommentarer', isCorrect: false },
          { id: 'c', text: 'Følelsesladet språk med mange utropstegn', isCorrect: false },
          { id: 'd', text: 'Så mange fagtermer som mulig uten forklaring', isCorrect: false },
        ],
        solution: 'Godt fagspråk er saklig, presist og tilpasset målgruppen. Fagtermer skal forklares første gang de brukes, og tonen skal være nøytral.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en innledning (100-150 ord) til en fagartikkel om et litteraturhistorisk tema, for eksempel: "Hvordan gjenspeiler norrøn litteratur vikingtidens verdier?" eller "Hva kjennetegner Holbergs satire?"',
        hints: [
          'Start med noe som fanger leserens interesse',
          'Presenter problemstillingen tydelig',
          'Avgrens temaet',
        ],
        solution: 'Innledningen skal fange interesse, presentere tema og problemstilling, og avgrense hva artikkelen skal handle om. Den bør gi leseren en tydelig forventning om innholdet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les dette svake avsnittet fra en fagartikkel og skriv det om slik at det blir bedre:\n\n"Romantikken var kul. Alle var opptatt av naturen og sånne ting. Wergeland skrev masse dikt. Det var fint. Jeg synes romantikken er den beste epoken."',
        hints: [
          'Gjør språket mer saklig og presist',
          'Fjern muntlig språk og personlige meninger',
          'Legg til fagtermer og konkrete eksempler',
        ],
        solution: 'Et forbedret avsnitt kan være: "Romantikken (ca. 1800-1850) var en litterær epoke preget av naturdyrking, nasjonalisme og fokus på følelser. Henrik Wergeland var en sentral skikkelse i norsk romantikk, kjent for sin nasjonalromantiske lyrikk. I diktene sine uttrykker Wergeland kjærlighet til fedrelandet og naturen, noe som var typisk for epokens idealer."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en komplett fagartikkel (600-800 ord) om et litteraturhistorisk tema. Velg selv tema, men artikkelen må ha tydelig problemstilling, god struktur, minst tre kilder og korrekt kildeliste.',
        hints: [
          'Bruk disposisjonen du har laget',
          'Hvert avsnitt skal ha ett hovedpoeng',
          'Bruk overganger mellom avsnittene',
          'Les korrektur til slutt',
        ],
        solution: 'Fagartikkelen vurderes etter: tydelig problemstilling, logisk struktur, saklig og presist språk, korrekt kildebruk og kildeliste, samt faglig innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en kameratvurdering: Bytt fagartikkel med en medelev og gi tilbakemelding basert på disse kriteriene:\n\n1. Er problemstillingen tydelig og avgrenset?\n2. Er strukturen logisk (innledning, hoveddel, avslutning)?\n3. Er språket saklig og presist?\n4. Er kildene troverdige og riktig referert?\n5. Besvarer artikkelen problemstillingen?\n\nSkriv en tilbakemelding (150-200 ord) og revider din egen artikkel basert på tilbakemeldingen du får.',
        hints: [
          'Vær konstruktiv - pek på både styrker og forbedringsområder',
          'Gi konkrete forslag til forbedring',
          'Bruk vurderingskriteriene systematisk',
        ],
        solution: 'Kameratvurdering er en viktig del av skriveprosessen. En god tilbakemelding er konkret, konstruktiv og basert på tydelige kriterier. Å revidere teksten basert på tilbakemelding viser evne til å forbedre eget arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['skrive fagartikler som greier ut og drøfter', 'bruke kilder kritisk og etterrettelig'],
      },
    },
    {
      id: 'norsk-vg1-5-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Fagartikkel:** Saklig tekst som utforsker et emne grundig med kildebruk
- **Problemstilling:** Spørsmålet eller temaet fagartikkelen undersøker
- **IMRaD-struktur:** Innledning, Metode, Resultat og Diskusjon - vanlig i akademiske tekster
- **Kildehenvisning:** Å referere til kilder både i teksten og i kildeliste
- **Drøfting:** Å belyse en sak fra flere sider, veie argumenter mot hverandre

**Det viktigste å huske:**
1. En fagartikkel har tydelig struktur: innledning, hoveddel og avslutning med kildeliste
2. Bruk fagspråk og objektiv tone - unngå personlige meninger uten belegg
3. Kildebruk styrker troverdigheten og viser at du bygger på eksisterende kunnskap

**Kompetansemål dette kapittelet dekker:**
- Skrive fagartikler som greier ut og drøfter
- Bruke kilder kritisk og etterrettelig`,
    },
    {
      id: 'norsk-vg1-5-3-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **1.2 Sakprosa og kildebruk** – Grunnleggende om kildebruk og kildehenvisning
- **5.4 Skriveprosess og revisjon** – Utvikle fagartikkelen gjennom revisjon
- **5.5 Tolkende og analyserende tekst** – Skriv analyser i fagartikkelformat
- **8.2 Tekstbinding og sammenheng** – Skriv tekster med god flyt`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3: Nynorsk og bokmål
// ============================================================================

export const CHAPTER_NORSK_VG1_4_3: TextbookChapter = {
  id: 'norsk-vg1-4-3',
  courseId: 'norsk-vg1',
  chapterNumber: '4.3',
  title: 'Nynorsk og bokmål',
  description: 'Forstå forskjellene mellom målformene og mestre grunnleggende nynorsk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive tekster på hovedmål og sidemål',
    'gjøre rede for utvikling og variasjon i norsk språk',
  ],
  content: [
    {
      id: 'norsk-vg1-4-3-intro',
      type: 'text',
      content: `## To målformer - én norsk kultur

Norge har to offisielle skriftspråk: bokmål og nynorsk. Begge er fullverdige språk med lang historie og rik litteratur.

**Fakta om målformene:**
- Ca. 87% bruker bokmål som hovedmål
- Ca. 13% bruker nynorsk som hovedmål
- Alle elever lærer begge målformer
- Offentlige institusjoner skal svare på den målformen de mottar

**Hvorfor to målformer?**
De to målformene representerer ulike tradisjoner og verdier i norsk språkhistorie, og begge har sin plass i det norske samfunnet.`,
    },
    {
      id: 'norsk-vg1-4-3-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Bokmål** | Norsk skriftspråk basert på dansk-norsk tradisjon |
| **Nynorsk** | Norsk skriftspråk bygget på norske dialekter |
| **Hovedmål** | Elevens primære skriftspråk |
| **Sidemål** | Den andre målformen eleven lærer |
| **Språkrådet** | Offentlig organ for norsk språkpolitikk |
| **Mållov** | Lov som regulerer bruk av bokmål og nynorsk |
| **Språknøytral** | Kommune uten vedtatt målform |
| **Skriftnormal** | Offisiell rettskrivning for en målform |`,
    },
    {
      id: 'norsk-vg1-4-3-def-1',
      type: 'definition',
      title: 'Hovedforskjeller mellom bokmål og nynorsk',
      content: `**Ordformer:**
| Bokmål | Nynorsk |
|--------|---------|
| jeg | eg |
| ikke | ikkje |
| hva | kva |
| hvordan | korleis |
| noe | noko |
| mye | mykje |

**Bøyning av verb:**
| Bokmål | Nynorsk |
|--------|---------|
| kaster | kastar |
| kastet | kasta |
| har kastet | har kasta |

**Bøyning av substantiv:**
| Bokmål | Nynorsk |
|--------|---------|
| bilen | bilen |
| bilene | bilane |
| jenta | jenta |
| jentene | jentene |

**Merk:** Begge målformer har valgfrihet i mange former. Det finnes konservative og radikale varianter av begge.`,
    },
    {
      id: 'norsk-vg1-4-3-image-bokmal-nynorsk',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-4-3-bokmal-nynorsk.png',
      alt: 'Sammenligning av bokmal og nynorsk med eksempler pa ordformer, verbboying og substantivboying',
      caption: 'Oversikt over hovedforskjellene mellom bokmal og nynorsk i ordformer og grammatikk.',
    },
    {
      id: 'norsk-vg1-4-3-image-sprakhistorie-tidslinje',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-4-3-sprakhistorie-tidslinje.png',
      alt: 'Tidslinje over norsk sprakhistorie fra norront via dansk-norsk til dagens bokmal og nynorsk',
      caption: 'Tidslinje som viser utviklingen av norsk skriftsprak fra norront tid til i dag.',
    },
    {
      id: 'norsk-vg1-4-3-def-2',
      type: 'definition',
      title: 'Nynorsk grammatikk',
      content: `**Infinitiv:**
Nynorsk bruker a-infinitiv: å kaste, å lese, å skrive

**Sterke verb:**
Følger ofte andre mønstre enn bokmål:
- skrive - skreiv - har skrive (nynorsk)
- skrive - skrev - har skrevet (bokmål)

**Hunkjønnsord:**
Nynorsk har tydeligere hunkjønn:
- ei jente - jenta - jenter - jentene
- ei bok - boka - bøker - bøkene

**Flertall:**
- -ar for hankjønn: gutar, bilar, hestar
- -er for hunkjønn: jenter, bøker
- Variasjon for intetkjønn: hus, barn

**Adjektiv:**
Samsvarsbøying i nynorsk:
- ein fin bil (hankjønn)
- ei fin jente (hunkjønn)
- eit fint hus (intetkjønn)`,
    },
    {
      id: 'norsk-vg1-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Oversettelse mellom målformer',
      problem: 'Oversett denne teksten til nynorsk:\n\n"Jeg vet ikke hva som skjedde. Det var mye støy, og jeg hørte noen rope. Etterpå fant vi bilen ved veien."',
      solution: `**Nynorsk versjon:**
"Eg veit ikkje kva som hende. Det var mykje støy, og eg høyrde nokon rope. Etterpå fann vi bilen ved vegen."

**Forklaring av endringene:**
- jeg → eg
- vet → veit
- ikke → ikkje
- hva → kva
- skjedde → hende
- mye → mykje
- hørte → høyrde
- noen → nokon
- fant → fann
- veien → vegen`,
    },
    {
      id: 'norsk-vg1-4-3-example-2',
      type: 'example',
      title: 'Eksempel: Verbboying paa nynorsk',
      content: `**Oppgave/Situasjon:**
Boy disse verbene paa nynorsk og sammenlign med bokmal.

**Losning:**

**Svake verb (a-verb):**
| Infinitiv | Presens | Preteritum | Perfektum |
|-----------|---------|------------|-----------|
| aa kaste | kastar | kasta | har kasta |
| aa snakke | snakkar | snakka | har snakka |
| aa hoyre | hoyrer | hoyrde | har hoyrt |

**Sterke verb:**
| Infinitiv | Presens | Preteritum | Perfektum |
|-----------|---------|------------|-----------|
| aa skrive | skriv | skreiv | har skrive |
| aa finne | finn | fann | har funne |
| aa drikke | drikk | drakk | har drukke |

**Forklaring:**
- Svake verb paa nynorsk har **-ar** i presens og **-a** i preteritum
- Sterke verb har **vokalskifte** (skrive-skreiv-skrive)
- Bokmal har ofte **-er** i presens og **-et/-a** i preteritum for svake verb

**Tips:** Oev paa aa gjenkjenne monsteret. Naar du ser "-ar" i presens, vet du at det er nynorsk.`,
    },

    // ========== PRIMÆRTEKSTER ==========
    {
      id: 'norsk-vg1-4-3-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen – «Nordmannen» (1863)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-4-3-primaertekst-1-text',
          type: 'text',
          content: TEKST_AASEN_NORDMANNEN,
        },
      ],
    },
    {
      id: 'norsk-vg1-4-3-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Aasmund Olavsson Vinje – «Ferdaminni» (utdrag, 1861)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-4-3-primaertekst-2-text',
          type: 'text',
          content: TEKST_VINJE_FERDAMINNI_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-4-3-primaertekst-3',
      type: 'collapsible',
      title: 'Primærtekst: Arne Garborg – «Bondestudentar» (utdrag, 1883)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-4-3-primaertekst-3-text',
          type: 'text',
          content: TEKST_GARBORG_BONDESTUDENTAR_UTDRAG,
        },
      ],
    },

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse setningene til nynorsk:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg liker ikke å lese bøker om natten."',
            solution: '"Eg likar ikkje å lese bøker om natta."',
          },
          {
            label: 'b',
            task: '"Hun sa at hun ikke visste hva hun skulle gjøre."',
            solution: '"Ho sa at ho ikkje visste kva ho skulle gjere."',
          },
          {
            label: 'c',
            task: '"Vi fant mange fine steder i byen."',
            solution: '"Vi fann mange fine stader i byen."',
          },
        ],
        hints: ['Bruk ordliste hvis nødvendig', 'Husk verbendelser'],
        solution: 'Nynorsk har andre ordformer og verbendelser enn bokmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy disse verbene på nynorsk (infinitiv - presens - preteritum - perfektum):',
        subTasks: [
          {
            label: 'a',
            task: 'å kaste',
            solution: 'å kaste - kastar - kasta - har kasta',
          },
          {
            label: 'b',
            task: 'å skrive',
            solution: 'å skrive - skriv - skreiv - har skrive',
          },
          {
            label: 'c',
            task: 'å finne',
            solution: 'å finne - finn - fann - har funne',
          },
        ],
        solution: 'Sterke verb har vokalendring, svake verb får -a i preteritum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst (100-150 ord) på nynorsk om en aktivitet du liker.',
        hints: ['Bruk ordbok og grammatikkhjelp', 'Les gjennom teksten for å sjekke ordformer'],
        solution: 'Teksten skal vise at du behersker grunnleggende nynorsk grammatikk og ordforråd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tre nynorske forfattere og les et utdrag fra en av dem. Hva legger du merke til ved språket?',
        hints: ['Jon Fosse, Tarjei Vesaas, Olav H. Hauge er kjente nynorskforfattere'],
        solution: 'Nynorsk litteratur har en rik tradisjon. Språket kan virke annerledes, men formidler de samme følelsene og ideene som bokmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign en tekst på bokmål og nynorsk. Hvilke forskjeller finner du?',
        hints: ['Se på ordformer, verbendelser og setningsstruktur', 'Bruk en avisartikkel eller offentlig dokument'],
        solution: 'Sammenligningen skal vise forståelse for de systematiske forskjellene mellom målformene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er riktig nynorsk ordform?',
        options: [
          { id: 'a', text: 'Eg veit ikkje kva som hende', isCorrect: true },
          { id: 'b', text: 'Jeg vet ikke hva som hendte', isCorrect: false },
          { id: 'c', text: 'Eg vet ikkje hva som hende', isCorrect: false },
          { id: 'd', text: 'Jeg veit ikke kva som hendte', isCorrect: false },
        ],
        solution: 'Riktig nynorsk: "Eg veit ikkje kva som hende." Nynorsk bruker eg (ikke jeg), veit (ikke vet), ikkje (ikke ikke), kva (ikke hva) og hende (ikke hendte).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom bokmål og nynorsk verbformer i preteritum av svake verb?',
        options: [
          { id: 'a', text: 'Nynorsk bruker -a (kasta), bokmål bruker -et/-a (kastet/kasta)', isCorrect: true },
          { id: 'b', text: 'Nynorsk bruker -et, bokmål bruker -a', isCorrect: false },
          { id: 'c', text: 'Det er ingen forskjell mellom målformene i verbformer', isCorrect: false },
          { id: 'd', text: 'Nynorsk bruker -te, bokmål bruker -a', isCorrect: false },
        ],
        solution: 'I nynorsk ender svake verb konsekvent på -a i preteritum (kasta, hoppa, snakka), mens bokmål har valgfrihet mellom -et og -a (kastet/kasta).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten «Nordmannen» av Ivar Aasen. Analyser diktet: Hva handler det om? Hvilke verdier uttrykkes? Hvordan bruker Aasen nynorsk til å skildre den norske identiteten?',
        hints: ['Se på naturbeskrivelsene', 'Tenk på hva "nordmannen" representerer', 'Koble til nasjonalromantikken og Aasens språkprosjekt'],
        solution: 'Diktet skildrer nordmannen i den norske naturen og uttrykker stolthet over det norske. Aasen bruker sitt nynorske språk til å vise at folkespråket har litterær verdi. Diktet er nasjonalromantisk i sitt fokus på natur, folk og nasjonal identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten fra Vinjes «Ferdaminni». Oversett et avsnitt til bokmål og analyser hva som endrer seg. Mister teksten noe i oversettelsen?',
        hints: ['Sammenlign ordvalg, rytme og tone', 'Tenk på om nynorsken gir teksten en spesiell karakter', 'Reflekter over forholdet mellom språk og innhold'],
        solution: 'Oversettelsen vil vise systematiske forskjeller mellom målformene. Teksten kan miste noe av sin opprinnelige tone og klang i oversettelsen, noe som illustrerer at språkvalg påvirker leseopplevelsen. Vinjes nynorsk gir teksten en nærhet til talespråket som kan gå tapt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten fra Garborgs «Bondestudentar». Identifiser minst fem nynorske språktrekk i teksten (ordformer, verbformer, uttrykksmåter). Hva forteller utdraget om forholdet mellom by og bygd?',
        hints: ['Se etter typiske nynorske ordformer', 'Tenk på tema: bondestudenten mellom to verdener', 'Koble til debatten om språk og identitet'],
        solution: 'Garborgs tekst viser nynorsk i bruk i en realistisk roman. Nynorske trekk inkluderer a-infinitiv, spesifikke ordformer og uttrykksmåter. Tematisk handler utdraget om spenningen mellom by og bygd, mellom bondekulturen og bykulturen - et tema som er tett knyttet til selve målstriden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay på nynorsk (300-400 ord) om språk og identitet. Drøft: Kva tyder språket for identiteten vår? Bruk eksempel frå ditt eige liv og frå det du har lært om norsk språkhistorie.',
        hints: [
          'Skriv på nynorsk - bruk ordbok',
          'Koble personlig erfaring med fagstoff',
          'Tenk på dialekt, målform og flerspråklighet',
        ],
        solution: 'Essayet vurderes etter nynorsk språkføring, innhold og evne til refleksjon. Det bør vise forståelse for sammenhengen mellom språk og identitet, med eksempler fra eget liv og fra norsk språkhistorie.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Aasens opprinnelige nynorsk (landsmål) med moderne nynorsk. Bruk primærtekstene og sammenlign med en moderne nynorsk tekst (f.eks. fra NRK Nynorsk eller en nynorsk avis). Hva har endret seg? Hva er bevart?',
        hints: [
          'Se på ordformer, rettskriving og grammatikk',
          'Tenk på språklige reformer gjennom 1900-tallet',
          'Reflekter over hva som er kjernen i nynorsk',
        ],
        solution: 'Sammenligningen bør vise at moderne nynorsk har gjennomgått mange reformer siden Aasens tid. Skrivemåten er modernisert, noen arkaiske former er fjernet, og språket har tatt opp flere lånord. Kjernetrekkene - a-infinitiv, spesifikke ordformer og nærheten til dialektene - er imidlertid bevart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk', 'bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-4-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Bokmål:** Skriftspråk med røtter i dansk, brukt av ca. 85% av befolkningen
- **Nynorsk:** Skriftspråk basert på norske dialekter, skapt av Ivar Aasen
- **Samnorsk:** Mislykkede forsøk på å slå sammen bokmål og nynorsk
- **Målstrid:** Den pågående debatten om de to norske skriftspråkene
- **Sidemål:** Det skriftspråket som ikke er ditt hovedmål

**Det viktigste å huske:**
1. Ivar Aasen skapte landsmål (nynorsk) ved å samle inn dialekter fra hele landet
2. Bokmål utviklet seg fra dansk-norsk skriftspråk gjennom gradvise fornorskinger
3. Begge målformer er likestilte og har offisiell status i Norge

**Kompetansemål dette kapittelet dekker:**
- Skrive tekster på hovedmål og sidemål
- Gjøre rede for utvikling og variasjon i norsk språk`,
    },
    {
      id: 'norsk-vg1-4-3-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **4.1 Språk og identitet** – Forstå målformenes rolle for identitet
- **4.4 Språkmangfold i Norge** – Se nynorsk i sammenheng med dialekter
- **4.5 Språk i endring** – Følg målformenes utvikling over tid
- **8.4 Rettskriving nynorsk** – Praktiske skriveregler for nynorsk`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.4: Språkmangfold i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_4_4: TextbookChapter = {
  id: 'norsk-vg1-4-4',
  courseId: 'norsk-vg1',
  chapterNumber: '4.4',
  title: 'Språkmangfold i Norge',
  description: 'Utforsk dialekter, sosiolekter og minoritetsspråk i det norske samfunnet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over språklig mangfold i Norge',
    'gjøre rede for utvikling og variasjon i norsk språk',
  ],
  content: [
    {
      id: 'norsk-vg1-4-4-intro',
      type: 'text',
      content: `## Språklig mangfold

Norge har et rikt språkmangfold. I tillegg til bokmål og nynorsk har vi dialekter, samiske språk, minoritetsspråk og innvandrerspråk.

**Språk i Norge:**
- **Norsk** (bokmål og nynorsk) - offisielt språk
- **Samiske språk** - offisielle i samiske områder
- **Kvensk, romani og romanes** - nasjonale minoritetsspråk
- **Norsk tegnspråk** - anerkjent språk
- **Innvandrerspråk** - over 150 ulike språk

**Hvorfor er språkmangfold viktig?**
Språk er knyttet til identitet, kultur og tilhørighet. Et samfunn som respekterer språkmangfold, respekterer også menneskene som snakker disse språkene.`,
    },
    {
      id: 'norsk-vg1-4-4-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Språkmangfold** | Variasjonen av språk i et samfunn |
| **Dialekt** | Geografisk variasjon av et språk |
| **Minoritetsspråk** | Språk som snakkes av en minoritet |
| **Tegnspråk** | Visuelt språk brukt av døve |
| **Flerspråklighet** | Å beherske flere språk |
| **Morsmål** | Språket man lærer først |
| **Språkdød** | Når et språk ikke lenger brukes |
| **Språkbevaring** | Arbeid for å bevare truede språk |`,
    },
    {
      id: 'norsk-vg1-4-4-def-1',
      type: 'definition',
      title: 'Dialekter i Norge',
      content: `**Hva er en dialekt?**
En dialekt er en geografisk språkvarietet. Norge har et rikt dialektmangfold sammenlignet med mange andre land.

**De fire hoveddialektområdene:**

**1. Østnorsk**
- Oslo, Østfold, Hedmark, Oppland
- Kjennetegn: Tjukk l, retroflekser (rd, rt, rn blir én lyd)

**2. Vestnorsk**
- Vestlandet fra Rogaland til Møre
- Kjennetegn: Ofte diftongering (stein, røyk, haust)

**3. Trøndersk**
- Trøndelag
- Kjennetegn: Palatalisering (ballj, mannj), apokope

**4. Nordnorsk**
- Nordland, Troms, Finnmark
- Kjennetegn: Nektingsadverb (ikkje/ikke), vokalutjevning

**Dialektbruk i dag:**
Norge har sterk tradisjon for dialektbruk. I motsetning til mange land bruker nordmenn dialekt i de fleste sammenhenger, også i media og offentligheten.`,
    },
    {
      id: 'norsk-vg1-4-4-image-samiske-sprak-kart',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-4-4-samiske-sprak-kart.png',
      alt: 'Kart over Sapmi som viser utbredelsen av nordsamisk, lulesamisk og sorsamisk i Norge, Sverige og Finland',
      caption: 'Kart over de samiske sprakene i Sapmi med omrader der nordsamisk, lulesamisk og sorsamisk tradisjonelt snakkes.',
    },
    {
      id: 'norsk-vg1-4-4-def-2',
      type: 'definition',
      title: 'Samiske språk',
      content: `**Urfolksspråk i Norge**
Samene er Norges urfolk, og samiske språk har offisiell status i samiske forvaltningsområder.

**Samiske språk i Norge:**
- **Nordsamisk** - flest talere, ca. 15 000-25 000
- **Lulesamisk** - ca. 500-1000 talere
- **Sørsamisk** - ca. 300-500 talere

**Historisk bakgrunn:**
Samiske språk ble lenge undertrykt gjennom fornorskingspolitikk. Barn ble straffet for å snakke samisk på skolen. Denne politikken varte fra ca. 1850 til 1960-tallet.

**I dag:**
- Samiske språk undervises i skolen
- Sametinget arbeider for språkbevaring
- NRK Sápmi sender på samisk
- Det finnes samisk litteratur, musikk og media

**Revitalisering:**
Mange arbeider for å styrke samiske språk. Dette inkluderer språkkurs, barnehager og skoler med samisk som undervisningsspråk.`,
    },
    {
      id: 'norsk-vg1-4-4-image-samisk-offisiell',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-4-4-samisk-offisiell.png',
      alt: 'Oversikt over samiske spraks offisielle status i Norge, inkludert forvaltningsomrader og rettigheter',
      caption: 'Samisk har offisiell status i Norge. Kartet viser de samiske forvaltningsomradene der samisk er likestilt med norsk.',
    },
    {
      id: 'norsk-vg1-4-4-def-3',
      type: 'definition',
      title: 'Sosiolekter og språklige varianter',
      content: `**Hva er en sosiolekt?**
En sosiolekt er en språkvarietet knyttet til sosiale grupper, ikke geografi.

**Faktorer som påvirker sosiolekt:**
- Alder (ungdomsspråk vs. voksent språk)
- Sosial bakgrunn
- Utdanning og yrke
- Interesser og subkulturer

**Multietnolekt / kebabnorsk:**
I flerkulturelle bydeler har det utviklet seg nye språkvarieteter. Disse kombinerer norsk med elementer fra innvandrerspråk.

**Kjennetegn:**
- Forenklet grammatikk
- Lånord fra flere språk
- Egen intonasjon

**Språkholdninger:**
Folk har ulike holdninger til språkvarianter. Noen ser på dialekter og sosiolekter som rikdom, andre som avvik fra "korrekt" språk. Det er viktig å være bevisst på egne språkholdninger.`,
    },
    {
      id: 'norsk-vg1-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Dialekttrekk i praksis',
      content: `**Oppgave/Situasjon:**
Identifiser hvilket dialektomrade disse setningene kommer fra.

**Analyse:**

**Setning 1:** "Æ veit ikkje ka han sa, men det va nåkka om båtan."
- **Dialektomrade:** Nordnorsk (Troms/Nordland)
- **Kjennetegn:** Æ (jeg), veit (vet), ka (hva), nåkka (noe), båtan (batene)

**Setning 2:** "Eg skjona ikkje kva ho meinte med det der."
- **Dialektomrade:** Vestnorsk (Hordaland/Sogn)
- **Kjennetegn:** Eg (jeg), skjona (skjonte), ikkje, kva, ho (hun)

**Setning 3:** "Ja, vi va' i byn i gaar, vi. Det va' morromt."
- **Dialektomrade:** Trondelag
- **Kjennetegn:** Apokope (va' i stedet for var), palatalisering hoeres i uttale, byn (byen)

**Setning 4:** "Jæ har vaert der mange ganger. Det er veldig fint der borte."
- **Dialektomrade:** Ostlandsk (Oslo-omradet)
- **Kjennetegn:** Jæ (jeg), tjukk l i uttale, retroflekser

**Forklaring:**
Dialekter kjennetegnes av systematiske forskjeller i uttale, ordformer og grammatikk. Ved aa lytte etter bestemte trekk kan vi ofte plassere en dialekt geografisk.`,
    },
    {
      id: 'norsk-vg1-4-4-example-2',
      type: 'example',
      title: 'Eksempel: Samisk spraak og kultur',
      content: `**Oppgave/Situasjon:**
Hva kan vi laere av samisk spraak og den samiske kulturen?

**Analyse:**

**Ord som viser kulturell kunnskap:**
Nordsamisk har over 300 ord for sno og is, noe som gjenspeiler samenes naere forhold til naturen:

| Nordsamisk | Betydning |
|------------|-----------|
| muohta | sno (generelt) |
| vahca | losnso |
| skarta | tynt islag paa sno |
| cuoŋu | skorpesno som baerer |
| seaŋas | kornete sno |

**Spraaklig struktur:**
- Samisk har **ikke** grammatisk kjonn (han/hun/den)
- Samisk har **mange kasus** (grammatiske former for substantiv)
- Verbene boyes etter person og tall paa en annen mate enn norsk

**Forklaring:**
Spraak gjenspeiler kultur og levematte. Samenes detaljerte ordforraad for sno viser at de har levd taett paa naturen i tusener av aar. Naar et spraak doer, mister vi ogsaa denne kunnskapen.

**Historisk perspektiv:**
Fornorskingspolitikken (ca. 1850-1960) forbod samisk i skolen. Mange mistet morosmaalet sitt. I dag arbeides det aktivt med aa revitalisere samiske spraak gjennom barnehager, skoler og media.`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser hvilket dialektområde disse trekkene hører til:',
        subTasks: [
          {
            label: 'a',
            task: 'Tjukk l og retroflekser.',
            solution: 'Østnorsk',
            multipleChoiceOptions: ['Østnorsk', 'Vestnorsk', 'Trøndersk', 'Nordnorsk'],
          },
          {
            label: 'b',
            task: 'Palatalisering av n og l (ballj, mannj).',
            solution: 'Trøndersk',
            multipleChoiceOptions: ['Østnorsk', 'Vestnorsk', 'Trøndersk', 'Nordnorsk'],
          },
          {
            label: 'c',
            task: 'Sterke diftonger (stein, røyk).',
            solution: 'Vestnorsk',
            multipleChoiceOptions: ['Østnorsk', 'Vestnorsk', 'Trøndersk', 'Nordnorsk'],
          },
        ],
        solution: 'a) Østnorsk, b) Trøndersk, c) Vestnorsk',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv din egen dialekt eller talemål. Hvilke kjennetegn har den?',
        hints: ['Tenk på uttale, ordvalg og grammatikk', 'Sammenlign med standardspråk'],
        solution: 'Beskrivelsen bør inkludere konkrete eksempler på særtrekk ved talemålet ditt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk fornorskingspolitikken overfor samer og kvener. Hvordan påvirket den disse gruppenes språk og kultur?',
        hints: ['Bruk kilder som Store norske leksikon eller Sametingets nettsider', 'Se på konsekvenser for språkbruk i dag'],
        solution: 'Fornorskingspolitikken førte til at mange mistet morsmålet sitt. I dag arbeides det med revitalisering av samiske språk og kvensk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter: Bør vi bevare alle dialekter, eller er det greit at språket endrer seg og dialekter forsvinner?',
        hints: ['Vurder argumenter fra ulike synsvinkler', 'Tenk på identitet, praktiske hensyn og språkutvikling'],
        solution: 'Dette er en debatt med gode argumenter på begge sider. Noen mener dialekter er viktig kulturarv, andre mener språkendring er naturlig og uunngåelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Intervju en person med annen dialekt enn deg selv. Hvilke forskjeller oppdager du?',
        hints: ['Spør om ordvalg, uttale og uttrykk', 'Ta notater om konkrete eksempler'],
        solution: 'Intervjuet skal vise forståelse for dialektforskjeller og respekt for språklig variasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke er de fire hoveddialektområdene i Norge?',
        options: [
          { id: 'a', text: 'Østnorsk, vestnorsk, trøndersk og nordnorsk', isCorrect: true },
          { id: 'b', text: 'Bergensk, oslomål, trøndsk og finnmarksk', isCorrect: false },
          { id: 'c', text: 'Bokmål, nynorsk, samisk og kvensk', isCorrect: false },
          { id: 'd', text: 'Sørnorsk, midtnorsk, vestnorsk og nordnorsk', isCorrect: false },
        ],
        solution: 'De fire hoveddialektområdene i Norge er østnorsk, vestnorsk, trøndersk og nordnorsk. Hver av disse har egne kjennetegn i uttale, ordvalg og grammatikk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse utsagnene om samiske språk er riktig?',
        options: [
          { id: 'a', text: 'Det finnes flere samiske språk i Norge, og nordsamisk har flest talere', isCorrect: true },
          { id: 'b', text: 'Samisk er ett enkelt språk som snakkes likt over hele Sápmi', isCorrect: false },
          { id: 'c', text: 'Samiske språk ble aldri undertrykt i Norge', isCorrect: false },
          { id: 'd', text: 'Samiske språk er dialekter av finsk', isCorrect: false },
        ],
        solution: 'Det finnes tre samiske språk i Norge: nordsamisk (flest talere), lulesamisk og sørsamisk. De er egne språk, ikke dialekter av hverandre eller av finsk. Samiske språk ble undertrykt gjennom fornorskingspolitikken fra ca. 1850 til 1960-tallet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ta opp et kort lydklipp (1-2 minutter) der du snakker din egen dialekt. Lytt til opptaket og skriv ned minst fem trekk som kjennetegner ditt talemål (uttale, ordvalg, grammatikk). Sammenlign med standardøstlandsk.',
        hints: [
          'Snakk naturlig, ikke les opp',
          'Lytt etter uttale, ordformer og intonasjon',
          'Bruk fagbegrepene du har lært',
        ],
        solution: 'Oppgaven trener evnen til å observere og beskrive eget talemål med faglige begreper. Beskrivelsen bør inkludere konkrete eksempler og bruke termer som dialekt, uttale, ordvalg og grammatiske trekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et minoritetsspråk i Norge (samisk, kvensk, romani, romanes eller norsk tegnspråk) og skriv en kort forskningsrapport (200-300 ord). Inkluder: Hvor mange talere har språket? Hva er dets historie? Hva gjøres for å bevare det?',
        hints: [
          'Bruk Språkrådet, Store norske leksikon eller Sametingets nettsider',
          'Se på språkets status i lovverket',
          'Finn ut om revitaliseringstiltak',
        ],
        solution: 'Rapporten bør gi faktainformasjon om det valgte språket, dets historie i Norge, nåværende status og tiltak for bevaring. Gode kilder inkluderer Språkrådet, SNL og organisasjonenes egne nettsider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (400-500 ord) om språklige rettigheter og demokrati. Drøft: Er retten til å bruke eget språk en demokratisk rettighet? Hva bør staten gjøre for å sikre språkmangfold? Bruk eksempler fra norsk språkpolitikk.',
        hints: [
          'Tenk på samers rettigheter, nynorskbrukeres rettigheter, innvandreres språkrettigheter',
          'Se på Grunnloven, sameloven og språkloven',
          'Drøft forholdet mellom majoritetsspråk og minoritetsspråk',
        ],
        solution: 'Essayet bør drøfte språklige rettigheter som en del av demokratiet, med eksempler fra norsk kontekst. Det bør vise forståelse for spenningen mellom praktiske hensyn og individuelle rettigheter, og reflektere over statens ansvar for språkmangfold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign språkpolitikken i Norge, Sverige og Danmark. Hvordan forholder de tre landene seg til dialekter, minoritetsspråk og standardspråk? Skriv en sammenligningsrapport (300-400 ord).',
        hints: [
          'Norge har stor dialektaksept - gjelder det samme i Sverige og Danmark?',
          'Se på antall offisielle minoritetsspråk i hvert land',
          'Tenk på holdninger til standardspråk i de tre landene',
        ],
        solution: 'Rapporten bør vise at Norge har større dialektaksept enn Danmark og Sverige, der standardspråk er mer dominerende. Alle tre land har minoritetsspråk, men politikken varierer. Norge er unikt med to offisielle skriftspråk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Minoritetsspråk:** Språk som snakkes av en minoritet (samisk, kvensk, romani)
- **Urfolksspråk:** Språk som tilhører et lands urfolk (samisk i Norge)
- **Nasjonale minoriteter:** Grupper med lang tilknytning til landet (kvener, romanifolk, skogfinner)
- **Flerspråklighet:** Å kunne bruke flere språk aktivt
- **Språklige rettigheter:** Retten til å bruke og lære sitt eget språk

**Det viktigste å huske:**
1. Norge har stor språklig variasjon med dialekter, to skriftspråk og flere minoritetsspråk
2. Samisk, kvensk og romani har offisiell status som minoritetsspråk
3. Fornorskingspolitikken påførte stor skade på minoritetsspråkene, men arbeidet med revitalisering pågår

**Kompetansemål dette kapittelet dekker:**
- Reflektere over språklig mangfold i Norge
- Gjøre rede for utvikling og variasjon i norsk språk`,
    },
    {
      id: 'norsk-vg1-4-4-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **4.1 Språk og identitet** – Forstå dialekters betydning for identitet
- **4.3 Nynorsk og bokmål** – Se målformene i sammenheng med dialektene
- **7.1 De samiske språkene** – Lær om Norges urfolksspråk
- **7.4 Nasjonale minoriteter** – Utforsk andre minoritetsspråk i Norge`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5: Språk i endring
// ============================================================================

export const CHAPTER_NORSK_VG1_4_5: TextbookChapter = {
  id: 'norsk-vg1-4-5',
  courseId: 'norsk-vg1',
  chapterNumber: '4.5',
  title: 'Språk i endring',
  description: 'Forstå hvordan og hvorfor språk endrer seg over tid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for utvikling og variasjon i norsk språk',
  ],
  content: [
    {
      id: 'norsk-vg1-4-5-intro',
      type: 'text',
      content: `## Språkendring

Alle levende språk endrer seg. Norsk i dag er annerledes enn norsk for 100 år siden, og det vil fortsette å endre seg.

**Hvorfor endrer språk seg?**
- Kontakt med andre språk
- Samfunnsendringer
- Teknologisk utvikling
- Generasjonsforskjeller
- Bevisst språkpolitikk

**Typer språkendring:**
- **Lydendring:** Uttalen endres
- **Grammatisk endring:** Bøyninger og setningsbygning endres
- **Ordforrådsendring:** Nye ord kommer til, gamle forsvinner
- **Betydningsendring:** Ord får ny betydning`,
    },
    {
      id: 'norsk-vg1-4-5-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Språkendring** | At et språk forandres over tid |
| **Lånord** | Ord som er tatt opp fra et annet språk |
| **Nyord** | Helt nytt ord som oppstår i språket |
| **Språknormering** | Fastsetting av offisielle skriveregler |
| **Fornorsking** | Å tilpasse lånord til norsk skrivemåte |
| **Purisme** | Ønske om å bevare språket "rent" |
| **Anglisisme** | Engelsk påvirkning på norsk |
| **Språkpolitikk** | Offentlige beslutninger om språk |`,
    },
    {
      id: 'norsk-vg1-4-5-def-1',
      type: 'definition',
      title: 'Nye ord og lånord',
      content: `**Hvor kommer nye ord fra?**

**1. Lånord fra andre språk**
Norsk har alltid lånt ord fra andre språk:
- Tysk (middelalderen): arbeid, straff, handel
- Fransk (1700-1800-tallet): restaurant, sjåfør, garderobe
- Engelsk (1900-tallet): film, jobb, stress, mail, cool

**2. Nyord (neologismer)**
Ord som skapes for nye fenomener:
- nettbrett, smarttelefon, strømming
- influenser, podcast, meme

**3. Sammensetninger**
Norsk lager mange nye ord ved sammensetning:
- klimakrise, hjemmekontor, vaksineskepsis

**4. Betydningsutvidelse**
Gamle ord får ny betydning:
- "mus" → datamaskinmus
- "nett" → internett
- "sky" → datalagring i skyen

**Språkrøkt:**
Språkrådet arbeider med å finne gode norske ord for nye begreper, men mange engelske ord blir værende.`,
    },
    {
      id: 'norsk-vg1-4-5-image-laneord',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-4-5-laneord.png',
      alt: 'Tidslinje som viser laneord i norsk fra ulike spraak gjennom historien: norront, tysk, fransk og engelsk',
      caption: 'Tidslinje over laneord i norsk fra middelalderen til i dag, med eksempler fra tysk, fransk og engelsk.',
    },
    {
      id: 'norsk-vg1-4-5-image-sprakendring',
      type: 'image',
      src: '/images/textbook/norsk-vg1/norsk-vg1-4-5-sprakendring.png',
      alt: 'Illustrasjon av ulike typer sprakendring: lydendring, grammatisk endring, ordforraadsendring og betydningsendring',
      caption: 'De fire hovedtypene av sprakendring som pavirker norsk over tid.',
    },
    {
      id: 'norsk-vg1-4-5-def-2',
      type: 'definition',
      title: 'Grammatiske endringer',
      content: `**Forenkling av bøyning**
Norsk har over tid fått enklere bøyning:
- Fra fire kasus til null (norrønt til moderne norsk)
- Færre sterke verb
- Enklere kjønnssystem i noen dialekter

**Endringer i setningsbygning**
- Mer bruk av "det" som formelt subjekt
- Endringer i ordstilling
- Påvirkning fra engelsk syntaks

**Eksempel på påvirkning fra engelsk:**
- "Jeg er sulten" (tradisjonelt: "Jeg er sulten")
- Men: "Jeg trenger ikke det" (påvirket av "I don't need that")

**Ulike syn på språkendring:**
Noen mener språkendringer er naturlige og positive, mens andre er bekymret for at norsk mister egenart. Begge perspektiver er legitime i språkdebatten.`,
    },
    {
      id: 'norsk-vg1-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Ord som har endret betydning',
      problem: 'Hvilken betydning hadde disse ordene før, og hva betyr de nå?',
      solution: `**"Dust"**
- Før: Modig, dristig (positivt)
- Nå: Dum, tåpelig (negativt)

**"Snill"**
- Før: Dyktig, flink
- Nå: Vennlig, godhjertet

**"Høvisk"**
- Før: Passende for hoffet, dannet
- Nå: Lite brukt, høytidelig

**"Koste"**
- Norrønt: Å velge (beslektet med "kår")
- Nå: Å ha en pris

Betydningsendring er en naturlig del av språkutviklingen. Ord kan få mer positiv, mer negativ, snevrere eller videre betydning over tid.`,
    },
    {
      id: 'norsk-vg1-4-5-example-2',
      type: 'example',
      title: 'Eksempel: Spraakendring i sosiale medier',
      content: `**Oppgave/Situasjon:**
Analyser hvordan spraak brukes og endres i sosiale medier.

**Analyse av en typisk melding:**
"Omg haha skal vi henge i morra? Dm meg hvis du er keen <3"

**Spraaklige trekk:**

| Trekk | Eksempel | Forklaring |
|-------|----------|------------|
| Forkortelser | omg, dm | "Oh my god", "direct message" |
| Engelske laanord | keen, henge | "keen" = interessert, "henge" = vaere sammen |
| Emojier/symboler | <3 | Hjerte som uttrykker varme |
| Uformell tone | haha | Markerer vennlig, avslappet kommunikasjon |
| Muntlig spraak | morra | Forkortet "i morgen" |

**Forklaring:**
Spraak i sosiale medier er:
1. **Okonomisk:** Vi skriver raskt og kort
2. **Kreativt:** Nye ord og uttrykk oppstaar
3. **Kodevekslende:** Vi blander norsk og engelsk
4. **Muntlig skriftspraak:** Skriver som vi snakker

**Refleksjon:**
Dette er ikke "daarlig" spraak - det er **tilpasset spraak**. De samme personene skriver annerledes i skoleoppgaver. Evnen til aa veksle mellom ulike spraakstiler kalles **spraaklig kompetanse**.`,
    },

    // ========== PRIMÆRTEKSTER (språkprøver) ==========
    {
      id: 'norsk-vg1-4-5-primaertekst-1',
      type: 'collapsible',
      title: 'Språkprøve: Holberg (ca. 1720)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-4-5-primaertekst-1-text',
          type: 'text',
          content: `## Ludvig Holberg – Språkprøve (ca. 1720)

*Fra «Epistler» – Holbergs dansk-norske skriftspråk:*

> «Jeg veed ikke hvad jeg skal sige om den Tiid, som nu er. Folk klage udi alle Lande, at Tiderne ere slette. Men det er min Tanke, at Tiderne ere altid eens, og at det er Menneskene, som forandre sig. Thi naar man seer sig vel om, saa finder man, at der altid har været Dyder og Laster, Rigdom og Fattigdom, Glæde og Sorg.»

**Legg merke til:**
- Dansk-norsk skriftspråk (dansk rettskriving)
- Store forbokstaver i substantiv (tysk påvirkning)
- Verbformer som "veed", "ere", "seer"
- Ordstilling som følger dansk mønster
- Formelt, velformulert prosa`,
        },
      ],
    },
    {
      id: 'norsk-vg1-4-5-primaertekst-2',
      type: 'collapsible',
      title: 'Språkprøve: Wergeland (ca. 1835)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-4-5-primaertekst-2-text',
          type: 'text',
          content: `## Henrik Wergeland – Språkprøve (ca. 1835)

*Fra et brev – Wergelands fornorskede dansk:*

> «Jeg har i disse Dage vandret i Fjeldene og seet den herligste Natur, som nogen kan tænke sig. Fjeldbækken risler saa sødt mellem Birketræerne, og Fuglene synge som de aldrig have sunget før. Her er Norge paa sit Skjønneste, og mit Hjerte banker af Glæde.»

**Legg merke til:**
- Fortsatt danske skriftkonvensjoner
- Store forbokstaver i substantiv (men i ferd med å forsvinne)
- Norske ord blandes inn: "Fjeld", "Birketræer"
- Mer personlig og følelsesladet enn Holberg
- Romantikkens naturskildring preger innholdet`,
        },
      ],
    },
    {
      id: 'norsk-vg1-4-5-primaertekst-3',
      type: 'collapsible',
      title: 'Språkprøve: Bjørnson (ca. 1860)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-4-5-primaertekst-3-text',
          type: 'text',
          content: `## Bjørnstjerne Bjørnson – Språkprøve (ca. 1860)

*Fra «Synnøve Solbakken» (1857):*

> «Det var en liden Stue, men den laa saa vakkert. Solskinnet faldt ind gjennem Vinduerne og over Gulvet, hvor Katten laa og spandt. Udenfor sang Fuglene i Trærne, og Bækken randt stille forbi. Det var Fred over det hele, og Synnøve sad med sit Arbeide og tænkte paa ham.»

**Legg merke til:**
- Tydeligere fornorsking enn Wergeland
- Små forbokstaver begynner å komme (men ennå ikke gjennomført)
- Enklere setningsstruktur, nærmere talespråk
- Norske ord og uttrykksmåter
- Realistisk og folkelig tone
- Overgangen fra dansk-norsk til mer norsk skriftspråk er tydelig`,
        },
      ],
    },

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn fem engelske lånord som har kommet inn i norsk de siste 20 årene. Finnes det norske alternativer?',
        hints: ['Tenk på teknologi, sosiale medier og ungdomskultur'],
        solution: 'Eksempler: poste, streame, influenser, liken, ghoste. Norske alternativer kan være: legge ut, strømme, påvirker, like/gille, forsvinne fra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign en avisartikkel fra 1950-tallet med en fra i dag. Hvilke språklige forskjeller finner du?',
        hints: ['Se på ordvalg, setningslengde og stilnivå', 'Nasjonalbiblioteket har digitaliserte aviser'],
        solution: 'Du vil sannsynligvis finne forskjeller i formelt vs. uformelt språk, ordvalg, og engelske lånord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter: Er det viktig å begrense engelske lånord i norsk, eller er språkblanding naturlig og uproblematisk?',
        hints: ['Vurder argumenter for og mot', 'Tenk på identitet, forståelse og språkutvikling'],
        solution: 'Dette er et debattspørsmål. Noen mener at for mye engelsk truer norsk språk, andre mener at lånord er en naturlig del av språkutvikling og ikke problematisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag fem nye norske ord for engelske uttrykk som brukes mye i dag.',
        hints: ['Bruk sammensetning eller betydningsutvidelse', 'Tenk på hva som ville fungere naturlig på norsk'],
        solution: 'Kreativ oppgave. Eksempler: "livestrømming" for livestream, "nettprater" for influencer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Intervju en eldre person om ord og uttrykk de brukte da de var unge. Hvilke av disse er ukjente for deg?',
        hints: ['Spør om ord for teknologi, arbeid og dagligliv', 'Noter ned ukjente ord og finn ut hva de betyr'],
        solution: 'Intervjuet viser hvordan ordforrådet endres mellom generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type språkendring beskriver at ordet "dust" har endret seg fra å bety "modig" til å bety "dum"?',
        options: [
          { id: 'a', text: 'Betydningsendring (semantisk endring)', isCorrect: true },
          { id: 'b', text: 'Lydendring (fonologisk endring)', isCorrect: false },
          { id: 'c', text: 'Grammatisk endring (morfologisk endring)', isCorrect: false },
          { id: 'd', text: 'Lånord (leksikalsk endring)', isCorrect: false },
        ],
        solution: 'Når et ord beholder sin form men endrer betydning, kalles det en betydningsendring eller semantisk endring. "Dust" er et klassisk eksempel - fra positiv til negativ betydning.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Fra hvilke språk har norsk fått flest lånord gjennom historien?',
        options: [
          { id: 'a', text: 'Tysk (middelalderen), fransk (1700-tallet) og engelsk (1900-tallet til i dag)', isCorrect: true },
          { id: 'b', text: 'Svensk, dansk og finsk', isCorrect: false },
          { id: 'c', text: 'Latin, gresk og arabisk', isCorrect: false },
          { id: 'd', text: 'Spansk, italiensk og portugisisk', isCorrect: false },
        ],
        solution: 'Norsk har fått lånord fra mange språk, men de viktigste er tysk (gjennom hanseatene i middelalderen), fransk (gjennom kulturell påvirkning på 1700-1800-tallet) og engelsk (gjennom media, teknologi og populærkultur fra 1900-tallet).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign de tre språkprøvene (Holberg ca. 1720, Wergeland ca. 1835, Bjørnson ca. 1860). Hvilke endringer ser du i språket over disse 140 årene? Se spesielt på rettskriving, ordvalg, setningsstruktur og grad av fornorsking.',
        hints: [
          'Se på store/små forbokstaver i substantiv',
          'Sammenlign verbformer og ordstilling',
          'Legg merke til hvor "norsk" teksten føles',
        ],
        solution: 'Sammenligningen bør vise en gradvis fornorsking fra Holbergs rene dansk-norsk via Wergelands mer personlige og delvis fornorskede stil til Bjørnsons tydeligere norske preg. Konkrete endringer inkluderer overgang fra store til små forbokstaver, enklere verbformer, og mer norske ordvalg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samle inn og kategoriser 10 engelske lånord som brukes i daglig norsk. Sorter dem i kategorier: 1) Ord som har fått norsk bøyning (f.eks. "å streame - streamer - streamet"), 2) Ord som brukes uendret, 3) Ord som har et norsk alternativ. Reflekter over mønstrene du finner.',
        hints: [
          'Lytt etter engelske ord i samtaler, sosiale medier og nyheter',
          'Sjekk om ordene står i Bokmålsordboka',
          'Tenk på om ordene fyller et "hull" i norsk ordforråd',
        ],
        solution: 'Oppgaven viser at engelske lånord tilpasses norsk grammatikk i ulik grad. Noen ord får norsk bøyning (å google - googler - googlet), andre brukes uendret (cool, nice), og noen har norske alternativer som sjelden brukes (streame/strømme). Mønsteret viser at norsk er et levende språk som aktivt integrerer nye ord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (400-500 ord): Vil norsk overleve engelsk påvirkning? Drøft om den økende bruken av engelsk i utdanning, medier og næringsliv truer det norske språket, eller om norsk er robust nok til å overleve.',
        hints: [
          'Se på domenetap (bruk av engelsk i visse sektorer)',
          'Vurder historisk perspektiv - norsk har overlevd dansk og tysk påvirkning',
          'Drøft hva Språkrådet og språkpolitikken gjør',
          'Tenk på parallellspråklighet som alternativ',
        ],
        solution: 'Essayet bør drøfte begge sider: Bekymringer om domenetap (at norsk mister terreng i akademia, næringsliv og ungdomskultur) og motargumenter (norsk har overlevd tidligere påvirkning, språkpolitikk beskytter, de fleste bruker norsk i hverdagen). Gode essays viser historisk perspektiv og nyansert drøfting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør et forskningsprosjekt om språkendring i sosiale medier. Samle inn 20-30 eksempler på språklige trekk som er spesielle for sosiale medier (forkortelser, emojier, kodeblanding, nye ord). Kategoriser funnene og drøft: Representerer dette en trussel mot norsk, eller er det kreativ språkbruk?',
        hints: [
          'Se på Instagram, TikTok, Snapchat eller meldingsapper',
          'Kategoriser etter type: forkortelser, engelske ord, emojier, slang',
          'Tenk på om dette er muntlig eller skriftlig språk',
          'Reflekter over om dette er noe nytt eller en fortsettelse av gamle mønstre',
        ],
        solution: 'Prosjektet bør vise systematisk innsamling og kategorisering. Drøftingen bør vurdere om sosiale medier-språk er en ny sjanger snarere enn en trussel, og at ungdom veksler mellom dette og formelt språk (kodeveksling). Historisk perspektiv: ungdomsspråk har alltid vært annerledes enn standardspråk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['sammenligne særtrekk ved norsk med andre språk'],
      },
    },
    {
      id: 'norsk-vg1-4-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Språkendring:** Naturlig utvikling av språk over tid i ordforråd, grammatikk og uttale
- **Lånord:** Ord som er tatt inn fra andre språk (f.eks. engelske lånord i norsk)
- **Språknormering:** Bevisst styring av språkutvikling gjennom regler og ordlister
- **Språklig konservatisme:** Motstand mot språkendringer
- **Språkrådet:** Norges offisielle organ for språknormering og språkrådgivning

**Det viktigste å huske:**
1. Språk er i konstant endring - det er en naturlig del av språkets liv
2. Endringene skjer i ordforråd (lettest å se), grammatikk og uttale
3. Påvirkning fra andre språk (nå særlig engelsk) har alltid vært del av norsk språkhistorie

**Kompetansemål dette kapittelet dekker:**
- Gjøre rede for utvikling og variasjon i norsk språk`,
    },
    {
      id: 'norsk-vg1-4-5-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **4.1 Språk og identitet** – Forstå hvordan språkendring påvirker identitet
- **4.2 Norsk sammenlignet med andre språk** – Se norskens historiske utvikling
- **4.3 Nynorsk og bokmål** – Følg målformenes reformhistorie
- **4.4 Språkmangfold i Norge** – Se endring i sammenheng med variasjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLET EKSPORT FOR DEL 2
// ============================================================================

export const NORSK_VG1_CHAPTERS_DEL2: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_4_1,
  CHAPTER_NORSK_VG1_4_2,
  CHAPTER_NORSK_VG1_4_3,
  CHAPTER_NORSK_VG1_4_4,
  CHAPTER_NORSK_VG1_4_5,
  CHAPTER_NORSK_VG1_5_3,
  CHAPTER_NORSK_VG1_6_3,
];
