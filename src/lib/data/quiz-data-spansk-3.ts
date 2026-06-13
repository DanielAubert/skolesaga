import type { QuizQuestion } from './quiz-data';

const quizData_spansk_3: Record<string, QuizQuestion[]> = {


  'spansk-3-1-1': [
    {
      question: 'Hvilken modus krever upersonlige uttrykk som \'es necesario que\'?',
      options: ['Konjunktiv (subjuntivo)', 'Indikativ', 'Imperativ', 'Infinitiv'],
      explanation: 'Upersonlige uttrykk som uttrykker nødvendighet, vurdering eller følelse krever konjunktiv: \'Es necesario que estudies\'.',
    },
    {
      question: 'Hvilket uttrykk tar INDIKATIV fordi det konstaterer et faktum?',
      options: ['Es verdad que', 'Es necesario que', 'Es importante que', 'Es posible que'],
      explanation: '\'Es verdad que\' og \'es evidente que\' konstaterer fakta og tar indikativ: \'Es verdad que habla bien\'.',
    },
    {
      question: 'Hva er riktig: \'Es importante que tú ___ a tiempo\'?',
      options: ['llegues', 'llegas', 'llegar', 'llegará'],
      explanation: '\'Es importante que\' krever konjunktiv, så det blir \'llegues\' (2. person presens konjunktiv).',
    },
    {
      question: 'Hva betyr \'Es preciso que llegues a tiempo\'?',
      options: ['Det er nødvendig at du kommer i tide', 'Det er sikkert at du kommer i tide', 'Du kom i tide', 'Du vil komme i tide'],
      explanation: '\'Es preciso que\' uttrykker nødvendighet og betyr \'det er nødvendig at\', etterfulgt av konjunktiv.',
    },
    {
      question: 'Hvilket uttrykk krever konjunktiv?',
      options: ['Es posible que', 'Es evidente que', 'Es verdad que', 'Es cierto que'],
      explanation: '\'Es posible que\' uttrykker mulighet/usikkerhet og krever konjunktiv. De andre konstaterer fakta og tar indikativ.',
    },
  ],

  'spansk-3-1-2': [
    {
      question: 'Når brukes konjunktiv i relativsetninger?',
      options: ['Når antecedenten er ukjent eller ikke-eksisterende', 'Når antecedenten er kjent', 'Alltid', 'Aldri'],
      explanation: 'Konjunktiv brukes når det substantivet relativsetningen viser til er ukjent, søkt eller ikke-eksisterende.',
    },
    {
      question: 'Hva er riktig: \'Busco un amigo que ___ chino\'?',
      options: ['hable', 'habla', 'hablar', 'hablará'],
      explanation: 'Når du leter etter noen ukjent (\'busco\'), brukes konjunktiv: \'que hable chino\'.',
    },
    {
      question: 'Hvilken setning har en KJENT antecedent (indikativ)?',
      options: ['Tengo un profesor que explica bien', 'Busco a alguien que sepa francés', 'No hay nadie que pueda ayudarme', 'Necesito un libro que sea fácil'],
      explanation: '\'Tengo un profesor que explica bien\' viser til en konkret, kjent person, derfor indikativ.',
    },
    {
      question: 'Hva er riktig: \'No hay nadie que ___ ayudarme\'?',
      options: ['pueda', 'puede', 'poder', 'podrá'],
      explanation: 'Ikke-eksisterende antecedent (\'no hay nadie\') krever konjunktiv: \'que pueda\'.',
    },
    {
      question: 'Hva er forskjellen mellom \'Tengo un amigo que habla\' og \'Busco un amigo que hable\'?',
      options: ['Kjent (indikativ) vs. søkt/ukjent (konjunktiv)', 'Ingen forskjell', 'Begge er konjunktiv', 'Begge er indikativ'],
      explanation: 'Den første viser til en kjent venn (indikativ), den andre til en ukjent venn man leter etter (konjunktiv).',
    },
  ],

  'spansk-3-1-3': [
    {
      question: 'Hvilken tidskonjunksjon krever ALLTID konjunktiv?',
      options: ['antes de que', 'cuando', 'después de que', 'hasta que'],
      explanation: '\'Antes de que\' krever alltid konjunktiv, uansett om handlingen er i fortid eller fremtid.',
    },
    {
      question: 'Hva er riktig: \'Cuando ___ a casa, te llamaré\'?',
      options: ['llegue', 'llego', 'llegué', 'llegaré'],
      explanation: 'Fremtidig handling etter \'cuando\' krever konjunktiv: \'Cuando llegue a casa, te llamaré\'.',
    },
    {
      question: 'Hvilken modus brukes etter \'cuando\' når det refererer til en vane i fortiden?',
      options: ['Indikativ', 'Konjunktiv', 'Imperativ', 'Infinitiv'],
      explanation: 'Når \'cuando\' viser til fortid eller en vane, brukes indikativ: \'Cuando llegaba a casa, comía\'.',
    },
    {
      question: 'Hva er riktig: \'Antes de que ___, cierra la puerta\'?',
      options: ['salgas', 'sales', 'salir', 'saldrás'],
      explanation: '\'Antes de que\' krever alltid konjunktiv: \'Antes de que salgas\'.',
    },
    {
      question: 'Hvorfor brukes konjunktiv i \'Cuando tenga dinero, viajaré\'?',
      options: ['Handlingen er fremtidig og ikke skjedd ennå', 'Handlingen er fortid', 'Det er en vane', 'Det er en kjensgjerning'],
      explanation: 'Konjunktiv brukes fordi handlingen er fremtidig og ikke har skjedd ennå.',
    },
  ],

  'spansk-3-1-4': [
    {
      question: 'Hvilket verb tar INDIKATIV i bekreftende form?',
      options: ['creer que', 'querer que', 'dudar que', 'alegrarse de que'],
      explanation: '\'Creo que\' uttrykker tro/sikkerhet og tar indikativ: \'Creo que viene\'. Nektet (\'no creo que\') tar konjunktiv.',
    },
    {
      question: 'Hva er riktig: \'No creo que ___ mañana\'?',
      options: ['venga', 'viene', 'vendrá', 'venir'],
      explanation: '\'No creer que\' uttrykker tvil og krever konjunktiv: \'No creo que venga mañana\'.',
    },
    {
      question: 'Hvilken kategori utløser konjunktiv?',
      options: ['Ønske/vilje (querer que)', 'Sikker tro (creer que)', 'Konstatering (es verdad que)', 'Sannhet (es evidente que)'],
      explanation: 'Ønske og vilje, som \'querer que\', utløser konjunktiv. De andre er fakta/tro og tar indikativ.',
    },
    {
      question: 'Hva er riktig: \'Creo que él ___ razón\'?',
      options: ['tiene', 'tenga', 'tener', 'tendría'],
      explanation: 'Bekreftende \'creo que\' tar indikativ: \'Creo que tiene razón\'.',
    },
    {
      question: 'Hvilken bruk hører til konjunktiv?',
      options: ['Tvil og usikkerhet', 'Konstatering av fakta', 'Sikker tro', 'Beskrivelse av nåtid som faktum'],
      explanation: 'Konjunktiv uttrykker subjektive holdninger som tvil, ønske og følelse, ikke konstatering av fakta.',
    },
  ],

  'spansk-3-2-1': [
    {
      question: 'Hvordan dannes pluskvamperfektum (el pluscuamperfecto)?',
      options: ['había + partisipp', 'he + partisipp', 'habré + partisipp', 'habría + partisipp'],
      explanation: 'Pluskvamperfektum dannes med imperfektum av \'haber\' (había) + partisipp: \'había salido\'.',
    },
    {
      question: 'Hva uttrykker pluskvamperfektum?',
      options: ['En handling som skjedde før en annen handling i fortiden', 'En handling i fremtiden', 'En pågående handling nå', 'En vane i nåtiden'],
      explanation: 'Pluskvamperfektum uttrykker noe som hadde skjedd før et annet tidspunkt i fortiden (\'hadde + partisipp\').',
    },
    {
      question: 'Hva er det uregelmessige partisippet av \'hacer\'?',
      options: ['hecho', 'hacido', 'hado', 'haciendo'],
      explanation: '\'Hacer\' har det uregelmessige partisippet \'hecho\': \'había hecho\' (hadde gjort).',
    },
    {
      question: 'Hva er riktig: \'Cuando llegué, María ya ___ salido\'?',
      options: ['había', 'ha', 'habrá', 'habría'],
      explanation: 'Pluskvamperfektum krever \'había\': \'María ya había salido\' (hadde allerede gått).',
    },
    {
      question: 'Hvilket er et uregelmessig partisipp?',
      options: ['escrito', 'comido', 'hablado', 'vivido'],
      explanation: '\'Escrito\' (av escribir) er uregelmessig. De andre er regelmessige (-ado/-ido).',
    },
  ],

  'spansk-3-2-2': [
    {
      question: 'Hva er preteritumstammen til \'tener\'?',
      options: ['tuv-', 'ten-', 'tien-', 'tuven-'],
      explanation: '\'Tener\' har den uregelmessige preteritumstammen \'tuv-\': tuve, tuviste, tuvo...',
    },
    {
      question: 'Hvilken endelse får j-stamme-verb (som decir) i 3. person flertall?',
      options: ['-eron (dijeron)', '-ieron (dijieron)', '-aron (dijaron)', '-ron (dijron)'],
      explanation: 'J-stamme-verb får \'-eron\' uten i: \'dijeron\', ikke \'dijieron\'.',
    },
    {
      question: 'Hva kjennetegner verbene \'ir\' og \'ser\' i preteritum?',
      options: ['De har identiske former (fui, fuiste...)', 'De er regelmessige', 'De mangler 3. person', 'De bøyes som \'estar\''],
      explanation: '\'Ir\' og \'ser\' har identiske preteritumformer: fui, fuiste, fue, fuimos, fueron.',
    },
    {
      question: 'Hva er preteritumstammen til \'hacer\'?',
      options: ['hic-', 'hac-', 'hech-', 'hiz-'],
      explanation: '\'Hacer\' har stammen \'hic-\': hice, hiciste, hizo (med z foran o), hicimos, hicieron.',
    },
    {
      question: 'Hvilken tidsform brukes for en avsluttet handling i fortiden?',
      options: ['Pretérito indefinido', 'Pretérito imperfecto', 'Presente', 'Futuro'],
      explanation: 'Pretérito indefinido (preteritum) brukes for avsluttede handlinger: \'Ayer comí paella\'.',
    },
  ],

  'spansk-3-2-3': [
    {
      question: 'Hvilken tidsform brukes for bakgrunn og beskrivelse i en fortelling?',
      options: ['Imperfektum', 'Preteritum', 'Pluskvamperfektum', 'Futurum'],
      explanation: 'Imperfektum brukes for bakgrunn og beskrivelse: \'Era un día frío\' (Det var en kald dag).',
    },
    {
      question: 'Hvilken tidsform brukes for en ny, avsluttet hendelse i en fortelling?',
      options: ['Preteritum', 'Imperfektum', 'Presens', 'Futurum'],
      explanation: 'Preteritum brukes for nye, avsluttede handlinger: \'De repente, sonó el teléfono\'.',
    },
    {
      question: 'Hvilken tidsform brukes for forhistorie (\'hadde gjort\')?',
      options: ['Pluskvamperfektum', 'Imperfektum', 'Preteritum', 'Presens'],
      explanation: 'Pluskvamperfektum brukes for forhistorie: noe som hadde skjedd før selve fortellingen.',
    },
    {
      question: 'Hvilket signalord hører typisk til imperfektum?',
      options: ['mientras', 'de repente', 'ayer', 'de pronto'],
      explanation: '\'Mientras\' (mens), \'siempre\' og \'cada día\' er signalord for imperfektum (bakgrunn/vane).',
    },
    {
      question: 'I \'Llovía mucho cuando Juan salió\', hvilken er bakgrunnen?',
      options: ['Llovía (imperfektum)', 'salió (preteritum)', 'Begge', 'Ingen'],
      explanation: '\'Llovía\' (imperfektum) er bakgrunnen, mens \'salió\' (preteritum) er den avsluttede handlingen.',
    },
  ],

  'spansk-3-2-4': [
    {
      question: 'Hva handler \'concordancia temporal\' (tidsformssekvenser) om?',
      options: ['Samsvar mellom tidsform i hoved- og bisetning', 'Bøyning av substantiv', 'Plassering av adjektiv', 'Bruk av artikler'],
      explanation: 'Concordancia temporal handler om hvilken tidsform bisetningen får ut fra hovedsetningens tidsform.',
    },
    {
      question: 'Hvis hovedsetningen er i presens, hvilken konjunktiv brukes i bisetningen?',
      options: ['Presens konjunktiv', 'Imperfekt konjunktiv', 'Pluskvamperfektum konjunktiv', 'Ingen konjunktiv'],
      explanation: 'Presens i hovedsetning + presens konjunktiv: \'Quiero que vengas\'.',
    },
    {
      question: 'I indirekte tale: \'Estoy bien\' blir til \'Dijo que ___ bien\'?',
      options: ['estaba', 'está', 'estará', 'esté'],
      explanation: 'Presens \'estoy\' skyves til imperfektum \'estaba\' når innledningsverbet er i fortid.',
    },
    {
      question: 'Hvis hovedsetningen er i fortid, hvilken konjunktiv brukes?',
      options: ['Imperfekt konjunktiv', 'Presens konjunktiv', 'Indikativ presens', 'Futurum'],
      explanation: 'Fortid i hovedsetning krever imperfekt konjunktiv i bisetningen: \'Quería que vinieras\'.',
    },
    {
      question: 'Hva er riktig: \'Es importante que tú ___\' (presens hovedsetning)?',
      options: ['estudies', 'estudiaras', 'estudias', 'estudiarás'],
      explanation: 'Presens hovedsetning (\'es importante\') tar presens konjunktiv: \'que estudies\'.',
    },
  ],

  'spansk-3-3-1': [
    {
      question: 'Hva er grunnregelen for å lage indirekte tale?',
      options: ['Fjern anførselstegn, legg til \'que\' og tilpass pronomen', 'Behold alt likt', 'Legg til \'si\'', 'Bytt verbet til infinitiv'],
      explanation: 'Grunnregelen er å fjerne anførselstegnene, legge til \'que\' og tilpasse pronomenene.',
    },
    {
      question: '\'María dice: "Estoy cansada"\' blir til indirekte tale:',
      options: ['María dice que está cansada', 'María dice que estoy cansada', 'María dice estar cansada', 'María dijo que estaba cansada'],
      explanation: 'Med innledningsverb i presens (\'dice\') skjer ingen tidsendring, men pronomen tilpasses: \'que está cansada\'.',
    },
    {
      question: 'Hvilket er et vanlig innledningsverb?',
      options: ['decir que', 'si', 'cuando', 'que'],
      explanation: '\'Decir que\' (si at) er et vanlig innledningsverb. Andre er \'contar que\', \'explicar que\', \'afirmar que\'.',
    },
    {
      question: 'Hva skjer med pronomenet \'yo\' i indirekte tale?',
      options: ['Det blir \'él/ella\'', 'Det blir \'tú\'', 'Det forblir \'yo\'', 'Det forsvinner alltid'],
      explanation: '\'Yo\' i direkte tale blir \'él/ella\' i indirekte tale når en annen gjengir det.',
    },
    {
      question: 'Skjer det tidsendring når innledningsverbet er i presens?',
      options: ['Nei, ingen tidsendring', 'Ja, alltid', 'Bare for futurum', 'Bare for imperativ'],
      explanation: 'Med innledningsverb i presens skjer ingen tidsendring i bisetningen.',
    },
  ],

  'spansk-3-3-2': [
    {
      question: 'Når innledningsverbet er i fortid, hva skjer med presens i bisetningen?',
      options: ['Det blir imperfektum', 'Det blir futurum', 'Det forblir presens', 'Det blir preteritum'],
      explanation: 'Med innledningsverb i fortid skyves presens til imperfektum: \'"Tengo hambre"\' → \'Dijo que tenía hambre\'.',
    },
    {
      question: 'Hva blir futurum til i indirekte tale med fortidsinnledning?',
      options: ['Kondisjonalis', 'Imperfektum', 'Presens', 'Pluskvamperfektum'],
      explanation: 'Futurum skyves til kondisjonalis: \'"Vendré"\' → \'Dijo que vendría\'.',
    },
    {
      question: 'Hva blir perfektum til i indirekte tale med fortidsinnledning?',
      options: ['Pluskvamperfektum', 'Imperfektum', 'Futurum', 'Presens'],
      explanation: 'Perfektum skyves til pluskvamperfektum: \'"He terminado"\' → \'Dijo que había terminado\'.',
    },
    {
      question: 'Hva blir tidsuttrykket \'mañana\' til i indirekte tale?',
      options: ['al día siguiente', 'ese día', 'ayer', 'hoy'],
      explanation: '\'Mañana\' (i morgen) blir \'al día siguiente\' (neste dag) i indirekte tale i fortid.',
    },
    {
      question: '\'Estoy cansada\' (sagt i fortid) blir \'Dijo que ___ cansada\'?',
      options: ['estaba', 'está', 'estará', 'esté'],
      explanation: 'Presens \'estoy\' skyves til imperfektum \'estaba\'.',
    },
  ],

  'spansk-3-3-3': [
    {
      question: 'Hvilket ord brukes for ja/nei-spørsmål i indirekte tale?',
      options: ['si', 'que', 'cuál', 'cómo'],
      explanation: 'Ja/nei-spørsmål bruker \'si\': \'¿Vienes?\' → \'Preguntó si venía\'.',
    },
    {
      question: '\'¿Vienes a la fiesta?\' blir indirekte:',
      options: ['Preguntó si venía a la fiesta', 'Preguntó que venía', 'Preguntó cuándo venía', 'Dijo que venía'],
      explanation: 'Ja/nei-spørsmål bruker \'preguntar si\': \'Preguntó si venía a la fiesta\'.',
    },
    {
      question: 'Hva skjer med spørreordet i informasjonsspørsmål i indirekte tale?',
      options: ['Det beholdes (med aksenttegn)', 'Det erstattes med \'si\'', 'Det fjernes', 'Det blir \'que\''],
      explanation: 'Informasjonsspørsmål beholder spørreordet med aksent: \'Preguntó qué hacía\'.',
    },
    {
      question: '\'¿Dónde vives?\' blir indirekte:',
      options: ['Preguntó dónde vivía', 'Preguntó si vivía', 'Preguntó que vivía', 'Dijo dónde vivía'],
      explanation: 'Spørreordet \'dónde\' beholdes: \'Preguntó dónde vivía\'.',
    },
    {
      question: 'Hva skjer med ordstillingen i indirekte spørsmål?',
      options: ['Den endres til vanlig setningsordstilling', 'Den beholdes som i spørsmål', 'Verbet fjernes', 'Subjektet fjernes'],
      explanation: 'Ordstillingen endres fra spørsmålsform til vanlig setningsordstilling.',
    },
  ],

  'spansk-3-3-4': [
    {
      question: 'Hvilket innledningsverb er typisk for journalistikk?',
      options: ['declarar que', 'preguntar si', 'cuando', 'gustar'],
      explanation: '\'Declarar que\' (erklære at) er et typisk journalistisk innledningsverb, sammen med \'anunciar\', \'afirmar\', \'señalar\'.',
    },
    {
      question: 'Hva betyr \'según el ministro\'?',
      options: ['Ifølge ministeren', 'Til ministeren', 'Mot ministeren', 'Med ministeren'],
      explanation: '\'Según\' betyr \'ifølge\' og brukes for kildehenvisning: \'Según el ministro, ...\'.',
    },
    {
      question: 'Hvorfor brukes indirekte tale i journalistikk?',
      options: ['For å gjengi hva kilder har sagt', 'For å skjule fakta', 'For å stille spørsmål', 'For å gi ordre'],
      explanation: 'Journalistikk bruker indirekte tale for å referere til uttalelser fra kilder uten å sitere ordrett.',
    },
    {
      question: 'Hvilket uttrykk brukes for kildehenvisning?',
      options: ['De acuerdo con el informe', 'Antes de que', 'Ojalá que', 'Es necesario que'],
      explanation: '\'De acuerdo con el informe\' (i henhold til rapporten) er en typisk kildehenvisning.',
    },
    {
      question: 'Hva er en god struktur for en nyhetsartikkel?',
      options: ['Tittel – ingress – brødtekst – bakgrunn', 'Innledning – konjunktiv – slutt', 'Bare sitater', 'Bare tittel'],
      explanation: 'En nyhetsartikkel har tittel, ingress (hvem/hva/når/hvor), brødtekst med sitater, og bakgrunn.',
    },
  ],

  'spansk-3-4-1': [
    {
      question: 'Hvem skrev Don Quijote?',
      options: ['Miguel de Cervantes', 'Federico García Lorca', 'Gabriel García Márquez', 'Isabel Allende'],
      explanation: 'Don Quijote (1605/1615) ble skrevet av Miguel de Cervantes (1547-1616).',
    },
    {
      question: 'Hva regnes Don Quijote som?',
      options: ['Den første moderne romanen', 'Et dikt', 'Et teaterstykke', 'En selvbiografi'],
      explanation: 'Don Quijote regnes som den første moderne romanen i verdenslitteraturen.',
    },
    {
      question: 'Hvilket sentralt tema utforsker Don Quijote?',
      options: ['Idealisme vs. realisme', 'Klimaendringer', 'Industrialisering', 'Romantisk kjærlighet alene'],
      explanation: 'Et sentralt tema er idealisme vs. realisme – Don Quijote ser verden som han ønsker, Sancho ser den som den er.',
    },
    {
      question: 'Hva tror Don Quijote vindmøllene er?',
      options: ['Kjemper (gigantes)', 'Drager', 'Riddere', 'Slott'],
      explanation: 'I den berømte episoden tror Don Quijote at vindmøllene er kjemper han må kjempe mot.',
    },
    {
      question: 'Hvilken figur representerer realismen ved siden av Don Quijote?',
      options: ['Sancho Panza', 'Dulcinea', 'Cervantes', 'Rocinante'],
      explanation: 'Sancho Panza, Don Quijotes følgesvenn, representerer den jordnære realismen.',
    },
  ],

  'spansk-3-4-2': [
    {
      question: 'Hvilken litterær gruppe tilhørte Federico García Lorca?',
      options: ['Generación del 27', 'Generación del 98', 'El Boom', 'La Movida'],
      explanation: 'Lorca var medlem av Generación del 27, en gruppe poeter som fornyet spansk litteratur på 1920-30-tallet.',
    },
    {
      question: 'Hva er Lorca mest kjent for?',
      options: ['Poesi og teater', 'Romaner', 'Filmregissør', 'Maleri'],
      explanation: 'Lorca er kjent som poet og dramatiker, med verk som Romancero gitano og La casa de Bernarda Alba.',
    },
    {
      question: 'Hvilket teaterstykke skrev Lorca om den tyranniske Bernarda Alba?',
      options: ['La casa de Bernarda Alba', 'Bodas de sangre', 'Yerma', 'Don Juan'],
      explanation: 'La casa de Bernarda Alba (1936) handler om den tyranniske Bernarda som sperrer inne sine fem døtre.',
    },
    {
      question: 'Hva symboliserer fargen grønn i \'Romance sonámbulo\'?',
      options: ['Lengsel og død', 'Glede', 'Rikdom', 'Vennskap'],
      explanation: 'I \'Romance sonámbulo\' er det grønne et flertydig symbol forbundet med lengsel og død.',
    },
    {
      question: 'Når levde García Lorca?',
      options: ['1898–1936', '1547–1616', '1927–1990', '1947–2016'],
      explanation: 'Lorca levde 1898–1936 og ble drept tidlig under den spanske borgerkrigen.',
    },
  ],

  'spansk-3-4-3': [
    {
      question: 'Hva kjennetegner magisk realisme (el realismo mágico)?',
      options: ['Overnaturlige hendelser fremstilles som helt normale', 'Ren fantasy uten virkelighet', 'Bare historiske fakta', 'Kun science fiction'],
      explanation: 'I magisk realisme presenteres overnaturlige elementer som helt normale deler av hverdagsvirkeligheten.',
    },
    {
      question: 'Hvem skrev \'Cien años de soledad\'?',
      options: ['Gabriel García Márquez', 'Isabel Allende', 'Miguel de Cervantes', 'Mario Vargas Llosa'],
      explanation: '\'Cien años de soledad\' (1967) ble skrevet av Gabriel García Márquez, magisk realismes mest kjente verk.',
    },
    {
      question: 'Hvem skrev \'La casa de los espíritus\'?',
      options: ['Isabel Allende', 'Gabriel García Márquez', 'Federico García Lorca', 'Pablo Neruda'],
      explanation: 'Isabel Allendes debutroman \'La casa de los espíritus\' (1982) følger tre generasjoner kvinner i Chile.',
    },
    {
      question: 'Hvilken figur i \'La casa de los espíritus\' har overnaturlige evner?',
      options: ['Clara del Valle', 'Don Quijote', 'Bernarda Alba', 'Aureliano Buendía'],
      explanation: 'Clara del Valle har telepatiske og telekinetiske evner som fremstilles som naturlige.',
    },
    {
      question: 'Hvilket land kommer magisk realisme primært fra?',
      options: ['Latin-Amerika', 'Spania', 'USA', 'Frankrike'],
      explanation: 'Magisk realisme oppstod i Latin-Amerika som uttrykk for en virkelighet der myter og hverdag blandes.',
    },
  ],

  'spansk-3-4-4': [
    {
      question: 'Hva betyr \'la intertextualidad\'?',
      options: ['Intertekstualitet (referanser til andre tekster)', 'Oversettelse', 'Rim', 'Ordforråd'],
      explanation: 'Intertekstualitet er når en tekst refererer til, siterer eller er i dialog med andre tekster.',
    },
    {
      question: 'Hva er det første du formulerer i et litterært essay?',
      options: ['En tesis (påstand)', 'Konklusjonen', 'En liste med ord', 'Et sammendrag av handlingen'],
      explanation: 'I introduksjonen presenterer du tekst, forfatter og kontekst, og formulerer en tesis (påstand).',
    },
    {
      question: 'Hva betyr \'el narrador\' i litterær analyse?',
      options: ['Fortellerstemmen', 'Hovedpersonen', 'Forfatteren', 'Leseren'],
      explanation: '\'El narrador\' er fortellerstemmen i en tekst, som kan være ulik forfatteren.',
    },
    {
      question: 'Hvilken del av essayet inneholder argumenter med tekstbelegg?',
      options: ['Desarrollo (hoveddel)', 'Introducción', 'Título', 'Bibliografía'],
      explanation: 'Desarrollo (hoveddelen) inneholder argumentene støttet av tekstbelegg.',
    },
    {
      question: 'Hva er \'la metaficción\'?',
      options: ['Metafiksjon – når teksten henviser til seg selv som fiksjon', 'Et rim', 'En oversettelse', 'En tidsform'],
      explanation: 'Metafiksjon er når en tekst gjør oppmerksom på at den er en fiksjon, som i Don Quijote.',
    },
  ],

  'spansk-3-5-1': [
    {
      question: 'Hvilken spansk regissør er kjent for surrealistisk film?',
      options: ['Luis Buñuel', 'Pedro Almodóvar', 'Alejandro Amenábar', 'Carlos Saura'],
      explanation: 'Luis Buñuel er kjent for surrealistisk film, blant annet \'Un perro andaluz\' (1929) laget med Dalí.',
    },
    {
      question: 'Hvem laget Buñuel \'Un perro andaluz\' sammen med?',
      options: ['Salvador Dalí', 'Pablo Picasso', 'Federico García Lorca', 'Pedro Almodóvar'],
      explanation: '\'Un perro andaluz\' (1929) ble laget av Buñuel sammen med kunstneren Salvador Dalí.',
    },
    {
      question: 'Hvem er Spanias mest internasjonalt kjente samtidsregissør?',
      options: ['Pedro Almodóvar', 'Luis Buñuel', 'Miguel de Cervantes', 'Antonio Banderas'],
      explanation: 'Pedro Almodóvar (f. 1949) er Spanias mest internasjonalt kjente filmskaper.',
    },
    {
      question: 'Hvilken kulturbevegelse er Almodóvar forbundet med?',
      options: ['La Movida Madrileña', 'La Reconquista', 'El Boom', 'La Transición økonomisk'],
      explanation: 'Almodóvar er forbundet med La Movida Madrileña, den kulturelle frihetsbølgen på 1980-tallet.',
    },
    {
      question: 'Hva kjennetegner Almodóvars filmer?',
      options: ['Fargerikt univers og sterke kvinneskikkelser', 'Svart-hvitt dokumentar', 'Stumfilm', 'Naturdokumentar'],
      explanation: 'Almodóvars filmer kjennetegnes av et fargerikt univers, melodrama og sterke kvinneskikkelser.',
    },
  ],

  'spansk-3-5-2': [
    {
      question: 'Hvilken bevegelse preget latinamerikansk film på 1960-70-tallet?',
      options: ['Nuevo Cine Latinoamericano (politisk engasjert film)', 'La Movida', 'Surrealismen', 'Film noir'],
      explanation: 'Nuevo Cine Latinoamericano var en bevegelse for politisk og sosialt engasjert film på 1960-70-tallet.',
    },
    {
      question: 'Etter hvilken hendelse ble film et politisk verktøy på Cuba?',
      options: ['Revolusjonen i 1959', 'Borgerkrigen i Spania', 'Andre verdenskrig', 'Oppdagelsen av Amerika'],
      explanation: 'Etter den cubanske revolusjonen (1959) ble film brukt som et politisk verktøy.',
    },
    {
      question: 'Hvilket land kommer \'de tre amigoene\' (Cuarón, del Toro, Iñárritu) fra?',
      options: ['Mexico', 'Argentina', 'Chile', 'Spania'],
      explanation: 'Alfonso Cuarón, Guillermo del Toro og Alejandro González Iñárritu er meksikanske regissører.',
    },
    {
      question: 'Hva har den moderne latinamerikanske filmbølgen oppnådd?',
      options: ['Suksess på internasjonale filmfestivaler', 'Forsvunnet helt', 'Bare lokal interesse', 'Blitt forbudt'],
      explanation: 'Den moderne bølgen, særlig fra Mexico, har erobret internasjonale filmfestivaler og prisutdelinger.',
    },
    {
      question: 'Hvem av disse er en meksikansk regissør?',
      options: ['Guillermo del Toro', 'Pedro Almodóvar', 'Luis Buñuel', 'Carlos Saura'],
      explanation: 'Guillermo del Toro er en av de tre meksikanske \'amigoene\'. De tre andre er spanske.',
    },
  ],

  'spansk-3-5-3': [
    {
      question: 'Hvilken spansk kunstner malte \'Guernica\'?',
      options: ['Pablo Picasso', 'Salvador Dalí', 'Frida Kahlo', 'Diego Rivera'],
      explanation: '\'Guernica\' (1937) ble malt av Pablo Picasso som svar på bombingen av byen Guernica.',
    },
    {
      question: 'Hva er \'Guernica\' et bilde på?',
      options: ['Krigens grusomhet', 'En fest', 'Et landskap', 'Et portrett'],
      explanation: '\'Guernica\' skildrer krigens grusomhet, malt etter bombingen under den spanske borgerkrigen.',
    },
    {
      question: 'Hvilken meksikansk kunstner er kjent for intense selvportretter?',
      options: ['Frida Kahlo', 'Pablo Picasso', 'Antoni Gaudí', 'Salvador Dalí'],
      explanation: 'Frida Kahlo (1907-1954) er kjent for sine intense, ærlige selvportretter.',
    },
    {
      question: 'Hvilken arkitekt designet Sagrada Família i Barcelona?',
      options: ['Antoni Gaudí', 'Pablo Picasso', 'Diego Rivera', 'Salvador Dalí'],
      explanation: 'Antoni Gaudí er den katalanske arkitekten bak Sagrada Família og andre modernistiske byggverk.',
    },
    {
      question: 'Hvilken kunststil er Picasso medgrunnlegger av?',
      options: ['Kubismen', 'Impresjonismen', 'Surrealismen alene', 'Romantikken'],
      explanation: 'Picasso var medgrunnlegger av kubismen, en stil som bryter motiver opp i geometriske former.',
    },
  ],

  'spansk-3-5-4': [
    {
      question: 'Hva er \'la ficha técnica\' i en anmeldelse?',
      options: ['Tittel, regissør/kunstner, år og sjanger', 'Konklusjonen', 'Et sammendrag av hele handlingen', 'Anmelderens navn'],
      explanation: '\'La ficha técnica\' er de tekniske opplysningene: tittel, regissør/kunstner, år og sjanger.',
    },
    {
      question: 'Hva betyr \'la sinopsis\' i en anmeldelse?',
      options: ['En kort beskrivelse av handlingen', 'Den endelige vurderingen', 'Listen over skuespillere', 'Tittelen'],
      explanation: '\'La sinopsis\' er en kort beskrivelse av handlingen, uten å avsløre for mye.',
    },
    {
      question: 'Hva betyr adjektivet \'impresionante\' i en anmeldelse?',
      options: ['Imponerende', 'Kjedelig', 'Kort', 'Billig'],
      explanation: '\'Impresionante\' betyr imponerende og er et positivt vurderingsord.',
    },
    {
      question: 'Hva er hovedformålet med en \'reseña\'?',
      options: ['Å observere, analysere og vurdere et verk', 'Å oversette verket', 'Å selge billetter', 'Å liste opp ord'],
      explanation: 'En reseña (anmeldelse) skal observere, analysere, vurdere og formidle et verk.',
    },
    {
      question: 'Hvilket element bør komme tidlig i en filmanmeldelse?',
      options: ['Ficha técnica (tittel, regissør, år)', 'Konklusjonen', 'Anmelderens biografi', 'Bibliografien'],
      explanation: 'Ficha técnica med tittel, regissør og år presenteres tidlig i anmeldelsen.',
    },
  ],

  'spansk-3-6-1': [
    {
      question: 'Hva betyr \'la monarquía constitucional\'?',
      options: ['Konstitusjonelt monarki', 'Republikk', 'Diktatur', 'Demokrati uten konge'],
      explanation: '\'La monarquía constitucional\' betyr konstitusjonelt monarki, som i dagens Spania.',
    },
    {
      question: 'Hvem styrte Spania som diktator 1939-1975?',
      options: ['Francisco Franco', 'Simón Bolívar', 'Juan Carlos I', 'Augusto Pinochet'],
      explanation: 'General Francisco Franco styrte Spania som diktator fra 1939 til sin død i 1975.',
    },
    {
      question: 'Hva kjennetegnet Franco-diktaturet?',
      options: ['Ingen politisk frihet og sensur', 'Frie valg', 'Pressefrihet', 'Demokratisk styre'],
      explanation: 'Franco-diktaturet hadde ingen politisk frihet, sensur og undertrykkelse av opposisjon.',
    },
    {
      question: 'Hvilken styreform har de fleste latinamerikanske land?',
      options: ['Presidentrepublikk', 'Konstitusjonelt monarki', 'Absolutt monarki', 'Teokrati'],
      explanation: 'De fleste latinamerikanske land er presidentrepublikker.',
    },
    {
      question: 'Hva betyr \'la democracia\'?',
      options: ['Demokrati', 'Diktatur', 'Monarki', 'Republikk uten valg'],
      explanation: '\'La democracia\' betyr demokrati, et styresett med frie valg og folkestyre.',
    },
  ],

  'spansk-3-6-2': [
    {
      question: 'Hva betyr \'la desigualdad\'?',
      options: ['Ulikhet', 'Likestilling', 'Frihet', 'Rettferdighet'],
      explanation: '\'La desigualdad\' betyr ulikhet, et sentralt samfunnstema, særlig i Latin-Amerika.',
    },
    {
      question: 'Hva betyr \'la inmigración\'?',
      options: ['Innvandring', 'Utvandring', 'Reise', 'Turisme'],
      explanation: '\'La inmigración\' betyr innvandring – når mennesker flytter inn til et land.',
    },
    {
      question: 'Hva betyr \'el cambio climático\'?',
      options: ['Klimaendring', 'Værmelding', 'Årstidene', 'Klimaanlegg'],
      explanation: '\'El cambio climático\' betyr klimaendring, et viktig aktuelt samfunnstema.',
    },
    {
      question: 'Hvilken region beskrives som verdens mest ulike?',
      options: ['Latin-Amerika', 'Skandinavia', 'Vest-Europa', 'Øst-Asia'],
      explanation: 'Latin-Amerika er verdens mest ulike region, med stor avstand mellom rik og fattig.',
    },
    {
      question: 'Hva betyr \'la pobreza\'?',
      options: ['Fattigdom', 'Rikdom', 'Befolkning', 'Politikk'],
      explanation: '\'La pobreza\' betyr fattigdom.',
    },
  ],

  'spansk-3-6-3': [
    {
      question: 'Hva betyr \'los derechos humanos\'?',
      options: ['Menneskerettigheter', 'Menneskelige feil', 'Folkeavstemninger', 'Rettssaker'],
      explanation: '\'Los derechos humanos\' betyr menneskerettigheter.',
    },
    {
      question: 'Hvem var \'los desaparecidos\'?',
      options: ['Mennesker bortført og drept av militærdiktaturer', 'Innvandrere', 'Turister', 'Soldater i krig'],
      explanation: '\'Los desaparecidos\' (de forsvunne) var mennesker bortført, torturert og drept av militærdiktaturene.',
    },
    {
      question: 'Hva heter FNs verdenserklæring om menneskerettigheter på spansk?',
      options: ['La Declaración Universal', 'La Constitución', 'El Tratado', 'La Ley'],
      explanation: 'FNs verdenserklæring heter \'la Declaración Universal de los Derechos Humanos\'.',
    },
    {
      question: 'I hvilken periode skjedde militærdiktaturenes \'forsvinninger\' i Latin-Amerika?',
      options: ['1960-80-tallet', '1990-tallet', '2010-tallet', '1700-tallet'],
      explanation: 'Militærdiktaturenes systematiske \'forsvinninger\' skjedde i hovedsak på 1960-80-tallet.',
    },
    {
      question: 'Hva betyr \'la libertad de expresión\'?',
      options: ['Ytringsfrihet', 'Bevegelsesfrihet', 'Religionsfrihet', 'Pressestøtte'],
      explanation: '\'La libertad de expresión\' betyr ytringsfrihet.',
    },
  ],

  'spansk-3-6-4': [
    {
      question: 'Hva er det første steget i en debattstruktur?',
      options: ['Presentación de la tesis (presentere påstanden)', 'Konklusjonen', 'Motargumentene', 'Avslutningshilsenen'],
      explanation: 'Først presenterer man tesen (sin påstand), så argumenter for, motargumenter og konklusjon.',
    },
    {
      question: 'Hva betyr \'los contraargumentos\'?',
      options: ['Motargumenter', 'Hovedargumenter', 'Eksempler', 'Konklusjoner'],
      explanation: '\'Los contraargumentos\' er motargumenter man forutser og imøtegår.',
    },
    {
      question: 'Hva er et retorisk spørsmål et eksempel på?',
      options: ['Et overbevisende språklig virkemiddel', 'En faktaopplysning', 'En kildehenvisning', 'En tidsform'],
      explanation: 'Retoriske spørsmål er et retorisk virkemiddel for å overbevise: \'¿Acaso no merecemos los mismos derechos?\'',
    },
    {
      question: 'Hva består et godt argument av?',
      options: ['Påstand, begrunnelse og bevis/eksempel', 'Bare en påstand', 'Bare et eksempel', 'Bare en konklusjon'],
      explanation: 'Et godt argument har påstand (tesis), begrunnelse (justificación) og bevis/eksempel.',
    },
    {
      question: 'Hva betyr \'la opinión\'?',
      options: ['Meningen', 'Faktaet', 'Beviset', 'Kilden'],
      explanation: '\'La opinión\' betyr meningen eller standpunktet man uttrykker i en debatt.',
    },
  ],

  'spansk-3-7-1': [
    {
      question: 'Hva betyr forkortelsen \'el PIB\'?',
      options: ['BNP (bruttonasjonalprodukt)', 'Inflasjonen', 'Renten', 'Statsbudsjettet'],
      explanation: '\'El PIB\' (Producto Interior Bruto) betyr BNP, bruttonasjonalproduktet.',
    },
    {
      question: 'Hva betyr \'la inflación\'?',
      options: ['Inflasjon', 'Eksport', 'Arbeidsledighet', 'Handel'],
      explanation: '\'La inflación\' betyr inflasjon, den generelle prisstigningen.',
    },
    {
      question: 'Hvilket land er den nest største økonomien i Latin-Amerika?',
      options: ['México', 'España', 'Argentina', 'Chile'],
      explanation: 'México er nest største økonomi i Latin-Amerika (etter Brasil, som ikke er spansktalende).',
    },
    {
      question: 'Hva betyr \'la economía informal\'?',
      options: ['Uformell økonomi (svart arbeid)', 'Statsøkonomi', 'Eksportøkonomi', 'Planøkonomi'],
      explanation: '\'La economía informal\' er den uformelle økonomien, jobber uten kontrakt eller skatt.',
    },
    {
      question: 'Hva er en felles økonomisk utfordring i spansktalende land?',
      options: ['Desigualdad (ulikhet)', 'Overflod for alle', 'Mangel på arbeidskraft', 'Ingen handel'],
      explanation: 'Ulikhet (desigualdad) er en gjennomgående økonomisk utfordring i spansktalende land.',
    },
  ],

  'spansk-3-7-2': [
    {
      question: 'Hva betyr \'exportar\'?',
      options: ['Å eksportere', 'Å importere', 'Å produsere', 'Å selge lokalt'],
      explanation: '\'Exportar\' betyr å eksportere – selge varer til andre land.',
    },
    {
      question: 'Hva er \'Mercosur\'?',
      options: ['En handelsavtale i Sør-Amerika', 'Et fotballforbund', 'En valuta', 'Et flyselskap'],
      explanation: 'Mercosur (Mercado Común del Sur) er en handelsblokk med Argentina, Brasil, Paraguay og Uruguay.',
    },
    {
      question: 'Hva er Chiles viktigste eksportvare?',
      options: ['Kobber', 'Biler', 'Olje', 'Klær'],
      explanation: 'Chile er en av verdens største eksportører av kobber (cobre).',
    },
    {
      question: 'Hva betyr \'los aranceles\'?',
      options: ['Tollavgifter', 'Subsidier', 'Lønninger', 'Renter'],
      explanation: '\'Los aranceles\' er tollavgifter på importerte varer.',
    },
    {
      question: 'Hva betyr \'el tratado comercial\'?',
      options: ['Handelsavtale', 'Krigserklæring', 'Grunnlov', 'Lønnsavtale'],
      explanation: '\'El tratado comercial\' betyr handelsavtale mellom land.',
    },
  ],

  'spansk-3-7-3': [
    {
      question: 'Hvordan begynner man et formelt forretningsbrev på spansk?',
      options: ['Estimado/a señor/a', 'Hola', '¿Qué tal?', 'Hasta luego'],
      explanation: 'Formelle brev begynner med \'Estimado/a señor/a\' + etternavn.',
    },
    {
      question: 'Hva betyr \'convocar una reunión\'?',
      options: ['Å innkalle til møte', 'Å avlyse et møte', 'Å forlate et møte', 'Å filme et møte'],
      explanation: '\'Convocar una reunión\' betyr å innkalle til møte.',
    },
    {
      question: 'Hva betyr \'el orden del día\'?',
      options: ['Dagsorden', 'Tidsskjema for dagen', 'Dagens rett', 'Morgenavisen'],
      explanation: '\'El orden del día\' betyr dagsorden – listen over saker som skal behandles i et møte.',
    },
    {
      question: 'Hvilken frase passer i en formell e-post?',
      options: ['Me dirijo a usted para...', '¡Hola, qué tal!', 'Un abrazo', 'Nos vemos'],
      explanation: '\'Me dirijo a usted para...\' (Jeg henvender meg til Dem for å...) er formell e-poststil.',
    },
    {
      question: 'Hva betyr \'tomar la palabra\' i et møte?',
      options: ['Å ta ordet', 'Å avslutte møtet', 'Å skrive referat', 'Å gå ut'],
      explanation: '\'Tomar la palabra\' betyr å ta ordet i et møte.',
    },
  ],

  'spansk-3-7-4': [
    {
      question: 'Hva betyr \'aumentar\' i økonomiske tekster?',
      options: ['Å øke', 'Å minke', 'Å stå stille', 'Å forsvinne'],
      explanation: '\'Aumentar\' (eller \'crecer\') betyr å øke/vokse.',
    },
    {
      question: 'Hva betyr \'disminuir\'?',
      options: ['Å minke/redusere', 'Å øke', 'Å doble', 'Å beholde'],
      explanation: '\'Disminuir\' (eller \'reducir\') betyr å minke eller redusere.',
    },
    {
      question: 'Hva betyr \'el informe\' som teksttype?',
      options: ['En rapport med detaljert analyse', 'En kort melding', 'En reklame', 'Et dikt'],
      explanation: '\'El informe\' er en rapport med detaljert analyse av økonomiske data.',
    },
    {
      question: 'Hva betyr \'la tasa de\'?',
      options: ['Prosentsatsen/raten av', 'Skatten på', 'Tabellen over', 'Verdien av'],
      explanation: '\'La tasa de\' betyr satsen/raten, f.eks. \'la tasa de desempleo\' (arbeidsledighetsraten).',
    },
    {
      question: 'Hva er første steg når du skriver et økonomisk sammendrag?',
      options: ['Identifisere hva teksten handler om (el tema)', 'Skrive konklusjonen', 'Liste opp tall tilfeldig', 'Oversette ord for ord'],
      explanation: 'Først identifiserer du temaet: ¿De qué trata el texto? (Hva handler teksten om?).',
    },
  ],

  'spansk-3-8-1': [
    {
      question: 'Hva betyr \'reservar\'?',
      options: ['Å bestille/reservere', 'Å avbestille', 'Å reise', 'Å betale'],
      explanation: '\'Reservar\' betyr å bestille eller reservere, f.eks. et hotellrom.',
    },
    {
      question: 'Hva betyr \'el itinerario\'?',
      options: ['Reiseruten', 'Bagasjen', 'Billetten', 'Passet'],
      explanation: '\'El itinerario\' er reiseruten – planen for reisen.',
    },
    {
      question: 'Hva betyr \'el alojamiento\'?',
      options: ['Overnatting', 'Maten', 'Transporten', 'Severdigheten'],
      explanation: '\'El alojamiento\' betyr overnatting, som hotell eller vandrerhjem.',
    },
    {
      question: 'Hvilket uttrykk brukes for å sammenligne pris?',
      options: ['Es más barato que...', 'Voy a comer', 'Me llamo...', 'Hace sol'],
      explanation: '\'Es más barato/caro que...\' (Det er billigere/dyrere enn...) brukes for å sammenligne reisealternativer.',
    },
    {
      question: 'Hva er et \'albergue\'?',
      options: ['Et vandrerhjem (rimelig overnatting)', 'Et luksushotell', 'En restaurant', 'En flyplass'],
      explanation: 'Et \'hostal/albergue\' er et vandrerhjem, et rimelig overnattingsalternativ.',
    },
  ],

  'spansk-3-8-2': [
    {
      question: 'Hva betyr \'el turismo sostenible\'?',
      options: ['Bærekraftig turisme', 'Masseturisme', 'Luksusturisme', 'Forretningsreise'],
      explanation: '\'El turismo sostenible\' betyr bærekraftig turisme som tar vare på miljø og lokalsamfunn.',
    },
    {
      question: 'Hva er \'el ecoturismo\'?',
      options: ['Naturbasert turisme med fokus på bevaring', 'Bilbasert turisme', 'Shoppingturisme', 'Cruiseturisme'],
      explanation: '\'El ecoturismo\' (økoturisme) er naturbasert turisme med fokus på bevaring av naturen.',
    },
    {
      question: 'Hva er et problem med \'la masificación turística\'?',
      options: ['Overturisme presser priser og lokalsamfunn', 'For få turister', 'For lav inntekt', 'Mangel på hoteller'],
      explanation: 'Overturisme (masificación turística) i steder som Barcelona og Mallorca presser boligpriser og lokalsamfunn.',
    },
    {
      question: 'Hva er et eksempel på et økoturismemål?',
      options: ['Galápagos-øyene (Ecuador)', 'Madrids storsentre', 'Cancúns store hoteller', 'Barcelonas strender'],
      explanation: 'Galápagos-øyene og Costa Rica er kjente økoturismemål med fokus på naturbevaring.',
    },
    {
      question: 'Hva er målet med ansvarlig turisme?',
      options: ['Minimere skadene og maksimere fordelene for lokalsamfunn', 'Maksimere antall turister', 'Bygge flest mulig hoteller', 'Senke prisene uansett'],
      explanation: 'Ansvarlig turisme søker å minimere de negative konsekvensene og gi fordeler til lokalsamfunnet.',
    },
  ],

  'spansk-3-8-3': [
    {
      question: 'Hvilken fortidsform brukes for spesifikke hendelser på en reise?',
      options: ['Pretérito indefinido', 'Presente', 'Futuro', 'Condicional'],
      explanation: 'Pretérito indefinido brukes for spesifikke, avsluttede hendelser: \'Viajé a Perú el año pasado\'.',
    },
    {
      question: 'Hva betyr \'fue una experiencia increíble\'?',
      options: ['Det var en utrolig opplevelse', 'Det blir en fin reise', 'Jeg reiser snart', 'Jeg liker å reise'],
      explanation: '\'Fue una experiencia increíble\' betyr \'det var en utrolig opplevelse\'.',
    },
    {
      question: 'Hva betyr \'lo que más me impresionó\'?',
      options: ['Det som imponerte meg mest', 'Det jeg ikke likte', 'Det jeg glemte', 'Det jeg kjøpte'],
      explanation: '\'Lo que más me impresionó\' betyr \'det som imponerte meg mest\'.',
    },
    {
      question: 'Hva er riktig: \'El verano pasado ___ a Machu Picchu\'?',
      options: ['visité', 'visito', 'visitaré', 'visitar'],
      explanation: 'Med \'el verano pasado\' (i fjor sommer) brukes preteritum: \'visité\' (jeg besøkte).',
    },
    {
      question: 'Hvilken struktur passer for en reiseblogg?',
      options: ['Introduksjon, beskrivelse, inntrykk', 'Bare en liste med datoer', 'Bare priser', 'Bare en konklusjon'],
      explanation: 'En reiseblogg har en introduksjon (hvor/når/med hvem), beskrivelse og personlige inntrykk.',
    },
  ],

  'spansk-3-8-4': [
    {
      question: 'Omtrent hvor mange har spansk som morsmål?',
      options: ['Ca. 490 millioner', 'Ca. 50 millioner', 'Ca. 1,5 milliarder', 'Ca. 100 millioner'],
      explanation: 'Spansk har rundt 490 millioner morsmålstalere, og enda flere totaltalere.',
    },
    {
      question: 'Hva er \'seseo\'?',
      options: ['Når c/z uttales som /s/', 'Når s blir stum', 'En dialekt i Spania alene', 'En grammatikkregel'],
      explanation: 'Seseo er fenomenet der c og z uttales som /s/, vanlig i Latin-Amerika og Sør-Spania.',
    },
    {
      question: 'Hvor mange snakker spansk som morsmål i USA?',
      options: ['Over 41 millioner', 'Under 1 million', 'Ca. 200 millioner', 'Ingen'],
      explanation: 'I USA snakker over 41 millioner spansk som morsmål, og tallet vokser.',
    },
    {
      question: 'Hva er \'castellano\'?',
      options: ['Standard spansk', 'En karibisk dialekt', 'Et eget språk uten forbindelse til spansk', 'Et urfolksspråk'],
      explanation: '\'Castellano\' er en betegnelse på standard spansk, opprinnelig fra Castilla.',
    },
    {
      question: 'Hvilken status har spansk globalt?',
      options: ['Et av verdens viktigste språk i vekst', 'Et språk i tilbakegang', 'Bare brukt i Spania', 'Et dødt språk'],
      explanation: 'Spansk er et av verdens viktigste språk, og betydningen vokser stadig.',
    },
  ],

  'spansk-3-9-1': [
    {
      question: 'Hva betyr \'el mestizaje\'?',
      options: ['Kulturell og etnisk blanding', 'Ren kulturell ensartethet', 'En politisk bevegelse', 'En matrett'],
      explanation: '\'El mestizaje\' beskriver den kulturelle og etniske blandingen mellom urfolk, europeere og afrikanere.',
    },
    {
      question: 'Hva refererer \'la hispanidad\' til?',
      options: ['Fellesskapet mellom spansktalende land', 'Bare Spania', 'Et politisk parti', 'En religion'],
      explanation: '\'La hispanidad\' refererer til fellesskapet mellom spansktalende land, men er et omstridt begrep.',
    },
    {
      question: 'Hvorfor er \'hispanidad\' et omstridt begrep?',
      options: ['Det kan tilsløre koloniseringens vold', 'Det er for nytt', 'Det handler bare om mat', 'Det gjelder bare Europa'],
      explanation: 'Begrepet er omstridt fordi det kan tilsløre koloniseringens vold og urfolkenes lidelser.',
    },
    {
      question: 'Hvilke grupper blandet seg i mestizaje?',
      options: ['Urfolk, europeere og afrikanere', 'Bare europeere', 'Bare asiater', 'Bare nordmenn'],
      explanation: 'Mestizaje beskriver blandingen av urfolkskulturer, europeere og afrikanere etter koloniseringen.',
    },
    {
      question: 'Omtrent hvor mange mennesker omfatter den spansktalende verden?',
      options: ['Over 500 millioner', 'Under 50 millioner', 'Ca. 2 milliarder', 'Ca. 10 millioner'],
      explanation: 'Den spansktalende verden omfatter over 500 millioner mennesker med svært ulik bakgrunn.',
    },
  ],

  'spansk-3-9-2': [
    {
      question: 'Hva betyr \'emigrar\'?',
      options: ['Å utvandre (forlate sitt land)', 'Å innvandre', 'Å reise på ferie', 'Å flytte internt'],
      explanation: '\'Emigrar\' betyr å utvandre – å forlate sitt eget land for å bo i et annet.',
    },
    {
      question: 'Hva betyr \'inmigrar\'?',
      options: ['Å innvandre (komme til et nytt land)', 'Å utvandre', 'Å reise hjem', 'Å studere'],
      explanation: '\'Inmigrar\' betyr å innvandre – å komme til et nytt land for å bo der.',
    },
    {
      question: 'Hvor mange hispanics bor det omtrent i USA?',
      options: ['Over 60 millioner', 'Under 1 million', 'Ca. 500 millioner', 'Ingen'],
      explanation: 'Det bor over 60 millioner hispanics i USA, mange fra Mexico og Mellom-Amerika.',
    },
    {
      question: 'Hva betyr \'el/la inmigrante\'?',
      options: ['Innvandreren', 'Utvandreren', 'Turisten', 'Borgeren'],
      explanation: '\'El/la inmigrante\' betyr innvandreren, mens \'el/la emigrante\' er utvandreren.',
    },
    {
      question: 'Hvilken frase brukes for å fortelle en migrasjonshistorie?',
      options: ['Salí de mi país porque...', 'Voy de vacaciones', 'Me gusta el café', 'Hace buen tiempo'],
      explanation: '\'Salí de mi país porque...\' (Jeg dro fra landet mitt fordi...) innleder en migrasjonshistorie.',
    },
  ],

  'spansk-3-9-3': [
    {
      question: 'Hva er \'Spanglish\'?',
      options: ['Blanding av spansk og engelsk', 'En spansk dialekt i Spania', 'Et urfolksspråk', 'Et formelt register'],
      explanation: 'Spanglish er blandingen av spansk og engelsk som mange hispanics i USA snakker.',
    },
    {
      question: 'Hva betyr \'el bilingüismo\'?',
      options: ['Tospråklighet', 'Enspråklighet', 'Dialekt', 'Aksent'],
      explanation: '\'El bilingüismo\' betyr tospråklighet – å beherske to språk.',
    },
    {
      question: 'Hva er et eksempel på Spanglish?',
      options: ['parkear el carro', 'aparcar el coche', 'estacionar el vehículo', 'conducir'],
      explanation: '\'Parkear\' (av engelsk \'park\') er et typisk Spanglish-ord; standardspansk er \'aparcar/estacionar\'.',
    },
    {
      question: 'Hva er \'distinción\' i spansk uttale?',
      options: ['Når c/z uttales annerledes enn s (Nord-Spania)', 'Når alt uttales likt', 'En grammatikkregel', 'Et ordforråd'],
      explanation: '\'Distinción\' (Nord-Spania) skiller uttalen av c/z fra s, i motsetning til \'seseo\'.',
    },
    {
      question: 'Hvorfor er språk knyttet til identitet?',
      options: ['Det er en grunnleggende del av hvem vi er', 'Det er bare et verktøy uten betydning', 'Det gjelder bare grammatikk', 'Det er irrelevant for kultur'],
      explanation: 'Språk er mye mer enn et verktøy – det er en grunnleggende del av vår identitet og kultur.',
    },
  ],

  'spansk-3-9-4': [
    {
      question: 'Hvilken frase brukes for å uttrykke identitet?',
      options: ['Me identifico como...', 'Hace frío hoy', 'Voy a comprar pan', '¿Qué hora es?'],
      explanation: '\'Me identifico como...\' (Jeg identifiserer meg som...) brukes for å skrive om identitet.',
    },
    {
      question: 'Hvordan begynner man et personlig essay?',
      options: ['En este ensayo voy a reflexionar sobre...', 'Hasta luego', 'Estimado señor', 'Érase una vez'],
      explanation: '\'En este ensayo voy a reflexionar sobre...\' presenterer temaet i et personlig essay.',
    },
    {
      question: 'Hva betyr \'reflexionar\'?',
      options: ['Å reflektere/tenke over', 'Å glemme', 'Å reise', 'Å oversette'],
      explanation: '\'Reflexionar\' betyr å reflektere eller tenke grundig over noe.',
    },
    {
      question: 'Hvilket uttrykk utdyper en tanke?',
      options: ['Esto me lleva a pensar que...', 'Hola, ¿qué tal?', 'Buenos días', 'Adiós'],
      explanation: '\'Esto me lleva a pensar que...\' (Dette får meg til å tenke at...) utdyper en refleksjon.',
    },
    {
      question: 'Hva inneholder introduksjonen i et personlig essay?',
      options: ['Temaet og din tilnærming', 'Bare konklusjonen', 'En liste med tall', 'Andres meninger uten egen'],
      explanation: 'Introduksjonen presenterer temaet og din egen tilnærming til det.',
    },
  ],

  'spansk-3-10-1': [
    {
      question: 'Hva er \'skimming\' (la lectura rápida)?',
      options: ['Rask lesing for å få overblikk', 'Å lese hvert ord nøye', 'Å oversette alt', 'Å lese baklengs'],
      explanation: 'Skimming er rask lesing for å få et helhetsinntrykk av teksten.',
    },
    {
      question: 'Hva er \'scanning\' (la búsqueda de información)?',
      options: ['Å lete etter spesifikk informasjon', 'Å lese for helhetsinntrykk', 'Å lese høyt', 'Å skrive sammendrag'],
      explanation: 'Scanning er å lete raskt gjennom teksten etter spesifikk informasjon.',
    },
    {
      question: 'Hva er \'inferens\' i leseforståelse?',
      options: ['Å utlede betydning som ikke er eksplisitt uttrykt', 'Å oversette ordrett', 'Å hoppe over teksten', 'Å lese tittelen'],
      explanation: 'Inferens betyr å utlede betydning fra konteksten selv om den ikke er uttrykt direkte.',
    },
    {
      question: 'Hvor bør du fokusere når du skummer en tekst?',
      options: ['Tittel og første/siste setning i avsnitt', 'Bare midten', 'Bare bildene', 'Bare ukjente ord'],
      explanation: 'Ved skimming fokuserer du på tittel og første/siste setning i hvert avsnitt.',
    },
    {
      question: 'Hva gjør du ved inferens av et ukjent ord?',
      options: ['Bruker konteksten og ordets form', 'Hopper over hele teksten', 'Gir opp', 'Oversetter bokstav for bokstav'],
      explanation: 'Ved inferens ser du på ordets form og bruker konteksten for å gjette betydningen.',
    },
  ],

  'spansk-3-10-2': [
    {
      question: 'Hva kjennetegner \'el ensayo\'?',
      options: ['Argumenterende og reflekterende, formelt', 'Kort beskjed', 'En liste', 'Et dikt'],
      explanation: 'Essayet (el ensayo) er en argumenterende, reflekterende tekst i formelt register.',
    },
    {
      question: 'Hva er strukturen i et essay?',
      options: ['Introducción, Desarrollo, Conclusión', 'Bare konklusjon', 'Bare en liste', 'Tittel og slutt'],
      explanation: 'Et essay har innledning (tese), hoveddel (argumenter) og konklusjon.',
    },
    {
      question: 'Hvilken hilsen brukes i et formelt brev (carta formal)?',
      options: ['Estimado/a Sr./Sra.', '¡Hola!', 'Querido amigo', '¿Qué tal?'],
      explanation: 'Et formelt brev begynner med \'Estimado/a Sr./Sra.\' + etternavn.',
    },
    {
      question: 'Hva inneholder \'el encabezamiento\' i et formelt brev?',
      options: ['Sted og dato', 'Konklusjonen', 'Underskriften alene', 'Et dikt'],
      explanation: '\'El encabezamiento\' inneholder sted og dato, f.eks. \'Madrid, 15 de enero de 2026\'.',
    },
    {
      question: 'Hva presenterer du i innledningen til et essay?',
      options: ['Temaet og tesen din', 'Bare et eksempel', 'Konklusjonen', 'En liste med kilder'],
      explanation: 'I innledningen presenterer du temaet og tesen (påstanden) din.',
    },
  ],

  'spansk-3-10-3': [
    {
      question: 'Hvilken frase passer for å starte en muntlig presentasjon?',
      options: ['Hoy voy a hablar sobre...', 'Atentamente', 'Estimado señor', 'Hasta pronto'],
      explanation: '\'Hoy voy a hablar sobre...\' (I dag skal jeg snakke om...) starter en presentasjon.',
    },
    {
      question: 'Hva er en god forberedelsesstrategi før muntlig eksamen?',
      options: ['Øve på å snakke høyt', 'Aldri øve', 'Bare lese stille', 'Unngå temaet'],
      explanation: 'En god strategi er å øve på å snakke høyt, gjerne foran speilet.',
    },
    {
      question: 'Hva betyr \'la presentación\' i muntlig eksamen?',
      options: ['Et forberedt tema du presenterer', 'En skriftlig prøve', 'En lytteøvelse', 'En oversettelse'],
      explanation: '\'La presentación\' er det forberedte temaet du presenterer muntlig.',
    },
    {
      question: 'Hvilken frase introduserer temaet for en presentasjon?',
      options: ['El tema de mi presentación es...', 'Me gusta el chocolate', 'Hace calor', 'Voy al cine'],
      explanation: '\'El tema de mi presentación es...\' (Temaet for presentasjonen min er...) introduserer temaet.',
    },
    {
      question: 'Hva bør du gjøre hvis du ikke husker et ord under muntlig eksamen?',
      options: ['Omskrive med andre ord', 'Stoppe helt', 'Gå ut', 'Bytte til norsk'],
      explanation: 'En god strategi er å omskrive (parafrasere) med andre ord du kan, i stedet for å stoppe.',
    },
  ],

  'spansk-3-10-4': [
    {
      question: 'Hvilket grammatisk tema er sentralt i spansk nivå 3?',
      options: ['Subjuntivo (konjunktiv)', 'Bare presens', 'Bare tallene', 'Bare hilsninger'],
      explanation: 'Subjuntivo (konjunktiv) er et sentralt grammatikktema på nivå 3, brukt for ønsker, følelser og tvil.',
    },
    {
      question: 'Hva er en god eksamensstrategi?',
      options: ['Les oppgaven nøye før du svarer', 'Svar uten å lese', 'Bruk all tid på første oppgave', 'Hopp over instruksjonene'],
      explanation: 'En god strategi er å lese oppgaven nøye for å forstå hva du blir bedt om.',
    },
    {
      question: 'Hva er \'la autoevaluación\'?',
      options: ['Egenvurdering', 'Karaktersetting av andre', 'En skriftlig prøve', 'En oversettelse'],
      explanation: '\'La autoevaluación\' er egenvurdering – å vurdere sine egne ferdigheter.',
    },
    {
      question: 'Hva bør du gjøre med tiden under eksamen?',
      options: ['Planlegge og fordele den mellom oppgavene', 'Bruke alt på én oppgave', 'Ikke følge med på tiden', 'Levere først av alle'],
      explanation: 'Det lønner seg å planlegge tiden og fordele den jevnt mellom oppgavene.',
    },
    {
      question: 'Hvilken modus uttrykker ønsker og følelser?',
      options: ['Konjunktiv', 'Indikativ', 'Imperativ alene', 'Infinitiv'],
      explanation: 'Konjunktiv (subjuntivo) uttrykker ønsker, følelser, tvil og formelle oppfordringer.',
    },
  ],

  'spansk-3-11-1': [
    {
      question: 'Hva betyr \'el cambio climático\'?',
      options: ['Klimaendringer', 'Værvarslet', 'Årstidene', 'Klimaanlegget'],
      explanation: '\'El cambio climático\' betyr klimaendringer.',
    },
    {
      question: 'Hva betyr \'el calentamiento global\'?',
      options: ['Global oppvarming', 'Global avkjøling', 'Solformørkelse', 'Vannmangel'],
      explanation: '\'El calentamiento global\' betyr global oppvarming.',
    },
    {
      question: 'Hva betyr \'el efecto invernadero\'?',
      options: ['Drivhuseffekten', 'Solenergi', 'Vindkraft', 'Regnskogen'],
      explanation: '\'El efecto invernadero\' betyr drivhuseffekten.',
    },
    {
      question: 'Hvordan merkes klimaendringer i Andesfjellene?',
      options: ['Isbreene (los glaciares) smelter', 'Det blir kaldere', 'Det regner mindre overalt', 'Ingen endring'],
      explanation: 'I Andesfjellene smelter isbreene (los glaciares) i rekordfart på grunn av klimaendringene.',
    },
    {
      question: 'Hvilken frase uttrykker bekymring på spansk?',
      options: ['Me preocupa que...', 'Me gusta que...', 'Es divertido', 'Hace sol'],
      explanation: '\'Me preocupa que...\' (Det bekymrer meg at...) uttrykker bekymring og krever konjunktiv.',
    },
  ],

  'spansk-3-11-2': [
    {
      question: 'Hva betyr \'la energía renovable\'?',
      options: ['Fornybar energi', 'Atomenergi', 'Kullkraft', 'Oljeenergi'],
      explanation: '\'La energía renovable\' betyr fornybar energi.',
    },
    {
      question: 'Hva betyr \'la energía solar\'?',
      options: ['Solenergi', 'Vindkraft', 'Vannkraft', 'Bølgekraft'],
      explanation: '\'La energía solar\' betyr solenergi.',
    },
    {
      question: 'Hva betyr \'la energía eólica\'?',
      options: ['Vindkraft', 'Solenergi', 'Atomenergi', 'Vannkraft'],
      explanation: '\'La energía eólica\' betyr vindkraft (av gresk \'Aiolos\', vindenes gud).',
    },
    {
      question: 'Innen hvilken energiform er Spania verdensledende?',
      options: ['Solenergi', 'Atomenergi', 'Kullkraft', 'Olje'],
      explanation: 'Spania er et av Europas mest solrike land og en verdensleder innen solenergi.',
    },
    {
      question: 'Hvilket uttrykk fremhever en fordel (\'ventaja\')?',
      options: ['La energía solar es inagotable', 'La energía solar es cara', 'No funciona', 'Es peligrosa'],
      explanation: '\'La energía solar es inagotable\' (solenergi er uuttømmelig) fremhever en fordel.',
    },
  ],

  'spansk-3-11-3': [
    {
      question: 'Hva betyr \'la biodiversidad\'?',
      options: ['Biologisk mangfold', 'Forurensning', 'Avskoging', 'Klimaendring'],
      explanation: '\'La biodiversidad\' betyr biologisk mangfold.',
    },
    {
      question: 'Hvilken region er verdens mest biologisk mangfoldige?',
      options: ['Latin-Amerika', 'Antarktis', 'Sahara', 'Nord-Europa'],
      explanation: 'Latin-Amerika er verdens mest biologisk mangfoldige region, med Amazonas og Galápagos.',
    },
    {
      question: 'Hva betyr \'la deforestación\'?',
      options: ['Avskoging', 'Gjenplanting', 'Forurensning av vann', 'Jordskjelv'],
      explanation: '\'La deforestación\' betyr avskoging – fjerning av skog for landbruk og kvegdrift.',
    },
    {
      question: 'Hva betyr \'una especie en peligro\'?',
      options: ['En truet art', 'En ny art', 'En vanlig art', 'En utdødd art'],
      explanation: '\'Una especie en peligro (de extinción)\' er en truet art.',
    },
    {
      question: 'Hvilket økosystem er \'la Amazonía\'?',
      options: ['Verdens største regnskog', 'En ørken', 'En fjellkjede', 'En innsjø'],
      explanation: '\'La Amazonía\' er verdens største regnskog, delt mellom ni land.',
    },
  ],

  'spansk-3-11-4': [
    {
      question: 'Hva betyr \'el/la activista\'?',
      options: ['Aktivist', 'Politiker', 'Journalist', 'Forsker'],
      explanation: '\'El/la activista\' betyr aktivist – en som kjemper aktivt for en sak.',
    },
    {
      question: 'Hva betyr \'la manifestación\'?',
      options: ['Demonstrasjon', 'Avstemning', 'Forhandling', 'Reklame'],
      explanation: '\'La manifestación\' betyr demonstrasjon.',
    },
    {
      question: 'Hvem var Berta Cáceres?',
      options: ['Urfolksleder og miljøaktivist fra Honduras', 'En spansk forfatter', 'En filmregissør', 'En politiker i Spania'],
      explanation: 'Berta Cáceres (1971-2016) var en urfolksleder og miljøaktivist fra lenca-folket i Honduras.',
    },
    {
      question: 'Hva er det første i en argumentasjonsstruktur?',
      options: ['Tesis (hovedpåstand)', 'Konklusjon', 'Motargument', 'Kilde'],
      explanation: 'Argumentasjonen starter med tesis (hovedpåstanden), f.eks. \'Debemos actuar ahora\'.',
    },
    {
      question: 'Hva betyr \'la campaña\'?',
      options: ['Kampanje', 'Landsbygda', 'Kirkeklokken', 'Leiren'],
      explanation: '\'La campaña\' betyr kampanje (f.eks. en miljøkampanje).',
    },
  ],

  'spansk-3-12-1': [
    {
      question: 'Hva er \'El País\'?',
      options: ['Spanias mest leste avis', 'Et fjernsynsprogram', 'Et fotballag', 'En radiokanal'],
      explanation: '\'El País\' er Spanias mest leste avis, grunnlagt i 1976 etter Francos død.',
    },
    {
      question: 'Hva betyr \'el titular\'?',
      options: ['Overskriften', 'Journalisten', 'Kilden', 'Bildeteksten'],
      explanation: '\'El titular\' betyr overskriften i en avisartikkel.',
    },
    {
      question: 'Hva betyr \'la fuente\' i kildekritikk?',
      options: ['Kilden', 'Fontenen', 'Overskriften', 'Avisen'],
      explanation: '\'La fuente\' betyr kilden – hvor informasjonen kommer fra.',
    },
    {
      question: 'Hva bør du spørre om i kildekritikk?',
      options: ['¿Quién ha escrito el artículo?', '¿Qué hora es?', '¿Cuánto cuesta?', '¿Dónde vives?'],
      explanation: 'I kildekritikk spør du blant annet \'¿Quién ha escrito el artículo?\' (Hvem har skrevet artikkelen?).',
    },
    {
      question: 'Hva betyr \'la objetividad\'?',
      options: ['Objektiviteten', 'Subjektiviteten', 'Reklamen', 'Overskriften'],
      explanation: '\'La objetividad\' betyr objektivitet – et ideal for god journalistikk.',
    },
  ],

  'spansk-3-12-2': [
    {
      question: 'Hva betyr \'las redes sociales\'?',
      options: ['Sosiale medier', 'Fiskegarn', 'Veikryss', 'Strømnettet'],
      explanation: '\'Las redes sociales\' betyr sosiale medier.',
    },
    {
      question: 'Hva betyr \'el/la influencer\'?',
      options: ['En influenser', 'En journalist', 'En lærer', 'En politiker'],
      explanation: '\'El/la influencer\' betyr influenser – en person med stor påvirkning på sosiale medier.',
    },
    {
      question: 'Hva betyr forkortelsen \'xq\' i spansk nettspråk?',
      options: ['porque (fordi)', 'por qué (hvorfor)', 'que (at)', 'quién (hvem)'],
      explanation: '\'xq\' er nettforkortelse for \'porque\' (fordi); \'q\' står for \'que\'.',
    },
    {
      question: 'Hva betyr \'el ciberacoso\'?',
      options: ['Nettmobbing', 'Personvern', 'Følgere', 'Innhold'],
      explanation: '\'El ciberacoso\' betyr nettmobbing/digital trakassering.',
    },
    {
      question: 'Hva betyr \'la huella digital\'?',
      options: ['Det digitale fotavtrykket', 'Et passord', 'En profil', 'En melding'],
      explanation: '\'La huella digital\' er det digitale fotavtrykket – alt du legger igjen på nettet.',
    },
  ],

  'spansk-3-12-3': [
    {
      question: 'Hva betyr \'la publicidad\'?',
      options: ['Reklame', 'Propaganda alene', 'Nyhet', 'Avis'],
      explanation: '\'La publicidad\' betyr reklame.',
    },
    {
      question: 'Hva betyr \'el eslogan\'?',
      options: ['Slagordet', 'Bildet', 'Prisen', 'Logoen'],
      explanation: '\'El eslogan\' betyr slagordet i en reklame.',
    },
    {
      question: 'Hva er \'la apelación emocional\' i reklame?',
      options: ['Appell til følelser', 'Appell til logikk alene', 'Pris', 'Statistikk'],
      explanation: '\'La apelación emocional\' er appell til følelser, en vanlig overtalelsesteknikk i reklame.',
    },
    {
      question: 'Hvilken retorisk appellform handler om troverdighet?',
      options: ['Etos (ethos)', 'Patos (pathos)', 'Logos', 'Kronos'],
      explanation: 'Etos (ethos) handler om avsenderens troverdighet og autoritet.',
    },
    {
      question: 'Hva betyr \'el consumismo\'?',
      options: ['Forbrukerkultur/kjøpepress', 'Sparing', 'Produksjon', 'Eksport'],
      explanation: '\'El consumismo\' betyr forbrukerkultur eller kjøpepress.',
    },
  ],

  'spansk-3-12-4': [
    {
      question: 'Hva betyr \'las noticias falsas\'?',
      options: ['Falske nyheter', 'Sanne nyheter', 'Lokalnyheter', 'Sportsnyheter'],
      explanation: '\'Las noticias falsas\' (fake news) betyr falske nyheter.',
    },
    {
      question: 'Hva betyr \'la desinformación\'?',
      options: ['Desinformasjon', 'Informasjon', 'Utdanning', 'Forskning'],
      explanation: '\'La desinformación\' betyr desinformasjon – bevisst spredning av feilaktig informasjon.',
    },
    {
      question: 'Hva er et typisk kjennetegn på falske nyheter?',
      options: ['Sensasjonelle overskrifter', 'Nøytrale, kjedelige titler', 'Mange kilder', 'Faglige referanser'],
      explanation: 'Falske nyheter har ofte sensasjonelle overskrifter for å fange oppmerksomhet.',
    },
    {
      question: 'Hva betyr \'verificar\'?',
      options: ['Å verifisere/faktasjekke', 'Å publisere', 'Å dele', 'Å slette'],
      explanation: '\'Verificar\' betyr å verifisere eller faktasjekke informasjon.',
    },
    {
      question: 'Hvilket uttrykk uttrykker tvil på spansk?',
      options: ['Me parece sospechoso que...', 'Estoy seguro de que...', 'Es verdad que...', 'Es evidente que...'],
      explanation: '\'Me parece sospechoso que...\' (Det virker mistenkelig at...) uttrykker tvil og krever konjunktiv.',
    },
  ],

  'spansk-3-13-1': [
    {
      question: 'Hva betyr \'la conquista\'?',
      options: ['Erobringen', 'Oppdagelsen alene', 'Freden', 'Handelen'],
      explanation: '\'La conquista\' betyr erobringen – den spanske erobringen av Amerika.',
    },
    {
      question: 'Hvem nådde Amerika i 1492?',
      options: ['Cristóbal Colón (Columbus)', 'Hernán Cortés', 'Simón Bolívar', 'Francisco Franco'],
      explanation: 'Cristóbal Colón (Columbus) nådde Amerika i 1492 med skipene la Niña, la Pinta og la Santa María.',
    },
    {
      question: 'Hva betyr \'el conquistador\'?',
      options: ['Erobreren', 'Oppdageren', 'Misjonæren', 'Kongen'],
      explanation: '\'El conquistador\' betyr erobreren – de spanske soldatene som erobret Amerika.',
    },
    {
      question: 'Hva betyr \'los pueblos indígenas\'?',
      options: ['Urfolkene', 'Kolonistene', 'Erobrerne', 'Misjonærene'],
      explanation: '\'Los pueblos indígenas\' betyr urfolkene som levde i Amerika før erobringen.',
    },
    {
      question: 'Hva trodde Columbus at han hadde nådd?',
      options: ['Asia', 'Afrika', 'Australia', 'Antarktis'],
      explanation: 'Columbus trodde han hadde nådd Asia, men hadde i virkeligheten kommet til Amerika.',
    },
  ],

  'spansk-3-13-2': [
    {
      question: 'Hva betyr \'la independencia\'?',
      options: ['Uavhengighet', 'Avhengighet', 'Erobring', 'Kolonisering'],
      explanation: '\'La independencia\' betyr uavhengighet, som de latinamerikanske landene kjempet for på 1800-tallet.',
    },
    {
      question: 'Hvem kalles \'El Libertador\'?',
      options: ['Simón Bolívar', 'Hernán Cortés', 'Cristóbal Colón', 'Francisco Franco'],
      explanation: 'Simón Bolívar (1783-1830) kalles \'El Libertador\' (frigjøreren) etter å ha frigjort flere land.',
    },
    {
      question: 'Hvilke land bidro Bolívar til å frigjøre?',
      options: ['Venezuela, Colombia, Ecuador, Peru og Bolivia', 'Bare Spania', 'Mexico og Cuba', 'Argentina og Chile'],
      explanation: 'Bolívar frigjorde Venezuela, Colombia, Ecuador, Peru og Bolivia (oppkalt etter ham).',
    },
    {
      question: 'Hvilken bevegelse inspirerte uavhengighetskampene?',
      options: ['Opplysningstiden og den franske/amerikanske revolusjonen', 'Romantikken alene', 'Den industrielle revolusjon', 'Renessansen'],
      explanation: 'Opplysningstidens ideer og den franske og amerikanske revolusjonen inspirerte uavhengighetskampene.',
    },
    {
      question: 'Hvem var \'los criollos\'?',
      options: ['Etterkommere av spanjoler født i Amerika', 'Urfolk', 'Slaver', 'Spanske konger'],
      explanation: '\'Los criollos\' (kreolene) var etterkommere av spanjoler født i Amerika, ofte rike og misfornøyde.',
    },
  ],

  'spansk-3-13-3': [
    {
      question: 'Hva betyr \'la dictadura\'?',
      options: ['Diktatur', 'Demokrati', 'Monarki', 'Republikk'],
      explanation: '\'La dictadura\' betyr diktatur.',
    },
    {
      question: 'Hvem var diktator i Chile?',
      options: ['Augusto Pinochet', 'Francisco Franco', 'Simón Bolívar', 'Juan Carlos I'],
      explanation: 'Augusto Pinochet var diktator i Chile etter statskuppet i 1973.',
    },
    {
      question: 'Hva betyr \'el golpe de estado\'?',
      options: ['Statskupp', 'Valg', 'Grunnlov', 'Demonstrasjon'],
      explanation: '\'El golpe de estado\' betyr statskupp – en voldelig maktovertakelse.',
    },
    {
      question: 'Hva kalles Spanias overgang til demokrati etter Franco?',
      options: ['La Transición', 'La Reconquista', 'El Boom', 'La Movida'],
      explanation: '\'La Transición\' (1975-1982) var Spanias fredelige overgang fra diktatur til demokrati.',
    },
    {
      question: 'Hvor lenge styrte Franco i Spania?',
      options: ['1939-1975', '1936-1939', '1975-1982', '1950-1960'],
      explanation: 'Franco styrte Spania fra 1939 (etter borgerkrigen) til sin død i 1975.',
    },
  ],

  'spansk-3-13-4': [
    {
      question: 'Hva betyr \'la memoria histórica\'?',
      options: ['Historisk minne', 'Et historieleksikon', 'En museumssamling', 'En eksamen'],
      explanation: '\'La memoria histórica\' betyr historisk minne – hvordan et samfunn håndterer en vond fortid.',
    },
    {
      question: 'Hva er \'las fosas comunes\'?',
      options: ['Massegraver', 'Minnesmerker', 'Museer', 'Arkiver'],
      explanation: '\'Las fosas comunes\' er massegraver, blant annet fra den spanske borgerkrigen.',
    },
    {
      question: 'Hva er \'una comisión de la verdad\'?',
      options: ['En sannhetskommisjon', 'En domstol for kriminelle', 'Et politisk parti', 'En valgkommisjon'],
      explanation: '\'Una comisión de la verdad\' (sannhetskommisjon) brukes for å bearbeide en vond fortid.',
    },
    {
      question: 'Hva betyr \'la reconciliación\'?',
      options: ['Forsoning', 'Hevn', 'Glemsel', 'Straff'],
      explanation: '\'La reconciliación\' betyr forsoning.',
    },
    {
      question: 'Hvilket dilemma står sentralt i historisk minne?',
      options: ['Å glemme eller å huske fortiden', 'Hvilket språk man snakker', 'Hvilken mat man spiser', 'Hvor man bor'],
      explanation: 'Et sentralt dilemma er om et samfunn skal glemme eller huske, straffe eller tilgi den vonde fortiden.',
    },
  ],

  'spansk-3-14-1': [
    {
      question: 'Hva betyr \'la investigación\'?',
      options: ['Forskning', 'Oppfinnelse', 'Oversettelse', 'Undervisning'],
      explanation: '\'La investigación\' betyr forskning.',
    },
    {
      question: 'Hva står IMRAD-strukturen for i en vitenskapelig tekst?',
      options: ['Introducción, Método, Resultados, Discusión', 'Innledning, Midt, Refleksjon', 'Bare resultater', 'Bare diskusjon'],
      explanation: 'IMRAD er den internasjonale standarden: Introducción, Método, Resultados og Discusión.',
    },
    {
      question: 'Hva betyr \'la hipótesis\'?',
      options: ['Hypotesen', 'Konklusjonen', 'Eksperimentet', 'Resultatet'],
      explanation: '\'La hipótesis\' betyr hypotesen – en antakelse som testes i forskning.',
    },
    {
      question: 'Hva betyr \'el experimento\'?',
      options: ['Eksperimentet', 'Teorien', 'Hypotesen', 'Sammendraget'],
      explanation: '\'El experimento\' betyr eksperimentet.',
    },
    {
      question: 'Hvilken del kommer sist i IMRAD?',
      options: ['Discusión', 'Introducción', 'Método', 'Resultados'],
      explanation: 'Discusión (diskusjon) kommer sist i IMRAD-strukturen.',
    },
  ],

  'spansk-3-14-2': [
    {
      question: 'Hva betyr \'la inteligencia artificial (IA)\'?',
      options: ['Kunstig intelligens', 'Naturlig intelligens', 'Innovasjon generelt', 'Et dataspill'],
      explanation: '\'La inteligencia artificial (IA)\' betyr kunstig intelligens (KI).',
    },
    {
      question: 'Hva betyr \'la empresa emergente\'?',
      options: ['En startup', 'Et storkonsern', 'En offentlig etat', 'En bank'],
      explanation: '\'La empresa emergente\' betyr en startup – et nytt, voksende selskap.',
    },
    {
      question: 'Hvilke byer er ledende teknologihuber i Spania?',
      options: ['Barcelona og Madrid', 'Sevilla og Granada', 'Bilbao og Vigo', 'Bare Valencia'],
      explanation: 'Barcelona og Madrid er ledende teknologihuber, og Barcelona arrangerer Mobile World Congress.',
    },
    {
      question: 'Hva er \'MercadoLibre\' et eksempel på?',
      options: ['En latinamerikansk teknologisuksess', 'En spansk avis', 'En film', 'En matrett'],
      explanation: 'MercadoLibre er en kjent latinamerikansk teknologi-/e-handelssuksess.',
    },
    {
      question: 'Hva betyr \'la innovación\'?',
      options: ['Innovasjon', 'Tradisjon', 'Stagnasjon', 'Konkurranse'],
      explanation: '\'La innovación\' betyr innovasjon – nyskaping og utvikling.',
    },
  ],

  'spansk-3-14-3': [
    {
      question: 'Hva betyr \'la bioética\'?',
      options: ['Bioetikk', 'Biologi', 'Bioteknologi generelt', 'Botanikk'],
      explanation: '\'La bioética\' betyr bioetikk – etikk knyttet til liv og bioteknologi.',
    },
    {
      question: 'Hva er CRISPR forbundet med?',
      options: ['Genredigering', 'Kunstig intelligens', 'Romfart', 'Solenergi'],
      explanation: 'CRISPR er en teknologi for genredigering (la edición genética) som kan redigere DNA.',
    },
    {
      question: 'Hva betyr \'la clonación\'?',
      options: ['Kloning', 'Forurensning', 'Vaksinering', 'Operasjon'],
      explanation: '\'La clonación\' betyr kloning.',
    },
    {
      question: 'Hvilken frase uttrykker en mening i en etisk debatt?',
      options: ['Desde mi punto de vista...', 'Hace buen tiempo', 'Voy al cine', 'Me llamo Ana'],
      explanation: '\'Desde mi punto de vista...\' (Fra mitt synspunkt...) uttrykker en mening i en debatt.',
    },
    {
      question: 'Hvilket etisk spørsmål reiser genredigering?',
      options: ['Om vi bør endre menneskelige gener', 'Hvilket språk vi snakker', 'Hvor vi reiser', 'Hva vi spiser'],
      explanation: 'Genredigering reiser spørsmål om vi bør endre menneskelige gener, selv for å kurere sykdom.',
    },
  ],

  'spansk-3-14-4': [
    {
      question: 'Hva er strukturen i en akademisk presentasjon?',
      options: ['Introducción, Desarrollo, Conclusión', 'Bare konklusjon', 'Bare en liste', 'Tittel alene'],
      explanation: 'En akademisk presentasjon har Introducción, Desarrollo og Conclusión.',
    },
    {
      question: 'Hva betyr \'la diapositiva\'?',
      options: ['Lysbildet', 'Disposisjonen', 'Mikrofonen', 'Salen'],
      explanation: '\'La diapositiva\' betyr lysbildet (slide) i en presentasjon.',
    },
    {
      question: 'Hvilken frase innleder en akademisk presentasjon?',
      options: ['Mi presentación trata sobre...', '¡Hola, qué tal!', 'Hasta luego', 'Buen provecho'],
      explanation: '\'Mi presentación trata sobre...\' (Presentasjonen min handler om...) innleder formelt.',
    },
    {
      question: 'Hvilken frase introduserer et nytt punkt?',
      options: ['Pasemos ahora al siguiente punto...', 'Adiós', 'Me gusta', 'Hace frío'],
      explanation: '\'Pasemos ahora al siguiente punto...\' (La oss nå gå videre til neste punkt...) markerer en overgang.',
    },
    {
      question: 'Hva betyr \'el esquema\'?',
      options: ['Disposisjonen', 'Lysbildet', 'Konklusjonen', 'Mikrofonen'],
      explanation: '\'El esquema\' betyr disposisjonen eller skjemaet for presentasjonen.',
    },
  ],

  'spansk-3-15-1': [
    {
      question: 'Hva betyr \'la traducción\'?',
      options: ['Oversettelse', 'Tolkning muntlig alene', 'Forklaring', 'Sammendrag'],
      explanation: '\'La traducción\' betyr oversettelse.',
    },
    {
      question: 'Hva er \'la traducción literal\'?',
      options: ['Ord-for-ord-oversettelse', 'Fri gjendiktning', 'Sammendrag', 'Tolkning'],
      explanation: '\'La traducción literal\' er ord-for-ord-oversettelse, som fungerer når språkene har lik struktur.',
    },
    {
      question: 'Hvilken grammatisk forskjell skaper utfordringer mellom norsk og spansk?',
      options: ['Ordstilling (V2 i norsk)', 'Bruk av tall', 'Samme alfabet', 'Like verb'],
      explanation: 'Norsk har V2-regel (verbet på andreplass), mens spansk har en annen ordstilling, noe som skaper utfordringer.',
    },
    {
      question: 'Hva er \'la equivalencia\' som oversettelsesteknikk?',
      options: ['Samme funksjon med ulike ord (idiomer)', 'Ord-for-ord', 'Å droppe setninger', 'Å oversette baklengs'],
      explanation: 'Ekvivalens gjengir samme funksjon med ulike ord, særlig ved idiomer og faste uttrykk.',
    },
    {
      question: 'Hva forstår en god oversetter i tillegg til ordene?',
      options: ['Kultur, kontekst og nyanser', 'Bare alfabetet', 'Bare tallene', 'Ingenting ekstra'],
      explanation: 'En god oversetter forstår kulturen, konteksten og nyansene bak ordene.',
    },
  ],

  'spansk-3-15-2': [
    {
      question: 'Hva er \'falsos amigos\'?',
      options: ['Ord som ser like ut, men betyr noe ulikt', 'Gode venner', 'Synonymer', 'Rimord'],
      explanation: '\'Falsos amigos\' (falske venner) er ord som ser like ut på to språk, men har ulik betydning.',
    },
    {
      question: 'Hva betyr det spanske ordet \'embarazada\'?',
      options: ['Gravid', 'Flau', 'Sint', 'Trøtt'],
      explanation: '\'Embarazada\' betyr gravid, ikke \'embarrassed\' (flau) – en klassisk falsk venn.',
    },
    {
      question: 'Hva er riktig: \'Estoy enamorado ___ ella\'?',
      options: ['de', 'en', 'con', 'a'],
      explanation: 'Spansk bruker \'enamorado de\' (forelsket i): \'Estoy enamorado de ella\', ikke \'en\'.',
    },
    {
      question: 'Hva er \'kontrastiv analyse\'?',
      options: ['Systematisk sammenligning av to språk', 'Oversettelse av dikt', 'Uttaleøvelse', 'Grammatikkpugging'],
      explanation: 'Kontrastiv analyse sammenligner to språk systematisk for å finne forskjeller som kan skape feil.',
    },
    {
      question: 'Hvorfor er falske venner en utfordring?',
      options: ['De fører lett til misforståelser', 'De er alltid like', 'De finnes ikke', 'De er enkle å lære'],
      explanation: 'Falske venner fører lett til misforståelser fordi de ser kjente ut, men betyr noe annet.',
    },
  ],

  'spansk-3-15-3': [
    {
      question: 'Hva er \'la mediación cultural\'?',
      options: ['Å bygge bruer mellom kulturer', 'Ren oversettelse av ord', 'Uttaletrening', 'Grammatikkanalyse'],
      explanation: 'Kulturell mediering handler om å bygge bruer mellom kulturer og formidle mening og verdier.',
    },
    {
      question: 'Hva betyr \'la competencia intercultural\'?',
      options: ['Interkulturell kompetanse', 'Konkurranse mellom land', 'Et fag', 'En eksamen'],
      explanation: '\'La competencia intercultural\' betyr interkulturell kompetanse – evnen til å forstå og samhandle på tvers av kulturer.',
    },
    {
      question: 'Hva gjør en \'mediador/a cultural\'?',
      options: ['Tolker og formidler mellom kulturer', 'Bare oversetter ord', 'Underviser i grammatikk', 'Skriver dikt'],
      explanation: 'En kulturell mediator tolker og formidler mellom kulturer, ikke bare ord.',
    },
    {
      question: 'Hvilken kulturell forskjell kan skape misforståelser?',
      options: ['Oppfatning av tid', 'Bruk av tall', 'Alfabetet', 'Fargene'],
      explanation: 'Kulturelle forskjeller i for eksempel oppfatning av tid kan skape misforståelser i kommunikasjon.',
    },
    {
      question: 'Hva er kulturell mediering mer enn?',
      options: ['Mer enn å oversette ord', 'Mer enn å snakke', 'Mer enn å lytte', 'Det er bare oversettelse'],
      explanation: 'Kulturell mediering er mer enn å oversette ord – det handler om å formidle mening og verdier.',
    },
  ],

  'spansk-3-15-4': [
    {
      question: 'Hva betyr \'el registro\' i språk?',
      options: ['Stilnivået/registeret', 'Kassaapparatet', 'Listen', 'Lyden'],
      explanation: '\'El registro\' betyr stilnivået eller registeret – f.eks. formelt eller uformelt.',
    },
    {
      question: 'Hva kjennetegner \'el registro informal\'?',
      options: ['Tú-form, brukes mellom venner', 'Sie-form', 'Akademisk stil', 'Passiv form'],
      explanation: 'Uformelt register bruker \'tú\'-form og brukes mellom venner, familie og unge.',
    },
    {
      question: 'Hva betyr teksttilpasning (adaptación de textos)?',
      options: ['Å formidle samme budskap ulikt for ulike målgrupper', 'Å oversette til engelsk', 'Å forkorte alt', 'Å skrive på rim'],
      explanation: 'Teksttilpasning handler om å formidle samme budskap på ulike måter ut fra målgruppe og situasjon.',
    },
    {
      question: 'Hvilken sjanger bruker \'Estimado/a... Atentamente...\'?',
      options: ['Formell e-post', 'Uformell melding', 'Et dikt', 'En blogg'],
      explanation: 'En formell e-post bruker \'Estimado/a...\' og avsluttes med \'Atentamente...\'.',
    },
    {
      question: 'Hva er de viktige faktorene ved teksttilpasning?',
      options: ['Register, målgruppe og sjanger', 'Bare lengden', 'Bare overskriften', 'Bare språket'],
      explanation: 'Teksttilpasning avhenger av register (stilnivå), målgruppe og sjanger.',
    },
  ],

  'spansk-3-16-1': [
    {
      question: 'Hva er den viktigste teksttypen i akademisk spansk?',
      options: ['Det argumenterende essayet', 'Postkortet', 'Handlelisten', 'Dagboken'],
      explanation: 'Det argumenterende essayet (el ensayo argumentativo) er den viktigste akademiske teksttypen.',
    },
    {
      question: 'Hva er \'la tesis\' i et essay?',
      options: ['Påstanden du argumenterer for', 'Konklusjonen alene', 'Kilden', 'Tittelen'],
      explanation: '\'La tesis\' er hovedpåstanden du presenterer og argumenterer for.',
    },
    {
      question: 'Hva betyr bindeordet \'sin embargo\'?',
      options: ['Imidlertid/likevel', 'Dessuten', 'Fordi', 'For eksempel'],
      explanation: '\'Sin embargo\' betyr imidlertid/likevel og markerer en motsetning.',
    },
    {
      question: 'Hva betyr bindeordet \'además\'?',
      options: ['Dessuten', 'Men', 'Derfor', 'Til slutt'],
      explanation: '\'Además\' betyr dessuten og brukes for å legge til argumenter.',
    },
    {
      question: 'Hva er strukturen i et argumenterende essay?',
      options: ['Introducción, Desarrollo, Conclusión', 'Bare konklusjon', 'En liste med ord', 'Tittel og slutt'],
      explanation: 'Strukturen er Introducción (tese), Desarrollo (argumenter + motargument) og Conclusión.',
    },
  ],

  'spansk-3-16-2': [
    {
      question: 'Hva betyr \'la fuente primaria\'?',
      options: ['Primærkilden', 'Sekundærkilden', 'Bibliografien', 'Sammendraget'],
      explanation: '\'La fuente primaria\' er primærkilden – en originalkilde fra førstehånd.',
    },
    {
      question: 'Hva betyr \'la cita textual\'?',
      options: ['Direkte sitat', 'Parafrasering', 'Sammendrag', 'Oversettelse'],
      explanation: '\'La cita textual\' er et direkte sitat der du gjengir forfatterens nøyaktige ord.',
    },
    {
      question: 'Hva er Dialnet et eksempel på?',
      options: ['En spansk akademisk database', 'En avis', 'En film', 'En blogg'],
      explanation: 'Dialnet er en spansk database med akademiske artikler, sammen med Redalyc og SciELO.',
    },
    {
      question: 'Hva er forskjellen mellom sitat og parafrasering?',
      options: ['Sitat gjengir ordrett, parafrasering med egne ord', 'Ingen forskjell', 'Sitat er på engelsk', 'Parafrasering er ulovlig'],
      explanation: 'Et direkte sitat gjengir ordene nøyaktig, mens parafrasering gjengir innholdet med egne ord.',
    },
    {
      question: 'Hva bør du vurdere ved en kilde?',
      options: ['Aktualitet, relevans og autoritet', 'Bare lengden', 'Bare språket', 'Bare fargen'],
      explanation: 'Ved kildevurdering vurderer du aktualitet, relevans, autoritet og nøyaktighet.',
    },
  ],

  'spansk-3-16-3': [
    {
      question: 'Hva er \'la nominalización\'?',
      options: ['Å gjøre verb om til substantiv', 'Å bøye verb', 'Å lage flertall', 'Å bruke adjektiv'],
      explanation: 'Nominalisering er å gjøre verb om til substantiv (investigar → la investigación) for en mer formell tone.',
    },
    {
      question: 'Hva kjennetegner akademisk register?',
      options: ['Presist ordvalg og kompleks setningsstruktur', 'Slang', 'Korte meldinger', 'Emojis'],
      explanation: 'Akademisk register kjennetegnes av presist ordvalg, kompleks setningsstruktur, nominaliseringer og passiv.',
    },
    {
      question: 'Hvilket ord er mer presist enn \'cosa\' i akademisk spansk?',
      options: ['aspecto', 'cosa', 'algo', 'eso'],
      explanation: 'I akademisk spansk velger man presise ord som \'aspecto\', \'factor\' eller \'elemento\' i stedet for \'cosa\'.',
    },
    {
      question: 'Hva er \'la voz pasiva\'?',
      options: ['Passiv form', 'Aktiv form', 'Imperativ', 'Konjunktiv'],
      explanation: '\'La voz pasiva\' er passiv form, vanlig i akademisk register: \'Se realizó el estudio\'.',
    },
    {
      question: 'Hvordan nominaliserer man \'investigar\'?',
      options: ['la investigación', 'investigando', 'investigado', 'investigaré'],
      explanation: 'Verbet \'investigar\' nominaliseres til substantivet \'la investigación\'.',
    },
  ],

  'spansk-3-16-4': [
    {
      question: 'Hva betyr \'la autoevaluación\'?',
      options: ['Egenvurdering', 'Eksamen', 'Karaktersetting av andre', 'En prøve'],
      explanation: '\'La autoevaluación\' betyr egenvurdering – å vurdere sine egne ferdigheter.',
    },
    {
      question: 'Hva betyr \'los puntos fuertes\'?',
      options: ['De sterke sidene', 'De svake sidene', 'Karakterene', 'Målene'],
      explanation: '\'Los puntos fuertes\' betyr de sterke sidene; \'los puntos débiles\' er de svake sidene.',
    },
    {
      question: 'Hvilke fire språkferdigheter har du arbeidet med?',
      options: ['Lesing, skriving, lytting og muntlig', 'Bare grammatikk', 'Bare ordforråd', 'Bare uttale'],
      explanation: 'Du har arbeidet med lesing, skriving, lytting og muntlig produksjon.',
    },
    {
      question: 'Hva er en god måte å fortsette å lære spansk på?',
      options: ['Lese aviser og litteratur', 'Slutte helt', 'Bare se på tall', 'Unngå spansk'],
      explanation: 'En god strategi er å lese mye og variert, som aviser (El País) og litteratur (García Márquez, Allende).',
    },
    {
      question: 'Hva refererer CEFR-nivå til?',
      options: ['Den europeiske referanserammen for språk', 'En spansk avis', 'En by i Spania', 'En forfatter'],
      explanation: 'CEFR er den europeiske referanserammen for språk (A1–C2), brukt for å vurdere språknivå.',
    },
  ],
};

export default quizData_spansk_3;
