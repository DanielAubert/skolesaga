const fs = require('fs');
const path = require('path');
const outDir = path.join(__dirname, '..', 'src', 'lib', 'data');

// Helper: generate a standard subchapter with minimal boilerplate
function mkSub(n, title, subtitle, desc, goals, defTitle, defContent, intro, texts, examples, exercises, tip, note) {
  return { n, title, subtitle, desc, goals, defTitle, defContent, intro, texts, examples, exercises, tip, note };
}

function mkEx(diff, task, subs) {
  return { diff, task, subs: subs.map(s => ({ t: s[0], s: s[1] })) };
}

// ============================================================================
// SPANSK 3 CHAPTERS 4-6
// ============================================================================

const s3ch4 = {
  title: 'LITERATURA CLÁSICA Y MODERNA',
  subs: [
    mkSub('4.1', 'El Quijote y Cervantes', 'Cervantes og Don Quijote',
      'Fordyp deg i Don Quijote – den første moderne romanen og dens tematikk.',
      ['analysere sentrale temaer i Don Quijote', 'drøfte forholdet mellom idealisme og realisme', 'forstå den historiske konteksten til Cervantes'],
      'Don Quijote og idealisme vs. realisme',
      `**Don Quijote de la Mancha** (1605/1615) av Miguel de Cervantes regnes som den første moderne romanen i verdenslitteraturen.\n\n**Sentrale temaer:**\n- **Idealismo vs. realismo:** Don Quijote ser verden gjennom ridderlitteraturen; Sancho Panza representerer den jordnære realismen.\n- **La locura y la cordura:** Grensen mellom galskap og fornuft utforskes gjennomgående.\n- **La metaficción:** Romanen kommenterer seg selv og forholdet mellom fiksjon og virkelighet.\n- **La libertad:** Frihet og individets rett til å velge sin egen vei.\n\n**Historisk kontekst:** Skrevet under Spanias \"Siglo de Oro\" (den gylne tidsalder), en tid med kulturell blomstring men politisk nedgang.`,
      'Miguel de Cervantes (1547–1616) skrev Don Quijote i en tid da Spania var i overgang fra stormakt til nedgangsperiode. Verket er en parodi på datidens ridderlitteratur, men rommer langt dypere filosofiske lag.',
      ['## Utdragsanalyse: Åpningen\n\n*\"En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.\"*\n\n**Analyse:**\n- **\"No quiero acordarme\"** – Fortelleren velger bevisst å glemme. Hvem er denne fortelleren?\n- **\"Hidalgo\"** – Lavadel, en mann av beskjeden rang som drømmer om storhet.\n- **Detaljene** (lanse, gammelt skjold, mager hest) tegner et bilde av forfall og nostalgi.\n\nCervantes etablerer fra første setning spenningen mellom virkelighet og illusjon.',
       '## Vindmølleepisoden (Kap. VIII)\n\n*\"Mire vuestra merced —respondió Sancho— que aquellos que allí se parecen no son gigantes, sino molinos de viento.\"*\n\n**Tolkning:**\n- Don Quijote ser kjemper der Sancho ser vindmøller.\n- Episoden er blitt et universelt symbol: \"å kjempe mot vindmøller\" = å kjempe for noe umulig.\n- **Idealisme:** Don Quijote nekter å akseptere virkeligheten slik den er.\n- **Spørsmål:** Er det galskap – eller mot – å insistere på sine idealer?'],
      [{ title: 'Temaanalyse', problem: 'Hvordan representerer Don Quijote og Sancho Panza motsetningen mellom idealisme og realisme?', solution: 'Don Quijote ser virkeligheten gjennom ridderlitteraturens filter – vertshus blir slott, vindmøller blir kjemper. Sancho Panza ser tingene slik de er. Sammen representerer de **menneskets doble natur**: drømmeren og realisten.' },
       { title: 'Historisk kontekst', problem: 'Hvorfor er det viktig å kjenne til Spanias Siglo de Oro for å forstå Don Quijote?', solution: 'Siglo de Oro var en tid med stor kulturell produksjon, men også politisk og økonomisk tilbakegang. Don Quijotes nostalgiske lengsel etter riddertidens idealer speiler Spanias egen lengsel etter fordums storhet.' }],
      [mkEx('lett', 'Grunnleggende forståelse av Don Quijote:', [
        ['Hvem skrev Don Quijote, og når ble verket utgitt?', 'Miguel de Cervantes; del 1 i 1605, del 2 i 1615.'],
        ['Hva heter Don Quijotes væpner?', 'Sancho Panza.'],
        ['Hva ser Don Quijote når han ser vindmøller?', 'Han ser kjemper (gigantes) som han vil kjempe mot.'],
        ['Hva betyr «Siglo de Oro»?', 'Den gylne tidsalder – Spanias kulturelle blomstringsperiode (ca. 1500–1700).']]),
       mkEx('lett', 'Match begrep med forklaring:', [
        ['Idealismo', 'Å se verden slik man ønsker den skal være, ikke slik den er.'],
        ['Realismo', 'Å se verden slik den faktisk er, uten illusjoner.'],
        ['Metaficción', 'Når en tekst kommenterer seg selv som fiksjon.'],
        ['Hidalgo', 'Lavadelsmann i det spanske samfunnet.']]),
       mkEx('medium', 'Analyser utdrag fra Don Quijote:', [
        ['Hva forteller åpningssetningen oss om fortelleren?', 'Fortelleren er upålitelig – han sier han ikke vil huske stedet. Dette skaper avstand og ironi.'],
        ['Hvorfor er vindmølleepisoden blitt et universelt symbol?', 'Fordi den viser konflikten mellom ideal og virkelighet – å kjempe for noe andre mener er umulig.'],
        ['Hvordan bruker Cervantes humor i verket?', 'Gjennom ironi, overdrivelse og kontrasten mellom Don Quijotes høytidelige språk og den banale virkeligheten.'],
        ['Hva mener Cervantes med å la Don Quijote lese for mange ridderromaner?', 'Han kritiserer ureflektert lesning og viser hvordan fiksjon kan forvrenge virkelighetsoppfatningen.']]),
       mkEx('vanskelig', 'Drøftingsoppgaver om Don Quijote:', [
        ['Er Don Quijote gal, eller er han den eneste som tør å drømme? Begrunn.', 'Svar bør drøfte at galskap og idealisme er to sider av samme sak. Don Quijote utfordrer konvensjoner og tør å leve etter sine idealer, selv om verden kaller ham gal.'],
        ['Hvordan er Don Quijote relevant i dag?', 'Temaene idealisme vs. realisme, individets kamp mot samfunnet, og forholdet mellom fiksjon og virkelighet er tidløse.'],
        ['Sammenlign Don Quijote og Sancho Panza som litterære karakterer.', 'Don Quijote utvikler seg mot større realisme; Sancho utvikler seg mot større idealisme. De påvirker hverandre gjensidig – dette er «quijotización de Sancho» og «sanchificación de Don Quijote».'],
        ['Diskuter begrepet metafiksjon i Don Quijote.', 'I del 2 vet karakterene at del 1 er skrevet. De diskuterer sin egen bok. Cervantes leker med grensene mellom fiksjon og virkelighet på en måte som var banebrytende.']])],
      '**Lesetips:** Les gjerne Don Quijote i en modernisert spansk versjon. Fokuser på de mest kjente episodene (vindmøllene, Dulcinea, innvielsen som ridder) og prøv å identifisere temaene.',
      '**Oppsummering: Don Quijote**\n\n- Cervantes (1547–1616), utgitt 1605/1615\n- Første moderne roman – parodi på ridderlitteraturen\n- Sentrale temaer: idealisme vs. realisme, galskap vs. fornuft, metafiksjon\n- Historisk kontekst: Siglo de Oro – kulturell blomstring, politisk nedgang\n- Universell relevans: å kjempe for sine idealer i en pragmatisk verden'
    ),
    mkSub('4.2', 'García Lorca y la poesía', 'Lorca og poesi',
      'Utforsk Federico García Lorcas poesi og teater – sentral stemme i Generación del 27.',
      ['analysere Lorcas poesi', 'forstå Generación del 27', 'kjenne Lorcas viktigste verk og temaer'],
      'Generación del 27 og García Lorca',
      `**Generación del 27** var en gruppe spanske poeter og intellektuelle som fornyet spansk litteratur i 1920–30-årene. Navnet kommer fra 300-årsjubileet for poeten Góngoras død.\n\n**Medlemmer:** Federico García Lorca, Rafael Alberti, Luis Cernuda, Pedro Salinas, Jorge Guillén, Vicente Aleixandre (Nobelpris 1977).\n\n**Federico García Lorca** (1898–1936):\n- Født i Granada, Andalucía\n- Poet, dramatiker og musiker\n- Drept av nasjonalistiske styrker under den spanske borgerkrigen\n- Temaer: kjærlighet, død, undertrykkelse, andalusisk kultur, frihet\n\n**Viktige verk:**\n| Verk | Sjanger | År |\n|------|---------|----|\n| Romancero gitano | Poesi | 1928 |\n| Poeta en Nueva York | Poesi | 1940 (posthumt) |\n| Bodas de sangre | Teater | 1932 |\n| La casa de Bernarda Alba | Teater | 1936 |`,
      'Federico García Lorca er kanskje Spanias mest elskede poet. Hans verk blander folkekultur med avantgardistisk kunst, og hans tragiske død under borgerkrigen gjorde ham til et symbol på kunstnerisk frihet.',
      ['## Analyse: Romance sonámbulo\n\n*\"Verde que te quiero verde.\nVerde viento. Verdes ramas.\nEl barco sobre la mar\ny el caballo en la montaña.\"*\n\n**Analyse:**\n- **Fargesymbolikk:** Grønt symboliserer her lengsel, død og det uoppnåelige – ikke bare natur.\n- **Gjentakelse:** \"Verde que te quiero verde\" gjentas som et refreng, nesten som en besverging.\n- **Bilder:** Båten på havet og hesten i fjellet – frihet, men også ensomhet.\n- **Romanceformen:** Tradisjonell spansk diktform med assonansrim i partallsvers.\n\nLorca bruker folkelige former fylt med surrealisme og dyp symbolikk.',
       '## La casa de Bernarda Alba (1936)\n\nLorcas siste teaterstykke handler om den tyranniske Bernarda Alba som holder sine fem døtre innesperret i åtte års sorg etter mannens død.\n\n**Temaer:**\n- **Undertrykkelse vs. frihet:** Bernarda representerer sosiale konvensjoner; døtrene lengter etter frihet.\n- **Ære og skam:** Familiære er viktigere enn individets lykke.\n- **Patriarkalsk samfunn:** Selv om bare kvinner er på scenen, styrer mannlige verdier.\n- **Natur vs. sivilisasjon:** Døtrenes naturlige begjær undertrykkes av sosiale normer.\n\n*\"¡Silencio!\"* – Bernardas første og siste ord. Taushet som kontroll.'],
      [{ title: 'Poesianalyse', problem: 'Hva betyr \"verde\" i Romance sonámbulo?', solution: 'Grønt er flertydig: det symboliserer **lengsel, død, drøm og det uoppnåelige**. Det er ikke bare en farge, men en stemning – melankolsk og drømmeaktig.' },
       { title: 'Teateranalyse', problem: 'Hvorfor er det viktig at bare kvinner opptrer i La casa de Bernarda Alba?', solution: 'Det understreker **det lukkede, kvelende rommet** kvinner lever i. Paradoksalt nok er mennenes fravær på scenen et symbol på at **mannlige verdier** likevel styrer alt.' }],
      [mkEx('lett', 'Grunnleggende om Lorca og Generación del 27:', [
        ['Hva var Generación del 27?', 'En gruppe spanske poeter i 1920–30-årene som fornyet spansk litteratur.'],
        ['Hvor var García Lorca fra?', 'Granada, Andalucía, Spania.'],
        ['Hvordan døde Lorca?', 'Han ble drept av nasjonalistiske styrker i starten av den spanske borgerkrigen (1936).'],
        ['Nevn to sjangre Lorca jobbet med.', 'Poesi og teater (drama).']]),
       mkEx('lett', 'Match verk med sjanger:', [
        ['Romancero gitano', 'Poesi (diktsamling, 1928)'],
        ['Bodas de sangre', 'Teater (drama, 1932)'],
        ['La casa de Bernarda Alba', 'Teater (drama, 1936)'],
        ['Poeta en Nueva York', 'Poesi (diktsamling, posthumt 1940)']]),
       mkEx('medium', 'Analyser temaer hos Lorca:', [
        ['Hvilken rolle spiller farger i Lorcas poesi?', 'Farger er symbolske: grønt = lengsel/død, svart = sorg, hvitt = renhet/undertrykkelse. De bærer dypere følelsesmessig mening.'],
        ['Hva representerer Bernarda Alba som karakter?', 'Hun representerer sosiale konvensjoner, patriarkalsk kontroll, ære-kulturen og undertrykkelse av individets frihet.'],
        ['Hvorfor er andalusisk folkekultur viktig for Lorca?', 'Han bruker folkelige former (romance, cante jondo) som bærer av universelle temaer – kjærlighet, død, skjebne.'],
        ['Hva betyr «Silencio» som Bernardas første og siste ord?', 'Det symboliserer at taushet er undertrykkelsens viktigste verktøy – å tie er å kontrollere.']]),
       mkEx('vanskelig', 'Drøftingsoppgaver om Lorca:', [
        ['Hvorfor er Lorca fortsatt relevant i dag?', 'Hans temaer – frihet vs. undertrykkelse, individ vs. samfunn, lengsel og identitet – er universelle og tidløse.'],
        ['Sammenlign Lorcas poesi med hans teater.', 'Poesien er lyrisk og symbolsk; teateret er mer realistisk i formen men like symbolsk i temaene. Begge utforsker undertrykkelse og lengsel.'],
        ['Hvordan påvirket borgerkrigen resepsjonen av Lorcas verk?', 'Hans død gjorde ham til en martyr for kunstnerisk frihet. Under Franco-diktaturet var verkene forbudt, noe som ga dem ekstra symbolsk kraft.'],
        ['Analyser kontrasten mellom natur og sivilisasjon i La casa de Bernarda Alba.', 'Naturen (varmen, hesten, vannet) representerer naturlig begjær og frihet. Huset representerer sosiale konvensjoner som undertrykker dette. Konflikten driver tragedien.']])],
      '**Lesetips:** Les Romance sonámbulo høyt – Lorcas poesi er skrevet for å høres. Lytt gjerne til innspillinger av diktet.',
      '**Oppsummering: García Lorca**\n\n- Generación del 27: Fornyet spansk litteratur 1920–30-tallet\n- Lorca (1898–1936): Poet og dramatiker fra Granada\n- Verk: Romancero gitano, Bodas de sangre, La casa de Bernarda Alba\n- Temaer: Kjærlighet, død, frihet, undertrykkelse, andalusisk kultur\n- Symbolikk: Farger, natur, taushet\n- Drept under borgerkrigen – symbol på kunstnerisk frihet'
    ),
    mkSub('4.3', 'El realismo mágico', 'Magisk realisme (Márquez, Allende)',
      'Utforsk den magiske realismen – Latin-Amerikas viktigste litterære bidrag til verdenslitteraturen.',
      ['definere og analysere magisk realisme', 'kjenne sentrale forfattere og verk', 'analysere utdrag fra Cien años de soledad'],
      'Magisk realisme (El realismo mágico)',
      `**Magisk realisme** er en litterær retning der overnaturlige eller fantastiske elementer presenteres som helt normale deler av hverdagsvirkeligheten.\n\n**Kjennetegn:**\n- Overnaturlige hendelser beskrives uten forundring\n- Rik, detaljert prosa med lange setninger\n- Mytisk tidsfølelse – syklisk, ikke lineær tid\n- Blanding av drøm og virkelighet\n- Sterk forankring i latinamerikansk historie og kultur\n\n**Sentrale forfattere:**\n| Forfatter | Land | Nøkkelverk |\n|-----------|------|------------|\n| Gabriel García Márquez | Colombia | Cien años de soledad (1967) |\n| Isabel Allende | Chile | La casa de los espíritus (1982) |\n| Juan Rulfo | Mexico | Pedro Páramo (1955) |\n| Laura Esquivel | Mexico | Como agua para chocolate (1989) |\n| Miguel Ángel Asturias | Guatemala | Hombres de maíz (1949) |`,
      'Magisk realisme oppsto i Latin-Amerika som et uttrykk for en virkelighet der myter, folketro og historiske traumer blandes med hverdagen. Det er ikke fantasy – det er en annen måte å oppfatte virkeligheten på.',
      ['## Analyse: Cien años de soledad – åpningen\n\n*\"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.\"*\n\n**Analyse:**\n- **Tre tidslag i én setning:** Fremtid (henrettelsen), nåtid (erindringen), fortid (barndommen). Syklisk tid.\n- **Is som vidunder:** Noe så hverdagslig som is presenteres som magi – perspektivet er avgjørende.\n- **Skjebne:** Åpningen antyder en forutbestemt skjebne – alt henger sammen.\n- **Familien Buendía:** Syv generasjoner i den fiktive byen Macondo, et mikrokosmos av Latin-Amerika.\n\nDenne ene setningen rommer hele romanens essens: tid er syklisk, virkeligheten er flertydig, og det enkle kan være fantastisk.',
       '## Isabel Allende og La casa de los espíritus\n\nIsabel Allendes debutroman (1982) følger tre generasjoner kvinner i Chile.\n\n**Magisk-realistiske elementer:**\n- Clara del Valle har telepatiske og telekinetiske evner\n- Spøkelser kommuniserer med de levende\n- Naturen reagerer på menneskelige følelser\n\n**Historisk-politisk kontekst:**\n- Romanen speiler Chiles politiske historie fra ca. 1900–1973\n- Kuppet i 1973 (Pinochet) er sentralt i slutten\n- Allende bruker magisk realisme for å bearbeide politisk traume\n\n**Forskjell fra Márquez:** Allende er mer eksplisitt politisk og feministisk. Kvinneperspektivet er sentralt.'],
      [{ title: 'Definer magisk realisme', problem: 'Hva skiller magisk realisme fra fantasy?', solution: 'I magisk realisme er det overnaturlige en **naturlig del av hverdagen** – ingen reagerer med forundring. I fantasy er det overnaturlige plassert i en annen verden med egne regler. Magisk realisme foregår i **vår** virkelighet.' },
       { title: 'Utdragsanalyse', problem: 'Hvorfor begynner Cien años de soledad med en henrettelse?', solution: 'Det etablerer **syklisk tid** og **skjebne** som sentrale temaer. Ved å starte med slutten viser Márquez at alt henger sammen, og at erindring er viktigere enn kronologi.' }],
      [mkEx('lett', 'Grunnleggende om magisk realisme:', [
        ['Hva er magisk realisme?', 'En litterær retning der overnaturlige elementer presenteres som normale deler av hverdagsvirkeligheten.'],
        ['Hvem skrev Cien años de soledad?', 'Gabriel García Márquez (Colombia), utgitt i 1967.'],
        ['Hvem skrev La casa de los espíritus?', 'Isabel Allende (Chile), utgitt i 1982.'],
        ['Nevn to kjennetegn ved magisk realisme.', 'Overnaturlige hendelser beskrives uten forundring; mytisk/syklisk tidsfølelse.']]),
       mkEx('lett', 'Match forfatter med verk og land:', [
        ['García Márquez – Colombia', 'Cien años de soledad (1967)'],
        ['Isabel Allende – Chile', 'La casa de los espíritus (1982)'],
        ['Juan Rulfo – Mexico', 'Pedro Páramo (1955)'],
        ['Laura Esquivel – Mexico', 'Como agua para chocolate (1989)']]),
       mkEx('medium', 'Analyser magisk-realistiske elementer:', [
        ['Hvorfor er «is» magisk i åpningen av Cien años de soledad?', 'Fordi det ses gjennom øynene til noen som aldri har sett is – det hverdagslige blir fantastisk gjennom perspektiv.'],
        ['Hva symboliserer byen Macondo?', 'Macondo er et mikrokosmos av Latin-Amerika – dens grunnleggelse, vekst, korrupsjon og undergang speiler kontinentets historie.'],
        ['Hvordan bruker Allende magisk realisme politisk?', 'Hun bruker overnaturlige elementer (Claras evner) som kontrast til den brutale politiske virkeligheten (kuppet). Magien representerer håp og motstand.'],
        ['Hva betyr syklisk tid i magisk realisme?', 'Historien gjentar seg – navnene gjentas, skjebnene gjentas. Fortid, nåtid og fremtid fletter seg sammen.']]),
       mkEx('vanskelig', 'Drøftingsoppgaver om magisk realisme:', [
        ['Hvorfor oppsto magisk realisme nettopp i Latin-Amerika?', 'Latin-Amerikas virkelighet – blandingen av urfolksmyter, kolonial historie, politisk vold og naturens overveldende kraft – gjør at det «magiske» allerede er del av opplevd virkelighet.'],
        ['Sammenlign García Márquez og Allende.', 'Márquez er mer mytisk og syklisk; Allende er mer politisk og feministisk. Begge bruker magisk realisme for å bearbeide latinamerikansk historie, men med ulike perspektiver.'],
        ['Er magisk realisme eksotisering av Latin-Amerika? Diskuter.', 'Kritikere mener det kan redusere Latin-Amerika til det «eksotiske». Forsvarere hevder det er en autentisk måte å uttrykke en virkelighet som ikke passer inn i europeisk rasjonalisme.'],
        ['Analyser de tre tidslagene i åpningssetningen av Cien años de soledad.', 'Fremtiden (henrettelsen), nåtiden (erindringen) og fortiden (barndommen/isen) eksisterer simultant. Dette speiler romanens syn på tid som syklisk, ikke lineær – alt har skjedd før og vil skje igjen.']])],
      '**Lesetips:** Begynn med korte noveller av García Márquez (f.eks. «Un señor muy viejo con unas alas enormes») før du tar fatt på Cien años de soledad.',
      '**Oppsummering: Magisk realisme**\n\n- Overnaturlig + hverdagslig = magisk realisme\n- Kjennetegn: syklisk tid, rik prosa, ingen forundring over det magiske\n- García Márquez: Cien años de soledad (1967) – familien Buendía i Macondo\n- Allende: La casa de los espíritus (1982) – tre generasjoner kvinner i Chile\n- Latin-Amerikas viktigste bidrag til verdenslitteraturen'
    ),
    mkSub('4.4', 'Análisis literario avanzado', 'Avansert litterær analyse',
      'Lær avanserte analysebegreper og skriv litterære essays på spansk.',
      ['bruke avanserte analysebegreper', 'identifisere intertekstualitet og symbolikk', 'skrive litterære essays'],
      'Avanserte analysebegreper',
      `**Avanserte begreper for litterær analyse:**\n\n| Begrep | Spansk | Forklaring |\n|--------|--------|------------|\n| Intertekstualitet | La intertextualidad | Referanser til andre tekster |\n| Symbolikk | El simbolismo | Bruk av symboler for dypere mening |\n| Fortellerstemme | La voz narrativa | Hvem forteller, og hvordan |\n| Narrativ struktur | La estructura narrativa | Hvordan historien er bygd opp |\n| Metafiksjon | La metaficción | Tekst som kommenterer seg selv |\n| Allegori | La alegoría | Fortelling med skjult, overført mening |\n| Ironi | La ironía | Motsetning mellom det sagte og det mente |\n| Ambiguitet | La ambigüedad | Flertydighet, åpenhet for tolkning |`,
      'For å skrive gode litterære analyser på avansert nivå trenger du et rikt begrepsapparat og evnen til å bygge argumenter med tekstbelegg.',
      ['## Å skrive et litterært essay\n\n**Struktur:**\n1. **Introducción:** Presenter tekst, forfatter, kontekst. Formuler en tesis (påstand).\n2. **Desarrollo (hoveddel):**\n   - Argument 1 + tekstbelegg\n   - Argument 2 + tekstbelegg\n   - Argument 3 + tekstbelegg\n3. **Conclusión:** Oppsummer, vurder, åpne for videre refleksjon.\n\n**Nyttige fraser:**\n- *En este ensayo analizaré...* (I dette essayet vil jeg analysere...)\n- *El autor emplea el recurso de...* (Forfatteren benytter virkemiddelet...)\n- *Esto se puede interpretar como...* (Dette kan tolkes som...)\n- *A modo de conclusión...* (Avslutningsvis...)',
       '## Intertekstualitet i praksis\n\n**Definisjon:** Intertekstualitet er når en tekst refererer til, siterer eller er i dialog med andre tekster.\n\n**Eksempler:**\n- Allendes *La casa de los espíritus* er i dialog med Márquez\' *Cien años de soledad* (familiesaga, magisk realisme).\n- Lorcas *Bodas de sangre* henter fra andalusisk folkediktning.\n- Cervantes\' *Don Quijote* parodierer ridderromaner.\n\n**Å identifisere intertekstualitet:**\n- Gjenkjenner du referanser til andre verk?\n- Bruker forfatteren kjente motiver eller strukturer?\n- Er det en dialog med en litterær tradisjon?'],
      [{ title: 'Intertekstualitet', problem: 'Finn et eksempel på intertekstualitet mellom Allende og Márquez.', solution: 'Begge skriver familiesagaer med magisk realisme. Allendes *La casa de los espíritus* kan leses som et **svar** på *Cien años de soledad* – fra et feministisk og eksplisitt politisk perspektiv.' },
       { title: 'Essay-skriving', problem: 'Hvordan formulerer du en tesis for et litterært essay?', solution: 'En tesis er en klar påstand du vil argumentere for. Eksempel: *\"En Cien años de soledad, García Márquez utiliza el tiempo cíclico como metáfora de la historia latinoamericana.\"*' }],
      [mkEx('lett', 'Match analysebegrep med definisjon:', [
        ['Intertextualidad', 'Referanser til og dialog med andre tekster.'],
        ['Simbolismo', 'Bruk av symboler for å uttrykke dypere mening.'],
        ['Voz narrativa', 'Hvem som forteller historien og hvordan.'],
        ['Metaficción', 'Når teksten kommenterer seg selv som fiksjon.']]),
       mkEx('lett', 'Identifiser analysebegrepet:', [
        ['Don Quijote vet i del 2 at del 1 er skrevet om ham.', 'Metaficción (metafiksjon)'],
        ['Grønnfargen i Lorcas dikt symboliserer lengsel og død.', 'Simbolismo (symbolikk)'],
        ['Allende skriver en familiesaga inspirert av Márquez.', 'Intertextualidad (intertekstualitet)'],
        ['Åpningen av Cien años de soledad kan tolkes på flere måter.', 'Ambigüedad (ambiguitet/flertydighet)']]),
       mkEx('medium', 'Skriv analysesetninger med avanserte begreper:', [
        ['Bruk «intertextualidad» i en analyse av Allende.', 'La intertextualidad entre La casa de los espíritus y Cien años de soledad se manifiesta en la estructura de saga familiar con elementos mágico-realistas.'],
        ['Bruk «simbolismo» i en analyse av Lorca.', 'El simbolismo del color verde en el Romance sonámbulo trasciende la descripción física para representar el deseo inalcanzable.'],
        ['Formuler en tesis om Don Quijote.', 'En Don Quijote, Cervantes cuestiona los límites entre ficción y realidad a través de la metaficción y la ironía.'],
        ['Skriv en avslutning for et essay om magisk realisme.', 'A modo de conclusión, el realismo mágico no es simplemente una técnica literaria, sino una forma de expresar una realidad que no cabe en los moldes del racionalismo europeo.']]),
       mkEx('vanskelig', 'Skriv korte litterære analyser (3-4 setninger):', [
        ['Analyser fortellerstemmen i Cien años de soledad.', 'El narrador de Cien años de soledad es omnisciente y adopta un tono de crónica. Presenta lo extraordinario con la misma naturalidad que lo cotidiano, lo que refuerza el efecto mágico-realista. La voz narrativa crea una distancia temporal que sugiere que todo ya ha sucedido.'],
        ['Drøft symbolikken i La casa de Bernarda Alba.', 'La casa funciona como símbolo de la opresión social. El calor exterior representa el deseo reprimido, mientras que los muros representan las normas patriarcales. El contraste entre el interior oscuro y el exterior luminoso subraya el conflicto entre naturaleza y civilización.'],
        ['Analyser intertekstualitet mellom Cervantes og Márquez.', 'Tanto Cervantes como Márquez exploran la relación entre ficción y realidad. Don Quijote confunde la ficción con la realidad; Macondo es un lugar donde la realidad supera la ficción. Ambos autores cuestionan qué es «real» a través de sus narrativas.'],
        ['Skriv en tesis og to argumenter om Lorcas bruk av symboler.', 'Tesis: Lorca utiliza los símbolos naturales para expresar conflictos sociales universales. Argumento 1: El verde simboliza el deseo prohibido. Argumento 2: El agua representa la libertad frente a la sequedad de la opresión social.']])],
      '**Skrivetips:** Et godt litterært essay har en klar tesis, bruker tekstbelegg og viser at du kan tolke – ikke bare gjenfortelle.',
      '**Oppsummering: Avansert litterær analyse**\n\n- Begreper: intertekstualitet, symbolikk, fortellerstemme, metafiksjon, allegori, ironi, ambiguitet\n- Essay-struktur: Introducción (tesis) → Desarrollo (argumenter + belegg) → Conclusión\n- Nøkkelfraser: El autor emplea..., Esto se puede interpretar como..., A modo de conclusión...\n- Mål: Tolke, ikke bare gjenfortelle – vis analytisk dybde'
    ),
  ]
};

