import type { QuizQuestion } from './quiz-data';

const quizData_fransk_1: Record<string, QuizQuestion[]> = {
  'fransk-1-1-1': [
    {
      question: 'Comment dit-on "hei" en français?',
      options: ['Bonjour / Salut', 'Au revoir', 'Merci', 'S\'il vous plaît'],
      explanation: '"Bonjour" (formelt) og "Salut" (uformelt) betyr begge "hei".',
    },
    {
      question: 'Que signifie "Comment tu t\'appelles?"',
      options: [
        'Hva heter du?',
        'Hvordan har du det?',
        'Hvor gammel er du?',
        'Hvor kommer du fra?',
      ],
      explanation: '"Comment tu t\'appelles?" er spørsmålet om navnet ditt.',
    },
    {
      question: 'Comment répondre à "Comment ça va?"',
      options: [
        'Ça va bien, merci',
        'Je m\'appelle Marie',
        'J\'ai quinze ans',
        'Je viens de Norvège',
      ],
      explanation: '"Ça va bien, merci" betyr "Jeg har det bra, takk."',
    },
    {
      question: 'Que signifie "au revoir"?',
      options: ['Ha det / På gjensyn', 'God dag', 'Takk', 'Vær så snill'],
      explanation: '"Au revoir" er den vanlige måten å si "ha det" på fransk.',
    },
    {
      question: 'Comment dit-on "takk" en français?',
      options: ['Merci', 'S\'il vous plaît', 'Bonjour', 'Au revoir'],
      explanation: '"Merci" er det franske ordet for "takk".',
    },
    {
      question: 'Que signifie "enchanté(e)"?',
      options: [
        'Hyggelig å møte deg',
        'Ha det bra',
        'God morgen',
        'Vær så snill',
      ],
      explanation: '"Enchanté(e)" sies når man møter noen for første gang.',
    },
    {
      question: 'Comment dit-on "vær så snill" en français?',
      options: ['S\'il vous plaît', 'Merci', 'De rien', 'Pardon'],
      explanation: '"S\'il vous plaît" (formelt) eller "S\'il te plaît" (uformelt).',
    },
    {
      question: 'Quelle salutation utilise-t-on le soir?',
      options: ['Bonsoir', 'Bonjour', 'Bonne nuit', 'Salut'],
      explanation: '"Bonsoir" brukes som hilsen på kvelden.',
    },
    {
      question: 'Que répond-on à "merci"?',
      options: ['De rien', 'Merci', 'Bonjour', 'Au revoir'],
      explanation: '"De rien" betyr "ingen årsak" og er svåret på takk.',
    },
    {
      question: 'Comment dit-on "jeg heter" en français?',
      options: ['Je m\'appelle', 'Je suis', 'J\'ai', 'Je viens'],
      explanation: '"Je m\'appelle" brukes med navn for å si hva man heter.',
    },
  ],

  'fransk-1-1-2': [
    {
      question: 'Hvordan sier du «jeg heter Marie» på fransk?',
      options: ['Je m\'appelle Marie', 'J\'ai Marie', 'Je suis appelle Marie', 'Mon nom Marie'],
      explanation: '«Je m\'appelle ...» (egentlig «jeg kaller meg») brukes for å si hva man heter.',
    },
    {
      question: 'Hva betyr spørsmålet «Comment vous appelez-vous?»',
      options: ['Hva heter du? (høflig form)', 'Hvor bor du?', 'Hvor gammel er du?', 'Hvordan har du det?'],
      explanation: 'Dette er den formelle/høflige måten å spørre om navn på, med «vous».',
    },
    {
      question: 'Hvilket verb bøyes riktig i «Je ___ étudiant»?',
      options: ['suis', 'es', 'est', 'ai'],
      explanation: 'Verbet «être» bøyes «je suis» = jeg er.',
    },
    {
      question: 'Hva er den uformelle versjonen av «Comment vous appelez-vous?»',
      options: ['Comment tu t\'appelles?', 'Comment il s\'appelle?', 'Comment ça va?', 'Qui es-tu?'],
      explanation: 'Med en venn bruker man «tu»: «Comment tu t\'appelles?»',
    },
    {
      question: 'Hvordan svarer du på «Enchanté(e)»?',
      options: ['Enchanté(e)', 'Au revoir', 'De rien', 'À bientôt'],
      explanation: 'Når noen sier «hyggelig å møte deg», svarer man gjerne «Enchanté(e)» tilbake.',
    },
  ],

  'fransk-1-1-3': [
    {
      question: 'Hva betyr spørsmålet «D\'où viens-tu?»',
      options: ['Hvor kommer du fra?', 'Hvor skal du?', 'Hva heter du?', 'Hvor bor du?'],
      explanation: '«D\'où viens-tu?» = «Hvor kommer du fra?» (verbet venir = å komme).',
    },
    {
      question: 'Hvordan sier du «jeg kommer fra Norge»?',
      options: ['Je viens de Norvège', 'J\'habite Norvège', 'Je suis Norvège', 'Je vais de Norvège'],
      explanation: '«Je viens de + land» = «jeg kommer fra ...». Norge = la Norvège.',
    },
    {
      question: 'Hva er riktig form: «Je viens ___ France»?',
      options: ['de', 'du', 'des', 'à'],
      explanation: 'Foran hunkjønnsland brukes «de»: je viens de France, de Norvège.',
    },
    {
      question: 'Hva betyr «Je suis norvégien»?',
      options: ['Jeg er norsk (mann)', 'Jeg snakker norsk', 'Jeg bor i Norge', 'Jeg drar til Norge'],
      explanation: 'Nasjonalitetsordet «norvégien» (hankjønn) / «norvégienne» (hunkjønn) betyr norsk.',
    },
    {
      question: 'Hvordan sier en jente «jeg er fransk»?',
      options: ['Je suis française', 'Je suis français', 'Je suis France', 'Je suis le français'],
      explanation: 'Nasjonalitetsord samsvarer i kjønn: hunkjønn «française», hankjønn «français».',
    },
  ],

  'fransk-1-1-4': [
    {
      question: 'Hva betyr «Quel âge as-tu?»',
      options: ['Hvor gammel er du?', 'Hva heter du?', 'Hvor bor du?', 'Hvordan har du det?'],
      explanation: '«Quel âge as-tu?» = «Hvor gammel er du?» (bruker verbet avoir = å ha).',
    },
    {
      question: 'Hvordan sier du «jeg er femten år»?',
      options: ['J\'ai quinze ans', 'Je suis quinze ans', 'J\'ai quinze année', 'Je quinze ans'],
      explanation: 'Alder uttrykkes med avoir: «J\'ai quinze ans» (ordrett «jeg har femten år»).',
    },
    {
      question: 'Hvilket verb brukes for alder på fransk?',
      options: ['avoir (å ha)', 'être (å være)', 'aller (å gå)', 'faire (å gjøre)'],
      explanation: 'På fransk «har» man en alder: J\'ai 15 ans, ikke «jeg er 15».',
    },
    {
      question: 'Hva betyr «Où habites-tu?»',
      options: ['Hvor bor du?', 'Hvor kommer du fra?', 'Hvor skal du?', 'Hvem er du?'],
      explanation: '«habiter» = å bo, så «Où habites-tu?» = «Hvor bor du?»',
    },
    {
      question: 'Velg en naturlig respons på «Ça va?»',
      options: ['Oui, ça va bien', 'Je m\'appelle Paul', 'J\'ai treize ans', 'À Paris'],
      explanation: '«Ça va?» spør hvordan det går; et naturlig svar er «Oui, ça va bien».',
    },
  ],

  'fransk-1-2-1': [
    {
      question: 'Hva betyr tallet «sept»?',
      options: ['7', '6', '9', '17'],
      explanation: '«sept» = 7. (six = 6, neuf = 9, dix-sept = 17.)',
    },
    {
      question: 'Hvordan skrives tallet 4 på fransk?',
      options: ['quatre', 'cinq', 'trois', 'quatorze'],
      explanation: 'quatre = 4. (cinq = 5, trois = 3, quatorze = 14.)',
    },
    {
      question: 'Hva er «douze» pluss «trois»?',
      options: ['quinze', 'quatorze', 'seize', 'treize'],
      explanation: 'douze (12) + trois (3) = quinze (15).',
    },
    {
      question: 'Hvilket tall er «vingt»?',
      options: ['20', '2', '12', '22'],
      explanation: '«vingt» = 20.',
    },
    {
      question: 'Hva betyr «onze»?',
      options: ['11', '1', '10', '12'],
      explanation: '«onze» = 11. (un = 1, dix = 10, douze = 12.)',
    },
  ],

  'fransk-1-2-2': [
    {
      question: 'Hva betyr «quarante»?',
      options: ['40', '14', '4', '44'],
      explanation: '«quarante» = 40. (quatorze = 14, quatre = 4.)',
    },
    {
      question: 'Hvordan sies tallet 70 på (standard) fransk?',
      options: ['soixante-dix', 'septante', 'soixante', 'quatre-vingts'],
      explanation: 'Standardfransk bruker «soixante-dix» (60+10) for 70.',
    },
    {
      question: 'Hva er «quatre-vingts»?',
      options: ['80', '90', '420', '88'],
      explanation: '«quatre-vingts» = 4×20 = 80.',
    },
    {
      question: 'Hvilket tall er «quatre-vingt-dix»?',
      options: ['90', '80', '70', '410'],
      explanation: '«quatre-vingt-dix» = 4×20 + 10 = 90.',
    },
    {
      question: 'Hvordan sier du 21 på fransk?',
      options: ['vingt et un', 'vingt-un', 'vingt et premier', 'deux-un'],
      explanation: '21 = «vingt et un» (med «et» foran un, men bindestrek 22-29: vingt-deux ...).',
    },
  ],

  'fransk-1-2-3': [
    {
      question: 'Hvilken farge er «rouge»?',
      options: ['rød', 'grønn', 'blå', 'gul'],
      explanation: '«rouge» = rød.',
    },
    {
      question: 'Hva betyr «bleu»?',
      options: ['blå', 'svart', 'hvit', 'brun'],
      explanation: '«bleu» = blå.',
    },
    {
      question: 'Hva er riktig: en grønn bil = «une voiture ___»?',
      options: ['verte', 'vert', 'verts', 'verre'],
      explanation: 'Fargeadjektiv samsvarer: «voiture» er hunkjønn, derfor «verte».',
    },
    {
      question: 'Hvilken farge betyr «jaune»?',
      options: ['gul', 'oransje', 'rosa', 'grå'],
      explanation: '«jaune» = gul.',
    },
    {
      question: 'Hva betyr «noir et blanc»?',
      options: ['svart og hvit', 'rød og blå', 'grønn og gul', 'grå og brun'],
      explanation: '«noir» = svart og «blanc» = hvit.',
    },
  ],

  'fransk-1-2-4': [
    {
      question: 'Hva betyr «Combien ça coûte?»',
      options: ['Hvor mye koster det?', 'Hvor mange er det?', 'Hva heter det?', 'Hvor er det?'],
      explanation: '«Combien ça coûte?» = «Hvor mye koster det?» (coûter = å koste).',
    },
    {
      question: 'Hvordan sier du «det koster ti euro»?',
      options: ['Ça coûte dix euros', 'Ça a dix euros', 'Il est dix euros', 'C\'est dix coûte'],
      explanation: '«Ça coûte dix euros» = «det koster ti euro».',
    },
    {
      question: 'Hva betyr «Je voudrais ...»?',
      options: ['Jeg vil gjerne ha ...', 'Jeg har ...', 'Jeg er ...', 'Jeg liker ikke ...'],
      explanation: '«Je voudrais» (høflig kondisjonalis av vouloir) = «jeg vil gjerne ha».',
    },
    {
      question: 'Hva er «trente-cinq» euro i tall?',
      options: ['35', '25', '53', '15'],
      explanation: '«trente-cinq» = 30 + 5 = 35.',
    },
    {
      question: 'Hvilket svar passer på «Vous désirez?» i en butikk?',
      options: ['Je voudrais une baguette, s\'il vous plaît', 'J\'ai quinze ans', 'Je viens de Paris', 'Il est trois heures'],
      explanation: '«Vous désirez?» = «Hva ønsker De?»; man svarer med hva man vil ha.',
    },
  ],

  'fransk-1-3-1': [
    {
      question: 'Hva betyr «la sœur»?',
      options: ['søsteren', 'broren', 'moren', 'datteren'],
      explanation: '«la sœur» = søsteren. (le frère = broren.)',
    },
    {
      question: 'Hva er «le père» på norsk?',
      options: ['faren', 'broren', 'bestefaren', 'onkelen'],
      explanation: '«le père» = faren. (le frère = broren, le grand-père = bestefaren.)',
    },
    {
      question: 'Hvilket ord betyr «foreldrene»?',
      options: ['les parents', 'les enfants', 'les grands-parents', 'les frères'],
      explanation: '«les parents» = foreldrene. «les enfants» = barna.',
    },
    {
      question: 'Hva betyr «la grand-mère»?',
      options: ['bestemoren', 'tanten', 'moren', 'storesøsteren'],
      explanation: '«la grand-mère» = bestemoren.',
    },
    {
      question: 'Hva er «l\'oncle» og «la tante»?',
      options: ['onkelen og tanten', 'broren og søsteren', 'faren og moren', 'fetteren og kusinen'],
      explanation: '«l\'oncle» = onkelen, «la tante» = tanten.',
    },
  ],

  'fransk-1-3-2': [
    {
      question: 'Hva avgjør formen på franske eiendomsord (mon/ma/mes)?',
      options: ['Kjønnet og tallet til substantivet etter', 'Kjønnet til eieren', 'Hvor i setningen ordet står', 'Om setningen er spørrende'],
      explanation: 'På fransk samsvarer eiendomsordet med substantivet det står foran, ikke med eieren.',
    },
    {
      question: 'Velg riktig: «___ sœur» (min søster).',
      options: ['ma', 'mon', 'mes', 'me'],
      explanation: '«sœur» er hunkjønn entall, derfor «ma sœur».',
    },
    {
      question: 'Velg riktig: «___ parents» (mine foreldre).',
      options: ['mes', 'mon', 'ma', 'mien'],
      explanation: 'Flertall gir «mes»: mes parents.',
    },
    {
      question: 'Hvorfor heter det «mon amie» og ikke «ma amie»?',
      options: ['Fordi «amie» begynner med vokal', 'Fordi «amie» er hankjønn', 'Fordi det er flertall', 'Fordi eieren er en gutt'],
      explanation: 'Foran vokal brukes «mon» (også for hunkjønn) for å unngå vokalsammenstøt: mon amie.',
    },
    {
      question: 'Hva betyr «son/sa/ses» på fransk?',
      options: ['Både «hans» og «hennes»', 'Bare «hans»', 'Bare «hennes»', 'Bare «deres»'],
      explanation: '«son/sa/ses» betyr både «hans» og «hennes» – formen bestemmes av substantivet.',
    },
  ],

  'fransk-1-3-3': [
    {
      question: 'Hva betyr «Il est grand»?',
      options: ['Han er høy/stor', 'Han er gammel', 'Han er snill', 'Han er liten'],
      explanation: '«grand» = stor/høy. «Il est grand» = han er høy.',
    },
    {
      question: 'Hvordan blir «petit» når det beskriver en jente?',
      options: ['petite', 'petit', 'petits', 'petites'],
      explanation: 'Adjektiv samsvarer i kjønn: hunkjønn «petite» (legger til -e).',
    },
    {
      question: 'Hva betyr «Elle a les cheveux blonds»?',
      options: ['Hun har lyst hår', 'Hun har blå øyne', 'Hun er ung', 'Hun har langt hår'],
      explanation: '«les cheveux blonds» = lyst (blondt) hår.',
    },
    {
      question: 'Hva betyr adjektivet «gentil»?',
      options: ['snill', 'høy', 'morsom', 'sint'],
      explanation: '«gentil/gentille» = snill.',
    },
    {
      question: 'Velg riktig samsvar: «une fille ___» (en intelligent jente).',
      options: ['intelligente', 'intelligent', 'intelligents', 'intelligence'],
      explanation: '«fille» er hunkjønn, så adjektivet får -e: intelligente.',
    },
  ],

  'fransk-1-3-4': [
    {
      question: 'Hvordan presenterer du familien din: «Voici ___ famille»?',
      options: ['ma', 'mon', 'mes', 'le'],
      explanation: '«famille» er hunkjønn entall, derfor «ma famille».',
    },
    {
      question: 'Hva betyr «Nous sommes cinq dans ma famille»?',
      options: ['Vi er fem i familien min', 'Jeg har fem søsken', 'Familien min bor i fem hus', 'Jeg er fem år'],
      explanation: '«Nous sommes cinq» = «vi er fem»; setningen forteller hvor mange de er i familien.',
    },
    {
      question: 'Velg riktig: «Mon père ___ médecin» (faren min er lege).',
      options: ['est', 'es', 'a', 'sont'],
      explanation: '«il/mon père» tar «est» (être, 3. person entall).',
    },
    {
      question: 'Hva betyr «J\'ai un frère et deux sœurs»?',
      options: ['Jeg har en bror og to søstre', 'Jeg har to brødre og en søster', 'Jeg har en søster og to brødre', 'Jeg har tre søsken til sammen som er brødre'],
      explanation: '«un frère» = én bror, «deux sœurs» = to søstre.',
    },
    {
      question: 'Hvilket verb bruker man for å fortelle hvor familien bor?',
      options: ['habiter', 'avoir', 'être', 'appeler'],
      explanation: '«habiter» = å bo: «Ma famille habite à Oslo».',
    },
  ],

  'fransk-1-4-1': [
    {
      question: 'Hva betyr spørsmålet «Quelle heure est-il?»',
      options: ['Hva er klokka?', 'Når kommer du?', 'Hvilken dag er det?', 'Hvor lenge?'],
      explanation: '«Quelle heure est-il?» = «Hva er klokka?»',
    },
    {
      question: 'Hvordan sier du «klokka er tre»?',
      options: ['Il est trois heures', 'C\'est trois heures', 'Il a trois heures', 'Trois heures il est'],
      explanation: 'Klokkeslett innledes med «Il est ...»: «Il est trois heures».',
    },
    {
      question: 'Hva betyr «Il est midi»?',
      options: ['Klokka er tolv på dagen', 'Klokka er midnatt', 'Det er morgen', 'Klokka er halv'],
      explanation: '«midi» = midt på dagen (kl. 12). «minuit» = midnatt.',
    },
    {
      question: 'Hva betyr «Il est trois heures et demie»?',
      options: ['Klokka er halv fire (03:30)', 'Klokka er kvart over tre', 'Klokka er kvart på tre', 'Klokka er tre minutter over'],
      explanation: '«et demie» = «og halv», altså 30 minutter over: 03:30.',
    },
    {
      question: 'Hva betyr «et quart» i klokkeslett?',
      options: ['kvart over (15 min)', 'halv', 'ti på', 'fem over'],
      explanation: '«et quart» = «og kvart», dvs. 15 minutter over: «quatre heures et quart».',
    },
  ],

  'fransk-1-4-2': [
    {
      question: 'Hvilken dag er «lundi»?',
      options: ['mandag', 'søndag', 'lørdag', 'tirsdag'],
      explanation: '«lundi» = mandag.',
    },
    {
      question: 'Hva betyr «samedi»?',
      options: ['lørdag', 'søndag', 'fredag', 'onsdag'],
      explanation: '«samedi» = lørdag. «dimanche» = søndag.',
    },
    {
      question: 'Hva er «onsdag» på fransk?',
      options: ['mercredi', 'mardi', 'jeudi', 'vendredi'],
      explanation: 'mercredi = onsdag. (mardi = tirsdag, jeudi = torsdag, vendredi = fredag.)',
    },
    {
      question: 'Skrives ukedagene med stor forbokstav på fransk?',
      options: ['Nei, med liten forbokstav', 'Ja, alltid stor forbokstav', 'Bare på mandag', 'Bare i begynnelsen av setninger'],
      explanation: 'På fransk skrives ukedager (og måneder) med liten forbokstav: lundi, mardi ...',
    },
    {
      question: 'Hva betyr «le week-end»?',
      options: ['helgen', 'hverdagen', 'uken', 'ferien'],
      explanation: '«le week-end» = helgen (lørdag og søndag).',
    },
  ],

  'fransk-1-4-3': [
    {
      question: 'Hvilken måned er «janvier»?',
      options: ['januar', 'juni', 'juli', 'mars'],
      explanation: '«janvier» = januar.',
    },
    {
      question: 'Hva betyr «l\'été»?',
      options: ['sommeren', 'vinteren', 'høsten', 'våren'],
      explanation: '«l\'été» = sommeren. (l\'hiver = vinteren.)',
    },
    {
      question: 'Hva er «høsten» på fransk?',
      options: ['l\'automne', 'le printemps', 'l\'hiver', 'l\'été'],
      explanation: 'l\'automne = høsten. (le printemps = våren.)',
    },
    {
      question: 'Hva betyr «en juillet»?',
      options: ['i juli', 'i juni', 'i januar', 'i juni og juli'],
      explanation: '«en juillet» = i juli. (juin = juni.)',
    },
    {
      question: 'Hvordan sier du «om våren»?',
      options: ['au printemps', 'en printemps', 'à printemps', 'le printemps'],
      explanation: 'Unntak: «au printemps» (de andre årstidene tar «en»: en été, en hiver, en automne).',
    },
  ],

  'fransk-1-4-4': [
    {
      question: 'Hva betyr «Je me lève à sept heures»?',
      options: ['Jeg står opp klokka sju', 'Jeg legger meg klokka sju', 'Jeg spiser klokka sju', 'Jeg jobber til klokka sju'],
      explanation: '«se lever» = å stå opp; «Je me lève à sept heures» = jeg står opp kl. 7.',
    },
    {
      question: 'Hva slags verb er «se laver» (vaske seg)?',
      options: ['et refleksivt verb', 'et hjelpeverb', 'et uregelmessig hjelpeverb', 'et modalverb'],
      explanation: '«se laver» er refleksivt – handlingen retter seg mot subjektet selv (je me lave).',
    },
    {
      question: 'Velg riktig refleksivt pronomen: «Tu ___ couches» (du legger deg).',
      options: ['te', 'me', 'se', 'nous'],
      explanation: 'Til «tu» hører refleksivpronomenet «te»: tu te couches.',
    },
    {
      question: 'Hva betyr «le matin»?',
      options: ['om morgenen', 'om kvelden', 'om natten', 'midt på dagen'],
      explanation: '«le matin» = morgenen/om morgenen. «le soir» = kvelden.',
    },
    {
      question: 'Hva betyr «Je prends le petit déjeuner»?',
      options: ['Jeg spiser frokost', 'Jeg spiser lunsj', 'Jeg lager middag', 'Jeg drikker kaffe'],
      explanation: '«le petit déjeuner» = frokost; «prendre le petit déjeuner» = å spise frokost.',
    },
  ],

  'fransk-1-5-1': [
    {
      question: 'Hva betyr «le pain»?',
      options: ['brødet', 'osten', 'eplet', 'melken'],
      explanation: '«le pain» = brødet.',
    },
    {
      question: 'Hva er «l\'eau»?',
      options: ['vannet', 'vinen', 'melken', 'juicen'],
      explanation: '«l\'eau» (hunkjønn) = vannet.',
    },
    {
      question: 'Hva betyr «J\'aime le fromage»?',
      options: ['Jeg liker ost', 'Jeg spiser ost', 'Jeg lager ost', 'Jeg kjøper ost'],
      explanation: '«aimer» = å like; «le fromage» = osten.',
    },
    {
      question: 'Hvilket ord betyr «å drikke»?',
      options: ['boire', 'manger', 'prendre', 'goûter'],
      explanation: '«boire» = å drikke. «manger» = å spise.',
    },
    {
      question: 'Hva betyr «J\'ai faim»?',
      options: ['Jeg er sulten', 'Jeg er tørst', 'Jeg er mett', 'Jeg liker mat'],
      explanation: '«avoir faim» = å være sulten (ordrett «ha sult»). «avoir soif» = å være tørst.',
    },
  ],

  'fransk-1-5-2': [
    {
      question: 'Hva sier servitøren gjerne: «Vous ___?»',
      options: ['désirez', 'mangez', 'habitez', 'venez'],
      explanation: '«Vous désirez?» = «Hva ønsker De?» – vanlig spørsmål fra en servitør.',
    },
    {
      question: 'Hva betyr «l\'addition, s\'il vous plaît»?',
      options: ['regningen, takk', 'menyen, takk', 'vannet, takk', 'desserten, takk'],
      explanation: '«l\'addition» = regningen. «la carte/le menu» = menyen.',
    },
    {
      question: 'Hva betyr «Je voudrais commander»?',
      options: ['Jeg vil gjerne bestille', 'Jeg vil gjerne betale', 'Jeg er sulten', 'Jeg vil ha vann'],
      explanation: '«commander» = å bestille; «Je voudrais commander» = jeg vil gjerne bestille.',
    },
    {
      question: 'Hva er «l\'entrée» i et fransk måltid?',
      options: ['forretten', 'hovedretten', 'desserten', 'drikken'],
      explanation: '«l\'entrée» = forretten. «le plat principal» = hovedretten, «le dessert» = desserten.',
    },
    {
      question: 'Velg en høflig bestilling: «___ un café, s\'il vous plaît.»',
      options: ['Je voudrais', 'Je veux', 'J\'ai', 'Donne'],
      explanation: '«Je voudrais» er den høflige formen («jeg vil gjerne ha»), mer høflig enn «je veux».',
    },
  ],

  'fransk-1-5-3': [
    {
      question: 'Hva betyr «le supermarché»?',
      options: ['supermarkedet', 'bakeriet', 'restauranten', 'markedet'],
      explanation: '«le supermarché» = supermarkedet. «la boulangerie» = bakeriet.',
    },
    {
      question: 'Hvor kjøper du tradisjonelt brød i Frankrike?',
      options: ['à la boulangerie', 'à la pharmacie', 'à la librairie', 'à la banque'],
      explanation: '«la boulangerie» er bakeriet, der man kjøper baguette og annet brød.',
    },
    {
      question: 'Hva betyr «un kilo de pommes»?',
      options: ['en kilo epler', 'en kurv epler', 'en pose poteter', 'et eple til'],
      explanation: '«une pomme» = et eple; «un kilo de pommes» = en kilo epler.',
    },
    {
      question: 'Hvilken delingsartikkel passer: «Je voudrais ___ pain» (litt brød)?',
      options: ['du', 'de la', 'des', 'le'],
      explanation: 'Hankjønn entall, ubestemt mengde gir «du pain». (de la for hunkjønn, des for flertall.)',
    },
    {
      question: 'Hva betyr «C\'est combien le kilo?»',
      options: ['Hvor mye koster kiloen?', 'Hvor mange kilo?', 'Er det en kilo?', 'Hvor er kiloen?'],
      explanation: '«Combien» = hvor mye; spørsmålet gjelder prisen per kilo.',
    },
  ],

  'fransk-1-5-4': [
    {
      question: 'Hva er en typisk fransk frokostklassiker?',
      options: ['le croissant', 'la pizza', 'le sushi', 'le taco'],
      explanation: 'Croissant er et klassisk fransk bakverk som ofte spises til frokost.',
    },
    {
      question: 'Hva er «le fromage» kjent for i fransk matkultur?',
      options: ['Frankrike har hundrevis av ostesorter', 'Det spises bare til frokost', 'Det er en dessert', 'Det er en drikk'],
      explanation: 'Frankrike er verdensberømt for sitt store mangfold av oster (le fromage).',
    },
    {
      question: 'Hva er «un croque-monsieur»?',
      options: ['en varm skinke- og ostesmørbrød', 'en dessert med sjokolade', 'en fransk suppe', 'en salat'],
      explanation: 'Croque-monsieur er en grillet smørbrød med skinke og ost (gratinert).',
    },
    {
      question: 'Hva er «la baguette»?',
      options: ['et langt, smalt fransk brød', 'en kake', 'en ostesort', 'en saus'],
      explanation: 'Baguette er det klassiske, lange franske brødet.',
    },
    {
      question: 'Hva er «la gastronomie française» kjent som?',
      options: ['oppført på UNESCOs liste over immateriell kulturarv', 'et fransk fjell', 'en type vin', 'navnet på en restaurant'],
      explanation: 'Det franske gastronomiske måltidet er innskrevet på UNESCOs verdensarvliste.',
    },
  ],

  'fransk-1-6-1': [
    {
      question: 'Hva betyr «la maison»?',
      options: ['huset', 'rommet', 'kjøkkenet', 'hagen'],
      explanation: '«la maison» = huset.',
    },
    {
      question: 'Hva er «la cuisine»?',
      options: ['kjøkkenet', 'soverommet', 'stua', 'badet'],
      explanation: '«la cuisine» = kjøkkenet (også «matlaging»).',
    },
    {
      question: 'Hva betyr «la chambre»?',
      options: ['soverommet', 'stua', 'badet', 'gangen'],
      explanation: '«la chambre» = soverommet. «le salon» = stua.',
    },
    {
      question: 'Hva er «le jardin»?',
      options: ['hagen', 'kjelleren', 'taket', 'garasjen'],
      explanation: '«le jardin» = hagen.',
    },
    {
      question: 'Hva betyr «J\'habite dans un appartement»?',
      options: ['Jeg bor i en leilighet', 'Jeg bor i et hus', 'Jeg bygger et hus', 'Jeg leier et rom'],
      explanation: '«un appartement» = en leilighet; «habiter dans» = å bo i.',
    },
  ],

  'fransk-1-6-2': [
    {
      question: 'Hva betyr «la table»?',
      options: ['bordet', 'stolen', 'sengen', 'skapet'],
      explanation: '«la table» = bordet. «la chaise» = stolen.',
    },
    {
      question: 'Hva er «le lit»?',
      options: ['sengen', 'sofaen', 'lampen', 'speilet'],
      explanation: '«le lit» = sengen.',
    },
    {
      question: 'Hva betyr «le canapé»?',
      options: ['sofaen', 'stolen', 'bordet', 'hyllen'],
      explanation: '«le canapé» = sofaen.',
    },
    {
      question: 'Velg riktig: «Il y a une lampe ___ la table» (på bordet).',
      options: ['sur', 'sous', 'dans', 'devant'],
      explanation: '«sur» = på (oppå). «sous» = under, «dans» = inni, «devant» = foran.',
    },
    {
      question: 'Hva betyr «Il y a»?',
      options: ['det er / det finnes', 'han har', 'der borte', 'det var'],
      explanation: '«Il y a» = «det er / det finnes» (brukes for å si hva som finnes et sted).',
    },
  ],

  'fransk-1-6-3': [
    {
      question: 'Hva betyr «Voici ma chambre»?',
      options: ['Her er rommet mitt', 'Dette er huset mitt', 'Jeg rydder rommet', 'Rommet er stort'],
      explanation: '«Voici» = «her er»; «ma chambre» = rommet mitt.',
    },
    {
      question: 'Velg riktig: «Mon lit est ___ la fenêtre» (ved siden av vinduet).',
      options: ['à côté de', 'sous', 'dans', 'sur'],
      explanation: '«à côté de» = ved siden av. «la fenêtre» = vinduet.',
    },
    {
      question: 'Hva betyr «Ma chambre est petite mais confortable»?',
      options: ['Rommet mitt er lite, men komfortabelt', 'Rommet mitt er stort og fint', 'Rommet mitt er rotete', 'Jeg deler rommet mitt'],
      explanation: '«petite» = lite, «mais» = men, «confortable» = komfortabelt.',
    },
    {
      question: 'Hva betyr «le mur»?',
      options: ['veggen', 'gulvet', 'taket', 'døren'],
      explanation: '«le mur» = veggen. «le sol» = gulvet, «la porte» = døren.',
    },
    {
      question: 'Hva betyr «Sur le mur, il y a des affiches»?',
      options: ['På veggen henger det plakater', 'Under sengen er det bøker', 'Vinduet er åpent', 'Rommet er malt blått'],
      explanation: '«des affiches» = plakater; «sur le mur» = på veggen.',
    },
  ],

  'fransk-1-6-4': [
    {
      question: 'Hva er typisk for byboliger i Frankrike?',
      options: ['mange bor i leiligheter (appartements)', 'alle bor i eneboliger', 'ingen bor i sentrum', 'husene har ikke kjøkken'],
      explanation: 'I franske byer bor mange i leiligheter, ofte i flere etasjer.',
    },
    {
      question: 'Hva betyr «le rez-de-chaussée»?',
      options: ['første etasje (gateplan)', 'kjelleren', 'loftet', 'taket'],
      explanation: '«le rez-de-chaussée» = gateplanet; det franskmennene kaller «1. etasje» (premier étage) ligger over.',
    },
    {
      question: 'Hva er «une maison de campagne»?',
      options: ['et hus på landet', 'en leilighet i byen', 'et feriehus ved sjøen', 'en bygård'],
      explanation: '«la campagne» = landsbygda; «une maison de campagne» = et hus på landet.',
    },
    {
      question: 'Hva betyr «louer un appartement»?',
      options: ['å leie en leilighet', 'å kjøpe et hus', 'å pusse opp et rom', 'å bygge en bolig'],
      explanation: '«louer» = å leie; «un appartement» = en leilighet.',
    },
    {
      question: 'Hva er «une colocation» blant franske studenter?',
      options: ['å dele bolig med andre (bokollektiv)', 'et studenthybel uten kjøkken', 'en hybel på campus', 'et leid feriehus'],
      explanation: '«colocation» = bofellesskap der flere deler en leilighet, vanlig blant studenter.',
    },
  ],

  'fransk-1-7-1': [
    {
      question: 'Hva betyr «le pantalon»?',
      options: ['buksen', 'skjorten', 'jakken', 'skoen'],
      explanation: '«le pantalon» = buksen.',
    },
    {
      question: 'Hva er «la robe»?',
      options: ['kjolen', 'skjørtet', 'genseren', 'lua'],
      explanation: '«la robe» = kjolen. «la jupe» = skjørtet.',
    },
    {
      question: 'Hva betyr «les chaussures»?',
      options: ['skoene', 'sokkene', 'hanskene', 'buksene'],
      explanation: '«les chaussures» = skoene.',
    },
    {
      question: 'Hva er «la veste»?',
      options: ['jakken', 'skjorten', 'genseren', 'slipset'],
      explanation: '«la veste» = jakken.',
    },
    {
      question: 'Hva betyr «porter» i sammenheng med klær?',
      options: ['å ha på seg', 'å kjøpe', 'å vaske', 'å brette'],
      explanation: '«porter» = å ha på seg / bære: «Je porte un pull».',
    },
  ],

  'fransk-1-7-2': [
    {
      question: 'Hva betyr «Je peux essayer?»',
      options: ['Kan jeg prøve (det)?', 'Kan jeg betale?', 'Har dere flere?', 'Hvor mye koster det?'],
      explanation: '«essayer» = å prøve; i en klesbutikk: «Kan jeg prøve det?»',
    },
    {
      question: 'Hva betyr «C\'est trop cher»?',
      options: ['Det er for dyrt', 'Det er for billig', 'Det er for stort', 'Det er for lite'],
      explanation: '«trop» = for (mye), «cher» = dyr.',
    },
    {
      question: 'Hva spør ekspeditøren med «Quelle taille?»',
      options: ['Hvilken størrelse?', 'Hvilken farge?', 'Hvor mange?', 'Hvilket merke?'],
      explanation: '«la taille» = størrelsen; «Quelle taille?» = «Hvilken størrelse?»',
    },
    {
      question: 'Hva betyr «la cabine d\'essayage»?',
      options: ['prøverommet', 'kassen', 'utgangen', 'utstillingsvinduet'],
      explanation: '«la cabine d\'essayage» = prøverommet (der man prøver klær).',
    },
    {
      question: 'Hva betyr «Je le prends»?',
      options: ['Jeg tar det (kjøper det)', 'Jeg liker det ikke', 'Jeg prøver det', 'Jeg betaler senere'],
      explanation: '«Je le prends» = «jeg tar det» – man sier dette når man bestemmer seg for å kjøpe.',
    },
  ],

  'fransk-1-7-3': [
    {
      question: 'Hva betyr «une chemise blanche»?',
      options: ['en hvit skjorte', 'en blå skjorte', 'en stor skjorte', 'en ny skjorte'],
      explanation: '«blanche» = hvit (hunkjønn av blanc); «une chemise» er hunkjønn.',
    },
    {
      question: 'Hvorfor heter det «une jupe verte» og ikke «une jupe vert»?',
      options: ['Adjektivet samsvarer med hunkjønnsordet «jupe»', 'Fargen er alltid -e', 'Fordi skjørtet er flertall', 'Det er en skrivefeil'],
      explanation: 'Fargeadjektiv samsvarer i kjønn; «jupe» er hunkjønn, derfor «verte».',
    },
    {
      question: 'Hva betyr «petit, moyen, grand» om størrelser?',
      options: ['liten, mellomstor, stor', 'billig, dyr, dyrest', 'kort, lang, lengst', 'ny, brukt, gammel'],
      explanation: 'Klesstørrelser: petit (S), moyen (M), grand (L).',
    },
    {
      question: 'Hvilken farge er «marron»?',
      options: ['brun', 'lilla', 'oransje', 'rosa'],
      explanation: '«marron» = brun (fra kastanje).',
    },
    {
      question: 'Hva betyr «Avez-vous ce pull en bleu?»',
      options: ['Har dere denne genseren i blått?', 'Liker du blå gensere?', 'Er genseren for stor?', 'Hvor mye koster genseren?'],
      explanation: '«ce pull» = denne genseren, «en bleu» = i blått.',
    },
  ],

  'fransk-1-7-4': [
    {
      question: 'Hva betyr spørsmålet «Qu\'est-ce que tu portes?»',
      options: ['Hva har du på deg?', 'Hva liker du?', 'Hva kjøper du?', 'Hva heter du?'],
      explanation: '«porter» = å ha på seg; spørsmålet gjelder hva man har på seg.',
    },
    {
      question: 'Velg riktig form: «Je ___ un jean et un t-shirt».',
      options: ['porte', 'portes', 'portez', 'portent'],
      explanation: '«je» tar formen «porte» (regelmessig -er-verb).',
    },
    {
      question: 'Hva betyr «Aujourd\'hui, il fait froid, je mets un manteau»?',
      options: ['I dag er det kaldt, jeg tar på en frakk', 'I dag er det varmt, jeg tar på shorts', 'I går regnet det', 'Jeg liker ikke frakker'],
      explanation: '«il fait froid» = det er kaldt, «mettre» = å ta på, «un manteau» = en frakk.',
    },
    {
      question: 'Hvilket verb betyr «å ta på seg»?',
      options: ['mettre', 'porter', 'acheter', 'laver'],
      explanation: '«mettre» = å ta på seg (handlingen). «porter» = å ha på seg (tilstanden).',
    },
    {
      question: 'Hva betyr «Pour faire du sport, je porte un survêtement»?',
      options: ['For å drive sport har jeg på treningsdress', 'Jeg liker ikke å trene', 'Jeg kjøper nye sko', 'Det er kaldt i dag'],
      explanation: '«un survêtement» = treningsdress; «pour faire du sport» = for å drive sport.',
    },
  ],

  'fransk-1-8-1': [
    {
      question: 'Hva betyr «l\'école»?',
      options: ['skolen', 'klassen', 'læreren', 'eleven'],
      explanation: '«l\'école» (hunkjønn) = skolen.',
    },
    {
      question: 'Hva er «le professeur»?',
      options: ['læreren', 'eleven', 'rektoren', 'klassen'],
      explanation: '«le professeur» (ofte «le/la prof») = læreren.',
    },
    {
      question: 'Hva betyr «la salle de classe»?',
      options: ['klasserommet', 'skolegården', 'kantinen', 'biblioteket'],
      explanation: '«la salle de classe» = klasserommet.',
    },
    {
      question: 'Hva er «un élève»?',
      options: ['en elev', 'en lærer', 'en bok', 'et fag'],
      explanation: '«un élève» = en elev.',
    },
    {
      question: 'Hva betyr «le lycée»?',
      options: ['videregående skole', 'barneskole', 'universitet', 'barnehage'],
      explanation: '«le lycée» = videregående skole. «le collège» = ungdomsskole.',
    },
  ],

  'fransk-1-8-2': [
    {
      question: 'Hva betyr «les mathématiques»?',
      options: ['matematikk', 'historie', 'naturfag', 'språk'],
      explanation: '«les mathématiques» (les maths) = matematikk.',
    },
    {
      question: 'Hva er «l\'histoire-géographie»?',
      options: ['historie og geografi', 'kunst og musikk', 'fransk og engelsk', 'kjemi og fysikk'],
      explanation: 'I franske skoler er «l\'histoire-géographie» ofte ett kombinert fag.',
    },
    {
      question: 'Hva betyr «Ma matière préférée, c\'est l\'anglais»?',
      options: ['Yndlingsfaget mitt er engelsk', 'Jeg liker ikke engelsk', 'Engelsk er vanskelig', 'Jeg har engelsk i dag'],
      explanation: '«ma matière préférée» = yndlingsfaget mitt; «l\'anglais» = engelsk.',
    },
    {
      question: 'Hva er «l\'éducation physique et sportive (EPS)»?',
      options: ['kroppsøving/gym', 'naturfag', 'samfunnsfag', 'kunst'],
      explanation: 'EPS = «éducation physique et sportive» = kroppsøving.',
    },
    {
      question: 'Hva betyr «Je suis fort en sciences»?',
      options: ['Jeg er flink i naturfag', 'Jeg liker ikke naturfag', 'Jeg har naturfag i dag', 'Naturfag er kjedelig'],
      explanation: '«être fort en ...» = å være flink/sterk i et fag; «les sciences» = naturfag/realfag.',
    },
  ],

  'fransk-1-8-3': [
    {
      question: 'Hva betyr «un médecin»?',
      options: ['en lege', 'en lærer', 'en sykepleier', 'en advokat'],
      explanation: '«un médecin» = en lege.',
    },
    {
      question: 'Hva er «un boulanger»?',
      options: ['en baker', 'en kokk', 'en slakter', 'en kelner'],
      explanation: '«un boulanger» = en baker (jobber i la boulangerie).',
    },
    {
      question: 'Hva er hunkjønnsformen av «un infirmier» (sykepleier)?',
      options: ['une infirmière', 'une infirmier', 'une infirmieuse', 'une infirme'],
      explanation: 'Yrkesord får ofte hunkjønnsform: un infirmier → une infirmière.',
    },
    {
      question: 'Hvordan sier man yrke etter «être» på fransk?',
      options: ['uten artikkel: «Il est professeur»', 'med ubestemt artikkel: «Il est un professeur»', 'med bestemt artikkel: «Il est le professeur»', 'med eiendomsord'],
      explanation: 'Etter «être» dropper man artikkelen foran yrke: «Il est professeur».',
    },
    {
      question: 'Hva betyr «un agriculteur»?',
      options: ['en bonde', 'en gartner', 'en ingeniør', 'en politimann'],
      explanation: '«un agriculteur» = en bonde/landbruker.',
    },
  ],

  'fransk-1-8-4': [
    {
      question: 'Hva betyr spørsmålet «Que veux-tu devenir?»',
      options: ['Hva vil du bli?', 'Hva vil du ha?', 'Hvor vil du dra?', 'Hva gjør du?'],
      explanation: '«devenir» = å bli; «Que veux-tu devenir?» = «Hva vil du bli?»',
    },
    {
      question: 'Velg riktig: «Je ___ devenir médecin» (jeg vil bli lege).',
      options: ['veux', 'veut', 'voulez', 'voulons'],
      explanation: 'Verbet «vouloir» bøyes «je veux».',
    },
    {
      question: 'Hva betyr «J\'aimerais travailler dans l\'informatique»?',
      options: ['Jeg vil gjerne jobbe med IT', 'Jeg liker ikke å jobbe', 'Jeg jobber på et kontor', 'Jeg studerer fransk'],
      explanation: '«j\'aimerais» = jeg vil gjerne (høflig), «l\'informatique» = IT/data.',
    },
    {
      question: 'Hvilken setning uttrykker et ønske om fremtidig yrke?',
      options: ['Plus tard, je voudrais être vétérinaire', 'Hier, j\'étais malade', 'Aujourd\'hui, il fait beau', 'J\'ai mangé une pomme'],
      explanation: '«Plus tard, je voudrais être ...» = «Senere vil jeg gjerne bli ...».',
    },
    {
      question: 'Hva betyr «un métier qui me passionne»?',
      options: ['et yrke jeg brenner for', 'et godt betalt yrke', 'et lett yrke', 'et nytt yrke'],
      explanation: '«passionner» = å begeistre/fascinere; «qui me passionne» = som jeg brenner for.',
    },
  ],

  'fransk-1-9-1': [
    {
      question: 'Hva betyr «le train»?',
      options: ['toget', 'bilen', 'flyet', 'bussen'],
      explanation: '«le train» = toget.',
    },
    {
      question: 'Hva er «l\'avion»?',
      options: ['flyet', 'båten', 'sykkelen', 'bilen'],
      explanation: '«l\'avion» = flyet.',
    },
    {
      question: 'Hva betyr «Je vais à l\'école à vélo»?',
      options: ['Jeg sykler til skolen', 'Jeg går til skolen', 'Jeg kjører bil til skolen', 'Jeg tar bussen til skolen'],
      explanation: '«à vélo» = på sykkel; «aller à vélo» = å sykle.',
    },
    {
      question: 'Velg riktig: «Je prends ___ métro» (jeg tar t-banen).',
      options: ['le', 'la', 'les', 'du'],
      explanation: '«le métro» er hankjønn: «Je prends le métro».',
    },
    {
      question: 'Hva betyr «à pied»?',
      options: ['til fots', 'med tog', 'med bil', 'med buss'],
      explanation: '«à pied» = til fots: «Je vais à pied».',
    },
  ],

  'fransk-1-9-2': [
    {
      question: 'Hva betyr «la gare»?',
      options: ['togstasjonen', 'flyplassen', 'busstoppet', 'havnen'],
      explanation: '«la gare» = togstasjonen.',
    },
    {
      question: 'Hva er «la rue»?',
      options: ['gaten', 'torget', 'parken', 'broen'],
      explanation: '«la rue» = gaten. «la place» = torget/plassen.',
    },
    {
      question: 'Hva betyr spørsmålet «Où est la poste?»',
      options: ['Hvor er postkontoret?', 'Når åpner posten?', 'Hva koster et frimerke?', 'Er det langt til posten?'],
      explanation: '«la poste» = postkontoret; «Où est ...?» = «Hvor er ...?»',
    },
    {
      question: 'Hva betyr «Tournez à droite»?',
      options: ['Sving til høyre', 'Sving til venstre', 'Gå rett frem', 'Stopp her'],
      explanation: '«à droite» = til høyre. «à gauche» = til venstre, «tout droit» = rett frem.',
    },
    {
      question: 'Hva betyr «C\'est tout droit»?',
      options: ['Det er rett frem', 'Det er til høyre', 'Det er langt unna', 'Det er stengt'],
      explanation: '«tout droit» = rett frem (ikke forveksle med «à droite» = til høyre).',
    },
  ],

  'fransk-1-9-3': [
    {
      question: 'Hva betyr «Je voudrais réserver un billet»?',
      options: ['Jeg vil gjerne bestille en billett', 'Jeg har mistet billetten', 'Hvor mye koster billetten?', 'Når går toget?'],
      explanation: '«réserver» = å bestille/reservere, «un billet» = en billett.',
    },
    {
      question: 'Hva betyr «un aller-retour»?',
      options: ['en tur-retur-billett', 'en enveisbillett', 'et månedskort', 'en forsinkelse'],
      explanation: '«un aller-retour» = tur-retur. «un aller simple» = enveis.',
    },
    {
      question: 'Hva betyr spørsmålet «À quelle heure part le train?»',
      options: ['Når går toget?', 'Hvor går toget fra?', 'Hvor mye koster toget?', 'Er toget forsinket?'],
      explanation: '«partir» = å dra/gå (om transport); «À quelle heure part le train?» = «Når går toget?»',
    },
    {
      question: 'Hva betyr «les vacances»?',
      options: ['ferien', 'reisen', 'helgen', 'arbeidsdagen'],
      explanation: '«les vacances» (alltid flertall) = ferien.',
    },
    {
      question: 'Hva betyr «Je vais passer une semaine à Paris»?',
      options: ['Jeg skal tilbringe en uke i Paris', 'Jeg bor i Paris', 'Jeg har vært i Paris', 'Jeg liker ikke Paris'],
      explanation: '«passer une semaine» = tilbringe en uke; «aller + infinitiv» uttrykker nær fremtid.',
    },
  ],

  'fransk-1-9-4': [
    {
      question: 'Hva betyr «Je voudrais réserver une chambre»?',
      options: ['Jeg vil gjerne bestille et rom', 'Jeg vil betale regningen', 'Jeg har glemt nøkkelen', 'Når er frokosten?'],
      explanation: 'På hotell: «réserver une chambre» = bestille et rom.',
    },
    {
      question: 'Hva er «une chambre pour deux personnes»?',
      options: ['et dobbeltrom', 'et enkeltrom', 'et møterom', 'et bad'],
      explanation: '«pour deux personnes» = for to personer, altså et dobbeltrom.',
    },
    {
      question: 'Hva betyr «Le petit déjeuner est inclus?»',
      options: ['Er frokosten inkludert?', 'Hva koster frokosten?', 'Når serveres frokosten?', 'Hvor er frokosten?'],
      explanation: '«inclus» = inkludert; spørsmålet gjelder om frokost følger med.',
    },
    {
      question: 'Hva betyr «la clé»?',
      options: ['nøkkelen', 'resepsjonen', 'heisen', 'koffert'],
      explanation: '«la clé» = nøkkelen.',
    },
    {
      question: 'Hva betyr «À quelle heure est le check-out?»',
      options: ['Når må man sjekke ut?', 'Hvor er resepsjonen?', 'Hvor mye koster rommet?', 'Er det wifi?'],
      explanation: 'Spørsmålet gjelder utsjekkingstiden på hotellet.',
    },
  ],

  'fransk-1-10-1': [
    {
      question: 'Hva er «je» av verbet «être» (å være)?',
      options: ['je suis', 'j\'ai', 'je suit', 'je es'],
      explanation: '«être» bøyes: je suis, tu es, il est ...',
    },
    {
      question: 'Velg riktig form: «Tu ___ français» (du er fransk).',
      options: ['es', 'est', 'suis', 'êtes'],
      explanation: '«tu es» = du er.',
    },
    {
      question: 'Hva er «nous» av «être»?',
      options: ['nous sommes', 'nous êtes', 'nous avons', 'nous sont'],
      explanation: '«nous sommes» = vi er.',
    },
    {
      question: 'Velg riktig: «Ils ___ contents» (de er fornøyde).',
      options: ['sont', 'est', 'ont', 'sommes'],
      explanation: '«ils/elles sont» = de er.',
    },
    {
      question: 'Er «être» et regelmessig eller uregelmessig verb?',
      options: ['uregelmessig', 'regelmessig -er-verb', 'regelmessig -ir-verb', 'regelmessig -re-verb'],
      explanation: '«être» er et av de viktigste uregelmessige verbene på fransk.',
    },
  ],

  'fransk-1-10-2': [
    {
      question: 'Hva er «je» av verbet «avoir» (å ha)?',
      options: ['j\'ai', 'je suis', 'j\'as', 'je ai'],
      explanation: '«avoir» bøyes: j\'ai, tu as, il a ...',
    },
    {
      question: 'Velg riktig: «Elle ___ un chien» (hun har en hund).',
      options: ['a', 'as', 'ai', 'ont'],
      explanation: '«il/elle a» = han/hun har.',
    },
    {
      question: 'Hva er «vous» av «avoir»?',
      options: ['vous avez', 'vous êtes', 'vous avons', 'vous ont'],
      explanation: '«vous avez» = dere/De har.',
    },
    {
      question: 'Hvilket verb brukes for alder: «J\'___ quinze ans»?',
      options: ['ai (avoir)', 'suis (être)', 'vais (aller)', 'fais (faire)'],
      explanation: 'Alder uttrykkes med avoir: «J\'ai quinze ans».',
    },
    {
      question: 'Velg riktig: «Ils ___ des amis» (de har venner).',
      options: ['ont', 'sont', 'a', 'avons'],
      explanation: '«ils/elles ont» = de har.',
    },
  ],

  'fransk-1-10-3': [
    {
      question: 'Hvordan bøyes regelmessige -er-verb for «je»?',
      options: ['stamme + -e', 'stamme + -es', 'stamme + -ons', 'stamme + -ent'],
      explanation: 'For -er-verb: je → -e (je parle, je mange).',
    },
    {
      question: 'Velg riktig: «Nous ___ français» (parler).',
      options: ['parlons', 'parlez', 'parle', 'parlent'],
      explanation: 'For -er-verb: nous → -ons (nous parlons).',
    },
    {
      question: 'Hva er «il» av «habiter» (å bo)?',
      options: ['habite', 'habites', 'habitent', 'habitons'],
      explanation: 'il/elle → -e: il habite.',
    },
    {
      question: 'Hvorfor skriver vi «nous mangeons» og ikke «nous mangons»?',
      options: ['For å beholde den myke g-lyden', 'Det er en skrivefeil', 'Fordi manger er uregelmessig', 'For å markere flertall'],
      explanation: 'Verb på -ger beholder e foran -ons for å bevare den myke g-lyden: mangeons.',
    },
    {
      question: 'Velg riktig: «Vous ___ la musique» (écouter).',
      options: ['écoutez', 'écoutons', 'écoute', 'écoutent'],
      explanation: 'vous → -ez: vous écoutez.',
    },
  ],

  'fransk-1-10-4': [
    {
      question: 'Velg riktig: «Je ___ fatigué aujourd\'hui» (jeg er trøtt).',
      options: ['suis', 'ai', 'es', 'a'],
      explanation: 'Tilstand med être: «Je suis fatigué».',
    },
    {
      question: 'Velg riktig: «Nous ___ deux enfants» (vi har to barn).',
      options: ['avons', 'sommes', 'ont', 'avez'],
      explanation: 'Eie med avoir: «Nous avons deux enfants».',
    },
    {
      question: 'Velg riktig form av et -er-verb: «Elles ___ au tennis» (jouer).',
      options: ['jouent', 'joue', 'jouons', 'jouez'],
      explanation: 'ils/elles → -ent: elles jouent.',
    },
    {
      question: 'Hvilket verb brukes for alder?',
      options: ['avoir', 'être', 'faire', 'aller'],
      explanation: 'Alder uttrykkes alltid med avoir: «J\'ai 15 ans».',
    },
    {
      question: 'Velg riktig: «Tu ___ norvégien et tu ___ un chat».',
      options: ['es / as', 'as / es', 'est / a', 'es / a'],
      explanation: 'Nasjonalitet med être (tu es), eie med avoir (tu as).',
    },
  ],

  'fransk-1-11-1': [
    {
      question: 'Hva betyr «la Francophonie»?',
      options: ['fellesskapet av fransktalende land og områder', 'navnet på Frankrike', 'en fransk by', 'fransk grammatikk'],
      explanation: 'La Francophonie omfatter alle land og regioner der fransk snakkes.',
    },
    {
      question: 'Omtrent hvor mange land har fransk som offisielt eller medspråk?',
      options: ['rundt 30 land', 'bare 1 land', 'rundt 100 land', '5 land'],
      explanation: 'Fransk er offisielt språk i rundt 30 land på flere kontinenter.',
    },
    {
      question: 'På hvilke kontinenter snakkes fransk?',
      options: ['flere kontinenter, bl.a. Europa, Afrika og Amerika', 'bare i Europa', 'bare i Afrika', 'bare i Frankrike'],
      explanation: 'Fransk snakkes i Europa, Afrika, Nord-Amerika (Québec), Karibia og Oseania.',
    },
    {
      question: 'Hva er «l\'OIF» (Organisation internationale de la Francophonie)?',
      options: ['en organisasjon for fransktalende land', 'et fransk fotballforbund', 'en fransk avis', 'en fransk skole'],
      explanation: 'OIF samler fransktalende stater og fremmer fransk språk og kultur.',
    },
    {
      question: 'Hvorfor snakkes fransk i mange afrikanske land?',
      options: ['på grunn av den franske kolonihistorien', 'fordi fransk er lett å lære', 'fordi Afrika ligger nær Frankrike', 'det er en tilfeldighet'],
      explanation: 'Fransk spredte seg til Afrika gjennom kolonitiden og er fortsatt utbredt der.',
    },
  ],

  'fransk-1-11-2': [
    {
      question: 'I hvilket land er fransk ett av tre offisielle språk sammen med nederlandsk og tysk?',
      options: ['Belgia', 'Sveits', 'Italia', 'Spania'],
      explanation: 'I Belgia snakkes fransk (i Vallonia), nederlandsk og tysk.',
    },
    {
      question: 'Hva heter den fransktalende delen av Belgia?',
      options: ['Vallonia (la Wallonie)', 'Flandern', 'Brabant', 'Provence'],
      explanation: 'Den fransktalende sørlige delen av Belgia heter Vallonia.',
    },
    {
      question: 'Hvor mange offisielle språk har Sveits?',
      options: ['fire', 'ett', 'to', 'tre'],
      explanation: 'Sveits har fire offisielle språk: tysk, fransk, italiensk og retoromansk.',
    },
    {
      question: 'Hva kalles 70 og 90 på belgisk/sveitsisk fransk?',
      options: ['septante og nonante', 'soixante-dix og quatre-vingt-dix', 'septembre og novembre', 'sept og neuf'],
      explanation: 'I Belgia og Sveits sier man «septante» (70) og «nonante» (90).',
    },
    {
      question: 'Hvilken belgisk by er kjent som EUs «hovedstad»?',
      options: ['Brussel (Bruxelles)', 'Genève', 'Lyon', 'Antwerpen'],
      explanation: 'Brussel, en delvis fransktalende by, huser viktige EU-institusjoner.',
    },
  ],

  'fransk-1-11-3': [
    {
      question: 'Hva er Québec?',
      options: ['en fransktalende provins i Canada', 'en by i Frankrike', 'et land i Afrika', 'en fransk øy'],
      explanation: 'Québec er en provins i Canada der fransk er det offisielle språket.',
    },
    {
      question: 'Hva er Canadas to offisielle språk?',
      options: ['fransk og engelsk', 'fransk og spansk', 'engelsk og tysk', 'fransk og nederlandsk'],
      explanation: 'Canada er offisielt tospråklig: fransk og engelsk.',
    },
    {
      question: 'Hva er hovedstaden i provinsen Québec?',
      options: ['Québec (by)', 'Montréal', 'Ottawa', 'Toronto'],
      explanation: 'Provinshovedstaden heter Québec; Montréal er den største byen.',
    },
    {
      question: 'Hva er typisk for québecfransk («le québécois»)?',
      options: ['egen uttale og egne ord forskjellig fra fransk i Frankrike', 'helt likt parisisk fransk', 'det er egentlig engelsk', 'det skrives med andre bokstaver'],
      explanation: 'Québecfransk har sin egen uttale, ordforråd og uttrykk.',
    },
    {
      question: 'Hvilket slagord finner man på bilskiltene i Québec?',
      options: ['«Je me souviens»', 'Liberté, égalité, fraternité', 'Vive la France', 'Bienvenue au Canada'],
      explanation: '«Je me souviens» («Jeg husker») er Québecs motto.',
    },
  ],

  'fransk-1-11-4': [
    {
      question: 'I hvilken verdensdel snakkes fransk av flest mennesker i dag?',
      options: ['Afrika', 'Europa', 'Asia', 'Sør-Amerika'],
      explanation: 'Flertallet av verdens fransktalende bor i Afrika.',
    },
    {
      question: 'Nevn et fransktalende land i Vest-Afrika.',
      options: ['Senegal', 'Norge', 'Brasil', 'Japan'],
      explanation: 'Senegal (med hovedstad Dakar) er et fransktalende land i Vest-Afrika.',
    },
    {
      question: 'Hvorfor er fransk utbredt i Nord- og Vest-Afrika?',
      options: ['på grunn av kolonitiden', 'fordi Afrika grenser til Frankrike', 'fordi fransk er det eldste språket der', 'det er en tilfeldighet'],
      explanation: 'Fransk ble innført under fransk kolonistyre og er fortsatt offisielt mange steder.',
    },
    {
      question: 'Hva er ofte situasjonen for fransk i afrikanske land?',
      options: ['det er ett av flere språk i et flerspråklig samfunn', 'det er det eneste språket', 'det snakkes ikke lenger', 'det brukes bare i Frankrike'],
      explanation: 'Mange afrikanere snakker fransk i tillegg til lokale morsmål – samfunnene er flerspråklige.',
    },
    {
      question: 'Hva heter hovedstaden i Senegal?',
      options: ['Dakar', 'Abidjan', 'Bamako', 'Rabat'],
      explanation: 'Dakar er hovedstaden i Senegal.',
    },
  ],

  'fransk-1-12-1': [
    {
      question: 'Hva er «la chanson française»?',
      options: ['den franske visetradisjonen/sangtradisjonen', 'fransk grammatikk', 'et fransk instrument', 'en fransk dans'],
      explanation: '«la chanson française» er en rik tradisjon for franskspråklige viser og sanger.',
    },
    {
      question: 'Hvem av disse er en kjent klassisk fransk sanger(inne)?',
      options: ['Édith Piaf', 'Elvis Presley', 'The Beatles', 'ABBA'],
      explanation: 'Édith Piaf er en av Frankrikes mest berømte sangerinner («La Vie en rose»).',
    },
    {
      question: 'Hva betyr tittelen «La Vie en rose»?',
      options: ['Livet i rosenrødt', 'Den røde rosen', 'Livets farger', 'Et rosa liv'],
      explanation: '«La Vie en rose» betyr omtrent «livet sett gjennom rosa briller».',
    },
    {
      question: 'Hva er en fordel ved å lytte til franske sanger når man lærer fransk?',
      options: ['man øver på uttale og ordforråd', 'man slipper å lære grammatikk', 'man lærer engelsk', 'det erstatter all lesing'],
      explanation: 'Musikk er en motiverende måte å øve på uttale, rytme og ord i kontekst.',
    },
    {
      question: 'Hva er «le rap français» et eksempel på?',
      options: ['moderne franskspråklig musikk', 'klassisk opera', 'folkemusikk fra 1800-tallet', 'en dansestil'],
      explanation: 'Fransk rap er en levende, moderne del av den franskspråklige musikkscenen.',
    },
  ],

  'fransk-1-12-2': [
    {
      question: 'Hva kalles den berømte franske filmfestivalen?',
      options: ['Festivalen i Cannes', 'Oscar-utdelingen', 'Berlinalen', 'Sundance'],
      explanation: 'Filmfestivalen i Cannes er en av verdens mest prestisjefylte.',
    },
    {
      question: 'Hva er Frankrikes plass i filmhistorien?',
      options: ['filmen ble oppfunnet der (brødrene Lumière)', 'Frankrike lagde aldri film', 'film kom først til Frankrike på 2000-tallet', 'Frankrike forbød film'],
      explanation: 'Brødrene Lumière regnes som pionerer for filmen, vist i Paris i 1895.',
    },
    {
      question: 'Hva betyr «un film en version originale (VO)»?',
      options: ['filmen på originalspråket (ofte med teksting)', 'en dubbet film', 'en stumfilm', 'en kortfilm'],
      explanation: '«version originale» = originalversjon, ofte tekstet i stedet for dubbet.',
    },
    {
      question: 'Hva er «le cinéma» på norsk?',
      options: ['kinoen / filmkunsten', 'skuespilleren', 'manuset', 'lerretet'],
      explanation: '«le cinéma» betyr både kinoen og filmkunsten.',
    },
    {
      question: 'Hva heter den franske gullpalmen man kan vinne i Cannes?',
      options: ['la Palme d\'or', 'l\'Oscar', 'le Lion d\'or', 'l\'Ours d\'or'],
      explanation: '«la Palme d\'or» (Gullpalmen) er hovedprisen i Cannes.',
    },
  ],

  'fransk-1-12-3': [
    {
      question: 'Hva er «la bande dessinée» (BD)?',
      options: ['tegneserien', 'romanen', 'avisen', 'diktet'],
      explanation: '«la bande dessinée» (ofte forkortet BD) = tegneserien.',
    },
    {
      question: 'Hvilken kjent tegneserie handler om en liten gallisk landsby som gjør motstand mot romerne?',
      options: ['Astérix', 'Tintin', 'Spider-Man', 'Lucky Luke'],
      explanation: 'Astérix (av Goscinny og Uderzo) er en av Frankrikes mest berømte tegneserier.',
    },
    {
      question: 'Hvilken figur, skapt av belgiske Hergé, er en ung reporter med hunden Milou?',
      options: ['Tintin', 'Astérix', 'Gaston', 'Obélix'],
      explanation: 'Tintin er en klassisk fransk-belgisk tegneseriefigur med hunden Milou (Snowy).',
    },
    {
      question: 'Hva kalles BD ofte i Frankrike på grunn av sin anseelse?',
      options: ['«le neuvième art» (den niende kunstart)', 'barneunderholdning uten verdi', 'en type roman', 'en avissjanger'],
      explanation: 'Tegneserier regnes som «den niende kunstart» og har høy status i Frankrike.',
    },
    {
      question: 'Hva er Astérix\' beste venn, den store med menhirene?',
      options: ['Obélix', 'Idéfix', 'Panoramix', 'César'],
      explanation: 'Obélix er Astérix\' kraftige venn som bærer menhirer.',
    },
  ],

  'fransk-1-12-4': [
    {
      question: 'Hva feirer franskmennene 14. juli («le 14 juillet»)?',
      options: ['nasjonaldagen (stormingen av Bastillen)', 'jul', 'påske', 'arbeidernes dag'],
      explanation: '14. juli er nasjonaldagen, til minne om stormingen av Bastillen i 1789.',
    },
    {
      question: 'Hva er «Noël»?',
      options: ['julen', 'påsken', 'pinsen', 'nyttår'],
      explanation: '«Noël» = julen. «Joyeux Noël!» = «God jul!»',
    },
    {
      question: 'Hva sier man til hverandre ved nyttår?',
      options: ['Bonne année!', 'Joyeuses Pâques!', 'Bon appétit!', 'Bonne nuit!'],
      explanation: '«Bonne année!» = «Godt nytt år!»',
    },
    {
      question: 'Hva er «la galette des rois» knyttet til?',
      options: ['festen for de hellige tre konger (Épiphanie)', 'nasjonaldagen', 'påske', 'allehelgensdag'],
      explanation: '«la galette des rois» (kongekaken) spises rundt 6. januar (Épiphanie).',
    },
    {
      question: 'Hva betyr «Joyeuses Pâques»?',
      options: ['God påske', 'God jul', 'Godt nytt år', 'Gratulerer med dagen'],
      explanation: '«Pâques» = påske; «Joyeuses Pâques» = «God påske».',
    },
  ],

  'fransk-1-13-1': [
    {
      question: 'Hva finner du under «entrées» på en fransk meny?',
      options: ['forretter', 'hovedretter', 'desserter', 'drikke'],
      explanation: '«les entrées» = forrettene (ikke «inngang» i denne sammenhengen).',
    },
    {
      question: 'Hva betyr «plat principal»?',
      options: ['hovedretten', 'forretten', 'desserten', 'dagens suppe'],
      explanation: '«le plat principal» = hovedretten.',
    },
    {
      question: 'Hva er «le menu du jour»?',
      options: ['dagens meny', 'vinkartet', 'barnemenyen', 'regningen'],
      explanation: '«le menu du jour» = dagens meny (ofte en fast pris).',
    },
    {
      question: 'Hva betyr «boissons» på en meny?',
      options: ['drikke', 'desserter', 'tilbehør', 'forretter'],
      explanation: '«les boissons» = drikkevarer.',
    },
    {
      question: 'Hva betyr «service compris»?',
      options: ['betjening (tips) er inkludert', 'maten er gratis', 'menyen er på engelsk', 'restauranten er stengt'],
      explanation: '«service compris» = service/tips er inkludert i prisen.',
    },
  ],

  'fransk-1-13-2': [
    {
      question: 'Hva betyr «départ» på en rutetabell?',
      options: ['avgang', 'ankomst', 'forsinkelse', 'perrong'],
      explanation: '«départ» = avgang. «arrivée» = ankomst.',
    },
    {
      question: 'Hva betyr «arrivée»?',
      options: ['ankomst', 'avgang', 'spor', 'billett'],
      explanation: '«arrivée» = ankomst.',
    },
    {
      question: 'Hva er «le quai»?',
      options: ['perrongen/plattformen', 'billettluken', 'venterommet', 'utgangen'],
      explanation: '«le quai» = perrongen (der toget stopper).',
    },
    {
      question: 'Hva betyr «Le train de 8h30 a 15 minutes de retard»?',
      options: ['Toget kl. 08:30 er 15 minutter forsinket', 'Toget går om 15 minutter', 'Toget kjører kl. 15:00', 'Toget er innstilt'],
      explanation: '«retard» = forsinkelse; «15 minutes de retard» = 15 minutter forsinket.',
    },
    {
      question: 'Hva betyr «tous les jours» i en rutetabell?',
      options: ['hver dag', 'bare i helgen', 'bare hverdager', 'én gang i uka'],
      explanation: '«tous les jours» = hver dag.',
    },
  ],

  'fransk-1-13-3': [
    {
      question: 'Hva er «une petite annonce»?',
      options: ['en småannonse/rubrikkannonse', 'en stor avisartikkel', 'et brev', 'en reklamefilm'],
      explanation: '«une petite annonce» = en småannonse (f.eks. til salgs / søkes).',
    },
    {
      question: 'Hva betyr «À vendre» i en annonse?',
      options: ['Til salgs', 'Til leie', 'Gis bort', 'Ønskes kjøpt'],
      explanation: '«À vendre» = til salgs. «À louer» = til leie.',
    },
    {
      question: 'Hva betyr «À louer»?',
      options: ['Til leie', 'Til salgs', 'Solgt', 'Ledig stilling'],
      explanation: '«louer» = å leie; «À louer» = til leie.',
    },
    {
      question: 'Hva betyr «recherche» i en kontaktannonse?',
      options: ['søker/ønsker', 'tilbyr', 'selger', 'bytter'],
      explanation: '«recherche» (av chercher) = søker/ønsker (f.eks. «recherche colocataire»).',
    },
    {
      question: 'Hva er «un colocataire»?',
      options: ['en som deler bolig med deg', 'en utleier', 'en nabo', 'en gjest'],
      explanation: '«un colocataire» = en man deler leilighet med (i en colocation).',
    },
  ],

  'fransk-1-13-4': [
    {
      question: 'Hva er en fordel med å lese enkle dikt og sanger på fransk?',
      options: ['man møter språket med rim, rytme og bilder', 'man slipper å lære nye ord', 'tekstene er alltid på engelsk', 'det erstatter grammatikk helt'],
      explanation: 'Dikt og sanger gir språket i en musikalsk, minneverdig form.',
    },
    {
      question: 'Hva er «une rime»?',
      options: ['et rim', 'et vers', 'et refreng', 'en strofe'],
      explanation: '«une rime» = et rim (like lyder i slutten av verselinjer).',
    },
    {
      question: 'Hva er «le refrain» i en sang?',
      options: ['refrenget', 'første vers', 'tittelen', 'introen'],
      explanation: '«le refrain» = refrenget (gjentas mellom versene).',
    },
    {
      question: 'Hva er «Frère Jacques»?',
      options: ['en kjent fransk barnesang', 'et fransk dikt fra 1900-tallet', 'en roman', 'en fransk film'],
      explanation: '«Frère Jacques» er en verdenskjent fransk barnesang.',
    },
    {
      question: 'Hva er «un poème»?',
      options: ['et dikt', 'en sang', 'en novelle', 'et brev'],
      explanation: '«un poème» = et dikt.',
    },
  ],

  'fransk-1-14-1': [
    {
      question: 'Hva skjer ofte med konsonanter på slutten av franske ord?',
      options: ['de uttales gjerne ikke', 'de uttales ekstra hardt', 'de blir til vokaler', 'de dobles'],
      explanation: 'Mange sluttkonsonanter er stumme på fransk, f.eks. -s, -t, -d i «petit».',
    },
    {
      question: 'Hva er «une liaison» i fransk uttale?',
      options: ['en ellers stum sluttkonsonant uttales foran vokal', 'å snakke fort', 'å hviske', 'et stumt h'],
      explanation: 'Liaison: «les amis» uttales med en /z/-lyd fordi neste ord begynner på vokal.',
    },
    {
      question: 'Hvordan uttales bokstavkombinasjonen «ou» (som i «vous»)?',
      options: ['som norsk «u»', 'som norsk «y»', 'som norsk «o»', 'som norsk «æ»'],
      explanation: 'Fransk «ou» uttales som norsk u-lyd: vous, nous, bonjour.',
    },
    {
      question: 'Hva er spesielt med bokstaven «h» i fransk?',
      options: ['den er stum (uttales ikke)', 'den uttales hardt', 'den uttales som «g»', 'den finnes ikke'],
      explanation: 'Fransk «h» er stumt: «hôtel», «homme».',
    },
    {
      question: 'Hva betyr aksenttegnet i «é» (accent aigu)?',
      options: ['det påvirker uttalen av e-en', 'det betyr at ordet er flertall', 'det markerer hunkjønn', 'det er bare pynt'],
      explanation: 'Aksenttegn som «é» endrer uttalen av vokalen (lukket e-lyd).',
    },
  ],

  'fransk-1-14-2': [
    {
      question: 'Hva er en god lyttestrategi når du ikke forstår alt?',
      options: ['fang opp nøkkelord og bruk konteksten', 'gi opp med en gang', 'oversette hvert ord før du lytter videre', 'ignorere hele teksten'],
      explanation: 'God lytting handler om å fange hovedinnholdet via nøkkelord og sammenheng.',
    },
    {
      question: 'Hva betyr «Pouvez-vous répéter, s\'il vous plaît?»',
      options: ['Kan De gjenta, takk?', 'Snakk saktere, takk', 'Jeg forstår ikke', 'Hva betyr det?'],
      explanation: '«répéter» = å gjenta; en nyttig setning når du ikke fikk med deg noe.',
    },
    {
      question: 'Hva betyr «Parlez plus lentement, s\'il vous plaît»?',
      options: ['Snakk saktere, takk', 'Snakk høyere, takk', 'Gjenta, takk', 'Stopp, takk'],
      explanation: '«lentement» = sakte; man ber den andre snakke saktere.',
    },
    {
      question: 'Hva betyr «Je ne comprends pas»?',
      options: ['Jeg forstår ikke', 'Jeg vet ikke', 'Jeg hører ikke', 'Jeg er ikke enig'],
      explanation: '«comprendre» = å forstå; «Je ne comprends pas» = jeg forstår ikke.',
    },
    {
      question: 'Hvorfor er det lurt å lytte til autentisk fransk (sanger, podkast)?',
      options: ['for å venne øret til ekte uttale og tempo', 'for å unngå å lære ord', 'fordi det er lettere enn læreboka', 'for å slippe å snakke selv'],
      explanation: 'Autentisk lytting trener øret på ekte fransk uttale, rytme og intonasjon.',
    },
  ],

  'fransk-1-14-3': [
    {
      question: 'Hva er et godt råd når du presenterer deg muntlig på fransk?',
      options: ['snakk tydelig og bruk enkle, korrekte setninger', 'snakk så fort som mulig', 'bruk bare lange, kompliserte setninger', 'unngå å se på tilhørerne'],
      explanation: 'Tydelig tale med enkle, korrekte setninger gir best kommunikasjon på begynnernivå.',
    },
    {
      question: 'Hvilken setning passer for å starte en presentasjon om deg selv?',
      options: ['Bonjour, je m\'appelle ... et j\'ai ... ans', 'Au revoir et merci', 'Je ne comprends pas', 'C\'est combien?'],
      explanation: 'En selvpresentasjon starter ofte med navn og alder: «Je m\'appelle ..., j\'ai ... ans».',
    },
    {
      question: 'Hva betyr «Pour conclure»?',
      options: ['For å avslutte', 'For det første', 'For eksempel', 'På den annen side'],
      explanation: '«Pour conclure» = for å avslutte (nyttig markør på slutten av en presentasjon).',
    },
    {
      question: 'Hva er nyttig å gjøre hvis du glemmer et ord midt i en presentasjon?',
      options: ['omformulere med ord du kan', 'stoppe helt opp', 'bytte til norsk resten av tiden', 'be om å få begynne på nytt'],
      explanation: 'Å omformulere med kjente ord er en viktig kommunikasjonsstrategi.',
    },
    {
      question: 'Hva betyr uttrykket «D\'abord ..., ensuite ..., enfin ...»?',
      options: ['Først ..., deretter ..., til slutt ...', 'Ja ..., nei ..., kanskje ...', 'Her ..., der ..., overalt ...', 'I dag ..., i går ..., i morgen ...'],
      explanation: 'Disse bindeordene strukturerer en presentasjon: først, deretter, til slutt.',
    },
  ],

  'fransk-1-14-4': [
    {
      question: 'Hva er hensikten med «un jeu de rôle» (rollespill) i språklæring?',
      options: ['å øve på ekte samtaler i trygge rammer', 'å lære grammatikkregler utenat', 'å skrive lange stiler', 'å lese stille for seg selv'],
      explanation: 'Rollespill lar deg trene praktiske samtaler, f.eks. i butikken eller på restaurant.',
    },
    {
      question: 'I et rollespill på restaurant, hva sier kunden?',
      options: ['Je voudrais commander, s\'il vous plaît', 'Vous désirez?', 'Bonne nuit', 'Tournez à gauche'],
      explanation: 'Kunden bestiller: «Je voudrais commander» mens servitøren sier «Vous désirez?».',
    },
    {
      question: 'Hvilken replikk passer for en ekspeditør i en klesbutikk?',
      options: ['Quelle taille cherchez-vous?', 'L\'addition, s\'il vous plaît', 'Je viens de Norvège', 'Il est minuit'],
      explanation: '«Quelle taille cherchez-vous?» = «Hvilken størrelse ser du etter?»',
    },
    {
      question: 'Hva er en god strategi i et rollespill når du ikke kommer på et ord?',
      options: ['bruke en omskrivning eller et synonym', 'avbryte rollespillet', 'svare på norsk', 'stå helt stille'],
      explanation: 'Å omformulere holder samtalen i gang – en viktig muntlig ferdighet.',
    },
    {
      question: 'Hvilken replikk avslutter naturlig et rollespill om å spørre om veien?',
      options: ['Merci beaucoup, au revoir!', 'Je voudrais réserver une chambre', 'C\'est trop cher', 'J\'ai quinze ans'],
      explanation: 'Etter å ha fått veibeskrivelse takker man: «Merci beaucoup, au revoir!».',
    },
  ],

  'fransk-1-15-1': [
    {
      question: 'Hvordan starter man ofte et uformelt postkort til en venn?',
      options: ['Salut / Cher (Chère) ...', 'Madame, Monsieur', 'Cordialement', 'Veuillez agréer'],
      explanation: 'Uformelt: «Salut ...» eller «Cher/Chère ...».',
    },
    {
      question: 'Hva er en vanlig avslutning på et postkort til en venn?',
      options: ['Bises / À bientôt', 'Cordialement', 'Veuillez agréer mes salutations', 'Monsieur le Directeur'],
      explanation: '«Bises» (klem/kyss) og «À bientôt» (ses snart) er uformelle avslutninger.',
    },
    {
      question: 'Hva betyr «Je passe de bonnes vacances ici»?',
      options: ['Jeg har en fin ferie her', 'Jeg skal reise hjem', 'Været er dårlig', 'Jeg savner deg'],
      explanation: '«passer de bonnes vacances» = å ha en fin ferie.',
    },
    {
      question: 'Hva betyr «Il fait beau ici»?',
      options: ['Det er fint vær her', 'Det regner her', 'Det er kaldt her', 'Det er langt hit'],
      explanation: '«Il fait beau» = det er fint vær.',
    },
    {
      question: 'Hva betyr «À bientôt»?',
      options: ['Ses snart', 'Ha det for godt', 'Vennlig hilsen', 'God bedring'],
      explanation: '«À bientôt» = «ses snart» – vanlig uformell avslutning.',
    },
  ],

  'fransk-1-15-2': [
    {
      question: 'Hvordan begynner man en formell fransk e-post når man ikke vet navnet?',
      options: ['Madame, Monsieur,', 'Salut!', 'Coucou', 'Cher ami'],
      explanation: 'Formelt og upersonlig: «Madame, Monsieur,».',
    },
    {
      question: 'Hva er en passende formell avslutning?',
      options: ['Cordialement', 'Bises', 'À plus', 'Coucou'],
      explanation: '«Cordialement» er en høflig, formell avslutning (ca. «vennlig hilsen»).',
    },
    {
      question: 'Hva betyr «Je vous écris pour ...»?',
      options: ['Jeg skriver til Dem for å ...', 'Takk for e-posten', 'Vennlig hilsen', 'Jeg beklager'],
      explanation: '«Je vous écris pour ...» innleder formålet med en formell e-post.',
    },
    {
      question: 'Hvilket pronomen bruker man i en formell e-post til en ukjent?',
      options: ['vous', 'tu', 'on', 'il'],
      explanation: 'Man bruker høflighetsformen «vous» i formelle sammenhenger.',
    },
    {
      question: 'Hva betyr «En attendant votre réponse»?',
      options: ['I påvente av Deres svar', 'Takk for sist', 'Beklager forsinkelsen', 'Med vennlig hilsen'],
      explanation: '«En attendant votre réponse» = «i påvente av Deres svar», typisk avslutningsfrase.',
    },
  ],

  'fransk-1-15-3': [
    {
      question: 'Hva er «un journal intime»?',
      options: ['en personlig dagbok', 'en avis', 'et leserinnlegg', 'en blogg for alle'],
      explanation: '«un journal intime» = en personlig/privat dagbok.',
    },
    {
      question: 'Hvilken verbtid passer godt for å skrive om dagens hendelser i dagboka?',
      options: ['passé composé', 'futur simple', 'conditionnel', 'subjonctif'],
      explanation: 'Passé composé brukes for avsluttede handlinger («Aujourd\'hui, j\'ai ...»).',
    },
    {
      question: 'Hva betyr «Cher journal»?',
      options: ['Kjære dagbok', 'God morgen', 'Til slutt', 'Kjære venn'],
      explanation: 'Mange innleder dagboknotater med «Cher journal» (kjære dagbok).',
    },
    {
      question: 'Hva betyr «Aujourd\'hui, je me sens heureux/heureuse»?',
      options: ['I dag føler jeg meg lykkelig', 'I dag er jeg trøtt', 'I går var jeg syk', 'I morgen drar jeg'],
      explanation: '«se sentir heureux/heureuse» = å føle seg lykkelig.',
    },
    {
      question: 'Hva er typisk for en dagbok sammenlignet med en formell tekst?',
      options: ['den er personlig og ofte uformell', 'den er alltid svært formell', 'den har ingen forfatter', 'den er beregnet på offentligheten'],
      explanation: 'Dagboka er personlig, gjerne i jeg-form og uformell tone.',
    },
  ],

  'fransk-1-15-4': [
    {
      question: 'Hvordan begynner man ofte å beskrive et bilde på fransk?',
      options: ['Sur cette image, on voit ...', 'Il était une fois ...', 'Cordialement, ...', 'Au revoir ...'],
      explanation: '«Sur cette image, on voit ...» = «På dette bildet ser man ...».',
    },
    {
      question: 'Hva betyr «au premier plan»?',
      options: ['i forgrunnen', 'i bakgrunnen', 'til høyre', 'øverst'],
      explanation: '«au premier plan» = i forgrunnen. «à l\'arrière-plan» = i bakgrunnen.',
    },
    {
      question: 'Hva betyr «à l\'arrière-plan»?',
      options: ['i bakgrunnen', 'i forgrunnen', 'i midten', 'utenfor bildet'],
      explanation: '«à l\'arrière-plan» = i bakgrunnen.',
    },
    {
      question: 'Hvilket uttrykk markerer en sannsynlighet i en bildebeskrivelse?',
      options: ['Il semble que ...', 'Il est certain que ...', 'C\'est faux', 'Jamais'],
      explanation: '«Il semble que ...» = «Det ser ut til at ...», nyttig når man tolker et bilde.',
    },
    {
      question: 'Hva betyr «à gauche» og «à droite» i en bildebeskrivelse?',
      options: ['til venstre og til høyre', 'oppe og nede', 'foran og bak', 'inni og utenpå'],
      explanation: '«à gauche» = til venstre, «à droite» = til høyre.',
    },
  ],

  'fransk-1-16-1': [
    {
      question: 'Hvordan danner man enkel nektelse på fransk?',
      options: ['ne ... pas rundt det bøyde verbet', 'bare «pas» foran verbet', 'bare «ne» etter verbet', 'med «no» foran setningen'],
      explanation: 'Nektelse: «ne» + verb + «pas»: «Je ne parle pas».',
    },
    {
      question: 'Hvordan blir «J\'aime le café» nektende?',
      options: ['Je n\'aime pas le café', 'Je aime pas le café', 'Je ne aime le café', 'Je pas aime le café'],
      explanation: 'Foran vokal blir «ne» til «n\'»: «Je n\'aime pas le café».',
    },
    {
      question: 'Hva betyr «Je ne fume jamais»?',
      options: ['Jeg røyker aldri', 'Jeg røyker av og til', 'Jeg røyker ikke nå', 'Jeg har sluttet å røyke'],
      explanation: '«ne ... jamais» = aldri.',
    },
    {
      question: 'Hva betyr «Il n\'y a rien»?',
      options: ['Det er ingenting', 'Det er noen', 'Det er ingen (personer)', 'Det er alt'],
      explanation: '«ne ... rien» = ingenting; «Il n\'y a rien» = det er ingenting.',
    },
    {
      question: 'Hva betyr «Je ne connais personne ici»?',
      options: ['Jeg kjenner ingen her', 'Jeg kjenner alle her', 'Jeg kjenner ingenting her', 'Jeg bor ikke her'],
      explanation: '«ne ... personne» = ingen (om personer).',
    },
  ],

  'fransk-1-16-2': [
    {
      question: 'Hvilken er en gyldig måte å danne ja/nei-spørsmål på fransk?',
      options: ['Est-ce que tu parles français?', 'Que tu parles français?', 'Parles français tu?', 'Tu français parles?'],
      explanation: '«Est-ce que ...» foran en vanlig setning lager et ja/nei-spørsmål.',
    },
    {
      question: 'Hva betyr spørreordet «pourquoi»?',
      options: ['hvorfor', 'hvor', 'når', 'hvem'],
      explanation: '«pourquoi» = hvorfor.',
    },
    {
      question: 'Hva er den mest formelle/skriftlige spørremåten i «Parles-tu français?»',
      options: ['inversjon (verb-subjekt med bindestrek)', 'est-ce que', 'stigende tonefall uten endring', 'spørreord til slutt'],
      explanation: 'Inversjon («Parles-tu ...?») er den mest formelle spørremåten.',
    },
    {
      question: 'Hva betyr spørreordet «quand»?',
      options: ['når', 'hvor', 'hvordan', 'hvor mye'],
      explanation: '«quand» = når. «où» = hvor, «comment» = hvordan, «combien» = hvor mye.',
    },
    {
      question: 'Hvilket spørsmål er en uformell/muntlig variant av «Tu viens?»',
      options: ['Tu viens? (med stigende tonefall)', 'Viens-tu pas?', 'Que viens-tu?', 'Est-ce viens tu?'],
      explanation: 'I uformell tale kan man bare heve tonefallet: «Tu viens?».',
    },
  ],

  'fransk-1-16-3': [
    {
      question: 'Hvilke er de franske ubestemte artiklene?',
      options: ['un, une, des', 'le, la, les', 'mon, ma, mes', 'ce, cette, ces'],
      explanation: 'Ubestemt artikkel: un (hankjønn), une (hunkjønn), des (flertall).',
    },
    {
      question: 'Velg riktig bestemt artikkel: «___ maison» (huset).',
      options: ['la', 'le', 'l\'', 'les'],
      explanation: '«maison» er hunkjønn: «la maison».',
    },
    {
      question: 'Hvorfor heter det «l\'école» og ikke «la école»?',
      options: ['«école» begynner med vokal', '«école» er hankjønn', 'det er flertall', 'det er en skrivefeil'],
      explanation: 'Foran vokal blir le/la til l\': l\'école, l\'ami.',
    },
    {
      question: 'Velg riktig: «J\'ai ___ chien» (jeg har en hund).',
      options: ['un', 'une', 'le', 'des'],
      explanation: '«chien» er hankjønn entall, ubestemt: «un chien».',
    },
    {
      question: 'Når brukes bestemt artikkel (le/la/les) framfor ubestemt?',
      options: ['når man snakker om noe spesifikt/kjent', 'alltid', 'aldri i entall', 'bare i spørsmål'],
      explanation: 'Bestemt artikkel brukes om noe bestemt/allerede nevnt: «Le chien est là».',
    },
  ],

  'fransk-1-16-4': [
    {
      question: 'Hva er en god strategi for å huske nye gloser?',
      options: ['gjenta dem jevnlig og bruk dem i setninger', 'lese dem én gang og glemme dem', 'bare oversette til norsk uten å øve', 'unngå å skrive dem ned'],
      explanation: 'Aktiv repetisjon og bruk i kontekst gir best læring av gloser.',
    },
    {
      question: 'Hva er fordelen med å lese på fransk uten å slå opp hvert ord?',
      options: ['man trener på å forstå ut fra sammenhengen', 'man lærer ingenting', 'det går saktere', 'man trenger ikke ordbok senere'],
      explanation: 'Å gjette ut fra kontekst er en viktig lesestrategi.',
    },
    {
      question: 'Hva er et «mot transparent» (gjennomsiktig ord)?',
      options: ['et ord som ligner på norsk/engelsk og er lett å forstå', 'et usynlig ord', 'et ord uten betydning', 'et stumt ord'],
      explanation: 'Ord som «télévision» eller «restaurant» ligner og er lette å kjenne igjen.',
    },
    {
      question: 'Hvorfor er det nyttig å lage egne setninger med nye ord?',
      options: ['det fester ordet bedre i minnet', 'det er bortkastet tid', 'læreren liker det', 'for å fylle siden'],
      explanation: 'Å bruke ordet aktivt i egne setninger styrker hukommelsen.',
    },
    {
      question: 'Hva bør du gjøre når du gjør en feil mens du øver?',
      options: ['se på feilen som en del av læringen og prøve igjen', 'gi opp', 'aldri snakke fransk mer', 'late som ingenting'],
      explanation: 'Feil er en naturlig del av språklæring; å lære av dem er en god strategi.',
    },
  ],

  'fransk-1-17-1': [
    {
      question: 'Hva består passé composé med «avoir» av?',
      options: ['avoir (bøyd) + partisipp', 'être + partisipp', 'infinitiv + endelse', 'bare partisippet'],
      explanation: 'Passé composé = hjelpeverb (her avoir) bøyd i presens + partisipp.',
    },
    {
      question: 'Hva er partisippet (participe passé) av «parler»?',
      options: ['parlé', 'parler', 'parlé(e)s', 'parlant'],
      explanation: '-er-verb får partisipp på -é: parler → parlé.',
    },
    {
      question: 'Velg riktig: «J\'___ mangé une pizza».',
      options: ['ai', 'suis', 'es', 'a'],
      explanation: 'Hjelpeverbet avoir bøyes «j\'ai»: «J\'ai mangé».',
    },
    {
      question: 'Hva er partisippet av «finir»?',
      options: ['fini', 'finit', 'finir', 'finu'],
      explanation: '-ir-verb får partisipp på -i: finir → fini.',
    },
    {
      question: 'Velg riktig: «Nous ___ travaillé hier».',
      options: ['avons', 'sommes', 'ont', 'avez'],
      explanation: '«nous avons» + partisipp: «Nous avons travaillé».',
    },
  ],

  'fransk-1-17-2': [
    {
      question: 'Hvilket hjelpeverb bruker bevegelsesverb som «aller» i passé composé?',
      options: ['être', 'avoir', 'faire', 'aller'],
      explanation: 'En gruppe bevegelses-/tilstandsverb (aller, venir, partir ...) tar «être».',
    },
    {
      question: 'Hva må skje med partisippet ved «être» som hjelpeverb?',
      options: ['det samsvarer i kjønn og tall med subjektet', 'det er alltid uendret', 'det får alltid -s', 'det får alltid -e'],
      explanation: 'Med être bøyes partisippet etter subjektet: «Elle est allée».',
    },
    {
      question: 'Velg riktig: «Elle est ___ au cinéma» (aller).',
      options: ['allée', 'allé', 'allés', 'aller'],
      explanation: 'Subjektet «elle» er hunkjønn entall, så partisippet får -e: allée.',
    },
    {
      question: 'Velg riktig: «Ils sont ___ à Paris» (arriver).',
      options: ['arrivés', 'arrivé', 'arrivée', 'arrivées'],
      explanation: '«Ils» er hankjønn flertall: partisippet får -s: arrivés.',
    },
    {
      question: 'Hvilket av disse verbene tar «être» i passé composé?',
      options: ['partir', 'manger', 'parler', 'finir'],
      explanation: '«partir» (å dra) er et bevegelsesverb som tar être; de andre tar avoir.',
    },
  ],

  'fransk-1-17-3': [
    {
      question: 'Hva er partisippet av «avoir»?',
      options: ['eu', 'avu', 'avé', 'ayé'],
      explanation: 'Uregelmessig: avoir → eu (uttales /y/).',
    },
    {
      question: 'Hva er partisippet av «être»?',
      options: ['été', 'étu', 'étant', 'étré'],
      explanation: 'Uregelmessig: être → été.',
    },
    {
      question: 'Hva er partisippet av «faire»?',
      options: ['fait', 'fais', 'faisé', 'fairé'],
      explanation: 'Uregelmessig: faire → fait.',
    },
    {
      question: 'Hva er partisippet av «prendre»?',
      options: ['pris', 'prendu', 'prené', 'prendé'],
      explanation: 'Uregelmessig: prendre → pris.',
    },
    {
      question: 'Velg riktig: «J\'ai ___ un livre» (lire = å lese).',
      options: ['lu', 'lit', 'lisé', 'liré'],
      explanation: 'Uregelmessig: lire → lu.',
    },
  ],

  'fransk-1-17-4': [
    {
      question: 'Hvilken verbtid bruker man for å fortelle om avsluttede hendelser i fortid?',
      options: ['passé composé', 'présent', 'futur', 'impératif'],
      explanation: 'Passé composé brukes for avsluttede handlinger i fortiden.',
    },
    {
      question: 'Velg riktig: «Hier, je ___ allé au cinéma».',
      options: ['suis', 'ai', 'es', 'a'],
      explanation: '«aller» tar être: «je suis allé(e)».',
    },
    {
      question: 'Hva betyr tidsuttrykket «hier»?',
      options: ['i går', 'i dag', 'i morgen', 'nå'],
      explanation: '«hier» = i går (passer godt med fortidsfortelling).',
    },
    {
      question: 'Velg riktig: «Nous ___ visité le musée» (avoir-verb).',
      options: ['avons', 'sommes', 'ont', 'êtes'],
      explanation: '«visiter» tar avoir: «Nous avons visité».',
    },
    {
      question: 'Hvilket bindeord hjelper deg å sette hendelser i rekkefølge i en fortelling?',
      options: ['puis / ensuite (så/deretter)', 'mais (men)', 'parce que (fordi)', 'donc (altså)'],
      explanation: '«puis» og «ensuite» knytter hendelser i rekkefølge: «D\'abord ... puis ...».',
    },
  ],

  'fransk-1-18-1': [
    {
      question: 'Hva betyr verbet «pouvoir»?',
      options: ['å kunne / ha lov til', 'å ville', 'å måtte', 'å vite'],
      explanation: '«pouvoir» = å kunne (evne eller tillatelse).',
    },
    {
      question: 'Velg riktig: «Je ___ venir ce soir».',
      options: ['peux', 'peut', 'pouvez', 'pouvons'],
      explanation: '«pouvoir» bøyes: je peux, tu peux, il peut ...',
    },
    {
      question: 'Hva er «il/elle» av «pouvoir»?',
      options: ['peut', 'peux', 'peuvent', 'pouvez'],
      explanation: 'il/elle peut.',
    },
    {
      question: 'Hva betyr «Est-ce que je peux aller aux toilettes?»',
      options: ['Kan/får jeg gå på toalettet?', 'Hvor er toalettet?', 'Jeg vil gå på toalettet', 'Toalettet er stengt'],
      explanation: '«pouvoir» brukes til å be om tillatelse: «Kan jeg ...?»',
    },
    {
      question: 'Hva kommer etter «pouvoir» i en setning?',
      options: ['et verb i infinitiv', 'et partisipp', 'et substantiv uten verb', 'et adjektiv'],
      explanation: 'Modalverb som pouvoir følges av infinitiv: «Je peux venir».',
    },
  ],

  'fransk-1-18-2': [
    {
      question: 'Hva betyr verbet «vouloir»?',
      options: ['å ville / ønske', 'å kunne', 'å måtte', 'å vite'],
      explanation: '«vouloir» = å ville/ønske.',
    },
    {
      question: 'Velg riktig: «Je ___ un café».',
      options: ['veux', 'veut', 'voulez', 'voulons'],
      explanation: '«vouloir» bøyes: je veux, tu veux, il veut ...',
    },
    {
      question: 'Hva er den høflige formen «jeg vil gjerne ha»?',
      options: ['Je voudrais', 'Je veux', 'Je vais', 'Je peux'],
      explanation: '«Je voudrais» (kondisjonalis) er mer høflig enn «je veux».',
    },
    {
      question: 'Hva er «nous» av «vouloir»?',
      options: ['voulons', 'voulez', 'veulent', 'veux'],
      explanation: 'nous voulons.',
    },
    {
      question: 'Hva betyr «Veux-tu aller au cinéma avec moi?»',
      options: ['Vil du gå på kino med meg?', 'Kan du gå på kino?', 'Hvor er kinoen?', 'Jeg vil gå på kino'],
      explanation: '«Veux-tu ...?» = «Vil du ...?» (invitasjon).',
    },
  ],

  'fransk-1-18-3': [
    {
      question: 'Hva betyr verbet «devoir»?',
      options: ['å måtte / skylde', 'å kunne', 'å ville', 'å vite'],
      explanation: '«devoir» = å måtte (plikt) eller å skylde.',
    },
    {
      question: 'Velg riktig: «Je ___ partir maintenant».',
      options: ['dois', 'doit', 'devez', 'devons'],
      explanation: '«devoir» bøyes: je dois, tu dois, il doit ...',
    },
    {
      question: 'Hva er «il/elle» av «devoir»?',
      options: ['doit', 'dois', 'doivent', 'devez'],
      explanation: 'il/elle doit.',
    },
    {
      question: 'Hva betyr «Tu dois faire tes devoirs»?',
      options: ['Du må gjøre leksene dine', 'Du vil gjøre leksene', 'Du kan gjøre leksene', 'Du har gjort leksene'],
      explanation: '«devoir» uttrykker plikt; «Tu dois ...» = «Du må ...».',
    },
    {
      question: 'Hva følger etter «devoir»?',
      options: ['et verb i infinitiv', 'et partisipp', 'et adjektiv', 'et spørreord'],
      explanation: 'Som modalverb tar devoir infinitiv: «Je dois travailler».',
    },
  ],

  'fransk-1-18-4': [
    {
      question: 'Hva er forskjellen på «savoir» og «connaître»?',
      options: ['«savoir» = vite (fakta/ferdighet), «connaître» = kjenne (personer/steder)', 'de betyr nøyaktig det samme', '«savoir» = kjenne personer, «connaître» = vite fakta', 'begge betyr «å kunne»'],
      explanation: '«savoir» = vite/kunne noe; «connaître» = være kjent med personer eller steder.',
    },
    {
      question: 'Velg riktig: «Je ___ nager» (jeg kan svømme – ferdighet).',
      options: ['sais', 'connais', 'peux', 'veux'],
      explanation: 'Ferdighet → savoir: «Je sais nager».',
    },
    {
      question: 'Velg riktig: «Je ___ Paris» (jeg kjenner Paris).',
      options: ['connais', 'sais', 'sait', 'connaît'],
      explanation: 'Steder → connaître: «Je connais Paris».',
    },
    {
      question: 'Velg riktig: «Tu ___ Marie?» (kjenner du Marie?).',
      options: ['connais', 'sais', 'peux', 'veux'],
      explanation: 'Personer → connaître: «Tu connais Marie?».',
    },
    {
      question: 'Velg riktig: «Je ___ que tu as raison» (jeg vet at du har rett).',
      options: ['sais', 'connais', 'connaît', 'peux'],
      explanation: '«savoir que ...» = vite at ...; faktakunnskap → savoir.',
    },
  ],

  'fransk-1-19-1': [
    {
      question: 'Hva betyr SMS-forkortelsen «slt»?',
      options: ['salut (hei)', 's\'il te plaît', 'à plus tard', 'merci'],
      explanation: '«slt» = salut (hei) i SMS-språk.',
    },
    {
      question: 'Hva betyr «A+» i en SMS?',
      options: ['À plus (tard) – ses senere', 'merci', 'ja', 'jeg er enig'],
      explanation: '«A+» = «À plus (tard)» = «ses senere».',
    },
    {
      question: 'Hva betyr «stp» / «svp» i meldinger?',
      options: ['s\'il te plaît / s\'il vous plaît (vær så snill)', 'au revoir', 'bonjour', 'd\'accord'],
      explanation: '«stp» = s\'il te plaît, «svp» = s\'il vous plaît.',
    },
    {
      question: 'Hva kjennetegner SMS-/chattespråk på fransk?',
      options: ['mange forkortelser og uformell tone', 'svært formell tone', 'ingen forkortelser', 'bare fullstendige setninger'],
      explanation: 'Meldingsspråk er uformelt og fullt av forkortelser (mdr, slt, A+).',
    },
    {
      question: 'Hva betyr «mdr» i en fransk melding?',
      options: ['mort de rire (ler høyt, tilsv. «lol»)', 'merci de rien', 'à demain', 'mauvaise réponse'],
      explanation: '«mdr» = «mort de rire» (død av latter), den franske «lol».',
    },
  ],

  'fransk-1-19-2': [
    {
      question: 'Hva er «un réseau social»?',
      options: ['et sosialt medium', 'en avis', 'et postkontor', 'en søkemotor'],
      explanation: '«un réseau social» = et sosialt medium/nettverk.',
    },
    {
      question: 'Hva betyr «partager une publication»?',
      options: ['å dele et innlegg', 'å like et bilde', 'å slette en konto', 'å sende en e-post'],
      explanation: '«partager» = å dele; «une publication» = et innlegg.',
    },
    {
      question: 'Hva betyr «un abonné»?',
      options: ['en følger', 'en venn i virkeligheten', 'en lærer', 'en utleier'],
      explanation: '«un abonné» = en følger/abonnent.',
    },
    {
      question: 'Hva betyr «aimer» / «un like» på sosiale medier?',
      options: ['å like (et innlegg)', 'å kommentere', 'å blokkere', 'å laste opp'],
      explanation: 'På sosiale medier betyr «aimer» å gi et «like».',
    },
    {
      question: 'Hva er et godt råd for nettvett på fransk: «Il faut ___ ses données personnelles»?',
      options: ['protéger (beskytte)', 'partager (dele)', 'oublier (glemme)', 'vendre (selge)'],
      explanation: 'Man bør beskytte personopplysningene sine: «protéger ses données personnelles».',
    },
  ],

  'fransk-1-19-3': [
    {
      question: 'Hvordan innleder man en formell e-post til en ukjent mottaker?',
      options: ['Madame, Monsieur,', 'Salut!', 'Coucou', 'Cher copain'],
      explanation: 'Formelt: «Madame, Monsieur,».',
    },
    {
      question: 'Hvilken avslutning er passende i en formell e-post?',
      options: ['Cordialement', 'Bisous', 'A+', 'Salut'],
      explanation: '«Cordialement» er en høflig, formell avslutning.',
    },
    {
      question: 'Hva er «l\'objet» i en e-post?',
      options: ['emnefeltet (hva e-posten handler om)', 'avsenderen', 'vedlegget', 'mottakeren'],
      explanation: '«l\'objet» = emnefeltet i en e-post.',
    },
    {
      question: 'Hva betyr «une pièce jointe»?',
      options: ['et vedlegg', 'en signatur', 'en kopi', 'et emne'],
      explanation: '«une pièce jointe» = et vedlegg.',
    },
    {
      question: 'Hvilket pronomen passer i en formell e-post til en bedrift?',
      options: ['vous', 'tu', 'on', 'je seul'],
      explanation: 'Formelt brukes høflighetsformen «vous».',
    },
  ],

  'fransk-1-19-4': [
    {
      question: 'Hva er «un moteur de recherche»?',
      options: ['en søkemotor', 'et tastatur', 'en nettleser', 'et passord'],
      explanation: '«un moteur de recherche» = en søkemotor (f.eks. Google).',
    },
    {
      question: 'Hva betyr «taper des mots-clés»?',
      options: ['å skrive inn søkeord', 'å slette filer', 'å laste ned', 'å logge inn'],
      explanation: '«taper» = å taste/skrive, «des mots-clés» = søkeord/nøkkelord.',
    },
    {
      question: 'Hvorfor bør man vurdere kilder kritisk på nettet?',
      options: ['fordi ikke all informasjon er pålitelig', 'fordi alt på nettet er sant', 'fordi det går raskere', 'man trenger ikke vurdere kilder'],
      explanation: 'Kildekritikk er viktig fordi nettet inneholder både pålitelig og upålitelig informasjon.',
    },
    {
      question: 'Hva er «un site web»?',
      options: ['et nettsted', 'en e-post', 'en fil', 'et passord'],
      explanation: '«un site web» = et nettsted.',
    },
    {
      question: 'Hva betyr det å søke informasjon «en français»?',
      options: ['å søke på fransk', 'å oversette til norsk', 'å søke i en fransk by', 'å bruke fransk tastatur'],
      explanation: '«en français» = på fransk; man øver fransk ved å søke på språket.',
    },
  ],

  'fransk-1-20-1': [
    {
      question: 'Hvilken replikk passer når du møter en venn på gata?',
      options: ['Salut! Ça va?', 'L\'addition, s\'il vous plaît', 'Madame, Monsieur', 'Au revoir'],
      explanation: 'Uformelt hverdagsmøte: «Salut! Ça va?».',
    },
    {
      question: 'Hva svarer du naturlig på «Tu as passé un bon week-end?»',
      options: ['Oui, très bon, merci! Et toi?', 'Il est trois heures', 'Je viens de Norvège', 'C\'est trop cher'],
      explanation: 'Man svarer om helga og spør tilbake: «Oui, très bon, merci! Et toi?».',
    },
    {
      question: 'Hva betyr «On se voit demain?»',
      options: ['Ses vi i morgen?', 'Hva gjorde du i går?', 'Hvor bor du?', 'Hvor mye koster det?'],
      explanation: '«On se voit demain?» = «Ses vi i morgen?»',
    },
    {
      question: 'Hvilken replikk uttrykker enighet i en hverdagsdialog?',
      options: ['D\'accord!', 'Je ne comprends pas', 'Au secours!', 'C\'est faux'],
      explanation: '«D\'accord!» = «Greit / enig!»',
    },
    {
      question: 'Hva betyr «À tout à l\'heure»?',
      options: ['Ses straks/senere i dag', 'God natt', 'Vi ses neste år', 'Ha det for godt'],
      explanation: '«À tout à l\'heure» = «ses straks» (senere samme dag).',
    },
  ],

  'fransk-1-20-2': [
    {
      question: 'Hva roper man på fransk hvis man trenger hjelp i en nødssituasjon?',
      options: ['Au secours!', 'Bon appétit!', 'À bientôt!', 'De rien!'],
      explanation: '«Au secours!» = «Hjelp!»',
    },
    {
      question: 'Hva betyr «J\'ai mal à la tête»?',
      options: ['Jeg har hodepine', 'Jeg er sulten', 'Jeg er trøtt', 'Jeg har gått meg vill'],
      explanation: '«avoir mal à ...» = å ha vondt i ...; «la tête» = hodet.',
    },
    {
      question: 'Hva betyr «Je me suis perdu(e)»?',
      options: ['Jeg har gått meg vill', 'Jeg er forsinket', 'Jeg har mistet vesken', 'Jeg er syk'],
      explanation: '«se perdre» = å gå seg vill; «Je me suis perdu(e)» = jeg har gått meg vill.',
    },
    {
      question: 'Hva betyr «Appelez un médecin!»?',
      options: ['Ring en lege!', 'Hvor er sykehuset?', 'Jeg trenger en taxi', 'Det går bra'],
      explanation: '«Appelez un médecin!» = «Ring en lege!»',
    },
    {
      question: 'Hva betyr «J\'ai perdu mon passeport»?',
      options: ['Jeg har mistet passet mitt', 'Jeg har glemt nøkkelen', 'Jeg har gått meg vill', 'Jeg trenger en lege'],
      explanation: '«perdre» = å miste; «J\'ai perdu mon passeport» = jeg har mistet passet.',
    },
  ],

  'fransk-1-20-3': [
    {
      question: 'Hvordan ser en betingelsessetning med «si + presens» ut?',
      options: ['si + presens, så presens eller futur', 'si + futur, så futur', 'si + fortid, så fortid', 'si + infinitiv, så infinitiv'],
      explanation: 'Reell betingelse: «si» + presens i bisetningen, presens/futur i hovedsetningen.',
    },
    {
      question: 'Velg riktig: «Si tu veux, on ___ au cinéma» (gå – futur proche/presens).',
      options: ['va', 'allait', 'irait', 'aille'],
      explanation: 'Etter «si + presens» (tu veux) brukes presens/nær futur: «on va au cinéma».',
    },
    {
      question: 'Hva betyr «S\'il fait beau demain, je vais à la plage»?',
      options: ['Hvis det er fint vær i morgen, drar jeg til stranda', 'Hvis det regner, blir jeg hjemme', 'Det var fint vær i går', 'Jeg liker stranda'],
      explanation: '«si + presens» (s\'il fait beau) + nær futur (je vais) uttrykker en reell betingelse.',
    },
    {
      question: 'Hvilken verbtid står IKKE i «si»-leddet i en reell betingelse (si + présent)?',
      options: ['futur (etter si)', 'présent', 'nåtid', 'ingen av delene'],
      explanation: 'Etter «si» (om reell betingelse) bruker man IKKE futur, men presens.',
    },
    {
      question: 'Hva blir «si» foran «il»?',
      options: ['s\'il', 'si il', 'se il', 'sil'],
      explanation: 'Foran «il(s)» blir si til «s\'»: «s\'il», «s\'ils».',
    },
  ],

  'fransk-1-20-4': [
    {
      question: 'Velg riktig: «Je ___ étudiant et j\'___ seize ans».',
      options: ['suis / ai', 'ai / suis', 'es / a', 'suis / a'],
      explanation: 'Yrke/tilstand med être (je suis), alder med avoir (j\'ai).',
    },
    {
      question: 'Velg riktig passé composé: «Hier, elle ___ allée au marché».',
      options: ['est', 'a', 'es', 'ont'],
      explanation: '«aller» tar être: «elle est allée».',
    },
    {
      question: 'Hvordan blir «Je parle français» nektende?',
      options: ['Je ne parle pas français', 'Je pas parle français', 'Je ne parle français', 'Je parle ne pas français'],
      explanation: 'Nektelse: ne + verb + pas: «Je ne parle pas français».',
    },
    {
      question: 'Velg riktig artikkel: «J\'ai ___ amie qui habite à Lyon».',
      options: ['une', 'un', 'des', 'la'],
      explanation: '«amie» er hunkjønn entall, ubestemt: «une amie».',
    },
    {
      question: 'Velg riktig: «Si tu ___ le temps, on va au cinéma» (avoir, présent).',
      options: ['as', 'avais', 'aurais', 'aies'],
      explanation: 'Reell betingelse «si + présent»: «Si tu as le temps ...».',
    },
  ],

};

export default quizData_fransk_1;
