/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 3 - Kapittel 4-6 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 4: LITERATURA CLÁSICA Y MODERNA (4.1-4.4)
 * - Kapittel 5: CINE Y ARTE HISPANOHABLANTE (5.1-5.4)
 * - Kapittel 6: POLÍTICA Y ACTUALIDAD (6.1-6.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4: LITERATURA CLÁSICA Y MODERNA
// ============================================================================

// 4.1 El Quijote y Cervantes
export const CHAPTER_SPANSK_3_4_1: TextbookChapter = {
  id: 'spansk-3-4-1',
  courseId: 'spansk-3',
  chapterNumber: '4.1',
  title: 'El Quijote y Cervantes',
  subtitle: 'Cervantes og Don Quijote',
  description: 'Fordyp deg i Don Quijote – den første moderne romanen og dens tematikk.',
  estimatedMinutes: 45,
  competenceGoals: ['analysere sentrale temaer i Don Quijote', 'drøfte forholdet mellom idealisme og realisme', 'forstå den historiske konteksten til Cervantes'],
  content: [
    { id: 'spansk-3-4-1-intro', type: 'text', content: `## El Quijote y Cervantes

Miguel de Cervantes (1547–1616) skrev Don Quijote i en tid da Spania var i overgang fra stormakt til nedgangsperiode. Verket er en parodi på datidens ridderlitteratur, men rommer langt dypere filosofiske lag.` },
    { id: 'spansk-3-4-1-def-1', type: 'definition', title: 'Don Quijote og idealisme vs. realisme', content: `**Don Quijote de la Mancha** (1605/1615) av Miguel de Cervantes regnes som den første moderne romanen i verdenslitteraturen.

**Sentrale temaer:**
- **Idealismo vs. realismo:** Don Quijote ser verden gjennom ridderlitteraturen; Sancho Panza representerer den jordnære realismen.
- **La locura y la cordura:** Grensen mellom galskap og fornuft utforskes gjennomgående.
- **La metaficción:** Romanen kommenterer seg selv og forholdet mellom fiksjon og virkelighet.
- **La libertad:** Frihet og individets rett til å velge sin egen vei.

**Historisk kontekst:** Skrevet under Spanias "Siglo de Oro" (den gylne tidsalder), en tid med kulturell blomstring men politisk nedgang.` },
    { id: 'spansk-3-4-1-text-1', type: 'text', content: `## Utdragsanalyse: Åpningen

*"En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor."*

**Analyse:**
- **"No quiero acordarme"** – Fortelleren velger bevisst å glemme. Hvem er denne fortelleren?
- **"Hidalgo"** – Lavadel, en mann av beskjeden rang som drømmer om storhet.
- **Detaljene** (lanse, gammelt skjold, mager hest) tegner et bilde av forfall og nostalgi.

Cervantes etablerer fra første setning spenningen mellom virkelighet og illusjon.` },
    { id: 'spansk-3-4-1-text-2', type: 'text', content: `## Vindmølleepisoden (Kap. VIII)

*"Mire vuestra merced —respondió Sancho— que aquellos que allí se parecen no son gigantes, sino molinos de viento."*

**Tolkning:**
- Don Quijote ser kjemper der Sancho ser vindmøller.
- Episoden er blitt et universelt symbol: "å kjempe mot vindmøller" = å kjempe for noe umulig.
- **Idealisme:** Don Quijote nekter å akseptere virkeligheten slik den er.
- **Spørsmål:** Er det galskap – eller mot – å insistere på sine idealer?` },
    { id: 'spansk-3-4-1-example-1', type: 'example', title: 'Eksempel: Temaanalyse', problem: `Hvordan representerer Don Quijote og Sancho Panza motsetningen mellom idealisme og realisme?`, solution: `Don Quijote ser virkeligheten gjennom ridderlitteraturens filter – vertshus blir slott, vindmøller blir kjemper. Sancho Panza ser tingene slik de er. Sammen representerer de **menneskets doble natur**: drømmeren og realisten.` },
    { id: 'spansk-3-4-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-4-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Grunnleggende forståelse av Don Quijote:', subTasks: [
        { label: 'a', task: 'Hvem skrev Don Quijote, og når ble verket utgitt?', solution: 'Miguel de Cervantes; del 1 i 1605, del 2 i 1615.', answer: 'Miguel de Cervantes; del 1 i 1605, del 2 i 1615.' },
        { label: 'b', task: 'Hva heter Don Quijotes væpner?', solution: 'Sancho Panza.', answer: 'Sancho Panza.' },
        { label: 'c', task: 'Hva ser Don Quijote når han ser vindmøller?', solution: 'Han ser kjemper (gigantes) som han vil kjempe mot.', answer: 'Han ser kjemper (gigantes) som han vil kjempe mot.' },
        { label: 'd', task: 'Hva betyr «Siglo de Oro»?', solution: 'Den gylne tidsalder – Spanias kulturelle blomstringsperiode (ca. 1500–1700).', answer: 'Den gylne tidsalder – Spanias kulturelle blomstringsperiode (ca. 1500–1700).' },
      ], solution: 'a) Miguel de Cervantes; del 1 i 1605, del 2 i 1615., b) Sancho Panza., c) Han ser kjemper (gigantes) som han vil kjempe mot., d) Den gylne tidsalder – Spanias kulturelle blomstringsperiode (ca. 1500–1700).', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-4-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match begrep med forklaring:', subTasks: [
        { label: 'a', task: 'Idealismo', solution: 'Å se verden slik man ønsker den skal være, ikke slik den er.', answer: 'Å se verden slik man ønsker den skal være, ikke slik den er.' },
        { label: 'b', task: 'Realismo', solution: 'Å se verden slik den faktisk er, uten illusjoner.', answer: 'Å se verden slik den faktisk er, uten illusjoner.' },
        { label: 'c', task: 'Metaficción', solution: 'Når en tekst kommenterer seg selv som fiksjon.', answer: 'Når en tekst kommenterer seg selv som fiksjon.' },
        { label: 'd', task: 'Hidalgo', solution: 'Lavadelsmann i det spanske samfunnet.', answer: 'Lavadelsmann i det spanske samfunnet.' },
      ], solution: 'a) Å se verden slik man ønsker den skal være, ikke slik den er., b) Å se verden slik den faktisk er, uten illusjoner., c) Når en tekst kommenterer seg selv som fiksjon., d) Lavadelsmann i det spanske samfunnet.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-1-example-2', type: 'example', title: 'Eksempel: Historisk kontekst', problem: `Hvorfor er det viktig å kjenne til Spanias Siglo de Oro for å forstå Don Quijote?`, solution: `Siglo de Oro var en tid med stor kulturell produksjon, men også politisk og økonomisk tilbakegang. Don Quijotes nostalgiske lengsel etter riddertidens idealer speiler Spanias egen lengsel etter fordums storhet.` },
    { id: 'spansk-3-4-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-4-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Analyser utdrag fra Don Quijote:', subTasks: [
        { label: 'a', task: 'Hva forteller åpningssetningen oss om fortelleren?', solution: 'Fortelleren er upålitelig – han sier han ikke vil huske stedet. Dette skaper avstand og ironi.', answer: 'Fortelleren er upålitelig – han sier han ikke vil huske stedet. Dette skaper avstand og ironi.' },
        { label: 'b', task: 'Hvorfor er vindmølleepisoden blitt et universelt symbol?', solution: 'Fordi den viser konflikten mellom ideal og virkelighet – å kjempe for noe andre mener er umulig.', answer: 'Fordi den viser konflikten mellom ideal og virkelighet – å kjempe for noe andre mener er umulig.' },
        { label: 'c', task: 'Hvordan bruker Cervantes humor i verket?', solution: 'Gjennom ironi, overdrivelse og kontrasten mellom Don Quijotes høytidelige språk og den banale virkeligheten.', answer: 'Gjennom ironi, overdrivelse og kontrasten mellom Don Quijotes høytidelige språk og den banale virkeligheten.' },
        { label: 'd', task: 'Hva mener Cervantes med å la Don Quijote lese for mange ridderromaner?', solution: 'Han kritiserer ureflektert lesning og viser hvordan fiksjon kan forvrenge virkelighetsoppfatningen.', answer: 'Han kritiserer ureflektert lesning og viser hvordan fiksjon kan forvrenge virkelighetsoppfatningen.' },
      ], solution: 'a) Fortelleren er upålitelig – han sier han ikke vil huske stedet. Dette skaper avstand og ironi., b) Fordi den viser konflikten mellom ideal og virkelighet – å kjempe for noe andre mener er umulig., c) Gjennom ironi, overdrivelse og kontrasten mellom Don Quijotes høytidelige språk og den banale virkeligheten., d) Han kritiserer ureflektert lesning og viser hvordan fiksjon kan forvrenge virkelighetsoppfatningen.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-4-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Drøftingsoppgaver om Don Quijote:', subTasks: [
        { label: 'a', task: 'Er Don Quijote gal, eller er han den eneste som tør å drømme? Begrunn.', solution: 'Svar bør drøfte at galskap og idealisme er to sider av samme sak. Don Quijote utfordrer konvensjoner og tør å leve etter sine idealer, selv om verden kaller ham gal.', answer: 'Svar bør drøfte at galskap og idealisme er to sider av samme sak. Don Quijote utfordrer konvensjoner og tør å leve etter sine idealer, selv om verden kaller ham gal.' },
        { label: 'b', task: 'Hvordan er Don Quijote relevant i dag?', solution: 'Temaene idealisme vs. realisme, individets kamp mot samfunnet, og forholdet mellom fiksjon og virkelighet er tidløse.', answer: 'Temaene idealisme vs. realisme, individets kamp mot samfunnet, og forholdet mellom fiksjon og virkelighet er tidløse.' },
        { label: 'c', task: 'Sammenlign Don Quijote og Sancho Panza som litterære karakterer.', solution: 'Don Quijote utvikler seg mot større realisme; Sancho utvikler seg mot større idealisme. De påvirker hverandre gjensidig – dette er «quijotización de Sancho» og «sanchificación de Don Quijote».', answer: 'Don Quijote utvikler seg mot større realisme; Sancho utvikler seg mot større idealisme. De påvirker hverandre gjensidig – dette er «quijotización de Sancho» og «sanchificación de Don Quijote».' },
        { label: 'd', task: 'Diskuter begrepet metafiksjon i Don Quijote.', solution: 'I del 2 vet karakterene at del 1 er skrevet. De diskuterer sin egen bok. Cervantes leker med grensene mellom fiksjon og virkelighet på en måte som var banebrytende.', answer: 'I del 2 vet karakterene at del 1 er skrevet. De diskuterer sin egen bok. Cervantes leker med grensene mellom fiksjon og virkelighet på en måte som var banebrytende.' },
      ], solution: 'a) Svar bør drøfte at galskap og idealisme er to sider av samme sak. Don Quijote utfordrer konvensjoner og tør å leve etter sine idealer, selv om verden kaller ham gal., b) Temaene idealisme vs. realisme, individets kamp mot samfunnet, og forholdet mellom fiksjon og virkelighet er tidløse., c) Don Quijote utvikler seg mot større realisme; Sancho utvikler seg mot større idealisme. De påvirker hverandre gjensidig – dette er «quijotización de Sancho» og «sanchificación de Don Quijote»., d) I del 2 vet karakterene at del 1 er skrevet. De diskuterer sin egen bok. Cervantes leker med grensene mellom fiksjon og virkelighet på en måte som var banebrytende.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-1-tip-1', type: 'tip', content: `**Lesetips:** Les gjerne Don Quijote i en modernisert spansk versjon. Fokuser på de mest kjente episodene (vindmøllene, Dulcinea, innvielsen som ridder) og prøv å identifisere temaene.` },
    { id: 'spansk-3-4-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Don Quijote**

- Cervantes (1547–1616), utgitt 1605/1615
- Første moderne roman – parodi på ridderlitteraturen
- Sentrale temaer: idealisme vs. realisme, galskap vs. fornuft, metafiksjon
- Historisk kontekst: Siglo de Oro – kulturell blomstring, politisk nedgang
- Universell relevans: å kjempe for sine idealer i en pragmatisk verden` },
  ],
  exercises: [],
};

// 4.2 García Lorca y la poesía
export const CHAPTER_SPANSK_3_4_2: TextbookChapter = {
  id: 'spansk-3-4-2',
  courseId: 'spansk-3',
  chapterNumber: '4.2',
  title: 'García Lorca y la poesía',
  subtitle: 'Lorca og poesi',
  description: 'Utforsk Federico García Lorcas poesi og teater – sentral stemme i Generación del 27.',
  estimatedMinutes: 45,
  competenceGoals: ['analysere Lorcas poesi', 'forstå Generación del 27', 'kjenne Lorcas viktigste verk og temaer'],
  content: [
    { id: 'spansk-3-4-2-intro', type: 'text', content: `## García Lorca y la poesía

Federico García Lorca er kanskje Spanias mest elskede poet. Hans verk blander folkekultur med avantgardistisk kunst, og hans tragiske død under borgerkrigen gjorde ham til et symbol på kunstnerisk frihet.` },
    { id: 'spansk-3-4-2-def-1', type: 'definition', title: 'Generación del 27 og García Lorca', content: `**Generación del 27** var en gruppe spanske poeter og intellektuelle som fornyet spansk litteratur i 1920–30-årene. Navnet kommer fra 300-årsjubileet for poeten Góngoras død.

**Medlemmer:** Federico García Lorca, Rafael Alberti, Luis Cernuda, Pedro Salinas, Jorge Guillén, Vicente Aleixandre (Nobelpris 1977).

**Federico García Lorca** (1898–1936):
- Født i Granada, Andalucía
- Poet, dramatiker og musiker
- Drept av nasjonalistiske styrker under den spanske borgerkrigen
- Temaer: kjærlighet, død, undertrykkelse, andalusisk kultur, frihet

**Viktige verk:**
| Verk | Sjanger | År |
|------|---------|----|
| Romancero gitano | Poesi | 1928 |
| Poeta en Nueva York | Poesi | 1940 (posthumt) |
| Bodas de sangre | Teater | 1932 |
| La casa de Bernarda Alba | Teater | 1936 |` },
    { id: 'spansk-3-4-2-text-1', type: 'text', content: `## Analyse: Romance sonámbulo

*"Verde que te quiero verde.
Verde viento. Verdes ramas.
El barco sobre la mar
y el caballo en la montaña."*

**Analyse:**
- **Fargesymbolikk:** Grønt symboliserer her lengsel, død og det uoppnåelige – ikke bare natur.
- **Gjentakelse:** "Verde que te quiero verde" gjentas som et refreng, nesten som en besverging.
- **Bilder:** Båten på havet og hesten i fjellet – frihet, men også ensomhet.
- **Romanceformen:** Tradisjonell spansk diktform med assonansrim i partallsvers.

Lorca bruker folkelige former fylt med surrealisme og dyp symbolikk.` },
    { id: 'spansk-3-4-2-text-2', type: 'text', content: `## La casa de Bernarda Alba (1936)

Lorcas siste teaterstykke handler om den tyranniske Bernarda Alba som holder sine fem døtre innesperret i åtte års sorg etter mannens død.

**Temaer:**
- **Undertrykkelse vs. frihet:** Bernarda representerer sosiale konvensjoner; døtrene lengter etter frihet.
- **Ære og skam:** Familiære er viktigere enn individets lykke.
- **Patriarkalsk samfunn:** Selv om bare kvinner er på scenen, styrer mannlige verdier.
- **Natur vs. sivilisasjon:** Døtrenes naturlige begjær undertrykkes av sosiale normer.

*"¡Silencio!"* – Bernardas første og siste ord. Taushet som kontroll.` },
    { id: 'spansk-3-4-2-example-1', type: 'example', title: 'Eksempel: Poesianalyse', problem: `Hva betyr "verde" i Romance sonámbulo?`, solution: `Grønt er flertydig: det symboliserer **lengsel, død, drøm og det uoppnåelige**. Det er ikke bare en farge, men en stemning – melankolsk og drømmeaktig.` },
    { id: 'spansk-3-4-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-4-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Grunnleggende om Lorca og Generación del 27:', subTasks: [
        { label: 'a', task: 'Hva var Generación del 27?', solution: 'En gruppe spanske poeter i 1920–30-årene som fornyet spansk litteratur.', answer: 'En gruppe spanske poeter i 1920–30-årene som fornyet spansk litteratur.' },
        { label: 'b', task: 'Hvor var García Lorca fra?', solution: 'Granada, Andalucía, Spania.', answer: 'Granada, Andalucía, Spania.' },
        { label: 'c', task: 'Hvordan døde Lorca?', solution: 'Han ble drept av nasjonalistiske styrker i starten av den spanske borgerkrigen (1936).', answer: 'Han ble drept av nasjonalistiske styrker i starten av den spanske borgerkrigen (1936).' },
        { label: 'd', task: 'Nevn to sjangre Lorca jobbet med.', solution: 'Poesi og teater (drama).', answer: 'Poesi og teater (drama).' },
      ], solution: 'a) En gruppe spanske poeter i 1920–30-årene som fornyet spansk litteratur., b) Granada, Andalucía, Spania., c) Han ble drept av nasjonalistiske styrker i starten av den spanske borgerkrigen (1936)., d) Poesi og teater (drama).', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-4-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match verk med sjanger:', subTasks: [
        { label: 'a', task: 'Romancero gitano', solution: 'Poesi (diktsamling, 1928)', answer: 'Poesi (diktsamling, 1928)' },
        { label: 'b', task: 'Bodas de sangre', solution: 'Teater (drama, 1932)', answer: 'Teater (drama, 1932)' },
        { label: 'c', task: 'La casa de Bernarda Alba', solution: 'Teater (drama, 1936)', answer: 'Teater (drama, 1936)' },
        { label: 'd', task: 'Poeta en Nueva York', solution: 'Poesi (diktsamling, posthumt 1940)', answer: 'Poesi (diktsamling, posthumt 1940)' },
      ], solution: 'a) Poesi (diktsamling, 1928), b) Teater (drama, 1932), c) Teater (drama, 1936), d) Poesi (diktsamling, posthumt 1940)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-2-example-2', type: 'example', title: 'Eksempel: Teateranalyse', problem: `Hvorfor er det viktig at bare kvinner opptrer i La casa de Bernarda Alba?`, solution: `Det understreker **det lukkede, kvelende rommet** kvinner lever i. Paradoksalt nok er mennenes fravær på scenen et symbol på at **mannlige verdier** likevel styrer alt.` },
    { id: 'spansk-3-4-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-4-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Analyser temaer hos Lorca:', subTasks: [
        { label: 'a', task: 'Hvilken rolle spiller farger i Lorcas poesi?', solution: 'Farger er symbolske: grønt = lengsel/død, svart = sorg, hvitt = renhet/undertrykkelse. De bærer dypere følelsesmessig mening.', answer: 'Farger er symbolske: grønt = lengsel/død, svart = sorg, hvitt = renhet/undertrykkelse. De bærer dypere følelsesmessig mening.' },
        { label: 'b', task: 'Hva representerer Bernarda Alba som karakter?', solution: 'Hun representerer sosiale konvensjoner, patriarkalsk kontroll, ære-kulturen og undertrykkelse av individets frihet.', answer: 'Hun representerer sosiale konvensjoner, patriarkalsk kontroll, ære-kulturen og undertrykkelse av individets frihet.' },
        { label: 'c', task: 'Hvorfor er andalusisk folkekultur viktig for Lorca?', solution: 'Han bruker folkelige former (romance, cante jondo) som bærer av universelle temaer – kjærlighet, død, skjebne.', answer: 'Han bruker folkelige former (romance, cante jondo) som bærer av universelle temaer – kjærlighet, død, skjebne.' },
        { label: 'd', task: 'Hva betyr «Silencio» som Bernardas første og siste ord?', solution: 'Det symboliserer at taushet er undertrykkelsens viktigste verktøy – å tie er å kontrollere.', answer: 'Det symboliserer at taushet er undertrykkelsens viktigste verktøy – å tie er å kontrollere.' },
      ], solution: 'a) Farger er symbolske: grønt = lengsel/død, svart = sorg, hvitt = renhet/undertrykkelse. De bærer dypere følelsesmessig mening., b) Hun representerer sosiale konvensjoner, patriarkalsk kontroll, ære-kulturen og undertrykkelse av individets frihet., c) Han bruker folkelige former (romance, cante jondo) som bærer av universelle temaer – kjærlighet, død, skjebne., d) Det symboliserer at taushet er undertrykkelsens viktigste verktøy – å tie er å kontrollere.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-4-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Drøftingsoppgaver om Lorca:', subTasks: [
        { label: 'a', task: 'Hvorfor er Lorca fortsatt relevant i dag?', solution: 'Hans temaer – frihet vs. undertrykkelse, individ vs. samfunn, lengsel og identitet – er universelle og tidløse.', answer: 'Hans temaer – frihet vs. undertrykkelse, individ vs. samfunn, lengsel og identitet – er universelle og tidløse.' },
        { label: 'b', task: 'Sammenlign Lorcas poesi med hans teater.', solution: 'Poesien er lyrisk og symbolsk; teateret er mer realistisk i formen men like symbolsk i temaene. Begge utforsker undertrykkelse og lengsel.', answer: 'Poesien er lyrisk og symbolsk; teateret er mer realistisk i formen men like symbolsk i temaene. Begge utforsker undertrykkelse og lengsel.' },
        { label: 'c', task: 'Hvordan påvirket borgerkrigen resepsjonen av Lorcas verk?', solution: 'Hans død gjorde ham til en martyr for kunstnerisk frihet. Under Franco-diktaturet var verkene forbudt, noe som ga dem ekstra symbolsk kraft.', answer: 'Hans død gjorde ham til en martyr for kunstnerisk frihet. Under Franco-diktaturet var verkene forbudt, noe som ga dem ekstra symbolsk kraft.' },
        { label: 'd', task: 'Analyser kontrasten mellom natur og sivilisasjon i La casa de Bernarda Alba.', solution: 'Naturen (varmen, hesten, vannet) representerer naturlig begjær og frihet. Huset representerer sosiale konvensjoner som undertrykker dette. Konflikten driver tragedien.', answer: 'Naturen (varmen, hesten, vannet) representerer naturlig begjær og frihet. Huset representerer sosiale konvensjoner som undertrykker dette. Konflikten driver tragedien.' },
      ], solution: 'a) Hans temaer – frihet vs. undertrykkelse, individ vs. samfunn, lengsel og identitet – er universelle og tidløse., b) Poesien er lyrisk og symbolsk; teateret er mer realistisk i formen men like symbolsk i temaene. Begge utforsker undertrykkelse og lengsel., c) Hans død gjorde ham til en martyr for kunstnerisk frihet. Under Franco-diktaturet var verkene forbudt, noe som ga dem ekstra symbolsk kraft., d) Naturen (varmen, hesten, vannet) representerer naturlig begjær og frihet. Huset representerer sosiale konvensjoner som undertrykker dette. Konflikten driver tragedien.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-2-tip-1', type: 'tip', content: `**Lesetips:** Les Romance sonámbulo høyt – Lorcas poesi er skrevet for å høres. Lytt gjerne til innspillinger av diktet.` },
    { id: 'spansk-3-4-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: García Lorca**

- Generación del 27: Fornyet spansk litteratur 1920–30-tallet
- Lorca (1898–1936): Poet og dramatiker fra Granada
- Verk: Romancero gitano, Bodas de sangre, La casa de Bernarda Alba
- Temaer: Kjærlighet, død, frihet, undertrykkelse, andalusisk kultur
- Symbolikk: Farger, natur, taushet
- Drept under borgerkrigen – symbol på kunstnerisk frihet` },
  ],
  exercises: [],
};