const s3ch5 = {
  title: 'CINE Y ARTE HISPANOHABLANTE',
  subs: [
    mkSub('5.1', 'El cine español', 'Spansk film (Almodóvar, Buñuel)',
      'Utforsk spansk filmhistorie fra Buñuel til Almodóvar og samtidsfilm.',
      ['kjenne viktige spanske regissører og filmer', 'bruke filmvokabular på spansk', 'analysere spansk film i kulturell kontekst'],
      'Spansk film – regissører og bevegelser',
      `**Spansk filmhistorie:**\n\n| Periode | Regissør | Nøkkelfilm | Kjennetegn |\n|---------|----------|------------|------------|\n| Surrealisme (1920-30) | Luis Buñuel | Un perro andaluz (1929) | Drømmelogikk, sjokk, surrealistiske bilder |\n| Franco-æraen (1939-75) | Luis García Berlanga | Bienvenido, Míster Marshall (1953) | Satire under sensur |\n| La Movida (1980-tallet) | Pedro Almodóvar | Mujeres al borde... (1988) | Frigjøring, farge, identitet |\n| Moderne (2000+) | Alejandro Amenábar | Mar adentro (2004) | Internasjonalt gjennombrudd |\n| Samtid | J.A. Bayona | El orfanato (2007) | Sjangerfilm med dybde |\n\n**Filmvokabular:**\n- el director / la directora – regissøren\n- el guion – manuskriptet\n- el rodaje – innspillingen\n- la banda sonora – lydsporet\n- el montaje – klippingen\n- la secuencia – sekvensen`,
      'Spansk film har en rik historie som spenner fra Luis Buñuels surrealisme til Pedro Almodóvars fargerike univers. Filmen reflekterer Spanias dramatiske politiske og sosiale endringer gjennom 1900-tallet.',
      ['## Luis Buñuel – surrealismens filmskaper\n\n**Un perro andaluz** (1929) – laget med Salvador Dalí.\n- Åpningsscenen med barberkniven og øyet er filmhistoriens mest ikoniske surrealisme.\n- Ingen logisk handling – filmen følger drømmelogikk.\n- Provoserer bevisst – Buñuel ville sjokkere borgerlige verdier.\n\n**Viridiana** (1961) – forbudt i Spania under Franco.\n- Religiøs satire som utforsker hykleri.\n- Vant Gullpalmen i Cannes.\n\nBuñuel er en bro mellom surrealistisk kunst og film.',
       '## Pedro Almodóvar – La Movida og videre\n\nPedro Almodóvar (f. 1949) er Spanias mest kjente filmskaper internasjonalt.\n\n**La Movida Madrileña** (1980-tallet): Kulturell frigjøring etter Francos død. Almodóvar var en sentral figur.\n\n**Kjennetegn:**\n- Sterke, komplekse kvinneroller\n- Fargesprakende visuell stil\n- Temaer: identitet, begjær, familie, tap\n- Blanding av melodrama, komedie og tragedie\n\n**Viktige filmer:**\n- *Mujeres al borde de un ataque de nervios* (1988)\n- *Todo sobre mi madre* (1999) – Oscar for beste utenlandske film\n- *Hable con ella* (2002) – Oscar for beste originale manus\n- *Volver* (2006) – med Penélope Cruz'],
      [{ title: 'Filmanalyse', problem: 'Hva kjennetegner Almodóvars filmer?', solution: 'Sterke kvinneroller, fargesprakende stil, temaer som identitet og begjær, og en blanding av **melodrama, komedie og tragedie**. Hans filmer er dypt personlige men universelt gjenkjennelige.' },
       { title: 'Historisk kontekst', problem: 'Hvordan påvirket Franco-diktaturet spansk film?', solution: 'Under Franco (1939–75) var det streng **sensur**. Filmskapere måtte bruke allegori og satire for å kritisere regimet. Etter Francos død kom **La Movida** – en eksplosjon av kunstnerisk frihet.' }],
      [mkEx('lett', 'Grunnleggende om spansk film:', [
        ['Hvem regisserte Un perro andaluz?', 'Luis Buñuel (sammen med Salvador Dalí), 1929.'],
        ['Hva var La Movida Madrileña?', 'En kulturell frigjørelsesbevegelse i Madrid på 1980-tallet, etter Francos død.'],
        ['Hvem er Spanias mest kjente filmregissør internasjonalt?', 'Pedro Almodóvar.'],
        ['Nevn en Oscar-vinnende spansk film.', 'Todo sobre mi madre (1999) eller Mar adentro (2004).']]),
       mkEx('lett', 'Match regissør med film:', [
        ['Luis Buñuel', 'Un perro andaluz (1929) / Viridiana (1961)'],
        ['Pedro Almodóvar', 'Todo sobre mi madre (1999)'],
        ['Alejandro Amenábar', 'Mar adentro (2004)'],
        ['J.A. Bayona', 'El orfanato (2007)']]),
       mkEx('medium', 'Analyser spansk film i kontekst:', [
        ['Hvorfor var Buñuels filmer kontroversielle?', 'De provoserte bevisst med surrealistiske bilder, religiøs satire og angrep på borgerlige verdier. Viridiana ble forbudt under Franco.'],
        ['Hva representerer fargene i Almodóvars filmer?', 'Fargene (spesielt rødt) representerer lidenskap, begjær og følelsesmessig intensitet. Den visuelle stilen er en del av fortellingen.'],
        ['Hvordan endret La Movida spansk kultur?', 'La Movida brøt med Francos konservative verdier og åpnet for fri kunstnerisk utfoldelse, seksuell frigjøring og eksperimentering.'],
        ['Hva kjennetegner Almodóvars kvinneroller?', 'De er komplekse, sterke og sentrale – ikke passive. Kvinner er ofte hovedpersoner som navigerer vanskelige situasjoner med styrke og verdighet.']]),
       mkEx('vanskelig', 'Drøftingsoppgaver om spansk film:', [
        ['Sammenlign Buñuel og Almodóvar som filmskapere.', 'Buñuel brukte surrealisme for å utfordre borgerlige verdier; Almodóvar bruker melodrama for å utforske identitet. Begge er provokative, men på ulike måter – Buñuel intellektuelt, Almodóvar emosjonelt.'],
        ['Hvordan reflekterer spansk film landets politiske historie?', 'Fra sensur under Franco, til frigjøring med La Movida, til internasjonalt gjennombrudd – spansk film speiler nasjonens transformasjon fra diktatur til demokrati.'],
        ['Skriv en kort filmanmeldelse av en spansk film du kjenner (eller velg en fra listen).', 'La película [título] fue dirigida por [director] en [año]. Trata de... Lo que más me impresionó fue... Recomiendo esta película porque...'],
        ['Diskuter hvorfor film er et viktig kulturelt uttrykk.', 'El cine refleja y forma la cultura de un país. En el caso de España, el cine ha sido tanto un instrumento de resistencia como de liberación cultural.']])],
      '**Filmtips:** Se gjerne Todo sobre mi madre (Almodóvar) med spanske undertekster. Det er tilgjengelig og berørende – en god inngang til spansk film.',
      '**Oppsummering: Spansk film**\n\n- Buñuel: Surrealisme, provokasjon (Un perro andaluz, Viridiana)\n- Franco-æraen: Sensur, allegori, satire\n- La Movida (1980-tallet): Kulturell frigjøring\n- Almodóvar: Sterke kvinner, farge, identitet, melodrama\n- Moderne: Internasjonalt gjennombrudd (Amenábar, Bayona)\n- Filmvokabular: director, guion, rodaje, banda sonora, montaje'
    ),
    mkSub('5.2', 'El cine latinoamericano', 'Latinamerikansk film',
      'Utforsk latinamerikansk filmhistorie og viktige filmer og bevegelser.',
      ['kjenne viktige latinamerikanske filmer og regissører', 'forstå Nuevo Cine Latinoamericano', 'analysere film med relevant vokabular'],
      'Latinamerikansk film – bevegelser og regissører',
      `**Viktige bevegelser og filmer:**\n\n| Bevegelse/Periode | Land | Regissør | Film |\n|-------------------|------|----------|------|\n| Nuevo Cine (1960-70) | Cuba | Tomás Gutiérrez Alea | Memorias del subdesarrollo (1968) |\n| Cinema Novo | Brasil | Glauber Rocha | Deus e o Diabo na Terra do Sol (1964) |\n| Moderne bølge | Mexico | Alfonso Cuarón | Y tu mamá también (2001) |\n| Moderne bølge | Mexico | Guillermo del Toro | El laberinto del fauno (2006) |\n| Moderne bølge | Argentina | Juan José Campanella | El secreto de sus ojos (2009) |\n| Samtid | Chile | Pablo Larraín | No (2012) |\n\n**Filmanalysevokabular:**\n- la puesta en escena – mise en scène\n- el plano – bildet/innstillingen\n- el primer plano – nærbildet\n- la cámara – kameraet\n- el enfoque – fokus\n- el desenlace – avslutningen`,
      'Latinamerikansk film har utviklet seg fra politisk engasjert kino på 1960-70-tallet til en moderne bølge som har erobret verdens filmfestivaler og Oscar-utdelinger.',
      ['## Nuevo Cine Latinoamericano\n\nPå 1960-70-tallet oppsto en bevegelse for politisk og sosialt engasjert film:\n- **Cuba:** Etter revolusjonen (1959) ble film et verktøy for sosial bevisstgjøring.\n- **Brasil:** Cinema Novo ville vise «den virkelige virkeligheten» – fattigdom, urettferdighet.\n- **Argentina:** Tercer Cine (tredje-kinoen) – alternativ til Hollywood og europeisk kunstfilm.\n\n**Kjennetegn:**\n- Lavt budsjett, autentiske lokasjoner\n- Sosiale og politiske temaer\n- Ofte ikke-profesjonelle skuespillere\n- Kunst som politisk handling',
       '## Den moderne bølgen: Mexico og videre\n\n**De tre amigoene:** Alfonso Cuarón, Guillermo del Toro og Alejandro González Iñárritu – tre meksikanske regissører som har erobret Hollywood.\n\n**Viktige filmer:**\n- *Y tu mamá también* (2001, Cuarón): Roadmovie om ungdom og klasse i Mexico.\n- *El laberinto del fauno* (2006, del Toro): Fantasi og borgerkrig – magisk realisme på film.\n- *Amores perros* (2000, Iñárritu): Tre parallelle historier i Mexico City.\n- *Roma* (2018, Cuarón): Personlig, poetisk – Oscar for beste regi.\n\nDisse regissørene viser at latinamerikansk film kan være både lokal og universell.'],
      [{ title: 'Filmanalyse', problem: 'Hva kjennetegner El laberinto del fauno?', solution: 'Filmen blander **fantasi med den spanske borgerkrigen**. Det er magisk realisme på film – en jentes fantasi-flukt fra fascismens brutalitet. Kontrasten mellom den vakre fantasiverdenen og den grusomme virkeligheten er virkningsfull.' },
       { title: 'Bevegelse', problem: 'Hva var Nuevo Cine Latinoamericano?', solution: 'En filmbevegelse på 1960-70-tallet som brukte film som **politisk verktøy**. Lavbudsjett, sosiale temaer, autentiske lokasjoner – en motreaksjon mot kommersielle Hollywood-filmer.' }],
      [mkEx('lett', 'Grunnleggende om latinamerikansk film:', [
        ['Hva var Nuevo Cine Latinoamericano?', 'En politisk engasjert filmbevegelse på 1960-70-tallet i Latin-Amerika.'],
        ['Nevn tre meksikanske regissører som har lyktes i Hollywood.', 'Alfonso Cuarón, Guillermo del Toro, Alejandro González Iñárritu.'],
        ['Hvilken film vant Oscar for beste utenlandske film fra Argentina?', 'El secreto de sus ojos (2009).'],
        ['Hva handler El laberinto del fauno om?', 'En jentes fantasi-flukt under den spanske borgerkrigen.']]),
       mkEx('lett', 'Match film med regissør:', [
        ['Y tu mamá también (2001)', 'Alfonso Cuarón'],
        ['El laberinto del fauno (2006)', 'Guillermo del Toro'],
        ['Amores perros (2000)', 'Alejandro González Iñárritu'],
        ['Roma (2018)', 'Alfonso Cuarón']]),
       mkEx('medium', 'Analyser latinamerikansk film:', [
        ['Hvordan bruker El laberinto del fauno magisk realisme?', 'Fantasielementene (faunen, labyrinten) er integrert i en realistisk historisk setting. Det magiske kan tolkes som barnets måte å overleve en brutal virkelighet.'],
        ['Hva kjennetegner den moderne meksikanske filmbølgen?', 'Den kombinerer sosial bevissthet med høy kunstnerisk kvalitet, ofte med temaer som klasse, identitet og Mexicos komplekse samfunn.'],
        ['Sammenlign Nuevo Cine med moderne latinamerikansk film.', 'Nuevo Cine var eksplisitt politisk og lavbudsjett; moderne film er mer variert i stil men beholder sosial bevissthet med høyere produksjonskvalitet.'],
        ['Hvorfor er Roma (2018) viktig?', 'Den viser hverdagslivet til en hushjelp i Mexico City med poetisk skjønnhet. Den er personlig, politisk og universell – og vant Oscar for beste regi.']]),
       mkEx('vanskelig', 'Drøftingsoppgaver om latinamerikansk film:', [
        ['Er det positivt eller negativt at latinamerikanske regissører jobber i Hollywood?', 'Positivt: Synlighet, ressurser, mulighet til å fortelle latinamerikanske historier for et globalt publikum. Negativt: Fare for å miste kulturell autentisitet og tilpasse seg kommersielle krav.'],
        ['Diskuter film som politisk verktøy i Latin-Amerika.', 'Film har historisk vært brukt til å belyse sosial urettferdighet, gi stemme til marginaliserte grupper og utfordre maktstrukturer. Fra Nuevo Cine til moderne filmer som Roma fortsetter denne tradisjonen.'],
        ['Sammenlign El laberinto del fauno med magisk realisme i litteraturen.', 'Begge blander det overnaturlige med historisk virkelighet. Del Toro bruker visuelle virkemidler (farger, monstre, labyrinten) der Márquez bruker språklige. Effekten er lik: det magiske kaster lys over den brutale virkeligheten.'],
        ['Skriv en kort anmeldelse av en latinamerikansk film.', 'Estructura: Título, director, año. De qué trata. Qué me pareció. Por qué la recomiendo. Ejemplo: La película Roma, dirigida por Alfonso Cuarón en 2018, retrata la vida de...']])],
      '**Filmtips:** Y tu mamá también og Roma er gode inngangsporter til latinamerikansk film. Begge er tilgjengelige på strømmetjenester.',
      '**Oppsummering: Latinamerikansk film**\n\n- Nuevo Cine (1960-70): Politisk film, lavbudsjett, sosiale temaer\n- Moderne bølge: Cuarón, del Toro, Iñárritu – Mexico erobrer verden\n- Viktige filmer: Y tu mamá también, El laberinto del fauno, Roma, El secreto de sus ojos\n- Film som kunst og politikk: Tradisjon for sosial bevissthet\n- Analysevokabular: puesta en escena, plano, primer plano, desenlace'
    ),
    mkSub('5.3', 'Arte y arquitectura', 'Kunst og arkitektur (Picasso, Gaudí, Kahlo)',
      'Utforsk spansktalende verdens kunst og arkitektur – fra Picasso til Kahlo, fra Gaudí til Rivera.',
      ['kjenne viktige kunstnere og verk', 'beskrive og analysere kunst på spansk', 'forstå kunstbevegelser i spansktalende land'],
      'Kunst og arkitektur i den spansktalende verden',
      `**Viktige kunstnere:**\n\n| Kunstner | Land | Periode | Kjent for |\n|----------|------|---------|----------|\n| Pablo Picasso | Spania | 1881-1973 | Kubisme, Guernica |\n| Salvador Dalí | Spania | 1904-1989 | Surrealisme, La persistencia de la memoria |\n| Frida Kahlo | Mexico | 1907-1954 | Selvportretter, identitet |\n| Diego Rivera | Mexico | 1886-1957 | Muralisme, politisk kunst |\n| Antoni Gaudí | Spania | 1852-1926 | Modernistisk arkitektur, Sagrada Familia |\n| Fernando Botero | Colombia | 1932-2023 | Overdimensjonerte figurer |\n\n**Kunstvokabular:**\n- el cuadro / la pintura – maleriet\n- la escultura – skulpturen\n- el autorretrato – selvportrettet\n- el mural – veggmaleriet\n- la exposición – utstillingen\n- la obra de arte – kunstverket`,
      'Den spansktalende verden har bidratt enormt til verdens kunst og arkitektur. Fra Picassos kubisme til Kahlos intense selvportretter, fra Gaudís fantastiske bygninger til Riveras politiske veggmalerier – dette er en rik tradisjon å utforske.',
      ['## Guernica – Picassos mesterverk\n\n**Guernica** (1937) er Picassos svar på bombingen av den baskiske byen Guernica under den spanske borgerkrigen.\n\n**Analyse:**\n- **Svart-hvitt + gråtoner:** Fravær av farge understreker grusomheten.\n- **Fragmenterte figurer:** Kubistisk stil – virkeligheten er bokstavelig talt knust.\n- **Symboler:** Oksen (brutalitet), hesten (folkets lidelse), lyspæren (sannheten/håpet), det skriende barnet (uskyld).\n- **Størrelse:** 3,5 x 7,8 meter – overveldende.\n- **Budskap:** Universell anti-krigsprotest.\n\nGuernica er i dag utstilt i Museo Reina Sofía i Madrid.',
       '## Frida Kahlo og Diego Rivera\n\n**Frida Kahlo** (1907-1954) er kjent for sine intense, ærlige selvportretter.\n- Temaer: Smerte, identitet, kropp, meksikansk kultur\n- *Las dos Fridas* (1939): To versjoner av seg selv – europeisk og meksikansk identitet.\n- Personlig er politisk: Kahlo bruker sin egen kropp som politisk uttrykk.\n\n**Diego Rivera** (1886-1957) er Mexicos store muralist.\n- Enorme veggmalerier som forteller Mexicos historie\n- Politisk kunst: Arbeiderklasse, urfolk, revolusjon\n- Muralismo: Kunst for folket, på offentlige vegger\n\nKahlo og Rivera var gift – deres turbulente forhold er legendarisk.'],
      [{ title: 'Kunstanalyse', problem: 'Hva symboliserer de fragmenterte figurene i Guernica?', solution: 'Den kubistiske fragmenteringen representerer **ødeleggelse** – virkeligheten er bokstavelig talt **knust** av bombingen. Formene uttrykker kaos, smerte og oppløsning av den menneskelige verdigheten.' },
       { title: 'Kulturell kontekst', problem: 'Hvorfor er Frida Kahlos selvportretter politiske?', solution: 'Ved å male sin egen smerte, kropp og meksikanske identitet gjør Kahlo **det personlige politisk**. Hun utfordrer vestlige skjønnhetsidealer og utforsker kolonialismens effekt på meksikansk identitet.' }],
      [mkEx('lett', 'Match kunstner med nasjonalitet og kunstform:', [
        ['Pablo Picasso', 'Spania – kubisme, maleri (Guernica)'],
        ['Frida Kahlo', 'Mexico – selvportretter, maleri (Las dos Fridas)'],
        ['Antoni Gaudí', 'Spania – modernistisk arkitektur (Sagrada Familia)'],
        ['Diego Rivera', 'Mexico – muralisme, veggmalerier']]),
       mkEx('lett', 'Sant eller usant om kunst i den spansktalende verden:', [
        ['Guernica er et fargerikt maleri.', 'Usant – det er i svart, hvitt og gråtoner.'],
        ['Frida Kahlo er kjent for sine selvportretter.', 'Sant.'],
        ['Sagrada Familia i Barcelona er ferdigbygd.', 'Usant – den er fortsatt under konstruksjon (påbegynt 1882).'],
        ['Diego Riveras muraler handler om Mexicos historie.', 'Sant.']]),
       mkEx('medium', 'Analyser kunst fra den spansktalende verden:', [
        ['Hva er budskapet i Guernica?', 'En universell anti-krigsprotest. Picasso viser krigens grusomhet gjennom fragmenterte menneskeskikkelser og dyr som representerer lidelse, brutalitet og uskyld.'],
        ['Hvorfor malte Kahlo Las dos Fridas?', 'For å utforske sin doble identitet – europeisk og meksikansk. Maleriet viser to versjoner av henne, forbundet med en blodåre som symboliserer at begge identitetene er del av henne.'],
        ['Hva kjennetegner Gaudís arkitektur?', 'Organiske former inspirert av naturen, fargerike mosaikker, ingen rette linjer. Sagrada Familia er hans mesterverk – en blanding av gotikk og naturalistiske former.'],
        ['Hvorfor er muralisme viktig i Mexico?', 'Muralisme bringer kunst ut til folket – på offentlige vegger, ikke i museer. Den forteller Mexicos historie og gir stemme til arbeiderklassen og urfolk.']]),
       mkEx('vanskelig', 'Drøftingsoppgaver om kunst:', [
        ['Sammenlign Picassos og Kahlos bruk av kunst som politisk uttrykk.', 'Picasso bruker en historisk hendelse (Guernica) for å protestere mot krig. Kahlo bruker sin egen kropp og identitet for å utfordre maktstrukturer. Begge viser at kunst kan være en kraftfull politisk handling.'],
        ['Beskriv et kunstverk på spansk (velg et av de nevnte).', 'Guernica es una obra monumental de Picasso pintada en 1937. Mide 3,5 por 7,8 metros y está pintada en blanco, negro y gris. Representa el horror del bombardeo de la ciudad vasca de Guernica...'],
        ['Diskuter forholdet mellom kunst og politikk i den spansktalende verden.', 'En el mundo hispanohablante, el arte ha sido frecuentemente un instrumento de resistencia política. Desde los murales de Rivera hasta Guernica de Picasso, el arte ha dado voz a los oprimidos.'],
        ['Er Gaudís arkitektur kunst eller arkitektur – eller begge deler?', 'Gaudí utvisker grensen mellom kunst og arkitektur. Sagrada Familia er en funksjonell bygning, men også et totalt kunstverk. Hans organiske former utfordrer ideen om at bygninger må følge rette linjer.']])],
      '**Museumstips:** Besøk gjerne virtuelle omvisninger i Museo Reina Sofía (Guernica), Museo Frida Kahlo (Mexico City) eller Sagrada Familia (Barcelona).',
      '**Oppsummering: Kunst og arkitektur**\n\n- Picasso: Kubisme, Guernica – anti-krigsprotest\n- Dalí: Surrealisme – drømmebilder\n- Kahlo: Selvportretter – identitet, smerte, politikk\n- Rivera: Muralisme – kunst for folket\n- Gaudí: Modernistisk arkitektur – Sagrada Familia\n- Kunst som politisk verktøy i den spansktalende verden'
    ),
    mkSub('5.4', 'Reseñas y críticas', 'Anmeldelser og kritikk',
      'Lær å skrive film- og kunstanmeldelser på spansk med avansert vokabular.',
      ['skrive strukturerte anmeldelser på spansk', 'bruke vurderingsvokabular', 'analysere og vurdere film og kunst kritisk'],
      'Anmeldelser og kritikk (Reseñas y críticas)',
      `**Struktur for en anmeldelse (reseña):**\n\n1. **Ficha técnica:** Tittel, regissør/kunstner, år, sjanger\n2. **Sinopsis/Descripción:** Kort beskrivelse (uten å avsløre for mye)\n3. **Análisis:** Hva fungerer? Hva fungerer ikke? Virkemidler?\n4. **Valoración personal:** Din vurdering – begrunnet\n5. **Recomendación:** Anbefaler du det? For hvem?\n\n**Vurderingsvokabular:**\n| Positiv | Negativ |\n|---------|---------|\n| impresionante (imponerende) | decepcionante (skuffende) |\n| conmovedor/a (rørende) | aburrido/a (kjedelig) |\n| brillante (strålende) | mediocre (middelmådig) |\n| innovador/a (nyskapende) | predecible (forutsigbar) |\n| cautivador/a (fengslende) | superficial (overfladisk) |\n| magistral (mesterlig) | pretencioso/a (pretensiøs) |`,
      'Å skrive anmeldelser er en viktig akademisk og kreativ ferdighet. Du lærer å observere, analysere, vurdere og formidle – alt på spansk.',
      ['## Filmanmeldelse – modell\n\n**Título:** *Todo sobre mi madre*\n**Director:** Pedro Almodóvar\n**Año:** 1999\n**Género:** Drama\n\n*Todo sobre mi madre* cuenta la historia de Manuela, una enfermera que pierde a su hijo adolescente en un accidente. Desesperada, viaja a Barcelona en busca del padre del chico.\n\nLa película es **conmovedora** y **brillante**. Almodóvar consigue crear personajes complejos y humanos. La actuación de Cecilia Roth es **magistral**. La banda sonora complementa perfectamente las emociones.\n\n**Valoración:** Una obra maestra del cine español. La recomiendo a cualquier persona que aprecie el buen cine. ⭐⭐⭐⭐⭐',
       '## Kunstanmeldelse – modell\n\n**Obra:** Guernica\n**Artista:** Pablo Picasso\n**Año:** 1937\n**Técnica:** Óleo sobre lienzo\n\n*Guernica* es una obra **impresionante** tanto por su tamaño (3,5 x 7,8 m) como por su contenido emocional. Picasso representó el horror del bombardeo con figuras fragmentadas y una paleta reducida a blanco, negro y gris.\n\nLo más **cautivador** de la obra es cómo logra transmitir el sufrimiento sin recurrir a imágenes explícitas de violencia. El uso del cubismo fragmenta la realidad, como la propia bomba fragmentó la ciudad.\n\n**Valoración:** Una de las obras de arte más importantes del siglo XX. **Imprescindible**.'],
      [{ title: 'Anmeldelsesstruktur', problem: 'Hva er de fem delene i en anmeldelse?', solution: '1. **Ficha técnica** (fakta), 2. **Sinopsis** (kort beskrivelse), 3. **Análisis** (analyse), 4. **Valoración** (vurdering), 5. **Recomendación** (anbefaling).' },
       { title: 'Vurderingsvokabular', problem: 'Hvordan sier du at en film er «rørende» og «fengslende» på spansk?', solution: '**Conmovedora** (rørende) og **cautivadora** (fengslende).' }],
      [mkEx('lett', 'Match vurderingsord med oversettelse:', [
        ['impresionante', 'imponerende'],
        ['conmovedor/a', 'rørende'],
        ['decepcionante', 'skuffende'],
        ['innovador/a', 'nyskapende']]),
       mkEx('lett', 'Sett delene av en anmeldelse i riktig rekkefølge:', [
        ['Først: Tittel, regissør, år, sjanger', 'Ficha técnica'],
        ['Deretter: Kort beskrivelse av handlingen', 'Sinopsis / Descripción'],
        ['Så: Hva fungerer? Virkemidler?', 'Análisis'],
        ['Til slutt: Din vurdering og anbefaling', 'Valoración y Recomendación']]),
       mkEx('medium', 'Skriv deler av en anmeldelse:', [
        ['Skriv en ficha técnica for en film du kjenner.', 'Título: [film]. Director: [regissør]. Año: [år]. Género: [sjanger].'],
        ['Skriv en kort sinopsis (2-3 setninger).', 'La película trata de... El protagonista es... La historia se desarrolla en...'],
        ['Gi en vurdering med begrunnelse.', 'En mi opinión, la película es [adjetivo] porque... Lo que más me impresionó fue...'],
        ['Skriv en anbefaling.', 'Recomiendo esta película a... porque... Es especialmente interesante para quienes...']]),
       mkEx('vanskelig', 'Skriv komplette anmeldelser:', [
        ['Skriv en filmanmeldelse (5-6 setninger) av en spanskspråklig film.', 'Estructura completa: ficha técnica + sinopsis + análisis + valoración + recomendación. Usa vocabulario de valoración.'],
        ['Skriv en kunstanmeldelse (5-6 setninger) av Guernica eller Las dos Fridas.', 'Incluye: artista, año, técnica, descripción, análisis de símbolos, valoración personal.'],
        ['Sammenlign to filmer i en kort kritikk.', 'Tanto [película 1] como [película 2] tratan el tema de... Sin embargo, mientras que [película 1] es más..., [película 2] resulta más... En mi opinión...'],
        ['Skriv en negativ anmeldelse på en konstruktiv måte.', 'Aunque la película tiene aspectos positivos como..., resulta decepcionante en... El director no logra... A pesar de sus defectos, podría interesar a...']])],
      '**Skrivetips for anmeldelser:** Vær konkret og bruk eksempler. Ikke bare si at noe er «bra» eller «dårlig» – forklar **hvorfor** med referanser til spesifikke scener, virkemidler eller elementer.',
      '**Oppsummering: Anmeldelser og kritikk**\n\n- Struktur: Ficha técnica → Sinopsis → Análisis → Valoración → Recomendación\n- Positivt: impresionante, conmovedor, brillante, innovador, cautivador, magistral\n- Negativt: decepcionante, aburrido, mediocre, predecible, superficial, pretencioso\n- Nøkkel: Vær konkret, bruk eksempler, begrunn din vurdering'
    ),
  ]
};

