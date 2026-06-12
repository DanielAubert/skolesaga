import type { QuizQuestion } from './quiz-data';

const quizData_fransk_2: Record<string, QuizQuestion[]> = {
  'fransk-2-1': [
  {
    question: 'Når brukes imparfait i stedet for passé composé?',
    options: ['For avsluttede handlinger', 'For vaner og beskrivelser i fortiden', 'For plutselige hendelser', 'Aldri'],
    explanation: 'Imparfait brukes for beskrivelser, vaner og bakgrunn i fortiden.',
  },
  {
    question: 'Hvordan dannes imparfait?',
    options: ['avoir + partisipp', 'Stamme fra nous-presens + endelser', 'être + partisipp', 'Infinitiv + endelser'],
    explanation: 'Imparfait: stamme fra nous-presens (uten -ons) + -ais, -ais, -ait, -ions, -iez, -aient.',
  },
  {
    question: 'Hva er imparfait av "être" for "il"?',
    options: ['était', 'a été', 'est', 'soit'],
    explanation: 'Être er uregelmessig i imparfait: j\'étais, tu étais, il était...',
  },
  {
    question: 'Hvilken setning bruker riktig kombinasjon av fortidsformer?',
    options: ['Il pleuvait quand je suis sorti', 'Il a plu quand je sortais', 'Il pleuvait quand je sortais', 'Il a plu quand je suis sorti'],
    explanation: 'Imparfait (bakgrunn: pleuvait) + passé composé (hovedhandling: suis sorti).',
  },
  {
    question: 'Hva er imparfait av "nous faisons"?',
    options: ['nous avons fait', 'nous faisions', 'nous faisions', 'nous fîmes'],
    explanation: 'Faire i imparfait: fais- + -ions = nous faisions.',
  },
],


  'fransk-2-2': [
  {
    question: 'Når brukes subjonctif?',
    options: ['For å uttrykke fakta', 'For ønsker, følelser og tvil', 'For fremtid', 'For fortid'],
    explanation: 'Subjonctif uttrykker subjektivitet: ønsker, følelser, tvil, nødvendighet.',
  },
  {
    question: 'Hva er subjonctif av "être" for "tu"?',
    options: ['es', 'sois', 'soit', 'étais'],
    explanation: 'Être i subjonctif: que je sois, que tu sois, qu\'il soit...',
  },
  {
    question: 'Hvilket uttrykk krever IKKE subjonctif?',
    options: ['Je doute que', 'Je sais que', 'Je veux que', 'Il faut que'],
    explanation: '"Je sais que" uttrykker sikker kunnskap og tar indikativ.',
  },
  {
    question: 'Hvorfor brukes infinitiv i "Je veux venir" men subjonctif i "Je veux que tu viennes"?',
    options: ['Fordi verbet er forskjellig', 'Fordi subjektet er det samme/forskjellig', 'Fordi tidsformen er forskjellig', 'Det er ingen regel'],
    explanation: 'Samme subjekt → infinitiv; forskjellig subjekt → subjonctif.',
  },
  {
    question: 'Hva er subjonctif av "aller" for "elle"?',
    options: ['va', 'aille', 'alle', 'irait'],
    explanation: 'Aller i subjonctif: que j\'aille, que tu ailles, qu\'elle aille...',
  },
],


  'fransk-2-3': [
  {
    question: 'Hvordan dannes conditionnel présent?',
    options: ['avoir + partisipp', 'être + partisipp', 'Futurumstamme + imparfait-endelser', 'Presens + -ais'],
    explanation: 'Conditionnel = futurumstamme + imparfait-endelser (-ais, -ais, -ait...).',
  },
  {
    question: 'Hva er conditionnel av "vouloir" for "je"?',
    options: ['veux', 'voudrai', 'voudrais', 'voulais'],
    explanation: 'Vouloir i conditionnel: je voudrais, tu voudrais, il voudrait...',
  },
  {
    question: 'Hvilken tidsform brukes etter "si" i hypotetiske setninger?',
    options: ['Conditionnel', 'Futurum', 'Imparfait', 'Subjonctif'],
    explanation: 'Si + imparfait, conditionnel. Man bruker ALDRI conditionnel etter si!',
  },
  {
    question: 'Hvabrukes conditionnel til?',
    options: ['Bare fremtid', 'Høflighet, hypoteser, ønsker', 'Bare fortid', 'Bare spørsmål'],
    explanation: 'Conditionnel uttrykker høflighet, hypotetiske situasjoner og ønsker.',
  },
  {
    question: 'Hva er conditionnel av "être" for "nous"?',
    options: ['sommes', 'serons', 'serions', 'étions'],
    explanation: 'Être i conditionnel: ser- + -ions = nous serions.',
  },
],


  'fransk-2-4': [
  {
    question: 'Hva erstatter pronomenet "y"?',
    options: ['Direkte objekt', 'Indirekte objekt', 'Stedsuttrykk med à/en/dans', 'Personer'],
    explanation: '"Y" erstatter stedsuttrykk: "Tu vas à Paris?" → "Tu y vas?"',
  },
  {
    question: 'Hva erstatter pronomenet "en"?',
    options: ['Stedsuttrykk med à', 'Uttrykk med de + mengder', 'Personer', 'Tid'],
    explanation: '"En" erstatter uttrykk med de og mengder: "Tu veux du café?" → "Tu en veux?"',
  },
  {
    question: 'Hva er forskjellen mellom "qui" og "que" som relativpronomen?',
    options: ['Ingen forskjell', 'Qui = subjekt, que = objekt', 'Qui = objekt, que = subjekt', 'Qui = ting, que = personer'],
    explanation: '"Qui" er subjekt, "que" er objekt i relativsetningen.',
  },
  {
    question: 'Hvabrukes "dont" til?',
    options: ['Stedsuttrykk', 'Å erstatte de-uttrykk (som/hvis)', 'Å erstatte direkte objekt', 'Spørsmål'],
    explanation: '"Dont" erstatter "de"-uttrykk: "Le livre dont je parle" (boken jeg snakker om).',
  },
  {
    question: 'Hva er riktig rekkefølge for doble pronomen?',
    options: ['le/la + me/te', 'me/te + le/la + lui', 'lui + le/la + me/te', 'Det er ingen regel'],
    explanation: 'Rekkefølge: me/te/se/nous/vous + le/la/les + lui/leur + y + en.',
  },
],


  'fransk-2-5': [
  {
    question: 'Hvem skrev "Les Misérables"?',
    options: ['Alexandre Dumas', 'Victor Hugo', 'Gustave Flaubert', 'Émile Zola'],
    explanation: 'Victor Hugo skrev "Les Misérables" (1862).',
  },
  {
    question: 'Hvilken epoke tilhører Molière?',
    options: ['Romantismen', 'Klassisismen', 'Modernismen', 'Realismen'],
    explanation: 'Molière (1622-1673) tilhører klassisismen på 1600-tallet.',
  },
  {
    question: 'Hvem vant Nobelprisen i litteratur i 2022?',
    options: ['Patrick Modiano', 'Annie Ernaux', 'Albert Camus', 'Marguerite Duras'],
    explanation: 'Annie Ernaux vant Nobelprisen i litteratur i 2022.',
  },
  {
    question: 'Hva skrev La Fontaine?',
    options: ['Romaner', 'Tragedier', 'Fabler', 'Poesi'],
    explanation: 'Jean de La Fontaine er kjent for sine fabler med moralske lærdømmer.',
  },
  {
    question: 'Hvem er eksistensialismens fåri fransk litteratur?',
    options: ['Albert Camus', 'Jean-Paul Sartre', 'Simone de Beauvoir', 'Marcel Proust'],
    explanation: 'Jean-Paul Sartre regnes som eksistensialismens far.',
  },
],


  'fransk-2-6': [
  {
    question: 'Hva betyr "la société"?',
    options: ['Selskapet', 'Samfunnet', 'Begge deler', 'Sirkelen'],
    explanation: '"La société" kan bety både samfunn og selskap.',
  },
  {
    question: 'Hva er "la culture"?',
    options: ['Jordbruk', 'Kulturen', 'Begge deler', 'Dyrkingen'],
    explanation: '"La culture" kan bety både kultur og dyrking/jordbruk.',
  },
  {
    question: 'Hvordan sier du "tradisjon" på fransk?',
    options: ['la tradition', 'la coutume', 'l\'habitude', 'a og b er riktige'],
    explanation: 'Både "la tradition" og "la coutume" kan brukes.',
  },
  {
    question: 'Hva betyr "l\'égalité"?',
    options: ['Kvaliteten', 'Likheten', 'Legaliteten', 'Evnen'],
    explanation: '"L\'égalité" betyr likhet (fra det franske mottoet: liberté, égalité, fraternité).',
  },
  {
    question: 'Hva er "la diversité"?',
    options: ['Universitetet', 'Mangfoldet', 'Forskjellen', 'Adspredelsen'],
    explanation: '"La diversité" betyr mangfoldet.',
  },
],


  'fransk-2-7': [
  {
    question: 'Hva betyr "l\'histoire"?',
    options: ['Historien', 'Fortellingen', 'Begge deler', 'Historikeren'],
    explanation: '"L\'histoire" kan bety både historie og fortelling.',
  },
  {
    question: 'Hva er "la Révolution française"?',
    options: ['Den franske revolusjonen', 'Omveltningen', 'Rotasjonen', 'Utviklingen'],
    explanation: '"La Révolution française" (1789) er den franske revolusjonen.',
  },
  {
    question: 'Når var den franske revolusjonen?',
    options: ['1689', '1789', '1889', '1989'],
    explanation: 'Den franske revolusjonen begynte i 1789.',
  },
  {
    question: 'Hva betyr "le roi"?',
    options: ['Roen', 'Kongen', 'Loven', 'Rettigheten'],
    explanation: '"Le roi" betyr kongen.',
  },
  {
    question: 'Hva er "la République"?',
    options: ['Republikken', 'Publiseringen', 'Offentligheten', 'Gjentakelsen'],
    explanation: '"La République française" er den franske republikken.',
  },
],


  'fransk-2-8': [
  {
    question: 'Hva betyr "l\'environnement"?',
    options: ['Omgivelsene', 'Miljøet', 'Begge deler', 'Avrundingen'],
    explanation: '"L\'environnement" betyr miljøet.',
  },
  {
    question: 'Hva er "le développement durable"?',
    options: ['Varig utvikling', 'Bærekraftig utvikling', 'Rask utvikling', 'Økonomisk utvikling'],
    explanation: '"Le développement durable" betyr bærekraftig utvikling.',
  },
  {
    question: 'Hvordan sier du "fornybar energi" på fransk?',
    options: ['énergie nouvelle', 'énergie renouvelable', 'énergie propre', 'b og c er riktige'],
    explanation: '"Énergie renouvelable" (fornybar) og "énergie propre" (ren) brukes.',
  },
  {
    question: 'Hva betyr "la pollution"?',
    options: ['Pollineringen', 'Forurensningen', 'Befolkningen', 'Politikken'],
    explanation: '"La pollution" betyr forurensningen.',
  },
  {
    question: 'Hva er "recycler"?',
    options: ['Å sykle igjen', 'Å resirkulære', 'Å sykle rundt', 'Å gjenta'],
    explanation: '"Recycler" (eller "recycler") betyr å resirkulære.',
  },
],


  'fransk-2-9': [
  {
    question: 'Hva betyr "le travail"?',
    options: ['Reisen', 'Arbeidet', 'Trafikken', 'Transporten'],
    explanation: '"Le travail" betyr arbeidet.',
  },
  {
    question: 'Hva er "l\'emploi"?',
    options: ['Arbeidsledigheten', 'Jobben/sysselsettingen', 'Arbeidsgiveren', 'Arbeidstakeren'],
    explanation: '"L\'emploi" betyr jobb eller sysselsetting.',
  },
  {
    question: 'Hvordan sier du "arbeidsledig" på fransk?',
    options: ['employé', 'chômeur', 'travailleur', 'patron'],
    explanation: '"Chômeur/chômeuse" er arbeidsledig, "le chômage" er arbeidsledighet.',
  },
  {
    question: 'Hva betyr "le salaire"?',
    options: ['Salen', 'Lønnen', 'Salget', 'Salaten'],
    explanation: '"Le salaire" betyr lønnen.',
  },
  {
    question: 'Hva er "l\'entreprise"?',
    options: ['Foretagsomheten', 'Bedriften', 'Forsøket', 'Entreprenøren'],
    explanation: '"L\'entreprise" betyr bedriften eller føretaket.',
  },
],


  'fransk-2-10': [
  {
    question: 'Hva betyr "la santé"?',
    options: ['Helligheten', 'Helsen', 'Saltet', 'Sannheten'],
    explanation: '"La santé" betyr helsen.',
  },
  {
    question: 'Hvordan sier du "lege" på fransk?',
    options: ['le médecin', 'le docteur', 'Begge er riktige', 'l\'infirmier'],
    explanation: 'Både "le médecin" og "le docteur" brukes for lege.',
  },
  {
    question: 'Hva er "la maladie"?',
    options: ['Ondskapen', 'Sykdømmen', 'Ubehaget', 'Ulykken'],
    explanation: '"La maladie" betyr sykdømmen.',
  },
  {
    question: 'Hva betyr "J\'ai mal à la tête"?',
    options: ['Jeg har vondt i hodet', 'Hodet mitt er dårlig', 'Jeg er gal', 'Jeg har en dårlig ide'],
    explanation: '"J\'ai mal à la tête" betyr at jeg har hodepine.',
  },
  {
    question: 'Hva er "la pharmacie"?',
    options: ['Farmasien', 'Apoteket', 'Gården', 'Farmen'],
    explanation: '"La pharmacie" er apoteket.',
  },
],


  'fransk-2-1-1': [
  {
    question: 'Hvordan dannes passé composé på fransk?',
    options: ['Hjelpeverb (avoir eller être) i presens + partisipp', 'Infinitiv + endingene -ai, -as, -a', 'Verbstammen + endingene -ais, -ais, -ait', 'Hjelpeverbet aller i presens + infinitiv'],
    explanation: 'Passé composé dannes med avoir eller être i presens pluss partisipp: J\'ai mangé, Je suis allé(e).',
  },
  {
    question: 'Hva er partisippet (le participe passé) av verbet "prendre"?',
    options: ['pris', 'prendu', 'prenait', 'prends'],
    explanation: '"Prendre" har uregelrett partisipp: pris. "J\'ai pris le bus" = Jeg har tatt bussen.',
  },
  {
    question: 'Hvilket av disse verbene bøyes med être i passé composé?',
    options: ['aller', 'manger', 'voir', 'finir'],
    explanation: '"Aller" er et bevegelsesverb (DR. & MRS. VANDERTRAMP) og tar être: Je suis allé(e).',
  },
  {
    question: 'Hvordan fullfører du setningen riktig: "Elle est ___ au cinéma hier soir." (aller)?',
    options: ['allée', 'allé', 'aller', 'allait'],
    explanation: 'Med être som hjelpeverb samsvarer partisippet med subjektet. "Elle" er hunkjønn, så det blir allée.',
  },
  {
    question: 'En elev skriver "J\'ai allé à Paris". Hva er feilen?',
    options: ['Aller skal ha être som hjelpeverb: "Je suis allé(e)"', 'Partisippet skal være "allait"', 'Det skal hete "J\'ai aller"', 'Setningen er helt riktig'],
    explanation: 'Bevegelsesverbet aller tar être, ikke avoir: Je suis allé(e) à Paris.',
  },
],

  'fransk-2-1-2': [
  {
    question: 'Hvordan finner du stammen til et verb i imparfait?',
    options: ['Ta nous-formen i presens og fjern -ons', 'Ta infinitiven og fjern -er', 'Ta je-formen i presens og fjern -e', 'Ta partisippet og fjern -é'],
    explanation: 'Imparfait-stammen lages av nous-formen i presens uten -ons: nous parlons → parl- → je parlais.',
  },
  {
    question: 'Hvilket verb er det ENESTE som er uregelrett i imparfait?',
    options: ['être (j\'étais)', 'avoir (j\'avais)', 'faire (je faisais)', 'aller (j\'allais)'],
    explanation: 'Kun être har uregelrett stamme i imparfait: j\'étais, tu étais, il était osv. Avoir, faire og aller følger nous-regelen.',
  },
  {
    question: 'Hva er je-formen av "faire" i imparfait?',
    options: ['je faisais', 'je ferais', 'je fais', 'je faisait'],
    explanation: 'Nous faisons → stamme fais- + -ais = je faisais. "Je ferais" er kondisjonalis.',
  },
  {
    question: 'Hva brukes imparfait til?',
    options: ['Beskrivelser, vaner og pågående handlinger i fortiden', 'Avsluttede enkelthendelser i fortiden', 'Handlinger i framtiden', 'Ordre og oppfordringer'],
    explanation: 'Imparfait beskriver bakgrunn, vær, følelser, gjentatte vaner og pågående handlinger i fortiden.',
  },
  {
    question: 'Hvordan fullfører du: "Chaque été, nous ___ à la mer." (aller)?',
    options: ['allions', 'sommes allés', 'irons', 'allons'],
    explanation: '"Chaque été" (hver sommer) signaliserer en gjentatt vane i fortiden → imparfait: nous allions.',
  },
],

  'fransk-2-1-3': [
  {
    question: 'Hvilket spørsmål besvarer passé composé i en fortelling?',
    options: ['"Hva skjedde?"', '"Hvordan var det?"', '"Hva kommer til å skje?"', '"Hva pleide å skje?"'],
    explanation: 'Passé composé brukes om avsluttede hovedhandlinger ("hva skjedde?"), mens imparfait beskriver bakgrunnen ("hvordan var det?").',
  },
  {
    question: 'Hvilken fortidsform utløser signalordet "d\'habitude" (vanligvis)?',
    options: ['Imparfait', 'Passé composé', 'Futur simple', 'Plus-que-parfait'],
    explanation: 'Signalord for vane og gjentakelse som d\'habitude, souvent og chaque jour peker mot imparfait.',
  },
  {
    question: 'Hvilken fortidsform utløser signalordene "soudain" og "tout à coup" (plutselig)?',
    options: ['Passé composé', 'Imparfait', 'Présent', 'Conditionnel'],
    explanation: '"Soudain" og "tout à coup" markerer en plutselig, punktuell hendelse → passé composé.',
  },
  {
    question: 'Hvordan fullfører du: "Je ___ quand le téléphone a sonné." (lire)?',
    options: ['lisais', 'ai lu', 'lirai', 'lis'],
    explanation: 'En pågående handling (jeg satt og leste) som blir avbrutt, står i imparfait: je lisais. Avbrytelsen står i passé composé.',
  },
  {
    question: 'I setningen "Il faisait beau quand un orage a éclaté" — hvorfor står "a éclaté" i passé composé?',
    options: ['Det er en plutselig, avsluttet hendelse i forgrunnen', 'Det beskriver været som bakgrunn', 'Det er en gjentatt vane', 'Verbet éclater kan ikke stå i imparfait'],
    explanation: 'Tordenværet som brøt løs er hovedhandlingen (forgrunnen) → passé composé. Det fine været er bakgrunn → imparfait.',
  },
],

  'fransk-2-1-4': [
  {
    question: 'Hvordan dannes plus-que-parfait?',
    options: ['Avoir/être i imparfait + partisipp', 'Avoir/être i presens + partisipp', 'Avoir/être i futur simple + partisipp', 'Infinitiv + imparfait-endinger'],
    explanation: 'Plus-que-parfait = hjelpeverbet i imparfait + partisipp: j\'avais mangé, j\'étais allé(e).',
  },
  {
    question: 'Hva uttrykker plus-que-parfait?',
    options: ['En handling som skjedde FØR en annen fortidshandling', 'En handling som pågår nå', 'En vane i fortiden', 'En handling som vil skje i framtiden'],
    explanation: 'Plus-que-parfait er "fortid i fortiden" og tilsvarer norsk "hadde gjort".',
  },
  {
    question: 'Hvordan fullfører du: "Quand je suis arrivé, le film ___ déjà." (commencer)?',
    options: ['avait commencé', 'a commencé', 'commençait', 'commencera'],
    explanation: 'Filmen begynte FØR jeg kom — derfor plus-que-parfait: le film avait déjà commencé.',
  },
  {
    question: 'Hva betyr "Elle était déjà partie"?',
    options: ['Hun hadde allerede dratt', 'Hun har allerede dratt', 'Hun drar allerede', 'Hun skulle allerede dra'],
    explanation: 'Être i imparfait (était) + partisipp (partie) = plus-que-parfait: hadde dratt. Merk samsvaret -e fordi elle er hunkjønn.',
  },
  {
    question: 'Hvilken setning bruker plus-que-parfait riktig?',
    options: ['Il a dit qu\'il avait perdu ses clés.', 'Il a dit qu\'il a perdait ses clés.', 'Il avait dit qu\'il perd ses clés hier.', 'Il dit qu\'il avait perdre ses clés.'],
    explanation: 'Å miste nøklene skjedde før han sa det — derfor plus-que-parfait: il avait perdu.',
  },
],

  'fransk-2-2-1': [
  {
    question: 'Hvordan dannes futur simple av regelrette verb?',
    options: ['Infinitiv + endingene -ai, -as, -a, -ons, -ez, -ont', 'Nous-stammen + endingene -ais, -ais, -ait', 'Hjelpeverb i presens + partisipp', 'Aller i presens + partisipp'],
    explanation: 'Futur simple = infinitiv (uten -e for -re-verb) + endinger fra avoir: je parlerai, je finirai, je vendrai.',
  },
  {
    question: 'Hva er futur-stammen til "être"?',
    options: ['ser- (je serai)', 'êtr- (j\'êtrai)', 'ét- (j\'étai)', 'soy- (je soyrai)'],
    explanation: 'Être har uregelrett futur-stamme ser-: je serai, tu seras, il sera.',
  },
  {
    question: 'Hva er je-formen av "aller" i futur simple?',
    options: ['j\'irai', 'j\'allerai', 'je vais', 'j\'aille'],
    explanation: 'Aller har uregelrett stamme ir- i futur: j\'irai (jeg skal dra/gå).',
  },
  {
    question: 'Hva er forskjellen på futur proche og futur simple?',
    options: ['Futur proche (aller + infinitiv) brukes om nær framtid og planer, futur simple om fjernere framtid', 'Futur proche brukes bare skriftlig, futur simple bare muntlig', 'Futur simple brukes bare om noe usikkert, futur proche om alt annet', 'Det er ingen forskjell i bruk'],
    explanation: 'Je vais manger (futur proche) = nær framtid/plan. Je mangerai (futur simple) = fjernere framtid eller forutsigelse.',
  },
  {
    question: 'Hvordan fullfører du: "Un jour, je ___ autour du monde." (voyager)?',
    options: ['voyagerai', 'voyage', 'voyageais', 'vais voyage'],
    explanation: '"Un jour" peker mot fjern framtid → futur simple: je voyagerai. Futur proche ville vært "je vais voyager".',
  },
],

  'fransk-2-2-2': [
  {
    question: 'Hvordan dannes futur antérieur?',
    options: ['Avoir/être i futur simple + partisipp', 'Avoir/être i imparfait + partisipp', 'Avoir/être i presens + partisipp', 'Infinitiv + futur-endinger'],
    explanation: 'Futur antérieur = hjelpeverbet i futur simple + partisipp: j\'aurai mangé, je serai allé(e).',
  },
  {
    question: 'Hva uttrykker futur antérieur?',
    options: ['En handling som vil være fullført før en annen framtidig handling', 'En handling som nettopp er fullført', 'En hypotetisk handling i fortiden', 'En pågående handling i framtiden'],
    explanation: 'Futur antérieur tilsvarer norsk "vil ha gjort": Quand j\'aurai fini, je sortirai.',
  },
  {
    question: 'Hvordan oversettes "Når jeg er ferdig..." til fransk i en framtidssetning?',
    options: ['Quand j\'aurai fini...', 'Quand je suis fini...', 'Quand je finissais...', 'Quand j\'ai fini demain...'],
    explanation: 'Etter quand med framtidig betydning bruker fransk futur, ikke presens som norsk: Quand j\'aurai fini.',
  },
  {
    question: 'Hvordan fullfører du: "Dès qu\'il ___ , nous partirons." (manger)?',
    options: ['aura mangé', 'a mangé', 'mange', 'mangeait'],
    explanation: 'Etter dès que (så snart) med framtidig betydning brukes futur antérieur: dès qu\'il aura mangé.',
  },
  {
    question: 'Hvilken regel gjelder etter quand/lorsque/dès que når man snakker om framtiden?',
    options: ['Bruk futur (simple eller antérieur), ikke presens', 'Bruk alltid presens som på norsk', 'Bruk alltid subjonctif', 'Bruk alltid conditionnel'],
    explanation: 'I motsetning til norsk krever fransk futur etter disse tidskonjunksjonene når det handler om framtid.',
  },
],

  'fransk-2-2-3': [
  {
    question: 'Hvordan dannes conditionnel présent?',
    options: ['Futur-stamme + imparfait-endinger (-ais, -ais, -ait...)', 'Infinitiv + futur-endinger (-ai, -as, -a...)', 'Nous-stamme + futur-endinger', 'Avoir i imparfait + partisipp'],
    explanation: 'Kondisjonalis kombinerer futur-stammen med imparfait-endingene: je parlerais, je voudrais, j\'irais.',
  },
  {
    question: 'Hva uttrykker "Je voudrais un café"?',
    options: ['Et høflig ønske: "Jeg vil gjerne ha en kaffe"', 'En ordre: "Gi meg en kaffe!"', 'Fortid: "Jeg ville ha en kaffe"', 'Framtid: "Jeg skal ha en kaffe"'],
    explanation: 'Kondisjonalis brukes for høflighet. "Je voudrais" er høfligere enn "je veux".',
  },
  {
    question: 'Hvilken kombinasjon gjelder for hypotetiske si-setninger (type 2)?',
    options: ['Si + imparfait → conditionnel présent', 'Si + conditionnel → imparfait', 'Si + présent → conditionnel présent', 'Si + futur → conditionnel présent'],
    explanation: 'Type 2: Si j\'avais le temps (imparfait), je voyagerais (kondisjonalis).',
  },
  {
    question: 'Hvordan fullfører du: "Si j\'avais de l\'argent, j\'___ une voiture." (acheter)?',
    options: ['achèterais', 'achèterai', 'achetais', 'ai acheté'],
    explanation: 'Si + imparfait krever kondisjonalis i hovedsetningen: j\'achèterais (jeg ville kjøpt).',
  },
  {
    question: 'Hvorfor er "Si j\'aurais le temps, je viendrais" feil?',
    options: ['Man bruker aldri kondisjonalis i si-setningen — det skal være "Si j\'avais"', 'Verbet venir kan ikke stå i kondisjonalis', 'Det skal være futur i begge ledd', 'Setningen er faktisk riktig'],
    explanation: 'Betingelsen (si-delen) står i imparfait, aldri kondisjonalis: Si j\'avais le temps, je viendrais.',
  },
],

  'fransk-2-2-4': [
  {
    question: 'Hvordan dannes conditionnel passé?',
    options: ['Avoir/être i conditionnel présent + partisipp', 'Avoir/être i imparfait + partisipp', 'Avoir/être i futur simple + partisipp', 'Si + plus-que-parfait + infinitiv'],
    explanation: 'Conditionnel passé = hjelpeverbet i kondisjonalis presens + partisipp: j\'aurais mangé, je serais allé(e).',
  },
  {
    question: 'Hva betyr "J\'aurais dû étudier"?',
    options: ['Jeg burde ha studert', 'Jeg må studere', 'Jeg hadde studert', 'Jeg skal studere'],
    explanation: 'Conditionnel passé av devoir uttrykker anger: j\'aurais dû = jeg burde ha (gjort).',
  },
  {
    question: 'Hvilken kombinasjon gjelder for ureelle si-setninger om fortiden (type 3)?',
    options: ['Si + plus-que-parfait → conditionnel passé', 'Si + imparfait → conditionnel passé', 'Si + passé composé → conditionnel présent', 'Si + conditionnel passé → plus-que-parfait'],
    explanation: 'Type 3: Si j\'avais su (plus-que-parfait), je serais venu(e) (conditionnel passé).',
  },
  {
    question: 'Hvordan fullfører du: "Si tu avais étudié, tu ___ réussi." (avoir)?',
    options: ['aurais', 'avais', 'auras', 'as'],
    explanation: 'Si + plus-que-parfait (avais étudié) krever conditionnel passé: tu aurais réussi (du ville ha lykkes).',
  },
  {
    question: 'Hvilken setning er en korrekt type 1-si-setning (reell betingelse)?',
    options: ['Si j\'ai le temps, je viendrai.', 'Si j\'aurai le temps, je viendrai.', 'Si j\'avais le temps, je viendrai.', 'Si j\'ai le temps, je viendrais.'],
    explanation: 'Type 1 (reell): Si + présent → futur simple. Si j\'ai le temps (presens), je viendrai (futur).',
  },
],

  'fransk-2-3-1': [
  {
    question: 'Hvor plasseres objektspronomen som "le" og "lui" i en vanlig fransk setning?',
    options: ['Foran verbet (eller hjelpeverbet)', 'Etter verbet', 'Først i setningen', 'Sist i setningen'],
    explanation: 'Objektspronomen står foran verbet: Je le vois. I passé composé foran hjelpeverbet: Je l\'ai vu.',
  },
  {
    question: 'Hva skiller COI fra COD?',
    options: ['COI brukes med verb som tar à + person, COD med verb uten preposisjon', 'COI brukes bare om ting, COD bare om personer', 'COI står etter verbet, COD foran', 'COI brukes bare i fortid'],
    explanation: 'COI erstatter à + person (parler à, téléphoner à): Je lui parle. COD erstatter direkte objekt: Je le vois.',
  },
  {
    question: 'Hvordan erstatter du objektet i "Je téléphone à Marie" med et pronomen?',
    options: ['Je lui téléphone.', 'Je la téléphone.', 'Je le téléphone.', 'Je téléphone lui.'],
    explanation: 'Téléphoner tar à + person → indirekte objektspronomen lui: Je lui téléphone.',
  },
  {
    question: 'Hvordan erstatter du objektet i "Je vois Marie" med et pronomen?',
    options: ['Je la vois.', 'Je lui vois.', 'Je vois la.', 'Je le vois.'],
    explanation: 'Voir tar direkte objekt → COD. Marie er hunkjønn: Je la vois (jeg ser henne).',
  },
  {
    question: 'Hvor står objektspronomenet i nektelse, f.eks. "Jeg ser ham ikke"?',
    options: ['Je ne le vois pas.', 'Je ne vois pas le.', 'Le je ne vois pas.', 'Je ne vois le pas.'],
    explanation: 'Pronomenet står foran verbet, innenfor nektelsen: Je ne le vois pas.',
  },
],

  'fransk-2-3-2': [
  {
    question: 'Hva erstatter pronomenet "y"?',
    options: ['à + sted eller ting', 'de + ting eller mengde', 'En person som direkte objekt', 'Et eieforhold'],
    explanation: 'Y erstatter à + sted/ting: Je vais à l\'école → J\'y vais. Je pense à l\'examen → J\'y pense.',
  },
  {
    question: 'Hva erstatter pronomenet "en"?',
    options: ['de + ting eller en mengde', 'à + sted', 'Subjektet i setningen', 'Et tidsuttrykk'],
    explanation: 'En erstatter de + ting og mengder: Je veux du café → J\'en veux. J\'ai deux frères → J\'en ai deux.',
  },
  {
    question: 'Hvordan svarer du kort på "Tu as des frères?" med pronomen: "Jeg har to (av dem)"?',
    options: ['J\'en ai deux.', 'J\'y ai deux.', 'Je les ai deux.', 'J\'ai deux en.'],
    explanation: 'Mengder erstattes med en: J\'en ai deux. Tallet beholdes etter verbet.',
  },
  {
    question: 'Hvordan sier du "Jeg drar dit" når du snakker om skolen (à l\'école)?',
    options: ['J\'y vais.', 'J\'en vais.', 'Je la vais.', 'Je vais y.'],
    explanation: 'À + sted erstattes med y foran verbet: J\'y vais.',
  },
  {
    question: 'En elev sier "Je pense de mon examen → J\'en pense". Hva er feilen?',
    options: ['Penser tar à, så det riktige er "J\'y pense"', 'Pronomenet skal stå etter verbet', 'Det skal være "Je le pense"', 'Ingenting, setningen er riktig'],
    explanation: 'Penser à quelque chose → y: Je pense à mon examen → J\'y pense.',
  },
],

  'fransk-2-3-3': [
  {
    question: 'Når bruker du relativpronomenet "qui"?',
    options: ['Når det erstatter subjektet i leddsetningen (qui + verb)', 'Når det erstatter det direkte objektet', 'Når det erstatter et stedsuttrykk', 'Bare når det handler om personer'],
    explanation: 'Qui er subjekt og følges direkte av verb: La fille qui parle est ma soeur.',
  },
  {
    question: 'Hvilket relativpronomen passer: "Le film ___ j\'ai vu était bien."?',
    options: ['que', 'qui', 'dont', 'où'],
    explanation: 'Filmen er objekt i leddsetningen (jeg så DEN), og que følges av subjekt + verb: que j\'ai vu.',
  },
  {
    question: 'Hvilket relativpronomen passer: "La ville ___ j\'habite est grande."?',
    options: ['où', 'que', 'qui', 'dont'],
    explanation: 'Où brukes om sted (og tid): La ville où j\'habite = byen hvor jeg bor.',
  },
  {
    question: 'Hvorfor brukes "dont" i "Le film dont je parle"?',
    options: ['Fordi parler tar preposisjonen de — dont erstatter de + ting', 'Fordi filmen er subjekt i leddsetningen', 'Fordi det handler om et sted', 'Fordi je er første person'],
    explanation: 'Dont erstatter de + ledd: parler de quelque chose → le film dont je parle (filmen jeg snakker om).',
  },
  {
    question: 'Hvilken setning bruker relativpronomen riktig?',
    options: ['L\'année où je suis né était froide.', 'L\'année que je suis né était froide.', 'L\'année qui je suis né était froide.', 'L\'année dont je suis né était froide.'],
    explanation: 'Où brukes også om tid: l\'année où je suis né = året da jeg ble født.',
  },
],

  'fransk-2-3-4': [
  {
    question: 'Hva er riktig rekkefølge når flere objektspronomen står foran verbet?',
    options: ['me/te/se/nous/vous → le/la/les → lui/leur → y → en', 'le/la/les → me/te/se → y → lui/leur → en', 'lui/leur → le/la/les → me/te → en → y', 'Rekkefølgen er valgfri'],
    explanation: 'Fast rekkefølge: me/te/se/nous/vous, så le/la/les, så lui/leur, så y, så en — og til slutt verbet.',
  },
  {
    question: 'Hvordan sier du "Han gir meg den" med to pronomen?',
    options: ['Il me le donne.', 'Il le me donne.', 'Il me donne le.', 'Il lui le donne.'],
    explanation: 'Me kommer før le i rekkefølgen: Il me le donne.',
  },
  {
    question: 'Hvor står pronomenene i bekreftende imperativ, som i "Gi den til meg!"?',
    options: ['Etter verbet med bindestrek: Donne-le-moi!', 'Foran verbet: Le me donne!', 'Foran verbet: Me le donne!', 'Etter verbet uten bindestrek: Donne le moi'],
    explanation: 'I bekreftende imperativ står pronomenene etter verbet med bindestrek, og me blir moi: Donne-le-moi!',
  },
  {
    question: 'Hvordan sier du "Ikke gi den til meg!"?',
    options: ['Ne me le donne pas!', 'Ne donne-le-moi pas!', 'Donne-moi-le ne pas!', 'Ne le me donne pas!'],
    explanation: 'I nektende imperativ står pronomenene foran verbet i vanlig rekkefølge: Ne me le donne pas!',
  },
  {
    question: 'Hva skjer med "te" i bekreftende imperativ, som i "Stå opp!"?',
    options: ['Det blir "toi": Lève-toi!', 'Det beholdes: Lève-te!', 'Det blir "tu": Lève-tu!', 'Det sløyfes: Lève!'],
    explanation: 'Me og te blir moi og toi etter verbet i bekreftende imperativ: Lève-toi!, Donne-moi le livre!',
  },
],

  'fransk-2-4-1': [
  {
    question: 'Hva står TGV for?',
    options: ['Train à Grande Vitesse — høyhastighetstog', 'Transport Général de Voyage — generell reisetransport', 'Train de Gare et Ville — by- og stasjonstog', 'Tour de Grande Vacances — ferierute'],
    explanation: 'TGV = Train à Grande Vitesse, det franske høyhastighetstoget.',
  },
  {
    question: 'Hva betyr "un billet aller-retour"?',
    options: ['En tur-retur-billett', 'En enveisbillett', 'Et månedskort', 'En billett med plassreservasjon'],
    explanation: 'Aller-retour = tur-retur. En enveisbillett heter "un billet aller simple".',
  },
  {
    question: 'Hvilken region ligger Paris i?',
    options: ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Normandie', 'Bretagne'],
    explanation: 'Paris og Versailles ligger i regionen Île-de-France.',
  },
  {
    question: 'Hva betyr frasen "Excusez-moi, où se trouve la gare?"',
    options: ['Unnskyld, hvor er togstasjonen?', 'Unnskyld, når går toget?', 'Unnskyld, hvor mye koster billetten?', 'Unnskyld, er stasjonen stengt?'],
    explanation: '"Où se trouve...?" betyr "hvor er/befinner ... seg", og la gare er togstasjonen.',
  },
  {
    question: 'Hva svarer du hvis noen sier "Allez tout droit, puis tournez à gauche"?',
    options: ['Du skal gå rett fram og så svinge til venstre', 'Du skal gå rett fram og så svinge til høyre', 'Du skal snu og gå tilbake', 'Du skal ta toget til venstre'],
    explanation: 'Tout droit = rett fram, à gauche = til venstre (à droite = til høyre).',
  },
],

  'fransk-2-4-2': [
  {
    question: 'Hva er "la bise" i fransk kultur?',
    options: ['Kinnkyss som hilsen — antallet varierer etter region', 'En tradisjonell fransk dessert', 'En formell håndhilsen', 'En høytid i februar'],
    explanation: 'La bise er kinnkyss-hilsenen, vanligvis 2-4 kyss avhengig av region.',
  },
  {
    question: 'Når bør du bruke "vous" i stedet for "tu"?',
    options: ['Med fremmede, eldre og overordnede', 'Bare når du snakker til flere personer', 'Med venner og familie', 'Aldri i muntlig fransk'],
    explanation: 'Vous er den formelle tiltaleformen og brukes med fremmede, eldre og f.eks. sjefen. Tu brukes blant venner.',
  },
  {
    question: 'Hva forventes når du går inn i en fransk butikk?',
    options: ['At du sier "Bonjour" når du kommer og "Au revoir" når du går', 'At du tier til du blir tiltalt', 'At du håndhilser på alle ansatte', 'At du tar av deg skoene'],
    explanation: 'Å hilse med "Bonjour" og "Au revoir" i butikker er en viktig sosial kode i Frankrike.',
  },
  {
    question: 'Hva er "le goûter"?',
    options: ['Et mellommåltid om ettermiddagen, særlig for barn', 'Den franske frokosten', 'En aperitiff før middag', 'Søndagslunsjen'],
    explanation: 'Le goûter er mellommåltidet rundt kl. 16-17, typisk for barn etter skolen.',
  },
  {
    question: 'Hva betyr "Je vous en prie"?',
    options: ['Vær så god (formelt svar på takk)', 'Vær så snill', 'Jeg ber for dere', 'Unnskyld meg'],
    explanation: '"Je vous en prie" er det formelle svaret på "merci" — tilsvarer "de rien" i uformell stil.',
  },
],

  'fransk-2-4-3': [
  {
    question: 'Hva er riktig rekkefølge i et tradisjonelt fransk måltid?',
    options: ['Entrée → plat principal → fromage → dessert', 'Plat principal → entrée → dessert → fromage', 'Fromage → entrée → plat principal → dessert', 'Dessert → fromage → entrée → plat principal'],
    explanation: 'Et klassisk fransk måltid: forrett (entrée), hovedrett (plat principal), ost (fromage) og så dessert.',
  },
  {
    question: 'Hva betyr "l\'entrée" på en fransk meny?',
    options: ['Forretten', 'Hovedretten', 'Inngangsbilletten', 'Desserten'],
    explanation: 'L\'entrée er forretten — ikke hovedretten, slik "entrée" brukes på engelsk i USA.',
  },
  {
    question: 'Hvilken rett kommer fra Provence?',
    options: ['La ratatouille', 'La choucroute', 'Le boeuf bourguignon', 'Les galettes'],
    explanation: 'Ratatouille er grønnsaksretten fra Provence. Choucroute er fra Alsace, boeuf bourguignon fra Bourgogne og galettes fra Bretagne.',
  },
  {
    question: 'Hvilken vinregion er kjent for musserende vin?',
    options: ['Champagne', 'Bordeaux', 'Loire', 'Alsace'],
    explanation: 'Champagne-regionen gir navn til den musserende vinen champagne. Bordeaux er mest kjent for rødvin.',
  },
  {
    question: 'Hva sier du for å be om regningen på restaurant?',
    options: ['L\'addition, s\'il vous plaît.', 'La carte, s\'il vous plaît.', 'Le menu, s\'il vous plaît.', 'La monnaie, s\'il vous plaît.'],
    explanation: 'L\'addition = regningen. La carte er menyen.',
  },
],

  'fransk-2-4-4': [
  {
    question: 'Hvorfor kalles Frankrike "l\'Hexagone"?',
    options: ['Fordi landet har en omtrent sekskantet form', 'Fordi det har seks store byer', 'Fordi det grenser til seks hav', 'Fordi det har seks offisielle språk'],
    explanation: 'Fastlands-Frankrike har en sekskantet form, derav kallenavnet l\'Hexagone.',
  },
  {
    question: 'Hva er forskjellen på "un fleuve" og "une rivière"?',
    options: ['Et fleuve er en stor elv som renner ut i havet, en rivière er mindre', 'Et fleuve er en innsjø, en rivière er en elv', 'De betyr nøyaktig det samme', 'Un fleuve er en kanal bygget av mennesker'],
    explanation: 'Fleuve = stor elv som munner ut i havet (som la Seine, la Loire); rivière = mindre elv.',
  },
  {
    question: 'Hvilken region har keltisk arv og sitt eget språk, breton?',
    options: ['Bretagne', 'Alsace', 'Provence', 'Corse'],
    explanation: 'Bretagne har keltisk kulturarv og det regionale språket breton.',
  },
  {
    question: 'Hvilket av disse områdene er et fransk oversjøisk departement (DOM)?',
    options: ['La Martinique', 'La Corse', 'La Bretagne', 'L\'Alsace'],
    explanation: 'Martinique i Karibia er et DOM (département d\'outre-mer), i likhet med Guadeloupe, Guyane, La Réunion og Mayotte.',
  },
  {
    question: 'Hva betyr "au bord de la mer"?',
    options: ['Ved kysten/sjøen', 'På landsbygda', 'Midt i landet', 'Langt fra havet'],
    explanation: '"Au bord de la mer" betyr ved havet/kysten. På landsbygda heter "à la campagne".',
  },
],

  'fransk-2-5-1': [
  {
    question: 'Hvordan sier du "Jeg har vondt i hodet" på fransk?',
    options: ['J\'ai mal à la tête.', 'Je suis mal à la tête.', 'J\'ai mal la tête.', 'Ma tête est mal.'],
    explanation: 'Smerte uttrykkes med avoir mal à + bestemt artikkel + kroppsdel: J\'ai mal à la tête.',
  },
  {
    question: 'Hva blir "avoir mal à + le ventre" i en hel setning?',
    options: ['J\'ai mal au ventre.', 'J\'ai mal à le ventre.', 'J\'ai mal du ventre.', 'J\'ai mal en ventre.'],
    explanation: 'À + le trekkes sammen til au: J\'ai mal au ventre (jeg har vondt i magen).',
  },
  {
    question: 'Hva betyr "les yeux"?',
    options: ['Øynene', 'Ørene', 'Hendene', 'Knærne'],
    explanation: 'Les yeux = øynene (entall: l\'oeil). Ørene heter les oreilles.',
  },
  {
    question: 'Hvilket ord betyr "kneet"?',
    options: ['le genou', 'le coude', 'la cheville', 'le poignet'],
    explanation: 'Le genou = kneet. Le coude er albuen.',
  },
  {
    question: 'Hvordan beskriver du at noen har blå øyne?',
    options: ['Il a les yeux bleus.', 'Il est les yeux bleus.', 'Il a des yeux de bleu.', 'Ses yeux ont bleus.'],
    explanation: 'Man bruker avoir + bestemt artikkel: Il a les yeux bleus, Elle a les cheveux blonds.',
  },
],

  'fransk-2-5-2': [
  {
    question: 'Hva betyr "J\'ai de la fièvre"?',
    options: ['Jeg har feber', 'Jeg er sint', 'Jeg fryser', 'Jeg har hoste'],
    explanation: '"La fièvre" er feber. Hoste heter "la toux" og "je tousse" = jeg hoster.',
  },
  {
    question: 'Hva er "un rhume"?',
    options: ['En forkjølelse', 'Influensa', 'En allergi', 'Revmatisme'],
    explanation: 'Un rhume = forkjølelse. Influensa heter la grippe.',
  },
  {
    question: 'Hva spør legen om med "Où avez-vous mal?"',
    options: ['Hvor du har vondt', 'Hvor lenge du har vært syk', 'Om du tar medisiner', 'Hvor du bor'],
    explanation: '"Où avez-vous mal?" = Hvor har De vondt? "Depuis quand?" spør om hvor lenge.',
  },
  {
    question: 'Hva betyr "Je vous prescris des antibiotiques"?',
    options: ['Jeg skriver ut antibiotika til Dem', 'Jeg forbyr Dem antibiotika', 'Jeg anbefaler ikke antibiotika', 'Jeg undersøker Dem for infeksjon'],
    explanation: 'Prescrire = å skrive ut (resept). Legen skriver ut antibiotika.',
  },
  {
    question: 'Hva trenger du for å hente reseptbelagt medisin på apoteket?',
    options: ['une ordonnance', 'un pansement', 'une addition', 'un billet'],
    explanation: 'Une ordonnance = en resept. Un pansement er et plaster.',
  },
],

  'fransk-2-5-3': [
  {
    question: 'Hva betyr "manger équilibré"?',
    options: ['Å spise balansert', 'Å spise raskt', 'Å spise sent', 'Å hoppe over måltider'],
    explanation: 'Manger équilibré = å spise balansert/sunt.',
  },
  {
    question: 'Hvordan gir du et generelt helseråd med "il faut"?',
    options: ['Il faut + infinitiv: "Il faut faire du sport."', 'Il faut + partisipp: "Il faut fait du sport."', 'Il faut que + infinitiv: "Il faut que faire du sport."', 'Il faut + presens: "Il faut tu fais du sport."'],
    explanation: 'Il faut følges av infinitiv når rådet er generelt: Il faut faire du sport (man må trene).',
  },
  {
    question: 'Hva betyr "Il ne faut pas fumer"?',
    options: ['Man må ikke røyke', 'Man trenger ikke røyke', 'Man kan røyke litt', 'Man må røyke mindre'],
    explanation: 'Il ne faut pas + infinitiv = man må ikke / det er forbudt-aktig råd: ikke røyk.',
  },
  {
    question: 'Hva er "la santé mentale"?',
    options: ['Psykisk helse', 'Tannhelse', 'Mental trening', 'Hukommelsen'],
    explanation: 'La santé mentale = psykisk helse. Velvære heter le bien-être.',
  },
  {
    question: 'Hva betyr "Il vaut mieux se coucher tôt"?',
    options: ['Det er bedre å legge seg tidlig', 'Man må stå opp tidlig', 'Det er verdt å sove lenge', 'Det er best å trene om morgenen'],
    explanation: 'Il vaut mieux + infinitiv = det er bedre å. Se coucher tôt = legge seg tidlig.',
  },
],

  'fransk-2-5-4': [
  {
    question: 'Når bruker man "jouer à" i stedet for "faire de" om sport?',
    options: ['Ved ballsporter og spill: jouer au football', 'Ved all individuell sport', 'Ved vannsport', 'De kan alltid brukes om hverandre'],
    explanation: 'Jouer à brukes om ballsporter og spill (jouer au tennis), faire de om aktiviteter generelt (faire de la natation).',
  },
  {
    question: 'Hva er riktig: "Je fais ___ natation."?',
    options: ['de la', 'du', 'de l\'', 'des'],
    explanation: 'La natation er hunkjønn: faire de la natation (å svømme).',
  },
  {
    question: 'Hvilket sykkelritt er Frankrikes mest berømte?',
    options: ['Le Tour de France', 'Roland-Garros', 'Le Grand Prix de Paris', 'La Coupe de France'],
    explanation: 'Tour de France er det legendariske sykkelrittet. Roland-Garros er tennisturneringen.',
  },
  {
    question: 'Hva betyr "Je m\'entraîne trois fois par semaine"?',
    options: ['Jeg trener tre ganger i uka', 'Jeg har trent i tre uker', 'Jeg trener hver tredje uke', 'Jeg har tre treningskamper'],
    explanation: 'S\'entraîner = å trene; trois fois par semaine = tre ganger i uka.',
  },
  {
    question: 'Hva kalles det franske fotballandslaget?',
    options: ['Les Bleus', 'Les Rouges', 'Les Coqs', 'Les Tricolores Unis'],
    explanation: 'Det franske landslaget kalles Les Bleus (de blå).',
  },
],

  'fransk-2-6-1': [
  {
    question: 'Hvordan dannes regelrett subjonctif?',
    options: ['Ta ils-formen i presens, fjern -ent og legg til -e, -es, -e, -ions, -iez, -ent', 'Ta infinitiven og legg til -ais, -ais, -ait', 'Ta nous-formen og legg til futur-endinger', 'Bruk hjelpeverb + partisipp'],
    explanation: 'Subjonctif: ils parlent → parl- → que je parle, que tu parles, que nous parlions osv.',
  },
  {
    question: 'Hva uttrykker subjonctif?',
    options: ['Ønske, følelse, tvil og nødvendighet', 'Bare avsluttede handlinger i fortiden', 'Bare framtidige handlinger', 'Konstaterte fakta'],
    explanation: 'Subjonctif er en modus for det subjektive: ønske, følelse, tvil, nødvendighet — nesten alltid etter que.',
  },
  {
    question: 'Hva er subjonctif-formen av "être" i "Il faut que je ___ là"?',
    options: ['sois', 'suis', 'serai', 'étais'],
    explanation: 'Être er uregelrett i subjonctif: que je sois, que tu sois, qu\'il soit.',
  },
  {
    question: 'Hva er subjonctif av "aller" i "Il faut qu\'il ___ à l\'école"?',
    options: ['aille', 'va', 'ira', 'allait'],
    explanation: 'Aller har uregelrett subjonctif: que j\'aille, qu\'il aille (men que nous allions).',
  },
  {
    question: 'Hva er subjonctif av "pouvoir" i "Je doute qu\'elle ___ venir"?',
    options: ['puisse', 'peut', 'pourra', 'pouvait'],
    explanation: 'Pouvoir har uregelrett subjonctif-stamme puiss-: qu\'elle puisse.',
  },
],

  'fransk-2-6-2': [
  {
    question: 'Hvilken regel gjelder for subjonctif etter viljesuttrykk som "je veux que"?',
    options: ['Det må være to forskjellige subjekter i hoved- og bisetningen', 'Subjektet må være det samme i begge setninger', 'Bisetningen må stå i fortid', 'Hovedsetningen må være et spørsmål'],
    explanation: 'Je veux que tu viennes (to subjekter) — men med samme subjekt brukes infinitiv: Je veux venir.',
  },
  {
    question: 'Hvordan fullfører du: "Il faut que tu ___ tes devoirs." (faire)?',
    options: ['fasses', 'fais', 'feras', 'faisais'],
    explanation: 'Il faut que krever subjonctif. Faire har uregelrett stamme fass-: que tu fasses.',
  },
  {
    question: 'Hvilket av disse uttrykkene utløser subjonctif?',
    options: ['Je suis content que...', 'Je sais que...', 'Je pense que...', 'Il est certain que...'],
    explanation: 'Følelsesuttrykk som "je suis content que" krever subjonctif. Sikkerhetsuttrykk (je sais que, il est certain que) tar indikativ.',
  },
  {
    question: 'Hvordan fullfører du: "Je suis triste que tu ne ___ pas venir." (pouvoir)?',
    options: ['puisses', 'peux', 'pourras', 'pouvais'],
    explanation: 'Følelse (je suis triste que) krever subjonctif: que tu ne puisses pas.',
  },
  {
    question: 'Hva er riktig når subjektet er det samme: "Jeg vil dra"?',
    options: ['Je veux partir.', 'Je veux que je parte.', 'Je veux que partir.', 'Je veux je pars.'],
    explanation: 'Med samme subjekt brukes infinitiv, ikke que + subjonctif: Je veux partir.',
  },
],

  'fransk-2-6-3': [
  {
    question: 'Hvilken konjunksjon krever subjonctif?',
    options: ['bien que (selv om)', 'parce que (fordi)', 'pendant que (mens)', 'puisque (ettersom)'],
    explanation: 'Bien que tar subjonctif: Bien qu\'il pleuve, je sors. Parce que, pendant que og puisque tar indikativ.',
  },
  {
    question: 'Hvordan fullfører du: "Je parle fort pour qu\'il m\'___ ." (entendre)?',
    options: ['entende', 'entend', 'entendra', 'entendait'],
    explanation: 'Pour que (for at) krever subjonctif: pour qu\'il m\'entende.',
  },
  {
    question: 'Hvorfor står verbet i indikativ i "Je suis content parce qu\'il fait beau"?',
    options: ['Parce que uttrykker årsak og tar alltid indikativ', 'Faire kan ikke stå i subjonctif', 'Setningen er egentlig feil', 'Fordi hovedsetningen uttrykker følelse'],
    explanation: 'Selv om hovedsetningen uttrykker følelse, tar konjunksjonen parce que alltid indikativ.',
  },
  {
    question: 'Hvilket uttrykk tar subjonctif: "je pense que" eller "je ne pense pas que"?',
    options: ['Je ne pense pas que — nektelsen uttrykker tvil', 'Je pense que — fordi det er en mening', 'Begge tar subjonctif', 'Ingen av dem tar subjonctif'],
    explanation: 'Bekreftende "je pense que" tar indikativ, men nektende "je ne pense pas que" uttrykker tvil og tar subjonctif.',
  },
  {
    question: 'Hvordan fullfører du: "Attends jusqu\'à ce qu\'elle ___ ." (arriver)?',
    options: ['arrive (subjonctif)', 'arrivera (futur)', 'est arrivée (passé composé)', 'arrivait (imparfait)'],
    explanation: 'Jusqu\'à ce que (til) krever subjonctif: jusqu\'à ce qu\'elle arrive.',
  },
],

  'fransk-2-6-4': [
  {
    question: 'Hva betyr "Il faut que je finisse mon projet d\'abord"?',
    options: ['Jeg må fullføre prosjektet mitt først', 'Jeg har nettopp fullført prosjektet mitt', 'Jeg vil gjerne starte prosjektet mitt', 'Prosjektet mitt ble avsluttet først'],
    explanation: 'Il faut que + subjonctif (finisse) = jeg må fullføre; d\'abord = først.',
  },
  {
    question: 'Hvordan fullfører du: "Marie veut que tout le monde ___ là." (être)?',
    options: ['soit', 'est', 'sera', 'serait'],
    explanation: 'Vouloir que krever subjonctif: que tout le monde soit là (at alle skal være der).',
  },
  {
    question: 'Hvilket uttrykk betyr "Det er best at..."?',
    options: ['Il vaut mieux que...', 'Il est temps que...', 'Il se peut que...', 'Il est dommage que...'],
    explanation: 'Il vaut mieux que = det er best at (+ subjonctif). Il est temps que = det er på tide at.',
  },
  {
    question: 'Hva betyr "C\'est dommage que tu ne puisses pas venir"?',
    options: ['Det er synd at du ikke kan komme', 'Det er din skyld at du ikke kommer', 'Det er dumt at du ikke vil komme', 'Det er mulig at du ikke kommer'],
    explanation: 'C\'est dommage que = det er synd at, og uttrykket krever subjonctif (puisses).',
  },
  {
    question: 'Hvilken setning bruker subjonctif riktig?',
    options: ['Le professeur veut que nous écrivions un essai.', 'Le professeur veut que nous écrivons un essai.', 'Le professeur veut que nous écrirons un essai.', 'Le professeur veut nous écrivions un essai.'],
    explanation: 'Vouloir que + subjonctif: que nous écrivions. Indikativ (écrivons) er feil her, og que kan ikke sløyfes.',
  },
],

  'fransk-2-7-1': [
  {
    question: 'Hvem skrev "Le Petit Prince" (1943)?',
    options: ['Antoine de Saint-Exupéry', 'Victor Hugo', 'Albert Camus', 'Alexandre Dumas'],
    explanation: 'Le Petit Prince (Den lille prinsen) ble skrevet av Antoine de Saint-Exupéry i 1943.',
  },
  {
    question: 'Hvilket verk skrev Victor Hugo?',
    options: ['Les Misérables', 'L\'Étranger', 'Madame Bovary', 'Le Comte de Monte-Cristo'],
    explanation: 'Victor Hugo skrev Les Misérables (1862). L\'Étranger er av Camus, Madame Bovary av Flaubert og Monte-Cristo av Dumas.',
  },
  {
    question: 'Hva betyr sitatet "On ne voit bien qu\'avec le coeur" fra Le Petit Prince?',
    options: ['Man ser bare godt med hjertet', 'Man ser ikke med øynene', 'Hjertet ser aldri godt', 'Man må se for å elske'],
    explanation: 'Det berømte sitatet betyr "Man ser bare godt med hjertet. Det vesentlige er usynlig for øynene."',
  },
  {
    question: 'Hva betyr "une nouvelle" i litterær sammenheng?',
    options: ['En novelle', 'En nyhet i avisen', 'En roman', 'Et dikt'],
    explanation: 'I litteraturen er une nouvelle en novelle (kort fortelling). Et dikt heter un poème.',
  },
  {
    question: 'Hva er "l\'intrigue" i en roman?',
    options: ['Handlingen', 'Hovedpersonen', 'Tittelen', 'Forordet'],
    explanation: 'L\'intrigue betyr handlingen/plottet. En karakter heter un personnage.',
  },
],

  'fransk-2-7-2': [
  {
    question: 'Hvilken fransk avis regnes som den mest prestisjefylte dagsavisen?',
    options: ['Le Monde', 'L\'Équipe', 'Voici', 'Paris Match'],
    explanation: 'Le Monde er Frankrikes mest prestisjefylte dagsavis. L\'Équipe er en sportsavis.',
  },
  {
    question: 'Hva er "un quotidien"?',
    options: ['En dagsavis', 'Et ukeblad', 'En månedlig tidsskrift', 'En nettside'],
    explanation: 'Un quotidien utgis daglig (quotidien = daglig). Et ukentlig magasin heter un hebdomadaire.',
  },
  {
    question: 'Hva betyr "la une" i avissammenheng?',
    options: ['Forsiden', 'Den første journalisten', 'Klokka ett', 'Lederartikkelen'],
    explanation: 'La une er avisens forside — der de viktigste sakene står.',
  },
  {
    question: 'Hva heter "nyhetene" på muntlig fransk?',
    options: ['les infos', 'les nouvelles choses', 'les journaux', 'les titres'],
    explanation: 'Les informations forkortes til les infos i dagligtale.',
  },
  {
    question: 'Hva betyr "la liberté de la presse"?',
    options: ['Pressefrihet', 'Gratisaviser', 'Pressens makt', 'Friheten til å abonnere'],
    explanation: 'La liberté de la presse = pressefrihet, et grunnprinsipp i franske medier.',
  },
],

  'fransk-2-7-3': [
  {
    question: 'Hvem oppfant kinematografen i 1895?',
    options: ['Brødrene Lumière', 'Georges Méliès', 'Brødrene Pathé', 'Auguste Renoir'],
    explanation: 'Les frères Lumière oppfant kinematografen i 1895 — derfor kalles Frankrike filmens vugge.',
  },
  {
    question: 'Hva betyr "un réalisateur"?',
    options: ['En regissør', 'En skuespiller', 'En produsent', 'En manusforfatter'],
    explanation: 'Un réalisateur / une réalisatrice er en regissør. Skuespiller heter un acteur / une actrice.',
  },
  {
    question: 'Hva handler filmen "Les Intouchables" (2011) om?',
    options: ['Vennskapet mellom en rik lam mann og hans unge pleier', 'En ung kvinne i Paris som hjelper menneskene rundt seg', 'Ungdom i Paris\' forsteder', 'En fransk middag med en "idiot" som gjest'],
    explanation: 'Les Intouchables er komedien/dramaet om vennskapet mellom Philippe og pleieren Driss. Amélie handler om kvinnen i Paris.',
  },
  {
    question: 'Hva er "les sous-titres"?',
    options: ['Undertekster', 'Underoverskrifter i manus', 'Birollene', 'Filmmusikken'],
    explanation: 'Les sous-titres = undertekster. Traileren heter la bande-annonce.',
  },
  {
    question: 'Hvilken sjanger er "un film policier"?',
    options: ['Krim/thriller', 'Komedie', 'Animasjonsfilm', 'Dokumentar'],
    explanation: 'Un film policier er en krimfilm/politifilm. En dokumentar heter un documentaire.',
  },
],

  'fransk-2-7-4': [
  {
    question: 'Hvilken artist er kjent for "La Vie en rose" og "Non, je ne regrette rien"?',
    options: ['Édith Piaf', 'Zaz', 'Stromae', 'Céline Dion'],
    explanation: 'Édith Piaf er den ikoniske chanson-sangerinnen bak La Vie en rose og Non, je ne regrette rien.',
  },
  {
    question: 'Hvilken moderne belgisk artist står bak "Alors on danse" og "Papaoutai"?',
    options: ['Stromae', 'Jacques Brel', 'Daft Punk', 'MC Solaar'],
    explanation: 'Stromae er den belgiske artisten bak Alors on danse og Papaoutai. Jacques Brel er en klassisk belgisk chansonartist.',
  },
  {
    question: 'Hva betyr "les paroles" i musikksammenheng?',
    options: ['Sangteksten', 'Melodien', 'Rytmen', 'Refrenget'],
    explanation: 'Les paroles = sangteksten. Melodien heter la mélodie.',
  },
  {
    question: 'Hva er "la chanson française"?',
    options: ['En tradisjonsrik fransk musikksjanger med vekt på tekst', 'Den franske nasjonalsangen', 'All musikk spilt i Frankrike', 'Fransk folkedans'],
    explanation: 'La chanson française er den klassiske franske visetradisjonen (Piaf, Brel) der teksten står sentralt.',
  },
  {
    question: 'Hva betyr "une chanteuse"?',
    options: ['En sangerinne', 'En sang', 'En kvinnelig musiker', 'En konsert'],
    explanation: 'Une chanteuse er en (kvinnelig) sanger. En sang heter une chanson.',
  },
],

  'fransk-2-8-1': [
  {
    question: 'Hva betyr "le réchauffement climatique"?',
    options: ['Global oppvarming', 'Klimaavkjøling', 'Værvarsling', 'Oppvarming av huset'],
    explanation: 'Le réchauffement climatique = global oppvarming. Klimaendringer heter le changement climatique.',
  },
  {
    question: 'Hva er "le tri sélectif"?',
    options: ['Kildesortering', 'Et selektivt utvalg av varer', 'Naturvern i utvalgte områder', 'En miljøavgift'],
    explanation: 'Le tri sélectif = kildesortering; trier les déchets = å sortere avfall.',
  },
  {
    question: 'Hva legger franskmenn i "la poubelle jaune" (den gule beholderen)?',
    options: ['Plast, metall og papir/papp', 'Glass', 'Restavfall', 'Hageavfall'],
    explanation: 'Gul beholder: plast, metall og papir/papp. Grønn er for glass, grå/svart for restavfall.',
  },
  {
    question: 'Hva betyr "une espèce menacée"?',
    options: ['En truet art', 'En farlig art', 'En sjelden plante', 'Et beskyttet område'],
    explanation: 'Une espèce menacée = en truet art (menacer = å true).',
  },
  {
    question: 'Hva er "l\'empreinte carbone"?',
    options: ['Karbonavtrykket', 'Kullkraftverket', 'CO2-avgiften', 'Karbonfilteret'],
    explanation: 'L\'empreinte carbone = karbonavtrykk — mengden klimagasser man forårsaker.',
  },
],

  'fransk-2-8-2': [
  {
    question: 'Hva tilsvarer "le collège" i det franske skolesystemet?',
    options: ['Ungdomsskolen (ca. 11-15 år)', 'Universitetet', 'Videregående skole', 'Barneskolen'],
    explanation: 'Le collège er ungdomsskolen (11-15 år). Videregående heter le lycée.',
  },
  {
    question: 'Hva er "le baccalauréat" (le bac)?',
    options: ['Avsluttende eksamen på lycée som kreves for universitetet', 'Eksamen etter ungdomsskolen', 'En elitehøyskole', 'Det franske karaktersystemet'],
    explanation: 'Le bac tas siste år på lycée (terminale) og gir adgang til universitetet. Eksamen etter collège heter le brevet.',
  },
  {
    question: 'Hva er "la rentrée"?',
    options: ['Skolestarten i september', 'Skoleferien', 'Friminuttet', 'Innleveringsfristen'],
    explanation: 'La rentrée (scolaire) er skolestarten etter sommerferien, en stor begivenhet i Frankrike.',
  },
  {
    question: 'Hva betyr "une matière"?',
    options: ['Et skolefag', 'Et klasserom', 'En lærebok', 'En karakter'],
    explanation: 'Une matière = et fag. En karakter heter une note.',
  },
  {
    question: 'Hva er "une grande école"?',
    options: ['En prestisjefylt elitehøyskole', 'En stor barneskole', 'En skole med mange elever', 'En internatskole'],
    explanation: 'Les grandes écoles er prestisjefylte høyskoler ved siden av universitetene, med krevende opptak.',
  },
],

  'fransk-2-8-3': [
  {
    question: 'Hva er "une lettre de motivation"?',
    options: ['Et søknadsbrev', 'Et motivasjonsdikt', 'En oppsigelse', 'Et anbefalingsbrev fra sjefen'],
    explanation: 'Une lettre de motivation er søknadsbrevet som følger CV-en når man søker jobb.',
  },
  {
    question: 'Hva betyr "un entretien d\'embauche"?',
    options: ['Et jobbintervju', 'En arbeidskontrakt', 'En lønnsforhandling', 'En medarbeidersamtale'],
    explanation: 'Un entretien d\'embauche = jobbintervju (embaucher = å ansette).',
  },
  {
    question: 'Hva betyr "postuler à un emploi"?',
    options: ['Å søke på en jobb', 'Å si opp en jobb', 'Å utlyse en stilling', 'Å bytte jobb'],
    explanation: 'Postuler à un emploi = å søke på en jobb. En søknad heter une candidature.',
  },
  {
    question: 'Hvilket yrke er "un(e) infirmier/infirmière"?',
    options: ['Sykepleier', 'Lege', 'Advokat', 'Lærer'],
    explanation: 'Infirmier/infirmière = sykepleier. Lege heter un médecin.',
  },
  {
    question: 'Hva kalles delen av en fransk CV som beskriver utdanning?',
    options: ['Formation', 'Expérience professionnelle', 'Centres d\'intérêt', 'État civil'],
    explanation: 'Formation = utdanning. Expérience professionnelle er arbeidserfaring og état civil personopplysninger.',
  },
],

  'fransk-2-8-4': [
  {
    question: 'Hva betyr "Ça te dit de venir au cinéma?"',
    options: ['Har du lyst til å bli med på kino?', 'Sa du at du skal på kino?', 'Hva sier du om kinoen?', 'Hvorfor kommer du ikke på kino?'],
    explanation: '"Ça te dit de...?" er en uformell måte å invitere på: Har du lyst til å...?',
  },
  {
    question: 'Hva betyr "s\'entendre bien avec quelqu\'un"?',
    options: ['Å komme godt overens med noen', 'Å høre noen godt', 'Å bli enig om et tidspunkt', 'Å lytte til noen'],
    explanation: 'S\'entendre bien avec = å komme godt overens med. Det handler ikke om hørsel her.',
  },
  {
    question: 'Hva er "un texto"?',
    options: ['En tekstmelding', 'En lærebok', 'En e-post', 'Et innlegg på sosiale medier'],
    explanation: 'Un texto (eller un SMS) er en tekstmelding. E-post heter un e-mail/un courriel.',
  },
  {
    question: 'Hvordan takker du ja til en invitasjon på fransk?',
    options: ['Avec plaisir!', 'Désolé, je ne peux pas.', 'On se retrouve où?', 'Je suis perdu.'],
    explanation: 'Avec plaisir! = Med glede! "Désolé, je ne peux pas" er å takke nei.',
  },
  {
    question: 'Hva betyr "partager" på sosiale medier?',
    options: ['Å dele', 'Å like', 'Å følge', 'Å kommentere'],
    explanation: 'Partager = å dele. En "liker" heter un "j\'aime", en følger un abonné.',
  },
],

  'fransk-2-9-1': [
  {
    question: 'Hvilken hilsen åpner et formelt brev til en ukjent mottaker?',
    options: ['Madame, Monsieur,', 'Coucou!', 'Salut!', 'Bisous'],
    explanation: '"Madame, Monsieur," er standardåpningen i formelle brev. Salut og Coucou er uformelle, Bisous er en avslutning.',
  },
  {
    question: 'Hvilken avslutning passer i en formell e-post?',
    options: ['Cordialement', 'Bisous', 'À plus!', 'Coucou'],
    explanation: 'Cordialement (vennlig hilsen) er den vanlige formelle avslutningen. Bisous (klemmer/kyss) er for venner.',
  },
  {
    question: 'Hvordan innleder du formelt hvorfor du skriver?',
    options: ['Je vous écris pour...', 'Je t\'écris pour...', 'J\'écris toi pour...', 'Tu sais quoi?'],
    explanation: 'Formelt brukes vous: Je vous écris pour... Uformelt: Je t\'écris pour...',
  },
  {
    question: 'Hva betyr "Je vous remercie de votre réponse"?',
    options: ['Jeg takker Dem for svaret Deres', 'Jeg venter på svaret Deres', 'Jeg minner Dem om svaret', 'Jeg beklager svaret mitt'],
    explanation: 'Remercier de = å takke for. Formell takkemåte i brev.',
  },
  {
    question: 'Hva er riktig rekkefølge i et fransk brev?',
    options: ['Hilsen → innledning → hoveddel → avslutning → høflighetsfrase → underskrift', 'Underskrift → hoveddel → hilsen', 'Hoveddel → hilsen → innledning → underskrift', 'Høflighetsfrase → hoveddel → hilsen → dato'],
    explanation: 'Brevet starter med formule d\'appel (hilsen) og avsluttes med formule de politesse og underskrift.',
  },
],

  'fransk-2-9-2': [
  {
    question: 'Hva betyr "À mon avis"?',
    options: ['Etter min mening', 'På min måte', 'Til min fordel', 'I mitt tilfelle'],
    explanation: 'À mon avis = etter min mening. Tilsvarende: selon moi.',
  },
  {
    question: 'Hvordan sier du at du er helt enig på fransk?',
    options: ['Tout à fait!', 'Au contraire!', 'Pas du tout!', 'Ça dépend.'],
    explanation: 'Tout à fait = helt riktig/absolutt. Au contraire = tvert imot, pas du tout = ikke i det hele tatt.',
  },
  {
    question: 'Hva betyr strukturuttrykket "D\'une part... d\'autre part..."?',
    options: ['På den ene siden... på den andre siden...', 'Først... til slutt...', 'Verken... eller...', 'Både her... og der...'],
    explanation: 'D\'une part... d\'autre part... brukes for å presentere to sider av en sak.',
  },
  {
    question: 'Hvilket uttrykk bruker du for å konkludere en argumenterende tekst?',
    options: ['En conclusion, ...', 'D\'abord, ...', 'Par exemple, ...', 'Cependant, ...'],
    explanation: 'En conclusion / pour conclure innleder konklusjonen. D\'abord = først, cependant = imidlertid.',
  },
  {
    question: 'Hva betyr "Tu as raison"?',
    options: ['Du har rett', 'Du har en grunn', 'Du tar feil', 'Du er fornuftig'],
    explanation: 'Avoir raison = å ha rett. Å ta feil heter avoir tort.',
  },
],

  'fransk-2-9-3': [
  {
    question: 'Hvordan starter man et eventyr på fransk?',
    options: ['Il était une fois...', 'Il sera une fois...', 'Un temps était...', 'Une histoire fois...'],
    explanation: '"Il était une fois..." = "Det var en gang..." — den klassiske eventyråpningen.',
  },
  {
    question: 'Hvilken fortidsform bruker du til å beskrive været og stemningen i en fortelling?',
    options: ['Imparfait', 'Passé composé', 'Futur simple', 'Subjonctif'],
    explanation: 'Bakgrunn og beskrivelser (vær, stemning, utseende) står i imparfait: Il faisait beau.',
  },
  {
    question: 'Hvilken form passer for hovedhandlingen: "Soudain, il ___ ." (crier)?',
    options: ['a crié', 'criait', 'criera', 'crie'],
    explanation: 'En plutselig hendelse i fortellingen står i passé composé: Soudain, il a crié.',
  },
  {
    question: 'Hva betyr "Elle avait les cheveux blonds et les yeux verts"?',
    options: ['Hun hadde blondt hår og grønne øyne', 'Hun har blondt hår og blå øyne', 'Hun farget håret blondt', 'Hun ville ha blondt hår'],
    explanation: 'Imparfait (avait) brukes til beskrivelse i fortid: hun hadde blondt hår og grønne øyne.',
  },
  {
    question: 'Hva betyr "souriant(e)" om en person?',
    options: ['Blid/smilende', 'Sur', 'Sjenert', 'Trøtt'],
    explanation: 'Souriant(e) kommer av sourire (å smile) og betyr blid/smilende.',
  },
],

  'fransk-2-9-4': [
  {
    question: 'Når skal du bruke "vous" i stedet for "tu"?',
    options: ['Med ukjente voksne, lærere og i offisielle situasjoner', 'Med familie og venner', 'Bare i skriftlig fransk', 'Med barn og dyr'],
    explanation: 'Vous brukes formelt: ukjente, lærere, sjefer, eldre. Tu brukes med venner, familie, barn og dyr.',
  },
  {
    question: 'Hva er den formelle varianten av "Je veux un café"?',
    options: ['Je voudrais un café.', 'Donne-moi un café!', 'Café, vite!', 'J\'ai un café.'],
    explanation: 'Kondisjonalis gjør forespørselen høflig: Je voudrais (jeg vil gjerne ha).',
  },
  {
    question: 'Hva er det uformelle/muntlige "J\'sais pas" i standardfransk?',
    options: ['Je ne sais pas.', 'Je ne suis pas.', 'Je ne peux pas.', 'Je ne veux pas.'],
    explanation: 'J\'sais pas / Chais pas er muntlig forkortelse av "Je ne sais pas" (jeg vet ikke).',
  },
  {
    question: 'Hva kjennetegner nektelse i uformell muntlig fransk?',
    options: ['"Ne" droppes ofte: "C\'est pas grave"', '"Pas" droppes ofte: "Je ne sais"', 'Man legger til "point" i alle setninger', 'Nektelse uttrykkes bare med gester'],
    explanation: 'I uformelt talespråk faller ne ofte bort: Je sais pas, c\'est pas grave.',
  },
  {
    question: 'Hva er det formelle alternativet til "Quoi?" når du ikke hørte noe?',
    options: ['Pardon?', 'Hein?', 'Ouais?', 'Bof?'],
    explanation: '"Quoi?" er uhøflig i formelle situasjoner; si heller "Pardon?" eller "Comment?".',
  },
],

  'fransk-2-10-1': [
  {
    question: 'Hvilke verb tar être i passé composé?',
    options: ['Bevegelsesverb og refleksive verb', 'Alle verb på -er', 'Alle uregelrette verb', 'Verb som slutter på -ir'],
    explanation: 'Être brukes med bevegelsesverbene (aller, venir, partir...) og alle refleksive verb. Resten tar avoir.',
  },
  {
    question: 'Hva er riktig imparfait-form: "ils ___" (parler)?',
    options: ['parlaient', 'parlais', 'parlait', 'parlent'],
    explanation: 'Ils/elles-formen i imparfait ender på -aient: ils parlaient.',
  },
  {
    question: 'Hvilken form velger du: "Hier, je ___ un bon film." (voir)?',
    options: ['ai vu', 'voyais', 'verrai', 'vois'],
    explanation: 'Hier (i går) + en avsluttet enkelthendelse → passé composé: j\'ai vu.',
  },
  {
    question: 'Hvilken form velger du: "Quand j\'étais petit, je ___ au foot chaque jour." (jouer)?',
    options: ['jouais', 'ai joué', 'jouerai', 'joue'],
    explanation: 'Vane i fortiden (chaque jour, quand j\'étais petit) → imparfait: je jouais.',
  },
  {
    question: 'Hvilken huskeregel beskriver forholdet mellom de to fortidsformene?',
    options: ['Imparfait er scenen/bakgrunnen, passé composé er handlingen', 'Passé composé er bakgrunnen, imparfait er handlingen', 'Imparfait brukes bare i skrift', 'Passé composé brukes bare om følelser'],
    explanation: 'Tenk film: imparfait setter scenen (Il faisait beau), passé composé driver handlingen (Soudain, il a crié).',
  },
],

  'fransk-2-10-2': [
  {
    question: 'Hvilket pronomen erstatter "à Marie" i "Je parle à Marie"?',
    options: ['lui (Je lui parle)', 'la (Je la parle)', 'y (J\'y parle)', 'en (J\'en parle)'],
    explanation: 'Parler à + person → COI lui: Je lui parle (jeg snakker til henne).',
  },
  {
    question: 'Hvilket pronomen erstatter "les pommes" i "Je mange les pommes"?',
    options: ['les (Je les mange)', 'leur (Je leur mange)', 'en (J\'en mange les)', 'y (J\'y mange)'],
    explanation: 'Direkte objekt i flertall → les: Je les mange.',
  },
  {
    question: 'Hva er COI-pronomenet for "til dem"?',
    options: ['leur', 'les', 'lui', 'eux'],
    explanation: 'Leur = til dem (COI flertall): Je leur téléphone. Les er COD.',
  },
  {
    question: 'Hvilket relativpronomen mangler: "L\'homme ___ parle est mon père."?',
    options: ['qui', 'que', 'dont', 'où'],
    explanation: 'Subjekt i relativsetningen (mannen snakker) → qui + verb: L\'homme qui parle.',
  },
  {
    question: 'Hva erstatter pronomenet "en" i "Je veux du pain" → "J\'en veux"?',
    options: ['de + noe / en mengde (du pain)', 'à + sted', 'et direkte objekt med bestemt artikkel', 'subjektet'],
    explanation: 'En erstatter de/du/de la/des + noe: Je veux du pain → J\'en veux.',
  },
],

  'fransk-2-10-3': [
  {
    question: 'Hvordan dannes kondisjonalis presens?',
    options: ['Infinitiv (futur-stamme) + imparfait-endinger', 'Ils-stamme + -e, -es, -e', 'Avoir i presens + partisipp', 'Nous-stamme + -ais'],
    explanation: 'Kondisjonalis: futur-stammen (infinitiven) + -ais, -ais, -ait, -ions, -iez, -aient: je parlerais.',
  },
  {
    question: 'Hva uttrykker subjonctif i motsetning til kondisjonalis?',
    options: ['Nødvendighet, ønske og følelse etter que-uttrykk', 'Høflige forespørsler', 'Hypotetiske si-setninger', 'Framtidige planer'],
    explanation: 'Subjonctif brukes etter il faut que, je veux que, je suis content que. Kondisjonalis brukes for høflighet og hypoteser.',
  },
  {
    question: 'Hvilken form trenger du i "Il faut que je ___ ." (partir)?',
    options: ['parte (subjonctif)', 'partirais (conditionnel)', 'pars (présent)', 'partirai (futur)'],
    explanation: 'Il faut que utløser subjonctif: que je parte.',
  },
  {
    question: 'Hvilken form trenger du i "Si j\'avais de l\'argent, je ___ ." (voyager)?',
    options: ['voyagerais (conditionnel)', 'voyage (subjonctif)', 'voyagerai (futur)', 'voyageais (imparfait)'],
    explanation: 'Si + imparfait → kondisjonalis i hovedsetningen: je voyagerais.',
  },
  {
    question: 'Hva betyr "Pourriez-vous m\'aider?"',
    options: ['Kunne De hjelpe meg? (høflig)', 'Må dere hjelpe meg?', 'Hjelper dere meg alltid?', 'Hvorfor hjelper De meg?'],
    explanation: 'Pouvoir i kondisjonalis (pourriez) gir en høflig forespørsel: Kunne De hjelpe meg?',
  },
],

  'fransk-2-10-4': [
  {
    question: 'Hvilke tre fortidsformer har du lært i Fransk nivå II?',
    options: ['Passé composé, imparfait og plus-que-parfait', 'Passé simple, imparfait og futur', 'Présent, futur og conditionnel', 'Subjonctif, imparfait og impératif'],
    explanation: 'Kurset dekker passé composé (avsluttet), imparfait (beskrivelse/vane) og plus-que-parfait (fortid før fortiden).',
  },
  {
    question: 'Hva er COI-pronomenet som svarer til subjektet "elle"?',
    options: ['lui', 'la', 'le', 'leur'],
    explanation: 'COI for både il og elle er lui: Je lui parle. COD for elle er la.',
  },
  {
    question: 'Hvilket uttrykk krever subjonctif?',
    options: ['Il faut que...', 'Je sais que...', 'Si j\'avais...', 'Parce que...'],
    explanation: 'Il faut que + subjonctif. Je sais que og parce que tar indikativ; si + imparfait hører til kondisjonalis-setninger.',
  },
  {
    question: 'Hva er riktig si-setning type 2: "Si j\'avais le temps, je ___ ." (venir)?',
    options: ['viendrais', 'viendrai', 'venais', 'vienne'],
    explanation: 'Si + imparfait → conditionnel présent: je viendrais.',
  },
  {
    question: 'Hva betyr "J\'avais déjà mangé quand il est arrivé"?',
    options: ['Jeg hadde allerede spist da han kom', 'Jeg spiste mens han kom', 'Jeg skal spise når han kommer', 'Jeg har nettopp spist fordi han kom'],
    explanation: 'Plus-que-parfait (avais mangé) viser at spisingen skjedde før han kom.',
  },
],

};

export default quizData_fransk_2;
