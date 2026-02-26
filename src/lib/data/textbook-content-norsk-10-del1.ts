/**
 * Tekstbok innhold for Norsk 10. klasse - Del 1 (Kapittel 1.1-2.2)
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Avsluttende år med fokus på litteraturhistorie, sakprosa, kildekritikk
 * og eksamensforberedelse.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Litteraturhistorie og analyse
// LK20: Analysere og tolke tekster fra ulike litterære epoker
// ============================================================================

export const CHAPTER_NORSK_10_1_1: TextbookChapter = {
  id: 'norsk-10-1-1',
  courseId: 'norsk-10',
  chapterNumber: '1.1',
  title: 'Litteraturhistorie og analyse',
  description: 'Lær om norsk litteraturhistorie fra realismen til modernismen, med tekstanalyse og praktiske øvelser.',
  estimatedMinutes: 75,
  competenceGoals: [
    'analysere og tolke tekster fra ulike litterære epoker',
    'sammenligne tekster fra ulike tider og kulturer og drøfte hvordan de er påvirket av sin samtid',
    'bruke fagspråk og argumentere saklig i diskusjoner om litteratur',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-1-1-intro',
      type: 'text',
      content: `## Litteraturhistorie: Forfatterne som forandret Norge

Tenk deg at du lever i Norge på 1870-tallet. Kvinner har nesten ingen rettigheter, kirken bestemmer mye av hverdagen, og det finnes strenge regler for hva som er «sømmelig» å snakke om. Så kommer det en gruppe forfattere som river ned tabuene. De skriver om utroskap, undertrykkelse og hykleri. Publikum er i sjokk. Noen roper skandale. Andre jubler.

Dette er historien om realismen — og epokene som fulgte. I dette kapittelet skal du lære om de viktigste litterære epokene fra 1850 til 1940, bli kjent med forfatterne som formet norsk kultur, og — viktigst av alt — lære å **analysere** tekstene deres.

Hvorfor er dette viktig? Fordi litteratur ikke bare er gamle bøker. Litteraturen speiler samfunnet den ble skrevet i, og ved å forstå fortiden forstår vi også vår egen tid bedre.`,
    },

    // ========== DEFINISJON: LITTERÆRE EPOKER ==========
    {
      id: 'norsk-10-1-1-def-epoker',
      type: 'definition',
      title: 'Litterære epoker',
      content: `En **litterær epoke** er en tidsperiode der mange forfattere deler bestemte kjennetegn i stil, tema og syn på verden.

Epokene vi skal gjennomgå:
- **Realismen** (ca. 1850–1890)
- **Naturalismen** (ca. 1880–1900)
- **Nyromantikken** (ca. 1890–1905)
- **Modernismen** (ca. 1900–1940)

**Viktig:** Epokene overlapper hverandre. Det er ikke slik at alle forfattere plutselig skifter stil på én bestemt dato. Overgangene er gradvise, og noen forfattere hører til flere epoker.`,
    },

    // ========== REALISMEN ==========
    {
      id: 'norsk-10-1-1-realismen',
      type: 'text',
      content: `## Realismen (ca. 1850–1890)

### Bakgrunn
Realismen vokste frem i en tid med store samfunnsendringer. Industrialiseringen forandret livet til millioner av mennesker, og nye politiske ideer om demokrati og likestilling spredte seg. Forfatterne ville ikke lenger skrive romantiske fantasier — de ville vise **virkeligheten slik den faktisk var**.

### Kjennetegn
- **Samfunnskritikk:** Forfatterne avslørte urettferdighet og hykleri
- **Hverdagsrealisme:** Handlingen foregår i gjenkjennelige, samtidige miljøer
- **Typiske personer:** Karakterene representerer ulike samfunnsgrupper
- **Objektivt språk:** Forfatteren prøver å skildre virkeligheten nøkternt
- **Problemdebatt:** Tekstene tar opp kontroversielle tema

### Sentrale tema
- Kvinneundertrykkelse og manglende rettigheter
- Klasseskiller og økonomisk urettferdighet
- Religiøst hykleri og dobbeltmoral
- Maktmisbruk i familien og samfunnet

### Viktige forfattere
- **Henrik Ibsen** (1828–1906): «Et dukkehjem», «En folkefiende», «Gjengangere»
- **Alexander Kielland** (1849–1906): «Gift», «Garman & Worse»
- **Jonas Lie** (1833–1908): «Familien på Gilje»
- **Bjørnstjerne Bjørnson** (1832–1910): «En hanske», «Over ævne»

### «De fire store»
Ibsen, Bjørnson, Kielland og Lie kalles «de fire store» i norsk litteratur. Sammen formet de den norske realismen og satte Norge på det europeiske litteraturkartet.`,
    },

    // ========== EKSEMPEL: ANALYSE AV IBSEN ==========
    {
      id: 'norsk-10-1-1-example-ibsen',
      type: 'example',
      title: 'Eksempel: Analyse av Ibsens «Et dukkehjem» (1879)',
      problem: `Les dette utdraget fra slutten av «Et dukkehjem», der Nora snakker med ektemannen Helmer:

**NORA:** «Jeg har vært din dukkekone her, likesom jeg hjemme var papas dukkebarn. Og barna, de har igjen vært mine dukker. Jeg syntes det var morsomt når du lekte med meg, likesom de syntes det var morsomt når jeg lekte med dem. Det har vært vårt ekteskap, Torvald.»

**HELMER:** «Det er noe sant i det du sier — overdrevet og overspent, men det er dog noe sant i det. Men heretter skal det bli annerledes. Legens tid er forbi; nå kommer oppdragelsens.»

**NORA:** «Hvems oppdragelse — min eller barnas?»

**HELMER:** «Både din og barnas, min elskede Nora.»

**NORA:** «Akk, Torvald, du er ikke mannen til å oppdra meg til en riktig hustru for deg.»

Analyser dette utdraget. Hvilken epoke hører teksten til, hvilke tema tar den opp, og hvilke virkemidler bruker Ibsen?`,
      solution: `**Epoke:** Realismen

**Tema:**
- Kvinneundertrykkelse i ekteskapet
- Manglende selvstendighet
- Maktforhold mellom kjønnene
- Oppvåkning og frigjøring

**Virkemidler:**
- **Metafor:** «dukkekone» og «dukkebarn» — Nora sammenligner seg med en dukke, altså et objekt uten egen vilje. Hun har vært en leke for menn hele livet: først for faren, deretter for ektemannen.
- **Gjentakelse:** Ordet «dukke» gjentas i flere former og forsterker budskapet.
- **Parallellisme:** Forholdet far–datter speiles i mann–kone-forholdet. Mønsteret gjentar seg.
- **Ironi:** Helmer tilbyr seg å «oppdra» Nora, uten å forstå at det er nettopp denne holdningen hun kritiserer.
- **Dialog som avslører:** Helmers svar viser at han ikke forstår hva Nora egentlig sier.

**Tolkning:**
Ibsen bruker dette utdraget til å kritisere datidens syn på kvinner. Nora innser at hun aldri har vært et selvstendig menneske — hun har bare spilt en rolle. Helmers reaksjon viser at han fortsatt ser på henne som et barn som trenger veiledning. Stykket var svært kontroversielt da det kom ut, fordi Nora til slutt forlater mann og barn.

**Samfunnskritikk:** Ibsen angriper ikke bare Helmer som person, men hele samfunnsstrukturen som gjør kvinner til «dukker».`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE REALISMEN ==========
    {
      id: 'norsk-10-1-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-1',
        number: '1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det viktigste kjennetegnet på realismen?',
        options: [
          {
            id: 'a',
            text: 'Fokus på følelser, drømmer og det overnaturlige',
            isCorrect: false,
            feedback: 'Feil. Dette er kjennetegn på romantikken og nyromantikken, ikke realismen.',
          },
          {
            id: 'b',
            text: 'Forfatterne ville vise virkeligheten og kritisere samfunnsproblemer',
            isCorrect: true,
            feedback: 'Riktig! Realismens forfattere ville skildre virkeligheten slik den var og sette søkelys på urettferdighet.',
          },
          {
            id: 'c',
            text: 'Eksperimentell form med brutt tidslinje og fragmenter',
            isCorrect: false,
            feedback: 'Feil. Eksperimentell form er kjennetegn på modernismen, ikke realismen.',
          },
          {
            id: 'd',
            text: 'Mennesket er fullstendig styrt av arv og miljø',
            isCorrect: false,
            feedback: 'Feil. Determinisme (at mennesket er styrt av arv og miljø) er kjennetegn på naturalismen.',
          },
        ],
        solution: 'Alternativ B er riktig. Realismen handlet om å vise virkeligheten og kritisere samfunnet.',
      },
    },

    // ========== OPPGAVE 2: KOBLE FORFATTER TIL VERK ==========
    {
      id: 'norsk-10-1-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-2',
        number: '1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble forfatter til riktig verk. Trekk fra hukommelsen eller bruk teksten ovenfor.',
        subTasks: [
          {
            label: 'a',
            task: 'Henrik Ibsen',
            solution: '«Et dukkehjem»',
            multipleChoiceOptions: ['«Et dukkehjem»', '«Sult»', '«Gift»', '«Familien på Gilje»'],
          },
          {
            label: 'b',
            task: 'Alexander Kielland',
            solution: '«Gift»',
            multipleChoiceOptions: ['«Gift»', '«Et dukkehjem»', '«Victoria»', '«Gjengangere»'],
          },
          {
            label: 'c',
            task: 'Jonas Lie',
            solution: '«Familien på Gilje»',
            multipleChoiceOptions: ['«Familien på Gilje»', '«En hanske»', '«Gift»', '«Sult»'],
          },
        ],
        solution: 'a) «Et dukkehjem», b) «Gift», c) «Familien på Gilje»',
      },
    },

    // ========== NATURALISMEN ==========
    {
      id: 'norsk-10-1-1-naturalismen',
      type: 'text',
      content: `## Naturalismen (ca. 1880–1900)

### Bakgrunn
Naturalismen var en forlengelse av realismen, men gikk enda lenger. Mens realistene ville vise virkeligheten, ville naturalistene vise **den brutale sannheten** — også det stygge, vonde og tabubelagte. Naturalismen var sterkt påvirket av Darwins evolusjonsteori og nye ideer om at mennesket er formet av biologi og omgivelser.

### Kjennetegn
- **Determinisme:** Mennesket er styrt av arv og miljø — vi velger ikke fritt
- **Vitenskapelig tilnærming:** Forfatteren observerer mennesker som en forsker
- **Mørke tema:** Alkoholisme, fattigdom, sykdom, undertrykkelse
- **Tabuer brytes:** Seksualitet, galskap, selvmord
- **Pessimistisk menneskesyn:** Mennesker er fanget i sin skjebne

### Viktige forfattere
- **Amalie Skram** (1846–1905): «Constance Ring», «Hellemyrsfolket»
- **Hans Jæger** (1854–1910): «Fra Kristiania-Bohêmen»
- **Christian Krohg** (1852–1925): «Albertine» (roman og maleri)

### Forskjell mellom realisme og naturalisme

| Trekk | Realismen | Naturalismen |
|-------|-----------|--------------|
| Menneskesyn | Kan velge og forandre | Styrt av arv og miljø |
| Tone | Kritisk, men med håp | Pessimistisk, mørk |
| Tema | Samfunnsproblemer | Menneskets dyriske natur |
| Formål | Debatt og endring | Vise sannheten, uansett |`,
    },

    // ========== DEFINISJON: DETERMINISME ==========
    {
      id: 'norsk-10-1-1-def-determinisme',
      type: 'definition',
      title: 'Determinisme',
      content: `**Determinisme** er ideen om at menneskets handlinger og skjebne er bestemt på forhånd av faktorer vi ikke kontrollerer.

I naturalismen handler dette om **biologisk determinisme** (arv) og **sosial determinisme** (miljø):
- Arv: Du arver egenskaper fra foreldrene dine, inkludert tilbøyeligheter til sykdom eller avhengighet
- Miljø: Oppvekstmiljøet ditt former hvem du blir

**I litteraturen betyr dette:**
Naturalistiske karakterer «kan ikke annet» enn å handle som de gjør. De er fanget av sin bakgrunn. Dette er en viktig forskjell fra realismen, der karakterene ofte opplever en oppvåkning og tar et valg (som Nora i «Et dukkehjem»).

**Eksempel:** I Amalie Skrams «Hellemyrsfolket» følger vi en familie gjennom generasjoner. Alkoholisme, fattigdom og elendighet går i arv — karakterene klarer ikke å bryte ut av mønsteret.`,
    },

    // ========== OPPGAVE 3: REALISME VS. NATURALISME ==========
    {
      id: 'norsk-10-1-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-3',
        number: '1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Les beskrivelsene og avgjør om de hører til realismen eller naturalismen:\n\n«En ung kvinne oppdager at ektemannen har holdt henne som en dukke. Hun bestemmer seg for å forlate ham for å finne seg selv.»',
        options: [
          {
            id: 'a',
            text: 'Realismen — fordi karakteren gjør et bevisst valg og bryter fri',
            isCorrect: true,
            feedback: 'Riktig! I realismen kan karakterene velge å endre livet sitt. Denne beskrivelsen passer til «Et dukkehjem».',
          },
          {
            id: 'b',
            text: 'Naturalismen — fordi det handler om undertrykkelse',
            isCorrect: false,
            feedback: 'Feil. Selv om det handler om undertrykkelse, er det karakterens aktive valg som gjør dette til realisme. I naturalismen ville hun vært fanget.',
          },
          {
            id: 'c',
            text: 'Nyromantikken — fordi det handler om indre følelser',
            isCorrect: false,
            feedback: 'Feil. Selv om teksten berører følelser, er fokuset på samfunnskritikk og et konkret valg, som er typisk realisme.',
          },
          {
            id: 'd',
            text: 'Modernismen — fordi det er en eksperimentell tekst',
            isCorrect: false,
            feedback: 'Feil. Det er ingenting eksperimentelt med formen her. Dette er en klassisk realistisk fremstilling.',
          },
        ],
        solution: 'Alternativ A er riktig. Realismens karakterer kan gjøre bevisste valg, i motsetning til naturalismens determinisme.',
      },
    },

    // ========== NYROMANTIKKEN ==========
    {
      id: 'norsk-10-1-1-nyromantikken',
      type: 'text',
      content: `## Nyromantikken (ca. 1890–1905)

### Bakgrunn
Etter tiår med samfunnskritikk og mørk virkelighet ble mange lei. Noen forfattere vendte seg **innover** — mot følelser, drømmer, natur og det mystiske. Nyromantikken var en reaksjon mot realismens og naturalismens nøkterne, objektive stil.

### Kjennetegn
- **Det indre livet:** Fokus på tanker, følelser og stemninger
- **Natur:** Naturen som speil for sjelen
- **Mystikk og symbolikk:** Drømmer, det uforklarlige, underbevisstheten
- **Subjektivitet:** Verden sett gjennom én persons opplevelse
- **Poetisk språk:** Rikere, mer lyrisk enn realismens nøkterne stil

### Viktige forfattere
- **Knut Hamsun** (1859–1952): «Sult», «Pan», «Victoria»
- **Sigbjørn Obstfelder** (1866–1900): «Jeg ser» (dikt)
- **Vilhelm Krag** (1871–1933): Lyrikk og naturstemninger

### Knut Hamsun og «Sult» (1890)
«Sult» regnes som et vendepunkt i norsk litteratur. Romanen handler om en navnløs mann som vandrer rundt i Kristiania (Oslo) og sulter. Men det er ikke en bok om fattigdom i vanlig forstand — det er en reise inn i **hovedpersonens sinn**. Vi opplever hallusinasjoner, irrasjonelle tanker og ekstreme stemningssvingninger. Hamsun ville utforske «det ubevisste sjeleliv», som han kalte det.`,
    },

    // ========== EKSEMPEL: ANALYSE AV «SULT» ==========
    {
      id: 'norsk-10-1-1-example-sult',
      type: 'example',
      title: 'Eksempel: Analyse av Hamsuns «Sult» (1890)',
      problem: `Les dette utdraget fra åpningen av «Sult»:

«Det var i den tid jeg gikk omkring og sultet i Kristiania, denne forunderlige by som ingen forlater før han har fått merker av den...»

Og lenger ut i romanen:

«Sult. Det er en sykdom, en feber, en skammens sult som krøller meg sammen. [...] Jeg går gjennom gatene og kjenner meg hul og tom som en kasse. Mine øyne stirrer vått og vanvittigt inn i menneskene som passerer meg.»

Analyser sitatene. Hvilken epoke hører teksten til, og hvordan skiller den seg fra realismen?`,
      solution: `**Epoke:** Nyromantikken

**Tema:**
- Det indre livet og subjektive opplevelser
- Sult som både fysisk og eksistensiell tilstand
- Fremmedgjøring i byen
- Grensen mellom fornuft og galskap

**Virkemidler:**
- **Førstepersonforteller:** Vi er inne i hodet til hovedpersonen og opplever alt gjennom hans øyne
- **Sammenligning:** «hul og tom som en kasse» — gjør den abstrakte følelsen konkret
- **Besjeling av tilstanden:** «en skammens sult som krøller meg sammen» — sulten beskrives som en levende kraft
- **Sanseinntrykk:** «Øyne stirrer vått og vanvittigt» — vi ser, føler og opplever gjennom kroppen
- **Stemningsoppbygging:** Språket skaper uro og desperasjon

**Forskjell fra realismen:**
- Realismen ville beskrevet fattigdom som et **samfunnsproblem** og vist årsaker og konsekvenser
- Hamsun er ikke interessert i årsaker — han vil vise **opplevelsen innenfra**
- Det er ingen samfunnskritikk her, bare en subjektiv, nesten hallusinatorisk skildring
- Språket er poetisk og personlig, ikke nøkternt og objektivt`,
    },

    // ========== OPPGAVE 4: ANALYSE AV DIKT ==========
    {
      id: 'norsk-10-1-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-4',
        number: '1.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Les dette diktet av Sigbjørn Obstfelder (1893):

**Jeg ser**

Jeg ser på den hvite himmel,
jeg ser på de gråblå skyer,
jeg ser på den blodige sol.

Dette er altså verden.
Dette er altså klodenes hjem.

En regndråpe!

Jeg ser på de høye hus,
jeg ser på de tusen vinduer,
jeg ser på det fjerne kirketårn.

Dette er altså jorden.
Dette er altså menneskenes hjem.

De gråblå skyer samler seg. Solen blev borte.

Jeg ser på de velklædde herrer,
jeg ser på de smilende damer,
jeg ser på de ludende hester.

De gråblå skyer samler seg. Solen blev borte.

Jeg ser, jeg ser...
Jeg er visst kommet på en feil klode!
Her er så underlig...

Besvar følgende spørsmål:`,
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken epoke hører diktet til? Begrunn med minst to kjennetegn.',
            solution: 'Nyromantikken. Begrunnelse: 1) Subjektivt perspektiv — diktet handler om jegets opplevelse og følelse av fremmedgjøring. 2) Stemning og følelse er viktigere enn ytre handling eller samfunnskritikk. 3) Symbolsk bruk av natur (skyer, sol) som speiler sinnsstemningen.',
          },
          {
            label: 'b',
            task: 'Hva tror du dikteren mener med «Jeg er visst kommet på en feil klode»?',
            solution: 'Dikteren uttrykker en dyp følelse av fremmedgjøring — at han ikke hører til i verden. Alt han ser virker underlig og fjernt. Han føler seg som en fremmed i sin egen tilværelse. Dette er typisk for nyromantikken, som utforsker menneskets indre uro og ensomhet.',
          },
          {
            label: 'c',
            task: 'Finn to virkemidler i diktet og forklar hvordan de virker.',
            solution: 'Gjentakelse: «Jeg ser» gjentas mange ganger, som skaper en monoton, observerende rytme — som om dikteren står utenfor og bare ser, uten å delta. Kontrast/symbolikk: Solen beskrives som «blodig» og forsvinner bak skyer — kan symbolisere tap av håp eller varme i tilværelsen.',
          },
        ],
        hints: ['Tenk på hva som er typisk for nyromantikken', 'Se på gjentagelsene i diktet — hva gjør de med stemningen?'],
        solution: 'Diktet hører til nyromantikken og uttrykker fremmedgjøring gjennom subjektiv observasjon.',
        allowsUpload: true,
      },
    },

    // ========== MODERNISMEN ==========
    {
      id: 'norsk-10-1-1-modernismen',
      type: 'text',
      content: `## Modernismen (ca. 1900–1940)

### Bakgrunn
I begynnelsen av 1900-tallet ble verden rystet av verdenskrig, revolusjon og enorme teknologiske endringer. Gamle sannheter falt bort. Sigmund Freud viste at vi styres av ubevisste krefter. Albert Einstein viste at tid og rom er relativt. Verden var ikke lenger enkel å forstå — og litteraturen reflekterte dette.

### Kjennetegn
- **Eksperimentell form:** Bryter med tradisjonell kronologi og fortellerteknikk
- **Fragmentering:** Virkeligheten oppleves som oppstykket og kaotisk
- **Psykologisk dybde:** Utforsker det ubevisste og komplekse indre liv
- **Symbolikk:** Mange lag av mening, ofte åpent for tolkning
- **Fremmedgjøring:** Mennesket føler seg alene og forvirret i en moderne verden
- **Ironi og tvetydighet:** Ingenting er helt sikkert

### Viktige forfattere i norsk modernisme
- **Sigrid Undset** (1882–1949): «Kristin Lavransdatter» (historisk, men psykologisk moderne)
- **Tarjei Vesaas** (1897–1970): «Is-slottet», «Fuglane»
- **Cora Sandel** (1880–1974): «Alberte-trilogien»

### Tidlig modernisme internasjonalt
- **Franz Kafka** (1883–1924): «Forvandlingen» — en mann våkner som et insekt
- **Virginia Woolf** (1882–1941): Strømmen av bevissthet som fortellerteknikk
- **James Joyce** (1882–1941): «Ulysses» — en dag i Dublin fortalt innenfra`,
    },

    // ========== DEFINISJON: ANALYSEVERKTØY ==========
    {
      id: 'norsk-10-1-1-def-analyse',
      type: 'definition',
      title: 'Litterær analyse — SMITT-modellen',
      content: `Når du analyserer en skjønnlitterær tekst, kan du bruke **SMITT-modellen**:

**S — Sjanger og struktur**
- Hva slags tekst er det? (roman, novelle, dikt, drama)
- Hvordan er teksten bygget opp? (kronologisk, tilbakeblikk, fragmentert)

**M — Motiv og handling**
- Hva handler teksten om på overflaten?
- Hva skjer konkret?

**I — Innhold og tema**
- Hva handler teksten om på et dypere nivå?
- Hva er det underliggende budskapet?

**T — Tone og stemning**
- Hvordan oppleves teksten? (mørk, humoristisk, melankolsk, spennende)
- Hvilken stemning skaper forfatteren?

**T — Teknikk og virkemidler**
- Synsvinkel: Hvem forteller?
- Språklige bilder: Metaforer, sammenligninger, besjeling
- Gjentakelser, kontraster, symboler
- Dialog, indre monolog, frempek

**Husk:** En god analyse kobler virkemidlene til budskapet. Det holder ikke å bare identifisere en metafor — du må forklare **hvorfor** forfatteren bruker den og **hva** den betyr.`,
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE MODERNISME ==========
    {
      id: 'norsk-10-1-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-5',
        number: '1.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse beskrivelsene passer best til modernismen?',
        options: [
          {
            id: 'a',
            text: 'Forfatteren beskriver fattigdom objektivt for å skape debatt',
            isCorrect: false,
            feedback: 'Feil. Objektiv skildring for å skape debatt er typisk for realismen.',
          },
          {
            id: 'b',
            text: 'Forfatteren bruker naturen som speil for karakterens følelser',
            isCorrect: false,
            feedback: 'Feil. Natur som følelsessymbol er mest typisk for nyromantikken.',
          },
          {
            id: 'c',
            text: 'Forfatteren eksperimenterer med form og viser en fragmentert virkelighet',
            isCorrect: true,
            feedback: 'Riktig! Modernismen kjennetegnes av eksperimentell form og en opplevelse av at virkeligheten er oppstykket og vanskelig å forstå.',
          },
          {
            id: 'd',
            text: 'Forfatteren viser at karakterene er fullstendig styrt av arv og miljø',
            isCorrect: false,
            feedback: 'Feil. Determinisme er kjennetegn på naturalismen.',
          },
        ],
        solution: 'Alternativ C er riktig. Modernismen bryter med tradisjonell form og viser en fragmentert virkelighet.',
      },
    },

    // ========== OPPGAVE 6: KOBLE EPOKE TIL SITAT ==========
    {
      id: 'norsk-10-1-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-6',
        number: '1.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les sitatene nedenfor og avgjør hvilken epoke hvert sitat tilhører. Begrunn svaret ditt kort.',
        subTasks: [
          {
            label: 'a',
            task: '«Det er ikke tanken at kvinner skal ha selvstendige meninger. De skal gjøre som sine menn sier.» — Fiktivt eksempel i stil med 1870-tallets litteratur.',
            solution: 'Realismen. Sitatet viser en tydelig samfunnskritisk holdning til datidens kvinneundertrykkelse. Forfatteren viser en virkelighet som skal debatteres.',
            multipleChoiceOptions: ['Realismen', 'Naturalismen', 'Nyromantikken', 'Modernismen'],
          },
          {
            label: 'b',
            task: '«Han drakk som sin far, og hans far drakk som sin far igjen. Det var i blodet.» — Fiktivt eksempel.',
            solution: 'Naturalismen. Sitatet viser determinisme — alkoholismen «sitter i blodet» og går i arv. Mennesket er fanget i en syklus det ikke kan bryte ut av.',
            multipleChoiceOptions: ['Naturalismen', 'Realismen', 'Modernismen', 'Nyromantikken'],
          },
          {
            label: 'c',
            task: '«Vinduet var mørkt og tankene mine fløy som fugler uten retning. Tiden rant bort i fragmenter.» — Fiktivt eksempel.',
            solution: 'Modernismen. Sitatet har en fragmentert, drømmeaktig kvalitet. Tiden beskrives som relativ, og tankene er usammenhengende — typisk modernistisk fremmedgjøring.',
            multipleChoiceOptions: ['Modernismen', 'Nyromantikken', 'Realismen', 'Naturalismen'],
          },
        ],
        solution: 'a) Realismen (samfunnskritikk), b) Naturalismen (determinisme), c) Modernismen (fragmentering)',
      },
    },

    // ========== TIDSLINJE-NOTE ==========
    {
      id: 'norsk-10-1-1-note-tidslinje',
      type: 'note',
      title: 'Tidslinje over epokene',
      content: `**1850–1890: Realismen**
→ Samfunnskritikk, Ibsen, Kielland

**1880–1900: Naturalismen**
→ Determinisme, Amalie Skram

**1890–1905: Nyromantikken**
→ Indre liv, Hamsun, Obstfelder

**1900–1940: Modernismen**
→ Eksperimentell form, Vesaas, Undset

Husk at epokene overlapper! Hamsun skrives for eksempel inn i nyromantikken med «Sult» (1890), men hele hans forfatterskap strekker seg langt inn i 1900-tallet.`,
    },

    // ========== OPPGAVE 7: SKRIVEOPPGAVE ==========
    {
      id: 'norsk-10-1-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-7',
        number: '1.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyse (250–350 ord) av ett av følgende tekstutdrag. Bruk SMITT-modellen.',
        subTasks: [
          {
            label: 'Alternativ 1',
            task: 'Analyser Obstfelders «Jeg ser» (gjengitt tidligere i kapittelet).',
            solution: 'En god analyse bruker SMITT-modellen systematisk: Sjanger (dikt), Motiv (observasjon av verden), Innhold (fremmedgjøring), Tone (urolig, undrende), Teknikk (gjentakelse, kontrast, symbolikk).',
          },
          {
            label: 'Alternativ 2',
            task: 'Analyser utdraget fra «Et dukkehjem» (gjengitt tidligere i kapittelet).',
            solution: 'En god analyse bruker SMITT-modellen: Sjanger (drama/dialog), Motiv (samtale mellom ektefeller), Innhold (kvinnefrigjøring), Tone (alvorlig, konfronterende), Teknikk (metafor, ironi, parallellisme).',
          },
        ],
        hints: [
          'Start med å identifisere sjanger og epoke',
          'Finn minst tre virkemidler og forklar virkningen av dem',
          'Koble virkemidlene til tema og budskap',
        ],
        solution: 'En god analyse identifiserer epoke, tema, virkemidler og budskap, og forklarer sammenhengen mellom dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Realismen:** Ville vise virkeligheten og skape debatt om samfunnsproblemer
- **Naturalismen:** Enda mørkere; mennesket er styrt av arv og miljø (determinisme)
- **Nyromantikken:** Reaksjon mot realismen; fokus på følelser, natur og det indre livet
- **Modernismen:** Eksperimentell form, fragmentert virkelighet, psykologisk dybde
- **SMITT-modellen:** Sjanger, Motiv, Innhold, Tone, Teknikk
- **Determinisme:** Ideen om at mennesket ikke velger fritt, men styres av krefter utenfor sin kontroll

### Viktige sammenhenger
- Epokene er reaksjoner på hverandre: Realismen kritiserte romantikken, nyromantikken kritiserte realismen, modernismen gikk sin egen vei
- Forfatterne reflekterte sin samtid: industrialisering, kvinnekamp, verdenskrig
- En god litterær analyse kobler virkemidler til budskap`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-1-1-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-8',
        number: '1.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Sammenlign to epoker.

Velg to av epokene du har lært om (realisme, naturalisme, nyromantikk, modernisme). Skriv en tekst (200–300 ord) der du sammenligner dem. Du skal:

a) Beskrive kjennetegnene til begge epokene
b) Forklare hva som er likt og hva som er forskjellig
c) Gi eksempler med forfattere eller verk fra begge epokene
d) Forklare hvorfor den ene epoken oppsto som reaksjon på den andre`,
        hints: [
          'Bruk en tabell for å sammenligne — det gjør det lettere å se forskjellene',
          'Det kan lønne seg å velge to epoker som står i kontrast til hverandre',
        ],
        solution: 'En god sammenligning viser at du forstår kjennetegnene til begge epokene, kan bruke konkrete eksempler, og forstår den historiske sammenhengen mellom dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Sakprosaanalyse og kildekritikk
// LK20: Vurdere teksters troverdighet og bruke kilder kritisk
// ============================================================================

export const CHAPTER_NORSK_10_1_2: TextbookChapter = {
  id: 'norsk-10-1-2',
  courseId: 'norsk-10',
  chapterNumber: '1.2',
  title: 'Sakprosaanalyse og kildekritikk',
  description: 'Lær å analysere sakprosatekster, vurdere kilder kritisk med TONE-modellen, og skrive kildehenvisninger.',
  estimatedMinutes: 70,
  competenceGoals: [
    'vurdere teksters troverdighet og bruke kilder kritisk',
    'lese og analysere sakprosatekster og vurdere argumentasjonen',
    'bruke kilder på en etterrettelig måte og kunne kildehenvisning',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-1-2-intro',
      type: 'text',
      content: `## Sakprosa og kildekritikk: Hvordan vet du hva som er sant?

Du scroller gjennom nyhetsfeeden din. En overskrift roper: «Forskning viser at skjermtid ødelegger hjernen din!» En annen sier: «Ny studie: Skjermtid er ikke farlig likevel.» Hvem har rett? Hvordan kan du vite det?

Evnen til å lese kritisk er en av de viktigste ferdighetene du kan ha i det moderne samfunnet. Hver dag bombarderes vi med informasjon — nyheter, reklame, blogginnlegg, sosiale medier, YouTube-videoer. Noe er pålitelig. Noe er villedende. Og noe er direkte løgn.

I dette kapittelet skal du lære å:
- Analysere **sakprosatekster** (tekster som ikke er fiksjon)
- Vurdere **kilder** kritisk ved hjelp av TONE-modellen
- Skrive **kildehenvisninger** på riktig måte
- Gjenkjenne **retoriske virkemidler** i argumenterende tekster`,
    },

    // ========== DEFINISJON: SAKPROSA ==========
    {
      id: 'norsk-10-1-2-def-sakprosa',
      type: 'definition',
      title: 'Sakprosa',
      content: `**Sakprosa** er tekster som handler om virkeligheten — i motsetning til skjønnlitteratur (fiksjon). Sakprosa formidler informasjon, meninger eller argumenter.

**Funksjonell sakprosa** — har en praktisk funksjon:
- Nyhetsartikler
- Lærebøker
- Rapporter og utredninger
- Bruksanvisninger
- Lover og forskrifter

**Litterær sakprosa** — har også en kunstnerisk dimensjon:
- Essay
- Kronikker og kommentarer
- Biografier og selvbiografier
- Reiseskildringer
- Debattinnlegg

**Viktig forskjell:** En nyhetsartikkel skal ideelt sett være **objektiv** (nøytral), mens en kronikk eller et debattinnlegg er **subjektiv** (meningsbærende). Men husk: Selv «objektive» tekster har en vinkling!`,
    },

    // ========== OPPGAVE 1: IDENTIFISER SAKPROSATYPE ==========
    {
      id: 'norsk-10-1-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-1',
        number: '1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er et eksempel på litterær sakprosa?',
        options: [
          {
            id: 'a',
            text: 'En bruksanvisning for en mobiltelefon',
            isCorrect: false,
            feedback: 'Feil. En bruksanvisning er funksjonell sakprosa — den har en praktisk funksjon.',
          },
          {
            id: 'b',
            text: 'Et essay om ungdoms forhold til sosiale medier',
            isCorrect: true,
            feedback: 'Riktig! Et essay er litterær sakprosa fordi det kombinerer faglig innhold med personlige refleksjoner og et bevisst språk.',
          },
          {
            id: 'c',
            text: 'En nyhetsmelding om et jordskjelv',
            isCorrect: false,
            feedback: 'Feil. En ren nyhetsmelding er funksjonell sakprosa.',
          },
          {
            id: 'd',
            text: 'En forskrift om trafikkregler',
            isCorrect: false,
            feedback: 'Feil. Forskrifter er funksjonell sakprosa — de har en juridisk funksjon.',
          },
        ],
        solution: 'Alternativ B er riktig. Et essay er litterær sakprosa fordi det har en kunstnerisk dimensjon.',
      },
    },

    // ========== RETORIKK ==========
    {
      id: 'norsk-10-1-2-retorikk',
      type: 'text',
      content: `## Retorikk: Kunsten å overbevise

Retorikk er læren om overtalelse og overbevisning. Allerede for over 2000 år siden beskrev den greske filosofen Aristoteles tre hovedmåter å overtale på:

### De tre appellformene

**Etos — troverdighet**
Avsenderen overbeviser ved å fremstå som pålitelig og kompetent.
- «Som lege med 20 års erfaring kan jeg si at...»
- «Forskning fra Universitetet i Oslo viser at...»
- Bruk av titler, erfaring og autoritet

**Patos — følelser**
Avsenderen appellerer til mottakerens følelser.
- «Tenk deg at barnet ditt sulter. Hver eneste dag.»
- Sterke bilder, personlige historier, dramatiske eksempler
- Frykt, medlidenhet, stolthet, sinne

**Logos — fornuft**
Avsenderen bruker logisk argumentasjon og fakta.
- Statistikk og tall
- Logiske slutninger (hvis A, så B)
- Faglig begrunnelse og forskning

### Retoriske virkemidler
- **Retorisk spørsmål:** Spørsmål du ikke forventer svar på: «Skal vi virkelig akseptere dette?»
- **Gjentakelse:** Forsterker budskapet: «Vi kan ikke vente. Vi kan ikke tie. Vi kan ikke akseptere.»
- **Overdrivelse (hyperbol):** «Alle vet at...», «Det er det verste som har skjedd»
- **Kontrast:** Setter motsetninger opp mot hverandre for effekt
- **Treleddet oppbygning (trikolon):** Grupper av tre: «Frihet, likhet, brorskap»`,
    },

    // ========== DEFINISJON: TONE-MODELLEN ==========
    {
      id: 'norsk-10-1-2-def-tone',
      type: 'definition',
      title: 'TONE-modellen for kildekritikk',
      content: `**TONE-modellen** er et verktøy for å vurdere om en kilde er pålitelig. Bokstavene står for:

**T — Troverdighet**
- Hvem er avsenderen? En ekspert, en journalist, en privatperson?
- Har avsenderen relevant kompetanse og utdanning?
- Er kilden uavhengig, eller har avsenderen noe å tjene på budskapet?
- Er avsenderen kjent og anerkjent?

**O — Objektivitet**
- Er teksten balansert, eller bare ensidig?
- Presenteres flere sider av saken?
- Er det skjulte motiver (for eksempel reklame som er forkledd som informasjon)?
- Bruker teksten sterkt følelsesladede ord som avslører en holdning?

**N — Nøyaktighet**
- Er faktaopplysningene korrekte? Kan de bekreftes av andre kilder?
- Oppgis det kilder for påstandene?
- Er informasjonen oppdatert? (en artikkel fra 2010 om teknologi er utdatert)
- Er det skrivefeil eller slurvefeil som tyder på lav kvalitet?

**E — Egnethet**
- Passer kilden til formålet ditt?
- Er den relevant for problemstillingen din?
- Er nivået passende? (en forskningsartikkel kan være for avansert, en barnebok for enkel)
- Finnes det bedre kilder?`,
    },

    // ========== EKSEMPEL: KILDEKRITISK VURDERING ==========
    {
      id: 'norsk-10-1-2-example-kilde',
      type: 'example',
      title: 'Eksempel: Kildekritisk vurdering med TONE-modellen',
      problem: `Du skal skrive en artikkel om klimaendringer og har funnet tre mulige kilder. Vurder dem med TONE-modellen:

**Kilde 1:** En artikkel fra FNs klimapanel (IPCC), skrevet av internasjonale klimaforskere, publisert i 2023.

**Kilde 2:** Et blogginnlegg med tittelen «Klimasvindelen avslørt!» fra en anonym blogg, uten kildehenvisninger.

**Kilde 3:** En avisartikkel fra VG som oppsummerer en ny klimarapport, med intervjuer av norske forskere.`,
      solution: `### Kilde 1: FNs klimapanel (IPCC)

| Kriterium | Vurdering |
|-----------|-----------|
| **T - Troverdighet** | Svært høy. IPCC er verdens fremste klimaorgan, med tusenvis av forskere. |
| **O - Objektivitet** | Høy. Rapporten gjennomgår all tilgjengelig forskning og er fagfellevurdert. |
| **N - Nøyaktighet** | Svært høy. Basert på tusenvis av studier, transparent metodikk. |
| **E - Egnethet** | Utmerket som hovedkilde, men kan være teknisk krevende å lese. |

**Konklusjon:** Førsteklasses kilde. Bruk den!

---

### Kilde 2: Anonym blogg

| Kriterium | Vurdering |
|-----------|-----------|
| **T - Troverdighet** | Svært lav. Anonym avsender, ingen synlig kompetanse. |
| **O - Objektivitet** | Svært lav. Tittelen avslører en sterk holdning allerede. |
| **N - Nøyaktighet** | Umulig å vurdere. Ingen kildehenvisninger. |
| **E - Egnethet** | Ikke egnet som fagkilde. Kan brukes som eksempel på dårlig kilde. |

**Konklusjon:** Ikke bruk denne som kilde!

---

### Kilde 3: VG-artikkel

| Kriterium | Vurdering |
|-----------|-----------|
| **T - Troverdighet** | God. VG er en stor avis med redaksjonelt ansvar. Intervjuer med navngitte forskere. |
| **O - Objektivitet** | Middels. Journalister velger vinkling, men artikkelen viser til faktisk forskning. |
| **N - Nøyaktighet** | God, men sjekk at oppsummeringen stemmer med originalrapporten. |
| **E - Egnethet** | God som sekundærkilde. Lettere å lese enn originalen. |

**Konklusjon:** Brukbar kilde, men bruk originalen (IPCC) som hovedkilde.`,
    },

    // ========== OPPGAVE 2: TONE-MODELLEN I PRAKSIS ==========
    {
      id: 'norsk-10-1-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-2',
        number: '1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En Instagram-influencer poster en video der hun sier: «Denne nye vitaminpillen har forandret livet mitt! Koden MIN20 gir 20 % rabatt!» Hva er det største problemet med denne kilden ifølge TONE-modellen?',
        options: [
          {
            id: 'a',
            text: 'Nøyaktighet — vitaminpiller finnes ikke',
            isCorrect: false,
            feedback: 'Feil. Vitaminpiller finnes absolutt, så nøyaktigheten er ikke hovedproblemet her.',
          },
          {
            id: 'b',
            text: 'Objektivitet — hun tjener penger på å anbefale produktet',
            isCorrect: true,
            feedback: 'Riktig! Rabattkoden avslører at dette er sponset innhold. Hun har en økonomisk interesse i at du kjøper produktet, noe som gjør anbefalingen lite objektiv.',
          },
          {
            id: 'c',
            text: 'Egnethet — Instagram er ikke et medium for helseinformasjon',
            isCorrect: false,
            feedback: 'Delvis relevant, men hovedproblemet er at hun har økonomiske motiver for å anbefale produktet.',
          },
          {
            id: 'd',
            text: 'Troverdighet — influencere er aldri troverdige',
            isCorrect: false,
            feedback: 'Feil. Man kan ikke si at influencere aldri er troverdige. Problemet her er spesifikt at hun tjener penger på anbefalingen.',
          },
        ],
        solution: 'Alternativ B er riktig. Det største problemet er manglende objektivitet — influenceren tjener penger på produktet.',
      },
    },

    // ========== OPPGAVE 3: IDENTIFISER APPELLFORM ==========
    {
      id: 'norsk-10-1-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-3',
        number: '1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les sitatene nedenfor og avgjør hvilken appellform (etos, patos eller logos) som brukes i hvert.',
        subTasks: [
          {
            label: 'a',
            task: '«Ifølge Statistisk sentralbyrå har 87 prosent av norske ungdommer tilgang til smarttelefon.»',
            solution: 'Logos — bruker statistikk og faktaopplysninger fra en pålitelig kilde for å underbygge påstanden.',
            multipleChoiceOptions: ['Logos', 'Etos', 'Patos'],
          },
          {
            label: 'b',
            task: '«Tenk på den lille jenta som sitter alene i skolegården hver dag. Ingen vil leke med henne. Ingen ser henne. Er dette samfunnet vi vil ha?»',
            solution: 'Patos — appellerer til medlidenhet og empati gjennom et følelsesladet bilde av et ensomt barn, avsluttet med et retorisk spørsmål.',
            multipleChoiceOptions: ['Patos', 'Logos', 'Etos'],
          },
          {
            label: 'c',
            task: '«Som rektor ved denne skolen i 15 år har jeg sett utviklingen på nært hold.»',
            solution: 'Etos — avsenderen viser til sin erfaring og posisjon for å bygge troverdighet.',
            multipleChoiceOptions: ['Etos', 'Patos', 'Logos'],
          },
          {
            label: 'd',
            task: '«Hvis vi kutter utslippene med 50 % innen 2030, vil temperaturen stabilisere seg. Kutter vi ikke, viser modellene en økning på 2–4 grader.»',
            solution: 'Logos — bruker logisk resonnement av typen «hvis A, så B» med konkrete tall.',
            multipleChoiceOptions: ['Logos', 'Patos', 'Etos'],
          },
        ],
        solution: 'a) Logos, b) Patos, c) Etos, d) Logos',
      },
    },

    // ========== KILDEHENVISNING ==========
    {
      id: 'norsk-10-1-2-kildehenvisning',
      type: 'text',
      content: `## Kildehenvisning: Gi æren til dem som fortjener det

Når du bruker informasjon fra en kilde, **må** du oppgi hvor du har det fra. Dette kalles kildehenvisning. Det er viktig av tre grunner:

1. **Redelighet:** Det er juks (plagiat) å presentere andres ideer som dine egne
2. **Troverdighet:** Kildehenvisninger viser at påstandene dine er underbygget
3. **Etterprøvbarhet:** Leseren kan sjekke kildene dine

### Hvordan henvise i teksten

**Direkte sitat** (ordrett gjentakelse):
> Ifølge Hagen (2020) er «kildekritikk en avgjørende ferdighet i det moderne informasjonssamfunnet» (s. 45).

**Parafrase** (gjenfortelling med egne ord):
> Hagen (2020) påpeker at kildekritikk er svært viktig i dagens samfunn (s. 45).

### Kildeliste
Etter teksten lager du en kildeliste der alle kildene oppgis i detalj.

**Bok:**
Etternavn, Fornavn. (Årstall). *Tittel*. Forlag.
> Hagen, Erik. (2020). *Kildekritikk i praksis*. Cappelen Damm.

**Nettartikkel:**
Etternavn, Fornavn. (Årstall, dato). Tittel. *Nettsted*. URL
> Hansen, Maria. (2023, 15. mars). Ungdom og sosiale medier. *NRK*. https://nrk.no/eksempel

**Artikkel uten forfatter:**
Tittel. (Årstall, dato). *Nettsted*. URL
> Nye regler for personvern. (2023, 1. januar). *Datatilsynet*. https://datatilsynet.no/eksempel`,
    },

    // ========== DEFINISJON: PLAGIAT ==========
    {
      id: 'norsk-10-1-2-def-plagiat',
      type: 'definition',
      title: 'Plagiat',
      content: `**Plagiat** er å presentere andres tekst, ideer eller arbeid som ditt eget, uten å oppgi kilden.

**Eksempler på plagiat:**
- Kopiere tekst fra nett og lime inn i oppgaven din uten kildehenvisning
- Bruke andres argumenter som om de var dine egne
- Omskrive en tekst lett uten å oppgi originalen
- Oversette fra et annet språk uten å oppgi kilden

**Konsekvenser:**
- På eksamen: Besvarelsen kan bli annullert
- I arbeidslivet: Du kan miste jobben
- Generelt: Du mister troverdighet

**Slik unngår du plagiat:**
- Oppgi alltid kilden når du bruker andres arbeid
- Bruk anførselstegn ved direkte sitater
- Skriv med egne ord og oppgi kilden (parafrase)
- Ha en komplett kildeliste`,
    },

    // ========== EKSEMPEL: SAKPROSAANALYSE ==========
    {
      id: 'norsk-10-1-2-example-analyse',
      type: 'example',
      title: 'Eksempel: Analyse av et debattinnlegg',
      problem: `Les dette debattinnlegget:

---

**Mobilforbud i skolen — nå!**
*Av Thomas Berg, lærer ved Ås ungdomsskole*

Har du prøvd å undervise en klasse der halvparten sitter med hodet bøyd over mobilskjermene? Jeg gjør det hver eneste dag.

Forskning fra Universitet i Stavanger viser at elever som bruker mobilen i timene, presterer 15 prosent dårligere på prøver enn dem som ikke gjør det. I tillegg rapporterer 7 av 10 lærere at mobilen er den største kilden til uro i klasserommet.

Noen vil si at mobilen er et viktig verktøy for læring. Og ja, den kan brukes til å søke opp informasjon. Men la oss være ærlige: Hvor mange elever søker opp fagstoff, og hvor mange scroller TikTok? Vi vet alle svaret.

Et mobilforbud betyr ikke at vi er mot teknologi. Det betyr at vi prioriterer læring. Det betyr at vi gir elevene ro til å konsentrere seg. Det betyr at vi tar ansvar.

---

Analyser dette debattinnlegget. Identifiser appellformer, retoriske virkemidler og vurder argumentasjonen.`,
      solution: `### Appellformer:

**Etos:**
- Forfatteren presenterer seg som lærer — han har førstehånds erfaring
- Han viser til forskning fra et norsk universitet

**Patos:**
- Åpningen er et retorisk spørsmål som inviterer leseren til å føle med læreren
- «Hver eneste dag» forsterker frustrasjonen
- «Hvor mange scroller TikTok? Vi vet alle svaret» — appellerer til en felles opplevelse

**Logos:**
- Konkrete tall: «15 prosent dårligere», «7 av 10 lærere»
- Logisk oppbygning av argumentene

### Retoriske virkemidler:
- **Retorisk spørsmål:** Åpningen og spørsmålet om TikTok
- **Treleddet oppbygning (trikolon):** «Det betyr at vi prioriterer læring. Det betyr at vi gir elevene ro. Det betyr at vi tar ansvar.»
- **Kontrastering:** «Noen vil si... Men la oss være ærlige»
- **Inkluderende «vi»:** «Vi vet alle svaret», «vi tar ansvar»

### Styrker i argumentasjonen:
- Konkrete fakta og tall
- Personlig erfaring gir troverdighet
- God struktur med klar konklusjon

### Svakheter i argumentasjonen:
- Bare én forskningsstudie nevnes — finnes det motforskning?
- «Vi vet alle svaret» er en antakelse, ikke et bevis
- Innlegget drøfter ikke motargumentene grundig nok
- Mangler forslag til alternativer (hva skal erstatte mobilen?)`,
    },

    // ========== OPPGAVE 4: RETORISKE VIRKEMIDLER ==========
    {
      id: 'norsk-10-1-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-4',
        number: '1.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: '«Skal vi virkelig sitte stille og se på at ungdommen vår ødelegges?» Hvilket retorisk virkemiddel er dette?',
        options: [
          {
            id: 'a',
            text: 'Overdrivelse (hyperbol)',
            isCorrect: false,
            feedback: 'Det kan argumenteres for overdrivelse i «ødelegges», men det primære virkemiddelet her er et annet.',
          },
          {
            id: 'b',
            text: 'Retorisk spørsmål',
            isCorrect: true,
            feedback: 'Riktig! Et retorisk spørsmål er et spørsmål man ikke forventer svar på — det stilles for å skape effekt og få leseren til å tenke i en bestemt retning.',
          },
          {
            id: 'c',
            text: 'Treleddet oppbygning (trikolon)',
            isCorrect: false,
            feedback: 'Feil. Trikolon er når tre elementer listes opp i serie for effekt.',
          },
          {
            id: 'd',
            text: 'Kontrast',
            isCorrect: false,
            feedback: 'Feil. Kontrast er å sette motsetninger opp mot hverandre.',
          },
        ],
        solution: 'Alternativ B er riktig. Et retorisk spørsmål stilles ikke for å få et svar, men for å overbevise.',
      },
    },

    // ========== OPPGAVE 5: KILDEHENVISNING ==========
    {
      id: 'norsk-10-1-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-5',
        number: '1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv kildehenvisninger for følgende kilder. Bruk formatet fra teoridelen ovenfor.',
        subTasks: [
          {
            label: 'a',
            task: 'En bok av Per Hansen fra 2021 med tittelen «Norsk for ungdom», utgitt på Gyldendal forlag.',
            solution: 'Hansen, Per. (2021). *Norsk for ungdom*. Gyldendal.',
          },
          {
            label: 'b',
            task: 'En nettartikkel skrevet av Kari Olsen, publisert 5. mai 2023 på NRK, med tittelen «Ungdom leser mer enn før». URL: https://nrk.no/artikkel',
            solution: 'Olsen, Kari. (2023, 5. mai). Ungdom leser mer enn før. *NRK*. https://nrk.no/artikkel',
          },
          {
            label: 'c',
            task: 'En artikkel uten forfatter med tittelen «Regler for eksamen 2024», publisert 1. januar 2024 på utdanningsdirektoratets nettside. URL: https://udir.no/eksempel',
            solution: 'Regler for eksamen 2024. (2024, 1. januar). *Utdanningsdirektoratet*. https://udir.no/eksempel',
          },
        ],
        hints: ['Se formatet i teoridelen om kildehenvisning', 'Rekkefølgen er: etternavn, fornavn, årstall, tittel, utgiver/nettsted, URL'],
        solution: 'Kildehenvisninger skal følge et konsekvent format med all nødvendig informasjon.',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 6: KILDEKRITISK VURDERING ==========
    {
      id: 'norsk-10-1-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-6',
        number: '1.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk TONE-modellen til å vurdere følgende kilder. Er de pålitelige? Begrunn.',
        subTasks: [
          {
            label: 'a',
            task: 'En artikkel om vaksiner fra Folkehelseinstituttet (FHI).',
            solution: 'Svært pålitelig. T: FHI er Norges fremste helsemyndighet med høy kompetanse. O: FHI er en offentlig, uavhengig institusjon. N: Bygger på oppdatert forskning med kildehenvisninger. E: Utmerket kilde for helsespørsmål.',
          },
          {
            label: 'b',
            task: 'Et YouTube-klipp der en person uten medisinsk bakgrunn advarer mot vaksiner.',
            solution: 'Lite pålitelig. T: Avsenderen mangler relevant kompetanse. O: Sannsynligvis ensidig og forutinntatt. N: Ingen kildehenvisninger, påstander kan ikke verifiseres enkelt. E: Ikke egnet som fagkilde.',
          },
          {
            label: 'c',
            task: 'En nyhetsartikkel fra Aftenposten om en ny klimarapport, med intervju av forskere fra CICERO.',
            solution: 'Ganske pålitelig. T: Aftenposten er en seriøs avis, og CICERO er et anerkjent forskningssenter. O: Journalisten velger vinkling, men intervjuer eksperter. N: God, men sjekk originalrapporten for detaljer. E: God sekundærkilde.',
          },
        ],
        solution: 'Vurder alltid Troverdighet, Objektivitet, Nøyaktighet og Egnethet ved hjelp av TONE-modellen.',
        allowsUpload: true,
      },
    },

    // ========== ADVARSEL: VANLIGE FEIL ==========
    {
      id: 'norsk-10-1-2-warning',
      type: 'warning',
      title: 'Vanlige feil i kildekritikk',
      content: `**Feil 1: «Det sto på nett, da er det sant»**
Hvem som helst kan publisere hva som helst på nett. Sjekk alltid kilden!

**Feil 2: «Wikipedia er alltid feil»**
Wikipedia er ofte nøyaktig, men bør brukes som *utgangspunkt* — følg opp med primærkildene som Wikipedia selv oppgir.

**Feil 3: «Forskning viser...» uten å si hvilken forskning**
Vær skeptisk når noen sier «forskning viser» uten å oppgi konkret hvilken forskning det er snakk om.

**Feil 4: Bare bruke kilder som støtter det du allerede mener**
God kildekritikk betyr å søke etter informasjon fra ulike perspektiver, også de du er uenig med.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Sakprosa:** Tekster om virkeligheten (funksjonell og litterær)
- **TONE-modellen:** Troverdighet, Objektivitet, Nøyaktighet, Egnethet
- **Etos, patos, logos:** De tre appellformene i retorikk
- **Retoriske virkemidler:** Retorisk spørsmål, gjentakelse, overdrivelse, kontrast, trikolon
- **Kildehenvisning:** System for å oppgi hvor informasjonen kommer fra
- **Plagiat:** Å presentere andres arbeid som ditt eget uten kilde

### Viktige sammenhenger
- Kildekritikk og retorikk henger sammen: For å vurdere en tekst kritisk, må du forstå hvordan den prøver å overtale deg
- Kildehenvisning er ikke bare en formalitet — det handler om ærlighet og troverdighet
- Alle tekster har en avsender med en hensikt — din jobb som leser er å forstå hva hensikten er`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-1-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-7',
        number: '1.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Finn og analyser et debattinnlegg.

Finn et debattinnlegg i en norsk avis (for eksempel på aftenposten.no, nrk.no eller vg.no). Skriv en analyse (200–300 ord) der du:

a) Beskriver hva innlegget handler om og hvem som er avsenderen
b) Identifiserer hvilke appellformer som brukes (etos, patos, logos)
c) Finner minst to retoriske virkemidler
d) Vurderer innlegget med TONE-modellen
e) Konkluderer: Er dette et godt debattinnlegg? Hvorfor/hvorfor ikke?`,
        hints: [
          'Les innlegget minst to ganger — én gang for innhold, én gang for virkemidler',
          'Se etter sterke ord, retoriske spørsmål og bruk av tall/statistikk',
          'Husk å oppgi kilden til innlegget du analyserer!',
        ],
        solution: 'En god analyse identifiserer appellformer og virkemidler, vurderer kilden kritisk og gir en begrunnet konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-1-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-8',
        number: '1.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Skriv et eget debattinnlegg.

Velg ett av temaene nedenfor og skriv et debattinnlegg (250–350 ord). Bruk minst to appellformer og to retoriske virkemidler bevisst. Husk kildehenvisninger!

Tema:
- Bør ungdom under 16 år ha tilgang til sosiale medier?
- Bør skolen ha heldagsskole (8–16)?
- Bør alle elever lære programmering?

Krav:
a) Tydelig standpunkt (mening)
b) Minst to argumenter med belegg
c) Bevisst bruk av etos, patos og/eller logos
d) Minst to retoriske virkemidler
e) Kildeliste med minst to kilder`,
        hints: [
          'Lag en disposisjon før du skriver',
          'Finn reell forskning eller statistikk som støtter argumentene dine',
          'Les innlegget høyt — fungerer det muntlig?',
        ],
        solution: 'Et godt debattinnlegg har et tydelig standpunkt, gode argumenter med belegg, bevisst bruk av retoriske virkemidler og korrekte kildehenvisninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.1: Eksamensforberedelse — Skriftlig
// LK20: Skrive tekster med god struktur, saklig argumentasjon og korrekt språk
// ============================================================================

export const CHAPTER_NORSK_10_2_1: TextbookChapter = {
  id: 'norsk-10-2-1',
  courseId: 'norsk-10',
  chapterNumber: '2.1',
  title: 'Eksamensforberedelse — Skriftlig',
  description: 'Forbered deg grundig til skriftlig eksamen med sjangerkrav, strukturtips og skrivestrategier for artikkel, essay og novelle.',
  estimatedMinutes: 80,
  competenceGoals: [
    'skrive tekster med god struktur, saklig argumentasjon og korrekt språk',
    'mestre ulike sjangre og tilpasse språk og form til formål og mottaker',
    'bruke fagbegreper og vise evne til refleksjon i skriftlige tekster',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-2-1-intro',
      type: 'text',
      content: `## Skriftlig eksamen: Din guide til å lykkes

Skriftlig eksamen i norsk er kanskje den viktigste prøven du tar i 10. klasse. Du får fem timer til å vise alt du har lært — ikke bare om norskfaget, men om din evne til å tenke, argumentere og uttrykke deg.

Det gode er: Eksamen er ikke uforutsigbar. Du vet hva som kan komme, og du kan forberede deg systematisk.

**Hva du møter på eksamen:**
- Du får et **oppgavehefte** med flere oppgaver å velge mellom
- Oppgavene er knyttet til et **vedlegg** med tekster, bilder eller andre ressurser
- Du velger **én oppgave** og skriver en tekst
- Du har **5 timer** (pluss 15 minutter til å lese oppgavene)

**Typiske oppgavetyper:**
- Artikkel eller kronikk (argumenterende)
- Essay (reflekterende)
- Novelle eller fortelling (kreativ)
- Sammensatt oppgave (analyse + drøfting)

I dette kapittelet går vi gjennom hver oppgavetype med sjangerkrav, struktur og konkrete tips.`,
    },

    // ========== DEFINISJON: VURDERINGSKRITERIER ==========
    {
      id: 'norsk-10-2-1-def-vurdering',
      type: 'definition',
      title: 'Vurderingskriterier på eksamen',
      content: `Sensorene vurderer teksten din etter fire hovedområder:

**1. Innhold og kildebruk**
- Er innholdet relevant for oppgaven?
- Viser du kunnskap og forståelse?
- Bruker du vedleggene og andre kilder godt?
- Er innholdet selvstendig og gjennomtenkt?

**2. Struktur og tekstbinding**
- Har teksten en tydelig innledning, hoveddel og avslutning?
- Henger avsnittene logisk sammen?
- Bruker du overganger og bindeord effektivt?
- Er teksten lett å følge?

**3. Språk og stil**
- Er språket tilpasset sjangeren og mottakeren?
- Varierer du setningsbygningen?
- Bruker du et presist og variert ordforråd?
- Er tonen passende? (saklig i artikkel, personlig i essay, litterært i novelle)

**4. Rettskriving og formverk**
- Er det feil i rettskriving, grammatikk og tegnsetting?
- Behersker du grunnleggende norsk formverk?
- Er teksten ryddig og godt formatert?

**Husk:** Innhold og struktur teller mest! En tekst med noen skrivefeil men godt innhold kan fortsatt få en god karakter.`,
    },

    // ========== ARTIKKEL ==========
    {
      id: 'norsk-10-2-1-artikkel',
      type: 'text',
      content: `## Oppgavetype 1: Artikkel / Kronikk

Artikkelen er den mest vanlige oppgavetypen på eksamen. Her skal du argumentere for et synspunkt på en saklig og overbevisende måte.

### Sjangerkrav for artikkel
- **Tittel:** Kort og informativ, gjerne med slagkraft
- **Ingress:** 2–3 setninger som oppsummerer temaet (valgfritt, men anbefalt)
- **Saklig tone:** Du kan være engasjert, men må bygge på fakta og argumenter
- **Argumenter med belegg:** Påstander må underbygges med eksempler, forskning eller logikk
- **Kildehenvisninger:** Oppgi hvor du har informasjonen fra
- **Mottakerbevissthet:** Hvem skriver du for? Tilpass språket

### Struktur for artikkel

**Innledning (10–15 % av teksten)**
- Fang leserens oppmerksomhet (spørsmål, påstand, anekdote, sitat)
- Presenter temaet
- Antydet standpunkt (hva du mener)

**Hoveddel (70–80 % av teksten)**
- 2–3 hovedargumenter, hvert i eget avsnitt
- Hvert argument har: Påstand → belegg → forklaring
- Ta opp motargumenter og tilbakevis dem
- Bruk eksempler, fakta, statistikk

**Avslutning (10–15 % av teksten)**
- Oppsummer hovedpoengene
- Gjenta standpunktet tydelig
- Gjerne en oppfordring til leseren eller et fremtidsperspektiv`,
    },

    // ========== EKSEMPEL: ARTIKKELSTRUKTUR ==========
    {
      id: 'norsk-10-2-1-example-artikkel',
      type: 'example',
      title: 'Eksempel: Disposisjon for en artikkel',
      problem: `Du skal skrive en artikkel om temaet: «Bør karakterer i ungdomsskolen erstattes med vurderingssamtaler?»

Lag en detaljert disposisjon med innledning, hoveddel og avslutning.`,
      solution: `### Disposisjon:

**Tittel:** «La oss snakke om karakterer»

**Innledning:**
- Åpning: «Hver gang du får tilbake en prøve, er det tallet øverst du ser først — ikke kommentarene. Men hva om tallet forsvant?»
- Presenter temaet: Debatten om karakterer vs. vurderingssamtaler
- Standpunkt: Karakterer bør suppleres med (ikke helt erstattes av) grundige tilbakemeldinger

**Hoveddel:**

*Argument 1: Karakterer skaper prestasjonsangst*
- Påstand: Mange elever får angst av karakterjaget
- Belegg: Ungdata-undersøkelsen viser at stressnivået blant norske ungdommer har økt de siste årene
- Forklaring: Når alt handler om et tall, mister elevene gleden ved å lære

*Argument 2: Vurderingssamtaler gir bedre læring*
- Påstand: Grundig tilbakemelding hjelper deg mer enn et tall
- Belegg: Forskning av John Hattie viser at konkret tilbakemelding er blant de mest effektive læringsstrategiene
- Forklaring: «Du må jobbe mer med avsnittsoppbygning» er mer nyttig enn «3+»

*Motargument + tilbakevisning:*
- Motargument: Karakterer er nødvendig for opptak til videregående
- Tilbakevisning: Det finnes andre opptakssystemer, for eksempel i Finland. Dessuten kan man beholde standpunktkarakter uten å gi karakterer på hver prøve

**Avslutning:**
- Oppsummering: Karakterer alene er ikke nok — elever trenger tilbakemeldinger de kan lære av
- Oppfordring: Spør læreren din om en grundig tilbakemelding neste gang, i tillegg til karakteren`,
    },

    // ========== OPPGAVE 1: ARTIKKELSTRUKTUR ==========
    {
      id: 'norsk-10-2-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-1',
        number: '2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør en god artikkelinnledning inneholde?',
        options: [
          {
            id: 'a',
            text: 'En lang oppramsing av fakta om temaet',
            isCorrect: false,
            feedback: 'Feil. Innledningen skal fange leserens oppmerksomhet, ikke drukne dem i fakta. Spar detaljene til hoveddelen.',
          },
          {
            id: 'b',
            text: 'En engasjerende åpning, presentasjon av temaet og et antydet standpunkt',
            isCorrect: true,
            feedback: 'Riktig! En god innledning fanger leseren, presenterer hva teksten handler om, og antyder hva du mener.',
          },
          {
            id: 'c',
            text: 'En oppsummering av hele artikkelen med konklusjon',
            isCorrect: false,
            feedback: 'Feil. Oppsummering og konklusjon hører til avslutningen, ikke innledningen.',
          },
          {
            id: 'd',
            text: 'Et dikt eller en sang som passer til temaet',
            isCorrect: false,
            feedback: 'Feil. Et dikt kan fungere som sitat-åpning i noen tilfeller, men er ikke det viktigste i en artikkelinnledning.',
          },
        ],
        solution: 'Alternativ B er riktig. Innledningen har tre oppgaver: fange oppmerksomheten, presentere temaet og antyde standpunktet.',
      },
    },

    // ========== ESSAY ==========
    {
      id: 'norsk-10-2-1-essay',
      type: 'text',
      content: `## Oppgavetype 2: Essay

Essayet er en friere sjanger enn artikkelen. Her skal du **utforske** et tema, ikke nødvendigvis komme til en tydelig konklusjon.

### Sjangerkrav for essay
- **Personlig stemme:** Du kan bruke «jeg» og dele egne erfaringer og refleksjoner
- **Undersøkende holdning:** Du stiller spørsmål og vender et tema fra flere sider
- **Assosiativ struktur:** Essayet trenger ikke følge en streng kronologisk rekkefølge — du kan «vandre» mellom ideer
- **Kunnskapsbasert:** Selv om tonen er personlig, viser du at du har kunnskap om temaet
- **Åpen avslutning:** Du trenger ikke konkludere — du kan la spørsmålet stå åpent

### Forskjell mellom artikkel og essay

| Trekk | Artikkel | Essay |
|-------|---------|-------|
| Tone | Saklig, argumenterende | Personlig, reflekterende |
| Standpunkt | Tydelig mening | Undersøkende, kanskje uten fasit |
| Struktur | Stram (innledning-hoveddel-avslutning) | Friere, mer assosiativ |
| «Jeg» | Sjelden | Ofte |
| Avslutning | Klar konklusjon | Kan være åpen |

### Struktur for essay

**Åpning:** En personlig observasjon, et spørsmål, eller en scene som setter i gang refleksjonen

**Utforskning:** Du vandrer mellom personlige erfaringer, fagkunnskap, eksempler fra litteratur/samfunn og filosofiske refleksjoner

**Avslutning:** Oppsummer hva du har kommet fram til — eller innrøm at du ikke har et klart svar. Det er helt ok!

### Tips for essayet
- Bruk **konkrete eksempler** — ikke bare skriv abstrakt om «identitet», men fortell om en konkret situasjon
- **Knytt sammen** personlige erfaringer med fagkunnskap
- La teksten «puste» — du trenger ikke argumentere i hvert avsnitt
- Vis at du kan **tenke komplekst** — et tema kan ha mange sider`,
    },

    // ========== OPPGAVE 2: ESSAY VS. ARTIKKEL ==========
    {
      id: 'norsk-10-2-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-2',
        number: '2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning passer best i et essay (ikke en artikkel)?',
        options: [
          {
            id: 'a',
            text: '«Ifølge SSB har andelen ungdom som opplever ensomhet økt med 12 prosent siden 2015.»',
            isCorrect: false,
            feedback: 'Denne setningen er mer typisk for en artikkel fordi den bare presenterer faktaopplysninger uten personlig refleksjon.',
          },
          {
            id: 'b',
            text: '«Jeg husker den kvelden jeg satt alene på rommet og scrollet gjennom andres liv — og lurte på om mitt eget var nok.»',
            isCorrect: true,
            feedback: 'Riktig! Denne setningen bruker personlig erfaring, refleksjon og et poetisk språk som er typisk for essayet.',
          },
          {
            id: 'c',
            text: '«Regjeringen må umiddelbart bevilge mer penger til psykisk helsevern for unge.»',
            isCorrect: false,
            feedback: 'Denne setningen er en tydelig oppfordring med et klart standpunkt — typisk for en artikkel eller et debattinnlegg, ikke et essay.',
          },
          {
            id: 'd',
            text: '«Folkehelseinstituttet definerer ensomhet som en subjektiv opplevelse av manglende sosial kontakt.»',
            isCorrect: false,
            feedback: 'En ren definisjon er mer typisk for en artikkel eller rapport. I et essay ville du reflektert rundt begrepet.',
          },
        ],
        solution: 'Alternativ B er riktig. Essayet preges av personlig stemme, refleksjon og et mer litterært språk.',
      },
    },

    // ========== NOVELLE ==========
    {
      id: 'norsk-10-2-1-novelle',
      type: 'text',
      content: `## Oppgavetype 3: Novelle / Kreativ tekst

Novellen er den kreative oppgavetypen på eksamen. Her skal du vise at du mestrer fortellerkunst og kan bruke litterære virkemidler bevisst.

### Sjangerkrav for novelle
- **Kort tekst:** En novelle er en kort fortelling (på eksamen ca. 500–1000 ord)
- **Få personer:** Vanligvis 1–3 sentrale karakterer
- **Avgrenset handling:** Handlingen foregår i et kort tidsrom og på få steder
- **Konflikt:** Det må være en spenning eller et problem
- **Vendepunkt:** Noe endrer seg — en overraskelse, en erkjennelse, et valg
- **Åpen slutt:** Novellen trenger ikke forklare alt — la leseren tenke

### Spenningskurven

1. **Eksposisjon:** Hvem, hvor, når? Sett scenen.
2. **Komplikasjon:** Noe skjer som skaper spenning.
3. **Spenningsstigning:** Problemet utvikler seg og intensiveres.
4. **Klimaks:** Høydepunktet — den mest intense scenen.
5. **Avtrapning og løsning:** Hva skjer etterpå? Eventuelt åpen slutt.

### Viktige fortellerteknikker

**Synsvinkel:**
- **Førsteperson («jeg»):** Nært og personlig, men begrenset til hva «jeg» vet
- **Tredjeperson («han/hun»):** Kan gi mer avstand, men også gå inn i tankene til karakteren
- **Allvitende forteller:** Vet alt om alle — men sjelden brukt i moderne noveller

**Virkemidler du bør bruke:**
- **Show, don't tell:** Vis følelsene gjennom handlinger og sanseinntrykk, ikke bare fortell
- **Dialog:** Gjør teksten levende og viser karakterene
- **Skildring:** Bruk sansene — hva ser, hører, lukter, kjenner karakteren?
- **Symboler:** La gjenstander eller hendelser bety noe mer enn det åpenbare
- **Indre monolog:** La leseren høre karakterens tanker`,
    },

    // ========== DEFINISJON: SHOW DON'T TELL ==========
    {
      id: 'norsk-10-2-1-def-showdonttell',
      type: 'definition',
      title: '«Show, don\'t tell» — vis, ikke fortell',
      content: `**«Show, don't tell»** er den viktigste regelen i kreativ skriving. I stedet for å **fortelle** leseren hva en karakter føler, **viser** du det gjennom handlinger, kroppsspråk og sanseinntrykk.

**Fortelling (svakt):**
> «Emma var nervøs.»

**Visning (sterkt):**
> «Emma klemte hendene sammen under bordet. Fingrene var kalde og svette. Hvert sekund føltes som en time.»

**Fortelling (svakt):**
> «Det var en kald dag.»

**Visning (sterkt):**
> «Pusten hans ble til hvite skyer i luften. Gresset knaste under skoene, og han merket at fingrene hadde mistet all følelse.»

**Hvorfor er visning bedre?**
- Det skaper bilder i leserens hode
- Det er mer engasjerende å lese
- Det viser at du mestrer litterære virkemidler
- Leseren får «oppleve» historien i stedet for bare å bli fortalt den`,
    },

    // ========== EKSEMPEL: NOVELLEÅPNING ==========
    {
      id: 'norsk-10-2-1-example-novelle',
      type: 'example',
      title: 'Eksempel: To versjoner av en novelleåpning',
      problem: `Sammenlign disse to versjonene av en novelleåpning. Hvilken er best, og hvorfor?

**Versjon A:**
«Jonas var 15 år og gikk i 10. klasse. Han hadde det vanskelig hjemme fordi foreldrene kranglet mye. En dag bestemte han seg for å stikke av.»

**Versjon B:**
«Døren slo igjen bak ham. Jonas trakk pusten dypt og merket at hendene skalv. Stemmene fra kjøkkenet fulgte ham ned trappen — mors gråt, fars raseri, lyden av noe som knuste. Han begynte å gå. Først sakte, så raskere, til skoene hamret mot asfalten og luften brant i lungene.»`,
      solution: `**Versjon B er klart best.** Her er hvorfor:

### Versjon A — svakheter:
- **Forteller** alt direkte: alder, klasse, at han har det vanskelig
- Ingen spenning — vi vet allerede hva som skjer
- Flatt språk uten bilder eller sanseinntrykk
- Ingen grunn for leseren til å fortsette

### Versjon B — styrker:
- **Viser** i stedet for å fortelle (show, don't tell)
- Starter **in medias res** (midt i handlingen)
- Bruker **sanseinntrykk:** lyder (døren slo, stemmer, noe knuste), kroppsfølelser (hendene skalv, luften brant i lungene)
- **Spenningskurve:** vi aner at noe er galt, men vet ikke alt
- **Konkrete detaljer:** «skoene hamret mot asfalten» er mye sterkere enn «han løp»
- Skaper **nysgjerrighet:** Hva skjedde? Hvor skal han?

### Hva kan vi lære?
- Start handlingen med en gang — ikke bruk plass på å forklare bakgrunn
- Bruk sanser: lyd, syn, berøring, lukt
- La leseren trekke egne slutninger
- Spenning handler om å holde tilbake informasjon, ikke gi alt på én gang`,
    },

    // ========== OPPGAVE 3: FORTELLERTEKNIKK ==========
    {
      id: 'norsk-10-2-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-3',
        number: '2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om disse «tell»-setningene til «show»-setninger. Bruk sanseinntrykk, kroppsspråk og konkrete detaljer.',
        subTasks: [
          {
            label: 'a',
            task: '«Sara var glad.»',
            solution: 'Eksempel: «Sara kjente latteren boble opp i brystet. Hun la hodet bakover og slapp den løs — en høy, ukontrollert latter som fikk de andre til å snu seg.» (Viser glede gjennom kroppsspråk og handling.)',
          },
          {
            label: 'b',
            task: '«Klasserommet var kjedelig.»',
            solution: 'Eksempel: «Klokken på veggen tikket. Og tikket. Og tikket. Linjen på tavlen svingte seg i uendelig mange retninger, men ordene til læreren gled forbi som bakgrunnsstøy. Noen hadde tegnet en labyrint i margen.» (Viser kjedsomhet gjennom konkrete detaljer og tidsfølelse.)',
          },
          {
            label: 'c',
            task: '«Det begynte å regne, og han ble våt.»',
            solution: 'Eksempel: «Den første dråpen traff pannen hans som en kald finger. Så kom resten — et grått teppe av vann som plasket mot asfalten og trengte gjennom jakken på sekunder. Han kjente den kalde fuktigheten krype ned langs ryggen.» (Viser regnet gjennom sanseinntrykk: berøring, syn.)',
          },
        ],
        hints: [
          'Tenk: Hva ville du sett, hørt eller kjent om du var der?',
          'Bruk sammenligninger for å gjøre det mer levende',
        ],
        solution: 'Gode «show»-setninger bruker sanseinntrykk og konkrete detaljer for å la leseren oppleve situasjonen.',
        allowsUpload: true,
      },
    },

    // ========== SAMMENSATT OPPGAVE ==========
    {
      id: 'norsk-10-2-1-sammensatt',
      type: 'text',
      content: `## Oppgavetype 4: Sammensatt oppgave (analyse + drøfting)

Den sammensatte oppgaven kombinerer to ferdigheter: Du skal først **analysere** en tekst fra vedlegget, deretter **drøfte** et tema knyttet til teksten.

### Struktur for sammensatt oppgave

**Del 1: Analyse (ca. 40 % av teksten)**
- Kort presentasjon av teksten (forfatter, tittel, sjanger, årstall)
- Hva handler teksten om? (motiv/handling)
- Hva er det underliggende temaet?
- Hvilke virkemidler bruker forfatteren? (Finn minst 3)
- Hvordan virker virkemidlene?

**Overgang:**
- Knytt analysen til drøftingstemaet: «Teksten handler om... Dette reiser spørsmålet om...»

**Del 2: Drøfting (ca. 60 % av teksten)**
- Presenter problemstillingen tydelig
- Drøft med argumenter for og mot
- Bruk eksempler fra teksten, andre kilder og egne erfaringer
- Vis at du ser saken fra flere sider

**Avslutning:**
- Oppsummer hva du har kommet frem til
- Eventuelt en åpen refleksjon`,
    },

    // ========== DEFINISJON: DISPOSISJON ==========
    {
      id: 'norsk-10-2-1-def-disposisjon',
      type: 'definition',
      title: 'Disposisjon — din eksamensstrategi',
      content: `En **disposisjon** er en plan for teksten din. Du bør bruke 20–30 minutter av eksamenstiden på å lage en god disposisjon.

**Slik lager du en disposisjon:**

1. **Les oppgaven nøye** — hva bes du om? (Artikkel, essay, novelle, sammensatt?)
2. **Les vedleggene** — hva handler de om? Hvordan kan du bruke dem?
3. **Bestem deg** — hvilken oppgave velger du?
4. **Brainstorm** — skriv ned alle ideer, uten å sensurere
5. **Organiser** — sorter ideene i en logisk rekkefølge
6. **Lag skjelett:**
   - Innledning: Hva skal åpningen være?
   - Hoveddel: 2–4 hovedpunkter med stikkord
   - Avslutning: Hva skal konklusjonen være?

**Tidsdisponering på 5 timers eksamen:**
- 15 min: Les oppgaver og vedlegg
- 20 min: Disposisjon
- 3 timer: Skriving
- 45 min: Gjennomlesning og retting
- Siste 15 min: Siste finpuss`,
    },

    // ========== TIPS: GODE OG DÅRLIGE INNLEDNINGER ==========
    {
      id: 'norsk-10-2-1-tip-innledninger',
      type: 'tip',
      title: 'Tips: Sterke og svake innledninger',
      content: `**Svake innledninger (unngå disse!):**
- «I denne oppgaven skal jeg skrive om...» (kjedelig, metatekst)
- «Ifølge ordboken betyr demokrati...» (oppbrukt, uoriginalt)
- «Helt siden tidenes morgen har mennesker...» (for vagt og generelt)

**Sterke innledninger (bruk disse!):**
- **Retorisk spørsmål:** «Hva om du våknet en morgen og ingen husket hvem du var?»
- **Påstand:** «Karakterer ødelegger skolen.» (Provoserende, fanger oppmerksomheten)
- **Anekdote:** «Da bestemoren min var 15, fikk hun ikke lov å gå på skolen.» (Personlig, konkret)
- **Scene:** «Klokken er 07:45. 30 elever sitter stille med nesen i telefonen.» (Visuelt, «show don't tell»)
- **Sitat:** «'Frihet er ikke fraværet av forpliktelser, men evnen til å velge,' sa Paulo Coelho.»`,
    },

    // ========== OPPGAVE 4: INNLEDNINGER ==========
    {
      id: 'norsk-10-2-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-4',
        number: '2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre ulike innledninger til en artikkel om temaet «Bør ungdom ha mer fritid?». Bruk tre forskjellige teknikker.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en innledning som starter med et retorisk spørsmål.',
            solution: 'Eksempel: «Når var sist du hadde en hel ettermiddag uten planer? Uten trening, lekser, kurs eller forpliktelser? For de fleste ungdommer er svaret: Jeg husker ikke.»',
          },
          {
            label: 'b',
            task: 'Skriv en innledning som starter med en provoserende påstand.',
            solution: 'Eksempel: «Vi er i ferd med å ødelegge ungdommen. Ikke med dårlig mat eller farlige stoffer, men med noe langt mer lumsk: en timeplan som ikke har plass til å bare være.»',
          },
          {
            label: 'c',
            task: 'Skriv en innledning som starter med en konkret scene.',
            solution: 'Eksempel: «Klokken er 16:30. Marie har akkurat kommet hjem fra skolen. Hun slenger sekken i gangen, sjekker telefonen: treningmelding kl. 17, mattegruppe kl. 19, og lekser som burde vært gjort i går. Fri? Hva er det?»',
          },
        ],
        hints: [
          'Tenk på hva som får DEG til å lese videre',
          'En god innledning gjør leseren nysgjerrig',
        ],
        solution: 'Tre ulike teknikker gir ulike effekter. Alle bør fange leserens oppmerksomhet og presentere temaet.',
        allowsUpload: true,
      },
    },

    // ========== TEKSTBINDING ==========
    {
      id: 'norsk-10-2-1-tekstbinding',
      type: 'text',
      content: `## Tekstbinding: Lim som holder teksten sammen

En vanlig svakhet i eksamenstekster er dårlig tekstbinding — avsnittene henger ikke sammen, og teksten føles hakkete. Her er verktøyene du trenger:

### Bindeord og overganger

**Addisjon (legge til):** dessuten, i tillegg, videre, for det andre
**Kontrast (motsetning):** men, likevel, derimot, på den andre siden, selv om
**Årsak (grunn):** fordi, på grunn av, ettersom, derfor
**Eksempel:** for eksempel, blant annet, slik som, dette kan vi se i
**Konklusjon:** alt i alt, oppsummert, på bakgrunn av dette, dermed
**Tid:** først, deretter, etter hvert, til slutt, samtidig

### Avsnittsskift
Start et nytt avsnitt når du:
- Introduserer et nytt argument
- Skifter perspektiv
- Går videre i handlingen (novelle)
- Tar opp et motargument

### Temasetning
Hvert avsnitt bør starte med en **temasetning** som forteller hva avsnittet handler om. Resten av avsnittet utdyper og underbygger temasetningen.`,
    },

    // ========== OPPGAVE 5: TEKSTBINDING ==========
    {
      id: 'norsk-10-2-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-5',
        number: '2.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett inn passende bindeord i de tomme feltene:',
        subTasks: [
          {
            label: 'a',
            task: 'Mange ungdommer bruker sosiale medier daglig. _____ kan dette ha negative konsekvenser for selvbildet.',
            solution: '«Likevel» eller «Dessverre» — bindeordet viser en uventet eller negativ konsekvens.',
            multipleChoiceOptions: ['Likevel', 'Dessuten', 'For eksempel', 'Derfor'],
          },
          {
            label: 'b',
            task: 'Karakterer kan skape press. _____ mener noen at de er nødvendige for å motivere elevene.',
            solution: '«På den andre siden» — bindeordet introduserer et motargument.',
            multipleChoiceOptions: ['På den andre siden', 'Dessuten', 'Fordi', 'Til slutt'],
          },
          {
            label: 'c',
            task: 'Forskning viser at fysisk aktivitet er bra for hjernen. _____ bør skolen gi elevene mer tid til bevegelse.',
            solution: '«Derfor» — bindeordet trekker en logisk slutning.',
            multipleChoiceOptions: ['Derfor', 'Men', 'For eksempel', 'Likevel'],
          },
        ],
        solution: 'a) Likevel, b) På den andre siden, c) Derfor',
      },
    },

    // ========== OPPGAVE 6: DISPOSISJON ==========
    {
      id: 'norsk-10-2-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-6',
        number: '2.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Lag en disposisjon for én av følgende oppgaver. Velg selv sjanger (artikkel, essay eller novelle).

A) «Identitet» — Hva gjør deg til den du er?
B) «Valg» — Et øyeblikk som forandret alt.
C) «Skjermsamfunnet» — Lever vi mer på nett enn i virkeligheten?

Disposisjonen skal inneholde:
- Valgt sjanger og begrunnelse
- Innledning (type åpning, stikkord)
- Hoveddel (3–4 punkter med stikkord)
- Avslutning (type avslutning, stikkord)`,
        hints: [
          'Tenk på hva som passer best til temaet — en personlig refleksjon (essay), en argumenterende tekst (artikkel), eller en fortelling (novelle)?',
          'En god disposisjon gir deg en klar retning, men du kan endre underveis',
        ],
        solution: 'En god disposisjon viser at du har tenkt gjennom sjanger, struktur og innhold før du begynner å skrive.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Artikkel:** Saklig, argumenterende tekst med tydelig standpunkt og belegg
- **Essay:** Personlig, reflekterende tekst med undersøkende holdning
- **Novelle:** Kort kreativ tekst med spenningskurve, vendepunkt og virkemidler
- **Sammensatt oppgave:** Analyse av vedleggstekst + drøfting av tema
- **Show, don't tell:** Vis følelser gjennom sanseinntrykk og handling
- **Disposisjon:** Plan for teksten som lages før du begynner å skrive
- **Tekstbinding:** Bindeord og overganger som gjør teksten sammenhengende

### Viktige eksamenstips
1. Bruk god tid på å lese oppgavene og lage disposisjon
2. Velg oppgaven du føler deg mest komfortabel med
3. Hold deg til sjangerkravene
4. Bruk vedleggene aktivt
5. Skriv tydelig og strukturert — det hjelper sensoren å se kvaliteten
6. Spar tid til gjennomlesning og retting`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'norsk-10-2-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-7',
        number: '2.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Skriv en eksamentekst.

Velg én av oppgavene nedenfor og skriv en tekst på 400–600 ord. Bruk disposisjonen du laget i forrige oppgave, eller lag en ny.

**Oppgave A — Artikkel:**
Skriv en artikkel med tittelen «Bør ungdom ha mer fritid?». Bruk minst to argumenter med belegg og ta opp minst ett motargument.

**Oppgave B — Essay:**
Skriv et essay med utgangspunkt i begrepet «identitet». Hva gjør deg til den du er? Utforsk spørsmålet med personlige erfaringer og refleksjoner.

**Oppgave C — Novelle:**
Skriv en novelle med tittelen «Vendepunktet». Bruk spenningskurven, minst tre litterære virkemidler og «show, don't tell».

Krav til alle oppgaver:
a) Tydelig sjangertrekk
b) God struktur med innledning, hoveddel, avslutning
c) Bevisst bruk av språk og virkemidler
d) God tekstbinding`,
        hints: [
          'Bruk 10 minutter på disposisjon, 30 minutter på skriving, 10 minutter på gjennomlesning',
          'Les teksten høyt for deg selv — hører du feil?',
        ],
        solution: 'Teksten vurderes etter innhold, struktur, språk og sjangerbeherskelse — akkurat som på ekte eksamen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-2-1-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-8',
        number: '2.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Egenvurdering.

Bytt tekst med en medelev (eller les din egen tekst med friske øyne). Vurder teksten ved hjelp av dette skjemaet:

a) Sjanger: Er sjangerkravene oppfylt? (Hva er bra, hva mangler?)
b) Innhold: Er innholdet relevant og gjennomtenkt?
c) Struktur: Har teksten tydelig innledning, hoveddel og avslutning? Henger avsnittene sammen?
d) Språk: Er språket variert og presist? Finnes det «show, don't tell»?
e) Forbedring: Gi tre konkrete forslag til forbedring.

Skriv tilbakemeldingen som en sammenhengende tekst (100–200 ord).`,
        hints: [
          'Vær ærlig, men konstruktiv — pek på det som er bra også',
          'Bruk vurderingskriteriene fra starten av kapittelet',
        ],
        solution: 'En god egenvurdering viser at du forstår kvalitetskriteriene og kan reflektere over egen og andres skriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Eksamensforberedelse — Muntlig
// LK20: Presentere og drøfte faglige emner muntlig med god struktur
// ============================================================================

export const CHAPTER_NORSK_10_2_2: TextbookChapter = {
  id: 'norsk-10-2-2',
  courseId: 'norsk-10',
  chapterNumber: '2.2',
  title: 'Eksamensforberedelse — Muntlig',
  description: 'Forbered deg til muntlig eksamen med presentasjonsteknikk, retorikk, fagsamtale og strategier mot nervøsitet.',
  estimatedMinutes: 70,
  competenceGoals: [
    'presentere og drøfte faglige emner muntlig med god struktur og tilpasset språk',
    'lytte til, vurdere og gi konstruktiv tilbakemelding på andres presentasjoner',
    'bruke retoriske ferdigheter i muntlig kommunikasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-2-2-intro',
      type: 'text',
      content: `## Muntlig eksamen: Vis hva du kan

Hjertet banker. Hendene er svette. Du står foran sensorer og lærer, og de neste 30 minuttene skal du vise alt du har lært i norskfaget. For mange er muntlig eksamen det mest skremmende de gjør i 10. klasse.

Men her er hemmeligheten: **Muntlig eksamen er ikke en test av nervøsitet — det er en samtale om noe du kan.** Og med riktig forberedelse kan du faktisk ha det bra.

**Hva muntlig eksamen i norsk innebærer:**
- **Forberedelsestid:** Du får oppgaven 48 timer eller 24 timer i forveien
- **Del 1 — Presentasjon (ca. 10 minutter):** Du legger fram det forberedte temaet ditt
- **Del 2 — Fagsamtale (ca. 20 minutter):** Sensorene stiller spørsmål om andre deler av pensum
- **Totalt:** Ca. 30 minutter

**Hva vurderes?**
- Faglig innhold og kunnskap
- Struktur og sammenheng
- Språk og formidlingsevne
- Evne til refleksjon og drøfting
- Bruk av fagbegreper`,
    },

    // ========== DEFINISJON: PRESENTASJONSSTRUKTUR ==========
    {
      id: 'norsk-10-2-2-def-presentasjon',
      type: 'definition',
      title: 'Struktur for muntlig presentasjon',
      content: `En god presentasjon har en tydelig struktur som gjør det lett for tilhørerne å følge med:

**1. Åpning (1 minutt)**
- Fang oppmerksomheten: Start med et spørsmål, et sitat, en overraskende fakta, eller en kort historie
- Presenter temaet: Hva skal du snakke om?
- Gi en oversikt: «Jeg skal snakke om tre ting: ...»

**2. Hoveddel (7–8 minutter)**
- Maks 3–4 hovedpunkter
- Hvert punkt: Påstand → forklaring → eksempel
- Tydelige overganger mellom punktene: «Det bringer meg til neste tema...»
- Bruk eksempler fra pensum: tekstutdrag, forfattere, begreper

**3. Avslutning (1 minutt)**
- Oppsummer hovedpoengene
- Kom tilbake til åpningen (rammefunksjon)
- Avslutt med en sterk setning — ikke «ja, det var det jeg hadde»!

**Husk:** 10 minutter er kort! Du rekker mye mindre enn du tror. Prioriter kvalitet over kvantitet — det er bedre å snakke grundig om tre ting enn overflatisk om ti.`,
    },

    // ========== OPPGAVE 1: PRESENTASJONSSTRUKTUR ==========
    {
      id: 'norsk-10-2-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-1',
        number: '2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den beste måten å starte en muntlig presentasjon på?',
        options: [
          {
            id: 'a',
            text: '«Hei, jeg heter Maria og jeg skal snakke om realismen.»',
            isCorrect: false,
            feedback: 'Ikke feil, men dette er en svak åpning. Den er forutsigbar og fanger ikke oppmerksomheten.',
          },
          {
            id: 'b',
            text: '«Tenk deg at du lever i Norge i 1879. Du er kvinne. Du har ingen rettigheter. Hva gjør du?»',
            isCorrect: true,
            feedback: 'Riktig! Denne åpningen er engasjerende fordi den bruker et retorisk spørsmål, skaper innlevelse og gjør tilhørerne nysgjerrige.',
          },
          {
            id: 'c',
            text: '«I denne presentasjonen skal jeg først snakke om bakgrunnen, deretter kjennetegn, og til slutt forfattere.»',
            isCorrect: false,
            feedback: 'Å gi en oversikt er bra, men det bør ikke være det aller første du sier. Start med noe som fanger oppmerksomheten først.',
          },
          {
            id: 'd',
            text: '«Beklager, jeg er litt nervøs, men jeg skal prøve å gjøre mitt beste.»',
            isCorrect: false,
            feedback: 'Unngå å unnskylde deg i åpningen. Det signaliserer usikkerhet og får tilhørerne til å fokusere på nervøsiteten din i stedet for innholdet.',
          },
        ],
        solution: 'Alternativ B er riktig. En sterk åpning engasjerer tilhørerne med en gang.',
      },
    },

    // ========== FREMFØRING ==========
    {
      id: 'norsk-10-2-2-fremforing',
      type: 'text',
      content: `## Fremføringsteknikk: Hvordan du sier det

Innholdet er viktig, men **hvordan** du formidler det, er nesten like viktig. Her er de viktigste teknikkene:

### Stemmebruk
- **Volum:** Snakk høyt nok til at alle hører deg. Mange snakker for lavt når de er nervøse.
- **Tempo:** Varier tempoet. Sakte ned ved viktige poenger. Nervøse mennesker snakker ofte for fort.
- **Pauser:** Bruk pauser bevisst. En pause etter et viktig poeng gir tilhørerne tid til å tenke — og gjør deg mer overbevisende.
- **Betoning:** Legg trykk på nøkkelord. «Dette er den VIKTIGSTE forskjellen mellom realisme og naturalisme.»

### Kroppsspråk
- **Øyekontakt:** Se på tilhørerne, ikke på skjermen eller arkene. Bruk «trekanten» — se på noen til venstre, noen i midten, noen til høyre.
- **Hender:** Ha hendene frie (ikke i lommene). Bruk naturlige gester for å understreke poenger.
- **Holdning:** Stå oppreist med begge føttene på gulvet. Unngå å vagge eller vri på deg.
- **Bevegelse:** Du kan ta noen skritt, men ikke vandre rastløst. Stå i ro når du sier noe viktig.

### Hjelpemidler
- **Stikkordsliste:** Bruk korte stikkord, IKKE et ferdigskrevet manus. Å lese fra manus er den vanligste feilen.
- **PowerPoint/Keynote:** Maks 6 slides. Lite tekst, store bilder. Slides er et supplement, ikke manuset ditt.
- **Visuelt:** Bilder, sitater på skjerm, tidslinje — alt som gjør det lettere å følge presentasjonen.`,
    },

    // ========== DEFINISJON: STIKKORD VS MANUS ==========
    {
      id: 'norsk-10-2-2-def-stikkord',
      type: 'definition',
      title: 'Stikkord vs. manus',
      content: `Det er en avgjørende forskjell mellom å bruke **stikkord** og å bruke **manus**:

**Manus (unngå dette!):**
> «Realismen var en litterær epoke som varte fra ca. 1850 til 1890. Forfatterne ville vise virkeligheten slik den var. Viktige forfattere var Henrik Ibsen, Alexander Kielland, Jonas Lie og Bjørnstjerne Bjørnson.»

Problemet: Du leser opp ordrett, mister øyekontakt, og det høres robotaktig ut.

**Stikkord (gjør dette!):**
> - Realismen 1850–1890
> - Vise virkeligheten
> - «De fire store»: Ibsen, Kielland, Lie, Bjørnson

Fordelen: Du formulerer setningene selv mens du snakker. Det høres naturlig ut, du har øyekontakt, og du kan tilpasse deg tilhørerne.

**Huskeregel:** Stikkordene skal minne deg på HVA du skal si. Du bestemmer HVORDAN du sier det i øyeblikket.`,
    },

    // ========== OPPGAVE 2: STIKKORDSLISTE ==========
    {
      id: 'norsk-10-2-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-2',
        number: '2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om denne manusteksten til en stikkordsliste med maks 5 stikkord per punkt.',
        subTasks: [
          {
            label: 'a',
            task: 'Manustekst: «Naturalismen var en videreføring av realismen som gikk enda lenger i å vise den brutale sannheten. Mennesket ble fremstilt som styrt av arv og miljø, det vi kaller determinisme. Viktige forfattere var Amalie Skram med Hellemyrsfolket og Hans Jæger med Fra Kristiania-Bohêmen.»',
            solution: 'Stikkord: 1) Naturalismen → videreføring av realismen, brutale sannheten. 2) Determinisme: arv + miljø. 3) Skram: Hellemyrsfolket. Jæger: Kristiania-Bohêmen.',
          },
          {
            label: 'b',
            task: 'Manustekst: «TONE-modellen er et verktøy for kildekritikk. T står for troverdighet, altså hvem som har skrevet teksten. O står for objektivitet, om teksten er balansert. N er nøyaktighet, om faktaene stemmer. E er egnethet, om kilden passer til formålet.»',
            solution: 'Stikkord: TONE-modellen: T = troverdighet (hvem?), O = objektivitet (balansert?), N = nøyaktighet (fakta?), E = egnethet (passer den?).',
          },
        ],
        hints: [
          'Tenk: Hva er absolutt nødvendig for å huske innholdet?',
          'Bruk forkortelser og nøkkelord',
        ],
        solution: 'Gode stikkord er korte nøkkelord som minner deg på innholdet uten å bli et manus.',
        allowsUpload: true,
      },
    },

    // ========== FAGSAMTALEN ==========
    {
      id: 'norsk-10-2-2-fagsamtale',
      type: 'text',
      content: `## Fagsamtalen: Kunsten å tenke høyt

Etter presentasjonen kommer fagsamtalen. Mange frykter denne delen mest, fordi du ikke vet nøyaktig hva du får spørsmål om. Men fagsamtalen er egentlig en **mulighet** — fordi du får sjansen til å vise bredden i kunnskapene dine.

### Hva sensorene ser etter
- At du kan **fagstoffet** — ikke bare det du har presentert
- At du kan **reflektere** — tenke selvstendig og drøfte
- At du kan **knytte sammen** ulike deler av pensum
- At du bruker **fagbegreper** naturlig
- At du kan **bygge videre** på et spørsmål

### Typiske spørsmål
- «Kan du si mer om...?» — Utdyp noe fra presentasjonen din
- «Hva mener du med...?» — Forklar et begrep du brukte
- «Hva er forskjellen mellom... og...?» — Sammenlign to ting
- «Hvordan henger dette sammen med...?» — Vis at du ser helheten
- «Hva synes du om...?» — Gi din egen vurdering, med begrunnelse
- «Kan du gi et eksempel på...?» — Vær konkret

### Strategier for fagsamtalen

**Strategi 1: «Tenketid»**
Det er helt greit å si: «La meg tenke litt...» før du svarer. Sensorer foretrekker et gjennomtenkt svar over et overilt et.

**Strategi 2: «Fagbegrepstrategien»**
Bruk fagbegreper aktivt: «Det er et godt eksempel på *determinisme*, som vi ser i naturalismen, for eksempel hos Amalie Skram...»

**Strategi 3: «Brobyggeren»**
Knytt spørsmålet til noe du kan godt: «Det minner meg om noe vi leste i forbindelse med realismen, nemlig...»

**Strategi 4: «Vet-ikke-strategien»**
Hvis du ikke vet svaret, ikke lyv. Si: «Det er jeg usikker på, men jeg tror det kan henge sammen med...» Vis at du kan resonnere selv om du ikke husker alt.`,
    },

    // ========== EKSEMPEL: FAGSAMTALE ==========
    {
      id: 'norsk-10-2-2-example-fagsamtale',
      type: 'example',
      title: 'Eksempel: God og dårlig fagsamtale',
      problem: `Sensor spør: «Du snakket om realismen i presentasjonen. Kan du forklare hva som skiller realismen fra naturalismen?»

Se på to ulike elevsvar nedenfor. Hvilket er best, og hvorfor?

**Elev A:** «Ehm... naturalismen er liksom... mørkere? Og... de trodde at mennesker var styrt av ting og... ja.»

**Elev B:** «Ja, det er et godt spørsmål. Både realismen og naturalismen ville vise virkeligheten, men de har et ulikt menneskesyn. I realismen tror man at mennesker kan gjøre valg og forandre livet sitt — som Nora i Et dukkehjem, som velger å forlate mannen sin. I naturalismen er det annerledes: der er mennesket styrt av arv og miljø, det vi kaller determinisme. I Amalie Skrams Hellemyrsfolket ser vi for eksempel at alkoholisme og fattigdom går i arv gjennom generasjoner, og karakterene klarer ikke å bryte ut. Så den viktigste forskjellen er om mennesket har frihet til å velge eller ikke.»`,
      solution: `**Elev B er klart best.** Her er analysen:

### Elev A — svakheter:
- Vagt og upresist: «liksom... mørkere» og «ting» er ikke fagspråk
- Ingen eksempler eller forfattere
- Ingen fagbegreper
- Usikker og nølende
- Ufullstendig svar

### Elev B — styrker:
- **Fagbegreper:** «menneskesyn», «determinisme», «arv og miljø»
- **Konkrete eksempler:** Nora i Et dukkehjem, Amalie Skrams Hellemyrsfolket
- **Sammenligning:** Viser likhet (begge viser virkeligheten) OG forskjell (ulikt menneskesyn)
- **Strukturert svar:** Innledning → forklaring → eksempler → konklusjon
- **Trygg og tydelig:** Starter med «Ja, det er et godt spørsmål» — viser ro og respekt

### Hva kan vi lære?
- Bruk fagbegreper — det viser at du kan faget
- Gi konkrete eksempler med forfatternavn og verktitler
- Strukturer svaret: Start med hovedpoenget, utdyp med eksempler, avslutt med en konklusjon
- Det er lov å ta seg tid til å tenke`,
    },

    // ========== OPPGAVE 3: FAGSAMTALEØVELSE ==========
    {
      id: 'norsk-10-2-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-3',
        number: '2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et godt svar på hvert av disse fagsamtale-spørsmålene. Bruk fagbegreper og eksempler.',
        subTasks: [
          {
            label: 'a',
            task: '«Hva er TONE-modellen, og hvorfor er den nyttig?»',
            solution: 'Et godt svar forklarer at TONE står for Troverdighet, Objektivitet, Nøyaktighet og Egnethet, gir et konkret eksempel på bruk (for eksempel vurdering av en nettartikkel), og forklarer hvorfor kildekritikk er viktig i informasjonssamfunnet.',
          },
          {
            label: 'b',
            task: '«Hva mener vi med at en forfatter bruker «show, don\'t tell»?»',
            solution: 'Et godt svar forklarer at «show, don\'t tell» betyr å vise følelser og hendelser gjennom konkrete sanseinntrykk og handlinger i stedet for å bare fortelle dem direkte. Gi et eksempel: «Sara var redd» (tell) vs. «Saras hender skalv. Hun presset ryggen mot veggen og holdt pusten» (show).',
          },
          {
            label: 'c',
            task: '«Hva er forskjellen mellom en artikkel og et essay?»',
            solution: 'Et godt svar nevner at artikkelen er saklig og argumenterende med et tydelig standpunkt, mens essayet er personlig og reflekterende med en mer åpen, undersøkende holdning. Artikkelen har stram struktur, essayet er friere. I artikkelen bruker man sjelden «jeg», i essayet er det vanlig.',
          },
        ],
        hints: [
          'Start med å definere begrepet, gi deretter et eksempel',
          'Bruk formuleringen «Et eksempel på dette er...»',
        ],
        solution: 'Gode fagsamtalesvar bruker fagbegreper, gir konkrete eksempler, og er strukturert med innledning, utdyping og avslutning.',
        allowsUpload: true,
      },
    },

    // ========== NERVØSITET ==========
    {
      id: 'norsk-10-2-2-nervositet',
      type: 'text',
      content: `## Håndtere nervøsitet

La oss snakke om elefanten i rommet: nervøsitet. Nesten alle er nervøse før muntlig eksamen. Det er helt normalt — og faktisk kan litt nervøsitet være positivt, fordi det gjør deg skjerpet.

### Hvorfor blir vi nervøse?
Kroppen tolker situasjonen som «fare» og aktiverer «kamp-eller-flukt-responsen»:
- Hjertet slår raskere
- Hendene blir svette
- Stemmen kan skjelve
- Du kan glemme det du hadde tenkt å si

### Teknikker som hjelper

**Før eksamen:**
1. **Øv, øv, øv:** Jo mer du har øvd, jo tryggere er du. Presenter for familie, venner, eller speilet.
2. **Positiv visualisering:** Forestill deg at det går bra. Se for deg at du snakker trygt og tydelig.
3. **Forbered deg bredt:** Jo mer du kan om pensum, jo tryggere er du i fagsamtalen.
4. **Sov godt:** En uthvilt hjerne fungerer bedre.

**Rett før du skal inn:**
1. **Pust dypt:** Pust inn gjennom nesen i 4 sekunder, hold i 4 sekunder, pust ut gjennom munnen i 6 sekunder. Gjenta 5 ganger.
2. **Fysisk aktivitet:** Ta en rask gåtur, gjør noen knebøy — det hjelper å bruke opp adrenalin.
3. **Husk:** Sensorene vil at du skal lykkes. De er på din side.

**Under presentasjonen:**
1. **Start sterkt:** De første 30 sekundene er de mest nervøse. Lær åpningen utenat!
2. **Pust i pausene:** Bruk naturlige pauser til å puste og roe deg ned.
3. **Fokuser på budskapet:** Tenk «hva vil jeg formidle?» i stedet for «hva tenker de om meg?»
4. **Det er lov å stoppe opp:** Hvis du mister tråden, ta en pause. Si «la meg tenke...» Det er helt akseptert.`,
    },

    // ========== NOTE: SENSORENES PERSPEKTIV ==========
    {
      id: 'norsk-10-2-2-note-sensor',
      type: 'note',
      title: 'Hva sensorene egentlig tenker',
      content: `Mange elever tror at sensorene er ute etter å «ta dem» på noe. Det er feil. Her er hva sensorene faktisk tenker:

- **«Vis meg hva du kan»** — ikke hva du ikke kan
- **«Jeg heier på deg»** — sensorene ønsker at du skal gjøre det bra
- **«Litt nervøsitet er normalt»** — de forventer det og trekker ikke for det
- **«Fagbegreper imponerer»** — bruk dem!
- **«Eksempler er gull»** — konkrete eksempler viser at du kan stoffet

**Husk:** Sensorene ser mange elever. Det som skiller de beste fra de middels, er ikke at de er mindre nervøse — det er at de bruker fagbegreper, gir eksempler, og viser evne til å reflektere.`,
    },

    // ========== OPPGAVE 4: ÅPNINGSSTRATEGI ==========
    {
      id: 'norsk-10-2-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-4',
        number: '2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken åpningsstrategi er best for en presentasjon om «Kildekritikk i den digitale tidsalderen»?',
        options: [
          {
            id: 'a',
            text: '«I dag skal jeg snakke om kildekritikk. Kildekritikk er viktig fordi vi får mye informasjon hver dag.»',
            isCorrect: false,
            feedback: 'Svak åpning. Den er forutsigbar og gir ingen grunn til å lytte videre.',
          },
          {
            id: 'b',
            text: '«Da jeg var 12, delte jeg en nyhet på Instagram som viste seg å være helt falsk. 2000 mennesker hadde allerede delt den. Det fikk meg til å tenke: Hvordan vet vi egentlig hva som er sant?»',
            isCorrect: true,
            feedback: 'Riktig! Denne åpningen bruker en personlig historie (patos), skaper gjenkjennelse, og stiller et spørsmål som leder inn i temaet.',
          },
          {
            id: 'c',
            text: '«TONE-modellen. T for troverdighet. O for objektivitet. N for nøyaktighet. E for egnethet.»',
            isCorrect: false,
            feedback: 'For teknisk som åpning. Definisjoner hører til hoveddelen, ikke åpningen.',
          },
          {
            id: 'd',
            text: '«Beklager, jeg er litt nervøs, men jeg liker dette temaet, så forhåpentligvis går det greit.»',
            isCorrect: false,
            feedback: 'Unngå å unnskylde deg. Det fokuserer oppmerksomheten på nervøsiteten din i stedet for innholdet.',
          },
        ],
        solution: 'Alternativ B er riktig. En personlig historie med et retorisk spørsmål er en effektiv åpning.',
      },
    },

    // ========== DEFINISJON: FAGBEGREPER ==========
    {
      id: 'norsk-10-2-2-def-fagbegreper',
      type: 'definition',
      title: 'Viktige fagbegreper for muntlig eksamen',
      content: `Her er fagbegreper du bør kunne bruke naturlig i presentasjon og fagsamtale:

**Litteratur og analyse:**
- Epoke, realisme, naturalisme, nyromantikk, modernisme
- Determinisme, samfunnskritikk, psykologisk dybde
- Virkemidler: metafor, sammenligning, besjeling, symbolikk, kontrast
- Synsvinkel, forteller, spenningskurve, vendepunkt
- SMITT-modellen

**Sakprosa og retorikk:**
- Etos, patos, logos
- Retorisk spørsmål, trikolon, overdrivelse
- Funksjonell og litterær sakprosa
- TONE-modellen: troverdighet, objektivitet, nøyaktighet, egnethet
- Kildehenvisning, plagiat, kildekritikk

**Skriving:**
- Sjanger, artikkel, essay, novelle, kronikk
- Tekstbinding, bindeord, temasetning
- «Show, don't tell», indre monolog, dialog
- Disposisjon, innledning, hoveddel, avslutning

**Språk:**
- Bokmål, nynorsk, dialekt
- Språkhistorie: norrønt, mellomnorsk, dansketiden
- Ivar Aasen, Knud Knudsen

**Tips:** Du trenger ikke bruke alle begrepene. Men de du bruker, bør du kunne forklare.`,
    },

    // ========== OPPGAVE 5: BRUK AV FAGBEGREPER ==========
    {
      id: 'norsk-10-2-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-5',
        number: '2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar disse fagbegrepene med egne ord, som om du forklarte dem til en sensor i en fagsamtale.',
        subTasks: [
          {
            label: 'a',
            task: 'Determinisme',
            solution: 'Determinisme er ideen om at menneskets handlinger og skjebne er bestemt av arv og miljø. I litteraturen brukes dette i naturalismen: karakterene er fanget av sin bakgrunn og kan ikke bryte fri. For eksempel i Skrams Hellemyrsfolket, der alkoholisme og fattigdom går i arv.',
          },
          {
            label: 'b',
            task: 'Etos',
            solution: 'Etos er en av de tre appellformene i retorikk og handler om avsenderens troverdighet. Når en lege uttaler seg om helse, bruker hun etos — vi stoler på henne fordi hun har kompetanse. Etos handler om å virke pålitelig og kunnskapsrik.',
          },
          {
            label: 'c',
            task: 'Spenningskurve',
            solution: 'Spenningskurven er strukturen i en fortelling: den starter med en eksposisjon der vi lærer hvem, hvor og når, så oppstår en komplikasjon, spenningen stiger, når et klimaks (høydepunkt), og avsluttes med en avtrapning. De fleste noveller og romaner følger denne strukturen.',
          },
        ],
        hints: [
          'Forklar enkelt først, gi deretter et konkret eksempel',
          'Øv deg på å si forklaringen høyt — det er muntlig eksamen!',
        ],
        solution: 'Gode forklaringer er korte, presise, og inkluderer et konkret eksempel.',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 6: PLANLEGG PRESENTASJON ==========
    {
      id: 'norsk-10-2-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-6',
        number: '2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Velg ett av temaene nedenfor og planlegg en 10-minutters presentasjon. Lag en fullstendig stikkordsliste.

**Tema A:** «Realismen og naturalismen — likheter og forskjeller»
**Tema B:** «Kildekritikk i den digitale tidsalderen»
**Tema C:** «Norsk språkhistorie — fra norrønt til moderne norsk»

Stikkordslisten skal inneholde:
a) Åpning (type åpning + stikkord)
b) 3 hovedpunkter (stikkord for hvert punkt)
c) Eksempler du vil bruke (forfattere, verk, fagbegreper)
d) Avslutning (type avslutning + stikkord)`,
        hints: [
          'Husk: maks 3–4 hovedpunkter på 10 minutter',
          'Tenk på hva sensorene forventer — faglig dybde, eksempler, refleksjon',
          'Øv deg på å snakke ut fra stikkordene uten manus',
        ],
        solution: 'En god stikkordsliste dekker åpning, hovedpunkter med eksempler, og avslutning — uten å bli et manus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Presentasjon:** Forberedt fremlegg med tydelig åpning, hoveddel og avslutning
- **Fagsamtale:** Uforbredt samtale om pensumtemaer
- **Stikkord vs. manus:** Bruk stikkord, aldri fullt manus
- **Etos, patos, logos:** Også relevant muntlig — vis troverdighet, skap engasjement, bruk fakta
- **Fagbegreper:** Nøkkelen til å vise faglig kompetanse
- **«Show, don't tell» muntlig:** Bruk konkrete eksempler, ikke bare generelle påstander

### Sjekkliste for muntlig eksamen
1. Har jeg en engasjerende åpning som er innøvd utenat?
2. Har jeg maks 3–4 hovedpunkter i hoveddelen?
3. Har jeg stikkord (IKKE manus)?
4. Bruker jeg fagbegreper og konkrete eksempler?
5. Har jeg øvd på fremføringen (stemme, pauser, øyekontakt)?
6. Er jeg forberedt på fagsamtalespørsmål om andre deler av pensum?
7. Har jeg en sterk avslutning?
8. Har jeg øvd pusteteknikken min?`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-2-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-7',
        number: '2.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Gjennomfør en mini-eksamen.

Bruk stikkordslisten du laget i forrige oppgave og gjennomfør en komplett mini-eksamen med en medelev eller familiemedlem:

1. **Presentasjon (5–10 minutter):** Legg frem det forberedte temaet ditt
2. **Fagsamtale (5–10 minutter):** La «sensoren» stille spørsmål fra listen nedenfor

Spørsmål «sensoren» kan stille:
- «Kan du gi et eksempel fra en tekst du har lest?»
- «Hva er forskjellen mellom realisme og naturalisme?»
- «Hvordan kan vi vurdere om en kilde er pålitelig?»
- «Hva betyr 'show, don't tell'?»
- «Hvilke virkemidler brukte [forfatter X] i [verk Y]?»
- «Hva er sammenhengen mellom språkhistorie og identitet?»

Etter gjennomføringen:
a) Hva gikk bra?
b) Hva var vanskelig?
c) Hva vil du forbedre til neste gang?`,
        hints: [
          'Ta opp presentasjonen på video — det er nyttig å se seg selv',
          'Be «sensoren» om ærlig tilbakemelding',
        ],
        solution: 'Den beste forberedelsen til muntlig eksamen er å øve på å presentere og svare på spørsmål. Jo flere ganger du øver, jo tryggere blir du.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-2-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-8',
        number: '2.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Vurder en presentasjon.

Se for deg at du er sensor. En elev har nettopp presentert om realismen. Du legger merke til følgende:

- Eleven leste fra et fullskrevet manus hele tiden
- Innholdet var faglig korrekt med gode eksempler
- Eleven brukte ingen fagbegreper
- Avslutningen var: «Ja... det var det jeg hadde.»
- I fagsamtalen svarte eleven kort med «ja» og «nei»

a) Gi eleven tilbakemelding: Hva var bra, og hva bør forbedres?
b) Gi tre konkrete råd til eleven for neste gang.
c) Hva tror du eleven ville fått i karakter? Begrunn.`,
        hints: [
          'Bruk vurderingskriteriene fra starten av kapittelet',
          'Vær konkret — ikke bare si «du bør bli bedre», men forklar hvordan',
        ],
        solution: 'En god vurdering er konkret, balansert (både ros og forbedringsforslag), og gir praktiske råd eleven kan bruke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 1
// ============================================================================

export const NORSK_10_DEL1_CHAPTERS = [
  CHAPTER_NORSK_10_1_1,
  CHAPTER_NORSK_10_1_2,
  CHAPTER_NORSK_10_2_1,
  CHAPTER_NORSK_10_2_2,
];
