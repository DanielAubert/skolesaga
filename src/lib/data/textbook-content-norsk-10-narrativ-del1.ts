/**
 * Norsk 10 - Narrativ versjon DEL 1
 * Kapittel 1.1, 1.2, 2.1, 2.2
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1 NARRATIV: Litteraturhistorie og analyse
// ============================================================================

export const CHAPTER_NORSK_10_1_1_NARRATIV: TextbookChapter = {
  id: 'norsk-10-1-1-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '1.1',
  title: 'Litteraturhistorie og analyse',
  subtitle: 'Narrativ versjon',
  description:
    'Bli med på en reise gjennom norsk litteraturhistorie fra 1850 til 1940, der forfattere rystet samfunnet, brøt tabuer og skapte kunstverk som fremdeles berører oss i dag.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke tekster fra ulike litterære epoker',
    'sammenligne tekster fra ulike tider og kulturer og drøfte hvordan de er påvirket av sin samtid',
    'bruke fagspråk og argumentere saklig i diskusjoner om litteratur',
  ],
  linkedChapterId: 'norsk-10-1-1',
  content: [
    {
      id: 'norsk-10-1-1-n-intro',
      type: 'text',
      content: `## Forfatterne som sjokkerte Norge

Forestill deg at du lever i Kristiania i 1879. Kvinner har knapt noen rettigheter. Kirken har makt over folks privatliv, og det finnes strenge regler for hva som er sømmelig. Så skjer noe dramatisk: Henrik Ibsen gir ut skuespillet «Et dukkehjem», der hovedpersonen Nora forlater mann og barn fordi hun nekter å leve som en dukke lenger. Publikum raser. Skandale! Men historien var i gang, og norsk litteratur ville aldri bli den samme.

Dette er fortellingen om de store litterære epokene fra 1850 til 1940. En litterær epoke er rett og slett en tidsperiode der mange forfattere deler bestemte kjennetegn i stil, tema og verdenssyn. Epokene overlapper hverandre, og ingen forfatter «skifter stil» på en bestemt dato. Men mønstrene er tydelige, og de forteller oss noe viktig: Litteraturen speiler alltid samfunnet den ble skrevet i.

Vi skal gjennom fire epoker: realismen, naturalismen, nyromantikken og modernismen. Underveis skal du lære å analysere tekster med SMITT-modellen, et verktøy som hjelper deg med å se dypere enn bare handlingen. La oss begynne med forfatterne som bestemte seg for å vise Norge slik det virkelig var.`,
    },
    {
      id: 'norsk-10-1-1-n-section1',
      type: 'text',
      content: `## Fra romantikk til virkelighet

Realismen vokste frem rundt 1850, i en tid med store samfunnsendringer. Industrialiseringen forandret livene til millioner, og nye politiske ideer om demokrati og likestilling begynte å gro. Forfatterne hadde fått nok av romantikkens drømmerier. De ville vise virkeligheten slik den faktisk var, med all dens urettferdighet og hykleri.

Kjennetegnene på realismen er tydelige: samfunnskritikk, hverdagsrealisme der handlingen foregår i gjenkjennelige miljøer, typiske personer som representerer ulike samfunnsgrupper, objektivt språk og en tydelig vilje til å debattere kontroversielle tema. Ibsen, Bjørnson, Kielland og Lie ble kjent som «de fire store» og satte Norge på det europeiske litteraturkartet.

Men noen mente at realismen ikke gikk langt nok. Naturalismen, som blomstret fra rundt 1880 til 1900, tok virkeligheten enda mørkere. Påvirket av Darwins evolusjonsteori mente naturalistene at mennesket er styrt av arv og miljø, et syn som kalles determinisme. Amalie Skrams «Hellemyrsfolket» følger en familie gjennom generasjoner der alkoholisme og elendighet går i arv. Karakterene klarer ikke å bryte ut av mønsteret. Der realistene trodde på valg og endring, som Noras frigjøring i «Et dukkehjem», viste naturalistene mennesker fanget i sin skjebne.

Etter tiår med mørk virkelighet vendte nyromantikken seg innover mot følelser, drømmer og natur. Knut Hamsuns «Sult» fra 1890 er et vendepunkt: en navnløs mann vandrer i Kristiania og sulter, men romanen er ingen samfunnskritikk. Den er en reise inn i hovedpersonens sinn, med hallusinasjoner og irrasjonelle tanker. Så kom modernismen tidlig på 1900-tallet, med eksperimentell form, fragmentering og psykologisk dybde. Sigrid Undset, Tarjei Vesaas og Cora Sandel utforsket menneskets indre landskap i en verden rystet av verdenskrig og revolusjon.`,
    },
    {
      id: 'norsk-10-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på de litterære epokene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-1-1-n-quiz1-q0',
            task: 'Hva er det viktigste kjennetegnet på realismen?',
            options: [
              { id: 'a', text: 'Fokus på drømmer, følelser og det mystiske', isCorrect: false },
              { id: 'b', text: 'Forfatterne ville vise virkeligheten og kritisere samfunnsproblemer', isCorrect: true },
              { id: 'c', text: 'Eksperimentell form med brutt tidslinje', isCorrect: false },
              { id: 'd', text: 'Mennesket er fullstendig styrt av arv og miljø', isCorrect: false },
            ],
            solution:
              'Realismens forfattere ville skildre virkeligheten slik den var og sette søkelys på urettferdighet i samfunnet. De fire store, Ibsen, Bjørnson, Kielland og Lie, brukte litteraturen til å skape debatt.',
          },
          {
            id: 'norsk-10-1-1-n-quiz1-q1',
            task: 'Hva er determinisme, og hvilken epoke er det knyttet til?',
            options: [
              { id: 'a', text: 'Troen på fri vilje, knyttet til modernismen', isCorrect: false },
              { id: 'b', text: 'Fokus på naturen som speil for sjelen, knyttet til nyromantikken', isCorrect: false },
              { id: 'c', text: 'Ideen om at mennesket er styrt av arv og miljø, knyttet til naturalismen', isCorrect: true },
              { id: 'd', text: 'Ideen om fragmentert virkelighet, knyttet til realismen', isCorrect: false },
            ],
            solution:
              'Determinisme er ideen om at menneskets handlinger og skjebne er bestemt av arv og miljø, faktorer vi ikke kontrollerer. I Amalie Skrams «Hellemyrsfolket» ser vi dette tydelig: alkoholisme og fattigdom går i arv gjennom generasjoner.',
          },
          {
            id: 'norsk-10-1-1-n-quiz1-q2',
            task: 'Hamsuns «Sult» regnes som et vendepunkt i norsk litteratur. Hvilken epoke tilhører romanen?',
            options: [
              { id: 'a', text: 'Realismen', isCorrect: false },
              { id: 'b', text: 'Naturalismen', isCorrect: false },
              { id: 'c', text: 'Nyromantikken', isCorrect: true },
              { id: 'd', text: 'Modernismen', isCorrect: false },
            ],
            solution:
              '«Sult» tilhører nyromantikken fordi den fokuserer på det indre livet og subjektive opplevelser, ikke på samfunnskritikk. Hamsun ville utforske «det ubevisste sjeleliv» gjennom førstepersonfortellerens hallusinasjoner og stemningssvingninger.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-1-1-n-section2',
      type: 'text',
      content: `## Slik analyserer du en tekst

Nå som du kjenner epokene, trenger du et verktøy for å analysere tekstene. SMITT-modellen er din nøkkel. Den består av fem elementer: Sjanger og struktur handler om hva slags tekst det er og hvordan den er bygd opp. Motiv og handling dreier seg om hva som skjer på overflaten. Innhold og tema graver dypere: Hva handler teksten egentlig om? Tone og stemning beskriver hvordan teksten oppleves. Og teknikk og virkemidler handler om synsvinkel, språklige bilder, gjentakelser, kontraster og symboler.

La oss prøve et eksempel. I slutten av «Et dukkehjem» sier Nora: «Jeg har vært din dukkekone her, likesom jeg hjemme var papas dukkebarn.» Metaforen «dukkekone» sammenligner henne med et objekt uten egen vilje. Gjentakelsen av «dukke» i flere former forsterker budskapet. Og ironien er tydelig når ektemannen Helmer tilbyr å «oppdra» henne, uten å forstå at det er nettopp denne holdningen hun kritiserer.

Det viktigste å huske er at en god analyse kobler virkemidlene til budskapet. Det holder ikke å bare identifisere en metafor. Du må forklare hvorfor forfatteren bruker den og hva den betyr i sammenhengen. Ibsen bruker dukkemetaforen for å kritisere hele samfunnsstrukturen som gjør kvinner til objekter, ikke bare Helmers oppførsel.`,
    },
    {
      id: 'norsk-10-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på analyse og epoker:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-1-1-n-quiz2-q0',
            task: 'Hva står bokstavene i SMITT-modellen for?',
            options: [
              { id: 'a', text: 'Sjanger, Motiv, Innhold, Tone, Teknikk', isCorrect: true },
              { id: 'b', text: 'Struktur, Mening, Inspirasjon, Tematikk, Tradisjon', isCorrect: false },
              { id: 'c', text: 'Symbol, Metafor, Ironi, Tema, Tolkning', isCorrect: false },
              { id: 'd', text: 'Samfunn, Moral, Individ, Tid, Tekst', isCorrect: false },
            ],
            solution:
              'SMITT-modellen står for Sjanger og struktur, Motiv og handling, Innhold og tema, Tone og stemning, og Teknikk og virkemidler. Den gir deg en systematisk tilnærming til tekstanalyse.',
          },
          {
            id: 'norsk-10-1-1-n-quiz2-q1',
            task: 'Hvilken beskrivelse passer best til modernismen?',
            options: [
              { id: 'a', text: 'Forfatteren beskriver fattigdom objektivt for å skape debatt', isCorrect: false },
              { id: 'b', text: 'Forfatteren bruker naturen som speil for karakterens følelser', isCorrect: false },
              { id: 'c', text: 'Forfatteren eksperimenterer med form og viser en fragmentert virkelighet', isCorrect: true },
              { id: 'd', text: 'Forfatteren viser at karakterene er fullstendig styrt av arv og miljø', isCorrect: false },
            ],
            solution:
              'Modernismen kjennetegnes av eksperimentell form, fragmentering og psykologisk dybde. Verden opplevdes som kaotisk etter verdenskrig og revolusjon, og litteraturen reflekterte dette. Vesaas, Undset og Sandel er sentrale norske modernister.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Norsk litteraturhistorie fra 1850 til 1940 er en fortelling om forfattere som reagerte på sin samtid. Realismen ville vise virkeligheten og skape debatt, med Ibsen, Bjørnson, Kielland og Lie i spissen. Naturalismen gikk enda lenger og viste mennesker fanget av arv og miljø gjennom determinisme, med Amalie Skram som sentral forfatter. Nyromantikken vendte seg innover mot følelser og det mystiske, der Hamsuns «Sult» markerte et vendepunkt. Modernismen brøt med tradisjonell form og viste en fragmentert virkelighet.

Epokene er reaksjoner på hverandre, og forfatterne reflekterte sin samtid. SMITT-modellen, som dekker Sjanger, Motiv, Innhold, Tone og Teknikk, gir deg verktøyet du trenger for å analysere tekstene og koble virkemidler til budskap.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2 NARRATIV: Sakprosaanalyse og kildekritikk
// ============================================================================

export const CHAPTER_NORSK_10_1_2_NARRATIV: TextbookChapter = {
  id: 'norsk-10-1-2-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '1.2',
  title: 'Sakprosaanalyse og kildekritikk',
  subtitle: 'Narrativ versjon',
  description:
    'Lær å navigere i informasjonsjungelen med TONE-modellen, gjennomskue retoriske grep i sakprosatekster og vurdere kilder som en proff.',
  estimatedMinutes: 35,
  competenceGoals: [
    'vurdere teksters troverdighet og bruke kilder kritisk',
    'lese og analysere sakprosatekster og vurdere argumentasjonen',
    'bruke kilder på en etterrettelig måte og kunne kildehenvisning',
  ],
  linkedChapterId: 'norsk-10-1-2',
  content: [
    {
      id: 'norsk-10-1-2-n-intro',
      type: 'text',
      content: `## Hvordan vet du hva som er sant?

Du scroller gjennom feeden din og ser en overskrift: «Forskning viser at skjermtid ødelegger hjernen din!» Sekunder senere dukker en annen opp: «Ny studie: Skjermtid er ikke farlig likevel.» Begge påstår å ha forskning i ryggen. Hvem har rett? Og viktigere: Hvordan kan du finne ut av det?

Vi lever i en tid der alle kan publisere hva som helst. Nyhetsartikler, blogginnlegg, Instagram-poster, YouTube-videoer og TikTok-klipp. Noe er pålitelig. Noe er villedende. Og noe er ren løgn. Evnen til å lese kritisk er en av de viktigste ferdighetene du kan ha.

Sakprosa er tekster som handler om virkeligheten, i motsetning til skjønnlitteratur. Den deles i to hovedtyper. Funksjonell sakprosa har en praktisk funksjon, som nyhetsartikler, lærebøker, bruksanvisninger og lover. Litterær sakprosa har også en kunstnerisk dimensjon, som essay, kronikker, debattinnlegg og biografier. En viktig forskjell er at nyhetsartikler ideelt sett skal være objektive, mens kronikker og debattinnlegg er subjektive og meningsbærende. Men husk: selv «objektive» tekster har en vinkling.`,
    },
    {
      id: 'norsk-10-1-2-n-section1',
      type: 'text',
      content: `## TONE-modellen: Ditt verktøy for kildekritikk

TONE-modellen er et kraftig verktøy for å vurdere om en kilde er pålitelig. Bokstavene står for Troverdighet, Objektivitet, Nøyaktighet og Egnethet.

Troverdighet handler om avsenderen. Hvem har skrevet teksten? Er det en ekspert med relevant kompetanse, en journalist med redaksjonelt ansvar, eller en anonym blogger? Har avsenderen noe å tjene på budskapet? En influencer som promoterer et kosttilskudd med rabattkode, har en økonomisk interesse som svekker troverdigheten dramatisk.

Objektivitet handler om balanse. Presenteres flere sider av saken, eller er teksten ensidig? Bruker den sterkt følelsesladede ord som avslører en holdning? Er det skjulte motiver, som reklame forkledd som informasjon?

Nøyaktighet handler om fakta. Kan opplysningene bekreftes av andre kilder? Oppgis det kilder for påstandene? Er informasjonen oppdatert? En artikkel om teknologi fra 2010 er utdatert. Skrivefeil og slurvefeil kan tyde på lav kvalitetskontroll.

Egnethet handler om relevans for ditt formål. Er nivået passende? En forskningsartikkel kan være for avansert, en barnebok for enkel. Passer kilden til problemstillingen din, og finnes det bedre alternativer?

Retorikk spiller også en viktig rolle i sakprosatekster. Aristoteles beskrev tre appellformer for over 2000 år siden: etos (troverdighet), patos (følelser) og logos (fornuft og logikk). Retoriske virkemidler som retoriske spørsmål, gjentakelser, overdrivelser, kontraster og trikolon gjør kommunikasjonen mer slagkraftig. Når du analyserer sakprosa, bør du alltid spørre: Hvilke retoriske grep bruker avsenderen, og hvorfor?`,
    },
    {
      id: 'norsk-10-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kildekritikk og TONE-modellen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-1-2-n-quiz1-q0',
            task: 'En influencer poster en video: «Denne vitaminpillen forandret livet mitt! Koden MIN20 gir rabatt!» Hva er det største problemet med denne kilden ifølge TONE-modellen?',
            options: [
              { id: 'a', text: 'Nøyaktighet, fordi vitaminpiller ikke virker', isCorrect: false },
              { id: 'b', text: 'Objektivitet, fordi hun tjener penger på å anbefale produktet', isCorrect: true },
              { id: 'c', text: 'Troverdighet, fordi hun ikke er lege', isCorrect: false },
              { id: 'd', text: 'Egnethet, fordi Instagram ikke er et medium for helseinformasjon', isCorrect: false },
            ],
            solution:
              'Rabattkoden avslører at dette er sponset innhold. Influenceren har en økonomisk interesse i at du kjøper produktet, noe som gjør anbefalingen lite objektiv. Det er O-en i TONE som svikter mest her.',
          },
          {
            id: 'norsk-10-1-2-n-quiz1-q1',
            task: 'Hva står bokstavene i TONE-modellen for?',
            options: [
              { id: 'a', text: 'Troverdighet, Objektivitet, Nøyaktighet, Egnethet', isCorrect: true },
              { id: 'b', text: 'Tema, Oppbygging, Nyanser, Evaluering', isCorrect: false },
              { id: 'c', text: 'Tekst, Observasjon, Notering, Etterprøving', isCorrect: false },
              { id: 'd', text: 'Troverdighet, Originalitet, Nyhetsverdi, Effekt', isCorrect: false },
            ],
            solution:
              'TONE-modellen hjelper deg med å vurdere kilder systematisk gjennom Troverdighet (hvem er avsenderen?), Objektivitet (er teksten balansert?), Nøyaktighet (er fakta korrekte?) og Egnethet (passer kilden til formålet?).',
          },
          {
            id: 'norsk-10-1-2-n-quiz1-q2',
            task: 'Hvilken av disse er et eksempel på litterær sakprosa?',
            options: [
              { id: 'a', text: 'En bruksanvisning for en mobiltelefon', isCorrect: false },
              { id: 'b', text: 'Et essay om ungdoms forhold til sosiale medier', isCorrect: true },
              { id: 'c', text: 'En nyhetsmelding om et jordskjelv', isCorrect: false },
              { id: 'd', text: 'En forskrift om trafikkregler', isCorrect: false },
            ],
            solution:
              'Et essay er litterær sakprosa fordi det kombinerer faglig innhold med personlige refleksjoner og et bevisst språk. Bruksanvisninger, nyhetsmeldinger og forskrifter er funksjonell sakprosa med en praktisk funksjon.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-1-2-n-section2',
      type: 'text',
      content: `## Kildekritikk i praksis

La oss ta et konkret eksempel. Du skal skrive en artikkel om klimaendringer og har funnet tre kilder. Den første er en rapport fra FNs klimapanel, skrevet av internasjonale forskere. Troverdigheten er svært høy, objektiviteten er høy fordi rapporten er fagfellevurdert, nøyaktigheten er basert på tusenvis av studier, og den er utmerket som hovedkilde. Førsteklasses kilde.

Den andre kilden er et blogginnlegg med tittelen «Klimasvindelen avslørt!» fra en anonym blogg uten kildehenvisninger. Troverdigheten er svært lav, objektiviteten avsløres allerede i tittelen, nøyaktigheten er umulig å vurdere uten kilder, og den er ikke egnet som fagkilde. Denne kan du derimot bruke som eksempel på en dårlig kilde.

Den tredje er en VG-artikkel som oppsummerer en ny klimarapport, med intervjuer av norske forskere. Troverdigheten er god fordi VG har redaksjonelt ansvar, objektiviteten er middels fordi journalister velger vinkling, nøyaktigheten er god men bør sjekkes mot originalen, og den er brukbar som sekundærkilde.

Når du bruker kilder, husk å skrive kildehenvisninger. Det er ikke bare høflig, det er et krav. Du må vise hvor informasjonen din kommer fra, slik at leseren kan sjekke den selv. Og jo bedre du blir på kildekritikk, jo bedre rustet er du til å navigere i en verden der alle vil overbevise deg om noe.`,
    },
    {
      id: 'norsk-10-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kildekritikk i praksis:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-1-2-n-quiz2-q0',
            task: 'Du finner en avisartikkel og en anonym blogg om samme tema. Hva gjør avisartikkelen mer troverdig?',
            options: [
              { id: 'a', text: 'Avisen har flere lesere', isCorrect: false },
              { id: 'b', text: 'Avisen har redaksjonelt ansvar og navngitte journalister', isCorrect: true },
              { id: 'c', text: 'Aviser skriver alltid objektivt', isCorrect: false },
              { id: 'd', text: 'Avisartikler er alltid lengre enn blogginnlegg', isCorrect: false },
            ],
            solution:
              'Aviser har redaksjonelt ansvar og navngitte journalister som står bak innholdet. Anonyme blogger mangler denne ansvarligheten. Men husk at selv avisartikler bør vurderes kritisk for vinkling og objektivitet.',
          },
          {
            id: 'norsk-10-1-2-n-quiz2-q1',
            task: 'Hvilken appellform brukes i setningen «Ifølge tall fra SSB har klimagassutslippene økt med 3 % det siste året»?',
            options: [
              { id: 'a', text: 'Etos', isCorrect: false },
              { id: 'b', text: 'Patos', isCorrect: false },
              { id: 'c', text: 'Logos', isCorrect: true },
              { id: 'd', text: 'Alle tre', isCorrect: false },
            ],
            solution:
              'Setningen bruker fakta og statistikk fra en offentlig kilde (SSB), noe som er en klassisk logos-appell. Logos appellerer til fornuften gjennom logikk, tall og forskning.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Kritisk lesing er en av de viktigste ferdighetene i vår tid. Sakprosa deles i funksjonell og litterær sakprosa, og alle tekster kan vurderes med TONE-modellen: Troverdighet (hvem er avsenderen?), Objektivitet (er teksten balansert?), Nøyaktighet (stemmer fakta?) og Egnethet (passer kilden til ditt formål?).

De tre appellformene etos, patos og logos hjelper deg med å analysere hvordan sakprosatekster forsøker å overbevise deg. Retoriske virkemidler som retoriske spørsmål, gjentakelser og kontraster gjør kommunikasjonen mer slagkraftig. Husk alltid å skrive kildehenvisninger, og bruk TONE-modellen som sjekkliste før du stoler på en kilde.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.1 NARRATIV: Eksamensforberedelse - Skriftlig
// ============================================================================

export const CHAPTER_NORSK_10_2_1_NARRATIV: TextbookChapter = {
  id: 'norsk-10-2-1-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '2.1',
  title: 'Eksamensforberedelse - Skriftlig',
  subtitle: 'Narrativ versjon',
  description:
    'Forbered deg til skriftlig eksamen med konkrete tips for artikkel, essay og novelle. Lær å strukturere tekster som imponerer sensor.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive tekster med klar struktur og god argumentasjon tilpasset formål og mottaker',
    'mestre ulike sjangre: artikkel, essay og novelle',
    'bruke et variert og presist språk med korrekt rettskrivning og tegnsetting',
  ],
  linkedChapterId: 'norsk-10-2-1',
  content: [
    {
      id: 'norsk-10-2-1-n-intro',
      type: 'text',
      content: `## Eksamensdagen nærmer seg

Det er mai. Solen skinner utenfor vinduet, men du sitter i et klasserom med en tom skrivebok foran deg. Du har fem timer. Oppgavene ligger klare. Hjertet slår litt raskere enn vanlig. Det er skriftlig eksamen i norsk.

Denne situasjonen kommer du til å oppleve, og jo bedre forberedt du er, jo roligere blir du. Skriftlig eksamen i norsk handler ikke om å pugge fakta. Den handler om å vise at du kan skrive godt, tenke klart og bruke språket bevisst. Du får vanligvis velge mellom ulike oppgavetyper, og de tre viktigste sjangrene du må mestre er artikkel, essay og novelle.

Uansett sjanger gjelder noen grunnregler. En tekst trenger en klar struktur med innledning, hoveddel og avslutning. Språket skal være variert og presist, tilpasset sjangeren og formålet. Og du må vise at du kan tenke selvstendig, ikke bare gjengi det andre har skrevet. La oss gå gjennom hver sjanger og se hva som kjennetegner dem.`,
    },
    {
      id: 'norsk-10-2-1-n-section1',
      type: 'text',
      content: `## Artikkel, essay og novelle

Artikkelen er den mest strukturerte sjangeren. Den har en tydelig påstand eller problemstilling, argumenter bygd på fakta og kilder, og en logisk oppbygging. Innledningen skal fange oppmerksomheten og presentere temaet. Hoveddelen inneholder argumentene dine, gjerne med eksempler og kildehenvisninger. Avslutningen oppsummerer og peker fremover. En god artikkel bruker saklig språk og viser at du kan drøfte et tema fra flere sider.

Essayet er mer personlig og reflekterende. Ordet «essay» betyr «forsøk» på fransk, og det er nettopp det essayet er: et forsøk på å utforske et tema gjennom egne tanker og erfaringer. Du kan bruke et friere språk enn i artikkelen, gjerne med bilder og sammenligninger. Men det betyr ikke at essayet er ustrukturert. Det har en rød tråd, en tankeutvikling og en konklusjon. Et godt essay viser at du kan tenke dypt og uttrykke deg elegant.

Novellen er den kreative sjangeren. En novelle er en kort fortelling med få personer, avgrenset tid og rom, og ofte et vendepunkt eller en overraskende slutt. Virkemidler som frempek, tilbakeblikk, symbolikk og kontraster gjør novellen rikere. En god spenningskurve tar leseren med gjennom en utvikling fra introduksjon via komplikasjon og klimaks til en avslutning.

Nøkkelen til alle sjangrene er planlegging. Bruk de første 15 til 20 minuttene av eksamen på å lage en disposisjon. Skriv ned stikkord, hovedpunkter og en grov struktur. Det føles kanskje som bortkastet tid, men en plan gjør at teksten din får flyt og sammenheng, i stedet for å bli en rotete tankestrøm.`,
    },
    {
      id: 'norsk-10-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på de skriftlige sjangrene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-2-1-n-quiz1-q0',
            task: 'Hva betyr ordet «essay»?',
            options: [
              { id: 'a', text: '«Fortelling» på fransk', isCorrect: false },
              { id: 'b', text: '«Forsøk» på fransk', isCorrect: true },
              { id: 'c', text: '«Artikkel» på latin', isCorrect: false },
              { id: 'd', text: '«Analyse» på gresk', isCorrect: false },
            ],
            solution:
              'Essay betyr «forsøk» på fransk, og det er nettopp det sjangeren handler om: et forsøk på å utforske et tema gjennom egne tanker, refleksjoner og erfaringer, med et friere og mer personlig språk enn artikkelen.',
          },
          {
            id: 'norsk-10-2-1-n-quiz1-q1',
            task: 'Hvilken sjanger har tydeligst krav til saklig argumentasjon og kildehenvisninger?',
            options: [
              { id: 'a', text: 'Novellen', isCorrect: false },
              { id: 'b', text: 'Essayet', isCorrect: false },
              { id: 'c', text: 'Artikkelen', isCorrect: true },
              { id: 'd', text: 'Alle tre er like', isCorrect: false },
            ],
            solution:
              'Artikkelen er den mest strukturerte sjangeren og krever tydelig argumentasjon, fakta, kilder og logisk oppbygging. Essayet er mer personlig, og novellen er kreativ fiksjon.',
          },
          {
            id: 'norsk-10-2-1-n-quiz1-q2',
            task: 'Hva bør du bruke de første 15-20 minuttene av eksamen på?',
            options: [
              { id: 'a', text: 'Å begynne å skrive med en gang for å spare tid', isCorrect: false },
              { id: 'b', text: 'Å lese alle oppgavene flere ganger uten å skrive noe', isCorrect: false },
              { id: 'c', text: 'Å lage en disposisjon med stikkord og grov struktur', isCorrect: true },
              { id: 'd', text: 'Å velge den korteste oppgaven', isCorrect: false },
            ],
            solution:
              'En disposisjon gjør at teksten din får flyt og sammenheng. Bruk de første minuttene på å planlegge: skriv ned stikkord, hovedpunkter og en grov struktur. Det gir deg trygghet og retning gjennom resten av eksamen.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-2-1-n-section2',
      type: 'text',
      content: `## Praktiske eksamenstips

Her er noen konkrete tips som kan gjøre forskjellen mellom en middels og en sterk besvarelse. For det første: Les oppgaven nøye. Det høres opplagt ut, men mange elever svarer på noe annet enn det oppgaven faktisk spør om. Strek under nøkkelordene. Hvis oppgaven ber deg «drøfte», skal du vise flere sider av saken. Hvis den ber deg «analysere», skal du gå i dybden på virkemidler og budskap.

For det andre: Vis bredde i språket ditt. Varier setningslengden. Bruk ulike setningsåpninger. Bytt ut hverdagslige ord med mer presise alternativer der det passer. «Forfatteren viser» kan bli «forfatteren avdekker», «belyser» eller «iscenesetter».

For det tredje: Bruk eksempler. Enten du skriver artikkel, essay eller novelle, er konkrete eksempler det som gjør teksten din levende og overbevisende. I en artikkel bruker du kilder og statistikk. I et essay bruker du personlige erfaringer og refleksjoner. I en novelle bruker du sanselige beskrivelser og detaljer.

For det fjerde: Sett av tid til gjennomlesing. De siste 20 til 30 minuttene bør du lese gjennom teksten din og rette skrivefeil, forbedre formuleringer og sjekke at strukturen henger sammen. Mange eksamensbesvarelser taper poeng på slurv som kunne vært unngått med en god gjennomlesing.`,
    },
    {
      id: 'norsk-10-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på eksamenstips:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-2-1-n-quiz2-q0',
            task: 'Hvis oppgaven ber deg «drøfte», hva betyr det?',
            options: [
              { id: 'a', text: 'At du skal gjengi fakta uten egne meninger', isCorrect: false },
              { id: 'b', text: 'At du skal vise flere sider av saken og veie argumenter mot hverandre', isCorrect: true },
              { id: 'c', text: 'At du bare skal skrive om dine personlige erfaringer', isCorrect: false },
              { id: 'd', text: 'At du skal skrive en novelle om temaet', isCorrect: false },
            ],
            solution:
              'Å drøfte betyr å belyse en sak fra flere sider, veie argumenter for og mot, og komme til en begrunnet konklusjon. Det er viktig å vise at du forstår ulike perspektiver.',
          },
          {
            id: 'norsk-10-2-1-n-quiz2-q1',
            task: 'Hva kjennetegner en god novelle?',
            options: [
              { id: 'a', text: 'Mange personer, lang tidsspenn og detaljert bakgrunnsinformasjon', isCorrect: false },
              { id: 'b', text: 'Få personer, avgrenset tid og rom, og gjerne et vendepunkt', isCorrect: true },
              { id: 'c', text: 'Saklig språk med kildehenvisninger og statistikk', isCorrect: false },
              { id: 'd', text: 'Personlige refleksjoner og et friere språk', isCorrect: false },
            ],
            solution:
              'En novelle er en kort fortelling med få personer, avgrenset tid og rom, og ofte et vendepunkt eller en overraskende slutt. Virkemidler som frempek, symbolikk og kontraster gjør novellen rikere.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Skriftlig eksamen i norsk tester evnen din til å skrive godt og tenke klart. De tre viktigste sjangrene er artikkelen (strukturert, saklig, kildebasert), essayet (personlig, reflekterende, utforskende) og novellen (kreativ, konsentrert, med virkemidler).

Uansett sjanger gjelder noen grunnregler: Les oppgaven nøye, lag en disposisjon, vis bredde i språket, bruk konkrete eksempler og sett av tid til gjennomlesing. God forberedelse gir trygghet, og trygghet gir bedre tekster.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2 NARRATIV: Eksamensforberedelse - Muntlig
// ============================================================================

export const CHAPTER_NORSK_10_2_2_NARRATIV: TextbookChapter = {
  id: 'norsk-10-2-2-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '2.2',
  title: 'Eksamensforberedelse - Muntlig',
  subtitle: 'Narrativ versjon',
  description:
    'Forbered deg til muntlig eksamen med teknikker for presentasjon, fagsamtale og fremføring som gir deg selvtillit foran sensor.',
  estimatedMinutes: 35,
  competenceGoals: [
    'planlegge og holde muntlige presentasjoner med relevant innhold og klar struktur',
    'delta i fagsamtaler med saklig argumentasjon og aktiv lytting',
    'bruke kroppsspråk, stemmebruk og visuelle hjelpemidler bevisst',
  ],
  linkedChapterId: 'norsk-10-2-2',
  content: [
    {
      id: 'norsk-10-2-2-n-intro',
      type: 'text',
      content: `## Du har 48 timer

Telefonen ringer. Det er kontaktlæreren din. «Du er trukket ut til muntlig eksamen i norsk.» Plutselig har du 48 timer på deg til å forberede en presentasjon og gjøre deg klar for en fagsamtale med sensor. Hva gjør du?

Muntlig eksamen kan virke skummelt, men den er faktisk en gyllen mulighet. Til forskjell fra den skriftlige eksamen kan du her vise personligheten din, tilpasse deg underveis og demonstrere at du forstår faget i dybden. Eksamen består vanligvis av to deler: en forberedt presentasjon på 10 til 15 minutter, og en fagsamtale der sensor stiller spørsmål. Begge delene er viktige, og begge kan øves på.

Det første du bør vite er at muntlig eksamen ikke bare tester hva du kan. Den tester også hvordan du formidler det du kan. En elev som sier «realismen handlet om å vise virkeligheten» med monoton stemme og blikket i gulvet, gjør et svakere inntrykk enn en elev som ser publikum i øynene, varierer stemmen og bruker eksempler for å gjøre innholdet levende.`,
    },
    {
      id: 'norsk-10-2-2-n-section1',
      type: 'text',
      content: `## Presentasjonen: Strukturen som redder deg

En god presentasjon følger den samme tredelte strukturen som en god tekst: innledning, hoveddel og avslutning. Innledningen skal fange oppmerksomheten. Start med en krok, det kan være et spørsmål, en kort historie, et overraskende faktum eller et sitat. Presenter temaet ditt og gi sensor en oversikt over hva du skal snakke om.

Hoveddelen bør deles inn i to til fire hovedpunkter, ikke flere, for tilhørerne klarer ikke å huske mer enn det. Bruk tydelige overganger mellom punktene. Hvert punkt bør støttes med eksempler, og det er her du viser faglig dybde. Hvis temaet er litteraturhistorie, ikke bare list opp fakta om realismen. Vis at du forstår det ved å analysere et konkret tekstutdrag.

Avslutningen skal oppsummere de viktigste poengene og gjerne peke fremover: Hvorfor er dette relevant i dag? Hva har du lært? En sterk avslutning gir sensor et godt siste inntrykk.

Når det gjelder lysbilder, er regelen enkel: mindre er mer. Bruk stikkord og bilder, ikke fulle setninger. Ikke les fra lysbildene. De skal støtte det du sier, ikke erstatte det. Seks ord per punkt, seks punkter per lysbilde er en god tommelfingerregel. Og husk at sensor vurderer deg, ikke lysbildene dine.`,
    },
    {
      id: 'norsk-10-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på presentasjonsteknikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-2-2-n-quiz1-q0',
            task: 'Hvor mange hovedpunkter bør du ha i hoveddelen av en presentasjon?',
            options: [
              { id: 'a', text: 'Så mange som mulig for å vise bredde', isCorrect: false },
              { id: 'b', text: 'To til fire, fordi tilhørerne ikke klarer å huske mer', isCorrect: true },
              { id: 'c', text: 'Bare ett, for å holde det enkelt', isCorrect: false },
              { id: 'd', text: 'Minst åtte, for å fylle tiden', isCorrect: false },
            ],
            solution:
              'Forskning viser at tilhørere husker to til fire hovedpunkter best. Velg ut de viktigste poengene og gå i dybden på dem, fremfor å prøve å dekke alt overfladisk.',
          },
          {
            id: 'norsk-10-2-2-n-quiz1-q1',
            task: 'Hva er det beste rådet for lysbilder i en presentasjon?',
            options: [
              { id: 'a', text: 'Skriv hele manuset ditt på lysbildene så du ikke glemmer noe', isCorrect: false },
              { id: 'b', text: 'Bruk stikkord og bilder, og ikke les fra lysbildene', isCorrect: true },
              { id: 'c', text: 'Ha så mange lysbilder som mulig for å virke grundig', isCorrect: false },
              { id: 'd', text: 'Bruk bare tekst, aldri bilder', isCorrect: false },
            ],
            solution:
              'Lysbilder skal støtte det du sier, ikke erstatte det. Bruk stikkord og bilder. Sensor vurderer deg, ikke presentasjonen din. Seks ord per punkt og seks punkter per lysbilde er en god tommelfingerregel.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-2-2-n-section2',
      type: 'text',
      content: `## Fagsamtalen og fremføringen

Fagsamtalen er den delen av muntlig eksamen som mange gruer seg mest til, fordi du ikke kan kontrollere spørsmålene. Men du kan forberede deg. Sensor vil typisk stille spørsmål som går dypere enn det du dekket i presentasjonen, koble temaet ditt til andre deler av pensum, teste om du kan reflektere og drøfte selvstendig, og be deg vurdere noe kritisk.

Nøkkelen er aktiv lytting. Lytt nøye til spørsmålet, ta deg tid til å tenke før du svarer, og vær ærlig hvis det er noe du er usikker på. Det er bedre å si «Det er et godt spørsmål. Jeg tror det kan handle om...» enn å dikte opp et svar du er usikker på. Sensor respekterer refleksjon mer enn overfladisk selvsikkerhet.

Når det gjelder selve fremføringen, handler det om tre ting: stemme, kroppsspråk og blikkontakt. Varier tempoet og volumet i stemmen din. Snakk tydelig. Stå stødig med åpent kroppsspråk, ikke kryss armene eller stikk hendene i lommene. Se sensor og eventuelt medelever i øynene, ikke i gulvet eller på lysbildene.

Nervøsitet er normalt og faktisk nyttig, fordi den gjør deg skjerpet. Men den kan bli overveldende. Pust dypt og rolig før du begynner. Husk at sensor vil at du skal lykkes. Øv presentasjonen høyt flere ganger, gjerne foran familie eller venner. Jo mer du øver, jo tryggere blir du.`,
    },
    {
      id: 'norsk-10-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fagsamtale og fremføring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-2-2-n-quiz2-q0',
            task: 'Hva bør du gjøre hvis sensor stiller et spørsmål du er usikker på?',
            options: [
              { id: 'a', text: 'Gi et raskt svar så du virker selvsikker', isCorrect: false },
              { id: 'b', text: 'Si «det vet jeg ikke» og bli stille', isCorrect: false },
              { id: 'c', text: 'Ta deg tid til å tenke og reflektere høyt over mulige svar', isCorrect: true },
              { id: 'd', text: 'Skifte tema til noe du kan bedre', isCorrect: false },
            ],
            solution:
              'Sensor respekterer refleksjon. Det er bedre å tenke høyt og vise at du kan resonnere, enn å gi et overfladisk svar eller bare si at du ikke vet. Ærlighet kombinert med refleksjon gir godt inntrykk.',
          },
          {
            id: 'norsk-10-2-2-n-quiz2-q1',
            task: 'Hva er de tre viktigste aspektene ved fremføring?',
            options: [
              { id: 'a', text: 'Hastighet, volum og lysbilder', isCorrect: false },
              { id: 'b', text: 'Stemme, kroppsspråk og blikkontakt', isCorrect: true },
              { id: 'c', text: 'Kunnskap, humor og selvsikkerhet', isCorrect: false },
              { id: 'd', text: 'Manus, antrekk og plassering', isCorrect: false },
            ],
            solution:
              'Stemme (varier tempo og volum), kroppsspråk (stå stødig med åpent kroppsspråk) og blikkontakt (se publikum i øynene) er de tre viktigste aspektene som gjør en fremføring engasjerende.',
          },
          {
            id: 'norsk-10-2-2-n-quiz2-q2',
            task: 'Hva er den beste måten å håndtere nervøsitet på før en muntlig eksamen?',
            options: [
              { id: 'a', text: 'Unngå å tenke på eksamen til siste øyeblikk', isCorrect: false },
              { id: 'b', text: 'Øve presentasjonen høyt flere ganger, gjerne foran andre', isCorrect: true },
              { id: 'c', text: 'Pugge manuset ord for ord', isCorrect: false },
              { id: 'd', text: 'Lese om temaet uten å øve muntlig', isCorrect: false },
            ],
            solution:
              'Jo mer du øver muntlig, jo tryggere blir du. Øv foran familie eller venner, ta tid og juster. Å pugge ord for ord gjør deg rigid, men å øve på å snakke fritt rundt hovedpunktene gir deg fleksibilitet.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Muntlig eksamen i norsk består av en forberedt presentasjon og en fagsamtale. Presentasjonen følger en tredelt struktur: innledning med krok, hoveddel med to til fire hovedpunkter, og en sterk avslutning. Lysbilder skal støtte, ikke erstatte, det du sier.

Fagsamtalen krever aktiv lytting, ærlig refleksjon og evne til å tenke selvstendig. Fremføringen handler om stemme, kroppsspråk og blikkontakt. Nervøsitet er normalt, men du kan temme den med grundig øving. Husk: sensor vil at du skal lykkes.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_10_NARRATIV_DEL1_CHAPTERS = [
  CHAPTER_NORSK_10_1_1_NARRATIV,
  CHAPTER_NORSK_10_1_2_NARRATIV,
  CHAPTER_NORSK_10_2_1_NARRATIV,
  CHAPTER_NORSK_10_2_2_NARRATIV,
];
