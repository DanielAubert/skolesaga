/**
 * Tekstbok innhold for Norsk VG2
 *
 * Følger LK20 læreplan for norsk på videregående skole.
 * Andre år med fokus på litteraturhistorie og avansert tekstanalyse.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Realismen og det moderne gjennombrudd
// ============================================================================

export const CHAPTER_NORSK_VG2_1_1: TextbookChapter = {
  id: 'norsk-vg2-1-1',
  courseId: 'norsk-vg2',
  chapterNumber: '1.1',
  title: 'Realismen og det moderne gjennombrudd',
  description: 'Lær om realismen som litterær epoke og det moderne gjennombruddet i nordisk litteratur.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner og noveller fra realismen',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
  ],
  content: [
    {
      id: 'norsk-vg2-1-1-intro',
      type: 'text',
      content: `## Realismen - litteratur som samfunnskritikk

Realismen var en litterær epoke som dominerte i andre halvdel av 1800-tallet. Forfatterne ønsket å skildre virkeligheten slik den faktisk var, ikke idealisert eller romantisert.

**Historisk bakgrunn:**
- Industrialisering og urbanisering
- Fremvekst av arbeiderklassen
- Darwin og naturvitenskapelig tenkning
- Kvinnebevegelsen tar form
- Sekularisering av samfunnet

**Det moderne gjennombrudd (1870-1890):**
Den danske litteraturkritikeren Georg Brandes holdt i 1871 en rekke forelesninger som markerte starten på det moderne gjennombrudd i Norden. Han oppfordret forfatterne til å "sette problemer under debatt".`,
    },
    {
      id: 'norsk-vg2-1-1-def-1',
      type: 'definition',
      title: 'Kjennetegn på realismen',
      content: `**Tematikk:**
- Samfunnskritikk og sosiale problemer
- Kvinners stilling i samfunnet
- Klasseskiller og sosial urettferdighet
- Dobbeltmoral og hykleri
- Individets kamp mot samfunnets normer

**Form og stil:**
- Objektiv, nøktern fremstilling
- Detaljerte miljøskildringer
- Troverdige, typiske karakterer
- Hverdagsspråk og dialekt
- Ofte dramatisk form eller prosa

**Sentrale norske forfattere:**
- Henrik Ibsen (1828-1906)
- Bjørnstjerne Bjørnson (1832-1910)
- Alexander Kielland (1849-1906)
- Jonas Lie (1833-1908)
- Amalie Skram (1846-1905)`,
    },
    {
      id: 'norsk-vg2-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Henrik Ibsen - Et dukkehjem (1879)',
      problem: `Les dette utdraget fra slutten av Et dukkehjem og analyser det:

NORA: "Jeg har vært din dukkekone her, likesom jeg hjemme var papas dukkebarn. Og barna, de har igjen vært mine dukker. Jeg syntes det var morsomt når du lekte med meg, likesom de syntes det var morsomt når jeg lekte med dem. Det har vært vårt ekteskap, Torvald."`,
      solution: `**Analyse av utdraget:**

**Tema:** Utdraget handler om kvinnens rolle i ekteskapet og samfunnet. Nora sammenligner sitt liv med å være en dukke - et objekt som andre leker med.

**Dukke-metaforen:**
- Nora har gått fra å være farens "dukkebarn" til Torvalds "dukkekone"
- Hun har aldri fått være et selvstendig individ
- Metaforen avslører den patriarkalske strukturen

**Samfunnskritikk:**
- Ibsen kritiserer det borgerlige ekteskapet
- Kvinner ble behandlet som mindreårige
- Nora våkner og krever sin frihet

**Realistiske trekk:**
- Hverdagsspråk i dialogen
- Typisk borgerlig miljø
- Fokus på et aktuelt samfunnsproblem
- Sannsynlig handling og karakterutvikling`,
    },
    {
      id: 'norsk-vg2-1-1-def-2',
      type: 'definition',
      title: 'Georg Brandes og problemdiktningen',
      content: `Georg Brandes (1842-1927) var en dansk litteraturkritiker som fikk enorm innflytelse på nordisk litteratur.

**Brandes' krav til litteraturen:**
- Litteraturen skal "sette problemer under debatt"
- Forfatteren skal ta stilling til aktuelle samfunnsspørsmål
- Litteraturen skal bidra til samfunnsendring

**Problemdiktning:**
En type litteratur som tar opp og debatterer konkrete samfunnsproblemer:
- Kvinnefrigjøring
- Seksualmoralen
- Religion og kirke
- Klasseskiller
- Arbeiderforhold

**Brandes' innflytelse:**
- Inspirerte Ibsen, Bjørnson og andre
- Skapte skandaler og debatt
- Førte til en ny, samfunnsengasjert litteratur`,
    },
    {
      id: 'norsk-vg2-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som menes med "det moderne gjennombrudd" i nordisk litteratur.',
        subTasks: [
          {
            label: 'a',
            task: 'Når fant det moderne gjennombruddet sted, og hvem startet det?',
            solution: 'Det moderne gjennombruddet fant sted ca. 1870-1890. Georg Brandes startet det med sine forelesninger i København i 1871.',
          },
          {
            label: 'b',
            task: 'Hva var Brandes\' hovedkrav til litteraturen?',
            solution: 'Brandes krevde at litteraturen skulle "sette problemer under debatt" - altså ta opp aktuelle samfunnsproblemer.',
          },
          {
            label: 'c',
            task: 'Nevn tre temaer som ble tatt opp i problemdiktningen.',
            solution: 'Eksempler: Kvinnefrigjøring, dobbeltmoral, klasseskiller, religionskritikk, arbeiderforhold.',
          },
        ],
        solution: 'Det moderne gjennombrudd var en litterær bevegelse som krevde at litteraturen skulle engasjere seg i samfunnsproblemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign realismen med romantikken:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skildres virkeligheten i de to epokene?',
            solution: 'Romantikken idealiserte og forskjønnet virkeligheten, mens realismen skildret den nøkternt og objektivt.',
          },
          {
            label: 'b',
            task: 'Hvilke temaer var sentrale i hver epoke?',
            solution: 'Romantikken: Natur, følelser, nasjonalisme, fantasi. Realismen: Samfunnsproblemer, hverdagsliv, sosial urettferdighet.',
          },
          {
            label: 'c',
            task: 'Hvordan var forholdet mellom individ og samfunn ulikt?',
            solution: 'I romantikken sto det unike individet i sentrum. I realismen var individet et produkt av miljø og arv, og stod ofte i konflikt med samfunnet.',
          },
        ],
        hints: ['Tenk på hvordan naturen skildres', 'Hvem er de typiske hovedpersonene?'],
        solution: 'Realismen var et brudd med romantikkens idealisering og fokuserte på samfunnskritikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser et utdrag fra Et dukkehjem eller en annen realistisk tekst. Identifiser realistiske trekk i teksten.',
        hints: ['Se etter samfunnskritikk', 'Analyser språket', 'Hvordan skildres miljøet?'],
        solution: 'Analysen bør identifisere tematikk, språk, miljøskildring og samfunnskritikk i teksten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Les novellen "Karen" av Alexander Kielland og skriv en analyse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er handlingen i novellen?',
            solution: 'Novellen handler om tjenestepiken Karen som blir gravid og forlatt, og til slutt tar sitt eget liv.',
          },
          {
            label: 'b',
            task: 'Hvilke samfunnsproblemer tar Kielland opp?',
            solution: 'Kielland kritiserer klasseskillene, dobbeltmoralen og hvordan samfunnet behandler kvinner som bryter normene.',
          },
          {
            label: 'c',
            task: 'Hvordan bruker Kielland ironi i novellen?',
            solution: 'Kielland bruker ironi ved å kontrastere de velstående borgernes hykleri med Karens skjebne.',
          },
        ],
        solution: 'Analysen skal vise forståelse for Kiellands samfunnskritikk og bruk av ironi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Diskuter hvorfor realismen og problemdiktningen var så provoserende i sin samtid.',
        hints: ['Tenk på samfunnets normer', 'Hvilke grupper ble kritisert?', 'Hva skjedde med forfatterne?'],
        solution: 'Realismen utfordret borgerskapets verdier, religionen og den etablerte samfunnsorden. Mange verk ble sensurert eller skapte skandale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Er realismens temaer fortsatt aktuelle i dag? Gi eksempler fra dagens samfunn eller litteratur.',
        hints: ['Tenk på likestilling', 'Klasseskiller', 'Dobbeltmoral'],
        solution: 'Mange av realismens temaer er fortsatt aktuelle: likestillingskamp, sosiale forskjeller, hykleri. Moderne forfattere tar fortsatt opp disse problemene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Naturalismen
// ============================================================================

export const CHAPTER_NORSK_VG2_1_2: TextbookChapter = {
  id: 'norsk-vg2-1-2',
  courseId: 'norsk-vg2',
  chapterNumber: '1.2',
  title: 'Naturalismen',
  description: 'Lær om naturalismen som en videreføring av realismen med fokus på arv og miljø.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke naturalistiske tekster',
    'forstå sammenhengen mellom vitenskapelig tenkning og litteratur',
  ],
  content: [
    {
      id: 'norsk-vg2-1-2-intro',
      type: 'text',
      content: `## Naturalismen - vitenskapelig litteratur

Naturalismen var en litterær retning som vokste ut av realismen på 1880-tallet. Naturalistene gikk enda lenger enn realistene i å skildre virkeligheten objektivt og vitenskapelig.

**Bakgrunn:**
- Darwins evolusjonsteori (1859)
- Naturvitenskapens fremvekst
- Troen på at mennesket styres av arv og miljø
- Determinisme - alt har en årsak

**Fra Frankrike til Norden:**
Den franske forfatteren Émile Zola var naturalismens grunnlegger. Han mente at forfatteren skulle arbeide som en vitenskapsmann og studere mennesket objektivt.`,
    },
    {
      id: 'norsk-vg2-1-2-def-1',
      type: 'definition',
      title: 'Kjennetegn på naturalismen',
      content: `**Determinisme:**
Mennesket er styrt av faktorer det ikke kan kontrollere:
- **Arv:** Genetiske egenskaper, sykdommer, legninger
- **Miljø:** Oppvekst, sosiale forhold, fattigdom

**Litterære kjennetegn:**
- Enda mer objektiv og vitenskapelig stil enn realismen
- Fokus på livets skyggeside: sykdom, rus, fattigdom, død
- Detaljerte, ofte ubehagelige skildringer
- Pessimistisk livssyn - individet kan ikke unnslippe sin skjebne
- Ofte fokus på nedarvede egenskaper (alkoholisme, sinnslidelser)

**Sentrale norske naturalister:**
- Amalie Skram (1846-1905): Hellemyrsfolket
- Hans Jæger (1854-1910): Fra Kristiania-bohêmen
- Christian Krohg (1852-1925): Albertine`,
    },
    {
      id: 'norsk-vg2-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Amalie Skram - Hellemyrsfolket',
      problem: `Amalie Skrams romanserie Hellemyrsfolket (1887-1898) følger flere generasjoner av en familie gjennom armod og forfall. Analyser hvordan naturalismens ideer kommer til uttrykk i verket.`,
      solution: `**Arv og miljø i Hellemyrsfolket:**

**Arvens forbannelse:**
- Alkoholisme går i arv gjennom generasjonene
- Sivert Gabrielsen arver farens svakheter
- Barna arver foreldrenes negative egenskaper

**Miljøets betydning:**
- Fattigdom fører til kriminalitet og forfall
- Karakterene er fanget i sin sosiale situasjon
- Ingen kan unnslippe sin bakgrunn

**Naturalistisk stil:**
- Detaljerte, nådeløse skildringer av elendighet
- Objektiv, vitenskapelig tone
- Ingen moralisering - bare observasjon

**Deterministisk livssyn:**
- Karakterene er ofre for krefter de ikke kontrollerer
- Tragedien er uunngåelig
- Lite håp om forbedring

**Skrams bidrag:**
Skram var spesielt opptatt av kvinners situasjon og psykologi. Hun skrev også om sinnslidelser basert på egne erfaringer.`,
    },
    {
      id: 'norsk-vg2-1-2-def-2',
      type: 'definition',
      title: 'Realisme vs. naturalisme',
      content: `**Likheter:**
- Begge skildrer virkeligheten objektivt
- Begge tar opp samfunnsproblemer
- Begge bruker hverdagsspråk

**Forskjeller:**

| Aspekt | Realisme | Naturalisme |
|--------|----------|-------------|
| Syn på mennesket | Kan påvirke sin skjebne | Styrt av arv og miljø |
| Tematikk | Samfunnsproblemer | Livets skyggeside |
| Stil | Objektiv | Vitenskapelig, klinisk |
| Tone | Kritisk, men med håp | Pessimistisk |
| Fokus | Typiske situasjoner | Ekstreme tilfeller |

**Eksempel på forskjellen:**
- Ibsens Nora (realisme) velger å forlate familien - hun har handlingsrom
- Skrams karakterer (naturalisme) er fanget - de kan ikke unnslippe sin arv`,
    },
    {
      id: 'norsk-vg2-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar begrepet determinisme og hvordan det kommer til uttrykk i naturalismen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr determinisme?',
            solution: 'Determinisme er troen på at alt som skjer har en årsak, og at menneskets handlinger er bestemt av faktorer det ikke kontrollerer.',
          },
          {
            label: 'b',
            task: 'Hvilke to faktorer mente naturalistene at styrer mennesket?',
            solution: 'Arv (genetikk, nedarvede egenskaper) og miljø (oppvekst, sosiale forhold).',
          },
          {
            label: 'c',
            task: 'Hvordan påvirker dette synet på mennesket litteraturen?',
            solution: 'Karakterene i naturalistisk litteratur er ofte ofre som ikke kan unnslippe sin skjebne. De er styrt av krefter de ikke kontrollerer.',
          },
        ],
        solution: 'Determinismen gjør at naturalistisk litteratur ofte er pessimistisk - karakterene kan ikke endre sin situasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign realismen og naturalismen:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen i synet på menneskets handlingsrom?',
            solution: 'I realismen kan mennesket ta valg og påvirke sin situasjon. I naturalismen er mennesket styrt av arv og miljø.',
          },
          {
            label: 'b',
            task: 'Hvordan skiller tematikken seg?',
            solution: 'Realismen fokuserer på samfunnsproblemer som kan løses. Naturalismen fokuserer på livets skyggeside og uunngåelige tragedier.',
          },
        ],
        hints: ['Tenk på Ibsens Nora vs. Skrams karakterer'],
        solution: 'Naturalismen er mer pessimistisk og vitenskapelig enn realismen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les et utdrag fra Hellemyrsfolket eller Albertine. Analyser naturalistiske trekk i teksten.',
        hints: ['Se etter arv og miljø', 'Hvordan skildres karakterene?', 'Er det noe håp?'],
        solution: 'Analysen bør identifisere deterministiske trekk, detaljerte skildringer og pessimistisk livssyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter: Er det riktig at mennesket er fullstendig styrt av arv og miljø?',
        hints: ['Hva sier moderne forskning?', 'Har vi fri vilje?', 'Kan mennesker overvinne sin bakgrunn?'],
        solution: 'Diskusjonen bør vise refleksjon over forholdet mellom arv, miljø og fri vilje. Moderne forskning viser at begge deler spiller inn, men at mennesket også har handlingsrom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor ble naturalistisk litteratur ofte sensurert eller skandalisert?',
        hints: ['Tenk på temaene', 'Hvem ble provosert?', 'Hva var "upassende" å skrive om?'],
        solution: 'Naturalismen tok opp tabubelagte temaer som prostitusjon, alkoholisme og sinnslidelser. Den utfordret borgerskapets moral og ble ofte sett på som umoralsk eller støtende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.1: Nyromantikken og symbolismen
// ============================================================================

export const CHAPTER_NORSK_VG2_2_1: TextbookChapter = {
  id: 'norsk-vg2-2-1',
  courseId: 'norsk-vg2',
  chapterNumber: '2.1',
  title: 'Nyromantikken og symbolismen',
  description: 'Lær om nyromantikken og symbolismen som reaksjoner på realismen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke symbolistisk og nyromantisk litteratur',
    'forstå hvordan litterære epoker forholder seg til hverandre',
  ],
  content: [
    {
      id: 'norsk-vg2-2-1-intro',
      type: 'text',
      content: `## Nyromantikken - tilbake til det indre liv

På 1890-tallet kom en reaksjon mot realismens og naturalismens ytre, objektive skildringer. Forfatterne vendte seg innover - mot følelser, drømmer og det ubevisste.

**Bakgrunn:**
- Tretthet over den nøkterne realismen
- Interesse for psykologi (Freud)
- Lengsel etter det mystiske og spirituelle
- Kritikk av industrialisering og materialisme

**Fra samfunn til sjel:**
Mens realismen fokuserte på samfunnsproblemer, fokuserte nyromantikken på individets indre liv. Det irrasjonelle, drømmene og følelsene ble viktigere enn det sosiale.`,
    },
    {
      id: 'norsk-vg2-2-1-def-1',
      type: 'definition',
      title: 'Kjennetegn på nyromantikken',
      content: `**Tematikk:**
- Det indre liv og følelsene
- Drømmer og det ubevisste
- Kjærlighet, lengsel og melankoli
- Mystikk og spiritualitet
- Naturen som speil for sjelen

**Form og stil:**
- Lyrisk, stemningsfull prosa
- Symbolbruk og metaforer
- Subjektiv synsvinkel
- Fokus på stemning fremfor handling
- Ofte vakre, poetiske beskrivelser

**Sentrale norske forfattere:**
- Knut Hamsun (1859-1952): Sult, Pan
- Sigbjørn Obstfelder (1866-1900): Dikt
- Vilhelm Krag (1871-1933): Dikt
- Hans E. Kinck (1865-1926)`,
    },
    {
      id: 'norsk-vg2-2-1-def-2',
      type: 'definition',
      title: 'Symbolismen',
      content: `Symbolismen var en internasjonal kunstretning som startet i Frankrike på 1880-tallet.

**Hva er et symbol?**
Et symbol er noe konkret som står for noe abstrakt. I symbolismen brukes symboler bevisst for å uttrykke indre tilstander og universelle sannheter.

**Kjennetegn:**
- Symboler erstatter direkte beskrivelser
- Suggererer stemninger fremfor å forklare
- Fokus på det mystiske og gåtefulle
- Musikkalitet i språket
- Anti-realistisk - mot det hverdagslige

**Eksempler på symboler:**
- Havet = lengsel, frihet, det ubevisste
- Natten = død, mysterium, drøm
- Fuglen = frihet, sjelen
- Skogen = villskap, det primitive`,
    },
    {
      id: 'norsk-vg2-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Knut Hamsun - Pan (1894)',
      problem: `I romanen Pan følger vi løytnant Glahn som lever i Nordland. Les dette utdraget og analyser nyromantiske trekk:

"Og Natten kom, Natten kom, jeg elsket den, den la sig om mig som et stort, mørkt Hav. Jeg lå og hørte."`,
      solution: `**Analyse av utdraget:**

**Nyromantiske trekk:**

**Naturmystikk:**
- Natten personifiseres som noe levende
- Naturen er ikke bare kulisse, men aktiv deltaker
- Hovedpersonen smelter sammen med naturen

**Symbolbruk:**
- Natten symboliserer det mystiske og ubevisste
- Havet symboliserer dypet i sjelen
- Mørket er positivt ladet, ikke skremmende

**Lyrisk språk:**
- Gjentakelsen "Natten kom, Natten kom" skaper rytme
- Poetisk og stemningsfull tone
- Korte, suggestive setninger

**Subjektiv opplevelse:**
- Fokus på hovedpersonens indre tilstand
- Sansene er viktige (hørsel)
- Følelser fremfor handling

**Kontrast til realismen:**
Der realismen ville beskrevet natten objektivt, bruker Hamsun den til å uttrykke indre tilstander.`,
    },
    {
      id: 'norsk-vg2-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan nyromantikken var en reaksjon på realismen og naturalismen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva reagerte nyromantikerne mot?',
            solution: 'De reagerte mot den nøkterne, objektive stilen, fokuset på samfunnsproblemer og det pessimistiske, deterministiske menneskesynet.',
          },
          {
            label: 'b',
            task: 'Hva fokuserte nyromantikken på i stedet?',
            solution: 'Nyromantikken fokuserte på det indre liv, følelser, drømmer, mystikk og naturen som speil for sjelen.',
          },
        ],
        solution: 'Nyromantikken var en vending fra det ytre til det indre, fra samfunn til sjel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser symbolbruken i dette diktet av Sigbjørn Obstfelder:',
        subTasks: [
          {
            label: 'a',
            task: 'Les "Jeg ser" av Obstfelder. Hvilke symboler finner du?',
            solution: 'Symboler kan være: himmelen (det uoppnåelige), trærne (naturen som fremmed), menneskene (fremmedgjøring).',
          },
          {
            label: 'b',
            task: 'Hva uttrykker diktet om jeg-personens tilstand?',
            solution: 'Diktet uttrykker fremmedgjøring, forvirring og en følelse av å ikke høre til i verden.',
          },
        ],
        hints: ['Se etter gjentakelser', 'Hva føler jeg-personen?'],
        solution: 'Diktet bruker hverdagslige bilder som symboler for eksistensiell fremmedgjøring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les et utdrag fra Hamsuns Pan eller Sult. Analyser nyromantiske trekk.',
        hints: ['Se etter naturskildringer', 'Hvordan skildres det indre livet?', 'Finn symboler'],
        solution: 'Analysen bør identifisere lyrisk språk, naturmystikk, symbolbruk og fokus på det indre livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en tabell som sammenligner realismen og nyromantikken.',
        subTasks: [
          {
            label: 'a',
            task: 'Sammenlign tematikk, stil og menneskesyn.',
            solution: 'Tematikk: Samfunn vs. sjel. Stil: Objektiv vs. subjektiv. Menneskesyn: Sosialt vesen vs. følende individ.',
          },
        ],
        solution: 'Tabellen skal vise tydelige kontraster mellom de to epokene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en kort tekst (150-200 ord) i nyromantisk stil der du bruker naturen som symbol for en følelse.',
        hints: ['Velg en følelse (lengsel, melankoli, kjærlighet)', 'Bruk naturbeskrivelser', 'Skriv lyrisk og stemningsfullt'],
        solution: 'Teksten skal demonstrere forståelse for nyromantisk stil med symbolbruk, lyrisk språk og fokus på stemning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Modernisme i litteratur
// ============================================================================

export const CHAPTER_NORSK_VG2_2_2: TextbookChapter = {
  id: 'norsk-vg2-2-2',
  courseId: 'norsk-vg2',
  chapterNumber: '2.2',
  title: 'Modernisme i litteratur',
  description: 'Lær om modernismen som litterær epoke og dens eksperimentelle former.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke modernistiske tekster',
    'forstå modernismens formeksperimenter',
  ],
  content: [
    {
      id: 'norsk-vg2-2-2-intro',
      type: 'text',
      content: `## Modernismen - brudd med tradisjonen

Modernismen var en radikal kunstbevegelse som preget første halvdel av 1900-tallet. Modernistene brøt bevisst med tradisjonelle former og uttrykksmåter.

**Historisk bakgrunn:**
- Første verdenskrig (1914-1918) - sivilisasjonens sammenbrudd
- Industrialisering og urbanisering
- Freuds psykoanalyse - det ubevisste
- Einsteins relativitetsteori - alt er relativt
- Tap av felles verdier og sannheter

**Modernismens kjerne:**
Verden oppfattes som fragmentert og kaotisk. Tradisjonelle former duger ikke lenger til å uttrykke den nye virkeligheten. Kunsten må finne nye uttrykk.`,
    },
    {
      id: 'norsk-vg2-2-2-def-1',
      type: 'definition',
      title: 'Kjennetegn på modernismen',
      content: `**Tematikk:**
- Fremmedgjøring og ensomhet
- Identitetsproblematikk - hvem er jeg?
- Meningsløshet og absurditet
- Det ubevisste og drømmene
- Storbyens kaos

**Formeksperimenter:**
- Brudd med kronologisk handling
- Bevissthetsstrøm (stream of consciousness)
- Fragmentert struktur
- Symboler og bilder fremfor handling
- Fri vers i lyrikken

**Sentrale trekk:**
- **Indre monolog:** Tankestrømmen gjengis direkte
- **Montasje:** Ulike elementer settes sammen
- **Epifani:** Plutselig innsikt eller åpenbaring
- **Åpen slutt:** Ingen klar konklusjon`,
    },
    {
      id: 'norsk-vg2-2-2-def-2',
      type: 'definition',
      title: 'Bevissthetsstrøm',
      content: `**Hva er bevissthetsstrøm?**
En teknikk der forfatterene forsøker å gjengi tankene slik de faktisk flyter - uordnet, springende og assosiativt.

**Kjennetegn:**
- Ingen tradisjonell fortellerstemme
- Tankene flyter fritt
- Minner, sanseinntrykk og følelser blandes
- Ofte uten tegnsetting
- Tidsnivåer glir over i hverandre

**Eksempel fra James Joyce:**
"Ja fordi han aldri gjorde noe slikt før som å spørre om frokost i sengen med to egg siden hotellet i City Arms..."

**Norske eksempler:**
- Cora Sandel: Alberte-trilogien
- Tarjei Vesaas: Fuglane
- Sigurd Hoel: Syndere i sommersol`,
    },
    {
      id: 'norsk-vg2-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Tarjei Vesaas - Fuglane (1957)',
      problem: `Fuglane regnes som en av de viktigste norske modernistiske romanene. Analyser modernistiske trekk i verket.`,
      solution: `**Modernistiske trekk i Fuglane:**

**Tematikk:**
- Fremmedgjøring: Mattis føler seg utenfor samfunnet
- Identitet: Hvem er Mattis? Hvordan forstår han seg selv?
- Kommunikasjonsproblemer: Mattis kan ikke uttrykke seg
- Forholdet mellom individ og fellesskap

**Form:**
- Lyrisk, poetisk prosa
- Symbolbruk: Fuglen (rugden) symboliserer Mattis selv
- Indre perspektiv: Vi følger Mattis' tanker
- Enkel, men mangetydig språk

**Symbolikken:**
- Fuglen = Mattis' sjel, lengsel etter frihet
- Fergen = overganger, forbindelse
- Vannet = det ubevisste, døden
- Skogen = det trygge, det opprinnelige

**Modernistisk menneskesyn:**
Mattis representerer det sårbare mennesket i en verden som ikke forstår ham. Hans "annerledeshet" gjør ham til en outsider.`,
    },
    {
      id: 'norsk-vg2-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som kjennetegner modernismen som litterær epoke.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke historiske hendelser påvirket modernismen?',
            solution: 'Første verdenskrig, industrialisering, Freuds psykoanalyse, Einsteins relativitetsteori.',
          },
          {
            label: 'b',
            task: 'Hvordan brøt modernistene med tradisjonell litteratur?',
            solution: 'De eksperimenterte med form: bevissthetsstrøm, fragmentert struktur, fri vers, åpne slutter.',
          },
          {
            label: 'c',
            task: 'Hvilke temaer er typiske for modernismen?',
            solution: 'Fremmedgjøring, identitetsproblematikk, meningsløshet, det ubevisste.',
          },
        ],
        solution: 'Modernismen var et radikalt brudd med tradisjonelle former, motivert av en opplevelse av verden som fragmentert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva bevissthetsstrøm er og hvorfor modernistene brukte denne teknikken.',
        hints: ['Tenk på hvordan tanker egentlig flyter', 'Hva ville de uttrykke?'],
        solution: 'Bevissthetsstrøm gjengir tankene slik de faktisk flyter - uordnet og assosiativt. Teknikken ble brukt for å komme nærmere det indre livet og det ubevisste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les et utdrag fra Fuglane eller en annen modernistisk tekst. Analyser modernistiske trekk.',
        hints: ['Se etter symboler', 'Hvordan er fortellerformen?', 'Hva er temaet?'],
        solution: 'Analysen bør identifisere symbolbruk, formeksperimenter og typiske modernistiske temaer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign modernismen med realismen - hva er de viktigste forskjellene?',
        subTasks: [
          {
            label: 'a',
            task: 'Sammenlign synet på virkeligheten.',
            solution: 'Realismen: Virkeligheten kan skildres objektivt. Modernismen: Virkeligheten er fragmentert og subjektiv.',
          },
          {
            label: 'b',
            task: 'Sammenlign litterær form.',
            solution: 'Realismen: Tradisjonell fortelling, kronologi. Modernismen: Eksperimentell form, brudd med kronologi.',
          },
        ],
        solution: 'Modernismen representerer et radikalt brudd med realismens tro på objektiv fremstilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en kort tekst (100-150 ord) i bevissthetsstrøm-stil. La tankene flyte fritt uten tradisjonell struktur.',
        hints: ['Ikke bruk for mye tegnsetting', 'La assosiasjonene styre', 'Bland ulike tidsnivåer'],
        solution: 'Teksten skal demonstrere forståelse for bevissthetsstrøm-teknikken med flytende tanker og fri assosiasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.1: Språkdebatt og språkpolitikk
// ============================================================================

export const CHAPTER_NORSK_VG2_3_1: TextbookChapter = {
  id: 'norsk-vg2-3-1',
  courseId: 'norsk-vg2',
  chapterNumber: '3.1',
  title: 'Språkdebatt og språkpolitikk',
  description: 'Lær om norsk språkhistorie og dagens språkpolitiske debatter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for norsk språkhistorie og språkpolitikk',
    'reflektere over språklige rettigheter og språkmangfold',
  ],
  content: [
    {
      id: 'norsk-vg2-3-1-intro',
      type: 'text',
      content: `## Norsk språkhistorie - en unik situasjon

Norge er et av få land i verden med to offisielle skriftspråk: bokmål og nynorsk. Denne situasjonen har sin bakgrunn i 400 år under dansk styre og nasjonsbyggingen på 1800-tallet.

**Historisk bakgrunn:**
- 1380-1814: Union med Danmark - dansk skriftspråk
- 1814: Selvstendighet - behov for eget skriftspråk
- To strategier oppstår: fornorsking av dansk eller nytt språk basert på dialekter

**Resultatet:**
- Bokmål: Gradvis fornorsking av dansk
- Nynorsk: Nytt skriftspråk basert på dialekter (Ivar Aasen)`,
    },
    {
      id: 'norsk-vg2-3-1-def-1',
      type: 'definition',
      title: 'De to målformene',
      content: `**Bokmål:**
- Utviklet fra dansk-norsk skriftspråk
- Gradvis fornorsket gjennom reformer
- Hadde navn som riksmål (1899) og bokmål (1929)
- Dominerende i byer og østlandsfylker
- Brukes av ca. 85-90% av befolkningen

**Nynorsk:**
- Skapt av Ivar Aasen (1813-1896)
- Basert på norske dialekter, særlig vestnorske
- Opprinnelig kalt landsmål
- Sterkest på Vestlandet og i fjellbygdene
- Brukes av ca. 10-15% av befolkningen

**Ivar Aasens strategi:**
Aasen reiste rundt i Norge og samlet inn dialekter. Han mente at det virkelige norske språket lå i talemålet til vanlige folk, ikke i den dansk-påvirkede bykulturen.`,
    },
    {
      id: 'norsk-vg2-3-1-def-2',
      type: 'definition',
      title: 'Samnorsk-politikken',
      content: `**Hva var samnorsk?**
En språkpolitikk som tok sikte på å smelte bokmål og nynorsk sammen til ett felles norsk skriftspråk.

**Virkemidler:**
- Rettskrivingsreformer som nærmet målformene til hverandre
- Innføring av valgfrie former
- 1938-reformen var mest radikal

**Motstand:**
- Foreldreaksjonen mot "radikal bokmål"
- Riksmålsforbundet kjempet for konservativt bokmål
- Nynorskfolk fryktet å miste sin egenart

**Resultatet:**
Samnorsk-politikken ble offisielt oppgitt i 2002. I dag aksepteres språklig mangfold.`,
    },
    {
      id: 'norsk-vg2-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Språkdebatt i dag',
      problem: `Diskuter aktuelle språkpolitiske spørsmål i Norge.`,
      solution: `**Aktuelle debatter:**

**Sidemål i skolen:**
- Bør elever lære å skrive begge målformer?
- Argumenter for: Kulturarv, demokrati, forståelse
- Argumenter mot: Tidsbruk, lav motivasjon, lite relevant

**Nynorskens stilling:**
- Nynorsk er under press i mange kommuner
- Færre velger nynorsk som hovedmål
- Språkrådet arbeider for å styrke nynorsk

**Dialekter og standardspråk:**
- Bør dialekter brukes i offentligheten?
- Er dialektmangfold en styrke eller utfordring?

**Engelskpåvirkning:**
- Hvor mye engelsk bør vi akseptere?
- Domenetap: Engelsk tar over i visse områder
- Fornorsking vs. låneord

**Samisk og minoritetsspråk:**
- Samiske språk har offisiell status
- Kvensk, romani, romanes er også vernet
- Hvordan sikre disse språkenes fremtid?`,
    },
    {
      id: 'norsk-vg2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor Norge har to skriftspråk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var språksituasjonen etter 1814?',
            solution: 'Norge hadde dansk som skriftspråk etter 400 år i union med Danmark, men talemålet var norsk.',
          },
          {
            label: 'b',
            task: 'Hvilke to strategier oppstod for å få et norsk skriftspråk?',
            solution: 'Fornorsking av dansk (ble til bokmål) og nytt språk basert på dialekter (Ivar Aasens nynorsk).',
          },
        ],
        solution: 'Norges spesielle språksituasjon skyldes historien og to ulike strategier for nasjonsbygging.',
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
        type: 'classic',
        task: 'Forklar Ivar Aasens prosjekt og hvorfor han mente det var viktig.',
        hints: ['Tenk på nasjonalisme', 'Hvem talte "ekte" norsk?', 'Hva var alternativet?'],
        solution: 'Aasen mente det virkelige norske språket lå i dialektene til vanlige folk. Han samlet inn dialekter og skapte et skriftspråk basert på disse for å gi Norge et ekte norsk språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var samnorsk-politikken, og hvorfor mislyktes den?',
        hints: ['Hva var målet?', 'Hvem var mot?', 'Når ble den oppgitt?'],
        solution: 'Samnorsk var forsøket på å smelte bokmål og nynorsk sammen. Den mislyktes pga. motstand fra begge sider - riksmålstilhengere og nynorskfolk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et debattinnlegg (250-300 ord) om sidemålsordningen i skolen.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et standpunkt: for eller mot obligatorisk sidemål.',
            solution: 'Standpunktet skal være tydelig og begrunnet.',
          },
          {
            label: 'b',
            task: 'Bruk minst tre argumenter for ditt syn.',
            solution: 'Argumentene bør være saklige og veie fordeler/ulemper.',
          },
        ],
        hints: ['Tenk på kulturarv, demokrati, praktisk nytte, motivasjon'],
        solution: 'Innlegget skal vise evne til å argumentere saklig for et språkpolitisk standpunkt.',
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
        task: 'Diskuter engelskpåvirkningen på norsk. Er det et problem eller en naturlig utvikling?',
        hints: ['Tenk på domenetap', 'Låneord', 'Globalisering'],
        solution: 'Diskusjonen bør vise forståelse for argumenter på begge sider og reflektere over språkendring som fenomen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Retorikk og overtalelse
// ============================================================================

export const CHAPTER_NORSK_VG2_3_2: TextbookChapter = {
  id: 'norsk-vg2-3-2',
  courseId: 'norsk-vg2',
  chapterNumber: '3.2',
  title: 'Retorikk og overtalelse',
  description: 'Fordyp deg i retorisk analyse og lær å gjenkjenne overtalelsesteknikker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke retoriske analysebegreper',
    'gjenkjenne og vurdere overtalelsesteknikker',
  ],
  content: [
    {
      id: 'norsk-vg2-3-2-intro',
      type: 'text',
      content: `## Retorikk i det moderne samfunnet

Retorikk handler om hvordan vi overbeviser andre. I dag møter vi retoriske budskap overalt: i reklame, politikk, sosiale medier og nyheter.

**Hvorfor lære retorikk?**
- Bli en bedre kommunikator
- Gjennomskue manipulasjon
- Delta aktivt i demokratiet
- Forstå hvordan påvirkning fungerer

**Retorikkens renessanse:**
Med internett og sosiale medier har retorikk fått fornyet aktualitet. Evnen til å nå gjennom med budskapet er viktigere enn noensinne.`,
    },
    {
      id: 'norsk-vg2-3-2-def-1',
      type: 'definition',
      title: 'De fem arbeidsfasene (partes)',
      content: `Klassisk retorikk beskriver fem faser i arbeidet med en tale:

**1. Inventio (finne stoff)**
- Samle argumenter og materiale
- Analysere publikum og situasjon
- Velge hovedbudskap

**2. Dispositio (ordne stoffet)**
- Strukturere talen logisk
- Innledning, hoveddel, avslutning
- Bygge opp argumentasjonen

**3. Elocutio (formulere)**
- Velge ord og stil
- Bruke språklige virkemidler
- Tilpasse språket til publikum

**4. Memoria (huske)**
- Lære talen utenat eller med notater
- Øve på fremføringen

**5. Actio (fremføre)**
- Stemmebruk og kroppsspråk
- Øyekontakt og tilstedeværelse
- Tilpasse seg situasjonen`,
    },
    {
      id: 'norsk-vg2-3-2-def-2',
      type: 'definition',
      title: 'Argumentasjonsteknikker',
      content: `**Logiske argumenter (logos):**
- Årsak-virkning: "Røyking fører til kreft"
- Sammenlikning: "Andre land har innført dette med suksess"
- Eksempel: "Ta for eksempel Sverige..."
- Statistikk: "80% av forskerne mener..."

**Feilslutninger å se opp for:**
- **Ad hominem:** Angripe personen, ikke argumentet
- **Stråmann:** Forvrenge motstanderens argument
- **Falsk dilemma:** Presentere bare to alternativer
- **Appell til autoritet:** "Eksperter mener..." (uten belegg)
- **Glatte-bakke-argument:** "Hvis vi tillater dette, fører det til..."
- **Sirkelargumentasjon:** Bruke konklusjonen som premiss

**Følelsesmessige teknikker (patos):**
- Skremselspropaganda
- Nostalgi og gullaldertenkning
- Oss-mot-dem-retorikk
- Personlige historier`,
    },
    {
      id: 'norsk-vg2-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av politisk tale',
      problem: `Analyser denne passasjen fra en tenkt politisk tale:

"Mine medborgere, vi står ved et veiskille. I generasjoner har våre forfedre bygget dette landet sten for sten. Skal vi nå la fremmede krefter rive ned alt vi har skapt? Ekspertene er uenige, men vi vanlige folk vet hva som er rett. Velg med hjertet - stem på oss!"`,
      solution: `**Retorisk analyse:**

**Appellformer:**
- **Etos:** "Mine medborgere" - skaper fellesskap
- **Patos:** "Forfedre", "rive ned" - følelsesladede ord
- **Logos:** Svak - ingen konkrete argumenter

**Virkemidler:**
- Metafor: "veiskille", "sten for sten"
- Vi/dem-retorikk: "våre forfedre" vs. "fremmede krefter"
- Populisme: "vi vanlige folk" vs. "ekspertene"
- Imperativ: "Velg med hjertet"

**Feilslutninger:**
- **Stråmann:** Hvem er "fremmede krefter"?
- **Falsk dilemma:** Enten oss eller kaos
- **Appell til følelser:** "Velg med hjertet" - unngå rasjonell vurdering

**Vurdering:**
Talen bruker sterke følelsesmessige virkemidler, men mangler konkrete argumenter. Den spiller på frykt og gruppetilhørighet fremfor logikk.`,
    },
    {
      id: 'norsk-vg2-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar de fem arbeidsfasene i klassisk retorikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva innebærer inventio og dispositio?',
            solution: 'Inventio: Finne og samle stoff. Dispositio: Ordne stoffet i en logisk struktur.',
          },
          {
            label: 'b',
            task: 'Hvorfor er actio viktig for en tales virkning?',
            solution: 'Actio handler om fremføringen - stemme, kroppsspråk, øyekontakt. En god tale kan mislykkes med dårlig fremføring.',
          },
        ],
        solution: 'De fem fasene dekker hele prosessen fra forberedelse til fremføring.',
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
        type: 'classic',
        task: 'Identifiser feilslutninger i disse utsagnene:',
        subTasks: [
          {
            label: 'a',
            task: '"Klimaaktivister kjører selv bil, så vi kan ignorere hva de sier."',
            solution: 'Ad hominem - angriper personen i stedet for argumentet.',
          },
          {
            label: 'b',
            task: '"Enten støtter du forslaget fullt ut, eller så er du mot fremskritt."',
            solution: 'Falsk dilemma - presenterer bare to alternativer når det finnes flere.',
          },
          {
            label: 'c',
            task: '"Hvis vi tillater dette, er det bare et spørsmål om tid før alt bryter sammen."',
            solution: 'Glatte-bakke-argument - påstår at én handling nødvendigvis fører til ekstreme konsekvenser.',
          },
        ],
        solution: 'Å gjenkjenne feilslutninger er viktig for kritisk tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Finn en politisk tale eller reklamekampanje og analyser den retorisk.',
        hints: ['Se på appellformene', 'Finn virkemidler', 'Er det feilslutninger?'],
        solution: 'Analysen bør systematisk gjennomgå etos, patos, logos, virkemidler og eventuelle feilslutninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv og fremfør en kort tale (2-3 minutter) om et tema du brenner for.',
        subTasks: [
          {
            label: 'a',
            task: 'Planlegg talen med de fem arbeidsfasene.',
            solution: 'Vis systematisk bruk av inventio, dispositio, elocutio.',
          },
          {
            label: 'b',
            task: 'Bruk bevisst alle tre appellformene.',
            solution: 'Talen skal inneholde etos, patos og logos.',
          },
        ],
        hints: ['Start med et engasjerende åpning', 'Ha en tydelig struktur', 'Avslutt med en oppfordring'],
        solution: 'Talen vurderes etter struktur, argumentasjon og fremføring.',
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
        task: 'Diskuter: Er retorikk manipulasjon? Hva skiller god retorikk fra propaganda?',
        hints: ['Tenk på hensikt', 'Ærlighet', 'Respekt for publikum'],
        solution: 'God retorikk respekterer publikum og bruker ærlige virkemidler. Propaganda manipulerer og utnytter følelser for å oppnå makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.1: Dokumentar og reportasje
// ============================================================================

export const CHAPTER_NORSK_VG2_4_1: TextbookChapter = {
  id: 'norsk-vg2-4-1',
  courseId: 'norsk-vg2',
  chapterNumber: '4.1',
  title: 'Dokumentar og reportasje',
  description: 'Lær om dokumentarsjangeren og reportasjens virkemidler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere dokumentarfilmer og reportasjer',
    'forstå forholdet mellom virkelighet og fremstilling',
  ],
  content: [
    {
      id: 'norsk-vg2-4-1-intro',
      type: 'text',
      content: `## Dokumentar - virkeligheten på film

Dokumentarfilmen er en filmsjanger som tar sikte på å skildre virkeligheten. Men selv om den viser ekte hendelser og personer, er den alltid et resultat av valg - hva som filmes, hvordan det klippes, og hvilken historie som fortelles.

**Hva er en dokumentar?**
- Film som skildrer virkeligheten
- Bruker ekte personer, steder og hendelser
- Har ofte et budskap eller en vinkling
- Skapes gjennom utvalg og redigering

**Dokumentarens paradoks:**
All dokumentar er konstruert. Selv det mest "objektive" er resultat av valg. Regissøren velger hva kameraet peker på, hva som tas med, og hvordan det settes sammen.`,
    },
    {
      id: 'norsk-vg2-4-1-def-1',
      type: 'definition',
      title: 'Dokumentartyper',
      content: `**Observerende dokumentar:**
- Kameraet som "flue på veggen"
- Minimal innblanding fra filmskaperen
- Viser hendelser slik de utfolder seg
- Eksempel: Frederick Wisemans filmer

**Deltagende dokumentar:**
- Filmskaperen er synlig og deltar
- Intervjuer og samhandler med personer
- Viser prosessen med å lage filmen
- Eksempel: Michael Moores filmer

**Poetisk dokumentar:**
- Fokus på stemning og estetikk
- Kan være abstrakt eller assosiativ
- Bruker bilder og lyd kunstnerisk
- Eksempel: Godfrey Reggios Koyaanisqatsi

**Dramatisert dokumentar (dokudrama):**
- Gjenskaper virkelige hendelser med skuespillere
- Blander fakta og fiksjon
- Kan være problematisk mht. sannhet
- Eksempel: Rekonstruksjoner i true crime`,
    },
    {
      id: 'norsk-vg2-4-1-def-2',
      type: 'definition',
      title: 'Dokumentarens virkemidler',
      content: `**Visuelle virkemidler:**
- Kameravinkler og utsnitt
- Bildeutvalg og komposisjon
- Arkivmateriale og bilder
- Grafikk og animasjon

**Lyd og musikk:**
- Stemningsmusikk som styrer følelser
- Naturlig lyd vs. lagt på lyd
- Voice-over og fortellerstemme
- Stillhet som virkemiddel

**Strukturelle virkemidler:**
- Kronologisk vs. ikke-kronologisk
- Parallellhistorier
- Gjentakelse og kontraster
- Cliffhangers og spenningsoppbygging

**Intervju:**
- Valg av intervjuobjekter
- Spørsmålsformulering
- Klipping og utvalg av svar
- Bildebruk under intervju`,
    },
    {
      id: 'norsk-vg2-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av dokumentar',
      problem: `Se en dokumentarfilm (f.eks. norske Magnus eller Olavskilden) og analyser den.`,
      solution: `**Analysemodell for dokumentar:**

**1. Presentasjon:**
- Tittel, regissør, produksjonsår
- Tema og hovedpersoner
- Kort handlingsreferat

**2. Dokumentartype:**
- Observerende, deltagende, poetisk eller dramatisert?
- Hvor synlig er filmskaperen?

**3. Virkemidler:**
- Hvordan brukes musikk og lyd?
- Hvilke kamerateknikker dominerer?
- Hvordan er intervjuene gjort?
- Hvordan er filmen strukturert?

**4. Vinkling og budskap:**
- Hva vil filmskaperen fortelle?
- Er fremstillingen balansert?
- Hvilke perspektiver mangler?

**5. Forholdet til virkeligheten:**
- Hvor "sann" virker filmen?
- Hva er utelatt eller forenklet?
- Hvordan påvirker valgene vår oppfatning?

**6. Vurdering:**
- Er filmen overbevisende?
- Hva fungerer godt/dårlig?
- Hvilke etiske spørsmål reises?`,
    },
    {
      id: 'norsk-vg2-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar dokumentarens paradoks: Hvordan kan noe som viser virkeligheten, likevel være konstruert?',
        hints: ['Tenk på utvalg', 'Klipping', 'Musikk'],
        solution: 'Alt i en dokumentar er resultat av valg. Regissøren velger hva som filmes, hva som tas med, hvordan det klippes, og hvilken musikk som brukes. Disse valgene former vår oppfatning av virkeligheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv forskjellen mellom observerende og deltagende dokumentar. Gi eksempler.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner observerende dokumentar?',
            solution: 'Filmskaperen er usynlig, kameraet er som en "flue på veggen", minimal innblanding.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner deltagende dokumentar?',
            solution: 'Filmskaperen er synlig og aktiv, deltar i hendelsene, ofte intervjuer og kommentarer.',
          },
        ],
        solution: 'De to typene representerer ulike tilnærminger til hvordan virkeligheten skal skildres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Se en dokumentarfilm og skriv en analyse på 400-500 ord.',
        hints: ['Bruk analysemodellen', 'Vær konkret med eksempler', 'Vurder virkemidler og vinkling'],
        solution: 'Analysen skal demonstrere forståelse for dokumentarens virkemidler og forholdet mellom virkelighet og fremstilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter etiske spørsmål knyttet til dokumentarfilm.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva slags ansvar har filmskaperen overfor personene som portretteres?',
            solution: 'Ansvar for å ikke utnytte, forvrenge eller skade. Informert samtykke er viktig.',
          },
          {
            label: 'b',
            task: 'Når blir en dokumentar manipulerende?',
            solution: 'Når den bevisst utelater viktig informasjon, forvrenger sitater, eller bruker virkemidler for å villede.',
          },
        ],
        solution: 'Dokumentaretikk handler om balansen mellom å fortelle en god historie og å være ærlig overfor publikum og de som portretteres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en kort dokumentarskisse (på papir) om noe i ditt nærmiljø.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg tema og hovedperson(er).',
            solution: 'Temaet bør være avgrenset og tilgjengelig.',
          },
          {
            label: 'b',
            task: 'Beskriv hvilke scener du ville filmet og hvorfor.',
            solution: 'Vis bevisste valg om hva som skal inkluderes.',
          },
          {
            label: 'c',
            task: 'Forklar hvilken dokumentartype du ville laget.',
            solution: 'Begrunnet valg av observerende, deltagende eller annen type.',
          },
        ],
        solution: 'Skissen skal vise forståelse for dokumentarens virkemidler og bevisste valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2: Filmanalyse
// ============================================================================

export const CHAPTER_NORSK_VG2_4_2: TextbookChapter = {
  id: 'norsk-vg2-4-2',
  courseId: 'norsk-vg2',
  chapterNumber: '4.2',
  title: 'Filmanalyse',
  description: 'Lær å analysere film som tekst med fokus på filmspråk og virkemidler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere film med relevante fagbegreper',
    'forstå hvordan filmspråket skaper mening',
  ],
  content: [
    {
      id: 'norsk-vg2-4-2-intro',
      type: 'text',
      content: `## Film som tekst

Film er en sammensatt tekstform som kombinerer bilder, lyd, musikk og dialog. For å analysere film trenger vi et eget begrepsapparat - filmspråket.

**Hvorfor analysere film?**
- Forstå hvordan film påvirker oss
- Se bevisste valg bak det vi ser
- Utvikle kritisk medieforståelse
- Verdsette film som kunstform

**Filmens byggeklosser:**
En film består av tusenvis av enkeltbilder (frames) satt sammen til scener og sekvenser. Hver enkelt avgjørelse - fra kameravinkel til musikkvalg - bidrar til helheten.`,
    },
    {
      id: 'norsk-vg2-4-2-def-1',
      type: 'definition',
      title: 'Kamerateknikker',
      content: `**Bildeutsnitt:**
- **Totalbilde:** Viser hele settingen/miljøet
- **Halvtotalt:** Person fra knærne og opp
- **Halvnært:** Person fra livet og opp
- **Nært:** Ansiktet og skuldrene
- **Ultranært:** Detalj (øyne, hender)

**Kameravinkler:**
- **Normalperspektiv:** I øyehøyde
- **Fugleperspektiv:** Ovenfra - gjør figuren liten
- **Froskeperspektiv:** Nedenfra - gjør figuren mektig
- **Skjevt kamera (dutch angle):** Skaper uro

**Kamerabevegelser:**
- **Panorering:** Kameraet svinger på stativ
- **Tilting:** Kameraet vipper opp/ned
- **Tracking/dolly:** Kameraet flytter seg
- **Håndholdt:** Skaper realisme/uro
- **Steadicam:** Flytende bevegelse`,
    },
    {
      id: 'norsk-vg2-4-2-def-2',
      type: 'definition',
      title: 'Klipping og lyd',
      content: `**Klippeteknikker:**
- **Kontinuitetsklipping:** Usynlig, flytende overgang
- **Kryssklipping:** Veksler mellom parallelle handlinger
- **Match cut:** Visuell sammenheng mellom klipp
- **Jump cut:** Brå, synlig klipp
- **Montasje:** Mange korte klipp med symbolsk betydning

**Lyd i film:**
- **Diegetisk lyd:** Lyd som finnes i filmens verden (dialog, skritt)
- **Ikke-diegetisk lyd:** Lyd lagt på utenfra (filmmusikk, voice-over)
- **Lydeffekter:** Forsterker handling og stemning
- **Stillhet:** Kraftfullt virkemiddel

**Musikk:**
- Understreker eller motsier det vi ser
- Skaper stemning og forventning
- Ledemotiv: Melodi knyttet til person/tema
- Kontrapunktisk musikk: Motsier bildene`,
    },
    {
      id: 'norsk-vg2-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av filmsekvens',
      problem: `Analyser åpningssekvensen i en kjent film med fokus på filmspråk.`,
      solution: `**Analysemodell for filmsekvens:**

**1. Beskrivelse:**
- Hva skjer i sekvensen?
- Hva ser og hører vi?

**2. Kamerateknikk:**
- Hvilke bildeutsnitt dominerer?
- Hvilke vinkler brukes?
- Er kameraet stillestående eller i bevegelse?

**3. Klipping:**
- Hvor raskt klippes det?
- Er det kontinuitetsklipping eller andre teknikker?
- Hvordan skapes sammenheng?

**4. Lyd og musikk:**
- Er lyden diegetisk eller ikke-diegetisk?
- Hvilken stemning skaper musikken?
- Hvordan samspiller lyd og bilde?

**5. Mise-en-scène:**
- Lyssetting (høy/lav key)
- Fargebruk
- Scenografi og kostymer
- Skuespillernes plassering

**6. Tolkning:**
- Hva forteller virkemidlene?
- Hvordan settes stemningen?
- Hvilke temaer introduseres?

**Eksempel: Åpningen av "Der ingen skulle tru at nokon kunne bu"**
- Fugleperspektiv over dramatisk natur = menneskets litenhet
- Langsomme kamerabevegelser = ro, ettertanke
- Naturlyder + rolig musikk = autentisitet og stemning`,
    },
    {
      id: 'norsk-vg2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom disse begrepene:',
        subTasks: [
          {
            label: 'a',
            task: 'Fugleperspektiv vs. froskeperspektiv',
            solution: 'Fugleperspektiv: Kameraet ser ned, gjør figuren liten/sårbar. Froskeperspektiv: Kameraet ser opp, gjør figuren stor/mektig.',
          },
          {
            label: 'b',
            task: 'Diegetisk vs. ikke-diegetisk lyd',
            solution: 'Diegetisk lyd finnes i filmens verden (karakterene kan høre den). Ikke-diegetisk lyd er lagt på utenfra (filmmusikk).',
          },
          {
            label: 'c',
            task: 'Kontinuitetsklipping vs. jump cut',
            solution: 'Kontinuitetsklipping skaper flytende, usynlige overganger. Jump cut er brå, synlige klipp som bryter flyten.',
          },
        ],
        solution: 'Begrepene beskriver grunnleggende elementer i filmspråket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan kan kameravinkler brukes til å formidle maktforhold mellom karakterer?',
        hints: ['Tenk på fugleperspektiv og froskeperspektiv', 'Hvem ser vi opp på, hvem ser vi ned på?'],
        solution: 'Froskeperspektiv får en karakter til å virke mektig/truende. Fugleperspektiv får en karakter til å virke liten/sårbar. Ved å veksle mellom disse kan filmen vise maktforholdet mellom karakterer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg en filmsekvens (3-5 minutter) og analyser den med fokus på filmspråk.',
        hints: ['Bruk analysemodellen', 'Beskriv konkrete eksempler', 'Forklar hvordan virkemidlene skaper mening'],
        solution: 'Analysen skal demonstrere evne til å identifisere og tolke filmspråklige virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign hvordan to filmer i samme sjanger bruker filmspråket ulikt.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg to filmer i samme sjanger (f.eks. to skrekkfilmer eller to actionfilmer).',
            solution: 'Valget bør gi gode sammenligningsgrunnlag.',
          },
          {
            label: 'b',
            task: 'Analyser hvordan de bruker kamera, klipping og lyd forskjellig.',
            solution: 'Vis konkrete eksempler på ulik bruk av virkemidler.',
          },
          {
            label: 'c',
            task: 'Hva sier dette om filmenes ulike tilnærminger?',
            solution: 'Reflekter over hvordan valgene påvirker opplevelsen.',
          },
        ],
        solution: 'Sammenligningen skal vise forståelse for hvordan filmspråklige valg skaper ulike uttrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en fullstendig filmanalyse (500-700 ord) av en selvvalgt film.',
        hints: ['Inkluder handling, tema, karakterer og filmspråk', 'Bruk fagbegreper', 'Gi en begrunnet vurdering'],
        solution: 'Analysen skal demonstrere evne til å analysere film helhetlig med relevant fagterminologi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.1: Akademisk skriving og drøfting
// ============================================================================

export const CHAPTER_NORSK_VG2_5_1: TextbookChapter = {
  id: 'norsk-vg2-5-1',
  courseId: 'norsk-vg2',
  chapterNumber: '5.1',
  title: 'Akademisk skriving og drøfting',
  description: 'Lær å skrive drøftende tekster med akademisk struktur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive drøftende tekster med klar struktur',
    'vurdere ulike perspektiver og argumenter',
  ],
  content: [
    {
      id: 'norsk-vg2-5-1-intro',
      type: 'text',
      content: `## Drøfting - å veie argumenter

Drøfting er en sentral akademisk ferdighet. Å drøfte betyr å belyse en problemstilling fra flere sider, veie argumenter mot hverandre, og komme frem til en begrunnet konklusjon.

**Hva er drøfting?**
- Presentere ulike synspunkter på en sak
- Veie argumenter for og mot
- Vurdere styrker og svakheter
- Konkludere basert på vurderingen

**Forskjell på beskrivelse og drøfting:**
- Beskrivelse: "Straffen for narkotika er fengsel."
- Drøfting: "Er fengselsstraff for narkotikabruk en effektiv metode for å redusere rusbruk?"`,
    },
    {
      id: 'norsk-vg2-5-1-def-1',
      type: 'definition',
      title: 'Struktur i drøftende tekster',
      content: `**INNLEDNING:**
- Presenter tema og bakgrunn
- Formuler problemstilling eller tese
- Avgrens hva du vil drøfte
- Vekk leserens interesse

**HOVEDDEL:**
Organiser drøftingen tematisk eller etter argumenter:

*Tematisk organisering:*
- Tema 1: Argumenter for og mot
- Tema 2: Argumenter for og mot
- osv.

*Argument-organisering:*
- Først alle argumenter for
- Så alle argumenter mot
- Sammenligning og vurdering

**Hvert argument bør:**
1. Presenteres klart (påstand)
2. Begrunnes/forklares
3. Eksemplifiseres
4. Vurderes kritisk

**AVSLUTNING:**
- Oppsummer hovedpunktene
- Presenter din konklusjon
- Konklusjonen må være begrunnet
- Eventuelt: Pek videre`,
    },
    {
      id: 'norsk-vg2-5-1-def-2',
      type: 'definition',
      title: 'Drøftende setningsinnledere',
      content: `**Introdusere synspunkt:**
- "På den ene siden..."
- "Et argument for dette er..."
- "Tilhengere av dette synet mener..."
- "Det kan hevdes at..."

**Motargumenter:**
- "På den andre siden..."
- "Imidlertid kan det innvendes at..."
- "Kritikere påpeker at..."
- "Dette synet har blitt kritisert for..."

**Vurdere:**
- "Dette argumentet er sterkt/svakt fordi..."
- "Denne innvendingen er relevant, men..."
- "Det er usikkert om..."
- "Forskning tyder på at..."

**Konkludere:**
- "Alt i alt mener jeg at..."
- "Basert på denne drøftingen..."
- "Selv om det finnes gode argumenter på begge sider..."
- "Den mest overbevisende posisjonen er..."`,
    },
    {
      id: 'norsk-vg2-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Drøftende avsnitt',
      problem: `Skriv et drøftende avsnitt om karakterer i skolen.`,
      solution: `**Eksempel på drøftende avsnitt:**

*Et argument for karakterer er at de gir elevene tydelig tilbakemelding på prestasjonene sine. Når en elev får karakteren 4 i matematikk, vet eleven at prestasjonene ligger på et middels nivå og at det er rom for forbedring. Karakterer kan dermed motivere til innsats og gi et klart mål å jobbe mot. Forskning fra Utdanningsdirektoratet viser at mange elever opplever karakterer som motiverende (Udir, 2022).*

*Imidlertid kan det innvendes at karakterfokuset også kan ha negative konsekvenser. Kritikere påpeker at karakterpress kan føre til stress og angst, særlig blant prestasjonsorienterte elever. Dessuten kan fokuset på karakterer føre til at elever lærer for prøven heller enn for forståelsen. Pedagogisk forskning tyder på at indre motivasjon - å lære fordi man synes det er interessant - er mer effektivt for langsiktig læring enn ytre motivasjon som karakterer (Ryan & Deci, 2000).*

*Begge synspunktene har gyldighet. Karakterer kan gi nyttig tilbakemelding, men bør kanskje suppleres med andre vurderingsformer for å unngå de negative sidene ved karakterpress.*

**Hva gjør dette til god drøfting:**
1. Presenterer argument med begrunnelse
2. Bruker kildehenvisning
3. Presenterer motargument
4. Vurderer begge sider
5. Balansert avslutning`,
    },
    {
      id: 'norsk-vg2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på å beskrive og å drøfte?',
        subTasks: [
          {
            label: 'a',
            task: 'Gjør om denne beskrivelsen til en drøftende problemstilling: "Mange unge bruker sosiale medier."',
            solution: 'Drøftende: "Er sosiale medier en positiv eller negativ faktor for unges sosiale utvikling?"',
          },
          {
            label: 'b',
            task: 'Forklar hva som kjennetegner drøfting.',
            solution: 'Drøfting innebærer å belyse flere sider av en sak, veie argumenter mot hverandre, og konkludere basert på vurderingen.',
          },
        ],
        solution: 'Beskrivelse bare presenterer fakta, mens drøfting vurderer og veier ulike perspektiver.',
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
        type: 'classic',
        task: 'Lag en disposisjon for en drøftende tekst om et selvvalgt tema.',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler en problemstilling.',
            solution: 'Problemstillingen bør være åpen og invitere til drøfting, ikke ha et opplagt svar.',
          },
          {
            label: 'b',
            task: 'List opp 2-3 argumenter for og 2-3 argumenter mot.',
            solution: 'Argumentene bør være relevante og kunne begrunnes.',
          },
          {
            label: 'c',
            task: 'Skisser innledning og avslutning.',
            solution: 'Innledningen presenterer tema og problemstilling. Avslutningen oppsummerer og konkluderer.',
          },
        ],
        hints: ['Velg et tema som engasjerer deg', 'Tenk på hvem som mener hva'],
        solution: 'Disposisjonen skal vise at du kan strukturere en drøfting logisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv et drøftende avsnitt (150-200 ord) der du presenterer et argument og et motargument.',
        hints: ['Bruk drøftende setningsinnledere', 'Inkluder begrunnelse og vurdering'],
        solution: 'Avsnittet skal demonstrere evne til å presentere, begrunne og vurdere argumenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en fullstendig drøftende tekst (500-700 ord) om en aktuell problemstilling.',
        hints: ['Følg strukturen: innledning, hoveddel, avslutning', 'Bruk kilder', 'Vei argumentene mot hverandre', 'Konkluder'],
        solution: 'Teksten skal demonstrere evne til å drøfte systematisk med god struktur og kildebruk.',
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
        task: 'Gi tilbakemelding på en medelevs drøftende tekst.',
        subTasks: [
          {
            label: 'a',
            task: 'Vurder strukturen: Er innledning, hoveddel og avslutning tydelige?',
            solution: 'Vurder om problemstillingen er klar og om teksten har logisk oppbygning.',
          },
          {
            label: 'b',
            task: 'Vurder drøftingen: Er argumentene balanserte og godt begrunnet?',
            solution: 'Se etter kildebruk, begrunnelser og vurderinger.',
          },
          {
            label: 'c',
            task: 'Gi konkrete forslag til forbedring.',
            solution: 'Tilbakemeldingen skal være konstruktiv og konkret.',
          },
        ],
        solution: 'Responsarbeid utvikler evnen til å vurdere tekster og forbedre egen skriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Muntlig eksamensforberedelse
// ============================================================================

export const CHAPTER_NORSK_VG2_5_2: TextbookChapter = {
  id: 'norsk-vg2-5-2',
  courseId: 'norsk-vg2',
  chapterNumber: '5.2',
  title: 'Muntlig eksamensforberedelse',
  description: 'Forbered deg til muntlig eksamen med teknikker for presentasjon og fagsamtale.',
  estimatedMinutes: 50,
  competenceGoals: [
    'presentere fagstoff muntlig på en strukturert måte',
    'delta i faglige samtaler og drøftinger',
  ],
  content: [
    {
      id: 'norsk-vg2-5-2-intro',
      type: 'text',
      content: `## Muntlig eksamen i norsk

Muntlig eksamen i norsk består vanligvis av to deler: en forberedt presentasjon og en påfølgende fagsamtale. God forberedelse er nøkkelen til å lykkes.

**Typisk format:**
- 24 eller 48 timers forberedelsestid
- 10-15 minutters presentasjon
- 10-15 minutters fagsamtale
- Totalvurdering av begge deler

**Hva vurderes?**
- Faglig innhold og forståelse
- Struktur og sammenheng
- Språk og fremføring
- Evne til refleksjon og drøfting`,
    },
    {
      id: 'norsk-vg2-5-2-def-1',
      type: 'definition',
      title: 'Den forberedte presentasjonen',
      content: `**Forberedelsestiden:**
- Les oppgaven nøye - hva spør de om?
- Avgrens temaet - du kan ikke si alt
- Lag en klar struktur
- Finn relevante eksempler
- Øv på fremføringen

**Struktur:**
1. **Innledning (1-2 min):** Presenter tema, avgrensning, problemstilling
2. **Hoveddel (7-10 min):** 3-4 hovedpunkter med eksempler
3. **Avslutning (1-2 min):** Oppsummering, konklusjon, eventuelt videre perspektiv

**Tips for presentasjonen:**
- Bruk stikkord, ikke manus
- Ha øyekontakt med sensorene
- Varier stemmen - unngå monotoni
- Bruk pauser effektivt
- Vis engasjement for stoffet
- Ha en tydelig rød tråd`,
    },
    {
      id: 'norsk-vg2-5-2-def-2',
      type: 'definition',
      title: 'Fagsamtalen',
      content: `**Hva er fagsamtalen?**
En samtale mellom deg og sensorene der de stiller spørsmål om presentasjonen din og andre deler av pensum.

**Formål:**
- Teste bredde i kunnskapene dine
- Se om du kan reflektere og drøfte
- Gi deg mulighet til å utdype
- Teste forståelse utover det forberedte

**Typiske spørsmål:**
- "Kan du utdype dette poenget?"
- "Hvordan henger dette sammen med...?"
- "Hva mener du om...?"
- "Kan du gi flere eksempler?"
- "Hvordan ville du sammenlignet dette med...?"

**Tips for fagsamtalen:**
- Lytt nøye til spørsmålet
- Ta deg tid til å tenke
- Svar strukturert
- Vis at du kan koble ulike temaer
- Innrøm det hvis du ikke vet
- Still oppklarende spørsmål om du er usikker`,
    },
    {
      id: 'norsk-vg2-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Oppgaveløsning',
      problem: `Oppgave: "Gjør rede for realismen som litterær epoke og analyser en realistisk tekst. Drøft om realismens temaer er relevante i dag."`,
      solution: `**Eksempel på struktur:**

**Innledning (2 min):**
- Definer realismen kort
- Avgrens: Fokus på norsk realisme 1870-1890
- Problemstilling: Er realismens samfunnskritikk fortsatt aktuell?

**Hoveddel:**

*Del 1: Realismens bakgrunn og kjennetegn (3-4 min)*
- Historisk kontekst: Brandes, industrialisering
- Kjennetegn: Samfunnskritikk, objektiv stil, typiske karakterer
- Sentrale temaer: Kvinnesak, klasseskiller, dobbeltmoral

*Del 2: Tekstanalyse (4-5 min)*
- Ibsens Et dukkehjem
- Handling og tema
- Analyse av nøkkelscene
- Realistiske trekk i teksten

*Del 3: Aktualitet (2-3 min)*
- Likestillingskamp i dag
- #MeToo som moderne "problemdiktning"
- Sosiale forskjeller fortsatt aktuelt

**Avslutning (1-2 min):**
- Realismens arv lever videre
- Litteraturen som samfunnskritikk er fortsatt viktig
- Formen er annerledes, men temaene består

**Mulige oppfølgingsspørsmål:**
- "Hvordan skiller realismen seg fra naturalismen?"
- "Hvilke andre Ibsen-verk kjenner du til?"
- "Kan du sammenligne med en moderne forfatter?"`,
    },
    {
      id: 'norsk-vg2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Lag en disposisjon for en muntlig presentasjon om modernismen.',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler en avgrenset problemstilling.',
            solution: 'F.eks.: "Hvordan speiler modernistisk litteratur opplevelsen av det moderne livet?"',
          },
          {
            label: 'b',
            task: 'Del hoveddelen inn i 3-4 hovedpunkter.',
            solution: 'F.eks.: Bakgrunn, kjennetegn, teksteksempel, aktualitet.',
          },
          {
            label: 'c',
            task: 'Velg en tekst du vil analysere.',
            solution: 'Velg en tekst du kjenner godt og kan si mye om.',
          },
        ],
        hints: ['Tenk på tidsbruken', 'Ha konkrete eksempler'],
        solution: 'Disposisjonen skal vise at du kan strukturere en presentasjon logisk.',
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
        type: 'classic',
        task: 'Øv på å svare på oppfølgingsspørsmål:',
        subTasks: [
          {
            label: 'a',
            task: '"Kan du sammenligne realismen og modernismen?"',
            solution: 'Strukturert svar: Syn på virkeligheten, litterær form, tematikk. Bruk konkrete eksempler.',
          },
          {
            label: 'b',
            task: '"Hvilken tekst fra pensum har gjort størst inntrykk på deg, og hvorfor?"',
            solution: 'Personlig svar med faglig begrunnelse. Vis at du kan reflektere.',
          },
        ],
        hints: ['Ta deg tid til å tenke', 'Svar strukturert', 'Bruk eksempler'],
        solution: 'Evnen til å svare strukturert og faglig på uventede spørsmål er viktig i fagsamtalen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hold en 5-minutters presentasjon om et selvvalgt tema fra pensum. Be om tilbakemelding.',
        hints: ['Bruk stikkord', 'Ha øyekontakt', 'Varier stemmen'],
        solution: 'Presentasjonen skal demonstrere evne til strukturert muntlig fremstilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Simuler en fagsamtale med en medelev. Bytt på å stille spørsmål.',
        subTasks: [
          {
            label: 'a',
            task: 'Forbered 5 oppfølgingsspørsmål basert på en presentasjon.',
            solution: 'Spørsmålene bør teste bredde, forståelse og evne til å koble temaer.',
          },
          {
            label: 'b',
            task: 'Øv på å svare og gi tilbakemelding til hverandre.',
            solution: 'Fokuser på struktur i svarene og faglig innhold.',
          },
        ],
        solution: 'Simulering av fagsamtale er god forberedelse til eksamen.',
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
        task: 'Lag en oversikt over hovedtemaene i norskfaget VG2 og hvordan de henger sammen.',
        hints: ['Tenk på sammenhenger mellom epoker', 'Hvordan henger språk og litteratur sammen?', 'Hvilke temaer går igjen?'],
        solution: 'Oversikten skal vise helhetlig forståelse av faget og evne til å se sammenhenger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const NORSK_VG2_CHAPTERS = [
  CHAPTER_NORSK_VG2_1_1,
  CHAPTER_NORSK_VG2_1_2,
  CHAPTER_NORSK_VG2_2_1,
  CHAPTER_NORSK_VG2_2_2,
  CHAPTER_NORSK_VG2_3_1,
  CHAPTER_NORSK_VG2_3_2,
  CHAPTER_NORSK_VG2_4_1,
  CHAPTER_NORSK_VG2_4_2,
  CHAPTER_NORSK_VG2_5_1,
  CHAPTER_NORSK_VG2_5_2,
];
