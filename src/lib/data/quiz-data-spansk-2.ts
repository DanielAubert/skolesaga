import type { QuizQuestion } from './quiz-data';

const quizData_spansk_2: Record<string, QuizQuestion[]> = {
  'spansk-2-1-1': [
    {
      question: 'Hvordan dannes pretérito perfecto?',
      options: [
        'haber (presens) + partisipp',
        'ser (presens) + partisipp',
        'estar (presens) + gerundium',
        'tener (presens) + infinitiv',
      ],
      explanation: 'Pretérito perfecto = haber i presens + partisipp, f.eks. "he hablado".',
    },
    {
      question: 'Hva er partisippet av det uregelmessige verbet "hacer"?',
      options: ['hecho', 'hacido', 'hado', 'haciendo'],
      explanation: 'Hacer har uregelmessig partisipp: hecho (gjort).',
    },
    {
      question: 'Hva er riktig: "Jeg har snakket"?',
      options: ['He hablado', 'Ha hablado', 'Has hablado', 'Hemos hablado'],
      explanation: 'Yo-formen av haber er "he": "he hablado" = jeg har snakket.',
    },
    {
      question: 'Hvilket tidsuttrykk brukes typisk med pretérito perfecto?',
      options: ['hoy (i dag)', 'ayer (i går)', 'el año pasado (i fjor)', 'la semana pasada'],
      explanation: 'Perfecto brukes for nylige handlinger med tilknytning til nåtid: hoy, esta semana, este mes.',
    },
    {
      question: 'Hva skjer med partisippet i pretérito perfecto?',
      options: [
        'Det endrer seg aldri, bare haber bøyes',
        'Det bøyes etter kjønn og tall',
        'Det får alltid endelsen -os',
        'Det endres etter subjektet',
      ],
      explanation: 'Partisippet er alltid likt; bare hjelpeverbet haber bøyes (he/has/ha/hemos/han hablado).',
    },
  ],
  'spansk-2-1-2': [
    {
      question: 'Hva brukes pretérito imperfecto til?',
      options: [
        'Vaner, bakgrunn og pågående tilstander i fortiden',
        'Avsluttede, konkrete handlinger',
        'Framtidige planer',
        'Ønsker og tvil',
      ],
      explanation: 'Imperfecto beskriver vaner, bakgrunn og pågående tilstander i fortid.',
    },
    {
      question: 'Hva er imperfecto-endelsene for -AR-verb (yo-form)?',
      options: ['-aba (hablaba)', '-ía (hablía)', '-é (hablé)', '-aré (hablaré)'],
      explanation: '-AR-verb i imperfecto: -aba, -abas, -aba, -ábamos, -aban.',
    },
    {
      question: 'Hvilke tre verb er uregelmessige i imperfecto?',
      options: ['ser, ir, ver', 'tener, hacer, poder', 'estar, dar, decir', 'querer, poner, salir'],
      explanation: 'Kun tre verb er uregelmessige i imperfecto: ser (era), ir (iba), ver (veía).',
    },
    {
      question: 'Hva er imperfecto av "ser" i yo-form?',
      options: ['era', 'fui', 'soy', 'seré'],
      explanation: 'Ser er uregelmessig: era, eras, era, éramos, eran.',
    },
    {
      question: 'Hvilket signalord peker mot imperfecto?',
      options: ['todos los días (hver dag)', 'ayer (i går)', 'de repente (plutselig)', 'la semana pasada'],
      explanation: 'Signalord for imperfecto: siempre, todos los días, cada verano, mientras, cuando era niño.',
    },
  ],
  'spansk-2-1-3': [
    {
      question: 'Når brukes perfecto/preteritum framfor imperfecto?',
      options: [
        'Ved avsluttede, konkrete handlinger med start og slutt',
        'Ved pågående tilstander',
        'Ved beskrivelser av bakgrunn',
        'Ved vaner i fortiden',
      ],
      explanation: 'Perfecto/preteritum = avgrensede handlinger; imperfecto = pågående/bakgrunn/vaner.',
    },
    {
      question: 'Hvilken sammenligning passer best?',
      options: [
        'Imperfecto = videokamera, perfecto = fotokamera',
        'Imperfecto = fotokamera, perfecto = videokamera',
        'Begge er fotokamera',
        'Begge er videokamera',
      ],
      explanation: 'Imperfecto filmer en pågående scene (videokamera), perfecto tar bilde av en enkelt hendelse (fotokamera).',
    },
    {
      question: 'I "Hacía sol y de repente empezó a llover" - hvilken form er bakgrunnen?',
      options: ['Hacía sol (imperfecto)', 'empezó (preteritum)', 'Begge er bakgrunn', 'Ingen er bakgrunn'],
      explanation: '"Hacía sol" (imperfecto) setter scenen; "empezó a llover" (preteritum) er hendelsen.',
    },
    {
      question: 'Hvilket signalord peker mot perfecto/preteritum?',
      options: ['de repente (plutselig)', 'siempre (alltid)', 'mientras (mens)', 'normalmente'],
      explanation: '"De repente", "ayer" og "la semana pasada" peker mot avgrensede handlinger (preteritum).',
    },
    {
      question: 'Hvordan brukes formene sammen i fortellinger?',
      options: [
        'Imperfecto setter scenen, perfecto forteller hva som skjedde',
        'Perfecto setter scenen, imperfecto forteller hendelser',
        'Bare imperfecto brukes',
        'Bare perfecto brukes',
      ],
      explanation: 'Imperfecto gir bakgrunn/beskrivelse, perfecto/preteritum driver handlingen framover.',
    },
  ],
  'spansk-2-1-4': [
    {
      question: 'Hvilken fortidsform bruker du for å sette scenen i en fortelling?',
      options: ['imperfecto', 'perfecto', 'futuro', 'subjuntivo'],
      explanation: 'Start med imperfecto for å beskrive tid, sted, vær og hva som pågikk.',
    },
    {
      question: 'Hvilket bindeord betyr "først"?',
      options: ['primero', 'luego', 'finalmente', 'mientras'],
      explanation: '"Primero" = først, "luego/después" = så, "finalmente" = til slutt.',
    },
    {
      question: 'Hva betyr bindeordet "mientras"?',
      options: ['mens (samtidighet)', 'først', 'til slutt', 'plutselig'],
      explanation: '"Mientras" uttrykker samtidighet (mens). "De repente" uttrykker overraskelse.',
    },
    {
      question: 'Hvilken form driver handlingen framover i en fortelling?',
      options: ['perfecto/preteritum (konkrete hendelser)', 'imperfecto (bakgrunn)', 'futuro', 'condicional'],
      explanation: 'Perfecto/preteritum forteller hva som skjedde og driver historien framover.',
    },
    {
      question: 'Hvilket bindeord uttrykker en overraskelse i fortellingen?',
      options: ['de repente (plutselig)', 'primero (først)', 'finalmente (til slutt)', 'también (også)'],
      explanation: '"De repente" / "de pronto" introduserer et uventet vendepunkt.',
    },
  ],
  'spansk-2-2-1': [
    {
      question: 'Hva uttrykker konjunktiv (el subjuntivo)?',
      options: [
        'Subjektivitet: ønsker, følelser, tvil og usikkerhet',
        'Bare avsluttede handlinger',
        'Bare faktiske, sikre forhold',
        'Bare framtid',
      ],
      explanation: 'Subjuntivo er en modus for subjektivitet: ønsker, følelser, tvil. Indikativ uttrykker fakta.',
    },
    {
      question: 'Hva står "W" for i WEIRDO-regelen?',
      options: ['Wishes (ønsker)', 'Weather (vær)', 'When (når)', 'Why (hvorfor)'],
      explanation: 'WEIRDO: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt, Ojalá.',
    },
    {
      question: 'Hva er presens subjuntiv av "hablar" i yo-form?',
      options: ['hable', 'hablo', 'hablé', 'hablaba'],
      explanation: '-AR-verb i subjuntiv får e-endelser: hable, hables, hable, hablemos, hablen.',
    },
    {
      question: 'Hvordan dannes subjuntiv-stammen fra et uregelmessig verb som "tener"?',
      options: [
        'Ta yo-formen (tengo), fjern -o, legg til subjuntiv-endelser (tenga)',
        'Bruk infinitivstammen direkte',
        'Legg til -ré på infinitiven',
        'Bruk preteritumstammen',
      ],
      explanation: 'Subjuntiv dannes fra yo-form indikativ: tengo → teng- → tenga, tengas...',
    },
    {
      question: 'Hva er presens subjuntiv av "ser" i yo/él-form?',
      options: ['sea', 'soy', 'era', 'fue'],
      explanation: 'Ser er uregelmessig i subjuntiv: sea, seas, sea, seamos, sean.',
    },
  ],
  'spansk-2-2-2': [
    {
      question: 'Hva er riktig: "Jeg vil at du skal komme"?',
      options: ['Quiero que vengas.', 'Quiero que vienes.', 'Quiero venir.', 'Quiero que vendrás.'],
      explanation: 'Ulikt subjekt (jeg/du) krever que + subjuntivo: "Quiero que vengas".',
    },
    {
      question: 'Når bruker du infinitiv i stedet for que + subjuntivo?',
      options: [
        'Når subjektet er det samme i begge ledd',
        'Når subjektene er ulike',
        'Alltid med querer',
        'Aldri',
      ],
      explanation: 'Samme subjekt → infinitiv ("Quiero ir"). Ulikt subjekt → que + subjuntivo ("Quiero que vayas").',
    },
    {
      question: 'Hva er riktig: "Jeg er glad for at du er her"?',
      options: ['Me alegra que estés aquí.', 'Me alegra que estás aquí.', 'Me alegra estar aquí.', 'Me alegra que estarás aquí.'],
      explanation: 'Følelsesverb + que + subjuntivo: "Me alegra que estés aquí".',
    },
    {
      question: 'Hvilket verb uttrykker et ønske som tar subjuntivo?',
      options: ['esperar que (håpe at)', 'saber que (vite at)', 'ver que (se at)', 'es cierto que (det er sikkert at)'],
      explanation: 'Ønskeverb som esperar/querer/desear que tar subjuntivo. "Saber que" og "es cierto que" tar indikativ.',
    },
    {
      question: 'Hva betyr "Espero que estés bien"?',
      options: ['Jeg håper du har det bra', 'Jeg vet du har det bra', 'Jeg så at du hadde det bra', 'Jeg vil ha det bra'],
      explanation: '"Espero que estés bien" = "Jeg håper du har det bra" (esperar + que + subjuntivo).',
    },
  ],
  'spansk-2-2-3': [
    {
      question: 'Hvilket upersonlig uttrykk tar subjuntivo?',
      options: ['Es importante que', 'Es cierto que', 'Es verdad que', 'Es evidente que'],
      explanation: 'Uttrykk for nødvendighet/vurdering (Es importante/necesario/posible que) tar subjuntivo. Sikkerhet tar indikativ.',
    },
    {
      question: 'Hva er riktig: "Det er mulig at det regner"?',
      options: ['Es posible que llueva.', 'Es posible que llueve.', 'Es posible llover.', 'Es posible que lloverá.'],
      explanation: '"Es posible que" uttrykker mulighet og tar subjuntivo: "llueva".',
    },
    {
      question: 'Hvilket uttrykk tar INDIKATIV (ikke subjuntivo)?',
      options: ['Es cierto que (det er sikkert at)', 'Es necesario que', 'Es probable que', 'Es una lástima que'],
      explanation: 'Sikkerhetsuttrykk (es cierto/seguro/evidente/verdad que) tar indikativ.',
    },
    {
      question: 'Hva skjer når et sikkerhetsuttrykk negeres, f.eks. "No es cierto que..."?',
      options: [
        'Det tar subjuntivo (No es cierto que venga)',
        'Det tar fortsatt indikativ',
        'Det blir umulig å bruke que',
        'Det tar infinitiv',
      ],
      explanation: 'Ved negasjon av sikkerhet skiftes til subjuntivo: "Es cierto que viene" → "No es cierto que venga".',
    },
    {
      question: 'Hva er hovedregelen for valg av modus?',
      options: [
        'Sikkerhet → indikativ; mulighet/vurdering/følelse → subjuntivo',
        'Alt tar subjuntivo',
        'Alt tar indikativ',
        'Bare framtid tar subjuntivo',
      ],
      explanation: 'Sikkerhet gir indikativ; alt annet (mulighet, nødvendighet, vurdering, følelse, negasjon av sikkerhet) gir subjuntivo.',
    },
  ],
  'spansk-2-2-4': [
    {
      question: 'Hvilket uttrykk tar ALLTID subjuntivo?',
      options: ['Ojalá (que)', 'Sé que', 'Es verdad que', 'Veo que'],
      explanation: '"Ojalá (que)" uttrykker et sterkt ønske og tar alltid subjuntivo: "Ojalá llueva".',
    },
    {
      question: 'Hva er riktig: "Jeg råder deg til å studere mer"?',
      options: ['Te aconsejo que estudies más.', 'Te aconsejo que estudias más.', 'Te aconsejo estudiar.', 'Te aconsejo que estudiarás.'],
      explanation: 'Råd-verb (aconsejar/recomendar que) tar subjuntivo: "que estudies".',
    },
    {
      question: 'Hva betyr "Ojalá llueva"?',
      options: ['Bare det regner / Jeg håper det regner', 'Det regner nå', 'Det regnet', 'Det vil regne sikkert'],
      explanation: '"Ojalá llueva" uttrykker et sterkt ønske/håp om at det regner.',
    },
    {
      question: 'Hvilket verb brukes for en høflig, formell forespørsel i brev?',
      options: ['Le ruego que (Jeg ber Dem)', 'Quiero que', 'Sé que', 'Veo que'],
      explanation: 'Formelt: "Le ruego que..." / "Le pido que..." + subjuntivo.',
    },
    {
      question: 'Hva er riktig: "Jeg anbefaler at du går til legen"?',
      options: ['Te recomiendo que vayas al médico.', 'Te recomiendo que vas al médico.', 'Te recomiendo ir.', 'Te recomiendo que irás.'],
      explanation: 'Recomendar que + subjuntivo: "que vayas al médico".',
    },
  ],
  'spansk-2-3-1': [
    {
      question: 'Hvordan dannes futuro simple?',
      options: [
        'Hele infinitiven + endelser (-é, -ás, -á, -emos, -án)',
        'Verbstammen + -aba',
        'haber + partisipp',
        'Infinitiv + -ía',
      ],
      explanation: 'Futuro simple: infinitiv + -é, -ás, -á, -emos, -án (hablaré, hablarás...).',
    },
    {
      question: 'Hva er futuro av "hablar" i yo-form?',
      options: ['hablaré', 'hablaría', 'hablaba', 'hablé'],
      explanation: 'Futuro yo-form: hablaré (jeg vil snakke).',
    },
    {
      question: 'Hva er den uregelmessige futuro-stammen til "tener"?',
      options: ['tendr-', 'tener-', 'tien-', 'tuv-'],
      explanation: 'Tener har uregelmessig stamme tendr-: tendré, tendrás...',
    },
    {
      question: 'Hva uttrykker "¿Qué hora será?"',
      options: [
        'Sannsynlighet i nåtid (mon tro hva klokka er?)',
        'En sikker framtid',
        'En fortidshandling',
        'Et ønske',
      ],
      explanation: 'Futuro kan uttrykke sannsynlighet/antagelse i nåtid: "¿Qué hora será?" = "Mon tro hva klokka er?".',
    },
    {
      question: 'Hvilken futuro-form har IKKE aksent?',
      options: ['nosotros (-emos)', 'yo (-é)', 'tú (-ás)', 'ellos (-án)'],
      explanation: 'Alle futuro-endelser har aksent unntatt nosotros: hablaremos.',
    },
  ],
  'spansk-2-3-2': [
    {
      question: 'Hvordan dannes condicional?',
      options: [
        'Infinitiv (eller uregelm. stamme) + -ía, -ías, -ía, -íamos, -ían',
        'Infinitiv + -é, -ás, -á',
        'haber + partisipp',
        'Stamme + -aba',
      ],
      explanation: 'Condicional = futuro-stammer + imperfecto-endelser (-ía, -ías, -ía, -íamos, -ían).',
    },
    {
      question: 'Hva betyr "Me gustaría viajar a Perú"?',
      options: [
        'Jeg ville gjerne reise til Peru',
        'Jeg liker å reise til Peru',
        'Jeg reiste til Peru',
        'Jeg skal reise til Peru',
      ],
      explanation: '"Me gustaría" (condicional) = "jeg ville gjerne / kunne tenke meg".',
    },
    {
      question: 'Hvilken form gjør en forespørsel høfligere?',
      options: ['¿Podría ayudarme? (condicional)', '¿Puedes ayudarme? (presens)', '¿Pudiste ayudar?', '¿Ayudarás?'],
      explanation: 'Condicional gjør forespørsler høfligere: "¿Podría ayudarme?" = "Kunne De hjelpe meg?".',
    },
    {
      question: 'Condicional bruker samme uregelmessige stammer som hvilken tid?',
      options: ['futuro', 'imperfecto', 'pretérito perfecto', 'presens'],
      explanation: 'Condicional og futuro deler de samme uregelmessige stammene (tendr-, pondr-, har- osv.).',
    },
    {
      question: 'Hva er condicional av "tener" i yo-form?',
      options: ['tendría', 'tendré', 'tenía', 'tuve'],
      explanation: 'Condicional yo: tendría (futuro-stamme tendr- + -ía).',
    },
  ],
  'spansk-2-3-3': [
    {
      question: 'Hvordan dannes en reell betingelse (type 1)?',
      options: [
        'Si + presens indikativ, presens/futuro',
        'Si + imperfecto subjuntivo, condicional',
        'Si + futuro, futuro',
        'Si + subjuntivo, subjuntivo',
      ],
      explanation: 'Type 1 (mulig betingelse): Si + presens, presens/futuro. "Si llueve, me quedo en casa".',
    },
    {
      question: 'Hvordan dannes en ureal/hypotetisk betingelse (type 2)?',
      options: [
        'Si + imperfecto subjuntivo, condicional',
        'Si + presens, futuro',
        'Si + futuro, presens',
        'Si + perfecto, perfecto',
      ],
      explanation: 'Type 2 (hypotetisk): Si + imperfecto subjuntivo + condicional. "Si tuviera dinero, compraría un coche".',
    },
    {
      question: 'Hva er riktig: "Hvis jeg hadde penger, ville jeg kjøpt en bil"?',
      options: [
        'Si tuviera dinero, compraría un coche.',
        'Si tengo dinero, compraría un coche.',
        'Si tuviera dinero, compro un coche.',
        'Si tendría dinero, compraba un coche.',
      ],
      explanation: 'Ureal betingelse: Si + imperfecto subjuntivo (tuviera) + condicional (compraría).',
    },
    {
      question: 'Hvordan dannes imperfecto subjuntivo?',
      options: [
        '3. person flertall preteritum minus -ron + -ra, -ras, -ra...',
        'Infinitiv + -ía',
        'yo-form presens minus -o',
        'Infinitiv + -se',
      ],
      explanation: 'Imperfecto subjuntivo: ta ellos-formen i preteritum, fjern -ron, legg til -ra-endelser (tuvieron → tuviera).',
    },
    {
      question: 'Hva er riktig type 1-setning: "Hvis det regner, blir jeg hjemme"?',
      options: [
        'Si llueve, me quedo en casa.',
        'Si lloviera, me quedaría en casa.',
        'Si lloverá, me quedo en casa.',
        'Si llueva, me quedo en casa.',
      ],
      explanation: 'Reell betingelse: Si + presens (llueve) + presens (me quedo).',
    },
  ],
  'spansk-2-3-4': [
    {
      question: 'Hvilket uttrykk angir en bestemt plan?',
      options: ['Voy a + infinitiv', 'Quizás + subjuntivo', 'A lo mejor', 'Es posible que'],
      explanation: '"Ir a + infinitiv" (Voy a estudiar) uttrykker en bestemt plan.',
    },
    {
      question: 'Hvilket sannsynlighetsuttrykk tar INDIKATIV?',
      options: ['A lo mejor', 'Quizás', 'Tal vez', 'Es posible que'],
      explanation: '"A lo mejor" er det eneste sannsynlighetsuttrykket som tar indikativ; de andre tar subjuntivo.',
    },
    {
      question: 'Hva er riktig: "Kanskje han kommer"?',
      options: ['Quizás venga.', 'Quizás viene seguro.', 'Quizás vendrá fijo.', 'Quizás venir.'],
      explanation: '"Quizás/Tal vez" tar subjuntivo: "Quizás venga".',
    },
    {
      question: 'Hva uttrykker "Pienso viajar el verano que viene"?',
      options: ['En intensjon/plan om å reise', 'At reisen er over', 'Et håp', 'En tvil'],
      explanation: '"Pienso + infinitiv" uttrykker intensjon: "Jeg tenker å reise".',
    },
    {
      question: 'Hvilket uttrykk passer for et ønske om framtiden?',
      options: ['Me gustaría + infinitiv', 'Voy a + infinitiv', 'Fui a + infinitiv', 'A lo mejor + indikativ'],
      explanation: '"Me gustaría + infinitiv" uttrykker et ønske (jeg ville gjerne...).',
    },
  ],
  'spansk-2-4-1': [
    {
      question: 'Hvor plasseres direkte objektspronomen vanligvis?',
      options: [
        'Foran det konjugerte verbet',
        'Alltid etter verbet',
        'Først i setningen',
        'Etter subjektet',
      ],
      explanation: 'Direkte objektspronomen står foran det konjugerte verbet, eller kan henges bak infinitiv/gerundium.',
    },
    {
      question: 'Hva er riktig: "¿Ves el libro?" → "Sí, ... veo"?',
      options: ['lo', 'la', 'le', 'los'],
      explanation: '"El libro" er hankjønn entall → lo: "Sí, lo veo".',
    },
    {
      question: 'Hvilket pronomen erstatter "a María" som direkte objekt?',
      options: ['la (La conozco)', 'lo', 'le', 'las'],
      explanation: 'María er hunkjønn entall → la: "La conozco".',
    },
    {
      question: 'Hvilke er de direkte objektspronomenene?',
      options: ['me, te, lo/la, nos, los/las', 'me, te, le, nos, les', 'mi, ti, su, nuestro', 'yo, tú, él, nosotros'],
      explanation: 'Direkte objektspronomen: me, te, lo/la, nos, los/las.',
    },
    {
      question: 'Når brukes "personlig a" foran et direkte objekt?',
      options: [
        'Når objektet er en person (Veo a María)',
        'Aldri',
        'Bare foran ting',
        'Foran alle objekter',
      ],
      explanation: 'Personlig a brukes når det direkte objektet er en person: "Veo a María" → "La veo".',
    },
  ],
  'spansk-2-4-2': [
    {
      question: 'Hva viser indirekte objektspronomen?',
      options: [
        'Til hvem eller for hvem handlingen utføres',
        'Hva som er direkte objekt',
        'Hvem som utfører handlingen',
        'Tidspunktet for handlingen',
      ],
      explanation: 'Indirekte objektspronomen viser hvem handlingen rettes mot (til/for hvem).',
    },
    {
      question: 'Hvilke er de indirekte objektspronomenene?',
      options: ['me, te, le, nos, les', 'me, te, lo/la, nos, los/las', 'mi, ti, su', 'yo, tú, él'],
      explanation: 'Indirekte objektspronomen: me, te, le, nos, les.',
    },
    {
      question: 'Hva er riktig: "Jeg gir ham en gave"?',
      options: ['Le doy un regalo.', 'Lo doy un regalo.', 'Le da un regalo.', 'La doy un regalo.'],
      explanation: 'Indirekte objekt (til ham) = le: "Le doy un regalo".',
    },
    {
      question: 'Hvorfor sier man "Le doy el libro a Juan"?',
      options: [
        'Fordi "le" kan bety ham/henne/Dem, så det klargjøres med a + person',
        'Fordi le alltid trenger to objekter',
        'Fordi a brukes med alle verb',
        'Fordi le er flertall',
      ],
      explanation: 'Siden le er flertydig, klargjøres det ofte med "a + person": "Le doy el libro a Juan".',
    },
    {
      question: 'Med hvilket verb brukes indirekte objektspronomen?',
      options: ['dar (gi)', 'ver (se)', 'conocer (kjenne)', 'tener (ha)'],
      explanation: 'Indirekte objekt brukes med verb som dar, decir, escribir, enviar, preguntar, explicar.',
    },
  ],
  'spansk-2-4-3': [
    {
      question: 'I hvilken rekkefølge kommer pronomenene når begge brukes?',
      options: [
        'Indirekte før direkte',
        'Direkte før indirekte',
        'Tilfeldig rekkefølge',
        'Bare ett kan brukes',
      ],
      explanation: 'Indirekte objektspronomen kommer først, så direkte: "me lo", "te la", "se lo".',
    },
    {
      question: 'Hva skjer med "le/les" foran lo/la/los/las?',
      options: ['De blir til "se"', 'De forblir le/les', 'De faller bort', 'De blir til "me"'],
      explanation: 'le/les → se foran lo/la/los/las: "Le lo doy" ❌ → "Se lo doy" ✅.',
    },
    {
      question: 'Hva er riktig: "Jeg sier det til ham"?',
      options: ['Se lo digo.', 'Le lo digo.', 'Lo le digo.', 'Le digo lo.'],
      explanation: 'le + lo → se lo: "Se lo digo".',
    },
    {
      question: 'Hva står RID for i huskeregelen for rekkefølge?',
      options: [
        'Refleksiv, Indirekte, Direkte',
        'Riktig, Indirekte, Direkte',
        'Refleksiv, Indikativ, Direkte',
        'Relativ, Indirekte, Direkte',
      ],
      explanation: 'RID: pronomenene kommer i rekkefølgen Refleksiv, Indirekte, Direkte.',
    },
    {
      question: 'Hvor kan de doble pronomenene plasseres ved infinitiv?',
      options: [
        'Henges bak infinitiven (decírselo)',
        'Alltid bare foran',
        'Aldri sammen med infinitiv',
        'Inne i infinitiven',
      ],
      explanation: 'Ved infinitiv kan begge henges bak: "Voy a decírselo" (med aksent på stammen).',
    },
  ],
  'spansk-2-4-4': [
    {
      question: 'Hva er det vanligste relativpronomenet på spansk?',
      options: ['que', 'quien', 'donde', 'cuyo'],
      explanation: '"Que" er det vanligste relativpronomenet, brukes for både ting og personer.',
    },
    {
      question: 'Hva betyr "El libro que leo"?',
      options: ['Boken som jeg leser', 'Boken der jeg leser', 'Boken min', 'Hvilken bok jeg leser'],
      explanation: '"Que" = som: "El libro que leo" = boken som jeg leser.',
    },
    {
      question: 'Hvilket relativpronomen betyr "der/hvor" (sted)?',
      options: ['donde', 'que', 'quien', 'lo que'],
      explanation: '"Donde" = der/hvor: "La ciudad donde nací" = byen der jeg ble født.',
    },
    {
      question: 'Når brukes "quien"?',
      options: [
        'Om personer etter en preposisjon',
        'Om ting',
        'Om steder',
        'Om abstrakte konsepter',
      ],
      explanation: '"Quien/quienes" brukes om personer, særlig etter preposisjon. "Que" er ellers vanligst.',
    },
    {
      question: 'Hva uttrykker "lo que"?',
      options: ['det som (abstrakt)', 'der/hvor', 'hvem', 'boken som'],
      explanation: '"Lo que" = "det som", brukes om abstrakte konsepter: "No entiendo lo que dices".',
    },
  ],
  'spansk-2-5-1': [
    {
      question: 'Hva er "el cuento" på spansk?',
      options: ['En novelle / kort fortelling', 'En lang roman', 'Et dikt', 'Et teaterstykke'],
      explanation: '"El cuento" = novelle/kort fortelling. "La novela" = roman.',
    },
    {
      question: 'Hva er en "metáfora" (metafor)?',
      options: [
        'Et bilde der noe beskrives som om det er noe annet (Sus ojos son soles)',
        'En sammenligning med "som"',
        'En overdrivelse',
        'En gjentakelse av lyder',
      ],
      explanation: 'En metafor beskriver noe som om det er noe annet uten "som": "Sus ojos son soles".',
    },
    {
      question: 'Hva kalles fortelleren i en tekst på spansk?',
      options: ['el narrador', 'el personaje', 'la trama', 'el tema'],
      explanation: '"El narrador" = fortelleren, "los personajes" = karakterene, "la trama" = handlingen.',
    },
    {
      question: 'Hvilke er hovedsjangrene i litteraturen?',
      options: [
        'novela, cuento, poesía, teatro, ensayo',
        'metáfora, símil, hipérbole',
        'narrador, tema, conflicto',
        'introducción, desarrollo, conclusión',
      ],
      explanation: 'Hovedsjangrene: novela, cuento, poesía, teatro, ensayo.',
    },
    {
      question: 'Hva betyr "la trama" i en tekstanalyse?',
      options: ['Handlingen', 'Temaet', 'Fortelleren', 'Karakteren'],
      explanation: '"La trama" = handlingen/plottet. "El tema" = temaet.',
    },
  ],
  'spansk-2-5-2': [
    {
      question: 'Hvem skrev "Don Quijote de la Mancha"?',
      options: ['Miguel de Cervantes', 'Federico García Lorca', 'Pablo Neruda', 'Gabriel García Márquez'],
      explanation: 'Cervantes skrev Don Quijote (1605/1615), regnet som den første moderne romanen.',
    },
    {
      question: 'Hvorfor er "Don Quijote" historisk viktig?',
      options: [
        'Den regnes som den første moderne romanen',
        'Den vant Nobelprisen',
        'Den er det første spanske diktet',
        'Den startet magisk realisme',
      ],
      explanation: 'Don Quijote anses som den første moderne romanen i verdenslitteraturen.',
    },
    {
      question: 'Hva er Federico García Lorca mest kjent som?',
      options: ['Poet og dramatiker', 'Romanforfatter', 'Filosof', 'Historiker'],
      explanation: 'García Lorca var poet og dramatiker, medlem av Generación del 27.',
    },
    {
      question: 'Hva skjedde med García Lorca i 1936?',
      options: [
        'Han ble drept under den spanske borgerkrigen',
        'Han vant Nobelprisen',
        'Han flyttet til Latin-Amerika',
        'Han skrev Don Quijote',
      ],
      explanation: 'García Lorca ble drept i 1936, tidlig i den spanske borgerkrigen.',
    },
    {
      question: 'Hvilken litterær gruppe tilhørte García Lorca?',
      options: ['Generación del 27', 'El boom latinoamericano', 'Siglo de Oro', 'Romanticismo'],
      explanation: 'García Lorca var medlem av Generación del 27.',
    },
  ],
  'spansk-2-5-3': [
    {
      question: 'Hva var "el boom latinoamericano"?',
      options: [
        'En litterær eksplosjon på 1960-70-tallet',
        'En økonomisk krise',
        'En politisk revolusjon',
        'En musikksjanger',
      ],
      explanation: 'El boom var den internasjonale gjennombruddsbølgen for latinamerikansk litteratur på 1960-70-tallet.',
    },
    {
      question: 'Hvem skrev "Cien años de soledad"?',
      options: ['Gabriel García Márquez', 'Pablo Neruda', 'Jorge Luis Borges', 'Miguel de Cervantes'],
      explanation: 'Gabriel García Márquez (Colombia) skrev "Cien años de soledad".',
    },
    {
      question: 'Hva kjennetegner "magisk realisme"?',
      options: [
        'Overnaturlige hendelser presenteres som helt normale',
        'Bare realistiske hverdagsscener',
        'Science fiction om framtiden',
        'Historiske dokumentar-romaner',
      ],
      explanation: 'Magisk realisme blander det overnaturlige med det hverdagslige som om det var helt normalt.',
    },
    {
      question: 'Hvilken pris vant Pablo Neruda i 1971?',
      options: ['Nobelprisen (i litteratur)', 'Cervantes-prisen', 'Pulitzer-prisen', 'Booker-prisen'],
      explanation: 'Den chilenske poeten Pablo Neruda vant Nobelprisen i litteratur i 1971.',
    },
    {
      question: 'Fra hvilket land kom Gabriel García Márquez?',
      options: ['Colombia', 'Chile', 'Argentina', 'Mexico'],
      explanation: 'García Márquez var fra Colombia. Neruda var fra Chile, Borges fra Argentina.',
    },
  ],
  'spansk-2-5-4': [
    {
      question: 'Hva er første steg i en litterær analyse?',
      options: ['Kontekst (forfatter, tid, bevegelse)', 'Tolkning', 'Konklusjon', 'Egen mening'],
      explanation: 'Stegene: Kontekst → Innhold → Form → Virkemidler → Tolkning.',
    },
    {
      question: 'Hva bør komme tidlig i en bokrapport (introducción)?',
      options: [
        'Tittel, forfatter, sjanger, utgivelsesår',
        'Din personlige mening',
        'En full gjenfortelling',
        'Konklusjonen',
      ],
      explanation: 'Introduksjonen presenterer tittel, forfatter, sjanger og utgivelsesår.',
    },
    {
      question: 'Hvordan innleder du et sitat fra teksten?',
      options: ['Según el autor, "..."', 'En mi opinión...', 'Voy a hablar de...', 'Había una vez...'],
      explanation: 'Sitatteknikk: "Según el autor..." / "Como dice el narrador...".',
    },
    {
      question: 'Hvorfor lese teksten to ganger?',
      options: [
        'Først for å forstå handlingen, så for å finne virkemidler og temaer',
        'For å pugge teksten utenat',
        'For å oversette hvert ord',
        'For å telle antall sider',
      ],
      explanation: 'Les én gang for handlingen, og en gang til for å identifisere virkemidler og temaer.',
    },
    {
      question: 'Hva er riktig rekkefølge for de fem analysetrinnene?',
      options: [
        'Kontekst → Innhold → Form → Virkemidler → Tolkning',
        'Tolkning → Kontekst → Form → Innhold → Virkemidler',
        'Innhold → Tolkning → Kontekst → Form → Virkemidler',
        'Virkemidler → Innhold → Tolkning → Kontekst → Form',
      ],
      explanation: 'Rekkefølgen: Kontekst, Innhold, Form, Virkemidler, Tolkning.',
    },
  ],
  'spansk-2-6-1': [
    {
      question: 'I hvilket land feires "El Día de los Muertos"?',
      options: ['Mexico', 'Spania', 'Argentina', 'Peru'],
      explanation: 'El Día de los Muertos (de dødes dag) feires i Mexico 1.-2. november.',
    },
    {
      question: 'Hva er "La Semana Santa"?',
      options: [
        'Den hellige uken før påske, feiret med prosesjoner',
        'En sommerfest med tomatkasting',
        'Nyttårsfeiringen',
        'En oksefest i Pamplona',
      ],
      explanation: 'Semana Santa er den hellige uken før påske, med prosesjoner; Sevilla er mest kjent.',
    },
    {
      question: 'Hvilken by er mest kjent for "Los Sanfermines" (oksejakten)?',
      options: ['Pamplona', 'Sevilla', 'Valencia', 'Madrid'],
      explanation: 'Los Sanfermines med oksejakten holdes i Pamplona i juli.',
    },
    {
      question: 'Hvilket uttrykk brukes for å sammenligne med Norge?',
      options: ['A diferencia de Noruega... (Til forskjell fra Norge...)', 'Había una vez...', 'Estimado señor...', 'Voy a celebrar...'],
      explanation: '"A diferencia de Noruega..." = "Til forskjell fra Norge...".',
    },
    {
      question: 'Hvor feires "Las Fallas"?',
      options: ['Valencia (Spania)', 'Mexico', 'Pamplona', 'Sevilla'],
      explanation: 'Las Fallas er en vårfest i Valencia med store figurer som brennes.',
    },
  ],
  'spansk-2-6-2': [
    {
      question: 'Hva er "la comida" i Spania?',
      options: [
        'Hovedmåltidet, vanligvis rundt kl. 14',
        'En lett frokost',
        'Et sent kveldsmåltid',
        'Et mellommåltid kl. 17',
      ],
      explanation: '"La comida" er hovedmåltidet midt på dagen (ca. kl. 14) i Spania.',
    },
    {
      question: 'Hva er "la merienda"?',
      options: ['Et mellommåltid om ettermiddagen', 'Frokosten', 'Hovedmåltidet', 'Nattmaten'],
      explanation: '"La merienda" er et mellommåltid ca. kl. 17-18 (kaffe, kake).',
    },
    {
      question: 'Hvordan hilser man ofte i Spania?',
      options: ['To kyss på kinnet', 'Bukke', 'Vinke på avstand', 'Klemme tre ganger'],
      explanation: 'I Spania er to kyss på kinnet vanlig hilsemåte (særlig mellom/til kvinner).',
    },
    {
      question: 'Hva er viktig å huske om kulturelle generaliseringer?',
      options: [
        'Stereotypier er forenklinger; hverdagen varierer mye',
        'Alle spanjoler tar siesta',
        'Alle land er helt like',
        'Kultur endrer seg aldri',
      ],
      explanation: 'Stereotypier er forenklinger; hverdagen varierer mellom by/land og generasjoner.',
    },
    {
      question: 'Hva betyr "la cena"?',
      options: ['Kveldsmåltidet (ofte sent)', 'Frokosten', 'Lunsj', 'Mellommåltid'],
      explanation: '"La cena" er kveldsmåltidet, ofte sent (etter kl. 21) i Spania.',
    },
  ],
  'spansk-2-6-3': [
    {
      question: 'Hva betyr "a diferencia de"?',
      options: ['Til forskjell fra', 'Likt som', 'Derfor', 'Til slutt'],
      explanation: '"A diferencia de" = til forskjell fra. "Igual que" = likt som.',
    },
    {
      question: 'Hva betyr "sin embargo"?',
      options: ['Likevel / imidlertid', 'Til forskjell fra', 'For eksempel', 'Først'],
      explanation: '"Sin embargo" = likevel/imidlertid. "En cambio" = derimot.',
    },
    {
      question: 'Hva er hovedpoenget med å sammenligne kulturer?',
      options: [
        'Å forstå forskjeller og likheter, ikke å dømme',
        'Å avgjøre hvilken kultur som er best',
        'Å bekrefte stereotypier',
        'Å unngå andre kulturer',
      ],
      explanation: 'Kultursammenligning handler om å forstå forskjeller og likheter, ikke å bedømme.',
    },
    {
      question: 'Hva er problemet med stereotypier?',
      options: [
        'De er forenklinger som kan være skadelige',
        'De er alltid sanne',
        'De gjelder bare Norge',
        'De er nyttige fakta',
      ],
      explanation: 'Stereotypier (som "alle spanjoler er late") er skadelige forenklinger.',
    },
    {
      question: 'Hva betyr "en cambio"?',
      options: ['Derimot', 'Likevel', 'Også', 'Til slutt'],
      explanation: '"En cambio" = derimot, brukes for å kontrastere.',
    },
  ],
  'spansk-2-6-4': [
    {
      question: 'Hvor mange land har spansk som offisielt språk?',
      options: ['21', '5', '10', '50'],
      explanation: 'Den spansktalende verden omfatter 21 land med spansk som offisielt språk.',
    },
    {
      question: 'Hvilken urfolkskultur knyttes til Peru og Bolivia?',
      options: ['Inca/Quechua', 'Maya', 'Azteca/Mexica', 'Mapuche'],
      explanation: 'Inca-kulturen og quechua-språket er knyttet til Peru, Bolivia og Ecuador.',
    },
    {
      question: 'Hvilket språk snakkes i País Vasco?',
      options: ['Euskera', 'Catalán', 'Gallego', 'Quechua'],
      explanation: 'I País Vasco (Baskerland) snakkes euskera, et språk uten kjent slektskap til andre språk.',
    },
    {
      question: 'Hvilken urfolkskultur knyttes til Mexico og Guatemala?',
      options: ['Maya', 'Inca', 'Mapuche', 'Guaraní'],
      explanation: 'Maya-kulturen er knyttet til Mexico og Guatemala og lever fortsatt videre.',
    },
    {
      question: 'Hvilket eget språk har Cataluña?',
      options: ['Catalán', 'Euskera', 'Quechua', 'Guaraní'],
      explanation: 'Cataluña har sitt eget språk, catalán, med sterk regional identitet.',
    },
  ],
  'spansk-2-7-1': [
    {
      question: 'Hva betyr "¿A qué te dedicas?"',
      options: ['Hva jobber du med?', 'Hvor bor du?', 'Hva heter du?', 'Hvor gammel er du?'],
      explanation: '"¿A qué te dedicas?" / "¿En qué trabajas?" = "Hva jobber du med?".',
    },
    {
      question: 'Hvordan sier man "Jeg er lege" på spansk?',
      options: ['Soy médico', 'Soy un médico', 'Estoy médico', 'Tengo médico'],
      explanation: 'På spansk droppes artikkelen: "Soy médico" (ikke "Soy un médico").',
    },
    {
      question: 'Hvor jobber "el/la médico/a"?',
      options: ['el hospital', 'la escuela', 'el restaurante', 'la tienda'],
      explanation: 'En lege (médico) jobber på sykehuset (el hospital).',
    },
    {
      question: 'Hva betyr "Un profesor enseña a los alumnos"?',
      options: [
        'En lærer underviser elevene',
        'En lærer helbreder de syke',
        'En lærer selger til kundene',
        'En lærer reiser med elevene',
      ],
      explanation: '"Enseñar" = å undervise: "Un profesor enseña a los alumnos".',
    },
    {
      question: 'Hvilket verb betyr "å helbrede" (det en lege gjør)?',
      options: ['curar', 'enseñar', 'vender', 'cocinar'],
      explanation: '"Curar" = å helbrede: "Un médico cura a los enfermos".',
    },
  ],
  'spansk-2-7-2': [
    {
      question: 'Hva er "datos personales" i en CV?',
      options: [
        'Personlige data (navn, adresse, telefon, e-post)',
        'Arbeidserfaring',
        'Utdanning',
        'Referanser',
      ],
      explanation: '"Datos personales" = personlige opplysninger: navn, adresse, telefon, e-post.',
    },
    {
      question: 'Hva betyr "experiencia laboral"?',
      options: ['Arbeidserfaring', 'Utdanning', 'Språkkunnskaper', 'Hobbyer'],
      explanation: '"Experiencia laboral" = arbeidserfaring; "formación" = utdanning.',
    },
    {
      question: 'I hvilken rekkefølge føres jobber/utdanning vanligvis i en CV?',
      options: ['Nyeste først (omvendt kronologisk)', 'Eldste først', 'Alfabetisk', 'Tilfeldig'],
      explanation: 'CV-en føres omvendt kronologisk, med nyeste erfaring først.',
    },
    {
      question: 'Hva er et godt tips for en spansk CV?',
      options: [
        'Hold den kort (1-2 sider) og bruk formelt språk',
        'Skriv minst 10 sider',
        'Bruk mange forkortelser',
        'Skriv den uformelt med tú-form',
      ],
      explanation: 'En CV bør være kort (1-2 sider), formell og tilpasset jobben.',
    },
    {
      question: 'Hva betyr "formación" i en CV?',
      options: ['Utdanning', 'Arbeidserfaring', 'Lønnskrav', 'Referanser'],
      explanation: '"Formación" = utdanning/skolegang.',
    },
  ],
  'spansk-2-7-3': [
    {
      question: 'Hvilken tiltaleform brukes i et jobbintervju?',
      options: ['usted (formelt)', 'tú (uformelt)', 'vosotros', 'ustedes'],
      explanation: 'I jobbintervju brukes usted (formell "De") med 3. person-bøying.',
    },
    {
      question: 'Hva betyr "¿Cuáles son sus puntos fuertes?"',
      options: [
        'Hva er dine sterke sider?',
        'Hvorfor vil du jobbe her?',
        'Hva er lønnskravet ditt?',
        'Når kan du begynne?',
      ],
      explanation: '"Puntos fuertes" = sterke sider; "puntos débiles" = svake sider.',
    },
    {
      question: 'Hva er usted-formen av "¿Qué haces?"',
      options: ['¿Qué hace usted?', '¿Qué haces tú?', '¿Qué hacéis?', '¿Qué hago?'],
      explanation: 'Usted bruker 3. person: "¿Qué hace usted?".',
    },
    {
      question: 'Hva betyr "Hábleme de usted"?',
      options: ['Fortell meg om Dem selv', 'Hvor mye vil De tjene?', 'Hvorfor sluttet De?', 'Når kan De begynne?'],
      explanation: '"Hábleme de usted" = "Fortell meg om Dem selv", et vanlig åpningsspørsmål.',
    },
    {
      question: 'Hva er et godt intervjutips?',
      options: [
        'Øv på svar, bruk usted og still spørsmål til arbeidsgiveren',
        'Bruk tú-form for å virke vennlig',
        'Ikke forbered noe',
        'Unngå å stille spørsmål',
      ],
      explanation: 'Forbered svar, bruk usted, vær høflig og still også egne spørsmål.',
    },
  ],
  'spansk-2-7-4': [
    {
      question: 'Hvordan åpner du en formell e-post på spansk?',
      options: ['Estimado/a Sr./Sra.', '¡Hola!', '¿Qué tal?', 'Querido amigo'],
      explanation: 'Formell åpning: "Estimado/a Sr./Sra. [Etternavn]:".',
    },
    {
      question: 'Hva betyr "¿Dígame?" i telefonen?',
      options: ['Hallo? (Si meg / svar når man tar telefonen)', 'Hvem ringer?', 'Vent litt', 'Ha det'],
      explanation: '"¿Dígame?" brukes når man svarer på telefonen i Spania (= "Hallo?").',
    },
    {
      question: 'Hva betyr "¿De parte de quién?"',
      options: ['Hvem ringer? / Fra hvem?', 'Hvor ringer du fra?', 'Hva vil du?', 'Når ringer du?'],
      explanation: '"¿De parte de quién?" = "Hvem ringer?" / "Fra hvem?".',
    },
    {
      question: 'Hvordan avslutter du en formell e-post?',
      options: ['Atentamente', 'Besos', 'Un abrazo', '¡Chao!'],
      explanation: 'Formell avslutning: "Atentamente" / "Le saluda atentamente".',
    },
    {
      question: 'Hva betyr "¿Podría hablar con...?"',
      options: ['Kan jeg få snakke med...?', 'Hvem ringer?', 'Hallo?', 'Jeg setter deg over'],
      explanation: '"¿Podría hablar con...?" = "Kan jeg få snakke med...?" (høflig condicional).',
    },
  ],
  'spansk-2-8-1': [
    {
      question: 'Hva betyr "la contaminación"?',
      options: ['Forurensning', 'Avskoging', 'Tørke', 'Resirkulering'],
      explanation: '"La contaminación" = forurensning; "la deforestación" = avskoging.',
    },
    {
      question: 'Hva betyr "la deforestación"?',
      options: ['Avskoging', 'Forurensning', 'Global oppvarming', 'Gjenbruk'],
      explanation: '"La deforestación" = avskoging.',
    },
    {
      question: 'Hva betyr "La contaminación causa enfermedades respiratorias"?',
      options: [
        'Forurensning forårsaker luftveissykdommer',
        'Forurensning løser miljøproblemer',
        'Forurensning er bra for naturen',
        'Forurensning skyldes sykdom',
      ],
      explanation: '"Causar" = å forårsake: forurensning forårsaker luftveissykdommer.',
    },
    {
      question: 'Hva betyr uttrykket "Debemos actuar"?',
      options: ['Vi må handle', 'Det er for sent', 'Det er ikke et problem', 'Vi venter'],
      explanation: '"Debemos actuar" = vi må handle. "Es urgente" = det haster.',
    },
    {
      question: 'Hva forårsaker mye luftforurensning ifølge kapittelet?',
      options: ['Los coches (bilene)', 'Los árboles (trærne)', 'La lluvia (regnet)', 'El sol (solen)'],
      explanation: '"Los coches contaminan el aire" = bilene forurenser luften.',
    },
  ],
  'spansk-2-8-2': [
    {
      question: 'Hva betyr "el calentamiento global"?',
      options: ['Global oppvarming', 'Avskoging', 'Resirkulering', 'Forurensning'],
      explanation: '"El calentamiento global" = global oppvarming.',
    },
    {
      question: 'Hva betyr "los gases de efecto invernadero"?',
      options: ['Drivhusgasser', 'Ren energi', 'Fornybare ressurser', 'Avfall'],
      explanation: '"Gases de efecto invernadero" = drivhusgasser.',
    },
    {
      question: 'Hva er en hovedårsak til klimaendringer?',
      options: [
        'La quema de combustibles fósiles (forbrenning av fossilt brensel)',
        'La energía solar',
        'La reforestación',
        'El reciclaje',
      ],
      explanation: 'Forbrenning av fossilt brensel og utslipp av drivhusgasser er hovedårsaker.',
    },
    {
      question: 'Hvilket uttrykk brukes for å presentere statistikk?',
      options: ['Según los expertos... (Ifølge ekspertene...)', '¡Hola!', 'Había una vez...', 'Me gustaría...'],
      explanation: 'Statistikk-uttrykk: "Según los datos", "Se estima que", "Los expertos afirman que".',
    },
    {
      question: 'Hva betyr "el cambio climático"?',
      options: ['Klimaendringer', 'Værmelding', 'Årstidene', 'Klimasoner'],
      explanation: '"El cambio climático" = klimaendringer.',
    },
  ],
  'spansk-2-8-3': [
    {
      question: 'Hva er "las tres erres" (de tre R-ene)?',
      options: [
        'Reducir, Reutilizar, Reciclar',
        'Repetir, Recordar, Responder',
        'Reír, Relajar, Respirar',
        'Reservar, Reparar, Renovar',
      ],
      explanation: 'De tre R-ene: Reducir (redusere), Reutilizar (gjenbruke), Reciclar (resirkulere).',
    },
    {
      question: 'Hva er det viktigste av de tre R-ene?',
      options: ['Reducir (redusere)', 'Reciclar (resirkulere)', 'Reutilizar (gjenbruke)', 'Alle er like uviktige'],
      explanation: 'Reducir er viktigst og kommer først; deretter reutilizar, så reciclar.',
    },
    {
      question: 'Hva betyr "Ducharse en vez de bañarse"?',
      options: [
        'Dusje i stedet for å bade',
        'Slå av lyset',
        'Resirkulere plast',
        'Bruke kollektivtransport',
      ],
      explanation: '"Ducharse en vez de bañarse" = dusje i stedet for å bade (sparer vann).',
    },
    {
      question: 'Hva betyr "Debemos reciclar más"?',
      options: ['Vi må resirkulere mer', 'Vi resirkulerte', 'Vi vil resirkulere', 'Vi kan ikke resirkulere'],
      explanation: '"Debemos reciclar más" = vi må/bør resirkulere mer.',
    },
    {
      question: 'Hva betyr "reutilizar"?',
      options: ['Gjenbruke', 'Redusere', 'Resirkulere', 'Kaste'],
      explanation: '"Reutilizar" = gjenbruke; "reducir" = redusere; "reciclar" = resirkulere.',
    },
  ],
  'spansk-2-8-4': [
    {
      question: 'Hvilket uttrykk brukes for å uttrykke en mening?',
      options: ['En mi opinión... (Etter min mening...)', 'Estimado señor...', '¿Dígame?', 'Había una vez...'],
      explanation: 'Meningsuttrykk: "En mi opinión...", "Creo que...", "Me parece que...".',
    },
    {
      question: 'Hva betyr "Estoy de acuerdo contigo"?',
      options: ['Jeg er enig med deg', 'Jeg er uenig med deg', 'Jeg vet ikke', 'Jeg tar feil'],
      explanation: '"Estoy de acuerdo contigo" = jeg er enig med deg. "Tienes razón" = du har rett.',
    },
    {
      question: 'Hva er den vanlige strukturen i et argument?',
      options: [
        'Tesis (påstand) → argumentos → conclusión',
        'Conclusión → tesis → resumen',
        'Bare en konklusjon',
        'Bare eksempler',
      ],
      explanation: 'Argument: tesis (påstand), argumentos (begrunnelser), conclusión.',
    },
    {
      question: 'Hvilket uttrykk viser uenighet?',
      options: ['No comparto esa opinión', 'Estoy de acuerdo', 'Tienes razón', 'Exactamente'],
      explanation: '"No comparto esa opinión" = jeg deler ikke det synet (uenighet).',
    },
    {
      question: 'Hvilken konnektor brukes for kontrast/innvending?',
      options: ['sin embargo (likevel)', 'además (i tillegg)', 'en primer lugar (først)', 'en conclusión (avslutningsvis)'],
      explanation: '"Sin embargo" (likevel/imidlertid) uttrykker en motsetning/innvending.',
    },
  ],
  'spansk-2-9-1': [
    {
      question: 'Hva var "La Reconquista"?',
      options: [
        'Gjenerobringen av Spania fra maurerne (711-1492)',
        'Den spanske borgerkrigen',
        'Erobringen av Amerika',
        'Overgangen til demokrati',
      ],
      explanation: 'La Reconquista (711-1492) var den nesten 800 år lange gjenerobringen fra maurerne, fullført da Granada falt i 1492.',
    },
    {
      question: 'Hvilket år falt Granada og avsluttet Reconquista?',
      options: ['1492', '1936', '1808', '1700'],
      explanation: 'Granada falt i 1492, samme år som Columbus reiste til Amerika.',
    },
    {
      question: 'Hva var "La Guerra Civil Española" (1936-1939)?',
      options: [
        'Den spanske borgerkrigen',
        'Gjenerobringen fra maurerne',
        'Uavhengighetskrigen i Latin-Amerika',
        'Andre verdenskrig',
      ],
      explanation: 'La Guerra Civil Española (1936-1939) var den spanske borgerkrigen mellom republikanere og nasjonalister.',
    },
    {
      question: 'Hva kalles den spanske gullalderen (ca. 1500-1700)?',
      options: ['El Siglo de Oro', 'La Reconquista', 'La Transición', 'El Boom'],
      explanation: 'El Siglo de Oro (gullalderen) var en blomstringstid for spansk kunst og litteratur ca. 1500-1700.',
    },
    {
      question: 'Hvem invaderte den iberiske halvøy i 711?',
      options: ['Maurerne (los moros)', 'Romerne', 'Franskmennene', 'Inkaene'],
      explanation: 'I 711 invaderte maurerne (los moros) halvøya, noe som startet den mauriske perioden.',
    },
  ],
  'spansk-2-9-2': [
    {
      question: 'Hvem var "El Libertador" som frigjorde flere søramerikanske land?',
      options: ['Simón Bolívar', 'Francisco Franco', 'Hernán Cortés', 'Felipe VI'],
      explanation: 'Simón Bolívar (1783-1830), "El Libertador", frigjorde Venezuela, Colombia, Ecuador, Peru og Bolivia.',
    },
    {
      question: 'Når foregikk uavhengighetsbevegelsene i Latin-Amerika hovedsakelig?',
      options: ['Tidlig på 1800-tallet (ca. 1810-1825)', 'På 1500-tallet', 'På 1900-tallet', 'På 1700-tallet'],
      explanation: 'Uavhengighetsbevegelsene foregikk hovedsakelig 1810-1825.',
    },
    {
      question: 'Hvilken konsekvens hadde koloniseringen for urfolket?',
      options: [
        'Befolkningsreduksjon gjennom sykdom, krig og tvangsarbeid',
        'Økt befolkning og velstand',
        'Ingen endring',
        'Full selvstyre',
      ],
      explanation: 'Koloniseringen førte til kraftig befolkningsreduksjon blant urfolk gjennom sykdom, krig og tvangsarbeid.',
    },
    {
      question: 'Omtrent hvor lenge varte den spanske kolonitiden i Amerika?',
      options: ['Over 300 år (1492-ca. 1825)', 'Rundt 50 år', 'Rundt 100 år', 'Over 800 år'],
      explanation: 'Spania kontrollerte store deler av Amerika i over 300 år (1492-ca. 1825).',
    },
    {
      question: 'Hva er en arv fra kolonitiden i dagens Latin-Amerika?',
      options: [
        'Sosial ulikhet og spørsmål om jordfordeling',
        'Total økonomisk likhet',
        'Mangel på spansk språk',
        'Fravær av urfolkskulturer',
      ],
      explanation: 'Mange utfordringer i dag (sosial ulikhet, jordfordeling, kulturelle spenninger) har røtter i kolonitiden.',
    },
  ],
  'spansk-2-9-3': [
    {
      question: 'Hvilken styreform har Spania i dag?',
      options: [
        'Konstitusjonelt monarki (kong Felipe VI)',
        'Republikk uten konge',
        'Militærdiktatur',
        'Absolutt monarki',
      ],
      explanation: 'Spania er et konstitusjonelt, parlamentarisk monarki med kong Felipe VI.',
    },
    {
      question: 'Siden hvilket år har Spania vært EU-medlem?',
      options: ['1986', '1936', '2017', '1492'],
      explanation: 'Spania ble medlem av EU (daværende EF) i 1986.',
    },
    {
      question: 'Hvilken region holdt en omstridt uavhengighetsavstemning i 2017?',
      options: ['Cataluña', 'Andalucía', 'Galicia', 'Madrid'],
      explanation: 'Cataluña holdt en omstridt folkeavstemning om uavhengighet i 2017.',
    },
    {
      question: 'Hva er en felles utfordring i mange latinamerikanske land?',
      options: [
        'Sosial ulikhet (la desigualdad social)',
        'Mangel på sol',
        'For lav befolkning',
        'Fravær av demokrati helt',
      ],
      explanation: 'Felles utfordringer er bl.a. sosial ulikhet, fattigdom og korrupsjon.',
    },
    {
      question: 'Hva betyr "la pobreza"?',
      options: ['Fattigdom', 'Rikdom', 'Korrupsjon', 'Ulikhet'],
      explanation: '"La pobreza" = fattigdom; "la corrupción" = korrupsjon; "la desigualdad" = ulikhet.',
    },
  ],
  'spansk-2-9-4': [
    {
      question: 'Hva innebærer det å reflektere over historie?',
      options: [
        'Å forstå sammenhenger mellom fortid og nåtid, ikke bare pugge årstall',
        'Å bare lære datoer utenat',
        'Å unngå å analysere årsaker',
        'Å se bort fra konsekvenser',
      ],
      explanation: 'Historisk refleksjon handler om å forstå, analysere, sammenligne og koble fortid til nåtid.',
    },
    {
      question: 'Hva er en god struktur for et historisk essay?',
      options: [
        'Introducción → Contexto histórico → Análisis → Conexión → Conclusión',
        'Bare en konklusjon',
        'Conclusión → Introducción → Contexto',
        'En tilfeldig liste av datoer',
      ],
      explanation: 'Struktur: introduksjon, historisk kontekst, analyse, kobling til nåtid, konklusjon.',
    },
    {
      question: 'Hvilken nåtidig kobling nevnes til Reconquista/maurisk arv?',
      options: [
        'Maurisk arkitektur i Andalucía (Alhambra) som turistmål i dag',
        'Klimaendringer',
        'EU-medlemskap',
        'Den spanske borgerkrigen',
      ],
      explanation: 'Maurisk arkitektur som Alhambra i Andalucía er i dag et viktig turistmål.',
    },
    {
      question: 'Hva er et godt tips for historisk refleksjon?',
      options: [
        'Bruk konkrete eksempler og unngå generaliseringer',
        'Bruk bare generaliseringer',
        'Unngå eksempler',
        'Skriv kun datoer',
      ],
      explanation: 'Bruk konkrete eksempler og vis nyanser i stedet for å generalisere.',
    },
    {
      question: 'Hva er riktig rekkefølge i refleksjonsmetoden?',
      options: [
        'Forstå → Analysere → Sammenligne → Koble til nåtid',
        'Koble → Forstå → Analysere',
        'Sammenligne → Forstå → Koble',
        'Analysere → Koble → Forstå',
      ],
      explanation: 'Metoden: Forstå hva som skjedde, analysere konsekvenser, sammenligne, koble fortid og nåtid.',
    },
  ],
  'spansk-2-10-1': [
    {
      question: 'Hvilket uttrykk brukes for å si "Etter min mening"?',
      options: ['En mi opinión...', 'Estoy de acuerdo', 'Tienes razón', '¿Qué piensas?'],
      explanation: '"En mi opinión...", "Creo que...", "Me parece que..." uttrykker meninger.',
    },
    {
      question: 'Hva betyr "Estoy totalmente de acuerdo"?',
      options: ['Jeg er helt enig', 'Jeg er litt uenig', 'Jeg vet ikke', 'Jeg er helt uenig'],
      explanation: '"Estoy totalmente de acuerdo" = jeg er helt enig.',
    },
    {
      question: 'Hvordan uttrykker du uenighet høflig?',
      options: [
        'Respeto tu opinión, pero...',
        '¡Estás equivocado!',
        '¡Cállate!',
        'No me importa',
      ],
      explanation: '"Respeto tu opinión, pero..." uttrykker uenighet på en respektfull måte.',
    },
    {
      question: 'Hva betyr "¿Qué piensas tú?"',
      options: ['Hva synes du?', 'Hva gjør du?', 'Hvor er du?', 'Hvem er du?'],
      explanation: '"¿Qué piensas tú?" = "Hva synes/tenker du?", spør om andres mening.',
    },
    {
      question: 'Hva betyr "Tienes toda la razón"?',
      options: ['Du har helt rett', 'Du tar helt feil', 'Jeg er uenig', 'Det vet jeg ikke'],
      explanation: '"Tienes toda la razón" = du har helt rett (sterk enighet).',
    },
  ],
  'spansk-2-10-2': [
    {
      question: 'Hva er strukturen for en argumenterende tekst?',
      options: [
        'Introducción → Desarrollo → Conclusión',
        'Conclusión → Introducción',
        'Bare desarrollo',
        'Resumen → Opinión',
      ],
      explanation: 'En argumenterende tekst har introduksjon (tese), desarrollo (argumenter) og konklusjon.',
    },
    {
      question: 'Hvilken konnektor ordner det første argumentet?',
      options: ['En primer lugar (for det første)', 'Por último (til slutt)', 'Sin embargo (likevel)', 'Además (i tillegg)'],
      explanation: '"En primer lugar" = for det første; "en segundo lugar" = for det andre; "por último" = til slutt.',
    },
    {
      question: 'Hva betyr konnektoren "además"?',
      options: ['I tillegg', 'Likevel', 'Til slutt', 'For det første'],
      explanation: '"Además" = i tillegg, legger til et argument.',
    },
    {
      question: 'Hva betyr "por lo tanto"?',
      options: ['Derfor / følgelig', 'Likevel', 'For eksempel', 'Først'],
      explanation: '"Por lo tanto" = derfor/følgelig, uttrykker en konsekvens.',
    },
    {
      question: 'Hva er et godt skrivetips for argumenterende tekst?',
      options: [
        'Les teksten høyt for å sjekke flyten og bruk konnektorer',
        'Unngå konnektorer',
        'Skriv alt i ett avsnitt',
        'Hopp over konklusjonen',
      ],
      explanation: 'Les teksten høyt for å sjekke flyt, og bruk konnektorer for å binde sammen argumenter.',
    },
  ],
  'spansk-2-10-3': [
    {
      question: 'Hva er riktig struktur for en muntlig presentasjon?',
      options: [
        'Saludo → Introducción → Desarrollo → Conclusión → Preguntas',
        'Conclusión → Saludo → Desarrollo',
        'Bare desarrollo',
        'Preguntas → Saludo',
      ],
      explanation: 'Struktur: hilsen, introduksjon, hoveddel, konklusjon, spørsmål.',
    },
    {
      question: 'Hva er et godt forberedelsestips?',
      options: [
        'Skriv stikkord, ikke hele setninger',
        'Les opp hele manuset ord for ord',
        'Ikke øv på forhånd',
        'Snakk så fort som mulig',
      ],
      explanation: 'Skriv stikkord (ikke hele setninger), øv på forhånd og planlegg tidsbruken.',
    },
    {
      question: 'Hvordan kan du åpne en presentasjon?',
      options: [
        'Buenos días a todos. Hoy voy a hablar sobre...',
        'La cuenta, por favor.',
        '¿Dígame?',
        'Había una vez...',
      ],
      explanation: 'En vanlig åpning: "Buenos días a todos. Hoy voy a hablar sobre...".',
    },
    {
      question: 'Hvilket bindeord introduserer det første punktet i hoveddelen?',
      options: ['Primero (først)', 'Por último (til slutt)', 'En conclusión', 'Gracias'],
      explanation: '"Primero..." introduserer det første punktet; "por último" det siste.',
    },
    {
      question: 'Hva er et godt presentasjonstips?',
      options: [
        'Øv mye - jo mer du øver, jo tryggere blir du',
        'Aldri øve på forhånd',
        'Les rett fra arket hele tiden',
        'Unngå øyekontakt helt',
      ],
      explanation: 'Øving gjør deg tryggere. Husk at det er normalt å være nervøs.',
    },
  ],
  'spansk-2-10-4': [
    {
      question: 'Hvilken tid brukes i "Ayer comí paella"?',
      options: ['Pretérito indefinido (preteritum)', 'Pretérito imperfecto', 'Presente', 'Futuro'],
      explanation: '"Comí" er pretérito indefinido (preteritum), brukt om en fullført handling i fortid.',
    },
    {
      question: 'Hvilken tid brukes i "De niño jugaba al fútbol"?',
      options: ['Pretérito imperfecto', 'Pretérito indefinido', 'Futuro', 'Condicional'],
      explanation: '"Jugaba" er imperfecto, brukt om en vane i fortiden ("som barn pleide jeg å spille").',
    },
    {
      question: 'Hvilke verbtider dekkes i nivå 2-repetisjonen?',
      options: [
        'Indefinido, imperfecto, futuro, condicional, subjuntivo',
        'Bare presens',
        'Bare futuro',
        'Bare imperativ',
      ],
      explanation: 'Nivå 2 dekker indefinido, imperfecto, futuro, condicional, subjuntivo og pronomen.',
    },
    {
      question: 'Hvilken konnektor uttrykker en motsetning?',
      options: ['sin embargo (likevel)', 'además (i tillegg)', 'por lo tanto (derfor)', 'primero (først)'],
      explanation: '"Sin embargo" uttrykker en motsetning/innvending.',
    },
    {
      question: 'Hva er strukturen for en argumenterende tekst (fra repetisjonen)?',
      options: [
        'Introducción, desarrollo, conclusión',
        'Bare en konklusjon',
        'Saludo, despedida',
        'Tese uten begrunnelse',
      ],
      explanation: 'En argumenterende tekst består av introduksjon, desarrollo (argumenter) og konklusjon.',
    },
  ],
  'spansk-2-11-1': [
    {
      question: 'Hva brukes "el condicional simple" til?',
      options: [
        'Høflige forespørsler, ønsker og hypotetiske situasjoner',
        'Avsluttede fortidshandlinger',
        'Faktiske nåtidshandlinger',
        'Befalinger',
      ],
      explanation: 'Condicional uttrykker høflighet, ønsker og hypotetiske situasjoner ("ville/skulle/kunne").',
    },
    {
      question: 'Hva er condicional av "poder" i yo-form?',
      options: ['podría', 'podía', 'podería', 'puedría'],
      explanation: 'Poder har uregelmessig stamme podr-: podría (jeg kunne/ville kunne).',
    },
    {
      question: 'Hvilken setning er mest høflig?',
      options: [
        '¿Podría darme un billete, por favor?',
        '¡Dame el billete!',
        'Quiero un billete.',
        'Billete.',
      ],
      explanation: 'Condicional "¿Podría darme...?" er den mest høflige måten å be om noe på.',
    },
    {
      question: 'Hva er den uregelmessige condicional-stammen til "tener"?',
      options: ['tendr-', 'tener-', 'tien-', 'tuv-'],
      explanation: 'Tener har stamme tendr-: tendría.',
    },
    {
      question: 'Hva betyr "Me gustaría reservar una habitación con vistas al mar"?',
      options: [
        'Jeg ville gjerne reservere et rom med havutsikt',
        'Jeg reserverte et rom med havutsikt',
        'Jeg skal reservere et rom med havutsikt',
        'Jeg liker å reservere rom med havutsikt',
      ],
      explanation: '"Me gustaría" (condicional) = "jeg ville gjerne".',
    },
  ],
  'spansk-2-11-2': [
    {
      question: 'Hva betyr "la tarjeta de embarque"?',
      options: ['Boardingkort', 'Kredittkort', 'Nøkkelkort', 'Visittkort'],
      explanation: '"La tarjeta de embarque" = boardingkort.',
    },
    {
      question: 'Hva betyr "la puerta de embarque"?',
      options: ['Gaten (boarding gate)', 'Hovedinngangen', 'Nødutgangen', 'Resepsjonen'],
      explanation: '"La puerta de embarque" = gaten man går om bord ved.',
    },
    {
      question: 'Hvordan spør du høflig om havutsikt på hotellet?',
      options: [
        '¿Podría darme una habitación con vistas al mar?',
        '¡Quiero una habitación con mar!',
        'Dame una habitación al mar.',
        'Necesito ver el mar desde mi casa.',
      ],
      explanation: 'Den høfligste formen bruker condicional: "¿Podría darme...?".',
    },
    {
      question: 'Hvordan spør du om frokost er inkludert i prisen?',
      options: [
        '¿El desayuno está incluido en el precio?',
        '¿Dónde está el desayuno?',
        '¿Cuánto cuesta el desayuno?',
        '¿Puedo desayunar aquí?',
      ],
      explanation: '"¿El desayuno está incluido en el precio?" = "Er frokosten inkludert i prisen?".',
    },
    {
      question: 'Hva betyr "el vuelo"?',
      options: ['Flyvningen', 'Flyplassen', 'Gaten', 'Bagasjen'],
      explanation: '"El vuelo" = flyvningen; "el aeropuerto" = flyplassen.',
    },
  ],
  'spansk-2-11-3': [
    {
      question: 'Hva betyr "Quisiera presentar una reclamación"?',
      options: [
        'Jeg ville gjerne levere en klage',
        'Jeg vil presentere en reservasjon',
        'Jeg ønsker å gi en anbefaling',
        'Jeg vil ha en forklaring',
      ],
      explanation: '"Presentar una reclamación" = levere/fremme en klage.',
    },
    {
      question: 'Hva betyr "el equipaje perdido"?',
      options: ['Tapt bagasje', 'Forsinkelsen', 'Avbestillingen', 'Klageskjemaet'],
      explanation: '"El equipaje perdido" = tapt bagasje.',
    },
    {
      question: 'Hva betyr "El vuelo IB 3245 tiene un retraso de dos horas"?',
      options: [
        'Fly IB 3245 er to timer forsinket',
        'Fly IB 3245 er kansellert',
        'Fly IB 3245 har landet',
        'Fly IB 3245 boarder nå',
      ],
      explanation: '"Tiene un retraso de dos horas" = har to timers forsinkelse.',
    },
    {
      question: 'Hva betyr "la cancelación"?',
      options: ['Avbestillingen / kanselleringen', 'Forsinkelsen', 'Bagasjen', 'Klagen'],
      explanation: '"La cancelación" = kanselleringen; "el retraso" = forsinkelsen.',
    },
    {
      question: 'Hva betyr "No estoy satisfecho con..."?',
      options: ['Jeg er ikke fornøyd med...', 'Jeg er veldig fornøyd med...', 'Jeg anbefaler...', 'Jeg reserverer...'],
      explanation: '"No estoy satisfecho/a con..." = "Jeg er ikke fornøyd med...", brukes i klager.',
    },
  ],
  'spansk-2-11-4': [
    {
      question: 'Hvilken fortidsform brukes for avsluttede handlinger som "Visitamos la Alhambra"?',
      options: ['Pretérito indefinido', 'Pretérito imperfecto', 'Presente de indicativo', 'Futuro simple'],
      explanation: 'Indefinido brukes for avsluttede handlinger: "Visitamos la Alhambra".',
    },
    {
      question: 'Hvilken setning er grammatisk riktig?',
      options: [
        'Cuando llegamos al hotel, el recepcionista nos dio la llave.',
        'Cuando llegamos al hotel, el recepcionista nos damos la llave.',
        'Cuando llegué al hotel, el recepcionista nos dabas la llave.',
        'Cuando llegamos al hotel, el recepcionista nos dabas la llave.',
      ],
      explanation: '"Llegamos" og "dio" (begge indefinido, korrekt person) gir riktig setning.',
    },
    {
      question: 'Hva bør en god reiserapport starte med (introducción)?',
      options: [
        'Hvor, når og med hvem du reiste',
        'Konklusjonen',
        'En klage',
        'En grammatikkforklaring',
      ],
      explanation: 'Introduksjonen forteller hvor, når og med hvem du reiste: "El verano pasado viajé a... con...".',
    },
    {
      question: 'Hva betyr "Fue un viaje inolvidable"?',
      options: [
        'Det var en uforglemmelig reise',
        'Det blir en uforglemmelig reise',
        'Det var en forferdelig reise',
        'Det var en kort reise',
      ],
      explanation: '"Fue un viaje inolvidable" = "Det var en uforglemmelig reise" (indefinido av ser).',
    },
    {
      question: 'Hvordan brukes indefinido og imperfecto i en reisefortelling?',
      options: [
        'Indefinido for hendelser, imperfecto for beskrivelser/bakgrunn',
        'Imperfecto for hendelser, indefinido for bakgrunn',
        'Bare indefinido',
        'Bare presens',
      ],
      explanation: 'Indefinido driver handlingen (hendelser), imperfecto gir beskrivelser og bakgrunn.',
    },
  ],
  'spansk-2-12-1': [
    {
      question: 'Hvordan bøyes verbet "doler" (å gjøre vondt)?',
      options: [
        'Som gustar, med indirekte objektpronomen (Me duele la cabeza)',
        'Som et vanlig -ar-verb',
        'Det bøyes aldri',
        'Alltid i 1. person',
      ],
      explanation: 'Doler fungerer som gustar: "Me duele la cabeza" (hodet gjør vondt for meg).',
    },
    {
      question: 'Hva er riktig: "Jeg har vondt i øynene"?',
      options: ['Me duelen los ojos.', 'Me duele los ojos.', 'Me duelo los ojos.', 'Me duelan los ojos.'],
      explanation: 'Flertall (los ojos) krever "duelen": "Me duelen los ojos".',
    },
    {
      question: 'Hva betyr "la gripe"?',
      options: ['Influensaen', 'Forkjølelsen', 'Feberen', 'Hosten'],
      explanation: '"La gripe" = influensa; "el resfriado" = forkjølelse; "la fiebre" = feber.',
    },
    {
      question: 'Hva betyr "Me he torcido el tobillo"?',
      options: ['Jeg har forstuet ankelen', 'Jeg har brukket ankelen', 'Ankelen gjør vondt', 'Jeg har dårlig ankel'],
      explanation: '"Torcerse" = forstue: "Me he torcido el tobillo" = jeg har forstuet ankelen.',
    },
    {
      question: 'Hva betyr "la garganta"?',
      options: ['Halsen', 'Magen', 'Ryggen', 'Hånden'],
      explanation: '"La garganta" = halsen; "el estómago" = magen; "la espalda" = ryggen.',
    },
  ],
  'spansk-2-12-2': [
    {
      question: 'Hva uttrykker "deber + infinitiv"?',
      options: [
        'Bør / må (moralsk plikt eller anbefaling)',
        'Mulighet',
        'Ønske',
        'Fortid',
      ],
      explanation: '"Deber + infinitiv" uttrykker plikt/anbefaling: "Debes descansar más" = du bør hvile mer.',
    },
    {
      question: 'Hva betyr "la receta" i medisinsk sammenheng?',
      options: ['Resept (fra legen)', 'Oppskrift (matlaging)', 'Kvittering', 'Diagnose'],
      explanation: 'I medisinsk sammenheng er "la receta" en resept fra legen.',
    },
    {
      question: 'Hvilket uttrykk er upersonlig ("man må")?',
      options: ['Hay que', 'Deber', 'Tener que', 'Poder'],
      explanation: '"Hay que + infinitiv" er upersonlig ("man må"). Deber/tener que knyttes til et subjekt.',
    },
    {
      question: 'Hva betyr "Debe tomar una pastilla cada ocho horas con comida"?',
      options: [
        'Du bør ta en tablett hver åttende time med mat',
        'Du må ta åtte tabletter om dagen uten mat',
        'Du kan ta en tablett når du vil',
        'Du bør spise hver åttende time',
      ],
      explanation: '"Cada ocho horas con comida" = hver åttende time, med mat.',
    },
    {
      question: 'Hva betyr "la pastilla"?',
      options: ['Tabletten', 'Salven', 'Sprøyten', 'Bandasjen'],
      explanation: '"La pastilla" = tablett/pille; "la pomada" = salve.',
    },
  ],
  'spansk-2-12-3': [
    {
      question: 'Hva er komparativen (uregelmessig) av "bueno"?',
      options: ['mejor', 'más bueno', 'buenor', 'el más bueno'],
      explanation: 'Bueno har uregelmessig komparativ: mejor (bedre).',
    },
    {
      question: 'Hva er riktig: "Å svømme er mer avslappende enn å løpe"?',
      options: [
        'Nadar es más relajante que correr.',
        'Nadar es más relajante como correr.',
        'Nadar es tan relajante que correr.',
        'Nadar es tan relajante como correr.',
      ],
      explanation: 'Komparativ "más ... que": "Nadar es más relajante que correr".',
    },
    {
      question: 'Hva betyr "tan ... como"?',
      options: ['like ... som (likhet)', 'mer ... enn', 'mindre ... enn', 'best av alle'],
      explanation: '"Tan ... como" uttrykker likhet: "Nadar es tan relajante como correr".',
    },
    {
      question: 'Hva betyr "una dieta equilibrada"?',
      options: ['Et balansert kosthold', 'En streng diett', 'Et usunt kosthold', 'En matgruppe'],
      explanation: '"Una dieta equilibrada" = et balansert kosthold.',
    },
    {
      question: 'Hva betyr "las proteínas"?',
      options: ['Proteinene', 'Karbohydratene', 'Fettet', 'Vitaminene'],
      explanation: '"Las proteínas" = proteinene; "los carbohidratos" = karbohydratene.',
    },
  ],
  'spansk-2-12-4': [
    {
      question: 'Hva kjennetegner refleksive verb?',
      options: [
        'Subjektet utfører handlingen på seg selv, kjennetegnet av -se',
        'De har alltid uregelmessig stamme',
        'De brukes bare i fortid',
        'De krever alltid futuro',
      ],
      explanation: 'Refleksive verb (med -se i infinitiv) har subjektet som utfører handlingen på seg selv.',
    },
    {
      question: 'Hva er riktig: "Jeg bekymrer meg for mye for eksamenene"?',
      options: [
        'Yo me preocupo demasiado por los exámenes.',
        'Yo preocupo demasiado por los exámenes.',
        'Yo se preocupo demasiado por los exámenes.',
        'Yo me preocupar demasiado por los exámenes.',
      ],
      explanation: 'Refleksivt: "me preocupo" (jeg bekymrer meg) med pronomen "me" og riktig bøying.',
    },
    {
      question: 'Hvilket refleksivt pronomen hører til "yo"?',
      options: ['me', 'se', 'nos', 'os'],
      explanation: 'Refleksive pronomen: me (yo), te (tú), se (él), nos (nosotros), os (vosotros), se (ellos).',
    },
    {
      question: 'Hva uttrykker "estar + adjektiv", som "Estoy nervioso"?',
      options: [
        'En midlertidig tilstand',
        'En permanent egenskap',
        'En fortidshandling',
        'En framtidsplan',
      ],
      explanation: 'Estar + adjektiv uttrykker en midlertidig tilstand: "Estoy nervioso/a" = jeg er nervøs (nå).',
    },
    {
      question: 'Hva betyr "el bienestar"?',
      options: ['Velvære', 'Stress', 'Angst', 'Selvtillit'],
      explanation: '"El bienestar" = velvære; "el estrés" = stress; "la ansiedad" = angst.',
    },
  ],
  'spansk-2-13-1': [
    {
      question: 'Hva betyr "navegar por Internet"?',
      options: ['Å surfe på nettet', 'Å laste ned', 'Å laste opp', 'Å logge inn'],
      explanation: '"Navegar por Internet" = å surfe på nettet; "descargar" = laste ned.',
    },
    {
      question: 'Hva betyr "hacerse viral"?',
      options: [
        'Å gå viralt (spres raskt på nettet)',
        'Å bli syk av et virus',
        'Å slette en konto',
        'Å laste ned et program',
      ],
      explanation: '"Hacerse viral" = å gå viralt, spre seg raskt på nettet.',
    },
    {
      question: 'Hvilken setning er riktig: "Det er viktig at du bruker nettet forsiktig"?',
      options: [
        'Es importante que uses las redes con cuidado.',
        'Es importante que usas las redes con cuidado.',
        'Es importante que usar las redes con cuidado.',
        'Es importante que usarás las redes con cuidado.',
      ],
      explanation: '"Es importante que" tar subjuntivo: "que uses".',
    },
    {
      question: 'Hva betyr "el buscador"?',
      options: ['Søkemotoren', 'Nettleseren', 'Nettsiden', 'Innlogging'],
      explanation: '"El buscador" = søkemotoren; "el navegador" = nettleseren; "la página web" = nettsiden.',
    },
    {
      question: 'Hva betyr "subir una foto"?',
      options: ['Å laste opp et bilde', 'Å laste ned et bilde', 'Å slette et bilde', 'Å like et bilde'],
      explanation: '"Subir" = laste opp; "descargar" = laste ned.',
    },
  ],
  'spansk-2-13-2': [
    {
      question: 'Hva betyr "el portátil"?',
      options: ['Den bærbare datamaskinen', 'Nettbrettet', 'Mobiltelefonen', 'Smartklokken'],
      explanation: '"El portátil" = bærbar PC; "la tableta" = nettbrett.',
    },
    {
      question: 'Hva er bekreftende imperativ (tú) av "hacer"?',
      options: ['haz', 'hace', 'hagas', 'haces'],
      explanation: 'Hacer har uregelmessig tú-imperativ: "haz" (gjør!).',
    },
    {
      question: 'Hva er nektende imperativ (tú) av "abrir"?',
      options: ['No abras', 'No abre', 'No abres', 'No abrir'],
      explanation: 'Nektende imperativ bruker subjuntiv: "No abras" (ikke åpne).',
    },
    {
      question: 'Hva betyr "la pantalla"?',
      options: ['Skjermen', 'Tastaturet', 'Batteriet', 'Appen'],
      explanation: '"La pantalla" = skjermen; "el teclado" = tastaturet; "la batería" = batteriet.',
    },
    {
      question: 'Hva betyr "el sistema operativo"?',
      options: ['Operativsystemet', 'Programvaren', 'Appen', 'Enheten'],
      explanation: '"El sistema operativo" = operativsystemet.',
    },
  ],
  'spansk-2-13-3': [
    {
      question: 'Hvilken hilsen passer i en formell e-post?',
      options: ['Estimado señor García:', '¡Hola, tío!', '¿Qué tal, amigo?', '¡Hey!'],
      explanation: 'Formell hilsen: "Estimado/a señor/a [Etternavn]:".',
    },
    {
      question: 'Hva betyr "adjuntar un archivo"?',
      options: ['Å legge ved en fil', 'Å slette en fil', 'Å laste ned en fil', 'Å åpne en fil'],
      explanation: '"Adjuntar" = å legge ved; "un archivo" = en fil.',
    },
    {
      question: 'Hva er "la verificación en dos pasos"?',
      options: [
        'Tofaktorverifisering (ekstra sikkerhetssteg ved innlogging)',
        'Et antivirusprogram',
        'En brannmur',
        'En kryptert melding',
      ],
      explanation: '"La verificación en dos pasos" = tofaktorverifisering.',
    },
    {
      question: 'Hva betyr "el destinatario" i en e-post?',
      options: ['Mottakeren', 'Avsenderen', 'Emnet', 'Vedlegget'],
      explanation: '"El destinatario" = mottakeren; "el remitente" = avsenderen; "el asunto" = emnet.',
    },
    {
      question: 'Hva betyr "la privacidad"?',
      options: ['Personvernet', 'Nettsikkerheten', 'Personopplysningene', 'Passordet'],
      explanation: '"La privacidad" = personvern; "los datos personales" = personopplysninger.',
    },
  ],
  'spansk-2-13-4': [
    {
      question: 'Hva brukes futuro simple til?',
      options: [
        'Å snakke om fremtiden og gjøre forutsigelser',
        'Å beskrive vaner i fortiden',
        'Å gi en kommando',
        'Å uttrykke avsluttede handlinger',
      ],
      explanation: 'Futuro simple uttrykker fremtid, forutsigelser og antakelser.',
    },
    {
      question: 'Hva er futuro av "tener" i nosotros-form?',
      options: ['tendremos', 'teneremos', 'teníamos', 'tuvimos'],
      explanation: 'Tener har stamme tendr-: "tendremos" (vi vil ha).',
    },
    {
      question: 'Hva betyr "la inteligencia artificial"?',
      options: ['Kunstig intelligens', 'Virtuell virkelighet', 'Automatisering', 'Stordata'],
      explanation: '"La inteligencia artificial" = kunstig intelligens.',
    },
    {
      question: 'Hvilket uttrykk brukes for å uttrykke en mening?',
      options: ['En mi opinión...', 'Además...', 'Sin embargo...', 'En conclusión...'],
      explanation: '"En mi opinión..." / "Creo que..." uttrykker mening. "Además" legger til, "sin embargo" kontrasterer.',
    },
    {
      question: 'Hva betyr "el coche autónomo"?',
      options: ['Selvkjørende bil', 'Elbil', 'Sportsbil', 'Gammel bil'],
      explanation: '"El coche autónomo" = selvkjørende/autonom bil.',
    },
  ],
  'spansk-2-14-1': [
    {
      question: 'Hva betyr "el sentido de pertenencia"?',
      options: ['Tilhørighetsfølelsen', 'Fornuftsfølelsen', 'Meningsfølelsen', 'Eiendomsfølelsen'],
      explanation: '"El sentido de pertenencia" = tilhørighetsfølelsen, følelsen av å høre til.',
    },
    {
      question: 'Hva betyr "las raíces" (i overført betydning om identitet)?',
      options: ['Røttene (kulturelle/familiære)', 'Grenene', 'Bladene', 'Blomstene'],
      explanation: '"Las raíces" = røttene, ens kulturelle, familiære og historiske opphav.',
    },
    {
      question: 'Hva betyr "la patria"?',
      options: ['Fedrelandet / hjemlandet', 'Familien', 'Identiteten', 'Røttene'],
      explanation: '"La patria" = fedreland/hjemland, stedet man føler dyp tilknytning til.',
    },
    {
      question: 'Hva er flertallsformen av "la identidad"?',
      options: ['identidades', 'patrias', 'raíces', 'pertenencias'],
      explanation: 'Ord på -dad får flertall på -dades: identidad → identidades.',
    },
    {
      question: 'Hva betyr "la identidad"?',
      options: [
        'Identitet (det som gjør en person/gruppe unik)',
        'Tilhørighet',
        'Hjemland',
        'Røtter',
      ],
      explanation: '"La identidad" = identitet, egenskapene, verdiene og erfaringene som gjør noen unik.',
    },
  ],
  'spansk-2-14-2': [
    {
      question: 'Hva er forskjellen på "emigrante" og "inmigrante"?',
      options: [
        'En emigrante forlater landet sitt, en inmigrante ankommer et nytt land',
        'Det er ingen forskjell, begge betyr innvandrer',
        'En emigrante er lovlig, en inmigrante er ulovlig',
        'En emigrante er fattig, en inmigrante er rik',
      ],
      explanation: 'Emigrante = den som reiser ut; inmigrante = den som kommer inn i et nytt land.',
    },
    {
      question: 'Hva betyr "la integración"?',
      options: [
        'Integrasjon (å bli en del av det nye samfunnet)',
        'Migrasjon',
        'Utvandring',
        'Diskriminering',
      ],
      explanation: '"La integración" = integrasjon, prosessen der innvandrere blir del av samfunnet.',
    },
    {
      question: 'Hva betyr "la migración"?',
      options: ['Migrasjon (å flytte fra ett sted til et annet)', 'Integrasjon', 'Utdanning', 'Fattigdom'],
      explanation: '"La migración" = migrasjon, det å flytte fra ett sted til et annet.',
    },
    {
      question: 'Hva er en vanlig årsak til migrasjon?',
      options: ['Fattigdom', 'Overflod', 'For mye fritid', 'Godt vær'],
      explanation: 'Vanlige årsaker er fattigdom, arbeidsledighet, vold og mangel på muligheter.',
    },
    {
      question: 'Hva inngår ofte i integrasjon?',
      options: [
        'Språklæring, arbeid, utdanning og sosial deltakelse',
        'Bare å lære språket',
        'Å gi opp sin egen kultur helt',
        'Å bo isolert',
      ],
      explanation: 'Integrasjon innebærer språklæring, tilgang til arbeid, utdanning og sosial deltakelse.',
    },
  ],
  'spansk-2-14-3': [
    {
      question: 'Hva betyr "la convivencia"?',
      options: [
        'Sameksistens / det å leve sammen',
        'Overbevisningen',
        'Samtalen',
        'Konkurransen',
      ],
      explanation: '"La convivencia" = sameksistens, det fredelige samlivet mellom ulike grupper.',
    },
    {
      question: 'Hva er forskjellen på "los derechos" og "los deberes"?',
      options: [
        'Derechos = rettigheter, deberes = plikter',
        'Begge betyr rettigheter',
        'Derechos = plikter, deberes = rettigheter',
        'Begge betyr plikter',
      ],
      explanation: '"Los derechos" = rettigheter; "los deberes" = plikter.',
    },
    {
      question: 'Hvilken setning er grammatisk riktig?',
      options: [
        'Todos los ciudadanos tienen derecho a votar.',
        'Todos los ciudadanos tiene derecho a votar.',
        'Todos los ciudadanos tienen derecha a votar.',
        'Todo los ciudadanos tienen derecho a votar.',
      ],
      explanation: 'Flertall krever "tienen", og uttrykket er "tener derecho a".',
    },
    {
      question: 'Hva betyr "el voluntariado"?',
      options: ['Frivillig arbeid / frivillighet', 'Demokratiet', 'Plikten', 'Konkurransen'],
      explanation: '"El voluntariado" = frivillig arbeid; "el/la voluntario/a" = en frivillig.',
    },
    {
      question: 'Hva betyr "la democracia"?',
      options: ['Demokrati (folket bestemmer)', 'Diktatur', 'Monarki', 'Anarki'],
      explanation: '"La democracia" = demokrati, en styreform der folket bestemmer.',
    },
  ],
  'spansk-2-14-4': [
    {
      question: 'Hva handler "la comprensión intercultural" om?',
      options: [
        'Å forstå kulturelle normer, verdier og kommunikasjonsstiler',
        'Bare å snakke et annet språk',
        'Å tilpasse seg den andre kulturen helt',
        'Det er bare viktig for diplomater',
      ],
      explanation: 'Interkulturell forståelse handler om å forstå og verdsette andre kulturers normer, verdier og kommunikasjon.',
    },
    {
      question: 'Hva betyr "los prejuicios"?',
      options: ['Fordommer', 'Forventninger', 'Forutsetninger', 'Forhandlinger'],
      explanation: '"Los prejuicios" = fordommer, negative holdninger basert på lite kunnskap.',
    },
    {
      question: 'Hva betyr "los estereotipos"?',
      options: [
        'Stereotypier (forenklede, generaliserte forestillinger)',
        'Fakta',
        'Statistikk',
        'Tradisjoner',
      ],
      explanation: '"Los estereotipos" = stereotypier, forenklede generaliseringer om en gruppe.',
    },
    {
      question: 'Hva betyr "cuestionar"?',
      options: [
        'Å stille spørsmål ved / sette spørsmålstegn ved',
        'Å spørre noen et spørsmål',
        'Å ignorere',
        'Å akseptere',
      ],
      explanation: '"Cuestionar" = å sette spørsmålstegn ved, utfordre noe kritisk.',
    },
    {
      question: 'Hvorfor er interkulturell forståelse viktig i en globalisert verden?',
      options: [
        'For å forstå, respektere og kommunisere med andre kulturer',
        'For å unngå all kontakt med andre',
        'Bare for å lære grammatikk',
        'For å bevise at egen kultur er best',
      ],
      explanation: 'I en globalisert verden er det viktig å forstå, respektere og kommunisere på tvers av kulturer.',
    },
  ],
  'spansk-2-15-1': [
    {
      question: 'Hva er den vanlige strukturen i en novelle (el cuento)?',
      options: [
        'Planteamiento, nudo, desenlace',
        'Introducción, desarrollo, conclusión',
        'Inicio, conflicto, final',
        'Presentación, acción, resolución',
      ],
      explanation: 'En novelle har planteamiento (innledning), nudo (knute/konflikt) og desenlace (avslutning).',
    },
    {
      question: 'Hva er "la metáfora"?',
      options: [
        'Metafor (Sus ojos son dos estrellas)',
        'Sammenligning med "som"',
        'Personifikasjon',
        'Overdrivelse',
      ],
      explanation: 'En metafor beskriver noe som om det er noe annet, uten "som".',
    },
    {
      question: 'Hva er "el verso"?',
      options: ['En verselinje', 'En strofe', 'Et rim', 'Et helt dikt'],
      explanation: '"El verso" = en verselinje; "la estrofa" = en strofe; "la rima" = rim.',
    },
    {
      question: 'Hva betyr "verso libre"?',
      options: ['Fritt vers (uten fast rim/rytme)', 'Et rimet dikt', 'En strofe', 'En metafor'],
      explanation: '"Verso libre" = fritt vers, dikt uten fast rim.',
    },
    {
      question: 'Hva er "el desenlace" i en novelle?',
      options: ['Avslutningen / oppløsningen', 'Innledningen', 'Konflikten', 'Hovedpersonen'],
      explanation: '"El desenlace" = avslutningen/oppløsningen; "el planteamiento" = innledningen.',
    },
  ],
  'spansk-2-15-2': [
    {
      question: 'Hvilken avslutning passer i en formell tekst?',
      options: ['Atentamente,', '¡Hasta luego!', 'Un abrazo,', 'Besos,'],
      explanation: '"Atentamente," er en formell avslutning. "Un abrazo" og "Besos" er uformelle.',
    },
    {
      question: 'Hvilken setning er formell?',
      options: [
        'Me dirijo a ustedes para presentar una reclamación formal.',
        'Oye, esto es fatal, quiero mi dinero.',
        'Hola, tengo un problema con algo que compré.',
        'Bueno, pues resulta que no funciona lo que compré.',
      ],
      explanation: '"Me dirijo a ustedes para..." er typisk formelt register.',
    },
    {
      question: 'Hva kjennetegner "el registro formal"?',
      options: [
        'Bruk av usted/ustedes og høflighetsformler',
        'Bruk av slang og forkortelser',
        'Bare emojis',
        'tú-form og uformelt språk',
      ],
      explanation: 'Formelt register bruker usted/ustedes, fullstendige setninger og høflighetsformler.',
    },
    {
      question: 'Hva betyr "Quedo a su disposición"?',
      options: [
        'Jeg står til Deres disposisjon',
        'Jeg blir hjemme hos Dem',
        'Jeg forlater Deres kontor',
        'Jeg er uenig med Dem',
      ],
      explanation: '"Quedo a su disposición" = "Jeg står til Deres disposisjon", en formell sluttfrase.',
    },
    {
      question: 'Hva er en formell innledningshilsen?',
      options: ['Estimado/a señor/a:', '¡Hola, tío!', '¿Qué tal?', '¡Hey!'],
      explanation: '"Estimado/a señor/a:" er en formell hilsen i brev og e-post.',
    },
  ],
  'spansk-2-15-3': [
    {
      question: 'Hva er riktig struktur for et essay?',
      options: [
        'Introducción → Desarrollo → Conclusión',
        'Conclusión → Desarrollo → Introducción',
        'Desarrollo → Introducción → Conclusión',
        'Introducción → Conclusión → Desarrollo',
      ],
      explanation: 'Et essay har introduksjon, desarrollo (utvikling) og konklusjon.',
    },
    {
      question: 'Hva betyr "la tesis" i en argumenterende tekst?',
      options: ['Hovedpåstanden', 'Motargumentet', 'Konklusjonen', 'Eksempelet'],
      explanation: '"La tesis" = tesen/hovedpåstanden; "los contraargumentos" = motargumentene.',
    },
    {
      question: 'Hvilken konnektor uttrykker en motsetning?',
      options: ['Sin embargo', 'Además', 'En primer lugar', 'Por lo tanto'],
      explanation: '"Sin embargo" (likevel/imidlertid) uttrykker motsetning.',
    },
    {
      question: 'Hvilken setning er mest formell/akademisk for å uttrykke en mening?',
      options: [
        'Considero que esta situación es preocupante.',
        'Yo creo que está mal.',
        'Pienso que es una tontería.',
        'A mí me parece fatal.',
      ],
      explanation: '"Considero que..." er et formelt, nøytralt uttrykk for å fremme et synspunkt.',
    },
    {
      question: 'Hva er "los contraargumentos"?',
      options: ['Motargumentene', 'Hovedpåstanden', 'Eksemplene', 'Konklusjonen'],
      explanation: '"Los contraargumentos" = motargumentene, som en god tekst også tar hensyn til.',
    },
  ],
  'spansk-2-15-4': [
    {
      question: 'Hva skal et sammendrag (un resumen) inneholde?',
      options: [
        'Hovedideene fra teksten, med egne ord',
        'Dine egne meninger og vurderinger',
        'Kopierte setninger fra teksten',
        'Bare din personlige reaksjon',
      ],
      explanation: 'Et sammendrag gjengir hovedideene objektivt med egne ord.',
    },
    {
      question: 'Hvilken setning passer i et objektivt sammendrag?',
      options: [
        'El texto trata sobre los efectos del cambio climático.',
        'Yo pienso que el texto es muy interesante.',
        'Voy a copiar las partes más importantes del texto.',
        'Este texto me gusta mucho porque habla de la naturaleza.',
      ],
      explanation: '"El texto trata sobre..." er objektivt og gjengir innholdet uten egen mening.',
    },
    {
      question: 'Hva svarer spørsmålet "¿Qué dice el texto?" på i en analyse?',
      options: ['Innhold og tema', 'Forfatterens biografi', 'Din egen mening', 'Antall ord'],
      explanation: '"¿Qué dice el texto?" handler om innhold og tema.',
    },
    {
      question: 'Hvilken setning beskriver tekstens formål korrekt?',
      options: [
        'El propósito del texto es informar y concienciar.',
        'Tekstens problem er å informere og bevisstgjøre',
        'Tekstens prosess er å informere og bevisstgjøre',
        'Tekstens forslag er å informere og bevisstgjøre',
      ],
      explanation: '"El propósito del texto es..." = tekstens formål er...; "informar y concienciar" = informere og bevisstgjøre.',
    },
    {
      question: 'Hva er en regel for et godt sammendrag?',
      options: [
        'Vær objektiv og bruk egne ord',
        'Legg til dine egne meninger',
        'Kopier direkte fra teksten',
        'Inkluder alle detaljer',
      ],
      explanation: 'Et godt sammendrag er objektivt, bruker egne ord og tar bare med hovedideene.',
    },
  ],
  'spansk-2-16-1': [
    {
      question: 'Hvilken setning bruker pretérito perfecto riktig?',
      options: [
        'Hoy he comido paella.',
        'Ayer he comido paella.',
        'Cuando era joven, he vivido en Barcelona.',
        'Mañana he ido al médico.',
      ],
      explanation: 'Perfecto brukes med nåtidsnære tidsuttrykk som "hoy": "Hoy he comido paella". "Ayer" krever indefinido.',
    },
    {
      question: 'Hvilken setning krever subjuntivo?',
      options: [
        'Quiero que vengas a la fiesta.',
        'Mañana iré al médico.',
        'Cuando era joven, vivía en Barcelona.',
        'Ayer comí paella.',
      ],
      explanation: '"Quiero que..." utløser subjuntivo: "que vengas".',
    },
    {
      question: 'Hva er subjuntiv av "estudiar" (tú-form)?',
      options: ['estudies', 'estudias', 'estudiarás', 'estudiarías'],
      explanation: '-AR-verb i subjuntiv får e-endelser: estudies.',
    },
    {
      question: 'Hvilken setning er korrekt passiv (ser + partisipp)?',
      options: [
        'La casa fue construida por mi abuelo.',
        'La casa era construida por mi abuelo.',
        'La casa ha construido por mi abuelo.',
        'La casa siendo construida por mi abuelo.',
      ],
      explanation: 'Passiv: ser (indefinido) + partisipp som bøyes i kjønn/tall: "fue construida".',
    },
    {
      question: 'Hvilke er de direkte objektspronomenene?',
      options: [
        'me, te, lo/la, nos, os, los/las',
        'me, te, le, nos, os, les',
        'mi, ti, su, nuestro',
        'yo, tú, él, nosotros',
      ],
      explanation: 'Direkte objektspronomen: me, te, lo/la, nos, os, los/las.',
    },
  ],
  'spansk-2-16-2': [
    {
      question: 'Hva betyr den falske vennen "embarazada"?',
      options: ['Gravid', 'Flau / forlegen', 'Overrasket', 'Pinlig'],
      explanation: '"Embarazada" ligner "embarrassed" men betyr gravid.',
    },
    {
      question: 'Hva betyr den falske vennen "actualmente"?',
      options: ['For tiden / nå', 'Egentlig', 'Faktisk', 'Til slutt'],
      explanation: '"Actualmente" betyr "for tiden/nå" (ikke "actually").',
    },
    {
      question: 'Hvilket ord hører til ordfamilien rundt "educación"?',
      options: ['educativo', 'el edificio', 'la edición', 'el edicto'],
      explanation: 'Ordfamilien til educación: educar, educativo, el educador. "El edificio" (bygning) hører ikke med.',
    },
    {
      question: 'Hva er nytten av å kjenne "las familias de palabras"?',
      options: [
        'Å gjette betydningen av ukjente, beslektede ord',
        'Å lære grammatikk',
        'Å uttale ord riktig',
        'Å skrive formelle brev',
      ],
      explanation: 'Ordfamilier (samme rot) hjelper deg å forstå ukjente, beslektede ord.',
    },
    {
      question: 'Hva er "los falsos amigos"?',
      options: [
        'Ord som ser kjente ut, men betyr noe annet på spansk',
        'Ord som betyr det samme på alle språk',
        'Uregelmessige verb',
        'Sammensatte ord',
      ],
      explanation: 'Falske venner ser ut som norske/engelske ord, men har en annen betydning på spansk.',
    },
  ],
  'spansk-2-16-3': [
    {
      question: 'Hva er en god lesestrategi for å få oversikt?',
      options: [
        'Skumlese for å få oversikt over tema og struktur',
        'Slå opp alle ukjente ord i ordboken',
        'Oversette setning for setning til norsk',
        'Lese teksten høyt for å øve uttale',
      ],
      explanation: 'Skumlesing (lectura rápida) gir oversikt over tema og struktur før nærlesing.',
    },
    {
      question: 'Hva bør du gjøre FØR du lytter til en oppgave?',
      options: [
        'Lese oppgaven og eventuelle stikkord på forhånd',
        'Lukke øynene og konsentrere deg',
        'Gjette tema uten å lese oppgaven',
        'Skrive ned alle spanske ord du kan',
      ],
      explanation: 'Forberedelse: les oppgaven og stikkord før du lytter, så vet du hva du skal lytte etter.',
    },
    {
      question: 'Hva betyr konnektoren "por ejemplo"?',
      options: ['For eksempel', 'Likevel', 'I tillegg', 'For det første'],
      explanation: '"Por ejemplo" = for eksempel.',
    },
    {
      question: 'Hva er "la lectura rápida"?',
      options: ['Skumlesing', 'Nærlesing', 'Høytlesing', 'Oversettelse'],
      explanation: '"La lectura rápida" = skumlesing, å lese raskt for oversikt.',
    },
    {
      question: 'Hva er en god strategi når du ikke forstår hvert ord i en tekst?',
      options: [
        'Gjette betydningen ut fra konteksten',
        'Gi opp og slutte å lese',
        'Slå opp hvert eneste ord',
        'Bare lese første setning',
      ],
      explanation: 'Bruk konteksten til å gjette betydningen av ukjente ord i stedet for å slå opp alt.',
    },
  ],
  'spansk-2-16-4': [
    {
      question: 'Hva tester "Comprensión lectora" på eksamen?',
      options: [
        'Leseforståelse (lese tekster og svare på spørsmål)',
        'Muntlig presentasjon',
        'Uttale',
        'Håndskrift',
      ],
      explanation: '"Comprensión lectora" = leseforståelse: lese autentiske tekster og svare på spørsmål.',
    },
    {
      question: 'Hva kjennetegner en god eksamensbesvarelse i skriving?',
      options: [
        'Å svare på oppgaven med god struktur, variert språk og få feil',
        'Å skrive så mye tekst som mulig',
        'Å bruke flest mulig vanskelige ord',
        'Å kopiere setninger fra leseteksten',
      ],
      explanation: 'Du vurderes på kommunikasjon, innhold, struktur og språklig korrekthet - ikke ren mengde.',
    },
    {
      question: 'Hva er et eksempel på en negativ konsekvens av "turismo masivo"?',
      options: [
        'Overdreven turisme som øker husleien og endrer nabolagene',
        'Mangel på turister',
        'Dårlig gastronomi i turistområdene',
        'Mangel på strender og sol',
      ],
      explanation: 'Masseturisme kan øke husleien og endre nabolagenes karakter.',
    },
    {
      question: 'Hva handler god eksamensforberedelse om?',
      options: [
        'Å kunne anvende det du har lært, ikke bare pugge gloser',
        'Bare å pugge gloselister',
        'Å skrive lengst mulig',
        'Å unngå å lese tekster',
      ],
      explanation: 'God forberedelse handler om å kunne anvende kunnskapen (forstå, skrive, kommunisere), ikke bare pugge.',
    },
    {
      question: 'Hva bør du IKKE gjøre i en skriftlig eksamensbesvarelse?',
      options: [
        'Kopiere setninger direkte fra leseteksten',
        'Bruke god struktur',
        'Variere språket',
        'Svare på oppgaven',
      ],
      explanation: 'Du skal bruke eget språk; å kopiere fra leseteksten teller ikke positivt.',
    },
  ],


};

export default quizData_spansk_2;
