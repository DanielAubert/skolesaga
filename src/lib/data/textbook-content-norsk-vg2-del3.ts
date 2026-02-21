/**
 * Norsk VG2 - Del 3: Kapittel 3.1-3.9
 * Romantikk og nasjonsbygging (1800-1870)
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_VG2_WERGELAND_FORSTE_SANG,
  TEKST_VG2_WERGELAND_TIL_FORAARET,
  TEKST_VG2_WERGELAND_MIG_SELV,
  TEKST_VG2_WERGELAND_TIL_MIN_GYLDENLAK,
  TEKST_VG2_WERGELAND_FORSTE_SOMMERFUGL,
  TEKST_VG2_WERGELAND_JOEDEN,
  TEKST_VG2_WELHAVEN_NORGES_DAEMRING,
  TEKST_VG2_WELHAVEN_LOKKENDE_TONER,
  TEKST_VG2_WELHAVEN_DIGTETS_AAND,
  TEKST_VG2_ASBJORNSEN_ASKELADDEN,
  TEKST_VG2_ASBJORNSEN_SMORBUKK,
  TEKST_VG2_AASEN_NORDMANNEN,
  TEKST_VG2_AASEN_GRAMMATIK_FORORD,
  TEKST_VG2_DRAUMKVEDET,
  TEKST_VG2_MARGIT_HJUKSE,
  TEKST_VG2_AASEN_OM_VORT_SKRIFTSPROG,
} from './textbook-content-norsk-vg2-tekster';

// ============================================================================
// KAPITTEL 3.1: Romantikkens ideer og impulser
// ============================================================================

export const CHAPTER_NORSK_VG2_3_1: TextbookChapter = {
  id: 'norsk-vg2-3-1',
  courseId: 'norsk-vg2',
  chapterNumber: '3.1',
  title: 'Romantikkens ideer og impulser',
  description: 'Utforsk romantikken som reaksjon på opplysningstiden, med fokus på følelser, natur og det nasjonale.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-3-1-intro',
      type: 'text',
      content: `## Romantikken - følelsenes revolusjon

Romantikken var en kultur- og litteraturbevegelse som oppsto i Europa rundt 1800 som en reaksjon på opplysningstidens rasjonalisme. Mens opplysningstiden hadde satt fornuften i høysetet, fremhevet romantikerne følelser, fantasi, natur og det individuelle.

**Bakgrunn**

Romantikken vokste frem i en tid med store omveltninger:
- Den franske revolusjonen (1789) og dens etterspill
- Napoleonskrigene og nasjonalismens fremvekst
- Industrialiseringen og urbaniseringen
- Misnøye med fornuftens "kalde" verdensbilde

Romantikerne søkte det autentiske, det opprinnelige og det naturlige i en verden som ble stadig mer moderne og fremmedgjort.

**Romantikkens ideer**

*Følelse over fornuft:* Følelsene er mer ekte og dypere enn fornuften. Dikteren føler før han tenker.

*Naturen som åndelig kraft:* Naturen er ikke bare materie, men besjelet og full av mening.

*Det nasjonale:* Hvert folk har sin egen "ånd" uttrykt i språk, eventyr og folkeviser.

*Geniet:* Dikteren er et geni som skaper noe nytt, ikke bare en håndverker som følger regler.

*Lengsel:* Romantisk lengsel (Sehnsucht) etter noe uoppnåelig - det fjerne, det tapte, det ideelle.

*Det overnaturlige:* Interesse for myter, eventyr, drømmer og det mystiske.

**Romantikken i Norge**

I Norge kom romantikken ca. 1814-1850, nært knyttet til nasjonsbyggingen etter løsrivelsen fra Danmark. Viktige forfattere var:
- Henrik Wergeland (1808-1845)
- Johan Sebastian Welhaven (1807-1873)
- Andreas Munch (1811-1884)`,
    },
    {
      id: 'norsk-vg2-3-1-def-1',
      type: 'definition',
      title: 'Romantikkens sentrale begreper',
      content: `**Romantikk:** Kultur- og litteraturbevegelse ca. 1800-1850 som vektla følelse, fantasi og natur.

**Geniet:** Forestillingen om dikteren som et originalt skapende individ, ikke bare en håndverker.

**Sehnsucht:** Tysk ord for romantisk lengsel - lengsel etter noe uoppnåelig.

**Organisme:** Romantikernes syn på naturen og samfunnet som en levende helhet, ikke en maskin.

**Folkånd (Volksgeist):** Ideen om at hvert folk har en egen "ånd" eller karakter.

**Det sublime:** Opplevelsen av naturens overveldende storhet (fjell, hav, stormer).

**Nattside:** Interesse for det mørke, mystiske og ubevisste.

**Romantiske motiver:**
- Den ville naturen
- Ruiner og middelalder
- Lengsel og melankoli
- Kjærlighet og død
- Eventyr og folketro`,
    },
    {
      id: 'norsk-vg2-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Wergelands naturopplevelse',
      problem: `Les dette utdraget fra Henrik Wergelands dikt "Mig Selv" (1833):

"Hvorfor svulmer mit Bryst? Jeg aner,
at Noget der er, som vil ud,
udfolde vidt sine Vinger og svæve
som en Sommerfugl over Gud."`,
      solution: `**Analyse:**

**Romantisk lengsel:**
Dikteren føler noe i brystet som vil ut - en lengsel etter noe større enn det daglige.

**Naturbilder:**
Sommerfuglen symboliserer sjelen, friheten, det å frigjøre seg fra det jordiske.

**Religiøs dimensjon:**
"Svæve over Gud" - dikteren føler seg ett med det guddommelige i naturopplevelsen.

**Romantisk geni:**
Dikteren har en særlig følsomhet som gjør ham i stand til å sanse det andre ikke ser.

**Stil:**
- Spørsmål som uttrykker undring
- Naturbilder som symboler
- Høystemt, følelsesladet tone`,
    },
    {
      id: 'norsk-vg2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar romantikkens ideer.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan var romantikken en reaksjon på opplysningstiden?',
            solution: 'Opplysningstiden vektla fornuft og vitenskap. Romantikken reagerte med å fremheve følelser, fantasi og det irrasjonelle.',
          },
          {
            label: 'b',
            task: 'Hva mente romantikerne med at naturen er "besjelet"?',
            solution: 'Naturen er ikke bare død materie, men full av liv og mening. Mennesket kan føle seg ett med naturen.',
          },
        ],
        solution: 'Romantikken var en reaksjon på rasjonalismen og fremhevet følelser, natur og det nasjonale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket begrep brukes om den romantiske lengselen etter noe uoppnåelig?',
        options: [
          'Volksgeist',
          'Sehnsucht',
          'Panteisme',
          'Det sublime',
        ],
        answer: 1,
        solution: 'Sehnsucht er et tysk ord som betyr romantisk lengsel - en dyp lengsel etter noe uoppnåelig, som det fjerne, det tapte eller det ideelle. Begrepet er sentralt i romantisk filosofi og diktning.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken historisk hendelse var viktig bakgrunn for romantikkens fremvekst i Europa?',
        options: [
          'Reformasjonen',
          'Den franske revolusjonen',
          'Svartedauden',
          'Trettiårskrigen',
        ],
        answer: 1,
        solution: 'Den franske revolusjonen (1789) og dens etterspill var en viktig bakgrunn for romantikken. Revolusjonen skapte både begeistring og skuffelse, og førte til oppblomstring av nasjonalisme og interesse for folkekulturen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar med egne ord hva romantikerne mente med begrepet "geniet". Hvordan skiller denne forestillingen seg fra opplysningstidens syn på forfatteren?',
        hints: ['Tenk på forskjellen mellom å skape noe nytt og å følge regler.'],
        solution: 'For romantikerne var geniet et originalt skapende individ med en særlig evne til å se dypere enn andre mennesker. Dikteren var inspirert, visjonær og unik. I opplysningstiden ble forfatteren snarere sett som en håndverker som fulgte klassiske regler og forbilder. Romantikerne mente geniet brøt med reglene og skapte noe helt nytt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nevn tre sentrale romantiske motiver og forklar kort hva hvert motiv handler om.',
        solution: 'Tre sentrale romantiske motiver: (1) Den ville naturen - fjell, skoger, stormer som uttrykk for det opphøyde og utemmet. (2) Lengsel og melankoli - en dyp følelse av savn etter noe tapt eller uoppnåelig. (3) Eventyr og folketro - interesse for det overnaturlige, det mystiske og folkekulturens fortellinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser utdraget fra Wergelands "Mig Selv" i eksempelet over. Hvilke romantiske trekk finner du i disse fire linjene?',
        hints: [
          'Se på naturbildene, følelsene og den religiøse dimensjonen.',
          'Hva symboliserer sommerfuglen?',
        ],
        solution: 'Utdraget viser flere romantiske trekk: (1) Følelsesmessig intensitet - "svulmer mit Bryst" uttrykker sterk indre bevegelse. (2) Lengsel - dikteren aner noe som "vil ud", en lengsel mot noe større. (3) Naturbilder med symbolsk mening - sommerfuglen symboliserer sjelen som vil frigjøre seg. (4) Religiøs dimensjon - å "svæve over Gud" viser romantikkens sammensmeltning av natur og guddom. (5) Geniet - dikteren har en særlig følsomhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar begrepet "det sublime" og gi et eksempel på en naturopplevelse som kan kalles sublim.',
        hints: ['Det sublime handler om noe overveldende stort som vekker både frykt og beundring.'],
        solution: 'Det sublime er en opplevelse av naturens overveldende storhet som vekker både frykt og henrykkelse. Eksempler kan være å stå ved en enorm foss og kjenne kraften, se ut over et stormfullt hav, eller betrakte et mektig fjellmassiv. Opplevelsen gjør mennesket lite, men gir samtidig en følelse av å være del av noe uendelig. Begrepet ble utviklet av filosofer som Edmund Burke og Immanuel Kant.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Romantikken i Norge var nært knyttet til nasjonsbygging. Forklar denne sammenhengen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken politisk situasjon preget Norge i 1814?',
            solution: 'Norge fikk egen grunnlov og løsrev seg fra Danmark, men gikk i union med Sverige. Landet trengte en nasjonal identitet.',
          },
          {
            label: 'b',
            task: 'Hvordan bidro romantiske ideer til nasjonsbyggingen?',
            solution: 'Romantikkens vekt på folkånd, folkekultur og det nasjonale ga et program for å definere det norske gjennom språk, eventyr, folkeviser og natur. Ideen om at hvert folk har en unik karakter motiverte jakten på det spesifikt norske.',
          },
        ],
        solution: 'Romantikken ga Norge et ideologisk rammeverk for å bygge nasjonal identitet etter 1814.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign romantikkens og opplysningstidens menneskesyn og verdensbilde. Lag et skjema med de viktigste forskjellene.',
        hints: [
          'Tenk på forholdet til fornuft, følelser, natur, religion og individet.',
          'Bruk gjerne en tabell med to kolonner.',
        ],
        solution: 'Skjemaet bør inneholde: Fornuft (opplysningstid: høyeste verdi / romantikk: utilstrekkelig). Følelser (opplysningstid: må kontrolleres / romantikk: veiviser til sannhet). Natur (opplysningstid: mekanisme å forstå / romantikk: besjelet, hellig). Religion (opplysningstid: fornuftig deisme / romantikk: mystikk, panteisme). Individet (opplysningstid: rasjonelt vesen / romantikk: unikt geni). Kunst (opplysningstid: følger regler / romantikk: originalitet). Samfunn (opplysningstid: kontrakt / romantikk: organisk helhet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: "Romantikken var en nødvendig reaksjon på opplysningstidens begrensninger." Bruk eksempler fra pensum.',
        hints: [
          'Hva manglet opplysningstiden ifølge romantikerne?',
          'Hva var romantikkens svakheter?',
          'Var det en nødvendig eller tilfeldig utvikling?',
        ],
        solution: 'Argumenter for: Opplysningstiden overså følelsenes betydning, reduserte naturen til mekanikk, og manglet rom for det individuelle og nasjonale. Romantikken tilførte nødvendige dimensjoner. Argumenter mot: Romantikken kunne bli irrasjonell, sentimental og nasjonal sjåvinistisk. Opplysningstidens verdier (vitenskap, rettigheter, kritisk tenkning) var også nødvendige. Drøftingen bør konkludere med at begge epoker ga viktige bidrag, og at kulturhistorien bør forstås som en dialektisk prosess.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn eksempler på romantiske ideer i vår egen tid. Skriv en kort tekst (200-300 ord) der du drøfter om romantikken fortsatt lever i dag.',
        hints: [
          'Tenk på musikk, film, sosiale medier, naturopplevelser og nasjonalisme.',
          'Er det romantisk lengsel i populærkultur?',
        ],
        solution: 'Teksten bør peke på romantiske trekk i vår tid: naturlengsel og friluftsliv, individualisering og selvrealisering, nasjonalisme og identitetspolitikk, fantasy-sjangeren (Tolkien, Game of Thrones), musikkens vektlegging av følelser, Instagram-estetikk med naturfotografi. Drøftingen bør også peke på forskjeller: dagens romantikk er kommersialisert, ironisk og selvbevisst på måter 1800-tallets romantikk ikke var.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Henrik Wergeland
// ============================================================================

export const CHAPTER_NORSK_VG2_3_2: TextbookChapter = {
  id: 'norsk-vg2-3-2',
  courseId: 'norsk-vg2',
  chapterNumber: '3.2',
  title: 'Henrik Wergeland - dikter og agitator',
  description: 'Lær om Henrik Wergeland, den store norske romantiske dikteren og folkeopplyseren, med dybdeanalyser av hans viktigste dikt.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-3-2-intro',
      type: 'text',
      content: `## Henrik Wergeland - Norges nasjonaldikter

Henrik Wergeland (1808-1845) regnes som Norges viktigste dikter og en av grunnleggerne av norsk nasjonal identitet. I sitt korte liv skrev han et enormt forfatterskap og kjempet for folkeopplysning, frihet og rettferdighet.

**Liv og virke**

Wergeland ble født i Kristiansand, sønn av presten Nicolai Wergeland. Familien flyttet til Eidsvoll, hvor faren var stortingsmann. Henrik studerte teologi, men viet seg til litteratur og samfunnsengasjement.

Han var en eksplosiv personlighet - lidenskapelig, generøs og uberegnelig. Han kjempet for jødenes rettigheter, for folkeopplysning og for et selvstendig norsk kulturliv.

Wergeland døde av tuberkulose i 1845, bare 37 år gammel. Hans siste diktsamling, "Den engelske Lods", ble skrevet på dødsleiet.

**Forfatterskap**

Wergelands forfatterskap er enormt og variert:
- Dramatikk: "Campbellerne"
- Lyrikk: "Digte" (1829), "Den engelske Lods" (1844)
- Epikk: "Skabelsen, Mennesket og Messias" (1830)
- Folkeopplysning: "For Arbeidsklassen"

**Kulturkampen**

Wergeland sto i en bitter strid med Johan Sebastian Welhaven om norsk kulturutvikling. Wergeland ("patriotene") ville bryte med dansk kultur og bygge noe genuint norsk. Welhaven ("intelligenspartiet") mente Norge trengte europeisk dannelse.`,
    },
    {
      id: 'norsk-vg2-3-2-biografi-dybde',
      type: 'text',
      content: `## Dypere biografisk kontekst

**Forholdet til faren Nicolai Wergeland**

Henrik Wergelands far, Nicolai Wergeland (1780-1848), var en av Eidsvoll-mennene som utformet Grunnloven i 1814. Han var prest, politiker og intellektuell - en mann med sterke meninger og stor innflytelse på sønnen.

Forholdet mellom far og sønn var preget av både beundring og spenning:

*Inspirasjon og forbilde:*
- Nicolai ga Henrik en sterk politisk og moralsk bevissthet
- Faren oppmuntret sønnens litterære ambisjoner
- Henriks engasjement for demokrati og folkestyre kom delvis fra farens 1814-idealer

*Konflikt og frigjøring:*
- Henrik brøt med farens mer moderate linje i kulturstriden
- Sønnens eksplosive temperament og kontroversielle oppførsel skapte bekymring
- Henrik måtte finne sin egen vei, ikke bare følge farens fotspor

Nicolai Wergeland overlevde sønnen med tre år og opplevde å se Henrik dø ung av tuberkulose - en tragedie som rammet ham hardt.

**Striden med Welhaven - kulturkampens kjerne**

Konflikten mellom Henrik Wergeland og Johan Sebastian Welhaven (1807-1873) var den mest intense kulturstriden i norsk historie. Den startet for alvor i 1830 og varte hele tiåret.

*Bakgrunnen:*
I 1830 skrev Welhaven et kritisk dikt om Wergelands "Skabelsen, Mennesket og Messias", der han anklaget Wergeland for formløshet og overdrivelse. Wergeland svarte med personangrep, og striden eskalerte.

*Welhavens "Norges Dæmring" (1834):*
Welhaven skrev et langt dikt der han kritiserte det han kalte "Stumperne" - patrioter som skrøt av Norge uten substans. Diktet ble oppfattet som et angrep på alt Wergeland sto for, og utløste raseri.

*Personlige konfrontasjoner:*
- Offentlige debatter i aviser og tidsskrifter
- Fysiske konfrontasjoner og trusler
- Duellutfordringer (som aldri ble gjennomført)
- Splittelse i hele det norske kulturlivet

*Stridens betydning:*
Selv om striden var bitter, tvang den begge parter til å tenke grundigere gjennom sine standpunkter. Norge trengte både Wergelands folkelighet og Welhavens kvalitetskrav. I ettertid ser vi at de utfylte hverandre mer enn de motsa hverandre.

**De siste årene og "Jødesaken"**

Fra slutten av 1830-tallet konsentrerte Wergeland seg mer om praktisk arbeid enn om kulturstrid:

*Folkeopplysning:*
Han startet bladet "For Arbeidsklassen" (1839-1845), der han skrev om praktiske emner - helse, økonomi, naturfag - for vanlige folk. Han mente at kunnskap var veien til frihet.

*Kampen for jødenes rettigheter:*
Grunnloven av 1814 inneholdt en paragraf som forbød jøder adgang til Norge. Wergeland så dette som en skam og kjempet iherdig for å få den opphevet.

Han skrev diktene "Jøden" (1842) og "Jødinden" (1844) for å vekke sympati og forståelse. Han argumenterte i Stortinget og i aviser. Paragrafen ble først opphevet i 1851 - seks år etter hans død.

*Dødsleiet:*
Wergeland fikk tuberkulose og visste at han skulle dø. De siste månedene skrev han noen av sine fineste dikt, deriblant "Til min Gyldenlak" - til en blomst i vinduskarmen som ble et symbol på livet han snart måtte forlate. Han døde 12. juli 1845, bare 37 år gammel.`,
    },
    {
      id: 'norsk-vg2-3-2-def-1',
      type: 'definition',
      title: 'Wergeland - sentrale trekk',
      content: `**Biografiske fakta:**
- 1808-1845 (37 år)
- Født Kristiansand, oppvokst Eidsvoll
- Dikter, folkeopplyser, aktivist
- Kjempet for jødenes rettigheter
- Sønn av Eidsvoll-mannen Nicolai Wergeland

**Litterære kjennetegn:**
- Eksplosiv, visjonær stil
- Rik billedbruk og fantasi
- Naturskildringer
- Optimisme og frihetslengsel

**Hovedtemaer:**
- Frihet og rettferdighet
- Naturen som åndelig kraft
- Norsk identitet
- Menneskets verdighet

**Kulturkampen:**
- Wergeland vs. Welhaven
- Patriotene vs. intelligenspartiet
- Norsk egenart vs. europeisk dannelse`,
    },
    {
      id: 'norsk-vg2-3-2-stil-analyse',
      type: 'text',
      content: `## Wergelands stil og virkemidler

**Det romantiske naturbildet**

Naturen spiller en helt sentral rolle i Wergelands diktning. For ham er naturen ikke bare vakker - den er besjelet, meningsfull og forbundet med det guddommelige.

*Naturens liv:*
I Wergelands dikt lever naturen. Solen "smiler", bekken "synger", blomstene "danser". Dette kalles besjeling (personifikasjon), og det er et sentralt romantisk virkemiddel. Naturen er ikke død materie, men levende ånd.

*Naturen som speil:*
Dikterens følelser speiles i naturen. Når dikteren er glad, blomstrer naturen. Når han sørger, gråter himmelen. Dette kalles "pathetic fallacy" - at naturen tillegges menneskelige følelser.

*Naturen som frihet:*
For Wergeland symboliserer naturen frihet fra samfunnets tvang. I naturen er mennesket fritt, ekte, i kontakt med noe større enn seg selv.

**Politisk engasjement i diktningen**

Wergeland skilte ikke skarpt mellom poesi og politikk. Han mente at dikteren hadde en plikt til å tale for de undertrykte og kjempe for rettferdighet.

*Eksempler på politiske dikt:*
- "Jøden" og "Jødinden" - forsvar for jødenes rettigheter
- Dikt om folkeopplysning og demokrati
- Kritikk av overklassens arroganse

*Retorikk i diktningen:*
Wergeland bruker ofte retoriske virkemidler: direkte henvendelser, retoriske spørsmål, sterke følelsesutbrudd. Diktene hans vil overbevise, ikke bare underholde.

**Bruk av metaforer og symboler**

Wergelands diktning er rik på metaforer og symboler:

*Lyset:*
Lys symboliserer sannhet, opplysning, frihet. Mørke symboliserer uvitenhet og undertrykkelse. Dikteren ser seg selv som en "fakkel" som lyser opp mørket.

*Flammen:*
Wergeland sammenligner seg ofte med en flamme - noe som brenner, som fortærer seg selv, som gir varme og lys men som også kan slukke.

*Blomster og vår:*
Våren symboliserer fornyelse, håp, livskraft. Blomster symboliserer skjønnhet og livets skjørhet. I "Til min Gyldenlak" blir blomsten et symbol på livet selv.

*Fuglen:*
Fuglen symboliserer frihet, sjelen, drømmen om å løfte seg over det jordiske.

**Wergelands særpreg**

Det som gjør Wergeland unik, er intensiteten. Han skriver med en energi og begeistring som kan virke overdrevet for moderne lesere. Men nettopp denne intensiteten gjør ham til romantikkens fremste representant i Norge.`,
    },
    {
      id: 'norsk-vg2-3-2-def-2',
      type: 'definition',
      title: 'Wergelands viktigste virkemidler',
      content: `**Besjeling (personifikasjon):**
Naturen får menneskelige egenskaper - solen smiler, bekken synger, blomsten danser.

**Metaforer:**
Overført betydning - dikteren er en "flamme", en "fakkel", en "storm".

**Symboler:**
- Lys = sannhet, opplysning
- Vår = fornyelse, håp
- Blomster = livets skjønnhet og skjørhet
- Fugl = frihet, sjelen

**Gjentakelse:**
Samme ord eller frase gjentas for å skape intensitet - "Vaaren, Vaaren, Vaaren kommer!"

**Utrop:**
Hyppig bruk av utropstegn og utrop som "O!" for å uttrykke sterk følelse.

**Retoriske spørsmål:**
Spørsmål som ikke krever svar, men som vekker ettertanke hos leseren.`,
    },
    {
      id: 'norsk-vg2-3-2-example-1',
      type: 'example',
      title: 'Eksempel: "Den første Sang"',
      problem: `Les dette utdraget fra "Skabelsen, Mennesket og Messias" (1830), der Wergeland skildrer naturens oppvåkning:

"O, Natur! hvor er du skjøn!
Se, de hvide Skyer flyve,
Fuglene de synge sødt,
Bækkene i Løvsal trylle."`,
      solution: `**Analyse:**

**Naturopplevelse:**
Wergeland uttrykker en intens kjærlighet til naturen. Naturen er "skjøn" - vakker og meningsfull.

**Romantiske motiver:**
- Skyer, fugler, bekker - typiske romantiske naturbilder
- Naturen er levende og aktiv (skyene "flyve", fuglene "synge")

**Personlig tone:**
Utropet "O, Natur!" viser dikterens følelsesmessige engasjement.

**Stil:**
- Enkel, folkelig tone
- Rim og rytme
- Sanseinntrykk (syn, hørsel)

Utdraget viser Wergelands romantiske naturopplevelse, der naturen er besjelet og full av mening.`,
    },
    {
      id: 'norsk-vg2-3-2-example-2',
      type: 'example',
      title: 'Diktanalyse: "Til min Gyldenlak"',
      problem: `Analyser diktet "Til min Gyldenlak" (1845), et av Wergelands siste dikt skrevet på dødsleiet.

Les primærteksten nedenfor og studer følgende aspekter:
- Hva symboliserer gyldenlakken?
- Hvordan forholder dikteren seg til døden?
- Hvilke kontraster brukes i diktet?`,
      solution: `**Analyse av "Til min Gyldenlak":**

**Situasjonen:**
Diktet er skrevet mens Wergeland lå dødssyk av tuberkulose. En gyldenlak (en gul blomst) sto i vinduskarmen hans, og denne blomsten ble et symbol på livet han snart måtte forlate.

**Symbolikken:**
Gyldenlakken symboliserer livet selv - den vokser, blomstrer og lyser opp mens dikteren visner hen. Blomsten blir et "Livets Tegn i Dødens Kammer" - et bevis på at livet fortsetter selv når individet dør.

**Kontrastene:**
Diktet er bygget på sterke kontraster:
- Blomsten spirer opp / dikteren går ned i mulden
- Blomsten skinner som solen / dikteren går i mørket
- Blomsten dufter søtt / dikteren har "en Pest"
- Blomsten står fast / dikteren ligger med "brudte Lemmer"

Disse kontrastene understreker det tragiske i situasjonen, men uten bitterhet.

**Holdningen til døden:**
Diktet viser en overraskende aksept av døden. Wergeland klager ikke, men feirer livet gjennom blomsten. Han ber blomsten stå igjen som et minne - et "evig grønnende" symbol på ham som "elsked Alt, hvad Livet nærer".

**Stil:**
Diktet er enklere og mer dempet enn mange av Wergelands tidligere verker. Den eksplosive energien er erstattet av stille verdighet. Dette viser en modning - dikteren har funnet ro.

**Tematikk:**
- Livets skjørhet og skjønnhet
- Døden som naturlig del av livet
- Ønsket om å bli husket
- Kjærlighet til livet selv i møte med døden`,
    },
    {
      id: 'norsk-vg2-3-2-example-3',
      type: 'example',
      title: 'Diktanalyse: "Den første Sommerfugl"',
      problem: `Analyser diktet "Den første Sommerfugl" (1840) med fokus på:
- Hva symboliserer sommerfuglen?
- Hvordan bruker Wergeland besjeling?
- Hva er diktets stemning?`,
      solution: `**Analyse av "Den første Sommerfugl":**

**Sommerfuglen som symbol:**
Sommerfuglen er et tradisjonelt symbol for:
- Forvandling (fra larve til sommerfugl)
- Sjelens frihet
- Livets forgjengelighet (sommerfuglen lever kort)
- Vårens og sommerens komme

For Wergeland er sommerfuglen "Foraarets Engel" - en budbringer fra himmelen som bringer glede og minner om barndomsuskyld.

**Besjeling:**
Wergeland gir sommerfuglen menneskelige handlinger:
- Den "kysser alle Blomsters Kinder"
- Den "bringer Sommer, Glæde, Minder"
- Den er et "Bud fra Himlens Sal"

Sommerfuglen blir ikke bare et insekt, men en besjelet skapning med en åndelig misjon.

**Stemningen:**
Diktet har en lett, jublende stemning. Det er preget av:
- Glede over vårens komme
- Nostalgi for barndommen
- Optimisme og livskraft
- En følelse av under og forundring

**Virkemidler:**
- Direkte henvendelse: "Velkommen, du lille Sommerfugl!"
- Utrop: "O, lille Sommerfugl saa skjøn"
- Rim: "Blad/glad", "Sal/Dal"
- Sanseinntrykk: farger, bevegelse, lys

**Tematikk:**
- Naturens evige fornyelse
- Barndommens uskyld
- Livets syklus
- Det hellige i det hverdagslige`,
    },
    {
      id: 'norsk-vg2-3-2-example-4',
      type: 'example',
      title: 'Diktanalyse: "Jøden" - det politiske diktet',
      problem: `Analyser utdraget fra "Jøden" (1842) med fokus på:
- Hva er diktets budskap?
- Hvilke retoriske virkemidler brukes?
- Hvordan argumenterer dikteren?`,
      solution: `**Analyse av "Jøden":**

**Kontekst:**
Grunnloven av 1814 inneholdt en paragraf som forbød jøder adgang til Norge. Wergeland så dette som urettferdig og ukristelig, og kjempet i årevis for å få paragrafen opphevet.

**Diktets budskap:**
Diktet argumenterer for at jøder er mennesker med samme rettigheter som alle andre. Det avviser "arveskyld" - tanken om at nålevende jøder skal straffes for noe som skjedde for 2000 år siden.

**Argumentasjonen:**
Wergeland bruker dialogform - en jøde svarer på anklagene:
- "Hvad Ondt har jeg da gjort?" - han har ikke gjort noe galt
- "Jeg var jo ei tilstede!" - han kan ikke straffes for noe forfedre gjorde
- Jøder tror på samme Gud, ber til samme Fader, håper på samme Himmel

**Retoriske virkemidler:**
- Retoriske spørsmål: "Hvorfor forfølger I mig saa?"
- Direkte henvendelse: "O, Medmennesker, hører!"
- Gjentakelse av "samme" for å understreke likhet
- Kontrast mellom uskyldig offer og urettferdig forfølgelse

**Stilnivå:**
Diktet er enklere og mer direkte enn mange av Wergelands andre dikt. Det er beregnet på å overbevise, ikke imponere. Språket er retorisk, nesten som en tale.

**Betydning:**
"Jøden" er et av de viktigste politiske diktene i norsk litteratur. Det viser at Wergeland ikke bare var romantiker, men også humanist og menneskerettighetsforkjemper. Diktet bidro til å endre opinionen, selv om paragrafen først ble opphevet etter hans død.`,
    },
    {
      id: 'norsk-vg2-3-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland - "Den første Sang"',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-2-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_WERGELAND_FORSTE_SANG}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-2-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland - "Til Foraaret"',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-2-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_WERGELAND_TIL_FORAARET}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-2-primaertekst-3',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland - "Mig Selv"',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-2-primaertekst-3-text',
          type: 'text',
          content: `${TEKST_VG2_WERGELAND_MIG_SELV}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-2-primaertekst-4',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland - "Til min Gyldenlak"',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-2-primaertekst-4-text',
          type: 'text',
          content: `${TEKST_VG2_WERGELAND_TIL_MIN_GYLDENLAK}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-2-primaertekst-5',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland - "Den første Sommerfugl"',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-2-primaertekst-5-text',
          type: 'text',
          content: `${TEKST_VG2_WERGELAND_FORSTE_SOMMERFUGL}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-2-primaertekst-6',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland - "Jøden" (utdrag)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-2-primaertekst-6-text',
          type: 'text',
          content: `${TEKST_VG2_WERGELAND_JOEDEN}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Wergelands betydning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjempet Wergeland for utover diktervirksomheten?',
            solution: 'Wergeland kjempet for folkeopplysning, jødenes rettigheter, og et selvstendig norsk kulturliv.',
          },
          {
            label: 'b',
            task: 'Hva var striden mellom Wergeland og Welhaven om?',
            solution: 'Wergeland ville bryte med dansk kultur og bygge noe genuint norsk. Welhaven mente Norge trengte europeisk dannelse.',
          },
        ],
        solution: 'Wergeland var dikter, folkeopplyser og aktivist som kjempet for frihet og rettferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva het Wergelands store episke verk fra 1830?',
        options: [
          'Den engelske Lods',
          'Skabelsen, Mennesket og Messias',
          'Norges Dæmring',
          'Campbellerne',
        ],
        answer: 1,
        solution: '"Skabelsen, Mennesket og Messias" (1830) er Wergelands store episke dikt. Det er et visjonært verk som skildrer skapelsen, menneskehetens historie og håpet om frelse. Verket viser Wergelands enorme ambisjoner som dikter.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken sak kjempet Wergeland spesielt for i Stortinget?',
        options: [
          'Allmenn stemmerett for kvinner',
          'Jødenes rett til å komme inn i Norge',
          'Avskaffelse av sidemål',
          'Selvstendighet fra Sverige',
        ],
        answer: 1,
        solution: 'Wergeland kjempet iherdig for å oppheve forbudet mot jøder i Norge (den såkalte "jødeparagrafen" i Grunnloven). Han skrev blant annet diktet "Jøden" og "Jødinden" for å vekke sympati. Paragrafen ble opphevet i 1851, seks år etter hans død.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les primærteksten "Den første Sang". List opp tre naturbilder Wergeland bruker, og forklar hva de bidrar med i diktet.',
        hints: ['Se etter skildringer av planter, dyr, himmel og vann.'],
        solution: 'Eksempler på naturbilder: (1) Fugler som synger - skaper liv og stemning. (2) Bekker som risler - gir en følelse av bevegelse og harmoni. (3) Skyer som driver - gir en følelse av frihet og drøm. Naturbildene bidrar til å gjøre naturen levende og besjelet, typisk for romantikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten "Til Foraaret". Analyser diktet med fokus på stemning og virkemidler.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er stemningen i diktet?',
            solution: 'Stemningen er entusiastisk, jublende og livskraftig. Diktet feirer vårens komme med overveldende begeistring.',
          },
          {
            label: 'b',
            task: 'Hvilke virkemidler bruker Wergeland for å skape denne stemningen?',
            solution: 'Gjentakelser ("Vaar! Vaar! Vaar!"), utropstegn, aktive verb (synger, larmer, røre), besjeling av naturen, direkte henvendelse til leseren, sanseinntrykk.',
          },
        ],
        solution: '"Til Foraaret" er et typisk Wergeland-dikt med eksplosiv energi og naturbegeistret hyllest til livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten "Mig Selv". Hva forteller diktet oss om Wergelands selvbilde som dikter?',
        hints: [
          'Tenk på romantikkens begrep om geniet.',
          'Hva føler dikteren, og hva ønsker han å oppnå?',
        ],
        solution: 'Diktet viser at Wergeland oppfattet seg som et romantisk geni - en dikter med en særlig kalling. Han ser seg selv som en "Flamme" som fortærer seg selv, en "Storm" som kjemper for "hele Verden". Han er en "Fakkel" og en "Sol i Mørket" for de som søker sannhet. Selvbildet er typisk romantisk: dikteren er ikke en vanlig person, men et instrument for noe større - frihet og sannhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Wergeland skrev folkeopplysningsbladet "For Arbeidsklassen". Hvorfor var folkeopplysning viktig for Wergeland, og hva sier dette om hans syn på dikterens rolle i samfunnet?',
        solution: 'Wergeland mente at kunnskap er frihet. Han ville at hele folket, ikke bare overklassen, skulle ha tilgang til kunnskap og kultur. Folkeopplysningsarbeidet viser at Wergeland så dikterens rolle som bredere enn bare å skrive vakre dikt - dikteren skulle være folkets talsmann, opplyser og frigjører. Dette skiller ham fra Welhavens syn på dikteren som først og fremst kunstner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les "Til min Gyldenlak" og analyser diktets bruk av kontraster.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke kontraster finner du mellom blomsten og dikteren?',
            solution: 'Blomsten spirer opp mens dikteren går ned. Blomsten skinner mens dikteren går mot mørket. Blomsten dufter søtt mens dikteren er syk. Blomsten står fast mens dikteren har "brudte Lemmer".',
          },
          {
            label: 'b',
            task: 'Hva er effekten av disse kontrastene?',
            solution: 'Kontrastene understreker det tragiske i situasjonen, men uten bitterhet. De viser også at livet fortsetter selv når individet dør - blomsten blir et symbol på livets evige fornyelse.',
          },
        ],
        solution: 'Diktet bruker kontraster mellom liv og død, vekst og forfall, for å uttrykke Wergelands aksept av døden og kjærlighet til livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign "Til Foraaret" og "Til min Gyldenlak". Begge handler om blomster og vår, men stemningen er svært ulik. Forklar forskjellene.',
        hints: [
          'Tenk på når diktene ble skrevet.',
          'Sammenlign energinivå, ordvalg og holdning til livet.',
          'Hva sier forskjellene om Wergelands utvikling som dikter?',
        ],
        solution: '"Til Foraaret" (1833) er skrevet av en ung, frisk Wergeland og er eksplosiv, jublende, nesten ekstatisk. Gjentakelsene "Vaaren, Vaaren, Vaaren" og alle utropstegnene viser ubegrenset livsglede. "Til min Gyldenlak" (1845) er skrevet på dødsleiet og er dempet, resignert, men ikke bitter. Her er ingen utbrudd, bare stille aksept. Forskjellen viser Wergelands modning: den unge dikteren feirer livet med ungdommelig rus; den døende dikteren har funnet ro og verdighet. Begge dikt viser kjærlighet til livet, men uttrykker den på helt ulike måter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les utdraget fra "Jøden" og analyser det som et politisk dikt.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke argumenter bruker Wergeland mot forfølgelse av jøder?',
            solution: 'Wergeland argumenterer at (1) jøden ikke har gjort noe galt personlig, (2) man kan ikke straffes for forfedrenes handlinger, (3) jøder tror på samme Gud og har samme menneskelighet som alle andre.',
          },
          {
            label: 'b',
            task: 'Hvilke retoriske virkemidler bruker han?',
            solution: 'Dialogform med spørsmål og svar, retoriske spørsmål ("Hvad Skyld har jeg deri?"), direkte henvendelse til leseren ("O, Medmennesker, hører!"), gjentakelse av "samme" for å understreke likhet.',
          },
          {
            label: 'c',
            task: 'Hvorfor tror du Wergeland valgte diktformen for å fremme denne saken?',
            solution: 'Dikt kan appellere til følelser på en måte sakprosa ikke kan. Ved å la jøden tale selv, skaper Wergeland empati. Diktformen gjør budskapet mer minneverdig og lettere å spre.',
          },
        ],
        solution: '"Jøden" viser at Wergeland brukte diktningen som politisk våpen. Diktet kombinerer logiske argumenter med følelsesmessig appell for å overbevise leseren om at jødeparagrafen var urettferdig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om Wergeland fortjener tittelen "Norges nasjonaldikter". Bruk argumenter fra pensum.',
        hints: [
          'Tenk på hans litterære bidrag, samfunnsengasjement og betydning for nasjonsbyggingen.',
          'Finnes det motargumenter?',
        ],
        solution: 'Argumenter for: Wergeland definerte norsk kulturell identitet, kjempet for demokratiske verdier, skrev et enormt forfatterskap, og hans 17. mai-rolle gjør ham til et nasjonalsymbol. Argumenter mot: Wergeland kan være vanskelig å lese i dag, hans diktning er ujevn, og andre (f.eks. Ibsen, Bjørnson) har hatt minst like stor litterær innflytelse. Drøftingen bør vise at "nasjonaldikter" handler like mye om symbolverdi som om litterær kvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort kreativ tekst (150-200 ord) inspirert av Wergelands stil. Bruk naturbilder, besjeling og en entusiastisk tone for å skildre en naturopplevelse.',
        hints: [
          'Bruk utropstegn, gjentakelser og aktive verb.',
          'La naturen være levende og full av mening.',
        ],
        solution: 'Teksten bør vise kjennetegn fra Wergelands stil: direkte henvendelse, naturbegeistret tone, besjeling av naturen, sanserike skildringer, og eventuelt en kobling mellom natur og frihet/livskraft. Teksten vurderes etter hvor godt den gjenskaper det romantiske stemningsleiet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-13',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en tidslinje over Wergelands liv og viktigste verker fra 1808 til 1845.',
        hints: ['Bruk opplysningene fra teoridelen og definisjonsblokken.'],
        solution: 'Tidslinjen bør inneholde: 1808 - Født i Kristiansand. 1829 - "Digte" utgis. 1830 - "Skabelsen, Mennesket og Messias". 1830-tallet - Kulturstriden med Welhaven. 1839-1845 - "For Arbeidsklassen" (folkeopplysning). 1842 - "Jøden" utgis. 1844 - "Den engelske Lods" skrevet på dødsleiet. 1845 - "Til min Gyldenlak" og død av tuberkulose, 37 år gammel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-14',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft Wergelands relevans i dag. Er hans ideer om frihet, folkeopplysning og rettferdighet fortsatt aktuelle?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke av Wergelands kampsaker er fortsatt relevante i dag?',
            solution: 'Kampen mot diskriminering (jødesaken kan sammenlignes med moderne antirasisme), folkeopplysning (tilgang til kunnskap for alle), ytringsfrihet og demokratiske verdier.',
          },
          {
            label: 'b',
            task: 'Hvordan ville Wergeland sannsynligvis reagert på dagens samfunn?',
            solution: 'Han ville trolig engasjert seg i flyktningdebatten, klimasaken, kamp mot diskriminering, og tilgang til utdanning. Han ville nok brukt sosiale medier aktivt og vært en kontroversiell debattant.',
          },
          {
            label: 'c',
            task: 'Er Wergelands diktning fortsatt relevant, eller er han mest et historisk symbol?',
            solution: 'Både-og: Hans dikt kan være vanskelige å lese i dag på grunn av gammelt språk og overdådig stil. Men temaene - frihet, natur, livskjærlighet - er tidløse. Hans symbolverdi som nasjonal helt lever videre, selv om færre leser verkene hans.',
          },
        ],
        solution: 'Wergeland er relevant både som historisk figur og som inspirasjon for dagens debatter om demokrati, toleranse og folkeopplysning. Hans mest aktuelle arv er kanskje ideen om at dikteren har et samfunnsansvar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-15',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-15',
        number: '15',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva symboliserer gyldenlakken i Wergelands dikt "Til min Gyldenlak"?',
        options: [
          'Døden og forgjengelighet',
          'Livet som fortsetter mens dikteren dør',
          'Wergelands politiske kamp',
          'Den norske naturen',
        ],
        answer: 1,
        solution: 'Gyldenlakken symboliserer livet som fortsetter selv når dikteren dør. Blomsten spirer opp mens Wergeland visner hen. Den er et "Livets Tegn i Dødens Kammer" - et bevis på livets evige fornyelse. Diktet viser Wergelands aksept av døden og kjærlighet til livet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Johan Sebastian Welhaven
// ============================================================================

export const CHAPTER_NORSK_VG2_3_3: TextbookChapter = {
  id: 'norsk-vg2-3-3',
  courseId: 'norsk-vg2',
  chapterNumber: '3.3',
  title: 'Johan Sebastian Welhaven - dikteren og kritikeren',
  description: 'Lær om Wergelands store motstander og hans betydning for norsk litteratur og kulturliv.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-3-3-intro',
      type: 'text',
      content: `## Johan Sebastian Welhaven - romantikkens klassisist

Johan Sebastian Welhaven (1807-1873) er kanskje mest kjent som Henrik Wergelands store motstander i den såkalte "kulturstriden" på 1830-tallet. Men Welhaven var også en fremragende dikter, litteraturkritiker og professor som hadde stor innflytelse på norsk kulturliv. Der Wergeland var vulkanen, var Welhaven den stille innsjøen - men begge var uunnværlige for norsk litteratur.

**Liv og bakgrunn**

Welhaven ble født i Bergen i 1807 og vokste opp i et dannet miljø. Faren var prest, og familien hadde sterke bånd til dansk kultur og dannelse. I 1825 begynte han å studere i Christiania (Oslo), hvor han raskt markerte seg som en talentfull poet og skarp kritiker.

I 1840 ble Welhaven utnevnt til lektor, og i 1846 til professor i filosofi ved universitetet i Christiania. Han var gift med Josephine Bidoulac, og deres hjem ble et sentrum for byens kulturelle elite. Welhaven døde i 1873.

**Striden med Wergeland**

Konflikten mellom Wergeland og Welhaven dominerte norsk kulturliv på 1830-tallet og handlet dypest sett om hva slags nasjon Norge skulle være.

*Wergelands standpunkt:*
- Norge måtte bryte helt med dansk kulturarv
- Norsk kultur skulle bygges "nedenifra" fra bondefolket
- Dikteren skulle være folkets talsmann og opplyser
- Entusiasme og nasjonal begeistring var viktigere enn form

*Welhavens standpunkt:*
- Norge trengte europeisk dannelse og kulturtradisjon
- Kvalitet og form var like viktig som innhold
- Dikteren skulle være kunstner, ikke agitator
- Nasjonalt selvskryt uten substans var pinlig

Striden toppet seg med Welhavens dikt "Norges Dæmring" (1834), der han kritiserte det han så som overfladisk patriotisme og kulturelt hovmod. Diktet skapte raseri og skandale, men satte også viktige spørsmål på dagsordenen.

**Welhavens poetikk**

Welhaven tilhørte en mer klassisistisk retning innen romantikken. Han la vekt på:

*Form og håndverk:*
Diktet skulle være et gjennomarbeidet kunstverk. Rim, rytme og komposisjon måtte være perfekte. Welhavens dikt er teknisk briljante.

*Underdrivelse fremfor overdrivelse:*
Der Wergeland brukte store ord og sterke følelser, foretrakk Welhaven det dempede, det antydede, det subtile.

*Naturskildringer:*
Welhavens beste dikt er ofte rolige naturskildringer der landskapet speiler sinnsstemninger. Han regnes som en mester i stemningslyrikk.

*Norsk natur, europeisk form:*
Welhaven skrev om norsk landskap og kultur, men innenfor rammer hentet fra europeisk diktertradisjon.

**Sentrale verk**

*"Norges Dæmring" (1834):*
Kontroversielt dikt som kritiserer overfladisk patriotisme. Skapte skandale men er litterært imponerende.

*"Digte" (1839):*
Welhavens første gedigne diktsamling med noen av hans fineste naturlyriske tekster.

*"Nyere Digte" (1845):*
Inneholder blant annet diktsyklusen "En Digters Hjem", regnet som hans mesterverk.

*"Halvhundrede Digte" (1848):*
Samling som befester hans posisjon som en av tidens fremste lyrikere.

**Litterær betydning**

Welhavens betydning er stor på flere områder:

1. *Som kritiker:* Han hevet nivået på norsk litteraturkritikk og insisterte på kvalitet og form.

2. *Som professor:* Han påvirket generasjoner av studenter og bidro til å profesjonalisere norsk litteraturvitenskap.

3. *Som dikter:* Hans naturlyrikk og stemningsdikt er blant det beste i norsk litteratur fra 1800-tallet.

4. *Som motpol:* Striden med Wergeland tvang begge til å skjerpe sine standpunkter og bidro til å modne norsk kulturliv.

Det er en vanlig misforståelse at Wergeland "vant" striden. I virkeligheten trengte Norge begge: Wergelands energi og folkelighet, og Welhavens kvalitetsbevissthet og europeiske perspektiv. Sammen skapte de grunnlaget for en moden norsk litteratur.`,
    },
    {
      id: 'norsk-vg2-3-3-def-1',
      type: 'definition',
      title: 'Johan Sebastian Welhaven - sentrale begreper',
      content: `**Biografiske fakta:**
- 1807-1873
- Født i Bergen, prestesønn
- Professor i filosofi fra 1846
- Gift med Josephine Bidoulac

**Hovedverk:**
- "Norges Dæmring" (1834)
- "Digte" (1839)
- "Nyere Digte" (1845)
- "Halvhundrede Digte" (1848)

**Litterære kjennetegn:**
- Formell dyktighet og teknisk presisjon
- Dempet, subtil stemning
- Naturlyrikk som speiler sinnsstemninger
- Klassisistiske idealer innen romantikken

**Kulturpolitiske standpunkter:**
- For europeisk dannelse og tradisjon
- Mot overfladisk patriotisme
- For kvalitet fremfor kvantitet
- Dikteren som kunstner, ikke agitator`,
    },
    {
      id: 'norsk-vg2-3-3-def-2',
      type: 'definition',
      title: 'Striden Wergeland-Welhaven',
      content: `**Bakgrunn:**
Den største kulturstriden i norsk historie, 1830-1840-tallet.

**Wergelands parti (Patriotene):**
- Vektla det spesifikt norske
- Ville bryte med dansk kulturarv
- Folkelig orientering
- Dikteren som samfunnsengasjert

**Welhavens parti (Intelligensen/Danomaner):**
- Vektla europeisk dannelse
- Ville bevare kulturelle bånd til Europa
- Eliteorientering
- Dikteren som kunstner

**Stridsspørsmål:**
- Hva er norsk kultur?
- Hvordan bygge en ny nasjon?
- Hva er god litteratur?
- Hvem skal dikteren tale for?

**Resultat:**
Begge sider bidro til å forme norsk kultur. Norge fikk både folkelig og elitekultur, både nasjonal egenart og europeisk tilknytning.`,
    },
    {
      id: 'norsk-vg2-3-3-example-1',
      type: 'example',
      title: 'Eksempel: "Lokkende Toner"',
      problem: `Les Welhavens dikt "Lokkende Toner":

"Der er en Dal i Norden,
Der kommer jeg aldrig mer!
Der tindrer Sneen paa Fjeldet,
Og Bækkene risle der.

Der stander en Hytte ved Fjeldet,
Dens Dør har jeg aldrig seet;
Men tidt i den stille Aften
Har yndige Toner leet.

Det var som en Kvindesmerte,
En Vellyst i smeltende Graad,
En Bøn om Trøst fra et Hjerte,
Som aldrig fandt Raad.

Og det var en stille Klage
I Ensomhed sunget ud, -
Men Tonerne bleve derinde,
Thi Hytten var lukket for Gud."

Analyser diktet med fokus på stemning og symbolikk.`,
      solution: `**Analyse av "Lokkende Toner":**

**Komposisjon:**
Diktet har fire strofer med fast form (kryssrim, vekslende versemål). Denne stramme formen er typisk for Welhaven.

**Setting:**
En dal i Norden med fjell, snø og bekker - typisk romantisk norsk landskap. Men dikter-jeget "kommer aldrig mer" dit.

**Mysteriet:**
En hytte ved fjellet som dikteren aldri har vært inne i. Derfra høres "yndige Toner" - sang fra en ukjent kvinne.

**Sangen:**
Tonene beskrives som "Kvindesmerte", "Vellyst i smeltende Graad", "Bøn om Trøst". Dette er romantisk lengsel og smerte - kanskje uoppnåelig kjærlighet.

**Den lukkede hytten:**
"Hytten var lukket for Gud" - et sterkt bilde. Kvinnen er innestengt, avskåret fra frelse og trøst. Sangen blir aldri hørt.

**Symbolikk:**
- *Dalen:* Et tapt paradis, noe uoppnåelig
- *Hytten:* Isolasjon, lukkethet
- *Sangen:* Lengsel som aldri når frem
- *Sneen og bækkene:* Naturens evige gang kontrastert med menneskets smerte

**Stemning:**
Vemodig, lengtende, melankolsk. Diktet handler om noe tapt og uoppnåelig - en erfaring dikteren aldri kan gjøre, en smerte han aldri kan lindre.

**Welhavens særpreg:**
- Dempet, antydende stil
- Perfekt form
- Naturen som ramme for følelser
- Mysteriet som aldri forklares helt

Diktet er et mesterstykke i romantisk stemningslyrikk og viser Welhavens evne til å skape dyp virkning med enkle midler.`,
    },
    {
      id: 'norsk-vg2-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Fra "Norges Dæmring"',
      problem: `Les dette utdraget fra Welhavens kontroversielle dikt "Norges Dæmring" (1834):

"Hvad er det for en Susen
I Norges gamle Gran?
Hvad er det for en Brusen
I Norges Fos og Strand?
Er det maaskee Normanna-Aand,
Der vaagner i det Fjerne?
Er Fjeldet Vugge, Havet Baand
For Frihedskampens Stjerne?

Ak nei! Det er kun vilde Ord
Og tomme Drikke-Sange
Der summer hen og svinder bort
I Echoløse Gange.
Det er kun Fjas og Skraal og Skrig
Fra dem, som ikke kjender sig,
Fra dem, som ingenting formaar
Og dog saa haardt paa Thronen slaar."

Hva kritiserer Welhaven her?`,
      solution: `**Analyse av "Norges Dæmring":**

**Ironisk åpning:**
Welhaven begynner med romantiske bilder - susende graner, brusende fosser. Han spør retorisk om dette er "Normanna-Aand" som våkner.

**Svaret - "Ak nei!":**
Den romantiske forventningen knuses. Det er ikke nasjonal storhet, men "vilde Ord / Og tomme Drikke-Sange" - patriotisk prat uten substans.

**Kritikkens mål:**
Welhaven kritiserer:
- Overfladisk patriotisme ("Fjas og Skraal og Skrig")
- Folk som tror de er noe uten å ha skapt noe
- Tom selvhevdelse ("paa Thronen slaar")
- Mangel på selvinnsikt ("ikke kjender sig")

**Reaksjonen:**
Diktet skapte skandale. Welhaven ble angrepet fysisk og utskjelt. Men kritikken hadde en kjerne av sannhet: Ung norsk nasjonalisme kunne bli selvtilfreds og tom.

**Retoriske virkemidler:**
- Kontrasten mellom romantisk åpning og syrlig kritikk
- Overdrivelse for komisk/satirisk effekt
- Retoriske spørsmål
- Harde ord (Fjas, Skraal, Skrig)

**Litterær kvalitet:**
Selv kritikerne måtte innrømme at diktet var teknisk briljant. Welhaven behersker formen selv når han provoserer.

**Vurdering:**
Diktet er ensidig og urettferdig mot Wergeland-leiren. Men det peker på et reelt problem: Nasjonalisme uten substans er tom. Norge trengte både Wergelands entusiasme og Welhavens kvalitetskrav.`,
    },
    {
      id: 'norsk-vg2-3-3-tip-1',
      type: 'tip',
      title: 'Tips for å sammenligne Wergeland og Welhaven',
      content: `**Slik kan du sammenligne de to dikterne:**

**Form:**
- Wergeland: Fri, ekspansiv, noen ganger kaotisk
- Welhaven: Stram, kontrollert, formelt perfekt

**Tone:**
- Wergeland: Høylytt, entusiastisk, lidenskapelig
- Welhaven: Dempet, subtil, melankolsk

**Natursyn:**
- Wergeland: Naturen som livskraft og bekreftelse
- Welhaven: Naturen som stemning og refleksjon

**Dikterrolle:**
- Wergeland: Dikteren som folkeopplyser og agitator
- Welhaven: Dikteren som kunstner og håndverker

**Nasjonalisme:**
- Wergeland: Bygge noe nytt fra folkedypet
- Welhaven: Forankre det norske i europeisk tradisjon

**Styrker:**
- Wergeland: Energi, originalitet, engasjement
- Welhaven: Presisjon, dybde, stemning

**Svakheter:**
- Wergeland: Kan bli uferdig og overdreven
- Welhaven: Kan bli kjølig og ekskluderende

**Konklusjon:**
Ikke spør hvem som var "best". Spør hva hver av dem bidro med, og hvorfor norsk litteratur trengte begge.`,
    },
    {
      id: 'norsk-vg2-3-3-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Johan Sebastian Welhaven – «Norges Dæmring» (utdrag)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-3-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_WELHAVEN_NORGES_DAEMRING}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-3-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Johan Sebastian Welhaven – «Lokkende Toner»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-3-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_WELHAVEN_LOKKENDE_TONER}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-3-primaertekst-3',
      type: 'collapsible',
      title: 'Primærtekst: Johan Sebastian Welhaven – «Digtets Aand»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-3-primaertekst-3-text',
          type: 'text',
          content: `${TEKST_VG2_WELHAVEN_DIGTETS_AAND}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Welhavens diktning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner Welhavens poetikk?',
            solution: 'Welhaven la vekt på formell presisjon, dempet stemning, naturlyrikk som speiler følelser, og klassisistiske idealer. Underdrivelse fremfor overdrivelse.',
          },
          {
            label: 'b',
            task: 'Analyser stemningen i "Lokkende Toner". Hvilke virkemidler skaper stemningen?',
            solution: 'Stemningen er vemodig og lengtende. Virkemidler: mysteriøse bilder (den lukkede hytten), kontraster (naturens skjønnhet vs. isolasjonen), antydning fremfor forklaring.',
          },
          {
            label: 'c',
            task: 'Hvorfor ble "Norges Dæmring" så kontroversielt?',
            solution: 'Diktet kritiserte patriotisme som tom selvskryt. I en tid med sterk nasjonalisme oppfattes dette som forræderi mot fedrelandet og angrep på Wergeland-kretsen.',
          },
        ],
        solution: 'Welhaven var en mester i stemningslyrikk og en skarp kritiker som hevet nivået på norsk litterær debatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Wergeland og Welhaven.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var hovedforskjellene i deres syn på norsk kultur?',
            solution: 'Wergeland ville bygge norsk kultur "nedenfra" fra bondefolket og bryte med Danmark. Welhaven ville forankre norsk kultur i europeisk dannelse og bevare kvalitetstradisjoner.',
          },
          {
            label: 'b',
            task: 'Sammenlign et dikt av Wergeland med "Lokkende Toner" av Welhaven. Hva er forskjellene i stil og tone?',
            solution: 'Wergeland: energisk, ekspansiv, høylytt. Welhaven: dempet, subtil, melankolsk. Wergeland bruker store ord, Welhaven antyder.',
          },
          {
            label: 'c',
            task: 'Hvorfor trengte norsk kultur begge disse dikterne?',
            solution: 'Wergeland ga energi, folkelig forankring og nasjonal begeistring. Welhaven ga kvalitetskrav, europeisk perspektiv og formell dyktighet. Sammen skapte de en balansert grunnmur for norsk litteratur.',
          },
        ],
        solution: 'Wergeland og Welhaven representerer komplementære krefter i norsk kulturliv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft kulturstriden.',
        subTasks: [
          {
            label: 'a',
            task: 'Var striden mellom Wergeland og Welhaven produktiv for norsk kultur? Begrunn svaret.',
            solution: 'Ja, striden tvang begge sider til å skjerpe argumentene og hevet nivået på kulturdebatten. Norge fikk både folkelig og elitekultur, både nasjonal egenart og europeisk tilknytning.',
          },
          {
            label: 'b',
            task: 'Finnes det lignende kulturdebatter i dag? Gi eksempler.',
            solution: 'Ja, for eksempel: folkekultur vs. elitekultur, norsk vs. internasjonal orientering, underholdning vs. kunst, tilgjengelighet vs. kvalitet.',
          },
        ],
        solution: 'Kulturstriden på 1830-tallet setter viktige spørsmål om nasjonalitet, kvalitet og kulturens rolle i samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var Welhavens hovedkritikk i "Norges Dæmring"?',
        options: [
          'At norsk natur var stygg',
          'At patriotismen var overfladisk og tom',
          'At Norge burde bli dansk igjen',
          'At Wergeland var en dårlig dikter',
        ],
        answer: 1,
        solution: 'Welhaven kritiserte det han så som overfladisk patriotisme uten substans. Han mente at det å rope høyt om norskhet ikke var det samme som å skape ekte norsk kultur. Det var nasjonalistisk selvskryt han angrep, ikke Norge eller norsk identitet i seg selv.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner Welhavens diktstil sammenlignet med Wergelands?',
        options: [
          'Mer kaotisk og fri',
          'Mer folkelig og enkel',
          'Mer formelt presist og dempet',
          'Mer humoristisk og satirisk',
        ],
        answer: 2,
        solution: 'Welhavens diktstil kjennetegnes av formell presisjon, dempet stemning og subtilitet. Der Wergeland var eksplosiv og fri i formen, var Welhaven stram og kontrollert. Hans dikt er teknisk briljante med perfekte rim og rytme.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les primærteksten "Digtets Aand". Hva sier Welhaven her om hva et godt dikt er?',
        hints: ['Tenk på Welhavens syn på form og innhold.'],
        solution: 'I "Digtets Aand" uttrykker Welhaven sitt syn på at et godt dikt må ha en indre enhet mellom form og innhold. Diktet er ikke bare et middel for å si noe - det er et kunstverk i seg selv. Form, klang og rytme er like viktig som budskapet. Denne poetikken står i kontrast til Wergelands syn der budskapet var viktigere enn formen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les primærteksten "Lokkende Toner". Beskriv med egne ord hva diktet handler om og hvilken stemning det skaper.',
        solution: 'Diktet handler om en dal i Norden som dikteren aldri kan vende tilbake til. Der står en hytte ved fjellet, og derfra høres vakre, men sorgtunge toner. Det er en kvinne som synger i smerte og ensomhet, men sangen når aldri ut fordi hytten er "lukket for Gud". Stemningen er vemodig, melankolsk og mystisk. Det handler om noe tapt og uoppnåelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra "Norges Dæmring" i primærteksten. Analyser de retoriske virkemidlene Welhaven bruker.',
        hints: [
          'Se på kontrasten mellom de to delene av diktet.',
          'Hvilken effekt har de retoriske spørsmålene?',
        ],
        solution: 'Welhaven bruker: (1) Retoriske spørsmål som bygger opp forventning. (2) Kontrast mellom romantisk åpning og knusende "Ak nei!". (3) Ironi - han later som om han tror det er nasjonal storhet, men avslører det som tomt prat. (4) Sterke, negative ord (Fjas, Skraal, Skrig) for å forsterke kritikken. (5) Regelmessig form som gir autoritativ tyngde til budskapet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvorfor er det en misforståelse å si at Wergeland "vant" kulturstriden? Drøft med eksempler.',
        solution: 'Det er en forenkling å kåre en vinner. Wergeland fikk rett i at Norge trengte egen kultur, men Welhaven fikk rett i at denne kulturen måtte ha kvalitet. Norsk litteratur etter striden kombinerer begges bidrag: Ibsen, Bjørnson og andre hadde både folkelig forankring (Wergeland) og formell ambisjon (Welhaven). Det norske kulturlivet ble rikere nettopp fordi det hadde begge perspektivene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign "Lokkende Toner" med "Til Foraaret" av Wergeland. Skriv en sammenligningsanalyse (300-400 ord) der du bruker fagbegreper.',
        hints: [
          'Bruk sammenligningsskjemaet fra tips-blokken.',
          'Fokuser på stemning, form, natursyn og dikterrolle.',
        ],
        solution: 'Analysen bør sammenligne: Stemning (Wergeland: jublende / Welhaven: melankolsk). Form (Wergeland: fri, utropstegn / Welhaven: stram, kryssrim). Natursyn (Wergeland: naturen som livskraft / Welhaven: naturen som ramme for vemod). Dikterrolle (Wergeland: deltakende, direkte / Welhaven: observerende, reflekterende). Virkemidler (Wergeland: gjentakelse, besjeling / Welhaven: antydning, symbolikk). Konklusjonen bør vise at begge er romantiske dikt, men representerer ulike retninger innen romantikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du er Welhaven og skal svare på Wergelands kritikk. Skriv et kort brev (200-300 ord) der du forsvarer ditt syn på norsk kultur.',
        hints: [
          'Bruk Welhavens argumenter fra kapittelet.',
          'Hold en dannet, men bestemt tone.',
        ],
        solution: 'Brevet bør argumentere for at kvalitet er viktigere enn kvantitet, at europeisk dannelse beriker norsk kultur i stedet for å true den, at dikteren må være kunstner og ikke bare agitator, og at selvkritikk er en styrke, ikke en svakhet. Tonen bør være saklig og velformulert, i tråd med Welhavens stil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: Romantisk lyrikk og naturopplevelse
// ============================================================================

export const CHAPTER_NORSK_VG2_3_4: TextbookChapter = {
  id: 'norsk-vg2-3-4',
  courseId: 'norsk-vg2',
  chapterNumber: '3.4',
  title: 'Romantisk lyrikk og naturopplevelse',
  description: 'Utforsk hvordan romantikkens diktere skildret naturen og brukte den som uttrykk for følelser og ideer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-3-4-intro',
      type: 'text',
      content: `## Romantisk naturlyrikk - når naturen taler til sjelen

For romantikerne var naturen langt mer enn kulisser eller ressurser. Naturen var besjelet, levende, full av mening - et speil for menneskets sjel og et vindu mot det guddommelige. Denne oppfatningen preget lyrikken på 1800-tallet og skapte noen av de vakreste diktene i norsk og europeisk litteratur.

**Romantikkens natursyn**

Opplysningstiden hadde sett naturen som en mekanisme som kunne forstås gjennom fornuft og vitenskap. Romantikerne reagerte mot dette. For dem var naturen:

*Besjelet:*
Naturen har liv og ånd. Trær, fjell, bekker og skyer er ikke døde ting, men deltakere i et kosmisk drama. Naturkreftene er uttrykk for en åndelig virkelighet.

*Et speil for sjelen:*
Landskapet reflekterer dikterens sinnstilstand. Stormfulle fjell speiler indre kamper, stille innsjøer speiler fred og kontemplasjon. Naturen og mennesket hører sammen.

*Hellig:*
I naturen kan mennesket møte det guddommelige. Fjelltoppen, skogen, havet blir hellige steder der dikteren kommer nærmere skaperverkets hemmeligheter.

*Nasjonal:*
For norske romantikere var den norske naturen - fjell, fjorder, fosser - et uttrykk for norsk folkekarakter. Landskapet gjorde oss til dem vi er.

**Naturopplevelsens faser**

Romantiske dikt om naturen følger ofte et mønster:

1. *Observasjon:* Dikteren betrakter et landskap eller naturscene
2. *Innlevelse:* Dikteren lever seg inn i naturen, føler seg ett med den
3. *Refleksjon:* Naturen vekker tanker om livet, døden, kjærligheten, Gud
4. *Transformasjon:* Dikteren forvandles av opplevelsen

Denne strukturen finner vi hos både Wergeland, Welhaven og andre romantikere.

**Naturmotiver i romantikken**

Visse naturmotiver går igjen og har symbolsk betydning:

*Fjell og høyder:*
Symboliserer det opphøyde, frihet fra det hverdagslige, nærhet til himmelen. Å bestige fjellet er en åndelig reise.

*Skogen:*
Mysteriets sted, der det ukjente og farlige truer, men også der man kan finne seg selv. Eventyrenes skog.

*Vannet:*
Sjøer, bekker, fosser - symboler på livets strøm, følelsenes dyp, fornyelse og renselse. Også farlig (drukningsdøden).

*Kvelden og natten:*
Tid for refleksjon, drøm og lengsel. Månelys og stjerner inspirerer til metafysiske tanker.

*Årstidene:*
Vår = fornyelse, ungdom, håp. Sommer = fylde, modenhet. Høst = vemod, aldring. Vinter = død, men også renselse.

**Norske romantikeres naturlyrikk**

*Henrik Wergeland (1808-1845):*
Wergelands naturdikt er dynamiske og livskraftige. Naturen hos ham er skaperkraft, bevegelse, entusiastisk liv. Hans mest kjente naturskildringer finnes i "Skabelsen, Mennesket og Messias" og i kortere dikt.

*Johan Sebastian Welhaven (1807-1873):*
Welhavens natur er stillere, mer melankolsk. Han mestrer stemningsdiktet der landskapet speiler vemod, lengsel og forgjengelighet. "Lokkende Toner" og "Dalen" er mesterverk.

*Andreas Munch (1811-1884):*
Munch skrev populære naturlyriske dikt med enkel form og folkelig tone. "Sæterjentens Søndag" er blitt folkelesning.

*Bjørnstjerne Bjørnson (1832-1910):*
I sine tidlige dikt fortsetter Bjørnson den romantiske tradisjonen med storslåtte naturskildringer, som i "Ja, vi elsker dette landet".

**Virkemidler i naturlyrikken**

Romantisk naturlyrikk bruker særegne virkemidler:

*Besjeling (personifikasjon):*
Naturen får menneskelige egenskaper. Vinden sukker, fjellet troner, bekken hvisker.

*Synestesi:*
Sanseinntrykk blandes. Farger "klinger", lyder "skinner".

*Symbolikk:*
Naturmotiver har betydning utover seg selv. Solnedgangen symboliserer død, våren symboliserer håp.

*Kontraster:*
Lys og mørke, storm og stille, høyde og dyp settes mot hverandre for å skape spenning og mening.

*Musikalitet:*
Lyd og rytme i språket gjenspeiler naturens lyder - bekkers risling, vindens sus, fuglens sang.

**Naturlyrikken arv**

Romantikkens naturlyrikk har satt dype spor. Fremdeles skriver norske diktere om naturen, og mange av bildene og motivene stammer fra romantikken. Men forholdet til naturen har endret seg - i dag er naturlyrikken ofte preget av miljøbekymring og tap, ikke bare av andakt og henrykkelse.`,
    },
    {
      id: 'norsk-vg2-3-4-def-1',
      type: 'definition',
      title: 'Romantikkens naturbegreper',
      content: `**Panteisme:** Forestillingen om at Gud er til stede i alt i naturen. Naturen er guddommelig.

**Naturmystikk:** Opplevelse av enhet med naturen, ofte med religiøs overtone.

**Det sublime:** Naturopplevelse av overveldende storhet som vekker både frykt og henrykkelse. Fjell, fosser, stormer.

**Besjelet natur:** Forestillingen om at naturen har liv og ånd, ikke bare er materie.

**Korrespondanse:** Sammenheng mellom natur og sjel. Landskapet speiler følelser.

**Lokalt koloritt:** Bruk av særegne nasjonale landskaper for å uttrykke nasjonal identitet.

**Naturlengsel:** Romantisk lengsel bort fra byen og sivilisasjonen til ren og hellig natur.`,
    },
    {
      id: 'norsk-vg2-3-4-def-2',
      type: 'definition',
      title: 'Virkemidler i naturlyrikk',
      content: `**Besjeling (personifikasjon):** Naturen får menneskelige egenskaper. "Fjellet troner", "bekken synger".

**Symbol:** Naturmotiv som betyr noe mer enn seg selv. Solen = liv/Gud, mørket = død/synd.

**Metafor:** Overført betydning. "Livet er en vandring".

**Simile:** Sammenligning med "som". "Stille som en innsjø".

**Synestesi:** Sanseinntrykk blandes. "Mørke klanger", "lyse toner".

**Allitterasjon:** Bokstavrim. "Susen i skogen".

**Onomatopoetikon:** Lydmalende ord. "Risling", "brus", "sus".

**Rytme og klang:** Versets lyd speiler naturens lyder.`,
    },
    {
      id: 'norsk-vg2-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Wergelands "Til Foraaret"',
      problem: `Les dette utdraget fra Wergelands dikt "Til Foraaret":

"Vaar! Vaar! Vaar! Alt er Vaar!
Vaarens Seiersrop Alt maa høre.
Fuglene synger, Skyerne gaae,
Bækkene larme og Skove sig røre.

Op fra de slumrende Blade og Qviste
Luften vibrerer med tusinde Briste!
Marken er grøn og Himlen er blaa -
Menneske! Glæd dig! Hvad staar du og seer paa?"

Analyser diktet som romantisk naturlyrikk.`,
      solution: `**Analyse av "Til Foraaret":**

**Stemning og energi:**
Diktet eksploderer av energi. Utropstegnene, gjentakelsene ("Vaar! Vaar! Vaar!"), de aktive verbene - alt skaper en følelse av oppbrudd og livskraft.

**Besjelet natur:**
- Fuglene synger (de uttrykker glede)
- Skyene går (de beveger seg med vilje)
- Bækkene larmer (de har stemme)
- Skove seg røre (de våkner)

Naturen er ikke passiv kulisse, men aktive deltakere i vårfesten.

**Sanseinntrykk:**
- Hørsel: sang, larm, brist
- Syn: grønn mark, blå himmel
- Bevegelse: vibrering, rørelse

Wergeland engasjerer flere sanser for å skape en total naturopplevelse.

**Klimaks og henvendelse:**
Diktet bygger opp til en direkte oppfordring: "Menneske! Glæd dig!" Naturen feirer - mennesket må delta!

**Romantiske trekk:**
- Enhet mellom menneske og natur
- Naturen som livskraft og inspirasjon
- Entusiasme og henrykkelse
- Våren som fornyelse og håp

**Wergelands særpreg:**
- Dynamisk, nesten overveldende energi
- Direkte henvendelse til leseren
- Enkel, folkelig form
- Uforbeholden begeistring

Dette er Wergeland på sitt mest karakteristiske: en hyllest til livet selv, uttrykt gjennom naturens våroppvåkning.`,
    },
    {
      id: 'norsk-vg2-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Welhavens "Dalen"',
      problem: `Les Welhavens dikt "Dalen":

"Her ligger Dalen, halvmørk og stille,
Med sine Sletter og Aasers Rad.
Solskinnet legger sig kun saa milde
Over den blinkende Elv og dens Bad.

Her er saa stille. Kun Gjøgen galer
Fjernt over Aasernes blaalige Kam.
Ak, i mit Hjerte det aldrig taler
Den Fred, som hviler paa hver en Dam!"

Analyser diktet med fokus på stemning og kontraster.`,
      solution: `**Analyse av "Dalen":**

**Setting:**
En dal, halvmørk og stille, med sletter, åser, en blinkende elv. Solskinnet er mildt, en gjøk galer i det fjerne.

**Kontrasten:**
Her er hovedelementet. Naturen er fredelig ("stille", "milde", "Fred"), men dikter-jegets hjerte finner ikke denne freden.

- Utvendig: stillhet, fred, harmoni
- Innvendig: uro, lengsel, mangel på fred

**Stemningen:**
Vemodig, melankolsk. Selv vakker natur kan ikke lindre en sjel i uro. Dikteren er fremmed for den freden han ser.

**Virkemidler:**

*"Halvmørk":* Ordet antyder noe tvetydig, ikke helt lyst.

*Gjøkens galing:* Gjøken er tradisjonelt knyttet til vemod og lengsel. Den galer "fjernt" - freden er utenfor rekkevidde.

*"Ak":* Sukket markerer kontrasten. Dikteren erkjenner sitt eget underskudd av fred.

*Rytme:* Regelmessig, rolig - speiler dalens stillhet, men kontrasterer med hjertets uro.

**Romantisk naturopplevelse:**
Naturen speiler - eller i dette tilfellet kontrasterer - sjelen. Welhaven bruker den vakre naturen til å fremheve indre uro, ikke til å feire naturens skjønnhet.

**Welhavens særpreg:**
- Dempet stemning
- Subtil kontrast
- Melankoli
- Perfekt form

Dette er romantisk naturlyrikk der naturen viser frem det sjelen mangler, ikke det den opplever.`,
    },
    {
      id: 'norsk-vg2-3-4-tip-1',
      type: 'tip',
      title: 'Tips for analyse av romantisk naturlyrikk',
      content: `**Slik analyserer du romantisk naturlyrikk:**

**1. Beskriv naturscenen:**
Hva ser dikteren? Hvilken tid på døgnet/året? Hvilket landskap?

**2. Identifiser stemningen:**
Er diktet preget av glede, vemod, lengsel, henrykkelse? Hvordan skapes stemningen?

**3. Let etter besjeling:**
Får naturen menneskelige egenskaper? Snakker, føler, handler den?

**4. Finn symbolikken:**
Hva kan naturmotivene symbolisere? Sol, mørke, vann, fjell, årstider?

**5. Se på forholdet menneske-natur:**
Er dikteren ett med naturen? Fremmed for den? Overveldet av den?

**6. Analyser kontraster:**
Lys-mørke? Indre-ytre? Storm-stille?

**7. Lytt til språket:**
Hvordan støtter rytme og klang innholdet? Lydmalende ord?

**8. Plasser diktet:**
Hvem skrev det? Når? Hvilken type romantikk representerer det?

**9. Sammenlign:**
Hvordan ville Wergeland vs. Welhaven skrevet om samme scene?`,
    },
    {
      id: 'norsk-vg2-3-4-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland – «Til Foraaret»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-4-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_WERGELAND_TIL_FORAARET}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser romantisk naturlyrikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med at romantikerne så naturen som "besjelet"?',
            solution: 'Romantikerne mente at naturen ikke var død materie, men hadde liv, ånd og følelser. Naturen kunne kommunisere med mennesket og uttrykke noe guddommelig.',
          },
          {
            label: 'b',
            task: 'Sammenlign Wergelands og Welhavens naturdikt ut fra utdragene i dette kapittelet.',
            solution: 'Wergeland: dynamisk, energisk, entusiastisk, folkelig. Welhaven: stille, melankolsk, subtil, formelt perfekt. Begge besjelder naturen, men med helt ulik stemning.',
          },
          {
            label: 'c',
            task: 'Hvilke naturmotiver går igjen i romantisk lyrikk, og hva kan de symbolisere?',
            solution: 'Fjell (opphøyelse, frihet), skog (mysterium, eventyrets sted), vann (følelser, liv), kveld/natt (refleksjon, lengsel), årstider (livets gang). Alle kan speile sinnstilstander.',
          },
        ],
        solution: 'Romantisk naturlyrikk bruker naturen til å uttrykke følelser, tanker og lengsel mot noe større.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv romantisk naturlyrikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv et kort dikt (8-12 linjer) i romantisk stil om en naturopplevelse du har hatt.',
            solution: 'Eksempel: Bruk besjeling av naturen, la landskapet speile en følelse, bruk sanselige beskrivelser, gjerne med symbolikk.',
          },
          {
            label: 'b',
            task: 'Forklar hvilke romantiske virkemidler du har brukt.',
            solution: 'Svar bør nevne: besjeling, symbolikk, sanseinntrykk, stemning, eventuelt kontraster og musikalitet i språket.',
          },
        ],
        solution: 'Å skrive i romantisk stil gir innsikt i epokens natursyn og virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign romantikkens og nåtidens natursyn.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan så romantikerne på forholdet mellom menneske og natur?',
            solution: 'Mennesket var en del av naturen, kunne bli ett med den, og finne mening og guddommelig nærvær i den. Naturen var hellig og besjelet.',
          },
          {
            label: 'b',
            task: 'Hvordan preger dagens klimakrise vårt forhold til naturen?',
            solution: 'I dag ser vi naturen også som truet og sårbar. Forholdet preges av skyld, ansvar og frykt for tap. Naturlyrikken i dag kan handle om sorg over det som forsvinner.',
          },
          {
            label: 'c',
            task: 'Hva kan vi lære av romantikernes natursyn i dag?',
            solution: 'Romantikernes ærefrykt for naturen og opplevelse av den som meningsfull kan inspirere til større respekt og vilje til å beskytte den. Følelsesmessig tilknytning til naturen kan motivere handling.',
          },
        ],
        solution: 'Romantikkens natursyn utfordrer oss til å tenke over vårt eget forhold til naturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er "besjeling" (personifikasjon) i naturlyrikk?',
        options: [
          'Å beskrive naturen med vitenskapelige termer',
          'Å gi naturen menneskelige egenskaper',
          'Å male et naturbilde',
          'Å sitere andre diktere',
        ],
        answer: 1,
        solution: 'Besjeling (personifikasjon) betyr å gi naturen menneskelige egenskaper - for eksempel at "vinden sukker", "fjellet troner" eller "bekken synger". Dette er et sentralt virkemiddel i romantisk naturlyrikk fordi det gjør naturen levende og meningsfull.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med "det sublime" i romantikken?',
        options: [
          'En pen solnedgang',
          'En overveldende naturopplevelse som vekker frykt og henrykkelse',
          'Et enkelt og vakkert dikt',
          'En stille kveld i skogen',
        ],
        answer: 1,
        solution: 'Det sublime er en opplevelse av naturens overveldende storhet - fjell, fosser, stormer - som vekker både frykt og henrykkelse. Opplevelsen gjør mennesket lite, men gir samtidig en følelse av noe uendelig. Det var et sentralt begrep i romantisk estetikk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar med egne ord hva synestesi er, og gi to eksempler.',
        solution: 'Synestesi er et virkemiddel der sanseinntrykk blandes - man beskriver ett sanseuttrykk med ord fra en annen sans. Eksempler: (1) "Mørke klanger" - lyd beskrives med fargeuttrykk. (2) "Lyse toner" - lyd beskrives med lysuttrykk. Synestesi skaper uvanlige, poetiske bilder som utvider opplevelsen av naturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les primærteksten "Til Foraaret" av Wergeland. Finn eksempler på besjeling, allitterasjon og onomatopoetikon i diktet.',
        hints: ['Se etter steder der naturen handler som et menneske, ord som begynner med samme lyd, og ord som etterligner lyder.'],
        solution: 'Besjeling: Fuglene synger, skyene går, skovene rører seg. Allitterasjon: "Susen i Skove" (s-lyd), "Bækkene Blinke" (b-lyd). Onomatopoetikon: "larme" (etterligner støy), "brist" (etterligner knekkelyd). Disse virkemidlene gjør naturen levende og lydmessig rik.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser kontrasten i Welhavens "Dalen". Hva er forholdet mellom natur og sjel i diktet?',
        hints: ['Se spesielt på de to siste linjene.'],
        solution: 'Kontrasten er mellom naturens ytre fred og dikterens indre uro. Naturen er stille, mild og fredelig, men dikterens hjerte finner ikke den freden som hviler over dalen. Forholdet mellom natur og sjel er her et kontrastforhold: naturen har det sjelen mangler. Dette er typisk Welhaven - han bruker den vakre naturen til å fremheve indre smerte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for "naturopplevelsens fire faser" og vis med et konkret eksempel fra et dikt hvordan fasene kan brukes i analyse.',
        solution: 'De fire fasene: (1) Observasjon - dikteren betrakter et landskap. (2) Innlevelse - dikteren lever seg inn i naturen. (3) Refleksjon - naturopplevelsen vekker tanker. (4) Transformasjon - dikteren forvandles. Eksempel fra "Til Foraaret": Wergeland observerer vårens tegn (fase 1), lever seg inn i bevegelsen (fase 2), reflekterer over livskraften (fase 3), og oppfordrer til glede som en forvandlet innsikt (fase 4).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et naturmotiv (fjell, skog, vann, kveld eller årstid) og skriv en analyse (300-400 ord) av hvordan dette motivet brukes i romantisk lyrikk. Bruk eksempler fra pensum.',
        hints: [
          'Forklar den symbolske betydningen av motivet.',
          'Vis med eksempler fra minst to diktere.',
        ],
        solution: 'Analysen bør: (1) Definere det valgte naturmotivet og dets symbolske betydning. (2) Gi eksempler fra minst to diktere (Wergeland og Welhaven). (3) Vise hvordan motivet brukes ulikt av ulike diktere. (4) Drøfte hvorfor dette motivet var viktig for romantikerne. (5) Bruke fagbegreper som besjeling, symbolikk og korrespondanse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-4-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: "Romantikernes natursyn er mer relevant i dag enn noensinne." Skriv en kort argumenterende tekst (250-350 ord).',
        hints: [
          'Tenk på klimakrisen og forholdet mellom menneske og natur.',
          'Hva kan romantikernes natursyn bidra med i dag?',
          'Hva er begrensningene ved romantikkens natursyn?',
        ],
        solution: 'Teksten bør drøfte: Romantikernes ærefrykt for naturen er relevant i en tid med klimakrise, fordi den kan motivere til handling. Følelsesmessig tilknytning kan være like viktig som vitenskapelig kunnskap for å beskytte naturen. Men romantikernes syn har begrensninger: det idealiserte naturen og overså økologisk kompleksitet. I dag trenger vi både romantisk engasjement og vitenskapelig forståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: Nasjonalromantikken og nasjonsbygging
// ============================================================================

export const CHAPTER_NORSK_VG2_3_5: TextbookChapter = {
  id: 'norsk-vg2-3-5',
  courseId: 'norsk-vg2',
  chapterNumber: '3.5',
  title: 'Nasjonalromantikken og nasjonsbygging',
  description: 'Utforsk hvordan litteratur og kultur bidro til å skape norsk nasjonal identitet på 1800-tallet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
    'gjøre rede for den historiske bakgrunnen for språksituasjonen i Norge i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-3-5-intro',
      type: 'text',
      content: `## Nasjonalromantikken - jakten på det norske

Nasjonalromantikken var en kulturell bevegelse på 1800-tallet som søkte å definere og dyrke det spesifikt norske. Etter 400 år under dansk styre trengte den nye nasjonen en egen identitet - og denne skulle finnes i språk, folkeviser, eventyr og bondekultur.

**Bakgrunn**

I 1814 fikk Norge sin egen grunnlov og løsrev seg fra Danmark - men gikk i union med Sverige. Landet trengte en nasjonal identitet som var tydelig norsk, verken dansk eller svensk.

De norske nasjonalromantikerne fulgte europeiske forbilder:
- I Tyskland samlet brødrene Grimm eventyr
- I Finland skapte Lönnrot nasjonaleposet "Kalevala"
- Romantikken vektla folkekulturen som uttrykk for "folkånd"

**Nasjonalromantikkens program**

*Samle:* Innsamling av folkeviser, eventyr, sagn, ordspråk fra bondebefolkningen.

*Studere:* Vitenskapelig utforskning av norsk språk, historie og kultur.

*Skape:* Ny litteratur og kunst inspirert av det nasjonale.

*Fornye:* Utvikle et norsk skriftspråk basert på dialektene.

**Sentrale skikkelser**

- P.Chr. Asbjørnsen og Jørgen Moe: Eventyrsamlere
- M.B. Landstad: Samlet folkeviser
- Ivar Aasen: Skapte landsmålet
- J.C. Dahl og Tidemand/Gude: Nasjonalromantisk malerkunst
- Edvard Grieg: Musikk inspirert av folkemusikk

**Nasjonalromantikkens paradoks**

Nasjonalromantikken hadde et grunnleggende paradoks: Den hevdet å avdekke en opprinnelig, autentisk norsk kultur, men valgte bevisst ut og omformet materialet. Eventyrene ble redigert, folkevisene renset, bøndene idealisert. Det "ekte norske" var til dels en konstruksjon.

Dette betyr ikke at nasjonsbyggingsprosjektet var falskt - alle nasjoner konstruerer sin identitet. Men det er viktig å forstå at nasjonalromantikken ikke bare avdekket norsk kultur, den skapte den også.

**Bondekulturen som ideal**

For nasjonalromantikerne var bonden den ekte nordmannen. Bøndene hadde:
- Bevart norske dialekter
- Holdt ved like folkediktning og folkemusikk
- Levd i pakt med norsk natur
- En ubrutt tradisjon fra middelalderen

Denne idealiseringen var delvis berettiget - bondekulturen hadde faktisk bevart mye - men overså at bøndene også var fattige, ufrie og ofte konservative.

**Nasjonalromantikken i kunsten**

*Malerkunst:*
J.C. Dahl malte storslåtte norske landskaper. Tidemand og Gude skapte "Brudeferd i Hardanger" (1848) - ikonisk nasjonalromantisk maleri.

*Musikk:*
Edvard Grieg brukte norske folkemelodier i sin kunstmusikk. Halfdan Kjerulf og Ole Bull var andre viktige musikalske nasjonalromantikere.

*Arkitektur:*
Stavkirkene ble gjenoppdaget som nasjonale skatter. "Dragestilen" hentet inspirasjon fra vikingtid og middelalder.`,
    },
    {
      id: 'norsk-vg2-3-5-def-1',
      type: 'definition',
      title: 'Nasjonalromantikkens begreper',
      content: `**Nasjonalromantikk:** Kulturell bevegelse som søkte å definere og dyrke det spesifikt nasjonale.

**Folkånd (Volksgeist):** Ideen om at hvert folk har en egen "ånd" uttrykt i språk og kultur.

**Folkediktning:** Eventyr, sagn, viser, ordspråk skapt av "folket".

**Innsamlingsarbeid:** Systematisk innsamling av folkediktning fra bygdene.

**Bondekultur:** For nasjonalromantikerne representerte bøndene det autentiske norske.

**Stavkirker:** Middelalderske trekirker som symboler på norsk egenart.

**Folkedrakt (bunad):** Regionale drakter som ble gjenoppdaget og idealisert.`,
    },
    {
      id: 'norsk-vg2-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar nasjonalromantikkens betydning for norsk identitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor var nasjonalromantikken viktig for Norge etter 1814?',
            solution: 'Norge trengte en egen identitet etter 400 år under Danmark. Nasjonalromantikken bidro til å definere hva som var spesifikt norsk.',
          },
          {
            label: 'b',
            task: 'Hva samlet nasjonalromantikerne, og hvorfor?',
            solution: 'De samlet eventyr, folkeviser, sagn og ordspråk. De mente at folkekulturen uttrykte folkets "ånd" og kunne danne grunnlag for nasjonal kultur.',
          },
        ],
        solution: 'Nasjonalromantikken var avgjørende for å skape norsk nasjonal identitet på 1800-tallet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem samlet norske folkeeventyr på 1800-tallet?',
        options: [
          'Ivar Aasen og Knud Knudsen',
          'P.Chr. Asbjørnsen og Jørgen Moe',
          'Henrik Wergeland og Johan S. Welhaven',
          'M.B. Landstad og Sophus Bugge',
        ],
        answer: 1,
        solution: 'Peter Christen Asbjørnsen og Jørgen Moe samlet norske folkeeventyr og ga ut "Norske Folkeeventyr" fra 1841. Landstad og Bugge samlet folkeviser, mens Aasen arbeidet med dialekter og språk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var et sentralt paradoks ved nasjonalromantikken?',
        options: [
          'At Norge allerede hadde en sterk identitet',
          'At den hevdet å avdekke noe opprinnelig, men konstruerte det delvis',
          'At den bare fokuserte på bykultur',
          'At den var mot norsk selvstendighet',
        ],
        answer: 1,
        solution: 'Nasjonalromantikken hevdet å avdekke en opprinnelig, autentisk norsk kultur, men valgte bevisst ut og omformet materialet. Eventyr ble redigert, folkeviser renset, bønder idealisert. Det "ekte norske" var delvis en konstruksjon - men dette er slik alle nasjoner bygger identitet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nevn fire sentrale skikkelser i nasjonalromantikken og forklar kort hva hver bidro med.',
        solution: '(1) P.Chr. Asbjørnsen og Jørgen Moe - samlet folkeeventyr som definerte det norske. (2) M.B. Landstad - samlet folkeviser fra muntlig tradisjon. (3) Ivar Aasen - skapte landsmålet basert på dialektene. (4) J.C. Dahl - malte norske landskaper i nasjonalromantisk stil. Alle bidro til å forme norsk nasjonal identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva begrepet "folkånd" (Volksgeist) betyr og hvorfor det var viktig for nasjonalromantikerne.',
        solution: 'Folkånd (Volksgeist) er ideen om at hvert folk har en unik "ånd" eller karakter som kommer til uttrykk i språk, kultur og tradisjoner. For nasjonalromantikerne var dette viktig fordi det ga et teoretisk grunnlag for å hevde at Norge hadde en egen identitet. Folkeånd ble brukt som argument for å samle inn og bevare norsk folkekultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvorfor idealiserte nasjonalromantikerne bonden? Drøft både det berettigede og det problematiske ved denne idealiseringen.',
        hints: ['Tenk på hva bøndene faktisk hadde bevart, men også hva idealiseringen overså.'],
        solution: 'Berettiget: Bøndene hadde faktisk bevart norske dialekter, folkediktning og tradisjoner gjennom dansketiden. De representerte en kontinuitet fra middelalderen. Problematisk: Idealiseringen overså at bøndene var fattige, ufrie (husmannsvesenet) og ikke levde det idylliske livet nasjonalromantikerne forestilte seg. Bøndene ble brukt som symbol uten at deres faktiske livsforhold ble tatt alvorlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign det norske nasjonalromantiske prosjektet med tilsvarende prosjekter i andre land.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er felles for nasjonalromantikken i Norge, Tyskland og Finland?',
            solution: 'Felles: Innsamling av folkekultur (eventyr, sanger, myter), vektlegging av folkespråket, idealisering av bondekultur, nasjonalt opphav i middelalderen.',
          },
          {
            label: 'b',
            task: 'Hva er spesifikt for det norske prosjektet?',
            solution: 'Norge var i en unik situasjon: helt nylig selvstendig (1814), 400 år uten eget skriftspråk, i union med Sverige. Behovet for identitet var akutt. Språkspørsmålet var sentralt på en annen måte enn i Tyskland og Finland.',
          },
        ],
        solution: 'Nasjonalromantikken var et europeisk fenomen, men hvert land tilpasset det til sin situasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for nasjonalromantikkens uttrykk i kunsten utenom litteraturen. Nevn eksempler fra malerkunst, musikk og arkitektur.',
        solution: 'Malerkunst: J.C. Dahl malte storslåtte norske fjordlandskap. Tidemand og Gudes "Brudeferd i Hardanger" (1848) er et ikonisk nasjonalromantisk maleri. Musikk: Edvard Grieg brukte folkemelodier i kunstmusikk ("Peer Gynt", "Holbergsuiten"). Ole Bull var en verdenskjent fiolinist med norske folkemelodier. Arkitektur: Stavkirkene ble gjenoppdaget som nasjonale skatter. Dragestilen hentet motiver fra vikingtid og middelalder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: "Alle nasjoner er konstruerte fellesskap." Bruk nasjonalromantikken som eksempel.',
        hints: [
          'Hva betyr det at noe er "konstruert"?',
          'Er det noe galt med å konstruere nasjonal identitet?',
          'Finnes det elementer som er genuint norske?',
        ],
        solution: 'Nasjonsbygging innebærer alltid utvalg og fortolkning. Nasjonalromantikerne valgte ut visse elementer (bondekulturen, naturen, folkeeventyrene) og ga dem symbolsk betydning. Dette betyr ikke at det norske er falskt - men at det er et resultat av bevisste valg. Alle nasjoner gjør dette. Drøftingen bør nyansere: noe ekte lå i bunnen (dialektene, eventyrene, naturen), men konstruksjonen var bevisst og politisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finnes det nasjonalromantiske trekk i Norge i dag? Skriv en kort tekst (200-300 ord) der du drøfter dette med eksempler.',
        hints: [
          'Tenk på 17. mai, bunad, friluftsliv, turistreklame.',
          'Er nasjonalromantikken fortsatt levende eller er den foreldet?',
        ],
        solution: 'Teksten bør peke på nasjonalromantiske trekk i dag: 17. mai-feiring med bunad og flagg, friluftslivsidealet, "det norske" i turistreklame (fjorder, fjell), stolthet over natur og kultur. Men også kritisk perspektiv: nasjonalromantikken kan bli ekskluderende i et flerkulturelt samfunn, og idealiseringen av "det opprinnelige norske" kan være problematisk. Drøftingen bør vise evne til å se både positive og negative sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-5-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en oversikt over nasjonalromantikkens fire hovedstrategier (samle, studere, skape, fornye) og gi konkrete eksempler på hver.',
        solution: 'Samle: Asbjørnsen og Moe samlet eventyr, Landstad samlet folkeviser, Aasen samlet dialekter. Studere: Aasen ga ut grammatikker og ordbøker, Bugge studerte norrøn litteratur, Keyser og Munch forsket på norsk historie. Skape: Wergeland og Welhaven skapte ny nasjonalromantisk litteratur, Dahl malte norske landskaper, Grieg komponerte musikk med folkemelodier. Fornye: Aasen skapte landsmålet, stavkirkene ble restaurert, bunaden ble tatt i bruk som festdrakt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.6: Asbjørnsen og Moe - folkeeventyr
// ============================================================================

export const CHAPTER_NORSK_VG2_3_6: TextbookChapter = {
  id: 'norsk-vg2-3-6',
  courseId: 'norsk-vg2',
  chapterNumber: '3.6',
  title: 'Asbjørnsen og Moe - folkeeventyr',
  description: 'Lær om innsamlingen av norske folkeeventyr og deres betydning for nasjonal identitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-3-6-intro',
      type: 'text',
      content: `## Asbjørnsen og Moe - skaperne av det norske eventyret

Peter Christen Asbjørnsen (1812-1885) og Jørgen Moe (1813-1882) er Norges mest berømte eventyrsamlere. Deres "Norske Folkeeventyr" (første hefte 1841) ble en nasjonal klassiker og bidro sterkt til å forme norsk identitet og språk.

**Innsamlingsarbeidet**

Asbjørnsen og Moe reiste rundt i norske bygder og samlet eventyr fra muntlig tradisjon. De intervjuet bønder og tjenestefolk og skrev ned fortellingene de hørte.

Men de gjorde mer enn å skrive ned - de bearbeidet materialet til litterær form. De skapte en eventyrstil som kombinerte muntlig fortellertone med litterær kunst.

**Eventyrstilen**

Asbjørnsens og Moes språk ble normgivende for norsk prosa:
- Folkelig tone med muntlige vendinger
- Dialektord og uttrykk
- Rytmisk, flytende fortelling
- Humor og ironi

**Betydning**

Folkeeventyrene fikk enorm betydning:
- De definerte "det norske" gjennom fortellinger
- De inspirerte kunstnere, komponister og forfattere
- De bidro til å fornorske skriftspråket
- De ble pensum i norsk skole i generasjoner

**Kjente eventyr**

- "Askeladden og de gode hjelperne"
- "De tre Bukkene Bruse"
- "Mannen som skulle stelle hjemme"
- "Kvitebjørn kong Valemon"
- "Gutten som gikk til Nordavinden"

**Eventyrets funksjon**

Folkeeventyrene hadde flere funksjoner i det norske samfunnet:

*Underholdning:* Eventyrene ble fortalt i sosiale sammenhenger og var viktige for fellesskapet.

*Oppdragelse:* Eventyrene formidlet verdier som kløkt, utholdenhet og medmenneskelighet.

*Identitet:* Gjennom eventyrene ble det skapt en felles norsk kulturarv som bandt folk sammen.

*Språkutvikling:* Asbjørnsen og Moes eventyrstil viste at det var mulig å skrive god litterær norsk med folkelig tone.`,
    },
    {
      id: 'norsk-vg2-3-6-def-1',
      type: 'definition',
      title: 'Eventyrsjangeren',
      content: `**Folkeeventyr:** Eventyr fra muntlig tradisjon, samlet og nedskrevet.

**Kunsteventyr:** Eventyr diktet av en forfatter (som H.C. Andersen).

**Eventyrtyper:**
- *Undereventyr:* Overnaturlige elementer (troll, konger, prinsesser)
- *Dyreeventyr:* Dyr er hovedpersoner
- *Skjemteeventyr:* Hverdagslige, humoristiske

**Eventyrstrukturen:**
- Åpningsformel: "Det var en gang..."
- Tretallets lov: Tre brødre, tre oppgaver, tre forsøk
- Hjelpere og motstandere
- Lykkelig slutt
- Avslutningsformel: "Snipp, snapp, snute..."

**Askeladden:**
Den typiske norske eventyrhelten - yngste bror, blir undervurdert, bruker list og vinner.`,
    },
    {
      id: 'norsk-vg2-3-6-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Asbjørnsen og Moe – «Askeladden som kappåt med trollet»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-6-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_ASBJORNSEN_ASKELADDEN}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-6-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Asbjørnsen og Moe – «Smørbukk»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-6-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_ASBJORNSEN_SMORBUKK}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser folkeeventyrenes betydning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan arbeidet Asbjørnsen og Moe?',
            solution: 'De reiste i bygdene og samlet eventyr fra muntlig tradisjon. De bearbeidet materialet til litterær form med folkelig tone.',
          },
          {
            label: 'b',
            task: 'Hvorfor ble eventyrene viktige for norsk identitet?',
            solution: 'De definerte "det norske", inspirerte kunst og litteratur, bidro til å fornorske språket.',
          },
        ],
        solution: 'Folkeeventyrene var sentralt i nasjonsbyggingsprosjektet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er tretallets lov i folkeeventyrene?',
        options: [
          'At eventyrene alltid handler om tre troll',
          'At ting skjer tre ganger - tre brødre, tre oppgaver, tre forsøk',
          'At eventyrene alltid har tre sider',
          'At eventyrene ble fortalt tre ganger',
        ],
        answer: 1,
        solution: 'Tretallets lov betyr at viktige elementer i eventyrene gjentas tre ganger. Det er tre brødre (der den yngste vinner), tre oppgaver, tre forsøk. De to første mislykkes, det tredje lykkes. Dette mønsteret bygger spenning og gjør eventyrene lette å huske.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner Askeladden som eventyrfigur?',
        options: [
          'Han er sterkest av alle brødrene',
          'Han er den yngste, blir undervurdert, men bruker list og vinner',
          'Han er alltid en prins',
          'Han er den eldste og klokeste broren',
        ],
        answer: 1,
        solution: 'Askeladden er den typiske norske eventyrhelten: han er yngst, fattigst og minst respektert av brødrene. Men han er nysgjerrig, kreativ og bruker list fremfor styrke. Han vinner til slutt fordi han er åpen, modig og hjelper andre. Askeladden representerer den lille mannens seier over de mektige.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les primærteksten "Askeladden som kappåt med trollet". Beskriv kort handlingen og identifiser typiske eventyrtrekk.',
        solution: 'Handlingen: Askeladden konkurrerer med et troll om hvem som kan spise mest. Askeladden lurer trollet ved å ha en sekk under klærne som han fyller med mat. Typiske eventyrtrekk: Askeladden som kløktig helt, trollet som dum motstander, list seirer over styrke, humor, lykkelig slutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les primærteksten "Smørbukk". Hvilken type eventyr er dette? Forklar med eksempler fra teksten.',
        hints: ['Tenk på eventyrtypene: undereventyr, dyreeventyr, skjemteeventyr.'],
        solution: '"Smørbukk" er et skjemteeventyr med elementer av dyreeventyr. Det handler om en gutt som spiser alt i huset og deretter rulles ut som en smørball. Eventyrtypen vises gjennom humor, overdrivelse og hverdagslige situasjoner som blir absurde. Det har et repetitivt mønster der Smørbukk møter ulike figurer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Asbjørnsen og Moe bearbeidet eventyrene de samlet. Drøft: Er det et problem at de endret på de muntlige fortellingene?',
        hints: [
          'Hva ville skjedd om de bare hadde skrevet ned ordrett?',
          'Hva går tapt og hva vinnes ved bearbeidelse?',
        ],
        solution: 'Argumenter for bearbeidelse: Muntlige fortellinger er ofte springende og usammenhengende. Bearbeidelsen skapte litterær kvalitet og en lesbar stil som ble normgivende for norsk prosa. Argumenter mot: Bearbeidelsen endret det opprinnelige materialet, noen ganger betydelig. Varianter ble fjernet, dialekttrekk glatter ut. Det "autentiske" ble delvis konstruert. Begge perspektiver er gyldige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Askeladden med en moderne helt fra film, TV eller litteratur. Hva er likt og ulikt?',
        hints: ['Tenk på helter som er undervurdert men vinner likevel - finnes det paralleller?'],
        solution: 'Svar vil variere, men bør peke på likheter: undervurdert helt, bruker list, overraskende seier. Eksempler: Frodo (Ringenes herre), Harry Potter, Katniss (Hunger Games). Ulikheter kan være: moderne helter har mer psykologisk dybde, Askeladden er mer typifisert, moderne helter har ofte en "utviklingsreise" mens Askeladden er kløktig fra starten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for de tre eventyrtypene (undereventyr, dyreeventyr, skjemteeventyr) og gi et eksempel på hver.',
        solution: 'Undereventyr: Har overnaturlige elementer som troll, drager og magiske gjenstander. Eksempel: "Kvitebjørn kong Valemon". Dyreeventyr: Dyr er hovedpersoner og handler som mennesker. Eksempel: "Bamse Brakar". Skjemteeventyr: Hverdagslige, humoristiske fortellinger uten overnaturlige elementer. Eksempel: "Mannen som skulle stelle hjemme". Hver type har sin funksjon: undereventyr handler om drøm og lengsel, dyreeventyr om list, skjemteeventyr om humor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-6-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser Askeladden-figuren som uttrykk for norske verdier. Hva sier denne eventyrhelten om norsk selvbilde?',
        hints: [
          'Tenk på at Askeladden er fattig, liten og undervurdert.',
          'Hva verdsettes: styrke eller list? Status eller karakter?',
        ],
        solution: 'Askeladden uttrykker verdier som egalitet (den lille mannen kan vinne over konger og troll), kløkt over styrke, åpenhet for det nye og ukjente, og at ytre status ikke bestemmer verdi. Disse verdiene kan knyttes til norsk selvbilde: et lite, demokratisk land som klarer seg ved å være smart og oppfinnsom. Askeladden er en anti-elitær helt som passer i et bondesamfunn der arbeid og karakter verdsettes over rang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-6-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyse (250-350 ord) av "Askeladden som kappåt med trollet" der du bruker fagbegreper om eventyrsjangeren.',
        hints: [
          'Bruk begreper som eventyrtype, tretallets lov, hjelpere og motstandere, eventyrstruktur.',
          'Analyser også humor og eventyrets moral.',
        ],
        solution: 'Analysen bør identifisere eventyrtypen (skjemteeventyr med undereventyr-elementer), peke på strukturelle trekk (formler, gjentakelse), analysere Askeladden som heltefigur (kløkt over styrke), drøfte humor (trollets dumhet, den absurde situasjonen), og knytte eventyret til nasjonalromantikkens prosjekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-6-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign norske folkeeventyr med eventyr fra et annet land (f.eks. Grimms eventyr fra Tyskland eller russiske folkeeventyr). Hva er likt og ulikt?',
        hints: [
          'Se på heltefigurer, motstandere, struktur og moral.',
          'Hva sier eventyrene om kulturen de kommer fra?',
        ],
        solution: 'Likheter: Tretallets lov, lykkelig slutt, hjelpere og motstandere, formler. Ulikheter: Norske eventyr har troll (ikke ulver eller hekser), Askeladden er særnorsk, norske eventyr har ofte mer humor og ironi, naturen er norsk (fjell, skog). Grimms eventyr er ofte mørkere og mer moraliserende. Forskjellene gjenspeiler kulturelle ulikheter mellom landene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.7: Ivar Aasen og landsmålet
// ============================================================================

export const CHAPTER_NORSK_VG2_3_7: TextbookChapter = {
  id: 'norsk-vg2-3-7',
  courseId: 'norsk-vg2',
  chapterNumber: '3.7',
  title: 'Ivar Aasen og landsmålet',
  description: 'Lær om Ivar Aasens arbeid med å skape et norsk skriftspråk basert på dialektene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for den historiske bakgrunnen for språksituasjonen i Norge i dag',
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med svensk, dansk og norrønt',
  ],
  content: [
    {
      id: 'norsk-vg2-3-7-intro',
      type: 'text',
      content: `## Ivar Aasen - skaperen av nynorsk

Ivar Aasen (1813-1896) skapte et nytt norsk skriftspråk basert på dialektene. Hans arbeid la grunnlaget for det som i dag heter nynorsk, og han regnes som en av de viktigste skikkelsene i norsk språkhistorie.

**Liv og bakgrunn**

Aasen vokste opp på en liten gård på Sunnmøre. Han var i stor grad selvlært, men hadde en usedvanlig språkbegavelse. I 1842 fikk han stipend til å reise rundt i Norge og samle dialekter.

**Språkarbeidet**

Aasens metode var vitenskapelig:
1. Han reiste systematisk gjennom landet
2. Han samlet ordforråd og grammatikk fra dialektene
3. Han sammenlignet med norrønt
4. Han konstruerte en normalform - landsmålet

**Aasens argumenter**

Aasen mente at det danske skriftspråket var fremmed for det norske folk. Bare et skriftspråk bygd på dialektene kunne være ekte norsk. Han så forbindelsen til norrønt som et viktig argument.

**Aasen som dikter**

Aasen skrev også dikt på landsmålet, og viste dermed at det nye skriftspråket kunne brukes til kunst. Hans mest kjente dikt er "Nordmannen" (1863), som ble satt til melodi og ble en uoffisiell nasjonalsang.

**Betydning**

Aasens landsmål (senere: nynorsk) ble et av Norges to offisielle skriftspråk. Hans arbeid:
- Gav Norge et selvstendig skriftspråk
- Bevarte dialektene som grunnlag
- Knytte moderne norsk til norrøn arv
- Inspirerte målrørsla (nynorskbevegelsen)

**Aasens metode**

Det som gjør Aasen unik, er kombinasjonen av vitenskapelig grundighet og politisk visjon. Han brukte sammenlignende lingvistikk for å kartlegge dialektene og finne fellestrekkene. Deretter konstruerte han et skriftspråk som bygde på disse fellestrekkene, med norrønt som historisk referansepunkt.

Aasen prioriterte de dialektene som hadde bevart mest fra norrønt, særlig vestnorske og midtnorske dialekter. Dette ga landsmålet en arkaisk karakter som skilte det tydelig fra dansk.`,
    },
    {
      id: 'norsk-vg2-3-7-def-1',
      type: 'definition',
      title: 'Ivar Aasen - sentrale begreper',
      content: `**Landsmål:** Aasens navn på skriftspråket han skapte (nå: nynorsk).

**Målreising:** Bevegelsen for å fremme landsmål/nynorsk.

**Folkemål:** Betegnelse på dialektene - folkets faktiske talespråk.

**Normalform:** Et standardisert skriftspråk basert på flere dialekter.

**Aasens verker:**
- "Det norske Folkesprogs Grammatik" (1848)
- "Ordbog over det norske Folkesprog" (1850)
- "Norsk Grammatik" (1864)
- "Norsk Ordbog" (1873)

**Aasens prinsipp:**
Landsmålet skulle bygge på de dialektene som hadde bevart mest fra norrønt.`,
    },
    {
      id: 'norsk-vg2-3-7-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen – «Nordmannen»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-7-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_AASEN_NORDMANNEN}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-7-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen – Forord til «Norsk Grammatik» (1864)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-7-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_AASEN_GRAMMATIK_FORORD}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar Ivar Aasens språkarbeid.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan arbeidet Aasen med å skape landsmålet?',
            solution: 'Han reiste systematisk og samlet dialekter, sammenlignet med norrønt, og konstruerte en normalform basert på dialektene.',
          },
          {
            label: 'b',
            task: 'Hvorfor mente Aasen at Norge trengte et nytt skriftspråk?',
            solution: 'Det danske skriftspråket var fremmed for folket. Et ekte norsk skriftspråk måtte bygge på dialektene.',
          },
        ],
        solution: 'Aasen skapte landsmålet for å gi Norge et selvstendig skriftspråk med røtter i folkemålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva het Ivar Aasens første vitenskapelige verk om norske dialekter?',
        options: [
          'Norsk Ordbog',
          'Det norske Folkesprogs Grammatik',
          'Norsk Grammatik',
          'Om vort Skriftsprog',
        ],
        answer: 1,
        solution: '"Det norske Folkesprogs Grammatik" (1848) var Aasens første store vitenskapelige verk. Det var en grammatikk over norske dialekter basert på hans reiser gjennom landet. To år senere ga han ut ordboken "Ordbog over det norske Folkesprog" (1850).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket prinsipp la Aasen til grunn for landsmålet?',
        options: [
          'At det skulle ligne mest mulig på dansk',
          'At det skulle bygge på dialektene som hadde bevart mest fra norrønt',
          'At det skulle baseres på østnorske dialekter',
          'At det skulle være helt nytt og ikke ligne noe annet språk',
        ],
        answer: 1,
        solution: 'Aasens prinsipp var at landsmålet skulle bygge på de dialektene som hadde bevart mest fra norrønt. Han prioriterte særlig vestnorske og midtnorske dialekter fordi disse hadde flest norrøne trekk. Forbindelsen til norrønt ga landsmålet historisk legitimitet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les primærteksten "Nordmannen". Hva handler diktet om, og hvilke verdier fremhever det?',
        solution: '"Nordmannen" handler om den norske bonden som lever i pakt med naturen og er stolt av sitt land og sin arv. Diktet fremhever verdier som nøysomhet, arbeidssomhet, naturnærhet og stolthet over det norske. Det viser Aasens ideal om nordmannen som en fri og selvberget bonde, og fungerer som et nasjonalt identitetsdikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les forordet til "Norsk Grammatik". Hva er Aasens hovedargument for at Norge trenger et eget skriftspråk?',
        hints: ['Se etter argumenter om forholdet mellom talespråk og skriftspråk.'],
        solution: 'Aasens hovedargument er at det danske skriftspråket er fremmed for det norske folket. Folk snakker norske dialekter men skriver på dansk - dette er en unaturlig situasjon. Et folk trenger et skriftspråk som samsvarer med talespråket. Aasen argumenterer vitenskapelig: norske dialekter danner et eget språksystem som er forskjellig fra dansk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar Aasens metode for å lage landsmålet. Hva gjør denne metoden vitenskapelig?',
        solution: 'Aasens metode var vitenskapelig på flere måter: (1) Systematisk innsamling - han reiste gjennom hele landet og samlet data fra mange dialekter. (2) Sammenlignende metode - han sammenlignet dialektene med hverandre og med norrønt. (3) Objektivt grunnlag - han baserte seg på språklige fakta, ikke personlige preferanser. (4) Dokumentasjon - han publiserte grammatikker og ordbøker med detaljert belegg. Metoden ligner den moderne lingvistikkens tilnærming.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-7-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Aasen var både vitenskapsmann og dikter. Hvorfor var det viktig at han også skrev dikt på landsmålet?',
        hints: ['Tenk på hva det å skrive dikt beviser om et språk.'],
        solution: 'Det var viktig at Aasen skrev dikt fordi det viste at landsmålet ikke bare var et vitenskapelig prosjekt, men et fullverdig språk som kunne brukes til kunst og litteratur. Motstanderne hevdet at landsmålet var "kunstig" og ubrukelig. Ved å skrive vakre dikt på landsmålet beviste Aasen at det var et levende og uttrykkskraftig språk. "Nordmannen" ble en uoffisiell nasjonalsang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-7-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Aasens strategi med Knud Knudsens strategi for å skape et norsk skriftspråk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var forskjellen i tilnærming?',
            solution: 'Aasen ville bygge nytt skriftspråk fra dialektene (revolusjonær). Knudsen ville fornorske dansken gradvis (evolusjonær). Aasen så til fortiden (norrønt), Knudsen til nåtiden (talespråket i byene).',
          },
          {
            label: 'b',
            task: 'Hva er styrkene og svakhetene ved hver strategi?',
            solution: 'Aasens styrke: autentisk norsk, historisk forankring. Svakhet: nytt og uvant for mange. Knudsens styrke: bygger på det folk allerede brukte. Svakhet: beholdt mye dansk.',
          },
        ],
        solution: 'Begge strategier bidro til å fornorske skriftspråket, men på ulike måter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-7-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: "Ivar Aasen er den viktigste enkeltpersonen i norsk språkhistorie." Bruk argumenter fra pensum.',
        hints: [
          'Hva oppnådde Aasen?',
          'Finnes det andre like viktige personer?',
          'Tenk på Knudsen, Bjørnson, Ibsen.',
        ],
        solution: 'Argumenter for: Aasen skapte et helt nytt skriftspråk nesten alene, noe som er unikt i verdenshistorien. Han ga Norge et alternativ til dansk og startet en bevegelse som fortsatt lever. Argumenter mot: Knud Knudsens strategi har fått flest tilhengere (bokmål har flere brukere). Ibsen og Bjørnson bidro mer til å fornorske det litterære språket. Drøftingen bør vise at Aasen var enestående, men ikke den eneste viktige aktøren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-7-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Aasen skrev at det å bruke et fremmed skriftspråk var å "være en Slave". Analyser dette argumentet retorisk og vurder om det holder i dag.',
        hints: [
          'Hva slags retorisk grep er "slave"-metaforen?',
          'Er argumentet gyldig eller overdrevet?',
          'Finnes det folk i dag som bruker et "fremmed" skriftspråk?',
        ],
        solution: 'Retorisk analyse: Aasen bruker patos (slave-metaforen er følelsesladet), appell til nasjonalfølelse, og en sterk kontrast (fri/slave). Vurdering: Argumentet er overdrevet - mange folk bruker "fremmede" skriftspråk uten å være slaver. Men det har en kjerne av sannhet: språk er knyttet til identitet, og å måtte uttrykke seg på et fremmed språk kan oppleves som begrensende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-7-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hva er landsmålets/nynorskens stilling i Norge i dag? Drøft utfordringer og muligheter.',
        hints: [
          'Tenk på brukerprosent, sidemålsdebatten, nynorsk i medier.',
          'Er nynorsk truet eller livskraftig?',
        ],
        solution: 'Nynorsk er hovedmål for ca. 12% av elevene og brukes i mange kommuner, aviser og kulturinstitusjoner. Utfordringer: Synkende andel, press fra bokmål og engelsk, sidemålsmotstand. Muligheter: Sterk litterær tradisjon, dialektstolthet, nynorsk populærkultur. Drøftingen bør vise at nynorsk er under press, men at språket har sterke røtter og engasjerte brukere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.8: Norske folkeviser og ballader
// ============================================================================

export const CHAPTER_NORSK_VG2_3_8: TextbookChapter = {
  id: 'norsk-vg2-3-8',
  courseId: 'norsk-vg2',
  chapterNumber: '3.8',
  title: 'Norske folkeviser og ballader',
  description: 'Utforsk den norske folkevisetradisjonen med ridderballader, kjempeviser og trollviser.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
    'lese norrøne tekster i oversettelse og sammenligne dem med tekster fra nyere tid',
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-3-8-intro',
      type: 'text',
      content: `## Norske folkeviser - stemmer fra middelalderen

Folkevisene eller balladene er en skatt av dikting som ble skapt i middelalderen og overlevert muntlig gjennom generasjoner. På 1800-tallet samlet M.B. Landstad og andre disse visene fra tradisjonsbarere over hele landet. Samlingen ble en hjørnestein i det norske nasjonsbyggingsprosjektet.

**Hva er en folkevise?**

En folkevise (eller ballade) er en fortellende sang med følgende kjennetegn:

*Muntlig overlevering:*
Visene ble sunget, ikke skrevet. De ble lært utenat og ført videre fra generasjon til generasjon. Derfor finnes ofte mange varianter av samme vise.

*Fortellende innhold:*
Folkevisen forteller en historie - ofte dramatisk, om kjærlighet, død, overnaturlige møter eller heltemot.

*Fast form:*
Visene har strofer, ofte med fast rimmønster, og gjerne et omkved (refreng) som gjentas.

*Anonymt opphav:*
Vi vet ikke hvem som diktet folkevisene. De tilhører fellesskapet.

**Når og hvor oppsto folkevisene?**

De fleste norske folkeviser stammer sannsynligvis fra perioden 1100-1400, altså høy- og senmiddelalder. De ble påvirket av europeiske balladetradisjoner, særlig franske og engelske, men fikk norske særpreg.

Visene levde videre i muntlig tradisjon, særlig i bygde-Norge. Setesdal og Telemark var særlig rike på tradisjonsbarere som kunne mange gamle viser.

**Innsamlingen**

Magnus Brostrup Landstad (1802-1880) ga ut "Norske Folkeviser" i 1853 - en samling på over 100 viser han hadde samlet fra folkemunne. Samlingen ble en sensasjon og en viktig del av nasjonalromantikken.

Også Sophus Bugge, Olea Crøger og andre bidro til innsamlingsarbeidet. Mange viser ble reddet i siste liten, før tradisjonsbærerne døde.

**Typer av folkeviser**

Folkevisene deles gjerne inn etter innhold:

*Ridderballader:*
Forteller om adelsmenn og deres kjærlighetsaffærer, ofte med tragisk utgang. Eksempel: "Roland og Magnus kongen".

*Kjempeviser (legendeviser):*
Bygger på norrøne sagn om helter som kjemper mot troll og jotner. Eksempel: "Åsmund Frægdegjevar".

*Trollviser:*
Handler om møter med overnaturlige vesener - bergtroll, nøkken, hulder. Eksempel: "Margit Hjukse".

*Naturmytiske viser:*
Skildrer naturens makter og menneskets forhold til dem.

*Historiske viser:*
Basert på virkelige hendelser, som kongedrap eller slag.

**Folkevisens stil**

Folkevisene har karakteristiske stiltrekk:

*Formler og faste uttrykk:*
Visse vendinger går igjen: "Han sadlet sin gangare grå", "Tidlig om morgonen". Dette hjalp sangeren å huske.

*Dialogform:*
Mange viser er bygd opp som dialoger mellom personene.

*Dramatisk konsentrasjon:*
Visene hopper rett inn i handlingen og fokuserer på høydepunkter. Bakgrunn og forklaring utelates.

*Antydning fremfor beskrivelse:*
Følelser og motiver antydes ofte indirekte gjennom handling og dialog.

*Symbolspråk:*
Faste symboler: lindetre = vennskap, rosebusk = kjærlighet, svart ravn = ulykke.

**Omkvede**

Omkvede (refreng) er en fast del som gjentas etter hver strofe. Det kan være nonsens-linjer ("falleri fallera"), naturbilder ("- for det lyser på hei") eller tematiske kommentarer. Omkvedet skaper stemning og gir rom for ettertanke mellom strofene.

**Folkevisenes betydning**

Folkevisene har hatt stor betydning:

1. *For nasjonalromantikken:* De beviste at Norge hadde en egen rik kultur, ikke bare dansk import.

2. *For språket:* Visene var på norsk dialekt og ble argumenter for et norsk skriftspråk.

3. *For litteraturen:* Kunstnere som Ibsen, Bjørnson og Grieg hentet inspirasjon fra folkevisene.

4. *For musikken:* Melodiene ble samlet og brukt i ny musikk. Edvard Grieg arbeidet mye med folkemusikk.

5. *For identiteten:* Folkevisene ble en del av norsk selvforståelse - "slik var vi før dansketiden".`,
    },
    {
      id: 'norsk-vg2-3-8-def-1',
      type: 'definition',
      title: 'Folkevisesjangeren - sentrale begreper',
      content: `**Folkevise (ballade):** Fortellende sang fra middelalderen, overlevert muntlig.

**Omkved (refreng):** Fast del som gjentas etter hver strofe.

**Strofe:** Vers-enhet i diktet, ofte 4 linjer.

**Tradisjonsbærer:** Person som kan mange viser utenat og fører dem videre.

**Variant:** Ulik versjon av samme vise, oppstått gjennom muntlig overlevering.

**Typer folkeviser:**
- *Ridderballader:* Om adelsfolk, kjærlighet, ære
- *Kjempeviser:* Om helter som kjemper mot troll
- *Trollviser:* Om møter med overnaturlige vesener
- *Naturmytiske viser:* Om naturens makter
- *Historiske viser:* Basert på virkelige hendelser

**Stilistiske trekk:**
- Formler og faste uttrykk
- Dialogform
- Dramatisk konsentrasjon
- Symbolspråk`,
    },
    {
      id: 'norsk-vg2-3-8-example-1',
      type: 'example',
      title: 'Eksempel: "Draumkvedet"',
      problem: `"Draumkvedet" regnes som den ypperste norske folkevisen. Les dette utdraget:

"Olav Åsteson,
han la seg ned um jólekvelden stærke,
- for de soli kjem-
han vakna 'kje fyrr um trettandagen,
då folkji til kyrkja skulde fara.
- for de lyser på hei, de vegen so lei,
yvir dei djupaste dalar -

Han sette seg upp i sengjestokken,
tok te å fortelja draumane sine.
Eg hev vakje uti trettan nættar
og sovi meg so lang ei svevn,
eg hev vori i himmerik
og dult hjå bånine små."

Analyser visen med fokus på innhold og form.`,
      solution: `**Analyse av "Draumkvedet":**

**Innhold:**
Olav Åsteson sovner julekvelden og våkner ikke før trettendagen (13 dager senere). I søvnen drømmer han seg til de dødes rike og opplever visjoner av himmel og helvete. Når han våkner, forteller han om det han har sett.

**Sjanger:**
Draumkvedet er en visjonsdiktning - en reise til det hinsidige - som blander norrøn folketro med kristne forestillinger. Det er unikt i nordisk tradisjon.

**Omkvedet:**
"- for de soli kjem" og "- for de lyser på hei, de vegen so lei, / yvir dei djupaste dalar -"

Omkvedet skaper stemning med naturbilder. "Soli kjem" varsler lysning, oppvåkning. "Lyser på hei" antyder at det skinner et lys selv over de dypeste daler - håp og frelse.

**Språk:**
Visen er på telemarksdialekt, noe som ble viktig for målrørsla. Språket er arkaisk og poetisk.

**Kristne og norrøne elementer:**
- Kristent: Himmelrik, dom, frelse
- Norrønt: Gjallarbrua, Grotti-Gråskjegg (hedenske skikkelser)

Blandingen viser hvordan førkristen og kristen tro sameksisterte i folkereligiøsiteten.

**Symbolikk:**
- De 13 nettene: Julens hellige tid, overgangstid
- Drømmen: Portal til det usynlige
- Veien: Livets og dødens vei

**Litterær status:**
Draumkvedet regnes som norsk litteraturs fremste folkevise - et mesterstykke i visjonær dikting som har inspirert kunstnere fra Ibsen til Nils Aslak Valkeapää.`,
    },
    {
      id: 'norsk-vg2-3-8-example-2',
      type: 'example',
      title: 'Eksempel: "Margit Hjukse" (trollvise)',
      problem: `Les begynnelsen av trollvisen "Margit Hjukse":

"Margit Hjukse ho sette seg ned
- og der er inkje mannen min -
ho ville gjera skomakarverk
- å vi sòm elska upp i Lilja -

Berget det let seg upp sò vidt,
der reid so fager ein svein der ut.

Han kom seg ridand i garden inn
og batt sin gangar ve' lindi grøn.

'Høyr du, Margit, kva eg spør deg om:
vil du med meg til berget gonge?'"

Analyser visen som trollvise.`,
      solution: `**Analyse av "Margit Hjukse":**

**Sjanger - trollvise:**
Trollviser handler om møter mellom mennesker og overnaturlige vesener - troll, hulder, nøkken, bergfolk. Ofte er det en erotisk undertone: De overnaturlige lokker mennesker med seg.

**Handlingen:**
Margit sitter og arbeider. Berget åpner seg, en vakker mann (bergmann/huldrekall) rir ut og frister henne til å følge med inn i berget. Visen fortsetter med at hun lokkes og tas.

**Omkvedet:**
"- og der er inkje mannen min -" (Mannen hennes er borte)
"- å vi sòm elska upp i Lilja -" (Vi som elsket opp i Lilja)

Disse mystiske linjene skaper stemning. De antyder lengsel og fravær.

**Symbolikk:**
- *Berget:* Det ukjente, det farlige, det forførende
- *Gangaren:* Hesten - tegn på makt og ridderlighet
- *Lindi grøn:* Lindetre - tradisjonelt møtested og hellig tre

**Trollvisenes budskap:**
Visene advarer mot å la seg lokke av det ukjente. De forteller om farene i grenselandet mellom menneske- og trollverden. Samtidig uttrykker de en dragning mot det forbudte.

**Struktur:**
- Situasjon etableres (Margit sitter alene)
- Det overnaturlige bryter inn (berget åpner seg)
- Fristelsen (vil du med meg?)
- Konflikten (skal hun gå eller bli?)

**Formler:**
"Berget det let seg upp" er en fast vending i trollviser. Den signaliserer at noe overnaturlig skjer.`,
    },
    {
      id: 'norsk-vg2-3-8-tip-1',
      type: 'tip',
      title: 'Tips for analyse av folkeviser',
      content: `**Slik analyserer du en folkevise:**

**1. Identifiser type:**
Er det ridderballade, kjempevise, trollvise, historisk vise?

**2. Kartlegg handlingen:**
Hva skjer? Hvem er personene? Hva er konflikten?

**3. Analyser omkvedet:**
Hva sier det? Hvordan skaper det stemning? Gjentas det likt eller med variasjon?

**4. Se på stilen:**
- Formler og faste uttrykk?
- Dialogform?
- Dramatisk konsentrasjon?
- Symboler?

**5. Finn symbolikken:**
Hva kan naturobjekter og handlinger symbolisere?

**6. Vurder tema:**
Kjærlighet? Død? Skjebne? Lojalitet? Møte med det overnaturlige?

**7. Tenk på kontekst:**
- Når ble visen skapt (middelalderen)?
- Når ble den samlet inn (1800-tallet)?
- Hvordan ble den brukt i nasjonalromantikken?

**8. Sammenlign:**
Finnes lignende viser fra andre land? Hva er særnorsk?

**Les gjerne visene høyt** - de var ment for sang og får ny mening når de fremføres.`,
    },
    {
      id: 'norsk-vg2-3-8-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: «Draumkvedet»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-8-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_DRAUMKVEDET}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-8-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: «Margit Hjukse»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-8-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_MARGIT_HJUKSE}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser folkevisesjangeren.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner folkevisen som sjanger?',
            solution: 'Muntlig overlevering, fortellende innhold, fast form med strofer og omkved, anonymt opphav, dramatisk konsentrasjon, bruk av formler og symboler.',
          },
          {
            label: 'b',
            task: 'Hvilke typer folkeviser finnes, og hva handler de om?',
            solution: 'Ridderballader (adelsfolk, kjærlighet), kjempeviser (helter mot troll), trollviser (møter med overnaturlige), naturmytiske viser (naturens makter), historiske viser (virkelige hendelser).',
          },
          {
            label: 'c',
            task: 'Hvorfor var innsamlingen av folkeviser viktig for nasjonalromantikken?',
            solution: 'Folkevisene beviste at Norge hadde egen rik kultur. De var på norsk dialekt og støttet argumenter for et norsk skriftspråk. De ga kunstnere nasjonal inspirasjon.',
          },
        ],
        solution: 'Folkevisene er en rik arv fra middelalderen som ble gjenoppdaget og brukt i nasjonsbyggingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Arbeid med Draumkvedet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva forteller Draumkvedet om?',
            solution: 'Olav Åsteson sovner julekvelden og sover i 13 netter. I drømmen reiser han til de dødes rike og ser visjoner av himmel og helvete. Han forteller om det når han våkner.',
          },
          {
            label: 'b',
            task: 'Hvordan blander Draumkvedet norrøne og kristne elementer?',
            solution: 'Kristne elementer: himmelrik, dom, frelse. Norrøne elementer: Gjallarbrua, Grotti-Gråskjegg. Blandingen viser folkereligiøsitetens sammensmeltning av gammel og ny tro.',
          },
          {
            label: 'c',
            task: 'Hva er omkvedets funksjon i Draumkvedet?',
            solution: 'Omkvedet ("for de lyser på hei...") skaper stemning og gir pusterom mellom strofene. Det antyder håp (lys) midt i mørket (de dypeste daler). Det binder visen sammen.',
          },
        ],
        solution: 'Draumkvedet er et unikt mesterverk som viser norsk middelalderkultur på sitt rikeste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign folkeviser med moderne tekster.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en moderne sang (vise, popsang) som handler om kjærlighet eller møte med det ukjente. Sammenlign med en folkevise.',
            solution: 'Svar vil variere. Se på: fortellerteknikk, bruk av symboler, refrengets funksjon, stemning. Er den moderne sangen mer direkte? Bruker folkevisen mer antydning?',
          },
          {
            label: 'b',
            task: 'Finnes det moderne artister som bruker folkevisetradisjonen? Gi eksempler.',
            solution: 'Eksempler: Gåte, Wardruna, Sinikka Langeland, Odd Nordstoga. Disse henter melodier, tekster eller stemning fra folkemusikken.',
          },
        ],
        solution: 'Folkevisetradisjonen lever videre og inspirerer moderne kunstnere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et omkved i en folkevise?',
        options: [
          'Tittelen på visen',
          'En fast del som gjentas etter hver strofe',
          'Det siste verset i visen',
          'En forklaring av handlingen',
        ],
        answer: 1,
        solution: 'Omkved (refreng) er en fast del som gjentas etter hver strofe i en folkevise. Det kan være naturbilder ("- for det lyser på hei"), nonsens-linjer eller tematiske kommentarer. Omkvedet skaper stemning og gir pusterom mellom strofene.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken person var viktigst for innsamlingen av norske folkeviser?',
        options: [
          'Henrik Wergeland',
          'Peter Christen Asbjørnsen',
          'Magnus Brostrup Landstad',
          'Ivar Aasen',
        ],
        answer: 2,
        solution: 'Magnus Brostrup Landstad (1802-1880) ga ut "Norske Folkeviser" i 1853, den viktigste samlingen av norske folkeviser. Asbjørnsen og Moe samlet eventyr, ikke folkeviser. Aasen samlet dialekter. Wergeland skrev originallyrikk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les primærteksten "Margit Hjukse". Beskriv med egne ord hva som skjer i åpningen av visen.',
        solution: 'Margit sitter og arbeider (gjør skomakerarbeid). Plutselig åpner berget seg, og en vakker ung mann rir ut. Han rir inn på gården, binder hesten sin ved den grønne linden, og spør Margit om hun vil følge med ham inn i berget. Åpningen etablerer en hverdagslig situasjon som brytes av noe overnaturlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-8-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva "dramatisk konsentrasjon" betyr som stilistisk trekk i folkeviser, og gi et eksempel.',
        solution: 'Dramatisk konsentrasjon betyr at folkevisen hopper rett inn i handlingen og fokuserer på høydepunkter. Bakgrunn og forklaring utelates. Eksempel: I "Margit Hjukse" får vi ingen forklaring på hvem bergmannen er eller hvorfor berget åpner seg. Vi kastes rett inn i den dramatiske situasjonen. Dette gjør visene intense og spennende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-8-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser symbolspråket i "Margit Hjukse". Hva symboliserer berget, gangaren og linden?',
        hints: ['Tenk på faste symboler i folkevisetradisjonen.'],
        solution: 'Berget symboliserer det ukjente, farlige og forførende - trollverdenen som lokker mennesker. Gangaren (hesten) symboliserer makt, ridderlighet og status - bergmannen er fristende fordi han virker mektig. Linden (lindi grøn) er tradisjonelt knyttet til kjærlighet, møtested og hellig grunn. Sammen skaper symbolene en scene der det forbudte og farlige presenteres som vakkert og lokkende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-8-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft Draumkvedets litterære status. Hvorfor regnes det som den fremste norske folkevisen?',
        hints: [
          'Tenk på innhold, form, symbolikk og kulturhistorisk betydning.',
          'Hva gjør det unikt sammenlignet med andre folkeviser?',
        ],
        solution: 'Draumkvedet er unikt fordi det kombinerer visjonær dikting (Dantes "Den guddommelige komedie" i folkeviseform), norrøn og kristen mytologi, poetisk kraft og dypt symbolspråk. Det er lengre og mer komplekst enn de fleste folkeviser. Det blander høy og lav kultur, norsk dialekt og universelle temaer. Kulturhistorisk var det viktig for nasjonalromantikken som bevis på at norsk folkekultur var rik og unik.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-8-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyse (300-400 ord) av enten Draumkvedet eller "Margit Hjukse" der du bruker fagbegreper om folkevisesjangeren.',
        hints: [
          'Bruk begreper som folkevise, omkved, strofe, formler, symbolspråk, dramatisk konsentrasjon.',
          'Pek på både form og innhold.',
        ],
        solution: 'Analysen bør inneholde: Sjanger-identifikasjon, analyse av handlingen, formanalyse (strofer, omkved, rim), stilistiske trekk (formler, dialogform, dramatisk konsentrasjon), symbolikk, tematikk, og eventuelt kulturhistorisk kontekst. Fagbegreper bør brukes korrekt og naturlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-8-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om folkeviser fortsatt har relevans i dag. Bruk eksempler på moderne bruk av folkevisetradisjonen.',
        hints: [
          'Tenk på musikk (Gåte, Wardruna), teater, film.',
          'Hva kan vi lære av folkevisetradisjonen?',
        ],
        solution: 'Folkeviser er relevante fordi: (1) De utforsker universelle temaer (kjærlighet, død, det ukjente). (2) Moderne artister som Gåte, Wardruna og Sinikka Langeland bruker tradisjonen aktivt. (3) Folkeviseformen (strofer, refreng, fortelling) lever videre i populærmusikk. (4) De gir innsikt i norsk kulturhistorie. (5) De viser at kunst kan være kollektiv, muntlig og levende. Drøftingen bør også peke på begrensninger: visenes verdensbilde er fremmed for oss, og de krever bakgrunnskunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.9: Språkdebatten - landsmål vs riksmål
// ============================================================================

export const CHAPTER_NORSK_VG2_3_9: TextbookChapter = {
  id: 'norsk-vg2-3-9',
  courseId: 'norsk-vg2',
  chapterNumber: '3.9',
  title: 'Språkdebatten - landsmål mot riksmål',
  description: 'Utforsk den store norske språkstriden fra 1800-tallet og dens ettervirkninger.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for den historiske bakgrunnen for språksituasjonen i Norge i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-3-9-intro',
      type: 'text',
      content: `## Språkstriden - Norges lengste kulturkamp

Ingen annen kulturstrid har vart så lenge eller engasjert så mange i Norge som språkstriden mellom landsmål (nynorsk) og riksmål (bokmål). Denne striden, som begynte på 1800-tallet, har formet norsk kultur, politikk og identitet på avgjørende måter.

**Bakgrunn: Språksituasjonen i 1814**

Da Norge ble selvstendig i 1814, var språksituasjonen slik:

*Skriftspråk:* Dansk var det eneste skriftspråket. All offisiell, kirkelig og litterær bruk var på dansk.

*Talespråk i byene:* Overklassen og borgerskapet snakket en "dannet dagligtale" - dansk påvirket av norsk uttale.

*Talespråk på bygdene:* Bønder og arbeidsfolk snakket norske dialekter som skilte seg sterkt fra dansk.

Denne kløften mellom skrift og tale ble oppfattet som et problem. Norge var en ny nasjon som trengte et nasjonalt språk.

**To veier til fornorsking**

To ulike strategier ble foreslått for å skape et norsk skriftspråk:

*Ivar Aasens vei (landsmål):*
Aasen skapte et helt nytt skriftspråk basert på dialektene, særlig de som hadde bevart mest fra norrønt. Resultatet var landsmålet (fra 1929: nynorsk).

*Knud Knudsens vei (riksmål):*
Knudsen ville fornorske dansken gradvis ved å ta inn norske ord og bøyninger. Resultatet var en gradvis fornorsket dansk som ble til riksmål (fra 1929: bokmål).

**Den tidlige striden (1850-1900)**

I denne perioden ble frontene etablert:

*Landsmålsfolk:*
- Støttet av bondebevegelsen og venstrebevegelsen
- Argumenterte for at bare et språk fra folkedypet var ekte norsk
- Så dansken som et fremmedspråk
- Knyttet språk til demokrati: Folkets språk mot elitens

*Riksmålsfolk:*
- Støttet av byborgerskap og konservative
- Argumenterte for at gradvis fornorsking var mer praktisk
- Så landsmål som kunstig og vanskelig
- Fryktet kulturelt brudd med europeisk tradisjon

**Politisering (1900-1950)**

Språkstriden ble stadig mer politisk:

*1885:* Landsmål og riksmål likestilt som offisielle språk (jamstillingsvedtaket)

*1907, 1917, 1938:* Store rettskrivningsreformer som forsøkte å nærme de to språkene til hverandre ("samnorsktanken")

*1938-reformen:* Den mest radikale, som innførte såkalte "tilnærmingsformer" i begge språk. Skapte voldsom motstand.

Striden ble knyttet til klassekamp og geografi: By mot land, overklasse mot bondestand, Oslo mot resten.

**Etterkrigstiden (1950-1990)**

*Foreldreaksjonene:* På 1950-tallet protesterte foreldre voldsomt mot "samnorsk" i skolebøkene. Bøker ble brent.

*1959 og 1981:* Nye reformer som tonet ned samnorsktanken

*1972:* Språkrådet opprettet for å overvåke normeringen av begge språk

*Sidemål:* Kravet om sidemål i skolen har vært konstant stridstema

**Situasjonen i dag**

Språkstriden er roligere, men ikke over:

- Nynorsk er hovedmål for ca. 12% av elevene
- Bokmål dominerer i medier og offentlighet
- Sidemålsdebatten blusser jevnlig opp
- Dialektene har fått økt status
- Språkdeling (to parallelle normeringer) er akseptert

**Språkstridens betydning**

Striden har hatt store konsekvenser:

1. *To skriftspråk:* Norge er unikt med to offisielle skriftspråk.

2. *Dialektbevissthet:* Nordmenn har stor toleranse for dialektbruk.

3. *Språkpolitisk bevissthet:* Språk er et politisk tema i Norge som nesten ingen andre steder.

4. *Kulturell splittelse:* Striden har bidratt til regionale og sosiale motsetninger.

5. *Rikdom:* To skriftspråk og mange dialekter gir et rikt språklig repertoar.`,
    },
    {
      id: 'norsk-vg2-3-9-def-1',
      type: 'definition',
      title: 'Språkstrid - sentrale begreper',
      content: `**Landsmål / Nynorsk:** Skriftspråket Ivar Aasen skapte basert på dialektene. Heter nynorsk fra 1929.

**Riksmål / Bokmål:** Det fornorskede danske skriftspråket. Heter bokmål fra 1929.

**Samnorsk:** Tanken om å smelte de to språkene sammen til ett. Dominerte språkpolitikken 1917-1970.

**Jamstillingsvedtaket (1885):** Stortingsvedtak om at landsmål og riksmål er likestilte offisielle språk.

**Tilnærmingsformer:** Former som skulle bringe de to språkene nærmere hverandre.

**Sidemål:** Det andre skriftspråket enn elevens hovedmål, som man må lære på skolen.

**Målrørsla:** Bevegelsen for landsmål/nynorsk.

**Riksmålsforbundet:** Organisasjon for riksmål/bokmål.

**Språkrådet:** Statlig organ for språknormering (opprettet 1972).`,
    },
    {
      id: 'norsk-vg2-3-9-def-2',
      type: 'definition',
      title: 'Viktige personer i språkstriden',
      content: `**For landsmål/nynorsk:**

**Ivar Aasen (1813-1896):** Skapte landsmålet. Ga ut grammatikker og ordbøker.

**Aasmund Olavsson Vinje (1818-1870):** Første store forfatter på landsmål. Ga ut bladet "Dølen".

**Arne Garborg (1851-1924):** Fremragende forfatter som skrev på landsmål.

**For riksmål/bokmål:**

**Knud Knudsen (1812-1895):** Forkjemper for gradvis fornorsking av dansk.

**Bjørnstjerne Bjørnson (1832-1910):** Støttet riksmål, men brukte noen nynorske former.

**Arnulf Øverland (1889-1968):** Sterk forsvarer av riksmålet mot samnorsk.

**For samnorsk:**

**Halvdan Koht (1873-1965):** Historiker og politiker som fremmet samnorsktanken.

**Didrik Arup Seip (1884-1963):** Språkforsker og normeringsstrateg.`,
    },
    {
      id: 'norsk-vg2-3-9-example-1',
      type: 'example',
      title: 'Eksempel: Argumenter i språkstriden',
      problem: `Studer disse argumentene fra språkstriden:

**For landsmål:**
"Det danske Skriftsprog er ikke vort; vi have intet Sprog, vi skrive i, som er vort. At skrive i et fremmed Sprog er at være en Slave." (Aasen)

**Mot landsmål:**
"Landsmålet er et kunstprodukt, et sprogsystem som aldrig nogen Normand har talt." (riksmålstilhenger)

Analyser argumentene: Hvilke verdier og perspektiver ligger bak?`,
      solution: `**Analyse av argumentene:**

**Aasens argument:**

*Verdier:* Nasjonal selvstendighet, frihet, autentisitet

*Retorikk:* Sterk patos - "slave" er et følelsesladet ord. Aasen appellerer til nasjonalfølelse.

*Logikk:* Premisset er at et folk må ha sitt "eget" språk for å være fritt. Dansk er "fremmed", ergo er vi slaver.

*Svakheter:* Er det virkelig slik at man er "slave" av å bruke et annet skriftspråk? Mange folk har klart seg godt med "lånte" skriftspråk.

**Motargumentet:**

*Verdier:* Praktisk, historisk kontinuitet, tradisjon

*Retorikk:* "Kunstprodukt" er negativt ladet - antyder noe unaturlig og konstruert.

*Logikk:* Premisset er at et ekte språk må være naturlig vokst, ikke konstruert. Landsmål er konstruert, ergo er det ikke ekte.

*Svakheter:* Alle standardspråk er i noen grad konstruerte. Også riksmålet ble normert og regulert.

**Felles for begge:**

Begge argumenter appellerer til hva som er "ekte" og "naturlig". Striden handlet mye om identitet: Hva er ekte norsk? Hvem representerer det norske folk?

**Lærdommen:**
Språkdebatten handler aldri bare om språk. Den handler om makt, identitet og hvem som får definere hva nasjonen er.`,
    },
    {
      id: 'norsk-vg2-3-9-tip-1',
      type: 'tip',
      title: 'Tips for å forstå språkstriden',
      content: `**Nøkler til å forstå språkstriden:**

**1. Det handlet om mer enn språk:**
Striden var også en kamp om klasse, region og makt. Hvem skulle definere hva Norge var?

**2. Begge sider hadde poenger:**
Landsmålsfolk hadde rett i at det danske var fremmed for mange. Riksmålsfolk hadde rett i at det var praktiske problemer med et nytt språk.

**3. Begge språk er norske:**
I dag er både bokmål og nynorsk norske språk med lang historie og rik litteratur.

**4. Striden har formet oss:**
Norges unike språksituasjon, dialekttoleranse og språkpolitiske bevissthet kommer fra denne striden.

**5. Den er ikke over:**
Sidemålsdebatten, nynorskprosenten og språkpolitikk generelt viser at spørsmålene fortsatt engasjerer.

**Når du analyserer tekster fra striden:**
- Hvem taler? Hvilken side?
- Hvilke verdier appelleres det til?
- Hvilke retoriske virkemidler brukes?
- Hva er sterke og svake sider ved argumentasjonen?`,
    },
    {
      id: 'norsk-vg2-3-9-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen – «Om vort Skriftsprog»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-3-9-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_AASEN_OM_VORT_SKRIFTSPROG}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-3-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar språkstridens bakgrunn.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan var språksituasjonen i Norge i 1814?',
            solution: 'Dansk var eneste skriftspråk. Overklassen snakket dannet dagligtale, bønder snakket dialekter. Det var stor avstand mellom skrift og tale for mange.',
          },
          {
            label: 'b',
            task: 'Hva var forskjellen på Aasens og Knudsens tilnærming til et norsk skriftspråk?',
            solution: 'Aasen ville bygge nytt skriftspråk fra dialektene (landsmål). Knudsen ville fornorske dansken gradvis (riksmål/bokmål).',
          },
          {
            label: 'c',
            task: 'Hvilke sosiale grupper støttet de ulike sidene, og hvorfor?',
            solution: 'Landsmål: Bønder, venstrebevegelsen, distrikter - fordi det var basert på deres talemål. Riksmål: Byborgerskap, konservative - fordi de allerede brukte dette språket.',
          },
        ],
        solution: 'Språkstriden hadde dype sosiale og geografiske røtter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft språkstridens ettervirkninger.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor har Norge to offisielle skriftspråk i dag?',
            solution: 'Jamstillingsvedtaket av 1885 likestilte de to språkene. Samnorsktanken mislyktes, og begge språk har blitt videreført med egne tradisjoner og brukermiljøer.',
          },
          {
            label: 'b',
            task: 'Hva er fordelene og ulempene med to skriftspråk?',
            solution: 'Fordeler: Språklig mangfold, dialekttoleranse, rik litteratur. Ulemper: Merarbeid i skole og forvaltning, splittelse, kostnader.',
          },
          {
            label: 'c',
            task: 'Bør sidemål være obligatorisk i skolen? Gi argumenter for og mot.',
            solution: 'For: Kulturforståelse, språklig kompetanse, demokrati (alle skal kunne lese begge). Mot: Merarbeid, tvang, praktisk unødvendig for mange.',
          },
        ],
        solution: 'Språkstriden har gitt Norge en unik, men også utfordrende språksituasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser språkpolitisk argumentasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Les Aasens argument fra eksempelet. Hvilke retoriske virkemidler bruker han?',
            solution: 'Aasen bruker sterk patos (slave-metaforen), appell til nasjonalfølelse, kontraster (vår/fremmed, fri/slave), og implisitt etos som ekspert på språk.',
          },
          {
            label: 'b',
            task: 'Finn et moderne innlegg i språkdebatten (f.eks. om sidemål). Analyser argumentasjonen.',
            solution: 'Svar vil variere. Se på: Hvilke verdier appelleres til? Hvilke retoriske virkemidler brukes? Er argumentasjonen logisk? Hvem er målgruppen?',
          },
        ],
        solution: 'Språkdebatter bruker ofte følelsesladede argumenter fordi språk er knyttet til identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var jamstillingsvedtaket?',
        options: [
          'En lov som forbød nynorsk',
          'Et stortingsvedtak om at landsmål og riksmål er likestilte offisielle språk',
          'En avtale mellom Aasen og Knudsen',
          'En rettskrivningsreform',
        ],
        answer: 1,
        solution: 'Jamstillingsvedtaket av 1885 var et stortingsvedtak som likestilte landsmål og riksmål som offisielle skriftspråk i Norge. Det var en viktig seier for målrørsla og grunnlaget for at Norge i dag har to offisielle skriftspråk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var "samnorsktanken"?',
        options: [
          'At alle nordmenn skulle snakke same',
          'At bokmål og nynorsk skulle smeltes sammen til ett språk',
          'At Norge skulle dele språk med Sverige og Danmark',
          'At alle dialekter skulle erstattes med ett talespråk',
        ],
        answer: 1,
        solution: 'Samnorsktanken var ideen om at bokmål og nynorsk gradvis skulle nærme seg hverandre og til slutt smeltes sammen til ett norsk skriftspråk. Tanken dominerte språkpolitikken fra ca. 1917 til 1970, men mislyktes på grunn av sterk motstand fra begge sider.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les primærteksten "Om vort Skriftsprog". Hva er Aasens hovedpoeng i denne teksten?',
        hints: ['Se etter argumenter om forholdet mellom skriftspråk og talespråk.'],
        solution: 'Aasens hovedpoeng er at det norske folket mangler et eget skriftspråk som samsvarer med deres talespråk. Dansken er et fremmed språk for nordmenn, og et folk trenger et skriftspråk som er deres eget. Aasen argumenterer for at et slikt språk kan og bør skapes på grunnlag av de norske dialektene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-9-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en tidslinje over de viktigste hendelsene i den norske språkstriden fra 1814 til i dag.',
        hints: ['Bruk informasjonen fra teoridelen. Ta med minst 8 hendelser.'],
        solution: 'Tidslinjen bør inneholde: 1814 - Norge selvstendig, dansk skriftspråk. 1848 - Aasens "Det norske Folkesprogs Grammatik". 1850 - Aasens ordbok. 1853 - Landstads folkevisesamling. 1885 - Jamstillingsvedtaket. 1907, 1917, 1938 - Rettskrivningsreformer. 1929 - Navnene nynorsk og bokmål innføres. 1950-tallet - Foreldreaksjoner. 1972 - Språkrådet opprettes. 2012 - Ny bokmålsrettskriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-9-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor språkstriden ble en klassekamp. Bruk eksempler fra pensum.',
        solution: 'Språkstriden ble en klassekamp fordi de to sidene representerte ulike sosiale grupper: Landsmål ble støttet av bønder, arbeidsfolk og distrikts-Norge, mens riksmål ble støttet av byborgerskap, overklasse og Østlandet. Språkvalg ble et uttrykk for sosial tilhørighet. Å snakke dannet dagligtale eller dialekt, å skrive riksmål eller landsmål, var ikke bare språkvalg - det var identitetsmarkører. Venstrebevegelsen knyttet landsmålet til demokrati: folkets språk mot elitens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-9-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvorfor mislyktes samnorsktanken? Gi minst tre grunner.',
        solution: 'Samnorsktanken mislyktes fordi: (1) Sterk motstand fra begge sider - både nynorsk- og bokmålsfolk ville bevare sine språk. (2) Foreldreaksjoner på 1950-tallet der foreldre nektet å akseptere "samnorske" lærebøker. (3) Identitetsspørsmålet - folk følte at språket deres var en del av hvem de var, og ville ikke gi det opp. (4) Praktiske problemer - det er vanskelig å smelte to etablerte skriftspråk sammen. (5) Politisk kursendring - myndighetene ga opp tilnærmingspolitikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-9-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: "Språkstriden har vært en berikelse for norsk kultur, ikke en belastning." Bruk argumenter fra pensum.',
        hints: [
          'Tenk på hva striden har gitt oss: to skriftspråk, dialekttoleranse, språklig bevissthet.',
          'Hva har striden kostet: splittelse, merarbeid, konflikter?',
        ],
        solution: 'For: Språkstriden har gitt Norge unikt språklig mangfold, to rike litterære tradisjoner, stor dialekttoleranse, og språkpolitisk bevissthet. To skriftspråk er en kulturell rikdom. Mot: Striden har kostet mye i form av kulturell splittelse, politisk konflikt, merarbeid i skole og forvaltning, og tidvis bitter uvilje. Drøftingen bør konkludere med at svaret avhenger av perspektiv, men at Norge har vunnet mer enn det har tapt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-9-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort debattinnlegg (300-400 ord) der du argumenterer for eller mot obligatorisk sidemål i skolen. Bruk retoriske virkemidler bevisst.',
        hints: [
          'Velg en side og argumenter konsekvent.',
          'Bruk etos, patos og logos.',
          'Tenk på hvem som er målgruppen.',
        ],
        solution: 'Innlegget bør ha klar struktur: innledning med tydelig standpunkt, argumenter med begrunnelse, motargumenter som imøtegås, og en konklusjon. Det bør bruke retoriske virkemidler bevisst: etos (troverdighet), patos (følelsesappell), logos (logisk argumentasjon). Innholdet vurderes etter argumentasjonens kvalitet, ikke etter standpunktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.10: Romantikkens etterliv - fra 1800-tallet til i dag
// ============================================================================

export const CHAPTER_NORSK_VG2_3_10: TextbookChapter = {
  id: 'norsk-vg2-3-10',
  courseId: 'norsk-vg2',
  chapterNumber: '3.10',
  title: 'Romantikkens etterliv - fra 1800-tallet til i dag',
  description: 'Utforsk hvordan romantiske ideer og motiver lever videre i moderne kultur, fra nasjonalsymboler til populærkultur.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
    'lese norrøne tekster i oversettelse og sammenligne dem med tekster fra nyere tid',
  ],
  content: [
    {
      id: 'norsk-vg2-3-10-intro',
      type: 'text',
      content: `## Romantikkens lange etterliv

Romantikken som litterær epoke varte fra ca. 1800 til 1850, men de romantiske ideene lever videre den dag i dag. Hver gang vi feirer 17. mai, ser en naturfilm, leser fantasy eller kjenner lengsel etter fjell og fjorder, bader vi i romantikkens etterliv.

**Hvorfor lever romantikken videre?**

Romantikken skapte forestillinger og verdier som har blitt dypt forankret i norsk og vestlig kultur:

*Naturen som kilde til mening:* Tanken om at naturen gir oss noe som det moderne livet ikke kan gi - ro, ekthet, åndelig fornyelse.

*Det nasjonale som identitet:* Forestillingen om at vi tilhører et folk med felles kultur, historie og karaktertrekk.

*Følelsenes verdi:* Ideen om at følelser er mer ekte og viktige enn ren fornuft.

*Lengsel som livsholdning:* En romantisk lengsel etter noe mer, noe annet, noe tapt.

Disse ideene har blitt så selvfølgelige at vi knapt legger merke til dem - men de former hvordan vi tenker om oss selv, naturen og nasjonen.`,
    },
    {
      id: 'norsk-vg2-3-10-section-1',
      type: 'text',
      content: `## Romantiske motiver i moderne kultur

**Naturlengsel i musikk, film og litteratur**

Fra romantikken arvet vi forestillingen om naturen som et tilfluktssted fra det moderne livets stress og fremmedgjoring. Denne lengselen gjennomsyrer moderne kultur:

*Musikk:* Fra Griegs fjellmotiver til a-has "Hunting High and Low", fra Aurora til Wardruna - norsk musikk dyrker stadig naturbilder. Elektronisk musikk bruker naturl yder, og musikkvideore filmes i dramatiske naturlandskaper.

*Film:* Naturfilmer som David Attenboroughs dokumentarer skildrer naturen med romantisk ærfrykt. Norske filmer som "Trolljegeren" og "Villmark" spiller på forholdet mellom menneske og natur. Hollywood-filmer som "Into the Wild" og "The Revenant" bygger på romantisk naturlengsel.

*Litteratur:* Romanfigurer som søker ut i naturen for a finne seg selv - fra Karl Ove Knausgards skildringer til friluftslivslitteraturens boom. Naturessayet har opplevd en renessanse med forfattere som Robert Macfarlane og norske Erling Kagge.

**Det sublime i moderne medier**

Romantikkens begrep om det sublime - naturens overveldende storhet som vekker bade frykt og henrykkelse - lever videre i:

*Ekstremfilming:* Dronebilder over fjorder, tidssunkebilder av nordlys, surfere i monsterbolgcr - moderne medier soker stadig det sublime.

*Naturdokumentarer:* Planet Earth-serien viser naturens storhet i 4K-opplosning med dramatisk musikk - en direkte arv fra romantikkens naturbeundring.

*Sosiale medier:* Instagram-bilder fra Trolltunga og Preikestolen er moderne versjoner av romantikkens landskapsmaleri.

*Reklame:* Bilindustrien viser kjoretoyer i dramatiske landskap, friluftsmerker bruker fjell og vidder - det sublime selger.

**Nasjonalromantikk og identitet i dag**

Forestillingen om en saeregen norsk identitet knyttet til natur, frihet og folkekultur er direkte arv fra 1800-tallets nasjonalromantikk:

*"Det typisk norske":* Skitur, hytteliv, brunost, tradisjonsmat - mange av tingene vi tenker pa som "typisk norske" ble konstruert eller fremhevet i nasjonalromantikken.

*Dialektbevissthet:* Den norske stoltheten over dialekter og motstanden mot et standardisert talesprak har rotter i romantikkens interesse for folkesprak.

*Bygderomantikk:* Forestillingen om bygda som mer "ekte" enn byen, bonden som barer av norsk tradisjon - dette er nasjonalromantiske ideer.`,
    },
    {
      id: 'norsk-vg2-3-10-def-1',
      type: 'definition',
      title: 'Romantikkens etterliv - sentrale begreper',
      content: `**Kulturarv:** De ideer, tradisjoner og uttrykk vi har arvet fra fortiden og videreforer.

**Nasjonale symboler:** Ting, handlinger eller forestillinger som representerer nasjonen (flagg, bunad, 17. mai).

**Tradisjon:** Praksis eller forestillinger som overfores fra generasjon til generasjon.

**Konstruert tradisjon:** Tradisjoner som fremstar som urgamle, men som er nyere enn vi tror (jf. Eric Hobsbawm).

**Nostalgi:** Lengsel etter en (idealisert) fortid.

**Autentisitet:** Forestillingen om noe ekte, uforfalskct og opprinnelig - et sentralt romantisk ideal.

**Kulturell appropriasjon:** Nar elementer fra en kultur brukes av en annen, ofte med problematiske konsekvenser.

**Mytologisering:** A gjore noe til myte, ofte ved a idealisere eller forenkle.`,
    },
    {
      id: 'norsk-vg2-3-10-section-2',
      type: 'text',
      content: `## Nasjonalsymboler fra romantikken

**Bunaden og folkedrakten**

Bunaden slik vi kjenner den i dag, er ikke en direkte videreføring av historiske folkedrakter. Den er i stor grad et produkt av nasjonalromantikken:

*Historien:* Pa 1800-tallet begynte Hulda Garborg og andre a rekonstruere og standardisere lokale drakter. Mange bunader er basert pa fragmenter og bilder, ofte med betydelig kunstnerisk frihet.

*Symbolikken:* Bunaden ble et symbol pa lokal og nasjonal identitet. A ga i bunad er a vise tilhørighet til et sted og en tradisjon.

*I dag:* Bunaden er Norges mest brukte festplagg. Den har fatt fornyet popularitet, særlig blant unge. Samtidig diskuteres spørsmål om hvem som "har lov" til a ga i bunad.

**17. mai-feiringen**

Nasjonaldagsfeiringen er romantikkens arv i praksis:

*Historien:* Feiringen utviklet seg pa 1800-tallet. Henrik Wergeland var sentral i a skape barnetogstradisjonen (fra 1820-tallet). Feiringen var lenge politisk omstridt.

*Romantiske elementer:* Flagg, bunader, barnetog, nasjonalsanger, taler om frihet og fedreland - alt dette er gjennomfort romantisk nasjonalisme i praksis.

*I dag:* 17. mai er kanskje Norges mest samlende tradisjon, men feiringen reiser ogsa sporsmål: Hvem inkluderes? Hvordan feire i et flerkulturelt Norge?

**Friluftsliv som norsk identitet**

Forestillingen om nordmenn som et friluftsfolk er nasjonalromantisk konstruksjon:

*Historien:* Pa 1800-tallet ble fjellvandring, ski og friluftsliv koblet til norsk nasjonal identitet. Fridtjof Nansen ble et nasjonalikon.

*"Ut pa tur, aldri sur":* Mottoet oppsummerer en nasjonal ideologi om at nordmenn elsker uteliv uansett vær.

*I dag:* Friluftsliv er fortsatt sentralt i norsk selvforstaelse. Allemannsretten, hyttekultur og DNT er institusjonalisert nasjonalromantikk.

**Hvorfor Grieg og "I Dovregubbens hall" er overalt**

Edvard Griegs musikk er blitt et lydspor til "det norske":

*Peer Gynt:* Suiten til Ibsens "Peer Gynt" (1875) bruker norsk folkemusikk og naturskildringer. "Morgenstemning" og "I Dovregubbens hall" er blant verdens mest kjente klassiske stykker.

*Bruken i dag:* Griegs musikk brukes i alt fra flyplassannonsering til vikingrelatert underholdning, naturfilmer og reklame. Den signaliserer "Norge" internasjonalt.

*Hvorfor:* Grieg komponerte bevisst "norsk" musikk med folkemusikkinspirerte melodier og harmonier. Han lyktes sa godt at musikken hans har blitt synonymt med Norge.`,
    },
    {
      id: 'norsk-vg2-3-10-example-1',
      type: 'example',
      title: 'Eksempel: Romantikk i turismemarkedsforing',
      problem: `Analyser denne fiktive reklameteksten for Visit Norway:

"Opplev det ekte Norge. Her, der fjordene skjærer seg inn mellom urgamle fjell, finner du deg selv. Bort fra storbyens stress, inn i stillheten. Vandre i forfedrenes fotspor. Pust inn friheten. Norge - slik det alltid har vært."

Hvilke romantiske motiver og ideer finner du?`,
      solution: `**Analyse av romantiske elementer:**

**Autentisitet:**
"Det ekte Norge" - forestillingen om at det finnes noe opprinnelig og uforfalsket Norge, i motsetning til det "uekte" moderne.

**Naturlengsel:**
Fjorder og fjell presenteres som motpol til "storbyens stress". Naturen tilbyr noe byen ikke kan gi.

**Det sublime:**
"Urgamle fjell" - naturens tidlose storhet som gjor mennesket lite, men ogsa frigjort.

**Selvfinning gjennom natur:**
"Finner du selv" - romantikkens ide om at naturen gir innsikt og selverkjennelse.

**Nasjonalromantikk:**
"Forfedrenes fotspor" - kobling til fortid og tradisjon. Det norske som tidløst.

**Frihet:**
"Pust inn friheten" - naturen som frihetens sted, borte fra sivilisasjonens begrensninger.

**Essensialisme:**
"Slik det alltid har vært" - forestillingen om et uforanderlig, essensielt Norge.

**Kritisk refleksjon:**
Reklamen idealiserer og forenkler. Den utelater moderne Norge, klimaendringer, turismens miljøbelastning. Den konstruerer et bilde av Norge som appellerer til turister, men er det sant?`,
    },
    {
      id: 'norsk-vg2-3-10-section-3',
      type: 'text',
      content: `## Romantikk i populærkultur

**Fantasy-sjangeren**

Fantasy-litteratur og -film er kanskje den tydeligste arven fra romantikken i populærkulturen:

*Tolkien og middelalderromantikk:* J.R.R. Tolkiens "Ringenes Herre" er gjennomfort romantisk: naturbesjeling, middelaldernostalgi, folkevise-inspirert språk, det gode mot det onde. Tolkien var selv inspirert av norrøn litteratur.

*Game of Thrones:* George R.R. Martins univers kombinerer romantiske elementer (middelalder, drager, magi) med moderne realisme (vold, politikk, moralsk tvetydighet).

*Norron mytologi i populærkultur:* Marvel's Thor, God of War-spillene, Vikings-serien - norrøn mytologi har fatt en global renessanse, ofte med romantisert fremstilling.

*Hvorfor fantasy appellerer:* Sjangerens popularitet kan ses som moderne Sehnsucht - en lengsel etter en annen, mer meningsfull verden enn var egen.

**Naturfilmer og dokumentarer**

Naturfilmens suksess er romantikkens naturbeundring i ny drakt:

*Planet Earth og Blue Planet:* David Attenboroughs serier viser naturen som sublim, vakker og truet. Musikken understreker folelsene. Mennesket er nesten fraværende.

*Norske naturfilmer:* Fra Ivo Caprinos "Flaklypa Grand Prix" naturbilder til moderne dronefilmer - norsk film dyrker landskapet.

*Miljobevegelsens estetikk:* Naturfilmen har ogsa et budskap: Dette vakre er truet. Romantisk naturbeundring brukes for a fremme miljøvern.

**Miljobevegelsen og naturromantikk**

Moderne miljøbevegelse har sterke romantiske røtter:

*Naturen som verdi i seg selv:* Romantikkens ide om at naturen har egenverdi - ikke bare nytteverdi - er grunnleggende for miljøetikk.

*Sivilisasjonskritikk:* Tanken om at det moderne samfunnet er pa feil kurs og ødelegger noe verdifullt, er romantisk i sin struktur.

*"Tilbake til naturen":* Okolandsby-bevegelsen, permakultur, slow food - mange miljøinitiativer har nostalgisk lengsel etter et mer "naturlig" liv.

*Kritikk:* Noen mener miljobevegelsens romantisering av "uberørt natur" ignorerer at mennesker alltid har påvirket naturen, og at det kan fore til a skyve urfolk vekk fra verneomrader.

**"Det norske" i reklame og turisme**

Nasjonalromantikk selger:

*Turisme:* Visit Norway markeds forer Norge med fjorder, fjell, nordlys og tradisjoner. Vikingene er blitt merkevare.

*Matkultur:* "Tradisjonell norsk mat", gårdsmat, kortreist - matbransjen bruker nostalgi og autentisitet.

*Mote:* Bunadsdetaljer i moderne design. Norske tradisjonsmønstre på klær. Strikkegenseren som ikon.

*Dilemma:* Hva skjer når romantisert norskhet blir vare? Er det problematisk at tradisjoner kommersialiseres?`,
    },
    {
      id: 'norsk-vg2-3-10-section-4',
      type: 'text',
      content: `## Kritisk blikk på romantikken

**Nasjonalromantikk og ekskludering**

Nasjonalromantikkens ideer om folkeand og nasjonal egenart har en problematisk side:

*Hvem er "folket"?* 1800-tallets nasjonalromantikk definerte det norske snevert: Bonden, fjellheimen, folketradisjonen. Byfolk, samer, romanifolk, innvandrere - mange falt utenfor.

*"Det typisk norske":* Når vi definerer noe som "typisk norsk", definerer vi ogsa hva som ikke er det. Det kan virke ekskluderende.

*Historisk eksempel:* Nasjonalromantiske ideer om folkerenhet ble misbrukt politisk - ogsa i Norge. Fornorskingspolitikken overfor samer var delvis begrunnet i nasjonalromantisk tankegods.

*Dagsaktualitet:* Debatter om "norske verdier", hvem som er "ekte norsk", og hva som truer "norsk kultur" - har fortsatt nasjonalromantiske undertoner.

**Idealisering vs. virkelighet**

Romantikken idealiserte - og vi gjor det fortsatt:

*Bondesamfunnet:* Romantikerne idealiserte bøndene som bærere av ekte norsk kultur. I virkeligheten var livet hardt, fattig og preget av ulikhet.

*Naturen:* Vi romantiserer "uberørt natur", men naturen er ogsa farlig, kald og likegyldig. Og "uberørt" natur finnes knapt.

*Fortiden:* Romantisk nostalgi fremstiller fortiden som bedre. Men ville vi egentlig bytte vår tid med 1800-tallets Norge?

*Konsekvens:* Idealisering kan gjøre oss blinde for reelle problemer, bade i fortiden og nåtiden.

**Hvem fikk definere "det norske"?**

Nasjonalromantikken var et eliteprosjekt:

*Forfattere og kunstnere:* Det var embetsmenn, akademikere og kunstnere som samlet folkeviser, skapte landsmålet og definerte hva som var verdifullt i norsk kultur.

*Bøndene selv:* De bøndene som ble gjort til bærere av "det norske" var ofte ikke selv med pa a definere hva det skulle bety.

*Regionale forskjeller:* Vestlandet og innlandsdalene ble fremhevet, mens Nord-Norge, bykultur og kystkultur kom i skyggen.

*Makt:* Makt til a definere "det nasjonale" var ogsa makt til a bestemme hvem som tilhørte og hvem som falt utenfor.`,
    },
    {
      id: 'norsk-vg2-3-10-tip-1',
      type: 'tip',
      title: 'Tips: Gjenkjenne romantiske motiver',
      content: `**Slik gjenkjenner du romantikkens etterliv:**

**Spor etter naturromantikk:**
- Naturen fremstilles som kilde til mening, fred eller selvfinning
- Det moderne/urbane kontrasteres negativt med det naturlige
- Naturopplevelser beskrives med ærfrykt eller begeistring

**Spor etter nasjonalromantikk:**
- Referanser til "det typisk norske" eller "ekte norsk"
- Kobling mellom natur og nasjonal identitet
- Vektlegging av tradisjoner, fortid, røtter

**Romantisk lengsel:**
- Nostalgi etter en (idealisert) fortid
- Lensel etter noe annet, noe mer, noe tapt
- Misnøye med det moderne, overfladiske, kommersielle

**Kritiske spørsmål du kan stille:**
- Hvem inkluderes og hvem ekskluderes?
- Hva idealiseres, og hva utelates?
- Hvem har makt til a definere "det ekte"?
- Hvilke interesser tjenes av denne fremstillingen?`,
    },
    {
      id: 'norsk-vg2-3-10-section-5',
      type: 'text',
      content: `## Tekstsammenligning: Romantikk da og na

**Wergeland og Welhaven vs. moderne tekster om Norge**

For a forsta romantikkens etterliv kan vi sammenligne 1800-tallets tekster med moderne tekster som handler om Norge, naturen eller det norske.

*Henrik Wergeland (1838):*
Fra "Norges Fjelde":
"O, I Norges fjelde! / Eders stolte helde / skue ned pa fjorden blaa. / Der jeg forst saa dagens lys, / der er det, jeg hvile maa."

*Moderne eksempel - turistreklame (2020):*
"Fjordene. Fjellene. Stillheten. Her finner du det ekte Norge."

*Sammenligning:*
Begge kobler norsk identitet til fjord og fjell. Begge fremstiller naturen som kilde til tilhørighet. Wergeland bruker høystemt poetisk språk, reklamen bruker korte setninger. Begge utelater det moderne Norge.

**Folkeeventyr vs. moderne adaptasjoner**

*Askeladden (tradisjonell):*
Den yngste, enfoldige gutten seirer over trollet gjennom list og flaks.

*"Askeladden - I Dovregubbens hall" (film, 2017):*
Modern actionfilm med spesialeffekter, men samme grunnhistorie og romantisert middelalder-Norge.

*Sammenligning:*
Begge fremstiller en idealisert fortid. Filmen legger til visuell romantikk (natur, drakter, slott). Begge formidler "norske" verdier (snarrådighet, mot). Filmen tilpasser til moderne smak, men beholder romantisk ramme.`,
    },
    {
      id: 'norsk-vg2-3-10-def-2',
      type: 'definition',
      title: 'Sammenligning av tekster - analyseverktøy',
      content: `**Når du sammenligner romantiske tekster fra ulike tider:**

**Motiver:**
Hvilke romantiske motiver finnes? (natur, lengsel, nasjon, det sublime)

**Syn pa naturen:**
Hvordan fremstilles naturen? Hva representerer den?

**Syn på nasjonen:**
Hvordan defineres det norske? Hvem inkluderes?

**Språk og stil:**
Høystemt/hverdagslig? Poetisk/prosaisk? Gammeldags/moderne?

**Kontekst:**
Når er teksten skrevet? Til hvem? Med hvilket formål?

**Idealisering:**
Hva fremheves? Hva utelates? Hva idealiseres?

**Makt og perspektiv:**
Hvem taler? Fra hvilket perspektiv? Hvem tjener på fremstillingen?`,
    },
    {
      id: 'norsk-vg2-3-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn romantiske motiver i populærkulturen.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en film, serie, sang eller bok du kjenner godt. Beskriv kort hva den handler om.',
            solution: 'Svar vil variere. Eksempler: Ringenes Herre (fantasy om kamp mot det onde), Frozen (eventyrfilm med norsk-inspirert setting), en favorittlåt med naturbilder.',
          },
          {
            label: 'b',
            task: 'Hvilke romantiske motiver finner du i verket du valgte? Begrunn med eksempler.',
            solution: 'Se etter: Naturbeundring, lengsel, nasjonalromantikk, middelaldernostalgi, kamp mellom godt og ondt, det sublime, autentisitet vs. modernitet.',
          },
        ],
        solution: 'Romantiske motiver finnes overalt i moderne populærkultur, ofte uten at vi tenker over det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser nasjonalromantiske elementer i reklame.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en norsk reklame (TV, nett, avis) som bruker nasjonalromantiske elementer. Beskriv hva reklamen viser.',
            solution: 'Eksempler kan være: Turistreklame (Visit Norway), matreklame (Tine, Gilde), friluftsutstyr (Bergans, Helly Hansen), bil i norsk natur.',
          },
          {
            label: 'b',
            task: 'Hvilke nasjonalromantiske elementer brukes? Hvorfor tror du de brukes?',
            solution: 'Vanlige elementer: Norsk natur, tradisjoner, bunad, "det ekte", friluftsliv. De brukes fordi de vekker positive folelser og skaper tillit til produktet som "ekte norsk".',
          },
          {
            label: 'c',
            task: 'Diskuter kort: Er det problematisk at nasjonalromantikk brukes for a selge produkter?',
            solution: 'For: Det trivialiserer tradisjoner, skaper falsk nostalgi, kan være ekskluderende. Mot: Det holder tradisjoner levende, skaper fellesskapsfølelse. Reflekter over kommersialiseringens konsekvenser.',
          },
        ],
        solution: 'Nasjonalromantikk er en effektiv reklamestrategi fordi den appellerer til identitet og fellesskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft romantikkens relevans i dag.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi to eksempler pa at romantiske ideer er relevante i var tid.',
            solution: 'Eksempler: Miljøbevegelsens naturvern (natur har egenverdi), friluftsliv som nasjonal identitet, fantasy-sjangerens popularitet, naturlengsel i en digital tid, nasjonalisme i politikken.',
          },
          {
            label: 'b',
            task: 'Gi to eksempler pa problematiske sider ved romantisk tenkning i dag.',
            solution: 'Eksempler: Ekskluderende nasjonalisme ("ekte norsk"), idealisering som skjuler problemer, nostalgi som hindrer endring, romantisert natur som ignorerer klimakrise.',
          },
        ],
        solution: 'Romantikken er bade relevant og problematisk - den gir oss verdifulle ideer, men ogsa blindsoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign en romantisk tekst fra 1800-tallet med en moderne tekst.',
        subTasks: [
          {
            label: 'a',
            task: 'Les Wergelands "Til Foraaret" eller Welhavens "Norges Dæmring" fra tidligere kapitler. Oppsummer hovedinnholdet.',
            solution: 'Wergeland: Vårens komme som symbol pa liv, hap og fornyelse. Naturen personifiseres. Welhaven: Kritikk av norsk kultur, men ogsa lengsel etter en bedre fremtid for nasjonen.',
          },
          {
            label: 'b',
            task: 'Finn en moderne tekst (dikt, sangtekst, reklame) som handler om Norge eller norsk natur. Oppsummer innholdet.',
            solution: 'Svar vil variere. Eksempler: Reklame fra Visit Norway, tekster av norske artister, avisartikler om norsk identitet.',
          },
          {
            label: 'c',
            task: 'Sammenlign de to tekstene. Hva har de felles, og hva er forskjellig?',
            solution: 'Felles: Ofte samme motiver (natur, nasjon, lengsel). Forskjeller: Sprák, stil, kontekst, formal. Den moderne teksten kan være mer ironisk, kommersieli eller flerkulturell.',
          },
        ],
        solution: 'Sammenligning viser at romantiske motiver lever videre, men i nye former og kontekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er "det sublime" i romantisk forstand?',
        options: [
          'Noe vakkert og harmonisk',
          'Naturens overveldende storhet som vekker bade frykt og beundring',
          'En type klassisk arkitektur',
          'En religiøs opplevelse i kirken',
        ],
        answer: 1,
        solution: 'Det sublime er et sentralt begrep i romantikken som beskriver opplevelsen av naturens overveldende storhet - for eksempel a sta ved et mektig fossefall, se ut over et stormfullt hav, eller betrakte enorme fjell. Opplevelsen vekker bade frykt og henrykkelse, og får mennesket til a føle seg lite, men ogsa opploftet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om bunaden er riktig?',
        options: [
          'Bunaden har vært uforandret siden middelalderen',
          'Bunaden ble i stor grad rekonstruert og standardisert pa 1800-tallet',
          'Bunaden ble innført ved lov i 1905',
          'Bunaden er en internasjonal tradisjon',
        ],
        answer: 1,
        solution: 'Bunaden slik vi kjenner den i dag er i stor grad et produkt av nasjonalromantikken pa 1800-tallet. Hulda Garborg og andre arbeidet med a rekonstruere og standardisere lokale drakter. Mange bunader er basert pa fragmenter og bilder, ofte med kunstnerisk fortolkning. Det betyr ikke at bunaden er "falsk", men at den er en del av en bevisst nasjonsbyggingsprosess.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-10-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser bruken av "det norske" i en selvvalgt kontekst.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn et eksempel fra media, politikk eller hverdagsliv der noen snakker om "det norske", "norske verdier" eller "norsk kultur".',
            solution: 'Eksempler kan være politiske debatter, medieoppslag, reklame, sosiale medier-innlegg, eller egne erfaringer fra samtaler.',
          },
          {
            label: 'b',
            task: 'Hvordan defineres "det norske" i dette eksempelet? Hva inkluderes?',
            solution: 'Analyser: Hvilke trekk fremheves (natur, friluftsliv, verdier, tradisjoner)? Hvem nevnes som typiske representanter? Hva presenteres som positivt?',
          },
          {
            label: 'c',
            task: 'Hvem eller hva ekskluderes, bevisst eller ubevisst, fra denne definisjonen?',
            solution: 'Tenk kritisk: Inkluderer definisjonen urbant liv, innvandrere, samer, funksjonshemmede, fattige? Hvem "passer ikke" i bildet som tegnes?',
          },
        ],
        solution: 'Definisjoner av "det norske" bærer alltid med seg nasjonalromantisk arv og har konsekvenser for hvem som føler seg inkludert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-10-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en argumenterende tekst (400-500 ord) der du drøfter følgende påstand: "Romantikkens ideer om natur og nasjon er fortsatt relevante og verdifulle i dag."',
        hints: [
          'Presenter påstanden og gi din foreløpige vurdering.',
          'Gi argumenter FOR at romantiske ideer er verdifulle (naturvern, fellesskap, tradisjon).',
          'Gi argumenter MOT (idealisering, ekskludering, nostalgi som hindrer endring).',
          'Konkluder med en balansert vurdering.',
        ],
        solution: 'En god drøfting bør: (1) Presentere påstanden klart. (2) Argumentere for at romantiske ideer er verdifulle - de gir oss naturrespekt, fellesskapsfølelse, kulturelle røtter. (3) Argumentere for at romantiske ideer kan være problematiske - de kan idealisere, ekskludere, og hindre oss i a se virkeligheten klart. (4) Konkludere balansert - romantiske ideer er verken bare gode eller bare dårlige, det kommer an på hvordan de brukes og av hvem. (5) Bruke konkrete eksempler. (6) Ha god struktur og flyt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.11: Litterær analyse - modeller og metoder
// ============================================================================

export const CHAPTER_NORSK_VG2_3_11: TextbookChapter = {
  id: 'norsk-vg2-3-11',
  courseId: 'norsk-vg2',
  chapterNumber: '3.11',
  title: 'Litterær analyse - modeller og metoder',
  description: 'Lær systematiske metoder for litterær analyse, inkludert SVIRP-modellen, diktanalyse og prosaanalyse.',
  estimatedMinutes: 75,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
  ],
  content: [
    {
      id: 'norsk-vg2-3-11-intro',
      type: 'text',
      content: `## Systematisk litterær analyse

Når du skal analysere en litterær tekst, er det viktig å ha en systematisk tilnærming. Dette kapittelet gir deg verktøy og modeller som hjelper deg å strukturere analysen din, enten det dreier seg om lyrikk, prosa eller drama.

**Hvorfor systematikk?**

En systematisk tilnærming sikrer at du:
- Ikke overser viktige elementer i teksten
- Bygger argumentasjonen din på tekstlige bevis
- Får en rød tråd gjennom analysen
- Kan sammenligne tekster på en meningsfull måte

**Analyse vs. tolkning**

*Analyse* handler om å undersøke hvordan teksten er bygd opp - form, struktur, virkemidler. *Tolkning* handler om å finne mening - hva betyr teksten? En god litterær analyse kombinerer begge deler: Du viser hvordan formen støtter innholdet.

**Kontekstens betydning**

Ingen tekst eksisterer i et vakuum. For å forstå tekster fra romantikken må vi kjenne til:
- Historisk kontekst (nasjonsbygging, 1814)
- Kulturell kontekst (romantikkens ideer)
- Forfatterens bakgrunn og intensjoner
- Sjangertradisjonene teksten forholder seg til`,
    },
    {
      id: 'norsk-vg2-3-11-def-svirp',
      type: 'definition',
      title: 'SVIRP-modellen for litterær analyse',
      content: `**SVIRP** er en analysemodell som gir deg en systematisk tilnærming til enhver tekst:

**S - Sjanger**
Hvilken type tekst er dette? (dikt, novelle, roman, drama, eventyr, essay)
- Hvilke sjangerkonvensjoner følger teksten?
- Bryter teksten med sjangerforventninger?

**V - Virkemidler**
Hvilke litterære grep bruker forfatteren?
- Språklige virkemidler (metafor, simile, personifikasjon, besjeling)
- Lydlige virkemidler (rim, rytme, allitterasjon, assonans)
- Strukturelle virkemidler (komposisjon, kontrast, gjentakelse, rammefortelling)

**I - Innhold**
Hva handler teksten om?
- Ytre handling (hva skjer konkret?)
- Tema (hva handler teksten dypere sett om?)
- Motiver (gjentakende elementer som symboliserer noe)

**R - Relasjon/kontekst**
Hvordan forholder teksten seg til sin samtid?
- Når ble teksten skrevet?
- Av hvem (forfatterens bakgrunn)?
- Til hvem (tenkt publikum)?
- Hvorfor (hva ville forfatteren oppnå)?
- Litteraturhistorisk plassering

**P - Personlig tolkning**
Hva betyr teksten - for deg og generelt?
- Hva er tekstens budskap?
- Hvordan opplever du teksten?
- Er teksten fortsatt relevant i dag?`,
    },
    {
      id: 'norsk-vg2-3-11-text-svirp-utdyping',
      type: 'text',
      content: `### Slik bruker du SVIRP-modellen

**Steg 1: Les teksten flere ganger**
Første gang: Les for helhetsinntrykk. Hva handler teksten om? Hvordan virker den på deg?
Andre gang: Les med blyant. Marker ord, bilder og setninger som virker viktige.
Tredje gang: Les med analysebrillene på. Se etter mønstre og strukturer.

**Steg 2: Gå gjennom SVIRP punkt for punkt**
Ikke hopp over noen bokstav, selv om du synes den er vanskelig. Noen ganger er de vanskeligste punktene de viktigste.

**Steg 3: Se sammenhenger**
SVIRP er ikke en sjekkliste - punktene henger sammen. Virkemidlene (V) støtter innholdet (I). Konteksten (R) påvirker tolkningen (P). Sjangeren (S) styrer forventningene.

**Steg 4: Skriv analysen**
Bruk ikke SVIRP som disposisjon. Analysen din skal ha en rød tråd - et hovedpoeng du argumenterer for. SVIRP gir deg materialet; du må selv forme det til en sammenhengende tekst.

**Vanlige feil:**
- Bare lister opp virkemidler uten å forklare effekten
- Glemmer konteksten
- Har ingen egen tolkning
- Skriver "jeg synes" uten å begrunne`,
    },
    {
      id: 'norsk-vg2-3-11-def-diktanalyse',
      type: 'definition',
      title: 'Strukturert diktanalyse',
      content: `Når du analyserer dikt, er det nyttig å undersøke disse fire områdene systematisk:

**1. Form**
- *Strofer:* Hvor mange? Hvor lange? Er det et mønster?
- *Rim:* Parrim (aa), kryssrim (abab), omsluttende rim (abba), eller frie vers?
- *Rytme:* Fast metrum eller fri rytme? Jambe, trokè, daktyl?
- *Grafisk utforming:* Hvordan ser diktet ut på siden?

**2. Bilder**
- *Metafor:* Sammenligning uten "som" (Livet er en reise)
- *Simile:* Sammenligning med "som" (Hun var som en rose)
- *Personifikasjon:* Menneskelige egenskaper til abstrakte begreper (Døden ventet)
- *Besjeling:* Menneskelige egenskaper til dyr/ting (Treet sukket)
- *Symbol:* Noe konkret som står for noe abstrakt (lys = håp)

**3. Tema og motiv**
- *Tema:* Det abstrakte hovedemnet (kjærlighet, død, natur, identitet)
- *Motiv:* Konkrete, gjentakende elementer (havet, fuglen, hjemmet)
- *Kontraster:* Motsetninger som skaper mening (lys/mørke, liv/død)

**4. Stemning og tone**
- *Stemning:* Den følelsen diktet skaper (melankolsk, begeistret, ironisk)
- *Tone:* Forfatterens holdning til stoffet (alvorlig, humoristisk, kritisk)
- *Lyrisk jeg:* Hvem snakker i diktet? Er det forfatteren?`,
    },
    {
      id: 'norsk-vg2-3-11-text-diktanalyse-tips',
      type: 'text',
      content: `### Tips til diktanalyse

**Les høyt**
Dikt er skrevet for å høres. Rytmen, klangen og pausene kommer frem når du leser høyt. Marker hvor du naturlig stopper - det er ofte meningsbærende.

**Se på tittelen**
Tittelen gir ofte en nøkkel til tolkningen. Hvorfor har dikteren valgt akkurat denne tittelen? Hva lover den leseren?

**Første og siste linje**
Disse er ofte de viktigste. Sammenlign dem - har noe forandret seg? Skaper de en ramme?

**Gjentakelser**
Hva gjentas? Ord, setninger, bilder? Gjentakelse er aldri tilfeldig i dikt - det skaper rytme, understreking eller utvikling.

**Vendepunkter**
Se etter brudd i diktet. Hvor skjer det en endring i tone, perspektiv eller tema? Ord som "men", "likevel", "da" signaliserer ofte vendepunkter.

**Ordvalg**
Hvorfor akkurat dette ordet? Kunne dikteren valgt et annet? Hva er konnotasjonene (assosiasjoner) til ordene som brukes?

**Det som mangler**
Noen ganger er det like interessant hva diktet IKKE sier. Hvilke forventninger skapes som ikke innfris?`,
    },
    {
      id: 'norsk-vg2-3-11-def-prosaanalyse',
      type: 'definition',
      title: 'Prosaanalyse: Fortellerteknikk, komposisjon og skildring',
      content: `Når du analyserer prosa (noveller, romaner), fokuserer du på andre elementer enn i diktanalyse:

**1. Fortellerteknikk og synsvinkel**
- *Førstepersonsforteller:* "Jeg" forteller. Subjektiv, begrenset kunnskap.
- *Tredjepersonsforteller:* "Han/hun" fortelles om.
  - Allvitende: Fortelleren vet alt om alle.
  - Begrenset: Fortelleren følger én karakter.
  - Objektiv: Fortelleren bare observerer, uten innsyn i tanker.
- *Pålitelighet:* Kan vi stole på fortelleren? (Upålitelig forteller)
- *Fortellertempo:* Scene (detaljert) vs. referat (oppsummering)

**2. Komposisjon og struktur**
- *In medias res:* Begynner midt i handlingen
- *Kronologisk:* Følger tidslinjen
- *Rammefortelling:* Fortelling i fortellingen
- *Frampek:* Hint om hva som skal skje
- *Tilbakeblikk (analepse):* Hopp tilbake i tid
- *Spenningskurve:* Innledning, konflikt, klimaks, løsning

**3. Karakterskildring**
- *Direkte:* Fortelleren beskriver karakteren
- *Indirekte:* Vi forstår karakteren gjennom handling, dialog, tanker
- *Runde karakterer:* Komplekse, utvikler seg
- *Flate karakterer:* Enkle, forutsigbare, typer

**4. Miljøskildring**
- *Fysisk miljø:* Sted, natur, rom, gjenstander
- *Sosialt miljø:* Klasse, kultur, normer
- *Psykologisk atmosfære:* Stemning, symbolikk
- *Miljøets funksjon:* Speiler karakterer? Skaper kontrast? Symbol?`,
    },
    {
      id: 'norsk-vg2-3-11-text-prosa-tips',
      type: 'text',
      content: `### Tips til prosaanalyse

**Start med handlingen**
Hva skjer i teksten? Hvem er involvert? Lag et kort sammendrag før du går i dybden. Slik sikrer du at du har forstått det grunnleggende.

**Identifiser konflikten**
All god prosa har en konflikt. Den kan være:
- Ytre (person mot person, person mot samfunn, person mot natur)
- Indre (person mot seg selv, moralske dilemmaer)

**Følg hovedpersonen**
Hvordan introduseres hovedpersonen? Hvordan endrer hen seg gjennom fortellingen? Hva driver hen fremover?

**Vær oppmerksom på detaljer**
Ingenting er tilfeldig i god litteratur. Hvis forfatteren bruker plass på å beskrive et objekt eller en scene, har det en grunn. Spør: Hvorfor akkurat dette?

**Dialog**
Hva avslører dialogen? Om karakterene? Om relasjoner? Om konflikter? Legg merke til hva som IKKE sies - underteksten.

**Tematikk**
Hva handler teksten om på et dypere plan? Kjærlighet, død, identitet, frihet, makt? Hvordan utforsker teksten temaet?

**Åpning og avslutning**
Hvordan begynner teksten? Hvordan slutter den? Åpen eller lukket slutt? Hva har endret seg?`,
    },
    {
      id: 'norsk-vg2-3-11-def-sjekkliste',
      type: 'definition',
      title: 'Sjekkliste for litterær analyse',
      content: `**FØR DU STARTER**
- Har du lest teksten minst to ganger?
- Kjenner du til forfatterens bakgrunn?
- Vet du når teksten ble skrevet (historisk kontekst)?
- Forstår du hvilken sjanger teksten tilhører?
- Har du slått opp ord du ikke forstår?

**UNDER ANALYSEN**
- Har du identifisert sjangeren og dens konvensjoner?
- Har du funnet de viktigste virkemidlene?
- Har du forklart EFFEKTEN av virkemidlene (ikke bare navngitt dem)?
- Har du beskrevet innholdet (handling, tema, motiver)?
- Har du plassert teksten i kontekst?
- Har du brukt sitater fra teksten som belegg?
- Har du en tydelig tolkning/hovedpåstand?

**ETTER ANALYSEN**
- Har analysen en rød tråd (ikke bare en punktliste)?
- Henger form og innhold sammen i argumentasjonen?
- Er tolkningen din begrunnet i teksten?
- Har du unngått ren oppramsing av virkemidler?
- Er språket ditt presist og faglig?
- Har du svart på oppgaven?`,
    },
    {
      id: 'norsk-vg2-3-11-text-vanlige-feil',
      type: 'text',
      content: `### Vanlige feil i litterær analyse - og hvordan unngå dem

**Feil 1: Oppramsing uten effekt**
*Dårlig:* "Diktet inneholder metaforer, personifikasjon og allitterasjon."
*Bedre:* "Metaforen 'livet er en reise' understreker at vi alle beveger oss mot et mål, men også at veien er like viktig som destinasjonen."

**Feil 2: Parafrasering i stedet for analyse**
*Dårlig:* "Diktet handler om at våren kommer, og dikteren er glad."
*Bedre:* "Vårens komme fungerer som et symbol på håp og fornyelse. Den nærmest ekstatiske tonen, forsterket av gjentakelsen 'Vaaren, Vaaren, Vaaren', viser hvordan det personlige og det naturlige smelter sammen."

**Feil 3: Løse påstander uten belegg**
*Dårlig:* "Wergeland var veldig glad i naturen."
*Bedre:* "Wergelands naturglede kommer tydelig frem i linjen 'O, jeg foeler mig opvaagnet / Som en Jord', hvor dikter-jeget identifiserer seg fullstendig med den våknende naturen."

**Feil 4: Ignorerer konteksten**
*Dårlig:* Analyserer teksten som om den ble skrevet i dag.
*Bedre:* Viser hvordan teksten forholder seg til sin samtid og litterære tradisjon.

**Feil 5: "Jeg synes" uten begrunnelse**
*Dårlig:* "Jeg synes dette er et fint dikt."
*Bedre:* "Diktet virker sterkt fordi de enkle, gjentatte bildene skaper en nesten hypnotisk rytme som trekker leseren inn i dikterens begeistring."`,
    },
    {
      id: 'norsk-vg2-3-11-example-svirp',
      type: 'example',
      title: 'Eksempel: SVIRP-analyse av "Til Foraaret"',
      problem: `Analyser Henrik Wergelands dikt "Til Foraaret" (1833) ved hjelp av SVIRP-modellen:

${TEKST_VG2_WERGELAND_TIL_FORAARET}`,
      solution: `**S - Sjanger**
"Til Foraaret" er et lyrisk dikt, nærmere bestemt et naturlyrisk dikt i romantisk tradisjon. Diktet tilhører den romantiske oden - en høystemt hyllest til et emne (her: våren). Tittelen følger konvensjonen "Til..." som signaliserer henvendelse og hyllest.

**V - Virkemidler**
*Gjentakelse:* "Vaaren, Vaaren, Vaaren kommer!" gjentas i hver strofe og skaper ekstatisk rytme.
*Utrop:* Hyppige utropstegn og "O" understreker følelsesintensiteten.
*Similer:* "Som en Bi-Stok", "Som en Jord, der har sig laagnet" - dikter-jeget sammenlignes med naturen.
*Personifikasjon:* "Baekken synger" - naturen får menneskelige egenskaper.
*Kontrast:* Stillhet/bevegelse, vinter/vår forsterker forvandlingen.
*Rytme:* Hurtig, hoppende rytme som speiler vårkjensla.

**I - Innhold**
*Ytre handling:* Våren kommer, og dikter-jeget reagerer med voldsom glede.
*Tema:* Fornyelse, livskraft, enhet mellom menneske og natur.
*Motiver:* Våren, hjertet, blomster, fugler, sol, ungdom.
*Utvikling:* Fra personlig opplevelse (strofe 1) via naturskildring (strofe 2) til universelt fellesskap (strofe 3).

**R - Relasjon/kontekst**
Diktet er skrevet i 1833, midt i Wergelands mest produktive periode. Han var en sentral skikkelse i norsk nasjonalromantikk, kjent for sin voldsomme begeistring og identifikasjon med naturen.

Romantikken vektla følelse over fornuft, og naturen ble sett som besjelet og meningsfull. Wergelands dikt er et typisk uttrykk for denne romantiske naturopplevelsen.

I nasjonsbyggingens tid ble den norske naturen et sentralt symbol for nasjonal identitet. Å feire naturen var også å feire nasjonen.

**P - Personlig tolkning**
Diktet handler på overflaten om våren, men dypere sett om den menneskelige evnen til fornyelse og glede. Våren blir et symbol på håp - uansett hvor lang og mørk vinteren er, kommer våren alltid tilbake.

Wergelands identifikasjon med naturen ("Jeg er ung, og du er ung") uttrykker en romantisk drøm om enhet mellom menneske og verden - en motgift mot fremmedgjøring.

Diktet er fortsatt relevant fordi det fanger en universell opplevelse: gleden ved årstidsskiftet og følelsen av å være del av noe større enn seg selv. Samtidig kan vi i dag lese det med nye øyne, i lys av klimaendringer som truer nettopp de årstidsvekslingene Wergeland feirer.`,
    },
    {
      id: 'norsk-vg2-3-11-text-fra-analyse-til-tekst',
      type: 'text',
      content: `### Fra SVIRP-analyse til sammenhengende tekst

SVIRP gir deg materialet, men analysen din må være mer enn en punktliste. Slik kan du omforme notatene til en sammenhengende tekst:

**1. Finn et hovedpoeng**
Hva er det viktigste du vil si om teksten? Dette blir din "tese" eller påstand som du argumenterer for gjennom hele analysen.

*Eksempel:* "I 'Til Foraaret' smelter Wergeland sammen personlig følelse og naturopplevelse på en måte som er typisk for romantikken."

**2. La tesen styre utvalget**
Du trenger ikke ha med alt fra SVIRP-notatene. Velg de elementene som støtter hovedpoenget ditt.

**3. Bind sammen med overganger**
Ikke hopp mellom punkter. Vis sammenhengene: "Dette understrekes ytterligere av...", "Den samme tendensen ser vi i...", "Virkemidlet forsterker effekten fordi..."

**4. Sitater som belegg**
Bruk korte, presise sitater som bevis for påstandene dine. Forklar alltid hva sitatet viser.

**5. Avslutt med tolkning**
En god analyse ender ikke med å liste virkemidler, men med å si noe om hva teksten betyr - for sin samtid og for oss i dag.`,
    },
    {
      id: 'norsk-vg2-3-11-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar SVIRP-modellen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva står bokstavene i SVIRP for?',
            solution: 'S = Sjanger, V = Virkemidler, I = Innhold, R = Relasjon/kontekst, P = Personlig tolkning.',
          },
          {
            label: 'b',
            task: 'Hvorfor er det viktig å analysere konteksten (R) når vi leser eldre tekster?',
            solution: 'Konteksten hjelper oss å forstå hva forfatteren ville oppnå, hvilke konvensjoner hen forholdt seg til, og hvordan teksten ble forstått i sin samtid. Uten kontekst kan vi misforstå teksten eller overse viktige betydningslag.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen mellom analyse og tolkning?',
            solution: 'Analyse handler om å undersøke HVORDAN teksten er bygd opp (form, virkemidler, struktur). Tolkning handler om HVA teksten betyr (mening, budskap, betydning). En god litterær analyse kombinerer begge.',
          },
        ],
        solution: 'SVIRP er en systematisk analysemodell som sikrer at du dekker alle viktige aspekter ved en tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-11-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om litterær analyse er korrekt?',
        options: [
          'Det viktigste er å finne flest mulig virkemidler',
          'Man bør alltid forklare effekten av virkemidlene man finner',
          'Konteksten er ikke viktig for tekster fra vår egen tid',
          'Personlig tolkning bør unngås i akademisk analyse',
        ],
        answer: 1,
        solution: 'Det er ikke nok å navngi virkemidler - du må forklare hvilken EFFEKT de har og hvordan de støtter tekstens innhold og tema. En liste over virkemidler uten effektforklaring viser ikke forståelse.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-11-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser et kort dikt med fokus på form.',
        subTasks: [
          {
            label: 'a',
            task: 'Les første strofe av Wergelands "Til Foraaret": "Vaaren, Vaaren, Vaaren kommer! / Og mit Hierte slaaer og banker, / Og dets vilde glade Tanker / Vrimle alt som en Bi-Stok ud!" Beskriv rimskjemaet.',
            solution: 'Strofen har rimskjemaet ABBA (kommer-ud har assonans, banker-Tanker rimer). Dette kalles omsluttende rim.',
          },
          {
            label: 'b',
            task: 'Hvilken effekt har gjentakelsen "Vaaren, Vaaren, Vaaren"?',
            solution: 'Gjentakelsen skaper en ekstatisk, nesten besvergende tone. Den mimer hjertets banking og vårens overveldende kraft. Trippelgjentakelsen forsterker følelsesintensiteten.',
          },
          {
            label: 'c',
            task: 'Forklar similen "som en Bi-Stok".',
            solution: 'Tankene sammenlignes med en bikube full av bier som svermer ut. Dette bildet viser hvordan dikterens tanker er mange, livlige og ukontrollerbare - de vil ut, akkurat som bier om våren.',
          },
        ],
        solution: 'Formen i diktet speiler innholdet: den hurtige rytmen og de intense gjentakelsene uttrykker vårens og hjertets uro.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-11-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på prosaanalyse: fortellerteknikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på en allvitende og en begrenset tredjepersonsforteller?',
            solution: 'En allvitende forteller vet alt om alle karakterer - tanker, følelser, fortid og fremtid. En begrenset forteller følger kun én karakter og vet bare det denne karakteren vet eller observerer.',
          },
          {
            label: 'b',
            task: 'Hva er en upålitelig forteller? Gi et eksempel på hvordan dette kan brukes.',
            solution: 'En upålitelig forteller er en forteller vi ikke fullt ut kan stole på - hen kan lyve, huske feil, eller ha begrenset forståelse. Eksempel: Et barn som forteller, men ikke forstår alt som skjer. Eller en karakter som skjuler sannheten.',
          },
          {
            label: 'c',
            task: 'Hvorfor er valg av fortellerperspektiv viktig for en tekst?',
            solution: 'Fortellerperspektivet styrer hva leseren får vite, når og hvordan. Det påvirker nærhet/distanse til karakterene, spenningsoppbygging, og hvem leseren sympatiserer med. Et annet perspektiv ville gitt en helt annen historie.',
          },
        ],
        solution: 'Fortellerteknikk er et viktig analyseelement fordi det styrer hele leserens opplevelse av teksten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-11-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom tema og motiv i litterær analyse?',
        options: [
          'Tema er konkret, motiv er abstrakt',
          'Tema er det abstrakte hovedemnet, motiv er konkrete gjentakende elementer',
          'Tema er det samme som handling, motiv er det samme som budskap',
          'Det er ingen forskjell - ordene kan brukes om hverandre',
        ],
        answer: 1,
        solution: 'Tema er det abstrakte hovedemnet teksten handler om (f.eks. kjærlighet, død, identitet). Motiv er konkrete, gjentakende elementer som symboliserer eller utforsker temaet (f.eks. havet, fuglen, reisen). Motivene bærer temaet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-11-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en SVIRP-analyse av et selvvalgt romantisk dikt.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et dikt av Wergeland, Welhaven, eller Aasen fra tidligere kapitler. Skriv tittelen og de første linjene.',
            solution: 'Svar vil variere. Eksempler: "Nordmannen" av Aasen, "Norges Dæmring" av Welhaven, "Mig selv" av Wergeland.',
          },
          {
            label: 'b',
            task: 'Gjennomfør en kort SVIRP-analyse (ca. 150-200 ord) der du dekker alle fem punktene.',
            solution: 'Analysen skal inneholde: Sjangerbestemmelse, 2-3 sentrale virkemidler med effektforklaring, beskrivelse av tema/innhold, plassering i romantisk kontekst, og en egen tolkning av tekstens betydning.',
          },
          {
            label: 'c',
            task: 'Hva var mest utfordrende med analysen? Hva lærte du?',
            solution: 'Refleksjon over egen læringsprosess. Vanlige utfordringer: Å koble virkemidler til effekt, å plassere i kontekst, å formulere en egen tolkning som er begrunnet i teksten.',
          },
        ],
        solution: 'En god SVIRP-analyse viser at du kan bruke modellen selvstendig og tilpasse den til ulike tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-11-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign to analysetilnærminger.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er fordelene med en strukturert analysemodell som SVIRP?',
            solution: 'Fordeler: Sikrer at du dekker alle viktige aspekter, gir systematikk og struktur, er lett å huske, egner seg for sammenligning av tekster, hjelper nybegynnere i gang.',
          },
          {
            label: 'b',
            task: 'Hva kan være ulempene med å følge en fast modell?',
            solution: 'Ulemper: Kan bli mekanisk og overfladisk, kan tvinge teksten inn i en mal som ikke passer, kan føre til at man overser det unike ved teksten, kan hindre kreativ og original lesning.',
          },
          {
            label: 'c',
            task: 'Hvordan kan du kombinere systematikk med fleksibilitet i analysearbeidet?',
            solution: 'Bruk modellen som utgangspunkt og sjekkliste, men la teksten styre hva du vektlegger. Vær åpen for at noen punkter er viktigere enn andre i akkurat denne teksten. La din egen lesning og hovedpoeng forme den endelige analysen.',
          },
        ],
        solution: 'Den beste analysen kombinerer systematisk metode med åpenhet for tekstens egenart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-11-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en sammenhengende litterær analyse (400-500 ord) av Wergelands "Til Foraaret" eller et annet romantisk dikt du har arbeidet med.',
        hints: [
          'Start med en innledning som presenterer diktet og din hovedpåstand/tese.',
          'Analyser de viktigste virkemidlene og vis hvordan de støtter diktets tema.',
          'Plasser diktet i romantisk kontekst - hvordan er det typisk for sin tid?',
          'Avslutt med din tolkning av diktets betydning og eventuelle aktualitet.',
          'Bruk korte sitater som belegg for påstandene dine.',
        ],
        solution: 'En god analyse har: (1) Tydelig innledning med tese. (2) Systematisk gjennomgang av virkemidler MED effektforklaring. (3) Kobling til romantisk kontekst. (4) Egen tolkning som er begrunnet i teksten. (5) God struktur med overganger mellom avsnitt. (6) Presist fagspråk. (7) Sitater som belegg. Teksten skal være en sammenhengende argumentasjon, ikke en punktliste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.12: Litteraer debatt og rollespill
// ============================================================================

export const CHAPTER_NORSK_VG2_3_12: TextbookChapter = {
  id: 'norsk-vg2-3-12',
  courseId: 'norsk-vg2',
  chapterNumber: '3.12',
  title: 'Litteraer debatt og rollespill',
  description: 'Utforsk litteraturhistoriske konflikter gjennom debatt, rollespill og sammenligning. Lev deg inn i dikterstriden, sprakstriden og andre sentrale motsetninger.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
    'lese norrøne tekster i oversettelse og sammenligne dem med tekster fra nyere tid',
    'bruke fagkunnskap og retoriske ferdigheter i norskfaglige diskusjoner og presentasjoner',
    'skrive fagartikler som gjør rede for og drøfter tekster i kontekst',
  ],
  content: [
    {
      id: 'norsk-vg2-3-12-intro',
      type: 'text',
      content: `## Litteraer debatt og rollespill - levende litteraturhistorie

I dette kapittelet skal du utforske litteraturhistorien pa en annen mate enn vanlig lesing og analyse. Gjennom debatt, rollespill og sammenligning skal du leve deg inn i de store konfliktene og motsetningene som preget norsk litteratur og kultur pa 1800-tallet.

**Hvorfor debatt og rollespill?**

Litteraturhistorien er ikke bare fakta og arstall - den er full av sterke meninger, lidenskapelige konflikter og levende mennesker. Ved a ta andres perspektiv, argumentere for synspunkter du kanskje ikke deler, og sette deg inn i historiske situasjoner, far du en dypere forstaelse av:

- Hvorfor disse konfliktene var viktige
- Hva som sto pa spill for de involverte
- Hvordan argumentasjon og retorikk fungerer
- Relevansen av historiske debatter for var tid

**I dette kapittelet finner du:**

1. **Dikterstriden:** Wergeland mot Welhaven - to syn pa norsk kultur
2. **Sprakstriden:** Aasen mot Knudsen - to veier til norsk skriftsprak
3. **Sammenligningsoppgaver:** Stil og innhold pa tvers av tekster og epoker
4. **Rollespill-scenarioer:** Bli Holberg, en kvinnelig forfatter pa 1700-tallet, eller Snorre
5. **Debattoppgaver:** Overveiende sporsmal som krever begrunnede standpunkter`,
    },
    {
      id: 'norsk-vg2-3-12-section-dikterstriden',
      type: 'text',
      content: `## Dikterstriden: Wergeland mot Welhaven

**Bakgrunn for striden**

Dikterstriden (1830-1840-arene) var den mest intense kulturelle konflikten i Norges unge historie som selvstendig nasjon. Pa den ene siden sto Henrik Wergeland (1808-1845) og hans tilhengere, pa den andre Johan Sebastian Welhaven (1807-1873) og hans krets.

**Hva handlet striden om?**

Striden handlet om langt mer enn litteratur - den handlet om hva Norge skulle vaere:

*Wergeland og "Patriotene":*
- Mente Norge matte bryte med dansk kulturarv og skape noe eget
- Fremhevet det folkelige, bondekultur og norsk natur
- Ville ha et nasjonalt sprak basert pa norske dialekter
- Sa litteraturen som et middel for folkeopplysning
- Stilistisk: Ville ha frihet, kraft og lidenskapelig uttrykk

*Welhaven og "Intelligenspartiet":*
- Mente Norge matte bygge pa den felleseuropeiske kulturarven
- Fremhevet dannelse, smak og kunstnerisk kvalitet
- Ville beholde dansk-norsk skriftsprak og forbedre det gradvis
- Sa litteraturen som autonom kunst, ikke propaganda
- Stilistisk: Ville ha form, harmoni og behersket uttrykk

**Stridssporsmalene:**

1. *Skal Norge skape en helt ny kultur, eller videreforekulturarven fra Danmark og Europa?*

2. *Er litteraturens oppgave a oppdra folket, eller a vaere vakker kunst for kunstens skyld?*

3. *Hva er viktigst i diktning - kraft og folelse, eller form og harmoni?*

4. *Skal vi dyrke det saernorske, eller det allmennmenneskelige?*

**Personlig fiendskap**

Striden ble ogsa personlig. Welhaven angrep Wergeland i diktet "Til Henrik Wergeland" (1830) og i verket "Norges Daemring" (1834). Wergeland svarte med personangrep. Begge hadde tilhengere som bidro til a eskalere konflikten.

**Hva skjedde?**

Ingen "vant" striden. Wergeland dode ung i 1845 og ble straks hyllet som nasjonal helt. Welhaven levde lenger og ble respektert som dikter og kritiker. I ettertid har Norge tatt til seg elementer fra begge: Wergelands nasjonale engasjement OG Welhavens estetiske bevissthet.`,
    },
    {
      id: 'norsk-vg2-3-12-def-dikterstriden',
      type: 'definition',
      title: 'Dikterstriden - sentrale begreper',
      content: `**Dikterstriden:** Kulturkonflikten mellom Wergeland og Welhaven og deres tilhengere, ca. 1830-1845.

**Patriotene:** Wergelands tilhengere, som onsket et selvstendig norsk kulturuttrykk.

**Intelligenspartiet:** Welhavens tilhengere, som onsket a bygge pa europeisk kulturarv.

**Folkeopplysning:** Ideen om at litteratur skal opplyse og utdanne folket.

**L'art pour l'art:** "Kunst for kunstens skyld" - ideen om at kunst har verdi i seg selv.

**Nasjonalromantikk:** Romantisk retning som fremhever det nasjonale saerpreget.

**Europeisme/Kosmopolitisme:** Orientering mot felleseuropeisk kultur fremfor nasjonalt saerpreg.`,
    },
    {
      id: 'norsk-vg2-3-12-example-dikterstriden',
      type: 'example',
      title: 'Eksempel: Argumenter i dikterstriden',
      problem: `Her er to (fiktive, men historisk baserte) utdrag fra dikterstriden. Analyser argumentasjonen:

**Wergeland-tilhenger (1835):**
"Welhaven og hans krets forakter det norske folk. De vil at vi skal vaere som danskene, snakke som danskene, dikte som danskene. Men vi er norske! Var kultur ligger i dalene og pa fjellene, i folkevisene og eventyrene. Wergeland er var stemme - roff og ukjemmet kanskje, men EKTE norsk!"

**Welhaven-tilhenger (1835):**
"Wergelands tilhengere forveksler ror med kraft, kaos med genialitet. Skal Norge bli en kulturnasjon, ma vi laere av de beste - fra Danmark, fra Tyskland, fra hele Europa. Vi trenger ikke primitive bondeviser, men dannet kunst som taler til universelle verdier."`,
      solution: `**Analyse av Wergeland-tilhengerens argumentasjon:**

*Retoriske grep:*
- Angriper motstanderen (Welhaven "forakter det norske folk")
- Bygger pa motsetning: norsk vs. dansk, ekte vs. falsk
- Appellerer til nasjonal stolthet (patos)
- Bruker naturbilder som bevis ("dalene", "fjellene")
- Innrommer en svakhet ("roff og ukjemmet") men snur den til noe positivt ("EKTE")

*Underliggende verdier:*
- Det nasjonale er viktigere enn det europeiske
- Ekthet er viktigere enn finesse
- Kulturen ligger i folket, ikke i eliten

**Analyse av Welhaven-tilhengerens argumentasjon:**

*Retoriske grep:*
- Kritiserer motstanderen for a forveksle begreper
- Bruker verdiladede ord ("primitive", "dannet")
- Appellerer til ambisjon ("bli en kulturnasjon")
- Trekker pa autoritet (Europa, Danmark, Tyskland)

*Underliggende verdier:*
- Kvalitet og dannelse er viktigere enn nasjonal saerart
- Kunst skal vaere universell, ikke lokal
- Kulturen ligger i tradisjonen, ikke i folkedypet

**Felles svakheter:**
- Begge bruker stereotypier og forenklinger
- Begge angriper en karikatur av motstanderen
- Begge unnlater a anerkjenne verdifulle sider ved motparten`,
    },
    {
      id: 'norsk-vg2-3-12-section-sprakstriden',
      type: 'text',
      content: `## Sprakstriden: Aasen mot Knudsen

**De to veiene til norsk skriftsprak**

Etter 400 ar med dansk styre hadde Norge dansk som skriftsprak. Pa 1800-tallet oppsto sporsmalet: Hvordan skal Norge fa et eget skriftsprak? To hovedretninger vokste frem:

**Ivar Aasens vei - Landsmal (nynorsk):**

Ivar Aasen (1813-1896) reiste rundt i Norge og samlet dialekter. Han mente at det ekte norske spraket levde i dialektene, saerlig i de "minst fordervede" bygdedialektene pa Vestlandet og i dalene. Hans losning:

- Konstruere et nytt skriftsprak basert pa dialektene
- Ga tilbake til det gammelnorske, forbiga det danske skriftspraket
- Skape et sprak som var felles for alle dialektbrukere
- Resultatet: Landsmal (1853), som seinere ble til nynorsk

*Aasens argumenter:*
1. Det danske skriftspraket er fremmed for det norske folket
2. Dialektene representerer det ekte norske spraket
3. Et folk trenger et sprak som speiler dets egenart
4. Landsmal gir verdighet til bygdefolks tale

**Knud Knudsens vei - Riksmal (bokmal):**

Knud Knudsen (1812-1895) var laerer og sprakmann. Han mente at losningen var a gradvis fornorske det danske skriftspraket. Hans strategi:

- Endre skrivematen slik at den naermer seg norsk uttale
- Innfore norske ord der de fantes
- Bevare kontinuiteten med det eksisterende skriftspraket
- Resultatet: Gradvis fornorsking som ble til riksmal/bokmal

*Knudsens argumenter:*
1. Det danske skriftspraket har vaert i bruk i 400 ar og er innarbeidet
2. Gradvis forandring er tryggere enn revolusjon
3. Byer og dannede folk snakker allerede et fornorsket dansk
4. Kontinuitet med litteraturtradisjonen er viktig

**Hva skjedde?**

Norge fikk TO offisielle skriftsprak - landsmal/nynorsk og riksmal/bokmal. Sprakstriden fortsatte gjennom hele 1900-tallet med forsok pa "samnorsk" og heftige debatter. I dag har vi fortsatt to skriftsprak.

**Relevans i dag**

Sprakdebatten lever fortsatt:
- Sidemalsundervisning: Bor alle laere begge malformer?
- Nynorskens stilling: Er den truet eller livskraftig?
- Dialekt vs. standard: Hvor mye dialekt er "lov" i det offentlige?`,
    },
    {
      id: 'norsk-vg2-3-12-def-sprakstriden',
      type: 'definition',
      title: 'Sprakstriden - sentrale begreper',
      content: `**Sprakstriden:** Den langvarige debatten om norsk skriftsprak, fra 1800-tallet til i dag.

**Landsmal:** Ivar Aasens konstruerte skriftsprak, basert pa dialektene. Seinere kalt nynorsk.

**Riksmal:** Den gradvise fornorskingen av dansk skriftsprak. Seinere kalt bokmal.

**Samnorsk:** Mislykket forsok pa a smelte de to skriftsprakene.

**Spraklig purisme:** Onsket om a rense spraket for fremmede (danske/tyske) ord.

**Deskriptiv sprakforskning:** A beskrive spraket slik det faktisk brukes.

**Preskriptiv sprakpolitikk:** A foreskrive hvordan spraket BOR brukes.`,
    },
    {
      id: 'norsk-vg2-3-12-section-sammenligninger',
      type: 'text',
      content: `## Sammenligninger pa tvers

**Hvorfor sammenligne?**

Sammenligning er en av de viktigste metodene i litteraturstudiet. Nar vi sammenligner tekster, oppdager vi:
- Hva som er unikt for hver tekst
- Hva som er typisk for en epoke eller sjanger
- Hvordan ideer og motiver utvikler seg over tid
- Hvordan ulike forfattere behandler lignende temaer

**Sammenligning 1: Wergeland vs. Welhaven**

Begge var romantiske diktere, men med svart ulik stil:

*Wergelands stil:*
- Ekspressiv og lidenskapelig
- Lange, komplekse setninger
- Mange bilder og metaforer
- Ofte uferdig eller "roff"
- Fokus pa innhold fremfor form

*Welhavens stil:*
- Behersket og harmonisk
- Klassisk form (sonetter, regelmessige vers)
- Presise, utvalgte bilder
- Polert og gjennomarbeidet
- Fokus pa form og estetikk

*Tematiske forskjeller:*
- Wergeland: Nasjonal frihet, sosial rettferdighet, optimisme
- Welhaven: Estetisk refleksjon, melankoli, ironi

**Sammenligning 2: Islendingesaga vs. kongesaga**

To sagasjangre med ulike fokus:

*Islendingesagaer:*
- Handler om private feider og familiekonflikter
- Islandske hovedpersoner
- Fokus pa aere, hevn og skjebne
- Knapt stilideal, lite utsmykning
- Eksempel: "Njals saga", "Egils saga"

*Kongesagaer:*
- Handler om kongelige og politiske hendelser
- Norske konger som hovedpersoner
- Fokus pa makt, krig og riksbygging
- Mer utsmykket stil, skaldedikt
- Eksempel: "Heimskringla" (Snorre)

**Sammenligning 3: Barokk vs. opplysningstid**

To kontrasterende litteraere epoker:

*Barokken (ca. 1600-1700):*
- Sterke kontraster (liv/dod, gud/verden)
- Overdadig ornamentikk
- Religiose temaer, forgjengelighetsmotiv
- Formell stil, retoriske figurer
- Petter Dass' salmer

*Opplysningstiden (ca. 1700-1800):*
- Fornuft og logikk
- Klarhet og enkelhet i stilen
- Samfunnskritikk, satire
- Vitenskapelig holdning
- Holbergs komedier`,
    },
    {
      id: 'norsk-vg2-3-12-section-rollespill',
      type: 'text',
      content: `## Rollespill: Lev deg inn i fortiden

**Hva er litteraert rollespill?**

I litteraert rollespill tar du rollen som en historisk person eller en fiktiv karakter fra en bestemt tid. Du forsoker a tenke, argumentere og uttrykke deg slik denne personen ville gjort. Dette gir deg:

- Innlevelse i historiske situasjoner
- Forstaelse for andres perspektiver
- Trening i a argumentere
- Kreativ bruk av historisk kunnskap

**Tips for godt rollespill:**

1. *Forbered deg:* Les om personen/perioden for du starter rollespillet
2. *Tenk kontekst:* Hva var vanlig a mene pa denne tiden?
3. *Hold deg i karakter:* Ikke bruk moderne argumenter eller referanser
4. *Vaer konkret:* Bruk detaljer fra perioden
5. *Lev deg inn:* Prov a forsta hvorfor personen mente det hen mente

**Rollespill-scenario 1: Du er Ludvig Holberg**

*Situasjon:* Du er Ludvig Holberg i 1723. En kritiker har hevdet at komediene dine er usedelige og fordervelige. Du skal forsvare komedien som sjanger.

*Tenk pa:*
- Holbergs syn pa komediens moralske funksjon
- Argumentet om at latter kan oppdra
- Forholdet til klassisk tradisjon (Moliere, romerne)
- Kritikk av "tulipaner" - overdreven mote og forfengelighet

**Rollespill-scenario 2: Du er kvinnelig forfatter pa 1700-tallet**

*Situasjon:* Du er en dannet kvinne i Kobenhavn eller Kristiania rundt 1750. Du har skrevet dikt og essays, men far ikke utgitt dem. Du skriver et brev til en (fiktiv) redaktor der du argumenterer for at kvinner ogsa bor fa publisere.

*Tenk pa:*
- Hvilke argumenter var tilgjengelige pa 1700-tallet?
- Hvilke motargumenter matte du motga?
- Hvordan kunne du bruke opplysningstidens idealer (fornuft, likhet) til a argumentere for kvinners rettigheter?
- Hva matte du vaere forsiktig med a si?

**Rollespill-scenario 3: Du er Snorre Sturluson**

*Situasjon:* Du er Snorre Sturluson pa Island rundt 1230. En ung laerling spor deg hvordan du skriver sagaer. Forklar din metode.

*Tenk pa:*
- Snorres forhold til muntlige kilder
- Viktigheten av a vaere "sannferdig"
- Bruken av skaldedikt som kilder
- Forholdet mellom fortelling og historisk "sannhet"`,
    },
    {
      id: 'norsk-vg2-3-12-section-debattpaastander',
      type: 'text',
      content: `## Debattpaastander

**Hvordan debattere godt?**

En god debatt krever:
- Klare argumenter med begrunnelser
- Konkrete eksempler
- Evne til a motga motargumenter
- Respekt for motstanderens synspunkter
- Saklig tone (angrip argumentet, ikke personen)

**Pastand 1: "Wergeland var viktigere enn Welhaven for norsk litteratur"**

*Argumenter FOR:*
- Wergeland ble nasjonal helt og inspirerte generasjoner
- Hans demokratiske og sosiale engasjement var banebrytende
- Han skapte 17. mai-tradisjonen
- Verkene hans leses fortsatt

*Argumenter MOT:*
- Welhaven hevet den litteraere kvaliteten
- Hans kritikk tvang Wergeland til a bli bedre
- Welhavens formbevissthet pavirket seinere lyrikk
- "Viktig" kan bety forskjellige ting

**Pastand 2: "Nynorsk burde vaert eneste skriftsprak"**

*Argumenter FOR:*
- Nynorsk er basert pa de norske dialektene
- Ett skriftsprak ville vaert enklere
- Aasen hadde et demokratisk prosjekt - bondens sprak skulle verdsettes
- Nynorsk har storre spraklig variasjon

*Argumenter MOT:*
- Bokmal har lengst tradisjon og flest brukere
- Tosprakssituasjonen gir valgfrihet
- Mange folte seg ikke representert i Aasens dialektutvalg
- Sprak kan ikke vedtas demokratisk

**Pastand 3: "Sagaene er relevant litteratur i dag"**

*Argumenter FOR:*
- De utforsker tidlose temaer: aere, hevn, lojalitet, skjebne
- De er god fortelling med sterke karakterer
- De laerer oss om vare forfedre
- De inspirerer moderne kultur (TV-serier, spill)

*Argumenter MOT:*
- Verdensbildet er fremmed (hevn, vold, aerestenkning)
- Spraket er vanskelig tilgjengelig
- Historisk interesse er ikke det samme som litteraer relevans
- Det finnes nyere litteratur som tar opp lignende temaer`,
    },
    {
      id: 'norsk-vg2-3-12-note-1',
      type: 'note',
      title: 'Tips til debatt og rollespill',
      content: `**For debatt:**
- Skriv ned argumenter PA BEGGE SIDER for du tar standpunkt
- Tenk pa hva motstanderen vil si, og forbered svar
- Bruk konkrete eksempler fra tekstene dere har lest
- Det er lov a skifte mening underveis!

**For rollespill:**
- Les relevant bakgrunnsstoff for du begynner
- Skriv noen stikkord om "din" persons synspunkter
- Hold deg i karakter - ikke bryt ut for a forklare
- Humor er lov, men respekter den historiske situasjonen

**For sammenligning:**
- Lag en tabell med likheter og forskjeller
- Ikke bare list opp - analyser HVORFOR det er likt/ulikt
- Tenk pa historisk kontekst: Hva forklarer forskjellene?`,
    },
    // OPPGAVER
    {
      id: 'norsk-vg2-3-12-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Debattinnlegg: Velg side i dikterstriden',
        subTasks: [
          {
            label: 'a',
            task: 'Velg enten Wergelands eller Welhavens side. Skriv et debattinnlegg (250-350 ord) der du argumenterer for at DIN side hadde rett i dikterstriden.',
            solution: 'Et godt innlegg bor: (1) Presentere standpunktet klart. (2) Gi minst tre argumenter med begrunnelser. (3) Bruke eksempler fra tekstene eller historien. (4) Motga minst ett motargument. (5) Ha en klar konklusjon.',
          },
          {
            label: 'b',
            task: 'Skriv sa et kortere svar (100-150 ord) der du anerkjenner ETT godt argument fra motsatt side. Forklar hvorfor dette argumentet har noe for seg, selv om du er uenig.',
            solution: 'Svaret bor vise at du kan se saken fra flere sider. F.eks. kan en Wergeland-tilhenger anerkjenne at Welhaven hadde rett i at form og kvalitet er viktig, eller en Welhaven-tilhenger kan innromme at nasjonal stolthet hadde verdi for den unge nasjonen.',
          },
        ],
        solution: 'Et godt debattinnlegg tar et klart standpunkt, begrunner det med konkrete argumenter, og viser evne til a se motpartens perspektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-12-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rollespill: Du er Ivar Aasen eller Knud Knudsen',
        subTasks: [
          {
            label: 'a',
            task: 'Velg enten Aasen eller Knudsen. Skriv en tale (300-400 ord) der du forklarer HVORFOR Norge trenger et nytt/fornorsket skriftsprak, og hvorfor DIN metode er best. Hold deg i karakter - bruk argumenter som var relevante pa 1850-tallet.',
            solution: 'Aasen-tale bor fremheve: dialektenes verdi, folkets verdighet, sammenheng med gammelnorsk, skriftspraket som fremmed. Knudsen-tale bor fremheve: kontinuitet, praktiske hensyn, at mange allerede snakker fornorsket dansk, litteraturtradisjonen.',
          },
          {
            label: 'b',
            task: 'Skriv sa tre kritiske sporsmaler som en tilhorer fra "motsatt side" kunne stilt etter talen din. Skriv korte svar (2-3 setninger) pa hvert sporsmal, fortsatt i karakter.',
            solution: 'Sporsmalene bor vaere reelle utfordringer, ikke "stramenn". F.eks. til Aasen: "Hvordan skal byborgere som aldri har snakket dialekt laere landsmalet?" Til Knudsen: "Hvorfor skal bondens sprak vaere underlegent det danske?"',
          },
        ],
        hints: [
          'Les om Aasens og Knudsens argumenter i kapittel 3.7 for du begynner.',
          'Tenk pa hvem publikumet var - hvem matte overbevises?',
          'Bruk historiske argumenter, ikke moderne.',
        ],
        solution: 'Et godt rollespill viser at du har forstatt personens argumenter og kan framfore dem overbevisende.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-12-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenligningsessay: Wergeland vs. Welhaven',
        subTasks: [
          {
            label: 'a',
            task: 'Les (eller gjenles) ett dikt av Wergeland og ett av Welhaven fra tidligere kapitler. Lag en tabell der du sammenligner temaer, stil, virkemidler og budskap.',
            solution: 'Tabellen bor inneholde kategorier som: Tema, Stemning, Naturbilder, Stil (ordvalg, setningsstruktur), Rim/rytme, Budskap. Under hver kategori: konkrete eksempler fra begge dikt.',
          },
          {
            label: 'b',
            task: 'Skriv et sammenligningsessay (400-500 ord) der du drofter likheter og forskjeller. Avslutt med a vurdere: Hvilket dikt liker DU best, og hvorfor?',
            solution: 'Et godt essay bor: (1) Presentere begge diktene kort. (2) Drofte minst to konkrete likheter og to forskjeller. (3) Bruke sitater som eksempler. (4) Ha en personlig, men begrunnet vurdering til slutt.',
          },
        ],
        solution: 'En god sammenligning ser bade likheter og forskjeller, og forklarer dem ut fra forfatternes ulike prosjekter og stilidealer.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-12-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rollespill: Du er Ludvig Holberg og skal forsvare komedien',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en forsvarstale for komedien som sjanger (300-400 ord). Du er Holberg, og du har nettopp fatt kritikk for at komediene dine er useriose og kanskje skadelige. Forsvar komedien som kunst og oppdragelsesmiddel.',
            solution: 'Holbergs argumenter inkluderer: Komedien korrigerer laster gjennom latter. Det er lettere a godta kritikk nar den er morsom. De store klassikerne (Moliere, Plautus) skrev komedier. A le av dumskap er forste skritt mot klokskap.',
          },
          {
            label: 'b',
            task: 'Gi ett konkret eksempel fra en av Holbergs komedier (f.eks. "Erasmus Montanus") som stotter argumentet ditt. Forklar hvordan komedien kritiserer en last eller dumhet.',
            solution: 'F.eks. "Erasmus Montanus": Komedien kritiserer pedanteri og misbruk av laerdom. Erasmus har laert a disputere, men bruker kunnskapen til a bevise absurditeter. Ved a le av ham, laerer vi at laerdom uten sunn fornuft er farlig.',
          },
        ],
        hints: [
          'Les om Holberg og opplysningskomedien i tidligere kapitler.',
          'Tenk pa Holbergs opplysningsidealer: Fornuft, dannelse, moderasjon.',
          'Hvem matte Holberg overbevise? Hva slags innvendinger fikk han?',
        ],
        solution: 'Et godt forsvar viser at du forstar Holbergs syn pa komediens funksjon og kan argumentere for det med historisk troverdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-12-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rollespill: Du er en kvinnelig forfatter pa 1700-tallet',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv et brev (250-350 ord) til en (fiktiv) tidsskriftredaktor der du argumenterer for at kvinner bor fa publisere sine tekster. Hold deg til argumenter som var tilgjengelige pa 1700-tallet.',
            solution: 'Mulige argumenter: Opplysningstidens idealer om fornuft gjelder ogsa kvinner. Utdannede kvinner har noe a bidra med. Kvinnelige forfattere finnes i andre land. Fornuften har ikke kjonn. Men: Vaer forsiktig - ikke utfordre hele kjonnsordenen direkte.',
          },
          {
            label: 'b',
            task: 'Skriv sa redaktorens (fiktive) svar - et avslag pa 100-150 ord. Hvilke argumenter bruker han MOT kvinnelig publisering? Hold deg til tidens tankesett.',
            solution: 'Typiske motargumenter fra 1700-tallet: Kvinner bor ta seg av hjemmet. Litteratur krever dannelse kvinner ikke har. Det sommer seg ikke for kvinner a opptre offentlig. Kanskje noe mer "vennlig": Det er for hennes egen beskyttelse.',
          },
          {
            label: 'c',
            task: 'Reflekter kort (100 ord): Hvordan ville denne debatten sett ut i dag? Hvilke argumenter ville vaert annerledes?',
            solution: 'Refleksjonen bor vise at vi har kommet langt (likestilling, kvinnelige forfattere er selvfolgelighet), men ogsa at det fortsatt finnes utfordringer (representasjon, lonnsgap, sjangerhierarkier).',
          },
        ],
        hints: [
          'Tenk pa opplysningstidens idealer - hvordan kan de brukes for og mot kvinner?',
          'Vaer historisk troverdig - ikke la 1700-tallskarakteren bruke moderne feminisme.',
        ],
        solution: 'Et godt rollespill viser historisk innlevelse og evne til a argumentere innenfor en annen tids rammer.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-12-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gruppearbeid: Debatt om sagaenes relevans',
        subTasks: [
          {
            label: 'a',
            task: 'Del klassen/gruppa i to lag. Ett lag skal argumentere FOR at sagaene er relevant litteratur i dag, ett lag skal argumentere MOT. Hvert lag forbereder minst fire argumenter.',
            solution: 'FOR: Tidlose temaer, god fortelling, kulturarv, inspirasjon for moderne kultur. MOT: Fremmed verdensbilde, vanskelig sprak, bedre alternativer, historisk interesse er ikke litteraer relevans.',
          },
          {
            label: 'b',
            task: 'Gjennomfor en debatt pa 15-20 minutter. Veksle mellom lagene. Noter de beste argumentene fra begge sider.',
            solution: 'En god debatt har: Klare argumenter, konkrete eksempler, respektfulle motlegg, evne til a svare pa innvendinger. Notater bor fange hovedpoengene fra begge sider.',
          },
          {
            label: 'c',
            task: 'Skriv en individuell oppsummering (150-200 ord): Hva mente du FOR debatten? Endret debatten meningen din? Hvilket argument var sterkest?',
            solution: 'Oppsummeringen bor vise at eleven har engasjert seg i debatten og reflektert over argumentene. Det er lov a ha endret mening eller blitt mer usikker.',
          },
        ],
        solution: 'Gruppearbeid trener samarbeid, muntlig argumentasjon og evne til a lytte til andres synspunkter.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-12-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenligning: Islendingesaga vs. kongesaga',
        subTasks: [
          {
            label: 'a',
            task: 'Les et kort utdrag fra en islendingesaga (f.eks. "Njals saga") og et utdrag fra "Heimskringla" (Snorre). Identifiser tre konkrete forskjeller i stil eller innhold.',
            solution: 'Typiske forskjeller: Islendingesaga har private konflikter, knapt stil, fokus pa aere. Kongesaga har politiske hendelser, mer utsmykket stil, fokus pa makt og riksbygging.',
          },
          {
            label: 'b',
            task: 'Forklar HVORFOR det er forskjeller. Hva var de ulike sagasjangrenes formal?',
            solution: 'Islendingesagaene skulle bevare minnet om slektene og deres konflikter. Kongesagaene skulle dokumentere Norges historie og legitimere kongeveldet. Ulike formal gir ulik stil og innhold.',
          },
        ],
        solution: 'En god sammenligning ser ikke bare forskjeller, men forklarer dem ut fra sjangrenes ulike formal og kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-3-12-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-ex-8',
        number: '8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var hovedforskjellen mellom Ivar Aasens og Knud Knudsens tilnaerming til norsk skriftsprak?',
        options: [
          'Aasen ville beholde dansk, Knudsen ville lage nytt sprak',
          'Aasen ville konstruere nytt sprak fra dialektene, Knudsen ville fornorske det eksisterende dansk-norske',
          'Aasen fokuserte pa bysprak, Knudsen pa bygdesprak',
          'De var enige, men hadde personlig konflikt',
        ],
        answer: 1,
        solution: 'Ivar Aasen konstruerte et helt nytt skriftsprak (landsmal/nynorsk) basert pa de norske dialektene, mens Knud Knudsen ville gradvis fornorske det eksisterende dansk-norske skriftspraket (som ble til riksmal/bokmal). Dette er kjernen i sprakstriden.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

export const NORSK_VG2_CHAPTERS_DEL3: TextbookChapter[] = [
  CHAPTER_NORSK_VG2_3_1,
  CHAPTER_NORSK_VG2_3_2,
  CHAPTER_NORSK_VG2_3_3,
  CHAPTER_NORSK_VG2_3_4,
  CHAPTER_NORSK_VG2_3_5,
  CHAPTER_NORSK_VG2_3_6,
  CHAPTER_NORSK_VG2_3_7,
  CHAPTER_NORSK_VG2_3_8,
  CHAPTER_NORSK_VG2_3_9,
  CHAPTER_NORSK_VG2_3_10,
  CHAPTER_NORSK_VG2_3_11,
  CHAPTER_NORSK_VG2_3_12,
];
