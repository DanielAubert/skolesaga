import type { QuizQuestion } from './quiz-data';

const quizData_fransk_2: Record<string, QuizQuestion[]> = {


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

  'fransk-2-11-1': [
  {
    question: 'Hvilket land i Vest-Afrika har fransk som offisielt språk og hovedstaden Dakar?',
    options: ['Senegal', 'Marokko', 'Algerie', 'Tunisia'],
    explanation: 'Senegal er et fransktalende land i Vest-Afrika med Dakar som hovedstad.',
  },
  {
    question: 'Hva het den senegalesiske dikteren og presidenten som var sentral i «négritude»-bevegelsen?',
    options: ['Léopold Sédar Senghor', 'Aimé Césaire', 'Victor Hugo', 'Albert Camus'],
    explanation: 'Senghor var poet og Senegals første president, en av grunnleggerne av négritude.',
  },
  {
    question: 'Hvorfor snakkes fransk i mange afrikanske land i dag?',
    options: ['på grunn av den franske kolonihistorien', 'fordi Afrika ligger ved siden av Frankrike', 'fordi fransk er Afrikas eldste språk', 'det er en ren tilfeldighet'],
    explanation: 'Fransk ble innført under kolonitiden og brukes fortsatt som offisielt språk og fellesspråk.',
  },
  {
    question: 'Hva er typisk for språksituasjonen i fransktalende Afrika?',
    options: ['fransk brukes ved siden av flere lokale språk (flerspråklighet)', 'fransk er det eneste språket', 'fransk snakkes bare av turister', 'fransk brukes bare skriftlig'],
    explanation: 'Mange afrikanere er flerspråklige: de bruker fransk i tillegg til ett eller flere lokale morsmål.',
  },
  {
    question: 'Hvilke av disse landene i Nord-Afrika (Maghreb) har sterk fransk språkpåvirkning?',
    options: ['Marokko, Algerie og Tunisia', 'Spania, Italia og Hellas', 'Egypt, Sudan og Libya', 'Kenya, Tanzania og Uganda'],
    explanation: 'Maghreb-landene Marokko, Algerie og Tunisia har omfattende bruk av fransk fra kolonitiden.',
  },
  ],

  'fransk-2-11-2': [
  {
    question: 'I hvilket land ligger den fransktalende provinsen Québec?',
    options: ['Canada', 'USA', 'Frankrike', 'Belgia'],
    explanation: 'Québec er en provins i Canada der fransk er det offisielle språket.',
  },
  {
    question: 'Hva er Québecs offisielle motto, som står på bilskiltene?',
    options: ['Je me souviens', 'Liberté, égalité, fraternité', 'Vive le Québec', 'Bienvenue'],
    explanation: '«Je me souviens» («Jeg husker») er Québecs motto.',
  },
  {
    question: 'Hva kjennetegner québecfransk («le joual» / le québécois)?',
    options: ['egen uttale, eget ordforråd og egne uttrykk', 'det er identisk med parisisk fransk', 'det er egentlig engelsk', 'det skrives med eget alfabet'],
    explanation: 'Québecfransk har sin egen aksent, sitt eget ordforråd og uttrykk som skiller seg fra fransk i Frankrike.',
  },
  {
    question: 'Hvilke karibiske øyer er franske «départements d\'outre-mer» (oversjøiske områder)?',
    options: ['Guadeloupe og Martinique', 'Cuba og Jamaica', 'Sicilia og Sardinia', 'Mallorca og Ibiza'],
    explanation: 'Guadeloupe og Martinique i Antillene er franske oversjøiske departementer.',
  },
  {
    question: 'Hva er «le créole» i fransktalende Karibia?',
    options: ['et eget språk med fransk grunnlag', 'en type fransk mat', 'en fransk dialekt fra Paris', 'navnet på en øy'],
    explanation: 'Kreol er et eget språk basert blant annet på fransk, som snakkes ved siden av fransk på Antillene.',
  },
  ],

  'fransk-2-11-3': [
  {
    question: 'Hvilket land i Sørøst-Asia hadde fransk som kolonispråk og har fortsatt fransk innflytelse?',
    options: ['Vietnam', 'Japan', 'India', 'Thailand'],
    explanation: 'Vietnam (som del av Indokina) var fransk koloni, og fransk innflytelse finnes fortsatt.',
  },
  {
    question: 'Hva het det franske kolonområdet i Sørøst-Asia?',
    options: ['Indokina (l\'Indochine)', 'Polynesia', 'Maghreb', 'Levanten'],
    explanation: 'Indokina (Vietnam, Laos og Kambodsja) var fransk koloniområde i Sørøst-Asia.',
  },
  {
    question: 'Hvilket fransk område i Stillehavet er kjent som «la Nouvelle-Calédonie»?',
    options: ['Ny-Caledonia', 'Tahiti by', 'Madagaskar', 'Réunion'],
    explanation: 'Ny-Caledonia (la Nouvelle-Calédonie) er et fransk territorium i Stillehavet.',
  },
  {
    question: 'Hva er «la Polynésie française» kjent for?',
    options: ['fransk territorium med øyer som Tahiti', 'et land i Asia', 'en fransk by', 'en type fransk dans'],
    explanation: 'Fransk Polynesia omfatter øygrupper i Stillehavet, blant annet Tahiti.',
  },
  {
    question: 'Hva er felles for de fransktalende områdene i Asia og Oseania?',
    options: ['de viser fransk språks globale utbredelse gjennom historie og kolonitid', 'de ligger alle i Europa', 'de snakker bare engelsk', 'de er alle uavhengige nasjoner'],
    explanation: 'Disse områdene illustrerer hvordan fransk har spredt seg globalt, ofte via kolonihistorien.',
  },
  ],

  'fransk-2-11-4': [
  {
    question: 'Hva betyr «la diversité francophone»?',
    options: ['mangfoldet i den fransktalende verden', 'at fransk er likt overalt', 'navnet på en fransk by', 'en fransk høytid'],
    explanation: 'Begrepet viser til det store kulturelle og språklige mangfoldet blant fransktalende.',
  },
  {
    question: 'Hva er en «variété» (varietet) av fransk?',
    options: ['en regional variant med egen uttale og ordforråd', 'en fransk grammatikkfeil', 'et fransk tv-program', 'en type fransk vin'],
    explanation: 'Fransk har mange varieteter (Québec, Belgia, Afrika osv.) med egne særtrekk.',
  },
  {
    question: 'Hva er «l\'identité francophone»?',
    options: ['følelsen av tilhørighet til den fransktalende verden', 'et fransk pass', 'et fransk telefonnummer', 'en fransk lov'],
    explanation: 'Frankofon identitet er en kulturell tilhørighet som deles på tvers av land og kontinenter.',
  },
  {
    question: 'Hva fremmer organisasjonen OIF (Organisation internationale de la Francophonie)?',
    options: ['fransk språk og samarbeid mellom fransktalende land', 'fransk fotball', 'fransk vinproduksjon', 'fransk militærmakt'],
    explanation: 'OIF arbeider for å fremme fransk språk, kultur og samarbeid mellom medlemslandene.',
  },
  {
    question: 'Hvorfor regnes fransk som et viktig verdensspråk?',
    options: ['det snakkes på flere kontinenter av flere hundre millioner mennesker', 'det snakkes bare i Frankrike', 'det er verdens eldste språk', 'det brukes bare i FN'],
    explanation: 'Fransk er offisielt språk i rundt 30 land og brukes globalt i diplomati, kultur og handel.',
  },
  ],

  'fransk-2-12-1': [
  {
    question: 'Hva betyr «un réseau social»?',
    options: ['et sosialt medium', 'en søkemotor', 'en e-postadresse', 'et passord'],
    explanation: '«un réseau social» = et sosialt medium/nettverk.',
  },
  {
    question: 'Hva betyr «publier un post / une publication»?',
    options: ['å legge ut et innlegg', 'å slette en konto', 'å logge inn', 'å laste ned en fil'],
    explanation: '«publier» = å publisere/legge ut; «une publication» = et innlegg.',
  },
  {
    question: 'Hva betyr «un abonné» på sosiale medier?',
    options: ['en følger', 'en administrator', 'en annonse', 'en kommentar'],
    explanation: '«un abonné» = en følger/abonnent. «s\'abonner» = å følge/abonnere.',
  },
  {
    question: 'Hva betyr uttrykket «devenir viral»?',
    options: ['å bli spredt svært raskt på nettet', 'å bli syk', 'å miste passordet', 'å logge ut'],
    explanation: '«devenir viral» = å gå viralt, spre seg raskt på sosiale medier.',
  },
  {
    question: 'Hva er et godt råd om personvern: «Il faut ___ ses données personnelles»?',
    options: ['protéger', 'partager', 'publier', 'oublier'],
    explanation: 'Man bør beskytte («protéger») personopplysningene sine på nett.',
  },
  ],

  'fransk-2-12-2': [
  {
    question: 'Hva betyr «un ordinateur»?',
    options: ['en datamaskin', 'en mobiltelefon', 'et tastatur', 'en skjerm'],
    explanation: '«un ordinateur» = en datamaskin.',
  },
  {
    question: 'Hva betyr «un logiciel»?',
    options: ['en programvare', 'et tastatur', 'en skjerm', 'en mus'],
    explanation: '«un logiciel» = programvare/et program.',
  },
  {
    question: 'Hva er «un clavier»?',
    options: ['et tastatur', 'en skjerm', 'en høyttaler', 'en skriver'],
    explanation: '«un clavier» = et tastatur. «un écran» = en skjerm, «une souris» = en mus.',
  },
  {
    question: 'Hva betyr «télécharger une application»?',
    options: ['å laste ned en app', 'å slette en app', 'å oppdatere systemet', 'å lade telefonen'],
    explanation: '«télécharger» = å laste ned; «une application» = en app.',
  },
  {
    question: 'Hva er «une tablette»?',
    options: ['et nettbrett', 'en bærbar datamaskin', 'en høyttaler', 'et kamera'],
    explanation: '«une tablette» = et nettbrett (mellom telefon og laptop).',
  },
  ],

  'fransk-2-12-3': [
  {
    question: 'Hvordan innleder man en formell e-post på fransk når man ikke kjenner mottakeren?',
    options: ['Madame, Monsieur,', 'Salut!', 'Coucou,', 'Cher copain,'],
    explanation: 'Formelt og upersonlig: «Madame, Monsieur,».',
  },
  {
    question: 'Hva er en passende formell avslutning i en e-post?',
    options: ['Cordialement', 'Bisous', 'A+', 'Coucou'],
    explanation: '«Cordialement» er en høflig, formell avslutning (ca. «vennlig hilsen»).',
  },
  {
    question: 'Hva er «une pièce jointe»?',
    options: ['et vedlegg', 'en signatur', 'et emnefelt', 'en mottaker'],
    explanation: '«une pièce jointe» = et vedlegg i en e-post.',
  },
  {
    question: 'Hva er et godt råd for nettsikkerhet: «Il faut choisir un ___ solide»?',
    options: ['mot de passe', 'clavier', 'écran', 'logiciel'],
    explanation: 'Man bør velge et sterkt passord («un mot de passe solide»).',
  },
  {
    question: 'Hva betyr «l\'hameçonnage» (phishing) i nettsikkerhet?',
    options: ['svindel der man lures til å gi fra seg opplysninger', 'å sende vedlegg', 'å lagre i skyen', 'å oppdatere programvare'],
    explanation: '«l\'hameçonnage» (phishing) er nettsvindel for å lure ut passord og personopplysninger.',
  },
  ],

  'fransk-2-12-4': [
  {
    question: 'Hva betyr «l\'intelligence artificielle (IA)»?',
    options: ['kunstig intelligens', 'et tastatur', 'en søkemotor', 'en datamaskin'],
    explanation: '«l\'intelligence artificielle» (IA) = kunstig intelligens (KI).',
  },
  {
    question: 'Hva betyr «l\'automatisation»?',
    options: ['automatisering', 'en bilfabrikk', 'en app', 'en robot-leke'],
    explanation: '«l\'automatisation» = automatisering, at maskiner overtar oppgaver.',
  },
  {
    question: 'Velg riktig futur: «À l\'avenir, les robots ___ de plus en plus de tâches» (faire).',
    options: ['feront', 'font', 'faisaient', 'fassent'],
    explanation: 'Futur simple av faire for «ils»: feront. «À l\'avenir» (i framtiden) krever futur.',
  },
  {
    question: 'Hvilket uttrykk innleder et argument FOR teknologi i en debatt?',
    options: ['D\'un côté, la technologie facilite la vie ...', 'Au revoir', 'Il était une fois', 'C\'est combien?'],
    explanation: '«D\'un côté ...» («på den ene siden ...») innleder et argument i en avveining.',
  },
  {
    question: 'Hva betyr «poser problème» om teknologi (f.eks. personvern)?',
    options: ['å skape/utgjøre et problem', 'å løse et problem', 'å stille et spørsmål', 'å unngå et problem'],
    explanation: '«poser problème» = å være/skape et problem, f.eks. «La vie privée pose problème».',
  },
  ],

  'fransk-2-13-1': [
  {
    question: 'Hva er «un titre» i en avisartikkel?',
    options: ['overskriften', 'forfatteren', 'datoen', 'bildet'],
    explanation: '«un titre» = tittelen/overskriften.',
  },
  {
    question: 'Hva er «le chapeau» i en avisartikkel?',
    options: ['ingressen (kort innledning under tittelen)', 'avslutningen', 'en hatt på et bilde', 'forfatterens navn'],
    explanation: 'I journalistikk er «le chapeau» ingressen som sammenfatter saken under tittelen.',
  },
  {
    question: 'Hva er en god lesestrategi for en avisartikkel man ikke forstår fullt ut?',
    options: ['lese tittel og ingress for å få hovedinnholdet, og bruke konteksten', 'gi opp umiddelbart', 'oversette hvert eneste ord først', 'bare se på bildene'],
    explanation: 'Å skumlese tittel/ingress og bruke kontekst gir hovedbudskapet uten å forstå hvert ord.',
  },
  {
    question: 'Hva betyr «un fait divers»?',
    options: ['en kort nyhetssak om en hendelse (ofte ulykke/kriminalitet)', 'en sportsreportasje', 'en lederartikkel', 'en værmelding'],
    explanation: '«un fait divers» er en kort notis om en konkret hendelse, ofte kriminalitet eller ulykker.',
  },
  {
    question: 'Hva betyr «une source fiable»?',
    options: ['en pålitelig kilde', 'en utenlandsk avis', 'en falsk nyhet', 'en overskrift'],
    explanation: '«fiable» = pålitelig; kildekritikk handler om å vurdere om kilden er til å stole på.',
  },
  ],

  'fransk-2-13-2': [
  {
    question: 'Hva betyr «À louer» i en boligannonse?',
    options: ['Til leie', 'Til salgs', 'Solgt', 'Ønskes kjøpt'],
    explanation: '«À louer» = til leie. «À vendre» = til salgs.',
  },
  {
    question: 'Hva er «le loyer» i en leieavtale?',
    options: ['leien (det man betaler hver måned)', 'depositumet', 'kontrakten', 'utleieren'],
    explanation: '«le loyer» = husleien.',
  },
  {
    question: 'Hva er «un CV» i forbindelse med en stillingsannonse?',
    options: ['en CV / levnetsløp', 'en lønnsslipp', 'en arbeidskontrakt', 'et stillingsintervju'],
    explanation: '«un CV» (curriculum vitae) er den jobbsøkerens CV.',
  },
  {
    question: 'Hva er «une lettre de motivation»?',
    options: ['et søknadsbrev', 'en oppsigelse', 'en anbefaling', 'en faktura'],
    explanation: '«une lettre de motivation» = søknadsbrevet man sender med CV-en.',
  },
  {
    question: 'Hva betyr «recherche» i en kontaktannonse (f.eks. «recherche colocataire»)?',
    options: ['søker/ønsker', 'tilbyr', 'selger', 'leier ut'],
    explanation: '«recherche» (av chercher) = søker/ønsker.',
  },
  ],

  'fransk-2-13-3': [
  {
    question: 'Hva finner du under «entrées» på en fransk restaurantmeny?',
    options: ['forretter', 'hovedretter', 'desserter', 'drikke'],
    explanation: '«les entrées» = forrettene.',
  },
  {
    question: 'Hva betyr «le plat du jour»?',
    options: ['dagens rett', 'barnemenyen', 'vinkartet', 'regningen'],
    explanation: '«le plat du jour» = dagens rett.',
  },
  {
    question: 'Hva betyr «départ» på en rutetabell?',
    options: ['avgang', 'ankomst', 'forsinkelse', 'perrong'],
    explanation: '«départ» = avgang. «arrivée» = ankomst.',
  },
  {
    question: 'Hva betyr «service compris» på en regning?',
    options: ['betjening (tips) er inkludert', 'maten er gratis', 'menyen er på engelsk', 'restauranten er stengt'],
    explanation: '«service compris» = service/tips er inkludert i prisen.',
  },
  {
    question: 'Hva er «un reçu» / «un ticket de caisse»?',
    options: ['en kvittering', 'en meny', 'en billett til kino', 'en rutetabell'],
    explanation: '«un reçu» / «un ticket de caisse» = en kvittering.',
  },
  ],

  'fransk-2-13-4': [
  {
    question: 'Hva er «une rime» i et dikt?',
    options: ['et rim (like lyder i slutten av verselinjer)', 'et vers', 'et refreng', 'en strofe'],
    explanation: '«une rime» = et rim.',
  },
  {
    question: 'Hva er «une strophe»?',
    options: ['en strofe (gruppe av verselinjer)', 'en enkelt linje', 'et rim', 'en tittel'],
    explanation: '«une strophe» = en strofe (et «vers» i dagligtale).',
  },
  {
    question: 'Hva er «le refrain» i en sang?',
    options: ['refrenget (som gjentas)', 'tittelen', 'introen', 'det første verset'],
    explanation: '«le refrain» = refrenget som gjentas mellom versene.',
  },
  {
    question: 'Hvilken fransk sangerinne er kjent for «La Vie en rose» og «Non, je ne regrette rien»?',
    options: ['Édith Piaf', 'Céline Dion', 'Jeanne d\'Arc', 'Marie Curie'],
    explanation: 'Édith Piaf er en av Frankrikes mest berømte sangerinner.',
  },
  {
    question: 'Hva er «une métaphore» i et dikt?',
    options: ['et bilde/sammenligning uten «som» (overført betydning)', 'et rim', 'et refreng', 'en strofe'],
    explanation: 'En metafor er et språklig bilde som overfører betydning, f.eks. «mitt hjerte er et hav».',
  },
  ],

  'fransk-2-14-1': [
  {
    question: 'Hvilken viktig revolusjon begynte i Frankrike i 1789?',
    options: ['Den franske revolusjon', 'Den industrielle revolusjon', 'Oktoberrevolusjonen', 'Den amerikanske revolusjon'],
    explanation: 'Den franske revolusjon startet i 1789 med blant annet stormingen av Bastillen.',
  },
  {
    question: 'Hva er de tre ordene i Frankrikes nasjonale motto?',
    options: ['Liberté, Égalité, Fraternité', 'Paix, Amour, Liberté', 'Travail, Famille, Patrie', 'Honneur, Gloire, Patrie'],
    explanation: 'Mottoet er «Liberté, Égalité, Fraternité» (frihet, likhet, brorskap).',
  },
  {
    question: 'Hvem var keiseren som tok makten i Frankrike etter revolusjonen?',
    options: ['Napoléon Bonaparte', 'Ludvig XIV', 'Charles de Gaulle', 'Louis Pasteur'],
    explanation: 'Napoléon Bonaparte ble keiser og preget Europa tidlig på 1800-tallet.',
  },
  {
    question: 'Hva markerer datoen 14. juli (le 14 juillet) i fransk historie?',
    options: ['stormingen av Bastillen i 1789', 'frigjøringen i 1945', 'starten på EU', 'Napoléons kroning'],
    explanation: '14. juli minnes stormingen av Bastillen og er Frankrikes nasjonaldag.',
  },
  {
    question: 'Hvem ledet den frie franske motstanden under andre verdenskrig?',
    options: ['Charles de Gaulle', 'Napoléon III', 'Louis XVI', 'Robespierre'],
    explanation: 'General Charles de Gaulle ledet «la France libre» og ble senere president.',
  },
  ],

  'fransk-2-14-2': [
  {
    question: 'Hva slags styreform har Frankrike?',
    options: ['en republikk', 'et monarki', 'et keiserdømme', 'et diktatur'],
    explanation: 'Frankrike er en republikk («la République française»).',
  },
  {
    question: 'Hva heter Frankrikes statsoverhode?',
    options: ['le président de la République', 'le roi', 'le chancelier', 'l\'empereur'],
    explanation: 'Statsoverhodet er presidenten («le président de la République»), valgt av folket.',
  },
  {
    question: 'Hva heter regjeringssjefen i Frankrike?',
    options: ['le Premier ministre', 'le président', 'le maire', 'le sénateur'],
    explanation: 'Regjeringssjefen er statsministeren («le Premier ministre»).',
  },
  {
    question: 'Hva kalles den franske nasjonalforsamlingen?',
    options: ['l\'Assemblée nationale', 'le Sénat seul', 'le Conseil', 'la Mairie'],
    explanation: 'Underhuset i parlamentet heter «l\'Assemblée nationale» (Senatet er overhuset).',
  },
  {
    question: 'Hva heter den franske presidentboligen i Paris?',
    options: ['le palais de l\'Élysée', 'le Louvre', 'Versailles', 'la tour Eiffel'],
    explanation: 'Presidenten holder til i Élysée-palasset («le palais de l\'Élysée»).',
  },
  ],

  'fransk-2-14-3': [
  {
    question: 'Hva er Frankrike i forhold til EU (l\'Union européenne)?',
    options: ['et av grunnleggerlandene', 'aldri vært medlem', 'gikk nettopp ut av EU', 'søker fortsatt om medlemskap'],
    explanation: 'Frankrike er et av de seks landene som grunnla det europeiske samarbeidet.',
  },
  {
    question: 'Hvilken valuta bruker Frankrike?',
    options: ['euro (l\'euro)', 'franc', 'pund', 'krone'],
    explanation: 'Frankrike bruker euro (innført på 2000-tallet, erstattet den franske francen).',
  },
  {
    question: 'I hvilken fransk by ligger Europaparlamentet?',
    options: ['Strasbourg', 'Paris', 'Lyon', 'Marseille'],
    explanation: 'Europaparlamentet har sitt offisielle sete i Strasbourg.',
  },
  {
    question: 'Hva betyr «la coopération internationale»?',
    options: ['internasjonalt samarbeid', 'internasjonal handel kun', 'en fransk lov', 'et fransk parti'],
    explanation: '«la coopération internationale» = internasjonalt samarbeid mellom land.',
  },
  {
    question: 'Hva er Frankrikes rolle i FN (l\'ONU)?',
    options: ['fast medlem av Sikkerhetsrådet med vetorett', 'ikke medlem', 'observatør uten stemmerett', 'leder av FN permanent'],
    explanation: 'Frankrike er ett av fem faste medlemmer av FNs sikkerhetsråd med vetorett.',
  },
  ],

  'fransk-2-14-4': [
  {
    question: 'Hva betyr «l\'environnement» i en samfunnsdebatt?',
    options: ['miljøet', 'økonomien', 'utdanningen', 'helsevesenet'],
    explanation: '«l\'environnement» = miljøet (natur og klima).',
  },
  {
    question: 'Hva betyr «le réchauffement climatique»?',
    options: ['den globale oppvarmingen', 'vinterkulden', 'en værmelding', 'en fransk høytid'],
    explanation: '«le réchauffement climatique» = global oppvarming / klimaendringer.',
  },
  {
    question: 'Hvilket uttrykk innleder et argument på den ENE siden i en debatt?',
    options: ['D\'un côté ...', 'Au revoir ...', 'Il était une fois ...', 'À bientôt ...'],
    explanation: '«D\'un côté ... d\'un autre côté ...» = «på den ene siden ... på den andre siden ...».',
  },
  {
    question: 'Hva betyr «l\'égalité des sexes»?',
    options: ['likestilling mellom kjønnene', 'aldersgrenser', 'skolesystemet', 'ytringsfrihet'],
    explanation: '«l\'égalité des sexes» = likestilling mellom kjønnene, et sentralt samfunnstema.',
  },
  {
    question: 'Hva betyr verbet «débattre»?',
    options: ['å debattere/diskutere', 'å være enig', 'å tie stille', 'å stemme'],
    explanation: '«débattre» = å debattere; «un débat» = en debatt.',
  },
  ],

  'fransk-2-15-1': [
  {
    question: 'Hva er «une liaison» i fransk uttale?',
    options: ['en ellers stum sluttkonsonant uttales foran et ord som begynner på vokal', 'å snakke fort', 'å hviske', 'et stumt h'],
    explanation: 'Liaison: «les amis» uttales med /z/ fordi neste ord begynner på vokal.',
  },
  {
    question: 'Hva er «l\'enchaînement»?',
    options: ['at en uttalt sluttkonsonant kobles til neste ords vokal', 'en stum konsonant', 'et aksenttegn', 'et spørsmål'],
    explanation: 'Enchaînement binder ordene sammen i talestrømmen, f.eks. «il est» glir over i hverandre.',
  },
  {
    question: 'Hva skjer med tonefallet i et fransk ja/nei-spørsmål?',
    options: ['det stiger på slutten', 'det synker på slutten', 'det er helt flatt', 'det forsvinner'],
    explanation: 'I ja/nei-spørsmål uten spørreord stiger intonasjonen mot slutten.',
  },
  {
    question: 'Hvordan uttales bokstavkombinasjonen «ou» (som i «vous»)?',
    options: ['som norsk «u»', 'som norsk «y»', 'som norsk «o»', 'som norsk «æ»'],
    explanation: 'Fransk «ou» uttales som norsk u-lyd: vous, nous, bonjour.',
  },
  {
    question: 'Hvorfor er det viktig å mestre liaison og enchaînement?',
    options: ['for å snakke mer flytende og naturlig fransk', 'for å skrive uten feil', 'for å lære gloser raskere', 'det har ingen betydning'],
    explanation: 'Disse fenomenene gir flyt og naturlig rytme i muntlig fransk.',
  },
  ],

  'fransk-2-15-2': [
  {
    question: 'Hvilket uttrykk bruker du for å si din mening i en diskusjon?',
    options: ['À mon avis, ...', 'Au revoir, ...', 'Il était une fois, ...', 'C\'est combien?'],
    explanation: '«À mon avis ...» = «Etter min mening ...».',
  },
  {
    question: 'Hvordan uttrykker du uenighet høflig?',
    options: ['Je ne suis pas d\'accord, parce que ...', 'Merci beaucoup', 'Bonne nuit', 'D\'accord, tout à fait'],
    explanation: '«Je ne suis pas d\'accord» = «jeg er ikke enig», gjerne fulgt av en begrunnelse.',
  },
  {
    question: 'Hva betyr «D\'un côté ..., d\'un autre côté ...»?',
    options: ['På den ene siden ..., på den andre siden ...', 'Først ..., til slutt ...', 'Her ..., der ...', 'I dag ..., i morgen ...'],
    explanation: 'Uttrykket veier to sider mot hverandre i en argumentasjon.',
  },
  {
    question: 'Hvilket uttrykk innfører en konklusjon i en debatt?',
    options: ['En conclusion / Pour conclure', 'Tout d\'abord', 'Par exemple', 'D\'ailleurs'],
    explanation: '«En conclusion» / «Pour conclure» = «for å konkludere».',
  },
  {
    question: 'Hva betyr «Je suis tout à fait d\'accord»?',
    options: ['Jeg er helt enig', 'Jeg er litt uenig', 'Jeg forstår ikke', 'Det er ikke sant'],
    explanation: '«tout à fait» = helt/fullstendig; «Je suis tout à fait d\'accord» = jeg er helt enig.',
  },
  ],

  'fransk-2-15-3': [
  {
    question: 'Hvordan innleder du gjerne en muntlig presentasjon?',
    options: ['Bonjour, aujourd\'hui je vais vous parler de ...', 'Au revoir et merci', 'L\'addition, s\'il vous plaît', 'C\'est trop cher'],
    explanation: 'En presentasjon innledes ofte med «Je vais vous parler de ...» (jeg skal snakke om ...).',
  },
  {
    question: 'Hvilke bindeord strukturerer en presentasjon i rekkefølge?',
    options: ['D\'abord ..., ensuite ..., enfin ...', 'Oui ..., non ..., peut-être ...', 'Ici ..., là ..., partout ...', 'Hier ..., aujourd\'hui ..., demain ...'],
    explanation: '«D\'abord ..., ensuite ..., enfin ...» = «først ..., deretter ..., til slutt ...».',
  },
  {
    question: 'Hvordan avslutter du en presentasjon?',
    options: ['Pour conclure / Merci de votre attention', 'Bonjour tout le monde', 'Je m\'appelle ...', 'Tournez à droite'],
    explanation: 'Man avrunder med «Pour conclure ...» og «Merci de votre attention».',
  },
  {
    question: 'Hva er et godt råd for en vellykket muntlig presentasjon?',
    options: ['snakke tydelig, ha en klar struktur og ha øyekontakt', 'lese alt ordrett fra arket uten å se opp', 'snakke så fort som mulig', 'bruke bare lange og kompliserte setninger'],
    explanation: 'Tydelig tale, god struktur og øyekontakt gjør presentasjonen lettere å følge.',
  },
  {
    question: 'Hva betyr «Avez-vous des questions?» på slutten av en presentasjon?',
    options: ['Har dere noen spørsmål?', 'Hva er klokka?', 'Hvor bor dere?', 'Liker dere det?'],
    explanation: '«Avez-vous des questions?» åpner for spørsmål fra publikum.',
  },
  ],

  'fransk-2-15-4': [
  {
    question: 'I et jobbintervju, hva betyr spørsmålet «Pourquoi voulez-vous ce poste?»',
    options: ['Hvorfor ønsker du denne stillingen?', 'Hvor gammel er du?', 'Hvor bor du?', 'Hva heter du?'],
    explanation: '«Pourquoi voulez-vous ce poste?» = «Hvorfor ønsker De denne stillingen?».',
  },
  {
    question: 'Hvilket uttrykk passer for å fremheve dine styrker i et intervju?',
    options: ['Je suis motivé(e) et travailleur/travailleuse', 'Je voudrais l\'addition', 'Au secours!', 'C\'est combien?'],
    explanation: 'Man trekker fram positive egenskaper: «Je suis motivé(e) ...» (jeg er motivert ...).',
  },
  {
    question: 'Hvordan klager du høflig på en vare/tjeneste på fransk?',
    options: ['Je voudrais me plaindre / Il y a un problème avec ...', 'Bonne nuit', 'Enchanté', 'Joyeux Noël'],
    explanation: '«se plaindre» = å klage; «Il y a un problème avec ...» innleder en høflig reklamasjon.',
  },
  {
    question: 'I en forhandling, hva betyr «Pouvons-nous trouver un compromis?»',
    options: ['Kan vi finne et kompromiss?', 'Hvor mye koster det?', 'Jeg er ikke interessert', 'Vi ses senere'],
    explanation: '«un compromis» = et kompromiss; uttrykket søker en løsning begge kan godta.',
  },
  {
    question: 'Hvilken høflighetsform bruker man i et jobbintervju med en ukjent arbeidsgiver?',
    options: ['vous', 'tu', 'on', 'je seul'],
    explanation: 'Man bruker høflighetsformen «vous» i formelle situasjoner som jobbintervju.',
  },
  ],

  'fransk-2-16-1': [
  {
    question: 'Når brukes imparfait i stedet for passé composé?',
    options: ['for vaner og beskrivelser i fortiden', 'for plutselige, avsluttede handlinger', 'for framtid', 'for nåtid'],
    explanation: 'Imparfait brukes for beskrivelser, vaner og bakgrunn; passé composé for avsluttede handlinger.',
  },
  {
    question: 'Hvilket hjelpeverb tar bevegelsesverbet «aller» i passé composé?',
    options: ['être', 'avoir', 'faire', 'aller selv'],
    explanation: 'Bevegelsesverb som aller, venir, partir tar «être» i passé composé (med samsvarsbøyning).',
  },
  {
    question: 'Hva er COI-pronomenet for både «il» og «elle»?',
    options: ['lui', 'la', 'le', 'les'],
    explanation: 'COI (indirekte objekt) for il/elle er «lui»: «Je lui parle». COD for elle er «la».',
  },
  {
    question: 'Hvilket uttrykk krever subjonctif?',
    options: ['Il faut que ...', 'Je sais que ...', 'Parce que ...', 'Si + imparfait'],
    explanation: '«Il faut que» + subjonctif. «Je sais que» og «parce que» tar indikativ.',
  },
  {
    question: 'Velg riktig si-setning type 2: «Si j\'avais le temps, je ___ » (venir).',
    options: ['viendrais', 'viendrai', 'venais', 'vienne'],
    explanation: '«Si + imparfait» → conditionnel présent: «je viendrais».',
  },
  ],

  'fransk-2-16-2': [
  {
    question: 'Til hvilken temagruppe hører ordene «le médecin», «l\'infirmière» og «l\'hôpital»?',
    options: ['helse (la santé)', 'transport', 'mat', 'klær'],
    explanation: 'Disse ordene hører til temaet helse: lege, sykepleier, sykehus.',
  },
  {
    question: 'Hvilket ord hører IKKE til temaet «les transports»?',
    options: ['le fromage', 'le train', 'l\'avion', 'le métro'],
    explanation: '«le fromage» (ost) hører til mat, ikke transport.',
  },
  {
    question: 'Hvilke ord hører til temaet «l\'environnement»?',
    options: ['le réchauffement climatique og la pollution', 'le pantalon og la robe', 'le petit déjeuner og le dîner', 'le clavier og l\'écran'],
    explanation: 'Klimaoppvarming og forurensning hører til miljøtemaet.',
  },
  {
    question: 'Hva er en effektiv strategi for å lære gloser tematisk?',
    options: ['gruppere ord etter tema og bruke dem i setninger', 'lære dem i tilfeldig rekkefølge uten kontekst', 'bare oversette uten å øve', 'unngå å gjenta dem'],
    explanation: 'Å gruppere ord tematisk og bruke dem aktivt gir best og mest varig læring.',
  },
  {
    question: 'Til hvilket tema hører «le président», «l\'Assemblée nationale» og «voter»?',
    options: ['politikk (la politique)', 'skole', 'fritid', 'familie'],
    explanation: 'Disse ordene hører til politikk: president, nasjonalforsamling, å stemme.',
  },
  ],

  'fransk-2-16-3': [
  {
    question: 'Hva er en god strategi for lytteforståelse til eksamen?',
    options: ['fange nøkkelord og bruke konteksten, ikke fokusere på hvert ord', 'forsøke å oversette hvert ord mens du lytter', 'gi opp hvis du ikke forstår alt', 'bare lese oppgaveteksten'],
    explanation: 'Effektiv lytting handler om å fange hovedinnholdet via nøkkelord og sammenheng.',
  },
  {
    question: 'Hva bør du gjøre FØRST i en leseforståelsesoppgave?',
    options: ['lese spørsmålene før du leser teksten grundig', 'oversette hele teksten ord for ord', 'svare uten å lese teksten', 'telle ordene'],
    explanation: 'Å lese spørsmålene først gjør at du leter målrettet etter svarene i teksten.',
  },
  {
    question: 'Hva er et godt råd for skriftlig produksjon på eksamen?',
    options: ['planlegge teksten og bruke bindeord for sammenheng', 'skrive flest mulig kompliserte setninger uansett feil', 'aldri sjekke det du har skrevet', 'unngå avsnitt'],
    explanation: 'God struktur, bindeord og en gjennomlesning til slutt løfter en skriftlig besvarelse.',
  },
  {
    question: 'Hvorfor er det lurt å disponere tiden under eksamen?',
    options: ['for å rekke alle delene av oppgaven', 'fordi tid ikke betyr noe', 'for å bruke all tid på første oppgave', 'for å levere så raskt som mulig'],
    explanation: 'Tidsdisponering sikrer at du rekker over alle deloppgavene.',
  },
  {
    question: 'Hva bør du gjøre med ord du ikke kan i en muntlig eksamen?',
    options: ['omformulere med ord du kan', 'tie helt stille', 'bytte til norsk', 'avslutte eksamen'],
    explanation: 'Å omskrive med kjente ord er en sentral kommunikasjonsstrategi når et ord mangler.',
  },
  ],

  'fransk-2-16-4': [
  {
    question: 'Velg riktig passé composé: «Hier, elle ___ allée au cinéma».',
    options: ['est', 'a', 'es', 'ont'],
    explanation: '«aller» tar être: «elle est allée» (med samsvar -e for hunkjønn).',
  },
  {
    question: 'Velg riktig imparfait: «Quand j\'étais petit, je ___ au foot tous les jours» (jouer).',
    options: ['jouais', 'ai joué', 'jouerai', 'joue'],
    explanation: 'Vane i fortid → imparfait: «je jouais». «tous les jours» signaliserer gjentakelse.',
  },
  {
    question: 'Velg riktig subjonctif: «Il faut que tu ___ tes devoirs» (faire).',
    options: ['fasses', 'fais', 'feras', 'faisais'],
    explanation: '«Il faut que» + subjonctif: «que tu fasses».',
  },
  {
    question: 'Velg riktig pronomen: «Tu parles à Marie? – Oui, je ___ parle.»',
    options: ['lui', 'la', 'le', 'les'],
    explanation: '«parler à quelqu\'un» tar indirekte objekt (COI): «lui» for il/elle.',
  },
  {
    question: 'Velg riktig si-setning: «Si j\'avais de l\'argent, je ___ une voiture» (acheter).',
    options: ['achèterais', 'achèterai', 'achetais', 'achète'],
    explanation: 'Hypotetisk «si + imparfait» → conditionnel: «j\'achèterais».',
  },
  ],

};

export default quizData_fransk_2;