const s3ch6 = {
  title: 'POLÍTICA Y ACTUALIDAD',
  subs: [
    mkSub('6.1', 'Sistemas políticos', 'Politiske systemer i spansktalende land',
      'Forstå politiske systemer i Spania og Latin-Amerika – demokrati, monarki og politisk historie.',
      ['beskrive ulike politiske systemer', 'sammenligne politiske systemer i spansktalende land', 'bruke politisk vokabular på spansk'],
      'Politiske systemer (Sistemas políticos)',
      `**Politisk vokabular:**\n\n| Spansk | Norsk |\n|--------|-------|\n| la democracia | demokrati |\n| la monarquía constitucional | konstitusjonelt monarki |\n| la república | republikk |\n| el parlamento / las Cortes | parlamentet |\n| el presidente / la presidenta | presidenten |\n| el rey / la reina | kongen / dronningen |\n| las elecciones | valg |\n| el partido político | politisk parti |\n| la constitución | grunnloven |\n| el golpe de estado | statskupp |\n| la dictadura | diktatur |\n| los derechos civiles | borgerrettigheter |\n\n**Spania:** Konstitusjonelt monarki med parlamentarisk demokrati (siden 1978).\n**Latin-Amerika:** De fleste land er presidentrepublikker.`,
      'Å forstå politiske systemer er viktig for å forstå nyheter og samtaler om samfunnet i spansktalende land. Spanias overgang fra diktatur til demokrati og Latin-Amerikas turbulente politiske historie er sentrale temaer.',
      ['## Spania: Fra diktatur til demokrati\n\n**Franco-diktaturet (1939–1975):**\n- Etter borgerkrigen styrte general Franco med jernhånd.\n- Ingen politisk frihet, sensur, undertrykkelse av regionale identiteter.\n\n**La Transición (1975–1982):**\n- Etter Francos død ble Spania et konstitusjonelt monarki.\n- Juan Carlos I ble konge og støttet demokratiseringen.\n- Grunnloven av 1978 sikret demokrati, regional autonomi og individuelle rettigheter.\n- Fredelig overgang – beundret internasjonalt.\n\n**I dag:**\n- Parlamentarisk monarki med to kamre (Congreso og Senado).\n- Statsminister (presidente del gobierno) leder regjeringen.\n- 17 autonome regioner med ulik grad av selvstyre.',
       '## Latin-Amerika: Politisk oversikt\n\n**Fellestrekk:**\n- De fleste land er **presidentrepublikker**.\n- Historisk preget av **ustabilitet**: kupp, diktaturer, revolusjoner.\n- Demokratisering på 1980-90-tallet – «den tredje demokratiseringsbølgen».\n\n**Eksempler:**\n- **Mexico:** Presidentrepublikk. PRI dominerte 1929–2000.\n- **Argentina:** Skiftende mellom demokrati og militærdiktatur. Peronismen er sentral.\n- **Chile:** Diktatur under Pinochet (1973–1990), deretter demokrati.\n- **Cuba:** Sosialistisk ettpartistat siden 1959.\n- **Colombia:** Langvarig væpnet konflikt, fredsavtale i 2016.\n\n**Sammenligning med Norge:** Både Spania og Norge er konstitusjonelle monarkier, men Latin-Amerikas republikker ligner mer på USA-modellen.'],
      [{ title: 'Politisk system', problem: 'Hva slags politisk system har Spania?', solution: 'Spania er et **konstitusjonelt monarki** med **parlamentarisk demokrati**. Kongen er statsoverhode, men statsministeren (presidente del gobierno) leder regjeringen.' },
       { title: 'Sammenligning', problem: 'Hva er forskjellen mellom Spanias og Mexicos politiske system?', solution: 'Spania er et **konstitusjonelt monarki** med konge og statsminister. Mexico er en **presidentrepublikk** der presidenten er både statsoverhode og regjeringssjef.' }],
      [mkEx('lett', 'Match politisk begrep med oversettelse:', [
        ['la democracia', 'demokrati'],
        ['el golpe de estado', 'statskupp'],
        ['las elecciones', 'valg'],
        ['la dictadura', 'diktatur']]),
       mkEx('lett', 'Sant eller usant om politiske systemer:', [
        ['Spania er en republikk.', 'Usant – Spania er et konstitusjonelt monarki.'],
        ['Franco styrte Spania fra 1939 til 1975.', 'Sant.'],
        ['Cuba er et demokrati med flerpartisystem.', 'Usant – Cuba er en sosialistisk ettpartistat.'],
        ['Mexico er en presidentrepublikk.', 'Sant.']]),
       mkEx('medium', 'Svar på spansk med politisk vokabular:', [
        ['Beskriv Spanias politiske system.', 'España es una monarquía constitucional con democracia parlamentaria. El rey es el jefe de estado y el presidente del gobierno dirige el ejecutivo.'],
        ['Hva var La Transición?', 'La Transición fue el proceso de cambio de la dictadura de Franco a la democracia, entre 1975 y 1982. Fue una transición pacífica admirada internacionalmente.'],
        ['Sammenlign Spania og Norge politisk.', 'Tanto España como Noruega son monarquías constitucionales con democracias parlamentarias. Ambos tienen un rey como jefe de estado y un primer ministro que dirige el gobierno.'],
        ['Hva skjedde i Chile i 1973?', 'En 1973, el general Pinochet dio un golpe de estado contra el presidente Allende. Esto marcó el comienzo de una dictadura militar que duró hasta 1990.']]),
       mkEx('vanskelig', 'Drøftingsoppgaver om politikk:', [
        ['Hvorfor beundres Spanias overgang til demokrati?', 'Fordi den var fredelig og inkluderende. Etter 36 år med diktatur klarte Spania å bygge et stabilt demokrati gjennom dialog, kompromiss og en ny grunnlov.'],
        ['Sammenlign demokratiseringen i Spania og Chile.', 'Begge gikk fra diktatur til demokrati, men Spanias overgang var mer fredelig. Chiles var preget av folkeavstemning (1988) og gradvis overgang, med oppgjør med fortiden som pågår ennå.'],
        ['Diskuter utfordringene for demokrati i Latin-Amerika i dag.', 'Los desafíos incluyen la desigualdad social, la corrupción, la polarización política y en algunos países la erosión de las instituciones democráticas.'],
        ['Er monarki eller republikk det beste systemet? Drøft.', 'Begge kan være demokratiske. Monarkiet gir stabilitet og kontinuitet (Spania, Norge). Republikken gir folket full valgfrihet for statsoverhodet. Det viktigste er rettsstaten og demokratiske institusjoner.']])],
      '**Nøkkelord:** Spania gikk fra diktatur til demokrati på under et tiår – La Transición er et av de mest vellykkede eksemplene på fredelig systemendring i moderne historie.',
      '**Oppsummering: Politiske systemer**\n\n- Spania: Konstitusjonelt monarki, parlamentarisk demokrati (siden 1978)\n- Latin-Amerika: Flest presidentrepublikker, turbulent politisk historie\n- La Transición: Spanias fredelige overgang fra Franco-diktatur til demokrati\n- Vokabular: democracia, monarquía, república, elecciones, golpe de estado, dictadura\n- Sammenligning: Spania og Norge – begge konstitusjonelle monarkier'
    ),
    mkSub('6.2', 'Temas de actualidad', 'Aktuelle samfunnstemaer',
      'Lær vokabular og uttrykk for å diskutere aktuelle samfunnstemaer på spansk – nyhetsspråk, innvandring, ulikhet.',
      ['lese og forstå nyhetstekster på spansk', 'diskutere aktuelle temaer', 'bruke nyhetsvokabular'],
      'Aktuelle temaer og nyhetsvokabular',
      `**Nyhetsvokabular:**\n\n| Spansk | Norsk |\n|--------|-------|\n| la inmigración | innvandring |\n| la desigualdad | ulikhet |\n| el cambio climático | klimaendring |\n| la pobreza | fattigdom |\n| el desempleo / el paro | arbeidsledighet |\n| la violencia de género | kjønnsbasert vold |\n| los refugiados | flyktninger |\n| la globalización | globalisering |\n| la corrupción | korrupsjon |\n| la manifestación | demonstrasjon |\n| la crisis económica | økonomisk krise |\n| la brecha digital | digitalt gap |\n\n**Nyttige uttrykk:**\n- *Según las últimas noticias...* (Ifølge de siste nyhetene...)\n- *Es un tema muy debatido...* (Det er et mye debattert tema...)\n- *Los expertos opinan que...* (Ekspertene mener at...)`,
      'Å kunne diskutere aktuelle temaer er en viktig del av avansert språkkompetanse. Her lærer du vokabular og uttrykk for å lese nyheter og delta i diskusjoner om samfunnsaktuelle temaer.',
      ['## Innvandring i den spansktalende verden\n\n**Spania:**\n- Fra utvandrerland til innvandrerland: Stor innvandring fra Latin-Amerika, Nord-Afrika og Øst-Europa siden 2000-tallet.\n- Debatt om integrasjon, arbeidsmarked og identitet.\n\n**Latin-Amerika:**\n- Venezuela-krisen: Millioner har flyktet til nabolandene.\n- Mellom-Amerikanske migranter søker mot USA.\n- Historisk: Latin-Amerika tok imot europeiske innvandrere (1800-1900-tallet).\n\n**Viktig:** Innvandring er et komplekst tema som krever nyansert diskusjon – unngå forenklinger.',
       '## Ulikhet i Latin-Amerika\n\nLatin-Amerika er verdens mest **ulike** region:\n- **Inntektsforskjeller:** Enorm avstand mellom rik og fattig.\n- **Tilgang til utdanning:** Stor variasjon etter sosial klasse.\n- **Urfolk og afrolatinos:** Overrepresentert i fattigdomsstatistikken.\n- **By vs. land:** Store forskjeller i levekår.\n\n**Uttrykk for å diskutere ulikhet:**\n- *La brecha entre ricos y pobres sigue creciendo.* (Gapet mellom rike og fattige fortsetter å vokse.)\n- *Es necesario invertir en educación.* (Det er nødvendig å investere i utdanning.)\n- *La desigualdad social es uno de los mayores problemas.* (Sosial ulikhet er et av de største problemene.)'],
      [{ title: 'Nyhetsvokabular', problem: 'Hvordan sier du «arbeidsledighet» og «klimaendring» på spansk?', solution: '**El desempleo** (eller **el paro**) = arbeidsledighet. **El cambio climático** = klimaendring.' },
       { title: 'Diskusjon', problem: 'Lag en setning om ulikhet i Latin-Amerika.', solution: '**La desigualdad social en América Latina es uno de los mayores desafíos de la región. La brecha entre ricos y pobres afecta a millones de personas.**' }],
      [mkEx('lett', 'Match nyhetsbegrep med oversettelse:', [
        ['la inmigración', 'innvandring'],
        ['el cambio climático', 'klimaendring'],
        ['la pobreza', 'fattigdom'],
        ['los refugiados', 'flyktninger']]),
       mkEx('lett', 'Velg riktig begrep for sammenhengen:', [
        ['Mange mennesker flykter fra Venezuela til nabolandene.', 'la inmigración / los refugiados'],
        ['Temperaturen på jorden stiger.', 'el cambio climático'],
        ['Mange unge i Spania finner ikke jobb.', 'el desempleo / el paro'],
        ['Demonstranter går i gatene for å protestere.', 'la manifestación']]),
       mkEx('medium', 'Skriv setninger om aktuelle temaer:', [
        ['Om innvandring i Spania', 'La inmigración es un tema importante en España. Muchos inmigrantes vienen de América Latina y Norte de África en busca de mejores oportunidades.'],
        ['Om ulikhet i Latin-Amerika', 'La desigualdad social en América Latina es un problema grave. La brecha entre ricos y pobres sigue siendo enorme.'],
        ['Om klimaendring', 'El cambio climático afecta especialmente a los países más pobres. Es necesario tomar medidas urgentes para reducir las emisiones.'],
        ['Om arbeidsledighet blant unge', 'El desempleo juvenil es un problema tanto en España como en América Latina. Muchos jóvenes no encuentran trabajo acorde a su formación.']]),
       mkEx('vanskelig', 'Drøft aktuelle temaer på spansk (3-4 setninger):', [
        ['Diskuter innvandring – fordeler og utfordringer.', 'La inmigración enriquece la sociedad con diversidad cultural y mano de obra. Sin embargo, plantea desafíos como la integración y la presión sobre los servicios públicos. Es importante buscar un equilibrio entre la acogida y la capacidad del país receptor.'],
        ['Hvordan påvirker klimaendring Latin-Amerika?', 'El cambio climático afecta gravemente a América Latina: sequías, inundaciones, pérdida de biodiversidad. Los países más vulnerables son los que menos contribuyen al problema. Es una cuestión de justicia global.'],
        ['Sammenlign et aktuelt tema i Norge og i et spansktalende land.', 'Tanto Noruega como España enfrentan el desafío de la inmigración. Sin embargo, mientras que en Noruega el debate se centra en la integración cultural, en España se discute más sobre el mercado laboral y la vivienda.'],
        ['Hvorfor er ulikhet et politisk problem?', 'La desigualdad genera tensión social, inestabilidad política y falta de oportunidades. Cuando una minoría acumula la riqueza, la democracia se debilita porque el poder económico se traduce en poder político.']])],
      '**Lesetips:** Følg spanske nyheter på nettsidene til El País (elpais.com) eller BBC Mundo (bbc.com/mundo) for å øve på nyhetsvokabular.',
      '**Oppsummering: Aktuelle temaer**\n\n- Nøkkeltemaer: innvandring, ulikhet, klimaendring, arbeidsledighet, korrupsjon\n- Spania: Fra utvandrerland til innvandrerland\n- Latin-Amerika: Verdens mest ulike region\n- Uttrykk: Según las últimas noticias..., Es un tema muy debatido...\n- Tips: Les nyheter på spansk (El País, BBC Mundo)'
    ),
    mkSub('6.3', 'Derechos humanos', 'Menneskerettigheter',
      'Utforsk menneskerettigheter i den spansktalende verden – historisk og i dag.',
      ['kjenne sentrale menneskerettighetsbegreper', 'diskutere menneskerettighetssituasjonen i spansktalende land', 'uttrykke seg om rettigheter og plikter på spansk'],
      'Menneskerettigheter (Derechos humanos)',
      `**Sentrale begreper:**\n\n| Spansk | Norsk |\n|--------|-------|\n| los derechos humanos | menneskerettigheter |\n| la Declaración Universal | Verdenserklæringen |\n| la libertad de expresión | ytringsfrihet |\n| la igualdad | likhet/likestilling |\n| la justicia social | sosial rettferdighet |\n| la dignidad humana | menneskelig verdighet |\n| la tortura | tortur |\n| los desaparecidos | de forsvunne |\n| la impunidad | straffefrihet |\n| la memoria histórica | historisk minne |\n| el asilo político | politisk asyl |\n| la pena de muerte | dødsstraff |\n\n**FNs verdenserklæring (1948):**\n*«Todos los seres humanos nacen libres e iguales en dignidad y derechos.»*\n(Alle mennesker er født frie og med lik verdighet og like rettigheter.)`,
      'Menneskerettigheter er et sentralt tema i den spansktalende verden, spesielt i lys av den historiske erfaringen med diktaturer, borgerkrig og sosial urettferdighet.',
      ['## Los desaparecidos – de forsvunne\n\nUnder militærdiktaturene i Latin-Amerika (1960–80-tallet) ble tusenvis av mennesker \"forsvunnet\" – bortført, torturert og drept av statsmakten.\n\n**Argentina:** Opp til 30 000 desaparecidos under militærjuntaen (1976–83).\n**Chile:** Tusenvis under Pinochet (1973–90).\n**Guatemala:** Over 200 000 drept, flertallet urfolk.\n\n**Las Madres de la Plaza de Mayo:**\n- Mødre og bestemødre som marsjerte på Plaza de Mayo i Buenos Aires hver torsdag.\n- Krevde svar om sine forsvunne barn og barnebarn.\n- Et av de mest kraftfulle menneskerettighets-symbolene i verden.\n- Fortsetter å marsjere den dag i dag.',
       '## Menneskerettigheter i Spania\n\n**Borgerkrigen og Franco:**\n- Hundretusener drept under borgerkrigen (1936–39).\n- Undertrykkelse av politisk opposisjon, regionale språk og kulturer.\n- **Ley de Memoria Histórica** (2007): Lov om historisk minne – et forsøk på å anerkjenne ofrene.\n\n**Aktuelle temaer:**\n- Ytringsfrihet vs. ny teknologi\n- Vold mot kvinner (violencia de género)\n- Migranters rettigheter\n- Katalonias uavhengighetskonflikt og demokratiske rettigheter\n\nSpania har gjort enorme fremskritt, men som alle land har det fortsatt utfordringer.'],
      [{ title: 'Menneskerettigheter', problem: 'Hvem var Las Madres de la Plaza de Mayo?', solution: 'Mødre (og senere bestemødre) til **desaparecidos** i Argentina som marsjerte på Plaza de Mayo i Buenos Aires for å kreve svar om sine forsvunne familiemedlemmer. De ble et internasjonalt **symbol på motstand** mot statlig undertrykkelse.' },
       { title: 'FN-erklæringen', problem: 'Oversett til norsk: «Todos los seres humanos nacen libres e iguales en dignidad y derechos.»', solution: '«Alle mennesker er født **frie** og med lik **verdighet** og like **rettigheter**.» (Artikkel 1 i FNs verdenserklæring om menneskerettigheter.)' }],
      [mkEx('lett', 'Match menneskerettighetsbegrep med oversettelse:', [
        ['la libertad de expresión', 'ytringsfrihet'],
        ['los desaparecidos', 'de forsvunne'],
        ['la justicia social', 'sosial rettferdighet'],
        ['la dignidad humana', 'menneskelig verdighet']]),
       mkEx('lett', 'Sant eller usant:', [
        ['FNs verdenserklæring ble vedtatt i 1948.', 'Sant.'],
        ['Las Madres de la Plaza de Mayo demonstrerte i Chile.', 'Usant – de demonstrerte i Buenos Aires, Argentina.'],
        ['Under Francos diktatur hadde Spania full ytringsfrihet.', 'Usant – det var streng sensur og undertrykkelse.'],
        ['Los desaparecidos refererer til folk som forsvant under militærdiktaturene.', 'Sant – tusenvis ble bortført og drept av statsmakten.']]),
       mkEx('medium', 'Diskuter menneskerettigheter på spansk:', [
        ['Hva var las Madres de la Plaza de Mayo sin betydning?', 'Las Madres fueron fundamentales para la defensa de los derechos humanos en Argentina. Su valor al enfrentarse a la dictadura inspiró movimientos similares en todo el mundo.'],
        ['Hva er Ley de Memoria Histórica?', 'Es una ley española de 2007 que busca reconocer a las víctimas de la Guerra Civil y la dictadura de Franco. Incluye la exhumación de fosas comunes y la retirada de símbolos franquistas.'],
        ['Hvilke menneskerettigheter er truet i dag?', 'Actualmente, la libertad de expresión, los derechos de los migrantes y la igualdad de género siguen siendo temas de preocupación en muchos países.'],
        ['Hvorfor er historisk minne viktig?', 'La memoria histórica es importante para que las atrocidades no se repitan. Reconocer a las víctimas es un acto de justicia y dignidad.']]),
       mkEx('vanskelig', 'Drøft menneskerettigheter i dybden:', [
        ['Sammenlign menneskerettighetssituasjonen under Franco og under de latinamerikanske diktaturene.', 'Begge regimer undertrykte politiske motstandere, men metodene var ulike. I Latin-Amerika var «forsvinningene» systematiske; i Spania var undertrykkelsen mer langvarig. Begge regioner kjemper fortsatt med oppgjøret etter diktaturet.'],
        ['Er det riktig å «glemme» fortiden for å skape fred? Diskuter.', 'Algunos argumentan que olvidar es necesario para la reconciliación. Otros creen que sin memoria no hay justicia. En mi opinión, es posible recordar sin buscar venganza, pero el olvido permite que la historia se repita.'],
        ['Drøft ytringsfrihet vs. hatprat – hvor går grensen?', 'La libertad de expresión es un derecho fundamental, pero no puede ser absoluta. El discurso de odio daña la dignidad humana. El desafío es encontrar un equilibrio entre la libertad y la protección de los derechos de todos.'],
        ['Hva kan vi lære av Las Madres de la Plaza de Mayo?', 'Nos enseñan que la resistencia pacífica es posible incluso frente a la dictadura más brutal. Su valentía demuestra que la búsqueda de la verdad y la justicia es un derecho inalienable.']])],
      '**Refleksjon:** Menneskerettigheter er ikke bare et historisk tema – de er aktuelle i dag. Tenk over: Hvilke rettigheter tar du for gitt?',
      '**Oppsummering: Menneskerettigheter**\n\n- FNs verdenserklæring (1948): Frihet, likhet, verdighet\n- Los desaparecidos: Tusenvis forsvunnet under latinamerikanske diktaturer\n- Las Madres de la Plaza de Mayo: Symbol på motstand og krav om sannhet\n- Spania: Borgerkrig, Franco, Ley de Memoria Histórica\n- Aktuelle temaer: Ytringsfrihet, migranters rettigheter, kjønnsbasert vold\n- Vokabular: derechos humanos, libertad de expresión, justicia social, dignidad humana'
    ),
    mkSub('6.4', 'Debates y opiniones', 'Debatter og meningsytringer',
      'Lær å delta i formelle debatter på spansk – argumentere, overbevise og uttrykke nyanserte meninger.',
      ['delta i formelle debatter på spansk', 'bruke avanserte debattfraser', 'strukturere argumenter overbevisende'],
      'Debattferdigheter (Habilidades de debate)',
      `**Debattstruktur:**\n\n1. **Presentación de la tesis:** Presenter din påstand.\n2. **Argumentos a favor:** Argumenter for.\n3. **Contraargumentos:** Motargumenter du forutser.\n4. **Refutación:** Tilbakevis motargumentene.\n5. **Conclusión:** Oppsummer og styrk din posisjon.\n\n**Debattfraser:**\n\n| Funksjon | Spansk |\n|----------|--------|\n| Mening | En mi opinión, / Desde mi punto de vista, |\n| Enig | Estoy totalmente de acuerdo con... |\n| Uenig | No estoy de acuerdo porque... / Discrepo con... |\n| Tillegg | Además, / Asimismo, / Por otra parte, |\n| Motargument | Sin embargo, / No obstante, / A pesar de eso, |\n| Eksempel | Por ejemplo, / Un claro ejemplo es... |\n| Konklusjon | En conclusión, / Para resumir, / En definitiva, |\n| Konsesjon | Es cierto que..., pero... / Reconozco que..., sin embargo... |`,
      'Å kunne debattere er en avansert språkferdighet som krever både vokabular, struktur og evnen til å tenke kritisk. I dette kapittelet lærer du å bygge overbevisende argumenter og delta i formelle debatter på spansk.',
      ['## Å bygge et argument\n\n**Struktur for et godt argument:**\n1. **Påstand (Tesis):** Det du mener.\n2. **Begrunnelse (Justificación):** Hvorfor du mener det.\n3. **Bevis/eksempel (Evidencia):** Fakta eller eksempler som støtter.\n4. **Sammenbinding (Conclusión):** Knyt tilbake til påstanden.\n\n**Eksempel:**\n- **Tesis:** La educación es la clave para reducir la desigualdad.\n- **Justificación:** Porque una buena educación ofrece oportunidades iguales a todos.\n- **Evidencia:** Los países con mejor educación (Noruega, Finlandia) tienen menor desigualdad.\n- **Conclusión:** Por lo tanto, invertir en educación es invertir en igualdad.',
       '## Overbevisende språk\n\n**Retoriske virkemidler:**\n- **Retoriske spørsmål:** *¿Acaso no merecemos todos los mismos derechos?* (Fortjener vi ikke alle de samme rettighetene?)\n- **Gjentakelse:** *La justicia, la verdad, la dignidad – eso es lo que pedimos.* (Rettferdighet, sannhet, verdighet – det er det vi ber om.)\n- **Konsesjon + motargument:** *Es cierto que la inmigración plantea desafíos, pero los beneficios superan los problemas.* (Det er sant at innvandring byr på utfordringer, men fordelene overgår problemene.)\n- **Appell til følelser:** *Pensemos en los niños que no tienen acceso a la educación.* (La oss tenke på barna som ikke har tilgang til utdanning.)\n- **Appell til fakta:** *Según la ONU, más de 100 millones de personas son desplazadas.* (Ifølge FN er over 100 millioner mennesker fordrevet.)'],
      [{ title: 'Argumentbygging', problem: 'Bygg et argument for at klimaendring er det viktigste temaet i vår tid.', solution: '**Tesis:** El cambio climático es el mayor desafío de nuestro tiempo. **Justificación:** Porque afecta a todos los aspectos de la vida humana. **Evidencia:** Las temperaturas globales han subido 1,1°C y los fenómenos extremos son más frecuentes. **Conclusión:** Por lo tanto, debemos actuar ahora.' },
       { title: 'Debatteknikk', problem: 'Hvordan kan du innrømme et poeng men likevel holde fast ved din posisjon?', solution: 'Bruk **konsesjon + motargument**: *Es cierto que..., pero/sin embargo...* Eksempel: *Reconozco que la tecnología tiene riesgos, sin embargo, los beneficios para la educación son innegables.*' }],
      [mkEx('lett', 'Match debattfrase med funksjon:', [
        ['En mi opinión...', 'Uttrykke mening'],
        ['Sin embargo...', 'Motargument / innvending'],
        ['Por ejemplo...', 'Gi et eksempel'],
        ['En conclusión...', 'Oppsummere / avslutte']]),
       mkEx('lett', 'Fyll inn riktig debattfrase:', [
        ['___, creo que la educación es muy importante. (Etter min mening)', 'En mi opinión'],
        ['Es verdad que hay problemas, ___ también hay soluciones. (likevel)', 'sin embargo / pero'],
        ['___, los países nórdicos tienen buenos sistemas educativos. (For eksempel)', 'Por ejemplo'],
        ['___, debemos actuar ahora contra el cambio climático. (Avslutningsvis)', 'En conclusión']]),
       mkEx('medium', 'Bygg argumenter med debattfraser:', [
        ['Argumenter FOR at språklæring er viktig.', 'En mi opinión, aprender idiomas es fundamental. Además de abrir puertas profesionales, nos permite entender otras culturas. Por ejemplo, hablar español nos conecta con más de 500 millones de personas.'],
        ['Argumenter MOT for mye skjermtid.', 'Desde mi punto de vista, el exceso de tiempo frente a la pantalla es perjudicial. Según los expertos, afecta la concentración y el sueño. Sin embargo, reconozco que la tecnología también tiene beneficios educativos.'],
        ['Bruk konsesjon + motargument om innvandring.', 'Es cierto que la inmigración plantea desafíos de integración. Sin embargo, los inmigrantes contribuyen a la economía y enriquecen la cultura del país receptor.'],
        ['Skriv en konklusjon om utdanning.', 'En definitiva, la educación es la base de una sociedad justa e igualitaria. Invertir en educación no es un gasto, sino una inversión en el futuro de todos.']]),
       mkEx('vanskelig', 'Delta i debatter – skriv innlegg på 4-5 setninger:', [
        ['Argumenter for at kunst og kultur bør prioriteres i skolen.', 'Desde mi punto de vista, el arte y la cultura son esenciales en la educación. No solo desarrollan la creatividad, sino también el pensamiento crítico. Además, estudios demuestran que los alumnos con formación artística obtienen mejores resultados académicos. Es cierto que las materias STEM son importantes, sin embargo, una educación completa debe incluir las humanidades.'],
        ['Argumenter mot at alle nyheter bør være gratis.', 'Reconozco que el acceso libre a la información es un derecho fundamental. Sin embargo, el periodismo de calidad tiene un coste. Si nadie paga por las noticias, los medios dependerán de la publicidad, lo que compromete su independencia. En conclusión, pagar por las noticias es invertir en democracia.'],
        ['Debatter: Er globalisering positivt eller negativt?', 'La globalización es un fenómeno complejo con aspectos positivos y negativos. Por una parte, ha reducido la pobreza extrema y facilitado el intercambio cultural. Por otra parte, ha aumentado la desigualdad y la destrucción medioambiental. En mi opinión, el desafío no es frenar la globalización, sino hacerla más justa.'],
        ['Debatter: Bør 16-åringer ha stemmerett?', 'Es un tema muy debatido. Los defensores argumentan que los jóvenes de 16 años están informados y afectados por las decisiones políticas. Los opositores señalan que les falta madurez. Desde mi punto de vista, si a los 16 años se puede trabajar y pagar impuestos, también se debería poder votar.']])],
      '**Debattips:** Den beste debatten er den der du lytter like mye som du snakker. Bruk «Es cierto que..., pero...» for å vise at du forstår motparten – det styrker ditt eget argument.',
      '**Oppsummering: Debatter og meningsytringer**\n\n- Debattstruktur: Tesis → Argumentos → Contraargumentos → Refutación → Conclusión\n- Argumentbygging: Påstand + Begrunnelse + Bevis + Sammenbinding\n- Nøkkelfraser: En mi opinión, Sin embargo, Es cierto que... pero..., En conclusión\n- Retoriske virkemidler: Retoriske spørsmål, gjentakelse, konsesjon, appell\n- Mål: Overbevisende, nyansert og respektfull debatt på spansk'
    ),
  ]
};

