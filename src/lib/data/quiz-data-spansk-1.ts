import type { QuizQuestion } from './quiz-data';

const quizData_spansk_1: Record<string, QuizQuestion[]> = {
  'spansk-1-1-1': [
    {
      question: '¿Cómo se dice "god dag" på spansk?',
      options: ['Buenos días', 'Buenas noches', 'Adiós', 'Gracias'],
      explanation: '"Buenos días" brukes som hilsen på dagtid.',
    },
    {
      question: 'Hva betyr "¿Cómo te llamas?"',
      options: [
        'Hva heter du?',
        'Hvordan har du det?',
        'Hvor kommer du fra?',
        'Hvor gammel er du?',
      ],
      explanation: '"¿Cómo te llamas?" er spørsmålet "Hva heter du?" på spansk.',
    },
    {
      question: 'Hvordan svarer du på "¿Cómo estás?"',
      options: [
        'Estoy bien, gracias',
        'Me llamo Juan',
        'Soy de Noruega',
        'Tengo quince años',
      ],
      explanation: '"Estoy bien, gracias" betyr "Jeg har det bra, takk."',
    },
    {
      question: 'Hva betyr "mucho gusto"?',
      options: [
        'Hyggelig å møte deg',
        'Ha det bra',
        'God morgen',
        'Takk',
      ],
      explanation: '"Mucho gusto" sies når man møter noen for første gang.',
    },
    {
      question: 'Hvordan sier du "ha det" på spansk?',
      options: ['Adiós', 'Hola', 'Buenos días', 'Gracias'],
      explanation: '"Adiós" er den vanligste måten å si "ha det" på.',
    },
    {
      question: 'Hva betyr "por favor"?',
      options: ['Vær så snill / Takk', 'Ha det', 'God natt', 'Unnskyld'],
      explanation: '"Por favor" brukes når man ber om noe høflig.',
    },
    {
      question: 'Hvordan sier du "jeg heter Maria" på spansk?',
      options: [
        'Me llamo María',
        'Estoy María',
        'Soy María años',
        'Tengo María',
      ],
      explanation: '"Me llamo" betyr "jeg heter" og brukes med navn.',
    },
    {
      question: 'Hva betyr "buenas tardes"?',
      options: ['God ettermiddag', 'God morgen', 'God natt', 'Ha det'],
      explanation: '"Buenas tardes" brukes som hilsen på ettermiddagen.',
    },
    {
      question: 'Hvilket ord brukes for "takk" på spansk?',
      options: ['Gracias', 'Por favor', 'De nada', 'Perdón'],
      explanation: '"Gracias" betyr "takk" på spansk.',
    },
    {
      question: 'Hva svarer du på "gracias"?',
      options: ['De nada', 'Gracias', 'Hola', 'Adiós'],
      explanation: '"De nada" betyr "ingen årsak" og er svåret på takk.',
    },
  ],

  // ============================================================================
  // FREMMEDSPRÅK - TYSK NIVÅ 1
  // ============================================================================

  // Kapittel 1.1: Begrüßungen

  'spansk-1-1-2': [
    {
      question: 'Hva slags verb er "llamarse" (å hete)?',
      options: ['Et refleksivt verb', 'Et modalverb', 'Et hjelpeverb', 'Et upersonlig verb'],
      explanation: 'Llamarse er refleksivt — pronomenet (me, te, se) peker tilbake på subjektet: me llamo = «jeg kaller meg».',
    },
    {
      question: 'Hvordan spør du formelt om noens navn?',
      options: ['¿Cómo se llama usted?', '¿Cómo te llamas?', '¿Cómo me llamo?', '¿Cómo os llamáis?'],
      explanation: 'Med usted (De) brukes tredje person: ¿Cómo se llama usted? ¿Cómo te llamas? er uformelt.',
    },
    {
      question: 'Hvilket verb bruker spansk for å si hvor gammel man er?',
      options: ['tener (å ha)', 'ser (å være)', 'estar (å være)', 'llamarse (å hete)'],
      explanation: 'På spansk «har» man år: Tengo quince años = Jeg er 15 år.',
    },
    {
      question: 'Hva sier en kvinne når hun hilser med «hyggelig å treffe deg»?',
      options: ['Encantada', 'Encantado', 'Igualmente señor', 'Bienvenido'],
      explanation: 'Encantado/encantada bøyes etter kjønnet til den som snakker — en kvinne sier encantada.',
    },
    {
      question: 'Hvordan sier du «Han heter Juan»?',
      options: ['Él se llama Juan', 'Él te llamas Juan', 'Él me llamo Juan', 'Él es llama Juan'],
      explanation: 'I tredje person brukes se llama: Él se llama Juan.',
    },
  ],

  'spansk-1-1-3': [
    {
      question: 'Hvordan spør du uformelt hvor noen kommer fra?',
      options: ['¿De dónde eres?', '¿De dónde es usted?', '¿Dónde estás?', '¿Cómo te llamas?'],
      explanation: '¿De dónde eres? bruker tú-formen eres og er uformelt. ¿De dónde es usted? er formelt.',
    },
    {
      question: 'Hvordan sier du «Jeg er fra Norge»?',
      options: ['Soy de Noruega', 'Estoy de Noruega', 'Tengo de Noruega', 'Es de Noruega'],
      explanation: 'Opprinnelse uttrykkes med ser + de: Soy de Noruega.',
    },
    {
      question: 'María er fra Mexico. Hva er riktig nasjonalitetsform?',
      options: ['María es mexicana', 'María es mexicano', 'María es mexicanos', 'María es México'],
      explanation: 'Nasjonalitetsadjektiver bøyes etter kjønn — María er kvinne, derfor mexicana.',
    },
    {
      question: 'Hva er riktig bøying av "ser" i «nosotros»-formen?',
      options: ['somos', 'son', 'sois', 'soy'],
      explanation: 'Ser bøyes: soy, eres, es, somos, son. Nosotros somos = vi er.',
    },
    {
      question: 'En gutt fra Norge sier om seg selv:',
      options: ['Soy noruego', 'Soy noruega', 'Estoy noruego', 'Tengo noruego'],
      explanation: 'Hankjønnsformen er noruego; en jente ville sagt noruega. Ser brukes om nasjonalitet.',
    },
  ],

  'spansk-1-1-4': [
    {
      question: 'Hva betyr sammenhengsordet "también"?',
      options: ['også', 'men', 'og', 'ikke sant?'],
      explanation: 'También betyr «også». Pero = men, y = og, ¿verdad? = ikke sant?',
    },
    {
      question: 'Hvilket spørsmål hører til en FORMELL samtale?',
      options: ['¿Cuántos años tiene usted?', '¿Cuántos años tienes?', '¿Y tú?', '¿Qué tal, amigo?'],
      explanation: 'Usted-formen tiene er formell. Tienes og tú er uformelle.',
    },
    {
      question: 'Hva svarer du på «Mucho gusto»?',
      options: ['Encantado/Encantada', 'De nada', 'Nada más', 'Hasta luego'],
      explanation: 'På «hyggelig å møte deg» svarer man gjerne Encantado/Encantada eller Igualmente.',
    },
    {
      question: 'Hva betyr «¿Y tú?»',
      options: ['Og du?', 'Hvem er du?', 'Hvor er du?', 'Hva gjør du?'],
      explanation: '¿Y tú? («Og du?») brukes for å sende spørsmålet tilbake i en samtale.',
    },
    {
      question: 'Hva er riktig rekkefølge i en typisk første samtale?',
      options: [
        'Hilse → spørre om navn → svare → høflighetsfrase',
        'Høflighetsfrase → hilse → svare → spørre om navn',
        'Spørre om alder → hilse → si ha det → spørre om navn',
        'Si ha det → spørre om navn → hilse → svare',
      ],
      explanation: 'Man hilser først (¡Hola!), spør om navn (¿Cómo te llamas?), svarer (Me llamo...) og avslutter med f.eks. Mucho gusto.',
    },
  ],

  'spansk-1-2-1': [
    {
      question: 'Hva heter tallet 15 på spansk?',
      options: ['quince', 'catorce', 'cinco', 'cincuenta'],
      explanation: 'Quince = 15. Catorce = 14, cinco = 5, cincuenta = 50.',
    },
    {
      question: 'Hvordan bygges tallene 16-19 opp?',
      options: ['dieci- + grunntall, skrevet som ett ord', 'diez + y + grunntall, tre ord', 'veinti- + grunntall', 'grunntall + diez'],
      explanation: '16-19 skrives som ett ord med dieci-: dieciséis, diecisiete, dieciocho, diecinueve.',
    },
    {
      question: 'Hvilket av tallene 16-19 skrives med aksent?',
      options: ['dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'],
      explanation: 'Bare dieciséis (16) har aksent; de tre andre skrives uten.',
    },
    {
      question: 'Hva betyr «Once más nueve son veinte»?',
      options: ['11 + 9 = 20', '11 − 9 = 2', '12 + 9 = 21', '11 + 7 = 18'],
      explanation: 'Once = 11, más = pluss, nueve = 9, son = er, veinte = 20.',
    },
    {
      question: 'Hva heter tallet 12 på spansk?',
      options: ['doce', 'dos', 'trece', 'diez'],
      explanation: 'Doce = 12. Dos = 2, trece = 13, diez = 10.',
    },
  ],

  'spansk-1-2-2': [
    {
      question: 'Hvordan skrives tallet 47 på spansk?',
      options: ['cuarenta y siete', 'cuarentaysiete', 'cuatro y siete', 'setenta y cuatro'],
      explanation: 'Fra 31 og oppover skrives tallene som tre ord: tier + y + ener. Setenta y cuatro er 74.',
    },
    {
      question: 'Hva er spesielt med tallene 21-29?',
      options: ['De skrives som ett ord med veinti-', 'De skrives som tre ord med y', 'De har alle aksent', 'De bygges på treinta'],
      explanation: '21-29 skrives som ett ord: veintiuno, veintidós osv. Først fra 31 brukes tre ord (treinta y uno).',
    },
    {
      question: 'Hva heter 90 på spansk?',
      options: ['noventa', 'nueve', 'ochenta', 'sesenta'],
      explanation: 'Noventa = 90. Nueve = 9, ochenta = 80, sesenta = 60.',
    },
    {
      question: 'Hvordan spør du «Hvor mye koster det?» om én ting?',
      options: ['¿Cuánto cuesta?', '¿Cuánto cuestan?', '¿Cuántos años?', '¿Cuánto es tú?'],
      explanation: 'Cuesta er entallsformen; cuestan brukes om flere ting.',
    },
    {
      question: '«Cuesta setenta y nueve euros» — hvor mye koster varen?',
      options: ['79 euro', '69 euro', '97 euro', '89 euro'],
      explanation: 'Setenta = 70 og nueve = 9, altså 79 euro.',
    },
  ],

  'spansk-1-2-3': [
    {
      question: 'Hva er riktig: «Det røde huset»?',
      options: ['La casa roja', 'La casa rojo', 'La roja casa', 'El casa roja'],
      explanation: 'Casa er hunkjønn, så fargen bøyes til roja, og fargen står etter substantivet.',
    },
    {
      question: 'Hvilken farge endrer IKKE form etter kjønn?',
      options: ['verde', 'rojo', 'blanco', 'negro'],
      explanation: 'Verde ender ikke på -o og er lik for begge kjønn. Rojo/roja, blanco/blanca og negro/negra bøyes.',
    },
    {
      question: 'Hva betyr "amarillo"?',
      options: ['gul', 'brun', 'blå', 'grå'],
      explanation: 'Amarillo = gul. Brun = marrón, blå = azul, grå = gris.',
    },
    {
      question: 'Hvor plasseres fargen i en spansk setning?',
      options: ['Etter substantivet: el coche rojo', 'Foran substantivet: el rojo coche', 'Først i setningen', 'Det spiller ingen rolle'],
      explanation: 'Farger er adjektiver og står normalt etter substantivet på spansk, motsatt av norsk.',
    },
    {
      question: 'Hvordan svarer du på «¿Cuál es tu color favorito?»',
      options: ['Mi color favorito es el azul', 'Mi color favorito estás azul', 'Soy azul favorito', 'El azul es me gusta'],
      explanation: 'Man svarer med ser og bestemt artikkel foran fargen: Mi color favorito es el azul.',
    },
  ],

  'spansk-1-2-4': [
    {
      question: 'Når bruker du "cuestan" i stedet for "cuesta"?',
      options: ['Når du snakker om flere ting', 'Når du snakker høflig', 'Når prisen er over 100 euro', 'Når du snakker om mat'],
      explanation: 'Costar bøyes i tall: la camiseta cuesta (entall), las camisetas cuestan (flertall).',
    },
    {
      question: 'Hva betyr «Me llevo esto»?',
      options: ['Jeg tar denne', 'Jeg leverer dette', 'Jeg liker dette', 'Jeg legger fra meg dette'],
      explanation: 'Me llevo esto sier du i butikken når du har bestemt deg for å kjøpe noe.',
    },
    {
      question: 'Hva er riktig: «de svarte skoene koster 85 euro»?',
      options: [
        'Los zapatos negros cuestan ochenta y cinco euros',
        'Los zapatos negro cuesta ochenta y cinco euros',
        'Las zapatos negras cuestan ochocientos euros',
        'Los zapatos negros cuesta ochenta euros',
      ],
      explanation: 'Zapatos er hankjønn flertall (negros), verbet i flertall (cuestan), og 85 = ochenta y cinco.',
    },
    {
      question: 'Hva betyr «¿Algo más?» — og et vanlig svar?',
      options: ['«Noe mer?» — Nada más, gracias', '«Hvor mye?» — Veinte euros', '«Hvem der?» — Soy yo', '«Alt vel?» — Muy bien'],
      explanation: 'Ekspeditøren spør ¿Algo más? (Noe mer?), og kunden kan svare Nada más, gracias (Ikke noe mer, takk).',
    },
    {
      question: 'Hva betyr "la camiseta"?',
      options: ['t-skjorten', 'jakken', 'skjørtet', 'vesken'],
      explanation: 'La camiseta = t-skjorten. Jakken = la chaqueta, skjørtet = la falda, vesken = el bolso.',
    },
  ],

  'spansk-1-3-1': [
    {
      question: 'Hva betyr "los padres"?',
      options: ['foreldrene', 'fedrene', 'besteforeldrene', 'søsknene'],
      explanation: 'Los padres brukes som samlebetegnelse for far og mor. Besteforeldrene = los abuelos, søsknene = los hermanos.',
    },
    {
      question: 'Hva betyr "la prima"?',
      options: ['kusine', 'tante', 'søster', 'bestemor'],
      explanation: 'El primo/la prima = fetter/kusine. Tante = la tía, søster = la hermana.',
    },
    {
      question: 'Hvordan sier du «Jeg har to søsken»?',
      options: ['Tengo dos hermanos', 'Soy dos hermanos', 'Hay dos hermanos yo', 'Estoy dos hermanos'],
      explanation: 'Man bruker tener (å ha): Tengo dos hermanos.',
    },
    {
      question: 'Hvilken flertallsform brukes om en gruppe med både menn og kvinner?',
      options: ['Hankjønns flertall, f.eks. los hermanos', 'Hunkjønns flertall, f.eks. las hermanas', 'Begge formene samtidig', 'En egen felleskjønnsform'],
      explanation: 'Hankjønns flertall brukes som samlebetegnelse: los hijos = barna (sønner og døtre).',
    },
    {
      question: 'Hva betyr «Soy hijo único»?',
      options: ['Jeg er enebarn', 'Jeg er eneste sønn av ti barn', 'Jeg er adoptert', 'Jeg er den yngste'],
      explanation: 'Hijo único = enebarn (jente: hija única).',
    },
  ],

  'spansk-1-3-2': [
    {
      question: 'Hva er regelen for valg mellom "mi" og "mis"?',
      options: [
        'mi foran entall, mis foran flertall',
        'mi for hankjønn, mis for hunkjønn',
        'mi for personer, mis for ting',
        'mis er mer høflig enn mi',
      ],
      explanation: 'Eiendomsordet samsvarer i tall med substantivet: mi madre, mis hermanos. Kjønn spiller ingen rolle for mi/mis.',
    },
    {
      question: 'Hvilket eiendomsord bøyes også i kjønn?',
      options: ['nuestro', 'mi', 'tu', 'su'],
      explanation: 'Nuestro har fire former: nuestro, nuestra, nuestros, nuestras. Mi, tu og su bøyes bare i tall.',
    },
    {
      question: 'Hva er riktig: «vår bestemor»?',
      options: ['nuestra abuela', 'nuestro abuela', 'nuestras abuela', 'su abuela nosotros'],
      explanation: 'Abuela er hunkjønn entall, derfor nuestra abuela.',
    },
    {
      question: 'Hva kan "su padre" bety?',
      options: [
        'Hans, hennes, Deres eller deres far',
        'Bare hans far',
        'Bare Deres far (formelt)',
        'Min far',
      ],
      explanation: 'Su/sus er flertydig og kan vise til él, ella, usted eller ellos/ustedes — sammenhengen avgjør.',
    },
    {
      question: 'Eiendomsordet samsvarsbøyes med ...',
      options: ['substantivet det står til', 'eieren', 'verbet i setningen', 'subjektets alder'],
      explanation: 'Mis hermanas er flertall fordi hermanas er flertall — ikke fordi det er flere eiere.',
    },
  ],

  'spansk-1-3-3': [
    {
      question: 'Hva er riktig: «Mine søstre er høye»?',
      options: ['Mis hermanas son altas', 'Mis hermanas son altos', 'Mis hermanas es alta', 'Mi hermanas son altas'],
      explanation: 'Adjektivet samsvarer i kjønn og tall: hermanas (hunkjønn flertall) → altas, og verbet i flertall: son.',
    },
    {
      question: 'Hvordan lages flertall av adjektivet "joven"?',
      options: ['jóvenes (legg til -es)', 'jovens (legg til -s)', 'jovenas', 'joven (uendret)'],
      explanation: 'Adjektiver som ender på konsonant får -es i flertall: joven → jóvenes.',
    },
    {
      question: 'Hvorfor sier man «divertida e inteligente» og ikke «divertida y inteligente»?',
      options: [
        'y blir e foran ord som begynner på i- eller hi-',
        'e brukes alltid mellom to adjektiver',
        'e er hunkjønnsformen av y',
        'Det er en skrivefeil — y er riktig',
      ],
      explanation: 'Av lydhensyn endres y til e foran i-/hi-: divertida e inteligente.',
    },
    {
      question: 'Hva betyr "rubio/rubia"?',
      options: ['blond', 'rødhåret', 'mørkhåret', 'gammel'],
      explanation: 'Rubio = blond. Rødhåret = pelirrojo, mørkhåret = moreno, gammel = viejo.',
    },
    {
      question: 'Hva betyr "tímido"?',
      options: ['sjenert', 'morsom', 'kjedelig', 'sint'],
      explanation: 'Tímido = sjenert. Morsom = divertido, kjedelig = aburrido.',
    },
  ],

  'spansk-1-3-4': [
    {
      question: 'Hva er en god struktur for en familiepresentasjon?',
      options: [
        'Innledning → foreldre → søsken → andre → avslutning',
        'Avslutning → søsken → foreldre → innledning',
        'Bare en liste med navn',
        'Alder på alle → ha det',
      ],
      explanation: 'Man starter med seg selv, presenterer foreldre og søsken med navn/alder/beskrivelse, og avslutter personlig.',
    },
    {
      question: 'Hva betyr «Voy a presentar a mi familia»?',
      options: ['Jeg skal presentere familien min', 'Jeg presenterte familien min', 'Familien min presenterer meg', 'Jeg bor med familien min'],
      explanation: 'Voy a + infinitiv uttrykker nær framtid: Jeg skal presentere familien min.',
    },
    {
      question: 'Hva betyr «A la izquierda está mi padre»?',
      options: ['Til venstre er faren min', 'Til høyre er faren min', 'I midten er faren min', 'Bak er faren min'],
      explanation: 'A la izquierda = til venstre. Til høyre = a la derecha, i midten = en el centro.',
    },
    {
      question: 'Hvordan sier du at dere er fem i familien?',
      options: ['Somos cinco', 'Tenemos cinco', 'Estamos cinco familias', 'Hay cinco yo'],
      explanation: 'Man bruker ser i vi-form: Somos cinco (vi er fem).',
    },
    {
      question: '«Mi padre se llama Antonio. Tiene cuarenta y cinco años.» Hvor gammel er Antonio?',
      options: ['45 år', '54 år', '40 år', '55 år'],
      explanation: 'Cuarenta y cinco = 45.',
    },
  ],

  'spansk-1-4-1': [
    {
      question: 'Hvordan sier du «Klokka er ett»?',
      options: ['Es la una', 'Son las una', 'Es las uno', 'Son la una'],
      explanation: 'Bare klokka ett bruker entall: Es la una. Alle andre timer bruker Son las.',
    },
    {
      question: 'Hva betyr «Son las dos y media»?',
      options: ['Klokka er halv tre (2:30)', 'Klokka er halv to (1:30)', 'Klokka er kvart over to', 'Klokka er to og et minutt'],
      explanation: 'Y media = og halv, altså 2:30 — som på norsk er «halv tre».',
    },
    {
      question: 'Hvordan sier du «kvart på seks» (5:45)?',
      options: ['Son las seis menos cuarto', 'Son las cinco y cuarto', 'Son las seis y cuarto', 'Es la seis menos media'],
      explanation: 'Menos cuarto = minus kvart: man tar utgangspunkt i neste time, seis (6).',
    },
    {
      question: 'Hva betyr «¿Qué hora es?»',
      options: ['Hva er klokka?', 'Når begynner timen?', 'Hvilken time er det?', 'Hvor lenge varer det?'],
      explanation: '¿Qué hora es? er standardspørsmålet for å spørre om klokka.',
    },
    {
      question: 'Hvordan sier du 7:50 på spansk?',
      options: ['Son las ocho menos diez', 'Son las siete y cincuenta menos', 'Son las siete menos diez', 'Es la ocho menos diez'],
      explanation: 'Etter halv regner man fra neste time: ocho menos diez = ti på åtte = 7:50.',
    },
  ],

  'spansk-1-4-2': [
    {
      question: 'Hva heter onsdag på spansk?',
      options: ['miércoles', 'martes', 'jueves', 'viernes'],
      explanation: 'Miércoles = onsdag. Martes = tirsdag, jueves = torsdag, viernes = fredag.',
    },
    {
      question: 'Hva er forskjellen på «el lunes» og «los lunes»?',
      options: [
        'el lunes = på (en bestemt) mandag, los lunes = hver mandag',
        'el lunes = hver mandag, los lunes = neste mandag',
        'De betyr akkurat det samme',
        'los lunes er flertall av mandager i en måned',
      ],
      explanation: 'Bestemt entall (el lunes) peker på én bestemt mandag; flertall (los lunes) betyr «på mandager / hver mandag».',
    },
    {
      question: 'Hvordan skrives ukedagene på spansk?',
      options: ['Med liten forbokstav', 'Med stor forbokstav', 'Med stor forbokstav bare i starten av setninger', 'Alltid i flertall'],
      explanation: 'I motsetning til norsk praksis i mange sammenhenger skrives spanske ukedager alltid med liten forbokstav.',
    },
    {
      question: 'I dag er onsdag. Hva er riktig svar på «¿Qué día es mañana?»',
      options: ['Mañana es jueves', 'Mañana es martes', 'Mañana es miércoles', 'Ayer fue jueves'],
      explanation: 'Mañana = i morgen. Dagen etter onsdag (miércoles) er torsdag (jueves).',
    },
    {
      question: 'Hva betyr «el fin de semana»?',
      options: ['helgen', 'slutten av måneden', 'ukedagen', 'ferien'],
      explanation: 'El fin de semana = helgen (bokstavelig «slutten av uken»).',
    },
  ],

  'spansk-1-4-3': [
    {
      question: 'Hva heter januar på spansk?',
      options: ['enero', 'junio', 'julio', 'enero mayo'],
      explanation: 'Enero = januar. Junio = juni, julio = juli.',
    },
    {
      question: 'Hvilke måneder hører til «el verano» (sommeren)?',
      options: ['junio, julio, agosto', 'marzo, abril, mayo', 'septiembre, octubre, noviembre', 'diciembre, enero, febrero'],
      explanation: 'El verano = juni, juli, august. Våren = primavera, høsten = otoño, vinteren = invierno.',
    },
    {
      question: 'Hva er mønsteret for datoer på spansk?',
      options: ['el + tall + de + måned', 'måned + tall', 'de + måned + tall', 'tall + en + måned'],
      explanation: 'F.eks. el quince de mayo = 15. mai.',
    },
    {
      question: 'Hvordan sier du «Bursdagen min er 20. mars»?',
      options: [
        'Mi cumpleaños es el veinte de marzo',
        'Mi cumpleaños es marzo el veinte',
        'Mi cumpleaños está veinte marzo',
        'Tengo cumpleaños en veinte de marzo',
      ],
      explanation: 'Datomønsteret er el + tall + de + måned: el veinte de marzo.',
    },
    {
      question: 'Hva betyr «el otoño»?',
      options: ['høsten', 'våren', 'vinteren', 'sommeren'],
      explanation: 'El otoño = høsten. Våren = la primavera, vinteren = el invierno, sommeren = el verano.',
    },
  ],

  'spansk-1-4-4': [
    {
      question: 'Hva betyr «Me levanto a las siete»?',
      options: ['Jeg står opp klokka sju', 'Jeg legger meg klokka sju', 'Jeg spiser frokost klokka sju', 'Jeg løfter sju ting'],
      explanation: 'Levantarse er refleksivt: me levanto = jeg står opp.',
    },
    {
      question: 'Hvilket verb er refleksivt?',
      options: ['ducharse (å dusje)', 'desayunar (å spise frokost)', 'estudiar (å studere)', 'cenar (å spise middag)'],
      explanation: 'Ducharse bøyes med refleksivt pronomen: me ducho. Desayunar, estudiar og cenar er ikke refleksive.',
    },
    {
      question: 'Hva betyr «por la tarde»?',
      options: ['om ettermiddagen', 'om morgenen', 'om natten', 'for sent'],
      explanation: 'Por la tarde = om ettermiddagen. Om morgenen = por la mañana, om kvelden = por la noche.',
    },
    {
      question: 'Hva betyr «hacer los deberes»?',
      options: ['å gjøre lekser', 'å lage middag', 'å vaske huset', 'å gå på jobb'],
      explanation: 'Los deberes = leksene; hago los deberes = jeg gjør lekser.',
    },
    {
      question: 'Hvilket koblingsord betyr «til slutt»?',
      options: ['por último', 'primero', 'luego', 'después'],
      explanation: 'Por último = til slutt. Primero = først, luego = så, después = deretter.',
    },
  ],

  'spansk-1-5-1': [
    {
      question: 'Når bruker du «me gustan» i stedet for «me gusta»?',
      options: [
        'Når det du liker står i flertall',
        'Når du liker noe veldig godt',
        'Når du snakker formelt',
        'Når du snakker om mat',
      ],
      explanation: 'Gustar samsvarer med det som likes: Me gusta el queso (entall), me gustan las manzanas (flertall).',
    },
    {
      question: 'Hvordan sier du «Jeg er sulten»?',
      options: ['Tengo hambre', 'Soy hambre', 'Estoy hambre', 'Hay hambre'],
      explanation: 'Spansk bruker tener: Tengo hambre («jeg har sult»). Tørst: Tengo sed.',
    },
    {
      question: 'Hva betyr «la manzana»?',
      options: ['eple', 'appelsin', 'jordbær', 'banan'],
      explanation: 'La manzana = eple. Appelsin = la naranja, jordbær = la fresa, banan = el plátano.',
    },
    {
      question: 'Hva heter «middag/kveldsmat» på spansk?',
      options: ['la cena', 'el desayuno', 'el almuerzo', 'la merienda'],
      explanation: 'La cena = middag/kveldsmat. El desayuno = frokost, el almuerzo = lunsj, la merienda = mellommåltid.',
    },
    {
      question: 'Hvilket matord er et unntak fra artikkelreglene?',
      options: ['el agua (hankjønnsartikkel selv om det ender på -a)', 'la manzana', 'el queso', 'la patata'],
      explanation: 'Agua ender på -a men bruker artikkelen el: el agua. De andre følger hovedregelen.',
    },
  ],

  'spansk-1-5-2': [
    {
      question: 'Hva er den høflige måten å bestille på?',
      options: ['Quisiera...', 'Dame ya...', 'Yo como...', 'Tengo...'],
      explanation: 'Quisiera («jeg ville gjerne ha») er høfligere enn quiero.',
    },
    {
      question: 'Hva betyr «la cuenta»?',
      options: ['regningen', 'menyen', 'desserten', 'tipset'],
      explanation: 'La cuenta = regningen. Menyen = la carta/el menú, dessert = el postre, tips = la propina.',
    },
    {
      question: 'Hva betyr «De primero quiero sopa»?',
      options: ['Som forrett vil jeg ha suppe', 'Først og fremst liker jeg suppe', 'Den første suppen er min', 'Jeg vil ha suppe til dessert'],
      explanation: 'De primero = som forrett (el primer plato). Hovedrett: de segundo.',
    },
    {
      question: 'Hva heter kelneren på spansk?',
      options: ['el camarero', 'el cocinero', 'el cliente', 'el carnicero'],
      explanation: 'El camarero/la camarera = kelneren. Cocinero = kokk, cliente = kunde.',
    },
    {
      question: 'Hvordan ber du høflig om mer brød?',
      options: ['¿Me trae más pan, por favor?', '¡Pan ahora!', '¿Dónde es pan?', 'Yo soy más pan'],
      explanation: '¿Me trae más pan, por favor? = Kan du bringe meg mer brød, takk?',
    },
  ],

  'spansk-1-5-3': [
    {
      question: 'Hvordan sier du «en kilo poteter»?',
      options: ['un kilo de patatas', 'un kilo patatas', 'una kilo de patata', 'un kilo a patatas'],
      explanation: 'Mengdeord bindes til varen med de: un kilo de patatas, una botella de leche.',
    },
    {
      question: 'Hva heter bakeriet på spansk?',
      options: ['la panadería', 'la carnicería', 'la pescadería', 'la frutería'],
      explanation: 'La panadería = bakeriet (pan = brød). Carnicería = slakter, pescadería = fiskebutikk, frutería = fruktbutikk.',
    },
    {
      question: 'Hva betyr «Deme medio kilo, por favor»?',
      options: ['Gi meg en halv kilo, takk', 'Jeg vil ha en hel kilo, takk', 'Hvor mye koster en kilo?', 'Halvparten er til meg'],
      explanation: 'Deme = gi meg, medio kilo = en halv kilo.',
    },
    {
      question: 'Hva betyr «una docena de huevos»?',
      options: ['et dusin egg', 'en boks egg', 'tolv høner', 'en pakke egg'],
      explanation: 'Una docena = et dusin (12). Una lata = en boks, un paquete = en pakke.',
    },
    {
      question: '«Son cuatro euros con cincuenta» — hva er prisen?',
      options: ['4,50 euro', '4 euro og 15 cent', '45 euro', '54 euro'],
      explanation: 'Cuatro euros con cincuenta = 4 euro og 50 cent.',
    },
  ],

  'spansk-1-5-4': [
    {
      question: 'Hva er «la paella»?',
      options: [
        'En risrett med sjømat og kylling fra Valencia',
        'En kald tomatsuppe fra Andalucía',
        'En potetomelett',
        'Friterte smultringer med sjokolade',
      ],
      explanation: 'Paella er den kjente risretten fra Valencia. Gazpacho er den kalde tomatsuppen, tortilla española er potetomeletten.',
    },
    {
      question: 'Hva er «la sobremesa»?',
      options: [
        'Å bli sittende ved bordet og prate etter måltidet',
        'En spansk dessert',
        'Duken på bordet',
        'Et mellommåltid om ettermiddagen',
      ],
      explanation: 'La sobremesa er tradisjonen med å bli sittende og prate, gjerne i timevis, etter lunsj.',
    },
    {
      question: 'Når spiser spanjoler vanligvis middag (la cena)?',
      options: ['21:00-22:30', '17:00-18:00', '14:00-15:30', '12:00-13:00'],
      explanation: 'Spanjoler spiser sent: cena rundt 21-22.30. Lunsjen (la comida) er ca. 14-15.30 og er dagens hovedmåltid.',
    },
    {
      question: 'Hva betyr ordet «tapa» opprinnelig?',
      options: ['lokk', 'liten tallerken', 'smakebit', 'bar'],
      explanation: 'Tapa betyr «lokk» — bartendere skal ha lagt brød over glasset for å holde fluer unna.',
    },
    {
      question: 'Hvilke hovedingredienser har tortilla española?',
      options: ['egg, poteter og løk', 'tomater, agurk og brød', 'ris, sjømat og safran', 'kikerter og chorizo'],
      explanation: 'Tortilla española er en potetomelett: huevos, patatas og gjerne cebolla (løk).',
    },
  ],

  'spansk-1-6-1': [
    {
      question: 'Hva er spesielt med ordet "hay"?',
      options: [
        'Det betyr «det finnes» og er likt for entall og flertall',
        'Det bøyes i kjønn og tall',
        'Det brukes bare om personer',
        'Det er fortidsformen av ser',
      ],
      explanation: 'Hay er uforanderlig: Hay un jardín / Hay tres dormitorios.',
    },
    {
      question: 'Hva heter kjøkkenet på spansk?',
      options: ['la cocina', 'el comedor', 'el baño', 'el dormitorio'],
      explanation: 'La cocina = kjøkkenet. El comedor = spisestuen, el baño = badet, el dormitorio = soverommet.',
    },
    {
      question: 'Hva betyr «la planta baja»?',
      options: ['første etasje (bakkeplan)', 'kjelleren', 'øverste etasje', 'den lave planten'],
      explanation: 'La planta baja er bakkeplanet; el primer piso er etasjen over.',
    },
    {
      question: 'Hvilken artikkel brukes med "ventanas" (vinduer) i bestemt flertall?',
      options: ['las', 'los', 'la', 'el'],
      explanation: 'Ventana er hunkjønn; flertall bestemt artikkel er las: las ventanas.',
    },
    {
      question: 'Hvordan sier du «Det er ikke hage»?',
      options: ['No hay jardín', 'Hay no jardín', 'No es jardín', 'No está jardín'],
      explanation: 'Nektelse av hay: no hay jardín.',
    },
  ],

  'spansk-1-6-2': [
    {
      question: 'Hvilket verb brukes for å si hvor noe befinner seg?',
      options: ['estar', 'ser', 'tener', 'hay siempre'],
      explanation: 'Plassering uttrykkes med estar: El sofá está en el salón.',
    },
    {
      question: 'Hva betyr «debajo de»?',
      options: ['under', 'oppå', 'bak', 'mellom'],
      explanation: 'Debajo de = under. Sobre/encima de = oppå, detrás de = bak, entre = mellom.',
    },
    {
      question: 'Hva er riktig: «Katten er under bordet»?',
      options: [
        'El gato está debajo de la mesa',
        'El gato es debajo de la mesa',
        'El gato está sobre la mesa',
        'El gato hay debajo la mesa',
      ],
      explanation: 'Estar for plassering + debajo de: El gato está debajo de la mesa.',
    },
    {
      question: 'Hva heter sengen på spansk?',
      options: ['la cama', 'la mesa', 'la silla', 'el armario'],
      explanation: 'La cama = sengen. La mesa = bordet, la silla = stolen, el armario = skapet.',
    },
    {
      question: 'Hva betyr «al lado de»?',
      options: ['ved siden av', 'langt fra', 'foran', 'over'],
      explanation: 'Al lado de = ved siden av. Lejos de = langt fra, delante de = foran.',
    },
  ],

  'spansk-1-6-3': [
    {
      question: 'Hvilket uttrykk bruker du for å si hva som FINNES på rommet?',
      options: ['En mi habitación hay...', 'Mi habitación es...', 'La cama está...', 'Mi habitación tiene estar...'],
      explanation: 'Hay = det finnes. Es beskriver egenskaper, está beskriver plassering.',
    },
    {
      question: 'Hva er riktig: «et hvitt skap»?',
      options: ['un armario blanco', 'un armario blanca', 'una armario blanco', 'un blanco armario'],
      explanation: 'Armario er hankjønn → blanco, og fargen står etter substantivet.',
    },
    {
      question: 'Hva betyr «el escritorio»?',
      options: ['skrivebordet/pulten', 'skapet', 'speilet', 'teppet'],
      explanation: 'El escritorio = skrivebordet. Skapet = el armario, speilet = el espejo, teppet = la alfombra.',
    },
    {
      question: 'Hvordan sier du «Rommet mitt er lite, men pent»?',
      options: [
        'Mi habitación es pequeña, pero bonita',
        'Mi habitación está pequeña, pero bonita',
        'Mi habitación es pequeño, pero bonito',
        'Mi habitación hay pequeña y bonita',
      ],
      explanation: 'Egenskaper beskrives med ser, og habitación er hunkjønn: pequeña, bonita.',
    },
    {
      question: 'Hva betyr «Juego a videojuegos en el ordenador»?',
      options: [
        'Jeg spiller videospill på datamaskinen',
        'Jeg ser på TV på rommet',
        'Jeg jobber med datamaskinen',
        'Jeg leker med vennene mine',
      ],
      explanation: 'Jugar a videojuegos = å spille videospill; el ordenador = datamaskinen.',
    },
  ],

  'spansk-1-6-4': [
    {
      question: 'Hva er den vanligste boligtypen i spanske byer?',
      options: ['Leilighet (el piso)', 'Enebolig (la casa)', 'Villa (el chalet)', 'Rekkehus (el adosado)'],
      explanation: 'I Spania bor de fleste i pisos (leiligheter), spesielt i byene — i motsetning til Norge.',
    },
    {
      question: 'Hvordan bøyes "vivir" i jeg-form?',
      options: ['vivo', 'vives', 'vive', 'vivimos'],
      explanation: 'Vivo = jeg bor. Vives = du bor, vive = han/hun bor, vivimos = vi bor.',
    },
    {
      question: 'Hva betyr «Hay ascensor en el edificio»?',
      options: ['Det er heis i bygningen', 'Det er trapp i bygningen', 'Bygningen har balkong', 'Heisen er i ustand'],
      explanation: 'El ascensor = heisen, el edificio = bygningen.',
    },
    {
      question: 'Hva betyr «Mi barrio es tranquilo»?',
      options: ['Nabolaget mitt er rolig', 'Båten min er rask', 'Rommet mitt er ryddig', 'Byen min er stor'],
      explanation: 'El barrio = nabolaget, tranquilo = rolig.',
    },
    {
      question: 'Hva er vanlig i spanske boliger, men uvanlig i norske?',
      options: ['Aircondition', 'Sentralvarme', 'Stor hage', 'Peis'],
      explanation: 'Pga. det varme klimaet er aircondition svært vanlig i Spania, mens sentralvarme er sjeldnere.',
    },
  ],

  'spansk-1-7-1': [
    {
      question: 'Hva betyr "los pantalones"?',
      options: ['bukse', 'sko', 'skjorte', 'sokker'],
      explanation: 'Los pantalones = bukse (brukes i flertall på spansk). Sko = los zapatos, skjorte = la camisa, sokker = los calcetines.',
    },
    {
      question: 'Hva betyr "el abrigo"?',
      options: ['frakk/ytterjakke', 'genser', 'skjørt', 'belte'],
      explanation: 'El abrigo = frakk/ytterjakke. Genser = el jersey, skjørt = la falda, belte = el cinturón.',
    },
    {
      question: 'Hvilken artikkel hører til "vestido" (kjole)?',
      options: ['el', 'la', 'las', 'una'],
      explanation: 'Vestido ender på -o og er hankjønn: el vestido.',
    },
    {
      question: 'Hva heter solbriller på spansk?',
      options: ['las gafas de sol', 'los guantes de sol', 'el reloj de sol', 'la bufanda de sol'],
      explanation: 'Las gafas de sol = solbriller. Los guantes = hansker, el reloj = klokke, la bufanda = skjerf.',
    },
    {
      question: 'Hvilke plagg passer best når det er vinter?',
      options: [
        'el abrigo, la bufanda y los guantes',
        'los pantalones cortos y las gafas de sol',
        'el vestido y las zapatillas de playa',
        'la camiseta y la gorra de verano',
      ],
      explanation: 'Om vinteren trenger man frakk (abrigo), skjerf (bufanda) og hansker (guantes).',
    },
  ],

  'spansk-1-7-2': [
    {
      question: 'Hva betyr «¿Puedo probármelo?»',
      options: ['Kan jeg prøve det?', 'Kan jeg betale?', 'Kan jeg hjelpe deg?', 'Kan jeg få kvitteringen?'],
      explanation: 'Probarse = å prøve klær; ¿Puedo probármelo? spør du før du går i prøverommet (el probador).',
    },
    {
      question: 'Hva betyr «Me queda grande»?',
      options: ['Det er for stort', 'Det passer perfekt', 'Det er for dyrt', 'Jeg liker det godt'],
      explanation: 'Me queda grande = det er for stort (for meg). Me queda bien = det passer bra.',
    },
    {
      question: 'Hvordan spør du om butikken tar kort?',
      options: ['¿Aceptan tarjeta?', '¿Hay descuento?', '¿Dónde está la caja?', '¿Tiene recibo?'],
      explanation: '¿Aceptan tarjeta? = Tar dere kort? Kontant: ¿Puedo pagar en efectivo?',
    },
    {
      question: 'Hva betyr «las rebajas»?',
      options: ['salg/tilbud', 'kvitteringene', 'prøverommene', 'størrelsene'],
      explanation: 'Las rebajas = salget. Está de oferta = det er på tilbud.',
    },
    {
      question: 'Hva spør ekspeditøren om med «¿Qué talla tiene?»',
      options: ['Hvilken størrelse du har', 'Hvilken farge du vil ha', 'Hvor mye du vil betale', 'Hva du heter'],
      explanation: 'La talla = størrelsen. ¿De qué color? spør om fargen.',
    },
  ],

  'spansk-1-7-3': [
    {
      question: 'Hva er riktig: «blå bukser»?',
      options: ['los pantalones azules', 'los pantalones azuls', 'los pantalones azulos', 'el pantalón azules'],
      explanation: 'Azul får flertallsendelsen -es: azules. Fargen samsvarer i tall med pantalones.',
    },
    {
      question: 'Hvordan sier du at buksen er FOR lang?',
      options: ['El pantalón es demasiado largo', 'El pantalón es muy corto', 'El pantalón es más largo', 'El pantalón es poco largo'],
      explanation: 'Demasiado = for (mye): demasiado largo = for lang.',
    },
    {
      question: 'Hva betyr "estrecho"?',
      options: ['trang/smal', 'bred/vid', 'lang', 'stor'],
      explanation: 'Estrecho = trang/smal. Ancho = bred/vid, largo = lang, grande = stor.',
    },
    {
      question: 'Hva er riktig: «en hvit skjorte»?',
      options: ['una camisa blanca', 'una camisa blanco', 'un camisa blanca', 'una blanca camisa'],
      explanation: 'Camisa er hunkjønn → blanca, og fargen står etter substantivet.',
    },
    {
      question: 'Hvordan spør du om en større størrelse?',
      options: ['¿Tiene una talla más grande?', '¿Tiene una talla muy pequeña?', '¿Cuánto cuesta la talla?', '¿Hay tallas de color?'],
      explanation: 'Más grande = større: ¿Tiene una talla más grande?',
    },
  ],

  'spansk-1-7-4': [
    {
      question: 'Hva betyr verbet "llevar" når vi snakker om klær?',
      options: ['å ha på seg', 'å kjøpe', 'å vaske', 'å prøve'],
      explanation: 'Llevar = å ha på seg: Llevo una camiseta blanca.',
    },
    {
      question: 'Hva er riktig bøying: «Hun har på seg en rød kjole»?',
      options: ['Ella lleva un vestido rojo', 'Ella llevas un vestido rojo', 'Ella llevo un vestido rojo', 'Ella llevan un vestido rojo'],
      explanation: 'Tredje person entall av llevar er lleva. Llevo = jeg, llevas = du, llevan = de.',
    },
    {
      question: 'Hva betyr «Hace frío»?',
      options: ['Det er kaldt', 'Det er varmt', 'Det regner', 'Det er sol'],
      explanation: 'Hace frío = det er kaldt. Hace calor = varmt, llueve = det regner, hace sol = sol.',
    },
    {
      question: 'Hva har du på deg når det regner?',
      options: ['un impermeable y unas botas', 'unas gafas de sol y una gorra', 'unos pantalones cortos', 'una camiseta sin mangas'],
      explanation: 'El impermeable = regnjakke og las botas = støvler passer når det regner (cuando llueve).',
    },
    {
      question: 'Hva slags verb er "llevar"?',
      options: ['Et regelrett -ar-verb', 'Et uregelmessig verb', 'Et refleksivt verb', 'Et stammeskiftende verb (e→ie)'],
      explanation: 'Llevar følger den vanlige -ar-bøyningen: llevo, llevas, lleva, llevamos, lleváis, llevan.',
    },
  ],

  'spansk-1-8-1': [
    {
      question: 'Hva betyr "el recreo"?',
      options: ['friminuttet', 'klasserommet', 'leksen', 'eksamen'],
      explanation: 'El recreo = friminuttet. Klasserommet = el aula, leksene = los deberes.',
    },
    {
      question: 'Hva er spesielt med ordet "el aula" (klasserommet)?',
      options: [
        'Det er hunkjønn, men bruker el i entall',
        'Det er hankjønn, men bruker la',
        'Det bøyes ikke i flertall',
        'Det betyr egentlig «lærer»',
      ],
      explanation: 'Aula er hunkjønn, men får el i entall fordi ordet begynner på trykksterk a.',
    },
    {
      question: 'Hva betyr «Necesito un bolígrafo»?',
      options: ['Jeg trenger en penn', 'Jeg har mistet en blyant', 'Jeg vil låne en bok', 'Jeg leter etter et viskelær'],
      explanation: 'Necesitar = å trenge, el bolígrafo = pennen.',
    },
    {
      question: 'Hva heter ryggsekken på spansk?',
      options: ['la mochila', 'el estuche', 'la pizarra', 'la goma'],
      explanation: 'La mochila = sekken. El estuche = pennalet, la pizarra = tavlen, la goma = viskelæret.',
    },
    {
      question: 'Hva brukes "el instituto" spesielt om?',
      options: ['videregående skole', 'barnehage', 'universitetet', 'kveldsskole'],
      explanation: 'El colegio brukes om skole generelt, mens el instituto er videregående skole.',
    },
  ],

  'spansk-1-8-2': [
    {
      question: 'Hvorfor heter det «me gustan las matemáticas» men «me gusta la historia»?',
      options: [
        'Matemáticas er flertall, historia er entall',
        'Matematikk er vanskeligere enn historie',
        'Gustan brukes om fag man liker godt',
        'Det er valgfritt hvilken form man bruker',
      ],
      explanation: 'Gustar samsvarer med det som likes: las matemáticas (flertall) → gustan, la historia (entall) → gusta.',
    },
    {
      question: 'Hva betyr «la educación física»?',
      options: ['kroppsøving', 'fysikk', 'naturfag', 'helsefag'],
      explanation: 'La educación física (la E.F.) = kroppsøving.',
    },
    {
      question: 'Hva er riktig form: «Nosotros ___ un examen mañana»?',
      options: ['tenemos', 'tengo', 'tienen', 'tienes'],
      explanation: 'Tener i vi-form er tenemos. Tengo = jeg, tienes = du, tienen = de.',
    },
    {
      question: 'Hva betyr «Me encanta el arte»?',
      options: ['Jeg elsker kunst', 'Jeg liker ikke kunst', 'Jeg hater kunst', 'Jeg har kunst i dag'],
      explanation: 'Encantar er sterkere enn gustar: me encanta = jeg elsker. Odio = jeg hater.',
    },
    {
      question: 'Hva betyr "el horario"?',
      options: ['timeplanen', 'klokken', 'friminuttet', 'skoleåret'],
      explanation: 'El horario = timeplanen.',
    },
  ],

  'spansk-1-8-3': [
    {
      question: 'Hva er hunkjønnsformen av "el profesor"?',
      options: ['la profesora', 'la profesor', 'la profesista', 'la profesoria'],
      explanation: 'Yrker på -or får -ora i hunkjønn: el profesor → la profesora.',
    },
    {
      question: 'Hva er spesielt med yrker som ender på -ista (f.eks. periodista)?',
      options: [
        'Formen er lik for begge kjønn — bare artikkelen endres',
        'De brukes bare om kvinner',
        'De får -isto i hankjønn',
        'De bøyes ikke i flertall',
      ],
      explanation: 'El periodista / la periodista — samme form, bare el/la skiller kjønnene.',
    },
    {
      question: 'Hva er riktig: «Faren min er lege»?',
      options: ['Mi padre es médico', 'Mi padre es un médico', 'Mi padre está médico', 'Mi padre tiene médico'],
      explanation: 'Etter ser brukes IKKE ubestemt artikkel med yrker: Mi padre es médico.',
    },
    {
      question: 'Hva betyr «¿A qué te dedicas?»',
      options: ['Hva jobber du med?', 'Hva heter du?', 'Hvor bor du?', 'Hva studerer du?'],
      explanation: '¿A qué te dedicas? er det vanlige uformelle spørsmålet om yrke.',
    },
    {
      question: 'Hva betyr "la enfermera"?',
      options: ['sykepleier (kvinne)', 'lege (kvinne)', 'advokat (kvinne)', 'sekretær (kvinne)'],
      explanation: 'La enfermera = sykepleier. Lege = la médica, advokat = la abogada.',
    },
  ],

  'spansk-1-8-4': [
    {
      question: 'Hva betyr «Quiero ser médico»?',
      options: ['Jeg vil bli lege', 'Jeg er lege', 'Jeg kjenner en lege', 'Jeg trenger en lege'],
      explanation: 'Querer + ser + yrke = å ville bli: Quiero ser médico.',
    },
    {
      question: 'Hva slags verb er "querer"?',
      options: ['Stammeskiftende (e→ie)', 'Helt regelrett -er-verb', 'Refleksivt', 'Uforanderlig som hay'],
      explanation: 'Querer skifter stamme e→ie i de fleste former: quiero, quieres, quiere — men queremos, queréis.',
    },
    {
      question: 'Hva er forskjellen på «Quiero ser» og «Me gustaría ser»?',
      options: [
        'Quiero er sterk vilje, me gustaría er et høflig ønske',
        'Me gustaría er sterkere enn quiero',
        'Quiero brukes bare om yrker',
        'De kan ikke begge brukes om framtid',
      ],
      explanation: 'Me gustaría («jeg ville gjerne») er kondisjonalis og mykere enn quiero («jeg vil»).',
    },
    {
      question: 'Hvilken form av querer brukes med «nosotros»?',
      options: ['queremos', 'quieremos', 'quieren', 'quiero'],
      explanation: 'I nosotros- og vosotros-formene skifter ikke stammen: queremos, queréis.',
    },
    {
      question: 'Hva betyr «Sueño con ser futbolista»?',
      options: [
        'Jeg drømmer om å bli fotballspiller',
        'Jeg sover som en fotballspiller',
        'Jeg skal bli fotballspiller i morgen',
        'Jeg var fotballspiller',
      ],
      explanation: 'Soñar con + infinitiv = å drømme om å: Sueño con ser... = Jeg drømmer om å bli...',
    },
  ],

  'spansk-1-9-1': [
    {
      question: 'Hvordan sier du «Jeg reiser med buss»?',
      options: ['Voy en autobús', 'Voy a autobús', 'Voy con autobús', 'Soy en autobús'],
      explanation: 'Transportmiddel uttrykkes med ir en: Voy en autobús. Unntaket er til fots: voy a pie.',
    },
    {
      question: 'Hva er unntaket fra «ir en + transportmiddel»?',
      options: ['Voy a pie (til fots)', 'Voy en tren', 'Voy en metro', 'Voy en barco'],
      explanation: 'Når man går til fots, sier man a pie, ikke en pie.',
    },
    {
      question: 'Hva er riktig form: «Ella ___ en metro»?',
      options: ['va', 'voy', 'vas', 'vamos'],
      explanation: 'Ir bøyes uregelmessig: voy, vas, va, vamos, van. Tredje person entall er va.',
    },
    {
      question: 'Hva betyr «¿Dónde está la parada de autobús?»',
      options: ['Hvor er bussholdeplassen?', 'Når går bussen?', 'Hvor mye koster bussbilletten?', 'Hvilken buss går til sentrum?'],
      explanation: 'La parada = holdeplassen; ¿dónde está? = hvor er?',
    },
    {
      question: 'Hva betyr "el avión"?',
      options: ['flyet', 'toget', 'båten', 'bilen'],
      explanation: 'El avión = flyet. Toget = el tren, båten = el barco, bilen = el coche.',
    },
  ],

  'spansk-1-9-2': [
    {
      question: 'Hva betyr «Siga todo recto»?',
      options: ['Gå rett fram', 'Sving til høyre', 'Sving til venstre', 'Stopp ved krysset'],
      explanation: 'Todo recto = rett fram. Gire a la derecha/izquierda = sving til høyre/venstre.',
    },
    {
      question: 'Hva betyr "la farmacia"?',
      options: ['apoteket', 'banken', 'kirken', 'torget'],
      explanation: 'La farmacia = apoteket. Banken = el banco, kirken = la iglesia, torget = la plaza.',
    },
    {
      question: 'Hva betyr «enfrente de»?',
      options: ['overfor', 'bak', 'under', 'inni'],
      explanation: 'Enfrente de = overfor: La farmacia está enfrente del parque.',
    },
    {
      question: 'Hvordan spør du høflig om veien?',
      options: [
        'Perdone, ¿dónde está el banco?',
        '¡Oye! ¿Banco dónde?',
        '¿Eres el banco?',
        'Quiero el banco ahora',
      ],
      explanation: 'Start med Perdone (unnskyld) og bruk ¿dónde está...? for å spørre hvor noe er.',
    },
    {
      question: 'Hva betyr «Está en la esquina»?',
      options: ['Det er på hjørnet', 'Det er ved broen', 'Det er ved trafikklyset', 'Det er i krysset'],
      explanation: 'La esquina = hjørnet. El puente = broen, el semáforo = trafikklyset, el cruce = krysset.',
    },
  ],

  'spansk-1-9-3': [
    {
      question: 'Hvordan uttrykker du framtidige planer med «ir»?',
      options: ['ir + a + infinitiv: Voy a viajar', 'ir + infinitiv: Voy viajar', 'ir + de + infinitiv: Voy de viajar', 'ir + que + infinitiv: Voy que viajar'],
      explanation: 'Ir + a + infinitivo tilsvarer norsk «skal»: Voy a viajar a España = Jeg skal reise til Spania.',
    },
    {
      question: 'Hva betyr «¿Ida y vuelta?»',
      options: ['Tur-retur?', 'Bare én vei?', 'Første klasse?', 'Med plassbillett?'],
      explanation: 'Ida y vuelta = tur-retur. Bare én vei = solo ida.',
    },
    {
      question: 'Hva betyr "la maleta"?',
      options: ['kofferten', 'billetten', 'passet', 'kartet'],
      explanation: 'La maleta = kofferten. Billetten = el billete, passet = el pasaporte, kartet = el mapa.',
    },
    {
      question: 'Hvordan spør du når toget går?',
      options: ['¿A qué hora sale el tren?', '¿Cuánto cuesta el tren?', '¿Dónde vive el tren?', '¿De qué color es el tren?'],
      explanation: 'Salir = å gå/dra: ¿A qué hora sale el tren? = Når går toget?',
    },
    {
      question: 'Hva er riktig: «Vi skal besøke museet»?',
      options: ['Vamos a visitar el museo', 'Vamos visitar el museo', 'Voy a visitamos el museo', 'Vamos a visitamos el museo'],
      explanation: 'Riktig form av ir (vamos) + a + infinitiv (visitar).',
    },
  ],

  'spansk-1-9-4': [
    {
      question: 'Hva betyr «la habitación doble»?',
      options: ['dobbeltrom', 'enkeltrom', 'dobbeltseng', 'to nøkler'],
      explanation: 'Habitación doble = dobbeltrom. Enkeltrom = habitación individual.',
    },
    {
      question: 'Hvordan sier du at du har en reservasjon?',
      options: [
        'Tengo una reserva a nombre de García',
        'Soy una reserva de García',
        'Hay una reserva en García',
        'Estoy reserva García',
      ],
      explanation: 'Tengo una reserva a nombre de... = Jeg har en reservasjon i navnet...',
    },
    {
      question: 'Hva betyr «No funciona la ducha»?',
      options: ['Dusjen fungerer ikke', 'Det er ikke dusj på rommet', 'Dusjen er opptatt', 'Vannet er kaldt i dusjen'],
      explanation: 'No funciona... = ... fungerer ikke. La ducha = dusjen.',
    },
    {
      question: 'Hva betyr «Necesito más toallas»?',
      options: ['Jeg trenger flere håndklær', 'Jeg trenger flere puter', 'Jeg vil ha større rom', 'Jeg trenger mer såpe'],
      explanation: 'Necesitar = å trenge, las toallas = håndklærne.',
    },
    {
      question: 'Hva betyr «el desayuno incluido»?',
      options: ['frokost inkludert', 'middag inkludert', 'rengjøring inkludert', 'basseng inkludert'],
      explanation: 'El desayuno = frokosten; incluido = inkludert.',
    },
  ],

  'spansk-1-10-1': [
    {
      question: 'Hva brukes verbet "ser" til?',
      options: [
        'Faste egenskaper som nasjonalitet, yrke og personlighet',
        'Midlertidige tilstander som trøtthet og sykdom',
        'Plassering av ting og personer',
        'Å uttrykke alder',
      ],
      explanation: 'Ser brukes om det permanente: Soy noruego, es profesora. Midlertidige tilstander tar estar; alder tar tener.',
    },
    {
      question: 'Hva er riktig bøying av ser i «nosotros»-form?',
      options: ['somos', 'son', 'sois', 'semos'],
      explanation: 'Ser: soy, eres, es, somos, son.',
    },
    {
      question: 'Velg riktig verb: «Hoy Juan ___ enfermo» (I dag er Juan syk)',
      options: ['está', 'es', 'tiene', 'hay'],
      explanation: 'Sykdom er en midlertidig tilstand og tar estar: está enfermo.',
    },
    {
      question: 'Hva er riktig: «Bordet er av tre»?',
      options: ['La mesa es de madera', 'La mesa está de madera', 'La mesa tiene madera', 'La mesa hay madera'],
      explanation: 'Materiale uttrykkes med ser + de: es de madera.',
    },
    {
      question: 'Hvilken setning bruker ser RIKTIG?',
      options: ['María es española', 'María es cansada hoy', 'María es en Madrid ahora', 'María es 15 años'],
      explanation: 'Nasjonalitet tar ser. Trøtthet tar estar, plassering tar estar, alder tar tener.',
    },
  ],

  'spansk-1-10-2': [
    {
      question: 'Hva er «yo»-formen av tener?',
      options: ['tengo', 'tiene', 'teno', 'tengo que'],
      explanation: 'Tener er uregelmessig i jeg-form: tengo.',
    },
    {
      question: 'Hvordan sier du at du MÅ studere?',
      options: ['Tengo que estudiar', 'Tengo estudiar', 'Soy que estudiar', 'Quiero estudio'],
      explanation: 'Tener que + infinitiv = å måtte: Tengo que estudiar.',
    },
    {
      question: 'Hva betyr «Él tiene mucho sueño»?',
      options: ['Han er veldig søvnig', 'Han har mange drømmer', 'Han er veldig sulten', 'Han sover mye'],
      explanation: 'Tener sueño = å være søvnig; mucho forsterker: veldig søvnig.',
    },
    {
      question: 'Hvilket ord forsterker tener-uttrykk som «tengo hambre»?',
      options: ['mucho/mucha (tengo mucha hambre)', 'muy (tengo muy hambre)', 'más (tengo más de hambre)', 'tan (tengo tan hambre)'],
      explanation: 'Siden hambre er et substantiv, brukes mucho/mucha — ikke muy.',
    },
    {
      question: 'Hva er riktig: «Babyen er 6 måneder»?',
      options: ['El bebé tiene 6 meses', 'El bebé es 6 meses', 'El bebé está 6 meses', 'El bebé hay 6 meses'],
      explanation: 'Alder uttrykkes alltid med tener på spansk.',
    },
  ],

  'spansk-1-10-3': [
    {
      question: 'Hvilke tre grupper deles spanske verb inn i?',
      options: ['-ar, -er og -ir', '-ar, -or og -ur', '-a, -e og -i', '-er, -ir og -re'],
      explanation: 'Etter infinitivendelsen: hablar (-ar), comer (-er), vivir (-ir).',
    },
    {
      question: 'Hva er felles for ALLE regelmessige verb i «yo»-form?',
      options: ['Endelsen er alltid -o', 'Endelsen er alltid -a', 'Endelsen er alltid -e', 'Stammen dobles'],
      explanation: 'Uansett gruppe: hablo, como, vivo — alltid -o i jeg-form.',
    },
    {
      question: 'Hva er riktig bøying: «nosotros» + vivir?',
      options: ['vivimos', 'vivemos', 'vivamos', 'viven'],
      explanation: '-ir-verb får -imos i vi-form: vivimos. -er-verb får -emos (comemos).',
    },
    {
      question: 'Hva er riktig: «Hun bor i Madrid»?',
      options: ['Ella vive en Madrid', 'Ella vivo en Madrid', 'Ella vives en Madrid', 'Ella viva en Madrid'],
      explanation: 'Tredje person entall av vivir er vive.',
    },
    {
      question: 'Hvor skiller endelsene til -er- og -ir-verb seg?',
      options: ['Bare i nosotros-formen (-emos vs -imos)', 'I alle former', 'Bare i yo-formen', 'De er helt like'],
      explanation: '-er og -ir har like endelser bortsett fra nosotros: comemos men vivimos.',
    },
  ],

  'spansk-1-10-4': [
    {
      question: 'Fyll inn: «Nosotros ___ a la playa» (ir)',
      options: ['vamos', 'imos', 'van', 'vais'],
      explanation: 'Ir i vi-form er vamos: Vamos a la playa = Vi drar til stranden.',
    },
    {
      question: 'Hvilket verb brukes om alder, hvilket om nasjonalitet?',
      options: [
        'tener om alder, ser om nasjonalitet',
        'ser om alder, tener om nasjonalitet',
        'estar om begge',
        'tener om begge',
      ],
      explanation: 'Tengo 16 años (alder med tener), soy noruego (nasjonalitet med ser).',
    },
    {
      question: 'Hva er riktig: «ella» + comer?',
      options: ['come', 'comes', 'como', 'coma'],
      explanation: 'Tredje person entall av -er-verb får -e: ella come.',
    },
    {
      question: 'Hva betyr «¡Felicidades!»?',
      options: ['Gratulerer!', 'Lykke til!', 'God ferie!', 'Velkommen!'],
      explanation: 'Felicidades = gratulerer.',
    },
    {
      question: 'Hva betyr «Un billete a Madrid, por favor»?',
      options: [
        'En billett til Madrid, takk',
        'En koffert til Madrid, takk',
        'Hvor mye koster Madrid?',
        'Når går toget til Madrid?',
      ],
      explanation: 'El billete = billetten; a Madrid = til Madrid.',
    },
  ],

  'spansk-1-11-1': [
    {
      question: 'I omtrent hvor mange land er spansk offisielt språk?',
      options: ['Over 20', 'Cirka 10', 'Cirka 5', 'Over 50'],
      explanation: 'Spansk er offisielt språk i mer enn 20 land på fire kontinenter, med over 500 millioner morsmålsbrukere.',
    },
    {
      question: 'Hva betyr "hispanohablante"?',
      options: ['spansktalende', 'spanskfødt', 'latinamerikansk', 'tospråklig'],
      explanation: 'Hispanohablante = spansktalende, om både personer og land.',
    },
    {
      question: 'Hva er hovedstaden i Peru?',
      options: ['Lima', 'Bogotá', 'Quito', 'La Paz'],
      explanation: 'Lima er Perus hovedstad. Bogotá = Colombia, Quito = Ecuador.',
    },
    {
      question: 'María es de Colombia. Ella es ______.',
      options: ['colombiana', 'colombiano', 'colombianas', 'Colombia'],
      explanation: 'Nasjonaliteten samsvarer med kjønn og tall: María (kvinne, entall) → colombiana.',
    },
    {
      question: 'Hva er spesielt med nasjonaliteter som ender på -ense (f.eks. costarricense)?',
      options: [
        'De er like i hankjønn og hunkjønn',
        'De brukes bare om menn',
        'De finnes ikke i flertall',
        'De skrives alltid med stor forbokstav',
      ],
      explanation: 'Costarricense, nicaragüense og estadounidense har samme form for begge kjønn.',
    },
  ],

  'spansk-1-11-2': [
    {
      question: 'Hvor mange autonome regioner (comunidades autónomas) har Spania?',
      options: ['17', '10', '25', '50'],
      explanation: 'Spania er delt inn i 17 comunidades autónomas, hver med eget regionalt parlament.',
    },
    {
      question: 'Hvilke regionale språk snakkes i Spania i tillegg til castellano?',
      options: ['catalán, gallego og euskera', 'portugisisk, fransk og italiensk', 'baskisk, arabisk og latin', 'valenciano, andaluz og madrileño'],
      explanation: 'Catalán (Cataluña), gallego (Galicia) og euskera (Baskerland) er egne språk, ikke dialekter.',
    },
    {
      question: 'Hvilken by er kjent for Gaudís arkitektur og La Sagrada Familia?',
      options: ['Barcelona', 'Madrid', 'Sevilla', 'Bilbao'],
      explanation: 'Barcelona, hovedstaden i Cataluña, er kjent for Gaudí. Sevilla er kjent for flamenco.',
    },
    {
      question: 'I hvilken region ligger Sevilla?',
      options: ['Andalucía', 'Cataluña', 'País Vasco', 'Galicia'],
      explanation: 'Sevilla er hovedstaden i Andalucía sør i Spania.',
    },
    {
      question: 'Hva betyr «España está en el sur de Europa»?',
      options: ['Spania ligger i Sør-Europa', 'Spania er sør for Europa', 'Spania har kyster i sør', 'Spania er solrikt'],
      explanation: 'Está en = ligger i; el sur de Europa = Sør-Europa.',
    },
  ],

  'spansk-1-11-3': [
    {
      question: 'Hvilket er det største spansktalende landet i verden etter folketall?',
      options: ['Mexico', 'Spania', 'Argentina', 'Colombia'],
      explanation: 'Mexico har ca. 130 millioner innbyggere og er det største spansktalende landet.',
    },
    {
      question: 'Når feires El Día de los Muertos?',
      options: ['1.-2. november', '24.-25. desember', 'I påskeuken', '5. mai'],
      explanation: 'De dødes dag feires 1. og 2. november i Mexico.',
    },
    {
      question: 'Hvilket mellomamerikansk land har IKKE spansk som offisielt språk?',
      options: ['Belize', 'Guatemala', 'Honduras', 'Panamá'],
      explanation: 'I Belize er engelsk offisielt språk; de seks andre mellomamerikanske landene er spansktalende.',
    },
    {
      question: 'Hva er hovedstaden i Costa Rica?',
      options: ['San José', 'San Salvador', 'Managua', 'Tegucigalpa'],
      explanation: 'San José = Costa Rica. San Salvador = El Salvador, Managua = Nicaragua, Tegucigalpa = Honduras.',
    },
    {
      question: 'Hvilken sivilisasjon etterlot seg ruiner i Mexico, Guatemala og Honduras?',
      options: ['Maya-sivilisasjonen', 'Inka-sivilisasjonen', 'Romerriket', 'Vikingene'],
      explanation: 'Mayaene hadde en avansert sivilisasjon i regionen, med ruiner som Chichén Itzá.',
    },
  ],

  'spansk-1-11-4': [
    {
      question: 'Hvor mange spansktalende land har Sør-Amerika?',
      options: ['9', '12', '6', '15'],
      explanation: 'Ni av tolv land er spansktalende; Brasil (portugisisk), Guyana (engelsk) og Surinam (nederlandsk) er unntakene.',
    },
    {
      question: 'Hva brukes i Sør-Amerika i stedet for «vosotros»?',
      options: ['ustedes', 'vos', 'nosotros', 'ellos'],
      explanation: 'I Latin-Amerika sier man ustedes for «dere», ikke vosotros som i Spania.',
    },
    {
      question: 'I hvilke land bruker man «vos» i stedet for «tú»?',
      options: ['Argentina og Uruguay', 'Spania og Mexico', 'Peru og Bolivia', 'Colombia og Venezuela'],
      explanation: 'I Argentina og Uruguay sier man f.eks. «Vos sos argentino» i stedet for «Tú eres argentino».',
    },
    {
      question: 'Hva er Argentina spesielt kjent for?',
      options: ['Tango, asado og fotball', 'Machu Picchu og ceviche', 'Galápagosøyene', 'Salar de Uyuni'],
      explanation: 'Argentina: tango og asado. Machu Picchu/ceviche = Peru, Galápagos = Ecuador, Salar de Uyuni = Bolivia.',
    },
    {
      question: 'Hvilket land har to hovedsteder (Sucre og La Paz)?',
      options: ['Bolivia', 'Chile', 'Paraguay', 'Ecuador'],
      explanation: 'Bolivia har Sucre som konstitusjonell hovedstad og La Paz som regjeringssete.',
    },
  ],

  'spansk-1-12-1': [
    {
      question: 'Hvor kommer flamenco fra?',
      options: ['Andalucía i Sør-Spania', 'Puerto Rico', 'Argentina', 'Colombia'],
      explanation: 'Flamenco er en kunstform fra Andalucía som kombinerer cante (sang), baile (dans) og guitarra.',
    },
    {
      question: 'Hvor oppsto reggaeton?',
      options: ['Puerto Rico', 'Spania', 'Mexico', 'Chile'],
      explanation: 'Reggaeton kommer fra Puerto Rico; Bad Bunny er en kjent artist i sjangeren.',
    },
    {
      question: 'Hvilken musikksjanger kommer fra Argentina?',
      options: ['tango', 'cumbia', 'salsa', 'mariachi'],
      explanation: 'Tango = Argentina. Cumbia = Colombia, salsa = Cuba/New York, mariachi = Mexico.',
    },
    {
      question: 'Hva betyr verbet "tocar" i musikk-sammenheng?',
      options: ['å spille (et instrument)', 'å synge', 'å danse', 'å lytte'],
      explanation: 'Tocar la guitarra = å spille gitar. Cantar = synge, bailar = danse, escuchar = lytte.',
    },
    {
      question: 'Hva er «el tablao»?',
      options: ['Et sted der man framfører flamenco', 'En flamenco-gitar', 'Klappingen i flamenco', 'En tradisjonell dans'],
      explanation: 'El tablao er scenen/stedet for flamenco. Las palmas = klapping, el zapateado = fotarbeid.',
    },
  ],

  'spansk-1-12-2': [
    {
      question: 'Hvilken spansk regissør lagde «Todo sobre mi madre» og «Volver»?',
      options: ['Pedro Almodóvar', 'Guillermo del Toro', 'Alfonso Cuarón', 'Carlos Gardel'],
      explanation: 'Almodóvar er Spanias mest kjente regissør. Del Toro og Cuarón er meksikanske.',
    },
    {
      question: 'Hva betyr "la película"?',
      options: ['filmen', 'skuespilleren', 'kinoen', 'billetten'],
      explanation: 'La película = filmen. El cine = kinoen, la entrada = billetten.',
    },
    {
      question: 'Hva betyr «los subtítulos»?',
      options: ['undertekstene', 'overskriftene', 'rulleteksten', 'manuset'],
      explanation: 'Los subtítulos = undertekstene. Manuset = el guion.',
    },
    {
      question: 'Hva handler Pixar-filmen «Coco» om?',
      options: ['Día de los Muertos i Mexico', 'La Tomatina i Spania', 'Tango i Argentina', 'Inkaene i Peru'],
      explanation: 'Coco (2017) handler om De dødes dag og er fin for å øve spansk.',
    },
    {
      question: 'Hvordan spør du «Vil du gå på kino?»',
      options: ['¿Quieres ir al cine?', '¿Vas el cine?', '¿Eres al cine?', '¿Tienes cine?'],
      explanation: 'Querer + ir + al cine: ¿Quieres ir al cine?',
    },
  ],

  'spansk-1-12-3': [
    {
      question: 'Hvem skrev «Don Quijote de la Mancha»?',
      options: ['Miguel de Cervantes', 'Gabriel García Márquez', 'Pablo Neruda', 'Isabel Allende'],
      explanation: 'Cervantes publiserte Don Quijote i 1605 — regnet som den første moderne romanen.',
    },
    {
      question: 'Hva er «Mafalda»?',
      options: [
        'En argentinsk tegneserie skapt av Quino',
        'En spansk roman fra 1605',
        'En meksikansk høytid',
        'En chilensk diktsamling',
      ],
      explanation: 'Mafalda er den argentinske tegneserien om en liten jente som stiller store samfunnsspørsmål.',
    },
    {
      question: 'Hvilken colombiansk forfatter vant Nobelprisen i 1982?',
      options: ['Gabriel García Márquez', 'Pablo Neruda', 'Miguel de Cervantes', 'Quino'],
      explanation: 'García Márquez, kjent for «Cien años de soledad», vant Nobelprisen i litteratur i 1982. Neruda (Chile) vant i 1971.',
    },
    {
      question: 'Hva betyr "el cuento"?',
      options: ['fortellingen/novellen', 'boken', 'diktet', 'forfatteren'],
      explanation: 'El cuento = fortellingen. El libro = boken, el poema = diktet, el escritor = forfatteren.',
    },
    {
      question: 'Hva betyr uttrykket «luchar contra molinos de viento»?',
      options: [
        'Å kjempe mot innbilte fiender',
        'Å arbeide i motvind',
        'Å bygge vindmøller',
        'Å reise gjennom La Mancha',
      ],
      explanation: 'Uttrykket «å kjempe mot vindmøller» kommer fra Don Quijote og betyr å kjempe mot innbilte fiender.',
    },
  ],

  'spansk-1-12-4': [
    {
      question: 'Hva kjennetegner El Día de los Muertos?',
      options: [
        'En fargerik feiring for å hedre de avdøde',
        'En sorgens dag med svarte klær',
        'En tomatkrig i gatene',
        'Et okseløp gjennom byen',
      ],
      explanation: 'De dødes dag i Mexico er en fargerik feiring med ofrendas, calaveras og cempasúchil-blomster.',
    },
    {
      question: 'Hvor feires La Tomatina?',
      options: ['Buñol (Valencia)', 'Pamplona', 'Sevilla', 'Madrid'],
      explanation: 'La Tomatina er tomatkrigen i Buñol. Okseløpet San Fermín er i Pamplona, Feria de Abril i Sevilla.',
    },
    {
      question: 'Hva er «La Quinceañera»?',
      options: [
        'Feiringen av en jentes 15-årsdag',
        'En femten dager lang festival',
        'En meksikansk dans',
        'Et offeralter med blomster',
      ],
      explanation: 'La Quinceañera er den store feiringen av jenters 15-årsdag i Latin-Amerika.',
    },
    {
      question: 'Hva er «las ofrendas» under Día de los Muertos?',
      options: [
        'Offeraltere med mat, blomster og bilder av avdøde',
        'Dekorerte hodeskaller',
        'Oransje ringblomster',
        'Et spesielt brød',
      ],
      explanation: 'Ofrendas er alterne. Calaveras = hodeskaller, flores de cempasúchil = blomstene, pan de muerto = brødet.',
    },
    {
      question: 'Hva er Semana Santa-feiringen i Sevilla kjent for?',
      options: [
        'Enorme prosesjoner med religiøse figurer (pasos)',
        'Gatetepper av sagflis',
        'Fyrverkeri og papirfigurer som brennes',
        'Karneval med kostymer',
      ],
      explanation: 'I Sevilla bæres pasos gjennom gatene. Alfombras (gatetepper) er typisk for Guatemala.',
    },
  ],
  'spansk-1-13-1': [
    {
      question: 'Hva betyr "el primer plato" på en spansk meny?',
      options: ['Første rett', 'Dessert', 'Drikke', 'Regningen'],
      explanation: 'Spanske menyer deles inn i entrantes, primer plato, segundo plato, postres og bebidas. "Primer plato" er første rett.',
    },
    {
      question: 'Hva er "la tortilla española"?',
      options: [
        'Spansk omelett med potet',
        'En kald tomatsuppe',
        'Friterte deigstenger med sukker',
        'Lufttørket skinke',
      ],
      explanation: 'Tortilla española er en spansk omelett laget med egg og potet. Gazpacho er den kalde tomatsuppen.',
    },
    {
      question: 'Hva er "tapas"?',
      options: ['Smaretter', 'En hovedrett', 'En dessert', 'En type drikke'],
      explanation: 'Tapas er smaretter, en viktig del av spansk matkultur. Ordet betyr opprinnelig "lokk".',
    },
    {
      question: 'Hva betyr "La cuenta, por favor"?',
      options: ['Regningen, takk', 'Menyen, takk', 'Mer vann, takk', 'En til, takk'],
      explanation: '"La cuenta" er regningen. "La carta" er menyen.',
    },
    {
      question: 'Hva er "el gazpacho"?',
      options: [
        'Kald tomatsuppe',
        'Risrett med skalldyr',
        'Stekte poteter med krydret saus',
        'Friterte deigstenger',
      ],
      explanation: 'Gazpacho er en kald tomatsuppe. Paella er risretten, patatas bravas er de stekte potetene.',
    },
  ],
  'spansk-1-13-2': [
    {
      question: 'Hva betyr "la salida" på en rutetabell?',
      options: ['Avgang', 'Ankomst', 'Plattform', 'Forsinkelse'],
      explanation: '"Salida" = avgang, "llegada" = ankomst, "andén" = plattform, "retraso" = forsinkelse.',
    },
    {
      question: 'Hva betyr "ida y vuelta"?',
      options: ['Tur-retur', 'Enveis', 'Første klasse', 'Forsinkelse'],
      explanation: '"Ida" = enveis, "ida y vuelta" = tur-retur.',
    },
    {
      question: 'Hva er AVE i Spania?',
      options: [
        'Høyhastighetstoget (Alta Velocidad Española)',
        'Et busselskap',
        'En flyplass',
        'En billettype for barn',
      ],
      explanation: 'AVE står for Alta Velocidad Española, Spanias høyhastighetstog.',
    },
    {
      question: 'Hva er det vanligste transportmiddelet for lange reiser i Latin-Amerika?',
      options: ['Buss', 'Tog', 'Trikk', 'Ferje'],
      explanation: 'I Latin-Amerika er buss vanligst for lange reiser, mens Spania har et godt tognettverk (Renfe).',
    },
    {
      question: 'Hva spør du med "¿A qué hora sale el tren?"',
      options: [
        'Når går toget?',
        'Hvor mye koster billetten?',
        'Hvor lang tid tar reisen?',
        'Fra hvilken plattform går toget?',
      ],
      explanation: '"¿A qué hora sale?" betyr "Når går det?". "¿Cuánto tarda?" spør om varigheten.',
    },
  ],
  'spansk-1-13-3': [
    {
      question: 'Hva betyr forkortelsen "hab." i en boligannonse?',
      options: ['Rom/soverom', 'Bad', 'Kjøkken', 'Møblert'],
      explanation: '"hab." står for habitación = rom/soverom.',
    },
    {
      question: 'Hva betyr "Se alquila"?',
      options: ['Til leie', 'Til salgs', 'Solgt', 'Møblert'],
      explanation: '"Se alquila" = til leie, "se vende" = til salgs.',
    },
    {
      question: 'Hva betyr "amueblado" i en boligannonse?',
      options: ['Møblert', 'Umøblert', 'Nyoppusset', 'Sentralt'],
      explanation: '"Amueblado" = møblert, "sin amueblar" = umøblert.',
    },
    {
      question: 'Hva betyr "jornada completa" i en jobbannonse?',
      options: ['Heltid', 'Deltid', 'Erfaring kreves', 'God lønn'],
      explanation: '"Jornada completa" = heltid, "media jornada" = deltid.',
    },
    {
      question: 'Hva betyr "Se busca" i en jobbannonse?',
      options: ['Søkes/trenger', 'Krav', 'Lønn', 'Umiddelbar oppstart'],
      explanation: '"Se busca" eller "se necesita" betyr at man søker etter / trenger noen.',
    },
  ],
  'spansk-1-13-4': [
    {
      question: 'Hva betyr "el corazón" i spansk poesi?',
      options: ['Hjertet', 'Sjelen', 'Drømmen', 'Månen'],
      explanation: '"El corazón" = hjertet, "el alma" = sjelen, "el sueño" = drømmen.',
    },
    {
      question: 'Hva betyr "la luna"?',
      options: ['Månen', 'Solen', 'Stjernen', 'Havet'],
      explanation: '"La luna" = månen, "el sol" = solen, "la estrella" = stjernen.',
    },
    {
      question: 'Hva uttrykker diminutiven "-ito/-ita"?',
      options: [
        'At noe er lite eller søtt',
        'At noe er stort',
        'Flertall',
        'Fortid',
      ],
      explanation: 'Diminutiven -ito/-ita betyr at noe er lite eller kjært, f.eks. casita = lite hus.',
    },
    {
      question: 'Hva blir "perro" (hund) med diminutiv?',
      options: ['perrito', 'perrino', 'perrillo', 'perrón'],
      explanation: 'Diminutiven av perro er perrito (liten hund / bisk).',
    },
    {
      question: 'Hvorfor er sangtekster nyttige for språklæring?',
      options: [
        'De hjelper med uttale, vokabular, grammatikk og kultur',
        'De er alltid grammatisk perfekte',
        'De inneholder kun vanlige ord',
        'De er kortere enn dikt',
      ],
      explanation: 'Sangtekster gir uttaletrening, nytt vokabular i kontekst, naturlig grammatikk og kulturkjennskap.',
    },
  ],
  'spansk-1-14-1': [
    {
      question: 'Hvordan uttales bokstaven "h" på spansk?',
      options: ['Den er stum', 'Som norsk h', 'Som j', 'Som ch'],
      explanation: 'H er alltid stum på spansk: "hola" uttales "ola".',
    },
    {
      question: 'Hvordan uttales spansk "ñ"?',
      options: ['Som «nj» på norsk', 'Som vanlig «n»', 'Som «ng»', 'Den er stum'],
      explanation: 'Ñ uttales som «nj», f.eks. España (Espanja).',
    },
    {
      question: 'Hva er forskjellen på "r" og "rr" på spansk?',
      options: [
        'rr er en rulle-r med flere slag, r har ett lett slag',
        'De uttales helt likt',
        'rr er stum',
        'r uttales som norsk r',
      ],
      explanation: 'Enkel r har ett lett slag (pero = men), dobbel rr er rulle-r (perro = hund). Forskjellen kan endre betydningen.',
    },
    {
      question: 'Hvordan uttales vokalene på spansk?',
      options: [
        'Alltid korte og klare',
        'Som lange norske vokaler',
        'Ofte stumme',
        'De varierer mye fra ord til ord',
      ],
      explanation: 'Spanske vokaler (a, e, i, o, u) er alltid korte og klare, uten lange eller stumme varianter.',
    },
    {
      question: 'Hvordan uttales "g" foran e/i på spansk, som i "gente"?',
      options: [
        'Som spansk j (sterk h-lyd)',
        'Som norsk g',
        'Som k',
        'Den er stum',
      ],
      explanation: 'Foran e/i uttales g som en sterk h-lyd (som j). Foran a/o/u uttales den som norsk g.',
    },
  ],
  'spansk-1-14-2': [
    {
      question: 'Hvilken hilsen brukes om morgenen?',
      options: ['¡Buenos días!', '¡Buenas tardes!', '¡Buenas noches!', '¡Hasta luego!'],
      explanation: '"Buenos días" brukes om morgenen, "buenas tardes" om ettermiddagen, "buenas noches" om kvelden.',
    },
    {
      question: 'Hva betyr "¿Cuánto cuesta?"',
      options: ['Hvor mye koster det?', 'Hvor er det?', 'Hva heter du?', 'Hva ønsker du?'],
      explanation: '"¿Cuánto cuesta?" eller "¿Cuánto es?" betyr "Hvor mye koster det?".',
    },
    {
      question: 'Hva betyr "Siga recto"?',
      options: ['Gå rett fram', 'Sving til høyre', 'Sving til venstre', 'Snu'],
      explanation: '"Siga recto" = gå rett fram, "gire a la derecha/izquierda" = sving til høyre/venstre.',
    },
    {
      question: 'Hvilket uttrykk bruker du for å bestille dessert?',
      options: ['De postre quiero helado.', 'De primero quiero la sopa.', 'La cuenta, por favor.', '¿Dónde está?'],
      explanation: '"De postre" = til dessert, "de primero" = til forrett, "de segundo" = til hovedrett.',
    },
    {
      question: 'Hvordan spør du om veien til et sted?',
      options: ['¿Cómo llego a...?', '¿Cuánto cuesta?', '¿Qué desea?', '¿Cómo te llamas?'],
      explanation: '"¿Cómo llego a...?" = "Hvordan kommer jeg til...?". "¿Dónde está...?" = "Hvor er...?".',
    },
  ],
  'spansk-1-14-3': [
    {
      question: 'Hva er riktig rekkefølge i en presentasjon?',
      options: [
        'Innledning - Hoveddel - Avslutning',
        'Avslutning - Hoveddel - Innledning',
        'Hoveddel - Innledning - Avslutning',
        'Innledning - Avslutning - Hoveddel',
      ],
      explanation: 'En god presentasjon har introducción, desarrollo og conclusión i den rekkefølgen.',
    },
    {
      question: 'Hvordan innleder du en presentasjon?',
      options: ['Hoy voy a hablar de...', 'Ayer hablé de...', 'Mañana voy a hablar de...', '¡Gracias por escuchar!'],
      explanation: '"Hoy voy a hablar de..." = "I dag skal jeg snakke om...". Avslutning: "¡Gracias por escuchar!".',
    },
    {
      question: 'Hva betyr "Me encanta"?',
      options: ['Jeg elsker', 'Jeg liker litt', 'Jeg hater', 'Jeg kjenner'],
      explanation: '"Me encanta" = jeg elsker / er veldig glad i. Sterkere enn "me gusta".',
    },
    {
      question: 'Hvordan sier du "Jeg er ... år gammel" på spansk?',
      options: ['Tengo ... años.', 'Soy ... años.', 'Estoy ... años.', 'Hago ... años.'],
      explanation: 'På spansk bruker man tener (å ha) om alder: "Tengo 16 años" = jeg er 16 år.',
    },
    {
      question: 'Hvilket bindeord betyr "først"?',
      options: ['Primero', 'Luego', 'Además', 'Al final'],
      explanation: '"Primero" = først, "luego/después" = så/etterpå, "al final/por último" = til slutt.',
    },
  ],
  'spansk-1-14-4': [
    {
      question: 'Hva betyr "Tengo una reserva a nombre de..."?',
      options: [
        'Jeg har en reservasjon i navnet...',
        'Jeg vil bestille et rom',
        'For hvor mange netter?',
        'Hvor er heisen?',
      ],
      explanation: '"Tengo una reserva a nombre de..." = "Jeg har en reservasjon i navnet...".',
    },
    {
      question: 'Hva betyr "un billete de ida y vuelta"?',
      options: ['En tur-returbillett', 'En enveisbillett', 'Et boardingkort', 'En bussbillett'],
      explanation: '"De ida y vuelta" = tur-retur, "de ida" = enveis.',
    },
    {
      question: 'Hvordan sier du "Jeg har vondt i hodet" hos legen?',
      options: ['Me duele la cabeza.', 'Tengo cabeza.', 'La cabeza no funciona.', 'Mi cabeza es mala.'],
      explanation: '"Me duele la cabeza" = "Jeg har vondt i hodet". Verbet doler bøyes som gustar.',
    },
    {
      question: 'Hva betyr "Tengo fiebre"?',
      options: ['Jeg har feber', 'Jeg er forkjølet', 'Jeg har hoste', 'Jeg føler meg ikke bra'],
      explanation: '"Tengo fiebre" = jeg har feber. "Estoy resfriado/a" = jeg er forkjølet.',
    },
    {
      question: 'Hva sier du til noen som er syk for å ønske dem god bedring?',
      options: ['¡Que te mejores! (God bedring!)', '¡Buena suerte! (Lykke til!)', '¡Bienvenido! (Velkommen!)', '¡Adiós! (Ha det!)'],
      explanation: '"¡Que te mejores!" eller "¡Que te recuperes!" betyr "God bedring!".',
    },
  ],
  'spansk-1-15-1': [
    {
      question: 'Hvilken hilsen passer i en formell e-post?',
      options: [
        'Estimado señor García:',
        '¡Hola, María!',
        '¿Qué tal?',
        'Querido amigo,',
      ],
      explanation: '"Estimado/a señor/a" brukes i formelle e-poster. "¡Hola!" og "Querido/a" er uformelt.',
    },
    {
      question: 'Hvordan avslutter du en formell e-post på spansk?',
      options: ['Atentamente', 'Besos', 'Un abrazo', '¡Chao!'],
      explanation: '"Atentamente" (med hilsen) er formelt. "Besos" og "Un abrazo" er uformelt.',
    },
    {
      question: 'Når bruker du "usted" i stedet for "tú"?',
      options: [
        'Til ukjente voksne og i formelle sammenhenger',
        'Til venner og familie',
        'Bare til barn',
        'Aldri i e-poster',
      ],
      explanation: '"Usted" er formell tiltale til ukjente voksne, bedrifter og lærere; "tú" er uformelt til venner og familie.',
    },
    {
      question: 'Hva betyr "Querido/a" i en e-post?',
      options: ['Kjære', 'Ærede', 'Til rette vedkommende', 'Vennlig hilsen'],
      explanation: '"Querido/a" = kjære, brukes uformelt. "Estimado/a" = ærede, formelt.',
    },
    {
      question: 'Hvilken avslutning er uformell?',
      options: ['Un abrazo', 'Atentamente', 'Le saluda atentamente', 'Un cordial saludo'],
      explanation: '"Un abrazo" (en klem) og "Besos" er uformelle avslutninger blant venner.',
    },
  ],
  'spansk-1-15-2': [
    {
      question: 'Hva betyr forkortelsen "xq" i spanske meldinger?',
      options: ['porque (fordi)', 'por qué (hvorfor)', 'por favor (vær så snill)', 'pequeño (liten)'],
      explanation: '"xq" er en chatforkortelse for porque (fordi).',
    },
    {
      question: 'Hva betyr "Hace sol"?',
      options: ['Det er sol', 'Det er kaldt', 'Det regner', 'Det blåser'],
      explanation: '"Hace sol" = det er sol, "hace frío" = det er kaldt, "hace viento" = det blåser.',
    },
    {
      question: 'Hva betyr "Lo estamos pasando bien"?',
      options: ['Vi har det fint', 'Vi går nå', 'Vi passerer', 'Vi venter'],
      explanation: '"Lo estamos pasando bien" = "Vi har det fint / koser oss".',
    },
    {
      question: 'Hva betyr forkortelsen "tb" i en melding?',
      options: ['también (også)', 'trabajo (jobb)', 'tarde (sen)', 'todo (alt)'],
      explanation: '"tb" er forkortelse for también (også).',
    },
    {
      question: 'Hva er typisk for et postkort fra ferie?',
      options: [
        'Hilsen, hvor du er, hva du gjør, været og avslutning',
        'En formell forretningstone',
        'Lange grammatiske forklaringer',
        'Bare en liste med ord',
      ],
      explanation: 'Et postkort er kort og personlig: hilsen, sted, aktiviteter, vær og en hyggelig avslutning.',
    },
  ],
  'spansk-1-15-3': [
    {
      question: 'Hvilket verb brukes for fysiske trekk, som "Tiene los ojos marrones"?',
      options: ['tener', 'ser', 'estar', 'haber'],
      explanation: 'Tener brukes for fysiske trekk: "Tiene los ojos marrones" = han/hun har brune øyne.',
    },
    {
      question: 'Hva betyr "Tiene el pelo rubio"?',
      options: ['Han/hun har blondt hår', 'Han/hun har mørkt hår', 'Han/hun har blå øyne', 'Han/hun er høy'],
      explanation: '"Pelo rubio" = blondt hår, "pelo moreno" = mørkt hår, "pelirrojo" = rødhåret.',
    },
    {
      question: 'Hvilket bindeord legger til informasjon?',
      options: ['También (også)', 'Pero (men)', 'Porque (fordi)', 'Por eso (derfor)'],
      explanation: '"También" og "además" legger til informasjon. "Pero" uttrykker motsetning.',
    },
    {
      question: 'Hvordan beskriver du best en person i en kort tekst?',
      options: [
        'ser for personlighet, tener for fysiske trekk',
        'estar for alt',
        'haber for personlighet',
        'gustar for utseende',
      ],
      explanation: 'Bruk ser for personlighet (Es simpático), tener for fysiske trekk (Tiene el pelo rubio).',
    },
    {
      question: 'Hva brukes "por la mañana / por la tarde" til i et dagboknotat?',
      options: ['Tidsuttrykk for å strukturere dagen', 'Å beskrive personer', 'Å uttrykke følelser', 'Å sammenligne'],
      explanation: 'Tidsuttrykk som "por la mañana" (om morgenen) og "por la tarde" (om ettermiddagen) strukturerer fortellingen.',
    },
  ],
  'spansk-1-15-4': [
    {
      question: 'Hvordan begynner man typisk en spansk fortelling/eventyr?',
      options: ['Había una vez (Det var en gang)', 'Al final (Til slutt)', 'De repente (Plutselig)', 'Mientras tanto (I mellomtiden)'],
      explanation: '"Había una vez" eller "Érase una vez" = "Det var en gang", en typisk eventyrstart.',
    },
    {
      question: 'Hva betyr "De repente"?',
      options: ['Plutselig', 'Til slutt', 'I mellomtiden', 'Dagen etter'],
      explanation: '"De repente" = plutselig, brukes til å introdusere en vending i handlingen.',
    },
    {
      question: 'Hva er et "acróstico" (akrostikon)?',
      options: [
        'Et dikt der forbokstavene danner et ord',
        'Et dikt med 5-7-5 stavelser',
        'En kort fortelling',
        'Et dikt uten rim',
      ],
      explanation: 'I et akrostikon danner forbokstavene i hver linje et ord, f.eks. S-O-L.',
    },
    {
      question: 'Hvor mange stavelser har et haiku (5-7-5)?',
      options: ['5-7-5', '7-5-7', '5-5-5', '3-3-3'],
      explanation: 'Et haiku er et kort dikt med stavelsesmønsteret 5-7-5.',
    },
    {
      question: 'Hva uttrykker "Si yo fuera invisible..."?',
      options: [
        'Hvis jeg var usynlig... (en tenkt situasjon)',
        'Jeg er usynlig (et faktum)',
        'Jeg var usynlig (fortid)',
        'Jeg vil bli usynlig (framtid)',
      ],
      explanation: '"Si yo fuera..." = "Hvis jeg var...", brukes til å beskrive en tenkt/hypotetisk situasjon.',
    },
  ],
  'spansk-1-16-1': [
    {
      question: 'Hvilken setning er riktig: "Jeg er på skolen"?',
      options: ['Yo estoy en la escuela.', 'Yo soy en la escuela.', 'Yo es en la escuela.', 'Yo está en la escuela.'],
      explanation: 'Estar brukes for sted: "estoy en la escuela". Ser brukes for identitet/egenskaper.',
    },
    {
      question: 'Hva er riktig presens av "hablar" for "yo"?',
      options: ['hablo', 'hablas', 'hablamos', 'habláis'],
      explanation: 'For -ar-verb i yo-form er endelsen -o: hablo. Du-form: hablas.',
    },
    {
      question: 'Hva er "yo"-formen av det uregelmessige verbet "tener"?',
      options: ['tengo', 'tienes', 'tiene', 'tenemos'],
      explanation: 'Tener er uregelmessig: tengo, tienes, tiene, tenemos, tenéis, tienen.',
    },
    {
      question: 'Hvilken form av "gustar" brukes om flertall, f.eks. "Me ... los libros"?',
      options: ['gustan', 'gusta', 'gusto', 'gustas'],
      explanation: 'Gustar bøyes etter det som likes: "me gusta el libro" (entall), "me gustan los libros" (flertall).',
    },
    {
      question: 'Hva betyr konstruksjonen "ir a + infinitiv", som "Voy a estudiar"?',
      options: ['Nær framtid (jeg skal studere)', 'Fortid', 'Plikt', 'En ordre'],
      explanation: '"Ir a + infinitiv" uttrykker nær framtid: "Voy a estudiar" = jeg skal studere.',
    },
  ],
  'spansk-1-16-2': [
    {
      question: 'Hva er en "kognat" (cognado)?',
      options: [
        'Et ord som ligner i flere språk fordi de har samme opprinnelse',
        'Et ord som betyr noe annet enn det ligner på',
        'Et ord uten flertallsform',
        'Et sammensatt ord',
      ],
      explanation: 'Kognater er ord som ligner på hverandre på tvers av språk, f.eks. hospital, música, teléfono.',
    },
    {
      question: 'Hva betyr den falske vennen "embarazada" egentlig?',
      options: ['Gravid', 'Flau', 'Forbauset', 'Nervøs'],
      explanation: '"Embarazada" ligner engelsk "embarrassed" (flau), men betyr faktisk gravid.',
    },
    {
      question: 'Hva betyr den falske vennen "constipado"?',
      options: ['Forkjølet', 'Forstoppet', 'Forvirret', 'Sliten'],
      explanation: '"Constipado" ligner engelsk "constipated", men betyr forkjølet på spansk.',
    },
    {
      question: 'Hvilket ord hører til ordfamilien rundt "trabajo" (arbeid)?',
      options: ['el trabajador (arbeideren)', 'la comida (maten)', 'el restaurante (restauranten)', 'el tranvía (trikken)'],
      explanation: 'Ordfamilien til trabajo: trabajar (å arbeide), el trabajador (arbeideren).',
    },
    {
      question: 'Hva betyr den falske vennen "largo"?',
      options: ['Lang', 'Stor', 'Bred', 'Tung'],
      explanation: '"Largo" ligner engelsk "large" (stor), men betyr lang. "Grande" betyr stor.',
    },
  ],
  'spansk-1-16-3': [
    {
      question: 'Hva er en effektiv strategi for å lære nye ord?',
      options: [
        'Lære ord i kontekst og bruke repetisjonsintervaller',
        'Bare lese ordlisten mange ganger',
        'Skrive hvert ord hundre ganger',
        'Bare lytte til spansk musikk',
      ],
      explanation: 'Å lære ord i setninger (kontekst) og bruke spaced repetition er mer effektivt enn ren pugging.',
    },
    {
      question: 'Hva bør du gjøre FØRST når du lytter til en spansk tekst?',
      options: [
        'Lytte etter hovedideen',
        'Forstå hvert eneste ord',
        'Lese manuset samtidig',
        'Slå opp alle ukjente ord',
      ],
      explanation: 'Lytt etter hovedideen først, og lytt etter detaljer andre gang. Ikke prøv å forstå alt med en gang.',
    },
    {
      question: 'Hva er "omskriving" som kommunikasjonsstrategi?',
      options: [
        'Beskrive et ord du ikke kan med andre ord',
        'Skrive teksten på nytt',
        'Oversette ord for ord',
        'Bruke ordbok hele tiden',
      ],
      explanation: 'Omskriving: hvis du ikke kan et ord, beskriv det, f.eks. "den tingen man spiser suppe med" = la cuchara.',
    },
    {
      question: 'Hvilket uttrykk ber om at noe gjentas?',
      options: ['¿Puede repetir?', '¿Qué significa?', '¿Cómo se dice...?', '¿Dónde está?'],
      explanation: '"¿Puede repetir?" = "Kan du gjenta?". "¿Qué significa?" = "Hva betyr det?".',
    },
    {
      question: 'Hvorfor er det greit å gjøre feil når man lærer språk?',
      options: [
        'Feil er en naturlig del av læringen',
        'Feil betyr at man ikke kan lære språket',
        'Man bør slutte å snakke til man er perfekt',
        'Feil hindrer kommunikasjon helt',
      ],
      explanation: 'Feil er en naturlig og nødvendig del av språklæring; man bør tørre å bruke språket.',
    },
  ],
  'spansk-1-16-4': [
    {
      question: 'Hva står "S" for i SMART-mål?',
      options: ['Spesifikke', 'Spennende', 'Store', 'Spontane'],
      explanation: 'SMART = Spesifikke, Målbare, Ambisiøse/oppnåelige, Relevante, Tidsbegrensede.',
    },
    {
      question: 'Hvilket av disse er et godt SMART-mål?',
      options: [
        'Lære 15 nye ord om klær og bruke dem i setninger innen to uker.',
        'Bli flinkere i spansk.',
        'Lære alt spansk ordforråd på en uke.',
        'Kanskje øve litt på spansk noen ganger.',
      ],
      explanation: 'Et SMART-mål er spesifikt, målbart og realistisk innen en tidsramme, som "15 ord om klær på to uker".',
    },
    {
      question: 'Hva er hensikten med egenvurdering (autoevaluación)?',
      options: [
        'Å bli bevisst på egne styrker og svakheter for å lære mer effektivt',
        'Å sammenligne seg med andre',
        'Å få en karakter',
        'Å unngå å øve mer',
      ],
      explanation: 'Egenvurdering gjør deg til en mer bevisst språklærer ved at du ser hva du kan og hva du må øve på.',
    },
    {
      question: 'Hva betyr refleksjonsspørsmålet "¿Qué necesito mejorar?"',
      options: [
        'Hva trenger jeg å forbedre?',
        'Hva har jeg lært?',
        'Hva er jeg best på?',
        'Hva motiverer meg?',
      ],
      explanation: '"¿Qué necesito mejorar?" = "Hva trenger jeg å forbedre?".',
    },
    {
      question: 'Hva bør du være når du vurderer ferdighetene dine?',
      options: ['Ærlig om både styrker og svakheter', 'Bare positiv', 'Bare kritisk', 'Likegyldig'],
      explanation: 'Vær ærlig og identifiser både styrker og svakheter for å sette gode mål.',
    },
  ],

};

export default quizData_spansk_1;