// 4.3 El realismo mágico
export const CHAPTER_SPANSK_3_4_3: TextbookChapter = {
  id: 'spansk-3-4-3',
  courseId: 'spansk-3',
  chapterNumber: '4.3',
  title: 'El realismo mágico',
  subtitle: 'Magisk realisme (Márquez, Allende)',
  description: 'Utforsk den magiske realismen – Latin-Amerikas viktigste litterære bidrag til verdenslitteraturen.',
  estimatedMinutes: 45,
  competenceGoals: ['definere og analysere magisk realisme', 'kjenne sentrale forfattere og verk', 'analysere utdrag fra Cien años de soledad'],
  content: [
    { id: 'spansk-3-4-3-intro', type: 'text', content: `## El realismo mágico

Magisk realisme oppsto i Latin-Amerika som et uttrykk for en virkelighet der myter, folketro og historiske traumer blandes med hverdagen. Det er ikke fantasy – det er en annen måte å oppfatte virkeligheten på.` },
    { id: 'spansk-3-4-3-def-1', type: 'definition', title: 'Magisk realisme (El realismo mágico)', content: `**Magisk realisme** er en litterær retning der overnaturlige eller fantastiske elementer presenteres som helt normale deler av hverdagsvirkeligheten.

**Kjennetegn:**
- Overnaturlige hendelser beskrives uten forundring
- Rik, detaljert prosa med lange setninger
- Mytisk tidsfølelse – syklisk, ikke lineær tid
- Blanding av drøm og virkelighet
- Sterk forankring i latinamerikansk historie og kultur

**Sentrale forfattere:**
| Forfatter | Land | Nøkkelverk |
|-----------|------|------------|
| Gabriel García Márquez | Colombia | Cien años de soledad (1967) |
| Isabel Allende | Chile | La casa de los espíritus (1982) |
| Juan Rulfo | Mexico | Pedro Páramo (1955) |
| Laura Esquivel | Mexico | Como agua para chocolate (1989) |
| Miguel Ángel Asturias | Guatemala | Hombres de maíz (1949) |` },
    { id: 'spansk-3-4-3-text-1', type: 'text', content: `## Analyse: Cien años de soledad – åpningen

*"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo."*

**Analyse:**
- **Tre tidslag i én setning:** Fremtid (henrettelsen), nåtid (erindringen), fortid (barndommen). Syklisk tid.
- **Is som vidunder:** Noe så hverdagslig som is presenteres som magi – perspektivet er avgjørende.
- **Skjebne:** Åpningen antyder en forutbestemt skjebne – alt henger sammen.
- **Familien Buendía:** Syv generasjoner i den fiktive byen Macondo, et mikrokosmos av Latin-Amerika.

Denne ene setningen rommer hele romanens essens: tid er syklisk, virkeligheten er flertydig, og det enkle kan være fantastisk.` },
    { id: 'spansk-3-4-3-text-2', type: 'text', content: `## Isabel Allende og La casa de los espíritus

Isabel Allendes debutroman (1982) følger tre generasjoner kvinner i Chile.

**Magisk-realistiske elementer:**
- Clara del Valle har telepatiske og telekinetiske evner
- Spøkelser kommuniserer med de levende
- Naturen reagerer på menneskelige følelser

**Historisk-politisk kontekst:**
- Romanen speiler Chiles politiske historie fra ca. 1900–1973
- Kuppet i 1973 (Pinochet) er sentralt i slutten
- Allende bruker magisk realisme for å bearbeide politisk traume

**Forskjell fra Márquez:** Allende er mer eksplisitt politisk og feministisk. Kvinneperspektivet er sentralt.` },
    { id: 'spansk-3-4-3-example-1', type: 'example', title: 'Eksempel: Definer magisk realisme', problem: `Hva skiller magisk realisme fra fantasy?`, solution: `I magisk realisme er det overnaturlige en **naturlig del av hverdagen** – ingen reagerer med forundring. I fantasy er det overnaturlige plassert i en annen verden med egne regler. Magisk realisme foregår i **vår** virkelighet.` },
    { id: 'spansk-3-4-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-4-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Grunnleggende om magisk realisme:', subTasks: [
        { label: 'a', task: 'Hva er magisk realisme?', solution: 'En litterær retning der overnaturlige elementer presenteres som normale deler av hverdagsvirkeligheten.', answer: 'En litterær retning der overnaturlige elementer presenteres som normale deler av hverdagsvirkeligheten.' },
        { label: 'b', task: 'Hvem skrev Cien años de soledad?', solution: 'Gabriel García Márquez (Colombia), utgitt i 1967.', answer: 'Gabriel García Márquez (Colombia), utgitt i 1967.' },
        { label: 'c', task: 'Hvem skrev La casa de los espíritus?', solution: 'Isabel Allende (Chile), utgitt i 1982.', answer: 'Isabel Allende (Chile), utgitt i 1982.' },
        { label: 'd', task: 'Nevn to kjennetegn ved magisk realisme.', solution: 'Overnaturlige hendelser beskrives uten forundring; mytisk/syklisk tidsfølelse.', answer: 'Overnaturlige hendelser beskrives uten forundring; mytisk/syklisk tidsfølelse.' },
      ], solution: 'a) En litterær retning der overnaturlige elementer presenteres som normale deler av hverdagsvirkeligheten., b) Gabriel García Márquez (Colombia), utgitt i 1967., c) Isabel Allende (Chile), utgitt i 1982., d) Overnaturlige hendelser beskrives uten forundring; mytisk/syklisk tidsfølelse.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-4-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match forfatter med verk og land:', subTasks: [
        { label: 'a', task: 'García Márquez – Colombia', solution: 'Cien años de soledad (1967)', answer: 'Cien años de soledad (1967)' },
        { label: 'b', task: 'Isabel Allende – Chile', solution: 'La casa de los espíritus (1982)', answer: 'La casa de los espíritus (1982)' },
        { label: 'c', task: 'Juan Rulfo – Mexico', solution: 'Pedro Páramo (1955)', answer: 'Pedro Páramo (1955)' },
        { label: 'd', task: 'Laura Esquivel – Mexico', solution: 'Como agua para chocolate (1989)', answer: 'Como agua para chocolate (1989)' },
      ], solution: 'a) Cien años de soledad (1967), b) La casa de los espíritus (1982), c) Pedro Páramo (1955), d) Como agua para chocolate (1989)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-3-example-2', type: 'example', title: 'Eksempel: Utdragsanalyse', problem: `Hvorfor begynner Cien años de soledad med en henrettelse?`, solution: `Det etablerer **syklisk tid** og **skjebne** som sentrale temaer. Ved å starte med slutten viser Márquez at alt henger sammen, og at erindring er viktigere enn kronologi.` },
    { id: 'spansk-3-4-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-4-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Analyser magisk-realistiske elementer:', subTasks: [
        { label: 'a', task: 'Hvorfor er «is» magisk i åpningen av Cien años de soledad?', solution: 'Fordi det ses gjennom øynene til noen som aldri har sett is – det hverdagslige blir fantastisk gjennom perspektiv.', answer: 'Fordi det ses gjennom øynene til noen som aldri har sett is – det hverdagslige blir fantastisk gjennom perspektiv.' },
        { label: 'b', task: 'Hva symboliserer byen Macondo?', solution: 'Macondo er et mikrokosmos av Latin-Amerika – dens grunnleggelse, vekst, korrupsjon og undergang speiler kontinentets historie.', answer: 'Macondo er et mikrokosmos av Latin-Amerika – dens grunnleggelse, vekst, korrupsjon og undergang speiler kontinentets historie.' },
        { label: 'c', task: 'Hvordan bruker Allende magisk realisme politisk?', solution: 'Hun bruker overnaturlige elementer (Claras evner) som kontrast til den brutale politiske virkeligheten (kuppet). Magien representerer håp og motstand.', answer: 'Hun bruker overnaturlige elementer (Claras evner) som kontrast til den brutale politiske virkeligheten (kuppet). Magien representerer håp og motstand.' },
        { label: 'd', task: 'Hva betyr syklisk tid i magisk realisme?', solution: 'Historien gjentar seg – navnene gjentas, skjebnene gjentas. Fortid, nåtid og fremtid fletter seg sammen.', answer: 'Historien gjentar seg – navnene gjentas, skjebnene gjentas. Fortid, nåtid og fremtid fletter seg sammen.' },
      ], solution: 'a) Fordi det ses gjennom øynene til noen som aldri har sett is – det hverdagslige blir fantastisk gjennom perspektiv., b) Macondo er et mikrokosmos av Latin-Amerika – dens grunnleggelse, vekst, korrupsjon og undergang speiler kontinentets historie., c) Hun bruker overnaturlige elementer (Claras evner) som kontrast til den brutale politiske virkeligheten (kuppet). Magien representerer håp og motstand., d) Historien gjentar seg – navnene gjentas, skjebnene gjentas. Fortid, nåtid og fremtid fletter seg sammen.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-4-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Drøftingsoppgaver om magisk realisme:', subTasks: [
        { label: 'a', task: 'Hvorfor oppsto magisk realisme nettopp i Latin-Amerika?', solution: 'Latin-Amerikas virkelighet – blandingen av urfolksmyter, kolonial historie, politisk vold og naturens overveldende kraft – gjør at det «magiske» allerede er del av opplevd virkelighet.', answer: 'Latin-Amerikas virkelighet – blandingen av urfolksmyter, kolonial historie, politisk vold og naturens overveldende kraft – gjør at det «magiske» allerede er del av opplevd virkelighet.' },
        { label: 'b', task: 'Sammenlign García Márquez og Allende.', solution: 'Márquez er mer mytisk og syklisk; Allende er mer politisk og feministisk. Begge bruker magisk realisme for å bearbeide latinamerikansk historie, men med ulike perspektiver.', answer: 'Márquez er mer mytisk og syklisk; Allende er mer politisk og feministisk. Begge bruker magisk realisme for å bearbeide latinamerikansk historie, men med ulike perspektiver.' },
        { label: 'c', task: 'Er magisk realisme eksotisering av Latin-Amerika? Diskuter.', solution: 'Kritikere mener det kan redusere Latin-Amerika til det «eksotiske». Forsvarere hevder det er en autentisk måte å uttrykke en virkelighet som ikke passer inn i europeisk rasjonalisme.', answer: 'Kritikere mener det kan redusere Latin-Amerika til det «eksotiske». Forsvarere hevder det er en autentisk måte å uttrykke en virkelighet som ikke passer inn i europeisk rasjonalisme.' },
        { label: 'd', task: 'Analyser de tre tidslagene i åpningssetningen av Cien años de soledad.', solution: 'Fremtiden (henrettelsen), nåtiden (erindringen) og fortiden (barndommen/isen) eksisterer simultant. Dette speiler romanens syn på tid som syklisk, ikke lineær – alt har skjedd før og vil skje igjen.', answer: 'Fremtiden (henrettelsen), nåtiden (erindringen) og fortiden (barndommen/isen) eksisterer simultant. Dette speiler romanens syn på tid som syklisk, ikke lineær – alt har skjedd før og vil skje igjen.' },
      ], solution: 'a) Latin-Amerikas virkelighet – blandingen av urfolksmyter, kolonial historie, politisk vold og naturens overveldende kraft – gjør at det «magiske» allerede er del av opplevd virkelighet., b) Márquez er mer mytisk og syklisk; Allende er mer politisk og feministisk. Begge bruker magisk realisme for å bearbeide latinamerikansk historie, men med ulike perspektiver., c) Kritikere mener det kan redusere Latin-Amerika til det «eksotiske». Forsvarere hevder det er en autentisk måte å uttrykke en virkelighet som ikke passer inn i europeisk rasjonalisme., d) Fremtiden (henrettelsen), nåtiden (erindringen) og fortiden (barndommen/isen) eksisterer simultant. Dette speiler romanens syn på tid som syklisk, ikke lineær – alt har skjedd før og vil skje igjen.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-3-tip-1', type: 'tip', content: `**Lesetips:** Begynn med korte noveller av García Márquez (f.eks. «Un señor muy viejo con unas alas enormes») før du tar fatt på Cien años de soledad.` },
    { id: 'spansk-3-4-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Magisk realisme**

- Overnaturlig + hverdagslig = magisk realisme
- Kjennetegn: syklisk tid, rik prosa, ingen forundring over det magiske
- García Márquez: Cien años de soledad (1967) – familien Buendía i Macondo
- Allende: La casa de los espíritus (1982) – tre generasjoner kvinner i Chile
- Latin-Amerikas viktigste bidrag til verdenslitteraturen` },
  ],
  exercises: [],
};

// 4.4 Análisis literario avanzado
export const CHAPTER_SPANSK_3_4_4: TextbookChapter = {
  id: 'spansk-3-4-4',
  courseId: 'spansk-3',
  chapterNumber: '4.4',
  title: 'Análisis literario avanzado',
  subtitle: 'Avansert litterær analyse',
  description: 'Lær avanserte analysebegreper og skriv litterære essays på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke avanserte analysebegreper', 'identifisere intertekstualitet og symbolikk', 'skrive litterære essays'],
  content: [
    { id: 'spansk-3-4-4-intro', type: 'text', content: `## Análisis literario avanzado

For å skrive gode litterære analyser på avansert nivå trenger du et rikt begrepsapparat og evnen til å bygge argumenter med tekstbelegg.` },
    { id: 'spansk-3-4-4-def-1', type: 'definition', title: 'Avanserte analysebegreper', content: `**Avanserte begreper for litterær analyse:**

| Begrep | Spansk | Forklaring |
|--------|--------|------------|
| Intertekstualitet | La intertextualidad | Referanser til andre tekster |
| Symbolikk | El simbolismo | Bruk av symboler for dypere mening |
| Fortellerstemme | La voz narrativa | Hvem forteller, og hvordan |
| Narrativ struktur | La estructura narrativa | Hvordan historien er bygd opp |
| Metafiksjon | La metaficción | Tekst som kommenterer seg selv |
| Allegori | La alegoría | Fortelling med skjult, overført mening |
| Ironi | La ironía | Motsetning mellom det sagte og det mente |
| Ambiguitet | La ambigüedad | Flertydighet, åpenhet for tolkning |` },
    { id: 'spansk-3-4-4-text-1', type: 'text', content: `## Å skrive et litterært essay

**Struktur:**
1. **Introducción:** Presenter tekst, forfatter, kontekst. Formuler en tesis (påstand).
2. **Desarrollo (hoveddel):**
   - Argument 1 + tekstbelegg
   - Argument 2 + tekstbelegg
   - Argument 3 + tekstbelegg
3. **Conclusión:** Oppsummer, vurder, åpne for videre refleksjon.

**Nyttige fraser:**
- *En este ensayo analizaré...* (I dette essayet vil jeg analysere...)
- *El autor emplea el recurso de...* (Forfatteren benytter virkemiddelet...)
- *Esto se puede interpretar como...* (Dette kan tolkes som...)
- *A modo de conclusión...* (Avslutningsvis...)` },
    { id: 'spansk-3-4-4-text-2', type: 'text', content: `## Intertekstualitet i praksis

**Definisjon:** Intertekstualitet er når en tekst refererer til, siterer eller er i dialog med andre tekster.

**Eksempler:**
- Allendes *La casa de los espíritus* er i dialog med Márquez' *Cien años de soledad* (familiesaga, magisk realisme).
- Lorcas *Bodas de sangre* henter fra andalusisk folkediktning.
- Cervantes' *Don Quijote* parodierer ridderromaner.

**Å identifisere intertekstualitet:**
- Gjenkjenner du referanser til andre verk?
- Bruker forfatteren kjente motiver eller strukturer?
- Er det en dialog med en litterær tradisjon?` },
    { id: 'spansk-3-4-4-example-1', type: 'example', title: 'Eksempel: Intertekstualitet', problem: `Finn et eksempel på intertekstualitet mellom Allende og Márquez.`, solution: `Begge skriver familiesagaer med magisk realisme. Allendes *La casa de los espíritus* kan leses som et **svar** på *Cien años de soledad* – fra et feministisk og eksplisitt politisk perspektiv.` },
    { id: 'spansk-3-4-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-4-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match analysebegrep med definisjon:', subTasks: [
        { label: 'a', task: 'Intertextualidad', solution: 'Referanser til og dialog med andre tekster.', answer: 'Referanser til og dialog med andre tekster.' },
        { label: 'b', task: 'Simbolismo', solution: 'Bruk av symboler for å uttrykke dypere mening.', answer: 'Bruk av symboler for å uttrykke dypere mening.' },
        { label: 'c', task: 'Voz narrativa', solution: 'Hvem som forteller historien og hvordan.', answer: 'Hvem som forteller historien og hvordan.' },
        { label: 'd', task: 'Metaficción', solution: 'Når teksten kommenterer seg selv som fiksjon.', answer: 'Når teksten kommenterer seg selv som fiksjon.' },
      ], solution: 'a) Referanser til og dialog med andre tekster., b) Bruk av symboler for å uttrykke dypere mening., c) Hvem som forteller historien og hvordan., d) Når teksten kommenterer seg selv som fiksjon.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-4-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Identifiser analysebegrepet:', subTasks: [
        { label: 'a', task: 'Don Quijote vet i del 2 at del 1 er skrevet om ham.', solution: 'Metaficción (metafiksjon)', answer: 'Metaficción (metafiksjon)' },
        { label: 'b', task: 'Grønnfargen i Lorcas dikt symboliserer lengsel og død.', solution: 'Simbolismo (symbolikk)', answer: 'Simbolismo (symbolikk)' },
        { label: 'c', task: 'Allende skriver en familiesaga inspirert av Márquez.', solution: 'Intertextualidad (intertekstualitet)', answer: 'Intertextualidad (intertekstualitet)' },
        { label: 'd', task: 'Åpningen av Cien años de soledad kan tolkes på flere måter.', solution: 'Ambigüedad (ambiguitet/flertydighet)', answer: 'Ambigüedad (ambiguitet/flertydighet)' },
      ], solution: 'a) Metaficción (metafiksjon), b) Simbolismo (symbolikk), c) Intertextualidad (intertekstualitet), d) Ambigüedad (ambiguitet/flertydighet)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-4-example-2', type: 'example', title: 'Eksempel: Essay-skriving', problem: `Hvordan formulerer du en tesis for et litterært essay?`, solution: `En tesis er en klar påstand du vil argumentere for. Eksempel: *"En Cien años de soledad, García Márquez utiliza el tiempo cíclico como metáfora de la historia latinoamericana."*` },
    { id: 'spansk-3-4-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-4-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv analysesetninger med avanserte begreper:', subTasks: [
        { label: 'a', task: 'Bruk «intertextualidad» i en analyse av Allende.', solution: 'La intertextualidad entre La casa de los espíritus y Cien años de soledad se manifiesta en la estructura de saga familiar con elementos mágico-realistas.', answer: 'La intertextualidad entre La casa de los espíritus y Cien años de soledad se manifiesta en la estructura de saga familiar con elementos mágico-realistas.' },
        { label: 'b', task: 'Bruk «simbolismo» i en analyse av Lorca.', solution: 'El simbolismo del color verde en el Romance sonámbulo trasciende la descripción física para representar el deseo inalcanzable.', answer: 'El simbolismo del color verde en el Romance sonámbulo trasciende la descripción física para representar el deseo inalcanzable.' },
        { label: 'c', task: 'Formuler en tesis om Don Quijote.', solution: 'En Don Quijote, Cervantes cuestiona los límites entre ficción y realidad a través de la metaficción y la ironía.', answer: 'En Don Quijote, Cervantes cuestiona los límites entre ficción y realidad a través de la metaficción y la ironía.' },
        { label: 'd', task: 'Skriv en avslutning for et essay om magisk realisme.', solution: 'A modo de conclusión, el realismo mágico no es simplemente una técnica literaria, sino una forma de expresar una realidad que no cabe en los moldes del racionalismo europeo.', answer: 'A modo de conclusión, el realismo mágico no es simplemente una técnica literaria, sino una forma de expresar una realidad que no cabe en los moldes del racionalismo europeo.' },
      ], solution: 'a) La intertextualidad entre La casa de los espíritus y Cien años de soledad se manifiesta en la estructura de saga familiar con elementos mágico-realistas., b) El simbolismo del color verde en el Romance sonámbulo trasciende la descripción física para representar el deseo inalcanzable., c) En Don Quijote, Cervantes cuestiona los límites entre ficción y realidad a través de la metaficción y la ironía., d) A modo de conclusión, el realismo mágico no es simplemente una técnica literaria, sino una forma de expresar una realidad que no cabe en los moldes del racionalismo europeo.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-4-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv korte litterære analyser (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Analyser fortellerstemmen i Cien años de soledad.', solution: 'El narrador de Cien años de soledad es omnisciente y adopta un tono de crónica. Presenta lo extraordinario con la misma naturalidad que lo cotidiano, lo que refuerza el efecto mágico-realista. La voz narrativa crea una distancia temporal que sugiere que todo ya ha sucedido.', answer: 'El narrador de Cien años de soledad es omnisciente y adopta un tono de crónica. Presenta lo extraordinario con la misma naturalidad que lo cotidiano, lo que refuerza el efecto mágico-realista. La voz narrativa crea una distancia temporal que sugiere que todo ya ha sucedido.' },
        { label: 'b', task: 'Drøft symbolikken i La casa de Bernarda Alba.', solution: 'La casa funciona como símbolo de la opresión social. El calor exterior representa el deseo reprimido, mientras que los muros representan las normas patriarcales. El contraste entre el interior oscuro y el exterior luminoso subraya el conflicto entre naturaleza y civilización.', answer: 'La casa funciona como símbolo de la opresión social. El calor exterior representa el deseo reprimido, mientras que los muros representan las normas patriarcales. El contraste entre el interior oscuro y el exterior luminoso subraya el conflicto entre naturaleza y civilización.' },
        { label: 'c', task: 'Analyser intertekstualitet mellom Cervantes og Márquez.', solution: 'Tanto Cervantes como Márquez exploran la relación entre ficción y realidad. Don Quijote confunde la ficción con la realidad; Macondo es un lugar donde la realidad supera la ficción. Ambos autores cuestionan qué es «real» a través de sus narrativas.', answer: 'Tanto Cervantes como Márquez exploran la relación entre ficción y realidad. Don Quijote confunde la ficción con la realidad; Macondo es un lugar donde la realidad supera la ficción. Ambos autores cuestionan qué es «real» a través de sus narrativas.' },
        { label: 'd', task: 'Skriv en tesis og to argumenter om Lorcas bruk av symboler.', solution: 'Tesis: Lorca utiliza los símbolos naturales para expresar conflictos sociales universales. Argumento 1: El verde simboliza el deseo prohibido. Argumento 2: El agua representa la libertad frente a la sequedad de la opresión social.', answer: 'Tesis: Lorca utiliza los símbolos naturales para expresar conflictos sociales universales. Argumento 1: El verde simboliza el deseo prohibido. Argumento 2: El agua representa la libertad frente a la sequedad de la opresión social.' },
      ], solution: 'a) El narrador de Cien años de soledad es omnisciente y adopta un tono de crónica. Presenta lo extraordinario con la misma naturalidad que lo cotidiano, lo que refuerza el efecto mágico-realista. La voz narrativa crea una distancia temporal que sugiere que todo ya ha sucedido., b) La casa funciona como símbolo de la opresión social. El calor exterior representa el deseo reprimido, mientras que los muros representan las normas patriarcales. El contraste entre el interior oscuro y el exterior luminoso subraya el conflicto entre naturaleza y civilización., c) Tanto Cervantes como Márquez exploran la relación entre ficción y realidad. Don Quijote confunde la ficción con la realidad; Macondo es un lugar donde la realidad supera la ficción. Ambos autores cuestionan qué es «real» a través de sus narrativas., d) Tesis: Lorca utiliza los símbolos naturales para expresar conflictos sociales universales. Argumento 1: El verde simboliza el deseo prohibido. Argumento 2: El agua representa la libertad frente a la sequedad de la opresión social.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-4-4-tip-1', type: 'tip', content: `**Skrivetips:** Et godt litterært essay har en klar tesis, bruker tekstbelegg og viser at du kan tolke – ikke bare gjenfortelle.` },
    { id: 'spansk-3-4-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Avansert litterær analyse**

- Begreper: intertekstualitet, symbolikk, fortellerstemme, metafiksjon, allegori, ironi, ambiguitet
- Essay-struktur: Introducción (tesis) → Desarrollo (argumenter + belegg) → Conclusión
- Nøkkelfraser: El autor emplea..., Esto se puede interpretar como..., A modo de conclusión...
- Mål: Tolke, ikke bare gjenfortelle – vis analytisk dybde` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: CINE Y ARTE HISPANOHABLANTE
// ============================================================================

// 5.1 El cine español
export const CHAPTER_SPANSK_3_5_1: TextbookChapter = {
  id: 'spansk-3-5-1',
  courseId: 'spansk-3',
  chapterNumber: '5.1',
  title: 'El cine español',
  subtitle: 'Spansk film (Almodóvar, Buñuel)',
  description: 'Utforsk spansk filmhistorie fra Buñuel til Almodóvar og samtidsfilm.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne viktige spanske regissører og filmer', 'bruke filmvokabular på spansk', 'analysere spansk film i kulturell kontekst'],
  content: [
    { id: 'spansk-3-5-1-intro', type: 'text', content: `## El cine español

Spansk film har en rik historie som spenner fra Luis Buñuels surrealisme til Pedro Almodóvars fargerike univers. Filmen reflekterer Spanias dramatiske politiske og sosiale endringer gjennom 1900-tallet.` },
    { id: 'spansk-3-5-1-def-1', type: 'definition', title: 'Spansk film – regissører og bevegelser', content: `**Spansk filmhistorie:**

| Periode | Regissør | Nøkkelfilm | Kjennetegn |
|---------|----------|------------|------------|
| Surrealisme (1920-30) | Luis Buñuel | Un perro andaluz (1929) | Drømmelogikk, sjokk, surrealistiske bilder |
| Franco-æraen (1939-75) | Luis García Berlanga | Bienvenido, Míster Marshall (1953) | Satire under sensur |
| La Movida (1980-tallet) | Pedro Almodóvar | Mujeres al borde... (1988) | Frigjøring, farge, identitet |
| Moderne (2000+) | Alejandro Amenábar | Mar adentro (2004) | Internasjonalt gjennombrudd |
| Samtid | J.A. Bayona | El orfanato (2007) | Sjangerfilm med dybde |

**Filmvokabular:**
- el director / la directora – regissøren
- el guion – manuskriptet
- el rodaje – innspillingen
- la banda sonora – lydsporet
- el montaje – klippingen
- la secuencia – sekvensen` },
    { id: 'spansk-3-5-1-text-1', type: 'text', content: `## Luis Buñuel – surrealismens filmskaper

**Un perro andaluz** (1929) – laget med Salvador Dalí.
- Åpningsscenen med barberkniven og øyet er filmhistoriens mest ikoniske surrealisme.
- Ingen logisk handling – filmen følger drømmelogikk.
- Provoserer bevisst – Buñuel ville sjokkere borgerlige verdier.

**Viridiana** (1961) – forbudt i Spania under Franco.
- Religiøs satire som utforsker hykleri.
- Vant Gullpalmen i Cannes.

Buñuel er en bro mellom surrealistisk kunst og film.` },
    { id: 'spansk-3-5-1-text-2', type: 'text', content: `## Pedro Almodóvar – La Movida og videre

Pedro Almodóvar (f. 1949) er Spanias mest kjente filmskaper internasjonalt.

**La Movida Madrileña** (1980-tallet): Kulturell frigjøring etter Francos død. Almodóvar var en sentral figur.

**Kjennetegn:**
- Sterke, komplekse kvinneroller
- Fargesprakende visuell stil
- Temaer: identitet, begjær, familie, tap
- Blanding av melodrama, komedie og tragedie

**Viktige filmer:**
- *Mujeres al borde de un ataque de nervios* (1988)
- *Todo sobre mi madre* (1999) – Oscar for beste utenlandske film
- *Hable con ella* (2002) – Oscar for beste originale manus
- *Volver* (2006) – med Penélope Cruz` },
    { id: 'spansk-3-5-1-example-1', type: 'example', title: 'Eksempel: Filmanalyse', problem: `Hva kjennetegner Almodóvars filmer?`, solution: `Sterke kvinneroller, fargesprakende stil, temaer som identitet og begjær, og en blanding av **melodrama, komedie og tragedie**. Hans filmer er dypt personlige men universelt gjenkjennelige.` },
    { id: 'spansk-3-5-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-5-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Grunnleggende om spansk film:', subTasks: [
        { label: 'a', task: 'Hvem regisserte Un perro andaluz?', solution: 'Luis Buñuel (sammen med Salvador Dalí), 1929.', answer: 'Luis Buñuel (sammen med Salvador Dalí), 1929.' },
        { label: 'b', task: 'Hva var La Movida Madrileña?', solution: 'En kulturell frigjørelsesbevegelse i Madrid på 1980-tallet, etter Francos død.', answer: 'En kulturell frigjørelsesbevegelse i Madrid på 1980-tallet, etter Francos død.' },
        { label: 'c', task: 'Hvem er Spanias mest kjente filmregissør internasjonalt?', solution: 'Pedro Almodóvar.', answer: 'Pedro Almodóvar.' },
        { label: 'd', task: 'Nevn en Oscar-vinnende spansk film.', solution: 'Todo sobre mi madre (1999) eller Mar adentro (2004).', answer: 'Todo sobre mi madre (1999) eller Mar adentro (2004).' },
      ], solution: 'a) Luis Buñuel (sammen med Salvador Dalí), 1929., b) En kulturell frigjørelsesbevegelse i Madrid på 1980-tallet, etter Francos død., c) Pedro Almodóvar., d) Todo sobre mi madre (1999) eller Mar adentro (2004).', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-5-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match regissør med film:', subTasks: [
        { label: 'a', task: 'Luis Buñuel', solution: 'Un perro andaluz (1929) / Viridiana (1961)', answer: 'Un perro andaluz (1929) / Viridiana (1961)' },
        { label: 'b', task: 'Pedro Almodóvar', solution: 'Todo sobre mi madre (1999)', answer: 'Todo sobre mi madre (1999)' },
        { label: 'c', task: 'Alejandro Amenábar', solution: 'Mar adentro (2004)', answer: 'Mar adentro (2004)' },
        { label: 'd', task: 'J.A. Bayona', solution: 'El orfanato (2007)', answer: 'El orfanato (2007)' },
      ], solution: 'a) Un perro andaluz (1929) / Viridiana (1961), b) Todo sobre mi madre (1999), c) Mar adentro (2004), d) El orfanato (2007)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-1-example-2', type: 'example', title: 'Eksempel: Historisk kontekst', problem: `Hvordan påvirket Franco-diktaturet spansk film?`, solution: `Under Franco (1939–75) var det streng **sensur**. Filmskapere måtte bruke allegori og satire for å kritisere regimet. Etter Francos død kom **La Movida** – en eksplosjon av kunstnerisk frihet.` },
    { id: 'spansk-3-5-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-5-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Analyser spansk film i kontekst:', subTasks: [
        { label: 'a', task: 'Hvorfor var Buñuels filmer kontroversielle?', solution: 'De provoserte bevisst med surrealistiske bilder, religiøs satire og angrep på borgerlige verdier. Viridiana ble forbudt under Franco.', answer: 'De provoserte bevisst med surrealistiske bilder, religiøs satire og angrep på borgerlige verdier. Viridiana ble forbudt under Franco.' },
        { label: 'b', task: 'Hva representerer fargene i Almodóvars filmer?', solution: 'Fargene (spesielt rødt) representerer lidenskap, begjær og følelsesmessig intensitet. Den visuelle stilen er en del av fortellingen.', answer: 'Fargene (spesielt rødt) representerer lidenskap, begjær og følelsesmessig intensitet. Den visuelle stilen er en del av fortellingen.' },
        { label: 'c', task: 'Hvordan endret La Movida spansk kultur?', solution: 'La Movida brøt med Francos konservative verdier og åpnet for fri kunstnerisk utfoldelse, seksuell frigjøring og eksperimentering.', answer: 'La Movida brøt med Francos konservative verdier og åpnet for fri kunstnerisk utfoldelse, seksuell frigjøring og eksperimentering.' },
        { label: 'd', task: 'Hva kjennetegner Almodóvars kvinneroller?', solution: 'De er komplekse, sterke og sentrale – ikke passive. Kvinner er ofte hovedpersoner som navigerer vanskelige situasjoner med styrke og verdighet.', answer: 'De er komplekse, sterke og sentrale – ikke passive. Kvinner er ofte hovedpersoner som navigerer vanskelige situasjoner med styrke og verdighet.' },
      ], solution: 'a) De provoserte bevisst med surrealistiske bilder, religiøs satire og angrep på borgerlige verdier. Viridiana ble forbudt under Franco., b) Fargene (spesielt rødt) representerer lidenskap, begjær og følelsesmessig intensitet. Den visuelle stilen er en del av fortellingen., c) La Movida brøt med Francos konservative verdier og åpnet for fri kunstnerisk utfoldelse, seksuell frigjøring og eksperimentering., d) De er komplekse, sterke og sentrale – ikke passive. Kvinner er ofte hovedpersoner som navigerer vanskelige situasjoner med styrke og verdighet.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-5-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Drøftingsoppgaver om spansk film:', subTasks: [
        { label: 'a', task: 'Sammenlign Buñuel og Almodóvar som filmskapere.', solution: 'Buñuel brukte surrealisme for å utfordre borgerlige verdier; Almodóvar bruker melodrama for å utforske identitet. Begge er provokative, men på ulike måter – Buñuel intellektuelt, Almodóvar emosjonelt.', answer: 'Buñuel brukte surrealisme for å utfordre borgerlige verdier; Almodóvar bruker melodrama for å utforske identitet. Begge er provokative, men på ulike måter – Buñuel intellektuelt, Almodóvar emosjonelt.' },
        { label: 'b', task: 'Hvordan reflekterer spansk film landets politiske historie?', solution: 'Fra sensur under Franco, til frigjøring med La Movida, til internasjonalt gjennombrudd – spansk film speiler nasjonens transformasjon fra diktatur til demokrati.', answer: 'Fra sensur under Franco, til frigjøring med La Movida, til internasjonalt gjennombrudd – spansk film speiler nasjonens transformasjon fra diktatur til demokrati.' },
        { label: 'c', task: 'Skriv en kort filmanmeldelse av en spansk film du kjenner (eller velg en fra listen).', solution: 'La película [título] fue dirigida por [director] en [año]. Trata de... Lo que más me impresionó fue... Recomiendo esta película porque...', answer: 'La película [título] fue dirigida por [director] en [año]. Trata de... Lo que más me impresionó fue... Recomiendo esta película porque...' },
        { label: 'd', task: 'Diskuter hvorfor film er et viktig kulturelt uttrykk.', solution: 'El cine refleja y forma la cultura de un país. En el caso de España, el cine ha sido tanto un instrumento de resistencia como de liberación cultural.', answer: 'El cine refleja y forma la cultura de un país. En el caso de España, el cine ha sido tanto un instrumento de resistencia como de liberación cultural.' },
      ], solution: 'a) Buñuel brukte surrealisme for å utfordre borgerlige verdier; Almodóvar bruker melodrama for å utforske identitet. Begge er provokative, men på ulike måter – Buñuel intellektuelt, Almodóvar emosjonelt., b) Fra sensur under Franco, til frigjøring med La Movida, til internasjonalt gjennombrudd – spansk film speiler nasjonens transformasjon fra diktatur til demokrati., c) La película [título] fue dirigida por [director] en [año]. Trata de... Lo que más me impresionó fue... Recomiendo esta película porque..., d) El cine refleja y forma la cultura de un país. En el caso de España, el cine ha sido tanto un instrumento de resistencia como de liberación cultural.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-1-tip-1', type: 'tip', content: `**Filmtips:** Se gjerne Todo sobre mi madre (Almodóvar) med spanske undertekster. Det er tilgjengelig og berørende – en god inngang til spansk film.` },
    { id: 'spansk-3-5-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Spansk film**

- Buñuel: Surrealisme, provokasjon (Un perro andaluz, Viridiana)
- Franco-æraen: Sensur, allegori, satire
- La Movida (1980-tallet): Kulturell frigjøring
- Almodóvar: Sterke kvinner, farge, identitet, melodrama
- Moderne: Internasjonalt gjennombrudd (Amenábar, Bayona)
- Filmvokabular: director, guion, rodaje, banda sonora, montaje` },
  ],
  exercises: [],
};

// 5.2 El cine latinoamericano
export const CHAPTER_SPANSK_3_5_2: TextbookChapter = {
  id: 'spansk-3-5-2',
  courseId: 'spansk-3',
  chapterNumber: '5.2',
  title: 'El cine latinoamericano',
  subtitle: 'Latinamerikansk film',
  description: 'Utforsk latinamerikansk filmhistorie og viktige filmer og bevegelser.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne viktige latinamerikanske filmer og regissører', 'forstå Nuevo Cine Latinoamericano', 'analysere film med relevant vokabular'],
  content: [
    { id: 'spansk-3-5-2-intro', type: 'text', content: `## El cine latinoamericano

Latinamerikansk film har utviklet seg fra politisk engasjert kino på 1960-70-tallet til en moderne bølge som har erobret verdens filmfestivaler og Oscar-utdelinger.` },
    { id: 'spansk-3-5-2-def-1', type: 'definition', title: 'Latinamerikansk film – bevegelser og regissører', content: `**Viktige bevegelser og filmer:**

| Bevegelse/Periode | Land | Regissør | Film |
|-------------------|------|----------|------|
| Nuevo Cine (1960-70) | Cuba | Tomás Gutiérrez Alea | Memorias del subdesarrollo (1968) |
| Cinema Novo | Brasil | Glauber Rocha | Deus e o Diabo na Terra do Sol (1964) |
| Moderne bølge | Mexico | Alfonso Cuarón | Y tu mamá también (2001) |
| Moderne bølge | Mexico | Guillermo del Toro | El laberinto del fauno (2006) |
| Moderne bølge | Argentina | Juan José Campanella | El secreto de sus ojos (2009) |
| Samtid | Chile | Pablo Larraín | No (2012) |

**Filmanalysevokabular:**
- la puesta en escena – mise en scène
- el plano – bildet/innstillingen
- el primer plano – nærbildet
- la cámara – kameraet
- el enfoque – fokus
- el desenlace – avslutningen` },
    { id: 'spansk-3-5-2-text-1', type: 'text', content: `## Nuevo Cine Latinoamericano

På 1960-70-tallet oppsto en bevegelse for politisk og sosialt engasjert film:
- **Cuba:** Etter revolusjonen (1959) ble film et verktøy for sosial bevisstgjøring.
- **Brasil:** Cinema Novo ville vise «den virkelige virkeligheten» – fattigdom, urettferdighet.
- **Argentina:** Tercer Cine (tredje-kinoen) – alternativ til Hollywood og europeisk kunstfilm.

**Kjennetegn:**
- Lavt budsjett, autentiske lokasjoner
- Sosiale og politiske temaer
- Ofte ikke-profesjonelle skuespillere
- Kunst som politisk handling` },
    { id: 'spansk-3-5-2-text-2', type: 'text', content: `## Den moderne bølgen: Mexico og videre

**De tre amigoene:** Alfonso Cuarón, Guillermo del Toro og Alejandro González Iñárritu – tre meksikanske regissører som har erobret Hollywood.

**Viktige filmer:**
- *Y tu mamá también* (2001, Cuarón): Roadmovie om ungdom og klasse i Mexico.
- *El laberinto del fauno* (2006, del Toro): Fantasi og borgerkrig – magisk realisme på film.
- *Amores perros* (2000, Iñárritu): Tre parallelle historier i Mexico City.
- *Roma* (2018, Cuarón): Personlig, poetisk – Oscar for beste regi.

Disse regissørene viser at latinamerikansk film kan være både lokal og universell.` },
    { id: 'spansk-3-5-2-example-1', type: 'example', title: 'Eksempel: Filmanalyse', problem: `Hva kjennetegner El laberinto del fauno?`, solution: `Filmen blander **fantasi med den spanske borgerkrigen**. Det er magisk realisme på film – en jentes fantasi-flukt fra fascismens brutalitet. Kontrasten mellom den vakre fantasiverdenen og den grusomme virkeligheten er virkningsfull.` },
    { id: 'spansk-3-5-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-5-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Grunnleggende om latinamerikansk film:', subTasks: [
        { label: 'a', task: 'Hva var Nuevo Cine Latinoamericano?', solution: 'En politisk engasjert filmbevegelse på 1960-70-tallet i Latin-Amerika.', answer: 'En politisk engasjert filmbevegelse på 1960-70-tallet i Latin-Amerika.' },
        { label: 'b', task: 'Nevn tre meksikanske regissører som har lyktes i Hollywood.', solution: 'Alfonso Cuarón, Guillermo del Toro, Alejandro González Iñárritu.', answer: 'Alfonso Cuarón, Guillermo del Toro, Alejandro González Iñárritu.' },
        { label: 'c', task: 'Hvilken film vant Oscar for beste utenlandske film fra Argentina?', solution: 'El secreto de sus ojos (2009).', answer: 'El secreto de sus ojos (2009).' },
        { label: 'd', task: 'Hva handler El laberinto del fauno om?', solution: 'En jentes fantasi-flukt under den spanske borgerkrigen.', answer: 'En jentes fantasi-flukt under den spanske borgerkrigen.' },
      ], solution: 'a) En politisk engasjert filmbevegelse på 1960-70-tallet i Latin-Amerika., b) Alfonso Cuarón, Guillermo del Toro, Alejandro González Iñárritu., c) El secreto de sus ojos (2009)., d) En jentes fantasi-flukt under den spanske borgerkrigen.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-5-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match film med regissør:', subTasks: [
        { label: 'a', task: 'Y tu mamá también (2001)', solution: 'Alfonso Cuarón', answer: 'Alfonso Cuarón' },
        { label: 'b', task: 'El laberinto del fauno (2006)', solution: 'Guillermo del Toro', answer: 'Guillermo del Toro' },
        { label: 'c', task: 'Amores perros (2000)', solution: 'Alejandro González Iñárritu', answer: 'Alejandro González Iñárritu' },
        { label: 'd', task: 'Roma (2018)', solution: 'Alfonso Cuarón', answer: 'Alfonso Cuarón' },
      ], solution: 'a) Alfonso Cuarón, b) Guillermo del Toro, c) Alejandro González Iñárritu, d) Alfonso Cuarón', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-2-example-2', type: 'example', title: 'Eksempel: Bevegelse', problem: `Hva var Nuevo Cine Latinoamericano?`, solution: `En filmbevegelse på 1960-70-tallet som brukte film som **politisk verktøy**. Lavbudsjett, sosiale temaer, autentiske lokasjoner – en motreaksjon mot kommersielle Hollywood-filmer.` },
    { id: 'spansk-3-5-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-5-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Analyser latinamerikansk film:', subTasks: [
        { label: 'a', task: 'Hvordan bruker El laberinto del fauno magisk realisme?', solution: 'Fantasielementene (faunen, labyrinten) er integrert i en realistisk historisk setting. Det magiske kan tolkes som barnets måte å overleve en brutal virkelighet.', answer: 'Fantasielementene (faunen, labyrinten) er integrert i en realistisk historisk setting. Det magiske kan tolkes som barnets måte å overleve en brutal virkelighet.' },
        { label: 'b', task: 'Hva kjennetegner den moderne meksikanske filmbølgen?', solution: 'Den kombinerer sosial bevissthet med høy kunstnerisk kvalitet, ofte med temaer som klasse, identitet og Mexicos komplekse samfunn.', answer: 'Den kombinerer sosial bevissthet med høy kunstnerisk kvalitet, ofte med temaer som klasse, identitet og Mexicos komplekse samfunn.' },
        { label: 'c', task: 'Sammenlign Nuevo Cine med moderne latinamerikansk film.', solution: 'Nuevo Cine var eksplisitt politisk og lavbudsjett; moderne film er mer variert i stil men beholder sosial bevissthet med høyere produksjonskvalitet.', answer: 'Nuevo Cine var eksplisitt politisk og lavbudsjett; moderne film er mer variert i stil men beholder sosial bevissthet med høyere produksjonskvalitet.' },
        { label: 'd', task: 'Hvorfor er Roma (2018) viktig?', solution: 'Den viser hverdagslivet til en hushjelp i Mexico City med poetisk skjønnhet. Den er personlig, politisk og universell – og vant Oscar for beste regi.', answer: 'Den viser hverdagslivet til en hushjelp i Mexico City med poetisk skjønnhet. Den er personlig, politisk og universell – og vant Oscar for beste regi.' },
      ], solution: 'a) Fantasielementene (faunen, labyrinten) er integrert i en realistisk historisk setting. Det magiske kan tolkes som barnets måte å overleve en brutal virkelighet., b) Den kombinerer sosial bevissthet med høy kunstnerisk kvalitet, ofte med temaer som klasse, identitet og Mexicos komplekse samfunn., c) Nuevo Cine var eksplisitt politisk og lavbudsjett; moderne film er mer variert i stil men beholder sosial bevissthet med høyere produksjonskvalitet., d) Den viser hverdagslivet til en hushjelp i Mexico City med poetisk skjønnhet. Den er personlig, politisk og universell – og vant Oscar for beste regi.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-5-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Drøftingsoppgaver om latinamerikansk film:', subTasks: [
        { label: 'a', task: 'Er det positivt eller negativt at latinamerikanske regissører jobber i Hollywood?', solution: 'Positivt: Synlighet, ressurser, mulighet til å fortelle latinamerikanske historier for et globalt publikum. Negativt: Fare for å miste kulturell autentisitet og tilpasse seg kommersielle krav.', answer: 'Positivt: Synlighet, ressurser, mulighet til å fortelle latinamerikanske historier for et globalt publikum. Negativt: Fare for å miste kulturell autentisitet og tilpasse seg kommersielle krav.' },
        { label: 'b', task: 'Diskuter film som politisk verktøy i Latin-Amerika.', solution: 'Film har historisk vært brukt til å belyse sosial urettferdighet, gi stemme til marginaliserte grupper og utfordre maktstrukturer. Fra Nuevo Cine til moderne filmer som Roma fortsetter denne tradisjonen.', answer: 'Film har historisk vært brukt til å belyse sosial urettferdighet, gi stemme til marginaliserte grupper og utfordre maktstrukturer. Fra Nuevo Cine til moderne filmer som Roma fortsetter denne tradisjonen.' },
        { label: 'c', task: 'Sammenlign El laberinto del fauno med magisk realisme i litteraturen.', solution: 'Begge blander det overnaturlige med historisk virkelighet. Del Toro bruker visuelle virkemidler (farger, monstre, labyrinten) der Márquez bruker språklige. Effekten er lik: det magiske kaster lys over den brutale virkeligheten.', answer: 'Begge blander det overnaturlige med historisk virkelighet. Del Toro bruker visuelle virkemidler (farger, monstre, labyrinten) der Márquez bruker språklige. Effekten er lik: det magiske kaster lys over den brutale virkeligheten.' },
        { label: 'd', task: 'Skriv en kort anmeldelse av en latinamerikansk film.', solution: 'Estructura: Título, director, año. De qué trata. Qué me pareció. Por qué la recomiendo. Ejemplo: La película Roma, dirigida por Alfonso Cuarón en 2018, retrata la vida de...', answer: 'Estructura: Título, director, año. De qué trata. Qué me pareció. Por qué la recomiendo. Ejemplo: La película Roma, dirigida por Alfonso Cuarón en 2018, retrata la vida de...' },
      ], solution: 'a) Positivt: Synlighet, ressurser, mulighet til å fortelle latinamerikanske historier for et globalt publikum. Negativt: Fare for å miste kulturell autentisitet og tilpasse seg kommersielle krav., b) Film har historisk vært brukt til å belyse sosial urettferdighet, gi stemme til marginaliserte grupper og utfordre maktstrukturer. Fra Nuevo Cine til moderne filmer som Roma fortsetter denne tradisjonen., c) Begge blander det overnaturlige med historisk virkelighet. Del Toro bruker visuelle virkemidler (farger, monstre, labyrinten) der Márquez bruker språklige. Effekten er lik: det magiske kaster lys over den brutale virkeligheten., d) Estructura: Título, director, año. De qué trata. Qué me pareció. Por qué la recomiendo. Ejemplo: La película Roma, dirigida por Alfonso Cuarón en 2018, retrata la vida de...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-2-tip-1', type: 'tip', content: `**Filmtips:** Y tu mamá también og Roma er gode inngangsporter til latinamerikansk film. Begge er tilgjengelige på strømmetjenester.` },
    { id: 'spansk-3-5-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Latinamerikansk film**

- Nuevo Cine (1960-70): Politisk film, lavbudsjett, sosiale temaer
- Moderne bølge: Cuarón, del Toro, Iñárritu – Mexico erobrer verden
- Viktige filmer: Y tu mamá también, El laberinto del fauno, Roma, El secreto de sus ojos
- Film som kunst og politikk: Tradisjon for sosial bevissthet
- Analysevokabular: puesta en escena, plano, primer plano, desenlace` },
  ],
  exercises: [],
};

// 5.3 Arte y arquitectura
export const CHAPTER_SPANSK_3_5_3: TextbookChapter = {
  id: 'spansk-3-5-3',
  courseId: 'spansk-3',
  chapterNumber: '5.3',
  title: 'Arte y arquitectura',
  subtitle: 'Kunst og arkitektur (Picasso, Gaudí, Kahlo)',
  description: 'Utforsk spansktalende verdens kunst og arkitektur – fra Picasso til Kahlo, fra Gaudí til Rivera.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne viktige kunstnere og verk', 'beskrive og analysere kunst på spansk', 'forstå kunstbevegelser i spansktalende land'],
  content: [
    { id: 'spansk-3-5-3-intro', type: 'text', content: `## Arte y arquitectura

Den spansktalende verden har bidratt enormt til verdens kunst og arkitektur. Fra Picassos kubisme til Kahlos intense selvportretter, fra Gaudís fantastiske bygninger til Riveras politiske veggmalerier – dette er en rik tradisjon å utforske.` },
    { id: 'spansk-3-5-3-def-1', type: 'definition', title: 'Kunst og arkitektur i den spansktalende verden', content: `**Viktige kunstnere:**

| Kunstner | Land | Periode | Kjent for |
|----------|------|---------|----------|
| Pablo Picasso | Spania | 1881-1973 | Kubisme, Guernica |
| Salvador Dalí | Spania | 1904-1989 | Surrealisme, La persistencia de la memoria |
| Frida Kahlo | Mexico | 1907-1954 | Selvportretter, identitet |
| Diego Rivera | Mexico | 1886-1957 | Muralisme, politisk kunst |
| Antoni Gaudí | Spania | 1852-1926 | Modernistisk arkitektur, Sagrada Familia |
| Fernando Botero | Colombia | 1932-2023 | Overdimensjonerte figurer |

**Kunstvokabular:**
- el cuadro / la pintura – maleriet
- la escultura – skulpturen
- el autorretrato – selvportrettet
- el mural – veggmaleriet
- la exposición – utstillingen
- la obra de arte – kunstverket` },
    { id: 'spansk-3-5-3-text-1', type: 'text', content: `## Guernica – Picassos mesterverk

**Guernica** (1937) er Picassos svar på bombingen av den baskiske byen Guernica under den spanske borgerkrigen.

**Analyse:**
- **Svart-hvitt + gråtoner:** Fravær av farge understreker grusomheten.
- **Fragmenterte figurer:** Kubistisk stil – virkeligheten er bokstavelig talt knust.
- **Symboler:** Oksen (brutalitet), hesten (folkets lidelse), lyspæren (sannheten/håpet), det skriende barnet (uskyld).
- **Størrelse:** 3,5 x 7,8 meter – overveldende.
- **Budskap:** Universell anti-krigsprotest.

Guernica er i dag utstilt i Museo Reina Sofía i Madrid.` },
    { id: 'spansk-3-5-3-text-2', type: 'text', content: `## Frida Kahlo og Diego Rivera

**Frida Kahlo** (1907-1954) er kjent for sine intense, ærlige selvportretter.
- Temaer: Smerte, identitet, kropp, meksikansk kultur
- *Las dos Fridas* (1939): To versjoner av seg selv – europeisk og meksikansk identitet.
- Personlig er politisk: Kahlo bruker sin egen kropp som politisk uttrykk.

**Diego Rivera** (1886-1957) er Mexicos store muralist.
- Enorme veggmalerier som forteller Mexicos historie
- Politisk kunst: Arbeiderklasse, urfolk, revolusjon
- Muralismo: Kunst for folket, på offentlige vegger

Kahlo og Rivera var gift – deres turbulente forhold er legendarisk.` },
    { id: 'spansk-3-5-3-example-1', type: 'example', title: 'Eksempel: Kunstanalyse', problem: `Hva symboliserer de fragmenterte figurene i Guernica?`, solution: `Den kubistiske fragmenteringen representerer **ødeleggelse** – virkeligheten er bokstavelig talt **knust** av bombingen. Formene uttrykker kaos, smerte og oppløsning av den menneskelige verdigheten.` },
    { id: 'spansk-3-5-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-5-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match kunstner med nasjonalitet og kunstform:', subTasks: [
        { label: 'a', task: 'Pablo Picasso', solution: 'Spania – kubisme, maleri (Guernica)', answer: 'Spania – kubisme, maleri (Guernica)' },
        { label: 'b', task: 'Frida Kahlo', solution: 'Mexico – selvportretter, maleri (Las dos Fridas)', answer: 'Mexico – selvportretter, maleri (Las dos Fridas)' },
        { label: 'c', task: 'Antoni Gaudí', solution: 'Spania – modernistisk arkitektur (Sagrada Familia)', answer: 'Spania – modernistisk arkitektur (Sagrada Familia)' },
        { label: 'd', task: 'Diego Rivera', solution: 'Mexico – muralisme, veggmalerier', answer: 'Mexico – muralisme, veggmalerier' },
      ], solution: 'a) Spania – kubisme, maleri (Guernica), b) Mexico – selvportretter, maleri (Las dos Fridas), c) Spania – modernistisk arkitektur (Sagrada Familia), d) Mexico – muralisme, veggmalerier', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-5-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sant eller usant om kunst i den spansktalende verden:', subTasks: [
        { label: 'a', task: 'Guernica er et fargerikt maleri.', solution: 'Usant – det er i svart, hvitt og gråtoner.', answer: 'Usant – det er i svart, hvitt og gråtoner.' },
        { label: 'b', task: 'Frida Kahlo er kjent for sine selvportretter.', solution: 'Sant.', answer: 'Sant.' },
        { label: 'c', task: 'Sagrada Familia i Barcelona er ferdigbygd.', solution: 'Usant – den er fortsatt under konstruksjon (påbegynt 1882).', answer: 'Usant – den er fortsatt under konstruksjon (påbegynt 1882).' },
        { label: 'd', task: 'Diego Riveras muraler handler om Mexicos historie.', solution: 'Sant.', answer: 'Sant.' },
      ], solution: 'a) Usant – det er i svart, hvitt og gråtoner., b) Sant., c) Usant – den er fortsatt under konstruksjon (påbegynt 1882)., d) Sant.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-3-example-2', type: 'example', title: 'Eksempel: Kulturell kontekst', problem: `Hvorfor er Frida Kahlos selvportretter politiske?`, solution: `Ved å male sin egen smerte, kropp og meksikanske identitet gjør Kahlo **det personlige politisk**. Hun utfordrer vestlige skjønnhetsidealer og utforsker kolonialismens effekt på meksikansk identitet.` },
    { id: 'spansk-3-5-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-5-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Analyser kunst fra den spansktalende verden:', subTasks: [
        { label: 'a', task: 'Hva er budskapet i Guernica?', solution: 'En universell anti-krigsprotest. Picasso viser krigens grusomhet gjennom fragmenterte menneskeskikkelser og dyr som representerer lidelse, brutalitet og uskyld.', answer: 'En universell anti-krigsprotest. Picasso viser krigens grusomhet gjennom fragmenterte menneskeskikkelser og dyr som representerer lidelse, brutalitet og uskyld.' },
        { label: 'b', task: 'Hvorfor malte Kahlo Las dos Fridas?', solution: 'For å utforske sin doble identitet – europeisk og meksikansk. Maleriet viser to versjoner av henne, forbundet med en blodåre som symboliserer at begge identitetene er del av henne.', answer: 'For å utforske sin doble identitet – europeisk og meksikansk. Maleriet viser to versjoner av henne, forbundet med en blodåre som symboliserer at begge identitetene er del av henne.' },
        { label: 'c', task: 'Hva kjennetegner Gaudís arkitektur?', solution: 'Organiske former inspirert av naturen, fargerike mosaikker, ingen rette linjer. Sagrada Familia er hans mesterverk – en blanding av gotikk og naturalistiske former.', answer: 'Organiske former inspirert av naturen, fargerike mosaikker, ingen rette linjer. Sagrada Familia er hans mesterverk – en blanding av gotikk og naturalistiske former.' },
        { label: 'd', task: 'Hvorfor er muralisme viktig i Mexico?', solution: 'Muralisme bringer kunst ut til folket – på offentlige vegger, ikke i museer. Den forteller Mexicos historie og gir stemme til arbeiderklassen og urfolk.', answer: 'Muralisme bringer kunst ut til folket – på offentlige vegger, ikke i museer. Den forteller Mexicos historie og gir stemme til arbeiderklassen og urfolk.' },
      ], solution: 'a) En universell anti-krigsprotest. Picasso viser krigens grusomhet gjennom fragmenterte menneskeskikkelser og dyr som representerer lidelse, brutalitet og uskyld., b) For å utforske sin doble identitet – europeisk og meksikansk. Maleriet viser to versjoner av henne, forbundet med en blodåre som symboliserer at begge identitetene er del av henne., c) Organiske former inspirert av naturen, fargerike mosaikker, ingen rette linjer. Sagrada Familia er hans mesterverk – en blanding av gotikk og naturalistiske former., d) Muralisme bringer kunst ut til folket – på offentlige vegger, ikke i museer. Den forteller Mexicos historie og gir stemme til arbeiderklassen og urfolk.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-5-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Drøftingsoppgaver om kunst:', subTasks: [
        { label: 'a', task: 'Sammenlign Picassos og Kahlos bruk av kunst som politisk uttrykk.', solution: 'Picasso bruker en historisk hendelse (Guernica) for å protestere mot krig. Kahlo bruker sin egen kropp og identitet for å utfordre maktstrukturer. Begge viser at kunst kan være en kraftfull politisk handling.', answer: 'Picasso bruker en historisk hendelse (Guernica) for å protestere mot krig. Kahlo bruker sin egen kropp og identitet for å utfordre maktstrukturer. Begge viser at kunst kan være en kraftfull politisk handling.' },
        { label: 'b', task: 'Beskriv et kunstverk på spansk (velg et av de nevnte).', solution: 'Guernica es una obra monumental de Picasso pintada en 1937. Mide 3,5 por 7,8 metros y está pintada en blanco, negro y gris. Representa el horror del bombardeo de la ciudad vasca de Guernica...', answer: 'Guernica es una obra monumental de Picasso pintada en 1937. Mide 3,5 por 7,8 metros y está pintada en blanco, negro y gris. Representa el horror del bombardeo de la ciudad vasca de Guernica...' },
        { label: 'c', task: 'Diskuter forholdet mellom kunst og politikk i den spansktalende verden.', solution: 'En el mundo hispanohablante, el arte ha sido frecuentemente un instrumento de resistencia política. Desde los murales de Rivera hasta Guernica de Picasso, el arte ha dado voz a los oprimidos.', answer: 'En el mundo hispanohablante, el arte ha sido frecuentemente un instrumento de resistencia política. Desde los murales de Rivera hasta Guernica de Picasso, el arte ha dado voz a los oprimidos.' },
        { label: 'd', task: 'Er Gaudís arkitektur kunst eller arkitektur – eller begge deler?', solution: 'Gaudí utvisker grensen mellom kunst og arkitektur. Sagrada Familia er en funksjonell bygning, men også et totalt kunstverk. Hans organiske former utfordrer ideen om at bygninger må følge rette linjer.', answer: 'Gaudí utvisker grensen mellom kunst og arkitektur. Sagrada Familia er en funksjonell bygning, men også et totalt kunstverk. Hans organiske former utfordrer ideen om at bygninger må følge rette linjer.' },
      ], solution: 'a) Picasso bruker en historisk hendelse (Guernica) for å protestere mot krig. Kahlo bruker sin egen kropp og identitet for å utfordre maktstrukturer. Begge viser at kunst kan være en kraftfull politisk handling., b) Guernica es una obra monumental de Picasso pintada en 1937. Mide 3,5 por 7,8 metros y está pintada en blanco, negro y gris. Representa el horror del bombardeo de la ciudad vasca de Guernica..., c) En el mundo hispanohablante, el arte ha sido frecuentemente un instrumento de resistencia política. Desde los murales de Rivera hasta Guernica de Picasso, el arte ha dado voz a los oprimidos., d) Gaudí utvisker grensen mellom kunst og arkitektur. Sagrada Familia er en funksjonell bygning, men også et totalt kunstverk. Hans organiske former utfordrer ideen om at bygninger må følge rette linjer.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-3-tip-1', type: 'tip', content: `**Museumstips:** Besøk gjerne virtuelle omvisninger i Museo Reina Sofía (Guernica), Museo Frida Kahlo (Mexico City) eller Sagrada Familia (Barcelona).` },
    { id: 'spansk-3-5-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Kunst og arkitektur**

- Picasso: Kubisme, Guernica – anti-krigsprotest
- Dalí: Surrealisme – drømmebilder
- Kahlo: Selvportretter – identitet, smerte, politikk
- Rivera: Muralisme – kunst for folket
- Gaudí: Modernistisk arkitektur – Sagrada Familia
- Kunst som politisk verktøy i den spansktalende verden` },
  ],
  exercises: [],
};

// 5.4 Reseñas y críticas
export const CHAPTER_SPANSK_3_5_4: TextbookChapter = {
  id: 'spansk-3-5-4',
  courseId: 'spansk-3',
  chapterNumber: '5.4',
  title: 'Reseñas y críticas',
  subtitle: 'Anmeldelser og kritikk',
  description: 'Lær å skrive film- og kunstanmeldelser på spansk med avansert vokabular.',
  estimatedMinutes: 45,
  competenceGoals: ['skrive strukturerte anmeldelser på spansk', 'bruke vurderingsvokabular', 'analysere og vurdere film og kunst kritisk'],
  content: [
    { id: 'spansk-3-5-4-intro', type: 'text', content: `## Reseñas y críticas

Å skrive anmeldelser er en viktig akademisk og kreativ ferdighet. Du lærer å observere, analysere, vurdere og formidle – alt på spansk.` },
    { id: 'spansk-3-5-4-def-1', type: 'definition', title: 'Anmeldelser og kritikk (Reseñas y críticas)', content: `**Struktur for en anmeldelse (reseña):**

1. **Ficha técnica:** Tittel, regissør/kunstner, år, sjanger
2. **Sinopsis/Descripción:** Kort beskrivelse (uten å avsløre for mye)
3. **Análisis:** Hva fungerer? Hva fungerer ikke? Virkemidler?
4. **Valoración personal:** Din vurdering – begrunnet
5. **Recomendación:** Anbefaler du det? For hvem?

**Vurderingsvokabular:**
| Positiv | Negativ |
|---------|---------|
| impresionante (imponerende) | decepcionante (skuffende) |
| conmovedor/a (rørende) | aburrido/a (kjedelig) |
| brillante (strålende) | mediocre (middelmådig) |
| innovador/a (nyskapende) | predecible (forutsigbar) |
| cautivador/a (fengslende) | superficial (overfladisk) |
| magistral (mesterlig) | pretencioso/a (pretensiøs) |` },
    { id: 'spansk-3-5-4-text-1', type: 'text', content: `## Filmanmeldelse – modell

**Título:** *Todo sobre mi madre*
**Director:** Pedro Almodóvar
**Año:** 1999
**Género:** Drama

*Todo sobre mi madre* cuenta la historia de Manuela, una enfermera que pierde a su hijo adolescente en un accidente. Desesperada, viaja a Barcelona en busca del padre del chico.

La película es **conmovedora** y **brillante**. Almodóvar consigue crear personajes complejos y humanos. La actuación de Cecilia Roth es **magistral**. La banda sonora complementa perfectamente las emociones.

**Valoración:** Una obra maestra del cine español. La recomiendo a cualquier persona que aprecie el buen cine. ⭐⭐⭐⭐⭐` },
    { id: 'spansk-3-5-4-text-2', type: 'text', content: `## Kunstanmeldelse – modell

**Obra:** Guernica
**Artista:** Pablo Picasso
**Año:** 1937
**Técnica:** Óleo sobre lienzo

*Guernica* es una obra **impresionante** tanto por su tamaño (3,5 x 7,8 m) como por su contenido emocional. Picasso representó el horror del bombardeo con figuras fragmentadas y una paleta reducida a blanco, negro y gris.

Lo más **cautivador** de la obra es cómo logra transmitir el sufrimiento sin recurrir a imágenes explícitas de violencia. El uso del cubismo fragmenta la realidad, como la propia bomba fragmentó la ciudad.

**Valoración:** Una de las obras de arte más importantes del siglo XX. **Imprescindible**.` },
    { id: 'spansk-3-5-4-example-1', type: 'example', title: 'Eksempel: Anmeldelsesstruktur', problem: `Hva er de fem delene i en anmeldelse?`, solution: `1. **Ficha técnica** (fakta), 2. **Sinopsis** (kort beskrivelse), 3. **Análisis** (analyse), 4. **Valoración** (vurdering), 5. **Recomendación** (anbefaling).` },
    { id: 'spansk-3-5-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-5-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match vurderingsord med oversettelse:', subTasks: [
        { label: 'a', task: 'impresionante', solution: 'imponerende', answer: 'imponerende' },
        { label: 'b', task: 'conmovedor/a', solution: 'rørende', answer: 'rørende' },
        { label: 'c', task: 'decepcionante', solution: 'skuffende', answer: 'skuffende' },
        { label: 'd', task: 'innovador/a', solution: 'nyskapende', answer: 'nyskapende' },
      ], solution: 'a) imponerende, b) rørende, c) skuffende, d) nyskapende', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-5-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sett delene av en anmeldelse i riktig rekkefølge:', subTasks: [
        { label: 'a', task: 'Først: Tittel, regissør, år, sjanger', solution: 'Ficha técnica', answer: 'Ficha técnica' },
        { label: 'b', task: 'Deretter: Kort beskrivelse av handlingen', solution: 'Sinopsis / Descripción', answer: 'Sinopsis / Descripción' },
        { label: 'c', task: 'Så: Hva fungerer? Virkemidler?', solution: 'Análisis', answer: 'Análisis' },
        { label: 'd', task: 'Til slutt: Din vurdering og anbefaling', solution: 'Valoración y Recomendación', answer: 'Valoración y Recomendación' },
      ], solution: 'a) Ficha técnica, b) Sinopsis / Descripción, c) Análisis, d) Valoración y Recomendación', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-4-example-2', type: 'example', title: 'Eksempel: Vurderingsvokabular', problem: `Hvordan sier du at en film er «rørende» og «fengslende» på spansk?`, solution: `**Conmovedora** (rørende) og **cautivadora** (fengslende).` },
    { id: 'spansk-3-5-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-5-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv deler av en anmeldelse:', subTasks: [
        { label: 'a', task: 'Skriv en ficha técnica for en film du kjenner.', solution: 'Título: [film]. Director: [regissør]. Año: [år]. Género: [sjanger].', answer: 'Título: [film]. Director: [regissør]. Año: [år]. Género: [sjanger].' },
        { label: 'b', task: 'Skriv en kort sinopsis (2-3 setninger).', solution: 'La película trata de... El protagonista es... La historia se desarrolla en...', answer: 'La película trata de... El protagonista es... La historia se desarrolla en...' },
        { label: 'c', task: 'Gi en vurdering med begrunnelse.', solution: 'En mi opinión, la película es [adjetivo] porque... Lo que más me impresionó fue...', answer: 'En mi opinión, la película es [adjetivo] porque... Lo que más me impresionó fue...' },
        { label: 'd', task: 'Skriv en anbefaling.', solution: 'Recomiendo esta película a... porque... Es especialmente interesante para quienes...', answer: 'Recomiendo esta película a... porque... Es especialmente interesante para quienes...' },
      ], solution: 'a) Título: [film]. Director: [regissør]. Año: [år]. Género: [sjanger]., b) La película trata de... El protagonista es... La historia se desarrolla en..., c) En mi opinión, la película es [adjetivo] porque... Lo que más me impresionó fue..., d) Recomiendo esta película a... porque... Es especialmente interesante para quienes...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-5-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv komplette anmeldelser:', subTasks: [
        { label: 'a', task: 'Skriv en filmanmeldelse (5-6 setninger) av en spanskspråklig film.', solution: 'Estructura completa: ficha técnica + sinopsis + análisis + valoración + recomendación. Usa vocabulario de valoración.', answer: 'Estructura completa: ficha técnica + sinopsis + análisis + valoración + recomendación. Usa vocabulario de valoración.' },
        { label: 'b', task: 'Skriv en kunstanmeldelse (5-6 setninger) av Guernica eller Las dos Fridas.', solution: 'Incluye: artista, año, técnica, descripción, análisis de símbolos, valoración personal.', answer: 'Incluye: artista, año, técnica, descripción, análisis de símbolos, valoración personal.' },
        { label: 'c', task: 'Sammenlign to filmer i en kort kritikk.', solution: 'Tanto [película 1] como [película 2] tratan el tema de... Sin embargo, mientras que [película 1] es más..., [película 2] resulta más... En mi opinión...', answer: 'Tanto [película 1] como [película 2] tratan el tema de... Sin embargo, mientras que [película 1] es más..., [película 2] resulta más... En mi opinión...' },
        { label: 'd', task: 'Skriv en negativ anmeldelse på en konstruktiv måte.', solution: 'Aunque la película tiene aspectos positivos como..., resulta decepcionante en... El director no logra... A pesar de sus defectos, podría interesar a...', answer: 'Aunque la película tiene aspectos positivos como..., resulta decepcionante en... El director no logra... A pesar de sus defectos, podría interesar a...' },
      ], solution: 'a) Estructura completa: ficha técnica + sinopsis + análisis + valoración + recomendación. Usa vocabulario de valoración., b) Incluye: artista, año, técnica, descripción, análisis de símbolos, valoración personal., c) Tanto [película 1] como [película 2] tratan el tema de... Sin embargo, mientras que [película 1] es más..., [película 2] resulta más... En mi opinión..., d) Aunque la película tiene aspectos positivos como..., resulta decepcionante en... El director no logra... A pesar de sus defectos, podría interesar a...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-5-4-tip-1', type: 'tip', content: `**Skrivetips for anmeldelser:** Vær konkret og bruk eksempler. Ikke bare si at noe er «bra» eller «dårlig» – forklar **hvorfor** med referanser til spesifikke scener, virkemidler eller elementer.` },
    { id: 'spansk-3-5-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Anmeldelser og kritikk**

- Struktur: Ficha técnica → Sinopsis → Análisis → Valoración → Recomendación
- Positivt: impresionante, conmovedor, brillante, innovador, cautivador, magistral
- Negativt: decepcionante, aburrido, mediocre, predecible, superficial, pretencioso
- Nøkkel: Vær konkret, bruk eksempler, begrunn din vurdering` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: POLÍTICA Y ACTUALIDAD
// ============================================================================

// 6.1 Sistemas políticos
export const CHAPTER_SPANSK_3_6_1: TextbookChapter = {
  id: 'spansk-3-6-1',
  courseId: 'spansk-3',
  chapterNumber: '6.1',
  title: 'Sistemas políticos',
  subtitle: 'Politiske systemer i spansktalende land',
  description: 'Forstå politiske systemer i Spania og Latin-Amerika – demokrati, monarki og politisk historie.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive ulike politiske systemer', 'sammenligne politiske systemer i spansktalende land', 'bruke politisk vokabular på spansk'],
  content: [
    { id: 'spansk-3-6-1-intro', type: 'text', content: `## Sistemas políticos

Å forstå politiske systemer er viktig for å forstå nyheter og samtaler om samfunnet i spansktalende land. Spanias overgang fra diktatur til demokrati og Latin-Amerikas turbulente politiske historie er sentrale temaer.` },
    { id: 'spansk-3-6-1-def-1', type: 'definition', title: 'Politiske systemer (Sistemas políticos)', content: `**Politisk vokabular:**

| Spansk | Norsk |
|--------|-------|
| la democracia | demokrati |
| la monarquía constitucional | konstitusjonelt monarki |
| la república | republikk |
| el parlamento / las Cortes | parlamentet |
| el presidente / la presidenta | presidenten |
| el rey / la reina | kongen / dronningen |
| las elecciones | valg |
| el partido político | politisk parti |
| la constitución | grunnloven |
| el golpe de estado | statskupp |
| la dictadura | diktatur |
| los derechos civiles | borgerrettigheter |

**Spania:** Konstitusjonelt monarki med parlamentarisk demokrati (siden 1978).
**Latin-Amerika:** De fleste land er presidentrepublikker.` },
    { id: 'spansk-3-6-1-text-1', type: 'text', content: `## Spania: Fra diktatur til demokrati

**Franco-diktaturet (1939–1975):**
- Etter borgerkrigen styrte general Franco med jernhånd.
- Ingen politisk frihet, sensur, undertrykkelse av regionale identiteter.

**La Transición (1975–1982):**
- Etter Francos død ble Spania et konstitusjonelt monarki.
- Juan Carlos I ble konge og støttet demokratiseringen.
- Grunnloven av 1978 sikret demokrati, regional autonomi og individuelle rettigheter.
- Fredelig overgang – beundret internasjonalt.

**I dag:**
- Parlamentarisk monarki med to kamre (Congreso og Senado).
- Statsminister (presidente del gobierno) leder regjeringen.
- 17 autonome regioner med ulik grad av selvstyre.` },
    { id: 'spansk-3-6-1-text-2', type: 'text', content: `## Latin-Amerika: Politisk oversikt

**Fellestrekk:**
- De fleste land er **presidentrepublikker**.
- Historisk preget av **ustabilitet**: kupp, diktaturer, revolusjoner.
- Demokratisering på 1980-90-tallet – «den tredje demokratiseringsbølgen».

**Eksempler:**
- **Mexico:** Presidentrepublikk. PRI dominerte 1929–2000.
- **Argentina:** Skiftende mellom demokrati og militærdiktatur. Peronismen er sentral.
- **Chile:** Diktatur under Pinochet (1973–1990), deretter demokrati.
- **Cuba:** Sosialistisk ettpartistat siden 1959.
- **Colombia:** Langvarig væpnet konflikt, fredsavtale i 2016.

**Sammenligning med Norge:** Både Spania og Norge er konstitusjonelle monarkier, men Latin-Amerikas republikker ligner mer på USA-modellen.` },
    { id: 'spansk-3-6-1-example-1', type: 'example', title: 'Eksempel: Politisk system', problem: `Hva slags politisk system har Spania?`, solution: `Spania er et **konstitusjonelt monarki** med **parlamentarisk demokrati**. Kongen er statsoverhode, men statsministeren (presidente del gobierno) leder regjeringen.` },
    { id: 'spansk-3-6-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-6-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match politisk begrep med oversettelse:', subTasks: [
        { label: 'a', task: 'la democracia', solution: 'demokrati', answer: 'demokrati' },
        { label: 'b', task: 'el golpe de estado', solution: 'statskupp', answer: 'statskupp' },
        { label: 'c', task: 'las elecciones', solution: 'valg', answer: 'valg' },
        { label: 'd', task: 'la dictadura', solution: 'diktatur', answer: 'diktatur' },
      ], solution: 'a) demokrati, b) statskupp, c) valg, d) diktatur', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-6-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sant eller usant om politiske systemer:', subTasks: [
        { label: 'a', task: 'Spania er en republikk.', solution: 'Usant – Spania er et konstitusjonelt monarki.', answer: 'Usant – Spania er et konstitusjonelt monarki.' },
        { label: 'b', task: 'Franco styrte Spania fra 1939 til 1975.', solution: 'Sant.', answer: 'Sant.' },
        { label: 'c', task: 'Cuba er et demokrati med flerpartisystem.', solution: 'Usant – Cuba er en sosialistisk ettpartistat.', answer: 'Usant – Cuba er en sosialistisk ettpartistat.' },
        { label: 'd', task: 'Mexico er en presidentrepublikk.', solution: 'Sant.', answer: 'Sant.' },
      ], solution: 'a) Usant – Spania er et konstitusjonelt monarki., b) Sant., c) Usant – Cuba er en sosialistisk ettpartistat., d) Sant.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-1-example-2', type: 'example', title: 'Eksempel: Sammenligning', problem: `Hva er forskjellen mellom Spanias og Mexicos politiske system?`, solution: `Spania er et **konstitusjonelt monarki** med konge og statsminister. Mexico er en **presidentrepublikk** der presidenten er både statsoverhode og regjeringssjef.` },
    { id: 'spansk-3-6-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-6-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spansk med politisk vokabular:', subTasks: [
        { label: 'a', task: 'Beskriv Spanias politiske system.', solution: 'España es una monarquía constitucional con democracia parlamentaria. El rey es el jefe de estado y el presidente del gobierno dirige el ejecutivo.', answer: 'España es una monarquía constitucional con democracia parlamentaria. El rey es el jefe de estado y el presidente del gobierno dirige el ejecutivo.' },
        { label: 'b', task: 'Hva var La Transición?', solution: 'La Transición fue el proceso de cambio de la dictadura de Franco a la democracia, entre 1975 y 1982. Fue una transición pacífica admirada internacionalmente.', answer: 'La Transición fue el proceso de cambio de la dictadura de Franco a la democracia, entre 1975 y 1982. Fue una transición pacífica admirada internacionalmente.' },
        { label: 'c', task: 'Sammenlign Spania og Norge politisk.', solution: 'Tanto España como Noruega son monarquías constitucionales con democracias parlamentarias. Ambos tienen un rey como jefe de estado y un primer ministro que dirige el gobierno.', answer: 'Tanto España como Noruega son monarquías constitucionales con democracias parlamentarias. Ambos tienen un rey como jefe de estado y un primer ministro que dirige el gobierno.' },
        { label: 'd', task: 'Hva skjedde i Chile i 1973?', solution: 'En 1973, el general Pinochet dio un golpe de estado contra el presidente Allende. Esto marcó el comienzo de una dictadura militar que duró hasta 1990.', answer: 'En 1973, el general Pinochet dio un golpe de estado contra el presidente Allende. Esto marcó el comienzo de una dictadura militar que duró hasta 1990.' },
      ], solution: 'a) España es una monarquía constitucional con democracia parlamentaria. El rey es el jefe de estado y el presidente del gobierno dirige el ejecutivo., b) La Transición fue el proceso de cambio de la dictadura de Franco a la democracia, entre 1975 y 1982. Fue una transición pacífica admirada internacionalmente., c) Tanto España como Noruega son monarquías constitucionales con democracias parlamentarias. Ambos tienen un rey como jefe de estado y un primer ministro que dirige el gobierno., d) En 1973, el general Pinochet dio un golpe de estado contra el presidente Allende. Esto marcó el comienzo de una dictadura militar que duró hasta 1990.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-6-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Drøftingsoppgaver om politikk:', subTasks: [
        { label: 'a', task: 'Hvorfor beundres Spanias overgang til demokrati?', solution: 'Fordi den var fredelig og inkluderende. Etter 36 år med diktatur klarte Spania å bygge et stabilt demokrati gjennom dialog, kompromiss og en ny grunnlov.', answer: 'Fordi den var fredelig og inkluderende. Etter 36 år med diktatur klarte Spania å bygge et stabilt demokrati gjennom dialog, kompromiss og en ny grunnlov.' },
        { label: 'b', task: 'Sammenlign demokratiseringen i Spania og Chile.', solution: 'Begge gikk fra diktatur til demokrati, men Spanias overgang var mer fredelig. Chiles var preget av folkeavstemning (1988) og gradvis overgang, med oppgjør med fortiden som pågår ennå.', answer: 'Begge gikk fra diktatur til demokrati, men Spanias overgang var mer fredelig. Chiles var preget av folkeavstemning (1988) og gradvis overgang, med oppgjør med fortiden som pågår ennå.' },
        { label: 'c', task: 'Diskuter utfordringene for demokrati i Latin-Amerika i dag.', solution: 'Los desafíos incluyen la desigualdad social, la corrupción, la polarización política y en algunos países la erosión de las instituciones democráticas.', answer: 'Los desafíos incluyen la desigualdad social, la corrupción, la polarización política y en algunos países la erosión de las instituciones democráticas.' },
        { label: 'd', task: 'Er monarki eller republikk det beste systemet? Drøft.', solution: 'Begge kan være demokratiske. Monarkiet gir stabilitet og kontinuitet (Spania, Norge). Republikken gir folket full valgfrihet for statsoverhodet. Det viktigste er rettsstaten og demokratiske institusjoner.', answer: 'Begge kan være demokratiske. Monarkiet gir stabilitet og kontinuitet (Spania, Norge). Republikken gir folket full valgfrihet for statsoverhodet. Det viktigste er rettsstaten og demokratiske institusjoner.' },
      ], solution: 'a) Fordi den var fredelig og inkluderende. Etter 36 år med diktatur klarte Spania å bygge et stabilt demokrati gjennom dialog, kompromiss og en ny grunnlov., b) Begge gikk fra diktatur til demokrati, men Spanias overgang var mer fredelig. Chiles var preget av folkeavstemning (1988) og gradvis overgang, med oppgjør med fortiden som pågår ennå., c) Los desafíos incluyen la desigualdad social, la corrupción, la polarización política y en algunos países la erosión de las instituciones democráticas., d) Begge kan være demokratiske. Monarkiet gir stabilitet og kontinuitet (Spania, Norge). Republikken gir folket full valgfrihet for statsoverhodet. Det viktigste er rettsstaten og demokratiske institusjoner.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-1-tip-1', type: 'tip', content: `**Nøkkelord:** Spania gikk fra diktatur til demokrati på under et tiår – La Transición er et av de mest vellykkede eksemplene på fredelig systemendring i moderne historie.` },
    { id: 'spansk-3-6-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Politiske systemer**

- Spania: Konstitusjonelt monarki, parlamentarisk demokrati (siden 1978)
- Latin-Amerika: Flest presidentrepublikker, turbulent politisk historie
- La Transición: Spanias fredelige overgang fra Franco-diktatur til demokrati
- Vokabular: democracia, monarquía, república, elecciones, golpe de estado, dictadura
- Sammenligning: Spania og Norge – begge konstitusjonelle monarkier` },
  ],
  exercises: [],
};

// 6.2 Temas de actualidad
export const CHAPTER_SPANSK_3_6_2: TextbookChapter = {
  id: 'spansk-3-6-2',
  courseId: 'spansk-3',
  chapterNumber: '6.2',
  title: 'Temas de actualidad',
  subtitle: 'Aktuelle samfunnstemaer',
  description: 'Lær vokabular og uttrykk for å diskutere aktuelle samfunnstemaer på spansk – nyhetsspråk, innvandring, ulikhet.',
  estimatedMinutes: 45,
  competenceGoals: ['lese og forstå nyhetstekster på spansk', 'diskutere aktuelle temaer', 'bruke nyhetsvokabular'],
  content: [
    { id: 'spansk-3-6-2-intro', type: 'text', content: `## Temas de actualidad

Å kunne diskutere aktuelle temaer er en viktig del av avansert språkkompetanse. Her lærer du vokabular og uttrykk for å lese nyheter og delta i diskusjoner om samfunnsaktuelle temaer.` },
    { id: 'spansk-3-6-2-def-1', type: 'definition', title: 'Aktuelle temaer og nyhetsvokabular', content: `**Nyhetsvokabular:**

| Spansk | Norsk |
|--------|-------|
| la inmigración | innvandring |
| la desigualdad | ulikhet |
| el cambio climático | klimaendring |
| la pobreza | fattigdom |
| el desempleo / el paro | arbeidsledighet |
| la violencia de género | kjønnsbasert vold |
| los refugiados | flyktninger |
| la globalización | globalisering |
| la corrupción | korrupsjon |
| la manifestación | demonstrasjon |
| la crisis económica | økonomisk krise |
| la brecha digital | digitalt gap |

**Nyttige uttrykk:**
- *Según las últimas noticias...* (Ifølge de siste nyhetene...)
- *Es un tema muy debatido...* (Det er et mye debattert tema...)
- *Los expertos opinan que...* (Ekspertene mener at...)` },
    { id: 'spansk-3-6-2-text-1', type: 'text', content: `## Innvandring i den spansktalende verden

**Spania:**
- Fra utvandrerland til innvandrerland: Stor innvandring fra Latin-Amerika, Nord-Afrika og Øst-Europa siden 2000-tallet.
- Debatt om integrasjon, arbeidsmarked og identitet.

**Latin-Amerika:**
- Venezuela-krisen: Millioner har flyktet til nabolandene.
- Mellom-Amerikanske migranter søker mot USA.
- Historisk: Latin-Amerika tok imot europeiske innvandrere (1800-1900-tallet).

**Viktig:** Innvandring er et komplekst tema som krever nyansert diskusjon – unngå forenklinger.` },
    { id: 'spansk-3-6-2-text-2', type: 'text', content: `## Ulikhet i Latin-Amerika

Latin-Amerika er verdens mest **ulike** region:
- **Inntektsforskjeller:** Enorm avstand mellom rik og fattig.
- **Tilgang til utdanning:** Stor variasjon etter sosial klasse.
- **Urfolk og afrolatinos:** Overrepresentert i fattigdomsstatistikken.
- **By vs. land:** Store forskjeller i levekår.

**Uttrykk for å diskutere ulikhet:**
- *La brecha entre ricos y pobres sigue creciendo.* (Gapet mellom rike og fattige fortsetter å vokse.)
- *Es necesario invertir en educación.* (Det er nødvendig å investere i utdanning.)
- *La desigualdad social es uno de los mayores problemas.* (Sosial ulikhet er et av de største problemene.)` },
    { id: 'spansk-3-6-2-example-1', type: 'example', title: 'Eksempel: Nyhetsvokabular', problem: `Hvordan sier du «arbeidsledighet» og «klimaendring» på spansk?`, solution: `**El desempleo** (eller **el paro**) = arbeidsledighet. **El cambio climático** = klimaendring.` },
    { id: 'spansk-3-6-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-6-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match nyhetsbegrep med oversettelse:', subTasks: [
        { label: 'a', task: 'la inmigración', solution: 'innvandring', answer: 'innvandring' },
        { label: 'b', task: 'el cambio climático', solution: 'klimaendring', answer: 'klimaendring' },
        { label: 'c', task: 'la pobreza', solution: 'fattigdom', answer: 'fattigdom' },
        { label: 'd', task: 'los refugiados', solution: 'flyktninger', answer: 'flyktninger' },
      ], solution: 'a) innvandring, b) klimaendring, c) fattigdom, d) flyktninger', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-6-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg riktig begrep for sammenhengen:', subTasks: [
        { label: 'a', task: 'Mange mennesker flykter fra Venezuela til nabolandene.', solution: 'la inmigración / los refugiados', answer: 'la inmigración / los refugiados' },
        { label: 'b', task: 'Temperaturen på jorden stiger.', solution: 'el cambio climático', answer: 'el cambio climático' },
        { label: 'c', task: 'Mange unge i Spania finner ikke jobb.', solution: 'el desempleo / el paro', answer: 'el desempleo / el paro' },
        { label: 'd', task: 'Demonstranter går i gatene for å protestere.', solution: 'la manifestación', answer: 'la manifestación' },
      ], solution: 'a) la inmigración / los refugiados, b) el cambio climático, c) el desempleo / el paro, d) la manifestación', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-2-example-2', type: 'example', title: 'Eksempel: Diskusjon', problem: `Lag en setning om ulikhet i Latin-Amerika.`, solution: `**La desigualdad social en América Latina es uno de los mayores desafíos de la región. La brecha entre ricos y pobres afecta a millones de personas.**` },
    { id: 'spansk-3-6-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-6-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv setninger om aktuelle temaer:', subTasks: [
        { label: 'a', task: 'Om innvandring i Spania', solution: 'La inmigración es un tema importante en España. Muchos inmigrantes vienen de América Latina y Norte de África en busca de mejores oportunidades.', answer: 'La inmigración es un tema importante en España. Muchos inmigrantes vienen de América Latina y Norte de África en busca de mejores oportunidades.' },
        { label: 'b', task: 'Om ulikhet i Latin-Amerika', solution: 'La desigualdad social en América Latina es un problema grave. La brecha entre ricos y pobres sigue siendo enorme.', answer: 'La desigualdad social en América Latina es un problema grave. La brecha entre ricos y pobres sigue siendo enorme.' },
        { label: 'c', task: 'Om klimaendring', solution: 'El cambio climático afecta especialmente a los países más pobres. Es necesario tomar medidas urgentes para reducir las emisiones.', answer: 'El cambio climático afecta especialmente a los países más pobres. Es necesario tomar medidas urgentes para reducir las emisiones.' },
        { label: 'd', task: 'Om arbeidsledighet blant unge', solution: 'El desempleo juvenil es un problema tanto en España como en América Latina. Muchos jóvenes no encuentran trabajo acorde a su formación.', answer: 'El desempleo juvenil es un problema tanto en España como en América Latina. Muchos jóvenes no encuentran trabajo acorde a su formación.' },
      ], solution: 'a) La inmigración es un tema importante en España. Muchos inmigrantes vienen de América Latina y Norte de África en busca de mejores oportunidades., b) La desigualdad social en América Latina es un problema grave. La brecha entre ricos y pobres sigue siendo enorme., c) El cambio climático afecta especialmente a los países más pobres. Es necesario tomar medidas urgentes para reducir las emisiones., d) El desempleo juvenil es un problema tanto en España como en América Latina. Muchos jóvenes no encuentran trabajo acorde a su formación.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-6-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Drøft aktuelle temaer på spansk (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Diskuter innvandring – fordeler og utfordringer.', solution: 'La inmigración enriquece la sociedad con diversidad cultural y mano de obra. Sin embargo, plantea desafíos como la integración y la presión sobre los servicios públicos. Es importante buscar un equilibrio entre la acogida y la capacidad del país receptor.', answer: 'La inmigración enriquece la sociedad con diversidad cultural y mano de obra. Sin embargo, plantea desafíos como la integración y la presión sobre los servicios públicos. Es importante buscar un equilibrio entre la acogida y la capacidad del país receptor.' },
        { label: 'b', task: 'Hvordan påvirker klimaendring Latin-Amerika?', solution: 'El cambio climático afecta gravemente a América Latina: sequías, inundaciones, pérdida de biodiversidad. Los países más vulnerables son los que menos contribuyen al problema. Es una cuestión de justicia global.', answer: 'El cambio climático afecta gravemente a América Latina: sequías, inundaciones, pérdida de biodiversidad. Los países más vulnerables son los que menos contribuyen al problema. Es una cuestión de justicia global.' },
        { label: 'c', task: 'Sammenlign et aktuelt tema i Norge og i et spansktalende land.', solution: 'Tanto Noruega como España enfrentan el desafío de la inmigración. Sin embargo, mientras que en Noruega el debate se centra en la integración cultural, en España se discute más sobre el mercado laboral y la vivienda.', answer: 'Tanto Noruega como España enfrentan el desafío de la inmigración. Sin embargo, mientras que en Noruega el debate se centra en la integración cultural, en España se discute más sobre el mercado laboral y la vivienda.' },
        { label: 'd', task: 'Hvorfor er ulikhet et politisk problem?', solution: 'La desigualdad genera tensión social, inestabilidad política y falta de oportunidades. Cuando una minoría acumula la riqueza, la democracia se debilita porque el poder económico se traduce en poder político.', answer: 'La desigualdad genera tensión social, inestabilidad política y falta de oportunidades. Cuando una minoría acumula la riqueza, la democracia se debilita porque el poder económico se traduce en poder político.' },
      ], solution: 'a) La inmigración enriquece la sociedad con diversidad cultural y mano de obra. Sin embargo, plantea desafíos como la integración y la presión sobre los servicios públicos. Es importante buscar un equilibrio entre la acogida y la capacidad del país receptor., b) El cambio climático afecta gravemente a América Latina: sequías, inundaciones, pérdida de biodiversidad. Los países más vulnerables son los que menos contribuyen al problema. Es una cuestión de justicia global., c) Tanto Noruega como España enfrentan el desafío de la inmigración. Sin embargo, mientras que en Noruega el debate se centra en la integración cultural, en España se discute más sobre el mercado laboral y la vivienda., d) La desigualdad genera tensión social, inestabilidad política y falta de oportunidades. Cuando una minoría acumula la riqueza, la democracia se debilita porque el poder económico se traduce en poder político.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-2-tip-1', type: 'tip', content: `**Lesetips:** Følg spanske nyheter på nettsidene til El País (elpais.com) eller BBC Mundo (bbc.com/mundo) for å øve på nyhetsvokabular.` },
    { id: 'spansk-3-6-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Aktuelle temaer**

- Nøkkeltemaer: innvandring, ulikhet, klimaendring, arbeidsledighet, korrupsjon
- Spania: Fra utvandrerland til innvandrerland
- Latin-Amerika: Verdens mest ulike region
- Uttrykk: Según las últimas noticias..., Es un tema muy debatido...
- Tips: Les nyheter på spansk (El País, BBC Mundo)` },
  ],
  exercises: [],
};