// Now generate the file
function generateChapterContent(level, mainNum, subNum, data) {
  const id = `spansk-${level}-${mainNum}-${subNum}`;
  const lines = [];
  lines.push(`    { id: '${id}-intro', type: 'text', content: \`## ${data.title}\n\n${data.intro}\` },`);
  lines.push(`    { id: '${id}-def-1', type: 'definition', title: '${data.defTitle}', content: \`${data.defContent}\` },`);
  data.texts.forEach((t, i) => {
    lines.push(`    { id: '${id}-text-${i+1}', type: 'text', content: \`${t}\` },`);
  });
  if (data.examples[0]) {
    lines.push(`    { id: '${id}-example-1', type: 'example', title: 'Eksempel: ${data.examples[0].title}', problem: \`${data.examples[0].problem}\`, solution: \`${data.examples[0].solution}\` },`);
  }
  data.exercises.forEach((ex, i) => {
    const subs = ex.subs.map((s, j) => {
      const l = String.fromCharCode(97+j);
      return `        { label: '${l}', task: '${s.t.replace(/'/g,"\\'")}', solution: '${s.s.replace(/'/g,"\\'")}', answer: '${s.s.replace(/'/g,"\\'")}' }`;
    }).join(',\n');
    lines.push(`    { id: '${id}-ex-block-${i+1}', type: 'exercise', exercise: { id: '${id}-ex-${i+1}', number: '${i+1}', type: 'classic', difficulty: '${ex.diff}', task: '${ex.task.replace(/'/g,"\\'")}', subTasks: [\n${subs},\n      ], solution: '${ex.subs.map((s,j)=>String.fromCharCode(97+j)+') '+s.s).join(', ').replace(/'/g,"\\'")}', hints: ['Se teorien over', 'Sjekk eksemplene'] } },`);
    if (i === 1 && data.examples[1]) {
      lines.push(`    { id: '${id}-example-2', type: 'example', title: 'Eksempel: ${data.examples[1].title}', problem: \`${data.examples[1].problem}\`, solution: \`${data.examples[1].solution}\` },`);
    }
  });
  lines.push(`    { id: '${id}-tip-1', type: 'tip', content: \`${data.tip}\` },`);
  lines.push(`    { id: '${id}-note-1', type: 'note', title: 'Oppsummering', content: \`${data.note}\` },`);
  return lines.join('\n');
}

