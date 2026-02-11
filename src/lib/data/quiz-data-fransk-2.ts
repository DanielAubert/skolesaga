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


};

export default quizData_fransk_2;
