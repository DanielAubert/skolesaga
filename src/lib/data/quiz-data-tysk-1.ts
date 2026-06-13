import type { QuizQuestion } from './quiz-data';

const quizData_tysk_1: Record<string, QuizQuestion[]> = {
  'tysk-1-1-1': [
    {
      question: 'Wie sagt man "hei" auf Deutsch?',
      options: ['Hallo', 'Tschüss', 'Danke', 'Bitte'],
      explanation: '"Hallo" ist die häufigste informelle Begrüßung auf Deutsch.',
    },
    {
      question: 'Was bedeutet "Guten Morgen"?',
      options: ['God morgen', 'God kveld', 'God natt', 'Ha det'],
      explanation: '"Guten Morgen" wird am Morgen als Gruß verwendet.',
    },
    {
      question: 'Wie fragt man nach dem Namen auf Deutsch?',
      options: [
        'Wie heißt du?',
        'Wie alt bist du?',
        'Woher kommst du?',
        'Wie geht es dir?',
      ],
      explanation: '"Wie heißt du?" bedeutet "Hva heter du?" auf Norwegisch.',
    },
    {
      question: 'Was bedeutet "Auf Wiedersehen"?',
      options: ['På gjensyn/Ha det', 'God dag', 'Takk', 'Vær så snill'],
      explanation: '"Auf Wiedersehen" ist der formelle Abschiedsgruß.',
    },
    {
      question: 'Wie antwortet man auf "Wie geht es dir?"',
      options: [
        'Mir geht es gut, danke',
        'Ich heiße Hans',
        'Ich bin fünfzehn',
        'Ich komme aus Norwegen',
      ],
      explanation: '"Mir geht es gut, danke" betyr "Jeg har det bra, takk."',
    },
    {
      question: 'Was bedeutet "danke"?',
      options: ['Takk', 'Vær så snill', 'Ha det', 'Hei'],
      explanation: '"Danke" er det tyske ordet for "takk".',
    },
    {
      question: 'Wie sagt man "vær så snill" auf Deutsch?',
      options: ['Bitte', 'Danke', 'Hallo', 'Tschüss'],
      explanation: '"Bitte" brukes både for "vær så snill" og som svar på "danke".',
    },
    {
      question: 'Welcher Gruß passt am Abend?',
      options: ['Guten Abend', 'Guten Morgen', 'Guten Tag', 'Gute Nacht'],
      explanation: '"Guten Abend" brukes som hilsen på kvelden.',
    },
    {
      question: 'Was bedeutet "Freut mich"?',
      options: ['Hyggelig å møte deg', 'Ha det bra', 'God natt', 'Takk skal du ha'],
      explanation: '"Freut mich" sies når man møter noen for første gang.',
    },
    {
      question: 'Wie verabschiedet man sich informell?',
      options: ['Tschüss', 'Auf Wiedersehen', 'Guten Tag', 'Guten Morgen'],
      explanation: '"Tschüss" er en uformell måte å si "ha det" på.',
    },
  ],

  'tysk-1-1-2': [
    {
      question: 'Hva betyr "Ich heiße Anna" på norsk?',
      options: ['Jeg heter Anna', 'Jeg er hos Anna', 'Jeg kjenner Anna', 'Jeg liker Anna'],
      explanation: 'Verbet "heißen" betyr "å hete": Ich heiße Anna = Jeg heter Anna.',
    },
    {
      question: 'Hvordan spør du formelt om navn på tysk?',
      options: ['Wie heißen Sie?', 'Wie heißt du?', 'Wer bist du?', 'Was machst du?'],
      explanation: '"Wie heißen Sie?" med stor S i "Sie" er den formelle varianten av "Hva heter du?".',
    },
    {
      question: 'Hvilken form av "sein" er riktig: "Er ___ Lehrer"?',
      options: ['ist', 'bin', 'bist', 'sind'],
      explanation: '"Sein" bøyes: ich bin, du bist, er/sie/es ist. Derfor: Er ist Lehrer.',
    },
    {
      question: 'Hva betyr "Mein Name ist..."?',
      options: ['Navnet mitt er...', 'Vennen min er...', 'Jeg kommer fra...', 'Jeg bor i...'],
      explanation: '"Mein Name ist..." er en litt mer formell måte å presentere seg på enn "Ich heiße...".',
    },
    {
      question: 'Hvilket svar passer til spørsmålet "Wie heißt du?"',
      options: ['Ich heiße Maria.', 'Mir geht es gut.', 'Ich komme aus Norwegen.', 'Ich bin 15 Jahre alt.'],
      explanation: 'Spørsmålet "Wie heißt du?" betyr "Hva heter du?", så svaret må inneholde navnet.',
    },
  ],

  'tysk-1-1-3': [
    {
      question: 'Hva betyr "Woher kommst du?"',
      options: ['Hvor kommer du fra?', 'Hvor bor du?', 'Hvor skal du?', 'Hvordan har du det?'],
      explanation: '"Woher" betyr "hvorfra", så spørsmålet handler om opprinnelse.',
    },
    {
      question: 'Hvordan sier du "Jeg kommer fra Norge" på tysk?',
      options: ['Ich komme aus Norwegen.', 'Ich wohne in Norwegen.', 'Ich bin nach Norwegen.', 'Ich komme in Norwegen.'],
      explanation: 'Man bruker "aus" om opprinnelse: Ich komme aus Norwegen.',
    },
    {
      question: 'Hva heter Tyskland på tysk?',
      options: ['Deutschland', 'Dänemark', 'Niederlande', 'Deutschmark'],
      explanation: 'Tyskland heter Deutschland. Dänemark er Danmark.',
    },
    {
      question: 'Hvilket land har artikkel på tysk: "die ___"?',
      options: ['Schweiz', 'Norwegen', 'Deutschland', 'Schweden'],
      explanation: 'De fleste landnavn brukes uten artikkel, men Sveits heter "die Schweiz".',
    },
    {
      question: 'Hva er forskjellen på "Ich komme aus..." og "Ich wohne in..."?',
      options: [
        '"aus" sier hvor man kommer fra, "in" sier hvor man bor',
        'De betyr nøyaktig det samme',
        '"aus" brukes bare om byer, "in" bare om land',
        '"in" sier hvor man kommer fra, "aus" sier hvor man bor',
      ],
      explanation: '"Ich komme aus Norwegen" = opprinnelse, "Ich wohne in Oslo" = bosted.',
    },
  ],

  'tysk-1-1-4': [
    {
      question: 'Hvilket spørsmålsord betyr "hvorfra" på tysk?',
      options: ['Woher', 'Wo', 'Wohin', 'Wer'],
      explanation: '"Woher" = hvorfra, "Wo" = hvor (sted), "Wohin" = hvor hen (retning), "Wer" = hvem.',
    },
    {
      question: 'Hvilket spørsmålsord passer: "___ wohnst du?" (Hvor bor du?)',
      options: ['Wo', 'Woher', 'Wie', 'Wann'],
      explanation: '"Wo" brukes om sted: Wo wohnst du? = Hvor bor du?',
    },
    {
      question: 'Hva betyr "Wie geht es dir?"',
      options: ['Hvordan har du det?', 'Hvor skal du?', 'Hva heter du?', 'Hvor gammel er du?'],
      explanation: '"Wie geht es dir?" er den uformelle måten å spørre hvordan noen har det.',
    },
    {
      question: 'Hvordan svarer du at du har det bra på tysk?',
      options: ['Mir geht es gut.', 'Ich heiße gut.', 'Ich bin Berlin.', 'Es ist mir.'],
      explanation: '"Mir geht es gut" betyr "Jeg har det bra". Man kan også si bare "Gut, danke".',
    },
    {
      question: 'Hva betyr spørsmålsordet "Warum"?',
      options: ['Hvorfor', 'Når', 'Hvordan', 'Hva'],
      explanation: '"Warum" = hvorfor, "Wann" = når, "Wie" = hvordan, "Was" = hva.',
    },
  ],

  'tysk-1-2-1': [
    {
      question: 'Hva heter tallet 7 på tysk?',
      options: ['sieben', 'sechs', 'acht', 'siebzehn'],
      explanation: '7 = sieben. 6 = sechs, 8 = acht, 17 = siebzehn.',
    },
    {
      question: 'Hva heter tallet 12 på tysk?',
      options: ['zwölf', 'zwei', 'zwanzig', 'zehn'],
      explanation: '12 = zwölf. 2 = zwei, 20 = zwanzig, 10 = zehn.',
    },
    {
      question: 'Hvordan dannes tallet 14 på tysk?',
      options: ['vier + zehn = vierzehn', 'zehn + vier = zehnvier', 'vier + zig = vierzig', 'vier + und + zehn = vierundzehn'],
      explanation: 'Tallene 13-19 dannes med enertall + zehn: vierzehn = 14.',
    },
    {
      question: 'Hvilket av tenårtallene mister en bokstav fra grunntallet?',
      options: ['sechzehn (sechs mister s)', 'achtzehn', 'neunzehn', 'vierzehn'],
      explanation: '16 = sechzehn (ikke "sechszehn") - "sechs" mister s-en. Også 17 = siebzehn mister "en".',
    },
    {
      question: 'Hva heter tallet 0 på tysk?',
      options: ['null', 'nein', 'keine', 'nichts'],
      explanation: '0 = null. "Nein" betyr nei, "nichts" betyr ingenting.',
    },
  ],

  'tysk-1-2-2': [
    {
      question: 'Hvordan sier man 25 på tysk?',
      options: ['fünfundzwanzig', 'zwanzigundfünf', 'zweifünf', 'fünfzigundzwei'],
      explanation: 'Tyske sammensatte tall sier enertallet først: fünf-und-zwanzig = fem-og-tjue = 25.',
    },
    {
      question: 'Hva er spesielt med ordstillingen i tyske tall som 42?',
      options: [
        'Enertallet kommer før titallet: zweiundvierzig',
        'Titallet kommer alltid først som på norsk',
        'Man sier sifrene hver for seg: vier-zwei',
        'Tallet leses baklengs: vierzig-zwei-und',
      ],
      explanation: '42 = zweiundvierzig, bokstavelig "to-og-førti". Enertallet kommer først.',
    },
    {
      question: 'Hva heter 30 på tysk?',
      options: ['dreißig', 'dreizig', 'dreizehn', 'drei'],
      explanation: '30 = dreißig med ß, ikke "dreizig". 13 = dreizehn.',
    },
    {
      question: 'Hva heter 100 på tysk?',
      options: ['hundert', 'tausend', 'zehnzig', 'hundred'],
      explanation: '100 = hundert. 1000 = tausend.',
    },
    {
      question: 'Hvordan sier du "Det koster 35 euro" på tysk?',
      options: [
        'Das kostet fünfunddreißig Euro.',
        'Das kostet dreißigundfünf Euro.',
        'Das kostet dreifünf Euro.',
        'Das kosten fünfunddreißig Euro.',
      ],
      explanation: '35 = fünfunddreißig (fem-og-tretti), og "das kostet" = det koster.',
    },
  ],

  'tysk-1-2-3': [
    {
      question: 'Hva heter fargen rød på tysk?',
      options: ['rot', 'rosa', 'braun', 'gelb'],
      explanation: 'Rød = rot. Rosa = rosa, braun = brun, gelb = gul.',
    },
    {
      question: 'Hva betyr "grün"?',
      options: ['grønn', 'grå', 'gul', 'brun'],
      explanation: 'Grün = grønn. Grå = grau, gul = gelb, brun = braun.',
    },
    {
      question: 'Hva heter svart og hvit på tysk?',
      options: ['schwarz og weiß', 'weiß og schwarz', 'grau og braun', 'dunkel og hell'],
      explanation: 'Svart = schwarz, hvit = weiß. "Hell" betyr lys og "dunkel" betyr mørk.',
    },
    {
      question: 'Hva betyr "hellblau"?',
      options: ['lyseblå', 'mørkeblå', 'helt blå', 'blågrå'],
      explanation: '"Hell" = lys, så hellblau = lyseblå. Mørkeblå = dunkelblau.',
    },
    {
      question: 'Hva skjer med fargen i setningen "Der Ball ist blau"?',
      options: [
        'Den bøyes ikke når den står etter "ist"',
        'Den får alltid endelsen -e',
        'Den må samsvare med substantivets kjønn',
        'Den skrives med stor forbokstav',
      ],
      explanation: 'Når fargen står som predikativ etter "ist", bøyes den ikke: Der Ball ist blau.',
    },
  ],

  'tysk-1-2-4': [
    {
      question: 'Hva betyr "Was kostet das?"',
      options: ['Hva koster det?', 'Hva er det?', 'Hvor er kassa?', 'Kan jeg betale?'],
      explanation: '"Was kostet das?" brukes for å spørre om prisen.',
    },
    {
      question: 'Hvordan sier du "Jeg vil gjerne ha..." når du handler?',
      options: ['Ich möchte...', 'Ich koste...', 'Ich habe...', 'Ich heiße...'],
      explanation: '"Ich möchte..." er en høflig måte å si hva man ønsker å kjøpe.',
    },
    {
      question: 'Hva betyr "mit Karte bezahlen"?',
      options: ['betale med kort', 'betale kontant', 'få vekslepenger', 'spørre om pris'],
      explanation: '"Mit Karte bezahlen" = betale med kort. Kontant = bar bezahlen.',
    },
    {
      question: 'Hvordan sies prisen 4,50 EUR på tysk?',
      options: ['vier Euro fünfzig', 'vier Komma fünfzig Euro', 'fünfzig Euro vier', 'vierundfünfzig Euro'],
      explanation: 'Priser sies med euro først, så cent: vier Euro fünfzig = 4,50 EUR.',
    },
    {
      question: 'Hva betyr "das Wechselgeld"?',
      options: ['vekslepengene', 'kredittkortet', 'regningen', 'lommeboka'],
      explanation: '"Wechseln" betyr å veksle, så das Wechselgeld = vekslepengene.',
    },
  ],

  'tysk-1-3-1': [
    {
      question: 'Hva heter "moren" på tysk med riktig artikkel?',
      options: ['die Mutter', 'der Mutter', 'das Mutter', 'die Vater'],
      explanation: 'Mor er hunkjønn på tysk: die Mutter. Far = der Vater.',
    },
    {
      question: 'Hva betyr "die Geschwister"?',
      options: ['søsknene', 'besteforeldrene', 'foreldrene', 'barnebarna'],
      explanation: 'Die Geschwister = søsknene. Foreldrene = die Eltern.',
    },
    {
      question: 'Hva er den uformelle betegnelsen for bestemor på tysk?',
      options: ['die Oma', 'die Mutti', 'die Großvater', 'die Enkelin'],
      explanation: 'Die Oma er kjælenavnet for die Großmutter. Bestefar = der Opa.',
    },
    {
      question: 'Hvilken artikkel har "Kind" (barn)?',
      options: ['das', 'der', 'die', 'den'],
      explanation: 'Das Kind er intetkjønn. Flertall: die Kinder.',
    },
    {
      question: 'Hvordan sier du "Jeg har en bestemor og en bestefar" på tysk?',
      options: [
        'Ich habe eine Großmutter und einen Großvater.',
        'Ich habe ein Großmutter und eine Großvater.',
        'Ich habe einen Großmutter und eine Großvater.',
        'Ich bin eine Großmutter und einen Großvater.',
      ],
      explanation: 'Großmutter er hunkjønn (eine), Großvater er hankjønn og får "einen" i akkusativ.',
    },
  ],

  'tysk-1-3-2': [
    {
      question: 'Hva er eiendomsordet for "ich"?',
      options: ['mein', 'dein', 'sein', 'ihr'],
      explanation: 'ich → mein (min), du → dein (din), er → sein (hans), sie → ihr (hennes).',
    },
    {
      question: 'Hvilken form er riktig: "___ Schwester" (min søster)?',
      options: ['meine', 'mein', 'meinen', 'meiner'],
      explanation: 'Schwester er hunkjønn, og eiendomsord får -e foran hunkjønnsord: meine Schwester.',
    },
    {
      question: 'Hva er eiendomsordet for "hennes" på tysk?',
      options: ['ihr', 'sein', 'dein', 'euer'],
      explanation: 'sie (hun) → ihr. "Sein" betyr hans, "euer" betyr deres (dere).',
    },
    {
      question: 'Hvilken form er riktig: "___ Eltern" (mine foreldre)?',
      options: ['meine', 'mein', 'meinen', 'meins'],
      explanation: 'Foran flertallsord får eiendomsord endelsen -e: meine Eltern.',
    },
    {
      question: 'Hva betyr "unser"?',
      options: ['vår', 'deres', 'hans', 'din'],
      explanation: 'wir → unser (vår). Eksempel: unser Haus = huset vårt.',
    },
  ],

  'tysk-1-3-3': [
    {
      question: 'Hva betyr "Er hat blonde Haare"?',
      options: ['Han har blondt hår', 'Han har brunt hår', 'Hun har blondt hår', 'Han har langt hår'],
      explanation: '"Er" = han, "blonde Haare" = blondt hår.',
    },
    {
      question: 'Hva betyr "lockige Haare"?',
      options: ['krøllete hår', 'glatt hår', 'kort hår', 'mørkt hår'],
      explanation: 'Lockig = krøllete. Glatt hår = glatte Haare.',
    },
    {
      question: 'Hva heter "øynene" på tysk?',
      options: ['die Augen', 'die Haare', 'die Ohren', 'die Arme'],
      explanation: 'Die Augen = øynene. Die Haare = håret, die Ohren = ørene.',
    },
    {
      question: 'Hva er det motsatte av "groß" (høy/stor)?',
      options: ['klein', 'schlank', 'alt', 'dick'],
      explanation: 'Groß (stor/høy) ↔ klein (liten/lav). Schlank = slank, dick = tykk.',
    },
    {
      question: 'Hvordan sier du "Hun har blå øyne" på tysk?',
      options: ['Sie hat blaue Augen.', 'Sie ist blaue Augen.', 'Sie hat blau Auge.', 'Er hat blaue Augen.'],
      explanation: 'Man bruker "haben" om utseende: Sie hat blaue Augen.',
    },
  ],

  'tysk-1-3-4': [
    {
      question: 'Hva betyr "Ich möchte meine Familie vorstellen"?',
      options: [
        'Jeg vil gjerne presentere familien min',
        'Jeg vil gjerne besøke familien min',
        'Jeg savner familien min',
        'Jeg bor med familien min',
      ],
      explanation: '"Vorstellen" betyr å presentere/forestille.',
    },
    {
      question: 'Hva betyr "Meine Familie besteht aus vier Personen"?',
      options: [
        'Familien min består av fire personer',
        'Familien min besøker fire personer',
        'Familien min har fire hus',
        'Familien min bor med fire personer',
      ],
      explanation: '"Bestehen aus" = bestå av.',
    },
    {
      question: 'Hvilken setning er korrekt tysk?',
      options: [
        'Meine Mutter heißt Karin.',
        'Mein Mutter heißt Karin.',
        'Meine Mutter heißen Karin.',
        'Meiner Mutter heißt Karin.',
      ],
      explanation: 'Mutter er hunkjønn (meine), og "heißt" er riktig form i 3. person entall.',
    },
    {
      question: 'Hva kan du nevne når du beskriver et familiemedlem?',
      options: [
        'Relasjon, navn, alder, utseende og personlighet',
        'Bare navnet',
        'Bare alder og adresse',
        'Kun yrket',
      ],
      explanation: 'En god beskrivelse dekker hvem det er, navn, alder, utseende, personlighet og interesser.',
    },
    {
      question: 'Hva betyr "Wir verstehen uns gut"?',
      options: ['Vi kommer godt overens', 'Vi forstår tysk godt', 'Vi snakker høyt', 'Vi ser godt'],
      explanation: '"Sich gut verstehen" betyr å komme godt overens med hverandre.',
    },
  ],

  'tysk-1-4-1': [
    {
      question: 'Hva betyr "Wie spät ist es?"',
      options: ['Hva er klokka?', 'Hvor sent kommer du?', 'Når går toget?', 'Hvor lenge varer det?'],
      explanation: '"Wie spät ist es?" og "Wie viel Uhr ist es?" betyr begge "Hva er klokka?".',
    },
    {
      question: 'Hvordan sier du "Klokka er tre" på tysk?',
      options: ['Es ist drei Uhr.', 'Es ist Uhr drei.', 'Die Uhr ist drei.', 'Es sind drei Uhren.'],
      explanation: 'Hele timer sies med "Es ist ... Uhr": Es ist drei Uhr.',
    },
    {
      question: 'Hva er spesielt med klokka ett på tysk?',
      options: [
        'Man sier "ein Uhr", ikke "eins Uhr"',
        'Man sier "eins Uhr", ikke "ein Uhr"',
        'Man bruker alltid 24-timers format',
        'Man sier bare "Uhr"',
      ],
      explanation: 'Ved klokkeslett brukes "ein": Es ist ein Uhr (klokka er ett).',
    },
    {
      question: 'Hva betyr "Um wie viel Uhr?"',
      options: ['Når? / Klokka hva?', 'Hvor mange klokker?', 'Hvor er klokka?', 'Hvor lenge?'],
      explanation: '"Um wie viel Uhr?" spør om tidspunktet noe skjer, f.eks. "Um wie viel Uhr beginnt der Film?".',
    },
    {
      question: 'Hvordan sier du "Klokka er tolv" på tysk?',
      options: ['Es ist zwölf Uhr.', 'Es ist zwanzig Uhr.', 'Es ist zwei Uhr.', 'Es ist zehn Uhr.'],
      explanation: 'Tolv = zwölf. Zwanzig = tjue, zwei = to, zehn = ti.',
    },
  ],

  'tysk-1-4-2': [
    {
      question: 'Hva heter onsdag på tysk?',
      options: ['Mittwoch', 'Montag', 'Donnerstag', 'Dienstag'],
      explanation: 'Mittwoch (bokstavelig "midt i uka") = onsdag. Montag = mandag, Dienstag = tirsdag.',
    },
    {
      question: 'Hvilken artikkel har alle ukedagene på tysk?',
      options: ['der (hankjønn)', 'die (hunkjønn)', 'das (intetkjønn)', 'Ukedager har ingen artikkel'],
      explanation: 'Alle ukedager er hankjønn: der Montag, der Dienstag osv.',
    },
    {
      question: 'Hvordan sier du "på mandag" på tysk?',
      options: ['am Montag', 'im Montag', 'um Montag', 'an Montag'],
      explanation: 'Med ukedager brukes "am": Am Montag habe ich Schule.',
    },
    {
      question: 'Hva betyr "am Wochenende"?',
      options: ['i helgen', 'i ukedagene', 'ved slutten av måneden', 'hver dag'],
      explanation: 'Das Wochenende = helgen, am Wochenende = i helgen.',
    },
    {
      question: 'Hva heter lørdag på tysk?',
      options: ['Samstag', 'Sonntag', 'Freitag', 'Donnerstag'],
      explanation: 'Samstag = lørdag (i noen områder også "Sonnabend"). Sonntag = søndag.',
    },
  ],

  'tysk-1-4-3': [
    {
      question: 'Hva er spesielt med månedsnavn på tysk?',
      options: [
        'De skrives med stor forbokstav',
        'De skrives med liten forbokstav',
        'De har alltid artikkelen "die"',
        'De bøyes etter kasus',
      ],
      explanation: 'Månedene er substantiver og skrives derfor med stor forbokstav: Januar, Februar...',
    },
    {
      question: 'Hva heter mars på tysk?',
      options: ['März', 'Mai', 'Marz', 'Mars'],
      explanation: 'Mars = März, med umlaut. Mai = mai.',
    },
    {
      question: 'Hva heter høsten på tysk?',
      options: ['der Herbst', 'der Frühling', 'der Winter', 'der Sommer'],
      explanation: 'Der Herbst = høsten. Der Frühling = våren.',
    },
    {
      question: 'Hvilke måneder hører til vinteren (Winter) i Tyskland?',
      options: ['Dezember, Januar, Februar', 'November, Dezember, Januar', 'Januar, Februar, März', 'Oktober, November, Dezember'],
      explanation: 'Vinteren regnes fra desember til februar: Dezember, Januar, Februar.',
    },
    {
      question: 'Hvordan sier du "om vinteren" på tysk?',
      options: ['im Winter', 'am Winter', 'um Winter', 'auf Winter'],
      explanation: 'Med årstider og måneder brukes "im": im Winter, im Januar.',
    },
  ],

  'tysk-1-4-4': [
    {
      question: 'Hva betyr "aufstehen"?',
      options: ['stå opp', 'våkne', 'legge seg', 'kle på seg'],
      explanation: 'Aufstehen = stå opp. Våkne = aufwachen, legge seg = schlafen gehen.',
    },
    {
      question: 'Hva skjer med prefikset i delbare verb som "aufstehen"?',
      options: [
        'Det flyttes til slutten av setningen: Ich stehe um 7 Uhr auf.',
        'Det står alltid foran verbet: Ich aufstehe um 7 Uhr.',
        'Det sløyfes helt: Ich stehe um 7 Uhr.',
        'Det flyttes først i setningen: Auf ich stehe um 7 Uhr.',
      ],
      explanation: 'I presens skilles prefikset fra: Ich stehe um sieben Uhr auf.',
    },
    {
      question: 'Hva betyr "frühstücken"?',
      options: ['spise frokost', 'spise lunsj', 'spise middag', 'lage mat'],
      explanation: 'Frühstücken = spise frokost (das Frühstück = frokosten).',
    },
    {
      question: 'Hvordan sier du "Jeg ser på TV om kvelden" med det delbare verbet "fernsehen"?',
      options: ['Ich sehe abends fern.', 'Ich fernsehe abends.', 'Ich sehe fern abends.', 'Abends fernsehe ich.'],
      explanation: 'Prefikset "fern" går til slutten: Ich sehe abends fern.',
    },
    {
      question: 'Hva betyr "Hausaufgaben machen"?',
      options: ['gjøre lekser', 'gjøre husarbeid', 'bygge hus', 'rydde rommet'],
      explanation: 'Die Hausaufgaben = leksene, så "Hausaufgaben machen" = gjøre lekser.',
    },
  ],

  'tysk-1-5-1': [
    {
      question: 'Hva heter "brødet" på tysk med riktig artikkel?',
      options: ['das Brot', 'der Brot', 'die Brot', 'das Brötchen'],
      explanation: 'Das Brot = brødet (intetkjønn). Das Brötchen = rundstykket.',
    },
    {
      question: 'Hva betyr "der Käse"?',
      options: ['osten', 'kaken', 'skinken', 'smøret'],
      explanation: 'Der Käse = osten. Kaken = der Kuchen, skinken = der Schinken.',
    },
    {
      question: 'Hva er flertall av "das Ei" (egget)?',
      options: ['die Eier', 'die Eis', 'das Eier', 'die Eien'],
      explanation: 'Das Ei → die Eier. Mange tyske intetkjønnsord får -er i flertall.',
    },
    {
      question: 'Hva er samlebegrepet for frukt på tysk?',
      options: ['das Obst', 'das Gemüse', 'die Frucht', 'der Apfel'],
      explanation: 'Das Obst = frukt (samlebegrep). Das Gemüse = grønnsaker.',
    },
    {
      question: 'Hva betyr "die Kartoffel"?',
      options: ['poteten', 'gulroten', 'tomaten', 'agurken'],
      explanation: 'Die Kartoffel = poteten. Tomaten = die Tomate, agurken = die Gurke.',
    },
  ],

  'tysk-1-5-2': [
    {
      question: 'Hvordan ber du om et bord for to på en tysk restaurant?',
      options: ['Einen Tisch für zwei, bitte.', 'Zwei Tische, bitte.', 'Ein Stuhl für zwei, bitte.', 'Die Rechnung für zwei, bitte.'],
      explanation: '"Einen Tisch für zwei, bitte" = Et bord for to, takk.',
    },
    {
      question: 'Hva betyr "Ich hätte gern..."?',
      options: ['Jeg vil gjerne ha...', 'Jeg har allerede...', 'Jeg liker ikke...', 'Jeg har ikke...'],
      explanation: '"Ich hätte gern..." er en høflig måte å bestille på.',
    },
    {
      question: 'Hva betyr "die Speisekarte"?',
      options: ['menyen', 'regningen', 'kvitteringen', 'bordkortet'],
      explanation: 'Die Speisekarte = menyen. Regningen = die Rechnung.',
    },
    {
      question: 'Hvordan ber du om regningen på tysk?',
      options: ['Die Rechnung, bitte.', 'Die Speisekarte, bitte.', 'Das Wechselgeld, bitte.', 'Einen Tisch, bitte.'],
      explanation: '"Die Rechnung, bitte" eller "Zahlen, bitte" brukes når man vil betale.',
    },
    {
      question: 'Hva spør servitøren om med "Möchten Sie etwas trinken?"',
      options: [
        'Om du ønsker noe å drikke',
        'Om du ønsker noe å spise',
        'Om du vil betale',
        'Om du har reservert',
      ],
      explanation: '"Trinken" = drikke, så spørsmålet er om du vil ha noe å drikke.',
    },
  ],

  'tysk-1-5-3': [
    {
      question: 'Hva betyr "die Bäckerei"?',
      options: ['bakeriet', 'slakterbutikken', 'supermarkedet', 'kassa'],
      explanation: 'Die Bäckerei = bakeriet. Slakterbutikken = die Metzgerei.',
    },
    {
      question: 'Hva betyr "eine Flasche Milch"?',
      options: ['en flaske melk', 'en boks melk', 'en pose melk', 'en liter melk'],
      explanation: 'Die Flasche = flasken. En boks = eine Dose, en pose = eine Tüte.',
    },
    {
      question: 'Hvor mye er "ein Pfund" i Tyskland?',
      options: ['500 gram', '1 kilo', '100 gram', '454 gram som i England'],
      explanation: 'I Tyskland brukes "ein Pfund" om 500 gram, altså en halv kilo.',
    },
    {
      question: 'Hvordan ber du om "En kilo epler, takk" på tysk?',
      options: ['Ein Kilo Äpfel, bitte.', 'Eine Kilo Apfel, bitte.', 'Ein Kilo von Äpfel, bitte.', 'Äpfel ein Kilo, danke.'],
      explanation: 'Mengde + vare uten preposisjon: Ein Kilo Äpfel, bitte.',
    },
    {
      question: 'Hva betyr "Das ist zu teuer"?',
      options: ['Det er for dyrt', 'Det er veldig billig', 'Det er utsolgt', 'Det er på tilbud'],
      explanation: 'Teuer = dyr, "zu teuer" = for dyr.',
    },
  ],

  'tysk-1-5-4': [
    {
      question: 'Hva er "das Sauerkraut"?',
      options: ['surkål', 'sursteik', 'sur drikk', 'sennep'],
      explanation: 'Sauerkraut er fermentert (sur) kål, en tysk klassiker.',
    },
    {
      question: 'Hva er "die Currywurst"?',
      options: ['pølse med karrisaus', 'pølse med sterk chili', 'indisk karrirett', 'hvit pølse fra Bayern'],
      explanation: 'Currywurst er en stekt pølse servert med karrikrydret saus - populær gatemat.',
    },
    {
      question: 'Omtrent hvor mange pølsetyper finnes i Tyskland?',
      options: ['over 1500', 'rundt 50', 'rundt 200', 'under 20'],
      explanation: 'Tyskland har over 1500 forskjellige pølsetyper (Würste).',
    },
    {
      question: 'Hvor kommer "die Weißwurst" opprinnelig fra?',
      options: ['Bayern', 'Berlin', 'Hamburg', 'Sveits'],
      explanation: 'Weißwurst (hvit pølse) er en spesialitet fra Bayern.',
    },
    {
      question: 'Hva er "der Lebkuchen"?',
      options: ['pepperkake', 'saltkringle', 'melbolle', 'panert kotelett'],
      explanation: 'Lebkuchen = pepperkake. Saltkringle = die Brezel, panert kotelett = das Schnitzel.',
    },
  ],

  'tysk-1-6-1': [
    {
      question: 'Hva heter kjøkkenet på tysk?',
      options: ['die Küche', 'der Kuchen', 'das Wohnzimmer', 'der Keller'],
      explanation: 'Die Küche = kjøkkenet. Pass på: der Kuchen = kaken!',
    },
    {
      question: 'Hva betyr "das Schlafzimmer"?',
      options: ['soverommet', 'stua', 'badet', 'barnerommet'],
      explanation: 'Schlafen = å sove, så das Schlafzimmer = soverommet.',
    },
    {
      question: 'Hva betyr "der Keller"?',
      options: ['kjelleren', 'loftet', 'gangen', 'garasjen'],
      explanation: 'Der Keller = kjelleren. Loftet = der Dachboden.',
    },
    {
      question: 'Hva betyr "gemütlich"?',
      options: ['koselig', 'moderne', 'mørkt', 'stort'],
      explanation: 'Gemütlich = koselig/hyggelig - et typisk tysk ord for god stemning.',
    },
    {
      question: 'Hvilken setning betyr "Huset er stort"?',
      options: ['Das Haus ist groß.', 'Das Haus ist klein.', 'Der Haus ist groß.', 'Das Haus sind groß.'],
      explanation: 'Das Haus (intetkjønn) + ist (3. person entall) + groß.',
    },
  ],

  'tysk-1-6-2': [
    {
      question: 'Hva heter senga på tysk med riktig artikkel?',
      options: ['das Bett', 'der Bett', 'die Bett', 'das Sofa'],
      explanation: 'Das Bett = senga (intetkjønn).',
    },
    {
      question: 'Hva betyr "der Kühlschrank"?',
      options: ['kjøleskapet', 'klesskapet', 'komfyren', 'oppvaskmaskinen'],
      explanation: 'Kühl = kjølig + Schrank = skap, altså kjøleskapet.',
    },
    {
      question: 'Hva betyr posisjonsordet "zwischen"?',
      options: ['mellom', 'bak', 'foran', 'ved siden av'],
      explanation: 'Zwischen = mellom. Bak = hinter, foran = vor, ved siden av = neben.',
    },
    {
      question: 'Hvilket møbel hører naturlig hjemme "im Schlafzimmer"?',
      options: ['der Nachttisch', 'der Herd', 'die Spüle', 'der Esstisch'],
      explanation: 'Nattbordet (der Nachttisch) står på soverommet. Herd, Spüle og Esstisch hører til kjøkkenet.',
    },
    {
      question: 'Hva betyr "unter"?',
      options: ['under', 'på', 'over', 'i'],
      explanation: 'Unter = under. På = auf, i = in.',
    },
  ],

  'tysk-1-6-3': [
    {
      question: 'Hva betyr "In meinem Zimmer gibt es..."?',
      options: ['I rommet mitt er det...', 'Rommet mitt gir...', 'Jeg gir rommet mitt...', 'I rommet mitt mangler...'],
      explanation: '"Es gibt" betyr "det finnes/det er": In meinem Zimmer gibt es einen Schreibtisch.',
    },
    {
      question: 'Hva heter skrivebordet på tysk?',
      options: ['der Schreibtisch', 'der Nachttisch', 'das Bücherregal', 'die Kommode'],
      explanation: 'Schreiben = å skrive + Tisch = bord: der Schreibtisch.',
    },
    {
      question: 'Hva betyr "An der Wand hängt ein Poster"?',
      options: [
        'På veggen henger en plakat',
        'Ved vinduet står en plakat',
        'På gulvet ligger en plakat',
        'I skapet finnes en plakat',
      ],
      explanation: 'An der Wand = på veggen, hängt = henger.',
    },
    {
      question: 'Hvordan sier du "Jeg har en datamaskin" på tysk?',
      options: ['Ich habe einen Computer.', 'Ich habe ein Computer.', 'Ich bin einen Computer.', 'Ich habe eine Computer.'],
      explanation: 'Der Computer er hankjønn og får "einen" i akkusativ: Ich habe einen Computer.',
    },
    {
      question: 'Hva betyr "das Bücherregal"?',
      options: ['bokhylla', 'skrivebordet', 'plakaten', 'planten'],
      explanation: 'Bücher = bøker + Regal = hylle: bokhylla.',
    },
  ],

  'tysk-1-6-4': [
    {
      question: 'Hva betyr "die WG (Wohngemeinschaft)"?',
      options: ['kollektiv/bofellesskap', 'enebolig', 'rekkehus', 'hybel'],
      explanation: 'Wohngemeinschaft = bofellesskap der flere deler en bolig.',
    },
    {
      question: 'Hva betyr "das Einfamilienhaus"?',
      options: ['enebolig', 'rekkehus', 'boligblokk', 'hytte'],
      explanation: 'Ein + Familie + Haus = hus for én familie, altså enebolig.',
    },
    {
      question: 'Hvordan sier du "Jeg bor i en leilighet" på tysk?',
      options: [
        'Ich wohne in einer Wohnung.',
        'Ich wohne in eine Wohnung.',
        'Ich wohne bei einer Wohnung.',
        'Ich lebe an einer Wohnung.',
      ],
      explanation: 'Etter "wohnen in" (sted) brukes dativ: in einer Wohnung.',
    },
    {
      question: 'Hva betyr "Ich wohne bei meinen Eltern"?',
      options: ['Jeg bor hos foreldrene mine', 'Jeg bor nær foreldrene mine', 'Jeg besøker foreldrene mine', 'Jeg bor uten foreldrene mine'],
      explanation: '"Bei" + person betyr "hos": bei meinen Eltern = hos foreldrene mine.',
    },
    {
      question: 'Hva betyr "die Miete"?',
      options: ['husleien', 'leiligheten', 'naboen', 'kontrakten'],
      explanation: 'Die Miete = husleien. "Die Miete ist 800 Euro" = husleien er 800 euro.',
    },
  ],

  'tysk-1-7-1': [
    {
      question: 'Hva betyr "die Hose"?',
      options: ['bukse', 'strømpe', 'skjorte', 'jakke'],
      explanation: 'Die Hose = bukse - ikke "hose" som på engelsk! Skjorte = das Hemd.',
    },
    {
      question: 'Hva betyr "der Pullover"?',
      options: ['genser', 'frakk', 'skjorte', 'dress'],
      explanation: 'Der Pullover = genser.',
    },
    {
      question: 'Hvilken artikkel har "Hemd" (skjorte)?',
      options: ['das', 'der', 'die', 'den'],
      explanation: 'Das Hemd er intetkjønn.',
    },
    {
      question: 'Hva betyr "die Handschuhe"?',
      options: ['hansker', 'sko', 'sokker', 'luer'],
      explanation: 'Hand + Schuhe = "håndsko", altså hansker.',
    },
    {
      question: 'Hvilken regel gjelder ofte for klesplagg som slutter på -e, som "Jacke"?',
      options: [
        'De er ofte hunkjønn (die)',
        'De er alltid hankjønn (der)',
        'De er alltid intetkjønn (das)',
        'De har ingen artikkel',
      ],
      explanation: 'Mange substantiv på -e er hunkjønn: die Jacke, die Hose, die Mütze.',
    },
  ],

  'tysk-1-7-2': [
    {
      question: 'Hva betyr "Kann ich Ihnen helfen?"',
      options: ['Kan jeg hjelpe Dem?', 'Kan De hjelpe meg?', 'Trenger du noe?', 'Hva leter du etter?'],
      explanation: 'Ekspeditøren spør høflig: "Kann ich Ihnen helfen?" = Kan jeg hjelpe Dem?',
    },
    {
      question: 'Hva betyr "anprobieren"?',
      options: ['prøve (klær)', 'kjøpe', 'bytte', 'betale'],
      explanation: 'Anprobieren = å prøve klær. "Möchten Sie sie anprobieren?" = Vil De prøve den?',
    },
    {
      question: 'Hva er "die Umkleidekabine"?',
      options: ['prøverommet', 'kassa', 'utstillingsvinduet', 'lageret'],
      explanation: 'Die Umkleidekabine = prøverommet, der man prøver klær.',
    },
    {
      question: 'Hva betyr "Welche Größe haben Sie?"',
      options: ['Hvilken størrelse har De?', 'Hvilken farge vil De ha?', 'Hvor stor er butikken?', 'Hvor mye veier De?'],
      explanation: 'Die Größe = størrelsen. Ekspeditøren spør om klesstørrelsen din.',
    },
    {
      question: 'Hva betyr "Kann ich mit Karte zahlen?"',
      options: ['Kan jeg betale med kort?', 'Kan jeg få et kart?', 'Kan jeg betale kontant?', 'Kan jeg få kvitteringen?'],
      explanation: 'Mit Karte zahlen = betale med kort. Kvitteringen = der Kassenbon.',
    },
  ],

  'tysk-1-7-3': [
    {
      question: 'Hva betyr "dunkelblau"?',
      options: ['mørkeblå', 'lyseblå', 'blågrønn', 'helt blå'],
      explanation: 'Dunkel = mørk, så dunkelblau = mørkeblå. Lyseblå = hellblau.',
    },
    {
      question: 'Hva skjer med adjektivet i "das rote Kleid"?',
      options: [
        'Det får en endelse fordi det står foran substantivet',
        'Det bøyes aldri',
        'Det skrives med stor forbokstav',
        'Det settes etter substantivet',
      ],
      explanation: 'Adjektiv foran substantiv får endelse: das rote Kleid, die blaue Jacke.',
    },
    {
      question: 'Hva betyr "Die Schuhe sind zu eng"?',
      options: ['Skoene er for trange', 'Skoene er for store', 'Skoene er for dyre', 'Skoene er fine'],
      explanation: 'Eng = trang. "Zu weit" ville bety for vide/store.',
    },
    {
      question: 'Hvilket størrelsessystem brukes for sko i Tyskland?',
      options: ['Europeiske størrelser (36, 37, 38...)', 'Engelske størrelser (5, 6, 7...)', 'Amerikanske størrelser', 'Centimetermål'],
      explanation: 'Tyskland bruker europeiske skostørrelser, som i Norge.',
    },
    {
      question: 'Hva betyr "Welche Schuhgröße haben Sie?"',
      options: ['Hvilken skostørrelse har De?', 'Hvilke sko liker De?', 'Hvor mange sko har De?', 'Hvilken skofarge vil De ha?'],
      explanation: 'Die Schuhgröße = skostørrelsen.',
    },
  ],

  'tysk-1-7-4': [
    {
      question: 'Hvilket verb brukes for å si hva noen har på seg?',
      options: ['tragen', 'nehmen', 'ziehen', 'haben'],
      explanation: '"Tragen" betyr å bære/ha på seg: Ich trage eine Jeans.',
    },
    {
      question: 'Hva betyr "Er trägt ein blaues Hemd"?',
      options: [
        'Han har på seg en blå skjorte',
        'Han kjøper en blå skjorte',
        'Han vasker en blå skjorte',
        'Han liker en blå skjorte',
      ],
      explanation: 'Trägt er 3. person av tragen (med vokalskifte a → ä).',
    },
    {
      question: 'Hva betyr "Das steht dir gut!"?',
      options: ['Det kler deg!', 'Det står der borte!', 'Det passer ikke!', 'Det er for stort!'],
      explanation: '"Das steht dir gut" er et kompliment: Det kler deg!',
    },
    {
      question: 'Hvordan sier du "I dag har jeg på meg..." på tysk?',
      options: ['Heute trage ich...', 'Heute ich trage...', 'Ich heute trage...', 'Trage heute ich...'],
      explanation: 'Når "heute" står først, kommer verbet på plass 2: Heute trage ich...',
    },
    {
      question: 'Hva betyr "Ich trage gern Jeans"?',
      options: ['Jeg liker å ha på meg jeans', 'Jeg har aldri på meg jeans', 'Jeg må ha på meg jeans', 'Jeg skal kjøpe jeans'],
      explanation: '"Gern" + verb uttrykker at man liker å gjøre noe.',
    },
  ],

  'tysk-1-8-1': [
    {
      question: 'Hva betyr "das Klassenzimmer"?',
      options: ['klasserommet', 'skolegården', 'gymsalen', 'lærerværelset'],
      explanation: 'Klasse + Zimmer = klasserom. Skolegården = der Schulhof.',
    },
    {
      question: 'Hva betyr "die Tafel"?',
      options: ['tavla', 'pulten', 'boka', 'veggen'],
      explanation: 'Die Tafel = tavla. "Der Lehrer steht an der Tafel" = Læreren står ved tavla.',
    },
    {
      question: 'Hvordan dannes ordet "Turnhalle" (gymsal)?',
      options: [
        'Turn (turn/gym) + Halle (hall)',
        'Tur (tur) + Halle (hall)',
        'Turn (tårn) + Halle (hule)',
        'Det er et lånord fra engelsk',
      ],
      explanation: 'Tysk lager sammensatte ord: Turn + Halle = gymsal.',
    },
    {
      question: 'Hva heter elevene på tysk?',
      options: ['die Schüler', 'die Lehrer', 'die Schulen', 'die Klassen'],
      explanation: 'Der Schüler = eleven, die Schüler = elevene. Die Lehrer = lærerne.',
    },
    {
      question: 'Hva betyr "das Heft"?',
      options: ['skriveboken/heftet', 'pennalet', 'viskelæret', 'blyanten'],
      explanation: 'Das Heft = heftet/skriveboken man skriver i på skolen.',
    },
  ],

  'tysk-1-8-2': [
    {
      question: 'Hva betyr "Mein Lieblingsfach ist Musik"?',
      options: [
        'Favorittfaget mitt er musikk',
        'Jeg er flink i musikk',
        'Jeg hater musikk',
        'Musikklæreren min er snill',
      ],
      explanation: 'Das Lieblingsfach = favorittfaget.',
    },
    {
      question: 'Hva heter historie (faget) på tysk?',
      options: ['Geschichte', 'Historie', 'Erdkunde', 'Kunst'],
      explanation: 'Geschichte = historie. Erdkunde = geografi, Kunst = kunst.',
    },
    {
      question: 'Hva betyr "langweilig"?',
      options: ['kjedelig', 'interessant', 'vanskelig', 'lang'],
      explanation: 'Langweilig = kjedelig. Interessant = interessant, vanskelig = schwer/schwierig.',
    },
    {
      question: 'Hva betyr "Mathematik ist schwer"?',
      options: ['Matematikk er vanskelig', 'Matematikk er lett', 'Matematikk er tungt å bære', 'Matematikk er gøy'],
      explanation: 'Schwer betyr vanskelig (eller tung). Lett = einfach/leicht.',
    },
    {
      question: 'Hva betyr "Sport gefällt mir"?',
      options: ['Jeg liker gym/idrett', 'Jeg er god i idrett', 'Idrett er farlig', 'Jeg faller i gymtimen'],
      explanation: '"Gefallen" betyr å behage: Sport gefällt mir = jeg liker idrett.',
    },
  ],

  'tysk-1-8-3': [
    {
      question: 'Hvordan dannes kvinneformen av de fleste yrker på tysk?',
      options: [
        'Med endelsen -in: Lehrer → Lehrerin',
        'Med endelsen -e: Lehrer → Lehrere',
        'Med "Frau" foran: Frau Lehrer',
        'Det finnes ingen egen kvinneform',
      ],
      explanation: 'Kvinneformen får oftest -in: der Lehrer → die Lehrerin, der Arzt → die Ärztin.',
    },
    {
      question: 'Hva betyr "der Arzt"?',
      options: ['lege', 'arkitekt', 'advokat', 'apoteker'],
      explanation: 'Der Arzt = lege (mann). Kvinnelig lege = die Ärztin.',
    },
    {
      question: 'Hva betyr "Was sind Sie von Beruf?"',
      options: ['Hva jobber De som?', 'Hvor jobber De?', 'Liker De jobben Deres?', 'Når begynte De i jobben?'],
      explanation: 'Der Beruf = yrket. Spørsmålet betyr "Hva er yrket Deres?".',
    },
    {
      question: 'Hvordan sier du "Faren min jobber som ingeniør"?',
      options: [
        'Mein Vater arbeitet als Ingenieur.',
        'Mein Vater arbeitet wie Ingenieur.',
        'Mein Vater ist arbeiten Ingenieur.',
        'Meine Vater arbeitet als Ingenieur.',
      ],
      explanation: '"Arbeiten als" = jobbe som. Vater er hankjønn: mein Vater.',
    },
    {
      question: 'Hvilken setning er korrekt når en kvinne sier at hun er lærer?',
      options: ['Ich bin Lehrerin.', 'Ich bin eine Lehrer.', 'Ich bin Lehrerinnen.', 'Ich habe Lehrerin.'],
      explanation: 'Yrker står uten artikkel etter "sein": Ich bin Lehrerin.',
    },
  ],

  'tysk-1-8-4': [
    {
      question: 'Hva betyr "Ich will Arzt werden"?',
      options: ['Jeg vil bli lege', 'Jeg er lege', 'Jeg kjenner en lege', 'Jeg trenger en lege'],
      explanation: '"Werden" = å bli. Ich will Arzt werden = Jeg vil bli lege.',
    },
    {
      question: 'Hva er forskjellen mellom "ich will" og "ich möchte"?',
      options: [
        '"will" uttrykker sterk vilje, "möchte" er et høflig ønske',
        '"möchte" er sterkere enn "will"',
        'De er helt identiske i bruk',
        '"will" brukes kun om fremtiden',
      ],
      explanation: '"Ich will" = jeg vil (bestemt), "ich möchte" = jeg vil gjerne (høflig).',
    },
    {
      question: 'Hvor står infinitiven "werden" i setningen "Ich will Lehrerin werden"?',
      options: ['Til slutt i setningen', 'Rett etter subjektet', 'Først i setningen', 'Rett etter "will"'],
      explanation: 'Med modalverb går infinitiven til slutten: Ich will Lehrerin werden.',
    },
    {
      question: 'Hva betyr "Sie möchte im Ausland arbeiten"?',
      options: [
        'Hun vil gjerne jobbe i utlandet',
        'Hun jobber i utlandet',
        'Hun må jobbe ute',
        'Hun vil reise til Australia',
      ],
      explanation: 'Das Ausland = utlandet, im Ausland = i utlandet.',
    },
    {
      question: 'Hva betyr "Was willst du werden?"',
      options: ['Hva vil du bli?', 'Hva gjør du?', 'Hvem er du?', 'Hva ønsker du deg?'],
      explanation: 'Spørsmålet handler om fremtidig yrke: Hva vil du bli?',
    },
  ],

  'tysk-1-9-1': [
    {
      question: 'Hva heter toget på tysk med riktig artikkel?',
      options: ['der Zug', 'das Zug', 'die Zug', 'der Bus'],
      explanation: 'Der Zug = toget (hankjønn). Der Bus = bussen.',
    },
    {
      question: 'Hva betyr "das Fahrrad"?',
      options: ['sykkelen', 'motorsykkelen', 'bilen', 'trikken'],
      explanation: 'Das Fahrrad = sykkelen. Motorsykkelen = das Motorrad.',
    },
    {
      question: 'Hvilken kasus krever preposisjonen "mit" når man sier hvilket transportmiddel man bruker?',
      options: ['dativ', 'akkusativ', 'nominativ', 'genitiv'],
      explanation: '"Mit" styrer alltid dativ: mit dem Zug, mit dem Bus, mit der Straßenbahn.',
    },
    {
      question: 'Hva heter trikken på tysk?',
      options: ['die Straßenbahn', 'die U-Bahn', 'der Zug', 'das Taxi'],
      explanation: 'Die Straßenbahn = trikken. Die U-Bahn = t-banen.',
    },
    {
      question: 'Hvordan sier du "med toget" på tysk?',
      options: ['mit dem Zug', 'mit den Zug', 'mit der Zug', 'mit das Zug'],
      explanation: 'Der Zug er hankjønn, og i dativ blir "der" til "dem": mit dem Zug.',
    },
  ],

  'tysk-1-9-2': [
    {
      question: 'Hva betyr "das Rathaus"?',
      options: ['rådhuset', 'rottehuset', 'sykehuset', 'biblioteket'],
      explanation: 'Der Rat = råd + das Haus = hus: rådhuset.',
    },
    {
      question: 'Hva betyr "die Apotheke"?',
      options: ['apoteket', 'banken', 'posten', 'kirken'],
      explanation: 'Die Apotheke = apoteket. Banken = die Bank, posten = die Post.',
    },
    {
      question: 'Hvordan spør du om veien på tysk?',
      options: ['Wie komme ich zum Bahnhof?', 'Wo fahre ich der Bahnhof?', 'Wann ist der Bahnhof?', 'Was kostet der Bahnhof?'],
      explanation: '"Wie komme ich zum/zur...?" = Hvordan kommer jeg til...?',
    },
    {
      question: 'Hva betyr "das Krankenhaus"?',
      options: ['sykehuset', 'apoteket', 'legekontoret', 'gamlehjemmet'],
      explanation: 'Krank = syk + Haus = hus: sykehuset.',
    },
    {
      question: 'Hvilken artikkel har "Bahnhof" (togstasjon)?',
      options: ['der', 'die', 'das', 'den i nominativ'],
      explanation: 'Der Bahnhof er hankjønn.',
    },
  ],

  'tysk-1-9-3': [
    {
      question: 'Hva betyr "die Fahrkarte"?',
      options: ['billetten', 'rutetabellen', 'avgangen', 'sporet'],
      explanation: 'Die Fahrkarte = billetten. Rutetabellen = der Fahrplan.',
    },
    {
      question: 'Hva er forskjellen på "die Abfahrt" og "die Ankunft"?',
      options: [
        'Abfahrt = avgang, Ankunft = ankomst',
        'Abfahrt = ankomst, Ankunft = avgang',
        'Begge betyr avgang',
        'Abfahrt = billett, Ankunft = spor',
      ],
      explanation: 'Abfahren = å dra av sted, ankommen = å ankomme.',
    },
    {
      question: 'Hva betyr "umsteigen"?',
      options: ['bytte (tog/buss)', 'gå av', 'gå på', 'stå over'],
      explanation: 'Umsteigen = bytte transportmiddel. Aussteigen = gå av, einsteigen = gå på.',
    },
    {
      question: 'Hva betyr "Hin und zurück?"',
      options: ['Tur-retur?', 'Frem og tilbake i køen?', 'Hit og dit?', 'Første klasse?'],
      explanation: 'I billettluka betyr "Hin und zurück?" om du vil ha tur-retur-billett.',
    },
    {
      question: 'Hva betyr "das Gleis"?',
      options: ['sporet/perrongen', 'skinnene på sykkelen', 'billettkontoret', 'konduktøren'],
      explanation: 'Das Gleis = sporet. "Von welchem Gleis fährt der Zug?" = Fra hvilket spor går toget?',
    },
  ],

  'tysk-1-9-4': [
    {
      question: 'Hva er "das Einzelzimmer"?',
      options: ['enkeltrom', 'dobbeltrom', 'familierom', 'bad'],
      explanation: 'Einzel = enkelt: enkeltrom. Dobbeltrom = das Doppelzimmer.',
    },
    {
      question: 'Hva betyr "die Übernachtung"?',
      options: ['overnatting', 'frokost', 'natten', 'resepsjonen'],
      explanation: 'Übernachten = å overnatte, die Übernachtung = overnattingen.',
    },
    {
      question: 'Hvordan sier du "Jeg vil gjerne bestille et rom" på tysk?',
      options: [
        'Ich möchte ein Zimmer reservieren.',
        'Ich möchte einen Zimmer reservieren.',
        'Ich will das Hotel reservieren.',
        'Ich möchte ein Zimmer verlieren.',
      ],
      explanation: 'Das Zimmer er intetkjønn: ein Zimmer. Reservieren = bestille/reservere.',
    },
    {
      question: 'Hva betyr "der Schlüssel"?',
      options: ['nøkkelen', 'heisen', 'frokosten', 'kofferten'],
      explanation: 'Der Schlüssel = nøkkelen. Heisen = der Aufzug.',
    },
    {
      question: 'Hva betyr "Für wie viele Nächte?"',
      options: ['For hvor mange netter?', 'For hvor mange personer?', 'Hvor mange rom?', 'Hvor mye koster natten?'],
      explanation: 'Die Nacht = natten, die Nächte = nettene. Resepsjonen spør hvor lenge du skal bo.',
    },
  ],

  'tysk-1-10-1': [
    {
      question: 'Hva er riktig bøyning av "sein" for "wir"?',
      options: ['sind', 'seid', 'bin', 'ist'],
      explanation: 'wir sind = vi er. "Seid" hører til "ihr": ihr seid.',
    },
    {
      question: 'Hvilken form av "sein" hører til "du"?',
      options: ['bist', 'bin', 'ist', 'sind'],
      explanation: 'ich bin, du bist, er/sie/es ist.',
    },
    {
      question: 'Hva er forskjellen på "sie sind" og "Sie sind"?',
      options: [
        '"sie" (liten s) = de, "Sie" (stor S) = De (høflig)',
        '"sie" = hun, "Sie" = de',
        'Det er ingen forskjell',
        '"Sie" brukes bare i spørsmål',
      ],
      explanation: 'Liten s = de (flertall), stor S = høflig tiltaleform (De).',
    },
    {
      question: 'Hvilken setning bruker "sein" riktig?',
      options: ['Ihr seid nett.', 'Ihr sind nett.', 'Ihr bist nett.', 'Ihr ist nett.'],
      explanation: 'ihr seid = dere er. "Sind" hører til wir/sie.',
    },
    {
      question: 'Til hva brukes verbet "sein"?',
      options: [
        'Å si hvem man er, beskrive egenskaper og oppgi alder',
        'Bare å beskrive vær',
        'Å uttrykke eierskap',
        'Bare i spørresetninger',
      ],
      explanation: '"Sein" brukes om identitet, opprinnelse, egenskaper og alder: Ich bin 16 Jahre alt.',
    },
  ],

  'tysk-1-10-2': [
    {
      question: 'Hva er riktig form: "Du ___ blaue Augen"?',
      options: ['hast', 'habst', 'habt', 'hat'],
      explanation: '"Haben" er uregelmessig: du hast (b-en forsvinner).',
    },
    {
      question: 'Hva er riktig form: "Er ___ einen Hund"?',
      options: ['hat', 'habt', 'haben', 'hast'],
      explanation: 'er/sie/es hat. "Habt" hører til ihr.',
    },
    {
      question: 'I hvilke former av "haben" forsvinner bokstaven "b"?',
      options: ['du hast og er/sie/es hat', 'ich habe og wir haben', 'ihr habt og sie haben', 'Den forsvinner aldri'],
      explanation: 'Bare i 2. og 3. person entall: du hast, er hat.',
    },
    {
      question: 'Hva betyr "Ich habe zwei Geschwister"?',
      options: ['Jeg har to søsken', 'Jeg har to søstre', 'Jeg har to brødre', 'Jeg har to venner'],
      explanation: 'Die Geschwister = søsken (både brødre og søstre).',
    },
    {
      question: 'Hvilken setning bruker "haben" riktig?',
      options: ['Wir haben ein Auto.', 'Wir habt ein Auto.', 'Wir hat ein Auto.', 'Wir hast ein Auto.'],
      explanation: 'wir haben = vi har.',
    },
  ],

  'tysk-1-10-3': [
    {
      question: 'Hva består et regelmessig tysk verb av?',
      options: [
        'En stamme og en endelse, f.eks. spiel + en',
        'To stammer',
        'Et prefiks og et suffiks som alltid er like',
        'En rot som aldri endres',
      ],
      explanation: 'F.eks. spielen: "spiel" er stammen og "-en" er endelsen som byttes ut ved bøyning.',
    },
    {
      question: 'Hvilken endelse får regelmessige verb i "du"-form?',
      options: ['-st', '-e', '-t', '-en'],
      explanation: 'du spielst, du machst, du lernst - alltid -st.',
    },
    {
      question: 'Hva er riktig bøyning av "machen" for "er"?',
      options: ['macht', 'machst', 'machen', 'mache'],
      explanation: 'er/sie/es får -t: er macht.',
    },
    {
      question: 'Hvilke to personer har samme verbform som infinitiv (-en)?',
      options: ['wir og sie/Sie', 'ich og du', 'du og ihr', 'er og wir'],
      explanation: 'wir spielen og sie/Sie spielen har endelsen -en, lik infinitiven.',
    },
    {
      question: 'Hva betyr verbet "wohnen"?',
      options: ['bo', 'lære', 'spille', 'gjøre'],
      explanation: 'Wohnen = bo. Lernen = lære, spielen = spille, machen = gjøre.',
    },
  ],

  'tysk-1-10-4': [
    {
      question: 'Hvilken setning bruker riktig form: "Ich ___ 16 Jahre alt"?',
      options: ['bin', 'habe', 'bist', 'ist'],
      explanation: 'På tysk brukes "sein" om alder: Ich bin 16 Jahre alt.',
    },
    {
      question: 'Hva er riktig: "Er ___ einen Hund"?',
      options: ['hat', 'ist', 'hast', 'haben'],
      explanation: 'Eierskap uttrykkes med haben: Er hat einen Hund.',
    },
    {
      question: 'Hva er riktig: "Wir ___ aus Norwegen"?',
      options: ['sind', 'haben', 'seid', 'ist'],
      explanation: 'Opprinnelse uttrykkes med sein: Wir sind aus Norwegen.',
    },
    {
      question: 'Hvilken endelse får regelmessige verb i "ihr"-form?',
      options: ['-t', '-st', '-en', '-e'],
      explanation: 'ihr spielt, ihr macht - endelsen er -t.',
    },
    {
      question: 'Hva er riktig bøyning av "haben" for "ihr"?',
      options: ['habt', 'haben', 'hast', 'hat'],
      explanation: 'ihr habt = dere har.',
    },
  ],

  'tysk-1-11-1': [
    {
      question: 'Hva står forkortelsen DACH for?',
      options: [
        'Deutschland, Austria (Österreich) og die Schweiz (CH)',
        'De fire tysktalende dialektområdene',
        'Deutschland, Andorra, Tsjekkia og Ungarn',
        'Det tyske jernbaneselskapet',
      ],
      explanation: 'D = Deutschland, A = Austria/Österreich, CH = die Schweiz (Confoederatio Helvetica).',
    },
    {
      question: 'Omtrent hvor mange innbyggere har Tyskland?',
      options: ['ca. 83 millioner', 'ca. 9 millioner', 'ca. 40 millioner', 'ca. 120 millioner'],
      explanation: 'Tyskland er det største tysktalende landet med rundt 83 millioner innbyggere.',
    },
    {
      question: 'Hvor mange delstater (Bundesländer) har Tyskland?',
      options: ['16', '9', '26', '12'],
      explanation: 'Tyskland er delt inn i 16 Bundesländer.',
    },
    {
      question: 'Hva er hovedstaden i Tyskland?',
      options: ['Berlin', 'München', 'Frankfurt', 'Hamburg'],
      explanation: 'Berlin er Tysklands hovedstad. München, Frankfurt og Hamburg er andre storbyer.',
    },
    {
      question: 'Hva betyr "die Grenze"?',
      options: ['grensen', 'hovedstaden', 'innbyggeren', 'delstaten'],
      explanation: 'Die Grenze = grensen. Tyskland grenser til ni andre land.',
    },
  ],

  'tysk-1-11-2': [
    {
      question: 'Hva er hovedstaden i Østerrike?',
      options: ['Wien', 'Salzburg', 'Bern', 'Graz'],
      explanation: 'Wien er Østerrikes hovedstad, kjent for opera, kaffehus og Schönbrunn-slottet.',
    },
    {
      question: 'Hvilken berømt komponist ble født i Salzburg?',
      options: ['Mozart', 'Bach', 'Wagner', 'Brahms'],
      explanation: 'Salzburg er kjent som Mozarts fødeby.',
    },
    {
      question: 'Omtrent hvor mange innbyggere har Østerrike?',
      options: ['ca. 9 millioner', 'ca. 83 millioner', 'ca. 25 millioner', 'ca. 2 millioner'],
      explanation: 'Østerrike har rundt 9 millioner innbyggere - mye mindre enn Tyskland.',
    },
    {
      question: 'Hva er Wiens kaffehus kjent for?',
      options: [
        'De står på UNESCOs verdensarvliste for sin kultur',
        'De serverer bare te',
        'De er verdens eldste restauranter',
        'De er kun for turister',
      ],
      explanation: 'Wiens kaffehuskultur er anerkjent av UNESCO - folk sitter i timevis med kaffe og kaker.',
    },
    {
      question: 'Hvilket fjellområde er Østerrike kjent for?',
      options: ['Alpene (die Alpen)', 'Harzen', 'Schwarzwald', 'Pyreneene'],
      explanation: 'Østerrike kalles landet i Alpene - die Alpen preger landskapet.',
    },
  ],

  'tysk-1-11-3': [
    {
      question: 'Hvor mange offisielle språk har Sveits?',
      options: ['fire', 'to', 'tre', 'ett'],
      explanation: 'Sveits har fire offisielle språk: tysk, fransk, italiensk og retoromansk.',
    },
    {
      question: 'Omtrent hvor stor andel av sveitserne snakker tysk?',
      options: ['ca. 63 %', 'ca. 23 %', 'ca. 90 %', 'ca. 40 %'],
      explanation: 'Rundt 63 % snakker tysk, 23 % fransk, 8 % italiensk og under 1 % retoromansk.',
    },
    {
      question: 'Hva er hovedstaden i Sveits?',
      options: ['Bern', 'Zürich', 'Genf', 'Basel'],
      explanation: 'Bern er hovedstaden, mens Zürich er den største byen.',
    },
    {
      question: 'Hvor lenge har Sveits vært nøytralt?',
      options: ['siden 1815', 'siden 1945', 'siden 1990', 'siden 1648'],
      explanation: 'Sveits har vært nøytralt siden 1815 og er ikke medlem av EU.',
    },
    {
      question: 'Hvilke produkter er Sveits særlig kjent for?',
      options: [
        'sjokolade, ost og klokker',
        'biler, øl og pølser',
        'fisk, olje og tømmer',
        'vin, parfyme og mote',
      ],
      explanation: 'Sveits er kjent for sjokolade (Lindt, Toblerone), ost (Emmentaler) og klokker (Rolex, Swatch).',
    },
  ],

  'tysk-1-11-4': [
    {
      question: 'Hva er "Hochdeutsch"?',
      options: [
        'Standardtysk - det offisielle skriftspråket',
        'Dialekten i Nord-Tyskland',
        'Gammelt tysk fra middelalderen',
        'Tysk snakket i fjellområder',
      ],
      explanation: 'Hochdeutsch er standardtysken man lærer på skolen og bruker i skrift.',
    },
    {
      question: 'Hva heter poteten på østerriksk tysk?',
      options: ['der Erdapfel', 'die Kartoffel', 'der Paradeiser', 'die Semmel'],
      explanation: 'I Østerrike sier man "Erdapfel" (jordeple) i stedet for "Kartoffel".',
    },
    {
      question: 'Hva kaller sveitserne sykkelen?',
      options: ['das Velo', 'das Fahrrad', 'das Rad', 'die Stiege'],
      explanation: 'I Sveits brukes det franskinspirerte ordet "das Velo".',
    },
    {
      question: 'Hva betyr "der Paradeiser" på østerriksk?',
      options: ['tomaten', 'poteten', 'rundstykket', 'heisen'],
      explanation: 'Paradeiser er det østerrikske ordet for tomat (Hochdeutsch: die Tomate).',
    },
    {
      question: 'Hvordan kan språksituasjonen i tysktalende land sammenlignes med Norge?',
      options: [
        'Begge har et standardspråk i skrift og mange talte dialekter',
        'Ingen av dem har dialekter',
        'Tysk har bare ett talespråk uten variasjon',
        'I Tyskland skriver alle på dialekt',
      ],
      explanation: 'Som i Norge med dialekter finnes det stort dialektmangfold i Tyskland, Østerrike og Sveits.',
    },
  ],

  'tysk-1-12-1': [
    {
      question: 'Hvilken tysk komponist skrev ni symfonier og ble døv mot slutten av livet?',
      options: ['Ludwig van Beethoven', 'Johann Sebastian Bach', 'Wolfgang Amadeus Mozart', 'Richard Wagner'],
      explanation: 'Beethoven (1770-1827), født i Bonn, fortsatte å komponere selv etter at han ble døv.',
    },
    {
      question: 'Hvor kommer EUs hymne fra?',
      options: [
        'Beethovens niende symfoni ("Ode an die Freude")',
        'Bachs Brandenburger-konserter',
        'Mozarts Tryllefløyten',
        'Wagners Nibelungenring',
      ],
      explanation: '"Ode an die Freude" (Ode til gleden) fra Beethovens 9. symfoni er EUs hymne.',
    },
    {
      question: 'Hvilken hit gjorde Nena verdenskjent i 1983?',
      options: ['99 Luftballons', 'Du hast', 'Autobahn', 'Atemlos'],
      explanation: '"99 Luftballons" handler om 99 ballonger som utløser krig.',
    },
    {
      question: 'Hva er Rammstein kjent for?',
      options: [
        'Industrirock og spektakulære liveshow med pyroteknikk',
        'Klassisk orgelmusikk',
        'Tysk folkemusikk',
        'Elektronisk dansemusikk uten vokal',
      ],
      explanation: 'Rammstein fra Berlin (dannet 1994) er kjent for kraftig industrirock og pyro-show.',
    },
    {
      question: 'Hvor ble Johann Sebastian Bach født?',
      options: ['Eisenach i Tyskland', 'Wien i Østerrike', 'Salzburg i Østerrike', 'Zürich i Sveits'],
      explanation: 'Bach (1685-1750) ble født i Eisenach og regnes som en av historiens største komponister.',
    },
  ],

  'tysk-1-12-2': [
    {
      question: 'Hvilken film fra 1927 regnes som en av de viktigste science fiction-filmene noensinne?',
      options: ['Metropolis av Fritz Lang', 'Das Boot', 'Good Bye, Lenin!', 'M'],
      explanation: 'Fritz Langs "Metropolis" (1927) er en banebrytende stumfilm.',
    },
    {
      question: 'Hva handler filmen "Das Boot" (1981) om?',
      options: [
        'En tysk ubåtbesetning under andre verdenskrig',
        'En seilbåttur på Rhinen',
        'Berlinmurens fall',
        'Stasi-overvåking i DDR',
      ],
      explanation: '"Das Boot" av Wolfgang Petersen er kjent for sin realistiske skildring av ubåtkrigen.',
    },
    {
      question: 'Hva prøver hovedpersonen i "Good Bye, Lenin!" (2003) å skjule for moren sin?',
      options: [
        'At Tyskland er gjenforent og DDR ikke lenger finnes',
        'At han har mistet jobben',
        'At Berlinmuren er bygget',
        'At han skal flytte til Vest-Berlin',
      ],
      explanation: 'Komedien handler om en sønn i Øst-Berlin som skjuler gjenforeningen for sin syke mor.',
    },
    {
      question: 'Hvilken tysk film vant Oscar for beste fremmedspråklige film i 2006?',
      options: ['Das Leben der Anderen', 'Metropolis', 'Das Boot', 'Lola rennt'],
      explanation: '"Das Leben der Anderen" (De andres liv) handler om Stasi-overvåking i Øst-Berlin.',
    },
    {
      question: 'Hva handler "Das Leben der Anderen" om?',
      options: [
        'Stasi-overvåking i Øst-Berlin før murens fall',
        'Livet i Vest-Tyskland på 1950-tallet',
        'En ubåt under krigen',
        'En robot i fremtidsbyen',
      ],
      explanation: 'Filmen skildrer hvordan Stasi overvåket borgerne i DDR.',
    },
  ],

  'tysk-1-12-3': [
    {
      question: 'Hvem samlet inn de berømte tyske folkeeventyrene på 1800-tallet?',
      options: ['Brødrene Grimm (Jacob og Wilhelm)', 'Heinrich Hoffmann', 'Goethe og Schiller', 'Rötger Feldmann'],
      explanation: 'Brüder Grimm samlet eventyr som Rødhette, Snøhvit og Hans og Grete.',
    },
    {
      question: 'Hva heter Rødhette på tysk?',
      options: ['Rotkäppchen', 'Schneewittchen', 'Aschenputtel', 'Dornröschen'],
      explanation: 'Rotkäppchen = Rødhette. Schneewittchen = Snøhvit, Aschenputtel = Askepott.',
    },
    {
      question: 'Hva er "Der Struwwelpeter" (1845)?',
      options: [
        'En berømt tysk barnebok med moralske historier',
        'En tegneserie om en rocker',
        'Et eventyr av brødrene Grimm',
        'En tysk avis',
      ],
      explanation: 'Heinrich Hoffmanns bok handler om barn som ikke oppfører seg, som "Suppenkaspar".',
    },
    {
      question: 'Hva heter Tornerose på tysk?',
      options: ['Dornröschen', 'Rotkäppchen', 'Der Froschkönig', 'Hänsel und Gretel'],
      explanation: 'Dornröschen = Tornerose. Der Froschkönig = Froskekongen.',
    },
    {
      question: 'Hva er "Werner"?',
      options: ['En populær tysk tegneserie', 'Et grimm-eventyr', 'En klassisk roman', 'En tysk filmpris'],
      explanation: 'Werner er en kjent tysk tegneserie av Rötger Feldmann ("Brösel").',
    },
  ],

  'tysk-1-12-4': [
    {
      question: 'Hva er Oktoberfest i München?',
      options: [
        'Verdens største folkefest',
        'En musikkfestival for rockeband',
        'Et julemarked',
        'En karnevalsfeiring',
      ],
      explanation: 'Oktoberfest varer i ca. to uker og besøkes av over 6 millioner mennesker årlig.',
    },
    {
      question: 'Hva heter de tradisjonelle klærne menn bruker på Oktoberfest?',
      options: ['Lederhosen', 'Dirndl', 'Tracht-Anzug', 'Sepplhut'],
      explanation: 'Menn bruker Lederhosen (skinnbukser), kvinner bruker Dirndl.',
    },
    {
      question: 'Hva skjer på Nikolaustag 6. desember i Tyskland?',
      options: [
        'Barna setter ut skoene, og St. Nikolaus fyller dem med godteri',
        'Julenissen kommer med juletreet',
        'Familien åpner alle julegavene',
        'Man tenner det fjerde adventslyset',
      ],
      explanation: 'På Nikolaustag får barna småfavner og godteri i skoene sine.',
    },
    {
      question: 'Hva er en "Adventskranz"?',
      options: [
        'En krans med fire lys - ett tennes hver søndag i advent',
        'En julekake',
        'En julesang',
        'En krans man henger på døren ved påske',
      ],
      explanation: 'Adventskransen har fire lys, ett for hver søndag i adventstiden.',
    },
    {
      question: 'Hva selges typisk på et tysk "Weihnachtsmarkt"?',
      options: [
        'Glühwein, Lebkuchen og julepynt',
        'Påskeegg og marsipan',
        'Øl og pølser i store telt',
        'Karnevalskostymer',
      ],
      explanation: 'Julemarkedene byr på gløgg (Glühwein), pepperkaker (Lebkuchen) og julepynt.',
    },
  ],

  'tysk-1-13-1': [
    {
      question: 'Hva er en "Speisekarte" på en tysk restaurant?',
      options: ['Menyen', 'Regningen', 'Bordreservasjonen', 'Servitøren'],
      explanation: 'Die Speisekarte er menyen som viser hvilke retter restauranten tilbyr.',
    },
    {
      question: 'Hva betyr "die Vorspeise"?',
      options: ['Forretten', 'Hovedretten', 'Desserten', 'Drikken'],
      explanation: 'Die Vorspeise er forretten, det første som serveres. Hauptgericht er hovedrett og Nachspeise er dessert.',
    },
    {
      question: 'Hva er "die Beilage" på en tysk meny?',
      options: ['Tilbehøret', 'Desserten', 'Forretten', 'Suppen'],
      explanation: 'Die Beilage er tilbehøret, for eksempel Pommes, Reis eller Knödel.',
    },
    {
      question: 'Hvilken av disse er en typisk tysk rett?',
      options: [
        'Wiener Schnitzel',
        'Paella',
        'Sushi',
        'Tagine',
      ],
      explanation: 'Wiener Schnitzel (panert kjøttskive) er en klassisk tysk-østerriksk rett. De andre kommer fra Spania, Japan og Nord-Afrika.',
    },
    {
      question: 'Hva ber du om når du vil betale på restauranten?',
      options: ['die Rechnung', 'die Vorspeise', 'die Speisekarte', 'das Getränk'],
      explanation: 'Du ber om "die Rechnung" (regningen) når du vil betale, ofte med "Die Rechnung, bitte!".',
    },
  ],

  'tysk-1-13-2': [
    {
      question: 'Hva er "Deutsche Bahn" (DB)?',
      options: [
        'Det tyske jernbaneselskapet',
        'Et tysk flyselskap',
        'Et tysk veiselskap',
        'Et tysk rederi',
      ],
      explanation: 'Deutsche Bahn (DB) er det tyske jernbaneselskapet med et stort nett av tog over hele landet.',
    },
    {
      question: 'Hva betyr "die Abfahrt" på en Fahrplan?',
      options: ['Avgangen', 'Ankomsten', 'Sporet', 'Forsinkelsen'],
      explanation: 'Die Abfahrt er avgangstiden, mens die Ankunft er ankomsttiden.',
    },
    {
      question: 'Hva betyr "das Gleis"?',
      options: ['Sporet/plattformen', 'Billetten', 'Toget', 'Stasjonen'],
      explanation: 'Das Gleis er sporet eller plattformen toget går fra.',
    },
    {
      question: 'Hvilket tog er Tysklands raskeste?',
      options: [
        'ICE (InterCity Express)',
        'RB (RegionalBahn)',
        'S-Bahn',
        'RE (RegionalExpress)',
      ],
      explanation: 'ICE (InterCity Express) er hurtigtoget som kjører opp til 300 km/t. RB og S-Bahn er lokaltog.',
    },
    {
      question: 'Hva betyr "umsteigen"?',
      options: ['Å bytte (tog)', 'Å gå av', 'Å kjøpe billett', 'Å vente'],
      explanation: 'Umsteigen betyr å bytte tog underveis på en reise.',
    },
  ],

  'tysk-1-13-3': [
    {
      question: 'Hva er en "Kleinanzeige"?',
      options: ['En småannonse', 'En avisartikkel', 'Et reklameskilt', 'En kvittering'],
      explanation: 'Kleinanzeigen er korte småannonser der folk tilbyr eller søker bolig, jobb og ting til salgs.',
    },
    {
      question: 'Hva betyr forkortelsen "Whg." i en boligannonse?',
      options: ['die Wohnung (leiligheten)', 'das Wetter', 'die Woche', 'der Weg'],
      explanation: 'Whg. er forkortelse for die Wohnung (leiligheten). Zi. står for Zimmer (rom).',
    },
    {
      question: 'Hva betyr "die Miete"?',
      options: ['Husleien', 'Depositumet', 'Strømregningen', 'Eiendomsmegleren'],
      explanation: 'Die Miete er husleien. Die Kaution er depositumet og die Nebenkosten er tilleggskostnadene.',
    },
    {
      question: 'Hva betyr "die Kaution" i en boligannonse?',
      options: ['Depositumet', 'Husleien', 'Adressen', 'Størrelsen'],
      explanation: 'Die Kaution (forkortet KT) er depositumet du betaler ved innflytting.',
    },
    {
      question: 'Hva betyr "gebraucht" i en salgsannonse?',
      options: ['Brukt', 'Ny', 'Gratis', 'Reservert'],
      explanation: 'Gebraucht betyr brukt. "Neu" betyr ny, og "gratis" betyr gratis.',
    },
  ],

  'tysk-1-13-4': [
    {
      question: 'Hvem regnes som Tysklands mest berømte dikter?',
      options: [
        'Johann Wolfgang von Goethe',
        'Albert Einstein',
        'Ludwig van Beethoven',
        'Karl Marx',
      ],
      explanation: 'Goethe (1749-1832) er Tysklands mest berømte dikter, kjent for blant annet "Heidenröslein" og "Faust".',
    },
    {
      question: 'Hvilke endelser bruker man for å lage diminutiv (forminskelsesform) på tysk?',
      options: ['-chen og -lein', '-ung og -heit', '-er og -in', '-isch og -lich'],
      explanation: 'Diminutiv lages med -chen (vanlig) eller -lein (poetisk), som i Mädchen og Röslein.',
    },
    {
      question: 'Hvilket grammatisk kjønn får alle diminutiver på tysk?',
      options: ['das (intetkjønn)', 'der (hankjønn)', 'die (hunkjønn)', 'Det varierer'],
      explanation: 'Alle diminutiver med -chen/-lein er alltid intetkjønn (das), uansett grunnordets kjønn.',
    },
    {
      question: 'Hva blir diminutivformen av "das Brot"?',
      options: ['das Brötchen', 'das Brotlein', 'der Brötchen', 'die Brötin'],
      explanation: 'Das Brötchen (rundstykke) er diminutiv av Brot, med omlyd o → ö og endelsen -chen.',
    },
    {
      question: 'Hva betyr "der Reim"?',
      options: ['Rimet', 'Strofen', 'Verset', 'Sangen'],
      explanation: 'Der Reim er rimet. Die Strophe er strofen, der Vers er verset og das Lied er sangen.',
    },
  ],

  'tysk-1-14-1': [
    {
      question: 'Hva kalles de tre spesielle tyske vokalene ä, ö og ü?',
      options: ['Umlaute', 'Diphthonge', 'Konsonanten', 'Eszett'],
      explanation: 'Ä, ö og ü kalles Umlaute (omlyds-bokstaver) og skrives med to prikker over.',
    },
    {
      question: 'Hva kalles den tyske bokstaven ß?',
      options: ['Eszett', 'Umlaut', 'Doppel-A', 'Ach-Laut'],
      explanation: 'ß kalles Eszett (eller scharfes S) og uttales som en dobbel-s.',
    },
    {
      question: 'Etter hvilke vokaler får "ch" en dyp Ach-Laut?',
      options: ['etter a, o, u, au', 'etter e og i', 'etter ä, ö, ü', 'etter konsonanter'],
      explanation: 'Ach-Laut (dyp skrapende lyd) kommer etter a, o, u og au, som i Buch, noch, auch.',
    },
    {
      question: 'Hvordan uttales den tyske r-lyden vanligvis?',
      options: [
        'Bak i halsen (uvular r)',
        'Med tungespissen (rulle-r)',
        'Som en norsk l',
        'Den uttales ikke',
      ],
      explanation: 'Tysk r uttales vanligvis som en uvular r bak i halsen, ikke som den norske rulle-r-en.',
    },
    {
      question: 'Hvilket ord inneholder en Umlaut?',
      options: ['schön', 'Buch', 'Haus', 'rot'],
      explanation: 'Schön inneholder ö, som er en Umlaut. De andre ordene har vanlige vokaler.',
    },
  ],

  'tysk-1-14-2': [
    {
      question: 'Hva betyr "Entschuldigung" når du starter en samtale?',
      options: ['Unnskyld', 'Takk', 'Vær så god', 'Ha det'],
      explanation: 'Entschuldigung betyr "Unnskyld" og brukes for høflig å henvende seg til noen.',
    },
    {
      question: 'Hva betyr den høflige bestillingsfrasen "Ich hätte gerne ..."?',
      options: [
        'Jeg vil gjerne ha ...',
        'Jeg heter ...',
        'Jeg kommer fra ...',
        'Jeg forstår ikke ...',
      ],
      explanation: '"Ich hätte gerne ..." er en høflig måte å bestille på: "Jeg vil gjerne ha ...".',
    },
    {
      question: 'Når bruker man den formelle "Sie"-formen på tysk?',
      options: [
        'Med fremmede, eldre og på jobben',
        'Med nære venner',
        'Med barn',
        'Bare i skriftspråk',
      ],
      explanation: 'Sie (formelt) brukes med fremmede, eldre og i formelle situasjoner. Med venner og familie bruker man du.',
    },
    {
      question: 'Hvordan spør du formelt om hjelp i en butikk?',
      options: [
        'Können Sie mir helfen?',
        'Kannst du mir helfen?',
        'Wie heißt du?',
        'Woher kommst du?',
      ],
      explanation: '"Können Sie mir helfen?" er den formelle formen (De), passende med fremmede i en butikk.',
    },
    {
      question: 'Hva betyr "die Rechnung" når du er på kafé?',
      options: ['Regningen', 'Menyen', 'Kelneren', 'Bestillingen'],
      explanation: 'Die Rechnung er regningen, som du ber om når du vil betale.',
    },
  ],

  'tysk-1-14-3': [
    {
      question: 'Hva er den vanlige strukturen i en tysk presentasjon (Vortrag)?',
      options: [
        'Einleitung – Hauptteil – Schluss',
        'Schluss – Hauptteil – Einleitung',
        'Anrede – Betreff – Grußformel',
        'Vorspeise – Hauptgericht – Nachspeise',
      ],
      explanation: 'En presentasjon bygges opp av Einleitung (innledning), Hauptteil (hoveddel) og Schluss (avslutning).',
    },
    {
      question: 'Hva betyr "die Einleitung"?',
      options: ['Innledningen', 'Avslutningen', 'Hoveddelen', 'Overskriften'],
      explanation: 'Die Einleitung er innledningen. Der Schluss er avslutningen og der Hauptteil er hoveddelen.',
    },
    {
      question: 'Hvilken frase kan du bruke for å innlede en presentasjon?',
      options: [
        'Heute spreche ich über ...',
        'Mit freundlichen Grüßen',
        'Die Rechnung, bitte',
        'Auf Wiedersehen',
      ],
      explanation: '"Heute spreche ich über ..." (I dag snakker jeg om ...) er en typisk innledningsfrase.',
    },
    {
      question: 'Hva er "Verknüpfungswörter" som zuerst, dann og außerdem?',
      options: ['Bindeord', 'Spørreord', 'Tallord', 'Preposisjoner'],
      explanation: 'Verknüpfungswörter er bindeord som binder setninger og avsnitt sammen i en presentasjon.',
    },
    {
      question: 'Hva betyr bindeordet "zuerst"?',
      options: ['Først', 'Deretter', 'Til slutt', 'I tillegg'],
      explanation: 'Zuerst betyr "først". Dann/danach betyr "deretter" og außerdem betyr "i tillegg".',
    },
  ],

  'tysk-1-14-4': [
    {
      question: 'Hva betyr "hin und zurück" når du kjøper togbillett?',
      options: ['Tur-retur', 'Enveis', 'Med bytte', 'Første klasse'],
      explanation: 'Hin und zurück betyr tur-retur. "Einfach" betyr enveisbillett.',
    },
    {
      question: 'Hva er forskjellen mellom "Einzelzimmer" og "Doppelzimmer"?',
      options: [
        'Enkeltrom og dobbeltrom',
        'Billig rom og dyrt rom',
        'Rom uten og med bad',
        'Etasje og kjeller',
      ],
      explanation: 'Das Einzelzimmer er enkeltrom (for én), das Doppelzimmer er dobbeltrom (for to).',
    },
    {
      question: 'Hva sier du hos legen for å forklare at du har vondt?',
      options: ['Ich habe Schmerzen.', 'Ich habe Hunger.', 'Ich habe Zeit.', 'Ich habe recht.'],
      explanation: '"Ich habe Schmerzen" betyr "Jeg har smerter". Schmerzen er smerter.',
    },
    {
      question: 'Hva betyr "die Fahrkarte"?',
      options: ['Billetten', 'Rutetabellen', 'Plattformen', 'Toget'],
      explanation: 'Die Fahrkarte er billetten (til tog eller buss).',
    },
    {
      question: 'Hva betyr "das Medikament"?',
      options: ['Medisin/medikament', 'Resept', 'Lege', 'Sykehus'],
      explanation: 'Das Medikament er medisin/medikament, som legen kan skrive ut til deg.',
    },
  ],

  'tysk-1-15-1': [
    {
      question: 'Hva er "der Betreff" i en e-post?',
      options: ['Emnet', 'Hilsenen', 'Avslutningen', 'Avsenderen'],
      explanation: 'Der Betreff er emnefeltet i en e-post, som kort sier hva e-posten handler om.',
    },
    {
      question: 'Hvilken hilsen brukes i en FORMELL tysk e-post?',
      options: [
        'Sehr geehrte/r ...',
        'Liebe/Lieber ...',
        'Hallo ...',
        'Hi ...',
      ],
      explanation: '"Sehr geehrter Herr / Sehr geehrte Frau ..." er den formelle hilsenen. Liebe/Lieber og Hallo er uformelle.',
    },
    {
      question: 'Hva betyr avslutningen "Mit freundlichen Grüßen"?',
      options: [
        'Med vennlig hilsen (formell)',
        'Kjærlig hilsen (uformell)',
        'Takk for nå',
        'På gjensyn',
      ],
      explanation: '"Mit freundlichen Grüßen" er den formelle avslutningshilsenen, som "Med vennlig hilsen".',
    },
    {
      question: 'Hvilken avslutning passer i en UFORMELL e-post til en venn?',
      options: [
        'Liebe Grüße',
        'Mit freundlichen Grüßen',
        'Sehr geehrte Damen und Herren',
        'Hochachtungsvoll',
      ],
      explanation: '"Liebe Grüße" (kjærlig hilsen) er en uformell avslutning til venner og familie.',
    },
    {
      question: 'Hva kalles tiltalen i begynnelsen av et brev (f.eks. "Liebe Anna")?',
      options: ['die Anrede', 'der Betreff', 'die Grußformel', 'der Schluss'],
      explanation: 'Die Anrede er tiltalen/hilsenen i begynnelsen. Die Grußformel er avslutningshilsenen.',
    },
  ],

  'tysk-1-15-2': [
    {
      question: 'Hva betyr "Viele Grüße aus ..." på et postkort?',
      options: [
        'Mange hilsener fra ...',
        'Jeg savner deg',
        'På gjensyn snart',
        'Takk for sist',
      ],
      explanation: '"Viele Grüße aus ..." betyr "Mange hilsener fra ..." og brukes ofte på postkort fra ferien.',
    },
    {
      question: 'Hva betyr "Ich vermisse dich"?',
      options: ['Jeg savner deg', 'Jeg ser deg', 'Jeg ringer deg', 'Jeg besøker deg'],
      explanation: '"Ich vermisse dich" betyr "Jeg savner deg".',
    },
    {
      question: 'Hva betyr forkortelsen "LG" i en tysk melding?',
      options: [
        'Liebe Grüße (kjærlig hilsen)',
        'Langer Gruß',
        'Letzte Gelegenheit',
        'Leider gut',
      ],
      explanation: 'LG står for Liebe Grüße (kjærlig hilsen), en vanlig forkortelse i meldinger.',
    },
    {
      question: 'Hva betyr "Bis bald!"?',
      options: ['På gjensyn snart!', 'God natt!', 'God tur!', 'Gratulerer!'],
      explanation: '"Bis bald!" betyr "På gjensyn snart!" eller "Sees snart!".',
    },
    {
      question: 'Hva bør et typisk postkort fra ferien inneholde?',
      options: [
        'Hilsen, sted, vær og aktiviteter',
        'Bare adressen',
        'En formell signatur og tittel',
        'En regning',
      ],
      explanation: 'Et postkort har vanligvis en hilsen, hvor du er, hvordan været er, hva du gjør, og en avslutning.',
    },
  ],

  'tysk-1-15-3': [
    {
      question: 'Hva er strukturen i en god kort tekst på tysk?',
      options: [
        'Einleitung – Hauptteil – Schluss',
        'Anrede – Betreff – Grußformel',
        'Nominativ – Akkusativ – Dativ',
        'der – die – das',
      ],
      explanation: 'En god tekst har innledning (Einleitung), hoveddel (Hauptteil) og avslutning (Schluss).',
    },
    {
      question: 'Hva er "Konnektoren" (bindeord) som und, aber og weil?',
      options: [
        'Ord som binder setninger sammen',
        'Spørreord',
        'Tallord',
        'Artikler',
      ],
      explanation: 'Konnektoren er bindeord som binder setninger og avsnitt sammen, f.eks. und (og), aber (men), weil (fordi).',
    },
    {
      question: 'Hva betyr bindeordet "weil"?',
      options: ['fordi', 'men', 'og', 'eller'],
      explanation: 'Weil betyr "fordi" og innleder en bisetning. Und = og, aber = men, oder = eller.',
    },
    {
      question: 'Hva kjennetegner en "Nebensatz" (bisetning) på tysk?',
      options: [
        'Verbet står til slutt',
        'Verbet står først',
        'Den har ikke subjekt',
        'Den har alltid to verb',
      ],
      explanation: 'I en bisetning (Nebensatz), f.eks. etter weil, dass eller wenn, står det bøyde verbet helt til slutt.',
    },
    {
      question: 'Hva betyr "die Beschreibung"?',
      options: ['Beskrivelsen', 'Dagboken', 'Blogginnlegget', 'Innledningen'],
      explanation: 'Die Beschreibung er beskrivelsen, f.eks. en personbeskrivelse (Personenbeschreibung).',
    },
  ],

  'tysk-1-15-4': [
    {
      question: 'Hva er et "Elfchen"?',
      options: [
        'Et dikt med 11 ord (1-2-3-4-1)',
        'En kort historie',
        'En sang med refreng',
        'Et ordtak',
      ],
      explanation: 'Et Elfchen er en diktform med nøyaktig 11 ord fordelt på fem linjer i mønsteret 1-2-3-4-1.',
    },
    {
      question: 'Hva betyr "die Kurzgeschichte"?',
      options: ['Korthistorien', 'Romanen', 'Diktet', 'Avisartikkelen'],
      explanation: 'Die Kurzgeschichte er en korthistorie, en kort fortelling.',
    },
    {
      question: 'Hva betyr ordet "plötzlich", som ofte skaper spenning i fortellinger?',
      options: ['Plutselig', 'Endelig', 'Heldigvis', 'Sakte'],
      explanation: 'Plötzlich betyr "plutselig" og brukes for å skape spenning i en fortelling.',
    },
    {
      question: 'Hvilke spørsmål bør en enkel Kurzgeschichte besvare?',
      options: [
        'Wer? Wo? Was passiert?',
        'Wie viel? Wie teuer?',
        'der? die? das?',
        'Wann ist die Abfahrt?',
      ],
      explanation: 'En enkel korthistorie svarer på Wer? (hvem), Wo? (hvor) og Was passiert? (hva skjer).',
    },
    {
      question: 'Hva betyr adjektivet "glücklich"?',
      options: ['Lykkelig', 'Trist', 'Sint', 'Redd'],
      explanation: 'Glücklich betyr lykkelig. Traurig = trist, ängstlich = engstelig/redd.',
    },
  ],

  'tysk-1-16-1': [
    {
      question: 'Hvilke tre grammatiske kjønn har tyske substantiver?',
      options: [
        'der (m), die (f), das (n)',
        'der, die, denn',
        'ein, eine, eines',
        'ich, du, er',
      ],
      explanation: 'Tyske substantiver er enten hankjønn (der), hunkjønn (die) eller intetkjønn (das).',
    },
    {
      question: 'Hvilken endelse får et regelmessig verb i "du"-form, f.eks. spielen?',
      options: ['du spielst', 'du spiele', 'du spielt', 'du spielen'],
      explanation: 'I du-form får regelmessige verb endelsen -st: du spielst.',
    },
    {
      question: 'Hvilken kasus brukes for subjektet i setningen?',
      options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
      explanation: 'Nominativ er kasusen for subjektet – den som gjør noe i setningen.',
    },
    {
      question: 'Hvilken kasus styrer preposisjonene "für, gegen, ohne, um, durch"?',
      options: ['Akkusativ', 'Dativ', 'Nominativ', 'Genitiv'],
      explanation: 'Für, gegen, ohne, um, durch og bis styrer alltid akkusativ.',
    },
    {
      question: 'Hva er hovedregelen for ordstilling (Wortstellung) i en tysk hovedsetning?',
      options: [
        'Verbet står på andre plass',
        'Verbet står først',
        'Verbet står sist',
        'Verbet utelates',
      ],
      explanation: 'I en hovedsetning står det bøyde verbet alltid på andreplass (V2-regelen).',
    },
  ],

  'tysk-1-16-2': [
    {
      question: 'Hva er et "Kompositum" på tysk?',
      options: [
        'Et sammensatt ord',
        'En forstavelse',
        'En endelse',
        'En bisetning',
      ],
      explanation: 'Et Kompositum er et sammensatt ord laget av to eller flere ord, f.eks. der Hauptbahnhof.',
    },
    {
      question: 'I et sammensatt ord, hvilket ledd bestemmer kjønn og hovedbetydning?',
      options: [
        'Det siste ordet (Grundwort)',
        'Det første ordet (Bestimmungswort)',
        'Forstavelsen',
        'Endelsen',
      ],
      explanation: 'Grunnordet (det siste ordet, Grundwort) bestemmer kjønn og hovedbetydning, f.eks. die Haustür → die.',
    },
    {
      question: 'Hva betyr forstavelsen "un-", som i "unfreundlich"?',
      options: [
        'Den uttrykker negasjon (det motsatte)',
        'Den forsterker betydningen',
        'Den lager flertall',
        'Den lager fortid',
      ],
      explanation: 'Forstavelsen un- gir negasjon: freundlich (vennlig) → unfreundlich (uvennlig).',
    },
    {
      question: 'Hvilket kjønn får substantiver med endelsen "-ung"?',
      options: ['die (feminin)', 'der (maskulin)', 'das (intetkjønn)', 'Det varierer'],
      explanation: 'Substantiver på -ung er alltid feminine (die), f.eks. die Wohnung, die Übung.',
    },
    {
      question: 'Hva kjennetegner "trennbare Verben" (delbare verb)?',
      options: [
        'Forstavelsen skilles fra verbet i presens',
        'De har ingen forstavelse',
        'De bøyes aldri',
        'De er alltid intetkjønn',
      ],
      explanation: 'Delbare verb, som aufstehen, skiller forstavelsen fra verbet i presens: Ich stehe um 7 Uhr auf.',
    },
  ],

  'tysk-1-16-3': [
    {
      question: 'Hva er en god strategi for å lage ordkort (Vokabelkarten)?',
      options: [
        'Alltid ta med artikkelen (der/die/das)',
        'Bare skrive det norske ordet',
        'Aldri bruke eksempelsetninger',
        'Skrive ti ord på hvert kort',
      ],
      explanation: 'Gode ordkort tar alltid med artikkelen (der/die/das), og gjerne flertall og en eksempelsetning.',
    },
    {
      question: 'Hva betyr "die Wiederholung"?',
      options: ['Repetisjon', 'Oversettelse', 'Uttale', 'Lesing'],
      explanation: 'Die Wiederholung er repetisjon, en sentral del av effektiv språklæring.',
    },
    {
      question: 'Hva er "globales Lesen" (global lesing)?',
      options: [
        'Å lese raskt for å få tak i hovedinnholdet',
        'Å lese hvert eneste ord nøye',
        'Å slå opp alle ukjente ord',
        'Å lese teksten baklengs',
      ],
      explanation: 'Globales Lesen betyr å lese raskt for å forstå hovedinnholdet, uten å stoppe ved hvert ukjent ord.',
    },
    {
      question: 'Hva er en god lyttestrategi når du hører tysk?',
      options: [
        'Lytte etter nøkkelord uten å forstå hvert ord',
        'Stoppe og slå opp hvert ord',
        'Bare lytte én gang',
        'Lese teksten i stedet',
      ],
      explanation: 'En god strategi er å lytte etter nøkkelord og bruke konteksten – du trenger ikke forstå hvert ord.',
    },
    {
      question: 'Hva betyr "der Kontext" i språklæring?',
      options: ['Kontekst/sammenheng', 'Ordboken', 'Grammatikkregelen', 'Uttalen'],
      explanation: 'Der Kontext er sammenhengen et ord står i, som hjelper deg å gjette betydningen.',
    },
  ],

  'tysk-1-16-4': [
    {
      question: 'Hva betyr "die Selbstevaluation"?',
      options: ['Egenvurdering', 'Eksamen', 'Karakter', 'Lekse'],
      explanation: 'Die Selbstevaluation er egenvurdering – å vurdere sine egne ferdigheter.',
    },
    {
      question: 'Hvilke fire hovedferdigheter deles språkkompetanse inn i?',
      options: [
        'Hören, Sprechen, Lesen, Schreiben',
        'Lesen, Rechnen, Singen, Malen',
        'der, die, das, die',
        'Nominativ, Akkusativ, Dativ, Genitiv',
      ],
      explanation: 'Språkferdigheter deles i Hören (lytting), Sprechen (snakking), Lesen (lesing) og Schreiben (skriving).',
    },
    {
      question: 'Hva står "S" for i SMART-mål?',
      options: ['Spesifikk (Spezifisch)', 'Spennende', 'Stor', 'Sterk'],
      explanation: 'I SMART står S for Spezifisch (spesifikk): målet skal være tydelig og konkret.',
    },
    {
      question: 'Hvilket er et godt (SMART) læringsmål?',
      options: [
        'Lære 20 nye ord om mat og drikke',
        'Bli bedre i tysk',
        'Kunne litt tysk',
        'Forstå alt',
      ],
      explanation: 'Et SMART-mål er spesifikt og målbart, f.eks. "Lære 20 nye ord om mat og drikke", ikke vage "bli bedre i tysk".',
    },
    {
      question: 'Hva betyr "verbessern"?',
      options: ['Å forbedre', 'Å glemme', 'Å gjenta', 'Å oversette'],
      explanation: 'Verbessern betyr å forbedre – det du gjør med ferdighetene dine gjennom øving.',
    },
  ],

  // __NESTE_BATCH__
};

export default quizData_tysk_1;