// 6.3 Derechos humanos
export const CHAPTER_SPANSK_3_6_3: TextbookChapter = {
  id: 'spansk-3-6-3',
  courseId: 'spansk-3',
  chapterNumber: '6.3',
  title: 'Derechos humanos',
  subtitle: 'Menneskerettigheter',
  description: 'Utforsk menneskerettigheter i den spansktalende verden – historisk og i dag.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne sentrale menneskerettighetsbegreper', 'diskutere menneskerettighetssituasjonen i spansktalende land', 'uttrykke seg om rettigheter og plikter på spansk'],
  content: [
    { id: 'spansk-3-6-3-intro', type: 'text', content: `## Derechos humanos

Menneskerettigheter er et sentralt tema i den spansktalende verden, spesielt i lys av den historiske erfaringen med diktaturer, borgerkrig og sosial urettferdighet.` },
    { id: 'spansk-3-6-3-def-1', type: 'definition', title: 'Menneskerettigheter (Derechos humanos)', content: `**Sentrale begreper:**

| Spansk | Norsk |
|--------|-------|
| los derechos humanos | menneskerettigheter |
| la Declaración Universal | Verdenserklæringen |
| la libertad de expresión | ytringsfrihet |
| la igualdad | likhet/likestilling |
| la justicia social | sosial rettferdighet |
| la dignidad humana | menneskelig verdighet |
| la tortura | tortur |
| los desaparecidos | de forsvunne |
| la impunidad | straffefrihet |
| la memoria histórica | historisk minne |
| el asilo político | politisk asyl |
| la pena de muerte | dødsstraff |

**FNs verdenserklæring (1948):**
*«Todos los seres humanos nacen libres e iguales en dignidad y derechos.»*
(Alle mennesker er født frie og med lik verdighet og like rettigheter.)` },
    { id: 'spansk-3-6-3-text-1', type: 'text', content: `## Los desaparecidos – de forsvunne

Under militærdiktaturene i Latin-Amerika (1960–80-tallet) ble tusenvis av mennesker "forsvunnet" – bortført, torturert og drept av statsmakten.

**Argentina:** Opp til 30 000 desaparecidos under militærjuntaen (1976–83).
**Chile:** Tusenvis under Pinochet (1973–90).
**Guatemala:** Over 200 000 drept, flertallet urfolk.

**Las Madres de la Plaza de Mayo:**
- Mødre og bestemødre som marsjerte på Plaza de Mayo i Buenos Aires hver torsdag.
- Krevde svar om sine forsvunne barn og barnebarn.
- Et av de mest kraftfulle menneskerettighets-symbolene i verden.
- Fortsetter å marsjere den dag i dag.` },
    { id: 'spansk-3-6-3-text-2', type: 'text', content: `## Menneskerettigheter i Spania

**Borgerkrigen og Franco:**
- Hundretusener drept under borgerkrigen (1936–39).
- Undertrykkelse av politisk opposisjon, regionale språk og kulturer.
- **Ley de Memoria Histórica** (2007): Lov om historisk minne – et forsøk på å anerkjenne ofrene.

**Aktuelle temaer:**
- Ytringsfrihet vs. ny teknologi
- Vold mot kvinner (violencia de género)
- Migranters rettigheter
- Katalonias uavhengighetskonflikt og demokratiske rettigheter

Spania har gjort enorme fremskritt, men som alle land har det fortsatt utfordringer.` },
    { id: 'spansk-3-6-3-example-1', type: 'example', title: 'Eksempel: Menneskerettigheter', problem: `Hvem var Las Madres de la Plaza de Mayo?`, solution: `Mødre (og senere bestemødre) til **desaparecidos** i Argentina som marsjerte på Plaza de Mayo i Buenos Aires for å kreve svar om sine forsvunne familiemedlemmer. De ble et internasjonalt **symbol på motstand** mot statlig undertrykkelse.` },
    { id: 'spansk-3-6-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-6-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match menneskerettighetsbegrep med oversettelse:', subTasks: [
        { label: 'a', task: 'la libertad de expresión', solution: 'ytringsfrihet', answer: 'ytringsfrihet' },
        { label: 'b', task: 'los desaparecidos', solution: 'de forsvunne', answer: 'de forsvunne' },
        { label: 'c', task: 'la justicia social', solution: 'sosial rettferdighet', answer: 'sosial rettferdighet' },
        { label: 'd', task: 'la dignidad humana', solution: 'menneskelig verdighet', answer: 'menneskelig verdighet' },
      ], solution: 'a) ytringsfrihet, b) de forsvunne, c) sosial rettferdighet, d) menneskelig verdighet', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-6-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sant eller usant:', subTasks: [
        { label: 'a', task: 'FNs verdenserklæring ble vedtatt i 1948.', solution: 'Sant.', answer: 'Sant.' },
        { label: 'b', task: 'Las Madres de la Plaza de Mayo demonstrerte i Chile.', solution: 'Usant – de demonstrerte i Buenos Aires, Argentina.', answer: 'Usant – de demonstrerte i Buenos Aires, Argentina.' },
        { label: 'c', task: 'Under Francos diktatur hadde Spania full ytringsfrihet.', solution: 'Usant – det var streng sensur og undertrykkelse.', answer: 'Usant – det var streng sensur og undertrykkelse.' },
        { label: 'd', task: 'Los desaparecidos refererer til folk som forsvant under militærdiktaturene.', solution: 'Sant – tusenvis ble bortført og drept av statsmakten.', answer: 'Sant – tusenvis ble bortført og drept av statsmakten.' },
      ], solution: 'a) Sant., b) Usant – de demonstrerte i Buenos Aires, Argentina., c) Usant – det var streng sensur og undertrykkelse., d) Sant – tusenvis ble bortført og drept av statsmakten.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-3-example-2', type: 'example', title: 'Eksempel: FN-erklæringen', problem: `Oversett til norsk: «Todos los seres humanos nacen libres e iguales en dignidad y derechos.»`, solution: `«Alle mennesker er født **frie** og med lik **verdighet** og like **rettigheter**.» (Artikkel 1 i FNs verdenserklæring om menneskerettigheter.)` },
    { id: 'spansk-3-6-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-6-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Diskuter menneskerettigheter på spansk:', subTasks: [
        { label: 'a', task: 'Hva var las Madres de la Plaza de Mayo sin betydning?', solution: 'Las Madres fueron fundamentales para la defensa de los derechos humanos en Argentina. Su valor al enfrentarse a la dictadura inspiró movimientos similares en todo el mundo.', answer: 'Las Madres fueron fundamentales para la defensa de los derechos humanos en Argentina. Su valor al enfrentarse a la dictadura inspiró movimientos similares en todo el mundo.' },
        { label: 'b', task: 'Hva er Ley de Memoria Histórica?', solution: 'Es una ley española de 2007 que busca reconocer a las víctimas de la Guerra Civil y la dictadura de Franco. Incluye la exhumación de fosas comunes y la retirada de símbolos franquistas.', answer: 'Es una ley española de 2007 que busca reconocer a las víctimas de la Guerra Civil y la dictadura de Franco. Incluye la exhumación de fosas comunes y la retirada de símbolos franquistas.' },
        { label: 'c', task: 'Hvilke menneskerettigheter er truet i dag?', solution: 'Actualmente, la libertad de expresión, los derechos de los migrantes y la igualdad de género siguen siendo temas de preocupación en muchos países.', answer: 'Actualmente, la libertad de expresión, los derechos de los migrantes y la igualdad de género siguen siendo temas de preocupación en muchos países.' },
        { label: 'd', task: 'Hvorfor er historisk minne viktig?', solution: 'La memoria histórica es importante para que las atrocidades no se repitan. Reconocer a las víctimas es un acto de justicia y dignidad.', answer: 'La memoria histórica es importante para que las atrocidades no se repitan. Reconocer a las víctimas es un acto de justicia y dignidad.' },
      ], solution: 'a) Las Madres fueron fundamentales para la defensa de los derechos humanos en Argentina. Su valor al enfrentarse a la dictadura inspiró movimientos similares en todo el mundo., b) Es una ley española de 2007 que busca reconocer a las víctimas de la Guerra Civil y la dictadura de Franco. Incluye la exhumación de fosas comunes y la retirada de símbolos franquistas., c) Actualmente, la libertad de expresión, los derechos de los migrantes y la igualdad de género siguen siendo temas de preocupación en muchos países., d) La memoria histórica es importante para que las atrocidades no se repitan. Reconocer a las víctimas es un acto de justicia y dignidad.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-6-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Drøft menneskerettigheter i dybden:', subTasks: [
        { label: 'a', task: 'Sammenlign menneskerettighetssituasjonen under Franco og under de latinamerikanske diktaturene.', solution: 'Begge regimer undertrykte politiske motstandere, men metodene var ulike. I Latin-Amerika var «forsvinningene» systematiske; i Spania var undertrykkelsen mer langvarig. Begge regioner kjemper fortsatt med oppgjøret etter diktaturet.', answer: 'Begge regimer undertrykte politiske motstandere, men metodene var ulike. I Latin-Amerika var «forsvinningene» systematiske; i Spania var undertrykkelsen mer langvarig. Begge regioner kjemper fortsatt med oppgjøret etter diktaturet.' },
        { label: 'b', task: 'Er det riktig å «glemme» fortiden for å skape fred? Diskuter.', solution: 'Algunos argumentan que olvidar es necesario para la reconciliación. Otros creen que sin memoria no hay justicia. En mi opinión, es posible recordar sin buscar venganza, pero el olvido permite que la historia se repita.', answer: 'Algunos argumentan que olvidar es necesario para la reconciliación. Otros creen que sin memoria no hay justicia. En mi opinión, es posible recordar sin buscar venganza, pero el olvido permite que la historia se repita.' },
        { label: 'c', task: 'Drøft ytringsfrihet vs. hatprat – hvor går grensen?', solution: 'La libertad de expresión es un derecho fundamental, pero no puede ser absoluta. El discurso de odio daña la dignidad humana. El desafío es encontrar un equilibrio entre la libertad y la protección de los derechos de todos.', answer: 'La libertad de expresión es un derecho fundamental, pero no puede ser absoluta. El discurso de odio daña la dignidad humana. El desafío es encontrar un equilibrio entre la libertad y la protección de los derechos de todos.' },
        { label: 'd', task: 'Hva kan vi lære av Las Madres de la Plaza de Mayo?', solution: 'Nos enseñan que la resistencia pacífica es posible incluso frente a la dictadura más brutal. Su valentía demuestra que la búsqueda de la verdad y la justicia es un derecho inalienable.', answer: 'Nos enseñan que la resistencia pacífica es posible incluso frente a la dictadura más brutal. Su valentía demuestra que la búsqueda de la verdad y la justicia es un derecho inalienable.' },
      ], solution: 'a) Begge regimer undertrykte politiske motstandere, men metodene var ulike. I Latin-Amerika var «forsvinningene» systematiske; i Spania var undertrykkelsen mer langvarig. Begge regioner kjemper fortsatt med oppgjøret etter diktaturet., b) Algunos argumentan que olvidar es necesario para la reconciliación. Otros creen que sin memoria no hay justicia. En mi opinión, es posible recordar sin buscar venganza, pero el olvido permite que la historia se repita., c) La libertad de expresión es un derecho fundamental, pero no puede ser absoluta. El discurso de odio daña la dignidad humana. El desafío es encontrar un equilibrio entre la libertad y la protección de los derechos de todos., d) Nos enseñan que la resistencia pacífica es posible incluso frente a la dictadura más brutal. Su valentía demuestra que la búsqueda de la verdad y la justicia es un derecho inalienable.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-3-tip-1', type: 'tip', content: `**Refleksjon:** Menneskerettigheter er ikke bare et historisk tema – de er aktuelle i dag. Tenk over: Hvilke rettigheter tar du for gitt?` },
    { id: 'spansk-3-6-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Menneskerettigheter**

- FNs verdenserklæring (1948): Frihet, likhet, verdighet
- Los desaparecidos: Tusenvis forsvunnet under latinamerikanske diktaturer
- Las Madres de la Plaza de Mayo: Symbol på motstand og krav om sannhet
- Spania: Borgerkrig, Franco, Ley de Memoria Histórica
- Aktuelle temaer: Ytringsfrihet, migranters rettigheter, kjønnsbasert vold
- Vokabular: derechos humanos, libertad de expresión, justicia social, dignidad humana` },
  ],
  exercises: [],
};

// 6.4 Debates y opiniones
export const CHAPTER_SPANSK_3_6_4: TextbookChapter = {
  id: 'spansk-3-6-4',
  courseId: 'spansk-3',
  chapterNumber: '6.4',
  title: 'Debates y opiniones',
  subtitle: 'Debatter og meningsytringer',
  description: 'Lær å delta i formelle debatter på spansk – argumentere, overbevise og uttrykke nyanserte meninger.',
  estimatedMinutes: 45,
  competenceGoals: ['delta i formelle debatter på spansk', 'bruke avanserte debattfraser', 'strukturere argumenter overbevisende'],
  content: [
    { id: 'spansk-3-6-4-intro', type: 'text', content: `## Debates y opiniones

Å kunne debattere er en avansert språkferdighet som krever både vokabular, struktur og evnen til å tenke kritisk. I dette kapittelet lærer du å bygge overbevisende argumenter og delta i formelle debatter på spansk.` },
    { id: 'spansk-3-6-4-def-1', type: 'definition', title: 'Debattferdigheter (Habilidades de debate)', content: `**Debattstruktur:**

1. **Presentación de la tesis:** Presenter din påstand.
2. **Argumentos a favor:** Argumenter for.
3. **Contraargumentos:** Motargumenter du forutser.
4. **Refutación:** Tilbakevis motargumentene.
5. **Conclusión:** Oppsummer og styrk din posisjon.

**Debattfraser:**

| Funksjon | Spansk |
|----------|--------|
| Mening | En mi opinión, / Desde mi punto de vista, |
| Enig | Estoy totalmente de acuerdo con... |
| Uenig | No estoy de acuerdo porque... / Discrepo con... |
| Tillegg | Además, / Asimismo, / Por otra parte, |
| Motargument | Sin embargo, / No obstante, / A pesar de eso, |
| Eksempel | Por ejemplo, / Un claro ejemplo es... |
| Konklusjon | En conclusión, / Para resumir, / En definitiva, |
| Konsesjon | Es cierto que..., pero... / Reconozco que..., sin embargo... |` },
    { id: 'spansk-3-6-4-text-1', type: 'text', content: `## Å bygge et argument

**Struktur for et godt argument:**
1. **Påstand (Tesis):** Det du mener.
2. **Begrunnelse (Justificación):** Hvorfor du mener det.
3. **Bevis/eksempel (Evidencia):** Fakta eller eksempler som støtter.
4. **Sammenbinding (Conclusión):** Knyt tilbake til påstanden.

**Eksempel:**
- **Tesis:** La educación es la clave para reducir la desigualdad.
- **Justificación:** Porque una buena educación ofrece oportunidades iguales a todos.
- **Evidencia:** Los países con mejor educación (Noruega, Finlandia) tienen menor desigualdad.
- **Conclusión:** Por lo tanto, invertir en educación es invertir en igualdad.` },
    { id: 'spansk-3-6-4-text-2', type: 'text', content: `## Overbevisende språk

**Retoriske virkemidler:**
- **Retoriske spørsmål:** *¿Acaso no merecemos todos los mismos derechos?* (Fortjener vi ikke alle de samme rettighetene?)
- **Gjentakelse:** *La justicia, la verdad, la dignidad – eso es lo que pedimos.* (Rettferdighet, sannhet, verdighet – det er det vi ber om.)
- **Konsesjon + motargument:** *Es cierto que la inmigración plantea desafíos, pero los beneficios superan los problemas.* (Det er sant at innvandring byr på utfordringer, men fordelene overgår problemene.)
- **Appell til følelser:** *Pensemos en los niños que no tienen acceso a la educación.* (La oss tenke på barna som ikke har tilgang til utdanning.)
- **Appell til fakta:** *Según la ONU, más de 100 millones de personas son desplazadas.* (Ifølge FN er over 100 millioner mennesker fordrevet.)` },
    { id: 'spansk-3-6-4-example-1', type: 'example', title: 'Eksempel: Argumentbygging', problem: `Bygg et argument for at klimaendring er det viktigste temaet i vår tid.`, solution: `**Tesis:** El cambio climático es el mayor desafío de nuestro tiempo. **Justificación:** Porque afecta a todos los aspectos de la vida humana. **Evidencia:** Las temperaturas globales han subido 1,1°C y los fenómenos extremos son más frecuentes. **Conclusión:** Por lo tanto, debemos actuar ahora.` },
    { id: 'spansk-3-6-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-6-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match debattfrase med funksjon:', subTasks: [
        { label: 'a', task: 'En mi opinión...', solution: 'Uttrykke mening', answer: 'Uttrykke mening' },
        { label: 'b', task: 'Sin embargo...', solution: 'Motargument / innvending', answer: 'Motargument / innvending' },
        { label: 'c', task: 'Por ejemplo...', solution: 'Gi et eksempel', answer: 'Gi et eksempel' },
        { label: 'd', task: 'En conclusión...', solution: 'Oppsummere / avslutte', answer: 'Oppsummere / avslutte' },
      ], solution: 'a) Uttrykke mening, b) Motargument / innvending, c) Gi et eksempel, d) Oppsummere / avslutte', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-6-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig debattfrase:', subTasks: [
        { label: 'a', task: '___, creo que la educación es muy importante. (Etter min mening)', solution: 'En mi opinión', answer: 'En mi opinión' },
        { label: 'b', task: 'Es verdad que hay problemas, ___ también hay soluciones. (likevel)', solution: 'sin embargo / pero', answer: 'sin embargo / pero' },
        { label: 'c', task: '___, los países nórdicos tienen buenos sistemas educativos. (For eksempel)', solution: 'Por ejemplo', answer: 'Por ejemplo' },
        { label: 'd', task: '___, debemos actuar ahora contra el cambio climático. (Avslutningsvis)', solution: 'En conclusión', answer: 'En conclusión' },
      ], solution: 'a) En mi opinión, b) sin embargo / pero, c) Por ejemplo, d) En conclusión', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-4-example-2', type: 'example', title: 'Eksempel: Debatteknikk', problem: `Hvordan kan du innrømme et poeng men likevel holde fast ved din posisjon?`, solution: `Bruk **konsesjon + motargument**: *Es cierto que..., pero/sin embargo...* Eksempel: *Reconozco que la tecnología tiene riesgos, sin embargo, los beneficios para la educación son innegables.*` },
    { id: 'spansk-3-6-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-6-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Bygg argumenter med debattfraser:', subTasks: [
        { label: 'a', task: 'Argumenter FOR at språklæring er viktig.', solution: 'En mi opinión, aprender idiomas es fundamental. Además de abrir puertas profesionales, nos permite entender otras culturas. Por ejemplo, hablar español nos conecta con más de 500 millones de personas.', answer: 'En mi opinión, aprender idiomas es fundamental. Además de abrir puertas profesionales, nos permite entender otras culturas. Por ejemplo, hablar español nos conecta con más de 500 millones de personas.' },
        { label: 'b', task: 'Argumenter MOT for mye skjermtid.', solution: 'Desde mi punto de vista, el exceso de tiempo frente a la pantalla es perjudicial. Según los expertos, afecta la concentración y el sueño. Sin embargo, reconozco que la tecnología también tiene beneficios educativos.', answer: 'Desde mi punto de vista, el exceso de tiempo frente a la pantalla es perjudicial. Según los expertos, afecta la concentración y el sueño. Sin embargo, reconozco que la tecnología también tiene beneficios educativos.' },
        { label: 'c', task: 'Bruk konsesjon + motargument om innvandring.', solution: 'Es cierto que la inmigración plantea desafíos de integración. Sin embargo, los inmigrantes contribuyen a la economía y enriquecen la cultura del país receptor.', answer: 'Es cierto que la inmigración plantea desafíos de integración. Sin embargo, los inmigrantes contribuyen a la economía y enriquecen la cultura del país receptor.' },
        { label: 'd', task: 'Skriv en konklusjon om utdanning.', solution: 'En definitiva, la educación es la base de una sociedad justa e igualitaria. Invertir en educación no es un gasto, sino una inversión en el futuro de todos.', answer: 'En definitiva, la educación es la base de una sociedad justa e igualitaria. Invertir en educación no es un gasto, sino una inversión en el futuro de todos.' },
      ], solution: 'a) En mi opinión, aprender idiomas es fundamental. Además de abrir puertas profesionales, nos permite entender otras culturas. Por ejemplo, hablar español nos conecta con más de 500 millones de personas., b) Desde mi punto de vista, el exceso de tiempo frente a la pantalla es perjudicial. Según los expertos, afecta la concentración y el sueño. Sin embargo, reconozco que la tecnología también tiene beneficios educativos., c) Es cierto que la inmigración plantea desafíos de integración. Sin embargo, los inmigrantes contribuyen a la economía y enriquecen la cultura del país receptor., d) En definitiva, la educación es la base de una sociedad justa e igualitaria. Invertir en educación no es un gasto, sino una inversión en el futuro de todos.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-6-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Delta i debatter – skriv innlegg på 4-5 setninger:', subTasks: [
        { label: 'a', task: 'Argumenter for at kunst og kultur bør prioriteres i skolen.', solution: 'Desde mi punto de vista, el arte y la cultura son esenciales en la educación. No solo desarrollan la creatividad, sino también el pensamiento crítico. Además, estudios demuestran que los alumnos con formación artística obtienen mejores resultados académicos. Es cierto que las materias STEM son importantes, sin embargo, una educación completa debe incluir las humanidades.', answer: 'Desde mi punto de vista, el arte y la cultura son esenciales en la educación. No solo desarrollan la creatividad, sino también el pensamiento crítico. Además, estudios demuestran que los alumnos con formación artística obtienen mejores resultados académicos. Es cierto que las materias STEM son importantes, sin embargo, una educación completa debe incluir las humanidades.' },
        { label: 'b', task: 'Argumenter mot at alle nyheter bør være gratis.', solution: 'Reconozco que el acceso libre a la información es un derecho fundamental. Sin embargo, el periodismo de calidad tiene un coste. Si nadie paga por las noticias, los medios dependerán de la publicidad, lo que compromete su independencia. En conclusión, pagar por las noticias es invertir en democracia.', answer: 'Reconozco que el acceso libre a la información es un derecho fundamental. Sin embargo, el periodismo de calidad tiene un coste. Si nadie paga por las noticias, los medios dependerán de la publicidad, lo que compromete su independencia. En conclusión, pagar por las noticias es invertir en democracia.' },
        { label: 'c', task: 'Debatter: Er globalisering positivt eller negativt?', solution: 'La globalización es un fenómeno complejo con aspectos positivos y negativos. Por una parte, ha reducido la pobreza extrema y facilitado el intercambio cultural. Por otra parte, ha aumentado la desigualdad y la destrucción medioambiental. En mi opinión, el desafío no es frenar la globalización, sino hacerla más justa.', answer: 'La globalización es un fenómeno complejo con aspectos positivos y negativos. Por una parte, ha reducido la pobreza extrema y facilitado el intercambio cultural. Por otra parte, ha aumentado la desigualdad y la destrucción medioambiental. En mi opinión, el desafío no es frenar la globalización, sino hacerla más justa.' },
        { label: 'd', task: 'Debatter: Bør 16-åringer ha stemmerett?', solution: 'Es un tema muy debatido. Los defensores argumentan que los jóvenes de 16 años están informados y afectados por las decisiones políticas. Los opositores señalan que les falta madurez. Desde mi punto de vista, si a los 16 años se puede trabajar y pagar impuestos, también se debería poder votar.', answer: 'Es un tema muy debatido. Los defensores argumentan que los jóvenes de 16 años están informados y afectados por las decisiones políticas. Los opositores señalan que les falta madurez. Desde mi punto de vista, si a los 16 años se puede trabajar y pagar impuestos, también se debería poder votar.' },
      ], solution: 'a) Desde mi punto de vista, el arte y la cultura son esenciales en la educación. No solo desarrollan la creatividad, sino también el pensamiento crítico. Además, estudios demuestran que los alumnos con formación artística obtienen mejores resultados académicos. Es cierto que las materias STEM son importantes, sin embargo, una educación completa debe incluir las humanidades., b) Reconozco que el acceso libre a la información es un derecho fundamental. Sin embargo, el periodismo de calidad tiene un coste. Si nadie paga por las noticias, los medios dependerán de la publicidad, lo que compromete su independencia. En conclusión, pagar por las noticias es invertir en democracia., c) La globalización es un fenómeno complejo con aspectos positivos y negativos. Por una parte, ha reducido la pobreza extrema y facilitado el intercambio cultural. Por otra parte, ha aumentado la desigualdad y la destrucción medioambiental. En mi opinión, el desafío no es frenar la globalización, sino hacerla más justa., d) Es un tema muy debatido. Los defensores argumentan que los jóvenes de 16 años están informados y afectados por las decisiones políticas. Los opositores señalan que les falta madurez. Desde mi punto de vista, si a los 16 años se puede trabajar y pagar impuestos, también se debería poder votar.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-6-4-tip-1', type: 'tip', content: `**Debattips:** Den beste debatten er den der du lytter like mye som du snakker. Bruk «Es cierto que..., pero...» for å vise at du forstår motparten – det styrker ditt eget argument.` },
    { id: 'spansk-3-6-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Debatter og meningsytringer**

- Debattstruktur: Tesis → Argumentos → Contraargumentos → Refutación → Conclusión
- Argumentbygging: Påstand + Begrunnelse + Bevis + Sammenbinding
- Nøkkelfraser: En mi opinión, Sin embargo, Es cierto que... pero..., En conclusión
- Retoriske virkemidler: Retoriske spørsmål, gjentakelse, konsesjon, appell
- Mål: Overbevisende, nyansert og respektfull debatt på spansk` },
  ],
  exercises: [],
};

export const SPANSK_3_CHAPTERS_4_6: TextbookChapter[] = [
  CHAPTER_SPANSK_3_4_1,
  CHAPTER_SPANSK_3_4_2,
  CHAPTER_SPANSK_3_4_3,
  CHAPTER_SPANSK_3_4_4,
  CHAPTER_SPANSK_3_5_1,
  CHAPTER_SPANSK_3_5_2,
  CHAPTER_SPANSK_3_5_3,
  CHAPTER_SPANSK_3_5_4,
  CHAPTER_SPANSK_3_6_1,
  CHAPTER_SPANSK_3_6_2,
  CHAPTER_SPANSK_3_6_3,
  CHAPTER_SPANSK_3_6_4,
];