function generateFile(level, chapterNums, chapters, fileLabel) {
  const lang = `spansk-${level}`;
  let content = `/* eslint-disable */\n// @ts-nocheck\n/**\n * Spansk nivå ${level} - Kapittel ${fileLabel} (Detaljerte underkapitler)\n *\n * Dekker:\n${chapterNums.map(n => ` * - Kapittel ${n}: ${chapters[n].title} (${n}.1-${n}.4)`).join('\n')}\n */\n\nimport type { TextbookChapter } from '@/lib/types/textbook';\n`;
  const allNames = [];
  for (const m of chapterNums) {
    const ch = chapters[m];
    content += `\n// ============================================================================\n// KAPITTEL ${m}: ${ch.title}\n// ============================================================================\n`;
    ch.subs.forEach((sub, idx) => {
      const s = idx + 1;
      const name = `CHAPTER_SPANSK_${level}_${m}_${s}`;
      allNames.push(name);
      content += `\n// ${sub.n} ${sub.title}\nexport const ${name}: TextbookChapter = {\n  id: '${lang}-${m}-${s}',\n  courseId: '${lang}',\n  chapterNumber: '${sub.n}',\n  title: '${sub.title}',\n  subtitle: '${sub.subtitle}',\n  description: '${sub.desc}',\n  estimatedMinutes: 45,\n  competenceGoals: [${sub.goals.map(g=>`'${g}'`).join(', ')}],\n  content: [\n${generateChapterContent(level, m, s, sub)}\n  ],\n  exercises: [],\n};\n`;
    });
  }
  const expName = `SPANSK_${level}_CHAPTERS_${fileLabel.replace('-','_')}`;
  content += `\nexport const ${expName}: TextbookChapter[] = [\n${allNames.map(n=>`  ${n},`).join('\n')}\n];\n`;
  return content;
}

// Generate spansk-3-kap4-6
const s3_4_6 = generateFile(3, [4, 5, 6], {4: s3ch4, 5: s3ch5, 6: s3ch6}, '4-6');
fs.writeFileSync(path.join(outDir, 'textbook-content-spansk-3-kap4-6.ts'), s3_4_6);
console.log(`Written: textbook-content-spansk-3-kap4-6.ts (${s3_4_6.split('\n').length} lines)`);
