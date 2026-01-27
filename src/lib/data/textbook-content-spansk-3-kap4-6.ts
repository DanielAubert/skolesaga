/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 3 - Kapittel 4-6 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 4: Literatura clásica y moderna (4.1-4.4)
 * - Kapittel 5: Cine y arte hispanohablante (5.1-5.4)
 * - Kapittel 6: Política y actualidad (6.1-6.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4: LITERATURA CLÁSICA Y MODERNA (KLASSISK OG MODERNE LITTERATUR)
// ============================================================================

// ----------------------------------------------------------------------------
// 4.1 El Quijote y Cervantes
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_3_4_1: TextbookChapter = {
  id: 'spansk-3-4-1',
  courseId: 'spansk-3',
  chapterNumber: '4.1',
  title: 'El Quijote y Cervantes',
  subtitle: 'Cervantes og Don Quijote',
  description: 'Utforsk Miguel de Cervantes og hans mesterverk Don Quijote.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne Cervantes og Don Quijote',
    'analysere klassisk litteratur',
  ],
  content: [
    {
      id: 'spansk-3-4-1-intro',
      type: 'text',
      content: `## Cervantes og Don Quijote

Miguel de Cervantes Saavedra (1547-1616) regnes som den viktigste forfatteren i spansk litteraturhistorie. Hans roman *Don Quijote de la Mancha* (1605/1615) anses ofte som den første moderne romanen i europeisk litteratur. Verket har hatt enorm innflytelse på verdenslitteraturen og er den mest oversatte boken etter Bibelen.

**I dette kapittelet lærer du:**
- Om Cervantes' liv og historiske kontekst
- Hovedtemaer og struktur i Don Quijote
- Å analysere utdrag fra verket
- Viktige litterære begreper knyttet til verket`,
    },
    {
      id: 'spansk-3-4-1-def-1',
      type: 'definition',
      title: 'La novela picaresca',
      content: `**La novela picaresca** (skjelmsromanen) er en sjanger fra det spanske gullalderen (el Siglo de Oro). Den forteller historien om en antihelt (el pícaro) fra lavere sosiale lag som bruker list og lureri for å overleve. Eksempler: *Lazarillo de Tormes* (1554) og *El Buscón* av Quevedo. Don Quijote bygger delvis på denne tradisjonen, men overskrider sjangeren ved å skape en idealistisk, ikke opportunistisk, hovedperson.`,
    },
    {
      id: 'spansk-3-4-1-text-1',
      type: 'text',
      content: `## La vida de Cervantes - Cervantes' liv

Miguel de Cervantes levde i en dramatisk tid i spansk historie:

| Hendelse | År | Betydning |
|----------|-----|-----------|
| Fødsel i Alcalá de Henares | 1547 | Vokste opp i en fattig adelsfamilie |
| Slaget ved Lepanto | 1571 | Skadet i venstre hånd ("el manco de Lepanto") |
| Fangenskap i Algerie | 1575-1580 | Fem år som slave, flere fluktforsøk |
| Don Quijote, del 1 | 1605 | Umiddelbar suksess |
| Don Quijote, del 2 | 1615 | Svar på Avellanedas falske fortsettelse |
| Død i Madrid | 1616 | Samme år som Shakespeare døde |

Cervantes' egne erfaringer - fattigdom, krig, fangenskap og litterær kamp - gjennomsyrer hele verket hans. Han kjente personlig til livets motsetninger mellom idealer og virkelighet.`,
    },
    {
      id: 'spansk-3-4-1-example-1',
      type: 'example',
      title: 'Åpningen av Don Quijote',
      problem: 'Les og analyser åpningssetningen av Don Quijote:',
      solution: `**"En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor."**

*I et sted i La Mancha, hvis navn jeg ikke ønsker å huske, levde for ikke lenge siden en lavadelsmann med lanse i stativet, gammelt skjold, mager hest og rask mynde.*

**Analyse:**
- **"no quiero acordarme"** - Fortelleren nekter å navngi stedet, noe som skaper mystikk og ironi
- **"hidalgo"** - En lavadelsmann, en person som har tittel men lite penger
- **Gjenstandene** (lanse, skjold, hest, mynde) tegner et bilde av forfall - alt er gammelt eller slitt
- Allerede i første setning ser vi kontrasten mellom adelig status og fattig virkelighet`,
    },
    {
      id: 'spansk-3-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-3-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om Cervantes og Don Quijote:',
        subTasks: [
          { label: 'a', task: 'I hvilket år ble Don Quijote del 1 utgitt?', solution: 'Don Quijote del 1 ble utgitt i 1605.' },
          { label: 'b', task: 'Hva var Cervantes\' kallenavn etter Lepanto?', solution: 'Han ble kalt "el manco de Lepanto" (den enarmede fra Lepanto) fordi han ble skadet i venstre hånd.' },
          { label: 'c', task: 'Hva er en "hidalgo"?', solution: 'En hidalgo er en lavadelsmann i Spania - en person med adelig tittel men ofte lite penger.' },
          { label: 'd', task: 'Hva er en picaresca?', solution: 'En picaresca (skjelmsroman) er en sjanger som forteller om en antihelt fra lavere sosiale lag som bruker list for å overleve.' },
        ],
        solution: 'a) 1605, b) El manco de Lepanto, c) Lavadelsmann med tittel men lite penger, d) Skjelmsroman om en antihelt.',
        hints: ['Se teksten om Cervantes\' liv', 'Lepanto var et slag i 1571'],
      },
    },
    {
      id: 'spansk-3-4-1-text-2',
      type: 'text',
      content: `## Tema og struktur i Don Quijote

Don Quijote handler om Alonso Quijano, en eldre mann som har lest så mange ridderromaner at han mister forstanden og tror han er en vandrende ridder. Han gir seg selv navnet **Don Quijote de la Mancha**, kaller sin magre hest **Rocinante**, og utnevner en bondepike, **Dulcinea del Toboso**, til sin dame.

**Sentrale temaer:**

| Tema | Forklaring |
|------|------------|
| **La locura y la cordura** | Galskap og fornuft - Hvem er egentlig gal? |
| **El idealismo vs. el realismo** | Idealer møter den harde virkeligheten |
| **La ficción y la realidad** | Grensen mellom fiksjon og virkelighet viskes ut |
| **La libertad** | Frihet som grunnleggende menneskelig verdi |
| **La identidad** | Hvem er vi egentlig? Kan vi velge vår identitet? |

**Hovedpersonene:**
- **Don Quijote** - Den idealistiske ridderen som ser verden gjennom fantasiens briller
- **Sancho Panza** - Den jordnære væpneren som gradvis påvirkes av Don Quijotes idealisme
- **Dulcinea del Toboso** - Den idealiserte kvinnen som egentlig er bondepiken Aldonza Lorenzo`,
    },
    {
      id: 'spansk-3-4-1-example-2',
      type: 'example',
      title: 'Los molinos de viento - Vindmøllene',
      problem: 'Analyser den berømte vindmøllesekvensen:',
      solution: `Don Quijote ser vindmøller og tror de er kjemper (gigantes). Sancho Panza prøver å fortelle ham sannheten, men Don Quijote angriper vindmøllene med lansen.

**"¿No ves allí, amigo Sancho, cómo se descubren treinta o pocos más desaforados gigantes?"**
*Ser du ikke der borte, venn Sancho, hvordan det viser seg tretti eller litt flere enorme kjemper?*

**"Mire vuestra merced que aquellos no son gigantes, sino molinos de viento."**
*Se Deres nåde, det der er ikke kjemper, men vindmøller.*

**Tolkning:**
- Denne scenen er blitt et universelt symbol: å "kjempe mot vindmøller" betyr å kjempe mot innbilte fiender
- Men den kan også leses positivt: Don Quijote representerer mot til å kjempe for idealer, selv når verden sier det er meningsløst
- **Metafor:** Vindmøllene kan representere den moderne verdens kalde mekanismer som knuser idealisme`,
    },
    {
      id: 'spansk-3-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-3-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser temaene i Don Quijote:',
        subTasks: [
          { label: 'a', task: 'Forklar kontrasten mellom Don Quijote og Sancho Panza.', solution: 'Don Quijote er idealist - han ser verden gjennom fantasiens briller og tror på ridderlighet og ære. Sancho Panza er realist - han er jordnær, praktisk og opptatt av mat og penger. Sammen utgjør de en komplementær helhet.' },
          { label: 'b', task: 'Hva betyr uttrykket "luchar contra molinos de viento"?', solution: 'Det betyr å kjempe mot innbilte fiender eller å bruke energi på noe meningsløst. Det stammer fra Don Quijotes angrep på vindmøller han trodde var kjemper.' },
          { label: 'c', task: 'Hvorfor er Don Quijote blitt et universelt symbol?', solution: 'Fordi han representerer den menneskelige dragningen mot idealer og drømmer, selv når virkeligheten er annerledes. Han symboliserer motet til å tro på noe større enn seg selv.' },
          { label: 'd', task: 'Hva menes med at Don Quijote er den "første moderne romanen"?', solution: 'Fordi den blander sjangre, leker med fortellergrep (metafiksjon), har psykologisk dybde i karakterene, og problematiserer forholdet mellom fiksjon og virkelighet - alt dette var nytt.' },
        ],
        solution: 'a) Idealist vs. realist som komplementerer hverandre. b) Kjempe mot innbilte fiender. c) Symboliserer drømmer og idealisme. d) Brøt med sjangre, brukte metafiksjon og psykologisk dybde.',
        hints: ['Tenk på hva Don Quijote representerer symbolsk', 'Hva betyr det å velge idealisme fremfor realisme?'],
      },
    },
    {
      id: 'spansk-3-4-1-tip-1',
      type: 'tip',
      title: 'El Siglo de Oro',
      content: `**El Siglo de Oro** (Gullalderen) i spansk kultur varte fra ca. 1500 til 1680. I denne perioden blomstret spansk litteratur, kunst og teater. Viktige forfattere inkluderer Cervantes, Lope de Vega, Calderón de la Barca, Quevedo og Góngora. Verker fra denne perioden utgjør grunnlaget for den spanske litterære kanon.`,
    },
    {
      id: 'spansk-3-4-1-text-3',
      type: 'text',
      content: `## Don Quijotes innflytelse på verdenslitteraturen

Don Quijote har inspirert utallige forfattere, kunstnere og tenkere gjennom fire hundre år:

**Litterær innflytelse:**
- **Gustave Flaubert** - *Madame Bovary* handler om en kvinne som, som Don Quijote, har lest for mange romaner og forveksler fiksjon med virkelighet
- **Fjodor Dostojevskij** - Kalte Don Quijote "det mest triste og det mest vakre verket" og lot seg inspirere til *Idioten*
- **Franz Kafka** - Skrev selv om Don Quijote og utforsket lignende temaer om individ vs. system
- **Jorge Luis Borges** - Forfatteren som kanskje best forstod Cervantes, skrev "Pierre Menard, autor del Quijote"

**Begreper som stammer fra Don Quijote:**
| Begrep | Betydning |
|--------|-----------|
| **Quijotesco** | Idealistisk, urealistisk, storslått i sine visjoner |
| **Luchar contra molinos** | Kjempe mot innbilte fiender |
| **Dulcinea** | En idealisert, uoppnåelig kjærlighet |
| **Sancho-perspektiv** | Et jordnært, praktisk synspunkt |`,
    },
    {
      id: 'spansk-3-4-1-example-3',
      type: 'example',
      title: 'Litterær analyse av Don Quijote',
      problem: 'Analyser følgende aspekt: Hvorfor lar Cervantes Don Quijote gjenvinne forstanden på dødsleiet?',
      solution: `I bokens siste kapittel gjenvinne Alonso Quijano forstanden og forkaster ridderlitteraturen:

**"Yo fui loco y ya soy cuerdo; fui Don Quijote de la Mancha y soy agora Alonso Quijano el Bueno."**
*Jeg var gal og nå er jeg fornuftig; jeg var Don Quijote de la Mancha og er nå Alonso Quijano den Gode.*

**Analyse:**
- Ironisk nok er det **Sancho** som nå prøver å overbevise ham om å fortsette eventyrene - rollene er byttet
- Cervantes viser at **identitet er flytende**: hvem var han egentlig?
- Gjenvinningen av fornuften er tragisk, ikke triumferende - uten sine drømmer dør han
- Leseren tvinges til å spørre: var "galskapen" kanskje det som ga livet mening?
- Denne ambivalensen gjør Don Quijote til et evig relevant verk`,
    },
    {
      id: 'spansk-3-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-3-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avansert analyse av Don Quijote:',
        subTasks: [
          { label: 'a', task: 'Sammenlign Don Quijote med en moderne karakter (film, bok, serie) som også kjemper for idealer mot en uforstående verden. Begrunn sammenligningen.', solution: 'Mange svar er mulige. F.eks. kan man sammenligne med Forrest Gump (naivitet og godhet i en kynisk verden), med Harry Potter (kampen mot ondskap som andre ikke ser), eller med Walter Mitty (dagdrømmeren som til slutt lever ut drømmene sine).' },
          { label: 'b', task: 'Diskuter om Don Quijote er gal eller om han har valgt en annen virkelighet. Hva sier det om frihet?', solution: 'Man kan argumentere for at Don Quijote har gjort et eksistensielt valg: han velger å leve i en verden av idealer fremfor en prosaisk virkelighet. Dette kan sees som ultimate frihet - å nekte å akseptere en verden uten mening. Sartre og eksistensialistene ville kanskje sett ham som autentisk.' },
          { label: 'c', task: 'Hva mener du Cervantes vil si med at Don Quijote dør når han blir "fornuftig" igjen?', solution: 'Cervantes antyder at idealene var det som ga Don Quijote livskraft. Uten drømmene har han ingenting å leve for. Det kan tolkes som en advarsel mot ren rasjonalisme, eller som at mennesket trenger mening og drømmer for å leve fullt.' },
        ],
        solution: 'a) Sammenlign med moderne idealistiske karakterer. b) Don Quijote som eksistensielt valg om frihet. c) Uten drømmer mister livet mening.',
        hints: ['Tenk på hva idealisme betyr i vår tid', 'Hva gir livet mening - fornuft eller drømmer?'],
      },
    },
    {
      id: 'spansk-3-4-1-note-1',
      type: 'note',
      title: 'Oppsummering',
      content: `**Cervantes og Don Quijote - det viktigste:**

- Cervantes (1547-1616) levde i el Siglo de Oro og kjente selv til krig, fangenskap og fattigdom
- Don Quijote (1605/1615) regnes som den første moderne romanen
- Hovedtemaer: idealisme vs. realisme, galskap vs. fornuft, fiksjon vs. virkelighet, frihet og identitet
- Don Quijote og Sancho Panza utgjør et komplementært par: idealisten og realisten
- Verket har gitt opphav til universelle begreper og symboler
- Don Quijotes død når han gjenvinne forstanden, stiller dype spørsmål om hva som gir livet mening`,
    },
    {
      id: 'spansk-3-4-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-3-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst på spansk (8-10 setninger) om Don Quijote:',
        subTasks: [
          { label: 'a', task: 'Presenter Cervantes og hans verk kort.', solution: 'Miguel de Cervantes nació en 1547 en Alcalá de Henares. Es el autor más importante de la literatura española. Escribió Don Quijote de la Mancha, que se publicó en dos partes en 1605 y 1615.' },
          { label: 'b', task: 'Beskriv hovedpersonene Don Quijote og Sancho Panza.', solution: 'Don Quijote es un hidalgo que pierde la razón leyendo novelas de caballerías. Sale a buscar aventuras con su escudero Sancho Panza, un campesino práctico y realista. Juntos forman una pareja complementaria.' },
          { label: 'c', task: 'Forklar hvorfor verket fortsatt er relevant.', solution: 'Don Quijote sigue siendo relevante porque trata temas universales: el conflicto entre ideales y realidad, la búsqueda de identidad y el valor de los sueños. Su lucha contra los molinos de viento simboliza la lucha por los ideales en un mundo que no los comprende.' },
        ],
        solution: 'Teksten bør dekke Cervantes\' liv, hovedpersonene og verkets relevans, skrevet i sammenhengende spansk med variert vokabular.',
        hints: ['Bruk fortid for historiske fakta', 'Bruk presens for å diskutere temaer', 'Nyttige ord: novela de caballerías, locura, idealismo, realismo'],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.2 García Lorca y la poesía
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_3_4_2: TextbookChapter = {
  id: 'spansk-3-4-2',
  courseId: 'spansk-3',
  chapterNumber: '4.2',
  title: 'García Lorca y la poesía',
  subtitle: 'Lorca og poesi',
  description: 'Utforsk Federico García Lorca og spansk poesi.',
  estimatedMinutes: 45,
  competenceGoals: [
    'analysere spansk poesi',
    'kjenne García Lorca',
  ],
  content: [
    {
      id: 'spansk-3-4-2-intro',
      type: 'text',
      content: `## Federico García Lorca og spansk poesi

Federico García Lorca (1898-1936) er Spanias mest kjente poet og dramatiker. Hans verk kombinerer folkekultur, lidenskapelige følelser og dype symboler. Han ble henrettet under den spanske borgerkrigen, og hans skjebne har gjort ham til et symbol på kunstnerisk frihet mot undertrykkelse.

**I dette kapittelet lærer du:**
- Om Lorcas liv og kunstneriske utvikling
- Generación del 27 og dens betydning
- Å analysere dikt av Lorca
- Poetiske virkemidler i spansk poesi`,
    },
    {
      id: 'spansk-3-4-2-def-1',
      type: 'definition',
      title: 'La Generación del 27',
      content: `**La Generación del 27** er en gruppe spanske poeter som fikk sitt navn fra 300-årsjubileet for poeten Góngoras død i 1927. Gruppen inkluderte Federico García Lorca, Rafael Alberti, Pedro Salinas, Luis Cernuda, Vicente Aleixandre og Jorge Guillén. De kombinerte avantgardistisk eksperimentering med respekt for den spanske poetiske tradisjonen, og mange av dem regnes blant de største poetene i spansk litteraturhistorie.`,
    },
    {
      id: 'spansk-3-4-2-text-1',
      type: 'text',
      content: `## Lorcas liv og tid

| Hendelse | År | Betydning |
|----------|-----|-----------|
| Fødsel i Fuente Vaqueros, Granada | 1898 | Oppvekst i Andalucía, preget av folkekultur |
| Residencia de Estudiantes, Madrid | 1919-1928 | Venner med Dalí og Buñuel |
| Romancero gitano publiseres | 1928 | Enorm suksess, gjør ham berømt |
| Opphold i New York | 1929-1930 | Inspirasjon til Poeta en Nueva York |
| La Barraca (teatergruppe) | 1931-1936 | Brakte teater til folket |
| Henrettet i Granada | 19. august 1936 | Drept av fascistene under borgerkrigen |

Lorca var en mangfoldig kunstner: poet, dramatiker, musiker og tegner. Han kjente det spanske folkets sjel og uttrykte den gjennom sin kunst.`,
    },
    {
      id: 'spansk-3-4-2-example-1',
      type: 'example',
      title: 'Romance sonámbulo (utdrag)',
      problem: 'Les og analyser de berømte åpningslinjene:',
      solution: `**"Verde que te quiero verde.
Verde viento. Verdes ramas.
El barco sobre la mar
y el caballo en la montaña."**

*Grønn som jeg elsker deg grønn.
Grønn vind. Grønne grener.
Båten på havet
og hesten i fjellet.*

**Analyse:**
- **Repetisjonen av "verde"** skaper en hypnotisk, drømmeaktig stemning
- **Grønt** symboliserer hos Lorca: liv, natur, men også død og tragikk (grønn hud = død i spansk folketradisjon)
- **Båten og hesten** representerer flukt og frihet, men også avstand og lengsel
- **"Te quiero"** gir fargen en personlig, kjærlig karakter - poeten elsker det grønne, men det grønne er uoppnåelig
- Diktet er en **romance** - en tradisjonell spansk ballade med åtte stavelser per linje`,
    },
    {
      id: 'spansk-3-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-3-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende spørsmål om Lorca:',
        subTasks: [
          { label: 'a', task: 'Når levde García Lorca?', solution: 'Federico García Lorca levde fra 1898 til 1936. Han ble bare 38 år gammel.' },
          { label: 'b', task: 'Hva var Generación del 27?', solution: 'Generación del 27 var en gruppe spanske poeter oppkalt etter 300-årsjubileet for Góngoras død i 1927. De kombinerte avantgarde med tradisjon.' },
          { label: 'c', task: 'Hva heter Lorcas mest berømte diktsamling?', solution: 'Romancero gitano (1928) er hans mest berømte diktsamling. Den handler om sigøynerkulturen i Andalucía.' },
          { label: 'd', task: 'Hvordan døde Lorca?', solution: 'Lorca ble henrettet av fascistiske styrker i Granada 19. august 1936, i begynnelsen av den spanske borgerkrigen.' },
        ],
        solution: 'a) 1898-1936. b) Poetgruppe fra 1927 med Lorca, Alberti m.fl. c) Romancero gitano (1928). d) Henrettet av fascister under borgerkrigen.',
        hints: ['Se tidslinjen for Lorcas liv', 'Borgerkrigen begynte i 1936'],
      },
    },
    {
      id: 'spansk-3-4-2-text-2',
      type: 'text',
      content: `## Lorcas poetiske univers

Lorcas diktning kjennetegnes av sterke symboler og dype følelser:

**Sentrale symboler hos Lorca:**

| Symbol | Betydning |
|--------|-----------|
| **La luna** (månen) | Død, skjebne, det overnaturlige |
| **El agua** (vannet) | Liv, seksualitet, renhet, men også død (drukne) |
| **La sangre** (blodet) | Lidenskap, slekt, vold, offer |
| **El caballo** (hesten) | Mannlighet, frihet, instinkt, men også dødsbud |
| **El verde** (grønt) | Liv og død samtidig, lengsel, det uoppnåelige |
| **El cuchillo** (kniven) | Vold, ære, skjebne |

**Poetiske virkemidler:**
- **Metáfora** (metafor): Overført betydning, f.eks. "la luna vino a la fragua" (månen kom til smia)
- **Personificación** (personifikasjon): Naturen gis menneskelige egenskaper
- **Sinestesia** (synestesi): Sanseblanding, f.eks. "verde viento" (grønn vind)
- **Anáfora** (anafor): Gjentakelse i begynnelsen av linjer
- **Símil** (sammenligning): Bruk av "como" (som)`,
    },
    {
      id: 'spansk-3-4-2-example-2',
      type: 'example',
      title: 'Bodas de sangre - Blodbryllup',
      problem: 'Analyser Lorcas dramatikk gjennom hans mest kjente skuespill:',
      solution: `**Bodas de sangre** (1933) er det første av Lorcas tre store tragedier (sammen med *Yerma* og *La casa de Bernarda Alba*).

**Handling:** En brud rømmer med sin tidligere elsker på bryllupsdagen. Brudgommen forfølger dem, og begge menn dreper hverandre.

**Sentrale temaer:**
- **El honor** (æren): Familieæren styrer alt
- **La pasión vs. la razón**: Lidenskap mot fornuft og plikt
- **El destino** (skjebnen): Karakterene er fanget i en uunngåelig tragedie
- **La tierra** (jorden): Tilhørighet til jorda og dens sykluser

**Dramatisk virkemiddel:**
Lorca blander prosa og poesi i teatret. I klimakset opptrer allegoriske figurer som **La Luna** (Månen) og **La Muerte** (Døden) som karakterer - dette gjør tragedien universell og mytisk.`,
    },
    {
      id: 'spansk-3-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-3-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser symboler og virkemidler hos Lorca:',
        subTasks: [
          { label: 'a', task: 'Forklar hva månen (la luna) symboliserer hos Lorca.', solution: 'Hos Lorca symboliserer månen død, skjebne og det overnaturlige. I Bodas de sangre opptrer månen som en karakter som leder mennene mot døden. Månen er kald, fjern og uunngåelig.' },
          { label: 'b', task: 'Hva er synestesi? Gi eksempel fra Lorca.', solution: 'Synestesi (sinestesia) er sanseblanding - å tillegge noe egenskaper fra en annen sans. Eksempel: "verde viento" (grønn vind) - fargen grønn (syn) tillegges vinden (følesans). Lorca bruker dette for å skape drømmeaktige bilder.' },
          { label: 'c', task: 'Hvorfor er Bodas de sangre en tragedie i klassisk forstand?', solution: 'Fordi karakterene er fanget i et uunngåelig skjebnemønster (destino). Bruden drives av lidenskap, brudgommen av ære. Tragedien er forutbestemt. Lorca bruker også et kor (som i gresk tragedie) og mytiske figurer som Månen og Døden.' },
          { label: 'd', task: 'Sammenlign Lorcas bruk av "sangre" (blod) i poesi og drama.', solution: 'I poesien symboliserer sangre lidenskap, slektsbånd og vold. I Bodas de sangre er blodet bokstavelig (drapene) og symbolsk (slektens ære, lidenskapens kraft). Blodet binder alt sammen - det er livgivende og dødelig.' },
        ],
        solution: 'a) Død og skjebne. b) Sanseblanding, f.eks. "verde viento". c) Uunngåelig skjebne og mytiske elementer. d) Blod som lidenskap og vold i begge sjangre.',
        hints: ['Tenk på hvordan symboler kan ha flere betydninger', 'Hva gjør en klassisk tragedie?'],
      },
    },
    {
      id: 'spansk-3-4-2-warning-1',
      type: 'warning',
      title: 'Historisk kontekst',
      content: `Lorcas henrettelse var ikke bare et kunstnerisk tap - det var et politisk mord. Lorca var åpent homofil i et konservativt samfunn, intellektuell, og sympatiserte med republikken. Under borgerkrigen ble tusenvis drept av begge sider. Lorcas grav er aldri funnet. Denne konteksten er viktig for å forstå hans verks dype engasjement for frihet og mot undertrykkelse.`,
    },
    {
      id: 'spansk-3-4-2-text-3',
      type: 'text',
      content: `## Diktanalyse - verktøy og metode

For å analysere et dikt av Lorca (eller andre spanskspråklige poeter) kan du bruke denne strukturen:

**1. Forma (form):**
- Antall strofer og linjer
- Versemål (octosílabo = 8 stavelser er vanlig i romance)
- Rim (rima asonante = vokalrim, rima consonante = fullrim)

**2. Contenido (innhold):**
- Tema: Hva handler diktet om?
- Yo lírico: Hvem snakker? (det lyriske jeget)
- Tono: Hvilken stemning skapes?

**3. Recursos literarios (litterære virkemidler):**
- Metáfora, símil, personificación, sinestesia, anáfora, hipérbole
- Hvordan bidrar virkemidlene til temaet?

**4. Contexto (kontekst):**
- Når ble diktet skrevet?
- Hva skjedde i Spania/verden?
- Hvordan påvirker konteksten tolkningen?

**5. Interpretación personal (personlig tolkning):**
- Hva betyr diktet for deg?
- Hvilke følelser vekker det?`,
    },
    {
      id: 'spansk-3-4-2-example-3',
      type: 'example',
      title: 'Analysere "La aurora" fra Poeta en Nueva York',
      problem: 'Bruk analysemetoden på dette utdraget:',
      solution: `**"La aurora de Nueva York tiene
cuatro columnas de cieno
y un huracán de negras palomas
que chapotean en las aguas podridas."**

*New Yorks daggry har
fire søyler av gjørme
og en orkan av svarte duer
som plasker i det råtne vannet.*

**Analyse:**
1. **Form:** Frie vers (verso libre), ingen fast rimstruktur - bryter med tradisjon
2. **Innhold:** New Yorks daggry beskrives som noe grufullt, ikke vakkert. Temaet er industrisamfunnets dehumanisering
3. **Virkemidler:**
   - **Metafor:** "cuatro columnas de cieno" - skyskraperne er søyler av gjørme
   - **Personifikasjon:** Daggry "har" søyler og orkaner
   - **Fargesymbolikk:** "negras palomas" - duene (fred) er svarte (død/fordervelse)
4. **Kontekst:** Skrevet under Lorcas New York-opphold (1929-1930), under børskrakket. Han opplevde rasisme, fattigdom og fremmedgjøring
5. **Tolkning:** Lorca ser det moderne storbysamfunnet som ødeleggende for menneskelig verdighet`,
    },
    {
      id: 'spansk-3-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-3-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avansert diktanalyse:',
        subTasks: [
          { label: 'a', task: 'Sammenlign Lorcas syn på naturen i Romancero gitano med hans syn på byen i Poeta en Nueva York.', solution: 'I Romancero gitano er naturen levende, mystisk og full av symboler (månen, oliven, hesten). Naturen er farlig men vakker. I Poeta en Nueva York er byen menneskeskapt natur - men råtten og ødeleggende. Kontrasten viser Lorcas dype tilknytning til det andalusiske landskapet og hans sjokk over industrisamfunnet.' },
          { label: 'b', task: 'Forklar hvorfor Lorca er viktig for moderne spanskspråklig poesi.', solution: 'Lorca kombinerte folkepoesiens tradisjon (romance, cante jondo) med avantgardistisk eksperimentering (surrealisme, frie vers). Han viste at det folkelige og det kunstneriske ikke er motsetninger. Hans universelle temaer (kjærlighet, død, frihet) og kraftige symbolspråk har inspirert poeter i hele den spansktalende verden.' },
          { label: 'c', task: 'Analyser hvordan fargen grønn brukes ulikt i "Romance sonámbulo" og i norsk litteratur.', solution: 'Hos Lorca er grønt tvetydig: det symboliserer liv (natur), men også død (grønn hud = lik i spansk folketradisjon) og det uoppnåelige. I norsk tradisjon er grønt mer entydig positivt: vår, vekst, håp. Forskjellen viser hvordan symboler er kulturelt betinget.' },
        ],
        solution: 'a) Natur vs. by - vakker mystikk vs. ødeleggende industrisamfunn. b) Forente folkelig tradisjon og avantgarde. c) Grønt: tvetydig hos Lorca, positivt i norsk tradisjon.',
        hints: ['Tenk på hva naturen betyr i ulike kulturer', 'Hva gjør Lorca unik sammenlignet med andre poeter?'],
      },
    },
    {
      id: 'spansk-3-4-2-note-1',
      type: 'note',
      title: 'Oppsummering',
      content: `**García Lorca og spansk poesi - det viktigste:**

- Lorca (1898-1936) var Spanias største poet og dramatiker
- Tilhørte Generación del 27 som forente tradisjon og avantgarde
- Sentrale symboler: månen (død), blod (lidenskap), grønt (liv og død), hesten (frihet)
- Viktige verk: Romancero gitano, Poeta en Nueva York, Bodas de sangre
- Viktige virkemidler: metafor, synestesi, personifikasjon, anafor
- Diktanalyse følger: form → innhold → virkemidler → kontekst → tolkning
- Lorcas henrettelse under borgerkrigen gjør hans verk til et symbol på kunstnerisk frihet`,
    },
    {
      id: 'spansk-3-4-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-3-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en diktanalyse på spansk:',
        subTasks: [
          { label: 'a', task: 'Velg ett av Lorcas symboler (la luna, la sangre, el verde, el caballo) og forklar dets betydning på spansk (3-4 setninger).', solution: 'La luna es uno de los símbolos más importantes de Lorca. Representa la muerte, el destino y lo sobrenatural. En "Bodas de sangre", la luna aparece como un personaje que guía a los hombres hacia la muerte. Es un símbolo frío, distante e inevitable.' },
          { label: 'b', task: 'Skriv 4-5 setninger på spansk om hvorfor Lorca er viktig for spansk litteratur.', solution: 'García Lorca es el poeta más importante de España. Perteneció a la Generación del 27 y combinó la tradición popular andaluza con técnicas vanguardistas. Sus obras de teatro, como Bodas de sangre, renovaron el teatro español. Su asesinato en 1936 lo convirtió en símbolo de la libertad artística contra la opresión.' },
          { label: 'c', task: 'Sammenlign kort Cervantes og Lorca som representanter for spansk litteratur (3-4 setninger på spansk).', solution: 'Cervantes y Lorca son los dos escritores más universales de España. Cervantes creó la novela moderna con Don Quijote en el siglo XVII, mientras que Lorca revolucionó la poesía y el teatro en el siglo XX. Ambos exploraron la tensión entre ideales y realidad, y ambos sufrieron personalmente por las injusticias de su tiempo.' },
        ],
        solution: 'Teksten bør vise forståelse for Lorcas symbolbruk, hans betydning og evne til å sammenligne med Cervantes.',
        hints: ['Bruk fagtermer som metáfora, símbolo, tragedia', 'Skriv i presens når du diskuterer litteratur'],
      },
    },
  ],
  exercises: [],
};
