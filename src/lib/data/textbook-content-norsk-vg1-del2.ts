/**
 * Norsk VG1 - Del 2: Kapittel 4.1–7.2
 * Språk og identitet, digitale tekster, litteraturhistorie, fagartikkel,
 * norsk språkhistorie, nynorsk/bokmål, språkmangfold, språk i endring
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_AASEN_NORSK_GRAMMATIK_FORORD,
  TEKST_WERGELAND_ESSAY,
  TEKST_HAVAMAL_UTDRAG,
  TEKST_VOLUSPA_UTDRAG,
  TEKST_PETTER_DASS_NORDLANDS_TROMPET,
  TEKST_HOLBERG_ERASMUS_MONTANUS_SCENE,
  TEKST_DRAUMKVEDET_UTDRAG,
  TEKST_KONGESPEILET_UTDRAG,
  TEKST_AASEN_PROVER_AV_LANDSMAALET,
  TEKST_AASEN_NORDMANNEN,
  TEKST_AASEN_OM_VORT_SKRIFTSPROG,
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
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2: Digitale tekster og medier
// ============================================================================

export const CHAPTER_NORSK_VG1_4_2: TextbookChapter = {
  id: 'norsk-vg1-4-2',
  courseId: 'norsk-vg1',
  chapterNumber: '6.1',
  title: 'Digitale tekster og medier',
  description: 'Analyser og produser tekster i digitale medier.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og produsere sammensatte tekster i digitale medier',
  ],
  content: [
    {
      id: 'norsk-vg1-4-2-intro',
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
      id: 'norsk-vg1-4-2-def-1',
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
      id: 'norsk-vg1-4-2-def-2',
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
      id: 'norsk-vg1-4-2-example-1',
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

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-2',
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
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en sammensatt tekst for sosiale medier om et tema du bryr deg om.',
        hints: ['Velg plattform og målgruppe', 'Tenk gjennom modalitetsvalg', 'Vær bevisst på retorikk'],
        solution: 'Den sammensatte teksten skal vise bevisst bruk av modaliteter og retoriske virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Sammenlign hvordan samme nyhetssak dekkes i en nettavis og på sosiale medier. Hva er forskjellene?',
        hints: ['Se på vinkling, kilder, modaliteter', 'Vurder troverdighet'],
        solution: 'Sammenligningen bør vise forståelse for ulike sjangerkrav og medieplattformers egenart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kronikk (300-400 ord) om et aktuelt tema knyttet til digitale medier (f.eks. skjermtid, falske nyheter, influencer-kultur).',
        hints: ['Bruk kildehenvisninger', 'Argumenter saklig', 'Ha en tydelig holdning'],
        solution: 'Kronikken skal kombinere personlig engasjement med saklig argumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-6',
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
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-7',
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
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en multimodal tekst (plakat, infografikk eller kort video) om et selvvalgt tema. Analyser deretter din egen tekst: Hvilke modaliteter har du brukt? Hvordan samspiller de? Hva er formålet?',
        hints: ['Planlegg teksten før du lager den', 'Tenk bevisst gjennom valg av modaliteter', 'Bruk fagbegrepene i analysen'],
        solution: 'Oppgaven tester evnen til både å produsere og analysere multimodale tekster. Analysen bør bruke fagbegreper som forsterkning, utfylling og kontrast.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign dekningen av en aktuell nyhetssak på tre ulike plattformer: en nettavis, en TV-nyhetssending og et innlegg på sosiale medier. Hvordan påvirker plattformen fremstillingen?',
        hints: ['Se på vinkling, kildebruk og modaliteter', 'Vurder troverdighet og grundighet', 'Tenk på målgruppe for hver plattform'],
        solution: 'Sammenligningen bør vise hvordan ulike plattformer har ulike sjangerkrav, ulik bruk av modaliteter og ulikt forhold til tid og rom. Nettaviser kan gå mer i dybden, TV bruker levende bilder, sosiale medier er korte og deler ofte bare overskrifter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Skriv et essay (400-500 ord) om kunstig intelligens og digital kompetanse. Drøft: Hvordan endrer AI-verktøy vår forståelse av hva det betyr å lese og skrive kritisk i digitale medier?',
        hints: [
          'Tenk på AI-generert tekst, bilder og video',
          'Drøft hva det betyr for kildekritikk',
          'Vurder både muligheter og utfordringer',
        ],
        solution: 'Essayet bør drøfte hvordan AI utfordrer tradisjonell kildekritikk, hva det betyr at tekster kan genereres automatisk, og hvorfor digital kompetanse blir enda viktigere i en tid med AI.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-11',
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
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.1: Litteraturhistorie - fra norrøn tid til romantikken
// ============================================================================

export const CHAPTER_NORSK_VG1_5_1: TextbookChapter = {
  id: 'norsk-vg1-5-1',
  courseId: 'norsk-vg1',
  chapterNumber: '3.1',
  title: 'Litteraturhistorie - fra norrøn tid til romantikken',
  description: 'Få oversikt over norsk og europeisk litteraturhistorie frem til romantikken.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
  ],
  content: [
    {
      id: 'norsk-vg1-5-1-intro',
      type: 'text',
      content: `## Litteraturhistorie

Litteraturhistorien er historien om hvordan mennesker gjennom alle tider har uttrykt seg gjennom tekst. Ved å forstå litterære epoker kan vi bedre forstå tekstenes kontekst og mening.

**Hvorfor studere litteraturhistorie?**
- Forstå tekster i sin samtid
- Se utviklingslinjer og sammenhenger
- Kjenne kulturarven vår
- Lese med historisk bevissthet

**Perioder vi skal dekke:**
1. Norrøn litteratur (ca. 800-1350)
2. Middelalderen (ca. 500-1500)
3. Renessansen (ca. 1350-1600)
4. Barokken (ca. 1600-1700)
5. Opplysningstiden (ca. 1700-1800)
6. Romantikken (ca. 1800-1850)`,
    },
    {
      id: 'norsk-vg1-5-1-def-1',
      type: 'definition',
      title: 'Norrøn litteratur (ca. 800-1350)',
      content: `**Kjennetegn:**
- Skrevet på norrønt språk
- Muntlig tradisjon nedskrevet
- Kollektiv forfatterskap
- Religiøse og heroiske tema

**Sentrale sjangre:**
- **Eddadikt:** Gudedikt og heltedikt
- **Sagaer:** Fortellinger om konger, islendinger, helter
- **Skaldekvad:** Kompleks hyllestdiktning

**Viktige verk:**
- *Den eldre Edda* - gudedikt og heltedikt
- *Den yngre Edda* - Snorres lærebok i diktning
- *Heimskringla* - Norges kongesagaer
- Islendingesagaene

**Verdensanskuelse:**
- Skjebnetro (nornene spinner livets tråd)
- Ære og hevn som sentrale verdier
- Gudeverden med åser og vaner`,
    },
    {
      id: 'norsk-vg1-5-1-def-2',
      type: 'definition',
      title: 'Middelalderen til renessansen',
      content: `**Middelalderen i Europa (ca. 500-1500):**
- Kirken dominerer kultur og utdanning
- Latin er det litterære språket
- Religiøse tekster: bønner, legender, krøniker
- Folkeviser og eventyr i muntlig tradisjon

**Renessansen (ca. 1350-1600):**
- "Gjenfødelse" av antikkens kultur
- Fokus på mennesket (humanisme)
- Kunst og vitenskap blomstrer
- Boktrykkerkunsten spres

**Sentrale forfattere:**
- Dante Alighieri: *Den guddommelige komedie*
- Francesco Petrarca: Sonettdiktning
- William Shakespeare: Dramatikk
- Miguel de Cervantes: *Don Quijote*`,
    },
    {
      id: 'norsk-vg1-5-1-def-3',
      type: 'definition',
      title: 'Barokken og opplysningstiden',
      content: `**Barokken (ca. 1600-1700):**
- Overdådighet og kontraster
- Religiøse og verdslige tema
- Memento mori (husk at du skal dø)
- Formell diktning med faste regler

**Norsk barokk:**
- Petter Dass: *Nordlands Trompet*
- Dorothe Engelbretsdatter: Salmediktning
- Religiøs og naturlyrikk

**Opplysningstiden (ca. 1700-1800):**
- Fornuft og vitenskap i sentrum
- Kritikk av autoritet og tradisjon
- Tro på fremskritt
- Satire og samfunnskritikk

**Ludvig Holberg:**
- "Den nordiske Platon"
- Komedier som *Erasmus Montanus* og *Jeppe på Bjerget*
- Satirisk samfunnskritikk`,
    },
    {
      id: 'norsk-vg1-5-1-def-4',
      type: 'definition',
      title: 'Romantikken (ca. 1800-1850)',
      content: `**Kjennetegn:**
- Reaksjon mot opplysningstidens fornuft
- Følelser, fantasi og natur
- Det nasjonale og folkelige
- Det geniale og individuelle

**Europeisk romantikk:**
- Goethe og Schiller (Tyskland)
- Byron, Keats, Shelley (England)
- Victor Hugo (Frankrike)

**Norsk romantikk:**
- Henrik Wergeland: Nasjonalromantisk dikter
- Johan Sebastian Welhaven: Klassisistisk romantiker
- Asbjørnsen og Moe: Eventyrsamlere
- Ivar Aasen: Språkforsker og dikter

**Nasjonalromantikken:**
- Søken etter nasjonal identitet
- Interesse for folkediktning
- Bonden og naturen idealiseres
- Nasjonsbygging gjennom kultur`,
    },
    {
      id: 'norsk-vg1-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Fra norrønt til romantikk',
      problem: `Sammenlign hvordan naturen fremstilles i norrøn litteratur og i romantikken.`,
      solution: `**Norrøn litteratur:**
- Naturen er farlig og uforutsigbar
- Havet, fjellene og skogen er hindringer
- Naturen er befolket av vetter og troll
- Mennesket kjemper mot naturkreftene

**Eksempel fra Håvamål:**
"Vær varsom når du vandrer over broer, / på ukjent farvann og i fjellets rike"

**Romantikken:**
- Naturen er vakker og inspirerende
- Fjell og fosser symboliserer frihet
- Naturen speiler menneskets følelser
- Mennesket søker til naturen for ro

**Eksempel fra Wergeland:**
"Norges fjelde, dypt i barm / gjemmer sølv og guld så varm"

**Forskjellen forklart:**
- Norrøn tid: Mennesket lever i naturen, kjemper for overlevelse
- Romantikken: Mennesket lever i byer, lengter til naturen
- Teknologisk utvikling gjør naturen mindre truende
- Nasjonalisme gjør naturen til identitetsmarkør`,
    },

    // ========== PRIMÆRTEKSTER ==========
    {
      id: 'norsk-vg1-5-1-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Håvamål (utdrag)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-5-1-primaertekst-1-text',
          type: 'text',
          content: TEKST_HAVAMAL_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-5-1-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Voluspå (utdrag)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-5-1-primaertekst-2-text',
          type: 'text',
          content: TEKST_VOLUSPA_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-5-1-primaertekst-3',
      type: 'collapsible',
      title: 'Primærtekst: Petter Dass – «Nordlands Trompet» (utdrag)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-5-1-primaertekst-3-text',
          type: 'text',
          content: TEKST_PETTER_DASS_NORDLANDS_TROMPET,
        },
      ],
    },
    {
      id: 'norsk-vg1-5-1-primaertekst-4',
      type: 'collapsible',
      title: 'Primærtekst: Holberg – «Erasmus Montanus» (scene)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-5-1-primaertekst-4-text',
          type: 'text',
          content: TEKST_HOLBERG_ERASMUS_MONTANUS_SCENE,
        },
      ],
    },
    {
      id: 'norsk-vg1-5-1-primaertekst-5',
      type: 'collapsible',
      title: 'Primærtekst: Draumkvedet (utdrag)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-5-1-primaertekst-5-text',
          type: 'text',
          content: TEKST_DRAUMKVEDET_UTDRAG,
        },
      ],
    },

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble epoke til kjennetegn:',
        subTasks: [
          {
            label: 'a',
            task: 'Fornuft, vitenskap, satire',
            solution: 'Opplysningstiden',
            multipleChoiceOptions: ['Norrøn tid', 'Barokken', 'Opplysningstiden', 'Romantikken'],
          },
          {
            label: 'b',
            task: 'Følelser, natur, det nasjonale',
            solution: 'Romantikken',
            multipleChoiceOptions: ['Norrøn tid', 'Renessansen', 'Barokken', 'Romantikken'],
          },
          {
            label: 'c',
            task: 'Ære, skjebne, heltedåd',
            solution: 'Norrøn tid',
            multipleChoiceOptions: ['Norrøn tid', 'Middelalderen', 'Opplysningstiden', 'Romantikken'],
          },
        ],
        solution: 'a) Opplysningstiden, b) Romantikken, c) Norrøn tid',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Les et utdrag fra et norrønt verk (f.eks. Håvamål eller en saga) og beskriv kjennetegn ved teksten.',
        hints: ['Se på tema, verdier og språk', 'Plasser teksten i sin samtid'],
        solution: 'Analysen bør identifisere norrøne kjennetegn som skjebnetro, ære, og konkret språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Les et dikt fra romantikken og analyser hvordan epokens idealer kommer til uttrykk.',
        hints: ['Se etter natur, følelser, nasjonalisme', 'Bruk kunnskap om konteksten'],
        solution: 'Analysen bør koble tekstens innhold og form til romantikkens idealer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Lag en tidslinje over de litterære epokene fra norrøn tid til romantikken med viktige kjennetegn og forfattere.',
        hints: ['Inkluder årstall, kjennetegn og eksempler', 'Bruk gjerne farger og bilder'],
        solution: 'Tidslinjen gir oversikt og viser utviklingslinjer i litteraturhistorien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: Hvorfor er det viktig å kjenne litteraturhistorien for å forstå tekster fra fortiden?',
        hints: ['Tenk på kontekst, verdier, språk', 'Gi konkrete eksempler'],
        solution: 'Drøftingen bør argumentere for verdien av historisk kunnskap i teksttolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Koble forfatter til riktig epoke:',
        subTasks: [
          {
            label: 'a',
            task: 'Ludvig Holberg',
            solution: 'Opplysningstiden',
            multipleChoiceOptions: ['Norrøn tid', 'Barokken', 'Opplysningstiden', 'Romantikken'],
          },
          {
            label: 'b',
            task: 'Petter Dass',
            solution: 'Barokken',
            multipleChoiceOptions: ['Norrøn tid', 'Barokken', 'Opplysningstiden', 'Romantikken'],
          },
          {
            label: 'c',
            task: 'Henrik Wergeland',
            solution: 'Romantikken',
            multipleChoiceOptions: ['Norrøn tid', 'Barokken', 'Opplysningstiden', 'Romantikken'],
          },
        ],
        solution: 'a) Opplysningstiden, b) Barokken, c) Romantikken',
        allowsUpload: false,
        allowsCanvasDrawing: false,
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
        task: 'Hva er typisk for norrøn litteratur?',
        options: [
          { id: 'a', text: 'Muntlig tradisjon, kollektivt forfatterskap, heltedåd og skjebnetro', isCorrect: true },
          { id: 'b', text: 'Fokus på individets følelser og den vakre naturen', isCorrect: false },
          { id: 'c', text: 'Satire, fornuft og kritikk av autoriteter', isCorrect: false },
          { id: 'd', text: 'Overdådig språk, religiøse kontraster og memento mori', isCorrect: false },
        ],
        solution: 'Norrøn litteratur kjennetegnes av muntlig tradisjon som ble skrevet ned, kollektivt forfatterskap, og temaer knyttet til ære, skjebne og heltedåd.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
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
        task: 'Les primærteksten fra Håvamål. Analyser 2-3 strofer: Hvilke verdier og hvilken visdom uttrykkes? Hvordan gjenspeiler teksten den norrøne verdensanskuelsen?',
        hints: ['Se etter råd om hvordan man bør leve', 'Tenk på verdier som klokskap, gjestfrihet og forsiktighet', 'Sammenlign med verdier vi har i dag'],
        solution: 'Håvamål uttrykker praktisk livsvisdom fra vikingtiden. Strofene handler om klokskap, gjestfrihet, forsiktighet og ærlighet. De gjenspeiler et samfunn der overlevelse krevde kloke valg, og der ære og rykte var avgjørende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Les primærteksten fra Holbergs «Erasmus Montanus». Analyser scenen: Hva er satirisk? Hvem og hva kritiserer Holberg? Hvordan bruker han humor for å fremme et poeng?',
        hints: ['Se på kontrasten mellom boklig lærdom og sunn fornuft', 'Tenk på hva Holberg mener om akademisk hovmod', 'Koble til opplysningstidens idealer'],
        solution: 'Holberg satiriserer akademisk hovmod og misbruk av lærdom. Erasmus Montanus bruker sin universitetsutdanning til å overkjøre folk med sofistiske argumenter, uten virkelig forståelse. Holberg kritiserer både den overflatiske lærdommen og bondesamfunnets uvitenhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten fra Petter Dass\' «Nordlands Trompet». Analyser naturbeskrivelsen: Hvordan skildrer Dass den nordnorske naturen? Hvilke virkemidler bruker han? Hva er forholdet mellom natur og Gud i teksten?',
        hints: ['Se på billedbruk og detaljrikdom', 'Tenk på barokkens stil: overdådighet og kontraster', 'Legg merke til det religiøse perspektivet'],
        solution: 'Petter Dass skildrer den nordnorske naturen med detaljert billedbruk og barokk overdådighet. Naturen fremstilles som Guds skaperverk, og det er en tett forbindelse mellom det jordiske og det himmelske. Dass bruker kontraster og konkrete beskrivelser som er typiske for barokken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Sammenlign natursynet i norrøn litteratur og i romantikken ved å bruke konkrete primærtekster. Bruk Håvamål eller Voluspå fra norrøn tid, og sammenlign med Wergelands eller andre romantikers naturbeskrivelser. Skriv en sammenligningsanalyse (300-400 ord).',
        hints: [
          'Bruk konkrete sitater fra tekstene',
          'Analyser forskjellen i hvordan naturen beskrives og oppleves',
          'Sett i sammenheng med epokenes verdensanskuelse',
        ],
        solution: 'Analysen bør vise at norrøn litteratur ser naturen som farlig og uforutsigbar, der mennesket kjemper for å overleve, mens romantikken idealiserer naturen som vakker, frigjørende og knyttet til nasjonal identitet. Konkrete teksteksempler skal underbygge argumentasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (400-500 ord): Hvordan gjenspeiler Voluspå det norrøne verdensbildet? Analyser utdraget fra Voluspå og drøft hva diktet forteller oss om norrøn kosmologi, skjebnetro og menneskets plass i verden.',
        hints: [
          'Se på skapelsesberetningen og ragnarok-motivet',
          'Drøft forholdet mellom guder og mennesker',
          'Sammenlign eventuelt med andre skapelsesfortellinger',
        ],
        solution: 'Essayet bør analysere Voluspå som uttrykk for den norrøne kosmologien: verdens skapelse, gudenes kamp, ragnarok og gjenfødelsen. Det bør drøfte skjebnetro, syklisk tidsfølelse og naturkrefter som sentrale elementer i det norrøne verdensbildet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Skriving av fagartikkel
// ============================================================================

export const CHAPTER_NORSK_VG1_5_2: TextbookChapter = {
  id: 'norsk-vg1-5-2',
  courseId: 'norsk-vg1',
  chapterNumber: '5.3',
  title: 'Skriving av fagartikkel',
  description: 'Lær å skrive fagartikler med god struktur og kildebruk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive fagartikler med klar struktur, korrekt kildebruk og tilpasset språk',
  ],
  content: [
    {
      id: 'norsk-vg1-5-2-intro',
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
      id: 'norsk-vg1-5-2-def-1',
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
      id: 'norsk-vg1-5-2-def-2',
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
      id: 'norsk-vg1-5-2-example-1',
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

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-1',
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
        task: 'Skriv innledningen til fagartikkelen (100-150 ord). Den skal presentere tema, problemstilling og avgrensning.',
        hints: ['Start med noe som fanger oppmerksomheten', 'Vær tydelig på hva artikkelen handler om'],
        solution: 'Innledningen skal gi leseren en klar forventning om hva som kommer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Skriv en fullstendig fagartikkel (500-700 ord) med korrekt kildebruk og kildeliste.',
        hints: ['Følg disposisjonen', 'Bruk kildehenvisninger underveis', 'Les gjennom og sjekk struktur og språk'],
        solution: 'Fagartikkelen vurderes etter struktur, innhold, kildebruk og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gi tilbakemelding på en medelevs fagartikkel og revider din egen basert på tilbakemelding.',
        hints: ['Fokuser på struktur, kilder og språk', 'Vær konstruktiv og konkret', 'Bruk vurderingskriteriene'],
        solution: 'Responsarbeid er en viktig del av skriveprosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Skriv en innledning (100-150 ord) til en fagartikkel om et litteraturhistorisk tema, for eksempel: "Hvordan gjenspeiler norrøn litteratur vikingtidens verdier?" eller "Hva kjennetegner Holbergs satire?"',
        hints: [
          'Start med noe som fanger leserens interesse',
          'Presenter problemstillingen tydelig',
          'Avgrens temaet',
        ],
        solution: 'Innledningen skal fange interesse, presentere tema og problemstilling, og avgrense hva artikkelen skal handle om. Den bør gi leseren en tydelig forventning om innholdet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Les dette svake avsnittet fra en fagartikkel og skriv det om slik at det blir bedre:\n\n"Romantikken var kul. Alle var opptatt av naturen og sånne ting. Wergeland skrev masse dikt. Det var fint. Jeg synes romantikken er den beste epoken."',
        hints: [
          'Gjør språket mer saklig og presist',
          'Fjern muntlig språk og personlige meninger',
          'Legg til fagtermer og konkrete eksempler',
        ],
        solution: 'Et forbedret avsnitt kan være: "Romantikken (ca. 1800-1850) var en litterær epoke preget av naturdyrking, nasjonalisme og fokus på følelser. Henrik Wergeland var en sentral skikkelse i norsk romantikk, kjent for sin nasjonalromantiske lyrikk. I diktene sine uttrykker Wergeland kjærlighet til fedrelandet og naturen, noe som var typisk for epokens idealer."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Gjennomfør en kameratvurdering: Bytt fagartikkel med en medelev og gi tilbakemelding basert på disse kriteriene:\n\n1. Er problemstillingen tydelig og avgrenset?\n2. Er strukturen logisk (innledning, hoveddel, avslutning)?\n3. Er språket saklig og presist?\n4. Er kildene troverdige og riktig referert?\n5. Besvarer artikkelen problemstillingen?\n\nSkriv en tilbakemelding (150-200 ord) og revider din egen artikkel basert på tilbakemeldingen du får.',
        hints: [
          'Vær konstruktiv - pek på både styrker og forbedringsområder',
          'Gi konkrete forslag til forbedring',
          'Bruk vurderingskriteriene systematisk',
        ],
        solution: 'Kameratvurdering er en viktig del av skriveprosessen. En god tilbakemelding er konkret, konstruktiv og basert på tydelige kriterier. Å revidere teksten basert på tilbakemelding viser evne til å forbedre eget arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.1: Norsk språkhistorie
// ============================================================================

export const CHAPTER_NORSK_VG1_6_1: TextbookChapter = {
  id: 'norsk-vg1-6-1',
  courseId: 'norsk-vg1',
  chapterNumber: '4.2',
  title: 'Norsk språkhistorie',
  description: 'Utforsk utviklingen av det norske språket fra urnordisk til i dag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for utvikling og variasjon i norsk språk',
  ],
  content: [
    {
      id: 'norsk-vg1-6-1-intro',
      type: 'text',
      content: `## Det norske språkets historie

Norsk språk har utviklet seg over mer enn tusen år. Fra de eldste runeinnskriftene til dagens digitale kommunikasjon har språket gjennomgått store forandringer.

**Hovedperioder i norsk språkhistorie:**
- **Urnordisk** (ca. 200-700): Felles nordisk språk
- **Norrønt** (ca. 700-1350): Vikingtid og middelalder
- **Mellomnorsk** (ca. 1350-1525): Hansatid og språkblanding
- **Dansk-norsk** (ca. 1525-1814): Unionen med Danmark
- **Moderne norsk** (1814-): Nasjonsbygging og språkstrid`,
    },
    {
      id: 'norsk-vg1-6-1-def-1',
      type: 'definition',
      title: 'Fra urnordisk til norrønt',
      content: `**Urnordisk (ca. 200-700)**
De eldste skriftlige kildene er runeinnskrifter. Språket var relativt likt over hele Skandinavia.

**Viktige kjennetegn:**
- 24 runer (den eldre futharken)
- Komplekst bøyningssystem
- Mange kasusformer

**Norrønt (ca. 700-1350)**
I vikingtiden utviklet det seg regionale forskjeller. Norrønt er språket i sagaene og eddadiktningen.

**Viktige trekk:**
- Forenklet runesystem (16 runer)
- Latinsk alfabet innføres med kristendommen
- Rik litterær tradisjon
- Fire kasus (nominativ, akkusativ, dativ, genitiv)`,
    },
    {
      id: 'norsk-vg1-6-1-def-2',
      type: 'definition',
      title: 'Mellomnorsk og dansk-norsk',
      content: `**Mellomnorsk (ca. 1350-1525)**
Svartedauden (1349) førte til stor befolkningsnedgang. Mange skrivekyndige døde, og språket ble mindre standardisert.

**Hanseatisk påvirkning:**
- Tyske kjøpmenn dominerte handelen
- Mange tyske lånord kom inn i norsk
- Eksempler: handel, krig, frue, herskap

**Dansk-norsk periode (ca. 1525-1814)**
Under unionen med Danmark ble dansk skriftspråk. Talespråket forble norsk, men fikk dansk påvirkning.

**Konsekvenser:**
- Dansk ble administrasjonsspråk
- Bibeloversettelser på dansk
- Norske dialekter levde videre i talespråket
- Grunnlag for dagens målformsdebatt`,
    },
    {
      id: 'norsk-vg1-6-1-def-3',
      type: 'definition',
      title: 'Moderne norsk (1814-)',
      content: `**Nasjonsbygging og språkstrid**
Etter 1814 ble spørsmålet om et eget norsk skriftspråk sentralt.

**To hovedretninger:**
1. **Fornorsking av dansk** (Knud Knudsen)
   - Gradvis tilpasning til norsk uttale
   - Førte til riksmål/bokmål

2. **Nytt språk basert på dialekter** (Ivar Aasen)
   - Samlet dialektord fra hele landet
   - Skapte landsmål/nynorsk

**Språkpolitiske vedtak:**
- 1885: Jamstillingsvedtaket - landsmål og riksmål likestilt
- 1929: Navnene nynorsk og bokmål innføres
- 1938-2012: Ulike reformer for tilnærming/normering

**I dag:**
- To offisielle målformer: bokmål og nynorsk
- Kommuner og institusjoner velger målform
- Elever har rett til lærebøker på sin målform`,
    },
    {
      id: 'norsk-vg1-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Språkendring gjennom tid',
      problem: 'Sammenlign disse setningene fra ulike perioder:',
      solution: `**Norrønt (ca. 1200):**
"Hann réð fyrir landi sínu."
(Han rådde for landet sitt.)

**Mellomnorsk (ca. 1450):**
"Han raadde for lande sit."

**Dansk-norsk (ca. 1750):**
"Han raadede for sit Land."

**Moderne bokmål:**
"Han styrte landet sitt."

**Moderne nynorsk:**
"Han styrte landet sitt."

**Observasjoner:**
- Bøyningsendelser forsvinner gradvis
- Ordstilling endres
- Skrivemåten forenkles
- Dansk påvirkning synlig i mellomperioden`,
    },

    // ========== PRIMÆRTEKSTER ==========
    {
      id: 'norsk-vg1-6-1-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Kongespeilet (utdrag, ca. 1250)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-6-1-primaertekst-1-text',
          type: 'text',
          content: TEKST_KONGESPEILET_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-6-1-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen – «Prøver af Landsmaalet» (1853)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-6-1-primaertekst-2-text',
          type: 'text',
          content: TEKST_AASEN_PROVER_AV_LANDSMAALET,
        },
      ],
    },

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett riktig periode til disse språktrekkene:',
        subTasks: [
          {
            label: 'a',
            task: 'Runeinnskrifter med 24 tegn.',
            solution: 'Urnordisk periode (ca. 200-700)',
            multipleChoiceOptions: ['Urnordisk', 'Norrønt', 'Mellomnorsk', 'Dansk-norsk'],
          },
          {
            label: 'b',
            task: 'Mange tyske lånord kommer inn i språket.',
            solution: 'Mellomnorsk periode - hansatiden (ca. 1350-1525)',
            multipleChoiceOptions: ['Urnordisk', 'Norrønt', 'Mellomnorsk', 'Dansk-norsk'],
          },
          {
            label: 'c',
            task: 'Sagaer og eddadikt skrives ned.',
            solution: 'Norrøn periode (ca. 700-1350)',
            multipleChoiceOptions: ['Urnordisk', 'Norrønt', 'Mellomnorsk', 'Dansk-norsk'],
          },
        ],
        solution: 'a) Urnordisk, b) Mellomnorsk, c) Norrønt',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor vi i dag har to skriftspråk i Norge (bokmål og nynorsk).',
        hints: ['Tenk på unionen med Danmark', 'Hvilke to strategier fantes for å skape et norsk skriftspråk?'],
        solution: 'Under unionen med Danmark ble dansk skriftspråk i Norge. Etter 1814 oppsto to strategier: Knud Knudsen ville fornorske dansk gradvis (bokmål), mens Ivar Aasen ville bygge et nytt språk på norske dialekter (nynorsk). Begge ble offisielle i 1885.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn fem ord i moderne norsk som er lånt fra tysk i hansatiden.',
        hints: ['Tenk på ord knyttet til handel, håndverk eller samfunn', 'Mange vanlige ord har tysk opprinnelse'],
        solution: 'Eksempler: arbeid, betale, handel, frue, herskap, snekker, skomaker, straff, språk, penger. Disse ordene kom inn i norsk gjennom handelskontakt med hanseatene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter: Burde Norge ha ett felles skriftspråk, eller er det en fordel med to målformer?',
        hints: ['Vurder argumenter for og mot', 'Tenk på identitet, praktiske hensyn og kulturarv'],
        solution: 'Dette er et debattspørsmål uten fasitsvar. Argumenter FOR to målformer: bevarer språkmangfold, styrker dialektene, kulturarv. Argumenter FOR ett språk: praktisk forenkling, mindre kostbart, enklere å lære. Det viktige er å forstå argumentene på begge sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les en kort tekst på norrønt (f.eks. fra en saga) og prøv å identifisere ord du gjenkjenner.',
        hints: ['Mange ord ligner på moderne norsk', 'Se etter navn og vanlige ord'],
        solution: 'Mange norrøne ord er gjenkjennelige: maðr (mann), kona (kone), skip (skip), land (land). Øvelsen viser kontinuiteten i språket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Sett periodene i riktig kronologisk rekkefølge:',
        options: [
          { id: 'a', text: 'Urnordisk, norrønt, mellomnorsk, dansk-norsk, moderne norsk', isCorrect: true },
          { id: 'b', text: 'Norrønt, urnordisk, dansk-norsk, mellomnorsk, moderne norsk', isCorrect: false },
          { id: 'c', text: 'Mellomnorsk, urnordisk, norrønt, moderne norsk, dansk-norsk', isCorrect: false },
          { id: 'd', text: 'Dansk-norsk, norrønt, urnordisk, mellomnorsk, moderne norsk', isCorrect: false },
        ],
        solution: 'Riktig rekkefølge: Urnordisk (ca. 200-700), norrønt (ca. 700-1350), mellomnorsk (ca. 1350-1525), dansk-norsk (ca. 1525-1814), moderne norsk (1814-).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor har Norge to offisielle skriftspråk?',
        options: [
          { id: 'a', text: 'Fordi det etter 1814 oppsto to ulike strategier for å skape et norsk skriftspråk: fornorsking av dansk (bokmål) og nybygging fra dialekter (nynorsk)', isCorrect: true },
          { id: 'b', text: 'Fordi Nord-Norge og Sør-Norge snakket helt ulike språk', isCorrect: false },
          { id: 'c', text: 'Fordi Sverige og Danmark tvang Norge til å ha to språk', isCorrect: false },
          { id: 'd', text: 'Fordi nynorsk er det opprinnelige norske språket og bokmål ble oppfunnet senere', isCorrect: false },
        ],
        solution: 'Etter unionsoppløsningen med Danmark i 1814 ønsket Norge et eget skriftspråk. Knud Knudsen ville fornorske dansk gradvis (ble bokmål), mens Ivar Aasen ville bygge et nytt språk basert på norske dialekter (ble nynorsk). Begge ble likestilt i 1885.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten fra Kongespeilet. Analyser utdraget: Hva handler teksten om? Hva kan vi lære om språket og samfunnet på 1200-tallet ut fra denne teksten?',
        hints: ['Se på ordvalg og setningsstruktur', 'Tenk på hvem teksten er skrevet for', 'Sammenlign med moderne norsk'],
        solution: 'Kongespeilet er en opplæringsbok fra ca. 1250, skrevet som dialog mellom far og sønn. Teksten viser norrønt språk med komplekse setninger, og gir innsikt i datidens idealer om dannelse, kunnskap og riktig oppførsel for kongens menn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Velg et norsk ord (f.eks. "arbeid", "skole" eller "bok") og spor det gjennom språkhistorien. Hvor kommer det fra? Hvordan har det endret seg? Bruk etymologisk ordbok eller nettressurser.',
        hints: ['Bruk Bokmålsordboka eller Nynorskordboka', 'Se på opprinnelsesspråk og betydningsendring', 'Sammenlign med beslektede ord i andre språk'],
        solution: 'Eksempel: "arbeid" kommer fra tysk "Arbeit" via hanseatisk kontakt. "Skole" kommer fra gresk "schole" via latin. Ordenes historie viser hvordan språkkontakt har formet norsk ordforråd gjennom ulike perioder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Skriv et essay (400-500 ord) om årsaker til språkendring. Bruk eksempler fra norsk språkhistorie og drøft: Hva driver språkendringer? Er det ytre faktorer (kontakt, politikk) eller indre faktorer (forenkling, analogi)?',
        hints: [
          'Gi eksempler fra flere perioder',
          'Drøft forholdet mellom ytre og indre årsaker',
          'Tenk på svartedauden, hansatiden og den danske unionen',
        ],
        solution: 'Essayet bør drøfte både ytre årsaker (språkkontakt med tysk og dansk, politiske endringer, teknologisk utvikling) og indre årsaker (grammatisk forenkling, lydendringer). Gode eksempler er svartedaudens innvirkning, hanseatisk låneordpåvirkning og den danske unionens konsekvenser for skriftspråket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Undersøk og sammenlign norsk språkutvikling med dansk og svensk. Hvorfor ble de skandinaviske språkene så forskjellige, når de hadde samme opphav? Skriv en kort forskningsrapport (300-400 ord) med kildehenvisninger.',
        hints: [
          'Se på politiske, geografiske og sosiale faktorer',
          'Tenk på unionenes rolle',
          'Sammenlign språkpolitikk i de tre landene',
        ],
        solution: 'De skandinaviske språkene deler opphav i urnordisk, men utviklet seg forskjellig på grunn av politiske grenser, ulik språkkontakt og ulik språkpolitikk. Danmark-Norge-unionen gjorde dansk til skriftspråk i Norge, mens Sverige utviklet sitt eget. Geografisk isolasjon og ulik grad av tysk påvirkning spilte også en rolle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2: Nynorsk og bokmål
// ============================================================================

export const CHAPTER_NORSK_VG1_6_2: TextbookChapter = {
  id: 'norsk-vg1-6-2',
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
      id: 'norsk-vg1-6-2-intro',
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
      id: 'norsk-vg1-6-2-def-1',
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
      id: 'norsk-vg1-6-2-def-2',
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
      id: 'norsk-vg1-6-2-example-1',
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

    // ========== PRIMÆRTEKSTER ==========
    {
      id: 'norsk-vg1-6-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen – «Nordmannen» (1863)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-6-2-primaertekst-1-text',
          type: 'text',
          content: TEKST_AASEN_NORDMANNEN,
        },
      ],
    },
    {
      id: 'norsk-vg1-6-2-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Aasmund Olavsson Vinje – «Ferdaminni» (utdrag, 1861)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-6-2-primaertekst-2-text',
          type: 'text',
          content: TEKST_VINJE_FERDAMINNI_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-6-2-primaertekst-3',
      type: 'collapsible',
      title: 'Primærtekst: Arne Garborg – «Bondestudentar» (utdrag, 1883)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-6-2-primaertekst-3-text',
          type: 'text',
          content: TEKST_GARBORG_BONDESTUDENTAR_UTDRAG,
        },
      ],
    },

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-2',
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
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst (100-150 ord) på nynorsk om en aktivitet du liker.',
        hints: ['Bruk ordbok og grammatikkhjelp', 'Les gjennom teksten for å sjekke ordformer'],
        solution: 'Teksten skal vise at du behersker grunnleggende nynorsk grammatikk og ordforråd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tre nynorske forfattere og les et utdrag fra en av dem. Hva legger du merke til ved språket?',
        hints: ['Jon Fosse, Tarjei Vesaas, Olav H. Hauge er kjente nynorskforfattere'],
        solution: 'Nynorsk litteratur har en rik tradisjon. Språket kan virke annerledes, men formidler de samme følelsene og ideene som bokmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign en tekst på bokmål og nynorsk. Hvilke forskjeller finner du?',
        hints: ['Se på ordformer, verbendelser og setningsstruktur', 'Bruk en avisartikkel eller offentlig dokument'],
        solution: 'Sammenligningen skal vise forståelse for de systematiske forskjellene mellom målformene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-6',
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
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-7',
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
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten «Nordmannen» av Ivar Aasen. Analyser diktet: Hva handler det om? Hvilke verdier uttrykkes? Hvordan bruker Aasen nynorsk til å skildre den norske identiteten?',
        hints: ['Se på naturbeskrivelsene', 'Tenk på hva "nordmannen" representerer', 'Koble til nasjonalromantikken og Aasens språkprosjekt'],
        solution: 'Diktet skildrer nordmannen i den norske naturen og uttrykker stolthet over det norske. Aasen bruker sitt nynorske språk til å vise at folkespråket har litterær verdi. Diktet er nasjonalromantisk i sitt fokus på natur, folk og nasjonal identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten fra Vinjes «Ferdaminni». Oversett et avsnitt til bokmål og analyser hva som endrer seg. Mister teksten noe i oversettelsen?',
        hints: ['Sammenlign ordvalg, rytme og tone', 'Tenk på om nynorsken gir teksten en spesiell karakter', 'Reflekter over forholdet mellom språk og innhold'],
        solution: 'Oversettelsen vil vise systematiske forskjeller mellom målformene. Teksten kan miste noe av sin opprinnelige tone og klang i oversettelsen, noe som illustrerer at språkvalg påvirker leseopplevelsen. Vinjes nynorsk gir teksten en nærhet til talespråket som kan gå tapt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten fra Garborgs «Bondestudentar». Identifiser minst fem nynorske språktrekk i teksten (ordformer, verbformer, uttrykksmåter). Hva forteller utdraget om forholdet mellom by og bygd?',
        hints: ['Se etter typiske nynorske ordformer', 'Tenk på tema: bondestudenten mellom to verdener', 'Koble til debatten om språk og identitet'],
        solution: 'Garborgs tekst viser nynorsk i bruk i en realistisk roman. Nynorske trekk inkluderer a-infinitiv, spesifikke ordformer og uttrykksmåter. Tematisk handler utdraget om spenningen mellom by og bygd, mellom bondekulturen og bykulturen - et tema som er tett knyttet til selve målstriden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Skriv et essay på nynorsk (300-400 ord) om språk og identitet. Drøft: Kva tyder språket for identiteten vår? Bruk eksempel frå ditt eige liv og frå det du har lært om norsk språkhistorie.',
        hints: [
          'Skriv på nynorsk - bruk ordbok',
          'Koble personlig erfaring med fagstoff',
          'Tenk på dialekt, målform og flerspråklighet',
        ],
        solution: 'Essayet vurderes etter nynorsk språkføring, innhold og evne til refleksjon. Det bør vise forståelse for sammenhengen mellom språk og identitet, med eksempler fra eget liv og fra norsk språkhistorie.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-12',
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
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.1: Språkmangfold i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_7_1: TextbookChapter = {
  id: 'norsk-vg1-7-1',
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
      id: 'norsk-vg1-7-1-intro',
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
      id: 'norsk-vg1-7-1-def-1',
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
      id: 'norsk-vg1-7-1-def-2',
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
      id: 'norsk-vg1-7-1-def-3',
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

    // ========== OPPGAVER ==========
    {
      id: 'norsk-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-1',
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
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv din egen dialekt eller talemål. Hvilke kjennetegn har den?',
        hints: ['Tenk på uttale, ordvalg og grammatikk', 'Sammenlign med standardspråk'],
        solution: 'Beskrivelsen bør inkludere konkrete eksempler på særtrekk ved talemålet ditt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk fornorskingspolitikken overfor samer og kvener. Hvordan påvirket den disse gruppenes språk og kultur?',
        hints: ['Bruk kilder som Store norske leksikon eller Sametingets nettsider', 'Se på konsekvenser for språkbruk i dag'],
        solution: 'Fornorskingspolitikken førte til at mange mistet morsmålet sitt. I dag arbeides det med revitalisering av samiske språk og kvensk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter: Bør vi bevare alle dialekter, eller er det greit at språket endrer seg og dialekter forsvinner?',
        hints: ['Vurder argumenter fra ulike synsvinkler', 'Tenk på identitet, praktiske hensyn og språkutvikling'],
        solution: 'Dette er en debatt med gode argumenter på begge sider. Noen mener dialekter er viktig kulturarv, andre mener språkendring er naturlig og uunngåelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Intervju en person med annen dialekt enn deg selv. Hvilke forskjeller oppdager du?',
        hints: ['Spør om ordvalg, uttale og uttrykk', 'Ta notater om konkrete eksempler'],
        solution: 'Intervjuet skal vise forståelse for dialektforskjeller og respekt for språklig variasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-6',
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
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-7',
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
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-8',
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
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-9',
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
        task: 'Skriv et essay (400-500 ord) om språklige rettigheter og demokrati. Drøft: Er retten til å bruke eget språk en demokratisk rettighet? Hva bør staten gjøre for å sikre språkmangfold? Bruk eksempler fra norsk språkpolitikk.',
        hints: [
          'Tenk på samers rettigheter, nynorskbrukeres rettigheter, innvandreres språkrettigheter',
          'Se på Grunnloven, sameloven og språkloven',
          'Drøft forholdet mellom majoritetsspråk og minoritetsspråk',
        ],
        solution: 'Essayet bør drøfte språklige rettigheter som en del av demokratiet, med eksempler fra norsk kontekst. Det bør vise forståelse for spenningen mellom praktiske hensyn og individuelle rettigheter, og reflektere over statens ansvar for språkmangfold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Sammenlign språkpolitikken i Norge, Sverige og Danmark. Hvordan forholder de tre landene seg til dialekter, minoritetsspråk og standardspråk? Skriv en sammenligningsrapport (300-400 ord).',
        hints: [
          'Norge har stor dialektaksept - gjelder det samme i Sverige og Danmark?',
          'Se på antall offisielle minoritetsspråk i hvert land',
          'Tenk på holdninger til standardspråk i de tre landene',
        ],
        solution: 'Rapporten bør vise at Norge har større dialektaksept enn Danmark og Sverige, der standardspråk er mer dominerende. Alle tre land har minoritetsspråk, men politikken varierer. Norge er unikt med to offisielle skriftspråk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Språk i endring
// ============================================================================

export const CHAPTER_NORSK_VG1_7_2: TextbookChapter = {
  id: 'norsk-vg1-7-2',
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
      id: 'norsk-vg1-7-2-intro',
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
      id: 'norsk-vg1-7-2-def-1',
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
      id: 'norsk-vg1-7-2-def-2',
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
      id: 'norsk-vg1-7-2-example-1',
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

    // ========== PRIMÆRTEKSTER (språkprøver) ==========
    {
      id: 'norsk-vg1-7-2-primaertekst-1',
      type: 'collapsible',
      title: 'Språkprøve: Holberg (ca. 1720)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-7-2-primaertekst-1-text',
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
      id: 'norsk-vg1-7-2-primaertekst-2',
      type: 'collapsible',
      title: 'Språkprøve: Wergeland (ca. 1835)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-7-2-primaertekst-2-text',
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
      id: 'norsk-vg1-7-2-primaertekst-3',
      type: 'collapsible',
      title: 'Språkprøve: Bjørnson (ca. 1860)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-7-2-primaertekst-3-text',
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
      id: 'norsk-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn fem engelske lånord som har kommet inn i norsk de siste 20 årene. Finnes det norske alternativer?',
        hints: ['Tenk på teknologi, sosiale medier og ungdomskultur'],
        solution: 'Eksempler: poste, streame, influenser, liken, ghoste. Norske alternativer kan være: legge ut, strømme, påvirker, like/gille, forsvinne fra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Sammenlign en avisartikkel fra 1950-tallet med en fra i dag. Hvilke språklige forskjeller finner du?',
        hints: ['Se på ordvalg, setningslengde og stilnivå', 'Nasjonalbiblioteket har digitaliserte aviser'],
        solution: 'Du vil sannsynligvis finne forskjeller i formelt vs. uformelt språk, ordvalg, og engelske lånord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter: Er det viktig å begrense engelske lånord i norsk, eller er språkblanding naturlig og uproblematisk?',
        hints: ['Vurder argumenter for og mot', 'Tenk på identitet, forståelse og språkutvikling'],
        solution: 'Dette er et debattspørsmål. Noen mener at for mye engelsk truer norsk språk, andre mener at lånord er en naturlig del av språkutvikling og ikke problematisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
        task: 'Lag fem nye norske ord for engelske uttrykk som brukes mye i dag.',
        hints: ['Bruk sammensetning eller betydningsutvidelse', 'Tenk på hva som ville fungere naturlig på norsk'],
        solution: 'Kreativ oppgave. Eksempler: "livestrømming" for livestream, "nettprater" for influencer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Intervju en eldre person om ord og uttrykk de brukte da de var unge. Hvilke av disse er ukjente for deg?',
        hints: ['Spør om ord for teknologi, arbeid og dagligliv', 'Noter ned ukjente ord og finn ut hva de betyr'],
        solution: 'Intervjuet viser hvordan ordforrådet endres mellom generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
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
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-7',
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
        task: 'Sammenlign de tre språkprøvene (Holberg ca. 1720, Wergeland ca. 1835, Bjørnson ca. 1860). Hvilke endringer ser du i språket over disse 140 årene? Se spesielt på rettskriving, ordvalg, setningsstruktur og grad av fornorsking.',
        hints: [
          'Se på store/små forbokstaver i substantiv',
          'Sammenlign verbformer og ordstilling',
          'Legg merke til hvor "norsk" teksten føles',
        ],
        solution: 'Sammenligningen bør vise en gradvis fornorsking fra Holbergs rene dansk-norsk via Wergelands mer personlige og delvis fornorskede stil til Bjørnsons tydeligere norske preg. Konkrete endringer inkluderer overgang fra store til små forbokstaver, enklere verbformer, og mer norske ordvalg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-9',
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
      },
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
  CHAPTER_NORSK_VG1_5_1,
  CHAPTER_NORSK_VG1_5_2,
  CHAPTER_NORSK_VG1_6_1,
  CHAPTER_NORSK_VG1_6_2,
  CHAPTER_NORSK_VG1_7_1,
  CHAPTER_NORSK_VG1_7_2,
];
