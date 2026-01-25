/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Nivå 3 - Kapittel 4-6
 * Klassische Literatur, Moderne Literatur, Geschichte vertieft
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Weimarer Klassik
// ============================================================================

export const CHAPTER_TYSK_3_4_1: TextbookChapter = {
  id: 'tysk-3-4-1',
  courseId: 'tysk-3',
  chapterNumber: '4.1',
  title: 'Weimarer Klassik',
  description: 'Goethe og Schiller - den tyske klassisismens storhetstid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere klassisk tysk litteratur',
    'forstå Weimar-klassikkens idealer',
    'tolke tekstutdrag fra Goethe og Schiller',
  ],
  content: [
    {
      id: 'tysk-3-4-1-intro',
      type: 'text',
      content: `## Weimarer Klassik (1786-1805)

**Weimarer Klassik** er betegnelsen på en av de viktigste periodene i tysk litteraturhistorie. Perioden er oppkalt etter byen Weimar, der de to store forfatterne Johann Wolfgang von Goethe og Friedrich Schiller bodde og arbeidet.

Klassisismen søkte harmoni mellom følelser og fornuft, og hentet inspirasjon fra antikkens Hellas og Roma. Idealene var:
- **Das Wahre** (det sanne)
- **Das Gute** (det gode)
- **Das Schöne** (det vakre)

Hovedverkene fra denne perioden regnes som høydepunkter i verdenslitteraturen.`,
    },
    {
      id: 'tysk-3-4-1-def-1',
      type: 'definition',
      title: 'Sentrale begreper i Weimarer Klassik',
      content: `**Humanität** (humanitet): Troen på menneskets iboende verdighet og evne til forbedring.

**Bildung** (dannelse): Helhetlig utvikling av menneskets intellekt, moral og estetikk.

**Das Ideal der Antike**: Antikkens idealer om harmoni, balanse og skjønnhet som forbilde.

**Ästhetische Erziehung**: Schillers ide om at kunst og skjønnhet kan foredle mennesket moralsk.`,
    },
    {
      id: 'tysk-3-4-1-text-1',
      type: 'text',
      content: `## Johann Wolfgang von Goethe (1749-1832)

Goethe regnes som den største tyske forfatter gjennom tidene. Han var dikter, dramatiker, naturvitenskapsmann og statsmann i Weimar.

**Hovedverk:**
- **Faust I og II** (1808/1832) - Dramaet om den lærde som gjør en pakt med djevelen
- **Die Leiden des jungen Werthers** (1774) - Brevromanen som gjorde ham verdensberømt
- **Wilhelm Meisters Lehrjahre** (1795-96) - Dannelsesromanen
- **Iphigenie auf Tauris** (1787) - Drama om humanitet og forsoning`,
    },
    {
      id: 'tysk-3-4-1-example-1',
      type: 'example',
      title: 'Tekstutdrag: Goethe - Faust (Studierzimmer)',
      problem: `Les dette berømte utdraget fra Faust:

*"Zwei Seelen wohnen, ach! in meiner Brust,
Die eine will sich von der andern trennen;
Die eine hält, in derber Liebeslust,
Sich an die Welt mit klammernden Organen;
Die andre hebt gewaltsam sich vom Dust
Zu den Gefilden hoher Ahnen."*

Hva uttrykker dette sitatet om menneskets natur?`,
      solution: `**Oversettelse:**
"To sjeler bor, akk! i mitt bryst,
Den ene vil skilles fra den andre;
Den ene holder seg, i grov kjærlighetslyst,
Fast til verden med klyngende organer;
Den andre hever seg voldsomt fra støvet
Til høye forfedres marker."

**Tolkning:**
Sitatet uttrykker menneskets indre splittelse mellom:
- **Det jordiske**: Sanselighet, materielle gleder, det kroppslige
- **Det åndelige**: Streben etter det høyere, transcendens, åndelig utvikling

Dette er et sentralt tema i Faust og i Weimar-klassikken generelt - konflikten mellom menneskets doble natur.`,
    },
    {
      id: 'tysk-3-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-1-ex-1',
        number: '4.1.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Faust-sitatet:',
        subTasks: [
          { label: 'a', task: 'Hvilke to "sjeler" beskriver Faust?', solution: 'Den jordiske/sanselige sjelen og den åndelige/streben etter det høyere.' },
          { label: 'b', task: 'Hvilket stilistisk virkemiddel brukes med "Zwei Seelen"?', solution: 'Metafor - de to sjelene representerer menneskets indre konflikt.' },
          { label: 'c', task: 'Hvordan relaterer dette til klassisismens idealer?', solution: 'Klassisismen søkte harmoni mellom følelser og fornuft - Faust opplever nettopp denne konflikten.' },
        ],
        solution: 'Sitatet viser menneskets kamp mellom det jordiske og det åndelige - et sentralt tema i Weimar-klassikken.',
        hints: ['Tenk på klassisismens ideal om harmoni', 'Metaforer er sentrale i Goethes diktning'],
      },
    },
    {
      id: 'tysk-3-4-1-text-2',
      type: 'text',
      content: `## Friedrich Schiller (1759-1805)

Schiller var Goethes nære venn og samarbeidspartner. Han var dramatiker, dikter og filosof, kjent for sine dramaer om frihet og motstand mot tyranni.

**Hovedverk:**
- **Die Räuber** (1781) - Drama om opprør mot urettferdighet
- **Kabale und Liebe** (1784) - Tragedie om klasseforskjeller
- **Don Carlos** (1787) - Drama om frihet og vennskap
- **Wilhelm Tell** (1804) - Frihetsdrama om den sveitsiske helten
- **Über die ästhetische Erziehung des Menschen** (1795) - Filosofiske brev om kunstens rolle`,
    },
    {
      id: 'tysk-3-4-1-example-2',
      type: 'example',
      title: 'Tekstutdrag: Schiller - Die Räuber (1. akt)',
      problem: `Les Karl Moors berømte monolog:

*"Menschen! Menschen! falsche, heuchlerische Krokodilbrut!
Ihre Augen sind Wasser! ihre Herzen sind Erz!
Küsse auf den Lippen! Schwerter im Busen!"*

Analyser språket og tematikken.`,
      solution: `**Oversettelse:**
"Mennesker! Mennesker! falsk, hyklerisk krokodilleavkom!
Deres øyne er vann! Deres hjerter er kobber!
Kyss på leppene! Sverd i barmen!"

**Analyse:**
- **Anaforer**: "Menschen! Menschen!" - forsterker desperasjonen
- **Metaforer**: "Krokodilbrut" (krokodilletårer = falsk sorg), "Herzen sind Erz" (harde hjerter)
- **Antiteser**: "Küsse auf den Lippen / Schwerter im Busen" - motsetning mellom ytre vennlighet og indre ondskap

**Tema**: Karls raseri over samfunnets hykleri og urettferdighet - kjernen i Sturm und Drang-dramaet.`,
    },
    {
      id: 'tysk-3-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-1-ex-2',
        number: '4.1.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Goethe og Schiller:',
        subTasks: [
          { label: 'a', task: 'Hva kjennetegner Goethes Faust tematisk?', solution: 'Menneskets streben etter kunnskap og erfaring, pakten med det onde, indre splittelse.' },
          { label: 'b', task: 'Hva kjennetegner Schillers Die Räuber tematisk?', solution: 'Opprør mot urettferdighet, frihetslengsel, kritikk av samfunnets hykleri.' },
          { label: 'c', task: 'Hva har verkene til felles som klassiske tekster?', solution: 'Begge utforsker menneskets natur, moralske dilemmaer og forholdet mellom individ og samfunn.' },
        ],
        solution: 'Begge forfattere utforsker menneskets kompleksitet, men Goethe fokuserer mer på indre konflikter mens Schiller retter blikket mot samfunnet.',
        hints: ['Tenk på hver forfatters hovedanliggende', 'Klassisismen handler om menneskets utvikling'],
      },
    },
    {
      id: 'tysk-3-4-1-note-1',
      type: 'note',
      content: `**Viktig for eksamen:** Weimarer Klassik skilles fra Sturm und Drang (1770-1785) som kom før. Sturm und Drang var mer følelsesladet og opprørsk, mens klassisismen søkte harmoni og balanse. Schillers "Die Räuber" tilhører egentlig Sturm und Drang, men Schiller utviklet seg mot klassisisme.`,
    },
    {
      id: 'tysk-3-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test din kunnskap om Weimarer Klassik:',
        subTasks: [
          { label: 'a', task: 'I hvilken by bodde Goethe og Schiller?', solution: 'Weimar' },
          { label: 'b', task: 'Hva er de tre klassiske idealene (tysk)?', solution: 'Das Wahre, das Gute, das Schöne' },
          { label: 'c', task: 'Hva handler Faust om i kortform?', solution: 'En lærd mann som gjør en pakt med djevelen for kunnskap og erfaring.' },
          { label: 'd', task: 'Hvilket Schiller-drama handler om den sveitsiske frihetshelten?', solution: 'Wilhelm Tell' },
        ],
        solution: 'a) Weimar, b) Das Wahre, das Gute, das Schöne, c) Pakt med djevelen, d) Wilhelm Tell',
        hints: ['Perioden er oppkalt etter byen', 'Klassisismens tre idealer er sentrale'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Romantik
// ============================================================================

export const CHAPTER_TYSK_3_4_2: TextbookChapter = {
  id: 'tysk-3-4-2',
  courseId: 'tysk-3',
  chapterNumber: '4.2',
  title: 'Romantik',
  description: 'Novalis, E.T.A. Hoffmann og Heinrich Heine - den tyske romantikken.',
  estimatedMinutes: 50,
  competenceGoals: [
    'identifisere romantiske trekk i litteraturen',
    'analysere tekster av sentrale romantikere',
    'forstå romantikkens reaksjon mot opplysningstiden',
  ],
  content: [
    {
      id: 'tysk-3-4-2-intro',
      type: 'text',
      content: `## Die deutsche Romantik (1795-1848)

Romantikken var en reaksjon mot opplysningstidens fornuftsdyrking og klassisismens strenge former. Romantikerne søkte det mystiske, det følelsesmessige og det fantastiske.

**Sentrale temaer:**
- **Sehnsucht** (lengsel) - lengsel etter det uoppnåelige
- **Die blaue Blume** (den blå blomsten) - symbol på romantisk lengsel
- **Natur und Gefühl** - naturens og følelsenes primat
- **Das Wunderbare** - det vidunderlige og overnaturlige
- **Volkspoesie** - interesse for folkeeventyr og sagn`,
    },
    {
      id: 'tysk-3-4-2-def-1',
      type: 'definition',
      title: 'Romantikkens faser',
      content: `**Frühromantik** (tidligromantikk, 1795-1804):
Jena-kretsen med brødrene Schlegel, Novalis og Tieck. Teoretisk og filosofisk orientert.

**Hochromantik** (høyromantikk, 1804-1815):
Heidelberg-romantikken med Arnim, Brentano og brødrene Grimm. Fokus på folkeeventyr og nasjonalromantikk.

**Spätromantik** (senromantikk, 1815-1848):
E.T.A. Hoffmann, Joseph von Eichendorff og Heinrich Heine. Mørkere toner, ironi og fantastikk.`,
    },
    {
      id: 'tysk-3-4-2-text-1',
      type: 'text',
      content: `## Novalis (1772-1801)

Friedrich von Hardenberg, kjent som Novalis, var en sentral skikkelse i tidligromantikken. Hans korte liv (han døde bare 28 år gammel) er omgitt av legender.

**Hovedverk:**
- **Hymnen an die Nacht** (1800) - Dikt om natt, død og kjærlighet
- **Heinrich von Ofterdingen** (ufullendt) - Roman med den berømte "blaue Blume"

Novalis skapte symbolet **die blaue Blume** som ble romantikkens viktigste symbol - en uoppnåelig blomst som representerer lengsel, poesi og det uendelige.`,
    },
    {
      id: 'tysk-3-4-2-example-1',
      type: 'example',
      title: 'Tekstutdrag: Novalis - Heinrich von Ofterdingen',
      problem: `Les dette utdraget om den blå blomsten:

*"Was ihn aber mit voller Macht anzog, war eine hohe lichtblaue Blume,
die zunächst an der Quelle stand, und ihn mit ihren breiten,
glänzenden Blättern berührte. Rund um sie her standen unzählige
Blumen von allen Farben, und der köstlichste Geruch erfüllte die Luft."*

Hva symboliserer den blå blomsten?`,
      solution: `**Oversettelse:**
"Men det som tiltrakk ham med full kraft, var en høy lyseblå blomst som sto nærmest kilden, og berørte ham med sine brede, skinnende blader. Rundt den sto utallige blomster i alle farger, og den herligste duft fylte luften."

**Tolkning av den blå blomsten:**
- **Romantisk lengsel (Sehnsucht)**: Blomsten representerer det uoppnåelige idealet
- **Poesi og kunst**: Symboliserer den skapende kunsten
- **Det uendelige**: Peker mot noe transcendent, bortenfor det hverdagslige
- **Kjærlighet**: I romanen forbindes blomsten med Heinrichs elskede Mathilde`,
    },
    {
      id: 'tysk-3-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-2-ex-1',
        number: '4.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser den blå blomsten som symbol:',
        subTasks: [
          { label: 'a', task: 'Hva er "Sehnsucht" på norsk?', solution: 'Lengsel (ofte romantisk lengsel etter det uoppnåelige)' },
          { label: 'b', task: 'Hvorfor er blomsten BLÅ og ikke en annen farge?', solution: 'Blå symboliserer det fjerne, drømmende, uendelige - himmelen, havet, det uoppnåelige.' },
          { label: 'c', task: 'Hvordan representerer blomsten romantikkens idealer?', solution: 'Den representerer lengselen etter det perfekte, det poetiske og det transcendente.' },
        ],
        solution: 'Den blå blomsten er romantikkens hovedsymbol for lengsel etter det uoppnåelige idealet.',
        hints: ['Blå er fjernhetens og drømmens farge', 'Sehnsucht er et nøkkelbegrep'],
      },
    },
    {
      id: 'tysk-3-4-2-text-2',
      type: 'text',
      content: `## E.T.A. Hoffmann (1776-1822)

Ernst Theodor Amadeus Hoffmann var jurist, komponist og forfatter. Han er kjent for sine fantastiske og ofte skrekkelige fortellinger som blander virkelighet og fantasi.

**Hovedverk:**
- **Der Sandmann** (1816) - Fortelling om kunstig intelligens og galskap
- **Der goldene Topf** (1814) - Eventyrlig fortelling om poesi og borgerlighet
- **Die Elixiere des Teufels** (1815-16) - Roman om doppelgangere og identitet
- **Nussknacker und Mausekönig** (1816) - Grunnlaget for balletten "Nøtteknekkeren"`,
    },
    {
      id: 'tysk-3-4-2-example-2',
      type: 'example',
      title: 'Tekstutdrag: E.T.A. Hoffmann - Der Sandmann',
      problem: `Fra Nathanaels brev om Sandmannen:

*"Es war der Sandmann, rief meine Mutter, und wirklich hörte ich auch
den schweren langsamen Tritt die Treppe herauf. Das muss ein
abscheulicher Mann sein, dachte ich, der die Kinder von den Eltern
trennt - der Sandmann!"*

Analyser stemningen og tematikken.`,
      solution: `**Oversettelse:**
"Det var Sandmannen, ropte min mor, og virkelig hørte jeg også de tunge, langsomme skrittene opp trappen. Det må være en avskyelig mann, tenkte jeg, som skiller barna fra foreldrene - Sandmannen!"

**Analyse:**
- **Stemning**: Uhyggelig, angstfylt, barnlig frykt som blir voksen nevrose
- **Det uhyggelige (das Unheimliche)**: Det kjente (eventyrfiguren Sandmannen) blir truende
- **Dobbelthet**: Sandmannen er både uskyldig figur og skremmende trussel
- **Tema**: Grensen mellom fantasi og virkelighet, barndomstraumer, galskap`,
    },
    {
      id: 'tysk-3-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-2-ex-2',
        number: '4.2.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser Hoffmanns stil:',
        subTasks: [
          { label: 'a', task: 'Hva menes med "das Unheimliche" (det uhyggelige)?', solution: 'Når noe kjent plutselig blir fremmed og skremmende - det hjemlige som blir uhjemlig.' },
          { label: 'b', task: 'Hvordan blander Hoffmann virkelighet og fantasi?', solution: 'Leseren vet aldri om det overnaturlige er virkelig eller hovedpersonens galskap.' },
          { label: 'c', task: 'Hvorfor er Der Sandmann viktig i litteraturhistorien?', solution: 'Den inspirerte Freuds essay om "das Unheimliche" og er en forløper for moderne psykologisk skrekkfiksjon.' },
        ],
        solution: 'Hoffmann mestret det uhyggelige ved å la grensen mellom virkelighet og fantasi være uklar.',
        hints: ['Freud skrev om denne teksten', 'Det uhyggelige handler om det kjentes fremmedgjøring'],
      },
    },
    {
      id: 'tysk-3-4-2-text-3',
      type: 'text',
      content: `## Heinrich Heine (1797-1856)

Heine er en overgangsfigur mellom romantikk og realisme. Han kombinerte romantisk lyrikk med skarp ironi og samfunnskritikk. Som jøde og liberal emigrerte han til Paris i 1831.

**Hovedverk:**
- **Buch der Lieder** (1827) - Diktsamling med berømte kjærlighetsdikt
- **Deutschland. Ein Wintermärchen** (1844) - Satirisk reisedikt om Tyskland
- **Die Lorelei** (1824) - Det mest kjente tyske diktet

Heine kunne skrive vakker romantisk lyrikk, men brøt ofte stemningen med ironi.`,
    },
    {
      id: 'tysk-3-4-2-example-3',
      type: 'example',
      title: 'Tekstutdrag: Heinrich Heine - Die Lorelei',
      problem: `*"Ich weiß nicht, was soll es bedeuten,
Dass ich so traurig bin;
Ein Märchen aus alten Zeiten,
Das kommt mir nicht aus dem Sinn.

Die Luft ist kühl und es dunkelt,
Und ruhig fließt der Rhein;
Der Gipfel des Berges funkelt
Im Abendsonnenschein."*

Identifiser romantiske trekk i diktet.`,
      solution: `**Oversettelse:**
"Jeg vet ikke hva det skal bety,
at jeg er så trist;
et eventyr fra gamle tider,
det går meg ikke av sinne.

Luften er kjølig og det mørkner,
og rolig flyter Rhinen;
fjellets topp funkler
i aftensolen."

**Romantiske trekk:**
- **Stemning**: Melankolsk, drømmende, vemodig
- **Natur**: Rhinen, fjellet, aftensolen - naturen som stemningsbærer
- **Det mytiske**: Referanse til sagnet om Lorelei-klippen
- **Lengsel**: "Ich weiß nicht, was soll es bedeuten" - uforklarlig sorg
- **Volkslied-stil**: Enkel, sangbar form inspirert av folkediktning`,
    },
    {
      id: 'tysk-3-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test din kunnskap om romantikken:',
        subTasks: [
          { label: 'a', task: 'Hva symboliserer "die blaue Blume"?', solution: 'Romantisk lengsel, det uoppnåelige idealet, poesien.' },
          { label: 'b', task: 'Hvem samlet tyske folkeeventyr?', solution: 'Brødrene Grimm (Jacob og Wilhelm Grimm).' },
          { label: 'c', task: 'Hva er spesielt med Heines stil?', solution: 'Han kombinerer romantisk lyrikk med ironi og samfunnskritikk.' },
          { label: 'd', task: 'Hvilket Hoffmann-verk ble til en berømt ballett?', solution: 'Nussknacker und Mausekönig (Nøtteknekkeren).' },
        ],
        solution: 'a) Lengsel/det uoppnåelige, b) Brødrene Grimm, c) Romantikk + ironi, d) Nøtteknekkeren',
        hints: ['Den blå blomsten er romantikkens hovedsymbol', 'Grimms eventyr er kjent verden over'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Realismus
// ============================================================================

export const CHAPTER_TYSK_3_4_3: TextbookChapter = {
  id: 'tysk-3-4-3',
  courseId: 'tysk-3',
  chapterNumber: '4.3',
  title: 'Realismus',
  description: 'Theodor Fontane og den realistiske tradisjonen i tysk litteratur.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå realisimens kjennetegn',
    'analysere Fontanes prosa',
    'sammenligne realisme med romantikk',
  ],
  content: [
    {
      id: 'tysk-3-4-3-intro',
      type: 'text',
      content: `## Deutscher Realismus (1848-1890)

Etter revolusjonsåret 1848 kom en ny litterær periode som fokuserte på hverdagslivet og samfunnet slik det faktisk var. Realismen avviste romantikkens eskapisme og klassisismens idealisme.

**Kjennetegn:**
- **Objektivitet**: Nøktern, observerende fortellerstil
- **Hverdagsliv**: Fokus på vanlige menneskers liv
- **Samfunn**: Skildring av sosiale forhold og klassekonflikter
- **Psykologi**: Interesse for karakterers indre liv
- **Regional forankring**: Ofte knyttet til bestemte landskap`,
    },
    {
      id: 'tysk-3-4-3-def-1',
      type: 'definition',
      title: 'Poetischer Realismus',
      content: `**Poetischer Realismus** (poetisk realisme) er den tyske varianten av realisme. I motsetning til fransk naturalisme unngår den det stygge og brutale, og søker en "forklaring" eller "forsonende" avslutning.

**Kjennetegn:**
- Virkelighetsnær, men ikke brutal
- Fokus på borgerskapet og landsbygda
- Ofte nostalgisk undertone
- Humor og ironi som virkemidler
- "Verklärung" (forskjønnelse) av virkeligheten`,
    },
    {
      id: 'tysk-3-4-3-text-1',
      type: 'text',
      content: `## Theodor Fontane (1819-1898)

Fontane regnes som den største tyske romanforfatteren i realistisk tradisjon. Han begynte som journalist og reiseskribent, og skrev sine beste romaner etter fylte 60 år.

**Hovedverk:**
- **Effi Briest** (1895) - Mesterverket om ekteskapsbrudd og samfunnskonvensjoner
- **Frau Jenny Treibel** (1892) - Satire over borgerskapet
- **Der Stechlin** (1898) - Hans siste roman om gammel adel
- **Irrungen, Wirrungen** (1888) - Kjærlighet på tvers av klasser

Fontane er kjent for sin subtile ironi og presise samfunnsskildringer.`,
    },
    {
      id: 'tysk-3-4-3-example-1',
      type: 'example',
      title: 'Tekstutdrag: Fontane - Effi Briest (Åpning)',
      problem: `Les romanens berømte åpning:

*"In Front des schon seit Kurfürst Georg Wilhelm von der Familie von
Briest bewohnten Herrenhauses zu Hohen-Cremmen fiel heller
Sonnenschein auf die mittagsstille Dorfstraße, während nach der
Park- und Gartenseite hin ein rechtwinkliger Flügelbau einen
breiten Schatten auf die Rasenplätze warf."*

Hva etablerer denne åpningen?`,
      solution: `**Oversettelse:**
"Foran herskapshuset i Hohen-Cremmen, som familien von Briest hadde bebodd siden kurfyrst Georg Wilhelm, falt sterkt solskinn på den middagsstille landsbyveien, mens en rettvinklet fløybygning mot park- og hagesiden kastet en bred skygge på plenene."

**Analyse:**
- **Setting**: Prøyssisk landsadelsmiljø (Junker-klassen)
- **Tradisjon**: Familien har bodd her siden 1600-tallet - kontinuitet og konvensjon
- **Kontraststruktur**: Sol (foran) vs. skygge (bak) - antyder skjulte ting
- **Detaljrikdom**: Typisk realistisk presisjon i beskrivelsen
- **Symbolikk**: Skyggen varsler om de mørke hendelsene som kommer`,
    },
    {
      id: 'tysk-3-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-3-ex-1',
        number: '4.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Effi Briest-utdraget:',
        subTasks: [
          { label: 'a', task: 'Hvilken samfunnsklasse skildres?', solution: 'Den prøyssiske landadelen (Junker-klassen).' },
          { label: 'b', task: 'Hva symboliserer kontrasten mellom sol og skygge?', solution: 'Fasaden vs. virkeligheten, det synlige vs. det skjulte, lykke vs. tragedie.' },
          { label: 'c', task: 'Hvorfor nevnes familiens lange historie?', solution: 'Det understreker tradisjonens tyngde og samfunnskonvensjonenes makt.' },
        ],
        solution: 'Fontane bruker subtil symbolikk og detaljerte settingbeskrivelser for å forberede leseren på tragedien.',
        hints: ['Lys og skygge er klassiske symboler', 'Realismen er opptatt av samfunnsklasser'],
      },
    },
    {
      id: 'tysk-3-4-3-text-2',
      type: 'text',
      content: `## Effi Briest - Handling og tema

**Handling:**
17 år gamle Effi giftes bort til den 20 år eldre embetsmannen Baron von Innstetten. I et øyeblikk av kjedsomhet og ensomhet innleder hun et kort forhold til major Crampas. Seks år senere oppdager Innstetten bevisene og dreper Crampas i duell. Effi blir utstøtt av samfunnet og familien, og dør ung.

**Hovedtemaer:**
- **Gesellschaftliche Konventionen**: Samfunnskonvensjoner vs. individets behov
- **Ehre** (ære): Den maskuline æres krav
- **Schuld und Unschuld**: Skyld og uskyld - hvem er egentlig skyldig?
- **Erziehung**: Oppdragelse og dens konsekvenser`,
    },
    {
      id: 'tysk-3-4-3-example-2',
      type: 'example',
      title: 'Tekstutdrag: Effi Briest - Effis siste ord',
      problem: `Fra romanens slutt:

*"Und ich habe sie auch - aber das andere, das Harte, das...
und dann im letzten, das war doch wohl nicht so recht von mir.
Und dann schämt man sich, wenn man es so recht bedenkt...
Aber Schuld... das ist viel zuviel..."*

Hva uttrykker Effi her om skyld?`,
      solution: `**Oversettelse:**
"Og jeg har henne også - men det andre, det harde, det...
og så til sist, det var vel ikke så riktig av meg.
Og så skammer man seg, når man tenker ordentlig over det...
Men skyld... det er altfor mye..."

**Tolkning:**
- Effi innrømmer sin feil ("nicht so recht von mir")
- Men avviser begrepet "Schuld" (skyld) som for sterkt
- Hun skiller mellom feil og skyld
- Fontanes budskap: Samfunnet er like skyldige som Effi
- **Kritikk av æreskodeksen**: Innstetten drepte Crampas for ærens skyld, ikke av personlig hat`,
    },
    {
      id: 'tysk-3-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-3-ex-2',
        number: '4.3.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter skyldspørsmålet i Effi Briest:',
        subTasks: [
          { label: 'a', task: 'Hvem bærer "skyld" for tragedien - list opp kandidatene.', solution: 'Effi selv, Innstetten, Crampas, foreldrene som giftet henne bort, samfunnet/konvensjonene.' },
          { label: 'b', task: 'Hvorfor kritiserer Fontane duellvesenet?', solution: 'Innstetten dreper Crampas 6 år etter affæren - av plikt til konvensjonene, ikke personlig behov for hevn.' },
          { label: 'c', task: 'Hva sier romanen om forholdet mellom individ og samfunn?', solution: 'Samfunnets konvensjoner knuser individet - alle handler ut fra "hva man bør gjøre", ikke hva de føler.' },
        ],
        solution: 'Fontane fordeler skylden på hele samfunnssystemet og viser hvordan konvensjoner ødelegger mennesker.',
        hints: ['Tenk på alle som bidrar til tragedien', 'Innstettens motivasjon er sentral'],
      },
    },
    {
      id: 'tysk-3-4-3-text-3',
      type: 'text',
      content: `## Naturalismus - En radikalisering

**Naturalismen** (ca. 1880-1900) gikk lenger enn realismen i å skildre virkeligheten "slik den er", inkludert det stygge og brutale.

**Kjennetegn:**
- Vitenskapelig tilnærming til litteratur
- Arv og miljø bestemmer menneskets skjebne (determinisme)
- Skildring av fattigdom, sykdom, alkoholisme
- Dialektbruk og hverdagsspråk

**Hovedforfatter:** Gerhart Hauptmann (1862-1946)
- **Die Weber** (1892) - Drama om de schlesiske veverne
- **Bahnwärter Thiel** (1888) - Novelle om en jernbanevokter`,
    },
    {
      id: 'tysk-3-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign realisme og naturalisme:',
        subTasks: [
          { label: 'a', task: 'Hva er "poetischer Realismus"?', solution: 'Tysk realisme som unngår det brutale og ofte har forsonende elementer.' },
          { label: 'b', task: 'Hva skiller naturalismen fra realismen?', solution: 'Naturalismen er mer vitenskapelig, deterministisk og skildrer det stygge uten å forskjønne.' },
          { label: 'c', task: 'Hvilke samfunnslag skildres i Die Weber?', solution: 'Arbeiderklassen/fattige vevere - naturalismen fokuserer på de lavere klassene.' },
        ],
        solution: 'Naturalismen radikaliserer realismen med vitenskapelig determinisme og fokus på samfunnets skyggeside.',
        hints: ['Poetisch betyr her forskjønnende/forsonende', 'Determinisme = arv og miljø bestemmer'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Literarische Analyse
// ============================================================================

export const CHAPTER_TYSK_3_4_4: TextbookChapter = {
  id: 'tysk-3-4-4',
  courseId: 'tysk-3',
  chapterNumber: '4.4',
  title: 'Literarische Analyse',
  description: 'Metoder og begreper for litterær analyse på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke litteraturvitenskapelige begreper på tysk',
    'analysere tekster systematisk',
    'skrive litterær analyse på tysk',
  ],
  content: [
    {
      id: 'tysk-3-4-4-intro',
      type: 'text',
      content: `## Litterær analyse - Grunnlag

Å analysere litteratur krever et sett med verktøy og begreper. Her lærer du de viktigste begrepene på tysk og hvordan du strukturerer en litterær analyse.

**De tre hovedområdene:**
1. **Inhalt** (innhold) - Hva handler teksten om?
2. **Form** (form) - Hvordan er teksten bygget opp?
3. **Sprache** (språk) - Hvilke språklige virkemidler brukes?`,
    },
    {
      id: 'tysk-3-4-4-def-1',
      type: 'definition',
      title: 'Narrative Begriffe (Narrative begreper)',
      content: `**Der Erzähler** (fortelleren):
- **Ich-Erzähler**: Førstepersonsforteller
- **Er/Sie-Erzähler**: Tredjepersonsforteller
- **Allwissender Erzähler**: Allvitende forteller
- **Personaler Erzähler**: Begrenset synsvinkel

**Die Erzählzeit** (fortelletid) vs. **erzählte Zeit** (fortalt tid)
**Das Leitmotiv** (ledemotiv): Gjentakende element
**Die Rückblende** (tilbakeblikk) / **Vorausdeutung** (frampek)`,
    },
    {
      id: 'tysk-3-4-4-text-1',
      type: 'text',
      content: `## Stilistische Mittel (Stilistiske virkemidler)

| Tysk begrep | Norsk | Eksempel |
|-------------|-------|----------|
| die Metapher | metafor | "Das Leben ist eine Reise" |
| der Vergleich | sammenligning | "schnell wie der Blitz" |
| die Personifikation | personifikasjon | "Die Sonne lacht" |
| die Alliteration | alliterasjon | "Mann und Maus" |
| die Anapher | anafor | "Ich kam, ich sah, ich siegte" |
| die Hyperbel | hyperbol | "todmüde" |
| die Ironie | ironi | "Das hast du toll gemacht!" |
| der Euphemismus | eufemisme | "entschlafen" for "sterben" |
| die Antithese | antitese | "Krieg und Frieden" |`,
    },
    {
      id: 'tysk-3-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Identifisere virkemidler',
      problem: `Identifiser stilistiske virkemidler i disse setningene:

a) "Der Tod klopfte an seine Tür."
b) "Sie war schön wie die aufgehende Sonne."
c) "Friede, Freude, Eierkuchen"
d) "Er ist von uns gegangen."`,
      solution: `a) **Personifikation** - Døden "banker" som en person
b) **Vergleich** (sammenligning) - "wie" signaliserer sammenligningen
c) **Alliteration** - Gjentakelse av F-lyden
d) **Euphemismus** - "gegangen" i stedet for "gestorben" (døde)`,
    },
    {
      id: 'tysk-3-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-4-ex-1',
        number: '4.4.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser virkemidlene:',
        subTasks: [
          { label: 'a', task: '"Das Herz der Stadt" - hvilket virkemiddel?', solution: 'Metapher (metafor)' },
          { label: 'b', task: '"Ich habe es dir tausendmal gesagt!" - hvilket?', solution: 'Hyperbel (overdrivelse)' },
          { label: 'c', task: '"Heiß und kalt, Tag und Nacht" - hvilket?', solution: 'Antithese (motsetning)' },
          { label: 'd', task: '"Wind und Wetter" - hvilket?', solution: 'Alliteration' },
        ],
        solution: 'a) Metapher, b) Hyperbel, c) Antithese, d) Alliteration',
        hints: ['Metafor bruker ikke "wie"', 'Hyperbel er overdrivelse'],
      },
    },
    {
      id: 'tysk-3-4-4-text-2',
      type: 'text',
      content: `## Struktur einer Textanalyse

**1. Einleitung (Innledning)**
- Teksttype, forfatter, tittel, utgivelsesår
- Kort sammendrag av innholdet
- Eventuell historisk kontekst

**2. Hauptteil (Hoveddel)**
- Innholdsanalyse (Hva skjer?)
- Strukturanalyse (Hvordan er teksten bygget opp?)
- Språkanalyse (Hvilke virkemidler brukes?)
- Karakteranalyse (Hvem er personene?)

**3. Schluss (Avslutning)**
- Sammenfatning av hovedpunkter
- Tolkning av tekstens budskap
- Eventuell egen vurdering`,
    },
    {
      id: 'tysk-3-4-4-example-2',
      type: 'example',
      title: 'Eksempel: Innledning til en analyse',
      problem: `Skriv en innledning til en analyse av Goethes "Erlkönig".`,
      solution: `**Eksempel på innledning:**

"Die Ballade 'Erlkönig' wurde von Johann Wolfgang von Goethe im Jahr 1782 geschrieben. Sie erzählt die Geschichte eines Vaters, der mit seinem kranken Sohn durch die Nacht reitet. Das Kind sieht den Erlkönig, einen übernatürlichen Geist, der es zu sich locken will. Der Vater versucht, das Kind zu beruhigen, aber am Ende der Reise ist der Sohn tot. Die Ballade behandelt Themen wie Tod, Kindheit und die Grenze zwischen Realität und Fantasie."

**Elementer:**
- Teksttype (Ballade)
- Forfatter og år
- Kort handling
- Hovedtemaer`,
    },
    {
      id: 'tysk-3-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-4-ex-2',
        number: '4.4.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett analysebegreper:',
        subTasks: [
          { label: 'a', task: 'Hva er "der Ich-Erzähler"?', solution: 'Førstepersonsforteller' },
          { label: 'b', task: 'Hva betyr "die Handlung"?', solution: 'Handlingen' },
          { label: 'c', task: 'Hva er "das Leitmotiv"?', solution: 'Ledemotiv (gjentakende element)' },
          { label: 'd', task: 'Hva betyr "die Deutung"?', solution: 'Tolkning' },
        ],
        solution: 'a) Førstepersonsforteller, b) Handlingen, c) Ledemotiv, d) Tolkning',
        hints: ['Ich = jeg, Erzähler = forteller', 'Leitmotiv er det samme på norsk'],
      },
    },
    {
      id: 'tysk-3-4-4-text-3',
      type: 'text',
      content: `## Nyttige fraser for analyse

**Innlede:**
- "Der Text handelt von..." (Teksten handler om...)
- "Im Mittelpunkt steht..." (I sentrum står...)
- "Der Autor thematisiert..." (Forfatteren tematiserer...)

**Analysere:**
- "Auffällig ist..." (Påfallende er...)
- "Der Autor verwendet..." (Forfatteren bruker...)
- "Dies verdeutlicht..." (Dette tydeliggjør...)

**Tolke:**
- "Dies kann als... interpretiert werden" (Dette kan tolkes som...)
- "Der Autor will damit zeigen..." (Forfatteren vil med dette vise...)
- "Symbolisch steht... für..." (Symbolsk står... for...)`,
    },
    {
      id: 'tysk-3-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk frasene i analyse:',
        subTasks: [
          { label: 'a', task: 'Hvordan sier du "Teksten handler om kjærlighet"?', solution: 'Der Text handelt von Liebe.' },
          { label: 'b', task: 'Hvordan sier du "Forfatteren bruker mange metaforer"?', solution: 'Der Autor verwendet viele Metaphern.' },
          { label: 'c', task: 'Hvordan sier du "Dette kan tolkes som kritikk"?', solution: 'Dies kann als Kritik interpretiert werden.' },
        ],
        solution: 'a) Der Text handelt von Liebe. b) Der Autor verwendet viele Metaphern. c) Dies kann als Kritik interpretiert werden.',
        hints: ['handelt von = handler om', 'verwenden = bruke'],
      },
    },
    {
      id: 'tysk-3-4-4-tip-1',
      type: 'tip',
      content: `**Tips til eksamen:** Bruk alltid konkrete teksteksempler (sitater) som bevis for påstandene dine. Ikke bare si at forfatteren bruker metaforer - vis det med et sitat og forklar effekten!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.1: Literatur des 20. Jahrhunderts
// ============================================================================

export const CHAPTER_TYSK_3_5_1: TextbookChapter = {
  id: 'tysk-3-5-1',
  courseId: 'tysk-3',
  chapterNumber: '5.1',
  title: 'Literatur des 20. Jahrhunderts',
  description: 'Kafka, Thomas Mann og den moderne litteraturen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere modernistisk litteratur',
    'forstå Kafkas stil og tematikk',
    'tolke Thomas Manns ironi',
  ],
  content: [
    {
      id: 'tysk-3-5-1-intro',
      type: 'text',
      content: `## Die Moderne (1890-1945)

Modernismen i tysk litteratur brøt med tradisjonelle former og utforsket nye måter å skildre virkeligheten på. Forfattere som Kafka og Thomas Mann skapte verk som fortsatt regnes blant verdenslitteraturens høydepunkter.

**Kjennetegn:**
- **Krise der Sprache**: Tvil om språkets evne til å uttrykke virkeligheten
- **Fragmentering**: Oppløsning av tradisjonell fortelling
- **Das Absurde**: Det absurde og meningsløse i tilværelsen
- **Psychologisierung**: Dyp psykologisk analyse
- **Entfremdung**: Fremmedgjøring fra samfunnet og seg selv`,
    },
    {
      id: 'tysk-3-5-1-def-1',
      type: 'definition',
      title: 'Litterære retninger 1900-1945',
      content: `**Expressionismus** (1910-1925): Ekstatisk, følelsesladet uttrykk. Protest mot borgerlighet.

**Neue Sachlichkeit** (1920-tallet): Nøktern, observerende stil. Reaksjon mot ekspresjonismen.

**Exilliteratur** (1933-1945): Litteratur skrevet av forfattere som flyktet fra nazismen.

**Innere Emigration**: Forfattere som ble i Tyskland men skrev kritisk i skjult form.`,
    },
    {
      id: 'tysk-3-5-1-text-1',
      type: 'text',
      content: `## Franz Kafka (1883-1924)

Kafka skrev på tysk i Praha og skapte en helt ny litterær stil. Hans verk skildrer absurde, marerittaktige situasjoner som likevel føles urovekkende gjenkjennelige.

**Hovedverk:**
- **Die Verwandlung** (1915) - Gregor Samsa våkner som et insekt
- **Der Prozess** (1925, posthumt) - Josef K. tiltales uten å vite hvorfor
- **Das Schloss** (1926, posthumt) - K. forsøker forgjeves å nå slottet
- **In der Strafkolonie** (1919) - Grotesk straffemekanisme

Begrepet **kafkaesk** beskriver absurde, uforklarlige og truende situasjoner.`,
    },
    {
      id: 'tysk-3-5-1-example-1',
      type: 'example',
      title: 'Tekstutdrag: Kafka - Die Verwandlung (Åpning)',
      problem: `Den berømte åpningssetningen:

*"Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte,
fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt."*

Analyser denne setningen.`,
      solution: `**Oversettelse:**
"Da Gregor Samsa en morgen våknet fra urolige drømmer, fant han seg forvandlet i sengen til et uhyrlig kryp."

**Analyse:**
- **Sjokk uten forklaring**: Forvandlingen presenteres som et faktum, uten årsak
- **Nøktern stil**: Til tross for det fantastiske er språket saklig
- **Identitetskrise**: Gregor er fortsatt Gregor i bevisstheten, men kroppen er fremmed
- **Absurditet**: Det umulige skjer, men livet fortsetter "normalt"

Kafka gir aldri noen forklaring på forvandlingen - det absurde er bare slik det er.`,
    },
    {
      id: 'tysk-3-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-1-ex-1',
        number: '5.1.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Kafkas stil:',
        subTasks: [
          { label: 'a', task: 'Hva betyr "kafkaesk"?', solution: 'Absurd, marerittaktig, truende, uforklarlig - situasjoner som minner om Kafkas verk.' },
          { label: 'b', task: 'Hvorfor gir ikke Kafka noen forklaring på forvandlingen?', solution: 'Det absurde trenger ingen forklaring - det bare er. Dette forsterker følelsen av fremmedgjøring.' },
          { label: 'c', task: 'Hva symboliserer insektet?', solution: 'Fremmedgjøring, utstøtelse, tap av menneskelighet, familiens byrde.' },
        ],
        solution: 'Kafkas stil kjennetegnes av absurditet presentert med nøktern saklighet.',
        hints: ['Kafka forklarer aldri det fantastiske', 'Tenk på Gregors rolle i familien før forvandlingen'],
      },
    },
    {
      id: 'tysk-3-5-1-text-2',
      type: 'text',
      content: `## Die Verwandlung - Handling og tolkning

**Handling:**
Gregor Samsa, en handelsreisende som forsørger familien, våkner en dag som et insekt. Familien reagerer med avsky, og Gregor isoleres på rommet sitt. Til slutt dør han, og familien føler lettelse.

**Tolkninger:**
- **Fremmedgjøring i det moderne liv**: Gregor var allerede fremmedgjort før forvandlingen
- **Familiens utnyttelse**: Han var bare verdifull så lenge han tjente penger
- **Tap av identitet**: Hva er igjen av mennesket uten sosial funksjon?
- **Den moderne arbeideren**: Redusert til en funksjon, ikke et menneske`,
    },
    {
      id: 'tysk-3-5-1-example-2',
      type: 'example',
      title: 'Tekstutdrag: Familiens reaksjon',
      problem: `Fra slutten av Die Verwandlung:

*"'Nun', sagte Herr Samsa, 'jetzt können wir Gott danken.'
Er bekreuzte sich, und die drei Frauen folgten seinem Beispiel...
Dann verließen alle drei die Wohnung, was sie schon seit
Monaten nicht getan hatten."*

Hva avslører dette om familien?`,
      solution: `**Oversettelse:**
"'Nå,' sa herr Samsa, 'kan vi takke Gud.'
Han korset seg, og de tre kvinnene fulgte hans eksempel...
Så forlot alle tre leiligheten, noe de ikke hadde gjort på flere måneder."

**Analyse:**
- **Lettelse over døden**: Familien er takknemlig for Gregors død
- **Ny begynnelse**: De går ut for første gang på måneder
- **Ingen sorg**: Gregors død er en befrielse, ikke et tap
- **Ironi**: Den som forsørget dem, ble bare en byrde

Kafka avslører familiens egoisme og menneskets reduksjon til økonomisk funksjon.`,
    },
    {
      id: 'tysk-3-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tolk Die Verwandlung:',
        subTasks: [
          { label: 'a', task: 'Hvordan behandler familien Gregor etter forvandlingen?', solution: 'De isolerer ham, fjerner møblene hans, mater ham med råtne rester, og føler til slutt lettelse når han dør.' },
          { label: 'b', task: 'Hva sier dette om menneskelig verdi i det moderne samfunn?', solution: 'Et menneske verdsettes for sin funksjon/nytte, ikke for seg selv. Uten produktivitet mister man verdi.' },
          { label: 'c', task: 'Var Gregor allerede "fremmed" før forvandlingen?', solution: 'Ja - han jobbet konstant, hadde ingen venner, og familien tok ham for gitt. Forvandlingen synliggjør hans allerede eksisterende fremmedgjøring.' },
        ],
        solution: 'Die Verwandlung er en allegori over fremmedgjøring og menneskets reduksjon til økonomisk funksjon.',
        hints: ['Tenk på Gregors liv FØR forvandlingen', 'Familiens reaksjon avslører mye'],
      },
    },
    {
      id: 'tysk-3-5-1-text-3',
      type: 'text',
      content: `## Thomas Mann (1875-1955)

Thomas Mann er en av de mest betydningsfulle tyske forfatterne, kjent for lange, komplekse romaner og mesterlig ironi. Han vant Nobelprisen i litteratur i 1929.

**Hovedverk:**
- **Buddenbrooks** (1901) - Familieroman om borgerlig forfall
- **Der Tod in Venedig** (1912) - Novelle om kunst og lidenskap
- **Der Zauberberg** (1924) - Roman om europeisk kultur før WWI
- **Doktor Faustus** (1947) - Faust-historie som allegori over Tyskland

**Sentrale temaer:**
- Spenningen mellom borgerlig og kunstnerisk liv
- Ironi og distanse
- Forfall og dekadanse
- Tysk identitet og ansvar`,
    },
    {
      id: 'tysk-3-5-1-example-3',
      type: 'example',
      title: 'Thomas Manns ironi',
      problem: `Fra Der Tod in Venedig om kunstneren Aschenbach:

*"Gustav Aschenbach war der Dichter all derer, die am Rande der
Erschöpfung arbeiten, der Überbürdeten, schon Aufgeriebenen."*

Analyser Manns stil og tematikk.`,
      solution: `**Oversettelse:**
"Gustav Aschenbach var dikteren for alle dem som arbeider på utmattelsens rand, de overbelastede, allerede oppslitte."

**Analyse:**
- **Ironisk distanse**: Mann beskriver Aschenbach med sympati, men også med kritisk distanse
- **Borgerlig plikt vs. kunst**: Aschenbach har ofret alt for kunsten
- **Varsel**: "Erschöpfung" (utmattelse) antyder kommende sammenbrudd
- **Manns tema**: Konflikten mellom apollinsk disiplin og dionysisk lidenskap

I løpet av novellen bryter Aschenbachs kontrollerte fasade sammen.`,
    },
    {
      id: 'tysk-3-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test din kunnskap om moderne tysk litteratur:',
        subTasks: [
          { label: 'a', task: 'Hvilket Kafka-verk handler om en uforklarlig rettssak?', solution: 'Der Prozess' },
          { label: 'b', task: 'Hva vant Thomas Mann Nobelprisen for?', solution: 'Primært for Buddenbrooks (familieroman om borgerlig forfall)' },
          { label: 'c', task: 'Hva er "Entfremdung" på norsk?', solution: 'Fremmedgjøring' },
          { label: 'd', task: 'Hvor bodde Kafka?', solution: 'Praha (i det daværende Østerrike-Ungarn)' },
        ],
        solution: 'a) Der Prozess, b) Buddenbrooks, c) Fremmedgjøring, d) Praha',
        hints: ['Kafka skrev om Josef K.s rettssak', 'Mann fikk prisen i 1929'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Nachkriegsliteratur
// ============================================================================

export const CHAPTER_TYSK_3_5_2: TextbookChapter = {
  id: 'tysk-3-5-2',
  courseId: 'tysk-3',
  chapterNumber: '5.2',
  title: 'Nachkriegsliteratur',
  description: 'Heinrich Böll, Günter Grass og oppgjøret med fortiden.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå etterkrigslitteraturens kontekst',
    'analysere verk av Böll og Grass',
    'diskutere litteraturens rolle i oppgjøret med nazismen',
  ],
  content: [
    {
      id: 'tysk-3-5-2-intro',
      type: 'text',
      content: `## Nachkriegsliteratur (1945-1970)

Etter andre verdenskrig sto tyske forfattere overfor en enorm utfordring: Hvordan skrive etter Holocaust? Hvordan forholde seg til det tyske språket som nazistene hadde misbrukt?

**Sentrale spørsmål:**
- Kan man skrive poesi etter Auschwitz? (Adornos berømte spørsmål)
- Hvordan bearbeide skyld og ansvar?
- Hva er språkets rolle i oppgjøret med fortiden?

**Gruppe 47**: En løs sammenslutning av forfattere (1947-1967) som møttes årlig for å lese opp og kritisere hverandres tekster. Medlemmer inkluderte Böll, Grass, Bachmann og Walser.`,
    },
    {
      id: 'tysk-3-5-2-def-1',
      type: 'definition',
      title: 'Sentrale begreper',
      content: `**Trümmerliteratur** (ruinlitteratur): Litteratur skrevet i de første årene etter 1945, preget av fysisk og moralsk ødeleggelse.

**Kahlschlag** (snauhogst): Radikal språklig forenkling - bort med alt overflødig.

**Stunde Null** (nullpunkt): Ideen om 1945 som ny begynnelse - men kan man starte helt på nytt?

**Vergangenheitsbewältigung** (oppgjør med fortiden): Den langvarige prosessen med å bearbeide Nazi-tiden.`,
    },
    {
      id: 'tysk-3-5-2-text-1',
      type: 'text',
      content: `## Heinrich Böll (1917-1985)

Böll var en av de viktigste tyske forfatterne i etterkrigstiden. Han fikk Nobelprisen i 1972 og var en moralsk stemme i offentligheten.

**Hovedverk:**
- **Wo warst du, Adam?** (1951) - Krigsroman
- **Billard um halb zehn** (1959) - Tre generasjoners familie
- **Ansichten eines Clowns** (1963) - Kritikk av katolsk hykleri
- **Die verlorene Ehre der Katharina Blum** (1974) - Pressens maktmisbruk

Böll var kjent for sin moralske integritet og kritikk av borgerskapet og kirken.`,
    },
    {
      id: 'tysk-3-5-2-example-1',
      type: 'example',
      title: 'Tekstutdrag: Böll - Ansichten eines Clowns',
      problem: `Klovnen Hans Schnier reflekterer:

*"Ich bin ein Clown, ich sammle Augenblicke. Die Augenblicke,
die ich sammle, werden nie zu Gold, und ich werde nie das große Los ziehen."*

Analyser sitatets tematikk.`,
      solution: `**Oversettelse:**
"Jeg er en klovn, jeg samler øyeblikk. Øyeblikkene jeg samler, blir aldri til gull, og jeg vil aldri trekke hovedgevinsten."

**Analyse:**
- **Outsider-perspektiv**: Klovnen ser samfunnet utenfra
- **Anti-materialistisk**: Han "samler øyeblikk", ikke rikdom
- **Ironi**: Som klovn er han ærligere enn de "seriøse" borgerne
- **Bölls kritikk**: Det vesttyske "Wirtschaftswunder" (økonomiske mirakel) kritiseres

Hans Schnier nekter å tilpasse seg det hyklerske samfunnet.`,
    },
    {
      id: 'tysk-3-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-2-ex-1',
        number: '5.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Bölls samfunnskritikk:',
        subTasks: [
          { label: 'a', task: 'Hvem kritiserer Böll i Ansichten eines Clowns?', solution: 'Det katolske borgerskapet og deres hykleri - de som tilpasset seg nazismen og nå later som ingenting skjedde.' },
          { label: 'b', task: 'Hva symboliserer klovnen?', solution: 'Sannheten, ærlighet, outsiderens klare blikk på samfunnets hykleri.' },
          { label: 'c', task: 'Hva var "Wirtschaftswunder"?', solution: 'Det vesttyske økonomiske mirakel på 1950-60-tallet - gjenoppbygging og velstand.' },
        ],
        solution: 'Böll kritiserte det vesttyske samfunnets manglende oppgjør med fortiden.',
        hints: ['Böll var selv katolikk og kritiserte kirken innenfra', 'Klovnen ser det andre skjuler'],
      },
    },
    {
      id: 'tysk-3-5-2-text-2',
      type: 'text',
      content: `## Günter Grass (1927-2015)

Grass var den kanskje mest innflytelsesrike tyske forfatteren i etterkrigstiden. Han fikk Nobelprisen i 1999 for Die Blechtrommel.

**Hovedverk:**
- **Die Blechtrommel** (1959) - Oskar Matzerath nekter å vokse
- **Katz und Maus** (1961) - Novelle om en ung mann i Nazi-tiden
- **Hundejahre** (1963) - Tredje del av "Danziger Trilogie"
- **Im Krebsgang** (2002) - Om tyske flyktninger

**Stil:**
- Barokk, overveldende språk
- Groteske bilder og situasjoner
- Ironi og satire
- Politisk engasjement`,
    },
    {
      id: 'tysk-3-5-2-example-2',
      type: 'example',
      title: 'Tekstutdrag: Grass - Die Blechtrommel (Åpning)',
      problem: `Den berømte åpningen:

*"Zugegeben: ich bin Insasse einer Heil- und Pflegeanstalt,
mein Pfleger beobachtet mich, lässt mich kaum aus dem Auge...
Mein Pfleger kann unmöglich ein Feind sein."*

Hva etablerer denne åpningen?`,
      solution: `**Oversettelse:**
"Innrømmet: jeg er innsatt på et pleiehjem,
min pleier observerer meg, slipper meg knapt av syne...
Min pleier kan umulig være en fiende."

**Analyse:**
- **Upålitelig forteller**: Oskar er innlagt på psykiatrisk institusjon
- **Ironi**: "Zugegeben" (innrømmet) - han innrømmer uten å innrømme
- **Overvåkning**: Pleieren som "ikke er en fiende" - mistillit til alle
- **Perspektiv nedenfra**: Oskar ser verden fra barns høyde (han sluttet å vokse ved 3 år)

Grass etablerer en forteller som ser Nazi-tiden fra et radikalt outsider-perspektiv.`,
    },
    {
      id: 'tysk-3-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser Die Blechtrommel:',
        subTasks: [
          { label: 'a', task: 'Hvorfor slutter Oskar å vokse ved 3 års alder?', solution: 'Han nekter å bli voksen og ta del i den voksne verdens hykleri og nazisme - hans tromme er protest.' },
          { label: 'b', task: 'Hva symboliserer tromma hans?', solution: 'Protest, minne, kunst, barnets perspektiv, nekting av å "gå i takt" med nazismen.' },
          { label: 'c', task: 'Hvorfor er Oskar en "upålitelig forteller"?', solution: 'Han er innlagt på psykiatrisk institusjon, og vi vet ikke hva som er sant av det han forteller.' },
        ],
        solution: 'Die Blechtrommel bruker det groteske og det barnlige for å kritisere Nazi-Tyskland.',
        hints: ['Oskar velger selv å ikke vokse', 'Tromma er både kunst og våpen'],
      },
    },
    {
      id: 'tysk-3-5-2-text-3',
      type: 'text',
      content: `## Oppgjøret med Nazi-tiden

Etterkrigslitteraturen spilte en avgjørende rolle i Tysklands oppgjør med fortiden:

**1950-tallet**: "Stille" om fortiden - fokus på gjenoppbygging
**1960-tallet**: Auschwitz-rettssakene, studentopprør - kritisk oppgjør begynner
**1970-tallet**: "Hitler-bølge" - økt interesse for Nazi-tiden
**1980-tallet**: "Historikerstreit" - debatt om Holocausts unikhet

**Litteraturens rolle:**
- Bevare minnet om ofrene
- Konfrontere samfunnet med ubehagelige sannheter
- Utforske skyld og ansvar
- Advare mot gjentakelse`,
    },
    {
      id: 'tysk-3-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test din kunnskap om etterkrigslitteraturen:',
        subTasks: [
          { label: 'a', task: 'Hva var "Gruppe 47"?', solution: 'En løs forfattergruppe som møttes årlig (1947-1967) for å lese og kritisere hverandres tekster.' },
          { label: 'b', task: 'Hva betyr "Trümmerliteratur"?', solution: 'Ruinlitteratur - litteratur fra de første etterkrigsårene, preget av ødeleggelse.' },
          { label: 'c', task: 'Hvilket år fikk Böll Nobelprisen?', solution: '1972' },
          { label: 'd', task: 'Hvilken by er sentral i Grass\' "Danziger Trilogie"?', solution: 'Danzig (nå Gdansk i Polen)' },
        ],
        solution: 'a) Forfattergruppe 1947-1967, b) Ruinlitteratur, c) 1972, d) Danzig',
        hints: ['Gruppe 47 er oppkalt etter året den ble stiftet', 'Böll og Grass fikk begge Nobelprisen'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Gegenwartsliteratur
// ============================================================================

export const CHAPTER_TYSK_3_5_3: TextbookChapter = {
  id: 'tysk-3-5-3',
  courseId: 'tysk-3',
  chapterNumber: '5.3',
  title: 'Gegenwartsliteratur',
  description: 'Herta Müller, Daniel Kehlmann og moderne tysk litteratur.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne sentrale samtidsforfattere',
    'analysere moderne litterær stil',
    'diskutere temaer i dagens tyske litteratur',
  ],
  content: [
    {
      id: 'tysk-3-5-3-intro',
      type: 'text',
      content: `## Gegenwartsliteratur (1990 - i dag)

Etter gjenforeningen i 1990 har tysk litteratur gjennomgått store forandringer. Nye stemmer fra Øst-Europa, innvandrerlitteratur og globale perspektiver har beriket landskapet.

**Temaer:**
- Gjenforeningen og dens ettervirkninger
- Totalitære regimers ettervirkninger (DDR, Romania)
- Migrasjon og identitet
- Globalisering
- Historie og minne`,
    },
    {
      id: 'tysk-3-5-3-def-1',
      type: 'definition',
      title: 'Strømninger i samtidsitteraturen',
      content: `**Wenderoman**: Romaner om gjenforeningen og DDR-tiden.

**Migrationsliteratur**: Litteratur av og om innvandrere - spørsmål om identitet og tilhørighet.

**Popliteratur** (1990-tallet): Lett, ironisk, fokus på popkultur og konsum.

**Neue Lesbarkeit**: Reaksjon mot eksperimentell litteratur - tilbake til fortelling.`,
    },
    {
      id: 'tysk-3-5-3-text-1',
      type: 'text',
      content: `## Herta Müller (f. 1953)

Herta Müller vokste opp i den rumenske tyskspråklige minoriteten og emigrerte til Tyskland i 1987. Hun fikk Nobelprisen i litteratur i 2009.

**Hovedverk:**
- **Atemschaukel** (2009) - Roman om rumenske arbeidsleirer
- **Herztier** (1994) - Om livet under Ceausescu-diktaturet
- **Der Fuchs war damals schon der Jäger** (1992) - Overvåkning og frykt

**Stil:**
- Poetisk, komprimert språk
- Surrealistiske bilder
- Fokus på undertrykkelse og overlevelse
- "Wort-Collagen" - ordkollasjoner`,
    },
    {
      id: 'tysk-3-5-3-example-1',
      type: 'example',
      title: 'Tekstutdrag: Herta Müller',
      problem: `Fra Atemschaukel:

*"Ich weiß, du kommst wieder. So redete der Hunger mit mir, und mir
war schwindlig. Ich aß Gras und Melde, Löwenzahn und Brennnesseln."*

Analyser Müllers stil og tema.`,
      solution: `**Oversettelse:**
"Jeg vet at du kommer tilbake. Slik snakket sulten med meg, og jeg var svimmel. Jeg spiste gress og melde, løvetann og brennesler."

**Analyse:**
- **Personifikasjon**: Sulten "snakker" - den blir en konstant følgesvenn
- **Konkret, fysisk språk**: Plantene nevnes ved navn - overlevelse i detalj
- **Minimalisme**: Korte, direkte setninger
- **Tema**: Overlevelse under ekstreme forhold (deportasjon til arbeidsleder)

Müller skriver om trauma med poetisk presisjon.`,
    },
    {
      id: 'tysk-3-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-3-ex-1',
        number: '5.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Herta Müllers verk:',
        subTasks: [
          { label: 'a', task: 'Hvilken bakgrunn har Herta Müller?', solution: 'Hun tilhører den rumenske tyskspråklige minoriteten og vokste opp under Ceausescu-diktaturet.' },
          { label: 'b', task: 'Hva handler Atemschaukel om?', solution: 'Rumenske tyskere som ble deportert til sovjetiske arbeidsleirer etter WWII.' },
          { label: 'c', task: 'Hva kjennetegner Müllers språk?', solution: 'Poetisk, komprimert, surrealistiske bilder, ordkollasjoner.' },
        ],
        solution: 'Müller skriver om totalitære regimer med poetisk presisjon basert på egen erfaring.',
        hints: ['Müller emigrerte fra Romania i 1987', 'Hennes mor ble deportert til arbeidsleir'],
      },
    },
    {
      id: 'tysk-3-5-3-text-2',
      type: 'text',
      content: `## Daniel Kehlmann (f. 1975)

Kehlmann er en av de mest suksessrike moderne tyske forfatterne internasjonalt. Hans romaner kombinerer intellektuell dybde med underholdning.

**Hovedverk:**
- **Die Vermessung der Welt** (2005) - Om Gauss og Humboldt
- **Ruhm** (2009) - Roman i ni fortellinger
- **Tyll** (2017) - Om narren Tyll Ulenspiegel
- **F** (2013) - Familieroman om løgn og bedrag

**Stil:**
- Elegant, ironisk prosa
- Historiske temaer med moderne relevans
- Intellektuell humor
- Tilgjengelig, men dypt`,
    },
    {
      id: 'tysk-3-5-3-example-2',
      type: 'example',
      title: 'Tekstutdrag: Daniel Kehlmann',
      problem: `Fra Die Vermessung der Welt om Humboldt:

*"Humboldt seufzte. Es war ihm peinlich, daß sein Bekanntheitsgrad
so viel größer war als das, was er wirklich geleistet hatte."*

Analyser Kehlmanns tilnærming til historiske figurer.`,
      solution: `**Oversettelse:**
"Humboldt sukket. Det var ham pinlig at hans berømmelse var så mye større enn det han virkelig hadde oppnådd."

**Analyse:**
- **Ironi**: Den berømte Humboldt føler seg som en svindler
- **Humanisering**: Historisk helt vises med menneskelige svakheter
- **Moderne relevans**: Spenningen mellom image og realitet er tidløs
- **Humor**: Kehlmann gjør vitenskapshistorie underholdende

Kehlmann gjør historiske figurer levende og gjenkjennelige.`,
    },
    {
      id: 'tysk-3-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Kehlmanns stil:',
        subTasks: [
          { label: 'a', task: 'Hvem handler Die Vermessung der Welt om?', solution: 'Matematikeren Carl Friedrich Gauss og naturforskeren Alexander von Humboldt.' },
          { label: 'b', task: 'Hvordan gjør Kehlmann historie tilgjengelig?', solution: 'Han humaniserer historiske figurer med humor og ironi, og viser deres menneskelige svakheter.' },
          { label: 'c', task: 'Hva betyr "Vermessung"?', solution: 'Oppmåling - bokstavelig om kartlegging, men også metafor for å forstå verden.' },
        ],
        solution: 'Kehlmann kombinerer historiske temaer med moderne ironi og humor.',
        hints: ['Gauss målte jorden matematisk, Humboldt fysisk', 'Vermessung har dobbel betydning'],
      },
    },
    {
      id: 'tysk-3-5-3-text-3',
      type: 'text',
      content: `## Andre viktige samtidsforfattere

**Bernhard Schlink** (f. 1944):
- *Der Vorleser* (1995) - Holocaust og skyld
- Bestselger, filmatisert med Kate Winslet

**Jenny Erpenbeck** (f. 1967):
- *Gehen, ging, gegangen* (2015) - Flyktningkrise
- *Heimsuchung* (2008) - DDR-historie

**Juli Zeh** (f. 1974):
- *Unterleuten* (2016) - Konflikt i en landsby
- Politisk engasjert forfatter

**W.G. Sebald** (1944-2001):
- *Austerlitz* (2001) - Minne og Holocaust
- Unik blanding av prosa og fotografier`,
    },
    {
      id: 'tysk-3-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Test din kunnskap om samtidsforfattere:',
        subTasks: [
          { label: 'a', task: 'Hvem skrev Der Vorleser?', solution: 'Bernhard Schlink' },
          { label: 'b', task: 'Hvilket år fikk Herta Müller Nobelprisen?', solution: '2009' },
          { label: 'c', task: 'Hva handler Gehen, ging, gegangen om?', solution: 'Flyktningkrisen - en pensjonist møter flyktninger i Berlin.' },
          { label: 'd', task: 'Hvem er hovedpersonene i Die Vermessung der Welt?', solution: 'Gauss og Humboldt' },
        ],
        solution: 'a) Bernhard Schlink, b) 2009, c) Flyktningkrisen, d) Gauss og Humboldt',
        hints: ['Der Vorleser ble filmatisert', 'Müller er eneste samtidsforfatteren med Nobelpris her'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Film und Theater
// ============================================================================

export const CHAPTER_TYSK_3_5_4: TextbookChapter = {
  id: 'tysk-3-5-4',
  courseId: 'tysk-3',
  chapterNumber: '5.4',
  title: 'Film und Theater',
  description: 'Wim Wenders, Rainer Werner Fassbinder og moderne tysk film.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til viktige tyske regissører',
    'analysere film som kulturelt uttrykk',
    'diskutere sammenhengen mellom film og samfunn',
  ],
  content: [
    {
      id: 'tysk-3-5-4-intro',
      type: 'text',
      content: `## Deutscher Film - Oversikt

Tysk film har en rik historie fra ekspresjonismens klassikere på 1920-tallet til dagens internasjonale suksesser.

**Historiske perioder:**
- **Stummfilm/Expressionismus** (1920-tallet): Das Cabinet des Dr. Caligari, Metropolis
- **Nazi-tid** (1933-1945): Propaganda, men også underholdningsfilm
- **Nachkriegszeit**: Trümmerfilm, hjemkomstdramaer
- **Neuer Deutscher Film** (1960-80-tallet): Fassbinder, Wenders, Herzog
- **Gegenwart**: Internasjonale produksjoner, Oscar-suksesser`,
    },
    {
      id: 'tysk-3-5-4-def-1',
      type: 'definition',
      title: 'Neuer Deutscher Film',
      content: `**Neuer Deutscher Film** (New German Cinema) var en bevegelse fra ca. 1962-1982 som fornyet tysk film.

**Oberhausener Manifest** (1962): 26 unge filmskapere erklærte "Papas Kino ist tot" - farens kino er død.

**Kjennetegn:**
- Kritisk blikk på tysk historie og samfunn
- Personlige, kunstneriske visjoner
- Politisk engasjement
- Eksperimentell stil`,
    },
    {
      id: 'tysk-3-5-4-text-1',
      type: 'text',
      content: `## Rainer Werner Fassbinder (1945-1982)

Fassbinder var den mest produktive av de nye tyske regissørene - han laget over 40 filmer på bare 15 år før han døde 37 år gammel.

**Viktige filmer:**
- **Angst essen Seele auf** (1974) - Kjærlighet mellom eldre kvinne og innvandrer
- **Die Ehe der Maria Braun** (1979) - Kvinne i etterkrigstiden
- **Berlin Alexanderplatz** (1980) - 15-timers TV-serie

**Stil:**
- Melodrama brukt til samfunnskritikk
- Fokus på outsidere og undertrykte
- Sirk-inspirert estetikk
- Raskt arbeidstempo`,
    },
    {
      id: 'tysk-3-5-4-example-1',
      type: 'example',
      title: 'Filmanalyse: Angst essen Seele auf',
      problem: `Filmen handler om Emmi, en eldre tysk renholder, som forelsker seg i Ali, en ung marokkansk gjestearbeider. Analyser filmens tematikk.`,
      solution: `**Handling:**
Emmi (ca. 60) møter Ali (ca. 40) på en bar. De forelsker seg og gifter seg, til sjokk for familie og naboer. Etter hvert aksepterer omgivelsene dem - men bare fordi de trenger dem.

**Temaer:**
- **Rasisme**: Alis behandling som "fremmed"
- **Ensomhet**: Begge er isolerte i samfunnet
- **Hykleri**: Familien aksepterer dem når de trenger noe
- **Utnyttelse**: Gjestearbeidere som arbeidskraft, ikke mennesker

**Tittelen:**
"Angst essen Seele auf" (Frykt spiser sjel opp) - Alis gebrokkent tysk som viser hans utsatthet.`,
    },
    {
      id: 'tysk-3-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-4-ex-1',
        number: '5.4.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Fassbinders film:',
        subTasks: [
          { label: 'a', task: 'Hva betyr tittelen "Angst essen Seele auf" grammatisk?', solution: 'Det er grammatisk feil tysk ("Angst isst die Seele auf") - det er Alis gebrokkent tysk som innvandrer.' },
          { label: 'b', task: 'Hvilke grupper kritiserer Fassbinder?', solution: 'Det tyske borgerskapet, deres rasisme og hykleri, utnyttelsen av gjestearbeidere.' },
          { label: 'c', task: 'Hvorfor bruker Fassbinder melodrama?', solution: 'For å gjøre samfunnskritikk tilgjengelig og emosjonell - følelser som inngang til forståelse.' },
        ],
        solution: 'Fassbinder bruker melodrama for å kritisere rasisme og borgerskapets hykleri.',
        hints: ['Tittelen er bevisst grammatisk feil', 'Melodrama + politikk = Fassbinders metode'],
      },
    },
    {
      id: 'tysk-3-5-4-text-2',
      type: 'text',
      content: `## Wim Wenders (f. 1945)

Wenders er kjent for sine poetiske, ofte langsomt fortående filmer om ensomhet, identitet og Amerika.

**Viktige filmer:**
- **Paris, Texas** (1984) - Cannes-vinner, om en mann som gjenforenes med familien
- **Der Himmel über Berlin** (1987) - Engler observerer Berlin
- **Buena Vista Social Club** (1999) - Dokumentar om cubansk musikk

**Stil:**
- Lange, kontemplative tagninger
- Fascinasjon for amerikanske landskap og kultur
- Eksistensialistiske temaer
- Musikk som sentral element`,
    },
    {
      id: 'tysk-3-5-4-example-2',
      type: 'example',
      title: 'Filmanalyse: Der Himmel über Berlin',
      problem: `Filmen handler om engler som observerer menneskene i det delte Berlin. Analyser filmens symbolikk.`,
      solution: `**Handling:**
Englene Damiel og Cassiel vandrer usynlig i Berlin og lytter til menneskenes tanker. Damiel forelsker seg i en trapesekunstner og velger å bli menneske.

**Symbolikk:**
- **Sort-hvitt vs. farge**: Englenes syn er i sort-hvitt, menneskelig erfaring er i farger
- **Berlinmuren**: Byen som delt, men også som sted for lengsel
- **Engel som observatør**: Kunstnerens posisjon - se uten å delta
- **Valget**: Å leve fullt krever sårbarhet og dødelighet

**Tema**: Lengsel etter ekte erfaring og følelse, selv med smerten det innebærer.`,
    },
    {
      id: 'tysk-3-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser Der Himmel über Berlin:',
        subTasks: [
          { label: 'a', task: 'Hvorfor ser englene verden i sort-hvitt?', solution: 'De observerer uten å føle - menneskelig erfaring (i farger) krever sårbarhet og dødelighet.' },
          { label: 'b', task: 'Hva symboliserer englenes valg om å bli menneske?', solution: 'Å velge livet med all dets smerte fremfor udødelig observasjon - ekte erfaring krever risiko.' },
          { label: 'c', task: 'Hvorfor er Berlin et passende sted for filmen?', solution: 'Berlin var delt (som englene er delt mellom himmel og jord), et sted for historie og lengsel.' },
        ],
        solution: 'Filmen handler om lengsel etter ekte erfaring og valget mellom sikkerhet og liv.',
        hints: ['Sort-hvitt = distanse, farge = erfaring', 'Muren var fortsatt der i 1987'],
      },
    },
    {
      id: 'tysk-3-5-4-text-3',
      type: 'text',
      content: `## Moderne tysk film

**Oscar-suksesser:**
- **Das Leben der Anderen** (2006) - Stasi-drama, Oscar for beste utenlandske
- **Der Untergang** (2004) - Hitlers siste dager
- **Toni Erdmann** (2016) - Oscar-nominert komedie

**Viktige regissører i dag:**
- **Fatih Akin** (f. 1973): Gegen die Wand, Aus dem Nichts
- **Florian Henckel von Donnersmarck** (f. 1973): Das Leben der Anderen
- **Wolfgang Becker** (f. 1954): Good Bye, Lenin!

**Tysk TV:**
- "Dark" (Netflix) - Internasjonal suksess
- "Babylon Berlin" - 1920-talls krim`,
    },
    {
      id: 'tysk-3-5-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-5-4-ex-3',
        number: '5.4.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Test din filmkunnskap:',
        subTasks: [
          { label: 'a', task: 'Hva erklærte Oberhausener Manifest?', solution: '"Papas Kino ist tot" - farens kino er død. De ville fornye tysk film.' },
          { label: 'b', task: 'Hvilken film vant Oscar for beste utenlandske film i 2007?', solution: 'Das Leben der Anderen (2006)' },
          { label: 'c', task: 'Hvem regisserte Paris, Texas?', solution: 'Wim Wenders' },
          { label: 'd', task: 'Hva handler Good Bye, Lenin! om?', solution: 'En sønn som prøver å skjule for sin syke mor at DDR har falt.' },
        ],
        solution: 'a) Papas Kino ist tot, b) Das Leben der Anderen, c) Wim Wenders, d) DDR faller, sønn skjuler det',
        hints: ['Oberhausen-manifestet kom i 1962', 'Lenin-filmen er en tragi-komedie'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.1: Kaiserreich und Erster Weltkrieg
// ============================================================================

export const CHAPTER_TYSK_3_6_1: TextbookChapter = {
  id: 'tysk-3-6-1',
  courseId: 'tysk-3',
  chapterNumber: '6.1',
  title: 'Kaiserreich und Erster Weltkrieg',
  description: 'Det tyske keiserdømmet 1871-1918 og første verdenskrig.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå det tyske keiserdømmets struktur',
    'analysere årsakene til første verdenskrig',
    'diskutere krigens konsekvenser for Tyskland',
  ],
  content: [
    {
      id: 'tysk-3-6-1-intro',
      type: 'text',
      content: `## Das Deutsche Kaiserreich (1871-1918)

I 1871 ble det tyske riket samlet under Preussens ledelse. Otto von Bismarck, "jernkansleren", hadde gjennom tre kriger skapt et forent Tyskland med den prøyssiske kongen som keiser.

**Tidslinje:**
- **1871**: Riksgrunnleggelse i Versailles
- **1871-1890**: Bismarck som rikskansler
- **1888**: "Trekaiserår" - tre keisere på ett år
- **1890-1918**: Wilhelm II som keiser
- **1914-1918**: Første verdenskrig`,
    },
    {
      id: 'tysk-3-6-1-def-1',
      type: 'definition',
      title: 'Politisk system i keiserdømmet',
      content: `**Der Kaiser** (keiseren): Statsoverhode, øverstkommanderende, utnevnte kansleren.

**Der Reichskanzler**: Regjeringssjef, kun ansvarlig overfor keiseren (ikke parlamentet).

**Der Reichstag**: Nasjonalforsamlingen, valgt med allmenn stemmerett for menn, men begrenset makt.

**Der Bundesrat**: Representerte delstatene, dominert av Preussen.

**Preussen**: Største delstat, dominerte riket.`,
    },
    {
      id: 'tysk-3-6-1-text-1',
      type: 'text',
      content: `## Otto von Bismarck (1815-1898)

Bismarck var keiserdømmets arkitekt og rikskansler 1871-1890.

**Innenrikspolitikk:**
- **Kulturkampf** (1871-78): Kamp mot katolsk innflytelse
- **Sosialistloven** (1878-90): Forbud mot sosialistiske organisasjoner
- **Sosialforsikring**: Verdens første statlige velferdsordninger (1880-tallet)

**Utenrikspolitikk:**
- Alliansesystem for å isolere Frankrike
- "Ehrlicher Makler" (ærlig megler) på Berlin-kongressen 1878
- Motstand mot kolonipolitikk (senere endret)`,
    },
    {
      id: 'tysk-3-6-1-example-1',
      type: 'example',
      title: 'Bismarcks sosialforsikring',
      problem: `Bismarck innførte verdens første statlige sosialforsikring:
- 1883: Sykeforsikring
- 1884: Ulykkesforsikring
- 1889: Pensjons- og invalideforsikring

Hvorfor innførte den konservative Bismarck slike "sosialistiske" reformer?`,
      solution: `**Bismarcks strategi:**
Bismarck var ingen sosialreformator av overbevisning. Han innførte velferdsordningene for å:

1. **Ta brodden av sosialismen**: Gi arbeiderne noe å tape
2. **Binde folk til staten**: Velferd = lojalitet til keiserdømmet
3. **Forebygge revolusjon**: Fornøyde arbeidere gjør ikke opprør
4. **Kombinert med forbud**: Sosialforsikring + sosialistforbud

**Resultat:**
Modellen ble kopiert verden over og la grunnlaget for moderne velferdsstater.`,
    },
    {
      id: 'tysk-3-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-1-ex-1',
        number: '6.1.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test din kunnskap om keiserdømmet:',
        subTasks: [
          { label: 'a', task: 'Når ble det tyske riket grunnlagt?', solution: '1871' },
          { label: 'b', task: 'Hva var "Kulturkampf"?', solution: 'Bismarcks kamp mot katolsk innflytelse (1871-78).' },
          { label: 'c', task: 'Hvorfor innførte Bismarck sosialforsikring?', solution: 'For å ta brodden av sosialismen og binde arbeiderne til staten.' },
        ],
        solution: 'a) 1871, b) Kamp mot katolisismen, c) For å motvirke sosialisme',
        hints: ['Riket ble proklamert i Versailles', 'Kultur-kamp = kamp om kultur/religion'],
      },
    },
    {
      id: 'tysk-3-6-1-text-2',
      type: 'text',
      content: `## Wilhelm II og veien mot krig

Wilhelm II (1859-1941) ble keiser i 1888 og avsatte Bismarck i 1890. Hans aggressive utenrikspolitikk bidro til veien mot verdenskrig.

**"Weltpolitik":**
- Krav om Tysklands "plass i solen"
- Flåteopprusting mot Storbritannia
- Kolonieventyr (Afrika, Kina)
- Allianse med Østerrike-Ungarn

**Allianser før 1914:**
- **Trippelalliansen**: Tyskland, Østerrike-Ungarn, Italia
- **Ententen**: Frankrike, Russland, Storbritannia`,
    },
    {
      id: 'tysk-3-6-1-example-2',
      type: 'example',
      title: 'Krigsutbruddet 1914',
      problem: `28. juni 1914 ble erkehertug Franz Ferdinand myrdet i Sarajevo. Seks uker senere var Europa i krig. Hvordan eskalerte konflikten?`,
      solution: `**Julikrisen 1914:**

1. **28. juni**: Franz Ferdinand myrdes i Sarajevo
2. **23. juli**: Østerrike-Ungarn sender ultimatum til Serbia
3. **28. juli**: Østerrike-Ungarn erklærer krig mot Serbia
4. **30. juli**: Russland mobiliserer
5. **1. august**: Tyskland erklærer krig mot Russland
6. **3. august**: Tyskland erklærer krig mot Frankrike
7. **4. august**: Tyskland invaderer Belgia, Storbritannia erklærer krig

**"Blankofullmakten":**
Tyskland ga Østerrike-Ungarn ubetinget støtte - "blankofullmakt" - som oppmuntret til aggresjon.`,
    },
    {
      id: 'tysk-3-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-1-ex-2',
        number: '6.1.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser krigsutbruddet:',
        subTasks: [
          { label: 'a', task: 'Hva var "Blankofullmakten"?', solution: 'Tysklands ubetingede støtte til Østerrike-Ungarn, som oppmuntret til aggresjon mot Serbia.' },
          { label: 'b', task: 'Hvorfor erklærte Storbritannia krig?', solution: 'Tyskland invaderte det nøytrale Belgia, som Storbritannia hadde garantert.' },
          { label: 'c', task: 'Hvilken allianse tilhørte Tyskland?', solution: 'Trippelalliansen (med Østerrike-Ungarn og Italia).' },
        ],
        solution: 'Alliansesystemet og blankofullmakten gjorde en lokal konflikt til verdenskrig.',
        hints: ['Blankofullmakt = ubetinget støtte', 'Belgias nøytralitet var garantert'],
      },
    },
    {
      id: 'tysk-3-6-1-text-3',
      type: 'text',
      content: `## Første verdenskrig (1914-1918)

**Vestfronten:**
- Skyttergravskrig fra Sveits til Kanalen
- Millioner døde i små fremstøt
- Slaget ved Verdun (1916): Over 700.000 døde

**Østfronten:**
- Mer bevegelig krig
- Tysk seier over Russland
- Brest-Litovsk-freden (1918)

**Krigens slutt:**
- 1917: USA går inn i krigen
- 1918: Tyske våroffensiver mislykkes
- November 1918: Revolusjon, keiseren abdiserer
- 11. november 1918: Våpenhvile`,
    },
    {
      id: 'tysk-3-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-1-ex-3',
        number: '6.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test din kunnskap om første verdenskrig:',
        subTasks: [
          { label: 'a', task: 'Hva kjennetegnet vestfronten?', solution: 'Skyttergravskrig med minimal fremgang og enorme tap.' },
          { label: 'b', task: 'Når gikk USA inn i krigen?', solution: '1917' },
          { label: 'c', task: 'Hva skjedde i november 1918?', solution: 'Revolusjon i Tyskland, keiseren abdiserte, våpenhvile 11. november.' },
          { label: 'd', task: 'Hva var "Dolkestøtlegenden"?', solution: 'Myten om at hæren ble "dolket i ryggen" av politikere/jøder - brukt av nazistene.' },
        ],
        solution: 'a) Skyttergravskrig, b) 1917, c) Revolusjon og våpenhvile, d) Myte om forræderi',
        hints: ['Vestfronten var statisk', 'Dolkestøtlegenden var propaganda'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2: Weimarer Republik
// ============================================================================

export const CHAPTER_TYSK_3_6_2: TextbookChapter = {
  id: 'tysk-3-6-2',
  courseId: 'tysk-3',
  chapterNumber: '6.2',
  title: 'Weimarer Republik',
  description: 'Weimar-republikken 1919-1933, nazismens fremvekst og Holocaust.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå Weimar-republikkens utfordringer',
    'analysere nazismens fremvekst',
    'diskutere Holocaust og dets historiske kontekst',
  ],
  content: [
    {
      id: 'tysk-3-6-2-intro',
      type: 'text',
      content: `## Die Weimarer Republik (1919-1933)

Weimar-republikken var Tysklands første demokrati. Den ble født av nederlag og revolusjon, og døde med Hitlers maktovertagelse.

**Perioder:**
- **1919-1923**: Krisetid (revolusjon, inflasjon, opprør)
- **1924-1929**: "Gyldne 20-år" (stabilitet, kultur)
- **1930-1933**: Oppløsning (depresjon, politisk kaos)`,
    },
    {
      id: 'tysk-3-6-2-def-1',
      type: 'definition',
      title: 'Weimar-forfatningen',
      content: `**Reichspräsident**: Folkevalgt president med store fullmakter, inkludert:
- **Artikkel 48**: Nødsfullmakter - kunne styre uten parlamentet

**Reichstag**: Parlamentet, valgt med proporsjonal representasjon.

**Reichskanzler**: Regjeringssjef, avhengig av parlamentets tillit.

**Problem:** Kombinasjonen av sterk president og svakt parlament viste seg skjebnesvanger.`,
    },
    {
      id: 'tysk-3-6-2-text-1',
      type: 'text',
      content: `## Versailles-traktaten (1919)

Versailles-traktaten påla Tyskland tunge byrder:

**Territoriale tap:**
- Alsace-Lorraine til Frankrike
- Polsk korridor, deler av Schlesien til Polen
- Alle kolonier tapt

**Militære begrensninger:**
- Maks 100.000 soldater
- Ingen tungt våpen, fly eller ubåter
- Rhinland demilitarisert

**Økonomiske byrder:**
- 132 milliarder gullmark i erstatninger
- Krigsskyldparagrafen (artikkel 231)

**Følger:**
"Diktat" og "Dolkestøtlegenden" ble brukt mot demokratiet.`,
    },
    {
      id: 'tysk-3-6-2-example-1',
      type: 'example',
      title: 'Hyperinflasjonen 1923',
      problem: `I november 1923 kostet et brød 200 milliarder mark. Hvordan kunne inflasjonen bli så ekstrem?`,
      solution: `**Årsaker:**
1. Krigslån: Staten hadde finansiert krigen med lån
2. Erstatninger: Betalinger til seiersmaktene
3. Ruhr-okkupasjonen (1923): Frankrike besatte Ruhr, passiv motstand finansiert med trykking av penger

**Konsekvenser:**
- Middelklassen mistet sparepengene
- Pensjonister ruinert
- Men: Gjeld ble verdiløs

**Løsning:**
Rentenmark innført november 1923, stabilisering under Gustav Stresemann.

**Traume:**
Inflasjonen skapte varig mistillit til demokratiet og ble brukt av nazistene.`,
    },
    {
      id: 'tysk-3-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-2-ex-1',
        number: '6.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Weimar-republikkens problemer:',
        subTasks: [
          { label: 'a', task: 'Hva var Artikkel 48?', solution: 'Nødsfullmakter som lot presidenten styre uten parlamentet.' },
          { label: 'b', task: 'Hva var "krigsskyldparagrafen"?', solution: 'Artikkel 231 i Versailles-traktaten - Tyskland måtte akseptere skyld for krigen.' },
          { label: 'c', task: 'Hvordan påvirket hyperinflasjonen politikken?', solution: 'Den ruinerte middelklassen og skapte mistillit til demokratiet.' },
        ],
        solution: 'Weimar-republikken var belastet med Versailles, økonomisk kaos og svake institusjoner.',
        hints: ['Artikkel 48 ble misbrukt av Hindenburg', 'Krigsskyld var svært upopulært'],
      },
    },
    {
      id: 'tysk-3-6-2-text-2',
      type: 'text',
      content: `## Nazismens fremvekst

**Adolf Hitler og NSDAP:**
- 1919: Hitler blir medlem av DAP (senere NSDAP)
- 1923: Ølkjellerkuppet i München - fiasko, Hitler i fengsel
- 1924: "Mein Kampf" skrives i fengselet
- 1930: NSDAP blir nest største parti
- 1932: Største parti, Hitler krever kanslermakten
- **30. januar 1933**: Hitler utnevnes til rikskansler

**Propaganda og vold:**
- SA (Sturmabteilung): Brunskjortene, gatevold
- Løfter: Arbeid, nasjonal storhet, hevn for Versailles
- Syndebukker: Jøder, kommunister, demokrater`,
    },
    {
      id: 'tysk-3-6-2-example-2',
      type: 'example',
      title: 'Hitlers vei til makten',
      problem: `Hitler ble aldri valgt til rikskansler. Hvordan kom han likevel til makten?`,
      solution: `**Prosessen:**

1. **Valg 1932**: NSDAP største parti (37%), men ikke flertall
2. **Intrigemakeri**: Konservative eliter (Papen, Schleicher) trodde de kunne "temme" Hitler
3. **Hindenburgs utnevnelse**: President Hindenburg utnevnte Hitler til kansler 30. januar 1933
4. **"Koalisjonsregjering"**: Bare 3 av 11 ministre var nazister

**Feilberegning:**
De konservative trodde de kunne kontrollere Hitler. I stedet tok han over all makt innen måneder.

**Nøkkel:** Riksdagsbrann (27. februar 1933) → Nødsforordning → Fullmaktslov (23. mars 1933) → Diktatur`,
    },
    {
      id: 'tysk-3-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-2-ex-2',
        number: '6.2.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser Hitlers maktovertagelse:',
        subTasks: [
          { label: 'a', task: 'Når ble Hitler utnevnt til rikskansler?', solution: '30. januar 1933' },
          { label: 'b', task: 'Hva var "Fullmaktsloven"?', solution: 'Lov fra 23. mars 1933 som ga regjeringen lovgivende makt i fire år - slutten på demokratiet.' },
          { label: 'c', task: 'Hvem trodde de kunne kontrollere Hitler?', solution: 'Konservative eliter som Papen og Hindenburg - de tok grundig feil.' },
        ],
        solution: 'Hitler kom til makten gjennom en kombinasjon av valgsuksess, politisk intriger og terror.',
        hints: ['30. januar 1933 er en nøkkeldato', 'Fullmaktsloven avsluttet demokratiet legalt'],
      },
    },
    {
      id: 'tysk-3-6-2-text-3',
      type: 'text',
      content: `## Holocaust - Folkemordet

**Holocaust** (hebraisk: Shoah) var det systematiske folkemordet på ca. 6 millioner jøder og millioner av andre ofre.

**Utvikling:**
- **1933-38**: Diskriminering, Nürnberg-lovene (1935), Krystallnatten (1938)
- **1939-41**: Ghettoer, masseskytinger i øst
- **1942-45**: "Endlösung" - systematisk industrielt folkemord

**Konsentrasjonsleirer:**
- Auschwitz-Birkenau: Over 1 million myrdet
- Treblinka, Sobibor, Belzec: Rene utryddelsesleirer

**Andre ofre:**
- Roma og Sinti, funksjonshemmede, homofile, politiske fanger, krigsfanger`,
    },
    {
      id: 'tysk-3-6-2-example-3',
      type: 'example',
      title: 'Wannsee-konferansen',
      problem: `20. januar 1942 møttes høytstående nazi-embetsmenn i en villa ved Wannsee utenfor Berlin. Hva ble vedtatt?`,
      solution: `**Wannsee-konferansen:**

**Deltakere:** 15 høytstående embetsmenn, ledet av Reinhard Heydrich
**Varighet:** Ca. 90 minutter
**Protokoll:** Ført av Adolf Eichmann

**"Endlösung der Judenfrage":**
- Koordinering av deportasjon og mord på alle jøder i Europa
- Estimat: 11 millioner jøder
- Systematisk, industriell tilnærming
- Byråkratisk språk for massemord

**Betydning:**
Konferansen viste hvordan folkemord ble planlagt med byråkratisk nøyaktighet av "vanlige" embetsmenn.`,
    },
    {
      id: 'tysk-3-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-2-ex-3',
        number: '6.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test din kunnskap om Holocaust:',
        subTasks: [
          { label: 'a', task: 'Hva var Nürnberg-lovene?', solution: 'Raselover fra 1935 som fratok jøder borgerrettigheter.' },
          { label: 'b', task: 'Hva skjedde under Krystallnatten?', solution: '9.-10. november 1938: Pogromer mot jøder, synagoger brent, forretninger ødelagt.' },
          { label: 'c', task: 'Hvor mange jøder ble myrdet under Holocaust?', solution: 'Ca. 6 millioner.' },
          { label: 'd', task: 'Hva var Auschwitz?', solution: 'Den største konsentrasjons- og utryddelsesleiren, over 1 million myrdet.' },
        ],
        solution: 'a) Raselover 1935, b) Pogromer 1938, c) Ca. 6 millioner, d) Største utryddelsesleir',
        hints: ['Nürnberg-lovene kom i 1935', 'Krystallnatten refererer til knust glass'],
      },
    },
    {
      id: 'tysk-3-6-2-note-1',
      type: 'note',
      content: `**Viktig:** Holocaust var et unikt industrielt folkemord, men det kom ikke ut av intet. Antisemittismen hadde dype røtter i europeisk historie. Å forstå Holocaust krever å se både de lange linjene og de spesifikke omstendighetene i Nazi-Tyskland.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3: Nachkriegszeit
// ============================================================================

export const CHAPTER_TYSK_3_6_3: TextbookChapter = {
  id: 'tysk-3-6-3',
  courseId: 'tysk-3',
  chapterNumber: '6.3',
  title: 'Nachkriegszeit',
  description: 'Etterkrigstiden 1945-1989, delingen av Tyskland og Berlinmuren.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå Tysklands deling og dens årsaker',
    'sammenligne BRD og DDR',
    'analysere murens betydning og fall',
  ],
  content: [
    {
      id: 'tysk-3-6-3-intro',
      type: 'text',
      content: `## "Stunde Null" - Nullpunktet (1945)

8. mai 1945 kapitulerte Nazi-Tyskland betingelsesløst. Landet lå i ruiner, og seiersmaktene delte det mellom seg.

**Okkupasjonssoner:**
- **Amerikansk sone**: Sør-vest (Bayern, Hessen, etc.)
- **Britisk sone**: Nord-vest (Hamburg, NRW, etc.)
- **Fransk sone**: Sør-vest (Rhinland-Pfalz, etc.)
- **Sovjetisk sone**: Øst (Sachsen, Thüringen, etc.)
- **Berlin**: Delt i fire sektorer`,
    },
    {
      id: 'tysk-3-6-3-def-1',
      type: 'definition',
      title: 'De to tyske statene',
      content: `**BRD** (Bundesrepublik Deutschland):
- Grunnlagt 23. mai 1949
- Vestlig demokrati, markedsøkonomi
- Hovedstad: Bonn
- Tilknyttet NATO (1955)

**DDR** (Deutsche Demokratische Republik):
- Grunnlagt 7. oktober 1949
- Kommunistisk ettpartistat, planøkonomi
- Hovedstad: Øst-Berlin
- Tilknyttet Warszawa-pakten (1955)`,
    },
    {
      id: 'tysk-3-6-3-text-1',
      type: 'text',
      content: `## Bundesrepublik Deutschland (Vest-Tyskland)

**"Wirtschaftswunder"** (det økonomiske mirakel):
- Marshallplanen: Amerikansk hjelp til gjenoppbygging
- Ludwig Erhard: "Sosial markedsøkonomi"
- Raskt økonomisk vekst på 1950-60-tallet
- Full sysselsetting, velstandsøkning

**Politisk utvikling:**
- Konrad Adenauer (kansler 1949-63): Vestbinding, forsoning med Frankrike
- Willy Brandt (kansler 1969-74): "Ostpolitik" - tilnærming til øst
- Helmut Schmidt (1974-82), Helmut Kohl (1982-98)`,
    },
    {
      id: 'tysk-3-6-3-example-1',
      type: 'example',
      title: 'Willy Brandts kneling i Warszawa',
      problem: `7. desember 1970 knelte Willy Brandt foran minnesmerket over ghetto-opprøret i Warszawa. Analyser betydningen av denne gesten.`,
      solution: `**Kontekst:**
Brandt var i Warszawa for å undertegne Warszawa-traktaten som anerkjente Polens vestgrense.

**Gesten:**
Helt uventet sank Brandt ned på kne foran minnesmerket - i stille ettertanke i ca. 30 sekunder.

**Betydning:**
- **Symbolsk oppgjør**: Tyskland tok ansvar for Holocaust
- **Personlig integritet**: Brandt hadde selv vært i motstandsbevegelsen
- **Internasjonalt**: Markerte Vesttysklands vilje til forsoning
- **Kontroversielt**: 48% av tyskerne syntes det var overdrevet

**Ettertidens dom:**
Gesten anses i dag som et viktig øyeblikk i tysk historiebearbeiding.`,
    },
    {
      id: 'tysk-3-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-3-ex-1',
        number: '6.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test din kunnskap om BRD:',
        subTasks: [
          { label: 'a', task: 'Hva var "Wirtschaftswunder"?', solution: 'Det vesttyske økonomiske mirakelet på 1950-60-tallet.' },
          { label: 'b', task: 'Hva var "Ostpolitik"?', solution: 'Willy Brandts politikk for tilnærming til Øst-Europa og DDR.' },
          { label: 'c', task: 'Hvem var BRDs første kansler?', solution: 'Konrad Adenauer (1949-1963).' },
        ],
        solution: 'a) Økonomisk mirakel, b) Tilnærming til øst, c) Adenauer',
        hints: ['Wirtschaft = økonomi, Wunder = mirakel', 'Ost = øst, Politik = politikk'],
      },
    },
    {
      id: 'tysk-3-6-3-text-2',
      type: 'text',
      content: `## DDR - Øst-Tyskland

**Politisk system:**
- SED (Sozialistische Einheitspartei Deutschlands): Dominerende parti
- "Demokratisk sentralisme": Sentralstyrt ettpartistat
- Stasi (Ministerium für Staatssicherheit): Hemmelig politi med 90.000 ansatte og 175.000 informanter

**Økonomi:**
- Planøkonomi, kollektivisering
- "Volkseigene Betriebe" (VEB): Statseid industri
- Kronisk varemangel, men høyere levestandard enn andre østblokkland

**Hverdagsliv:**
- Begrenset reisefrihet
- Sensur og overvåkning
- Men også: Barnehager, likestilling, sikker jobb`,
    },
    {
      id: 'tysk-3-6-3-example-2',
      type: 'example',
      title: 'Stasi - overvåkningsstaten',
      problem: `Stasi, DDRs hemmelige politi, hadde et enormt nettverk av informanter. Analyser overvåkningens omfang og konsekvenser.`,
      solution: `**Omfang:**
- 90.000 hovedansatte
- 175.000 "inoffizielle Mitarbeiter" (IM) - informanter
- Arkiv med 111 km dokumenter
- 1 av 63 innbyggere var informant

**Metoder:**
- Overvåkning av post og telefon
- Infiltrasjon av alle samfunnsområder
- "Zersetzung" (oppløsning): Psykologisk terror
- Naboer, kolleger, til og med familiemedlemmer spionerte

**Konsekvenser:**
- Atmosfære av frykt og mistillit
- Selvsensur
- Etter 1989: Sjokkerende avsløringer om hvem som hadde spionert

Filmen "Das Leben der Anderen" (2006) skildrer denne overvåkningsstaten.`,
    },
    {
      id: 'tysk-3-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-3-ex-2',
        number: '6.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser DDR-samfunnet:',
        subTasks: [
          { label: 'a', task: 'Hva var Stasi?', solution: 'DDRs hemmelige politi (Ministerium für Staatssicherheit).' },
          { label: 'b', task: 'Hva var en "IM"?', solution: 'Inoffizielle Mitarbeiter - uoffisiell medarbeider/informant for Stasi.' },
          { label: 'c', task: 'Hvilket parti styrte DDR?', solution: 'SED (Sozialistische Einheitspartei Deutschlands).' },
        ],
        solution: 'DDR var en overvåkningsstat der Stasi kontrollerte befolkningen gjennom et enormt informantnettverk.',
        hints: ['Stasi = Staatssicherheit', 'IM spionerte på venner og familie'],
      },
    },
    {
      id: 'tysk-3-6-3-text-3',
      type: 'text',
      content: `## Berlinmuren (1961-1989)

**Byggingen (13. august 1961):**
- Flukt fra DDR til Vest-Berlin hadde tappet landet for arbeidskraft
- Muren ble bygget på én natt
- 155 km mur rundt Vest-Berlin
- "Antifaschistischer Schutzwall" (antifascistisk beskyttelsesvoll) - DDRs navn

**Konsekvenser:**
- Familier splittet over natten
- Over 100 mennesker drept ved fluktforsøk
- Muren ble symbolet på den kalde krigen

**Fallet (9. november 1989):**
- Masseprotester i DDR
- Pressepressekonferanse: "Sofort, unverzüglich" (umiddelbart)
- Folk strømmet til grenseovergangene
- Muren ble åpnet uten vold`,
    },
    {
      id: 'tysk-3-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-3-ex-3',
        number: '6.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test din kunnskap om Berlinmuren:',
        subTasks: [
          { label: 'a', task: 'Når ble muren bygget?', solution: '13. august 1961' },
          { label: 'b', task: 'Hva kalte DDR muren?', solution: 'Antifaschistischer Schutzwall (antifascistisk beskyttelsesvoll)' },
          { label: 'c', task: 'Når falt muren?', solution: '9. november 1989' },
          { label: 'd', task: 'Hvorfor ble muren bygget?', solution: 'For å stoppe flukten fra DDR til Vest-Berlin.' },
        ],
        solution: 'a) 13. august 1961, b) Antifaschistischer Schutzwall, c) 9. november 1989, d) Stoppe flukt',
        hints: ['Muren ble bygget på én natt', '9. november er en viktig dato i tysk historie'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.4: Wiedervereinigung bis heute
// ============================================================================

export const CHAPTER_TYSK_3_6_4: TextbookChapter = {
  id: 'tysk-3-6-4',
  courseId: 'tysk-3',
  chapterNumber: '6.4',
  title: 'Wiedervereinigung bis heute',
  description: 'Gjenforeningen 1990 og dagens Tyskland.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå gjenforeningsprosessen',
    'analysere utfordringer i det forente Tyskland',
    'diskutere Tysklands rolle i dag',
  ],
  content: [
    {
      id: 'tysk-3-6-4-intro',
      type: 'text',
      content: `## Die Wiedervereinigung (Gjenforeningen)

Etter murens fall gikk det raskt mot gjenforening. 3. oktober 1990 opphørte DDR å eksistere, og de østtyske delstatene ble en del av Bundesrepublik.

**Tidslinje:**
- **9. november 1989**: Muren faller
- **18. mars 1990**: Første frie valg i DDR
- **1. juli 1990**: Økonomisk union (D-Mark i øst)
- **3. oktober 1990**: Offisiell gjenforening
- **2. desember 1990**: Første felles valg`,
    },
    {
      id: 'tysk-3-6-4-def-1',
      type: 'definition',
      title: 'Gjenforeningsprosessen',
      content: `**"2+4-forhandlingene"**: De to tyske statene + fire seiersmakter (USA, USSR, UK, Frankrike) forhandlet om gjenforening.

**"Beitritt"** (tiltredelse): DDR trådte inn i BRD etter artikkel 23 i grunnloven - ikke en sammenslåing av likeverdige stater.

**Einigungsvertrag** (enighetsavtalen): Regulerte praktiske spørsmål om gjenforeningen.

**Solidaritätszuschlag** ("Soli"): Ekstraskatt for å finansiere gjenoppbyggingen i øst.`,
    },
    {
      id: 'tysk-3-6-4-text-1',
      type: 'text',
      content: `## Utfordringer etter gjenforeningen

**Økonomisk transformasjon:**
- DDR-industrien brøt sammen
- Massearbeidsledighet i øst (opp til 20%)
- Treuhandanstalt: Privatiserte/avviklet DDR-bedrifter
- "Blühende Landschaften" (blomstrende landskap) - Kohls løfte som tok lang tid

**Sosiale spenninger:**
- "Ossi" vs. "Wessi" - gjensidig mistillit
- Mange østtyskere følte seg som annenrangs borgere
- Nostalgi: "Ostalgie" - lengsel etter DDR-tiden
- "Mauer in den Köpfen" (muren i hodene) - mentale skiller`,
    },
    {
      id: 'tysk-3-6-4-example-1',
      type: 'example',
      title: 'Ostalgie - nostalgi etter DDR',
      problem: `Mange østtyskere utviklet "Ostalgie" - nostalgi etter DDR-tiden. Hvordan kan man lengtes etter et diktatur?`,
      solution: `**Forklaring:**

Ostalgie handler sjelden om å ønske diktaturet tilbake. Det handler om:

1. **Hverdagskultur**: Produkter, musikk, merker som forsvant (Trabant, Ampelmännchen)
2. **Fellesskap**: Opplevelsen av solidaritet og trygghet (jobb, barnehage)
3. **Identitet**: Følelsen av at livshistorien ble devaluert
4. **Kritikk av kapitalismen**: Reaksjon på arbeidsledighet og usikkerhet

**Eksempler:**
- Filmen "Good Bye, Lenin!" (2003) tematiserer Ostalgie
- DDR-museer og produkter (Vita Cola, Rotkäppchen Sekt)
- Ampelmännchen (fotgjengerlyssymbol) ble kultobjekt

**Viktig:** Ostalgie må skilles fra reell støtte til SED-diktaturet.`,
    },
    {
      id: 'tysk-3-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-4-ex-1',
        number: '6.4.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser gjenforeningens utfordringer:',
        subTasks: [
          { label: 'a', task: 'Hva var "Treuhandanstalt"?', solution: 'Organisasjonen som privatiserte eller avviklet DDR-bedrifter etter gjenforeningen.' },
          { label: 'b', task: 'Hva betyr "Mauer in den Köpfen"?', solution: 'Muren i hodene - mentale skiller mellom øst og vest som vedvarte etter den fysiske murens fall.' },
          { label: 'c', task: 'Hva er "Ostalgie"?', solution: 'Nostalgi etter DDR-tiden, ofte knyttet til hverdagskultur og identitet.' },
        ],
        solution: 'Gjenforeningen skapte økonomiske og sosiale utfordringer som fortsatt merkes.',
        hints: ['Treuhand = formynderi', 'Ostalgie = Ost + Nostalgie'],
      },
    },
    {
      id: 'tysk-3-6-4-text-2',
      type: 'text',
      content: `## Tyskland i dag

**Politisk:**
- Europas største økonomi
- Ledende rolle i EU
- NATO-medlem, men historisk forsiktig med militær makt
- Flyktningkrisen 2015: "Wir schaffen das" (vi klarer det) - Merkel

**Kanslere siden 1990:**
- **Helmut Kohl** (1982-1998): "Gjenforeningskansleren"
- **Gerhard Schröder** (1998-2005): Agenda 2010-reformer
- **Angela Merkel** (2005-2021): 16 år, første kvinnelige kansler
- **Olaf Scholz** (2021-): Koalisjon av SPD, Grønne, FDP`,
    },
    {
      id: 'tysk-3-6-4-example-2',
      type: 'example',
      title: 'Angela Merkel - 16 år som kansler',
      problem: `Angela Merkel var kansler fra 2005 til 2021. Analyser hennes betydning for Tyskland.`,
      solution: `**Bakgrunn:**
- Født 1954 i Hamburg, vokste opp i DDR
- Fysiker, gikk inn i politikken etter murens fall
- Første kvinnelige og første østtyske kansler

**Viktige hendelser:**
- **Finanskrisen 2008**: Stabiliserte eurosonen
- **Eurokrisen 2010-15**: Streng sparepolitikk
- **Fukushima 2011**: Besluttet å fase ut atomkraft
- **Flyktningkrisen 2015**: Åpnet grensene, kontroversielt

**Kritikk:**
- For lite visjon?
- Manglende digitalisering
- Avhengighet av russisk gass

**Ettermæle:**
Stabil, pragmatisk leder, men også kritisert for manglende reformer.`,
    },
    {
      id: 'tysk-3-6-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-4-ex-2',
        number: '6.4.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Test din kunnskap om moderne Tyskland:',
        subTasks: [
          { label: 'a', task: 'Når ble Tyskland offisielt gjenforent?', solution: '3. oktober 1990' },
          { label: 'b', task: 'Hvem var Tysklands første kvinnelige kansler?', solution: 'Angela Merkel' },
          { label: 'c', task: 'Hva sa Merkel under flyktningkrisen 2015?', solution: '"Wir schaffen das" (Vi klarer det)' },
          { label: 'd', task: 'Hvor lenge var Merkel kansler?', solution: '16 år (2005-2021)' },
        ],
        solution: 'a) 3. oktober 1990, b) Angela Merkel, c) Wir schaffen das, d) 16 år',
        hints: ['3. oktober er Tysklands nasjonaldag', 'Merkel var den lengst sittende kansler siden Kohl'],
      },
    },
    {
      id: 'tysk-3-6-4-text-3',
      type: 'text',
      content: `## Aktuelle utfordringer

**Økonomi:**
- Energiomstilling ("Energiewende")
- Industriell transformasjon
- Demografisk utfordring (aldrende befolkning)

**Samfunn:**
- Integrasjon av innvandrere
- Økt populisme (AfD)
- Øst-vest-forskjeller vedvarer
- Antisemittisme og høyreekstremisme

**Internasjonalt:**
- Ukraina-krigen: Ny sikkerhetspolitikk, "Zeitenwende"
- Energiavhengighet av Russland
- Ledende rolle i klimapolitikk`,
    },
    {
      id: 'tysk-3-6-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-6-4-ex-3',
        number: '6.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter Tysklands rolle i dag:',
        subTasks: [
          { label: 'a', task: 'Hva betyr "Energiewende"?', solution: 'Energiomstillingen - Tysklands overgang til fornybar energi og vekk fra atomkraft.' },
          { label: 'b', task: 'Hva er "Zeitenwende"?', solution: 'Vendepunktet i tysk sikkerhetspolitikk etter Ukraina-invasjonen 2022 - mer forsvar, mindre naivitet overfor Russland.' },
          { label: 'c', task: 'Hvilket parti representerer høyrepopulisme i Tyskland?', solution: 'AfD (Alternative für Deutschland)' },
        ],
        solution: 'Tyskland står overfor utfordringer innen energi, sikkerhet og samfunnssamhold.',
        hints: ['Energiewende startet etter Fukushima', 'Zeitenwende ble proklamert av Scholz i 2022'],
      },
    },
    {
      id: 'tysk-3-6-4-tip-1',
      type: 'tip',
      content: `**For eksamen:** Vær forberedt på å diskutere hvordan tysk historie påvirker dagens politikk. Temaer som forholdet til militærmakt, EU-ledelse og historisk ansvar er relevante.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TYSK_3_CHAPTERS_4_6: TextbookChapter[] = [
  CHAPTER_TYSK_3_4_1,
  CHAPTER_TYSK_3_4_2,
  CHAPTER_TYSK_3_4_3,
  CHAPTER_TYSK_3_4_4,
  CHAPTER_TYSK_3_5_1,
  CHAPTER_TYSK_3_5_2,
  CHAPTER_TYSK_3_5_3,
  CHAPTER_TYSK_3_5_4,
  CHAPTER_TYSK_3_6_1,
  CHAPTER_TYSK_3_6_2,
  CHAPTER_TYSK_3_6_3,
  CHAPTER_TYSK_3_6_4,
];
